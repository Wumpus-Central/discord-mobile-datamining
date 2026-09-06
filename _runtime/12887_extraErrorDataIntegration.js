// _runtime/12887_extraErrorDataIntegration.js
import _mod12804 from "metro/12804__.js";
import setupIntegration from "metro/12853__.js";

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
          const tmp7 = (function _extractErrorData(originalException, arg1, maxValueLength) {
            try {
              const items = [
                "name",
                "message",
                "stack",
                "line",
                "column",
                "fileName",
                "lineNumber",
                "columnNumber",
                "toJSON",
              ];
              const obj = {};
              const _Object = Object;
              const keys = Object.keys(originalException);
              const iter = keys[Symbol.iterator]();
              let str = "";
              const nextResult = iter.next();
              while (iter !== undefined) {
                let tmp9 = nextResult;
                if (-1 !== items.indexOf(nextResult)) {
                  continue;
                } else {
                  let tmp12 = originalException[tmp9];
                  let tmp13 = tmp12;
                  let tmp16 = num;
                  let obj2 = num(12804);
                  if (!obj2.isError(tmp12)) {
                    if (typeof tmp13 !== "string") {
                      let truncateResult = tmp12;
                    }
                    obj[tmp9] = truncateResult;
                  }
                  let tmp16Result = tmp16(12806);
                  let _HermesInternal = HermesInternal;
                  truncateResult = tmp16Result.truncate("" + tmp13, maxValueLength);
                }
              }
              let tmp24 = arg1;
              if (arg1) {
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
                    let obj5 = num(12804);
                    if (obj5.isError(tmp33)) {
                      str = str3.toString();
                    } else {
                      str = str3;
                    }
                    obj[item10067] = str;
                    continue;
                  }
                  const tmp49 = toJSONResult;
                }
                return obj;
              } else {
                if (obj4.isError(originalException.cause)) {
                  let str1 = str2.toString();
                } else {
                  str1 = str2;
                }
                obj.cause = str1;
                obj4 = num(12804);
              }
            } catch (tmp41) {
              if (num(12825).DEBUG_BUILD) {
                const logger = num(12797).logger;
                logger.error("Unable to extract extra data from the Error object:", tmp41);
              }
              return null;
            }
          })(obj.originalException, dependencyMap, num);
          tmp3 = contexts;
          if (tmp7) {
            obj = {};
            const merged = Object.assign(contexts.contexts);
            const normalizer = tmp4(12842);
            const normalizeResult = normalizer.normalize(tmp7, num);
            let tmp4Result = tmp4(12804);
            if (tmp4Result.isPlainObject(normalizeResult)) {
              tmp4Result = tmp4(12803);
              const result = tmp4Result.addNonEnumerableProperty(
                normalizeResult,
                "__sentry_skip_normalization__",
                true,
              );
              obj[tmp6] = normalizeResult;
            }
            obj = {};
            const merged1 = Object.assign(contexts);
            obj.contexts = obj;
            tmp3 = obj;
          }
          tmp6 = obj.originalException.name || obj.originalException.constructor.name;
        }
        obj2 = _mod12804;
      }
      return tmp3;
    },
  };
  return obj;
});
