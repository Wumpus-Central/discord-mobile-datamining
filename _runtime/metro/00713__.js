// === Module 713: ? ===

// Module 713
import CONSOLE_LEVELS from "CONSOLE_LEVELS" /* 700 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function dsnFromString(arg0) {
  let closure_0 = arg0;
  const match = re4.exec(arg0);
  if (match) {
    const tmp5 = _slicedToArray(match.slice(1), 6);
    let str = tmp5[1];
    let str3 = "";
    const first = tmp5[0];
    if (undefined !== tmp5[2]) {
      str3 = tmp7;
    }
    let str4 = "";
    if (undefined !== tmp5[3]) {
      str4 = tmp8;
    }
    let str5 = "";
    if (undefined !== tmp5[4]) {
      str5 = tmp9;
    }
    let str6 = "";
    if (undefined !== tmp5[5]) {
      str6 = tmp10;
    }
    const parts = str6.split("/");
    let str8 = str6;
    let str9 = "";
    if (parts.length > 1) {
      const substr = parts.slice(0, -1);
      str9 = substr.join("/");
      str8 = parts.pop();
    }
    let first1 = str8;
    if (first1) {
      const match1 = str8.match(/^\d+/);
      first1 = str8;
      if (match1) {
        first1 = match1[0];
      }
    }
    const url = { protocol: first, publicKey: str, pass: str3, host: str4, port: str5, path: str9, projectId: first1 };
    if (!str) {
      str = "";
    }
    if (!str3) {
      str3 = "";
    }
    if (!str5) {
      str5 = "";
    }
    if (!str9) {
      str9 = "";
    }
    return url;
  } else {
    const obj = CONSOLE_LEVELS;
    obj.consoleSandbox(() => {
      console.error("Invalid Sentry Dsn: " + closure_0);
    });
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const re3 = /^o(\d+)\./;
const re4 = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

export { dsnFromString };
export const dsnToString = function dsnToString(_dsn) {
  let host;
  let pass;
  let path;
  let port;
  let projectId;
  let protocol;
  let publicKey;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  ({ host, path, pass, port, projectId, protocol, publicKey } = _dsn);
  let str = "";
  if (flag) {
    str = "";
    if (pass) {
      const _HermesInternal = HermesInternal;
      str = ":" + pass;
    }
  }
  let str3 = "";
  if (port) {
    const _HermesInternal2 = HermesInternal;
    str3 = ":" + port;
  }
  let combined = path;
  if (combined) {
    const _HermesInternal3 = HermesInternal;
    combined = "" + path + "/";
  }
  return "" + protocol + "://" + publicKey + str + "@" + host + str3 + "/" + combined + projectId;
};
export const extractOrgIdFromClient = function extractOrgIdFromClient(client) {
  let StringResult;
  const options = client.getOptions();
  const str = (client.getDsn() || {}).host;
  if (options.orgId) {
    const _String = String;
    StringResult = String(options.orgId);
  } else if (str) {
    const match = str.match(re3);
    let tmp7;
    if (match != null) {
      tmp7 = match[1];
    }
    StringResult = tmp7;
  }
  return StringResult;
};
export const extractOrgIdFromDsnHost = function extractOrgIdFromDsnHost(str) {
  const match = str.match(re3);
  let tmp2;
  if (match != null) {
    tmp2 = match[1];
  }
  return tmp2;
};
export const makeDsn = function makeDsn(protocol) {
  let port;
  let projectId;
  let url;
  if (typeof protocol === "string") {
    url = dsnFromString(protocol);
  } else {
    url = { protocol: protocol.protocol, publicKey: protocol.publicKey || "", pass: protocol.pass || "", host: protocol.host, port: protocol.port || "", path: protocol.path || "", projectId: protocol.projectId };
  }
  if (url) {
    let flag = true;
    if (url(699).DEBUG_BUILD) {
      ({ port, projectId, protocol } = url);
      const items = ["protocol", "publicKey", "host", "projectId"];
      let found = items.find((item) => {
        let flag = !url[item];
        if (flag) {
          const debug = CONSOLE_LEVELS.debug;
          const _HermesInternal = HermesInternal;
          debug.error("Invalid Sentry Dsn: " + item + " missing");
          flag = true;
        }
        return flag;
      });
      if (!found) {
        let num;
        if (projectId.match(/^\d+$/)) {
          let num2;
          const tmp7 = "http" === protocol || "https" === protocol;
          if (tmp7) {
            let num3 = port;
            if (num3) {
              const _isNaN = isNaN;
              const _parseInt = parseInt;
              num3 = isNaN(parseInt(port, 10));
            }
            if (num3) {
              const debug3 = tmp2(700).debug;
              const _HermesInternal3 = HermesInternal;
              debug3.error("Invalid Sentry Dsn: Invalid port " + port);
              num3 = 1;
            }
            num2 = num3;
          } else {
            const debug2 = tmp2(700).debug;
            const _HermesInternal2 = HermesInternal;
            debug2.error("Invalid Sentry Dsn: Invalid protocol " + protocol);
            num2 = 1;
          }
          num = num2;
        } else {
          let debug = tmp2(700).debug;
          let _HermesInternal = HermesInternal;
          debug.error("Invalid Sentry Dsn: Invalid projectId " + projectId);
          num = 1;
        }
        found = num;
      }
      flag = !found;
    }
    if (flag) {
      return url;
    }
  }
};