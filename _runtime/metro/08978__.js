// === Module 8978: ? ===

// Module 8978
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
        obj = { string: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" }, file: { unit: "\u0628\u0627\u06CC\u067C\u0633", verb: "\u0648\u0644\u0631\u064A" }, array: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" }, set: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" } };
        closure_1 = { regex: "\u0648\u0631\u0648\u062F\u064A", email: "\u0628\u0631\u06CC\u069A\u0646\u0627\u0644\u06CC\u06A9", url: "\u06CC\u0648 \u0622\u0631 \u0627\u0644", emoji: "\u0627\u06CC\u0645\u0648\u062C\u064A", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "\u0646\u06CC\u067C\u0647 \u0627\u0648 \u0648\u062E\u062A", date: "\u0646\u06D0\u067C\u0647", time: "\u0648\u062E\u062A", duration: "\u0645\u0648\u062F\u0647", ipv4: "\u062F IPv4 \u067E\u062A\u0647", ipv6: "\u062F IPv6 \u067E\u062A\u0647", cidrv4: "\u062F IPv4 \u0633\u0627\u062D\u0647", cidrv6: "\u062F IPv6 \u0633\u0627\u062D\u0647", base64: "base64-encoded \u0645\u062A\u0646", base64url: "base64url-encoded \u0645\u062A\u0646", json_string: "JSON \u0645\u062A\u0646", e164: "\u062F E.164 \u0634\u0645\u06D0\u0631\u0647", jwt: "JWT", template_literal: "\u0648\u0631\u0648\u062F\u064A" };
        closure_2 = { nan: "NaN", number: "\u0639\u062F\u062F", array: "\u0627\u0631\u06D0" };
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
                let combined = "\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F instanceof " + code.expected + " \u0648\u0627\u06CC, \u0645\u06AB\u0631 " + tmp48 + " \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648";
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F " + expected + " \u0648\u0627\u06CC, \u0645\u06AB\u0631 " + tmp48 + " \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648";
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F " + closure_2.stringifyPrimitive(code.values[0]) + " \u0648\u0627\u06CC";
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "\u0646\u0627\u0633\u0645 \u0627\u0646\u062A\u062E\u0627\u0628: \u0628\u0627\u06CC\u062F \u06CC\u0648 \u0644\u0647 " + closure_2.joinValues(code.values, "|") + " \u0685\u062E\u0647 \u0648\u0627\u06CC";
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
                  str32 = "\u0627\u0631\u0632\u069A\u062A";
                }
                let str = code.maximum.toString();
                let str39 = tmp27.unit;
                if (str39 == null) {
                  str39 = "\u0639\u0646\u0635\u0631\u0648\u0646\u0647";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "\u0689\u06CC\u0631 \u0644\u0648\u06CC: " + str32 + " \u0628\u0627\u06CC\u062F " + str31 + str + " " + str39 + " \u0648\u0644\u0631\u064A";
              } else {
                let str33 = str32;
                if (str32 == null) {
                  str33 = "\u0627\u0631\u0632\u069A\u062A";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "\u0689\u06CC\u0631 \u0644\u0648\u06CC: " + str33 + " \u0628\u0627\u06CC\u062F " + str31 + code.maximum.toString() + " \u0648\u064A";
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
                let combined3 = "\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: " + origin + " \u0628\u0627\u06CC\u062F " + str23 + str1 + " " + tmp15.unit + " \u0648\u0644\u0631\u064A";
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: " + origin + " \u0628\u0627\u06CC\u062F " + str23 + str1 + " \u0648\u064A";
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = "\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F \"" + code.prefix + "\" \u0633\u0631\u0647 \u067E\u06CC\u0644 \u0634\u064A";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = "\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F \"" + code.suffix + "\" \u0633\u0631\u0647 \u067E\u0627\u06CC \u062A\u0647 \u0648\u0631\u0633\u064A\u0696\u064A";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \"" + code.includes + "\" \u0648\u0644\u0631\u064A";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F " + code.pattern + " \u0633\u0631\u0647 \u0645\u0637\u0627\u0628\u0642\u062A \u0648\u0644\u0631\u064A";
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "" + format + " \u0646\u0627\u0633\u0645 \u062F\u06CC";
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "\u0646\u0627\u0633\u0645 \u0639\u062F\u062F: \u0628\u0627\u06CC\u062F \u062F " + code.divisor + " \u0645\u0636\u0631\u0628 \u0648\u064A";
            case "unrecognized_keys":
              let str5 = "\u06A9\u0644\u06CC\u0689";
              if (code.keys.length > 1) {
                str5 = "\u06A9\u0644\u06CC\u0689\u0648\u0646\u0647";
              }
              const _HermesInternal3 = HermesInternal;
              return "\u0646\u0627\u0633\u0645 " + str5 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "\u0646\u0627\u0633\u0645 \u06A9\u0644\u06CC\u0689 \u067E\u0647 " + code.origin + " \u06A9\u06D0";
            case "invalid_union":
              return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = " \u06A9\u06D0";
              return "\u0646\u0627\u0633\u0645 \u0639\u0646\u0635\u0631 \u067E\u0647 " + code.origin + " \u06A9\u06D0";
            default:
              return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
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