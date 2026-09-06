// === Module 8974: ? ===

// Module 8974
import _mod8939 from "module_8939" /* 8939 */;

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
        obj = { string: { unit: "aksara", verb: "mempunyai" }, file: { unit: "bait", verb: "mempunyai" }, array: { unit: "elemen", verb: "mempunyai" }, set: { unit: "elemen", verb: "mempunyai" } };
        closure_1 = { regex: "input", email: "alamat e-mel", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "tarikh masa ISO", date: "tarikh ISO", time: "masa ISO", duration: "tempoh ISO", ipv4: "alamat IPv4", ipv6: "alamat IPv6", cidrv4: "julat IPv4", cidrv6: "julat IPv6", base64: "string dikodkan base64", base64url: "string dikodkan base64url", json_string: "string JSON", e164: "nombor E.164", jwt: "JWT", template_literal: "input" };
        closure_2 = { nan: "NaN", number: "nombor" };
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
                let combined = "Input tidak sah: dijangka instanceof " + code.expected + ", diterima " + tmp47;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Input tidak sah: dijangka " + expected + ", diterima " + tmp47;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "Input tidak sah: dijangka " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Pilihan tidak sah: dijangka salah satu daripada " + closure_2.joinValues(code.values, "|");
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
                  str28 = "nilai";
                }
                const verb = tmp25.verb;
                let str = code.maximum.toString();
                let str34 = tmp25.unit;
                if (str34 == null) {
                  str34 = "elemen";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "Terlalu besar: dijangka " + str28 + " " + verb + " " + str27 + str + " " + str34;
              } else {
                let str29 = str28;
                if (str28 == null) {
                  str29 = "nilai";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "Terlalu besar: dijangka " + str29 + " adalah " + str27 + code.maximum.toString();
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
                let combined3 = "Terlalu kecil: dijangka " + origin + " " + tmp15.verb + " " + str17 + code.minimum.toString() + " " + tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Terlalu kecil: dijangka " + origin + " adalah " + str17 + code.minimum.toString();
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = "String tidak sah: mesti bermula dengan \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = "String tidak sah: mesti berakhir dengan \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "String tidak sah: mesti mengandungi \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "String tidak sah: mesti sepadan dengan corak " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "" + format + " tidak sah";
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "Nombor tidak sah: perlu gandaan " + code.divisor;
            case "unrecognized_keys":
              const _HermesInternal3 = HermesInternal;
              return "Kunci tidak dikenali: " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "Kunci tidak sah dalam " + code.origin;
            case "invalid_union":
              return "Input tidak sah";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = "Nilai tidak sah dalam ";
              return "Nilai tidak sah dalam " + code.origin;
            default:
              return "Input tidak sah";
          }
        };
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let closure_2 = fn(_mod8939);
    function error() {

    }
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}