// _runtime/08665_default_1.js
import captureStackTrace2 from "08642_captureStackTrace.js";

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
              combined =
                "\u00C9rv\u00E9nytelen bemenet: a v\u00E1rt \u00E9rt\u00E9k instanceof " +
                code.expected +
                ", a kapott \u00E9rt\u00E9k " +
                tmp48;
            } else {
              const _HermesInternal16 = HermesInternal;
              combined =
                "\u00C9rv\u00E9nytelen bemenet: a v\u00E1rt \u00E9rt\u00E9k " +
                expected +
                ", a kapott \u00E9rt\u00E9k " +
                tmp48;
            }
            return combined;
          }
          case "invalid_value": {
            let combined1;
            if (1 === code.values.length) {
              const _HermesInternal15 = HermesInternal;
              combined1 =
                "\u00C9rv\u00E9nytelen bemenet: a v\u00E1rt \u00E9rt\u00E9k " +
                captureStackTrace.stringifyPrimitive(code.values[0]);
            } else {
              const _HermesInternal14 = HermesInternal;
              combined1 =
                "\u00C9rv\u00E9nytelen opci\u00F3: valamelyik \u00E9rt\u00E9k v\u00E1rt " +
                captureStackTrace.joinValues(code.values, "|");
            }
            return combined1;
          }
          case "too_big": {
            let combined2;
            let str26 = "<";
            if (code.inclusive) {
              str26 = "<=";
            }
            let str27 = code.origin;
            if (obj2[code.origin] ?? null) {
              if (str27 == null) {
                str27 = "\u00E9rt\u00E9k";
              }
              const str32 = code.maximum;
              const _HermesInternal13 = HermesInternal;
              const str1 = str32.toString();
              const str33 = (obj2[code.origin] ?? null).unit ?? "elem";
              combined2 = "T\u00FAl nagy: " + str27 + " m\u00E9rete t\u00FAl nagy " + str26 + str1 + " " + str33;
            } else {
              let str28 = str27;
              if (str27 == null) {
                str28 = "\u00E9rt\u00E9k";
              }
              const _HermesInternal12 = HermesInternal;
              const str29 = code.maximum;
              combined2 =
                "T\u00FAl nagy: a bemeneti \u00E9rt\u00E9k " + str28 + " t\u00FAl nagy: " + str26 + str29.toString();
            }
            return combined2;
          }
          case "too_small": {
            let combined3;
            let minimum;
            let origin;
            let str20 = ">";
            if (code.inclusive) {
              str20 = ">=";
            }
            ({ origin, minimum } = code);
            const str47 = minimum.toString();
            if (obj2[code.origin] ?? null) {
              const _HermesInternal11 = HermesInternal;
              combined3 =
                "T\u00FAl kicsi: a bemeneti \u00E9rt\u00E9k " +
                origin +
                " m\u00E9rete t\u00FAl kicsi " +
                str20 +
                str47 +
                " " +
                tmp15.unit;
            } else {
              const _HermesInternal10 = HermesInternal;
              combined3 = "T\u00FAl kicsi: a bemeneti \u00E9rt\u00E9k " + origin + " t\u00FAl kicsi " + str20 + str47;
            }
            return combined3;
          }
          case "invalid_format": {
            let combined4;
            if ("starts_with" === code.format) {
              const _HermesInternal9 = HermesInternal;
              combined4 = '\u00C9rv\u00E9nytelen string: "' + code.prefix + '" \u00E9rt\u00E9kkel kell kezd\u0151dnie';
            } else if ("ends_with" === code.format) {
              const _HermesInternal8 = HermesInternal;
              combined4 =
                '\u00C9rv\u00E9nytelen string: "' + code.suffix + '" \u00E9rt\u00E9kkel kell v\u00E9gz\u0151dnie';
            } else if ("includes" === code.format) {
              const _HermesInternal7 = HermesInternal;
              combined4 = '\u00C9rv\u00E9nytelen string: "' + code.includes + '" \u00E9rt\u00E9ket kell tartalmaznia';
            } else if ("regex" === code.format) {
              const _HermesInternal6 = HermesInternal;
              combined4 = "\u00C9rv\u00E9nytelen string: " + code.pattern + " mint\u00E1nak kell megfelelnie";
            } else {
              const format = closure_1[code.format] ?? code.format;
              const _HermesInternal5 = HermesInternal;
              combined4 = "\u00C9rv\u00E9nytelen " + format;
            }
            return combined4;
          }
          case "not_multiple_of": {
            const _HermesInternal4 = HermesInternal;
            return (
              "\u00C9rv\u00E9nytelen sz\u00E1m: " + code.divisor + " t\u00F6bbsz\u00F6r\u00F6s\u00E9nek kell lennie"
            );
          }
          case "unrecognized_keys": {
            let str3 = "";
            if (code.keys.length > 1) {
              str3 = "s";
            }
            const _HermesInternal3 = HermesInternal;
            return "Ismeretlen kulcs" + str3 + ": " + captureStackTrace.joinValues(code.keys, ", ");
          }
          case "invalid_key": {
            const _HermesInternal2 = HermesInternal;
            return "\u00C9rv\u00E9nytelen kulcs " + code.origin;
          }
          case "invalid_union": {
            return "\u00C9rv\u00E9nytelen bemenet";
          }
          case "invalid_element": {
            const _HermesInternal = HermesInternal;
            return "\u00C9rv\u00E9nytelen \u00E9rt\u00E9k: " + code.origin;
          }
          default: {
            return "\u00C9rv\u00E9nytelen bemenet";
          }
        }
      },
    };
    const obj2 = {
      string: { unit: "karakter", verb: "legyen" },
      file: { unit: "byte", verb: "legyen" },
      array: { unit: "elem", verb: "legyen" },
      set: { unit: "elem", verb: "legyen" },
    };
    closure_1 = {
      regex: "bemenet",
      email: "email c\u00EDm",
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
      datetime: "ISO id\u0151b\u00E9lyeg",
      date: "ISO d\u00E1tum",
      time: "ISO id\u0151",
      duration: "ISO id\u0151intervallum",
      ipv4: "IPv4 c\u00EDm",
      ipv6: "IPv6 c\u00EDm",
      cidrv4: "IPv4 tartom\u00E1ny",
      cidrv6: "IPv6 tartom\u00E1ny",
      base64: "base64-k\u00F3dolt string",
      base64url: "base64url-k\u00F3dolt string",
      json_string: "JSON string",
      e164: "E.164 sz\u00E1m",
      jwt: "JWT",
      template_literal: "bemenet",
    };
    let closure_2 = { nan: "NaN", number: "sz\u00E1m", array: "t\u00F6mb" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
