// _runtime/metro/08975__.js
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
          string: { unit: "tekens", verb: "heeft" },
          file: { unit: "bytes", verb: "heeft" },
          array: { unit: "elementen", verb: "heeft" },
          set: { unit: "elementen", verb: "heeft" },
        };
        closure_1 = {
          regex: "invoer",
          email: "emailadres",
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
          datetime: "ISO datum en tijd",
          date: "ISO datum",
          time: "ISO tijd",
          duration: "ISO duur",
          ipv4: "IPv4-adres",
          ipv6: "IPv6-adres",
          cidrv4: "IPv4-bereik",
          cidrv6: "IPv6-bereik",
          base64: "base64-gecodeerde tekst",
          base64url: "base64 URL-gecodeerde tekst",
          json_string: "JSON string",
          e164: "E.164-nummer",
          jwt: "JWT",
          template_literal: "invoer",
        };
        closure_2 = { nan: "NaN", number: "getal" };
        obj.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp52 = closure_2[parsedTypeResult];
              if (tmp52 == null) {
                tmp52 = parsedTypeResult;
              }
              obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined = "Ongeldige invoer: verwacht instanceof " + code.expected + ", ontving " + tmp52;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Ongeldige invoer: verwacht " + expected + ", ontving " + tmp52;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "Ongeldige invoer: verwacht " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Ongeldige optie: verwacht \u00E9\u00E9n van " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str34 = "<";
              if (code.inclusive) {
                str34 = "<=";
              }
              let tmp29 = obj[code.origin];
              if (tmp29 == null) {
                tmp29 = null;
              }
              let str35 = "laat";
              if ("date" !== code.origin) {
                let str37 = "groot";
                if ("string" === code.origin) {
                  str37 = "lang";
                }
                str35 = str37;
              }
              let str39 = code.origin;
              if (tmp29) {
                if (str39 == null) {
                  str39 = "waarde";
                }
                let str = code.maximum.toString();
                let str47 = tmp29.unit;
                if (str47 == null) {
                  str47 = "elementen";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 =
                  "Te " + str35 + ": verwacht dat " + str39 + " " + str34 + str + " " + str47 + " " + tmp29.verb;
              } else {
                let str40 = str39;
                if (str39 == null) {
                  str40 = "waarde";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "Te " + str35 + ": verwacht dat " + str40 + " " + str34 + code.maximum.toString() + " is";
              }
              return combined2;
            case "too_small":
              let str19 = ">";
              if (code.inclusive) {
                str19 = ">=";
              }
              let tmp15 = obj[code.origin];
              if (tmp15 == null) {
                tmp15 = null;
              }
              let str20 = "vroeg";
              if ("date" !== code.origin) {
                let str22 = "klein";
                if ("string" === code.origin) {
                  str22 = "kort";
                }
                str20 = str22;
              }
              ({ origin, minimum } = code);
              const str1 = minimum.toString();
              if (tmp15) {
                const _HermesInternal11 = HermesInternal;
                let combined3 =
                  "Te " + str20 + ": verwacht dat " + origin + " " + str19 + str1 + " " + tmp15.unit + " " + tmp15.verb;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Te " + str20 + ": verwacht dat " + origin + " " + str19 + str1 + " is";
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = 'Ongeldige tekst: moet met "' + code.prefix + '" beginnen';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = 'Ongeldige tekst: moet op "' + code.suffix + '" eindigen';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = 'Ongeldige tekst: moet "' + code.includes + '" bevatten';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Ongeldige tekst: moet overeenkomen met patroon " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "Ongeldig: " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "Ongeldig getal: moet een veelvoud van " + code.divisor + " zijn";
            case "unrecognized_keys":
              let str3 = "";
              if (code.keys.length > 1) {
                str3 = "s";
              }
              const _HermesInternal3 = HermesInternal;
              return "Onbekende key" + str3 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "Ongeldige key in " + code.origin;
            case "invalid_union":
              return "Ongeldige invoer";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = "Ongeldige waarde in ";
              return "Ongeldige waarde in " + code.origin;
            default:
              return "Ongeldige invoer";
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
