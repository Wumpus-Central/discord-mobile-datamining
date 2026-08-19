// === Module 878: createTransport ===

// Module 878 (createTransport)
const require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.DEFAULT_TRANSPORT_BUFFER_SIZE = 64;
arg5.createTransport = function createTransport(bufferSize) {
  const _require = bufferSize;
  dependencyMap = arg1;
  let promiseBuffer = arg2;
  if (arg2 === undefined) {
    let obj = _require(877);
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
        const result = items(864).envelopeItemTypeToDataCategory(arg1);
        const obj = items(864);
        if (obj2.isRateLimited(closure_1_3, result)) {
          items.recordDroppedEvent("ratelimit_backoff", result);
        } else {
          items.push(arg0);
        }
        obj2 = items(879);
      });
      if (0 === items.length) {
        return Promise.resolve({});
      } else {
        table = bufferSize(tmp2[1]).createEnvelope(arg0[0], items);
        function recordEnvelopeLoss(arg0) {

        }
        let tmpResult = bufferSize(tmp2[1]);
        return recordEnvelopeLoss.add(() => {
          const obj = { body: items(864).serializeEnvelope(dependencyMap) };
          const obj2 = items(864);
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
              DEBUG_BUILD = items(closure_1_1[3]).DEBUG_BUILD;
            }
            if (DEBUG_BUILD) {
              const debug = items(closure_1_1[4]).debug;
              const _HermesInternal = HermesInternal;
              debug.warn("Sentry responded with status code " + result.statusCode + " to sent event.");
            }
            closure_3 = items(closure_1_1[2]).updateRateLimits(closure_3, result);
            return result;
          }, (arg0) => {
            if (typeof closure_2 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            const network_error = "network_error";
            if (obj.envelopeContainsItemType(table, ["client_report"])) {
              if (items(table[3]).DEBUG_BUILD) {
                const debug = items(table[4]).debug;
                const _HermesInternal = HermesInternal;
                debug.warn("Dropping client report. Will not send outcomes (reason: " + "network_error" + ").");
              }
            } else {
              items(table[1]).forEachEnvelopeItem(table, (arg0, arg1) => {
                network_error.recordDroppedEvent(network_error, items(closure_2_1[1]).envelopeItemTypeToDataCategory(arg1));
              });
              const tmpResult = items(table[1]);
            }
            if (items(table[3]).DEBUG_BUILD) {
              const debug2 = items(table[4]).debug;
              debug2.error("Encountered error running transport request:", arg0);
            }
            throw arg0;
          });
        }).then((result) => result, (arg0) => {
          if (arg0 === items(877).SENTRY_BUFFER_FULL_ERROR) {
            if (items(823).DEBUG_BUILD) {
              const debug = items(824).debug;
              debug.error("Skipped sending event because buffer is full.");
            }
            if (typeof recordEnvelopeLoss !== "function") {
              HermesBuiltin.throwTypeError();
            }
            const queue_overflow = "queue_overflow";
            let tmpResult = items(864);
            if (tmpResult.envelopeContainsItemType(dependencyMap, ["client_report"])) {
              if (items(823).DEBUG_BUILD) {
                const debug2 = items(824).debug;
                const _HermesInternal = HermesInternal;
                debug2.warn("Dropping client report. Will not send outcomes (reason: " + "queue_overflow" + ").");
              }
            } else {
              tmpResult = items(864);
              tmpResult.forEachEnvelopeItem(dependencyMap, (arg0, arg1) => {
                network_error.recordDroppedEvent(network_error, items(closure_2_1[1]).envelopeItemTypeToDataCategory(arg1));
              });
            }
            return Promise.resolve({});
          } else {
            throw arg0;
          }
        });
      }
      let obj = bufferSize(table[1]);
      tmp2 = table;
    },
    flush(arg0) {
      return promiseBuffer.drain(arg0);
    }
  };
  return obj;
};