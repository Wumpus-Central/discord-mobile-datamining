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
      let closure_0 = { string: { unit: "karakter", verb: "legyen" }, file: { unit: "byte", verb: "legyen" }, array: { unit: "elem", verb: "legyen" }, set: { unit: "elem", verb: "legyen" } };
      let closure_1 = { regex: "bemenet", email: "email c\u00EDm", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO id\u0151b\u00E9lyeg", date: "ISO d\u00E1tum", time: "ISO id\u0151", duration: "ISO id\u0151intervallum", ipv4: "IPv4 c\u00EDm", ipv6: "IPv6 c\u00EDm", cidrv4: "IPv4 tartom\u00E1ny", cidrv6: "IPv6 tartom\u00E1ny", base64: "base64-k\u00F3dolt string", base64url: "base64url-k\u00F3dolt string", json_string: "JSON string", e164: "E.164 sz\u00E1m", jwt: "JWT", template_literal: "bemenet" };
      let closure_2 = { nan: "NaN", number: "sz\u00E1m", array: "t\u00F6mb" };
      return { localeError: (arg0) => "\u00C9rv\u00E9nytelen \u00E9rt\u00E9k: " + tmp.origin };
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