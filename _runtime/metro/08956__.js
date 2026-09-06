// _runtime/metro/08956__.js
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
          string: { unit: "caracteres", verb: "tener" },
          file: { unit: "bytes", verb: "tener" },
          array: { unit: "elementos", verb: "tener" },
          set: { unit: "elementos", verb: "tener" },
        };
        closure_1 = {
          regex: "entrada",
          email: "direcci\u00F3n de correo electr\u00F3nico",
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
          datetime: "fecha y hora ISO",
          date: "fecha ISO",
          time: "hora ISO",
          duration: "duraci\u00F3n ISO",
          ipv4: "direcci\u00F3n IPv4",
          ipv6: "direcci\u00F3n IPv6",
          cidrv4: "rango IPv4",
          cidrv6: "rango IPv6",
          base64: "cadena codificada en base64",
          base64url: "URL codificada en base64",
          json_string: "cadena JSON",
          e164: "n\u00FAmero E.164",
          jwt: "JWT",
          template_literal: "entrada",
        };
        closure_2 = {
          nan: "NaN",
          string: "texto",
          number: "n\u00FAmero",
          boolean: "booleano",
          array: "arreglo",
          object: "objeto",
          set: "conjunto",
          file: "archivo",
          date: "fecha",
          bigint: "n\u00FAmero grande",
          symbol: "s\u00EDmbolo",
          undefined: "indefinido",
          null: "nulo",
          function: "funci\u00F3n",
          map: "mapa",
          record: "registro",
          tuple: "tupla",
          enum: "enumeraci\u00F3n",
          union: "uni\u00F3n",
          literal: "literal",
          promise: "promesa",
          void: "vac\u00EDo",
          never: "nunca",
          unknown: "desconocido",
          any: "cualquiera",
        };
        obj.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp56 = closure_2[parsedTypeResult];
              if (tmp56 == null) {
                tmp56 = parsedTypeResult;
              }
              obj = /^[A-Z]/;
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined = "Entrada inv\u00E1lida: se esperaba instanceof " + code.expected + ", recibido " + tmp56;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Entrada inv\u00E1lida: se esperaba " + expected + ", recibido " + tmp56;
              }
              return combined;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "Entrada inv\u00E1lida: se esperaba " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                combined1 = "Opci\u00F3n inv\u00E1lida: se esperaba una de " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str27 = "<";
              if (code.inclusive) {
                str27 = "<=";
              }
              let tmp34 = obj[code.origin];
              if (tmp34 == null) {
                tmp34 = null;
              }
              let str28 = closure_2[code.origin];
              if (str28 == null) {
                str28 = code.origin;
              }
              if (tmp34) {
                if (str28 == null) {
                  str28 = "valor";
                }
                let str = code.maximum.toString();
                let str34 = tmp34.unit;
                if (str34 == null) {
                  str34 = "elementos";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "Demasiado grande: se esperaba que " + str28 + " tuviera " + str27 + str + " " + str34;
              } else {
                let str29 = str28;
                if (str28 == null) {
                  str29 = "valor";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "Demasiado grande: se esperaba que " + str29 + " fuera " + str27 + code.maximum.toString();
              }
              return combined2;
            case "too_small":
              let str20 = ">";
              if (code.inclusive) {
                str20 = ">=";
              }
              let tmp21 = obj[code.origin];
              if (tmp21 == null) {
                tmp21 = null;
              }
              let origin3 = closure_2[code.origin];
              if (origin3 == null) {
                origin3 = code.origin;
              }
              const str1 = code.minimum.toString();
              if (tmp21) {
                const _HermesInternal11 = HermesInternal;
                let combined3 =
                  "Demasiado peque\u00F1o: se esperaba que " + origin3 + " tuviera " + str20 + str1 + " " + tmp21.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined3 = "Demasiado peque\u00F1o: se esperaba que " + origin3 + " fuera " + str20 + str1;
              }
              return combined3;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined4 = 'Cadena inv\u00E1lida: debe comenzar con "' + code.prefix + '"';
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined4 = 'Cadena inv\u00E1lida: debe terminar en "' + code.suffix + '"';
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = 'Cadena inv\u00E1lida: debe incluir "' + code.includes + '"';
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Cadena inv\u00E1lida: debe coincidir con el patr\u00F3n " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined4 = "Inv\u00E1lido " + format;
              }
              return combined4;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "N\u00FAmero inv\u00E1lido: debe ser m\u00FAltiplo de " + code.divisor;
            case "unrecognized_keys":
              let str3 = "";
              let str4 = "";
              if (code.keys.length > 1) {
                str4 = "s";
              }
              if (code.keys.length > 1) {
                str3 = "s";
              }
              const _HermesInternal3 = HermesInternal;
              return "Llave" + str4 + " desconocida" + str3 + ": " + closure_2.joinValues(code.keys, ", ");
            case "invalid_key":
              let origin2 = closure_2[code.origin];
              if (origin2 == null) {
                origin2 = code.origin;
              }
              const _HermesInternal2 = HermesInternal;
              return "Llave inv\u00E1lida en " + origin2;
            case "invalid_union":
              return "Entrada inv\u00E1lida";
            case "invalid_element":
              let origin = closure_2[code.origin];
              if (origin == null) {
                origin = code.origin;
              }
              const _HermesInternal = HermesInternal;
              str = "Valor inv\u00E1lido en ";
              return "Valor inv\u00E1lido en " + origin;
            default:
              return "Entrada inv\u00E1lida";
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
