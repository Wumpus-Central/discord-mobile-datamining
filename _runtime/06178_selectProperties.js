// === Module 6178: selectProperties ===

// Module 6178 (selectProperties)
import handlerIDToTag from "handlerIDToTag" /* 6151 */;
import tagMessage from "tagMessage" /* 6152 */;
import react_nativeDefault from "react-native" /* 6176 */;
import ghQueueMicrotask from "ghQueueMicrotask" /* 6179 */;
import react_native from "react-native" /* 17 */;

let Platform;
let c3;
const f91655 = () => {
  for (const item10005 of closure_5) {
    let item10005Result = item10005();
    continue;
  }
  closure_5 = [];
  const obj = react_nativeDefault;
  obj.flushOperations();
  c6 = false;
};
function transformIntoHandlerTags(blocksHandlers) {
  const obj = tagMessage;
  const toArrayResult = obj.toArray(blocksHandlers);
  const mapped = toArrayResult.map((current) => {
    let num = handlerIDToTag.handlerIDToTag[current];
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
  return mapped.filter((item) => item > 0);
}
({ findNodeHandle: c3, Platform } = react_native);
let closure_5 = [];
let c6 = false;

export const selectProperties = (config, arr) => {
  const found = arr.filter((item) => item in config);
  return fromEntries(found.map((item) => {
    const items = [item, config[item]];
    return items;
  }));
};
export const filterConfig = function filterConfig(config, ALLOWED_PROPS) {
  let obj = config2;
  if (config2 === undefined) {
    obj = {};
  }
  const obj2 = {};
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
    if (!tmp8) {
      if ("simultaneousHandlers" !== tmp3) {
        if ("waitFor" !== tmp3) {
          let tmp17 = "hitSlop" === tmp3;
          if (tmp17) {
            tmp17 = typeof tmp5 !== "object";
          }
          if (tmp17) {
            let rect = { top: tmp5, left: tmp5, bottom: tmp5, right: tmp5 };
            tmp5 = rect;
          }
        }
        obj2[tmp3] = tmp5;
      }
      tmp5 = transformIntoHandlerTags(config[tmp3]);
    }
    continue;
  }
  return obj2;
};
export { transformIntoHandlerTags };
export const findNodeHandle = function findNodeHandle(current) {
  let tmp = _false(current);
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
export const scheduleFlushOperations = function scheduleFlushOperations() {
  const tmp = c6;
  if (!tmp) {
    c6 = true;
    const obj = ghQueueMicrotask;
    obj.ghQueueMicrotask(f91655);
  }
};
export const scheduleOperationToBeFlushed = function scheduleOperationToBeFlushed(arg0) {
  closure_5.push(arg0);
  const tmp2 = c6;
  if (!tmp2) {
    c6 = true;
    let obj = ghQueueMicrotask;
    obj.ghQueueMicrotask(f91655);
  }
};