// _runtime/metro/08955__.js
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
        closure_2 = { nan: "NaN", number: "nombro", array: "tabelo", null: "senvalora" };
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
                let combined =
                  "Nevalida enigo: atendi\u011Dis instanceof " + code.expected + ", ricevi\u011Dis " + tmp50;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Nevalida enigo: atendi\u011Dis " + expected + ", ricevi\u011Dis " + tmp50;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "Nevalida enigo: atendi\u011Dis " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Nevalida opcio: atendi\u011Dis unu el " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str26 = "<";
              if (code.inclusive) {
                str26 = "<=";
              }
              let tmp29 = obj[code.origin];
              if (tmp29 == null) {
                tmp29 = null;
              }
              let str27 = code.origin;
              if (tmp29) {
                if (str27 == null) {
                  str27 = "valoro";
                }
                let str = code.maximum.toString();
                let str33 = tmp29.unit;
                if (str33 == null) {
                  str33 = "elementojn";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "Tro granda: atendi\u011Dis ke " + str27 + " havu " + str26 + str + " " + str33;
              } else {
                let str28 = str27;
                if (str27 == null) {
                  str28 = "valoro";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "Tro granda: atendi\u011Dis ke " + str28 + " havu " + str26 + code.maximum.toString();
              }
              return combined2;
            case "too_small":
              let str20 = ">";
              if (code.inclusive) {
                str20 = ">=";
              }
              let tmp17 = obj[code.origin];
              if (tmp17 == null) {
                tmp17 = null;
              }
              ({ origin, minimum } = code);
              const str1 = minimum.toString();
              if (tmp17) {
                const _HermesInternal11 = HermesInternal;
                let combined3 =
                  "Tro malgranda: atendi\u011Dis ke " + origin + " havu " + str20 + str1 + " " + tmp17.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Tro malgranda: atendi\u011Dis ke " + origin + " estu " + str20 + str1;
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = 'Nevalida karaktraro: devas komenci\u011Di per "' + code.prefix + '"';
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
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "Nevalida " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "Nevalida nombro: devas esti oblo de " + code.divisor;
            case "unrecognized_keys":
              let str3 = "";
              let str4 = "";
              if (code.keys.length > 1) {
                str4 = "j";
              }
              if (code.keys.length > 1) {
                str3 = "j";
              }
              const _HermesInternal3 = HermesInternal;
              return "Nekonata" + str4 + " \u015Dlosilo" + str3 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "Nevalida \u015Dlosilo en " + code.origin;
            case "invalid_union":
              return "Nevalida enigo";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = "Nevalida valoro en ";
              return "Nevalida valoro en " + code.origin;
            default:
              return "Nevalida enigo";
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
