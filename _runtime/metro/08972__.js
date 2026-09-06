// === Module 8972: ? ===

// Module 8972
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
        let string = { localeError: null };
        string = { string: null, file: null, array: null, set: null };
        string = { unit: { one: "simbolis", few: "simboliai", many: "simboli\u0173" }, verb: null };
        const obj1 = { smaller: { inclusive: "turi b\u016Bti ne ilgesn\u0117 kaip", notInclusive: "turi b\u016Bti trumpesn\u0117 kaip" }, bigger: { inclusive: "turi b\u016Bti ne trumpesn\u0117 kaip", notInclusive: "turi b\u016Bti ilgesn\u0117 kaip" } };
        string.verb = obj1;
        string.string = string;
        const obj2 = { unit: { one: "baitas", few: "baitai", many: "bait\u0173" }, verb: null };
        const obj3 = { smaller: { inclusive: "turi b\u016Bti ne didesnis kaip", notInclusive: "turi b\u016Bti ma\u017Eesnis kaip" }, bigger: { inclusive: "turi b\u016Bti ne ma\u017Eesnis kaip", notInclusive: "turi b\u016Bti didesnis kaip" } };
        obj2.verb = obj3;
        string.file = obj2;
        const obj4 = { unit: { one: "element\u0105", few: "elementus", many: "element\u0173" }, verb: null };
        const obj5 = { smaller: { inclusive: "turi tur\u0117ti ne daugiau kaip", notInclusive: "turi tur\u0117ti ma\u017Eiau kaip" }, bigger: { inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip", notInclusive: "turi tur\u0117ti daugiau kaip" } };
        obj4.verb = obj5;
        string.array = obj4;
        const obj6 = { unit: { one: "element\u0105", few: "elementus", many: "element\u0173" }, verb: null };
        const obj7 = { smaller: { inclusive: "turi tur\u0117ti ne daugiau kaip", notInclusive: "turi tur\u0117ti ma\u017Eiau kaip" }, bigger: { inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip", notInclusive: "turi tur\u0117ti daugiau kaip" } };
        obj6.verb = obj7;
        string.set = obj6;
        closure_1 = { regex: "\u012Fvestis", email: "el. pa\u0161to adresas", url: "URL", emoji: "jaustukas", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO data ir laikas", date: "ISO data", time: "ISO laikas", duration: "ISO trukm\u0117", ipv4: "IPv4 adresas", ipv6: "IPv6 adresas", cidrv4: "IPv4 tinklo prefiksas (CIDR)", cidrv6: "IPv6 tinklo prefiksas (CIDR)", base64: "base64 u\u017Ekoduota eilut\u0117", base64url: "base64url u\u017Ekoduota eilut\u0117", json_string: "JSON eilut\u0117", e164: "E.164 numeris", jwt: "JWT", template_literal: "\u012Fvestis" };
        closure_2 = { nan: "NaN", number: "skai\u010Dius", bigint: "sveikasis skai\u010Dius", string: "eilut\u0117", boolean: "login\u0117 reik\u0161m\u0117", undefined: "neapibr\u0117\u017Eta reik\u0161m\u0117", function: "funkcija", symbol: "simbolis", array: "masyvas", object: "objektas", null: "nulin\u0117 reik\u0161m\u0117" };
        string.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp82 = closure_2[parsedTypeResult];
              if (tmp82 == null) {
                tmp82 = parsedTypeResult;
              }
              if (obj3.test(code.expected)) {
                const _HermesInternal16 = HermesInternal;
                let combined = "Gautas tipas " + tmp82 + ", o tik\u0117tasi - instanceof " + code.expected;
              } else {
                const _HermesInternal15 = HermesInternal;
                combined = "Gautas tipas " + tmp82 + ", o tik\u0117tasi - " + expected;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal14 = HermesInternal;
                let combined1 = "Privalo b\u016Bti " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal13 = HermesInternal;
                combined1 = "Privalo b\u016Bti vienas i\u0161 " + closure_2.joinValues(code.values, "|") + " pasirinkim\u0173";
              }
              return combined1;
            case "too_big":
              let str45 = closure_2[code.origin];
              if (str45 == null) {
                str45 = code.origin;
              }
              const _Number2 = Number;
              const _Math2 = Math;
              const absolute = Math.abs(Number(code.maximum));
              const result = absolute % 10;
              const result1 = absolute % 100;
              if (11 > result1) {
                let str46 = "many";
                if (0 !== result) {
                  let str47 = "few";
                  if (1 === result) {
                    str47 = "one";
                  }
                  str46 = str47;
                }
              } else {
                str46 = "many";
              }
              let flag2 = code.inclusive;
              if (flag2 == null) {
                flag2 = false;
              }
              let tmp53 = obj[code.origin];
              if (tmp53 == null) {
                tmp53 = null;
              }
              let tmp54 = tmp53;
              if (null !== tmp53) {
                obj = { unit: tmp53.unit[str46], verb: null };
                let str48 = "notInclusive";
                if (flag2) {
                  str48 = "inclusive";
                }
                obj.verb = tmp53.verb.smaller[str48];
                tmp54 = obj;
              }
              let verb;
              if (tmp54 != null) {
                verb = tmp54.verb;
              }
              if (verb) {
                if (str45 == null) {
                  str45 = code.origin;
                }
                if (str45 == null) {
                  str45 = "reik\u0161m\u0117";
                }
                if (typeof capitalizeFirstCharacter === "function") {
                  const formatted = str45.charAt(0).toUpperCase();
                  const sum = formatted + str45.slice(1);
                  const verb2 = tmp54.verb;
                  let str = code.maximum.toString();
                  let str60 = tmp54.unit;
                  if (str60 == null) {
                    str60 = "element\u0173";
                  }
                  const _HermesInternal12 = HermesInternal;
                  return "" + sum + " " + verb2 + " " + str + " " + str60;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                let str49 = "ma\u017Eesnis kaip";
                if (code.inclusive) {
                  str49 = "ne didesnis kaip";
                }
                let str50 = str45;
                if (str45 == null) {
                  str50 = code.origin;
                }
                if (str50 == null) {
                  str50 = "reik\u0161m\u0117";
                }
                if (typeof capitalizeFirstCharacter === "function") {
                  const formatted1 = str50.charAt(0).toUpperCase();
                  const sum1 = formatted1 + str50.slice(1);
                  const str1 = code.maximum.toString();
                  let unit;
                  if (tmp54 != null) {
                    unit = tmp54.unit;
                  }
                  const _HermesInternal11 = HermesInternal;
                  return "" + sum1 + " turi b\u016Bti " + str49 + " " + str1 + " " + unit;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
            break;
            case "too_small":
              let str24 = closure_2[code.origin];
              if (str24 == null) {
                str24 = code.origin;
              }
              const _Number = Number;
              const _Math = Math;
              const absolute1 = Math.abs(Number(code.minimum));
              const result2 = absolute1 % 10;
              const result3 = absolute1 % 100;
              if (11 > result3) {
                let str25 = "many";
                if (0 !== result2) {
                  let str26 = "few";
                  if (1 === result2) {
                    str26 = "one";
                  }
                  str25 = str26;
                }
              } else {
                str25 = "many";
              }
              let flag = code.inclusive;
              if (flag == null) {
                flag = false;
              }
              let tmp26 = obj[code.origin];
              if (tmp26 == null) {
                tmp26 = null;
              }
              let tmp27 = tmp26;
              if (null !== tmp26) {
                obj = { unit: tmp26.unit[str25], verb: null };
                let str27 = "notInclusive";
                if (flag) {
                  str27 = "inclusive";
                }
                obj.verb = tmp26.verb.bigger[str27];
                tmp27 = obj;
              }
              let verb1;
              if (tmp27 != null) {
                verb1 = tmp27.verb;
              }
              if (verb1) {
                if (str24 == null) {
                  str24 = code.origin;
                }
                if (str24 == null) {
                  str24 = "reik\u0161m\u0117";
                }
                if (typeof capitalizeFirstCharacter === "function") {
                  const formatted2 = str24.charAt(0).toUpperCase();
                  const sum2 = formatted2 + str24.slice(1);
                  verb = tmp27.verb;
                  let str2 = code.minimum.toString();
                  let str39 = tmp27.unit;
                  if (str39 == null) {
                    str39 = "element\u0173";
                  }
                  const _HermesInternal10 = HermesInternal;
                  return "" + sum2 + " " + verb + " " + str2 + " " + str39;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                let str28 = "didesnis kaip";
                if (code.inclusive) {
                  str28 = "ne ma\u017Eesnis kaip";
                }
                let str29 = str24;
                if (str24 == null) {
                  str29 = code.origin;
                }
                if (str29 == null) {
                  str29 = "reik\u0161m\u0117";
                }
                if (typeof capitalizeFirstCharacter === "function") {
                  const formatted3 = str29.charAt(0).toUpperCase();
                  const sum3 = formatted3 + str29.slice(1);
                  let str3 = code.minimum.toString();
                  let unit1;
                  if (tmp27 != null) {
                    unit1 = tmp27.unit;
                  }
                  const _HermesInternal9 = HermesInternal;
                  return "" + sum3 + " turi b\u016Bti " + str28 + " " + str3 + " " + unit1;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
            break;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                let combined2 = "Eilut\u0117 privalo prasid\u0117ti \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined2 = "Eilut\u0117 privalo pasibaigti \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined2 = "Eilut\u0117 privalo \u012Ftraukti \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal5 = HermesInternal;
                combined2 = "Eilut\u0117 privalo atitikti " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal4 = HermesInternal;
                combined2 = "Neteisingas " + format;
              }
              return combined2;
            case "not_multiple_of":
              const _HermesInternal3 = HermesInternal;
              return "Skai\u010Dius privalo b\u016Bti " + code.divisor + " kartotinis.";
            case "unrecognized_keys":
              let str6 = "as";
              let str7 = "as";
              if (code.keys.length > 1) {
                str7 = "i";
              }
              if (code.keys.length > 1) {
                str6 = "ai";
              }
              const _HermesInternal2 = HermesInternal;
              return "Neatpa\u017Eint" + str7 + " rakt" + str6 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              return "Rastas klaidingas raktas";
            case "invalid_union":
              return "Klaidinga \u012Fvestis";
            case "invalid_element":
              str = closure_2[code.origin];
              if (str == null) {
                str = code.origin;
              }
              if (str == null) {
                str = code.origin;
              }
              if (str == null) {
                str = "reik\u0161m\u0117";
              }
              if (typeof capitalizeFirstCharacter === "function") {
                str2 = str.charAt(0);
                const formatted4 = str2.toUpperCase();
                const _HermesInternal = HermesInternal;
                str3 = " turi klaiding\u0105 \u012Fvest\u012F";
                return "" + formatted4 + str.slice(1) + " turi klaiding\u0105 \u012Fvest\u012F";
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            break;
            default:
              return "Klaidinga \u012Fvestis";
          }
        };
        return string;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let closure_2 = fn(_mod8939);
    function capitalizeFirstCharacter(arg0) {

    }
    function error() {

    }
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}