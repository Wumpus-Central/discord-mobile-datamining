// === Module 12237: aggregateChecks ===

// Module 12237 (aggregateChecks)
import _mod12160 from "module_12160" /* 12160 */;
import _validateAsync from "_validateAsync" /* 12163 */;
import _mod12165 from "module_12165" /* 12165 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _toArray from "_toArray" /* 717 */;
import _slicedToArray from "module_32" /* 32 */;

const self = this;
let BIGINT_FORMAT_RANGES = require;
function aggregateChecks(keyType) {
  let def = keyType._zod.def;
  const traits = keyType._zod.traits;
  if (traits.has("$ZodCheck")) {
    items = [keyType];
    let checks = def.checks;
    if (checks == null) {
      checks = [];
    }
    HermesBuiltin.arraySpread(checks, 1);
    let checks1 = items;
  } else {
    checks1 = def.checks;
    if (checks1 == null) {
      checks1 = [];
    }
  }
  def = checks1[Symbol.iterator]();
}
function inputOptin(innerType) {
  const def = innerType._zod.def;
  if ("pipe" === def.type) {
    const traits = def.in._zod.traits;
    if (traits.has("$ZodTransform")) {
      let optin = inputOptin(def.out);
    }
    return optin;
  }
  if ("catch" === def.type) {
    optin = inputOptin(def.innerType);
  } else {
    optin = innerType._zod.optin;
  }
}
function stringifyKeyNames(get, def, has) {
  closure_0 = get;
  _exports = def;
  closure_2 = has;
  if (def.$ref) {
    if (has.has(_exports)) {
      return _exports;
    } else {
      has.add(_exports);
      value = get.get(_exports);
      def = undefined;
      if (value != null) {
        def = value.def;
      }
      if (def) {
        let tmp31 = stringifyKeyNames(get, def, has);
        if (tmp31 === def) {
          tmp31 = _exports;
        }
        return tmp31;
      } else {
        return _exports;
      }
    }
  } else {
    items = ["anyOf", "oneOf"];
    function _loop() {
      if (Array.isArray(obj[closure_3])) {
        const mapped = arr.map((item) => stringifyKeyNames(arr, item, has));
        if (mapped.some((item, index) => item !== arr[index])) {
          obj = {};
          const merged = Object.assign(obj);
          obj[closure_3] = mapped;
        }
      } else {
        return 1;
      }
    }
    const iter = items[Symbol.iterator]();
    while (iter !== undefined) {
      _objectWithoutProperties = iter.next();
      let _loopResult = _loop();
      continue;
    }
    const _Array = Array;
    const type = _exports.type;
    if (Array.isArray(_exports.type)) {
      let items1 = type;
    } else {
      items1 = [type];
    }
    const hasItem = items1.includes("string");
    let someResult = !hasItem;
    if (!hasItem) {
      someResult = items1.some((item) => {
        let tmp = "number" === item;
        if (!tmp) {
          tmp = "integer" === item;
        }
        return tmp;
      });
    }
    let _enum = _exports.enum;
    if (_enum == null) {
      let tmp13;
      if (undefined !== _exports.const) {
        const items2 = [_exports.const];
        tmp13 = items2;
      }
      _enum = tmp13;
    }
    if (!someResult) {
      let someResult1;
      if (_enum != null) {
        someResult1 = _enum.some((item) => typeof item === "number");
      }
      if (!someResult1) {
        return _exports;
      }
    }
    ({ minimum, maximum, exclusiveMinimum, exclusiveMaximum, multipleOf, format, id } = _exports);
    const tmp20 = _objectWithoutProperties(_exports, closure_6);
    if (tmp20.enum) {
      const _enum1 = tmp20.enum;
      tmp20.enum = _enum1.map((item) => {
        let StringResult = item;
        if (typeof item === "number") {
          const _String = String;
          StringResult = String(item);
        }
        return StringResult;
      });
    } else if (typeof tmp20.const === "number") {
      let _String = String;
      tmp20.const = String(tmp20.const);
    }
    if (someResult) {
      tmp20.type = "string";
      if (!_enum) {
        tmp20.pattern = items1.includes("number") ? closure_9.number : closure_9.integer.source;
      }
    }
    return tmp20;
  }
}
let closure_6 = ["minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf", "format", "id"];
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
        obj = {};
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
    exports.stringProcessor = undefined;
    exports.numberProcessor = undefined;
    exports.booleanProcessor = undefined;
    exports.bigintProcessor = undefined;
    exports.symbolProcessor = undefined;
    exports.nullProcessor = undefined;
    exports.undefinedProcessor = undefined;
    exports.voidProcessor = undefined;
    exports.neverProcessor = undefined;
    exports.anyProcessor = undefined;
    exports.unknownProcessor = undefined;
    exports.dateProcessor = undefined;
    exports.enumProcessor = undefined;
    exports.literalProcessor = undefined;
    exports.nanProcessor = undefined;
    exports.templateLiteralProcessor = undefined;
    exports.fileProcessor = undefined;
    exports.successProcessor = undefined;
    exports.customProcessor = undefined;
    exports.functionProcessor = undefined;
    exports.transformProcessor = undefined;
    exports.mapProcessor = undefined;
    exports.setProcessor = undefined;
    exports.arrayProcessor = undefined;
    exports.objectProcessor = undefined;
    exports.unionProcessor = undefined;
    exports.intersectionProcessor = undefined;
    exports.tupleProcessor = undefined;
    exports.recordProcessor = undefined;
    exports.nullableProcessor = undefined;
    exports.nonoptionalProcessor = undefined;
    exports.defaultProcessor = undefined;
    exports.prefaultProcessor = undefined;
    exports.catchProcessor = undefined;
    exports.pipeProcessor = undefined;
    exports.readonlyProcessor = undefined;
    exports.promiseProcessor = undefined;
    exports.optionalProcessor = undefined;
    exports.lazyProcessor = undefined;
    exports.allProcessors = undefined;
    exports.aggregateChecks = aggregateChecks;
    exports.toJSONSchema = function toJSONSchema(_idmap, uri) {
      obj = {};
      const merged = Object.assign(uri);
      obj.processors = exports.allProcessors;
      const initializeContextResult = BIGINT_FORMAT_RANGES(12236).initializeContext(obj);
      if (tmp) {
        _idmap = _idmap._idmap;
        const entries = _idmap.entries();
        const tmp10 = entries[Symbol.iterator]();
        while (tmp10 !== undefined) {
          let tmp15 = _slicedToArray(tmp12, 2);
          let first = tmp15[0];
          let processSchemaResult = BIGINT_FORMAT_RANGES(12236).processSchema(tmp15[1], initializeContextResult);
          continue;
        }
        const obj2 = {};
        const obj3 = { registry: _idmap, uri: null, defs: null };
        uri = undefined;
        if (uri != null) {
          uri = uri.uri;
        }
        const obj4 = {};
        obj3.uri = uri;
        obj3.defs = obj4;
        initializeContextResult.external = obj3;
        const _idmap2 = _idmap._idmap;
        const entries1 = _idmap2.entries();
        for (const item10061 of entries1) {
          let tmp26 = _slicedToArray(item10061, 2);
          let tmp27 = tmp26[1];
          let extractDefsResult = BIGINT_FORMAT_RANGES(12236).extractDefs(initializeContextResult, tmp27);
          let assignPropResult = BIGINT_FORMAT_RANGES(12160).assignProp(obj2, tmp26[0], BIGINT_FORMAT_RANGES(12236).finalize(initializeContextResult, tmp27));
          continue;
        }
        const _Object = Object;
        if (Object.keys(obj4).length > 0) {
          let str = "definitions";
          if ("draft-2020-12" === initializeContextResult.target) {
            str = "$defs";
          }
          const obj5 = {};
          obj5[str] = obj4;
          obj2.__shared = obj5;
        }
        const obj6 = { schemas: obj2 };
        return obj6;
      } else {
        BIGINT_FORMAT_RANGES(12236).processSchema(_idmap, initializeContextResult);
        BIGINT_FORMAT_RANGES(12236).extractDefs(initializeContextResult, _idmap);
        return BIGINT_FORMAT_RANGES(12236).finalize(initializeContextResult, _idmap);
      }
      tmp = "_idmap" in _idmap;
    };
    const fnResult = fn(_mod12165);
    function narrowMin(arg0, arg1, arg2) {
      if (tmp) {
        arg0[arg1] = arg2;
      }
    }
    function narrowMax(arg0, arg1, arg2) {
      if (tmp) {
        arg0[arg1] = arg2;
      }
    }
    function narrowBoth(arg0, arg1) {

    }
    function addDivisor(multipleOf, arg1) {
      if (multipleOf.multipleOf == null) {
        multipleOf.multipleOf = [];
      }
      multipleOf = multipleOf.multipleOf;
      if (!multipleOf.includes(arg1)) {
        const multipleOf1 = multipleOf.multipleOf;
        multipleOf1.push(arg1);
      }
    }
    function addPattern(patterns, arg1) {
      if (patterns.patterns == null) {
        const _Set = Set;
        const set = new Set();
        patterns.patterns = set;
      }
      patterns = patterns.patterns;
      patterns.add(arg1);
    }
    function intersectMime(mime, arg1) {
      closure_0 = arg1;
      if (mime.mime) {
        mime = mime.mime;
        let found = mime.filter((item) => mime.includes(item));
      } else {
        found = [];
        HermesBuiltin.arraySpread(arg1, 0);
      }
      mime.mime = found;
    }
    function setFormat(arg0, arg1) {

    }
    function minContributor(minimum, minimum2) {
      minimum = minimum2.minimum;
      if (typeof narrowMin === "function") {
        if (tmp2) {
          minimum.minimum = minimum;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    function maxContributor(maximum, maximum2) {
      maximum = maximum2.maximum;
      if (typeof narrowMax === "function") {
        if (tmp2) {
          maximum.maximum = maximum;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    let obj = {
      greater_than(arg0, inclusive) {
            let str = "exclusiveMinimum";
            if (inclusive.inclusive) {
              str = "minimum";
            }
            value = inclusive.value;
            if (typeof narrowMin === "function") {
              if (tmp3) {
                arg0[str] = value;
              }
              tmp3 = undefined === arg0[str] || value > arg0[str];
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          },
      less_than(arg0, inclusive) {
            let str = "exclusiveMaximum";
            if (inclusive.inclusive) {
              str = "maximum";
            }
            value = inclusive.value;
            if (typeof narrowMax === "function") {
              if (tmp3) {
                arg0[str] = value;
              }
              tmp3 = undefined === arg0[str] || value < arg0[str];
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          },
      multiple_of(multipleOf, value) {
            value = value.value;
            if (typeof addDivisor === "function") {
              if (multipleOf.multipleOf == null) {
                multipleOf.multipleOf = [];
              }
              multipleOf = multipleOf.multipleOf;
              if (!multipleOf.includes(value)) {
                const multipleOf1 = multipleOf.multipleOf;
                multipleOf1.push(value);
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          },
      number_format: null,
      bigint_format: null,
      min_length: null,
      max_length: null,
      length_equals: null,
      min_size: null,
      max_size: null,
      size_equals: null,
      string_format: null,
      mime_type: null
    };
    obj.number_format = (minimum, format) => {
      format = format.format;
      if (typeof value === "function") {
        minimum.format = format;
        if (format.includes("int")) {
          minimum.isInt = true;
        }
        [tmp5, tmp6] = hasOwnProperty(BIGINT_FORMAT_RANGES[format.format], 2);
        if (typeof closure_10 === "function") {
          if (tmp8) {
            minimum.minimum = tmp5;
          }
          if (typeof closure_11 === "function") {
            if (tmp10) {
              minimum.maximum = tmp6;
            }
            tmp10 = undefined === minimum.maximum || tmp6 < minimum.maximum;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          tmp8 = undefined === minimum.minimum || tmp5 > minimum.minimum;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        const tmp4 = hasOwnProperty(BIGINT_FORMAT_RANGES[format.format], 2);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    BIGINT_FORMAT_RANGES = _mod12160.BIGINT_FORMAT_RANGES;
    obj.bigint_format = (minimum, format) => {
      format = format.format;
      if (typeof value === "function") {
        minimum.format = format;
        if (format.includes("int")) {
          minimum.isInt = true;
        }
        [tmp5, tmp6] = hasOwnProperty(BIGINT_FORMAT_RANGES[format.format], 2);
        if (typeof closure_10 === "function") {
          if (tmp8) {
            minimum.minimum = tmp5;
          }
          if (typeof closure_11 === "function") {
            if (tmp10) {
              minimum.maximum = tmp6;
            }
            tmp10 = undefined === minimum.maximum || tmp6 < minimum.maximum;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          tmp8 = undefined === minimum.minimum || tmp5 > minimum.minimum;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        const tmp4 = hasOwnProperty(BIGINT_FORMAT_RANGES[format.format], 2);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    obj.min_length = minContributor;
    obj.max_length = maxContributor;
    obj.length_equals = function length_equals(minimum, arg1) {
      if (typeof narrowBoth === "function") {
        if (typeof narrowMin === "function") {
          if (tmp3) {
            minimum.minimum = length;
          }
          if (typeof narrowMax === "function") {
            if (tmp5) {
              minimum.maximum = length;
            }
            tmp5 = undefined === minimum.maximum || length < minimum.maximum;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          tmp3 = undefined === minimum.minimum || length > minimum.minimum;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    obj.min_size = minContributor;
    obj.max_size = maxContributor;
    obj.size_equals = function size_equals(minimum, size) {
      size = size.size;
      if (typeof narrowBoth === "function") {
        if (typeof narrowMin === "function") {
          if (tmp3) {
            minimum.minimum = size;
          }
          if (typeof narrowMax === "function") {
            if (tmp5) {
              minimum.maximum = size;
            }
            tmp5 = undefined === minimum.maximum || size < minimum.maximum;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          tmp3 = undefined === minimum.minimum || size > minimum.minimum;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    obj.string_format = function string_format(patterns, format) {
      format = format.format;
      if (typeof setFormat === "function") {
        patterns.format = format;
        if (format.includes("int")) {
          patterns.isInt = true;
        }
        if (format.pattern) {
          if (typeof addPattern === "function") {
            if (patterns.patterns == null) {
              const _Set = Set;
              const set = new Set();
              patterns.patterns = set;
            }
            patterns = patterns.patterns;
            patterns.add(tmp3);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        let tmp11 = "base64" !== format.format;
        if (tmp11) {
          tmp11 = "base64url" !== format.format;
        }
        if (!tmp11) {
          patterns.contentEncoding = format.format;
        }
        let local = format.local;
        if (!local) {
          local = -1 === format.precision;
        }
        if (local) {
          patterns.laxFormat = true;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    obj.mime_type = function mime_type(mime, mime2) {
      mime = mime2.mime;
      if (typeof intersectMime === "function") {
        if (mime.mime) {
          const mime1 = mime.mime;
          let found = mime1.filter((item) => mime.includes(item));
        } else {
          found = [];
          HermesBuiltin.arraySpread(mime, 0);
        }
        mime.mime = found;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let closure_19 = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" };
    const _Map = Map;
    let items = [_validateAsync.base64Charset, fnResult.base64];
    let items1 = [items, ];
    let items2 = [_validateAsync.base64urlCharset, fnResult.base64url];
    items1[1] = items2;
    let map = new Map(items1);
    function exactPattern(item10090) {
      value = map.get(item10090);
      if (value == null) {
        value = item10090;
      }
      return value;
    }
    exports.stringProcessor = (keyType, arg1, format, arg3) => {
      const target = arg1;
      format.type = "string";
      ({ minimum, maximum, format, patterns, contentEncoding, laxFormat } = aggregateChecks(keyType));
      if (typeof minimum === "number") {
        format.minLength = minimum;
      }
      if (typeof maximum === "number") {
        format.maxLength = maximum;
      }
      if (format) {
        let tmp5 = closure_19[format];
        if (tmp5 == null) {
          tmp5 = format;
        }
        format.format = tmp5;
        if ("" === format.format) {
          delete tmp[tmp2];
        }
        if (tmp7) {
          delete tmp[tmp2];
        }
        tmp7 = "time" === format || laxFormat;
      }
      if (contentEncoding) {
        format.contentEncoding = contentEncoding;
      }
      if (patterns) {
        if (patterns.size > 0) {
          items = [];
          HermesBuiltin.arraySpread(patterns, 0);
          const mapped = items.map(exactPattern);
          if (1 === mapped.length) {
            format.pattern = mapped[0].source;
          } else if (mapped.length > 1) {
            const items1 = [];
            HermesBuiltin.arraySpread(mapped.map((source) => {
              if ("draft-07" !== target.target) {
                if ("draft-04" !== target.target) {
                  if ("openapi-3.0" !== target.target) {
                    obj = {};
                  }
                  const obj2 = {};
                  const merged = Object.assign(obj);
                  obj2.pattern = source.source;
                  return obj2;
                }
              }
              obj = { type: "string" };
            }), 0);
            format.allOf = items1;
          }
        }
      }
      const tmp3 = aggregateChecks(keyType);
    };
    exports.numberProcessor = (zodSchema, target, allOf, path) => {
      const tmp = aggregateChecks(zodSchema);
      ({ minimum, maximum, multipleOf, exclusiveMaximum, exclusiveMinimum } = tmp);
      let str = "number";
      if (tmp.isInt) {
        str = "integer";
      }
      allOf.type = str;
      let tmp2 = typeof exclusiveMinimum === "number";
      if (typeof exclusiveMinimum === "number") {
        let NEGATIVE_INFINITY = minimum;
        if (minimum == null) {
          const _Number = Number;
          NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
        }
        tmp2 = exclusiveMinimum >= NEGATIVE_INFINITY;
      }
      let tmp4 = typeof exclusiveMaximum === "number";
      if (typeof exclusiveMaximum === "number") {
        let POSITIVE_INFINITY = maximum;
        if (maximum == null) {
          const _Number2 = Number;
          POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
        }
        tmp4 = exclusiveMaximum <= POSITIVE_INFINITY;
      }
      let tmp6 = "draft-04" === target.target;
      if (!tmp6) {
        tmp6 = "openapi-3.0" === target.target;
      }
      if (tmp2) {
        if (tmp6) {
          allOf.minimum = exclusiveMinimum;
          allOf.exclusiveMinimum = true;
        } else {
          allOf.exclusiveMinimum = exclusiveMinimum;
        }
      } else if (typeof minimum === "number") {
        allOf.minimum = minimum;
      }
      if (tmp4) {
        if (tmp6) {
          allOf.maximum = exclusiveMaximum;
          allOf.exclusiveMaximum = true;
        } else {
          allOf.exclusiveMaximum = exclusiveMaximum;
        }
      } else if (typeof maximum === "number") {
        allOf.maximum = maximum;
      }
      if (multipleOf) {
        const _Set = Set;
        const set = new Set();
        const iter = multipleOf[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp15 = nextResult;
          let _Number3 = Number;
          if (Number.isFinite(nextResult)) {
            if (0 !== tmp15) {
              let _Math = Math;
              let addResult = set.add(Math.abs(tmp15));
              continue;
            }
          }
          let _HermesInternal = HermesInternal;
          let result = BIGINT_FORMAT_RANGES(12236).handleUnrepresentable(zodSchema, target, allOf, path, "A multipleOf divisor of " + tmp15 + " cannot be represented in JSON Schema");
        }
        const arr = _toArray(set);
        const first = arr[0];
        const substr = arr.slice(1);
        if (undefined !== first) {
          allOf.multipleOf = first;
        }
        if (substr.length) {
          allOf = allOf.allOf;
          if (allOf == null) {
            allOf = [];
          }
          items = [];
          HermesBuiltin.arraySpread(substr.map((multipleOf) => ({ multipleOf })), HermesBuiltin.arraySpread(allOf, 0));
          allOf.allOf = items;
          const arraySpreadResult = HermesBuiltin.arraySpread(allOf, 0);
        }
      }
    };
    exports.booleanProcessor = (arg0, arg1, arg2, arg3) => {
      arg2.type = "boolean";
    };
    exports.bigintProcessor = (zodSchema, unrepresentable, properties, path) => {
      const result = BIGINT_FORMAT_RANGES(12236).handleUnrepresentable(zodSchema, unrepresentable, properties, path, "BigInt cannot be represented in JSON Schema");
    };
    exports.symbolProcessor = (zodSchema, unrepresentable, properties, path) => {
      const result = BIGINT_FORMAT_RANGES(12236).handleUnrepresentable(zodSchema, unrepresentable, properties, path, "Symbols cannot be represented in JSON Schema");
    };
    exports.nullProcessor = (arg0, target, arg2, arg3) => {
      if ("openapi-3.0" === target.target) {
        arg2.type = "string";
        arg2.nullable = true;
        arg2.enum = [null];
      } else {
        arg2.type = "null";
      }
    };
    exports.undefinedProcessor = (zodSchema, unrepresentable, properties, path) => {
      const result = BIGINT_FORMAT_RANGES(12236).handleUnrepresentable(zodSchema, unrepresentable, properties, path, "Undefined cannot be represented in JSON Schema");
    };
    exports.voidProcessor = (zodSchema, unrepresentable, properties, path) => {
      const result = BIGINT_FORMAT_RANGES(12236).handleUnrepresentable(zodSchema, unrepresentable, properties, path, "Void cannot be represented in JSON Schema");
    };
    exports.neverProcessor = (arg0, arg1, arg2, arg3) => {
      arg2.not = {};
    };
    exports.anyProcessor = (arg0, arg1, arg2, arg3) => {

    };
    exports.unknownProcessor = (arg0, arg1, arg2, arg3) => {

    };
    exports.dateProcessor = (zodSchema, unrepresentable, properties, path) => {
      const result = BIGINT_FORMAT_RANGES(12236).handleUnrepresentable(zodSchema, unrepresentable, properties, path, "Date cannot be represented in JSON Schema");
    };
    exports.enumProcessor = (_zod, arg1, arg2, arg3) => {
      const enumValues = BIGINT_FORMAT_RANGES(12160).getEnumValues(_zod._zod.def.entries);
      if (0 !== enumValues.length) {
        if (enumValues.every((item) => typeof item === "number")) {
          arg2.type = "number";
        }
        if (enumValues.every((item) => typeof item === "string")) {
          arg2.type = "string";
        }
        arg2.enum = enumValues;
      } else {
        arg2.not = {};
      }
    };
    exports.literalProcessor = (_zod, target, properties, path) => {
      const def = _zod._zod.def;
      if (0 !== def.values.length) {
        items = [];
        const values = def.values;
        const iter = values[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp6 = nextResult;
          if (undefined === nextResult) {
            let str4 = "Literal `undefined` cannot be represented in JSON Schema";
            if (BIGINT_FORMAT_RANGES(12236).handleUnrepresentable(_zod, target, properties, path, "Literal `undefined` cannot be represented in JSON Schema")) {
              iter.return();
            }
          } else if (typeof tmp6 === "bigint") {
            let str3 = "BigInt literals cannot be represented in JSON Schema";
            if (BIGINT_FORMAT_RANGES(12236).handleUnrepresentable(_zod, target, properties, path, "BigInt literals cannot be represented in JSON Schema")) {
              iter.return();
            } else {
              let _Number = Number;
              let arr = items.push(Number(tmp6));
            }
          } else {
            let arr2 = items.push(tmp6);
          }
          continue;
        }
        if (0 !== items.length) {
          if (1 === items.length) {
            const first = items[0];
            let str9 = "null";
            if (null !== first) {
              str9 = typeof first;
            }
            properties.type = str9;
            if ("draft-04" !== target.target) {
              if ("openapi-3.0" !== target.target) {
                properties.const = first;
              }
            }
            const items1 = [first];
            properties.enum = items1;
          } else {
            if (items.every((item) => typeof item === "number")) {
              properties.type = "number";
            }
            if (items.every((item) => typeof item === "string")) {
              properties.type = "string";
            }
            if (items.every((flag) => typeof flag === "boolean")) {
              properties.type = "boolean";
            }
            if (items.every((item) => null === item)) {
              properties.type = "null";
            }
            properties.enum = items;
          }
        }
      } else {
        properties.not = {};
      }
    };
    exports.nanProcessor = (zodSchema, unrepresentable, properties, path) => {
      const result = BIGINT_FORMAT_RANGES(12236).handleUnrepresentable(zodSchema, unrepresentable, properties, path, "NaN cannot be represented in JSON Schema");
    };
    exports.templateLiteralProcessor = (_zod, arg1, arg2, arg3) => {
      const pattern = _zod._zod.pattern;
      if (pattern) {
        arg2.type = "string";
        arg2.pattern = pattern.source;
      } else {
        const _Error = Error;
        const error = new Error("Pattern not found in template literal");
        throw error;
      }
    };
    exports.fileProcessor = (keyType, arg1, arg2, arg3) => {
      arg2.type = "string";
      arg2.format = "binary";
      arg2.contentEncoding = "binary";
      ({ minimum, maximum, mime } = aggregateChecks(keyType));
      if (undefined !== minimum) {
        arg2.minLength = minimum;
      }
      if (undefined !== maximum) {
        arg2.maxLength = maximum;
      }
      if (mime) {
        if (0 === mime.length) {
          arg2.not = {};
        } else if (1 === mime.length) {
          arg2.contentMediaType = mime[0];
        } else {
          arg2.anyOf = mime.map((contentMediaType) => ({ contentMediaType }));
        }
      }
    };
    exports.successProcessor = (arg0, arg1, arg2, arg3) => {
      arg2.type = "boolean";
    };
    exports.customProcessor = (zodSchema, unrepresentable, properties, path) => {
      const result = BIGINT_FORMAT_RANGES(12236).handleUnrepresentable(zodSchema, unrepresentable, properties, path, "Custom types cannot be represented in JSON Schema");
    };
    exports.functionProcessor = (zodSchema, unrepresentable, properties, path) => {
      const result = BIGINT_FORMAT_RANGES(12236).handleUnrepresentable(zodSchema, unrepresentable, properties, path, "Function types cannot be represented in JSON Schema");
    };
    exports.transformProcessor = (zodSchema, unrepresentable, properties, path) => {
      const result = BIGINT_FORMAT_RANGES(12236).handleUnrepresentable(zodSchema, unrepresentable, properties, path, "Transforms cannot be represented in JSON Schema");
    };
    exports.mapProcessor = (zodSchema, unrepresentable, properties, path) => {
      const result = BIGINT_FORMAT_RANGES(12236).handleUnrepresentable(zodSchema, unrepresentable, properties, path, "Map cannot be represented in JSON Schema");
    };
    exports.setProcessor = (zodSchema, unrepresentable, properties, path) => {
      const result = BIGINT_FORMAT_RANGES(12236).handleUnrepresentable(zodSchema, unrepresentable, properties, path, "Set cannot be represented in JSON Schema");
    };
    exports.arrayProcessor = (_zod, initializeContextResult, arg2, path) => {
      ({ minimum, maximum } = aggregateChecks(_zod));
      if (typeof minimum === "number") {
        arg2.minItems = minimum;
      }
      if (typeof maximum === "number") {
        arg2.maxItems = maximum;
      }
      arg2.type = "array";
      obj = {};
      const merged = Object.assign(path);
      items = [];
      items[HermesBuiltin.arraySpread(path.path, 0)] = "items";
      obj.path = items;
      arg2.items = BIGINT_FORMAT_RANGES(12236).processSchema(_zod._zod.def.element, initializeContextResult, obj);
    };
    exports.objectProcessor = (_zod, io, properties, path) => {
      const def = _zod._zod.def;
      const shape = def.shape;
      if (!Object.getOwnPropertySymbols(shape).length) {
        properties.type = "object";
        properties.properties = {};
        for (const key10034 in shape) {
          let obj2 = {};
          let merged = Object.assign(arg3);
          items = [, ];
          let arraySpreadResult = HermesBuiltin.arraySpread(arg3.path, 0);
          items[arraySpreadResult] = "properties";
          items[arraySpreadResult + 1] = key10034;
          obj2.path = items;
          let assignPropResult = BIGINT_FORMAT_RANGES(12160).assignProp(arg2.properties, key10034, BIGINT_FORMAT_RANGES(12236).processSchema(shape[key10034], arg1, obj2));
          continue;
        }
        const items1 = [];
        const _Object = Object;
        const keys = Object.keys(shape);
        const iter = keys[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp14 = def.shape[nextResult];
          let tmp13 = nextResult;
          if ("input" === io.io) {
            let tmp16 = undefined === inputOptin(tmp14);
          } else {
            tmp16 = undefined === tmp14._zod.optout;
          }
          if (tmp16) {
            let arr = items1.push(tmp13);
          }
          continue;
        }
        if (items1.length > 0) {
          properties.required = items1;
        }
        const catchall = def.catchall;
        let type;
        if (catchall != null) {
          type = catchall._zod.def.type;
        }
        if ("never" === type) {
          properties.additionalProperties = false;
        } else if (def.catchall) {
          if (def.catchall) {
            obj = {};
            const merged1 = Object.assign(path);
            const items2 = [];
            items2[HermesBuiltin.arraySpread(path.path, 0)] = "additionalProperties";
            obj.path = items2;
            properties.additionalProperties = BIGINT_FORMAT_RANGES(12236).processSchema(def.catchall, io, obj);
          }
        } else if ("output" === io.io) {
          properties.additionalProperties = false;
        }
      }
    };
    exports.unionProcessor = (_zod, arg1, arg2, arg3) => {
      closure_0 = arg1;
      const path = arg3;
      const def = _zod._zod.def;
      closure_2 = tmp;
      const options = def.options;
      const mapped = options.map((item, index) => {
        obj = {};
        const merged = Object.assign(path);
        items = [...closure_1.path];
        let str = "anyOf";
        if (closure_2) {
          str = "oneOf";
        }
        items[tmp3] = str;
        items[tmp3 + 1] = index;
        obj.path = items;
        return BIGINT_FORMAT_RANGES(12236).processSchema(item, closure_0, obj);
      });
      if (false === def.inclusive) {
        arg2.oneOf = mapped;
      } else {
        arg2.anyOf = mapped;
      }
    };
    exports.intersectionProcessor = (_zod, intersections, arg2, path) => {
      const def = _zod._zod.def;
      obj = {};
      const merged = Object.assign(path);
      items = [...path.path, "allOf", 0];
      obj.path = items;
      const processSchemaResult = BIGINT_FORMAT_RANGES(12236).processSchema(def.left, intersections, obj);
      const obj2 = {};
      const merged1 = Object.assign(path);
      const items1 = [...path.path, "allOf", 1];
      obj2.path = items1;
      const processSchemaResult1 = BIGINT_FORMAT_RANGES(12236).processSchema(def.right, intersections, obj2);
      let tmp5 = "allOf" in processSchemaResult;
      if (tmp5) {
        const _Object = Object;
        tmp5 = 1 === Object.keys(processSchemaResult).length;
      }
      if (tmp5) {
        let allOf = processSchemaResult.allOf;
      } else {
        allOf = [processSchemaResult];
      }
      const items2 = [...allOf];
      let tmp8 = "allOf" in processSchemaResult1;
      if (tmp8) {
        const _Object2 = Object;
        tmp8 = 1 === Object.keys(processSchemaResult1).length;
      }
      if (tmp8) {
        let allOf1 = processSchemaResult1.allOf;
      } else {
        allOf1 = [processSchemaResult1];
      }
      HermesBuiltin.arraySpread(allOf1, tmp7);
      arg2.allOf = items2;
      intersections = intersections.intersections;
      intersections.push(items2);
    };
    exports.tupleProcessor = (_zod, target, items, path) => {
      BIGINT_FORMAT_RANGES = target;
      const def = _zod._zod.def;
      items.type = "array";
      let str = "items";
      if ("draft-2020-12" === target.target) {
        str = "prefixItems";
      }
      if ("draft-2020-12" === target.target) {
        let str2 = "items";
      } else {
        str2 = "additionalItems";
      }
      items = def.items;
      const mapped = items.map((item, index) => {
        obj = {};
        const merged = Object.assign(path);
        items = [...closure_1.path, str, index];
        obj.path = items;
        return BIGINT_FORMAT_RANGES(12236).processSchema(item, closure_0, obj);
      });
      if (!def.rest) {
        length = def.items.length;
        let tmp13 = length;
        if (length > 0) {
          while ("input" !== target.io) {
            tmp13 = length;
            if ("optional" === tmp14._zod.optout) {
              length = length - 1;
              tmp13 = length;
            }
          }
          const def2 = tmp14._zod.def;
          if ("pipe" !== def2.type) {
            if ("catch" === def2.type) {
              const innerType = def2.innerType;
              let out = innerType._zod.def;
              if ("pipe" !== out.type) {
                if ("catch" === out.type) {
                  let optin = inputOptin(out.innerType);
                } else {
                  optin = innerType._zod.optin;
                }
              } else {
                const traits2 = out.in._zod.traits;
              }
              out = out.out;
              optin = inputOptin(out);
            }
          } else {
            const traits = def2.in._zod.traits;
          }
          const out2 = def2.out;
          let out3 = out2._zod.def;
          if ("pipe" !== out3.type) {
            if ("catch" === out3.type) {
              let optin2 = inputOptin(out3.innerType);
            } else {
              optin2 = out2._zod.optin;
            }
          } else {
            const traits3 = out3.in._zod.traits;
          }
          out3 = out3.out;
          optin2 = inputOptin(out3);
        }
        const rest = def.rest;
        if ("draft-2020-12" === target.target) {
          items.prefixItems = mapped;
          if (rest) {
            if (null) {
              items.items = null;
            }
          } else {
            items.items = false;
          }
          if (tmp13 > 0) {
            items.minItems = tmp13;
          }
          if (!rest) {
            items.maxItems = length2;
          }
        } else if ("openapi-3.0" === target.target) {
          const obj2 = { anyOf: mapped };
          items.items = obj2;
          if (null) {
            const anyOf = items.items.anyOf;
            anyOf.push(null);
          }
          if (tmp13 > 0) {
            items.minItems = tmp13;
          }
          if (!rest) {
            items.maxItems = length2;
          }
        } else {
          items.items = mapped;
          if (rest) {
            if (null) {
              items.additionalItems = null;
            }
          } else {
            items.additionalItems = false;
          }
          if (tmp13 > 0) {
            items.minItems = tmp13;
          }
          if (!rest) {
            items.maxItems = length2;
          }
        }
        ({ minimum, maximum } = aggregateChecks(_zod));
        if (typeof minimum === "number") {
          items.minItems = minimum;
        }
        if (typeof maximum === "number") {
          items.maxItems = maximum;
        }
        const tmp26 = aggregateChecks(_zod);
      } else {
        obj = {};
        let merged = Object.assign(path);
        const items1 = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(path.path, 0);
        items1[arraySpreadResult] = str2;
        if ("openapi-3.0" === target.target) {
          const items2 = [def.items.length];
          let items3 = items2;
        } else {
          items3 = [];
        }
        HermesBuiltin.arraySpread(items3, arraySpreadResult + 1);
        obj.path = items1;
        BIGINT_FORMAT_RANGES(str[6]).processSchema(def.rest, target, obj);
      }
    };
    const _WeakMap = WeakMap;
    const weakMap = new WeakMap();
    exports.recordProcessor = (_zod, io, patternProperties, path) => {
      BIGINT_FORMAT_RANGES = io;
      let def = _zod._zod.def;
      patternProperties.type = "object";
      const keyType = def.keyType;
      const patterns = aggregateChecks(keyType).patterns;
      if ("loose" === def.mode) {
        if (patterns) {
          if (patterns.size > 0) {
            const obj3 = {};
            const processSchema = BIGINT_FORMAT_RANGES(12236).processSchema;
            const valueType = def.valueType;
            const merged = Object.assign(path);
            items = [, ];
            const arraySpreadResult = HermesBuiltin.arraySpread(path.path, 0);
            items[arraySpreadResult] = "patternProperties";
            items[arraySpreadResult + 1] = "*";
            obj3.path = items;
            patternProperties.patternProperties = {};
            for (const item10090 of patterns) {
              let assignPropResult = BIGINT_FORMAT_RANGES(12160).assignProp(arg2.patternProperties, exactPattern(item10090).source, tmp18);
              continue;
            }
          }
          let values = keyType._zod.values;
          let tmp25 = "input" === io.io;
          if (tmp25) {
            tmp25 = undefined !== inputOptin(def.valueType);
          }
          if (values) {
            if (!def.partial) {
              if (!tmp25) {
                let items1 = [];
                HermesBuiltin.arraySpread(values, 0);
                const found = items1.filter((item) => {
                  let tmp = typeof item === "string";
                  if (typeof item !== "string") {
                    tmp = typeof item === "number";
                  }
                  return tmp;
                });
                if (found.length > 0) {
                  const _String = String;
                  patternProperties.required = found.map(String);
                }
              }
            }
          }
        }
      }
      if ("draft-07" === io.target) {
        obj = {};
        const merged1 = Object.assign(path);
        const items2 = [];
        items2[HermesBuiltin.arraySpread(path.path, 0)] = "propertyNames";
        obj.path = items2;
        patternProperties.propertyNames = BIGINT_FORMAT_RANGES(12236).processSchema(def.keyType, io, obj);
        value = weakMap.get(io);
        if (!value) {
          const items3 = [];
          let result = weakMap.set(io, items3);
          const deferred = io.deferred;
          deferred.push(() => {
            (function rewriteKeyNames(seen) {
              map = new Map();
              seen = seen.seen;
              const values = seen.values();
              for (const item10020 of values) {
                let def = item10020.def;
                if (def) {
                  def = !map.has(item10020.schema);
                }
                if (def) {
                  let result = map.set(item10020.schema, item10020);
                }
                continue;
              }
              const map1 = new Map();
              let items1 = closure_1_24.get(seen);
              if (items1 == null) {
                items1 = [];
              }
              while (tmp6 !== undefined) {
                let seen2 = seen.seen;
                let value2 = seen2.get(tmp7);
                let tmp9 = value2;
                let def1;
                if (value2 != null) {
                  def1 = value2.def;
                }
                if (def1 == null) {
                  let schema;
                  if (tmp9 != null) {
                    schema = tmp9.schema;
                  }
                  def1 = schema;
                }
                let propertyNames;
                if (def1 != null) {
                  propertyNames = def1.propertyNames;
                }
                let tmp14 = propertyNames;
                if (propertyNames) {
                  if (true !== tmp14) {
                    if (!map1.has(tmp14)) {
                      let _Set = Set;
                      let tmp19 = new.target;
                      let tmp20 = new.target;
                      let set = new Set();
                      let tmp23 = closure_1_23(map, tmp14, set);
                      if (tmp23 !== tmp14) {
                        let result1 = map1.set(tmp14, tmp24);
                      }
                    }
                  }
                }
                continue;
              }
              if (map1.size) {
                const seen3 = seen.seen;
                const values2 = seen3.values();
                for (const item10086 of values2) {
                  items = [, ];
                  ({ schema: arr2[0], def: arr2[1] } = item10086);
                  for (const item10094 of items) {
                    let tmp33 = item10094;
                    if (item10094) {
                      let item10094 = map1.get(tmp33.propertyNames);
                    }
                    if (item10094) {
                      tmp33.propertyNames = tmp35;
                    }
                    continue;
                  }
                  continue;
                }
              }
              tmp6 = items1[Symbol.iterator]();
            })(closure_0);
          });
          value = items3;
        }
        value.push(_zod);
      }
      const obj4 = {};
      const merged2 = Object.assign(path);
      const items4 = [];
      items4[HermesBuiltin.arraySpread(path.path, 0)] = "additionalProperties";
      obj4.path = items4;
      patternProperties.additionalProperties = BIGINT_FORMAT_RANGES(12236).processSchema(def.valueType, io, obj4);
    };
    exports.nullableProcessor = (_zod, target, arg2, path) => {
      const def = _zod._zod.def;
      if ("openapi-3.0" === target.target) {
        tmp2.ref = def.innerType;
        arg2.nullable = true;
      } else {
        items = [processSchemaResult, { type: "null" }];
        arg2.anyOf = items;
      }
    };
    exports.nonoptionalProcessor = (_zod, seen, arg2, path) => {
      const def = _zod._zod.def;
      BIGINT_FORMAT_RANGES(12236).processSchema(def.innerType, seen, path);
      seen = seen.seen;
      seen.get(_zod).ref = def.innerType;
    };
    const _Symbol = Symbol;
    let closure_25 = Symbol();
    exports.defaultProcessor = (_zod, seen, properties, path) => {
      const def = _zod._zod.def;
      BIGINT_FORMAT_RANGES(12236).processSchema(def.innerType, seen, path);
      seen = seen.seen;
      seen.get(_zod).ref = def.innerType;
      c0 = false;
      if (c0) {
        const result = BIGINT_FORMAT_RANGES(12236).handleUnrepresentable(_zod, seen, properties, path, "BigInt defaults cannot be represented in JSON Schema");
        let parsed = closure_25;
      } else {
        const _JSON = JSON;
        parsed = JSON.parse(tmp4);
      }
      if (parsed !== closure_25) {
        properties.default = parsed;
      }
    };
    exports.prefaultProcessor = (_zod, seen, properties, path) => {
      const def = _zod._zod.def;
      BIGINT_FORMAT_RANGES(12236).processSchema(def.innerType, seen, path);
      seen = seen.seen;
      seen.get(_zod).ref = def.innerType;
      if ("input" === seen.io) {
        c0 = false;
        const _JSON2 = JSON;
        if (c0) {
          const result = BIGINT_FORMAT_RANGES(12236).handleUnrepresentable(_zod, seen, properties, path, "BigInt defaults cannot be represented in JSON Schema");
          let parsed = closure_25;
        } else {
          const _JSON = JSON;
          parsed = JSON.parse(tmp13);
        }
        if (parsed !== closure_25) {
          properties._prefault = parsed;
        }
      }
    };
    exports.catchProcessor = (_zod, seen, arg2, path) => {
      const def = _zod._zod.def;
      BIGINT_FORMAT_RANGES(12236).processSchema(def.innerType, seen, path);
      seen = seen.seen;
      seen.get(_zod).ref = def.innerType;
      try {
        arg2.default = def.catchValue(undefined);
      } catch (err) {
        const result = tmp2(tmp[6]).handleUnrepresentable(tmp7, tmp6, tmp5, tmp4, "Dynamic catch values are not supported in JSON Schema");
      }
    };
    exports.pipeProcessor = (_zod, io, arg2, path) => {
      const def = _zod._zod.def;
      const traits = def.in._zod.traits;
      if ("input" === io.io) {
        traits.has("$ZodTransform") ? def.out : def.in;
      } else {
        const out = def.out;
        BIGINT_FORMAT_RANGES(12236).processSchema(out, io, path);
        const seen = io.seen;
        seen.get(_zod).ref = out;
      }
    };
    exports.readonlyProcessor = (_zod, seen, arg2, path) => {
      const def = _zod._zod.def;
      BIGINT_FORMAT_RANGES(12236).processSchema(def.innerType, seen, path);
      seen = seen.seen;
      seen.get(_zod).ref = def.innerType;
      arg2.readOnly = true;
    };
    exports.promiseProcessor = (_zod, seen, arg2, path) => {
      const def = _zod._zod.def;
      BIGINT_FORMAT_RANGES(12236).processSchema(def.innerType, seen, path);
      seen = seen.seen;
      seen.get(_zod).ref = def.innerType;
    };
    exports.optionalProcessor = (_zod, seen, arg2, path) => {
      const def = _zod._zod.def;
      BIGINT_FORMAT_RANGES(12236).processSchema(def.innerType, seen, path);
      seen = seen.seen;
      seen.get(_zod).ref = def.innerType;
    };
    exports.lazyProcessor = (_zod, seen, arg2, path) => {
      const innerType = _zod._zod.innerType;
      BIGINT_FORMAT_RANGES(12236).processSchema(innerType, seen, path);
      seen = seen.seen;
      seen.get(_zod).ref = innerType;
    };
    ({ stringProcessor: obj2.string, numberProcessor: obj2.number, booleanProcessor: obj2.boolean, bigintProcessor: obj2.bigint, symbolProcessor: obj2.symbol, nullProcessor: obj2.null, undefinedProcessor: obj2.undefined, voidProcessor: obj2.void, neverProcessor: obj2.never, anyProcessor: obj2.any, unknownProcessor: obj2.unknown, dateProcessor: obj2.date, enumProcessor: obj2.enum, literalProcessor: obj2.literal, nanProcessor: obj2.nan, templateLiteralProcessor: obj2.template_literal, fileProcessor: obj2.file, successProcessor: obj2.success, customProcessor: obj2.custom, functionProcessor: obj2.function, transformProcessor: obj2.transform, mapProcessor: obj2.map, setProcessor: obj2.set, arrayProcessor: obj2.array, objectProcessor: obj2.object, unionProcessor: obj2.union, intersectionProcessor: obj2.intersection, tupleProcessor: obj2.tuple, recordProcessor: obj2.record, nullableProcessor: obj2.nullable, nonoptionalProcessor: obj2.nonoptional, defaultProcessor: obj2.default, prefaultProcessor: obj2.prefault, catchProcessor: obj2.catch, pipeProcessor: obj2.pipe, readonlyProcessor: obj2.readonly, promiseProcessor: obj2.promise, optionalProcessor: obj2.optional, lazyProcessor: obj2.lazy } = exports);
    exports.allProcessors = { string: null, number: null, boolean: null, bigint: null, symbol: null, null: null, undefined: null, void: null, never: null, any: null, unknown: null, date: null, enum: null, literal: null, nan: null, template_literal: null, file: null, success: null, custom: null, function: null, transform: null, map: null, set: null, array: null, object: null, union: null, intersection: null, tuple: null, record: null, nullable: null, nonoptional: null, default: null, prefault: null, catch: null, pipe: null, readonly: null, promise: null, optional: null, lazy: null };
    (() => {
      let tmp = exports;
      const ownPropertyNames = Object.getOwnPropertyNames(exports);
      let num = 0;
      if (0 < ownPropertyNames.length) {
        const _Object = Object;
        const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(exports, ownPropertyNames[num]);
        if (ownPropertyDescriptor) {
          if (ownPropertyDescriptor.get) {
            if (ownPropertyDescriptor.configurable) {
              try {
                value = ownPropertyDescriptor.get();
                if (undefined !== value) {
                  const _Object2 = Object;
                  obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
                  Object.defineProperty(exports, ownPropertyNames[num], obj);
                }
              } catch (err) {
              }
            }
          }
        }
        num = num + 1;
        tmp = exports;
      }
      const frozen = Object.freeze(tmp);
    })();
  } else {
    let _Object2 = Object;
  }
} else {
  let _Object = Object;
}