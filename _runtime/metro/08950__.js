// === Module 8950: ? ===

// Module 8950
import _mod8939 from "module_8939" /* 8939 */;

const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports.default = function default_1() {
      if (typeof error === "function") {
        let obj = { localeError: null };
        obj = { string: { unit: "car\u00E0cters", verb: "contenir" }, file: { unit: "bytes", verb: "contenir" }, array: { unit: "elements", verb: "contenir" }, set: { unit: "elements", verb: "contenir" } };
        closure_1 = { regex: "entrada", email: "adre\u00E7a electr\u00F2nica", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "data i hora ISO", date: "data ISO", time: "hora ISO", duration: "durada ISO", ipv4: "adre\u00E7a IPv4", ipv6: "adre\u00E7a IPv6", cidrv4: "rang IPv4", cidrv6: "rang IPv6", base64: "cadena codificada en base64", base64url: "cadena codificada en base64url", json_string: "cadena JSON", e164: "n\u00FAmero E.164", jwt: "JWT", template_literal: "entrada" };
        closure_2 = { nan: "NaN" };
        obj.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp50 = closure_2[parsedTypeResult];
              if (tmp50 == null) {
                tmp50 = parsedTypeResult;
              }
              obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined = "Tipus inv\u00E0lid: s'esperava instanceof " + code.expected + ", s'ha rebut " + tmp50;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Tipus inv\u00E0lid: s'esperava " + expected + ", s'ha rebut " + tmp50;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "Valor inv\u00E0lid: s'esperava " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Opci\u00F3 inv\u00E0lida: s'esperava una de " + closure_2.joinValues(code.values, " o ");
              }
              return combined1;
            case "too_big":
              let str29 = "menys de";
              if (code.inclusive) {
                str29 = "com a m\u00E0xim";
              }
              let tmp29 = obj[code.origin];
              if (tmp29 == null) {
                tmp29 = null;
              }
              let str30 = code.origin;
              if (tmp29) {
                if (str30 == null) {
                  str30 = "el valor";
                }
                let str = code.maximum.toString();
                let str37 = tmp29.unit;
                if (str37 == null) {
                  str37 = "elements";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "Massa gran: s'esperava que " + str30 + " contingu\u00E9s " + str29 + " " + str + " " + str37;
              } else {
                let str31 = str30;
                if (str30 == null) {
                  str31 = "el valor";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "Massa gran: s'esperava que " + str31 + " fos " + str29 + " " + code.maximum.toString();
              }
              return combined2;
            case "too_small":
              let str20 = "m\u00E9s de";
              if (code.inclusive) {
                str20 = "com a m\u00EDnim";
              }
              let tmp17 = obj[code.origin];
              if (tmp17 == null) {
                tmp17 = null;
              }
              ({ origin, minimum } = code);
              const str1 = minimum.toString();
              if (tmp17) {
                const _HermesInternal11 = HermesInternal;
                let combined3 = "Massa petit: s'esperava que " + origin + " contingu\u00E9s " + str20 + " " + str1 + " " + tmp17.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Massa petit: s'esperava que " + origin + " fos " + str20 + " " + str1;
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = "Format inv\u00E0lid: ha de comen\u00E7ar amb \"" + code.prefix + "\"";
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
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "Format inv\u00E0lid per a " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "N\u00FAmero inv\u00E0lid: ha de ser m\u00FAltiple de " + code.divisor;
            case "unrecognized_keys":
              let str3 = "";
              let str4 = "";
              if (code.keys.length > 1) {
                str4 = "s";
              }
              if (code.keys.length > 1) {
                str3 = "s";
              }
              const _HermesInternal3 = HermesInternal;
              return "Clau" + str4 + " no reconeguda" + str3 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "Clau inv\u00E0lida a " + code.origin;
            case "invalid_union":
              return "Entrada inv\u00E0lida";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = "Element inv\u00E0lid a ";
              return "Element inv\u00E0lid a " + code.origin;
            default:
              return "Entrada inv\u00E0lida";
          }
        };
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let closure_2 = fn(_mod8939);
    function error() {

    }
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}