// _runtime/metro/12260__.js
import mergeDefs from "../12203_mergeDefs.js";
import isValidBase64 from "../12204_isValidBase64.js";
import _mod12205 from "12205__.js";
import $output from "../12259__output.js";

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
    function _lte(value, message) {
      const obj = { check: "less_than" };
      const merged = Object.assign(closure_5.normalizeParams(message));
      obj.value = value;
      obj.inclusive = true;
      const ZodCheckLessThan = new closure_2.$ZodCheckLessThan(obj);
      return ZodCheckLessThan;
    }
    function _gte(value, message) {
      const obj = { check: "greater_than" };
      const merged = Object.assign(closure_5.normalizeParams(message));
      obj.value = value;
      obj.inclusive = true;
      const ZodCheckGreaterThan = new closure_2.$ZodCheckGreaterThan(obj);
      return ZodCheckGreaterThan;
    }
    const _Object3 = Object;
    function _lt(value, message) {
      const obj = { check: "less_than" };
      const merged = Object.assign(closure_5.normalizeParams(message));
      obj.value = value;
      obj.inclusive = false;
      const ZodCheckLessThan = new closure_2.$ZodCheckLessThan(obj);
      return ZodCheckLessThan;
    }
    function _gt(value, message) {
      const obj = { check: "greater_than" };
      const merged = Object.assign(closure_5.normalizeParams(message));
      obj.value = value;
      obj.inclusive = false;
      const ZodCheckGreaterThan = new closure_2.$ZodCheckGreaterThan(obj);
      return ZodCheckGreaterThan;
    }
    function _overwrite(tx) {
      const ZodCheckOverwrite = new closure_2.$ZodCheckOverwrite({ check: "overwrite", tx });
      return ZodCheckOverwrite;
    }
    function _check(check, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      const ZodCheck = new closure_2.$ZodCheck({ check: "custom" });
      ZodCheck._zod.check = check;
      return ZodCheck;
    }
    exports.TimePrecision = undefined;
    exports._string = function _string(ZodString, closure_0) {
      const merged = Object.assign(closure_5.normalizeParams(closure_0));
      return new ZodString({ type: "string" });
    };
    exports._coercedString = function _coercedString(ZodString, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodString({ type: "string", coerce: true });
    };
    exports._email = function _email(ZodEmail, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodEmail({ type: "string", format: "email", check: "string_format", abort: false });
    };
    exports._guid = function _guid(ZodGUID, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodGUID({ type: "string", format: "guid", check: "string_format", abort: false });
    };
    exports._uuid = function _uuid(ZodUUID, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodUUID({ type: "string", format: "uuid", check: "string_format", abort: false });
    };
    exports._uuidv4 = function _uuidv4(ZodUUID, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodUUID({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4" });
    };
    exports._uuidv6 = function _uuidv6(ZodUUID, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodUUID({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6" });
    };
    exports._uuidv7 = function _uuidv7(ZodUUID, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodUUID({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7" });
    };
    exports._url = function _url(ZodURL, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodURL({ type: "string", format: "url", check: "string_format", abort: false });
    };
    exports._emoji = function _emoji(ZodEmoji, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodEmoji({ type: "string", format: "emoji", check: "string_format", abort: false });
    };
    exports._nanoid = function _nanoid(ZodNanoID, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodNanoID({ type: "string", format: "nanoid", check: "string_format", abort: false });
    };
    exports._cuid = function _cuid(ZodCUID, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodCUID({ type: "string", format: "cuid", check: "string_format", abort: false });
    };
    exports._cuid2 = function _cuid2(ZodCUID2, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodCUID2({ type: "string", format: "cuid2", check: "string_format", abort: false });
    };
    exports._ulid = function _ulid(ZodULID, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodULID({ type: "string", format: "ulid", check: "string_format", abort: false });
    };
    exports._xid = function _xid(ZodXID, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodXID({ type: "string", format: "xid", check: "string_format", abort: false });
    };
    exports._ksuid = function _ksuid(ZodKSUID, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodKSUID({ type: "string", format: "ksuid", check: "string_format", abort: false });
    };
    exports._ipv4 = function _ipv4(ZodIPv4, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodIPv4({ type: "string", format: "ipv4", check: "string_format", abort: false });
    };
    exports._ipv6 = function _ipv6(ZodIPv6, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodIPv6({ type: "string", format: "ipv6", check: "string_format", abort: false });
    };
    exports._mac = function _mac(ZodMAC, delimiter) {
      const merged = Object.assign(closure_5.normalizeParams(delimiter));
      return new ZodMAC({ type: "string", format: "mac", check: "string_format", abort: false });
    };
    exports._cidrv4 = function _cidrv4(ZodCIDRv4, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodCIDRv4({ type: "string", format: "cidrv4", check: "string_format", abort: false });
    };
    exports._cidrv6 = function _cidrv6(ZodCIDRv6, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodCIDRv6({ type: "string", format: "cidrv6", check: "string_format", abort: false });
    };
    exports._base64 = function _base64(ZodBase64, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodBase64({ type: "string", format: "base64", check: "string_format", abort: false });
    };
    exports._base64url = function _base64url(ZodBase64URL, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodBase64URL({ type: "string", format: "base64url", check: "string_format", abort: false });
    };
    exports._e164 = function _e164(ZodE164, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodE164({ type: "string", format: "e164", check: "string_format", abort: false });
    };
    exports._jwt = function _jwt(ZodJWT, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodJWT({ type: "string", format: "jwt", check: "string_format", abort: false });
    };
    exports._isoDateTime = function _isoDateTime(ZodISODateTime, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodISODateTime({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null });
    };
    exports._isoDate = function _isoDate(ZodISODate, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodISODate({ type: "string", format: "date", check: "string_format" });
    };
    exports._isoTime = function _isoTime(ZodISOTime, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodISOTime({ type: "string", format: "time", check: "string_format", precision: null });
    };
    exports._isoDuration = function _isoDuration(ZodISODuration, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodISODuration({ type: "string", format: "duration", check: "string_format" });
    };
    exports._number = function _number(ZodNumber, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodNumber({ type: "number", checks: [] });
    };
    exports._coercedNumber = function _coercedNumber(ZodNumber, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodNumber({ type: "number", coerce: true, checks: [] });
    };
    exports._int = function _int(ZodNumberFormat, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodNumberFormat({ type: "number", check: "number_format", abort: false, format: "safeint" });
    };
    exports._float32 = function _float32(ZodNumberFormat, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodNumberFormat({ type: "number", check: "number_format", abort: false, format: "float32" });
    };
    exports._float64 = function _float64(ZodNumberFormat, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodNumberFormat({ type: "number", check: "number_format", abort: false, format: "float64" });
    };
    exports._int32 = function _int32(ZodNumberFormat, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodNumberFormat({ type: "number", check: "number_format", abort: false, format: "int32" });
    };
    exports._uint32 = function _uint32(ZodNumberFormat, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodNumberFormat({ type: "number", check: "number_format", abort: false, format: "uint32" });
    };
    exports._boolean = function _boolean(ZodBoolean, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodBoolean({ type: "boolean" });
    };
    exports._coercedBoolean = function _coercedBoolean(ZodBoolean, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodBoolean({ type: "boolean", coerce: true });
    };
    exports._bigint = function _bigint(ZodBigInt, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodBigInt({ type: "bigint" });
    };
    exports._coercedBigint = function _coercedBigint(ZodBigInt, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodBigInt({ type: "bigint", coerce: true });
    };
    exports._int64 = function _int64(ZodBigIntFormat, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodBigIntFormat({ type: "bigint", check: "bigint_format", abort: false, format: "int64" });
    };
    exports._uint64 = function _uint64(ZodBigIntFormat, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodBigIntFormat({ type: "bigint", check: "bigint_format", abort: false, format: "uint64" });
    };
    exports._symbol = function _symbol(ZodSymbol, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodSymbol({ type: "symbol" });
    };
    exports._undefined = function _undefined(arg0, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new arg0({ type: "undefined" });
    };
    exports._null = function _null(arg0, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new arg0({ type: "null" });
    };
    exports._any = function _any(ZodAny) {
      return new ZodAny({ type: "any" });
    };
    exports._unknown = function _unknown(ZodUnknown) {
      return new ZodUnknown({ type: "unknown" });
    };
    exports._never = function _never(ZodNever, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodNever({ type: "never" });
    };
    exports._void = function _void(arg0, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new arg0({ type: "void" });
    };
    exports._date = function _date(ZodDate, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodDate({ type: "date" });
    };
    exports._coercedDate = function _coercedDate(ZodDate, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodDate({ type: "date", coerce: true });
    };
    exports._nan = function _nan(ZodNaN, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodNaN({ type: "nan" });
    };
    exports._lt = _lt;
    exports._lte = _lte;
    exports._max = _lte;
    exports._lte = _lte;
    exports._max = _lte;
    exports._gt = _gt;
    exports._gte = _gte;
    exports._min = _gte;
    exports._gte = _gte;
    exports._min = _gte;
    exports._positive = function _positive(message) {
      const obj = { check: "greater_than" };
      const merged = Object.assign(closure_5.normalizeParams(message));
      obj.value = 0;
      obj.inclusive = false;
      const ZodCheckGreaterThan = new closure_2.$ZodCheckGreaterThan(obj);
      return ZodCheckGreaterThan;
    };
    exports._negative = function _negative(message) {
      const obj = { check: "less_than" };
      const merged = Object.assign(closure_5.normalizeParams(message));
      obj.value = 0;
      obj.inclusive = false;
      const ZodCheckLessThan = new closure_2.$ZodCheckLessThan(obj);
      return ZodCheckLessThan;
    };
    exports._nonpositive = function _nonpositive(message) {
      const obj = { check: "less_than" };
      const merged = Object.assign(closure_5.normalizeParams(message));
      obj.value = 0;
      obj.inclusive = true;
      const ZodCheckLessThan = new closure_2.$ZodCheckLessThan(obj);
      return ZodCheckLessThan;
    };
    exports._nonnegative = function _nonnegative(message) {
      const obj = { check: "greater_than" };
      const merged = Object.assign(closure_5.normalizeParams(message));
      obj.value = 0;
      obj.inclusive = true;
      const ZodCheckGreaterThan = new closure_2.$ZodCheckGreaterThan(obj);
      return ZodCheckGreaterThan;
    };
    exports._multipleOf = function _multipleOf(value, message) {
      const obj = { check: "multiple_of" };
      const merged = Object.assign(closure_5.normalizeParams(message));
      obj.value = value;
      const ZodCheckMultipleOf = new closure_2.$ZodCheckMultipleOf(obj);
      return ZodCheckMultipleOf;
    };
    exports._maxSize = function _maxSize(maximum, message) {
      const obj = { check: "max_size" };
      const merged = Object.assign(closure_5.normalizeParams(message));
      obj.maximum = maximum;
      const ZodCheckMaxSize = new closure_2.$ZodCheckMaxSize(obj);
      return ZodCheckMaxSize;
    };
    exports._minSize = function _minSize(minimum, message) {
      const obj = { check: "min_size" };
      const merged = Object.assign(closure_5.normalizeParams(message));
      obj.minimum = minimum;
      const ZodCheckMinSize = new closure_2.$ZodCheckMinSize(obj);
      return ZodCheckMinSize;
    };
    exports._size = function _size(size, message) {
      const obj = { check: "size_equals" };
      const merged = Object.assign(closure_5.normalizeParams(message));
      obj.size = size;
      const ZodCheckSizeEquals = new closure_2.$ZodCheckSizeEquals(obj);
      return ZodCheckSizeEquals;
    };
    exports._maxLength = function _maxLength(maximum, message) {
      const obj = { check: "max_length" };
      const merged = Object.assign(closure_5.normalizeParams(message));
      obj.maximum = maximum;
      const ZodCheckMaxLength = new closure_2.$ZodCheckMaxLength(obj);
      return ZodCheckMaxLength;
    };
    exports._minLength = function _minLength(minimum, message) {
      const obj = { check: "min_length" };
      const merged = Object.assign(closure_5.normalizeParams(message));
      obj.minimum = minimum;
      const ZodCheckMinLength = new closure_2.$ZodCheckMinLength(obj);
      return ZodCheckMinLength;
    };
    exports._length = function _length(arg0, message) {
      const obj = { check: "length_equals" };
      const merged = Object.assign(closure_5.normalizeParams(message));
      obj.length = arg0;
      const ZodCheckLengthEquals = new closure_2.$ZodCheckLengthEquals(obj);
      return ZodCheckLengthEquals;
    };
    exports._regex = function _regex(pattern, message) {
      const obj = { check: "string_format", format: "regex" };
      const merged = Object.assign(closure_5.normalizeParams(message));
      obj.pattern = pattern;
      const ZodCheckRegex = new closure_2.$ZodCheckRegex(obj);
      return ZodCheckRegex;
    };
    exports._lowercase = function _lowercase(message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      const ZodCheckLowerCase = new closure_2.$ZodCheckLowerCase({ check: "string_format", format: "lowercase" });
      return ZodCheckLowerCase;
    };
    exports._uppercase = function _uppercase(message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      const ZodCheckUpperCase = new closure_2.$ZodCheckUpperCase({ check: "string_format", format: "uppercase" });
      return ZodCheckUpperCase;
    };
    exports._includes = function _includes(includes, message) {
      const obj = { check: "string_format", format: "includes" };
      const merged = Object.assign(closure_5.normalizeParams(message));
      obj.includes = includes;
      const ZodCheckIncludes = new closure_2.$ZodCheckIncludes(obj);
      return ZodCheckIncludes;
    };
    exports._startsWith = function _startsWith(prefix, message) {
      const obj = { check: "string_format", format: "starts_with" };
      const merged = Object.assign(closure_5.normalizeParams(message));
      obj.prefix = prefix;
      const ZodCheckStartsWith = new closure_2.$ZodCheckStartsWith(obj);
      return ZodCheckStartsWith;
    };
    exports._endsWith = function _endsWith(suffix, message) {
      const obj = { check: "string_format", format: "ends_with" };
      const merged = Object.assign(closure_5.normalizeParams(message));
      obj.suffix = suffix;
      const ZodCheckEndsWith = new closure_2.$ZodCheckEndsWith(obj);
      return ZodCheckEndsWith;
    };
    exports._property = function _property(property, schema, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      const ZodCheckProperty = new closure_2.$ZodCheckProperty({ check: "property", property, schema });
      return ZodCheckProperty;
    };
    exports._mime = function _mime(items, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      const ZodCheckMimeType = new closure_2.$ZodCheckMimeType({ check: "mime_type", mime: items });
      return ZodCheckMimeType;
    };
    exports._overwrite = _overwrite;
    exports._normalize = function _normalize(arg0) {
      closure_0 = arg0;
      const ZodCheckOverwrite = new closure_2.$ZodCheckOverwrite({ check: "overwrite", tx: (str) => str.normalize(closure_0) });
      return ZodCheckOverwrite;
    };
    exports._trim = function _trim() {
      const ZodCheckOverwrite = new closure_2.$ZodCheckOverwrite({ check: "overwrite", tx: (str) => str.trim() });
      return ZodCheckOverwrite;
    };
    exports._toLowerCase = function _toLowerCase() {
      const ZodCheckOverwrite = new closure_2.$ZodCheckOverwrite({ check: "overwrite", tx: (str) => str.toLowerCase() });
      return ZodCheckOverwrite;
    };
    exports._toUpperCase = function _toUpperCase() {
      const ZodCheckOverwrite = new closure_2.$ZodCheckOverwrite({ check: "overwrite", tx: (str) => str.toUpperCase() });
      return ZodCheckOverwrite;
    };
    exports._slugify = function _slugify() {
      const ZodCheckOverwrite = new closure_2.$ZodCheckOverwrite({ check: "overwrite", tx: (arg0) => closure_5.slugify(arg0) });
      return ZodCheckOverwrite;
    };
    exports._array = function _array(ZodArray, closure_0, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodArray({ type: "array", element: closure_0 });
    };
    exports._union = function _union(arg0, options, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new arg0({ type: "union", options });
    };
    exports._xor = function _xor(arg0, options, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new arg0({ type: "union", options, inclusive: false });
    };
    exports._discriminatedUnion = function _discriminatedUnion(arg0, discriminator, options, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new arg0({ type: "union", options, discriminator });
    };
    exports._intersection = function _intersection(arg0, left, right) {
      return new arg0({ type: "intersection", left, right });
    };
    exports._tuple = function _tuple(arg0, items, message, message) {
      let tmp2 = message;
      if (message instanceof ZodType.$ZodType) {
        tmp2 = message;
      }
      const obj = { type: "tuple", items, rest: null };
      let tmp3 = null;
      if (message instanceof ZodType.$ZodType) {
        tmp3 = message;
      }
      obj[2] = tmp3;
      const merged = Object.assign(closure_5.normalizeParams(tmp2));
      return new arg0(obj);
    };
    exports._record = function _record(arg0, keyType, valueType, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new arg0({ type: "record", keyType, valueType });
    };
    exports._map = function _map(arg0, keyType, valueType, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new arg0({ type: "map", keyType, valueType });
    };
    exports._set = function _set(arg0, valueType, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new arg0({ type: "set", valueType });
    };
    exports._enum = function _enum(arg0, arr, message) {
      let fromEntriesResult = arr;
      if (Array.isArray(arr)) {
        const _Object = Object;
        fromEntriesResult = Object.fromEntries(arr.map((item, index) => {
          const items = [item, item];
          return items;
        }));
      }
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new arg0({ type: "enum", entries: fromEntriesResult });
    };
    exports._nativeEnum = function _nativeEnum(arg0, entries, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new arg0({ type: "enum", entries });
    };
    exports._literal = function _literal(arg0, arg1, message) {
      let tmp = arg1;
      if (!Array.isArray(arg1)) {
        const items = [arg1];
        tmp = items;
      }
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new arg0({ type: "literal", values: tmp });
    };
    exports._file = function _file(ZodFile, dependencyMap) {
      const merged = Object.assign(closure_5.normalizeParams(dependencyMap));
      return new ZodFile({ type: "file" });
    };
    exports._transform = function _transform(arg0, transform) {
      return new arg0({ type: "transform", transform });
    };
    exports._optional = function _optional(arg0, innerType) {
      return new arg0({ type: "optional", innerType });
    };
    exports._nullable = function _nullable(arg0, innerType) {
      return new arg0({ type: "nullable", innerType });
    };
    exports._default = function _default(arg0, innerType) {
      closure_0 = arg2;
      const obj = { type: "default", innerType };
      Object.defineProperty(obj, "defaultValue", {
        get: () => {
          if (typeof callback === "function") {
            let shallowCloneResult = callback();
          } else {
            shallowCloneResult = closure_1_5.shallowClone(callback);
          }
          return shallowCloneResult;
        },
        set: undefined
      });
      return new arg0(obj);
    };
    exports._nonoptional = function _nonoptional(arg0, innerType, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new arg0({ type: "nonoptional", innerType });
    };
    exports._success = function _success(arg0, innerType) {
      return new arg0({ type: "success", innerType });
    };
    exports._catch = function _catch(arg0, innerType, fn) {
      closure_0 = fn;
      const obj = { type: "catch", innerType, catchValue: null };
      if (typeof fn !== "function") {
        fn = () => closure_0;
      }
      obj[2] = fn;
      return new arg0(obj);
    };
    exports._pipe = function _pipe(arg0, arg1, out) {
      return new arg0({ type: "pipe", in: arg1, out });
    };
    exports._readonly = function _readonly(arg0, innerType) {
      return new arg0({ type: "readonly", innerType });
    };
    exports._templateLiteral = function _templateLiteral(arg0, parts, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new arg0({ type: "template_literal", parts });
    };
    exports._lazy = function _lazy(arg0, getter) {
      return new arg0({ type: "lazy", getter });
    };
    exports._promise = function _promise(arg0, innerType) {
      return new arg0({ type: "promise", innerType });
    };
    exports._custom = function _custom(ZodCustom, fn, message) {
      const normalizeParamsResult = closure_5.normalizeParams(message);
      if (normalizeParamsResult.abort == null) {
        normalizeParamsResult.abort = true;
      }
      const merged = Object.assign(normalizeParamsResult);
      return new ZodCustom({ type: "custom", check: "custom", fn });
    };
    exports._refine = function _refine(ZodCustom, fn, message) {
      const merged = Object.assign(closure_5.normalizeParams(message));
      return new ZodCustom({ type: "custom", check: "custom", fn });
    };
    exports._superRefine = function _superRefine(arg0) {
      closure_0 = arg0;
      const merged = Object.assign(closure_5.normalizeParams(undefined));
      const ZodCheck = new closure_2.$ZodCheck({ check: "custom" });
      ZodCheck._zod.check = (value) => {
        const callback = value;
        value.addIssue = (fatal) => {
          if (typeof fatal === "string") {
            const issues = value.issues;
            issues.push(closure_2_5.issue(fatal, value.value, ZodCheck._zod.def));
          } else {
            if (fatal.fatal) {
              fatal.continue = false;
            }
            if (fatal.code == null) {
              fatal.code = "custom";
            }
            if (fatal.input == null) {
              fatal.input = value.value;
            }
            if (fatal.inst == null) {
              fatal.inst = ZodCheck;
            }
            if (fatal.continue == null) {
              fatal.continue = !ZodCheck._zod.def.abort;
            }
            const issues1 = value.issues;
            issues1.push(closure_2_5.issue(fatal));
          }
        };
        return callback(value.value, value);
      };
      return ZodCheck;
    };
    exports._check = _check;
    exports.describe = function describe(arg0) {
      closure_0 = arg0;
      const ZodCheck = new closure_2.$ZodCheck({ check: "describe" });
      const items = [
        (arg0) => {
          const globalRegistry = closure_1_3.globalRegistry;
          let obj = globalRegistry.get(arg0);
          if (obj == null) {
            obj = {};
          }
          const globalRegistry2 = closure_1_3.globalRegistry;
          obj = {};
          const merged = Object.assign(obj);
          obj.description = closure_0;
          globalRegistry2.add(arg0, obj);
        }
      ];
      ZodCheck._zod.onattach = items;
      ZodCheck._zod.check = () => {

      };
      return ZodCheck;
    };
    exports.meta = function meta(arg0) {
      closure_0 = arg0;
      const ZodCheck = new closure_2.$ZodCheck({ check: "meta" });
      const items = [
        (arg0) => {
          const globalRegistry = closure_1_3.globalRegistry;
          let obj = globalRegistry.get(arg0);
          if (obj == null) {
            obj = {};
          }
          const globalRegistry2 = closure_1_3.globalRegistry;
          obj = {};
          const merged = Object.assign(obj);
          const merged1 = Object.assign(closure_0);
          globalRegistry2.add(arg0, obj);
        }
      ];
      ZodCheck._zod.onattach = items;
      ZodCheck._zod.check = () => {

      };
      return ZodCheck;
    };
    exports._stringbool = function _stringbool(Codec, message) {
      const normalizeParamsResult = ZodCodec.normalizeParams(message);
      self2 = normalizeParamsResult;
      let truthy = normalizeParamsResult.truthy;
      if (truthy == null) {
        truthy = ["true", "1", "yes", "on", "y", "enabled"];
      }
      let mapped = truthy;
      let falsy = normalizeParamsResult.falsy;
      if (falsy == null) {
        falsy = ["false", "0", "no", "off", "n", "disabled"];
      }
      let mapped1 = falsy;
      let tmp2 = falsy;
      let tmp3 = truthy;
      if ("sensitive" !== normalizeParamsResult.case) {
        mapped = truthy.map((item, index) => {
          let formatted = item;
          if (typeof item === "string") {
            formatted = item.toLowerCase();
          }
          return formatted;
        });
        mapped1 = falsy.map((item, index) => {
          let formatted = item;
          if (typeof item === "string") {
            formatted = item.toLowerCase();
          }
          return formatted;
        });
        tmp2 = mapped1;
        tmp3 = mapped;
      }
      const set = new Set(tmp3);
      const set1 = new Set(tmp2);
      let $ZodCodec = Codec.Codec;
      if ($ZodCodec == null) {
        $ZodCodec = set1.$ZodCodec;
      }
      let $ZodBoolean = Codec.Boolean;
      if ($ZodBoolean == null) {
        $ZodBoolean = set1.$ZodBoolean;
      }
      let $ZodString = Codec.String;
      if ($ZodString == null) {
        $ZodString = set1.$ZodString;
      }
      let obj = { type: "string", error: normalizeParamsResult.error };
      const ZodString = new $ZodString(obj);
      obj = { type: "boolean", error: normalizeParamsResult.error };
      const ZodBoolean = new $ZodBoolean(obj);
      obj = {
        type: "pipe",
        in: ZodString,
        out: ZodBoolean,
        transform(str, issues) {
          let formatted = str;
          if ("sensitive" !== normalizeParamsResult.case) {
            formatted = str.toLowerCase();
          }
          let hasItem = set.has(formatted);
          if (!hasItem) {
            hasItem = set1.has(formatted);
            let obj = !hasItem;
            if (!hasItem) {
              issues = issues.issues;
              obj = { code: "invalid_value", expected: "stringbool", values: null, input: null, inst: null, continue: false };
              const items = [];
              HermesBuiltin.arraySpread(set1, HermesBuiltin.arraySpread(set, 0));
              obj[2] = items;
              obj[3] = issues.value;
              obj[4] = ZodCodec;
              issues.push(obj);
              obj = {};
            }
            hasItem = obj;
          }
          return hasItem;
        },
        reverseTransform(value, issues) {
          if (true === value) {
            let tmp2 = mapped[0] || "true";
          } else {
            tmp2 = mapped1[0] || "false";
          }
          return tmp2;
        },
        error: normalizeParamsResult.error
      };
      ZodCodec = new $ZodCodec(obj);
      return ZodCodec;
    };
    exports._stringFormat = function _stringFormat(ZodCustomStringFormat, combined, hex, enc) {
      closure_0 = hex;
      let obj = enc;
      if (enc === undefined) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(closure_5.normalizeParams(obj));
      obj.check = "string_format";
      obj.type = "string";
      obj.format = combined;
      let fn = hex;
      if (typeof hex !== "function") {
        fn = (arg0) => hex.test(arg0);
      }
      obj.fn = fn;
      const merged1 = Object.assign(closure_5.normalizeParams(obj));
      if (hex instanceof RegExp) {
        obj.pattern = hex;
      }
      const normalizeParamsResult = closure_5.normalizeParams(obj);
      return new ZodCustomStringFormat(obj);
    };
    let closure_2 = fn(_mod12205);
    let closure_3 = fn($output);
    let closure_4 = fn(isValidBase64);
    let closure_5 = fn(mergeDefs);
    exports.TimePrecision = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 };
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}