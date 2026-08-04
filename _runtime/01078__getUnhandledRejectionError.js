// _runtime/01078__getUnhandledRejectionError.js
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

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
  obj[0] = items;
  obj[0] = obj;
  return obj;
};
export { _getUnhandledRejectionError };
export const globalHandlersIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  obj = undefined;
  obj = { onerror: true, onunhandledrejection: true };
  const merged = Object.assign(obj);
  obj = {
    name: "GlobalHandlers",
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(arg0) {
      if (obj.onerror) {
        obj = arg0;
        obj = obj(outer1_1[0]);
        let result = obj.addGlobalErrorInstrumentationHandler((arg0) => {
          let attachStacktrace;
          let column;
          let error;
          let line;
          let msg;
          let stackParser;
          let url;
          let obj = callback(outer1_1[0]);
          const client = obj.getClient();
          let options;
          if (client != null) {
            options = client.getOptions();
          }
          if (!options) {
            obj = { stackParser: null, attachStacktrace: false };
            obj[0] = function stackParser(stack, arg1, arg2) {
              return [];
            };
            options = obj;
          }
          ({ stackParser, attachStacktrace } = options);
          let tmpResult = tmp(tmp2[0]);
          if (tmpResult.getClient() === callback) {
            tmpResult = tmp(tmp2[1]);
            if (!tmpResult.shouldIgnoreOnError()) {
              ({ url, error, msg, line, column } = arg0);
              const tmpResult1 = tmp(tmp2[2]);
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
                    combined = "<" + tmp(tmp2[0]).stripDataUrlContent(url, false) + ">";
                    const tmpResult3 = tmp(tmp2[0]);
                  }
                }
              }
              if (combined == null) {
                combined = tmp(tmp2[0]).getLocationHref();
                const tmpResult4 = tmp(tmp2[0]);
              }
              if (0 === arr.length) {
                obj = { colno: null, filename: null, function: null, in_app: true, lineno: null };
                obj[0] = column;
                obj[1] = combined;
                obj[2] = tmp(tmp2[0]).UNKNOWN_FUNCTION;
                obj[4] = line;
                arr = arr.push(obj);
              }
              result.level = "error";
              tmpResult2 = tmp(tmp2[0]);
              const obj1 = { originalException: null, mechanism: null };
              obj1[0] = error;
              obj1[1] = { handled: false, type: "auto.browser.global_handlers.onerror" };
              tmp(tmp2[0]).captureEvent(result, obj1);
              const tmpResult5 = tmp(tmp2[0]);
            }
          }
        });
        if (obj(outer1_1[3]).DEBUG_BUILD) {
          const debug = tmp5(tmp6[0]).debug;
          let _HermesInternal = HermesInternal;
          debug.log("Global Handler attached: " + "onerror");
        }
        tmp5 = obj;
        tmp6 = outer1_1;
      }
      if (obj.onunhandledrejection) {
        obj = arg0;
        const result1 = obj(outer1_1[0]).addGlobalUnhandledRejectionInstrumentationHandler((arg0) => {
          let attachStacktrace;
          let stackParser;
          let captureEvent = callback;
          let captureEventResult5 = outer1_1;
          let obj = callback(outer1_1[0]);
          const client = obj.getClient();
          let options;
          if (client != null) {
            options = client.getOptions();
          }
          if (!options) {
            obj = { stackParser: null, attachStacktrace: false };
            obj[0] = function stackParser(stack, arg1, arg2) {
              return [];
            };
            options = obj;
          }
          ({ stackParser, attachStacktrace } = options);
          if (captureEventResult.getClient() === callback) {
            if (!captureEventResult1.shouldIgnoreOnError()) {
              let obj4 = outer1_2(arg0);
              if (captureEventResult2.isPrimitive(obj4)) {
                obj = { exception: null };
                const obj1 = { values: null };
                const obj2 = { type: "UnhandledRejection", value: null };
                const _String = String;
                const _HermesInternal = HermesInternal;
                obj2[1] = "Non-Error promise rejection captured with value: " + String(obj4);
                const items = [obj2];
                obj1[0] = items;
                obj[0] = obj1;
                let result = obj;
              } else {
                const captureEventResult3 = captureEvent(captureEventResult5[2]);
                result = captureEventResult3.eventFromUnknownInput(stackParser, obj4, undefined, attachStacktrace, true);
              }
              result.level = "error";
              captureEventResult2 = captureEvent(captureEventResult5[0]);
              captureEvent = captureEvent(captureEventResult5[0]).captureEvent;
              const obj3 = { originalException: null, mechanism: null };
              obj3[0] = obj4;
              obj4 = { handled: false, type: "auto.browser.global_handlers.onunhandledrejection" };
              obj3[1] = obj4;
              captureEventResult5 = captureEvent(result, obj3);
              const captureEventResult4 = captureEvent(captureEventResult5[0]);
            }
            captureEventResult1 = captureEvent(captureEventResult5[1]);
          }
        });
        if (obj(outer1_1[3]).DEBUG_BUILD) {
          const debug2 = tmp12(tmp13[0]).debug;
          const _HermesInternal2 = HermesInternal;
          debug2.log("Global Handler attached: " + "onunhandledrejection");
        }
        let obj2 = obj(outer1_1[0]);
        tmp12 = obj;
        tmp13 = outer1_1;
      }
    }
  };
  return obj;
});