// === Module 787: _extractErrorData ===

// Module 787 (_extractErrorData)
import _mod687 from "module_687" /* 687 */;
import _mod688 from "module_688" /* 688 */;
import consoleSandbox from "consoleSandbox" /* 689 */;
import _mod692 from "module_692" /* 692 */;
import _mod697 from "module_697" /* 697 */;
import normalize from "normalize" /* 730 */;
import setupIntegration from "setupIntegration" /* 752 */;

function _extractErrorData(cause, arg1, arg2) {
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
        let obj5 = _mod692;
        if (!obj5.isError(tmp40)) {
          if (typeof tmp41 !== "string") {
            obj[tmp9] = tmp41;
          }
        }
        if (arg2) {
          let tmp44Result = _mod697;
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
        obj6 = _mod692;
      }
    }
    if (typeof cause.toJSON === "function") {
      const toJSONResult = cause.toJSON();
      const _Object2 = Object;
      const keys1 = Object.keys(toJSONResult);
      for (const item10058 of keys1) {
        let tmp24 = tmp53[item10058];
        let str2 = tmp24;
        let obj4 = _mod692;
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
    if (_mod688.DEBUG_BUILD) {
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
          const tmp8 = _extractErrorData(obj.originalException, closure_1, getOptions.getOptions().maxValueLength);
          tmp3 = contexts;
          if (tmp8) {
            obj = {};
            const merged = Object.assign(contexts.contexts);
            const normalizer = normalize;
            const normalizeResult = normalizer.normalize(tmp8, num);
            let tmp4Result = _mod692;
            if (tmp4Result.isPlainObject(normalizeResult)) {
              tmp4Result = _mod687;
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
        obj2 = _mod692;
      }
      return tmp3;
    }
  };
  return obj;
});