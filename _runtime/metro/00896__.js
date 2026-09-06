// === Module 896: ? ===

// Module 896
import _mod682 from "module_682" /* 682 */;

require = arg1;
const dependencyMap = arg6;
function exceptionFromError(arg0, name) {
  const arr = parseStackFrames(arg0, name);
  name = undefined;
  if (name != null) {
    name = name.name;
  }
  let tmp2 = name;
  if (!name) {
    let tmp4 = typeof globalThis.WebAssembly !== "undefined";
    if (typeof globalThis.WebAssembly !== "undefined") {
      tmp4 = undefined !== globalThis.WebAssembly.Exception;
    }
    if (tmp4) {
      tmp4 = name instanceof globalThis.WebAssembly.Exception;
    }
    tmp2 = name;
    if (tmp4) {
      let str2 = "WebAssembly.Exception";
      if (name.message) {
        const _Array = Array;
        str2 = "WebAssembly.Exception";
        if (Array.isArray(name.message)) {
          str2 = "WebAssembly.Exception";
          if (2 == name.message.length) {
            str2 = name.message[0];
          }
        }
      }
      tmp2 = str2;
    }
  }
  let obj = { type: tmp2, value: extractMessage(name) };
  if (arr.length) {
    obj = { frames: arr };
    obj.stacktrace = obj;
  }
  let tmp5 = undefined === obj.type;
  if (tmp5) {
    tmp5 = "" === obj.value;
  }
  if (tmp5) {
    obj.value = "Unrecoverable error caught";
  }
  return obj;
}
function parseStackFrames(fn, stacktrace) {
  try {
    return fn(tmp, tmp2, tmp3);
  } catch (err) {
    return [];
  }
}
function extractMessage(message) {
  if (message != null) {
    let error = message.message;
  }
  let tmp = typeof globalThis.WebAssembly !== "undefined";
  if (typeof globalThis.WebAssembly !== "undefined") {
    tmp = undefined !== globalThis.WebAssembly.Exception;
  }
  if (tmp) {
    tmp = message instanceof globalThis.WebAssembly.Exception;
  }
  if (tmp) {
    const _Array = Array;
    let str3 = "wasm exception";
    if (Array.isArray(message.message)) {
      str3 = "wasm exception";
      if (2 == message.message.length) {
        str3 = message.message[1];
      }
    }
    let str = str3;
  } else {
    str = "No error message";
    if (error) {
      if (!error.error) {
        let result = _mod682._INTERNAL_enhanceErrorWithSentryInfo(message);
      }
      error = error.error;
      result = _mod682._INTERNAL_enhanceErrorWithSentryInfo(error);
    }
  }
  return str;
}
function eventFromUnknownInput(arg0, error, arg2, arg3, arg4) {
  let obj = _mod682;
  if (obj.isErrorEvent(error)) {
    if (error.error) {
      obj = { exception: null };
      obj = { values: null };
      const items = [exceptionFromError(arg0, error.error)];
      obj.values = items;
      obj.exception = obj;
      return obj;
    }
  }
  let tmp2Result = tmp2(682);
  if (!tmp2Result.isDOMError(error)) {
    tmp2Result = tmp2(682);
    if (!tmp2Result.isDOMException(error)) {
      if (tmp2Result1.isError(error)) {
        const obj1 = { exception: null };
        const obj2 = { values: null };
        const items1 = [exceptionFromError(arg0, error)];
        obj2.values = items1;
        obj1.exception = obj2;
        let obj3 = obj1;
      } else {
        if (!tmp2Result2.isPlainObject(error)) {
          if (!tmp2Result3.isEvent(error)) {
            obj3 = {};
            if (arg3) {
              if (arg2) {
                const arr = parseStackFrames(arg0, arg2);
                if (arr.length) {
                  const obj4 = { values: null };
                  const obj5 = { value: error, stacktrace: null };
                  const obj6 = { frames: arr };
                  obj5.stacktrace = obj6;
                  const items2 = [obj5];
                  obj4.values = items2;
                  obj3.exception = obj4;
                }
                const result = tmp2(682).addExceptionMechanism(obj3, { synthetic: true });
                const tmp2Result4 = tmp2(682);
              }
            }
            if (tmp2Result5.isParameterizedString(error)) {
              ({ __sentry_template_string__: obj13.message, __sentry_template_values__: obj13.params } = error);
              obj3.logentry = { message: null, params: null };
              const obj7 = { message: null, params: null };
            } else {
              obj3.message = error;
            }
            tmp2Result5 = tmp2(682);
            const _HermesInternal = HermesInternal;
            const result1 = tmp2(682).addExceptionTypeValue(obj3, "" + error, undefined);
            const tmp2Result6 = tmp2(682);
            const result2 = tmp2(682).addExceptionMechanism(obj3, { synthetic: true });
            const tmp2Result7 = tmp2(682);
          }
          tmp2Result3 = tmp2(682);
        }
        tmp2Result2 = tmp2(682);
        const client = tmp2(682).getClient();
        let normalizeDepth;
        if (client != null) {
          normalizeDepth = client.getOptions().normalizeDepth;
        }
        let tmp13;
        const keys = Object.keys();
        if (keys !== undefined) {
          while (keys[tmp] !== undefined) {
            let _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            let call = hasOwnProperty.call;
            if (!(typeof call === "unknown" ? hasOwnProperty(tmp15) : call(error, tmp15))) {
              continue;
            } else {
              let tmp16 = error[tmp15];
              let _Error = Error;
              tmp13 = tmp16;
              if (tmp16 instanceof Error) {
                break;
              }
            }
            continue;
          }
        }
        let obj8 = { __serialized__: null };
        const tmp2Result8 = tmp2(682);
        obj8.__serialized__ = tmp2(682).normalizeToSize(error, normalizeDepth);
        let obj9 = { exception: null, extra: null };
        let obj10 = { values: null };
        if (tmp13) {
          tmp13 = exceptionFromError(arg0, tmp13);
          const items3 = [tmp13];
          obj10.values = items3;
          obj9.exception = obj10;
          obj9.extra = obj8;
          let tmp24 = obj9;
        } else {
          if (tmp2Result10.isEvent(error)) {
            let str2 = error.constructor.name;
          } else {
            str2 = "Error";
            if (arg4) {
              str2 = "UnhandledRejection";
            }
          }
          const obj11 = { type: str2, value: null };
          tmp2Result10 = tmp2(682);
          let str3 = "exception";
          const result3 = _mod682.extractExceptionKeysForMessage(error);
          if (arg4) {
            str3 = "promise rejection";
          }
          let tmp18Result = tmp18(682);
          if (tmp18Result.isErrorEvent(error)) {
            const _HermesInternal4 = HermesInternal;
            let combined = "Event `ErrorEvent` captured as " + str3 + " with message `" + error.message + "`";
          } else {
            tmp18Result = tmp18(682);
            if (tmp18Result.isEvent(error)) {
              const _HermesInternal3 = HermesInternal;
              combined = "Event `" + (function getObjectClassName(error) {
                try {
                  const _Object = Object;
                  const prototypeOf = Object.getPrototypeOf(error);
                  let name;
                  if (prototypeOf) {
                    name = prototypeOf.constructor.name;
                  }
                  return name;
                } catch (err) {
                  return tmp;
                }
              })(error) + "` (type=" + error.type + ") captured as " + str3;
            } else {
              const _HermesInternal2 = HermesInternal;
              combined = "Object captured as " + str3 + " with keys: " + result3;
            }
          }
          obj11.value = combined;
          const items4 = [obj11];
          obj10.values = items4;
          obj9.exception = obj10;
          obj9.extra = obj8;
          tmp24 = obj9;
          if (arg2) {
            const arr4 = parseStackFrames(arg0, arg2);
            tmp24 = obj9;
            if (arr4.length) {
              const obj12 = { frames: arr4 };
              obj9.exception.values[0].stacktrace = obj12;
              tmp24 = obj9;
            }
          }
        }
        obj10 = tmp2(682);
        obj8 = obj10.addExceptionMechanism;
        obj9 = obj8(tmp24, { synthetic: true });
        const tmp2Result9 = tmp2(682);
      }
      return obj3;
    }
  }
  if ("stack" in error) {
    const obj13 = { exception: null };
    const obj14 = { values: null };
    const items5 = [exceptionFromError(arg0, error)];
    obj14.values = items5;
    obj13.exception = obj14;
    let obj15 = obj13;
  } else {
    let name = error.name;
    if (!name) {
      let str12 = "DOMException";
      if (tmp2Result11.isDOMError(error)) {
        str12 = "DOMError";
      }
      name = str12;
      tmp2Result11 = tmp2(682);
    }
    let combined1 = name;
    if (error.message) {
      const _HermesInternal5 = HermesInternal;
      combined1 = "" + name + ": " + error.message;
    }
    obj15 = {};
    if (arg3) {
      if (arg2) {
        const arr7 = parseStackFrames(arg0, arg2);
        if (arr7.length) {
          const obj16 = { values: null };
          const obj17 = { value: combined1, stacktrace: null };
          const obj18 = { frames: arr7 };
          obj17.stacktrace = obj18;
          const items6 = [obj17];
          obj16.values = items6;
          obj15.exception = obj16;
        }
        const result4 = tmp2(682).addExceptionMechanism(obj15, { synthetic: true });
        const tmp2Result12 = tmp2(682);
      }
    }
    if (tmp2Result13.isParameterizedString(combined1)) {
      ({ __sentry_template_string__: obj37.message, __sentry_template_values__: obj37.params } = combined1);
      obj15.logentry = { message: null, params: null };
      const obj19 = { message: null, params: null };
    } else {
      obj15.message = combined1;
    }
    tmp2Result13 = tmp2(682);
    const result5 = tmp2(682).addExceptionTypeValue(obj15, combined1);
    const tmp2Result14 = tmp2(682);
  }
  if ("code" in error) {
    const obj20 = {};
    const merged = Object.assign(obj15.tags);
    const _HermesInternal6 = HermesInternal;
    obj20["DOMException.code"] = "" + error.code;
    obj15.tags = obj20;
  }
  return obj15;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const re4 = /Minified React error #\d+;/i;

export const eventFromException = function eventFromException(arg0, arg1, syntheticException, arg3) {
  syntheticException = undefined;
  if (syntheticException != null) {
    syntheticException = syntheticException.syntheticException;
  }
  const tmpResult = eventFromUnknownInput(arg0, arg1, syntheticException, arg3);
  const result = _mod682.addExceptionMechanism(tmpResult);
  tmpResult.level = "error";
  let event_id;
  if (syntheticException != null) {
    event_id = syntheticException.event_id;
  }
  if (event_id) {
    tmpResult.event_id = syntheticException.event_id;
  }
  return _mod682.resolvedSyncPromise(tmpResult);
};
export const eventFromMessage = function eventFromMessage(arg0, value, arg2, syntheticException) {
  let str = arg2;
  if (arg2 === undefined) {
    str = "info";
  }
  syntheticException = undefined;
  if (syntheticException != null) {
    syntheticException = syntheticException.syntheticException;
  }
  let obj = {};
  if (arg4) {
    if (syntheticException) {
      const arr = parseStackFrames(arg0, syntheticException);
      if (arr.length) {
        obj = { values: null };
        obj = { value, stacktrace: null };
        const obj1 = { frames: arr };
        obj.stacktrace = obj1;
        const items = [obj];
        obj.values = items;
        obj.exception = obj;
      }
      const result = _mod682.addExceptionMechanism(obj, { synthetic: true });
    }
  }
  if (obj6.isParameterizedString(value)) {
    ({ __sentry_template_string__: obj7.message, __sentry_template_values__: obj7.params } = value);
    obj.logentry = { message: null, params: null };
    const obj2 = { message: null, params: null };
  } else {
    obj.message = value;
  }
  obj.level = str;
  let event_id;
  if (syntheticException != null) {
    event_id = syntheticException.event_id;
  }
  if (event_id) {
    obj.event_id = syntheticException.event_id;
  }
  obj6 = _mod682;
  return _mod682.resolvedSyncPromise(obj);
};
export { eventFromUnknownInput };
export { exceptionFromError };
export { extractMessage };
export const extractType = function extractType(name) {
  name = undefined;
  if (name != null) {
    name = name.name;
  }
  let tmp2 = name;
  if (!name) {
    let tmp4 = typeof globalThis.WebAssembly !== "undefined";
    if (typeof globalThis.WebAssembly !== "undefined") {
      tmp4 = undefined !== globalThis.WebAssembly.Exception;
    }
    if (tmp4) {
      tmp4 = name instanceof globalThis.WebAssembly.Exception;
    }
    tmp2 = name;
    if (tmp4) {
      let str2 = "WebAssembly.Exception";
      if (name.message) {
        const _Array = Array;
        str2 = "WebAssembly.Exception";
        if (Array.isArray(name.message)) {
          str2 = "WebAssembly.Exception";
          if (2 == name.message.length) {
            str2 = name.message[0];
          }
        }
      }
      tmp2 = str2;
    }
  }
  return tmp2;
};