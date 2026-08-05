// _runtime/07435_eventFromMessage.js
import _slicedToArray from "_slicedToArray";
import { addNonEnumerableProperty } from "07381_addNonEnumerableProperty.js";
import { isInstanceOf } from "07382_isInstanceOf.js";
import { addContextToFrame } from "07386_addContextToFrame.js";


export const eventFromMessage = function eventFromMessage(arg0, message, arg2, event_id) {
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
        const arr = arg0(event_id.syntheticException.stack || "", 1);
        if (arr.length) {
          obj = { values: null };
          obj = { value: null, stacktrace: null };
          obj[0] = message;
          const obj1 = { frames: null };
          obj1[0] = arr;
          obj[1] = obj1;
          const items = [obj];
          obj[0] = items;
          obj.exception = obj;
          const result = addContextToFrame.addExceptionMechanism(obj, { synthetic: true });
          const obj5 = addContextToFrame;
        }
        const tmp = event_id.syntheticException.stack || "";
      }
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
  let error;
  let tmp27;
  if (data) {
    data = data.data;
  }
  if (data) {
    data = data.data.mechanism;
  }
  if (!data) {
    data = { handled: true, type: "generic" };
  }
  let obj1 = isInstanceOf;
  if (obj1.isError(name)) {
    const items = [name, undefined];
    let items3 = items;
  } else {
    data.synthetic = true;
    let tmp2Result = tmp2(7382);
    if (tmp2Result.isPlainObject(name)) {
      let normalizeDepth = getOptions;
      if (getOptions) {
        normalizeDepth = getOptions.getOptions().normalizeDepth;
      }
      let obj = { __serialized__: null };
      tmp2Result = tmp2(7420);
      obj[0] = tmp2Result.normalizeToSize(name, normalizeDepth);
      let tmp12;
      const keys = Object.keys();
      if (keys !== undefined) {
        while (keys[tmp] !== undefined) {
          let tmp33 = tmp14;
          let _Object = Object;
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
        const result = addNonEnumerableProperty.extractExceptionKeysForMessage(name);
        const obj6 = addNonEnumerableProperty;
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
        obj7 = isInstanceOf;
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
  const arr5 = arg1(error.stack || "", 1);
  if (arr5.length) {
    obj1 = { frames: null };
    obj1[0] = arr5;
    obj.stacktrace = obj1;
  }
  const obj2 = { exception: { values: items4 } };
  items4 = [obj];
  if (tmp27) {
    obj2.extra = tmp27;
  }
  const tmp26 = _slicedToArray(items3, 2);
  const tmp28 = error.name || error.constructor.name;
  const tmp29 = error.stack || "";
  const result1 = addContextToFrame.addExceptionTypeValue(obj2, undefined, undefined);
  const obj11 = addContextToFrame;
  const result2 = addContextToFrame.addExceptionMechanism(obj2, data);
  const obj3 = {};
  const merged = Object.assign(obj2);
  let event_id = data;
  if (data) {
    event_id = data.event_id;
  }
  obj3.event_id = event_id;
  return obj3;
};
export const exceptionFromError = function exceptionFromError(arg0, name) {
  let obj = { type: name.name || name.constructor.name, value: name.message };
  const arr = arg0(name.stack || "", 1);
  if (arr.length) {
    obj = { frames: null };
    obj[0] = arr;
    obj.stacktrace = obj;
  }
  return obj;
};
export const parseStackFrames = function parseStackFrames(arg0, stack) {
  return arg0(stack.stack || "", 1);
};