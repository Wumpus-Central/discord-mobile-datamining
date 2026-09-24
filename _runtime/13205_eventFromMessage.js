// === Module 13205: eventFromMessage ===

// Module 13205 (eventFromMessage)
import _mod13151 from "module_13151" /* 13151 */;
import _mod13152 from "module_13152" /* 13152 */;
import _mod13156 from "module_13156" /* 13156 */;
import _mod13190 from "module_13190" /* 13190 */;
import _slicedToArray from "module_32" /* 32 */;


export const eventFromMessage = function eventFromMessage(fn, value, arg2) {
  let str = arg2;
  if (arg2 === undefined) {
    str = "info";
  }
  if (event_id) {
    event_id = event_id.event_id;
  }
  const obj = { event_id, level: str };
  if (arg4) {
    if (event_id) {
      if (event_id.syntheticException) {
        const arr = fn(event_id.syntheticException.stack || "", 1);
        if (arr.length) {
          const obj2 = { values: null };
          const obj3 = { value, stacktrace: null };
          const obj4 = { frames: arr };
          obj3.stacktrace = obj4;
          const items = [obj3];
          obj2.values = items;
          obj.exception = obj2;
          const result = _mod13156.addExceptionMechanism(obj, { synthetic: true });
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
  obj6 = _mod13152;
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
  if (obj2.isError(name)) {
    const items = [name, undefined];
    let items3 = items;
  } else {
    data.synthetic = true;
    if (tmp2Result.isPlainObject(name)) {
      let normalizeDepth = getOptions;
      if (getOptions) {
        normalizeDepth = getOptions.getOptions().normalizeDepth;
      }
      const obj = { __serialized__: _mod13190.normalizeToSize(name, normalizeDepth) };
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
        const result = _mod13151.extractExceptionKeysForMessage(name);
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
        obj7 = _mod13152;
      }
      const tmp2Result2 = _mod13190;
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
    tmp2Result = _mod13152;
  }
  obj2 = _mod13152;
  [error, tmp27] = items3;
  const obj3 = { type: error.name || error.constructor.name, value: error.message };
  const arr5 = fn(error.stack || "", 1);
  if (arr5.length) {
    const obj4 = { frames: arr5 };
    obj3.stacktrace = obj4;
  }
  const obj5 = { exception: null };
  const obj8 = { values: null };
  const items4 = [obj3];
  obj8.values = items4;
  obj5.exception = obj8;
  if (tmp27) {
    obj5.extra = tmp27;
  }
  const tmp26 = _slicedToArray(items3, 2);
  const tmp28 = error.name || error.constructor.name;
  const tmp29 = error.stack || "";
  const result1 = _mod13156.addExceptionTypeValue(obj5, undefined, undefined);
  const result2 = _mod13156.addExceptionMechanism(obj5, data);
  const obj9 = {};
  const merged = Object.assign(obj5);
  let event_id = data;
  if (data) {
    event_id = data.event_id;
  }
  obj9.event_id = event_id;
  return obj9;
};
export const exceptionFromError = function exceptionFromError(fn, name) {
  const obj = { type: name.name || name.constructor.name, value: name.message };
  const arr = fn(name.stack || "", 1);
  if (arr.length) {
    const obj2 = { frames: arr };
    obj.stacktrace = obj2;
  }
  return obj;
};
export const parseStackFrames = function parseStackFrames(fn, stack) {
  return fn(stack.stack || "", 1);
};