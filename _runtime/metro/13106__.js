// === Module 13106: ? ===

// Module 13106
import _mod13083 from "module_13083" /* 13083 */;
import _mod13086 from "module_13086" /* 13086 */;
import _mod13093 from "module_13093" /* 13093 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

function eventFromEnvelope(arg0, arg1) {
  closure_0 = arg1;
  _mod13083.forEachEnvelopeItem(arg0, (arg0, arg1) => {
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
      value = map.get(combined);
      if (value) {
        const items = [arg0, value];
        return items;
      } else {
        const dsnFromStringResult = _mod13086.dsnFromString(arg0);
        if (dsnFromStringResult) {
          let merged = tunnel;
          const envelopeEndpointWithUrlEncodedAuth = _mod13093.getEnvelopeEndpointWithUrlEncodedAuth(dsnFromStringResult, tunnel.tunnel);
          let tmp9 = tunnel;
          let obj3 = {};
          if (arg1) {
            merged = Object.assign(merged);
            obj3.url = envelopeEndpointWithUrlEncodedAuth;
            const tmp9Result = tmp9(obj3);
            closure_1 = tmp9Result;
            const obj4 = {};
            const merged1 = Object.assign(tmp9Result);
            tmp9 = asyncGeneratorStep;
            tunnel = asyncGeneratorStep(async (release) => {
              c1 = 0;
              return (async (arg0) => {
                if (c1 === 2) {
                  c1 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
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
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      const tmp6 = getTransport(release, ["event", "transaction", "profile", "replay_event"]);
                      if (tmp6) {
                        tmp6.release = release;
                      }
                      c1 = 3;
                      const obj = { value: closure_1.send(release), done: true };
                      return obj;
                    }
                  } catch (tmp9) {
                    c1 = tmp;
                    throw tmp9;
                  }
                }
              })();
            });
            obj4.send = function send(arg0) {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            let tmp9Result2 = obj4;
          } else {
            const merged2 = Object.assign(merged);
            obj3.url = envelopeEndpointWithUrlEncodedAuth;
            tmp9Result2 = tmp9(obj3);
          }
          obj3 = map.set(combined, tmp9Result2);
          const tmp4Result = _mod13093;
        }
      }
    }
    closure_4 = async function _send() {
      c2 = 0;
      c1 = 0;
      return (async (arg0) => {
        const mapped = v3({
          envelope,
          getEvent(arg0) {
            let items = arg0;
            if (!arg0) {
              items = ["event"];
            }
            dependencyMap(13083).forEachEnvelopeItem(dependencyMap, () => { ... });
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
            const obj3 = {};
            const merged = Object.assign(first);
            obj3.dsn = tmp;
            let tmp4 = obj3;
          } else {
            tmp4 = first;
          }
          return obj.send(dependencyMap(13083).createEnvelope(tmp4, 13083));
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
      return value.every((item) => item);
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