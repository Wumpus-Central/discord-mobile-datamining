// === Module 8631: default_1 ===

// Module 8631 (default_1)
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
                combined = "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 instanceof " + code.expected + ", \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 " + tmp43;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 " + expected + ", \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 " + tmp43;
              }
              return combined;
            }
            case "invalid_value":
            {
              let combined1;
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                combined1 = "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 " + captureStackTrace.stringifyPrimitive(code.values[1]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "\u054D\u056D\u0561\u056C \u057F\u0561\u0580\u0562\u0565\u0580\u0561\u056F\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 \u0570\u0565\u057F\u0587\u0575\u0561\u056C\u0576\u0565\u0580\u056B\u0581 \u0574\u0565\u056F\u0568\u055D " + captureStackTrace.joinValues(code.values, "|");
              }
              return combined1;
            }
            case "too_big":
            {
              let str38 = "<";
              if (code.inclusive) {
                str38 = "<=";
              }
              if (obj2[code.origin] ?? null) {
                const _Number2 = Number;
                let many2 = tmp25.unit.many;
                const _Math2 = Math;
                const one2 = tmp25.unit.one;
                if (1 === Math.abs(Number(code.maximum))) {
                  many2 = one2;
                }
                let str46 = "";
                if (code.origin ?? "\u0561\u0580\u056A\u0565\u0584") {
                  const items = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
                  let str47 = "\u0568";
                  if (items.includes((code.origin ?? "\u0561\u0580\u056A\u0565\u0584")[(code.origin ?? "\u0561\u0580\u056A\u0565\u0584").length - 1])) {
                    str47 = "\u0576";
                  }
                  str46 = str45 + str47;
                }
                const _HermesInternal13 = HermesInternal;
                const str48 = code.maximum;
                return "\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 " + str46 + " \u056F\u0578\u0582\u0576\u0565\u0576\u0561 " + str38 + str48.toString() + " " + many2;
              } else {
                let str40 = "";
                if (code.origin ?? "\u0561\u0580\u056A\u0565\u0584") {
                  const items1 = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
                  let str41 = "\u0568";
                  if (items1.includes((code.origin ?? "\u0561\u0580\u056A\u0565\u0584")[(code.origin ?? "\u0561\u0580\u056A\u0565\u0584").length - 1])) {
                    str41 = "\u0576";
                  }
                  str40 = str39 + str41;
                }
                const _HermesInternal12 = HermesInternal;
                const str42 = code.maximum;
                return "\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 " + str40 + " \u056C\u056B\u0576\u056B " + str38 + str42.toString();
              }
              break;
            }
            case "too_small":
            {
              let str26 = ">";
              if (code.inclusive) {
                str26 = ">=";
              }
              if (obj2[code.origin] ?? null) {
                const _Number = Number;
                let many = tmp15.unit.many;
                const _Math = Math;
                const one = tmp15.unit.one;
                if (1 === Math.abs(Number(code.minimum))) {
                  many = one;
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
                const str34 = code.minimum;
                return "\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 " + str32 + " \u056F\u0578\u0582\u0576\u0565\u0576\u0561 " + str26 + str34.toString() + " " + many;
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
                const str29 = code.minimum;
                return "\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 " + str27 + " \u056C\u056B\u0576\u056B " + str26 + str29.toString();
              }
              break;
            }
            case "invalid_format":
            {
              let combined2;
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined2 = "\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057D\u056F\u057D\u057E\u056B \"" + code.prefix + "\"-\u0578\u057E";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined2 = "\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0561\u057E\u0561\u0580\u057F\u057E\u056B \"" + code.suffix + "\"-\u0578\u057E";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined2 = "\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057A\u0561\u0580\u0578\u0582\u0576\u0561\u056F\u056B \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined2 = "\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0570\u0561\u0574\u0561\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u056B " + code.pattern + " \u0571\u0587\u0561\u0579\u0561\u0583\u056B\u0576";
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal5 = HermesInternal;
                combined2 = "\u054D\u056D\u0561\u056C " + format;
              }
              return combined2;
            }
            case "not_multiple_of":
            {
              const _HermesInternal4 = HermesInternal;
              return "\u054D\u056D\u0561\u056C \u0569\u056B\u057E\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0562\u0561\u0566\u0574\u0561\u057A\u0561\u057F\u056B\u056F \u056C\u056B\u0576\u056B " + code.divisor + "-\u056B";
            }
            case "unrecognized_keys":
            {
              let str9 = "";
              if (code.keys.length > 1) {
                str9 = "\u0576\u0565\u0580";
              }
              const _HermesInternal3 = HermesInternal;
              return "\u0549\u0573\u0561\u0576\u0561\u0579\u057E\u0561\u056E \u0562\u0561\u0576\u0561\u056C\u056B" + str9 + ". " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
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
            }
            case "invalid_union":
            {
              return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
            }
            case "invalid_element":
            {
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
            }
            default:
            {
              return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
            }
          }
        }
    };
    const obj2 = { string: obj3, file: obj4, array: obj5, set: obj6 };
    closure_1 = { regex: "\u0574\u0578\u0582\u057F\u0584", email: "\u0567\u056C. \u0570\u0561\u057D\u0581\u0565", url: "URL", emoji: "\u0567\u0574\u0578\u057B\u056B", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E \u0587 \u056A\u0561\u0574", date: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E", time: "ISO \u056A\u0561\u0574", duration: "ISO \u057F\u0587\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576", ipv4: "IPv4 \u0570\u0561\u057D\u0581\u0565", ipv6: "IPv6 \u0570\u0561\u057D\u0581\u0565", cidrv4: "IPv4 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584", cidrv6: "IPv6 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584", base64: "base64 \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572", base64url: "base64url \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572", json_string: "JSON \u057F\u0578\u0572", e164: "E.164 \u0570\u0561\u0574\u0561\u0580", jwt: "JWT", template_literal: "\u0574\u0578\u0582\u057F\u0584" };
    let closure_2 = { nan: "NaN", number: "\u0569\u056B\u057E", array: "\u0566\u0561\u0576\u0563\u057E\u0561\u056E" };
    return obj;
  } else {
    let str = "Trying to call a non-function";
    throw new TypeError("Trying to call a non-function");
  }
};