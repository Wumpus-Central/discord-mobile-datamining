// === Module 12223: ? ===

// Module 12223
import _mod12160 from "module_12160" /* 12160 */;

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
        const obj = { localeError: null };
        const obj2 = { string: { unit: "simwol", verb: "bolmaly" }, file: { unit: "ba\u00FDt", verb: "bolmaly" }, array: { unit: "elementler", verb: "bolmaly" }, set: { unit: "elementler", verb: "bolmaly" }, map: { unit: "elementler", verb: "bolmaly" } };
        closure_1 = { regex: "giri\u015F", email: "e-po\u00E7ta salgysy", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO sene we wagt", date: "ISO sene", time: "ISO wagt", duration: "ISO wagt aralygy", ipv4: "IPv4 salgysy", ipv6: "IPv6 salgysy", mac: "MAC salgysy", cidrv4: "IPv4 aralygy", cidrv6: "IPv6 aralygy", base64: "base64 bilen \u015Fifrlenen setir", base64url: "base64url bilen \u015Fifrlenen setir", json_string: "JSON setiri", e164: "E.164 nomeri", credit_card: "kredit kartyny\u0148 nomeri", currency_code: "wal\u00FDuta kody", iban: "IBAN", jwt: "JWT", template_literal: "\u015Fablon" };
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
              const _HermesInternal16 = HermesInternal;
              return "N\u00E4dogry baha: gara\u015Fylan " + expected + " \u00FDerine " + tmp48 + " alyndy";
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined = "N\u00E4dogry baha: " + closure_2.stringifyPrimitive(code.values[0]) + " bolmaly";
              } else {
                const _HermesInternal14 = HermesInternal;
                combined = "N\u00E4dogry sa\u00FDlaw: a\u015Fakdakylardan biri bolmaly: " + closure_2.joinValues(code.values, "|");
              }
              return combined;
            case "too_big":
              let str32 = "<";
              if (code.inclusive) {
                str32 = "<=";
              }
              let tmp27 = obj2[code.origin];
              if (tmp27 == null) {
                tmp27 = null;
              }
              let str33 = code.origin;
              if (tmp27) {
                if (str33 == null) {
                  str33 = "baha";
                }
                const str1 = code.maximum.toString();
                let str41 = tmp27.unit;
                if (str41 == null) {
                  str41 = "element";
                }
                const _HermesInternal13 = HermesInternal;
                let combined1 = "Has uly: gara\u015Fyl\u00FDan " + str33 + " " + str32 + " " + str1 + " " + str41;
              } else {
                let str34 = str33;
                if (str33 == null) {
                  str34 = "baha";
                }
                const _HermesInternal12 = HermesInternal;
                combined1 = "Has uly: gara\u015Fyl\u00FDan " + str34 + " " + str32 + " " + code.maximum.toString();
              }
              return combined1;
            case "too_small":
              let str22 = ">";
              if (code.inclusive) {
                str22 = ">=";
              }
              let tmp15 = obj2[code.origin];
              if (tmp15 == null) {
                tmp15 = null;
              }
              ({ origin, minimum } = code);
              const str57 = minimum.toString();
              if (tmp15) {
                const _HermesInternal11 = HermesInternal;
                let combined2 = "Has ki\u00E7i: gara\u015Fyl\u00FDan " + origin + " " + str22 + " " + str57 + " " + tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined2 = "Has ki\u00E7i: gara\u015Fyl\u00FDan " + origin + " " + str22 + " " + str57;
              }
              return combined2;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined3 = "N\u00E4dogry setir: \"" + code.prefix + "\" bilen ba\u015Flamaly";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined3 = "N\u00E4dogry setir: \"" + code.suffix + "\" bilen gutarmaly";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined3 = "N\u00E4dogry setir: \"" + code.includes + "\" saklamaly";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined3 = "N\u00E4dogry setir: " + code.pattern + " nusga la\u00FDyk bolmaly";
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined3 = "N\u00E4dogry " + format;
              }
              return combined3;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "N\u00E4dogry san: " + code.divisor + " bilen galyndysyz b\u00F6l\u00FCnmeli";
            case "unrecognized_keys":
              let str5 = "";
              if (code.keys.length > 1) {
                str5 = "lar";
              }
              const _HermesInternal3 = HermesInternal;
              return "Tanalma\u00FDan a\u00E7ar" + str5 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "" + code.origin + " i\u00E7inde n\u00E4dogry a\u00E7ar";
            case "invalid_union":
              return "N\u00E4dogry baha";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              return "" + code.origin + " i\u00E7inde n\u00E4dogry baha";
            default:
              return "N\u00E4dogry baha";
          }
        };
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let closure_2 = fn(_mod12160);
    function error() {

    }
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}