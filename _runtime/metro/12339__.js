import { initializeContext } from "../12335_initializeContext.js";
import { 12273__ } from "12273__.js";
// _runtime/metro/12339__.js
import asyncGeneratorStep from "module_12342";

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
            let tmp8 = key10009;
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp5 = self2;
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
              let tmp4 = hasOwnPropertyResult;
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    function _function(input, closure_0) {
      input = undefined;
      if (input != null) {
        input = input.input;
      }
      if (Array.isArray(input)) {
        let input1;
        if (!tmp3) {
          input1 = input.input;
        }
        let obj = { type: "tuple", items: null, rest: null };
        obj[1] = input1;
        obj[2] = null;
        const util = 12273__.util;
        const merged = Object.assign(util.normalizeParams(undefined));
        let zodTuple = new tmp.ZodTuple(obj);
      } else {
        zodTuple = undefined;
        if (!tmp3) {
          zodTuple = input.input;
        }
        if (zodTuple == null) {
          zodTuple = closure_6._array(tmp.ZodArray, closure_6._unknown(tmp.ZodUnknown), undefined);
        }
      }
      obj = { type: "function", input: zodTuple, output: null };
      let output;
      if (input != null) {
        output = input.output;
      }
      if (output == null) {
        output = closure_6._unknown(tmp.ZodUnknown);
      }
      obj[2] = output;
      const zodFunction = new exports.ZodFunction(obj);
      return zodFunction;
    }
    const _Object3 = Object;
    function string(closure_0) {
      return closure_6._string(exports.ZodString, closure_0);
    }
    function number(enc) {
      return closure_6._number(exports.ZodNumber, enc);
    }
    function int(enc) {
      return closure_6._int(exports.ZodNumberFormat, enc);
    }
    function boolean(enc) {
      return closure_6._boolean(exports.ZodBoolean, enc);
    }
    function _null(arg0) {
      return closure_6._null(exports.ZodNull, arg0);
    }
    function unknown() {
      return closure_6._unknown(exports.ZodUnknown);
    }
    function never(enc) {
      return closure_6._never(exports.ZodNever, enc);
    }
    function array(closure_0, enc) {
      return closure_6._array(exports.ZodArray, closure_0, enc);
    }
    function union(roles, added) {
      const util = 12273__.util;
      const merged = Object.assign(util.normalizeParams(added));
      const zodUnion = new exports.ZodUnion({ type: "union", options: roles });
      return zodUnion;
    }
    function intersection(arr, items1) {
      const zodIntersection = new exports.ZodIntersection({ type: "intersection", left: arr, right: items1 });
      return zodIntersection;
    }
    function tuple(mapped2, arg1, enc) {
      let tmp2 = arg1;
      if (arg1 instanceof closure_6.$ZodType) {
        tmp2 = enc;
      }
      let tmp3 = null;
      if (arg1 instanceof closure_6.$ZodType) {
        tmp3 = arg1;
      }
      const util = 12273__.util;
      const merged = Object.assign(util.normalizeParams(tmp2));
      const zodTuple = new exports.ZodTuple({ type: "tuple", items: mapped2, rest: tmp3 });
      return zodTuple;
    }
    function record(keyType, valueType, enc) {
      const util = 12273__.util;
      const merged = Object.assign(util.normalizeParams(enc));
      const zodRecord = new exports.ZodRecord({ type: "record", keyType, valueType });
      return zodRecord;
    }
    function _enum(arr, enc) {
      let fromEntriesResult = arr;
      if (Array.isArray(arr)) {
        const _Object = Object;
        fromEntriesResult = Object.fromEntries(arr.map((arg0) => {
          const items = [arg0, arg0];
          return items;
        }));
      }
      const util = 12273__.util;
      const merged = Object.assign(util.normalizeParams(enc));
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
    function _default(innerType) {
      let closure_0 = arg1;
      const obj = { type: "default", innerType };
      Object.defineProperty(obj, "defaultValue", {
        get: () => {
          if (typeof callback === "function") {
            let shallowCloneResult = tmp();
          } else {
            const util = callback(outer1_2[1]).util;
            shallowCloneResult = util.shallowClone(tmp);
          }
          return shallowCloneResult;
        },
        set: undefined
      });
      const zodDefault = new exports.ZodDefault(obj);
      return zodDefault;
    }
    function prefault(innerType) {
      let closure_0 = arg1;
      const obj = { type: "prefault", innerType };
      Object.defineProperty(obj, "defaultValue", {
        get: () => {
          if (typeof callback === "function") {
            let shallowCloneResult = tmp();
          } else {
            const util = callback(outer1_2[1]).util;
            shallowCloneResult = util.shallowClone(tmp);
          }
          return shallowCloneResult;
        },
        set: undefined
      });
      const zodPrefault = new exports.ZodPrefault(obj);
      return zodPrefault;
    }
    function nonoptional(innerType, enc) {
      const util = 12273__.util;
      const merged = Object.assign(util.normalizeParams(enc));
      const zodNonOptional = new exports.ZodNonOptional({ type: "nonoptional", innerType });
      return zodNonOptional;
    }
    function _catch(innerType, fn) {
      let closure_0 = fn;
      const obj = { type: "catch", innerType, catchValue: null };
      if (typeof fn !== "function") {
        fn = () => closure_0;
      }
      obj[2] = fn;
      const zodCatch = new exports.ZodCatch(obj);
      return zodCatch;
    }
    function pipe(arg0, out) {
      const zodPipe = new exports.ZodPipe({ type: "pipe", in: arg0, out });
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
    function refine(fn, enc) {
      let obj = enc;
      if (enc === undefined) {
        obj = {};
      }
      return closure_6._refine(exports.ZodCustom, fn, obj);
    }
    function superRefine(arg0) {
      return closure_6._superRefine(arg0);
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
    exports.email = function email(enc) {
      return closure_6._email(exports.ZodEmail, enc);
    };
    exports.guid = function guid(enc) {
      return closure_6._guid(exports.ZodGUID, enc);
    };
    exports.uuid = function uuid(enc) {
      return closure_6._uuid(exports.ZodUUID, enc);
    };
    exports.uuidv4 = function uuidv4(enc) {
      return closure_6._uuidv4(exports.ZodUUID, enc);
    };
    exports.uuidv6 = function uuidv6(enc) {
      return closure_6._uuidv6(exports.ZodUUID, enc);
    };
    exports.uuidv7 = function uuidv7(enc) {
      return closure_6._uuidv7(exports.ZodUUID, enc);
    };
    exports.url = function url(enc) {
      return closure_6._url(exports.ZodURL, enc);
    };
    exports.httpUrl = function httpUrl(enc) {
      const util = 12273__.util;
      const merged = Object.assign(util.normalizeParams(enc));
      return closure_6._url(exports.ZodURL, { protocol: /^https?$/, hostname: closure_6.regexes.domain });
    };
    exports.emoji = function emoji(enc) {
      return closure_6._emoji(exports.ZodEmoji, enc);
    };
    exports.nanoid = function nanoid(enc) {
      return closure_6._nanoid(exports.ZodNanoID, enc);
    };
    exports.cuid = function cuid(enc) {
      return closure_6._cuid(exports.ZodCUID, enc);
    };
    exports.cuid2 = function cuid2(enc) {
      return closure_6._cuid2(exports.ZodCUID2, enc);
    };
    exports.ulid = function ulid(enc) {
      return closure_6._ulid(exports.ZodULID, enc);
    };
    exports.xid = function xid(enc) {
      return closure_6._xid(exports.ZodXID, enc);
    };
    exports.ksuid = function ksuid(enc) {
      return closure_6._ksuid(exports.ZodKSUID, enc);
    };
    exports.ipv4 = function ipv4(enc) {
      return closure_6._ipv4(exports.ZodIPv4, enc);
    };
    exports.mac = function mac(delimiter) {
      return closure_6._mac(exports.ZodMAC, delimiter);
    };
    exports.ipv6 = function ipv6(enc) {
      return closure_6._ipv6(exports.ZodIPv6, enc);
    };
    exports.cidrv4 = function cidrv4(enc) {
      return closure_6._cidrv4(exports.ZodCIDRv4, enc);
    };
    exports.cidrv6 = function cidrv6(enc) {
      return closure_6._cidrv6(exports.ZodCIDRv6, enc);
    };
    exports.base64 = function base64(enc) {
      return closure_6._base64(exports.ZodBase64, enc);
    };
    exports.base64url = function base64url(enc) {
      return closure_6._base64url(exports.ZodBase64URL, enc);
    };
    exports.e164 = function e164(enc) {
      return closure_6._e164(exports.ZodE164, enc);
    };
    exports.jwt = function jwt(enc) {
      return closure_6._jwt(exports.ZodJWT, enc);
    };
    exports.stringFormat = function stringFormat(combined, hex, enc) {
      let obj = enc;
      if (enc === undefined) {
        obj = {};
      }
      return closure_6._stringFormat(exports.ZodCustomStringFormat, combined, hex, obj);
    };
    exports.hostname = function hostname(enc) {
      return closure_6._stringFormat(exports.ZodCustomStringFormat, "hostname", closure_6.regexes.hostname, enc);
    };
    exports.hex = function hex(enc) {
      return closure_6._stringFormat(exports.ZodCustomStringFormat, "hex", closure_6.regexes.hex, enc);
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
      if (closure_6.regexes[combined]) {
        return obj._stringFormat(exports.ZodCustomStringFormat, combined, tmp2, enc);
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Unrecognized hash format: " + combined);
        throw error;
      }
    };
    exports.number = number;
    exports.int = int;
    exports.float32 = function float32(enc) {
      return closure_6._float32(exports.ZodNumberFormat, enc);
    };
    exports.float64 = function float64(enc) {
      return closure_6._float64(exports.ZodNumberFormat, enc);
    };
    exports.int32 = function int32(enc) {
      return closure_6._int32(exports.ZodNumberFormat, enc);
    };
    exports.uint32 = function uint32(enc) {
      return closure_6._uint32(exports.ZodNumberFormat, enc);
    };
    exports.boolean = boolean;
    exports.bigint = function bigint(enc) {
      return closure_6._bigint(exports.ZodBigInt, enc);
    };
    exports.int64 = function int64(enc) {
      return closure_6._int64(exports.ZodBigIntFormat, enc);
    };
    exports.uint64 = function uint64(enc) {
      return closure_6._uint64(exports.ZodBigIntFormat, enc);
    };
    exports.symbol = function symbol(enc) {
      return closure_6._symbol(exports.ZodSymbol, enc);
    };
    exports.undefined = function _undefined(arg0) {
      return closure_6._undefined(exports.ZodUndefined, arg0);
    };
    exports.null = _null;
    exports.any = function any() {
      return closure_6._any(exports.ZodAny);
    };
    exports.unknown = unknown;
    exports.never = never;
    exports.void = function _void(arg0) {
      return closure_6._void(exports.ZodVoid, arg0);
    };
    exports.date = function date(enc) {
      return closure_6._date(exports.ZodDate, enc);
    };
    exports.array = array;
    exports.keyof = function keyof(_zod) {
      const keys = Object.keys(_zod._zod.def.shape);
      let fromEntriesResult = keys;
      if (Array.isArray(keys)) {
        const _Object = Object;
        fromEntriesResult = Object.fromEntries(keys.map((arg0) => {
          const items = [arg0, arg0];
          return items;
        }));
      }
      const util = 12273__.util;
      const merged = Object.assign(util.normalizeParams(undefined));
      const zodEnum = new exports.ZodEnum({ type: "enum", entries: fromEntriesResult });
      return zodEnum;
    };
    exports.object = function object(arg0, enc) {
      let obj = arg0;
      if (arg0 == null) {
        obj = {};
      }
      obj = { type: "object", shape: obj };
      const util = 12273__.util;
      const merged = Object.assign(util.normalizeParams(enc));
      const zodObject = new exports.ZodObject(obj);
      return zodObject;
    };
    exports.strictObject = function strictObject(shape, enc) {
      const util = 12273__.util;
      const merged = Object.assign(util.normalizeParams(enc));
      const zodObject = new exports.ZodObject({ type: "object", shape, catchall: closure_6._never(exports.ZodNever, undefined) });
      return zodObject;
    };
    exports.looseObject = function looseObject(shape, enc) {
      const util = 12273__.util;
      const merged = Object.assign(util.normalizeParams(enc));
      const zodObject = new exports.ZodObject({ type: "object", shape, catchall: closure_6._unknown(exports.ZodUnknown) });
      return zodObject;
    };
    exports.union = union;
    exports.xor = function xor(options, enc) {
      const util = 12273__.util;
      const merged = Object.assign(util.normalizeParams(enc));
      const zodXor = new exports.ZodXor({ type: "union", options, inclusive: false });
      return zodXor;
    };
    exports.discriminatedUnion = function discriminatedUnion(discriminator, options, enc) {
      const util = 12273__.util;
      const merged = Object.assign(util.normalizeParams(enc));
      const zodDiscriminatedUnion = new exports.ZodDiscriminatedUnion({ type: "union", options, discriminator });
      return zodDiscriminatedUnion;
    };
    exports.intersection = intersection;
    exports.tuple = tuple;
    exports.record = record;
    exports.partialRecord = function partialRecord(z11, objectResult, enc) {
      const cloneResult = closure_6.clone(z11);
      cloneResult._zod.values = undefined;
      const util = 12273__.util;
      const merged = Object.assign(util.normalizeParams(enc));
      const zodRecord = new exports.ZodRecord({ type: "record", keyType: cloneResult, valueType: objectResult });
      return zodRecord;
    };
    exports.looseRecord = function looseRecord(stringResult1, anyResult, enc) {
      const util = 12273__.util;
      const merged = Object.assign(util.normalizeParams(enc));
      const zodRecord = new exports.ZodRecord({ type: "record", keyType: stringResult1, valueType: anyResult, mode: "loose" });
      return zodRecord;
    };
    exports.map = function map(keyType, valueType, enc) {
      const util = 12273__.util;
      const merged = Object.assign(util.normalizeParams(enc));
      const zodMap = new exports.ZodMap({ type: "map", keyType, valueType });
      return zodMap;
    };
    exports.set = function set(valueType, enc) {
      const util = 12273__.util;
      const merged = Object.assign(util.normalizeParams(enc));
      const zodSet = new exports.ZodSet({ type: "set", valueType });
      return zodSet;
    };
    exports.enum = _enum;
    exports.nativeEnum = function nativeEnum(entries, enc) {
      const util = 12273__.util;
      const merged = Object.assign(util.normalizeParams(enc));
      const zodEnum = new exports.ZodEnum({ type: "enum", entries });
      return zodEnum;
    };
    exports.literal = function literal(arg0, enc) {
      let tmp = arg0;
      if (!Array.isArray(arg0)) {
        const items = [arg0];
        tmp = items;
      }
      const util = 12273__.util;
      const merged = Object.assign(util.normalizeParams(enc));
      const zodLiteral = new exports.ZodLiteral({ type: "literal", values: tmp });
      return zodLiteral;
    };
    exports.file = function file(enc) {
      return closure_6._file(exports.ZodFile, enc);
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
    exports.nan = function nan(enc) {
      return closure_6._nan(exports.ZodNaN, enc);
    };
    exports.pipe = pipe;
    exports.codec = function codec(arg0, out, decode) {
      const zodCodec = new exports.ZodCodec({ type: "pipe", in: arg0, out, transform: decode.decode, reverseTransform: decode.encode });
      return zodCodec;
    };
    exports.readonly = readonly;
    exports.templateLiteral = function templateLiteral(parts, enc) {
      const util = 12273__.util;
      const merged = Object.assign(util.normalizeParams(enc));
      const zodTemplateLiteral = new exports.ZodTemplateLiteral({ type: "template_literal", parts });
      return zodTemplateLiteral;
    };
    exports.lazy = lazy;
    exports.promise = function promise(innerType, arg1, dataAttributes) {
      return new exports.ZodPromise({ type: "promise", innerType });
    };
    exports._function = _function;
    exports.function = _function;
    exports._function = _function;
    exports.function = _function;
    exports.check = function check(check) {
      const ZodCheck = new closure_6.$ZodCheck({ check: "custom" });
      ZodCheck._zod.check = check;
      return ZodCheck;
    };
    exports.custom = function custom(arg0, enc) {
      let fn = arg0;
      if (arg0 == null) {
        fn = () => true;
      }
      return closure_6._custom(exports.ZodCustom, fn, enc);
    };
    exports.refine = refine;
    exports.superRefine = superRefine;
    exports.instanceof = function _instanceof(Class, enc) {
      const _require = Class;
      let obj = enc;
      if (enc === undefined) {
        obj = {};
      }
      let zodCustom;
      obj = {
        type: "custom",
        check: "custom",
        fn(D, __getInternalProperties, arg2, arg3) {
          return D instanceof closure_0;
        },
        abort: true
      };
      const util = _12273__.util;
      const merged = Object.assign(util.normalizeParams(obj));
      zodCustom = new zodCustom.ZodCustom(obj);
      zodCustom._zod.bag.Class = Class;
      zodCustom._zod.check = (value) => {
        if (!(value.value instanceof closure_0)) {
          const issues = value.issues;
          const obj = { code: "invalid_type", expected: null, input: null, inst: null, path: null };
          obj[1] = tmp.name;
          obj[2] = value.value;
          obj[3] = zodCustom;
          let path = zodCustom._zod.def.path;
          if (path == null) {
            path = [];
          }
          const items = [];
          HermesBuiltin.arraySpread(path, 0);
          obj[4] = items;
          issues.push(obj);
        }
      };
      return zodCustom;
    };
    exports.json = function json(arg0) {
      let closure_0 = arg0;
      zodLazy = new zodLazy.ZodLazy({
        type: "lazy",
        getter: () => {
          const items = [outer1_6._string(zodLazy.ZodString, callback), outer1_6._number(zodLazy.ZodNumber, undefined), outer1_6._boolean(zodLazy.ZodBoolean, undefined), outer1_6._null(zodLazy.ZodNull, undefined), outer1_6._array(zodLazy.ZodArray, zodLazy, undefined), ];
          let obj = { type: "record", keyType: outer1_6._string(zodLazy.ZodString, undefined), valueType: zodLazy };
          const util = callback(outer1_2[1]).util;
          const merged = Object.assign(util.normalizeParams(undefined));
          const zodRecord = new zodLazy.ZodRecord(obj);
          items[5] = zodRecord;
          obj = { type: "union", options: items };
          const util2 = callback(outer1_2[1]).util;
          const merged1 = Object.assign(util2.normalizeParams(undefined));
          const zodUnion = new zodLazy.ZodUnion(obj);
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
    const fnResult = fn(require("module_12273"));
    let closure_7 = fn(require("stringProcessor"));
    let closure_8 = fn(require("module_12340"));
    let closure_9 = fn(require("module_12341"));
    let closure_10 = fn(require("module_12342"));
    exports.ZodType = fnResult.$constructor("ZodType", (_standard, def) => {
      let _require = _standard;
      let closure_1 = def;
      const $ZodType = closure_6.$ZodType;
      $ZodType.init(_standard, def);
      let obj = { jsonSchema: null };
      obj = { input: _initializeContext.createStandardJSONSchemaMethod(_standard, "input"), output: _initializeContext.createStandardJSONSchemaMethod(_standard, "output") };
      obj[0] = obj;
      let merged = Object.assign(_standard["~standard"], obj);
      _standard.toJSONSchema = _initializeContext.createToJSONSchemaMethod(_standard, {});
      _standard.def = def;
      _standard.type = def.type;
      obj = { value: def };
      Object.defineProperty(_standard, "_def", obj);
      _standard.check = () => {
        const items = [...arguments];
        const util = lib(outer1_2[1]).util;
        let checks = def.checks;
        if (checks == null) {
          checks = [];
        }
        let obj = { checks: null };
        const items1 = [
          ...checks,
          ...items.map((fn) => {
            let tmp = fn;
            if (typeof fn === "function") {
              let obj = { _zod: null };
              obj = { check: null, def: null, onattach: null };
              obj[0] = fn;
              obj[1] = { check: "custom" };
              obj[2] = [];
              obj[0] = obj;
              tmp = obj;
            }
            return tmp;
          })
        ];
        obj[0] = items1;
        return lib.clone(util.mergeDefs(def, obj), { parent: true });
      };
      _standard.with = _standard.check;
      _standard.clone = (arg0, arg1) => outer1_6.clone(closure_0, arg0, arg1);
      _standard.brand = () => closure_0;
      _standard.register = (add) => {
        add.add(closure_0, arg1);
        return closure_0;
      };
      _standard.parse = (arg0, arg1) => outer1_10.parse(lib, arg0, arg1, { callee: lib.parse });
      _standard.safeParse = (arg0, arg1) => outer1_10.safeParse(closure_0, arg0, arg1);
      _require = undefined;
      _require = asyncGeneratorStep((arg0, arg1) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        let c2 = 0;
        return (function*(arg0, arg1) {
          if (c2 === 2) {
            c2 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c2 = 2;
              if (arg0 === 1) {
                c2 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                obj = { callee: null };
                obj[0] = parseAsync.parseAsync;
                c2 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = outer2_10.parseAsync(parseAsync, parseAsync, closure_1, obj);
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
      _require = asyncGeneratorStep((arg0, arg1) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        let c2 = 0;
        return (function*(arg0, arg1) {
          if (c2 === 2) {
            c2 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c2 = 2;
              if (arg0 === 1) {
                c2 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c2 = 3;
                obj = { value: null, done: true };
                obj[0] = outer2_10.safeParseAsync(closure_0, closure_0, closure_1);
                return obj;
              }
            } catch (tmp8) {
              c2 = tmp;
              throw tmp8;
            }
          }
        })();
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
      _standard.encode = (arg0, arg1) => outer1_10.encode(closure_0, arg0, arg1);
      _standard.decode = (arg0, arg1) => outer1_10.decode(closure_0, arg0, arg1);
      _require = asyncGeneratorStep((arg0, arg1) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        let c2 = 0;
        return (function*(arg0, arg1) {
          if (c2 === 2) {
            c2 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c2 = 2;
              if (arg0 === 1) {
                c2 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c2 = 3;
                obj = { value: null, done: true };
                obj[0] = outer2_10.encodeAsync(closure_0, closure_0, closure_1);
                return obj;
              }
            } catch (tmp8) {
              c2 = tmp;
              throw tmp8;
            }
          }
        })();
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
      _require = asyncGeneratorStep((arg0, arg1) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        let c2 = 0;
        return (function*(arg0, arg1) {
          if (c2 === 2) {
            c2 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c2 = 2;
              if (arg0 === 1) {
                c2 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c2 = 3;
                obj = { value: null, done: true };
                obj[0] = outer2_10.decodeAsync(closure_0, closure_0, closure_1);
                return obj;
              }
            } catch (tmp8) {
              c2 = tmp;
              throw tmp8;
            }
          }
        })();
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
      _standard.safeEncode = (arg0, arg1) => outer1_10.safeEncode(closure_0, arg0, arg1);
      _standard.safeDecode = (arg0, arg1) => outer1_10.safeDecode(closure_0, arg0, arg1);
      _require = asyncGeneratorStep((arg0, arg1) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        let c2 = 0;
        return (function*(arg0, arg1) {
          if (c2 === 2) {
            c2 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c2 = 2;
              if (arg0 === 1) {
                c2 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c2 = 3;
                obj = { value: null, done: true };
                obj[0] = outer2_10.safeEncodeAsync(closure_0, closure_0, closure_1);
                return obj;
              }
            } catch (tmp8) {
              c2 = tmp;
              throw tmp8;
            }
          }
        })();
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
      _require = asyncGeneratorStep((arg0, arg1) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        let c2 = 0;
        return (function*(arg0, arg1) {
          if (c2 === 2) {
            c2 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c2 = 2;
              if (arg0 === 1) {
                c2 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c2 = 3;
                obj = { value: null, done: true };
                obj[0] = outer2_10.safeDecodeAsync(closure_0, closure_0, closure_1);
                return obj;
              }
            } catch (tmp8) {
              c2 = tmp;
              throw tmp8;
            }
          }
        })();
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
      _standard.refine = (fn, enc) => {
        let obj = enc;
        if (enc === undefined) {
          obj = {};
        }
        return lib.check(outer1_6._refine(def.ZodCustom, fn, obj));
      };
      _standard.superRefine = (arg0) => lib.check(outer1_6._superRefine(arg0));
      _standard.overwrite = (arg0) => lib.check(outer1_8.overwrite(arg0));
      _standard.optional = () => {
        const zodOptional = new def.ZodOptional({ type: "optional", innerType: closure_0 });
        return zodOptional;
      };
      _standard.exactOptional = () => {
        const zodExactOptional = new def.ZodExactOptional({ type: "optional", innerType: closure_0 });
        return zodExactOptional;
      };
      _standard.nullable = () => {
        const zodNullable = new def.ZodNullable({ type: "nullable", innerType: closure_0 });
        return zodNullable;
      };
      _standard.nullish = () => {
        let obj = { type: "nullable", innerType: closure_0 };
        const zodNullable = new def.ZodNullable(obj);
        obj = { type: "optional", innerType: zodNullable };
        const zodOptional = new def.ZodOptional(obj);
        return zodOptional;
      };
      _standard.nonoptional = (enc) => {
        const util = lib(outer1_2[1]).util;
        const merged = Object.assign(util.normalizeParams(enc));
        const zodNonOptional = new def.ZodNonOptional({ type: "nonoptional", innerType: lib });
        return zodNonOptional;
      };
      _standard.array = () => outer1_6._array(def.ZodArray, closure_0, undefined);
      _standard.or = (arg0) => {
        const items = [lib, arg0];
        const util = lib(outer1_2[1]).util;
        const merged = Object.assign(util.normalizeParams(undefined));
        const zodUnion = new def.ZodUnion({ type: "union", options: items });
        return zodUnion;
      };
      _standard.and = (right) => {
        const zodIntersection = new def.ZodIntersection({ type: "intersection", left: closure_0, right });
        return zodIntersection;
      };
      _standard.transform = (transform) => {
        let obj = { type: "transform", transform };
        const zodTransform = new def.ZodTransform(obj);
        obj = { type: "pipe", in: closure_0, out: zodTransform };
        const zodPipe = new def.ZodPipe(obj);
        return zodPipe;
      };
      _standard.default = (arg0) => {
        let closure_0 = arg0;
        const obj = { type: "default", innerType: closure_0 };
        Object.defineProperty(obj, "defaultValue", {
          get: () => {
            if (typeof callback === "function") {
              let shallowCloneResult = tmp();
            } else {
              const util = callback(outer1_2[1]).util;
              shallowCloneResult = util.shallowClone(tmp);
            }
            return shallowCloneResult;
          },
          set: undefined
        });
        const zodDefault = new def.ZodDefault(obj);
        return zodDefault;
      };
      _standard.prefault = (arg0) => {
        let closure_0 = arg0;
        const obj = { type: "prefault", innerType: closure_0 };
        Object.defineProperty(obj, "defaultValue", {
          get: () => {
            if (typeof callback === "function") {
              let shallowCloneResult = tmp();
            } else {
              const util = callback(outer1_2[1]).util;
              shallowCloneResult = util.shallowClone(tmp);
            }
            return shallowCloneResult;
          },
          set: undefined
        });
        const zodPrefault = new def.ZodPrefault(obj);
        return zodPrefault;
      };
      _standard.catch = (fn) => {
        let closure_0 = fn;
        const obj = { type: "catch", innerType: closure_0, catchValue: null };
        if (typeof fn !== "function") {
          fn = () => closure_0;
        }
        obj[2] = fn;
        const zodCatch = new def.ZodCatch(obj);
        return zodCatch;
      };
      _standard.pipe = (out) => {
        const zodPipe = new def.ZodPipe({ type: "pipe", in: closure_0, out });
        return zodPipe;
      };
      _standard.readonly = () => {
        const zodReadonly = new def.ZodReadonly({ type: "readonly", innerType: closure_0 });
        return zodReadonly;
      };
      _standard.describe = (description) => {
        const cloneResult = lib.clone();
        const globalRegistry = outer1_6.globalRegistry;
        globalRegistry.add(cloneResult, { description });
        return cloneResult;
      };
      Object.defineProperty(_standard, "description", {
        get() {
          const globalRegistry = outer1_6.globalRegistry;
          const value = globalRegistry.get(closure_0);
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
          const globalRegistry2 = outer1_6.globalRegistry;
          return globalRegistry2.get(lib);
        } else {
          const cloneResult = lib.clone();
          const globalRegistry = outer1_6.globalRegistry;
          globalRegistry.add(cloneResult, items[0]);
          return cloneResult;
        }
      };
      _standard.isOptional = () => lib.safeParse(undefined).success;
      _standard.isNullable = () => lib.safeParse(null).success;
      _standard.apply = (arg0) => arg0(closure_0);
      return _standard;
    });
    exports._ZodString = fnResult.$constructor("_ZodString", (_zod) => {
      let closure_0 = _zod;
      const $ZodString = closure_6.$ZodString;
      $ZodString.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.stringProcessor(closure_0, arg0, arg1, arg2);
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
        return _zod.check(outer1_8.regex.apply(items));
      };
      _zod.includes = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(outer1_8.includes.apply(items));
      };
      _zod.startsWith = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(outer1_8.startsWith.apply(items));
      };
      _zod.endsWith = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(outer1_8.endsWith.apply(items));
      };
      _zod.min = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(outer1_8.minLength.apply(items));
      };
      _zod.max = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(outer1_8.maxLength.apply(items));
      };
      _zod.length = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(outer1_8.length.apply(items));
      };
      _zod.nonempty = () => {
        const items = [1];
        HermesBuiltin.arraySpread(HermesBuiltin.copyRestArgs(), 1);
        return _zod.check(outer1_8.minLength.apply(items));
      };
      _zod.lowercase = (arg0) => _zod.check(outer1_8.lowercase(arg0));
      _zod.uppercase = (arg0) => _zod.check(outer1_8.uppercase(arg0));
      _zod.trim = () => _zod.check(outer1_8.trim());
      _zod.normalize = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(outer1_8.normalize.apply(items));
      };
      _zod.toLowerCase = () => _zod.check(outer1_8.toLowerCase());
      _zod.toUpperCase = () => _zod.check(outer1_8.toUpperCase());
      _zod.slugify = () => _zod.check(outer1_8.slugify());
    });
    exports.ZodString = fnResult.$constructor("ZodString", (arg0, arg1) => {
      let closure_0 = arg0;
      const $ZodString = closure_6.$ZodString;
      $ZodString.init(arg0, arg1);
      const _ZodString = exports._ZodString;
      _ZodString.init(arg0, arg1);
      arg0.email = (enc) => closure_0.check(outer1_6._email(outer1_1.ZodEmail, enc));
      arg0.url = (enc) => closure_0.check(outer1_6._url(outer1_1.ZodURL, enc));
      arg0.jwt = (enc) => closure_0.check(outer1_6._jwt(outer1_1.ZodJWT, enc));
      arg0.emoji = (enc) => closure_0.check(outer1_6._emoji(outer1_1.ZodEmoji, enc));
      arg0.guid = (enc) => closure_0.check(outer1_6._guid(outer1_1.ZodGUID, enc));
      arg0.uuid = (enc) => closure_0.check(outer1_6._uuid(outer1_1.ZodUUID, enc));
      arg0.uuidv4 = (enc) => closure_0.check(outer1_6._uuidv4(outer1_1.ZodUUID, enc));
      arg0.uuidv6 = (enc) => closure_0.check(outer1_6._uuidv6(outer1_1.ZodUUID, enc));
      arg0.uuidv7 = (enc) => closure_0.check(outer1_6._uuidv7(outer1_1.ZodUUID, enc));
      arg0.nanoid = (enc) => closure_0.check(outer1_6._nanoid(outer1_1.ZodNanoID, enc));
      arg0.guid = (enc) => closure_0.check(outer1_6._guid(outer1_1.ZodGUID, enc));
      arg0.cuid = (enc) => closure_0.check(outer1_6._cuid(outer1_1.ZodCUID, enc));
      arg0.cuid2 = (enc) => closure_0.check(outer1_6._cuid2(outer1_1.ZodCUID2, enc));
      arg0.ulid = (enc) => closure_0.check(outer1_6._ulid(outer1_1.ZodULID, enc));
      arg0.base64 = (enc) => closure_0.check(outer1_6._base64(outer1_1.ZodBase64, enc));
      arg0.base64url = (enc) => closure_0.check(outer1_6._base64url(outer1_1.ZodBase64URL, enc));
      arg0.xid = (enc) => closure_0.check(outer1_6._xid(outer1_1.ZodXID, enc));
      arg0.ksuid = (enc) => closure_0.check(outer1_6._ksuid(outer1_1.ZodKSUID, enc));
      arg0.ipv4 = (enc) => closure_0.check(outer1_6._ipv4(outer1_1.ZodIPv4, enc));
      arg0.ipv6 = (enc) => closure_0.check(outer1_6._ipv6(outer1_1.ZodIPv6, enc));
      arg0.cidrv4 = (enc) => closure_0.check(outer1_6._cidrv4(outer1_1.ZodCIDRv4, enc));
      arg0.cidrv6 = (enc) => closure_0.check(outer1_6._cidrv6(outer1_1.ZodCIDRv6, enc));
      arg0.e164 = (enc) => closure_0.check(outer1_6._e164(outer1_1.ZodE164, enc));
      arg0.datetime = (arg0) => closure_0.check(outer1_9.datetime(arg0));
      arg0.date = (arg0) => closure_0.check(outer1_9.date(arg0));
      arg0.time = (arg0) => closure_0.check(outer1_9.time(arg0));
      arg0.duration = (arg0) => closure_0.check(outer1_9.duration(arg0));
    });
    exports.ZodStringFormat = fnResult.$constructor("ZodStringFormat", (arg0, arg1) => {
      const $ZodStringFormat = closure_6.$ZodStringFormat;
      $ZodStringFormat.init(arg0, arg1);
      const _ZodString = exports._ZodString;
      _ZodString.init(arg0, arg1);
    });
    exports.ZodEmail = fnResult.$constructor("ZodEmail", (arg0, arg1) => {
      const $ZodEmail = closure_6.$ZodEmail;
      $ZodEmail.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodGUID = fnResult.$constructor("ZodGUID", (arg0, arg1) => {
      const $ZodGUID = closure_6.$ZodGUID;
      $ZodGUID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodUUID = fnResult.$constructor("ZodUUID", (arg0, arg1) => {
      const $ZodUUID = closure_6.$ZodUUID;
      $ZodUUID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodURL = fnResult.$constructor("ZodURL", (arg0, arg1) => {
      const $ZodURL = closure_6.$ZodURL;
      $ZodURL.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodEmoji = fnResult.$constructor("ZodEmoji", (arg0, arg1) => {
      const $ZodEmoji = closure_6.$ZodEmoji;
      $ZodEmoji.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodNanoID = fnResult.$constructor("ZodNanoID", (arg0, arg1) => {
      const $ZodNanoID = closure_6.$ZodNanoID;
      $ZodNanoID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCUID = fnResult.$constructor("ZodCUID", (arg0, arg1) => {
      const $ZodCUID = closure_6.$ZodCUID;
      $ZodCUID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCUID2 = fnResult.$constructor("ZodCUID2", (arg0, arg1) => {
      const $ZodCUID2 = closure_6.$ZodCUID2;
      $ZodCUID2.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodULID = fnResult.$constructor("ZodULID", (arg0, arg1) => {
      const $ZodULID = closure_6.$ZodULID;
      $ZodULID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodXID = fnResult.$constructor("ZodXID", (arg0, arg1) => {
      const $ZodXID = closure_6.$ZodXID;
      $ZodXID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodKSUID = fnResult.$constructor("ZodKSUID", (arg0, arg1) => {
      const $ZodKSUID = closure_6.$ZodKSUID;
      $ZodKSUID.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodIPv4 = fnResult.$constructor("ZodIPv4", (arg0, arg1) => {
      const $ZodIPv4 = closure_6.$ZodIPv4;
      $ZodIPv4.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodMAC = fnResult.$constructor("ZodMAC", (arg0, arg1) => {
      const $ZodMAC = closure_6.$ZodMAC;
      $ZodMAC.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodIPv6 = fnResult.$constructor("ZodIPv6", (arg0, arg1) => {
      const $ZodIPv6 = closure_6.$ZodIPv6;
      $ZodIPv6.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCIDRv4 = fnResult.$constructor("ZodCIDRv4", (arg0, arg1) => {
      const $ZodCIDRv4 = closure_6.$ZodCIDRv4;
      $ZodCIDRv4.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCIDRv6 = fnResult.$constructor("ZodCIDRv6", (arg0, arg1) => {
      const $ZodCIDRv6 = closure_6.$ZodCIDRv6;
      $ZodCIDRv6.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodBase64 = fnResult.$constructor("ZodBase64", (arg0, arg1) => {
      const $ZodBase64 = closure_6.$ZodBase64;
      $ZodBase64.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodBase64URL = fnResult.$constructor("ZodBase64URL", (arg0, arg1) => {
      const $ZodBase64URL = closure_6.$ZodBase64URL;
      $ZodBase64URL.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodE164 = fnResult.$constructor("ZodE164", (arg0, arg1) => {
      const $ZodE164 = closure_6.$ZodE164;
      $ZodE164.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodJWT = fnResult.$constructor("ZodJWT", (arg0, arg1) => {
      const $ZodJWT = closure_6.$ZodJWT;
      $ZodJWT.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCustomStringFormat = fnResult.$constructor("ZodCustomStringFormat", (arg0, arg1) => {
      const $ZodCustomStringFormat = closure_6.$ZodCustomStringFormat;
      $ZodCustomStringFormat.init(arg0, arg1);
      const ZodStringFormat = exports.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodNumber = fnResult.$constructor("ZodNumber", (_zod) => {
      let closure_0 = _zod;
      const $ZodNumber = closure_6.$ZodNumber;
      $ZodNumber.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.numberProcessor(closure_0, arg0, arg1, arg2);
      _zod.gt = (arg0, arg1) => _zod.check(outer1_8.gt(arg0, arg1));
      _zod.gte = (arg0, arg1) => _zod.check(outer1_8.gte(arg0, arg1));
      _zod.min = (arg0, arg1) => _zod.check(outer1_8.gte(arg0, arg1));
      _zod.lt = (arg0, arg1) => _zod.check(outer1_8.lt(arg0, arg1));
      _zod.lte = (arg0, arg1) => _zod.check(outer1_8.lte(arg0, arg1));
      _zod.max = (arg0, arg1) => _zod.check(outer1_8.lte(arg0, arg1));
      _zod.int = (enc) => _zod.check(outer1_6._int(outer1_1.ZodNumberFormat, enc));
      _zod.safe = (enc) => _zod.check(outer1_6._int(outer1_1.ZodNumberFormat, enc));
      _zod.positive = (arg0) => _zod.check(outer1_8.gt(0, arg0));
      _zod.nonnegative = (arg0) => _zod.check(outer1_8.gte(0, arg0));
      _zod.negative = (arg0) => _zod.check(outer1_8.lt(0, arg0));
      _zod.nonpositive = (arg0) => _zod.check(outer1_8.lte(0, arg0));
      _zod.multipleOf = (arg0, arg1) => _zod.check(outer1_8.multipleOf(arg0, arg1));
      _zod.step = (arg0, arg1) => _zod.check(outer1_8.multipleOf(arg0, arg1));
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
      const $ZodNumberFormat = closure_6.$ZodNumberFormat;
      $ZodNumberFormat.init(arg0, arg1);
      const ZodNumber = exports.ZodNumber;
      ZodNumber.init(arg0, arg1);
    });
    exports.ZodBoolean = fnResult.$constructor("ZodBoolean", (_zod) => {
      let closure_0 = _zod;
      const $ZodBoolean = closure_6.$ZodBoolean;
      $ZodBoolean.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.booleanProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodBigInt = fnResult.$constructor("ZodBigInt", (_zod) => {
      let closure_0 = _zod;
      const $ZodBigInt = closure_6.$ZodBigInt;
      $ZodBigInt.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.bigintProcessor(closure_0, arg0, arg1, arg2);
      _zod.gte = (arg0, arg1) => _zod.check(outer1_8.gte(arg0, arg1));
      _zod.min = (arg0, arg1) => _zod.check(outer1_8.gte(arg0, arg1));
      _zod.gt = (arg0, arg1) => _zod.check(outer1_8.gt(arg0, arg1));
      _zod.gte = (arg0, arg1) => _zod.check(outer1_8.gte(arg0, arg1));
      _zod.min = (arg0, arg1) => _zod.check(outer1_8.gte(arg0, arg1));
      _zod.lt = (arg0, arg1) => _zod.check(outer1_8.lt(arg0, arg1));
      _zod.lte = (arg0, arg1) => _zod.check(outer1_8.lte(arg0, arg1));
      _zod.max = (arg0, arg1) => _zod.check(outer1_8.lte(arg0, arg1));
      _zod.positive = (arg0) => _zod.check(outer1_8.gt(BigInt(0), arg0));
      _zod.negative = (arg0) => _zod.check(outer1_8.lt(BigInt(0), arg0));
      _zod.nonpositive = (arg0) => _zod.check(outer1_8.lte(BigInt(0), arg0));
      _zod.nonnegative = (arg0) => _zod.check(outer1_8.gte(BigInt(0), arg0));
      _zod.multipleOf = (arg0, arg1) => _zod.check(outer1_8.multipleOf(arg0, arg1));
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
      const $ZodBigIntFormat = closure_6.$ZodBigIntFormat;
      $ZodBigIntFormat.init(arg0, arg1);
      const ZodBigInt = exports.ZodBigInt;
      ZodBigInt.init(arg0, arg1);
    });
    exports.ZodSymbol = fnResult.$constructor("ZodSymbol", (_zod) => {
      let closure_0 = _zod;
      const $ZodSymbol = closure_6.$ZodSymbol;
      $ZodSymbol.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.symbolProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodUndefined = fnResult.$constructor("ZodUndefined", (_zod) => {
      let closure_0 = _zod;
      const $ZodUndefined = closure_6.$ZodUndefined;
      $ZodUndefined.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.undefinedProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodNull = fnResult.$constructor("ZodNull", (_zod) => {
      let closure_0 = _zod;
      const $ZodNull = closure_6.$ZodNull;
      $ZodNull.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.nullProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodAny = fnResult.$constructor("ZodAny", (_zod) => {
      let closure_0 = _zod;
      const $ZodAny = closure_6.$ZodAny;
      $ZodAny.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.anyProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodUnknown = fnResult.$constructor("ZodUnknown", (_zod) => {
      let closure_0 = _zod;
      const $ZodUnknown = closure_6.$ZodUnknown;
      $ZodUnknown.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.unknownProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodNever = fnResult.$constructor("ZodNever", (_zod) => {
      let closure_0 = _zod;
      const $ZodNever = closure_6.$ZodNever;
      $ZodNever.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.neverProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodVoid = fnResult.$constructor("ZodVoid", (_zod) => {
      let closure_0 = _zod;
      const $ZodVoid = closure_6.$ZodVoid;
      $ZodVoid.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.voidProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodDate = fnResult.$constructor("ZodDate", (_zod) => {
      let closure_0 = _zod;
      const $ZodDate = closure_6.$ZodDate;
      $ZodDate.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.dateProcessor(closure_0, arg0, arg1, arg2);
      _zod.min = (arg0, arg1) => _zod.check(outer1_8.gte(arg0, arg1));
      _zod.max = (arg0, arg1) => _zod.check(outer1_8.lte(arg0, arg1));
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
      let closure_0 = _zod;
      const $ZodArray = closure_6.$ZodArray;
      $ZodArray.init(_zod, element);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, element);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.arrayProcessor(closure_0, arg0, arg1, arg2);
      _zod.element = element.element;
      _zod.min = (minItems) => _zod.check(outer1_8.minLength(minItems, arg1));
      _zod.nonempty = (arg0) => _zod.check(outer1_8.minLength(1, arg0));
      _zod.max = (maxItems) => _zod.check(outer1_8.maxLength(maxItems, arg1));
      _zod.length = (arg0, arg1) => _zod.check(outer1_8.length(arg0, arg1));
      _zod.unwrap = () => _zod.element;
    });
    exports.ZodObject = fnResult.$constructor("ZodObject", (_zod) => {
      const _require = _zod;
      const _exports = arg1;
      const $ZodObjectJIT = closure_6.$ZodObjectJIT;
      $ZodObjectJIT.init(_zod, arg1);
      const ZodType = _exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.objectProcessor(closure_0, arg0, arg1, arg2);
      let util = _12273__.util;
      util.defineLazy(_zod, "shape", () => closure_1.shape);
      _zod.keyof = () => {
        const keys = Object.keys(_zod._zod.def.shape);
        let fromEntriesResult = keys;
        if (Array.isArray(keys)) {
          const _Object = Object;
          fromEntriesResult = Object.fromEntries(keys.map((arg0) => {
            const items = [arg0, arg0];
            return items;
          }));
        }
        const util = _zod(outer1_2[1]).util;
        const merged = Object.assign(util.normalizeParams(undefined));
        const zodEnum = new closure_1.ZodEnum({ type: "enum", entries: fromEntriesResult });
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
        obj.catchall = outer1_6._unknown(closure_1.ZodUnknown);
        return _zod.clone(obj);
      };
      _zod.loose = () => {
        const obj = {};
        const merged = Object.assign(_zod._zod.def);
        obj.catchall = outer1_6._unknown(closure_1.ZodUnknown);
        return _zod.clone(obj);
      };
      _zod.strict = () => {
        const obj = {};
        const merged = Object.assign(_zod._zod.def);
        obj.catchall = outer1_6._never(closure_1.ZodNever, undefined);
        return _zod.clone(obj);
      };
      _zod.strip = () => {
        const obj = {};
        const merged = Object.assign(_zod._zod.def);
        obj.catchall = undefined;
        return _zod.clone(obj);
      };
      _zod.extend = (arg0) => {
        const util = _zod(outer1_2[1]).util;
        return util.extend(_zod, arg0);
      };
      _zod.safeExtend = (arg0) => {
        const util = _zod(outer1_2[1]).util;
        return util.safeExtend(_zod, arg0);
      };
      _zod.merge = (arg0) => {
        const util = _zod(outer1_2[1]).util;
        return util.merge(_zod, arg0);
      };
      _zod.pick = (arg0) => {
        const util = _zod(outer1_2[1]).util;
        return util.pick(_zod, arg0);
      };
      _zod.omit = (closure_3) => {
        const util = _zod(outer1_2[1]).util;
        return util.omit(_zod, closure_3);
      };
      _zod.partial = () => {
        const items = [...arguments];
        const util = _zod(outer1_2[1]).util;
        return util.partial(closure_1.ZodOptional, _zod, items[0]);
      };
      _zod.required = () => {
        const items = [...arguments];
        const util = _zod(outer1_2[1]).util;
        return util.required(closure_1.ZodNonOptional, _zod, items[0]);
      };
    });
    exports.ZodUnion = fnResult.$constructor("ZodUnion", (_zod, options) => {
      let closure_0 = _zod;
      const $ZodUnion = closure_6.$ZodUnion;
      $ZodUnion.init(_zod, options);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, options);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.unionProcessor(closure_0, arg0, arg1, arg2);
      _zod.options = options.options;
    });
    exports.ZodXor = fnResult.$constructor("ZodXor", (_zod, options) => {
      let closure_0 = _zod;
      const ZodUnion = exports.ZodUnion;
      ZodUnion.init(_zod, options);
      const $ZodXor = closure_6.$ZodXor;
      $ZodXor.init(_zod, options);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.unionProcessor(closure_0, arg0, arg1, arg2);
      _zod.options = options.options;
    });
    exports.ZodDiscriminatedUnion = fnResult.$constructor("ZodDiscriminatedUnion", (arg0, arg1) => {
      const ZodUnion = exports.ZodUnion;
      ZodUnion.init(arg0, arg1);
      const $ZodDiscriminatedUnion = closure_6.$ZodDiscriminatedUnion;
      $ZodDiscriminatedUnion.init(arg0, arg1);
    });
    exports.ZodIntersection = fnResult.$constructor("ZodIntersection", (_zod) => {
      let closure_0 = _zod;
      const $ZodIntersection = closure_6.$ZodIntersection;
      $ZodIntersection.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.intersectionProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodTuple = fnResult.$constructor("ZodTuple", (_zod) => {
      let closure_0 = _zod;
      const $ZodTuple = closure_6.$ZodTuple;
      $ZodTuple.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.tupleProcessor(closure_0, arg0, arg1, arg2);
      _zod.rest = (rest) => {
        const obj = {};
        const merged = Object.assign(_zod._zod.def);
        obj.rest = rest;
        return _zod.clone(obj);
      };
    });
    exports.ZodRecord = fnResult.$constructor("ZodRecord", (_zod) => {
      let closure_0 = _zod;
      const $ZodRecord = closure_6.$ZodRecord;
      $ZodRecord.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.recordProcessor(closure_0, arg0, arg1, arg2);
      ({ keyType: _zod.keyType, valueType: _zod.valueType } = arg1);
    });
    exports.ZodMap = fnResult.$constructor("ZodMap", (_zod) => {
      let closure_0 = _zod;
      const $ZodMap = closure_6.$ZodMap;
      $ZodMap.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.mapProcessor(closure_0, arg0, arg1, arg2);
      ({ keyType: _zod.keyType, valueType: _zod.valueType } = arg1);
      _zod.min = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(outer1_6._minSize.apply(items));
      };
      _zod.nonempty = (enc) => _zod.check(outer1_6._minSize(1, enc));
      _zod.max = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(outer1_6._maxSize.apply(items));
      };
      _zod.size = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(outer1_6._size.apply(items));
      };
    });
    exports.ZodSet = fnResult.$constructor("ZodSet", (_zod) => {
      let closure_0 = _zod;
      const $ZodSet = closure_6.$ZodSet;
      $ZodSet.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.setProcessor(closure_0, arg0, arg1, arg2);
      _zod.min = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(outer1_6._minSize.apply(items));
      };
      _zod.nonempty = (enc) => _zod.check(outer1_6._minSize(1, enc));
      _zod.max = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(outer1_6._maxSize.apply(items));
      };
      _zod.size = () => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(outer1_6._size.apply(items));
      };
    });
    exports.ZodEnum = fnResult.$constructor("ZodEnum", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodEnum = closure_6.$ZodEnum;
      $ZodEnum.init(_zod, arg1);
      const ZodType = _exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.enumProcessor(closure_0, arg0, arg1, arg2);
      _zod.enum = arg1.entries;
      _zod.options = Object.values(arg1.entries);
      const set = new Set(Object.keys(arg1.entries));
      _zod.extract = (arg0, enc) => {
        let obj = {};
        const iter = arg0[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          let tmp3 = set;
          if (set.has(nextResult)) {
            let tmp10 = nextResult;
            let tmp11 = closure_1;
            obj[tmp2] = closure_1.entries[tmp2];
            continue;
          } else {
            let tmp4 = globalThis;
            let _Error = Error;
            let tmp5 = nextResult;
            let _HermesInternal = HermesInternal;
            let str = " not found in enum";
            let str2 = "Key ";
            let tmp6 = new.target;
            let tmp7 = new.target;
            let error = new Error("Key " + tmp2 + " not found in enum");
            let tmp9 = error;
            throw error;
          }
        }
        obj = {};
        const merged = Object.assign(closure_1);
        obj.checks = [];
        const util = _zod(set[1]).util;
        const merged1 = Object.assign(util.normalizeParams(enc));
        obj.entries = obj;
        const zodEnum = new closure_1.ZodEnum(obj);
        return zodEnum;
      };
      _zod.exclude = (arg0, enc) => {
        let obj = {};
        const merged = Object.assign(closure_1.entries);
        const iter = arg0[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp6 = set;
          let tmp5 = nextResult;
          if (set.has(nextResult)) {
            let tmp13 = nextResult;
            delete tmp[tmp2];
            continue;
          } else {
            let tmp7 = globalThis;
            let _Error = Error;
            let tmp8 = nextResult;
            let _HermesInternal = HermesInternal;
            let str = " not found in enum";
            let str2 = "Key ";
            let tmp9 = new.target;
            let tmp10 = new.target;
            let error = new Error("Key " + tmp5 + " not found in enum");
            let tmp12 = error;
            throw error;
          }
        }
        obj = {};
        const merged1 = Object.assign(closure_1);
        obj.checks = [];
        const util = _zod(set[1]).util;
        const merged2 = Object.assign(util.normalizeParams(enc));
        obj.entries = obj;
        const zodEnum = new closure_1.ZodEnum(obj);
        return zodEnum;
      };
    });
    exports.ZodLiteral = fnResult.$constructor("ZodLiteral", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodLiteral = closure_6.$ZodLiteral;
      $ZodLiteral.init(_zod, arg1);
      const ZodType = _exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.literalProcessor(closure_0, arg0, arg1, arg2);
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
    exports.ZodFile = fnResult.$constructor("ZodFile", (_zod) => {
      let closure_0 = _zod;
      const $ZodFile = closure_6.$ZodFile;
      $ZodFile.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.fileProcessor(closure_0, arg0, arg1, arg2);
      _zod.min = (minimum, enc) => _zod.check(outer1_6._minSize(minimum, enc));
      _zod.max = (maximum, enc) => _zod.check(outer1_6._maxSize(maximum, enc));
      _zod.mime = (mime, enc) => {
        let tmp3 = mime;
        if (!Array.isArray(mime)) {
          const items = [mime];
          tmp3 = items;
        }
        return _zod.check(outer1_6._mime(tmp3, enc));
      };
    });
    exports.ZodTransform = fnResult.$constructor("ZodTransform", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodTransform = closure_6.$ZodTransform;
      $ZodTransform.init(_zod, arg1);
      const ZodType = _exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.transformProcessor(closure_0, arg0, arg1, arg2);
      _zod._zod.parse = (arg0, direction) => {
        let iter = arg0;
        const constructor = arg0;
        if ("backward" === direction.direction) {
          const ZodEncodeError = new outer1_6.$ZodEncodeError(constructor.constructor.name);
          throw ZodEncodeError;
        } else {
          iter.addIssue = (str) => {
            if (typeof str === "string") {
              const issues = lib.issues;
              const util2 = lib(outer2_2[1]).util;
              issues.push(util2.issue(str, lib.value, outer1_1));
            } else {
              if (str.fatal) {
                str.continue = false;
              }
              if (str.code == null) {
                str.code = "custom";
              }
              if (str.input == null) {
                str.input = lib.value;
              }
              if (str.inst == null) {
                str.inst = lib;
              }
              const issues1 = lib.issues;
              const util = lib(outer2_2[1]).util;
              issues1.push(util.issue(str));
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
    exports.ZodOptional = fnResult.$constructor("ZodOptional", (_zod) => {
      let closure_0 = _zod;
      const $ZodOptional = closure_6.$ZodOptional;
      $ZodOptional.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.optionalProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodExactOptional = fnResult.$constructor("ZodExactOptional", (_zod) => {
      let closure_0 = _zod;
      const $ZodExactOptional = closure_6.$ZodExactOptional;
      $ZodExactOptional.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.optionalProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodNullable = fnResult.$constructor("ZodNullable", (_zod) => {
      let closure_0 = _zod;
      const $ZodNullable = closure_6.$ZodNullable;
      $ZodNullable.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.nullableProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodDefault = fnResult.$constructor("ZodDefault", (_zod) => {
      let closure_0 = _zod;
      const $ZodDefault = closure_6.$ZodDefault;
      $ZodDefault.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.defaultProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
      _zod.removeDefault = _zod.unwrap;
    });
    exports.ZodPrefault = fnResult.$constructor("ZodPrefault", (_zod) => {
      let closure_0 = _zod;
      const $ZodPrefault = closure_6.$ZodPrefault;
      $ZodPrefault.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.prefaultProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodNonOptional = fnResult.$constructor("ZodNonOptional", (_zod) => {
      let closure_0 = _zod;
      const $ZodNonOptional = closure_6.$ZodNonOptional;
      $ZodNonOptional.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.nonoptionalProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodSuccess = fnResult.$constructor("ZodSuccess", (_zod) => {
      let closure_0 = _zod;
      const $ZodSuccess = closure_6.$ZodSuccess;
      $ZodSuccess.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.successProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodCatch = fnResult.$constructor("ZodCatch", (_zod) => {
      let closure_0 = _zod;
      const $ZodCatch = closure_6.$ZodCatch;
      $ZodCatch.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.catchProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
      _zod.removeCatch = _zod.unwrap;
    });
    exports.ZodNaN = fnResult.$constructor("ZodNaN", (_zod) => {
      let closure_0 = _zod;
      const $ZodNaN = closure_6.$ZodNaN;
      $ZodNaN.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.nanProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodPipe = fnResult.$constructor("ZodPipe", (_zod) => {
      let closure_0 = _zod;
      const $ZodPipe = closure_6.$ZodPipe;
      $ZodPipe.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.pipeProcessor(closure_0, arg0, arg1, arg2);
      ({ in: _zod.in, out: _zod.out } = arg1);
    });
    exports.ZodCodec = fnResult.$constructor("ZodCodec", (arg0, arg1) => {
      const ZodPipe = exports.ZodPipe;
      ZodPipe.init(arg0, arg1);
      const $ZodCodec = closure_6.$ZodCodec;
      $ZodCodec.init(arg0, arg1);
    });
    exports.ZodReadonly = fnResult.$constructor("ZodReadonly", (_zod) => {
      let closure_0 = _zod;
      const $ZodReadonly = closure_6.$ZodReadonly;
      $ZodReadonly.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.readonlyProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodTemplateLiteral = fnResult.$constructor("ZodTemplateLiteral", (_zod) => {
      let closure_0 = _zod;
      const $ZodTemplateLiteral = closure_6.$ZodTemplateLiteral;
      $ZodTemplateLiteral.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.templateLiteralProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodLazy = fnResult.$constructor("ZodLazy", (_zod) => {
      let closure_0 = _zod;
      const $ZodLazy = closure_6.$ZodLazy;
      $ZodLazy.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.lazyProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => {
        const def = _zod._zod.def;
        return def.getter();
      };
    });
    exports.ZodPromise = fnResult.$constructor("ZodPromise", (_zod) => {
      let closure_0 = _zod;
      closure_6.$ZodPromise.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.promiseProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodFunction = fnResult.$constructor("ZodFunction", (_zod) => {
      let closure_0 = _zod;
      const $ZodFunction = closure_6.$ZodFunction;
      $ZodFunction.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.functionProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodCustom = fnResult.$constructor("ZodCustom", (_zod) => {
      let closure_0 = _zod;
      const $ZodCustom = closure_6.$ZodCustom;
      $ZodCustom.init(_zod, arg1);
      const ZodType = exports.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => outer1_7.customProcessor(closure_0, arg0, arg1, arg2);
    });
    ({ describe: exports.describe, meta: exports.meta } = fnResult);
    exports.stringbool = () => {
      const items = [{ Codec: exports.ZodCodec, Boolean: exports.ZodBoolean, String: exports.ZodString }, ...HermesBuiltin.copyRestArgs()];
      return closure_6._stringbool.apply(items);
    };
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}