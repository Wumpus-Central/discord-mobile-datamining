// === Module 12860: createTransport ===

// Module 12860 (createTransport)
const require = arg1;
let dependencyMap = arg6;
arg5.DEFAULT_TRANSPORT_BUFFER_SIZE = 64;
arg5.createTransport = function createTransport(bufferSize) {
  const _require = bufferSize;
  dependencyMap = arg1;
  let promiseBuffer = arg2;
  if (arg2 === undefined) {
    let obj = _require(12861);
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
        const result = items(12841).envelopeItemTypeToDataCategory(arg1);
        const obj = items(12841);
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
      });
      if (0 === items.length) {
        let tmpResult = tmp(tmp2[3]);
        return tmpResult.resolvedSyncPromise({});
      } else {
        tmpResult = tmp(tmp2[1]);
        table = tmpResult.createEnvelope(arg0[0], items);
        function recordEnvelopeLoss(arg0) {

        }
        return recordEnvelopeLoss.add(() => {
          const obj = { body: items(12841).serializeEnvelope(dependencyMap) };
          const obj2 = items(12841);
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
              DEBUG_BUILD = closure_1_0(closure_1_1[4]).DEBUG_BUILD;
            }
            if (DEBUG_BUILD) {
              const logger = closure_1_0(closure_1_1[5]).logger;
              const _HermesInternal = HermesInternal;
              logger.warn("Sentry responded with status code " + statusCode.statusCode + " to sent event.");
            }
            closure_3 = closure_1_0(closure_1_1[2]).updateRateLimits(closure_3, statusCode);
            return statusCode;
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
              network_error.recordDroppedEvent(network_error, closure_2_0(closure_2_1[1]).envelopeItemTypeToDataCategory(arg1), tmp);
            });
            throw arg0;
          });
        }).then((arg0) => arg0, (arg0) => {
          if (arg0 instanceof items(12854).SentryError) {
            if (tmp(12825).DEBUG_BUILD) {
              const logger = tmp(12797).logger;
              logger.error("Skipped sending event because buffer is full.");
            }
            if (typeof recordEnvelopeLoss !== "function") {
              HermesBuiltin.throwTypeError();
            }
            const queue_overflow = "queue_overflow";
            let tmpResult = tmp(12841);
            tmpResult.forEachEnvelopeItem(dependencyMap, (arg0, arg1) => {
              if ("event" === arg1) {
                const _Array = Array;
                let tmp4;
                if (Array.isArray(arg0)) {
                  tmp4 = arg0[1];
                }
                const tmp = tmp4;
              }
              network_error.recordDroppedEvent(network_error, closure_2_0(closure_2_1[1]).envelopeItemTypeToDataCategory(arg1), tmp);
            });
            tmpResult = tmp(12821);
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