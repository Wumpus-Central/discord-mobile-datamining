// === Module 12860: ? ===

// Module 12860
import _mod12797 from "module_12797" /* 12797 */;
import _mod12821 from "module_12821" /* 12821 */;
import _mod12825 from "module_12825" /* 12825 */;
import _mod12841 from "module_12841" /* 12841 */;
import _mod12854 from "module_12854" /* 12854 */;
import _mod12862 from "module_12862" /* 12862 */;

require = arg1;
let dependencyMap = arg6;

export const DEFAULT_TRANSPORT_BUFFER_SIZE = 64;
export const createTransport = function createTransport(bufferSize, arg1) {
  _require = bufferSize;
  dependencyMap = arg1;
  let promiseBuffer = arg2;
  if (arg2 === undefined) {
    let obj = require("module_12861");
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
        const result = _mod12841.envelopeItemTypeToDataCategory(arg1);
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
        obj2 = _mod12862;
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
          const obj = { body: _mod12841.serializeEnvelope(dependencyMap) };
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
              DEBUG_BUILD = items(12825).DEBUG_BUILD;
            }
            if (DEBUG_BUILD) {
              const logger = items(12797).logger;
              const _HermesInternal = HermesInternal;
              logger.warn("Sentry responded with status code " + statusCode.statusCode + " to sent event.");
            }
            closure_3 = items(12862).updateRateLimits(closure_3, statusCode);
            return statusCode;
          }, (arg0) => {
            if (typeof recordEnvelopeLoss === "function") {
              const network_error = "network_error";
              closure_0(12841).forEachEnvelopeItem(dependencyMap, (arg0, arg1) => {
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
          if (arg0 instanceof _mod12854.SentryError) {
            if (_mod12825.DEBUG_BUILD) {
              const logger = _mod12797.logger;
              logger.error("Skipped sending event because buffer is full.");
            }
            if (typeof recordEnvelopeLoss === "function") {
              const queue_overflow = "queue_overflow";
              let tmpResult = _mod12841;
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
              tmpResult = _mod12821;
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