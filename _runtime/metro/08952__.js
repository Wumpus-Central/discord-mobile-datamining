// _runtime/metro/08952__.js
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
          string: { unit: "tegn", verb: "havde" },
          file: { unit: "bytes", verb: "havde" },
          array: { unit: "elementer", verb: "indeholdt" },
          set: { unit: "elementer", verb: "indeholdt" },
        };
        closure_1 = {
          regex: "input",
          email: "e-mailadresse",
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
          datetime: "ISO dato- og klokkesl\u00E6t",
          date: "ISO-dato",
          time: "ISO-klokkesl\u00E6t",
          duration: "ISO-varighed",
          ipv4: "IPv4-omr\u00E5de",
          ipv6: "IPv6-omr\u00E5de",
          cidrv4: "IPv4-spektrum",
          cidrv6: "IPv6-spektrum",
          base64: "base64-kodet streng",
          base64url: "base64url-kodet streng",
          json_string: "JSON-streng",
          e164: "E.164-nummer",
          jwt: "JWT",
          template_literal: "input",
        };
        closure_2 = {
          nan: "NaN",
          string: "streng",
          number: "tal",
          boolean: "boolean",
          array: "liste",
          object: "objekt",
          set: "s\u00E6t",
          file: "fil",
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
                let combined = "Ugyldigt input: forventede instanceof " + code.expected + ", fik " + tmp49;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Ugyldigt input: forventede " + expected + ", fik " + tmp49;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "Ugyldig v\u00E6rdi: forventede " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Ugyldigt valg: forventede en af f\u00F8lgende " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str31 = "<";
              if (code.inclusive) {
                str31 = "<=";
              }
              let tmp26 = obj[code.origin];
              if (tmp26 == null) {
                tmp26 = null;
              }
              let str32 = closure_2[code.origin];
              if (str32 == null) {
                str32 = code.origin;
              }
              if (tmp26) {
                if (str32 == null) {
                  str32 = "value";
                }
                const verb = tmp26.verb;
                let str = code.maximum.toString();
                let str39 = tmp26.unit;
                if (str39 == null) {
                  str39 = "elementer";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "For stor: forventede " + str32 + " " + verb + " " + str31 + " " + str + " " + str39;
              } else {
                let str33 = str32;
                if (str32 == null) {
                  str33 = "value";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "For stor: forventede " + str33 + " havde " + str31 + " " + code.maximum.toString();
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
              let origin = closure_2[code.origin];
              if (origin == null) {
                origin = code.origin;
              }
              if (tmp15) {
                const _HermesInternal11 = HermesInternal;
                let combined3 =
                  "For lille: forventede " +
                  origin +
                  " " +
                  tmp15.verb +
                  " " +
                  str19 +
                  " " +
                  code.minimum.toString() +
                  " " +
                  tmp15.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "For lille: forventede " + origin + " havde " + str19 + " " + code.minimum.toString();
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = 'Ugyldig streng: skal starte med "' + code.prefix + '"';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = 'Ugyldig streng: skal ende med "' + code.suffix + '"';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = 'Ugyldig streng: skal indeholde "' + code.includes + '"';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Ugyldig streng: skal matche m\u00F8nsteret " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "Ugyldig " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "Ugyldigt tal: skal v\u00E6re deleligt med " + code.divisor;
            case "unrecognized_keys":
              let str4 = "Ukendt n\u00F8gle";
              if (code.keys.length > 1) {
                str4 = "Ukendte n\u00F8gler";
              }
              const _HermesInternal3 = HermesInternal;
              return "" + str4 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "Ugyldig n\u00F8gle i " + code.origin;
            case "invalid_union":
              return "Ugyldigt input: matcher ingen af de tilladte typer";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = "Ugyldig v\u00E6rdi i ";
              return "Ugyldig v\u00E6rdi i " + code.origin;
            default:
              return "Ugyldigt input";
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
