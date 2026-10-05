// === Module 8669: ZodType ===

// Module 8669 (ZodType)
import util3 from "util" /* 8603 */;
import stringProcessor2 from "stringProcessor" /* 8666 */;
import lt2 from "lt" /* 8670 */;
import ZodISODateTime2 from "ZodISODateTime" /* 8671 */;
import _mod8672 from "module_8672" /* 8672 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

const require = globalThis.__r;
let ZodEncodeError, _exports, _require, hasOwnProperty, standard;

const f98056 = (item) => {
  const items = [item, item];
  return items;
};
let self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let tmp2 = globalThis;
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    let closure_0 = __esModule;
    let closure_1 = arg2;
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
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_4 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_5 = tmp3;
let tmp5 = self && self.__importStar || ((__esModule) => {
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
        let tmp6 = closure_4(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_5(obj, __esModule);
  return obj;
});
function _function(input) {
  let output;
  let zodTuple;
  input = undefined;
  const ZodFunction = exports.ZodFunction;
  const _Array = Array;
  if (input != null) {
    input = input.input;
  }
  if (isArray(input)) {
    let input1;
    if (input != null) {
      input1 = input.input;
    }
    const ZodTuple = exports.ZodTuple;
    const obj = { type: "tuple", items: input1, rest: null };
    util = util3.util;
    const merged = Object.assign(util.normalizeParams(undefined));
    const self = this;
    const self2 = this;
    zodTuple = new ZodTuple(obj);
  } else {
    zodTuple = undefined;
    if (input != null) {
      zodTuple = input.input;
    }
    if (zodTuple == null) {
      zodTuple = util._array(exports.ZodArray, util._unknown(exports.ZodUnknown), undefined);
    }
  }
  const obj2 = { type: "function", input: zodTuple, output };
  output = undefined;
  if (input != null) {
    output = input.output;
  }
  if (output == null) {
    output = util._unknown(exports.ZodUnknown);
  }
  const zodFunction = new ZodFunction(obj2);
  return zodFunction;
}
function string(message) {
  return util._string(exports.ZodString, message);
}
function number(message) {
  return util._number(exports.ZodNumber, message);
}
function int(message) {
  return util._int(exports.ZodNumberFormat, message);
}
function boolean(message) {
  return util._boolean(exports.ZodBoolean, message);
}
function _null(arg0) {
  return util._null(exports.ZodNull, arg0);
}
function unknown() {
  return util._unknown(exports.ZodUnknown);
}
function never(message) {
  return util._never(exports.ZodNever, message);
}
function array(util, message) {
  return util._array(exports.ZodArray, util, message);
}
function union(options, message) {
  const ZodUnion = exports.ZodUnion;
  const obj = { type: "union", options };
  util = util3.util;
  const merged = Object.assign(util.normalizeParams(message));
  const zodUnion = new ZodUnion(obj);
  return zodUnion;
}
function intersection(found, items3) {
  const rect = { type: "intersection", left: found, right: items3 };
  const zodIntersection = new exports.ZodIntersection(rect);
  return zodIntersection;
}
function tuple(mapped2, message, message2) {
  let tmp2 = message;
  if (message instanceof util.$ZodType) {
    tmp2 = message;
  }
  let tmp3 = null;
  if (message instanceof util.$ZodType) {
    tmp3 = message;
  }
  const ZodTuple = exports.ZodTuple;
  const obj = { type: "tuple", items: mapped2, rest: tmp3 };
  util = util3.util;
  const merged = Object.assign(util.normalizeParams(tmp2));
  const zodTuple = new ZodTuple(obj);
  return zodTuple;
}
function record(keyType, valueType, message) {
  const ZodRecord = exports.ZodRecord;
  const obj = { type: "record", keyType, valueType };
  util = util3.util;
  const merged = Object.assign(util.normalizeParams(message));
  const zodRecord = new ZodRecord(obj);
  return zodRecord;
}
function _enum(ApplicationWidgetFieldPresentationType, message) {
  let fromEntriesResult = ApplicationWidgetFieldPresentationType;
  if (Array.isArray(ApplicationWidgetFieldPresentationType)) {
    const _Object = Object;
    fromEntriesResult = Object.fromEntries(ApplicationWidgetFieldPresentationType.map(f98056));
  }
  const ZodEnum = exports.ZodEnum;
  const obj = { type: "enum", entries: fromEntriesResult };
  util = util3.util;
  const merged = Object.assign(util.normalizeParams(message));
  const zodEnum = new ZodEnum(obj);
  return zodEnum;
}
function transform(transform) {
  const obj = { type: "transform", transform };
  const zodTransform = new exports.ZodTransform(obj);
  return zodTransform;
}
function optional(innerType) {
  const obj = { type: "optional", innerType };
  const zodOptional = new exports.ZodOptional(obj);
  return zodOptional;
}
function exactOptional(innerType) {
  const obj = { type: "optional", innerType };
  const zodExactOptional = new exports.ZodExactOptional(obj);
  return zodExactOptional;
}
function nullable(innerType) {
  const obj = { type: "nullable", innerType };
  const zodNullable = new exports.ZodNullable(obj);
  return zodNullable;
}
function _default(innerType, arg1) {
  let closure_0 = arg1;
  const obj = { type: "default", innerType };
  const ZodDefault = exports.ZodDefault;
  Object.defineProperty(obj, "defaultValue", {
    get: () => {
      let shallowCloneResult;
      if (typeof closure_0 === "function") {
        shallowCloneResult = closure_0();
      } else {
        util = standard(closure_2_2[1]).util;
        shallowCloneResult = util.shallowClone(closure_0);
      }
      return shallowCloneResult;
    },
    set: undefined
  });
  const zodDefault = new ZodDefault(obj);
  return zodDefault;
}
function prefault(innerType, arg1) {
  let closure_0 = arg1;
  const obj = { type: "prefault", innerType };
  const ZodPrefault = exports.ZodPrefault;
  Object.defineProperty(obj, "defaultValue", {
    get: () => {
      let shallowCloneResult;
      if (typeof closure_0 === "function") {
        shallowCloneResult = closure_0();
      } else {
        util = standard(closure_2_2[1]).util;
        shallowCloneResult = util.shallowClone(closure_0);
      }
      return shallowCloneResult;
    },
    set: undefined
  });
  const zodPrefault = new ZodPrefault(obj);
  return zodPrefault;
}
function nonoptional(innerType, message) {
  const ZodNonOptional = exports.ZodNonOptional;
  const obj = { type: "nonoptional", innerType };
  util = util3.util;
  const merged = Object.assign(util.normalizeParams(message));
  const zodNonOptional = new ZodNonOptional(obj);
  return zodNonOptional;
}
function _catch(innerType, fn) {
  let closure_0 = fn;
  const ZodCatch = exports.ZodCatch;
  const obj = { type: "catch", innerType, catchValue: fn };
  if (typeof fn !== "function") {
    fn = () => closure_0;
  }
  const zodCatch = new ZodCatch(obj);
  return zodCatch;
}
function pipe(_in, out) {
  const obj = { type: "pipe", in: _in, out };
  const zodPipe = new exports.ZodPipe(obj);
  return zodPipe;
}
function readonly(nullableResult) {
  const obj = { type: "readonly", innerType: nullableResult };
  const zodReadonly = new exports.ZodReadonly(obj);
  return zodReadonly;
}
function lazy(getter) {
  const obj = { type: "lazy", getter };
  const zodLazy = new exports.ZodLazy(obj);
  return zodLazy;
}
function refine(fn) {
  let obj = message;
  if (message === undefined) {
    obj = {};
  }
  return util._refine(exports.ZodCustom, fn, obj);
}
function superRefine(arg0) {
  return util._superRefine(arg0);
}
let util = tmp5(util3);
const stringProcessor = tmp5(stringProcessor2);
const lt = tmp5(lt2);
const ZodISODateTime = tmp5(ZodISODateTime2);
const parse = tmp5(_mod8672);
({ describe: exports.describe, meta: exports.meta } = util);
const ZodUnion_export = util.$constructor("ZodUnion", (_zod, options) => {
  let closure_0 = _zod;
  const $ZodUnion = util.$ZodUnion;
  $ZodUnion.init(_zod, options);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, options);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.unionProcessor(_zod, arg0, arg1, arg2);
  _zod.options = options.options;
});
const ZodTuple_export = util.$constructor("ZodTuple", (_zod, arg1) => {
  const $ZodTuple = util.$ZodTuple;
  $ZodTuple.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (target, items, path) => stringProcessor.tupleProcessor(_zod, target, items, path);
  _zod.rest = (rest) => {
    const clone = _zod.clone;
    const obj = { rest };
    const merged = Object.assign(_zod._zod.def);
    return clone(obj);
  };
});
const ZodRecord_export = util.$constructor("ZodRecord", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodRecord = util.$ZodRecord;
  $ZodRecord.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (target, patternProperties, path) => stringProcessor.recordProcessor(_zod, target, patternProperties, path);
  ({ keyType: _zod.keyType, valueType: _zod.valueType } = arg1);
});
const ZodEnum_export = util.$constructor("ZodEnum", (_zod, arg1) => {
  let closure_1;
  let closure_0 = _zod;
  _exports = arg1;
  const $ZodEnum = util.$ZodEnum;
  $ZodEnum.init(_zod, arg1);
  const ZodType = _exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.enumProcessor(_zod, arg0, arg1, arg2);
  _zod.enum = arg1.entries;
  _zod.options = Object.values(arg1.entries);
  set = new Set(Object.keys(arg1.entries));
  _zod.extract = function(arg0, message) {
    const obj = {};
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if (set.has(nextResult)) {
        obj[tmp2] = closure_1.entries[tmp2];
        continue;
      } else {
        let tmp4 = globalThis;
        let _Error = Error;
        let _HermesInternal = HermesInternal;
        let str = " not found in enum";
        let str2 = "Key ";
        let self = this;
        let self2 = this;
        let error = new Error("Key " + tmp2 + " not found in enum");
        throw error;
      }
    }
    const ZodEnum = exports.ZodEnum;
    const obj2 = { checks: [], entries: obj };
    const merged = Object.assign(closure_1);
    util = util3.util;
    const merged1 = Object.assign(util.normalizeParams(message));
    const zodEnum = new ZodEnum(obj2);
    return zodEnum;
  };
  _zod.exclude = function(arg0, message) {
    const obj = {};
    const merged = Object.assign(closure_1.entries);
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (set.has(nextResult)) {
        delete obj[tmp2];
        continue;
      } else {
        let tmp5 = globalThis;
        let _Error = Error;
        let _HermesInternal = HermesInternal;
        let str = " not found in enum";
        let str2 = "Key ";
        let self = this;
        let self2 = this;
        let error = new Error("Key " + tmp3 + " not found in enum");
        throw error;
      }
    }
    const ZodEnum = exports.ZodEnum;
    const obj2 = { checks: [], entries: obj };
    const merged1 = Object.assign(closure_1);
    util = util3.util;
    const merged2 = Object.assign(util.normalizeParams(message));
    const zodEnum = new ZodEnum(obj2);
    return zodEnum;
  };
});
const ZodDefault_export = util.$constructor("ZodDefault", (_zod, arg1) => {
  const $ZodDefault = util.$ZodDefault;
  $ZodDefault.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (seen, arg1, arg2) => stringProcessor.defaultProcessor(_zod, seen, arg1, arg2);
  _zod.unwrap = () => _zod._zod.def.innerType;
  _zod.removeDefault = _zod.unwrap;
});
const ZodPrefault_export = util.$constructor("ZodPrefault", (_zod, arg1) => {
  const $ZodPrefault = util.$ZodPrefault;
  $ZodPrefault.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (seen, arg1, arg2) => stringProcessor.prefaultProcessor(_zod, seen, arg1, arg2);
  _zod.unwrap = () => _zod._zod.def.innerType;
});
const ZodNonOptional_export = util.$constructor("ZodNonOptional", (_zod, arg1) => {
  const $ZodNonOptional = util.$ZodNonOptional;
  $ZodNonOptional.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (seen, arg1, arg2) => stringProcessor.nonoptionalProcessor(_zod, seen, arg1, arg2);
  _zod.unwrap = () => _zod._zod.def.innerType;
});
const ZodCatch_export = util.$constructor("ZodCatch", (_zod, arg1) => {
  const $ZodCatch = util.$ZodCatch;
  $ZodCatch.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (seen, arg1, arg2) => stringProcessor.catchProcessor(_zod, seen, arg1, arg2);
  _zod.unwrap = () => _zod._zod.def.innerType;
  _zod.removeCatch = _zod.unwrap;
});
const ZodFunction_export = util.$constructor("ZodFunction", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodFunction = util.$ZodFunction;
  $ZodFunction.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => stringProcessor.functionProcessor(_zod, unrepresentable, arg1, arg2);
});

export { string };
export const email = function email(message) {
  return util._email(exports.ZodEmail, message);
};
export const guid = function guid(message) {
  return util._guid(exports.ZodGUID, message);
};
export const uuid = function uuid(message) {
  return util._uuid(exports.ZodUUID, message);
};
export const uuidv4 = function uuidv4(message) {
  return util._uuidv4(exports.ZodUUID, message);
};
export const uuidv6 = function uuidv6(message) {
  return util._uuidv6(exports.ZodUUID, message);
};
export const uuidv7 = function uuidv7(message) {
  return util._uuidv7(exports.ZodUUID, message);
};
export const url = function url(url) {
  return util._url(exports.ZodURL, url);
};
export const httpUrl = function httpUrl(message) {
  const url = { protocol: /^https?$/, hostname: util.regexes.domain };
  const _url = util._url;
  const ZodURL = exports.ZodURL;
  util = util3.util;
  const merged = Object.assign(util.normalizeParams(message));
  return _url(ZodURL, url);
};
export const emoji = function emoji(message) {
  return util._emoji(exports.ZodEmoji, message);
};
export const nanoid = function nanoid(message) {
  return util._nanoid(exports.ZodNanoID, message);
};
export const cuid = function cuid(message) {
  return util._cuid(exports.ZodCUID, message);
};
export const cuid2 = function cuid2(message) {
  return util._cuid2(exports.ZodCUID2, message);
};
export const ulid = function ulid(message) {
  return util._ulid(exports.ZodULID, message);
};
export const xid = function xid(message) {
  return util._xid(exports.ZodXID, message);
};
export const ksuid = function ksuid(message) {
  return util._ksuid(exports.ZodKSUID, message);
};
export const ipv4 = function ipv4(message) {
  return util._ipv4(exports.ZodIPv4, message);
};
export const mac = function mac(message) {
  return util._mac(exports.ZodMAC, message);
};
export const ipv6 = function ipv6(message) {
  return util._ipv6(exports.ZodIPv6, message);
};
export const cidrv4 = function cidrv4(message) {
  return util._cidrv4(exports.ZodCIDRv4, message);
};
export const cidrv6 = function cidrv6(message) {
  return util._cidrv6(exports.ZodCIDRv6, message);
};
export const base64 = function base64(message) {
  return util._base64(exports.ZodBase64, message);
};
export const base64url = function base64url(message) {
  return util._base64url(exports.ZodBase64URL, message);
};
export const e164 = function e164(message) {
  return util._e164(exports.ZodE164, message);
};
export const jwt = function jwt(message) {
  return util._jwt(exports.ZodJWT, message);
};
export const stringFormat = function stringFormat(combined, hex) {
  let obj = enc;
  if (enc === undefined) {
    obj = {};
  }
  return util._stringFormat(exports.ZodCustomStringFormat, combined, hex, obj);
};
export const hostname = function hostname(enc) {
  return util._stringFormat(exports.ZodCustomStringFormat, "hostname", util.regexes.hostname, enc);
};
export const hex = function hex(enc) {
  return util._stringFormat(exports.ZodCustomStringFormat, "hex", util.regexes.hex, enc);
};
export const hash = function hash(arg0, enc) {
  let str;
  if (enc != null) {
    str = enc.enc;
  }
  if (str == null) {
    str = "hex";
  }
  const combined = "" + arg0 + "_" + str;
  if (util.regexes[combined]) {
    return util._stringFormat(exports.ZodCustomStringFormat, combined, util.regexes[combined], enc);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unrecognized hash format: " + combined);
    throw error;
  }
};
export { number };
export { int };
export const float32 = function float32(message) {
  return util._float32(exports.ZodNumberFormat, message);
};
export const float64 = function float64(message) {
  return util._float64(exports.ZodNumberFormat, message);
};
export const int32 = function int32(message) {
  return util._int32(exports.ZodNumberFormat, message);
};
export const uint32 = function uint32(message) {
  return util._uint32(exports.ZodNumberFormat, message);
};
export { boolean };
export const bigint = function bigint(message) {
  return util._bigint(exports.ZodBigInt, message);
};
export const int64 = function int64(message) {
  return util._int64(exports.ZodBigIntFormat, message);
};
export const uint64 = function uint64(message) {
  return util._uint64(exports.ZodBigIntFormat, message);
};
export const symbol = function symbol(message) {
  return util._symbol(exports.ZodSymbol, message);
};
const undefined_export = function _undefined(arg0) {
  return util._undefined(exports.ZodUndefined, arg0);
};
export { undefined_export as undefined };
const null_export = _null;
export { null_export as null };
export const any = function any() {
  return util._any(exports.ZodAny);
};
export { unknown };
export { never };
const void_export = function _void(arg0) {
  return util._void(exports.ZodVoid, arg0);
};
export { void_export as void };
export const date = function date(message) {
  return util._date(exports.ZodDate, message);
};
export { array };
export const keyof = function keyof(_zod) {
  const keys = Object.keys(_zod._zod.def.shape);
  let fromEntriesResult = keys;
  if (Array.isArray(keys)) {
    const _Object = Object;
    fromEntriesResult = Object.fromEntries(keys.map(f98056));
  }
  const ZodEnum = exports.ZodEnum;
  const obj = { type: "enum", entries: fromEntriesResult };
  util = util3.util;
  const merged = Object.assign(util.normalizeParams(undefined));
  const zodEnum = new ZodEnum(obj);
  return zodEnum;
};
export const object = function object(arg0, message) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  const obj2 = { type: "object", shape: obj };
  util = util3.util;
  const merged = Object.assign(util.normalizeParams(message));
  const zodObject = new exports.ZodObject(obj2);
  return zodObject;
};
export const strictObject = function strictObject(shape, message) {
  const ZodObject = exports.ZodObject;
  const obj = { type: "object", shape, catchall: util._never(exports.ZodNever, undefined) };
  util = util3.util;
  const merged = Object.assign(util.normalizeParams(message));
  const zodObject = new ZodObject(obj);
  return zodObject;
};
export const looseObject = function looseObject(shape, message) {
  const ZodObject = exports.ZodObject;
  const obj = { type: "object", shape, catchall: util._unknown(exports.ZodUnknown) };
  util = util3.util;
  const merged = Object.assign(util.normalizeParams(message));
  const zodObject = new ZodObject(obj);
  return zodObject;
};
export { union };
export const xor = function xor(options, message) {
  const ZodXor = exports.ZodXor;
  const obj = { type: "union", options, inclusive: false };
  util = util3.util;
  const merged = Object.assign(util.normalizeParams(message));
  const zodXor = new ZodXor(obj);
  return zodXor;
};
export const discriminatedUnion = function discriminatedUnion(discriminator, options, message) {
  const ZodDiscriminatedUnion = exports.ZodDiscriminatedUnion;
  const obj = { type: "union", options, discriminator };
  util = util3.util;
  const merged = Object.assign(util.normalizeParams(message));
  const zodDiscriminatedUnion = new ZodDiscriminatedUnion(obj);
  return zodDiscriminatedUnion;
};
export { intersection };
export { tuple };
export { record };
export const partialRecord = function partialRecord(z11, object1Result, message) {
  const cloneResult = util.clone(z11);
  cloneResult._zod.values = undefined;
  const ZodRecord = exports.ZodRecord;
  const obj = { type: "record", keyType: cloneResult, valueType: object1Result };
  util = util3.util;
  const merged = Object.assign(util.normalizeParams(message));
  const zodRecord = new ZodRecord(obj);
  return zodRecord;
};
export const looseRecord = function looseRecord(keyType, anyResult, message) {
  const ZodRecord = exports.ZodRecord;
  const obj = { type: "record", keyType, valueType: anyResult, mode: "loose" };
  util = util3.util;
  const merged = Object.assign(util.normalizeParams(message));
  const zodRecord = new ZodRecord(obj);
  return zodRecord;
};
export const map = function map(keyType, valueType, message) {
  const ZodMap = exports.ZodMap;
  const obj = { type: "map", keyType, valueType };
  util = util3.util;
  const merged = Object.assign(util.normalizeParams(message));
  const zodMap = new ZodMap(obj);
  return zodMap;
};
export const set = function set(valueType, message) {
  const ZodSet = exports.ZodSet;
  const obj = { type: "set", valueType };
  util = util3.util;
  const merged = Object.assign(util.normalizeParams(message));
  const zodSet = new ZodSet(obj);
  return zodSet;
};
const enum_export = _enum;
export { enum_export as enum };
export const nativeEnum = function nativeEnum(entries, message) {
  const ZodEnum = exports.ZodEnum;
  const obj = { type: "enum", entries };
  util = util3.util;
  const merged = Object.assign(util.normalizeParams(message));
  const zodEnum = new ZodEnum(obj);
  return zodEnum;
};
export const literal = function literal(arg0, message) {
  const ZodLiteral = exports.ZodLiteral;
  let tmp = arg0;
  if (!Array.isArray(arg0)) {
    const items = [arg0];
    tmp = items;
  }
  const obj = { type: "literal", values: tmp };
  util = util3.util;
  const merged = Object.assign(util.normalizeParams(message));
  const zodLiteral = new ZodLiteral(obj);
  return zodLiteral;
};
export const file = function file(dependencyMap) {
  return util._file(exports.ZodFile, dependencyMap);
};
export { transform };
export { optional };
export { exactOptional };
export { nullable };
export const nullish = function nullish(innerType) {
  const obj = { type: "nullable", innerType };
  const zodNullable = new exports.ZodNullable(obj);
  const obj2 = { type: "optional", innerType: zodNullable };
  const zodOptional = new exports.ZodOptional(obj2);
  return zodOptional;
};
export { _default };
export { prefault };
export { nonoptional };
export const success = function success(innerType) {
  const obj = { type: "success", innerType };
  const zodSuccess = new exports.ZodSuccess(obj);
  return zodSuccess;
};
const catch_export = _catch;
export { catch_export as catch };
export const nan = function nan(message) {
  return util._nan(exports.ZodNaN, message);
};
export { pipe };
export const codec = function codec(_in, out, decode) {
  const obj = { type: "pipe", in: _in, out, transform: decode.decode, reverseTransform: decode.encode };
  const zodCodec = new exports.ZodCodec(obj);
  return zodCodec;
};
export { readonly };
export const templateLiteral = function templateLiteral(parts, message) {
  const ZodTemplateLiteral = exports.ZodTemplateLiteral;
  const obj = { type: "template_literal", parts };
  util = util3.util;
  const merged = Object.assign(util.normalizeParams(message));
  const zodTemplateLiteral = new ZodTemplateLiteral(obj);
  return zodTemplateLiteral;
};
export { lazy };
export const promise = function promise(response1) {
  const obj = { type: "promise", innerType: response1 };
  const zodPromise = new exports.ZodPromise(obj);
  return zodPromise;
};
export { _function };
const function_export = _function;
export { function_export as function };
export const check = function check(check) {
  const ZodCheck = new util.$ZodCheck({ check: "custom" });
  ZodCheck._zod.check = check;
  return ZodCheck;
};
export const custom = function custom(arg0, message) {
  let fn = arg0;
  const _custom = util._custom;
  const ZodCustom = exports.ZodCustom;
  if (arg0 == null) {
    fn = () => true;
  }
  return _custom(ZodCustom, fn, message);
};
export { refine };
export { superRefine };
const instanceof_export = function _instanceof(Class) {
  let closure_0 = Class;
  let obj = message;
  if (message === undefined) {
    obj = {};
  }
  const ZodCustom = exports.ZodCustom;
  const obj2 = {
    type: "custom",
    check: "custom",
    fn(arg0) {
      return arg0 instanceof closure_0;
    },
    abort: true
  };
  util = util3.util;
  const merged = Object.assign(util.normalizeParams(obj));
  const zodCustom = new ZodCustom(obj2);
  zodCustom._zod.bag.Class = Class;
  zodCustom._zod.check = (value) => {
    let items;
    if (!(value.value instanceof closure_0)) {
      const issues = value.issues;
      let path = zodCustom._zod.def.path;
      const push = issues.push;
      const obj = { code: "invalid_type", expected: tmp2.name, input: value.value, inst: zodCustom, path: items };
      if (path == null) {
        path = [];
      }
      items = [];
      HermesBuiltin.arraySpread(items, path, 0);
      push(obj);
    }
  };
  return zodCustom;
};
export { instanceof_export as instanceof };
export const json = function json(arg0) {
  let zodLazy;
  let closure_0 = arg0;
  let obj = {
    type: "lazy",
    getter: () => {
      const items = [util._string(exports.ZodString, closure_0), util._number(exports.ZodNumber, undefined), util._boolean(exports.ZodBoolean, undefined), util._null(exports.ZodNull, undefined), util._array(exports.ZodArray, zodLazy, undefined), ];
      const ZodRecord = exports.ZodRecord;
      const obj = { type: "record", keyType: util._string(exports.ZodString, undefined), valueType: zodLazy };
      util = util3.util;
      const merged = Object.assign(util.normalizeParams(undefined));
      const zodRecord = new ZodRecord(obj);
      items[5] = zodRecord;
      const ZodUnion = exports.ZodUnion;
      const obj2 = { type: "union", options: items };
      const util2 = util3.util;
      const merged1 = Object.assign(util2.normalizeParams(undefined));
      const zodUnion = new ZodUnion(obj2);
      return zodUnion;
    }
  };
  zodLazy = new zodLazy.ZodLazy(obj);
  return zodLazy;
};
export const preprocess = function preprocess(transform, out) {
  const obj = { type: "transform", transform };
  const zodTransform = new exports.ZodTransform(obj);
  const obj2 = { type: "pipe", in: zodTransform, out };
  const zodPipe = new exports.ZodPipe(obj2);
  return zodPipe;
};
export const ZodType = util.$constructor("ZodType", (_standard, def) => {
  let obj2;
  _require = _standard;
  const $ZodType = util.$ZodType;
  $ZodType.init(_standard, def);
  let obj = { jsonSchema: obj2 };
  obj2 = { input: require("module_8665").createStandardJSONSchemaMethod(_standard, "input"), output: require("module_8665").createStandardJSONSchemaMethod(_standard, "output") };
  let merged = Object.assign(_standard["~standard"], obj);
  _standard.toJSONSchema = require("module_8665").createToJSONSchemaMethod(_standard, {});
  _standard.def = def;
  _standard.type = def.type;
  let obj3 = { value: def };
  Object.defineProperty(_standard, "_def", obj3);
  _standard.check = () => {
    let items1;
    const items = [...arguments];
    const clone = standard.clone;
    util = util3.util;
    let checks = def.checks;
    const mergeDefs = util.mergeDefs;
    if (checks == null) {
      checks = [];
    }
    let obj = { checks: items1 };
    items1 = [
      ...checks,
      ...items.map((check) => {
        let obj2;
        let tmp = check;
        if (typeof check === "function") {
          const obj = { _zod: obj2 };
          tmp = obj;
          obj2 = { check, def: { check: "custom" }, onattach: [] };
        }
        return tmp;
      })
    ];
    return clone(mergeDefs(def, obj), { parent: true });
  };
  _standard.with = _standard.check;
  _standard.clone = (arg0, arg1) => util.clone(standard, arg0, arg1);
  _standard.brand = () => standard;
  _standard.register = (add, arg1) => {
    add.add(standard, arg1);
    return standard;
  };
  _standard.parse = (arg0, arg1) => {
    const obj = { callee: standard.parse };
    return parse.parse(standard, arg0, arg1, obj);
  };
  _standard.safeParse = (arg0, arg1) => parse.safeParse(standard, arg0, arg1);
  _asyncToGenerator(async (arg0, arg1) => {
    const parseAsync = arg0;
    let closure_1 = arg1;
    let c2 = 0;
    return (async (arg0, value) => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            return { value, done: true };
          } else {
            c2 = 3;
            const obj = { callee: parseAsync.parseAsync };
            const obj4 = { value: closure_2_10.parseAsync(parseAsync, parseAsync, closure_1, obj), done: true };
            return obj4;
          }
        } catch (tmp10) {
          c2 = 3;
          throw tmp10;
        }
      }
    })();
  });
  _standard.parseAsync = function(arg0, arg1) {
    return closure_0(...arguments);
  };
  _asyncToGenerator(async (arg0, arg1) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c2 = 3;
          const obj = { value: parse.safeParseAsync(closure_0, closure_0, closure_1), done: true };
          return obj;
        }
      } catch (tmp7) {
        c2 = 3;
        throw tmp7;
      }
    }
  });
  _standard.safeParseAsync = function(arg0, arg1) {
    return closure_0(...arguments);
  };
  _standard.spa = _standard.safeParseAsync;
  _standard.encode = (arg0, arg1) => parse.encode(standard, arg0, arg1);
  _standard.decode = (arg0, arg1) => parse.decode(standard, arg0, arg1);
  _asyncToGenerator(async (arg0, arg1) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c2 = 3;
          const obj = { value: parse.encodeAsync(closure_0, closure_0, closure_1), done: true };
          return obj;
        }
      } catch (tmp7) {
        c2 = 3;
        throw tmp7;
      }
    }
  });
  _standard.encodeAsync = function(arg0, arg1) {
    return closure_0(...arguments);
  };
  _asyncToGenerator(async (arg0, arg1) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c2 = 3;
          const obj = { value: parse.decodeAsync(closure_0, closure_0, closure_1), done: true };
          return obj;
        }
      } catch (tmp7) {
        c2 = 3;
        throw tmp7;
      }
    }
  });
  _standard.decodeAsync = function(arg0, arg1) {
    return closure_0(...arguments);
  };
  _standard.safeEncode = (arg0, arg1) => parse.safeEncode(standard, arg0, arg1);
  _standard.safeDecode = (arg0, arg1) => parse.safeDecode(standard, arg0, arg1);
  _asyncToGenerator(async (arg0, arg1) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c2 = 3;
          const obj = { value: parse.safeEncodeAsync(closure_0, closure_0, closure_1), done: true };
          return obj;
        }
      } catch (tmp7) {
        c2 = 3;
        throw tmp7;
      }
    }
  });
  _standard.safeEncodeAsync = function(arg0, arg1) {
    return closure_0(...arguments);
  };
  _require = _asyncToGenerator(async (arg0, arg1) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c2 = 3;
          const obj = { value: parse.safeDecodeAsync(closure_0, closure_0, closure_1), done: true };
          return obj;
        }
      } catch (tmp7) {
        c2 = 3;
        throw tmp7;
      }
    }
  });
  _standard.safeDecodeAsync = function(arg0, arg1) {
    return closure_0(...arguments);
  };
  _standard.refine = (fn, message) => {
    let obj = message;
    const check = standard.check;
    if (message === undefined) {
      obj = {};
    }
    return check(util._refine(exports.ZodCustom, fn, obj));
  };
  _standard.superRefine = (arg0) => standard.check(util._superRefine(arg0));
  _standard.overwrite = (arg0) => standard.check(lt.overwrite(arg0));
  _standard.optional = () => {
    const obj = { type: "optional", innerType: standard };
    const zodOptional = new exports.ZodOptional(obj);
    return zodOptional;
  };
  _standard.exactOptional = () => {
    const obj = { type: "optional", innerType: standard };
    const zodExactOptional = new exports.ZodExactOptional(obj);
    return zodExactOptional;
  };
  _standard.nullable = () => {
    const obj = { type: "nullable", innerType: standard };
    const zodNullable = new exports.ZodNullable(obj);
    return zodNullable;
  };
  _standard.nullish = () => {
    const obj = { type: "nullable", innerType: standard };
    const zodNullable = new exports.ZodNullable(obj);
    const obj2 = { type: "optional", innerType: zodNullable };
    const zodOptional = new exports.ZodOptional(obj2);
    return zodOptional;
  };
  _standard.nonoptional = (message) => {
    const ZodNonOptional = exports.ZodNonOptional;
    const obj = { type: "nonoptional", innerType: standard };
    util = util3.util;
    const merged = Object.assign(util.normalizeParams(message));
    const zodNonOptional = new ZodNonOptional(obj);
    return zodNonOptional;
  };
  _standard.array = () => util._array(exports.ZodArray, standard, undefined);
  _standard.or = (arg0) => {
    const items = [standard, arg0];
    const ZodUnion = exports.ZodUnion;
    const obj = { type: "union", options: items };
    util = util3.util;
    const merged = Object.assign(util.normalizeParams(undefined));
    const zodUnion = new ZodUnion(obj);
    return zodUnion;
  };
  _standard.and = (right) => {
    const rect = { type: "intersection", left: standard, right };
    const zodIntersection = new exports.ZodIntersection(rect);
    return zodIntersection;
  };
  _standard.transform = (transform) => {
    const obj = { type: "transform", transform };
    const zodTransform = new exports.ZodTransform(obj);
    const obj2 = { type: "pipe", in: standard, out: zodTransform };
    const zodPipe = new exports.ZodPipe(obj2);
    return zodPipe;
  };
  _standard.default = (arg0) => {
    standard = arg0;
    const obj = { type: "default", innerType: standard };
    const ZodDefault = exports.ZodDefault;
    Object.defineProperty(obj, "defaultValue", {
      get: () => {
        let shallowCloneResult;
        if (typeof closure_0 === "function") {
          shallowCloneResult = closure_0();
        } else {
          util = standard(closure_2_2[1]).util;
          shallowCloneResult = util.shallowClone(closure_0);
        }
        return shallowCloneResult;
      },
      set: undefined
    });
    const zodDefault = new ZodDefault(obj);
    return zodDefault;
  };
  _standard.prefault = (arg0) => {
    standard = arg0;
    const obj = { type: "prefault", innerType: standard };
    const ZodPrefault = exports.ZodPrefault;
    Object.defineProperty(obj, "defaultValue", {
      get: () => {
        let shallowCloneResult;
        if (typeof closure_0 === "function") {
          shallowCloneResult = closure_0();
        } else {
          util = standard(closure_2_2[1]).util;
          shallowCloneResult = util.shallowClone(closure_0);
        }
        return shallowCloneResult;
      },
      set: undefined
    });
    const zodPrefault = new ZodPrefault(obj);
    return zodPrefault;
  };
  _standard.catch = (fn) => {
    standard = fn;
    const ZodCatch = exports.ZodCatch;
    const obj = { type: "catch", innerType: standard, catchValue: fn };
    if (typeof fn !== "function") {
      fn = () => closure_0;
    }
    const zodCatch = new ZodCatch(obj);
    return zodCatch;
  };
  _standard.pipe = (out) => {
    const obj = { type: "pipe", in: standard, out };
    const zodPipe = new exports.ZodPipe(obj);
    return zodPipe;
  };
  _standard.readonly = () => {
    const obj = { type: "readonly", innerType: standard };
    const zodReadonly = new exports.ZodReadonly(obj);
    return zodReadonly;
  };
  _standard.describe = (description) => {
    const cloneResult = standard.clone();
    const globalRegistry = util.globalRegistry;
    const obj = { description };
    globalRegistry.add(cloneResult, obj);
    return cloneResult;
  };
  let obj4 = {
    get() {
      const globalRegistry = util.globalRegistry;
      const value = globalRegistry.get(standard);
      let description;
      if (value != null) {
        description = value.description;
      }
      return description;
    },
    configurable: true
  };
  Object.defineProperty(_standard, "description", obj4);
  _standard.meta = () => {
    const items = [...arguments];
    if (0 === items.length) {
      const globalRegistry2 = util.globalRegistry;
      return globalRegistry2.get(standard);
    } else {
      const cloneResult = standard.clone();
      const globalRegistry = util.globalRegistry;
      globalRegistry.add(cloneResult, items[0]);
      return cloneResult;
    }
  };
  _standard.isOptional = () => standard.safeParse(undefined).success;
  _standard.isNullable = () => standard.safeParse(null).success;
  _standard.apply = (fn) => fn(standard);
  return _standard;
});
export const _ZodString = util.$constructor("_ZodString", (_zod, arg1) => {
  const $ZodString = util.$ZodString;
  $ZodString.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, format, arg2) => stringProcessor.stringProcessor(_zod, arg0, format, arg2);
  const bag = _zod._zod.bag;
  let format = bag.format;
  if (format == null) {
    format = null;
  }
  _zod.format = format;
  let minimum = bag.minimum;
  if (minimum == null) {
    minimum = null;
  }
  _zod.minLength = minimum;
  let maximum = bag.maximum;
  if (maximum == null) {
    maximum = null;
  }
  _zod.maxLength = maximum;
  _zod.regex = () => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return _zod.check(lt.regex.apply(items));
  };
  _zod.includes = () => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return _zod.check(lt.includes.apply(items));
  };
  _zod.startsWith = () => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return _zod.check(lt.startsWith.apply(items));
  };
  _zod.endsWith = () => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return _zod.check(lt.endsWith.apply(items));
  };
  _zod.min = () => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return _zod.check(lt.minLength.apply(items));
  };
  _zod.max = () => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return _zod.check(lt.maxLength.apply(items));
  };
  _zod.length = () => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return _zod.check(lt.length.apply(items));
  };
  _zod.nonempty = () => {
    const items = [1, ...HermesBuiltin.copyRestArgs()];
    return _zod.check(lt.minLength.apply(items));
  };
  _zod.lowercase = (arg0) => _zod.check(lt.lowercase(arg0));
  _zod.uppercase = (arg0) => _zod.check(lt.uppercase(arg0));
  _zod.trim = () => _zod.check(lt.trim());
  _zod.normalize = () => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return _zod.check(lt.normalize.apply(items));
  };
  _zod.toLowerCase = () => _zod.check(lt.toLowerCase());
  _zod.toUpperCase = () => _zod.check(lt.toUpperCase());
  _zod.slugify = () => _zod.check(lt.slugify());
});
export const ZodString = util.$constructor("ZodString", (arg0, arg1) => {
  let closure_0 = arg0;
  const $ZodString = util.$ZodString;
  $ZodString.init(arg0, arg1);
  const _ZodString = exports._ZodString;
  _ZodString.init(arg0, arg1);
  arg0.email = (message) => closure_0.check(util._email(exports.ZodEmail, message));
  arg0.url = (url) => closure_0.check(util._url(exports.ZodURL, url));
  arg0.jwt = (message) => closure_0.check(util._jwt(exports.ZodJWT, message));
  arg0.emoji = (message) => closure_0.check(util._emoji(exports.ZodEmoji, message));
  arg0.guid = (message) => closure_0.check(util._guid(exports.ZodGUID, message));
  arg0.uuid = (message) => closure_0.check(util._uuid(exports.ZodUUID, message));
  arg0.uuidv4 = (message) => closure_0.check(util._uuidv4(exports.ZodUUID, message));
  arg0.uuidv6 = (message) => closure_0.check(util._uuidv6(exports.ZodUUID, message));
  arg0.uuidv7 = (message) => closure_0.check(util._uuidv7(exports.ZodUUID, message));
  arg0.nanoid = (message) => closure_0.check(util._nanoid(exports.ZodNanoID, message));
  arg0.guid = (message) => closure_0.check(util._guid(exports.ZodGUID, message));
  arg0.cuid = (message) => closure_0.check(util._cuid(exports.ZodCUID, message));
  arg0.cuid2 = (message) => closure_0.check(util._cuid2(exports.ZodCUID2, message));
  arg0.ulid = (message) => closure_0.check(util._ulid(exports.ZodULID, message));
  arg0.base64 = (message) => closure_0.check(util._base64(exports.ZodBase64, message));
  arg0.base64url = (message) => closure_0.check(util._base64url(exports.ZodBase64URL, message));
  arg0.xid = (message) => closure_0.check(util._xid(exports.ZodXID, message));
  arg0.ksuid = (message) => closure_0.check(util._ksuid(exports.ZodKSUID, message));
  arg0.ipv4 = (message) => closure_0.check(util._ipv4(exports.ZodIPv4, message));
  arg0.ipv6 = (message) => closure_0.check(util._ipv6(exports.ZodIPv6, message));
  arg0.cidrv4 = (message) => closure_0.check(util._cidrv4(exports.ZodCIDRv4, message));
  arg0.cidrv6 = (message) => closure_0.check(util._cidrv6(exports.ZodCIDRv6, message));
  arg0.e164 = (message) => closure_0.check(util._e164(exports.ZodE164, message));
  arg0.datetime = (arg0) => closure_0.check(ZodISODateTime.datetime(arg0));
  arg0.date = (arg0) => closure_0.check(ZodISODateTime.date(arg0));
  arg0.time = (arg0) => closure_0.check(ZodISODateTime.time(arg0));
  arg0.duration = (arg0) => closure_0.check(ZodISODateTime.duration(arg0));
});
export const ZodStringFormat = util.$constructor("ZodStringFormat", (arg0, arg1) => {
  const $ZodStringFormat = util.$ZodStringFormat;
  $ZodStringFormat.init(arg0, arg1);
  const _ZodString = exports._ZodString;
  _ZodString.init(arg0, arg1);
});
export const ZodEmail = util.$constructor("ZodEmail", (arg0, arg1) => {
  const $ZodEmail = util.$ZodEmail;
  $ZodEmail.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodGUID = util.$constructor("ZodGUID", (arg0, arg1) => {
  const $ZodGUID = util.$ZodGUID;
  $ZodGUID.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodUUID = util.$constructor("ZodUUID", (arg0, arg1) => {
  const $ZodUUID = util.$ZodUUID;
  $ZodUUID.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodURL = util.$constructor("ZodURL", (arg0, arg1) => {
  const $ZodURL = util.$ZodURL;
  $ZodURL.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodEmoji = util.$constructor("ZodEmoji", (arg0, arg1) => {
  const $ZodEmoji = util.$ZodEmoji;
  $ZodEmoji.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodNanoID = util.$constructor("ZodNanoID", (arg0, arg1) => {
  const $ZodNanoID = util.$ZodNanoID;
  $ZodNanoID.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodCUID = util.$constructor("ZodCUID", (arg0, arg1) => {
  const $ZodCUID = util.$ZodCUID;
  $ZodCUID.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodCUID2 = util.$constructor("ZodCUID2", (arg0, arg1) => {
  const $ZodCUID2 = util.$ZodCUID2;
  $ZodCUID2.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodULID = util.$constructor("ZodULID", (arg0, arg1) => {
  const $ZodULID = util.$ZodULID;
  $ZodULID.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodXID = util.$constructor("ZodXID", (arg0, arg1) => {
  const $ZodXID = util.$ZodXID;
  $ZodXID.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodKSUID = util.$constructor("ZodKSUID", (arg0, arg1) => {
  const $ZodKSUID = util.$ZodKSUID;
  $ZodKSUID.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodIPv4 = util.$constructor("ZodIPv4", (arg0, arg1) => {
  const $ZodIPv4 = util.$ZodIPv4;
  $ZodIPv4.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodMAC = util.$constructor("ZodMAC", (arg0, arg1) => {
  const $ZodMAC = util.$ZodMAC;
  $ZodMAC.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodIPv6 = util.$constructor("ZodIPv6", (arg0, arg1) => {
  const $ZodIPv6 = util.$ZodIPv6;
  $ZodIPv6.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodCIDRv4 = util.$constructor("ZodCIDRv4", (arg0, arg1) => {
  const $ZodCIDRv4 = util.$ZodCIDRv4;
  $ZodCIDRv4.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodCIDRv6 = util.$constructor("ZodCIDRv6", (arg0, arg1) => {
  const $ZodCIDRv6 = util.$ZodCIDRv6;
  $ZodCIDRv6.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodBase64 = util.$constructor("ZodBase64", (arg0, arg1) => {
  const $ZodBase64 = util.$ZodBase64;
  $ZodBase64.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodBase64URL = util.$constructor("ZodBase64URL", (arg0, arg1) => {
  const $ZodBase64URL = util.$ZodBase64URL;
  $ZodBase64URL.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodE164 = util.$constructor("ZodE164", (arg0, arg1) => {
  const $ZodE164 = util.$ZodE164;
  $ZodE164.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodJWT = util.$constructor("ZodJWT", (arg0, arg1) => {
  const $ZodJWT = util.$ZodJWT;
  $ZodJWT.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodCustomStringFormat = util.$constructor("ZodCustomStringFormat", (arg0, arg1) => {
  const $ZodCustomStringFormat = util.$ZodCustomStringFormat;
  $ZodCustomStringFormat.init(arg0, arg1);
  const ZodStringFormat = exports.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodNumber = util.$constructor("ZodNumber", (_zod, arg1) => {
  const $ZodNumber = util.$ZodNumber;
  $ZodNumber.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (target, arg1, arg2) => stringProcessor.numberProcessor(_zod, target, arg1, arg2);
  _zod.gt = (arg0, arg1) => _zod.check(lt.gt(arg0, arg1));
  _zod.gte = (arg0, arg1) => _zod.check(lt.gte(arg0, arg1));
  _zod.min = (arg0, arg1) => _zod.check(lt.gte(arg0, arg1));
  _zod.lt = (arg0, arg1) => _zod.check(lt.lt(arg0, arg1));
  _zod.lte = (arg0, arg1) => _zod.check(lt.lte(arg0, arg1));
  _zod.max = (arg0, arg1) => _zod.check(lt.lte(arg0, arg1));
  _zod.int = (message) => _zod.check(util._int(exports.ZodNumberFormat, message));
  _zod.safe = (message) => _zod.check(util._int(exports.ZodNumberFormat, message));
  _zod.positive = (arg0) => _zod.check(lt.gt(0, arg0));
  _zod.nonnegative = (arg0) => _zod.check(lt.gte(0, arg0));
  _zod.negative = (arg0) => _zod.check(lt.lt(0, arg0));
  _zod.nonpositive = (arg0) => _zod.check(lt.lte(0, arg0));
  _zod.multipleOf = (arg0, arg1) => _zod.check(lt.multipleOf(arg0, arg1));
  _zod.step = (arg0, arg1) => _zod.check(lt.multipleOf(arg0, arg1));
  _zod.finite = () => _zod;
  const bag = _zod._zod.bag;
  let NEGATIVE_INFINITY = bag.minimum;
  const _Math = Math;
  if (NEGATIVE_INFINITY == null) {
    const _Number = Number;
    NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
  }
  let NEGATIVE_INFINITY2 = bag.exclusiveMinimum;
  if (NEGATIVE_INFINITY2 == null) {
    const _Number2 = Number;
    NEGATIVE_INFINITY2 = Number.NEGATIVE_INFINITY;
  }
  let maxResult = max(NEGATIVE_INFINITY, NEGATIVE_INFINITY2);
  if (maxResult == null) {
    maxResult = null;
  }
  _zod.minValue = maxResult;
  let POSITIVE_INFINITY = bag.maximum;
  const _Math2 = Math;
  if (POSITIVE_INFINITY == null) {
    const _Number3 = Number;
    POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
  }
  let POSITIVE_INFINITY2 = bag.exclusiveMaximum;
  if (POSITIVE_INFINITY2 == null) {
    const _Number4 = Number;
    POSITIVE_INFINITY2 = Number.POSITIVE_INFINITY;
  }
  let minResult = min(POSITIVE_INFINITY, POSITIVE_INFINITY2);
  if (minResult == null) {
    minResult = null;
  }
  _zod.maxValue = minResult;
  let str = bag.format;
  if (str == null) {
    str = "";
  }
  let hasItem = str.includes("int");
  if (!hasItem) {
    let num = bag.multipleOf;
    const _Number5 = Number;
    if (num == null) {
      num = 0.5;
    }
    hasItem = isSafeInteger(num);
  }
  _zod.isInt = hasItem;
  _zod.isFinite = true;
  let format = bag.format;
  if (format == null) {
    format = null;
  }
  _zod.format = format;
});
export const ZodNumberFormat = util.$constructor("ZodNumberFormat", (arg0, arg1) => {
  const $ZodNumberFormat = util.$ZodNumberFormat;
  $ZodNumberFormat.init(arg0, arg1);
  const ZodNumber = exports.ZodNumber;
  ZodNumber.init(arg0, arg1);
});
export const ZodBoolean = util.$constructor("ZodBoolean", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodBoolean = util.$ZodBoolean;
  $ZodBoolean.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.booleanProcessor(_zod, arg0, arg1, arg2);
});
export const ZodBigInt = util.$constructor("ZodBigInt", (_zod, arg1) => {
  const $ZodBigInt = util.$ZodBigInt;
  $ZodBigInt.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => stringProcessor.bigintProcessor(_zod, unrepresentable, arg1, arg2);
  _zod.gte = (arg0, arg1) => _zod.check(lt.gte(arg0, arg1));
  _zod.min = (arg0, arg1) => _zod.check(lt.gte(arg0, arg1));
  _zod.gt = (arg0, arg1) => _zod.check(lt.gt(arg0, arg1));
  _zod.gte = (arg0, arg1) => _zod.check(lt.gte(arg0, arg1));
  _zod.min = (arg0, arg1) => _zod.check(lt.gte(arg0, arg1));
  _zod.lt = (arg0, arg1) => _zod.check(lt.lt(arg0, arg1));
  _zod.lte = (arg0, arg1) => _zod.check(lt.lte(arg0, arg1));
  _zod.max = (arg0, arg1) => _zod.check(lt.lte(arg0, arg1));
  _zod.positive = (arg0) => _zod.check(lt.gt(BigInt(0), arg0));
  _zod.negative = (arg0) => _zod.check(lt.lt(BigInt(0), arg0));
  _zod.nonpositive = (arg0) => _zod.check(lt.lte(BigInt(0), arg0));
  _zod.nonnegative = (arg0) => _zod.check(lt.gte(BigInt(0), arg0));
  _zod.multipleOf = (arg0, arg1) => _zod.check(lt.multipleOf(arg0, arg1));
  const bag = _zod._zod.bag;
  let minimum = bag.minimum;
  if (minimum == null) {
    minimum = null;
  }
  _zod.minValue = minimum;
  let maximum = bag.maximum;
  if (maximum == null) {
    maximum = null;
  }
  _zod.maxValue = maximum;
  let format = bag.format;
  if (format == null) {
    format = null;
  }
  _zod.format = format;
});
export const ZodBigIntFormat = util.$constructor("ZodBigIntFormat", (arg0, arg1) => {
  const $ZodBigIntFormat = util.$ZodBigIntFormat;
  $ZodBigIntFormat.init(arg0, arg1);
  const ZodBigInt = exports.ZodBigInt;
  ZodBigInt.init(arg0, arg1);
});
export const ZodSymbol = util.$constructor("ZodSymbol", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodSymbol = util.$ZodSymbol;
  $ZodSymbol.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => stringProcessor.symbolProcessor(_zod, unrepresentable, arg1, arg2);
});
export const ZodUndefined = util.$constructor("ZodUndefined", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodUndefined = util.$ZodUndefined;
  $ZodUndefined.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => stringProcessor.undefinedProcessor(_zod, unrepresentable, arg1, arg2);
});
export const ZodNull = util.$constructor("ZodNull", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodNull = util.$ZodNull;
  $ZodNull.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (target, arg1, arg2) => stringProcessor.nullProcessor(_zod, target, arg1, arg2);
});
export const ZodAny = util.$constructor("ZodAny", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodAny = util.$ZodAny;
  $ZodAny.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.anyProcessor(_zod, arg0, arg1, arg2);
});
export const ZodUnknown = util.$constructor("ZodUnknown", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodUnknown = util.$ZodUnknown;
  $ZodUnknown.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.unknownProcessor(_zod, arg0, arg1, arg2);
});
export const ZodNever = util.$constructor("ZodNever", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodNever = util.$ZodNever;
  $ZodNever.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.neverProcessor(_zod, arg0, arg1, arg2);
});
export const ZodVoid = util.$constructor("ZodVoid", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodVoid = util.$ZodVoid;
  $ZodVoid.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => stringProcessor.voidProcessor(_zod, unrepresentable, arg1, arg2);
});
export const ZodDate = util.$constructor("ZodDate", function(_zod, arg1) {
  const $ZodDate = util.$ZodDate;
  $ZodDate.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => stringProcessor.dateProcessor(_zod, unrepresentable, arg1, arg2);
  _zod.min = (arg0, arg1) => _zod.check(lt.gte(arg0, arg1));
  _zod.max = (arg0, arg1) => _zod.check(lt.lte(arg0, arg1));
  const bag = _zod._zod.bag;
  let date = null;
  if (bag.minimum) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date = new Date(bag.minimum);
  }
  _zod.minDate = date;
  let date1 = null;
  if (bag.maximum) {
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    date1 = new Date(bag.maximum);
  }
  _zod.maxDate = date1;
});
export const ZodArray = util.$constructor("ZodArray", (_zod, element) => {
  const $ZodArray = util.$ZodArray;
  $ZodArray.init(_zod, element);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, element);
  _zod._zod.processJSONSchema = (arg0, arg1, path) => stringProcessor.arrayProcessor(_zod, arg0, arg1, path);
  _zod.element = element.element;
  _zod.min = (minItems, arg1) => _zod.check(lt.minLength(minItems, arg1));
  _zod.nonempty = (arg0) => _zod.check(lt.minLength(1, arg0));
  _zod.max = (maxItems, arg1) => _zod.check(lt.maxLength(maxItems, arg1));
  _zod.length = (arg0, arg1) => _zod.check(lt.length(arg0, arg1));
  _zod.unwrap = () => _zod.element;
});
export const ZodObject = util.$constructor("ZodObject", (_zod, arg1) => {
  let shape;
  _require = _zod;
  _exports = arg1;
  const $ZodObjectJIT = util.$ZodObjectJIT;
  $ZodObjectJIT.init(_zod, arg1);
  const ZodType = _exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (io, properties, path) => stringProcessor.objectProcessor(_zod, io, properties, path);
  util = require("util").util;
  util.defineLazy(_zod, "shape", () => shape.shape);
  _zod.keyof = () => {
    const keys = Object.keys(_zod._zod.def.shape);
    let fromEntriesResult = keys;
    if (Array.isArray(keys)) {
      const _Object = Object;
      fromEntriesResult = Object.fromEntries(keys.map(f98056));
    }
    const ZodEnum = exports.ZodEnum;
    const obj = { type: "enum", entries: fromEntriesResult };
    util = util3.util;
    const merged = Object.assign(util.normalizeParams(undefined));
    const zodEnum = new ZodEnum(obj);
    return zodEnum;
  };
  _zod.catchall = (catchall) => {
    const clone = _zod.clone;
    const obj = { catchall };
    const merged = Object.assign(_zod._zod.def);
    return clone(obj);
  };
  _zod.passthrough = () => {
    const clone = _zod.clone;
    const obj = { catchall: util._unknown(exports.ZodUnknown) };
    const merged = Object.assign(_zod._zod.def);
    return clone(obj);
  };
  _zod.loose = () => {
    const clone = _zod.clone;
    const obj = { catchall: util._unknown(exports.ZodUnknown) };
    const merged = Object.assign(_zod._zod.def);
    return clone(obj);
  };
  _zod.strict = () => {
    const clone = _zod.clone;
    const obj = { catchall: util._never(exports.ZodNever, undefined) };
    const merged = Object.assign(_zod._zod.def);
    return clone(obj);
  };
  _zod.strip = () => {
    const clone = _zod.clone;
    const obj = { catchall: undefined };
    const merged = Object.assign(_zod._zod.def);
    return clone(obj);
  };
  _zod.extend = (arg0) => {
    util = util3.util;
    return util.extend(_zod, arg0);
  };
  _zod.safeExtend = (arg0) => {
    util = util3.util;
    return util.safeExtend(_zod, arg0);
  };
  _zod.merge = (arg0) => {
    util = util3.util;
    return util.merge(_zod, arg0);
  };
  _zod.pick = (arg0) => {
    util = util3.util;
    return util.pick(_zod, arg0);
  };
  _zod.omit = (paragraph) => {
    util = util3.util;
    return util.omit(_zod, paragraph);
  };
  _zod.partial = () => {
    const items = [...arguments];
    util = util3.util;
    return util.partial(exports.ZodOptional, _zod, items[0]);
  };
  _zod.required = () => {
    const items = [...arguments];
    util = util3.util;
    return util.required(exports.ZodNonOptional, _zod, items[0]);
  };
});
export { ZodUnion_export as ZodUnion };
export const ZodXor = util.$constructor("ZodXor", (_zod, options) => {
  let closure_0 = _zod;
  const ZodUnion = exports.ZodUnion;
  ZodUnion.init(_zod, options);
  const $ZodXor = util.$ZodXor;
  $ZodXor.init(_zod, options);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.unionProcessor(_zod, arg0, arg1, arg2);
  _zod.options = options.options;
});
export const ZodDiscriminatedUnion = util.$constructor("ZodDiscriminatedUnion", (arg0, arg1) => {
  const ZodUnion = exports.ZodUnion;
  ZodUnion.init(arg0, arg1);
  const $ZodDiscriminatedUnion = util.$ZodDiscriminatedUnion;
  $ZodDiscriminatedUnion.init(arg0, arg1);
});
export const ZodIntersection = util.$constructor("ZodIntersection", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodIntersection = util.$ZodIntersection;
  $ZodIntersection.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, path) => stringProcessor.intersectionProcessor(_zod, arg0, arg1, path);
});
export { ZodTuple_export as ZodTuple };
export { ZodRecord_export as ZodRecord };
export const ZodMap = util.$constructor("ZodMap", (_zod, arg1) => {
  const $ZodMap = util.$ZodMap;
  $ZodMap.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => stringProcessor.mapProcessor(_zod, unrepresentable, arg1, arg2);
  ({ keyType: _zod.keyType, valueType: _zod.valueType } = arg1);
  _zod.min = () => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return _zod.check(util._minSize.apply(items));
  };
  _zod.nonempty = (message) => _zod.check(util._minSize(1, message));
  _zod.max = () => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return _zod.check(util._maxSize.apply(items));
  };
  _zod.size = () => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return _zod.check(util._size.apply(items));
  };
});
export const ZodSet = util.$constructor("ZodSet", (_zod, arg1) => {
  const $ZodSet = util.$ZodSet;
  $ZodSet.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => stringProcessor.setProcessor(_zod, unrepresentable, arg1, arg2);
  _zod.min = () => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return _zod.check(util._minSize.apply(items));
  };
  _zod.nonempty = (message) => _zod.check(util._minSize(1, message));
  _zod.max = () => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return _zod.check(util._maxSize.apply(items));
  };
  _zod.size = () => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return _zod.check(util._size.apply(items));
  };
});
export { ZodEnum_export as ZodEnum };
export const ZodLiteral = util.$constructor("ZodLiteral", (_zod, arg1) => {
  let values;
  let closure_0 = _zod;
  _exports = arg1;
  const $ZodLiteral = util.$ZodLiteral;
  $ZodLiteral.init(_zod, arg1);
  const ZodType = _exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => stringProcessor.literalProcessor(_zod, unrepresentable, arg1, arg2);
  _zod.values = new Set(arg1.values);
  const obj = {
    get() {
      if (values.values.length > 1) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("This schema contains multiple valid literal values. Use `.values` instead.");
        throw error;
      } else {
        return tmp.values[0];
      }
    }
  };
  new Set(arg1.values);
  Object.defineProperty(_zod, "value", obj);
});
export const ZodFile = util.$constructor("ZodFile", (_zod, arg1) => {
  const $ZodFile = util.$ZodFile;
  $ZodFile.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.fileProcessor(_zod, arg0, arg1, arg2);
  _zod.min = (minimum, message) => _zod.check(util._minSize(minimum, message));
  _zod.max = (maximum, message) => _zod.check(util._maxSize(maximum, message));
  _zod.mime = (items, message) => {
    const check = _zod.check;
    const _mime = util._mime;
    let tmp3 = items;
    if (!Array.isArray(items)) {
      items = [];
      items[0] = items;
      tmp3 = items;
    }
    return check(_mime(tmp3, message));
  };
});
export const ZodTransform = util.$constructor("ZodTransform", (_zod, arg1) => {
  let closure_1;
  let constructor = _zod;
  _exports = arg1;
  const $ZodTransform = util.$ZodTransform;
  $ZodTransform.init(_zod, arg1);
  const ZodType = _exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => stringProcessor.transformProcessor(constructor, unrepresentable, arg1, arg2);
  _zod._zod.parse = function(inst, direction) {
    let iter = inst;
    constructor = inst;
    if ("backward" === direction.direction) {
      const self = this;
      const self2 = this;
      ZodEncodeError = new ZodEncodeError.$ZodEncodeError(constructor.constructor.name);
      throw ZodEncodeError;
    } else {
      iter.addIssue = (fatal) => {
        if (typeof fatal === "string") {
          const issues = inst.issues;
          const push2 = issues.push;
          const util2 = util3.util;
          push2(util2.issue(fatal, inst.value, closure_1));
        } else {
          if (fatal.fatal) {
            fatal.continue = false;
          }
          if (fatal.code == null) {
            fatal.code = "custom";
          }
          if (fatal.input == null) {
            fatal.input = inst.value;
          }
          if (fatal.inst == null) {
            fatal.inst = inst;
          }
          const issues1 = inst.issues;
          const push = issues1.push;
          util = util3.util;
          push(util.issue(fatal));
        }
      };
      const transformResult = closure_1.transform(iter.value, iter);
      if (transformResult instanceof Promise) {
        iter = transformResult.then((value) => {
          inst.value = value;
          return inst;
        });
      } else {
        iter.value = transformResult;
      }
      return iter;
    }
  };
});
export const ZodOptional = util.$constructor("ZodOptional", (_zod, arg1) => {
  const $ZodOptional = util.$ZodOptional;
  $ZodOptional.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (seen, arg1, arg2) => stringProcessor.optionalProcessor(_zod, seen, arg1, arg2);
  _zod.unwrap = () => _zod._zod.def.innerType;
});
export const ZodExactOptional = util.$constructor("ZodExactOptional", (_zod, arg1) => {
  const $ZodExactOptional = util.$ZodExactOptional;
  $ZodExactOptional.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (seen, arg1, arg2) => stringProcessor.optionalProcessor(_zod, seen, arg1, arg2);
  _zod.unwrap = () => _zod._zod.def.innerType;
});
export const ZodNullable = util.$constructor("ZodNullable", (_zod, arg1) => {
  const $ZodNullable = util.$ZodNullable;
  $ZodNullable.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (target, arg1, arg2) => stringProcessor.nullableProcessor(_zod, target, arg1, arg2);
  _zod.unwrap = () => _zod._zod.def.innerType;
});
export { ZodDefault_export as ZodDefault };
export { ZodPrefault_export as ZodPrefault };
export { ZodNonOptional_export as ZodNonOptional };
export const ZodSuccess = util.$constructor("ZodSuccess", (_zod, arg1) => {
  const $ZodSuccess = util.$ZodSuccess;
  $ZodSuccess.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.successProcessor(_zod, arg0, arg1, arg2);
  _zod.unwrap = () => _zod._zod.def.innerType;
});
export { ZodCatch_export as ZodCatch };
export const ZodNaN = util.$constructor("ZodNaN", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodNaN = util.$ZodNaN;
  $ZodNaN.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => stringProcessor.nanProcessor(_zod, unrepresentable, arg1, arg2);
});
export const ZodPipe = util.$constructor("ZodPipe", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodPipe = util.$ZodPipe;
  $ZodPipe.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (io, arg1, arg2) => stringProcessor.pipeProcessor(_zod, io, arg1, arg2);
  ({ in: _zod.in, out: _zod.out } = arg1);
});
export const ZodCodec = util.$constructor("ZodCodec", (arg0, arg1) => {
  const ZodPipe = exports.ZodPipe;
  ZodPipe.init(arg0, arg1);
  const $ZodCodec = util.$ZodCodec;
  $ZodCodec.init(arg0, arg1);
});
export const ZodReadonly = util.$constructor("ZodReadonly", (_zod, arg1) => {
  const $ZodReadonly = util.$ZodReadonly;
  $ZodReadonly.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (seen, arg1, arg2) => stringProcessor.readonlyProcessor(_zod, seen, arg1, arg2);
  _zod.unwrap = () => _zod._zod.def.innerType;
});
export const ZodTemplateLiteral = util.$constructor("ZodTemplateLiteral", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodTemplateLiteral = util.$ZodTemplateLiteral;
  $ZodTemplateLiteral.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (arg0, arg1, arg2) => stringProcessor.templateLiteralProcessor(_zod, arg0, arg1, arg2);
});
export const ZodLazy = util.$constructor("ZodLazy", (_zod, arg1) => {
  const $ZodLazy = util.$ZodLazy;
  $ZodLazy.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (seen, arg1, arg2) => stringProcessor.lazyProcessor(_zod, seen, arg1, arg2);
  _zod.unwrap = () => {
    const def = _zod._zod.def;
    return def.getter();
  };
});
export const ZodPromise = util.$constructor("ZodPromise", (_zod, arg1) => {
  const $ZodPromise = util.$ZodPromise;
  $ZodPromise.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (seen, arg1, arg2) => stringProcessor.promiseProcessor(_zod, seen, arg1, arg2);
  _zod.unwrap = () => _zod._zod.def.innerType;
});
export { ZodFunction_export as ZodFunction };
export const ZodCustom = util.$constructor("ZodCustom", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodCustom = util.$ZodCustom;
  $ZodCustom.init(_zod, arg1);
  const ZodType = exports.ZodType;
  ZodType.init(_zod, arg1);
  _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => stringProcessor.customProcessor(_zod, unrepresentable, arg1, arg2);
});
export const stringbool = () => {
  const obj = { Codec: exports.ZodCodec, Boolean: exports.ZodBoolean, String: exports.ZodString };
  const items = [obj, ...HermesBuiltin.copyRestArgs()];
  return util._stringbool.apply(items);
};