// discord_app/utils/HighlightJsAnsiLanguage.tsx
let closure_0 = { 1: "bold", 4: "underline" };
let closure_1 = { 30: "black", 31: "red", 32: "green", 33: "yellow", 34: "blue", 35: "magenta", 36: "cyan", 37: "white" };
let closure_2 = { 40: "black", 41: "red", 42: "green", 43: "yellow", 44: "blue", 45: "magenta", 46: "cyan", 47: "white" };
const tmp2 = /\x1B\[(\d+(?:[:;]\d+)*)m/;
let c3 = tmp2;
const regExp = new RegExp("(?=" + tmp2.source + ")");
const result = require("set").fileFinishedImporting("utils/HighlightJsAnsiLanguage.tsx");

export default function highlightJsAnsiLanguage() {
  let length;
  let sum;
  let style = "foreground";
  const items = ["0"];
  HermesBuiltin.arraySpread(["38", "39"], 1);
  let items5 = items;
  const items1 = [...Object.keys(items5)];
  let num = 0;
  items.push.apply(items1);
  const entries = Object.entries(items5);
  const items2 = [
    ...entries.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      const style = tmp;
      return {
        className: "ansi-" + style + "-" + tmp2,
        endsParent: true,
        begin: outer1_4,
        (arg0, data) => {
          const parts = arg0[1].split(";");
          if (undefined === data.data.isOn) {
            data.data.isOn = false;
          }
          const iter = parts[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp4 = closure_0;
            if (nextResult === closure_0) {
              data.data.isOn = true;
            } else {
              let tmp5 = closure_1;
              let tmp6 = nextResult;
              if (closure_1.includes(tmp3)) {
                data.data.isOn = false;
              }
            }
            continue;
          }
          if (!data.data.isOn) {
            data.ignoreMatch();
          }
        }
      };
    })
  ];
  style = "background";
  items5 = undefined;
  const items3 = ["0"];
  HermesBuiltin.arraySpread(["48", "49"], 1);
  items5 = items3;
  const items4 = [...Object.keys(closure_2)];
  items3.push.apply(items4);
  const entries1 = Object.entries(closure_2);
  style = "style";
  items5 = undefined;
  items5 = ["0"];
  HermesBuiltin.arraySpread([], 1);
  const entries2 = Object.entries(style);
  obj = { className: "ansi-control-sequence", begin: closure_3, starts: obj };
  obj = { end: regExp, endsParent: true };
  items2[HermesBuiltin.arraySpread(entries2.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const style = tmp;
    return {
      className: "ansi-" + style + "-" + tmp2,
      endsParent: true,
      begin: outer1_4,
      (arg0, data) => {
        const parts = arg0[1].split(";");
        if (undefined === data.data.isOn) {
          data.data.isOn = false;
        }
        const iter = parts[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp4 = closure_0;
          if (nextResult === closure_0) {
            data.data.isOn = true;
          } else {
            let tmp5 = closure_1;
            let tmp6 = nextResult;
            if (closure_1.includes(tmp3)) {
              data.data.isOn = false;
            }
          }
          continue;
        }
        if (!data.data.isOn) {
          data.ignoreMatch();
        }
      }
    };
  }), HermesBuiltin.arraySpread(entries1.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const style = tmp;
    return {
      className: "ansi-" + style + "-" + tmp2,
      endsParent: true,
      begin: outer1_4,
      (arg0, data) => {
        const parts = arg0[1].split(";");
        if (undefined === data.data.isOn) {
          data.data.isOn = false;
        }
        const iter = parts[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp4 = closure_0;
          if (nextResult === closure_0) {
            data.data.isOn = true;
          } else {
            let tmp5 = closure_1;
            let tmp6 = nextResult;
            if (closure_1.includes(tmp3)) {
              data.data.isOn = false;
            }
          }
          continue;
        }
        if (!data.data.isOn) {
          data.ignoreMatch();
        }
      }
    };
  }), tmp3))] = obj;
  if (0 < items2.length) {
    do {
      sum = num + 1;
      items2[num].contains = items2.slice(sum);
      num = sum;
      length = items2.length;
    } while (sum < length);
  }
  const contains = [{ begin: regExp, contains: items2 }];
  return { contains };
};
export const ANSI_CONTROL_SEQUENCE_RE = tmp2;