// discord_app/utils/HighlightJsAnsiLanguage.tsx
import size from "../../_runtime/metro/00002__.js";

let closure_0 = { 1: "bold", 4: "underline" };
let closure_1 = {
  30: "black",
  31: "red",
  32: "green",
  33: "yellow",
  34: "blue",
  35: "magenta",
  36: "cyan",
  37: "white",
};
let closure_2 = {
  40: "black",
  41: "red",
  42: "green",
  43: "yellow",
  44: "blue",
  45: "magenta",
  46: "cyan",
  47: "white",
};
const tmp2 = /\x1B\[(\d+(?:[:;]\d+)*)m/;
const re3 = tmp2;
const regExp = new RegExp("(?=" + tmp2.source + ")");
const result = size.fileFinishedImporting("utils/HighlightJsAnsiLanguage.tsx");

export default function highlightJsAnsiLanguage() {
  let items6;
  let length;
  let sum;
  const f89575 = (item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    closure_0 = tmp;
    closure_1 = items5;
    const obj = {
      className: "ansi-" + style + "-" + tmp2,
      endsParent: true,
      begin,
      "on:begin": (arg0, data) => {
        const str = arg0[1];
        const parts = str.split(";");
        if (undefined === data.data.isOn) {
          data.data.isOn = false;
        }
        const iter = parts[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if (nextResult === closure_0) {
            data.data.isOn = true;
          } else if (closure_1.includes(tmp3)) {
            data.data.isOn = false;
          }
          continue;
        }
        if (!data.data.isOn) {
          data.ignoreMatch();
        }
      },
    };
    return obj;
  };
  const foreground = "foreground";
  const items = ["0", ...["38", "39"]];
  const items1 = [...Object.keys(items)];
  let num = 0;
  items.push.apply(items1);
  const entries = Object.entries(items);
  const items2 = [...entries.map(f89575)];
  const background = "background";
  const items3 = ["0", ...["48", "49"]];
  const items4 = [...Object.keys(closure_2)];
  items3.push.apply(items4);
  const entries1 = Object.entries(closure_2);
  const style = "style";
  const items5 = ["0", ...[]];
  const arraySpreadResult = HermesBuiltin.arraySpread(items2, entries1.map(f89575), tmp3);
  const entries2 = Object.entries(foreground);
  let obj = { className: "ansi-control-sequence", begin, starts: { end: regExp, endsParent: true } };
  items2[HermesBuiltin.arraySpread(items2, entries2.map(f89575), arraySpreadResult)] = obj;
  if (0 < items2.length) {
    do {
      sum = num + 1;
      items2[num].contains = items2.slice(sum);
      num = sum;
      length = items2.length;
    } while (sum < length);
  }
  const obj2 = { contains: items6 };
  items6 = [{ begin: regExp, contains: items2 }];
  return obj2;
}
export const ANSI_CONTROL_SEQUENCE_RE = tmp2;
