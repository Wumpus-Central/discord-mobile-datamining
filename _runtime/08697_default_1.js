// === Module 8697: default_1 ===

// Module 8697 (default_1)
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
                combined = "\u00CCb\u00E1w\u1ECDl\u00E9 a\u1E63\u00EC\u1E63e: a n\u00ED l\u00E1ti fi instanceof " + code.expected + ", \u00E0m\u1ECD\u0300 a r\u00ED " + tmp38;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "\u00CCb\u00E1w\u1ECDl\u00E9 a\u1E63\u00EC\u1E63e: a n\u00ED l\u00E1ti fi " + expected + ", \u00E0m\u1ECD\u0300 a r\u00ED " + tmp38;
              }
              return combined;
            }
            case "invalid_value":
            {
              let combined1;
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                combined1 = "\u00CCb\u00E1w\u1ECDl\u00E9 a\u1E63\u00EC\u1E63e: a n\u00ED l\u00E1ti fi " + captureStackTrace.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "\u00C0\u1E63\u00E0y\u00E0n a\u1E63\u00EC\u1E63e: yan \u1ECD\u0300kan l\u00E1ra " + captureStackTrace.joinValues(code.values, "|");
              }
              return combined1;
            }
            case "too_big":
            {
              let combined2;
              let str23 = "<";
              if (code.inclusive) {
                str23 = "<=";
              }
              if (obj2[code.origin] ?? null) {
                const _HermesInternal13 = HermesInternal;
                const str25 = code.origin ?? "iye";
                combined2 = "T\u00F3 p\u1ECD\u0300 j\u00F9: a n\u00ED l\u00E1ti j\u1EB9\u0301 p\u00E9 " + str25 + " " + tmp22.verb + " " + str23 + code.maximum + " " + tmp22.unit;
              } else {
                const _HermesInternal12 = HermesInternal;
                combined2 = "T\u00F3 p\u1ECD\u0300 j\u00F9: a n\u00ED l\u00E1ti j\u1EB9\u0301 " + str23 + code.maximum;
              }
              return combined2;
            }
            case "too_small":
            {
              let combined3;
              let str16 = ">";
              if (code.inclusive) {
                str16 = ">=";
              }
              if (obj2[code.origin] ?? null) {
                const _HermesInternal11 = HermesInternal;
                combined3 = "K\u00E9r\u00E9 ju: a n\u00ED l\u00E1ti j\u1EB9\u0301 p\u00E9 " + code.origin + " " + tmp15.verb + " " + str16 + code.minimum + " " + tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "K\u00E9r\u00E9 ju: a n\u00ED l\u00E1ti j\u1EB9\u0301 " + str16 + code.minimum;
              }
              return combined3;
            }
            case "invalid_format":
            {
              let combined4;
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined4 = "\u1ECC\u0300r\u1ECD\u0300 a\u1E63\u00EC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\u1EB9\u0300r\u1EB9\u0300 p\u1EB9\u0300l\u00FA \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = "\u1ECC\u0300r\u1ECD\u0300 a\u1E63\u00EC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 par\u00ED p\u1EB9\u0300l\u00FA \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "\u1ECC\u0300r\u1ECD\u0300 a\u1E63\u00EC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 n\u00ED \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "\u1ECC\u0300r\u1ECD\u0300 a\u1E63\u00EC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\u00E1 \u00E0p\u1EB9\u1EB9r\u1EB9 mu " + code.pattern;
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal5 = HermesInternal;
                combined4 = "A\u1E63\u00EC\u1E63e: " + format;
              }
              return combined4;
            }
            case "not_multiple_of":
            {
              const _HermesInternal4 = HermesInternal;
              return "N\u1ECD\u0301mb\u00E0 a\u1E63\u00EC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 j\u1EB9\u0301 \u00E8y\u00E0 p\u00EDp\u00EDn ti " + code.divisor;
            }
            case "unrecognized_keys":
            {
              const _HermesInternal3 = HermesInternal;
              return "B\u1ECDt\u00ECn\u00EC \u00E0\u00ECm\u1ECD\u0300: " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              const _HermesInternal2 = HermesInternal;
              return "B\u1ECDt\u00ECn\u00EC a\u1E63\u00EC\u1E63e n\u00EDn\u00FA " + code.origin;
            }
            case "invalid_union":
            {
              return "\u00CCb\u00E1w\u1ECDl\u00E9 a\u1E63\u00EC\u1E63e";
            }
            case "invalid_element":
            {
              const _HermesInternal = HermesInternal;
              return "Iye a\u1E63\u00EC\u1E63e n\u00EDn\u00FA " + code.origin;
            }
            default:
            {
              return "\u00CCb\u00E1w\u1ECDl\u00E9 a\u1E63\u00EC\u1E63e";
            }
          }
        }
    };
    const obj2 = { string: { unit: "\u00E0mi", verb: "n\u00ED" }, file: { unit: "bytes", verb: "n\u00ED" }, array: { unit: "nkan", verb: "n\u00ED" }, set: { unit: "nkan", verb: "n\u00ED" } };
    closure_1 = { regex: "\u1EB9\u0300r\u1ECD \u00ECb\u00E1w\u1ECDl\u00E9", email: "\u00E0d\u00EDr\u1EB9\u0301s\u00EC \u00ECm\u1EB9\u0301l\u00EC", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "\u00E0k\u00F3k\u00F2 ISO", date: "\u1ECDj\u1ECD\u0301 ISO", time: "\u00E0k\u00F3k\u00F2 ISO", duration: "\u00E0k\u00F3k\u00F2 t\u00F3 p\u00E9 ISO", ipv4: "\u00E0d\u00EDr\u1EB9\u0301s\u00EC IPv4", ipv6: "\u00E0d\u00EDr\u1EB9\u0301s\u00EC IPv6", cidrv4: "\u00E0gb\u00E8gb\u00E8 IPv4", cidrv6: "\u00E0gb\u00E8gb\u00E8 IPv6", base64: "\u1ECD\u0300r\u1ECD\u0300 t\u00ED a k\u1ECD\u0301 n\u00ED base64", base64url: "\u1ECD\u0300r\u1ECD\u0300 base64url", json_string: "\u1ECD\u0300r\u1ECD\u0300 JSON", e164: "n\u1ECD\u0301mb\u00E0 E.164", jwt: "JWT", template_literal: "\u1EB9\u0300r\u1ECD \u00ECb\u00E1w\u1ECDl\u00E9" };
    let closure_2 = { nan: "NaN", number: "n\u1ECD\u0301mb\u00E0", array: "akop\u1ECD" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};