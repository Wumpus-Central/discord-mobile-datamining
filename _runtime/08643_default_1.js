// _runtime/08643_default_1.js
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
              combined = "Ongeldige invoer: verwacht instanceof " + code.expected + ", ontving " + tmp52;
            } else {
              const _HermesInternal16 = HermesInternal;
              combined = "Ongeldige invoer: verwacht " + expected + ", ontving " + tmp52;
            }
            return combined;
          }
          case "invalid_value": {
            let combined1;
            if (1 === code.values.length) {
              const _HermesInternal15 = HermesInternal;
              combined1 = "Ongeldige invoer: verwacht " + captureStackTrace.stringifyPrimitive(code.values[0]);
            } else {
              const _HermesInternal14 = HermesInternal;
              combined1 =
                "Ongeldige optie: verwacht \u00E9\u00E9n van " + captureStackTrace.joinValues(code.values, "|");
            }
            return combined1;
          }
          case "too_big": {
            let combined2;
            let str34 = "<";
            if (code.inclusive) {
              str34 = "<=";
            }
            let str35 = "laat";
            if ("date" !== code.origin) {
              let str37 = "groot";
              if ("string" === code.origin) {
                str37 = "lang";
              }
              str35 = str37;
            }
            let str39 = code.origin;
            if (obj2[code.origin] ?? null) {
              if (str39 == null) {
                str39 = "waarde";
              }
              const str46 = code.maximum;
              const _HermesInternal13 = HermesInternal;
              const str1 = str46.toString();
              const str47 = (obj2[code.origin] ?? null).unit ?? "elementen";
              combined2 =
                "Te " + str35 + ": verwacht dat " + str39 + " " + str34 + str1 + " " + str47 + " " + tmp29.verb;
            } else {
              let str40 = str39;
              if (str39 == null) {
                str40 = "waarde";
              }
              const _HermesInternal12 = HermesInternal;
              const str41 = code.maximum;
              combined2 = "Te " + str35 + ": verwacht dat " + str40 + " " + str34 + str41.toString() + " is";
            }
            return combined2;
          }
          case "too_small": {
            let combined3;
            let minimum;
            let origin;
            let str19 = ">";
            if (code.inclusive) {
              str19 = ">=";
            }
            let str20 = "vroeg";
            if ("date" !== code.origin) {
              let str22 = "klein";
              if ("string" === code.origin) {
                str22 = "kort";
              }
              str20 = str22;
            }
            ({ origin, minimum } = code);
            const str64 = minimum.toString();
            if (obj2[code.origin] ?? null) {
              const _HermesInternal11 = HermesInternal;
              combined3 =
                "Te " + str20 + ": verwacht dat " + origin + " " + str19 + str64 + " " + tmp15.unit + " " + tmp15.verb;
            } else {
              const _HermesInternal10 = HermesInternal;
              combined3 = "Te " + str20 + ": verwacht dat " + origin + " " + str19 + str64 + " is";
            }
            return combined3;
          }
          case "invalid_format": {
            let combined4;
            if ("starts_with" === code.format) {
              const _HermesInternal9 = HermesInternal;
              combined4 = 'Ongeldige tekst: moet met "' + code.prefix + '" beginnen';
            } else if ("ends_with" === code.format) {
              const _HermesInternal8 = HermesInternal;
              combined4 = 'Ongeldige tekst: moet op "' + code.suffix + '" eindigen';
            } else if ("includes" === code.format) {
              const _HermesInternal7 = HermesInternal;
              combined4 = 'Ongeldige tekst: moet "' + code.includes + '" bevatten';
            } else if ("regex" === code.format) {
              const _HermesInternal6 = HermesInternal;
              combined4 = "Ongeldige tekst: moet overeenkomen met patroon " + code.pattern;
            } else {
              const format = closure_1[code.format] ?? code.format;
              const _HermesInternal5 = HermesInternal;
              combined4 = "Ongeldig: " + format;
            }
            return combined4;
          }
          case "not_multiple_of": {
            const _HermesInternal4 = HermesInternal;
            return "Ongeldig getal: moet een veelvoud van " + code.divisor + " zijn";
          }
          case "unrecognized_keys": {
            let str3 = "";
            if (code.keys.length > 1) {
              str3 = "s";
            }
            const _HermesInternal3 = HermesInternal;
            return "Onbekende key" + str3 + ": " + captureStackTrace.joinValues(code.keys, ", ");
          }
          case "invalid_key": {
            const _HermesInternal2 = HermesInternal;
            return "Ongeldige key in " + code.origin;
          }
          case "invalid_union": {
            return "Ongeldige invoer";
          }
          case "invalid_element": {
            const _HermesInternal = HermesInternal;
            return "Ongeldige waarde in " + code.origin;
          }
          default: {
            return "Ongeldige invoer";
          }
        }
      },
    };
    const obj2 = {
      string: { unit: "tekens", verb: "heeft" },
      file: { unit: "bytes", verb: "heeft" },
      array: { unit: "elementen", verb: "heeft" },
      set: { unit: "elementen", verb: "heeft" },
    };
    closure_1 = {
      regex: "invoer",
      email: "emailadres",
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
      datetime: "ISO datum en tijd",
      date: "ISO datum",
      time: "ISO tijd",
      duration: "ISO duur",
      ipv4: "IPv4-adres",
      ipv6: "IPv6-adres",
      cidrv4: "IPv4-bereik",
      cidrv6: "IPv6-bereik",
      base64: "base64-gecodeerde tekst",
      base64url: "base64 URL-gecodeerde tekst",
      json_string: "JSON string",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "invoer",
    };
    let closure_2 = { nan: "NaN", number: "getal" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
