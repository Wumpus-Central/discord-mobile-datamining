// === Module 12632: eventFromEnvelope ===

// Module 12632 (eventFromEnvelope)
import _mod12609 from "module_12609" /* 12609 */;
import _mod12612 from "module_12612" /* 12612 */;
import _mod12619 from "module_12619" /* 12619 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let map;

function eventFromEnvelope(arg0, arg1) {
  let closure_0 = arg1;
  const obj = _mod12609;
  obj.forEachEnvelopeItem(arg0, (arg0, arg1) => {
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
  return closure_129_1;
}

export { eventFromEnvelope };
export function makeMultiplexedTransport(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0) => {
    let tunnel = arg0;
    function getTransport(arg0, arg1) {
      let combined = arg0;
      if (arg1) {
        const tmp2 = globalThis;
        const _HermesInternal = HermesInternal;
        combined = "" + arg0 + ":" + arg1;
      }
      let value = map.get(combined);
      if (!value) {
        const obj2 = _mod12612;
        const dsnFromStringResult = obj2.dsnFromString(arg0);
        if (dsnFromStringResult) {
          let tmp9Result2;
          const tmp4Result = _mod12619;
          const envelopeEndpointWithUrlEncodedAuth = tmp4Result.getEnvelopeEndpointWithUrlEncodedAuth(dsnFromStringResult, tunnel.tunnel);
          const obj3 = {};
          if (arg1) {
            const merged = Object.assign(tmp7);
            obj3.url = envelopeEndpointWithUrlEncodedAuth;
            tunnel = undefined;
            const tmp9Result = tunnel(obj3);
            closure_1 = tmp9Result;
            const obj4 = {
              send(arg0) {
                      return closure_0(...arguments);
                    }
            };
            const merged1 = Object.assign(tmp9Result);
            tunnel = _asyncToGenerator(async (release) => {
              let c1 = 0;
              return (async (arg0) => {
                if (c1 === 2) {
                  c1 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp2 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    return { value, done: true };
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  try {
                    c1 = 2;
                    if (arg0 === 1) {
                      c1 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c1 = 3;
                      return { value, done: true };
                    } else {
                      const tmp5 = closure_2_3(release, ["event", "transaction", "profile", "replay_event"]);
                      if (tmp5) {
                        tmp5.release = release;
                      }
                      c1 = 3;
                      obj = { value: closure_1.send(release), done: true };
                      return obj;
                    }
                  } catch (tmp8) {
                    c1 = 3;
                    throw tmp8;
                  }
                }
              })();
            });
            tmp9Result2 = obj4;
          } else {
            const merged2 = Object.assign(tmp7);
            obj3.url = envelopeEndpointWithUrlEncodedAuth;
            tmp9Result2 = tmp9(obj3);
          }
          const result = map.set(combined, tmp9Result2);
          value = tmp9Result2;
        }
      }
      const items = [arg0, value];
      return items;
    }
    let obj = function _send() {
      obj = _asyncToGenerator(async (envelope) => {
        let v3;
        let c2 = 0;
        let c1 = 0;
        return (async (arg0) => {
          const obj4 = {
            envelope,
            getEvent(arg0) {
              const items = arg0 || ["event"];
              obj = tunnel(closure_4_1[1]);
              obj.forEachEnvelopeItem(closure_0, (arg0, arg1) => {
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
              return closure_1;
            }
          };
          const arr4 = v3(obj4);
          const mapped = arr4.map((dsn) => {
            let tmp2;
            if (typeof dsn === "string") {
              tmp2 = closure_1_3(dsn, undefined);
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
            let tmp;
            let tmp2;
            let tmp6;
            [tmp, tmp2] = item;
            const send = tmp2.send;
            const first = closure_0[0];
            const createEnvelope = tunnel(closure_4_1[1]).createEnvelope;
            tunnel(closure_4_1[1]);
            if (tmp) {
              obj = { dsn: tmp };
              const merged = Object.assign(first);
              tmp6 = obj;
            } else {
              tmp6 = first;
            }
            return send(createEnvelope(tmp6, closure_0[1]));
          }));
          return value[0];
        })();
      });
      return obj(...arguments);
    };
    obj = function _flush() {
      obj = _asyncToGenerator(async (arg0) => {
        let c3;
        let c4;
        let closure_2;
        closure_1 = 0;
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items, map.values(), closure_1);
        closure_1 = arraySpreadResult;
        items[arraySpreadResult] = closure_2_1;
        closure_1 = closure_1 + 1;
        await Promise.all(items.map((flush) => flush.flush(closure_1_0)));
        return value.every((item) => item);
      });
      return obj(...arguments);
    };
    closure_1 = tunnel(arg0);
    map = new Map();
    obj = {
      send(arg0) {
        return obj(...arguments);
      },
      flush(arg0) {
        return obj(...arguments);
      }
    };
    return obj;
  };
}