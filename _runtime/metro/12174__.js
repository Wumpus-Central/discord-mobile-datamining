// _runtime/metro/12174__.js
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
          string: { unit: "\u0985\u0995\u09CD\u09B7\u09B0", verb: "\u09A5\u09BE\u0995\u09A4\u09C7 \u09B9\u09AC\u09C7" },
          file: { unit: "\u09AC\u09BE\u0987\u099F", verb: "\u09A5\u09BE\u0995\u09A4\u09C7 \u09B9\u09AC\u09C7" },
          array: { unit: "\u0986\u0987\u099F\u09C7\u09AE", verb: "\u09A5\u09BE\u0995\u09A4\u09C7 \u09B9\u09AC\u09C7" },
          set: { unit: "\u0986\u0987\u099F\u09C7\u09AE", verb: "\u09A5\u09BE\u0995\u09A4\u09C7 \u09B9\u09AC\u09C7" },
          map: {
            unit: "\u098F\u09A8\u09CD\u099F\u09CD\u09B0\u09BF",
            verb: "\u09A5\u09BE\u0995\u09A4\u09C7 \u09B9\u09AC\u09C7",
          },
        };
        closure_1 = {
          regex: "\u0987\u09A8\u09AA\u09C1\u099F",
          email: "\u0987\u09AE\u09C7\u0987\u09B2 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE",
          url: "URL",
          emoji: "\u0987\u09AE\u09CB\u099C\u09BF",
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
          datetime: "ISO \u09A4\u09BE\u09B0\u09BF\u0996 \u0993 \u09B8\u09AE\u09AF\u09BC",
          date: "ISO \u09A4\u09BE\u09B0\u09BF\u0996",
          time: "ISO \u09B8\u09AE\u09AF\u09BC",
          duration: "ISO \u09B8\u09AE\u09AF\u09BC\u0995\u09BE\u09B2",
          ipv4: "IPv4 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE",
          ipv6: "IPv6 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE",
          mac: "MAC \u09A0\u09BF\u0995\u09BE\u09A8\u09BE",
          cidrv4: "IPv4 \u09B0\u09C7\u099E\u09CD\u099C",
          cidrv6: "IPv6 \u09B0\u09C7\u099E\u09CD\u099C",
          base64: "base64-\u098F\u09A8\u0995\u09CB\u09A1\u09C7\u09A1 \u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0982",
          base64url: "base64url-\u098F\u09A8\u0995\u09CB\u09A1\u09C7\u09A1 \u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0982",
          json_string: "JSON \u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0982",
          e164: "E.164 \u09A8\u09AE\u09CD\u09AC\u09B0",
          credit_card:
            "\u0995\u09CD\u09B0\u09C7\u09A1\u09BF\u099F \u0995\u09BE\u09B0\u09CD\u09A1 \u09A8\u09AE\u09CD\u09AC\u09B0",
          currency_code: "\u09AE\u09C1\u09A6\u09CD\u09B0\u09BE \u0995\u09CB\u09A1",
          iban: "IBAN",
          jwt: "JWT",
          template_literal: "\u0987\u09A8\u09AA\u09C1\u099F",
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
                "\u0985\u09AC\u09C8\u09A7 \u0987\u09A8\u09AA\u09C1\u099F: \u09AA\u09CD\u09B0\u09A4\u09CD\u09AF\u09BE\u09B6\u09BF\u09A4 " +
                expected +
                ", \u09AA\u09CD\u09B0\u09BE\u09AA\u09CD\u09A4 " +
                tmp49
              );
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal16 = HermesInternal;
                let combined =
                  "\u0985\u09AC\u09C8\u09A7 \u0987\u09A8\u09AA\u09C1\u099F: \u09AA\u09CD\u09B0\u09A4\u09CD\u09AF\u09BE\u09B6\u09BF\u09A4 " +
                  closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal15 = HermesInternal;
                combined =
                  "\u0985\u09AC\u09C8\u09A7 \u0985\u09AA\u09B6\u09A8: " +
                  closure_2.joinValues(code.values, " | ") +
                  " \u098F\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u098F\u0995\u099F\u09BF \u09AA\u09CD\u09B0\u09A4\u09CD\u09AF\u09BE\u09B6\u09BF\u09A4";
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
                  str36 = "\u09AE\u09BE\u09A8";
                }
                const str1 = code.maximum.toString();
                let str43 = tmp28.unit;
                if (str43 == null) {
                  str43 = "\u098F\u09B2\u09BF\u09AE\u09C7\u09A8\u09CD\u099F";
                }
                const _HermesInternal14 = HermesInternal;
                let combined1 =
                  "\u0985\u09A8\u09C7\u0995 \u09AC\u09A1\u09BC: " +
                  str36 +
                  " " +
                  str35 +
                  str1 +
                  " " +
                  str43 +
                  " \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7";
              } else {
                let str37 = str36;
                if (str36 == null) {
                  str37 = "\u09AE\u09BE\u09A8";
                }
                const _HermesInternal13 = HermesInternal;
                combined1 =
                  "\u0985\u09A8\u09C7\u0995 \u09AC\u09A1\u09BC: " +
                  str37 +
                  " " +
                  str35 +
                  code.maximum.toString() +
                  " \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7";
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
              const str58 = minimum.toString();
              if (tmp16) {
                const _HermesInternal12 = HermesInternal;
                let combined2 =
                  "\u0985\u09A8\u09C7\u0995 \u099B\u09CB\u099F: " +
                  origin +
                  " " +
                  str26 +
                  str58 +
                  " " +
                  tmp16.unit +
                  " \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7";
              } else {
                const _HermesInternal11 = HermesInternal;
                combined2 =
                  "\u0985\u09A8\u09C7\u0995 \u099B\u09CB\u099F: " +
                  origin +
                  " " +
                  str26 +
                  str58 +
                  " \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7";
              }
              return combined2;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal10 = HermesInternal;
                let combined3 =
                  '\u0985\u09AC\u09C8\u09A7 \u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0982: "' +
                  code.prefix +
                  '" \u09A6\u09BF\u09AF\u09BC\u09C7 \u09B6\u09C1\u09B0\u09C1 \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7';
              } else if ("ends_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined3 =
                  '\u0985\u09AC\u09C8\u09A7 \u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0982: "' +
                  code.suffix +
                  '" \u09A6\u09BF\u09AF\u09BC\u09C7 \u09B6\u09C7\u09B7 \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7';
              } else if ("includes" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined3 =
                  '\u0985\u09AC\u09C8\u09A7 \u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0982: "' +
                  code.includes +
                  '" \u0985\u09A8\u09CD\u09A4\u09B0\u09CD\u09AD\u09C1\u0995\u09CD\u09A4 \u09A5\u09BE\u0995\u09A4\u09C7 \u09B9\u09AC\u09C7';
              } else if ("regex" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined3 =
                  "\u0985\u09AC\u09C8\u09A7 \u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0982: " +
                  code.pattern +
                  " \u09AA\u09CD\u09AF\u09BE\u099F\u09BE\u09B0\u09CD\u09A8 \u09AE\u09BF\u09B2\u09A4\u09C7 \u09B9\u09AC\u09C7";
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal6 = HermesInternal;
                combined3 = "\u0985\u09AC\u09C8\u09A7 " + format;
              }
              return combined3;
            case "not_multiple_of":
              const _HermesInternal5 = HermesInternal;
              return (
                "\u0985\u09AC\u09C8\u09A7 \u09A8\u09AE\u09CD\u09AC\u09B0: " +
                code.divisor +
                " \u098F\u09B0 \u0997\u09C1\u09A3\u09BF\u09A4\u0995 \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7"
              );
            case "unrecognized_keys":
              let str9 = "";
              if (code.keys.length > 1) {
                str9 = "\u0997\u09C1\u09B2\u09CB";
              }
              const _HermesInternal4 = HermesInternal;
              return (
                "\u0985\u099A\u09C7\u09A8\u09BE \u0995\u09C0" + str9 + ": " + closure_2.joinValues(code.keys, ", ")
              );
            case "invalid_key":
              const _HermesInternal3 = HermesInternal;
              return "" + code.origin + " \u098F \u0985\u09AC\u09C8\u09A7 \u0995\u09C0";
            case "invalid_union":
              let str4 = "\u0985\u09AC\u09C8\u09A7 \u0987\u09A8\u09AA\u09C1\u099F";
              if (code.options) {
                const _Array = Array;
                str4 = "\u0985\u09AC\u09C8\u09A7 \u0987\u09A8\u09AA\u09C1\u099F";
                if (Array.isArray(code.options)) {
                  str4 = "\u0985\u09AC\u09C8\u09A7 \u0987\u09A8\u09AA\u09C1\u099F";
                  if (code.options.length > 0) {
                    const options = code.options;
                    const mapped = options.map((item) => "'" + item + "'");
                    const _HermesInternal2 = HermesInternal;
                    str4 =
                      "\u0985\u09AC\u09C8\u09A7 \u09A1\u09BF\u09B8\u0995\u09CD\u09B0\u09BF\u09AE\u09BF\u09A8\u09C7\u099F\u09B0 \u09AE\u09BE\u09A8\u0964 \u09AA\u09CD\u09B0\u09A4\u09CD\u09AF\u09BE\u09B6\u09BF\u09A4 " +
                      mapped.join(" | ");
                  }
                }
              }
              return str4;
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              return "" + code.origin + " \u098F \u0985\u09AC\u09C8\u09A7 \u09AE\u09BE\u09A8";
            default:
              return "\u0985\u09AC\u09C8\u09A7 \u0987\u09A8\u09AA\u09C1\u099F";
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
