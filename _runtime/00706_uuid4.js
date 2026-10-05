// === Module 706: uuid4 ===

// Module 706 (uuid4)
import _mod698 from "module_698" /* 698 */;
import _mod708 from "module_708" /* 708 */;

const require = globalThis.__r;
let _require, c2;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const re3 = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

export const addContextToFrame = function addContextToFrame(arr, lineno) {
  let num = arg2;
  if (arg2 === undefined) {
    num = 5;
  }
  if (undefined !== lineno.lineno) {
    const _Math2 = Math;
    const _Math3 = Math;
    const bound = Math.max(Math.min(length - 1, lineno.lineno - 1), 0);
    const _Math4 = Math;
    const substr = arr.slice(Math.max(0, bound - num), bound);
    lineno.pre_context = substr.map((item) => {
      const obj = require("module_708");
      return obj.snipLine(item, 0);
    });
    const _Math5 = Math;
    const bound1 = Math.min(length - 1, bound);
    let num2 = lineno.colno;
    const snipLine = _mod708.snipLine;
    _mod708;
    const tmp8 = arr[bound1];
    if (!num2) {
      num2 = 0;
    }
    lineno.context_line = snipLine(tmp8, num2);
    const _Math = Math;
    const substr1 = arr.slice(Math.min(bound + 1, length), bound + 1 + num);
    lineno.post_context = substr1.map((item) => {
      const obj = require("module_708");
      return obj.snipLine(item, 0);
    });
  }
};
export const addExceptionMechanism = function addExceptionMechanism(exception, data) {
  exception = exception.exception;
  let first;
  if (exception != null) {
    const values = exception.values;
    if (values != null) {
      first = values[0];
    }
  }
  if (first) {
    const mechanism = first.mechanism;
    const obj = { type: "generic", handled: true };
    const merged = Object.assign(mechanism);
    const merged1 = Object.assign(data);
    first.mechanism = obj;
    if (data) {
      if ("data" in data) {
        data = undefined;
        if (mechanism != null) {
          data = mechanism.data;
        }
        const obj2 = {};
        const merged2 = Object.assign(data);
        const merged3 = Object.assign(data.data);
        first.mechanism.data = obj2;
      }
    }
  }
};
export const addExceptionTypeValue = function addExceptionTypeValue(exception, arg1, arg2) {
  const tmp = exception.exception || {};
  exception.exception = tmp;
  const tmp2 = tmp.values || [];
  tmp.values = tmp2;
  const iter = tmp2[0] || {};
  tmp2[0] = iter;
  if (!iter.value) {
    iter.value = arg1 || "";
  }
  if (!iter.type) {
    iter.type = arg2 || "Error";
  }
};
export const checkOrSetAlreadyCaught = function checkOrSetAlreadyCaught(__sentry_captured__) {
  function isAlreadyCaptured(__sentry_captured__) {
    try {
      return __sentry_captured__.__sentry_captured__;
    } catch (err) {
    }
  }
  if (isAlreadyCaptured(__sentry_captured__)) {
    return true;
  } else {
    try {
      const obj = _mod698;
      const result = obj.addNonEnumerableProperty(__sentry_captured__, "__sentry_captured__", true);
    } catch (err) {
    }
    return false;
  }
};
export const getEventDescription = function getEventDescription(exception) {
  let event_id;
  let message;
  ({ message, event_id } = exception);
  if (message) {
    return message;
  } else {
    let tmp3;
    exception = exception.exception;
    let first;
    if (exception != null) {
      const values = exception.values;
      if (values != null) {
        first = values[0];
      }
    }
    if (first) {
      if (first.type) {
        let combined;
        if (first.value) {
          const _HermesInternal = HermesInternal;
          combined = "" + first.type + ": " + first.value;
        }
        tmp3 = combined;
      }
      combined = first.type || first.value || event_id || "<unknown>";
    } else {
      tmp3 = event_id || "<unknown>";
    }
    return tmp3;
  }
};
export const parseSemver = function parseSemver(str) {
  let tmp5;
  let tmp6;
  let tmp7;
  const tmp = str.match(re3) || [];
  str = tmp[1];
  const _parseInt = parseInt;
  if (!str) {
    str = "";
  }
  const _parseIntResult = _parseInt(str, 10);
  let str2 = tmp[2];
  const _parseInt2 = parseInt;
  if (!str2) {
    str2 = "";
  }
  const _parseInt2Result = _parseInt2(str2, 10);
  let str3 = tmp[3];
  const _parseInt3 = parseInt;
  if (!str3) {
    str3 = "";
  }
  const _parseInt3Result = _parseInt3(str3, 10);
  const obj = { buildmetadata: tmp[5], major: tmp5, minor: tmp6, patch: tmp7, prerelease: tmp[4] };
  tmp5 = undefined;
  if (!isNaN(_parseIntResult)) {
    tmp5 = _parseIntResult;
  }
  tmp6 = undefined;
  if (!isNaN(_parseInt2Result)) {
    tmp6 = _parseInt2Result;
  }
  tmp7 = undefined;
  if (!isNaN(_parseInt3Result)) {
    tmp7 = _parseInt3Result;
  }
  return obj;
};
export const uuid4 = function uuid4() {
  let closure_0;
  function getCrypto() {
    const GLOBAL_OBJ = closure_0(dependencyMap[0]).GLOBAL_OBJ;
    return GLOBAL_OBJ.crypto || GLOBAL_OBJ.msCrypto;
  }
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = getCrypto();
  }
  _require = tmp;
  try {
    let randomUUID;
    if (tmp != null) {
      randomUUID = tmp.randomUUID;
    }
    if (randomUUID) {
      let obj = require("safeDateNow");
      let str = obj.withRandomSafeContext(() => closure_0.randomUUID());
      return str.replace(/-/g, "");
    } else {
      let str3 = c2;
      if (!str3) {
        c2 = "10000000100040008000100000000000";
        str3 = "10000000100040008000100000000000";
      }
      return str3.replace(/[018]/g, (arg0) => {
        const obj = closure_0(dependencyMap[1]);
        const str = arg0 ^ (15 & 16 * obj.safeMathRandom()) >> arg0 / 4;
        return str.toString(16);
      });
    }
  } catch (err) {
  }
};