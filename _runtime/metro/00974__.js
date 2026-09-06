// _runtime/metro/00974__.js
import _mod937 from "00937__.js";
import _getUnhandledRejectionError from "../00943__getUnhandledRejectionError.js";
import registerSpanErrorInstrumentation from "00682__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const WebWorker = "WebWorker";

export const INTEGRATION_NAME = "WebWorker";
export const registerWebWorker = function registerWebWorker(self) {
  const _self = self.self;
  const _sentryDebugIds = _self._sentryDebugIds;
  let obj = { _sentryMessage: true, _sentryDebugIds, _sentryModuleMetadata: null };
  const _sentryModuleMetadata = _self._sentryModuleMetadata;
  obj._sentryModuleMetadata = _sentryModuleMetadata;
  _self.postMessage(obj);
  const listener = _self.addEventListener("unhandledrejection", (event) => {
    const obj = { reason: _getUnhandledRejectionError._getUnhandledRejectionError(event), filename: null };
    const _location = _self.location;
    let href;
    if (_location != null) {
      href = _location.href;
    }
    obj.filename = href;
    _self.postMessage({ _sentryMessage: true, _sentryWorkerError: obj });
    if (_mod937.DEBUG_BUILD) {
      const debug = tmp(682).debug;
      debug.log("[Sentry Worker] Forwarding unhandled rejection to parent", obj);
    }
  });
  if (_self(937).DEBUG_BUILD) {
    let debug = _self(682).debug;
    debug.log("[Sentry Worker] Registered worker with unhandled rejection handling");
  }
};
export const webWorkerIntegration = registerSpanErrorInstrumentation.defineIntegration((worker) => {
  worker = worker.worker;
  return {
    name: WebWorker,
    setupOnce() {
      let arr = worker;
      if (!Array.isArray(worker)) {
        const items = [worker];
        arr = items;
      }
      const item = arr.forEach((addEventListener) => {
        const listener = addEventListener.addEventListener("message", (event) => {
          const data = event.data;
          let obj = closure_1_0(closure_1_1[0]);
          let flag = false;
          if (obj.isPlainObject(data)) {
            flag = false;
            if (true === data._sentryMessage) {
              if (!("_sentryDebugIds" in data)) {
                if (!tmp25) {
                  flag = false;
                }
              }
              if ("_sentryDebugIds" in data) {
                let tmpResult = tmp(tmp2[0]);
                if (!tmpResult.isPlainObject(data._sentryDebugIds)) {
                  flag = false;
                }
              }
              if ("_sentryModuleMetadata" in data) {
                tmpResult = tmp(tmp2[0]);
                if (!tmpResult.isPlainObject(data._sentryModuleMetadata)) {
                  flag = false;
                }
              }
              flag = true;
              if ("_sentryWorkerError" in data) {
                flag = true;
                if (!tmpResult1.isPlainObject(data._sentryWorkerError)) {
                  flag = false;
                }
                tmpResult1 = tmp(tmp2[0]);
              }
            }
          }
          if (flag) {
            const result = event.stopImmediatePropagation();
            if (event.data._sentryDebugIds) {
              if (tmp(tmp2[1]).DEBUG_BUILD) {
                const debug = tmp(tmp2[0]).debug;
                debug.log("Sentry debugId web worker message received", event.data);
              }
              obj = {};
              const merged = Object.assign(event.data._sentryDebugIds);
              const merged1 = Object.assign(tmp(tmp2[2]).WINDOW._sentryDebugIds);
              tmp(tmp2[2]).WINDOW._sentryDebugIds = obj;
            }
            if (event.data._sentryModuleMetadata) {
              if (tmp(tmp2[1]).DEBUG_BUILD) {
                const debug2 = tmp(tmp2[0]).debug;
                debug2.log("Sentry module metadata web worker message received", event.data);
              }
              obj = {};
              const merged2 = Object.assign(event.data._sentryModuleMetadata);
              const merged3 = Object.assign(tmp(tmp2[2]).WINDOW._sentryModuleMetadata);
              tmp(tmp2[2]).WINDOW._sentryModuleMetadata = obj;
            }
            if (event.data._sentryWorkerError) {
              if (tmp(tmp2[1]).DEBUG_BUILD) {
                const debug3 = tmp(tmp2[0]).debug;
                debug3.log("Sentry worker rejection message received", event.data._sentryWorkerError);
              }
              const _sentryWorkerError = event.data._sentryWorkerError;
              const client = tmp(tmp2[0]).getClient();
              if (client) {
                const stackParser = client.getOptions().stackParser;
                const attachStacktrace = client.getOptions().attachStacktrace;
                const reason = _sentryWorkerError.reason;
                if (tmpResult3.isPrimitive(reason)) {
                  let result1 = tmp(tmp2[3])._eventFromRejectionWithPrimitive(reason);
                  const tmpResult4 = tmp(tmp2[3]);
                } else {
                  const tmpResult5 = tmp(tmp2[4]);
                  result1 = tmpResult5.eventFromUnknownInput(stackParser, reason, undefined, attachStacktrace, true);
                }
                result1.level = "error";
                if (_sentryWorkerError.filename) {
                  const obj1 = {};
                  const merged4 = Object.assign(result1.contexts);
                  const obj2 = { filename: _sentryWorkerError.filename };
                  obj1.worker = obj2;
                  result1.contexts = obj1;
                }
                tmpResult3 = tmp(tmp2[0]);
                const obj3 = {
                  originalException: reason,
                  mechanism: { handled: false, type: "auto.browser.web_worker.onunhandledrejection" },
                };
                tmp(tmp2[0]).captureEvent(result1, obj3);
                if (tmp(tmp2[1]).DEBUG_BUILD) {
                  const debug4 = tmp(tmp2[0]).debug;
                  debug4.log("Captured worker unhandled rejection", reason);
                }
                const tmpResult6 = tmp(tmp2[0]);
              }
              const tmpResult2 = tmp(tmp2[0]);
            }
          }
        });
      });
    },
    addWorker(addEventListener) {
      const listener = addEventListener.addEventListener("message", (event) => {
        const data = event.data;
        let obj = closure_1_0(closure_1_1[0]);
        let flag = false;
        if (obj.isPlainObject(data)) {
          flag = false;
          if (true === data._sentryMessage) {
            if (!("_sentryDebugIds" in data)) {
              if (!tmp25) {
                flag = false;
              }
            }
            if ("_sentryDebugIds" in data) {
              let tmpResult = tmp(tmp2[0]);
              if (!tmpResult.isPlainObject(data._sentryDebugIds)) {
                flag = false;
              }
            }
            if ("_sentryModuleMetadata" in data) {
              tmpResult = tmp(tmp2[0]);
              if (!tmpResult.isPlainObject(data._sentryModuleMetadata)) {
                flag = false;
              }
            }
            flag = true;
            if ("_sentryWorkerError" in data) {
              flag = true;
              if (!tmpResult1.isPlainObject(data._sentryWorkerError)) {
                flag = false;
              }
              tmpResult1 = tmp(tmp2[0]);
            }
          }
        }
        if (flag) {
          const result = event.stopImmediatePropagation();
          if (event.data._sentryDebugIds) {
            if (tmp(tmp2[1]).DEBUG_BUILD) {
              const debug = tmp(tmp2[0]).debug;
              debug.log("Sentry debugId web worker message received", event.data);
            }
            obj = {};
            const merged = Object.assign(event.data._sentryDebugIds);
            const merged1 = Object.assign(tmp(tmp2[2]).WINDOW._sentryDebugIds);
            tmp(tmp2[2]).WINDOW._sentryDebugIds = obj;
          }
          if (event.data._sentryModuleMetadata) {
            if (tmp(tmp2[1]).DEBUG_BUILD) {
              const debug2 = tmp(tmp2[0]).debug;
              debug2.log("Sentry module metadata web worker message received", event.data);
            }
            obj = {};
            const merged2 = Object.assign(event.data._sentryModuleMetadata);
            const merged3 = Object.assign(tmp(tmp2[2]).WINDOW._sentryModuleMetadata);
            tmp(tmp2[2]).WINDOW._sentryModuleMetadata = obj;
          }
          if (event.data._sentryWorkerError) {
            if (tmp(tmp2[1]).DEBUG_BUILD) {
              const debug3 = tmp(tmp2[0]).debug;
              debug3.log("Sentry worker rejection message received", event.data._sentryWorkerError);
            }
            const _sentryWorkerError = event.data._sentryWorkerError;
            const client = tmp(tmp2[0]).getClient();
            if (client) {
              const stackParser = client.getOptions().stackParser;
              const attachStacktrace = client.getOptions().attachStacktrace;
              const reason = _sentryWorkerError.reason;
              if (tmpResult3.isPrimitive(reason)) {
                let result1 = tmp(tmp2[3])._eventFromRejectionWithPrimitive(reason);
                const tmpResult4 = tmp(tmp2[3]);
              } else {
                const tmpResult5 = tmp(tmp2[4]);
                result1 = tmpResult5.eventFromUnknownInput(stackParser, reason, undefined, attachStacktrace, true);
              }
              result1.level = "error";
              if (_sentryWorkerError.filename) {
                const obj1 = {};
                const merged4 = Object.assign(result1.contexts);
                const obj2 = { filename: _sentryWorkerError.filename };
                obj1.worker = obj2;
                result1.contexts = obj1;
              }
              tmpResult3 = tmp(tmp2[0]);
              const obj3 = {
                originalException: reason,
                mechanism: { handled: false, type: "auto.browser.web_worker.onunhandledrejection" },
              };
              tmp(tmp2[0]).captureEvent(result1, obj3);
              if (tmp(tmp2[1]).DEBUG_BUILD) {
                const debug4 = tmp(tmp2[0]).debug;
                debug4.log("Captured worker unhandled rejection", reason);
              }
              const tmpResult6 = tmp(tmp2[0]);
            }
            const tmpResult2 = tmp(tmp2[0]);
          }
        }
      });
    },
  };
});
