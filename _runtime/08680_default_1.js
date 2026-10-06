// _runtime/08680_default_1.js
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
              combined = "F\u00E2sit giren: umulan instanceof " + code.expected + ", al\u0131nan " + tmp48;
            } else {
              const _HermesInternal16 = HermesInternal;
              combined = "F\u00E2sit giren: umulan " + expected + ", al\u0131nan " + tmp48;
            }
            return combined;
          }
          case "invalid_value": {
            let combined1;
            if (1 === code.values.length) {
              const _HermesInternal15 = HermesInternal;
              combined1 = "F\u00E2sit giren: umulan " + captureStackTrace.stringifyPrimitive(code.values[0]);
            } else {
              const _HermesInternal14 = HermesInternal;
              combined1 = "F\u00E2sit tercih: m\u00FBteberler " + captureStackTrace.joinValues(code.values, "|");
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
                str32 = "value";
              }
              const str38 = code.maximum;
              const _HermesInternal13 = HermesInternal;
              const str1 = str38.toString();
              const str39 = (obj2[code.origin] ?? null).unit ?? "elements";
              combined2 =
                "Fazla b\u00FCy\u00FCk: " + str32 + ", " + str31 + str1 + " " + str39 + " sahip olmal\u0131yd\u0131.";
            } else {
              let str33 = str32;
              if (str32 == null) {
                str33 = "value";
              }
              const _HermesInternal12 = HermesInternal;
              const str34 = code.maximum;
              combined2 = "Fazla b\u00FCy\u00FCk: " + str33 + ", " + str31 + str34.toString() + " olmal\u0131yd\u0131.";
            }
            return combined2;
          }
          case "too_small": {
            let combined3;
            let minimum;
            let origin;
            let str23 = ">";
            if (code.inclusive) {
              str23 = ">=";
            }
            ({ origin, minimum } = code);
            const str54 = minimum.toString();
            if (obj2[code.origin] ?? null) {
              const _HermesInternal11 = HermesInternal;
              combined3 =
                "Fazla k\u00FC\u00E7\u00FCk: " +
                origin +
                ", " +
                str23 +
                str54 +
                " " +
                tmp15.unit +
                " sahip olmal\u0131yd\u0131.";
            } else {
              const _HermesInternal10 = HermesInternal;
              combined3 = "Fazla k\u00FC\u00E7\u00FCk: " + origin + ", " + str23 + str54 + " olmal\u0131yd\u0131.";
            }
            return combined3;
          }
          case "invalid_format": {
            let combined4;
            if ("starts_with" === code.format) {
              const _HermesInternal9 = HermesInternal;
              combined4 = 'F\u00E2sit metin: "' + code.prefix + '" ile ba\u015Flamal\u0131.';
            } else if ("ends_with" === code.format) {
              const _HermesInternal8 = HermesInternal;
              combined4 = 'F\u00E2sit metin: "' + code.suffix + '" ile bitmeli.';
            } else if ("includes" === code.format) {
              const _HermesInternal7 = HermesInternal;
              combined4 = 'F\u00E2sit metin: "' + code.includes + '" ihtiv\u00E2 etmeli.';
            } else if ("regex" === code.format) {
              const _HermesInternal6 = HermesInternal;
              combined4 = "F\u00E2sit metin: " + code.pattern + " nak\u015F\u0131na uymal\u0131.";
            } else {
              const format = closure_1[code.format] ?? code.format;
              const _HermesInternal5 = HermesInternal;
              combined4 = "F\u00E2sit " + format;
            }
            return combined4;
          }
          case "not_multiple_of": {
            const _HermesInternal4 = HermesInternal;
            return "F\u00E2sit say\u0131: " + code.divisor + " kat\u0131 olmal\u0131yd\u0131.";
          }
          case "unrecognized_keys": {
            let str6 = "";
            if (code.keys.length > 1) {
              str6 = "s";
            }
            const _HermesInternal3 = HermesInternal;
            return "Tan\u0131nmayan anahtar " + str6 + ": " + captureStackTrace.joinValues(code.keys, ", ");
          }
          case "invalid_key": {
            const _HermesInternal2 = HermesInternal;
            return "" + code.origin + " i\u00E7in tan\u0131nmayan anahtar var.";
          }
          case "invalid_union": {
            return "Giren tan\u0131namad\u0131.";
          }
          case "invalid_element": {
            const _HermesInternal = HermesInternal;
            return "" + code.origin + " i\u00E7in tan\u0131nmayan k\u0131ymet var.";
          }
          default: {
            return "K\u0131ymet tan\u0131namad\u0131.";
          }
        }
      },
    };
    const obj2 = {
      string: { unit: "harf", verb: "olmal\u0131d\u0131r" },
      file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
      array: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
      set: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
    };
    closure_1 = {
      regex: "giren",
      email: "epostag\u00E2h",
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
      datetime: "ISO heng\u00E2m\u0131",
      date: "ISO tarihi",
      time: "ISO zaman\u0131",
      duration: "ISO m\u00FCddeti",
      ipv4: "IPv4 ni\u015F\u00E2n\u0131",
      ipv6: "IPv6 ni\u015F\u00E2n\u0131",
      cidrv4: "IPv4 menzili",
      cidrv6: "IPv6 menzili",
      base64: "base64-\u015Fifreli metin",
      base64url: "base64url-\u015Fifreli metin",
      json_string: "JSON metin",
      e164: "E.164 say\u0131s\u0131",
      jwt: "JWT",
      template_literal: "giren",
    };
    let closure_2 = { nan: "NaN", number: "numara", array: "saf", null: "gayb" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
