// === Module 11758: conjureExternalConnectionRequests ===

// Module 11758 (conjureExternalConnectionRequests)
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 11260 */;
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
          let ticket;
          let baseUrl;
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          closure_130_7 = undefined;
          closure_130_8 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "Set", done: true };
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
          c4 = 2;
          c5 = 1;
          const obj6 = { value: closure_131_0(closure_131_1[1]).mintWorkerTicket(closure_130_0), done: false };
          return obj6;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_130_2 = value;
          ticket = closure_130_2.ticket;
          baseUrl = closure_130_2.baseUrl;
          const _URLSearchParams = URLSearchParams;
          const obj9 = { ticket };
          const uRLSearchParams = new URLSearchParams(obj9);
          closure_130_5 = uRLSearchParams;
          if (closure_130_1) {
            const result = closure_130_5.set("regenerate", "1");
          }
          const _fetch = fetch;
          const _HermesInternal2 = HermesInternal;
          c4 = 3;
          c5 = 1;
          const obj10 = { value: fetch("" + baseUrl + "/agent/mcp-token?" + closure_130_5, { method: "POST" }), done: false };
          return obj10;
        }
      } else if (3 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          closure_130_6 = value;
          if (closure_130_6.ok) {
            c4 = 4;
            c5 = 1;
            const obj12 = { value: closure_130_6.json(), done: false };
            return obj12;
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("mcp token failed (" + closure_130_6.status + ")");
            throw error;
          }
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj13 = { value, done: true };
        return obj13;
      } else {
        closure_130_7 = value;
        if (typeof closure_130_7.expires_in === "number") {
          const _Date = Date;
          let sum = Date.now() + 1000 * closure_130_7.expires_in;
        } else {
          const _Date2 = Date;
          sum = Date.parse(closure_130_7.expires_at);
        }
        closure_130_8 = sum;
        const obj = { url: closure_130_7.url, expiresAtMs: closure_130_8 };
        c5 = 3;
      }
    } catch (tmp32) {
      c5 = tmp;
      throw tmp32;
    }
  }
};
let closure_4 = async function _requestExternalAuthorizeUrl(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp9 === 3) {
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
          closure_4 = tmp10;
          closure_132_0 = closure_1;
          closure_132_1 = undefined;
          closure_132_2 = undefined;
          closure_132_3 = undefined;
          let ticket;
          let baseUrl;
          closure_132_6 = undefined;
          c6 = 1;
          c7 = 2;
          c8 = 1;
          const obj4 = { value: ConjureWorkerTickets.mintWorkerTicket(closure_0), done: false };
          return obj4;
        }
      } else if (1 === tmp10) {
        c6 = 0;
        c8 = 3;
        const obj5 = { value: { type: "error", error: "unavailable" }, done: true };
        return obj5;
      } else if (2 === tmp10) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_132_3 = value;
          ticket = closure_132_3.ticket;
          baseUrl = closure_132_3.baseUrl;
          const _fetch = fetch;
          const request = { method: "POST", headers: { "content-type": "application/json" }, body: null };
          const _JSON = JSON;
          const obj8 = { connection_type: closure_132_0 };
          request.body = JSON.stringify(obj8);
          c7 = 3;
          c8 = 1;
          const obj9 = {
            value: fetch((function externalAuthEndpoint(baseUrl, arg1, ticket) {
                      const uRLSearchParams = new URLSearchParams({ ticket });
                      return "" + baseUrl + "/agent/external-auth/" + "authorize-url" + "?" + uRLSearchParams;
                    })(baseUrl, "authorize-url", ticket), request),
            done: false
          };
          return obj9;
        }
      } else if (3 === tmp10) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_132_1 = value;
          c6 = 0;
          if (closure_132_1.ok) {
            c6 = 3;
            c7 = 7;
            c8 = 1;
            const obj11 = { value: closure_132_1.json(), done: false };
            return obj11;
          } else {
            closure_132_6 = null;
            c6 = 2;
            const tmp30 = closure_133_0(closure_133_1[2]);
            closure_3 = tmp30;
            const externalAuthErrorCode = tmp30.externalAuthErrorCode;
            c7 = 6;
            c8 = 1;
            const obj12 = { value: closure_132_1.json(), done: false };
            return obj12;
          }
        }
      } else {
        if (4 === tmp10) {
          c6 = 0;
          { type: "error", error: null }.error = closure_133_0(closure_133_1[2]).externalAuthErrorFor(closure_132_1.status, closure_132_6);
          c8 = 3;
          const obj13 = { type: "error", error: null };
          const obj7 = closure_133_0(closure_133_1[2]);
        } else if (5 === tmp10) {
          c6 = 0;
          c8 = 3;
          const obj15 = { value: { type: "error", error: "unavailable" }, done: true };
          return obj15;
        } else if (6 === tmp10) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 !== 2) {
            let error;
            if (value != null) {
              error = value.error;
            }
            closure_132_6 = externalAuthErrorCode(error);
            c6 = 0;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj16 = { value, done: true };
          return obj16;
        } else {
          let url;
          if (value != null) {
            url = value.url;
          }
          closure_132_2 = url;
          c6 = 0;
          if (typeof closure_132_2 !== "string") {
            c8 = 3;
          }
          const obj17 = { type: "url", url: closure_132_2 };
        }
        c6 = 0;
        c8 = 3;
        const obj18 = { value, done: true };
        return obj18;
      }
    } catch (tmp37) {
      if (tmp5 === c6) {
        c8 = tmp3;
        throw tmp37;
      } else if (tmp2 === tmp38) {
        c7 = tmp2;
      } else if (tmp === tmp38) {
        c7 = tmp7;
      } else {
        c7 = tmp6;
      }
    }
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/external_connections/conjureExternalConnectionRequests.tsx");

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