// === Module 702: ? ===

// Module 702
import consoleSandbox from "consoleSandbox" /* 689 */;
import _slicedToArray from "module_32" /* 32 */;

function dsnFromString(arg0) {
  closure_0 = arg0;
  const match = re4.exec(arg0);
  if (match) {
    const tmp5 = _slicedToArray(match.slice(1), 6);
    let str = tmp5[1];
    let str3 = "";
    if (undefined !== tmp5[2]) {
      str3 = tmp6;
    }
    let str4 = "";
    if (undefined !== tmp5[3]) {
      str4 = tmp7;
    }
    let str5 = "";
    if (undefined !== tmp5[4]) {
      str5 = tmp8;
    }
    let str6 = "";
    if (undefined !== tmp5[5]) {
      str6 = tmp9;
    }
    const parts = str6.split("/");
    let str8 = str6;
    let str9 = "";
    if (parts.length > 1) {
      const substr = parts.slice(0, -1);
      str9 = substr.join("/");
      str8 = parts.pop();
    }
    let first = str8;
    if (str8) {
      const match1 = str8.match(/^\d+/);
      first = str8;
      if (match1) {
        first = match1[0];
      }
    }
    const url = { protocol: tmp5[0], publicKey: null, pass: null, host: null, port: null, path: null, projectId: null };
    if (!str) {
      str = "";
    }
    url.publicKey = str;
    if (!str3) {
      str3 = "";
    }
    url.pass = str3;
    url.host = str4;
    if (!str5) {
      str5 = "";
    }
    url.port = str5;
    if (!str9) {
      str9 = "";
    }
    url.path = str9;
    url.projectId = first;
    return url;
  } else {
    consoleSandbox.consoleSandbox(() => {
      console.error("Invalid Sentry Dsn: " + closure_0);
    });
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const re3 = /^o(\d+)\./;
const re4 = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

export { dsnFromString };
export const dsnToString = function dsnToString(url) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  ({ host, path, pass, port, projectId, protocol, publicKey } = url);
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
  if (path) {
    const _HermesInternal3 = HermesInternal;
    combined = "" + path + "/";
  }
  return "" + protocol + "://" + publicKey + str + "@" + host + str3 + "/" + combined + projectId;
};
export const extractOrgIdFromClient = function extractOrgIdFromClient(client) {
  const options = client.getOptions();
  const str = client.getDsn() || {}.host;
  if (options.orgId) {
    const _String = String;
    let StringResult = String(options.orgId);
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
  if (typeof protocol === "string") {
    let url = dsnFromString(protocol);
  } else {
    url = { protocol: protocol.protocol, publicKey: protocol.publicKey || "", pass: protocol.pass || "", host: protocol.host, port: protocol.port || "", path: protocol.path || "", projectId: protocol.projectId };
  }
  if (url) {
    let error = url;
    let flag = true;
    if (url(688).DEBUG_BUILD) {
      ({ port, projectId, protocol } = url);
      const items = ["protocol", "publicKey", "host", "projectId"];
      const found = items.find((item) => {
        let flag = !tmp;
        if (!url[item]) {
          const debug = consoleSandbox.debug;
          const _HermesInternal = HermesInternal;
          debug.error("Invalid Sentry Dsn: " + item + " missing");
          flag = true;
        }
        return flag;
      });
      if (found) {
        flag = !found;
      } else {
        if (!projectId.match(/^\d+$/)) {
          let debug = error(689).debug;
          let _HermesInternal = HermesInternal;
          debug.error("Invalid Sentry Dsn: Invalid projectId " + projectId);
        }
        let tmp6 = "http" === protocol;
        if (!tmp6) {
          tmp6 = "https" === protocol;
        }
        if (tmp6) {
          let num3 = port;
          if (port) {
            const _isNaN = isNaN;
            const _parseInt = parseInt;
            num3 = isNaN(parseInt(port, 10));
          }
          if (num3) {
            const debug3 = error(689).debug;
            error = debug3.error;
            const _HermesInternal3 = HermesInternal;
            error("Invalid Sentry Dsn: Invalid port " + port);
            num3 = 1;
          }
        } else {
          const debug2 = error(689).debug;
          const _HermesInternal2 = HermesInternal;
          debug2.error("Invalid Sentry Dsn: Invalid protocol " + protocol);
        }
      }
    }
    if (flag) {
      return url;
    }
  }
};