// _runtime/08623_default_1.js
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
              combined = "Nevalida enigo: atendi\u011Dis instanceof " + code.expected + ", ricevi\u011Dis " + tmp50;
            } else {
              const _HermesInternal16 = HermesInternal;
              combined = "Nevalida enigo: atendi\u011Dis " + expected + ", ricevi\u011Dis " + tmp50;
            }
            return combined;
          }
          case "invalid_value": {
            let combined1;
            if (1 === code.values.length) {
              const _HermesInternal15 = HermesInternal;
              combined1 = "Nevalida enigo: atendi\u011Dis " + captureStackTrace.stringifyPrimitive(code.values[0]);
            } else {
              const _HermesInternal14 = HermesInternal;
              combined1 = "Nevalida opcio: atendi\u011Dis unu el " + captureStackTrace.joinValues(code.values, "|");
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
                str27 = "valoro";
              }
              const str32 = code.maximum;
              const _HermesInternal13 = HermesInternal;
              const str1 = str32.toString();
              const str33 = (obj2[code.origin] ?? null).unit ?? "elementojn";
              combined2 = "Tro granda: atendi\u011Dis ke " + str27 + " havu " + str26 + str1 + " " + str33;
            } else {
              let str28 = str27;
              if (str27 == null) {
                str28 = "valoro";
              }
              const _HermesInternal12 = HermesInternal;
              const str29 = code.maximum;
              combined2 = "Tro granda: atendi\u011Dis ke " + str28 + " havu " + str26 + str29.toString();
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
              combined3 = "Tro malgranda: atendi\u011Dis ke " + origin + " havu " + str20 + str47 + " " + tmp17.unit;
            } else {
              const _HermesInternal10 = HermesInternal;
              combined3 = "Tro malgranda: atendi\u011Dis ke " + origin + " estu " + str20 + str47;
            }
            return combined3;
          }
          case "invalid_format": {
            let combined4;
            if ("starts_with" === code.format) {
              const _HermesInternal9 = HermesInternal;
              combined4 = 'Nevalida karaktraro: devas komenci\u011Di per "' + code.prefix + '"';
            } else if ("ends_with" === code.format) {
              const _HermesInternal8 = HermesInternal;
              combined4 = 'Nevalida karaktraro: devas fini\u011Di per "' + code.suffix + '"';
            } else if ("includes" === code.format) {
              const _HermesInternal7 = HermesInternal;
              combined4 = 'Nevalida karaktraro: devas inkluzivi "' + code.includes + '"';
            } else if ("regex" === code.format) {
              const _HermesInternal6 = HermesInternal;
              combined4 = "Nevalida karaktraro: devas kongrui kun la modelo " + code.pattern;
            } else {
              const format = closure_1[code.format] ?? code.format;
              const _HermesInternal5 = HermesInternal;
              combined4 = "Nevalida " + format;
            }
            return combined4;
          }
          case "not_multiple_of": {
            const _HermesInternal4 = HermesInternal;
            return "Nevalida nombro: devas esti oblo de " + code.divisor;
          }
          case "unrecognized_keys": {
            let str3 = "";
            let str4 = "";
            if (code.keys.length > 1) {
              str4 = "j";
            }
            if (code.keys.length > 1) {
              str3 = "j";
            }
            const _HermesInternal3 = HermesInternal;
            return "Nekonata" + str4 + " \u015Dlosilo" + str3 + ": " + captureStackTrace.joinValues(code.keys, ", ");
          }
          case "invalid_key": {
            const _HermesInternal2 = HermesInternal;
            return "Nevalida \u015Dlosilo en " + code.origin;
          }
          case "invalid_union": {
            return "Nevalida enigo";
          }
          case "invalid_element": {
            const _HermesInternal = HermesInternal;
            return "Nevalida valoro en " + code.origin;
          }
          default: {
            return "Nevalida enigo";
          }
        }
      },
    };
    const obj2 = {
      string: { unit: "karaktrojn", verb: "havi" },
      file: { unit: "bajtojn", verb: "havi" },
      array: { unit: "elementojn", verb: "havi" },
      set: { unit: "elementojn", verb: "havi" },
    };
    closure_1 = {
      regex: "enigo",
      email: "retadreso",
      url: "URL",
      emoji: "emo\u011Dio",
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
      datetime: "ISO-datotempo",
      date: "ISO-dato",
      time: "ISO-tempo",
      duration: "ISO-da\u016Dro",
      ipv4: "IPv4-adreso",
      ipv6: "IPv6-adreso",
      cidrv4: "IPv4-rango",
      cidrv6: "IPv6-rango",
      base64: "64-ume kodita karaktraro",
      base64url: "URL-64-ume kodita karaktraro",
      json_string: "JSON-karaktraro",
      e164: "E.164-nombro",
      jwt: "JWT",
      template_literal: "enigo",
    };
    let closure_2 = { nan: "NaN", number: "nombro", array: "tabelo", null: "senvalora" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
