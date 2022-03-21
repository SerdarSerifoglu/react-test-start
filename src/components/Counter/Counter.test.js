import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./index.js";

describe("Counter Tests", () => {
	let count, increaseButton, decreaseButton;
	beforeEach(() => {
		render(<Counter></Counter>);
		count = screen.getByText("0");
		increaseButton = screen.getByText("Increase");
		decreaseButton = screen.getByText("Decrease");
	});

	test("increase button", () => {
		userEvent.click(increaseButton);
		expect(count).toHaveTextContent("1");
	});

	test("decrease button", () => {
		userEvent.click(decreaseButton);
		expect(count).toHaveTextContent("1");
	});
});
