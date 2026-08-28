// === Module 16114: externalConnectionOffer ===

// Module 16114 (externalConnectionOffer)
import set from "set" /* 2 */;

function externalConnectionOffer(nextResult) {
  let tmp = null;
  if (typeof nextResult.type === "string") {
    tmp = null;
    if ("" !== nextResult.type) {
      tmp = null;
      if (typeof nextResult.label === "string") {
        tmp = null;
        if ("" !== str3.trim()) {
          let str = "finish-setup";
          if (nextResult.configured) {
            str = "authorize";
          }
          tmp = str;
        }
        str3 = nextResult.label;
      }
    }
  }
  return tmp;
}
let set = new Set(["bad_request", "bad_connection_type", "unknown_project", "not_declared", "not_configured", "not_deployed", "child_error", "child_malformed", "child_unavailable"]);
const result = set.fileFinishedImporting("modules/vibegrations/vibegrationsExternalConnections.tsx");

export { externalConnectionOffer };
export const externalConnectionOffers = function externalConnectionOffers(arg0) {
  const items = [];
  set = new Set();
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = externalConnectionOffer;
    let tmp4 = externalConnectionOffer(nextResult);
    let hasItem = null == tmp4;
    let tmp5 = tmp4;
    if (!hasItem) {
      let tmp7 = nextResult;
      hasItem = set.has(tmp2.type);
    }
    if (!hasItem) {
      let tmp8 = nextResult;
      let addResult = set.add(tmp2.type);
      let obj = { connection: null, offer: null };
      obj[0] = tmp2;
      let tmp10 = tmp4;
      obj[1] = tmp5;
      let arr = items.push(obj);
    }
    continue;
  }
  return items;
};
export const beginExternalAuthorization = function beginExternalAuthorization(has) {
  if (has.has(arg1)) {
    return null;
  } else {
    const _Set = Set;
    set = new Set(has);
    set.add(arg1);
    return set;
  }
};
export const endExternalAuthorization = function endExternalAuthorization(has) {
  if (has.has(arg1)) {
    const _Set = Set;
    set = new Set(has);
    set.delete(arg1);
    return set;
  } else {
    return has;
  }
};
export const externalAuthErrorCode = function externalAuthErrorCode(str) {
  let tmp = null;
  if (typeof str === "string") {
    tmp = null;
    if (set.has(str)) {
      tmp = str;
    }
  }
  return tmp;
};
export const externalAuthErrorFor = function externalAuthErrorFor(status, c6) {
  if ("not_configured" === c6) {
    return "not_configured";
  } else if ("not_deployed" === c6) {
    return "not_deployed";
  } else {
    if ("not_declared" !== c6) {
      if ("unknown_project" !== c6) {
        if ("child_error" !== c6) {
          if ("child_malformed" !== c6) {
            if ("child_unavailable" !== c6) {
              if ("bad_request" !== c6) {
                if ("bad_connection_type" !== c6) {
                  let str7 = "not_declared";
                  if (404 !== status) {
                    let str8 = "unknown";
                    if (status >= 500) {
                      str8 = "unavailable";
                    }
                    str7 = str8;
                  }
                  return str7;
                }
              }
              return "unknown";
            }
          }
        }
        return "unavailable";
      }
    }
    return "not_declared";
  }
};
export function externalAuthErrorCopy(arg0) {
  let str = "generic";
  if ("not_configured" === arg0) {
    str = "setup";
  }
  return str;
}