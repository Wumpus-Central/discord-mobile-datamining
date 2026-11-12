// _runtime/metro/09793__.js
import _mod9730 from "09730__.js";
import _mod9754 from "09754__.js";
import _mod9758 from "09758__.js";
import _mod9774 from "09774__.js";
import _mod9787 from "09787__.js";
import _mod9795 from "09795__.js";

const require = globalThis.__r;

require = arg1;
let dependencyMap = arg6;

export const DEFAULT_TRANSPORT_BUFFER_SIZE = 64;
export function createTransport(bufferSize, arg1) {
  _require = bufferSize;
  dependencyMap = arg1;
  let promiseBuffer = arg2;
  if (arg2 === undefined) {
    let num = bufferSize.bufferSize;
    if (!num) {
      num = 64;
    }
    promiseBuffer = require("09794__.js").makePromiseBuffer(num);
    let obj = require("09794__.js");
  }
  closure_3 = {};
  return {
    send(arg0) {
      items = [];
      bufferSize(dependencyMap[1]).forEachEnvelopeItem(arg0, (arg0, arg1) => {
        const result = _mod9774.envelopeItemTypeToDataCategory(arg1);
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
        obj2 = _mod9795;
      });
      if (0 === items.length) {
        return bufferSize(tmp2[3]).resolvedSyncPromise({});
      } else {
        dependencyMap = bufferSize(tmp2[1]).createEnvelope(arg0[0], items);
        function recordEnvelopeLoss(arg0) {}
        const tmpResult2 = bufferSize(tmp2[1]);
        return recordEnvelopeLoss
          .add(() => {
            const obj = { body: _mod9774.serializeEnvelope(dependencyMap) };
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
                  DEBUG_BUILD = items(9758).DEBUG_BUILD;
                }
                if (DEBUG_BUILD) {
                  const logger = items(9730).logger;
                  const _HermesInternal = HermesInternal;
                  logger.warn("Sentry responded with status code " + statusCode.statusCode + " to sent event.");
                }
                closure_3 = items(9795).updateRateLimits(closure_3, statusCode);
                return statusCode;
              },
              (arg0) => {
                if (typeof recordEnvelopeLoss === "function") {
                  const network_error = "network_error";
                  closure_0(9774).forEachEnvelopeItem(dependencyMap, (arg0, arg1) => {
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
              if (arg0 instanceof _mod9787.SentryError) {
                if (_mod9758.DEBUG_BUILD) {
                  const logger = _mod9730.logger;
                  logger.error("Skipped sending event because buffer is full.");
                }
                if (typeof recordEnvelopeLoss === "function") {
                  const queue_overflow = "queue_overflow";
                  _mod9774.forEachEnvelopeItem(closure_1, (arg0, arg1) => {
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
                  const tmpResult = _mod9774;
                  return _mod9754.resolvedSyncPromise({});
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
}
