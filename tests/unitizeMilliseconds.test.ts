/** @format */

import {
  UnitizedMillisecondsResult,
  unitizeMilliseconds,
} from "../src/unitizeMilliseconds";

describe("unitizeMiliseconds' result structure", () => {
  let result: UnitizedMillisecondsResult;
  beforeEach(() => {
    result = unitizeMilliseconds(123456789);
  });

  const expectedKeys = ["milliseconds", "seconds", "minutes", "hours", "days"];
  expectedKeys.forEach((key) => {
    it(`should contain the key '${key}'`, () => {
      expect(Object.keys(result)).toContain(key);
      expect(Object.keys(result.individual)).toContain(key);
    });
  });
});

describe("unitizeMilliseconds' math should be correct", () => {
  const tests = [
    { in: 3628800000, known: { seconds: 0, minutes: 0, days: 42 } },
    { in: 1000, known: { seconds: 1, minutes: 0, days: 0 } },
    { in: 61000, known: { milliseconds: 0, minutes: 1, seconds: 1 } },
    { in: 1861050, known: { milliseconds: 50, minutes: 31, seconds: 1 } },
    { in: 3661050, known: { milliseconds: 50, minutes: 1, seconds: 1 } },
  ];

  let ix = 0;
  tests.forEach((test) => {
    ix++;
    it(`behaves as expected with known values #${ix}`, () => {
      const o = unitizeMilliseconds(test.in) as any;
      Object.keys(test.known).forEach((unit) => {
        expect((test.known as any)[unit]).toEqual(o[unit]);
      });
    });
  });

  it("can handle negative numbers", () => {
    expect(() => {
      const o = unitizeMilliseconds(-1861050);
      expect(o.minutes).toEqual(31);
    }).not.toThrow();
  });
});
