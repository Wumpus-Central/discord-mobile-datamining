// _runtime/00758_exceptionFromError.js
import addNonEnumerableProperty from "00687_addNonEnumerableProperty.js";
import isInstanceOf from "00692_isInstanceOf.js";
import addContextToFrame from "00695_addContextToFrame.js";
import closure_2 from "metro/00032__slicedToArray.js";

function exceptionFromError(arg0, name) {
  let obj = { type: name.name || name.constructor.name, value: null };
  let isErrorResult = isInstanceOf.isError(name);
  if (isErrorResult) {
    isErrorResult = "__sentry_fetch_url_host__" in name;
  }
  if (isErrorResult) {
    isErrorResult = typeof name.__sentry_fetch_url_host__ === "string";
  }
  const message = name.message;
  if (isErrorResult) {
    const _HermesInternal = HermesInternal;
    let combined = "" + message + " (" + name.__sentry_fetch_url_host__ + ")";
  } else {
    combined = message;
  }
  obj[1] = combined;
  const arr = arg0(name.stack || "", 1);
  if (arr.length) {
    obj = { frames: null };
    obj[0] = arr;
    obj.stacktrace = obj;
  }
  return obj;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const _enhanceErrorWithSentryInfo = function _enhanceErrorWithSentryInfo(__sentry_fetch_url_host__) {
  let isErrorResult = isInstanceOf.isError(__sentry_fetch_url_host__);
  if (isErrorResult) {
    isErrorResult = "__sentry_fetch_url_host__" in __sentry_fetch_url_host__;
  }
  if (isErrorResult) {
    isErrorResult = typeof __sentry_fetch_url_host__.__sentry_fetch_url_host__ === "string";
  }
  const message = __sentry_fetch_url_host__.message;
  if (isErrorResult) {
    const _HermesInternal = HermesInternal;
    let combined = "" + message + " (" + __sentry_fetch_url_host__.__sentry_fetch_url_host__ + ")";
  } else {
    combined = message;
  }
  return combined;
};
export const eventFromMessage = function eventFromMessage(arg0, message, arg2, event_id) {
  let str = arg2;
  if (arg2 === undefined) {
    str = "info";
  }
  event_id = undefined;
  if (event_id != null) {
    event_id = event_id.event_id;
  }
  let obj = { event_id, level: str };
  if (arg4) {
    let syntheticException;
    if (event_id != null) {
      syntheticException = event_id.syntheticException;
    }
    if (syntheticException) {
      const arr = arg0(event_id.syntheticException.stack || "", 1);
      if (arr.length) {
        obj = { values: null };
        obj = { value: null, stacktrace: null };
        obj[0] = message;
        obj1 = { frames: null };
        obj1[0] = arr;
        obj[1] = obj1;
        const items = [obj];
        obj[0] = items;
        obj.exception = obj;
        const result = addContextToFrame.addExceptionMechanism(obj, { synthetic: true });
        const obj5 = addContextToFrame;
      }
      const tmp3 = event_id.syntheticException.stack || "";
    }
  }
  if (obj6.isParameterizedString(message)) {
    ({ __sentry_template_string__: obj7[0], __sentry_template_values__: obj7[1] } = message);
    obj.logentry = { message: null, params: null };
    return obj;
  } else {
    obj.message = message;
    return obj;
  }
  obj6 = isInstanceOf;
};
export const eventFromUnknownInput = function eventFromUnknownInput(getOptions, arg1, name, data) {
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
  obj1 = isInstanceOf;
  if (obj1.isError(name)) {
    const items = [name, undefined];
    let items3 = items;
  } else {
    data.synthetic = true;
    let tmp2Result = tmp2(692);
    if (tmp2Result.isPlainObject(name)) {
      let normalizeDepth;
      if (getOptions != null) {
        normalizeDepth = getOptions.getOptions().normalizeDepth;
      }
      let obj = { __serialized__: null };
      tmp2Result = tmp2(730);
      obj[0] = tmp2Result.normalizeToSize(name, normalizeDepth);
      let tmp14;
      const keys = Object.keys();
      if (keys !== undefined) {
        while (keys[tmp] !== undefined) {
          let tmp35 = tmp16;
          let _Object = Object;
          let call = hasOwnProperty.call;
          if (!(typeof call === "unknown" ? hasOwnProperty(tmp16) : call(name, tmp16))) {
            continue;
          } else {
            let tmp17 = name[tmp16];
            let _Error2 = Error;
            tmp14 = tmp17;
            if (tmp17 instanceof Error) {
              break;
            }
          }
          continue;
        }
      }
      if (tmp14) {
        const items1 = [tmp14, obj];
        items3 = items1;
      } else {
        if ("name" in name) {
          if (typeof name.name === "string") {
            const _HermesInternal5 = HermesInternal;
            const combined = "'" + name.name + "' captured as exception";
            let sum = combined;
            if (tmp23) {
              const _HermesInternal6 = HermesInternal;
              sum = combined + " with message '" + name.message + "'";
            }
            let message = sum;
            tmp23 = "message" in name && typeof name.message === "string";
          }
          let syntheticException;
          if (data != null) {
            syntheticException = data.syntheticException;
          }
          if (!syntheticException) {
            const _Error3 = Error;
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
        const result = addNonEnumerableProperty.extractExceptionKeysForMessage(name);
        const obj6 = addNonEnumerableProperty;
        if (obj7.isErrorEvent(name)) {
          const _HermesInternal4 = HermesInternal;
          message = "Event `ErrorEvent` captured as exception with message `" + name.message + "`";
        } else {
          const tmp21 = (function getObjectClassName(name) {
            try {
              const _Object = Object;
              const prototypeOf = Object.getPrototypeOf(name);
              name = undefined;
              if (prototypeOf) {
                name = prototypeOf.constructor.name;
              }
              return name;
            } catch (err) {
              return tmp;
            }
          })(name);
          let str5 = "Object";
          if (tmp21) {
            str5 = "Object";
            if ("Object" !== tmp21) {
              const _HermesInternal2 = HermesInternal;
              str5 = "'" + tmp21 + "'";
            }
          }
          const _HermesInternal3 = HermesInternal;
          message = "" + str5 + " captured as exception with keys: " + result;
        }
        obj7 = isInstanceOf;
      }
    } else {
      let syntheticException1;
      if (data != null) {
        syntheticException1 = data.syntheticException;
      }
      if (!syntheticException1) {
        const _Error = Error;
        syntheticException1 = new Error(name);
      }
      const _HermesInternal = HermesInternal;
      syntheticException1.message = "" + name;
      items3 = [syntheticException1, undefined];
    }
  }
  const tmp29 = callback(items3, 2);
  obj = { exception: null };
  obj1 = { values: null };
  const items4 = [exceptionFromError(arg1, tmp29[0])];
  obj1[0] = items4;
  obj[0] = obj1;
  if (tmp29[1]) {
    obj.extra = tmp30;
  }
  const result1 = addContextToFrame.addExceptionTypeValue(obj, undefined, undefined);
  const obj10 = addContextToFrame;
  const result2 = addContextToFrame.addExceptionMechanism(obj, data);
  const obj2 = {};
  const merged = Object.assign(obj);
  let event_id;
  if (data != null) {
    event_id = data.event_id;
  }
  obj2.event_id = event_id;
  return obj2;
};
export { exceptionFromError };
export const parseStackFrames = function parseStackFrames(arg0, stack) {
  return arg0(stack.stack || "", 1);
};
