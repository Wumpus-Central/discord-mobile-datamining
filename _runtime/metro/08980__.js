// _runtime/metro/08980__.js
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
          string: { unit: "caracteres", verb: "ter" },
          file: { unit: "bytes", verb: "ter" },
          array: { unit: "itens", verb: "ter" },
          set: { unit: "itens", verb: "ter" },
        };
        closure_1 = {
          regex: "padr\u00E3o",
          email: "endere\u00E7o de e-mail",
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
          datetime: "data e hora ISO",
          date: "data ISO",
          time: "hora ISO",
          duration: "dura\u00E7\u00E3o ISO",
          ipv4: "endere\u00E7o IPv4",
          ipv6: "endere\u00E7o IPv6",
          cidrv4: "faixa de IPv4",
          cidrv6: "faixa de IPv6",
          base64: "texto codificado em base64",
          base64url: "URL codificada em base64",
          json_string: "texto JSON",
          e164: "n\u00FAmero E.164",
          jwt: "JWT",
          template_literal: "entrada",
        };
        closure_2 = { nan: "NaN", number: "n\u00FAmero", null: "nulo" };
        obj.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp50 = closure_2[parsedTypeResult];
              if (tmp50 == null) {
                tmp50 = parsedTypeResult;
              }
              obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined = "Tipo inv\u00E1lido: esperado instanceof " + code.expected + ", recebido " + tmp50;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Tipo inv\u00E1lido: esperado " + expected + ", recebido " + tmp50;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "Entrada inv\u00E1lida: esperado " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Op\u00E7\u00E3o inv\u00E1lida: esperada uma das " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str28 = "<";
              if (code.inclusive) {
                str28 = "<=";
              }
              let tmp29 = obj[code.origin];
              if (tmp29 == null) {
                tmp29 = null;
              }
              let str29 = code.origin;
              if (tmp29) {
                if (str29 == null) {
                  str29 = "valor";
                }
                let str = code.maximum.toString();
                let str35 = tmp29.unit;
                if (str35 == null) {
                  str35 = "elementos";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "Muito grande: esperado que " + str29 + " tivesse " + str28 + str + " " + str35;
              } else {
                let str30 = str29;
                if (str29 == null) {
                  str30 = "valor";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "Muito grande: esperado que " + str30 + " fosse " + str28 + code.maximum.toString();
              }
              return combined2;
            case "too_small":
              let str22 = ">";
              if (code.inclusive) {
                str22 = ">=";
              }
              let tmp17 = obj[code.origin];
              if (tmp17 == null) {
                tmp17 = null;
              }
              ({ origin, minimum } = code);
              const str1 = minimum.toString();
              if (tmp17) {
                const _HermesInternal11 = HermesInternal;
                let combined3 = "Muito pequeno: esperado que " + origin + " tivesse " + str22 + str1 + " " + tmp17.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Muito pequeno: esperado que " + origin + " fosse " + str22 + str1;
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = 'Texto inv\u00E1lido: deve come\u00E7ar com "' + code.prefix + '"';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = 'Texto inv\u00E1lido: deve terminar com "' + code.suffix + '"';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = 'Texto inv\u00E1lido: deve incluir "' + code.includes + '"';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Texto inv\u00E1lido: deve corresponder ao padr\u00E3o " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "" + format + " inv\u00E1lido";
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "N\u00FAmero inv\u00E1lido: deve ser m\u00FAltiplo de " + code.divisor;
            case "unrecognized_keys":
              let str4 = "";
              let str5 = "";
              if (code.keys.length > 1) {
                str5 = "s";
              }
              if (code.keys.length > 1) {
                str4 = "s";
              }
              const _HermesInternal3 = HermesInternal;
              return "Chave" + str5 + " desconhecida" + str4 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              const _HermesInternal2 = HermesInternal;
              return "Chave inv\u00E1lida em " + code.origin;
            case "invalid_union":
              return "Entrada inv\u00E1lida";
            case "invalid_element":
              const _HermesInternal = HermesInternal;
              str = "Valor inv\u00E1lido em ";
              return "Valor inv\u00E1lido em " + code.origin;
            default:
              return "Campo inv\u00E1lido";
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
