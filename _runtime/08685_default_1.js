// _runtime/08685_default_1.js
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
              combined = "Neveljaven vnos: pri\u010Dakovano instanceof " + code.expected + ", prejeto " + tmp48;
            } else {
              const _HermesInternal16 = HermesInternal;
              combined = "Neveljaven vnos: pri\u010Dakovano " + expected + ", prejeto " + tmp48;
            }
            return combined;
          }
          case "invalid_value": {
            let combined1;
            if (1 === code.values.length) {
              const _HermesInternal15 = HermesInternal;
              combined1 = "Neveljaven vnos: pri\u010Dakovano " + captureStackTrace.stringifyPrimitive(code.values[0]);
            } else {
              const _HermesInternal14 = HermesInternal;
              combined1 =
                "Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed " + captureStackTrace.joinValues(code.values, "|");
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
                str25 = "vrednost";
              }
              const str30 = code.maximum;
              const _HermesInternal13 = HermesInternal;
              const str1 = str30.toString();
              const str31 = (obj2[code.origin] ?? null).unit ?? "elementov";
              combined2 = "Preveliko: pri\u010Dakovano, da bo " + str25 + " imelo " + str24 + str1 + " " + str31;
            } else {
              let str26 = str25;
              if (str25 == null) {
                str26 = "vrednost";
              }
              const _HermesInternal12 = HermesInternal;
              const str27 = code.maximum;
              combined2 = "Preveliko: pri\u010Dakovano, da bo " + str26 + " " + str24 + str27.toString();
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
              combined3 = "Premajhno: pri\u010Dakovano, da bo " + origin + " imelo " + str18 + str45 + " " + tmp15.unit;
            } else {
              const _HermesInternal10 = HermesInternal;
              combined3 = "Premajhno: pri\u010Dakovano, da bo " + origin + " " + str18 + str45;
            }
            return combined3;
          }
          case "invalid_format": {
            let combined4;
            if ("starts_with" === code.format) {
              const _HermesInternal9 = HermesInternal;
              combined4 = 'Neveljaven niz: mora se za\u010Deti z "' + code.prefix + '"';
            } else if ("ends_with" === code.format) {
              const _HermesInternal8 = HermesInternal;
              combined4 = 'Neveljaven niz: mora se kon\u010Dati z "' + code.suffix + '"';
            } else if ("includes" === code.format) {
              const _HermesInternal7 = HermesInternal;
              combined4 = 'Neveljaven niz: mora vsebovati "' + code.includes + '"';
            } else if ("regex" === code.format) {
              const _HermesInternal6 = HermesInternal;
              combined4 = "Neveljaven niz: mora ustrezati vzorcu " + code.pattern;
            } else {
              const format = closure_1[code.format] ?? code.format;
              const _HermesInternal5 = HermesInternal;
              combined4 = "Neveljaven " + format;
            }
            return combined4;
          }
          case "not_multiple_of": {
            const _HermesInternal4 = HermesInternal;
            return "Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik " + code.divisor;
          }
          case "unrecognized_keys": {
            let str3 = " klju\u010D";
            if (code.keys.length > 1) {
              str3 = "i klju\u010Di";
            }
            const _HermesInternal3 = HermesInternal;
            return "Neprepoznan" + str3 + ": " + captureStackTrace.joinValues(code.keys, ", ");
          }
          case "invalid_key": {
            const _HermesInternal2 = HermesInternal;
            return "Neveljaven klju\u010D v " + code.origin;
          }
          case "invalid_union": {
            return "Neveljaven vnos";
          }
          case "invalid_element": {
            const _HermesInternal = HermesInternal;
            return "Neveljavna vrednost v " + code.origin;
          }
          default: {
            return "Neveljaven vnos";
          }
        }
      },
    };
    const obj2 = {
      string: { unit: "znakov", verb: "imeti" },
      file: { unit: "bajtov", verb: "imeti" },
      array: { unit: "elementov", verb: "imeti" },
      set: { unit: "elementov", verb: "imeti" },
    };
    closure_1 = {
      regex: "vnos",
      email: "e-po\u0161tni naslov",
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
      datetime: "ISO datum in \u010Das",
      date: "ISO datum",
      time: "ISO \u010Das",
      duration: "ISO trajanje",
      ipv4: "IPv4 naslov",
      ipv6: "IPv6 naslov",
      cidrv4: "obseg IPv4",
      cidrv6: "obseg IPv6",
      base64: "base64 kodiran niz",
      base64url: "base64url kodiran niz",
      json_string: "JSON niz",
      e164: "E.164 \u0161tevilka",
      jwt: "JWT",
      template_literal: "vnos",
    };
    let closure_2 = { nan: "NaN", number: "\u0161tevilo", array: "tabela" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
