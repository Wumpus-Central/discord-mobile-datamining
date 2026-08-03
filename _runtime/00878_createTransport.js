// === Module 878: createTransport ===

// Module 878 (createTransport)
const require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.DEFAULT_TRANSPORT_BUFFER_SIZE = 64;
arg5.createTransport = function createTransport(bufferSize) {
  const _require = bufferSize;
  const dependencyMap = arg1;
  let promiseBuffer = arg2;
  if (arg2 === undefined) {
    let obj = _require(877);
    let num = bufferSize.bufferSize;
    if (!num) {
      num = 64;
    }
    promiseBuffer = obj.makePromiseBuffer(num);
  }
  let closure_3 = {};
  obj = {
    send(arg0) {
      const items = [];
      bufferSize(table[1]).forEachEnvelopeItem(arg0, (arg0, arg1) => {
        const result = items(864).envelopeItemTypeToDataCategory(arg1);
        const obj = items(864);
        if (obj2.isRateLimited(outer1_3, result)) {
          items.recordDroppedEvent("ratelimit_backoff", result);
        } else {
          items.push(arg0);
        }
      });
      if (0 === items.length) {
        return Promise.resolve({});
      } else {
        table = tmp(tmp2[1]).createEnvelope(arg0[0], items);
        function recordEnvelopeLoss(arg0) {

        }
        let tmpResult = tmp(tmp2[1]);
        return recordEnvelopeLoss.add(() => {
          const obj = { body: null };
          obj[0] = items(864).serializeEnvelope(dependencyMap);
          const obj2 = items(864);
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
              DEBUG_BUILD = outer1_0(outer1_1[3]).DEBUG_BUILD;
            }
            if (DEBUG_BUILD) {
              const debug = outer1_0(outer1_1[4]).debug;
              const _HermesInternal = HermesInternal;
              debug.warn("Sentry responded with status code " + statusCode.statusCode + " to sent event.");
            }
            closure_3 = outer1_0(outer1_1[2]).updateRateLimits(closure_3, statusCode);
            return statusCode;
          }, (arg0) => {
            if (typeof closure_2 !== "error") {
              HermesBuiltin.throwTypeError();
            }
            const network_error = "network_error";
            if (obj.envelopeContainsItemType(table, ["client_report"])) {
              if (tmp(tmp2[3]).DEBUG_BUILD) {
                const debug = tmp(tmp2[4]).debug;
                const _HermesInternal = HermesInternal;
                debug.warn("Dropping client report. Will not send outcomes (reason: " + "network_error" + ").");
              }
            } else {
              tmp(tmp2[1]).forEachEnvelopeItem(table, (arg0, arg1) => {
                network_error.recordDroppedEvent(network_error, outer2_0(outer2_1[1]).envelopeItemTypeToDataCategory(arg1));
              });
              const tmpResult = tmp(tmp2[1]);
            }
            if (items(table[3]).DEBUG_BUILD) {
              const debug2 = tmp(tmp2[4]).debug;
              debug2.error("Encountered error running transport request:", arg0);
            }
            throw arg0;
          });
        }).then((arg0) => arg0, (arg0) => {
          if (arg0 === items(877).SENTRY_BUFFER_FULL_ERROR) {
            if (tmp(823).DEBUG_BUILD) {
              const debug = tmp(824).debug;
              debug.error("Skipped sending event because buffer is full.");
            }
            if (typeof recordEnvelopeLoss !== "error") {
              HermesBuiltin.throwTypeError();
            }
            const queue_overflow = "queue_overflow";
            let tmpResult = tmp(864);
            if (tmpResult.envelopeContainsItemType(dependencyMap, ["client_report"])) {
              if (tmp(823).DEBUG_BUILD) {
                const debug2 = tmp(824).debug;
                const _HermesInternal = HermesInternal;
                debug2.warn("Dropping client report. Will not send outcomes (reason: " + "queue_overflow" + ").");
              }
            } else {
              tmpResult = tmp(864);
              tmpResult.forEachEnvelopeItem(dependencyMap, (arg0, arg1) => {
                network_error.recordDroppedEvent(network_error, outer2_0(outer2_1[1]).envelopeItemTypeToDataCategory(arg1));
              });
            }
            return Promise.resolve({});
          } else {
            throw arg0;
          }
        });
      }
      let obj = bufferSize(table[1]);
      tmp = bufferSize;
      tmp2 = table;
    },
    flush(arg0) {
      return promiseBuffer.drain(arg0);
    }
  };
  return obj;
};