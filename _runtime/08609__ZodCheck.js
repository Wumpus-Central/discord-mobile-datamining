// === Module 8609: $ZodCheck ===

// Module 8609 ($ZodCheck)
import NEVER2 from "NEVER" /* 8604 */;
import captureStackTrace2 from "captureStackTrace" /* 8607 */;
import cuid2 from "cuid" /* 8610 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;

let _exports, hasOwnProperty, set, size;

let self = this;
let _slicedToArray = _slicedToArray_mod;
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
let closure_2 = tmp;
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
let closure_3 = tmp3;
const tmp5 = self && self.__importStar || ((__esModule) => {
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
        let tmp6 = closure_2(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_3(obj, __esModule);
  return obj;
});
const NEVER = tmp5(NEVER2);
const cuid = tmp5(cuid2);
const captureStackTrace = tmp5(captureStackTrace2);
let closure_6 = { number: "number", bigint: "bigint", object: "date" };

export const $ZodCheck = NEVER.$constructor("$ZodCheck", (_zod, def) => {
  if (_zod._zod == null) {
    _zod._zod = {};
  }
  _zod._zod.def = def;
  _zod = _zod._zod;
  if (_zod.onattach == null) {
    _zod.onattach = [];
  }
});
export const $ZodCheckLessThan = NEVER.$constructor("$ZodCheckLessThan", (_zod, arg1) => {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodCheck = exports.$ZodCheck;
  $ZodCheck.init(_zod, arg1);
  closure_2 = closure_6[typeof arg1.value];
  const onattach = _zod._zod.onattach;
  onattach.push((_zod) => {
    const bag = _zod._zod.bag;
    let POSITIVE_INFINITY = closure_1.inclusive ? bag.maximum : bag.exclusiveMaximum;
    if (POSITIVE_INFINITY == null) {
      const _Number = Number;
      POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    }
    if (closure_1.value < POSITIVE_INFINITY) {
      const value = closure_1.value;
      if (closure_1.inclusive) {
        bag.maximum = value;
      } else {
        bag.exclusiveMaximum = value;
      }
    }
  });
  _zod._zod.check = (value) => {
    let time;
    value = value.value;
    const value2 = closure_1.value;
    if (!(closure_1.inclusive ? value <= value2 : value < value2)) {
      const issues = value.issues;
      const push = issues.push;
      const obj = { origin, code: "too_big", maximum: time, input: value.value, inclusive: closure_1.inclusive, inst, continue: !closure_1.abort };
      if (typeof closure_1.value === "object") {
        const value3 = closure_1.value;
        time = value3.getTime();
      } else {
        time = closure_1.value;
      }
      push(obj);
    }
  };
});
export const $ZodCheckGreaterThan = NEVER.$constructor("$ZodCheckGreaterThan", (_zod, arg1) => {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodCheck = exports.$ZodCheck;
  $ZodCheck.init(_zod, arg1);
  closure_2 = closure_6[typeof arg1.value];
  const onattach = _zod._zod.onattach;
  onattach.push((_zod) => {
    const bag = _zod._zod.bag;
    let NEGATIVE_INFINITY = closure_1.inclusive ? bag.minimum : bag.exclusiveMinimum;
    if (NEGATIVE_INFINITY == null) {
      const _Number = Number;
      NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    }
    if (closure_1.value > NEGATIVE_INFINITY) {
      const value = closure_1.value;
      if (closure_1.inclusive) {
        bag.minimum = value;
      } else {
        bag.exclusiveMinimum = value;
      }
    }
  });
  _zod._zod.check = (value) => {
    let time;
    value = value.value;
    const value2 = closure_1.value;
    if (!(closure_1.inclusive ? value >= value2 : value > value2)) {
      const issues = value.issues;
      const push = issues.push;
      const obj = { origin, code: "too_small", minimum: time, input: value.value, inclusive: closure_1.inclusive, inst, continue: !closure_1.abort };
      if (typeof closure_1.value === "object") {
        const value3 = closure_1.value;
        time = value3.getTime();
      } else {
        time = closure_1.value;
      }
      push(obj);
    }
  };
});
export const $ZodCheckMultipleOf = NEVER.$constructor("$ZodCheckMultipleOf", (_zod, arg1) => {
  let inst;
  _exports = _zod;
  let closure_1 = arg1;
  const $ZodCheck = _exports.$ZodCheck;
  $ZodCheck.init(_zod, arg1);
  const onattach = _zod._zod.onattach;
  onattach.push((_zod) => {
    const bag = _zod._zod.bag;
    if (bag.multipleOf == null) {
      bag.multipleOf = closure_1.value;
    }
  });
  _zod._zod.check = function(value) {
    if (typeof value.value !== typeof closure_1.value) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Cannot mix number and bigint in multiple_of check.");
      throw error;
    } else {
      let tmp3;
      if (typeof value.value === "bigint") {
        const _BigInt = BigInt;
        const result = value.value % closure_1.value;
        tmp3 = result === BigInt(0);
      } else {
        tmp3 = 0 === captureStackTrace.floatSafeRemainder(value.value, closure_1.value);
      }
      if (!tmp3) {
        const issues = value.issues;
        const obj = { origin: typeof value.value, code: "not_multiple_of", divisor: closure_1.value, input: value.value, inst, continue: !closure_1.abort };
        issues.push(obj);
      }
    }
  };
});
export const $ZodCheckNumberFormat = NEVER.$constructor("$ZodCheckNumberFormat", (_zod, format) => {
  let inst;
  let maximum;
  let minimum;
  _exports = _zod;
  _slicedToArray = format;
  const $ZodCheck = _exports.$ZodCheck;
  $ZodCheck.init(_zod, format);
  format.format = format.format || "float64";
  format = format.format;
  let hasItem;
  if (format != null) {
    hasItem = format.includes("int");
  }
  let str2 = "number";
  if (hasItem) {
    str2 = "int";
  }
  const tmp3 = _slicedToArray(captureStackTrace.NUMBER_FORMAT_RANGES[format.format], 2);
  [cuid, captureStackTrace] = tmp3;
  const onattach = _zod._zod.onattach;
  onattach.push((_zod) => {
    const bag = _zod._zod.bag;
    bag.format = format.format;
    bag.minimum = cuid;
    bag.maximum = captureStackTrace;
    if (hasItem) {
      bag.pattern = cuid.integer;
    }
  });
  _zod._zod.check = (value) => {
    value = value.value;
    if (hasItem) {
      const _Number = Number;
      if (Number.isInteger(value)) {
        const _Number2 = Number;
        if (!Number.isSafeInteger(value)) {
          if (value > 0) {
            const issues = value.issues;
            const _Number4 = Number;
            const obj2 = { input: value, code: "too_big", maximum: Number.MAX_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst, origin: str2, inclusive: true, continue: !format.abort };
            issues.push(obj2);
          } else {
            const issues1 = value.issues;
            const _Number3 = Number;
            const obj3 = { input: value, code: "too_small", minimum: Number.MIN_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst, origin: str2, inclusive: true, continue: !format.abort };
            issues1.push(obj3);
          }
        }
      } else {
        const issues2 = value.issues;
        const obj = { expected: str2, format: format.format, code: "invalid_type", continue: false, input: value, inst };
        issues2.push(obj);
      }
    }
    if (value < cuid) {
      const issues3 = value.issues;
      const obj4 = { origin: "number", input: value, code: "too_small", minimum: tmp15, inclusive: true, inst, continue: !format.abort };
      issues3.push(obj4);
    }
    if (value > captureStackTrace) {
      const issues4 = value.issues;
      const obj5 = { origin: "number", input: value, code: "too_big", maximum: tmp19, inclusive: true, inst, continue: !format.abort };
      issues4.push(obj5);
    }
  };
});
export const $ZodCheckBigIntFormat = NEVER.$constructor("$ZodCheckBigIntFormat", (_zod, arg1) => {
  let closure_129_2;
  let closure_129_3;
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodCheck = exports.$ZodCheck;
  $ZodCheck.init(_zod, arg1);
  [closure_129_2, closure_129_3] = captureStackTrace.BIGINT_FORMAT_RANGES[arg1.format];
  const onattach = _zod._zod.onattach;
  _slicedToArray(captureStackTrace.BIGINT_FORMAT_RANGES[arg1.format], 2);
  onattach.push((_zod) => {
    const bag = _zod._zod.bag;
    bag.format = closure_1.format;
    bag.minimum = minimum;
    bag.maximum = maximum;
  });
  _zod._zod.check = (value) => {
    value = value.value;
    if (value < minimum) {
      const issues = value.issues;
      const obj = { origin: "bigint", input: value, code: "too_small", minimum: tmp, inclusive: true, inst, continue: !closure_1.abort };
      issues.push(obj);
    }
    if (value > maximum) {
      const issues1 = value.issues;
      const obj2 = { origin: "bigint", input: value, code: "too_big", maximum: tmp5, inclusive: true, inst, continue: !closure_1.abort };
      issues1.push(obj2);
    }
  };
});
export const $ZodCheckMaxSize = NEVER.$constructor("$ZodCheckMaxSize", (_zod, arg1) => {
  let inst;
  _exports = _zod;
  let closure_1 = arg1;
  const $ZodCheck = _exports.$ZodCheck;
  $ZodCheck.init(_zod, arg1);
  const def = _zod._zod.def;
  if (def.when == null) {
    def.when = (value) => {
      value = value.value;
      let tmp2 = !captureStackTrace.nullish(value);
      captureStackTrace.nullish(value);
      if (tmp2) {
        tmp2 = undefined !== value.size;
      }
      return tmp2;
    };
  }
  const onattach = _zod._zod.onattach;
  onattach.push((_zod) => {
    let POSITIVE_INFINITY = _zod._zod.bag.maximum;
    if (POSITIVE_INFINITY == null) {
      const _Number = Number;
      POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    }
    if (closure_1.maximum < POSITIVE_INFINITY) {
      _zod._zod.bag.maximum = tmp2.maximum;
    }
  });
  _zod._zod.check = (value) => {
    value = value.value;
    if (value.size > closure_1.maximum) {
      const issues = value.issues;
      const push = issues.push;
      const obj = { origin: captureStackTrace.getSizableOrigin(value), code: "too_big", maximum: closure_1.maximum, inclusive: true, input: value, inst, continue: !closure_1.abort };
      push(obj);
    }
  };
});
export const $ZodCheckMinSize = NEVER.$constructor("$ZodCheckMinSize", (_zod, arg1) => {
  let inst;
  _exports = _zod;
  let closure_1 = arg1;
  const $ZodCheck = _exports.$ZodCheck;
  $ZodCheck.init(_zod, arg1);
  const def = _zod._zod.def;
  if (def.when == null) {
    def.when = (value) => {
      value = value.value;
      let tmp2 = !captureStackTrace.nullish(value);
      captureStackTrace.nullish(value);
      if (tmp2) {
        tmp2 = undefined !== value.size;
      }
      return tmp2;
    };
  }
  const onattach = _zod._zod.onattach;
  onattach.push((_zod) => {
    let NEGATIVE_INFINITY = _zod._zod.bag.minimum;
    if (NEGATIVE_INFINITY == null) {
      const _Number = Number;
      NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    }
    if (closure_1.minimum > NEGATIVE_INFINITY) {
      _zod._zod.bag.minimum = tmp2.minimum;
    }
  });
  _zod._zod.check = (value) => {
    value = value.value;
    if (value.size < closure_1.minimum) {
      const issues = value.issues;
      const push = issues.push;
      const obj = { origin: captureStackTrace.getSizableOrigin(value), code: "too_small", minimum: closure_1.minimum, inclusive: true, input: value, inst, continue: !closure_1.abort };
      push(obj);
    }
  };
});
export const $ZodCheckSizeEquals = NEVER.$constructor("$ZodCheckSizeEquals", (_zod, arg1) => {
  let inst;
  _exports = _zod;
  size = arg1;
  const $ZodCheck = _exports.$ZodCheck;
  $ZodCheck.init(_zod, arg1);
  const def = _zod._zod.def;
  if (def.when == null) {
    def.when = (value) => {
      value = value.value;
      let tmp2 = !captureStackTrace.nullish(value);
      captureStackTrace.nullish(value);
      if (tmp2) {
        tmp2 = undefined !== value.size;
      }
      return tmp2;
    };
  }
  const onattach = _zod._zod.onattach;
  onattach.push((_zod) => {
    const bag = _zod._zod.bag;
    ({ size: bag.minimum, size: bag.maximum, size: bag.size } = size);
  });
  _zod._zod.check = (value) => {
    value = value.value;
    size = value.size;
    if (size !== size.size) {
      let obj;
      const issues = value.issues;
      const push = issues.push;
      const obj2 = { origin: captureStackTrace.getSizableOrigin(value), inclusive: true, exact: true, input: value.value, inst, continue: !size.abort };
      const tmp7 = size > size.size;
      if (tmp7) {
        obj = { code: "too_big", maximum: size.size };
        const obj3 = { code: "too_big", maximum: size.size };
      } else {
        obj = { code: "too_small", minimum: size.size };
      }
      const merged = Object.assign(obj);
      push(obj2);
    }
  };
});
export const $ZodCheckMaxLength = NEVER.$constructor("$ZodCheckMaxLength", (_zod, arg1) => {
  let inst;
  _exports = _zod;
  let closure_1 = arg1;
  const $ZodCheck = _exports.$ZodCheck;
  $ZodCheck.init(_zod, arg1);
  const def = _zod._zod.def;
  if (def.when == null) {
    def.when = (value) => {
      value = value.value;
      let tmp2 = !captureStackTrace.nullish(value);
      captureStackTrace.nullish(value);
      if (tmp2) {
        tmp2 = undefined !== value.length;
      }
      return tmp2;
    };
  }
  const onattach = _zod._zod.onattach;
  onattach.push((_zod) => {
    let POSITIVE_INFINITY = _zod._zod.bag.maximum;
    if (POSITIVE_INFINITY == null) {
      const _Number = Number;
      POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    }
    if (closure_1.maximum < POSITIVE_INFINITY) {
      _zod._zod.bag.maximum = tmp2.maximum;
    }
  });
  _zod._zod.check = (value) => {
    value = value.value;
    if (value.length > closure_1.maximum) {
      const issues = value.issues;
      const obj = { origin: captureStackTrace.getLengthableOrigin(value), code: "too_big", maximum: closure_1.maximum, inclusive: true, input: value, inst, continue: !closure_1.abort };
      issues.push(obj);
    }
  };
});
export const $ZodCheckMinLength = NEVER.$constructor("$ZodCheckMinLength", (_zod, arg1) => {
  let inst;
  _exports = _zod;
  let closure_1 = arg1;
  const $ZodCheck = _exports.$ZodCheck;
  $ZodCheck.init(_zod, arg1);
  const def = _zod._zod.def;
  if (def.when == null) {
    def.when = (value) => {
      value = value.value;
      let tmp2 = !captureStackTrace.nullish(value);
      captureStackTrace.nullish(value);
      if (tmp2) {
        tmp2 = undefined !== value.length;
      }
      return tmp2;
    };
  }
  const onattach = _zod._zod.onattach;
  onattach.push((_zod) => {
    let NEGATIVE_INFINITY = _zod._zod.bag.minimum;
    if (NEGATIVE_INFINITY == null) {
      const _Number = Number;
      NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    }
    if (closure_1.minimum > NEGATIVE_INFINITY) {
      _zod._zod.bag.minimum = tmp2.minimum;
    }
  });
  _zod._zod.check = (value) => {
    value = value.value;
    if (value.length < closure_1.minimum) {
      const issues = value.issues;
      const obj = { origin: captureStackTrace.getLengthableOrigin(value), code: "too_small", minimum: closure_1.minimum, inclusive: true, input: value, inst, continue: !closure_1.abort };
      issues.push(obj);
    }
  };
});
export const $ZodCheckLengthEquals = NEVER.$constructor("$ZodCheckLengthEquals", (_zod, arg1) => {
  let inst;
  _exports = _zod;
  const length = arg1;
  const $ZodCheck = _exports.$ZodCheck;
  $ZodCheck.init(_zod, arg1);
  const def = _zod._zod.def;
  if (def.when == null) {
    def.when = (value) => {
      value = value.value;
      let tmp2 = !captureStackTrace.nullish(value);
      captureStackTrace.nullish(value);
      if (tmp2) {
        tmp2 = undefined !== value.length;
      }
      return tmp2;
    };
  }
  const onattach = _zod._zod.onattach;
  onattach.push((_zod) => {
    const bag = _zod._zod.bag;
    ({ length: bag.minimum, length: bag.maximum, length: bag.length } = length);
  });
  _zod._zod.check = (value) => {
    value = value.value;
    if (value.length !== value.length.length) {
      let obj;
      const issues = value.issues;
      const push = issues.push;
      const obj2 = { origin: captureStackTrace.getLengthableOrigin(value), inclusive: true, exact: true, input: value.value, inst, continue: !value.length.abort };
      if (value.length > value.length.length) {
        obj = { code: "too_big", maximum: value.length.length };
        const obj3 = { code: "too_big", maximum: value.length.length };
      } else {
        obj = { code: "too_small", minimum: value.length.length };
      }
      const merged = Object.assign(obj);
      push(obj2);
    }
  };
});
export const $ZodCheckStringFormat = NEVER.$constructor("$ZodCheckStringFormat", (_zod, pattern) => {
  let closure_0 = _zod;
  let closure_1 = pattern;
  const $ZodCheck = exports.$ZodCheck;
  $ZodCheck.init(_zod, pattern);
  const onattach = _zod._zod.onattach;
  onattach.push(function(_zod) {
    const bag = _zod._zod.bag;
    bag.format = closure_1.format;
    if (closure_1.pattern) {
      if (bag.patterns == null) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        bag.patterns = new Set();
        set = new Set();
      }
      const patterns = bag.patterns;
      patterns.add(tmp.pattern);
    }
  });
  _zod = _zod._zod;
  const check = _zod.check;
  if (pattern.pattern) {
    if (check == null) {
      _zod.check = (value) => {
        let str;
        closure_1.pattern.lastIndex = 0;
        const pattern = closure_1.pattern;
        if (!pattern.test(value.value)) {
          let obj3;
          const issues = value.issues;
          const push = issues.push;
          const obj = { origin: "string", code: "invalid_format", format: closure_1.format, input: value.value, inst, continue: !closure_1.abort };
          if (closure_1.pattern) {
            const obj2 = { pattern: str.toString() };
            obj3 = obj2;
            str = closure_1.pattern;
          } else {
            obj3 = {};
          }
          const merged = Object.assign(obj3);
          push(obj);
        }
      };
    }
  } else if (check == null) {
    _zod.check = () => {

    };
  }
});
export const $ZodCheckRegex = NEVER.$constructor("$ZodCheckRegex", (_zod, arg1) => {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodCheckStringFormat = exports.$ZodCheckStringFormat;
  $ZodCheckStringFormat.init(_zod, arg1);
  _zod._zod.check = (value) => {
    let str;
    closure_1.pattern.lastIndex = 0;
    const pattern = closure_1.pattern;
    if (!pattern.test(value.value)) {
      const issues = value.issues;
      const push = issues.push;
      const obj = { origin: "string", code: "invalid_format", format: "regex", input: value.value, pattern: str.toString(), inst, continue: !closure_1.abort };
      str = closure_1.pattern;
      push(obj);
    }
  };
});
export const $ZodCheckLowerCase = NEVER.$constructor("$ZodCheckLowerCase", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.lowercase;
  }
  const $ZodCheckStringFormat = exports.$ZodCheckStringFormat;
  $ZodCheckStringFormat.init(arg0, pattern);
});
export const $ZodCheckUpperCase = NEVER.$constructor("$ZodCheckUpperCase", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.uppercase;
  }
  const $ZodCheckStringFormat = exports.$ZodCheckStringFormat;
  $ZodCheckStringFormat.init(arg0, pattern);
});
export const $ZodCheckIncludes = NEVER.$constructor("$ZodCheckIncludes", (_zod, position) => {
  let closure_0 = _zod;
  let closure_1 = position;
  const $ZodCheck = exports.$ZodCheck;
  $ZodCheck.init(_zod, position);
  const escapeRegexResult = captureStackTrace.escapeRegex(position.includes);
  let combined = escapeRegexResult;
  const _RegExp = RegExp;
  if (typeof position.position === "number") {
    const _HermesInternal = HermesInternal;
    combined = "^.{" + position.position + "}" + escapeRegexResult;
  }
  const _RegExp1 = new _RegExp(combined);
  position.pattern = _RegExp1;
  const onattach = _zod._zod.onattach;
  onattach.push(function(_zod) {
    const bag = _zod._zod.bag;
    if (bag.patterns == null) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      bag.patterns = new Set();
      set = new Set();
    }
    const patterns = bag.patterns;
    patterns.add(_RegExp1);
  });
  _zod._zod.check = (value) => {
    value = value.value;
    if (!value.includes(closure_1.includes, closure_1.position)) {
      const issues = value.issues;
      const obj = { origin: "string", code: "invalid_format", format: "includes", includes: closure_1.includes, input: value.value, inst, continue: !closure_1.abort };
      issues.push(obj);
    }
  };
});
export const $ZodCheckStartsWith = NEVER.$constructor("$ZodCheckStartsWith", (_zod, prefix) => {
  let closure_0 = _zod;
  let closure_1 = prefix;
  const $ZodCheck = exports.$ZodCheck;
  $ZodCheck.init(_zod, prefix);
  const regExp = new RegExp("^" + captureStackTrace.escapeRegex(prefix.prefix) + ".*");
  if (prefix.pattern == null) {
    prefix.pattern = regExp;
  }
  const onattach = _zod._zod.onattach;
  onattach.push(function(_zod) {
    const bag = _zod._zod.bag;
    if (bag.patterns == null) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      bag.patterns = new Set();
      set = new Set();
    }
    const patterns = bag.patterns;
    patterns.add(regExp);
  });
  _zod._zod.check = (value) => {
    value = value.value;
    if (!value.startsWith(prefix.prefix)) {
      const issues = value.issues;
      const obj = { origin: "string", code: "invalid_format", format: "starts_with", prefix: prefix.prefix, input: value.value, inst, continue: !prefix.abort };
      issues.push(obj);
    }
  };
});
export const $ZodCheckEndsWith = NEVER.$constructor("$ZodCheckEndsWith", (_zod, suffix) => {
  let closure_0 = _zod;
  let closure_1 = suffix;
  const $ZodCheck = exports.$ZodCheck;
  $ZodCheck.init(_zod, suffix);
  const regExp = new RegExp(".*" + captureStackTrace.escapeRegex(suffix.suffix) + "$");
  if (suffix.pattern == null) {
    suffix.pattern = regExp;
  }
  const onattach = _zod._zod.onattach;
  onattach.push(function(_zod) {
    const bag = _zod._zod.bag;
    if (bag.patterns == null) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      bag.patterns = new Set();
      set = new Set();
    }
    const patterns = bag.patterns;
    patterns.add(regExp);
  });
  _zod._zod.check = (value) => {
    value = value.value;
    if (!value.endsWith(suffix.suffix)) {
      const issues = value.issues;
      const obj = { origin: "string", code: "invalid_format", format: "ends_with", suffix: suffix.suffix, input: value.value, inst, continue: !suffix.abort };
      issues.push(obj);
    }
  };
});
export const $ZodCheckProperty = NEVER.$constructor("$ZodCheckProperty", (_zod, arg1) => {
  let closure_0;
  _exports = arg1;
  const $ZodCheck = _exports.$ZodCheck;
  $ZodCheck.init(_zod, arg1);
  _zod._zod.check = (issues) => {
    const _zod = issues.schema._zod;
    const obj = { value: issues.value[issues.property], issues: [] };
    const runResult = _zod.run(obj, {});
    if (runResult instanceof Promise) {
      return runResult.then((issues) => {
        if (issues.issues.length) {
          issues = issues.issues;
          const push = issues.push;
          const items = [];
          HermesBuiltin.arraySpread(items, captureStackTrace.prefixIssues(tmp2, issues.issues), 0);
          HermesBuiltin.apply(push, items, issues);
        }
      });
    } else if (runResult.issues.length) {
      issues = issues.issues;
      let push = issues.push;
      let items = [];
      HermesBuiltin.arraySpread(items, captureStackTrace.prefixIssues(tmp2, runResult.issues), 0);
      HermesBuiltin.apply(push, items, issues);
    }
  };
});
export const $ZodCheckMimeType = NEVER.$constructor("$ZodCheckMimeType", (_zod, mime) => {
  let closure_0 = _zod;
  let closure_1 = mime;
  const $ZodCheck = exports.$ZodCheck;
  $ZodCheck.init(_zod, mime);
  set = new Set(mime.mime);
  const onattach = _zod._zod.onattach;
  onattach.push((_zod) => {
    _zod._zod.bag.mime = closure_1.mime;
  });
  _zod._zod.check = (value) => {
    if (!set.has(value.value.type)) {
      const issues = value.issues;
      const obj = { code: "invalid_value", values: closure_1.mime, input: value.value.type, inst, continue: !closure_1.abort };
      issues.push(obj);
    }
  };
});
export const $ZodCheckOverwrite = NEVER.$constructor("$ZodCheckOverwrite", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodCheck = exports.$ZodCheck;
  $ZodCheck.init(_zod, arg1);
  _zod._zod.check = (value) => {
    value.value = closure_0.tx(value.value);
  };
});