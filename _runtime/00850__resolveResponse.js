// === Module 850: _resolveResponse ===

// Module 850 (_resolveResponse)
import _mod686 from "module_686" /* 686 */;
import _mod687 from "module_687" /* 687 */;
import _mod692 from "module_692" /* 692 */;
import dateTimestampInSeconds from "dateTimestampInSeconds" /* 703 */;
import _mod715 from "module_715" /* 715 */;
import _isFetchSupported from "_isFetchSupported" /* 851 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let closure_4 = async function _resolveResponse(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c6 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp7;
          closure_130_0 = closure_1;
          closure_130_1 = undefined;
          let reader;
          let timeout;
          closure_130_4 = undefined;
          let timeout2;
          let done;
          let body;
          if (_require != null) {
            body = _require.body;
          }
          if (!body) {
            c6 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            body = _require.body;
            closure_130_1 = body;
            reader = body.getReader();
            const _setTimeout = setTimeout;
            timeout = setTimeout(() => {
              closure_1_1.cancel().then(null, () => {

              });
            }, 90000);
            closure_130_4 = true;
            if (closure_130_4) {
              timeout2 = undefined;
              c5 = 2;
              const _setTimeout2 = setTimeout;
              timeout2 = setTimeout(() => {
                closure_1_1.cancel().then(null, () => {

                });
              }, 5000);
              c3 = 3;
              c6 = 1;
              const obj1 = { value: reader.read(), done: false };
              return obj1;
            } else {
              const _clearTimeout5 = clearTimeout;
              clearTimeout(timeout);
              reader.releaseLock();
              closure_130_1.cancel().then(null, () => {

              });
              const cancelResult = closure_130_1.cancel();
            }
          }
        }
      } else if (1 !== tmp7) {
        if (2 === tmp7) {
          c5 = 1;
          closure_130_4 = false;
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
          if (done) {
            closure_130_0();
            closure_130_4 = false;
          }
          c5 = 1;
        }
        c5 = 0;
        const _clearTimeout3 = clearTimeout;
        clearTimeout(timeout2);
      }
      c5 = 0;
      const _clearTimeout4 = clearTimeout;
      clearTimeout(timeout2);
      throw closure_4;
    } catch (tmp40) {
      closure_4 = tmp40;
      if (tmp4 === c5) {
        c6 = tmp3;
        throw tmp40;
      } else if (tmp2 === tmp42) {
        c3 = tmp2;
      } else {
        c3 = tmp;
      }
    }
  }
};
function streamHandler(clone) {
  const response = clone;
  try {
    !(function resolveResponse(clone, arg1) {
      const self = this;
      const apply = closure_1_4.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(clone.clone(), () => {
      const obj = { endTimestamp: 1000 * dateTimestampInSeconds.timestampInSeconds(), response };
      obj.triggerHandlers("fetch-body-resolved", obj);
    });
  } catch (err) {
    return tmp;
  }
}
function parseFetchArgs(arg0) {
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
    const request = { url: tmp9, method: null };
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
      obj3 = _mod692;
    }
    request.method = str7;
    return request;
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
    const request1 = { url: tmp3, method: null };
    let str2 = "GET";
    if (tmp4) {
      const _String = String;
      str2 = String(str10.method).toUpperCase();
      const str3 = String(str10.method);
    }
    request1.method = str2;
    return request1;
  }
}
function getHeadersFromFetchArgs(items) {
  [tmp2, tmp3] = _slicedToArray(items, 2);
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
    obj = _mod692;
  } catch (err) {
  }
  const tmp = _slicedToArray(items, 2);
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addFetchEndInstrumentationHandler = function addFetchEndInstrumentationHandler(errorCallback) {
  _mod715.addHandler("fetch-body-resolved", errorCallback);
  _mod715.maybeInstrument("fetch-body-resolved", () => {
    closure_0 = closure_5;
    {
      closure_0(687).fill(closure_0(686).GLOBAL_OBJ, "fetch", (arg0) => {
        closure_0 = arg0;
        return () => {
          const items = [...arguments];
          const error = new Error();
          let stack = error;
          const request = parseFetchArgs(items);
          let obj = { args: items, fetchData: { method: request.method, url: request.url }, startTimestamp: 1000 * stack(dependencyMap[6]).timestampInSeconds(), virtualError: error, headers: getHeadersFromFetchArgs(items) };
          if (!closure_2_0) {
            obj = {};
            let merged = Object.assign(obj);
            tmp2(dependencyMap[2]).triggerHandlers("fetch", obj);
            const tmp2Result = tmp2(dependencyMap[2]);
          }
          const obj2 = stack(dependencyMap[6]);
          stack = asyncGeneratorStep(async (response) => {
            c1 = 0;
            return (/* F125488 */ function*() { ... })();
          });
          return stack.apply(stack(dependencyMap[5]).GLOBAL_OBJ, items).then(function(result) {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }, (error) => {
            closure_3_0(715);
            obj = {};
            const merged = Object.assign(obj);
            obj.endTimestamp = 1000 * closure_3_0(703).timestampInSeconds();
            obj.error = error;
            obj.triggerHandlers("fetch", obj);
            const obj3 = closure_3_0(703);
            const tmp3 = obj;
            const obj4 = closure_3_0(692);
            if (tmp6) {
              error.stack = stack.stack;
              let tmpResult = closure_3_0(687);
              const result = tmpResult.addNonEnumerableProperty(error, "framesToPop", 1);
            }
            tmpResult = closure_3_0(713);
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
                    const result1 = closure_3_0(687).addNonEnumerableProperty(error, "__sentry_fetch_url_host__", host);
                    const tmpResult1 = closure_3_0(687);
                  }
                } catch (err) {
                }
              }
            }
            throw error;
          });
        };
      });
      const obj = closure_0(687);
    }
  });
};
export const addFetchInstrumentationHandler = function addFetchInstrumentationHandler(errorCallback, arg1) {
  _require = arg1;
  require("module_715").addHandler("fetch", errorCallback);
  let obj = require("module_715");
  require("module_715").maybeInstrument("fetch", () => {
    let flag = closure_0;
    if (closure_0 === undefined) {
      flag = false;
    }
    if (flag) {
      flag = !_isFetchSupported.supportsNativeFetch();
    }
    if (!flag) {
      _mod687.fill(_mod686.GLOBAL_OBJ, "fetch", (arg0) => {
        closure_0 = arg0;
        return () => {
          const items = [...arguments];
          const error = new Error();
          let stack = error;
          const request = parseFetchArgs(items);
          let obj = { args: items, fetchData: { method: request.method, url: request.url }, startTimestamp: 1000 * stack(dependencyMap[6]).timestampInSeconds(), virtualError: error, headers: getHeadersFromFetchArgs(items) };
          if (!closure_2_0) {
            obj = {};
            let merged = Object.assign(obj);
            tmp2(dependencyMap[2]).triggerHandlers("fetch", obj);
            const tmp2Result = tmp2(dependencyMap[2]);
          }
          const obj2 = stack(dependencyMap[6]);
          stack = asyncGeneratorStep(async (response) => {
            c1 = 0;
            return (/* F125488 */ function*() { ... })();
          });
          return stack.apply(stack(dependencyMap[5]).GLOBAL_OBJ, items).then(function(result) {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }, (error) => {
            closure_3_0(715);
            obj = {};
            const merged = Object.assign(obj);
            obj.endTimestamp = 1000 * closure_3_0(703).timestampInSeconds();
            obj.error = error;
            obj.triggerHandlers("fetch", obj);
            const obj3 = closure_3_0(703);
            const tmp3 = obj;
            const obj4 = closure_3_0(692);
            if (tmp6) {
              error.stack = stack.stack;
              let tmpResult = closure_3_0(687);
              const result = tmpResult.addNonEnumerableProperty(error, "framesToPop", 1);
            }
            tmpResult = closure_3_0(713);
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
                    const result1 = closure_3_0(687).addNonEnumerableProperty(error, "__sentry_fetch_url_host__", host);
                    const tmpResult1 = closure_3_0(687);
                  }
                } catch (err) {
                }
              }
            }
            throw error;
          });
        };
      });
    }
  });
};
export { parseFetchArgs };