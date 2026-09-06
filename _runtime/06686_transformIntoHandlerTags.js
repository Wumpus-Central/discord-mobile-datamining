// _runtime/06686_transformIntoHandlerTags.js
import handlerIDToTag from "06659_handlerIDToTag.js";
import tagMessage from "06660_tagMessage.js";
import RNGestureHandlerModuleDefault from "06684_RNGestureHandlerModule.js";
import ghQueueMicrotask from "06687_ghQueueMicrotask.js";
import get_ActivityIndicator from "metro/00017__.js";

function transformIntoHandlerTags(blocksHandlers) {
  const mapped = tagMessage.toArray(blocksHandlers).map((current) => {
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
({ findNodeHandle: c3, Platform } = get_ActivityIndicator);
let closure_5 = [];
let c6 = false;

export const selectProperties = (config, arr) => {
  closure_0 = config;
  const found = arr.filter((item) => item in closure_0);
  return Object.fromEntries(
    found.map((item) => {
      const items = [item, closure_0[item]];
      return items;
    }),
  );
};
export const filterConfig = function filterConfig(config, ALLOWED_PROPS) {
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
            let rect = { top: null, left: null, bottom: null, right: null };
            rect.top = tmp5;
            rect.left = tmp5;
            rect.bottom = tmp5;
            rect.right = tmp5;
            tmp5 = rect;
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
  let tmp = React3(current);
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
export const scheduleFlushOperations = function scheduleFlushOperations() {
  if (!c6) {
    c6 = true;
    ghQueueMicrotask.ghQueueMicrotask(() => {
      for (const item10005 of closure_5) {
        let item10005Result = item10005();
        continue;
      }
      closure_5 = [];
      RNGestureHandlerModuleDefault.flushOperations();
      c6 = false;
    });
  }
};
export const scheduleOperationToBeFlushed = function scheduleOperationToBeFlushed(arg0) {
  closure_5.push(arg0);
  if (!c6) {
    c6 = true;
    ghQueueMicrotask.ghQueueMicrotask(() => {
      for (const item10005 of closure_5) {
        let item10005Result = item10005();
        continue;
      }
      closure_5 = [];
      RNGestureHandlerModuleDefault.flushOperations();
      c6 = false;
    });
  }
};
