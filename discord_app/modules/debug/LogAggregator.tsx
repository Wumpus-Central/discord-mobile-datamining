// === Module 7: LogAggregator ===

// Module 7 (LogAggregator)
import DequeDefault from "Deque" /* 8 */;

let closure_0 = new DequeDefault(5000);
const size = fn(2);
const result = size.fileFinishedImporting("modules/debug/LogAggregator.tsx");

export const report = function report(category) {
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
  if (typeof category === "string") {
    let obj = { time: null, category: null, message: null };
    const _Date = Date;
    obj.time = Date.now();
    obj.category = category;
    obj.message = tmp;
    closure_0.push(obj);
    let arr = closure_0;
  } else {
    obj = { time: null, category: null, timing: null, message: null };
    const _Date2 = Date;
    obj.time = Date.now();
    ({ name: obj2.category, timing: obj2.timing } = category);
    obj.message = tmp;
    arr = closure_0.push(obj);
  }
  if (arr.length > 5000) {
    do {
      let arr1 = closure_0.shift();
      length = closure_0.length;
    } while (length > 5000);
  }
};
export const clear = function clear() {
  closure_0.clear();
};
export const stringify = function stringify(arg0) {
  closure_0 = arg0;
  const found = closure_0.toArray().filter((category) => {
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
  const toArrayResult = closure_0.toArray();
  if (flag) {
    let reversed = toArrayResult.reverse();
  } else {
    reversed = toArrayResult;
  }
  return reversed;
};