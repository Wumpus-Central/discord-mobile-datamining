// _runtime/metro/08963__.js
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
        let string = { localeError: null };
        string = { string: null, file: null, array: null, set: null };
        string = {
          unit: { one: "\u0576\u0577\u0561\u0576", many: "\u0576\u0577\u0561\u0576\u0576\u0565\u0580" },
          verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
        };
        string.string = string;
        const obj1 = {
          unit: { one: "\u0562\u0561\u0575\u0569", many: "\u0562\u0561\u0575\u0569\u0565\u0580" },
          verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
        };
        string.file = obj1;
        const obj2 = {
          unit: { one: "\u057F\u0561\u0580\u0580", many: "\u057F\u0561\u0580\u0580\u0565\u0580" },
          verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
        };
        string.array = obj2;
        const obj3 = {
          unit: { one: "\u057F\u0561\u0580\u0580", many: "\u057F\u0561\u0580\u0580\u0565\u0580" },
          verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
        };
        string.set = obj3;
        closure_1 = {
          regex: "\u0574\u0578\u0582\u057F\u0584",
          email: "\u0567\u056C. \u0570\u0561\u057D\u0581\u0565",
          url: "URL",
          emoji: "\u0567\u0574\u0578\u057B\u056B",
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
          datetime: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E \u0587 \u056A\u0561\u0574",
          date: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E",
          time: "ISO \u056A\u0561\u0574",
          duration: "ISO \u057F\u0587\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
          ipv4: "IPv4 \u0570\u0561\u057D\u0581\u0565",
          ipv6: "IPv6 \u0570\u0561\u057D\u0581\u0565",
          cidrv4: "IPv4 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
          cidrv6: "IPv6 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
          base64: "base64 \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
          base64url: "base64url \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
          json_string: "JSON \u057F\u0578\u0572",
          e164: "E.164 \u0570\u0561\u0574\u0561\u0580",
          jwt: "JWT",
          template_literal: "\u0574\u0578\u0582\u057F\u0584",
        };
        closure_2 = { nan: "NaN", number: "\u0569\u056B\u057E", array: "\u0566\u0561\u0576\u0563\u057E\u0561\u056E" };
        string.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp43 = closure_2[parsedTypeResult];
              if (tmp43 == null) {
                tmp43 = parsedTypeResult;
              }
              const obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined =
                  "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 instanceof " +
                  code.expected +
                  ", \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 " +
                  tmp43;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined =
                  "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 " +
                  expected +
                  ", \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 " +
                  tmp43;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 =
                  "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 " +
                  closure_2.stringifyPrimitive(code.values[1]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 =
                  "\u054D\u056D\u0561\u056C \u057F\u0561\u0580\u0562\u0565\u0580\u0561\u056F\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 \u0570\u0565\u057F\u0587\u0575\u0561\u056C\u0576\u0565\u0580\u056B\u0581 \u0574\u0565\u056F\u0568\u055D " +
                  closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str38 = "<";
              if (code.inclusive) {
                str38 = "<=";
              }
              let tmp25 = obj[code.origin];
              if (tmp25 == null) {
                tmp25 = null;
              }
              if (tmp25) {
                const _Number2 = Number;
                let one2 = tmp25.unit.many;
                const _Math2 = Math;
                if (1 === Math.abs(Number(code.maximum))) {
                  one2 = tmp25.unit.one;
                }
                let str45 = code.origin;
                if (str45 == null) {
                  str45 = "\u0561\u0580\u056A\u0565\u0584";
                }
                let str46 = "";
                if (str45) {
                  const items = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
                  let str47 = "\u0568";
                  if (items.includes(str45[str45.length - 1])) {
                    str47 = "\u0576";
                  }
                  str46 = str45 + str47;
                }
                const _HermesInternal13 = HermesInternal;
                return (
                  "\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 " +
                  str46 +
                  " \u056F\u0578\u0582\u0576\u0565\u0576\u0561 " +
                  str38 +
                  code.maximum.toString() +
                  " " +
                  one2
                );
              } else {
                let str39 = code.origin;
                if (str39 == null) {
                  str39 = "\u0561\u0580\u056A\u0565\u0584";
                }
                let str40 = "";
                if (str39) {
                  const items1 = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
                  let str41 = "\u0568";
                  if (items1.includes(str39[str39.length - 1])) {
                    str41 = "\u0576";
                  }
                  str40 = str39 + str41;
                }
                const _HermesInternal12 = HermesInternal;
                return (
                  "\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 " +
                  str40 +
                  " \u056C\u056B\u0576\u056B " +
                  str38 +
                  code.maximum.toString()
                );
              }
              break;
            case "too_small":
              let str26 = ">";
              if (code.inclusive) {
                str26 = ">=";
              }
              let tmp15 = obj[code.origin];
              if (tmp15 == null) {
                tmp15 = null;
              }
              if (tmp15) {
                const _Number = Number;
                let one = tmp15.unit.many;
                const _Math = Math;
                if (1 === Math.abs(Number(code.minimum))) {
                  one = tmp15.unit.one;
                }
                const origin = code.origin;
                let str32 = "";
                if (origin) {
                  const items2 = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
                  let str33 = "\u0568";
                  if (items2.includes(origin[origin.length - 1])) {
                    str33 = "\u0576";
                  }
                  str32 = origin + str33;
                }
                const _HermesInternal11 = HermesInternal;
                return (
                  "\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 " +
                  str32 +
                  " \u056F\u0578\u0582\u0576\u0565\u0576\u0561 " +
                  str26 +
                  code.minimum.toString() +
                  " " +
                  one
                );
              } else {
                const origin1 = code.origin;
                let str27 = "";
                if (origin1) {
                  const items3 = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
                  let str28 = "\u0568";
                  if (items3.includes(origin1[origin1.length - 1])) {
                    str28 = "\u0576";
                  }
                  str27 = origin1 + str28;
                }
                const _HermesInternal10 = HermesInternal;
                return (
                  "\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 " +
                  str27 +
                  " \u056C\u056B\u0576\u056B " +
                  str26 +
                  code.minimum.toString()
                );
              }
              break;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined2 =
                  '\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057D\u056F\u057D\u057E\u056B "' +
                  code.prefix +
                  '"-\u0578\u057E';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined2 =
                  '\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0561\u057E\u0561\u0580\u057F\u057E\u056B "' +
                  code.suffix +
                  '"-\u0578\u057E';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined2 =
                  '\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057A\u0561\u0580\u0578\u0582\u0576\u0561\u056F\u056B "' +
                  code.includes +
                  '"';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined2 =
                  "\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0570\u0561\u0574\u0561\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u056B " +
                  code.pattern +
                  " \u0571\u0587\u0561\u0579\u0561\u0583\u056B\u0576";
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined2 = "\u054D\u056D\u0561\u056C " + format;
              }
              return combined2;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return (
                "\u054D\u056D\u0561\u056C \u0569\u056B\u057E\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0562\u0561\u0566\u0574\u0561\u057A\u0561\u057F\u056B\u056F \u056C\u056B\u0576\u056B " +
                code.divisor +
                "-\u056B"
              );
            case "unrecognized_keys":
              let str9 = "";
              if (code.keys.length > 1) {
                str9 = "\u0576\u0565\u0580";
              }
              const _HermesInternal3 = HermesInternal;
              return (
                "\u0549\u0573\u0561\u0576\u0561\u0579\u057E\u0561\u056E \u0562\u0561\u0576\u0561\u056C\u056B" +
                str9 +
                ". " +
                closure_2.joinValues(code.keys, ", ")
              );
            case "invalid_key":
              const origin2 = code.origin;
              let str5 = "";
              if (origin2) {
                const items4 = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
                let str6 = "\u0568";
                if (items4.includes(origin2[origin2.length - 1])) {
                  str6 = "\u0576";
                }
                str5 = origin2 + str6;
              }
              const _HermesInternal2 = HermesInternal;
              return "\u054D\u056D\u0561\u056C \u0562\u0561\u0576\u0561\u056C\u056B " + str5 + "-\u0578\u0582\u0574";
            case "invalid_union":
              return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
            case "invalid_element":
              const origin3 = code.origin;
              let str = "";
              if (origin3) {
                const items5 = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
                let str2 = "\u0568";
                if (items5.includes(origin3[origin3.length - 1])) {
                  str2 = "\u0576";
                }
                str = origin3 + str2;
              }
              const _HermesInternal = HermesInternal;
              return "\u054D\u056D\u0561\u056C \u0561\u0580\u056A\u0565\u0584 " + str + "-\u0578\u0582\u0574";
            default:
              return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
          }
        };
        return string;
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
