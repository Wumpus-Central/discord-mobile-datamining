// _runtime/metro/08983__.js
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
          string: { unit: "tecken", verb: "att ha" },
          file: { unit: "bytes", verb: "att ha" },
          array: { unit: "objekt", verb: "att inneh\u00E5lla" },
          set: { unit: "objekt", verb: "att inneh\u00E5lla" },
        };
        closure_1 = {
          regex: "regulj\u00E4rt uttryck",
          email: "e-postadress",
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
          datetime: "ISO-datum och tid",
          date: "ISO-datum",
          time: "ISO-tid",
          duration: "ISO-varaktighet",
          ipv4: "IPv4-intervall",
          ipv6: "IPv6-intervall",
          cidrv4: "IPv4-spektrum",
          cidrv6: "IPv6-spektrum",
          base64: "base64-kodad str\u00E4ng",
          base64url: "base64url-kodad str\u00E4ng",
          json_string: "JSON-str\u00E4ng",
          e164: "E.164-nummer",
          jwt: "JWT",
          template_literal: "mall-literal",
        };
        closure_2 = { nan: "NaN", number: "antal", array: "lista" };
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
                let combined = "Ogiltig inmatning: f\u00F6rv\u00E4ntat instanceof " + code.expected + ", fick " + tmp48;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Ogiltig inmatning: f\u00F6rv\u00E4ntat " + expected + ", fick " + tmp48;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 =
                  "Ogiltig inmatning: f\u00F6rv\u00E4ntat " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Ogiltigt val: f\u00F6rv\u00E4ntade en av " + closure_2.joinValues(code.values, "|");
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
                  str32 = "v\u00E4rdet";
                }
                let str = code.maximum.toString();
                let str38 = tmp27.unit;
                if (str38 == null) {
                  str38 = "element";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 =
                  "F\u00F6r stor(t): f\u00F6rv\u00E4ntade " + str32 + " att ha " + str31 + str + " " + str38;
              } else {
                let str33 = str32;
                if (str32 == null) {
                  str33 = "v\u00E4rdet";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 =
                  "F\u00F6r stor(t): f\u00F6rv\u00E4ntat " + str33 + " att ha " + str31 + code.maximum.toString();
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
              let str22 = code.origin;
              if (tmp17) {
                if (str22 == null) {
                  str22 = "v\u00E4rdet";
                }
                const _HermesInternal11 = HermesInternal;
                let combined3 =
                  "F\u00F6r lite(t): f\u00F6rv\u00E4ntade " +
                  str22 +
                  " att ha " +
                  str21 +
                  code.minimum.toString() +
                  " " +
                  tmp17.unit;
              } else {
                let str23 = str22;
                if (str22 == null) {
                  str23 = "v\u00E4rdet";
                }
                const _HermesInternal10 = HermesInternal;
                combined3 =
                  "F\u00F6r lite(t): f\u00F6rv\u00E4ntade " + str23 + " att ha " + str21 + code.minimum.toString();
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = 'Ogiltig str\u00E4ng: m\u00E5ste b\u00F6rja med "' + code.prefix + '"';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = 'Ogiltig str\u00E4ng: m\u00E5ste sluta med "' + code.suffix + '"';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = 'Ogiltig str\u00E4ng: m\u00E5ste inneh\u00E5lla "' + code.includes + '"';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = 'Ogiltig str\u00E4ng: m\u00E5ste matcha m\u00F6nstret "' + code.pattern + '"';
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "Ogiltig(t) " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "Ogiltigt tal: m\u00E5ste vara en multipel av " + code.divisor;
            case "unrecognized_keys":
              let str5 = "Ok\u00E4nd nyckel";
              if (code.keys.length > 1) {
                str5 = "Ok\u00E4nda nycklar";
              }
              const _HermesInternal3 = HermesInternal;
              return "" + str5 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              let str3 = code.origin;
              if (str3 == null) {
                str3 = "v\u00E4rdet";
              }
              const _HermesInternal2 = HermesInternal;
              return "Ogiltig nyckel i " + str3;
            case "invalid_union":
              return "Ogiltig input";
            case "invalid_element":
              str = code.origin;
              if (str == null) {
                str = "v\u00E4rdet";
              }
              const _HermesInternal = HermesInternal;
              return "Ogiltigt v\u00E4rde i " + str;
            default:
              return "Ogiltig input";
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
