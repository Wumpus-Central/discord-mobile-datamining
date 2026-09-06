// _runtime/metro/08981__.js
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
          unit: {
            one: "\u0441\u0438\u043C\u0432\u043E\u043B",
            few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
            many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
          },
          verb: "\u0438\u043C\u0435\u0442\u044C",
        };
        string.string = string;
        const obj1 = {
          unit: {
            one: "\u0431\u0430\u0439\u0442",
            few: "\u0431\u0430\u0439\u0442\u0430",
            many: "\u0431\u0430\u0439\u0442",
          },
          verb: "\u0438\u043C\u0435\u0442\u044C",
        };
        string.file = obj1;
        const obj2 = {
          unit: {
            one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
            few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
            many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
          },
          verb: "\u0438\u043C\u0435\u0442\u044C",
        };
        string.array = obj2;
        const obj3 = {
          unit: {
            one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
            few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
            many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
          },
          verb: "\u0438\u043C\u0435\u0442\u044C",
        };
        string.set = obj3;
        closure_1 = {
          regex: "\u0432\u0432\u043E\u0434",
          email: "email \u0430\u0434\u0440\u0435\u0441",
          url: "URL",
          emoji: "\u044D\u043C\u043E\u0434\u0437\u0438",
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
          datetime: "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
          date: "ISO \u0434\u0430\u0442\u0430",
          time: "ISO \u0432\u0440\u0435\u043C\u044F",
          duration: "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
          ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
          ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
          cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
          cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
          base64: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64",
          base64url: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url",
          json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430",
          e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
          jwt: "JWT",
          template_literal: "\u0432\u0432\u043E\u0434",
        };
        closure_2 = {
          nan: "NaN",
          number: "\u0447\u0438\u0441\u043B\u043E",
          array: "\u043C\u0430\u0441\u0441\u0438\u0432",
        };
        string.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp50 = closure_2[parsedTypeResult];
              if (tmp50 == null) {
                tmp50 = parsedTypeResult;
              }
              const obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined =
                  "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C instanceof " +
                  code.expected +
                  ", \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E " +
                  tmp50;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined =
                  "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C " +
                  expected +
                  ", \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E " +
                  tmp50;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 =
                  "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C " +
                  closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 =
                  "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 " +
                  closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str26 = "<";
              if (code.inclusive) {
                str26 = "<=";
              }
              let tmp28 = obj[code.origin];
              if (tmp28 == null) {
                tmp28 = null;
              }
              if (tmp28) {
                const _Number2 = Number;
                let one2 = tmp28.unit.one;
                const many2 = tmp28.unit.many;
                const _Math2 = Math;
                const absolute = Math.abs(Number(code.maximum));
                const result = absolute % 10;
                const result1 = absolute % 100;
                if (11 > result1) {
                  if (1 !== result) {
                    let few2 = many2;
                    if (2 <= result) {
                      few2 = many2;
                      if (result <= 4) {
                        few2 = tmp28.unit.few;
                      }
                    }
                    one2 = few2;
                  }
                  let tmp37 = one2;
                } else {
                  tmp37 = many2;
                }
                let str31 = code.origin;
                if (str31 == null) {
                  str31 = "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435";
                }
                const _HermesInternal13 = HermesInternal;
                return (
                  "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E " +
                  str31 +
                  " \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C " +
                  str26 +
                  code.maximum.toString() +
                  " " +
                  tmp37
                );
              } else {
                let str27 = code.origin;
                if (str27 == null) {
                  str27 = "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435";
                }
                const _HermesInternal12 = HermesInternal;
                return (
                  "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E " +
                  str27 +
                  " \u0431\u0443\u0434\u0435\u0442 " +
                  str26 +
                  code.maximum.toString()
                );
              }
              break;
            case "too_small":
              let str20 = ">";
              if (code.inclusive) {
                str20 = ">=";
              }
              let tmp17 = obj[code.origin];
              if (tmp17 == null) {
                tmp17 = null;
              }
              if (tmp17) {
                const _Number = Number;
                let one = tmp17.unit.one;
                const many = tmp17.unit.many;
                const _Math = Math;
                const absolute1 = Math.abs(Number(code.minimum));
                const result2 = absolute1 % 10;
                const result3 = absolute1 % 100;
                if (11 > result3) {
                  if (1 !== result2) {
                    let few = many;
                    if (2 <= result2) {
                      few = many;
                      if (result2 <= 4) {
                        few = tmp17.unit.few;
                      }
                    }
                    one = few;
                  }
                  let tmp24 = one;
                } else {
                  tmp24 = many;
                }
                ({ minimum: minimum2, origin: origin2 } = code);
                const _HermesInternal11 = HermesInternal;
                return (
                  "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E " +
                  origin2 +
                  " \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C " +
                  str20 +
                  minimum2.toString() +
                  " " +
                  tmp24
                );
              } else {
                ({ minimum, origin } = code);
                const _HermesInternal10 = HermesInternal;
                return (
                  "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E " +
                  origin +
                  " \u0431\u0443\u0434\u0435\u0442 " +
                  str20 +
                  minimum.toString()
                );
              }
              break;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined2 =
                  '\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "' +
                  code.prefix +
                  '"';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined2 =
                  '\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "' +
                  code.suffix +
                  '"';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined2 =
                  '\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "' +
                  code.includes +
                  '"';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined2 =
                  "\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 " +
                  code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined2 = "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 " + format;
              }
              return combined2;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return (
                "\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C " +
                code.divisor
              );
            case "unrecognized_keys":
              let str3 = "\u044B\u0439";
              if (code.keys.length > 1) {
                str3 = "\u044B\u0435";
              }
              let str4 = "";
              if (code.keys.length > 1) {
                str4 = "\u0438";
              }
              const _HermesInternal3 = HermesInternal;
              return (
                "\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D" +
                str3 +
                " \u043A\u043B\u044E\u0447" +
                str4 +
                ": " +
                closure_2.joinValues(code.keys, ", ")
              );
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 " + code.origin;
            case "invalid_union":
              return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              return (
                "\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 " +
                code.origin
              );
            default:
              return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
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
