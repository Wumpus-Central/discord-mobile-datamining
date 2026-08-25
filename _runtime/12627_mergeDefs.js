// _runtime/12627_mergeDefs.js
import mergeDefs from "12572_mergeDefs.js";

const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp8 = key10009;
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp5 = self2;
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
              let tmp4 = hasOwnPropertyResult;
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports.default = function default_1() {
      if (typeof error !== "function") {
        HermesBuiltin.throwTypeError();
      }
      closure_0 = { string: { unit: "\u00E0mi", verb: "n\u00ED" }, file: { unit: "bytes", verb: "n\u00ED" }, array: { unit: "nkan", verb: "n\u00ED" }, set: { unit: "nkan", verb: "n\u00ED" } };
      closure_1 = { regex: "\u1EB9\u0300r\u1ECD \u00ECb\u00E1w\u1ECDl\u00E9", email: "\u00E0d\u00EDr\u1EB9\u0301s\u00EC \u00ECm\u1EB9\u0301l\u00EC", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "\u00E0k\u00F3k\u00F2 ISO", date: "\u1ECDj\u1ECD\u0301 ISO", time: "\u00E0k\u00F3k\u00F2 ISO", duration: "\u00E0k\u00F3k\u00F2 t\u00F3 p\u00E9 ISO", ipv4: "\u00E0d\u00EDr\u1EB9\u0301s\u00EC IPv4", ipv6: "\u00E0d\u00EDr\u1EB9\u0301s\u00EC IPv6", cidrv4: "\u00E0gb\u00E8gb\u00E8 IPv4", cidrv6: "\u00E0gb\u00E8gb\u00E8 IPv6", base64: "\u1ECD\u0300r\u1ECD\u0300 t\u00ED a k\u1ECD\u0301 n\u00ED base64", base64url: "\u1ECD\u0300r\u1ECD\u0300 base64url", json_string: "\u1ECD\u0300r\u1ECD\u0300 JSON", e164: "n\u1ECD\u0301mb\u00E0 E.164", jwt: "JWT", template_literal: "\u1EB9\u0300r\u1ECD \u00ECb\u00E1w\u1ECDl\u00E9" };
      closure_2 = { nan: "NaN", number: "n\u1ECD\u0301mb\u00E0", array: "akop\u1ECD" };
      return { localeError: (arg0) => "Iye a\u1E63\u00EC\u1E63e n\u00EDn\u00FA " + tmp.origin };
    };
    let closure_2 = fn(mergeDefs);
    function error() {

    }
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}