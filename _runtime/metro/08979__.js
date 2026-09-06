// === Module 8979: ? ===

// Module 8979
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
        obj = { string: { unit: "znak\u00F3w", verb: "mie\u0107" }, file: { unit: "bajt\u00F3w", verb: "mie\u0107" }, array: { unit: "element\u00F3w", verb: "mie\u0107" }, set: { unit: "element\u00F3w", verb: "mie\u0107" } };
        closure_1 = { regex: "wyra\u017Cenie", email: "adres email", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "data i godzina w formacie ISO", date: "data w formacie ISO", time: "godzina w formacie ISO", duration: "czas trwania ISO", ipv4: "adres IPv4", ipv6: "adres IPv6", cidrv4: "zakres IPv4", cidrv6: "zakres IPv6", base64: "ci\u0105g znak\u00F3w zakodowany w formacie base64", base64url: "ci\u0105g znak\u00F3w zakodowany w formacie base64url", json_string: "ci\u0105g znak\u00F3w w formacie JSON", e164: "liczba E.164", jwt: "JWT", template_literal: "wej\u015Bcie" };
        closure_2 = { nan: "NaN", number: "liczba", array: "tablica" };
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
              obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined = "Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano instanceof " + code.expected + ", otrzymano " + tmp49;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano " + expected + ", otrzymano " + tmp49;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str29 = "<";
              if (code.inclusive) {
                str29 = "<=";
              }
              let tmp28 = obj[code.origin];
              if (tmp28 == null) {
                tmp28 = null;
              }
              let str30 = code.origin;
              if (tmp28) {
                if (str30 == null) {
                  str30 = "warto\u015B\u0107";
                }
                let str = code.maximum.toString();
                let str36 = tmp28.unit;
                if (str36 == null) {
                  str36 = "element\u00F3w";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce " + str30 + " b\u0119dzie mie\u0107 " + str29 + str + " " + str36;
              } else {
                let str31 = str30;
                if (str30 == null) {
                  str31 = "warto\u015B\u0107";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce " + str31 + " b\u0119dzie wynosi\u0107 " + str29 + code.maximum.toString();
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
              let str19 = code.origin;
              if (tmp15) {
                if (str19 == null) {
                  str19 = "warto\u015B\u0107";
                }
                const str1 = code.minimum.toString();
                let str25 = tmp15.unit;
                if (str25 == null) {
                  str25 = "element\u00F3w";
                }
                const _HermesInternal11 = HermesInternal;
                let combined3 = "Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce " + str19 + " b\u0119dzie mie\u0107 " + str18 + str1 + " " + str25;
              } else {
                let str20 = str19;
                if (str19 == null) {
                  str20 = "warto\u015B\u0107";
                }
                const _HermesInternal10 = HermesInternal;
                combined3 = "Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce " + str20 + " b\u0119dzie wynosi\u0107 " + str18 + code.minimum.toString();
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = "Nieprawid\u0142owy ci\u0105g znak\u00F3w: musi zaczyna\u0107 si\u0119 od \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = "Nieprawid\u0142owy ci\u0105g znak\u00F3w: musi ko\u0144czy\u0107 si\u0119 na \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "Nieprawid\u0142owy ci\u0105g znak\u00F3w: musi zawiera\u0107 \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Nieprawid\u0142owy ci\u0105g znak\u00F3w: musi odpowiada\u0107 wzorcowi " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "Nieprawid\u0142ow(y/a/e) " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 " + code.divisor;
            case "unrecognized_keys":
              let str3 = "";
              if (code.keys.length > 1) {
                str3 = "s";
              }
              const _HermesInternal3 = HermesInternal;
              return "Nierozpoznane klucze" + str3 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "Nieprawid\u0142owy klucz w " + code.origin;
            case "invalid_union":
              return "Nieprawid\u0142owe dane wej\u015Bciowe";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = "Nieprawid\u0142owa warto\u015B\u0107 w ";
              return "Nieprawid\u0142owa warto\u015B\u0107 w " + code.origin;
            default:
              return "Nieprawid\u0142owe dane wej\u015Bciowe";
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