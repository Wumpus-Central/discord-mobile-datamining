// === Module 12217: ? ===

// Module 12217
import _mod12160 from "module_12160" /* 12160 */;

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
        const obj2 = { string: { unit: "znakov", verb: "ma\u0165" }, file: { unit: "bajtov", verb: "ma\u0165" }, array: { unit: "prvkov", verb: "ma\u0165" }, set: { unit: "prvkov", verb: "ma\u0165" }, map: { unit: "polo\u017Eiek", verb: "ma\u0165" } };
        closure_1 = { regex: "regul\u00E1rny v\u00FDraz", email: "e-mailov\u00E1 adresa", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "d\u00E1tum a \u010Das vo form\u00E1te ISO", date: "d\u00E1tum vo form\u00E1te ISO", time: "\u010Das vo form\u00E1te ISO", duration: "doba trvania ISO", ipv4: "IPv4 adresa", ipv6: "IPv6 adresa", mac: "MAC adresa", cidrv4: "rozsah IPv4", cidrv6: "rozsah IPv6", base64: "re\u0165azec zak\u00F3dovan\u00FD vo form\u00E1te base64", base64url: "re\u0165azec zak\u00F3dovan\u00FD vo form\u00E1te base64url", json_string: "re\u0165azec vo form\u00E1te JSON", e164: "\u010D\u00EDslo E.164", credit_card: "\u010D\u00EDslo kreditnej karty", currency_code: "k\u00F3d meny", iban: "IBAN", jwt: "JWT", template_literal: "vstup" };
        closure_2 = { nan: "NaN", number: "\u010D\u00EDslo", string: "re\u0165azec", function: "funkcia", array: "pole" };
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
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined = "Neplatn\u00FD vstup: o\u010Dak\u00E1van\u00E9 instanceof " + code.expected + ", obdr\u017Ean\u00E9 " + tmp49;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Neplatn\u00FD vstup: o\u010Dak\u00E1van\u00E9 " + expected + ", obdr\u017Ean\u00E9 " + tmp49;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "Neplatn\u00FD vstup: o\u010Dak\u00E1van\u00E9 " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Neplatn\u00FD vstup: o\u010Dak\u00E1van\u00E1 jedna z hodn\u00F4t " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str27 = "<";
              if (code.inclusive) {
                str27 = "<=";
              }
              let tmp28 = obj2[code.origin];
              if (tmp28 == null) {
                tmp28 = null;
              }
              let str28 = code.origin;
              if (tmp28) {
                if (str28 == null) {
                  str28 = "hodnota";
                }
                const str1 = code.maximum.toString();
                let str34 = tmp28.unit;
                if (str34 == null) {
                  str34 = "prvkov";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "Hodnota je pr\u00EDli\u0161 ve\u013Ek\u00E1: " + str28 + " mus\u00ED ma\u0165 " + str27 + str1 + " " + str34;
              } else {
                let str29 = str28;
                if (str28 == null) {
                  str29 = "hodnota";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "Hodnota je pr\u00EDli\u0161 ve\u013Ek\u00E1: " + str29 + " mus\u00ED by\u0165 " + str27 + code.maximum.toString();
              }
              return combined2;
            case "too_small":
              let str16 = ">";
              if (code.inclusive) {
                str16 = ">=";
              }
              let tmp15 = obj2[code.origin];
              if (tmp15 == null) {
                tmp15 = null;
              }
              let str17 = code.origin;
              if (tmp15) {
                if (str17 == null) {
                  str17 = "hodnota";
                }
                const str48 = code.minimum.toString();
                let str23 = tmp15.unit;
                if (str23 == null) {
                  str23 = "prvkov";
                }
                const _HermesInternal11 = HermesInternal;
                let combined3 = "Hodnota je pr\u00EDli\u0161 mal\u00E1: " + str17 + " mus\u00ED ma\u0165 " + str16 + str48 + " " + str23;
              } else {
                let str18 = str17;
                if (str17 == null) {
                  str18 = "hodnota";
                }
                const _HermesInternal10 = HermesInternal;
                combined3 = "Hodnota je pr\u00EDli\u0161 mal\u00E1: " + str18 + " mus\u00ED by\u0165 " + str16 + code.minimum.toString();
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = "Neplatn\u00FD re\u0165azec: mus\u00ED za\u010D\u00EDna\u0165 na \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = "Neplatn\u00FD re\u0165azec: mus\u00ED kon\u010Di\u0165 na \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "Neplatn\u00FD re\u0165azec: mus\u00ED obsahova\u0165 \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Neplatn\u00FD re\u0165azec: mus\u00ED zodpoveda\u0165 vzoru " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "Neplatn\u00FD form\u00E1t " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "Neplatn\u00E9 \u010D\u00EDslo: mus\u00ED by\u0165 n\u00E1sobkom " + code.divisor;
            case "unrecognized_keys":
              const _HermesInternal3 = HermesInternal;
              return "Nezn\u00E1me kl\u00FA\u010De: " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "Neplatn\u00FD kl\u00FA\u010D v " + code.origin;
            case "invalid_union":
              return "Neplatn\u00FD vstup";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              return "Neplatn\u00E1 hodnota v " + code.origin;
            default:
              return "Neplatn\u00FD vstup";
          }
        };
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let closure_2 = fn(_mod12160);
    function error() {

    }
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}