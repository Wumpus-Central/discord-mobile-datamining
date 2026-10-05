// === Module 8621: default_1 ===

// Module 8621 (default_1)
import captureStackTrace2 from "captureStackTrace" /* 8607 */;

let hasOwnProperty;

const self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
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
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_0 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_1 = tmp3;
const tmp5 = self && self.__importStar || ((__esModule) => {
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
function error() {

}

export default function default_1() {
  if (typeof error === "function") {
    let obj = {
      localeError: (code) => {
          switch (code.code) {
            case "invalid_type":
            {
              let combined;
              const expected = closure_2[code.expected] ?? code.expected;
              const parsedTypeResult = captureStackTrace.parsedType(code.input);
              const obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                combined = "Ung\u00FCltige Eingabe: erwartet instanceof " + code.expected + ", erhalten " + tmp48;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Ung\u00FCltige Eingabe: erwartet " + expected + ", erhalten " + tmp48;
              }
              return combined;
            }
            case "invalid_value":
            {
              let combined1;
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                combined1 = "Ung\u00FCltige Eingabe: erwartet " + captureStackTrace.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Ung\u00FCltige Option: erwartet eine von " + captureStackTrace.joinValues(code.values, "|");
              }
              return combined1;
            }
            case "too_big":
            {
              let combined2;
              let str29 = "<";
              if (code.inclusive) {
                str29 = "<=";
              }
              let str30 = code.origin;
              if (obj2[code.origin] ?? null) {
                if (str30 == null) {
                  str30 = "Wert";
                }
                const str36 = code.maximum;
                const _HermesInternal13 = HermesInternal;
                const str1 = str36.toString();
                const str37 = (obj2[code.origin] ?? null).unit ?? "Elemente";
                combined2 = "Zu gro\u00DF: erwartet, dass " + str30 + " " + str29 + str1 + " " + str37 + " hat";
              } else {
                let str31 = str30;
                if (str30 == null) {
                  str31 = "Wert";
                }
                const _HermesInternal12 = HermesInternal;
                const str32 = code.maximum;
                combined2 = "Zu gro\u00DF: erwartet, dass " + str31 + " " + str29 + str32.toString() + " ist";
              }
              return combined2;
            }
            case "too_small":
            {
              let combined3;
              let minimum;
              let origin;
              let str20 = ">";
              if (code.inclusive) {
                str20 = ">=";
              }
              ({ origin, minimum } = code);
              const str53 = minimum.toString();
              if (obj2[code.origin] ?? null) {
                const _HermesInternal11 = HermesInternal;
                combined3 = "Zu klein: erwartet, dass " + origin + " " + str20 + str53 + " " + tmp15.unit + " hat";
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Zu klein: erwartet, dass " + origin + " " + str20 + str53 + " ist";
              }
              return combined3;
            }
            case "invalid_format":
            {
              let combined4;
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined4 = "Ung\u00FCltiger String: muss mit \"" + code.prefix + "\" beginnen";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = "Ung\u00FCltiger String: muss mit \"" + code.suffix + "\" enden";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "Ung\u00FCltiger String: muss \"" + code.includes + "\" enthalten";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Ung\u00FCltiger String: muss dem Muster " + code.pattern + " entsprechen";
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal5 = HermesInternal;
                combined4 = "Ung\u00FCltig: " + format;
              }
              return combined4;
            }
            case "not_multiple_of":
            {
              const _HermesInternal4 = HermesInternal;
              return "Ung\u00FCltige Zahl: muss ein Vielfaches von " + code.divisor + " sein";
            }
            case "unrecognized_keys":
            {
              let str3 = "Unbekannter Schl\u00FCssel";
              if (code.keys.length > 1) {
                str3 = "Unbekannte Schl\u00FCssel";
              }
              const _HermesInternal3 = HermesInternal;
              return "" + str3 + ": " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              const _HermesInternal2 = HermesInternal;
              return "Ung\u00FCltiger Schl\u00FCssel in " + code.origin;
            }
            case "invalid_union":
            {
              return "Ung\u00FCltige Eingabe";
            }
            case "invalid_element":
            {
              const _HermesInternal = HermesInternal;
              return "Ung\u00FCltiger Wert in " + code.origin;
            }
            default:
            {
              return "Ung\u00FCltige Eingabe";
            }
          }
        }
    };
    const obj2 = { string: { unit: "Zeichen", verb: "zu haben" }, file: { unit: "Bytes", verb: "zu haben" }, array: { unit: "Elemente", verb: "zu haben" }, set: { unit: "Elemente", verb: "zu haben" } };
    closure_1 = { regex: "Eingabe", email: "E-Mail-Adresse", url: "URL", emoji: "Emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO-Datum und -Uhrzeit", date: "ISO-Datum", time: "ISO-Uhrzeit", duration: "ISO-Dauer", ipv4: "IPv4-Adresse", ipv6: "IPv6-Adresse", cidrv4: "IPv4-Bereich", cidrv6: "IPv6-Bereich", base64: "Base64-codierter String", base64url: "Base64-URL-codierter String", json_string: "JSON-String", e164: "E.164-Nummer", jwt: "JWT", template_literal: "Eingabe" };
    let closure_2 = { nan: "NaN", number: "Zahl", array: "Array" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};