// _runtime/metro/12206__.js
import _mod12160 from "12160__.js";

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
        const obj2 = {
          string: { unit: "\u0905\u0915\u094D\u0937\u0930", verb: "\u0939\u0941\u0928\u0941\u092A\u0930\u094D\u091B" },
          file: { unit: "\u092C\u093E\u0907\u091F", verb: "\u0939\u0941\u0928\u0941\u092A\u0930\u094D\u091B" },
          array: { unit: "\u0924\u0924\u094D\u0935", verb: "\u0939\u0941\u0928\u0941\u092A\u0930\u094D\u091B" },
          set: { unit: "\u0924\u0924\u094D\u0935", verb: "\u0939\u0941\u0928\u0941\u092A\u0930\u094D\u091B" },
          map: {
            unit: "\u092A\u094D\u0930\u0935\u093F\u0937\u094D\u091F\u093F",
            verb: "\u0939\u0941\u0928\u0941\u092A\u0930\u094D\u091B",
          },
        };
        closure_1 = {
          regex: "\u0907\u0928\u092A\u0941\u091F",
          email: "\u0907\u092E\u0947\u0932 \u0920\u0947\u0917\u093E\u0928\u093E",
          url: "URL",
          emoji: "\u0907\u092E\u094B\u091C\u0940",
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
          datetime: "ISO \u092E\u093F\u0924\u093F \u0930 \u0938\u092E\u092F",
          date: "ISO \u092E\u093F\u0924\u093F",
          time: "ISO \u0938\u092E\u092F",
          duration: "ISO \u0905\u0935\u0927\u093F",
          ipv4: "IPv4 \u0920\u0947\u0917\u093E\u0928\u093E",
          ipv6: "IPv6 \u0920\u0947\u0917\u093E\u0928\u093E",
          mac: "MAC \u0920\u0947\u0917\u093E\u0928\u093E",
          cidrv4: "IPv4 \u0926\u093E\u092F\u0930\u093E",
          cidrv6: "IPv6 \u0926\u093E\u092F\u0930\u093E",
          base64:
            "base64-\u0907\u0928\u094D\u0915\u094B\u0921 \u0917\u0930\u093F\u090F\u0915\u094B \u0938\u094D\u091F\u094D\u0930\u093F\u0919",
          base64url:
            "base64url-\u0907\u0928\u094D\u0915\u094B\u0921 \u0917\u0930\u093F\u090F\u0915\u094B \u0938\u094D\u091F\u094D\u0930\u093F\u0919",
          json_string: "JSON \u0938\u094D\u091F\u094D\u0930\u093F\u0919",
          e164: "E.164 \u0928\u092E\u094D\u092C\u0930",
          credit_card:
            "\u0915\u094D\u0930\u0947\u0921\u093F\u091F \u0915\u093E\u0930\u094D\u0921 \u0928\u092E\u094D\u092C\u0930",
          currency_code: "\u092E\u0941\u0926\u094D\u0930\u093E \u0915\u094B\u0921",
          iban: "IBAN",
          jwt: "JWT",
          template_literal: "\u0907\u0928\u092A\u0941\u091F",
        };
        closure_2 = { nan: "NaN" };
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
              return (
                "\u0905\u092E\u093E\u0928\u094D\u092F \u0907\u0928\u092A\u0941\u091F: \u0905\u092A\u0947\u0915\u094D\u0937\u093F\u0924 " +
                expected +
                ", \u092A\u094D\u0930\u093E\u092A\u094D\u0924 " +
                tmp46
              );
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal16 = HermesInternal;
                let combined =
                  "\u0905\u092E\u093E\u0928\u094D\u092F \u0907\u0928\u092A\u0941\u091F: \u0905\u092A\u0947\u0915\u094D\u0937\u093F\u0924 " +
                  closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal15 = HermesInternal;
                combined =
                  "\u0905\u092E\u093E\u0928\u094D\u092F \u0935\u093F\u0915\u0932\u094D\u092A: \u0905\u092A\u0947\u0915\u094D\u0937\u093F\u0924 \u092E\u093E\u0928\u0939\u0930\u0942 \u092E\u0927\u094D\u092F\u0947 \u090F\u0915 " +
                  closure_2.joinValues(code.values, "|");
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
                  str36 = "\u092E\u093E\u0928";
                }
                const _HermesInternal14 = HermesInternal;
                let combined1 =
                  "\u0927\u0947\u0930\u0948 \u0920\u0942\u0932\u094B: " +
                  str36 +
                  " \u092E\u093E " +
                  str35 +
                  code.maximum.toString() +
                  " " +
                  tmp28.unit +
                  " " +
                  tmp28.verb;
              } else {
                let str37 = str36;
                if (str36 == null) {
                  str37 = "\u092E\u093E\u0928";
                }
                const _HermesInternal13 = HermesInternal;
                combined1 =
                  "\u0927\u0947\u0930\u0948 \u0920\u0942\u0932\u094B: " +
                  str37 +
                  " " +
                  str35 +
                  code.maximum.toString() +
                  " \u0939\u0941\u0928\u0941\u092A\u0930\u094D\u091B";
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
                let combined2 =
                  "\u0927\u0947\u0930\u0948 \u0938\u093E\u0928\u094B: " +
                  origin +
                  " \u092E\u093E " +
                  str26 +
                  str1 +
                  " " +
                  tmp16.unit +
                  " " +
                  tmp16.verb;
              } else {
                const _HermesInternal11 = HermesInternal;
                combined2 =
                  "\u0927\u0947\u0930\u0948 \u0938\u093E\u0928\u094B: " +
                  origin +
                  " " +
                  str26 +
                  str1 +
                  " \u0939\u0941\u0928\u0941\u092A\u0930\u094D\u091B";
              }
              return combined2;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal10 = HermesInternal;
                let combined3 =
                  '\u0905\u092E\u093E\u0928\u094D\u092F \u0938\u094D\u091F\u094D\u0930\u093F\u0919: "' +
                  code.prefix +
                  '" \u092C\u093E\u091F \u0938\u0941\u0930\u0941 \u0939\u0941\u0928\u0941\u092A\u0930\u094D\u091B';
              } else if ("ends_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined3 =
                  '\u0905\u092E\u093E\u0928\u094D\u092F \u0938\u094D\u091F\u094D\u0930\u093F\u0919: "' +
                  code.suffix +
                  '" \u092E\u093E \u0938\u092E\u093E\u092A\u094D\u0924 \u0939\u0941\u0928\u0941\u092A\u0930\u094D\u091B';
              } else if ("includes" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined3 =
                  '\u0905\u092E\u093E\u0928\u094D\u092F \u0938\u094D\u091F\u094D\u0930\u093F\u0919: "' +
                  code.includes +
                  '" \u0938\u092E\u093E\u0935\u0947\u0936 \u0939\u0941\u0928\u0941\u092A\u0930\u094D\u091B';
              } else if ("regex" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined3 =
                  "\u0905\u092E\u093E\u0928\u094D\u092F \u0938\u094D\u091F\u094D\u0930\u093F\u0919: \u0922\u093E\u0901\u091A\u093E " +
                  code.pattern +
                  " \u0938\u0901\u0917 \u092E\u0947\u0932 \u0916\u093E\u0928\u0941\u092A\u0930\u094D\u091B";
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal6 = HermesInternal;
                combined3 = "\u0905\u092E\u093E\u0928\u094D\u092F " + format;
              }
              return combined3;
            case "not_multiple_of":
              const _HermesInternal5 = HermesInternal;
              return (
                "\u0905\u092E\u093E\u0928\u094D\u092F \u0938\u0902\u0916\u094D\u092F\u093E: " +
                code.divisor +
                " \u0915\u094B \u0917\u0941\u0923\u091C \u0939\u0941\u0928\u0941\u092A\u0930\u094D\u091B"
              );
            case "unrecognized_keys":
              let str9 = "";
              if (code.keys.length > 1) {
                str9 = "\u0939\u0930\u0942";
              }
              const _HermesInternal4 = HermesInternal;
              return (
                "\u0905\u092A\u0930\u093F\u091A\u093F\u0924 \u0915\u0941\u091E\u094D\u091C\u0940" +
                str9 +
                ": " +
                closure_2.joinValues(code.keys, ", ")
              );
            case "invalid_key":
              const _HermesInternal3 = HermesInternal;
              return (
                "\u0905\u092E\u093E\u0928\u094D\u092F \u0915\u0941\u091E\u094D\u091C\u0940: " +
                code.origin +
                " \u092E\u093E"
              );
            case "invalid_union":
              let str4 = "\u0905\u092E\u093E\u0928\u094D\u092F \u0907\u0928\u092A\u0941\u091F";
              if (code.options) {
                const _Array = Array;
                str4 = "\u0905\u092E\u093E\u0928\u094D\u092F \u0907\u0928\u092A\u0941\u091F";
                if (Array.isArray(code.options)) {
                  str4 = "\u0905\u092E\u093E\u0928\u094D\u092F \u0907\u0928\u092A\u0941\u091F";
                  if (code.options.length > 0) {
                    const options = code.options;
                    const mapped = options.map((item) => "'" + item + "'");
                    const _HermesInternal2 = HermesInternal;
                    str4 =
                      "\u0905\u092E\u093E\u0928\u094D\u092F \u0921\u093F\u0938\u094D\u0915\u094D\u0930\u093F\u092E\u093F\u0928\u0947\u091F\u0930 \u092E\u093E\u0928: \u0905\u092A\u0947\u0915\u094D\u0937\u093F\u0924 " +
                      mapped.join(" | ");
                  }
                }
              }
              return str4;
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              return "\u0905\u092E\u093E\u0928\u094D\u092F \u092E\u093E\u0928: " + code.origin + " \u092E\u093E";
            default:
              return "\u0905\u092E\u093E\u0928\u094D\u092F \u0907\u0928\u092A\u0941\u091F";
          }
        };
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let closure_2 = fn(_mod12160);
    function error() {}
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
