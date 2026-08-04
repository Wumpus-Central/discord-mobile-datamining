// _runtime/00926_flattenIssue.js
import setupIntegration from "setupIntegration";

function flattenIssue(path) {
  const obj = {};
  const merged = Object.assign(path);
  let joined;
  if ("path" in path) {
    const _Array = Array;
    if (Array.isArray(path.path)) {
      path = path.path;
      joined = path.join(".");
    }
  }
  obj.path = joined;
  let json;
  if ("keys" in path) {
    const _JSON = JSON;
    json = JSON.stringify(path.keys);
  }
  obj.keys = json;
  let json1;
  if ("unionErrors" in path) {
    const _JSON2 = JSON;
    json1 = JSON.stringify(path.unionErrors);
  }
  obj.unionErrors = json1;
  return obj;
}
function flattenIssuePath(arr) {
  const mapped = arr.map((arg0) => {
    let str = "<array>";
    if (typeof arg0 !== "Object") {
      str = arg0;
    }
    return str;
  });
  return mapped.join(".");
}
function formatIssueMessage(issues) {
  const set = new Set();
  while (tmp !== undefined) {
    let tmp3 = flattenIssuePath;
    let arr = flattenIssuePath(tmp2.path);
    if (arr.length > 0) {
      let tmp5 = arr;
      let addResult = set.add(tmp4);
    }
    continue;
  }
  arr = Array.from(set);
  if (0 === arr.length) {
    let str4 = "variable";
    if (issues.issues.length > 0) {
      const first = issues.issues[0];
      let tmp10 = undefined !== first;
      if (tmp10) {
        tmp10 = "expected" in first;
      }
      if (tmp10) {
        tmp10 = typeof first.expected === "y";
      }
      str4 = "variable";
      if (tmp10) {
        str4 = first.expected;
      }
    }
    const _HermesInternal2 = HermesInternal;
    return "Failed to validate " + str4;
  } else {
    const _HermesInternal = HermesInternal;
    return "Failed to validate keys: " + require(832) /* isMatchingPattern */.truncate(arr.join(", "), 100);
  }
  tmp = issues.issues[Symbol.iterator]();
}
function applyZodErrorsToEvent(arg0, arg1, exception, originalException) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  exception = exception.exception;
  let values;
  if (exception != null) {
    values = exception.values;
  }
  if (values) {
    if (originalException.originalException) {
      if ((function originalExceptionIsZodError(originalException) {
        let isErrorResult = callback(table[0]).isError(originalException);
        if (isErrorResult) {
          isErrorResult = "ZodError" === originalException.name;
        }
        if (isErrorResult) {
          const _Array = Array;
          isErrorResult = Array.isArray(originalException.issues);
        }
        return isErrorResult;
      })(originalException.originalException)) {
        if (0 !== originalException.originalException.issues.length) {
          try {
            const issues = originalException.originalException.issues;
            if (flag) {
              let substr = issues;
            } else {
              substr = issues.slice(0, arg0);
            }
            const mapped = substr.map(flattenIssue);
            if (flag) {
              let _Array = Array;
              if (!Array.isArray(originalException.attachments)) {
                originalException.attachments = [];
              }
              const attachments = originalException.attachments;
              let obj = { filename: "zod_issues.json", data: null };
              const _JSON = JSON;
              obj = { issues: null };
              obj[0] = mapped;
              obj[1] = JSON.stringify(obj);
              attachments.push(obj);
            }
            obj = {};
            const merged = Object.assign(exception);
            const obj1 = {};
            const merged1 = Object.assign(exception.exception);
            const obj2 = {};
            const merged2 = Object.assign(exception.exception.values[0]);
            obj2.value = formatIssueMessage(originalException.originalException);
            const items = [obj2];
            values = exception.exception.values;
            HermesBuiltin.arraySpread(values.slice(1), 1);
            obj1.values = items;
            obj.exception = obj1;
            const obj3 = {};
            const merged3 = Object.assign(exception.extra);
            obj3["zoderror.issues"] = mapped.slice(0, arg0);
            obj.extra = obj3;
            return obj;
          } catch (error) {
            const obj4 = {};
            const merged4 = Object.assign(tmp);
            const obj5 = {};
            const merged5 = Object.assign(tmp.extra);
            const _Error = Error;
            let str = "unknown";
            if (error instanceof Error) {
              const _HermesInternal = HermesInternal;
              str = "" + error.name + ": " + error.message + "\n" + error.stack;
            }
            const obj6 = { message: "an exception was thrown while processing ZodError within applyZodErrorsToEvent()", error: null };
            obj6[1] = str;
            obj5["zoderrors sentry integration parse error"] = obj6;
            obj4.extra = obj5;
            return obj4;
          }
        }
      }
    }
  }
  return exception;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { applyZodErrorsToEvent };
export { flattenIssue };
export { flattenIssuePath };
export { formatIssueMessage };
export const zodErrorsIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let num;
  num = obj.limit;
  if (num == null) {
    num = 10;
  }
  obj = {
    name: "ZodErrors",
    processEvent(arg0, arg1) {
      return outer1_5(num, obj.saveZodIssuesAsAttachment, arg0, arg1);
    }
  };
  return obj;
});