// _runtime/04455_set.js
const set = new Set(["o", "O", ".", "-", "="]);
arg5.PATTERN_CHARS = set;
arg5.pattern = function pattern(arg0) {
  let num = 0;
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = set;
    let tmp2 = nextResult;
    if (set.has(nextResult)) {
      let tmp11 = num;
      num = num + 1;
      continue;
    } else {
      let tmp4 = globalThis;
      let _TypeError = TypeError;
      let tmp5 = nextResult;
      let tmp6 = num;
      let _HermesInternal = HermesInternal;
      let str = ". Allowed characters are: o O . - =";
      let str2 = "\" at position ";
      let str3 = "pattern(): invalid character \"";
      let tmp7 = new.target;
      let tmp8 = new.target;
      let typeError = new TypeError("pattern(): invalid character \"" + tmp2 + "\" at position " + num + ". Allowed characters are: o O . - =");
      let tmp10 = typeError;
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
      let tmp18 = num2;
      obj[0] = num2;
      let arr = items.push(obj);
      num2 = num2 + 100;
    } else if ("O" === nextResult1) {
      obj = { time: null, type: "transient", intensity: 1, sharpness: 0.8 };
      let tmp16 = num2;
      obj[0] = num2;
      arr = items.push(obj);
      num2 = num2 + 100;
    } else if ("." === nextResult1) {
      let tmp15 = num2;
      num2 = num2 + 150;
    } else if ("-" === nextResult1) {
      let tmp14 = num2;
      num2 = num2 + 400;
    } else if ("=" === nextResult1) {
      let tmp13 = num2;
      num2 = num2 + 1000;
    }
    continue;
  }
  return items;
};