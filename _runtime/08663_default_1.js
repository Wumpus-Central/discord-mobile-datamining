// === Module 8663: default_1 ===

// Module 8663 (default_1)
import captureStackTrace2 from "captureStackTrace" /* 8642 */;

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
                combined = "Entr\u00E9e invalide : attendu instanceof " + code.expected + ", re\u00E7u " + tmp47;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Entr\u00E9e invalide : attendu " + expected + ", re\u00E7u " + tmp47;
              }
              return combined;
            }
            case "invalid_value":
            {
              let combined1;
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                combined1 = "Entr\u00E9e invalide : attendu " + captureStackTrace.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Option invalide : attendu l'une des valeurs suivantes " + captureStackTrace.joinValues(code.values, "|");
              }
              return combined1;
            }
            case "too_big":
            {
              let combined2;
              let str27 = "<";
              if (code.inclusive) {
                str27 = "\u2264";
              }
              let str28 = code.origin;
              if (obj2[code.origin] ?? null) {
                if (str28 == null) {
                  str28 = "la valeur";
                }
                const _HermesInternal13 = HermesInternal;
                const str33 = code.maximum;
                combined2 = "Trop grand : attendu que " + str28 + " ait " + str27 + str33.toString() + " " + tmp29.unit;
              } else {
                let str29 = str28;
                if (str28 == null) {
                  str29 = "la valeur";
                }
                const _HermesInternal12 = HermesInternal;
                const str30 = code.maximum;
                combined2 = "Trop grand : attendu que " + str29 + " soit " + str27 + str30.toString();
              }
              return combined2;
            }
            case "too_small":
            {
              let combined3;
              let minimum;
              let origin;
              let str21 = ">";
              if (code.inclusive) {
                str21 = "\u2265";
              }
              ({ origin, minimum } = code);
              const str1 = minimum.toString();
              if (obj2[code.origin] ?? null) {
                const _HermesInternal11 = HermesInternal;
                combined3 = "Trop petit : attendu que " + origin + " ait " + str21 + str1 + " " + tmp17.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Trop petit : attendu que " + origin + " soit " + str21 + str1;
              }
              return combined3;
            }
            case "invalid_format":
            {
              let combined4;
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined4 = "Cha\u00EEne invalide : doit commencer par \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = "Cha\u00EEne invalide : doit se terminer par \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "Cha\u00EEne invalide : doit inclure \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Cha\u00EEne invalide : doit correspondre au motif " + code.pattern;
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal5 = HermesInternal;
                combined4 = "" + format + " invalide";
              }
              return combined4;
            }
            case "not_multiple_of":
            {
              const _HermesInternal4 = HermesInternal;
              return "Nombre invalide : doit \u00EAtre un multiple de " + code.divisor;
            }
            case "unrecognized_keys":
            {
              let str3 = "";
              let str4 = "";
              if (code.keys.length > 1) {
                str4 = "s";
              }
              if (code.keys.length > 1) {
                str3 = "s";
              }
              const _HermesInternal3 = HermesInternal;
              return "Cl\u00E9" + str4 + " non reconnue" + str3 + " : " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              const _HermesInternal2 = HermesInternal;
              return "Cl\u00E9 invalide dans " + code.origin;
            }
            case "invalid_union":
            {
              return "Entr\u00E9e invalide";
            }
            case "invalid_element":
            {
              const _HermesInternal = HermesInternal;
              return "Valeur invalide dans " + code.origin;
            }
            default:
            {
              return "Entr\u00E9e invalide";
            }
          }
        }
    };
    const obj2 = { string: { unit: "caract\u00E8res", verb: "avoir" }, file: { unit: "octets", verb: "avoir" }, array: { unit: "\u00E9l\u00E9ments", verb: "avoir" }, set: { unit: "\u00E9l\u00E9ments", verb: "avoir" } };
    closure_1 = { regex: "entr\u00E9e", email: "adresse courriel", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "date-heure ISO", date: "date ISO", time: "heure ISO", duration: "dur\u00E9e ISO", ipv4: "adresse IPv4", ipv6: "adresse IPv6", cidrv4: "plage IPv4", cidrv6: "plage IPv6", base64: "cha\u00EEne encod\u00E9e en base64", base64url: "cha\u00EEne encod\u00E9e en base64url", json_string: "cha\u00EEne JSON", e164: "num\u00E9ro E.164", jwt: "JWT", template_literal: "entr\u00E9e" };
    let closure_2 = { nan: "NaN" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};