// === Module 12945: ? ===

// Module 12945
import _mod9416 from "module_9416" /* 9416 */;
import _mod12946 from "module_12946" /* 12946 */;
import includesScopePseudo from "includesScopePseudo" /* 12947 */;

const self = this;
let f60077 = require;
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
    let fn2 = self;
    if (self) {
      fn2 = self.__importDefault;
    }
    if (!fn2) {
      fn2 = (__esModule) => {
        if (!__esModule) {
          obj = { default: __esModule };
          let tmp = obj;
        } else {
          tmp = __esModule;
        }
        return tmp;
      };
    }
    const _Object3 = Object;
    function prepareContext(arr, removeSubsets, arg2) {
      let flag = arg2;
      if (undefined === arg2) {
        flag = false;
      }
      let tmp = arr;
      if (flag) {
        const _Array = Array;
        if (Array.isArray(arr)) {
          let substr = arr.slice(0);
        } else {
          substr = [arr];
        }
        let num2 = 0;
        tmp = substr;
        if (0 < substr.length) {
          do {
            let push = substr.push;
            let applyResult = push.apply(substr, f60077(12953).getNextSiblings(substr[num2], removeSubsets));
            num2 = num2 + 1;
            tmp = substr;
          } while (num2 < length);
        }
      }
      if (Array.isArray(tmp)) {
        let removeSubsetsResult = removeSubsets.removeSubsets(tmp);
      } else {
        removeSubsetsResult = removeSubsets.getChildren(tmp);
      }
      return removeSubsetsResult;
    }
    exports.compile = undefined;
    exports._compileUnsafe = undefined;
    exports._compileToken = undefined;
    exports.prepareContext = undefined;
    exports.selectAll = undefined;
    exports.selectOne = undefined;
    exports.is = undefined;
    exports.filters = undefined;
    exports.pseudos = undefined;
    exports.aliases = undefined;
    let closure_5 = fn2(_mod12946);
    function defaultEquals(arg0, arg1) {
      return arg0 === arg1;
    }
    let obj = { adapter: fn(_mod9416), equals: defaultEquals };
    exports.compile = function addAdapter(arg0, arg1, arg2) {
      let tmp = arg1;
      if (null == arg1) {
        tmp = closure_7;
      }
      adapter = tmp.adapter;
      let tmp2 = null !== adapter;
      if (tmp2) {
        tmp2 = undefined !== adapter;
      }
      if (!tmp2) {
        tmp.adapter = adapter;
      }
      const equals = tmp.equals;
      let tmp4 = null !== equals;
      if (tmp4) {
        tmp4 = undefined !== equals;
      }
      if (!tmp4) {
        const adapter2 = tmp.adapter;
        let equals1;
        if (null !== adapter2) {
          if (undefined !== adapter2) {
            equals1 = adapter2.equals;
          }
        }
        if (null === equals1) {
          equals1 = metroRequire;
        }
        tmp.equals = equals1;
      }
      return f60077(arg0, tmp, arg2);
    };
    exports._compileUnsafe = function addAdapter(arg0, arg1, arg2) {
      let tmp = arg1;
      if (null == arg1) {
        tmp = closure_7;
      }
      adapter = tmp.adapter;
      let tmp2 = null !== adapter;
      if (tmp2) {
        tmp2 = undefined !== adapter;
      }
      if (!tmp2) {
        tmp.adapter = adapter;
      }
      const equals = tmp.equals;
      let tmp4 = null !== equals;
      if (tmp4) {
        tmp4 = undefined !== equals;
      }
      if (!tmp4) {
        const adapter2 = tmp.adapter;
        let equals1;
        if (null !== adapter2) {
          if (undefined !== adapter2) {
            equals1 = adapter2.equals;
          }
        }
        if (null === equals1) {
          equals1 = metroRequire;
        }
        tmp.equals = equals1;
      }
      return f60077(arg0, tmp, arg2);
    };
    exports._compileToken = function addAdapter(arg0, arg1, arg2) {
      let tmp = arg1;
      if (null == arg1) {
        tmp = closure_7;
      }
      adapter = tmp.adapter;
      let tmp2 = null !== adapter;
      if (tmp2) {
        tmp2 = undefined !== adapter;
      }
      if (!tmp2) {
        tmp.adapter = adapter;
      }
      const equals = tmp.equals;
      let tmp4 = null !== equals;
      if (tmp4) {
        tmp4 = undefined !== equals;
      }
      if (!tmp4) {
        const adapter2 = tmp.adapter;
        let equals1;
        if (null !== adapter2) {
          if (undefined !== adapter2) {
            equals1 = adapter2.equals;
          }
        }
        if (null === equals1) {
          equals1 = metroRequire;
        }
        tmp.equals = equals1;
      }
      return f60077(arg0, tmp, arg2);
    };
    exports.prepareContext = prepareContext;
    f60077 = (arg0, arg1, adapter) => {
      if (arg0 !== closure_5.default.falseFunc) {
        if (arg1) {
          if (0 !== arg1.length) {
            adapter = adapter.adapter;
            adapter.findAll(arg0, arg1);
          }
          return [];
        }
      }
    };
    exports.selectAll = function select(fn, arr, context) {
      let tmp = context;
      if (null == context) {
        tmp = closure_7;
      }
      adapter = tmp.adapter;
      let tmp2 = null !== adapter;
      if (tmp2) {
        tmp2 = undefined !== adapter;
      }
      if (!tmp2) {
        tmp.adapter = adapter;
      }
      const equals = tmp.equals;
      let tmp4 = null !== equals;
      if (tmp4) {
        tmp4 = undefined !== equals;
      }
      if (!tmp4) {
        const adapter2 = tmp.adapter;
        let equals1;
        if (null !== adapter2) {
          if (undefined !== adapter2) {
            equals1 = adapter2.equals;
          }
        }
        if (null === equals1) {
          equals1 = metroRequire;
        }
        tmp.equals = equals1;
      }
      let compileUnsafeResult = fn;
      if (typeof fn !== "function") {
        compileUnsafeResult = closure_0(12947).compileUnsafe(fn, tmp, arr);
      }
      const adapter3 = tmp.adapter;
      let flag = compileUnsafeResult.shouldTestNextSiblings;
      if (undefined === flag) {
        flag = false;
      }
      let tmp7 = arr;
      if (flag) {
        const _Array = Array;
        if (Array.isArray(arr)) {
          let substr = arr.slice(0);
        } else {
          substr = [arr];
        }
        let num2 = 0;
        tmp7 = substr;
        if (0 < substr.length) {
          do {
            let push = substr.push;
            let applyResult = push.apply(substr, closure_0(12953).getNextSiblings(substr[num2], adapter3));
            num2 = num2 + 1;
            tmp7 = substr;
          } while (num2 < length);
        }
      }
      if (Array.isArray(tmp7)) {
        let removeSubsetsResult = adapter3.removeSubsets(tmp7);
      } else {
        removeSubsetsResult = adapter3.getChildren(tmp7);
      }
      return f60077(compileUnsafeResult, removeSubsetsResult, tmp);
    };
    f60077 = (arg0, arg1, adapter) => {
      let findOneResult = null;
      if (arg0 !== closure_5.default.falseFunc) {
        findOneResult = null;
        if (arg1) {
          findOneResult = null;
          if (0 !== arg1.length) {
            adapter = adapter.adapter;
            findOneResult = adapter.findOne(arg0, arg1);
          }
        }
      }
      return findOneResult;
    };
    exports.selectOne = function select(fn, arr, context) {
      let tmp = context;
      if (null == context) {
        tmp = closure_7;
      }
      adapter = tmp.adapter;
      let tmp2 = null !== adapter;
      if (tmp2) {
        tmp2 = undefined !== adapter;
      }
      if (!tmp2) {
        tmp.adapter = adapter;
      }
      const equals = tmp.equals;
      let tmp4 = null !== equals;
      if (tmp4) {
        tmp4 = undefined !== equals;
      }
      if (!tmp4) {
        const adapter2 = tmp.adapter;
        let equals1;
        if (null !== adapter2) {
          if (undefined !== adapter2) {
            equals1 = adapter2.equals;
          }
        }
        if (null === equals1) {
          equals1 = metroRequire;
        }
        tmp.equals = equals1;
      }
      let compileUnsafeResult = fn;
      if (typeof fn !== "function") {
        compileUnsafeResult = closure_0(12947).compileUnsafe(fn, tmp, arr);
      }
      const adapter3 = tmp.adapter;
      let flag = compileUnsafeResult.shouldTestNextSiblings;
      if (undefined === flag) {
        flag = false;
      }
      let tmp7 = arr;
      if (flag) {
        const _Array = Array;
        if (Array.isArray(arr)) {
          let substr = arr.slice(0);
        } else {
          substr = [arr];
        }
        let num2 = 0;
        tmp7 = substr;
        if (0 < substr.length) {
          do {
            let push = substr.push;
            let applyResult = push.apply(substr, closure_0(12953).getNextSiblings(substr[num2], adapter3));
            num2 = num2 + 1;
            tmp7 = substr;
          } while (num2 < length);
        }
      }
      if (Array.isArray(tmp7)) {
        let removeSubsetsResult = adapter3.removeSubsets(tmp7);
      } else {
        removeSubsetsResult = adapter3.getChildren(tmp7);
      }
      return f60077(compileUnsafeResult, removeSubsetsResult, tmp);
    };
    exports.is = function is(arg0, fn, arg2) {
      let tmp = arg2;
      if (null == arg2) {
        tmp = obj;
      }
      adapter = tmp.adapter;
      let tmp2 = null !== adapter;
      if (tmp2) {
        tmp2 = undefined !== adapter;
      }
      if (!tmp2) {
        tmp.adapter = fnResult;
      }
      const equals = tmp.equals;
      let tmp4 = null !== equals;
      if (tmp4) {
        tmp4 = undefined !== equals;
      }
      if (!tmp4) {
        const adapter2 = tmp.adapter;
        let equals1;
        if (null !== adapter2) {
          if (undefined !== adapter2) {
            equals1 = adapter2.equals;
          }
        }
        if (null === equals1) {
          equals1 = defaultEquals;
        }
        tmp.equals = equals1;
      }
      let compileResult = fn;
      if (typeof fn !== "function") {
        compileResult = f60077(12947).compile(fn, tmp);
      }
      return compileResult(arg0);
    };
    exports.default = exports.selectAll;
    const _Object4 = Object;
    const obj2 = {
      enumerable: true,
      get() {
            return f60077(12956).filters;
          }
    };
    Object.defineProperty(exports, "filters", obj2);
    const _Object5 = Object;
    const obj3 = {
      enumerable: true,
      get() {
            return f60077(12956).pseudos;
          }
    };
    Object.defineProperty(exports, "pseudos", obj3);
    const _Object6 = Object;
    const obj4 = {
      enumerable: true,
      get() {
            return f60077(12956).aliases;
          }
    };
    Object.defineProperty(exports, "aliases", obj4);
    const fnResult = fn(_mod9416);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}