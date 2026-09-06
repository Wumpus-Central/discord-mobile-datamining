// _runtime/metro/08957__.js
import _mod8939 from "08939__.js";

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
        obj = {
          string: {
            unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631",
            verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
          },
          file: { unit: "\u0628\u0627\u06CC\u062A", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
          array: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
          set: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
        };
        closure_1 = {
          regex: "\u0648\u0631\u0648\u062F\u06CC",
          email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
          url: "URL",
          emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
          date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648",
          time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
          duration: "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
          ipv4: "IPv4 \u0622\u062F\u0631\u0633",
          ipv6: "IPv6 \u0622\u062F\u0631\u0633",
          cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647",
          cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647",
          base64: "base64-encoded \u0631\u0634\u062A\u0647",
          base64url: "base64url-encoded \u0631\u0634\u062A\u0647",
          json_string: "JSON \u0631\u0634\u062A\u0647",
          e164: "E.164 \u0639\u062F\u062F",
          jwt: "JWT",
          template_literal: "\u0648\u0631\u0648\u062F\u06CC",
        };
        closure_2 = { nan: "NaN", number: "\u0639\u062F\u062F", array: "\u0622\u0631\u0627\u06CC\u0647" };
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
                let combined =
                  "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A instanceof " +
                  code.expected +
                  " \u0645\u06CC\u200C\u0628\u0648\u062F\u060C " +
                  tmp48 +
                  " \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F";
              } else {
                const _HermesInternal16 = HermesInternal;
                combined =
                  "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A " +
                  expected +
                  " \u0645\u06CC\u200C\u0628\u0648\u062F\u060C " +
                  tmp48 +
                  " \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F";
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 =
                  "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A " +
                  closure_2.stringifyPrimitive(code.values[0]) +
                  " \u0645\u06CC\u200C\u0628\u0648\u062F";
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 =
                  "\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 " +
                  closure_2.joinValues(code.values, "|") +
                  " \u0645\u06CC\u200C\u0628\u0648\u062F";
              }
              return combined1;
            case "too_big":
              let str29 = "<";
              if (code.inclusive) {
                str29 = "<=";
              }
              let tmp27 = obj[code.origin];
              if (tmp27 == null) {
                tmp27 = null;
              }
              let str30 = code.origin;
              if (tmp27) {
                if (str30 == null) {
                  str30 = "\u0645\u0642\u062F\u0627\u0631";
                }
                let str = code.maximum.toString();
                let str37 = tmp27.unit;
                if (str37 == null) {
                  str37 = "\u0639\u0646\u0635\u0631";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 =
                  "\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: " +
                  str30 +
                  " \u0628\u0627\u06CC\u062F " +
                  str29 +
                  str +
                  " " +
                  str37 +
                  " \u0628\u0627\u0634\u062F";
              } else {
                let str31 = str30;
                if (str30 == null) {
                  str31 = "\u0645\u0642\u062F\u0627\u0631";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 =
                  "\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: " +
                  str31 +
                  " \u0628\u0627\u06CC\u062F " +
                  str29 +
                  code.maximum.toString() +
                  " \u0628\u0627\u0634\u062F";
              }
              return combined2;
            case "too_small":
              let str21 = ">";
              if (code.inclusive) {
                str21 = ">=";
              }
              let tmp15 = obj[code.origin];
              if (tmp15 == null) {
                tmp15 = null;
              }
              ({ origin, minimum } = code);
              const str1 = minimum.toString();
              if (tmp15) {
                const _HermesInternal11 = HermesInternal;
                let combined3 =
                  "\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: " +
                  origin +
                  " \u0628\u0627\u06CC\u062F " +
                  str21 +
                  str1 +
                  " " +
                  tmp15.unit +
                  " \u0628\u0627\u0634\u062F";
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 =
                  "\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: " +
                  origin +
                  " \u0628\u0627\u06CC\u062F " +
                  str21 +
                  str1 +
                  " \u0628\u0627\u0634\u062F";
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 =
                  '\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "' +
                  code.prefix +
                  '" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 =
                  '\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "' +
                  code.suffix +
                  '" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 =
                  '\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "' +
                  code.includes +
                  '" \u0628\u0627\u0634\u062F';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 =
                  "\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC " +
                  code.pattern +
                  " \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F";
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "" + format + " \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return (
                "\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 " +
                code.divisor +
                " \u0628\u0627\u0634\u062F"
              );
            case "unrecognized_keys":
              let str3 = "";
              if (code.keys.length > 1) {
                str3 = "\u0647\u0627\u06CC";
              }
              const _HermesInternal3 = HermesInternal;
              return (
                "\u06A9\u0644\u06CC\u062F" +
                str3 +
                " \u0646\u0627\u0634\u0646\u0627\u0633: " +
                closure_2.joinValues(code.keys, ", ")
              );
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 " + code.origin;
            case "invalid_union":
              return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = "\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ";
              return (
                "\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 " + code.origin
              );
            default:
              return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
          }
        };
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let closure_2 = fn(_mod8939);
    function error() {}
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
