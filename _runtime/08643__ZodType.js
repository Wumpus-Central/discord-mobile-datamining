// _runtime/08643__ZodType.js
import NEVER2 from "08639_NEVER.js";
import _parse from "08640__parse.js";
import $ZodCheck2 from "08644__ZodCheck.js";
import cuid2 from "08645_cuid.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import _asyncToGenerator from "metro/00005__asyncToGenerator.js";
import captureStackTrace from "08642_captureStackTrace.js";

const require = globalThis.__r;
let _exports, _self, c1, c2, hasOwnProperty, keyType, map, set;

const f97931 = (arg0) => {
  let str = "/";
  if ("-" === arg0) {
    str = "+";
  }
  return str;
};
const f97936 = (issues) => {
  issues = issues.issues;
  return issues.map((item) => closure_2_10.finalizeIssue(item, closure_1_0, closure_2_8.config()));
};
let self = this;
function isValidBase64(value) {
  if ("" === value) {
    return true;
  } else if (value.length % 4 !== 0) {
    return false;
  } else {
    try {
      const _atob = atob;
      atob(value);
      return true;
    } catch (err) {
      return false;
    }
  }
}
function isValidJWT(value) {
  let alg;
  let tmp = alg;
  if (alg === undefined) {
    tmp = null;
  }
  try {
    const parts = value.split(".");
    if (3 !== parts.length) {
      return false;
    } else {
      const first = _slicedToArray(tmp3, 1)[0];
      const tmp19 = first;
      if (tmp19) {
        const _JSON = JSON;
        const _atob = atob;
        const parsed = JSON.parse(atob(first));
        let tmp7 = !("typ" in parsed);
        if (!tmp7) {
          let typ;
          if (parsed != null) {
            typ = tmp6.typ;
          }
          tmp7 = "JWT" === typ;
        }
        if (tmp7) {
          alg = tmp6.alg;
          if (alg) {
            let tmp13 = !tmp;
            if (!tmp13) {
              tmp13 = "alg" in tmp6 && parsed.alg === tmp;
              const tmp15 = "alg" in tmp6 && parsed.alg === tmp;
            }
            alg = tmp13;
          }
          tmp7 = alg;
        }
        return tmp7;
      } else {
        return false;
      }
    }
  } catch (err) {
    return false;
  }
}
function normalizeDef(shape) {
  let optionalKeysResult;
  const keys = Object.keys(shape.shape);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    shape = shape.shape;
    let hasItem;
    if (shape != null) {
      let tmp5 = shape[tmp2];
      if (tmp5 != null) {
        let _zod = tmp5._zod;
        if (_zod != null) {
          let traits = _zod.traits;
          if (traits != null) {
            hasItem = traits.has("$ZodType");
          }
        }
      }
    }
    if (hasItem) {
      continue;
    } else {
      let _Error = Error;
      let _HermesInternal = HermesInternal;
      let str = '": expected a Zod schema';
      let str2 = 'Invalid element at key "';
      let self = this;
      let self2 = this;
      let error = new Error('Invalid element at key "' + tmp2 + '": expected a Zod schema');
      throw error;
    }
  }
  const obj = { keys, keySet: new Set(keys), numKeys: keys.length, optionalKeys: new Set(optionalKeysResult) };
  optionalKeysResult = captureStackTrace.optionalKeys(shape.shape);
  const merged = Object.assign(shape);
  new Set(keys);
  new Set(optionalKeysResult);
  return obj;
}
function handleCatchall(items, value, tmp11Result, arg3, value2, inst) {
  let closure_0 = value;
  let iter = tmp11Result;
  let closure_1 = tmp11Result;
  items = [];
  const keySet = value2.keySet;
  const _zod = value2.catchall._zod;
  let closure_2 = tmp3;
  for (const key10019 in value) {
    if (keySet.has(key10019)) {
      continue;
    } else {
      if ("never" === tmp2) {
        let arr = items.push(key10019);
        continue;
      } else {
        let obj2 = { value: value[key10019], issues: [] };
        let runResult = _zod.run(obj2, arg3);
        let _Promise2 = Promise;
        if (runResult instanceof Promise) {
          let arr2 = items.push(
            runResult.then((issues) => {
              if (issues.issues.length) {
                if (!closure_2) {
                  issues = _exports.issues;
                  const push = issues.push;
                  const items = [];
                  HermesBuiltin.arraySpread(items, captureStackTrace.prefixIssues(key10019, issues.issues), 0);
                  HermesBuiltin.apply(push, items, issues);
                }
              }
              if (undefined === issues.value) {
                if (key10019 in require) {
                  _exports.value[key10019] = undefined;
                }
              } else {
                _exports.value[key10019] = issues.value;
              }
            }),
          );
          continue;
        } else {
          if (runResult.issues.length) {
            if (!tmp3) {
              let issues = iter.issues;
              let push = issues.push;
              let items1 = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(
                items1,
                captureStackTrace.prefixIssues(key10019, runResult.issues),
                0,
              );
              let applyResult = HermesBuiltin.apply(push, items1, issues);
            }
            continue;
          }
          if (undefined === runResult.value) {
            if (!(key10019 in value)) {
              continue;
            } else {
              iter.value[key10019] = undefined;
              continue;
            }
            continue;
          } else {
            iter.value[key10019] = runResult.value;
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
    continue;
  }
  if (items.length) {
    const issues1 = iter.issues;
    const obj = { code: "unrecognized_keys", keys: items, input: value, inst };
    issues1.push(obj);
  }
  if (items.length) {
    const allPromises = Promise.all(items);
    iter = allPromises.then(() => _exports);
  }
  return iter;
}
function handleUnionResults(arr, issues, inst, arg3) {
  let first;
  let closure_0 = arg3;
  const iter = arr[Symbol.iterator]();
  const iter2 = iter.next();
  while (iter !== undefined) {
    if (0 === iter2.issues.length) {
      issues.value = iter2.value;
      iter.return();
      return issues;
    }
  }
  const found = arr.filter((item) => !captureStackTrace.aborted(item));
  if (1 === found.length) {
    issues.value = found[0].value;
    first = found[0];
  } else {
    issues = issues.issues;
    const push = issues.push;
    const obj = {
      code: "invalid_union",
      input: issues.value,
      inst,
      errors: arr.map((issues) => {
        issues = issues.issues;
        return issues.map((item) => captureStackTrace.finalizeIssue(item, closure_1_0, NEVER.config()));
      }),
    };
    arr = push(obj);
    first = issues;
  }
  return first;
}
function handleExclusiveUnionResults(arr, issues, inst, arg3) {
  let closure_0 = arg3;
  const found = arr.filter((issues) => 0 === issues.issues.length);
  if (1 === found.length) {
    issues.value = found[0].value;
  } else if (0 === found.length) {
    issues = issues.issues;
    const push = issues.push;
    const obj2 = { code: "invalid_union", input: issues.value, inst, errors: arr.map(f97936) };
    arr = push(obj2);
  } else {
    const issues1 = issues.issues;
    const obj = { code: "invalid_union", input: issues.value, inst, errors: [], inclusive: false };
    issues1.push(obj);
  }
  return issues;
}
function mergeValues(value, value2) {
  let items;
  let items2;
  if (value === value2) {
    return { valid: true, data: value };
  } else {
    const _Date2 = Date;
    if (value instanceof Date) {
      const _Date = Date;
      if (value2 instanceof Date) {
        if (+value === +value2) {
          return { valid: true, data: value };
        }
      }
    }
    if (captureStackTrace.isPlainObject(value)) {
      if (captureStackTrace.isPlainObject(value2)) {
        const _Object = Object;
        let closure_0 = Object.keys(value2);
        const _Object2 = Object;
        const keys = Object.keys(value);
        const found = keys.filter((item) => -1 !== closure_0.indexOf(item));
        const obj4 = {};
        const merged = Object.assign(value);
        const merged1 = Object.assign(value2);
        const iter = found[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp19 = nextResult;
          let tmp21 = mergeValues(value[nextResult], value2[nextResult]);
          let tmp22 = tmp21;
          if (tmp21.valid) {
            obj4[tmp19] = tmp22.data;
            continue;
          } else {
            let obj5 = { valid: false, mergeErrorPath: items };
            items = [tmp19];
            let arraySpreadResult = HermesBuiltin.arraySpread(items, tmp22.mergeErrorPath, 1);
            iter.return();
            return obj5;
          }
        }
        return { valid: true, data: obj4 };
      }
    }
    const _Array = Array;
    if (Array.isArray(value)) {
      const _Array2 = Array;
      if (Array.isArray(value2)) {
        if (value.length !== value2.length) {
          return { valid: false, mergeErrorPath: [] };
        } else {
          const items1 = [];
          let num2 = 0;
          if (0 < value.length) {
            const tmp3 = mergeValues(value[num2], value2[num2]);
            while (tmp3.valid) {
              let arr = items1.push(tmp3.data);
              num2 = num2 + 1;
            }
            const obj8 = { valid: false, mergeErrorPath: items2 };
            items2 = [num2];
            HermesBuiltin.arraySpread(items2, tmp3.mergeErrorPath, 1);
            return obj8;
          }
          return { valid: true, data: items1 };
        }
      }
    }
    return { valid: false, mergeErrorPath: [] };
  }
}
function handleIntersectionResults(nextPromise, runResult, runResult1) {
  let tmp;
  map = new Map();
  const iter = runResult.issues[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if ("unrecognized_keys" === nextResult.code) {
      if (tmp == null) {
        tmp = nextResult;
      }
      let keys = tmp3.keys;
      for (const item10035 of keys) {
        if (!map.has(item10035)) {
          let result = map.set(item10035, {});
        }
        map.get(item10035).l = true;
        continue;
      }
    } else {
      let issues1 = nextPromise.issues;
      let arr = issues1.push(tmp3);
    }
    continue;
  }
  const issues = runResult1.issues;
  for (const item10054 of issues) {
    if ("unrecognized_keys" === item10054.code) {
      let keys2 = item10054.keys;
      for (const item10067 of keys2) {
        if (!map.has(item10067)) {
          let result1 = map.set(item10067, {});
        }
        map.get(item10067).r = true;
        continue;
      }
    } else {
      let issues2 = nextPromise.issues;
      let arr2 = issues2.push(item10054);
    }
    continue;
  }
  const items = [...map];
  const found = items.filter((item) => {
    let tmp;
    [, tmp] = item;
    return tmp.l && tmp.r;
  });
  const mapped = found.map((item) => {
    let tmp;
    [tmp] = item;
    return tmp;
  });
  const tmp24 = mapped.length && tmp;
  if (tmp24) {
    const issues3 = nextPromise.issues;
    const push = issues3.push;
    const obj = { keys: mapped };
    const merged = Object.assign(tmp);
    push(obj);
  }
  if (captureStackTrace.aborted(nextPromise)) {
    return nextPromise;
  } else {
    const tmp30 = mergeValues(runResult.value, runResult1.value);
    if (tmp30.valid) {
      nextPromise.value = tmp30.data;
      return nextPromise;
    } else {
      const _Error = Error;
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("Unmergable intersection. Error path: " + JSON.stringify(tmp30.mergeErrorPath));
      throw error;
    }
  }
}
function handleTupleResult(promise, nextPromise, key10019) {
  if (promise.issues.length) {
    const issues = nextPromise.issues;
    const push = issues.push;
    const items = [];
    HermesBuiltin.arraySpread(items, captureStackTrace.prefixIssues(key10019, promise.issues), 0);
    HermesBuiltin.apply(push, items, issues);
  }
  nextPromise.value[key10019] = promise.value;
}
function handleMapResult(issues, issues2, issues3, key, value, inst, arg6) {
  let issues1;
  let closure_0 = arg6;
  if (issues.issues.length) {
    const propertyKeyTypes = captureStackTrace.propertyKeyTypes;
    issues = issues3.issues;
    const push = issues.push;
    if (propertyKeyTypes.has(typeof key)) {
      const items = [];
      HermesBuiltin.arraySpread(items, captureStackTrace.prefixIssues(key, issues.issues), 0);
      HermesBuiltin.apply(push, items, issues);
    } else {
      const obj2 = {
        code: "invalid_key",
        origin: "map",
        input: value,
        inst,
        issues: issues1.map((item) => captureStackTrace.finalizeIssue(item, closure_0, NEVER.config())),
      };
      issues1 = issues.issues;
      push(obj2);
    }
  }
  if (issues2.issues.length) {
    const propertyKeyTypes2 = captureStackTrace.propertyKeyTypes;
    issues2 = issues3.issues;
    const push2 = issues2.push;
    if (propertyKeyTypes2.has(typeof key)) {
      const items1 = [];
      HermesBuiltin.arraySpread(items1, captureStackTrace.prefixIssues(key, issues2.issues), 0);
      HermesBuiltin.apply(push2, items1, issues2);
    } else {
      const obj4 = {
        origin: "map",
        code: "invalid_element",
        input: value,
        inst,
        key,
        issues: issues3.map((item) => captureStackTrace.finalizeIssue(item, closure_0, NEVER.config())),
      };
      issues3 = issues2.issues;
      push2(obj4);
    }
  }
  value = issues3.value;
  const result = value.set(issues.value, issues2.value);
}
function handleSetResult(promise, nextPromise) {
  if (promise.issues.length) {
    const issues = nextPromise.issues;
    const push = issues.push;
    const items = [];
    HermesBuiltin.arraySpread(items, promise.issues, 0);
    HermesBuiltin.apply(push, items, issues);
  }
  const value = nextPromise.value;
  value.add(promise.value);
}
function handleCodecAResult(issues, transform, direction) {
  let closure_1 = transform;
  let closure_2 = direction;
  if (issues.issues.length) {
    issues.aborted = true;
    return issues;
  } else {
    const tmp = direction.direction || "forward";
    if ("forward" === tmp) {
      let nextPromise;
      const transformResult = transform.transform(issues.value, issues);
      if (transformResult instanceof Promise) {
        nextPromise = transformResult.then((value) => {
          let runResult;
          if (issues.issues.length) {
            issues.aborted = true;
            runResult = issues;
          } else {
            const _zod = tmp2._zod;
            const obj = { value, issues: issues.issues };
            runResult = _zod.run(obj, tmp3);
          }
          return runResult;
        });
      } else if (issues.issues.length) {
        issues.aborted = true;
        nextPromise = issues;
      } else {
        const _zod2 = tmp5._zod;
        const obj2 = { value: transformResult, issues: issues.issues };
        nextPromise = _zod2.run(obj2, direction);
      }
      return nextPromise;
    } else {
      let nextPromise1;
      const reverseTransformResult = transform.reverseTransform(issues.value, issues);
      if (reverseTransformResult instanceof Promise) {
        nextPromise1 = reverseTransformResult.then((value) => {
          let runResult;
          if (issues.issues.length) {
            issues.aborted = true;
            runResult = issues;
          } else {
            const _zod = tmp2._zod;
            const obj = { value, issues: issues.issues };
            runResult = _zod.run(obj, tmp3);
          }
          return runResult;
        });
      } else if (issues.issues.length) {
        issues.aborted = true;
        nextPromise1 = issues;
      } else {
        let _zod = tmp2._zod;
        let obj = { value: reverseTransformResult, issues: issues.issues };
        nextPromise1 = _zod.run(obj, direction);
      }
      return nextPromise1;
    }
  }
}
function handleReadonlyResult(value) {
  value.value = Object.freeze(value.value);
  return value;
}
let tmp = this && self.__createBinding;
if (!tmp) {
  let tmp2 = globalThis;
  let _Object = Object;
  tmp = Object.create
    ? (arg0, __esModule, arg2, arg3) => {
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
      }
    : (arg0, arg1, arg2, arg3) => {
        let tmp = arg3;
        if (undefined === arg3) {
          tmp = arg2;
        }
        arg0[tmp] = arg1[arg2];
      };
}
let closure_5 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  let _Object2 = Object;
  tmp3 = Object.create
    ? (arg0, value) => {
        const obj = { enumerable: true, value };
        Object.defineProperty(arg0, "default", obj);
      }
    : (arg0, arg1) => {
        arg0.default = arg1;
      };
}
let closure_6 = tmp3;
let tmp5 =
  (self && self.__importStar) ||
  ((__esModule) => {
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
          let tmp6 = closure_5(obj, __esModule, key10009);
          continue;
        }
        continue;
      }
    }
    closure_6(obj, __esModule);
    return obj;
  });
function isValidBase64URL(str) {
  const base64url = cuid.base64url;
  if (base64url.test(str)) {
    const replaced = str.replace(/[-_]/g, f97931);
    const _Math = Math;
    return isValidBase64(replaced.padEnd(4 * Math.ceil(replaced.length / 4), "="));
  } else {
    return false;
  }
}
let $ZodCheck = tmp5($ZodCheck2);
let NEVER = tmp5(NEVER2);
const cuid = tmp5(cuid2);

export { isValidBase64 };
export { isValidBase64URL };
export { isValidJWT };
export const $ZodType = NEVER.$constructor("$ZodType", (_default, def) => {
  let runChecks;
  let tmp = _default;
  let obj = _default;
  if (_default == null) {
    obj = {};
    tmp = obj;
  }
  tmp._zod.def = def;
  let bag = tmp._zod.bag;
  let _zod = tmp._zod;
  if (!bag) {
    bag = {};
  }
  _zod.bag = bag;
  tmp._zod.version = obj(runChecks[6]).version;
  let checks = tmp._zod.def.checks;
  if (checks == null) {
    checks = [];
  }
  const items = [...checks];
  const traits = tmp._zod.traits;
  if (traits.has("$ZodCheck")) {
    items.unshift(tmp);
  }
  for (const item10034 of items) {
    let onattach = item10034._zod.onattach;
    let tmp3 = onattach;
    let tmp4 = onattach;
    for (const item10041 of onattach) {
      let item10041Result = item10041(tmp);
      continue;
    }
    continue;
  }
  if (0 === items.length) {
    let _zod2 = tmp._zod;
    if (_zod2.deferred == null) {
      _zod2.deferred = [];
    }
    const deferred = tmp._zod.deferred;
    if (deferred != null) {
      deferred.push(() => {
        obj._zod.run = obj._zod.parse;
      });
    }
  } else {
    runChecks = function runChecks(parsed1, items, skipChecks) {
      let nextPromise = parsed1;
      let closure_0 = parsed1;
      let closure_3 = closure_10.aborted(parsed1);
      function _loop() {
        if (closure_4._zod.def.when) {
          const def = closure_4._zod.def;
          const tmp3 = length;
          if (!def.when(length)) {
            return 0;
          }
        } else {
          const tmp2 = closure_3;
          if (tmp2) {
            return 0;
          }
        }
        const _zod = closure_4._zod;
        const checkResult = _zod.check(length);
        skipChecks = checkResult;
        if (checkResult instanceof Promise) {
          let async;
          if (skipChecks != null) {
            async = skipChecks.async;
          }
          if (false === async) {
            const self = this;
            const self2 = this;
            ZodAsyncError = new ZodAsyncError.$ZodAsyncError();
            throw ZodAsyncError;
          }
        }
        let tmp8 = closure_2;
        if (!tmp8) {
          if (!(checkResult instanceof Promise)) {
            if (length.issues.length === length.issues.length) {
              return 0;
            } else {
              const tmp9 = closure_3;
              if (!tmp9) {
                closure_3 = closure_1_10.aborted(tmp4, length);
              }
            }
          }
        }
        let resolved = closure_2;
        if (closure_2 == null) {
          resolved = Promise.resolve();
        }
        closure_2 = resolved.then(
          closure_4(function* () {
            if (c2 === 2) {
              c2 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                let issues;
                c2 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    issues = tmp3;
                    c1 = 1;
                    c2 = 1;
                    const obj4 = { value: checkResult, done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  if (issues.issues.length !== closure_128_0) {
                    const tmp8 = closure_3;
                    if (!tmp8) {
                      closure_3 = closure_2_10.aborted(issues, closure_128_0);
                    }
                  }
                  c2 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp12) {
                c2 = 3;
                throw tmp12;
              }
            }
          }),
        );
      }
      const iter = items[Symbol.iterator]();
      while (iter !== undefined) {
        let closure_4 = iter.next();
        let _loopResult = _loop();
        continue;
      }
      if (runChecks) {
        nextPromise = runChecks.then(() => parsed1);
      }
      return nextPromise;
    };
    function handleCanaryResult(arg0, arg1, arg2) {}
    tmp._zod.run = function (value, skipChecks) {
      const f139220 = (result) => {
        _zod = _zod._zod;
        return _zod.parse(result, closure_0);
      };
      let closure_0 = value;
      if (skipChecks.skipChecks) {
        const _zod4 = closure_0._zod;
        return _zod4.parse(value, skipChecks);
      } else if ("backward" === skipChecks.direction) {
        let nextPromise;
        const _zod2 = closure_0._zod;
        obj = { value: value.value, issues: [] };
        const parse = _zod2.parse;
        const obj2 = { skipChecks: true };
        const merged = Object.assign(skipChecks);
        const parsed = parse(obj, obj2);
        const tmp8 = closure_0;
        if (parsed instanceof Promise) {
          nextPromise = parsed.then(function (result) {
            if (typeof handleCanaryResult === "function") {
              let nextPromise;
              let _zod = skipChecks;
              if (closure_1_10.aborted(result)) {
                result.aborted = true;
                nextPromise = result;
              } else {
                const promise = runChecks(tmp, items, skipChecks);
                if (promise instanceof Promise) {
                  if (false === skipChecks.async) {
                    const self = this;
                    const self2 = this;
                    ZodAsyncError = new ZodAsyncError.$ZodAsyncError();
                    throw ZodAsyncError;
                  } else {
                    nextPromise = promise.then(f139220);
                  }
                } else {
                  _zod = obj._zod;
                  nextPromise = _zod.parse(promise, skipChecks);
                }
              }
              return nextPromise;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
        } else if (typeof handleCanaryResult === "function") {
          closure_0 = skipChecks;
          if (captureStackTrace.aborted(parsed)) {
            parsed.aborted = true;
            nextPromise = parsed;
          } else {
            const promise3 = runChecks(value, skipChecks, skipChecks);
            if (promise3 instanceof Promise) {
              if (false === skipChecks.async) {
                const self3 = this;
                const self4 = this;
                let ZodAsyncError = new NEVER.$ZodAsyncError();
                throw ZodAsyncError;
              } else {
                nextPromise = promise3.then(f139220);
              }
            } else {
              const _zod3 = tmp8._zod;
              nextPromise = _zod3.parse(promise3, skipChecks);
            }
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        return nextPromise;
      } else {
        const tmp = closure_0;
        let _zod = closure_0._zod;
        const parsed1 = _zod.parse(value, skipChecks);
        if (parsed1 instanceof Promise) {
          if (false === skipChecks.async) {
            let self = this;
            let self2 = this;
            const ZodAsyncError1 = new NEVER.$ZodAsyncError();
            throw ZodAsyncError1;
          } else {
            return parsed1.then((result) => runChecks(result, items, skipChecks));
          }
        } else {
          return runChecks(parsed1, skipChecks, skipChecks);
        }
      }
    };
  }
  captureStackTrace.defineLazy(tmp, "~standard", () => {
    obj = {
      validate(arg0) {
        try {
          const safeParseResult = obj(runChecks[7]).safeParse(closure_1_0, arg0);
          if (safeParseResult.success) {
            let obj2 = { value: safeParseResult.data };
            obj = obj2;
          } else {
            let error = tmp5.error;
            let issues;
            if (error != null) {
              issues = error.issues;
            }
            obj = { issues };
          }
          return obj;
        } catch (err) {
          const safeParseAsyncResult = obj(runChecks[7]).safeParseAsync(closure_1_0, arg0);
          return safeParseAsyncResult.then((success) => {
            if (success.success) {
              obj = { value: success.data };
              const obj2 = { value: success.data };
            } else {
              const error = success.error;
              let issues;
              if (error != null) {
                issues = error.issues;
              }
              obj = { issues };
            }
            return obj;
          });
        }
      },
      vendor: "zod",
      version: 1,
    };
    return obj;
  });
});
export const clone = require("captureStackTrace").clone;
export const $ZodString = NEVER.$constructor("$ZodString", (_zod, arg1) => {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  let patterns;
  _zod = _zod._zod;
  if (_zod != null) {
    const bag = _zod._zod.bag;
    if (bag != null) {
      patterns = bag.patterns;
    }
  }
  if (patterns == null) {
    patterns = [];
  }
  const items = [...patterns];
  let arr = items.pop();
  if (arr == null) {
    arr = cuid.string(_zod._zod.bag);
  }
  _zod.pattern = arr;
  _zod._zod.parse = (value, arg1) => {
    if (coerce.coerce) {
      try {
        const _String = String;
        value.value = String(value.value);
      } catch (err) {}
    }
    if (typeof value.value !== "string") {
      const issues = value.issues;
      const obj = { expected: "string", code: "invalid_type", input: value.value, inst };
      issues.push(obj);
    }
    return value;
  };
});
export const $ZodStringFormat = NEVER.$constructor("$ZodStringFormat", (arg0, arg1) => {
  const $ZodCheckStringFormat = $ZodCheck.$ZodCheckStringFormat;
  $ZodCheckStringFormat.init(arg0, arg1);
  const $ZodString = exports.$ZodString;
  $ZodString.init(arg0, arg1);
});
export const $ZodGUID = NEVER.$constructor("$ZodGUID", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.guid;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodUUID = NEVER.$constructor("$ZodUUID", function (arg0, version) {
  if (version.version) {
    const tmp3 = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[version.version];
    if (undefined === tmp3) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error('Invalid UUID version: "' + version.version + '"');
      throw error;
    } else if (version.pattern == null) {
      version.pattern = cuid.uuid(tmp3);
    }
  } else if (version.pattern == null) {
    version.pattern = cuid.uuid();
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, version);
});
export const $ZodEmail = NEVER.$constructor("$ZodEmail", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.email;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodURL = NEVER.$constructor("$ZodURL", (_zod, arg1) => {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(_zod, arg1);
  _zod._zod.check = function (value) {
    try {
      const str = value.value;
      const trimmed = str.trim();
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(trimmed);
      const url = uRL;
      const url2 = closure_1;
      if (closure_1.hostname) {
        url2.hostname.lastIndex = 0;
        const hostname = url2.hostname;
        if (!hostname.test(url.hostname)) {
          const issues = value.issues;
          const obj = {
            code: "invalid_format",
            format: "url",
            note: "Invalid hostname",
            pattern: url2.hostname.source,
            input: value.value,
            inst,
            continue: !url2.abort,
          };
          issues.push(obj);
        }
      }
      if (url2.protocol) {
        let substr;
        url2.protocol.lastIndex = 0;
        const protocol = url2.protocol;
        const protocol2 = url.protocol;
        const test = protocol.test;
        const protocol1 = url.protocol;
        if (protocol2.endsWith(":")) {
          substr = protocol1.slice(0, -1);
        } else {
          substr = protocol1;
        }
        if (!test(substr)) {
          const issues1 = value.issues;
          const obj2 = {
            code: "invalid_format",
            format: "url",
            note: "Invalid protocol",
            pattern: url2.protocol.source,
            input: value.value,
            inst,
            continue: !url2.abort,
          };
          issues1.push(obj2);
        }
      }
      if (url2.normalize) {
        const href = uRL.href;
        value.value = href;
      } else {
        value.value = trimmed;
      }
    } catch (err) {
      const issues2 = value.issues;
      const obj3 = { code: "invalid_format", format: "url", input: value.value, inst, continue: !closure_1.abort };
      issues2.push(obj3);
    }
  };
});
export const $ZodEmoji = NEVER.$constructor("$ZodEmoji", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.emoji();
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodNanoID = NEVER.$constructor("$ZodNanoID", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.nanoid;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodCUID = NEVER.$constructor("$ZodCUID", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.cuid;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodCUID2 = NEVER.$constructor("$ZodCUID2", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.cuid2;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodULID = NEVER.$constructor("$ZodULID", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.ulid;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodXID = NEVER.$constructor("$ZodXID", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.xid;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodKSUID = NEVER.$constructor("$ZodKSUID", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.ksuid;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodISODateTime = NEVER.$constructor("$ZodISODateTime", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.datetime(pattern);
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodISODate = NEVER.$constructor("$ZodISODate", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.date;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodISOTime = NEVER.$constructor("$ZodISOTime", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.time(pattern);
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodISODuration = NEVER.$constructor("$ZodISODuration", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.duration;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodIPv4 = NEVER.$constructor("$ZodIPv4", (_zod, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.ipv4;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(_zod, pattern);
  _zod._zod.bag.format = "ipv4";
});
export const $ZodIPv6 = NEVER.$constructor("$ZodIPv6", (_zod, pattern) => {
  let closure_0 = _zod;
  let closure_1 = pattern;
  if (pattern.pattern == null) {
    pattern.pattern = cuid.ipv6;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(_zod, pattern);
  _zod._zod.bag.format = "ipv6";
  _zod._zod.check = function (value) {
    try {
      const _URL = URL;
      const _HermesInternal = HermesInternal;
      const self = this;
      const uRL = new URL("http://[" + value.value + "]");
    } catch (err) {
      const issues = value.issues;
      const obj = { code: "invalid_format", format: "ipv6", input: value.value, inst, continue: !abort.abort };
      issues.push(obj);
    }
  };
});
export const $ZodMAC = NEVER.$constructor("$ZodMAC", (_zod, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.mac(pattern.delimiter);
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(_zod, pattern);
  _zod._zod.bag.format = "mac";
});
export const $ZodCIDRv4 = NEVER.$constructor("$ZodCIDRv4", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.cidrv4;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodCIDRv6 = NEVER.$constructor("$ZodCIDRv6", (_zod, pattern) => {
  const inst = _zod;
  _exports = pattern;
  if (pattern.pattern == null) {
    pattern.pattern = cuid.cidrv6;
  }
  const $ZodStringFormat = _exports.$ZodStringFormat;
  $ZodStringFormat.init(_zod, pattern);
  _zod._zod.check = function (value) {
    let tmp21;
    let tmp22;
    const str = value.value;
    const parts = str.split("/");
    try {
      if (2 !== parts.length) {
        const _Error4 = Error;
        const self8 = this;
        const self9 = this;
        const error = new Error();
        throw error;
      } else {
        [tmp21, tmp22] = parts;
        _slicedToArray(parts, 2);
        if (tmp22) {
          const _Number = Number;
          const NumberResult = Number(tmp22);
          const _HermesInternal = HermesInternal;
          if ("" + NumberResult !== tmp22) {
            const _Error3 = Error;
            const self6 = this;
            const self7 = this;
            const error1 = new Error();
            throw error1;
          } else {
            if (NumberResult >= 0) {
              if (NumberResult <= 128) {
                const _URL = URL;
                const _HermesInternal2 = HermesInternal;
                const self3 = this;
                const uRL = new URL("http://[" + tmp21 + "]");
              }
            }
            const _Error2 = Error;
            const self4 = this;
            const self5 = this;
            const error2 = new Error();
            throw error2;
          }
        } else {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error3 = new Error();
          throw error3;
        }
      }
    } catch (err) {
      const issues = value.issues;
      const obj = { code: "invalid_format", format: "cidrv6", input: value.value, inst, continue: !pattern.abort };
      issues.push(obj);
    }
  };
});
export const $ZodBase64 = NEVER.$constructor("$ZodBase64", (_zod, pattern) => {
  const inst = _zod;
  _exports = pattern;
  if (pattern.pattern == null) {
    pattern.pattern = cuid.base64;
  }
  const $ZodStringFormat = _exports.$ZodStringFormat;
  $ZodStringFormat.init(_zod, pattern);
  _zod._zod.bag.contentEncoding = "base64";
  _zod._zod.check = (value) => {
    if (!isValidBase64(value.value)) {
      const issues = value.issues;
      const obj = { code: "invalid_format", format: "base64", input: value.value, inst, continue: !pattern.abort };
      issues.push(obj);
    }
  };
});
export const $ZodBase64URL = NEVER.$constructor("$ZodBase64URL", (_zod, pattern) => {
  const inst = _zod;
  _exports = pattern;
  if (pattern.pattern == null) {
    pattern.pattern = cuid.base64url;
  }
  const $ZodStringFormat = _exports.$ZodStringFormat;
  $ZodStringFormat.init(_zod, pattern);
  _zod._zod.bag.contentEncoding = "base64url";
  _zod._zod.check = (value) => {
    let str = value.value;
    const base64url = cuid.base64url;
    let flag = false;
    if (base64url.test(str)) {
      const replaced = str.replace(/[-_]/g, f97931);
      const _Math = Math;
      flag = isValidBase64(replaced.padEnd(4 * Math.ceil(replaced.length / 4), "="));
    }
    if (!flag) {
      const issues = value.issues;
      const obj = { code: "invalid_format", format: "base64url", input: value.value, inst, continue: !pattern.abort };
      issues.push(obj);
    }
  };
});
export const $ZodE164 = NEVER.$constructor("$ZodE164", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.e164;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodJWT = NEVER.$constructor("$ZodJWT", (_zod, arg1) => {
  let alg;
  const inst = _zod;
  _exports = arg1;
  const $ZodStringFormat = _exports.$ZodStringFormat;
  $ZodStringFormat.init(_zod, arg1);
  _zod._zod.check = (value) => {
    if (!isValidJWT(value.value, alg.alg)) {
      const issues = value.issues;
      const obj = { code: "invalid_format", format: "jwt", input: value.value, inst, continue: !alg.abort };
      issues.push(obj);
    }
  };
});
export const $ZodCustomStringFormat = NEVER.$constructor("$ZodCustomStringFormat", (_zod, arg1) => {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(_zod, arg1);
  _zod._zod.check = (value) => {
    if (!closure_1.fn(value.value)) {
      const issues = value.issues;
      const obj = {
        code: "invalid_format",
        format: closure_1.format,
        input: value.value,
        inst,
        continue: !closure_1.abort,
      };
      issues.push(obj);
    }
  };
});
export const $ZodNumber = NEVER.$constructor("$ZodNumber", (_zod, arg1) => {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  let number = _zod._zod.bag.pattern;
  _zod = _zod._zod;
  if (number == null) {
    number = cuid.number;
  }
  _zod.pattern = number;
  _zod._zod.parse = (value, arg1) => {
    let obj3;
    if (coerce.coerce) {
      try {
        const _Number = Number;
        value.value = Number(value.value);
      } catch (err) {}
    }
    value = value.value;
    if (typeof value === "number") {
      const _Number4 = Number;
      if (!Number.isNaN(value)) {
        const _Number2 = Number;
        if (Number.isFinite(value)) {
          return value;
        }
      }
    }
    let tmp2;
    if (typeof value === "number") {
      const _Number5 = Number;
      let str2 = "NaN";
      if (!Number.isNaN(value)) {
        const _Number3 = Number;
        str2 = str;
      }
      tmp2 = str2;
    }
    const issues = value.issues;
    const push = issues.push;
    const obj = { expected: "number", code: "invalid_type", input: value, inst };
    if (tmp2) {
      obj3 = { received: tmp2 };
      const obj2 = { received: tmp2 };
    } else {
      obj3 = {};
    }
    const merged = Object.assign(obj3);
    push(obj);
    return value;
  };
});
export const $ZodNumberFormat = NEVER.$constructor("$ZodNumberFormat", (arg0, arg1) => {
  const $ZodCheckNumberFormat = $ZodCheck.$ZodCheckNumberFormat;
  $ZodCheckNumberFormat.init(arg0, arg1);
  const $ZodNumber = exports.$ZodNumber;
  $ZodNumber.init(arg0, arg1);
});
export const $ZodBoolean = NEVER.$constructor("$ZodBoolean", (_zod, arg1) => {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.pattern = cuid.boolean;
  _zod._zod.parse = (value, arg1) => {
    if (coerce.coerce) {
      try {
        const _Boolean = Boolean;
        value.value = Boolean(value.value);
      } catch (err) {}
    }
    value = value.value;
    if (typeof value !== "boolean") {
      const issues = value.issues;
      const obj = { expected: "boolean", code: "invalid_type", input: value, inst };
      issues.push(obj);
    }
    return value;
  };
});
export const $ZodBigInt = NEVER.$constructor("$ZodBigInt", (_zod, arg1) => {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.pattern = cuid.bigint;
  _zod._zod.parse = (value, arg1) => {
    if (coerce.coerce) {
      try {
        const _BigInt = BigInt;
        value.value = BigInt(value.value);
      } catch (err) {}
    }
    if (typeof value.value !== "bigint") {
      const issues = value.issues;
      const obj = { expected: "bigint", code: "invalid_type", input: value.value, inst };
      issues.push(obj);
    }
    return value;
  };
});
export const $ZodBigIntFormat = NEVER.$constructor("$ZodBigIntFormat", (arg0, arg1) => {
  const $ZodCheckBigIntFormat = $ZodCheck.$ZodCheckBigIntFormat;
  $ZodCheckBigIntFormat.init(arg0, arg1);
  const $ZodBigInt = exports.$ZodBigInt;
  $ZodBigInt.init(arg0, arg1);
});
export const $ZodSymbol = NEVER.$constructor("$ZodSymbol", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (value, arg1) => {
    value = value.value;
    if (typeof value !== "symbol") {
      const issues = value.issues;
      const obj = { expected: "symbol", code: "invalid_type", input: value, inst };
      issues.push(obj);
    }
    return value;
  };
});
export const $ZodUndefined = NEVER.$constructor("$ZodUndefined", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.pattern = cuid.undefined;
  const items = [undefined];
  _zod = _zod._zod;
  _zod.values = new Set(items);
  _zod._zod.optin = "optional";
  _zod._zod.optout = "optional";
  _zod._zod.parse = (value, arg1) => {
    value = value.value;
    if (undefined !== value) {
      const issues = value.issues;
      const obj = { expected: "undefined", code: "invalid_type", input: value, inst };
      issues.push(obj);
    }
    return value;
  };
  new Set(items);
});
export const $ZodNull = NEVER.$constructor("$ZodNull", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.pattern = cuid.null;
  _zod = _zod._zod;
  _zod.values = new Set([null]);
  _zod._zod.parse = (value, arg1) => {
    value = value.value;
    if (null !== value) {
      const issues = value.issues;
      const obj = { expected: "null", code: "invalid_type", input: value, inst };
      issues.push(obj);
    }
    return value;
  };
  new Set([null]);
});
export const $ZodAny = NEVER.$constructor("$ZodAny", (_zod, arg1) => {
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (arg0) => arg0;
});
export const $ZodUnknown = NEVER.$constructor("$ZodUnknown", (_zod, arg1) => {
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (arg0) => arg0;
});
export const $ZodNever = NEVER.$constructor("$ZodNever", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (input, arg1) => {
    const issues = input.issues;
    const obj = { expected: "never", code: "invalid_type", input: input.value, inst };
    issues.push(obj);
    return input;
  };
});
export const $ZodVoid = NEVER.$constructor("$ZodVoid", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (value, arg1) => {
    value = value.value;
    if (undefined !== value) {
      const issues = value.issues;
      const obj = { expected: "void", code: "invalid_type", input: value, inst };
      issues.push(obj);
    }
    return value;
  };
});
export const $ZodDate = NEVER.$constructor("$ZodDate", (_zod, arg1) => {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = function (value, arg1) {
    if (coerce.coerce) {
      try {
        const _Date = Date;
        const self = this;
        const self2 = this;
        value.value = new Date(value.value);
        const date = new Date(value.value);
      } catch (err) {}
    }
    value = value.value;
    let tmp5 = tmp4;
    if (tmp5) {
      const _Number = Number;
      tmp5 = !Number.isNaN(value.getTime());
    }
    if (!tmp5) {
      const issues = value.issues;
      const push = issues.push;
      const obj = { expected: "date", code: "invalid_type", input: value, inst };
      const tmp6 = value instanceof Date ? { received: "Invalid Date" } : {};
      const merged = Object.assign(tmp6);
      push(obj);
    }
    return value;
  };
});
export const $ZodArray = NEVER.$constructor("$ZodArray", (_zod, arg1) => {
  let element;
  let inst = _zod;
  _exports = arg1;
  const $ZodType = _exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (value, arg1) => {
    let iter = value;
    inst = value;
    value = value.value;
    if (Array.isArray(value)) {
      let num3;
      const _Array = Array;
      iter.value = Array(value.length);
      let items = [];
      for (let num3 = 0; num3 < value.length; num3 = num3 + 1) {
        let _zod = element.element._zod;
        let obj2 = { value: value[num3], issues: [] };
        let runResult = _zod.run(obj2, arg1);
        let _Promise = Promise;
        if (runResult instanceof Promise) {
          let arr = items.push(
            runResult.then((issues) => {
              if (issues.issues.length) {
                issues = inst.issues;
                const push = issues.push;
                const items = [];
                HermesBuiltin.arraySpread(items, captureStackTrace.prefixIssues(num3, issues.issues), 0);
                HermesBuiltin.apply(push, items, issues);
              }
              inst.value[num3] = issues.value;
            }),
          );
        } else {
          if (runResult.issues.length) {
            let issues = iter.issues;
            let push = issues.push;
            let items1 = [];
            let arraySpreadResult = HermesBuiltin.arraySpread(
              items1,
              captureStackTrace.prefixIssues(num3, runResult.issues),
              0,
            );
            let applyResult = HermesBuiltin.apply(push, items1, issues);
          }
          iter.value[num3] = runResult.value;
        }
      }
      if (items.length) {
        const allPromises = Promise.all(items);
        iter = allPromises.then(() => closure_0);
      }
      return iter;
    } else {
      const issues1 = iter.issues;
      const obj = { expected: "array", code: "invalid_type", input: value, inst };
      issues1.push(obj);
      return iter;
    }
  };
});
export const $ZodObject = NEVER.$constructor("$ZodObject", (_zod, shape) => {
  let inst = _zod;
  _exports = shape;
  const $ZodType = _exports.$ZodType;
  $ZodType.init(_zod, shape);
  const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(shape, "shape");
  let get;
  if (ownPropertyDescriptor != null) {
    get = ownPropertyDescriptor.get;
  }
  if (!get) {
    shape = shape.shape;
    const _Object = Object;
    let obj = {
      get() {
        const obj = {};
        const merged = Object.assign(shape);
        Object.defineProperty(closure_1, "shape", { value: obj });
        return obj;
      },
    };
    Object.defineProperty(shape, "shape", obj);
  }
  let closure_3 = captureStackTrace.cached(() => normalizeDef(shape));
  captureStackTrace.defineLazy(_zod._zod, "propValues", function () {
    shape = shape.shape;
    const obj = {};
    for (const key10008 in shape) {
      let _zod = shape[key10008]._zod;
      if (!_zod.values) {
        continue;
      } else {
        if (obj[key10008] == null) {
          let _Set = Set;
          let self = this;
          let self2 = this;
          set = new Set();
          obj[key10008] = set;
        }
        let values = _zod.values;
        for (const item10019 of values) {
          let obj2 = obj[key10008];
          let addResult = obj2.add(item10019);
          continue;
        }
      }
      continue;
    }
    return obj;
  });
  const isObject = captureStackTrace.isObject;
  const catchall = shape.catchall;
  _zod._zod.parse = (value, arg1) => {
    inst = value;
    let closure_1 = arg1;
    if (value == null) {
      value = closure_3.value;
    }
    value = value.value;
    if (isObject(value)) {
      let nextPromise;
      value.value = {};
      let items = [];
      shape = value.shape;
      const keys = value.keys;
      function _loop4(iter) {
        closure_1 = tmp3;
        const _zod = tmp2._zod;
        const obj = { value: value[iter], issues: [] };
        const runResult = _zod.run(obj, closure_1);
        if (runResult instanceof Promise) {
          items.push(
            runResult.then((issues) => {
              if (issues.issues.length) {
                if (!closure_1) {
                  issues = iter.issues;
                  const push = issues.push;
                  items = [];
                  HermesBuiltin.arraySpread(items, closure_3_10.prefixIssues(iter, issues.issues), 0);
                  HermesBuiltin.apply(push, items, issues);
                }
              }
              if (undefined === issues.value) {
                if (iter in value) {
                  iter.value[iter] = undefined;
                }
              } else {
                iter.value[iter] = issues.value;
              }
            }),
          );
        } else {
          if (runResult.issues.length) {
            if ("optional" !== shape[iter]._zod.optout) {
              let issues = iter.issues;
              let push = issues.push;
              items = [];
              HermesBuiltin.arraySpread(items, closure_1_10.prefixIssues(iter, runResult.issues), 0);
              HermesBuiltin.apply(push, items, issues);
            }
          }
          if (undefined === runResult.value) {
            if (iter in value) {
              iter.value[iter] = undefined;
            }
          } else {
            iter.value[iter] = runResult.value;
          }
        }
      }
      const iter = keys[Symbol.iterator]();
      while (iter !== undefined) {
        let _loop4Result = _loop4(iter.next());
        continue;
      }
      if (catchall) {
        nextPromise = handleCatchall(items, value, value, arg1, closure_3.value, inst);
      } else {
        nextPromise = value;
        if (items.length) {
          const allPromises = Promise.all(items);
          nextPromise = allPromises.then(() => closure_0);
        }
      }
      return nextPromise;
    } else {
      let issues = value.issues;
      let obj = { expected: "object", code: "invalid_type", input: value, inst };
      const tmp2 = inst;
      issues.push(obj);
      return value;
    }
  };
});
export const $ZodObjectJIT = NEVER.$constructor("$ZodObjectJIT", (_zod, catchall) => {
  const inst = _zod;
  _exports = catchall;
  const $ZodObject = _exports.$ZodObject;
  $ZodObject.init(_zod, catchall);
  const parse = _zod._zod.parse;
  captureStackTrace.cached(() => normalizeDef(catchall));
  const isObject = captureStackTrace.isObject;
  const jitless = NEVER.globalConfig.jitless;
  let value = !jitless;
  $ZodCheck = value;
  if (!jitless) {
    value = captureStackTrace.allowsEval.value;
  }
  NEVER = value;
  catchall = catchall.catchall;
  _zod._zod.parse = (value, arg1) => {
    let tmp4;
    if (value == null) {
      value = value.value;
    }
    value = value.value;
    if (isObject(value)) {
      let tmp5 = arg1;
      let tmp6 = value;
      if (tmp6) {
        const tmp7 = value;
        if (tmp7) {
          let async;
          if (arg1 != null) {
            async = arg1.async;
          }
          if (false === async) {
            let tmp10;
            if (true !== arg1.jitless) {
              let tmp11 = closure_2;
              if (!tmp11) {
                let num = 0;
                let tmp13 = ((shape) => {
                  let closure_0 = shape;
                  const doc = new closure_0(closure_2[8]).Doc(["shape", "payload", "ctx"]);
                  value = value.value;
                  function parseStr(nextResult) {
                    const escResult = closure_1_10.esc(nextResult);
                    return "shape[" + escResult + "]._zod.run({ value: input[" + escResult + "], issues: [] }, ctx)";
                  }
                  doc.write("const input = payload.value;");
                  const obj = Object.create(null);
                  let num = 0;
                  const tmp3 = value.keys[Symbol.iterator]();
                  while (tmp3 !== undefined) {
                    let tmp6 = +num;
                    num = tmp6 + 1;
                    obj[tmp4] = `key_${tmp6}`;
                    continue;
                  }
                  doc.write("const newResult = {};");
                  const iter = value.keys[Symbol.iterator]();
                  const nextResult = iter.next();
                  while (iter !== undefined) {
                    let tmp10 = obj[nextResult];
                    let tmp9 = nextResult;
                    let escResult = captureStackTrace.esc(nextResult);
                    let tmp13 = shape[nextResult];
                    let optout;
                    if (tmp13 != null) {
                      let _zod = tmp13._zod;
                      if (_zod != null) {
                        optout = _zod.optout;
                      }
                    }
                    let _HermesInternal = HermesInternal;
                    let str = "const ";
                    let str2 = " = ";
                    let str3 = ";";
                    let writeResult2 = doc.write("const " + tmp10 + " = " + parseStr(tmp9) + ";");
                    if ("optional" === optout) {
                      let _HermesInternal3 = HermesInternal;
                      let str14 = "\n        if (";
                      let str15 = ".issues.length) {\n          if (";
                      let str16 = " in input) {\n            payload.issues = payload.issues.concat(";
                      let str17 = ".issues.map(iss => ({\n              ...iss,\n              path: iss.path ? [";
                      let str18 = ", ...iss.path] : [";
                      let str19 = "]\n            })));\n          }\n        }\n        \n        if (";
                      let str20 = ".value === undefined) {\n          if (";
                      let str21 = " in input) {\n            newResult[";
                      let str22 = "] = undefined;\n          }\n        } else {\n          newResult[";
                      let str23 = "] = ";
                      let str24 = ".value;\n        }\n        \n      ";
                      let writeResult3 = doc.write(
                        "\n        if (" +
                          tmp10 +
                          ".issues.length) {\n          if (" +
                          escResult +
                          " in input) {\n            payload.issues = payload.issues.concat(" +
                          tmp10 +
                          ".issues.map(iss => ({\n              ...iss,\n              path: iss.path ? [" +
                          escResult +
                          ", ...iss.path] : [" +
                          escResult +
                          "]\n            })));\n          }\n        }\n        \n        if (" +
                          tmp10 +
                          ".value === undefined) {\n          if (" +
                          escResult +
                          " in input) {\n            newResult[" +
                          escResult +
                          "] = undefined;\n          }\n        } else {\n          newResult[" +
                          escResult +
                          "] = " +
                          tmp10 +
                          ".value;\n        }\n        \n      ",
                      );
                    } else {
                      let _HermesInternal2 = HermesInternal;
                      let str4 = "\n        if (";
                      let str5 = ".issues.length) {\n          payload.issues = payload.issues.concat(";
                      let str6 = ".issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [";
                      let str7 = ", ...iss.path] : [";
                      let str8 = "]\n          })));\n        }\n        \n        if (";
                      let str9 = ".value === undefined) {\n          if (";
                      let str10 = " in input) {\n            newResult[";
                      let str11 = "] = undefined;\n          }\n        } else {\n          newResult[";
                      let str12 = "] = ";
                      let str13 = ".value;\n        }\n        \n      ";
                      let writeResult4 = doc.write(
                        "\n        if (" +
                          tmp10 +
                          ".issues.length) {\n          payload.issues = payload.issues.concat(" +
                          tmp10 +
                          ".issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [" +
                          escResult +
                          ", ...iss.path] : [" +
                          escResult +
                          "]\n          })));\n        }\n        \n        if (" +
                          tmp10 +
                          ".value === undefined) {\n          if (" +
                          escResult +
                          " in input) {\n            newResult[" +
                          escResult +
                          "] = undefined;\n          }\n        } else {\n          newResult[" +
                          escResult +
                          "] = " +
                          tmp10 +
                          ".value;\n        }\n        \n      ",
                      );
                    }
                    continue;
                  }
                  doc.write("payload.value = newResult;");
                  doc.write("return payload;");
                  let closure_1 = doc.compile();
                  return (arg0, arg1) => closure_1(closure_0, arg0, arg1);
                })(catchall.shape);
                closure_2 = tmp13;
                tmp11 = tmp13;
              }
              const tmp11Result = tmp11(value, arg1);
              let tmp16 = tmp11Result;
              if (catchall) {
                let tmp20 = value;
                let tmp21 = tmp11Result;
                let tmp22 = arg1;
                tmp16 = handleCatchall([], value, tmp11Result, arg1, value, inst);
              }
              tmp10 = tmp16;
            }
            tmp4 = tmp10;
          }
        }
      }
      tmp10 = parse(value, arg1);
    } else {
      const issues = value.issues;
      let obj = { expected: "object", code: "invalid_type", input: value, inst };
      issues.push(obj);
      tmp4 = value;
    }
    return tmp4;
  };
});
export const $ZodUnion = NEVER.$constructor("$ZodUnion", (_zod, options) => {
  let closure_0 = _zod;
  _exports = options;
  const $ZodType = _exports.$ZodType;
  $ZodType.init(_zod, options);
  captureStackTrace.defineLazy(_zod._zod, "optin", () => {
    options = options.options;
    let str;
    if (options.some((_zod) => "optional" === _zod._zod.optin)) {
      str = "optional";
    }
    return str;
  });
  captureStackTrace.defineLazy(_zod._zod, "optout", () => {
    options = options.options;
    let str;
    if (options.some((_zod) => "optional" === _zod._zod.optout)) {
      str = "optional";
    }
    return str;
  });
  captureStackTrace.defineLazy(_zod._zod, "values", function () {
    options = options.options;
    const tmp = options;
    if (options.every((_zod) => _zod._zod.values)) {
      const _Set = Set;
      const options2 = tmp.options;
      const self = this;
      const self2 = this;
      set = new Set(options2.flatMap((_zod) => Array.from(_zod._zod.values)));
      return set;
    }
  });
  captureStackTrace.defineLazy(_zod._zod, "pattern", function () {
    options = options.options;
    const tmp = options;
    if (options.every((_zod) => _zod._zod.pattern)) {
      const options1 = tmp.options;
      const mapped = options1.map((_zod) => _zod._zod.pattern);
      const _RegExp = RegExp;
      const mapped1 = mapped.map((source) => closure_1_10.cleanRegex(source.source));
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const regExp = new RegExp("^(" + mapped1.join("|") + ")$");
      return regExp;
    }
  });
  let closure_2 = 1 === options.options.length;
  const run = options.options[0]._zod.run;
  _zod._zod.parse = (value, arg1) => {
    let closure_1;
    let closure_0 = value;
    options = arg1;
    if (closure_2) {
      return run(value, arg1);
    } else {
      let nextPromise;
      let flag = false;
      const items = [];
      options = options.options;
      const iter = options[Symbol.iterator]();
      while (iter !== undefined) {
        _zod = iter.next()._zod;
        let obj = { value: value.value, issues: [] };
        let runResult = _zod.run(obj, arg1);
        let tmp8 = runResult;
        let _Promise = Promise;
        if (runResult instanceof Promise) {
          let arr = items.push(tmp8);
          flag = true;
        } else if (0 === tmp8.issues.length) {
          iter.return();
          return tmp8;
        } else {
          let arr3 = items.push(tmp8);
        }
        continue;
      }
      if (flag) {
        const allPromises = Promise.all(items);
        nextPromise = allPromises.then((result) => handleUnionResults(result, _zod, _zod, closure_1));
      } else {
        nextPromise = handleUnionResults(items, value, closure_0, arg1);
      }
      return nextPromise;
    }
  };
});
export const $ZodXor = NEVER.$constructor("$ZodXor", (_zod, options) => {
  let closure_0 = _zod;
  _exports = options;
  const $ZodUnion = _exports.$ZodUnion;
  $ZodUnion.init(_zod, options);
  options.inclusive = false;
  let closure_2 = 1 === options.options.length;
  const run = options.options[0]._zod.run;
  _zod._zod.parse = (value, arg1) => {
    let closure_1;
    let inst = value;
    options = arg1;
    if (closure_2) {
      return run(value, arg1);
    } else {
      let nextPromise;
      let flag = false;
      const items = [];
      options = options.options;
      const iter = options[Symbol.iterator]();
      while (iter !== undefined) {
        _zod = iter.next()._zod;
        let obj = { value: value.value, issues: [] };
        let runResult = _zod.run(obj, arg1);
        let _Promise = Promise;
        let tmp9 = runResult instanceof Promise;
        let arr = items.push(runResult);
        if (tmp9) {
          flag = true;
        }
        continue;
      }
      if (flag) {
        const allPromises = Promise.all(items);
        nextPromise = allPromises.then((arr) => {
          inst = closure_1;
          const found = arr.filter((issues) => 0 === issues.issues.length);
          if (1 === found.length) {
            inst.value = found[0].value;
          } else if (0 === found.length) {
            let issues = iter.issues;
            const push = issues.push;
            const obj2 = { code: "invalid_union", input: inst.value, inst, errors: arr.map(f97936) };
            arr = push(obj2);
          } else {
            const issues1 = iter.issues;
            const obj = { code: "invalid_union", input: inst.value, inst, errors: [], inclusive: false };
            issues1.push(obj);
          }
          return inst;
        });
      } else {
        handleExclusiveUnionResults(items, value, inst, arg1);
        nextPromise = value;
      }
      return nextPromise;
    }
  };
});
export const $ZodDiscriminatedUnion = NEVER.$constructor("$ZodDiscriminatedUnion", (_zod, arg1) => {
  let closure_1;
  const inst = _zod;
  _exports = arg1;
  arg1.inclusive = false;
  const $ZodUnion = _exports.$ZodUnion;
  $ZodUnion.init(_zod, arg1);
  const parse = _zod._zod.parse;
  captureStackTrace.defineLazy(_zod._zod, "propValues", function () {
    let first;
    let tmp10;
    const obj = {};
    const iter = closure_1.options[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let propValues = nextResult._zod.propValues;
      let tmp3 = propValues;
      if (tmp3) {
        let _Object = Object;
        if (0 !== Object.keys(tmp3).length) {
          let _Object2 = Object;
          let entries = Object.entries(tmp3);
          for (const item10026 of entries) {
            [first, tmp10] = item10026;
            let tmp9 = first;
            if (!obj[first]) {
              let _Set = Set;
              let self = this;
              let self2 = this;
              set = new Set();
              obj[tmp9] = set;
            }
            for (const item10044 of tmp10) {
              let obj2 = obj[tmp9];
              let addResult = obj2.add(item10044);
              continue;
            }
            continue;
          }
          continue;
        }
      }
      let _Error = Error;
      let options = closure_1.options;
      let _HermesInternal = HermesInternal;
      let str = '"';
      let str2 = 'Invalid discriminated union option at index "';
      let self3 = this;
      let self4 = this;
      let error = new Error('Invalid discriminated union option at index "' + options.indexOf(nextResult) + '"');
      throw error;
    }
    return obj;
  });
  let value = captureStackTrace.cached(function () {
    const options = closure_1.options;
    map = new Map();
    const iter = options[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let propValues = nextResult._zod.propValues;
      let tmp3;
      let tmp2 = nextResult;
      if (propValues != null) {
        tmp3 = propValues[closure_1.discriminator];
      }
      let tmp5 = tmp3;
      if (tmp5) {
        if (0 !== tmp5.size) {
          for (const item10030 of tmp3) {
            if (map.has(item10030)) {
              let _Error = Error;
              let _String = String;
              let _HermesInternal = HermesInternal;
              let str = '"';
              let str2 = 'Duplicate discriminator value "';
              let self = this;
              let self2 = this;
              let error = new Error('Duplicate discriminator value "' + String(item10030) + '"');
              throw error;
            } else {
              let result = map.set(item10030, tmp2);
              continue;
            }
          }
          continue;
        }
      }
      let _Error2 = Error;
      let options1 = closure_1.options;
      let _HermesInternal2 = HermesInternal;
      let str3 = '"';
      let str4 = 'Invalid discriminated union option at index "';
      let self3 = this;
      let self4 = this;
      let error1 = new Error('Invalid discriminated union option at index "' + options1.indexOf(nextResult) + '"');
      throw error1;
    }
    return map;
  });
  _zod._zod.parse = (value, arg1) => {
    let items;
    value = value.value;
    if (captureStackTrace.isObject(value)) {
      let runResult;
      const value2 = value.value;
      let tmp5;
      const get = value2.get;
      if (value != null) {
        tmp5 = value[closure_1.discriminator];
      }
      const value4 = get(tmp5);
      if (value4) {
        const _zod = value4._zod;
        runResult = _zod.run(value, arg1);
      } else if (closure_1.unionFallback) {
        runResult = parse(value, arg1);
      } else {
        const issues = value.issues;
        const obj2 = {
          code: "invalid_union",
          errors: [],
          note: "No matching discriminator",
          discriminator: closure_1.discriminator,
          input: value,
          path: items,
          inst,
        };
        items = [closure_1.discriminator];
        issues.push(obj2);
        runResult = value;
      }
      return runResult;
    } else {
      const issues1 = value.issues;
      const obj = { code: "invalid_type", expected: "object", input: value, inst };
      issues1.push(obj);
      return value;
    }
  };
});
export const $ZodIntersection = NEVER.$constructor("$ZodIntersection", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (value, arg1) => {
    let nextPromise = value;
    closure_0 = value;
    value = value.value;
    const _zod = closure_0.left._zod;
    const runResult = _zod.run({ value, issues: [] }, arg1);
    const _zod2 = closure_0.right._zod;
    const runResult1 = _zod2.run({ value, issues: [] }, arg1);
    if (!(runResult instanceof Promise)) {
      if (!(runResult1 instanceof Promise)) {
        handleIntersectionResults(nextPromise, runResult, runResult1);
      }
      return nextPromise;
    }
    const items = [runResult, runResult1];
    const allPromises = Promise.all(items);
    nextPromise = allPromises.then((result) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = result;
      closure_2_18(closure_0, tmp, tmp2);
      return closure_0;
    });
  };
});
export const $ZodTuple = NEVER.$constructor("$ZodTuple", (_zod, items) => {
  let inst = _zod;
  _exports = items;
  const $ZodType = _exports.$ZodType;
  $ZodType.init(_zod, items);
  items = items.items;
  _zod._zod.parse = (value, arg1) => {
    let nextPromise = value;
    inst = value;
    value = value.value;
    if (Array.isArray(value)) {
      nextPromise.value = [];
      items = [];
      const items1 = [];
      HermesBuiltin.arraySpread(items1, items, 0);
      const reversed = items1.reverse();
      reversed.findIndex((_zod) => "optional" !== _zod._zod.optin);
      if (!items.rest) {
        let obj3;
        let issues = nextPromise.issues;
        let push = issues.push;
        const tmp10 = value.length > items.length;
        if (tmp10) {
          obj3 = { code: "too_big", maximum: items.length, inclusive: true };
          const obj2 = { code: "too_big", maximum: items.length, inclusive: true };
        } else {
          obj3 = { code: "too_small", minimum: items.length };
        }
        const obj4 = { input: value, inst, origin: "array" };
        const merged = Object.assign(obj3);
        push(obj4);
        return nextPromise;
      }
      let num6 = -1;
      let sum1 = -1;
      for (const item10060 of arr4) {
        let sum = num6 + 1;
        num6 = sum;
        sum1 = sum;
        if (sum < value.length) {
          let _zod = tmp18._zod;
          let obj5 = { value: value[num6], issues: [] };
          let runResult = _zod.run(obj5, arg1);
          let promise = runResult;
          let _Promise = Promise;
          if (runResult instanceof Promise) {
            let arr2 = items.push(
              promise.then((issues) => {
                if (issues.issues.length) {
                  issues = closure_0.issues;
                  const push = issues.push;
                  items = [];
                  HermesBuiltin.arraySpread(items, closure_2_10.prefixIssues(sum1, issues.issues), 0);
                  HermesBuiltin.apply(push, items, issues);
                }
                closure_0.value[sum1] = issues.value;
              }),
            );
          } else {
            let tmp28 = handleTupleResult(promise, nextPromise, num6);
          }
        }
        continue;
      }
      if (items.rest) {
        const substr = value.slice(items.length);
        for (const item10098 of substr) {
          sum1 = num6 + 1;
          num6 = sum1;
          let _zod2 = items.rest._zod;
          let obj6 = { value: item10098, issues: [] };
          let runResult1 = _zod2.run(obj6, arg1);
          let promise2 = runResult1;
          let _Promise2 = Promise;
          if (runResult1 instanceof Promise) {
            let arr3 = items.push(
              promise2.then((issues) => {
                if (issues.issues.length) {
                  issues = closure_0.issues;
                  const push = issues.push;
                  items = [];
                  HermesBuiltin.arraySpread(items, closure_2_10.prefixIssues(sum1, issues.issues), 0);
                  HermesBuiltin.apply(push, items, issues);
                }
                closure_0.value[sum1] = issues.value;
              }),
            );
          } else {
            let tmp43 = handleTupleResult(promise2, nextPromise, num6);
          }
          continue;
        }
      }
      if (items.length) {
        const allPromises = Promise.all(items);
        nextPromise = allPromises.then(() => closure_0);
      }
      return nextPromise;
    } else {
      const issues1 = nextPromise.issues;
      const obj = { input: value, inst, expected: "tuple", code: "invalid_type" };
      issues1.push(obj);
      return nextPromise;
    }
  };
});
export const $ZodRecord = NEVER.$constructor("$ZodRecord", (_zod, arg1) => {
  let inst = _zod;
  _exports = arg1;
  const $ZodType = _exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = function (value, arg1) {
    let closure_1;
    let tmp18;
    let nextPromise = value;
    inst = value;
    keyType = arg1;
    value = value.value;
    if (captureStackTrace.isPlainObject(value)) {
      let items = [];
      const values = keyType.keyType._zod.values;
      nextPromise.value = {};
      const tmp5 = globalThis;
      if (values) {
        const _Set = Set;
        let self = this;
        let self2 = this;
        set = new Set();
        function _loop5(iter2) {
          inst = iter2;
          let str = iter2;
          const add = set.add;
          if (typeof iter2 === "number") {
            str = iter2.toString();
          }
          add(str);
          const _zod = closure_1.valueType._zod;
          const obj = { value: value[iter2], issues: [] };
          const runResult = _zod.run(obj, closure_1);
          if (runResult instanceof Promise) {
            items.push(
              runResult.then((issues) => {
                if (issues.issues.length) {
                  issues = iter2.issues;
                  const push = issues.push;
                  items = [];
                  HermesBuiltin.arraySpread(items, captureStackTrace.prefixIssues(iter2, issues.issues), 0);
                  HermesBuiltin.apply(push, items, issues);
                }
                iter2.value[iter2] = issues.value;
              }),
            );
          } else {
            if (runResult.issues.length) {
              let issues = inst.issues;
              let push = issues.push;
              items = [];
              HermesBuiltin.arraySpread(items, captureStackTrace.prefixIssues(iter2, runResult.issues), 0);
              HermesBuiltin.apply(push, items, issues);
            }
            inst.value[iter2] = runResult.value;
          }
        }
        const iter2 = values[Symbol.iterator]();
        while (iter2 !== undefined) {
          let _loop5Result = _loop5(iter2.next());
          continue;
        }
        let tmp19;
        const keys = Object.keys();
        if (keys !== undefined) {
          tmp19 = tmp18;
          while (keys[iter2] !== undefined) {
            if (set.has(tmp22)) {
              continue;
            } else {
              let items1 = tmp21;
              if (tmp21 == null) {
                items1 = [];
              }
              let arr = items1.push(tmp22);
              tmp18 = items1;
              continue;
            }
            continue;
          }
        }
        const tmp24 = tmp19 && tmp19.length > 0;
        if (tmp24) {
          let issues = nextPromise.issues;
          let obj2 = { code: "unrecognized_keys", input: value, inst, keys: tmp19 };
          const tmp25 = inst;
          issues.push(obj2);
        }
      } else {
        const _Reflect = Reflect;
        function _loop6(iter) {
          let issues1;
          let runResult1;
          inst = iter;
          if ("__proto__" === iter) {
            return 0;
          } else {
            const _zod3 = closure_1.keyType._zod;
            const obj2 = { value: iter, issues: [] };
            const runResult = _zod3.run(obj2, runResult1);
            runResult1 = runResult;
            if (runResult instanceof Promise) {
              const _Error2 = Error;
              const self3 = this;
              const self4 = this;
              const error = new Error("Async schemas not supported in object keys currently");
              throw error;
            } else {
              iter = runResult;
              if (typeof iter === "string") {
                number = number.number;
                iter = runResult;
                if (number.test(iter)) {
                  iter = runResult;
                  if (runResult.issues.length) {
                    const _zod = closure_1.keyType._zod;
                    const _Number = Number;
                    const run = _zod.run;
                    const obj = { value: Number(iter), issues: [] };
                    runResult1 = run(obj, tmp25);
                    if (runResult1 instanceof Promise) {
                      const _Error = Error;
                      const self = this;
                      const self2 = this;
                      const error1 = new Error("Async schemas not supported in object keys currently");
                      throw error1;
                    } else {
                      iter = runResult;
                      if (0 === runResult1.issues.length) {
                        iter = runResult1;
                      }
                    }
                  }
                }
              }
              if (iter.issues.length) {
                if ("loose" === closure_1.mode) {
                  inst.value[iter] = value[iter];
                } else {
                  let issues = inst.issues;
                  const obj3 = {
                    code: "invalid_key",
                    origin: "record",
                    issues: issues1.map((item) => captureStackTrace.finalizeIssue(item, runResult1, NEVER.config())),
                    input: iter,
                    path: items,
                    inst,
                  };
                  issues1 = iter.issues;
                  const push2 = issues.push;
                  items = [iter];
                  push2(obj3);
                }
                return 0;
              } else {
                const _zod2 = closure_1.valueType._zod;
                const obj4 = { value: value[iter], issues: [] };
                const runResult2 = _zod2.run(obj4, runResult1);
                if (runResult2 instanceof Promise) {
                  items.push(
                    runResult2.then((issues) => {
                      if (issues.issues.length) {
                        issues = iter.issues;
                        const push = issues.push;
                        items = [];
                        HermesBuiltin.arraySpread(items, captureStackTrace.prefixIssues(iter, issues.issues), 0);
                        HermesBuiltin.apply(push, items, issues);
                      }
                      iter.value[runResult1.value] = issues.value;
                    }),
                  );
                } else {
                  if (runResult2.issues.length) {
                    const issues2 = inst.issues;
                    let push = issues2.push;
                    const items1 = [];
                    HermesBuiltin.arraySpread(items1, captureStackTrace.prefixIssues(iter, runResult2.issues), 0);
                    HermesBuiltin.apply(push, items1, issues2);
                  }
                  inst.value[iter.value] = runResult2.value;
                }
              }
            }
          }
        }
        const ownKeysResult = Reflect.ownKeys(value);
        let iter = ownKeysResult[Symbol.iterator]();
        while (iter !== undefined) {
          let _loop6Result = _loop6(iter.next());
          continue;
        }
      }
      if (items.length) {
        const allPromises = Promise.all(items);
        nextPromise = allPromises.then(() => inst);
      }
      return nextPromise;
    } else {
      let issues1 = nextPromise.issues;
      let obj = { expected: "record", code: "invalid_type", input: value, inst };
      issues1.push(obj);
      return nextPromise;
    }
  };
});
export const $ZodMap = NEVER.$constructor("$ZodMap", (_zod, arg1) => {
  let inst = _zod;
  _exports = arg1;
  const $ZodType = _exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = function (value, arg1) {
    let nextPromise = value;
    inst = value;
    closure_1 = arg1;
    value = value.value;
    let closure_2 = value;
    if (value instanceof Map) {
      let items = [];
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
      nextPromise.value = map;
      function _loop7(value) {
        let closure_0 = value;
        const _zod = closure_1.keyType._zod;
        const obj = { value, issues: [] };
        const runResult = _zod.run(obj, closure_1);
        const _zod2 = closure_1.valueType._zod;
        const obj2 = { value, issues: [] };
        const runResult1 = _zod2.run(obj2, closure_1);
        if (!(runResult instanceof Promise)) {
          if (!(runResult1 instanceof Promise)) {
            handleMapResult(runResult, runResult1, closure_0, value, closure_2, closure_0, closure_1);
          }
        }
        items = [runResult, runResult1];
        const push = items.push;
        const allPromises = Promise.all(items);
        push(
          allPromises.then((result) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = result;
            handleMapResult(tmp, tmp2, inst, inst, closure_2, inst, closure_1);
          }),
        );
      }
      const tmp7 = value[Symbol.iterator]();
      while (tmp7 !== undefined) {
        let tmp12 = _slicedToArray(tmp9, 2);
        value = tmp12[1];
        let _loop7Result = _loop7(tmp12[0]);
        continue;
      }
      if (items.length) {
        let allPromises = Promise.all(items);
        nextPromise = allPromises.then(() => inst);
      }
      return nextPromise;
    } else {
      const issues = nextPromise.issues;
      let obj = { expected: "map", code: "invalid_type", input: value, inst };
      const tmp2 = inst;
      issues.push(obj);
      return nextPromise;
    }
  };
});
export const $ZodSet = NEVER.$constructor("$ZodSet", (_zod, arg1) => {
  let valueType;
  let inst = _zod;
  _exports = arg1;
  const $ZodType = _exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = function (value, arg1) {
    let nextPromise = value;
    inst = value;
    value = value.value;
    if (value instanceof Set) {
      let items = [];
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      nextPromise.value = set;
      const tmp7 = value[Symbol.iterator]();
      while (tmp7 !== undefined) {
        let _zod = valueType.valueType._zod;
        let obj2 = { value: tmp9, issues: [] };
        let runResult = _zod.run(obj2, arg1);
        let promise = runResult;
        let _Promise = Promise;
        if (runResult instanceof Promise) {
          let arr = items.push(
            promise.then((issues) => {
              if (issues.issues.length) {
                issues = closure_0.issues;
                const push = issues.push;
                const items = [];
                HermesBuiltin.arraySpread(items, issues.issues, 0);
                HermesBuiltin.apply(push, items, issues);
              }
              const value = closure_0.value;
              value.add(issues.value);
            }),
          );
        } else {
          let tmp15 = handleSetResult(promise, nextPromise);
        }
        continue;
      }
      if (items.length) {
        const allPromises = Promise.all(items);
        nextPromise = allPromises.then(() => closure_0);
      }
      return nextPromise;
    } else {
      let issues = nextPromise.issues;
      const obj = { input: value, inst, expected: "set", code: "invalid_type" };
      issues.push(obj);
      return nextPromise;
    }
  };
});
export const $ZodEnum = NEVER.$constructor("$ZodEnum", (_zod, arg1) => {
  let enumValues;
  const inst = _zod;
  const $ZodType = enumValues.$ZodType;
  $ZodType.init(_zod, arg1);
  enumValues = captureStackTrace.getEnumValues(arg1.entries);
  set = new Set(enumValues);
  _zod._zod.values = set;
  _zod = _zod._zod;
  const found = enumValues.filter((item) => {
    const propertyKeyTypes = captureStackTrace.propertyKeyTypes;
    return propertyKeyTypes.has(typeof item);
  });
  const mapped = found.map((item) => {
    let escapeRegexResult;
    if (typeof item === "string") {
      escapeRegexResult = captureStackTrace.escapeRegex(item);
    } else {
      escapeRegexResult = item.toString();
    }
    return escapeRegexResult;
  });
  const regExp = new RegExp("^(" + mapped.join("|") + ")$");
  _zod.pattern = regExp;
  _zod._zod.parse = (value, arg1) => {
    value = value.value;
    if (!set.has(value)) {
      const issues = value.issues;
      const obj = { code: "invalid_value", values: enumValues, input: value, inst };
      issues.push(obj);
    }
    return value;
  };
});
export const $ZodLiteral = NEVER.$constructor("$ZodLiteral", function (_zod, arg1) {
  const inst = _zod;
  _exports = arg1;
  const $ZodType = _exports.$ZodType;
  $ZodType.init(_zod, arg1);
  if (0 === arg1.values.length) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Cannot create literal schema with no valid values");
    throw error;
  } else {
    const _Set = Set;
    const self3 = this;
    const self4 = this;
    set = new Set(arg1.values);
    _zod._zod.values = set;
    const _RegExp = RegExp;
    const values = arg1.values;
    _zod = _zod._zod;
    const mapped = values.map((item) => {
      let escapeRegexResult;
      if (typeof item === "string") {
        escapeRegexResult = captureStackTrace.escapeRegex(item);
      } else if (item) {
        escapeRegexResult = captureStackTrace.escapeRegex(item.toString());
      } else {
        const _String = String;
        escapeRegexResult = String(item);
      }
      return escapeRegexResult;
    });
    const _HermesInternal = HermesInternal;
    const self5 = this;
    const self6 = this;
    const regExp = new RegExp("^(" + mapped.join("|") + ")$");
    _zod.pattern = regExp;
    _zod._zod.parse = (value, arg1) => {
      value = value.value;
      if (!set.has(value)) {
        const issues = value.issues;
        const obj = { code: "invalid_value", values: values.values, input: value, inst };
        issues.push(obj);
      }
      return value;
    };
  }
});
export const $ZodFile = NEVER.$constructor("$ZodFile", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (value, arg1) => {
    value = value.value;
    if (!(value instanceof File)) {
      const issues = value.issues;
      const obj = { expected: "file", code: "invalid_type", input: value, inst };
      issues.push(obj);
    }
    return value;
  };
});
export const $ZodTransform = NEVER.$constructor("$ZodTransform", (_zod, arg1) => {
  let closure_1;
  let constructor = _zod;
  _exports = arg1;
  const $ZodType = _exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = function (value, direction) {
    constructor = value;
    if ("backward" === direction.direction) {
      const self3 = this;
      const self4 = this;
      const ZodEncodeError = new NEVER.$ZodEncodeError(constructor.constructor.name);
      throw ZodEncodeError;
    } else {
      const transformResult = closure_1.transform(value.value, value);
      if (direction.async) {
        let resolved = transformResult;
        if (!(transformResult instanceof Promise)) {
          resolved = Promise.resolve(transformResult);
        }
        return resolved.then((value) => {
          closure_0.value = value;
          return closure_0;
        });
      } else if (transformResult instanceof Promise) {
        const self = this;
        const self2 = this;
        const ZodAsyncError = new NEVER.$ZodAsyncError();
        throw ZodAsyncError;
      } else {
        value.value = transformResult;
        return value;
      }
    }
  };
});
export const $ZodOptional = NEVER.$constructor("$ZodOptional", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.optin = "optional";
  _zod._zod.optout = "optional";
  captureStackTrace.defineLazy(_zod._zod, "values", function () {
    set = undefined;
    if (closure_0.innerType._zod.values) {
      const _Set = Set;
      const items = [];
      items[HermesBuiltin.arraySpread(items, tmp2.innerType._zod.values, 0)] = undefined;
      const self = this;
      const self2 = this;
      set = new Set(items);
    }
    return set;
  });
  captureStackTrace.defineLazy(_zod._zod, "pattern", function () {
    const pattern = closure_0.innerType._zod.pattern;
    let regExp;
    if (pattern) {
      const _RegExp = RegExp;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      regExp = new RegExp("^(" + captureStackTrace.cleanRegex(pattern.source) + ")?$");
    }
    return regExp;
  });
  _zod._zod.parse = (value, arg1) => {
    closure_0 = value;
    const tmp = closure_0;
    if ("optional" === closure_0.innerType._zod.optin) {
      let nextPromise;
      const _zod2 = tmp.innerType._zod;
      const runResult = _zod2.run(value, arg1);
      if (runResult instanceof Promise) {
        nextPromise = runResult.then((issues) => {
          let tmp2 = issues;
          if (issues.issues.length) {
            tmp2 = issues;
            if (undefined === tmp) {
              tmp2 = { issues: [], value: "Array" };
              const obj = { issues: [], value: "Array" };
            }
          }
          return tmp2;
        });
      } else {
        nextPromise = runResult;
        if (runResult.issues.length) {
          nextPromise = runResult;
          if (undefined === tmp4) {
            let obj = { issues: [], value: "Array" };
            nextPromise = obj;
          }
        }
      }
      return nextPromise;
    } else {
      let runResult1 = value;
      if (undefined !== value.value) {
        const _zod = tmp.innerType._zod;
        runResult1 = _zod.run(value, arg1);
      }
      return runResult1;
    }
  };
});
export const $ZodExactOptional = NEVER.$constructor("$ZodExactOptional", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodOptional = exports.$ZodOptional;
  $ZodOptional.init(_zod, arg1);
  captureStackTrace.defineLazy(_zod._zod, "values", () => closure_0.innerType._zod.values);
  captureStackTrace.defineLazy(_zod._zod, "pattern", () => closure_0.innerType._zod.pattern);
  _zod._zod.parse = (arg0, arg1) => {
    const _zod = closure_0.innerType._zod;
    return _zod.run(arg0, arg1);
  };
});
export const $ZodNullable = NEVER.$constructor("$ZodNullable", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  captureStackTrace.defineLazy(_zod._zod, "optin", () => closure_0.innerType._zod.optin);
  captureStackTrace.defineLazy(_zod._zod, "optout", () => closure_0.innerType._zod.optout);
  captureStackTrace.defineLazy(_zod._zod, "pattern", function () {
    const pattern = closure_0.innerType._zod.pattern;
    let regExp;
    if (pattern) {
      const _RegExp = RegExp;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      regExp = new RegExp("^(" + captureStackTrace.cleanRegex(pattern.source) + "|null)$");
    }
    return regExp;
  });
  captureStackTrace.defineLazy(_zod._zod, "values", function () {
    set = undefined;
    if (closure_0.innerType._zod.values) {
      const _Set = Set;
      const items = [];
      items[HermesBuiltin.arraySpread(items, tmp2.innerType._zod.values, 0)] = null;
      const self = this;
      const self2 = this;
      set = new Set(items);
    }
    return set;
  });
  _zod._zod.parse = (value, arg1) => {
    let runResult = value;
    if (null !== value.value) {
      const _zod = closure_0.innerType._zod;
      runResult = _zod.run(value, arg1);
    }
    return runResult;
  };
});
export const $ZodDefault = NEVER.$constructor("$ZodDefault", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.optin = "optional";
  captureStackTrace.defineLazy(_zod._zod, "values", () => innerType.innerType._zod.values);
  _zod._zod.parse = (value, direction) => {
    if ("backward" === direction.direction) {
      const _zod2 = defaultValue.innerType._zod;
      return _zod2.run(value, direction);
    } else if (undefined === value.value) {
      value.value = defaultValue.defaultValue;
      return value;
    } else {
      let nextPromise;
      const _zod = defaultValue.innerType._zod;
      const runResult = _zod.run(value, direction);
      if (runResult instanceof Promise) {
        nextPromise = runResult.then((value) => {
          if (undefined === value.value) {
            value.value = defaultValue.defaultValue;
          }
          return value;
        });
      } else {
        nextPromise = runResult;
        if (undefined === runResult.value) {
          runResult.value = defaultValue.defaultValue;
          nextPromise = runResult;
        }
      }
      return nextPromise;
    }
  };
});
export const $ZodPrefault = NEVER.$constructor("$ZodPrefault", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.optin = "optional";
  captureStackTrace.defineLazy(_zod._zod, "values", () => closure_0.innerType._zod.values);
  _zod._zod.parse = (value, direction) => {
    if ("backward" !== direction.direction) {
      if (undefined === value.value) {
        value.value = closure_0.defaultValue;
      }
    }
    const _zod = closure_0.innerType._zod;
    return _zod.run(value, direction);
  };
});
export const $ZodNonOptional = NEVER.$constructor("$ZodNonOptional", (_zod, arg1) => {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  captureStackTrace.defineLazy(_zod._zod, "values", function () {
    const values = closure_1.innerType._zod.values;
    set = undefined;
    if (values) {
      const _Set = Set;
      const items = [];
      HermesBuiltin.arraySpread(items, values, 0);
      const self = this;
      const self2 = this;
      set = new Set(items.filter((item) => undefined !== item));
    }
    return set;
  });
  _zod._zod.parse = (arg0, arg1) => {
    let nextPromise;
    const _zod = closure_1.innerType._zod;
    const runResult = _zod.run(arg0, arg1);
    if (runResult instanceof Promise) {
      nextPromise = runResult.then((issues) => {
        const length = issues.issues.length || undefined !== issues.value;
        if (!length) {
          issues = issues.issues;
          const obj = { code: "invalid_type", expected: "nonoptional", input: issues.value, inst };
          issues.push(obj);
        }
        return issues;
      });
    } else {
      let length = runResult.issues.length || undefined !== runResult.value;
      nextPromise = runResult;
      if (!length) {
        let issues = runResult.issues;
        let obj = { code: "invalid_type", expected: "nonoptional", input: runResult.value, inst };
        issues.push(obj);
        nextPromise = runResult;
      }
    }
    return nextPromise;
  };
});
export const $ZodSuccess = NEVER.$constructor("$ZodSuccess", (_zod, arg1) => {
  let innerType = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = function (arg0, direction) {
    let nextPromise = arg0;
    innerType = arg0;
    if ("backward" === direction.direction) {
      const self = this;
      const self2 = this;
      const ZodEncodeError = new NEVER.$ZodEncodeError("ZodSuccess");
      throw ZodEncodeError;
    } else {
      const _zod = innerType.innerType._zod;
      const runResult = _zod.run(nextPromise, direction);
      if (runResult instanceof Promise) {
        nextPromise = runResult.then((issues) => {
          closure_0.value = 0 === issues.issues.length;
          return closure_0;
        });
      } else {
        nextPromise.value = 0 === runResult.issues.length;
      }
      return nextPromise;
    }
  };
});
export const $ZodCatch = NEVER.$constructor("$ZodCatch", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  captureStackTrace.defineLazy(_zod._zod, "optin", () => closure_0.innerType._zod.optin);
  captureStackTrace.defineLazy(_zod._zod, "optout", () => closure_0.innerType._zod.optout);
  captureStackTrace.defineLazy(_zod._zod, "values", () => closure_0.innerType._zod.values);
  _zod._zod.parse = (value, direction) => {
    let issues;
    let obj2;
    let closure_1 = direction;
    if ("backward" === direction.direction) {
      const _zod = value.innerType._zod;
      return _zod.run(value, direction);
    } else {
      let nextPromise;
      const _zod2 = value.innerType._zod;
      const runResult = _zod2.run(value, direction);
      const tmp6 = value;
      if (runResult instanceof Promise) {
        nextPromise = runResult.then((value) => {
          let issues;
          let obj2;
          value.value = value.value;
          if (value.issues.length) {
            const catchValue = value.catchValue;
            const obj = { error: obj2, input: value.value };
            const merged = Object.assign(value);
            obj2 = { issues: issues.map((item) => captureStackTrace.finalizeIssue(item, direction, NEVER.config())) };
            issues = value.issues;
            value.value = catchValue(obj);
            value.issues = [];
          }
          return value;
        });
      } else {
        value.value = runResult.value;
        nextPromise = value;
        if (runResult.issues.length) {
          let obj = { error: obj2, input: value.value };
          let catchValue = tmp6.catchValue;
          let merged = Object.assign(value);
          obj2 = { issues: issues.map((item) => captureStackTrace.finalizeIssue(item, direction, NEVER.config())) };
          issues = runResult.issues;
          value.value = catchValue(obj);
          value.issues = [];
          nextPromise = value;
        }
      }
      return nextPromise;
    }
  };
});
export const $ZodNaN = NEVER.$constructor("$ZodNaN", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (value, arg1) => {
    value = value.value;
    let isNaNResult = typeof value === "number";
    if (typeof value === "number") {
      const _Number = Number;
      isNaNResult = Number.isNaN(value.value);
    }
    if (!isNaNResult) {
      const issues = value.issues;
      const obj = { input: value.value, inst, expected: "nan", code: "invalid_type" };
      issues.push(obj);
    }
    return value;
  };
});
export const $ZodPipe = NEVER.$constructor("$ZodPipe", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  captureStackTrace.defineLazy(_zod._zod, "values", () => closure_0.in._zod.values);
  captureStackTrace.defineLazy(_zod._zod, "optin", () => closure_0.in._zod.optin);
  captureStackTrace.defineLazy(_zod._zod, "optout", () => closure_0.out._zod.optout);
  captureStackTrace.defineLazy(_zod._zod, "propValues", () => closure_0.in._zod.propValues);
  _zod._zod.parse = (arg0, direction) => {
    closure_0 = direction;
    if ("backward" === direction.direction) {
      let nextPromise;
      const _zod2 = closure_0.out._zod;
      let runResult = _zod2.run(arg0, direction);
      if (runResult instanceof Promise) {
        nextPromise = runResult.then((issues) => {
          let runResult;
          if (issues.issues.length) {
            issues.aborted = true;
            runResult = issues;
          } else {
            const _zod = tmp._zod;
            const obj = { value: null, issues: null };
            ({ value: obj.value, issues: obj.issues } = issues);
            runResult = _zod.run(obj, tmp2);
          }
          return runResult;
        });
      } else if (runResult.issues.length) {
        runResult.aborted = true;
        nextPromise = runResult;
      } else {
        const _zod3 = tmp5._zod;
        const obj3 = { value: null, issues: null };
        ({ value: obj2.value, issues: obj2.issues } = runResult);
        nextPromise = _zod3.run(obj3, direction);
      }
      return nextPromise;
    } else {
      let nextPromise1;
      const _zod4 = closure_0.in._zod;
      const runResult1 = _zod4.run(arg0, direction);
      if (runResult1 instanceof Promise) {
        nextPromise1 = runResult1.then((issues) => {
          let runResult;
          if (issues.issues.length) {
            issues.aborted = true;
            runResult = issues;
          } else {
            const _zod = tmp._zod;
            const obj = { value: null, issues: null };
            ({ value: obj.value, issues: obj.issues } = issues);
            runResult = _zod.run(obj, tmp2);
          }
          return runResult;
        });
      } else if (runResult1.issues.length) {
        runResult1.aborted = true;
        nextPromise1 = runResult1;
      } else {
        let _zod = tmp._zod;
        let obj = { value: null, issues: null };
        ({ value: obj.value, issues: obj.issues } = runResult1);
        nextPromise1 = _zod.run(obj, direction);
      }
      return nextPromise1;
    }
  };
});
export const $ZodCodec = NEVER.$constructor("$ZodCodec", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  captureStackTrace.defineLazy(_zod._zod, "values", () => closure_0.in._zod.values);
  captureStackTrace.defineLazy(_zod._zod, "optin", () => closure_0.in._zod.optin);
  captureStackTrace.defineLazy(_zod._zod, "optout", () => closure_0.out._zod.optout);
  captureStackTrace.defineLazy(_zod._zod, "propValues", () => closure_0.in._zod.propValues);
  _zod._zod.parse = (arg0, direction) => {
    closure_0 = direction;
    const tmp = direction.direction || "forward";
    if ("forward" === tmp) {
      let nextPromise;
      const _zod2 = closure_0.in._zod;
      const runResult = _zod2.run(arg0, direction);
      const tmp6 = closure_0;
      if (runResult instanceof Promise) {
        nextPromise = runResult.then((result) => handleCodecAResult(result, closure_0, closure_0));
      } else {
        nextPromise = handleCodecAResult(runResult, tmp6, direction);
      }
      return nextPromise;
    } else {
      let nextPromise1;
      const _zod = closure_0.out._zod;
      const runResult1 = _zod.run(arg0, direction);
      const tmp2 = closure_0;
      if (runResult1 instanceof Promise) {
        nextPromise1 = runResult1.then((result) => handleCodecAResult(result, closure_0, closure_0));
      } else {
        nextPromise1 = handleCodecAResult(runResult1, tmp2, direction);
      }
      return nextPromise1;
    }
  };
});
export const $ZodReadonly = NEVER.$constructor("$ZodReadonly", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  captureStackTrace.defineLazy(_zod._zod, "propValues", () => closure_0.innerType._zod.propValues);
  captureStackTrace.defineLazy(_zod._zod, "values", () => closure_0.innerType._zod.values);
  captureStackTrace.defineLazy(_zod._zod, "optin", () => {
    const innerType = closure_0.innerType;
    let optin;
    if (innerType != null) {
      const _zod = innerType._zod;
      if (_zod != null) {
        optin = _zod.optin;
      }
    }
    return optin;
  });
  captureStackTrace.defineLazy(_zod._zod, "optout", () => {
    const innerType = closure_0.innerType;
    let optout;
    if (innerType != null) {
      const _zod = innerType._zod;
      if (_zod != null) {
        optout = _zod.optout;
      }
    }
    return optout;
  });
  _zod._zod.parse = (arg0, direction) => {
    if ("backward" === direction.direction) {
      const _zod2 = closure_0.innerType._zod;
      return _zod2.run(arg0, direction);
    } else {
      let nextPromise;
      const _zod = closure_0.innerType._zod;
      const runResult = _zod.run(arg0, direction);
      if (runResult instanceof Promise) {
        nextPromise = runResult.then(handleReadonlyResult);
      } else {
        const _Object = Object;
        runResult.value = Object.freeze(runResult.value);
        nextPromise = runResult;
      }
      return nextPromise;
    }
  };
});
export const $ZodTemplateLiteral = NEVER.$constructor("$ZodTemplateLiteral", function (_zod, arg1) {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  const items = [];
  const iter = arg1.parts[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    if (typeof nextResult === "object") {
      if (null !== tmp4) {
        if (tmp4._zod.pattern) {
          let _RegExp = RegExp;
          let pattern = tmp4._zod.pattern;
          let tmp22 = tmp4._zod.pattern instanceof RegExp ? pattern.source : pattern;
          let arr3 = tmp22;
          if (arr3) {
            let num2 = 0;
            if (arr3.startsWith("^")) {
              num2 = 1;
            }
            let tmp27 = num2;
            let length = arr3.length;
            let arr = items.push(arr3.slice(tmp27, arr3.endsWith("$") ? length - 1 : length));
            continue;
          } else {
            let _Error3 = Error;
            let _HermesInternal4 = HermesInternal;
            let str3 = "Invalid template literal part: ";
            let self5 = this;
            let self6 = this;
            let error = new Error("Invalid template literal part: " + tmp4._zod.traits);
            throw error;
          }
        } else {
          let _Error2 = Error;
          let items1 = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(items1, tmp4._zod.traits, 0);
          let _HermesInternal3 = HermesInternal;
          let str2 = "Invalid template literal part, no pattern found: ";
          let self3 = this;
          let self4 = this;
          let error1 = new Error("Invalid template literal part, no pattern found: " + items1.shift());
          throw error1;
        }
      }
    }
    if (null !== tmp4) {
      let primitiveTypes = captureStackTrace.primitiveTypes;
      if (!primitiveTypes.has(typeof tmp4)) {
        let _Error = Error;
        let _HermesInternal = HermesInternal;
        let str = "Invalid template literal part: ";
        let self = this;
        let self2 = this;
        let error2 = new Error("Invalid template literal part: " + tmp4);
        throw error2;
      }
    }
    let _HermesInternal2 = HermesInternal;
    let arr2 = items.push(captureStackTrace.escapeRegex("" + tmp4));
  }
  _zod = _zod._zod;
  const regExp = new RegExp("^" + items.join("") + "$");
  _zod.pattern = regExp;
  _zod._zod.parse = (value, arg1) => {
    let str;
    if (typeof value.value !== "string") {
      const issues = value.issues;
      const obj2 = { input: value.value, inst, expected: "string", code: "invalid_type" };
      issues.push(obj2);
    } else {
      inst._zod.pattern.lastIndex = 0;
      const pattern = inst._zod.pattern;
      if (!pattern.test(value.value)) {
        const issues1 = value.issues;
        const obj = {
          input: value.value,
          inst,
          code: "invalid_format",
          format: str,
          pattern: inst._zod.pattern.source,
        };
        str = format.format;
        const push = issues1.push;
        if (str == null) {
          str = "template_literal";
        }
        push(obj);
      }
    }
    return value;
  };
});
export const $ZodFunction = NEVER.$constructor("$ZodFunction", (_zod, _def) => {
  const inst = _zod;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, _def);
  _zod._def = _def;
  _zod._zod.def = _def;
  _zod.implement = function (fn) {
    const _def = fn;
    if (typeof fn !== "function") {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("implement() must be called with a function");
      throw error;
    } else {
      return function () {
        const items = [...arguments];
        let parsed = items;
        if (_def._def.input) {
          parsed = _parse.parse(_def._def.input, items);
        }
        const applyResult = Reflect.apply(_def, this, parsed);
        let parsed1 = applyResult;
        if (_def._def.output) {
          parsed1 = _parse.parse(_def._def.output, applyResult);
        }
        return parsed1;
      };
    }
  };
  _zod.implementAsync = function (fn) {
    let closure_0 = fn;
    if (typeof fn !== "function") {
      const tmp = globalThis;
      const _Error = Error;
      let self = this;
      const self2 = this;
      const error = new Error("implementAsync() must be called with a function");
      throw error;
    } else {
      return _asyncToGenerator(async function () {
        const self = this;
        let closure_1 = [...arguments];
        let c5 = 0;
        let c6 = 0;
        const iter = (async (arg0) => {
          let tmp11;
          if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else if (self._def.input) {
              c5 = 2;
              c6 = 1;
              const obj5 = { value: _self(closure_2_2[7]).parseAsync(self._def.input, _self), done: false };
              return obj5;
            } else {
              tmp11 = _self;
            }
          } else if (2 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else {
              tmp11 = value;
              if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              }
            }
          } else {
            let tmp5;
            if (3 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                closure_2 = value;
                if (self._def.output) {
                  c5 = 4;
                  c6 = 1;
                  const obj8 = { value: _self(closure_2_2[7]).parseAsync(self._def.output, closure_2), done: false };
                  return obj8;
                } else {
                  tmp5 = closure_2;
                }
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else {
              tmp5 = value;
              if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              }
            }
            c6 = 3;
            return { value: tmp5, done: true };
          }
          closure_1 = tmp11;
          const _Reflect = Reflect;
          await Reflect.apply(closure_131_0, closure_4, closure_1);
          closure_4 = self;
          closure_3 = self;
          closure_2 = tmp;
          _self = closure_1;
          return "Reflect";
        })();
        iter.next();
        return iter;
      });
    }
  };
  _zod._zod.parse = (value, arg1) => {
    if (typeof value.value !== "function") {
      const issues = value.issues;
      const obj = { code: "invalid_type", expected: "function", input: value.value, inst };
      issues.push(obj);
      return value;
    } else {
      let implementAsyncResult;
      const output = inst._def.output && "promise" === inst._def.output._zod.def.type;
      if (output) {
        implementAsyncResult = inst.implementAsync(value.value);
      } else {
        implementAsyncResult = inst.implement(value.value);
      }
      value.value = implementAsyncResult;
      return value;
    }
  };
  _zod.input = function () {
    let constructor1;
    const items = [...arguments];
    const constructor = inst.constructor;
    const obj = { type: "function", input: null, output: null };
    if (Array.isArray(items[0])) {
      const obj3 = { type: "tuple", items: null, rest: null };
      [obj2.items, obj2.rest] = items;
      const self3 = this;
      const self4 = this;
      const ZodTuple = new exports.$ZodTuple(obj3);
      obj.input = ZodTuple;
      obj.output = inst._def.output;
      const self5 = this;
      const self6 = this;
      constructor1 = new constructor(obj);
    } else {
      obj.input = items[0];
      obj.output = inst._def.output;
      const self = this;
      const self2 = this;
      constructor1 = new constructor(obj);
    }
    return constructor1;
  };
  _zod.output = (output) => {
    const obj = { type: "function", input: inst._def.input, output };
    const constructor = new inst.constructor(obj);
    return constructor;
  };
  return _zod;
});
export const $ZodPromise = NEVER.$constructor("$ZodPromise", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (value, arg1) => {
    const innerType = arg1;
    const resolved = Promise.resolve(value.value);
    return resolved.then((value) => {
      const _zod = innerType.innerType._zod;
      const obj = { value, issues: [] };
      return _zod.run(obj, innerType);
    });
  };
});
export const $ZodLazy = NEVER.$constructor("$ZodLazy", (_zod, arg1) => {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  captureStackTrace.defineLazy(_zod._zod, "innerType", () => closure_1.getter());
  captureStackTrace.defineLazy(_zod._zod, "pattern", () => {
    const innerType = closure_0._zod.innerType;
    let pattern;
    if (innerType != null) {
      const _zod = innerType._zod;
      if (_zod != null) {
        pattern = _zod.pattern;
      }
    }
    return pattern;
  });
  captureStackTrace.defineLazy(_zod._zod, "propValues", () => {
    const innerType = closure_0._zod.innerType;
    let propValues;
    if (innerType != null) {
      const _zod = innerType._zod;
      if (_zod != null) {
        propValues = _zod.propValues;
      }
    }
    return propValues;
  });
  captureStackTrace.defineLazy(_zod._zod, "optin", () => {
    const innerType = closure_0._zod.innerType;
    let optin;
    if (innerType != null) {
      const _zod = innerType._zod;
      if (_zod != null) {
        optin = _zod.optin;
      }
    }
    return optin;
  });
  captureStackTrace.defineLazy(_zod._zod, "optout", () => {
    const innerType = closure_0._zod.innerType;
    let optout;
    if (innerType != null) {
      const _zod = innerType._zod;
      if (_zod != null) {
        optout = _zod.optout;
      }
    }
    return optout;
  });
  _zod._zod.parse = (arg0, arg1) => {
    const _zod = closure_0._zod.innerType._zod;
    return _zod.run(arg0, arg1);
  };
});
export const $ZodCustom = NEVER.$constructor("$ZodCustom", (_zod, arg1) => {
  let closure_0 = _zod;
  _exports = arg1;
  $ZodCheck = $ZodCheck.$ZodCheck;
  $ZodCheck.init(_zod, arg1);
  const $ZodType = _exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (arg0, arg1) => arg0;
  _zod._zod.check = (value) => {
    let items;
    const inst = value;
    value = value.value;
    closure_1 = value;
    const fnResult = closure_1.fn(value);
    if (fnResult instanceof Promise) {
      return fnResult.then((result) => {
        let items;
        const tmp5 = result;
        if (!tmp5) {
          const obj = { code: "custom", input: tmp3, inst, path: items, continue: !inst._zod.def.abort };
          let path = inst._zod.def.path;
          if (path == null) {
            path = [];
          }
          items = [];
          HermesBuiltin.arraySpread(items, path, 0);
          if (inst._zod.def.params) {
            obj.params = inst._zod.def.params;
          }
          const issues = tmp2.issues;
          issues.push(captureStackTrace.issue(obj));
        }
      });
    } else {
      const tmp2 = inst;
      if (!fnResult) {
        let obj = { code: "custom", input: value, inst: tmp2, path: items, continue: !tmp2._zod.def.abort };
        let path = tmp2._zod.def.path;
        const tmp3 = null;
        if (path == null) {
          path = [];
        }
        items = [];
        let tmp5 = path;
        HermesBuiltin.arraySpread(items, path, 0);
        if (tmp2._zod.def.params) {
          obj.params = tmp2._zod.def.params;
        }
        let issues = value.issues;
        issues.push(captureStackTrace.issue(obj));
      }
    }
  };
});
