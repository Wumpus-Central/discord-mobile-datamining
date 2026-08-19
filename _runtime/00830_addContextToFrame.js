// === Module 830: addContextToFrame ===

// Module 830 (addContextToFrame)
import addNonEnumerableProperty from "addNonEnumerableProperty" /* 822 */;
import isMatchingPattern from "isMatchingPattern" /* 832 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const re3 = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
arg5.addContextToFrame = function addContextToFrame(arr, lineno) {
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
    lineno.pre_context = substr.map((item, index) => callback(832).snipLine(item, 0));
    const _Math5 = Math;
    const bound1 = Math.min(length - 1, bound);
    let num2 = lineno.colno;
    if (!num2) {
      num2 = 0;
    }
    lineno.context_line = isMatchingPattern.snipLine(arr[bound1], num2);
    const _Math = Math;
    const substr1 = arr.slice(Math.min(bound + 1, length), bound + 1 + num);
    lineno.post_context = substr1.map((item, index) => callback(832).snipLine(item, 0));
  }
};
arg5.addExceptionMechanism = function addExceptionMechanism(exception, data) {
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
    let obj = { type: "generic", handled: true };
    const merged = Object.assign(mechanism);
    const merged1 = Object.assign(data);
    first.mechanism = obj;
    if (data) {
      if ("data" in data) {
        data = undefined;
        if (mechanism != null) {
          data = mechanism.data;
        }
        obj = {};
        const merged2 = Object.assign(data);
        const merged3 = Object.assign(data.data);
        first.mechanism.data = obj;
      }
    }
  }
};
arg5.addExceptionTypeValue = function addExceptionTypeValue(exception) {
  const tmp = exception.exception || {};
  exception.exception = tmp;
  const tmp2 = tmp.values || [];
  tmp.values = tmp2;
  const iter = tmp2[0] || {};
  tmp2[0] = iter;
  if (!iter.value) {
    let str = arg1;
    if (!arg1) {
      str = "";
    }
    iter.value = str;
  }
  if (!iter.type) {
    let str2 = arg2;
    if (!arg2) {
      str2 = "Error";
    }
    iter.type = str2;
  }
};
arg5.checkOrSetAlreadyCaught = function checkOrSetAlreadyCaught(__sentry_captured__) {
  if ((function isAlreadyCaptured(__sentry_captured__) {
    try {
      return __sentry_captured__.__sentry_captured__;
    } catch (err) {
    }
  })(__sentry_captured__)) {
    return true;
  } else {
    try {
      const result = addNonEnumerableProperty.addNonEnumerableProperty(__sentry_captured__, "__sentry_captured__", true);
      return false;
    } catch (err) {
    }
  }
};
arg5.getEventDescription = function getEventDescription(exception) {
  ({ message, event_id } = exception);
  if (message) {
    return message;
  } else {
    exception = exception.exception;
    let str;
    if (exception != null) {
      const values = exception.values;
      if (values != null) {
        str = values[0];
      }
    }
    if (str) {
      if (!str.type) {
        let combined = str.type || str.value || event_id || "<unknown>";
      }
      const _HermesInternal = HermesInternal;
      ({ type, value } = str);
      str = "";
      combined = "" + type + ": " + value;
    } else {
      let str2 = event_id;
      if (!event_id) {
        str2 = "<unknown>";
      }
      return str2;
    }
  }
};
arg5.parseSemver = function parseSemver(str) {
  const tmp = str.match(closure_3) || [];
  str = tmp[1];
  if (!str) {
    str = "";
  }
  const parsed = parseInt(str, 10);
  let str2 = tmp[2];
  if (!str2) {
    str2 = "";
  }
  const parsed1 = parseInt(str2, 10);
  let str3 = tmp[3];
  if (!str3) {
    str3 = "";
  }
  const parsed2 = parseInt(str3, 10);
  const obj = { buildmetadata: tmp[5], major: null, minor: null, patch: null, prerelease: null };
  let tmp5;
  if (!isNaN(parsed)) {
    tmp5 = parsed;
  }
  obj[1] = tmp5;
  let tmp6;
  if (!isNaN(parsed1)) {
    tmp6 = parsed1;
  }
  obj[2] = tmp6;
  let tmp7;
  if (!isNaN(parsed2)) {
    tmp7 = parsed2;
  }
  obj[3] = tmp7;
  obj[4] = tmp[4];
  return obj;
};
arg5.uuid4 = function uuid4() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = (function getCrypto() {
      const GLOBAL_OBJ = lib(821).GLOBAL_OBJ;
      return GLOBAL_OBJ.crypto || GLOBAL_OBJ.msCrypto;
    })();
  }
  const _require = tmp;
  try {
    let randomUUID;
    if (tmp != null) {
      randomUUID = tmp.randomUUID;
    }
    if (randomUUID) {
      let obj = _require(831);
      return _require(831).withRandomSafeContext(() => lib.randomUUID()).replace(/-/g, "");
    } else {
      let str3 = c2;
      if (!c2) {
        c2 = "10000000100040008000100000000000";
        str3 = "10000000100040008000100000000000";
      }
      return str3.replace(/[018]/g, (arg0) => {
        const obj = lib(831);
        return arg0 ^ (15 & 16 * lib(831).safeMathRandom()) >> arg0 / 4.toString(16);
      });
    }
  } catch (err) {
  }
};