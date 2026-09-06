// === Module 943: _getUnhandledRejectionError ===

// Module 943 (_getUnhandledRejectionError)
import _mod937 from "module_937" /* 937 */;
import registerSpanErrorInstrumentation from "module_682" /* 682 */;

function _getUnhandledRejectionError(reason) {
  if (obj.isPrimitive(reason)) {
    return reason;
  } else {
    try {
      if ("reason" in reason) {
        return reason.reason;
      } else {
        if ("detail" in reason) {
          if ("reason" in reason.detail) {
            return reason.detail.reason;
          }
        }
        return reason;
      }
    } catch (err) {
    }
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const _eventFromRejectionWithPrimitive = function _eventFromRejectionWithPrimitive(reason) {
  let obj = { exception: null };
  obj = { values: null };
  obj = { type: "UnhandledRejection", value: "Non-Error promise rejection captured with value: " + String(reason) };
  const items = [obj];
  obj.values = items;
  obj.exception = obj;
  return obj;
};
export { _getUnhandledRejectionError };
export const globalHandlersIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  obj = { onerror: true, onunhandledrejection: true };
  const merged = Object.assign(obj);
  obj = {
    name: "GlobalHandlers",
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(arg0) {
      if (obj.onerror) {
        closure_0 = arg0;
        obj = registerSpanErrorInstrumentation;
        let result = obj.addGlobalErrorInstrumentationHandler((arg0) => {
          obj = obj(682);
          const client = obj.getClient();
          let options;
          if (client != null) {
            options = client.getOptions();
          }
          if (!options) {
            obj = {
              stackParser() {
                  return [];
                },
              attachStacktrace: false
            };
            options = obj;
          }
          ({ stackParser, attachStacktrace } = options);
          let tmpResult = tmp(682);
          if (tmpResult.getClient() === closure_0) {
            tmpResult = tmp(893);
            if (!tmpResult.shouldIgnoreOnError()) {
              ({ url, error, msg, line, column } = arg0);
              const tmpResult1 = tmp(896);
              let tmp5 = error;
              if (!error) {
                tmp5 = msg;
              }
              const result = tmpResult1.eventFromUnknownInput(stackParser, tmp5, undefined, attachStacktrace, false);
              const tmp11 = result.exception || {};
              result.exception = tmp11;
              const tmp12 = tmp11.values || [];
              tmp11.values = tmp12;
              const tmp13 = tmp12[0] || {};
              tmp12[0] = tmp13;
              const tmp14 = tmp13.stacktrace || {};
              tmp13.stacktrace = tmp14;
              let arr = tmp14.frames || [];
              tmp14.frames = arr;
              let combined;
              if (tmpResult2.isString(url)) {
                if (0 !== url.length) {
                  combined = url;
                  if (url.startsWith("data:")) {
                    const _HermesInternal = HermesInternal;
                    combined = "<" + tmp(682).stripDataUrlContent(url, false) + ">";
                    const tmpResult3 = tmp(682);
                  }
                }
              }
              if (combined == null) {
                combined = tmp(682).getLocationHref();
                const tmpResult4 = tmp(682);
              }
              if (0 === arr.length) {
                obj = { colno: column, filename: combined, function: tmp(682).UNKNOWN_FUNCTION, in_app: true, lineno: line };
                arr = arr.push(obj);
              }
              result.level = "error";
              tmpResult2 = tmp(682);
              const obj1 = { originalException: error, mechanism: { handled: false, type: "auto.browser.global_handlers.onerror" } };
              tmp(682).captureEvent(result, obj1);
              const tmpResult5 = tmp(682);
            }
          }
        });
        if (_mod937.DEBUG_BUILD) {
          const debug = tmp5(682).debug;
          let _HermesInternal = HermesInternal;
          debug.log("Global Handler attached: " + "onerror");
        }
        tmp5 = require;
      }
      if (obj.onunhandledrejection) {
        closure_0 = arg0;
        const result1 = registerSpanErrorInstrumentation.addGlobalUnhandledRejectionInstrumentationHandler((arg0) => {
          let captureEvent = obj;
          obj = obj(682);
          const client = obj.getClient();
          let options;
          if (client != null) {
            options = client.getOptions();
          }
          if (!options) {
            obj = {
              stackParser() {
                  return [];
                },
              attachStacktrace: false
            };
            options = obj;
          }
          ({ stackParser, attachStacktrace } = options);
          if (captureEventResult.getClient() === closure_0) {
            if (!captureEventResult1.shouldIgnoreOnError()) {
              let obj4 = _getUnhandledRejectionError(arg0);
              if (captureEventResult2.isPrimitive(obj4)) {
                obj = { exception: null };
                const obj1 = { values: null };
                const obj2 = { type: "UnhandledRejection", value: null };
                const _String = String;
                const _HermesInternal = HermesInternal;
                obj2.value = "Non-Error promise rejection captured with value: " + String(obj4);
                const items = [obj2];
                obj1.values = items;
                obj.exception = obj1;
                let result = obj;
              } else {
                const captureEventResult3 = captureEvent(896);
                result = captureEventResult3.eventFromUnknownInput(stackParser, obj4, undefined, attachStacktrace, true);
              }
              result.level = "error";
              captureEventResult2 = captureEvent(682);
              captureEvent = captureEvent(682).captureEvent;
              const obj3 = { originalException: obj4, mechanism: null };
              obj4 = { handled: false, type: "auto.browser.global_handlers.onunhandledrejection" };
              obj3.mechanism = obj4;
              captureEvent(result, obj3);
              const captureEventResult4 = captureEvent(682);
            }
            captureEventResult1 = captureEvent(893);
          }
        });
        if (_mod937.DEBUG_BUILD) {
          const debug2 = tmp12(682).debug;
          const _HermesInternal2 = HermesInternal;
          debug2.log("Global Handler attached: " + "onunhandledrejection");
        }
        tmp12 = require;
      }
    }
  };
  return obj;
});