// discord_app/modules/debug/LogAggregator.tsx
import DequeDefault from "../../../_runtime/00008_Deque.js";

let closure_0 = new DequeDefault(5000);
let tmp2 = new DequeDefault(5000);
const result = require("obj132").fileFinishedImporting("modules/debug/LogAggregator.tsx");

export const report = function report(str) {
  let length;
  const tmp = (function stringifyMessage(arg0) {
    let str = "";
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    for (; iter !== undefined; str = str + (error + " ")) {
      error = nextResult;
      let tmp2 = typeof nextResult;
      if (typeof nextResult !== "string") {
        if ("number" !== tmp2) {
          if ("boolean" !== tmp2) {
            let _Error = Error;
            if (error instanceof Error) {
              let _HermesInternal = HermesInternal;
              str = `` + error.message + "\n" + error.stack + " ";
            } else {
              let _JSON = JSON;
              str = str + (JSON.stringify(error) + " ");
            }
          }
          continue;
        }
      }
    }
    return str;
  })(HermesBuiltin.copyRestArgs());
  if (typeof str === "string") {
    let obj = { time: null, category: null, message: null };
    const _Date = Date;
    obj[0] = Date.now();
    obj[1] = str;
    obj[2] = tmp;
    arr = arr.push(obj);
  } else {
    obj = { time: null, category: null, timing: null, message: null };
    const _Date2 = Date;
    obj[0] = Date.now();
    ({ name: obj2[1], timing: obj2[2] } = str);
    obj[3] = tmp;
    arr = arr.push(obj);
  }
  if (arr.length > 5000) {
    do {
      let arr1 = arr.shift();
      length = arr.length;
    } while (length > 5000);
  }
};
export const clear = function clear() {
  arr.clear();
};
export const stringify = function stringify(arg0) {
  const found = arg0.toArray().filter((item, index) => {
    let hasItem = null == closure_0;
    if (!hasItem) {
      hasItem = closure_0.includes(item.category);
    }
    return hasItem;
  });
  const mapped = found.map((item, index) => {
    const items = [];
    items.push(new Date(item.time).toISOString());
    if (null != item.timing) {
      items.push(item.timing);
    }
    items.push(item.category, item.message);
    return items.join(" -> ");
  });
  return mapped.join("\n");
};
export const getAllForDebugPanel = function getAllForDebugPanel(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const toArrayResult = arr.toArray();
  if (flag) {
    let reversed = toArrayResult.reverse();
  } else {
    reversed = toArrayResult;
  }
  return reversed;
};