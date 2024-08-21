# exami

⚡ Ultra lean test framework for browser and node.

[![Version](https://img.shields.io/npm/v/exami.svg?color=success&style=flat-square)](https://www.npmjs.com/package/exami)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://github.com/abhishiv/exami/actions/workflows/ci.yml/badge.svg)](https://github.com/abhishiv/exami/actions/workflows/ci.yml)
![Badge size](https://deno.bundlejs.com/badge?q=exami&treeshake=[*]&config={%22cdn%22:%22https://cdn.jsdelivr.net/npm%22})

**npm**: `npm i exami`

**cdn**: https://cdn.jsdelivr.net/npm/exami/+esm

---

Example

```typescript
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
  // console.log(results);
  console.log(printTap(results));
});
```
