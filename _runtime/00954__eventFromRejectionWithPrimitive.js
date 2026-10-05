// _runtime/00954__eventFromRejectionWithPrimitive.js
import _mod948 from "metro/00948__.js";
import registerSpanErrorInstrumentation from "metro/00693__.js";

function _getUnhandledRejectionError(reason) {
  const obj = registerSpanErrorInstrumentation;
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
  let items;
  let obj2;
  const obj = { exception: obj2 };
  obj2 = { values: items };
  items = [{ type: "UnhandledRejection", value: "Non-Error promise rejection captured with value: " + String(reason) }];
  ({ type: "UnhandledRejection", value: "Non-Error promise rejection captured with value: " + String(reason) });
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
  let obj3 = {
    name: "GlobalHandlers",
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(arg0) {
      const stackParser2 = function stackParser() {
        return [];
      };
      const tmp = obj2;
      if (obj2.onerror) {
        let closure_0 = arg0;
        let obj = registerSpanErrorInstrumentation;
        let result = obj.addGlobalErrorInstrumentationHandler((arg0) => {
          let attachStacktrace;
          let column;
          let error;
          let line;
          let msg;
          let stackParser;
          let url;
          const obj = obj2(closure_2_1[0]);
          const client = obj.getClient();
          let options;
          if (client != null) {
            options = client.getOptions();
          }
          if (!options) {
            options = { stackParser: stackParser2, attachStacktrace: false };
            obj2 = { stackParser: stackParser2, attachStacktrace: false };
          }
          ({ stackParser, attachStacktrace } = options);
          const tmpResult = obj2(closure_2_1[0]);
          if (tmpResult.getClient() === closure_0) {
            const tmpResult7 = obj2(closure_2_1[1]);
            if (!tmpResult7.shouldIgnoreOnError()) {
              ({ url, error, msg, line, column } = arg0);
              let tmp6 = error;
              const eventFromUnknownInput = obj2(closure_2_1[2]).eventFromUnknownInput;
              const tmpResult8 = obj2(closure_2_1[2]);
              if (!error) {
                tmp6 = msg;
              }
              const result = eventFromUnknownInput(stackParser, tmp6, undefined, attachStacktrace, false);
              const tmp12 = result.exception || {};
              result.exception = tmp12;
              const tmp13 = tmp12.values || [];
              tmp12.values = tmp13;
              const tmp14 = tmp13[0] || {};
              tmp13[0] = tmp14;
              const tmp15 = tmp14.stacktrace || {};
              tmp14.stacktrace = tmp15;
              const arr = tmp15.frames || [];
              tmp15.frames = arr;
              let combined;
              const tmpResult9 = obj2(closure_2_1[0]);
              if (tmpResult9.isString(url)) {
                if (0 !== url.length) {
                  combined = url;
                  if (url.startsWith("data:")) {
                    const _HermesInternal = HermesInternal;
                    const tmpResult10 = obj2(closure_2_1[0]);
                    combined = "<" + tmpResult10.stripDataUrlContent(url, false) + ">";
                  }
                }
              }
              if (combined == null) {
                const tmpResult11 = obj2(closure_2_1[0]);
                combined = tmpResult11.getLocationHref();
              }
              if (0 === arr.length) {
                const push = arr.push;
                const obj3 = {
                  colno: column,
                  filename: combined,
                  function: obj2(closure_2_1[0]).UNKNOWN_FUNCTION,
                  in_app: true,
                  lineno: line,
                };
                push(obj3);
              }
              result.level = "error";
              const obj4 = {
                originalException: error,
                mechanism: { handled: false, type: "auto.browser.global_handlers.onerror" },
              };
              const tmpResult12 = obj2(closure_2_1[0]);
              tmpResult12.captureEvent(result, obj4);
            }
          }
        });
        if (_mod948.DEBUG_BUILD) {
          const debug = registerSpanErrorInstrumentation.debug;
          let _HermesInternal = HermesInternal;
          debug.log("Global Handler attached: " + "onerror");
        }
      }
      if (tmp.onunhandledrejection) {
        closure_0 = arg0;
        obj2 = registerSpanErrorInstrumentation;
        const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler((arg0) => {
          let attachStacktrace;
          let items;
          let obj4;
          let stackParser;
          const obj = obj2(closure_2_1[0]);
          const client = obj.getClient();
          let options;
          if (client != null) {
            options = client.getOptions();
          }
          if (!options) {
            options = { stackParser: stackParser2, attachStacktrace: false };
            obj2 = { stackParser: stackParser2, attachStacktrace: false };
          }
          ({ stackParser, attachStacktrace } = options);
          const tmpResult = obj2(closure_2_1[0]);
          if (tmpResult.getClient() === closure_0) {
            const tmpResult5 = obj2(closure_2_1[1]);
            if (!tmpResult5.shouldIgnoreOnError()) {
              let result;
              const tmp6 = closure_2_2(arg0);
              const tmpResult6 = obj2(closure_2_1[0]);
              if (tmpResult6.isPrimitive(tmp6)) {
                const obj3 = { exception: obj4 };
                obj4 = { values: items };
                const _String = String;
                const _HermesInternal = HermesInternal;
                items = [
                  {
                    type: "UnhandledRejection",
                    value: "Non-Error promise rejection captured with value: " + String(tmp6),
                  },
                ];
                result = obj3;
                const obj5 = {
                  type: "UnhandledRejection",
                  value: "Non-Error promise rejection captured with value: " + String(tmp6),
                };
              } else {
                const tmpResult7 = obj2(closure_2_1[2]);
                result = tmpResult7.eventFromUnknownInput(stackParser, tmp6, undefined, attachStacktrace, true);
              }
              result.level = "error";
              const obj6 = {
                originalException: tmp6,
                mechanism: { handled: false, type: "auto.browser.global_handlers.onunhandledrejection" },
              };
              const tmpResult8 = obj2(closure_2_1[0]);
              tmpResult8.captureEvent(result, obj6);
            }
          }
        });
        if (_mod948.DEBUG_BUILD) {
          const debug2 = registerSpanErrorInstrumentation.debug;
          let tmp14 = globalThis;
          const _HermesInternal2 = HermesInternal;
          debug2.log("Global Handler attached: " + "onunhandledrejection");
        }
      }
    },
  };
  return obj3;
});
