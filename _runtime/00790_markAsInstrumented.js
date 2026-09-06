// === Module 790: markAsInstrumented ===

// Module 790 (markAsInstrumented)
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 688 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "_toArray" /* 718 */;
import setupIntegration from "setupIntegration" /* 752 */;

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
            const arr = callback(str2.split("."));
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
            return "" + str3 + "(" + str + ", " + substr.join(".") + ")";
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
  closure_0 = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const proxy = new Proxy(arg0, {
    apply(arg0, arg1, arg2) {
      const lib = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      obj = lib(flag[2]);
      let str = "";
      let str2 = "";
      if (closure_1) {
        str2 = "(admin) ";
      }
      obj = { name: "auth " + str2 + lib.name, attributes: null };
      obj = { [tmp(tmp2[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.supabase", [tmp(tmp2[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db", "db.system": "postgresql" };
      if (closure_1) {
        str = "admin.";
      }
      obj["db.operation"] = "auth." + str + lib.name;
      obj[1] = obj;
      return obj.startSpan(obj, (arg0) => {
        closure_0 = arg0;
        const applyResult = Reflect.apply(closure_0, closure_1, args);
        const nextPromise = Reflect.apply(closure_0, closure_1, args).then((obj) => {
          if (obj) {
            if (typeof obj === "object") {
              if ("error" in obj) {
                if (obj.error) {
                  obj = { code: null };
                  obj[0] = store(closure_1_1[4]).SPAN_STATUS_ERROR;
                  store.setStatus(obj);
                  obj = { mechanism: null };
                  obj[0] = { handled: false, type: "auto.db.supabase.auth" };
                  store(closure_1_1[5]).captureException(obj.error, obj);
                  obj = store;
                  const obj4 = store(closure_1_1[5]);
                }
                obj.end();
                return obj;
              }
            }
          }
          obj = store;
          store.setStatus({ code: store(closure_1_1[4]).SPAN_STATUS_OK });
        });
        items = [...closure_2];
        return Reflect.apply(closure_0, closure_1, args).then((obj) => {
          if (obj) {
            if (typeof obj === "object") {
              if ("error" in obj) {
                if (obj.error) {
                  obj = { code: null };
                  obj[0] = store(closure_1_1[4]).SPAN_STATUS_ERROR;
                  store.setStatus(obj);
                  obj = { mechanism: null };
                  obj[0] = { handled: false, type: "auto.db.supabase.auth" };
                  store(closure_1_1[5]).captureException(obj.error, obj);
                  obj = store;
                  const obj4 = store(closure_1_1[5]);
                }
                obj.end();
                return obj;
              }
            }
          }
          obj = store;
          store.setStatus({ code: store(closure_1_1[4]).SPAN_STATUS_OK });
        }).catch((arg0) => {
          store.setStatus({ code: store(closure_1_1[4]).SPAN_STATUS_ERROR });
          store.end();
          obj = { code: store(closure_1_1[4]).SPAN_STATUS_ERROR };
          store(closure_1_1[5]).captureException(arg0, { mechanism: { handled: false, type: "auto.db.supabase.auth" } });
          throw arg0;
        }).then.apply(items);
      });
    }
  });
  return proxy;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_4 = ["reauthenticate", "signInAnonymously", "signInWithOAuth", "signInWithIdToken", "signInWithOtp", "signInWithPassword", "signInWithSSO", "signOut", "signUp", "verifyOtp"];
let closure_5 = ["createUser", "deleteUser", "listUsers", "getUserById", "updateUserById", "inviteUserByEmail"];
let obj = { eq: "eq", neq: "neq", gt: "gt", gte: "gte", lt: "lt", lte: "lte", like: "like", "like(all)": "likeAllOf", "like(any)": "likeAnyOf", ilike: "ilike", "ilike(all)": "ilikeAllOf", "ilike(any)": "ilikeAnyOf", is: "is", in: "in", cs: "contains", cd: "containedBy", sr: "rangeGt", nxl: "rangeGte", sl: "rangeLt", nxr: "rangeLte", adj: "rangeAdjacent", ov: "overlaps", fts: "", plfts: "plain", phfts: "phrase", wfts: "websearch", not: "not" };
let items = ["select", "insert", "upsert", "update", "delete"];
function instrumentSupabaseClient(auth) {
  if (auth) {
    const _Function = Function;
    let constructor = auth;
    if (auth.constructor !== Function) {
      constructor = auth.constructor;
    }
    if (!isInstrumented(constructor.prototype.from)) {
      const _Proxy = Proxy;
      obj = { apply: null };
      obj[0] = function apply(arg0, arg1, arg2) {
        let applyResult = Reflect.apply(arg0, arg1, arg2);
        (function instrumentPostgRESTQueryBuilder(constructor) {
          closure_0 = constructor;
          for (const item10007 of closure_7) {
            let tmp = (function _loop(item10007) {
              const ctor = item10007;
              if (closure_1_9(ctor.prototype[item10007])) {
                return 1;
              } else {
                let _Proxy = Proxy;
                obj = { apply: null };
                obj[0] = function apply(arg0, arg1, arg2) {
                  let applyResult = Reflect.apply(arg0, arg1, arg2);
                  constructor = applyResult.constructor;
                  if (item10007(closure_1_1[9]).DEBUG_BUILD) {
                    const debug = item10007(closure_1_1[10]).debug;
                    let _HermesInternal = HermesInternal;
                    debug.log("Instrumenting " + item10007 + " operation's PostgRESTFilterBuilder");
                  }
                  if (!closure_1_9(constructor.prototype.then)) {
                    const _Proxy = Proxy;
                    obj = { apply: null };
                    obj[0] = function apply() { ... };
                    const proxy = new Proxy(constructor.prototype.then, obj);
                    constructor.prototype.then = proxy;
                    closure_1_8(constructor.prototype.then);
                  }
                  return applyResult;
                };
                let proxy = new Proxy(tmp.prototype[item10007], obj);
                tmp.prototype[item10007] = proxy;
                closure_1_8(tmp.prototype[item10007]);
              }
            })(item10007);
            continue;
          }
        })(applyResult.constructor);
        return applyResult;
      };
      const proxy = new Proxy(constructor.prototype.from, obj);
      constructor.prototype.from = proxy;
      markAsInstrumented(constructor.prototype.from);
    }
    (function instrumentSupabaseAuthClient(auth) {
      auth = auth.auth;
      if (auth) {
        if (!callback2(auth.auth)) {
          for (const item10014 of closure_4) {
            let tmp4 = item10014;
            let tmp5 = auth[item10014];
            let tmp6 = tmp5;
            if (tmp5) {
              let tmp7 = item10014;
              tmp5 = typeof arg0.auth[tmp4] === "function";
            }
            if (tmp5) {
              let tmp8 = item10014;
              let tmp9 = callback3;
              let tmp10 = tmp6;
              arg0.auth[tmp4] = callback3(tmp6);
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
              let tmp19 = nextResult;
              tmp17 = typeof auth.auth.admin[tmp16] === "function";
            }
            if (tmp17) {
              let tmp20 = nextResult;
              let tmp21 = callback3;
              let tmp22 = tmp18;
              auth.auth.admin[tmp16] = callback3(tmp18, true);
            }
            continue;
          }
          callback(auth.auth);
          const tmp11 = dependencyMap;
        }
      }
    })(auth);
  } else {
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug = tmp(689).debug;
      debug.warn("Supabase integration was not installed because no Supabase client was provided.");
    }
    tmp = require;
  }
}

export const DB_OPERATIONS_TO_INSTRUMENT = items;
export const FILTER_MAPPINGS = obj;
export { extractOperation };
export { instrumentSupabaseClient };
export const supabaseIntegration = setupIntegration.defineIntegration((supabaseClient) => {
  supabaseClient = supabaseClient.supabaseClient;
  return {
    setupOnce() {
      if (typeof closure_1_13 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (supabaseClient) {
        const _Function = Function;
        let constructor = tmp;
        if (tmp.constructor !== Function) {
          constructor = tmp.constructor;
        }
        if (!closure_1_9(constructor.prototype.from)) {
          let _Proxy = Proxy;
          obj = { apply: null };
          obj[0] = function apply(arg0, arg1, arg2) {
            let applyResult = Reflect.apply(arg0, arg1, arg2);
            (function instrumentPostgRESTQueryBuilder(constructor) {
              closure_0 = constructor;
              for (const item10007 of closure_7) {
                let tmp = (function _loop(item10007) {
                  const ctor = item10007;
                  if (closure_1_9(ctor.prototype[item10007])) {
                    return 1;
                  } else {
                    let _Proxy = Proxy;
                    obj = { apply: null };
                    obj[0] = function apply() { ... };
                    let proxy = new Proxy(tmp.prototype[item10007], obj);
                    tmp.prototype[item10007] = proxy;
                    closure_1_8(tmp.prototype[item10007]);
                  }
                })(item10007);
                continue;
              }
            })(applyResult.constructor);
            return applyResult;
          };
          let proxy = new Proxy(constructor.prototype.from, obj);
          constructor.prototype.from = proxy;
          closure_1_8(constructor.prototype.from);
        }
        (function instrumentSupabaseAuthClient(auth) {
          auth = auth.auth;
          if (auth) {
            if (!callback2(auth.auth)) {
              for (const item10014 of closure_4) {
                let tmp4 = item10014;
                let tmp5 = auth[item10014];
                let tmp6 = tmp5;
                if (tmp5) {
                  let tmp7 = item10014;
                  tmp5 = typeof arg0.auth[tmp4] === "function";
                }
                if (tmp5) {
                  let tmp8 = item10014;
                  let tmp9 = callback3;
                  let tmp10 = tmp6;
                  arg0.auth[tmp4] = callback3(tmp6);
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
                  let tmp19 = nextResult;
                  tmp17 = typeof auth.auth.admin[tmp16] === "function";
                }
                if (tmp17) {
                  let tmp20 = nextResult;
                  let tmp21 = callback3;
                  let tmp22 = tmp18;
                  auth.auth.admin[tmp16] = callback3(tmp18, true);
                }
                continue;
              }
              callback(auth.auth);
              const tmp11 = dependencyMap;
            }
          }
        })(tmp);
      } else {
        if (supabaseClient(closure_1_1[9]).DEBUG_BUILD) {
          let debug = tmp2(tmp3[10]).debug;
          debug.warn("Supabase integration was not installed because no Supabase client was provided.");
        }
        tmp2 = supabaseClient;
        tmp3 = closure_1_1;
      }
    },
    name: "Supabase"
  };
});
export { translateFiltersIntoMethods };