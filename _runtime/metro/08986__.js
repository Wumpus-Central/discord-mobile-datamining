// _runtime/metro/08986__.js
import _mod8939 from "08939__.js";

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
        obj = {
          string: { unit: "karakter", verb: "olmal\u0131" },
          file: { unit: "bayt", verb: "olmal\u0131" },
          array: { unit: "\u00F6\u011Fe", verb: "olmal\u0131" },
          set: { unit: "\u00F6\u011Fe", verb: "olmal\u0131" },
        };
        closure_1 = {
          regex: "girdi",
          email: "e-posta adresi",
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
          datetime: "ISO tarih ve saat",
          date: "ISO tarih",
          time: "ISO saat",
          duration: "ISO s\u00FCre",
          ipv4: "IPv4 adresi",
          ipv6: "IPv6 adresi",
          cidrv4: "IPv4 aral\u0131\u011F\u0131",
          cidrv6: "IPv6 aral\u0131\u011F\u0131",
          base64: "base64 ile \u015Fifrelenmi\u015F metin",
          base64url: "base64url ile \u015Fifrelenmi\u015F metin",
          json_string: "JSON dizesi",
          e164: "E.164 say\u0131s\u0131",
          jwt: "JWT",
          template_literal: "\u015Eablon dizesi",
        };
        closure_2 = { nan: "NaN" };
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
                let combined =
                  "Ge\u00E7ersiz de\u011Fer: beklenen instanceof " + code.expected + ", al\u0131nan " + tmp48;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Ge\u00E7ersiz de\u011Fer: beklenen " + expected + ", al\u0131nan " + tmp48;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "Ge\u00E7ersiz de\u011Fer: beklenen " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 =
                  "Ge\u00E7ersiz se\u00E7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: " +
                  closure_2.joinValues(code.values, "|");
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
                  str30 = "de\u011Fer";
                }
                let str = code.maximum.toString();
                let str36 = tmp27.unit;
                if (str36 == null) {
                  str36 = "\u00F6\u011Fe";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "\u00C7ok b\u00FCy\u00FCk: beklenen " + str30 + " " + str29 + str + " " + str36;
              } else {
                let str31 = str30;
                if (str30 == null) {
                  str31 = "de\u011Fer";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "\u00C7ok b\u00FCy\u00FCk: beklenen " + str31 + " " + str29 + code.maximum.toString();
              }
              return combined2;
            case "too_small":
              let str22 = ">";
              if (code.inclusive) {
                str22 = ">=";
              }
              let tmp15 = obj[code.origin];
              if (tmp15 == null) {
                tmp15 = null;
              }
              ({ origin, minimum } = code);
              const str1 = minimum.toString();
              if (tmp15) {
                const _HermesInternal11 = HermesInternal;
                let combined3 =
                  "\u00C7ok k\u00FC\u00E7\u00FCk: beklenen " + origin + " " + str22 + str1 + " " + tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "\u00C7ok k\u00FC\u00E7\u00FCk: beklenen " + origin + " " + str22 + str1;
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = 'Ge\u00E7ersiz metin: "' + code.prefix + '" ile ba\u015Flamal\u0131';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = 'Ge\u00E7ersiz metin: "' + code.suffix + '" ile bitmeli';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = 'Ge\u00E7ersiz metin: "' + code.includes + '" i\u00E7ermeli';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Ge\u00E7ersiz metin: " + code.pattern + " desenine uymal\u0131";
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "Ge\u00E7ersiz " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "Ge\u00E7ersiz say\u0131: " + code.divisor + " ile tam b\u00F6l\u00FCnebilmeli";
            case "unrecognized_keys":
              let str5 = "";
              if (code.keys.length > 1) {
                str5 = "lar";
              }
              const _HermesInternal3 = HermesInternal;
              return "Tan\u0131nmayan anahtar" + str5 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "" + code.origin + " i\u00E7inde ge\u00E7ersiz anahtar";
            case "invalid_union":
              return "Ge\u00E7ersiz de\u011Fer";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = " i\u00E7inde ge\u00E7ersiz de\u011Fer";
              return "" + code.origin + " i\u00E7inde ge\u00E7ersiz de\u011Fer";
            default:
              return "Ge\u00E7ersiz de\u011Fer";
          }
        };
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let closure_2 = fn(_mod8939);
    function error() {}
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
