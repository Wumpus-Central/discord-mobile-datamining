// _runtime/12487_mergeDefs.js
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
      let closure_0 = { string: { unit: "\u5B57\u7B26", verb: "\u5305\u542B" }, file: { unit: "\u5B57\u8282", verb: "\u5305\u542B" }, array: { unit: "\u9879", verb: "\u5305\u542B" }, set: { unit: "\u9879", verb: "\u5305\u542B" } };
      let closure_1 = { regex: "\u8F93\u5165", email: "\u7535\u5B50\u90AE\u4EF6", url: "URL", emoji: "\u8868\u60C5\u7B26\u53F7", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO\u65E5\u671F\u65F6\u95F4", date: "ISO\u65E5\u671F", time: "ISO\u65F6\u95F4", duration: "ISO\u65F6\u957F", ipv4: "IPv4\u5730\u5740", ipv6: "IPv6\u5730\u5740", cidrv4: "IPv4\u7F51\u6BB5", cidrv6: "IPv6\u7F51\u6BB5", base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32", base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32", json_string: "JSON\u5B57\u7B26\u4E32", e164: "E.164\u53F7\u7801", jwt: "JWT", template_literal: "\u8F93\u5165" };
      let closure_2 = { nan: "NaN", number: "\u6570\u5B57", array: "\u6570\u7EC4", null: "\u7A7A\u503C(null)" };
      return { localeError: (arg0) => "" + tmp.origin + " \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)" };
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