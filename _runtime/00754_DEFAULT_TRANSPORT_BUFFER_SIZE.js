// _runtime/00754_DEFAULT_TRANSPORT_BUFFER_SIZE.js
import _mod699 from "metro/00699__.js";
import CONSOLE_LEVELS from "00700_CONSOLE_LEVELS.js";
import _mod740 from "metro/00740__.js";
import SENTRY_BUFFER_FULL_ERROR from "00753_SENTRY_BUFFER_FULL_ERROR.js";
import DEFAULT_RETRY_AFTER from "00755_DEFAULT_RETRY_AFTER.js";

const require = globalThis.__r;
let _require, dependencyMap;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const DEFAULT_TRANSPORT_BUFFER_SIZE = 64;
export const createTransport = function createTransport(bufferSize, arg1) {
  _require = bufferSize;
  dependencyMap = arg1;
  let promiseBuffer = arg2;
  if (arg2 === undefined) {
    let tmp2 = _require;
    let num = bufferSize.bufferSize;
    const makePromiseBuffer = require("SENTRY_BUFFER_FULL_ERROR").makePromiseBuffer;
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
        const obj = _mod740;
        const result = obj.envelopeItemTypeToDataCategory(arg1);
        const obj2 = DEFAULT_RETRY_AFTER;
        if (obj2.isRateLimited(closure_3, result)) {
          items.recordDroppedEvent("ratelimit_backoff", result);
        } else {
          items.push(arg0);
        }
      });
      const tmp2 = closure_1;
      if (0 === items.length) {
        return Promise.resolve({});
      } else {
        let tmpResult = bufferSize(tmp2[1]);
        closure_1 = tmpResult.createEnvelope(arg0[0], items);
        function recordEnvelopeLoss(arg0) {}
        const addResult = recordEnvelopeLoss.add(() => {
          let obj2;
          let obj = { body: obj2.serializeEnvelope(closure_1) };
          obj2 = _mod740;
          const promise = closure_1(obj);
          return promise.then(
            (statusCode) => {
              let DEBUG_BUILD = undefined !== statusCode.statusCode;
              if (DEBUG_BUILD) {
                DEBUG_BUILD = statusCode.statusCode < 200 || statusCode.statusCode >= 300;
                const tmp = statusCode.statusCode < 200 || statusCode.statusCode >= 300;
              }
              if (DEBUG_BUILD) {
                DEBUG_BUILD = items(closure_1[3]).DEBUG_BUILD;
              }
              if (DEBUG_BUILD) {
                const debug = items(closure_1[4]).debug;
                const _HermesInternal = HermesInternal;
                debug.warn("Sentry responded with status code " + statusCode.statusCode + " to sent event.");
              }
              const obj = items(closure_1[2]);
              closure_3 = obj.updateRateLimits(closure_3, statusCode);
              return statusCode;
            },
            (arg0) => {
              let recordDroppedEvent;
              if (typeof recordEnvelopeLoss === "function") {
                const network_error = "network_error";
                let obj = recordDroppedEvent(closure_1[1]);
                if (obj.envelopeContainsItemType(closure_1_1, ["client_report"])) {
                  if (recordDroppedEvent(closure_1[3]).DEBUG_BUILD) {
                    const debug = recordDroppedEvent(closure_1[4]).debug;
                    const _HermesInternal = HermesInternal;
                    debug.warn("Dropping client report. Will not send outcomes (reason: " + "network_error" + ").");
                  }
                } else {
                  const tmpResult = recordDroppedEvent(closure_1[1]);
                  tmpResult.forEachEnvelopeItem(closure_1_1, (arg0, arg1) => {
                    recordDroppedEvent = recordDroppedEvent.recordDroppedEvent;
                    const obj = items(closure_3_1[1]);
                    recordDroppedEvent(network_error, obj.envelopeItemTypeToDataCategory(arg1));
                  });
                }
                if (recordDroppedEvent(closure_1[3]).DEBUG_BUILD) {
                  const debug2 = recordDroppedEvent(closure_1[4]).debug;
                  debug2.error("Encountered error running transport request:", arg0);
                }
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
            if (arg0 === SENTRY_BUFFER_FULL_ERROR.SENTRY_BUFFER_FULL_ERROR) {
              if (_mod699.DEBUG_BUILD) {
                const debug = CONSOLE_LEVELS.debug;
                debug.error("Skipped sending event because buffer is full.");
              }
              if (typeof recordEnvelopeLoss === "function") {
                const queue_overflow = "queue_overflow";
                const tmpResult = _mod740;
                if (tmpResult.envelopeContainsItemType(closure_1, ["client_report"])) {
                  if (_mod699.DEBUG_BUILD) {
                    const debug2 = CONSOLE_LEVELS.debug;
                    const _HermesInternal = HermesInternal;
                    debug2.warn("Dropping client report. Will not send outcomes (reason: " + "queue_overflow" + ").");
                  }
                } else {
                  const tmpResult2 = _mod740;
                  tmpResult2.forEachEnvelopeItem(closure_1, (arg0, arg1) => {
                    recordDroppedEvent = recordDroppedEvent.recordDroppedEvent;
                    const obj = items(closure_3_1[1]);
                    recordDroppedEvent(network_error, obj.envelopeItemTypeToDataCategory(arg1));
                  });
                }
                return Promise.resolve({});
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
