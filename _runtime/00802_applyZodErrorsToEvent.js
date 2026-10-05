// _runtime/00802_applyZodErrorsToEvent.js
import _mod703 from "metro/00703__.js";
import _mod708 from "metro/00708__.js";
import 00763__ from "metro/00763__.js";

let set;

function flattenIssue(path) {
  let joined;
  let json;
  let json1;
  const obj = { path: joined, keys: json, unionErrors: json1 };
  const merged = Object.assign(path);
  joined = undefined;
  if ("path" in path) {
    const _Array = Array;
    if (Array.isArray(path.path)) {
      path = path.path;
      joined = path.join(".");
    }
  }
  json = undefined;
  if ("keys" in path) {
    const _JSON = JSON;
    json = JSON.stringify(path.keys);
  }
  json1 = undefined;
  if ("unionErrors" in path) {
    const _JSON2 = JSON;
    json1 = JSON.stringify(path.unionErrors);
  }
  return obj;
}
function flattenIssuePath(arr) {
  const mapped = arr.map((item) => {
    let str = "<array>";
    if (typeof item !== "number") {
      str = item;
    }
    return str;
  });
  return mapped.join(".");
}
function formatIssueMessage(issues) {
  set = new Set();
  const tmp = issues.issues[Symbol.iterator]();
  while (tmp !== undefined) {
    let arr = flattenIssuePath(tmp2.path);
    if (arr.length > 0) {
      let addResult = set.add(tmp4);
    }
    continue;
  }
  const arr2 = Array.from(set);
  if (0 === arr2.length) {
    let str4 = "variable";
    if (issues.issues.length > 0) {
      const first = issues.issues[0];
      str4 = "variable";
      const tmp10 = undefined !== first && "expected" in first && typeof first.expected === "string";
      if (tmp10) {
        str4 = first.expected;
      }
    }
    const _HermesInternal2 = HermesInternal;
    return "Failed to validate " + str4;
  } else {
    const _HermesInternal = HermesInternal;
    const obj2 = _mod708;
    return "Failed to validate keys: " + obj2.truncate(arr2.join(", "), 100);
  }
}
function applyZodErrorsToEvent(arg0, arg1) {
  let exception;
  let items;
  let obj2;
  let obj4;
  let obj6;
  let obj8;
  function originalExceptionIsZodError(originalException) {
    const obj = _mod703;
    let isErrorResult = obj.isError(originalException) && "ZodError" === originalException.name;
    if (isErrorResult) {
      const _Array = Array;
      isErrorResult = Array.isArray(originalException.issues);
    }
    return isErrorResult;
  }
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
      if (originalExceptionIsZodError(originalException.originalException)) {
        if (0 !== originalException.originalException.issues.length) {
          try {
            let substr;
            const issues = originalException.originalException.issues;
            if (flag) {
              substr = issues;
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
              let obj = { filename: "zod_issues.json", data: JSON.stringify(obj2) };
              const _JSON = JSON;
              const push = attachments.push;
              obj2 = { issues: mapped };
              push(obj);
            }
            const obj3 = { exception: obj4, extra: obj6 };
            const merged = Object.assign(exception);
            obj4 = { values: items };
            const merged1 = Object.assign(exception.exception);
            const obj5 = { value: formatIssueMessage(originalException.originalException) };
            const merged2 = Object.assign(exception.exception.values[0]);
            items = [obj5];
            const values2 = exception.exception.values;
            HermesBuiltin.arraySpread(items, values2.slice(1), 1);
            obj6 = { "zoderror.issues": mapped.slice(0, arg0) };
            const merged3 = Object.assign(exception.extra);
            return obj3;
          } catch (error) {
            const obj7 = { extra: obj8 };
            const merged4 = Object.assign(exception);
            obj8 = { "zoderrors sentry integration parse error": obj9 };
            const merged5 = Object.assign(exception.extra);
            const _Error = Error;
            let str = "unknown";
            if (error instanceof Error) {
              const _HermesInternal = HermesInternal;
              str = "" + error.name + ": " + error.message + "\n" + error.stack;
            }
            return obj7;
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
export const zodErrorsIntegration = module_763.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let num = obj.limit;
  if (num == null) {
    num = 10;
  }
  return {
    name: "ZodErrors",
    processEvent(arg0, arg1) {
      return applyZodErrorsToEvent(num, obj.saveZodIssuesAsAttachment, arg0, arg1);
    }
  };
});