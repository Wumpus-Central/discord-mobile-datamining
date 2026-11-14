// === Module 12240: ? ===

// Module 12240
import _mod12158 from "module_12158" /* 12158 */;
import _mod12165 from "module_12165" /* 12165 */;
import _mod12181 from "module_12181" /* 12181 */;
import aggregateChecks from "aggregateChecks" /* 12237 */;
import lt from "lt" /* 12241 */;
import _mod12242 from "module_12242" /* 12242 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let self = this;
let closure_0 = require;
let _decodeAsync = exports;
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
    let fn2 = self;
    if (self) {
      fn2 = self.__importDefault;
    }
    if (!fn2) {
      fn2 = (__esModule) => {
        if (!__esModule) {
          const obj = { default: __esModule };
          let tmp = obj;
        } else {
          tmp = __esModule;
        }
        return tmp;
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
        const obj = { type: "tuple", items: input1, rest: null };
        const util = closure_0(12158).util;
        const merged = Object.assign(util.normalizeParams(undefined));
        let zodTuple = new _decodeAsync.ZodTuple(obj);
      } else {
        zodTuple = undefined;
        if (!tmp3) {
          zodTuple = input.input;
        }
        if (zodTuple == null) {
          zodTuple = fnResult._array(_decodeAsync.ZodArray, fnResult._unknown(_decodeAsync.ZodUnknown), undefined);
        }
      }
      const obj2 = { type: "function", input: zodTuple, output: null };
      let output;
      if (input != null) {
        output = input.output;
      }
      if (output == null) {
        output = fnResult._unknown(_decodeAsync.ZodUnknown);
      }
      obj2.output = output;
      const zodFunction = new _decodeAsync.ZodFunction(obj2);
      return zodFunction;
    }
    const _Object3 = Object;
    function string(zodLazy) {
      return fnResult._string(_decodeAsync.ZodString, zodLazy);
    }
    function number(zodLazy) {
      return fnResult._number(_decodeAsync.ZodNumber, zodLazy);
    }
    function int(zodLazy) {
      return fnResult._int(_decodeAsync.ZodNumberFormat, zodLazy);
    }
    function boolean(zodLazy) {
      return fnResult._boolean(_decodeAsync.ZodBoolean, zodLazy);
    }
    function _null(arg0) {
      return fnResult._null(_decodeAsync.ZodNull, arg0);
    }
    function unknown() {
      return fnResult._unknown(_decodeAsync.ZodUnknown);
    }
    function never(zodLazy) {
      return fnResult._never(_decodeAsync.ZodNever, zodLazy);
    }
    function array(fnResult, zodLazy) {
      return fnResult._array(_decodeAsync.ZodArray, fnResult, zodLazy);
    }
    function union(options, zodLazy) {
      const util = closure_0(12158).util;
      const merged = Object.assign(util.normalizeParams(zodLazy));
      const zodUnion = new _decodeAsync.ZodUnion({ type: "union", options });
      return zodUnion;
    }
    function intersection(found, items3) {
      const rect = { type: "intersection", left: found, right: items3 };
      const zodIntersection = new _decodeAsync.ZodIntersection(rect);
      return zodIntersection;
    }
    function tuple(items, zodLazy, zodLazy) {
      let tmp2 = zodLazy;
      if (zodLazy instanceof fnResult.$ZodType) {
        tmp2 = zodLazy;
      }
      let tmp3 = null;
      if (zodLazy instanceof fnResult.$ZodType) {
        tmp3 = zodLazy;
      }
      const util = closure_0(12158).util;
      const merged = Object.assign(util.normalizeParams(tmp2));
      const zodTuple = new _decodeAsync.ZodTuple({ type: "tuple", items, rest: tmp3 });
      return zodTuple;
    }
    function record(keyType, _zod, zodLazy) {
      if (_zod) {
        if (_zod._zod) {
          const obj2 = { type: "record", keyType, valueType: _zod };
          const util2 = closure_0(12158).util;
          const merged = Object.assign(util2.normalizeParams(zodLazy));
          let zodRecord = new _decodeAsync.ZodRecord(obj2);
        }
        return zodRecord;
      }
      const util = closure_0(12158).util;
      const merged1 = Object.assign(util.normalizeParams(_zod));
      zodRecord = new _decodeAsync.ZodRecord({ type: "record", keyType: fnResult._string(_decodeAsync.ZodString, undefined), valueType: keyType });
      const obj = { type: "record", keyType: fnResult._string(_decodeAsync.ZodString, undefined), valueType: keyType };
    }
    function _enum(arr, zodLazy) {
      let fromEntriesResult = arr;
      if (Array.isArray(arr)) {
        const _Object = Object;
        fromEntriesResult = Object.fromEntries(arr.map((item) => {
          items = [item, item];
          return items;
        }));
      }
      const util = closure_0(12158).util;
      const merged = Object.assign(util.normalizeParams(zodLazy));
      const zodEnum = new _decodeAsync.ZodEnum({ type: "enum", entries: fromEntriesResult });
      return zodEnum;
    }
    function transform(transform) {
      const zodTransform = new _decodeAsync.ZodTransform({ type: "transform", transform });
      return zodTransform;
    }
    function optional(innerType) {
      const zodOptional = new _decodeAsync.ZodOptional({ type: "optional", innerType });
      return zodOptional;
    }
    function exactOptional(innerType) {
      const zodExactOptional = new _decodeAsync.ZodExactOptional({ type: "optional", innerType });
      return zodExactOptional;
    }
    function nullable(innerType) {
      const zodNullable = new _decodeAsync.ZodNullable({ type: "nullable", innerType });
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
            const util = closure_0(12158).util;
            shallowCloneResult = util.shallowClone(closure_0);
          }
          return shallowCloneResult;
        },
        set: undefined
      });
      const zodDefault = new _decodeAsync.ZodDefault(obj);
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
            const util = closure_0(12158).util;
            shallowCloneResult = util.shallowClone(closure_0);
          }
          return shallowCloneResult;
        },
        set: undefined
      });
      const zodPrefault = new _decodeAsync.ZodPrefault(obj);
      return zodPrefault;
    }
    function nonoptional(innerType, zodLazy) {
      const util = closure_0(12158).util;
      const merged = Object.assign(util.normalizeParams(zodLazy));
      const zodNonOptional = new _decodeAsync.ZodNonOptional({ type: "nonoptional", innerType });
      return zodNonOptional;
    }
    function _catch(innerType, fn) {
      const obj = { type: "catch", innerType, catchValue: null };
      let constantCatchResult = fn;
      if (typeof fn !== "function") {
        const util = fnResult.util;
        constantCatchResult = util.constantCatch(fn);
      }
      obj.catchValue = constantCatchResult;
      const zodCatch = new _decodeAsync.ZodCatch(obj);
      return zodCatch;
    }
    function pipe(in, out) {
      const zodPipe = new _decodeAsync.ZodPipe({ type: "pipe", in: _in, out });
      return zodPipe;
    }
    function readonly(innerType) {
      const zodReadonly = new _decodeAsync.ZodReadonly({ type: "readonly", innerType });
      return zodReadonly;
    }
    function lazy(getter) {
      const zodLazy = new _decodeAsync.ZodLazy({ type: "lazy", getter });
      return zodLazy;
    }
    function refine(fn) {
      let obj = zodLazy;
      if (zodLazy === undefined) {
        obj = {};
      }
      return fnResult._refine(_decodeAsync.ZodCustom, fn, obj);
    }
    function superRefine(arg0, zodLazy) {
      return fnResult._superRefine(arg0, zodLazy);
    }
    exports.ZodType = undefined;
    exports._ZodString = undefined;
    exports.ZodString = undefined;
    exports.ZodStringFormat = undefined;
    exports.ZodISODateTime = undefined;
    exports.ZodISODate = undefined;
    exports.ZodISOTime = undefined;
    exports.ZodISODuration = undefined;
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
    exports.ZodCreditCard = undefined;
    exports.ZodIBAN = undefined;
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
    exports.ZodPreprocess = undefined;
    exports.ZodReadonly = undefined;
    exports.ZodTemplateLiteral = undefined;
    exports.ZodLazy = undefined;
    exports.ZodPromise = undefined;
    exports.ZodFunction = undefined;
    exports.ZodCustom = undefined;
    exports.describe = undefined;
    exports.meta = undefined;
    exports.ZodInstanceOf = undefined;
    exports.stringbool = undefined;
    exports.string = string;
    exports.email = function email(zodLazy) {
      return fnResult._email(_decodeAsync.ZodEmail, zodLazy);
    };
    exports.guid = function guid(zodLazy) {
      return fnResult._guid(_decodeAsync.ZodGUID, zodLazy);
    };
    exports.uuid = function uuid(zodLazy) {
      return fnResult._uuid(_decodeAsync.ZodUUID, zodLazy);
    };
    exports.uuidv4 = function uuidv4(zodLazy) {
      return fnResult._uuidv4(_decodeAsync.ZodUUID, zodLazy);
    };
    exports.uuidv6 = function uuidv6(zodLazy) {
      return fnResult._uuidv6(_decodeAsync.ZodUUID, zodLazy);
    };
    exports.uuidv7 = function uuidv7(zodLazy) {
      return fnResult._uuidv7(_decodeAsync.ZodUUID, zodLazy);
    };
    exports.url = function url(url) {
      return fnResult._url(_decodeAsync.ZodURL, url);
    };
    exports.httpUrl = function httpUrl(zodLazy) {
      const url = { protocol: closure_8.httpProtocol, hostname: closure_8.domain };
      const util = closure_0(12158).util;
      const merged = Object.assign(util.normalizeParams(zodLazy));
      return fnResult._url(_decodeAsync.ZodURL, url);
    };
    exports.emoji = function emoji(zodLazy) {
      return fnResult._emoji(_decodeAsync.ZodEmoji, zodLazy);
    };
    exports.nanoid = function nanoid(zodLazy) {
      return fnResult._nanoid(_decodeAsync.ZodNanoID, zodLazy);
    };
    exports.cuid = function cuid(zodLazy) {
      return fnResult._cuid(_decodeAsync.ZodCUID, zodLazy);
    };
    exports.cuid2 = function cuid2(zodLazy) {
      return fnResult._cuid2(_decodeAsync.ZodCUID2, zodLazy);
    };
    exports.ulid = function ulid(zodLazy) {
      return fnResult._ulid(_decodeAsync.ZodULID, zodLazy);
    };
    exports.xid = function xid(zodLazy) {
      return fnResult._xid(_decodeAsync.ZodXID, zodLazy);
    };
    exports.ksuid = function ksuid(zodLazy) {
      return fnResult._ksuid(_decodeAsync.ZodKSUID, zodLazy);
    };
    exports.ipv4 = function ipv4(zodLazy) {
      return fnResult._ipv4(_decodeAsync.ZodIPv4, zodLazy);
    };
    exports.mac = function mac(delimiter) {
      return fnResult._mac(_decodeAsync.ZodMAC, delimiter);
    };
    exports.ipv6 = function ipv6(zodLazy) {
      return fnResult._ipv6(_decodeAsync.ZodIPv6, zodLazy);
    };
    exports.cidrv4 = function cidrv4(zodLazy) {
      return fnResult._cidrv4(_decodeAsync.ZodCIDRv4, zodLazy);
    };
    exports.cidrv6 = function cidrv6(zodLazy) {
      return fnResult._cidrv6(_decodeAsync.ZodCIDRv6, zodLazy);
    };
    exports.base64 = function base64(zodLazy) {
      return fnResult._base64(_decodeAsync.ZodBase64, zodLazy);
    };
    exports.base64url = function base64url(zodLazy) {
      return fnResult._base64url(_decodeAsync.ZodBase64URL, zodLazy);
    };
    exports.e164 = function e164(zodLazy) {
      return fnResult._e164(_decodeAsync.ZodE164, zodLazy);
    };
    exports.creditCard = function creditCard(zodLazy) {
      return fnResult._creditCard(_decodeAsync.ZodCreditCard, zodLazy);
    };
    exports.iban = function iban(zodLazy) {
      return fnResult._iban(_decodeAsync.ZodIBAN, zodLazy);
    };
    exports.jwt = function jwt(zodLazy) {
      return fnResult._jwt(_decodeAsync.ZodJWT, zodLazy);
    };
    exports.stringFormat = function stringFormat(combined, currencyCode) {
      let obj = enc;
      if (enc === undefined) {
        obj = {};
      }
      return fnResult._stringFormat(_decodeAsync.ZodCustomStringFormat, combined, currencyCode, obj);
    };
    exports.hostname = function hostname(enc) {
      return fnResult._stringFormat(_decodeAsync.ZodCustomStringFormat, "hostname", closure_8.hostname, enc);
    };
    exports.hex = function hex(enc) {
      return fnResult._stringFormat(_decodeAsync.ZodCustomStringFormat, "hex", closure_8.hex, enc);
    };
    exports.currencyCode = function currencyCode(enc) {
      return fnResult._stringFormat(_decodeAsync.ZodCustomStringFormat, "currency_code", closure_8.currencyCode, enc);
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
        return fnResult._stringFormat(_decodeAsync.ZodCustomStringFormat, combined, tmp2, enc);
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Unrecognized hash format: " + combined);
        throw error;
      }
    };
    exports.number = number;
    exports.int = int;
    exports.float32 = function float32(zodLazy) {
      return fnResult._float32(_decodeAsync.ZodNumberFormat, zodLazy);
    };
    exports.float64 = function float64(zodLazy) {
      return fnResult._float64(_decodeAsync.ZodNumberFormat, zodLazy);
    };
    exports.int32 = function int32(zodLazy) {
      return fnResult._int32(_decodeAsync.ZodNumberFormat, zodLazy);
    };
    exports.uint32 = function uint32(zodLazy) {
      return fnResult._uint32(_decodeAsync.ZodNumberFormat, zodLazy);
    };
    exports.boolean = boolean;
    exports.bigint = function bigint(zodLazy) {
      return fnResult._bigint(_decodeAsync.ZodBigInt, zodLazy);
    };
    exports.int64 = function int64(zodLazy) {
      return fnResult._int64(_decodeAsync.ZodBigIntFormat, zodLazy);
    };
    exports.uint64 = function uint64(zodLazy) {
      return fnResult._uint64(_decodeAsync.ZodBigIntFormat, zodLazy);
    };
    exports.symbol = function symbol(zodLazy) {
      return fnResult._symbol(_decodeAsync.ZodSymbol, zodLazy);
    };
    exports.undefined = function _undefined(arg0) {
      return fnResult._undefined(_decodeAsync.ZodUndefined, arg0);
    };
    exports.null = _null;
    exports.any = function any() {
      return fnResult._any(_decodeAsync.ZodAny);
    };
    exports.unknown = unknown;
    exports.never = never;
    exports.void = function _void(arg0) {
      return fnResult._void(_decodeAsync.ZodVoid, arg0);
    };
    exports.date = function date(zodLazy) {
      return fnResult._date(_decodeAsync.ZodDate, zodLazy);
    };
    exports.array = array;
    exports.keyof = function keyof(_zod) {
      const keys = Object.keys(_zod._zod.def.shape);
      let fromEntriesResult = keys;
      if (Array.isArray(keys)) {
        const _Object = Object;
        fromEntriesResult = Object.fromEntries(keys.map((item) => {
          items = [item, item];
          return items;
        }));
      }
      const util = closure_0(12158).util;
      const merged = Object.assign(util.normalizeParams(undefined));
      const zodEnum = new _decodeAsync.ZodEnum({ type: "enum", entries: fromEntriesResult });
      return zodEnum;
    };
    exports.object = function object(arg0, zodLazy) {
      let obj = arg0;
      if (arg0 == null) {
        obj = {};
      }
      const util = closure_0(12158).util;
      const merged = Object.assign(util.normalizeParams(zodLazy));
      const zodObject = new _decodeAsync.ZodObject({ type: "object", shape: obj });
      return zodObject;
    };
    exports.strictObject = function strictObject(shape, zodLazy) {
      const util = closure_0(12158).util;
      const merged = Object.assign(util.normalizeParams(zodLazy));
      const zodObject = new _decodeAsync.ZodObject({ type: "object", shape, catchall: fnResult._never(_decodeAsync.ZodNever, undefined) });
      return zodObject;
    };
    exports.looseObject = function looseObject(shape, zodLazy) {
      const util = closure_0(12158).util;
      const merged = Object.assign(util.normalizeParams(zodLazy));
      const zodObject = new _decodeAsync.ZodObject({ type: "object", shape, catchall: fnResult._unknown(_decodeAsync.ZodUnknown) });
      return zodObject;
    };
    exports.union = union;
    exports.xor = function xor(options, zodLazy) {
      const util = closure_0(12158).util;
      const merged = Object.assign(util.normalizeParams(zodLazy));
      const zodXor = new _decodeAsync.ZodXor({ type: "union", options, inclusive: false });
      return zodXor;
    };
    exports.discriminatedUnion = function discriminatedUnion(discriminator, options, zodLazy) {
      const util = closure_0(12158).util;
      const merged = Object.assign(util.normalizeParams(zodLazy));
      const zodDiscriminatedUnion = new _decodeAsync.ZodDiscriminatedUnion({ type: "union", options, discriminator });
      return zodDiscriminatedUnion;
    };
    exports.intersection = intersection;
    exports.tuple = tuple;
    exports.record = record;
    exports.partialRecord = function partialRecord(z11, objectResult4, zodLazy) {
      const obj = { type: "record", keyType: z11, valueType: objectResult4 };
      const util = closure_0(12158).util;
      const merged = Object.assign(util.normalizeParams(zodLazy));
      obj.partial = true;
      const zodRecord = new _decodeAsync.ZodRecord(obj);
      return zodRecord;
    };
    exports.looseRecord = function looseRecord(stringResult1, valueType, zodLazy) {
      const util = closure_0(12158).util;
      const merged = Object.assign(util.normalizeParams(zodLazy));
      const zodRecord = new _decodeAsync.ZodRecord({ type: "record", keyType: stringResult1, valueType, mode: "loose" });
      return zodRecord;
    };
    exports.map = function map(keyType, valueType, zodLazy) {
      const util = closure_0(12158).util;
      const merged = Object.assign(util.normalizeParams(zodLazy));
      const zodMap = new _decodeAsync.ZodMap({ type: "map", keyType, valueType });
      return zodMap;
    };
    exports.set = function set(valueType, zodLazy) {
      const util = closure_0(12158).util;
      const merged = Object.assign(util.normalizeParams(zodLazy));
      const zodSet = new _decodeAsync.ZodSet({ type: "set", valueType });
      return zodSet;
    };
    exports.enum = _enum;
    exports.nativeEnum = function nativeEnum(entries, zodLazy) {
      const util = closure_0(12158).util;
      const merged = Object.assign(util.normalizeParams(zodLazy));
      const zodEnum = new _decodeAsync.ZodEnum({ type: "enum", entries });
      return zodEnum;
    };
    exports.literal = function literal(arg0, zodLazy) {
      let tmp = arg0;
      if (!Array.isArray(arg0)) {
        items = [arg0];
        tmp = items;
      }
      const util = closure_0(12158).util;
      const merged = Object.assign(util.normalizeParams(zodLazy));
      const zodLiteral = new _decodeAsync.ZodLiteral({ type: "literal", values: tmp });
      return zodLiteral;
    };
    exports.file = function file(zodLazy) {
      return fnResult._file(_decodeAsync.ZodFile, zodLazy);
    };
    exports.transform = transform;
    exports.optional = optional;
    exports.exactOptional = exactOptional;
    exports.nullable = nullable;
    exports.nullish = function nullish(innerType) {
      const zodNullable = new _decodeAsync.ZodNullable({ type: "nullable", innerType });
      const zodOptional = new _decodeAsync.ZodOptional({ type: "optional", innerType: zodNullable });
      return zodOptional;
    };
    exports._default = _default;
    exports.prefault = prefault;
    exports.nonoptional = nonoptional;
    exports.success = function success(innerType) {
      const zodSuccess = new _decodeAsync.ZodSuccess({ type: "success", innerType });
      return zodSuccess;
    };
    exports.catch = _catch;
    exports.nan = function nan(zodLazy) {
      return fnResult._nan(_decodeAsync.ZodNaN, zodLazy);
    };
    exports.pipe = pipe;
    exports.codec = function codec(in, out, decode) {
      const zodCodec = new _decodeAsync.ZodCodec({ type: "pipe", in: _in, out, transform: decode.decode, reverseTransform: decode.encode });
      return zodCodec;
    };
    exports.invertCodec = function invertCodec(_zod) {
      const def = _zod._zod.def;
      const zodCodec = new _decodeAsync.ZodCodec({ type: "pipe", in: def.out, out: def.in, transform: def.reverseTransform, reverseTransform: def.transform });
      return zodCodec;
    };
    exports.readonly = readonly;
    exports.templateLiteral = function templateLiteral(parts, zodLazy) {
      const util = closure_0(12158).util;
      const merged = Object.assign(util.normalizeParams(zodLazy));
      const zodTemplateLiteral = new _decodeAsync.ZodTemplateLiteral({ type: "template_literal", parts });
      return zodTemplateLiteral;
    };
    exports.lazy = lazy;
    exports.promise = function promise(innerType) {
      return new _decodeAsync.ZodPromise({ type: "promise", innerType });
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
    exports.custom = function custom(arg0, zodLazy) {
      let fn = arg0;
      if (arg0 == null) {
        fn = () => true;
      }
      return fnResult._custom(_decodeAsync.ZodCustom, fn, zodLazy);
    };
    exports.refine = refine;
    exports.superRefine = superRefine;
    exports.instanceof = function _instanceof(Class) {
      closure_0 = Class;
      let obj = zodLazy;
      if (zodLazy === undefined) {
        obj = {};
      }
      const util = closure_0(12158).util;
      const merged = Object.assign(util.normalizeParams(obj));
      const zodInstanceOf = new _decodeAsync.ZodInstanceOf({
        type: "custom",
        check: "custom",
        fn(arg0) {
          return arg0 instanceof closure_0;
        },
        abort: true
      });
      zodInstanceOf._zod.bag.Class = Class;
      zodInstanceOf._zod.check = (value) => {
        if (!(value.value instanceof closure_0)) {
          const issues = value.issues;
          const obj = { code: "invalid_type", expected: tmp.name, input: value.value, inst: zodInstanceOf, path: null };
          let path = zodInstanceOf._zod.def.path;
          if (path == null) {
            path = [];
          }
          items = [];
          HermesBuiltin.arraySpread(path, 0);
          obj.path = items;
          issues.push(obj);
        }
      };
      return zodInstanceOf;
    };
    exports.json = function json(arg0) {
      closure_0 = arg0;
      zodLazy = new zodLazy.ZodLazy({
        type: "lazy",
        getter: () => {
          items = [fnResult._string(_decodeAsync.ZodString, closure_0), fnResult._number(_decodeAsync.ZodNumber, undefined), fnResult._boolean(_decodeAsync.ZodBoolean, undefined), fnResult._null(_decodeAsync.ZodNull, undefined), fnResult._array(_decodeAsync.ZodArray, zodLazy, undefined), ];
          const _stringResult = fnResult._string(_decodeAsync.ZodString, undefined);
          if (zodLazy) {
            if (zodLazy._zod) {
              const obj2 = { type: "record", keyType: _stringResult, valueType: zodLazy };
              const util2 = closure_0(12158).util;
              const merged = Object.assign(util2.normalizeParams(undefined));
              let zodRecord = new _decodeAsync.ZodRecord(obj2);
              let tmp4 = closure_0;
            }
            items[5] = zodRecord;
            const obj3 = { type: "union", options: items };
            const util3 = tmp4(12158).util;
            const merged1 = Object.assign(util3.normalizeParams(undefined));
            const zodUnion = new _decodeAsync.ZodUnion(obj3);
            return zodUnion;
          }
          tmp4 = closure_0;
          const util = closure_0(12158).util;
          const merged2 = Object.assign(util.normalizeParams(zodLazy));
          zodRecord = new _decodeAsync.ZodRecord({ type: "record", keyType: fnResult._string(_decodeAsync.ZodString, undefined), valueType: _stringResult });
          const obj4 = { type: "record", keyType: fnResult._string(_decodeAsync.ZodString, undefined), valueType: _stringResult };
        }
      });
      return zodLazy;
    };
    exports.preprocess = function preprocess(transform, out) {
      const obj = { type: "pipe", in: null, out: null };
      const zodTransform = new _decodeAsync.ZodTransform({ type: "transform", transform });
      obj.in = zodTransform;
      obj.out = out;
      const zodPreprocess = new _decodeAsync.ZodPreprocess(obj);
      return zodPreprocess;
    };
    const fnResult = fn(_mod12158);
    let closure_7 = fn(aggregateChecks);
    let closure_8 = fn(_mod12165);
    let closure_9 = fn2(_mod12181);
    let closure_10 = fn(lt);
    let closure_11 = fn(_mod12242);
    let obj = {
      check() {
            items = [...arguments];
            const def = this.def;
            const util = closure_0(12158).util;
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
                  const obj = { _zod: null };
                  const obj2 = { check, def: { check: "custom" }, onattach: [] };
                  obj._zod = obj2;
                  tmp = obj;
                }
                return tmp;
              })
            ];
            obj.checks = items1;
            return this.clone(util.mergeDefs(def, obj), { parent: true });
          },
      with() {
            items = [...HermesBuiltin.copyRestArgs()];
            return this.check.apply(items);
          },
      clone(arg0, arg1) {
            return fnResult.clone(this, arg0, arg1);
          },
      brand() {
            return this;
          },
      register(add, arg1) {
            add.add(this, arg1);
            return this;
          },
      refine(fn, zodLazy) {
            let obj = zodLazy;
            if (zodLazy === undefined) {
              obj = {};
            }
            return this.check(fnResult._refine(_decodeAsync.ZodCustom, fn, obj));
          },
      superRefine(arg0, zodLazy) {
            return this.check(fnResult._superRefine(arg0, zodLazy));
          },
      overwrite(arg0) {
            return this.check(closure_10.overwrite(arg0));
          },
      optional() {
            const zodOptional = new _decodeAsync.ZodOptional({ type: "optional", innerType: this });
            return zodOptional;
          },
      exactOptional() {
            const zodExactOptional = new _decodeAsync.ZodExactOptional({ type: "optional", innerType: this });
            return zodExactOptional;
          },
      nullable() {
            const zodNullable = new _decodeAsync.ZodNullable({ type: "nullable", innerType: this });
            return zodNullable;
          },
      nullish() {
            const zodNullable = new _decodeAsync.ZodNullable({ type: "nullable", innerType: this });
            const zodOptional = new _decodeAsync.ZodOptional({ type: "optional", innerType: zodNullable });
            return zodOptional;
          },
      nonoptional(zodLazy) {
            const util = closure_0(12158).util;
            const merged = Object.assign(util.normalizeParams(zodLazy));
            const zodNonOptional = new _decodeAsync.ZodNonOptional({ type: "nonoptional", innerType: this });
            return zodNonOptional;
          },
      array() {
            return fnResult._array(_decodeAsync.ZodArray, this, undefined);
          },
      or(arg0) {
            items = [this, arg0];
            const util = closure_0(12158).util;
            const merged = Object.assign(util.normalizeParams(undefined));
            const zodUnion = new _decodeAsync.ZodUnion({ type: "union", options: items });
            return zodUnion;
          },
      and(right) {
            const rect = { type: "intersection", left: this, right };
            const zodIntersection = new _decodeAsync.ZodIntersection(rect);
            return zodIntersection;
          },
      transform(transform) {
            const zodTransform = new _decodeAsync.ZodTransform({ type: "transform", transform });
            const zodPipe = new _decodeAsync.ZodPipe({ type: "pipe", in: this, out: zodTransform });
            return zodPipe;
          },
      default(arg0) {
            closure_0 = arg0;
            const obj = { type: "default", innerType: this };
            Object.defineProperty(obj, "defaultValue", {
              get: () => {
                if (typeof closure_0 === "function") {
                  let shallowCloneResult = closure_0();
                } else {
                  const util = closure_0(12158).util;
                  shallowCloneResult = util.shallowClone(closure_0);
                }
                return shallowCloneResult;
              },
              set: undefined
            });
            const zodDefault = new _decodeAsync.ZodDefault(obj);
            return zodDefault;
          },
      prefault(arg0) {
            closure_0 = arg0;
            const obj = { type: "prefault", innerType: this };
            Object.defineProperty(obj, "defaultValue", {
              get: () => {
                if (typeof closure_0 === "function") {
                  let shallowCloneResult = closure_0();
                } else {
                  const util = closure_0(12158).util;
                  shallowCloneResult = util.shallowClone(closure_0);
                }
                return shallowCloneResult;
              },
              set: undefined
            });
            const zodPrefault = new _decodeAsync.ZodPrefault(obj);
            return zodPrefault;
          },
      catch(fn) {
            const obj = { type: "catch", innerType: this, catchValue: null };
            let constantCatchResult = fn;
            if (typeof fn !== "function") {
              const util = fnResult.util;
              constantCatchResult = util.constantCatch(fn);
            }
            obj.catchValue = constantCatchResult;
            const zodCatch = new _decodeAsync.ZodCatch(obj);
            return zodCatch;
          },
      pipe(out) {
            const zodPipe = new _decodeAsync.ZodPipe({ type: "pipe", in: this, out });
            return zodPipe;
          },
      readonly() {
            const zodReadonly = new _decodeAsync.ZodReadonly({ type: "readonly", innerType: this });
            return zodReadonly;
          },
      describe(description) {
            const cloneResult = this.clone();
            const globalRegistry = fnResult.globalRegistry;
            globalRegistry.add(cloneResult, { description });
            return cloneResult;
          },
      meta() {
            const self = this;
            items = [...arguments];
            if (0 === items.length) {
              const globalRegistry2 = fnResult.globalRegistry;
              return globalRegistry2.get(self);
            } else {
              const cloneResult = self.clone();
              const globalRegistry = fnResult.globalRegistry;
              globalRegistry.add(cloneResult, items[0]);
              return cloneResult;
            }
          },
      isOptional() {
            return this.safeParse(undefined).success;
          },
      isNullable() {
            return this.safeParse(null).success;
          },
      apply(fn) {
            const self = this;
            const substr = [...arguments].slice();
            if (0 === substr.length) {
              let applyResult = fn(self);
            } else {
              items = [self];
              HermesBuiltin.arraySpread(substr, 1);
              applyResult = HermesBuiltin.apply(items, undefined);
            }
            return applyResult;
          }
    };
    Object.defineProperty(obj, "~standard", {
      get: function() {
            const util = closure_0(12158).util;
            const obj = {};
            const merged = Object.assign(fnResult.standardProps(this));
            obj.jsonSchema = { input: closure_0(12236).createStandardJSONSchemaMethod(this, "input"), output: closure_0(12236).createStandardJSONSchemaMethod(this, "output") };
            return util.hide(this, "~standard", obj);
          },
      set: function(value) {
            const util = closure_0(12158).util;
            util.own(this, "~standard", value);
          }
    });
    function _parse(arg0, arg1) {
      return closure_11.parse(this, arg0, arg1, { callee: _parse });
    }
    obj.parse = _parse;
    function _parseAsync(arg0, arg1) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    asyncGeneratorStep(async function(arg0, arg1) {
      const self = this;
      closure_1 = arg0;
      closure_2 = arg1;
      c4 = 0;
      c3 = 0;
      return (async (arg0, value) => {
        await closure_1_11.parseAsync(self, closure_1, closure_2, { callee: _decodeAsync });
        return value;
      })();
    });
    obj.parseAsync = _parseAsync;
    obj.safeParse = function safeParse(arg0, arg1) {
      return closure_11.safeParse(this, arg0, arg1);
    };
    obj.safeParseAsync = function safeParseAsync(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      const self = this;
      return (async () => {
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c0 = 2;
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c0 = 3;
              const obj = { value: closure_1_11.safeParseAsync(self, closure_0, closure_1), done: true };
              return obj;
            }
          } catch (tmp8) {
            c0 = tmp;
            throw tmp8;
          }
        }
      })();
    };
    Object.defineProperty(obj, "spa", {
      get: function() {
            let safeParseAsync;
            if (this != null) {
              safeParseAsync = this.safeParseAsync;
            }
            return safeParseAsync;
          },
      set: function(value) {
            const util = closure_0(12158).util;
            util.own(this, "spa", value);
          }
    });
    obj.validate = function validate(arg0, arg1) {
      return closure_11.validate(this, arg0, arg1);
    };
    obj.validateAsync = function validateAsync(arg0, arg1) {
      return closure_11.validateAsync(this, arg0, arg1);
    };
    function _encode($ZodRealError, arg1) {
      return closure_11.encode(this, $ZodRealError, arg1, { callee: _encode });
    }
    obj.encode = _encode;
    function _decode($ZodRealError, arg1) {
      return closure_11.decode(this, $ZodRealError, arg1, { callee: _decode });
    }
    obj.decode = _decode;
    function _encodeAsync($ZodRealError, arg1) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    asyncGeneratorStep(async function(arg0, arg1) {
      const self = this;
      closure_1 = arg0;
      closure_2 = arg1;
      c4 = 0;
      c3 = 0;
      return (async (arg0, value) => {
        await closure_1_11.encodeAsync(self, closure_1, closure_2, { callee: _decodeAsync });
        return value;
      })();
    });
    obj.encodeAsync = _encodeAsync;
    _decodeAsync = function _decodeAsync($ZodRealError, arg1) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_0 = asyncGeneratorStep(async function(arg0, arg1) {
      const self = this;
      closure_1 = arg0;
      closure_2 = arg1;
      c4 = 0;
      c3 = 0;
      return (async (arg0, value) => {
        await closure_1_11.decodeAsync(self, closure_1, closure_2, { callee: _decodeAsync });
        return value;
      })();
    });
    obj.decodeAsync = _decodeAsync;
    obj.safeEncode = function safeEncode(arg0, arg1) {
      return closure_11.safeEncode(this, arg0, arg1);
    };
    obj.safeDecode = function safeDecode(arg0, arg1) {
      return closure_11.safeDecode(this, arg0, arg1);
    };
    obj.safeEncodeAsync = function safeEncodeAsync(self, arg1) {
      closure_0 = self;
      closure_1 = arg1;
      self = this;
      return (async () => {
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c0 = 2;
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c0 = 3;
              const obj = { value: closure_1_11.safeEncodeAsync(self, closure_0, closure_1), done: true };
              return obj;
            }
          } catch (tmp8) {
            c0 = tmp;
            throw tmp8;
          }
        }
      })();
    };
    obj.safeDecodeAsync = function safeDecodeAsync(self, arg1) {
      closure_0 = self;
      closure_1 = arg1;
      self = this;
      return (async () => {
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c0 = 2;
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c0 = 3;
              const obj = { value: closure_1_11.safeDecodeAsync(self, closure_0, closure_1), done: true };
              return obj;
            }
          } catch (tmp8) {
            c0 = tmp;
            throw tmp8;
          }
        }
      })();
    };
    obj.toJSONSchema = function toJSONSchema(arg0) {
      return closure_0(12236).createToJSONSchemaMethod(this, {})(arg0);
    };
    Object.defineProperty(obj, "description", {
      get: function() {
            const globalRegistry = fnResult.globalRegistry;
            value = globalRegistry.get(this);
            let description;
            if (value != null) {
              description = value.description;
            }
            return description;
          },
      set: undefined
    });
    Object.defineProperty(obj, "_def", {
      get: function() {
            return this._zod.def;
          },
      set: undefined
    });
    exports.ZodType = fnResult.$constructor("ZodType", (arg0, def) => {
      if (!fnResult.globalConfig.localeError) {
        fnResult.config(closure_9.default());
      }
      const $ZodType = fnResult.$ZodType;
      $ZodType.init(arg0, def);
      arg0.def = def;
      arg0.type = def.type;
      return arg0;
    }, obj);
    let util = _mod12158.util;
    let obj2 = {
      format(keyType) {
            let format = closure_7.aggregateChecks(keyType).format;
            if (format == null) {
              format = null;
            }
            return format;
          },
      minLength(keyType) {
            let minimum = closure_7.aggregateChecks(keyType).minimum;
            if (minimum == null) {
              minimum = null;
            }
            return minimum;
          },
      maxLength(keyType) {
            let maximum = closure_7.aggregateChecks(keyType).maximum;
            if (maximum == null) {
              maximum = null;
            }
            return maximum;
          }
    };
    const range = {
      regex() {
            items = [...HermesBuiltin.copyRestArgs()];
            return this.check(closure_10.regex.apply(items));
          },
      includes() {
            items = [...HermesBuiltin.copyRestArgs()];
            return this.check(closure_10.includes.apply(items));
          },
      startsWith() {
            items = [...HermesBuiltin.copyRestArgs()];
            return this.check(closure_10.startsWith.apply(items));
          },
      endsWith() {
            items = [...HermesBuiltin.copyRestArgs()];
            return this.check(closure_10.endsWith.apply(items));
          },
      min() {
            items = [...HermesBuiltin.copyRestArgs()];
            return this.check(closure_10.minLength.apply(items));
          },
      max() {
            items = [...HermesBuiltin.copyRestArgs()];
            return this.check(closure_10.maxLength.apply(items));
          },
      length() {
            items = [...HermesBuiltin.copyRestArgs()];
            return this.check(closure_10.length.apply(items));
          },
      nonempty() {
            items = [1];
            HermesBuiltin.arraySpread(HermesBuiltin.copyRestArgs(), 1);
            return this.check(closure_10.minLength.apply(items));
          },
      lowercase(arg0) {
            return this.check(closure_10.lowercase(arg0));
          },
      uppercase(arg0) {
            return this.check(closure_10.uppercase(arg0));
          },
      trim() {
            return this.check(closure_10.trim());
          },
      normalize() {
            items = [...HermesBuiltin.copyRestArgs()];
            return this.check(closure_10.normalize.apply(items));
          },
      toLowerCase() {
            return this.check(closure_10.toLowerCase());
          },
      toUpperCase() {
            return this.check(closure_10.toUpperCase());
          },
      slugify() {
            return this.check(closure_10.slugify());
          }
    };
    exports._ZodString = fnResult.$constructor("_ZodString", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodString = closure_6.$ZodString;
      $ZodString.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.stringProcessor(closure_0, arg0, arg1, arg2);
    }, util.derived(obj2, range));
    let obj3 = {
      email(zodLazy) {
            return this.check(fnResult._email(_decodeAsync.ZodEmail, zodLazy));
          },
      url(url) {
            return this.check(fnResult._url(_decodeAsync.ZodURL, url));
          },
      jwt(zodLazy) {
            return this.check(fnResult._jwt(_decodeAsync.ZodJWT, zodLazy));
          },
      emoji(zodLazy) {
            return this.check(fnResult._emoji(_decodeAsync.ZodEmoji, zodLazy));
          },
      guid(zodLazy) {
            return this.check(fnResult._guid(_decodeAsync.ZodGUID, zodLazy));
          },
      uuid(zodLazy) {
            return this.check(fnResult._uuid(_decodeAsync.ZodUUID, zodLazy));
          },
      uuidv4(zodLazy) {
            return this.check(fnResult._uuidv4(_decodeAsync.ZodUUID, zodLazy));
          },
      uuidv6(zodLazy) {
            return this.check(fnResult._uuidv6(_decodeAsync.ZodUUID, zodLazy));
          },
      uuidv7(zodLazy) {
            return this.check(fnResult._uuidv7(_decodeAsync.ZodUUID, zodLazy));
          },
      nanoid(zodLazy) {
            return this.check(fnResult._nanoid(_decodeAsync.ZodNanoID, zodLazy));
          },
      cuid(zodLazy) {
            return this.check(fnResult._cuid(_decodeAsync.ZodCUID, zodLazy));
          },
      cuid2(zodLazy) {
            return this.check(fnResult._cuid2(_decodeAsync.ZodCUID2, zodLazy));
          },
      ulid(zodLazy) {
            return this.check(fnResult._ulid(_decodeAsync.ZodULID, zodLazy));
          },
      base64(zodLazy) {
            return this.check(fnResult._base64(_decodeAsync.ZodBase64, zodLazy));
          },
      base64url(zodLazy) {
            return this.check(fnResult._base64url(_decodeAsync.ZodBase64URL, zodLazy));
          },
      xid(zodLazy) {
            return this.check(fnResult._xid(_decodeAsync.ZodXID, zodLazy));
          },
      ksuid(zodLazy) {
            return this.check(fnResult._ksuid(_decodeAsync.ZodKSUID, zodLazy));
          },
      ipv4(zodLazy) {
            return this.check(fnResult._ipv4(_decodeAsync.ZodIPv4, zodLazy));
          },
      ipv6(zodLazy) {
            return this.check(fnResult._ipv6(_decodeAsync.ZodIPv6, zodLazy));
          },
      cidrv4(zodLazy) {
            return this.check(fnResult._cidrv4(_decodeAsync.ZodCIDRv4, zodLazy));
          },
      cidrv6(zodLazy) {
            return this.check(fnResult._cidrv6(_decodeAsync.ZodCIDRv6, zodLazy));
          },
      e164(zodLazy) {
            return this.check(fnResult._e164(_decodeAsync.ZodE164, zodLazy));
          },
      datetime(zodLazy) {
            return this.check(fnResult._isoDateTime(_decodeAsync.ZodISODateTime, zodLazy));
          },
      date(zodLazy) {
            return this.check(fnResult._isoDate(_decodeAsync.ZodISODate, zodLazy));
          },
      time(zodLazy) {
            return this.check(fnResult._isoTime(_decodeAsync.ZodISOTime, zodLazy));
          },
      duration(zodLazy) {
            return this.check(fnResult._isoDuration(_decodeAsync.ZodISODuration, zodLazy));
          }
    };
    exports.ZodString = fnResult.$constructor("ZodString", (arg0, arg1) => {
      const $ZodString = fnResult.$ZodString;
      $ZodString.init(arg0, arg1);
      const _ZodString = _decodeAsync._ZodString;
      _ZodString.init(arg0, arg1);
    }, obj3);
    exports.ZodStringFormat = fnResult.$constructor("ZodStringFormat", (arg0, arg1) => {
      const $ZodStringFormat = fnResult.$ZodStringFormat;
      $ZodStringFormat.init(arg0, arg1);
      const _ZodString = _decodeAsync._ZodString;
      _ZodString.init(arg0, arg1);
    });
    exports.ZodISODateTime = fnResult.$constructor("ZodISODateTime", (arg0, arg1) => {
      const $ZodISODateTime = fnResult.$ZodISODateTime;
      $ZodISODateTime.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodISODate = fnResult.$constructor("ZodISODate", (arg0, arg1) => {
      const $ZodISODate = fnResult.$ZodISODate;
      $ZodISODate.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodISOTime = fnResult.$constructor("ZodISOTime", (arg0, arg1) => {
      const $ZodISOTime = fnResult.$ZodISOTime;
      $ZodISOTime.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodISODuration = fnResult.$constructor("ZodISODuration", (arg0, arg1) => {
      const $ZodISODuration = fnResult.$ZodISODuration;
      $ZodISODuration.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodEmail = fnResult.$constructor("ZodEmail", (arg0, arg1) => {
      const $ZodEmail = fnResult.$ZodEmail;
      $ZodEmail.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodGUID = fnResult.$constructor("ZodGUID", (arg0, arg1) => {
      const $ZodGUID = fnResult.$ZodGUID;
      $ZodGUID.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodUUID = fnResult.$constructor("ZodUUID", (arg0, arg1) => {
      const $ZodUUID = fnResult.$ZodUUID;
      $ZodUUID.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodURL = fnResult.$constructor("ZodURL", (arg0, arg1) => {
      const $ZodURL = fnResult.$ZodURL;
      $ZodURL.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodEmoji = fnResult.$constructor("ZodEmoji", (arg0, arg1) => {
      const $ZodEmoji = fnResult.$ZodEmoji;
      $ZodEmoji.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodNanoID = fnResult.$constructor("ZodNanoID", (arg0, arg1) => {
      const $ZodNanoID = fnResult.$ZodNanoID;
      $ZodNanoID.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCUID = fnResult.$constructor("ZodCUID", (arg0, arg1) => {
      const $ZodCUID = fnResult.$ZodCUID;
      $ZodCUID.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCUID2 = fnResult.$constructor("ZodCUID2", (arg0, arg1) => {
      const $ZodCUID2 = fnResult.$ZodCUID2;
      $ZodCUID2.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodULID = fnResult.$constructor("ZodULID", (arg0, arg1) => {
      const $ZodULID = fnResult.$ZodULID;
      $ZodULID.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodXID = fnResult.$constructor("ZodXID", (arg0, arg1) => {
      const $ZodXID = fnResult.$ZodXID;
      $ZodXID.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodKSUID = fnResult.$constructor("ZodKSUID", (arg0, arg1) => {
      const $ZodKSUID = fnResult.$ZodKSUID;
      $ZodKSUID.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodIPv4 = fnResult.$constructor("ZodIPv4", (arg0, arg1) => {
      const $ZodIPv4 = fnResult.$ZodIPv4;
      $ZodIPv4.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodMAC = fnResult.$constructor("ZodMAC", (arg0, arg1) => {
      const $ZodMAC = fnResult.$ZodMAC;
      $ZodMAC.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodIPv6 = fnResult.$constructor("ZodIPv6", (arg0, arg1) => {
      const $ZodIPv6 = fnResult.$ZodIPv6;
      $ZodIPv6.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCIDRv4 = fnResult.$constructor("ZodCIDRv4", (arg0, arg1) => {
      const $ZodCIDRv4 = fnResult.$ZodCIDRv4;
      $ZodCIDRv4.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCIDRv6 = fnResult.$constructor("ZodCIDRv6", (arg0, arg1) => {
      const $ZodCIDRv6 = fnResult.$ZodCIDRv6;
      $ZodCIDRv6.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodBase64 = fnResult.$constructor("ZodBase64", (arg0, arg1) => {
      const $ZodBase64 = fnResult.$ZodBase64;
      $ZodBase64.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodBase64URL = fnResult.$constructor("ZodBase64URL", (arg0, arg1) => {
      const $ZodBase64URL = fnResult.$ZodBase64URL;
      $ZodBase64URL.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodE164 = fnResult.$constructor("ZodE164", (arg0, arg1) => {
      const $ZodE164 = fnResult.$ZodE164;
      $ZodE164.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCreditCard = fnResult.$constructor("ZodCreditCard", (arg0, arg1) => {
      const $ZodCreditCard = fnResult.$ZodCreditCard;
      $ZodCreditCard.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodIBAN = fnResult.$constructor("ZodIBAN", (arg0, arg1) => {
      const $ZodIBAN = fnResult.$ZodIBAN;
      $ZodIBAN.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodJWT = fnResult.$constructor("ZodJWT", (arg0, arg1) => {
      const $ZodJWT = fnResult.$ZodJWT;
      $ZodJWT.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodCustomStringFormat = fnResult.$constructor("ZodCustomStringFormat", (arg0, arg1) => {
      const $ZodCustomStringFormat = fnResult.$ZodCustomStringFormat;
      $ZodCustomStringFormat.init(arg0, arg1);
      const ZodStringFormat = _decodeAsync.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    let util2 = _mod12158.util;
    let obj4 = {
      minValue(keyType) {
            ({ minimum, exclusiveMinimum } = closure_7.aggregateChecks(keyType));
            if (minimum == null) {
              const _Number = Number;
              minimum = Number.NEGATIVE_INFINITY;
            }
            if (exclusiveMinimum == null) {
              const _Number2 = Number;
              exclusiveMinimum = Number.NEGATIVE_INFINITY;
            }
            return Math.max(minimum, exclusiveMinimum);
          },
      maxValue(keyType) {
            ({ maximum, exclusiveMaximum } = closure_7.aggregateChecks(keyType));
            if (maximum == null) {
              const _Number = Number;
              maximum = Number.POSITIVE_INFINITY;
            }
            if (exclusiveMaximum == null) {
              const _Number2 = Number;
              exclusiveMaximum = Number.POSITIVE_INFINITY;
            }
            return Math.min(maximum, exclusiveMaximum);
          },
      isInt(keyType) {
            const aggregateChecksResult = closure_7.aggregateChecks(keyType);
            const multipleOf = aggregateChecksResult.multipleOf;
            let isInt = aggregateChecksResult.isInt;
            if (!isInt) {
              let someResult;
              if (multipleOf != null) {
                const _Number = Number;
                someResult = multipleOf.some(Number.isSafeInteger);
              }
              isInt = someResult;
            }
            return isInt;
          },
      format(keyType) {
            let format = closure_7.aggregateChecks(keyType).format;
            if (format == null) {
              format = null;
            }
            return format;
          }
    };
    const range1 = {
      gt(arg0, arg1) {
            return this.check(closure_10.gt(arg0, arg1));
          },
      gte(arg0, arg1) {
            return this.check(closure_10.gte(arg0, arg1));
          },
      min(arg0, arg1) {
            return this.check(closure_10.gte(arg0, arg1));
          },
      lt(arg0, arg1) {
            return this.check(closure_10.lt(arg0, arg1));
          },
      lte(arg0, arg1) {
            return this.check(closure_10.lte(arg0, arg1));
          },
      max(arg0, arg1) {
            return this.check(closure_10.lte(arg0, arg1));
          },
      int(zodLazy) {
            return this.check(fnResult._int(_decodeAsync.ZodNumberFormat, zodLazy));
          },
      safe(zodLazy) {
            return this.check(fnResult._int(_decodeAsync.ZodNumberFormat, zodLazy));
          },
      positive(arg0) {
            return this.check(closure_10.gt(0, arg0));
          },
      nonnegative(arg0) {
            return this.check(closure_10.gte(0, arg0));
          },
      negative(arg0) {
            return this.check(closure_10.lt(0, arg0));
          },
      nonpositive(arg0) {
            return this.check(closure_10.lte(0, arg0));
          },
      multipleOf(arg0, arg1) {
            return this.check(closure_10.multipleOf(arg0, arg1));
          },
      step(arg0, arg1) {
            return this.check(closure_10.multipleOf(arg0, arg1));
          },
      finite() {
            return this;
          }
    };
    exports.ZodNumber = fnResult.$constructor("ZodNumber", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodNumber = closure_6.$ZodNumber;
      $ZodNumber.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.numberProcessor(closure_0, arg0, arg1, arg2);
      _zod.isFinite = true;
    }, util2.derived(obj4, range1));
    exports.ZodNumberFormat = fnResult.$constructor("ZodNumberFormat", (arg0, arg1) => {
      const $ZodNumberFormat = fnResult.$ZodNumberFormat;
      $ZodNumberFormat.init(arg0, arg1);
      const ZodNumber = _decodeAsync.ZodNumber;
      ZodNumber.init(arg0, arg1);
    });
    exports.ZodBoolean = fnResult.$constructor("ZodBoolean", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodBoolean = closure_6.$ZodBoolean;
      $ZodBoolean.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.booleanProcessor(closure_0, arg0, arg1, arg2);
    });
    let util3 = _mod12158.util;
    const obj5 = {
      minValue(keyType) {
            let minimum = closure_7.aggregateChecks(keyType).minimum;
            if (minimum == null) {
              minimum = null;
            }
            return minimum;
          },
      maxValue(keyType) {
            let maximum = closure_7.aggregateChecks(keyType).maximum;
            if (maximum == null) {
              maximum = null;
            }
            return maximum;
          },
      format(keyType) {
            let format = closure_7.aggregateChecks(keyType).format;
            if (format == null) {
              format = null;
            }
            return format;
          }
    };
    const range2 = {
      gte(arg0, arg1) {
            return this.check(closure_10.gte(arg0, arg1));
          },
      min(arg0, arg1) {
            return this.check(closure_10.gte(arg0, arg1));
          },
      gt(arg0, arg1) {
            return this.check(closure_10.gt(arg0, arg1));
          },
      lt(arg0, arg1) {
            return this.check(closure_10.lt(arg0, arg1));
          },
      lte(arg0, arg1) {
            return this.check(closure_10.lte(arg0, arg1));
          },
      max(arg0, arg1) {
            return this.check(closure_10.lte(arg0, arg1));
          },
      positive(arg0) {
            return this.check(closure_10.gt(BigInt(0), arg0));
          },
      negative(arg0) {
            return this.check(closure_10.lt(BigInt(0), arg0));
          },
      nonpositive(arg0) {
            return this.check(closure_10.lte(BigInt(0), arg0));
          },
      nonnegative(arg0) {
            return this.check(closure_10.gte(BigInt(0), arg0));
          },
      multipleOf(arg0, arg1) {
            return this.check(closure_10.multipleOf(arg0, arg1));
          }
    };
    exports.ZodBigInt = fnResult.$constructor("ZodBigInt", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodBigInt = closure_6.$ZodBigInt;
      $ZodBigInt.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.bigintProcessor(closure_0, arg0, arg1, arg2);
    }, util3.derived(obj5, range2));
    exports.ZodBigIntFormat = fnResult.$constructor("ZodBigIntFormat", (arg0, arg1) => {
      const $ZodBigIntFormat = fnResult.$ZodBigIntFormat;
      $ZodBigIntFormat.init(arg0, arg1);
      const ZodBigInt = _decodeAsync.ZodBigInt;
      ZodBigInt.init(arg0, arg1);
    });
    exports.ZodSymbol = fnResult.$constructor("ZodSymbol", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodSymbol = closure_6.$ZodSymbol;
      $ZodSymbol.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.symbolProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodUndefined = fnResult.$constructor("ZodUndefined", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodUndefined = closure_6.$ZodUndefined;
      $ZodUndefined.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.undefinedProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodNull = fnResult.$constructor("ZodNull", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodNull = closure_6.$ZodNull;
      $ZodNull.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.nullProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodAny = fnResult.$constructor("ZodAny", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodAny = closure_6.$ZodAny;
      $ZodAny.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.anyProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodUnknown = fnResult.$constructor("ZodUnknown", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodUnknown = closure_6.$ZodUnknown;
      $ZodUnknown.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.unknownProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodNever = fnResult.$constructor("ZodNever", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodNever = closure_6.$ZodNever;
      $ZodNever.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.neverProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodVoid = fnResult.$constructor("ZodVoid", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodVoid = closure_6.$ZodVoid;
      $ZodVoid.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.voidProcessor(closure_0, arg0, arg1, arg2);
    });
    const util4 = _mod12158.util;
    const obj6 = {
      minDate(keyType) {
            const minimum = closure_7.aggregateChecks(keyType).minimum;
            let date = null;
            if (minimum) {
              const _Date = Date;
              date = new Date(minimum);
            }
            return date;
          },
      maxDate(keyType) {
            const maximum = closure_7.aggregateChecks(keyType).maximum;
            let date = null;
            if (maximum) {
              const _Date = Date;
              date = new Date(maximum);
            }
            return date;
          }
    };
    exports.ZodDate = fnResult.$constructor("ZodDate", (_zod, arg1) => {
      const $ZodDate = closure_6.$ZodDate;
      $ZodDate.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.dateProcessor(closure_0, arg0, arg1, arg2);
      _zod.min = (arg0, arg1) => _zod.check(closure_10.gte(arg0, arg1));
      _zod.max = (arg0, arg1) => _zod.check(closure_10.lte(arg0, arg1));
    }, util4.derived(obj6, {}));
    const range3 = {
      min(arg0, arg1) {
            return this.check(closure_10.minLength(arg0, arg1));
          },
      nonempty(arg0) {
            return this.check(closure_10.minLength(1, arg0));
          },
      max(arg0, arg1) {
            return this.check(closure_10.maxLength(arg0, arg1));
          },
      length(arg0, arg1) {
            return this.check(closure_10.length(arg0, arg1));
          },
      unwrap() {
            return this.element;
          }
    };
    exports.ZodArray = fnResult.$constructor("ZodArray", (_zod, element) => {
      closure_0 = _zod;
      if (!closure_6.globalConfig.memoizer) {
        const obj2 = { memoizer: closure_6.memoizer() };
        closure_6.config(obj2);
      }
      const $ZodArray = closure_6.$ZodArray;
      $ZodArray.init(_zod, element);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, element);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.arrayProcessor(closure_0, arg0, arg1, arg2);
      _zod.element = element.element;
    }, range3);
    const obj7 = {
      keyof() {
            const keys = Object.keys(this._zod.def.shape);
            let fromEntriesResult = keys;
            if (Array.isArray(keys)) {
              const _Object = Object;
              fromEntriesResult = Object.fromEntries(keys.map((item) => {
                items = [item, item];
                return items;
              }));
            }
            const util = closure_0(12158).util;
            const merged = Object.assign(util.normalizeParams(undefined));
            const zodEnum = new _decodeAsync.ZodEnum({ type: "enum", entries: fromEntriesResult });
            return zodEnum;
          },
      catchall(catchall) {
            const util = closure_0(12158).util;
            return this.clone(util.mergeDefs(this._zod.def, { catchall }));
          },
      passthrough() {
            const util = closure_0(12158).util;
            return this.clone(util.mergeDefs(this._zod.def, { catchall: fnResult._unknown(_decodeAsync.ZodUnknown) }));
          },
      loose() {
            const util = closure_0(12158).util;
            return this.clone(util.mergeDefs(this._zod.def, { catchall: fnResult._unknown(_decodeAsync.ZodUnknown) }));
          },
      strict() {
            const util = closure_0(12158).util;
            return this.clone(util.mergeDefs(this._zod.def, { catchall: fnResult._never(_decodeAsync.ZodNever, undefined) }));
          },
      strip() {
            const util = closure_0(12158).util;
            return this.clone(util.mergeDefs(this._zod.def, { catchall: "r" }));
          },
      extend(arg0) {
            const util = closure_0(12158).util;
            return util.extend(this, arg0);
          },
      safeExtend(arg0) {
            const util = closure_0(12158).util;
            return util.safeExtend(this, arg0);
          },
      merge(arg0) {
            const util = closure_0(12158).util;
            return util.merge(this, arg0);
          },
      pick(arg0) {
            const util = closure_0(12158).util;
            return util.pick(this, arg0);
          },
      omit(arg0) {
            const util = closure_0(12158).util;
            return util.omit(this, arg0);
          },
      partial() {
            items = [...arguments];
            const util = closure_0(12158).util;
            return util.partial(_decodeAsync.ZodOptional, this, items[0]);
          },
      exactPartial() {
            items = [...arguments];
            const util = closure_0(12158).util;
            return util.partial(_decodeAsync.ZodExactOptional, this, items[0], "exactPartial");
          },
      required() {
            items = [...arguments];
            const util = closure_0(12158).util;
            return util.required(_decodeAsync.ZodNonOptional, this, items[0]);
          }
    };
    exports.ZodObject = fnResult.$constructor("ZodObject", (_zod, arg1) => {
      closure_0 = _zod;
      if (!closure_6.globalConfig.memoizer) {
        const obj2 = { memoizer: closure_6.memoizer() };
        closure_6.config(obj2);
      }
      const $ZodObjectJIT = closure_6.$ZodObjectJIT;
      $ZodObjectJIT.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.objectProcessor(closure_0, arg0, arg1, arg2);
      const util = closure_0(12158).util;
      util.installLazyProp(_zod, "shape", (_zod) => _zod._zod.def.shape, false);
    }, obj7);
    exports.ZodUnion = fnResult.$constructor("ZodUnion", (_zod, options) => {
      closure_0 = _zod;
      const $ZodUnion = closure_6.$ZodUnion;
      $ZodUnion.init(_zod, options);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, options);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.unionProcessor(closure_0, arg0, arg1, arg2);
      _zod.options = options.options;
    });
    exports.ZodXor = fnResult.$constructor("ZodXor", (_zod, options) => {
      closure_0 = _zod;
      const ZodUnion = _decodeAsync.ZodUnion;
      ZodUnion.init(_zod, options);
      const $ZodXor = closure_6.$ZodXor;
      $ZodXor.init(_zod, options);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.unionProcessor(closure_0, arg0, arg1, arg2);
      _zod.options = options.options;
    });
    exports.ZodDiscriminatedUnion = fnResult.$constructor("ZodDiscriminatedUnion", (arg0, arg1) => {
      const ZodUnion = _decodeAsync.ZodUnion;
      ZodUnion.init(arg0, arg1);
      const $ZodDiscriminatedUnion = fnResult.$ZodDiscriminatedUnion;
      $ZodDiscriminatedUnion.init(arg0, arg1);
    });
    exports.ZodIntersection = fnResult.$constructor("ZodIntersection", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodIntersection = closure_6.$ZodIntersection;
      $ZodIntersection.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.intersectionProcessor(closure_0, arg0, arg1, arg2);
    });
    const obj8 = {
      rest(rest) {
            const obj = {};
            const merged = Object.assign(this._zod.def);
            obj.rest = rest;
            return this.clone(obj);
          },
      partial() {
            const self = this;
            const def = this._zod.def;
            const checks = def.checks;
            length = undefined;
            if (checks != null) {
              length = checks.length;
            }
            if (length) {
              const _Error = Error;
              const error = new Error(".partial() cannot be used on tuple schemas containing refinements");
              throw error;
            } else {
              const obj = {};
              const merged = Object.assign(def);
              items = def.items;
              obj.items = items.map((innerType) => {
                const zodOptional = new ZodOptional.ZodOptional({ type: "optional", innerType });
                return zodOptional;
              });
              return self.clone(obj);
            }
          }
    };
    exports.ZodTuple = fnResult.$constructor("ZodTuple", (_zod, arg1) => {
      closure_0 = _zod;
      if (!closure_6.globalConfig.memoizer) {
        const obj2 = { memoizer: closure_6.memoizer() };
        closure_6.config(obj2);
      }
      const $ZodTuple = closure_6.$ZodTuple;
      $ZodTuple.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.tupleProcessor(closure_0, arg0, arg1, arg2);
    }, obj8);
    exports.ZodRecord = fnResult.$constructor("ZodRecord", (_zod, arg1) => {
      closure_0 = _zod;
      if (!closure_6.globalConfig.memoizer) {
        const obj2 = { memoizer: closure_6.memoizer() };
        closure_6.config(obj2);
      }
      const $ZodRecord = closure_6.$ZodRecord;
      $ZodRecord.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.recordProcessor(closure_0, arg0, arg1, arg2);
      ({ keyType: _zod.keyType, valueType: _zod.valueType } = arg1);
    });
    exports.ZodMap = fnResult.$constructor("ZodMap", (_zod, arg1) => {
      if (!closure_6.globalConfig.memoizer) {
        const obj2 = { memoizer: closure_6.memoizer() };
        closure_6.config(obj2);
      }
      const $ZodMap = closure_6.$ZodMap;
      $ZodMap.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.mapProcessor(closure_0, arg0, arg1, arg2);
      ({ keyType: _zod.keyType, valueType: _zod.valueType } = arg1);
      _zod.min = () => {
        items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(fnResult._minSize.apply(items));
      };
      _zod.nonempty = (zodLazy) => _zod.check(fnResult._minSize(1, zodLazy));
      _zod.max = () => {
        items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(fnResult._maxSize.apply(items));
      };
      _zod.size = () => {
        items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(fnResult._size.apply(items));
      };
    });
    exports.ZodSet = fnResult.$constructor("ZodSet", (_zod, arg1) => {
      if (!closure_6.globalConfig.memoizer) {
        const obj2 = { memoizer: closure_6.memoizer() };
        closure_6.config(obj2);
      }
      const $ZodSet = closure_6.$ZodSet;
      $ZodSet.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => processor.setProcessor(closure_0, arg0, arg1, arg2);
      _zod.min = () => {
        items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(fnResult._minSize.apply(items));
      };
      _zod.nonempty = (zodLazy) => _zod.check(fnResult._minSize(1, zodLazy));
      _zod.max = () => {
        items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(fnResult._maxSize.apply(items));
      };
      _zod.size = () => {
        items = [...HermesBuiltin.copyRestArgs()];
        return _zod.check(fnResult._size.apply(items));
      };
    });
    exports.ZodEnum = fnResult.$constructor("ZodEnum", (_zod, arg1) => {
      _decodeAsync = arg1;
      const $ZodEnum = closure_6.$ZodEnum;
      $ZodEnum.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.enumProcessor(closure_0, arg0, arg1, arg2);
      _zod.enum = arg1.entries;
      items = [..._zod._zod.values];
      _zod.options = items;
      const set = new Set(Object.keys(arg1.entries));
      _zod.extract = (arg0, zodLazy) => {
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
            let tmp6 = new.target;
            let tmp7 = new.target;
            let error = new Error("Key " + tmp2 + " not found in enum");
            throw error;
          }
        }
        const obj2 = {};
        const merged = Object.assign(closure_1);
        obj2.checks = [];
        const util = _zod(12158).util;
        const merged1 = Object.assign(util.normalizeParams(zodLazy));
        obj2.entries = obj;
        const zodEnum = new _decodeAsync.ZodEnum(obj2);
        return zodEnum;
      };
      _zod.exclude = (arg0, zodLazy) => {
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
        const obj2 = {};
        const merged1 = Object.assign(closure_1);
        obj2.checks = [];
        const util = _zod(12158).util;
        const merged2 = Object.assign(util.normalizeParams(zodLazy));
        obj2.entries = {};
        const zodEnum = new _decodeAsync.ZodEnum(obj2);
        return zodEnum;
      };
    });
    exports.ZodLiteral = fnResult.$constructor("ZodLiteral", (_zod, arg1) => {
      closure_0 = _zod;
      _decodeAsync = arg1;
      const $ZodLiteral = closure_6.$ZodLiteral;
      $ZodLiteral.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.literalProcessor(closure_0, arg0, arg1, arg2);
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
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.fileProcessor(closure_0, arg0, arg1, arg2);
      _zod.min = (minimum, zodLazy) => _zod.check(fnResult._minSize(minimum, zodLazy));
      _zod.max = (maximum, zodLazy) => _zod.check(fnResult._maxSize(maximum, zodLazy));
      _zod.mime = (items, zodLazy) => {
        let tmp3 = items;
        if (!Array.isArray(items)) {
          items = [];
          items[0] = items;
          tmp3 = items;
        }
        return _zod.check(fnResult._mime(tmp3, zodLazy));
      };
    });
    exports.ZodTransform = fnResult.$constructor("ZodTransform", (_zod, arg1) => {
      let constructor = _zod;
      _decodeAsync = arg1;
      if (!ZodEncodeError.globalConfig.memoizer) {
        const obj2 = { memoizer: ZodEncodeError.memoizer() };
        ZodEncodeError.config(obj2);
      }
      const $ZodTransform = ZodEncodeError.$ZodTransform;
      $ZodTransform.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.transformProcessor(closure_0, arg0, arg1, arg2);
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
              const util2 = inst(12158).util;
              issues.push(util2.issue(fatal, inst.value, closure_1));
            } else {
              if (fatal.fatal) {
                fatal.continue = false;
              }
              if (fatal.code == null) {
                fatal.code = "custom";
              }
              if (!("input" in fatal)) {
                fatal.input = inst.value;
              }
              if (fatal.inst == null) {
                fatal.inst = inst;
              }
              const issues1 = inst.issues;
              const util = inst(12158).util;
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
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.optionalProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodExactOptional = fnResult.$constructor("ZodExactOptional", (_zod, arg1) => {
      const $ZodExactOptional = closure_6.$ZodExactOptional;
      $ZodExactOptional.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.optionalProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodNullable = fnResult.$constructor("ZodNullable", (_zod, arg1) => {
      const $ZodNullable = closure_6.$ZodNullable;
      $ZodNullable.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.nullableProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodDefault = fnResult.$constructor("ZodDefault", (_zod, arg1) => {
      const $ZodDefault = closure_6.$ZodDefault;
      $ZodDefault.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.defaultProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
      _zod.removeDefault = _zod.unwrap;
    });
    exports.ZodPrefault = fnResult.$constructor("ZodPrefault", (_zod, arg1) => {
      const $ZodPrefault = closure_6.$ZodPrefault;
      $ZodPrefault.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.prefaultProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodNonOptional = fnResult.$constructor("ZodNonOptional", (_zod, arg1) => {
      const $ZodNonOptional = closure_6.$ZodNonOptional;
      $ZodNonOptional.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.nonoptionalProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodSuccess = fnResult.$constructor("ZodSuccess", (_zod, arg1) => {
      const $ZodSuccess = closure_6.$ZodSuccess;
      $ZodSuccess.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.successProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodCatch = fnResult.$constructor("ZodCatch", (_zod, arg1) => {
      const $ZodCatch = closure_6.$ZodCatch;
      $ZodCatch.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.catchProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
      _zod.removeCatch = _zod.unwrap;
    });
    exports.ZodNaN = fnResult.$constructor("ZodNaN", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodNaN = closure_6.$ZodNaN;
      $ZodNaN.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.nanProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodPipe = fnResult.$constructor("ZodPipe", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodPipe = closure_6.$ZodPipe;
      $ZodPipe.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.pipeProcessor(closure_0, arg0, arg1, arg2);
      ({ in: _zod.in, out: _zod.out } = arg1);
    });
    exports.ZodCodec = fnResult.$constructor("ZodCodec", (arg0, arg1) => {
      const ZodPipe = _decodeAsync.ZodPipe;
      ZodPipe.init(arg0, arg1);
      const $ZodCodec = fnResult.$ZodCodec;
      $ZodCodec.init(arg0, arg1);
    });
    exports.ZodPreprocess = fnResult.$constructor("ZodPreprocess", (arg0, arg1) => {
      const ZodPipe = _decodeAsync.ZodPipe;
      ZodPipe.init(arg0, arg1);
      const $ZodPreprocess = fnResult.$ZodPreprocess;
      $ZodPreprocess.init(arg0, arg1);
    });
    exports.ZodReadonly = fnResult.$constructor("ZodReadonly", (_zod, arg1) => {
      const $ZodReadonly = closure_6.$ZodReadonly;
      $ZodReadonly.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.readonlyProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodTemplateLiteral = fnResult.$constructor("ZodTemplateLiteral", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodTemplateLiteral = closure_6.$ZodTemplateLiteral;
      $ZodTemplateLiteral.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.templateLiteralProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodLazy = fnResult.$constructor("ZodLazy", (_zod, arg1) => {
      const $ZodLazy = closure_6.$ZodLazy;
      $ZodLazy.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.lazyProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => {
        const def = _zod._zod.def;
        return def.getter();
      };
    });
    exports.ZodPromise = fnResult.$constructor("ZodPromise", (_zod, arg1) => {
      closure_6.$ZodPromise.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.promiseProcessor(closure_0, arg0, arg1, arg2);
      _zod.unwrap = () => _zod._zod.def.innerType;
    });
    exports.ZodFunction = fnResult.$constructor("ZodFunction", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodFunction = closure_6.$ZodFunction;
      $ZodFunction.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.functionProcessor(closure_0, arg0, arg1, arg2);
    });
    exports.ZodCustom = fnResult.$constructor("ZodCustom", (_zod, arg1) => {
      closure_0 = _zod;
      const $ZodCustom = closure_6.$ZodCustom;
      $ZodCustom.init(_zod, arg1);
      const ZodType = _decodeAsync.ZodType;
      ZodType.init(_zod, arg1);
      _zod._zod.processJSONSchema = (arg0, arg1, arg2) => closure_7.customProcessor(closure_0, arg0, arg1, arg2);
    });
    ({ describe: exports.describe, meta: exports.meta } = fnResult);
    const obj9 = {
      properties(shape, zodLazy) {
            return this.check(fnResult._properties(shape, zodLazy));
          }
    };
    exports.ZodInstanceOf = fnResult.$constructor("ZodInstanceOf", (arg0, arg1) => {
      const ZodCustom = _decodeAsync.ZodCustom;
      ZodCustom.init(arg0, arg1);
    }, obj9);
    exports.stringbool = () => {
      items = [{ Codec: _decodeAsync.ZodCodec, Boolean: _decodeAsync.ZodBoolean, String: _decodeAsync.ZodString }, ...HermesBuiltin.copyRestArgs()];
      return fnResult._stringbool.apply(items);
    };
    (() => {
      let tmp = _decodeAsync;
      const ownPropertyNames = Object.getOwnPropertyNames(_decodeAsync);
      let num = 0;
      if (0 < ownPropertyNames.length) {
        const _Object = Object;
        const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(_decodeAsync, ownPropertyNames[num]);
        if (ownPropertyDescriptor) {
          if (ownPropertyDescriptor.get) {
            if (ownPropertyDescriptor.configurable) {
              try {
                value = ownPropertyDescriptor.get();
                if (undefined !== value) {
                  const _Object2 = Object;
                  const obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
                  Object.defineProperty(_decodeAsync, ownPropertyNames[num], obj);
                }
              } catch (err) {
              }
            }
          }
        }
        num = num + 1;
        tmp = _decodeAsync;
      }
      const frozen = Object.freeze(tmp);
    })();
  } else {
    let _Object2 = Object;
  }
} else {
  let _Object = Object;
}