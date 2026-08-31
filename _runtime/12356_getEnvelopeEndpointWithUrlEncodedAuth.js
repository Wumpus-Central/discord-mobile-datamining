// _runtime/12356_getEnvelopeEndpointWithUrlEncodedAuth.js
import dsnFromString from "12349_dsnFromString.js";

require = arg1;
const dependencyMap = arg6;
arg5.getEnvelopeEndpointWithUrlEncodedAuth = function getEnvelopeEndpointWithUrlEncodedAuth(protocol, arg1, name) {
  let combined1 = arg1;
  if (!arg1) {
    let str2 = "";
    if (protocol.protocol) {
      const _HermesInternal = HermesInternal;
      str2 = "" + protocol.protocol + ":";
    }
    let str4 = "";
    if (protocol.port) {
      const _HermesInternal2 = HermesInternal;
      str4 = ":" + protocol.port;
    }
    const host = protocol.host;
    let str6 = "";
    if (protocol.path) {
      const _HermesInternal3 = HermesInternal;
      str6 = "/" + protocol.path;
    }
    const _HermesInternal4 = HermesInternal;
    const _HermesInternal5 = HermesInternal;
    const obj = { sentry_version: "7" };
    const combined = "" + "" + str2 + "//" + host + str4 + str6 + "/api/" + protocol.projectId + "/envelope/";
    if (protocol.publicKey) {
      obj.sentry_key = protocol.publicKey;
    }
    if (name) {
      const _HermesInternal6 = HermesInternal;
      obj.sentry_client = "" + name.name + "/" + name.version;
    }
    const _URLSearchParams = URLSearchParams;
    const str13 = new URLSearchParams(obj);
    const _HermesInternal7 = HermesInternal;
    combined1 = "" + combined + "?" + str13.toString();
  }
  return combined1;
};
arg5.getReportDialogEndpoint = function getReportDialogEndpoint(arg0, user) {
  const url = dsnFromString.makeDsn(arg0);
  if (url) {
    let str = "";
    if (url.protocol) {
      const _HermesInternal = HermesInternal;
      str = "" + url.protocol + ":";
    }
    let str3 = "";
    if (url.port) {
      const _HermesInternal2 = HermesInternal;
      str3 = ":" + url.port;
    }
    const host = url.host;
    let str5 = "";
    if (url.path) {
      const _HermesInternal3 = HermesInternal;
      str5 = "/" + url.path;
    }
    const _HermesInternal4 = HermesInternal;
    const _HermesInternal5 = HermesInternal;
    const combined = "" + "" + str + "//" + host + str3 + str5 + "/api/" + "embed/error-page/";
    const _HermesInternal6 = HermesInternal;
    let combined1 = "dsn=" + dsnFromString.dsnToString(url);
    let tmp16 = combined1;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp16 = combined1;
      while (keys[tmp] !== undefined) {
        let tmp22 = tmp19;
        if ("dsn" === tmp19) {
          continue;
        } else {
          combined1 = tmp18;
          if ("onClose" === tmp19) {
            continue;
          } else {
            if ("user" === tmp19) {
              user = user.user;
              combined1 = tmp18;
              if (!user) {
                continue;
              } else {
                let sum = tmp18;
                if (user.name) {
                  let _encodeURIComponent3 = encodeURIComponent;
                  let _HermesInternal8 = HermesInternal;
                  sum = tmp18 + "&name=" + encodeURIComponent(user.name);
                }
                combined1 = sum;
                if (!user.email) {
                  continue;
                } else {
                  let _encodeURIComponent4 = encodeURIComponent;
                  let _HermesInternal9 = HermesInternal;
                  combined1 = sum + "&email=" + encodeURIComponent(user.email);
                  continue;
                }
                continue;
              }
              continue;
            } else {
              let _encodeURIComponent = encodeURIComponent;
              let _encodeURIComponent2 = encodeURIComponent;
              let encodeURIComponentResult = encodeURIComponent(tmp19);
              let _HermesInternal7 = HermesInternal;
              combined1 = tmp18 + "&" + encodeURIComponentResult + "=" + encodeURIComponent(user[tmp19]);
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
    }
    const _HermesInternal10 = HermesInternal;
    return "" + combined + "?" + tmp16;
  } else {
    return "";
  }
  const obj = dsnFromString;
  const tmp2 = require;
};