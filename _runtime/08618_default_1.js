// === Module 8618: default_1 ===

// Module 8618 (default_1)
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
                combined = "Tipus inv\u00E0lid: s'esperava instanceof " + code.expected + ", s'ha rebut " + tmp50;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Tipus inv\u00E0lid: s'esperava " + expected + ", s'ha rebut " + tmp50;
              }
              return combined;
            }
            case "invalid_value":
            {
              let combined1;
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                combined1 = "Valor inv\u00E0lid: s'esperava " + captureStackTrace.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Opci\u00F3 inv\u00E0lida: s'esperava una de " + captureStackTrace.joinValues(code.values, " o ");
              }
              return combined1;
            }
            case "too_big":
            {
              let combined2;
              let str29 = "menys de";
              if (code.inclusive) {
                str29 = "com a m\u00E0xim";
              }
              let str30 = code.origin;
              if (obj2[code.origin] ?? null) {
                if (str30 == null) {
                  str30 = "el valor";
                }
                const str36 = code.maximum;
                const _HermesInternal13 = HermesInternal;
                const str1 = str36.toString();
                const str37 = (obj2[code.origin] ?? null).unit ?? "elements";
                combined2 = "Massa gran: s'esperava que " + str30 + " contingu\u00E9s " + str29 + " " + str1 + " " + str37;
              } else {
                let str31 = str30;
                if (str30 == null) {
                  str31 = "el valor";
                }
                const _HermesInternal12 = HermesInternal;
                const str32 = code.maximum;
                combined2 = "Massa gran: s'esperava que " + str31 + " fos " + str29 + " " + str32.toString();
              }
              return combined2;
            }
            case "too_small":
            {
              let combined3;
              let minimum;
              let origin;
              let str20 = "m\u00E9s de";
              if (code.inclusive) {
                str20 = "com a m\u00EDnim";
              }
              ({ origin, minimum } = code);
              const str53 = minimum.toString();
              if (obj2[code.origin] ?? null) {
                const _HermesInternal11 = HermesInternal;
                combined3 = "Massa petit: s'esperava que " + origin + " contingu\u00E9s " + str20 + " " + str53 + " " + tmp17.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Massa petit: s'esperava que " + origin + " fos " + str20 + " " + str53;
              }
              return combined3;
            }
            case "invalid_format":
            {
              let combined4;
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined4 = "Format inv\u00E0lid: ha de comen\u00E7ar amb \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = "Format inv\u00E0lid: ha d'acabar amb \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "Format inv\u00E0lid: ha d'incloure \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Format inv\u00E0lid: ha de coincidir amb el patr\u00F3 " + code.pattern;
              } else {
                const format = closure_1[code.format] ?? code.format;
                const _HermesInternal5 = HermesInternal;
                combined4 = "Format inv\u00E0lid per a " + format;
              }
              return combined4;
            }
            case "not_multiple_of":
            {
              const _HermesInternal4 = HermesInternal;
              return "N\u00FAmero inv\u00E0lid: ha de ser m\u00FAltiple de " + code.divisor;
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
              return "Clau" + str4 + " no reconeguda" + str3 + ": " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              const _HermesInternal2 = HermesInternal;
              return "Clau inv\u00E0lida a " + code.origin;
            }
            case "invalid_union":
            {
              return "Entrada inv\u00E0lida";
            }
            case "invalid_element":
            {
              const _HermesInternal = HermesInternal;
              return "Element inv\u00E0lid a " + code.origin;
            }
            default:
            {
              return "Entrada inv\u00E0lida";
            }
          }
        }
    };
    const obj2 = { string: { unit: "car\u00E0cters", verb: "contenir" }, file: { unit: "bytes", verb: "contenir" }, array: { unit: "elements", verb: "contenir" }, set: { unit: "elements", verb: "contenir" } };
    closure_1 = { regex: "entrada", email: "adre\u00E7a electr\u00F2nica", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "data i hora ISO", date: "data ISO", time: "hora ISO", duration: "durada ISO", ipv4: "adre\u00E7a IPv4", ipv6: "adre\u00E7a IPv6", cidrv4: "rang IPv4", cidrv6: "rang IPv6", base64: "cadena codificada en base64", base64url: "cadena codificada en base64url", json_string: "cadena JSON", e164: "n\u00FAmero E.164", jwt: "JWT", template_literal: "entrada" };
    let closure_2 = { nan: "NaN" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};