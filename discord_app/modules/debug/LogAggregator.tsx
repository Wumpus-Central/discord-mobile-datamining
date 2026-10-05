// discord_app/modules/debug/LogAggregator.tsx
import DequeDefault from "../../../_runtime/00008_Deque.js";
import size from "../../../_runtime/metro/00002__.js";

let tmp2 = new DequeDefault(5000);
let closure_0 = tmp2;
const result = size.fileFinishedImporting("modules/debug/LogAggregator.tsx");

export const report = function report(category) {
  let arr;
  let length;
  function stringifyMessage(arg0) {
    let error;
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
  }
  const tmp = stringifyMessage(HermesBuiltin.copyRestArgs());
  if (typeof category === "string") {
    let tmp3 = globalThis;
    const _Date = Date;
    const push = closure_0.push;
    const obj = { time: Date.now(), category, message: tmp };
    push(obj);
    arr = closure_0;
  } else {
    arr = closure_0;
    let tmp7 = globalThis;
    const _Date2 = Date;
    const push2 = closure_0.push;
    ({ name: obj2.category, timing: obj2.timing } = category);
    const obj3 = { time: Date.now(), category: null, timing: null, message: tmp };
    push2(obj3);
  }
  if (arr.length > 5000) {
    do {
      let arr4 = closure_0.shift();
      length = closure_0.length;
    } while (length > 5000);
  }
};
export const clear = function clear() {
  closure_0.clear();
};
export const stringify = function stringify(arg0) {
  closure_0 = arg0;
  const toArrayResult = closure_0.toArray();
  const found = toArrayResult.filter((category) => {
    const hasItem = null == closure_0 || closure_0.includes(category.category);
    return hasItem;
  });
  const mapped = found.map((time) => {
    const items = [];
    const push = items.push;
    const date = new Date(time.time);
    push(date.toISOString());
    if (null != time.timing) {
      items.push(time.timing);
    }
    items.push(time.category, time.message);
    return items.join(" -> ");
  });
  return mapped.join("\n");
};
export const getAllForDebugPanel = function getAllForDebugPanel(arg0) {
  let reversed;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const toArrayResult = closure_0.toArray();
  if (flag) {
    reversed = toArrayResult.reverse();
  } else {
    reversed = toArrayResult;
  }
  return reversed;
};
