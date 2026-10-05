// === Module 8625: default_1 ===

// Module 8625 (default_1)
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
                combined = "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A instanceof " + code.expected + " \u0645\u06CC\u200C\u0628\u0648\u062F\u060C " + tmp48 + " \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F";
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A " + expected + " \u0645\u06CC\u200C\u0628\u0648\u062F\u060C " + tmp48 + " \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F";
              }
              return combined;
            }
            case "invalid_value":
            {
              let combined1;
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                combined1 = "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A " + captureStackTrace.stringifyPrimitive(code.values[0]) + " \u0645\u06CC\u200C\u0628\u0648\u062F";
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 " + captureStackTrace.joinValues(code.values, "|") + " \u0645\u06CC\u200C\u0628\u0648\u062F";
              }
              return combined1;
            }
            case "too_big":
            {
              let combined2;
              let str29 = "<";
              if (code.inclusive) {
                str29 = "<=";
              }
              let str30 = code.origin;
              if (obj2[code.origin] ?? null) {
                if (str30 == null) {
                  str30 = "\u0645\u0642\u062F\u0627\u0631";
                }
                const str36 = code.maximum;
                const _HermesInternal13 = HermesInternal;
                const str1 = str36.toString();
                const str37 = (obj2[code.origin] ?? null).unit ?? "\u0639\u0646\u0635\u0631";
                combined2 = "\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: " + str30 + " \u0628\u0627\u06CC\u062F " + str29 + str1 + " " + str37 + " \u0628\u0627\u0634\u062F";
              } else {
                let str31 = str30;
                if (str30 == null) {
                  str31 = "\u0645\u0642\u062F\u0627\u0631";
                }
                const _HermesInternal12 = HermesInternal;
                const str32 = code.maximum;
                combined2 = "\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: " + str31 + " \u0628\u0627\u06CC\u062F " + str29 + str32.toString() + " \u0628\u0627\u0634\u062F";
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
              const str56 = minimum.toString();
              if (obj2[code.origin] ?? null) {
                const _HermesInternal11 = HermesInternal;
                combined3 = "\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: " + origin + " \u0628\u0627\u06CC\u062F " + str21 + str56 + " " + tmp15.unit + " \u0628\u0627\u0634\u062F";
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: " + origin + " \u0628\u0627\u06CC\u062F " + str21 + str56 + " \u0628\u0627\u0634\u062F";
              }
              return combined3;
            }
            case "invalid_format":
            {
              let combined4;
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined4 = "\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \"" + code.prefix + "\" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = "\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \"" + code.suffix + "\" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 \"" + code.includes + "\" \u0628\u0627\u0634\u062F";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC " + code.pattern + " \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F";
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal5 = HermesInternal;
                combined4 = "" + format + " \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
              }
              return combined4;
            }
            case "not_multiple_of":
            {
              const _HermesInternal4 = HermesInternal;
              return "\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 " + code.divisor + " \u0628\u0627\u0634\u062F";
            }
            case "unrecognized_keys":
            {
              let str3 = "";
              if (code.keys.length > 1) {
                str3 = "\u0647\u0627\u06CC";
              }
              const _HermesInternal3 = HermesInternal;
              return "\u06A9\u0644\u06CC\u062F" + str3 + " \u0646\u0627\u0634\u0646\u0627\u0633: " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              const _HermesInternal2 = HermesInternal;
              return "\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 " + code.origin;
            }
            case "invalid_union":
            {
              return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
            }
            case "invalid_element":
            {
              const _HermesInternal = HermesInternal;
              return "\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 " + code.origin;
            }
            default:
            {
              return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
            }
          }
        }
    };
    const obj2 = { string: { unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" }, file: { unit: "\u0628\u0627\u06CC\u062A", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" }, array: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" }, set: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" } };
    closure_1 = { regex: "\u0648\u0631\u0648\u062F\u06CC", email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644", url: "URL", emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648", date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648", time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648", duration: "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648", ipv4: "IPv4 \u0622\u062F\u0631\u0633", ipv6: "IPv6 \u0622\u062F\u0631\u0633", cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647", cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647", base64: "base64-encoded \u0631\u0634\u062A\u0647", base64url: "base64url-encoded \u0631\u0634\u062A\u0647", json_string: "JSON \u0631\u0634\u062A\u0647", e164: "E.164 \u0639\u062F\u062F", jwt: "JWT", template_literal: "\u0648\u0631\u0648\u062F\u06CC" };
    let closure_2 = { nan: "NaN", number: "\u0639\u062F\u062F", array: "\u0622\u0631\u0627\u06CC\u0647" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};