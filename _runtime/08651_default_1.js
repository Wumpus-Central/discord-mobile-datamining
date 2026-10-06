// === Module 8651: default_1 ===

// Module 8651 (default_1)
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
                combined = "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F instanceof " + code.expected + ", \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 " + tmp50;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F " + expected + ", \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 " + tmp50;
              }
              return combined;
            }
            case "invalid_value":
            {
              let combined1;
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                combined1 = "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F " + captureStackTrace.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 " + captureStackTrace.joinValues(code.values, "|");
              }
              return combined1;
            }
            case "too_big":
            {
              let str26 = "<";
              if (code.inclusive) {
                str26 = "<=";
              }
              if (obj2[code.origin] ?? null) {
                let tmp36;
                const _Number2 = Number;
                let one2 = tmp27.unit.one;
                const many2 = tmp27.unit.many;
                const _Math2 = Math;
                const few2 = tmp27.unit.few;
                const absolute = Math.abs(Number(code.maximum));
                const result = absolute % 10;
                const result1 = absolute % 100;
                if (11 > result1) {
                  if (1 !== result) {
                    let tmp37 = many2;
                    if (2 <= result) {
                      tmp37 = many2;
                      if (result <= 4) {
                        tmp37 = few2;
                      }
                    }
                    one2 = tmp37;
                  }
                  tmp36 = one2;
                } else {
                  tmp36 = many2;
                }
                const _HermesInternal13 = HermesInternal;
                const str31 = code.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435";
                const str32 = code.maximum;
                return "\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E " + str31 + " \u043F\u0430\u0432\u0456\u043D\u043D\u0430 " + (obj2[code.origin] ?? null).verb + " " + str26 + str32.toString() + " " + tmp36;
              } else {
                const _HermesInternal12 = HermesInternal;
                const str27 = code.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435";
                const str28 = code.maximum;
                return "\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E " + str27 + " \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C " + str26 + str28.toString();
              }
              break;
            }
            case "too_small":
            {
              let minimum;
              let minimum2;
              let origin;
              let origin2;
              let str18 = ">";
              if (code.inclusive) {
                str18 = ">=";
              }
              if (obj2[code.origin] ?? null) {
                let tmp22;
                const _Number = Number;
                let one = tmp15.unit.one;
                const many = tmp15.unit.many;
                const _Math = Math;
                const few = tmp15.unit.few;
                const absolute1 = Math.abs(Number(code.minimum));
                const result2 = absolute1 % 10;
                const result3 = absolute1 % 100;
                if (11 > result3) {
                  if (1 !== result2) {
                    let tmp23 = many;
                    if (2 <= result2) {
                      tmp23 = many;
                      if (result2 <= 4) {
                        tmp23 = few;
                      }
                    }
                    one = tmp23;
                  }
                  tmp22 = one;
                } else {
                  tmp22 = many;
                }
                ({ minimum: minimum2, origin: origin2 } = code);
                const _HermesInternal11 = HermesInternal;
                return "\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E " + origin2 + " \u043F\u0430\u0432\u0456\u043D\u043D\u0430 " + (obj2[code.origin] ?? null).verb + " " + str18 + minimum2.toString() + " " + tmp22;
              } else {
                ({ minimum, origin } = code);
                const _HermesInternal10 = HermesInternal;
                return "\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E " + origin + " \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C " + str18 + minimum.toString();
              }
              break;
            }
            case "invalid_format":
            {
              let combined2;
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined2 = "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined2 = "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined2 = "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined2 = "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 " + code.pattern;
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal5 = HermesInternal;
                combined2 = "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B " + format;
              }
              return combined2;
            }
            case "not_multiple_of":
            {
              const _HermesInternal4 = HermesInternal;
              return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C " + code.divisor;
            }
            case "unrecognized_keys":
            {
              let str3 = "\u043A\u043B\u044E\u0447";
              if (code.keys.length > 1) {
                str3 = "\u043A\u043B\u044E\u0447\u044B";
              }
              const _HermesInternal3 = HermesInternal;
              return "\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B " + str3 + ": " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              const _HermesInternal2 = HermesInternal;
              return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 " + code.origin;
            }
            case "invalid_union":
            {
              return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
            }
            case "invalid_element":
            {
              const _HermesInternal = HermesInternal;
              return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E " + code.origin;
            }
            default:
            {
              return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
            }
          }
        }
    };
    const obj2 = { string: obj3, array: obj4, set: obj5, file: obj6 };
    closure_1 = { regex: "\u0443\u0432\u043E\u0434", email: "email \u0430\u0434\u0440\u0430\u0441", url: "URL", emoji: "\u044D\u043C\u043E\u0434\u0437\u0456", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441", date: "ISO \u0434\u0430\u0442\u0430", time: "ISO \u0447\u0430\u0441", duration: "ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C", ipv4: "IPv4 \u0430\u0434\u0440\u0430\u0441", ipv6: "IPv6 \u0430\u0434\u0440\u0430\u0441", cidrv4: "IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D", cidrv6: "IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D", base64: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64", base64url: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url", json_string: "JSON \u0440\u0430\u0434\u043E\u043A", e164: "\u043D\u0443\u043C\u0430\u0440 E.164", jwt: "JWT", template_literal: "\u0443\u0432\u043E\u0434" };
    let closure_2 = { nan: "NaN", number: "\u043B\u0456\u043A", array: "\u043C\u0430\u0441\u0456\u045E" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};