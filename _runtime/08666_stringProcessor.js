// _runtime/08666_stringProcessor.js
import captureStackTrace from "08607_captureStackTrace.js";
import _mod8665 from "metro/08665__.js";
import _slicedToArray from "metro/00032__slicedToArray.js";

const require = globalThis.__r;
let _require;

let closure_4 = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" };

export const toJSONSchema = function toJSONSchema(_idmap, uri) {
  let first1;
  let obj4;
  let tmp28;
  const obj = { processors: exports.allProcessors };
  const tmp = "_idmap" in _idmap;
  const initializeContext = _mod8665.initializeContext;
  const merged = Object.assign(uri);
  const initializeContextResult = initializeContext(obj);
  if (tmp) {
    _idmap = _idmap._idmap;
    const entries = _idmap.entries();
    const tmp10 = entries[Symbol.iterator]();
    while (tmp10 !== undefined) {
      let tmp15 = _slicedToArray(tmp12, 2);
      let first = tmp15[0];
      let processResult = _mod8665.process(tmp15[1], initializeContextResult);
      continue;
    }
    const obj2 = {};
    const obj3 = { registry: _idmap, uri, defs: obj4 };
    uri = undefined;
    if (uri != null) {
      uri = uri.uri;
    }
    obj4 = {};
    initializeContextResult.external = obj3;
    const _idmap2 = _idmap._idmap;
    const entries1 = _idmap2.entries();
    for (const item10061 of entries1) {
      [first1, tmp28] = item10061;
      let extractDefsResult = _mod8665.extractDefs(initializeContextResult, tmp28);
      obj2[first1] = _mod8665.finalize(initializeContextResult, tmp28);
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
    return { schemas: obj2 };
  } else {
    _mod8665.process(_idmap, initializeContextResult);
    _mod8665.extractDefs(initializeContextResult, _idmap);
    return _mod8665.finalize(initializeContextResult, _idmap);
  }
};
export const stringProcessor = (_zod, arg1, format, arg3) => {
  let contentEncoding;
  let maximum;
  let minimum;
  let patterns;
  let closure_0 = arg1;
  format.type = "string";
  ({ minimum, maximum, format, patterns, contentEncoding } = _zod._zod.bag);
  if (typeof minimum === "number") {
    format.minLength = minimum;
  }
  if (typeof maximum === "number") {
    format.maxLength = maximum;
  }
  if (format) {
    let tmp4 = closure_4[format];
    if (tmp4 == null) {
      tmp4 = format;
    }
    format.format = tmp4;
    if ("" === format.format) {
      delete format["format"];
    }
    if ("time" === format) {
      delete format["format"];
    }
  }
  if (contentEncoding) {
    format.contentEncoding = contentEncoding;
  }
  if (patterns) {
    if (patterns.size > 0) {
      const items = [];
      HermesBuiltin.arraySpread(items, patterns, 0);
      if (1 === items.length) {
        format.pattern = items[0].source;
      } else if (items.length > 1) {
        const items1 = [];
        HermesBuiltin.arraySpread(
          items1,
          items.map((source) => {
            if ("draft-07" !== target.target) {
              if ("draft-04" !== target.target) {
                let obj;
                if ("openapi-3.0" !== target.target) {
                  obj = {};
                }
                const obj2 = { pattern: source.source };
                const merged = Object.assign(obj);
                return obj2;
              }
            }
            obj = { type: "string" };
          }),
          0,
        );
        format.allOf = items1;
      }
    }
  }
};
export const numberProcessor = (_zod, target, arg2, arg3) => {
  let exclusiveMaximum;
  let exclusiveMinimum;
  let format;
  let maximum;
  let minimum;
  let multipleOf;
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
      let tmp3 = typeof exclusiveMinimum === "number";
      arg2.minimum = minimum;
      if (typeof exclusiveMinimum === "number") {
        tmp3 = "draft-04" !== target.target;
      }
      if (tmp3) {
        if (exclusiveMinimum >= minimum) {
          delete arg2["minimum"];
        } else {
          delete arg2["exclusiveMinimum"];
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
      let tmp4 = typeof exclusiveMaximum === "number";
      arg2.maximum = maximum;
      if (typeof exclusiveMaximum === "number") {
        tmp4 = "draft-04" !== target.target;
      }
      if (tmp4) {
        if (exclusiveMaximum <= maximum) {
          delete arg2["maximum"];
        } else {
          delete arg2["exclusiveMaximum"];
        }
      }
    }
    if (typeof multipleOf === "number") {
      arg2.multipleOf = multipleOf;
    }
  }
  arg2.type = "number";
};
export const booleanProcessor = (_zod, arg1, arg2, arg3) => {
  arg2.type = "boolean";
};
export const bigintProcessor = function (_zod, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("BigInt cannot be represented in JSON Schema");
    throw error;
  }
};
export const symbolProcessor = function (_zod, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Symbols cannot be represented in JSON Schema");
    throw error;
  }
};
export const nullProcessor = (_zod, target, arg2, arg3) => {
  if ("openapi-3.0" === target.target) {
    arg2.type = "string";
    arg2.nullable = true;
    arg2.enum = [null];
  } else {
    arg2.type = "null";
  }
};
export const undefinedProcessor = function (_zod, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Undefined cannot be represented in JSON Schema");
    throw error;
  }
};
export const voidProcessor = function (_zod, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Void cannot be represented in JSON Schema");
    throw error;
  }
};
export const neverProcessor = (_zod, arg1, arg2, arg3) => {
  arg2.not = {};
};
export const anyProcessor = (_zod, arg1, arg2, arg3) => {};
export const unknownProcessor = (_zod, arg1, arg2, arg3) => {};
export const dateProcessor = function (_zod, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Date cannot be represented in JSON Schema");
    throw error;
  }
};
export const enumProcessor = (_zod, arg1, arg2, arg3) => {
  const enumValues = captureStackTrace.getEnumValues(_zod._zod.def.entries);
  if (enumValues.every((item) => typeof item === "number")) {
    arg2.type = "number";
  }
  if (enumValues.every((item) => typeof item === "string")) {
    arg2.type = "string";
  }
  arg2.enum = enumValues;
};
export const literalProcessor = function (_zod, unrepresentable, arg2, arg3) {
  const items = [];
  const iter = _zod._zod.def.values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (undefined === nextResult) {
      if ("throw" === unrepresentable.unrepresentable) {
        let _Error2 = Error;
        let self3 = this;
        let str2 = "Literal `undefined` cannot be represented in JSON Schema";
        let self4 = this;
        let error = new Error("Literal `undefined` cannot be represented in JSON Schema");
        throw error;
      }
    } else if (typeof tmp2 === "bigint") {
      if ("throw" === unrepresentable.unrepresentable) {
        let _Error = Error;
        let self = this;
        let str = "BigInt literals cannot be represented in JSON Schema";
        let self2 = this;
        let error1 = new Error("BigInt literals cannot be represented in JSON Schema");
        throw error1;
      } else {
        let _Number = Number;
        let arr = items.push(Number(tmp2));
      }
    } else {
      let arr2 = items.push(tmp2);
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
      if (items.every((item) => typeof item === "number")) {
        arg2.type = "number";
      }
      if (items.every((item) => typeof item === "string")) {
        arg2.type = "string";
      }
      if (items.every((flag) => typeof flag === "boolean")) {
        arg2.type = "boolean";
      }
      if (items.every((item) => null === item)) {
        arg2.type = "null";
      }
      arg2.enum = items;
    }
  }
};
export const nanProcessor = function (_zod, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("NaN cannot be represented in JSON Schema");
    throw error;
  }
};
export const templateLiteralProcessor = function (_zod, arg1, arg2, arg3) {
  const pattern = _zod._zod.pattern;
  if (pattern) {
    arg2.type = "string";
    arg2.pattern = pattern.source;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Pattern not found in template literal");
    throw error;
  }
};
export const fileProcessor = (_zod, arg1, arg2, arg3) => {
  let maximum;
  let mime;
  let minimum;
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
export const successProcessor = (_zod, arg1, arg2, arg3) => {
  arg2.type = "boolean";
};
export const customProcessor = function (_zod, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Custom types cannot be represented in JSON Schema");
    throw error;
  }
};
export const functionProcessor = function (_zod, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Function types cannot be represented in JSON Schema");
    throw error;
  }
};
export const transformProcessor = function (constructor, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Transforms cannot be represented in JSON Schema");
    throw error;
  }
};
export const mapProcessor = function (_zod, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Map cannot be represented in JSON Schema");
    throw error;
  }
};
export const setProcessor = function (_zod, unrepresentable, arg2, arg3) {
  if ("throw" === unrepresentable.unrepresentable) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Set cannot be represented in JSON Schema");
    throw error;
  }
};
export const arrayProcessor = (_zod, arg1, arg2, path) => {
  let items;
  let maximum;
  let minimum;
  ({ minimum, maximum } = _zod._zod.bag);
  const def = _zod._zod.def;
  if (typeof minimum === "number") {
    arg2.minItems = minimum;
  }
  if (typeof maximum === "number") {
    arg2.maxItems = maximum;
  }
  arg2.type = "array";
  const obj = { path: items };
  const _process = _mod8665.process;
  const element = def.element;
  const merged = Object.assign(path);
  items = [];
  items[HermesBuiltin.arraySpread(items, path.path, 0)] = "items";
  arg2.items = _process(element, arg1, obj);
};
export const objectProcessor = (_zod, io, properties, path) => {
  let items2;
  let closure_0 = io;
  const def = _zod._zod.def;
  properties.type = "object";
  properties.properties = {};
  const shape = def.shape;
  for (const key10015 in shape) {
    properties = properties.properties;
    let obj2 = { path: items };
    let _process2 = _mod8665.process;
    let tmp14 = shape[key10015];
    let merged = Object.assign(path);
    let items = [,];
    let arraySpreadResult = HermesBuiltin.arraySpread(items, path.path, 0);
    items[arraySpreadResult] = "properties";
    items[arraySpreadResult + 1] = key10015;
    properties[key10015] = _process2(tmp14, io, obj2);
    continue;
  }
  const items1 = [...new Set(Object.keys(shape))];
  new Set(Object.keys(shape));
  const set1 = new Set(
    items1.filter((item) => {
      let tmp;
      const _zod = def.shape[item]._zod;
      if ("input" === io.io) {
        tmp = undefined === _zod.optin;
      } else {
        tmp = undefined === _zod.optout;
      }
      return tmp;
    }),
  );
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
      const obj = { path: items2 };
      const _process = _mod8665.process;
      const catchall2 = def.catchall;
      const merged1 = Object.assign(path);
      items2 = [];
      items2[HermesBuiltin.arraySpread(items2, path.path, 0)] = "additionalProperties";
      properties.additionalProperties = _process(catchall2, io, obj);
    }
  } else if ("output" === io.io) {
    properties.additionalProperties = false;
  }
};
export const unionProcessor = (_zod, arg1, arg2, arg3) => {
  let closure_0 = arg1;
  const path = arg3;
  const def = _zod._zod.def;
  let closure_2 = tmp;
  const options = def.options;
  const mapped = options.map((item, index) => {
    let items;
    const obj = { path: items };
    const _process = _mod8665.process;
    const merged = Object.assign(path);
    items = [...closure_1.path];
    let str = "anyOf";
    if (closure_2) {
      str = "oneOf";
    }
    items[tmp3] = str;
    items[tmp3 + 1] = index;
    return _process(item, closure_0, obj);
  });
  if (false === def.inclusive) {
    arg2.oneOf = mapped;
  } else {
    arg2.anyOf = mapped;
  }
};
export const intersectionProcessor = (_zod, arg1, arg2, path) => {
  let allOf;
  let allOf1;
  let items;
  let items1;
  const def = _zod._zod.def;
  const obj = { path: items };
  const _process = _mod8665.process;
  const left = def.left;
  const merged = Object.assign(path);
  items = [...path.path, "allOf", 0];
  const _processResult = _process(left, arg1, obj);
  const obj2 = { path: items1 };
  const _process2 = _mod8665.process;
  const right = def.right;
  const merged1 = Object.assign(path);
  items1 = [...path.path, "allOf", 1];
  const _process2Result = _process2(right, arg1, obj2);
  let tmp6 = "allOf" in _processResult;
  if (tmp6) {
    const _Object = Object;
    tmp6 = 1 === Object.keys(_processResult).length;
  }
  if (tmp6) {
    allOf = _processResult.allOf;
  } else {
    allOf = [_processResult];
  }
  const items2 = [...allOf];
  let tmp9 = "allOf" in _process2Result;
  if (tmp9) {
    const _Object2 = Object;
    tmp9 = 1 === Object.keys(_process2Result).length;
  }
  if (tmp9) {
    allOf1 = _process2Result.allOf;
  } else {
    allOf1 = [_process2Result];
  }
  HermesBuiltin.arraySpread(items2, allOf1, tmp8);
  arg2.allOf = items2;
};
export const tupleProcessor = (_zod, target, items, path) => {
  let items1;
  let maximum;
  let minimum;
  let str2;
  _require = target;
  const def = _zod._zod.def;
  items.type = "array";
  let str = "items";
  if ("draft-2020-12" === target.target) {
    str = "prefixItems";
  }
  if ("draft-2020-12" === target.target) {
    str2 = "items";
  } else {
    str2 = "additionalItems";
  }
  items = def.items;
  const mapped = items.map((item, index) => {
    let items;
    const obj = { path: items };
    const _process = _mod8665.process;
    const merged = Object.assign(path);
    items = [...closure_1.path, str, index];
    return _process(item, target, obj);
  });
  let _processResult = null;
  if (def.rest) {
    let items3;
    let obj = { path: items1 };
    let _process = require("metro/08665__.js").process;
    const rest = def.rest;
    let merged = Object.assign(path);
    items1 = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items1, path.path, 0);
    items1[arraySpreadResult] = str2;
    if ("openapi-3.0" === target.target) {
      const items2 = [def.items.length];
      items3 = items2;
    } else {
      items3 = [];
    }
    HermesBuiltin.arraySpread(items1, items3, arraySpreadResult + 1);
    _processResult = _process(rest, target, obj);
  }
  if ("draft-2020-12" === target.target) {
    items.prefixItems = mapped;
    if (_processResult) {
      items.items = _processResult;
    }
  } else if ("openapi-3.0" === target.target) {
    const obj2 = { anyOf: mapped };
    items.items = obj2;
    if (_processResult) {
      const anyOf = items.items.anyOf;
      anyOf.push(_processResult);
    }
    items.minItems = mapped.length;
    if (!_processResult) {
      items.maxItems = mapped.length;
    }
  } else {
    items.items = mapped;
    if (_processResult) {
      items.additionalItems = _processResult;
    }
  }
  ({ minimum, maximum } = _zod._zod.bag);
  if (typeof minimum === "number") {
    items.minItems = minimum;
  }
  if (typeof maximum === "number") {
    items.maxItems = maximum;
  }
};
export const recordProcessor = (_zod, target, patternProperties, path) => {
  let items2;
  let items3;
  let patterns;
  const def = _zod._zod.def;
  patternProperties.type = "object";
  const keyType = def.keyType;
  const bag = keyType._zod.bag;
  if (bag != null) {
    patterns = bag.patterns;
  }
  if ("loose" === def.mode) {
    if (patterns) {
      if (patterns.size > 0) {
        const _process3 = _mod8665.process;
        const valueType2 = def.valueType;
        const merged = Object.assign(path);
        const items = [,];
        const arraySpreadResult = HermesBuiltin.arraySpread(items, path.path, 0);
        items[arraySpreadResult] = "patternProperties";
        items[arraySpreadResult + 1] = "*";
        patternProperties.patternProperties = {};
        for (const item10081 of patterns) {
          patternProperties.patternProperties[item10081.source] = tmp17;
          continue;
        }
      }
      const values = keyType._zod.values;
      if (values) {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, values, 0);
        const found = items1.filter((item) => typeof item === "string" || typeof item === "number");
        if (found.length > 0) {
          patternProperties.required = found;
        }
      }
    }
  }
  const tmp2 = "draft-07" !== target.target && "draft-2020-12" !== target.target;
  if (!tmp2) {
    const obj = { path: items2 };
    const _process = _mod8665.process;
    const keyType2 = def.keyType;
    const merged1 = Object.assign(path);
    items2 = [];
    items2[HermesBuiltin.arraySpread(items2, path.path, 0)] = "propertyNames";
    patternProperties.propertyNames = _process(keyType2, target, obj);
  }
  const obj3 = { path: items3 };
  const _process2 = _mod8665.process;
  const valueType = def.valueType;
  const merged2 = Object.assign(path);
  items3 = [];
  items3[HermesBuiltin.arraySpread(items3, path.path, 0)] = "additionalProperties";
  patternProperties.additionalProperties = _process2(valueType, target, obj3);
};
export const nullableProcessor = (_zod, target, arg2, arg3) => {
  const def = _zod._zod.def;
  const processResult = _mod8665.process(def.innerType, target, arg3);
  if ("openapi-3.0" === target.target) {
    tmp2.ref = def.innerType;
    arg2.nullable = true;
  } else {
    const items = [processResult, { type: "null" }];
    arg2.anyOf = items;
  }
};
export const nonoptionalProcessor = (_zod, seen, arg2, arg3) => {
  const def = _zod._zod.def;
  _mod8665.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
};
export const defaultProcessor = (_zod, seen, arg2, arg3) => {
  const def = _zod._zod.def;
  _mod8665.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
  arg2.default = JSON.parse(JSON.stringify(def.defaultValue));
};
export const prefaultProcessor = (_zod, seen, arg2, arg3) => {
  const def = _zod._zod.def;
  _mod8665.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
  if ("input" === seen.io) {
    const _JSON = JSON;
    const _JSON2 = JSON;
    arg2._prefault = JSON.parse(JSON.stringify(def.defaultValue));
  }
};
export const catchProcessor = function (_zod, seen, arg2, arg3) {
  const def = _zod._zod.def;
  _mod8665.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
  try {
    arg2.default = def.catchValue(undefined);
  } catch (err) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Dynamic catch values are not supported in JSON Schema");
    throw error;
  }
};
export const pipeProcessor = (_zod, io, arg2, arg3) => {
  let out;
  const def = _zod._zod.def;
  if ("input" === io.io) {
    out = "transform" === def.in._zod.def.type ? def.out : def.in;
  } else {
    out = def.out;
  }
  _mod8665.process(out, io, arg3);
  const seen = io.seen;
  seen.get(_zod).ref = out;
};
export const readonlyProcessor = (_zod, seen, arg2, arg3) => {
  const def = _zod._zod.def;
  _mod8665.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
  arg2.readOnly = true;
};
export const promiseProcessor = (_zod, seen, arg2, arg3) => {
  const def = _zod._zod.def;
  _mod8665.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
};
export const optionalProcessor = (_zod, seen, arg2, arg3) => {
  const def = _zod._zod.def;
  _mod8665.process(def.innerType, seen, arg3);
  seen = seen.seen;
  seen.get(_zod).ref = def.innerType;
};
export const lazyProcessor = (_zod, seen, arg2, arg3) => {
  const innerType = _zod._zod.innerType;
  _mod8665.process(innerType, seen, arg3);
  seen = seen.seen;
  seen.get(_zod).ref = innerType;
};
export const allProcessors = {
  string: exports.stringProcessor,
  number: exports.numberProcessor,
  boolean: exports.booleanProcessor,
  bigint: exports.bigintProcessor,
  symbol: exports.symbolProcessor,
  null: exports.nullProcessor,
  undefined: exports.undefinedProcessor,
  void: exports.voidProcessor,
  never: exports.neverProcessor,
  any: exports.anyProcessor,
  unknown: exports.unknownProcessor,
  date: exports.dateProcessor,
  enum: exports.enumProcessor,
  literal: exports.literalProcessor,
  nan: exports.nanProcessor,
  template_literal: exports.templateLiteralProcessor,
  file: exports.fileProcessor,
  success: exports.successProcessor,
  custom: exports.customProcessor,
  function: exports.functionProcessor,
  transform: exports.transformProcessor,
  map: exports.mapProcessor,
  set: exports.setProcessor,
  array: exports.arrayProcessor,
  object: exports.objectProcessor,
  union: exports.unionProcessor,
  intersection: exports.intersectionProcessor,
  tuple: exports.tupleProcessor,
  record: exports.recordProcessor,
  nullable: exports.nullableProcessor,
  nonoptional: exports.nonoptionalProcessor,
  default: exports.defaultProcessor,
  prefault: exports.prefaultProcessor,
  catch: exports.catchProcessor,
  pipe: exports.pipeProcessor,
  readonly: exports.readonlyProcessor,
  promise: exports.promiseProcessor,
  optional: exports.optionalProcessor,
  lazy: exports.lazyProcessor,
};
