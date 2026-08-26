// === Module 12702: stringProcessor ===

// Module 12702 (stringProcessor)
import mergeDefs from "mergeDefs" /* 12643 */;
import initializeContext from "initializeContext" /* 12701 */;
import closure_3 from "_slicedToArray" /* 32 */;

let closure_4 = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" };

export const toJSONSchema = function toJSONSchema(_idmap, uri) {
  let obj = {};
  const merged = Object.assign(uri);
  obj.processors = exports.allProcessors;
  const initializeContextResult = initializeContext.initializeContext(obj);
  if (tmp) {
    _idmap = _idmap._idmap;
    const entries = _idmap.entries();
    const tmp10 = entries[Symbol.iterator]();
    while (tmp10 !== undefined) {
      let tmp14 = callback;
      let tmp15 = callback(tmp12, 2);
      let first = tmp15[0];
      let tmp17 = require;
      let tmp18 = dependencyMap;
      let processResult = initializeContext.process(tmp15[1], initializeContextResult);
      continue;
    }
    obj = {};
    obj = { registry: null, uri: null, defs: null };
    obj[0] = _idmap;
    uri = undefined;
    if (uri != null) {
      uri = uri.uri;
    }
    obj1 = {};
    obj[1] = uri;
    obj[2] = obj1;
    initializeContextResult.external = obj;
    const _idmap2 = _idmap._idmap;
    const entries1 = _idmap2.entries();
    for (const item10061 of entries1) {
      let tmp25 = callback;
      let tmp26 = callback(item10061, 2);
      let tmp27 = tmp26[1];
      let tmp28 = require;
      let tmp29 = dependencyMap;
      let extractDefsResult = initializeContext.extractDefs(initializeContextResult, tmp27);
      obj[tmp26[0]] = initializeContext.finalize(initializeContextResult, tmp27);
      continue;
    }
    const _Object = Object;
    if (Object.keys(obj1).length > 0) {
      let str = "definitions";
      if ("draft-2020-12" === initializeContextResult.target) {
        str = "$defs";
      }
      const obj2 = {};
      obj2[str] = obj1;
      obj.__shared = obj2;
    }
    const obj3 = { schemas: null };
    obj3[0] = obj;
    return obj3;
  } else {
    tmp2(12701).process(_idmap, initializeContextResult);
    tmp2(12701).extractDefs(initializeContextResult, _idmap);
    return tmp2(12701).finalize(initializeContextResult, _idmap);
  }
  tmp = "_idmap" in _idmap;
};
export const stringProcessor = (_zod, arg1, format) => {
  closure_0 = arg1;
  format.type = "string";
  ({ minimum, maximum, format, patterns, contentEncoding } = _zod._zod.bag);
  if (typeof minimum === "number") {
    format.minLength = minimum;
  }
  if (typeof maximum === "number") {
    format.maxLength = maximum;
  }
  if (format) {
    let tmp4 = table[format];
    if (tmp4 == null) {
      tmp4 = format;
    }
    format.format = tmp4;
    if ("" === format.format) {
      delete tmp[tmp2];
    }
    if ("time" === format) {
      delete tmp[tmp2];
    }
  }
  if (contentEncoding) {
    format.contentEncoding = contentEncoding;
  }
  if (patterns) {
    if (patterns.size > 0) {
      const items = [];
      HermesBuiltin.arraySpread(patterns, 0);
      if (1 === items.length) {
        format.pattern = items[0].source;
      } else if (items.length > 1) {
        const items1 = [];
        HermesBuiltin.arraySpread(items.map((source) => {
          if ("draft-07" !== target.target) {
            if ("draft-04" !== tmp.target) {
              if ("openapi-3.0" !== tmp.target) {
                let obj = {};
              }
              obj = {};
              const merged = Object.assign(obj);
              obj.pattern = source.source;
              return obj;
            }
          }
          obj = { type: "string" };
        }), 0);
        format.allOf = items1;
      }
    }
  }
};
export const numberProcessor = (_zod, target) => {
  ({ minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = _zod._zod.bag);
  if (typeof format === "string") {
    if (format.includes("int")) {
      arg2.type = "integer";
    }
    if (typeof exclusiveMinimum === "number") {
      if ("draft-04" !== target.target) {
        if ("openapi-3.0" !== target.target) {
          arg2.exclusiveMinimum = exclusiveMinimum;
        }
      }
      arg2.minimum = exclusiveMinimum;
      arg2.exclusiveMinimum = true;
    }
    if (typeof minimum === "number") {
      let tmp5 = typeof exclusiveMinimum === "number";
      arg2.minimum = minimum;
      if (typeof exclusiveMinimum === "number") {
        tmp5 = "draft-04" !== target.target;
      }
      if (tmp5) {
        if (exclusiveMinimum >= minimum) {
          delete tmp[tmp3];
        } else {
          delete tmp[tmp3];
        }
      }
    }
    if (typeof exclusiveMaximum === "number") {
      if ("draft-04" !== target.target) {
        if ("openapi-3.0" !== target.target) {
          arg2.exclusiveMaximum = exclusiveMaximum;
        }
      }
      arg2.maximum = exclusiveMaximum;
      arg2.exclusiveMaximum = true;
    }
    if (typeof maximum === "number") {
      let tmp6 = typeof exclusiveMaximum === "number";
      arg2.maximum = maximum;
      if (typeof exclusiveMaximum === "number") {
        tmp6 = "draft-04" !== target.target;
      }
      if (tmp6) {
        if (exclusiveMaximum <= maximum) {
          delete tmp[tmp2];
        } else {
          delete tmp[tmp2];
        }
      }
    }
    if (typeof multipleOf === "number") {
      arg2.multipleOf = multipleOf;
    }
  }
  arg2.type = "number";
};
export const booleanProcessor = (arg0, arg1, arg2, arg3) => {
  arg2.type = "boolean";
};
export const bigintProcessor = (arg0, unrepresentable) => {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    error = new Error("BigInt cannot be represented in JSON Schema");
    throw error;
  }
};
export const symbolProcessor = (arg0, unrepresentable) => {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    error = new Error("Symbols cannot be represented in JSON Schema");
    throw error;
  }
};
export const nullProcessor = (arg0, target) => {
  if ("openapi-3.0" === target.target) {
    arg2.type = "string";
    arg2.nullable = true;
    arg2.enum = [null];
  } else {
    arg2.type = "null";
  }
};
export const undefinedProcessor = (arg0, unrepresentable) => {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    error = new Error("Undefined cannot be represented in JSON Schema");
    throw error;
  }
};
export const voidProcessor = (arg0, unrepresentable) => {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    error = new Error("Void cannot be represented in JSON Schema");
    throw error;
  }
};
export const neverProcessor = (arg0, arg1, arg2, arg3) => {
  arg2.not = {};
};
export (arg0, arg1, arg2, arg3) => {

}
export const dateProcessor = (arg0, unrepresentable) => {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    error = new Error("Date cannot be represented in JSON Schema");
    throw error;
  }
};
export const enumProcessor = (_zod) => {
  const enumValues = mergeDefs.getEnumValues(_zod._zod.def.entries);
  if (enumValues.every((num) => typeof num === "number")) {
    arg2.type = "number";
  }
  if (enumValues.every((str) => typeof str === "string")) {
    arg2.type = "string";
  }
  arg2.enum = enumValues;
};
export const literalProcessor = (arg0, unrepresentable) => {
  const items = [];
  const iter = arg0._zod.def.values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (undefined === nextResult) {
      if ("throw" === unrepresentable.unrepresentable) {
        let _Error2 = Error;
        let tmp10 = new.target;
        let str2 = "Literal `undefined` cannot be represented in JSON Schema";
        let tmp11 = new.target;
        error = new Error("Literal `undefined` cannot be represented in JSON Schema");
        let tmp13 = error;
        throw error;
      }
    } else {
      let tmp3 = nextResult;
      if (typeof tmp2 === "bigint") {
        if ("throw" === unrepresentable.unrepresentable) {
          let _Error = Error;
          let tmp6 = new.target;
          let str = "BigInt literals cannot be represented in JSON Schema";
          let tmp7 = new.target;
          let error1 = new Error("BigInt literals cannot be represented in JSON Schema");
          let tmp9 = error1;
          throw error1;
        } else {
          let _Number = Number;
          let tmp4 = nextResult;
          let arr = items.push(Number(tmp2));
        }
      } else {
        let tmp16 = nextResult;
        arr = items.push(tmp2);
      }
    }
    continue;
  }
  if (0 !== items.length) {
    if (1 === items.length) {
      const first = items[0];
      let str7 = "null";
      if (null !== first) {
        str7 = typeof first;
      }
      arg2.type = str7;
      if ("draft-04" !== unrepresentable.target) {
        if ("openapi-3.0" !== unrepresentable.target) {
          arg2.const = first;
        }
      }
      const items1 = [first];
      arg2.enum = items1;
    } else {
      if (items.every((num) => typeof num === "number")) {
        arg2.type = "number";
      }
      if (items.every((str) => typeof str === "string")) {
        arg2.type = "string";
      }
      if (items.every((flag) => typeof flag === "boolean")) {
        arg2.type = "boolean";
      }
      if (items.every((arg0) => null === arg0)) {
        arg2.type = "null";
      }
      arg2.enum = items;
    }
  }
};
export const nanProcessor = (arg0, unrepresentable) => {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    error = new Error("NaN cannot be represented in JSON Schema");
    throw error;
  }
};
export const templateLiteralProcessor = (_zod) => {
  const pattern = _zod._zod.pattern;
  if (pattern) {
    arg2.type = "string";
    arg2.pattern = pattern.source;
  } else {
    const _Error = Error;
    error = new Error("Pattern not found in template literal");
    throw error;
  }
};
export const fileProcessor = (_zod) => {
  const obj = { type: "string", format: "binary", contentEncoding: "binary" };
  ({ minimum, maximum, mime } = _zod._zod.bag);
  if (undefined !== minimum) {
    obj.minLength = minimum;
  }
  if (undefined !== maximum) {
    obj.maxLength = maximum;
  }
  if (mime) {
    if (1 === mime.length) {
      obj.contentMediaType = mime[0];
      const _Object3 = Object;
      const merged = Object.assign(arg2, obj);
    } else {
      const _Object2 = Object;
      const merged1 = Object.assign(arg2, obj);
      arg2.anyOf = mime.map((contentMediaType) => ({ contentMediaType }));
    }
  } else {
    const _Object = Object;
    const merged2 = Object.assign(arg2, obj);
  }
};
export const successProcessor = (arg0, arg1, arg2, arg3) => {
  arg2.type = "boolean";
};
export const customProcessor = (arg0, unrepresentable) => {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    error = new Error("Custom types cannot be represented in JSON Schema");
    throw error;
  }
};
export const functionProcessor = (arg0, unrepresentable) => {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    error = new Error("Function types cannot be represented in JSON Schema");
    throw error;
  }
};
export const transformProcessor = (arg0, unrepresentable) => {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    error = new Error("Transforms cannot be represented in JSON Schema");
    throw error;
  }
};
export const mapProcessor = (arg0, unrepresentable) => {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    error = new Error("Map cannot be represented in JSON Schema");
    throw error;
  }
};
export const setProcessor = (arg0, unrepresentable) => {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    error = new Error("Set cannot be represented in JSON Schema");
    throw error;
  }
};
export const arrayProcessor = (_zod, arg1, arg2, path) => {
  ({ minimum, maximum } = _zod._zod.bag);
  if (typeof minimum === "number") {
    arg2.minItems = minimum;
  }
  if (typeof maximum === "number") {
    arg2.maxItems = maximum;
  }
  arg2.type = "array";
  const obj = {};
  const merged = Object.assign(path);
  const items = [];
  items[HermesBuiltin.arraySpread(path.path, 0)] = "items";
  obj.path = items;
  arg2.items = initializeContext.process(_zod._zod.def.element, arg1, obj);
};
export const objectProcessor = (_zod, io, properties, path) => {
  const _require = io;
  const def = _zod._zod.def;
  properties.type = "object";
  properties.properties = {};
  const shape = def.shape;
  for (const key10015 in shape) {
    let tmp10 = key10015;
    let tmp11 = _require;
    let tmp12 = dependencyMap;
    let obj = {};
    let tmp13 = obj;
    let tmp14 = arg3;
    let merged = Object.assign(arg3);
    let items = [, ];
    let tmp16 = items;
    let num2 = 0;
    let arraySpreadResult = HermesBuiltin.arraySpread(arg3.path, 0);
    items[arraySpreadResult] = "properties";
    items[arraySpreadResult + 1] = key10015;
    obj.path = items;
    arg2.properties[key10015] = _require(12701).process(shape[key10015], arg1, obj);
    continue;
  }
  const items1 = [...new Set(Object.keys(shape))];
  const set1 = new Set(items1.filter((arg0) => {
    const _zod = def.shape[arg0]._zod;
    if ("input" === io.io) {
      let tmp = undefined === _zod.optin;
    } else {
      tmp = undefined === _zod.optout;
    }
    return tmp;
  }));
  if (set1.size > 0) {
    const _Array = Array;
    properties.required = Array.from(set1);
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
      properties.additionalProperties = _require(12701).process(def.catchall, io, obj);
    }
  } else if ("output" === io.io) {
    properties.additionalProperties = false;
  }
};
export const unionProcessor = (_zod) => {
  closure_0 = arg1;
  closure_1 = arg3;
  const def = _zod._zod.def;
  closure_2 = tmp;
  const options = def.options;
  const mapped = options.map((arg0, arg1) => {
    const obj = {};
    const merged = Object.assign(path);
    const items = [...closure_1.path];
    let str = "anyOf";
    if (table) {
      str = "oneOf";
    }
    items[tmp3] = str;
    items[tmp3 + 1] = arg1;
    obj.path = items;
    return callback(table[2]).process(arg0, callback, obj);
  });
  if (false === def.inclusive) {
    arg2.oneOf = mapped;
  } else {
    arg2.anyOf = mapped;
  }
};
export const intersectionProcessor = (_zod, arg1, arg2, path) => {
  const def = _zod._zod.def;
  let obj = {};
  const merged = Object.assign(path);
  const items = [...path.path, "allOf", 0];
  obj.path = items;
  const processResult = initializeContext.process(def.left, arg1, obj);
  obj = {};
  const merged1 = Object.assign(path);
  const items1 = [...path.path, "allOf", 1];
  obj.path = items1;
  const processResult1 = initializeContext.process(def.right, arg1, obj);
  let tmp5 = "allOf" in processResult;
  if (tmp5) {
    const _Object = Object;
    tmp5 = 1 === Object.keys(processResult).length;
  }
  if (tmp5) {
    let allOf = processResult.allOf;
  } else {
    allOf = [processResult];
  }
  const items2 = [...allOf];
  let tmp8 = "allOf" in processResult1;
  if (tmp8) {
    const _Object2 = Object;
    tmp8 = 1 === Object.keys(processResult1).length;
  }
  if (tmp8) {
    let allOf1 = processResult1.allOf;
  } else {
    allOf1 = [processResult1];
  }
  HermesBuiltin.arraySpread(allOf1, tmp7);
  arg2.allOf = items2;
};
export const tupleProcessor = (_zod, target, items, path) => {
  const _require = target;
  closure_1 = path;
  let def = _zod._zod.def;
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
  const mapped = items.map((arg0, arg1) => {
    const obj = {};
    const merged = Object.assign(path);
    const items = [...closure_1.path, str, arg1];
    obj.path = items;
    return target(str[2]).process(arg0, target, obj);
  });
  if (!def.rest) {
    if ("draft-2020-12" === target.target) {
      items.prefixItems = mapped;
      if (null) {
        items.items = null;
      }
    } else if ("openapi-3.0" === target.target) {
      let obj = { anyOf: null };
      obj[0] = mapped;
      items.items = obj;
      if (null) {
        const anyOf = items.items.anyOf;
        anyOf.push(null);
      }
      items.minItems = mapped.length;
      if (!null) {
        items.maxItems = mapped.length;
      }
    } else {
      items.items = mapped;
      if (null) {
        items.additionalItems = null;
      }
    }
    ({ minimum, maximum } = _zod._zod.bag);
    if (typeof minimum === "number") {
      items.minItems = minimum;
    }
    if (typeof maximum === "number") {
      items.maxItems = maximum;
    }
  } else {
    obj = {};
    let merged = Object.assign(path);
    const items1 = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(path.path, 0);
    items1[arraySpreadResult] = str2;
    if ("openapi-3.0" === target.target) {
      def = [];
      def[0] = def.items.length;
      let items2 = def;
    } else {
      items2 = [];
    }
    arraySpreadResult = HermesBuiltin.arraySpread(items2, arraySpreadResult + 1);
    obj.path = items1;
    _require(str[2]).process(def.rest, target, obj);
  }
};
export const recordProcessor = (_zod, target, patternProperties, path) => {
  const def = _zod._zod.def;
  patternProperties.type = "object";
  const keyType = def.keyType;
  const bag = keyType._zod.bag;
  if (bag != null) {
    const patterns = bag.patterns;
  }
  if ("loose" === def.mode) {
    if (patterns) {
      if (patterns.size > 0) {
        let obj = {};
        const _process = initializeContext.process;
        const valueType = def.valueType;
        const merged = Object.assign(path);
        const items = [, ];
        let arraySpreadResult = HermesBuiltin.arraySpread(path.path, 0);
        items[arraySpreadResult] = "patternProperties";
        items[arraySpreadResult + 1] = "*";
        obj.path = items;
        patternProperties.patternProperties = {};
        for (const item10081 of patterns) {
          arg2.patternProperties[item10081.source] = tmp16;
          continue;
        }
      }
      const values = keyType._zod.values;
      if (values) {
        const items1 = [];
        arraySpreadResult = HermesBuiltin.arraySpread(values, 0);
        const found = items1.filter((str) => {
          let tmp = typeof str === "string";
          if (typeof str !== "string") {
            tmp = typeof str === "number";
          }
          return tmp;
        });
        if (found.length > 0) {
          patternProperties.required = found;
        }
      }
    }
  }
  let tmp = "draft-07" !== target.target;
  if (tmp) {
    tmp = "draft-2020-12" !== target.target;
  }
  if (!tmp) {
    obj = {};
    const merged1 = Object.assign(path);
    const items2 = [];
    items2[HermesBuiltin.arraySpread(path.path, 0)] = "propertyNames";
    obj.path = items2;
    patternProperties.propertyNames = initializeContext.process(def.keyType, target, obj);
  }
  obj = {};
  const merged2 = Object.assign(path);
  const items3 = [];
  items3[HermesBuiltin.arraySpread(path.path, 0)] = "additionalProperties";
  obj.path = items3;
  patternProperties.additionalProperties = initializeContext.process(def.valueType, target, obj);
};
export const nullableProcessor = (_zod, target) => {
  const def = _zod._zod.def;
  if ("openapi-3.0" === target.target) {
    tmp2.ref = def.innerType;
    arg2.nullable = true;
  } else {
    const items = [processResult, { type: "null" }];
    arg2.anyOf = items;
  }
};
export const nonoptionalProcessor = (_zod, seen) => {
  const def = _zod._zod.def;
  initializeContext.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
};
export const defaultProcessor = (_zod, seen) => {
  const def = _zod._zod.def;
  initializeContext.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
  arg2.default = JSON.parse(JSON.stringify(def.defaultValue));
};
export const prefaultProcessor = (_zod, seen) => {
  const def = _zod._zod.def;
  initializeContext.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
  if ("input" === seen.io) {
    const _JSON = JSON;
    const _JSON2 = JSON;
    arg2._prefault = JSON.parse(JSON.stringify(def.defaultValue));
  }
};
export const catchProcessor = (_zod, seen) => {
  const def = _zod._zod.def;
  initializeContext.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
  try {
    arg2.default = def.catchValue(undefined);
  } catch (err) {
    const _Error = Error;
    error = new Error("Dynamic catch values are not supported in JSON Schema");
    throw error;
  }
};
export const pipeProcessor = (_zod, io) => {
  const def = _zod._zod.def;
  if ("input" !== io.io) {
    const out = def.out;
    initializeContext.process(out, io, arg3);
    const seen = io.seen;
    seen.get(_zod).ref = out;
  }
};
export const readonlyProcessor = (_zod, seen) => {
  const def = _zod._zod.def;
  initializeContext.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
  arg2.readOnly = true;
};
export const promiseProcessor = (_zod, seen) => {
  const def = _zod._zod.def;
  initializeContext.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
};
export const optionalProcessor = (_zod, seen) => {
  const def = _zod._zod.def;
  initializeContext.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
};
export const lazyProcessor = (_zod, seen) => {
  const innerType = _zod._zod.innerType;
  initializeContext.process(innerType, seen, arg3);
  seen = seen.seen;
  seen.get(_zod).ref = innerType;
};
export const allProcessors = { string: exports.stringProcessor, number: exports.numberProcessor, boolean: exports.booleanProcessor, bigint: exports.bigintProcessor, symbol: exports.symbolProcessor, null: exports.nullProcessor, undefined: exports.undefinedProcessor, void: exports.voidProcessor, never: exports.neverProcessor, any: exports.anyProcessor, unknown: exports.unknownProcessor, date: exports.dateProcessor, enum: exports.enumProcessor, literal: exports.literalProcessor, nan: exports.nanProcessor, template_literal: exports.templateLiteralProcessor, file: exports.fileProcessor, success: exports.successProcessor, custom: exports.customProcessor, function: exports.functionProcessor, transform: exports.transformProcessor, map: exports.mapProcessor, set: exports.setProcessor, array: exports.arrayProcessor, object: exports.objectProcessor, union: exports.unionProcessor, intersection: exports.intersectionProcessor, tuple: exports.tupleProcessor, record: exports.recordProcessor, nullable: exports.nullableProcessor, nonoptional: exports.nonoptionalProcessor, default: exports.defaultProcessor, prefault: exports.prefaultProcessor, catch: exports.catchProcessor, pipe: exports.pipeProcessor, readonly: exports.readonlyProcessor, promise: exports.promiseProcessor, optional: exports.optionalProcessor, lazy: exports.lazyProcessor };