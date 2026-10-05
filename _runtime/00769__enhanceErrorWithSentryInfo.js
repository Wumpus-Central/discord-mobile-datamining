// _runtime/00769__enhanceErrorWithSentryInfo.js
import _mod698 from "metro/00698__.js";
import _mod703 from "metro/00703__.js";
import uuid4 from "00706_uuid4.js";
import normalize from "00741_normalize.js";
import _slicedToArray from "metro/00032__slicedToArray.js";

let hasOwnProperty;

function exceptionFromError(fn, name) {
  let combined;
  const obj = { type: name.name || name.constructor.name, value: combined };
  const obj2 = _mod703;
  const message = name.message;
  const isErrorResult =
    obj2.isError(name) && "__sentry_fetch_url_host__" in name && typeof name.__sentry_fetch_url_host__ === "string";
  if (isErrorResult) {
    const _HermesInternal = HermesInternal;
    combined = "" + message + " (" + name.__sentry_fetch_url_host__ + ")";
  } else {
    combined = message;
  }
  const tmp6 = name.stack || "";
  const arr = fn(tmp6, 1);
  if (arr.length) {
    const obj3 = { frames: arr };
    obj.stacktrace = obj3;
  }
  return obj;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const _enhanceErrorWithSentryInfo = function _enhanceErrorWithSentryInfo(__sentry_fetch_url_host__) {
  let combined;
  const obj = _mod703;
  const message = __sentry_fetch_url_host__.message;
  const isErrorResult =
    obj.isError(__sentry_fetch_url_host__) &&
    "__sentry_fetch_url_host__" in __sentry_fetch_url_host__ &&
    typeof __sentry_fetch_url_host__.__sentry_fetch_url_host__ === "string";
  if (isErrorResult) {
    const _HermesInternal = HermesInternal;
    combined = "" + message + " (" + __sentry_fetch_url_host__.__sentry_fetch_url_host__ + ")";
  } else {
    combined = message;
  }
  return combined;
};
export const eventFromMessage = function eventFromMessage(fn, value) {
  let items;
  let obj4;
  let str = info;
  if (info === undefined) {
    str = "info";
  }
  let event_id;
  if (event_id != null) {
    event_id = event_id.event_id;
  }
  const obj = { event_id, level: str };
  if (attachStacktrace) {
    let syntheticException;
    if (event_id != null) {
      syntheticException = event_id.syntheticException;
    }
    if (syntheticException) {
      const tmp3 = event_id.syntheticException.stack || "";
      const arr = fn(tmp3, 1);
      if (arr.length) {
        const obj3 = { value, stacktrace: obj4 };
        const obj2 = { values: items };
        items = [obj3];
        obj4 = { frames: arr };
        obj.exception = obj2;
        const obj5 = uuid4;
        const result = obj5.addExceptionMechanism(obj, { synthetic: true });
      }
    }
  }
  const obj6 = _mod703;
  if (obj6.isParameterizedString(value)) {
    const obj11 = { message: null, params: null };
    ({ __sentry_template_string__: obj7.message, __sentry_template_values__: obj7.params } = value);
    obj.logentry = obj11;
    return obj;
  } else {
    obj.message = value;
    return obj;
  }
};
export const eventFromUnknownInput = function eventFromUnknownInput(getOptions, stackParser, name, data) {
  let event_id;
  let items3;
  let items4;
  let obj4;
  let tmp2Result2;
  function getObjectClassName(name) {
    try {
      const _Object = Object;
      const prototypeOf = Object.getPrototypeOf(name);
      name = undefined;
      if (prototypeOf) {
        name = prototypeOf.constructor.name;
      }
      return name;
    } catch (err) {}
  }
  data = undefined;
  if (data != null) {
    data = data.data;
  }
  if (data) {
    data = data.data.mechanism;
  }
  if (!data) {
    data = { handled: true, type: "generic" };
  }
  const obj2 = _mod703;
  if (obj2.isError(name)) {
    const items = [name, undefined];
    items3 = items;
  } else {
    data.synthetic = true;
    const tmp2Result = _mod703;
    if (tmp2Result.isPlainObject(name)) {
      let normalizeDepth;
      if (getOptions != null) {
        normalizeDepth = getOptions.getOptions().normalizeDepth;
      }
      const obj = { __serialized__: tmp2Result2.normalizeToSize(name, normalizeDepth) };
      let tmp12;
      tmp2Result2 = normalize;
      const keys = Object.keys();
      if (keys !== undefined) {
        while (keys[tmp] !== undefined) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          if (!hasOwnProperty.call(name, tmp14)) {
            continue;
          } else {
            let tmp15 = name[tmp14];
            let _Error2 = Error;
            tmp12 = tmp15;
            if (tmp15 instanceof Error) {
              break;
            }
          }
          continue;
        }
      }
      if (tmp12) {
        const items1 = [tmp12, obj];
        items3 = items1;
      } else {
        let message;
        if ("name" in name) {
          if (typeof name.name === "string") {
            const _HermesInternal5 = HermesInternal;
            const combined = "'" + name.name + "' captured as exception";
            let sum = combined;
            const tmp21 = "message" in name && typeof name.message === "string";
            if (tmp21) {
              const _HermesInternal6 = HermesInternal;
              sum = combined + " with message '" + name.message + "'";
            }
            message = sum;
          }
          let syntheticException;
          if (data != null) {
            syntheticException = data.syntheticException;
          }
          if (!syntheticException) {
            const _Error3 = Error;
            const self3 = this;
            const self4 = this;
            syntheticException = new Error(message);
          }
          syntheticException.message = message;
          const items2 = [syntheticException, obj];
          items3 = items2;
        }
        if ("message" in name) {
          if (typeof name.message === "string") {
            message = name.message;
          }
        }
        const obj6 = _mod698;
        const result = obj6.extractExceptionKeysForMessage(name);
        const obj7 = _mod703;
        if (obj7.isErrorEvent(name)) {
          const _HermesInternal4 = HermesInternal;
          message = "Event `ErrorEvent` captured as exception with message `" + name.message + "`";
        } else {
          const tmp19 = getObjectClassName(name);
          let str5 = "Object";
          if (tmp19) {
            str5 = "Object";
            if ("Object" !== tmp19) {
              const _HermesInternal2 = HermesInternal;
              str5 = "'" + tmp19 + "'";
            }
          }
          const _HermesInternal3 = HermesInternal;
          message = "" + str5 + " captured as exception with keys: " + result;
        }
      }
    } else {
      let syntheticException1;
      if (data != null) {
        syntheticException1 = data.syntheticException;
      }
      if (!syntheticException1) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        syntheticException1 = new Error(name);
      }
      const _HermesInternal = HermesInternal;
      syntheticException1.message = "" + name;
      items3 = [syntheticException1, undefined];
    }
  }
  const tmp25 = _slicedToArray(items3, 2);
  const obj3 = { exception: obj4 };
  obj4 = { values: items4 };
  items4 = [exceptionFromError(stackParser, tmp25[0])];
  if (tmp25[1]) {
    obj3.extra = tmp25[1];
  }
  const obj10 = uuid4;
  const result1 = obj10.addExceptionTypeValue(obj3, undefined, undefined);
  const obj11 = uuid4;
  const result2 = obj11.addExceptionMechanism(obj3, data);
  const obj5 = { event_id };
  const merged = Object.assign(obj3);
  event_id = undefined;
  if (data != null) {
    event_id = data.event_id;
  }
  return obj5;
};
export { exceptionFromError };
export const parseStackFrames = function parseStackFrames(fn, stack) {
  const tmp = stack.stack || "";
  return fn(tmp, 1);
};
