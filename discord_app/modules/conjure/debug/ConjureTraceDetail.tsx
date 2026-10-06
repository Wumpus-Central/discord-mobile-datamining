// === Module 16785: ConjureTraceDetail ===

// Module 16785 (ConjureTraceDetail)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c3, c4, closure_4;

let value = function _fetchTraceDetail() {
  const obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_3;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let aborted = arg2;
    let c5 = 0;
    c6 = 0;
    return (async (arg0, value, arg2) => {
      if (arg0 === 1) {
        throw value;
      }
      if (arg0 === 2) {
        return value;
      }
      closure_4 = tmp;
      value = map.get(closure_1);
      if (null != value) {
        let obj4 = { status: "loaded", rich: value };
        return obj4;
      }
      let _Date = Date;
      if (Date.now() < closure_2_6) {
        return { status: "forbidden" };
      }
      const value2 = map1.get(closure_1);
      if (null != value2) {
        return value2;
      }
      const tmp18 = (async () => {
        let obj11;
        function detailUrl(baseUrl, ticket, arg2) {
          const str = new URL("" + baseUrl + "/agent/trace-detail");
          const searchParams = str.searchParams;
          const result = searchParams.set("ticket", ticket);
          const searchParams2 = str.searchParams;
          const result1 = searchParams2.set("id", arg2);
          return str.toString();
        }
        function cacheDetail(arg0, rich) {
          const result = map.set(arg0, rich);
          if (map.size > 100) {
            const iter = map.keys();
            const iter2 = iter.next();
            while (true !== iter2.done) {
              let deleteResult = map.delete(iter2.value);
              if (map.size <= 100) {
                break;
              }
            }
          }
        }
        if (c4 === 2) {
          c4 = 3;
          let str = "Generator functions may not be called on executing generators";
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c2;
          try {
            let ticket;
            let baseUrl;
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
                closure_1 = tmp;
                closure_0 = undefined;
                ticket = undefined;
                baseUrl = undefined;
                map = undefined;
                closure_4 = undefined;
                c2 = 1;
                c3 = 2;
                c4 = 1;
                const obj4 = { value: obj11.mintWorkerTicket(closure_2_0), done: false };
                obj11 = closure_0(closure_1[1]);
                return obj4;
              }
            } else if (1 === c3) {
              c2 = 0;
              c4 = 3;
              const obj5 = { value: { status: "failed" }, done: true };
              return obj5;
            } else if (2 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                c4 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_0 = value;
                ticket = closure_0.ticket;
                baseUrl = closure_0.baseUrl;
                const _fetch = fetch;
                c3 = 3;
                c4 = 1;
                const obj7 = { value: fetch(detailUrl(baseUrl, ticket, closure_129_1), { method: "GET", credentials: "omit" }), done: false };
                return obj7;
              }
            } else if (3 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                c4 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                map = value;
                if (403 === map.status) {
                  const _Date = Date;
                  let closure_6 = Date.now() + 60000;
                  c2 = 0;
                  c4 = 3;
                  const obj9 = { value: { status: "forbidden" }, done: true };
                  return obj9;
                } else if (map.ok) {
                  c3 = 4;
                  c4 = 1;
                  const obj10 = { value: map.json(), done: false };
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
              closure_4 = value;
              if (true === closure_4.available) {
                if (null != closure_4.rich) {
                  if (closure_129_3 !== closure_1_5) {
                    value = { status: "failed" };
                  } else {
                    cacheDetail(closure_129_1, closure_4.rich);
                    value = { status: "loaded", rich: closure_4.rich };
                  }
                }
                c2 = 0;
                c4 = 3;
                const obj14 = { value, done: true };
                return obj14;
              }
              value = { status: "unavailable" };
            }
          } catch (tmp30) {
            if (0 === c2) {
              c4 = 3;
              throw tmp30;
            } else {
              c3 = 1;
            }
          }
        }
      })();
      closure_4 = tmp18;
      let result = map1.set(closure_1, tmp18);
      await tmp18;
      if (arg0 === 1) {
        throw value;
      }
      if (arg0 === 2) {
        return value;
      }
      closure_5 = value;
      if (closure_132_4.get(closure_1) === closure_4) {
        let deleteResult = closure_132_4.delete(closure_1);
      }
      if (aborted != null) {
        aborted = aborted.aborted;
      }
      if (true === aborted) {
        value = { status: "failed" };
      } else {
        value = closure_5;
      }
      return value;
    })();
  });
  return obj(...arguments);
};
let map = new Map();
const map1 = new Map();
let closure_5 = 0;
let c6 = 0;
let result = size.fileFinishedImporting("modules/conjure/debug/ConjureTraceDetail.tsx");

export const cachedTraceDetail = function cachedTraceDetail(detailId) {
  return map.get(detailId);
};
export const fetchTraceDetail = function fetchTraceDetail() {
  return obj(...arguments);
};
export const clearTraceDetailCache = function clearTraceDetailCache() {
  closure_5 = closure_5 + 1;
  map.clear();
  map1.clear();
  c6 = 0;
};