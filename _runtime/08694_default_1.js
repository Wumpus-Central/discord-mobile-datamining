// _runtime/08694_default_1.js
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
                "\u0110\u1EA7u v\u00E0o kh\u00F4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i instanceof " +
                code.expected +
                ", nh\u1EADn \u0111\u01B0\u1EE3c " +
                tmp47;
            } else {
              const _HermesInternal16 = HermesInternal;
              combined =
                "\u0110\u1EA7u v\u00E0o kh\u00F4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i " +
                expected +
                ", nh\u1EADn \u0111\u01B0\u1EE3c " +
                tmp47;
            }
            return combined;
          }
          case "invalid_value": {
            let combined1;
            if (1 === code.values.length) {
              const _HermesInternal15 = HermesInternal;
              combined1 =
                "\u0110\u1EA7u v\u00E0o kh\u00F4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i " +
                captureStackTrace.stringifyPrimitive(code.values[0]);
            } else {
              const _HermesInternal14 = HermesInternal;
              combined1 =
                "T\u00F9y ch\u1ECDn kh\u00F4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\u00E1c gi\u00E1 tr\u1ECB " +
                captureStackTrace.joinValues(code.values, "|");
            }
            return combined1;
          }
          case "too_big": {
            let combined2;
            let str27 = "<";
            if (code.inclusive) {
              str27 = "<=";
            }
            let str28 = code.origin;
            if (obj2[code.origin] ?? null) {
              if (str28 == null) {
                str28 = "gi\u00E1 tr\u1ECB";
              }
              const verb = tmp25.verb;
              const str33 = code.maximum;
              const _HermesInternal13 = HermesInternal;
              const str1 = str33.toString();
              const str34 = (obj2[code.origin] ?? null).unit ?? "ph\u1EA7n t\u1EED";
              combined2 =
                "Qu\u00E1 l\u1EDBn: mong \u0111\u1EE3i " + str28 + " " + verb + " " + str27 + str1 + " " + str34;
            } else {
              let str29 = str28;
              if (str28 == null) {
                str29 = "gi\u00E1 tr\u1ECB";
              }
              const _HermesInternal12 = HermesInternal;
              const str30 = code.maximum;
              combined2 = "Qu\u00E1 l\u1EDBn: mong \u0111\u1EE3i " + str29 + " " + str27 + str30.toString();
            }
            return combined2;
          }
          case "too_small": {
            let combined3;
            let str17 = ">";
            if (code.inclusive) {
              str17 = ">=";
            }
            const origin = code.origin;
            if (obj2[code.origin] ?? null) {
              const _HermesInternal11 = HermesInternal;
              const str21 = code.minimum;
              combined3 =
                "Qu\u00E1 nh\u1ECF: mong \u0111\u1EE3i " +
                origin +
                " " +
                tmp15.verb +
                " " +
                str17 +
                str21.toString() +
                " " +
                tmp15.unit;
            } else {
              const _HermesInternal10 = HermesInternal;
              const str18 = code.minimum;
              combined3 = "Qu\u00E1 nh\u1ECF: mong \u0111\u1EE3i " + origin + " " + str17 + str18.toString();
            }
            return combined3;
          }
          case "invalid_format": {
            let combined4;
            if ("starts_with" === code.format) {
              const _HermesInternal9 = HermesInternal;
              combined4 =
                'Chu\u1ED7i kh\u00F4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "' +
                code.prefix +
                '"';
            } else if ("ends_with" === code.format) {
              const _HermesInternal8 = HermesInternal;
              combined4 =
                'Chu\u1ED7i kh\u00F4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\u00FAc b\u1EB1ng "' + code.suffix + '"';
            } else if ("includes" === code.format) {
              const _HermesInternal7 = HermesInternal;
              combined4 = 'Chu\u1ED7i kh\u00F4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "' + code.includes + '"';
            } else if ("regex" === code.format) {
              const _HermesInternal6 = HermesInternal;
              combined4 =
                "Chu\u1ED7i kh\u00F4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu " + code.pattern;
            } else {
              const format = closure_1[code.format] ?? code.format;
              const _HermesInternal5 = HermesInternal;
              combined4 = "" + format + " kh\u00F4ng h\u1EE3p l\u1EC7";
            }
            return combined4;
          }
          case "not_multiple_of": {
            const _HermesInternal4 = HermesInternal;
            return "S\u1ED1 kh\u00F4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\u00E0 b\u1ED9i s\u1ED1 c\u1EE7a " + code.divisor;
          }
          case "unrecognized_keys": {
            const _HermesInternal3 = HermesInternal;
            return (
              "Kh\u00F3a kh\u00F4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: " +
              captureStackTrace.joinValues(code.keys, ", ")
            );
          }
          case "invalid_key": {
            const _HermesInternal2 = HermesInternal;
            return "Kh\u00F3a kh\u00F4ng h\u1EE3p l\u1EC7 trong " + code.origin;
          }
          case "invalid_union": {
            return "\u0110\u1EA7u v\u00E0o kh\u00F4ng h\u1EE3p l\u1EC7";
          }
          case "invalid_element": {
            const _HermesInternal = HermesInternal;
            return "Gi\u00E1 tr\u1ECB kh\u00F4ng h\u1EE3p l\u1EC7 trong " + code.origin;
          }
          default: {
            return "\u0110\u1EA7u v\u00E0o kh\u00F4ng h\u1EE3p l\u1EC7";
          }
        }
      },
    };
    const obj2 = {
      string: { unit: "k\u00FD t\u1EF1", verb: "c\u00F3" },
      file: { unit: "byte", verb: "c\u00F3" },
      array: { unit: "ph\u1EA7n t\u1EED", verb: "c\u00F3" },
      set: { unit: "ph\u1EA7n t\u1EED", verb: "c\u00F3" },
    };
    closure_1 = {
      regex: "\u0111\u1EA7u v\u00E0o",
      email: "\u0111\u1ECBa ch\u1EC9 email",
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
      datetime: "ng\u00E0y gi\u1EDD ISO",
      date: "ng\u00E0y ISO",
      time: "gi\u1EDD ISO",
      duration: "kho\u1EA3ng th\u1EDDi gian ISO",
      ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4",
      ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6",
      cidrv4: "d\u1EA3i IPv4",
      cidrv6: "d\u1EA3i IPv6",
      base64: "chu\u1ED7i m\u00E3 h\u00F3a base64",
      base64url: "chu\u1ED7i m\u00E3 h\u00F3a base64url",
      json_string: "chu\u1ED7i JSON",
      e164: "s\u1ED1 E.164",
      jwt: "JWT",
      template_literal: "\u0111\u1EA7u v\u00E0o",
    };
    let closure_2 = { nan: "NaN", number: "s\u1ED1", array: "m\u1EA3ng" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
