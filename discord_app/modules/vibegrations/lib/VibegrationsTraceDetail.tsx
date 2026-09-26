// === Module 16415: VibegrationsTraceDetail ===

// Module 16415 (VibegrationsTraceDetail)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_7 = async function _fetchTraceDetail(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp2;
          closure_3 = tmp3;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = closure_2;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          closure_131_3 = hasOwnProperty;
          value = map.get(closure_1);
          if (null != value) {
            let obj4 = { status: "loaded", rich: value };
            c6 = 3;
            let obj5 = { value: obj4, done: true };
            return obj5;
          } else {
            let _Date = Date;
            if (Date.now() < timestampProducer) {
              c6 = 3;
              let obj6 = { value: { status: "forbidden" }, done: true };
              return obj6;
            } else {
              value2 = map1.get(closure_1);
              if (null != value2) {
                c6 = 3;
                let obj7 = { value: value2, done: true };
                return obj7;
              } else {
                const tmp20 = asyncGeneratorStep(async () => {
                  if (c4 === 2) {
                    c4 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp6 === 3) {
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
                      c4 = 2;
                      if (0 === c3) {
                        if (arg0 === 1) {
                          c4 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c4 = 3;
                          const obj3 = { value, done: true };
                          return obj3;
                        } else {
                          closure_0 = tmp7;
                          closure_128_0 = undefined;
                          let ticket;
                          let baseUrl;
                          closure_128_3 = undefined;
                          closure_128_4 = undefined;
                          c2 = 1;
                          c3 = 2;
                          c4 = 1;
                          const obj4 = { value: closure_0(tmp3[1]).mintWorkerTicket(closure_2_0), done: false };
                          return obj4;
                        }
                      } else if (1 === tmp7) {
                        c2 = 0;
                        c4 = 3;
                        const obj5 = { value: { status: "failed" }, done: true };
                        return obj5;
                      } else if (2 === tmp7) {
                        if (arg0 === 1) {
                          c4 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 0;
                          c4 = 3;
                          const obj6 = { value, done: true };
                          return obj6;
                        } else {
                          closure_128_0 = value;
                          ticket = closure_128_0.ticket;
                          baseUrl = closure_128_0.baseUrl;
                          const _fetch = fetch;
                          c3 = 3;
                          c4 = 1;
                          const obj7 = {
                            value: fetch((function detailUrl(baseUrl, ticket, arg2) {
                                      const str = new URL("" + baseUrl + "/agent/trace-detail");
                                      const searchParams = str.searchParams;
                                      const result = searchParams.set("ticket", ticket);
                                      const searchParams2 = str.searchParams;
                                      const result1 = searchParams2.set("id", arg2);
                                      return str.toString();
                                    })(baseUrl, ticket, closure_129_1), { method: "GET", credentials: "omit" }),
                            done: false
                          };
                          return obj7;
                        }
                      } else if (3 === tmp7) {
                        if (arg0 === 1) {
                          c4 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 0;
                          c4 = 3;
                          const obj8 = { value, done: true };
                          return obj8;
                        } else {
                          closure_128_3 = value;
                          if (403 === closure_128_3.status) {
                            const _Date = Date;
                            closure_6 = Date.now() + 60000;
                            c2 = 0;
                            c4 = 3;
                            const obj9 = { value: { status: "forbidden" }, done: true };
                            return obj9;
                          } else if (closure_128_3.ok) {
                            c3 = 4;
                            c4 = 1;
                            const obj10 = { value: closure_128_3.json(), done: false };
                            return obj10;
                          } else {
                            c2 = 0;
                            c4 = 3;
                            const obj12 = { value: { status: "failed" }, done: true };
                            return obj12;
                          }
                        }
                      } else if (arg0 === 1) {
                        c4 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c2 = 0;
                        c4 = 3;
                        const obj13 = { value, done: true };
                        return obj13;
                      } else {
                        closure_128_4 = value;
                        if (true === closure_128_4.available) {
                          if (null != closure_128_4.rich) {
                            if (closure_129_3 === closure_1_5) {
                              (function cacheDetail(arg0, rich) {
                                const result = map.set(arg0, rich);
                                if (map.size > 100) {
                                  const iter2 = map.keys().next();
                                  while (true !== iter2.done) {
                                    let deleteResult = map.delete(iter2.value);
                                    if (map.size <= 100) {
                                      break;
                                    }
                                  }
                                  const iter = map.keys();
                                }
                              })(closure_129_1, closure_128_4.rich);
                              { status: "loaded", rich: null }[1] = closure_128_4.rich;
                            }
                          }
                          c2 = 0;
                          c4 = 3;
                        }
                      }
                    } catch (tmp33) {
                      if (tmp4 === c2) {
                        c4 = tmp2;
                        throw tmp33;
                      } else {
                        c3 = tmp;
                      }
                    }
                  }
                })();
                closure_131_4 = tmp20;
                let result = map1.set(closure_1, tmp20);
                c5 = 1;
                c6 = 1;
                let obj8 = { value: tmp20, done: false };
                return obj8;
              }
            }
          }
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        let obj9 = { value, done: true };
        return obj9;
      } else {
        closure_131_5 = value;
        if (closure_132_4.get(closure_131_1) === closure_131_4) {
          closure_132_4.delete(closure_131_1);
        }
        let aborted;
        if (closure_131_2 != null) {
          aborted = closure_131_2.aborted;
        }
        c6 = 3;
      }
    } catch (tmp23) {
      c6 = tmp;
      throw tmp23;
    }
  }
};
const map = new Map();
const map1 = new Map();
let closure_5 = 0;
let c6 = 0;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsTraceDetail.tsx");

export const cachedTraceDetail = function cachedTraceDetail(detailId) {
  return map.get(detailId);
};
export const fetchTraceDetail = function fetchTraceDetail() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const clearTraceDetailCache = function clearTraceDetailCache() {
  closure_5 = closure_5 + 1;
  map.clear();
  map1.clear();
  c6 = 0;
};