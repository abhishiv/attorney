import { describe, runSuite, printTap } from "./index";

const suite = describe("My first test suite", ({ test }) => {
  test("my test1", ({ expect }) => {
    expect(4).toBe(4);
  });

  test("my test2", ({ expect }) => {
    expect(4).toBe(4);
  });
});

runSuite(suite).then((results) => {
  //  console.log(results);
  console.log(printTap(results));
});
