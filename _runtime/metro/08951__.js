// _runtime/metro/08951__.js
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
          string: { unit: "znak\u016F", verb: "m\u00EDt" },
          file: { unit: "bajt\u016F", verb: "m\u00EDt" },
          array: { unit: "prvk\u016F", verb: "m\u00EDt" },
          set: { unit: "prvk\u016F", verb: "m\u00EDt" },
        };
        closure_1 = {
          regex: "regul\u00E1rn\u00ED v\u00FDraz",
          email: "e-mailov\u00E1 adresa",
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
          datetime: "datum a \u010Das ve form\u00E1tu ISO",
          date: "datum ve form\u00E1tu ISO",
          time: "\u010Das ve form\u00E1tu ISO",
          duration: "doba trv\u00E1n\u00ED ISO",
          ipv4: "IPv4 adresa",
          ipv6: "IPv6 adresa",
          cidrv4: "rozsah IPv4",
          cidrv6: "rozsah IPv6",
          base64: "\u0159et\u011Bzec zak\u00F3dovan\u00FD ve form\u00E1tu base64",
          base64url: "\u0159et\u011Bzec zak\u00F3dovan\u00FD ve form\u00E1tu base64url",
          json_string: "\u0159et\u011Bzec ve form\u00E1tu JSON",
          e164: "\u010D\u00EDslo E.164",
          jwt: "JWT",
          template_literal: "vstup",
        };
        closure_2 = {
          nan: "NaN",
          number: "\u010D\u00EDslo",
          string: "\u0159et\u011Bzec",
          function: "funkce",
          array: "pole",
        };
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
                  "Neplatn\u00FD vstup: o\u010Dek\u00E1v\u00E1no instanceof " +
                  code.expected +
                  ", obdr\u017Eeno " +
                  tmp49;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Neplatn\u00FD vstup: o\u010Dek\u00E1v\u00E1no " + expected + ", obdr\u017Eeno " + tmp49;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 =
                  "Neplatn\u00FD vstup: o\u010Dek\u00E1v\u00E1no " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 =
                  "Neplatn\u00E1 mo\u017Enost: o\u010Dek\u00E1v\u00E1na jedna z hodnot " +
                  closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str27 = "<";
              if (code.inclusive) {
                str27 = "<=";
              }
              let tmp28 = obj[code.origin];
              if (tmp28 == null) {
                tmp28 = null;
              }
              let str28 = code.origin;
              if (tmp28) {
                if (str28 == null) {
                  str28 = "hodnota";
                }
                let str = code.maximum.toString();
                let str34 = tmp28.unit;
                if (str34 == null) {
                  str34 = "prvk\u016F";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 =
                  "Hodnota je p\u0159\u00EDli\u0161 velk\u00E1: " +
                  str28 +
                  " mus\u00ED m\u00EDt " +
                  str27 +
                  str +
                  " " +
                  str34;
              } else {
                let str29 = str28;
                if (str28 == null) {
                  str29 = "hodnota";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 =
                  "Hodnota je p\u0159\u00EDli\u0161 velk\u00E1: " +
                  str29 +
                  " mus\u00ED b\u00FDt " +
                  str27 +
                  code.maximum.toString();
              }
              return combined2;
            case "too_small":
              let str16 = ">";
              if (code.inclusive) {
                str16 = ">=";
              }
              let tmp15 = obj[code.origin];
              if (tmp15 == null) {
                tmp15 = null;
              }
              let str17 = code.origin;
              if (tmp15) {
                if (str17 == null) {
                  str17 = "hodnota";
                }
                const str1 = code.minimum.toString();
                let str23 = tmp15.unit;
                if (str23 == null) {
                  str23 = "prvk\u016F";
                }
                const _HermesInternal11 = HermesInternal;
                let combined3 =
                  "Hodnota je p\u0159\u00EDli\u0161 mal\u00E1: " +
                  str17 +
                  " mus\u00ED m\u00EDt " +
                  str16 +
                  str1 +
                  " " +
                  str23;
              } else {
                let str18 = str17;
                if (str17 == null) {
                  str18 = "hodnota";
                }
                const _HermesInternal10 = HermesInternal;
                combined3 =
                  "Hodnota je p\u0159\u00EDli\u0161 mal\u00E1: " +
                  str18 +
                  " mus\u00ED b\u00FDt " +
                  str16 +
                  code.minimum.toString();
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = 'Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED za\u010D\u00EDnat na "' + code.prefix + '"';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = 'Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED kon\u010Dit na "' + code.suffix + '"';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = 'Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED obsahovat "' + code.includes + '"';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED odpov\u00EDdat vzoru " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "Neplatn\u00FD form\u00E1t " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "Neplatn\u00E9 \u010D\u00EDslo: mus\u00ED b\u00FDt n\u00E1sobkem " + code.divisor;
            case "unrecognized_keys":
              const _HermesInternal3 = HermesInternal;
              return "Nezn\u00E1m\u00E9 kl\u00ED\u010De: " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "Neplatn\u00FD kl\u00ED\u010D v " + code.origin;
            case "invalid_union":
              return "Neplatn\u00FD vstup";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = "Neplatn\u00E1 hodnota v ";
              return "Neplatn\u00E1 hodnota v " + code.origin;
            default:
              return "Neplatn\u00FD vstup";
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
