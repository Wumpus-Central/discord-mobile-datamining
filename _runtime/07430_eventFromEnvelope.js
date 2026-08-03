// === Module 7430: eventFromEnvelope ===

// Module 7430 (eventFromEnvelope)
import asyncGeneratorStep from "asyncGeneratorStep";

function eventFromEnvelope(arg0, arg1) {
  const _require = arg1;
  _require(7407).forEachEnvelopeItem(arg0, (arg0, arg1) => {
    if (items.includes(arg1)) {
      const _Array = Array;
      let tmp3;
      if (Array.isArray(arg0)) {
        tmp3 = arg0[1];
      }
      let closure_1 = tmp3;
    }
    return closure_1;
  });
  return dependencyMap;
}

export { eventFromEnvelope };
export function makeMultiplexedTransport(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
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
            let c1;
            let tmp9Result = tmp9(result);
            c1 = tmp9Result;
            let obj = {};
            const merged1 = Object.assign(tmp9Result);
            tmp9 = outer2_2;
            lib = outer2_2((arg0) => {
              let closure_0 = arg0;
              let c1 = 0;
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
                    return { value: "HermesInternal", done: null };
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
                      const tmp6 = outer2_3(closure_0, ["event", "transaction", "profile", "replay_event"]);
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
      const tmp = outer2_2((arg0) => {
        let closure_0 = arg0;
        let c2 = 0;
        let c1 = 0;
        return (function*(arg0) {
          if (v0 === 2) {
            v0 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              v0 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  v0 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  v0 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  const obj1 = { envelope: null, getEvent: null };
                  obj1[0] = closure_0;
                  obj1[1] = function getEvent() { ... };
                  const mapped = v0(obj1).map(() => { ... });
                  const found = mapped.filter(() => { ... });
                  let arr3 = found;
                  if (!found.length) {
                    let items = ["", v0];
                    const items1 = [items];
                    arr3 = items1;
                  }
                  c2 = 1;
                  v0 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = Promise.all(arr3.map(() => { ... }));
                  return obj2;
                }
              } else if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                v0 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1[0];
                return obj;
              }
            } catch (tmp7) {
              v0 = tmp;
              throw tmp7;
            }
          }
        })();
      });
      const _send = tmp;
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
      const tmp = outer2_2((arg0) => {
        let closure_0 = arg0;
        let c3 = 0;
        let c4 = 0;
        return (function*(arg0, arr) {
          if (c4 === 2) {
            c4 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw arr;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arr;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c4 = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw arr;
                } else if (arg0 === 2) {
                  c4 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arr;
                  return obj;
                } else {
                  let closure_2 = tmp2;
                  let closure_1 = 0;
                  const items = [];
                  const arraySpreadResult = HermesBuiltin.arraySpread(outer1_2.values(), closure_1);
                  closure_1 = arraySpreadResult;
                  items[arraySpreadResult] = outer1_1;
                  closure_1 = closure_1 + 1;
                  c3 = 1;
                  c4 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = Promise.all(items.map(() => { ... }));
                  return obj1;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw arr;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arr;
                return obj2;
              } else {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arr.every(/* F119195 */ function() { ... });
                return obj;
              }
            } catch (tmp6) {
              c4 = tmp;
              throw tmp6;
            }
          }
        })();
      });
      const _flush = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    let closure_1 = callback(arg0);
    const map = new Map();
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