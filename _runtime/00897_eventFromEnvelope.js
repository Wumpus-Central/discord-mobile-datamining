// _runtime/00897_eventFromEnvelope.js
import closure_2 from "00005_asyncGeneratorStep.js";

function eventFromEnvelope(arg0, arg1) {
  const _require = arg1;
  require("00864_forEachEnvelopeItem.js").forEachEnvelopeItem(arg0, (arg0, arg1) => {
    if (items.includes(arg1)) {
      const _Array = Array;
      let tmp3;
      if (Array.isArray(arg0)) {
        tmp3 = arg0[1];
      }
      closure_1 = tmp3;
    }
    return closure_1;
  });
  return dependencyMap;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const MULTIPLEXED_TRANSPORT_EXTRA_KEY = "MULTIPLEXED_TRANSPORT_EXTRA_KEY";

export const MULTIPLEXED_TRANSPORT_EXTRA_KEY = "MULTIPLEXED_TRANSPORT_EXTRA_KEY";
export { eventFromEnvelope };
export function makeMultiplexedTransport(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0) => {
    const callback = arg0;
    function getTransport(arg0, arg1) {
      let combined = arg0;
      if (arg1) {
        const _HermesInternal = HermesInternal;
        combined = "" + arg0 + ":" + arg1;
      }
      let result = map;
      const value = map.get(combined);
      if (value) {
        const items = [arg0, value];
        return items;
      } else {
        const dsnFromStringResult = lib(table[2]).dsnFromString(arg0);
        if (dsnFromStringResult) {
          let merged = lib;
          const envelopeEndpointWithUrlEncodedAuth = tmp4(tmp5[3]).getEnvelopeEndpointWithUrlEncodedAuth(dsnFromStringResult, lib.tunnel);
          let tmp9 = lib;
          result = {};
          if (arg1) {
            lib = arg1;
            merged = Object.assign(merged);
            result.url = envelopeEndpointWithUrlEncodedAuth;
            lib = undefined;
            table = undefined;
            let tmp9Result = tmp9(result);
            table = tmp9Result;
            let obj = {};
            const merged1 = Object.assign(tmp9Result);
            tmp9 = closure_2_2;
            lib = closure_2_2((arg0) => {
              closure_0 = arg0;
              c1 = 0;
              return (function*(arg0) {
                if (c1 === 2) {
                  c1 = 3;
                  HermesBuiltin.throwTypeError();
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw arg1;
                  } else if (arg0 === 2) {
                    let obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                } else {
                  try {
                    c1 = 2;
                    if (arg0 === 1) {
                      c1 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c1 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      const tmp6 = closure_2_4(closure_0, ["event", "transaction", "profile", "replay_event"]);
                      if (tmp6) {
                        tmp6.release = closure_0;
                      }
                      c1 = 3;
                      obj = { value: null, done: true };
                      obj[0] = c1.send(closure_0);
                      return obj;
                    }
                  } catch (tmp9) {
                    c1 = tmp;
                    throw tmp9;
                  }
                }
              })();
            });
            obj.send = function send(arg0) {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            tmp9Result = obj;
          } else {
            const merged2 = Object.assign(merged);
            result.url = envelopeEndpointWithUrlEncodedAuth;
            tmp9Result = tmp9(result);
          }
          result = result.set(combined, tmp9Result);
          const tmp4Result = tmp4(tmp5[3]);
        }
        const obj2 = lib(table[2]);
        tmp4 = lib;
        tmp5 = table;
      }
    }
    function _send() {
      const self = this;
      const tmp = closure_2_2((arg0) => {
        closure_0 = arg0;
        c2 = 0;
        c1 = 0;
        return (function*(arg0) {
          obj1 = { envelope: null, getEvent: null };
          obj1[0] = closure_0;
          obj1[1] = function getEvent() { ... };
          const mapped = closure_1_3(obj1).map(() => { ... });
          const found = mapped.filter(() => { ... });
          let arr3 = found;
          if (!found.length) {
            let items = ["", c1];
            const items1 = [items];
            arr3 = items1;
          }
          yield Promise.all(arr3.map(() => { ... }));
          return arg1[0];
        })();
      });
      closure_5 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    function _flush() {
      const self = this;
      const tmp = closure_2_2((arg0) => {
        closure_0 = arg0;
        c3 = 0;
        c4 = 0;
        return (function*(arg0, arr) {
          closure_2 = tmp2;
          closure_1 = 0;
          const items = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(closure_1_2.values(), closure_1);
          closure_1 = arraySpreadResult;
          items[arraySpreadResult] = closure_1_1;
          closure_1 = closure_1 + 1;
          yield Promise.all(items.map(() => { ... }));
          return arr.every(/* F121763 */ function() { ... });
        })();
      });
      closure_6 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    closure_1 = callback(arg0);
    const map = new Map();
    let fn = closure_1;
    if (!closure_1) {
      fn = (getEvent) => {
        const event = getEvent.getEvent();
        let tmp2;
        if (event != null) {
          const extra = event.extra;
          if (extra != null) {
            tmp2 = extra[fn];
          }
        }
        if (tmp2) {
          const _Array = Array;
          return [];
        }
      };
    }
    return {
      send(arg0) {
        const self = this;
        const apply = _send.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      },
      flush(arg0) {
        const self = this;
        const apply = _flush.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
    };
  };
}