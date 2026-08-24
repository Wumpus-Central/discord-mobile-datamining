// _runtime/00837_dsnFromString.js
import closure_2 from "metro/00032__slicedToArray.js";
import { consoleSandbox } from "00824_consoleSandbox.js";

function dsnFromString(arg0) {
  const _require = arg0;
  const match = regex.exec(arg0);
  if (match) {
    const tmp5 = callback(match.slice(1), 6);
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
    let obj = { protocol: null, publicKey: null, pass: null, host: null, port: null, path: null, projectId: null };
    obj[0] = tmp5[0];
    if (!str) {
      str = "";
    }
    obj[1] = str;
    if (!str3) {
      str3 = "";
    }
    obj[2] = str3;
    obj[3] = str4;
    if (!str5) {
      str5 = "";
    }
    obj[4] = str5;
    if (!str9) {
      str9 = "";
    }
    obj[5] = str9;
    obj[6] = first;
    return obj;
  } else {
    obj = _consoleSandbox;
    obj.consoleSandbox(() => {
      console.error("Invalid Sentry Dsn: " + closure_0);
    });
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const re3 = /^o(\d+)\./;
const re4 = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

export { dsnFromString };
export const dsnToString = function dsnToString(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  ({ host, path, pass, port, projectId, protocol, publicKey } = arg0);
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
    const match = str.match(closure_3);
    let tmp7;
    if (match != null) {
      tmp7 = match[1];
    }
    StringResult = tmp7;
  }
  return StringResult;
};
export const extractOrgIdFromDsnHost = function extractOrgIdFromDsnHost(str) {
  const match = str.match(closure_3);
  let tmp2;
  if (match != null) {
    tmp2 = match[1];
  }
  return tmp2;
};
export const makeDsn = function makeDsn(str) {
  if (typeof str === "string") {
    let obj = dsnFromString(str);
  } else {
    obj = { protocol: null, publicKey: null, pass: null, host: null, port: null, path: null, projectId: null };
    obj[0] = str.protocol;
    obj[1] = str.publicKey || "";
    obj[2] = str.pass || "";
    obj[3] = str.host;
    obj[4] = str.port || "";
    obj[5] = str.path || "";
    obj[6] = str.projectId;
  }
  if (obj) {
    error = obj;
    let flag = true;
    if (obj(823).DEBUG_BUILD) {
      ({ port, projectId, protocol } = obj);
      const items = ["protocol", "publicKey", "host", "projectId"];
      const found = items.find((arg0) => {
        let flag = !tmp;
        if (!obj[arg0]) {
          const debug = obj(closure_1_1[1]).debug;
          const _HermesInternal = HermesInternal;
          debug.error("Invalid Sentry Dsn: " + arg0 + " missing");
          flag = true;
        }
        return flag;
      });
      if (found) {
        flag = !found;
      } else {
        if (!projectId.match(/^\d+$/)) {
          let debug = error(824).debug;
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
            const debug3 = error(824).debug;
            error = debug3.error;
            const _HermesInternal3 = HermesInternal;
            error("Invalid Sentry Dsn: Invalid port " + port);
            num3 = 1;
          }
          let num2 = num3;
        } else {
          const debug2 = error(824).debug;
          const _HermesInternal2 = HermesInternal;
          debug2.error("Invalid Sentry Dsn: Invalid protocol " + protocol);
          num2 = 1;
        }
      }
    }
    if (flag) {
      return obj;
    }
  }
};