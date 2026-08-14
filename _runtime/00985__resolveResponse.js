// _runtime/00985__resolveResponse.js
import _slicedToArray from "_slicedToArray";
import asyncGeneratorStep from "module_821";
import { isInstanceOf } from "00827_isInstanceOf.js";
import { addHandler } from "00850_addHandler.js";

function _resolveResponse() {
  const self = this;
  const tmp = asyncGeneratorStep((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c6 = 0;
    let c5 = 0;
    return (function*(arg0, done) {
      if (done === 2) {
        done = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw done;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = done;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          done = 2;
          if (0 === timeout) {
            if (arg0 === 1) {
              done = 3;
              throw done;
            } else if (arg0 === 2) {
              done = 3;
              obj = { value: null, done: true };
              obj[0] = done;
              return obj;
            } else {
              let reader = tmp7;
              const callback = body;
              body = undefined;
              reader = undefined;
              timeout = undefined;
              let c4;
              let timeout2;
              done = undefined;
              body = undefined;
              if (callback != null) {
                body = tmp50.body;
              }
              if (!body) {
                done = 3;
                return { value: "HermesInternal", done: null };
              } else {
                body = tmp50.body;
                reader = body.getReader();
                const _setTimeout = setTimeout;
                timeout = setTimeout(() => {
                  body.cancel().then(null, () => {

                  });
                }, 90000);
                c4 = true;
                if (c4) {
                  timeout2 = undefined;
                  timeout2 = 2;
                  const _setTimeout2 = setTimeout;
                  timeout2 = setTimeout(() => {
                    body.cancel().then(null, () => {

                    });
                  }, 5000);
                  timeout = 3;
                  done = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = reader.read();
                  return obj1;
                } else {
                  const _clearTimeout5 = clearTimeout;
                  clearTimeout(timeout);
                  reader.releaseLock();
                  body.cancel().then(null, () => {

                  });
                  const cancelResult = body.cancel();
                }
              }
            }
          } else if (1 !== tmp7) {
            if (2 === tmp7) {
              timeout2 = 1;
              c4 = false;
            } else if (arg0 === 1) {
              done = 3;
              throw done;
            } else if (arg0 === 2) {
              timeout2 = 0;
              const _clearTimeout2 = clearTimeout;
              clearTimeout(timeout2);
              done = 3;
              obj = { value: null, done: true };
              obj[0] = done;
              return obj;
            } else {
              done = done.done;
              const _clearTimeout = clearTimeout;
              clearTimeout(timeout2);
              if (done) {
                callback();
                c4 = false;
              }
              timeout2 = 1;
            }
            timeout2 = 0;
            const _clearTimeout3 = clearTimeout;
            clearTimeout(timeout2);
          }
          timeout2 = 0;
          const _clearTimeout4 = clearTimeout;
          clearTimeout(timeout2);
          throw c4;
        } catch (tmp40) {
          c4 = tmp40;
          if (tmp4 === timeout2) {
            done = tmp3;
            throw tmp40;
          } else if (tmp2 === tmp42) {
            timeout = tmp2;
          } else {
            timeout = tmp;
          }
        }
      }
    })();
  });
  const _resolveResponse = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function streamHandler(clone) {
  let closure_0 = clone;
  try {
    !(function resolveResponse(arg0, arg1) {
      const self = this;
      const apply = closure_4.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(clone.clone(), () => {
      let obj = clone(outer1_1[2]);
      obj = { endTimestamp: null, response: null };
      obj[0] = 1000 * clone(outer1_1[6]).timestampInSeconds();
      obj[1] = clone;
      obj.triggerHandlers("fetch-body-resolved", obj);
    });
  } catch (err) {
    return tmp;
  }
}
function parseFetchArgs(arg0) {
  let str4;
  let tmp8;
  if (0 === arg0.length) {
    return { method: "GET", url: "" };
  } else if (2 === arg0.length) {
    [str4, tmp8] = _slicedToArray(arg0, 2);
    let tmp9 = str4;
    if (typeof str4 !== "string") {
      let str5 = "";
      if (!str4) {
        tmp9 = str5;
      } else {
        if (tmp10) {
          str5 = str4.url;
        } else if (str4.toString) {
          str5 = str4.toString();
        }
        tmp10 = str4 && typeof str4 === "object" && str4.url;
      }
    }
    let obj = { url: null, method: null };
    obj[0] = tmp9;
    if (tmp12) {
      const _String3 = String;
      let str7 = String(tmp8.method).toUpperCase();
      const str9 = String(tmp8.method);
    } else {
      str7 = "GET";
      if (obj3.isRequest(str4)) {
        str7 = "GET";
        if (tmp15) {
          const _String2 = String;
          str7 = String(str4.method).toUpperCase();
          const str8 = String(str4.method);
        }
        tmp15 = str4 && typeof str4 === "object" && str4.method;
      }
      obj3 = isInstanceOf;
    }
    obj[1] = str7;
    return obj;
  } else {
    let tmp3 = str10;
    if (typeof arg0[0] !== "string") {
      let str = "";
      if (!str10) {
        tmp3 = str;
      } else {
        if (tmp) {
          str = str10.url;
        } else if (str10.toString) {
          str = str10.toString();
        }
        tmp = str10 && typeof str10 === "object" && str10.url;
      }
    }
    obj = { url: null, method: null };
    obj[0] = tmp3;
    let str2 = "GET";
    if (tmp4) {
      const _String = String;
      str2 = String(str10.method).toUpperCase();
      const str3 = String(str10.method);
    }
    obj[1] = str2;
    return obj;
  }
}
function getHeadersFromFetchArgs(arg0) {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = _slicedToArray(arg0, 2);
  try {
    if (typeof tmp3 === "object") {
      if (null !== tmp3) {
        if ("headers" in tmp3) {
          if (tmp3.headers) {
            const _Headers2 = Headers;
            const headers = new Headers(tmp3.headers);
            return headers;
          }
        }
      }
    }
    if (obj.isRequest(tmp2)) {
      const _Headers = Headers;
      const headers1 = new Headers(tmp2.headers);
      return headers1;
    }
    obj = isInstanceOf;
  } catch (err) {
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addFetchEndInstrumentationHandler = function addFetchEndInstrumentationHandler(arg0) {
  addHandler.addHandler("fetch-body-resolved", arg0);
  let obj = addHandler;
  addHandler.maybeInstrument("fetch-body-resolved", () => {
    const callback = closure_5;
    {
      callback(822).fill(callback(821).GLOBAL_OBJ, "fetch", (arg0) => {
        let closure_0 = arg0;
        return () => {
          const items = [...arguments];
          let callback;
          let obj;
          const error = new Error();
          callback = error;
          const request = outer2_6(items);
          obj = { args: items, fetchData: obj, startTimestamp: null, virtualError: null, headers: null };
          obj = { method: request.method, url: request.url };
          obj[2] = 1000 * outer2_0(outer2_1[6]).timestampInSeconds();
          obj[3] = error;
          obj[4] = outer2_7(items);
          if (!callback) {
            obj = {};
            let merged = Object.assign(obj);
            tmp2(tmp3[2]).triggerHandlers("fetch", obj);
            const tmp2Result = tmp2(tmp3[2]);
          }
          let obj3 = outer2_0(outer2_1[6]);
          callback = undefined;
          callback = outer2_3((arg0) => {
            let closure_0 = arg0;
            let c1 = 0;
            return (/* F120320 */ function*() { ... })();
          });
          return callback.apply(outer2_0(outer2_1[5]).GLOBAL_OBJ, items).then(function(arg0) {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }, (error) => {
            let obj = lib(outer2_1[2]);
            obj = {};
            const merged = Object.assign(obj);
            obj.endTimestamp = 1000 * lib(outer2_1[6]).timestampInSeconds();
            obj.error = error;
            obj.triggerHandlers("fetch", obj);
            const obj3 = lib(outer2_1[6]);
            const tmp3 = obj;
            const obj4 = lib(outer2_1[7]);
            if (tmp6) {
              error.stack = lib.stack;
              let tmpResult = tmp(tmp2[4]);
              const result = tmpResult.addNonEnumerableProperty(error, "framesToPop", 1);
            }
            tmpResult = tmp(tmp2[8]);
            const client = tmpResult.getClient();
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
                  const uRL = new URL(tmp3.fetchData.url);
                  const host = uRL.host;
                  if ("always" === str2) {
                    const _HermesInternal = HermesInternal;
                    error.message = "" + error.message + " (" + host + ")";
                  } else {
                    const result1 = tmp(tmp2[4]).addNonEnumerableProperty(error, "__sentry_fetch_url_host__", host);
                    const tmpResult1 = tmp(tmp2[4]);
                  }
                } catch (err) {
                }
              }
            }
            throw error;
          });
        };
      });
      const obj = callback(822);
    }
  });
};
export const addFetchInstrumentationHandler = function addFetchInstrumentationHandler(arg0, arg1) {
  const _require = arg1;
  _addHandler.addHandler("fetch", arg0);
  let obj = _addHandler;
  _addHandler.maybeInstrument("fetch", () => {
    let flag = callback;
    if (callback === undefined) {
      flag = false;
    }
    if (flag) {
      flag = !callback(outer1_1[3]).supportsNativeFetch();
      let obj = callback(outer1_1[3]);
    }
    if (!flag) {
      callback(outer1_1[4]).fill(callback(outer1_1[5]).GLOBAL_OBJ, "fetch", (arg0) => {
        let closure_0 = arg0;
        return () => {
          const items = [...arguments];
          let callback;
          let obj;
          const error = new Error();
          callback = error;
          const request = outer2_6(items);
          obj = { args: items, fetchData: obj, startTimestamp: null, virtualError: null, headers: null };
          obj = { method: request.method, url: request.url };
          obj[2] = 1000 * outer2_0(outer2_1[6]).timestampInSeconds();
          obj[3] = error;
          obj[4] = outer2_7(items);
          if (!callback) {
            obj = {};
            let merged = Object.assign(obj);
            tmp2(tmp3[2]).triggerHandlers("fetch", obj);
            const tmp2Result = tmp2(tmp3[2]);
          }
          let obj3 = outer2_0(outer2_1[6]);
          callback = undefined;
          callback = outer2_3((arg0) => {
            let closure_0 = arg0;
            let c1 = 0;
            return (/* F120320 */ function*() { ... })();
          });
          return callback.apply(outer2_0(outer2_1[5]).GLOBAL_OBJ, items).then(function(arg0) {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }, (error) => {
            let obj = lib(outer2_1[2]);
            obj = {};
            const merged = Object.assign(obj);
            obj.endTimestamp = 1000 * lib(outer2_1[6]).timestampInSeconds();
            obj.error = error;
            obj.triggerHandlers("fetch", obj);
            const obj3 = lib(outer2_1[6]);
            const tmp3 = obj;
            const obj4 = lib(outer2_1[7]);
            if (tmp6) {
              error.stack = lib.stack;
              let tmpResult = tmp(tmp2[4]);
              const result = tmpResult.addNonEnumerableProperty(error, "framesToPop", 1);
            }
            tmpResult = tmp(tmp2[8]);
            const client = tmpResult.getClient();
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
                  const uRL = new URL(tmp3.fetchData.url);
                  const host = uRL.host;
                  if ("always" === str2) {
                    const _HermesInternal = HermesInternal;
                    error.message = "" + error.message + " (" + host + ")";
                  } else {
                    const result1 = tmp(tmp2[4]).addNonEnumerableProperty(error, "__sentry_fetch_url_host__", host);
                    const tmpResult1 = tmp(tmp2[4]);
                  }
                } catch (err) {
                }
              }
            }
            throw error;
          });
        };
      });
      const obj2 = callback(outer1_1[4]);
    }
  });
};
export { parseFetchArgs };