// === Module 12235: ? ===

// Module 12235
import _mod12160 from "module_12160" /* 12160 */;
import _validateAsync from "_validateAsync" /* 12163 */;
import _mod12164 from "module_12164" /* 12164 */;
import $output from "$output" /* 12233 */;

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
    function _lte(value, zodLazy) {
      const obj = { check: "less_than" };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      obj.value = value;
      obj.inclusive = true;
      const ZodCheckLessThan = new closure_3.$ZodCheckLessThan(obj);
      return ZodCheckLessThan;
    }
    function _gte(value, zodLazy) {
      const obj = { check: "greater_than" };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      obj.value = value;
      obj.inclusive = true;
      const ZodCheckGreaterThan = new closure_3.$ZodCheckGreaterThan(obj);
      return ZodCheckGreaterThan;
    }
    const _Object3 = Object;
    function _lt(value, zodLazy) {
      const obj = { check: "less_than" };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      obj.value = value;
      obj.inclusive = false;
      const ZodCheckLessThan = new closure_3.$ZodCheckLessThan(obj);
      return ZodCheckLessThan;
    }
    function _gt(value, zodLazy) {
      const obj = { check: "greater_than" };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      obj.value = value;
      obj.inclusive = false;
      const ZodCheckGreaterThan = new closure_3.$ZodCheckGreaterThan(obj);
      return ZodCheckGreaterThan;
    }
    function _overwrite(tx) {
      const ZodCheckOverwrite = new closure_3.$ZodCheckOverwrite({ check: "overwrite", tx });
      return ZodCheckOverwrite;
    }
    function _check(check, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      const ZodCheck = new closure_3.$ZodCheck({ check: "custom" });
      ZodCheck._zod.check = check;
      return ZodCheck;
    }
    exports.TimePrecision = undefined;
    exports._string = function _string(ZodString, zodLazy) {
      const obj = { type: "string" };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      if (obj.checks) {
        items = [];
        HermesBuiltin.arraySpread(obj.checks, 0);
        obj.checks = items;
      }
      return new ZodString(obj);
    };
    exports._coercedString = function _coercedString(ZodString, zodLazy) {
      const obj = { type: "string", coerce: true };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      if (obj.checks) {
        items = [];
        HermesBuiltin.arraySpread(obj.checks, 0);
        obj.checks = items;
      }
      return new ZodString(obj);
    };
    exports._email = function _email(ZodEmail, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodEmail({ type: "string", format: "email", check: "string_format", abort: false });
    };
    exports._guid = function _guid(ZodGUID, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodGUID({ type: "string", format: "guid", check: "string_format", abort: false });
    };
    exports._uuid = function _uuid(ZodUUID, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodUUID({ type: "string", format: "uuid", check: "string_format", abort: false });
    };
    exports._uuidv4 = function _uuidv4(ZodUUID, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodUUID({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4" });
    };
    exports._uuidv6 = function _uuidv6(ZodUUID, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodUUID({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6" });
    };
    exports._uuidv7 = function _uuidv7(ZodUUID, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodUUID({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7" });
    };
    exports._url = function _url(ZodURL, url) {
      const merged = Object.assign(closure_6.normalizeParams(url));
      return new ZodURL({ type: "string", format: "url", check: "string_format", abort: false });
    };
    exports._emoji = function _emoji(ZodEmoji, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodEmoji({ type: "string", format: "emoji", check: "string_format", abort: false });
    };
    exports._nanoid = function _nanoid(ZodNanoID, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodNanoID({ type: "string", format: "nanoid", check: "string_format", abort: false });
    };
    exports._cuid = function _cuid(ZodCUID, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodCUID({ type: "string", format: "cuid", check: "string_format", abort: false });
    };
    exports._cuid2 = function _cuid2(ZodCUID2, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodCUID2({ type: "string", format: "cuid2", check: "string_format", abort: false });
    };
    exports._ulid = function _ulid(ZodULID, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodULID({ type: "string", format: "ulid", check: "string_format", abort: false });
    };
    exports._xid = function _xid(ZodXID, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodXID({ type: "string", format: "xid", check: "string_format", abort: false });
    };
    exports._ksuid = function _ksuid(ZodKSUID, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodKSUID({ type: "string", format: "ksuid", check: "string_format", abort: false });
    };
    exports._ipv4 = function _ipv4(ZodIPv4, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodIPv4({ type: "string", format: "ipv4", check: "string_format", abort: false });
    };
    exports._ipv6 = function _ipv6(ZodIPv6, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodIPv6({ type: "string", format: "ipv6", check: "string_format", abort: false });
    };
    exports._mac = function _mac(ZodMAC, delimiter) {
      const merged = Object.assign(closure_6.normalizeParams(delimiter));
      return new ZodMAC({ type: "string", format: "mac", check: "string_format", abort: false });
    };
    exports._cidrv4 = function _cidrv4(ZodCIDRv4, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodCIDRv4({ type: "string", format: "cidrv4", check: "string_format", abort: false });
    };
    exports._cidrv6 = function _cidrv6(ZodCIDRv6, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodCIDRv6({ type: "string", format: "cidrv6", check: "string_format", abort: false });
    };
    exports._base64 = function _base64(ZodBase64, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodBase64({ type: "string", format: "base64", check: "string_format", abort: false });
    };
    exports._base64url = function _base64url(ZodBase64URL, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodBase64URL({ type: "string", format: "base64url", check: "string_format", abort: false });
    };
    exports._e164 = function _e164(ZodE164, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodE164({ type: "string", format: "e164", check: "string_format", abort: false });
    };
    exports._creditCard = function _creditCard(ZodCreditCard, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodCreditCard({ type: "string", format: "credit_card", check: "string_format", abort: false });
    };
    exports._iban = function _iban(ZodIBAN, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodIBAN({ type: "string", format: "iban", check: "string_format", abort: false });
    };
    exports._jwt = function _jwt(ZodJWT, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodJWT({ type: "string", format: "jwt", check: "string_format", abort: false });
    };
    exports._isoDateTime = function _isoDateTime(ZodISODateTime, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodISODateTime({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null });
    };
    exports._isoDate = function _isoDate(ZodISODate, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodISODate({ type: "string", format: "date", check: "string_format" });
    };
    exports._isoTime = function _isoTime(ZodISOTime, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodISOTime({ type: "string", format: "time", check: "string_format", precision: null });
    };
    exports._isoDuration = function _isoDuration(ZodISODuration, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodISODuration({ type: "string", format: "duration", check: "string_format" });
    };
    exports._number = function _number(ZodNumber, zodLazy) {
      const obj = { type: "number", checks: [] };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      if (obj.checks) {
        items = [];
        HermesBuiltin.arraySpread(obj.checks, 0);
        obj.checks = items;
      }
      return new ZodNumber(obj);
    };
    exports._coercedNumber = function _coercedNumber(ZodNumber, zodLazy) {
      const obj = { type: "number", coerce: true, checks: [] };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      if (obj.checks) {
        items = [];
        HermesBuiltin.arraySpread(obj.checks, 0);
        obj.checks = items;
      }
      return new ZodNumber(obj);
    };
    exports._int = function _int(ZodNumberFormat, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodNumberFormat({ type: "number", check: "number_format", abort: false, format: "safeint" });
    };
    exports._float32 = function _float32(ZodNumberFormat, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodNumberFormat({ type: "number", check: "number_format", abort: false, format: "float32" });
    };
    exports._float64 = function _float64(ZodNumberFormat, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodNumberFormat({ type: "number", check: "number_format", abort: false, format: "float64" });
    };
    exports._int32 = function _int32(ZodNumberFormat, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodNumberFormat({ type: "number", check: "number_format", abort: false, format: "int32" });
    };
    exports._uint32 = function _uint32(ZodNumberFormat, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodNumberFormat({ type: "number", check: "number_format", abort: false, format: "uint32" });
    };
    exports._boolean = function _boolean(ZodBoolean, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodBoolean({ type: "boolean" });
    };
    exports._coercedBoolean = function _coercedBoolean(ZodBoolean, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodBoolean({ type: "boolean", coerce: true });
    };
    exports._bigint = function _bigint(ZodBigInt, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodBigInt({ type: "bigint" });
    };
    exports._coercedBigint = function _coercedBigint(ZodBigInt, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodBigInt({ type: "bigint", coerce: true });
    };
    exports._int64 = function _int64(ZodBigIntFormat, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodBigIntFormat({ type: "bigint", check: "bigint_format", abort: false, format: "int64" });
    };
    exports._uint64 = function _uint64(ZodBigIntFormat, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodBigIntFormat({ type: "bigint", check: "bigint_format", abort: false, format: "uint64" });
    };
    exports._symbol = function _symbol(ZodSymbol, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodSymbol({ type: "symbol" });
    };
    exports._undefined = function _undefined(arg0, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new arg0({ type: "undefined" });
    };
    exports._null = function _null(arg0, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new arg0({ type: "null" });
    };
    exports._any = function _any(ZodAny) {
      return new ZodAny({ type: "any" });
    };
    exports._unknown = function _unknown(ZodUnknown) {
      return new ZodUnknown({ type: "unknown" });
    };
    exports._never = function _never(ZodNever, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodNever({ type: "never" });
    };
    exports._void = function _void(arg0, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new arg0({ type: "void" });
    };
    exports._date = function _date(ZodDate, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodDate({ type: "date" });
    };
    exports._coercedDate = function _coercedDate(ZodDate, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodDate({ type: "date", coerce: true });
    };
    exports._nan = function _nan(ZodNaN, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
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
    exports._positive = function _positive(zodLazy) {
      const obj = { check: "greater_than" };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      obj.value = 0;
      obj.inclusive = false;
      const ZodCheckGreaterThan = new closure_3.$ZodCheckGreaterThan(obj);
      return ZodCheckGreaterThan;
    };
    exports._negative = function _negative(zodLazy) {
      const obj = { check: "less_than" };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      obj.value = 0;
      obj.inclusive = false;
      const ZodCheckLessThan = new closure_3.$ZodCheckLessThan(obj);
      return ZodCheckLessThan;
    };
    exports._nonpositive = function _nonpositive(zodLazy) {
      const obj = { check: "less_than" };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      obj.value = 0;
      obj.inclusive = true;
      const ZodCheckLessThan = new closure_3.$ZodCheckLessThan(obj);
      return ZodCheckLessThan;
    };
    exports._nonnegative = function _nonnegative(zodLazy) {
      const obj = { check: "greater_than" };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      obj.value = 0;
      obj.inclusive = true;
      const ZodCheckGreaterThan = new closure_3.$ZodCheckGreaterThan(obj);
      return ZodCheckGreaterThan;
    };
    exports._multipleOf = function _multipleOf(value, zodLazy) {
      const obj = { check: "multiple_of" };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      obj.value = value;
      const ZodCheckMultipleOf = new closure_3.$ZodCheckMultipleOf(obj);
      return ZodCheckMultipleOf;
    };
    exports._maxSize = function _maxSize(maximum, zodLazy) {
      const obj = { check: "max_size" };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      obj.maximum = maximum;
      const ZodCheckMaxSize = new closure_3.$ZodCheckMaxSize(obj);
      return ZodCheckMaxSize;
    };
    exports._minSize = function _minSize(minimum, zodLazy) {
      const obj = { check: "min_size" };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      obj.minimum = minimum;
      const ZodCheckMinSize = new closure_3.$ZodCheckMinSize(obj);
      return ZodCheckMinSize;
    };
    exports._size = function _size(size, zodLazy) {
      const obj = { check: "size_equals" };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      obj.size = size;
      const ZodCheckSizeEquals = new closure_3.$ZodCheckSizeEquals(obj);
      return ZodCheckSizeEquals;
    };
    exports._maxLength = function _maxLength(maximum, zodLazy) {
      const obj = { check: "max_length" };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      obj.maximum = maximum;
      const ZodCheckMaxLength = new closure_3.$ZodCheckMaxLength(obj);
      return ZodCheckMaxLength;
    };
    exports._minLength = function _minLength(minimum, zodLazy) {
      const obj = { check: "min_length" };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      obj.minimum = minimum;
      const ZodCheckMinLength = new closure_3.$ZodCheckMinLength(obj);
      return ZodCheckMinLength;
    };
    exports._length = function _length(arg0, zodLazy) {
      const obj = { check: "length_equals" };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      obj.length = arg0;
      const ZodCheckLengthEquals = new closure_3.$ZodCheckLengthEquals(obj);
      return ZodCheckLengthEquals;
    };
    exports._regex = function _regex(pattern, zodLazy) {
      const obj = { check: "string_format", format: "regex" };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      obj.pattern = pattern;
      const ZodCheckRegex = new closure_3.$ZodCheckRegex(obj);
      return ZodCheckRegex;
    };
    exports._lowercase = function _lowercase(zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      const ZodCheckLowerCase = new closure_3.$ZodCheckLowerCase({ check: "string_format", format: "lowercase" });
      return ZodCheckLowerCase;
    };
    exports._uppercase = function _uppercase(zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      const ZodCheckUpperCase = new closure_3.$ZodCheckUpperCase({ check: "string_format", format: "uppercase" });
      return ZodCheckUpperCase;
    };
    exports._includes = function _includes(includes, zodLazy) {
      const obj = { check: "string_format", format: "includes" };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      obj.includes = includes;
      const ZodCheckIncludes = new closure_3.$ZodCheckIncludes(obj);
      return ZodCheckIncludes;
    };
    exports._startsWith = function _startsWith(prefix, zodLazy) {
      const obj = { check: "string_format", format: "starts_with" };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      obj.prefix = prefix;
      const ZodCheckStartsWith = new closure_3.$ZodCheckStartsWith(obj);
      return ZodCheckStartsWith;
    };
    exports._endsWith = function _endsWith(suffix, zodLazy) {
      const obj = { check: "string_format", format: "ends_with" };
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      obj.suffix = suffix;
      const ZodCheckEndsWith = new closure_3.$ZodCheckEndsWith(obj);
      return ZodCheckEndsWith;
    };
    exports._property = function _property(property, schema, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      const ZodCheckProperty = new closure_3.$ZodCheckProperty({ check: "property", property, schema });
      return ZodCheckProperty;
    };
    exports._properties = function _properties(shape, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      const ZodCheckProperties = new closure_3.$ZodCheckProperties({ check: "properties", shape });
      return ZodCheckProperties;
    };
    exports._mime = function _mime(items, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      const ZodCheckMimeType = new closure_3.$ZodCheckMimeType({ check: "mime_type", mime: items });
      return ZodCheckMimeType;
    };
    exports._overwrite = _overwrite;
    exports._normalize = function _normalize(arg0) {
      closure_0 = arg0;
      const ZodCheckOverwrite = new closure_3.$ZodCheckOverwrite({ check: "overwrite", tx: (str) => str.normalize(closure_0) });
      return ZodCheckOverwrite;
    };
    exports._trim = function _trim() {
      const ZodCheckOverwrite = new closure_3.$ZodCheckOverwrite({ check: "overwrite", tx: (str) => str.trim() });
      return ZodCheckOverwrite;
    };
    exports._toLowerCase = function _toLowerCase() {
      const ZodCheckOverwrite = new closure_3.$ZodCheckOverwrite({ check: "overwrite", tx: (str) => str.toLowerCase() });
      return ZodCheckOverwrite;
    };
    exports._toUpperCase = function _toUpperCase() {
      const ZodCheckOverwrite = new closure_3.$ZodCheckOverwrite({ check: "overwrite", tx: (str) => str.toUpperCase() });
      return ZodCheckOverwrite;
    };
    exports._slugify = function _slugify() {
      const ZodCheckOverwrite = new closure_3.$ZodCheckOverwrite({ check: "overwrite", tx: (arg0) => closure_1_6.slugify(arg0) });
      return ZodCheckOverwrite;
    };
    exports._array = function _array(ZodArray, fnResult, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodArray({ type: "array", element: fnResult });
    };
    exports._union = function _union(arg0, options, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new arg0({ type: "union", options });
    };
    exports._xor = function _xor(arg0, options, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new arg0({ type: "union", options, inclusive: false });
    };
    exports._discriminatedUnion = function _discriminatedUnion(arg0, discriminator, options, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new arg0({ type: "union", options, discriminator });
    };
    exports._intersection = function _intersection(arg0, left, right) {
      const rect = { type: "intersection", left, right };
      return new arg0(rect);
    };
    exports._tuple = function _tuple(arg0, items, zodLazy, zodLazy) {
      let tmp2 = zodLazy;
      if (zodLazy instanceof closure_5.$ZodType) {
        tmp2 = zodLazy;
      }
      const obj = { type: "tuple", items, rest: null };
      let tmp3 = null;
      if (zodLazy instanceof closure_5.$ZodType) {
        tmp3 = zodLazy;
      }
      obj.rest = tmp3;
      const merged = Object.assign(closure_6.normalizeParams(tmp2));
      return new arg0(obj);
    };
    exports._record = function _record(arg0, keyType, valueType, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new arg0({ type: "record", keyType, valueType });
    };
    exports._map = function _map(arg0, keyType, valueType, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new arg0({ type: "map", keyType, valueType });
    };
    exports._set = function _set(arg0, valueType, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new arg0({ type: "set", valueType });
    };
    exports._enum = function _enum(arg0, arr, zodLazy) {
      let fromEntriesResult = arr;
      if (Array.isArray(arr)) {
        const _Object = Object;
        fromEntriesResult = Object.fromEntries(arr.map((item) => {
          items = [item, item];
          return items;
        }));
      }
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new arg0({ type: "enum", entries: fromEntriesResult });
    };
    exports._nativeEnum = function _nativeEnum(arg0, entries, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new arg0({ type: "enum", entries });
    };
    exports._literal = function _literal(arg0, arg1, zodLazy) {
      let tmp = arg1;
      if (!Array.isArray(arg1)) {
        items = [arg1];
        tmp = items;
      }
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new arg0({ type: "literal", values: tmp });
    };
    exports._file = function _file(ZodFile, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
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
    exports._default = function _default(arg0, innerType, arg2) {
      closure_0 = arg2;
      const obj = { type: "default", innerType };
      Object.defineProperty(obj, "defaultValue", {
        get: () => {
          if (typeof closure_0 === "function") {
            let shallowCloneResult = closure_0();
          } else {
            shallowCloneResult = closure_6.shallowClone(closure_0);
          }
          return shallowCloneResult;
        },
        set: undefined
      });
      return new arg0(obj);
    };
    exports._nonoptional = function _nonoptional(arg0, innerType, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new arg0({ type: "nonoptional", innerType });
    };
    exports._success = function _success(arg0, innerType) {
      return new arg0({ type: "success", innerType });
    };
    exports._catch = function _catch(arg0, innerType, fn) {
      const obj = { type: "catch", innerType, catchValue: null };
      let constantCatchResult = fn;
      if (typeof fn !== "function") {
        constantCatchResult = closure_6.constantCatch(fn);
      }
      obj.catchValue = constantCatchResult;
      return new arg0(obj);
    };
    exports._pipe = function _pipe(arg0, in, out) {
      return new arg0({ type: "pipe", in: _in, out });
    };
    exports._readonly = function _readonly(arg0, innerType) {
      return new arg0({ type: "readonly", innerType });
    };
    exports._templateLiteral = function _templateLiteral(arg0, parts, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new arg0({ type: "template_literal", parts });
    };
    exports._lazy = function _lazy(arg0, getter) {
      return new arg0({ type: "lazy", getter });
    };
    exports._promise = function _promise(arg0, innerType) {
      return new arg0({ type: "promise", innerType });
    };
    exports._custom = function _custom(ZodCustom, fn, zodLazy) {
      const normalizeParamsResult = closure_6.normalizeParams(zodLazy);
      if (normalizeParamsResult.abort == null) {
        normalizeParamsResult.abort = true;
      }
      const merged = Object.assign(normalizeParamsResult);
      return new ZodCustom({ type: "custom", check: "custom", fn });
    };
    exports._refine = function _refine(ZodCustom, fn, zodLazy) {
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      return new ZodCustom({ type: "custom", check: "custom", fn });
    };
    exports._superRefine = function _superRefine(arg0, zodLazy) {
      closure_0 = arg0;
      const merged = Object.assign(closure_6.normalizeParams(zodLazy));
      const ZodCheck = new closure_3.$ZodCheck({ check: "custom" });
      ZodCheck._zod.check = (value) => {
        value.addIssue = (fatal) => {
          if (typeof fatal === "string") {
            const issues = value.issues;
            issues.push(closure_6.issue(fatal, value.value, ZodCheck._zod.def));
          } else {
            if (fatal.fatal) {
              fatal.continue = false;
            }
            if (fatal.code == null) {
              fatal.code = "custom";
            }
            if (!("input" in fatal)) {
              fatal.input = value.value;
            }
            if (fatal.inst == null) {
              fatal.inst = ZodCheck;
            }
            if (fatal.continue == null) {
              fatal.continue = !ZodCheck._zod.def.abort;
            }
            const issues1 = value.issues;
            issues1.push(closure_6.issue(fatal));
          }
        };
        return value(value.value, value);
      };
      return ZodCheck;
    };
    exports._check = _check;
    exports.describe = function describe(description) {
      const ZodCheck = new closure_3.$ZodCheck({ check: "describe" });
      items = [
        (arg0) => {
          globalRegistry = globalRegistry.globalRegistry;
          let obj = globalRegistry.get(arg0);
          if (obj == null) {
            obj = {};
          }
          const globalRegistry2 = globalRegistry.globalRegistry;
          const obj2 = {};
          const merged = Object.assign(obj);
          obj2.description = description;
          globalRegistry2.add(arg0, obj2);
        }
      ];
      ZodCheck._zod.onattach = items;
      ZodCheck._zod.check = () => {

      };
      return ZodCheck;
    };
    exports.meta = function meta(arg0) {
      closure_0 = arg0;
      const ZodCheck = new closure_3.$ZodCheck({ check: "meta" });
      items = [
        (arg0) => {
          globalRegistry = globalRegistry.globalRegistry;
          let obj = globalRegistry.get(arg0);
          if (obj == null) {
            obj = {};
          }
          const globalRegistry2 = globalRegistry.globalRegistry;
          const merged = Object.assign(obj);
          const merged1 = Object.assign(closure_0);
          globalRegistry2.add(arg0, {});
        }
      ];
      ZodCheck._zod.onattach = items;
      ZodCheck._zod.check = () => {

      };
      return ZodCheck;
    };
    exports._stringbool = function _stringbool(Codec, zodLazy) {
      const normalizeParamsResult = closure_6.normalizeParams(zodLazy);
      exports = normalizeParamsResult;
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
        mapped = truthy.map((item) => {
          let formatted = item;
          if (typeof item === "string") {
            formatted = item.toLowerCase();
          }
          return formatted;
        });
        mapped1 = falsy.map((item) => {
          let formatted = item;
          if (typeof item === "string") {
            formatted = item.toLowerCase();
          }
          return formatted;
        });
        tmp2 = mapped1;
        tmp3 = mapped;
      }
      new Set(tmp3);
      new Set(tmp2);
      let $ZodCodec = Codec.Codec;
      if ($ZodCodec == null) {
        $ZodCodec = closure_5.$ZodCodec;
      }
      let $ZodBoolean = Codec.Boolean;
      if ($ZodBoolean == null) {
        $ZodBoolean = closure_5.$ZodBoolean;
      }
      let $ZodString = Codec.String;
      if ($ZodString == null) {
        $ZodString = closure_5.$ZodString;
      }
      const ZodString = new $ZodString({ type: "string", error: normalizeParamsResult.error });
      const ZodBoolean = new $ZodBoolean({ type: "boolean", error: normalizeParamsResult.error });
      const ZodCodec = new $ZodCodec({
        type: "pipe",
        in: ZodString,
        out: ZodBoolean,
        transform(str, issues) {
          let formatted = str;
          if ("sensitive" !== normalizeParamsResult.case) {
            formatted = str.toLowerCase();
          }
          let hasItem1 = set.has(formatted);
          if (!hasItem1) {
            const hasItem = set1.has(formatted);
            let obj = !hasItem;
            if (!hasItem) {
              issues = issues.issues;
              const obj2 = { code: "invalid_value", expected: "stringbool", values: null, input: null, inst: null, continue: false };
              items = [];
              HermesBuiltin.arraySpread(set1, HermesBuiltin.arraySpread(set, 0));
              obj2.values = items;
              obj2.input = issues.value;
              obj2.inst = ZodCodec;
              issues.push(obj2);
              obj = {};
            }
            hasItem1 = obj;
          }
          return hasItem1;
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
      });
      ZodCodec._zod.bag.truthy = tmp3;
      ZodCodec._zod.bag.falsy = tmp2;
      let str = normalizeParamsResult.case;
      if (str == null) {
        str = "insensitive";
      }
      ZodCodec._zod.bag.case = str;
      return ZodCodec;
    };
    exports._stringFormat = function _stringFormat(ZodCustomStringFormat, combined, currencyCode) {
      regex = currencyCode;
      let obj = enc;
      if (enc === undefined) {
        obj = {};
      }
      const obj2 = { check: "string_format", type: "string", format: combined, fn: null };
      let fn = currencyCode;
      if (typeof currencyCode !== "function") {
        fn = (arg0) => regex.test(arg0);
      }
      obj2.fn = fn;
      const merged = Object.assign(closure_6.normalizeParams(obj));
      if (currencyCode instanceof RegExp) {
        obj2.pattern = currencyCode;
      }
      const normalizeParamsResult = closure_6.normalizeParams(obj);
      return new ZodCustomStringFormat(obj2);
    };
    let closure_3 = fn(_mod12164);
    let closure_4 = fn($output);
    let closure_5 = fn(_validateAsync);
    let closure_6 = fn(_mod12160);
    exports.TimePrecision = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 };
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
                  const obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
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