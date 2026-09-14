// _runtime/metro/00896__.js
import _mod682 from "00682__.js";

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
  const obj = { type: tmp2, value: extractMessage(name) };
  if (arr.length) {
    const obj2 = { frames: arr };
    obj.stacktrace = obj2;
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
  if (obj.isErrorEvent(error)) {
    if (error.error) {
      const obj2 = { exception: null };
      const obj3 = { values: null };
      const items = [exceptionFromError(arg0, error.error)];
      obj3.values = items;
      obj2.exception = obj3;
      return obj2;
    }
  }
  obj = _mod682;
  if (!tmp2Result.isDOMError(error)) {
    if (!tmp2Result16.isDOMException(error)) {
      if (tmp2Result17.isError(error)) {
        const obj4 = { exception: null };
        const obj5 = { values: null };
        const items1 = [exceptionFromError(arg0, error)];
        obj5.values = items1;
        obj4.exception = obj5;
        let obj6 = obj4;
      } else {
        if (!tmp2Result18.isPlainObject(error)) {
          if (!tmp2Result19.isEvent(error)) {
            obj6 = {};
            if (arg3) {
              if (arg2) {
                const arr = parseStackFrames(arg0, arg2);
                if (arr.length) {
                  const obj7 = { values: null };
                  const obj8 = { value: error, stacktrace: null };
                  const obj9 = { frames: arr };
                  obj8.stacktrace = obj9;
                  const items2 = [obj8];
                  obj7.values = items2;
                  obj6.exception = obj7;
                }
                const result = _mod682.addExceptionMechanism(obj6, { synthetic: true });
                const tmp2Result20 = _mod682;
              }
            }
            if (tmp2Result21.isParameterizedString(error)) {
              ({ __sentry_template_string__: obj13.message, __sentry_template_values__: obj13.params } = error);
              obj6.logentry = { message: null, params: null };
              const obj10 = { message: null, params: null };
            } else {
              obj6.message = error;
            }
            tmp2Result21 = _mod682;
            const _HermesInternal = HermesInternal;
            const result1 = _mod682.addExceptionTypeValue(obj6, "" + error, undefined);
            const tmp2Result22 = _mod682;
            const result2 = _mod682.addExceptionMechanism(obj6, { synthetic: true });
            const tmp2Result23 = _mod682;
          }
          tmp2Result19 = _mod682;
        }
        tmp2Result18 = _mod682;
        const client = _mod682.getClient();
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
        let obj11 = { __serialized__: null };
        const tmp2Result24 = _mod682;
        obj11.__serialized__ = _mod682.normalizeToSize(error, normalizeDepth);
        let obj12 = { exception: null, extra: null };
        let obj14 = { values: null };
        if (tmp13) {
          tmp13 = exceptionFromError(arg0, tmp13);
          const items3 = [tmp13];
          obj14.values = items3;
          obj12.exception = obj14;
          obj12.extra = obj11;
          let tmp24 = obj12;
        } else {
          if (tmp2Result26.isEvent(error)) {
            let str2 = error.constructor.name;
          } else {
            str2 = "Error";
            if (arg4) {
              str2 = "UnhandledRejection";
            }
          }
          const obj15 = { type: str2, value: null };
          tmp2Result26 = _mod682;
          let str3 = "exception";
          const result3 = _mod682.extractExceptionKeysForMessage(error);
          if (arg4) {
            str3 = "promise rejection";
          }
          if (tmp18Result.isErrorEvent(error)) {
            const _HermesInternal4 = HermesInternal;
            let combined = "Event `ErrorEvent` captured as " + str3 + " with message `" + error.message + "`";
          } else {
            if (tmp18Result2.isEvent(error)) {
              const _HermesInternal3 = HermesInternal;
              combined =
                "Event `" +
                (function getObjectClassName(error) {
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
                })(error) +
                "` (type=" +
                error.type +
                ") captured as " +
                str3;
            } else {
              const _HermesInternal2 = HermesInternal;
              combined = "Object captured as " + str3 + " with keys: " + result3;
            }
            tmp18Result2 = _mod682;
          }
          obj15.value = combined;
          const items4 = [obj15];
          obj14.values = items4;
          obj12.exception = obj14;
          obj12.extra = obj11;
          tmp24 = obj12;
          if (arg2) {
            const arr4 = parseStackFrames(arg0, arg2);
            tmp24 = obj12;
            if (arr4.length) {
              const obj16 = { frames: arr4 };
              obj12.exception.values[0].stacktrace = obj16;
              tmp24 = obj12;
            }
          }
          tmp18Result = _mod682;
        }
        obj14 = _mod682;
        obj11 = obj14.addExceptionMechanism;
        obj12 = obj11(tmp24, { synthetic: true });
        const tmp2Result25 = _mod682;
      }
      return obj6;
    }
    tmp2Result16 = _mod682;
  }
  if ("stack" in error) {
    const obj17 = { exception: null };
    const obj18 = { values: null };
    const items5 = [exceptionFromError(arg0, error)];
    obj18.values = items5;
    obj17.exception = obj18;
    let obj19 = obj17;
  } else {
    let name = error.name;
    if (!name) {
      let str12 = "DOMException";
      if (tmp2Result27.isDOMError(error)) {
        str12 = "DOMError";
      }
      name = str12;
      tmp2Result27 = _mod682;
    }
    let combined1 = name;
    if (error.message) {
      const _HermesInternal5 = HermesInternal;
      combined1 = "" + name + ": " + error.message;
    }
    obj19 = {};
    if (arg3) {
      if (arg2) {
        const arr7 = parseStackFrames(arg0, arg2);
        if (arr7.length) {
          const obj20 = { values: null };
          const obj21 = { value: combined1, stacktrace: null };
          const obj22 = { frames: arr7 };
          obj21.stacktrace = obj22;
          const items6 = [obj21];
          obj20.values = items6;
          obj19.exception = obj20;
        }
        const result4 = _mod682.addExceptionMechanism(obj19, { synthetic: true });
        const tmp2Result28 = _mod682;
      }
    }
    if (tmp2Result29.isParameterizedString(combined1)) {
      ({ __sentry_template_string__: obj37.message, __sentry_template_values__: obj37.params } = combined1);
      obj19.logentry = { message: null, params: null };
      const obj23 = { message: null, params: null };
    } else {
      obj19.message = combined1;
    }
    tmp2Result29 = _mod682;
    const result5 = _mod682.addExceptionTypeValue(obj19, combined1);
    const tmp2Result30 = _mod682;
  }
  if ("code" in error) {
    const obj25 = {};
    const merged = Object.assign(obj19.tags);
    const _HermesInternal6 = HermesInternal;
    obj25["DOMException.code"] = "" + error.code;
    obj19.tags = obj25;
  }
  return obj19;
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
export const eventFromMessage = function eventFromMessage(arg0, value, arg2) {
  let str = arg2;
  if (arg2 === undefined) {
    str = "info";
  }
  let syntheticException;
  if (syntheticException != null) {
    syntheticException = syntheticException.syntheticException;
  }
  const obj = {};
  if (arg4) {
    if (syntheticException) {
      const arr = parseStackFrames(arg0, syntheticException);
      if (arr.length) {
        const obj2 = { values: null };
        const obj3 = { value, stacktrace: null };
        const obj4 = { frames: arr };
        obj3.stacktrace = obj4;
        const items = [obj3];
        obj2.values = items;
        obj.exception = obj2;
      }
      const result = _mod682.addExceptionMechanism(obj, { synthetic: true });
    }
  }
  if (obj6.isParameterizedString(value)) {
    ({ __sentry_template_string__: obj7.message, __sentry_template_values__: obj7.params } = value);
    obj.logentry = { message: null, params: null };
    const obj8 = { message: null, params: null };
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
