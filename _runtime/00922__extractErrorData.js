// === Module 922: _extractErrorData ===

// Module 922 (_extractErrorData)
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 823 */;
import consoleSandbox from "consoleSandbox" /* 824 */;
import isInstanceOf from "isInstanceOf" /* 827 */;
import isMatchingPattern from "isMatchingPattern" /* 832 */;
import setupIntegration from "setupIntegration" /* 887 */;

function _extractErrorData(cause) {
  try {
    const items = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"];
    let obj = {};
    const _Object = Object;
    const keys = Object.keys(cause);
    const iter = keys[Symbol.iterator]();
    let str = "";
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp9 = nextResult;
      if (-1 !== items.indexOf(nextResult)) {
        continue;
      } else {
        let tmp40 = cause[tmp9];
        let tmp41 = tmp40;
        let obj5 = isInstanceOf;
        if (!obj5.isError(tmp40)) {
          if (typeof tmp41 !== "string") {
            obj[tmp9] = tmp41;
          }
        }
        if (arg2) {
          let tmp44Result = isMatchingPattern;
          let _HermesInternal2 = HermesInternal;
          let truncateResult = tmp44Result.truncate("" + tmp41, arg2);
        } else {
          let _HermesInternal = HermesInternal;
          truncateResult = "" + tmp41;
        }
      }
    }
    if (arg1) {
      if (undefined !== cause.cause) {
        if (obj6.isError(cause.cause)) {
          let name = cause.cause.name;
          if (!name) {
            name = cause.cause.constructor.name;
          }
          obj = {};
          obj[name] = _extractErrorData(cause.cause, false, arg2);
          obj.cause = obj;
        } else {
          obj.cause = cause.cause;
        }
        obj6 = isInstanceOf;
      }
    }
    if (typeof cause.toJSON === "function") {
      const toJSONResult = cause.toJSON();
      const _Object2 = Object;
      const keys1 = Object.keys(toJSONResult);
      for (const item10058 of keys1) {
        let tmp24 = tmp53[item10058];
        let str2 = tmp24;
        let obj4 = isInstanceOf;
        if (obj4.isError(tmp24)) {
          str = str2.toString();
        } else {
          str = str2;
        }
        obj[item10058] = str;
        continue;
      }
      const tmp53 = toJSONResult;
    }
    return obj;
  } catch (tmp32) {
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug = consoleSandbox.debug;
      debug.error("Unable to extract extra data from the Error object:", tmp32);
    }
    return null;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const extraErrorDataIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  closure_1 = undefined;
  const depth = obj.depth;
  const captureErrorCause = obj.captureErrorCause;
  closure_1 = undefined === captureErrorCause || captureErrorCause;
  obj = {
    name: "ExtraErrorData",
    processEvent(contexts, arg1, getOptions) {
      let obj = arg1;
      if (arg1 === undefined) {
        obj = {};
      }
      let tmp3 = contexts;
      if (obj.originalException) {
        tmp3 = contexts;
        if (obj2.isError(obj.originalException)) {
          const tmp8 = _extractErrorData(obj.originalException, table, getOptions.getOptions().maxValueLength);
          tmp3 = contexts;
          if (tmp8) {
            obj = {};
            const merged = Object.assign(contexts.contexts);
            const normalizer = num(table[2]);
            const normalizeResult = normalizer.normalize(tmp8, num);
            let tmp4Result = num(table[1]);
            if (tmp4Result.isPlainObject(normalizeResult)) {
              tmp4Result = num(table[3]);
              const result = tmp4Result.addNonEnumerableProperty(normalizeResult, "__sentry_skip_normalization__", true);
              obj[tmp6] = normalizeResult;
            }
            obj = {};
            const merged1 = Object.assign(contexts);
            obj.contexts = obj;
            tmp3 = obj;
          }
          tmp6 = obj.originalException.name || obj.originalException.constructor.name;
        }
        obj2 = num(table[1]);
      }
      return tmp3;
    }
  };
  return obj;
});