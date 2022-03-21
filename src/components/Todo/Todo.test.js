import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./index.js";

describe("Todo tests", () => {
	let button, input;

	beforeEach(() => {
		render(<Todo></Todo>);
		button = screen.getByText("Add");
		input = screen.getByLabelText("text-input");
	});

	test("Varsayılan olarak verilen 3 nesne render edilmeli", () => {
		const items = screen.getAllByText(/Item/i);

		expect(items.length).toEqual(3);
	});

	test("Input ve button dökümanda bulunmalı", () => {
		expect(button).toBeInTheDocument();
		expect(input).toBeInTheDocument();
	});

	test("Inputa string girilip butona basılınca listeye eklenmeli", () => {
		//inputu doldur
		const name = "Serdar";
		userEvent.type(input, name);

		//butona tıkla
		userEvent.click(button);

		//assertion
		expect(screen.getByText(name)).toBeInTheDocument();
	});
});
