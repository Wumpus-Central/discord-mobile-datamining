// === Module 8940: ? ===

// Module 8940
import _mod8936 from "module_8936" /* 8936 */;
import _mod8937 from "module_8937" /* 8937 */;
import _mod8941 from "module_8941" /* 8941 */;
import _mod8942 from "module_8942" /* 8942 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

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
      if (first) {
        const _JSON = JSON;
        const _atob = atob;
        const parsed = JSON.parse(atob(first));
        let tmp7 = !("typ" in parsed);
        if (!tmp7) {
          let typ;
          if (tmp6 != null) {
            typ = tmp6.typ;
          }
          tmp7 = "JWT" === typ;
        }
        if (tmp7) {
          alg = tmp6.alg;
          if (alg) {
            let tmp13 = !tmp;
            if (tmp) {
              let tmp15 = "alg" in tmp6;
              if (tmp15) {
                tmp15 = parsed.alg === tmp;
              }
              tmp13 = tmp15;
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
      let str = "\": expected a Zod schema";
      let str2 = "Invalid element at key \"";
      let tmp7 = new.target;
      let tmp8 = new.target;
      let error = new Error("Invalid element at key \"" + tmp2 + "\": expected a Zod schema");
      throw error;
    }
  }
  const obj = {};
  const merged = Object.assign(shape);
  obj.keys = keys;
  const optionalKeysResult = closure_10.optionalKeys(shape.shape);
  obj.keySet = new Set(keys);
  obj.numKeys = keys.length;
  const set = new Set(keys);
  obj.optionalKeys = new Set(optionalKeysResult);
  return obj;
}
function handleCatchall(items, value, tmp12Result, arg3, value2, inst) {
  let iter = tmp12Result;
  closure_1 = tmp12Result;
  items = [];
  const keySet = value2.keySet;
  const _zod = value2.catchall._zod;
  closure_2 = tmp2;
  for (const key10019 in arg1) {
    if (keySet.has(key10019)) {
      continue;
    } else {
      if ("never" === tmp) {
        let arr = items.push(key10019);
        continue;
      } else {
        let obj = { value: arg1[key10019], issues: [] };
        let runResult = _zod.run(obj, arg3);
        let _Promise2 = Promise;
        if (runResult instanceof Promise) {
          arr = arg0.push(runResult.then((issues) => {
            if (issues.issues.length) {
              if (!dependencyMap) {
                issues = exports.issues;
                const push = issues.push;
                const items = [];
                HermesBuiltin.arraySpread(c10.prefixIssues(key10019, issues.issues), 0);
                HermesBuiltin.apply(items, issues);
              }
            }
            if (undefined === issues.value) {
              if (key10019 in require) {
                exports.value[key10019] = undefined;
              }
            } else {
              exports.value[key10019] = issues.value;
            }
          }));
          continue;
        } else {
          if (runResult.issues.length) {
            if (!tmp2) {
              let issues = iter.issues;
              let push = issues.push;
              let items1 = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(closure_10.prefixIssues(key10019, runResult.issues), 0);
              let applyResult = HermesBuiltin.apply(items1, issues);
            }
            continue;
          }
          if (undefined === runResult.value) {
            if (!(key10019 in arg1)) {
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
    obj = { code: "unrecognized_keys", keys: items, input: value, inst };
    issues1.push(obj);
  }
  if (items.length) {
    iter = Promise.all(items).then(() => closure_1);
    const allPromises = Promise.all(items);
  }
  return iter;
}
function handleUnionResults(arr, issues, inst, arg3) {
  closure_0 = arg3;
  const iter = arr[Symbol.iterator]();
  const iter2 = iter.next();
  while (iter !== undefined) {
    if (0 === iter2.issues.length) {
      issues.value = iter2.value;
      iter.return();
      return issues;
    }
  }
  const found = arr.filter((item) => !closure_1_10.aborted(item));
  if (1 === found.length) {
    issues.value = found[0].value;
    let first = found[0];
  } else {
    issues = issues.issues;
    const obj = {
      code: "invalid_union",
      input: issues.value,
      inst,
      errors: arr.map((issues) => {
          issues = issues.issues;
          return issues.map((item) => closure_2_10.finalizeIssue(item, closure_1_0, closure_2_8.config()));
        })
    };
    arr = issues.push(obj);
    first = issues;
  }
  return first;
}
function handleExclusiveUnionResults(arr, issues, inst, arg3) {
  closure_0 = arg3;
  const found = arr.filter((issues) => 0 === issues.issues.length);
  if (1 === found.length) {
    issues.value = found[0].value;
  } else if (0 === found.length) {
    issues = issues.issues;
    let obj = {
      code: "invalid_union",
      input: issues.value,
      inst,
      errors: arr.map((issues) => {
          issues = issues.issues;
          return issues.map((item) => closure_2_10.finalizeIssue(item, closure_1_0, closure_2_8.config()));
        })
    };
    arr = issues.push(obj);
  } else {
    const issues1 = issues.issues;
    obj = { code: "invalid_union", input: issues.value, inst, errors: [], inclusive: false };
    arr = issues1.push(obj);
  }
  return issues;
}
function mergeValues(value, value2) {
  if (value === value2) {
    let obj = { valid: true, data: value };
    return obj;
  } else {
    const _Date2 = Date;
    if (value instanceof Date) {
      const _Date = Date;
      if (value2 instanceof Date) {
        if (+value === +value2) {
          obj = { valid: true, data: value };
          return obj;
        }
      }
    }
    obj = closure_10;
    if (closure_10.isPlainObject(value)) {
      if (obj.isPlainObject(value2)) {
        const _Object = Object;
        closure_0 = Object.keys(value2);
        const _Object2 = Object;
        const keys = Object.keys(value);
        const found = keys.filter((item) => -1 !== closure_0.indexOf(item));
        const obj1 = {};
        const merged = Object.assign(value);
        const merged1 = Object.assign(value2);
        const iter = found[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp18 = nextResult;
          let tmp20 = mergeValues(value[nextResult], value2[nextResult]);
          let tmp21 = tmp20;
          if (tmp20.valid) {
            obj1[tmp18] = tmp21.data;
            continue;
          } else {
            let obj2 = { valid: false, mergeErrorPath: null };
            let items = [tmp18];
            let arraySpreadResult = HermesBuiltin.arraySpread(tmp21.mergeErrorPath, 1);
            obj2.mergeErrorPath = items;
            iter.return();
            return obj2;
          }
        }
        const obj3 = { valid: true, data: obj1 };
        return obj3;
      }
    }
    const _Array = Array;
    if (Array.isArray(value)) {
      const _Array2 = Array;
      if (Array.isArray(value2)) {
        if (value.length !== value2.length) {
          const obj4 = { valid: false, mergeErrorPath: [] };
          return obj4;
        } else {
          const items1 = [];
          let num2 = 0;
          if (0 < value.length) {
            const tmp2 = mergeValues(value[num2], value2[num2]);
            while (tmp2.valid) {
              let arr = items1.push(tmp2.data);
              num2 = num2 + 1;
            }
            const obj5 = { valid: false, mergeErrorPath: null };
            const items2 = [num2];
            HermesBuiltin.arraySpread(tmp2.mergeErrorPath, 1);
            obj5.mergeErrorPath = items2;
            return obj5;
          }
          const obj6 = { valid: true, data: items1 };
          return obj6;
        }
      }
    }
    const obj7 = { valid: false, mergeErrorPath: [] };
    return obj7;
  }
}
function handleIntersectionResults(nextPromise, runResult, runResult1) {
  let tmp;
  const map = new Map();
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
      let issues = nextPromise.issues;
      let arr = issues.push(tmp3);
    }
    continue;
  }
  for (const item10054 of tmp14) {
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
      let issues1 = arg0.issues;
      arr = issues1.push(item10054);
    }
    continue;
  }
  const items = [...map];
  const found = items.filter((item) => {
    [, tmp] = item;
    return tmp.l && tmp.r;
  });
  const mapped = found.map((item) => {
    [tmp] = item;
    return tmp;
  });
  if (tmp25) {
    const issues2 = nextPromise.issues;
    const obj = {};
    const merged = Object.assign(tmp);
    obj.keys = mapped;
    issues2.push(obj);
  }
  if (closure_10.aborted(nextPromise)) {
    return nextPromise;
  } else {
    const tmp31 = mergeValues(runResult.value, runResult1.value);
    if (tmp31.valid) {
      nextPromise.value = tmp31.data;
      return nextPromise;
    } else {
      const _Error = Error;
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      const error = new Error("Unmergable intersection. Error path: " + JSON.stringify(tmp31.mergeErrorPath));
      throw error;
    }
  }
  tmp25 = mapped.length && tmp;
}
function handleTupleResult(promise, nextPromise, key10019) {
  if (promise.issues.length) {
    const issues = nextPromise.issues;
    const push = issues.push;
    const items = [];
    HermesBuiltin.arraySpread(closure_10.prefixIssues(key10019, promise.issues), 0);
    HermesBuiltin.apply(items, issues);
  }
  nextPromise.value[key10019] = promise.value;
}
function handleMapResult(issues, issues2, issues3, key, value, inst, arg6) {
  closure_0 = arg6;
  if (issues.issues.length) {
    let obj = closure_10;
    const propertyKeyTypes = closure_10.propertyKeyTypes;
    issues = issues3.issues;
    const push = issues.push;
    if (propertyKeyTypes.has(typeof key)) {
      const items = [];
      HermesBuiltin.arraySpread(obj.prefixIssues(key, issues.issues), 0);
      HermesBuiltin.apply(items, issues);
    } else {
      obj = { code: "invalid_key", origin: "map", input: value, inst, issues: null };
      const issues1 = issues.issues;
      obj.issues = issues1.map((item) => closure_10.finalizeIssue(item, closure_0, fnResult.config()));
      push(obj);
    }
  }
  if (issues2.issues.length) {
    const propertyKeyTypes2 = closure_10.propertyKeyTypes;
    issues2 = issues3.issues;
    const push2 = issues2.push;
    if (propertyKeyTypes2.has(typeof key)) {
      const items1 = [];
      HermesBuiltin.arraySpread(closure_10.prefixIssues(key, issues2.issues), 0);
      HermesBuiltin.apply(items1, issues2);
    } else {
      obj = { origin: "map", code: "invalid_element", input: value, inst, key, issues: null };
      issues3 = issues2.issues;
      obj.issues = issues3.map((item) => closure_10.finalizeIssue(item, closure_0, fnResult.config()));
      push2(obj);
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
    HermesBuiltin.arraySpread(promise.issues, 0);
    HermesBuiltin.apply(items, issues);
  }
  value = nextPromise.value;
  value.add(promise.value);
}
function handleCodecAResult(issues, transform, direction) {
  closure_1 = transform;
  closure_2 = direction;
  if (issues.issues.length) {
    issues.aborted = true;
    return issues;
  } else {
    if ("forward" === tmp) {
      const transformResult = transform.transform(issues.value, issues);
      if (transformResult instanceof Promise) {
        let nextPromise = transformResult.then((value) => {
          if (issues.issues.length) {
            issues.aborted = true;
            let runResult = issues;
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
        let obj = { value: transformResult, issues: issues.issues };
        nextPromise = _zod2.run(obj, direction);
      }
      return nextPromise;
    } else {
      const reverseTransformResult = transform.reverseTransform(issues.value, issues);
      if (reverseTransformResult instanceof Promise) {
        let nextPromise1 = reverseTransformResult.then((value) => {
          if (issues.issues.length) {
            issues.aborted = true;
            let runResult = issues;
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
        obj = { value: reverseTransformResult, issues: issues.issues };
        nextPromise1 = _zod.run(obj, direction);
      }
      return nextPromise1;
    }
    tmp = direction.direction || "forward";
  }
}
function handleReadonlyResult(value) {
  value.value = Object.freeze(value.value);
  return value;
}
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
    function isValidBase64URL(str) {
      const base64url = closure_9.base64url;
      if (base64url.test(str)) {
        const replaced = str.replace(/[-_]/g, (arg0) => {
          let str = "/";
          if ("-" === arg0) {
            str = "+";
          }
          return str;
        });
        const _Math = Math;
        return isValidBase64(replaced.padEnd(4 * Math.ceil(replaced.length / 4), "="));
      } else {
        return false;
      }
    }
    exports.$ZodType = undefined;
    exports.clone = undefined;
    exports.$ZodString = undefined;
    exports.$ZodStringFormat = undefined;
    exports.$ZodGUID = undefined;
    exports.$ZodUUID = undefined;
    exports.$ZodEmail = undefined;
    exports.$ZodURL = undefined;
    exports.$ZodEmoji = undefined;
    exports.$ZodNanoID = undefined;
    exports.$ZodCUID = undefined;
    exports.$ZodCUID2 = undefined;
    exports.$ZodULID = undefined;
    exports.$ZodXID = undefined;
    exports.$ZodKSUID = undefined;
    exports.$ZodISODateTime = undefined;
    exports.$ZodISODate = undefined;
    exports.$ZodISOTime = undefined;
    exports.$ZodISODuration = undefined;
    exports.$ZodIPv4 = undefined;
    exports.$ZodIPv6 = undefined;
    exports.$ZodMAC = undefined;
    exports.$ZodCIDRv4 = undefined;
    exports.$ZodCIDRv6 = undefined;
    exports.$ZodBase64 = undefined;
    exports.$ZodBase64URL = undefined;
    exports.$ZodE164 = undefined;
    exports.$ZodJWT = undefined;
    exports.$ZodCustomStringFormat = undefined;
    exports.$ZodNumber = undefined;
    exports.$ZodNumberFormat = undefined;
    exports.$ZodBoolean = undefined;
    exports.$ZodBigInt = undefined;
    exports.$ZodBigIntFormat = undefined;
    exports.$ZodSymbol = undefined;
    exports.$ZodUndefined = undefined;
    exports.$ZodNull = undefined;
    exports.$ZodAny = undefined;
    exports.$ZodUnknown = undefined;
    exports.$ZodNever = undefined;
    exports.$ZodVoid = undefined;
    exports.$ZodDate = undefined;
    exports.$ZodArray = undefined;
    exports.$ZodObject = undefined;
    exports.$ZodObjectJIT = undefined;
    exports.$ZodUnion = undefined;
    exports.$ZodXor = undefined;
    exports.$ZodDiscriminatedUnion = undefined;
    exports.$ZodIntersection = undefined;
    exports.$ZodTuple = undefined;
    exports.$ZodRecord = undefined;
    exports.$ZodMap = undefined;
    exports.$ZodSet = undefined;
    exports.$ZodEnum = undefined;
    exports.$ZodLiteral = undefined;
    exports.$ZodFile = undefined;
    exports.$ZodTransform = undefined;
    exports.$ZodOptional = undefined;
    exports.$ZodExactOptional = undefined;
    exports.$ZodNullable = undefined;
    exports.$ZodDefault = undefined;
    exports.$ZodPrefault = undefined;
    exports.$ZodNonOptional = undefined;
    exports.$ZodSuccess = undefined;
    exports.$ZodCatch = undefined;
    exports.$ZodNaN = undefined;
    exports.$ZodPipe = undefined;
    exports.$ZodCodec = undefined;
    exports.$ZodReadonly = undefined;
    exports.$ZodTemplateLiteral = undefined;
    exports.$ZodFunction = undefined;
    exports.$ZodPromise = undefined;
    exports.$ZodLazy = undefined;
    exports.$ZodCustom = undefined;
    exports.isValidBase64 = isValidBase64;
    exports.isValidBase64URL = isValidBase64URL;
    exports.isValidJWT = isValidJWT;
    let closure_7 = fn(_mod8941);
    let fnResult = fn(_mod8936);
    let closure_9 = fn(_mod8942);
    let closure_10 = fn(require("module_8939"));
    exports.$ZodType = fnResult.$constructor("$ZodType", (_default, def) => {
      let tmp = _default;
      let obj = _default;
      if (_default == null) {
        obj = {};
        tmp = obj;
      }
      tmp._zod.def = def;
      let bag = tmp._zod.bag;
      if (!bag) {
        bag = {};
      }
      tmp._zod.bag = bag;
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
        for (const item10041 of onattach) {
          let item10041Result = item10041(tmp);
          continue;
        }
        continue;
      }
      if (0 === items.length) {
        let _zod = tmp._zod;
        if (_zod.deferred == null) {
          _zod.deferred = [];
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
          closure_0 = parsed1;
          closure_3 = closure_10.aborted(parsed1);
          function _loop() {
            if (closure_4._zod.def.when) {
              const def = closure_4._zod.def;
              if (!def.when(length)) {
                return 0;
              }
            } else if (closure_3) {
              return 0;
            }
            const _zod = closure_4._zod;
            const checkResult = _zod.check(length.issues.length);
            skipChecks = checkResult;
            if (checkResult instanceof Promise) {
              let async;
              if (skipChecks != null) {
                async = skipChecks.async;
              }
              if (false === async) {
                ZodAsyncError = new ZodAsyncError.$ZodAsyncError();
                throw ZodAsyncError;
              }
            }
            if (!closure_2) {
              if (!(checkResult instanceof Promise)) {
                if (tmp4.issues.length === length) {
                  return 0;
                } else if (!closure_3) {
                  closure_3 = closure_1_10.aborted(tmp4, length);
                }
              }
            }
            let resolved = closure_2;
            if (closure_2 == null) {
              resolved = Promise.resolve();
            }
            closure_2 = resolved.then(closure_4(function*() {
              if (c2 === 2) {
                c2 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  obj = { value, done: true };
                  return obj;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  c2 = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      c1 = 1;
                      c2 = 1;
                      const obj1 = { value: checkResult, done: false };
                      return obj1;
                    }
                  } else if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    if (tmp4.issues.length !== closure_128_0) {
                      if (!closure_3) {
                        closure_3 = closure_2_10.aborted(tmp4, closure_128_0);
                      }
                    }
                    c2 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp13) {
                  c2 = tmp;
                  throw tmp13;
                }
              }
            }));
          }
          const iter = items[Symbol.iterator]();
          while (iter !== undefined) {
            closure_4 = iter.next();
            let _loopResult = _loop();
            continue;
          }
          if (runChecks) {
            nextPromise = runChecks.then(() => closure_0);
          }
          return nextPromise;
        };
        function handleCanaryResult(arg0, arg1, arg2) {

        }
        tmp._zod.run = (value, skipChecks) => {
          closure_0 = value;
          if (skipChecks.skipChecks) {
            const _zod4 = closure_0._zod;
            return _zod4.parse(value, skipChecks);
          } else if ("backward" === skipChecks.direction) {
            const _zod2 = closure_0._zod;
            obj = { value: value.value, issues: [] };
            obj = {};
            const merged = Object.assign(skipChecks);
            obj.skipChecks = true;
            const parsed = _zod2.parse(obj, obj);
            if (parsed instanceof Promise) {
              let nextPromise = parsed.then((result) => {
                if (typeof handleCanaryResult === "function") {
                  let _zod = skipChecks;
                  if (closure_1_10.aborted(result)) {
                    result.aborted = true;
                    let nextPromise = result;
                  } else {
                    const promise = runChecks(tmp, items, skipChecks);
                    if (promise instanceof Promise) {
                      if (false === skipChecks.async) {
                        ZodAsyncError = new ZodAsyncError.$ZodAsyncError();
                        throw ZodAsyncError;
                      } else {
                        nextPromise = promise.then((result) => {
                          _zod = _zod._zod;
                          return _zod.parse(result, _zod);
                        });
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
              closure_129_0 = skipChecks;
              if (closure_1_10.aborted(parsed)) {
                parsed.aborted = true;
                nextPromise = parsed;
              } else {
                const promise3 = runChecks(value, skipChecks, skipChecks);
                if (promise3 instanceof Promise) {
                  if (false === skipChecks.async) {
                    let ZodAsyncError = new closure_1_8.$ZodAsyncError();
                    throw ZodAsyncError;
                  } else {
                    nextPromise = promise3.then((result) => {
                      _zod = _zod._zod;
                      return _zod.parse(result, _zod);
                    });
                  }
                } else {
                  const _zod3 = closure_0._zod;
                  nextPromise = _zod3.parse(promise3, skipChecks);
                }
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
            return nextPromise;
          } else {
            let _zod = closure_0._zod;
            const parsed1 = _zod.parse(value, skipChecks);
            if (parsed1 instanceof Promise) {
              if (false === skipChecks.async) {
                const ZodAsyncError1 = new closure_1_8.$ZodAsyncError();
                throw ZodAsyncError1;
              } else {
                return parsed1.then((result) => runChecks(result, items, closure_1));
              }
            } else {
              return runChecks(parsed1, skipChecks, skipChecks);
            }
          }
        };
      }
      closure_10.defineLazy(tmp, "~standard", () => ({
        validate(arg0) {
          try {
            const safeParseResult = obj(runChecks[7]).safeParse(closure_1_0, arg0);
            if (safeParseResult.success) {
              obj = { value: safeParseResult.data };
            } else {
              let error = tmp7.error;
              let issues;
              if (error != null) {
                issues = error.issues;
              }
              obj = { issues };
            }
            return obj;
          } catch (err) {
            return obj(runChecks[7]).safeParseAsync(closure_1_0, tmp2).then((success) => {
              if (success.success) {
                obj = { value: success.data };
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
        version: 1
      }));
    });
    const _Object4 = Object;
    let obj = {
      enumerable: true,
      get() {
            return require("module_8939").clone;
          }
    };
    Object.defineProperty(exports, "clone", obj);
    exports.$ZodString = fnResult.$constructor("$ZodString", (_zod, arg1) => {
      const inst = _zod;
      const coerce = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      let patterns;
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
      let stringResult = items.pop();
      if (stringResult == null) {
        stringResult = closure_9.string(_zod._zod.bag);
      }
      _zod._zod.pattern = stringResult;
      _zod._zod.parse = (value, arg1) => {
        if (coerce.coerce) {
          try {
            const _String = String;
            value.value = String(value.value);
          } catch (err) {
          }
        }
        if (typeof value.value !== "string") {
          const issues = value.issues;
          const obj = { expected: "string", code: "invalid_type", input: value.value, inst };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodStringFormat = fnResult.$constructor("$ZodStringFormat", (arg0, arg1) => {
      const $ZodCheckStringFormat = closure_7.$ZodCheckStringFormat;
      $ZodCheckStringFormat.init(arg0, arg1);
      const $ZodString = exports.$ZodString;
      $ZodString.init(arg0, arg1);
    });
    exports.$ZodGUID = fnResult.$constructor("$ZodGUID", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.guid;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodUUID = fnResult.$constructor("$ZodUUID", (arg0, version) => {
      if (version.version) {
        const tmp3 = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[version.version];
        if (undefined === tmp3) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Invalid UUID version: \"" + version.version + "\"");
          throw error;
        } else if (version.pattern == null) {
          version.pattern = closure_9.uuid(tmp3);
        }
      } else if (version.pattern == null) {
        version.pattern = closure_9.uuid();
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, version);
    });
    exports.$ZodEmail = fnResult.$constructor("$ZodEmail", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.email;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodURL = fnResult.$constructor("$ZodURL", (_zod, arg1) => {
      const inst = _zod;
      closure_1 = arg1;
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, arg1);
      _zod._zod.check = (value) => {
        try {
          const trimmed = value.value.trim();
          const _URL = URL;
          const uRL = new URL(trimmed);
          const url = uRL;
          const url2 = closure_1;
          if (closure_1.hostname) {
            url2.hostname.lastIndex = 0;
            const hostname = url2.hostname;
            if (!hostname.test(url.hostname)) {
              const issues = value.issues;
              let obj = { code: "invalid_format", format: "url", note: "Invalid hostname", pattern: url2.hostname.source, input: value.value, inst, continue: !url2.abort };
              issues.push(obj);
            }
          }
          if (url2.protocol) {
            url2.protocol.lastIndex = 0;
            let protocol = url2.protocol;
            const protocol2 = url.protocol;
            protocol = url.protocol;
            if (protocol2.endsWith(":")) {
              let substr = protocol.slice(0, -1);
            } else {
              substr = protocol;
            }
            if (!protocol.test(substr)) {
              const issues1 = value.issues;
              obj = { code: "invalid_format", format: "url", note: "Invalid protocol", pattern: url2.protocol.source, input: value.value, inst, continue: !url2.abort };
              issues1.push(obj);
            }
          }
          if (url2.normalize) {
            const href = uRL.href;
            value.value = href;
          } else {
            value.value = trimmed;
          }
        } catch (err) {
          const issues2 = iter.issues;
          obj = { code: "invalid_format", format: "url", input: iter.value, inst, continue: !closure_1.abort };
          issues2.push(obj);
          return tmp;
        }
      };
    });
    exports.$ZodEmoji = fnResult.$constructor("$ZodEmoji", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.emoji();
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodNanoID = fnResult.$constructor("$ZodNanoID", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.nanoid;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodCUID = fnResult.$constructor("$ZodCUID", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.cuid;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodCUID2 = fnResult.$constructor("$ZodCUID2", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.cuid2;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodULID = fnResult.$constructor("$ZodULID", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.ulid;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodXID = fnResult.$constructor("$ZodXID", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.xid;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodKSUID = fnResult.$constructor("$ZodKSUID", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.ksuid;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodISODateTime = fnResult.$constructor("$ZodISODateTime", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.datetime(pattern);
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodISODate = fnResult.$constructor("$ZodISODate", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.date;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodISOTime = fnResult.$constructor("$ZodISOTime", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.time(pattern);
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodISODuration = fnResult.$constructor("$ZodISODuration", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.duration;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodIPv4 = fnResult.$constructor("$ZodIPv4", (_zod, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.ipv4;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, pattern);
      _zod._zod.bag.format = "ipv4";
    });
    exports.$ZodIPv6 = fnResult.$constructor("$ZodIPv6", (_zod, pattern) => {
      const inst = _zod;
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.ipv6;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, pattern);
      _zod._zod.bag.format = "ipv6";
      _zod._zod.check = (value) => {
        try {
          const _URL = URL;
          const _HermesInternal = HermesInternal;
          const uRL = new URL("http://[" + value.value + "]");
        } catch (err) {
          const issues = iter.issues;
          const obj = { code: "invalid_format", format: "ipv6", input: iter.value, inst, continue: !pattern.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodMAC = fnResult.$constructor("$ZodMAC", (_zod, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.mac(pattern.delimiter);
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, pattern);
      _zod._zod.bag.format = "mac";
    });
    exports.$ZodCIDRv4 = fnResult.$constructor("$ZodCIDRv4", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.cidrv4;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodCIDRv6 = fnResult.$constructor("$ZodCIDRv6", (_zod, pattern) => {
      const inst = _zod;
      _exports = pattern;
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.cidrv6;
      }
      const $ZodStringFormat = _exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, pattern);
      _zod._zod.check = (value) => {
        const parts = value.value.split("/");
        try {
          if (2 !== parts.length) {
            const _Error4 = Error;
            const error = new Error();
            throw error;
          } else {
            [tmp30, tmp31] = _slicedToArray(parts, 2);
            if (tmp31) {
              const _Number = Number;
              const NumberResult = Number(tmp31);
              const _HermesInternal = HermesInternal;
              if ("" + NumberResult !== tmp31) {
                const _Error3 = Error;
                const error1 = new Error();
                throw error1;
              } else {
                if (tmp6 >= 0) {
                  if (tmp6 <= 128) {
                    const _URL = URL;
                    const _HermesInternal2 = HermesInternal;
                    const uRL = new URL("http://[" + tmp30 + "]");
                  }
                }
                const _Error2 = Error;
                const error2 = new Error();
                throw error2;
              }
            } else {
              const _Error = Error;
              const error3 = new Error();
              throw error3;
            }
            const tmp29 = _slicedToArray(parts, 2);
          }
        } catch (err) {
          const issues = iter.issues;
          const obj = { code: "invalid_format", format: "cidrv6", input: iter.value, inst, continue: !pattern.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodBase64 = fnResult.$constructor("$ZodBase64", (_zod, pattern) => {
      const inst = _zod;
      _exports = pattern;
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.base64;
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
    exports.$ZodBase64URL = fnResult.$constructor("$ZodBase64URL", (_zod, pattern) => {
      const inst = _zod;
      _exports = pattern;
      if (pattern.pattern == null) {
        pattern.pattern = base64url.base64url;
      }
      const $ZodStringFormat = _exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, pattern);
      _zod._zod.bag.contentEncoding = "base64url";
      _zod._zod.check = (value) => {
        base64url = base64url.base64url;
        let flag = false;
        if (base64url.test(value.value)) {
          const replaced = str.replace(/[-_]/g, (arg0) => {
            let str = "/";
            if ("-" === arg0) {
              str = "+";
            }
            return str;
          });
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
    exports.$ZodE164 = fnResult.$constructor("$ZodE164", (arg0, pattern) => {
      if (pattern.pattern == null) {
        pattern.pattern = closure_9.e164;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodJWT = fnResult.$constructor("$ZodJWT", (_zod, arg1) => {
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
    exports.$ZodCustomStringFormat = fnResult.$constructor("$ZodCustomStringFormat", (_zod, arg1) => {
      const inst = _zod;
      closure_1 = arg1;
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, arg1);
      _zod._zod.check = (value) => {
        if (!closure_1.fn(value.value)) {
          const issues = value.issues;
          const obj = { code: "invalid_format", format: closure_1.format, input: value.value, inst, continue: !closure_1.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodNumber = fnResult.$constructor("$ZodNumber", (_zod, arg1) => {
      const inst = _zod;
      const coerce = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      let number = _zod._zod.bag.pattern;
      if (number == null) {
        number = closure_9.number;
      }
      _zod._zod.pattern = number;
      _zod._zod.parse = (value, arg1) => {
        if (coerce.coerce) {
          try {
            const _Number = Number;
            value.value = Number(value.value);
          } catch (err) {
          }
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
        let obj = { expected: "number", code: "invalid_type", input: value, inst };
        if (tmp2) {
          obj = { received: tmp2 };
        } else {
          obj = {};
        }
        const merged = Object.assign(obj);
        issues.push(obj);
        return value;
      };
    });
    exports.$ZodNumberFormat = fnResult.$constructor("$ZodNumberFormat", (arg0, arg1) => {
      const $ZodCheckNumberFormat = closure_7.$ZodCheckNumberFormat;
      $ZodCheckNumberFormat.init(arg0, arg1);
      const $ZodNumber = exports.$ZodNumber;
      $ZodNumber.init(arg0, arg1);
    });
    exports.$ZodBoolean = fnResult.$constructor("$ZodBoolean", (_zod, arg1) => {
      const inst = _zod;
      const coerce = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.pattern = closure_9.boolean;
      _zod._zod.parse = (value, arg1) => {
        if (coerce.coerce) {
          try {
            const _Boolean = Boolean;
            value.value = Boolean(value.value);
          } catch (err) {
          }
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
    exports.$ZodBigInt = fnResult.$constructor("$ZodBigInt", (_zod, arg1) => {
      const inst = _zod;
      const coerce = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.pattern = closure_9.bigint;
      _zod._zod.parse = (value, arg1) => {
        if (coerce.coerce) {
          try {
            const _BigInt = BigInt;
            value.value = BigInt(value.value);
          } catch (err) {
          }
        }
        if (typeof value.value !== "bigint") {
          const issues = value.issues;
          const obj = { expected: "bigint", code: "invalid_type", input: value.value, inst };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodBigIntFormat = fnResult.$constructor("$ZodBigIntFormat", (arg0, arg1) => {
      const $ZodCheckBigIntFormat = closure_7.$ZodCheckBigIntFormat;
      $ZodCheckBigIntFormat.init(arg0, arg1);
      const $ZodBigInt = exports.$ZodBigInt;
      $ZodBigInt.init(arg0, arg1);
    });
    exports.$ZodSymbol = fnResult.$constructor("$ZodSymbol", (_zod, arg1) => {
      const inst = _zod;
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
    exports.$ZodUndefined = fnResult.$constructor("$ZodUndefined", (_zod, arg1) => {
      const inst = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.pattern = closure_9.undefined;
      const items = [undefined];
      _zod._zod.values = new Set(items);
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
    });
    exports.$ZodNull = fnResult.$constructor("$ZodNull", (_zod, arg1) => {
      const inst = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.pattern = closure_9.null;
      _zod._zod.values = new Set([null]);
      _zod._zod.parse = (value, arg1) => {
        value = value.value;
        if (null !== value) {
          const issues = value.issues;
          const obj = { expected: "null", code: "invalid_type", input: value, inst };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodAny = fnResult.$constructor("$ZodAny", (_zod, arg1) => {
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (arg0) => arg0;
    });
    exports.$ZodUnknown = fnResult.$constructor("$ZodUnknown", (_zod, arg1) => {
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (arg0) => arg0;
    });
    exports.$ZodNever = fnResult.$constructor("$ZodNever", (_zod, arg1) => {
      const inst = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (input, arg1) => {
        const issues = input.issues;
        issues.push({ expected: "never", code: "invalid_type", input: input.value, inst });
        return input;
      };
    });
    exports.$ZodVoid = fnResult.$constructor("$ZodVoid", (_zod, arg1) => {
      const inst = _zod;
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
    exports.$ZodDate = fnResult.$constructor("$ZodDate", (_zod, arg1) => {
      const inst = _zod;
      const coerce = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value, arg1) => {
        if (coerce.coerce) {
          try {
            const _Date = Date;
            const date = new Date(value.value);
            value.value = date;
          } catch (err) {
          }
        }
        value = value.value;
        let tmp7 = tmp6;
        if (value instanceof Date) {
          const _Number = Number;
          tmp7 = !Number.isNaN(value.getTime());
        }
        if (tmp7) {
          return value;
        } else {
          const issues = value.issues;
          let obj = { expected: "date", code: "invalid_type", input: value };
          const tmp8 = tmp6 ? { received: "Invalid Date" } : {};
          const merged = Object.assign(tmp8);
          obj.inst = inst;
          obj = issues.push(obj);
        }
      };
    });
    exports.$ZodArray = fnResult.$constructor("$ZodArray", (_zod, arg1) => {
      const inst = _zod;
      _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value, arg1) => {
        let iter = value;
        const num3 = value;
        value = value.value;
        if (Array.isArray(value)) {
          const _Array = Array;
          iter.value = Array(value.length);
          let items = [];
          for (let num3 = 0; num3 < value.length; num3 = num3 + 1) {
            let _zod = element.element._zod;
            let obj = { value: value[num3], issues: [] };
            let runResult = _zod.run(obj, arg1);
            let _Promise = Promise;
            if (runResult instanceof Promise) {
              let arr = items.push(runResult.then((issues) => {
                if (issues.issues.length) {
                  issues = num3.issues;
                  const push = issues.push;
                  const items = [];
                  HermesBuiltin.arraySpread(closure_10.prefixIssues(num3, issues.issues), 0);
                  HermesBuiltin.apply(items, issues);
                }
                num3.value[num3] = issues.value;
              }));
            } else {
              if (runResult.issues.length) {
                let issues = iter.issues;
                let push = issues.push;
                let items1 = [];
                let arraySpreadResult = HermesBuiltin.arraySpread(closure_10.prefixIssues(num3, runResult.issues), 0);
                let applyResult = HermesBuiltin.apply(items1, issues);
              }
              iter.value[num3] = runResult.value;
            }
          }
          if (items.length) {
            iter = Promise.all(items).then(() => num3);
            const allPromises = Promise.all(items);
          }
          return iter;
        } else {
          const issues1 = iter.issues;
          obj = { expected: "array", code: "invalid_type", input: value, inst };
          issues1.push(obj);
          return iter;
        }
      };
    });
    exports.$ZodObject = fnResult.$constructor("$ZodObject", (_zod, shape) => {
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
            }
        };
        Object.defineProperty(shape, "shape", obj);
      }
      closure_3 = closure_10.cached(() => normalizeDef(closure_1));
      closure_10.defineLazy(_zod._zod, "propValues", () => {
        shape = shape.shape;
        const obj = {};
        for (const key10008 in shape) {
          let _zod = shape[key10008]._zod;
          if (!_zod.values) {
            continue;
          } else {
            if (obj[key10008] == null) {
              let _Set = Set;
              let tmp = new.target;
              let tmp2 = new.target;
              let set = new Set();
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
      const isObject = closure_10.isObject;
      const catchall = shape.catchall;
      _zod._zod.parse = (value, arg1) => {
        inst = value;
        closure_1 = arg1;
        if (value == null) {
          value = closure_3.value;
        }
        value = value.value;
        shape = value;
        if (isObject(value)) {
          value.value = {};
          let items = [];
          shape = value.shape;
          const keys = value.keys;
          function _loop4(iter) {
            closure_1 = tmp2;
            const _zod = tmp._zod;
            const runResult = _zod.run({ value: value[iter], issues: [] }, closure_1);
            if (runResult instanceof Promise) {
              items.push(runResult.then((issues) => {
                if (issues.issues.length) {
                  if (!closure_1) {
                    issues = iter.issues;
                    const push = issues.push;
                    items = [];
                    HermesBuiltin.arraySpread(closure_3_10.prefixIssues(iter, issues.issues), 0);
                    HermesBuiltin.apply(items, issues);
                  }
                }
                if (undefined === issues.value) {
                  if (iter in value) {
                    iter.value[iter] = undefined;
                  }
                } else {
                  iter.value[iter] = issues.value;
                }
              }));
            } else {
              if (runResult.issues.length) {
                if (!tmp2) {
                  let issues = iter.issues;
                  let push = issues.push;
                  items = [];
                  HermesBuiltin.arraySpread(closure_1_10.prefixIssues(iter, runResult.issues), 0);
                  HermesBuiltin.apply(items, issues);
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
            const obj = { value: value[iter], issues: [] };
          }
          const iter = keys[Symbol.iterator]();
          while (iter !== undefined) {
            let _loop4Result = _loop4(iter.next());
            continue;
          }
          if (catchall) {
            let nextPromise = handleCatchall(items, value, value, arg1, closure_3.value, inst);
          } else {
            nextPromise = value;
            if (items.length) {
              nextPromise = Promise.all(items).then(() => closure_0);
              const allPromises = Promise.all(items);
            }
          }
          return nextPromise;
        } else {
          let issues = value.issues;
          let obj = { expected: "object", code: "invalid_type", input: value, inst };
          issues.push(obj);
          return value;
        }
      };
    });
    exports.$ZodObjectJIT = fnResult.$constructor("$ZodObjectJIT", (_zod, catchall) => {
      const inst = _zod;
      _exports = catchall;
      const $ZodObject = _exports.$ZodObject;
      $ZodObject.init(_zod, catchall);
      const parse = _zod._zod.parse;
      value = closure_10.cached(() => normalizeDef(closure_1));
      const isObject = closure_10.isObject;
      const jitless = value.globalConfig.jitless;
      value = !jitless;
      if (!jitless) {
        value = closure_10.allowsEval.value;
      }
      catchall = catchall.catchall;
      _zod._zod.parse = (value, arg1) => {
        if (value == null) {
          value = value.value;
        }
        let tmp2 = value;
        value = value.value;
        if (isObject(value)) {
          if (value) {
            if (value) {
              let async;
              if (arg1 != null) {
                async = arg1.async;
              }
              let tmp12 = closure_2;
              if (!closure_2) {
                const tmp14 = ((shape) => {
                  closure_0 = shape;
                  const doc = new closure_0(closure_2[8]).Doc(["shape", "payload", "ctx"]);
                  value = value.value;
                  function parseStr(nextResult) {
                    const escResult = closure_1_10.esc(nextResult);
                    return "shape[" + escResult + "]._zod.run({ value: input[" + escResult + "], issues: [] }, ctx)";
                  }
                  doc.write("const input = payload.value;");
                  const obj = Object.create(null);
                  let num = 0;
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
                    let escResult = closure_2_10.esc(nextResult);
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
                      let writeResult3 = doc.write("\n        if (" + tmp10 + ".issues.length) {\n          if (" + escResult + " in input) {\n            payload.issues = payload.issues.concat(" + tmp10 + ".issues.map(iss => ({\n              ...iss,\n              path: iss.path ? [" + escResult + ", ...iss.path] : [" + escResult + "]\n            })));\n          }\n        }\n        \n        if (" + tmp10 + ".value === undefined) {\n          if (" + escResult + " in input) {\n            newResult[" + escResult + "] = undefined;\n          }\n        } else {\n          newResult[" + escResult + "] = " + tmp10 + ".value;\n        }\n        \n      ");
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
                      let writeResult4 = doc.write("\n        if (" + tmp10 + ".issues.length) {\n          payload.issues = payload.issues.concat(" + tmp10 + ".issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [" + escResult + ", ...iss.path] : [" + escResult + "]\n          })));\n        }\n        \n        if (" + tmp10 + ".value === undefined) {\n          if (" + escResult + " in input) {\n            newResult[" + escResult + "] = undefined;\n          }\n        } else {\n          newResult[" + escResult + "] = " + tmp10 + ".value;\n        }\n        \n      ");
                    }
                    continue;
                  }
                  doc.write("payload.value = newResult;");
                  doc.write("return payload;");
                  closure_1 = doc.compile();
                  return (arg0, arg1) => closure_1(closure_0, arg0, arg1);
                })(shape.shape);
                closure_2 = tmp14;
                tmp12 = tmp14;
              }
              const tmp12Result = tmp12(tmp2, arg1);
              tmp2 = catchall;
              if (catchall) {
                let tmp16 = handleCatchall([], value, tmp12Result, arg1, value, inst);
              }
            }
          }
          const tmp11 = parse(tmp2, arg1);
        } else {
          const issues = tmp2.issues;
          let obj = { expected: "object", code: "invalid_type", input: value, inst };
          issues.push(obj);
          return tmp2;
        }
      };
    });
    exports.$ZodUnion = fnResult.$constructor("$ZodUnion", (_zod, options) => {
      closure_0 = _zod;
      _exports = options;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, options);
      closure_10.defineLazy(_zod._zod, "optin", () => {
        options = options.options;
        let str;
        if (options.some((_zod) => "optional" === _zod._zod.optin)) {
          str = "optional";
        }
        return str;
      });
      closure_10.defineLazy(_zod._zod, "optout", () => {
        options = options.options;
        let str;
        if (options.some((_zod) => "optional" === _zod._zod.optout)) {
          str = "optional";
        }
        return str;
      });
      closure_10.defineLazy(_zod._zod, "values", () => {
        options = options.options;
        if (options.every((_zod) => _zod._zod.values)) {
          const _Set = Set;
          const options2 = tmp.options;
          const set = new Set(options2.flatMap((_zod) => Array.from(_zod._zod.values)));
          return set;
        }
        tmp = options;
      });
      closure_10.defineLazy(_zod._zod, "pattern", () => {
        options = options.options;
        if (options.every((_zod) => _zod._zod.pattern)) {
          options = tmp.options;
          const mapped = options.map((_zod) => _zod._zod.pattern);
          const _RegExp = RegExp;
          const mapped1 = mapped.map((source) => closure_1_10.cleanRegex(source.source));
          const _HermesInternal = HermesInternal;
          const regExp = new RegExp("^(" + mapped1.join("|") + ")$");
          return regExp;
        }
        tmp = options;
      });
      closure_2 = 1 === options.options.length;
      const run = options.options[0]._zod.run;
      _zod._zod.parse = (value, arg1) => {
        closure_0 = value;
        options = arg1;
        if (closure_2) {
          return run(value, arg1);
        } else {
          let flag = false;
          const items = [];
          options = options.options;
          const iter = options[Symbol.iterator]();
          while (iter !== undefined) {
            _zod = iter.next()._zod;
            let obj = { value: value.value, issues: [] };
            let runResult = _zod.run(obj, arg1);
            let tmp7 = runResult;
            let _Promise = Promise;
            if (runResult instanceof Promise) {
              let arr = items.push(tmp7);
              flag = true;
            } else if (0 === tmp7.issues.length) {
              iter.return();
              return tmp7;
            } else {
              arr = items.push(tmp7);
            }
            continue;
          }
          if (flag) {
            let nextPromise = Promise.all(items).then((result) => handleUnionResults(result, closure_0, closure_0, closure_1));
            const allPromises = Promise.all(items);
          } else {
            nextPromise = handleUnionResults(items, value, closure_0, arg1);
          }
          return nextPromise;
        }
      };
    });
    exports.$ZodXor = fnResult.$constructor("$ZodXor", (_zod, options) => {
      closure_0 = _zod;
      _exports = options;
      const $ZodUnion = _exports.$ZodUnion;
      $ZodUnion.init(_zod, options);
      options.inclusive = false;
      closure_2 = 1 === options.options.length;
      const run = options.options[0]._zod.run;
      _zod._zod.parse = (value, arg1) => {
        closure_0 = value;
        options = arg1;
        if (closure_2) {
          return run(value, arg1);
        } else {
          let flag = false;
          const items = [];
          options = options.options;
          const iter = options[Symbol.iterator]();
          while (iter !== undefined) {
            _zod = iter.next()._zod;
            let obj = { value: value.value, issues: [] };
            let runResult = _zod.run(obj, arg1);
            let _Promise = Promise;
            let tmp8 = runResult instanceof Promise;
            let arr = items.push(runResult);
            if (tmp8) {
              flag = true;
            }
            continue;
          }
          if (flag) {
            let nextPromise = Promise.all(items).then((arr) => {
              closure_0 = closure_1;
              const found = arr.filter((issues) => 0 === issues.issues.length);
              if (1 === found.length) {
                iter.value = found[0].value;
              } else if (0 === found.length) {
                let issues = iter.issues;
                let obj = {
                  code: "invalid_union",
                  input: iter.value,
                  inst: tmp,
                  errors: arr.map((issues) => {
                      issues = issues.issues;
                      return issues.map((item) => closure_2_10.finalizeIssue(item, closure_1_0, closure_2_8.config()));
                    })
                };
                arr = issues.push(obj);
              } else {
                const issues1 = iter.issues;
                obj = { code: "invalid_union", input: iter.value, inst: tmp, errors: [], inclusive: false };
                arr = issues1.push(obj);
              }
              return closure_0;
            });
            const allPromises = Promise.all(items);
          } else {
            handleExclusiveUnionResults(items, value, closure_0, arg1);
            nextPromise = value;
          }
          return nextPromise;
        }
      };
    });
    exports.$ZodDiscriminatedUnion = fnResult.$constructor("$ZodDiscriminatedUnion", (_zod, arg1) => {
      const inst = _zod;
      _exports = arg1;
      arg1.inclusive = false;
      const $ZodUnion = _exports.$ZodUnion;
      $ZodUnion.init(_zod, arg1);
      const parse = _zod._zod.parse;
      object.defineLazy(_zod._zod, "propValues", () => {
        const obj = {};
        const iter = closure_1.options[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let propValues = nextResult._zod.propValues;
          let tmp3 = propValues;
          if (propValues) {
            let _Object = Object;
            if (0 !== Object.keys(tmp3).length) {
              let _Object2 = Object;
              let entries = Object.entries(tmp3);
              for (const item10026 of entries) {
                let tmp7 = _slicedToArray(item10026, 2);
                let first = tmp7[0];
                let tmp9 = first;
                let tmp10 = tmp7[1];
                if (!obj[first]) {
                  let _Set = Set;
                  let tmp12 = new.target;
                  let tmp13 = new.target;
                  let set = new Set();
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
          let str = "\"";
          let str2 = "Invalid discriminated union option at index \"";
          let tmp21 = new.target;
          let tmp22 = new.target;
          let error = new Error("Invalid discriminated union option at index \"" + options.indexOf(nextResult) + "\"");
          throw error;
        }
        return obj;
      });
      value = object.cached(() => {
        const map = new Map();
        const iter = closure_1.options[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let propValues = nextResult._zod.propValues;
          let tmp3;
          let tmp2 = nextResult;
          if (propValues != null) {
            tmp3 = propValues[closure_1.discriminator];
          }
          let tmp5 = tmp3;
          if (tmp3) {
            if (0 !== tmp5.size) {
              for (const item10030 of tmp3) {
                if (map.has(item10030)) {
                  let _Error = Error;
                  let _String = String;
                  let _HermesInternal = HermesInternal;
                  let str = "\"";
                  let str2 = "Duplicate discriminator value \"";
                  let tmp13 = new.target;
                  let tmp14 = new.target;
                  let error = new Error("Duplicate discriminator value \"" + String(item10030) + "\"");
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
          let options = closure_1.options;
          let _HermesInternal2 = HermesInternal;
          let str3 = "\"";
          let str4 = "Invalid discriminated union option at index \"";
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error1 = new Error("Invalid discriminated union option at index \"" + options.indexOf(nextResult) + "\"");
          throw error1;
        }
        return map;
      });
      _zod._zod.parse = (value, arg1) => {
        value = value.value;
        if (object.isObject(value)) {
          value = value.value;
          let tmp5;
          if (value != null) {
            tmp5 = value[closure_1.discriminator];
          }
          value = value.get(tmp5);
          if (value) {
            const _zod = value._zod;
            let runResult = _zod.run(value, arg1);
          } else if (closure_1.unionFallback) {
            runResult = parse(value, arg1);
          } else {
            const issues = value.issues;
            let obj = { code: "invalid_union", errors: [], note: "No matching discriminator", discriminator: closure_1.discriminator, input: value, path: null, inst: null };
            const items = [closure_1.discriminator];
            obj.path = items;
            obj.inst = inst;
            issues.push(obj);
            runResult = value;
          }
          return runResult;
        } else {
          const issues1 = value.issues;
          obj = { code: "invalid_type", expected: "object", input: value, inst };
          issues1.push(obj);
          return value;
        }
      };
    });
    exports.$ZodIntersection = fnResult.$constructor("$ZodIntersection", (_zod, arg1) => {
      closure_0 = arg1;
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
        nextPromise = Promise.all(items).then((result) => {
          [tmp, tmp2] = result;
          handleIntersectionResults(closure_0, tmp, tmp2);
          return closure_0;
        });
        const allPromises = Promise.all(items);
      };
    });
    exports.$ZodTuple = fnResult.$constructor("$ZodTuple", (_zod, items) => {
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
          HermesBuiltin.arraySpread(items, 0);
          const reversed = items1.reverse();
          const findIndexResult = reversed.findIndex((_zod) => "optional" !== _zod._zod.optin);
          if (!items.rest) {
            let issues = nextPromise.issues;
            if (tmp9) {
              let obj = { code: "too_big", maximum: arr4.length, inclusive: true };
            } else {
              obj = { code: "too_small", minimum: arr4.length };
            }
            const obj1 = {};
            const merged = Object.assign(obj);
            obj1.input = value;
            obj1.inst = inst;
            obj1.origin = "array";
            issues.push(obj1);
            return nextPromise;
          }
          let num6 = -1;
          let sum1 = -1;
          for (const item10060 of arr4) {
            let sum = num6 + 1;
            num6 = sum;
            sum1 = sum;
            if (sum < value.length) {
              let _zod = tmp17._zod;
              let obj2 = { value: null, issues: null };
              obj2.value = value[num6];
              obj2.issues = [];
              let runResult = _zod.run(obj2, arg1);
              let promise = runResult;
              let _Promise = Promise;
              if (runResult instanceof Promise) {
                let arr = items.push(promise.then((issues) => {
                  if (issues.issues.length) {
                    issues = value.issues;
                    const push = issues.push;
                    items = [];
                    HermesBuiltin.arraySpread(closure_2_10.prefixIssues(sum1, issues.issues), 0);
                    HermesBuiltin.apply(items, issues);
                  }
                  value.value[sum1] = issues.value;
                }));
              } else {
                let tmp27 = handleTupleResult(promise, nextPromise, num6);
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
              let obj3 = { value: item10098, issues: [] };
              let runResult1 = _zod2.run(obj3, arg1);
              let promise2 = runResult1;
              let _Promise2 = Promise;
              if (runResult1 instanceof Promise) {
                let arr1 = items.push(promise2.then((issues) => {
                  if (issues.issues.length) {
                    issues = value.issues;
                    const push = issues.push;
                    items = [];
                    HermesBuiltin.arraySpread(closure_2_10.prefixIssues(sum1, issues.issues), 0);
                    HermesBuiltin.apply(items, issues);
                  }
                  value.value[sum1] = issues.value;
                }));
              } else {
                let tmp42 = handleTupleResult(promise2, nextPromise, num6);
              }
              continue;
            }
          }
          if (items.length) {
            nextPromise = Promise.all(items).then(() => closure_0);
            const allPromises = Promise.all(items);
          }
          return nextPromise;
        } else {
          const issues1 = nextPromise.issues;
          obj = { input: value, inst, expected: "tuple", code: "invalid_type" };
          issues1.push(obj);
          return nextPromise;
        }
      };
    });
    exports.$ZodRecord = fnResult.$constructor("$ZodRecord", (_zod, arg1) => {
      let inst = _zod;
      _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value, arg1) => {
        let tmp20;
        let nextPromise = value;
        inst = value;
        keyType = arg1;
        value = value.value;
        if (closure_1_10.isPlainObject(value)) {
          let items = [];
          const values = keyType.keyType._zod.values;
          nextPromise.value = {};
          if (values) {
            const _Set = Set;
            const set = new Set();
            function _loop5(iter2) {
              inst = iter2;
              let str = iter2;
              if (typeof iter2 === "number") {
                str = iter2.toString();
              }
              set.add(str);
              const _zod = closure_1.valueType._zod;
              const runResult = _zod.run({ value: value[iter2], issues: [] }, closure_1);
              if (runResult instanceof Promise) {
                items.push(runResult.then((issues) => {
                  if (issues.issues.length) {
                    issues = iter2.issues;
                    const push = issues.push;
                    items = [];
                    HermesBuiltin.arraySpread(closure_10.prefixIssues(iter2, issues.issues), 0);
                    HermesBuiltin.apply(items, issues);
                  }
                  iter2.value[iter2] = issues.value;
                }));
              } else {
                if (runResult.issues.length) {
                  let issues = inst.issues;
                  let push = issues.push;
                  items = [];
                  HermesBuiltin.arraySpread(closure_2_10.prefixIssues(iter2, runResult.issues), 0);
                  HermesBuiltin.apply(items, issues);
                }
                inst.value[iter2] = runResult.value;
              }
              const obj = { value: value[iter2], issues: [] };
            }
            const iter2 = values[Symbol.iterator]();
            while (iter2 !== undefined) {
              let _loop5Result = _loop5(iter2.next());
              continue;
            }
            let tmp21;
            const keys = Object.keys();
            if (keys !== undefined) {
              tmp21 = tmp20;
              while (keys[iter2] !== undefined) {
                if (set.has(tmp24)) {
                  continue;
                } else {
                  let items1 = tmp23;
                  if (tmp23 == null) {
                    items1 = [];
                  }
                  let arr = items1.push(tmp24);
                  tmp20 = items1;
                  continue;
                }
                continue;
              }
            }
            let tmp26 = tmp21;
            if (tmp21) {
              tmp26 = tmp21.length > 0;
            }
            if (tmp26) {
              let issues = nextPromise.issues;
              let obj = { code: "unrecognized_keys", input: value, inst, keys: tmp21 };
              issues.push(obj);
            }
          } else {
            const _Reflect = Reflect;
            function _loop6(iter) {
              inst = iter;
              if ("__proto__" === iter) {
                return 0;
              } else {
                const _zod3 = closure_1.keyType._zod;
                let obj = { value: iter, issues: [] };
                const runResult = _zod3.run(obj, runResult1);
                runResult1 = runResult;
                if (runResult instanceof Promise) {
                  const _Error2 = Error;
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
                        obj = { value: null, issues: null };
                        const _Number = Number;
                        obj.value = Number(iter);
                        obj.issues = [];
                        runResult1 = _zod.run(obj, tmp28);
                        if (runResult1 instanceof Promise) {
                          const _Error = Error;
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
                      obj = { code: "invalid_key", origin: "record", issues: null, input: null, path: null, inst: null };
                      const issues1 = iter.issues;
                      obj.issues = issues1.map((item) => closure_3_10.finalizeIssue(item, runResult1, closure_3_8.config()));
                      obj.input = iter;
                      items = [iter];
                      obj.path = items;
                      obj.inst = inst;
                      issues.push(obj);
                    }
                    return 0;
                  } else {
                    const _zod2 = closure_1.valueType._zod;
                    const obj1 = { value: value[iter], issues: [] };
                    const runResult2 = _zod2.run(obj1, tmp28);
                    if (runResult2 instanceof Promise) {
                      items.push(runResult2.then((issues) => {
                        if (issues.issues.length) {
                          issues = iter.issues;
                          const push = issues.push;
                          items = [];
                          HermesBuiltin.arraySpread(closure_10.prefixIssues(iter, issues.issues), 0);
                          HermesBuiltin.apply(items, issues);
                        }
                        iter.value[runResult1.value] = issues.value;
                      }));
                    } else {
                      if (runResult2.issues.length) {
                        const issues2 = inst.issues;
                        let push = issues2.push;
                        const items1 = [];
                        HermesBuiltin.arraySpread(closure_2_10.prefixIssues(iter, runResult2.issues), 0);
                        HermesBuiltin.apply(items1, issues2);
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
            nextPromise = Promise.all(items).then(() => closure_0);
            const allPromises = Promise.all(items);
          }
          return nextPromise;
        } else {
          let issues1 = nextPromise.issues;
          obj = { expected: "record", code: "invalid_type", input: value, inst };
          issues1.push(obj);
          return nextPromise;
        }
      };
    });
    exports.$ZodMap = fnResult.$constructor("$ZodMap", (_zod, arg1) => {
      let inst = _zod;
      _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value, arg1) => {
        let nextPromise = value;
        inst = value;
        closure_1 = arg1;
        value = value.value;
        closure_2 = value;
        if (value instanceof Map) {
          let items = [];
          const _Map = Map;
          const map = new Map();
          nextPromise.value = map;
          function _loop7(value) {
            closure_0 = value;
            const _zod = closure_1.keyType._zod;
            let obj = { value, issues: [] };
            const runResult = _zod.run(obj, closure_1);
            const _zod2 = closure_1.valueType._zod;
            obj = { value, issues: [] };
            const runResult1 = _zod2.run(obj, closure_1);
            if (!(runResult instanceof Promise)) {
              if (!(runResult1 instanceof Promise)) {
                handleMapResult(runResult, runResult1, closure_0, value, closure_2, closure_0, closure_1);
              }
            }
            items = [runResult, runResult1];
            items.push(Promise.all(items).then((result) => {
              [tmp, tmp2] = result;
              handleMapResult(tmp, tmp2, closure_0, closure_0, value, closure_0, closure_1);
            }));
            const allPromises = Promise.all(items);
          }
          const tmp9 = value[Symbol.iterator]();
          while (tmp9 !== undefined) {
            let tmp14 = _slicedToArray(tmp11, 2);
            value = tmp14[1];
            let _loop7Result = _loop7(tmp14[0]);
            continue;
          }
          if (items.length) {
            nextPromise = Promise.all(items).then(() => closure_0);
            let allPromises = Promise.all(items);
          }
          return nextPromise;
        } else {
          const issues = nextPromise.issues;
          let obj = { expected: "map", code: "invalid_type", input: value, inst };
          issues.push(obj);
          return nextPromise;
        }
      };
    });
    exports.$ZodSet = fnResult.$constructor("$ZodSet", (_zod, arg1) => {
      let inst = _zod;
      _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value, arg1) => {
        let nextPromise = value;
        inst = value;
        value = value.value;
        if (value instanceof Set) {
          let items = [];
          const _Set = Set;
          const set = new Set();
          nextPromise.value = set;
          const tmp9 = value[Symbol.iterator]();
          while (tmp9 !== undefined) {
            let _zod = valueType.valueType._zod;
            let obj = { value: tmp11, issues: [] };
            let runResult = _zod.run(obj, arg1);
            let promise = runResult;
            let _Promise = Promise;
            if (runResult instanceof Promise) {
              let arr = items.push(promise.then((issues) => {
                if (issues.issues.length) {
                  issues = value.issues;
                  const push = issues.push;
                  const items = [];
                  HermesBuiltin.arraySpread(issues.issues, 0);
                  HermesBuiltin.apply(items, issues);
                }
                value = value.value;
                value.add(issues.value);
              }));
            } else {
              let tmp17 = handleSetResult(promise, nextPromise);
            }
            continue;
          }
          if (items.length) {
            nextPromise = Promise.all(items).then(() => closure_0);
            const allPromises = Promise.all(items);
          }
          return nextPromise;
        } else {
          let issues = nextPromise.issues;
          obj = { input: value, inst, expected: "set", code: "invalid_type" };
          issues.push(obj);
          return nextPromise;
        }
      };
    });
    exports.$ZodEnum = fnResult.$constructor("$ZodEnum", (_zod, arg1) => {
      const inst = _zod;
      const $ZodType = enumValues.$ZodType;
      $ZodType.init(_zod, arg1);
      enumValues = closure_10.getEnumValues(arg1.entries);
      const set = new Set(enumValues);
      _zod._zod.values = set;
      const found = enumValues.filter((item) => {
        const propertyKeyTypes = closure_1_10.propertyKeyTypes;
        return propertyKeyTypes.has(typeof item);
      });
      const mapped = found.map((item) => {
        if (typeof item === "string") {
          let escapeRegexResult = closure_1_10.escapeRegex(item);
        } else {
          escapeRegexResult = item.toString();
        }
        return escapeRegexResult;
      });
      const regExp = new RegExp("^(" + mapped.join("|") + ")$");
      _zod._zod.pattern = regExp;
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
    exports.$ZodLiteral = fnResult.$constructor("$ZodLiteral", (_zod, arg1) => {
      const inst = _zod;
      _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      if (0 === arg1.values.length) {
        const _Error = Error;
        const error = new Error("Cannot create literal schema with no valid values");
        throw error;
      } else {
        const _Set = Set;
        const set = new Set(arg1.values);
        _zod._zod.values = set;
        const _RegExp = RegExp;
        const values = arg1.values;
        const mapped = values.map((item) => {
          if (typeof item === "string") {
            let escapeRegexResult = closure_1_10.escapeRegex(item);
          } else if (item) {
            escapeRegexResult = closure_1_10.escapeRegex(item.toString());
          } else {
            const _String = String;
            escapeRegexResult = String(item);
          }
          return escapeRegexResult;
        });
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("^(" + mapped.join("|") + ")$");
        _zod._zod.pattern = regExp;
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
    exports.$ZodFile = fnResult.$constructor("$ZodFile", (_zod, arg1) => {
      const inst = _zod;
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
    exports.$ZodTransform = fnResult.$constructor("$ZodTransform", (_zod, arg1) => {
      let constructor = _zod;
      _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value, direction) => {
        constructor = value;
        if ("backward" === direction.direction) {
          const ZodEncodeError = new fnResult.$ZodEncodeError(constructor.constructor.name);
          throw ZodEncodeError;
        } else {
          const transformResult = closure_1.transform(value.value, value);
          if (direction.async) {
            let resolved = transformResult;
            if (!tmp15) {
              resolved = Promise.resolve(transformResult);
            }
            return resolved.then((value) => {
              closure_0.value = value;
              return closure_0;
            });
          } else if (tmp15) {
            const ZodAsyncError = new fnResult.$ZodAsyncError();
            throw ZodAsyncError;
          } else {
            value.value = transformResult;
            return value;
          }
        }
      };
    });
    exports.$ZodOptional = fnResult.$constructor("$ZodOptional", (_zod, arg1) => {
      closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.optin = "optional";
      _zod._zod.optout = "optional";
      closure_10.defineLazy(_zod._zod, "values", () => {
        let set;
        if (closure_0.innerType._zod.values) {
          const _Set = Set;
          const items = [];
          items[HermesBuiltin.arraySpread(tmp.innerType._zod.values, 0)] = undefined;
          set = new Set(items);
        }
        return set;
      });
      closure_10.defineLazy(_zod._zod, "pattern", () => {
        const pattern = closure_0.innerType._zod.pattern;
        let regExp;
        if (pattern) {
          const _RegExp = RegExp;
          const _HermesInternal = HermesInternal;
          regExp = new RegExp("^(" + closure_10.cleanRegex(pattern.source) + ")?$");
        }
        return regExp;
      });
      _zod._zod.parse = (value, arg1) => {
        closure_0 = value;
        if ("optional" === closure_0.innerType._zod.optin) {
          const _zod2 = tmp.innerType._zod;
          const runResult = _zod2.run(value, arg1);
          if (runResult instanceof Promise) {
            let nextPromise = runResult.then((issues) => {
              let tmp2 = issues;
              if (issues.issues.length) {
                tmp2 = issues;
                if (undefined === tmp) {
                  const obj = { issues: [], value: "a" };
                  tmp2 = obj;
                }
              }
              return tmp2;
            });
          } else {
            nextPromise = runResult;
            if (runResult.issues.length) {
              nextPromise = runResult;
              if (undefined === tmp4) {
                let obj = { issues: [], value: "a" };
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
    exports.$ZodExactOptional = fnResult.$constructor("$ZodExactOptional", (_zod, arg1) => {
      closure_0 = arg1;
      const $ZodOptional = exports.$ZodOptional;
      $ZodOptional.init(_zod, arg1);
      closure_10.defineLazy(_zod._zod, "values", () => closure_0.innerType._zod.values);
      closure_10.defineLazy(_zod._zod, "pattern", () => closure_0.innerType._zod.pattern);
      _zod._zod.parse = (arg0, arg1) => {
        const _zod = closure_0.innerType._zod;
        return _zod.run(arg0, arg1);
      };
    });
    exports.$ZodNullable = fnResult.$constructor("$ZodNullable", (_zod, arg1) => {
      closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_10.defineLazy(_zod._zod, "optin", () => closure_0.innerType._zod.optin);
      closure_10.defineLazy(_zod._zod, "optout", () => closure_0.innerType._zod.optout);
      closure_10.defineLazy(_zod._zod, "pattern", () => {
        const pattern = closure_0.innerType._zod.pattern;
        let regExp;
        if (pattern) {
          const _RegExp = RegExp;
          const _HermesInternal = HermesInternal;
          regExp = new RegExp("^(" + closure_10.cleanRegex(pattern.source) + "|null)$");
        }
        return regExp;
      });
      closure_10.defineLazy(_zod._zod, "values", () => {
        let set;
        if (closure_0.innerType._zod.values) {
          const _Set = Set;
          const items = [];
          items[HermesBuiltin.arraySpread(tmp.innerType._zod.values, 0)] = null;
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
    exports.$ZodDefault = fnResult.$constructor("$ZodDefault", (_zod, arg1) => {
      const innerType = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.optin = "optional";
      closure_10.defineLazy(_zod._zod, "values", () => innerType.innerType._zod.values);
      _zod._zod.parse = (value, direction) => {
        if ("backward" === direction.direction) {
          const _zod2 = defaultValue.innerType._zod;
          return _zod2.run(value, direction);
        } else if (undefined === value.value) {
          value.value = defaultValue.defaultValue;
          return value;
        } else {
          const _zod = defaultValue.innerType._zod;
          const runResult = _zod.run(value, direction);
          if (runResult instanceof Promise) {
            let nextPromise = runResult.then((value) => {
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
    exports.$ZodPrefault = fnResult.$constructor("$ZodPrefault", (_zod, arg1) => {
      closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.optin = "optional";
      closure_10.defineLazy(_zod._zod, "values", () => closure_0.innerType._zod.values);
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
    exports.$ZodNonOptional = fnResult.$constructor("$ZodNonOptional", (_zod, arg1) => {
      const inst = _zod;
      closure_1 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_10.defineLazy(_zod._zod, "values", () => {
        const values = closure_1.innerType._zod.values;
        let set;
        if (values) {
          const _Set = Set;
          const items = [];
          HermesBuiltin.arraySpread(values, 0);
          set = new Set(items.filter((item) => undefined !== item));
        }
        return set;
      });
      _zod._zod.parse = (arg0, arg1) => {
        const _zod = closure_1.innerType._zod;
        const runResult = _zod.run(arg0, arg1);
        if (runResult instanceof Promise) {
          let nextPromise = runResult.then((issues) => {
            let length = issues.issues.length;
            if (!length) {
              length = undefined !== issues.value;
            }
            if (!length) {
              issues = issues.issues;
              const obj = { code: "invalid_type", expected: "nonoptional", input: issues.value, inst: _zod };
              issues.push(obj);
            }
            return issues;
          });
        } else {
          let length = runResult.issues.length;
          if (!length) {
            length = undefined !== runResult.value;
          }
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
    exports.$ZodSuccess = fnResult.$constructor("$ZodSuccess", (_zod, arg1) => {
      let innerType = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (arg0, direction) => {
        let nextPromise = arg0;
        innerType = arg0;
        if ("backward" === direction.direction) {
          const ZodEncodeError = new fnResult.$ZodEncodeError("ZodSuccess");
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
    exports.$ZodCatch = fnResult.$constructor("$ZodCatch", (_zod, arg1) => {
      closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_10.defineLazy(_zod._zod, "optin", () => closure_0.innerType._zod.optin);
      closure_10.defineLazy(_zod._zod, "optout", () => closure_0.innerType._zod.optout);
      closure_10.defineLazy(_zod._zod, "values", () => closure_0.innerType._zod.values);
      _zod._zod.parse = (value, direction) => {
        closure_1 = direction;
        if ("backward" === direction.direction) {
          const _zod = value.innerType._zod;
          return _zod.run(value, direction);
        } else {
          const _zod2 = value.innerType._zod;
          const runResult = _zod2.run(value, direction);
          if (runResult instanceof Promise) {
            let nextPromise = runResult.then((value) => {
              value.value = value.value;
              if (value.issues.length) {
                let obj = {};
                const merged = Object.assign(value);
                obj = { issues: null };
                const issues = value.issues;
                obj.issues = issues.map((item) => closure_3_10.finalizeIssue(item, direction, closure_3_8.config()));
                obj.error = obj;
                obj.input = value.value;
                value.value = value.catchValue(obj);
                value.issues = [];
              }
              return value;
            });
          } else {
            value.value = runResult.value;
            nextPromise = value;
            if (runResult.issues.length) {
              let obj = {};
              let merged = Object.assign(value);
              obj = { issues: null };
              let issues = runResult.issues;
              obj.issues = issues.map((item) => closure_10.finalizeIssue(item, closure_1, fnResult.config()));
              obj.error = obj;
              obj.input = value.value;
              value.value = value.catchValue(obj);
              value.issues = [];
              nextPromise = value;
            }
          }
          return nextPromise;
        }
      };
    });
    exports.$ZodNaN = fnResult.$constructor("$ZodNaN", (_zod, arg1) => {
      const inst = _zod;
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
    exports.$ZodPipe = fnResult.$constructor("$ZodPipe", (_zod, arg1) => {
      closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_10.defineLazy(_zod._zod, "values", () => closure_0.in._zod.values);
      closure_10.defineLazy(_zod._zod, "optin", () => closure_0.in._zod.optin);
      closure_10.defineLazy(_zod._zod, "optout", () => closure_0.out._zod.optout);
      closure_10.defineLazy(_zod._zod, "propValues", () => closure_0.in._zod.propValues);
      _zod._zod.parse = (arg0, direction) => {
        closure_0 = direction;
        if ("backward" === direction.direction) {
          const _zod2 = closure_0.out._zod;
          let runResult = _zod2.run(arg0, direction);
          if (runResult instanceof Promise) {
            let nextPromise = runResult.then((issues) => {
              if (issues.issues.length) {
                issues.aborted = true;
                let runResult = issues;
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
            let obj = { value: null, issues: null };
            ({ value: obj2.value, issues: obj2.issues } = runResult);
            nextPromise = _zod3.run(obj, direction);
          }
          return nextPromise;
        } else {
          const _zod4 = closure_0.in._zod;
          const runResult1 = _zod4.run(arg0, direction);
          if (runResult1 instanceof Promise) {
            let nextPromise1 = runResult1.then((issues) => {
              if (issues.issues.length) {
                issues.aborted = true;
                let runResult = issues;
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
            obj = { value: null, issues: null };
            ({ value: obj.value, issues: obj.issues } = runResult1);
            nextPromise1 = _zod.run(obj, direction);
          }
          return nextPromise1;
        }
      };
    });
    exports.$ZodCodec = fnResult.$constructor("$ZodCodec", (_zod, arg1) => {
      closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_10.defineLazy(_zod._zod, "values", () => closure_0.in._zod.values);
      closure_10.defineLazy(_zod._zod, "optin", () => closure_0.in._zod.optin);
      closure_10.defineLazy(_zod._zod, "optout", () => closure_0.out._zod.optout);
      closure_10.defineLazy(_zod._zod, "propValues", () => closure_0.in._zod.propValues);
      _zod._zod.parse = (arg0, direction) => {
        closure_0 = direction;
        if ("forward" === tmp) {
          const _zod2 = closure_0.in._zod;
          const runResult = _zod2.run(arg0, direction);
          if (runResult instanceof Promise) {
            let nextPromise = runResult.then((result) => handleCodecAResult(result, closure_0, closure_0));
          } else {
            nextPromise = handleCodecAResult(runResult, closure_0, direction);
          }
          return nextPromise;
        } else {
          const _zod = closure_0.out._zod;
          const runResult1 = _zod.run(arg0, direction);
          if (runResult1 instanceof Promise) {
            let nextPromise1 = runResult1.then((result) => handleCodecAResult(result, closure_0, closure_0));
          } else {
            nextPromise1 = handleCodecAResult(runResult1, closure_0, direction);
          }
          return nextPromise1;
        }
        tmp = direction.direction || "forward";
      };
    });
    exports.$ZodReadonly = fnResult.$constructor("$ZodReadonly", (_zod, arg1) => {
      closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_10.defineLazy(_zod._zod, "propValues", () => closure_0.innerType._zod.propValues);
      closure_10.defineLazy(_zod._zod, "values", () => closure_0.innerType._zod.values);
      closure_10.defineLazy(_zod._zod, "optin", () => {
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
      closure_10.defineLazy(_zod._zod, "optout", () => {
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
          const _zod = closure_0.innerType._zod;
          const runResult = _zod.run(arg0, direction);
          if (runResult instanceof Promise) {
            let nextPromise = runResult.then(handleReadonlyResult);
          } else {
            const _Object = Object;
            runResult.value = Object.freeze(runResult.value);
            nextPromise = runResult;
          }
          return nextPromise;
        }
      };
    });
    exports.$ZodTemplateLiteral = fnResult.$constructor("$ZodTemplateLiteral", (_zod, arg1) => {
      const inst = _zod;
      const format = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      const items = [];
      const iter = arg1.parts[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        if (typeof nextResult === "object") {
          if (null !== tmp3) {
            if (tmp3._zod.pattern) {
              let _RegExp = RegExp;
              let pattern = tmp3._zod.pattern;
              let tmp25 = tmp3._zod.pattern instanceof RegExp ? pattern.source : pattern;
              let arr3 = tmp25;
              if (tmp25) {
                let num2 = 0;
                if (arr3.startsWith("^")) {
                  num2 = 1;
                }
                let tmp32 = num2;
                let length = arr3.length;
                length = items.push(arr3.slice(tmp32, arr3.endsWith("$") ? length - 1 : length));
              } else {
                let _Error3 = Error;
                let _HermesInternal4 = HermesInternal;
                let str3 = "Invalid template literal part: ";
                let tmp27 = new.target;
                let tmp28 = new.target;
                let error = new Error("Invalid template literal part: " + tmp3._zod.traits);
                throw error;
              }
            } else {
              let _Error2 = Error;
              let items1 = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(tmp3._zod.traits, 0);
              let _HermesInternal3 = HermesInternal;
              let str2 = "Invalid template literal part, no pattern found: ";
              let tmp19 = new.target;
              let tmp20 = new.target;
              let error1 = new Error("Invalid template literal part, no pattern found: " + items1.shift());
              throw error1;
            }
          }
        }
        if (null !== tmp3) {
          let primitiveTypes = closure_10.primitiveTypes;
          if (!primitiveTypes.has(typeof tmp3)) {
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Invalid template literal part: ";
            let tmp8 = new.target;
            let tmp9 = new.target;
            let error2 = new Error("Invalid template literal part: " + tmp3);
            throw error2;
          }
        }
        let _HermesInternal2 = HermesInternal;
        let arr = items.push(closure_10.escapeRegex("" + tmp3));
        continue;
      }
      const regExp = new RegExp("^" + items.join("") + "$");
      _zod._zod.pattern = regExp;
      _zod._zod.parse = (value, arg1) => {
        if (typeof value.value !== "string") {
          const issues = value.issues;
          let obj = { input: value.value, inst, expected: "string", code: "invalid_type" };
          issues.push(obj);
        } else {
          inst._zod.pattern.lastIndex = 0;
          const pattern = inst._zod.pattern;
          if (!pattern.test(value.value)) {
            const issues1 = value.issues;
            obj = { input: value.value, inst, code: "invalid_format", format: null, pattern: null };
            let str = format.format;
            if (str == null) {
              str = "template_literal";
            }
            obj.format = str;
            obj.pattern = inst._zod.pattern.source;
            issues1.push(obj);
          }
        }
        return value;
      };
    });
    exports.$ZodFunction = fnResult.$constructor("$ZodFunction", (_zod, _def) => {
      const inst = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, _def);
      _zod._def = _def;
      _zod._zod.def = _def;
      _zod.implement = (fn) => {
        const _def = fn;
        if (typeof fn !== "function") {
          const _Error = Error;
          const error = new Error("implement() must be called with a function");
          throw error;
        } else {
          return function() {
            const items = [...arguments];
            let parsed = items;
            if (_def._def.input) {
              parsed = _mod8937.parse(_def._def.input, items);
            }
            const applyResult = Reflect.apply(_def, this, parsed);
            let parsed1 = applyResult;
            if (_def._def.output) {
              parsed1 = _mod8937.parse(_def._def.output, applyResult);
            }
            return parsed1;
          };
        }
      };
      _zod.implementAsync = (fn) => {
        closure_0 = fn;
        if (typeof fn !== "function") {
          const _Error = Error;
          const error = new Error("implementAsync() must be called with a function");
          throw error;
        } else {
          return asyncGeneratorStep(async function() {
            const self = this;
            closure_1 = [...arguments];
            c5 = 0;
            c6 = 0;
            const iter = (async (arg0) => {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  return { value, done: true };
                } else if (self._def.input) {
                  c5 = 2;
                  c6 = 1;
                  return { value: _self(8937).parseAsync(self._def.input, closure_130_0), done: false };
                } else {
                  let tmp12 = closure_130_0;
                }
              } else if (2 === tmp5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else {
                  tmp12 = value;
                  if (arg0 === 2) {
                    c6 = 3;
                    return { value, done: true };
                  }
                }
              } else {
                if (3 === tmp5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    return { value, done: true };
                  } else {
                    closure_130_2 = value;
                    if (self._def.output) {
                      c5 = 4;
                      c6 = 1;
                      return { value: _self(8937).parseAsync(self._def.output, closure_130_2), done: false };
                    } else {
                      let tmp6 = closure_130_2;
                    }
                  }
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else {
                  tmp6 = value;
                  if (arg0 === 2) {
                    c6 = 3;
                    return { value, done: true };
                  }
                }
                c6 = 3;
                return { value: tmp6, done: true };
              }
              closure_130_1 = tmp12;
              const _Reflect = Reflect;
              await Reflect.apply(closure_131_0, closure_4, closure_130_1);
              closure_4 = self;
              closure_3 = self;
              closure_2 = tmp2;
              closure_130_0 = closure_1;
              return "PX_16";
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
          let output = inst._def.output;
          if (output) {
            output = "promise" === inst._def.output._zod.def.type;
          }
          if (output) {
            let implementAsyncResult = inst.implementAsync(value.value);
          } else {
            implementAsyncResult = inst.implement(value.value);
          }
          value.value = implementAsyncResult;
          return value;
        }
      };
      _zod.input = () => {
        const items = [...arguments];
        let constructor = inst.constructor;
        let obj = { type: "function", input: null, output: null };
        if (Array.isArray(items[0])) {
          obj = { type: "tuple", items: null, rest: null };
          [obj2.items, obj2.rest] = items;
          const ZodTuple = new exports.$ZodTuple(obj);
          obj.input = ZodTuple;
          obj.output = inst._def.output;
          constructor = new constructor(obj);
        } else {
          obj.input = items[0];
          obj.output = inst._def.output;
          constructor = new constructor(obj);
        }
        return constructor;
      };
      _zod.output = (output) => {
        const constructor = new inst.constructor({ type: "function", input: inst._def.input, output });
        return constructor;
      };
      return _zod;
    });
    exports.$ZodPromise = fnResult.$constructor("$ZodPromise", (_zod, arg1) => {
      closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value, arg1) => {
        const innerType = arg1;
        const resolved = Promise.resolve(value.value);
        return resolved.then((value) => {
          const _zod = innerType.innerType._zod;
          return _zod.run({ value, issues: [] }, innerType);
        });
      };
    });
    exports.$ZodLazy = fnResult.$constructor("$ZodLazy", (_zod, arg1) => {
      closure_1 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_10.defineLazy(_zod._zod, "innerType", () => closure_1.getter());
      closure_10.defineLazy(_zod._zod, "pattern", () => {
        const innerType = _zod._zod.innerType;
        let pattern;
        if (innerType != null) {
          _zod = innerType._zod;
          if (_zod != null) {
            pattern = _zod.pattern;
          }
        }
        return pattern;
      });
      closure_10.defineLazy(_zod._zod, "propValues", () => {
        const innerType = _zod._zod.innerType;
        let propValues;
        if (innerType != null) {
          _zod = innerType._zod;
          if (_zod != null) {
            propValues = _zod.propValues;
          }
        }
        return propValues;
      });
      closure_10.defineLazy(_zod._zod, "optin", () => {
        const innerType = _zod._zod.innerType;
        let optin;
        if (innerType != null) {
          _zod = innerType._zod;
          if (_zod != null) {
            optin = _zod.optin;
          }
        }
        return optin;
      });
      closure_10.defineLazy(_zod._zod, "optout", () => {
        const innerType = _zod._zod.innerType;
        let optout;
        if (innerType != null) {
          _zod = innerType._zod;
          if (_zod != null) {
            optout = _zod.optout;
          }
        }
        return optout;
      });
      _zod._zod.parse = (arg0, arg1) => {
        _zod = _zod._zod.innerType._zod;
        return _zod.run(arg0, arg1);
      };
    });
    exports.$ZodCustom = fnResult.$constructor("$ZodCustom", (_zod, arg1) => {
      closure_0 = _zod;
      _exports = arg1;
      const $ZodCheck = closure_7.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (arg0, arg1) => arg0;
      _zod._zod.check = (value) => {
        const inst = value;
        value = value.value;
        closure_1 = value;
        fnResult = closure_1.fn(value);
        if (fnResult instanceof Promise) {
          return fnResult.then((result) => {
            if (!result) {
              const obj = { code: "custom", input: tmp2, inst, path: null, continue: null };
              let path = inst._zod.def.path;
              if (path == null) {
                path = [];
              }
              const items = [];
              HermesBuiltin.arraySpread(path, 0);
              obj.path = items;
              obj.continue = !inst._zod.def.abort;
              if (inst._zod.def.params) {
                obj.params = inst._zod.def.params;
              }
              const issues = tmp.issues;
              issues.push(closure_10.issue(obj));
            }
          });
        } else if (!fnResult) {
          let obj = { code: "custom", input: value, inst: tmp, path: null, continue: null };
          let path = tmp._zod.def.path;
          if (path == null) {
            path = [];
          }
          let items = [];
          HermesBuiltin.arraySpread(path, 0);
          obj.path = items;
          obj.continue = !tmp._zod.def.abort;
          if (tmp._zod.def.params) {
            obj.params = tmp._zod.def.params;
          }
          let issues = value.issues;
          issues.push(closure_1_10.issue(obj));
        }
      };
    });
  } else {
    let _Object2 = Object;
  }
} else {
  let _Object = Object;
}