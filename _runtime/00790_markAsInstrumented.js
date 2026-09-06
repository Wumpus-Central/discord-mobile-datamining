// _runtime/00790_markAsInstrumented.js
import _mod688 from "metro/00688__.js";
import consoleSandbox from "00689_consoleSandbox.js";
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "00704_SEMANTIC_ATTRIBUTE_CACHE_HIT.js";
import _mod731 from "metro/00731__.js";
import _slicedToArray from "metro/00032__.js";
import _toArray from "00718__toArray.js";
import setupIntegration from "00752_setupIntegration.js";

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
  obj = arg1;
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
                    let str10 = first;
                    if (first) {
                      str10 = obj[first];
                    }
                    if (!str10) {
                      str10 = "filter";
                    }
                    str9 = str10;
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
  const proxy = new Proxy(arg0, {
    apply(arg0, arg1, arg2) {
      name = arg0;
      closure_1 = arg1;
      const args = arg2;
      let attributes = _mod731;
      let str = "";
      let str2 = "";
      if (flag) {
        str2 = "(admin) ";
      }
      attributes = { name: "auth " + str2 + name.name, attributes: null };
      attributes = { [SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.supabase", [SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db", "db.system": "postgresql" };
      if (flag) {
        str = "admin.";
      }
      attributes["db.operation"] = "auth." + str + name.name;
      attributes.attributes = attributes;
      return attributes.startSpan(attributes, (arg0) => {
        closure_0 = arg0;
        const applyResult = Reflect.apply(closure_0, dependencyMap, args);
        const nextPromise = Reflect.apply(closure_0, dependencyMap, args).then((error) => {
          if (error) {
            if (typeof error === "object") {
              if ("error" in error) {
                if (error.error) {
                  obj = { code: closure_0(705).SPAN_STATUS_ERROR };
                  closure_0.setStatus(obj);
                  obj = { mechanism: { handled: false, type: "auto.db.supabase.auth" } };
                  closure_0(734).captureException(error.error, obj);
                  obj = closure_0;
                  const obj4 = closure_0(734);
                }
                obj.end();
                return error;
              }
            }
          }
          obj = closure_0;
          closure_0.setStatus({ code: closure_0(705).SPAN_STATUS_OK });
          const obj1 = { code: closure_0(705).SPAN_STATUS_OK };
        });
        items = [...closure_2];
        return Reflect.apply(closure_0, dependencyMap, args).then((error) => {
          if (error) {
            if (typeof error === "object") {
              if ("error" in error) {
                if (error.error) {
                  obj = { code: closure_0(705).SPAN_STATUS_ERROR };
                  closure_0.setStatus(obj);
                  obj = { mechanism: { handled: false, type: "auto.db.supabase.auth" } };
                  closure_0(734).captureException(error.error, obj);
                  obj = closure_0;
                  const obj4 = closure_0(734);
                }
                obj.end();
                return error;
              }
            }
          }
          obj = closure_0;
          closure_0.setStatus({ code: closure_0(705).SPAN_STATUS_OK });
          const obj1 = { code: closure_0(705).SPAN_STATUS_OK };
        }).catch((error) => {
          closure_0.setStatus({ code: closure_0(705).SPAN_STATUS_ERROR });
          closure_0.end();
          obj = { code: closure_0(705).SPAN_STATUS_ERROR };
          closure_0(734).captureException(error, { mechanism: { handled: false, type: "auto.db.supabase.auth" } });
          throw error;
        }).then.apply(items);
      });
    }
  });
  return proxy;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_4 = ["reauthenticate", "signInAnonymously", "signInWithOAuth", "signInWithIdToken", "signInWithOtp", "signInWithPassword", "signInWithSSO", "signOut", "signUp", "verifyOtp"];
let closure_5 = ["createUser", "deleteUser", "listUsers", "getUserById", "updateUserById", "inviteUserByEmail"];
const FILTER_MAPPINGS = { eq: "eq", neq: "neq", gt: "gt", gte: "gte", lt: "lt", lte: "lte", like: "like", "like(all)": "likeAllOf", "like(any)": "likeAnyOf", ilike: "ilike", "ilike(all)": "ilikeAllOf", "ilike(any)": "ilikeAnyOf", is: "is", in: "in", cs: "contains", cd: "containedBy", sr: "rangeGt", nxl: "rangeGte", sl: "rangeLt", nxr: "rangeLte", adj: "rangeAdjacent", ov: "overlaps", fts: "", plfts: "plain", phfts: "phrase", wfts: "websearch", not: "not" };
let items = ["select", "insert", "upsert", "update", "delete"];
function instrumentSupabaseClient(supabaseClient) {
  if (supabaseClient) {
    const _Function = Function;
    let constructor = supabaseClient;
    if (supabaseClient.constructor !== Function) {
      constructor = supabaseClient.constructor;
    }
    if (!isInstrumented(constructor.prototype.from)) {
      const _Proxy = Proxy;
      obj = {
        apply(arg0, arg1, arg2) {
              let applyResult = Reflect.apply(arg0, arg1, arg2);
              (function instrumentPostgRESTQueryBuilder(constructor) {
                closure_0 = constructor;
                for (const item10007 of closure_7) {
                  let tmp = (function _loop(item10007) {
                    if (closure_2_9(item10007.prototype[item10007])) {
                      return 1;
                    } else {
                      let _Proxy = Proxy;
                      obj = {
                        apply(arg0, arg1, arg2) {
                            let applyResult = Reflect.apply(arg0, arg1, arg2);
                            constructor = applyResult.constructor;
                            if (item10007(dependencyMap[9]).DEBUG_BUILD) {
                              const debug = item10007(dependencyMap[10]).debug;
                              let _HermesInternal = HermesInternal;
                              debug.log("Instrumenting " + item10007 + " operation's PostgRESTFilterBuilder");
                            }
                            if (!closure_2_9(constructor.prototype.then)) {
                              const _Proxy = Proxy;
                              obj = { apply() { ... } };
                              const proxy = new Proxy(constructor.prototype.then, obj);
                              constructor.prototype.then = proxy;
                              closure_2_8(constructor.prototype.then);
                            }
                            return applyResult;
                          }
                      };
                      let proxy = new Proxy(tmp.prototype[item10007], obj);
                      tmp.prototype[item10007] = proxy;
                      closure_2_8(tmp.prototype[item10007]);
                    }
                  })(item10007);
                  continue;
                }
              })(applyResult.constructor);
              return applyResult;
            }
      };
      const proxy = new Proxy(constructor.prototype.from, obj);
      constructor.prototype.from = proxy;
      markAsInstrumented(constructor.prototype.from);
    }
    (function instrumentSupabaseAuthClient(supabaseClient) {
      const auth = supabaseClient.auth;
      if (auth) {
        if (!closure_1_9(supabaseClient.auth)) {
          for (const item10014 of closure_1_4) {
            let tmp5 = auth[item10014];
            let tmp6 = tmp5;
            if (tmp5) {
              tmp5 = typeof arg0.auth[item10014] === "function";
            }
            if (tmp5) {
              arg0.auth[item10014] = closure_1_12(tmp6);
            }
            continue;
          }
          const iter = dependencyMap[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp16 = nextResult;
            let tmp17 = auth.admin[nextResult];
            let tmp18 = tmp17;
            if (tmp17) {
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
  } else if (_mod688.DEBUG_BUILD) {
    const debug = consoleSandbox.debug;
    debug.warn("Supabase integration was not installed because no Supabase client was provided.");
  }
}

export const DB_OPERATIONS_TO_INSTRUMENT = items;
export { FILTER_MAPPINGS };
export { extractOperation };
export { instrumentSupabaseClient };
export const supabaseIntegration = setupIntegration.defineIntegration((supabaseClient) => {
  supabaseClient = supabaseClient.supabaseClient;
  return {
    setupOnce() {
      if (typeof instrumentSupabaseClient === "function") {
        if (supabaseClient) {
          const _Function = Function;
          let constructor = supabaseClient;
          if (supabaseClient.constructor !== Function) {
            constructor = supabaseClient.constructor;
          }
          if (!isInstrumented(constructor.prototype.from)) {
            let _Proxy = Proxy;
            obj = {
              apply(arg0, arg1, arg2) {
                      let applyResult = Reflect.apply(arg0, arg1, arg2);
                      (function instrumentPostgRESTQueryBuilder(constructor) {
                        closure_0 = constructor;
                        for (const item10007 of closure_7) {
                          let tmp = (function _loop(item10007) {
                            if (closure_2_9(item10007.prototype[item10007])) {
                              return 1;
                            } else {
                              let _Proxy = Proxy;
                              obj = { apply() { ... } };
                              let proxy = new Proxy(tmp.prototype[item10007], obj);
                              tmp.prototype[item10007] = proxy;
                              closure_2_8(tmp.prototype[item10007]);
                            }
                          })(item10007);
                          continue;
                        }
                      })(applyResult.constructor);
                      return applyResult;
                    }
            };
            let proxy = new Proxy(constructor.prototype.from, obj);
            constructor.prototype.from = proxy;
            markAsInstrumented(constructor.prototype.from);
          }
          (function instrumentSupabaseAuthClient(supabaseClient) {
            const auth = supabaseClient.auth;
            if (auth) {
              if (!closure_1_9(supabaseClient.auth)) {
                for (const item10014 of closure_1_4) {
                  let tmp5 = auth[item10014];
                  let tmp6 = tmp5;
                  if (tmp5) {
                    tmp5 = typeof arg0.auth[item10014] === "function";
                  }
                  if (tmp5) {
                    arg0.auth[item10014] = closure_1_12(tmp6);
                  }
                  continue;
                }
                const iter = dependencyMap[Symbol.iterator]();
                const nextResult = iter.next();
                while (iter !== undefined) {
                  let tmp16 = nextResult;
                  let tmp17 = auth.admin[nextResult];
                  let tmp18 = tmp17;
                  if (tmp17) {
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
        } else if (_mod688.DEBUG_BUILD) {
          let debug = consoleSandbox.debug;
          debug.warn("Supabase integration was not installed because no Supabase client was provided.");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
    name: "Supabase"
  };
});
export { translateFiltersIntoMethods };