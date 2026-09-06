// === Module 8994: ? ===

// Module 8994
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
        obj = { string: { unit: "\u00E0mi", verb: "n\u00ED" }, file: { unit: "bytes", verb: "n\u00ED" }, array: { unit: "nkan", verb: "n\u00ED" }, set: { unit: "nkan", verb: "n\u00ED" } };
        closure_1 = { regex: "\u1EB9\u0300r\u1ECD \u00ECb\u00E1w\u1ECDl\u00E9", email: "\u00E0d\u00EDr\u1EB9\u0301s\u00EC \u00ECm\u1EB9\u0301l\u00EC", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "\u00E0k\u00F3k\u00F2 ISO", date: "\u1ECDj\u1ECD\u0301 ISO", time: "\u00E0k\u00F3k\u00F2 ISO", duration: "\u00E0k\u00F3k\u00F2 t\u00F3 p\u00E9 ISO", ipv4: "\u00E0d\u00EDr\u1EB9\u0301s\u00EC IPv4", ipv6: "\u00E0d\u00EDr\u1EB9\u0301s\u00EC IPv6", cidrv4: "\u00E0gb\u00E8gb\u00E8 IPv4", cidrv6: "\u00E0gb\u00E8gb\u00E8 IPv6", base64: "\u1ECD\u0300r\u1ECD\u0300 t\u00ED a k\u1ECD\u0301 n\u00ED base64", base64url: "\u1ECD\u0300r\u1ECD\u0300 base64url", json_string: "\u1ECD\u0300r\u1ECD\u0300 JSON", e164: "n\u1ECD\u0301mb\u00E0 E.164", jwt: "JWT", template_literal: "\u1EB9\u0300r\u1ECD \u00ECb\u00E1w\u1ECDl\u00E9" };
        closure_2 = { nan: "NaN", number: "n\u1ECD\u0301mb\u00E0", array: "akop\u1ECD" };
        obj.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp38 = closure_2[parsedTypeResult];
              if (tmp38 == null) {
                tmp38 = parsedTypeResult;
              }
              obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined = "\u00CCb\u00E1w\u1ECDl\u00E9 a\u1E63\u00EC\u1E63e: a n\u00ED l\u00E1ti fi instanceof " + code.expected + ", \u00E0m\u1ECD\u0300 a r\u00ED " + tmp38;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "\u00CCb\u00E1w\u1ECDl\u00E9 a\u1E63\u00EC\u1E63e: a n\u00ED l\u00E1ti fi " + expected + ", \u00E0m\u1ECD\u0300 a r\u00ED " + tmp38;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "\u00CCb\u00E1w\u1ECDl\u00E9 a\u1E63\u00EC\u1E63e: a n\u00ED l\u00E1ti fi " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "\u00C0\u1E63\u00E0y\u00E0n a\u1E63\u00EC\u1E63e: yan \u1ECD\u0300kan l\u00E1ra " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str23 = "<";
              if (code.inclusive) {
                str23 = "<=";
              }
              let tmp22 = obj[code.origin];
              if (tmp22 == null) {
                tmp22 = null;
              }
              if (tmp22) {
                let str25 = code.origin;
                if (str25 == null) {
                  str25 = "iye";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "T\u00F3 p\u1ECD\u0300 j\u00F9: a n\u00ED l\u00E1ti j\u1EB9\u0301 p\u00E9 " + str25 + " " + tmp22.verb + " " + str23 + code.maximum + " " + tmp22.unit;
              } else {
                const _HermesInternal12 = HermesInternal;
                combined2 = "T\u00F3 p\u1ECD\u0300 j\u00F9: a n\u00ED l\u00E1ti j\u1EB9\u0301 " + str23 + code.maximum;
              }
              return combined2;
            case "too_small":
              let str16 = ">";
              if (code.inclusive) {
                str16 = ">=";
              }
              let tmp15 = obj[code.origin];
              if (tmp15 == null) {
                tmp15 = null;
              }
              if (tmp15) {
                const _HermesInternal11 = HermesInternal;
                let combined3 = "K\u00E9r\u00E9 ju: a n\u00ED l\u00E1ti j\u1EB9\u0301 p\u00E9 " + code.origin + " " + tmp15.verb + " " + str16 + code.minimum + " " + tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "K\u00E9r\u00E9 ju: a n\u00ED l\u00E1ti j\u1EB9\u0301 " + str16 + code.minimum;
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = "\u1ECC\u0300r\u1ECD\u0300 a\u1E63\u00EC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\u1EB9\u0300r\u1EB9\u0300 p\u1EB9\u0300l\u00FA \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = "\u1ECC\u0300r\u1ECD\u0300 a\u1E63\u00EC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 par\u00ED p\u1EB9\u0300l\u00FA \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "\u1ECC\u0300r\u1ECD\u0300 a\u1E63\u00EC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 n\u00ED \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "\u1ECC\u0300r\u1ECD\u0300 a\u1E63\u00EC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\u00E1 \u00E0p\u1EB9\u1EB9r\u1EB9 mu " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "A\u1E63\u00EC\u1E63e: " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "N\u1ECD\u0301mb\u00E0 a\u1E63\u00EC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 j\u1EB9\u0301 \u00E8y\u00E0 p\u00EDp\u00EDn ti " + code.divisor;
            case "unrecognized_keys":
              const _HermesInternal3 = HermesInternal;
              return "B\u1ECDt\u00ECn\u00EC \u00E0\u00ECm\u1ECD\u0300: " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "B\u1ECDt\u00ECn\u00EC a\u1E63\u00EC\u1E63e n\u00EDn\u00FA " + code.origin;
            case "invalid_union":
              return "\u00CCb\u00E1w\u1ECDl\u00E9 a\u1E63\u00EC\u1E63e";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              return "Iye a\u1E63\u00EC\u1E63e n\u00EDn\u00FA " + code.origin;
            default:
              return "\u00CCb\u00E1w\u1ECDl\u00E9 a\u1E63\u00EC\u1E63e";
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