// _runtime/08615_default_1.js
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
              combined =
                "Yanl\u0131\u015F d\u0259y\u0259r: g\u00F6zl\u0259nil\u0259n instanceof " +
                code.expected +
                ", daxil olan " +
                tmp48;
            } else {
              const _HermesInternal16 = HermesInternal;
              combined =
                "Yanl\u0131\u015F d\u0259y\u0259r: g\u00F6zl\u0259nil\u0259n " + expected + ", daxil olan " + tmp48;
            }
            return combined;
          }
          case "invalid_value": {
            let combined1;
            if (1 === code.values.length) {
              const _HermesInternal15 = HermesInternal;
              combined1 =
                "Yanl\u0131\u015F d\u0259y\u0259r: g\u00F6zl\u0259nil\u0259n " +
                captureStackTrace.stringifyPrimitive(code.values[0]);
            } else {
              const _HermesInternal14 = HermesInternal;
              combined1 =
                "Yanl\u0131\u015F se\u00E7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: " +
                captureStackTrace.joinValues(code.values, "|");
            }
            return combined1;
          }
          case "too_big": {
            let combined2;
            let str29 = "<";
            if (code.inclusive) {
              str29 = "<=";
            }
            let str30 = code.origin;
            if (obj2[code.origin] ?? null) {
              if (str30 == null) {
                str30 = "d\u0259y\u0259r";
              }
              const str35 = code.maximum;
              const _HermesInternal13 = HermesInternal;
              const str1 = str35.toString();
              const str36 = (obj2[code.origin] ?? null).unit ?? "element";
              combined2 =
                "\u00C7ox b\u00F6y\u00FCk: g\u00F6zl\u0259nil\u0259n " + str30 + " " + str29 + str1 + " " + str36;
            } else {
              let str31 = str30;
              if (str30 == null) {
                str31 = "d\u0259y\u0259r";
              }
              const _HermesInternal12 = HermesInternal;
              const str32 = code.maximum;
              combined2 =
                "\u00C7ox b\u00F6y\u00FCk: g\u00F6zl\u0259nil\u0259n " + str31 + " " + str29 + str32.toString();
            }
            return combined2;
          }
          case "too_small": {
            let combined3;
            let minimum;
            let origin;
            let str22 = ">";
            if (code.inclusive) {
              str22 = ">=";
            }
            ({ origin, minimum } = code);
            const str51 = minimum.toString();
            if (obj2[code.origin] ?? null) {
              const _HermesInternal11 = HermesInternal;
              combined3 =
                "\u00C7ox ki\u00E7ik: g\u00F6zl\u0259nil\u0259n " + origin + " " + str22 + str51 + " " + tmp15.unit;
            } else {
              const _HermesInternal10 = HermesInternal;
              combined3 = "\u00C7ox ki\u00E7ik: g\u00F6zl\u0259nil\u0259n " + origin + " " + str22 + str51;
            }
            return combined3;
          }
          case "invalid_format": {
            let combined4;
            if ("starts_with" === code.format) {
              const _HermesInternal9 = HermesInternal;
              combined4 = 'Yanl\u0131\u015F m\u0259tn: "' + code.prefix + '" il\u0259 ba\u015Flamal\u0131d\u0131r';
            } else if ("ends_with" === code.format) {
              const _HermesInternal8 = HermesInternal;
              combined4 = 'Yanl\u0131\u015F m\u0259tn: "' + code.suffix + '" il\u0259 bitm\u0259lidir';
            } else if ("includes" === code.format) {
              const _HermesInternal7 = HermesInternal;
              combined4 = 'Yanl\u0131\u015F m\u0259tn: "' + code.includes + '" daxil olmal\u0131d\u0131r';
            } else if ("regex" === code.format) {
              const _HermesInternal6 = HermesInternal;
              combined4 =
                "Yanl\u0131\u015F m\u0259tn: " + code.pattern + " \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r";
            } else {
              const format = closure_1[code.format] ?? code.format;
              const _HermesInternal5 = HermesInternal;
              combined4 = "Yanl\u0131\u015F " + format;
            }
            return combined4;
          }
          case "not_multiple_of": {
            const _HermesInternal4 = HermesInternal;
            return (
              "Yanl\u0131\u015F \u0259d\u0259d: " +
              code.divisor +
              " il\u0259 b\u00F6l\u00FCn\u0259 bil\u0259n olmal\u0131d\u0131r"
            );
          }
          case "unrecognized_keys": {
            let str5 = "";
            if (code.keys.length > 1) {
              str5 = "lar";
            }
            const _HermesInternal3 = HermesInternal;
            return "Tan\u0131nmayan a\u00E7ar" + str5 + ": " + captureStackTrace.joinValues(code.keys, ", ");
          }
          case "invalid_key": {
            const _HermesInternal2 = HermesInternal;
            return "" + code.origin + " daxilind\u0259 yanl\u0131\u015F a\u00E7ar";
          }
          case "invalid_union": {
            return "Yanl\u0131\u015F d\u0259y\u0259r";
          }
          case "invalid_element": {
            const _HermesInternal = HermesInternal;
            return "" + code.origin + " daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r";
          }
          default: {
            return "Yanl\u0131\u015F d\u0259y\u0259r";
          }
        }
      },
    };
    const obj2 = {
      string: { unit: "simvol", verb: "olmal\u0131d\u0131r" },
      file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
      array: { unit: "element", verb: "olmal\u0131d\u0131r" },
      set: { unit: "element", verb: "olmal\u0131d\u0131r" },
    };
    closure_1 = {
      regex: "input",
      email: "email address",
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
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      jwt: "JWT",
      template_literal: "input",
    };
    let closure_2 = { nan: "NaN" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
