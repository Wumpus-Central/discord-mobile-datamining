// === Module 192: parseHermesStack ===

// Module 192 (parseHermesStack)
const re0 = /^ {4}at (.+?)(?: \((native)\)?| \((address at )?(.*?):(\d+):(\d+)\))$/;
const re1 = /^ {4}... skipping (\d+) frames$/;
const re2 = /^ {4}at .*$/;
arg5.default = function parseHermesStack(str) {
  const parts = str.split(/\n/);
  let items = [];
  let num = -1;
  let num2 = 0;
  let num3 = -1;
  let tmp = items;
  if (0 < parts.length) {
    while (true) {
      str = parts[num2];
      let tmp2 = num2;
      let tmp3 = num;
      let tmp4 = items;
      let tmp5 = num;
      let items1 = items;
      if (str) {
        let tmp6 = closure_0;
        let match = str.match(closure_0);
        if (match) {
          break;
        } else {
          let tmp8 = closure_1;
          let match1 = str.match(closure_1);
          let tmp10;
          if (match1) {
            let obj = { type: "SKIPPED", count: null };
            let _Number = Number;
            obj[1] = Number.parseInt(match1[1], 10);
            tmp10 = obj;
          }
          if (tmp10) {
            let arr = items.push(tmp10);
            tmp5 = num;
            items1 = items;
          } else {
            let tmp13 = regex;
            tmp5 = num;
            items1 = items;
            if (!regex.test(str)) {
              items1 = [];
              tmp5 = num2;
            }
          }
        }
      }
      num2 = num2 + 1;
      num = tmp5;
      items = items1;
      num3 = tmp5;
      tmp = items1;
    }
    obj = { type: "FRAME", functionName: null, location: null };
    obj[1] = match[1];
    if ("native" === match[2]) {
      obj = { type: "NATIVE" };
    } else if ("address at " === match[3]) {
      if ("InternalBytecode.js" === match[4]) {
        const obj1 = { type: "INTERNAL_BYTECODE", sourceUrl: null, line1Based: null, virtualOffset0Based: null };
        obj1[1] = match[4];
        const _Number6 = Number;
        obj1[2] = Number.parseInt(match[5], 10);
        const _Number7 = Number;
        match = Number.parseInt(match[6], 10);
        obj1[3] = match;
        let obj2 = obj1;
      } else {
        obj2 = { type: "BYTECODE", sourceUrl: null, line1Based: null, virtualOffset0Based: null };
        obj2[1] = match[4];
        const _Number4 = Number;
        obj2[2] = Number.parseInt(match[5], 10);
        const _Number5 = Number;
        obj2[3] = Number.parseInt(match[6], 10);
      }
    } else {
      obj = { type: "SOURCE", sourceUrl: null, line1Based: null, column1Based: null };
      obj[1] = match[4];
      const _Number2 = Number;
      obj[2] = Number.parseInt(match[5], 10);
      const _Number3 = Number;
      obj[3] = Number.parseInt(match[6], 10);
    }
    obj[2] = obj;
  }
  const obj3 = { message: null, entries: null };
  const substr = parts.slice(0, num3 + 1);
  obj3[0] = substr.join("\n");
  obj3[1] = tmp;
  return obj3;
};