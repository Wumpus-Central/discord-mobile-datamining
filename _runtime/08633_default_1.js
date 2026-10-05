// === Module 8633: default_1 ===

// Module 8633 (default_1)
import captureStackTrace2 from "captureStackTrace" /* 8607 */;

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
                combined = "Rangt gildi: \u00DE\u00FA sl\u00F3st inn " + tmp48 + " \u00FEar sem \u00E1 a\u00F0 vera instanceof " + code.expected;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Rangt gildi: \u00DE\u00FA sl\u00F3st inn " + tmp48 + " \u00FEar sem \u00E1 a\u00F0 vera " + expected;
              }
              return combined;
            }
            case "invalid_value":
            {
              let combined1;
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                combined1 = "Rangt gildi: gert r\u00E1\u00F0 fyrir " + captureStackTrace.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "\u00D3gilt val: m\u00E1 vera eitt af eftirfarandi " + captureStackTrace.joinValues(code.values, "|");
              }
              return combined1;
            }
            case "too_big":
            {
              let combined2;
              let str24 = "<";
              if (code.inclusive) {
                str24 = "<=";
              }
              let str25 = code.origin;
              if (obj2[code.origin] ?? null) {
                if (str25 == null) {
                  str25 = "gildi";
                }
                const str30 = code.maximum;
                const _HermesInternal13 = HermesInternal;
                const str1 = str30.toString();
                const str31 = (obj2[code.origin] ?? null).unit ?? "hluti";
                combined2 = "Of st\u00F3rt: gert er r\u00E1\u00F0 fyrir a\u00F0 " + str25 + " hafi " + str24 + str1 + " " + str31;
              } else {
                let str26 = str25;
                if (str25 == null) {
                  str26 = "gildi";
                }
                const _HermesInternal12 = HermesInternal;
                const str27 = code.maximum;
                combined2 = "Of st\u00F3rt: gert er r\u00E1\u00F0 fyrir a\u00F0 " + str26 + " s\u00E9 " + str24 + str27.toString();
              }
              return combined2;
            }
            case "too_small":
            {
              let combined3;
              let minimum;
              let origin;
              let str18 = ">";
              if (code.inclusive) {
                str18 = ">=";
              }
              ({ origin, minimum } = code);
              const str45 = minimum.toString();
              if (obj2[code.origin] ?? null) {
                const _HermesInternal11 = HermesInternal;
                combined3 = "Of l\u00EDti\u00F0: gert er r\u00E1\u00F0 fyrir a\u00F0 " + origin + " hafi " + str18 + str45 + " " + tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Of l\u00EDti\u00F0: gert er r\u00E1\u00F0 fyrir a\u00F0 " + origin + " s\u00E9 " + str18 + str45;
              }
              return combined3;
            }
            case "invalid_format":
            {
              let combined4;
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined4 = "\u00D3gildur strengur: ver\u00F0ur a\u00F0 byrja \u00E1 \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = "\u00D3gildur strengur: ver\u00F0ur a\u00F0 enda \u00E1 \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "\u00D3gildur strengur: ver\u00F0ur a\u00F0 innihalda \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "\u00D3gildur strengur: ver\u00F0ur a\u00F0 fylgja mynstri " + code.pattern;
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal5 = HermesInternal;
                combined4 = "Rangt " + format;
              }
              return combined4;
            }
            case "not_multiple_of":
            {
              const _HermesInternal4 = HermesInternal;
              return "R\u00F6ng tala: ver\u00F0ur a\u00F0 vera margfeldi af " + code.divisor;
            }
            case "unrecognized_keys":
            {
              let str3 = "ur lykill";
              if (code.keys.length > 1) {
                str3 = "ir lyklar";
              }
              const _HermesInternal3 = HermesInternal;
              return "\u00D3\u00FEekkt " + str3 + ": " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              const _HermesInternal2 = HermesInternal;
              return "Rangur lykill \u00ED " + code.origin;
            }
            case "invalid_union":
            {
              return "Rangt gildi";
            }
            case "invalid_element":
            {
              const _HermesInternal = HermesInternal;
              return "Rangt gildi \u00ED " + code.origin;
            }
            default:
            {
              return "Rangt gildi";
            }
          }
        }
    };
    const obj2 = { string: { unit: "stafi", verb: "a\u00F0 hafa" }, file: { unit: "b\u00E6ti", verb: "a\u00F0 hafa" }, array: { unit: "hluti", verb: "a\u00F0 hafa" }, set: { unit: "hluti", verb: "a\u00F0 hafa" } };
    closure_1 = { regex: "gildi", email: "netfang", url: "vefsl\u00F3\u00F0", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO dagsetning og t\u00EDmi", date: "ISO dagsetning", time: "ISO t\u00EDmi", duration: "ISO t\u00EDmalengd", ipv4: "IPv4 address", ipv6: "IPv6 address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded strengur", base64url: "base64url-encoded strengur", json_string: "JSON strengur", e164: "E.164 t\u00F6lugildi", jwt: "JWT", template_literal: "gildi" };
    let closure_2 = { nan: "NaN", number: "n\u00FAmer", array: "fylki" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};