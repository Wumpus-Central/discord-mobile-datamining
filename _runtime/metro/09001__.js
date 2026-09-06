// _runtime/metro/09001__.js
import _mod8935 from "08935__.js";
import stringProcessor from "../08998_stringProcessor.js";
import lt from "../09002_lt.js";
import _mod9003 from "09003__.js";
import _mod9004 from "09004__.js";
import asyncGeneratorStep from "../00005_asyncGeneratorStep.js";

let self = this;
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
    function _function(input) {
      input = undefined;
      if (input != null) {
        input = input.input;
      }
      if (Array.isArray(input)) {
        let input1;
        if (!tmp3) {
          input1 = input.input;
        }
        let obj = { type: "tuple", items: input1, rest: null };
        const util = _mod8935.util;
        const merged = Object.assign(util.normalizeParams(undefined));
        let zodTuple = new exports.ZodTuple(obj);
      } else {
        zodTuple = undefined;
        if (!tmp3) {
          zodTuple = input.input;
        }
        if (zodTuple == null) {
          zodTuple = fnResult._array(exports.ZodArray, fnResult._unknown(exports.ZodUnknown), undefined);
        }
      }
      obj = { type: "function", input: zodTuple, output: null };
      let output;
      if (input != null) {
        output = input.output;
      }
      if (output == null) {
        output = fnResult._unknown(exports.ZodUnknown);
      }
      obj.output = output;
      const zodFunction = new exports.ZodFunction(obj);
      return zodFunction;
    }
    const _Object3 = Object;
    function string(message) {
      return fnResult._string(exports.ZodString, message);
    }
    function number(message) {
      return fnResult._number(exports.ZodNumber, message);
    }
    function int(message) {
      return fnResult._int(exports.ZodNumberFormat, message);
    }
    function boolean(message) {
      return fnResult._boolean(exports.ZodBoolean, message);
    }
    function _null(arg0) {
      return fnResult._null(exports.ZodNull, arg0);
    }
    function unknown() {
      return fnResult._unknown(exports.ZodUnknown);
    }
    function never(message) {
      return fnResult._never(exports.ZodNever, message);
    }
    function array(fnResult, message) {
      return fnResult._array(exports.ZodArray, fnResult, message);
    }
    function union(roles, added) {
      const util = _mod8935.util;
      const merged = Object.assign(util.normalizeParams(added));
      const zodUnion = new exports.ZodUnion({ type: "union", options: roles });
      return zodUnion;
    }
    function intersection(arr, items2) {
      const rect = { type: "intersection", left: arr, right: items2 };
      const zodIntersection = new exports.ZodIntersection(rect);
      return zodIntersection;
    }
    function tuple(mapped2, message, message) {
      let tmp2 = message;
      if (message instanceof fnResult.$ZodType) {
        tmp2 = message;
      }
      let tmp3 = null;
      if (message instanceof fnResult.$ZodType) {
        tmp3 = message;
      }
      const util = _mod8935.util;
      const merged = Object.assign(util.normalizeParams(tmp2));
      const zodTuple = new exports.ZodTuple({ type: "tuple", items: mapped2, rest: tmp3 });
      return zodTuple;
    }
    function record(keyType, valueType, message) {
      const util = _mod8935.util;
      const merged = Object.assign(util.normalizeParams(message));
      const zodRecord = new exports.ZodRecord({ type: "record", keyType, valueType });
      return zodRecord;
    }
    function _enum(arr, message) {
      let fromEntriesResult = arr;
      if (Array.isArray(arr)) {
        const _Object = Object;
        fromEntriesResult = Object.fromEntries(arr.map((item) => {
          const items = [item, item];
          return items;
        }));
      }
      const util = _mod8935.util;
      const merged = Object.assign(util.normalizeParams(message));
      const zodEnum = new exports.ZodEnum({ type: "enum", entries: fromEntriesResult });
      return zodEnum;
    }
    function transform(transform) {
      const zodTransform = new exports.ZodTransform({ type: "transform", transform });
      return zodTransform;
    }
    function optional(innerType) {
      const zodOptional = new exports.ZodOptional({ type: "optional", innerType });
      return zodOptional;
    }
    function exactOptional(innerType) {
      const zodExactOptional = new exports.ZodExactOptional({ type: "optional", innerType });
      return zodExactOptional;
    }
    function nullable(innerType) {
      const zodNullable = new exports.ZodNullable({ type: "nullable", innerType });
      return zodNullable;
    }
    function _default(innerType, arg1) {
      closure_0 = arg1;
      const obj = { type: "default", innerType };
      Object.defineProperty(obj, "defaultValue", {
        get: () => {
          if (typeof closure_0 === "function") {
            let shallowCloneResult = closure_0();
          } else {
            const util = closure_0(8935).util;
            shallowCloneResult = util.shallowClone(closure_0);
          }
          return shallowCloneResult;
        },
        set: undefined
      });
      const zodDefault = new exports.ZodDefault(obj);
      return zodDefault;
    }
    function prefault(innerType, arg1) {
      closure_0 = arg1;
      const obj = { type: "prefault", innerType };
      Object.defineProperty(obj, "defaultValue", {
        get: () => {
          if (typeof closure_0 === "function") {
            let shallowCloneResult = closure_0();
          } else {
            const util = closure_0(8935).util;
            shallowCloneResult = util.shallowClone(closure_0);
          }
          return shallowCloneResult;
        },
        set: undefined
      });
      const zodPrefault = new exports.ZodPrefault(obj);
      return zodPrefault;
    }
    function nonoptional(innerType, message) {
      const util = _mod8935.util;
      const merged = Object.assign(util.normalizeParams(message));
      const zodNonOptional = new exports.ZodNonOptional({ type: "nonoptional", innerType });
      return zodNonOptional;
    }
    function _catch(innerType, fn) {
      let catchValue = fn;
      const obj = { type: "catch", innerType, catchValue: null };
      if (typeof fn !== "function") {
        catchValue = () => closure_0;
      }
      obj.catchValue = catchValue;
      const zodCatch = new exports.ZodCatch(obj);
      return zodCatch;
    }
    function pipe(in, out) {
      const zodPipe = new exports.ZodPipe({ type: "pipe", in: _in, out });
      return zodPipe;
    }
    function readonly(nullableResult) {
      const zodReadonly = new exports.ZodReadonly({ type: "readonly", innerType: nullableResult });
      return zodReadonly;
    }
    function lazy(getter) {
      const zodLazy = new exports.ZodLazy({ type: "lazy", getter });
      return zodLazy;
    }
    function refine(fn) {
      let obj = message;
      if (message === undefined) {
        obj = {};
      }
      return fnResult._refine(exports.ZodCustom, fn, obj);
    }
    function superRefine(arg0) {
      return fnResult._superRefine(arg0);
    }
    exports.ZodType = undefined;
    exports._ZodString = undefined;
    exports.ZodString = undefined;
    exports.ZodStringFormat = undefined;
    exports.ZodEmail = undefined;
    exports.ZodGUID = undefined;
    exports.ZodUUID = undefined;
    exports.ZodURL = undefined;
    exports.ZodEmoji = undefined;
    exports.ZodNanoID = undefined;
    exports.ZodCUID = undefined;
    exports.ZodCUID2 = undefined;
    exports.ZodULID = undefined;
    exports.ZodXID = undefined;
    exports.ZodKSUID = undefined;
    exports.ZodIPv4 = undefined;
    exports.ZodMAC = undefined;
    exports.ZodIPv6 = undefined;
    exports.ZodCIDRv4 = undefined;
    exports.ZodCIDRv6 = undefined;
    exports.ZodBase64 = undefined;
    exports.ZodBase64URL = undefined;
    exports.ZodE164 = undefined;
    exports.ZodJWT = undefined;
    exports.ZodCustomStringFormat = undefined;
    exports.ZodNumber = undefined;
    exports.ZodNumberFormat = undefined;
    exports.ZodBoolean = undefined;
    exports.ZodBigInt = undefined;
    exports.ZodBigIntFormat = undefined;
    exports.ZodSymbol = undefined;
    exports.ZodUndefined = undefined;
    exports.ZodNull = undefined;
    exports.ZodAny = undefined;
    exports.ZodUnknown = undefined;
    exports.ZodNever = undefined;
    exports.ZodVoid = undefined;
    exports.ZodDate = undefined;
    exports.ZodArray = undefined;
    exports.ZodObject = undefined;
    exports.ZodUnion = undefined;
    exports.ZodXor = undefined;
    exports.ZodDiscriminatedUnion = undefined;
    exports.ZodIntersection = undefined;
    exports.ZodTuple = undefined;
    exports.ZodRecord = undefined;
    exports.ZodMap = undefined;
    exports.ZodSet = undefined;
    exports.ZodEnum = undefined;
    exports.ZodLiteral = undefined;
    exports.ZodFile = undefined;
    exports.ZodTransform = undefined;
    exports.ZodOptional = undefined;
    exports.ZodExactOptional = undefined;
    exports.ZodNullable = undefined;
    exports.ZodDefault = undefined;
    exports.ZodPrefault = undefined;
    exports.ZodNonOptional = undefined;
    exports.ZodSuccess = undefined;
    exports.ZodCatch = undefined;
    exports.ZodNaN = undefined;
    exports.ZodPipe = undefined;
    exports.ZodCodec = undefined;
    exports.ZodReadonly = undefined;
    exports.ZodTemplateLiteral = undefined;
    exports.ZodLazy = undefined;
    exports.ZodPromise = undefined;
    exports.ZodFunction = undefined;
    exports.ZodCustom = undefined;
    exports.describe = undefined;
    exports.meta = undefined;
    exports.stringbool = undefined;
    exports.string = string;
    exports.email = function email(message) {
      return fnResult._email(exports.ZodEmail, message);
    };
    exports.guid = function guid(message) {
      return fnResult._guid(exports.ZodGUID, message);
    };
    exports.uuid = function uuid(message) {
      return fnResult._uuid(exports.ZodUUID, message);
    };
    exports.uuidv4 = function uuidv4(message) {
      return fnResult._uuidv4(exports.ZodUUID, message);
    };
    exports.uuidv6 = function uuidv6(message) {
      return fnResult._uuidv6(exports.ZodUUID, message);
    };
    exports.uuidv7 = function uuidv7(message) {
      return fnResult._uuidv7(exports.ZodUUID, message);
    };
    exports.url = function url(url) {
      return fnResult._url(exports.ZodURL, url);
    };
    exports.httpUrl = function httpUrl(message) {
      const url = { protocol: /^https?$/, hostname: fnResult.regexes.domain };
      const util = _mod8935.util;
      const merged = Object.assign(util.normalizeParams(message));
      return fnResult._url(exports.ZodURL, url);
    };
    exports.emoji = function emoji(message) {
      return fnResult._emoji(exports.ZodEmoji, message);
    };
    exports.nanoid = function nanoid(message) {
      return fnResult._nanoid(exports.ZodNanoID, message);
    };
    exports.cuid = function cuid(message) {
      return fnResult._cuid(exports.ZodCUID, message);
    };
    exports.cuid2 = function cuid2(message) {
      return fnResult._cuid2(exports.ZodCUID2, message);
    };
    exports.ulid = function ulid(message) {
      return fnResult._ulid(exports.ZodULID, message);
    };
    exports.xid = function xid(message) {
      return fnResult._xid(exports.ZodXID, message);
    };
    exports.ksuid = function ksuid(message) {
      return fnResult._ksuid(exports.ZodKSUID, message);
    };
    exports.ipv4 = function ipv4(message) {
      return fnResult._ipv4(exports.ZodIPv4, message);
    };
    exports.mac = function mac(delimiter) {
      return fnResult._mac(exports.ZodMAC, delimiter);
    };
    exports.ipv6 = function ipv6(message) {
      return fnResult._ipv6(exports.ZodIPv6, message);
    };
    exports.cidrv4 = function cidrv4(message) {
      return fnResult._cidrv4(exports.ZodCIDRv4, message);
    };
    exports.cidrv6 = function cidrv6(message) {
      return fnResult._cidrv6(exports.ZodCIDRv6, message);
    };
    exports.base64 = function base64(message) {
      return fnResult._base64(exports.ZodBase64, message);
    };
    exports.base64url = function base64url(message) {
      return fnResult._base64url(exports.ZodBase64URL, message);
    };
    exports.e164 = function e164(message) {
      return fnResult._e164(exports.ZodE164, message);
    };
    exports.jwt = function jwt(message) {
      return fnResult._jwt(exports.ZodJWT, message);
    };
    exports.stringFormat = function stringFormat(combined, hex) {
      let obj = enc;
      if (enc === undefined) {
        obj = {};
      }
      return fnResult._stringFormat(exports.ZodCustomStringFormat, combined, hex, obj);
    };
    exports.hostname = function hostname(enc) {
      return fnResult._stringFormat(exports.ZodCustomStringFormat, "hostname", fnResult.regexes.hostname, enc);
    };
    exports.hex = function hex(enc) {
      return fnResult._stringFormat(exports.ZodCustomStringFormat, "hex", fnResult.regexes.hex, enc);
    };
    exports.hash = function hash(arg0, enc) {
      let str;
      if (enc != null) {
        str = enc.enc;
      }
      if (str == null) {
        str = "hex";
      }
      const combined = "" + arg0 + "_" + str;
      if (fnResult.regexes[combined]) {
        return fnResult._stringFormat(exports.ZodCustomStringFormat, combined, tmp2, enc);
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Unrecognized hash format: " + combined);
        throw error;
      }
    };
    exports.number = number;
    exports.int = int;
    exports.float32 = function float32(message) {
      return fnResult._float32(exports.ZodNumberFormat, message);
    };
    exports.float64 = function float64(message) {
      return fnResult._float64(exports.ZodNumberFormat, message);
    };
    exports.int32 = function int32(message) {
      return fnResult._int32(exports.ZodNumberFormat, message);
    };
    exports.uint32 = function uint32(message) {
      return fnResult._uint32(exports.ZodNumberFormat, message);
    };
    exports.boolean = boolean;
    exports.bigint = function bigint(message) {
      return fnResult._bigint(exports.ZodBigInt, message);
    };
    exports.int64 = function int64(message) {
      return fnResult._int64(exports.ZodBigIntFormat, message);
    };
    exports.uint64 = function uint64(message) {
      return fnResult._uint64(exports.ZodBigIntFormat, message);
    };
    exports.symbol = function symbol(message) {
      return fnResult._symbol(exports.ZodSymbol, message);
    };
    exports.undefined = function _undefined(arg0) {
      return fnResult._undefined(exports.ZodUndefined, arg0);
    };
    exports.null = _null;
    exports.any = function any() {
      return fnResult._any(exports.ZodAny);
    };
    exports.unknown = unknown;
    exports.never = never;
    exports.void = function _void(arg0) {
      return fnResult._void(exports.ZodVoid, arg0);
    };
    exports.date = function date(message) {
      return fnResult._date(exports.ZodDate, message);
    };
    exports.array = array;
    exports.keyof = function keyof(_zod) {
      const keys = Object.keys(_zod._zod.def.shape);
      let fromEntriesResult = keys;
      if (Array.isArray(keys)) {
        const _Object = Object;
        fromEntriesResult = Object.fromEntries(keys.map((item) => {
          const items = [item, item];
          return items;
        }));
      }
      const util = _mod8935.util;
      const merged = Object.assign(util.normalizeParams(undefined));
      const zodEnum = new exports.ZodEnum({ type: "enum", entries: fromEntriesResult });
      return zodEnum;
    };
    exports.object = function object(arg0, message) {
      let obj = arg0;
      if (arg0 == null) {
        obj = {};
      }
      obj = { type: "object", shape: obj };
      const util = _mod8935.util;
      const merged = Object.assign(util.normalizeParams(message));
      const zodObject = new exports.ZodObject(obj);
      return zodObject;
    };
    exports.strictObject = function strictObject(shape, message) {
      const util = _mod8935.util;
      const merged = Object.assign(util.normalizeParams(message));
      const zodObject = new exports.ZodObject({ type: "object", shape, catchall: fnResult._never(exports.ZodNever, undefined) });
      return zodObject;
    };
    exports.looseObject = function looseObject(shape, message) {
      const util = _mod8935.util;
      const merged = Object.assign(util.normalizeParams(message));
      const zodObject = new exports.ZodObject({ type: "object", shape, catchall: fnResult._unknown(exports.ZodUnknown) });
      return zodObject;
    };
    exports.union = union;
    exports.xor = function xor(options, message) {
      const util = _mod8935.util;
      const merged = Object.assign(util.normalizeParams(message));
      const zodXor = new exports.ZodXor({ type: "union", options, inclusive: false });
      return zodXor;
    };
    exports.discriminatedUnion = function discriminatedUnion(discriminator, options, message) {
      const util = _mod8935.util;
      const merged = Object.assign(util.normalizeParams(message));
      const zodDiscriminatedUnion = new exports.ZodDiscriminatedUnion({ type: "union", options, discriminator });
      return zodDiscriminatedUnion;
    };
    exports.intersection = intersection;
    exports.tuple = tuple;
    exports.record = record;
    exports.partialRecord = function partialRecord(z11, objectResult, message) {
      const cloneResult = fnResult.clone(z11);
      cloneResult._zod.values = undefined;
      const util = _mod8935.util;
      const merged = Object.assign(util.normalizeParams(message));
      const zodRecord = new exports.ZodRecord({ type: "record", keyType: cloneResult, valueType: objectResult });
      return zodRecord;
    };
    exports.looseRecord = function looseRecord(stringResult1, anyResult, message) {
      const util = _mod8935.util;
      const merged = Object.assign(util.normalizeParams(message));
      const zodRecord = new exports.ZodRecord({ type: "record", keyType: stringResult1, valueType: anyResult, mode: "loose" });
      return zodRecord;
    };
    exports.map = function map(keyType, valueType, message) {
      const util = _mod8935.util;
      const merged = Object.assign(util.normalizeParams(message));
      const zodMap = new exports.ZodMap({ type: "map", keyType, valueType });
      return zodMap;
    };
    exports.set = function set(valueType, message) {
      const util = _mod8935.util;
      const merged = Object.assign(util.normalizeParams(message));
      const zodSet = new exports.ZodSet({ type: "set", valueType });
      return zodSet;
    };
    exports.enum = _enum;
    exports.nativeEnum = function nativeEnum(entries, message) {
      const util = _mod8935.util;
      const merged = Object.assign(util.normalizeParams(message));
      const zodEnum = new exports.ZodEnum({ type: "enum", entries });
      return zodEnum;
    };
    exports.literal = function literal(arg0, message) {
      let tmp = arg0;
      if (!Array.isArray(arg0)) {
        const items = [arg0];
        tmp = items;
      }
      const util = _mod8935.util;
      const merged = Object.assign(util.normalizeParams(message));
      const zodLiteral = new exports.ZodLiteral({ type: "literal", values: tmp });
      return zodLiteral;
    };
    exports.file = function file(dependencyMap) {
      return fnResult._file(exports.ZodFile, dependencyMap);
    };
    exports.transform = transform;
    exports.optional = optional;
    exports.exactOptional = exactOptional;
    exports.nullable = nullable;
    exports.nullish = function nullish(innerType) {
      let obj = { type: "nullable", innerType };
      const zodNullable = new exports.ZodNullable(obj);
      obj = { type: "optional", innerType: zodNullable };
      const zodOptional = new exports.ZodOptional(obj);
      return zodOptional;
    };
    exports._default = _default;
    exports.prefault = prefault;
    exports.nonoptional = nonoptional;
    exports.success = function success(innerType) {
      const zodSuccess = new exports.ZodSuccess({ type: "success", innerType });
      return zodSuccess;
    };
    exports.catch = _catch;
    exports.nan = function nan(message) {
      return fnResult._nan(exports.ZodNaN, message);
    };
    exports.pipe = pipe;
    exports.codec = function codec(in, out, decode) {
      const zodCodec = new exports.ZodCodec({ type: "pipe", in: _in, out, transform: decode.decode, reverseTransform: decode.encode });
      return zodCodec;
    };
    exports.readonly = readonly;
    exports.templateLiteral = function templateLiteral(parts, message) {
      const util = _mod8935.util;
      const merged = Object.assign(util.normalizeParams(message));
      const zodTemplateLiteral = new exports.ZodTemplateLiteral({ type: "template_literal", parts });
      return zodTemplateLiteral;
    };
    exports.lazy = lazy;
    exports.promise = function promise(response1) {
      return new exports.ZodPromise({ type: "promise", innerType: response1 });
    };
    exports._function = _function;
    exports.function = _function;
    exports._function = _function;
    exports.function = _function;
    exports.check = function check(check) {
      const ZodCheck = new fnResult.$ZodCheck({ check: "custom" });
      ZodCheck._zod.check = check;
      return ZodCheck;
    };
    exports.custom = function custom(arg0, message) {
      let fn = arg0;
      if (arg0 == null) {
        fn = () => true;
      }
      return fnResult._custom(exports.ZodCustom, fn, message);
    };
    exports.refine = refine;
    exports.superRefine = superRefine;
    exports.instanceof = function _instanceof(Class) {
      closure_0 = Class;
      let obj = message;
      if (message === undefined) {
        obj = {};
      }
      obj = {
        type: "custom",
        check: "custom",
        fn(D) {
          return D instanceof closure_0;
        },
        abort: true
      };
      const util = _mod8935.util;
      const merged = Object.assign(util.normalizeParams(obj));
      const zodCustom = new exports.ZodCustom(obj);
      zodCustom._zod.bag.Class = Class;
      zodCustom._zod.check = (value) => {
        if (!(value.value instanceof closure_0)) {
          const issues = value.issues;
          const obj = { code: "invalid_type", expected: tmp.name, input: value.value, inst: zodCustom, path: null };
          let path = zodCustom._zod.def.path;
          if (path == null) {
            path = [];
          }
          const items = [];
          HermesBuiltin.arraySpread(path, 0);
          obj.path = items;
          issues.push(obj);
        }
      };
      return zodCustom;
    };
    exports.json = function json(arg0) {
      closure_0 = arg0;
      zodLazy = new zodLazy.ZodLazy({
        type: "lazy",
        getter: () => {
          const items = [fnResult._string(exports.ZodString, closure_0), fnResult._number(exports.ZodNumber, undefined), fnResult._boolean(exports.ZodBoolean, undefined), fnResult._null(exports.ZodNull, undefined), fnResult._array(exports.ZodArray, zodLazy, undefined), ];
          let obj = { type: "record", keyType: fnResult._string(exports.ZodString, undefined), valueType: zodLazy };
          const util = _mod8935.util;
          const merged = Object.assign(util.normalizeParams(undefined));
          const zodRecord = new exports.ZodRecord(obj);
          items[5] = zodRecord;
          obj = { type: "union", options: items };
          const util2 = _mod8935.util;
          const merged1 = Object.assign(util2.normalizeParams(undefined));
          const zodUnion = new exports.ZodUnion(obj);
          return zodUnion;
        }
      });
      return zodLazy;
    };
    exports.preprocess = function preprocess(transform, out) {
      let obj = { type: "transform", transform };
      const zodTransform = new exports.ZodTransform(obj);
      obj = { type: "pipe", in: zodTransform, out };
      const zodPipe = new exports.ZodPipe(obj);
      return zodPipe;
    };
    const fnResult = fn(_mod8935);
    const metroRequire = fnResult;
    let closure_7 = fn(stringProcessor);
    let closure_8 = fn(lt);
    let closure_9 = fn(_mod9003);
    let closure_10 = fn(_mod9004);
    exports.ZodType = fnResult.$constructor("ZodType", (_standard, def) => {
      _require = _standard;
      const $ZodType = closure_6.$ZodType;
      $ZodType.init(_standard, def);
      let obj = { jsonSchema: null };
      obj = { input: require("initializeContext").createStandardJSONSchemaMethod(_standard, "input"), output: require("initializeContext").createStandardJSONSchemaMethod(_standard, "output") };
      obj.jsonSchema = obj;
      let merged = Object.assign(_standard["~standard"], obj);
      _standard.toJSONSchema = require("initializeContext").createToJSONSchemaMethod(_standard, {});
      _standard.def = def;
      _standard.type = def.type;
      obj = { value: def };
      Object.defineProperty(_standard, "_def", obj);
      _standard.check = () => {
        const items = [...arguments];
        const util = _mod8935.util;
        let checks = def.checks;
        if (checks == null) {
          checks = [];
        }
        let obj = { checks: null };
        const items1 = [
          ...checks,
          ...items.map((check) => {
            let tmp = check;
            if (typeof check === "function") {
              let obj = { _zod: null };
              obj = { check, def: { check: "custom" }, onattach: [] };
              obj._zod = obj;
              tmp = obj;
            }
            return tmp;
          })
        ];
        obj.checks = items1;
        return closure_0.clone(util.mergeDefs(def, obj), { parent: true });
      };
      _standard.with = _standard.check;
      _standard.clone = (arg0, arg1) => fnResult.clone(closure_0, arg0, arg1);
      _standard.brand = () => closure_0;
      _standard.register = (add, arg1) => {
        add.add(closure_0, arg1);
        return closure_0;
      };
      _standard.parse = (arg0, arg1) => closure_10.parse(closure_0, arg0, arg1, { callee: closure_0.parse });
      _standard.safeParse = (arg0, arg1) => closure_10.safeParse(closure_0, arg0, arg1);
      asyncGeneratorStep(async (arg0, arg1) => {
        const parseAsync = arg0;
        closure_1 = arg1;
        c2 = 0;
        return (async (arg0, value) => {
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj = { value, done: true };
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c2 = 2;
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                obj = { callee: parseAsync.parseAsync };
                c2 = 3;
                const obj1 = { value: closure_2_10.parseAsync(parseAsync, parseAsync, closure_1, obj), done: true };
                return obj1;
              }
            } catch (tmp11) {
              c2 = tmp;
              throw tmp11;
            }
          }
        })();
      });
      _standard.parseAsync = function(arg0, arg1) {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      asyncGeneratorStep(async (arg0, arg1) => {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c2 = 3;
              obj = { value: closure_2_10.safeParseAsync(closure_0, closure_0, closure_1), done: true };
              return obj;
            }
          } catch (tmp8) {
            c2 = tmp;
            throw tmp8;
          }
        }
      });
      _standard.safeParseAsync = function(arg0, arg1) {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      _standard.spa = _standard.safeParseAsync;
      _standard.encode = (arg0, arg1) => closure_10.encode(closure_0, arg0, arg1);
      _standard.decode = (arg0, arg1) => closure_10.decode(closure_0, arg0, arg1);
      asyncGeneratorStep(async (arg0, arg1) => {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c2 = 3;
              obj = { value: closure_2_10.encodeAsync(closure_0, closure_0, closure_1), done: true };
              return obj;
            }
          } catch (tmp8) {
            c2 = tmp;
            throw tmp8;
          }
        }
      });
      _standard.encodeAsync = function(arg0, arg1) {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      asyncGeneratorStep(async (arg0, arg1) => {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c2 = 3;
              obj = { value: closure_2_10.decodeAsync(closure_0, closure_0, closure_1), done: true };
              return obj;
            }
          } catch (tmp8) {
            c2 = tmp;
            throw tmp8;
          }
        }
      });
      _standard.decodeAsync = function(arg0, arg1) {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      _standard.safeEncode = (arg0, arg1) => closure_10.safeEncode(closure_0, arg0, arg1);
      _standard.safeDecode = (arg0, arg1) => closure_10.safeDecode(closure_0, arg0, arg1);
      asyncGeneratorStep(async (arg0, arg1) => {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c2 = 3;
              obj = { value: closure_2_10.safeEncodeAsync(closure_0, closure_0, closure_1), done: true };
              return obj;
            }
          } catch (tmp8) {
            c2 = tmp;
            throw tmp8;
          }
        }
      });
      _standard.safeEncodeAsync = function(arg0, arg1) {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      _require = asyncGeneratorStep(async (arg0, arg1) => {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c2 = 3;
              obj = { value: closure_2_10.safeDecodeAsync(closure_0, closure_0, closure_1), done: true };
              return obj;
            }
          } catch (tmp8) {
            c2 = tmp;
            throw tmp8;
          }
        }
      });
      _standard.safeDecodeAsync = function(arg0, arg1) {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      _standard.refine = (fn, message) => {
        let obj = message;
        if (message === undefined) {
          obj = {};
        }
        return closure_0.check(fnResult._refine(exports.ZodCustom, fn, obj));
      };
      _standard.superRefine = (arg0) => closure_0.check(fnResult._superRefine(arg0));
      _standard.overwrite = (arg0) => closure_0.check(closure_8.overwrite(arg0));
      _standard.optional = () => {
        const zodOptional = new exports.ZodOptional({ type: "optional", innerType });
        return zodOptional;
      };
      _standard.exactOptional = () => {
        const zodExactOptional = new exports.ZodExactOptional({ type: "optional", innerType });
        return zodExactOptional;
      };
      _standard.nullable = () => {
        const zodNullable = new exports.ZodNullable({ type: "nullable", innerType });
        return zodNullable;
      };
      _standard.nullish = () => {
        let obj = { type: "nullable", innerType };
        const zodNullable = new exports.ZodNullable(obj);
        obj = { type: "optional", innerType: zodNullable };
        const zodOptional = new exports.ZodOptional(obj);
        return zodOptional;
      };
      _standard.nonoptional = (message) => {
        const util = _mod8935.util;
        const merged = Object.assign(util.normalizeParams(message));
        const zodNonOptional = new exports.ZodNonOptional({ type: "nonoptional", innerType });
        return zodNonOptional;
      };
      _standard.array = () => fnResult._array(exports.ZodArray, closure_0, undefined);
      _standard.or = (arg0) => {
        const items = [closure_0, arg0];
        const util = _mod8935.util;
        const merged = Object.assign(util.normalizeParams(undefined));
        const zodUnion = new exports.ZodUnion({ type: "union", options: items });
        return zodUnion;
      };
      _standard.and = (right) => {
        const rect = { type: "intersection", left, right };
        const zodIntersection = new exports.ZodIntersection(rect);
        return zodIntersection;
      };
      _standard.transform = (transform) => {
        let obj = { type: "transform", transform };
        const zodTransform = new exports.ZodTransform(obj);
        obj = { type: "pipe", in: _in, out: zodTransform };
        const zodPipe = new exports.ZodPipe(obj);
        return zodPipe;
      };
      _standard.default = (arg0) => {
        const innerType = arg0;
        const obj = { type: "default", innerType };
        Object.defineProperty(obj, "defaultValue", {
          get: () => {
            if (typeof closure_0 === "function") {
              let shallowCloneResult = closure_0();
            } else {
              const util = closure_0(8935).util;
              shallowCloneResult = util.shallowClone(closure_0);
            }
            return shallowCloneResult;
          },
          set: undefined
        });
        const zodDefault = new exports.ZodDefault(obj);
        return zodDefault;
      };
      _standard.prefault = (arg0) => {
        const innerType = arg0;
        const obj = { type: "prefault", innerType };
        Object.defineProperty(obj, "defaultValue", {
          get: () => {
            if (typeof closure_0 === "function") {
              let shallowCloneResult = closure_0();
            } else {
              const util = closure_0(8935).util;
              shallowCloneResult = util.shallowClone(closure_0);
            }
            return shallowCloneResult;
          },
          set: undefined
        });
        const zodPrefault = new exports.ZodPrefault(obj);
        return zodPrefault;
      };
      _standard.catch = (fn) => {
        let catchValue = fn;
        const obj = { type: "catch", innerType: catchValue, catchValue: null };
        if (typeof fn !== "function") {
          catchValue = () => closure_0;
        }
        obj.catchValue = catchValue;
        const zodCatch = new exports.ZodCatch(obj);
        return zodCatch;
      };
      _standard.pipe = (out) => {
        const zodPipe = new exports.ZodPipe({ type: "pipe", in: _in, out });
        return zodPipe;
      };
      _standard.readonly = () => {
        const zodReadonly = new exports.ZodReadonly({ type: "readonly", innerType });
        return zodReadonly;
      };
      _standard.describe = (description) => {
        const cloneResult = closure_0.clone();
        const globalRegistry = fnResult.globalRegistry;
        globalRegistry.add(cloneResult, { description });
        return cloneResult;
      };
      Object.defineProperty(_standard, "description", {
        get() {
          const globalRegistry = fnResult.globalRegistry;
          value = globalRegistry.get(closure_0);
          let description;
          if (value != null) {
            description = value.description;
          }
          return description;
        },
        configurable: true
      });
      _standard.meta = () => {
        const items = [...arguments];
        if (0 === items.length) {
          const globalRegistry2 = fnResult.globalRegistry;
          return globalRegistry2.get(closure_0);
        } else {
          const cloneResult = closure_0.clone();
          const globalRegistry = fnResult.globalRegistry;
          globalRegistry.add(cloneResult, items[0]);
          return cloneResult;
        }
      };
      _standard.isOptional = () => closure_0.safeParse(undefined).success;
      _standard.isNullable = () => closure_0.safeParse(null).success;
      _standard.apply = (fn) => fn(closure_0);
      return _standard;
    });
    exports._ZodString = fnResult.$constructor("_ZodString", (_zod, arg1) => {
      const $ZodString = closure_6.$ZodString;
      $ZodString.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, format, arg2) => closure_7.stringProcessor(closure_0, arg0, format, arg2);
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
        return _zod.check(closure_8.regex.apply(items));
      };
      _zod.includes = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(closure_8.includes.apply(items));
      };
      _zod.startsWith = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(closure_8.startsWith.apply(items));
      };
      _zod.endsWith = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(closure_8.endsWith.apply(items));
      };
      _zod.min = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(closure_8.minLength.apply(items));
      };
      _zod.max = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(closure_8.maxLength.apply(items));
      };
      _zod.length = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(closure_8.length.apply(items));
      };
      _zod.nonempty = () => {
        const items = [1];
        HermesBuiltin.arraySpread(HermesBuiltin.copyRestArgs(), 1);
        return _zod.check(closure_8.minLength.apply(items));
      };
      _zod.lowercase = (arg0) => _zod.check(closure_8.lowercase(arg0));
      _zod.uppercase = (arg0) => _zod.check(closure_8.uppercase(arg0));
      _zod.trim = () => _zod.check(closure_8.trim());
      _zod.normalize = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(closure_8.normalize.apply(items));
      };
      _zod.toLowerCase = () => _zod.check(closure_8.toLowerCase());
      _zod.toUpperCase = () => _zod.check(closure_8.toUpperCase());
      _zod.slugify = () => _zod.check(closure_8.slugify());
    });
    exports.ZodString = fnResult.$constructor("ZodString", (arg0, arg1) => {
      closure_0 = arg0;
      const $ZodString = closure_6.$ZodString;
      $ZodString.init(arg0, arg1);
      const _ZodString = exports._ZodString;
      _ZodString.init(arg0, arg1);
      arg0.email = (message) => closure_0.check(fnResult._email(exports.ZodEmail, message));
      arg0.url = (url) => closure_0.check(fnResult._url(exports.ZodURL, url));
      arg0.jwt = (message) => closure_0.check(fnResult._jwt(exports.ZodJWT, message));
      arg0.emoji = (message) => closure_0.check(fnResult._emoji(exports.ZodEmoji, message));
      arg0.guid = (message) => closure_0.check(fnResult._guid(exports.ZodGUID, message));
      arg0.uuid = (message) => closure_0.check(fnResult._uuid(exports.ZodUUID, message));
      arg0.uuidv4 = (message) => closure_0.check(fnResult._uuidv4(exports.ZodUUID, message));
      arg0.uuidv6 = (message) => closure_0.check(fnResult._uuidv6(exports.ZodUUID, message));
      arg0.uuidv7 = (message) => closure_0.check(fnResult._uuidv7(exports.ZodUUID, message));
      arg0.nanoid = (message) => closure_0.check(fnResult._nanoid(exports.ZodNanoID, message));
      arg0.guid = (message) => closure_0.check(fnResult._guid(exports.ZodGUID, message));
      arg0.cuid = (message) => closure_0.check(fnResult._cuid(exports.ZodCUID, message));
      arg0.cuid2 = (message) => closure_0.check(fnResult._cuid2(exports.ZodCUID2, message));
      arg0.ulid = (message) => closure_0.check(fnResult._ulid(exports.ZodULID, message));
      arg0.base64 = (message) => closure_0.check(fnResult._base64(exports.ZodBase64, message));
      arg0.base64url = (message) => closure_0.check(fnResult._base64url(exports.ZodBase64URL, message));
      arg0.xid = (message) => closure_0.check(fnResult._xid(exports.ZodXID, message));
      arg0.ksuid = (message) => closure_0.check(fnResult._ksuid(exports.ZodKSUID, message));
      arg0.ipv4 = (message) => closure_0.check(fnResult._ipv4(exports.ZodIPv4, message));
      arg0.ipv6 = (message) => closure_0.check(fnResult._ipv6(exports.ZodIPv6, message));
      arg0.cidrv4 = (message) => closure_0.check(fnResult._cidrv4(exports.ZodCIDRv4, message));
      arg0.cidrv6 = (message) => closure_0.check(fnResult._cidrv6(exports.ZodCIDRv6, message));
      arg0.e164 = (message) => closure_0.check(fnResult._e164(exports.ZodE164, message));
      arg0.datetime = (arg0) => closure_0.check(closure_9.datetime(arg0));
      arg0.date = (arg0) => closure_0.check(closure_9.date(arg0));
      arg0.time = (arg0) => closure_0.check(closure_9.time(arg0));
      arg0.duration = (arg0) => closure_0.check(closure_9.duration(arg0));
    });
    exports.ZodStringFormat = fnResult.$constructor("ZodStringFormat", (arg0, arg1) => {
      const $ZodStringFormat = fnResult.$ZodStringFormat;
      $ZodStringFormat.init(arg0, arg1);
      const _ZodString = exports._ZodString;
      _ZodString.init(arg0, arg1);
    });
    exports.ZodEmail = fnResult.$constructor("ZodEmail", (arg0, arg1) => {
      const $ZodEmail = fnResult.$ZodEmail;
      $ZodEmail.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodGUID = fnResult.$constructor("ZodGUID", (arg0, arg1) => {
      const $ZodGUID = fnResult.$ZodGUID;
      $ZodGUID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodUUID = fnResult.$constructor("ZodUUID", (arg0, arg1) => {
      const $ZodUUID = fnResult.$ZodUUID;
      $ZodUUID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodURL = fnResult.$constructor("ZodURL", (arg0, arg1) => {
      const $ZodURL = fnResult.$ZodURL;
      $ZodURL.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodEmoji = fnResult.$constructor("ZodEmoji", (arg0, arg1) => {
      const $ZodEmoji = fnResult.$ZodEmoji;
      $ZodEmoji.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodNanoID = fnResult.$constructor("ZodNanoID", (arg0, arg1) => {
      const $ZodNanoID = fnResult.$ZodNanoID;
      $ZodNanoID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCUID = fnResult.$constructor("ZodCUID", (arg0, arg1) => {
      const $ZodCUID = fnResult.$ZodCUID;
      $ZodCUID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCUID2 = fnResult.$constructor("ZodCUID2", (arg0, arg1) => {
      const $ZodCUID2 = fnResult.$ZodCUID2;
      $ZodCUID2.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodULID = fnResult.$constructor("ZodULID", (arg0, arg1) => {
      const $ZodULID = fnResult.$ZodULID;
      $ZodULID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodXID = fnResult.$constructor("ZodXID", (arg0, arg1) => {
      const $ZodXID = fnResult.$ZodXID;
      $ZodXID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodKSUID = fnResult.$constructor("ZodKSUID", (arg0, arg1) => {
      const $ZodKSUID = fnResult.$ZodKSUID;
      $ZodKSUID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodIPv4 = fnResult.$constructor("ZodIPv4", (arg0, arg1) => {
      const $ZodIPv4 = fnResult.$ZodIPv4;
      $ZodIPv4.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodMAC = fnResult.$constructor("ZodMAC", (arg0, arg1) => {
      const $ZodMAC = fnResult.$ZodMAC;
      $ZodMAC.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodIPv6 = fnResult.$constructor("ZodIPv6", (arg0, arg1) => {
      const $ZodIPv6 = fnResult.$ZodIPv6;
      $ZodIPv6.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCIDRv4 = fnResult.$constructor("ZodCIDRv4", (arg0, arg1) => {
      const $ZodCIDRv4 = fnResult.$ZodCIDRv4;
      $ZodCIDRv4.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCIDRv6 = fnResult.$constructor("ZodCIDRv6", (arg0, arg1) => {
      const $ZodCIDRv6 = fnResult.$ZodCIDRv6;
      $ZodCIDRv6.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodBase64 = fnResult.$constructor("ZodBase64", (arg0, arg1) => {
      const $ZodBase64 = fnResult.$ZodBase64;
      $ZodBase64.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodBase64URL = fnResult.$constructor("ZodBase64URL", (arg0, arg1) => {
      const $ZodBase64URL = fnResult.$ZodBase64URL;
      $ZodBase64URL.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodE164 = fnResult.$constructor("ZodE164", (arg0, arg1) => {
      const $ZodE164 = fnResult.$ZodE164;
      $ZodE164.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodJWT = fnResult.$constructor("ZodJWT", (arg0, arg1) => {
      const $ZodJWT = fnResult.$ZodJWT;
      $ZodJWT.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCustomStringFormat = fnResult.$constructor("ZodCustomStringFormat", (arg0, arg1) => {
      const $ZodCustomStringFormat = fnResult.$ZodCustomStringFormat;
      $ZodCustomStringFormat.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodNumber = fnResult.$constructor("ZodNumber", (_zod, arg1) => {
      const $ZodNumber = closure_6.$ZodNumber;
      $ZodNumber.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (target, arg1, arg2) => closure_7.numberProcessor(closure_0, target, arg1, arg2);
      _zod.gt = (arg0, arg1) => _zod.check(closure_8.gt(arg0, arg1));
      _zod.gte = (arg0, arg1) => _zod.check(closure_8.gte(arg0, arg1));
      _zod.min = (arg0, arg1) => _zod.check(closure_8.gte(arg0, arg1));
      _zod.lt = (arg0, arg1) => _zod.check(closure_8.lt(arg0, arg1));
      _zod.lte = (arg0, arg1) => _zod.check(closure_8.lte(arg0, arg1));
      _zod.max = (arg0, arg1) => _zod.check(closure_8.lte(arg0, arg1));
      _zod.int = (message) => _zod.check(fnResult._int(exports.ZodNumberFormat, message));
      _zod.safe = (message) => _zod.check(fnResult._int(exports.ZodNumberFormat, message));
      _zod.positive = (arg0) => _zod.check(closure_8.gt(0, arg0));
      _zod.nonnegative = (arg0) => _zod.check(closure_8.gte(0, arg0));
      _zod.negative = (arg0) => _zod.check(closure_8.lt(0, arg0));
      _zod.nonpositive = (arg0) => _zod.check(closure_8.lte(0, arg0));
      _zod.multipleOf = (arg0, arg1) => _zod.check(closure_8.multipleOf(arg0, arg1));
      _zod.step = (arg0, arg1) => _zod.check(closure_8.multipleOf(arg0, arg1));
      _zod.finite = () => closure_0;
      const bag = _zod._zod.bag;
      let NEGATIVE_INFINITY = bag.minimum;
      if (NEGATIVE_INFINITY == null) {
        const _Number = Number;
        NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
      }
      let NEGATIVE_INFINITY2 = bag.exclusiveMinimum;
      if (NEGATIVE_INFINITY2 == null) {
        const _Number2 = Number;
        NEGATIVE_INFINITY2 = Number.NEGATIVE_INFINITY;
      }
      let bound = Math.max(NEGATIVE_INFINITY, NEGATIVE_INFINITY2);
      if (bound == null) {
        bound = null;
      }
      _zod.minValue = bound;
      let POSITIVE_INFINITY = bag.maximum;
      if (POSITIVE_INFINITY == null) {
        const _Number3 = Number;
        POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
      }
      let POSITIVE_INFINITY2 = bag.exclusiveMaximum;
      if (POSITIVE_INFINITY2 == null) {
        const _Number4 = Number;
        POSITIVE_INFINITY2 = Number.POSITIVE_INFINITY;
      }
      let bound1 = Math.min(POSITIVE_INFINITY, POSITIVE_INFINITY2);
      if (bound1 == null) {
        bound1 = null;
      }
      _zod.maxValue = bound1;
      let str = bag.format;
      if (str == null) {
        str = "";
      }
      let hasItem = str.includes("int");
      if (!hasItem) {
        let num = bag.multipleOf;
        if (num == null) {
          num = 0.5;
        }
        hasItem = Number.isSafeInteger(num);
      }
      _zod.isInt = hasItem;
      _zod.isFinite = true;
      let format = bag.format;
      if (format == null) {
        format = null;
      }
      _zod.format = format;
    });
    exports.ZodNumberFormat = fnResult.$constructor("ZodNumberFormat", (arg0, arg1) => {
      const $ZodNumberFormat = fnResult.$ZodNumberFormat;
      $ZodNumberFormat.init(arg0, arg1);
      const ZodNumber = exports.ZodNumber;
      ZodNumber.init(arg0, arg1);
    });
    exports.ZodBoolean = fnResult.$constructor("ZodBoolean", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodBoolean = closure_6.$ZodBoolean;
      $ZodBoolean.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.booleanProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodBigInt = fnResult.$constructor("ZodBigInt", (_zod, arg1) => {
      const $ZodBigInt = closure_6.$ZodBigInt;
      $ZodBigInt.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => closure_7.bigintProcessor(closure_0, unrepresentable, arg1, arg2);
      _zod.gte = (arg0, arg1) => _zod.check(closure_8.gte(arg0, arg1));
      _zod.min = (arg0, arg1) => _zod.check(closure_8.gte(arg0, arg1));
      _zod.gt = (arg0, arg1) => _zod.check(closure_8.gt(arg0, arg1));
      _zod.gte = (arg0, arg1) => _zod.check(closure_8.gte(arg0, arg1));
      _zod.min = (arg0, arg1) => _zod.check(closure_8.gte(arg0, arg1));
      _zod.lt = (arg0, arg1) => _zod.check(closure_8.lt(arg0, arg1));
      _zod.lte = (arg0, arg1) => _zod.check(closure_8.lte(arg0, arg1));
      _zod.max = (arg0, arg1) => _zod.check(closure_8.lte(arg0, arg1));
      _zod.positive = (arg0) => _zod.check(closure_8.gt(BigInt(0), arg0));
      _zod.negative = (arg0) => _zod.check(closure_8.lt(BigInt(0), arg0));
      _zod.nonpositive = (arg0) => _zod.check(closure_8.lte(BigInt(0), arg0));
      _zod.nonnegative = (arg0) => _zod.check(closure_8.gte(BigInt(0), arg0));
      _zod.multipleOf = (arg0, arg1) => _zod.check(closure_8.multipleOf(arg0, arg1));
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
    exports.ZodBigIntFormat = fnResult.$constructor("ZodBigIntFormat", (arg0, arg1) => {
      const $ZodBigIntFormat = fnResult.$ZodBigIntFormat;
      $ZodBigIntFormat.init(arg0, arg1);
      const ZodBigInt = exports.ZodBigInt;
      ZodBigInt.init(arg0, arg1);
    });
    exports.ZodSymbol = fnResult.$constructor("ZodSymbol", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodSymbol = closure_6.$ZodSymbol;
      $ZodSymbol.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => closure_7.symbolProcessor(closure_0, unrepresentable, arg1, arg2);
    });
    exports.ZodUndefined = fnResult.$constructor("ZodUndefined", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodUndefined = closure_6.$ZodUndefined;
      $ZodUndefined.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => closure_7.undefinedProcessor(closure_0, unrepresentable, arg1, arg2);
    });
    exports.ZodNull = fnResult.$constructor("ZodNull", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodNull = closure_6.$ZodNull;
      $ZodNull.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (target, arg1, arg2) => closure_7.nullProcessor(closure_0, target, arg1, arg2);
    });
    exports.ZodAny = fnResult.$constructor("ZodAny", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodAny = closure_6.$ZodAny;
      $ZodAny.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.anyProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodUnknown = fnResult.$constructor("ZodUnknown", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodUnknown = closure_6.$ZodUnknown;
      $ZodUnknown.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.unknownProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodNever = fnResult.$constructor("ZodNever", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodNever = closure_6.$ZodNever;
      $ZodNever.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.neverProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodVoid = fnResult.$constructor("ZodVoid", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodVoid = closure_6.$ZodVoid;
      $ZodVoid.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => closure_7.voidProcessor(closure_0, unrepresentable, arg1, arg2);
    });
    exports.ZodDate = fnResult.$constructor("ZodDate", (_zod, arg1) => {
      const $ZodDate = closure_6.$ZodDate;
      $ZodDate.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => closure_7.dateProcessor(closure_0, unrepresentable, arg1, arg2);
      _zod.min = (arg0, arg1) => _zod.check(closure_8.gte(arg0, arg1));
      _zod.max = (arg0, arg1) => _zod.check(closure_8.lte(arg0, arg1));
      const bag = _zod._zod.bag;
      let date = null;
      if (bag.minimum) {
        const _Date = Date;
        date = new Date(bag.minimum);
      }
      _zod.minDate = date;
      let date1 = null;
      if (bag.maximum) {
        const _Date2 = Date;
        date1 = new Date(bag.maximum);
      }
      _zod.maxDate = date1;
    });
    exports.ZodArray = fnResult.$constructor("ZodArray", (_zod, element) => {
      const $ZodArray = closure_6.$ZodArray;
      $ZodArray.init(_zod, element);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, element);
      _zod._zod.processJSONSchema = (arg0, arg1, path) => closure_7.arrayProcessor(closure_0, arg0, arg1, path);
      _zod.element = element.element;
      _zod.min = (minItems, arg1) => _zod.check(closure_8.minLength(minItems, arg1));
      _zod.nonempty = (arg0) => _zod.check(closure_8.minLength(1, arg0));
      _zod.max = (maxItems, arg1) => _zod.check(closure_8.maxLength(maxItems, arg1));
      _zod.length = (arg0, arg1) => _zod.check(closure_8.length(arg0, arg1));
      _zod.unwrap = () => _zod.element;
    });
    exports.ZodObject = fnResult.$constructor("ZodObject", (_zod, arg1) => {
      _require = _zod;
      _exports = arg1;
      const $ZodObjectJIT = closure_6.$ZodObjectJIT;
      $ZodObjectJIT.init(_zod, arg1);
      const ZodType = _exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (io, properties, path) => closure_7.objectProcessor(closure_0, io, properties, path);
      let util = require("08935__.js").util;
      util.defineLazy(_zod, "shape", () => shape.shape);
      _zod.keyof = () => {
        const keys = Object.keys(_zod._zod.def.shape);
        let fromEntriesResult = keys;
        if (Array.isArray(keys)) {
          const _Object = Object;
          fromEntriesResult = Object.fromEntries(keys.map((item) => {
            const items = [item, item];
            return items;
          }));
        }
        const util = _mod8935.util;
        const merged = Object.assign(util.normalizeParams(undefined));
        const zodEnum = new exports.ZodEnum({ type: "enum", entries: fromEntriesResult });
        return zodEnum;
      };
      _zod.catchall = (catchall) => {
        const obj = {};
        const merged = Object.assign(_zod._zod.def);
        obj.catchall = catchall;
        return _zod.clone(obj);
      };
      _zod.passthrough = () => {
        const obj = {};
        const merged = Object.assign(_zod._zod.def);
        obj.catchall = fnResult._unknown(exports.ZodUnknown);
        return _zod.clone(obj);
      };
      _zod.loose = () => {
        const obj = {};
        const merged = Object.assign(_zod._zod.def);
        obj.catchall = fnResult._unknown(exports.ZodUnknown);
        return _zod.clone(obj);
      };
      _zod.strict = () => {
        const obj = {};
        const merged = Object.assign(_zod._zod.def);
        obj.catchall = fnResult._never(exports.ZodNever, undefined);
        return _zod.clone(obj);
      };
      _zod.strip = () => {
        const obj = {};
        const merged = Object.assign(_zod._zod.def);
        obj.catchall = undefined;
        return _zod.clone(obj);
      };
      _zod.extend = (arg0) => {
        const util = _mod8935.util;
        return util.extend(closure_0, arg0);
      };
      _zod.safeExtend = (arg0) => {
        const util = _mod8935.util;
        return util.safeExtend(closure_0, arg0);
      };
      _zod.merge = (arg0) => {
        const util = _mod8935.util;
        return util.merge(closure_0, arg0);
      };
      _zod.pick = (arg0) => {
        const util = _mod8935.util;
        return util.pick(closure_0, arg0);
      };
      _zod.omit = (paragraph) => {
        const util = _mod8935.util;
        return util.omit(closure_0, paragraph);
      };
      _zod.partial = () => {
        const items = [...arguments];
        const util = _mod8935.util;
        return util.partial(exports.ZodOptional, closure_0, items[0]);
      };
      _zod.required = () => {
        const items = [...arguments];
        const util = _mod8935.util;
        return util.required(exports.ZodNonOptional, closure_0, items[0]);
      };
    });
    exports.ZodUnion = fnResult.$constructor("ZodUnion", (_zod, options) => {
      closure_0 = _zod;
      const $ZodUnion = closure_6.$ZodUnion;
      $ZodUnion.init(_zod, options);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, options);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.unionProcessor(closure_0, arg0, arg1, arg2);
      _zod.options = options.options;
    });
    exports.ZodXor = fnResult.$constructor("ZodXor", (_zod, options) => {
      closure_0 = _zod;
      const ZodUnion = exports.ZodUnion;
      ZodUnion.init(_zod, options);
      const $ZodXor = closure_6.$ZodXor;
      $ZodXor.init(_zod, options);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.unionProcessor(closure_0, arg0, arg1, arg2);
      _zod.options = options.options;
    });
    exports.ZodDiscriminatedUnion = fnResult.$constructor("ZodDiscriminatedUnion", (arg0, arg1) => {
      const ZodUnion = exports.ZodUnion;
      ZodUnion.init(arg0, arg1);
      const $ZodDiscriminatedUnion = fnResult.$ZodDiscriminatedUnion;
      $ZodDiscriminatedUnion.init(arg0, arg1);
    });
    exports.ZodIntersection = fnResult.$constructor("ZodIntersection", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodIntersection = closure_6.$ZodIntersection;
      $ZodIntersection.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, path) => closure_7.intersectionProcessor(closure_0, arg0, arg1, path);
    });
    exports.ZodTuple = fnResult.$constructor("ZodTuple", (_zod, arg1) => {
      const $ZodTuple = closure_6.$ZodTuple;
      $ZodTuple.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (target, items, path) => closure_7.tupleProcessor(closure_0, target, items, path);
      _zod.rest = (rest) => {
        const obj = {};
        const merged = Object.assign(_zod._zod.def);
        obj.rest = rest;
        return _zod.clone(obj);
      };
    });
    exports.ZodRecord = fnResult.$constructor("ZodRecord", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodRecord = closure_6.$ZodRecord;
      $ZodRecord.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (target, patternProperties, path) => closure_7.recordProcessor(closure_0, target, patternProperties, path);
      ({ keyType: _zod.keyType, valueType: _zod.valueType } = arg1);
    });
    exports.ZodMap = fnResult.$constructor("ZodMap", (_zod, arg1) => {
      const $ZodMap = closure_6.$ZodMap;
      $ZodMap.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => closure_7.mapProcessor(closure_0, unrepresentable, arg1, arg2);
      ({ keyType: _zod.keyType, valueType: _zod.valueType } = arg1);
      _zod.min = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(fnResult._minSize.apply(items));
      };
      _zod.nonempty = (message) => _zod.check(fnResult._minSize(1, message));
      _zod.max = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(fnResult._maxSize.apply(items));
      };
      _zod.size = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(fnResult._size.apply(items));
      };
    });
    exports.ZodSet = fnResult.$constructor("ZodSet", (_zod, arg1) => {
      const $ZodSet = closure_6.$ZodSet;
      $ZodSet.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => processor.setProcessor(closure_0, unrepresentable, arg1, arg2);
      _zod.min = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(fnResult._minSize.apply(items));
      };
      _zod.nonempty = (message) => _zod.check(fnResult._minSize(1, message));
      _zod.max = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(fnResult._maxSize.apply(items));
      };
      _zod.size = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(fnResult._size.apply(items));
      };
    });
    exports.ZodEnum = fnResult.$constructor("ZodEnum", (_zod, arg1) => {
      closure_0 = _zod;
      _exports = arg1;
      const $ZodEnum = closure_6.$ZodEnum;
      $ZodEnum.init(_zod, arg1);
      const ZodType = _exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.enumProcessor(closure_0, arg0, arg1, arg2);
      _zod.enum = arg1.entries;
      _zod.options = Object.values(arg1.entries);
      const set = new Set(Object.keys(arg1.entries));
      _zod.extract = (arg0, message) => {
        let obj = {};
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
            let tmp6 = new.target;
            let tmp7 = new.target;
            let error = new Error("Key " + tmp2 + " not found in enum");
            throw error;
          }
        }
        obj = {};
        const merged = Object.assign(closure_1);
        obj.checks = [];
        const util = _mod8935.util;
        const merged1 = Object.assign(util.normalizeParams(message));
        obj.entries = obj;
        const zodEnum = new exports.ZodEnum(obj);
        return zodEnum;
      };
      _zod.exclude = (arg0, message) => {
        let obj = {};
        const merged = Object.assign(closure_1.entries);
        const iter = arg0[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp5 = nextResult;
          if (set.has(nextResult)) {
            delete tmp[tmp2];
            continue;
          } else {
            let tmp7 = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = " not found in enum";
            let str2 = "Key ";
            let tmp9 = new.target;
            let tmp10 = new.target;
            let error = new Error("Key " + tmp5 + " not found in enum");
            throw error;
          }
        }
        obj = {};
        const merged1 = Object.assign(closure_1);
        obj.checks = [];
        const util = _mod8935.util;
        const merged2 = Object.assign(util.normalizeParams(message));
        obj.entries = obj;
        const zodEnum = new exports.ZodEnum(obj);
        return zodEnum;
      };
    });
    exports.ZodLiteral = fnResult.$constructor("ZodLiteral", (_zod, arg1) => {
      closure_0 = _zod;
      _exports = arg1;
      const $ZodLiteral = closure_6.$ZodLiteral;
      $ZodLiteral.init(_zod, arg1);
      const ZodType = _exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => closure_7.literalProcessor(closure_0, unrepresentable, arg1, arg2);
      _zod.values = new Set(arg1.values);
      Object.defineProperty(_zod, "value", {
        get() {
          if (values.values.length > 1) {
            const _Error = Error;
            const error = new Error("This schema contains multiple valid literal values. Use `.values` instead.");
            throw error;
          } else {
            return tmp.values[0];
          }
        }
      });
    });
    exports.ZodFile = fnResult.$constructor("ZodFile", (_zod, arg1) => {
      const $ZodFile = closure_6.$ZodFile;
      $ZodFile.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.fileProcessor(closure_0, arg0, arg1, arg2);
      _zod.min = (minimum, message) => _zod.check(fnResult._minSize(minimum, message));
      _zod.max = (maximum, message) => _zod.check(fnResult._maxSize(maximum, message));
      _zod.mime = (items, message) => {
        let tmp3 = items;
        if (!Array.isArray(items)) {
          items = [];
          items[0] = items;
          tmp3 = items;
        }
        return _zod.check(fnResult._mime(tmp3, message));
      };
    });
    exports.ZodTransform = fnResult.$constructor("ZodTransform", (_zod, arg1) => {
      let constructor = _zod;
      _exports = arg1;
      const $ZodTransform = ZodEncodeError.$ZodTransform;
      $ZodTransform.init(_zod, arg1);
      const ZodType = _exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => closure_7.transformProcessor(closure_0, unrepresentable, arg1, arg2);
      _zod._zod.parse = (inst, direction) => {
        let iter = inst;
        constructor = inst;
        if ("backward" === direction.direction) {
          ZodEncodeError = new ZodEncodeError.$ZodEncodeError(constructor.constructor.name);
          throw ZodEncodeError;
        } else {
          iter.addIssue = (fatal) => {
            if (typeof fatal === "string") {
              const issues = inst.issues;
              const util2 = _mod8935.util;
              issues.push(util2.issue(fatal, inst.value, closure_1));
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
              const util = _mod8935.util;
              issues1.push(util.issue(fatal));
            }
          };
          const transformResult = closure_1.transform(iter.value, iter);
          if (transformResult instanceof Promise) {
            iter = transformResult.then((value) => {
              closure_0.value = value;
              return closure_0;
            });
          } else {
            iter.value = transformResult;
          }
          return iter;
        }
      };
    });
    exports.ZodOptional = fnResult.$constructor("ZodOptional", (_zod, arg1) => {
      const $ZodOptional = closure_6.$ZodOptional;
      $ZodOptional.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (seen, arg1, arg2) => closure_7.optionalProcessor(closure_0, seen, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodExactOptional = fnResult.$constructor("ZodExactOptional", (_zod, arg1) => {
      const $ZodExactOptional = closure_6.$ZodExactOptional;
      $ZodExactOptional.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (seen, arg1, arg2) => closure_7.optionalProcessor(closure_0, seen, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodNullable = fnResult.$constructor("ZodNullable", (_zod, arg1) => {
      const $ZodNullable = closure_6.$ZodNullable;
      $ZodNullable.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (target, arg1, arg2) => closure_7.nullableProcessor(closure_0, target, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodDefault = fnResult.$constructor("ZodDefault", (_zod, arg1) => {
      const $ZodDefault = closure_6.$ZodDefault;
      $ZodDefault.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (seen, arg1, arg2) => closure_7.defaultProcessor(closure_0, seen, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
      _zod.removeDefault = _zod.unwrap;
    });
    exports.ZodPrefault = fnResult.$constructor("ZodPrefault", (_zod, arg1) => {
      const $ZodPrefault = closure_6.$ZodPrefault;
      $ZodPrefault.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (seen, arg1, arg2) => closure_7.prefaultProcessor(closure_0, seen, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodNonOptional = fnResult.$constructor("ZodNonOptional", (_zod, arg1) => {
      const $ZodNonOptional = closure_6.$ZodNonOptional;
      $ZodNonOptional.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (seen, arg1, arg2) => closure_7.nonoptionalProcessor(closure_0, seen, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodSuccess = fnResult.$constructor("ZodSuccess", (_zod, arg1) => {
      const $ZodSuccess = closure_6.$ZodSuccess;
      $ZodSuccess.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.successProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodCatch = fnResult.$constructor("ZodCatch", (_zod, arg1) => {
      const $ZodCatch = closure_6.$ZodCatch;
      $ZodCatch.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (seen, arg1, arg2) => closure_7.catchProcessor(closure_0, seen, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
      _zod.removeCatch = _zod.unwrap;
    });
    exports.ZodNaN = fnResult.$constructor("ZodNaN", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodNaN = closure_6.$ZodNaN;
      $ZodNaN.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => closure_7.nanProcessor(closure_0, unrepresentable, arg1, arg2);
    });
    exports.ZodPipe = fnResult.$constructor("ZodPipe", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodPipe = closure_6.$ZodPipe;
      $ZodPipe.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (io, arg1, arg2) => closure_7.pipeProcessor(closure_0, io, arg1, arg2);
      ({ in: _zod.in, out: _zod.out } = arg1);
    });
    exports.ZodCodec = fnResult.$constructor("ZodCodec", (arg0, arg1) => {
      const ZodPipe = exports.ZodPipe;
      ZodPipe.init(arg0, arg1);
      const $ZodCodec = fnResult.$ZodCodec;
      $ZodCodec.init(arg0, arg1);
    });
    exports.ZodReadonly = fnResult.$constructor("ZodReadonly", (_zod, arg1) => {
      const $ZodReadonly = closure_6.$ZodReadonly;
      $ZodReadonly.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (seen, arg1, arg2) => closure_7.readonlyProcessor(closure_0, seen, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodTemplateLiteral = fnResult.$constructor("ZodTemplateLiteral", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodTemplateLiteral = closure_6.$ZodTemplateLiteral;
      $ZodTemplateLiteral.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.templateLiteralProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodLazy = fnResult.$constructor("ZodLazy", (_zod, arg1) => {
      const $ZodLazy = closure_6.$ZodLazy;
      $ZodLazy.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (seen, arg1, arg2) => closure_7.lazyProcessor(closure_0, seen, arg1, arg2);
      _zod.unwrap = () => {
        const def = _zod._zod.def;
        return def.getter();
      };
    });
    exports.ZodPromise = fnResult.$constructor("ZodPromise", (_zod, arg1) => {
      closure_6.$ZodPromise.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (seen, arg1, arg2) => closure_7.promiseProcessor(closure_0, seen, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodFunction = fnResult.$constructor("ZodFunction", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodFunction = closure_6.$ZodFunction;
      $ZodFunction.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => closure_7.functionProcessor(closure_0, unrepresentable, arg1, arg2);
    });
    exports.ZodCustom = fnResult.$constructor("ZodCustom", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodCustom = closure_6.$ZodCustom;
      $ZodCustom.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (unrepresentable, arg1, arg2) => closure_7.customProcessor(closure_0, unrepresentable, arg1, arg2);
    });
    ({ describe: exports.describe, meta: exports.meta } = fnResult);
    exports.stringbool = () => {
      const items = [{ Codec: exports.ZodCodec, Boolean: exports.ZodBoolean, String: exports.ZodString }, ...HermesBuiltin.copyRestArgs()];
      return fnResult._stringbool.apply(items);
    };
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}