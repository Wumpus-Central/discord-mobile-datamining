// _runtime/00943__getUnhandledRejectionError.js
import _mod937 from "metro/00937__.js";
import registerSpanErrorInstrumentation from "metro/00682__.js";

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
    } catch (err) {}
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const _eventFromRejectionWithPrimitive = function _eventFromRejectionWithPrimitive(reason) {
  const obj = { exception: null };
  const obj2 = { values: null };
  const items = [
    { type: "UnhandledRejection", value: "Non-Error promise rejection captured with value: " + String(reason) },
  ];
  obj2.values = items;
  obj.exception = obj2;
  return obj;
};
export { _getUnhandledRejectionError };
export const globalHandlersIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let obj2 = { onerror: true, onunhandledrejection: true };
  const merged = Object.assign(obj);
  return {
    name: "GlobalHandlers",
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(arg0) {
      if (obj2.onerror) {
        closure_0 = arg0;
        let result = registerSpanErrorInstrumentation.addGlobalErrorInstrumentationHandler((arg0) => {
          const client = obj2(682).getClient();
          let options;
          if (client != null) {
            options = client.getOptions();
          }
          if (!options) {
            obj2 = {
              stackParser() {
                return [];
              },
              attachStacktrace: false,
            };
            options = obj2;
          }
          ({ stackParser, attachStacktrace } = options);
          const obj = obj2(682);
          if (tmpResult.getClient() === closure_0) {
            if (!tmpResult7.shouldIgnoreOnError()) {
              ({ url, error, msg, line, column } = arg0);
              const tmpResult8 = tmp(896);
              let tmp5 = error;
              if (!error) {
                tmp5 = msg;
              }
              const result = tmpResult8.eventFromUnknownInput(stackParser, tmp5, undefined, attachStacktrace, false);
              const tmp11 = result.exception || {};
              result.exception = tmp11;
              const tmp12 = tmp11.values || [];
              tmp11.values = tmp12;
              const tmp13 = tmp12[0] || {};
              tmp12[0] = tmp13;
              const tmp14 = tmp13.stacktrace || {};
              tmp13.stacktrace = tmp14;
              const arr = tmp14.frames || [];
              tmp14.frames = arr;
              let combined;
              if (tmpResult9.isString(url)) {
                if (0 !== url.length) {
                  combined = url;
                  if (url.startsWith("data:")) {
                    const _HermesInternal = HermesInternal;
                    combined = "<" + tmp(682).stripDataUrlContent(url, false) + ">";
                    const tmpResult10 = tmp(682);
                  }
                }
              }
              if (combined == null) {
                combined = tmp(682).getLocationHref();
                const tmpResult11 = tmp(682);
              }
              if (0 === arr.length) {
                const obj3 = {
                  colno: column,
                  filename: combined,
                  function: tmp(682).UNKNOWN_FUNCTION,
                  in_app: true,
                  lineno: line,
                };
                arr.push(obj3);
              }
              result.level = "error";
              tmpResult9 = tmp(682);
              const obj4 = {
                originalException: error,
                mechanism: { handled: false, type: "auto.browser.global_handlers.onerror" },
              };
              tmp(682).captureEvent(result, obj4);
              const tmpResult12 = tmp(682);
            }
            tmpResult7 = tmp(893);
          }
          tmpResult = obj2(682);
        });
        if (_mod937.DEBUG_BUILD) {
          const debug = registerSpanErrorInstrumentation.debug;
          let _HermesInternal = HermesInternal;
          debug.log("Global Handler attached: " + "onerror");
        }
      }
      if (tmp.onunhandledrejection) {
        closure_0 = arg0;
        obj2 = registerSpanErrorInstrumentation;
        const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler((reason) => {
          let captureEvent = obj2;
          const client = obj2(682).getClient();
          let options;
          if (client != null) {
            options = client.getOptions();
          }
          if (!options) {
            obj2 = {
              stackParser() {
                return [];
              },
              attachStacktrace: false,
            };
            options = obj2;
          }
          ({ stackParser, attachStacktrace } = options);
          const obj = obj2(682);
          if (captureEventResult.getClient() === closure_0) {
            if (!captureEventResult1.shouldIgnoreOnError()) {
              let obj7 = _getUnhandledRejectionError(reason);
              if (captureEventResult2.isPrimitive(obj7)) {
                const obj3 = { exception: null };
                const obj4 = { values: null };
                const obj5 = { type: "UnhandledRejection", value: null };
                const _String = String;
                const _HermesInternal = HermesInternal;
                obj5.value = "Non-Error promise rejection captured with value: " + String(obj7);
                const items = [obj5];
                obj4.values = items;
                obj3.exception = obj4;
                let result = obj3;
              } else {
                const captureEventResult3 = captureEvent(896);
                result = captureEventResult3.eventFromUnknownInput(
                  stackParser,
                  obj7,
                  undefined,
                  attachStacktrace,
                  true,
                );
              }
              result.level = "error";
              captureEventResult2 = captureEvent(682);
              captureEvent = captureEvent(682).captureEvent;
              const obj6 = { originalException: obj7, mechanism: null };
              obj7 = { handled: false, type: "auto.browser.global_handlers.onunhandledrejection" };
              obj6.mechanism = obj7;
              captureEvent(result, obj6);
              const captureEventResult4 = captureEvent(682);
            }
            captureEventResult1 = captureEvent(893);
          }
          captureEventResult = captureEvent(682);
        });
        if (_mod937.DEBUG_BUILD) {
          const debug2 = registerSpanErrorInstrumentation.debug;
          const _HermesInternal2 = HermesInternal;
          debug2.log("Global Handler attached: " + "onunhandledrejection");
        }
      }
      tmp = obj2;
    },
  };
});
