// _runtime/08619_default_1.js
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
                "Neplatn\u00FD vstup: o\u010Dek\u00E1v\u00E1no instanceof " +
                code.expected +
                ", obdr\u017Eeno " +
                tmp49;
            } else {
              const _HermesInternal16 = HermesInternal;
              combined = "Neplatn\u00FD vstup: o\u010Dek\u00E1v\u00E1no " + expected + ", obdr\u017Eeno " + tmp49;
            }
            return combined;
          }
          case "invalid_value": {
            let combined1;
            if (1 === code.values.length) {
              const _HermesInternal15 = HermesInternal;
              combined1 =
                "Neplatn\u00FD vstup: o\u010Dek\u00E1v\u00E1no " + captureStackTrace.stringifyPrimitive(code.values[0]);
            } else {
              const _HermesInternal14 = HermesInternal;
              combined1 =
                "Neplatn\u00E1 mo\u017Enost: o\u010Dek\u00E1v\u00E1na jedna z hodnot " +
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
                str28 = "hodnota";
              }
              const str33 = code.maximum;
              const _HermesInternal13 = HermesInternal;
              const str1 = str33.toString();
              const str34 = (obj2[code.origin] ?? null).unit ?? "prvk\u016F";
              combined2 =
                "Hodnota je p\u0159\u00EDli\u0161 velk\u00E1: " +
                str28 +
                " mus\u00ED m\u00EDt " +
                str27 +
                str1 +
                " " +
                str34;
            } else {
              let str29 = str28;
              if (str28 == null) {
                str29 = "hodnota";
              }
              const _HermesInternal12 = HermesInternal;
              const str30 = code.maximum;
              combined2 =
                "Hodnota je p\u0159\u00EDli\u0161 velk\u00E1: " +
                str29 +
                " mus\u00ED b\u00FDt " +
                str27 +
                str30.toString();
            }
            return combined2;
          }
          case "too_small": {
            let combined3;
            let str16 = ">";
            if (code.inclusive) {
              str16 = ">=";
            }
            let str17 = code.origin;
            if (obj2[code.origin] ?? null) {
              if (str17 == null) {
                str17 = "hodnota";
              }
              const str22 = code.minimum;
              const _HermesInternal11 = HermesInternal;
              const str23 = (obj2[code.origin] ?? null).unit ?? "prvk\u016F";
              const str48 = str22.toString();
              combined3 =
                "Hodnota je p\u0159\u00EDli\u0161 mal\u00E1: " +
                str17 +
                " mus\u00ED m\u00EDt " +
                str16 +
                str48 +
                " " +
                str23;
            } else {
              let str18 = str17;
              if (str17 == null) {
                str18 = "hodnota";
              }
              const _HermesInternal10 = HermesInternal;
              const str19 = code.minimum;
              combined3 =
                "Hodnota je p\u0159\u00EDli\u0161 mal\u00E1: " +
                str18 +
                " mus\u00ED b\u00FDt " +
                str16 +
                str19.toString();
            }
            return combined3;
          }
          case "invalid_format": {
            let combined4;
            if ("starts_with" === code.format) {
              const _HermesInternal9 = HermesInternal;
              combined4 = 'Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED za\u010D\u00EDnat na "' + code.prefix + '"';
            } else if ("ends_with" === code.format) {
              const _HermesInternal8 = HermesInternal;
              combined4 = 'Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED kon\u010Dit na "' + code.suffix + '"';
            } else if ("includes" === code.format) {
              const _HermesInternal7 = HermesInternal;
              combined4 = 'Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED obsahovat "' + code.includes + '"';
            } else if ("regex" === code.format) {
              const _HermesInternal6 = HermesInternal;
              combined4 = "Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED odpov\u00EDdat vzoru " + code.pattern;
            } else {
              const format = closure_1[code.format] ?? code.format;
              const _HermesInternal5 = HermesInternal;
              combined4 = "Neplatn\u00FD form\u00E1t " + format;
            }
            return combined4;
          }
          case "not_multiple_of": {
            const _HermesInternal4 = HermesInternal;
            return "Neplatn\u00E9 \u010D\u00EDslo: mus\u00ED b\u00FDt n\u00E1sobkem " + code.divisor;
          }
          case "unrecognized_keys": {
            const _HermesInternal3 = HermesInternal;
            return "Nezn\u00E1m\u00E9 kl\u00ED\u010De: " + captureStackTrace.joinValues(code.keys, ", ");
          }
          case "invalid_key": {
            const _HermesInternal2 = HermesInternal;
            return "Neplatn\u00FD kl\u00ED\u010D v " + code.origin;
          }
          case "invalid_union": {
            return "Neplatn\u00FD vstup";
          }
          case "invalid_element": {
            const _HermesInternal = HermesInternal;
            return "Neplatn\u00E1 hodnota v " + code.origin;
          }
          default: {
            return "Neplatn\u00FD vstup";
          }
        }
      },
    };
    const obj2 = {
      string: { unit: "znak\u016F", verb: "m\u00EDt" },
      file: { unit: "bajt\u016F", verb: "m\u00EDt" },
      array: { unit: "prvk\u016F", verb: "m\u00EDt" },
      set: { unit: "prvk\u016F", verb: "m\u00EDt" },
    };
    closure_1 = {
      regex: "regul\u00E1rn\u00ED v\u00FDraz",
      email: "e-mailov\u00E1 adresa",
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
      datetime: "datum a \u010Das ve form\u00E1tu ISO",
      date: "datum ve form\u00E1tu ISO",
      time: "\u010Das ve form\u00E1tu ISO",
      duration: "doba trv\u00E1n\u00ED ISO",
      ipv4: "IPv4 adresa",
      ipv6: "IPv6 adresa",
      cidrv4: "rozsah IPv4",
      cidrv6: "rozsah IPv6",
      base64: "\u0159et\u011Bzec zak\u00F3dovan\u00FD ve form\u00E1tu base64",
      base64url: "\u0159et\u011Bzec zak\u00F3dovan\u00FD ve form\u00E1tu base64url",
      json_string: "\u0159et\u011Bzec ve form\u00E1tu JSON",
      e164: "\u010D\u00EDslo E.164",
      jwt: "JWT",
      template_literal: "vstup",
    };
    let closure_2 = {
      nan: "NaN",
      number: "\u010D\u00EDslo",
      string: "\u0159et\u011Bzec",
      function: "funkce",
      array: "pole",
    };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
