// _runtime/00192_parseHermesStack.js
const re0 = /^ {4}at (.+?)(?: \((native)\)?| \((address at )?(.*?):(\d+):(\d+)\))$/;
const re1 = /^ {4}... skipping (\d+) frames$/;
const re2 = /^ {4}at .*$/;

export default function parseHermesStack(str) {
  let obj3;
  let substr;
  const parts = str.split(/\n/);
  let items = [];
  let num = -1;
  let num2 = 0;
  let num3 = -1;
  let tmp = items;
  if (0 < parts.length) {
    do {
      str = parts[num2];
      let tmp5 = num;
      let items1 = items;
      if (str) {
        let tmp10;
        let match = str.match(re0);
        if (match) {
          let obj2 = { type: "FRAME", functionName: match[1], location: obj3 };
          if ("native" === match[2]) {
            obj3 = { type: "NATIVE" };
          } else if ("address at " === match[3]) {
            let obj5;
            if ("InternalBytecode.js" === match[4]) {
              let obj4 = {
                type: "INTERNAL_BYTECODE",
                sourceUrl: match[4],
                line1Based: Number.parseInt(match[5], 10),
                virtualOffset0Based: Number.parseInt(match[6], 10),
              };
              let _Number6 = Number;
              let _Number7 = Number;
              obj5 = obj4;
            } else {
              obj5 = {
                type: "BYTECODE",
                sourceUrl: match[4],
                line1Based: Number.parseInt(match[5], 10),
                virtualOffset0Based: Number.parseInt(match[6], 10),
              };
              let _Number4 = Number;
              let _Number5 = Number;
            }
            obj3 = obj5;
          } else {
            obj3 = {
              type: "SOURCE",
              sourceUrl: match[4],
              line1Based: Number.parseInt(match[5], 10),
              column1Based: Number.parseInt(match[6], 10),
            };
            let _Number2 = Number;
            let _Number3 = Number;
          }
          tmp10 = obj2;
        } else {
          let match1 = str.match(re1);
          if (match1) {
            let obj = { type: "SKIPPED", count: Number.parseInt(match1[1], 10) };
            let _Number = Number;
            tmp10 = obj;
          }
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
      num2 = num2 + 1;
      num = tmp5;
      items = items1;
      num3 = tmp5;
      tmp = items1;
    } while (num2 < parts.length);
  }
  const obj6 = { message: substr.join("\n"), entries: tmp };
  substr = parts.slice(0, num3 + 1);
  return obj6;
}
