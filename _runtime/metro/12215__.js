// === Module 12215: ? ===

// Module 12215
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
        const obj2 = { string: { unit: "caractere", verb: "s\u0103 aib\u0103" }, file: { unit: "octe\u021Bi", verb: "s\u0103 aib\u0103" }, array: { unit: "elemente", verb: "s\u0103 aib\u0103" }, set: { unit: "elemente", verb: "s\u0103 aib\u0103" }, map: { unit: "intr\u0103ri", verb: "s\u0103 aib\u0103" } };
        closure_1 = { regex: "intrare", email: "adres\u0103 de email", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "dat\u0103 \u0219i or\u0103 ISO", date: "dat\u0103 ISO", time: "or\u0103 ISO", duration: "durat\u0103 ISO", ipv4: "adres\u0103 IPv4", ipv6: "adres\u0103 IPv6", mac: "adres\u0103 MAC", cidrv4: "interval IPv4", cidrv6: "interval IPv6", base64: "\u0219ir codat base64", base64url: "\u0219ir codat base64url", json_string: "\u0219ir JSON", e164: "num\u0103r E.164", credit_card: "num\u0103r de card de credit", currency_code: "cod valutar", iban: "IBAN", jwt: "JWT", template_literal: "intrare" };
        closure_2 = { nan: "NaN", string: "\u0219ir", number: "num\u0103r", boolean: "boolean", function: "func\u021Bie", array: "matrice", object: "obiect", undefined: "nedefinit", symbol: "simbol", bigint: "num\u0103r mare", void: "void", never: "never", map: "hart\u0103", set: "set" };
        obj.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp47 = closure_2[parsedTypeResult];
              if (tmp47 == null) {
                tmp47 = parsedTypeResult;
              }
              const _HermesInternal16 = HermesInternal;
              return "Intrare invalid\u0103: a\u0219teptat " + expected + ", primit " + tmp47;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined = "Intrare invalid\u0103: a\u0219teptat " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined = "Op\u021Biune invalid\u0103: a\u0219teptat una dintre " + closure_2.joinValues(code.values, "|");
              }
              return combined;
            case "too_big":
              let str26 = "<";
              if (code.inclusive) {
                str26 = "<=";
              }
              let tmp25 = obj2[code.origin];
              if (tmp25 == null) {
                tmp25 = null;
              }
              let str27 = code.origin;
              if (tmp25) {
                if (str27 == null) {
                  str27 = "valoarea";
                }
                const verb = tmp25.verb;
                const str1 = code.maximum.toString();
                let str33 = tmp25.unit;
                if (str33 == null) {
                  str33 = "elemente";
                }
                const _HermesInternal13 = HermesInternal;
                let combined1 = "Prea mare: a\u0219teptat ca " + str27 + " " + verb + " " + str26 + str1 + " " + str33;
              } else {
                let str28 = str27;
                if (str27 == null) {
                  str28 = "valoarea";
                }
                const _HermesInternal12 = HermesInternal;
                combined1 = "Prea mare: a\u0219teptat ca " + str28 + " s\u0103 fie " + str26 + code.maximum.toString();
              }
              return combined1;
            case "too_small":
              let str16 = ">";
              if (code.inclusive) {
                str16 = ">=";
              }
              let tmp15 = obj2[code.origin];
              if (tmp15 == null) {
                tmp15 = null;
              }
              const origin = code.origin;
              if (tmp15) {
                const _HermesInternal11 = HermesInternal;
                let combined2 = "Prea mic: a\u0219teptat ca " + origin + " " + tmp15.verb + " " + str16 + code.minimum.toString() + " " + tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined2 = "Prea mic: a\u0219teptat ca " + origin + " s\u0103 fie " + str16 + code.minimum.toString();
              }
              return combined2;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined3 = "\u0218ir invalid: trebuie s\u0103 \u00EEnceap\u0103 cu \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined3 = "\u0218ir invalid: trebuie s\u0103 se termine cu \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined3 = "\u0218ir invalid: trebuie s\u0103 includ\u0103 \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined3 = "\u0218ir invalid: trebuie s\u0103 se potriveasc\u0103 cu modelul " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined3 = "Format invalid: " + format;
              }
              return combined3;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "Num\u0103r invalid: trebuie s\u0103 fie multiplu de " + code.divisor;
            case "unrecognized_keys":
              const _HermesInternal3 = HermesInternal;
              return "Chei nerecunoscute: " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "Cheie invalid\u0103 \u00EEn " + code.origin;
            case "invalid_union":
              return "Intrare invalid\u0103";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              return "Valoare invalid\u0103 \u00EEn " + code.origin;
            default:
              return "Intrare invalid\u0103";
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