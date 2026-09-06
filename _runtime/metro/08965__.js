// === Module 8965: ? ===

// Module 8965
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
        obj = { string: { unit: "stafi", verb: "a\u00F0 hafa" }, file: { unit: "b\u00E6ti", verb: "a\u00F0 hafa" }, array: { unit: "hluti", verb: "a\u00F0 hafa" }, set: { unit: "hluti", verb: "a\u00F0 hafa" } };
        closure_1 = { regex: "gildi", email: "netfang", url: "vefsl\u00F3\u00F0", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO dagsetning og t\u00EDmi", date: "ISO dagsetning", time: "ISO t\u00EDmi", duration: "ISO t\u00EDmalengd", ipv4: "IPv4 address", ipv6: "IPv6 address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded strengur", base64url: "base64url-encoded strengur", json_string: "JSON strengur", e164: "E.164 t\u00F6lugildi", jwt: "JWT", template_literal: "gildi" };
        closure_2 = { nan: "NaN", number: "n\u00FAmer", array: "fylki" };
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
                let combined = "Rangt gildi: \u00DE\u00FA sl\u00F3st inn " + tmp48 + " \u00FEar sem \u00E1 a\u00F0 vera instanceof " + code.expected;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Rangt gildi: \u00DE\u00FA sl\u00F3st inn " + tmp48 + " \u00FEar sem \u00E1 a\u00F0 vera " + expected;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "Rangt gildi: gert r\u00E1\u00F0 fyrir " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "\u00D3gilt val: m\u00E1 vera eitt af eftirfarandi " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str24 = "<";
              if (code.inclusive) {
                str24 = "<=";
              }
              let tmp27 = obj[code.origin];
              if (tmp27 == null) {
                tmp27 = null;
              }
              let str25 = code.origin;
              if (tmp27) {
                if (str25 == null) {
                  str25 = "gildi";
                }
                let str = code.maximum.toString();
                let str31 = tmp27.unit;
                if (str31 == null) {
                  str31 = "hluti";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "Of st\u00F3rt: gert er r\u00E1\u00F0 fyrir a\u00F0 " + str25 + " hafi " + str24 + str + " " + str31;
              } else {
                let str26 = str25;
                if (str25 == null) {
                  str26 = "gildi";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "Of st\u00F3rt: gert er r\u00E1\u00F0 fyrir a\u00F0 " + str26 + " s\u00E9 " + str24 + code.maximum.toString();
              }
              return combined2;
            case "too_small":
              let str18 = ">";
              if (code.inclusive) {
                str18 = ">=";
              }
              let tmp15 = obj[code.origin];
              if (tmp15 == null) {
                tmp15 = null;
              }
              ({ origin, minimum } = code);
              const str1 = minimum.toString();
              if (tmp15) {
                const _HermesInternal11 = HermesInternal;
                let combined3 = "Of l\u00EDti\u00F0: gert er r\u00E1\u00F0 fyrir a\u00F0 " + origin + " hafi " + str18 + str1 + " " + tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Of l\u00EDti\u00F0: gert er r\u00E1\u00F0 fyrir a\u00F0 " + origin + " s\u00E9 " + str18 + str1;
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = "\u00D3gildur strengur: ver\u00F0ur a\u00F0 byrja \u00E1 \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = "\u00D3gildur strengur: ver\u00F0ur a\u00F0 enda \u00E1 \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "\u00D3gildur strengur: ver\u00F0ur a\u00F0 innihalda \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "\u00D3gildur strengur: ver\u00F0ur a\u00F0 fylgja mynstri " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "Rangt " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "R\u00F6ng tala: ver\u00F0ur a\u00F0 vera margfeldi af " + code.divisor;
            case "unrecognized_keys":
              let str3 = "ur lykill";
              if (code.keys.length > 1) {
                str3 = "ir lyklar";
              }
              const _HermesInternal3 = HermesInternal;
              return "\u00D3\u00FEekkt " + str3 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "Rangur lykill \u00ED " + code.origin;
            case "invalid_union":
              return "Rangt gildi";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = "Rangt gildi \u00ED ";
              return "Rangt gildi \u00ED " + code.origin;
            default:
              return "Rangt gildi";
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