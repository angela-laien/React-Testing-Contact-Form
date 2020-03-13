import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders correctly", () => {
    render(<ContactForm />);
});

test("contact form add new contacts to contact list", () => {
    const {getByLabelText, findByTestId, findByText} = render(<ContactForm />);

    const firstNameInput = getByLabelText(/first name*/i);
    const lastNameInput = getByLabelText(/last name*/i);
    const emailInput = getByLabelText(/email*/i);
    const messageInput = getByLabelText(/message/i);

    expect(firstNameInput).toBeInTheDocument();
    expect(firstNameInput.placeholder).toBe("First Name");
    expect(lastNameInput).toBeInTheDocument();
    expect(lastNameInput.placeholder).toBe("Last Name");
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();

    fireEvent.change(firstNameInput, {
        target:{name:"firstName", value:"Liz"}
    });
    fireEvent.change(lastNameInput, {
        target:{name:"lastName", value:"Anderson"}
    });
    fireEvent.change(emailInput, {
        target:{name:"email", value:"laienxie@gmail.com"}
    });
    fireEvent.change(messageInput, {
        target:{name:"message", value:"Good Afternoon"}
    });

    findByTestId('submit').then(() => {
        fireEvent.click();
    })

    const contacts = findByText(
        `{
            "firstName": "Liz",
            "lastName": "Anderson",
            "email": "laienxie@gmail.com",
            "message": "Good Afternoon"
        }`
    )
});