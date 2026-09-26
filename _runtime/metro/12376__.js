// _runtime/metro/12376__.js
import _mod12313 from "12313__.js";
import _mod12337 from "12337__.js";
import _mod12341 from "12341__.js";
import _mod12357 from "12357__.js";
import _mod12370 from "12370__.js";
import _mod12378 from "12378__.js";

const require = globalThis.__r;

require = arg1;
let dependencyMap = arg6;

export const DEFAULT_TRANSPORT_BUFFER_SIZE = 64;
export const createTransport = function createTransport(bufferSize, arg1) {
  _require = bufferSize;
  dependencyMap = arg1;
  let promiseBuffer = arg2;
  if (arg2 === undefined) {
    let num = bufferSize.bufferSize;
    if (!num) {
      num = 64;
    }
    promiseBuffer = require("12377__.js").makePromiseBuffer(num);
    let obj = require("12377__.js");
  }
  closure_3 = {};
  return {
    send(arg0) {
      const items = [];
      bufferSize(dependencyMap[1]).forEachEnvelopeItem(arg0, (arg0, arg1) => {
        const result = _mod12357.envelopeItemTypeToDataCategory(arg1);
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
        obj2 = _mod12378;
      });
      if (0 === items.length) {
        return bufferSize(tmp2[3]).resolvedSyncPromise({});
      } else {
        dependencyMap = bufferSize(tmp2[1]).createEnvelope(arg0[0], items);
        function recordEnvelopeLoss(arg0) {}
        const tmpResult2 = bufferSize(tmp2[1]);
        return recordEnvelopeLoss
          .add(() => {
            const obj = { body: _mod12357.serializeEnvelope(dependencyMap) };
            return dependencyMap(obj).then(
              (statusCode) => {
                let DEBUG_BUILD = undefined !== statusCode.statusCode;
                if (DEBUG_BUILD) {
                  let tmp = statusCode.statusCode < 200;
                  if (!tmp) {
                    tmp = statusCode.statusCode >= 300;
                  }
                  DEBUG_BUILD = tmp;
                }
                if (DEBUG_BUILD) {
                  DEBUG_BUILD = items(12341).DEBUG_BUILD;
                }
                if (DEBUG_BUILD) {
                  const logger = items(12313).logger;
                  const _HermesInternal = HermesInternal;
                  logger.warn("Sentry responded with status code " + statusCode.statusCode + " to sent event.");
                }
                closure_3 = items(12378).updateRateLimits(closure_3, statusCode);
                return statusCode;
              },
              (arg0) => {
                if (typeof recordEnvelopeLoss === "function") {
                  const network_error = "network_error";
                  closure_0(12357).forEachEnvelopeItem(dependencyMap, (arg0, arg1) => {
                    if ("event" === arg1) {
                      const _Array = Array;
                      let tmp4;
                      if (Array.isArray(arg0)) {
                        tmp4 = arg0[1];
                      }
                      const tmp = tmp4;
                    }
                    closure_2_0.recordDroppedEvent(
                      network_error,
                      items(closure_1[1]).envelopeItemTypeToDataCategory(arg1),
                      tmp,
                    );
                  });
                  throw arg0;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              },
            );
          })
          .then(
            (result) => result,
            (arg0) => {
              if (arg0 instanceof _mod12370.SentryError) {
                if (_mod12341.DEBUG_BUILD) {
                  const logger = _mod12313.logger;
                  logger.error("Skipped sending event because buffer is full.");
                }
                if (typeof recordEnvelopeLoss === "function") {
                  const queue_overflow = "queue_overflow";
                  _mod12357.forEachEnvelopeItem(closure_1, (arg0, arg1) => {
                    if ("event" === arg1) {
                      const _Array = Array;
                      let tmp4;
                      if (Array.isArray(arg0)) {
                        tmp4 = arg0[1];
                      }
                      const tmp = tmp4;
                    }
                    closure_2_0.recordDroppedEvent(
                      network_error,
                      items(closure_1[1]).envelopeItemTypeToDataCategory(arg1),
                      tmp,
                    );
                  });
                  const tmpResult = _mod12357;
                  return _mod12337.resolvedSyncPromise({});
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw arg0;
              }
            },
          );
      }
      let obj = bufferSize(dependencyMap[1]);
    },
    flush(arg0) {
      return promiseBuffer.drain(arg0);
    },
  };
};
