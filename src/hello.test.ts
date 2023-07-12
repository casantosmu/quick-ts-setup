import { hello } from "./hello";

test("hello function outputs 'Hello world!'", () => {
  expect(hello()).toBe("Hello world!");
});
