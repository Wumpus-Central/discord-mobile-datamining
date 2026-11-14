// _runtime/metro/12164__.js
import _mod12159 from "12159__.js";
import _mod12160 from "12160__.js";
import _mod12165 from "12165__.js";
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
    exports.$ZodCheckProperties = undefined;
    exports.$ZodCheckMimeType = undefined;
    exports.$ZodCheckOverwrite = undefined;
    const fnResult = fn(_mod12159);
    let closure_4 = fn(_mod12165);
    let closure_5 = fn(_mod12160);
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
    function _whenHasSize(value) {
      value = value.value;
      const nullishResult = closure_5.nullish(value);
      let tmp2 = !nullishResult;
      if (!nullishResult) {
        tmp2 = undefined !== value.size;
      }
      return tmp2;
    }
    function _whenHasLength(value) {
      value = value.value;
      const nullishResult = closure_5.nullish(value);
      let tmp2 = !nullishResult;
      if (!nullishResult) {
        tmp2 = undefined !== value.length;
      }
      return tmp2;
    }
    let dependencyMap = { number: "number", bigint: "bigint", object: "date" };
    exports.$ZodCheckLessThan = fnResult.$constructor("$ZodCheckLessThan", (_zod, arg1) => {
      _exports = _zod;
      closure_1 = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      closure_2 = dependencyMap[typeof arg1.value];
      _zod._zod.check = (value) => {
        let iter = value;
        let iter2 = closure_1;
        value = value.value;
        const value2 = closure_1.value;
        if (!(closure_1.inclusive ? value <= value2 : value < value2)) {
          const issues = iter.issues;
          let tmp2 = closure_8[typeof iter.value];
          if (tmp2 == null) {
            tmp2 = closure_2;
          }
          let obj = {
            origin: tmp2,
            code: "too_big",
            maximum: null,
            input: null,
            inclusive: null,
            inst: null,
            continue: null,
          };
          if (typeof iter2.value === "object") {
            const value3 = iter2.value;
            let time = value3.getTime();
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
      _exports = _zod;
      closure_1 = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      closure_2 = dependencyMap[typeof arg1.value];
      _zod._zod.check = (value) => {
        let iter = value;
        let iter2 = closure_1;
        value = value.value;
        const value2 = closure_1.value;
        if (!(closure_1.inclusive ? value >= value2 : value > value2)) {
          const issues = iter.issues;
          let tmp2 = closure_8[typeof iter.value];
          if (tmp2 == null) {
            tmp2 = closure_2;
          }
          let obj = {
            origin: tmp2,
            code: "too_small",
            minimum: null,
            input: null,
            inclusive: null,
            inst: null,
            continue: null,
          };
          if (typeof iter2.value === "object") {
            const value3 = iter2.value;
            let time = value3.getTime();
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
      value = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      _zod._zod.check = (value) => {
        if (typeof value.value !== typeof value.value) {
          const _Error = Error;
          const error = new Error("Cannot mix number and bigint in multiple_of check.");
          throw error;
        } else {
          if (typeof value.value === "bigint") {
            const _BigInt = BigInt;
            let tmp2 = value.value !== BigInt(0);
            if (tmp2) {
              const _BigInt2 = BigInt;
              const result = value.value % value.value;
              tmp2 = result === BigInt(0);
            }
            let tmp4 = tmp2;
          } else {
            tmp4 = 0 === closure_5.floatSafeRemainder(value.value, value.value);
          }
          if (!tmp4) {
            const issues = value.issues;
            const obj = {
              origin: typeof value.value,
              code: "not_multiple_of",
              divisor: value.value,
              input: value.value,
              inst,
              continue: !value.abort,
            };
            issues.push(obj);
          }
        }
      };
    });
    exports.$ZodCheckNumberFormat = fnResult.$constructor("$ZodCheckNumberFormat", (_zod, format) => {
      const inst = _zod;
      closure_1 = format;
      const $ZodCheck = exports.$ZodCheck;
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
      [closure_4, closure_5] = closure_5.NUMBER_FORMAT_RANGES[format.format];
      _zod._zod.check = (value) => {
        value = value.value;
        if (hasItem) {
          const _Number = Number;
          if (Number.isInteger(value)) {
            const _Number2 = Number;
            if (!Number.isSafeInteger(value)) {
              if (value > 0) {
                const issues = value.issues;
                const obj2 = {
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
                obj2.maximum = Number.MAX_SAFE_INTEGER;
                obj2.inst = inst;
                obj2.origin = str2;
                obj2.continue = !closure_1.abort;
                issues.push(obj2);
              } else {
                const issues1 = value.issues;
                const obj3 = {
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
                obj3.minimum = Number.MIN_SAFE_INTEGER;
                obj3.inst = inst;
                obj3.origin = str2;
                obj3.continue = !closure_1.abort;
                issues1.push(obj3);
              }
            }
          } else {
            const issues2 = value.issues;
            const obj = {
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
        if (value < closure_1_4) {
          const issues3 = value.issues;
          const obj4 = {
            origin: "number",
            input: value,
            code: "too_small",
            minimum: tmp14,
            inclusive: true,
            inst,
            continue: !closure_1.abort,
          };
          issues3.push(obj4);
        }
        if (value > closure_1_5) {
          const issues4 = value.issues;
          const obj5 = {
            origin: "number",
            input: value,
            code: "too_big",
            maximum: tmp18,
            inclusive: true,
            inst,
            continue: !closure_1.abort,
          };
          issues4.push(obj5);
        }
      };
    });
    exports.$ZodCheckBigIntFormat = fnResult.$constructor("$ZodCheckBigIntFormat", (_zod, arg1) => {
      const inst = _zod;
      closure_1 = arg1;
      const $ZodCheck = exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      [self2, __setModuleDefault] = closure_5.BIGINT_FORMAT_RANGES[arg1.format];
      _zod._zod.check = (value) => {
        value = value.value;
        if (value < self2) {
          const issues = value.issues;
          const obj = {
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
        if (value > __setModuleDefault) {
          const issues1 = value.issues;
          const obj2 = {
            origin: "bigint",
            input: value,
            code: "too_big",
            maximum: tmp5,
            inclusive: true,
            inst,
            continue: !closure_1.abort,
          };
          issues1.push(obj2);
        }
      };
    });
    exports.$ZodCheckMaxSize = fnResult.$constructor("$ZodCheckMaxSize", (_zod, arg1) => {
      _exports = _zod;
      const maximum = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const def = _zod._zod.def;
      if (def.when == null) {
        def.when = _whenHasSize;
      }
      _zod._zod.check = (value) => {
        value = value.value;
        if (value.size > maximum.maximum) {
          const issues = value.issues;
          const obj = {
            origin: sizableOrigin.getSizableOrigin(value),
            code: "too_big",
            maximum: maximum.maximum,
            inclusive: true,
            input: value,
            inst,
            continue: !maximum.abort,
          };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCheckMinSize = fnResult.$constructor("$ZodCheckMinSize", (_zod, arg1) => {
      _exports = _zod;
      const minimum = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const def = _zod._zod.def;
      if (def.when == null) {
        def.when = _whenHasSize;
      }
      _zod._zod.check = (value) => {
        value = value.value;
        if (value.size < minimum.minimum) {
          const issues = value.issues;
          const obj = {
            origin: sizableOrigin.getSizableOrigin(value),
            code: "too_small",
            minimum: minimum.minimum,
            inclusive: true,
            input: value,
            inst,
            continue: !minimum.abort,
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
        def.when = _whenHasSize;
      }
      _zod._zod.check = (value) => {
        let iter = value;
        value = value.value;
        size = value.size;
        let abort = size;
        if (size !== size.size) {
          const issues = iter.issues;
          let obj2 = { origin: sizableOrigin.getSizableOrigin(value) };
          if (tmp5) {
            const obj3 = { code: "too_big", maximum: abort.size };
            let obj = obj3;
          } else {
            obj = { code: "too_small", minimum: abort.size };
          }
          const merged = Object.assign(obj);
          obj2.inclusive = true;
          obj2.exact = true;
          iter = iter.value;
          obj2.input = iter;
          obj2.inst = inst;
          abort = abort.abort;
          obj2.continue = !abort;
          obj2 = issues.push(obj2);
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
        def.when = _whenHasLength;
      }
      _zod._zod.check = (value) => {
        value = value.value;
        let codePointLengthResult = length;
        if (typeof value === "string") {
          codePointLengthResult = length;
          if (length > closure_1.maximum) {
            codePointLengthResult = closure_5.codePointLength(value);
          }
        }
        if (codePointLengthResult > closure_1.maximum) {
          const issues = value.issues;
          const obj = {
            origin: closure_5.getLengthableOrigin(value),
            code: "too_big",
            maximum: closure_1.maximum,
            inclusive: true,
            input: value,
            inst,
            continue: !closure_1.abort,
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
        def.when = _whenHasLength;
      }
      _zod._zod.check = (value) => {
        value = value.value;
        let codePointLengthResult = length;
        if (typeof value === "string") {
          codePointLengthResult = length;
          if (length >= closure_1.minimum) {
            codePointLengthResult = length;
            if (length < 2 * closure_1.minimum) {
              codePointLengthResult = closure_5.codePointLength(value);
            }
          }
        }
        if (codePointLengthResult < closure_1.minimum) {
          const issues = value.issues;
          const obj = {
            origin: closure_5.getLengthableOrigin(value),
            code: "too_small",
            minimum: closure_1.minimum,
            inclusive: true,
            input: value,
            inst,
            continue: !closure_1.abort,
          };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCheckLengthEquals = fnResult.$constructor("$ZodCheckLengthEquals", (_zod, arg1) => {
      _exports = _zod;
      closure_1 = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const def = _zod._zod.def;
      if (def.when == null) {
        def.when = _whenHasLength;
      }
      _zod._zod.check = (value) => {
        let iter = value;
        value = value.value;
        let codePointLengthResult = length;
        if (typeof value === "string") {
          codePointLengthResult = length;
          if (length >= closure_1.length) {
            codePointLengthResult = length;
            if (length <= 2 * closure_1.length) {
              codePointLengthResult = closure_5.codePointLength(value);
            }
          }
        }
        let abort = closure_1;
        if (codePointLengthResult !== closure_1.length) {
          const issues = iter.issues;
          let obj2 = { origin: closure_5.getLengthableOrigin(value) };
          if (codePointLengthResult > abort.length) {
            const obj3 = { code: "too_big", maximum: abort.length };
            let obj = obj3;
          } else {
            obj = { code: "too_small", minimum: abort.length };
          }
          const merged = Object.assign(obj);
          obj2.inclusive = true;
          obj2.exact = true;
          iter = iter.value;
          obj2.input = iter;
          obj2.inst = inst;
          abort = abort.abort;
          obj2.continue = !abort;
          obj2 = issues.push(obj2);
        }
      };
    });
    exports.$ZodCheckStringFormat = fnResult.$constructor("$ZodCheckStringFormat", (_zod, pattern) => {
      const inst = _zod;
      const $ZodCheck = exports.$ZodCheck;
      $ZodCheck.init(_zod, pattern);
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
                const obj2 = { pattern: abort.pattern.toString() };
                let obj3 = obj2;
              } else {
                obj3 = {};
              }
              const merged = Object.assign(obj3);
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
            pattern: closure_1.pattern.toString(),
            inst,
            continue: !closure_1.abort,
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
        combined = "^.{" + position.position + ",}" + escapeRegexResult;
      }
      const regExp = new RegExp(combined);
      position.pattern = regExp;
      _zod._zod.check = (value) => {
        value = value.value;
        if (!value.includes(position.includes, position.position)) {
          const issues = value.issues;
          const obj = {
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: position.includes,
            input: value.value,
            inst,
            continue: !position.abort,
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
      _zod._zod.check = (value) => {
        value = value.value;
        if (!value.startsWith(prefix.prefix)) {
          const issues = value.issues;
          const obj = {
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: prefix.prefix,
            input: value.value,
            inst,
            continue: !prefix.abort,
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
      _zod._zod.check = (value) => {
        value = value.value;
        if (!value.endsWith(suffix.suffix)) {
          const issues = value.issues;
          const obj = {
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: suffix.suffix,
            input: value.value,
            inst,
            continue: !suffix.abort,
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
              items = [];
              HermesBuiltin.arraySpread(closure_5.prefixIssues(tmp, issues.issues), 0);
              HermesBuiltin.apply(items, issues);
            }
          });
        } else if (runResult.issues.length) {
          issues = issues.issues;
          let push = issues.push;
          items = [];
          HermesBuiltin.arraySpread(closure_1_5.prefixIssues(tmp, runResult.issues), 0);
          HermesBuiltin.apply(items, issues);
        }
        const obj = { value: issues.value[issues.property], issues: [] };
      };
    });
    exports.$ZodCheckProperties = fnResult.$constructor("$ZodCheckProperties", (_zod, arg1) => {
      _exports = _zod;
      closure_1 = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      closure_5.hide(_zod, Symbol.iterator, function* () {
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
            if (0 === c1) {
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                c1 = 1;
                c0 = 1;
                const obj4 = { value, done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c0 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp5) {
            c0 = tmp;
            throw tmp5;
          }
        }
      });
      _zod._zod.check = (value) => {
        inst = value;
        if (null != value.value) {
          if (dependencyMap == null) {
            const _Reflect = Reflect;
            dependencyMap = Reflect.ownKeys(closure_1.shape).map((item) => {
              items = [item, closure_1_1.shape[item]];
              return items;
            });
            const ownKeysResult = Reflect.ownKeys(closure_1.shape);
          }
          dependencyMap = value.value;
          function _loop(keys) {
            value = keys;
            _zod = _zod._zod;
            const runResult = _zod.run({ value: value2[keys], issues: [] }, {});
            if (runResult instanceof Promise) {
              if (closure_1 == null) {
                closure_1 = [];
              }
              closure_1.push(
                runResult.then((issues) => {
                  if (issues.issues.length) {
                    issues = keys.issues;
                    const push = issues.push;
                    items = [];
                    HermesBuiltin.arraySpread(closure_5.prefixIssues(tmp, issues.issues), 0);
                    HermesBuiltin.apply(items, issues);
                  }
                }),
              );
            } else if (runResult.issues.length) {
              let issues = value.issues;
              let push = issues.push;
              items = [];
              HermesBuiltin.arraySpread(closure_2_5.prefixIssues(keys, runResult.issues), 0);
              HermesBuiltin.apply(items, issues);
            }
            const obj = { value: value2[keys], issues: [] };
          }
          const tmp8 = dependencyMap[Symbol.iterator]();
          while (tmp8 !== undefined) {
            let tmp13 = closure_1(tmp10, 2);
            let _zod = tmp13[1];
            let _loopResult = _loop(tmp13[0]);
            continue;
          }
          let nextPromise;
          if (closure_1) {
            nextPromise = Promise.all(closure_1).then(() => {});
            const allPromises = Promise.all(closure_1);
          }
          return nextPromise;
        } else {
          let issues = value.issues;
          let obj = { expected: "object", code: "invalid_type", input: value.value, inst };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCheckMimeType = fnResult.$constructor("$ZodCheckMimeType", (_zod, mime) => {
      const inst = _zod;
      const $ZodCheck = exports.$ZodCheck;
      $ZodCheck.init(_zod, mime);
      const set = new Set(mime.mime);
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
                  const obj = {
                    value,
                    writable: false,
                    enumerable: ownPropertyDescriptor.enumerable,
                    configurable: false,
                  };
                  Object.defineProperty(exports, ownPropertyNames[num], obj);
                }
              } catch (err) {}
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
