import { Results } from "./types/index";

export function printTap(arg: Results) {
  const results = arg;
  const tapOutput: string[] = [];

  // Pushing the test plan (total number of tests) into the array
  tapOutput.push(`1..${results.length}`);

  // Iterating through each test result and pushing TAP lines into the array
  results.forEach((result, i) => {
    if (result.type === "passed") {
      tapOutput.push(`ok ${result.index} - ${result.test.meta.name}`);
    } else {
      tapOutput.push(`not ok ${result.index} - ${result.test.meta.name}`);
      tapOutput.push(`  ---`);
      tapOutput.push(`  name: ${result.error.name}`);
      tapOutput.push(`  operator: error`);
      if (result.error instanceof Error) {
        tapOutput.push(`  message: ${result.error.message}`);
        tapOutput.push(`  stack: ${result.error.stack}`);
      } else {
        tapOutput.push(`  actual: ${result.error.actual}`);
        tapOutput.push(`  expected: ${result.error.expected}`);
      }
      tapOutput.push(`  ...`);
    }
  });

  return tapOutput.join("\n");
}
