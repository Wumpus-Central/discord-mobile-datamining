// _runtime/metro/12427__.js
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
    function _lte(value, enc) {
      const obj = { check: "less_than" };
      const merged = Object.assign(closure_5.normalizeParams(enc));
      obj.value = value;
      obj.inclusive = true;
      const ZodCheckLessThan = new closure_2.$ZodCheckLessThan(obj);
      return ZodCheckLessThan;
    }
    function _gte(value, enc) {
      const obj = { check: "greater_than" };
      const merged = Object.assign(closure_5.normalizeParams(enc));
      obj.value = value;
      obj.inclusive = true;
      const ZodCheckGreaterThan = new closure_2.$ZodCheckGreaterThan(obj);
      return ZodCheckGreaterThan;
    }
    const _Object3 = Object;
    function _lt(value, enc) {
      const obj = { check: "less_than" };
      const merged = Object.assign(closure_5.normalizeParams(enc));
      obj.value = value;
      obj.inclusive = false;
      const ZodCheckLessThan = new closure_2.$ZodCheckLessThan(obj);
      return ZodCheckLessThan;
    }
    function _gt(value, enc) {
      const obj = { check: "greater_than" };
      const merged = Object.assign(closure_5.normalizeParams(enc));
      obj.value = value;
      obj.inclusive = false;
      const ZodCheckGreaterThan = new closure_2.$ZodCheckGreaterThan(obj);
      return ZodCheckGreaterThan;
    }
    function _overwrite(tx) {
      const ZodCheckOverwrite = new closure_2.$ZodCheckOverwrite({ check: "overwrite", tx });
      return ZodCheckOverwrite;
    }
    function _check(check, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      const ZodCheck = new closure_2.$ZodCheck({ check: "custom" });
      ZodCheck._zod.check = check;
      return ZodCheck;
    }
    exports.TimePrecision = undefined;
    exports._string = function _string(ZodString, closure_0) {
      const merged = Object.assign(closure_5.normalizeParams(closure_0));
      return new ZodString({ type: "string" });
    };
    exports._coercedString = function _coercedString(ZodString, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodString({ type: "string", coerce: true });
    };
    exports._email = function _email(ZodEmail, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodEmail({ type: "string", format: "email", check: "string_format", abort: false });
    };
    exports._guid = function _guid(ZodGUID, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodGUID({ type: "string", format: "guid", check: "string_format", abort: false });
    };
    exports._uuid = function _uuid(ZodUUID, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodUUID({ type: "string", format: "uuid", check: "string_format", abort: false });
    };
    exports._uuidv4 = function _uuidv4(ZodUUID, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodUUID({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4" });
    };
    exports._uuidv6 = function _uuidv6(ZodUUID, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodUUID({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6" });
    };
    exports._uuidv7 = function _uuidv7(ZodUUID, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodUUID({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7" });
    };
    exports._url = function _url(ZodURL, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodURL({ type: "string", format: "url", check: "string_format", abort: false });
    };
    exports._emoji = function _emoji(ZodEmoji, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodEmoji({ type: "string", format: "emoji", check: "string_format", abort: false });
    };
    exports._nanoid = function _nanoid(ZodNanoID, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodNanoID({ type: "string", format: "nanoid", check: "string_format", abort: false });
    };
    exports._cuid = function _cuid(ZodCUID, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodCUID({ type: "string", format: "cuid", check: "string_format", abort: false });
    };
    exports._cuid2 = function _cuid2(ZodCUID2, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodCUID2({ type: "string", format: "cuid2", check: "string_format", abort: false });
    };
    exports._ulid = function _ulid(ZodULID, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodULID({ type: "string", format: "ulid", check: "string_format", abort: false });
    };
    exports._xid = function _xid(ZodXID, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodXID({ type: "string", format: "xid", check: "string_format", abort: false });
    };
    exports._ksuid = function _ksuid(ZodKSUID, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodKSUID({ type: "string", format: "ksuid", check: "string_format", abort: false });
    };
    exports._ipv4 = function _ipv4(ZodIPv4, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodIPv4({ type: "string", format: "ipv4", check: "string_format", abort: false });
    };
    exports._ipv6 = function _ipv6(ZodIPv6, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodIPv6({ type: "string", format: "ipv6", check: "string_format", abort: false });
    };
    exports._mac = function _mac(ZodMAC, delimiter) {
      const merged = Object.assign(closure_5.normalizeParams(delimiter));
      return new ZodMAC({ type: "string", format: "mac", check: "string_format", abort: false });
    };
    exports._cidrv4 = function _cidrv4(ZodCIDRv4, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodCIDRv4({ type: "string", format: "cidrv4", check: "string_format", abort: false });
    };
    exports._cidrv6 = function _cidrv6(ZodCIDRv6, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodCIDRv6({ type: "string", format: "cidrv6", check: "string_format", abort: false });
    };
    exports._base64 = function _base64(ZodBase64, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodBase64({ type: "string", format: "base64", check: "string_format", abort: false });
    };
    exports._base64url = function _base64url(ZodBase64URL, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodBase64URL({ type: "string", format: "base64url", check: "string_format", abort: false });
    };
    exports._e164 = function _e164(ZodE164, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodE164({ type: "string", format: "e164", check: "string_format", abort: false });
    };
    exports._jwt = function _jwt(ZodJWT, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodJWT({ type: "string", format: "jwt", check: "string_format", abort: false });
    };
    exports._isoDateTime = function _isoDateTime(ZodISODateTime, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodISODateTime({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null });
    };
    exports._isoDate = function _isoDate(ZodISODate, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodISODate({ type: "string", format: "date", check: "string_format" });
    };
    exports._isoTime = function _isoTime(ZodISOTime, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodISOTime({ type: "string", format: "time", check: "string_format", precision: null });
    };
    exports._isoDuration = function _isoDuration(ZodISODuration, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodISODuration({ type: "string", format: "duration", check: "string_format" });
    };
    exports._number = function _number(ZodNumber, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodNumber({ type: "number", checks: [] });
    };
    exports._coercedNumber = function _coercedNumber(ZodNumber, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodNumber({ type: "number", coerce: true, checks: [] });
    };
    exports._int = function _int(ZodNumberFormat, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodNumberFormat({ type: "number", check: "number_format", abort: false, format: "safeint" });
    };
    exports._float32 = function _float32(ZodNumberFormat, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodNumberFormat({ type: "number", check: "number_format", abort: false, format: "float32" });
    };
    exports._float64 = function _float64(ZodNumberFormat, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodNumberFormat({ type: "number", check: "number_format", abort: false, format: "float64" });
    };
    exports._int32 = function _int32(ZodNumberFormat, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodNumberFormat({ type: "number", check: "number_format", abort: false, format: "int32" });
    };
    exports._uint32 = function _uint32(ZodNumberFormat, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodNumberFormat({ type: "number", check: "number_format", abort: false, format: "uint32" });
    };
    exports._boolean = function _boolean(ZodBoolean, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodBoolean({ type: "boolean" });
    };
    exports._coercedBoolean = function _coercedBoolean(ZodBoolean, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodBoolean({ type: "boolean", coerce: true });
    };
    exports._bigint = function _bigint(ZodBigInt, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodBigInt({ type: "bigint" });
    };
    exports._coercedBigint = function _coercedBigint(ZodBigInt, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodBigInt({ type: "bigint", coerce: true });
    };
    exports._int64 = function _int64(ZodBigIntFormat, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodBigIntFormat({ type: "bigint", check: "bigint_format", abort: false, format: "int64" });
    };
    exports._uint64 = function _uint64(ZodBigIntFormat, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodBigIntFormat({ type: "bigint", check: "bigint_format", abort: false, format: "uint64" });
    };
    exports._symbol = function _symbol(ZodSymbol, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodSymbol({ type: "symbol" });
    };
    exports._undefined = function _undefined(arg0, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new arg0({ type: "undefined" });
    };
    exports._null = function _null(arg0, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new arg0({ type: "null" });
    };
    exports._any = function _any(ZodAny) {
      return new ZodAny({ type: "any" });
    };
    exports._unknown = function _unknown(ZodUnknown) {
      return new ZodUnknown({ type: "unknown" });
    };
    exports._never = function _never(ZodNever, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodNever({ type: "never" });
    };
    exports._void = function _void(arg0, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new arg0({ type: "void" });
    };
    exports._date = function _date(ZodDate, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodDate({ type: "date" });
    };
    exports._coercedDate = function _coercedDate(ZodDate, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodDate({ type: "date", coerce: true });
    };
    exports._nan = function _nan(ZodNaN, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
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
    exports._positive = function _positive(enc) {
      const obj = { check: "greater_than" };
      const merged = Object.assign(closure_5.normalizeParams(enc));
      obj.value = 0;
      obj.inclusive = false;
      const ZodCheckGreaterThan = new closure_2.$ZodCheckGreaterThan(obj);
      return ZodCheckGreaterThan;
    };
    exports._negative = function _negative(enc) {
      const obj = { check: "less_than" };
      const merged = Object.assign(closure_5.normalizeParams(enc));
      obj.value = 0;
      obj.inclusive = false;
      const ZodCheckLessThan = new closure_2.$ZodCheckLessThan(obj);
      return ZodCheckLessThan;
    };
    exports._nonpositive = function _nonpositive(enc) {
      const obj = { check: "less_than" };
      const merged = Object.assign(closure_5.normalizeParams(enc));
      obj.value = 0;
      obj.inclusive = true;
      const ZodCheckLessThan = new closure_2.$ZodCheckLessThan(obj);
      return ZodCheckLessThan;
    };
    exports._nonnegative = function _nonnegative(enc) {
      const obj = { check: "greater_than" };
      const merged = Object.assign(closure_5.normalizeParams(enc));
      obj.value = 0;
      obj.inclusive = true;
      const ZodCheckGreaterThan = new closure_2.$ZodCheckGreaterThan(obj);
      return ZodCheckGreaterThan;
    };
    exports._multipleOf = function _multipleOf(value, enc) {
      const obj = { check: "multiple_of" };
      const merged = Object.assign(closure_5.normalizeParams(enc));
      obj.value = value;
      const ZodCheckMultipleOf = new closure_2.$ZodCheckMultipleOf(obj);
      return ZodCheckMultipleOf;
    };
    exports._maxSize = function _maxSize(maximum, enc) {
      const obj = { check: "max_size" };
      const merged = Object.assign(closure_5.normalizeParams(enc));
      obj.maximum = maximum;
      const ZodCheckMaxSize = new closure_2.$ZodCheckMaxSize(obj);
      return ZodCheckMaxSize;
    };
    exports._minSize = function _minSize(minimum, enc) {
      const obj = { check: "min_size" };
      const merged = Object.assign(closure_5.normalizeParams(enc));
      obj.minimum = minimum;
      const ZodCheckMinSize = new closure_2.$ZodCheckMinSize(obj);
      return ZodCheckMinSize;
    };
    exports._size = function _size(size, enc) {
      const obj = { check: "size_equals" };
      const merged = Object.assign(closure_5.normalizeParams(enc));
      obj.size = size;
      const ZodCheckSizeEquals = new closure_2.$ZodCheckSizeEquals(obj);
      return ZodCheckSizeEquals;
    };
    exports._maxLength = function _maxLength(maximum, enc) {
      const obj = { check: "max_length" };
      const merged = Object.assign(closure_5.normalizeParams(enc));
      obj.maximum = maximum;
      const ZodCheckMaxLength = new closure_2.$ZodCheckMaxLength(obj);
      return ZodCheckMaxLength;
    };
    exports._minLength = function _minLength(minimum, enc) {
      const obj = { check: "min_length" };
      const merged = Object.assign(closure_5.normalizeParams(enc));
      obj.minimum = minimum;
      const ZodCheckMinLength = new closure_2.$ZodCheckMinLength(obj);
      return ZodCheckMinLength;
    };
    exports._length = function _length(arg0, enc) {
      const obj = { check: "length_equals" };
      const merged = Object.assign(closure_5.normalizeParams(enc));
      obj.length = arg0;
      const ZodCheckLengthEquals = new closure_2.$ZodCheckLengthEquals(obj);
      return ZodCheckLengthEquals;
    };
    exports._regex = function _regex(pattern, enc) {
      const obj = { check: "string_format", format: "regex" };
      const merged = Object.assign(closure_5.normalizeParams(enc));
      obj.pattern = pattern;
      const ZodCheckRegex = new closure_2.$ZodCheckRegex(obj);
      return ZodCheckRegex;
    };
    exports._lowercase = function _lowercase(enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      const ZodCheckLowerCase = new closure_2.$ZodCheckLowerCase({ check: "string_format", format: "lowercase" });
      return ZodCheckLowerCase;
    };
    exports._uppercase = function _uppercase(enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      const ZodCheckUpperCase = new closure_2.$ZodCheckUpperCase({ check: "string_format", format: "uppercase" });
      return ZodCheckUpperCase;
    };
    exports._includes = function _includes(includes, enc) {
      const obj = { check: "string_format", format: "includes" };
      const merged = Object.assign(closure_5.normalizeParams(enc));
      obj.includes = includes;
      const ZodCheckIncludes = new closure_2.$ZodCheckIncludes(obj);
      return ZodCheckIncludes;
    };
    exports._startsWith = function _startsWith(prefix, enc) {
      const obj = { check: "string_format", format: "starts_with" };
      const merged = Object.assign(closure_5.normalizeParams(enc));
      obj.prefix = prefix;
      const ZodCheckStartsWith = new closure_2.$ZodCheckStartsWith(obj);
      return ZodCheckStartsWith;
    };
    exports._endsWith = function _endsWith(suffix, enc) {
      const obj = { check: "string_format", format: "ends_with" };
      const merged = Object.assign(closure_5.normalizeParams(enc));
      obj.suffix = suffix;
      const ZodCheckEndsWith = new closure_2.$ZodCheckEndsWith(obj);
      return ZodCheckEndsWith;
    };
    exports._property = function _property(property, schema, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      const ZodCheckProperty = new closure_2.$ZodCheckProperty({ check: "property", property, schema });
      return ZodCheckProperty;
    };
    exports._mime = function _mime(mime, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      const ZodCheckMimeType = new closure_2.$ZodCheckMimeType({ check: "mime_type", mime });
      return ZodCheckMimeType;
    };
    exports._overwrite = _overwrite;
    exports._normalize = function _normalize(arg0) {
      let closure_0 = arg0;
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
    exports._array = function _array(ZodArray, closure_0, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodArray({ type: "array", element: closure_0 });
    };
    exports._union = function _union(arg0, options, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new arg0({ type: "union", options });
    };
    exports._xor = function _xor(arg0, options, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new arg0({ type: "union", options, inclusive: false });
    };
    exports._discriminatedUnion = function _discriminatedUnion(arg0, discriminator, options, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new arg0({ type: "union", options, discriminator });
    };
    exports._intersection = function _intersection(arg0, left, right) {
      return new arg0({ type: "intersection", left, right });
    };
    exports._tuple = function _tuple(arg0, items, arg2, enc) {
      let tmp2 = arg2;
      if (arg2 instanceof ZodType.$ZodType) {
        tmp2 = enc;
      }
      const obj = { type: "tuple", items, rest: null };
      let tmp3 = null;
      if (arg2 instanceof ZodType.$ZodType) {
        tmp3 = arg2;
      }
      obj[2] = tmp3;
      const merged = Object.assign(closure_5.normalizeParams(tmp2));
      return new arg0(obj);
    };
    exports._record = function _record(arg0, keyType, valueType, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new arg0({ type: "record", keyType, valueType });
    };
    exports._map = function _map(arg0, keyType, valueType, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new arg0({ type: "map", keyType, valueType });
    };
    exports._set = function _set(arg0, valueType, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new arg0({ type: "set", valueType });
    };
    exports._enum = function _enum(arg0, arr, enc) {
      let fromEntriesResult = arr;
      if (Array.isArray(arr)) {
        const _Object = Object;
        fromEntriesResult = Object.fromEntries(arr.map((arg0) => {
          const items = [arg0, arg0];
          return items;
        }));
      }
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new arg0({ type: "enum", entries: fromEntriesResult });
    };
    exports._nativeEnum = function _nativeEnum(arg0, entries, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new arg0({ type: "enum", entries });
    };
    exports._literal = function _literal(arg0, arg1, enc) {
      let tmp = arg1;
      if (!Array.isArray(arg1)) {
        const items = [arg1];
        tmp = items;
      }
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new arg0({ type: "literal", values: tmp });
    };
    exports._file = function _file(ZodFile, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
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
      let closure_0 = arg2;
      const obj = { type: "default", innerType };
      Object.defineProperty(obj, "defaultValue", {
        get: () => {
          if (typeof closure_0 === "function") {
            let shallowCloneResult = tmp();
          } else {
            shallowCloneResult = outer1_5.shallowClone(tmp);
          }
          return shallowCloneResult;
        },
        set: undefined
      });
      return new arg0(obj);
    };
    exports._nonoptional = function _nonoptional(arg0, innerType, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new arg0({ type: "nonoptional", innerType });
    };
    exports._success = function _success(arg0, innerType) {
      return new arg0({ type: "success", innerType });
    };
    exports._catch = function _catch(arg0, innerType, fn) {
      let closure_0 = fn;
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
    exports._templateLiteral = function _templateLiteral(arg0, parts, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new arg0({ type: "template_literal", parts });
    };
    exports._lazy = function _lazy(arg0, getter) {
      return new arg0({ type: "lazy", getter });
    };
    exports._promise = function _promise(arg0, innerType) {
      return new arg0({ type: "promise", innerType });
    };
    exports._custom = function _custom(ZodCustom, fn, enc) {
      const normalizeParamsResult = closure_5.normalizeParams(enc);
      if (normalizeParamsResult.abort == null) {
        normalizeParamsResult.abort = true;
      }
      const merged = Object.assign(normalizeParamsResult);
      return new ZodCustom({ type: "custom", check: "custom", fn });
    };
    exports._refine = function _refine(ZodCustom, fn, enc) {
      const merged = Object.assign(closure_5.normalizeParams(enc));
      return new ZodCustom({ type: "custom", check: "custom", fn });
    };
    exports._superRefine = function _superRefine(arg0) {
      let closure_0 = arg0;
      const merged = Object.assign(closure_5.normalizeParams(undefined));
      const ZodCheck = new closure_2.$ZodCheck({ check: "custom" });
      ZodCheck._zod.check = (value) => {
        const callback = value;
        value.addIssue = (str) => {
          if (typeof str === "string") {
            const issues = value.issues;
            issues.push(outer2_5.issue(str, value.value, outer1_1._zod.def));
          } else {
            if (str.fatal) {
              str.continue = false;
            }
            if (str.code == null) {
              str.code = "custom";
            }
            if (str.input == null) {
              str.input = value.value;
            }
            if (str.inst == null) {
              str.inst = outer1_1;
            }
            if (str.continue == null) {
              str.continue = !outer1_1._zod.def.abort;
            }
            const issues1 = value.issues;
            issues1.push(outer2_5.issue(str));
          }
        };
        return callback(value.value, value);
      };
      return ZodCheck;
    };
    exports._check = _check;
    exports.describe = function describe(arg0) {
      let closure_0 = arg0;
      const ZodCheck = new closure_2.$ZodCheck({ check: "describe" });
      const items = [
        (arg0) => {
          const globalRegistry = outer1_3.globalRegistry;
          let obj = globalRegistry.get(arg0);
          if (obj == null) {
            obj = {};
          }
          const globalRegistry2 = outer1_3.globalRegistry;
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
      let closure_0 = arg0;
      const ZodCheck = new closure_2.$ZodCheck({ check: "meta" });
      const items = [
        (arg0) => {
          const globalRegistry = outer1_3.globalRegistry;
          let obj = globalRegistry.get(arg0);
          if (obj == null) {
            obj = {};
          }
          const globalRegistry2 = outer1_3.globalRegistry;
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
    exports._stringbool = function _stringbool(Codec, enc) {
      const normalizeParamsResult = ZodCodec.normalizeParams(enc);
      const self2 = normalizeParamsResult;
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
        mapped = truthy.map((str) => {
          let formatted = str;
          if (typeof str === "string") {
            formatted = str.toLowerCase();
          }
          return formatted;
        });
        mapped1 = falsy.map((str) => {
          let formatted = str;
          if (typeof str === "string") {
            formatted = str.toLowerCase();
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
              HermesBuiltin.arraySpread(tmp4, HermesBuiltin.arraySpread(tmp2, 0));
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
            const tmp4 = mapped[0] || "true";
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
      let closure_0 = hex;
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
    let closure_2 = fn(require("module_12372"));
    let closure_3 = fn(require("$output"));
    let closure_4 = fn(require("isValidBase64"));
    let closure_5 = fn(require("mergeDefs"));
    exports.TimePrecision = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 };
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}