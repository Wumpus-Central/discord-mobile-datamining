// === Module 13022: extraErrorDataIntegration ===

// Module 13022 (extraErrorDataIntegration)
import _mod12938 from "module_12938" /* 12938 */;
import _mod12939 from "module_12939" /* 12939 */;
import _mod12977 from "module_12977" /* 12977 */;
import setupIntegration from "module_12988" /* 12988 */;


export const extraErrorDataIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  closure_1 = undefined;
  const depth = obj.depth;
  const captureErrorCause = obj.captureErrorCause;
  closure_1 = undefined === captureErrorCause || captureErrorCause;
  return {
    name: "ExtraErrorData",
    processEvent(contexts, arg1, getOptions) {
      const maxValueLength = getOptions.getOptions().maxValueLength;
      num = 250;
      if (undefined !== maxValueLength) {
        num = maxValueLength;
      }
      let obj = arg1;
      if (arg1 === undefined) {
        obj = {};
      }
      let tmp3 = contexts;
      if (obj.originalException) {
        tmp3 = contexts;
        if (obj2.isError(obj.originalException)) {
          const tmp7 = (function _extractErrorData(originalException, dependencyMap, maxValueLength) {
            try {
              const items = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"];
              const obj = {};
              const _Object = Object;
              const keys = Object.keys(originalException);
              const iter = keys[Symbol.iterator]();
              const nextResult = iter.next();
              while (iter !== undefined) {
                let tmp9 = nextResult;
                if (-1 !== items.indexOf(nextResult)) {
                  continue;
                } else {
                  let tmp12 = originalException[tmp9];
                  let tmp13 = tmp12;
                  let tmp16 = num;
                  let obj2 = num(12939);
                  if (!obj2.isError(tmp12)) {
                    if (typeof tmp13 !== "string") {
                      let truncateResult = tmp12;
                    }
                    obj[tmp9] = truncateResult;
                  }
                  let tmp16Result = tmp16(12941);
                  let _HermesInternal = HermesInternal;
                  truncateResult = tmp16Result.truncate("" + tmp13, maxValueLength);
                }
              }
              let tmp24 = dependencyMap;
              if (dependencyMap) {
                tmp24 = undefined !== originalException.cause;
              }
              if (!tmp24) {
                if (typeof originalException.toJSON === "function") {
                  const toJSONResult = originalException.toJSON();
                  const _Object2 = Object;
                  const keys1 = Object.keys(toJSONResult);
                  for (const item10067 of keys1) {
                    let tmp33 = tmp49[item10067];
                    let str3 = tmp33;
                    let obj5 = num(12939);
                    if (obj5.isError(tmp33)) {
                      let str1 = str3.toString();
                    } else {
                      str1 = str3;
                    }
                    obj[item10067] = str1;
                    continue;
                  }
                  const tmp49 = toJSONResult;
                }
                return obj;
              } else {
                if (obj4.isError(originalException.cause)) {
                  let str5 = str2.toString();
                } else {
                  str5 = str2;
                }
                obj.cause = str5;
                obj4 = num(12939);
              }
            } catch (tmp41) {
              if (num(12960).DEBUG_BUILD) {
                const logger = num(12932).logger;
                logger.error("Unable to extract extra data from the Error object:", tmp41);
              }
              return null;
            }
          })(obj.originalException, dependencyMap, num);
          tmp3 = contexts;
          if (tmp7) {
            const obj3 = {};
            const merged = Object.assign(contexts.contexts);
            const normalizer = _mod12977;
            const normalizeResult = normalizer.normalize(tmp7, num);
            if (tmp4Result.isPlainObject(normalizeResult)) {
              const result = _mod12938.addNonEnumerableProperty(normalizeResult, "__sentry_skip_normalization__", true);
              obj3[tmp6] = normalizeResult;
              const tmp4Result2 = _mod12938;
            }
            let obj4 = {};
            const merged1 = Object.assign(contexts);
            obj4.contexts = obj3;
            tmp3 = obj4;
            tmp4Result = _mod12939;
          }
          tmp6 = obj.originalException.name || obj.originalException.constructor.name;
        }
        obj2 = _mod12939;
      }
      return tmp3;
    }
  };
});