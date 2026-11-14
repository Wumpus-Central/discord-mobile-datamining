// === Module 12221: ? ===

// Module 12221
import _mod12160 from "module_12160" /* 12160 */;

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
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports.default = function default_1() {
      if (typeof error === "function") {
        const obj = { localeError: null };
        const obj2 = { string: { unit: "\u0430\u043B\u043E\u043C\u0430\u0442", verb: "\u0434\u043E\u0448\u0442\u0430 \u0431\u043E\u0448\u0430\u0434" }, file: { unit: "\u0431\u0430\u0439\u0442", verb: "\u0434\u043E\u0448\u0442\u0430 \u0431\u043E\u0448\u0430\u0434" }, array: { unit: "\u0443\u043D\u0441\u0443\u0440", verb: "\u0434\u043E\u0448\u0442\u0430 \u0431\u043E\u0448\u0430\u0434" }, set: { unit: "\u0443\u043D\u0441\u0443\u0440", verb: "\u0434\u043E\u0448\u0442\u0430 \u0431\u043E\u0448\u0430\u0434" }, map: { unit: "\u0441\u0430\u0431\u0442", verb: "\u0434\u043E\u0448\u0442\u0430 \u0431\u043E\u0448\u0430\u0434" } };
        closure_1 = { regex: "\u0432\u0443\u0440\u0443\u0434", email: "\u0441\u0443\u0440\u043E\u0493\u0430\u0438 email", url: "URL", emoji: "\u044D\u043C\u043E\u04B7\u0438", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "\u0441\u0430\u043D\u0430\u0432\u0443 \u0432\u0430\u049B\u0442\u0438 ISO", date: "\u0441\u0430\u043D\u0430\u0438 ISO", time: "\u0432\u0430\u049B\u0442\u0438 ISO", duration: "\u0434\u0430\u0432\u043E\u043C\u043D\u043E\u043A\u0438\u0438 ISO", ipv4: "\u0441\u0443\u0440\u043E\u0493\u0430\u0438 IPv4", ipv6: "\u0441\u0443\u0440\u043E\u0493\u0430\u0438 IPv6", mac: "\u0441\u0443\u0440\u043E\u0493\u0430\u0438 MAC", cidrv4: "\u043C\u0430\u04B3\u0434\u0443\u0434\u0430\u0438 IPv4", cidrv6: "\u043C\u0430\u04B3\u0434\u0443\u0434\u0430\u0438 IPv6", base64: "\u0441\u0430\u0442\u0440\u0438 \u0434\u0430\u0440 \u0444\u043E\u0440\u043C\u0430\u0442\u0438 base64", base64url: "\u0441\u0430\u0442\u0440\u0438 \u0434\u0430\u0440 \u0444\u043E\u0440\u043C\u0430\u0442\u0438 base64url", json_string: "\u0441\u0430\u0442\u0440\u0438 JSON", e164: "\u0440\u0430\u049B\u0430\u043C\u0438 E.164", credit_card: "\u0440\u0430\u049B\u0430\u043C\u0438 \u043A\u043E\u0440\u0442\u0438 \u043A\u0440\u0435\u0434\u0438\u0442\u04E3", currency_code: "\u0440\u0430\u043C\u0437\u0438 \u0430\u0441\u044A\u043E\u0440", iban: "IBAN", jwt: "JWT", template_literal: "\u0432\u0443\u0440\u0443\u0434" };
        closure_2 = { nan: "NaN", number: "\u0440\u0430\u049B\u0430\u043C", string: "\u0441\u0430\u0442\u0440", array: "\u043C\u0430\u0441\u0441\u0438\u0432", object: "\u043E\u0431\u044A\u0435\u043A\u0442", date: "\u0441\u0430\u043D\u0430" };
        obj.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp46 = closure_2[parsedTypeResult];
              if (tmp46 == null) {
                tmp46 = parsedTypeResult;
              }
              const _HermesInternal17 = HermesInternal;
              return "\u0412\u0443\u0440\u0443\u0434\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442: " + expected + " \u0438\u043D\u0442\u0438\u0437\u043E\u0440 \u043C\u0435\u0440\u0430\u0444\u0442, " + tmp46 + " \u0433\u0438\u0440\u0438\u0444\u0442\u0430 \u0448\u0443\u0434";
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal16 = HermesInternal;
                let combined = "\u0412\u0443\u0440\u0443\u0434\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442: " + closure_2.stringifyPrimitive(code.values[0]) + " \u0438\u043D\u0442\u0438\u0437\u043E\u0440 \u043C\u0435\u0440\u0430\u0444\u0442";
              } else {
                const _HermesInternal15 = HermesInternal;
                combined = "\u0418\u043D\u0442\u0438\u0445\u043E\u0431\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442: \u044F\u043A\u0435 \u0430\u0437 " + closure_2.joinValues(code.values, "|") + " \u0438\u043D\u0442\u0438\u0437\u043E\u0440 \u043C\u0435\u0440\u0430\u0444\u0442";
              }
              return combined;
            case "too_big":
              let str35 = "<";
              if (code.inclusive) {
                str35 = "<=";
              }
              let tmp28 = obj2[code.origin];
              if (tmp28 == null) {
                tmp28 = null;
              }
              let str36 = code.origin;
              if (tmp28) {
                if (str36 == null) {
                  str36 = "\u049B\u0438\u043C\u0430\u0442";
                }
                const _HermesInternal14 = HermesInternal;
                let combined1 = "\u0425\u0435\u043B\u0435 \u043A\u0430\u043B\u043E\u043D: " + str36 + " \u0431\u043E\u044F\u0434 " + str35 + code.maximum.toString() + " " + tmp28.unit + " " + tmp28.verb;
              } else {
                let str37 = str36;
                if (str36 == null) {
                  str37 = "\u049B\u0438\u043C\u0430\u0442";
                }
                const _HermesInternal13 = HermesInternal;
                combined1 = "\u0425\u0435\u043B\u0435 \u043A\u0430\u043B\u043E\u043D: " + str37 + " \u0431\u043E\u044F\u0434 " + str35 + code.maximum.toString() + " \u0431\u043E\u0448\u0430\u0434";
              }
              return combined1;
            case "too_small":
              let str26 = ">";
              if (code.inclusive) {
                str26 = ">=";
              }
              let tmp16 = obj2[code.origin];
              if (tmp16 == null) {
                tmp16 = null;
              }
              ({ origin, minimum } = code);
              const str1 = minimum.toString();
              if (tmp16) {
                const _HermesInternal12 = HermesInternal;
                let combined2 = "\u0425\u0435\u043B\u0435 \u0445\u0443\u0440\u0434: " + origin + " \u0431\u043E\u044F\u0434 " + str26 + str1 + " " + tmp16.unit + " " + tmp16.verb;
              } else {
                const _HermesInternal11 = HermesInternal;
                combined2 = "\u0425\u0435\u043B\u0435 \u0445\u0443\u0440\u0434: " + origin + " \u0431\u043E\u044F\u0434 " + str26 + str1 + " \u0431\u043E\u0448\u0430\u0434";
              }
              return combined2;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal10 = HermesInternal;
                let combined3 = "\u0421\u0430\u0442\u0440\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442: \u0431\u043E\u044F\u0434 \u0431\u043E \"" + code.prefix + "\" \u043E\u0493\u043E\u0437 \u0448\u0430\u0432\u0430\u0434";
              } else if ("ends_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined3 = "\u0421\u0430\u0442\u0440\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442: \u0431\u043E\u044F\u0434 \u0431\u043E \"" + code.suffix + "\" \u0430\u043D\u04B7\u043E\u043C \u0451\u0431\u0430\u0434";
              } else if ("includes" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined3 = "\u0421\u0430\u0442\u0440\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442: \u0431\u043E\u044F\u0434 \"" + code.includes + "\"-\u0440\u043E \u0434\u0430\u0440 \u0431\u0430\u0440 \u0433\u0438\u0440\u0430\u0434";
              } else if ("regex" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined3 = "\u0421\u0430\u0442\u0440\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442: \u0431\u043E\u044F\u0434 \u0431\u0430 \u043D\u0430\u043C\u0443\u043D\u0430\u0438 " + code.pattern + " \u043C\u0443\u0432\u043E\u0444\u0438\u049B\u0430\u0442 \u043A\u0443\u043D\u0430\u0434";
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal6 = HermesInternal;
                combined3 = "" + format + "-\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442";
              }
              return combined3;
            case "not_multiple_of":
              const _HermesInternal5 = HermesInternal;
              return "\u0420\u0430\u049B\u0430\u043C\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442: \u0431\u043E\u044F\u0434 \u0431\u0430 " + code.divisor + " \u0431\u0435 \u0431\u0430\u049B\u0438\u044F \u0442\u0430\u049B\u0441\u0438\u043C \u0448\u0430\u0432\u0430\u0434";
            case "unrecognized_keys":
              let str8 = "\u0438";
              if (code.keys.length > 1) {
                str8 = "\u04B3\u043E\u0438";
              }
              const _HermesInternal4 = HermesInternal;
              return "\u041A\u0430\u043B\u0438\u0434" + str8 + " \u043D\u043E\u043C\u0430\u044A\u043B\u0443\u043C: " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal3 = HermesInternal;
              return "\u041A\u0430\u043B\u0438\u0434\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442 \u0434\u0430\u0440 " + code.origin;
            case "invalid_union":
              let str3 = "\u0412\u0443\u0440\u0443\u0434\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442";
              if (code.options) {
                const _Array = Array;
                str3 = "\u0412\u0443\u0440\u0443\u0434\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442";
                if (Array.isArray(code.options)) {
                  str3 = "\u0412\u0443\u0440\u0443\u0434\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442";
                  if (code.options.length > 0) {
                    const options = code.options;
                    const mapped = options.map((item) => "'" + item + "'");
                    const _HermesInternal2 = HermesInternal;
                    str3 = "\u049A\u0438\u043C\u0430\u0442\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442\u0438 \u0434\u0438\u0441\u043A\u0440\u0438\u043C\u0438\u043D\u0430\u0442\u043E\u0440: " + mapped.join(" | ") + " \u0438\u043D\u0442\u0438\u0437\u043E\u0440 \u043C\u0435\u0440\u0430\u0444\u0442";
                  }
                }
              }
              return str3;
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              return "\u049A\u0438\u043C\u0430\u0442\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442 \u0434\u0430\u0440 " + code.origin;
            default:
              return "\u0412\u0443\u0440\u0443\u0434\u0438 \u043D\u043E\u0434\u0443\u0440\u0443\u0441\u0442";
          }
        };
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let closure_2 = fn(_mod12160);
    function error() {

    }
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}