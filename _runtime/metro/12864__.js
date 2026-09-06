// _runtime/metro/12864__.js
import _mod12841 from "12841__.js";
import _mod12844 from "12844__.js";
import asyncGeneratorStep from "../00005_asyncGeneratorStep.js";

function eventFromEnvelope(arg0, arg1) {
  closure_0 = arg1;
  _mod12841.forEachEnvelopeItem(arg0, (arg0, arg1) => {
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

export { eventFromEnvelope };
export function makeMultiplexedTransport(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0) => {
    let tunnel = arg0;
    function getTransport(arg0, arg1) {
      let combined = arg0;
      if (arg1) {
        const _HermesInternal = HermesInternal;
        combined = "" + arg0 + ":" + arg1;
      }
      let result = map;
      value = map.get(combined);
      if (value) {
        const items = [arg0, value];
        return items;
      } else {
        const dsnFromStringResult = _mod12844.dsnFromString(arg0);
        if (dsnFromStringResult) {
          let merged = tunnel;
          const envelopeEndpointWithUrlEncodedAuth = tmp4(12851).getEnvelopeEndpointWithUrlEncodedAuth(dsnFromStringResult, tunnel.tunnel);
          let tmp9 = tunnel;
          result = {};
          if (arg1) {
            merged = Object.assign(merged);
            result.url = envelopeEndpointWithUrlEncodedAuth;
            let tmp9Result = tmp9(result);
            closure_1 = tmp9Result;
            let obj = {};
            const merged1 = Object.assign(tmp9Result);
            tmp9 = asyncGeneratorStep;
            tunnel = asyncGeneratorStep(async (release) => {
              c1 = 0;
              return (async (arg0, value) => {
                if (c1 === 2) {
                  c1 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    let obj = { value, done: true };
                    return obj;
                  } else {
                    return { value: "HermesInternal", done: null };
                  }
                } else {
                  try {
                    c1 = 2;
                    if (arg0 === 1) {
                      c1 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c1 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      const tmp6 = getTransport(release, ["event", "transaction", "profile", "replay_event"]);
                      if (tmp6) {
                        tmp6.release = release;
                      }
                      c1 = 3;
                      obj = { value: closure_1.send(release), done: true };
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
          const tmp4Result = tmp4(12851);
        }
        tmp4 = require;
      }
    }
    closure_4 = async function _send(envelope) {
      c2 = 0;
      c1 = 0;
      return (async (arg0, value) => {
        const mapped = v3({
          envelope,
          getEvent(arg0) {
            let items = arg0;
            if (!arg0) {
              items = ["event"];
            }
            dependencyMap(12841).forEachEnvelopeItem(dependencyMap, () => { ... });
            return dependencyMap2;
          }
        }).map((dsn) => {
          if (typeof dsn === "string") {
            let tmp2 = closure_1_3(dsn, undefined);
          } else {
            tmp2 = closure_1_3(dsn.dsn, dsn.release);
          }
          return tmp2;
        });
        const found = mapped.filter((item) => item);
        let arr3 = found;
        if (!found.length) {
          let items = ["", closure_2_1];
          const items1 = [items];
          arr3 = items1;
        }
        await Promise.all(arr3.map((item) => {
          [tmp, obj] = item;
          const first = 5;
          if (tmp) {
            obj = {};
            const merged = Object.assign(first);
            obj.dsn = tmp;
            let tmp4 = obj;
          } else {
            tmp4 = first;
          }
          return obj.send(dependencyMap(12841).createEnvelope(tmp4, 12841));
        }));
        return value[0];
      })();
    };
    closure_5 = async function _flush() {
      closure_2 = tmp2;
      closure_130_0 = closure_0;
      closure_1 = 0;
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(map.values(), closure_1);
      closure_1 = arraySpreadResult;
      items[arraySpreadResult] = closure_2_1;
      closure_1 = closure_1 + 1;
      await Promise.all(items.map((flush) => flush.flush(closure_1_0)));
      return arg1.every((item) => item);
    };
    closure_1 = tunnel(arg0);
    const map = new Map();
    return {
      send(arg0) {
        const self = this;
        const apply = closure_4.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      },
      flush(arg0) {
        const self = this;
        const apply = closure_5.apply;
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