import { expect } from "buckwheat";

export type SuiteAttrs = { test: TestDefinition };
export type SuiteHandler = (attrs: SuiteAttrs) => void;

export type TestAttrs = { expect: typeof expect };
export type TestHandler = (attrs: TestAttrs) => void;

export type SuiteMeta = { name: string };
export type TestMeta = { name: string };

export type TestDefinition = (name: string | TestMeta, fn: TestHandler) => void;

export type Test = { type: "Test"; meta: TestMeta; fn: TestHandler };
export type Suite = { type: "Suite"; meta: SuiteMeta; tests: Test[] };

export type PassedResult = {
  index: number;
  type: "passed";
  test: Test;
  result: any;
};
export type FailedResult = {
  index: number;
  type: "failed";
  test: Test;
  error: { name: string; actual: any; expected: any } | Error;
};
export type Results = (PassedResult | FailedResult)[];
