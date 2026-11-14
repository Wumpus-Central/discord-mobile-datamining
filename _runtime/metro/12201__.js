// _runtime/metro/12201__.js
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
          string: {
            unit: "\u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0C97\u0CB3\u0CC1",
            verb: "\u0CB9\u0CCA\u0C82\u0CA6\u0CB2\u0CC1",
          },
          file: {
            unit: "\u0CAC\u0CC8\u0C9F\u0CCD\u200C\u0C97\u0CB3\u0CC1",
            verb: "\u0CB9\u0CCA\u0C82\u0CA6\u0CB2\u0CC1",
          },
          array: {
            unit: "\u0CB5\u0CB8\u0CCD\u0CA4\u0CC1\u0C97\u0CB3\u0CC1",
            verb: "\u0CB9\u0CCA\u0C82\u0CA6\u0CB2\u0CC1",
          },
          set: {
            unit: "\u0CB5\u0CB8\u0CCD\u0CA4\u0CC1\u0C97\u0CB3\u0CC1",
            verb: "\u0CB9\u0CCA\u0C82\u0CA6\u0CB2\u0CC1",
          },
          map: { unit: "entries", verb: "\u0CB9\u0CCA\u0C82\u0CA6\u0CB2\u0CC1" },
        };
        closure_1 = {
          regex: "\u0C87\u0CA8\u0CCD\u0CAA\u0CC1\u0C9F\u0CCD",
          email: "email \u0CB5\u0CBF\u0CB3\u0CBE\u0CB8",
          url: "URL",
          emoji: "emoji",
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
          datetime: "ISO \u0CA6\u0CBF\u0CA8\u0CBE\u0C82\u0C95\u0CA6 \u0CB8\u0CAE\u0CAF",
          date: "ISO \u0CA6\u0CBF\u0CA8\u0CBE\u0C82\u0C95",
          time: "ISO \u0CB8\u0CAE\u0CAF",
          duration: "ISO \u0C85\u0CB5\u0CA7\u0CBF",
          ipv4: "IPv4 \u0CB5\u0CBF\u0CB3\u0CBE\u0CB8",
          ipv6: "IPv6 \u0CB5\u0CBF\u0CB3\u0CBE\u0CB8",
          mac: "MAC \u0CB5\u0CBF\u0CB3\u0CBE\u0CB8",
          cidrv4: "IPv4 \u0CB5\u0CCD\u0CAF\u0CBE\u0CAA\u0CCD\u0CA4\u0CBF\u0CAF",
          cidrv6: "IPv6 \u0CB5\u0CCD\u0CAF\u0CBE\u0CAA\u0CCD\u0CA4\u0CBF\u0CAF",
          base64: "base64-encoded\u0CB8\u0CCD\u0C9F\u0CCD\u0CB0\u0CBF\u0C82\u0C97\u0CCD",
          base64url: "base64url-encoded\u0CB8\u0CCD\u0C9F\u0CCD\u0CB0\u0CBF\u0C82\u0C97\u0CCD",
          json_string: "JSON\u0CB8\u0CCD\u0C9F\u0CCD\u0CB0\u0CBF\u0C82\u0C97\u0CCD",
          e164: "E.164 \u0CB8\u0C82\u0C96\u0CCD\u0CAF\u0CC6",
          credit_card:
            "\u0C95\u0CCD\u0CB0\u0CC6\u0CA1\u0CBF\u0C9F\u0CCD \u0C95\u0CBE\u0CB0\u0CCD\u0CA1\u0CCD \u0CB8\u0C82\u0C96\u0CCD\u0CAF\u0CC6",
          currency_code: "\u0C95\u0CB0\u0CC6\u0CA8\u0CCD\u0CB8\u0CBF \u0C95\u0CCB\u0CA1\u0CCD",
          iban: "IBAN",
          jwt: "JWT",
          template_literal: "\u0C87\u0CA8\u0CCD\u0CAA\u0CC1\u0C9F\u0CCD",
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
              let tmp49 = closure_2[parsedTypeResult];
              if (tmp49 == null) {
                tmp49 = parsedTypeResult;
              }
              const _HermesInternal17 = HermesInternal;
              return (
                "\u0C85\u0CAE\u0CBE\u0CA8\u0CCD\u0CAF \u0C87\u0CA8\u0CCD\u200C\u0CAA\u0CC1\u0C9F\u0CCD: \u0CA8\u0CBF\u0CB0\u0CC0\u0C95\u0CCD\u0CB7\u0CBF\u0CB8\u0CB2\u0CBE\u0C97\u0CBF\u0CA6\u0CC6 " +
                expected +
                ", \u0CB8\u0CCD\u0CB5\u0CC0\u0C95\u0CB0\u0CBF\u0CB8\u0CBF\u0CA6\u0CA8\u0CC1 " +
                tmp49
              );
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal16 = HermesInternal;
                let combined =
                  "\u0C85\u0CAE\u0CBE\u0CA8\u0CCD\u0CAF \u0C87\u0CA8\u0CCD\u200C\u0CAA\u0CC1\u0C9F\u0CCD: \u0CA8\u0CBF\u0CB0\u0CC0\u0C95\u0CCD\u0CB7\u0CBF\u0CB8\u0CB2\u0CBE\u0C97\u0CBF\u0CA6\u0CC6 " +
                  closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal15 = HermesInternal;
                combined =
                  "\u0C85\u0CAE\u0CBE\u0CA8\u0CCD\u0CAF \u0C86\u0CAF\u0CCD\u0C95\u0CC6: \u0C87\u0CB5\u0CC1\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF \u0C92\u0C82\u0CA6\u0CA8\u0CCD\u0CA8\u0CC1 \u0CA8\u0CBF\u0CB0\u0CC0\u0C95\u0CCD\u0CB7\u0CBF\u0CB8\u0CB2\u0CBE\u0C97\u0CBF\u0CA6\u0CC6 " +
                  closure_2.joinValues(code.values, "|");
              }
              return combined;
            case "too_big":
              let str28 = "<";
              if (code.inclusive) {
                str28 = "<=";
              }
              let tmp28 = obj2[code.origin];
              if (tmp28 == null) {
                tmp28 = null;
              }
              let str29 = code.origin;
              if (tmp28) {
                if (str29 == null) {
                  str29 = "value";
                }
                const str1 = code.maximum.toString();
                let str35 = tmp28.unit;
                if (str35 == null) {
                  str35 = "\u0C85\u0C82\u0CB6\u0C97\u0CB3\u0CC1";
                }
                const _HermesInternal14 = HermesInternal;
                let combined1 =
                  "\u0CA4\u0CC1\u0C82\u0CAC\u0CBE \u0CA6\u0CCA\u0CA1\u0CCD\u0CA1\u0CA6\u0CC1: \u0CA8\u0CBF\u0CB0\u0CC0\u0C95\u0CCD\u0CB7\u0CBF\u0CB8\u0CB2\u0CBE\u0C97\u0CBF\u0CA6\u0CC6 " +
                  str29 +
                  " \u0CB9\u0CCA\u0C82\u0CA6\u0CB2\u0CC1 " +
                  str28 +
                  str1 +
                  " " +
                  str35;
              } else {
                let str30 = str29;
                if (str29 == null) {
                  str30 = "value";
                }
                const _HermesInternal13 = HermesInternal;
                combined1 =
                  "\u0CA4\u0CC1\u0C82\u0CAC\u0CBE \u0CA6\u0CCA\u0CA1\u0CCD\u0CA1\u0CA6\u0CC1: \u0CA8\u0CBF\u0CB0\u0CC0\u0C95\u0CCD\u0CB7\u0CBF\u0CB8\u0CB2\u0CBE\u0C97\u0CBF\u0CA6\u0CC6 " +
                  str30 +
                  " \u0C8E\u0C82\u0CA6\u0CC1 " +
                  str28 +
                  code.maximum.toString();
              }
              return combined1;
            case "too_small":
              let str22 = ">";
              if (code.inclusive) {
                str22 = ">=";
              }
              let tmp16 = obj2[code.origin];
              if (tmp16 == null) {
                tmp16 = null;
              }
              ({ origin, minimum } = code);
              const str47 = minimum.toString();
              if (tmp16) {
                const _HermesInternal12 = HermesInternal;
                let combined2 =
                  "\u0CA4\u0CC1\u0C82\u0CAC\u0CBE \u0C9A\u0CBF\u0C95\u0CCD\u0C95\u0CA6\u0CC1: \u0CA8\u0CBF\u0CB0\u0CC0\u0C95\u0CCD\u0CB7\u0CBF\u0CB8\u0CB2\u0CBE\u0C97\u0CBF\u0CA6\u0CC6 " +
                  origin +
                  " \u0CB9\u0CCA\u0C82\u0CA6\u0CB2\u0CC1 " +
                  str22 +
                  str47 +
                  " " +
                  tmp16.unit;
              } else {
                const _HermesInternal11 = HermesInternal;
                combined2 =
                  "\u0CA4\u0CC1\u0C82\u0CAC\u0CBE \u0C9A\u0CBF\u0C95\u0CCD\u0C95\u0CA6\u0CC1: \u0CA8\u0CBF\u0CB0\u0CC0\u0C95\u0CCD\u0CB7\u0CBF\u0CB8\u0CB2\u0CBE\u0C97\u0CBF\u0CA6\u0CC6 " +
                  origin +
                  " \u0C8E\u0C82\u0CA6\u0CC1 " +
                  str22 +
                  str47;
              }
              return combined2;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal10 = HermesInternal;
                let combined3 =
                  '\u0C85\u0CAE\u0CBE\u0CA8\u0CCD\u0CAF\u0CB5\u0CBE\u0CA6 \u0CB8\u0CCD\u0C9F\u0CCD\u0CB0\u0CBF\u0C82\u0C97\u0CCD: \u0C87\u0CA6\u0CB0\u0CCA\u0C82\u0CA6\u0CBF\u0C97\u0CC6 \u0CAA\u0CCD\u0CB0\u0CBE\u0CB0\u0C82\u0CAD\u0CBF\u0CB8\u0CAC\u0CC7\u0C95\u0CC1 "' +
                  code.prefix +
                  '"';
              } else if ("ends_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined3 =
                  '\u0C85\u0CAE\u0CBE\u0CA8\u0CCD\u0CAF\u0CB5\u0CBE\u0CA6 \u0CB8\u0CCD\u0C9F\u0CCD\u0CB0\u0CBF\u0C82\u0C97\u0CCD: \u0C87\u0CA6\u0CB0\u0CCA\u0C82\u0CA6\u0CBF\u0C97\u0CC6 \u0C95\u0CCA\u0CA8\u0CC6\u0C97\u0CCA\u0CB3\u0CCD\u0CB3\u0CAC\u0CC7\u0C95\u0CC1 "' +
                  code.suffix +
                  '"';
              } else if ("includes" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined3 =
                  '\u0C85\u0CAE\u0CBE\u0CA8\u0CCD\u0CAF \u0CB8\u0CCD\u0C9F\u0CCD\u0CB0\u0CBF\u0C82\u0C97\u0CCD: \u0C92\u0CB3\u0C97\u0CCA\u0C82\u0CA1\u0CBF\u0CB0\u0CAC\u0CC7\u0C95\u0CC1 "' +
                  code.includes +
                  '"';
              } else if ("regex" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined3 =
                  "\u0C85\u0CAE\u0CBE\u0CA8\u0CCD\u0CAF\u0CB5\u0CBE\u0CA6 \u0CB8\u0CCD\u0C9F\u0CCD\u0CB0\u0CBF\u0C82\u0C97\u0CCD: \u0CAE\u0CBE\u0CA6\u0CB0\u0CBF\u0C97\u0CC6 \u0CB9\u0CCA\u0C82\u0CA6\u0CBF\u0C95\u0CC6\u0CAF\u0CBE\u0C97\u0CAC\u0CC7\u0C95\u0CC1 " +
                  code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal6 = HermesInternal;
                combined3 = "\u0C85\u0CAE\u0CBE\u0CA8\u0CCD\u0CAF " + format;
              }
              return combined3;
            case "not_multiple_of":
              const _HermesInternal5 = HermesInternal;
              return (
                "\u0C85\u0CAE\u0CBE\u0CA8\u0CCD\u0CAF \u0CB8\u0C82\u0C96\u0CCD\u0CAF\u0CC6: \u0CAC\u0CB9\u0CC1\u0CB8\u0C82\u0C96\u0CCD\u0CAF\u0CC6\u0CAF\u0CBE\u0C97\u0CBF\u0CB0\u0CAC\u0CC7\u0C95\u0CC1 " +
                code.divisor
              );
            case "unrecognized_keys":
              let str7 = "";
              if (code.keys.length > 1) {
                str7 = "s";
              }
              const _HermesInternal4 = HermesInternal;
              return (
                "\u0C97\u0CC1\u0CB0\u0CC1\u0CA4\u0CBF\u0CB8\u0CB2\u0CBE\u0C97\u0CA6 \u0C95\u0CC0 " +
                str7 +
                ": " +
                closure_2.joinValues(code.keys, ", ")
              );
            case "invalid_key":
              const _HermesInternal3 = HermesInternal;
              return (
                "\u0C85\u0CAE\u0CBE\u0CA8\u0CCD\u0CAF\u0CB5\u0CBE\u0CA6 \u0C95\u0CC0 \u0C87\u0CA8\u0CCD " + code.origin
              );
            case "invalid_union":
              let str3 = "\u0C85\u0CAE\u0CBE\u0CA8\u0CCD\u0CAF \u0C87\u0CA8\u0CCD\u200C\u0CAA\u0CC1\u0C9F\u0CCD";
              if (code.options) {
                const _Array = Array;
                str3 = "\u0C85\u0CAE\u0CBE\u0CA8\u0CCD\u0CAF \u0C87\u0CA8\u0CCD\u200C\u0CAA\u0CC1\u0C9F\u0CCD";
                if (Array.isArray(code.options)) {
                  str3 = "\u0C85\u0CAE\u0CBE\u0CA8\u0CCD\u0CAF \u0C87\u0CA8\u0CCD\u200C\u0CAA\u0CC1\u0C9F\u0CCD";
                  if (code.options.length > 0) {
                    const options = code.options;
                    const mapped = options.map((item) => "'" + item + "'");
                    const _HermesInternal2 = HermesInternal;
                    str3 =
                      "\u0C85\u0CAE\u0CBE\u0CA8\u0CCD\u0CAF \u0CA4\u0CBE\u0CB0\u0CA4\u0CAE\u0CCD\u0CAF \u0CAE\u0CCC\u0CB2\u0CCD\u0CAF. \u0CA8\u0CBF\u0CB0\u0CC0\u0C95\u0CCD\u0CB7\u0CBF\u0CB8\u0CB2\u0CBE\u0C97\u0CBF\u0CA6\u0CC6 " +
                      mapped.join(" | ");
                  }
                }
              }
              return str3;
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              return (
                "\u0CB0\u0CB2\u0CCD\u0CB2\u0CBF \u0C85\u0CAE\u0CBE\u0CA8\u0CCD\u0CAF \u0CAE\u0CCC\u0CB2\u0CCD\u0CAF " +
                code.origin
              );
            default:
              return "\u0C85\u0CAE\u0CBE\u0CA8\u0CCD\u0CAF \u0C87\u0CA8\u0CCD\u200C\u0CAA\u0CC1\u0C9F\u0CCD";
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
