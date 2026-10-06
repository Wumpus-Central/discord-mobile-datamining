// _runtime/08683_default_1.js
import captureStackTrace2 from "08642_captureStackTrace.js";

let hasOwnProperty;

const self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let _Object = Object;
  tmp = Object.create
    ? (arg0, __esModule, arg2, arg3) => {
        function get() {
          return __esModule[closure_1];
        }
        closure_0 = __esModule;
        closure_1 = arg2;
        let tmp = arg3;
        if (undefined === arg3) {
          tmp = arg2;
        }
        let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
        let tmp3 = ownPropertyDescriptor;
        if (tmp3) {
          let tmp4;
          if ("get" in ownPropertyDescriptor) {
            tmp4 = !__esModule.__esModule;
          } else {
            tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
          }
          tmp3 = !tmp4;
        }
        if (!tmp3) {
          ownPropertyDescriptor = { enumerable: true, get };
          const obj = { enumerable: true, get };
        }
        Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
      }
    : (arg0, arg1, arg2, arg3) => {
        let tmp = arg3;
        if (undefined === arg3) {
          tmp = arg2;
        }
        arg0[tmp] = arg1[arg2];
      };
}
let closure_0 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create
    ? (arg0, value) => {
        const obj = { enumerable: true, value };
        Object.defineProperty(arg0, "default", obj);
      }
    : (arg0, arg1) => {
        arg0.default = arg1;
      };
}
let closure_1 = tmp3;
const tmp5 =
  (self && self.__importStar) ||
  ((__esModule) => {
    const tmp = __esModule;
    if (tmp) {
      if (__esModule.__esModule) {
        return __esModule;
      }
    }
    const obj = {};
    if (null != __esModule) {
      for (const key10009 in __esModule) {
        let callResult = "default" !== key10009;
        if (callResult) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          callResult = hasOwnProperty.call(__esModule, key10009);
        }
        if (!callResult) {
          continue;
        } else {
          let tmp6 = closure_0(obj, __esModule, key10009);
          continue;
        }
        continue;
      }
    }
    closure_1(obj, __esModule);
    return obj;
  });
const captureStackTrace = tmp5(captureStackTrace2);
function error() {}

export default function default_1() {
  if (typeof error === "function") {
    let obj = {
      localeError: (code) => {
        switch (code.code) {
          case "invalid_type": {
            let combined;
            const expected = closure_2[code.expected] ?? code.expected;
            const parsedTypeResult = captureStackTrace.parsedType(code.input);
            const obj = /^[A-Z]/;
            if (obj.test(code.expected)) {
              const _HermesInternal17 = HermesInternal;
              combined = "Tipo inv\u00E1lido: esperado instanceof " + code.expected + ", recebido " + tmp50;
            } else {
              const _HermesInternal16 = HermesInternal;
              combined = "Tipo inv\u00E1lido: esperado " + expected + ", recebido " + tmp50;
            }
            return combined;
          }
          case "invalid_value": {
            let combined1;
            if (1 === code.values.length) {
              const _HermesInternal15 = HermesInternal;
              combined1 = "Entrada inv\u00E1lida: esperado " + captureStackTrace.stringifyPrimitive(code.values[0]);
            } else {
              const _HermesInternal14 = HermesInternal;
              combined1 =
                "Op\u00E7\u00E3o inv\u00E1lida: esperada uma das " + captureStackTrace.joinValues(code.values, "|");
            }
            return combined1;
          }
          case "too_big": {
            let combined2;
            let str28 = "<";
            if (code.inclusive) {
              str28 = "<=";
            }
            let str29 = code.origin;
            if (obj2[code.origin] ?? null) {
              if (str29 == null) {
                str29 = "valor";
              }
              const str34 = code.maximum;
              const _HermesInternal13 = HermesInternal;
              const str1 = str34.toString();
              const str35 = (obj2[code.origin] ?? null).unit ?? "elementos";
              combined2 = "Muito grande: esperado que " + str29 + " tivesse " + str28 + str1 + " " + str35;
            } else {
              let str30 = str29;
              if (str29 == null) {
                str30 = "valor";
              }
              const _HermesInternal12 = HermesInternal;
              const str31 = code.maximum;
              combined2 = "Muito grande: esperado que " + str30 + " fosse " + str28 + str31.toString();
            }
            return combined2;
          }
          case "too_small": {
            let combined3;
            let minimum;
            let origin;
            let str22 = ">";
            if (code.inclusive) {
              str22 = ">=";
            }
            ({ origin, minimum } = code);
            const str49 = minimum.toString();
            if (obj2[code.origin] ?? null) {
              const _HermesInternal11 = HermesInternal;
              combined3 = "Muito pequeno: esperado que " + origin + " tivesse " + str22 + str49 + " " + tmp17.unit;
            } else {
              const _HermesInternal10 = HermesInternal;
              combined3 = "Muito pequeno: esperado que " + origin + " fosse " + str22 + str49;
            }
            return combined3;
          }
          case "invalid_format": {
            let combined4;
            if ("starts_with" === code.format) {
              const _HermesInternal9 = HermesInternal;
              combined4 = 'Texto inv\u00E1lido: deve come\u00E7ar com "' + code.prefix + '"';
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
              const format = closure_1[code.format] ?? code.format;
              const _HermesInternal5 = HermesInternal;
              combined4 = "" + format + " inv\u00E1lido";
            }
            return combined4;
          }
          case "not_multiple_of": {
            const _HermesInternal4 = HermesInternal;
            return "N\u00FAmero inv\u00E1lido: deve ser m\u00FAltiplo de " + code.divisor;
          }
          case "unrecognized_keys": {
            let str4 = "";
            let str5 = "";
            if (code.keys.length > 1) {
              str5 = "s";
            }
            if (code.keys.length > 1) {
              str4 = "s";
            }
            const _HermesInternal3 = HermesInternal;
            return "Chave" + str5 + " desconhecida" + str4 + ": " + captureStackTrace.joinValues(code.keys, ", ");
          }
          case "invalid_key": {
            const _HermesInternal2 = HermesInternal;
            return "Chave inv\u00E1lida em " + code.origin;
          }
          case "invalid_union": {
            return "Entrada inv\u00E1lida";
          }
          case "invalid_element": {
            const _HermesInternal = HermesInternal;
            return "Valor inv\u00E1lido em " + code.origin;
          }
          default: {
            return "Campo inv\u00E1lido";
          }
        }
      },
    };
    const obj2 = {
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
    let closure_2 = { nan: "NaN", number: "n\u00FAmero", null: "nulo" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
