// === Module 8953: ? ===

// Module 8953
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
        obj = { string: { unit: "Zeichen", verb: "zu haben" }, file: { unit: "Bytes", verb: "zu haben" }, array: { unit: "Elemente", verb: "zu haben" }, set: { unit: "Elemente", verb: "zu haben" } };
        closure_1 = { regex: "Eingabe", email: "E-Mail-Adresse", url: "URL", emoji: "Emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO-Datum und -Uhrzeit", date: "ISO-Datum", time: "ISO-Uhrzeit", duration: "ISO-Dauer", ipv4: "IPv4-Adresse", ipv6: "IPv6-Adresse", cidrv4: "IPv4-Bereich", cidrv6: "IPv6-Bereich", base64: "Base64-codierter String", base64url: "Base64-URL-codierter String", json_string: "JSON-String", e164: "E.164-Nummer", jwt: "JWT", template_literal: "Eingabe" };
        closure_2 = { nan: "NaN", number: "Zahl", array: "Array" };
        obj.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp48 = closure_2[parsedTypeResult];
              if (tmp48 == null) {
                tmp48 = parsedTypeResult;
              }
              obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined = "Ung\u00FCltige Eingabe: erwartet instanceof " + code.expected + ", erhalten " + tmp48;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Ung\u00FCltige Eingabe: erwartet " + expected + ", erhalten " + tmp48;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "Ung\u00FCltige Eingabe: erwartet " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Ung\u00FCltige Option: erwartet eine von " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str29 = "<";
              if (code.inclusive) {
                str29 = "<=";
              }
              let tmp27 = obj[code.origin];
              if (tmp27 == null) {
                tmp27 = null;
              }
              let str30 = code.origin;
              if (tmp27) {
                if (str30 == null) {
                  str30 = "Wert";
                }
                let str = code.maximum.toString();
                let str37 = tmp27.unit;
                if (str37 == null) {
                  str37 = "Elemente";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "Zu gro\u00DF: erwartet, dass " + str30 + " " + str29 + str + " " + str37 + " hat";
              } else {
                let str31 = str30;
                if (str30 == null) {
                  str31 = "Wert";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "Zu gro\u00DF: erwartet, dass " + str31 + " " + str29 + code.maximum.toString() + " ist";
              }
              return combined2;
            case "too_small":
              let str20 = ">";
              if (code.inclusive) {
                str20 = ">=";
              }
              let tmp15 = obj[code.origin];
              if (tmp15 == null) {
                tmp15 = null;
              }
              ({ origin, minimum } = code);
              const str1 = minimum.toString();
              if (tmp15) {
                const _HermesInternal11 = HermesInternal;
                let combined3 = "Zu klein: erwartet, dass " + origin + " " + str20 + str1 + " " + tmp15.unit + " hat";
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Zu klein: erwartet, dass " + origin + " " + str20 + str1 + " ist";
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = "Ung\u00FCltiger String: muss mit \"" + code.prefix + "\" beginnen";
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
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "Ung\u00FCltig: " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "Ung\u00FCltige Zahl: muss ein Vielfaches von " + code.divisor + " sein";
            case "unrecognized_keys":
              let str3 = "Unbekannter Schl\u00FCssel";
              if (code.keys.length > 1) {
                str3 = "Unbekannte Schl\u00FCssel";
              }
              const _HermesInternal3 = HermesInternal;
              return "" + str3 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "Ung\u00FCltiger Schl\u00FCssel in " + code.origin;
            case "invalid_union":
              return "Ung\u00FCltige Eingabe";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = "Ung\u00FCltiger Wert in ";
              return "Ung\u00FCltiger Wert in " + code.origin;
            default:
              return "Ung\u00FCltige Eingabe";
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