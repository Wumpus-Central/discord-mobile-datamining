// === Module 8652: default_1 ===

// Module 8652 (default_1)
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
                combined = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D instanceof " + code.expected + ", \u043F\u043E\u043B\u0443\u0447\u0435\u043D " + tmp49;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D " + expected + ", \u043F\u043E\u043B\u0443\u0447\u0435\u043D " + tmp49;
              }
              return combined;
            }
            case "invalid_value":
            {
              let combined1;
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                combined1 = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D " + captureStackTrace.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u043E\u043F\u0446\u0438\u044F: \u043E\u0447\u0430\u043A\u0432\u0430\u043D\u043E \u0435\u0434\u043D\u043E \u043E\u0442 " + captureStackTrace.joinValues(code.values, "|");
              }
              return combined1;
            }
            case "too_big":
            {
              let combined2;
              let str31 = "<";
              if (code.inclusive) {
                str31 = "<=";
              }
              let str32 = code.origin;
              if (obj2[code.origin] ?? null) {
                if (str32 == null) {
                  str32 = "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442";
                }
                const str37 = code.maximum;
                const _HermesInternal13 = HermesInternal;
                const str1 = str37.toString();
                const str38 = (obj2[code.origin] ?? null).unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430";
                combined2 = "\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 " + str32 + " \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 " + str31 + str1 + " " + str38;
              } else {
                let str33 = str32;
                if (str32 == null) {
                  str33 = "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442";
                }
                const _HermesInternal12 = HermesInternal;
                const str34 = code.maximum;
                combined2 = "\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 " + str33 + " \u0434\u0430 \u0431\u044A\u0434\u0435 " + str31 + str34.toString();
              }
              return combined2;
            }
            case "too_small":
            {
              let combined3;
              let minimum;
              let origin;
              let str25 = ">";
              if (code.inclusive) {
                str25 = ">=";
              }
              ({ origin, minimum } = code);
              const str54 = minimum.toString();
              if (obj2[code.origin] ?? null) {
                const _HermesInternal11 = HermesInternal;
                combined3 = "\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 " + origin + " \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 " + str25 + str54 + " " + tmp16.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 " + origin + " \u0434\u0430 \u0431\u044A\u0434\u0435 " + str25 + str54;
              }
              return combined3;
            }
            case "invalid_format":
            {
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u0432\u0430 \u0441 \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u0432\u044A\u0440\u0448\u0432\u0430 \u0441 \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0432\u0430 \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0432\u043F\u0430\u0434\u0430 \u0441 " + code.pattern;
              } else {
                let str11 = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D";
                if ("emoji" === code.format) {
                  str11 = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
                }
                if ("datetime" === code.format) {
                  str11 = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
                }
                if ("date" === code.format) {
                  str11 = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430";
                }
                if ("time" === code.format) {
                  str11 = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
                }
                if ("duration" === code.format) {
                  str11 = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430";
                }
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal5 = HermesInternal;
                return "" + str11 + " " + format;
              }
              break;
            }
            case "not_multiple_of":
            {
              const _HermesInternal4 = HermesInternal;
              return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E \u0447\u0438\u0441\u043B\u043E: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043A\u0440\u0430\u0442\u043D\u043E \u043D\u0430 " + code.divisor;
            }
            case "unrecognized_keys":
            {
              let str3 = "";
              let str4 = "";
              if (code.keys.length > 1) {
                str4 = "\u0438";
              }
              if (code.keys.length > 1) {
                str3 = "\u043E\u0432\u0435";
              }
              const _HermesInternal3 = HermesInternal;
              return "\u041D\u0435\u0440\u0430\u0437\u043F\u043E\u0437\u043D\u0430\u0442" + str4 + " \u043A\u043B\u044E\u0447" + str3 + ": " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              const _HermesInternal2 = HermesInternal;
              return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043A\u043B\u044E\u0447 \u0432 " + code.origin;
            }
            case "invalid_union":
            {
              return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
            }
            case "invalid_element":
            {
              const _HermesInternal = HermesInternal;
              return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 \u0432 " + code.origin;
            }
            default:
            {
              return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
            }
          }
        }
    };
    const obj2 = { string: { unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" }, file: { unit: "\u0431\u0430\u0439\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" }, array: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" }, set: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" } };
    closure_1 = { regex: "\u0432\u0445\u043E\u0434", email: "\u0438\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441", url: "URL", emoji: "\u0435\u043C\u043E\u0434\u0436\u0438", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO \u0432\u0440\u0435\u043C\u0435", date: "ISO \u0434\u0430\u0442\u0430", time: "ISO \u0432\u0440\u0435\u043C\u0435", duration: "ISO \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442", ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441", ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441", cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D", cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D", base64: "base64-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437", base64url: "base64url-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437", json_string: "JSON \u043D\u0438\u0437", e164: "E.164 \u043D\u043E\u043C\u0435\u0440", jwt: "JWT", template_literal: "\u0432\u0445\u043E\u0434" };
    let closure_2 = { nan: "NaN", number: "\u0447\u0438\u0441\u043B\u043E", array: "\u043C\u0430\u0441\u0438\u0432" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};