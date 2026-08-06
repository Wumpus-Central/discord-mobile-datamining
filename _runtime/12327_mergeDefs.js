// _runtime/12327_mergeDefs.js
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
      let closure_0 = { string: { unit: "tecken", verb: "att ha" }, file: { unit: "bytes", verb: "att ha" }, array: { unit: "objekt", verb: "att inneh\u00E5lla" }, set: { unit: "objekt", verb: "att inneh\u00E5lla" } };
      let closure_1 = { regex: "regulj\u00E4rt uttryck", email: "e-postadress", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO-datum och tid", date: "ISO-datum", time: "ISO-tid", duration: "ISO-varaktighet", ipv4: "IPv4-intervall", ipv6: "IPv6-intervall", cidrv4: "IPv4-spektrum", cidrv6: "IPv6-spektrum", base64: "base64-kodad str\u00E4ng", base64url: "base64url-kodad str\u00E4ng", json_string: "JSON-str\u00E4ng", e164: "E.164-nummer", jwt: "JWT", template_literal: "mall-literal" };
      let closure_2 = { nan: "NaN", number: "antal", array: "lista" };
      return {
        localeError: (arg0) => {
          let str = tmp.origin;
          if (str == null) {
            str = "v\u00E4rdet";
          }
          return "Ogiltigt v\u00E4rde i " + str;
        }
      };
    };
    let closure_2 = fn(require("mergeDefs"));
    function error() {

    }
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}