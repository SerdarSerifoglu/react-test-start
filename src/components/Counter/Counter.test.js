import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./index.js";

describe("Counter Tests", () => {
	let count, increaseButton, decreaseButton;
	beforeEach(() => {
		console.log("Her testin başlangıcında bir kere çalışacak");
		render(<Counter></Counter>);
		count = screen.getByText("0");
		increaseButton = screen.getByText("Increase");
		decreaseButton = screen.getByText("Decrease");
	});

	beforeAll(() => {
		console.log("Testlerin başlangıcında sadece bir kere çalışacak");
	});

	afterAll(() => {
		console.log("Testlerin sonunda sadece bir kere çalışacak");
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
