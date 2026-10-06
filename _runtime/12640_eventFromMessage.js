// === Module 12640: eventFromMessage ===

// Module 12640 (eventFromMessage)
import _mod12586 from "module_12586" /* 12586 */;
import _mod12587 from "module_12587" /* 12587 */;
import _mod12591 from "module_12591" /* 12591 */;
import _mod12625 from "module_12625" /* 12625 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

let hasOwnProperty;


export const eventFromMessage = function eventFromMessage(fn, value) {
  let items;
  let obj4;
  let str = info;
  if (info === undefined) {
    str = "info";
  }
  const obj = { event_id: event_id && event_id.event_id, level: str };
  if (attachStacktrace) {
    if (event_id) {
      if (event_id.syntheticException) {
        const tmp2 = event_id.syntheticException.stack || "";
        const arr = fn(tmp2, 1);
        if (arr.length) {
          const obj3 = { value, stacktrace: obj4 };
          const obj2 = { values: items };
          items = [obj3];
          obj4 = { frames: arr };
          obj.exception = obj2;
          const obj5 = _mod12591;
          const result = obj5.addExceptionMechanism(obj, { synthetic: true });
        }
      }
    }
  }
  const obj6 = _mod12587;
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
export const eventFromUnknownInput = function eventFromUnknownInput(getOptions, fn, name, data) {
  let error;
  let items3;
  let items4;
  let obj8;
  let tmp10;
  let tmp27;
  let tmp3Result2;
  function getObjectClassName(name) {
    try {
      const _Object = Object;
      const prototypeOf = Object.getPrototypeOf(name);
      name = undefined;
      if (prototypeOf) {
        name = prototypeOf.constructor.name;
      }
      return name;
    } catch (err) {
    }
  }
  const tmp2 = data && data.data && data.data.mechanism || { handled: true, type: "generic" };
  const obj = _mod12587;
  if (obj.isError(name)) {
    const items = [name, undefined];
    items3 = items;
  } else {
    tmp2.synthetic = true;
    const tmp3Result = _mod12587;
    if (tmp3Result.isPlainObject(name)) {
      const obj2 = { __serialized__: tmp3Result2.normalizeToSize(name, tmp10) };
      tmp10 = getOptions && getOptions.getOptions().normalizeDepth;
      let tmp13;
      tmp3Result2 = _mod12625;
      const keys = Object.keys();
      if (keys !== undefined) {
        while (keys[tmp] !== undefined) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          if (!hasOwnProperty.call(name, tmp15)) {
            continue;
          } else {
            let tmp16 = name[tmp15];
            let _Error2 = Error;
            tmp13 = tmp16;
            if (tmp16 instanceof Error) {
              break;
            }
          }
          continue;
        }
      }
      if (tmp13) {
        const items1 = [tmp13, obj2];
        items3 = items1;
      } else {
        let message;
        if ("name" in name) {
          if (typeof name.name === "string") {
            const _HermesInternal5 = HermesInternal;
            const combined = "'" + name.name + "' captured as exception";
            let sum = combined;
            const tmp22 = "message" in name && typeof name.message === "string";
            if (tmp22) {
              const _HermesInternal6 = HermesInternal;
              sum = combined + " with message '" + name.message + "'";
            }
            message = sum;
          }
          let error1 = data && data.syntheticException;
          if (!error1) {
            const _Error3 = Error;
            const self3 = this;
            const self4 = this;
            error1 = new Error(message);
          }
          error1.message = message;
          const items2 = [error1, obj2];
          items3 = items2;
        }
        if ("message" in name) {
          if (typeof name.message === "string") {
            message = name.message;
          }
        }
        const obj5 = _mod12586;
        const result = obj5.extractExceptionKeysForMessage(name);
        const obj6 = _mod12587;
        if (obj6.isErrorEvent(name)) {
          const _HermesInternal4 = HermesInternal;
          message = "Event `ErrorEvent` captured as exception with message `" + name.message + "`";
        } else {
          const tmp20 = getObjectClassName(name);
          let str5 = "Object";
          if (tmp20) {
            str5 = "Object";
            if ("Object" !== tmp20) {
              const _HermesInternal2 = HermesInternal;
              str5 = "'" + tmp20 + "'";
            }
          }
          const _HermesInternal3 = HermesInternal;
          message = "" + str5 + " captured as exception with keys: " + result;
        }
      }
    } else {
      let error2 = data && data.syntheticException;
      if (!error2) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        error2 = new Error(name);
      }
      const _HermesInternal = HermesInternal;
      error2.message = "" + name;
      items3 = [error2, undefined];
    }
  }
  [error, tmp27] = items3;
  const obj3 = { type: error.name || error.constructor.name, value: error.message };
  _slicedToArray(items3, 2);
  const tmp29 = error.stack || "";
  const arr5 = fn(tmp29, 1);
  if (arr5.length) {
    const obj4 = { frames: arr5 };
    obj3.stacktrace = obj4;
  }
  const obj7 = { exception: obj8 };
  obj8 = { values: items4 };
  items4 = [obj3];
  if (tmp27) {
    obj7.extra = tmp27;
  }
  const obj11 = _mod12591;
  const result1 = obj11.addExceptionTypeValue(obj7, undefined, undefined);
  const obj12 = _mod12591;
  const result2 = obj12.addExceptionMechanism(obj7, tmp2);
  const obj9 = { event_id: data && data.event_id };
  const merged = Object.assign(obj7);
  return obj9;
};
export const exceptionFromError = function exceptionFromError(fn, name) {
  const obj = { type: name.name || name.constructor.name, value: name.message };
  const tmp2 = name.stack || "";
  const arr = fn(tmp2, 1);
  if (arr.length) {
    const obj2 = { frames: arr };
    obj.stacktrace = obj2;
  }
  return obj;
};
export const parseStackFrames = function parseStackFrames(fn, stack) {
  const tmp = stack.stack || "";
  return fn(tmp, 1);
};