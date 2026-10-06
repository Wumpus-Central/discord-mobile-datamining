// _runtime/metro/12670__.js
import _mod12586 from "12586__.js";
import _mod12587 from "12587__.js";
import _mod12625 from "12625__.js";
import 12636__ from "12636__.js";


export const extraErrorDataIntegration = module_12636.defineIntegration(() => {
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
      function _extractErrorData(originalException, arg1, maxValueLength) {
        try {
          const items = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"];
          const obj = {};
          const _Object = Object;
          const keys = Object.keys(originalException);
          const iter = keys[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp8 = nextResult;
            if (-1 === items.indexOf(nextResult)) {
              let tmp11 = originalException[tmp8];
              let tmp12 = tmp11;
              let tmp15 = num;
              let obj2 = num(closure_1_1[1]);
              if (!obj2.isError(tmp11)) {
                let truncateResult;
                if (typeof tmp12 !== "string") {
                  truncateResult = tmp11;
                }
                obj[tmp8] = truncateResult;
              }
              let tmp15Result = tmp15(closure_1_1[4]);
              let _HermesInternal = HermesInternal;
              truncateResult = tmp15Result.truncate("" + tmp12, maxValueLength);
            }
            continue;
          }
          const tmp23 = arg1 && undefined !== originalException.cause;
          if (tmp23) {
            let str1;
            const obj4 = -1(closure_1_1[1]);
            if (obj4.isError(originalException.cause)) {
              str1 = str2.toString();
            } else {
              str1 = str2;
            }
            obj.cause = str1;
          }
          if (typeof originalException.toJSON === "function") {
            const toJSONResult = originalException.toJSON();
            const _Object2 = Object;
            const keys1 = Object.keys(toJSONResult);
            const tmp48 = toJSONResult;
            for (const item10067 of keys1) {
              let str5;
              let tmp32 = tmp48[item10067];
              let str3 = tmp32;
              let obj5 = num(closure_1_1[1]);
              if (obj5.isError(tmp32)) {
                str5 = str3.toString();
              } else {
                str5 = str3;
              }
              obj[item10067] = str5;
              continue;
            }
          }
          return obj;
        } catch (tmp40) {
          const tmp41 = num;
          if (num(closure_1_1[5]).DEBUG_BUILD) {
            const logger = tmp41(closure_1_1[6]).logger;
            logger.error("Unable to extract extra data from the Error object:", tmp40);
          }
          return null;
        }
      }
      const maxValueLength = getOptions.getOptions().maxValueLength;
      num = 250;
      const tmp = num;
      if (undefined !== maxValueLength) {
        num = maxValueLength;
      }
      let obj = arg1;
      if (arg1 === undefined) {
        obj = {};
      }
      let tmp3 = contexts;
      if (obj.originalException) {
        let obj2 = _mod12587;
        tmp3 = contexts;
        if (obj2.isError(obj.originalException)) {
          const tmp6 = obj.originalException.name || obj.originalException.constructor.name;
          const tmp7 = _extractErrorData(obj.originalException, closure_1, num);
          tmp3 = contexts;
          if (tmp7) {
            const obj3 = {};
            let tmp8 = obj3;
            const merged = Object.assign(contexts.contexts);
            const normalizer = _mod12625;
            const normalizeResult = normalizer.normalize(tmp7, tmp);
            const tmp4Result = _mod12587;
            if (tmp4Result.isPlainObject(normalizeResult)) {
              const tmp4Result2 = _mod12586;
              const result = tmp4Result2.addNonEnumerableProperty(normalizeResult, "__sentry_skip_normalization__", true);
              obj3[tmp6] = normalizeResult;
            }
            let obj4 = { contexts: obj3 };
            let tmp12 = obj4;
            let tmp13 = contexts;
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