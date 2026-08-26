// _runtime/07774__resolveResponse.js
import addHandler from "07661_addHandler.js";
import closure_2 from "metro/00032__slicedToArray.js";
import closure_3 from "00005_asyncGeneratorStep.js";
import { addHandler } from "07661_addHandler.js";

function _resolveResponse() {
  const self = this;
  const tmp = callback2((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c6 = 0;
    c5 = 0;
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
              c4 = undefined;
              let timeout2;
              done = undefined;
              if (callback) {
                if (tmp50.body) {
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
                    obj1 = { value: null, done: false };
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
              done = 3;
              return { value: "HermesInternal", done: null };
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
  closure_4 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function streamHandler(clone) {
  closure_0 = clone;
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
      let obj = clone(closure_1_1[2]);
      obj = { endTimestamp: 1000 * clone(closure_1_1[6]).timestampInSeconds(), response: clone };
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
    [str4, tmp8] = callback(arg0, 2);
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
    let str6 = "GET";
    if (tmp12) {
      const _String2 = String;
      str6 = String(tmp8.method).toUpperCase();
      const str7 = String(tmp8.method);
    }
    obj[1] = str6;
    return obj;
  } else {
    let tmp3 = str8;
    if (typeof arg0[0] !== "string") {
      let str = "";
      if (!str8) {
        tmp3 = str;
      } else {
        if (tmp) {
          str = str8.url;
        } else if (str8.toString) {
          str = str8.toString();
        }
        tmp = str8 && typeof str8 === "object" && str8.url;
      }
    }
    obj = { url: null, method: null };
    obj[0] = tmp3;
    let str2 = "GET";
    if (tmp4) {
      const _String = String;
      str2 = String(str8.method).toUpperCase();
      const str3 = String(str8.method);
    }
    obj[1] = str2;
    return obj;
  }
}

export const addFetchEndInstrumentationHandler = function addFetchEndInstrumentationHandler(arg0) {
  addHandler.addHandler("fetch-body-resolved", arg0);
  let obj = addHandler;
  addHandler.maybeInstrument("fetch-body-resolved", () => {
    const callback = closure_5;
    {
      callback(7669).fill(callback(7664).GLOBAL_OBJ, "fetch", (arg0) => {
        closure_0 = arg0;
        return () => {
          const items = [...arguments];
          let callback;
          let obj;
          error = new Error();
          callback = error;
          const request = closure_2_6(items);
          obj = { args: items, fetchData: obj, startTimestamp: null, virtualError: null };
          obj = { method: request.method, url: request.url };
          obj[2] = 1000 * closure_2_0(closure_2_1[6]).timestampInSeconds();
          obj[3] = error;
          if (!callback) {
            obj = {};
            let merged = Object.assign(obj);
            tmp2(tmp3[2]).triggerHandlers("fetch", obj);
            const tmp2Result = tmp2(tmp3[2]);
          }
          let obj3 = closure_2_0(closure_2_1[6]);
          callback = undefined;
          callback = closure_2_3((arg0) => {
            closure_0 = arg0;
            c1 = 0;
            return (/* F122237 */ function*() { ... })();
          });
          return callback.apply(closure_2_0(closure_2_1[5]).GLOBAL_OBJ, items).then(function(arg0) {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }, (error) => {
            obj = lib(closure_2_1[2]);
            obj = {};
            const merged = Object.assign(obj);
            obj.endTimestamp = 1000 * lib(closure_2_1[6]).timestampInSeconds();
            obj.error = error;
            obj.triggerHandlers("fetch", obj);
            const obj3 = lib(closure_2_1[6]);
            const tmp = lib;
            const tmp2 = closure_2_1;
            const obj4 = lib(closure_2_1[7]);
            if (tmp5) {
              error.stack = lib.stack;
              const result = tmp(tmp2[4]).addNonEnumerableProperty(error, "framesToPop", 1);
              const tmpResult = tmp(tmp2[4]);
            }
            throw error;
          });
        };
      });
      const obj = callback(7669);
    }
  });
};
export const addFetchInstrumentationHandler = function addFetchInstrumentationHandler(arg0, arg1) {
  const _require = arg1;
  require("07661_addHandler.js").addHandler("fetch", arg0);
  let obj = addHandler;
  require("07661_addHandler.js").maybeInstrument("fetch", () => {
    let flag = callback;
    if (callback === undefined) {
      flag = false;
    }
    if (flag) {
      flag = !callback(closure_1_1[3]).supportsNativeFetch();
      let obj = callback(closure_1_1[3]);
    }
    if (!flag) {
      callback(closure_1_1[4]).fill(callback(closure_1_1[5]).GLOBAL_OBJ, "fetch", (arg0) => {
        closure_0 = arg0;
        return () => {
          const items = [...arguments];
          let callback;
          let obj;
          error = new Error();
          callback = error;
          const request = closure_2_6(items);
          obj = { args: items, fetchData: obj, startTimestamp: null, virtualError: null };
          obj = { method: request.method, url: request.url };
          obj[2] = 1000 * closure_2_0(closure_2_1[6]).timestampInSeconds();
          obj[3] = error;
          if (!callback) {
            obj = {};
            let merged = Object.assign(obj);
            tmp2(tmp3[2]).triggerHandlers("fetch", obj);
            const tmp2Result = tmp2(tmp3[2]);
          }
          let obj3 = closure_2_0(closure_2_1[6]);
          callback = undefined;
          callback = closure_2_3((arg0) => {
            closure_0 = arg0;
            c1 = 0;
            return (/* F122237 */ function*() { ... })();
          });
          return callback.apply(closure_2_0(closure_2_1[5]).GLOBAL_OBJ, items).then(function(arg0) {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }, (error) => {
            obj = lib(closure_2_1[2]);
            obj = {};
            const merged = Object.assign(obj);
            obj.endTimestamp = 1000 * lib(closure_2_1[6]).timestampInSeconds();
            obj.error = error;
            obj.triggerHandlers("fetch", obj);
            const obj3 = lib(closure_2_1[6]);
            const tmp = lib;
            const tmp2 = closure_2_1;
            const obj4 = lib(closure_2_1[7]);
            if (tmp5) {
              error.stack = lib.stack;
              const result = tmp(tmp2[4]).addNonEnumerableProperty(error, "framesToPop", 1);
              const tmpResult = tmp(tmp2[4]);
            }
            throw error;
          });
        };
      });
      const obj2 = callback(closure_1_1[4]);
    }
  });
};
export { parseFetchArgs };