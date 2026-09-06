// _runtime/metro/08964__.js
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
          string: { unit: "karakter", verb: "memiliki" },
          file: { unit: "byte", verb: "memiliki" },
          array: { unit: "item", verb: "memiliki" },
          set: { unit: "item", verb: "memiliki" },
        };
        closure_1 = {
          regex: "input",
          email: "alamat email",
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
          datetime: "tanggal dan waktu format ISO",
          date: "tanggal format ISO",
          time: "jam format ISO",
          duration: "durasi format ISO",
          ipv4: "alamat IPv4",
          ipv6: "alamat IPv6",
          cidrv4: "rentang alamat IPv4",
          cidrv6: "rentang alamat IPv6",
          base64: "string dengan enkode base64",
          base64url: "string dengan enkode base64url",
          json_string: "string JSON",
          e164: "angka E.164",
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
                let combined = "Input tidak valid: diharapkan instanceof " + code.expected + ", diterima " + tmp48;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Input tidak valid: diharapkan " + expected + ", diterima " + tmp48;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "Input tidak valid: diharapkan " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Pilihan tidak valid: diharapkan salah satu dari " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str25 = "<";
              if (code.inclusive) {
                str25 = "<=";
              }
              let tmp27 = obj[code.origin];
              if (tmp27 == null) {
                tmp27 = null;
              }
              let str26 = code.origin;
              if (tmp27) {
                if (str26 == null) {
                  str26 = "value";
                }
                let str = code.maximum.toString();
                let str32 = tmp27.unit;
                if (str32 == null) {
                  str32 = "elemen";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "Terlalu besar: diharapkan " + str26 + " memiliki " + str25 + str + " " + str32;
              } else {
                let str27 = str26;
                if (str26 == null) {
                  str27 = "value";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "Terlalu besar: diharapkan " + str27 + " menjadi " + str25 + code.maximum.toString();
              }
              return combined2;
            case "too_small":
              let str19 = ">";
              if (code.inclusive) {
                str19 = ">=";
              }
              let tmp15 = obj[code.origin];
              if (tmp15 == null) {
                tmp15 = null;
              }
              ({ origin, minimum } = code);
              const str1 = minimum.toString();
              if (tmp15) {
                const _HermesInternal11 = HermesInternal;
                let combined3 = "Terlalu kecil: diharapkan " + origin + " memiliki " + str19 + str1 + " " + tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Terlalu kecil: diharapkan " + origin + " menjadi " + str19 + str1;
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = 'String tidak valid: harus dimulai dengan "' + code.prefix + '"';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = 'String tidak valid: harus berakhir dengan "' + code.suffix + '"';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = 'String tidak valid: harus menyertakan "' + code.includes + '"';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "String tidak valid: harus sesuai pola " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "" + format + " tidak valid";
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "Angka tidak valid: harus kelipatan dari " + code.divisor;
            case "unrecognized_keys":
              let str3 = "";
              if (code.keys.length > 1) {
                str3 = "s";
              }
              const _HermesInternal3 = HermesInternal;
              return "Kunci tidak dikenali " + str3 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "Kunci tidak valid di " + code.origin;
            case "invalid_union":
              return "Input tidak valid";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = "Nilai tidak valid di ";
              return "Nilai tidak valid di " + code.origin;
            default:
              return "Input tidak valid";
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
