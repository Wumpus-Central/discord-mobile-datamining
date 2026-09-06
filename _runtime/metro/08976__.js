// _runtime/metro/08976__.js
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
          string: { unit: "tegn", verb: "\u00E5 ha" },
          file: { unit: "bytes", verb: "\u00E5 ha" },
          array: { unit: "elementer", verb: "\u00E5 inneholde" },
          set: { unit: "elementer", verb: "\u00E5 inneholde" },
        };
        closure_1 = {
          regex: "input",
          email: "e-postadresse",
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
          datetime: "ISO dato- og klokkeslett",
          date: "ISO-dato",
          time: "ISO-klokkeslett",
          duration: "ISO-varighet",
          ipv4: "IPv4-omr\u00E5de",
          ipv6: "IPv6-omr\u00E5de",
          cidrv4: "IPv4-spekter",
          cidrv6: "IPv6-spekter",
          base64: "base64-enkodet streng",
          base64url: "base64url-enkodet streng",
          json_string: "JSON-streng",
          e164: "E.164-nummer",
          jwt: "JWT",
          template_literal: "input",
        };
        closure_2 = { nan: "NaN", number: "tall", array: "liste" };
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
                let combined = "Ugyldig input: forventet instanceof " + code.expected + ", fikk " + tmp48;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Ugyldig input: forventet " + expected + ", fikk " + tmp48;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "Ugyldig verdi: forventet " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Ugyldig valg: forventet en av " + closure_2.joinValues(code.values, "|");
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
                  str25 = "value";
                }
                let str = code.maximum.toString();
                let str31 = tmp27.unit;
                if (str31 == null) {
                  str31 = "elementer";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "For stor(t): forventet " + str25 + " til \u00E5 ha " + str24 + str + " " + str31;
              } else {
                let str26 = str25;
                if (str25 == null) {
                  str26 = "value";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "For stor(t): forventet " + str26 + " til \u00E5 ha " + str24 + code.maximum.toString();
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
                let combined3 =
                  "For lite(n): forventet " + origin + " til \u00E5 ha " + str18 + str1 + " " + tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "For lite(n): forventet " + origin + " til \u00E5 ha " + str18 + str1;
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = 'Ugyldig streng: m\u00E5 starte med "' + code.prefix + '"';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = 'Ugyldig streng: m\u00E5 ende med "' + code.suffix + '"';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = 'Ugyldig streng: m\u00E5 inneholde "' + code.includes + '"';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Ugyldig streng: m\u00E5 matche m\u00F8nsteret " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "Ugyldig " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "Ugyldig tall: m\u00E5 v\u00E6re et multiplum av " + code.divisor;
            case "unrecognized_keys":
              let str3 = "Ukjent n\u00F8kkel";
              if (code.keys.length > 1) {
                str3 = "Ukjente n\u00F8kler";
              }
              const _HermesInternal3 = HermesInternal;
              return "" + str3 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "Ugyldig n\u00F8kkel i " + code.origin;
            case "invalid_union":
              return "Ugyldig input";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = "Ugyldig verdi i ";
              return "Ugyldig verdi i " + code.origin;
            default:
              return "Ugyldig input";
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
