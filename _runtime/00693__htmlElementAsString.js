// _runtime/00693__htmlElementAsString.js
import _mod686 from "metro/00686__.js";
import _mod692 from "metro/00692__.js";

require = arg1;
const dependencyMap = arg6;
function _htmlElementAsString(tagName, arr) {
  let items = [];
  tagName = undefined;
  if (tagName != null) {
    tagName = tagName.tagName;
  }
  if (tagName) {
    if (_mod686.GLOBAL_OBJ.HTMLElement) {
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
    let length;
    if (arr != null) {
      length = arr.length;
    }
    let mapped = null;
    if (length) {
      const found = arr.filter((item) => tagName.getAttribute(item));
      mapped = found.map((item) => {
        items = [item, tagName.getAttribute(item)];
        return items;
      });
    }
    let length1;
    if (mapped != null) {
      length1 = mapped.length;
    }
    if (length1) {
      const item = mapped.forEach((item) => {
        items.push("[" + item[0] + '="' + item[1] + '"]');
      });
    } else {
      if (tagName.id) {
        const _HermesInternal = HermesInternal;
        arr = items.push("#" + tagName.id);
      }
      if (tagName.className) {
        if (tmp2Result.isString(str4)) {
          const parts = str4.split(/\s+/);
          const tmp14 = parts[Symbol.iterator]();
          while (tmp14 !== undefined) {
            let _HermesInternal2 = HermesInternal;
            let arr1 = items.push("." + tmp17);
            continue;
          }
        }
        tmp2Result = _mod692;
      }
    }
    const items1 = ["aria-label", "type", "name", "title", "alt"];
    const iter = items1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp25 = nextResult;
      let attr = tagName.getAttribute(nextResult);
      if (attr) {
        let _HermesInternal3 = HermesInternal;
        let str9 = "[";
        let str10 = '="';
        let str11 = '"]';
        let arr2 = items.push("[" + tmp25 + '="' + tmp27 + '"]');
      }
      continue;
    }
    return items.join("");
  } else {
    return "";
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getComponentName = function getComponentName(arg0) {
  let parentNode = arg0;
  let num = 0;
  if (_mod686.GLOBAL_OBJ.HTMLElement) {
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
export const getLocationHref = function getLocationHref() {
  try {
    return _mod686.GLOBAL_OBJ.document.location.href;
  } catch (err) {
    return "";
  }
};
export const htmlTreeAsString = function htmlTreeAsString(arg0) {
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
