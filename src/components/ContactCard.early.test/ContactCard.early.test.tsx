import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ContactCard from "../ContactCard";

// src/components/ContactCard.test.tsx
// Mock react-icons to ensure icons render as expected
jest.mock("react-icons/md", () => ({
  MdDelete: (props: any) => <div {...props}>MdDeleteIcon</div>,
  MdEditSquare: (props: any) => <div {...props}>MdEditSquareIcon</div>,
}));
jest.mock("react-icons/io", () => ({
  IoIosContact: (props: any) => <div {...props}>IoIosContactIcon</div>,
}));

describe("ContactCard() ContactCard method", () => {
  // Happy Paths
  describe("Happy Paths", () => {
    test("renders contact name and email correctly", () => {
      // This test ensures that the component displays the contact's name and email as expected.
      const contact: Contact = {
        name: "John Doe",
        email: "john.doe@example.com",
      };
      render(<ContactCard contact={contact} />);
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    });

    test("renders all icons (contact, edit, delete)", () => {
      // This test ensures that all icons are rendered in the component.
      const contact: Contact = {
        name: "Jane Smith",
        email: "jane.smith@example.com",
      };
      render(<ContactCard contact={contact} />);
      expect(screen.getByText("IoIosContactIcon")).toBeInTheDocument();
      expect(screen.getByText("MdEditSquareIcon")).toBeInTheDocument();
      expect(screen.getByText("MdDeleteIcon")).toBeInTheDocument();
    });

    test("renders with different contact data", () => {
      // This test ensures that the component can render different contact data.
      const contact: Contact = {
        name: "Alice Wonderland",
        email: "alice@wonder.land",
      };
      render(<ContactCard contact={contact} />);
      expect(screen.getByText("Alice Wonderland")).toBeInTheDocument();
      expect(screen.getByText("alice@wonder.land")).toBeInTheDocument();
    });

    test("renders with long name and email", () => {
      // This test ensures that the component can handle and display long names and emails.
      const contact: Contact = {
        name: "A very very very long name that should still render",
        email: "averylongemailaddress@averylongdomainname.com",
      };
      render(<ContactCard contact={contact} />);
      expect(
        screen.getByText("A very very very long name that should still render"),
      ).toBeInTheDocument();
      expect(
        screen.getByText("averylongemailaddress@averylongdomainname.com"),
      ).toBeInTheDocument();
    });
  });

  // Edge Cases
  describe("Edge Cases", () => {
    test("renders with empty name", () => {
      // This test ensures that the component can render when the contact's name is an empty string.
      const contact: Contact = {
        name: "",
        email: "empty.name@example.com",
      };
      render(<ContactCard contact={contact} />);
      expect(screen.getByText("")).toBeInTheDocument();
      expect(screen.getByText("empty.name@example.com")).toBeInTheDocument();
    });

    test("renders with empty email", () => {
      // This test ensures that the component can render when the contact's email is an empty string.
      const contact: Contact = {
        name: "No Email",
        email: "",
      };
      render(<ContactCard contact={contact} />);
      expect(screen.getByText("No Email")).toBeInTheDocument();
      expect(screen.getByText("")).toBeInTheDocument();
    });

    test("renders with special characters in name and email", () => {
      // This test ensures that the component can render names and emails with special characters.
      const contact: Contact = {
        name: "Jöhn Dœ!@#$%^&*()",
        email: "jöhn.dœ+test!@example.com",
      };
      render(<ContactCard contact={contact} />);
      expect(screen.getByText("Jöhn Dœ!@#$%^&*()")).toBeInTheDocument();
      expect(screen.getByText("jöhn.dœ+test!@example.com")).toBeInTheDocument();
    });

    test("renders with whitespace-only name and email", () => {
      // This test ensures that the component can render when the contact's name and email are whitespace.
      const contact: Contact = {
        name: "   ",
        email: "   ",
      };
      render(<ContactCard contact={contact} />);
      expect(screen.getByText("   ")).toBeInTheDocument();
      expect(screen.getAllByText("   ").length).toBeGreaterThanOrEqual(2);
    });
  });
});
