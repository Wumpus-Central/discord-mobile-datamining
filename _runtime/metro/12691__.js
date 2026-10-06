// _runtime/metro/12691__.js
import _mod12578 from "12578__.js";
import _mod12581 from "12581__.js";
import _mod12586 from "12586__.js";
import _browserPerformanceTimeOriginMode from "../12594__browserPerformanceTimeOriginMode.js";
import _mod12692 from "12692__.js";
import _slicedToArray from "00032__slicedToArray.js";
import _asyncToGenerator from "00005__asyncToGenerator.js";

const require = globalThis.__r;
let _require, c1, c3, c6, closure_4;

const f112770 = (arg0) => {
  closure_0 = arg0;
  return () => {
    let obj2;
    const items = [...arguments];
    const error = new Error();
    const request = closure_3_6(items);
    obj = {
      args: items,
      fetchData: { method: request.method, url: request.url },
      startTimestamp: 1000 * obj2.timestampInSeconds(),
      virtualError: error,
    };
    obj2 = closure_3_0(closure_3_1[6]);
    if (!closure_2_0) {
      let obj3 = {};
      let tmp6 = obj3;
      let triggerHandlers = closure_3_0(closure_3_1[2]).triggerHandlers;
      closure_3_0(closure_3_1[2]);
      let merged = Object.assign(obj);
      triggerHandlers("fetch", obj3);
    }
    const applyResult = closure_0.apply(closure_3_0(closure_3_1[5]).GLOBAL_OBJ, items);
    const then = applyResult.then;
    closure_0 = closure_3_3(function* (arg0) {
      let obj2;
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            if (value) {
              tmp16(value);
            } else {
              obj = { endTimestamp: 1000 * obj2.timestampInSeconds(), response: value };
              const triggerHandlers = closure_3_0(closure_3_1[2]).triggerHandlers;
              const merged = Object.assign(c1);
              obj2 = closure_3_0(closure_3_1[6]);
              triggerHandlers("fetch", obj);
            }
            c1 = 3;
            const obj5 = { value, done: true };
            return obj5;
          }
        } catch (tmp11) {
          c1 = 3;
          throw tmp11;
        }
      }
    });
    return then(
      function (arg0) {
        return closure_0(...arguments);
      },
      (error) => {
        let obj2;
        obj = { endTimestamp: 1000 * obj2.timestampInSeconds(), error };
        const triggerHandlers = error(closure_3_1[2]).triggerHandlers;
        const merged = Object.assign(obj);
        obj2 = error(closure_3_1[6]);
        triggerHandlers("fetch", obj);
        const obj3 = error(closure_3_1[7]);
        const tmp6 = obj3.isError(error) && undefined === error.stack;
        if (tmp6) {
          error.stack = error.stack;
          const tmpResult = error(closure_3_1[4]);
          const result = tmpResult.addNonEnumerableProperty(error, "framesToPop", 1);
        }
        throw error;
      },
    );
  };
};
let obj = function _resolveResponse() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_2;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let reader;
        let timeout2;
        let done;
        let c4;
        c6 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = closure_1;
            let body;
            reader = undefined;
            let timeout;
            c4 = undefined;
            timeout2 = undefined;
            done = undefined;
            if (closure_0) {
              if (closure_0.body) {
                body = tmp44.body;
                reader = body.getReader();
                const _setTimeout = setTimeout;
                timeout = setTimeout(() => {
                  const cancelResult = closure_1_1.cancel();
                  cancelResult.then(null, () => {});
                }, 90000);
                c4 = true;
                const tmp26 = c4;
                if (!tmp26) {
                  const _clearTimeout5 = clearTimeout;
                  clearTimeout(timeout);
                  reader.releaseLock();
                  let cancelResult = body.cancel();
                  const nextPromise = cancelResult.then(null, () => {});
                }
              }
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (1 === c3) {
          c5 = 0;
          const _clearTimeout4 = clearTimeout;
          clearTimeout(timeout2);
          throw closure_4;
        } else {
          if (2 === c3) {
            c5 = 1;
            c4 = false;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            const _clearTimeout2 = clearTimeout;
            clearTimeout(timeout2);
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            done = value.done;
            const _clearTimeout = clearTimeout;
            clearTimeout(timeout2);
            const tmp7 = done;
            if (tmp7) {
              closure_0();
              c4 = false;
            }
            c5 = 1;
          }
          c5 = 0;
          const _clearTimeout3 = clearTimeout;
          clearTimeout(timeout2);
        }
        c5 = 2;
        const _setTimeout2 = setTimeout;
        timeout2 = setTimeout(() => {
          const cancelResult = closure_1_1.cancel();
          cancelResult.then(null, () => {});
        }, 5000);
        c3 = 3;
        c6 = 1;
        const obj4 = { value: reader.read(), done: false };
        return obj4;
      } catch (tmp36) {
        closure_4 = tmp36;
        if (0 === c5) {
          c6 = 3;
          throw tmp36;
        } else if (1 === tmp38) {
          c3 = 1;
        } else {
          c3 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
function streamHandler(clone) {
  function resolveResponse(clone, arg1) {
    return obj(...arguments);
  }
  const response = clone;
  try {
    !resolveResponse(clone.clone(), () => {
      let obj2;
      obj = { endTimestamp: 1000 * obj2.timestampInSeconds(), response };
      const triggerHandlers = _mod12578.triggerHandlers;
      obj2 = _browserPerformanceTimeOriginMode;
      triggerHandlers("fetch-body-resolved", obj);
    });
  } catch (err) {}
}
function parseFetchArgs(arg0) {
  let str3;
  let str5;
  let str8;
  let tmp7;
  if (0 === arg0.length) {
    return { method: "GET", url: "" };
  } else if (2 === arg0.length) {
    [str5, tmp7] = arg0;
    let tmp8 = str5;
    _slicedToArray(arg0, 2);
    if (typeof str5 !== "string") {
      let str6 = "";
      let str7 = "";
      if (str5) {
        const tmp9 = str5 && typeof str5 === "object" && str5.url;
        if (tmp9) {
          str6 = str5.url;
        } else if (str5.toString) {
          str6 = str5.toString();
        }
        str7 = str6;
      }
      tmp8 = str7;
    }
    const request = { url: tmp8, method: str8 };
    str8 = "GET";
    const tmp10 = tmp7 && typeof tmp7 === "object" && tmp7.method;
    if (tmp10) {
      const _String2 = String;
      const str9 = String(tmp7.method);
      str8 = str9.toUpperCase();
    }
    return request;
  } else {
    let tmp2 = str10;
    if (typeof arg0[0] !== "string") {
      let str = "";
      let str2 = "";
      if (arg0[0]) {
        const tmp = arg0[0] && typeof arg0[0] === "object" && arg0[0].url;
        if (tmp) {
          str = str10.url;
        } else if (arg0[0].toString) {
          str = str10.toString();
        }
        str2 = str;
      }
      tmp2 = str2;
    }
    const request1 = { url: tmp2, method: str3 };
    str3 = "GET";
    const tmp3 = arg0[0] && typeof arg0[0] === "object" && arg0[0].method;
    if (tmp3) {
      const _String = String;
      const str4 = String(arg0[0].method);
      str3 = str4.toUpperCase();
    }
    return request1;
  }
}

export const addFetchEndInstrumentationHandler = function addFetchEndInstrumentationHandler(errorCallback) {
  obj = _mod12578;
  obj.addHandler("fetch-body-resolved", errorCallback);
  const obj2 = _mod12578;
  obj2.maybeInstrument("fetch-body-resolved", () => {
    let closure_0 = closure_5;
    {
      obj = closure_0(closure_1[4]);
      obj.fill(closure_0(closure_1[5]).GLOBAL_OBJ, "fetch", f112770);
    }
  });
};
export const addFetchInstrumentationHandler = function addFetchInstrumentationHandler(errorCallback, arg1) {
  _require = arg1;
  obj = require("12578__.js");
  obj.addHandler("fetch", errorCallback);
  let obj2 = require("12578__.js");
  obj2.maybeInstrument("fetch", () => {
    let flag = closure_0;
    if (closure_0 === undefined) {
      flag = false;
    }
    if (flag) {
      obj = _mod12692;
      flag = !obj.supportsNativeFetch();
    }
    if (!flag) {
      let obj2 = _mod12586;
      const str = "fetch";
      obj2.fill(_mod12581.GLOBAL_OBJ, "fetch", f112770);
    }
  });
};
export { parseFetchArgs };
