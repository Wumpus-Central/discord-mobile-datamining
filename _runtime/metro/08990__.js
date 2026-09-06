// _runtime/metro/08990__.js
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
          string: { unit: "belgi", verb: "bo\u2018lishi kerak" },
          file: { unit: "bayt", verb: "bo\u2018lishi kerak" },
          array: { unit: "element", verb: "bo\u2018lishi kerak" },
          set: { unit: "element", verb: "bo\u2018lishi kerak" },
        };
        closure_1 = {
          regex: "kirish",
          email: "elektron pochta manzili",
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
          datetime: "ISO sana va vaqti",
          date: "ISO sana",
          time: "ISO vaqt",
          duration: "ISO davomiylik",
          ipv4: "IPv4 manzil",
          ipv6: "IPv6 manzil",
          mac: "MAC manzil",
          cidrv4: "IPv4 diapazon",
          cidrv6: "IPv6 diapazon",
          base64: "base64 kodlangan satr",
          base64url: "base64url kodlangan satr",
          json_string: "JSON satr",
          e164: "E.164 raqam",
          jwt: "JWT",
          template_literal: "kirish",
        };
        closure_2 = { nan: "NaN", number: "raqam", array: "massiv" };
        obj.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp45 = closure_2[parsedTypeResult];
              if (tmp45 == null) {
                tmp45 = parsedTypeResult;
              }
              obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined =
                  "Noto\u2018g\u2018ri kirish: kutilgan instanceof " + code.expected + ", qabul qilingan " + tmp45;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Noto\u2018g\u2018ri kirish: kutilgan " + expected + ", qabul qilingan " + tmp45;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "Noto\u2018g\u2018ri kirish: kutilgan " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 =
                  "Noto\u2018g\u2018ri variant: quyidagilardan biri kutilgan " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str30 = "<";
              if (code.inclusive) {
                str30 = "<=";
              }
              let tmp27 = obj[code.origin];
              if (tmp27 == null) {
                tmp27 = null;
              }
              let str31 = code.origin;
              if (tmp27) {
                if (str31 == null) {
                  str31 = "qiymat";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 =
                  "Juda katta: kutilgan " +
                  str31 +
                  " " +
                  str30 +
                  code.maximum.toString() +
                  " " +
                  tmp27.unit +
                  " " +
                  tmp27.verb;
              } else {
                let str32 = str31;
                if (str31 == null) {
                  str32 = "qiymat";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "Juda katta: kutilgan " + str32 + " " + str30 + code.maximum.toString();
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
              let str = minimum.toString();
              if (tmp15) {
                const _HermesInternal11 = HermesInternal;
                let combined3 =
                  "Juda kichik: kutilgan " + origin + " " + str22 + str + " " + tmp15.unit + " " + tmp15.verb;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Juda kichik: kutilgan " + origin + " " + str22 + str;
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = 'Noto\u2018g\u2018ri satr: "' + code.prefix + '" bilan boshlanishi kerak';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = 'Noto\u2018g\u2018ri satr: "' + code.suffix + '" bilan tugashi kerak';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = 'Noto\u2018g\u2018ri satr: "' + code.includes + '" ni o\u2018z ichiga olishi kerak';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Noto\u2018g\u2018ri satr: " + code.pattern + " shabloniga mos kelishi kerak";
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "Noto\u2018g\u2018ri " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "Noto\u2018g\u2018ri raqam: " + code.divisor + " ning karralisi bo\u2018lishi kerak";
            case "unrecognized_keys":
              let str5 = "";
              if (code.keys.length > 1) {
                str5 = "lar";
              }
              const _HermesInternal3 = HermesInternal;
              return "Noma\u2019lum kalit" + str5 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "" + code.origin + " dagi kalit noto\u2018g\u2018ri";
            case "invalid_union":
              return "Noto\u2018g\u2018ri kirish";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = " da noto\u2018g\u2018ri qiymat";
              return "" + code.origin + " da noto\u2018g\u2018ri qiymat";
            default:
              return "Noto\u2018g\u2018ri kirish";
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
