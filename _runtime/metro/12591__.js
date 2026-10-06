// _runtime/metro/12591__.js
import _mod12581 from "12581__.js";
import _mod12586 from "12586__.js";
import _mod12589 from "12589__.js";

const re2 =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

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
      const obj = _mod12589;
      return obj.snipLine(item, 0);
    });
    const _Math5 = Math;
    const bound1 = Math.min(length - 1, bound);
    let num2 = lineno.colno;
    const snipLine = _mod12589.snipLine;
    _mod12589;
    const tmp8 = arr[bound1];
    if (!num2) {
      num2 = 0;
    }
    lineno.context_line = snipLine(tmp8, num2);
    const _Math = Math;
    const substr1 = arr.slice(Math.min(bound + 1, length), bound + 1 + num);
    lineno.post_context = substr1.map((item) => {
      const obj = _mod12589;
      return obj.snipLine(item, 0);
    });
  }
};
export const addExceptionMechanism = function addExceptionMechanism(exception, data) {
  let first;
  if (exception.exception) {
    if (exception.exception.values) {
      first = exception.exception.values[0];
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
        const obj2 = {};
        const merged2 = Object.assign(tmp9);
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
export const arrayify = function arrayify(arg0) {
  let tmp = arg0;
  if (!Array.isArray(arg0)) {
    const items = [arg0];
    tmp = items;
  }
  return tmp;
};
export const checkOrSetAlreadyCaught = function checkOrSetAlreadyCaught(__sentry_captured__) {
  function isAlreadyCaptured(__sentry_captured__) {
    try {
      return __sentry_captured__.__sentry_captured__;
    } catch (err) {}
  }
  if (isAlreadyCaptured(__sentry_captured__)) {
    return true;
  } else {
    try {
      const obj = _mod12586;
      const result = obj.addNonEnumerableProperty(__sentry_captured__, "__sentry_captured__", true);
    } catch (err) {}
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
    let tmp2;
    let first;
    if (exception.exception) {
      if (exception.exception.values) {
        first = exception.exception.values[0];
      }
    }
    if (first) {
      if (first.type) {
        let combined;
        if (first.value) {
          const _HermesInternal = HermesInternal;
          combined = "" + first.type + ": " + first.value;
        }
        tmp2 = combined;
      }
      combined = first.type || first.value || event_id || "<unknown>";
    } else {
      tmp2 = event_id || "<unknown>";
    }
    return tmp2;
  }
};
export const parseSemver = function parseSemver(str) {
  let tmp5;
  let tmp6;
  let tmp7;
  const tmp = str.match(re2) || [];
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
  const GLOBAL_OBJ = _mod12581.GLOBAL_OBJ;
  const obj = GLOBAL_OBJ.crypto || GLOBAL_OBJ.msCrypto;
  function getRandomByte() {
    return 16 * Math.random();
  }
  try {
    if (obj) {
      if (obj.randomUUID) {
        let str = obj.randomUUID();
        return str.replace(/-/g, "");
      }
    }
    const getRandomValues = obj && obj.getRandomValues;
    if (getRandomValues) {
      getRandomByte = function getRandomByte() {
        const uint8Array = new Uint8Array(1);
        const randomValues = obj.getRandomValues(uint8Array);
        return uint8Array[0];
      };
    }
    const replace = "10000000100040008000100000000000".replace;
    return "10000000100040008000100000000000".replace(/[018]/g, (arg0) => {
      const str = arg0 ^ ((15 & getRandomByte()) >> (arg0 / 4));
      return str.toString(16);
    });
  } catch (err) {}
};
