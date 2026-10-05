// _runtime/08624_default_1.js
import captureStackTrace2 from "08607_captureStackTrace.js";

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
              combined = "Entrada inv\u00E1lida: se esperaba instanceof " + code.expected + ", recibido " + tmp56;
            } else {
              const _HermesInternal16 = HermesInternal;
              combined = "Entrada inv\u00E1lida: se esperaba " + expected + ", recibido " + tmp56;
            }
            return combined;
          }
          case "invalid_value": {
            let combined1;
            if (1 === code.values.length) {
              const _HermesInternal15 = HermesInternal;
              combined1 = "Entrada inv\u00E1lida: se esperaba " + captureStackTrace.stringifyPrimitive(code.values[0]);
            } else {
              const _HermesInternal14 = HermesInternal;
              combined1 =
                "Opci\u00F3n inv\u00E1lida: se esperaba una de " + captureStackTrace.joinValues(code.values, "|");
            }
            return combined1;
          }
          case "too_big": {
            let combined2;
            let str27 = "<";
            if (code.inclusive) {
              str27 = "<=";
            }
            let str28 = closure_2[code.origin] ?? code.origin;
            if (obj2[code.origin] ?? null) {
              if (str28 == null) {
                str28 = "valor";
              }
              const str33 = code.maximum;
              const _HermesInternal13 = HermesInternal;
              const str1 = str33.toString();
              const str34 = (obj2[code.origin] ?? null).unit ?? "elementos";
              combined2 = "Demasiado grande: se esperaba que " + str28 + " tuviera " + str27 + str1 + " " + str34;
            } else {
              let str29 = str28;
              if (str28 == null) {
                str29 = "valor";
              }
              const _HermesInternal12 = HermesInternal;
              const str30 = code.maximum;
              combined2 = "Demasiado grande: se esperaba que " + str29 + " fuera " + str27 + str30.toString();
            }
            return combined2;
          }
          case "too_small": {
            let combined3;
            let str20 = ">";
            if (code.inclusive) {
              str20 = ">=";
            }
            const origin3 = closure_2[code.origin] ?? code.origin;
            const str21 = code.minimum;
            const str48 = str21.toString();
            if (obj2[code.origin] ?? null) {
              const _HermesInternal11 = HermesInternal;
              combined3 =
                "Demasiado peque\u00F1o: se esperaba que " + origin3 + " tuviera " + str20 + str48 + " " + tmp21.unit;
            } else {
              const _HermesInternal10 = HermesInternal;
              combined3 = "Demasiado peque\u00F1o: se esperaba que " + origin3 + " fuera " + str20 + str48;
            }
            return combined3;
          }
          case "invalid_format": {
            let combined4;
            if ("starts_with" === code.format) {
              const _HermesInternal9 = HermesInternal;
              combined4 = 'Cadena inv\u00E1lida: debe comenzar con "' + code.prefix + '"';
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
              const format = closure_1[code.format] ?? code.format;
              const _HermesInternal5 = HermesInternal;
              combined4 = "Inv\u00E1lido " + format;
            }
            return combined4;
          }
          case "not_multiple_of": {
            const _HermesInternal4 = HermesInternal;
            return "N\u00FAmero inv\u00E1lido: debe ser m\u00FAltiplo de " + code.divisor;
          }
          case "unrecognized_keys": {
            let str3 = "";
            let str4 = "";
            if (code.keys.length > 1) {
              str4 = "s";
            }
            if (code.keys.length > 1) {
              str3 = "s";
            }
            const _HermesInternal3 = HermesInternal;
            return "Llave" + str4 + " desconocida" + str3 + ": " + captureStackTrace.joinValues(code.keys, ", ");
          }
          case "invalid_key": {
            const origin2 = closure_2[code.origin] ?? code.origin;
            const _HermesInternal2 = HermesInternal;
            return "Llave inv\u00E1lida en " + origin2;
          }
          case "invalid_union": {
            return "Entrada inv\u00E1lida";
          }
          case "invalid_element": {
            const origin = closure_2[code.origin] ?? code.origin;
            const _HermesInternal = HermesInternal;
            return "Valor inv\u00E1lido en " + origin;
          }
          default: {
            return "Entrada inv\u00E1lida";
          }
        }
      },
    };
    const obj2 = {
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
    let closure_2 = {
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
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
