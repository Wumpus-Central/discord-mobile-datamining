// === Module 983: ? ===

// Module 983
import _mod946 from "module_946" /* 946 */;
import _getUnhandledRejectionError from "_getUnhandledRejectionError" /* 952 */;
import registerSpanErrorInstrumentation from "module_693" /* 693 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const WebWorker = "WebWorker";

export const INTEGRATION_NAME = "WebWorker";
export function registerWebWorker(self) {
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
    if (_mod946.DEBUG_BUILD) {
      const debug = registerSpanErrorInstrumentation.debug;
      debug.log("[Sentry Worker] Forwarding unhandled rejection to parent", obj);
    }
  });
  if (_self(946).DEBUG_BUILD) {
    let debug = tmp3(693).debug;
    debug.log("[Sentry Worker] Registered worker with unhandled rejection handling");
  }
  tmp3 = _self;
}
export const webWorkerIntegration = registerSpanErrorInstrumentation.defineIntegration((worker) => {
  worker = worker.worker;
  return {
    name: WebWorker,
    setupOnce() {
      let arr = worker;
      if (!Array.isArray(worker)) {
        let items = [worker];
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
                if (!tmp34) {
                  if (!tmp35) {
                    flag = false;
                  }
                }
              }
              if ("_sentryDebugIds" in data) {
                if (!tmpResult.isPlainObject(data._sentryDebugIds)) {
                  flag = false;
                }
                tmpResult = tmp(693);
              }
              if ("_sentryModuleMetadata" in data) {
                if (!tmpResult8.isPlainObject(data._sentryModuleMetadata)) {
                  flag = false;
                }
                tmpResult8 = tmp(693);
              }
              if (!("_sentryWorkerError" in data)) {
                flag = true;
                if (tmp36) {
                  const _Array = Array;
                  if (!Array.isArray(data._sentryWasmImages)) {
                    flag = false;
                  } else {
                    const _sentryWasmImages = data._sentryWasmImages;
                    flag = true;
                  }
                }
              } else {
                tmp(693);
                flag = false;
              }
              tmp36 = "_sentryWasmImages" in data;
            }
          }
          if (flag) {
            const result = event.stopImmediatePropagation();
            if (event.data._sentryDebugIds) {
              if (tmp(946).DEBUG_BUILD) {
                const debug = tmp(693).debug;
                debug.log("Sentry debugId web worker message received", event.data);
              }
              const obj2 = {};
              const merged = Object.assign(event.data._sentryDebugIds);
              const merged1 = Object.assign(tmp(902).WINDOW._sentryDebugIds);
              tmp(902).WINDOW._sentryDebugIds = obj2;
            }
            if (event.data._sentryModuleMetadata) {
              if (tmp(946).DEBUG_BUILD) {
                const debug2 = tmp(693).debug;
                debug2.log("Sentry module metadata web worker message received", event.data);
              }
              const obj3 = {};
              const merged2 = Object.assign(event.data._sentryModuleMetadata);
              const merged3 = Object.assign(tmp(902).WINDOW._sentryModuleMetadata);
              tmp(902).WINDOW._sentryModuleMetadata = obj3;
            }
            if (event.data._sentryWasmImages) {
              if (tmp(946).DEBUG_BUILD) {
                const debug3 = tmp(693).debug;
                debug3.log("Sentry WASM images web worker message received", event.data);
              }
              const tmp16 = tmp(902).WINDOW._sentryWasmImages || [];
              closure_0 = tmp16;
              const _sentryWasmImages1 = event.data._sentryWasmImages;
              const found = _sentryWasmImages1.filter((code_file) => {
                let tmp = closure_2_0(693).isPlainObject(code_file) && typeof code_file.code_file === "string";
                if (tmp) {
                  tmp = !code_file.some(/* F160816 */ function() { ... });
                }
                return tmp;
              });
              const items = [];
              HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(tmp16, 0));
              tmp(902).WINDOW._sentryWasmImages = items;
            }
            if (event.data._sentryWorkerError) {
              if (tmp(946).DEBUG_BUILD) {
                const debug4 = tmp(693).debug;
                debug4.log("Sentry worker rejection message received", event.data._sentryWorkerError);
              }
              const _sentryWorkerError = event.data._sentryWorkerError;
              const client = tmp(693).getClient();
              if (client) {
                const stackParser = client.getOptions().stackParser;
                const attachStacktrace = client.getOptions().attachStacktrace;
                const reason = _sentryWorkerError.reason;
                if (tmpResult11.isPrimitive(reason)) {
                  let result1 = tmp(952)._eventFromRejectionWithPrimitive(reason);
                  const tmpResult12 = tmp(952);
                } else {
                  const tmpResult13 = tmp(905);
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
                tmpResult11 = tmp(693);
                const obj6 = { originalException: reason, mechanism: { handled: false, type: "auto.browser.web_worker.onunhandledrejection" } };
                tmp(693).captureEvent(result1, obj6);
                if (tmp(946).DEBUG_BUILD) {
                  const debug5 = tmp(693).debug;
                  debug5.log("Captured worker unhandled rejection", reason);
                }
                const tmpResult14 = tmp(693);
              }
              const tmpResult10 = tmp(693);
            }
          }
          obj = closure_0(693);
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
              if (!tmp34) {
                if (!tmp35) {
                  flag = false;
                }
              }
            }
            if ("_sentryDebugIds" in data) {
              if (!tmpResult.isPlainObject(data._sentryDebugIds)) {
                flag = false;
              }
              tmpResult = tmp(693);
            }
            if ("_sentryModuleMetadata" in data) {
              if (!tmpResult8.isPlainObject(data._sentryModuleMetadata)) {
                flag = false;
              }
              tmpResult8 = tmp(693);
            }
            if (!("_sentryWorkerError" in data)) {
              flag = true;
              if (tmp36) {
                const _Array = Array;
                if (!Array.isArray(data._sentryWasmImages)) {
                  flag = false;
                } else {
                  const _sentryWasmImages = data._sentryWasmImages;
                  flag = true;
                }
              }
            } else {
              tmp(693);
              flag = false;
            }
            tmp36 = "_sentryWasmImages" in data;
          }
        }
        if (flag) {
          const result = event.stopImmediatePropagation();
          if (event.data._sentryDebugIds) {
            if (tmp(946).DEBUG_BUILD) {
              const debug = tmp(693).debug;
              debug.log("Sentry debugId web worker message received", event.data);
            }
            const obj2 = {};
            const merged = Object.assign(event.data._sentryDebugIds);
            const merged1 = Object.assign(tmp(902).WINDOW._sentryDebugIds);
            tmp(902).WINDOW._sentryDebugIds = obj2;
          }
          if (event.data._sentryModuleMetadata) {
            if (tmp(946).DEBUG_BUILD) {
              const debug2 = tmp(693).debug;
              debug2.log("Sentry module metadata web worker message received", event.data);
            }
            const obj3 = {};
            const merged2 = Object.assign(event.data._sentryModuleMetadata);
            const merged3 = Object.assign(tmp(902).WINDOW._sentryModuleMetadata);
            tmp(902).WINDOW._sentryModuleMetadata = obj3;
          }
          if (event.data._sentryWasmImages) {
            if (tmp(946).DEBUG_BUILD) {
              const debug3 = tmp(693).debug;
              debug3.log("Sentry WASM images web worker message received", event.data);
            }
            const tmp16 = tmp(902).WINDOW._sentryWasmImages || [];
            closure_0 = tmp16;
            const _sentryWasmImages1 = event.data._sentryWasmImages;
            const found = _sentryWasmImages1.filter((code_file) => {
              let tmp = closure_2_0(693).isPlainObject(code_file) && typeof code_file.code_file === "string";
              if (tmp) {
                tmp = !code_file.some((code_file) => code_file.code_file === code_file.code_file);
              }
              return tmp;
            });
            const items = [];
            HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(tmp16, 0));
            tmp(902).WINDOW._sentryWasmImages = items;
          }
          if (event.data._sentryWorkerError) {
            if (tmp(946).DEBUG_BUILD) {
              const debug4 = tmp(693).debug;
              debug4.log("Sentry worker rejection message received", event.data._sentryWorkerError);
            }
            const _sentryWorkerError = event.data._sentryWorkerError;
            const client = tmp(693).getClient();
            if (client) {
              const stackParser = client.getOptions().stackParser;
              const attachStacktrace = client.getOptions().attachStacktrace;
              const reason = _sentryWorkerError.reason;
              if (tmpResult11.isPrimitive(reason)) {
                let result1 = tmp(952)._eventFromRejectionWithPrimitive(reason);
                const tmpResult12 = tmp(952);
              } else {
                const tmpResult13 = tmp(905);
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
              tmpResult11 = tmp(693);
              const obj6 = { originalException: reason, mechanism: { handled: false, type: "auto.browser.web_worker.onunhandledrejection" } };
              tmp(693).captureEvent(result1, obj6);
              if (tmp(946).DEBUG_BUILD) {
                const debug5 = tmp(693).debug;
                debug5.log("Captured worker unhandled rejection", reason);
              }
              const tmpResult14 = tmp(693);
            }
            const tmpResult10 = tmp(693);
          }
        }
        obj = closure_0(693);
      });
    }
  };
});