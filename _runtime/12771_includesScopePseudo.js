// _runtime/12771_includesScopePseudo.js
import _mod12770 from "metro/12770__.js";
import _mod12772 from "metro/12772__.js";
import _mod12773 from "metro/12773__.js";
import _mod12777 from "metro/12777__.js";

const self = this;
function includesScopePseudo(type) {
  let tmp = type.type === _mod12773.SelectorType.Pseudo;
  if (tmp) {
    let tmp2 = "scope" === type.name;
    if (!tmp2) {
      const _Array = Array;
      let isArray = Array.isArray(type.data);
      if (isArray) {
        const data = type.data;
        isArray = data.some((arr) => arr.some(includesScopePseudo));
      }
      tmp2 = isArray;
    }
    tmp = tmp2;
  }
  return tmp;
}
function compileToken(arr, context, arr) {
  _require = context;
  const item = arr.forEach(traversal.default);
  context = context.context;
  let tmp2 = arr;
  if (null !== context) {
    tmp2 = arr;
    if (undefined !== context) {
      tmp2 = context;
    }
  }
  dependencyMap = Array.isArray(tmp2);
  obj = tmp2;
  if (tmp2) {
    const _Array = Array;
    let tmp3 = tmp2;
    if (!Array.isArray(tmp2)) {
      const items = [tmp2];
      tmp3 = items;
    }
    obj = tmp3;
  }
  if (false !== context.relativeSelector) {
    const adapter = context.adapter;
    if (null != obj) {
      obj.every((item) => {
        const tmp = tag.isTag(item) && tag.getParent(item);
        let tmp2 = item === _mod12777.PLACEHOLDER_ELEMENT;
        if (!tmp2) {
          let isTagResult = tmp;
          if (tmp) {
            isTagResult = tag.isTag(tmp);
          }
          tmp2 = isTagResult;
        }
        return tmp2;
      });
    }
    let num3 = 0;
    if (0 < arr.length) {
      while (true) {
        let arr2 = arr[num3];
        if (arr2.length > 0) {
          arr = arr2.unshift(obj2);
          num3 = num3 + 1;
          if (num3 >= arr.length) {
            break;
          }
        }
        if (tmp9) {
          if (!arr2.some(includesScopePseudo)) {
            let arr3 = arr2.unshift(obj);
          }
        }
      }
    }
  } else if (arr.some((item) => {
    let isTraversalResult = item.length > 0;
    if (isTraversalResult) {
      isTraversalResult = traversal.isTraversal(item[0]);
    }
    return isTraversalResult;
  })) {
    const _Error = Error;
    const error = new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
    throw error;
  }
  shouldTestNextSiblings = false;
  const mapped = arr.map((arr) => {
    if (arr.length >= 2) {
      [tmp6, tmp7] = arr;
      let tmp = tmp6.type !== _mod12773.SelectorType.Pseudo;
      if (!tmp) {
        tmp = "scope" !== tmp6.name;
      }
      if (!tmp) {
        if (closure_1) {
          if (tmp7.type === _mod12773.SelectorType.Descendant) {
            arr[1] = closure_8;
          }
        }
        let tmp3 = tmp7.type !== _mod12773.SelectorType.Adjacent;
        if (tmp3) {
          tmp3 = tmp7.type !== _mod12773.SelectorType.Sibling;
        }
        if (!tmp3) {
          c3 = true;
        }
      }
    }
    closure_1 = obj;
    let trueFunc = tag.rootFunc;
    if (null === trueFunc) {
      trueFunc = closure_4.default.trueFunc;
    }
    return arr.reduce((acc, item) => {
      if (acc === closure_2_4.default.falseFunc) {
        let falseFunc = closure_2_4.default.falseFunc;
      } else {
        falseFunc = closure_0(closure_1[4]).compileGeneralSelector(acc, item, closure_0, closure_1, compileToken);
      }
      return falseFunc;
    }, trueFunc);
  });
  const reduced = mapped.reduce(reduceRules, closure_4.default.falseFunc);
  reduced.shouldTestNextSiblings = shouldTestNextSiblings;
  return reduced;
}
function reduceRules(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  let tmp2 = arg0;
  if (arg1 !== closure_4.default.falseFunc) {
    tmp2 = arg0;
    if (arg0 !== closure_4.default.trueFunc) {
      let combine = arg1;
      if (arg0 !== closure_4.default.falseFunc) {
        combine = arg1;
        if (arg1 !== closure_4.default.trueFunc) {
          combine = function combine(arg0) {
            let tmp = closure_0(arg0);
            if (!tmp) {
              tmp = closure_1(arg0);
            }
            return tmp;
          };
        }
      }
      tmp2 = combine;
    }
  }
  return tmp2;
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
    function compileUnsafe(fn, context, arr) {
      let parsed = fn;
      if (typeof fn === "string") {
        parsed = _mod12773.parse(fn);
      }
      return compileToken(parsed, context, arr);
    }
    exports.compile = undefined;
    exports.compileUnsafe = undefined;
    exports.compileToken = undefined;
    let closure_4 = fn2(_mod12770);
    const traversal = fn(_mod12772);
    exports.compile = function compile(str, adapter, arr) {
      let parsed = str;
      if (typeof str === "string") {
        parsed = _mod12773.parse(str);
      }
      return _mod12777.ensureIsTag(compileToken(parsed, adapter, arr), adapter.adapter);
    };
    exports.compileUnsafe = compileUnsafe;
    { type: null }.type = _mod12773.SelectorType.Descendant;
    let closure_8 = { type: "_flexibleDescendant" };
    { type: null, name: "scope", data: null }.type = _mod12773.SelectorType.Pseudo;
    exports.compileToken = compileToken;
    let obj = { type: null };
    const obj2 = { type: null, name: "scope", data: null };
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}