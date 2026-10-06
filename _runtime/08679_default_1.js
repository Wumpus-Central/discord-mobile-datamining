// _runtime/08679_default_1.js
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
              combined = "Ugyldig input: forventet instanceof " + code.expected + ", fikk " + tmp48;
            } else {
              const _HermesInternal16 = HermesInternal;
              combined = "Ugyldig input: forventet " + expected + ", fikk " + tmp48;
            }
            return combined;
          }
          case "invalid_value": {
            let combined1;
            if (1 === code.values.length) {
              const _HermesInternal15 = HermesInternal;
              combined1 = "Ugyldig verdi: forventet " + captureStackTrace.stringifyPrimitive(code.values[0]);
            } else {
              const _HermesInternal14 = HermesInternal;
              combined1 = "Ugyldig valg: forventet en av " + captureStackTrace.joinValues(code.values, "|");
            }
            return combined1;
          }
          case "too_big": {
            let combined2;
            let str24 = "<";
            if (code.inclusive) {
              str24 = "<=";
            }
            let str25 = code.origin;
            if (obj2[code.origin] ?? null) {
              if (str25 == null) {
                str25 = "value";
              }
              const str30 = code.maximum;
              const _HermesInternal13 = HermesInternal;
              const str1 = str30.toString();
              const str31 = (obj2[code.origin] ?? null).unit ?? "elementer";
              combined2 = "For stor(t): forventet " + str25 + " til \u00E5 ha " + str24 + str1 + " " + str31;
            } else {
              let str26 = str25;
              if (str25 == null) {
                str26 = "value";
              }
              const _HermesInternal12 = HermesInternal;
              const str27 = code.maximum;
              combined2 = "For stor(t): forventet " + str26 + " til \u00E5 ha " + str24 + str27.toString();
            }
            return combined2;
          }
          case "too_small": {
            let combined3;
            let minimum;
            let origin;
            let str18 = ">";
            if (code.inclusive) {
              str18 = ">=";
            }
            ({ origin, minimum } = code);
            const str45 = minimum.toString();
            if (obj2[code.origin] ?? null) {
              const _HermesInternal11 = HermesInternal;
              combined3 = "For lite(n): forventet " + origin + " til \u00E5 ha " + str18 + str45 + " " + tmp15.unit;
            } else {
              const _HermesInternal10 = HermesInternal;
              combined3 = "For lite(n): forventet " + origin + " til \u00E5 ha " + str18 + str45;
            }
            return combined3;
          }
          case "invalid_format": {
            let combined4;
            if ("starts_with" === code.format) {
              const _HermesInternal9 = HermesInternal;
              combined4 = 'Ugyldig streng: m\u00E5 starte med "' + code.prefix + '"';
            } else if ("ends_with" === code.format) {
              const _HermesInternal8 = HermesInternal;
              combined4 = 'Ugyldig streng: m\u00E5 ende med "' + code.suffix + '"';
            } else if ("includes" === code.format) {
              const _HermesInternal7 = HermesInternal;
              combined4 = 'Ugyldig streng: m\u00E5 inneholde "' + code.includes + '"';
            } else if ("regex" === code.format) {
              const _HermesInternal6 = HermesInternal;
              combined4 = "Ugyldig streng: m\u00E5 matche m\u00F8nsteret " + code.pattern;
            } else {
              const format = closure_1[code.format] ?? code.format;
              const _HermesInternal5 = HermesInternal;
              combined4 = "Ugyldig " + format;
            }
            return combined4;
          }
          case "not_multiple_of": {
            const _HermesInternal4 = HermesInternal;
            return "Ugyldig tall: m\u00E5 v\u00E6re et multiplum av " + code.divisor;
          }
          case "unrecognized_keys": {
            let str3 = "Ukjent n\u00F8kkel";
            if (code.keys.length > 1) {
              str3 = "Ukjente n\u00F8kler";
            }
            const _HermesInternal3 = HermesInternal;
            return "" + str3 + ": " + captureStackTrace.joinValues(code.keys, ", ");
          }
          case "invalid_key": {
            const _HermesInternal2 = HermesInternal;
            return "Ugyldig n\u00F8kkel i " + code.origin;
          }
          case "invalid_union": {
            return "Ugyldig input";
          }
          case "invalid_element": {
            const _HermesInternal = HermesInternal;
            return "Ugyldig verdi i " + code.origin;
          }
          default: {
            return "Ugyldig input";
          }
        }
      },
    };
    const obj2 = {
      string: { unit: "tegn", verb: "\u00E5 ha" },
      file: { unit: "bytes", verb: "\u00E5 ha" },
      array: { unit: "elementer", verb: "\u00E5 inneholde" },
      set: { unit: "elementer", verb: "\u00E5 inneholde" },
    };
    closure_1 = {
      regex: "input",
      email: "e-postadresse",
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
      datetime: "ISO dato- og klokkeslett",
      date: "ISO-dato",
      time: "ISO-klokkeslett",
      duration: "ISO-varighet",
      ipv4: "IPv4-omr\u00E5de",
      ipv6: "IPv6-omr\u00E5de",
      cidrv4: "IPv4-spekter",
      cidrv6: "IPv6-spekter",
      base64: "base64-enkodet streng",
      base64url: "base64url-enkodet streng",
      json_string: "JSON-streng",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "input",
    };
    let closure_2 = { nan: "NaN", number: "tall", array: "liste" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
