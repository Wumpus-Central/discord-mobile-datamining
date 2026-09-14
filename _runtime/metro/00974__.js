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
      const debug = registerSpanErrorInstrumentation.debug;
      debug.log("[Sentry Worker] Forwarding unhandled rejection to parent", obj);
    }
  });
  if (_self(937).DEBUG_BUILD) {
    let debug = tmp3(682).debug;
    debug.log("[Sentry Worker] Registered worker with unhandled rejection handling");
  }
  tmp3 = _self;
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
                if (!tmpResult.isPlainObject(data._sentryDebugIds)) {
                  flag = false;
                }
                tmpResult = closure_1_0(dependencyMap[0]);
              }
              if ("_sentryModuleMetadata" in data) {
                if (!tmpResult8.isPlainObject(data._sentryModuleMetadata)) {
                  flag = false;
                }
                tmpResult8 = closure_1_0(dependencyMap[0]);
              }
              flag = true;
              if (tmp26) {
                flag = true;
                if (!tmpResult9.isPlainObject(data._sentryWorkerError)) {
                  flag = false;
                }
                tmpResult9 = closure_1_0(dependencyMap[0]);
              }
              tmp26 = "_sentryWorkerError" in data;
            }
          }
          if (flag) {
            const result = event.stopImmediatePropagation();
            if (event.data._sentryDebugIds) {
              if (closure_1_0(dependencyMap[1]).DEBUG_BUILD) {
                const debug = closure_1_0(dependencyMap[0]).debug;
                debug.log("Sentry debugId web worker message received", event.data);
              }
              const obj2 = {};
              const merged = Object.assign(event.data._sentryDebugIds);
              const merged1 = Object.assign(closure_1_0(dependencyMap[2]).WINDOW._sentryDebugIds);
              closure_1_0(dependencyMap[2]).WINDOW._sentryDebugIds = obj2;
            }
            if (event.data._sentryModuleMetadata) {
              if (closure_1_0(dependencyMap[1]).DEBUG_BUILD) {
                const debug2 = closure_1_0(dependencyMap[0]).debug;
                debug2.log("Sentry module metadata web worker message received", event.data);
              }
              const obj3 = {};
              const merged2 = Object.assign(event.data._sentryModuleMetadata);
              const merged3 = Object.assign(closure_1_0(dependencyMap[2]).WINDOW._sentryModuleMetadata);
              closure_1_0(dependencyMap[2]).WINDOW._sentryModuleMetadata = obj3;
            }
            if (event.data._sentryWorkerError) {
              if (closure_1_0(dependencyMap[1]).DEBUG_BUILD) {
                const debug3 = closure_1_0(dependencyMap[0]).debug;
                debug3.log("Sentry worker rejection message received", event.data._sentryWorkerError);
              }
              const _sentryWorkerError = event.data._sentryWorkerError;
              const client = closure_1_0(dependencyMap[0]).getClient();
              if (client) {
                const stackParser = client.getOptions().stackParser;
                const attachStacktrace = client.getOptions().attachStacktrace;
                const reason = _sentryWorkerError.reason;
                if (tmpResult11.isPrimitive(reason)) {
                  let result1 = closure_1_0(dependencyMap[3])._eventFromRejectionWithPrimitive(reason);
                  const tmpResult12 = closure_1_0(dependencyMap[3]);
                } else {
                  const tmpResult13 = closure_1_0(dependencyMap[4]);
                  result1 = tmpResult13.eventFromUnknownInput(stackParser, reason, undefined, attachStacktrace, true);
                }
                result1.level = "error";
                if (_sentryWorkerError.filename) {
                  const obj4 = {};
                  const merged4 = Object.assign(result1.contexts);
                  const obj5 = { filename: _sentryWorkerError.filename };
                  obj4.worker = obj5;
                  result1.contexts = obj4;
                }
                tmpResult11 = closure_1_0(dependencyMap[0]);
                const obj6 = {
                  originalException: reason,
                  mechanism: { handled: false, type: "auto.browser.web_worker.onunhandledrejection" },
                };
                closure_1_0(dependencyMap[0]).captureEvent(result1, obj6);
                if (closure_1_0(dependencyMap[1]).DEBUG_BUILD) {
                  const debug4 = closure_1_0(dependencyMap[0]).debug;
                  debug4.log("Captured worker unhandled rejection", reason);
                }
                const tmpResult14 = closure_1_0(dependencyMap[0]);
              }
              const tmpResult10 = closure_1_0(dependencyMap[0]);
            }
          }
          obj = closure_1_0(dependencyMap[0]);
        });
      });
    },
    addWorker(addEventListener) {
      const listener = addEventListener.addEventListener("message", (event) => {
        const data = event.data;
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
              if (!tmpResult.isPlainObject(data._sentryDebugIds)) {
                flag = false;
              }
              tmpResult = closure_1_0(dependencyMap[0]);
            }
            if ("_sentryModuleMetadata" in data) {
              if (!tmpResult8.isPlainObject(data._sentryModuleMetadata)) {
                flag = false;
              }
              tmpResult8 = closure_1_0(dependencyMap[0]);
            }
            flag = true;
            if (tmp26) {
              flag = true;
              if (!tmpResult9.isPlainObject(data._sentryWorkerError)) {
                flag = false;
              }
              tmpResult9 = closure_1_0(dependencyMap[0]);
            }
            tmp26 = "_sentryWorkerError" in data;
          }
        }
        if (flag) {
          const result = event.stopImmediatePropagation();
          if (event.data._sentryDebugIds) {
            if (closure_1_0(dependencyMap[1]).DEBUG_BUILD) {
              const debug = closure_1_0(dependencyMap[0]).debug;
              debug.log("Sentry debugId web worker message received", event.data);
            }
            const obj2 = {};
            const merged = Object.assign(event.data._sentryDebugIds);
            const merged1 = Object.assign(closure_1_0(dependencyMap[2]).WINDOW._sentryDebugIds);
            closure_1_0(dependencyMap[2]).WINDOW._sentryDebugIds = obj2;
          }
          if (event.data._sentryModuleMetadata) {
            if (closure_1_0(dependencyMap[1]).DEBUG_BUILD) {
              const debug2 = closure_1_0(dependencyMap[0]).debug;
              debug2.log("Sentry module metadata web worker message received", event.data);
            }
            const obj3 = {};
            const merged2 = Object.assign(event.data._sentryModuleMetadata);
            const merged3 = Object.assign(closure_1_0(dependencyMap[2]).WINDOW._sentryModuleMetadata);
            closure_1_0(dependencyMap[2]).WINDOW._sentryModuleMetadata = obj3;
          }
          if (event.data._sentryWorkerError) {
            if (closure_1_0(dependencyMap[1]).DEBUG_BUILD) {
              const debug3 = closure_1_0(dependencyMap[0]).debug;
              debug3.log("Sentry worker rejection message received", event.data._sentryWorkerError);
            }
            const _sentryWorkerError = event.data._sentryWorkerError;
            const client = closure_1_0(dependencyMap[0]).getClient();
            if (client) {
              const stackParser = client.getOptions().stackParser;
              const attachStacktrace = client.getOptions().attachStacktrace;
              const reason = _sentryWorkerError.reason;
              if (tmpResult11.isPrimitive(reason)) {
                let result1 = closure_1_0(dependencyMap[3])._eventFromRejectionWithPrimitive(reason);
                const tmpResult12 = closure_1_0(dependencyMap[3]);
              } else {
                const tmpResult13 = closure_1_0(dependencyMap[4]);
                result1 = tmpResult13.eventFromUnknownInput(stackParser, reason, undefined, attachStacktrace, true);
              }
              result1.level = "error";
              if (_sentryWorkerError.filename) {
                const obj4 = {};
                const merged4 = Object.assign(result1.contexts);
                const obj5 = { filename: _sentryWorkerError.filename };
                obj4.worker = obj5;
                result1.contexts = obj4;
              }
              tmpResult11 = closure_1_0(dependencyMap[0]);
              const obj6 = {
                originalException: reason,
                mechanism: { handled: false, type: "auto.browser.web_worker.onunhandledrejection" },
              };
              closure_1_0(dependencyMap[0]).captureEvent(result1, obj6);
              if (closure_1_0(dependencyMap[1]).DEBUG_BUILD) {
                const debug4 = closure_1_0(dependencyMap[0]).debug;
                debug4.log("Captured worker unhandled rejection", reason);
              }
              const tmpResult14 = closure_1_0(dependencyMap[0]);
            }
            const tmpResult10 = closure_1_0(dependencyMap[0]);
          }
        }
        obj = closure_1_0(dependencyMap[0]);
      });
    },
  };
});
