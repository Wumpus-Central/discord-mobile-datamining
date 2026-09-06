// === Module 12857: eventFromMessage ===

// Module 12857 (eventFromMessage)
import _mod12803 from "module_12803" /* 12803 */;
import _mod12804 from "module_12804" /* 12804 */;
import _mod12808 from "module_12808" /* 12808 */;
import _slicedToArray from "module_32" /* 32 */;


export const eventFromMessage = function eventFromMessage(fn, value, arg2, event_id) {
  let str = arg2;
  if (arg2 === undefined) {
    str = "info";
  }
  if (event_id) {
    event_id = event_id.event_id;
  }
  let obj = { event_id, level: str };
  if (arg4) {
    if (event_id) {
      if (event_id.syntheticException) {
        const arr = fn(event_id.syntheticException.stack || "", 1);
        if (arr.length) {
          obj = { values: null };
          obj = { value, stacktrace: null };
          const obj1 = { frames: arr };
          obj.stacktrace = obj1;
          const items = [obj];
          obj.values = items;
          obj.exception = obj;
          const result = _mod12808.addExceptionMechanism(obj, { synthetic: true });
        }
        const tmp = event_id.syntheticException.stack || "";
      }
    }
  }
  if (obj6.isParameterizedString(value)) {
    ({ __sentry_template_string__: obj7.message, __sentry_template_values__: obj7.params } = value);
    obj.logentry = { message: null, params: null };
    return obj;
  } else {
    obj.message = value;
    return obj;
  }
  obj6 = _mod12804;
};
export const eventFromUnknownInput = function eventFromUnknownInput(getOptions, fn, name, data) {
  if (data) {
    data = data.data;
  }
  if (data) {
    data = data.data.mechanism;
  }
  if (!data) {
    data = { handled: true, type: "generic" };
  }
  let obj1 = _mod12804;
  if (obj1.isError(name)) {
    const items = [name, undefined];
    let items3 = items;
  } else {
    data.synthetic = true;
    let tmp2Result = tmp2(12804);
    if (tmp2Result.isPlainObject(name)) {
      let normalizeDepth = getOptions;
      if (getOptions) {
        normalizeDepth = getOptions.getOptions().normalizeDepth;
      }
      let obj = { __serialized__: null };
      tmp2Result = tmp2(12842);
      obj.__serialized__ = tmp2Result.normalizeToSize(name, normalizeDepth);
      let tmp12;
      const keys = Object.keys();
      if (keys !== undefined) {
        while (keys[tmp] !== undefined) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          let call = hasOwnProperty.call;
          if (!(typeof call === "unknown" ? hasOwnProperty(tmp14) : call(name, tmp14))) {
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
        if ("name" in name) {
          if (typeof name.name === "string") {
            const _HermesInternal5 = HermesInternal;
            const combined = "'" + name.name + "' captured as exception";
            let sum = combined;
            if (tmp21) {
              const _HermesInternal6 = HermesInternal;
              sum = combined + " with message '" + name.message + "'";
            }
            let message = sum;
            tmp21 = "message" in name && typeof name.message === "string";
          }
          let syntheticException2 = data;
          if (data) {
            syntheticException2 = data.syntheticException;
          }
          if (!syntheticException2) {
            const _Error3 = Error;
            syntheticException2 = new Error(message);
          }
          syntheticException2.message = message;
          const items2 = [syntheticException2, obj];
          items3 = items2;
        }
        if ("message" in name) {
          if (typeof name.message === "string") {
            message = name.message;
          }
        }
        const result = _mod12803.extractExceptionKeysForMessage(name);
        if (obj7.isErrorEvent(name)) {
          const _HermesInternal4 = HermesInternal;
          message = "Event `ErrorEvent` captured as exception with message `" + name.message + "`";
        } else {
          const tmp19 = (function getObjectClassName(name) {
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
        obj7 = _mod12804;
      }
    } else {
      let syntheticException = data;
      if (data) {
        syntheticException = data.syntheticException;
      }
      if (!syntheticException) {
        const _Error = Error;
        syntheticException = new Error(name);
      }
      const _HermesInternal = HermesInternal;
      syntheticException.message = "" + name;
      items3 = [syntheticException, undefined];
    }
  }
  [error, tmp27] = _slicedToArray(items3, 2);
  obj = { type: error.name || error.constructor.name, value: error.message };
  const arr5 = fn(error.stack || "", 1);
  if (arr5.length) {
    obj1 = { frames: arr5 };
    obj.stacktrace = obj1;
  }
  const obj2 = { exception: null };
  const obj3 = { values: null };
  const items4 = [obj];
  obj3.values = items4;
  obj2.exception = obj3;
  if (tmp27) {
    obj2.extra = tmp27;
  }
  const tmp26 = _slicedToArray(items3, 2);
  const tmp28 = error.name || error.constructor.name;
  const tmp29 = error.stack || "";
  const result1 = _mod12808.addExceptionTypeValue(obj2, undefined, undefined);
  const result2 = _mod12808.addExceptionMechanism(obj2, data);
  const obj4 = {};
  const merged = Object.assign(obj2);
  let event_id = data;
  if (data) {
    event_id = data.event_id;
  }
  obj4.event_id = event_id;
  return obj4;
};
export const exceptionFromError = function exceptionFromError(fn, name) {
  let obj = { type: name.name || name.constructor.name, value: name.message };
  const arr = fn(name.stack || "", 1);
  if (arr.length) {
    obj = { frames: arr };
    obj.stacktrace = obj;
  }
  return obj;
};
export const parseStackFrames = function parseStackFrames(fn, stack) {
  return fn(stack.stack || "", 1);
};