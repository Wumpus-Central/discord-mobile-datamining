// === Module 4537: PATTERN_CHARS ===

// Module 4537 (PATTERN_CHARS)
const set = new Set(["o", "O", ".", "-", "="]);

export const PATTERN_CHARS = set;
export const pattern = function pattern(arg0) {
  let num = 0;
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (set.has(nextResult)) {
      num = num + 1;
      continue;
    } else {
      let tmp4 = globalThis;
      let _TypeError = TypeError;
      let _HermesInternal = HermesInternal;
      let str = ". Allowed characters are: o O . - =";
      let str2 = "\" at position ";
      let str3 = "pattern(): invalid character \"";
      let tmp7 = new.target;
      let tmp8 = new.target;
      let typeError = new TypeError("pattern(): invalid character \"" + tmp2 + "\" at position " + num + ". Allowed characters are: o O . - =");
      throw typeError;
    }
  }
  const items = [];
  let num2 = 0;
  const iter2 = arg0[Symbol.iterator]();
  const nextResult1 = iter2.next();
  while (iter2 !== undefined) {
    if ("o" === nextResult1) {
      let obj = { time: null, type: "transient", intensity: 0.4, sharpness: 0.4 };
      obj.time = num2;
      let arr = items.push(obj);
      num2 = num2 + 100;
    } else if ("O" === nextResult1) {
      obj = { time: null, type: "transient", intensity: 1, sharpness: 0.8 };
      obj.time = num2;
      arr = items.push(obj);
      num2 = num2 + 100;
    } else if ("." === nextResult1) {
      num2 = num2 + 150;
    } else if ("-" === nextResult1) {
      num2 = num2 + 400;
    } else if ("=" === nextResult1) {
      num2 = num2 + 1000;
    }
    continue;
  }
  return items;
};