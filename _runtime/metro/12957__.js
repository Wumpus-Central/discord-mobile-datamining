// === Module 12957: ? ===

// Module 12957
import _mod12946 from "module_12946" /* 12946 */;
import _mod12958 from "module_12958" /* 12958 */;

let isActive = exports;
let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
const parse = fn(_mod12958);
const module_12946 = fn(_mod12946);
isActive = "isHovered";
isActive = "isVisited";
isActive = "isActive";

export const filters = {
  contains(arg0, arg1, adapter) {
    closure_0 = arg0;
    closure_1 = arg1;
    adapter = adapter.adapter;
    return function contains(arg0) {
      let hasItem = closure_0(arg0);
      if (hasItem) {
        const text = adapter.getText(arg0);
        hasItem = text.includes(closure_1);
      }
      return hasItem;
    };
  },
  icontains(arg0, str, adapter) {
    closure_0 = arg0;
    adapter = adapter.adapter;
    closure_2 = str.toLowerCase();
    return function icontains(arg0) {
      let hasItem = closure_0(arg0);
      if (hasItem) {
        const formatted = adapter.getText(arg0).toLowerCase();
        hasItem = formatted.includes(closure_2);
        const str = adapter.getText(arg0);
      }
      return hasItem;
    };
  },
  (arg0, arg1, adapter) => {
    closure_0 = arg0;
    adapter = adapter.adapter;
    const equals = adapter.equals;
    const defaultResult = parse.default(arg1);
    closure_3 = defaultResult;
    if (defaultResult === module_12946.default.falseFunc) {
      let nthChild = module_12946.default.falseFunc;
    } else if (defaultResult === module_12946.default.trueFunc) {
      closure_0 = arg0;
      nthChild = (arg0) => {
        const parent = adapter.getParent(arg0);
        let tmp2 = null != parent && adapter.isTag(parent);
        if (tmp2) {
          tmp2 = closure_0(arg0);
        }
        return tmp2;
      };
    } else {
      nthChild = function nthChild(arg0) {
        const siblings = adapter.getSiblings(arg0);
        let num = 0;
        if (0 < siblings.length) {
          let num3 = 0;
          let num4 = 0;
          num = 0;
          if (!equals(arg0, siblings[0])) {
            while (true) {
              let sum = num4;
              if (adapter.isTag(siblings[num3])) {
                sum = num4 + 1;
              }
              let sum1 = num3 + 1;
              num = sum;
              if (sum1 >= siblings.length) {
                break;
              } else {
                num3 = sum1;
                num4 = sum;
                num = sum;
                if (equals(arg0, siblings[sum1])) {
                  break;
                }
              }
            }
          }
        }
        let tmp8 = defaultResult(num);
        if (tmp8) {
          tmp8 = closure_0(arg0);
        }
        return tmp8;
      };
    }
    return nthChild;
  },
  (arg0, arg1, adapter) => {
    closure_0 = arg0;
    adapter = adapter.adapter;
    const equals = adapter.equals;
    const defaultResult = parse.default(arg1);
    closure_3 = defaultResult;
    if (defaultResult === module_12946.default.falseFunc) {
      let nthLastChild = module_12946.default.falseFunc;
    } else if (defaultResult === module_12946.default.trueFunc) {
      closure_0 = arg0;
      nthLastChild = (arg0) => {
        const parent = adapter.getParent(arg0);
        let tmp2 = null != parent && adapter.isTag(parent);
        if (tmp2) {
          tmp2 = closure_0(arg0);
        }
        return tmp2;
      };
    } else {
      nthLastChild = function nthLastChild(arg0) {
        const siblings = adapter.getSiblings(arg0);
        let diff = siblings.length - 1;
        let num = 0;
        if (0 <= diff) {
          let num2 = 0;
          num = 0;
          if (!equals(arg0, siblings[diff])) {
            while (true) {
              let sum = num2;
              if (adapter.isTag(siblings[diff])) {
                sum = num2 + 1;
              }
              let diff1 = diff - 1;
              num = sum;
              if (0 > diff1) {
                break;
              } else {
                diff = diff1;
                num2 = sum;
                num = sum;
                if (equals(arg0, siblings[diff1])) {
                  break;
                }
              }
            }
          }
        }
        let tmp9 = defaultResult(num);
        if (tmp9) {
          tmp9 = closure_0(arg0);
        }
        return tmp9;
      };
    }
    return nthLastChild;
  },
  (arg0, arg1, adapter) => {
    closure_0 = arg0;
    adapter = adapter.adapter;
    const equals = adapter.equals;
    const defaultResult = parse.default(arg1);
    closure_3 = defaultResult;
    if (defaultResult === module_12946.default.falseFunc) {
      let nthOfType = module_12946.default.falseFunc;
    } else if (defaultResult === module_12946.default.trueFunc) {
      closure_0 = arg0;
      nthOfType = (arg0) => {
        const parent = adapter.getParent(arg0);
        let tmp2 = null != parent && adapter.isTag(parent);
        if (tmp2) {
          tmp2 = closure_0(arg0);
        }
        return tmp2;
      };
    } else {
      nthOfType = function nthOfType(arg0) {
        const siblings = adapter.getSiblings(arg0);
        let num = 0;
        let num2 = 0;
        let num3 = 0;
        if (0 < siblings.length) {
          num = num3;
          while (!equals(arg0, siblings[num2])) {
            let isTagResult = adapter.isTag(tmp);
            if (isTagResult) {
              let name = adapter.getName(tmp);
              isTagResult = name === adapter.getName(arg0);
            }
            let sum = num3;
            if (isTagResult) {
              sum = num3 + 1;
            }
            num2 = num2 + 1;
            num3 = sum;
            num = sum;
            if (num2 >= siblings.length) {
              break;
            }
          }
        }
        let tmp8 = defaultResult(num);
        if (tmp8) {
          tmp8 = closure_0(arg0);
        }
        return tmp8;
      };
    }
    return nthOfType;
  },
  (arg0, arg1, adapter) => {
    closure_0 = arg0;
    adapter = adapter.adapter;
    const equals = adapter.equals;
    const defaultResult = parse.default(arg1);
    closure_3 = defaultResult;
    if (defaultResult === module_12946.default.falseFunc) {
      let nthLastOfType = module_12946.default.falseFunc;
    } else if (defaultResult === module_12946.default.trueFunc) {
      closure_0 = arg0;
      nthLastOfType = (arg0) => {
        const parent = adapter.getParent(arg0);
        let tmp2 = null != parent && adapter.isTag(parent);
        if (tmp2) {
          tmp2 = closure_0(arg0);
        }
        return tmp2;
      };
    } else {
      nthLastOfType = function nthLastOfType(arg0) {
        const siblings = adapter.getSiblings(arg0);
        let diff = siblings.length - 1;
        let num = 0;
        let num2 = 0;
        if (0 <= diff) {
          num2 = num;
          while (!equals(arg0, siblings[diff])) {
            let isTagResult = adapter.isTag(tmp2);
            if (isTagResult) {
              let name = adapter.getName(tmp2);
              isTagResult = name === adapter.getName(arg0);
            }
            let sum = num;
            if (isTagResult) {
              sum = num + 1;
            }
            diff = diff - 1;
            num = sum;
            num2 = sum;
            if (0 > diff) {
              break;
            }
          }
        }
        let tmp9 = defaultResult(num2);
        if (tmp9) {
          tmp9 = closure_0(arg0);
        }
        return tmp9;
      };
    }
    return nthLastOfType;
  },
  root(arg0, arg1, adapter) {
    closure_0 = arg0;
    adapter = adapter.adapter;
    return (arg0) => {
      const parent = adapter.getParent(arg0);
      let tmp2 = null == parent || !adapter.isTag(parent);
      if (tmp2) {
        tmp2 = closure_0(arg0);
      }
      return tmp2;
    };
  },
  scope(arg0, arg1, equals, arg3) {
    closure_0 = arg0;
    closure_1 = arg3;
    equals = equals.equals;
    const filters = isActive.filters;
    return filters.root(arg0, arg1, equals);
  },
  hover: function dynamicPseudo(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = tmp;
    if (typeof arg2.adapter[isActive] !== "function") {
      let active = module_12946.default.falseFunc;
    } else {
      active = function active(arg0) {
        let tmp = closure_1(arg0);
        if (tmp) {
          tmp = closure_0(arg0);
        }
        return tmp;
      };
    }
    return active;
  },
  visited: function dynamicPseudo(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = tmp;
    if (typeof arg2.adapter[isActive] !== "function") {
      let active = module_12946.default.falseFunc;
    } else {
      active = function active(arg0) {
        let tmp = closure_1(arg0);
        if (tmp) {
          tmp = closure_0(arg0);
        }
        return tmp;
      };
    }
    return active;
  },
  active: function dynamicPseudo(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = tmp;
    if (typeof arg2.adapter[isActive] !== "function") {
      let active = module_12946.default.falseFunc;
    } else {
      active = function active(arg0) {
        let tmp = closure_1(arg0);
        if (tmp) {
          tmp = closure_0(arg0);
        }
        return tmp;
      };
    }
    return active;
  }
};