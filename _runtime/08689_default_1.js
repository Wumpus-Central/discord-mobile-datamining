// === Module 8689: default_1 ===

// Module 8689 (default_1)
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
                combined = "Ge\u00E7ersiz de\u011Fer: beklenen instanceof " + code.expected + ", al\u0131nan " + tmp48;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Ge\u00E7ersiz de\u011Fer: beklenen " + expected + ", al\u0131nan " + tmp48;
              }
              return combined;
            }
            case "invalid_value":
            {
              let combined1;
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                combined1 = "Ge\u00E7ersiz de\u011Fer: beklenen " + captureStackTrace.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Ge\u00E7ersiz se\u00E7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: " + captureStackTrace.joinValues(code.values, "|");
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
                  str30 = "de\u011Fer";
                }
                const str35 = code.maximum;
                const _HermesInternal13 = HermesInternal;
                const str1 = str35.toString();
                const str36 = (obj2[code.origin] ?? null).unit ?? "\u00F6\u011Fe";
                combined2 = "\u00C7ok b\u00FCy\u00FCk: beklenen " + str30 + " " + str29 + str1 + " " + str36;
              } else {
                let str31 = str30;
                if (str30 == null) {
                  str31 = "de\u011Fer";
                }
                const _HermesInternal12 = HermesInternal;
                const str32 = code.maximum;
                combined2 = "\u00C7ok b\u00FCy\u00FCk: beklenen " + str31 + " " + str29 + str32.toString();
              }
              return combined2;
            }
            case "too_small":
            {
              let combined3;
              let minimum;
              let origin;
              let str22 = ">";
              if (code.inclusive) {
                str22 = ">=";
              }
              ({ origin, minimum } = code);
              const str51 = minimum.toString();
              if (obj2[code.origin] ?? null) {
                const _HermesInternal11 = HermesInternal;
                combined3 = "\u00C7ok k\u00FC\u00E7\u00FCk: beklenen " + origin + " " + str22 + str51 + " " + tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "\u00C7ok k\u00FC\u00E7\u00FCk: beklenen " + origin + " " + str22 + str51;
              }
              return combined3;
            }
            case "invalid_format":
            {
              let combined4;
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined4 = "Ge\u00E7ersiz metin: \"" + code.prefix + "\" ile ba\u015Flamal\u0131";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = "Ge\u00E7ersiz metin: \"" + code.suffix + "\" ile bitmeli";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "Ge\u00E7ersiz metin: \"" + code.includes + "\" i\u00E7ermeli";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Ge\u00E7ersiz metin: " + code.pattern + " desenine uymal\u0131";
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal5 = HermesInternal;
                combined4 = "Ge\u00E7ersiz " + format;
              }
              return combined4;
            }
            case "not_multiple_of":
            {
              const _HermesInternal4 = HermesInternal;
              return "Ge\u00E7ersiz say\u0131: " + code.divisor + " ile tam b\u00F6l\u00FCnebilmeli";
            }
            case "unrecognized_keys":
            {
              let str5 = "";
              if (code.keys.length > 1) {
                str5 = "lar";
              }
              const _HermesInternal3 = HermesInternal;
              return "Tan\u0131nmayan anahtar" + str5 + ": " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              const _HermesInternal2 = HermesInternal;
              return "" + code.origin + " i\u00E7inde ge\u00E7ersiz anahtar";
            }
            case "invalid_union":
            {
              return "Ge\u00E7ersiz de\u011Fer";
            }
            case "invalid_element":
            {
              const _HermesInternal = HermesInternal;
              return "" + code.origin + " i\u00E7inde ge\u00E7ersiz de\u011Fer";
            }
            default:
            {
              return "Ge\u00E7ersiz de\u011Fer";
            }
          }
        }
    };
    const obj2 = { string: { unit: "karakter", verb: "olmal\u0131" }, file: { unit: "bayt", verb: "olmal\u0131" }, array: { unit: "\u00F6\u011Fe", verb: "olmal\u0131" }, set: { unit: "\u00F6\u011Fe", verb: "olmal\u0131" } };
    closure_1 = { regex: "girdi", email: "e-posta adresi", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO tarih ve saat", date: "ISO tarih", time: "ISO saat", duration: "ISO s\u00FCre", ipv4: "IPv4 adresi", ipv6: "IPv6 adresi", cidrv4: "IPv4 aral\u0131\u011F\u0131", cidrv6: "IPv6 aral\u0131\u011F\u0131", base64: "base64 ile \u015Fifrelenmi\u015F metin", base64url: "base64url ile \u015Fifrelenmi\u015F metin", json_string: "JSON dizesi", e164: "E.164 say\u0131s\u0131", jwt: "JWT", template_literal: "\u015Eablon dizesi" };
    let closure_2 = { nan: "NaN" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};