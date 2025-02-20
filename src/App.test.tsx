import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App.tsx testing suite", () => {
  test("App loads with home page displayed", () => {
    render(<App />);
    const textElement = screen.getByText("Welcome to The Digital Vanguard");
    expect(textElement).toBeInTheDocument();
  });
});
