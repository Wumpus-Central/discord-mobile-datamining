// _runtime/08626_default_1.js
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
              const _HermesInternal15 = HermesInternal;
              combined = "Virheellinen tyyppi: odotettiin instanceof " + code.expected + ", oli " + tmp35;
            } else {
              const _HermesInternal14 = HermesInternal;
              combined = "Virheellinen tyyppi: odotettiin " + expected + ", oli " + tmp35;
            }
            return combined;
          }
          case "invalid_value": {
            let combined1;
            if (1 === code.values.length) {
              const _HermesInternal13 = HermesInternal;
              combined1 =
                "Virheellinen sy\u00F6te: t\u00E4ytyy olla " + captureStackTrace.stringifyPrimitive(code.values[0]);
            } else {
              const _HermesInternal12 = HermesInternal;
              combined1 =
                "Virheellinen valinta: t\u00E4ytyy olla yksi seuraavista: " +
                captureStackTrace.joinValues(code.values, "|");
            }
            return combined1;
          }
          case "too_big": {
            let trimmed;
            let str28 = "<";
            if (code.inclusive) {
              str28 = "<=";
            }
            if (obj2[code.origin] ?? null) {
              const _HermesInternal11 = HermesInternal;
              const str31 = code.maximum;
              const str35 =
                "Liian suuri: " +
                (obj2[code.origin] ?? null).subject +
                " t\u00E4ytyy olla " +
                str28 +
                str31.toString() +
                " " +
                (obj2[code.origin] ?? null).unit;
              trimmed = str35.trim();
            } else {
              const _HermesInternal10 = HermesInternal;
              const str29 = code.maximum;
              trimmed = "Liian suuri: arvon t\u00E4ytyy olla " + str28 + str29.toString();
            }
            return trimmed;
          }
          case "too_small": {
            let trimmed1;
            let str20 = ">";
            if (code.inclusive) {
              str20 = ">=";
            }
            if (obj2[code.origin] ?? null) {
              const _HermesInternal9 = HermesInternal;
              const str23 = code.minimum;
              const str27 =
                "Liian pieni: " +
                (obj2[code.origin] ?? null).subject +
                " t\u00E4ytyy olla " +
                str20 +
                str23.toString() +
                " " +
                (obj2[code.origin] ?? null).unit;
              trimmed1 = str27.trim();
            } else {
              const _HermesInternal8 = HermesInternal;
              const str21 = code.minimum;
              trimmed1 = "Liian pieni: arvon t\u00E4ytyy olla " + str20 + str21.toString();
            }
            return trimmed1;
          }
          case "invalid_format": {
            let combined2;
            if ("starts_with" === code.format) {
              const _HermesInternal7 = HermesInternal;
              combined2 = 'Virheellinen sy\u00F6te: t\u00E4ytyy alkaa "' + code.prefix + '"';
            } else if ("ends_with" === code.format) {
              const _HermesInternal6 = HermesInternal;
              combined2 = 'Virheellinen sy\u00F6te: t\u00E4ytyy loppua "' + code.suffix + '"';
            } else if ("includes" === code.format) {
              const _HermesInternal5 = HermesInternal;
              combined2 = 'Virheellinen sy\u00F6te: t\u00E4ytyy sis\u00E4lt\u00E4\u00E4 "' + code.includes + '"';
            } else if ("regex" === code.format) {
              const _HermesInternal4 = HermesInternal;
              combined2 =
                "Virheellinen sy\u00F6te: t\u00E4ytyy vastata s\u00E4\u00E4nn\u00F6llist\u00E4 lauseketta " +
                code.pattern;
            } else {
              const format = closure_1[code.format] ?? code.format;
              const _HermesInternal3 = HermesInternal;
              combined2 = "Virheellinen " + format;
            }
            return combined2;
          }
          case "not_multiple_of": {
            const _HermesInternal2 = HermesInternal;
            return "Virheellinen luku: t\u00E4ytyy olla luvun " + code.divisor + " monikerta";
          }
          case "unrecognized_keys": {
            let str4 = "Tuntematon avain";
            if (code.keys.length > 1) {
              str4 = "Tuntemattomat avaimet";
            }
            const _HermesInternal = HermesInternal;
            return "" + str4 + ": " + captureStackTrace.joinValues(code.keys, ", ");
          }
          case "invalid_key": {
            return "Virheellinen avain tietueessa";
          }
          case "invalid_union": {
            return "Virheellinen unioni";
          }
          case "invalid_element": {
            return "Virheellinen arvo joukossa";
          }
          default: {
            return "Virheellinen sy\u00F6te";
          }
        }
      },
    };
    const obj2 = {
      string: { unit: "merkki\u00E4", subject: "merkkijonon" },
      file: { unit: "tavua", subject: "tiedoston" },
      array: { unit: "alkiota", subject: "listan" },
      set: { unit: "alkiota", subject: "joukon" },
      number: { unit: "", subject: "luvun" },
      bigint: { unit: "", subject: "suuren kokonaisluvun" },
      int: { unit: "", subject: "kokonaisluvun" },
      date: { unit: "", subject: "p\u00E4iv\u00E4m\u00E4\u00E4r\u00E4n" },
    };
    closure_1 = {
      regex: "s\u00E4\u00E4nn\u00F6llinen lauseke",
      email: "s\u00E4hk\u00F6postiosoite",
      url: "URL-osoite",
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
      datetime: "ISO-aikaleima",
      date: "ISO-p\u00E4iv\u00E4m\u00E4\u00E4r\u00E4",
      time: "ISO-aika",
      duration: "ISO-kesto",
      ipv4: "IPv4-osoite",
      ipv6: "IPv6-osoite",
      cidrv4: "IPv4-alue",
      cidrv6: "IPv6-alue",
      base64: "base64-koodattu merkkijono",
      base64url: "base64url-koodattu merkkijono",
      json_string: "JSON-merkkijono",
      e164: "E.164-luku",
      jwt: "JWT",
      template_literal: "templaattimerkkijono",
    };
    let closure_2 = { nan: "NaN" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
