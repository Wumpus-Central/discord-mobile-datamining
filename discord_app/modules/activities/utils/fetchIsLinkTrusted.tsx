// === Module 14511: fetchIsLinkTrusted ===

// Module 14511 (fetchIsLinkTrusted)
import HTTPUtils from "HTTPUtils" /* 1272 */;
import URLUtilsDefault from "URLUtils" /* 1365 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_6 = async function _requestIsLinkTrusted(arg0) {
  closure_0 = arg0;
  c3 = 0;
  c5 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
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
        c5 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp6;
            let body;
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: Endpoints.ACTIVITIES_TRUSTED_LINKS(closure_0), rejectWithError: false, query: null, timeout: 500 };
            const obj1 = { url };
            request.query = obj1;
            c3 = 2;
            c5 = 1;
            const obj2 = { value: HTTP.get(request), done: false };
            return obj2;
          }
        } else if (1 === tmp6) {
          c4 = 0;
          c5 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          body = value.body;
          const _Boolean = Boolean;
          c4 = 0;
          c5 = 3;
          obj = { value: Boolean(body.trusted), done: true };
          return obj;
        }
      } catch (tmp9) {
        if (tmp3 === c4) {
          c5 = tmp2;
          throw tmp9;
        } else {
          c3 = tmp;
        }
      }
    }
  })();
};
let closure_7 = async function _fetchIsLinkTrusted(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp2;
          closure_2 = tmp3;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          if (undefined === closure_0) {
            c5 = 3;
            return { value: false, done: true };
          } else {
            const toURLSafeResult = URLUtilsDefault.toURLSafe(closure_1);
            let protocol;
            if (toURLSafeResult != null) {
              protocol = toURLSafeResult.protocol;
            }
            if ("http:" !== protocol) {
              if ("https:" !== protocol) {
                c5 = 3;
                return { value: false, done: true };
              }
            }
            const _HermesInternal = HermesInternal;
            const combined = "" + closure_0 + ":" + closure_1;
            closure_130_0 = combined;
            let tmp23 = (function readCache(combined) {
              value = map.get(combined);
              if (null == value) {
                return null;
              } else {
                const _Date = Date;
                if (Date.now() >= value.expiresAt) {
                  map.delete(combined);
                  let check = null;
                } else {
                  check = value.check;
                }
              }
            })(combined);
            closure_130_1 = tmp23;
            if (null == tmp23) {
              const tmp24 = (function requestIsLinkTrusted() {
                const self = this;
                const apply = closure_1_6.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(closure_0, closure_1);
              closure_130_1 = tmp24;
              (function writeCache(combined, check) {
                let obj = map;
                if (map.size >= 100) {
                  const iter2 = obj.keys().next();
                  if (!iter2.done) {
                    obj.delete(iter2.value);
                  }
                  const iter = obj.keys();
                }
                obj = { check, expiresAt: Date.now() + 300000 };
                const result = obj.set(combined, obj);
              })(combined, tmp24);
              tmp23 = tmp24;
            }
            c4 = 1;
            c5 = 1;
            const obj1 = { value: tmp23, done: false };
            return obj1;
          }
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_130_2 = value;
        let deleteResult = null;
        if (null == closure_130_2) {
          value = closure_131_5.get(closure_130_0);
          let check;
          if (value != deleteResult) {
            check = value.check;
          }
          deleteResult = closure_2;
          if (check === closure_130_1) {
            deleteResult = closure_131_5.delete(closure_130_0);
          }
        }
        c5 = 3;
      }
    } catch (tmp26) {
      c5 = tmp;
      throw tmp26;
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/utils/fetchIsLinkTrusted.tsx");

export const fetchIsLinkTrusted = function fetchIsLinkTrusted() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};