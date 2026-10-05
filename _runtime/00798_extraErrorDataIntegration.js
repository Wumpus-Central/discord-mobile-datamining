// _runtime/00798_extraErrorDataIntegration.js
import _mod698 from "metro/00698__.js";
import _mod699 from "metro/00699__.js";
import CONSOLE_LEVELS from "00700_CONSOLE_LEVELS.js";
import _mod703 from "metro/00703__.js";
import _mod708 from "metro/00708__.js";
import normalize from "00741_normalize.js";
import 00763__ from "metro/00763__.js";

function _extractErrorData(cause, arg1, maxValueLength) {
  try {
    const items = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"];
    const obj = {};
    const _Object = Object;
    const keys = Object.keys(cause);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp8 = nextResult;
      if (-1 === items.indexOf(nextResult)) {
        let truncateResult;
        let tmp39 = cause[tmp8];
        let tmp40 = tmp39;
        let obj5 = _mod703;
        if (!obj5.isError(tmp39)) {
          let tmp16;
          if (typeof tmp40 !== "string") {
            tmp16 = tmp39;
          }
          obj[tmp8] = tmp16;
        }
        if (maxValueLength) {
          let tmp43Result = _mod708;
          let _HermesInternal2 = HermesInternal;
          truncateResult = tmp43Result.truncate("" + tmp40, maxValueLength);
        } else {
          let _HermesInternal = HermesInternal;
          truncateResult = "" + tmp40;
        }
        tmp16 = truncateResult;
      }
      continue;
    }
    const tmp17 = arg1;
    if (tmp17) {
      if (undefined !== cause.cause) {
        const obj6 = _mod703;
        if (obj6.isError(cause.cause)) {
          const name = cause.cause.name || cause.cause.constructor.name;
          const obj2 = {};
          obj2[name] = _extractErrorData(cause.cause, false, maxValueLength);
          obj.cause = obj2;
        } else {
          obj.cause = cause.cause;
        }
      }
    }
    if (typeof cause.toJSON === "function") {
      const toJSONResult = cause.toJSON();
      const _Object2 = Object;
      const keys1 = Object.keys(toJSONResult);
      const tmp51 = toJSONResult;
      for (const item10058 of keys1) {
        let str1;
        let tmp23 = tmp51[item10058];
        let str2 = tmp23;
        let obj4 = _mod703;
        if (obj4.isError(tmp23)) {
          str1 = str2.toString();
        } else {
          str1 = str2;
        }
        obj[item10058] = str1;
        continue;
      }
    }
    return obj;
  } catch (tmp31) {
    if (_mod699.DEBUG_BUILD) {
      const debug = CONSOLE_LEVELS.debug;
      debug.error("Unable to extract extra data from the Error object:", tmp31);
    }
    return null;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const extraErrorDataIntegration = module_763.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let closure_1;
  const depth = obj.depth;
  let num = 3;
  if (undefined !== depth) {
    num = depth;
  }
  const captureErrorCause = obj.captureErrorCause;
  closure_1 = undefined === captureErrorCause || captureErrorCause;
  let obj2 = {
    name: "ExtraErrorData",
    processEvent(contexts, arg1, getOptions) {
      let obj = arg1;
      const maxValueLength = getOptions.getOptions().maxValueLength;
      if (arg1 === undefined) {
        obj = {};
      }
      let tmp3 = contexts;
      if (obj.originalException) {
        tmp3 = contexts;
        const obj2 = _mod703;
        if (obj2.isError(obj.originalException)) {
          const tmp6 = obj.originalException.name || obj.originalException.constructor.name;
          const tmp8 = _extractErrorData(obj.originalException, closure_1, maxValueLength);
          tmp3 = contexts;
          if (tmp8) {
            const obj3 = {};
            const merged = Object.assign(contexts.contexts);
            const normalizer = normalize;
            const normalizeResult = normalizer.normalize(tmp8, num);
            const tmp4Result = _mod703;
            if (tmp4Result.isPlainObject(normalizeResult)) {
              const tmp4Result2 = _mod698;
              const result = tmp4Result2.addNonEnumerableProperty(normalizeResult, "__sentry_skip_normalization__", true);
              obj3[tmp6] = normalizeResult;
            }
            const obj4 = { contexts: obj3 };
            const merged1 = Object.assign(contexts);
            tmp3 = obj4;
          }
        }
      }
      return tmp3;
    }
  };
  return obj2;
});