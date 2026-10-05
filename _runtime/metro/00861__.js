// === Module 861: ? ===

// Module 861
import _mod697 from "module_697" /* 697 */;
import _mod698 from "module_698" /* 698 */;
import _mod703 from "module_703" /* 703 */;
import browserPerformanceTimeOrigin from "browserPerformanceTimeOrigin" /* 714 */;
import _mod726 from "module_726" /* 726 */;
import _mod862 from "module_862" /* 862 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

const require = globalThis.__r;
let _require, c1, c3, c6, closure_4;

const f82077 = (arg0) => {
  closure_0 = arg0;
  return () => {
    let obj2;
    const items = [...arguments];
    const error = new Error();
    const request = closure_3_6(items);
    obj = { args: items, fetchData: { method: request.method, url: request.url }, startTimestamp: 1000 * obj2.timestampInSeconds(), virtualError: error, headers: closure_3_7(items) };
    obj2 = closure_3_0(closure_3_1[6]);
    if (!closure_2_0) {
      let obj3 = {};
      let tmp7 = obj;
      let triggerHandlers = closure_3_0(closure_3_1[2]).triggerHandlers;
      closure_3_0(closure_3_1[2]);
      let merged = Object.assign(obj);
      triggerHandlers("fetch", obj3);
    }
    const applyResult = closure_0.apply(closure_3_0(closure_3_1[5]).GLOBAL_OBJ, items);
    const then = applyResult.then;
    closure_0 = closure_3_3(function*(arg0) {
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
    return then(function(arg0) {
      return closure_0(...arguments);
    }, function(error) {
      let obj2;
      obj = { endTimestamp: 1000 * obj2.timestampInSeconds(), error };
      const triggerHandlers = error(closure_3_1[2]).triggerHandlers;
      const merged = Object.assign(obj);
      obj2 = error(closure_3_1[6]);
      triggerHandlers("fetch", obj);
      const obj3 = error(closure_3_1[7]);
      const tmp4 = obj;
      const tmp7 = obj3.isError(error) && undefined === error.stack;
      if (tmp7) {
        error.stack = error.stack;
        const tmpResult = error(closure_3_1[4]);
        const result = tmpResult.addNonEnumerableProperty(error, "framesToPop", 1);
      }
      const tmpResult3 = error(closure_3_1[8]);
      const client = tmpResult3.getClient();
      let str2;
      if (client != null) {
        str2 = client.getOptions().enhanceFetchErrorMessages;
      }
      if (str2 == null) {
        str2 = "always";
      }
      if (false !== str2) {
        const _TypeError = TypeError;
        if (error instanceof TypeError) {
          try {
            const _URL = URL;
            const self = this;
            const self2 = this;
            const uRL = new URL(tmp4.fetchData.url);
            const host = uRL.host;
            if ("always" === str2) {
              const _HermesInternal = HermesInternal;
              error.message = "" + error.message + " (" + host + ")";
            } else {
              const tmpResult4 = error(closure_3_1[4]);
              const result1 = tmpResult4.addNonEnumerableProperty(error, "__sentry_fetch_url_host__", host);
            }
          } catch (err) {
          }
        }
      }
      throw error;
    });
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
            let body1;
            if (closure_0 != null) {
              body1 = tmp44.body;
            }
            if (body1) {
              body = tmp44.body;
              reader = body.getReader();
              const _setTimeout = setTimeout;
              timeout = setTimeout(() => {
                const cancelResult = closure_1_1.cancel();
                cancelResult.then(null, () => {

                });
              }, 90000);
              c4 = true;
              const tmp26 = c4;
              if (!tmp26) {
                const _clearTimeout5 = clearTimeout;
                clearTimeout(timeout);
                reader.releaseLock();
                let cancelResult = body.cancel();
                const nextPromise = cancelResult.then(null, () => {

                });
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
          cancelResult.then(null, () => {

          });
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
      const triggerHandlers = _mod726.triggerHandlers;
      obj2 = browserPerformanceTimeOrigin;
      triggerHandlers("fetch-body-resolved", obj);
    });
  } catch (err) {
  }
}
function parseFetchArgs(arg0) {
  let str3;
  let str5;
  let str9;
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
    const request = { url: tmp8, method: str9 };
    const tmp10 = tmp7 && typeof tmp7 === "object" && tmp7.method;
    if (tmp10) {
      const _String3 = String;
      const str11 = String(tmp7.method);
      str9 = str11.toUpperCase();
    } else {
      str9 = "GET";
      const obj3 = _mod703;
      if (obj3.isRequest(str5)) {
        str9 = "GET";
        const tmp13 = str5 && typeof str5 === "object" && str5.method;
        if (tmp13) {
          const _String2 = String;
          const str10 = String(str5.method);
          str9 = str10.toUpperCase();
        }
      }
    }
    return request;
  } else {
    let tmp2 = str12;
    if (typeof arg0[0] !== "string") {
      let str = "";
      let str2 = "";
      if (arg0[0]) {
        const tmp = arg0[0] && typeof arg0[0] === "object" && arg0[0].url;
        if (tmp) {
          str = str12.url;
        } else if (arg0[0].toString) {
          str = str12.toString();
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
function getHeadersFromFetchArgs(arg0) {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = arg0;
  _slicedToArray(arg0, 2);
  try {
    if (typeof tmp3 === "object") {
      if (null !== tmp3) {
        if ("headers" in tmp3) {
          if (tmp3.headers) {
            const _Headers2 = Headers;
            const self3 = this;
            const self4 = this;
            const headers = new Headers(tmp3.headers);
            return headers;
          }
        }
      }
    }
    obj = _mod703;
    if (obj.isRequest(tmp2)) {
      const _Headers = Headers;
      const self = this;
      const self2 = this;
      const headers1 = new Headers(tmp2.headers);
      return headers1;
    }
  } catch (err) {
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addFetchEndInstrumentationHandler = function addFetchEndInstrumentationHandler(errorCallback) {
  obj = _mod726;
  obj.addHandler("fetch-body-resolved", errorCallback);
  const obj2 = _mod726;
  obj2.maybeInstrument("fetch-body-resolved", () => {
    let closure_0 = closure_5;
    {
      obj = closure_0(closure_1[4]);
      obj.fill(closure_0(closure_1[5]).GLOBAL_OBJ, "fetch", f82077);
    }
  });
};
export const addFetchInstrumentationHandler = function addFetchInstrumentationHandler(errorCallback, arg1) {
  _require = arg1;
  obj = require("module_726");
  obj.addHandler("fetch", errorCallback);
  let obj2 = require("module_726");
  obj2.maybeInstrument("fetch", () => {
    let flag = closure_0;
    if (closure_0 === undefined) {
      flag = false;
    }
    if (flag) {
      obj = _mod862;
      flag = !obj.supportsNativeFetch();
    }
    if (!flag) {
      let obj2 = _mod698;
      const str = "fetch";
      obj2.fill(_mod697.GLOBAL_OBJ, "fetch", f82077);
    }
  });
};
export { parseFetchArgs };