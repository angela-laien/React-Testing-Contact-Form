import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders correctly", () => {
    render(<ContactForm />);
});

test("contact form add new contacts to contact list", () => {
    const {getByLabelText} = render(<ContactForm />);

    const firstName = getByLabelText(/first name*/i);
    const lastName = getByLabelText(/last name*/i);
    const email = getByLabelText(/email*/i);
    const message = getByLabelText(/message/i);

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(message).toBeInTheDocument();

    fireEvent.change(firstName, {
        target:{name:"firstName", value:"Liz"}
    });
    fireEvent.change(lastName, {
        target:{name:"lastName", value:"Anderson"}
    });
    fireEvent.change(email, {
        target:{name:"email", value:"laienxie@gmail.com"}
    });
    fireEvent.change(message, {
        target:{name:"message", value:"Good Afternoon"}
    });
});