// === Module 12646: ? ===

// Module 12646
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _slicedToArray from "module_32" /* 32 */;
import "module_19";

let SvgWithCssUri = fn;
let closure_1 = importDefault;
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
  } catch (err) {
  }
}
function flattenToSelectors(parsed, items) {
  closure_0 = items;
  closure_1(12647).walk(parsed, {
    visit: "Rule",
    enter(type) {
      const rule = type;
      if ("Rule" === type.type) {
        const self = this;
        const atrule = this.atrule;
        let children = tmp.children;
        children.each((children, item) => {
          children = children.children;
          items = [];
          rule.push({ item, atrule, rule, pseudos: items });
          children.each((type, item, list) => {
            type = type.type;
            let tmp = "PseudoClassSelector" !== type;
            if (tmp) {
              tmp = "PseudoElementSelector" !== type;
            }
            if (!tmp) {
              obj = { item, list };
              items.push(obj);
            }
          });
        });
      }
    }
  });
}
function selectorWithSpecificity(selector) {
  obj = { selector, specificity: null };
  closure_0 = 0;
  closure_1 = 0;
  closure_2 = 0;
  let children = selector.item.data.children;
  function walk(type) {
    type = type.type;
    if ("SelectorList" !== type) {
      if ("Selector" !== type) {
        if ("IdSelector" === type) {
          closure_0 = closure_0 + 1;
        } else {
          if ("ClassSelector" !== type) {
            if ("AttributeSelector" !== type) {
              if ("PseudoClassSelector" === type) {
                const formatted = type.name.toLowerCase();
                if ("not" === formatted) {
                  const children = type.children;
                  if (children) {
                    children.each(walk);
                  }
                } else {
                  if ("before" !== formatted) {
                    if ("after" !== formatted) {
                      if ("first-line" !== formatted) {
                        if ("first-letter" !== formatted) {
                          closure_1 = closure_1 + 1;
                        }
                      }
                    }
                  }
                  closure_2 = closure_2 + 1;
                }
              } else if ("PseudoElementSelector" === type) {
                closure_2 = closure_2 + 1;
              } else if ("TypeSelector" === type) {
                if ("*" !== type.name.charAt(type.name.length - 1)) {
                  closure_2 = closure_2 + 1;
                }
              }
            }
          }
          closure_1 = closure_1 + 1;
        }
      }
    }
    const children2 = type.children;
    children2.each(walk);
  }
  children.each(walk);
  const items = [closure_0, closure_1, closure_2];
  obj.specificity = items;
  return obj;
}
function sortSelectors(arr) {
  let mapped1 = arr;
  if (arr.length > 1) {
    let mapped = arr.map(selectorWithSpecificity);
    const _Array = Array;
    let array = new Array(length);
    let num3 = 1;
    arr = mapped;
    if (1 < length) {
      do {
        let tmp4 = array;
        let num = 0;
        let num2 = 0;
        if (0 < length) {
          do {
            let sum = num2 + num3;
            let sum2 = num;
            let tmp9 = sum;
            if (sum > length) {
              tmp9 = length;
            }
            let sum1 = sum + num3;
            if (sum1 > length) {
              sum1 = length;
            }
            let sum4 = tmp9;
            let sum3 = num2;
            while (true) {
              let tmp13 = sum2;
              let tmp15 = sum3;
              if (sum3 < tmp9) {
                if (sum4 < sum1) {
                  let specificity = mapped[sum3].specificity;
                  let specificity2 = mapped[sum4].specificity;
                  let num4 = 0;
                  let num5 = -1;
                  while (specificity[num4] >= specificity2[num4]) {
                    num5 = 1;
                    if (specificity[num4] > specificity2[num4]) {
                      break;
                    } else {
                      num4 = num4 + 1;
                      num5 = 0;
                      if (num4 >= 4) {
                        break;
                      }
                    }
                  }
                  if (num5 <= 0) {
                    sum2 = sum2 + 1;
                    sum3 = sum3 + 1;
                    array[tmp13] = mapped[tmp15];
                    continue;
                  } else {
                    sum2 = sum2 + 1;
                    let tmp20 = +sum4;
                    sum4 = tmp20 + 1;
                    array[tmp13] = mapped[tmp20];
                    continue;
                  }
                  continue;
                }
              }
              if (sum3 < tmp9) {
                sum2 = sum2 + 1;
                sum3 = sum3 + 1;
                array[tmp13] = mapped[tmp15];
                continue;
              } else if (sum4 >= sum1) {
                break;
              } else {
                sum2 = sum2 + 1;
                let tmp18 = +sum4;
                sum4 = tmp18 + 1;
                array[tmp13] = mapped[tmp18];
                continue;
              }
              continue;
            }
            num2 = num2 + tmp2;
            num = sum2;
          } while (num2 < length);
        }
        num3 = num3 * 2;
        array = mapped;
        mapped = tmp4;
        arr = tmp4;
      } while (num3 < length);
    }
    mapped1 = arr.map((selector) => selector.selector);
  }
  return mapped1;
}
function initStyle(style) {
  if (!style.style) {
    (function CSSStyleDeclaration(style) {
      ({ props, styles } = style);
      if (!props.style) {
        props.style = {};
      }
      style = props.style;
      const map = new Map();
      style.style = style;
      style.priority = map;
      if (styles) {
        if (0 !== styles.length) {
          try {
            const children = map(12647).parse(styles, closure_19).children;
            children.each((arg0) => {
              try {
                ({ property, value, important } = arg0);
                const trimmed = property.trim();
                const result = map.set(trimmed, important);
                obj = SvgWithCssUri(8017);
                const camelCaseResult = SvgWithCssUri(8017).camelCase(trimmed);
                const obj2 = closure_2_1(12647);
                style[camelCaseResult] = closure_2_1(12647).generate(value).trim();
                const str = closure_2_1(12647).generate(value);
              } catch (tmp10) {
                const _Error = Error;
                let tmp12 = tmp10 instanceof Error;
                if (tmp12) {
                  tmp12 = "Unknown node type: undefined" !== tmp10.message;
                }
                if (tmp12) {
                  const _console = console;
                  console.warn("Warning: Parse error when parsing inline styles, style properties of this element cannot be used. The raw styles can still be get/set using .attr('style').value. Error details: " + tmp10);
                }
              }
            });
            obj = map(12647);
          } catch (tmp7) {
            let _console = tmp.console;
            _console.warn("Warning: Parse error when parsing inline styles, style properties of this element cannot be used. The raw styles can still be get/set using .attr('style').value. Error details: " + tmp7);
          }
        }
      }
    })(style);
  }
  return style;
}
function closestElem(parent, foreignObject) {
  parent = parent.parent;
  let tmp = parent;
  if (parent) {
    let tmp2 = parent;
    tmp = parent;
    if (parent.tag !== "foreignObject") {
      const parent2 = tmp2.parent;
      tmp = parent2;
      while (parent2) {
        tmp2 = parent2;
        tmp = parent2;
        if (parent2.tag === "foreignObject") {
          break;
        }
      }
    }
  }
  return tmp;
}
function extractVariables(parsed) {
  const map = new Map();
  closure_1(12647).walk(parsed, {
    visit: "Declaration",
    enter(property) {
      if (property.property.startsWith("--")) {
        const trimmed = str.trim();
        obj = closure_1(12647);
        const result = map.set(trimmed, closure_1(12647).generate(property.value).trim());
        const str2 = closure_1(12647).generate(property.value);
      }
    }
  });
  return map;
}
class SvgCss {
  constructor(arg0) {
    xml = global.xml;
    ({ override, fallback } = global);
    if (undefined === global.onError) {
      tmp4 = closure_12;
    }
    try {
      tmp5 = useMemo;
      items = [];
      items[0] = xml;
      tmp8 = xml;
      tmp9 = closure_2;
      tmp6 = useMemo(() => {
        let parsed = null;
        if (null !== xml) {
          parsed = SvgWithCssUri(8017).parse(tmp, inlineStyles);
          obj = SvgWithCssUri(8017);
        }
        return parsed;
      }, items);
      tmp7 = jsx;
      obj = { ast: null, override: null };
      obj.ast = tmp6;
      if (override) {
      } else {
        override = global;
      }
      obj.override = override;
      return tmp7(xml(closure_2[10]).SvgAst, obj);
    } catch (tmp10) {
      tmp3Result = tmp3(tmp10);
      tmp12 = null;
      if (tmp != null) {
      } else {
        tmp13 = null;
      }
      return null;
    }
    return;
  }
}
_possibleConstructorReturnDefault;
const noop = fn(19);
({ Component, useEffect: closure_7, useMemo: closure_8, useState: closure_9 } = noop);
const jsx = fn(21).jsx;
let closure_12 = error.bind(console);
let obj = { xmlMode: true, adapter: null };
let obj2 = {
  removeSubsets(arr) {
    let diff = arr.length - 1;
    if (diff > -1) {
      do {
        let tmp4 = arr[diff];
        delete tmp[tmp2];
        let flag = true;
        let tmp6 = tmp4;
        if (tmp4) {
          while (!arr.includes(tmp6)) {
            let parent = typeof tmp6 === "object";
            if (typeof tmp6 === "object") {
              parent = tmp6.parent;
            }
            if (!parent) {
              parent = null;
            }
            tmp6 = parent;
            flag = true;
          }
          let spliceResult = arr.splice(diff, 1);
          flag = false;
        }
        if (flag) {
          arr[diff] = tmp4;
        }
        diff = diff - 1;
      } while (diff > -1);
    }
    return arr;
  },
  existsOne(arg0, arr) {
    closure_0 = arg0;
    return arr.some((children) => {
      let tmp = typeof children === "object";
      if (typeof children === "object") {
        let someResult = closure_1_0(children);
        if (!someResult) {
          children = children.children;
          closure_0 = closure_1_0;
          someResult = children.some((children) => {
            let tmp = typeof children === "object";
            if (typeof children === "object") {
              let someResult = closure_1_0(children);
              if (!someResult) {
                children = children.children;
                closure_0 = closure_1_0;
                someResult = children.some((children) => {
                  let tmp = typeof children === "object";
                  if (typeof children === "object") {
                    let someResult = closure_1_0(children);
                    if (!someResult) {
                      children = children.children;
                      closure_0 = closure_1_0;
                      someResult = children.some((children) => {
                        let tmp = typeof children === "object";
                        if (typeof children === "object") {
                          let someResult = closure_1_0(children);
                          if (!someResult) {
                            children = children.children;
                            closure_0 = closure_1_0;
                            someResult = children.some(/* F117210 */ function() { ... });
                          }
                          tmp = someResult;
                        }
                        return tmp;
                      });
                    }
                    tmp = someResult;
                  }
                  return tmp;
                });
              }
              tmp = someResult;
            }
            return tmp;
          });
        }
        tmp = someResult;
      }
      return tmp;
    });
  },
  getSiblings(parent) {
    parent = typeof parent === "object";
    if (typeof parent === "object") {
      parent = parent.parent;
    }
    let children = parent;
    if (parent) {
      children = parent.children;
    }
    if (!children) {
      children = [];
    }
    return children;
  },
  hasAttrib(props, key10009) {
    hasOwnProperty = Object.prototype.hasOwnProperty;
    const call = hasOwnProperty.call;
    props = props.props;
    return typeof call === "unknown" ? hasOwnProperty(key10009) : call(props, key10009);
  },
  findOne: null,
  findAll: null,
  isTag(obj) {
    return typeof obj === "object";
  },
  getParent(parent) {
    parent = typeof parent === "object";
    if (typeof parent === "object") {
      parent = parent.parent;
    }
    if (!parent) {
      parent = null;
    }
    return parent;
  },
  getChildren(children) {
    children = typeof children === "object";
    if (typeof children === "object") {
      children = children.children;
    }
    if (!children) {
      children = [];
    }
    return children;
  },
  getName(tag) {
    return tag.tag;
  },
  getText(arg0) {
    return "";
  },
  getAttributeValue(arg0, arg1) {
    return arg0.props[arg1] || null;
  }
};
function findOne(fn, arg1) {
  let tmp = null;
  let num = 0;
  let tmp2 = null;
  if (0 < arg1.length) {
    while (true) {
      let tmp3 = arg1[num];
      let tmp6 = tmp;
      if (typeof tmp3 !== "string") {
        tmp6 = tmp3;
        if (!fn(tmp3)) {
          let children = tmp3.children;
          tmp6 = tmp;
          if (0 !== children.length) {
            tmp6 = findOne(fn, children);
          }
        }
      }
      let sum = num + 1;
      tmp2 = tmp6;
      if (sum >= length) {
        break;
      } else {
        num = sum;
        tmp = tmp6;
        tmp2 = tmp6;
        if (tmp6) {
          break;
        }
      }
    }
  }
  return tmp2;
}
obj2.findOne = findOne;
function findAll(fn, arg1) {
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  for (let num = 0; num < length; num = num + 1) {
    let tmp = arg1[num];
    if (typeof tmp === "object") {
      if (fn(tmp)) {
        let arr = items.push(tmp);
      }
      let children = tmp.children;
      if (0 !== children.length) {
        let tmp5 = findAll(fn, children, items);
      }
    }
  }
  return items;
}
obj2.findAll = findAll;
obj.adapter = obj2;
let closure_15 = ["", "screen"];
let closure_16 = [""];
let closure_19 = { context: "declarationList", parseValue: false };
let closure_22 = { parseValue: false, parseCustomProperty: false };
let closure_24 = ["color", "fill", "floodColor", "lightingColor", "stopColor", "stroke"];
function resolveElementVariables(item10064, map) {
  return closure_24.forEach((item) => {
    let startsWithResult = obj;
    if (item10064.props[item]) {
      startsWithResult = obj.startsWith("var(");
    }
    if (startsWithResult) {
      item10064 = map;
      let str2 = "";
      if (undefined !== obj) {
        let str3 = obj;
        if (typeof obj !== "string") {
          str3 = map(12647).generate(obj);
          let obj2 = map(12647);
        }
        str2 = str3.replace(/var\((--[^,)]+)(?:,\s*([^)]+))?\)/g, (arg0, arg1, str) => {
          value = closure_0.get(arg1);
          if (undefined !== value) {
            closure_0 = tmp;
            let str4 = "";
            if (undefined !== value) {
              let str5 = value;
              if (typeof value !== "string") {
                str5 = closure_1(12647).generate(value);
                const obj2 = closure_1(12647);
              }
              str4 = str5.replace(/var\((--[^,)]+)(?:,\s*([^)]+))?\)/g, (arg0, arg1, str) => {
                value = closure_0.get(arg1);
                if (undefined !== value) {
                  closure_0 = tmp;
                  let str4 = "";
                  if (undefined !== value) {
                    let str5 = value;
                    if (typeof value !== "string") {
                      str5 = closure_1(12647).generate(value);
                      const obj2 = closure_1(12647);
                    }
                    str4 = str5.replace(/var\((--[^,)]+)(?:,\s*([^)]+))?\)/g, (arg0, arg1, str) => {
                      value = closure_0.get(arg1);
                      if (undefined !== value) {
                        closure_0 = tmp;
                        let str4 = "";
                        if (undefined !== value) {
                          let str5 = value;
                          if (typeof value !== "string") {
                            str5 = closure_1(12647).generate(value);
                            const obj2 = closure_1(12647);
                          }
                          str4 = str5.replace(/var\((--[^,)]+)(?:,\s*([^)]+))?\)/g, /* F117208 */ function() { ... });
                        }
                        let str2 = str4;
                      } else {
                        str = "";
                        str2 = "";
                        if (str) {
                          closure_0 = tmp;
                          if (undefined !== str) {
                            let str3 = str;
                            if (typeof str !== "string") {
                              str3 = closure_1(12647).generate(str);
                              obj = closure_1(12647);
                            }
                            str = str3.replace(/var\((--[^,)]+)(?:,\s*([^)]+))?\)/g, /* F117208 */ function() { ... });
                          }
                          str2 = str;
                        }
                      }
                      return str2;
                    });
                  }
                  let str2 = str4;
                } else {
                  str = "";
                  str2 = "";
                  if (str) {
                    closure_0 = tmp;
                    if (undefined !== str) {
                      let str3 = str;
                      if (typeof str !== "string") {
                        str3 = closure_1(12647).generate(str);
                        obj = closure_1(12647);
                      }
                      str = str3.replace(/var\((--[^,)]+)(?:,\s*([^)]+))?\)/g, (arg0, arg1, str) => {
                        value = closure_0.get(arg1);
                        if (undefined !== value) {
                          closure_0 = tmp;
                          let str4 = "";
                          if (undefined !== value) {
                            let str5 = value;
                            if (typeof value !== "string") {
                              str5 = closure_1(12647).generate(value);
                              const obj2 = closure_1(12647);
                            }
                            str4 = str5.replace(/var\((--[^,)]+)(?:,\s*([^)]+))?\)/g, /* F117208 */ function() { ... });
                          }
                          let str2 = str4;
                        } else {
                          str = "";
                          str2 = "";
                          if (str) {
                            closure_0 = tmp;
                            if (undefined !== str) {
                              let str3 = str;
                              if (typeof str !== "string") {
                                str3 = closure_1(12647).generate(str);
                                obj = closure_1(12647);
                              }
                              str = str3.replace(/var\((--[^,)]+)(?:,\s*([^)]+))?\)/g, /* F117208 */ function() { ... });
                            }
                            str2 = str;
                          }
                        }
                        return str2;
                      });
                    }
                    str2 = str;
                  }
                }
                return str2;
              });
            }
            let str2 = str4;
          } else {
            str = "";
            str2 = "";
            if (str) {
              closure_0 = tmp;
              if (undefined !== str) {
                let str3 = str;
                if (typeof str !== "string") {
                  str3 = closure_1(12647).generate(str);
                  obj = closure_1(12647);
                }
                str = str3.replace(/var\((--[^,)]+)(?:,\s*([^)]+))?\)/g, (arg0, arg1, str) => {
                  value = closure_0.get(arg1);
                  if (undefined !== value) {
                    closure_0 = tmp;
                    let str4 = "";
                    if (undefined !== value) {
                      let str5 = value;
                      if (typeof value !== "string") {
                        str5 = closure_1(12647).generate(value);
                        const obj2 = closure_1(12647);
                      }
                      str4 = str5.replace(/var\((--[^,)]+)(?:,\s*([^)]+))?\)/g, (arg0, arg1, str) => {
                        value = closure_0.get(arg1);
                        if (undefined !== value) {
                          closure_0 = tmp;
                          let str4 = "";
                          if (undefined !== value) {
                            let str5 = value;
                            if (typeof value !== "string") {
                              str5 = closure_1(12647).generate(value);
                              const obj2 = closure_1(12647);
                            }
                            str4 = str5.replace(/var\((--[^,)]+)(?:,\s*([^)]+))?\)/g, /* F117208 */ function() { ... });
                          }
                          let str2 = str4;
                        } else {
                          str = "";
                          str2 = "";
                          if (str) {
                            closure_0 = tmp;
                            if (undefined !== str) {
                              let str3 = str;
                              if (typeof str !== "string") {
                                str3 = closure_1(12647).generate(str);
                                obj = closure_1(12647);
                              }
                              str = str3.replace(/var\((--[^,)]+)(?:,\s*([^)]+))?\)/g, /* F117208 */ function() { ... });
                            }
                            str2 = str;
                          }
                        }
                        return str2;
                      });
                    }
                    let str2 = str4;
                  } else {
                    str = "";
                    str2 = "";
                    if (str) {
                      closure_0 = tmp;
                      if (undefined !== str) {
                        let str3 = str;
                        if (typeof str !== "string") {
                          str3 = closure_1(12647).generate(str);
                          obj = closure_1(12647);
                        }
                        str = str3.replace(/var\((--[^,)]+)(?:,\s*([^)]+))?\)/g, (arg0, arg1, str) => {
                          value = closure_0.get(arg1);
                          if (undefined !== value) {
                            closure_0 = tmp;
                            let str4 = "";
                            if (undefined !== value) {
                              let str5 = value;
                              if (typeof value !== "string") {
                                str5 = closure_1(12647).generate(value);
                                const obj2 = closure_1(12647);
                              }
                              str4 = str5.replace(/var\((--[^,)]+)(?:,\s*([^)]+))?\)/g, /* F117208 */ function() { ... });
                            }
                            let str2 = str4;
                          } else {
                            str = "";
                            str2 = "";
                            if (str) {
                              closure_0 = tmp;
                              if (undefined !== str) {
                                let str3 = str;
                                if (typeof str !== "string") {
                                  str3 = closure_1(12647).generate(str);
                                  obj = closure_1(12647);
                                }
                                str = str3.replace(/var\((--[^,)]+)(?:,\s*([^)]+))?\)/g, /* F117208 */ function() { ... });
                              }
                              str2 = str;
                            }
                          }
                          return str2;
                        });
                      }
                      str2 = str;
                    }
                  }
                  return str2;
                });
              }
              str2 = str;
            }
          }
          return str2;
        });
      }
      tmp.props[item] = str2;
    }
    tmp = item10064;
  });
}
function inlineStyles(arg0) {
  closure_0 = arg0;
  let arr = closure_1(12769)("style", arg0, obj);
  if (0 === arr.length) {
    return arg0;
  } else {
    const items = [];
    const _Map = Map;
    let map = new Map();
    let iter = arr[Symbol.iterator]();
    let nextResult = iter.next();
    if (iter === undefined) {
      const tmp21 = (function filterByPseudos(arr) {
        return arr.filter((pseudos) => {
          pseudos = pseudos.pseudos;
          const element = { type: "Selector", children: null };
          const list = new closure_1_0(12647).List();
          element.children = list.fromArray(pseudos.map((item) => item.item.data));
          return closure_1_16.includes(closure_1_1(12647).generate(element));
        });
      })((function filterByMqs(items) {
        return items.filter((atrule) => {
          atrule = atrule.atrule;
          if (null === atrule) {
            return true;
          } else {
            ({ name, prelude } = atrule);
            let firstResult = prelude;
            if (prelude) {
              const children = prelude.children;
              firstResult = children.first();
            }
            let generateResult = name;
            if (firstResult) {
              generateResult = name;
              if ("MediaQueryList" === firstResult.type) {
                generateResult = closure_1_1(dependencyMap[9]).generate(prelude);
                obj = closure_1_1(dependencyMap[9]);
              }
            }
            return closure_1_15.includes(generateResult);
          }
        });
      })(items));
      (function cleanPseudos(arr) {
        const item = arr.forEach((pseudos) => {
          pseudos = pseudos.pseudos;
          return pseudos.forEach((list) => {
            list = list.list;
            return list.remove(list.item);
          });
        });
      })(tmp21);
      const reversed = sortSelectors(tmp21).reverse();
      const tmp28 = closure_1(12769)("*[color], *[fill], *[floodColor], *[lightingColor], *[stopColor], *[stroke]", arg0, obj);
      for (const item10064 of tmp28) {
        let tmp33 = resolveElementVariables(item10064, map);
        continue;
      }
      for (const item10074 of reversed) {
        ({ rule: closure_1, item: dependencyMap } = item10074);
        let tmp34Result = tmp34();
        continue;
      }
      return arg0;
    } else {
      let children = nextResult.children;
      if (children.length) {
        if (!closestElem(tmp6, "foreignObject")) {
          try {
            const joined = obj.join("");
            const parsed = closure_1(12647).parse(joined, closure_22);
            map = extractVariables(parsed);
            flattenToSelectors(parsed, items);
            let obj2 = closure_1(12647);
          } catch (tmp19) {
            let _console = tmp2.console;
            _console.warn(tmp + tmp19);
          }
        }
      }
    }
  }
}
class SvgWithCss {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_3(this, SvgWithCssUri);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(SvgWithCssUri);
    tmp3 = closure_4;
    if (closure_11()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.state = { ast: null };
    return tmp3Result;
  }
}
SvgWithCssUri = SvgWithCss;
_inherits(SvgWithCss, Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const parsed = this.parse(this.props.xml);
  }
};
let items = [
  entry,
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(xml) {
      const self = this;
      xml = this.props.xml;
      if (xml !== xml.xml) {
        const parsed = self.parse(xml);
      }
    }
  },
  {
    key: "parse",
    value: function parse(arg0) {
      const self = this;
      try {
        let parsed = null;
        if (arg0) {
          parsed = SvgWithCssUri(8017).parse(arg0, inlineStyles);
          obj = SvgWithCssUri(8017);
        }
        const obj2 = { ast: parsed };
        self.setState(obj2);
      } catch (tmp8) {
        if (tmp.props.onError) {
          const props = tmp.props;
          props.onError(tmp8);
        } else {
          const _console = console;
          console.error(tmp8);
        }
      }
    }
  },
  {
    key: "render",
    value: function render() {
      const props = this.props;
      obj = { ast: this.state.ast, override: null };
      let override = props.override;
      if (!override) {
        override = props;
      }
      obj.override = override;
      return jsx(SvgWithCssUri(8017).SvgAst, { ast: this.state.ast, override: null });
    }
  }
];
const importDefaultResult1Result = _createClass(SvgWithCss, items);
closure_1 = undefined;
class SvgWithCssUri {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_3(this, SvgWithCssUri);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(SvgWithCssUri);
    tmp3 = closure_4;
    if (closure_11()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.state = { xml: null };
    return tmp3Result;
  }
}
_inherits(SvgWithCssUri, Component);
const entry1 = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const response = this.fetch(this.props.uri);
  }
};
let items1 = [
  entry1,
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(uri) {
      const self = this;
      uri = this.props.uri;
      if (uri !== uri.uri) {
        const response = self.fetch(uri);
      }
    }
  },
,

];
const entry2 = { key: "fetch", value: null };
closure_1 = asyncGeneratorStep(async function(arg0) {
  const self = this;
  closure_1 = arg0;
  c8 = 0;
  c9 = 0;
  c6 = 0;
  return (async (arg0) => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_5 = self;
            closure_4 = tmp4;
            c6 = 1;
            setState = self.setState;
            closure_2 = {};
            let tmp8 = null;
            if (closure_1) {
              c8 = 2;
              c9 = 1;
              const obj5 = { value: self(closure_2[10]).fetchText(tmp36), done: false };
              return obj5;
            } else {
              closure_2.xml = tmp8;
              setState(closure_2);
              const props2 = closure_5.props;
              const onLoad = props2.onLoad;
              if (onLoad != null) {
                onLoad();
              }
              c6 = 0;
              c9 = 3;
            }
          }
        } else if (1 === tmp7) {
          c6 = 0;
          closure_132_0 = closure_7;
          if (!closure_5.props.onError) {
            const _console = console;
            console.error(closure_132_0);
          }
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else {
          tmp8 = value;
          if (arg0 === 2) {
            c6 = 0;
            c9 = 3;
            obj = { value, done: true };
            return obj;
          }
        }
        const props = closure_5.props;
        props.onError(closure_132_0);
      } catch (tmp26) {
        closure_7 = tmp26;
        if (tmp3 === c6) {
          c9 = tmp2;
          throw tmp26;
        } else {
          c8 = tmp;
        }
      }
    }
  })();
});
entry2.value = function fetch(arg0) {
  const self = this;
  const apply = closure_1.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items1[2] = entry2;
items1[3] = {
  key: "render",
  value: function render() {
    return <importDefaultResult1Result xml={this.state.xml} override={this.props} />;
  }
};

export { inlineStyles };
export { SvgCss };
export function SvgCssUri(uri) {
  uri = uri.uri;
  let onError = uri.onError;
  if (undefined === onError) {
    onError = closure_12;
  }
  const onLoad = uri.onLoad;
  let fallback = uri.fallback;
  const tmp2 = _slicedToArray(closure_9(null), 2);
  closure_3 = tmp2[1];
  const tmp3 = _slicedToArray(closure_9(false), 2);
  closure_4 = tmp3[1];
  const items = [onError, uri, onLoad];
  closure_7(() => {
    if (uri) {
      const text = SvgWithCssUri(8017).fetchText(tmp);
      obj = SvgWithCssUri(8017);
      text.then((result) => {
        closure_1_3(result);
        if (onLoad != null) {
          onLoad();
        }
      }).catch((error) => {
        onError(error);
        closure_1_4(true);
      });
      const nextPromise = text.then((result) => {
        closure_1_3(result);
        if (onLoad != null) {
          onLoad();
        }
      });
    } else {
      closure_3(null);
    }
  }, items);
  if (tmp3[0]) {
    if (fallback == null) {
      fallback = null;
    }
    let tmp7 = fallback;
  } else {
    obj = { xml: tmp2[0], override: uri, fallback };
    tmp7 = <SvgCss xml={tmp2[0]} override={uri} fallback={fallback} />;
  }
  return tmp7;
}
export const SvgWithCss = importDefaultResult1Result;
export const SvgWithCssUri = _createClass(SvgWithCssUri, items1);