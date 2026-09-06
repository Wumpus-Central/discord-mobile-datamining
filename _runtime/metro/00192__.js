// === Module 192: ? ===

// Module 192
const re0 = /^ {4}at (.+?)(?: \((native)\)?| \((address at )?(.*?):(\d+):(\d+)\))$/;
const re1 = /^ {4}... skipping (\d+) frames$/;
const re2 = /^ {4}at .*$/;

export default function parseHermesStack(str) {
  const parts = str.split(/\n/);
  let items = [];
  let num = -1;
  let num2 = 0;
  let num3 = -1;
  let tmp = items;
  if (0 < parts.length) {
    while (true) {
      str = parts[num2];
      let tmp5 = num;
      let items1 = items;
      if (str) {
        let match = str.match(re0);
        if (match) {
          break;
        } else {
          let match1 = str.match(re1);
          let tmp10;
          if (match1) {
            let obj = { type: "SKIPPED", count: null };
            let _Number = Number;
            obj.count = Number.parseInt(match1[1], 10);
            tmp10 = obj;
          }
          if (tmp10) {
            let arr = items.push(tmp10);
            tmp5 = num;
            items1 = items;
          } else {
            tmp5 = num;
            items1 = items;
            if (!re2.test(str)) {
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
    obj = { type: "FRAME", functionName: match[1], location: null };
    if ("native" === match[2]) {
      obj = { type: "NATIVE" };
    } else if ("address at " === match[3]) {
      if ("InternalBytecode.js" === match[4]) {
        const obj1 = { type: "INTERNAL_BYTECODE", sourceUrl: match[4], line1Based: null, virtualOffset0Based: null };
        const _Number6 = Number;
        obj1.line1Based = Number.parseInt(match[5], 10);
        const _Number7 = Number;
        match = Number.parseInt(match[6], 10);
        obj1.virtualOffset0Based = match;
        let obj2 = obj1;
      } else {
        obj2 = { type: "BYTECODE", sourceUrl: match[4], line1Based: null, virtualOffset0Based: null };
        const _Number4 = Number;
        obj2.line1Based = Number.parseInt(match[5], 10);
        const _Number5 = Number;
        obj2.virtualOffset0Based = Number.parseInt(match[6], 10);
      }
    } else {
      obj = { type: "SOURCE", sourceUrl: match[4], line1Based: null, column1Based: null };
      const _Number2 = Number;
      obj.line1Based = Number.parseInt(match[5], 10);
      const _Number3 = Number;
      obj.column1Based = Number.parseInt(match[6], 10);
    }
    obj.location = obj;
  }
  const obj3 = { message: null, entries: null };
  const substr = parts.slice(0, num3 + 1);
  obj3.message = substr.join("\n");
  obj3.entries = tmp;
  return obj3;
};