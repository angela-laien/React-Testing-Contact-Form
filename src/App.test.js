import React from "react";
import { render, fireEvent} from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("first name on the form", () => {
  const {getByText} = render(<App />);
  const firstName = getByText(/first name/i);
  expect(firstName).toBeInTheDocument();
});

test("last name on the form", () => {
  const {getByText} = render(<App />);
  const lastName = getByText(/last name/i);
  expect(lastName).toBeInTheDocument();
});

test("email on the form", () => {
  const {getByText} = render(<App />);
  const email = getByText(/email/i);
  expect(email).toBeInTheDocument();
});

test("message on the form", () => {
  const {getByText} = render(<App />);
  const message = getByText(/message/i);
  expect(message).toBeInTheDocument();
});