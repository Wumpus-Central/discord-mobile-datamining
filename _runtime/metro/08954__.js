// _runtime/metro/08954__.js
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
          string: { unit: "characters", verb: "to have" },
          file: { unit: "bytes", verb: "to have" },
          array: { unit: "items", verb: "to have" },
          set: { unit: "items", verb: "to have" },
          map: { unit: "entries", verb: "to have" },
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
          mac: "MAC address",
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
              const _HermesInternal16 = HermesInternal;
              return "Invalid input: expected " + expected + ", received " + tmp48;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined = "Invalid input: expected " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined = "Invalid option: expected one of " + closure_2.joinValues(code.values, "|");
              }
              return combined;
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
                  str25 = "value";
                }
                let str = code.maximum.toString();
                let str31 = tmp27.unit;
                if (str31 == null) {
                  str31 = "elements";
                }
                const _HermesInternal13 = HermesInternal;
                let combined1 = "Too big: expected " + str25 + " to have " + str24 + str + " " + str31;
              } else {
                let str26 = str25;
                if (str25 == null) {
                  str26 = "value";
                }
                const _HermesInternal12 = HermesInternal;
                combined1 = "Too big: expected " + str26 + " to be " + str24 + code.maximum.toString();
              }
              return combined1;
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
                let combined2 = "Too small: expected " + origin + " to have " + str18 + str1 + " " + tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined2 = "Too small: expected " + origin + " to be " + str18 + str1;
              }
              return combined2;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined3 = 'Invalid string: must start with "' + code.prefix + '"';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined3 = 'Invalid string: must end with "' + code.suffix + '"';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined3 = 'Invalid string: must include "' + code.includes + '"';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined3 = "Invalid string: must match pattern " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined3 = "Invalid " + format;
              }
              return combined3;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "Invalid number: must be a multiple of " + code.divisor;
            case "unrecognized_keys":
              let str3 = "";
              if (code.keys.length > 1) {
                str3 = "s";
              }
              const _HermesInternal3 = HermesInternal;
              return "Unrecognized key" + str3 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "Invalid key in " + code.origin;
            case "invalid_union":
              return "Invalid input";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = "Invalid value in ";
              return "Invalid value in " + code.origin;
            default:
              return "Invalid input";
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
