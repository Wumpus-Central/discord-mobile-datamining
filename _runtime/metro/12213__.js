// === Module 12213: ? ===

// Module 12213
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
      if (typeof obj4 === "function") {
        let obj = { localeError: null };
        let obj2 = { string: { unit: "caracteres" }, file: { unit: "bytes" }, array: { unit: "elementos" }, set: { unit: "elementos" }, map: { unit: "entradas" } };
        closure_1 = { regex: "a entrada", email: "o endere\u00E7o de e-mail", url: "o URL", emoji: "o emoji", uuid: "o UUID", uuidv4: "o UUIDv4", uuidv6: "o UUIDv6", nanoid: "o nanoid", guid: "o GUID", cuid: "o cuid", cuid2: "o cuid2", ulid: "o ULID", xid: "o XID", ksuid: "o KSUID", datetime: "a data e hora ISO", date: "a data ISO", time: "a hora ISO", duration: "a dura\u00E7\u00E3o ISO", ipv4: "o endere\u00E7o IPv4", ipv6: "o endere\u00E7o IPv6", mac: "o endere\u00E7o MAC", cidrv4: "o intervalo de endere\u00E7os IPv4", cidrv6: "o intervalo de endere\u00E7os IPv6", base64: "o texto codificado em base64", base64url: "o texto codificado em base64url", json_string: "o texto JSON", e164: "o n\u00FAmero E.164", credit_card: "o n\u00FAmero de cart\u00E3o de cr\u00E9dito", currency_code: "o c\u00F3digo de moeda", iban: "o IBAN", jwt: "o JWT", template_literal: "a entrada" };
        let obj3 = { masculine: { definite: "o", indefinite: "um" }, feminine: { definite: "a", indefinite: "uma" } };
        obj4 = { string: null, number: null, int: null, boolean: null, bigint: null, symbol: null, undefined: null, null: null, never: null, void: null, date: null, array: null, object: null, tuple: null, record: null, map: null, set: null, file: null, nonoptional: null, nan: null, function: null };
        let obj5 = { name: "texto", articles: obj3.masculine };
        obj4.string = obj5;
        let obj6 = { name: "n\u00FAmero", articles: obj3.masculine };
        obj4.number = obj6;
        let obj7 = { name: "n\u00FAmero inteiro", articles: obj3.masculine };
        obj4.int = obj7;
        const obj8 = { name: "valor booleano", articles: obj3.masculine };
        obj4.boolean = obj8;
        const obj9 = { name: "n\u00FAmero bigint", articles: obj3.masculine };
        obj4.bigint = obj9;
        const obj10 = { name: "s\u00EDmbolo", articles: obj3.masculine };
        obj4.symbol = obj10;
        const obj11 = { name: "valor \"undefined\"", articles: obj3.masculine };
        obj4.undefined = obj11;
        const obj12 = { name: "valor \"nulo\"", articles: obj3.masculine };
        obj4.null = obj12;
        const obj13 = { name: "valor \"never\"", articles: obj3.masculine };
        obj4.never = obj13;
        const obj14 = { name: "valor \"void\"", articles: obj3.masculine };
        obj4.void = obj14;
        const obj15 = { name: "data", articles: obj3.feminine };
        obj4.date = obj15;
        const obj16 = { name: "vetor", articles: obj3.masculine };
        obj4.array = obj16;
        const obj17 = { name: "objeto", articles: obj3.masculine };
        obj4.object = obj17;
        const obj18 = { name: "tuplo", articles: obj3.masculine };
        obj4.tuple = obj18;
        const obj19 = { name: "registo", articles: obj3.masculine };
        obj4.record = obj19;
        const obj20 = { name: "mapa", articles: obj3.masculine };
        obj4.map = obj20;
        const obj21 = { name: "conjunto", articles: obj3.masculine };
        obj4.set = obj21;
        const obj22 = { name: "ficheiro", articles: obj3.masculine };
        obj4.file = obj22;
        const obj23 = { name: "valor n\u00E3o opcional", articles: obj3.masculine };
        obj4.nonoptional = obj23;
        const obj24 = { name: "valor \"NaN\"", articles: obj3.masculine };
        obj4.nan = obj24;
        const obj25 = { name: "fun\u00E7\u00E3o", articles: obj3.feminine };
        obj4.function = obj25;
        obj.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              const expected = code.expected;
              let tmp72 = obj4[expected];
              if (tmp72 == null) {
                const obj = { name: null, articles: null };
                const _HermesInternal26 = HermesInternal;
                obj.name = "valor \"" + expected + "\"";
                obj.articles = obj3.masculine;
                tmp72 = obj;
              }
              const _HermesInternal27 = HermesInternal;
              const combined = "" + tmp72.articles.indefinite + " " + tmp72.name;
              const parsedTypeResult = obj3.parsedType(code.input);
              let tmp80 = obj4[parsedTypeResult];
              if (tmp80 == null) {
                obj2 = { name: null, articles: null };
                const _HermesInternal28 = HermesInternal;
                obj2.name = "valor \"" + parsedTypeResult + "\"";
                obj2.articles = obj3.masculine;
                tmp80 = obj2;
              }
              const _HermesInternal29 = HermesInternal;
              const _HermesInternal30 = HermesInternal;
              return "Entrada inv\u00E1lida: esperava " + combined + ", recebeu " + "" + tmp80.articles.indefinite + " " + tmp80.name;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal25 = HermesInternal;
                let combined1 = "Entrada inv\u00E1lida: esperava " + obj3.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal24 = HermesInternal;
                combined1 = "Op\u00E7\u00E3o inv\u00E1lida: esperava uma das seguintes op\u00E7\u00F5es: " + obj3.joinValues(code.values, "|");
              }
              return combined1;
            case "too_big":
              let str46 = "<";
              if (code.inclusive) {
                str46 = "<=";
              }
              let tmp46 = obj2[code.origin];
              if (tmp46 == null) {
                tmp46 = null;
              }
              const origin3 = code.origin;
              let tmp49 = obj4[origin3];
              if (tmp46) {
                if (tmp49 == null) {
                  obj3 = { name: null, articles: null };
                  const _HermesInternal21 = HermesInternal;
                  obj3.name = "valor \"" + origin3 + "\"";
                  obj3.articles = obj3.masculine;
                  tmp49 = obj3;
                }
                const _HermesInternal22 = HermesInternal;
                const combined2 = "" + tmp49.articles.definite + " " + tmp49.name;
                const str1 = code.maximum.toString();
                let str60 = tmp46.unit;
                if (str60 == null) {
                  str60 = "elementos";
                }
                const _HermesInternal23 = HermesInternal;
                let combined3 = "Demasiado grande: esperava que " + combined2 + " tivesse " + str46 + " " + str1 + " " + str60;
              } else {
                let tmp50 = tmp49;
                if (tmp49 == null) {
                  obj4 = { name: null, articles: null };
                  const _HermesInternal18 = HermesInternal;
                  obj4.name = "valor \"" + origin3 + "\"";
                  obj4.articles = obj3.masculine;
                  tmp50 = obj4;
                }
                const _HermesInternal19 = HermesInternal;
                const combined4 = "" + tmp50.articles.definite + " " + tmp50.name;
                const _HermesInternal20 = HermesInternal;
                combined3 = "Demasiado grande: esperava que " + combined4 + " fosse " + str46 + " " + code.maximum.toString();
              }
              return combined3;
            case "too_small":
              let str27 = ">";
              if (code.inclusive) {
                str27 = ">=";
              }
              let tmp25 = obj2[code.origin];
              if (tmp25 == null) {
                tmp25 = null;
              }
              const origin2 = code.origin;
              let tmp28 = obj4[origin2];
              if (tmp25) {
                if (tmp28 == null) {
                  const obj5 = { name: null, articles: null };
                  const _HermesInternal15 = HermesInternal;
                  obj5.name = "valor \"" + origin2 + "\"";
                  obj5.articles = obj3.masculine;
                  tmp28 = obj5;
                }
                const _HermesInternal16 = HermesInternal;
                const combined5 = "" + tmp28.articles.definite + " " + tmp28.name;
                const str79 = code.minimum.toString();
                let str41 = tmp25.unit;
                if (str41 == null) {
                  str41 = "elementos";
                }
                const _HermesInternal17 = HermesInternal;
                let combined6 = "Demasiado pequeno: esperava que " + combined5 + " tivesse " + str27 + " " + str79 + " " + str41;
              } else {
                let tmp29 = tmp28;
                if (tmp28 == null) {
                  const obj6 = { name: null, articles: null };
                  const _HermesInternal12 = HermesInternal;
                  obj6.name = "valor \"" + origin2 + "\"";
                  obj6.articles = obj3.masculine;
                  tmp29 = obj6;
                }
                const _HermesInternal13 = HermesInternal;
                const combined7 = "" + tmp29.articles.definite + " " + tmp29.name;
                const _HermesInternal14 = HermesInternal;
                combined6 = "Demasiado pequeno: esperava que " + combined7 + " fosse " + str27 + " " + code.minimum.toString();
              }
              return combined6;
            case "invalid_format":
              if ("starts_with" === code.format) {
                const _HermesInternal11 = HermesInternal;
                let combined8 = "Texto inv\u00E1lido: deve come\u00E7ar por \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal10 = HermesInternal;
                combined8 = "Texto inv\u00E1lido: deve terminar em \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal9 = HermesInternal;
                combined8 = "Texto inv\u00E1lido: deve incluir \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined8 = "Texto inv\u00E1lido: deve corresponder ao padr\u00E3o " + code.pattern;
              } else {
                let format = closure_1[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal7 = HermesInternal;
                combined8 = "Formato d" + format + " inv\u00E1lido";
              }
              return combined8;
            case "not_multiple_of":
              const _HermesInternal6 = HermesInternal;
              return "N\u00FAmero inv\u00E1lido: deve ser m\u00FAltiplo de " + code.divisor;
            case "unrecognized_keys":
              let str10 = "";
              if (code.keys.length > 1) {
                str10 = "s";
              }
              const _HermesInternal5 = HermesInternal;
              return "Chave" + str10 + " inv\u00E1lida" + str10 + ": " + obj3.joinValues(code.keys, ", ");
            case "invalid_key":
              let origin = code.origin;
              let tmp3 = obj4[origin];
              if (tmp3 == null) {
                let obj7 = { name: null, articles: null };
                let _HermesInternal2 = HermesInternal;
                let combined9 = "valor \"" + origin + "\"";
                obj7.name = combined9;
                obj7.articles = obj3.masculine;
                tmp3 = obj7;
              }
              let _HermesInternal3 = HermesInternal;
              let combined10 = "" + tmp3.articles.definite + " " + tmp3.name;
              let _HermesInternal4 = HermesInternal;
              let combined11 = "Entrada inv\u00E1lida n" + combined10;
              return combined11;
            case "invalid_element":
              origin = code.origin;
              tmp3 = obj4[origin];
              if (tmp3 == null) {
                obj7 = { name: null, articles: null };
                _HermesInternal2 = HermesInternal;
                combined9 = "valor \"" + origin + "\"";
                obj7.name = combined9;
                obj7.articles = obj3.masculine;
                tmp3 = obj7;
              }
              _HermesInternal3 = HermesInternal;
              combined10 = "" + tmp3.articles.definite + " " + tmp3.name;
              _HermesInternal4 = HermesInternal;
              combined11 = "Entrada inv\u00E1lida n" + combined10;
              return combined11;
            case "invalid_union":
              let str2 = "Entrada inv\u00E1lida";
              if (code.options) {
                const _Array = Array;
                str2 = "Entrada inv\u00E1lida";
                if (Array.isArray(code.options)) {
                  str2 = "Entrada inv\u00E1lida";
                  if (code.options.length > 0) {
                    const options = code.options;
                    const mapped = options.map((item) => "'" + item + "'");
                    const _HermesInternal = HermesInternal;
                    str2 = "Valor de discrimina\u00E7\u00E3o inv\u00E1lido. Esperava " + mapped.join(" | ");
                  }
                }
              }
              return str2;
            default:
              return "Entrada inv\u00E1lida";
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