// _runtime/metro/12643__.js
import _mod12580 from "12580__.js";
import _mod12604 from "12604__.js";
import _mod12608 from "12608__.js";
import _mod12624 from "12624__.js";
import _mod12637 from "12637__.js";
import _slicedToArray from "12645__slicedToArray.js";

const require = globalThis.__r;
let _require, dependencyMap;

export const DEFAULT_TRANSPORT_BUFFER_SIZE = 64;
export const createTransport = function createTransport(bufferSize, arg1) {
  _require = bufferSize;
  dependencyMap = arg1;
  let promiseBuffer = arg2;
  if (arg2 === undefined) {
    const tmp2 = _require;
    let tmp4 = require("12644__.js");
    let num = bufferSize.bufferSize;
    const makePromiseBuffer = tmp4.makePromiseBuffer;
    if (!num) {
      num = 64;
    }
    promiseBuffer = makePromiseBuffer(num);
  }
  let closure_3 = {};
  let obj = {
    send(arg0) {
      const items = [];
      let obj = bufferSize(closure_1[1]);
      obj.forEachEnvelopeItem(arg0, (arg0, arg1) => {
        const obj = _mod12624;
        const result = obj.envelopeItemTypeToDataCategory(arg1);
        const obj2 = _slicedToArray;
        if (obj2.isRateLimited(closure_3, result)) {
          let tmp4;
          if ("event" === arg1) {
            const _Array = Array;
            let tmp6;
            if (Array.isArray(arg0)) {
              tmp6 = arg0[1];
            }
            tmp4 = tmp6;
          }
          items.recordDroppedEvent("ratelimit_backoff", result, tmp4);
        } else {
          items.push(arg0);
        }
      });
      if (0 === items.length) {
        let tmpResult = bufferSize(tmp2[3]);
        return tmpResult.resolvedSyncPromise({});
      } else {
        let tmpResult2 = bufferSize(tmp2[1]);
        closure_1 = tmpResult2.createEnvelope(arg0[0], items);
        function recordEnvelopeLoss(arg0) {}
        let tmp4 = recordEnvelopeLoss;
        const addResult = recordEnvelopeLoss.add(() => {
          let obj2;
          let obj = { body: obj2.serializeEnvelope(closure_1) };
          obj2 = _mod12624;
          const promise = closure_1(obj);
          return promise.then(
            (statusCode) => {
              let DEBUG_BUILD = undefined !== statusCode.statusCode;
              if (DEBUG_BUILD) {
                DEBUG_BUILD = statusCode.statusCode < 200 || statusCode.statusCode >= 300;
                const tmp = statusCode.statusCode < 200 || statusCode.statusCode >= 300;
              }
              if (DEBUG_BUILD) {
                DEBUG_BUILD = items(closure_1[4]).DEBUG_BUILD;
              }
              if (DEBUG_BUILD) {
                const logger = items(closure_1[5]).logger;
                const _HermesInternal = HermesInternal;
                logger.warn("Sentry responded with status code " + statusCode.statusCode + " to sent event.");
              }
              const obj = items(closure_1[2]);
              closure_3 = obj.updateRateLimits(closure_3, statusCode);
              return statusCode;
            },
            (arg0) => {
              let recordDroppedEvent;
              if (typeof recordEnvelopeLoss === "function") {
                let tmp = arg0;
                const network_error = "network_error";
                let obj = recordDroppedEvent(closure_1[1]);
                obj.forEachEnvelopeItem(closure_1_1, (arg0, arg1) => {
                  let tmp;
                  if ("event" === arg1) {
                    const _Array = Array;
                    let tmp4;
                    if (Array.isArray(arg0)) {
                      tmp4 = arg0[1];
                    }
                    tmp = tmp4;
                  }
                  recordDroppedEvent = recordDroppedEvent.recordDroppedEvent;
                  const obj = items(closure_3_1[1]);
                  recordDroppedEvent(network_error, obj.envelopeItemTypeToDataCategory(arg1), tmp);
                });
                throw arg0;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            },
          );
        });
        return addResult.then(
          (result) => result,
          (arg0) => {
            if (arg0 instanceof _mod12637.SentryError) {
              if (_mod12608.DEBUG_BUILD) {
                const logger = _mod12580.logger;
                logger.error("Skipped sending event because buffer is full.");
              }
              if (typeof recordEnvelopeLoss === "function") {
                const queue_overflow = "queue_overflow";
                const tmpResult = _mod12624;
                tmpResult.forEachEnvelopeItem(closure_1, (arg0, arg1) => {
                  let tmp;
                  if ("event" === arg1) {
                    const _Array = Array;
                    let tmp4;
                    if (Array.isArray(arg0)) {
                      tmp4 = arg0[1];
                    }
                    tmp = tmp4;
                  }
                  recordDroppedEvent = recordDroppedEvent.recordDroppedEvent;
                  const obj = items(closure_3_1[1]);
                  recordDroppedEvent(network_error, obj.envelopeItemTypeToDataCategory(arg1), tmp);
                });
                const tmpResult2 = _mod12604;
                return tmpResult2.resolvedSyncPromise({});
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw arg0;
            }
          },
        );
      }
    },
    flush(arg0) {
      return promiseBuffer.drain(arg0);
    },
  };
  return obj;
};
