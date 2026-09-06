// _runtime/metro/12808__.js
import _mod12798 from "12798__.js";
import _mod12803 from "12803__.js";
import _mod12806 from "12806__.js";

require = arg1;
const dependencyMap = arg6;
const re2 = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

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
    lineno.pre_context = substr.map((item) => _mod12806.snipLine(item, 0));
    const _Math5 = Math;
    const bound1 = Math.min(length - 1, bound);
    let num2 = lineno.colno;
    if (!num2) {
      num2 = 0;
    }
    lineno.context_line = _mod12806.snipLine(arr[bound1], num2);
    const _Math = Math;
    const substr1 = arr.slice(Math.min(bound + 1, length), bound + 1 + num);
    lineno.post_context = substr1.map((item) => _mod12806.snipLine(item, 0));
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
    let obj = { type: "generic", handled: true };
    const merged = Object.assign(mechanism);
    const merged1 = Object.assign(data);
    first.mechanism = obj;
    if (data) {
      if ("data" in data) {
        data = mechanism;
        if (mechanism) {
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
export const addExceptionTypeValue = function addExceptionTypeValue(exception, arg1, arg2) {
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
export const arrayify = function arrayify(arg0) {
  let tmp = arg0;
  if (!Array.isArray(arg0)) {
    const items = [arg0];
    tmp = items;
  }
  return tmp;
};
export const checkOrSetAlreadyCaught = function checkOrSetAlreadyCaught(__sentry_captured__) {
  if ((function isAlreadyCaptured(__sentry_captured__) {
    try {
      return __sentry_captured__.__sentry_captured__;
    } catch (err) {
    }
  })(__sentry_captured__)) {
    return true;
  } else {
    try {
      const result = _mod12803.addNonEnumerableProperty(__sentry_captured__, "__sentry_captured__", true);
      return false;
    } catch (err) {
    }
  }
};
export const getEventDescription = function getEventDescription(exception) {
  ({ message, event_id } = exception);
  if (message) {
    return message;
  } else {
    let str;
    if (exception.exception) {
      if (exception.exception.values) {
        str = exception.exception.values[0];
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
export const parseSemver = function parseSemver(str) {
  const tmp = str.match(re2) || [];
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
  obj.major = tmp5;
  let tmp6;
  if (!isNaN(parsed1)) {
    tmp6 = parsed1;
  }
  obj.minor = tmp6;
  let tmp7;
  if (!isNaN(parsed2)) {
    tmp7 = parsed2;
  }
  obj.patch = tmp7;
  obj.prerelease = tmp[4];
  return obj;
};
export const uuid4 = function uuid4() {
  const GLOBAL_OBJ = _mod12798.GLOBAL_OBJ;
  const obj = GLOBAL_OBJ.crypto || GLOBAL_OBJ.msCrypto;
  function getRandomByte() {
    return 16 * Math.random();
  }
  try {
    if (obj) {
      if (obj.randomUUID) {
        return obj.randomUUID().replace(/-/g, "");
      }
    }
    let getRandomValues = obj;
    if (obj) {
      getRandomValues = obj.getRandomValues;
    }
    if (getRandomValues) {
      getRandomByte = function getRandomByte() {
        const uint8Array = new Uint8Array(1);
        const randomValues = obj.getRandomValues(uint8Array);
        return uint8Array[0];
      };
    }
    const replace = "10000000100040008000100000000000".replace;
    return "10000000100040008000100000000000".replace(/[018]/g, (arg0) => arg0 ^ (15 & getRandomByte()) >> arg0 / 4.toString(16));
  } catch (err) {
  }
};