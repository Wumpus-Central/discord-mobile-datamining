// _runtime/metro/08982__.js
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
          string: { unit: "znakov", verb: "imeti" },
          file: { unit: "bajtov", verb: "imeti" },
          array: { unit: "elementov", verb: "imeti" },
          set: { unit: "elementov", verb: "imeti" },
        };
        closure_1 = {
          regex: "vnos",
          email: "e-po\u0161tni naslov",
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
          datetime: "ISO datum in \u010Das",
          date: "ISO datum",
          time: "ISO \u010Das",
          duration: "ISO trajanje",
          ipv4: "IPv4 naslov",
          ipv6: "IPv6 naslov",
          cidrv4: "obseg IPv4",
          cidrv6: "obseg IPv6",
          base64: "base64 kodiran niz",
          base64url: "base64url kodiran niz",
          json_string: "JSON niz",
          e164: "E.164 \u0161tevilka",
          jwt: "JWT",
          template_literal: "vnos",
        };
        closure_2 = { nan: "NaN", number: "\u0161tevilo", array: "tabela" };
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
                let combined = "Neveljaven vnos: pri\u010Dakovano instanceof " + code.expected + ", prejeto " + tmp48;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Neveljaven vnos: pri\u010Dakovano " + expected + ", prejeto " + tmp48;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "Neveljaven vnos: pri\u010Dakovano " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 =
                  "Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str24 = "<";
              if (code.inclusive) {
                str24 = "<=";
              }
              let tmp27 = obj[code.origin];
              if (tmp27 == null) {
                tmp27 = null;
              }
              let str25 = code.origin;
              if (tmp27) {
                if (str25 == null) {
                  str25 = "vrednost";
                }
                let str = code.maximum.toString();
                let str31 = tmp27.unit;
                if (str31 == null) {
                  str31 = "elementov";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "Preveliko: pri\u010Dakovano, da bo " + str25 + " imelo " + str24 + str + " " + str31;
              } else {
                let str26 = str25;
                if (str25 == null) {
                  str26 = "vrednost";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "Preveliko: pri\u010Dakovano, da bo " + str26 + " " + str24 + code.maximum.toString();
              }
              return combined2;
            case "too_small":
              let str18 = ">";
              if (code.inclusive) {
                str18 = ">=";
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
                  "Premajhno: pri\u010Dakovano, da bo " + origin + " imelo " + str18 + str1 + " " + tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Premajhno: pri\u010Dakovano, da bo " + origin + " " + str18 + str1;
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = 'Neveljaven niz: mora se za\u010Deti z "' + code.prefix + '"';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = 'Neveljaven niz: mora se kon\u010Dati z "' + code.suffix + '"';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = 'Neveljaven niz: mora vsebovati "' + code.includes + '"';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Neveljaven niz: mora ustrezati vzorcu " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "Neveljaven " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik " + code.divisor;
            case "unrecognized_keys":
              let str3 = " klju\u010D";
              if (code.keys.length > 1) {
                str3 = "i klju\u010Di";
              }
              const _HermesInternal3 = HermesInternal;
              return "Neprepoznan" + str3 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "Neveljaven klju\u010D v " + code.origin;
            case "invalid_union":
              return "Neveljaven vnos";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = "Neveljavna vrednost v ";
              return "Neveljavna vrednost v " + code.origin;
            default:
              return "Neveljaven vnos";
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
