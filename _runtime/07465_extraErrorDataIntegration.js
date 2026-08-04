import setupIntegration from "setupIntegration";


export const extraErrorDataIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let num;
  let closure_1;
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
      const maxValueLength = getOptions.getOptions().maxValueLength;
      let num = 250;
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
          const tmp7 = (function _extractErrorData(originalException, arg1, arg2) {
            try {
              const items = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"];
              const obj = {};
              const _Object = Object;
              const keys = Object.keys(originalException);
              const iter = keys[Symbol.iterator]();
              let str = "";
              const nextResult = iter.next();
              while (iter !== undefined) {
                let tmp9 = nextResult;
                let tmp10 = items;
                if (-1 !== items.indexOf(nextResult)) {
                  continue;
                } else {
                  let tmp11 = nextResult;
                  let tmp12 = originalException[tmp9];
                  let tmp13 = tmp12;
                  let tmp14 = obj;
                  let tmp15 = callback;
                  let tmp16 = callback;
                  let tmp17 = dependencyMap;
                  let tmp18 = dependencyMap;
                  let obj2 = callback(7382);
                  if (!obj2.isError(tmp12)) {
                    let tmp19 = tmp12;
                    if (typeof tmp13 !== "string") {
                      let truncateResult = tmp12;
                    }
                    obj[tmp9] = truncateResult;
                  }
                  let tmp20 = tmp15;
                  let tmp21 = tmp17;
                  let tmp16Result = tmp16(7384);
                  let tmp22 = tmp12;
                  let _HermesInternal = HermesInternal;
                  truncateResult = tmp16Result.truncate("" + tmp13, arg2);
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
                    let tmp32 = toJSONResult;
                    let tmp33 = tmp49[item10067];
                    let str3 = tmp33;
                    let tmp34 = obj;
                    let tmp35 = callback;
                    let tmp36 = callback;
                    let tmp37 = dependencyMap;
                    let tmp38 = dependencyMap;
                    let obj5 = callback(7382);
                    let tmp39 = tmp33;
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
                obj4 = callback(7382);
              }
            } catch (tmp41) {
              if (callback(7403).DEBUG_BUILD) {
                const logger = callback(7375).logger;
                logger.error("Unable to extract extra data from the Error object:", tmp41);
              }
              return null;
            }
          })(obj.originalException, table, num);
          tmp3 = contexts;
          if (tmp7) {
            obj = {};
            const merged = Object.assign(contexts.contexts);
            let tmp4Result = tmp4(tmp5[2]);
            const normalizeResult = tmp4Result.normalize(tmp7, num);
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