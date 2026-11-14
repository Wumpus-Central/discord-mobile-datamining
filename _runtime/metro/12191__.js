// _runtime/metro/12191__.js
import _mod12160 from "12160__.js";

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
        const obj2 = {
          string: { unit: "znakova", verb: "imati" },
          file: { unit: "bajtova", verb: "imati" },
          array: { unit: "stavki", verb: "imati" },
          set: { unit: "stavki", verb: "imati" },
        };
        closure_1 = {
          regex: "unos",
          email: "email adresa",
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
          datetime: "ISO datum i vrijeme",
          date: "ISO datum",
          time: "ISO vrijeme",
          duration: "ISO trajanje",
          ipv4: "IPv4 adresa",
          ipv6: "IPv6 adresa",
          mac: "MAC adresa",
          cidrv4: "IPv4 raspon",
          cidrv6: "IPv6 raspon",
          base64: "base64 kodirani tekst",
          base64url: "base64url kodirani tekst",
          json_string: "JSON tekst",
          e164: "E.164 broj",
          credit_card: "broj kreditne kartice",
          currency_code: "kod valute",
          iban: "IBAN",
          jwt: "JWT",
          template_literal: "unos",
        };
        closure_2 = {
          nan: "NaN",
          string: "tekst",
          number: "broj",
          boolean: "boolean",
          array: "niz",
          object: "objekt",
          set: "skup",
          file: "datoteka",
          date: "datum",
          bigint: "bigint",
          symbol: "simbol",
          undefined: "undefined",
          null: "null",
          function: "funkcija",
          map: "mapa",
        };
        obj.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp54 = closure_2[parsedTypeResult];
              if (tmp54 == null) {
                tmp54 = parsedTypeResult;
              }
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined =
                  "Neispravan unos: o\u010Dekuje se instanceof " + code.expected + ", a primljeno je " + tmp54;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Neispravan unos: o\u010Dekuje se " + expected + ", a primljeno je " + tmp54;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "Neispravna vrijednost: o\u010Dekivano " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Neispravna opcija: o\u010Dekivano jedno od " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str25 = "<";
              if (code.inclusive) {
                str25 = "<=";
              }
              let tmp32 = obj2[code.origin];
              if (tmp32 == null) {
                tmp32 = null;
              }
              let str26 = closure_2[code.origin];
              if (str26 == null) {
                str26 = code.origin;
              }
              if (tmp32) {
                if (str26 == null) {
                  str26 = "vrijednost";
                }
                const str1 = code.maximum.toString();
                let str32 = tmp32.unit;
                if (str32 == null) {
                  str32 = "elemenata";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "Preveliko: o\u010Dekivano da " + str26 + " ima " + str25 + str1 + " " + str32;
              } else {
                let str27 = str26;
                if (str26 == null) {
                  str27 = "vrijednost";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "Preveliko: o\u010Dekivano da " + str27 + " bude " + str25 + code.maximum.toString();
              }
              return combined2;
            case "too_small":
              let str18 = ">";
              if (code.inclusive) {
                str18 = ">=";
              }
              let tmp19 = obj2[code.origin];
              if (tmp19 == null) {
                tmp19 = null;
              }
              let origin3 = closure_2[code.origin];
              if (origin3 == null) {
                origin3 = code.origin;
              }
              const str46 = code.minimum.toString();
              if (tmp19) {
                const _HermesInternal11 = HermesInternal;
                let combined3 = "Premalo: o\u010Dekivano da " + origin3 + " ima " + str18 + str46 + " " + tmp19.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Premalo: o\u010Dekivano da " + origin3 + " bude " + str18 + str46;
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = 'Neispravan tekst: mora zapo\u010Dinjati s "' + code.prefix + '"';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = 'Neispravan tekst: mora zavr\u0161avati s "' + code.suffix + '"';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = 'Neispravan tekst: mora sadr\u017Eavati "' + code.includes + '"';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Neispravan tekst: mora odgovarati uzorku " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "Neispravna " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "Neispravan broj: mora biti vi\u0161ekratnik od " + code.divisor;
            case "unrecognized_keys":
              let str3 = " klju\u010D";
              if (code.keys.length > 1) {
                str3 = "i klju\u010Devi";
              }
              const _HermesInternal3 = HermesInternal;
              return "Neprepoznat" + str3 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              let origin2 = closure_2[code.origin];
              if (origin2 == null) {
                origin2 = code.origin;
              }
              const _HermesInternal2 = HermesInternal;
              return "Neispravan klju\u010D u " + origin2;
            case "invalid_union":
              return "Neispravan unos";
            case "invalid_element":
              let origin = closure_2[code.origin];
              if (origin == null) {
                origin = code.origin;
              }
              const _HermesInternal = HermesInternal;
              return "Neispravna vrijednost u " + origin;
            default:
              return "Neispravan unos";
          }
        };
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let closure_2 = fn(_mod12160);
    function error() {}
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
