// === Module 12864: ? ===

// Module 12864
import _mod12801 from "module_12801" /* 12801 */;
import _mod12825 from "module_12825" /* 12825 */;
import _mod12829 from "module_12829" /* 12829 */;
import _mod12845 from "module_12845" /* 12845 */;
import _mod12858 from "module_12858" /* 12858 */;
import _mod12866 from "module_12866" /* 12866 */;

require = arg1;
let dependencyMap = arg6;

export const DEFAULT_TRANSPORT_BUFFER_SIZE = 64;
export const createTransport = function createTransport(bufferSize, arg1) {
  _require = bufferSize;
  dependencyMap = arg1;
  let promiseBuffer = arg2;
  if (arg2 === undefined) {
    let obj = require("module_12865");
    let num = bufferSize.bufferSize;
    if (!num) {
      num = 64;
    }
    promiseBuffer = obj.makePromiseBuffer(num);
  }
  closure_3 = {};
  obj = {
    send(arg0) {
      const items = [];
      bufferSize(dependencyMap[1]).forEachEnvelopeItem(arg0, (arg0, arg1) => {
        const result = _mod12845.envelopeItemTypeToDataCategory(arg1);
        if (obj2.isRateLimited(closure_3, result)) {
          if ("event" === arg1) {
            const _Array = Array;
            let tmp6;
            if (Array.isArray(arg0)) {
              tmp6 = arg0[1];
            }
            const tmp4 = tmp6;
          }
          items.recordDroppedEvent("ratelimit_backoff", result, tmp4);
        } else {
          items.push(arg0);
        }
        obj2 = _mod12866;
      });
      if (0 === items.length) {
        let tmpResult = bufferSize(tmp2[3]);
        return tmpResult.resolvedSyncPromise({});
      } else {
        tmpResult = bufferSize(tmp2[1]);
        dependencyMap = tmpResult.createEnvelope(arg0[0], items);
        function recordEnvelopeLoss(arg0) {

        }
        return recordEnvelopeLoss.add(() => {
          const obj = { body: _mod12845.serializeEnvelope(dependencyMap) };
          return dependencyMap(obj).then((statusCode) => {
            let DEBUG_BUILD = undefined !== statusCode.statusCode;
            if (DEBUG_BUILD) {
              let tmp = statusCode.statusCode < 200;
              if (!tmp) {
                tmp = statusCode.statusCode >= 300;
              }
              DEBUG_BUILD = tmp;
            }
            if (DEBUG_BUILD) {
              DEBUG_BUILD = items(12829).DEBUG_BUILD;
            }
            if (DEBUG_BUILD) {
              const logger = items(12801).logger;
              const _HermesInternal = HermesInternal;
              logger.warn("Sentry responded with status code " + statusCode.statusCode + " to sent event.");
            }
            closure_3 = items(12866).updateRateLimits(closure_3, statusCode);
            return statusCode;
          }, (arg0) => {
            if (typeof recordEnvelopeLoss === "function") {
              const network_error = "network_error";
              closure_0(12845).forEachEnvelopeItem(dependencyMap, (arg0, arg1) => {
                if ("event" === arg1) {
                  const _Array = Array;
                  let tmp4;
                  if (Array.isArray(arg0)) {
                    tmp4 = arg0[1];
                  }
                  const tmp = tmp4;
                }
                closure_2_0.recordDroppedEvent(network_error, items(closure_1[1]).envelopeItemTypeToDataCategory(arg1), tmp);
              });
              throw arg0;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
        }).then((result) => result, (arg0) => {
          if (arg0 instanceof _mod12858.SentryError) {
            if (_mod12829.DEBUG_BUILD) {
              const logger = _mod12801.logger;
              logger.error("Skipped sending event because buffer is full.");
            }
            if (typeof recordEnvelopeLoss === "function") {
              const queue_overflow = "queue_overflow";
              let tmpResult = _mod12845;
              tmpResult.forEachEnvelopeItem(closure_1, (arg0, arg1) => {
                if ("event" === arg1) {
                  const _Array = Array;
                  let tmp4;
                  if (Array.isArray(arg0)) {
                    tmp4 = arg0[1];
                  }
                  const tmp = tmp4;
                }
                closure_2_0.recordDroppedEvent(network_error, items(closure_1[1]).envelopeItemTypeToDataCategory(arg1), tmp);
              });
              tmpResult = _mod12825;
              return tmpResult.resolvedSyncPromise({});
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw arg0;
          }
        });
      }
      let obj = bufferSize(dependencyMap[1]);
    },
    flush(arg0) {
      return promiseBuffer.drain(arg0);
    }
  };
  return obj;
};