import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';

//Fixed it in ContactForm.js - line 22
test('First name is rendered', () => {
    const {getByLabelText} = render(<ContactForm />);
    getByLabelText(/First Name/i);
})

test('Last name is rendered', () => {
    const {getByLabelText} = render(<ContactForm />);
    getByLabelText(/Last Name/i);
})

test('E-mail is rendered', () => {
    const {getByLabelText} = render(<ContactForm />);
    const email = getByLabelText(/Email/i);

    fireEvent.change(email, { target: { value: 'Email' } });
})