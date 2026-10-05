// _runtime/00801_DB_OPERATIONS_TO_INSTRUMENT.js
import _mod699 from "metro/00699__.js";
import CONSOLE_LEVELS from "00700_CONSOLE_LEVELS.js";
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "00715_SEMANTIC_ATTRIBUTE_CACHE_HIT.js";
import continueTrace from "00742_continueTrace.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import _toArray from "00729__toArray.js";
import 00763__ from "metro/00763__.js";

let closure_0;

function apply(arg0, arg1, arg2) {
  function instrumentPostgRESTQueryBuilder(constructor) {
    function _loop(item10007) {
      constructor = item10007;
      let tmp = constructor;
      if (closure_2_9(constructor.prototype[item10007])) {
        let num = 1;
        return 1;
      } else {
        let _Proxy = Proxy;
        let obj = {
          apply(arg0, arg1, arg2) {
              let applyResult = Reflect.apply(arg0, arg1, arg2);
              constructor = applyResult.constructor;
              if (closure_2_0(closure_2_1[9]).DEBUG_BUILD) {
                const debug = closure_2_0(closure_2_1[10]).debug;
                let _HermesInternal = HermesInternal;
                let str = " operation's PostgRESTFilterBuilder";
                debug.log("Instrumenting " + closure_0 + " operation's PostgRESTFilterBuilder");
              }
              if (!closure_2_9(constructor.prototype.then)) {
                const _Proxy = Proxy;
                let obj = {
                  apply(arg0, method, arg2) {
                      closure_0 = arg0;
                      let closure_1 = method;
                      const args = arg2;
                      let tmp = closure_10(method.method, method.headers);
                      let closure_3 = tmp;
                      if (closure_7.includes(tmp)) {
                        let pathname;
                        if (method != null) {
                          const url = method.url;
                          if (url != null) {
                            pathname = url.pathname;
                          }
                        }
                        if (pathname) {
                          if (typeof method.url.pathname === "string") {
                            const str11 = method.url.pathname;
                            const parts = str11.split("/");
                            let str = "";
                            if (parts.length > 0) {
                              let num = 1;
                              str = parts[parts.length - 1];
                            }
                            items = [];
                            const searchParams = method.url.searchParams;
                            const entries = searchParams.entries();
                            const tmp7 = entries[Symbol.iterator]();
                            while (tmp7 !== undefined) {
                              let tmp12 = args(tmp9, 2);
                              let arr = items.push(closure_11(tmp12[0], tmp12[1]));
                              continue;
                            }
                            let _Object = Object;
                            let obj2 = Object.create(null);
                            let obj = closure_0(closure_1[6]);
                            if (obj.isPlainObject(method.body)) {
                              const _Object2 = Object;
                              const entries1 = Object.entries(method.body);
                              for (const item10064 of entries1) {
                                let tmp23 = args(item10064, 2);
                                obj2[tmp23[0]] = tmp23[1];
                                continue;
                              }
                            }
                            let str3 = "";
                            if ("select" !== tmp) {
                              let str4 = "";
                              if (obj2) {
                                str4 = "(...) ";
                              }
                              const _HermesInternal = HermesInternal;
                              str3 = "" + tmp + str4;
                            }
                            const _HermesInternal2 = HermesInternal;
                            const combined = "" + str3 + items.join(" ") + " from(" + str + ")";
                            let obj3 = { "db.table": str, "db.schema": method.schema, "db.url": method.url.origin, "db.sdk": method.headers["X-Client-Info"], "db.system": "postgresql", "db.operation": tmp };
                            obj3[closure_0(closure_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.db.supabase";
                            obj3[closure_0(closure_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "db";
                            const tmp27 = closure_0;
                            const tmp28 = closure_1;
                            if (items.length) {
                              obj3["db.query"] = items;
                            }
                            const _Object3 = Object;
                            if (Object.keys(obj2).length) {
                              obj3["db.body"] = obj2;
                            }
                            let obj4 = { name: combined, attributes: obj3 };
                            const tmp27Result = tmp27(tmp28[2]);
                            return tmp27Result.startSpan(obj4, (arg0) => {
                              closure_0 = arg0;
                              items = [...closure_2];
                              const applyResult = Reflect.apply(closure_0, closure_1, []);
                              const nextPromise = applyResult.then(function(status) {
                                if (closure_0) {
                                  const tmp = status && typeof status === "object" && "status" in status;
                                  if (tmp) {
                                    let num = status.status;
                                    const setHttpStatus = closure_3_0(closure_3_1[4]).setHttpStatus;
                                    closure_3_0(closure_3_1[4]);
                                    if (!num) {
                                      num = 500;
                                    }
                                    setHttpStatus(closure_0, num);
                                  }
                                  closure_0.end();
                                }
                                if (status.error) {
                                  const _Error = Error;
                                  const self = this;
                                  const self2 = this;
                                  const error = new Error(status.error.message);
                                  if (status.error.code) {
                                    error.code = status.error.code;
                                  }
                                  if (status.error.details) {
                                    error.details = status.error.details;
                                  }
                                  obj2 = {};
                                  if (items.length) {
                                    obj2.query = items;
                                  }
                                  const _Object = Object;
                                  if (Object.keys(obj2).length) {
                                    obj2.body = obj2;
                                  }
                                  const obj3 = closure_3_0(closure_3_1[5]);
                                  obj3.captureException(error, (addEventProcessor) => {
                                    addEventProcessor.addEventProcessor((arg0) => {
                                      const obj = obj2(closure_1_1[7]);
                                      const result = obj.addExceptionMechanism(arg0, { handled: false, type: "auto.db.supabase.postgres" });
                                      return arg0;
                                    });
                                    addEventProcessor.setContext("supabase", obj2);
                                    return addEventProcessor;
                                  });
                                }
                                const obj4 = { type: "supabase", category: "db." + closure_3, message: combined };
                                const obj5 = {};
                                if (items.length) {
                                  obj5.query = items;
                                }
                                if (Object.keys(obj2).length) {
                                  obj5.body = obj2;
                                }
                                if (Object.keys(obj5).length) {
                                  obj4.data = obj5;
                                }
                                const obj6 = closure_3_0(closure_3_1[8]);
                                obj6.addBreadcrumb(obj4);
                                return status;
                              }, (arg0) => {
                                if (closure_0) {
                                  obj2 = closure_3_0(closure_3_1[4]);
                                  obj2.setHttpStatus(closure_0, 500);
                                  closure_0.end();
                                }
                                throw arg0;
                              });
                              return nextPromise.then.apply(items);
                            });
                          }
                        }
                        const _Reflect2 = Reflect;
                        return Reflect.apply(arg0, method, arg2);
                      } else {
                        const _Reflect = Reflect;
                        return Reflect.apply(arg0, method, arg2);
                      }
                    }
                };
                let self = this;
                let self2 = this;
                const prototype = constructor.prototype;
                const proxy = new Proxy(constructor.prototype.then, obj);
                prototype.then = proxy;
                closure_2_8(constructor.prototype.then);
              }
              return applyResult;
            }
        };
        let self = this;
        let self2 = this;
        let prototype = tmp.prototype;
        let proxy = new Proxy(tmp.prototype[item10007], obj);
        prototype[item10007] = proxy;
        let tmp7 = closure_2_8(tmp.prototype[item10007]);
      }
    }
    for (const item10007 of closure_7) {
      let tmp = _loop(item10007);
      continue;
    }
  }
  let applyResult = Reflect.apply(arg0, arg1, arg2);
  const tmp2 = instrumentPostgRESTQueryBuilder(applyResult.constructor);
  return applyResult;
}
function markAsInstrumented(arg0) {
  try {
    arg0.__SENTRY_INSTRUMENTED__ = true;
  } catch (err) {
  }
}
function isInstrumented(__SENTRY_INSTRUMENTED__) {
  try {
    return __SENTRY_INSTRUMENTED__.__SENTRY_INSTRUMENTED__;
  } catch (err) {
    return false;
  }
}
function extractOperation(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  if ("GET" === arg0) {
    return "select";
  } else if ("POST" === arg0) {
    const Prefer = obj.Prefer;
    let hasItem;
    if (Prefer != null) {
      hasItem = Prefer.includes("resolution=");
    }
    let str8 = "insert";
    if (hasItem) {
      str8 = "upsert";
    }
    return str8;
  } else if ("PATCH" === arg0) {
    return "update";
  } else if ("DELETE" === arg0) {
    return "delete";
  } else {
    return "<unknown-op>";
  }
}
function translateFiltersIntoMethods(str, str2) {
  if ("" !== str2) {
    if ("*" !== str2) {
      if ("select" === str) {
        const _HermesInternal3 = HermesInternal;
        return "select(" + str2 + ")";
      } else {
        if ("or" !== str) {
          if (!str.endsWith(".or")) {
            const arr = _toArray(str2.split("."));
            const first = arr[0];
            const substr = arr.slice(1);
            let startsWithResult;
            if (first != null) {
              startsWithResult = first.startsWith("fts");
            }
            let str3 = "textSearch";
            if (!startsWithResult) {
              let startsWithResult1;
              if (first != null) {
                startsWithResult1 = first.startsWith("plfts");
              }
              let str5 = "textSearch[plain]";
              if (!startsWithResult1) {
                let startsWithResult2;
                if (first != null) {
                  startsWithResult2 = first.startsWith("phfts");
                }
                let str7 = "textSearch[phrase]";
                if (!startsWithResult2) {
                  let startsWithResult3;
                  if (first != null) {
                    startsWithResult3 = first.startsWith("wfts");
                  }
                  let str9 = "textSearch[websearch]";
                  if (!startsWithResult3) {
                    str9 = first && obj[first] || "filter";
                    const str10 = first && obj[first] || "filter";
                  }
                  str7 = str9;
                }
                str5 = str7;
              }
              str3 = str5;
            }
            const _HermesInternal = HermesInternal;
            return "" + str3 + "(" + "." + ", " + substr.join(".") + ")";
          }
        }
        const _HermesInternal2 = HermesInternal;
        return "" + str + str2;
      }
    }
  }
  return "select(*)";
}
function instrumentAuthOperation(arg0) {
  let name = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = {
    apply(arg0, arg1, arg2) {
      let obj2;
      let tmp5;
      name = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      let str = "";
      let str2 = "";
      const startSpan = continueTrace.startSpan;
      continueTrace;
      if (flag) {
        str2 = "(admin) ";
      }
      let obj = { name: "auth " + str2 + name.name, attributes: obj2 };
      obj2 = { [SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.supabase", [SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db", "db.system": "postgresql", "db.operation": "auth." + str + tmp5.name };
      tmp5 = name;
      if (flag) {
        str = "admin.";
      }
      return startSpan(obj, (arg0) => {
        closure_0 = arg0;
        const applyResult = Reflect.apply(closure_0, closure_1, args);
        items = [...closure_2];
        const nextPromise = applyResult.then((error) => {
          const tmp = error;
          if (tmp) {
            if (typeof error === "object") {
              if ("error" in error) {
                let obj;
                if (error.error) {
                  const setStatus = closure_0.setStatus;
                  const obj2 = { code: closure_2_0(closure_2_1[4]).SPAN_STATUS_ERROR };
                  setStatus(obj2);
                  const obj3 = { mechanism: { handled: false, type: "auto.db.supabase.auth" } };
                  const obj4 = closure_2_0(closure_2_1[5]);
                  obj4.captureException(error.error, obj3);
                  obj = closure_0;
                }
                obj.end();
                return error;
              }
            }
          }
          obj = closure_0;
          const obj5 = { code: closure_2_0(closure_2_1[4]).SPAN_STATUS_OK };
          closure_0.setStatus(obj5);
        });
        const catchPromise = nextPromise.catch((error) => {
          const obj = { code: closure_2_0(closure_2_1[4]).SPAN_STATUS_ERROR };
          closure_0.setStatus(obj);
          closure_0.end();
          const obj2 = closure_2_0(closure_2_1[5]);
          obj2.captureException(error, { mechanism: { handled: false, type: "auto.db.supabase.auth" } });
          throw error;
        });
        return catchPromise.then.apply(items);
      });
    }
  };
  const proxy = new Proxy(arg0, obj);
  return proxy;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_4 = ["reauthenticate", "signInAnonymously", "signInWithOAuth", "signInWithIdToken", "signInWithOtp", "signInWithPassword", "signInWithSSO", "signOut", "signUp", "verifyOtp"];
let closure_5 = ["createUser", "deleteUser", "listUsers", "getUserById", "updateUserById", "inviteUserByEmail"];
const FILTER_MAPPINGS = { eq: "eq", neq: "neq", gt: "gt", gte: "gte", lt: "lt", lte: "lte", like: "like", "like(all)": "likeAllOf", "like(any)": "likeAnyOf", ilike: "ilike", "ilike(all)": "ilikeAllOf", "ilike(any)": "ilikeAnyOf", is: "is", in: "in", cs: "contains", cd: "containedBy", sr: "rangeGt", nxl: "rangeGte", sl: "rangeLt", nxr: "rangeLte", adj: "rangeAdjacent", ov: "overlaps", fts: "", plfts: "plain", phfts: "phrase", wfts: "websearch", not: "not" };
let items = ["select", "insert", "upsert", "update", "delete"];
function instrumentSupabaseClient(supabaseClient) {
  const tmp = supabaseClient;
  if (tmp) {
    const _Function = Function;
    let constructor = supabaseClient;
    if (supabaseClient.constructor !== Function) {
      constructor = supabaseClient.constructor;
    }
    if (!isInstrumented(constructor.prototype.from)) {
      const _Proxy = Proxy;
      const self = this;
      const self2 = this;
      const prototype = constructor.prototype;
      const obj = { apply };
      const proxy = new Proxy(constructor.prototype.from, obj);
      prototype.from = proxy;
      markAsInstrumented(constructor.prototype.from);
    }
    (function instrumentSupabaseAuthClient(supabaseClient) {
      const auth = supabaseClient.auth;
      if (auth) {
        if (!closure_1_9(supabaseClient.auth)) {
          for (const item10014 of closure_1_4) {
            let tmp5 = auth[item10014];
            let tmp6 = tmp5;
            if (tmp6) {
              tmp5 = typeof supabaseClient.auth[item10014] === "function";
            }
            if (tmp5) {
              supabaseClient.auth[item10014] = closure_1_12(tmp6);
            }
            continue;
          }
          const iter = closure_1_5[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp16 = nextResult;
            let tmp17 = auth.admin[nextResult];
            let tmp18 = tmp17;
            if (tmp18) {
              tmp17 = typeof supabaseClient.auth.admin[tmp16] === "function";
            }
            if (tmp17) {
              supabaseClient.auth.admin[tmp16] = closure_1_12(tmp18, true);
            }
            continue;
          }
          closure_1_8(supabaseClient.auth);
        }
      }
    })(supabaseClient);
  } else if (_mod699.DEBUG_BUILD) {
    const debug = CONSOLE_LEVELS.debug;
    debug.warn("Supabase integration was not installed because no Supabase client was provided.");
  }
}

export const DB_OPERATIONS_TO_INSTRUMENT = items;
export { FILTER_MAPPINGS };
export { extractOperation };
export { instrumentSupabaseClient };
export const supabaseIntegration = module_763.defineIntegration((supabaseClient) => {
  supabaseClient = supabaseClient.supabaseClient;
  let obj = {
    setupOnce() {
      if (typeof instrumentSupabaseClient === "function") {
        if (supabaseClient) {
          let tmp5 = globalThis;
          const _Function = Function;
          let constructor = supabaseClient;
          if (supabaseClient.constructor !== Function) {
            constructor = supabaseClient.constructor;
          }
          if (!isInstrumented(constructor.prototype.from)) {
            let _Proxy = Proxy;
            let obj = { apply };
            let self = this;
            let self2 = this;
            let tmp7 = obj;
            let prototype = constructor.prototype;
            let proxy = new Proxy(constructor.prototype.from, obj);
            const tmp9 = proxy;
            prototype.from = proxy;
            let tmp11 = markAsInstrumented(constructor.prototype.from);
          }
          let tmp12 = (function instrumentSupabaseAuthClient(supabaseClient) {
            const auth = supabaseClient.auth;
            if (auth) {
              if (!closure_1_9(supabaseClient.auth)) {
                for (const item10014 of closure_1_4) {
                  let tmp5 = auth[item10014];
                  let tmp6 = tmp5;
                  if (tmp6) {
                    tmp5 = typeof supabaseClient.auth[item10014] === "function";
                  }
                  if (tmp5) {
                    supabaseClient.auth[item10014] = closure_1_12(tmp6);
                  }
                  continue;
                }
                const iter = closure_1_5[Symbol.iterator]();
                const nextResult = iter.next();
                while (iter !== undefined) {
                  let tmp16 = nextResult;
                  let tmp17 = auth.admin[nextResult];
                  let tmp18 = tmp17;
                  if (tmp18) {
                    tmp17 = typeof supabaseClient.auth.admin[tmp16] === "function";
                  }
                  if (tmp17) {
                    supabaseClient.auth.admin[tmp16] = closure_1_12(tmp18, true);
                  }
                  continue;
                }
                closure_1_8(supabaseClient.auth);
              }
            }
          })(supabaseClient);
        } else if (_mod699.DEBUG_BUILD) {
          let debug = CONSOLE_LEVELS.debug;
          let str = "Supabase integration was not installed because no Supabase client was provided.";
          debug.warn("Supabase integration was not installed because no Supabase client was provided.");
        }
      } else {
        const str2 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    },
    name: "Supabase"
  };
  return obj;
});
export { translateFiltersIntoMethods };