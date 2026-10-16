// === Module 12017: conjureExternalConnectionRequests ===

// Module 12017 (conjureExternalConnectionRequests)
import conjureWorkerFetch from "conjureWorkerFetch" /* 10987 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_3 = async function _fetchProjectMcpConnection(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          let obj4 = closure_1;
          if (closure_1 === undefined) {
            obj4 = {};
          }
          let flag = obj4.regenerate;
          if (flag === undefined) {
            flag = false;
          }
          closure_130_1 = flag;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "test", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          let obj7;
          if (closure_130_1) {
            obj7 = { regenerate: "1" };
          }
          const obj8 = { method: "POST", query: obj7 };
          c4 = 2;
          c5 = 1;
          const obj9 = { value: closure_131_0(closure_131_1[1]).fetchConjureWorker(closure_130_0, "/agent/mcp-token", obj8), done: false };
          return obj9;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_130_2 = value;
          if (closure_130_2.ok) {
            c4 = 3;
            c5 = 1;
            const obj11 = { value: closure_130_2.json(), done: false };
            return obj11;
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("mcp token failed (" + closure_130_2.status + ")");
            throw error;
          }
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj12 = { value, done: true };
        return obj12;
      } else {
        closure_130_3 = value;
        if (typeof closure_130_3.expires_in === "number") {
          const _Date = Date;
          let sum = Date.now() + 1000 * closure_130_3.expires_in;
        } else {
          const _Date2 = Date;
          sum = Date.parse(closure_130_3.expires_at);
        }
        closure_130_4 = sum;
        const obj = { url: closure_130_3.url, expiresAtMs: closure_130_4 };
        c5 = 3;
      }
    } catch (tmp27) {
      c5 = tmp;
      throw tmp27;
    }
  }
};
let closure_4 = async function _requestExternalAuthorizeUrl(arg0) {
  closure_0 = arg0;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_5 = tmp4;
            closure_4 = tmp9;
            closure_132_0 = undefined;
            closure_132_1 = undefined;
            closure_132_2 = undefined;
            c6 = 1;
            const obj4 = { method: "POST", json: null };
            const obj5 = { connection_type };
            obj4.json = obj5;
            c7 = 2;
            c8 = 1;
            const obj6 = { value: conjureWorkerFetch.fetchConjureWorker(closure_0, "/agent/external-auth/authorize-url", obj4), done: false };
            return obj6;
          }
        } else if (1 === tmp9) {
          c6 = 0;
          c8 = 3;
          const obj8 = { value: { type: "error", error: "unavailable" }, done: true };
          return obj8;
        } else if (2 === tmp9) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_132_0 = value;
            c6 = 0;
            if (closure_132_0.ok) {
              c6 = 3;
              c7 = 6;
              c8 = 1;
              const obj10 = { value: closure_132_0.json(), done: false };
              return obj10;
            } else {
              closure_132_2 = null;
              c6 = 2;
              const tmp29 = closure_133_0(closure_133_1[2]);
              closure_3 = tmp29;
              externalAuthErrorCode = tmp29.externalAuthErrorCode;
              c7 = 5;
              c8 = 1;
              const obj11 = { value: closure_132_0.json(), done: false };
              return obj11;
            }
          }
        } else {
          if (3 === tmp9) {
            c6 = 0;
            { type: "error", error: null }.error = closure_133_0(closure_133_1[2]).externalAuthErrorFor(closure_132_0.status, closure_132_2);
            c8 = 3;
            const obj13 = { type: "error", error: null };
            const obj7 = closure_133_0(closure_133_1[2]);
          } else if (4 === tmp9) {
            c6 = 0;
            c8 = 3;
            const obj14 = { value: { type: "error", error: "unavailable" }, done: true };
            return obj14;
          } else if (5 === tmp9) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 !== 2) {
              let error;
              if (value != null) {
                error = value.error;
              }
              closure_132_2 = externalAuthErrorCode(error);
              c6 = 0;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj15 = { value, done: true };
            return obj15;
          } else {
            let url;
            if (value != null) {
              url = value.url;
            }
            closure_132_1 = url;
            c6 = 0;
            if (typeof closure_132_1 !== "string") {
              c8 = 3;
            }
            const obj16 = { type: "url", url: closure_132_1 };
          }
          c6 = 0;
          c8 = 3;
          const obj17 = { value, done: true };
          return obj17;
        }
      } catch (tmp36) {
        if (tmp5 === c6) {
          c8 = tmp3;
          throw tmp36;
        } else if (tmp2 === tmp37) {
          c7 = tmp2;
        } else if (tmp === tmp37) {
          c7 = tmp3;
        } else {
          c7 = tmp6;
        }
      }
    }
  })();
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/external_connections/conjureExternalConnectionRequests.tsx");

export const formatMcpConnectionExpiry = function formatMcpConnectionExpiry(connection) {
  return new Date(connection.expiresAtMs).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
};
export const fetchProjectMcpConnection = function fetchProjectMcpConnection() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const requestExternalAuthorizeUrl = function requestExternalAuthorizeUrl() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};