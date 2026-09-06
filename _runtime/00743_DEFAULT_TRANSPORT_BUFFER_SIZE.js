// _runtime/00743_DEFAULT_TRANSPORT_BUFFER_SIZE.js
import _mod688 from "metro/00688__.js";
import consoleSandbox from "00689_consoleSandbox.js";
import forEachEnvelopeItem from "00729_forEachEnvelopeItem.js";
import SENTRY_BUFFER_FULL_ERROR from "00742_SENTRY_BUFFER_FULL_ERROR.js";
import disabledUntil from "00744_disabledUntil.js";

require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const DEFAULT_TRANSPORT_BUFFER_SIZE = 64;
export const createTransport = function createTransport(bufferSize, arg1) {
  _require = bufferSize;
  dependencyMap = arg1;
  let promiseBuffer = arg2;
  if (arg2 === undefined) {
    let obj = require("SENTRY_BUFFER_FULL_ERROR");
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
        const result = forEachEnvelopeItem.envelopeItemTypeToDataCategory(arg1);
        if (obj2.isRateLimited(closure_3, result)) {
          items.recordDroppedEvent("ratelimit_backoff", result);
        } else {
          items.push(arg0);
        }
        obj2 = disabledUntil;
      });
      if (0 === items.length) {
        return Promise.resolve({});
      } else {
        dependencyMap = bufferSize(tmp2[1]).createEnvelope(arg0[0], items);
        function recordEnvelopeLoss(arg0) {}
        let tmpResult = bufferSize(tmp2[1]);
        return recordEnvelopeLoss
          .add(() => {
            const obj = { body: forEachEnvelopeItem.serializeEnvelope(dependencyMap) };
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
                  DEBUG_BUILD = items(688).DEBUG_BUILD;
                }
                if (DEBUG_BUILD) {
                  const debug = items(689).debug;
                  const _HermesInternal = HermesInternal;
                  debug.warn("Sentry responded with status code " + statusCode.statusCode + " to sent event.");
                }
                closure_3 = items(744).updateRateLimits(closure_3, statusCode);
                return statusCode;
              },
              (arg0) => {
                if (typeof recordEnvelopeLoss === "function") {
                  const network_error = "network_error";
                  if (obj.envelopeContainsItemType(dependencyMap, ["client_report"])) {
                    if (closure_0(688).DEBUG_BUILD) {
                      const debug = closure_0(689).debug;
                      const _HermesInternal = HermesInternal;
                      debug.warn("Dropping client report. Will not send outcomes (reason: " + "network_error" + ").");
                    }
                  } else {
                    closure_0(729).forEachEnvelopeItem(dependencyMap, (arg0, arg1) => {
                      closure_2_0.recordDroppedEvent(
                        network_error,
                        items(closure_1[1]).envelopeItemTypeToDataCategory(arg1),
                      );
                    });
                    const tmpResult = closure_0(729);
                  }
                  if (closure_0(688).DEBUG_BUILD) {
                    const debug2 = closure_0(689).debug;
                    debug2.error("Encountered error running transport request:", arg0);
                  }
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
              if (arg0 === SENTRY_BUFFER_FULL_ERROR.SENTRY_BUFFER_FULL_ERROR) {
                if (_mod688.DEBUG_BUILD) {
                  const debug = consoleSandbox.debug;
                  debug.error("Skipped sending event because buffer is full.");
                }
                if (typeof recordEnvelopeLoss === "function") {
                  const queue_overflow = "queue_overflow";
                  let tmpResult = forEachEnvelopeItem;
                  if (tmpResult.envelopeContainsItemType(closure_1, ["client_report"])) {
                    if (_mod688.DEBUG_BUILD) {
                      const debug2 = consoleSandbox.debug;
                      const _HermesInternal = HermesInternal;
                      debug2.warn("Dropping client report. Will not send outcomes (reason: " + "queue_overflow" + ").");
                    }
                  } else {
                    tmpResult = forEachEnvelopeItem;
                    tmpResult.forEachEnvelopeItem(closure_1, (arg0, arg1) => {
                      closure_2_0.recordDroppedEvent(
                        network_error,
                        items(closure_1[1]).envelopeItemTypeToDataCategory(arg1),
                      );
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
      let obj = bufferSize(dependencyMap[1]);
      tmp2 = dependencyMap;
    },
    flush(arg0) {
      return promiseBuffer.drain(arg0);
    },
  };
  return obj;
};
