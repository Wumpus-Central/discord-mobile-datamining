// === Module 8696: default_1 ===

// Module 8696 (default_1)
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
                combined = "\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA instanceof " + code.expected + "\uFF0C\u4F46\u6536\u5230 " + tmp48;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA " + expected + "\uFF0C\u4F46\u6536\u5230 " + tmp48;
              }
              return combined;
            }
            case "invalid_value":
            {
              let combined1;
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                combined1 = "\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA " + captureStackTrace.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 " + captureStackTrace.joinValues(code.values, "|");
              }
              return combined1;
            }
            case "too_big":
            {
              let combined2;
              let str27 = "<";
              if (code.inclusive) {
                str27 = "<=";
              }
              let str28 = code.origin;
              if (obj2[code.origin] ?? null) {
                if (str28 == null) {
                  str28 = "\u503C";
                }
                const str33 = code.maximum;
                const _HermesInternal13 = HermesInternal;
                const str1 = str33.toString();
                const str34 = (obj2[code.origin] ?? null).unit ?? "\u500B\u5143\u7D20";
                combined2 = "\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F " + str28 + " \u61C9\u70BA " + str27 + str1 + " " + str34;
              } else {
                let str29 = str28;
                if (str28 == null) {
                  str29 = "\u503C";
                }
                const _HermesInternal12 = HermesInternal;
                const str30 = code.maximum;
                combined2 = "\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F " + str29 + " \u61C9\u70BA " + str27 + str30.toString();
              }
              return combined2;
            }
            case "too_small":
            {
              let combined3;
              let minimum;
              let origin;
              let str21 = ">";
              if (code.inclusive) {
                str21 = ">=";
              }
              ({ origin, minimum } = code);
              const str48 = minimum.toString();
              if (obj2[code.origin] ?? null) {
                const _HermesInternal11 = HermesInternal;
                combined3 = "\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F " + origin + " \u61C9\u70BA " + str21 + str48 + " " + tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F " + origin + " \u61C9\u70BA " + str21 + str48;
              }
              return combined3;
            }
            case "invalid_format":
            {
              let combined4;
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined4 = "\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 \"" + code.prefix + "\" \u958B\u982D";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = "\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 \"" + code.suffix + "\" \u7D50\u5C3E";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F " + code.pattern;
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal5 = HermesInternal;
                combined4 = "\u7121\u6548\u7684 " + format;
              }
              return combined4;
            }
            case "not_multiple_of":
            {
              const _HermesInternal4 = HermesInternal;
              return "\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA " + code.divisor + " \u7684\u500D\u6578";
            }
            case "unrecognized_keys":
            {
              let str5 = "";
              if (code.keys.length > 1) {
                str5 = "\u5011";
              }
              const _HermesInternal3 = HermesInternal;
              return "\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C" + str5 + "\uFF1A" + captureStackTrace.joinValues(code.keys, "\u3001");
            }
            case "invalid_key":
            {
              const _HermesInternal2 = HermesInternal;
              return "" + code.origin + " \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C";
            }
            case "invalid_union":
            {
              return "\u7121\u6548\u7684\u8F38\u5165\u503C";
            }
            case "invalid_element":
            {
              const _HermesInternal = HermesInternal;
              return "" + code.origin + " \u4E2D\u6709\u7121\u6548\u7684\u503C";
            }
            default:
            {
              return "\u7121\u6548\u7684\u8F38\u5165\u503C";
            }
          }
        }
    };
    const obj2 = { string: { unit: "\u5B57\u5143", verb: "\u64C1\u6709" }, file: { unit: "\u4F4D\u5143\u7D44", verb: "\u64C1\u6709" }, array: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" }, set: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" } };
    closure_1 = { regex: "\u8F38\u5165", email: "\u90F5\u4EF6\u5730\u5740", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO \u65E5\u671F\u6642\u9593", date: "ISO \u65E5\u671F", time: "ISO \u6642\u9593", duration: "ISO \u671F\u9593", ipv4: "IPv4 \u4F4D\u5740", ipv6: "IPv6 \u4F4D\u5740", cidrv4: "IPv4 \u7BC4\u570D", cidrv6: "IPv6 \u7BC4\u570D", base64: "base64 \u7DE8\u78BC\u5B57\u4E32", base64url: "base64url \u7DE8\u78BC\u5B57\u4E32", json_string: "JSON \u5B57\u4E32", e164: "E.164 \u6578\u503C", jwt: "JWT", template_literal: "\u8F38\u5165" };
    let closure_2 = { nan: "NaN" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};