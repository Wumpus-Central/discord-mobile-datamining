// _runtime/00922__extractErrorData.js
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 823 */;
import consoleSandbox from "consoleSandbox" /* 824 */;
import isInstanceOf from "isInstanceOf" /* 827 */;
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
      let tmp10 = items;
      if (-1 !== items.indexOf(nextResult)) {
        continue;
      } else {
        let tmp39 = nextResult;
        let tmp40 = cause[tmp9];
        let tmp41 = tmp40;
        let tmp42 = obj;
        let tmp43 = require;
        let tmp44 = require;
        let tmp45 = dependencyMap;
        let tmp46 = dependencyMap;
        let obj5 = isInstanceOf;
        if (!obj5.isError(tmp40)) {
          let tmp11 = tmp40;
          if (typeof tmp41 !== "string") {
            let tmp47 = tmp40;
            obj[tmp9] = tmp41;
          }
        }
        if (arg2) {
          let tmp14 = tmp43;
          let tmp15 = tmp45;
          let tmp44Result = tmp44(832);
          let tmp16 = tmp40;
          let _HermesInternal2 = HermesInternal;
          let truncateResult = tmp44Result.truncate("" + tmp41, arg2);
        } else {
          let tmp12 = tmp40;
          let _HermesInternal = HermesInternal;
          truncateResult = "" + tmp41;
        }
        let tmp17 = truncateResult;
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
        let tmp23 = toJSONResult;
        let tmp24 = tmp53[item10058];
        let str2 = tmp24;
        let tmp25 = obj;
        let tmp26 = require;
        let tmp27 = require;
        let tmp28 = dependencyMap;
        let tmp29 = dependencyMap;
        let obj4 = isInstanceOf;
        let tmp30 = tmp24;
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
  let num;
  closure_1 = undefined;
  const depth = obj.depth;
  num = 3;
  if (undefined !== depth) {
    num = depth;
  }
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
          const tmp8 = closure_1_2(obj.originalException, table, getOptions.getOptions().maxValueLength);
          tmp3 = contexts;
          if (tmp8) {
            obj = {};
            const merged = Object.assign(contexts.contexts);
            let tmp4Result = tmp4(tmp5[2]);
            const normalizeResult = tmp4Result.normalize(tmp8, num);
            tmp4Result = tmp4(tmp5[1]);
            if (tmp4Result.isPlainObject(normalizeResult)) {
              const result = tmp4(tmp5[3]).addNonEnumerableProperty(normalizeResult, "__sentry_skip_normalization__", true);
              obj[tmp6] = normalizeResult;
              const tmp4Result1 = tmp4(tmp5[3]);
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