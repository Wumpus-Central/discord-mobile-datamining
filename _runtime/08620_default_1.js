// _runtime/08620_default_1.js
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
              combined = "Ugyldigt input: forventede instanceof " + code.expected + ", fik " + tmp49;
            } else {
              const _HermesInternal16 = HermesInternal;
              combined = "Ugyldigt input: forventede " + expected + ", fik " + tmp49;
            }
            return combined;
          }
          case "invalid_value": {
            let combined1;
            if (1 === code.values.length) {
              const _HermesInternal15 = HermesInternal;
              combined1 = "Ugyldig v\u00E6rdi: forventede " + captureStackTrace.stringifyPrimitive(code.values[0]);
            } else {
              const _HermesInternal14 = HermesInternal;
              combined1 =
                "Ugyldigt valg: forventede en af f\u00F8lgende " + captureStackTrace.joinValues(code.values, "|");
            }
            return combined1;
          }
          case "too_big": {
            let combined2;
            let str31 = "<";
            if (code.inclusive) {
              str31 = "<=";
            }
            let str32 = closure_2[code.origin] ?? code.origin;
            if (obj2[code.origin] ?? null) {
              if (str32 == null) {
                str32 = "value";
              }
              const verb = tmp26.verb;
              const str38 = code.maximum;
              const _HermesInternal13 = HermesInternal;
              const str1 = str38.toString();
              const str39 = (obj2[code.origin] ?? null).unit ?? "elementer";
              combined2 = "For stor: forventede " + str32 + " " + verb + " " + str31 + " " + str1 + " " + str39;
            } else {
              let str33 = str32;
              if (str32 == null) {
                str33 = "value";
              }
              const _HermesInternal12 = HermesInternal;
              const str34 = code.maximum;
              combined2 = "For stor: forventede " + str33 + " havde " + str31 + " " + str34.toString();
            }
            return combined2;
          }
          case "too_small": {
            let combined3;
            let str19 = ">";
            if (code.inclusive) {
              str19 = ">=";
            }
            const origin = closure_2[code.origin] ?? code.origin;
            if (obj2[code.origin] ?? null) {
              const _HermesInternal11 = HermesInternal;
              const str24 = code.minimum;
              combined3 =
                "For lille: forventede " +
                origin +
                " " +
                tmp15.verb +
                " " +
                str19 +
                " " +
                str24.toString() +
                " " +
                tmp15.unit;
            } else {
              const _HermesInternal10 = HermesInternal;
              const str20 = code.minimum;
              combined3 = "For lille: forventede " + origin + " havde " + str19 + " " + str20.toString();
            }
            return combined3;
          }
          case "invalid_format": {
            let combined4;
            if ("starts_with" === code.format) {
              const _HermesInternal9 = HermesInternal;
              combined4 = 'Ugyldig streng: skal starte med "' + code.prefix + '"';
            } else if ("ends_with" === code.format) {
              const _HermesInternal8 = HermesInternal;
              combined4 = 'Ugyldig streng: skal ende med "' + code.suffix + '"';
            } else if ("includes" === code.format) {
              const _HermesInternal7 = HermesInternal;
              combined4 = 'Ugyldig streng: skal indeholde "' + code.includes + '"';
            } else if ("regex" === code.format) {
              const _HermesInternal6 = HermesInternal;
              combined4 = "Ugyldig streng: skal matche m\u00F8nsteret " + code.pattern;
            } else {
              const format = closure_1[code.format] ?? code.format;
              const _HermesInternal5 = HermesInternal;
              combined4 = "Ugyldig " + format;
            }
            return combined4;
          }
          case "not_multiple_of": {
            const _HermesInternal4 = HermesInternal;
            return "Ugyldigt tal: skal v\u00E6re deleligt med " + code.divisor;
          }
          case "unrecognized_keys": {
            let str4 = "Ukendt n\u00F8gle";
            if (code.keys.length > 1) {
              str4 = "Ukendte n\u00F8gler";
            }
            const _HermesInternal3 = HermesInternal;
            return "" + str4 + ": " + captureStackTrace.joinValues(code.keys, ", ");
          }
          case "invalid_key": {
            const _HermesInternal2 = HermesInternal;
            return "Ugyldig n\u00F8gle i " + code.origin;
          }
          case "invalid_union": {
            return "Ugyldigt input: matcher ingen af de tilladte typer";
          }
          case "invalid_element": {
            const _HermesInternal = HermesInternal;
            return "Ugyldig v\u00E6rdi i " + code.origin;
          }
          default: {
            return "Ugyldigt input";
          }
        }
      },
    };
    const obj2 = {
      string: { unit: "tegn", verb: "havde" },
      file: { unit: "bytes", verb: "havde" },
      array: { unit: "elementer", verb: "indeholdt" },
      set: { unit: "elementer", verb: "indeholdt" },
    };
    closure_1 = {
      regex: "input",
      email: "e-mailadresse",
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
      datetime: "ISO dato- og klokkesl\u00E6t",
      date: "ISO-dato",
      time: "ISO-klokkesl\u00E6t",
      duration: "ISO-varighed",
      ipv4: "IPv4-omr\u00E5de",
      ipv6: "IPv6-omr\u00E5de",
      cidrv4: "IPv4-spektrum",
      cidrv6: "IPv6-spektrum",
      base64: "base64-kodet streng",
      base64url: "base64url-kodet streng",
      json_string: "JSON-streng",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "input",
    };
    let closure_2 = {
      nan: "NaN",
      string: "streng",
      number: "tal",
      boolean: "boolean",
      array: "liste",
      object: "objekt",
      set: "s\u00E6t",
      file: "fil",
    };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
