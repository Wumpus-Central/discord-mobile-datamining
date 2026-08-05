import { registerSpanErrorInstrumentation } from "00817_registerSpanErrorInstrumentation.js";
// _runtime/01031_exceptionFromError.js
const require = arg1;
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
    obj = { frames: null };
    obj[0] = arr;
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
function parseStackFrames(arg0, stacktrace) {
  try {
    return arg0(tmp, tmp2, tmp3);
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
        let result = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */._INTERNAL_enhanceErrorWithSentryInfo(message);
        const obj = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */;
      }
      error = error.error;
      result = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */._INTERNAL_enhanceErrorWithSentryInfo(error);
      const obj2 = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */;
    }
  }
  return str;
}
function eventFromUnknownInput(arg0, error) {
  let obj = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */;
  if (obj.isErrorEvent(error)) {
    if (error.error) {
      obj = { exception: null };
      obj = { values: null };
      const items = [exceptionFromError(arg0, error.error)];
      obj[0] = items;
      obj[0] = obj;
      return obj;
    }
  }
  let tmp2Result = tmp2(817);
  if (!tmp2Result.isDOMError(error)) {
    tmp2Result = tmp2(817);
    if (!tmp2Result.isDOMException(error)) {
      if (tmp2Result1.isError(error)) {
        const obj1 = { exception: null };
        const obj2 = { values: null };
        const items1 = [exceptionFromError(arg0, error)];
        obj2[0] = items1;
        obj1[0] = obj2;
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
                  const obj5 = { value: null, stacktrace: null };
                  obj5[0] = error;
                  const obj6 = { frames: null };
                  obj6[0] = arr;
                  obj5[1] = obj6;
                  const items2 = [obj5];
                  obj4[0] = items2;
                  obj3.exception = obj4;
                }
                const result = tmp2(817).addExceptionMechanism(obj3, { synthetic: true });
                const tmp2Result4 = tmp2(817);
              }
            }
            if (tmp2Result5.isParameterizedString(error)) {
              ({ __sentry_template_string__: obj13[0], __sentry_template_values__: obj13[1] } = error);
              obj3.logentry = { message: null, params: null };
              const obj7 = { message: null, params: null };
            } else {
              obj3.message = error;
            }
            tmp2Result5 = tmp2(817);
            const _HermesInternal = HermesInternal;
            const result1 = tmp2(817).addExceptionTypeValue(obj3, "" + error, undefined);
            const tmp2Result6 = tmp2(817);
            const result2 = tmp2(817).addExceptionMechanism(obj3, { synthetic: true });
            const tmp2Result7 = tmp2(817);
          }
          tmp2Result3 = tmp2(817);
        }
        tmp2Result2 = tmp2(817);
        const client = tmp2(817).getClient();
        let normalizeDepth;
        if (client != null) {
          normalizeDepth = client.getOptions().normalizeDepth;
        }
        let tmp13;
        const keys = Object.keys();
        if (keys !== undefined) {
          while (keys[tmp] !== undefined) {
            let tmp39 = tmp15;
            let _Object = Object;
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
        const tmp2Result8 = tmp2(817);
        obj8[0] = tmp2(817).normalizeToSize(error, normalizeDepth);
        let obj9 = { exception: null, extra: null };
        let obj10 = { values: null };
        if (tmp13) {
          tmp13 = exceptionFromError(arg0, tmp13);
          const items3 = [tmp13];
          obj10[0] = items3;
          obj9[0] = obj10;
          obj9[1] = obj8;
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
          const obj11 = { type: null, value: null };
          obj11[0] = str2;
          tmp2Result10 = tmp2(817);
          let str3 = "exception";
          const result3 = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.extractExceptionKeysForMessage(error);
          if (arg4) {
            str3 = "promise rejection";
          }
          let tmp18Result = tmp18(817);
          if (tmp18Result.isErrorEvent(error)) {
            const _HermesInternal4 = HermesInternal;
            let combined = "Event `ErrorEvent` captured as " + str3 + " with message `" + error.message + "`";
          } else {
            tmp18Result = tmp18(817);
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
          obj11[1] = combined;
          const items4 = [obj11];
          obj10[0] = items4;
          obj9[0] = obj10;
          obj9[1] = obj8;
          tmp24 = obj9;
          if (arg2) {
            const arr4 = parseStackFrames(arg0, arg2);
            tmp24 = obj9;
            if (arr4.length) {
              const obj12 = { frames: null };
              obj12[0] = arr4;
              obj9.exception.values[0].stacktrace = obj12;
              tmp24 = obj9;
            }
          }
          const obj24 = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */;
        }
        obj10 = tmp2(817);
        obj8 = obj10.addExceptionMechanism;
        obj9 = obj8(tmp24, { synthetic: true });
        const tmp2Result9 = tmp2(817);
      }
      return obj3;
    }
  }
  if ("stack" in error) {
    const obj13 = { exception: null };
    const obj14 = { values: null };
    const items5 = [exceptionFromError(arg0, error)];
    obj14[0] = items5;
    obj13[0] = obj14;
    let obj15 = obj13;
  } else {
    let name = error.name;
    if (!name) {
      let str12 = "DOMException";
      if (tmp2Result11.isDOMError(error)) {
        str12 = "DOMError";
      }
      name = str12;
      tmp2Result11 = tmp2(817);
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
          const obj17 = { value: null, stacktrace: null };
          obj17[0] = combined1;
          const obj18 = { frames: null };
          obj18[0] = arr7;
          obj17[1] = obj18;
          const items6 = [obj17];
          obj16[0] = items6;
          obj15.exception = obj16;
        }
        const result4 = tmp2(817).addExceptionMechanism(obj15, { synthetic: true });
        const tmp2Result12 = tmp2(817);
      }
    }
    if (tmp2Result13.isParameterizedString(combined1)) {
      ({ __sentry_template_string__: obj37[0], __sentry_template_values__: obj37[1] } = combined1);
      obj15.logentry = { message: null, params: null };
      const obj19 = { message: null, params: null };
    } else {
      obj15.message = combined1;
    }
    tmp2Result13 = tmp2(817);
    const result5 = tmp2(817).addExceptionTypeValue(obj15, combined1);
    const tmp2Result14 = tmp2(817);
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
arg5.eventFromException = function eventFromException(arg0, arg1, syntheticException) {
  syntheticException = undefined;
  if (syntheticException != null) {
    syntheticException = syntheticException.syntheticException;
  }
  const tmpResult = eventFromUnknownInput(arg0, arg1, syntheticException, arg3);
  const result = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.addExceptionMechanism(tmpResult);
  tmpResult.level = "error";
  let event_id;
  if (syntheticException != null) {
    event_id = syntheticException.event_id;
  }
  if (event_id) {
    tmpResult.event_id = syntheticException.event_id;
  }
  const obj = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */;
  const tmp = eventFromUnknownInput;
  const tmp4 = require;
  return registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.resolvedSyncPromise(tmpResult);
};
arg5.eventFromMessage = function eventFromMessage(arg0, message, arg2, syntheticException) {
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
        obj = { value: null, stacktrace: null };
        obj[0] = message;
        const obj1 = { frames: null };
        obj1[0] = arr;
        obj[1] = obj1;
        const items = [obj];
        obj[0] = items;
        obj.exception = obj;
      }
      const result = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.addExceptionMechanism(obj, { synthetic: true });
      const obj5 = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */;
    }
  }
  if (obj6.isParameterizedString(message)) {
    ({ __sentry_template_string__: obj7[0], __sentry_template_values__: obj7[1] } = message);
    obj.logentry = { message: null, params: null };
    const obj2 = { message: null, params: null };
  } else {
    obj.message = message;
  }
  obj.level = str;
  let event_id;
  if (syntheticException != null) {
    event_id = syntheticException.event_id;
  }
  if (event_id) {
    obj.event_id = syntheticException.event_id;
  }
  obj6 = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */;
  const tmp7 = require;
  return registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.resolvedSyncPromise(obj);
};
arg5.eventFromUnknownInput = eventFromUnknownInput;
arg5.exceptionFromError = exceptionFromError;
arg5.extractMessage = extractMessage;
arg5.extractType = function extractType(name) {
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