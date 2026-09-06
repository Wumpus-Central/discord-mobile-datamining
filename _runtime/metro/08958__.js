// === Module 8958: ? ===

// Module 8958
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
        obj = { string: { unit: "merkki\u00E4", subject: "merkkijonon" }, file: { unit: "tavua", subject: "tiedoston" }, array: { unit: "alkiota", subject: "listan" }, set: { unit: "alkiota", subject: "joukon" }, number: { unit: "", subject: "luvun" }, bigint: { unit: "", subject: "suuren kokonaisluvun" }, int: { unit: "", subject: "kokonaisluvun" }, date: { unit: "", subject: "p\u00E4iv\u00E4m\u00E4\u00E4r\u00E4n" } };
        closure_1 = { regex: "s\u00E4\u00E4nn\u00F6llinen lauseke", email: "s\u00E4hk\u00F6postiosoite", url: "URL-osoite", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO-aikaleima", date: "ISO-p\u00E4iv\u00E4m\u00E4\u00E4r\u00E4", time: "ISO-aika", duration: "ISO-kesto", ipv4: "IPv4-osoite", ipv6: "IPv6-osoite", cidrv4: "IPv4-alue", cidrv6: "IPv6-alue", base64: "base64-koodattu merkkijono", base64url: "base64url-koodattu merkkijono", json_string: "JSON-merkkijono", e164: "E.164-luku", jwt: "JWT", template_literal: "templaattimerkkijono" };
        closure_2 = { nan: "NaN" };
        obj.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp35 = closure_2[parsedTypeResult];
              if (tmp35 == null) {
                tmp35 = parsedTypeResult;
              }
              obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal15 = HermesInternal;
                let combined = "Virheellinen tyyppi: odotettiin instanceof " + code.expected + ", oli " + tmp35;
              } else {
                const _HermesInternal14 = HermesInternal;
                combined = "Virheellinen tyyppi: odotettiin " + expected + ", oli " + tmp35;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal13 = HermesInternal;
                let combined1 = "Virheellinen sy\u00F6te: t\u00E4ytyy olla " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal12 = HermesInternal;
                combined1 = "Virheellinen valinta: t\u00E4ytyy olla yksi seuraavista: " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str28 = "<";
              if (code.inclusive) {
                str28 = "<=";
              }
              let tmp20 = obj[code.origin];
              if (tmp20 == null) {
                tmp20 = null;
              }
              if (tmp20) {
                const _HermesInternal11 = HermesInternal;
                let trimmed = "Liian suuri: " + tmp20.subject + " t\u00E4ytyy olla " + str28 + code.maximum.toString() + " " + tmp20.unit.trim();
                const str35 = "Liian suuri: " + tmp20.subject + " t\u00E4ytyy olla " + str28 + code.maximum.toString() + " " + tmp20.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                trimmed = "Liian suuri: arvon t\u00E4ytyy olla " + str28 + code.maximum.toString();
              }
              return trimmed;
            case "too_small":
              let str20 = ">";
              if (code.inclusive) {
                str20 = ">=";
              }
              let tmp13 = obj[code.origin];
              if (tmp13 == null) {
                tmp13 = null;
              }
              if (tmp13) {
                const _HermesInternal9 = HermesInternal;
                let trimmed1 = "Liian pieni: " + tmp13.subject + " t\u00E4ytyy olla " + str20 + code.minimum.toString() + " " + tmp13.unit.trim();
                const str27 = "Liian pieni: " + tmp13.subject + " t\u00E4ytyy olla " + str20 + code.minimum.toString() + " " + tmp13.unit;
              } else {
                const _HermesInternal8 = HermesInternal;
                trimmed1 = "Liian pieni: arvon t\u00E4ytyy olla " + str20 + code.minimum.toString();
              }
              return trimmed1;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal7 = HermesInternal;
                let combined2 = "Virheellinen sy\u00F6te: t\u00E4ytyy alkaa \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined2 = "Virheellinen sy\u00F6te: t\u00E4ytyy loppua \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal5 = HermesInternal;
                combined2 = "Virheellinen sy\u00F6te: t\u00E4ytyy sis\u00E4lt\u00E4\u00E4 \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal4 = HermesInternal;
                combined2 = "Virheellinen sy\u00F6te: t\u00E4ytyy vastata s\u00E4\u00E4nn\u00F6llist\u00E4 lauseketta " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal3 = HermesInternal;
                combined2 = "Virheellinen " + format;
              }
              return combined2;
            case "not_multiple_of":
              const _HermesInternal2 = HermesInternal;
              return "Virheellinen luku: t\u00E4ytyy olla luvun " + code.divisor + " monikerta";
            case "unrecognized_keys":
              let str4 = "Tuntematon avain";
              if (code.keys.length > 1) {
                str4 = "Tuntemattomat avaimet";
              }
              const _HermesInternal = HermesInternal;
              return "" + str4 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              return "Virheellinen avain tietueessa";
            case "invalid_union":
              return "Virheellinen unioni";
            case "invalid_element":
              return "Virheellinen arvo joukossa";
            default:
              return "Virheellinen sy\u00F6te";
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