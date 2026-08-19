// _runtime/07801_createTransport.js
import { makePromiseBuffer } from "07802_makePromiseBuffer.js";
const require = arg1;
let dependencyMap = arg6;
arg5.DEFAULT_TRANSPORT_BUFFER_SIZE = 64;
arg5.createTransport = function createTransport(bufferSize) {
  const _require = bufferSize;
  dependencyMap = arg1;
  let promiseBuffer = arg2;
  if (arg2 === undefined) {
    let obj = makePromiseBuffer;
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
      bufferSize(table[1]).forEachEnvelopeItem(arg0, (arg0, arg1) => {
        const result = items(7782).envelopeItemTypeToDataCategory(arg1);
        const obj = items(7782);
        if (obj2.isRateLimited(closure_1_3, result)) {
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
        obj2 = items(7803);
      });
      if (0 === items.length) {
        let tmpResult = bufferSize(tmp2[3]);
        return tmpResult.resolvedSyncPromise({});
      } else {
        tmpResult = bufferSize(tmp2[1]);
        table = tmpResult.createEnvelope(arg0[0], items);
        function recordEnvelopeLoss(arg0) {

        }
        return recordEnvelopeLoss.add(() => {
          const obj = { body: items(7782).serializeEnvelope(dependencyMap) };
          const obj2 = items(7782);
          return dependencyMap(obj).then((result) => {
            let DEBUG_BUILD = undefined !== result.statusCode;
            if (DEBUG_BUILD) {
              let tmp = result.statusCode < 200;
              if (!tmp) {
                tmp = result.statusCode >= 300;
              }
              DEBUG_BUILD = tmp;
            }
            if (DEBUG_BUILD) {
              DEBUG_BUILD = items(closure_1_1[4]).DEBUG_BUILD;
            }
            if (DEBUG_BUILD) {
              const logger = items(closure_1_1[5]).logger;
              const _HermesInternal = HermesInternal;
              logger.warn("Sentry responded with status code " + result.statusCode + " to sent event.");
            }
            closure_3 = items(closure_1_1[2]).updateRateLimits(closure_3, result);
            return result;
          }, (arg0) => {
            if (typeof closure_2 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            const network_error = "network_error";
            items(table[1]).forEachEnvelopeItem(table, (arg0, arg1) => {
              if ("event" === arg1) {
                const _Array = Array;
                let tmp4;
                if (Array.isArray(arg0)) {
                  tmp4 = arg0[1];
                }
                const tmp = tmp4;
              }
              network_error.recordDroppedEvent(network_error, items(closure_2_1[1]).envelopeItemTypeToDataCategory(arg1), tmp);
            });
            throw arg0;
          });
        }).then((result) => result, (arg0) => {
          if (arg0 instanceof items(7795).SentryError) {
            if (items(7766).DEBUG_BUILD) {
              const logger = items(7738).logger;
              logger.error("Skipped sending event because buffer is full.");
            }
            if (typeof recordEnvelopeLoss !== "function") {
              HermesBuiltin.throwTypeError();
            }
            const queue_overflow = "queue_overflow";
            let tmpResult = items(7782);
            tmpResult.forEachEnvelopeItem(dependencyMap, (arg0, arg1) => {
              if ("event" === arg1) {
                const _Array = Array;
                let tmp4;
                if (Array.isArray(arg0)) {
                  tmp4 = arg0[1];
                }
                const tmp = tmp4;
              }
              network_error.recordDroppedEvent(network_error, items(closure_2_1[1]).envelopeItemTypeToDataCategory(arg1), tmp);
            });
            tmpResult = items(7762);
            return tmpResult.resolvedSyncPromise({});
          } else {
            throw arg0;
          }
        });
      }
      let obj = bufferSize(table[1]);
    },
    flush(arg0) {
      return promiseBuffer.drain(arg0);
    }
  };
  return obj;
};