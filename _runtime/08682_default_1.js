// === Module 8682: default_1 ===

// Module 8682 (default_1)
import captureStackTrace2 from "captureStackTrace" /* 8642 */;

let hasOwnProperty;

const self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    closure_0 = __esModule;
    closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    let tmp3 = ownPropertyDescriptor;
    if (tmp3) {
      let tmp4;
      if ("get" in ownPropertyDescriptor) {
        tmp4 = !__esModule.__esModule;
      } else {
        tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
      }
      tmp3 = !tmp4;
    }
    if (!tmp3) {
      ownPropertyDescriptor = { enumerable: true, get };
      const obj = { enumerable: true, get };
    }
    Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_0 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_1 = tmp3;
const tmp5 = self && self.__importStar || ((__esModule) => {
  const tmp = __esModule;
  if (tmp) {
    if (__esModule.__esModule) {
      return __esModule;
    }
  }
  const obj = {};
  if (null != __esModule) {
    for (const key10009 in __esModule) {
      let callResult = "default" !== key10009;
      if (callResult) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(__esModule, key10009);
      }
      if (!callResult) {
        continue;
      } else {
        let tmp6 = closure_0(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_1(obj, __esModule);
  return obj;
});
const captureStackTrace = tmp5(captureStackTrace2);
function error() {

}

export default function default_1() {
  if (typeof error === "function") {
    let obj = {
      localeError: (code) => {
          switch (code.code) {
            case "invalid_type":
            {
              let combined;
              const expected = closure_2[code.expected] ?? code.expected;
              const parsedTypeResult = captureStackTrace.parsedType(code.input);
              const obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                combined = "Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano instanceof " + code.expected + ", otrzymano " + tmp49;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano " + expected + ", otrzymano " + tmp49;
              }
              return combined;
            }
            case "invalid_value":
            {
              let combined1;
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                combined1 = "Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano " + captureStackTrace.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci " + captureStackTrace.joinValues(code.values, "|");
              }
              return combined1;
            }
            case "too_big":
            {
              let combined2;
              let str29 = "<";
              if (code.inclusive) {
                str29 = "<=";
              }
              let str30 = code.origin;
              if (obj2[code.origin] ?? null) {
                if (str30 == null) {
                  str30 = "warto\u015B\u0107";
                }
                const str35 = code.maximum;
                const _HermesInternal13 = HermesInternal;
                const str1 = str35.toString();
                const str36 = (obj2[code.origin] ?? null).unit ?? "element\u00F3w";
                combined2 = "Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce " + str30 + " b\u0119dzie mie\u0107 " + str29 + str1 + " " + str36;
              } else {
                let str31 = str30;
                if (str30 == null) {
                  str31 = "warto\u015B\u0107";
                }
                const _HermesInternal12 = HermesInternal;
                const str32 = code.maximum;
                combined2 = "Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce " + str31 + " b\u0119dzie wynosi\u0107 " + str29 + str32.toString();
              }
              return combined2;
            }
            case "too_small":
            {
              let combined3;
              let str18 = ">";
              if (code.inclusive) {
                str18 = ">=";
              }
              let str19 = code.origin;
              if (obj2[code.origin] ?? null) {
                if (str19 == null) {
                  str19 = "warto\u015B\u0107";
                }
                const str24 = code.minimum;
                const _HermesInternal11 = HermesInternal;
                const str25 = (obj2[code.origin] ?? null).unit ?? "element\u00F3w";
                const str50 = str24.toString();
                combined3 = "Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce " + str19 + " b\u0119dzie mie\u0107 " + str18 + str50 + " " + str25;
              } else {
                let str20 = str19;
                if (str19 == null) {
                  str20 = "warto\u015B\u0107";
                }
                const _HermesInternal10 = HermesInternal;
                const str21 = code.minimum;
                combined3 = "Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce " + str20 + " b\u0119dzie wynosi\u0107 " + str18 + str21.toString();
              }
              return combined3;
            }
            case "invalid_format":
            {
              let combined4;
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined4 = "Nieprawid\u0142owy ci\u0105g znak\u00F3w: musi zaczyna\u0107 si\u0119 od \"" + code.prefix + "\"";
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
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal5 = HermesInternal;
                combined4 = "Nieprawid\u0142ow(y/a/e) " + format;
              }
              return combined4;
            }
            case "not_multiple_of":
            {
              const _HermesInternal4 = HermesInternal;
              return "Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 " + code.divisor;
            }
            case "unrecognized_keys":
            {
              let str3 = "";
              if (code.keys.length > 1) {
                str3 = "s";
              }
              const _HermesInternal3 = HermesInternal;
              return "Nierozpoznane klucze" + str3 + ": " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              const _HermesInternal2 = HermesInternal;
              return "Nieprawid\u0142owy klucz w " + code.origin;
            }
            case "invalid_union":
            {
              return "Nieprawid\u0142owe dane wej\u015Bciowe";
            }
            case "invalid_element":
            {
              const _HermesInternal = HermesInternal;
              return "Nieprawid\u0142owa warto\u015B\u0107 w " + code.origin;
            }
            default:
            {
              return "Nieprawid\u0142owe dane wej\u015Bciowe";
            }
          }
        }
    };
    const obj2 = { string: { unit: "znak\u00F3w", verb: "mie\u0107" }, file: { unit: "bajt\u00F3w", verb: "mie\u0107" }, array: { unit: "element\u00F3w", verb: "mie\u0107" }, set: { unit: "element\u00F3w", verb: "mie\u0107" } };
    closure_1 = { regex: "wyra\u017Cenie", email: "adres email", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "data i godzina w formacie ISO", date: "data w formacie ISO", time: "godzina w formacie ISO", duration: "czas trwania ISO", ipv4: "adres IPv4", ipv6: "adres IPv6", cidrv4: "zakres IPv4", cidrv6: "zakres IPv6", base64: "ci\u0105g znak\u00F3w zakodowany w formacie base64", base64url: "ci\u0105g znak\u00F3w zakodowany w formacie base64url", json_string: "ci\u0105g znak\u00F3w w formacie JSON", e164: "liczba E.164", jwt: "JWT", template_literal: "wej\u015Bcie" };
    let closure_2 = { nan: "NaN", number: "liczba", array: "tablica" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};