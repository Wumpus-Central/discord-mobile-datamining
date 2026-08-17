// discord_app/modules/debug/LogAggregator.tsx
import DequeDefault from "Deque" /* 8 */;

let closure_0 = new DequeDefault(5000);
let tmp2 = new DequeDefault(5000);
const result = require("set").fileFinishedImporting("modules/debug/LogAggregator.tsx");

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
        let tmp10 = tmp2;
        if ("number" !== tmp2) {
          let tmp3 = tmp2;
          if ("boolean" !== tmp2) {
            let tmp4 = nextResult;
            let _Error = Error;
            let tmp5 = str;
            if (error instanceof Error) {
              let tmp7 = nextResult;
              let _HermesInternal = HermesInternal;
              str = `` + error.message + "\n" + error.stack + " ";
            } else {
              let _JSON = JSON;
              let tmp6 = nextResult;
              str = str + (JSON.stringify(error) + " ");
            }
          }
          continue;
        }
      }
      let tmp8 = str;
      let tmp9 = nextResult;
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
      let tmp5 = arr;
      let arr1 = arr.shift();
      length = arr.length;
    } while (length > 5000);
  }
};
export const clear = function clear() {
  arr.clear();
};
export const stringify = function stringify(arg0) {
  const found = arg0.toArray().filter((category) => {
    let hasItem = null == closure_0;
    if (!hasItem) {
      hasItem = closure_0.includes(category.category);
    }
    return hasItem;
  });
  const mapped = found.map((time) => {
    const items = [];
    items.push(new Date(time.time).toISOString());
    if (null != time.timing) {
      items.push(time.timing);
    }
    items.push(time.category, time.message);
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