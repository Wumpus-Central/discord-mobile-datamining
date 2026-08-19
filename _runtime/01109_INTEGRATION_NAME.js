// _runtime/01109_INTEGRATION_NAME.js
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const WebWorker = "WebWorker";

export const INTEGRATION_NAME = "WebWorker";
export const registerWebWorker = function registerWebWorker(self) {
  const _self = self.self;
  const _sentryDebugIds = _self._sentryDebugIds;
  let obj = { _sentryMessage: true, _sentryDebugIds, _sentryModuleMetadata };
  _sentryModuleMetadata = _self._sentryModuleMetadata;
  _self.postMessage(obj);
  const listener = _self.addEventListener("unhandledrejection", (event) => {
    const obj = { reason: _self(dependencyMap[3])._getUnhandledRejectionError(event), filename: null };
    const _location = _self.location;
    let href;
    if (_location != null) {
      href = _location.href;
    }
    obj[1] = href;
    _self.postMessage({ _sentryMessage: true, _sentryWorkerError: obj });
    if (_self(dependencyMap[1]).DEBUG_BUILD) {
      const debug = _self(dependencyMap[0]).debug;
      debug.log("[Sentry Worker] Forwarding unhandled rejection to parent", obj);
    }
    const obj2 = _self(dependencyMap[3]);
  });
  if (_self(1072).DEBUG_BUILD) {
    let debug = tmp3(817).debug;
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
      const item = arr.forEach((item, index) => {
        const listener = item.addEventListener("message", (event) => {
          const data = event.data;
          let obj = callback(table[0]);
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
                let tmpResult = callback(table[0]);
                if (!tmpResult.isPlainObject(data._sentryDebugIds)) {
                  flag = false;
                }
              }
              if ("_sentryModuleMetadata" in data) {
                tmpResult = callback(table[0]);
                if (!tmpResult.isPlainObject(data._sentryModuleMetadata)) {
                  flag = false;
                }
              }
              flag = true;
              if (tmp26) {
                flag = true;
                if (!tmpResult1.isPlainObject(data._sentryWorkerError)) {
                  flag = false;
                }
                tmpResult1 = callback(table[0]);
              }
              tmp26 = "_sentryWorkerError" in data;
            }
          }
          if (flag) {
            const result = event.stopImmediatePropagation();
            if (event.data._sentryDebugIds) {
              if (callback(table[1]).DEBUG_BUILD) {
                const debug = callback(table[0]).debug;
                debug.log("Sentry debugId web worker message received", event.data);
              }
              obj = {};
              const merged = Object.assign(event.data._sentryDebugIds);
              const merged1 = Object.assign(callback(table[2]).WINDOW._sentryDebugIds);
              callback(table[2]).WINDOW._sentryDebugIds = obj;
            }
            if (event.data._sentryModuleMetadata) {
              if (callback(table[1]).DEBUG_BUILD) {
                const debug2 = callback(table[0]).debug;
                debug2.log("Sentry module metadata web worker message received", event.data);
              }
              obj = {};
              const merged2 = Object.assign(event.data._sentryModuleMetadata);
              const merged3 = Object.assign(callback(table[2]).WINDOW._sentryModuleMetadata);
              callback(table[2]).WINDOW._sentryModuleMetadata = obj;
            }
            if (event.data._sentryWorkerError) {
              if (callback(table[1]).DEBUG_BUILD) {
                const debug3 = callback(table[0]).debug;
                debug3.log("Sentry worker rejection message received", event.data._sentryWorkerError);
              }
              const _sentryWorkerError = event.data._sentryWorkerError;
              const client = callback(table[0]).getClient();
              if (client) {
                const stackParser = client.getOptions().stackParser;
                const attachStacktrace = client.getOptions().attachStacktrace;
                const reason = _sentryWorkerError.reason;
                if (tmpResult3.isPrimitive(reason)) {
                  let result1 = callback(table[3])._eventFromRejectionWithPrimitive(reason);
                  const tmpResult4 = callback(table[3]);
                } else {
                  const tmpResult5 = callback(table[4]);
                  result1 = tmpResult5.eventFromUnknownInput(stackParser, reason, undefined, attachStacktrace, true);
                }
                result1.level = "error";
                if (_sentryWorkerError.filename) {
                  obj1 = {};
                  const merged4 = Object.assign(result1.contexts);
                  const obj2 = { filename: null };
                  obj2[0] = _sentryWorkerError.filename;
                  obj1.worker = obj2;
                  result1.contexts = obj1;
                }
                tmpResult3 = callback(table[0]);
                const obj3 = { originalException: null, mechanism: null };
                obj3[0] = reason;
                obj3[1] = { handled: false, type: "auto.browser.web_worker.onunhandledrejection" };
                callback(table[0]).captureEvent(result1, obj3);
                if (callback(table[1]).DEBUG_BUILD) {
                  const debug4 = callback(table[0]).debug;
                  debug4.log("Captured worker unhandled rejection", reason);
                }
                const tmpResult6 = callback(table[0]);
              }
              const tmpResult2 = callback(table[0]);
            }
          }
        });
      });
    },
    addWorker(addEventListener) {
      const listener = addEventListener.addEventListener("message", (event) => {
        const data = event.data;
        let obj = callback(table[0]);
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
              let tmpResult = callback(table[0]);
              if (!tmpResult.isPlainObject(data._sentryDebugIds)) {
                flag = false;
              }
            }
            if ("_sentryModuleMetadata" in data) {
              tmpResult = callback(table[0]);
              if (!tmpResult.isPlainObject(data._sentryModuleMetadata)) {
                flag = false;
              }
            }
            flag = true;
            if (tmp26) {
              flag = true;
              if (!tmpResult1.isPlainObject(data._sentryWorkerError)) {
                flag = false;
              }
              tmpResult1 = callback(table[0]);
            }
            tmp26 = "_sentryWorkerError" in data;
          }
        }
        if (flag) {
          const result = event.stopImmediatePropagation();
          if (event.data._sentryDebugIds) {
            if (callback(table[1]).DEBUG_BUILD) {
              const debug = callback(table[0]).debug;
              debug.log("Sentry debugId web worker message received", event.data);
            }
            obj = {};
            const merged = Object.assign(event.data._sentryDebugIds);
            const merged1 = Object.assign(callback(table[2]).WINDOW._sentryDebugIds);
            callback(table[2]).WINDOW._sentryDebugIds = obj;
          }
          if (event.data._sentryModuleMetadata) {
            if (callback(table[1]).DEBUG_BUILD) {
              const debug2 = callback(table[0]).debug;
              debug2.log("Sentry module metadata web worker message received", event.data);
            }
            obj = {};
            const merged2 = Object.assign(event.data._sentryModuleMetadata);
            const merged3 = Object.assign(callback(table[2]).WINDOW._sentryModuleMetadata);
            callback(table[2]).WINDOW._sentryModuleMetadata = obj;
          }
          if (event.data._sentryWorkerError) {
            if (callback(table[1]).DEBUG_BUILD) {
              const debug3 = callback(table[0]).debug;
              debug3.log("Sentry worker rejection message received", event.data._sentryWorkerError);
            }
            const _sentryWorkerError = event.data._sentryWorkerError;
            const client = callback(table[0]).getClient();
            if (client) {
              const stackParser = client.getOptions().stackParser;
              const attachStacktrace = client.getOptions().attachStacktrace;
              const reason = _sentryWorkerError.reason;
              if (tmpResult3.isPrimitive(reason)) {
                let result1 = callback(table[3])._eventFromRejectionWithPrimitive(reason);
                const tmpResult4 = callback(table[3]);
              } else {
                const tmpResult5 = callback(table[4]);
                result1 = tmpResult5.eventFromUnknownInput(stackParser, reason, undefined, attachStacktrace, true);
              }
              result1.level = "error";
              if (_sentryWorkerError.filename) {
                obj1 = {};
                const merged4 = Object.assign(result1.contexts);
                const obj2 = { filename: null };
                obj2[0] = _sentryWorkerError.filename;
                obj1.worker = obj2;
                result1.contexts = obj1;
              }
              tmpResult3 = callback(table[0]);
              const obj3 = { originalException: null, mechanism: null };
              obj3[0] = reason;
              obj3[1] = { handled: false, type: "auto.browser.web_worker.onunhandledrejection" };
              callback(table[0]).captureEvent(result1, obj3);
              if (callback(table[1]).DEBUG_BUILD) {
                const debug4 = callback(table[0]).debug;
                debug4.log("Captured worker unhandled rejection", reason);
              }
              const tmpResult6 = callback(table[0]);
            }
            const tmpResult2 = callback(table[0]);
          }
        }
      });
    }
  };
});