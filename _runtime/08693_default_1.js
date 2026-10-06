// === Module 8693: default_1 ===

// Module 8693 (default_1)
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
                combined = "Noto\u2018g\u2018ri kirish: kutilgan instanceof " + code.expected + ", qabul qilingan " + tmp45;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Noto\u2018g\u2018ri kirish: kutilgan " + expected + ", qabul qilingan " + tmp45;
              }
              return combined;
            }
            case "invalid_value":
            {
              let combined1;
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                combined1 = "Noto\u2018g\u2018ri kirish: kutilgan " + captureStackTrace.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Noto\u2018g\u2018ri variant: quyidagilardan biri kutilgan " + captureStackTrace.joinValues(code.values, "|");
              }
              return combined1;
            }
            case "too_big":
            {
              let combined2;
              let str30 = "<";
              if (code.inclusive) {
                str30 = "<=";
              }
              let str31 = code.origin;
              if (obj2[code.origin] ?? null) {
                if (str31 == null) {
                  str31 = "qiymat";
                }
                const _HermesInternal13 = HermesInternal;
                const str36 = code.maximum;
                combined2 = "Juda katta: kutilgan " + str31 + " " + str30 + str36.toString() + " " + tmp27.unit + " " + tmp27.verb;
              } else {
                let str32 = str31;
                if (str31 == null) {
                  str32 = "qiymat";
                }
                const _HermesInternal12 = HermesInternal;
                const str33 = code.maximum;
                combined2 = "Juda katta: kutilgan " + str32 + " " + str30 + str33.toString();
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
              const str1 = minimum.toString();
              if (obj2[code.origin] ?? null) {
                const _HermesInternal11 = HermesInternal;
                combined3 = "Juda kichik: kutilgan " + origin + " " + str22 + str1 + " " + tmp15.unit + " " + tmp15.verb;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Juda kichik: kutilgan " + origin + " " + str22 + str1;
              }
              return combined3;
            }
            case "invalid_format":
            {
              let combined4;
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined4 = "Noto\u2018g\u2018ri satr: \"" + code.prefix + "\" bilan boshlanishi kerak";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = "Noto\u2018g\u2018ri satr: \"" + code.suffix + "\" bilan tugashi kerak";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "Noto\u2018g\u2018ri satr: \"" + code.includes + "\" ni o\u2018z ichiga olishi kerak";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Noto\u2018g\u2018ri satr: " + code.pattern + " shabloniga mos kelishi kerak";
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal5 = HermesInternal;
                combined4 = "Noto\u2018g\u2018ri " + format;
              }
              return combined4;
            }
            case "not_multiple_of":
            {
              const _HermesInternal4 = HermesInternal;
              return "Noto\u2018g\u2018ri raqam: " + code.divisor + " ning karralisi bo\u2018lishi kerak";
            }
            case "unrecognized_keys":
            {
              let str5 = "";
              if (code.keys.length > 1) {
                str5 = "lar";
              }
              const _HermesInternal3 = HermesInternal;
              return "Noma\u2019lum kalit" + str5 + ": " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              const _HermesInternal2 = HermesInternal;
              return "" + code.origin + " dagi kalit noto\u2018g\u2018ri";
            }
            case "invalid_union":
            {
              return "Noto\u2018g\u2018ri kirish";
            }
            case "invalid_element":
            {
              const _HermesInternal = HermesInternal;
              return "" + code.origin + " da noto\u2018g\u2018ri qiymat";
            }
            default:
            {
              return "Noto\u2018g\u2018ri kirish";
            }
          }
        }
    };
    const obj2 = { string: { unit: "belgi", verb: "bo\u2018lishi kerak" }, file: { unit: "bayt", verb: "bo\u2018lishi kerak" }, array: { unit: "element", verb: "bo\u2018lishi kerak" }, set: { unit: "element", verb: "bo\u2018lishi kerak" } };
    closure_1 = { regex: "kirish", email: "elektron pochta manzili", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO sana va vaqti", date: "ISO sana", time: "ISO vaqt", duration: "ISO davomiylik", ipv4: "IPv4 manzil", ipv6: "IPv6 manzil", mac: "MAC manzil", cidrv4: "IPv4 diapazon", cidrv6: "IPv6 diapazon", base64: "base64 kodlangan satr", base64url: "base64url kodlangan satr", json_string: "JSON satr", e164: "E.164 raqam", jwt: "JWT", template_literal: "kirish" };
    let closure_2 = { nan: "NaN", number: "raqam", array: "massiv" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};