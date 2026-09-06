// _runtime/metro/08991__.js
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
          string: { unit: "k\u00FD t\u1EF1", verb: "c\u00F3" },
          file: { unit: "byte", verb: "c\u00F3" },
          array: { unit: "ph\u1EA7n t\u1EED", verb: "c\u00F3" },
          set: { unit: "ph\u1EA7n t\u1EED", verb: "c\u00F3" },
        };
        closure_1 = {
          regex: "\u0111\u1EA7u v\u00E0o",
          email: "\u0111\u1ECBa ch\u1EC9 email",
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
          datetime: "ng\u00E0y gi\u1EDD ISO",
          date: "ng\u00E0y ISO",
          time: "gi\u1EDD ISO",
          duration: "kho\u1EA3ng th\u1EDDi gian ISO",
          ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4",
          ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6",
          cidrv4: "d\u1EA3i IPv4",
          cidrv6: "d\u1EA3i IPv6",
          base64: "chu\u1ED7i m\u00E3 h\u00F3a base64",
          base64url: "chu\u1ED7i m\u00E3 h\u00F3a base64url",
          json_string: "chu\u1ED7i JSON",
          e164: "s\u1ED1 E.164",
          jwt: "JWT",
          template_literal: "\u0111\u1EA7u v\u00E0o",
        };
        closure_2 = { nan: "NaN", number: "s\u1ED1", array: "m\u1EA3ng" };
        obj.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp47 = closure_2[parsedTypeResult];
              if (tmp47 == null) {
                tmp47 = parsedTypeResult;
              }
              obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined =
                  "\u0110\u1EA7u v\u00E0o kh\u00F4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i instanceof " +
                  code.expected +
                  ", nh\u1EADn \u0111\u01B0\u1EE3c " +
                  tmp47;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined =
                  "\u0110\u1EA7u v\u00E0o kh\u00F4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i " +
                  expected +
                  ", nh\u1EADn \u0111\u01B0\u1EE3c " +
                  tmp47;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 =
                  "\u0110\u1EA7u v\u00E0o kh\u00F4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i " +
                  closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 =
                  "T\u00F9y ch\u1ECDn kh\u00F4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\u00E1c gi\u00E1 tr\u1ECB " +
                  closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str27 = "<";
              if (code.inclusive) {
                str27 = "<=";
              }
              let tmp25 = obj[code.origin];
              if (tmp25 == null) {
                tmp25 = null;
              }
              let str28 = code.origin;
              if (tmp25) {
                if (str28 == null) {
                  str28 = "gi\u00E1 tr\u1ECB";
                }
                const verb = tmp25.verb;
                let str = code.maximum.toString();
                let str34 = tmp25.unit;
                if (str34 == null) {
                  str34 = "ph\u1EA7n t\u1EED";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 =
                  "Qu\u00E1 l\u1EDBn: mong \u0111\u1EE3i " + str28 + " " + verb + " " + str27 + str + " " + str34;
              } else {
                let str29 = str28;
                if (str28 == null) {
                  str29 = "gi\u00E1 tr\u1ECB";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "Qu\u00E1 l\u1EDBn: mong \u0111\u1EE3i " + str29 + " " + str27 + code.maximum.toString();
              }
              return combined2;
            case "too_small":
              let str17 = ">";
              if (code.inclusive) {
                str17 = ">=";
              }
              let tmp15 = obj[code.origin];
              if (tmp15 == null) {
                tmp15 = null;
              }
              const origin = code.origin;
              if (tmp15) {
                const _HermesInternal11 = HermesInternal;
                let combined3 =
                  "Qu\u00E1 nh\u1ECF: mong \u0111\u1EE3i " +
                  origin +
                  " " +
                  tmp15.verb +
                  " " +
                  str17 +
                  code.minimum.toString() +
                  " " +
                  tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Qu\u00E1 nh\u1ECF: mong \u0111\u1EE3i " + origin + " " + str17 + code.minimum.toString();
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 =
                  'Chu\u1ED7i kh\u00F4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "' +
                  code.prefix +
                  '"';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 =
                  'Chu\u1ED7i kh\u00F4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\u00FAc b\u1EB1ng "' +
                  code.suffix +
                  '"';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = 'Chu\u1ED7i kh\u00F4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "' + code.includes + '"';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 =
                  "Chu\u1ED7i kh\u00F4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "" + format + " kh\u00F4ng h\u1EE3p l\u1EC7";
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "S\u1ED1 kh\u00F4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\u00E0 b\u1ED9i s\u1ED1 c\u1EE7a " + code.divisor;
            case "unrecognized_keys":
              const _HermesInternal3 = HermesInternal;
              return (
                "Kh\u00F3a kh\u00F4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: " + closure_2.joinValues(code.keys, ", ")
              );
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "Kh\u00F3a kh\u00F4ng h\u1EE3p l\u1EC7 trong " + code.origin;
            case "invalid_union":
              return "\u0110\u1EA7u v\u00E0o kh\u00F4ng h\u1EE3p l\u1EC7";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = "Gi\u00E1 tr\u1ECB kh\u00F4ng h\u1EE3p l\u1EC7 trong ";
              return "Gi\u00E1 tr\u1ECB kh\u00F4ng h\u1EE3p l\u1EC7 trong " + code.origin;
            default:
              return "\u0110\u1EA7u v\u00E0o kh\u00F4ng h\u1EE3p l\u1EC7";
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
