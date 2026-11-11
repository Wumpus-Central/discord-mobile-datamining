// _runtime/05566_transformIntoHandlerTags.js
import handlerIDToTag from "05538_handlerIDToTag.js";
import tagMessage from "05539_tagMessage.js";
import RNGestureHandlerModuleDefault from "05564_RNGestureHandlerModule.js";
import validateHitSlop from "05567_validateHitSlop.js";
import ghQueueMicrotask from "05568_ghQueueMicrotask.js";
import get_ActivityIndicator from "metro/00017__.js";

function transformIntoHandlerTags(items) {
  const mapped = tagMessage.toArray(items).map((current) => {
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

export (config, arr) => {
  closure_0 = config;
  const found = arr.filter((item) => item in closure_0);
  return Object.fromEntries(found.map((item) => {
    items = [item, closure_0[item]];
    return items;
  }));
}
export function filterConfig(config, ALLOWED_PROPS) {
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
    let normalizeHitSlopResult = tmp4;
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
          if ("hitSlop" === tmp3) {
            let obj3 = validateHitSlop;
            normalizeHitSlopResult = obj3.normalizeHitSlop(normalizeHitSlopResult);
          }
        }
        obj2[tmp3] = normalizeHitSlopResult;
      }
      normalizeHitSlopResult = transformIntoHandlerTags(config[tmp3]);
    }
  }
  return obj2;
}
export { transformIntoHandlerTags };
export function findNodeHandle(current) {
  let tmp = React3(current);
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
}
export function scheduleFlushOperations() {
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
}
export function scheduleOperationToBeFlushed(arg0) {
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
}