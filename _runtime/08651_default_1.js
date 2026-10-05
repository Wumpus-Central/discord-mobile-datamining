// _runtime/08651_default_1.js
import captureStackTrace2 from "08607_captureStackTrace.js";

let hasOwnProperty;

const self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let _Object = Object;
  tmp = Object.create
    ? (arg0, __esModule, arg2, arg3) => {
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
      }
    : (arg0, arg1, arg2, arg3) => {
        let tmp = arg3;
        if (undefined === arg3) {
          tmp = arg2;
        }
        arg0[tmp] = arg1[arg2];
      };
}
let closure_0 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create
    ? (arg0, value) => {
        const obj = { enumerable: true, value };
        Object.defineProperty(arg0, "default", obj);
      }
    : (arg0, arg1) => {
        arg0.default = arg1;
      };
}
let closure_1 = tmp3;
const tmp5 =
  (self && self.__importStar) ||
  ((__esModule) => {
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
function error() {}

export default function default_1() {
  if (typeof error === "function") {
    let obj = {
      localeError: (code) => {
        switch (code.code) {
          case "invalid_type": {
            let combined;
            const expected = closure_2[code.expected] ?? code.expected;
            const parsedTypeResult = captureStackTrace.parsedType(code.input);
            const obj = /^[A-Z]/;
            if (obj.test(code.expected)) {
              const _HermesInternal17 = HermesInternal;
              combined = "Ogiltig inmatning: f\u00F6rv\u00E4ntat instanceof " + code.expected + ", fick " + tmp48;
            } else {
              const _HermesInternal16 = HermesInternal;
              combined = "Ogiltig inmatning: f\u00F6rv\u00E4ntat " + expected + ", fick " + tmp48;
            }
            return combined;
          }
          case "invalid_value": {
            let combined1;
            if (1 === code.values.length) {
              const _HermesInternal15 = HermesInternal;
              combined1 =
                "Ogiltig inmatning: f\u00F6rv\u00E4ntat " + captureStackTrace.stringifyPrimitive(code.values[0]);
            } else {
              const _HermesInternal14 = HermesInternal;
              combined1 = "Ogiltigt val: f\u00F6rv\u00E4ntade en av " + captureStackTrace.joinValues(code.values, "|");
            }
            return combined1;
          }
          case "too_big": {
            let combined2;
            let str31 = "<";
            if (code.inclusive) {
              str31 = "<=";
            }
            let str32 = code.origin;
            if (obj2[code.origin] ?? null) {
              if (str32 == null) {
                str32 = "v\u00E4rdet";
              }
              const str37 = code.maximum;
              const _HermesInternal13 = HermesInternal;
              const str1 = str37.toString();
              const str38 = (obj2[code.origin] ?? null).unit ?? "element";
              combined2 = "F\u00F6r stor(t): f\u00F6rv\u00E4ntade " + str32 + " att ha " + str31 + str1 + " " + str38;
            } else {
              let str33 = str32;
              if (str32 == null) {
                str33 = "v\u00E4rdet";
              }
              const _HermesInternal12 = HermesInternal;
              const str34 = code.maximum;
              combined2 = "F\u00F6r stor(t): f\u00F6rv\u00E4ntat " + str33 + " att ha " + str31 + str34.toString();
            }
            return combined2;
          }
          case "too_small": {
            let combined3;
            let str21 = ">";
            if (code.inclusive) {
              str21 = ">=";
            }
            let str22 = code.origin;
            if (obj2[code.origin] ?? null) {
              if (str22 == null) {
                str22 = "v\u00E4rdet";
              }
              const _HermesInternal11 = HermesInternal;
              const str27 = code.minimum;
              combined3 =
                "F\u00F6r lite(t): f\u00F6rv\u00E4ntade " +
                str22 +
                " att ha " +
                str21 +
                str27.toString() +
                " " +
                tmp17.unit;
            } else {
              let str23 = str22;
              if (str22 == null) {
                str23 = "v\u00E4rdet";
              }
              const _HermesInternal10 = HermesInternal;
              const str24 = code.minimum;
              combined3 = "F\u00F6r lite(t): f\u00F6rv\u00E4ntade " + str23 + " att ha " + str21 + str24.toString();
            }
            return combined3;
          }
          case "invalid_format": {
            let combined4;
            if ("starts_with" === code.format) {
              const _HermesInternal9 = HermesInternal;
              combined4 = 'Ogiltig str\u00E4ng: m\u00E5ste b\u00F6rja med "' + code.prefix + '"';
            } else if ("ends_with" === code.format) {
              const _HermesInternal8 = HermesInternal;
              combined4 = 'Ogiltig str\u00E4ng: m\u00E5ste sluta med "' + code.suffix + '"';
            } else if ("includes" === code.format) {
              const _HermesInternal7 = HermesInternal;
              combined4 = 'Ogiltig str\u00E4ng: m\u00E5ste inneh\u00E5lla "' + code.includes + '"';
            } else if ("regex" === code.format) {
              const _HermesInternal6 = HermesInternal;
              combined4 = 'Ogiltig str\u00E4ng: m\u00E5ste matcha m\u00F6nstret "' + code.pattern + '"';
            } else {
              const format = closure_1[code.format] ?? code.format;
              const _HermesInternal5 = HermesInternal;
              combined4 = "Ogiltig(t) " + format;
            }
            return combined4;
          }
          case "not_multiple_of": {
            const _HermesInternal4 = HermesInternal;
            return "Ogiltigt tal: m\u00E5ste vara en multipel av " + code.divisor;
          }
          case "unrecognized_keys": {
            let str5 = "Ok\u00E4nd nyckel";
            if (code.keys.length > 1) {
              str5 = "Ok\u00E4nda nycklar";
            }
            const _HermesInternal3 = HermesInternal;
            return "" + str5 + ": " + captureStackTrace.joinValues(code.keys, ", ");
          }
          case "invalid_key": {
            const _HermesInternal2 = HermesInternal;
            const str3 = code.origin ?? "v\u00E4rdet";
            return "Ogiltig nyckel i " + str3;
          }
          case "invalid_union": {
            return "Ogiltig input";
          }
          case "invalid_element": {
            const _HermesInternal = HermesInternal;
            const str = code.origin ?? "v\u00E4rdet";
            return "Ogiltigt v\u00E4rde i " + str;
          }
          default: {
            return "Ogiltig input";
          }
        }
      },
    };
    const obj2 = {
      string: { unit: "tecken", verb: "att ha" },
      file: { unit: "bytes", verb: "att ha" },
      array: { unit: "objekt", verb: "att inneh\u00E5lla" },
      set: { unit: "objekt", verb: "att inneh\u00E5lla" },
    };
    closure_1 = {
      regex: "regulj\u00E4rt uttryck",
      email: "e-postadress",
      url: "URL",
      emoji: "emoji",
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
      datetime: "ISO-datum och tid",
      date: "ISO-datum",
      time: "ISO-tid",
      duration: "ISO-varaktighet",
      ipv4: "IPv4-intervall",
      ipv6: "IPv6-intervall",
      cidrv4: "IPv4-spektrum",
      cidrv6: "IPv6-spektrum",
      base64: "base64-kodad str\u00E4ng",
      base64url: "base64url-kodad str\u00E4ng",
      json_string: "JSON-str\u00E4ng",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "mall-literal",
    };
    let closure_2 = { nan: "NaN", number: "antal", array: "lista" };
    return obj;
  } else {
    let str = "Trying to call a non-function";
    throw new TypeError("Trying to call a non-function");
  }
}
