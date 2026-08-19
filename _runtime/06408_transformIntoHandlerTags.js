// _runtime/06408_transformIntoHandlerTags.js
import tagMessage from "06382_tagMessage.js";
import _mod6409 from "metro/06409__.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

function transformIntoHandlerTags(config) {
  const mapped = tagMessage.toArray(config).map((item, index) => {
    let num = callback(table[2]).handlerIDToTag[item];
    if (!num) {
      const current = item.current;
      let handlerTag;
      if (current != null) {
        handlerTag = current.handlerTag;
      }
      num = handlerTag;
    }
    if (!num) {
      num = -1;
    }
    return num;
  });
  return mapped.filter((item, index) => item > 0);
}
({ findNodeHandle: c3, Platform } = get_ActivityIndicator);
let closure_5 = [];
let c6 = false;

export const selectProperties = (config, arr) => {
  closure_0 = config;
  const found = arr.filter((item, index) => item in closure_0);
  return Object.fromEntries(found.map((item, index) => {
    const items = [item, table[item]];
    return items;
  }));
};
export const filterConfig = function filterConfig(config, ALLOWED_PROPS, config2) {
  let obj = config2;
  if (config2 === undefined) {
    obj = {};
  }
  obj = {};
  const merged = Object.assign(obj);
  const iter = ALLOWED_PROPS[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let tmp4 = config[nextResult];
    let tmp5 = tmp4;
    let tmp6 = nextResult;
    let tmp7 = tmp4;
    let tmp8 = undefined === tmp4;
    if (!tmp8) {
      let _Object = Object;
      let tmp10 = tmp7 === Object(tmp7);
      if (tmp10) {
        tmp10 = "__isNative" in tmp7;
      }
      tmp8 = tmp10;
    }
    if (!tmp8) {
      tmp8 = "onHandlerStateChange" === tmp6;
    }
    if (!tmp8) {
      tmp8 = "onGestureEvent" === tmp6;
    }
    if (tmp8) {
      continue;
    } else {
      if ("simultaneousHandlers" !== tmp3) {
        if ("waitFor" !== tmp3) {
          let tmp17 = "hitSlop" === tmp3;
          if (tmp17) {
            tmp17 = typeof tmp5 !== "object";
          }
          if (tmp17) {
            obj = { top: null, left: null, bottom: null, right: null };
            obj[0] = tmp5;
            obj[1] = tmp5;
            obj[2] = tmp5;
            obj[3] = tmp5;
            tmp5 = obj;
          }
        }
        obj[tmp3] = tmp5;
      }
      tmp5 = transformIntoHandlerTags(config[tmp3]);
    }
  }
  return obj;
};
export { transformIntoHandlerTags };
export const findNodeHandle = function findNodeHandle(current) {
  let tmp = callback(current);
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
export const scheduleFlushOperations = function scheduleFlushOperations() {
  if (!c6) {
    c6 = true;
    _mod6409.ghQueueMicrotask(() => {
      for (const item10005 of closure_5) {
        let item10005Result = item10005();
        continue;
      }
      closure_5 = [];
      callback(table[4]).flushOperations();
      c6 = false;
    });
  }
};
export const scheduleOperationToBeFlushed = function scheduleOperationToBeFlushed(arg0) {
  if (!c6) {
    c6 = true;
    _mod6409.ghQueueMicrotask(() => {
      for (const item10005 of closure_5) {
        let item10005Result = item10005();
        continue;
      }
      closure_5 = [];
      callback(table[4]).flushOperations();
      c6 = false;
    });
  }
  arr = arr.push(arg0);
};