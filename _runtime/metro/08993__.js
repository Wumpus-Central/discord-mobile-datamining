// === Module 8993: ? ===

// Module 8993
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
        obj = { string: { unit: "\u5B57\u5143", verb: "\u64C1\u6709" }, file: { unit: "\u4F4D\u5143\u7D44", verb: "\u64C1\u6709" }, array: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" }, set: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" } };
        closure_1 = { regex: "\u8F38\u5165", email: "\u90F5\u4EF6\u5730\u5740", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO \u65E5\u671F\u6642\u9593", date: "ISO \u65E5\u671F", time: "ISO \u6642\u9593", duration: "ISO \u671F\u9593", ipv4: "IPv4 \u4F4D\u5740", ipv6: "IPv6 \u4F4D\u5740", cidrv4: "IPv4 \u7BC4\u570D", cidrv6: "IPv6 \u7BC4\u570D", base64: "base64 \u7DE8\u78BC\u5B57\u4E32", base64url: "base64url \u7DE8\u78BC\u5B57\u4E32", json_string: "JSON \u5B57\u4E32", e164: "E.164 \u6578\u503C", jwt: "JWT", template_literal: "\u8F38\u5165" };
        closure_2 = { nan: "NaN" };
        obj.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp48 = closure_2[parsedTypeResult];
              if (tmp48 == null) {
                tmp48 = parsedTypeResult;
              }
              obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined = "\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA instanceof " + code.expected + "\uFF0C\u4F46\u6536\u5230 " + tmp48;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA " + expected + "\uFF0C\u4F46\u6536\u5230 " + tmp48;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str27 = "<";
              if (code.inclusive) {
                str27 = "<=";
              }
              let tmp27 = obj[code.origin];
              if (tmp27 == null) {
                tmp27 = null;
              }
              let str28 = code.origin;
              if (tmp27) {
                if (str28 == null) {
                  str28 = "\u503C";
                }
                let str = code.maximum.toString();
                let str34 = tmp27.unit;
                if (str34 == null) {
                  str34 = "\u500B\u5143\u7D20";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F " + str28 + " \u61C9\u70BA " + str27 + str + " " + str34;
              } else {
                let str29 = str28;
                if (str28 == null) {
                  str29 = "\u503C";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F " + str29 + " \u61C9\u70BA " + str27 + code.maximum.toString();
              }
              return combined2;
            case "too_small":
              let str21 = ">";
              if (code.inclusive) {
                str21 = ">=";
              }
              let tmp15 = obj[code.origin];
              if (tmp15 == null) {
                tmp15 = null;
              }
              ({ origin, minimum } = code);
              const str1 = minimum.toString();
              if (tmp15) {
                const _HermesInternal11 = HermesInternal;
                let combined3 = "\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F " + origin + " \u61C9\u70BA " + str21 + str1 + " " + tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F " + origin + " \u61C9\u70BA " + str21 + str1;
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = "\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 \"" + code.prefix + "\" \u958B\u982D";
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
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "\u7121\u6548\u7684 " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA " + code.divisor + " \u7684\u500D\u6578";
            case "unrecognized_keys":
              let str5 = "";
              if (code.keys.length > 1) {
                str5 = "\u5011";
              }
              const _HermesInternal3 = HermesInternal;
              return "\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C" + str5 + "\uFF1A" + closure_2.joinValues(code.keys, "\u3001");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "" + code.origin + " \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C";
            case "invalid_union":
              return "\u7121\u6548\u7684\u8F38\u5165\u503C";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = " \u4E2D\u6709\u7121\u6548\u7684\u503C";
              return "" + code.origin + " \u4E2D\u6709\u7121\u6548\u7684\u503C";
            default:
              return "\u7121\u6548\u7684\u8F38\u5165\u503C";
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