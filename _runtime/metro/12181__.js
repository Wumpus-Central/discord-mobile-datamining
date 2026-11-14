// === Module 12181: ? ===

// Module 12181
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
        const obj2 = { string: { unit: "characters", verb: "to have" }, file: { unit: "bytes", verb: "to have" }, array: { unit: "items", verb: "to have" }, set: { unit: "items", verb: "to have" }, map: { unit: "entries", verb: "to have" } };
        closure_1 = { regex: "input", email: "email address", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datetime", date: "ISO date", time: "ISO time", duration: "ISO duration", ipv4: "IPv4 address", ipv6: "IPv6 address", mac: "MAC address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded string", base64url: "base64url-encoded string", json_string: "JSON string", e164: "E.164 number", currency_code: "currency code", credit_card: "credit card number", iban: "IBAN", jwt: "JWT", template_literal: "input" };
        closure_2 = { nan: "NaN" };
        obj.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              const expected = code.expected;
              if ("number" === expected) {
                if (typeof undefined === "number") {
                  const _Number = Number;
                  if (!Number.isFinite(undefined)) {
                    const _String = String;
                    let StringResult = String(undefined);
                  }
                  const parsedTypeResult = closure_2.parsedType(code.input);
                  const input = code.input;
                  if ("number" === parsedTypeResult) {
                    if (typeof input === "number") {
                      const _Number2 = Number;
                      if (!Number.isFinite(input)) {
                        const _String2 = String;
                        let StringResult1 = String(input);
                      }
                      const _HermesInternal17 = HermesInternal;
                      return "Invalid input: expected " + StringResult + ", received " + StringResult1;
                    }
                  }
                  let tmp53 = closure_2[parsedTypeResult];
                  if (tmp53 == null) {
                    tmp53 = parsedTypeResult;
                  }
                  StringResult1 = tmp53;
                }
              }
              let tmp47 = closure_2[expected];
              if (tmp47 == null) {
                tmp47 = expected;
              }
              StringResult = tmp47;
            break;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal16 = HermesInternal;
                let combined = "Invalid input: expected " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal15 = HermesInternal;
                combined = "Invalid option: expected one of " + closure_2.joinValues(code.values, "|");
              }
              return combined;
            case "too_big":
              let str28 = "exactly ";
              if (!code.exact) {
                let str29 = "<";
                if (code.inclusive) {
                  str29 = "<=";
                }
                str28 = str29;
              }
              let tmp28 = obj2[code.origin];
              if (tmp28 == null) {
                tmp28 = null;
              }
              let str30 = code.origin;
              if (tmp28) {
                if (str30 == null) {
                  str30 = "value";
                }
                const str1 = code.maximum.toString();
                let str36 = tmp28.unit;
                if (str36 == null) {
                  str36 = "elements";
                }
                const _HermesInternal14 = HermesInternal;
                let combined1 = "Too big: expected " + str30 + " to have " + str28 + str1 + " " + str36;
              } else {
                let str31 = str30;
                if (str30 == null) {
                  str31 = "value";
                }
                const _HermesInternal13 = HermesInternal;
                combined1 = "Too big: expected " + str31 + " to be " + str28 + code.maximum.toString();
              }
              return combined1;
            case "too_small":
              let str21 = "exactly ";
              if (!code.exact) {
                let str22 = ">";
                if (code.inclusive) {
                  str22 = ">=";
                }
                str21 = str22;
              }
              let tmp16 = obj2[code.origin];
              if (tmp16 == null) {
                tmp16 = null;
              }
              ({ origin, minimum } = code);
              const str49 = minimum.toString();
              if (tmp16) {
                const _HermesInternal12 = HermesInternal;
                let combined2 = "Too small: expected " + origin + " to have " + str21 + str49 + " " + tmp16.unit;
              } else {
                const _HermesInternal11 = HermesInternal;
                combined2 = "Too small: expected " + origin + " to be " + str21 + str49;
              }
              return combined2;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal10 = HermesInternal;
                let combined3 = "Invalid string: must start with \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined3 = "Invalid string: must end with \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined3 = "Invalid string: must include \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined3 = "Invalid string: must match pattern " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal6 = HermesInternal;
                combined3 = "Invalid " + format;
              }
              return combined3;
            case "not_multiple_of":
              const _HermesInternal5 = HermesInternal;
              return "Invalid number: must be a multiple of " + code.divisor;
            case "unrecognized_keys":
              let str6 = "";
              if (code.keys.length > 1) {
                str6 = "s";
              }
              const _HermesInternal4 = HermesInternal;
              return "Unrecognized key" + str6 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal3 = HermesInternal;
              return "Invalid key in " + code.origin;
            case "invalid_union":
              if (code.options) {
                const _Array = Array;
                if (Array.isArray(code.options)) {
                  if (code.options.length > 0) {
                    const options = code.options;
                    const mapped = options.map((item) => "'" + item + "'");
                    const _HermesInternal2 = HermesInternal;
                    let str2 = "Invalid discriminator value. Expected " + mapped.join(" | ");
                  }
                  return str2;
                }
              }
              str2 = "Invalid input";
              if (false === code.inclusive) {
                str2 = "Invalid input: more than one option matched";
              }
            break;
            case "invalid_element":
              const _HermesInternal = HermesInternal;
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