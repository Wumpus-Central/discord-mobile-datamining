// _runtime/metro/08947__.js
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
          string: { unit: "simvol", verb: "olmal\u0131d\u0131r" },
          file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
          array: { unit: "element", verb: "olmal\u0131d\u0131r" },
          set: { unit: "element", verb: "olmal\u0131d\u0131r" },
        };
        closure_1 = {
          regex: "input",
          email: "email address",
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
          datetime: "ISO datetime",
          date: "ISO date",
          time: "ISO time",
          duration: "ISO duration",
          ipv4: "IPv4 address",
          ipv6: "IPv6 address",
          cidrv4: "IPv4 range",
          cidrv6: "IPv6 range",
          base64: "base64-encoded string",
          base64url: "base64url-encoded string",
          json_string: "JSON string",
          e164: "E.164 number",
          jwt: "JWT",
          template_literal: "input",
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
                  "Yanl\u0131\u015F d\u0259y\u0259r: g\u00F6zl\u0259nil\u0259n instanceof " +
                  code.expected +
                  ", daxil olan " +
                  tmp48;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined =
                  "Yanl\u0131\u015F d\u0259y\u0259r: g\u00F6zl\u0259nil\u0259n " + expected + ", daxil olan " + tmp48;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 =
                  "Yanl\u0131\u015F d\u0259y\u0259r: g\u00F6zl\u0259nil\u0259n " +
                  closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 =
                  "Yanl\u0131\u015F se\u00E7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: " +
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
                  str30 = "d\u0259y\u0259r";
                }
                let str = code.maximum.toString();
                let str36 = tmp27.unit;
                if (str36 == null) {
                  str36 = "element";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 =
                  "\u00C7ox b\u00F6y\u00FCk: g\u00F6zl\u0259nil\u0259n " + str30 + " " + str29 + str + " " + str36;
              } else {
                let str31 = str30;
                if (str30 == null) {
                  str31 = "d\u0259y\u0259r";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 =
                  "\u00C7ox b\u00F6y\u00FCk: g\u00F6zl\u0259nil\u0259n " +
                  str31 +
                  " " +
                  str29 +
                  code.maximum.toString();
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
                  "\u00C7ox ki\u00E7ik: g\u00F6zl\u0259nil\u0259n " + origin + " " + str22 + str1 + " " + tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "\u00C7ox ki\u00E7ik: g\u00F6zl\u0259nil\u0259n " + origin + " " + str22 + str1;
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 =
                  'Yanl\u0131\u015F m\u0259tn: "' + code.prefix + '" il\u0259 ba\u015Flamal\u0131d\u0131r';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = 'Yanl\u0131\u015F m\u0259tn: "' + code.suffix + '" il\u0259 bitm\u0259lidir';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = 'Yanl\u0131\u015F m\u0259tn: "' + code.includes + '" daxil olmal\u0131d\u0131r';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 =
                  "Yanl\u0131\u015F m\u0259tn: " + code.pattern + " \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r";
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "Yanl\u0131\u015F " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return (
                "Yanl\u0131\u015F \u0259d\u0259d: " +
                code.divisor +
                " il\u0259 b\u00F6l\u00FCn\u0259 bil\u0259n olmal\u0131d\u0131r"
              );
            case "unrecognized_keys":
              let str5 = "";
              if (code.keys.length > 1) {
                str5 = "lar";
              }
              const _HermesInternal3 = HermesInternal;
              return "Tan\u0131nmayan a\u00E7ar" + str5 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "" + code.origin + " daxilind\u0259 yanl\u0131\u015F a\u00E7ar";
            case "invalid_union":
              return "Yanl\u0131\u015F d\u0259y\u0259r";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = " daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r";
              return "" + code.origin + " daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r";
            default:
              return "Yanl\u0131\u015F d\u0259y\u0259r";
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
