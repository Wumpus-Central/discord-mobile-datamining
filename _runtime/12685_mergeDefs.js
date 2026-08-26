// _runtime/12685_mergeDefs.js
import mergeDefs from "12643_mergeDefs.js";

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
      closure_0 = { string: { unit: { one: "\u0441\u0438\u043C\u0432\u043E\u043B", few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430", many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432" }, verb: "\u0438\u043C\u0435\u0442\u044C" }, file: { unit: { one: "\u0431\u0430\u0439\u0442", few: "\u0431\u0430\u0439\u0442\u0430", many: "\u0431\u0430\u0439\u0442" }, verb: "\u0438\u043C\u0435\u0442\u044C" }, array: { unit: { one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442", few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430", many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432" }, verb: "\u0438\u043C\u0435\u0442\u044C" }, set: { unit: { one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442", few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430", many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432" }, verb: "\u0438\u043C\u0435\u0442\u044C" } };
      closure_1 = { regex: "\u0432\u0432\u043E\u0434", email: "email \u0430\u0434\u0440\u0435\u0441", url: "URL", emoji: "\u044D\u043C\u043E\u0434\u0437\u0438", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F", date: "ISO \u0434\u0430\u0442\u0430", time: "ISO \u0432\u0440\u0435\u043C\u044F", duration: "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C", ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441", ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441", cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D", cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D", base64: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64", base64url: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url", json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430", e164: "\u043D\u043E\u043C\u0435\u0440 E.164", jwt: "JWT", template_literal: "\u0432\u0432\u043E\u0434" };
      closure_2 = { nan: "NaN", number: "\u0447\u0438\u0441\u043B\u043E", array: "\u043C\u0430\u0441\u0441\u0438\u0432" };
      return { localeError: (arg0) => "\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 " + tmp.origin };
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