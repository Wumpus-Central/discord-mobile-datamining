// _runtime/metro/08962__.js
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
          string: { unit: "karakter", verb: "legyen" },
          file: { unit: "byte", verb: "legyen" },
          array: { unit: "elem", verb: "legyen" },
          set: { unit: "elem", verb: "legyen" },
        };
        closure_1 = {
          regex: "bemenet",
          email: "email c\u00EDm",
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
          datetime: "ISO id\u0151b\u00E9lyeg",
          date: "ISO d\u00E1tum",
          time: "ISO id\u0151",
          duration: "ISO id\u0151intervallum",
          ipv4: "IPv4 c\u00EDm",
          ipv6: "IPv6 c\u00EDm",
          cidrv4: "IPv4 tartom\u00E1ny",
          cidrv6: "IPv6 tartom\u00E1ny",
          base64: "base64-k\u00F3dolt string",
          base64url: "base64url-k\u00F3dolt string",
          json_string: "JSON string",
          e164: "E.164 sz\u00E1m",
          jwt: "JWT",
          template_literal: "bemenet",
        };
        closure_2 = { nan: "NaN", number: "sz\u00E1m", array: "t\u00F6mb" };
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
                  "\u00C9rv\u00E9nytelen bemenet: a v\u00E1rt \u00E9rt\u00E9k instanceof " +
                  code.expected +
                  ", a kapott \u00E9rt\u00E9k " +
                  tmp48;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined =
                  "\u00C9rv\u00E9nytelen bemenet: a v\u00E1rt \u00E9rt\u00E9k " +
                  expected +
                  ", a kapott \u00E9rt\u00E9k " +
                  tmp48;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 =
                  "\u00C9rv\u00E9nytelen bemenet: a v\u00E1rt \u00E9rt\u00E9k " +
                  closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 =
                  "\u00C9rv\u00E9nytelen opci\u00F3: valamelyik \u00E9rt\u00E9k v\u00E1rt " +
                  closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str26 = "<";
              if (code.inclusive) {
                str26 = "<=";
              }
              let tmp27 = obj[code.origin];
              if (tmp27 == null) {
                tmp27 = null;
              }
              let str27 = code.origin;
              if (tmp27) {
                if (str27 == null) {
                  str27 = "\u00E9rt\u00E9k";
                }
                let str = code.maximum.toString();
                let str33 = tmp27.unit;
                if (str33 == null) {
                  str33 = "elem";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "T\u00FAl nagy: " + str27 + " m\u00E9rete t\u00FAl nagy " + str26 + str + " " + str33;
              } else {
                let str28 = str27;
                if (str27 == null) {
                  str28 = "\u00E9rt\u00E9k";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 =
                  "T\u00FAl nagy: a bemeneti \u00E9rt\u00E9k " +
                  str28 +
                  " t\u00FAl nagy: " +
                  str26 +
                  code.maximum.toString();
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
                let combined3 =
                  "T\u00FAl kicsi: a bemeneti \u00E9rt\u00E9k " +
                  origin +
                  " m\u00E9rete t\u00FAl kicsi " +
                  str20 +
                  str1 +
                  " " +
                  tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "T\u00FAl kicsi: a bemeneti \u00E9rt\u00E9k " + origin + " t\u00FAl kicsi " + str20 + str1;
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 =
                  '\u00C9rv\u00E9nytelen string: "' + code.prefix + '" \u00E9rt\u00E9kkel kell kezd\u0151dnie';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 =
                  '\u00C9rv\u00E9nytelen string: "' + code.suffix + '" \u00E9rt\u00E9kkel kell v\u00E9gz\u0151dnie';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = '\u00C9rv\u00E9nytelen string: "' + code.includes + '" \u00E9rt\u00E9ket kell tartalmaznia';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "\u00C9rv\u00E9nytelen string: " + code.pattern + " mint\u00E1nak kell megfelelnie";
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "\u00C9rv\u00E9nytelen " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return (
                "\u00C9rv\u00E9nytelen sz\u00E1m: " + code.divisor + " t\u00F6bbsz\u00F6r\u00F6s\u00E9nek kell lennie"
              );
            case "unrecognized_keys":
              let str3 = "";
              if (code.keys.length > 1) {
                str3 = "s";
              }
              const _HermesInternal3 = HermesInternal;
              return "Ismeretlen kulcs" + str3 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "\u00C9rv\u00E9nytelen kulcs " + code.origin;
            case "invalid_union":
              return "\u00C9rv\u00E9nytelen bemenet";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = "\u00C9rv\u00E9nytelen \u00E9rt\u00E9k: ";
              return "\u00C9rv\u00E9nytelen \u00E9rt\u00E9k: " + code.origin;
            default:
              return "\u00C9rv\u00E9nytelen bemenet";
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
