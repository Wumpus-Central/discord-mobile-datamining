// === Module 907: eventFromException ===

// Module 907 (eventFromException)
import _mod693 from "module_693" /* 693 */;

let hasOwnProperty;

function exceptionFromError(arg0, name) {
  const arr = parseStackFrames(arg0, name);
  name = undefined;
  if (name != null) {
    name = name.name;
  }
  let tmp2 = name;
  if (!tmp2) {
    let tmp4 = typeof globalThis.WebAssembly !== "undefined";
    if (typeof globalThis.WebAssembly !== "undefined") {
      const WebAssembly3 = globalThis.WebAssembly;
      tmp4 = undefined !== globalThis.WebAssembly.Exception;
    }
    if (tmp4) {
      const WebAssembly2 = globalThis.WebAssembly;
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
  const tmp5 = undefined === obj.type && "" === obj.value;
  if (tmp5) {
    obj.value = "Unrecoverable error caught";
  }
  return obj;
}
function parseStackFrames(fn, stacktrace) {
  let regex;
  function getSkipFirstStackStringLines(message) {
    const tmp = message;
    if (tmp) {
      if (regex.test(message.message)) {
        return 1;
      }
    }
    return 0;
  }
  let tmp = stacktrace.stacktrace || stacktrace.stack || "";
  const tmp2 = getSkipFirstStackStringLines(stacktrace);
  try {
    return fn(tmp, tmp2, tmp3);
  } catch (err) {
    return [];
  }
}
function extractMessage(message) {
  let str;
  if (message != null) {
    message = message.message;
  }
  let tmp = typeof globalThis.WebAssembly !== "undefined";
  if (typeof globalThis.WebAssembly !== "undefined") {
    const WebAssembly2 = globalThis.WebAssembly;
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
    str = str3;
  } else {
    str = "No error message";
    if (message) {
      if (message.error) {
        let result;
        if (typeof message.error.message === "string") {
          const obj2 = _mod693;
          result = obj2._INTERNAL_enhanceErrorWithSentryInfo(message.error);
        }
        str = result;
      }
      const obj = _mod693;
      result = obj._INTERNAL_enhanceErrorWithSentryInfo(message);
    }
  }
  return str;
}
function eventFromUnknownInput(arg0, error, arg2, arg3, arg4) {
  let combined;
  let items;
  let items1;
  let items2;
  let items5;
  let items6;
  let obj18;
  let obj19;
  let obj22;
  let obj3;
  let obj5;
  let obj9;
  let tmp2Result26;
  function getObjectClassName(error) {
    try {
      const _Object = Object;
      const prototypeOf = Object.getPrototypeOf(error);
      let name;
      if (prototypeOf) {
        name = prototypeOf.constructor.name;
      }
      return name;
    } catch (err) {
    }
  }
  const obj = _mod693;
  if (obj.isErrorEvent(error)) {
    if (error.error) {
      const obj2 = { exception: obj3 };
      obj3 = { values: items };
      items = [exceptionFromError(arg0, error.error)];
      return obj2;
    }
  }
  const tmp2Result = _mod693;
  if (!tmp2Result.isDOMError(error)) {
    const tmp2Result17 = _mod693;
    if (!tmp2Result17.isDOMException(error)) {
      let obj6;
      const tmp2Result18 = _mod693;
      if (tmp2Result18.isError(error)) {
        const obj4 = { exception: obj5 };
        obj5 = { values: items1 };
        items1 = [exceptionFromError(arg0, error)];
        obj6 = obj4;
      } else {
        let tmp24;
        const tmp2Result19 = _mod693;
        if (!tmp2Result19.isPlainObject(error)) {
          const tmp2Result20 = _mod693;
          if (!tmp2Result20.isEvent(error)) {
            obj6 = {};
            if (arg3) {
              if (arg2) {
                const arr = parseStackFrames(arg0, arg2);
                if (arr.length) {
                  const obj8 = { value: error, stacktrace: obj9 };
                  const obj7 = { values: items2 };
                  items2 = [obj8];
                  obj9 = { frames: arr };
                  obj6.exception = obj7;
                }
                const tmp2Result21 = _mod693;
                const result = tmp2Result21.addExceptionMechanism(obj6, { synthetic: true });
              }
            }
            const tmp2Result22 = _mod693;
            if (tmp2Result22.isParameterizedString(error)) {
              const obj10 = { message: null, params: null };
              ({ __sentry_template_string__: obj13.message, __sentry_template_values__: obj13.params } = error);
              obj6.logentry = obj10;
            } else {
              obj6.message = error;
            }
            const _HermesInternal = HermesInternal;
            const tmp2Result23 = _mod693;
            const result1 = tmp2Result23.addExceptionTypeValue(obj6, "" + error, undefined);
            const tmp2Result24 = _mod693;
            const result2 = tmp2Result24.addExceptionMechanism(obj6, { synthetic: true });
          }
        }
        const tmp2Result25 = _mod693;
        const client = tmp2Result25.getClient();
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
            if (!hasOwnProperty.call(error, tmp15)) {
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
        const obj11 = { __serialized__: tmp2Result26.normalizeToSize(error, normalizeDepth) };
        const obj12 = { exception: null, extra: null };
        const obj14 = { values: null };
        tmp2Result26 = _mod693;
        if (tmp13) {
          const items3 = [exceptionFromError(arg0, tmp13)];
          obj14.values = items3;
          obj12.exception = obj14;
          obj12.extra = obj11;
          tmp24 = obj12;
        } else {
          let str2;
          const tmp2Result27 = _mod693;
          if (tmp2Result27.isEvent(error)) {
            str2 = error.constructor.name;
          } else {
            str2 = "Error";
            if (arg4) {
              str2 = "UnhandledRejection";
            }
          }
          let str3 = "exception";
          const obj15 = { type: str2, value: combined };
          const obj24 = _mod693;
          const result3 = obj24.extractExceptionKeysForMessage(error);
          if (arg4) {
            str3 = "promise rejection";
          }
          const tmp18Result = _mod693;
          if (tmp18Result.isErrorEvent(error)) {
            const _HermesInternal4 = HermesInternal;
            combined = "Event `ErrorEvent` captured as " + str3 + " with message `" + error.message + "`";
          } else {
            const tmp18Result2 = _mod693;
            if (tmp18Result2.isEvent(error)) {
              const _HermesInternal3 = HermesInternal;
              combined = "Event `" + getObjectClassName(error) + "` (type=" + error.type + ") captured as " + str3;
            } else {
              const _HermesInternal2 = HermesInternal;
              combined = "Object captured as " + str3 + " with keys: " + result3;
            }
          }
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
        }
        const tmp2Result28 = _mod693;
        const result4 = tmp2Result28.addExceptionMechanism(tmp24, { synthetic: true });
        obj6 = tmp24;
      }
      return obj6;
    }
  }
  if ("stack" in error) {
    const obj17 = { exception: obj18 };
    obj18 = { values: items5 };
    items5 = [exceptionFromError(arg0, error)];
    obj19 = obj17;
  } else {
    let name = error.name;
    if (!name) {
      let str12 = "DOMException";
      const tmp2Result29 = _mod693;
      if (tmp2Result29.isDOMError(error)) {
        str12 = "DOMError";
      }
      name = str12;
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
          const obj21 = { value: combined1, stacktrace: obj22 };
          const obj20 = { values: items6 };
          items6 = [obj21];
          obj22 = { frames: arr7 };
          obj19.exception = obj20;
        }
        const tmp2Result30 = _mod693;
        const result5 = tmp2Result30.addExceptionMechanism(obj19, { synthetic: true });
      }
    }
    const tmp2Result31 = _mod693;
    if (tmp2Result31.isParameterizedString(combined1)) {
      const obj23 = { message: null, params: null };
      ({ __sentry_template_string__: obj38.message, __sentry_template_values__: obj38.params } = combined1);
      obj19.logentry = obj23;
    } else {
      obj19.message = combined1;
    }
    const tmp2Result32 = _mod693;
    const result6 = tmp2Result32.addExceptionTypeValue(obj19, combined1);
  }
  if ("code" in error) {
    const obj25 = { "DOMException.code": "" + error.code };
    const merged = Object.assign(obj19.tags);
    const _HermesInternal6 = HermesInternal;
    obj19.tags = obj25;
  }
  return obj19;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const re4 = /Minified React error #\d+;/i;

export const eventFromException = function eventFromException(stackParser, arg1, syntheticException, attachStacktrace) {
  syntheticException = undefined;
  if (syntheticException != null) {
    syntheticException = syntheticException.syntheticException;
  }
  const tmpResult = eventFromUnknownInput(stackParser, arg1, syntheticException, attachStacktrace);
  const obj = _mod693;
  const result = obj.addExceptionMechanism(tmpResult);
  tmpResult.level = "error";
  let event_id;
  if (syntheticException != null) {
    event_id = syntheticException.event_id;
  }
  if (event_id) {
    tmpResult.event_id = syntheticException.event_id;
  }
  const tmp4Result = _mod693;
  return tmp4Result.resolvedSyncPromise(tmpResult);
};
export const eventFromMessage = function eventFromMessage(stackParser, value) {
  let items;
  let obj4;
  let str = info;
  if (info === undefined) {
    str = "info";
  }
  let syntheticException;
  if (syntheticException != null) {
    syntheticException = syntheticException.syntheticException;
  }
  const obj = { level: str };
  if (attachStacktrace) {
    if (syntheticException) {
      const arr = parseStackFrames(stackParser, syntheticException);
      if (arr.length) {
        const obj3 = { value, stacktrace: obj4 };
        const obj2 = { values: items };
        items = [obj3];
        obj4 = { frames: arr };
        obj.exception = obj2;
      }
      const obj5 = _mod693;
      const result = obj5.addExceptionMechanism(obj, { synthetic: true });
    }
  }
  const obj6 = _mod693;
  if (obj6.isParameterizedString(value)) {
    const obj8 = { message: null, params: null };
    ({ __sentry_template_string__: obj7.message, __sentry_template_values__: obj7.params } = value);
    obj.logentry = obj8;
  } else {
    obj.message = value;
  }
  let event_id;
  if (syntheticException != null) {
    event_id = syntheticException.event_id;
  }
  if (event_id) {
    obj.event_id = syntheticException.event_id;
  }
  const tmp7Result = _mod693;
  return tmp7Result.resolvedSyncPromise(obj);
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
  if (!tmp2) {
    let tmp4 = typeof globalThis.WebAssembly !== "undefined";
    if (typeof globalThis.WebAssembly !== "undefined") {
      const WebAssembly3 = globalThis.WebAssembly;
      tmp4 = undefined !== globalThis.WebAssembly.Exception;
    }
    if (tmp4) {
      const WebAssembly2 = globalThis.WebAssembly;
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