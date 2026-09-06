// === Module 8977: ? ===

// Module 8977
import _mod8939 from "module_8939" /* 8939 */;

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
        let obj = { localeError: null };
        obj = { string: { unit: "harf", verb: "olmal\u0131d\u0131r" }, file: { unit: "bayt", verb: "olmal\u0131d\u0131r" }, array: { unit: "unsur", verb: "olmal\u0131d\u0131r" }, set: { unit: "unsur", verb: "olmal\u0131d\u0131r" } };
        closure_1 = { regex: "giren", email: "epostag\u00E2h", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO heng\u00E2m\u0131", date: "ISO tarihi", time: "ISO zaman\u0131", duration: "ISO m\u00FCddeti", ipv4: "IPv4 ni\u015F\u00E2n\u0131", ipv6: "IPv6 ni\u015F\u00E2n\u0131", cidrv4: "IPv4 menzili", cidrv6: "IPv6 menzili", base64: "base64-\u015Fifreli metin", base64url: "base64url-\u015Fifreli metin", json_string: "JSON metin", e164: "E.164 say\u0131s\u0131", jwt: "JWT", template_literal: "giren" };
        closure_2 = { nan: "NaN", number: "numara", array: "saf", null: "gayb" };
        obj.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp48 = closure_2[parsedTypeResult];
              if (tmp48 == null) {
                tmp48 = parsedTypeResult;
              }
              obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined = "F\u00E2sit giren: umulan instanceof " + code.expected + ", al\u0131nan " + tmp48;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "F\u00E2sit giren: umulan " + expected + ", al\u0131nan " + tmp48;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "F\u00E2sit giren: umulan " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "F\u00E2sit tercih: m\u00FBteberler " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str31 = "<";
              if (code.inclusive) {
                str31 = "<=";
              }
              let tmp27 = obj[code.origin];
              if (tmp27 == null) {
                tmp27 = null;
              }
              let str32 = code.origin;
              if (tmp27) {
                if (str32 == null) {
                  str32 = "value";
                }
                let str = code.maximum.toString();
                let str39 = tmp27.unit;
                if (str39 == null) {
                  str39 = "elements";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "Fazla b\u00FCy\u00FCk: " + str32 + ", " + str31 + str + " " + str39 + " sahip olmal\u0131yd\u0131.";
              } else {
                let str33 = str32;
                if (str32 == null) {
                  str33 = "value";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "Fazla b\u00FCy\u00FCk: " + str33 + ", " + str31 + code.maximum.toString() + " olmal\u0131yd\u0131.";
              }
              return combined2;
            case "too_small":
              let str23 = ">";
              if (code.inclusive) {
                str23 = ">=";
              }
              let tmp15 = obj[code.origin];
              if (tmp15 == null) {
                tmp15 = null;
              }
              ({ origin, minimum } = code);
              const str1 = minimum.toString();
              if (tmp15) {
                const _HermesInternal11 = HermesInternal;
                let combined3 = "Fazla k\u00FC\u00E7\u00FCk: " + origin + ", " + str23 + str1 + " " + tmp15.unit + " sahip olmal\u0131yd\u0131.";
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Fazla k\u00FC\u00E7\u00FCk: " + origin + ", " + str23 + str1 + " olmal\u0131yd\u0131.";
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = "F\u00E2sit metin: \"" + code.prefix + "\" ile ba\u015Flamal\u0131.";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = "F\u00E2sit metin: \"" + code.suffix + "\" ile bitmeli.";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "F\u00E2sit metin: \"" + code.includes + "\" ihtiv\u00E2 etmeli.";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "F\u00E2sit metin: " + code.pattern + " nak\u015F\u0131na uymal\u0131.";
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "F\u00E2sit " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "F\u00E2sit say\u0131: " + code.divisor + " kat\u0131 olmal\u0131yd\u0131.";
            case "unrecognized_keys":
              let str6 = "";
              if (code.keys.length > 1) {
                str6 = "s";
              }
              const _HermesInternal3 = HermesInternal;
              return "Tan\u0131nmayan anahtar " + str6 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "" + code.origin + " i\u00E7in tan\u0131nmayan anahtar var.";
            case "invalid_union":
              return "Giren tan\u0131namad\u0131.";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = " i\u00E7in tan\u0131nmayan k\u0131ymet var.";
              return "" + code.origin + " i\u00E7in tan\u0131nmayan k\u0131ymet var.";
            default:
              return "K\u0131ymet tan\u0131namad\u0131.";
          }
        };
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let closure_2 = fn(_mod8939);
    function error() {

    }
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}