// _runtime/metro/08959__.js
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
          string: { unit: "caract\u00E8res", verb: "avoir" },
          file: { unit: "octets", verb: "avoir" },
          array: { unit: "\u00E9l\u00E9ments", verb: "avoir" },
          set: { unit: "\u00E9l\u00E9ments", verb: "avoir" },
        };
        closure_1 = {
          regex: "entr\u00E9e",
          email: "adresse e-mail",
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
          datetime: "date et heure ISO",
          date: "date ISO",
          time: "heure ISO",
          duration: "dur\u00E9e ISO",
          ipv4: "adresse IPv4",
          ipv6: "adresse IPv6",
          cidrv4: "plage IPv4",
          cidrv6: "plage IPv6",
          base64: "cha\u00EEne encod\u00E9e en base64",
          base64url: "cha\u00EEne encod\u00E9e en base64url",
          json_string: "cha\u00EEne JSON",
          e164: "num\u00E9ro E.164",
          jwt: "JWT",
          template_literal: "entr\u00E9e",
        };
        closure_2 = { nan: "NaN", number: "nombre", array: "tableau" };
        obj.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp49 = closure_2[parsedTypeResult];
              if (tmp49 == null) {
                tmp49 = parsedTypeResult;
              }
              obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined =
                  "Entr\u00E9e invalide : instanceof " + code.expected + " attendu, " + tmp49 + " re\u00E7u";
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Entr\u00E9e invalide : " + expected + " attendu, " + tmp49 + " re\u00E7u";
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "Entr\u00E9e invalide : " + closure_2.stringifyPrimitive(code.values[0]) + " attendu";
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 =
                  "Option invalide : une valeur parmi " + closure_2.joinValues(code.values, "|") + " attendue";
              }
              return combined1;
            case "too_big":
              let str31 = "<";
              if (code.inclusive) {
                str31 = "<=";
              }
              let tmp27 = obj[code.origin];
              if (tmp27 == null) {
                tmp27 = null;
              }
              let str32 = code.origin;
              if (tmp27) {
                if (str32 == null) {
                  str32 = "valeur";
                }
                const verb = tmp27.verb;
                let str = code.maximum.toString();
                let str38 = tmp27.unit;
                if (str38 == null) {
                  str38 = "\u00E9l\u00E9ment(s)";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "Trop grand : " + str32 + " doit " + verb + " " + str31 + str + " " + str38;
              } else {
                let str33 = str32;
                if (str32 == null) {
                  str33 = "valeur";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "Trop grand : " + str33 + " doit \u00EAtre " + str31 + code.maximum.toString();
              }
              return combined2;
            case "too_small":
              let str21 = ">";
              if (code.inclusive) {
                str21 = ">=";
              }
              let tmp17 = obj[code.origin];
              if (tmp17 == null) {
                tmp17 = null;
              }
              const origin = code.origin;
              if (tmp17) {
                const _HermesInternal11 = HermesInternal;
                let combined3 =
                  "Trop petit : " +
                  origin +
                  " doit " +
                  tmp17.verb +
                  " " +
                  str21 +
                  code.minimum.toString() +
                  " " +
                  tmp17.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Trop petit : " + origin + " doit \u00EAtre " + str21 + code.minimum.toString();
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = 'Cha\u00EEne invalide : doit commencer par "' + code.prefix + '"';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = 'Cha\u00EEne invalide : doit se terminer par "' + code.suffix + '"';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = 'Cha\u00EEne invalide : doit inclure "' + code.includes + '"';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Cha\u00EEne invalide : doit correspondre au mod\u00E8le " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "" + format + " invalide";
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "Nombre invalide : doit \u00EAtre un multiple de " + code.divisor;
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
              return "Cl\u00E9" + str4 + " non reconnue" + str3 + " : " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "Cl\u00E9 invalide dans " + code.origin;
            case "invalid_union":
              return "Entr\u00E9e invalide";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = "Valeur invalide dans ";
              return "Valeur invalide dans " + code.origin;
            default:
              return "Entr\u00E9e invalide";
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
