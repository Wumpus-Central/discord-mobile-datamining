// _runtime/12954_compileGeneralSelector.js
import _mod12949 from "metro/12949__.js";
import attributeRules2 from "12955_attributeRules.js";
import filters from "12956_filters.js";

require = arg1;
const dependencyMap = arg6;

export function compileGeneralSelector(acc, type, adapter, arg3, compileToken) {
  adapter = adapter.adapter;
  const equals = adapter.equals;
  type = type.type;
  if (_mod12949.SelectorType.PseudoElement === type) {
    const _Error5 = Error;
    const error = new Error("Pseudo-elements are not supported by css-select");
    throw error;
  } else if (_mod12949.SelectorType.ColumnCombinator === type) {
    const _Error4 = Error;
    const error1 = new Error("Column combinators are not yet supported by css-select");
    throw error1;
  } else if (_mod12949.SelectorType.Attribute === type) {
    if (null != type.namespace) {
      const _Error3 = Error;
      const error2 = new Error("Namespaced attributes are not yet supported by css-select");
      throw error2;
    } else {
      if (!tmp23) {
        type.name = type.name.toLowerCase();
      }
      const attributeRules = attributeRules2.attributeRules;
      return attributeRules[type.action](acc, type, adapter);
    }
  } else if (_mod12949.SelectorType.Pseudo === type) {
    return filters.compilePseudoSelector(acc, type, adapter, arg3, compileToken);
  } else if (_mod12949.SelectorType.Tag === type) {
    if (null != type.namespace) {
      const _Error2 = Error;
      const error3 = new Error("Namespaced tag names are not yet supported by css-select");
      throw error3;
    } else {
      closure_3 = str3;
      if (!tmp11) {
        closure_3 = str3.toLowerCase();
      }
      return function tag(arg0) {
        let tmp = adapter.getName(arg0) === closure_3;
        if (tmp) {
          tmp = acc(arg0);
        }
        return tmp;
      };
    }
  } else if (_mod12949.SelectorType.Descendant === type) {
    if (false !== adapter.cacheResults) {
      const _WeakSet = WeakSet;
      if (typeof WeakSet !== "undefined") {
        const _WeakSet2 = WeakSet;
        const weakSet = new WeakSet();
        return function cachedDescendant(arg0) {
          const parent = adapter.getParent(arg0);
          let tmp2 = null;
          if (parent) {
            tmp2 = null;
            if (adapter.isTag(parent)) {
              tmp2 = parent;
            }
          }
          if (tmp2) {
            while (true) {
              if (!weakSet.has(tmp2)) {
                if (adapter.isTag(tmp2)) {
                  if (acc(tmp2)) {
                    break;
                  }
                }
                let addResult = weakSet.add(tmp2);
              }
              let parent1 = adapter.getParent(tmp2);
              let tmp8 = null;
              if (parent1) {
                tmp8 = null;
                if (adapter.isTag(parent1)) {
                  tmp8 = parent1;
                }
              }
              tmp2 = tmp8;
            }
            return true;
          }
          return false;
        };
      }
    }
    return function descendant(arg0) {
      const parent = adapter.getParent(arg0);
      let tmp2 = null;
      if (parent) {
        tmp2 = null;
        if (adapter.isTag(parent)) {
          tmp2 = parent;
        }
      }
      if (tmp2) {
        while (!acc(tmp2)) {
          let parent1 = adapter.getParent(tmp2);
          let tmp6 = null;
          if (parent1) {
            tmp6 = null;
            if (adapter.isTag(parent1)) {
              tmp6 = parent1;
            }
          }
          tmp2 = tmp6;
        }
        return true;
      }
      return false;
    };
  } else if ("_flexibleDescendant" === type) {
    return function flexibleDescendant(arg0) {
      let tmp = arg0;
      while (!acc(tmp)) {
        let parent = adapter.getParent(tmp);
        let tmp3 = null;
        if (parent) {
          tmp3 = null;
          if (adapter.isTag(parent)) {
            tmp3 = parent;
          }
        }
        tmp = tmp3;
        if (tmp3) {
          continue;
        } else {
          let flag = false;
          return false;
        }
      }
      return true;
    };
  } else if (_mod12949.SelectorType.Parent === type) {
    return function parent(arg0) {
      const children = adapter.getChildren(arg0);
      return children.some((item) => {
        let isTagResult = tag.isTag(item);
        if (isTagResult) {
          isTagResult = acc(item);
        }
        return isTagResult;
      });
    };
  } else if (_mod12949.SelectorType.Child === type) {
    return function child(dependencyMap) {
      const parent = adapter.getParent(dependencyMap);
      let tmp2 = null != parent && adapter.isTag(parent);
      if (tmp2) {
        tmp2 = acc(parent);
      }
      return tmp2;
    };
  } else if (_mod12949.SelectorType.Sibling === type) {
    return function sibling(arg0) {
      const siblings = adapter.getSiblings(arg0);
      let num = 0;
      if (0 < siblings.length) {
        while (!equals(arg0, siblings[num])) {
          if (adapter.isTag(tmp)) {
            if (acc(tmp)) {
              let flag = true;
              return true;
            }
          }
          num = num + 1;
          if (num < siblings.length) {
            continue;
          } else {
            break;
          }
          break;
        }
      }
      return false;
    };
  } else if (_mod12949.SelectorType.Adjacent === type) {
    return adapter.prevElementSibling
      ? function adjacent(prev) {
          const prevElementSiblingResult = adapter.prevElementSibling(prev);
          let tmp2 = null != prevElementSiblingResult;
          if (tmp2) {
            tmp2 = acc(prevElementSiblingResult);
          }
          return tmp2;
        }
      : function adjacent(arg0) {
          let tmp;
          const siblings = adapter.getSiblings(arg0);
          let num = 0;
          let tmp2;
          if (0 < siblings.length) {
            let tmp6 = tmp;
            tmp2 = tmp;
            while (!equals(arg0, siblings[num])) {
              if (adapter.isTag(tmp3)) {
                tmp6 = tmp3;
              }
              num = num + 1;
              tmp = tmp6;
              tmp2 = tmp6;
              if (num >= siblings.length) {
                break;
              }
            }
          }
          let tmp8 = tmp2;
          if (tmp8) {
            tmp8 = acc(tmp2);
          }
          return tmp8;
        };
  } else if (_mod12949.SelectorType.Universal === type) {
    if (null != type.namespace) {
      if ("*" !== type.namespace) {
        const _Error = Error;
        const error4 = new Error("Namespaced universal selectors are not yet supported by css-select");
        throw error4;
      }
    }
    return acc;
  }
}
