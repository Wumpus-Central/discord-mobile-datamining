// === Module 6686: transformIntoHandlerTags ===

// Module 6686 (transformIntoHandlerTags)
import tagMessage from "tagMessage" /* 6660 */;
import _mod6687 from "module_6687" /* 6687 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

function transformIntoHandlerTags(arg0) {
  const obj = tagMessage;
  const mapped = tagMessage.toArray(arg0).map((current) => {
    let num = callback(table[2]).handlerIDToTag[current];
    if (!num) {
      current = current.current;
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
  return mapped.filter((arg0) => arg0 > 0);
}
({ findNodeHandle: c3, Platform } = get_ActivityIndicator);
let closure_5 = [];
let c6 = false;

export const selectProperties = (arg0, arr) => {
  closure_0 = arg0;
  const found = arr.filter((arg0) => arg0 in closure_0);
  return Object.fromEntries(found.map((arg0) => {
    const items = [arg0, table[arg0]];
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
      let tmp9 = tmp4;
      let _Object = Object;
      let tmp10 = tmp7 === Object(tmp7);
      if (tmp10) {
        let tmp11 = tmp4;
        tmp10 = "__isNative" in tmp7;
      }
      tmp8 = tmp10;
    }
    if (!tmp8) {
      let tmp12 = nextResult;
      tmp8 = "onHandlerStateChange" === tmp6;
    }
    if (!tmp8) {
      let tmp13 = nextResult;
      tmp8 = "onGestureEvent" === tmp6;
    }
    if (tmp8) {
      continue;
    } else {
      let tmp14 = nextResult;
      if ("simultaneousHandlers" !== tmp3) {
        let tmp15 = nextResult;
        if ("waitFor" !== tmp3) {
          let tmp16 = nextResult;
          let tmp17 = "hitSlop" === tmp3;
          if (tmp17) {
            let tmp18 = tmp5;
            tmp17 = typeof tmp5 !== "object";
          }
          if (tmp17) {
            obj = { top: null, left: null, bottom: null, right: null };
            let tmp19 = tmp5;
            obj[0] = tmp5;
            obj[1] = tmp5;
            obj[2] = tmp5;
            obj[3] = tmp5;
            tmp5 = obj;
          }
        }
        let tmp22 = nextResult;
        let tmp23 = tmp5;
        obj[tmp3] = tmp5;
      }
      let tmp20 = transformIntoHandlerTags;
      let tmp21 = nextResult;
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
    _mod6687.ghQueueMicrotask(() => {
      for (const item10005 of closure_5) {
        let item10005Result = item10005();
        continue;
      }
      closure_5 = [];
      callback(table[4]).flushOperations();
      c6 = false;
    });
    const obj = _mod6687;
  }
};
export const scheduleOperationToBeFlushed = function scheduleOperationToBeFlushed(arg0) {
  if (!c6) {
    c6 = true;
    _mod6687.ghQueueMicrotask(() => {
      for (const item10005 of closure_5) {
        let item10005Result = item10005();
        continue;
      }
      closure_5 = [];
      callback(table[4]).flushOperations();
      c6 = false;
    });
    const obj = _mod6687;
  }
};