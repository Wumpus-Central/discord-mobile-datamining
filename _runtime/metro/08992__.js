// _runtime/metro/08992__.js
import _mod8939 from "08939__.js";

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
        obj = {
          string: { unit: "\u5B57\u7B26", verb: "\u5305\u542B" },
          file: { unit: "\u5B57\u8282", verb: "\u5305\u542B" },
          array: { unit: "\u9879", verb: "\u5305\u542B" },
          set: { unit: "\u9879", verb: "\u5305\u542B" },
        };
        closure_1 = {
          regex: "\u8F93\u5165",
          email: "\u7535\u5B50\u90AE\u4EF6",
          url: "URL",
          emoji: "\u8868\u60C5\u7B26\u53F7",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO\u65E5\u671F\u65F6\u95F4",
          date: "ISO\u65E5\u671F",
          time: "ISO\u65F6\u95F4",
          duration: "ISO\u65F6\u957F",
          ipv4: "IPv4\u5730\u5740",
          ipv6: "IPv6\u5730\u5740",
          cidrv4: "IPv4\u7F51\u6BB5",
          cidrv6: "IPv6\u7F51\u6BB5",
          base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32",
          base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32",
          json_string: "JSON\u5B57\u7B26\u4E32",
          e164: "E.164\u53F7\u7801",
          jwt: "JWT",
          template_literal: "\u8F93\u5165",
        };
        closure_2 = { nan: "NaN", number: "\u6570\u5B57", array: "\u6570\u7EC4", null: "\u7A7A\u503C(null)" };
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
                let combined =
                  "\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B instanceof " +
                  code.expected +
                  "\uFF0C\u5B9E\u9645\u63A5\u6536 " +
                  tmp48;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined =
                  "\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B " + expected + "\uFF0C\u5B9E\u9645\u63A5\u6536 " + tmp48;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 =
                  "\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 =
                  "\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 " +
                  closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str26 = "<";
              if (code.inclusive) {
                str26 = "<=";
              }
              let tmp27 = obj[code.origin];
              if (tmp27 == null) {
                tmp27 = null;
              }
              let str27 = code.origin;
              if (tmp27) {
                if (str27 == null) {
                  str27 = "\u503C";
                }
                let str = code.maximum.toString();
                let str33 = tmp27.unit;
                if (str33 == null) {
                  str33 = "\u4E2A\u5143\u7D20";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B " + str27 + " " + str26 + str + " " + str33;
              } else {
                let str28 = str27;
                if (str27 == null) {
                  str28 = "\u503C";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 =
                  "\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B " + str28 + " " + str26 + code.maximum.toString();
              }
              return combined2;
            case "too_small":
              let str19 = ">";
              if (code.inclusive) {
                str19 = ">=";
              }
              let tmp15 = obj[code.origin];
              if (tmp15 == null) {
                tmp15 = null;
              }
              ({ origin, minimum } = code);
              const str1 = minimum.toString();
              if (tmp15) {
                const _HermesInternal11 = HermesInternal;
                let combined3 =
                  "\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B " + origin + " " + str19 + str1 + " " + tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B " + origin + " " + str19 + str1;
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 =
                  '\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "' + code.prefix + '" \u5F00\u5934';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = '\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "' + code.suffix + '" \u7ED3\u5C3E';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = '\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B "' + code.includes + '"';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 =
                  "\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F " +
                  code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "\u65E0\u6548" + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F " + code.divisor + " \u7684\u500D\u6570";
            case "unrecognized_keys":
              const _HermesInternal3 = HermesInternal;
              return "\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "" + code.origin + " \u4E2D\u7684\u952E(key)\u65E0\u6548";
            case "invalid_union":
              return "\u65E0\u6548\u8F93\u5165";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = " \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)";
              return "" + code.origin + " \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)";
            default:
              return "\u65E0\u6548\u8F93\u5165";
          }
        };
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let closure_2 = fn(_mod8939);
    function error() {}
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
