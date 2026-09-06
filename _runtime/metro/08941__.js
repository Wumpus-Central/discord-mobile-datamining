// _runtime/metro/08941__.js
import _mod8936 from "08936__.js";
import _mod8939 from "08939__.js";
import _mod8942 from "08942__.js";
import _slicedToArray from "00032__.js";

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
    const _Object3 = Object;
    exports.$ZodCheck = undefined;
    exports.$ZodCheckLessThan = undefined;
    exports.$ZodCheckGreaterThan = undefined;
    exports.$ZodCheckMultipleOf = undefined;
    exports.$ZodCheckNumberFormat = undefined;
    exports.$ZodCheckBigIntFormat = undefined;
    exports.$ZodCheckMaxSize = undefined;
    exports.$ZodCheckMinSize = undefined;
    exports.$ZodCheckSizeEquals = undefined;
    exports.$ZodCheckMaxLength = undefined;
    exports.$ZodCheckMinLength = undefined;
    exports.$ZodCheckLengthEquals = undefined;
    exports.$ZodCheckStringFormat = undefined;
    exports.$ZodCheckRegex = undefined;
    exports.$ZodCheckLowerCase = undefined;
    exports.$ZodCheckUpperCase = undefined;
    exports.$ZodCheckIncludes = undefined;
    exports.$ZodCheckStartsWith = undefined;
    exports.$ZodCheckEndsWith = undefined;
    exports.$ZodCheckProperty = undefined;
    exports.$ZodCheckMimeType = undefined;
    exports.$ZodCheckOverwrite = undefined;
    const fnResult = fn(_mod8936);
    let closure_4 = fn(_mod8942);
    let closure_5 = fn(_mod8939);
    exports.$ZodCheck = fnResult.$constructor("$ZodCheck", (_zod, def) => {
      if (_zod._zod == null) {
        _zod._zod = {};
      }
      _zod._zod.def = def;
      _zod = _zod._zod;
      if (_zod.onattach == null) {
        _zod.onattach = [];
      }
    });
    const dependencyMap = { number: "number", bigint: "bigint", object: "date" };
    exports.$ZodCheckLessThan = fnResult.$constructor("$ZodCheckLessThan", (_zod, arg1) => {
      const inst = _zod;
      closure_1 = arg1;
      const $ZodCheck = exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const origin = dependencyMap[typeof arg1.value];
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        let POSITIVE_INFINITY = closure_1.inclusive ? bag.maximum : bag.exclusiveMaximum;
        if (POSITIVE_INFINITY == null) {
          const _Number = Number;
          POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
        }
        if (closure_1.value < POSITIVE_INFINITY) {
          value = iter.value;
          if (iter.inclusive) {
            bag.maximum = value;
          } else {
            bag.exclusiveMaximum = value;
          }
        }
      });
      _zod._zod.check = (value) => {
        let iter = value;
        let iter2 = closure_1;
        value = closure_1.value;
        if (!(closure_1.inclusive ? value <= value : value < value)) {
          const issues = iter.issues;
          let obj = {
            origin,
            code: "too_big",
            maximum: null,
            input: null,
            inclusive: null,
            inst: null,
            continue: null,
          };
          if (typeof iter2.value === "object") {
            value = iter2.value;
            let time = value.getTime();
          } else {
            time = iter2.value;
          }
          obj.maximum = time;
          obj.input = iter.value;
          iter = iter2.inclusive;
          obj.inclusive = iter;
          obj.inst = inst;
          iter2 = iter2.abort;
          obj.continue = !iter2;
          obj = issues.push(obj);
        }
      };
    });
    exports.$ZodCheckGreaterThan = fnResult.$constructor("$ZodCheckGreaterThan", (_zod, arg1) => {
      const inst = _zod;
      closure_1 = arg1;
      const $ZodCheck = exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const origin = dependencyMap[typeof arg1.value];
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        let NEGATIVE_INFINITY = closure_1.inclusive ? bag.minimum : bag.exclusiveMinimum;
        if (NEGATIVE_INFINITY == null) {
          const _Number = Number;
          NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
        }
        if (closure_1.value > NEGATIVE_INFINITY) {
          value = iter.value;
          if (iter.inclusive) {
            bag.minimum = value;
          } else {
            bag.exclusiveMinimum = value;
          }
        }
      });
      _zod._zod.check = (value) => {
        let iter = value;
        let iter2 = closure_1;
        value = closure_1.value;
        if (!(closure_1.inclusive ? value >= value : value > value)) {
          const issues = iter.issues;
          let obj = {
            origin,
            code: "too_small",
            minimum: null,
            input: null,
            inclusive: null,
            inst: null,
            continue: null,
          };
          if (typeof iter2.value === "object") {
            value = iter2.value;
            let time = value.getTime();
          } else {
            time = iter2.value;
          }
          obj.minimum = time;
          obj.input = iter.value;
          iter = iter2.inclusive;
          obj.inclusive = iter;
          obj.inst = inst;
          iter2 = iter2.abort;
          obj.continue = !iter2;
          obj = issues.push(obj);
        }
      };
    });
    exports.$ZodCheckMultipleOf = fnResult.$constructor("$ZodCheckMultipleOf", (_zod, arg1) => {
      _exports = _zod;
      closure_1 = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        if (bag.multipleOf == null) {
          bag.multipleOf = closure_1.value;
        }
      });
      _zod._zod.check = (value) => {
        if (typeof value.value !== typeof closure_1.value) {
          const _Error = Error;
          const error = new Error("Cannot mix number and bigint in multiple_of check.");
          throw error;
        } else {
          if (typeof value.value === "bigint") {
            const _BigInt = BigInt;
            const result = value.value % iter.value;
            let tmp3 = result === BigInt(0);
          } else {
            tmp3 = 0 === closure_5.floatSafeRemainder(value.value, iter.value);
          }
          if (!tmp3) {
            const issues = value.issues;
            const obj = {
              origin: typeof value.value,
              code: "not_multiple_of",
              divisor: iter.value,
              input: value.value,
              inst,
              continue: !iter.abort,
            };
            issues.push(obj);
          }
        }
      };
    });
    exports.$ZodCheckNumberFormat = fnResult.$constructor("$ZodCheckNumberFormat", (_zod, format) => {
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
      [closure_4, closure_5] = _slicedToArray(maximum.NUMBER_FORMAT_RANGES[format.format], 2);
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        bag.format = closure_1.format;
        bag.minimum = minimum;
        bag.maximum = maximum;
        if (hasItem) {
          bag.pattern = minimum.integer;
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
                let obj = {
                  input: value,
                  code: "too_big",
                  maximum: null,
                  note: "Integers must be within the safe integer range.",
                  inst: null,
                  origin: null,
                  inclusive: true,
                  continue: null,
                };
                const _Number4 = Number;
                obj.maximum = Number.MAX_SAFE_INTEGER;
                obj.inst = inst;
                obj.origin = str2;
                obj.continue = !closure_1.abort;
                issues.push(obj);
              } else {
                const issues1 = value.issues;
                obj = {
                  input: value,
                  code: "too_small",
                  minimum: null,
                  note: "Integers must be within the safe integer range.",
                  inst: null,
                  origin: null,
                  inclusive: true,
                  continue: null,
                };
                const _Number3 = Number;
                obj.minimum = Number.MIN_SAFE_INTEGER;
                obj.inst = inst;
                obj.origin = str2;
                obj.continue = !closure_1.abort;
                issues1.push(obj);
              }
            }
          } else {
            const issues2 = value.issues;
            obj = {
              expected: str2,
              format: closure_1.format,
              code: "invalid_type",
              continue: false,
              input: value,
              inst,
            };
            issues2.push(obj);
          }
        }
        if (value < minimum) {
          const issues3 = value.issues;
          const obj1 = {
            origin: "number",
            input: value,
            code: "too_small",
            minimum: tmp14,
            inclusive: true,
            inst,
            continue: !closure_1.abort,
          };
          issues3.push(obj1);
        }
        if (value > maximum) {
          const issues4 = value.issues;
          const obj2 = {
            origin: "number",
            input: value,
            code: "too_big",
            maximum: tmp18,
            inclusive: true,
            inst,
            continue: !closure_1.abort,
          };
          issues4.push(obj2);
        }
      };
    });
    exports.$ZodCheckBigIntFormat = fnResult.$constructor("$ZodCheckBigIntFormat", (_zod, arg1) => {
      const inst = _zod;
      closure_1 = arg1;
      const $ZodCheck = exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      [self2, __setModuleDefault] = _slicedToArray(closure_5.BIGINT_FORMAT_RANGES[arg1.format], 2);
      const onattach = _zod._zod.onattach;
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
          let obj = {
            origin: "bigint",
            input: value,
            code: "too_small",
            minimum: tmp,
            inclusive: true,
            inst,
            continue: !closure_1.abort,
          };
          issues.push(obj);
        }
        if (value > maximum) {
          const issues1 = value.issues;
          obj = {
            origin: "bigint",
            input: value,
            code: "too_big",
            maximum: tmp5,
            inclusive: true,
            inst,
            continue: !closure_1.abort,
          };
          issues1.push(obj);
        }
      };
    });
    exports.$ZodCheckMaxSize = fnResult.$constructor("$ZodCheckMaxSize", (_zod, arg1) => {
      _exports = _zod;
      closure_1 = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const def = _zod._zod.def;
      if (def.when == null) {
        def.when = (value) => {
          value = value.value;
          const nullishResult = closure_1_5.nullish(value);
          let tmp2 = !nullishResult;
          if (!nullishResult) {
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
          const obj = {
            origin: closure_5.getSizableOrigin(value),
            code: "too_big",
            maximum: tmp.maximum,
            inclusive: true,
            input: value,
            inst,
            continue: !tmp.abort,
          };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCheckMinSize = fnResult.$constructor("$ZodCheckMinSize", (_zod, arg1) => {
      _exports = _zod;
      closure_1 = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const def = _zod._zod.def;
      if (def.when == null) {
        def.when = (value) => {
          value = value.value;
          const nullishResult = closure_1_5.nullish(value);
          let tmp2 = !nullishResult;
          if (!nullishResult) {
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
          const obj = {
            origin: closure_5.getSizableOrigin(value),
            code: "too_small",
            minimum: tmp.minimum,
            inclusive: true,
            input: value,
            inst,
            continue: !tmp.abort,
          };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCheckSizeEquals = fnResult.$constructor("$ZodCheckSizeEquals", (_zod, arg1) => {
      _exports = _zod;
      let size = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const def = _zod._zod.def;
      if (def.when == null) {
        def.when = (value) => {
          value = value.value;
          const nullishResult = closure_1_5.nullish(value);
          let tmp2 = !nullishResult;
          if (!nullishResult) {
            tmp2 = undefined !== value.size;
          }
          return tmp2;
        };
      }
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        ({ size: bag.minimum, size: bag.maximum, size: bag.size } = closure_1);
      });
      _zod._zod.check = (value) => {
        let iter = value;
        value = value.value;
        size = value.size;
        let abort = size;
        if (size !== size.size) {
          const issues = iter.issues;
          let arr = { origin: closure_5.getSizableOrigin(value) };
          if (tmp5) {
            const obj = { code: "too_big", maximum: abort.size };
            arr = obj;
          } else {
            arr = { code: "too_small", minimum: abort.size };
          }
          const merged = Object.assign(arr);
          arr.inclusive = true;
          arr.exact = true;
          iter = iter.value;
          arr.input = iter;
          arr.inst = inst;
          abort = abort.abort;
          arr.continue = !abort;
          arr = issues.push(arr);
          tmp5 = size > abort.size;
        }
      };
    });
    exports.$ZodCheckMaxLength = fnResult.$constructor("$ZodCheckMaxLength", (_zod, arg1) => {
      _exports = _zod;
      closure_1 = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const def = _zod._zod.def;
      if (def.when == null) {
        def.when = (value) => {
          value = value.value;
          const nullishResult = closure_1_5.nullish(value);
          let tmp2 = !nullishResult;
          if (!nullishResult) {
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
          const obj = {
            origin: closure_5.getLengthableOrigin(value),
            code: "too_big",
            maximum: tmp.maximum,
            inclusive: true,
            input: value,
            inst,
            continue: !tmp.abort,
          };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCheckMinLength = fnResult.$constructor("$ZodCheckMinLength", (_zod, arg1) => {
      _exports = _zod;
      closure_1 = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const def = _zod._zod.def;
      if (def.when == null) {
        def.when = (value) => {
          value = value.value;
          const nullishResult = closure_1_5.nullish(value);
          let tmp2 = !nullishResult;
          if (!nullishResult) {
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
          const obj = {
            origin: closure_5.getLengthableOrigin(value),
            code: "too_small",
            minimum: tmp.minimum,
            inclusive: true,
            input: value,
            inst,
            continue: !tmp.abort,
          };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCheckLengthEquals = fnResult.$constructor("$ZodCheckLengthEquals", (_zod, arg1) => {
      _exports = _zod;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const def = _zod._zod.def;
      if (def.when == null) {
        def.when = (value) => {
          value = value.value;
          const nullishResult = closure_1_5.nullish(value);
          let tmp2 = !nullishResult;
          if (!nullishResult) {
            tmp2 = undefined !== value.length;
          }
          return tmp2;
        };
      }
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        ({ length: bag.minimum, length: bag.maximum, length: bag.length } = closure_1);
      });
      _zod._zod.check = (value) => {
        let iter = value;
        value = value.value;
        let abort = length;
        if (value.length !== value.length.length) {
          const issues = iter.issues;
          let arr = { origin: closure_5.getLengthableOrigin(value) };
          if (length > abort.length) {
            const obj = { code: "too_big", maximum: abort.length };
            arr = obj;
          } else {
            arr = { code: "too_small", minimum: abort.length };
          }
          const merged = Object.assign(arr);
          arr.inclusive = true;
          arr.exact = true;
          iter = iter.value;
          arr.input = iter;
          arr.inst = inst;
          abort = abort.abort;
          arr.continue = !abort;
          arr = issues.push(arr);
        }
      };
    });
    exports.$ZodCheckStringFormat = fnResult.$constructor("$ZodCheckStringFormat", (_zod, pattern) => {
      const inst = _zod;
      const $ZodCheck = exports.$ZodCheck;
      $ZodCheck.init(_zod, pattern);
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        bag.format = pattern.format;
        if (pattern.pattern) {
          if (bag.patterns == null) {
            const _Set = Set;
            const set = new Set();
            bag.patterns = set;
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
            let abort = pattern;
            pattern.pattern.lastIndex = 0;
            pattern = pattern.pattern;
            if (!pattern.test(value.value)) {
              const issues = value.issues;
              let obj = { origin: "string", code: "invalid_format", format: abort.format, input: value.value };
              if (abort.pattern) {
                obj = { pattern: abort.pattern.toString() };
                let obj1 = obj;
              } else {
                obj1 = {};
              }
              const merged = Object.assign(obj1);
              obj.inst = inst;
              abort = abort.abort;
              obj.continue = !abort;
              obj = issues.push(obj);
            }
          };
        }
      } else if (check == null) {
        _zod.check = () => {};
      }
    });
    exports.$ZodCheckRegex = fnResult.$constructor("$ZodCheckRegex", (_zod, arg1) => {
      const inst = _zod;
      closure_1 = arg1;
      const $ZodCheckStringFormat = exports.$ZodCheckStringFormat;
      $ZodCheckStringFormat.init(_zod, arg1);
      _zod._zod.check = (value) => {
        closure_1.pattern.lastIndex = 0;
        const pattern = closure_1.pattern;
        if (!pattern.test(value.value)) {
          const issues = value.issues;
          const obj = {
            origin: "string",
            code: "invalid_format",
            format: "regex",
            input: value.value,
            pattern: tmp.pattern.toString(),
            inst,
            continue: !tmp.abort,
          };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCheckLowerCase = fnResult.$constructor("$ZodCheckLowerCase", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_4.lowercase;
      }
      const $ZodCheckStringFormat = exports.$ZodCheckStringFormat;
      $ZodCheckStringFormat.init(arg0, pattern);
    });
    exports.$ZodCheckUpperCase = fnResult.$constructor("$ZodCheckUpperCase", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_4.uppercase;
      }
      const $ZodCheckStringFormat = exports.$ZodCheckStringFormat;
      $ZodCheckStringFormat.init(arg0, pattern);
    });
    exports.$ZodCheckIncludes = fnResult.$constructor("$ZodCheckIncludes", (_zod, position) => {
      const inst = _zod;
      const $ZodCheck = exports.$ZodCheck;
      $ZodCheck.init(_zod, position);
      const escapeRegexResult = closure_5.escapeRegex(position.includes);
      let combined = escapeRegexResult;
      if (typeof position.position === "number") {
        const _HermesInternal = HermesInternal;
        combined = "^.{" + position.position + "}" + escapeRegexResult;
      }
      const regExp = new RegExp(combined);
      position.pattern = regExp;
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        if (bag.patterns == null) {
          const _Set = Set;
          const set = new Set();
          bag.patterns = set;
        }
        const patterns = bag.patterns;
        patterns.add(regExp);
      });
      _zod._zod.check = (value) => {
        value = value.value;
        if (!value.includes(position.includes, position.position)) {
          const issues = value.issues;
          const obj = {
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: tmp.includes,
            input: value.value,
            inst,
            continue: !tmp.abort,
          };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCheckStartsWith = fnResult.$constructor("$ZodCheckStartsWith", (_zod, prefix) => {
      const inst = _zod;
      const $ZodCheck = exports.$ZodCheck;
      $ZodCheck.init(_zod, prefix);
      const regExp = new RegExp("^" + closure_5.escapeRegex(prefix.prefix) + ".*");
      if (prefix.pattern == null) {
        prefix.pattern = regExp;
      }
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        if (bag.patterns == null) {
          const _Set = Set;
          const set = new Set();
          bag.patterns = set;
        }
        const patterns = bag.patterns;
        patterns.add(regExp);
      });
      _zod._zod.check = (value) => {
        value = value.value;
        if (!value.startsWith(prefix.prefix)) {
          const issues = value.issues;
          const obj = {
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: tmp.prefix,
            input: value.value,
            inst,
            continue: !tmp.abort,
          };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCheckEndsWith = fnResult.$constructor("$ZodCheckEndsWith", (_zod, suffix) => {
      const inst = _zod;
      const $ZodCheck = exports.$ZodCheck;
      $ZodCheck.init(_zod, suffix);
      const regExp = new RegExp(".*" + closure_5.escapeRegex(suffix.suffix) + "$");
      if (suffix.pattern == null) {
        suffix.pattern = regExp;
      }
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        if (bag.patterns == null) {
          const _Set = Set;
          const set = new Set();
          bag.patterns = set;
        }
        const patterns = bag.patterns;
        patterns.add(regExp);
      });
      _zod._zod.check = (value) => {
        value = value.value;
        if (!value.endsWith(suffix.suffix)) {
          const issues = value.issues;
          const obj = {
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: tmp.suffix,
            input: value.value,
            inst,
            continue: !tmp.abort,
          };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCheckProperty = fnResult.$constructor("$ZodCheckProperty", (_zod, arg1) => {
      _exports = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      _zod._zod.check = (issues) => {
        const _zod = issues.schema._zod;
        const runResult = _zod.run({ value: issues.value[issues.property], issues: [] }, {});
        if (runResult instanceof Promise) {
          return runResult.then((issues) => {
            if (issues.issues.length) {
              issues = issues.issues;
              const push = issues.push;
              const items = [];
              HermesBuiltin.arraySpread(closure_5.prefixIssues(tmp, issues.issues), 0);
              HermesBuiltin.apply(items, issues);
            }
          });
        } else if (runResult.issues.length) {
          issues = issues.issues;
          let push = issues.push;
          let items = [];
          HermesBuiltin.arraySpread(closure_1_5.prefixIssues(tmp, runResult.issues), 0);
          HermesBuiltin.apply(items, issues);
        }
        const obj = { value: issues.value[issues.property], issues: [] };
      };
    });
    exports.$ZodCheckMimeType = fnResult.$constructor("$ZodCheckMimeType", (_zod, mime) => {
      const inst = _zod;
      const $ZodCheck = exports.$ZodCheck;
      $ZodCheck.init(_zod, mime);
      const set = new Set(mime.mime);
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        _zod._zod.bag.mime = mime.mime;
      });
      _zod._zod.check = (value) => {
        if (!set.has(value.value.type)) {
          const issues = value.issues;
          const obj = {
            code: "invalid_value",
            values: mime.mime,
            input: value.value.type,
            inst,
            continue: !mime.abort,
          };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCheckOverwrite = fnResult.$constructor("$ZodCheckOverwrite", (_zod, arg1) => {
      closure_0 = arg1;
      const $ZodCheck = exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      _zod._zod.check = (value) => {
        value.value = closure_0.tx(value.value);
      };
    });
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
