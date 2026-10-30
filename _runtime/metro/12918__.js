// _runtime/metro/12918__.js
import _mod12911 from "12911__.js";

const self = this;
let fn = this;
if (this) {
  fn = self.__spreadArray;
}
if (!fn) {
  fn = (arr, arg1, arg2) => {
    let tmp;
    if (arg2) {
      let num4 = 0;
      if (0 < arg1.length) {
        while (true) {
          let tmp4 = !tmp3;
          let tmp6 = tmp3;
          if (!tmp3) {
            tmp4 = num4 in arg1;
          }
          let tmp7 = tmp3;
          if (!tmp4) {
            if (!tmp3) {
              break;
            } else {
              tmp6[num4] = arg1[num4];
              tmp7 = tmp6;
            }
          }
          num4 = num4 + 1;
          tmp3 = tmp7;
          tmp = tmp7;
        }
        const _Array = Array;
        const call = slice.call;
        typeof call === "unknown" ? slice(0, num4) : call(arg1, 0, num4);
      }
    }
    if (tmp) {
      return arr.concat(tmp);
    } else {
      const _Array2 = Array;
      const call2 = slice2.call;
      typeof call2 === "unknown" ? slice2() : call2(arg1);
    }
  };
}
let fn2 = self;
if (self) {
  fn2 = self.__importDefault;
}
if (!fn2) {
  fn2 = (__esModule) => {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
function ensureIsTag(tmpResult, adapter) {
  closure_0 = tmpResult;
  closure_1 = adapter;
  if (tmpResult === module_12911.default.falseFunc) {
    fn = module_12911.default.falseFunc;
  } else {
    fn = (arr) => {
      let isTagResult = adapter.isTag(arr);
      if (isTagResult) {
        isTagResult = closure_0(arr);
      }
      return isTagResult;
    };
  }
  return fn;
}
function getNextSiblings(substr, adapter3) {
  const siblings = adapter3.getSiblings(substr);
  if (siblings.length <= 1) {
    return [];
  } else {
    const index = siblings.indexOf(substr);
    if (index >= 0) {
      if (index !== siblings.length - 1) {
        substr = siblings.slice(index + 1);
        let found = substr.filter(adapter3.isTag);
      }
      return found;
    }
    found = [];
  }
}
let module_12911 = fn2(_mod12911);
function is(arg0, value, xmlMode, length, fn) {
  closure_0 = arg0;
  let tmp = fn(
    value,
    {
      xmlMode: xmlMode.xmlMode,
      lowerCaseAttributeNames: xmlMode.lowerCaseAttributeNames,
      lowerCaseTags: xmlMode.lowerCaseTags,
      quirksMode: xmlMode.quirksMode,
      cacheResults: xmlMode.cacheResults,
      pseudos: xmlMode.pseudos,
      adapter: xmlMode.adapter,
      equals: xmlMode.equals,
    },
    length,
  );
  closure_1 = tmp;
  if (tmp === module_12911.default.trueFunc) {
    return arg0;
  } else if (tmp === module_12911.default.falseFunc) {
    ({ default: _default, falseFunc } = module_12911);
  } else {
    falseFunc = (arg0) => {
      let tmp = closure_1(arg0);
      if (tmp) {
        tmp = closure_0(arg0);
      }
      return tmp;
    };
  }
  const obj = {
    xmlMode: xmlMode.xmlMode,
    lowerCaseAttributeNames: xmlMode.lowerCaseAttributeNames,
    lowerCaseTags: xmlMode.lowerCaseTags,
    quirksMode: xmlMode.quirksMode,
    cacheResults: xmlMode.cacheResults,
    pseudos: xmlMode.pseudos,
    adapter: xmlMode.adapter,
    equals: xmlMode.equals,
  };
}

export const PLACEHOLDER_ELEMENT = {};
export { ensureIsTag };
export { getNextSiblings };
export const subselects = {
  is,
  matches: is,
  where: is,
  not(arg0, value, xmlMode, length, fn) {
    closure_0 = arg0;
    let tmp = fn(
      value,
      {
        xmlMode: xmlMode.xmlMode,
        lowerCaseAttributeNames: xmlMode.lowerCaseAttributeNames,
        lowerCaseTags: xmlMode.lowerCaseTags,
        quirksMode: xmlMode.quirksMode,
        cacheResults: xmlMode.cacheResults,
        pseudos: xmlMode.pseudos,
        adapter: xmlMode.adapter,
        equals: xmlMode.equals,
      },
      length,
    );
    closure_1 = tmp;
    if (tmp === module_12911.default.falseFunc) {
      return arg0;
    } else if (tmp === module_12911.default.trueFunc) {
      ({ default: _default, falseFunc } = module_12911);
    } else {
      falseFunc = (arg0) => {
        const tmp = closure_1(arg0);
        let tmp2 = !tmp;
        if (!tmp) {
          tmp2 = closure_0(arg0);
        }
        return tmp2;
      };
    }
    const obj = {
      xmlMode: xmlMode.xmlMode,
      lowerCaseAttributeNames: xmlMode.lowerCaseAttributeNames,
      lowerCaseTags: xmlMode.lowerCaseTags,
      quirksMode: xmlMode.quirksMode,
      cacheResults: xmlMode.cacheResults,
      pseudos: xmlMode.pseudos,
      adapter: xmlMode.adapter,
      equals: xmlMode.equals,
    };
  },
  has(arg0, arr, adapter, arg3, fn) {
    closure_0 = arg0;
    adapter = adapter.adapter;
    const obj = {
      xmlMode: adapter.xmlMode,
      lowerCaseAttributeNames: adapter.lowerCaseAttributeNames,
      lowerCaseTags: adapter.lowerCaseTags,
      quirksMode: adapter.quirksMode,
      cacheResults: adapter.cacheResults,
      pseudos: adapter.pseudos,
      adapter: adapter.adapter,
      equals: adapter.equals,
      relativeSelector: true,
    };
    let tmp;
    if (arr.some((arr) => arr.some(closure_0(items[1]).isTraversal))) {
      let items = [adapter.PLACEHOLDER_ELEMENT];
      tmp = items;
    }
    items = tmp;
    const tmp3 = fn(arr, obj, tmp);
    if (tmp3 === module_12911.default.falseFunc) {
      return tmp4.default.falseFunc;
    } else {
      closure_0 = tmp3;
      if (tmp3 === tmp4.default.falseFunc) {
        fn = tmp4.default.falseFunc;
      } else {
        fn = (arr) => {
          let isTagResult = adapter.isTag(arr);
          if (isTagResult) {
            isTagResult = closure_0(arr);
          }
          return isTagResult;
        };
      }
      if (tmp) {
        if (tmp3 !== tmp4.default.trueFunc) {
          const shouldTestNextSiblings = tmp3.shouldTestNextSiblings;
          module_12911 = undefined !== shouldTestNextSiblings && shouldTestNextSiblings;
          return (arg0) => {
            if (closure_0(arg0)) {
              items[0] = arg0;
              const children = adapter.getChildren(arg0);
              if (!closure_4) {
                return adapter.existsOne(fn, children);
              } else {
                const siblings = adapter.getSiblings(arg0);
                if (siblings.length <= 1) {
                  items = [];
                } else {
                  const index = siblings.indexOf(arg0);
                  if (index >= 0) {
                    if (index !== siblings.length - 1) {
                      const substr = siblings.slice(index + 1);
                      items = substr.filter(adapter.isTag);
                    }
                  }
                  items = [];
                }
                fn(fn([], children, true), items, true);
                const tmp6 = fn([], children, true);
              }
            } else {
              return false;
            }
          };
        }
      }
      return (arg0) => {
        let existsOneResult = closure_0(arg0);
        if (existsOneResult) {
          existsOneResult = adapter.existsOne(fn, adapter.getChildren(arg0));
        }
        return existsOneResult;
      };
    }
  },
};
