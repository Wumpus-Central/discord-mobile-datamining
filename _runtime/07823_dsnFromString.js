// === Module 7823: dsnFromString ===

// Module 7823 (dsnFromString)
import closure_2 from "_slicedToArray" /* 32 */;

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
    obj = _require(7776);
    obj.consoleSandbox(() => {
      console.error("Invalid Sentry Dsn: " + closure_0);
    });
  }
}
const re3 = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

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
    if (obj(7775).DEBUG_BUILD) {
      ({ port, projectId, protocol } = obj);
      const items = ["protocol", "publicKey", "host", "projectId"];
      const found = items.find((arg0) => {
        let flag = !tmp;
        if (!obj[arg0]) {
          const logger = obj(closure_1_1[1]).logger;
          const _HermesInternal = HermesInternal;
          logger.error("Invalid Sentry Dsn: " + arg0 + " missing");
          flag = true;
        }
        return flag;
      });
      if (found) {
        flag = !found;
      } else {
        if (!projectId.match(/^\d+$/)) {
          let logger = error(7776).logger;
          let _HermesInternal = HermesInternal;
          logger.error("Invalid Sentry Dsn: Invalid projectId " + projectId);
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
            const logger3 = error(7776).logger;
            error = logger3.error;
            const _HermesInternal3 = HermesInternal;
            error("Invalid Sentry Dsn: Invalid port " + port);
            num3 = 1;
          }
          let num2 = num3;
        } else {
          const logger2 = error(7776).logger;
          const _HermesInternal2 = HermesInternal;
          logger2.error("Invalid Sentry Dsn: Invalid protocol " + protocol);
          num2 = 1;
        }
      }
    }
    if (flag) {
      return obj;
    }
  }
};