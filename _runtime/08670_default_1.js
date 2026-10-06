// === Module 8670: default_1 ===

// Module 8670 (default_1)
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
                combined = "\u7121\u52B9\u306A\u5165\u529B: instanceof " + code.expected + "\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001" + tmp48 + "\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F";
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "\u7121\u52B9\u306A\u5165\u529B: " + expected + "\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001" + tmp48 + "\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F";
              }
              return combined;
            }
            case "invalid_value":
            {
              let combined1;
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                combined1 = "\u7121\u52B9\u306A\u5165\u529B: " + captureStackTrace.stringifyPrimitive(code.values[0]) + "\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F";
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "\u7121\u52B9\u306A\u9078\u629E: " + captureStackTrace.joinValues(code.values, "\u3001") + "\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059";
              }
              return combined1;
            }
            case "too_big":
            {
              let combined2;
              let str29 = "\u3088\u308A\u5C0F\u3055\u3044";
              if (code.inclusive) {
                str29 = "\u4EE5\u4E0B\u3067\u3042\u308B";
              }
              let str30 = code.origin;
              if (obj2[code.origin] ?? null) {
                if (str30 == null) {
                  str30 = "\u5024";
                }
                const str36 = code.maximum;
                const _HermesInternal13 = HermesInternal;
                const str1 = str36.toString();
                const str37 = (obj2[code.origin] ?? null).unit ?? "\u8981\u7D20";
                combined2 = "\u5927\u304D\u3059\u304E\u308B\u5024: " + str30 + "\u306F" + str1 + str37 + str29 + "\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059";
              } else {
                let str31 = str30;
                if (str30 == null) {
                  str31 = "\u5024";
                }
                const _HermesInternal12 = HermesInternal;
                const str32 = code.maximum;
                combined2 = "\u5927\u304D\u3059\u304E\u308B\u5024: " + str31 + "\u306F" + str32.toString() + str29 + "\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059";
              }
              return combined2;
            }
            case "too_small":
            {
              let combined3;
              let minimum;
              let origin;
              let str22 = "\u3088\u308A\u5927\u304D\u3044";
              if (code.inclusive) {
                str22 = "\u4EE5\u4E0A\u3067\u3042\u308B";
              }
              ({ origin, minimum } = code);
              const str55 = minimum.toString();
              if (obj2[code.origin] ?? null) {
                const _HermesInternal11 = HermesInternal;
                combined3 = "\u5C0F\u3055\u3059\u304E\u308B\u5024: " + origin + "\u306F" + str55 + tmp15.unit + str22 + "\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059";
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "\u5C0F\u3055\u3059\u304E\u308B\u5024: " + origin + "\u306F" + str55 + str22 + "\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059";
              }
              return combined3;
            }
            case "invalid_format":
            {
              let combined4;
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined4 = "\u7121\u52B9\u306A\u6587\u5B57\u5217: \"" + code.prefix + "\"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = "\u7121\u52B9\u306A\u6587\u5B57\u5217: \"" + code.suffix + "\"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "\u7121\u52B9\u306A\u6587\u5B57\u5217: \"" + code.includes + "\"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3" + code.pattern + "\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059";
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal5 = HermesInternal;
                combined4 = "\u7121\u52B9\u306A" + format;
              }
              return combined4;
            }
            case "not_multiple_of":
            {
              const _HermesInternal4 = HermesInternal;
              return "\u7121\u52B9\u306A\u6570\u5024: " + code.divisor + "\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059";
            }
            case "unrecognized_keys":
            {
              let str5 = "";
              if (code.keys.length > 1) {
                str5 = "\u7FA4";
              }
              const _HermesInternal3 = HermesInternal;
              return "\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC" + str5 + ": " + captureStackTrace.joinValues(code.keys, "\u3001");
            }
            case "invalid_key":
            {
              const _HermesInternal2 = HermesInternal;
              return "" + code.origin + "\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC";
            }
            case "invalid_union":
            {
              return "\u7121\u52B9\u306A\u5165\u529B";
            }
            case "invalid_element":
            {
              const _HermesInternal = HermesInternal;
              return "" + code.origin + "\u5185\u306E\u7121\u52B9\u306A\u5024";
            }
            default:
            {
              return "\u7121\u52B9\u306A\u5165\u529B";
            }
          }
        }
    };
    const obj2 = { string: { unit: "\u6587\u5B57", verb: "\u3067\u3042\u308B" }, file: { unit: "\u30D0\u30A4\u30C8", verb: "\u3067\u3042\u308B" }, array: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" }, set: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" } };
    closure_1 = { regex: "\u5165\u529B\u5024", email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9", url: "URL", emoji: "\u7D75\u6587\u5B57", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO\u65E5\u6642", date: "ISO\u65E5\u4ED8", time: "ISO\u6642\u523B", duration: "ISO\u671F\u9593", ipv4: "IPv4\u30A2\u30C9\u30EC\u30B9", ipv6: "IPv6\u30A2\u30C9\u30EC\u30B9", cidrv4: "IPv4\u7BC4\u56F2", cidrv6: "IPv6\u7BC4\u56F2", base64: "base64\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217", base64url: "base64url\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217", json_string: "JSON\u6587\u5B57\u5217", e164: "E.164\u756A\u53F7", jwt: "JWT", template_literal: "\u5165\u529B\u5024" };
    let closure_2 = { nan: "NaN", number: "\u6570\u5024", array: "\u914D\u5217" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};