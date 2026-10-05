// === Module 8664: TimePrecision ===

// Module 8664 (TimePrecision)
import captureStackTrace2 from "captureStackTrace" /* 8607 */;
import $ZodType2 from "$ZodType" /* 8608 */;
import $ZodCheck2 from "$ZodCheck" /* 8609 */;
import $output2 from "$output" /* 8663 */;

let hasOwnProperty, set;

const self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let tmp2 = globalThis;
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    closure_0 = __esModule;
    closure_1 = arg2;
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
let closure_0 = tmp;
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
let closure_1 = tmp3;
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
        let tmp6 = closure_0(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_1(obj, __esModule);
  return obj;
});
function _lte(value, message) {
  const $ZodCheckLessThan = $ZodCheck.$ZodCheckLessThan;
  const obj = { check: "less_than", value, inclusive: true };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckLessThan = new $ZodCheckLessThan(obj);
  return ZodCheckLessThan;
}
function _gte(value, message) {
  const $ZodCheckGreaterThan = $ZodCheck.$ZodCheckGreaterThan;
  const obj = { check: "greater_than", value, inclusive: true };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckGreaterThan = new $ZodCheckGreaterThan(obj);
  return ZodCheckGreaterThan;
}
function _lt(value, message) {
  const $ZodCheckLessThan = $ZodCheck.$ZodCheckLessThan;
  const obj = { check: "less_than", value, inclusive: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckLessThan = new $ZodCheckLessThan(obj);
  return ZodCheckLessThan;
}
function _gt(value, message) {
  const $ZodCheckGreaterThan = $ZodCheck.$ZodCheckGreaterThan;
  const obj = { check: "greater_than", value, inclusive: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckGreaterThan = new $ZodCheckGreaterThan(obj);
  return ZodCheckGreaterThan;
}
function _overwrite(tx) {
  const obj = { check: "overwrite", tx };
  const ZodCheckOverwrite = new $ZodCheck.$ZodCheckOverwrite(obj);
  return ZodCheckOverwrite;
}
function _check(check, message) {
  $ZodCheck = $ZodCheck.$ZodCheck;
  const obj = { check: "custom" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheck = new $ZodCheck(obj);
  ZodCheck._zod.check = check;
  return ZodCheck;
}
let $ZodCheck = tmp5($ZodCheck2);
const $output = tmp5($output2);
const $ZodType = tmp5($ZodType2);
const captureStackTrace = tmp5(captureStackTrace2);

export const _string = function _string(ZodString, message) {
  const obj = { type: "string" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodString(obj);
  return tmp2;
};
export const _coercedString = function _coercedString(ZodString, message) {
  const obj = { type: "string", coerce: true };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodString(obj);
  return tmp2;
};
export const _email = function _email(ZodEmail, message) {
  const obj = { type: "string", format: "email", check: "string_format", abort: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodEmail(obj);
  return tmp2;
};
export const _guid = function _guid(ZodGUID, message) {
  const obj = { type: "string", format: "guid", check: "string_format", abort: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodGUID(obj);
  return tmp2;
};
export const _uuid = function _uuid(ZodUUID, message) {
  const obj = { type: "string", format: "uuid", check: "string_format", abort: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodUUID(obj);
  return tmp2;
};
export const _uuidv4 = function _uuidv4(ZodUUID, message) {
  const obj = { type: "string", format: "uuid", check: "string_format", abort: false, version: "v4" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodUUID(obj);
  return tmp2;
};
export const _uuidv6 = function _uuidv6(ZodUUID, message) {
  const obj = { type: "string", format: "uuid", check: "string_format", abort: false, version: "v6" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodUUID(obj);
  return tmp2;
};
export const _uuidv7 = function _uuidv7(ZodUUID, message) {
  const obj = { type: "string", format: "uuid", check: "string_format", abort: false, version: "v7" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodUUID(obj);
  return tmp2;
};
export const _url = function _url(ZodURL, url) {
  const obj = { type: "string", format: "url", check: "string_format", abort: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(url));
  const tmp2 = new ZodURL(obj);
  return tmp2;
};
export const _emoji = function _emoji(ZodEmoji, message) {
  const obj = { type: "string", format: "emoji", check: "string_format", abort: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodEmoji(obj);
  return tmp2;
};
export const _nanoid = function _nanoid(ZodNanoID, message) {
  const obj = { type: "string", format: "nanoid", check: "string_format", abort: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodNanoID(obj);
  return tmp2;
};
export const _cuid = function _cuid(ZodCUID, message) {
  const obj = { type: "string", format: "cuid", check: "string_format", abort: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodCUID(obj);
  return tmp2;
};
export const _cuid2 = function _cuid2(ZodCUID2, message) {
  const obj = { type: "string", format: "cuid2", check: "string_format", abort: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodCUID2(obj);
  return tmp2;
};
export const _ulid = function _ulid(ZodULID, message) {
  const obj = { type: "string", format: "ulid", check: "string_format", abort: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodULID(obj);
  return tmp2;
};
export const _xid = function _xid(ZodXID, message) {
  const obj = { type: "string", format: "xid", check: "string_format", abort: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodXID(obj);
  return tmp2;
};
export const _ksuid = function _ksuid(ZodKSUID, message) {
  const obj = { type: "string", format: "ksuid", check: "string_format", abort: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodKSUID(obj);
  return tmp2;
};
export const _ipv4 = function _ipv4(ZodIPv4, message) {
  const obj = { type: "string", format: "ipv4", check: "string_format", abort: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodIPv4(obj);
  return tmp2;
};
export const _ipv6 = function _ipv6(ZodIPv6, message) {
  const obj = { type: "string", format: "ipv6", check: "string_format", abort: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodIPv6(obj);
  return tmp2;
};
export const _mac = function _mac(ZodMAC, message) {
  const obj = { type: "string", format: "mac", check: "string_format", abort: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodMAC(obj);
  return tmp2;
};
export const _cidrv4 = function _cidrv4(ZodCIDRv4, message) {
  const obj = { type: "string", format: "cidrv4", check: "string_format", abort: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodCIDRv4(obj);
  return tmp2;
};
export const _cidrv6 = function _cidrv6(ZodCIDRv6, message) {
  const obj = { type: "string", format: "cidrv6", check: "string_format", abort: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodCIDRv6(obj);
  return tmp2;
};
export const _base64 = function _base64(ZodBase64, message) {
  const obj = { type: "string", format: "base64", check: "string_format", abort: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodBase64(obj);
  return tmp2;
};
export const _base64url = function _base64url(ZodBase64URL, message) {
  const obj = { type: "string", format: "base64url", check: "string_format", abort: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodBase64URL(obj);
  return tmp2;
};
export const _e164 = function _e164(ZodE164, message) {
  const obj = { type: "string", format: "e164", check: "string_format", abort: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodE164(obj);
  return tmp2;
};
export const _jwt = function _jwt(ZodJWT, message) {
  const obj = { type: "string", format: "jwt", check: "string_format", abort: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodJWT(obj);
  return tmp2;
};
export const _isoDateTime = function _isoDateTime(ZodISODateTime, message) {
  const obj = { type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodISODateTime(obj);
  return tmp2;
};
export const _isoDate = function _isoDate(ZodISODate, message) {
  const obj = { type: "string", format: "date", check: "string_format" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodISODate(obj);
  return tmp2;
};
export const _isoTime = function _isoTime(ZodISOTime, message) {
  const obj = { type: "string", format: "time", check: "string_format", precision: null };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodISOTime(obj);
  return tmp2;
};
export const _isoDuration = function _isoDuration(ZodISODuration, message) {
  const obj = { type: "string", format: "duration", check: "string_format" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodISODuration(obj);
  return tmp2;
};
export const _number = function _number(ZodNumber, message) {
  const obj = { type: "number", checks: [] };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodNumber(obj);
  return tmp2;
};
export const _coercedNumber = function _coercedNumber(ZodNumber, message) {
  const obj = { type: "number", coerce: true, checks: [] };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodNumber(obj);
  return tmp2;
};
export const _int = function _int(ZodNumberFormat, message) {
  const obj = { type: "number", check: "number_format", abort: false, format: "safeint" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodNumberFormat(obj);
  return tmp2;
};
export const _float32 = function _float32(ZodNumberFormat, message) {
  const obj = { type: "number", check: "number_format", abort: false, format: "float32" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodNumberFormat(obj);
  return tmp2;
};
export const _float64 = function _float64(ZodNumberFormat, message) {
  const obj = { type: "number", check: "number_format", abort: false, format: "float64" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodNumberFormat(obj);
  return tmp2;
};
export const _int32 = function _int32(ZodNumberFormat, message) {
  const obj = { type: "number", check: "number_format", abort: false, format: "int32" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodNumberFormat(obj);
  return tmp2;
};
export const _uint32 = function _uint32(ZodNumberFormat, message) {
  const obj = { type: "number", check: "number_format", abort: false, format: "uint32" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodNumberFormat(obj);
  return tmp2;
};
export const _boolean = function _boolean(ZodBoolean, message) {
  const obj = { type: "boolean" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodBoolean(obj);
  return tmp2;
};
export const _coercedBoolean = function _coercedBoolean(ZodBoolean, message) {
  const obj = { type: "boolean", coerce: true };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodBoolean(obj);
  return tmp2;
};
export const _bigint = function _bigint(ZodBigInt, message) {
  const obj = { type: "bigint" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodBigInt(obj);
  return tmp2;
};
export const _coercedBigint = function _coercedBigint(ZodBigInt, message) {
  const obj = { type: "bigint", coerce: true };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodBigInt(obj);
  return tmp2;
};
export const _int64 = function _int64(ZodBigIntFormat, message) {
  const obj = { type: "bigint", check: "bigint_format", abort: false, format: "int64" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodBigIntFormat(obj);
  return tmp2;
};
export const _uint64 = function _uint64(ZodBigIntFormat, message) {
  const obj = { type: "bigint", check: "bigint_format", abort: false, format: "uint64" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodBigIntFormat(obj);
  return tmp2;
};
export const _symbol = function _symbol(ZodSymbol, message) {
  const obj = { type: "symbol" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodSymbol(obj);
  return tmp2;
};
export const _undefined = function _undefined(arg0, message) {
  const obj = { type: "undefined" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new arg0(obj);
  return tmp2;
};
export const _null = function _null(arg0, message) {
  const obj = { type: "null" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new arg0(obj);
  return tmp2;
};
export const _any = function _any(ZodAny) {
  const tmp = new ZodAny({ type: "any" });
  return tmp;
};
export const _unknown = function _unknown(ZodUnknown) {
  const tmp = new ZodUnknown({ type: "unknown" });
  return tmp;
};
export const _never = function _never(ZodNever, message) {
  const obj = { type: "never" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodNever(obj);
  return tmp2;
};
export const _void = function _void(arg0, message) {
  const obj = { type: "void" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new arg0(obj);
  return tmp2;
};
export const _date = function _date(ZodDate, message) {
  const obj = { type: "date" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodDate(obj);
  return tmp2;
};
export const _coercedDate = function _coercedDate(ZodDate, message) {
  const obj = { type: "date", coerce: true };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodDate(obj);
  return tmp2;
};
export const _nan = function _nan(ZodNaN, message) {
  const obj = { type: "nan" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodNaN(obj);
  return tmp2;
};
export { _lt };
export { _lte };
export const _max = _lte;
export { _gt };
export { _gte };
export const _min = _gte;
export const _positive = function _positive(message) {
  const $ZodCheckGreaterThan = $ZodCheck.$ZodCheckGreaterThan;
  const obj = { check: "greater_than", value: 0, inclusive: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckGreaterThan = new $ZodCheckGreaterThan(obj);
  return ZodCheckGreaterThan;
};
export const _negative = function _negative(message) {
  const $ZodCheckLessThan = $ZodCheck.$ZodCheckLessThan;
  const obj = { check: "less_than", value: 0, inclusive: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckLessThan = new $ZodCheckLessThan(obj);
  return ZodCheckLessThan;
};
export const _nonpositive = function _nonpositive(message) {
  const $ZodCheckLessThan = $ZodCheck.$ZodCheckLessThan;
  const obj = { check: "less_than", value: 0, inclusive: true };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckLessThan = new $ZodCheckLessThan(obj);
  return ZodCheckLessThan;
};
export const _nonnegative = function _nonnegative(message) {
  const $ZodCheckGreaterThan = $ZodCheck.$ZodCheckGreaterThan;
  const obj = { check: "greater_than", value: 0, inclusive: true };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckGreaterThan = new $ZodCheckGreaterThan(obj);
  return ZodCheckGreaterThan;
};
export const _multipleOf = function _multipleOf(value, message) {
  const $ZodCheckMultipleOf = $ZodCheck.$ZodCheckMultipleOf;
  const obj = { check: "multiple_of", value };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckMultipleOf = new $ZodCheckMultipleOf(obj);
  return ZodCheckMultipleOf;
};
export const _maxSize = function _maxSize(maximum, message) {
  const $ZodCheckMaxSize = $ZodCheck.$ZodCheckMaxSize;
  const obj = { check: "max_size", maximum };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckMaxSize = new $ZodCheckMaxSize(obj);
  return ZodCheckMaxSize;
};
export const _minSize = function _minSize(minimum, message) {
  const $ZodCheckMinSize = $ZodCheck.$ZodCheckMinSize;
  const obj = { check: "min_size", minimum };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckMinSize = new $ZodCheckMinSize(obj);
  return ZodCheckMinSize;
};
export const _size = function _size(size, message) {
  const $ZodCheckSizeEquals = $ZodCheck.$ZodCheckSizeEquals;
  const obj = { check: "size_equals", size };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckSizeEquals = new $ZodCheckSizeEquals(obj);
  return ZodCheckSizeEquals;
};
export const _maxLength = function _maxLength(maximum, message) {
  const $ZodCheckMaxLength = $ZodCheck.$ZodCheckMaxLength;
  const obj = { check: "max_length", maximum };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckMaxLength = new $ZodCheckMaxLength(obj);
  return ZodCheckMaxLength;
};
export const _minLength = function _minLength(minimum, message) {
  const $ZodCheckMinLength = $ZodCheck.$ZodCheckMinLength;
  const obj = { check: "min_length", minimum };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckMinLength = new $ZodCheckMinLength(obj);
  return ZodCheckMinLength;
};
export const _length = function _length(arg0, message) {
  const $ZodCheckLengthEquals = $ZodCheck.$ZodCheckLengthEquals;
  const obj = { check: "length_equals", length: arg0 };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckLengthEquals = new $ZodCheckLengthEquals(obj);
  return ZodCheckLengthEquals;
};
export const _regex = function _regex(pattern, message) {
  const $ZodCheckRegex = $ZodCheck.$ZodCheckRegex;
  const obj = { check: "string_format", format: "regex", pattern };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckRegex = new $ZodCheckRegex(obj);
  return ZodCheckRegex;
};
export const _lowercase = function _lowercase(message) {
  const $ZodCheckLowerCase = $ZodCheck.$ZodCheckLowerCase;
  const obj = { check: "string_format", format: "lowercase" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckLowerCase = new $ZodCheckLowerCase(obj);
  return ZodCheckLowerCase;
};
export const _uppercase = function _uppercase(message) {
  const $ZodCheckUpperCase = $ZodCheck.$ZodCheckUpperCase;
  const obj = { check: "string_format", format: "uppercase" };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckUpperCase = new $ZodCheckUpperCase(obj);
  return ZodCheckUpperCase;
};
export const _includes = function _includes(includes, message) {
  const $ZodCheckIncludes = $ZodCheck.$ZodCheckIncludes;
  const obj = { check: "string_format", format: "includes", includes };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckIncludes = new $ZodCheckIncludes(obj);
  return ZodCheckIncludes;
};
export const _startsWith = function _startsWith(prefix, message) {
  const $ZodCheckStartsWith = $ZodCheck.$ZodCheckStartsWith;
  const obj = { check: "string_format", format: "starts_with", prefix };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckStartsWith = new $ZodCheckStartsWith(obj);
  return ZodCheckStartsWith;
};
export const _endsWith = function _endsWith(suffix, message) {
  const $ZodCheckEndsWith = $ZodCheck.$ZodCheckEndsWith;
  const obj = { check: "string_format", format: "ends_with", suffix };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckEndsWith = new $ZodCheckEndsWith(obj);
  return ZodCheckEndsWith;
};
export const _property = function _property(property, schema, message) {
  const $ZodCheckProperty = $ZodCheck.$ZodCheckProperty;
  const obj = { check: "property", property, schema };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckProperty = new $ZodCheckProperty(obj);
  return ZodCheckProperty;
};
export const _mime = function _mime(items, message) {
  const $ZodCheckMimeType = $ZodCheck.$ZodCheckMimeType;
  const obj = { check: "mime_type", mime: items };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const ZodCheckMimeType = new $ZodCheckMimeType(obj);
  return ZodCheckMimeType;
};
export { _overwrite };
export const _normalize = function _normalize(arg0) {
  closure_0 = arg0;
  const obj = { check: "overwrite", tx: (str) => str.normalize(closure_0) };
  const ZodCheckOverwrite = new $ZodCheck.$ZodCheckOverwrite(obj);
  return ZodCheckOverwrite;
};
export const _trim = function _trim() {
  const obj = { check: "overwrite", tx: (str) => str.trim() };
  const ZodCheckOverwrite = new $ZodCheck.$ZodCheckOverwrite(obj);
  return ZodCheckOverwrite;
};
export const _toLowerCase = function _toLowerCase() {
  const obj = { check: "overwrite", tx: (str) => str.toLowerCase() };
  const ZodCheckOverwrite = new $ZodCheck.$ZodCheckOverwrite(obj);
  return ZodCheckOverwrite;
};
export const _toUpperCase = function _toUpperCase() {
  const obj = { check: "overwrite", tx: (str) => str.toUpperCase() };
  const ZodCheckOverwrite = new $ZodCheck.$ZodCheckOverwrite(obj);
  return ZodCheckOverwrite;
};
export const _slugify = function _slugify() {
  const obj = { check: "overwrite", tx: (arg0) => captureStackTrace.slugify(arg0) };
  const ZodCheckOverwrite = new $ZodCheck.$ZodCheckOverwrite(obj);
  return ZodCheckOverwrite;
};
export const _array = function _array(ZodArray, util, message) {
  const obj = { type: "array", element: util };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodArray(obj);
  return tmp2;
};
export const _union = function _union(arg0, options, message) {
  const obj = { type: "union", options };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new arg0(obj);
  return tmp2;
};
export const _xor = function _xor(arg0, options, message) {
  const obj = { type: "union", options, inclusive: false };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new arg0(obj);
  return tmp2;
};
export const _discriminatedUnion = function _discriminatedUnion(arg0, discriminator, options, message) {
  const obj = { type: "union", options, discriminator };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new arg0(obj);
  return tmp2;
};
export const _intersection = function _intersection(arg0, left, right) {
  const rect = { type: "intersection", left, right };
  const tmp = new arg0(rect);
  return tmp;
};
export const _tuple = function _tuple(arg0, items, message, message2) {
  let tmp3;
  let tmp2 = message;
  if (message instanceof $ZodType.$ZodType) {
    tmp2 = message;
  }
  const obj = { type: "tuple", items, rest: tmp3 };
  tmp3 = null;
  if (message instanceof $ZodType.$ZodType) {
    tmp3 = message;
  }
  const merged = Object.assign(captureStackTrace.normalizeParams(tmp2));
  const tmp5 = new arg0(obj);
  return tmp5;
};
export const _record = function _record(arg0, keyType, valueType, message) {
  const obj = { type: "record", keyType, valueType };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new arg0(obj);
  return tmp2;
};
export const _map = function _map(arg0, keyType, valueType, message) {
  const obj = { type: "map", keyType, valueType };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new arg0(obj);
  return tmp2;
};
export const _set = function _set(arg0, valueType, message) {
  const obj = { type: "set", valueType };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new arg0(obj);
  return tmp2;
};
export const _enum = function _enum(arg0, arr, message) {
  let fromEntriesResult = arr;
  if (Array.isArray(arr)) {
    const _Object = Object;
    fromEntriesResult = Object.fromEntries(arr.map((item) => {
      const items = [item, item];
      return items;
    }));
  }
  const obj = { type: "enum", entries: fromEntriesResult };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp3 = new arg0(obj);
  return tmp3;
};
export const _nativeEnum = function _nativeEnum(arg0, entries, message) {
  const obj = { type: "enum", entries };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new arg0(obj);
  return tmp2;
};
export const _literal = function _literal(arg0, arg1, message) {
  let tmp = arg1;
  if (!Array.isArray(arg1)) {
    const items = [arg1];
    tmp = items;
  }
  const obj = { type: "literal", values: tmp };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp3 = new arg0(obj);
  return tmp3;
};
export const _file = function _file(ZodFile, dependencyMap) {
  const obj = { type: "file" };
  const merged = Object.assign(captureStackTrace.normalizeParams(dependencyMap));
  const tmp2 = new ZodFile(obj);
  return tmp2;
};
export const _transform = function _transform(arg0, transform) {
  const obj = { type: "transform", transform };
  const tmp = new arg0(obj);
  return tmp;
};
export const _optional = function _optional(arg0, innerType) {
  const obj = { type: "optional", innerType };
  const tmp = new arg0(obj);
  return tmp;
};
export const _nullable = function _nullable(arg0, innerType) {
  const obj = { type: "nullable", innerType };
  const tmp = new arg0(obj);
  return tmp;
};
export const _default = function _default(arg0, innerType, arg2) {
  closure_0 = arg2;
  const obj = { type: "default", innerType };
  Object.defineProperty(obj, "defaultValue", {
    get: () => {
      let shallowCloneResult;
      if (typeof closure_0 === "function") {
        shallowCloneResult = closure_0();
      } else {
        shallowCloneResult = captureStackTrace.shallowClone(closure_0);
      }
      return shallowCloneResult;
    },
    set: undefined
  });
  const tmp = new arg0(obj);
  return tmp;
};
export const _nonoptional = function _nonoptional(arg0, innerType, message) {
  const obj = { type: "nonoptional", innerType };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new arg0(obj);
  return tmp2;
};
export const _success = function _success(arg0, innerType) {
  const obj = { type: "success", innerType };
  const tmp = new arg0(obj);
  return tmp;
};
export const _catch = function _catch(arg0, innerType, fn) {
  let catchValue = fn;
  const obj = { type: "catch", innerType, catchValue };
  if (typeof fn !== "function") {
    catchValue = () => catchValue;
  }
  const tmp = new arg0(obj);
  return tmp;
};
export const _pipe = function _pipe(arg0, _in, out) {
  const obj = { type: "pipe", in: _in, out };
  const tmp = new arg0(obj);
  return tmp;
};
export const _readonly = function _readonly(arg0, innerType) {
  const obj = { type: "readonly", innerType };
  const tmp = new arg0(obj);
  return tmp;
};
export const _templateLiteral = function _templateLiteral(arg0, parts, message) {
  const obj = { type: "template_literal", parts };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new arg0(obj);
  return tmp2;
};
export const _lazy = function _lazy(arg0, getter) {
  const obj = { type: "lazy", getter };
  const tmp = new arg0(obj);
  return tmp;
};
export const _promise = function _promise(arg0, innerType) {
  const obj = { type: "promise", innerType };
  const tmp = new arg0(obj);
  return tmp;
};
export const _custom = function _custom(ZodCustom, fn, message) {
  const normalizeParamsResult = captureStackTrace.normalizeParams(message);
  if (normalizeParamsResult.abort == null) {
    normalizeParamsResult.abort = true;
  }
  const obj = { type: "custom", check: "custom", fn };
  const merged = Object.assign(normalizeParamsResult);
  const tmp3 = new ZodCustom(obj);
  return tmp3;
};
export const _refine = function _refine(ZodCustom, fn, message) {
  const obj = { type: "custom", check: "custom", fn };
  const merged = Object.assign(captureStackTrace.normalizeParams(message));
  const tmp2 = new ZodCustom(obj);
  return tmp2;
};
export const _superRefine = function _superRefine(arg0) {
  closure_0 = arg0;
  $ZodCheck = $ZodCheck.$ZodCheck;
  const obj = { check: "custom" };
  const merged = Object.assign(captureStackTrace.normalizeParams(undefined));
  const ZodCheck = new $ZodCheck(obj);
  ZodCheck._zod.check = (value) => {
    value.addIssue = (fatal) => {
      if (typeof fatal === "string") {
        const issues = value.issues;
        issues.push(captureStackTrace.issue(fatal, value.value, ZodCheck._zod.def));
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
        issues1.push(captureStackTrace.issue(fatal));
      }
    };
    return value(value.value, value);
  };
  return ZodCheck;
};
export { _check };
export const describe = function describe(description) {
  const ZodCheck = new $ZodCheck.$ZodCheck({ check: "describe" });
  const items = [
    (arg0) => {
      const globalRegistry = $output.globalRegistry;
      let obj = globalRegistry.get(arg0);
      if (obj == null) {
        obj = {};
      }
      const globalRegistry2 = $output.globalRegistry;
      const add = globalRegistry2.add;
      const obj2 = { description };
      const merged = Object.assign(obj);
      add(arg0, obj2);
    }
  ];
  ZodCheck._zod.onattach = items;
  ZodCheck._zod.check = () => {

  };
  return ZodCheck;
};
export const meta = function meta(arg0) {
  closure_0 = arg0;
  const ZodCheck = new $ZodCheck.$ZodCheck({ check: "meta" });
  const items = [
    (arg0) => {
      const globalRegistry = $output.globalRegistry;
      let obj = globalRegistry.get(arg0);
      if (obj == null) {
        obj = {};
      }
      const globalRegistry2 = $output.globalRegistry;
      const add = globalRegistry2.add;
      const obj2 = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(closure_0);
      add(arg0, obj2);
    }
  ];
  ZodCheck._zod.onattach = items;
  ZodCheck._zod.check = () => {

  };
  return ZodCheck;
};
export const _stringbool = function _stringbool(Codec, message) {
  const normalizeParamsResult = captureStackTrace.normalizeParams(message);
  let truthy = normalizeParamsResult.truthy;
  if (truthy == null) {
    truthy = ["true", "1", "yes", "on", "y", "enabled"];
  }
  let falsy = normalizeParamsResult.falsy;
  if (falsy == null) {
    falsy = ["false", "0", "no", "off", "n", "disabled"];
  }
  let tmp2 = falsy;
  let tmp3 = truthy;
  if ("sensitive" !== normalizeParamsResult.case) {
    const mapped = truthy.map((item) => {
      let formatted = item;
      if (typeof item === "string") {
        formatted = item.toLowerCase();
      }
      return formatted;
    });
    truthy = mapped;
    const mapped1 = falsy.map((item) => {
      let formatted = item;
      if (typeof item === "string") {
        formatted = item.toLowerCase();
      }
      return formatted;
    });
    falsy = mapped1;
    tmp2 = mapped1;
    tmp3 = mapped;
  }
  set = new Set(tmp3);
  const set1 = new Set(tmp2);
  let $ZodCodec = Codec.Codec;
  if ($ZodCodec == null) {
    $ZodCodec = $ZodType.$ZodCodec;
  }
  let $ZodBoolean = Codec.Boolean;
  if ($ZodBoolean == null) {
    $ZodBoolean = $ZodType.$ZodBoolean;
  }
  let $ZodString = Codec.String;
  if ($ZodString == null) {
    $ZodString = $ZodType.$ZodString;
  }
  let obj = { type: "string", error: normalizeParamsResult.error };
  const ZodString = new $ZodString(obj);
  let obj2 = { type: "boolean", error: normalizeParamsResult.error };
  const ZodBoolean = new $ZodBoolean(obj2);
  const obj3 = {
    type: "pipe",
    in: ZodString,
    out: ZodBoolean,
    transform(str, issues) {
      let items;
      let formatted = str;
      if ("sensitive" !== normalizeParamsResult.case) {
        formatted = str.toLowerCase();
      }
      let hasItem1 = set.has(formatted);
      if (!hasItem1) {
        const hasItem = set1.has(formatted);
        let obj = !hasItem;
        if (obj) {
          issues = issues.issues;
          const obj2 = { code: "invalid_value", expected: "stringbool", values: items, input: issues.value, inst: ZodCodec, continue: false };
          items = [];
          const push = issues.push;
          HermesBuiltin.arraySpread(items, set1, HermesBuiltin.arraySpread(items, set, 0));
          push(obj2);
          obj = {};
        }
        hasItem1 = obj;
      }
      return hasItem1;
    },
    reverseTransform(value, issues) {
      let tmp2;
      if (true === value) {
        tmp2 = truthy[0] || "true";
      } else {
        tmp2 = falsy[0] || "false";
      }
      return tmp2;
    },
    error: normalizeParamsResult.error
  };
  const ZodCodec = new $ZodCodec(obj3);
  return ZodCodec;
};
export const _stringFormat = function _stringFormat(ZodCustomStringFormat, combined, hex) {
  let fn;
  closure_0 = hex;
  let obj = enc;
  if (enc === undefined) {
    obj = {};
  }
  const obj2 = { check: "string_format", type: "string", format: combined, fn };
  const normalizeParamsResult = captureStackTrace.normalizeParams(obj);
  const merged = Object.assign(captureStackTrace.normalizeParams(obj));
  fn = hex;
  if (typeof hex !== "function") {
    fn = (arg0) => regex.test(arg0);
  }
  const merged1 = Object.assign(normalizeParamsResult);
  if (hex instanceof RegExp) {
    obj2.pattern = hex;
  }
  const tmp4 = new ZodCustomStringFormat(obj2);
  return tmp4;
};
export const TimePrecision = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 };