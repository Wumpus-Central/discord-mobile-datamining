// _runtime/metro/12168__.js
import _mod12160 from "12160__.js";
import _createClass from "00042__createClass.js";
import _classCallCheck from "00041__classCallCheck.js";
import c2 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import _wrapNativeSuper from "00158__wrapNativeSuper.js";

let self = this;
let $ZodCyclicError = exports;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
function isRecursive(_cachedInner, set, arg2) {
  closure_0 = set;
  closure_1 = arg2;
  const value2 = weakMap.get(_cachedInner);
  if (undefined !== value2) {
    return value2 ? c15 : c13;
  } else if (set.has(_cachedInner)) {
    return c15;
  } else {
    set.add(_cachedInner);
    closure_2 = c13;
    function check(innerType) {
      if (closure_2 !== c15) {
        let _zod;
        if (innerType != null) {
          _zod = innerType._zod;
        }
        if (_zod) {
          const tmp7 = isRecursive(innerType, closure_0, closure_1);
          if (tmp7 > closure_2) {
            closure_2 = tmp7;
          }
        }
      }
    }
    function merge(arg0) {
      if (arg0 > closure_2) {
        closure_2 = arg0;
      }
    }
    const def = _cachedInner._zod.def;
    switch (def.type) {
      case "object":
        const rawShapeResult = closure_7.rawShape(def);
        if (rawShapeResult) {
          let tmp32 = ((rawShapeResult, arg1) => {
            let tmp = c13;
            const ownKeysResult = Reflect.ownKeys(rawShapeResult);
            while (tmp3 !== undefined) {
              let _Object = Object;
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(rawShapeResult, tmp4);
              let iter = ownPropertyDescriptor;
              if (ownPropertyDescriptor.enumerable) {
                if (iter.get) {
                  let tmp9 = c14;
                } else {
                  value = iter.value;
                  let _zod;
                  if (value != null) {
                    _zod = value._zod;
                  }
                  if (_zod) {
                    tmp9 = isRecursive(iter.value, closure_0, closure_1);
                  } else {
                    tmp9 = c13;
                  }
                }
                if (tmp9 > tmp) {
                  tmp = tmp9;
                }
              }
              continue;
            }
            return tmp;
          })(rawShapeResult, true);
        } else {
          tmp32 = c14;
        }
        merge(tmp32);
        check(def.catchall);
        set.delete(_cachedInner);
        (function settle(_cachedInner, c13) {
          if (c13 !== closure_1_14) {
            const result = weakMap.set(_cachedInner, c13 === closure_1_15);
          }
          return c13;
        })(_cachedInner, closure_2);
        return closure_2;
      case "array":
        check(def.element);
        break;
      case "tuple":
        items = def.items;
        const iter2 = items[Symbol.iterator]();
        while (iter2 !== undefined) {
          let checkResult2 = check(iter2.next());
          continue;
        }
        check(def.rest);
        break;
      case "record":
        check(def.keyType);
        check(def.valueType);
        break;
      case "map":
        check(def.keyType);
        check(def.valueType);
        break;
      case "set":
        check(def.valueType);
        break;
      case "union":
        const options = def.options;
        let iter = options[Symbol.iterator]();
        while (iter !== undefined) {
          let checkResult7 = check(iter.next());
          continue;
        }
        break;
      case "intersection":
        check(def.left);
        check(def.right);
        break;
      case "optional":
        check(def.innerType);
        break;
      case "nullable":
        check(def.innerType);
        break;
      case "default":
        check(def.innerType);
        break;
      case "prefault":
        check(def.innerType);
        break;
      case "catch":
        check(def.innerType);
        break;
      case "readonly":
        check(def.innerType);
        break;
      case "nonoptional":
        check(def.innerType);
        break;
      case "promise":
        check(def.innerType);
        break;
      case "success":
        check(def.innerType);
        break;
      case "pipe":
        check(def.in);
        check(def.out);
        break;
      case "function":
        check(def.input);
        check(def.output);
        break;
      case "lazy":
        _cachedInner = def._cachedInner;
        if (_cachedInner == null) {
          let innerType;
          if (arg2) {
            innerType = _cachedInner._zod.innerType;
          }
          _cachedInner = innerType;
        }
        if (_cachedInner) {
          let tmp7 = isRecursive(_cachedInner, set, false);
        } else {
          tmp7 = c14;
        }
        merge(tmp7);
        break;
      case "template_literal":
        break;
      case "string":
        break;
      case "number":
        break;
      case "int":
        break;
      case "boolean":
        break;
      case "bigint":
        break;
      case "symbol":
        break;
      case "undefined":
        break;
      case "null":
        break;
      case "void":
        break;
      case "never":
        break;
      case "any":
        break;
      case "unknown":
        break;
      case "date":
        break;
      case "nan":
        break;
      case "enum":
        break;
      case "literal":
        break;
      case "file":
        break;
      case "transform":
        break;
      case "custom":
        break;
      default:
        const keys = Object.keys();
        if (keys !== undefined) {
          while (keys[tmp] !== undefined) {
            let _Object = Object;
            let iter4 = Object.getOwnPropertyDescriptor(def, tmp38);
            if (!iter4) {
              continue;
            } else {
              if (iter4.get) {
                continue;
              } else {
                value = iter4.value;
                if (!value) {
                  continue;
                } else {
                  if (typeof value !== "object") {
                    continue;
                  } else {
                    if (value._zod) {
                      let checkResult15 = check(value);
                      continue;
                    } else {
                      let _Array = Array;
                      if (!Array.isArray(value)) {
                        continue;
                      } else {
                        let iter3 = value[Symbol.iterator]();
                        while (iter3 !== undefined) {
                          let checkResult16 = check(iter3.next());
                          continue;
                        }
                      }
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
            continue;
          }
        }
    }
  }
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
        obj = {};
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
    function isBackEdge(arg0, value) {
      let backEdges;
      if (arg0[c9] != null) {
        backEdges = tmp.backEdges;
      }
      let hasItem = undefined !== backEdges;
      if (hasItem) {
        hasItem = null !== value && typeof value === "object";
        const tmp4 = null !== value && typeof value === "object";
      }
      if (hasItem) {
        hasItem = backEdges.has(value);
      }
      return hasItem;
    }
    exports.$ZodCyclicError = undefined;
    exports.isRecursiveSchema = function isRecursiveSchema(_zod) {
      return isRecursive(_zod, new Set(), true) !== c13;
    };
    exports.memoizer = function memoizer() {
      return obj;
    };
    exports.isBackEdge = isBackEdge;
    let closure_7 = fn(_mod12160);
    const _Error = Error;
    $ZodCyclicError = function $ZodCyclicError() {
      const self = this;
      _classCallCheck(this, $ZodCyclicError);
      items = ["Cannot parse a reference cycle that closes through a transform"];
      obj = _getPrototypeOf($ZodCyclicError);
      if (_isNativeReflectConstruct()) {
        const _Reflect = Reflect;
        let constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      const tmp3Result = _possibleConstructorReturn(self, constructResult);
      tmp3Result.name = "ZodCyclicError";
      return tmp3Result;
    };
    _inherits($ZodCyclicError, _wrapNativeSuper(Error));
    const _moduleResult = _createClass($ZodCyclicError);
    exports.$ZodCyclicError = _moduleResult;
    let c9 = "~memo";
    let closure_10 = [];
    let _WeakMap = WeakMap;
    let weakMap = new WeakMap();
    let c13 = 0;
    let c14 = 1;
    let c15 = 2;
    let closure_17 = [];
    let obj = {
      alloc(bound, nextPromise, _loop6) {
        if (c11) {
          c11 = undefined;
          const obj2 = { value: _loop6, issues: null };
          const result = obj.set(nextPromise.value, obj2);
          closure_17.push(obj2);
          return _loop6;
        } else {
          return _loop6;
        }
        obj = c11;
      },
      guard(_zod) {
        _zod = _zod._zod;
        if (_zod.deferred == null) {
          _zod.deferred = [];
        }
        const deferred = _zod._zod.deferred;
        deferred.push(() => {
          const parse = _zod._zod.parse;
          function wrapped(value, direction) {
            if ("backward" !== direction.direction) {
              value = value.value;
              let backEdges;
              if (direction[closure_2_9] != null) {
                backEdges = tmp2.backEdges;
              }
              let hasItem = undefined !== backEdges;
              if (hasItem) {
                hasItem = null !== value && typeof value === "object";
                const tmp6 = null !== value && typeof value === "object";
              }
              if (hasItem) {
                hasItem = backEdges.has(value);
              }
              if (hasItem) {
                const tmp10 = new closure_2_8();
                throw tmp10;
              }
            }
            return parse(value, direction);
          }
          _zod._zod.parse = wrapped;
          if (_zod._zod.run === parse) {
            _zod._zod.run = wrapped;
          }
        });
      },
      attach(_zod) {
        closure_0 = _zod;
        c4 = false;
        _zod = _zod._zod;
        if (_zod.deferred == null) {
          _zod.deferred = [];
        }
        const deferred = _zod._zod.deferred;
        deferred.push(() => {
          parse = parse._zod.parse;
          function wrapped(value, arg1) {
            if (undefined === c1) {
              const _Set = Set;
              const set = new Set();
              const tmp8 = isRecursive(parse, set, false);
              if (tmp8 === c13) {
                parse._zod.parse = parse;
                if (parse._zod.run === wrapped) {
                  parse._zod.run = parse;
                }
                return parse(value, arg1);
              } else {
                if (tmp8 !== c15) {
                  if (!c4) {
                    c4 = true;
                  }
                }
                c1 = true;
              }
            }
            value = value.value;
            if (tmp11) {
              let tmp14 = arg1[c9];
              if (!tmp14) {
                obj = { buckets: null, backEdges: "y" };
                const _WeakMap = WeakMap;
                weakMap = new WeakMap();
                obj.buckets = weakMap;
                arg1[tmp13] = obj;
                tmp14 = obj;
              }
              if (closure_2 !== arg1) {
                const buckets = tmp14.buckets;
                value2 = buckets.get(parse);
                if (!value2) {
                  const _WeakMap2 = WeakMap;
                  const weakMap1 = new WeakMap();
                  const buckets2 = tmp14.buckets;
                  const result = buckets2.set(parse, weakMap1);
                  value2 = weakMap1;
                }
                closure_2 = arg1;
              }
              const iter = value2.get(value);
              if (iter) {
                value.value = iter.value;
                if (iter.issues) {
                  if (iter.issues.length) {
                    let issues = value.issues;
                    const push = issues.push;
                    const issues1 = iter.issues;
                    items = [];
                    HermesBuiltin.arraySpread(
                      issues1.map((path) => {
                        obj = {};
                        const merged = Object.assign(path);
                        if (path.path) {
                          path = path.path;
                          obj.path = path.slice();
                          let tmp2 = obj;
                        } else {
                          tmp2 = obj;
                        }
                        return tmp2;
                      }),
                      0,
                    );
                    HermesBuiltin.apply(items, issues);
                  }
                } else {
                  value.memo = true;
                  if (tmp14.backEdges == null) {
                    const _WeakSet = WeakSet;
                    const weakSet = new WeakSet();
                    tmp14.backEdges = weakSet;
                  }
                  const backEdges = tmp14.backEdges;
                  backEdges.add(iter.value);
                }
                return value;
              } else {
                const promise = parse(value, arg1);
                c11 = undefined;
                let arr2;
                if (closure_17.length > closure_17.length) {
                  arr2 = closure_17.pop();
                }
                if (promise instanceof Promise) {
                  let nextPromise = promise.then((issues) => {
                    if (!arr2) {
                      return issues;
                    } else {
                      if (issues.issues.length) {
                        issues = issues.issues;
                        let mapped = issues.map((path) => {
                          obj = {};
                          const merged = Object.assign(path);
                          if (path.path) {
                            path = path.path;
                            obj.path = path.slice();
                            let tmp2 = obj;
                          } else {
                            tmp2 = obj;
                          }
                          return tmp2;
                        });
                      } else {
                        mapped = closure_2_10;
                      }
                      tmp.issues = mapped;
                    }
                  });
                } else {
                  nextPromise = promise;
                  if (arr2) {
                    if (promise.issues.length) {
                      const issues2 = promise.issues;
                      let mapped = issues2.map((path) => {
                        obj = {};
                        const merged = Object.assign(path);
                        if (path.path) {
                          path = path.path;
                          obj.path = path.slice();
                          let tmp2 = obj;
                        } else {
                          tmp2 = obj;
                        }
                        return tmp2;
                      });
                    } else {
                      mapped = closure_10;
                    }
                    arr2.issues = mapped;
                    nextPromise = promise;
                  }
                }
                return nextPromise;
              }
            } else {
              return parse(value, arg1);
            }
            tmp11 = null !== value && typeof value === "object";
          }
          parse._zod.parse = wrapped;
          if (parse._zod.run === parse) {
            parse._zod.run = wrapped;
          }
        });
      },
    };
    (() => {
      let tmp = $ZodCyclicError;
      const ownPropertyNames = Object.getOwnPropertyNames($ZodCyclicError);
      let num = 0;
      if (0 < ownPropertyNames.length) {
        const _Object = Object;
        const ownPropertyDescriptor = Object.getOwnPropertyDescriptor($ZodCyclicError, ownPropertyNames[num]);
        if (ownPropertyDescriptor) {
          if (ownPropertyDescriptor.get) {
            if (ownPropertyDescriptor.configurable) {
              try {
                value = ownPropertyDescriptor.get();
                if (undefined !== value) {
                  const _Object2 = Object;
                  obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
                  Object.defineProperty($ZodCyclicError, ownPropertyNames[num], obj);
                }
              } catch (err) {}
            }
          }
        }
        num = num + 1;
        tmp = $ZodCyclicError;
      }
      const frozen = Object.freeze(tmp);
    })();
  } else {
    let _Object2 = Object;
  }
} else {
  let _Object = Object;
}
