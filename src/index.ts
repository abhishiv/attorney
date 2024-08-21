import {
  Suite,
  SuiteMeta,
  SuiteHandler,
  SuiteAttrs,
  TestMeta,
  TestHandler,
  Results,
} from "./types";
import { expect } from "buckwheat";

export * from "./types/index";
export * from "./tap";

export const describe = (meta: string | SuiteMeta, fn: SuiteHandler) => {
  const suite: Suite = {
    type: "Suite",
    meta: typeof meta === "string" ? { name: meta } : meta,
    tests: [],
  };
  const attrs: SuiteAttrs = {
    test: (name: string | TestMeta, fn: TestHandler) => {
      suite.tests.push({
        type: "Test",
        meta: typeof name === "string" ? { name } : name,
        fn: fn,
      });
    },
  };
  fn(attrs);
  return suite;
};

export async function runSuite(suite: Suite) {
  const results: Results = [];
  suite.tests.forEach(async (test, index) => {
    try {
      const fn = test.fn({ expect });
      const result = await Promise.resolve(fn);
      results.push({ index, test, result, type: "passed" });
    } catch (e) {
      results.push({
        index,
        test,
        type: "failed",
        error: e as any,
      });
    }
  });
  return results;
}
