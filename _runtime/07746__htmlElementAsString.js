// === Module 7746: _htmlElementAsString ===

// Module 7746 (_htmlElementAsString)
import getGlobalSingleton from "getGlobalSingleton" /* 7739 */;

require = arg1;
const dependencyMap = arg6;
function _htmlElementAsString(tagName, arr) {
  const _require = tagName;
  let items = [];
  if (tagName) {
    if (tagName.tagName) {
      if (_require(items[0]).GLOBAL_OBJ.HTMLElement) {
        if (tagName instanceof globalThis.HTMLElement) {
          if (tagName.dataset) {
            const dataset = tagName.dataset;
            if (tagName.dataset.sentryComponent) {
              return dataset.sentryComponent;
            } else if (dataset.sentryElement) {
              return tagName.dataset.sentryElement;
            }
          }
        }
      }
      arr = items.push(tagName.tagName.toLowerCase());
      let mapped = null;
      if (arr) {
        mapped = null;
        if (arr.length) {
          const found = arr.filter((item, index) => tagName.getAttribute(item));
          mapped = found.map((item, index) => {
            items = [item, tagName.getAttribute(item)];
            return items;
          });
        }
      }
      if (mapped) {
        if (mapped.length) {
          const item = mapped.forEach((item, index) => {
            items.push("[" + item[0] + "=\"" + item[1] + "\"]");
          });
        }
        const items1 = ["aria-label", "type", "name", "title", "alt"];
        const iter = items1[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp22 = nextResult;
          let attr = tagName.getAttribute(nextResult);
          if (attr) {
            let _HermesInternal3 = HermesInternal;
            arr = items.push("[" + tmp22 + "=\"" + tmp24 + "\"]");
          }
          continue;
        }
        return items.join("");
      }
      if (tagName.id) {
        const _HermesInternal = HermesInternal;
        items.push("#" + tagName.id);
      }
      if (tagName.className) {
        if (tmpResult.isString(str3)) {
          const parts = str3.split(/\s+/);
          const tmp11 = parts[Symbol.iterator]();
          while (tmp11 !== undefined) {
            let _HermesInternal2 = HermesInternal;
            let arr2 = items.push("." + tmp14);
            continue;
          }
        }
        tmpResult = tmp(tmp2[1]);
      }
      tmp = _require;
      tmp2 = items;
    }
  }
  return "";
}
arg5.getComponentName = function getComponentName(arg0) {
  let parentNode = arg0;
  let num = 0;
  if (getGlobalSingleton.GLOBAL_OBJ.HTMLElement) {
    while (parentNode) {
      if (parentNode instanceof globalThis.HTMLElement) {
        let dataset = parentNode.dataset;
        if (parentNode.dataset.sentryComponent) {
          return dataset.sentryComponent;
        } else if (dataset.sentryElement) {
          return parentNode.dataset.sentryElement;
        }
      }
      parentNode = parentNode.parentNode;
      num = num + 1;
      if (num < 5) {
        continue;
      } else {
        return null;
      }
    }
    return null;
  } else {
    return null;
  }
};
arg5.getDomElement = function getDomElement(arg0) {
  let element = null;
  if (getGlobalSingleton.GLOBAL_OBJ.document) {
    element = null;
    if (getGlobalSingleton.GLOBAL_OBJ.document.querySelector) {
      const _document = getGlobalSingleton.GLOBAL_OBJ.document;
      element = _document.querySelector(arg0);
    }
  }
  return element;
};
arg5.getLocationHref = function getLocationHref() {
  try {
    return getGlobalSingleton.GLOBAL_OBJ.document.location.href;
  } catch (err) {
    return "";
  }
};
arg5.htmlTreeAsString = function htmlTreeAsString(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  if (arg0) {
    try {
      let tmp = arg0;
      const items = [];
      let num2 = 0;
      const _Array = Array;
      let keyAttrs = obj;
      if (!Array.isArray(obj)) {
        keyAttrs = obj.keyAttrs;
      }
      const _Array2 = Array;
      const isArray = Array.isArray(obj);
      let num3 = !isArray;
      if (!isArray) {
        num3 = obj.maxStringLength;
      }
      if (!num3) {
        num3 = 80;
      }
      if (tmp) {
        let sum = tmp7 + 1;
        if (+0 < 5) {
          const tmp33 = _htmlElementAsString(tmp, tmp3);
          let arr2 = tmp33;
          if ("html" !== tmp33) {
            if (sum <= 1) {
              items.push(arr2);
              num2 = num2 + arr2.length;
              const parentNode = tmp.parentNode;
              tmp = parentNode;
              while (parentNode) {
                let tmp19 = +sum;
                sum = tmp19 + 1;
                if (tmp19 >= 5) {
                  break;
                } else {
                  let tmp23 = _htmlElementAsString(tmp, tmp3);
                  arr2 = tmp23;
                  if ("html" === tmp23) {
                    break;
                  } else {
                    if (sum <= 1) {
                      continue;
                    } else if (num2 + 3 * items.length + arr2.length >= num3) {
                      break;
                    }
                    continue;
                  }
                }
              }
            }
          }
        }
      }
      const reversed = items.reverse();
      return reversed.join(" > ");
    } catch (err) {
      return "<unknown>";
    }
  } else {
    return "<unknown>";
  }
};