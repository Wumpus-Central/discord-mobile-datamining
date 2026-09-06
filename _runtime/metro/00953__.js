// === Module 953: ? ===

// Module 953
import _mod682 from "module_682" /* 682 */;
import triggerHandlers from "triggerHandlers" /* 898 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _wrapNativeSuper from "_wrapNativeSuper" /* 158 */;
import _slicedToArray from "module_32" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

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
function isShadowRoot(host) {
  host = undefined;
  if (host != null) {
    host = host.host;
  }
  let shadowRoot;
  if (host != null) {
    shadowRoot = host.shadowRoot;
  }
  return Boolean(shadowRoot === host);
}
function isNativeShadowDom(arg0) {
  const call = toString.call;
  return "[object ShadowRoot]" === (typeof call === "unknown" ? toString() : call(arg0));
}
function stringifyStylesheet(styleSheet) {
  try {
    let cssRules = styleSheet.rules;
    if (!cssRules) {
      cssRules = styleSheet.cssRules;
    }
    let tmp3 = null;
    if (cssRules) {
      const _Array = Array;
      tmp3 = (function fixBrowserCompatibilityIssuesInCSS(arr) {
        let hasItem = arr.includes(" background-clip: text;");
        if (hasItem) {
          hasItem = !arr.includes(" -webkit-background-clip: text;");
        }
        let replaced = arr;
        if (hasItem) {
          replaced = arr.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;");
        }
        return replaced;
      })(Array.from(cssRules, stringifyRule).join(""));
      const arr = Array.from(cssRules, stringifyRule);
    }
    return tmp3;
  } catch (err) {
    return null;
  }
}
function stringifyRule(styleSheet) {
  cssText = undefined;
  if ((function isCSSImportRule(styleSheet) {
    return "styleSheet" in styleSheet;
  })(styleSheet)) {
    try {
      let tmp5 = stringifyStylesheet(styleSheet.styleSheet);
      if (!tmp5) {
        tmp5 = (function escapeImportStatement(cssText) {
          if (cssText.cssText.split("\"").length < 3) {
            return str;
          } else {
            const _JSON = JSON;
            const _HermesInternal3 = HermesInternal;
            const items = ["@import", "url(" + JSON.stringify(cssText.href) + ")"];
            if ("" === cssText.layerName) {
              items.push("layer");
            } else if (cssText.layerName) {
              const _HermesInternal = HermesInternal;
              items.push("layer(" + cssText.layerName + ")");
            }
            if (cssText.supportsText) {
              const _HermesInternal2 = HermesInternal;
              items.push("supports(" + cssText.supportsText + ")");
            }
            if (cssText.media.length) {
              items.push(cssText.media.mediaText);
            }
            return items.join(" ") + ";";
          }
        })(styleSheet);
      }
      cssText = tmp5;
    } catch (err) {
    }
  } else if ((function isCSSStyleRule(styleSheet) {
    return "selectorText" in styleSheet;
  })(styleSheet)) {
    ({ cssText, selectorText } = styleSheet);
    const hasItem = selectorText.includes(":");
    const all = styleSheet.style.all;
    let all2 = typeof all === "string";
    if (typeof all === "string") {
      all2 = styleSheet.style.all;
    }
    if (all2) {
      cssText = (function fixAllCssProperty(style) {
        let num = 0;
        let str = "";
        let str2 = "";
        if (0 < style.style.length) {
          do {
            style = style.style;
            let tmp = style[num];
            let propertyPriority = style.getPropertyPriority(tmp);
            let propertyValue = style.getPropertyValue(tmp);
            let str3 = "";
            if (propertyPriority) {
              str3 = " !important";
            }
            let _HermesInternal = HermesInternal;
            let str4 = "";
            let str5 = ":";
            let str6 = ";";
            str = str + "" + tmp + ":" + propertyValue + str3 + ";";
            num = num + 1;
            str2 = str;
          } while (num < style.style.length);
        }
        return "" + style.selectorText + " { " + str2 + " }";
      })(styleSheet);
    }
    let tmp3 = cssText;
    if (hasItem) {
      tmp3 = (function fixSafariColons(cssText) {
        return cssText.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2");
      })(cssText);
    }
    return tmp3;
  }
  if (!cssText) {
    cssText = styleSheet.cssText;
  }
  return cssText;
}
function shouldMaskInput(arg0) {
  ({ maskInputOptions, tagName, type } = arg0);
  if ("OPTION" === tagName) {
    tagName = "SELECT";
  }
  let tmp = maskInputOptions[tagName.toLowerCase(tagName)];
  if (!tmp) {
    let tmp2 = type;
    if (type) {
      tmp2 = maskInputOptions[type];
    }
    tmp = tmp2;
  }
  if (!tmp) {
    tmp = "password" === type;
  }
  if (!tmp) {
    tmp = "INPUT" === tagName && !type && maskInputOptions.text;
    const tmp3 = "INPUT" === tagName && !type && maskInputOptions.text;
  }
  return Boolean(tmp);
}
function maskInputValue(arg0) {
  ({ value, maskInputFn, isMasked, element } = arg0);
  if (!value) {
    value = "";
  }
  let repeatResult = value;
  if (isMasked) {
    let maskInputFnResult = value;
    if (maskInputFn) {
      maskInputFnResult = maskInputFn(value, element);
    }
    const repeat = "*".repeat;
    repeatResult = "*".repeat(maskInputFnResult.length);
  }
  return repeatResult;
}
function toLowerCase(str) {
  return str.toLowerCase();
}
function toUpperCase(str) {
  return str.toUpperCase();
}
function getInputType(type) {
  let str2 = "password";
  if (!type.hasAttribute("data-rr-is-password")) {
    let formatted = null;
    if (str) {
      formatted = str.toLowerCase();
    }
    str2 = formatted;
  }
  return str2;
}
function getInputValue(getAttribute, arg1, arg2) {
  if ("INPUT" === arg1) {
    if ("radio" !== arg2) {
      return value;
    }
    value = getAttribute.getAttribute("value") || "";
  }
  value = getAttribute.value;
}
function extractFileExtension(arg0, arg1) {
  try {
    let href = arg1;
    if (arg1 == null) {
      const _window = window;
      href = window.location.href;
    }
    const uRL = new URL(arg0, href);
    const match = uRL.pathname.match(/\.([0-9a-z]+)(?:$)/i);
    let tmp10;
    if (match != null) {
      tmp10 = match[1];
    }
    if (tmp10 == null) {
      tmp10 = null;
    }
    return tmp10;
  } catch (err) {
    return null;
  }
}
function getImplementation$1(clearTimeout) {
  if (closure_32[clearTimeout]) {
    return tmp2;
  } else {
    const _window = window;
    const _document = window.document;
    const _window2 = window;
    obj = window[clearTimeout];
    if (_document) {
      if (typeof _document.createElement === "function") {
        try {
          const element = <iframe />;
          element.hidden = true;
          const head = _document.head;
          head.appendChild(element);
          const contentWindow = element.contentWindow;
          if (contentWindow) {
            obj = tmp7[clearTimeout];
          }
          const head2 = _document.head;
          head2.removeChild(element);
        } catch (err) {
        }
      }
    }
    const _window3 = window;
    const bindResult = obj.bind(window);
    tmp[clearTimeout] = bindResult;
    return bindResult;
  }
}
function setTimeout$2() {
  const items = [...arguments];
  return getImplementation$1("setTimeout")(...items);
}
function clearTimeout$1() {
  const items = [...arguments];
  return getImplementation$1("clearTimeout")(...items);
}
function getIframeContentDocument(contentDocument) {
  try {
    return contentDocument.contentDocument;
  } catch (err) {
  }
}
function genId() {
  closure_39 = tmp + 1;
  return +closure_39;
}
function absoluteToStylesheet(parentNode, rootId) {
  let str = parentNode;
  closure_0 = rootId;
  if (!parentNode) {
    str = "";
  }
  return str.replace(closure_42, (arg0, arg1, arg2, arg3, arg4, arg5) => {
    let str = arg2;
    if (!arg2) {
      str = arg4;
    }
    if (!str) {
      str = arg5;
    }
    let str2 = arg1;
    if (!arg1) {
      str2 = arg3;
    }
    if (!str2) {
      str2 = "";
    }
    if (str) {
      if (!re43.test(str)) {
        if (!re44.test(str)) {
          if (re45.test(str)) {
            const _HermesInternal3 = HermesInternal;
            return "url(" + str2 + str + str2 + ")";
          } else if ("/" === str[0]) {
            const _HermesInternal2 = HermesInternal;
            return "url(" + str2 + (function extractOrigin(href) {
              if (href.indexOf("//") > -1) {
                const parts = href.split("/");
                const substr = parts.slice(0, 3);
                let str2 = substr.join("/");
              } else {
                str2 = href.split("/")[0];
              }
              return str2.split("?")[0];
            })(href) + str + str2 + ")";
          } else {
            let parts = href.split("/");
            const parts1 = str.split("/");
            parts.pop();
            const iter = parts1[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let tmp8 = nextResult;
              if ("." !== nextResult) {
                if (".." === tmp8) {
                  let arr = parts.pop();
                } else {
                  let arr1 = parts.push(tmp8);
                }
              }
              continue;
            }
            const _HermesInternal = HermesInternal;
            return "url(" + str2 + parts.join("/") + str2 + ")";
          }
        }
      }
      const _HermesInternal4 = HermesInternal;
      return "url(" + str2 + str + str2 + ")";
    } else {
      return arg0;
    }
  });
}
function isSVGElement(tagName) {
  let ownerSVGElement = "svg" === tagName.tagName;
  if (!ownerSVGElement) {
    ownerSVGElement = tagName.ownerSVGElement;
  }
  return Boolean(ownerSVGElement);
}
function getHref(createElement, str) {
  value = weakMap.get(createElement);
  if (!value) {
    const element = <a />;
    const result = weakMap.set(createElement, element);
    value = element;
  }
  let str2 = "";
  if (str) {
    if (!str.startsWith("blob:")) {
      str2 = str;
    }
    return str;
  }
  const attr = value.setAttribute("href", str2);
  return value.href;
}
function transformAttribute(createElement, arg1, value, str, arr, fn, size) {
  let sum3;
  if (str) {
    str = "src";
    if ("src" !== value) {
      if ("xlink:href" === value) {
        if ("#" !== str[0]) {
          let tmp48 = str;
          if (str) {
            let str35 = "";
            tmp48 = str;
            if ("" !== str.trim()) {
              value = weakMap.get(createElement);
              if (!value) {
                const element = <a />;
                const result = weakMap.set(createElement, element);
                value = element;
              }
              if (!str) {
                const attr = value.setAttribute("href", str35);
                let href5 = value.href;
              } else {
                href5 = str;
                if (!str.startsWith("blob:")) {
                  str35 = str;
                  href5 = str;
                }
              }
              tmp48 = href5;
            }
          }
          return tmp48;
        }
      }
      if ("background" === value) {
        let tmp44 = str;
        if (str) {
          let str31 = "";
          tmp44 = str;
          if ("" !== str.trim()) {
            value = weakMap.get(createElement);
            if (!value) {
              const element1 = <a />;
              const result1 = weakMap.set(createElement, element1);
              value = element1;
            }
            if (!str) {
              const attr1 = value.setAttribute("href", str31);
              let href4 = value.href;
            } else {
              href4 = str;
              if (!str.startsWith("blob:")) {
                str31 = str;
                href4 = str;
              }
            }
            tmp44 = href4;
          }
        }
        return tmp44;
      }
      if ("srcset" === value) {
        let joined = str;
        if ("" !== str.trim()) {
          const match = regex2.exec(str.substring(0));
          let num2 = 0;
          if (match) {
            num2 = match[0].length;
          }
          let items = [];
          if (num2 < str.length) {
            do {
              let match1 = regex.exec(str.substring(num2));
              let sum = num2;
              let str23 = "";
              if (match1) {
                let first = match1[0];
                sum = num2 + first.length;
                str23 = first;
              }
              if ("," === str23.slice(-1)) {
                let str28 = str23.substring(0, str23.length - 1);
                let tmp35 = str28;
                if (str28) {
                  tmp35 = str28;
                  if ("" !== str28.trim()) {
                    let value1 = weakMap.get(createElement);
                    if (!value1) {
                      let element2 = <a />;
                      let result2 = weakMap.set(createElement, element2);
                      value1 = element2;
                    }
                    let str29 = "";
                    if (!str28) {
                      let attr2 = value1.setAttribute("href", ``);
                      let href3 = value1.href;
                    } else {
                      href3 = str28;
                      if (!str28.startsWith("blob:")) {
                        href3 = str28;
                      }
                    }
                    tmp35 = href3;
                  }
                }
                arr = items.push(tmp35);
                let sum2 = sum;
              } else {
                let tmp23 = str23;
                if (str23) {
                  tmp23 = str23;
                  if ("" !== str23.trim()) {
                    value2 = weakMap.get(createElement);
                    if (!value2) {
                      let element3 = <a />;
                      let result3 = weakMap.set(createElement, element3);
                      value2 = element3;
                    }
                    let str24 = "";
                    if (!str23) {
                      let attr3 = value2.setAttribute("href", ``);
                      let href2 = value2.href;
                    } else {
                      href2 = str23;
                      if (!str23.startsWith("blob:")) {
                        href2 = str23;
                      }
                    }
                    tmp23 = href2;
                  }
                }
                let sum1 = sum;
                let flag = false;
                let str25 = "";
                let charAtResult = str.charAt(sum1);
                while ("" !== charAtResult) {
                  if (flag) {
                    let flag2 = flag;
                    if (")" === charAtResult) {
                      flag2 = false;
                    }
                    str25 = str25 + charAtResult;
                    sum1 = sum1 + 1;
                    flag = flag2;
                    continue;
                  } else if ("," === charAtResult) {
                    sum2 = sum1 + 1;
                    let str26 = tmp23 + str25;
                    arr = items.push(str26.trim());
                  } else {
                    flag2 = flag;
                    if ("(" === charAtResult) {
                      flag2 = true;
                    }
                  }
                }
                let str27 = tmp23 + str25;
                let arr1 = items.push(str27.trim());
                sum2 = sum1;
              }
              let match2 = regex2.exec(str.substring(sum2));
              sum3 = sum2;
              if (match2) {
                sum3 = sum2 + match2[0].length;
              }
              num2 = sum3;
            } while (sum3 < str.length);
          }
          joined = items.join(", ");
        }
        return joined;
      } else if ("style" === value) {
        let value3 = weakMap.get(createElement);
        if (!value3) {
          const element4 = <a />;
          const result4 = weakMap.set(createElement, element4);
          value3 = element4;
        }
        const attr4 = value3.setAttribute("href", "");
        let href = value3.href;
        let str15 = str;
        if (!str) {
          str15 = "";
        }
        const replaced = str15.replace(closure_42, (arg0, arg1, arg2, arg3, arg4, arg5) => {
          let str = arg2;
          if (!arg2) {
            str = arg4;
          }
          if (!str) {
            str = arg5;
          }
          let str2 = arg1;
          if (!arg1) {
            str2 = arg3;
          }
          if (!str2) {
            str2 = "";
          }
          if (str) {
            if (!re43.test(str)) {
              if (!re44.test(str)) {
                if (re45.test(str)) {
                  const _HermesInternal3 = HermesInternal;
                  return "url(" + str2 + str + str2 + ")";
                } else if ("/" === str[0]) {
                  const _HermesInternal2 = HermesInternal;
                  return "url(" + str2 + (function extractOrigin(href) {
                    if (href.indexOf("//") > -1) {
                      const parts = href.split("/");
                      const substr = parts.slice(0, 3);
                      let str2 = substr.join("/");
                    } else {
                      str2 = href.split("/")[0];
                    }
                    return str2.split("?")[0];
                  })(href) + str + str2 + ")";
                } else {
                  let parts = href.split("/");
                  const parts1 = str.split("/");
                  parts.pop();
                  const iter = parts1[Symbol.iterator]();
                  const nextResult = iter.next();
                  while (iter !== undefined) {
                    let tmp8 = nextResult;
                    if ("." !== nextResult) {
                      if (".." === tmp8) {
                        let arr = parts.pop();
                      } else {
                        let arr1 = parts.push(tmp8);
                      }
                    }
                    continue;
                  }
                  const _HermesInternal = HermesInternal;
                  return "url(" + str2 + parts.join("/") + str2 + ")";
                }
              }
            }
            const _HermesInternal4 = HermesInternal;
            return "url(" + str2 + str + str2 + ")";
          } else {
            return arg0;
          }
        });
        let tmp15 = size;
        if (size) {
          tmp15 = size.size > 0;
        }
        let tmp16 = replaced;
        if (tmp15) {
          tmp16 = (function filterCSSPropertiesFromInlineStyle(replaced, size) {
            if (replaced) {
              if (0 !== size.size) {
                try {
                  const parts = replaced.split(";");
                  const items = [];
                  const iter = parts[Symbol.iterator]();
                  const str3 = iter.next();
                  while (iter !== undefined) {
                    let trimmed = str3.trim();
                    let arr2 = trimmed;
                    if (trimmed) {
                      let index = arr2.indexOf(":");
                      if (-1 !== index) {
                        let str4 = arr2.slice(0, tmp11);
                        if (!size.has(str4.trim())) {
                          let arr = items.push(arr2);
                        }
                      } else {
                        arr = items.push(arr2);
                      }
                    }
                    continue;
                  }
                  let str7 = "";
                  const joined = items.join("; ");
                  if (items.length > 0) {
                    str7 = "";
                    if (replaced.endsWith(";")) {
                      str7 = ";";
                    }
                  }
                  return joined + str7;
                } catch (tmp21) {
                  const _console = console;
                  console.warn("Error filtering CSS properties:", tmp21);
                  return tmp;
                }
              }
            }
            return replaced;
          })(replaced, size);
        }
        return tmp16;
      } else {
        if ("object" === arg1) {
          if ("data" === value) {
            let tmp5 = str;
            if (str) {
              let str9 = "";
              tmp5 = str;
              if ("" !== str.trim()) {
                let value4 = weakMap.get(createElement);
                if (!value4) {
                  const element5 = <a />;
                  const result5 = weakMap.set(createElement, element5);
                  value4 = element5;
                }
                if (!str) {
                  const attr5 = value4.setAttribute("href", str9);
                  href = value4.href;
                } else {
                  href = str;
                  if (!str.startsWith("blob:")) {
                    str9 = str;
                    href = str;
                  }
                }
                tmp5 = href;
              }
            }
            let tmp4 = tmp5;
          }
          return tmp4;
        }
        tmp4 = str;
        if (typeof fn === "function") {
          tmp4 = fn(value, str, arr);
        }
      }
    }
    let tmp52 = str;
    if (str) {
      let str39 = "";
      tmp52 = str;
      if ("" !== str.trim()) {
        let value5 = weakMap.get(createElement);
        if (!value5) {
          const element6 = <a />;
          const result6 = weakMap.set(createElement, element6);
          value5 = element6;
        }
        if (!str) {
          const attr6 = value5.setAttribute("href", str39);
          let href6 = value5.href;
        } else {
          href6 = str;
          if (!str.startsWith("blob:")) {
            str39 = str;
            href6 = str;
          }
        }
        tmp52 = href6;
      }
    }
    return tmp52;
  } else {
    return str;
  }
}
function ignoreAttribute(arg0, arg1, arg2) {
  let tmp = "video" === arg0;
  if (!tmp) {
    tmp = "audio" === arg0;
  }
  if (tmp) {
    tmp = "autoplay" === arg1;
  }
  return tmp;
}
function distanceToMatch(nodeType, fn) {
  let num = arg2;
  if (arg2 === undefined) {
    num = Infinity;
  }
  let num2 = arg3;
  if (arg3 === undefined) {
    num2 = 0;
  }
  let num3 = -1;
  if (nodeType) {
    let num4 = -1;
    if (nodeType.nodeType === nodeType.ELEMENT_NODE) {
      num4 = -1;
      if (num2 <= num) {
        let tmp2 = num2;
        if (!fn(nodeType)) {
          tmp2 = distanceToMatch(nodeType.parentNode, fn, num, num2 + 1);
        }
        num4 = tmp2;
      }
    }
    num3 = num4;
  }
  return num3;
}
function createMatchPredicate(unmaskTextClass, unmaskTextSelector) {
  closure_0 = unmaskTextClass;
  closure_1 = unmaskTextSelector;
  return (parentNode) => {
    if (null === parentNode) {
      return false;
    } else {
      try {
        if (c0) {
          if (typeof c0 === "string") {
            const _HermesInternal = HermesInternal;
            if (parentNode.matches("." + c0)) {
              return true;
            }
          } else if ((function elementClassMatchesRegex(classList, test) {
            let diff = tmp - 1;
            if (+classList.classList.length) {
              while (!test.test(classList.classList[diff])) {
                let tmp4 = +diff;
                diff = tmp4 - 1;
              }
              return true;
            }
            return false;
          })(parentNode, c0)) {
            return true;
          }
        }
        let tmp4 = !closure_1;
        if (closure_1) {
          tmp4 = !parentNode.matches(tmp3);
        }
        return !tmp4;
      } catch (err) {
        return false;
      }
    }
  };
}
function needMaskingText(nodeType, maskTextClass, maskTextSelector, unmaskTextClass, unmaskTextSelector, maskAllText) {
  try {
    let parentElement = nodeType;
    if (nodeType.nodeType !== nodeType.ELEMENT_NODE) {
      parentElement = nodeType.parentElement;
    }
    if (null === parentElement) {
      return false;
    } else {
      if ("INPUT" === obj.tagName) {
        const items = ["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"];
        if (items.includes(obj.getAttribute("autocomplete"))) {
          return true;
        }
      }
      if (maskAllText) {
        let tmp9Result = distanceToMatch(obj, createMatchPredicate(unmaskTextClass, unmaskTextSelector));
        let tmp9Result2 = tmp9Result;
        if (tmp9Result < 0) {
          return true;
        } else {
          let num7 = Infinity;
          let tmp11Result = createMatchPredicate(maskTextClass, maskTextSelector);
          if (tmp9Result2 >= 0) {
            num7 = tmp9Result2;
          }
          tmp9Result = distanceToMatch(parentElement, tmp11Result, num7);
        }
      } else {
        const tmp9Result1 = distanceToMatch(obj, createMatchPredicate(maskTextClass, maskTextSelector));
        tmp9Result = tmp9Result1;
        if (tmp9Result1 < 0) {
          return false;
        } else {
          let num5 = Infinity;
          tmp11Result = createMatchPredicate(unmaskTextClass, unmaskTextSelector);
          if (tmp9Result >= 0) {
            num5 = tmp9Result;
          }
          tmp9Result2 = distanceToMatch(obj, tmp11Result, num5);
        }
      }
      if (tmp9Result >= 0) {
        let tmp25 = tmp9Result2 < 0;
        if (!tmp25) {
          tmp25 = tmp9Result <= tmp9Result2;
        }
        let tmp23 = tmp25;
      } else {
        tmp23 = tmp9Result2 < 0;
        if (tmp23) {
          tmp23 = maskAllText;
        }
      }
      return tmp23;
    }
  } catch (err) {
    return tmp;
  }
}
function serializeNode(nodeType, newlyAddedElement) {
  ({ doc, mirror, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, maskInputOptions } = newlyAddedElement);
  ({ blockClass, blockSelector, unblockSelector, maskAllText, maskAttributeFn, inlineStylesheet } = newlyAddedElement);
  if (undefined === maskInputOptions) {
    maskInputOptions = {};
  }
  ({ maskInputFn, dataURLOptions, maskTextFn } = newlyAddedElement);
  if (undefined === dataURLOptions) {
    dataURLOptions = {};
  }
  newlyAddedElement = newlyAddedElement.newlyAddedElement;
  let tmp = undefined !== newlyAddedElement;
  ({ inlineImages, recordCanvas, keepIframeSrcFn } = newlyAddedElement);
  if (tmp) {
    tmp = newlyAddedElement;
  }
  if (mirror.hasNode(doc)) {
    const id = mirror.getId(doc);
  }
  nodeType = nodeType.nodeType;
  if (nodeType.DOCUMENT_NODE === nodeType) {
    if ("CSS1Compat" !== nodeType.compatMode) {
      obj = { type: null, childNodes: null, compatMode: null };
      obj.type = obj.Document;
      obj.childNodes = [];
      obj.compatMode = nodeType.compatMode;
    } else {
      obj = { type: null, childNodes: null };
      obj.type = obj.Document;
      obj.childNodes = [];
    }
    return obj;
  } else if (nodeType.DOCUMENT_TYPE_NODE === nodeType) {
    obj1 = { type: obj.DocumentType, name: null, publicId: null, systemId: null, rootId: null };
    ({ name: obj5.name, publicId: obj5.publicId, systemId: obj5.systemId } = nodeType);
    obj1.rootId = tmp2;
    return obj1;
  } else if (nodeType.ELEMENT_NODE === nodeType) {
    obj2 = { doc, blockClass, blockSelector, unblockSelector, inlineStylesheet, maskAttributeFn, maskInputOptions, maskInputFn, dataURLOptions, inlineImages, recordCanvas, keepIframeSrcFn, newlyAddedElement: tmp, rootId: tmp2, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, ignoreCSSAttributes: newlyAddedElement.ignoreCSSAttributes };
    return (function serializeElementNode(attributes, newlyAddedElement) {
      ({ doc, blockClass, blockSelector, unblockSelector, maskInputOptions, inlineStylesheet } = newlyAddedElement);
      if (undefined === maskInputOptions) {
        maskInputOptions = {};
      }
      ({ maskAttributeFn, dataURLOptions, maskInputFn } = newlyAddedElement);
      if (undefined === dataURLOptions) {
        dataURLOptions = {};
      }
      newlyAddedElement = newlyAddedElement.newlyAddedElement;
      let tmp5 = undefined !== newlyAddedElement;
      ({ inlineImages, recordCanvas, keepIframeSrcFn } = newlyAddedElement);
      if (tmp5) {
        tmp5 = newlyAddedElement;
      }
      ({ maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, ignoreCSSAttributes } = newlyAddedElement);
      const tmp7 = (function _isBlockedElement(matches, blockClass, blockSelector, unblockSelector) {
        try {
          if (unblockSelector) {
            if (matches.matches(unblockSelector)) {
              return false;
            }
          }
          if (typeof blockClass === "string") {
            const classList = matches.classList;
            if (classList.contains(blockClass)) {
              return true;
            }
          } else {
            let diff = tmp10 - 1;
            if (+matches.classList.length) {
              while (!blockClass.test(matches.classList[diff])) {
                let tmp6 = +diff;
                diff = tmp6 - 1;
              }
              return true;
            }
          }
          if (blockSelector) {
            return matches.matches(blockSelector);
          } else {
            return false;
          }
        } catch (err) {
        }
      })(attributes, blockClass, blockSelector, unblockSelector);
      let tmp8 = (function getValidTagName$1(tagName) {
        if (tagName instanceof globalThis.HTMLFormElement) {
          return "form";
        } else {
          const formatted = tagName.tagName.toLowerCase();
          let str2 = "div";
          if (!regex.test(formatted)) {
            str2 = formatted;
          }
          return str2;
        }
      })(attributes);
      obj = {};
      for (let num = 0; num < length; num = num + 1) {
        let iter = attributes.attributes[num];
        let name = iter.name;
        if (name) {
          name = !closure_53(tmp8, iter.name, iter.value);
        }
        if (name) {
          obj[iter.name] = closure_52(doc, tmp8, closure_26(iter.name), iter.value, attributes, maskAttributeFn, ignoreCSSAttributes);
        }
      }
      if ("link" === tmp8) {
        if (inlineStylesheet) {
          const _Array = Array;
          const found = Array.from(doc.styleSheets).find((href) => href.href === attributes.href);
          let tmp21 = null;
          if (found) {
            tmp21 = closure_21(found);
          }
          if (tmp21) {
            obj.rel = null;
            obj.href = null;
            obj.crossorigin = null;
            obj._cssText = closure_46(tmp21, found.href);
          }
          const arr = Array.from(doc.styleSheets);
        }
      }
      if ("style" === tmp8) {
        if (attributes.sheet) {
          if (!str.trim().length) {
            const tmp25 = closure_21(attributes.sheet);
            if (tmp25) {
              obj._cssText = closure_46(tmp25, closure_51(doc));
            }
          }
          str = attributes.innerText || attributes.textContent || "";
        }
      }
      if ("input" !== tmp8) {
        if ("textarea" !== tmp8) {
          if ("option" === tmp8) {
            if (attributes.selected) {
              if (!maskInputOptions.select) {
                obj.selected = true;
              }
            }
            delete tmp3[tmp4];
          }
          if ("canvas" === tmp8) {
            if (recordCanvas) {
              if ("2d" === attributes.__context) {
                if (!(function is2DCanvasBlank(getContext) {
                  const context = getContext.getContext("2d");
                  if (context) {
                    let num3 = 0;
                    if (0 < getContext.width) {
                      while (true) {
                        let tmp3 = num3;
                        let num4 = 0;
                        if (0 < getContext.height) {
                          while (true) {
                            let getImageData = context.getImageData;
                            let tmp4 = num4;
                            let tmp5 = getImageData;
                            if (closure_1_28 in getImageData) {
                              tmp5 = getImageData[closure_1_28];
                            }
                            let call = tmp5.call;
                            let _Math = Math;
                            let bound = Math.min(50, getContext.width - num3);
                            let _Math2 = Math;
                            let bound1 = Math.min(50, getContext.height - num4);
                            if (typeof call === "unknown") {
                              let callResult = tmp5(tmp3, tmp4, bound, bound1);
                            } else {
                              callResult = call(context, tmp3, tmp4, bound, bound1);
                            }
                            let tmp14 = new.target;
                            let tmp15 = new.target;
                            let uint32Array = new Uint32Array(callResult.data.buffer);
                            if (uint32Array.some((item) => 0 !== item)) {
                              break;
                            } else {
                              num4 = num4 + 50;
                              continue;
                            }
                          }
                          let flag3 = false;
                          return false;
                        }
                        num3 = num3 + 50;
                      }
                    }
                    return true;
                  } else {
                    return true;
                  }
                })(attributes)) {
                  obj.rr_dataURL = attributes.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                }
              } else if (!("__context" in attributes)) {
                const toDataURLResult = attributes.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                const element = <canvas />;
                ({ width: obj4.width, height: obj4.height } = attributes);
                if (toDataURLResult !== element.toDataURL(dataURLOptions.type, dataURLOptions.quality)) {
                  obj.rr_dataURL = toDataURLResult;
                }
              }
            }
          }
          if ("img" === tmp8) {
            if (inlineImages) {
              if (!element1) {
                element1 = <canvas />;
                let context = element1.getContext("2d");
              }
              const attributes2 = attributes;
              let str13 = attributes.currentSrc;
              if (!str13) {
                str13 = attributes.getAttribute("src");
              }
              if (!str13) {
                str13 = "<unknown-src>";
              }
              const crossOrigin = attributes.crossOrigin;
              function recordInlineImage() {
                const removed = attributes2.removeEventListener("load", recordInlineImage);
                try {
                  closure_2_37.width = attributes2.naturalWidth;
                  closure_2_37.height = attributes2.naturalHeight;
                  closure_2_38.drawImage(attributes2, 0, 0);
                  obj.rr_dataURL = closure_2_37.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                  if ("anonymous" === attributes2.crossOrigin) {
                    if (crossOrigin) {
                      obj.crossOrigin = tmp15;
                    } else {
                      attributes2.removeAttribute("crossorigin");
                    }
                  }
                } catch (tmp11) {
                  if ("anonymous" !== obj.crossOrigin) {
                    obj.crossOrigin = "anonymous";
                    if (obj.complete) {
                      if (0 !== obj.naturalWidth) {
                        tmp2();
                      }
                    }
                    const listener = obj.addEventListener(tmp, tmp2);
                  } else {
                    const _console = console;
                    const _HermesInternal = HermesInternal;
                    console.warn("Cannot inline img src=" + str13 + "! Error: " + tmp11);
                  }
                }
              }
              if (attributes.complete) {
                if (0 !== attributes.naturalWidth) {
                  recordInlineImage();
                }
              }
              let listener = attributes.addEventListener("load", recordInlineImage);
            }
          }
          let tmp43 = "audio" !== tmp8;
          if (tmp43) {
            tmp43 = "video" !== tmp8;
          }
          if (!tmp43) {
            let str18 = "played";
            if (attributes.paused) {
              str18 = "paused";
            }
            obj.rr_mediaState = str18;
            obj.rr_mediaCurrentTime = attributes.currentTime;
          }
          if (!tmp5) {
            if (attributes.scrollLeft) {
              obj.rr_scrollLeft = attributes.scrollLeft;
            }
            if (attributes.scrollTop) {
              obj.rr_scrollTop = attributes.scrollTop;
            }
          }
          let tmp44 = obj;
          if (tmp7) {
            const size = attributes.getBoundingClientRect();
            obj = { class: null, rr_width: null, rr_height: null };
            obj.class = obj.class;
            let _HermesInternal = HermesInternal;
            obj.rr_width = "" + size.width + "px";
            const _HermesInternal2 = HermesInternal;
            obj.rr_height = "" + size.height + "px";
            tmp44 = obj;
          }
          if (!tmp46) {
            let tmp47 = tmp7;
            if (!tmp7) {
              tmp47 = closure_36(attributes);
            }
            if (!tmp47) {
              tmp44.rr_src = tmp44.src;
            }
            delete tmp2[tmp];
          }
          try {
            obj = { type: RN.Element, tagName: tmp8, attributes: tmp44, childNodes: [], isSVG: closure_50(attributes), needBlock: tmp7, rootId: tmp6, isCustom: flag };
            return obj;
          } catch (err) {
          }
          tmp46 = "iframe" !== tmp8 || keepIframeSrcFn(tmp44.src);
        }
      }
      const tmp28 = closure_29(attributes);
      const tmp30 = closure_30(attributes, closure_27(tmp8), tmp28);
      const checked = attributes.checked;
      if ("submit" !== tmp28) {
        if ("button" !== tmp28) {
          if (tmp30) {
            obj1 = { type: tmp28, tagName: closure_27(tmp8), maskInputOptions };
            obj2 = { isMasked: closure_56(attributes, maskTextClass, maskTextSelector, unmaskTextClass, unmaskTextSelector, closure_24(obj1)), element: attributes, value: tmp30, maskInputFn };
            obj.value = closure_25(obj2);
          }
        }
      }
      if (checked) {
        obj.checked = checked;
      }
      length = attributes.attributes.length;
    })(nodeType, obj2);
  } else if (nodeType.TEXT_NODE === nodeType) {
    obj3 = { doc, maskAllText, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, maskTextFn, maskInputOptions, maskInputFn, rootId: tmp2 };
    return (function serializeTextNode(parentNode, rootId) {
      let tmp = rootId;
      ({ maskAllText, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, maskTextFn, maskInputOptions, maskInputFn } = rootId);
      let tagName = parentNode.parentNode;
      if (tagName) {
        tagName = parentNode.parentNode.tagName;
      }
      let str = parentNode.textContent;
      let tmp4 = "TEXTAREA" === tagName || undefined;
      if ("STYLE" === tagName || undefined) {
        if (str) {
          try {
            let previousSibling = parentNode.nextSibling;
            if (!previousSibling) {
              previousSibling = parentNode.previousSibling;
            }
            if (!previousSibling) {
              const sheet = parentNode.parentNode.sheet;
              let cssRules;
              if (sheet != null) {
                cssRules = sheet.cssRules;
              }
              if (cssRules) {
                str = stringifyStylesheet(parentNode.parentNode.sheet);
              }
            }
            tmp = getHref(tmp.doc);
            str = absoluteToStylesheet(str, tmp);
          } catch (tmp9) {
            const _console = console;
            const _HermesInternal = HermesInternal;
            console.warn("Cannot get CSS styles from text's parentNode. Error: " + tmp9, parentNode);
          }
        }
      }
      if ("SCRIPT" === tagName || undefined) {
        str = "SCRIPT_PLACEHOLDER";
      }
      const tmp16 = needMaskingText(parentNode, maskTextClass, maskTextSelector, unmaskTextClass, unmaskTextSelector, maskAllText);
      let tmp17 = tmp2;
      if (!("STYLE" === tagName || undefined)) {
        tmp17 = tmp3;
      }
      if (!tmp17) {
        tmp17 = tmp4;
      }
      if (!tmp17) {
        tmp17 = !str;
      }
      if (!tmp17) {
        tmp17 = !tmp16;
      }
      if (tmp17) {
        if (tmp4) {
          tmp4 = str;
        }
        if (tmp4) {
          tmp4 = maskInputOptions.textarea || tmp16;
          const tmp22 = maskInputOptions.textarea || tmp16;
        }
        if (!tmp4) {
          if ("OPTION" === tagName) {
            if (str) {
              obj = { isMasked: null, element: null, value: null, maskInputFn: null };
              obj = { type: null, tagName, maskInputOptions };
              obj.isMasked = needMaskingText(parentNode, maskTextClass, maskTextSelector, unmaskTextClass, unmaskTextSelector, shouldMaskInput(obj));
              obj.element = parentNode;
              obj.value = str;
              obj.maskInputFn = maskInputFn;
              str = maskInputValue(obj);
            }
          }
          obj = { type: RN.Text, textContent: null, isStyle: null, rootId: null };
          if (!str) {
            str = "";
          }
          obj.textContent = str;
          obj.isStyle = tmp2;
          obj.rootId = rootId.rootId;
          return obj;
        } else if (maskInputFn) {
          let maskInputFnResult = maskInputFn(str, parentNode.parentNode);
        } else {
          maskInputFnResult = str.replace(/[\S]/g, "*");
        }
      } else if (maskTextFn) {
        let maskTextFnResult = maskTextFn(str, parentNode.parentElement);
      } else {
        maskTextFnResult = str.replace(/[\S]/g, "*");
      }
    })(nodeType, obj3);
  } else if (nodeType.CDATA_SECTION_NODE === nodeType) {
    obj4 = { type: obj.CDATA, textContent: "", rootId: tmp2 };
    return obj4;
  } else if (nodeType.COMMENT_NODE === nodeType) {
    obj = { type: null, textContent: null, rootId: null };
    obj.type = obj.Comment;
    obj.textContent = nodeType.textContent || "";
    obj.rootId = tmp2;
    return obj;
  } else {
    return false;
  }
}
function serializeNodeWithId(iframeContentDocument, doc) {
  closure_0 = iframeContentDocument;
  doc = doc.doc;
  const mirror = doc.mirror;
  const blockClass = doc.blockClass;
  const blockSelector = doc.blockSelector;
  const unblockSelector = doc.unblockSelector;
  const maskAllText = doc.maskAllText;
  const maskTextClass = doc.maskTextClass;
  const unmaskTextClass = doc.unmaskTextClass;
  const maskTextSelector = doc.maskTextSelector;
  const unmaskTextSelector = doc.unmaskTextSelector;
  const skipChild = doc.skipChild;
  const inlineStylesheet = tmp4;
  let maskInputOptions = doc.maskInputOptions;
  if (undefined === maskInputOptions) {
    maskInputOptions = {};
  }
  const maskAttributeFn = doc.maskAttributeFn;
  const maskTextFn = doc.maskTextFn;
  const maskInputFn = doc.maskInputFn;
  const slimDOMOptions = doc.slimDOMOptions;
  let dataURLOptions = doc.dataURLOptions;
  if (undefined === dataURLOptions) {
    dataURLOptions = {};
  }
  const inlineImages = tmp5;
  const recordCanvas = doc.recordCanvas;
  isShadowRoot = tmp6;
  const onSerialize = doc.onSerialize;
  const onIframeLoad = doc.onIframeLoad;
  const iframeLoadTimeout = doc.iframeLoadTimeout;
  let num = 5000;
  let num2 = 5000;
  if (undefined !== iframeLoadTimeout) {
    num2 = iframeLoadTimeout;
  }
  const onBlockedImageLoad = doc.onBlockedImageLoad;
  const onStylesheetLoad = doc.onStylesheetLoad;
  const stylesheetLoadTimeout = doc.stylesheetLoadTimeout;
  if (undefined !== stylesheetLoadTimeout) {
    num = stylesheetLoadTimeout;
  }
  let keepIframeSrcFn = doc.keepIframeSrcFn;
  if (undefined === keepIframeSrcFn) {
    keepIframeSrcFn = () => false;
  }
  const newlyAddedElement = doc.newlyAddedElement;
  const ignoreCSSAttributes = doc.ignoreCSSAttributes;
  const preserveWhiteSpace = doc.preserveWhiteSpace;
  let flag = undefined === preserveWhiteSpace || preserveWhiteSpace;
  c28 = flag;
  const tmp8 = serializeNode(iframeContentDocument, { doc, mirror, blockClass, blockSelector, maskAllText, unblockSelector, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, inlineStylesheet: undefined === inlineStylesheet || inlineStylesheet, maskInputOptions, maskAttributeFn, maskTextFn, maskInputFn, dataURLOptions, inlineImages: undefined !== inlineImages && inlineImages, recordCanvas: undefined !== recordCanvas && recordCanvas, keepIframeSrcFn, newlyAddedElement: undefined !== newlyAddedElement && newlyAddedElement, ignoreCSSAttributes });
  if (tmp8) {
    if (mirror.hasNode(iframeContentDocument)) {
      let num4 = mirror.getId(iframeContentDocument);
    } else {
      num4 = -2;
      if (!(function slimDOMExcluded(type, slimDOMOptions) {
        if (slimDOMOptions.comment) {
          if (type.type === inlineImages.Comment) {
            return true;
          }
        }
        if (type.type === inlineImages.Element) {
          if (slimDOMOptions.script) {
            return true;
          }
          if (slimDOMOptions.headFavicon) {
            if ("link" !== type.tagName) {
              if ("meta" === type.tagName) {
                let str12 = "";
                let str7 = "";
                if (null != type.attributes.name) {
                  str7 = str56.toLowerCase();
                }
                if (!str7.match(/^msapplication-tile(image|color)$/)) {
                  let formatted = str12;
                  if (null != type.attributes.name) {
                    formatted = str8.toLowerCase();
                  }
                  if ("application-name" !== formatted) {
                    let formatted1 = str12;
                    if (null != type.attributes.rel) {
                      formatted1 = str57.toLowerCase();
                    }
                    if ("icon" !== formatted1) {
                      let formatted2 = str12;
                      if (null != type.attributes.rel) {
                        formatted2 = str58.toLowerCase();
                      }
                      if ("apple-touch-icon" !== formatted2) {
                        if (null != type.attributes.rel) {
                          str12 = str59.toLowerCase();
                        }
                      }
                    }
                  }
                }
              }
            }
            return true;
          }
          if ("meta" === type.tagName) {
            if (slimDOMOptions.headMetaDescKeywords) {
              let str16 = "";
              if (null != type.attributes.name) {
                str16 = str15.toLowerCase();
              }
              if (str16.match(/^description|keywords$/)) {
                return true;
              }
            }
            if (slimDOMOptions.headMetaSocial) {
              let str18 = "";
              let str19 = "";
              if (null != type.attributes.property) {
                str19 = str17.toLowerCase();
              }
              if (!str19.match(/^(og|twitter|fb):/)) {
                let str21 = str18;
                if (null != type.attributes.name) {
                  str21 = str20.toLowerCase();
                }
                if (!str21.match(/^(og|twitter):/)) {
                  if (null != type.attributes.name) {
                    str18 = str22.toLowerCase();
                  }
                }
              }
              return true;
            }
            if (slimDOMOptions.headMetaRobots) {
              let str25 = "";
              let str26 = "";
              if (null != type.attributes.name) {
                str26 = str24.toLowerCase();
              }
              if ("robots" !== str26) {
                let formatted3 = str25;
                if (null != type.attributes.name) {
                  formatted3 = str60.toLowerCase();
                }
                if ("googlebot" !== formatted3) {
                  if (null != type.attributes.name) {
                    str25 = str61.toLowerCase();
                  }
                }
              }
              return true;
            }
            if (slimDOMOptions.headMetaHttpEquiv) {
              if (undefined !== type.attributes["http-equiv"]) {
                return true;
              }
            }
            if (slimDOMOptions.headMetaAuthorship) {
              let str31 = "";
              let str32 = "";
              if (null != type.attributes.name) {
                str32 = str30.toLowerCase();
              }
              if ("author" !== str32) {
                let formatted4 = str31;
                if (null != type.attributes.name) {
                  formatted4 = str62.toLowerCase();
                }
                if ("generator" !== formatted4) {
                  let formatted5 = str31;
                  if (null != type.attributes.name) {
                    formatted5 = str63.toLowerCase();
                  }
                  if ("framework" !== formatted5) {
                    let formatted6 = str31;
                    if (null != type.attributes.name) {
                      formatted6 = str64.toLowerCase();
                    }
                    if ("publisher" !== formatted6) {
                      let formatted7 = str31;
                      if (null != type.attributes.name) {
                        formatted7 = str65.toLowerCase();
                      }
                      if ("progid" !== formatted7) {
                        let str38 = str31;
                        if (null != type.attributes.property) {
                          str38 = str66.toLowerCase();
                        }
                        if (!str38.match(/^article:/)) {
                          if (null != type.attributes.property) {
                            str31 = str39.toLowerCase();
                          }
                        }
                      }
                    }
                  }
                }
              }
              return true;
            }
            if (slimDOMOptions.headMetaVerification) {
              let str41 = "";
              let str42 = "";
              if (null != type.attributes.name) {
                str42 = str40.toLowerCase();
              }
              if ("google-site-verification" !== str42) {
                let formatted8 = str41;
                if (null != type.attributes.name) {
                  formatted8 = str67.toLowerCase();
                }
                if ("yandex-verification" !== formatted8) {
                  let formatted9 = str41;
                  if (null != type.attributes.name) {
                    formatted9 = str68.toLowerCase();
                  }
                  if ("csrf-token" !== formatted9) {
                    let formatted10 = str41;
                    if (null != type.attributes.name) {
                      formatted10 = str69.toLowerCase();
                    }
                    if ("p:domain_verify" !== formatted10) {
                      let formatted11 = str41;
                      if (null != type.attributes.name) {
                        formatted11 = str47.toLowerCase();
                      }
                      if ("verify-v1" !== formatted11) {
                        let formatted12 = str41;
                        if (null != type.attributes.name) {
                          formatted12 = str49.toLowerCase();
                        }
                        if ("verification" !== formatted12) {
                          if (null != type.attributes.name) {
                            str41 = str51.toLowerCase();
                          }
                        }
                      }
                    }
                  }
                }
              }
              return true;
            }
          }
        }
        return false;
      })(tmp8, slimDOMOptions)) {
        if (!flag) {
          if (tmp8.type === inlineImages.Text) {
            if (!tmp8.isStyle) {
              num4 = -2;
            }
          }
        }
        num4 = genId();
      }
    }
    const _Object = Object;
    obj = { id: num4 };
    const merged = Object.assign(tmp8, obj);
    mirror.add(iframeContentDocument, merged);
    if (-2 === num4) {
      return null;
    } else {
      if (onSerialize) {
        onSerialize(iframeContentDocument);
      }
      let tmp18 = !tmp3;
      let tmp20 = tmp18;
      if (merged.type === inlineImages.Element) {
        if (!tmp3) {
          tmp18 = !merged.needBlock;
        }
        const shadowRoot = iframeContentDocument.shadowRoot;
        let tmp21 = shadowRoot;
        if (shadowRoot) {
          tmp21 = onSerialize(shadowRoot);
        }
        tmp20 = tmp18;
        if (tmp21) {
          merged.isShadowHost = true;
          tmp20 = tmp18;
        }
      }
      if (merged.type === inlineImages.Document) {
        if (tmp20) {
          let tmp23 = slimDOMOptions.headWhitespace && merged.type === tmp19.Element;
          if (tmp23) {
            tmp23 = "head" === merged.tagName;
          }
          if (tmp23) {
            c28 = false;
            flag = false;
          }
          obj = { doc, mirror, blockClass, blockSelector, maskAllText, unblockSelector, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, skipChild: tmp3, inlineStylesheet: tmp4, maskInputOptions, maskAttributeFn, maskTextFn, maskInputFn, slimDOMOptions, dataURLOptions, inlineImages: tmp5, recordCanvas: tmp6, preserveWhiteSpace: flag, onSerialize, onIframeLoad, iframeLoadTimeout: num2, onBlockedImageLoad, onStylesheetLoad, stylesheetLoadTimeout: num, keepIframeSrcFn, ignoreCSSAttributes };
          if (iframeContentDocument.childNodes) {
            const _Array = Array;
            let items = Array.from(iframeContentDocument.childNodes);
          } else {
            items = [];
          }
          items[Symbol.iterator]();
        }
      }
      while (true) {
        let parentNode = iframeContentDocument.parentNode;
        if (!parentNode) {
          break;
        } else {
          parentNode = isShadowRoot(iframeContentDocument.parentNode);
          break;
        }
        if (parentNode) {
          parentNode = onSerialize(iframeContentDocument.parentNode);
        }
        if (parentNode) {
          let flag4 = true;
          merged.isShadow = true;
        }
        let tmp28 = inlineImages;
        let needBlock = merged.type !== inlineImages.Element;
        if (!needBlock) {
          let str5 = "iframe";
          needBlock = "iframe" !== merged.tagName;
        }
        if (!needBlock) {
          needBlock = merged.needBlock;
        }
        if (!needBlock) {
          let tmp29 = (function onceIframeLoaded(contentWindow, arg1, iframeLoadTimeout) {
            closure_0 = arg1;
            contentWindow = contentWindow.contentWindow;
            if (contentWindow) {
              c1 = false;
              try {
                const readyState = contentWindow.document.readyState;
                if ("complete" === readyState) {
                  if (contentWindow.location.href === "about:blank") {
                    if (contentWindow.src !== "about:blank") {
                      if ("" !== contentWindow.src) {
                        const listener = contentWindow.addEventListener("load", arg1);
                      }
                    }
                  }
                  closure_34(arg1, 0);
                  return contentWindow.addEventListener("load", arg1);
                } else {
                  closure_2 = closure_34(() => {
                    if (!c1) {
                      closure_0();
                      c1 = true;
                    }
                  }, iframeLoadTimeout);
                  const listener1 = contentWindow.addEventListener("load", () => {
                    clearTimeout$1(closure_2);
                    c1 = true;
                    closure_0();
                  });
                }
              } catch (err) {
                return tmp;
              }
            }
          })(iframeContentDocument, () => {
            const tmp2 = getIframeContentDocument(closure_0);
            if (tmp2) {
              if (onIframeLoad) {
                obj = { doc: tmp2, mirror, blockClass, blockSelector, unblockSelector, maskAllText, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, skipChild: false, inlineStylesheet, maskInputOptions, maskAttributeFn, maskTextFn, maskInputFn, slimDOMOptions, dataURLOptions, inlineImages, recordCanvas, preserveWhiteSpace, onSerialize, onIframeLoad, iframeLoadTimeout: num2, onStylesheetLoad, stylesheetLoadTimeout: num, keepIframeSrcFn, ignoreCSSAttributes };
                const tmp30 = serializeNodeWithId(tmp2, obj);
                if (tmp30) {
                  onIframeLoad(closure_0, tmp30);
                }
              }
            }
          }, num2);
        }
        if (merged.type === tmp28.Element) {
          let str6 = "img";
          if ("img" === merged.tagName) {
            if (!iframeContentDocument.complete) {
              if (merged.needBlock) {
                function updateImageDimensions() {
                  if (iframeContentDocument.isConnected) {
                    if (!iframeContentDocument.complete) {
                      if (onBlockedImageLoad) {
                        try {
                          const boundingClientRect = iframeContentDocument.getBoundingClientRect();
                          let tmp4 = boundingClientRect.width > 0;
                          if (tmp4) {
                            tmp4 = tmp3.height > 0;
                          }
                          if (tmp4) {
                            tmp(iframeContentDocument, merged, boundingClientRect);
                          }
                        } catch (err) {
                        }
                      }
                    }
                  }
                  const removed = iframeContentDocument.removeEventListener("load", updateImageDimensions);
                }
                if (iframeContentDocument.isConnected) {
                  let str7 = "load";
                  let listener = iframeContentDocument.addEventListener("load", updateImageDimensions);
                }
              }
            }
          }
        }
        let tmp31 = merged.type === tmp28.Element;
        if (tmp31) {
          let str8 = "link";
          tmp31 = "link" === merged.tagName;
        }
        if (tmp31) {
          tmp31 = typeof merged.attributes.rel === "string";
        }
        if (tmp31) {
          let str9 = "stylesheet";
          let tmp32 = "stylesheet" === merged.attributes.rel;
          if (!tmp32) {
            let str10 = "preload";
            let tmp33 = "preload" === merged.attributes.rel && typeof merged.attributes.href === "string";
            if (tmp33) {
              let str11 = "css";
              tmp33 = "css" === updateImageDimensions(merged.attributes.href);
            }
            tmp32 = tmp33;
          }
          tmp31 = tmp32;
        }
        if (tmp31) {
          let tmp35 = (function onceStylesheetLoaded(sheet, arg1, stylesheetLoadTimeout) {
            closure_0 = arg1;
            c1 = false;
            try {
              if (!sheet.sheet) {
                closure_2 = closure_34(() => {
                  if (!c1) {
                    closure_0();
                    c1 = true;
                  }
                }, stylesheetLoadTimeout);
                const listener = sheet.addEventListener("load", () => {
                  clearTimeout$1(closure_2);
                  c1 = true;
                  closure_0();
                });
              }
            } catch (err) {
              return tmp;
            }
          })(iframeContentDocument, () => {
            if (onStylesheetLoad) {
              obj = { doc, mirror, blockClass, blockSelector, unblockSelector, maskAllText, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, skipChild: false, inlineStylesheet, maskInputOptions, maskAttributeFn, maskTextFn, maskInputFn, slimDOMOptions, dataURLOptions, inlineImages, recordCanvas, preserveWhiteSpace, onSerialize, onIframeLoad, iframeLoadTimeout: num2, onStylesheetLoad, stylesheetLoadTimeout: num, keepIframeSrcFn, ignoreCSSAttributes };
              const tmp30 = serializeNodeWithId(closure_0, obj);
              if (tmp30) {
                onStylesheetLoad(closure_0, tmp30);
              }
            }
          }, num);
        }
        if (merged.type === tmp28.Element) {
          let str12 = "needBlock";
          delete tmp[tmp2];
        }
        return merged;
      }
    }
  } else {
    const _console = console;
    console.warn(iframeContentDocument, "not serialized");
    return null;
  }
  const tmp7 = undefined !== newlyAddedElement && newlyAddedElement;
}
function on(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  let _document = arg2;
  if (arg2 === undefined) {
    _document = document;
  }
  obj = { capture: true, passive: true };
  const listener = _document.addEventListener(arg0, arg1, obj);
  return () => document.removeEventListener(selectionchange, fn, obj);
}
function patch(arg0, arg1, fn) {
  closure_0 = arg0;
  closure_1 = arg1;
  try {
    if (arg1 in arg0) {
      closure_2 = tmp2;
      const tmp4 = fn(arg0[arg1]);
      if (typeof tmp4 === "function") {
        let prototype = tmp5.prototype;
        if (!prototype) {
          prototype = {};
        }
        tmp5.prototype = prototype;
        const _Object = Object;
        __rrweb_original__ = { __rrweb_original__: null };
        __rrweb_original__ = { enumerable: false, value: tmp2 };
        __rrweb_original__.__rrweb_original__ = __rrweb_original__;
        Object.defineProperties(tmp5, __rrweb_original__);
      }
      arg0[arg1] = tmp4;
      return () => {
        closure_0[closure_1] = closure_2;
      };
    } else {
      return () => {

      };
    }
  } catch (err) {
    return () => {

    };
  }
}
function getWindowScroll(defaultView) {
  const _document = defaultView.document;
  if (_document.scrollingElement) {
    let num = _document.scrollingElement.scrollLeft;
  } else if (undefined !== defaultView.pageXOffset) {
    num = defaultView.pageXOffset;
  } else {
    num = undefined;
    if (_document != null) {
      num = _document.documentElement.scrollLeft;
    }
    if (!num) {
      let scrollLeft;
      if (_document != null) {
        const body = _document.body;
        if (body != null) {
          const parentElement = body.parentElement;
          if (parentElement != null) {
            scrollLeft = parentElement.scrollLeft;
          }
        }
      }
      num = scrollLeft;
    }
    if (!num) {
      let scrollLeft1;
      if (_document != null) {
        const body2 = _document.body;
        if (body2 != null) {
          scrollLeft1 = body2.scrollLeft;
        }
      }
      num = scrollLeft1;
    }
    if (!num) {
      num = 0;
    }
  }
  const rect = { left: num, top: null };
  if (_document.scrollingElement) {
    let num2 = _document.scrollingElement.scrollTop;
  } else if (undefined !== defaultView.pageYOffset) {
    num2 = defaultView.pageYOffset;
  } else {
    num2 = undefined;
    if (_document != null) {
      num2 = _document.documentElement.scrollTop;
    }
    if (!num2) {
      let scrollTop;
      if (_document != null) {
        const body3 = _document.body;
        if (body3 != null) {
          const parentElement2 = body3.parentElement;
          if (parentElement2 != null) {
            scrollTop = parentElement2.scrollTop;
          }
        }
      }
      num2 = scrollTop;
    }
    if (!num2) {
      let scrollTop1;
      if (_document != null) {
        const body4 = _document.body;
        if (body4 != null) {
          scrollTop1 = body4.scrollTop;
        }
      }
      num2 = scrollTop1;
    }
    if (!num2) {
      num2 = 0;
    }
  }
  rect.top = num2;
  return rect;
}
function closestElementOfNode$1(nodeType) {
  if (nodeType) {
    try {
      let parentElement = nodeType;
      if (nodeType.nodeType !== nodeType.ELEMENT_NODE) {
        parentElement = nodeType.parentElement;
      }
      return parentElement;
    } catch (err) {
      return null;
    }
  } else {
    return null;
  }
}
function isBlocked(nodeType, arg1, arg2, arg3, arg4) {
  if (nodeType) {
    obj = closestElementOfNode$1(nodeType);
    if (obj) {
      c0 = arg1;
      closure_1 = arg2;
      const fn = (parentNode) => {
        if (null === parentNode) {
          return false;
        } else {
          try {
            if (c0) {
              if (typeof c0 === "string") {
                const _HermesInternal = HermesInternal;
                if (parentNode.matches("." + c0)) {
                  return true;
                }
              } else if ((function elementClassMatchesRegex(classList, test) {
                let diff = tmp - 1;
                if (+classList.classList.length) {
                  while (!test.test(classList.classList[diff])) {
                    let tmp4 = +diff;
                    diff = tmp4 - 1;
                  }
                  return true;
                }
                return false;
              })(parentNode, c0)) {
                return true;
              }
            }
            let tmp4 = !closure_1;
            if (closure_1) {
              tmp4 = !parentNode.matches(tmp3);
            }
            return !tmp4;
          } catch (err) {
            return false;
          }
        }
      };
      if (arg4) {
        let num2 = -1;
        if (obj) {
          let num3 = -1;
          if (obj.nodeType === obj.ELEMENT_NODE) {
            let num4 = 0;
            if (!fn(obj)) {
              const parentNode = obj.parentNode;
              let num5 = -1;
              if (parentNode) {
                let num6 = -1;
                if (parentNode.nodeType === parentNode.ELEMENT_NODE) {
                  num6 = -1;
                  if (Infinity >= 1) {
                    let num9 = 1;
                    if (!fn(parentNode)) {
                      num9 = distanceToMatch(parentNode.parentNode, fn, Infinity, 2);
                    }
                    num6 = num9;
                  }
                }
                num5 = num6;
              }
              num4 = num5;
            }
            num3 = num4;
          }
          num2 = num3;
        }
        let tmp10 = num2 >= 0;
        if (tmp10) {
          let num12 = -1;
          if (arg3) {
            c0 = null;
            closure_1 = arg3;
            let num13 = -1;
            if (obj) {
              let num14 = -1;
              if (obj.nodeType === obj.ELEMENT_NODE) {
                const fn2 = (parentNode) => {
                  if (null === parentNode) {
                    return false;
                  } else {
                    try {
                      if (c0) {
                        if (typeof c0 === "string") {
                          const _HermesInternal = HermesInternal;
                          if (parentNode.matches("." + c0)) {
                            return true;
                          }
                        } else if ((function elementClassMatchesRegex(classList, test) {
                          let diff = tmp - 1;
                          if (+classList.classList.length) {
                            while (!test.test(classList.classList[diff])) {
                              let tmp4 = +diff;
                              diff = tmp4 - 1;
                            }
                            return true;
                          }
                          return false;
                        })(parentNode, c0)) {
                          return true;
                        }
                      }
                      let tmp4 = !closure_1;
                      if (closure_1) {
                        tmp4 = !parentNode.matches(tmp3);
                      }
                      return !tmp4;
                    } catch (err) {
                      return false;
                    }
                  }
                };
                let num15 = 0;
                if (!fn2(obj)) {
                  const parentNode2 = obj.parentNode;
                  let num16 = -1;
                  if (parentNode2) {
                    let num17 = -1;
                    if (parentNode2.nodeType === parentNode2.ELEMENT_NODE) {
                      num17 = -1;
                      if (Infinity >= 1) {
                        let num20 = 1;
                        if (!fn2(parentNode2)) {
                          num20 = distanceToMatch(parentNode2.parentNode, fn2, Infinity, 2);
                        }
                        num17 = num20;
                      }
                    }
                    num16 = num17;
                  }
                  num15 = num16;
                }
                num14 = num15;
              }
              num13 = num14;
            }
            num12 = num13;
          }
          tmp10 = num2 > -1 && num12 < 0 || num2 < num12;
          const tmp14 = num2 > -1 && num12 < 0 || num2 < num12;
        }
        return tmp10;
      } else {
        let matchesResult = arg3;
        if (arg3) {
          matchesResult = obj.matches(arg3);
        }
        return fn(obj) && !matchesResult;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function isIgnored(arg0, getId) {
  return -2 === getId.getId(arg0);
}
function isAncestorRemoved(parentNode, has) {
  let host;
  if (parentNode != null) {
    host = parentNode.host;
  }
  let shadowRoot;
  if (host != null) {
    shadowRoot = host.shadowRoot;
  }
  if (Boolean(shadowRoot === parentNode)) {
    return false;
  } else {
    const hasItem = has.has(has.getId(parentNode));
    let tmp5 = !hasItem;
    if (hasItem) {
      parentNode = parentNode.parentNode;
      let tmp6 = !parentNode;
      if (parentNode) {
        tmp6 = parentNode.parentNode.nodeType !== parentNode.DOCUMENT_NODE;
      }
      if (tmp6) {
        const parentNode2 = parentNode.parentNode;
        let tmp7 = !parentNode2;
        if (parentNode2) {
          tmp7 = isAncestorRemoved(parentNode.parentNode, has);
        }
        tmp6 = tmp7;
      }
      tmp5 = tmp6;
    }
    return tmp5;
  }
}
function inDom(ownerDocument) {
  let host1;
  obj = ownerDocument;
  ownerDocument = ownerDocument.ownerDocument;
  let tmp = ownerDocument;
  if (tmp) {
    let hasItem = ownerDocument.contains(obj);
    if (!hasItem) {
      const ownerDocument2 = obj.ownerDocument;
      let flag = false;
      if (ownerDocument2) {
        const getRootNode = obj.getRootNode;
        let nodeType;
        if (getRootNode != null) {
          const rootNode = getRootNode();
          if (rootNode != null) {
            nodeType = rootNode.nodeType;
          }
        }
        let host = null;
        if (tmp7) {
          host = obj.getRootNode().host;
        }
        if (host) {
          do {
            let getRootNode2 = host.getRootNode;
            let nodeType1;
            let tmp9 = host;
            if (getRootNode2 != null) {
              let rootNode2 = getRootNode2();
              if (rootNode2 != null) {
                nodeType1 = rootNode2.nodeType;
              }
            }
            let tmp12 = nodeType1 === globalThis.Node.DOCUMENT_FRAGMENT_NODE && host.getRootNode().host;
            host1 = null;
            if (tmp12) {
              host1 = host.getRootNode().host;
            }
            host = host1;
            obj = tmp9;
          } while (host1);
        }
        flag = ownerDocument2.contains(obj);
        tmp7 = nodeType === globalThis.Node.DOCUMENT_FRAGMENT_NODE && obj.getRootNode().host;
      }
      hasItem = flag;
    }
    tmp = hasItem;
  }
  return tmp;
}
function getImplementation(arg0) {
  if (closure_70[arg0]) {
    return tmp2;
  } else {
    const _window = window;
    const _document = window.document;
    const _window2 = window;
    obj = window[arg0];
    if (_document) {
      if (typeof _document.createElement === "function") {
        try {
          const element = <iframe />;
          element.hidden = true;
          const head = _document.head;
          head.appendChild(element);
          const contentWindow = element.contentWindow;
          if (contentWindow) {
            obj = tmp7[arg0];
          }
          const head2 = _document.head;
          head2.removeChild(element);
        } catch (err) {
        }
      }
    }
    const _window3 = window;
    const bindResult = obj.bind(window);
    tmp[arg0] = bindResult;
    return bindResult;
  }
}
function setTimeout$1() {
  const items = [...arguments];
  return getImplementation("setTimeout")(...items);
}
function getIFrameContentDocument(contentDocument) {
  try {
    return contentDocument.contentDocument;
  } catch (err) {
  }
}
function isParentRemoved(arr, parentNode, getId) {
  if (0 === arr.length) {
    return tmp;
  } else {
    parentNode = parentNode.parentNode;
    let flag = false;
    if (parentNode) {
      while (true) {
        let id = getId.getId(parentNode);
        if (arr.some((id) => id.id === closure_0)) {
          obj = { v: true };
          let parentNode2 = parentNode;
        } else {
          parentNode2 = parentNode.parentNode;
        }
        if (obj) {
          break;
        } else {
          flag = false;
          parentNode = parentNode2;
        }
      }
    }
    flag = obj.v;
  }
}
function isAncestorInSet(size, parentNode) {
  let tmp = 0 !== size.size;
  if (tmp) {
    parentNode = parentNode.parentNode;
    let tmp3 = parentNode;
    if (tmp3) {
      let hasItem = size.has(parentNode);
      if (!hasItem) {
        const parentNode2 = parentNode.parentNode;
        let tmp5 = parentNode2;
        if (tmp5) {
          let hasItem1 = size.has(parentNode2);
          if (!hasItem1) {
            hasItem1 = _isAncestorInSet(size, parentNode2);
          }
          tmp5 = hasItem1;
        }
        hasItem = tmp5;
      }
      tmp3 = hasItem;
    }
    tmp = tmp3;
  }
  return tmp;
}
function _isAncestorInSet(has, parentNode) {
  parentNode = parentNode.parentNode;
  let tmp = parentNode;
  if (tmp) {
    let hasItem = has.has(parentNode);
    if (!hasItem) {
      hasItem = _isAncestorInSet(has, parentNode);
    }
    tmp = hasItem;
  }
  return tmp;
}
function getEventTarget(composedPath) {
  try {
    if ("composedPath" in composedPath) {
      const composedPathResult = composedPath.composedPath();
      if (composedPathResult.length) {
        return composedPathResult[0];
      }
    } else if ("path" in composedPath) {
      if (composedPath.path.length) {
        return composedPath.path[0];
      }
    }
    let target = composedPath;
    if (composedPath) {
      target = composedPath.target;
    }
    return target;
  } catch (err) {
  }
}
function initMutationObserver(doc, doc) {
  let fn = doc;
  obj = new closure_82();
  closure_87.push(obj);
  obj.init(doc);
  let __rrMutationObserver = window.MutationObserver;
  if (!__rrMutationObserver) {
    const _window = window;
    __rrMutationObserver = window.__rrMutationObserver;
  }
  let __symbol__Result;
  if (window != null) {
    if (Zone != null) {
      const __symbol__ = Zone.__symbol__;
      if (__symbol__ != null) {
        __symbol__Result = __symbol__("MutationObserver");
      }
    }
  }
  let tmp4 = __symbol__Result;
  if (__symbol__Result) {
    const _window2 = window;
    tmp4 = window[__symbol__Result];
  }
  if (tmp4) {
    const _window3 = window;
    __rrMutationObserver = window[__symbol__Result];
  }
  if (typeof callbackWrapper === "function") {
    fn = (arg0) => {
      let onMutation = fn.onMutation;
      if (onMutation) {
        onMutation = false === fn.onMutation(arg0);
      }
      if (!onMutation) {
        const processMutations = fn.processMutations;
        processMutations.bind(fn)(arg0);
      }
    };
    if (closure_79) {
      fn = () => {
        items = [...arguments];
        try {
          const items1 = [];
          HermesBuiltin.arraySpread(items, 0);
          return HermesBuiltin.apply(items1, undefined);
        } catch (tmp7) {
          if (closure_2_79) {
            if (true === tmp8(tmp7)) {
              return () => {

              };
            }
          }
          throw tmp7;
        }
      };
    }
    __rrMutationObserver = new __rrMutationObserver(fn);
    __rrMutationObserver.observe(doc, { attributes: true, attributeOldValue: true, characterData: true, characterDataOldValue: true, childList: true, subtree: true });
    return __rrMutationObserver;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function initMouseInteractionObserver(doc) {
  ({ mouseInteractionCb: require, doc: dependencyMap, mirror: asyncGeneratorStep, blockClass: closure_3, blockSelector: _getPrototypeOf, unblockSelector: _inherits, sampling } = doc);
  let mouseInteraction;
  closure_7 = undefined;
  c8 = undefined;
  if (false === sampling.mouseInteraction) {
    return () => {

    };
  } else {
    if (true !== sampling.mouseInteraction) {
      if (undefined !== sampling.mouseInteraction) {
        mouseInteraction = sampling.mouseInteraction;
      }
      closure_7 = [];
      c8 = null;
      const _Object = Object;
      const keys = Object.keys(obj3);
      const found = keys.filter((item) => {
        let isNaNResult = Number.isNaN(Number(item));
        if (isNaNResult) {
          isNaNResult = !item.endsWith("_Departed");
        }
        if (isNaNResult) {
          isNaNResult = false !== mouseInteraction[item];
        }
        return isNaNResult;
      });
      let item = found.forEach((item) => {
        const str = item.toLowerCase();
        let replaced = str;
        if (window.PointerEvent) {
          if (MouseDown.MouseDown !== MouseDown[item]) {
            if (MouseDown.MouseUp !== tmp3) {
              if (MouseDown.TouchStart !== tmp3) {
                replaced = str;
              }
            }
          }
          replaced = str.replace("mouse", "pointer");
        }
        let fn = (event) => {
          if (!isBlocked(tmp, closure_2_3, _getPrototypeOf, _inherits, true)) {
            if ("pointerType" in event) {
              const pointerType = event.pointerType;
              if ("mouse" === pointerType) {
                let Mouse = obj4.Mouse;
              } else if ("touch" === pointerType) {
                Mouse = obj4.Touch;
              } else {
                Mouse = null;
                if ("pen" === pointerType) {
                  Mouse = obj4.Pen;
                }
              }
              if (Mouse === obj4.Touch) {
                let str2 = "TouchStart";
                let Touch = Mouse;
                if (obj3[replaced] !== obj3.MouseDown) {
                  str2 = replaced;
                  Touch = Mouse;
                  if (obj3[replaced] === obj3.MouseUp) {
                    str2 = "TouchEnd";
                    Touch = Mouse;
                  }
                }
              } else {
                const Pen = tmp10.Pen;
                str2 = replaced;
                Touch = Mouse;
              }
            } else {
              const _Boolean = Boolean;
              str2 = replaced;
              Touch = null;
              if (Boolean(event.changedTouches)) {
                Touch = obj4.Touch;
                str2 = replaced;
              }
            }
            if (null !== Touch) {
              c8 = Touch;
              let startsWithResult = str2.startsWith("Touch");
              if (startsWithResult) {
                startsWithResult = Touch === obj4.Touch;
              }
              if (!startsWithResult) {
                let startsWithResult1 = str2.startsWith("Mouse");
                if (startsWithResult1) {
                  startsWithResult1 = Touch === obj4.Mouse;
                }
                startsWithResult = startsWithResult1;
              }
              let tmp14 = Touch;
              if (startsWithResult) {
                tmp14 = null;
              }
            } else {
              tmp14 = Touch;
              if (obj3[replaced] === obj3.Click) {
                tmp14 = c8;
                c8 = null;
              }
            }
            const _Boolean2 = Boolean;
            let first = event;
            if (Boolean(event.changedTouches)) {
              first = event.changedTouches[0];
            }
            if (first) {
              fn = _require;
              if (typeof callbackWrapper === "function") {
                if (closure_3_79) {
                  fn = () => {
                    items = [...arguments];
                    try {
                      const items1 = [];
                      HermesBuiltin.arraySpread(items, 0);
                      return HermesBuiltin.apply(items1, undefined);
                    } catch (tmp7) {
                      if (closure_2_79) {
                        if (true === tmp8(tmp7)) {
                          return () => {

                          };
                        }
                      }
                      throw tmp7;
                    }
                  };
                }
                const point = { type: obj3[str2], id: tmp22, x: tmp23, y: tmp24 };
                let tmp28 = null !== tmp14;
                if (tmp28) {
                  obj = { pointerType: tmp14 };
                  tmp28 = obj;
                }
                const merged = Object.assign(tmp28);
                fn(point);
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
          tmp = getEventTarget(event);
        };
        let _document;
        if (fn === undefined) {
          _document = document;
        }
        const listener = _document.addEventListener(replaced, fn, { capture: true, passive: true });
        closure_7.push(() => document.removeEventListener(selectionchange, fn, obj));
        obj = { capture: true, passive: true };
      });
      if (typeof callbackWrapper === "function") {
        let fn = () => {
          const item = closure_7.forEach((fn) => fn());
        };
        closure_129_0 = fn;
        if (closure_79) {
          fn = () => {
            items = [...arguments];
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              return HermesBuiltin.apply(items1, undefined);
            } catch (tmp7) {
              if (closure_2_79) {
                if (true === tmp8(tmp7)) {
                  return () => {

                  };
                }
              }
              throw tmp7;
            }
          };
        }
        return fn;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    mouseInteraction = {};
  }
}
function initScrollObserver(doc) {
  ({ scrollCb: scroll, doc } = doc);
  let fn2 = doc;
  ({ mirror: doc, blockClass: obj, blockSelector: _getPrototypeOf, unblockSelector: _inherits } = doc);
  if (typeof callbackWrapper === "function") {
    let fn = (arg0) => {
      const tmp = getEventTarget(arg0);
      if (tmp) {
        if (!isBlocked(tmp, obj, _getPrototypeOf, _inherits, true)) {
          const id = doc.getId(tmp);
          if (tmp === fn2) {
            if (fn2.defaultView) {
              const point = { id, x: null, y: null };
              ({ left: obj2.x, top: obj2.y } = getWindowScroll(fn2.defaultView));
              scroll(point);
              const tmp13 = getWindowScroll(fn2.defaultView);
            }
          }
          const point1 = { id, x: null, y: null };
          ({ scrollLeft: obj.x, scrollTop: obj.y } = tmp);
          scroll(point1);
        }
      }
    };
    closure_129_0 = fn;
    if (closure_79) {
      fn = () => {
        items = [...arguments];
        try {
          const items1 = [];
          HermesBuiltin.arraySpread(items, 0);
          return HermesBuiltin.apply(items1, undefined);
        } catch (tmp7) {
          if (closure_2_79) {
            if (true === tmp8(tmp7)) {
              return () => {

              };
            }
          }
          throw tmp7;
        }
      };
    }
    closure_130_0 = fn;
    closure_130_1 = tmp.scroll || 100;
    closure_130_2 = {};
    closure_130_3 = null;
    closure_130_4 = 0;
    if (typeof tmp2 === "function") {
      fn2 = function() {
        items = [...arguments];
        let self;
        const timestamp = Date.now();
        const diff = self - (timestamp - timestamp);
        self = this;
        if (diff > 0) {
          if (diff <= self) {
            let tmp5 = c3;
            if (!c3) {
              tmp5 = false === leading.trailing;
            }
            if (!tmp5) {
              c3 = closure_1_72(() => {
                if (false !== leading.leading) {
                  const _Date = Date;
                  num = Date.now();
                }
                c3 = null;
                fn.apply(self, items);
              }, diff);
            }
          }
        }
        if (c3) {
          !(function clearTimeout$2() {
            items = [...arguments];
            return closure_1_71("clearTimeout")(...items);
          })(tmp8);
          c3 = null;
        }
        items.apply(this, items);
      };
      closure_131_0 = fn2;
      if (closure_79) {
        fn2 = () => {
          items = [...arguments];
          try {
            const items1 = [];
            HermesBuiltin.arraySpread(items, 0);
            return HermesBuiltin.apply(items1, undefined);
          } catch (tmp7) {
            if (closure_2_79) {
              if (true === tmp8(tmp7)) {
                return () => {

                };
              }
            }
            throw tmp7;
          }
        };
      }
      scroll = "scroll";
      if (doc === undefined) {
        doc = document;
      }
      const listener = doc.addEventListener("scroll", fn2, { capture: true, passive: true });
      return () => document.removeEventListener(selectionchange, fn, obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    const tmp4 = tmp.scroll || 100;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function initInputObserver(sampling) {
  ({ inputCb: require, doc } = sampling);
  ({ mirror: asyncGeneratorStep, blockClass: closure_3, blockSelector: _getPrototypeOf, unblockSelector: _inherits, ignoreClass: _slicedToArray, ignoreSelector: _classCallCheck, maskInputOptions: _createClass, maskInputFn: _isNativeReflectConstruct, userTriggeredOnInput: sentryReplaySession, maskTextClass: c11, unmaskTextClass: c12, maskTextSelector: c13, unmaskTextSelector: c14 } = sampling);
  function eventHandler(isTrusted) {
    const tmp = getEventTarget(isTrusted);
    let fn = tmp;
    let formatted = tmp;
    if (tmp) {
      formatted = tmp.tagName.toUpperCase();
    }
    let iter = tmp;
    if ("OPTION" === formatted) {
      const parentElement = tmp.parentElement;
      fn = parentElement;
      iter = parentElement;
    }
    if (iter) {
      if (formatted) {
        if (closure_1_92.indexOf(formatted) >= 0) {
          if (!isBlocked(iter, checked, closure_4, closure_5, true)) {
            const classList = iter.classList;
            if (!classList.contains(closure_6)) {
              if (!closure_7) {
                let str5 = "password";
                if (!iter.hasAttribute("data-rr-is-password")) {
                  let formatted1 = null;
                  if (str2) {
                    formatted1 = str2.toLowerCase();
                  }
                  str5 = formatted1;
                }
                if ("INPUT" === formatted) {
                  if ("radio" !== str5) {
                    checked = false;
                    let str11 = formatted;
                    if (tmp3) {
                      str11 = "SELECT";
                    }
                    let tmp10 = text[str11.toLowerCase(str11)];
                    if (!tmp10) {
                      let tmp11 = str5;
                      if (str5) {
                        tmp11 = text[str5];
                      }
                      tmp10 = tmp11;
                    }
                    if (!tmp10) {
                      tmp10 = "password" === str5;
                    }
                    if (!tmp10) {
                      tmp10 = "INPUT" === str11 && !str5 && text.text;
                      const tmp12 = "INPUT" === str11 && !str5 && text.text;
                    }
                    const tmp19 = needMaskingText(iter, closure_11, closure_13, closure_12, closure_14, Boolean(tmp10));
                    closure_4 = tmp19;
                    let tmp20 = "radio" !== str5;
                    if (tmp20) {
                      tmp20 = "checkbox" !== str5;
                    }
                    let flag2 = false;
                    if (!tmp20) {
                      checked = iter.checked;
                      flag2 = checked;
                    }
                    if (!str10) {
                      str10 = "";
                    }
                    let repeatResult = str10;
                    if (tmp19) {
                      let tmp21Result = str10;
                      if (closure_9) {
                        tmp21Result = closure_9(str10, iter);
                      }
                      let repeat = "*".repeat;
                      repeatResult = "*".repeat(tmp21Result.length);
                    }
                    if (closure_10) {
                      obj = { text: repeatResult, isChecked: flag2, userTriggered: isTrusted.isTrusted };
                    } else {
                      obj = { text: repeatResult, isChecked: flag2 };
                    }
                    value = weakMap1.get(iter);
                    if (value) {
                      const name = iter.name;
                      if (tmp34) {
                        const _HermesInternal = HermesInternal;
                        const elements = formatted.querySelectorAll("input[type=\"radio\"][name=\"" + name + "\"]");
                        const item = elements.forEach((getAttribute) => {
                          if (getAttribute !== fn) {
                            if ("INPUT" === formatted) {
                              if ("radio" !== tmp18) {
                                if (!str4) {
                                  str4 = "";
                                }
                                let repeatResult = str4;
                                if (tmp16) {
                                  let tmpResult = str4;
                                  if (_isNativeReflectConstruct) {
                                    tmpResult = _isNativeReflectConstruct(str4, getAttribute);
                                  }
                                  const repeat = "*".repeat;
                                  repeatResult = "*".repeat(tmpResult.length);
                                }
                                if (sentryReplaySession) {
                                  obj = { text: repeatResult, isChecked: !checked, userTriggered: false };
                                } else {
                                  obj = { text: repeatResult, isChecked: !checked };
                                }
                                value = closure_1_93.get(getAttribute);
                                const result = closure_1_93.set(getAttribute, obj);
                                fn = _require;
                                if (typeof closure_1_86 === "function") {
                                  if (closure_1_79) {
                                    fn = () => {
                                      items = [...arguments];
                                      try {
                                        const items1 = [];
                                        HermesBuiltin.arraySpread(items, 0);
                                        return HermesBuiltin.apply(items1, undefined);
                                      } catch (tmp7) {
                                        if (closure_2_79) {
                                          if (true === tmp8(tmp7)) {
                                            return () => {

                                            };
                                          }
                                        }
                                        throw tmp7;
                                      }
                                    };
                                  }
                                  obj = {};
                                  const merged = Object.assign(obj);
                                  obj.id = tmp9;
                                  fn(obj);
                                } else {
                                  throw new TypeError("Trying to call a non-function");
                                }
                              }
                              str4 = getAttribute.getAttribute("value") || "";
                            }
                            str4 = getAttribute.value;
                            tmp18 = str5;
                          }
                        });
                      }
                      tmp34 = "radio" === str5 && name && flag2;
                    }
                    let result = weakMap1.set(iter, obj);
                    if (typeof callbackWrapper === "function") {
                      if (closure_1_79) {
                        fn = () => {
                          items = [...arguments];
                          try {
                            const items1 = [];
                            HermesBuiltin.arraySpread(items, 0);
                            return HermesBuiltin.apply(items1, undefined);
                          } catch (tmp7) {
                            if (closure_2_79) {
                              if (true === tmp8(tmp7)) {
                                return () => {

                                };
                              }
                            }
                            throw tmp7;
                          }
                        };
                      }
                      obj = {};
                      let merged = Object.assign(obj);
                      obj.id = tmp27;
                      fn(obj);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                  str10 = iter.getAttribute("value") || "";
                }
                str10 = iter.value;
              }
            }
          }
        }
      }
    }
  }
  const mapped = "last" === sampling.sampling.input ? ["change"] : ["input", "change"].map((item) => {
    let fn = eventHandler;
    if (typeof callbackWrapper === "function") {
      closure_0 = fn;
      if (closure_2_79) {
        fn = () => {
          items = [...arguments];
          try {
            const items1 = [];
            HermesBuiltin.arraySpread(items, 0);
            return HermesBuiltin.apply(items1, undefined);
          } catch (tmp7) {
            if (closure_2_79) {
              if (true === tmp8(tmp7)) {
                return () => {

                };
              }
            }
            throw tmp7;
          }
        };
      }
      let _document = doc;
      closure_0 = item;
      if (doc === undefined) {
        _document = document;
      }
      const listener = _document.addEventListener(item, fn, { capture: true, passive: true });
      return () => document.removeEventListener(selectionchange, fn, obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
  const defaultView = doc.defaultView;
  if (defaultView) {
    let _Object = defaultView.Object;
    let ownPropertyDescriptor = _Object.getOwnPropertyDescriptor(defaultView.HTMLInputElement.prototype, "value");
    const items = [defaultView.HTMLInputElement.prototype, "value"];
    const items1 = [items, , , , , ];
    const items2 = [defaultView.HTMLInputElement.prototype, "checked"];
    items1[1] = items2;
    const items3 = [defaultView.HTMLSelectElement.prototype, "value"];
    items1[2] = items3;
    const items4 = [defaultView.HTMLTextAreaElement.prototype, "value"];
    items1[3] = items4;
    const items5 = [defaultView.HTMLSelectElement.prototype, "selectedIndex"];
    items1[4] = items5;
    const items6 = [defaultView.HTMLOptionElement.prototype, "selected"];
    items1[5] = items6;
    set = ownPropertyDescriptor;
    if (ownPropertyDescriptor) {
      set = ownPropertyDescriptor.set;
    }
    if (set) {
      const push = mapped.push;
      const items7 = [];
      HermesBuiltin.arraySpread(items1.map((item) => {
        [tmp, tmp2] = item;
        obj = {
          set() {
            let fn = eventHandler;
            if (typeof callbackWrapper === "function") {
              if (closure_2_79) {
                fn = () => {
                  items = [...arguments];
                  try {
                    const items1 = [];
                    HermesBuiltin.arraySpread(items, 0);
                    return HermesBuiltin.apply(items1, undefined);
                  } catch (tmp7) {
                    if (closure_2_79) {
                      if (true === tmp8(tmp7)) {
                        return () => {

                        };
                      }
                    }
                    throw tmp7;
                  }
                };
              }
              const self = this;
              obj = { target: this, isTrusted: false };
              fn(obj);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        };
        let _window = defaultView;
        closure_0 = tmp;
        doc = tmp2;
        if (defaultView === undefined) {
          _window = window;
        }
        let _Object = _window.Object;
        let ownPropertyDescriptor = _Object.getOwnPropertyDescriptor(tmp, tmp2);
        let _Object2 = _window.Object;
        obj = {
          set(arg0) {
            const self = this;
            closure_0 = arg0;
            closure_1_72(() => {
              const call = set.call;
              if (typeof call === "unknown") {
                const result = set(closure_0);
              } else {
                call(self, closure_0);
              }
            }, 0);
            if (set) {
              set = set.set;
            }
            if (set) {
              let call = set2.call;
              if (typeof call === "unknown") {
                set2(arg0);
              } else {
                call(self, arg0);
              }
            }
          }
        };
        _Object2.defineProperty(tmp, tmp2, obj);
        return () => {
          obj = ownPropertyDescriptor;
          if (!ownPropertyDescriptor) {
            obj = {};
          }
          closure_0 = tmp;
          closure_1 = tmp2;
          const _Object = window.Object;
          ownPropertyDescriptor = _Object.getOwnPropertyDescriptor(tmp, tmp2);
          const _Object2 = window.Object;
          _Object2.defineProperty(closure_0, closure_1, obj);
          return () => {
            obj = ownPropertyDescriptor;
            if (!ownPropertyDescriptor) {
              obj = {};
            }
            closure_0 = tmp;
            closure_1 = tmp2;
            const _Object = window.Object;
            ownPropertyDescriptor = _Object.getOwnPropertyDescriptor(tmp, tmp2);
            const _Object2 = window.Object;
            _Object2.defineProperty(closure_0, closure_1, obj);
            return () => {
              obj = ownPropertyDescriptor;
              if (!ownPropertyDescriptor) {
                obj = {};
              }
              closure_0 = tmp;
              closure_1 = tmp2;
              const _Object = window.Object;
              ownPropertyDescriptor = _Object.getOwnPropertyDescriptor(tmp, tmp2);
              const _Object2 = window.Object;
              _Object2.defineProperty(closure_0, closure_1, obj);
              return () => { ... };
            };
          };
        };
      }), 0);
      HermesBuiltin.apply(items7, mapped);
    }
    if (typeof callbackWrapper === "function") {
      let fn = () => {
        const item = mapped.forEach((fn) => fn());
      };
      closure_129_0 = fn;
      if (closure_79) {
        fn = () => {
          items = [...arguments];
          try {
            const items1 = [];
            HermesBuiltin.arraySpread(items, 0);
            return HermesBuiltin.apply(items1, undefined);
          } catch (tmp7) {
            if (closure_2_79) {
              if (true === tmp8(tmp7)) {
                return () => {

                };
              }
            }
            throw tmp7;
          }
        };
      }
      return fn;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    return () => {
      const item = mapped.forEach((fn) => fn());
    };
  }
  const arr = "last" === sampling.sampling.input ? ["change"] : ["input", "change"];
}
function getNestedCSSRulePositions(parentRule) {
  const items = [];
  if (undefined === window.CSSGroupingRule) {
    const _window = window;
    if (undefined === window.CSSMediaRule) {
      const _window2 = window;
      if (undefined === window.CSSSupportsRule) {
        const _window3 = window;
        if (undefined !== window.CSSConditionRule) {
          return items;
        }
        if (parentRule.parentStyleSheet) {
          const _Array = Array;
          let arr = Array.from(parentRule.parentStyleSheet.cssRules);
          arr = items.unshift(arr.indexOf(parentRule));
        }
      } else {
      }
    } else {
    }
  } else {
  }
  items.unshift(Array.from(parentRule.parentRule.cssRules).indexOf(parentRule));
}
function initAdoptedStyleSheetObserver(doc, doc) {
  ({ mirror, stylesheetManager: fn2 } = doc);
  closure_1 = doc;
  let ownPropertyDescriptor;
  let id = null;
  if ("#document" === doc.nodeName) {
    id = mirror.getId(doc);
  } else {
    id = mirror.getId(doc.host);
  }
  if ("#document" === doc.nodeName) {
    const defaultView2 = doc.defaultView;
    let Document;
    if (defaultView2 != null) {
      Document = defaultView2.Document;
    }
    let ShadowRoot = Document;
  } else {
    const ownerDocument = doc.ownerDocument;
    if (ownerDocument != null) {
      const defaultView = ownerDocument.defaultView;
      if (defaultView != null) {
        ShadowRoot = defaultView.ShadowRoot;
      }
    }
  }
  let prototype;
  if (ShadowRoot != null) {
    prototype = ShadowRoot.prototype;
  }
  ownPropertyDescriptor = undefined;
  if (prototype) {
    let prototype1;
    if (ShadowRoot != null) {
      prototype1 = ShadowRoot.prototype;
    }
    ownPropertyDescriptor = Object.getOwnPropertyDescriptor(prototype1, "adoptedStyleSheets");
  }
  if (null !== id) {
    if (-1 !== id) {
      if (ShadowRoot) {
        if (ownPropertyDescriptor) {
          const _Object = Object;
          obj = { configurable: null, enumerable: null, get: null, set: null };
          ({ configurable: obj.configurable, enumerable: obj.enumerable } = ownPropertyDescriptor);
          obj.get = function get() {
            const get = ownPropertyDescriptor.get;
            if (get != null) {
              const self = this;
              const call = get.call;
              typeof call === "unknown" ? get() : call(self);
            }
          };
          obj.set = function set(adoptedStyleSheets) {
            if (ownPropertyDescriptor.set == null) {
              if (null !== id) {
                if (-1 !== id) {
                  try {
                    fn2.adoptStyleSheets(adoptedStyleSheets, id);
                  } catch (err) {
                  }
                }
              }
            } else {
              const self = this;
              const call = set.call;
              typeof call === "unknown" ? set(adoptedStyleSheets) : call(self, adoptedStyleSheets);
            }
          };
          Object.defineProperty(doc, "adoptedStyleSheets", obj);
          if (typeof callbackWrapper === "function") {
            fn2 = () => {
              Object.defineProperty(closure_1, "adoptedStyleSheets", { configurable: ownPropertyDescriptor.configurable, enumerable: ownPropertyDescriptor.enumerable, get: ownPropertyDescriptor.get, set: ownPropertyDescriptor.set });
            };
            if (closure_79) {
              fn2 = () => {
                items = [...arguments];
                try {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items, 0);
                  return HermesBuiltin.apply(items1, undefined);
                } catch (tmp7) {
                  if (closure_2_79) {
                    if (true === tmp8(tmp7)) {
                      return () => {

                      };
                    }
                  }
                  throw tmp7;
                }
              };
            }
            let fn = fn2;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        return fn;
      }
    }
  }
  fn = () => {

  };
}
function initObservers(doc) {
  let defaultView = doc.doc.defaultView;
  if (defaultView) {
    if (doc.recordDOM) {
      closure_0 = initMutationObserver(doc, doc.doc);
    }
    closure_1 = (function initMoveObserver(doc) {
      ({ mousemoveCb: drag, sampling, doc, mirror: fn3 } = doc);
      closure_2 = undefined;
      closure_3 = undefined;
      let f71408;
      items = undefined;
      if (false === sampling.mousemove) {
        return () => {

        };
      } else {
        let num3 = 50;
        if (typeof sampling.mousemove === "number") {
          num3 = sampling.mousemove;
        }
        let num = 500;
        if (typeof sampling.mousemoveCallback === "number") {
          num = sampling.mousemoveCallback;
        }
        closure_3 = [];
        if (typeof closure_86 === "function") {
          let fn = (arg0) => {
            closure_0 = Date.now() - closure_2;
            drag(closure_3.map((timeOffset) => {
              timeOffset.timeOffset = timeOffset.timeOffset - closure_0;
              return timeOffset;
            }), arg0);
            closure_3 = [];
            closure_2 = null;
          };
          closure_129_0 = fn;
          if (closure_79) {
            fn = () => {
              items = [...arguments];
              try {
                const items1 = [];
                HermesBuiltin.arraySpread(items, 0);
                return HermesBuiltin.apply(items1, undefined);
              } catch (tmp7) {
                if (closure_2_79) {
                  if (true === tmp8(tmp7)) {
                    return () => {

                    };
                  }
                }
                throw tmp7;
              }
            };
          }
          closure_130_0 = fn;
          closure_130_1 = num;
          closure_130_2 = {};
          closure_130_3 = null;
          closure_130_4 = 0;
          f71408 = function() {
            items = [...arguments];
            let self;
            const timestamp = Date.now();
            const diff = self - (timestamp - timestamp);
            self = this;
            if (diff > 0) {
              if (diff <= self) {
                let tmp5 = c3;
                if (!c3) {
                  tmp5 = false === leading.trailing;
                }
                if (!tmp5) {
                  c3 = closure_1_72(() => {
                    if (false !== leading.leading) {
                      const _Date = Date;
                      num = Date.now();
                    }
                    c3 = null;
                    fn.apply(self, items);
                  }, diff);
                }
              }
            }
            if (c3) {
              !(function clearTimeout$2() {
                items = [...arguments];
                return closure_1_71("clearTimeout")(...items);
              })(tmp8);
              c3 = null;
            }
            items.apply(this, items);
          };
          if (typeof closure_86 === "function") {
            let fn2 = (changedTouches) => {
              let first = changedTouches;
              if (Boolean(changedTouches.changedTouches)) {
                first = changedTouches.changedTouches[0];
              }
              ({ clientX, clientY } = first);
              if (!closure_2) {
                closure_2 = closure_2_62();
              }
              const point = { x: clientX, y: clientY, id: fn3.getId(getEventTarget(changedTouches)), timeOffset: closure_2_62() - closure_2 };
              closure_3.push(point);
              if (typeof globalThis.DragEvent !== "undefined") {
                if (changedTouches instanceof globalThis.DragEvent) {
                  Drag = Drag.Drag;
                }
                tmp5(Drag);
              }
              Drag = changedTouches instanceof globalThis.MouseEvent ? tmp6.MouseMove : tmp6.TouchMove;
              const tmp = getEventTarget(changedTouches);
            };
            closure_131_0 = fn2;
            if (closure_79) {
              fn2 = () => {
                items = [...arguments];
                try {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items, 0);
                  return HermesBuiltin.apply(items1, undefined);
                } catch (tmp7) {
                  if (closure_2_79) {
                    if (true === tmp8(tmp7)) {
                      return () => {

                      };
                    }
                  }
                  throw tmp7;
                }
              };
            }
            closure_132_0 = fn2;
            closure_132_1 = num3;
            closure_132_2 = { trailing: false };
            closure_132_3 = null;
            closure_132_4 = 0;
            if (typeof closure_86 === "function") {
              fn3 = function() {
                items = [...arguments];
                let self;
                const timestamp = Date.now();
                const diff = self - (timestamp - timestamp);
                self = this;
                if (diff > 0) {
                  if (diff <= self) {
                    let tmp5 = c3;
                    if (!c3) {
                      tmp5 = false === leading.trailing;
                    }
                    if (!tmp5) {
                      c3 = closure_1_72(() => {
                        if (false !== leading.leading) {
                          const _Date = Date;
                          num = Date.now();
                        }
                        c3 = null;
                        fn.apply(self, items);
                      }, diff);
                    }
                  }
                }
                if (c3) {
                  !(function clearTimeout$2() {
                    items = [...arguments];
                    return closure_1_71("clearTimeout")(...items);
                  })(tmp8);
                  c3 = null;
                }
                items.apply(this, items);
              };
              closure_133_0 = fn3;
              if (closure_79) {
                fn3 = () => {
                  items = [...arguments];
                  try {
                    const items1 = [];
                    HermesBuiltin.arraySpread(items, 0);
                    return HermesBuiltin.apply(items1, undefined);
                  } catch (tmp7) {
                    if (closure_2_79) {
                      if (true === tmp8(tmp7)) {
                        return () => {

                        };
                      }
                    }
                    throw tmp7;
                  }
                };
              }
              drag = "mousemove";
              let _document = doc;
              if (doc === undefined) {
                _document = document;
              }
              obj = { capture: true, passive: true };
              closure_3 = obj;
              const listener = _document.addEventListener("mousemove", fn3, obj);
              items = [() => document.removeEventListener(selectionchange, fn, obj), , ];
              closure_2 = undefined;
              drag = "touchmove";
              let _document2 = doc;
              if (doc === undefined) {
                _document2 = document;
              }
              obj = { capture: true, passive: true };
              closure_3 = obj;
              const listener1 = _document2.addEventListener("touchmove", fn3, obj);
              items[1] = () => document.removeEventListener(selectionchange, fn, obj);
              closure_2 = undefined;
              drag = "drag";
              if (doc === undefined) {
                doc = document;
              }
              closure_2 = doc;
              obj = { capture: true, passive: true };
              closure_3 = obj;
              const listener2 = doc.addEventListener("drag", fn3, obj);
              items[2] = () => document.removeEventListener(selectionchange, fn, obj);
              if (typeof closure_86 === "function") {
                let fn4 = () => {
                  const item = items.forEach((fn) => fn());
                };
                closure_134_0 = fn4;
                if (closure_79) {
                  fn4 = () => {
                    items = [...arguments];
                    try {
                      const items1 = [];
                      HermesBuiltin.arraySpread(items, 0);
                      return HermesBuiltin.apply(items1, undefined);
                    } catch (tmp7) {
                      if (closure_2_79) {
                        if (true === tmp8(tmp7)) {
                          return () => {

                          };
                        }
                      }
                      throw tmp7;
                    }
                  };
                }
                return fn4;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    })(doc);
    closure_2 = initMouseInteractionObserver(doc);
    closure_3 = initScrollObserver(doc);
    obj = { win: defaultView };
    closure_4 = (function initViewportResizeObserver(viewportResizeCb, win) {
      let resize = viewportResizeCb.viewportResizeCb;
      let _document = win.win;
      let innerHeight = -1;
      let innerWidth = -1;
      if (typeof closure_86 === "function") {
        let fn = () => {
          innerHeight = window.innerHeight;
          if (!innerHeight) {
            const _document = document;
            let clientHeight = document.documentElement;
            if (clientHeight) {
              const _document2 = document;
              clientHeight = document.documentElement.clientHeight;
            }
            innerHeight = clientHeight;
          }
          if (!innerHeight) {
            const _document3 = document;
            let clientHeight2 = document.body;
            if (clientHeight2) {
              const _document4 = document;
              clientHeight2 = document.body.clientHeight;
            }
            innerHeight = clientHeight2;
          }
          innerWidth = window.innerWidth;
          if (!innerWidth) {
            const _document5 = document;
            let clientWidth = document.documentElement;
            if (clientWidth) {
              const _document6 = document;
              clientWidth = document.documentElement.clientWidth;
            }
            innerWidth = clientWidth;
          }
          if (!innerWidth) {
            const _document7 = document;
            let clientWidth2 = document.body;
            if (clientWidth2) {
              const _document8 = document;
              clientWidth2 = document.body.clientWidth;
            }
            innerWidth = clientWidth2;
          }
          let tmp = innerHeight === innerHeight;
          if (tmp) {
            tmp = innerWidth === innerWidth;
          }
          if (!tmp) {
            const size = { width: null, height: null };
            const _Number = Number;
            size.width = Number(innerWidth);
            const _Number2 = Number;
            size.height = Number(innerHeight);
            resize(size);
          }
        };
        resize = fn;
        if (closure_79) {
          fn = () => {
            items = [...arguments];
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              return HermesBuiltin.apply(items1, undefined);
            } catch (tmp7) {
              if (closure_2_79) {
                if (true === tmp8(tmp7)) {
                  return () => {

                  };
                }
              }
              throw tmp7;
            }
          };
        }
        closure_129_0 = fn;
        closure_129_1 = 200;
        closure_129_2 = {};
        closure_129_3 = null;
        closure_129_4 = 0;
        if (typeof tmp === "function") {
          let fn2 = function() {
            items = [...arguments];
            let self;
            const timestamp = Date.now();
            const diff = self - (timestamp - timestamp);
            self = this;
            if (diff > 0) {
              if (diff <= self) {
                let tmp5 = c3;
                if (!c3) {
                  tmp5 = false === leading.trailing;
                }
                if (!tmp5) {
                  c3 = closure_1_72(() => {
                    if (false !== leading.leading) {
                      const _Date = Date;
                      num = Date.now();
                    }
                    c3 = null;
                    fn.apply(self, items);
                  }, diff);
                }
              }
            }
            if (c3) {
              !(function clearTimeout$2() {
                items = [...arguments];
                return closure_1_71("clearTimeout")(...items);
              })(tmp8);
              c3 = null;
            }
            items.apply(this, items);
          };
          closure_130_0 = fn2;
          if (closure_79) {
            fn2 = () => {
              items = [...arguments];
              try {
                const items1 = [];
                HermesBuiltin.arraySpread(items, 0);
                return HermesBuiltin.apply(items1, undefined);
              } catch (tmp7) {
                if (closure_2_79) {
                  if (true === tmp8(tmp7)) {
                    return () => {

                    };
                  }
                }
                throw tmp7;
              }
            };
          }
          resize = "resize";
          innerHeight = fn2;
          if (_document === undefined) {
            _document = document;
          }
          innerWidth = _document;
          const listener = _document.addEventListener("resize", fn2, { capture: true, passive: true });
          return () => document.removeEventListener(selectionchange, fn, obj);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    })(doc, obj);
    closure_5 = initInputObserver(doc);
    closure_6 = (function initMediaInteractionObserver(doc) {
      ({ mediaInteractionCb: ratechange, blockClass: fnResult4, blockSelector: doc, unblockSelector: obj2, mirror: closure_4, sampling: closure_5, doc } = doc);
      items = undefined;
      if (typeof closure_86 === "function") {
        let fn = (type) => {
          if (typeof closure_1_86 === "function") {
            type = (arg0) => {
              const tmp = getEventTarget(arg0);
              if (tmp) {
                if (!isBlocked(tmp, fnResult4, doc, obj2, true)) {
                  obj = { type, id: null, currentTime: null, volume: null, muted: null, playbackRate: null };
                  ({ currentTime, volume, muted, playbackRate } = tmp);
                  obj.id = id.getId(tmp);
                  obj.currentTime = currentTime;
                  obj.volume = volume;
                  obj.muted = muted;
                  obj.playbackRate = playbackRate;
                  ratechange(obj);
                }
              }
            };
            if (closure_1_79) {
              type = () => {
                items = [...arguments];
                try {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items, 0);
                  return HermesBuiltin.apply(items1, undefined);
                } catch (tmp7) {
                  if (closure_2_79) {
                    if (true === tmp8(tmp7)) {
                      return () => {

                      };
                    }
                  }
                  throw tmp7;
                }
              };
            }
            closure_1 = media.media || 500;
            closure_2 = {};
            c3 = null;
            return function() {
              items = [...arguments];
              let self;
              const timestamp = Date.now();
              const diff = self - (timestamp - timestamp);
              self = this;
              if (diff > 0) {
                if (diff <= self) {
                  let tmp5 = c3;
                  if (!c3) {
                    tmp5 = false === leading.trailing;
                  }
                  if (!tmp5) {
                    c3 = closure_1_72(() => {
                      if (false !== leading.leading) {
                        const _Date = Date;
                        num = Date.now();
                      }
                      c3 = null;
                      fn.apply(self, items);
                    }, diff);
                  }
                }
              }
              if (c3) {
                !(function clearTimeout$2() {
                  items = [...arguments];
                  return closure_1_71("clearTimeout")(...items);
                })(tmp8);
                c3 = null;
              }
              items.apply(this, items);
            };
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        };
        closure_129_0 = fn;
        if (closure_79) {
          fn = () => {
            items = [...arguments];
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              return HermesBuiltin.apply(items1, undefined);
            } catch (tmp7) {
              if (closure_2_79) {
                if (true === tmp8(tmp7)) {
                  return () => {

                  };
                }
              }
              throw tmp7;
            }
          };
        }
        const fnResult = fn(Play.Play);
        doc = undefined;
        ratechange = "play";
        fnResult4 = fnResult;
        let _document = doc;
        if (doc === undefined) {
          _document = document;
        }
        obj = { capture: true, passive: true };
        obj2 = obj;
        const listener = _document.addEventListener("play", fnResult, obj);
        items = [() => document.removeEventListener(selectionchange, fn, obj), , , , ];
        const fnResult1 = fn(Play.Pause);
        doc = undefined;
        ratechange = "pause";
        fnResult4 = fnResult1;
        let _document2 = doc;
        if (doc === undefined) {
          _document2 = document;
        }
        obj = { capture: true, passive: true };
        obj2 = obj;
        const listener1 = _document2.addEventListener("pause", fnResult1, obj);
        items[1] = () => document.removeEventListener(selectionchange, fn, obj);
        const fnResult2 = fn(Play.Seeked);
        doc = undefined;
        ratechange = "seeked";
        fnResult4 = fnResult2;
        let _document3 = doc;
        if (doc === undefined) {
          _document3 = document;
        }
        obj = { capture: true, passive: true };
        obj2 = obj;
        const listener2 = _document3.addEventListener("seeked", fnResult2, obj);
        items[2] = () => document.removeEventListener(selectionchange, fn, obj);
        const fnResult3 = fn(Play.VolumeChange);
        doc = undefined;
        ratechange = "volumechange";
        fnResult4 = fnResult3;
        let _document4 = doc;
        if (doc === undefined) {
          _document4 = document;
        }
        obj1 = { capture: true, passive: true };
        obj2 = obj1;
        const listener3 = _document4.addEventListener("volumechange", fnResult3, obj1);
        items[3] = () => document.removeEventListener(selectionchange, fn, obj);
        fnResult4 = fn(Play.RateChange);
        doc = undefined;
        ratechange = "ratechange";
        if (doc === undefined) {
          doc = document;
        }
        obj2 = { capture: true, passive: true };
        const listener4 = doc.addEventListener("ratechange", fnResult4, obj2);
        items[4] = () => document.removeEventListener(selectionchange, fn, obj);
        if (typeof tmp === "function") {
          let fn2 = () => {
            const item = items.forEach((fn) => fn());
          };
          closure_130_0 = fn2;
          if (closure_79) {
            fn2 = () => {
              items = [...arguments];
              try {
                const items1 = [];
                HermesBuiltin.arraySpread(items, 0);
                return HermesBuiltin.apply(items1, undefined);
              } catch (tmp7) {
                if (closure_2_79) {
                  if (true === tmp8(tmp7)) {
                    return () => {

                    };
                  }
                }
                throw tmp7;
              }
            };
          }
          return fn2;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    })(doc);
    closure_7 = function styleSheetObserver() {

    };
    closure_8 = function adoptedStyleSheetObserver() {

    };
    closure_9 = function styleDeclarationObserver() {

    };
    closure_10 = function fontObserver() {

    };
    if (doc.recordDOM) {
      obj = { win: defaultView };
      closure_7 = (function initStyleSheetObserver(doc, win) {
        ({ styleSheetRuleCb: closure_0, mirror: closure_1, stylesheetManager: closure_2 } = doc);
        win = win.win;
        let insertRule;
        let replace;
        let replaceSync;
        let deleteRule;
        obj2 = undefined;
        closure_9 = undefined;
        if (win.CSSStyleSheet) {
          if (win.CSSStyleSheet.prototype) {
            insertRule = win.CSSStyleSheet.prototype.insertRule;
            if (typeof closure_86 === "function") {
              let fn = (apply, ownerNode, arg2) => {
                closure_6(arg2, 2);
                obj = closure_1_1;
                const styleMirror = closure_1_2.styleMirror;
                if (ownerNode) {
                  if (ownerNode.ownerNode) {
                    id = obj.getId(ownerNode.ownerNode);
                  } else {
                    const id1 = styleMirror.getId(ownerNode);
                  }
                  obj = { styleId: id1, id };
                } else {
                  ({ id, styleId } = {});
                  let tmp7 = id;
                  if (id) {
                    tmp7 = -1 !== id;
                  }
                  if (!tmp7) {
                    let tmp8 = styleId;
                    if (styleId) {
                      tmp8 = -1 !== styleId;
                    }
                    tmp7 = tmp8;
                  }
                  if (tmp7) {
                    obj = { id, styleId, adds: null };
                    obj1 = { rule: tmp2, index: tmp3 };
                    items = [obj1];
                    obj.adds = items;
                    closure_1_0(obj);
                  }
                  return apply.apply(ownerNode, arg2);
                }
              };
              closure_129_0 = fn;
              if (closure_79) {
                fn = () => {
                  items = [...arguments];
                  try {
                    const items1 = [];
                    HermesBuiltin.arraySpread(items, 0);
                    return HermesBuiltin.apply(items1, undefined);
                  } catch (tmp7) {
                    if (closure_2_79) {
                      if (true === tmp8(tmp7)) {
                        return () => {

                        };
                      }
                    }
                    throw tmp7;
                  }
                };
              }
              obj = { apply: fn };
              tmp3 = new tmp3(insertRule, obj);
              tmp.insertRule = tmp3;
              deleteRule = win.CSSStyleSheet.prototype.deleteRule;
              if (typeof closure_86 === "function") {
                let fn2 = (apply, ownerNode, arg2) => {
                  obj = closure_1_1;
                  const styleMirror = closure_1_2.styleMirror;
                  if (ownerNode) {
                    if (ownerNode.ownerNode) {
                      id = obj.getId(ownerNode.ownerNode);
                    } else {
                      const id1 = styleMirror.getId(ownerNode);
                    }
                    obj = { styleId: id1, id };
                  } else {
                    ({ id, styleId } = {});
                    let tmp5 = id;
                    if (id) {
                      tmp5 = -1 !== id;
                    }
                    if (!tmp5) {
                      let tmp6 = styleId;
                      if (styleId) {
                        tmp6 = -1 !== styleId;
                      }
                      tmp5 = tmp6;
                    }
                    if (tmp5) {
                      obj = { id, styleId, removes: null };
                      obj1 = { index: tmp };
                      items = [obj1];
                      obj.removes = items;
                      closure_1_0(obj);
                    }
                    return apply.apply(ownerNode, arg2);
                  }
                };
                closure_130_0 = fn2;
                if (closure_79) {
                  fn2 = () => {
                    items = [...arguments];
                    try {
                      const items1 = [];
                      HermesBuiltin.arraySpread(items, 0);
                      return HermesBuiltin.apply(items1, undefined);
                    } catch (tmp7) {
                      if (closure_2_79) {
                        if (true === tmp8(tmp7)) {
                          return () => {

                          };
                        }
                      }
                      throw tmp7;
                    }
                  };
                }
                obj = { apply: fn2 };
                tmp13 = new tmp13(deleteRule, obj);
                tmp12.deleteRule = tmp13;
                if (win.CSSStyleSheet.prototype.replace) {
                  replace = win.CSSStyleSheet.prototype.replace;
                  if (typeof closure_86 === "function") {
                    let fn3 = (apply, ownerNode, arg2) => {
                      obj = closure_1_1;
                      const styleMirror = closure_1_2.styleMirror;
                      if (ownerNode) {
                        if (ownerNode.ownerNode) {
                          id = obj.getId(ownerNode.ownerNode);
                        } else {
                          const id1 = styleMirror.getId(ownerNode);
                        }
                        obj = { styleId: id1, id };
                      } else {
                        ({ id, styleId } = {});
                        let tmp5 = id;
                        if (id) {
                          tmp5 = -1 !== id;
                        }
                        if (!tmp5) {
                          let tmp6 = styleId;
                          if (styleId) {
                            tmp6 = -1 !== styleId;
                          }
                          tmp5 = tmp6;
                        }
                        if (tmp5) {
                          obj = { id, styleId, replace: tmp };
                          closure_1_0(obj);
                        }
                        return apply.apply(ownerNode, arg2);
                      }
                    };
                    closure_131_0 = fn3;
                    if (closure_79) {
                      fn3 = () => {
                        items = [...arguments];
                        try {
                          const items1 = [];
                          HermesBuiltin.arraySpread(items, 0);
                          return HermesBuiltin.apply(items1, undefined);
                        } catch (tmp7) {
                          if (closure_2_79) {
                            if (true === tmp8(tmp7)) {
                              return () => {

                              };
                            }
                          }
                          throw tmp7;
                        }
                      };
                    }
                    obj = { apply: fn3 };
                    tmp22 = new tmp22(replace, obj);
                    tmp21.replace = tmp22;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                if (win.CSSStyleSheet.prototype.replaceSync) {
                  replaceSync = win.CSSStyleSheet.prototype.replaceSync;
                  if (typeof closure_86 === "function") {
                    let fn4 = (apply, ownerNode, arg2) => {
                      obj = closure_1_1;
                      const styleMirror = closure_1_2.styleMirror;
                      if (ownerNode) {
                        if (ownerNode.ownerNode) {
                          id = obj.getId(ownerNode.ownerNode);
                        } else {
                          const id1 = styleMirror.getId(ownerNode);
                        }
                        obj = { styleId: id1, id };
                      } else {
                        ({ id, styleId } = {});
                        let tmp5 = id;
                        if (id) {
                          tmp5 = -1 !== id;
                        }
                        if (!tmp5) {
                          let tmp6 = styleId;
                          if (styleId) {
                            tmp6 = -1 !== styleId;
                          }
                          tmp5 = tmp6;
                        }
                        if (tmp5) {
                          obj = { id, styleId, replaceSync: tmp };
                          closure_1_0(obj);
                        }
                        return apply.apply(ownerNode, arg2);
                      }
                    };
                    closure_132_0 = fn4;
                    if (closure_79) {
                      fn4 = () => {
                        items = [...arguments];
                        try {
                          const items1 = [];
                          HermesBuiltin.arraySpread(items, 0);
                          return HermesBuiltin.apply(items1, undefined);
                        } catch (tmp7) {
                          if (closure_2_79) {
                            if (true === tmp8(tmp7)) {
                              return () => {

                              };
                            }
                          }
                          throw tmp7;
                        }
                      };
                    }
                    obj1 = { apply: fn4 };
                    tmp31 = new tmp31(replaceSync, obj1);
                    tmp30.replaceSync = tmp31;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                obj2 = {};
                const _window = window;
                let prototype = undefined !== window.CSSGroupingRule;
                if (prototype) {
                  const _window2 = window;
                  prototype = window.CSSGroupingRule.prototype;
                }
                if (prototype) {
                  const _window3 = window;
                  prototype = "insertRule" in window.CSSGroupingRule.prototype;
                }
                if (prototype) {
                  const _window4 = window;
                  prototype = "deleteRule" in window.CSSGroupingRule.prototype;
                }
                if (Boolean(prototype)) {
                  obj2.CSSGroupingRule = win.CSSGroupingRule;
                } else {
                  const _window5 = window;
                  let prototype2 = undefined !== window.CSSMediaRule;
                  if (prototype2) {
                    const _window6 = window;
                    prototype2 = window.CSSMediaRule.prototype;
                  }
                  if (prototype2) {
                    const _window7 = window;
                    prototype2 = "insertRule" in window.CSSMediaRule.prototype;
                  }
                  if (prototype2) {
                    const _window8 = window;
                    prototype2 = "deleteRule" in window.CSSMediaRule.prototype;
                  }
                  if (Boolean(prototype2)) {
                    obj2.CSSMediaRule = win.CSSMediaRule;
                  }
                  const _window9 = window;
                  let prototype3 = undefined !== window.CSSConditionRule;
                  if (prototype3) {
                    const _window10 = window;
                    prototype3 = window.CSSConditionRule.prototype;
                  }
                  if (prototype3) {
                    const _window11 = window;
                    prototype3 = "insertRule" in window.CSSConditionRule.prototype;
                  }
                  if (prototype3) {
                    const _window12 = window;
                    prototype3 = "deleteRule" in window.CSSConditionRule.prototype;
                  }
                  if (Boolean(prototype3)) {
                    obj2.CSSConditionRule = win.CSSConditionRule;
                  }
                  const _window13 = window;
                  let prototype4 = undefined !== window.CSSSupportsRule;
                  if (prototype4) {
                    const _window14 = window;
                    prototype4 = window.CSSSupportsRule.prototype;
                  }
                  if (prototype4) {
                    const _window15 = window;
                    prototype4 = "insertRule" in window.CSSSupportsRule.prototype;
                  }
                  if (prototype4) {
                    const _window16 = window;
                    prototype4 = "deleteRule" in window.CSSSupportsRule.prototype;
                  }
                  if (Boolean(prototype4)) {
                    obj2.CSSSupportsRule = win.CSSSupportsRule;
                  }
                }
                closure_9 = {};
                const _Object = Object;
                let entries = Object.entries(obj2);
                let item = entries.forEach((item) => {
                  [tmp, tmp2] = item;
                  closure_9[tmp] = { insertRule: tmp2.prototype.insertRule, deleteRule: tmp2.prototype.deleteRule };
                  insertRule = closure_9[tmp].insertRule;
                  if (typeof callbackWrapper === "function") {
                    let fn = (apply, parentStyleSheet, arg2) => {
                      let num = replaceSync(arg2, 2)[1];
                      parentStyleSheet = parentStyleSheet.parentStyleSheet;
                      const styleMirror = closure_1_2.styleMirror;
                      if (parentStyleSheet) {
                        if (parentStyleSheet.ownerNode) {
                          id = closure_1_1.getId(parentStyleSheet.ownerNode);
                        } else {
                          const id1 = styleMirror.getId(parentStyleSheet);
                        }
                        parentStyleSheet = { styleId: id1, id };
                      } else {
                        ({ id, styleId } = {});
                        let tmp6 = id;
                        if (id) {
                          tmp6 = -1 !== id;
                        }
                        if (!tmp6) {
                          let tmp7 = styleId;
                          if (styleId) {
                            tmp7 = -1 !== styleId;
                          }
                          tmp6 = tmp7;
                        }
                        if (tmp6) {
                          obj = { id, styleId, adds: null };
                          obj = { rule: tmp2, index: null };
                          items = [];
                          if (!num) {
                            num = 0;
                          }
                          items[HermesBuiltin.arraySpread(closure_2_95(parentStyleSheet), 0)] = num;
                          obj.index = items;
                          const items1 = [obj];
                          obj.adds = items1;
                          fn2(obj);
                          const arraySpreadResult = HermesBuiltin.arraySpread(closure_2_95(parentStyleSheet), 0);
                        }
                        return apply.apply(parentStyleSheet, arg2);
                      }
                      const tmp = replaceSync(arg2, 2);
                    };
                    let fn2 = fn;
                    if (closure_2_79) {
                      fn = () => {
                        items = [...arguments];
                        try {
                          const items1 = [];
                          HermesBuiltin.arraySpread(items, 0);
                          return HermesBuiltin.apply(items1, undefined);
                        } catch (tmp7) {
                          if (closure_2_79) {
                            if (true === tmp8(tmp7)) {
                              return () => {

                              };
                            }
                          }
                          throw tmp7;
                        }
                      };
                    }
                    obj = { apply: fn };
                    tmp5 = new tmp5(insertRule, obj);
                    tmp4.insertRule = tmp5;
                    deleteRule = tmp3[tmp].deleteRule;
                    if (typeof tmp6 === "function") {
                      fn2 = (apply, parentStyleSheet, arg2) => {
                        parentStyleSheet = parentStyleSheet.parentStyleSheet;
                        const styleMirror = closure_1_2.styleMirror;
                        if (parentStyleSheet) {
                          if (parentStyleSheet.ownerNode) {
                            id = closure_1_1.getId(parentStyleSheet.ownerNode);
                          } else {
                            const id1 = styleMirror.getId(parentStyleSheet);
                          }
                          parentStyleSheet = { styleId: id1, id };
                        } else {
                          ({ id, styleId } = {});
                          let tmp5 = id;
                          if (id) {
                            tmp5 = -1 !== id;
                          }
                          if (!tmp5) {
                            let tmp6 = styleId;
                            if (styleId) {
                              tmp6 = -1 !== styleId;
                            }
                            tmp5 = tmp6;
                          }
                          if (tmp5) {
                            obj = { id, styleId, removes: null };
                            obj = { index: null };
                            items = [];
                            items[HermesBuiltin.arraySpread(closure_2_95(parentStyleSheet), 0)] = tmp;
                            obj.index = items;
                            const items1 = [obj];
                            obj.removes = items1;
                            fn2(obj);
                          }
                          return apply.apply(parentStyleSheet, arg2);
                        }
                      };
                      if (closure_2_79) {
                        fn2 = () => {
                          items = [...arguments];
                          try {
                            const items1 = [];
                            HermesBuiltin.arraySpread(items, 0);
                            return HermesBuiltin.apply(items1, undefined);
                          } catch (tmp7) {
                            if (closure_2_79) {
                              if (true === tmp8(tmp7)) {
                                return () => {

                                };
                              }
                            }
                            throw tmp7;
                          }
                        };
                      }
                      obj = { apply: fn2 };
                      tmp15 = new tmp15(deleteRule, obj);
                      tmp14.deleteRule = tmp15;
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                });
                if (typeof closure_86 === "function") {
                  let fn5 = () => {
                    win.CSSStyleSheet.prototype.insertRule = insertRule;
                    win.CSSStyleSheet.prototype.deleteRule = deleteRule;
                    if (replace) {
                      win.CSSStyleSheet.prototype.replace = tmp2;
                    }
                    if (replaceSync) {
                      win.CSSStyleSheet.prototype.replaceSync = tmp3;
                    }
                    const entries = Object.entries(obj2);
                    const item = entries.forEach((item) => {
                      [tmp, tmp2] = item;
                      tmp2.prototype.insertRule = dependencyMap[tmp].insertRule;
                      tmp2.prototype.deleteRule = dependencyMap[tmp].deleteRule;
                    });
                  };
                  closure_133_0 = fn5;
                  if (closure_79) {
                    fn5 = () => {
                      items = [...arguments];
                      try {
                        const items1 = [];
                        HermesBuiltin.arraySpread(items, 0);
                        return HermesBuiltin.apply(items1, undefined);
                      } catch (tmp7) {
                        if (closure_2_79) {
                          if (true === tmp8(tmp7)) {
                            return () => {

                            };
                          }
                        }
                        throw tmp7;
                      }
                    };
                  }
                  return fn5;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
        return () => {

        };
      })(doc, obj);
      closure_8 = initAdoptedStyleSheetObserver(doc, doc.doc);
      obj = { win: defaultView };
      closure_9 = (function initStyleDeclarationObserver(doc, win) {
        ({ styleDeclarationCb: closure_0, mirror: closure_1, ignoreCSSAttributes: closure_2, stylesheetManager: closure_3 } = doc);
        win = win.win;
        let removeProperty;
        const setProperty = win.CSSStyleDeclaration.prototype.setProperty;
        if (typeof closure_86 === "function") {
          let fn = (apply, parentRule, arg2) => {
            [tmp2, tmp3, tmp4] = closure_6(arg2, 3);
            if (set.has(tmp2)) {
              items = [tmp2, tmp3, tmp4];
              return setProperty.apply(parentRule, items);
            } else {
              parentRule = parentRule.parentRule;
              let parentStyleSheet;
              if (parentRule != null) {
                parentStyleSheet = parentRule.parentStyleSheet;
              }
              const styleMirror = closure_1_3.styleMirror;
              if (parentStyleSheet) {
                if (parentStyleSheet.ownerNode) {
                  id = closure_1_1.getId(parentStyleSheet.ownerNode);
                } else {
                  const id1 = styleMirror.getId(parentStyleSheet);
                }
                parentStyleSheet = { styleId: id1, id };
              } else {
                ({ id, styleId } = {});
                let tmp10 = id;
                if (id) {
                  tmp10 = -1 !== id;
                }
                if (!tmp10) {
                  let tmp11 = styleId;
                  if (styleId) {
                    tmp11 = -1 !== styleId;
                  }
                  tmp10 = tmp11;
                }
                if (tmp10) {
                  set = { id, styleId, set: null, index: null };
                  set = { property: tmp2, value: tmp3, priority: tmp4 };
                  set.set = set;
                  set.index = getNestedCSSRulePositions(parentRule.parentRule);
                  closure_1_0(set);
                }
                return apply.apply(parentRule, arg2);
              }
            }
            const tmp = closure_6(arg2, 3);
          };
          closure_129_0 = fn;
          if (closure_79) {
            fn = () => {
              items = [...arguments];
              try {
                const items1 = [];
                HermesBuiltin.arraySpread(items, 0);
                return HermesBuiltin.apply(items1, undefined);
              } catch (tmp7) {
                if (closure_2_79) {
                  if (true === tmp8(tmp7)) {
                    return () => {

                    };
                  }
                }
                throw tmp7;
              }
            };
          }
          obj = { apply: fn };
          tmp2 = new tmp2(setProperty, obj);
          tmp.setProperty = tmp2;
          removeProperty = win.CSSStyleDeclaration.prototype.removeProperty;
          if (typeof closure_86 === "function") {
            let fn2 = (apply, parentRule, arg2) => {
              const first = closure_6(arg2, 1)[0];
              if (set.has(first)) {
                items = [first];
                return removeProperty.apply(parentRule, items);
              } else {
                parentRule = parentRule.parentRule;
                let parentStyleSheet;
                if (parentRule != null) {
                  parentStyleSheet = parentRule.parentStyleSheet;
                }
                const styleMirror = closure_1_3.styleMirror;
                if (parentStyleSheet) {
                  if (parentStyleSheet.ownerNode) {
                    id = closure_1_1.getId(parentStyleSheet.ownerNode);
                  } else {
                    const id1 = styleMirror.getId(parentStyleSheet);
                  }
                  parentStyleSheet = { styleId: id1, id };
                } else {
                  ({ id, styleId } = {});
                  let tmp7 = id;
                  if (id) {
                    tmp7 = -1 !== id;
                  }
                  if (!tmp7) {
                    let tmp8 = styleId;
                    if (styleId) {
                      tmp8 = -1 !== styleId;
                    }
                    tmp7 = tmp8;
                  }
                  if (tmp7) {
                    let remove = { id, styleId, remove: null, index: null };
                    remove = { property: first };
                    remove.remove = remove;
                    remove.index = getNestedCSSRulePositions(parentRule.parentRule);
                    closure_1_0(remove);
                  }
                  return apply.apply(parentRule, arg2);
                }
              }
            };
            closure_130_0 = fn2;
            if (closure_79) {
              fn2 = () => {
                items = [...arguments];
                try {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items, 0);
                  return HermesBuiltin.apply(items1, undefined);
                } catch (tmp7) {
                  if (closure_2_79) {
                    if (true === tmp8(tmp7)) {
                      return () => {

                      };
                    }
                  }
                  throw tmp7;
                }
              };
            }
            obj = { apply: fn2 };
            tmp12 = new tmp12(removeProperty, obj);
            tmp11.removeProperty = tmp12;
            if (typeof closure_86 === "function") {
              let fn3 = () => {
                win.CSSStyleDeclaration.prototype.setProperty = setProperty;
                win.CSSStyleDeclaration.prototype.removeProperty = removeProperty;
              };
              closure_131_0 = fn3;
              if (closure_79) {
                fn3 = () => {
                  items = [...arguments];
                  try {
                    const items1 = [];
                    HermesBuiltin.arraySpread(items, 0);
                    return HermesBuiltin.apply(items1, undefined);
                  } catch (tmp7) {
                    if (closure_2_79) {
                      if (true === tmp8(tmp7)) {
                        return () => {

                        };
                      }
                    }
                    throw tmp7;
                  }
                };
              }
              return fn3;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      })(doc, obj);
      if (doc.collectFonts) {
        closure_10 = (function initFontObserver(doc) {
          ({ fontCb: closure_0, doc } = doc);
          items = undefined;
          weakMap = undefined;
          let FontFace;
          const defaultView = doc.defaultView;
          if (defaultView) {
            items = [];
            const _WeakMap = WeakMap;
            weakMap = new WeakMap();
            FontFace = defaultView.FontFace;
            defaultView.FontFace = function FontFace2(family, str, descriptors) {
              const tmp = new FontFace(family, str, descriptors);
              obj = { family, buffer: typeof str !== "string", descriptors, fontSource: null };
              let json = str;
              if (typeof str !== "string") {
                const _JSON = JSON;
                const _Array = Array;
                const _Uint8Array = Uint8Array;
                const uint8Array = new Uint8Array(str);
                json = JSON.stringify(Array.from(uint8Array));
              }
              obj.fontSource = json;
              const result = weakMap.set(tmp, obj);
              return tmp;
            };
            items.push(() => {
              defaultView.FontFace = FontFace;
            });
            items.push(closure_61(doc.fonts, "add", (arg0) => {
              closure_0 = arg0;
              return function(arg0) {
                let fn = arg0;
                if (typeof callbackWrapper === "function") {
                  fn = () => {
                    value = weakMap.get(fn);
                    if (value) {
                      closure_0(value);
                      weakMap.delete(fn);
                    }
                  };
                  if (closure_3_79) {
                    fn = () => {
                      items = [...arguments];
                      try {
                        const items1 = [];
                        HermesBuiltin.arraySpread(items, 0);
                        return HermesBuiltin.apply(items1, undefined);
                      } catch (tmp7) {
                        if (closure_2_79) {
                          if (true === tmp8(tmp7)) {
                            return /* F107989 */ function() { ... };
                          }
                        }
                        throw tmp7;
                      }
                    };
                  }
                  const self = this;
                  tmp(fn, 0);
                  items = [arg0];
                  return closure_0.apply(this, items);
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              };
            }));
            if (typeof closure_86 === "function") {
              let fn = () => {
                const item = items.forEach((fn) => fn());
              };
              closure_129_0 = fn;
              if (closure_79) {
                fn = () => {
                  items = [...arguments];
                  try {
                    const items1 = [];
                    HermesBuiltin.arraySpread(items, 0);
                    return HermesBuiltin.apply(items1, undefined);
                  } catch (tmp7) {
                    if (closure_2_79) {
                      if (true === tmp8(tmp7)) {
                        return () => {

                        };
                      }
                    }
                    throw tmp7;
                  }
                };
              }
              return fn;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
            const tmp7 = closure_61(doc.fonts, "add", (arg0) => {
              closure_0 = arg0;
              return function(arg0) {
                let fn = arg0;
                if (typeof callbackWrapper === "function") {
                  fn = () => {
                    value = weakMap.get(fn);
                    if (value) {
                      closure_0(value);
                      weakMap.delete(fn);
                    }
                  };
                  if (closure_3_79) {
                    fn = () => {
                      items = [...arguments];
                      try {
                        const items1 = [];
                        HermesBuiltin.arraySpread(items, 0);
                        return HermesBuiltin.apply(items1, undefined);
                      } catch (tmp7) {
                        if (closure_2_79) {
                          if (true === tmp8(tmp7)) {
                            return /* F107989 */ function() { ... };
                          }
                        }
                        throw tmp7;
                      }
                    };
                  }
                  const self = this;
                  tmp(fn, 0);
                  items = [arg0];
                  return closure_0.apply(this, items);
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              };
            });
          } else {
            return () => {

            };
          }
        })(doc);
      }
    }
    closure_11 = (function initSelectionObserver(doc) {
      ({ doc: selectionchange, mirror: fn, blockClass: document, blockSelector: obj, unblockSelector: closure_4, selectionCb: closure_5 } = doc);
      closure_6 = true;
      if (typeof closure_86 === "function") {
        fn = () => {
          const selection = selectionchange.getSelection();
          if (selection) {
            if (!closure_6) {
              closure_6 = selection.isCollapsed || false;
              items = [];
              let num = 0;
              if (0 < (selection.rangeCount || 0)) {
                do {
                  let rangeAt = selection.getRangeAt(num);
                  ({ startContainer, endContainer } = rangeAt);
                  let tmp8 = obj;
                  let flag = true;
                  ({ startOffset, endOffset } = rangeAt);
                  let tmp6Result = isBlocked(startContainer, document, obj, closure_1_4, true);
                  if (!tmp6Result) {
                    let flag2 = true;
                    tmp6Result = isBlocked(endContainer, document, tmp8, closure_1_4, true);
                  }
                  if (!tmp6Result) {
                    obj = { start: fn.getId(startContainer), startOffset, end: fn.getId(endContainer), endOffset };
                    let arr = items.push(obj);
                  }
                  num = num + 1;
                } while (num < tmp4);
              }
              obj = { ranges: items };
              closure_1_5(obj);
            } else {
              let isCollapsed;
              if (selection != null) {
                isCollapsed = selection.isCollapsed;
              }
            }
          }
        };
        closure_129_0 = fn;
        if (closure_79) {
          fn = () => {
            items = [...arguments];
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              return HermesBuiltin.apply(items1, undefined);
            } catch (tmp7) {
              if (closure_2_79) {
                if (true === tmp8(tmp7)) {
                  return () => {

                  };
                }
              }
              throw tmp7;
            }
          };
        }
        fn();
        document = undefined;
        selectionchange = "selectionchange";
        const _document = document;
        const listener = document.addEventListener("selectionchange", fn, { capture: true, passive: true });
        return () => document.removeEventListener(selectionchange, fn, obj);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    })(doc);
    closure_12 = (function initCustomElementObserver(customElementCb) {
      customElementCb = customElementCb.customElementCb;
      const defaultView = customElementCb.doc.defaultView;
      if (defaultView) {
        if (defaultView.customElements) {
          let fn = patch(defaultView.customElements, "define", (arg0) => {
            closure_0 = arg0;
            return function(name, arg1, arg2) {
              try {
                let define = { define: null };
                define = { name };
                define.define = define;
                customElementCb(define);
                const self = this;
                items = [name, arg1, arg2];
                return closure_0.apply(this, items);
              } catch (err) {
              }
            };
          });
        }
        return fn;
      }
      fn = () => {

      };
    })(doc);
    let items = [];
    const plugins = doc.plugins;
    for (const item10050 of plugins) {
      let arr = items.push(item10050.observer(item10050.callback, defaultView, item10050.options));
      continue;
    }
    return callbackWrapper(() => {
      const item = closure_87.forEach((reset) => reset.reset());
      if (closure_0 != null) {
        closure_0.disconnect();
      }
      closure_1();
      closure_2();
      closure_3();
      closure_4();
      closure_5();
      closure_6();
      closure_7();
      closure_8();
      closure_9();
      closure_10();
      closure_11();
      closure_12();
      const item1 = items.forEach((fn) => fn());
    });
  } else {
    return () => {

    };
  }
}
function record() {
  slimDOMOptions = arg0;
  if (arg0 === undefined) {
    slimDOMOptions = {};
  }
  c1 = undefined;
  c2 = undefined;
  let blockSelector;
  let unblockSelector;
  let ignoreSelector;
  let maskAllText;
  let str3;
  let unmaskTextClass;
  let maskTextSelector;
  let unmaskTextSelector;
  let inlineStylesheet;
  maskAttributeFn = undefined;
  let maskInputFn;
  let maskTextFn;
  c17 = undefined;
  sampling = undefined;
  let dataURLOptions;
  closure_20 = undefined;
  let recordCanvas;
  let recordAfter;
  closure_23 = undefined;
  closure_24 = undefined;
  let inlineImages;
  let plugins;
  let keepIframeSrcFn;
  let ignoreCSSAttributes;
  onMutation = undefined;
  closure_30 = undefined;
  c31 = undefined;
  let timestamp;
  maskInputOptions = undefined;
  slimDOMOptions = undefined;
  c35 = undefined;
  let eventProcessor;
  let wrappedMutationEmit;
  let wrappedScrollEmit;
  let wrappedCanvasMutationEmit;
  navigation = undefined;
  closure_41 = undefined;
  closure_42 = undefined;
  closure_43 = undefined;
  closure_44 = undefined;
  let takeFullSnapshot2;
  c46 = undefined;
  c47 = undefined;
  c48 = undefined;
  const emit = slimDOMOptions.emit;
  ({ checkoutEveryNms: c1, checkoutEveryNth: c2, blockClass } = slimDOMOptions);
  let str = "rr-block";
  if (undefined !== blockClass) {
    str = blockClass;
  }
  blockSelector = slimDOMOptions.blockSelector;
  let tmp = null;
  if (undefined !== blockSelector) {
    tmp = blockSelector;
  }
  blockSelector = tmp;
  unblockSelector = slimDOMOptions.unblockSelector;
  let tmp2 = null;
  if (undefined !== unblockSelector) {
    tmp2 = unblockSelector;
  }
  unblockSelector = tmp2;
  const ignoreClass = slimDOMOptions.ignoreClass;
  ignoreSelector = slimDOMOptions.ignoreSelector;
  let tmp3 = null;
  if (undefined !== ignoreSelector) {
    tmp3 = ignoreSelector;
  }
  ignoreSelector = tmp3;
  maskAllText = tmp4;
  let maskTextClass = slimDOMOptions.maskTextClass;
  str3 = "rr-mask";
  if (undefined !== maskTextClass) {
    str3 = maskTextClass;
  }
  unmaskTextClass = slimDOMOptions.unmaskTextClass;
  let tmp5 = null;
  if (undefined !== unmaskTextClass) {
    tmp5 = unmaskTextClass;
  }
  unmaskTextClass = tmp5;
  maskTextSelector = slimDOMOptions.maskTextSelector;
  let tmp6 = null;
  if (undefined !== maskTextSelector) {
    tmp6 = maskTextSelector;
  }
  maskTextSelector = tmp6;
  unmaskTextSelector = slimDOMOptions.unmaskTextSelector;
  let tmp7 = null;
  if (undefined !== unmaskTextSelector) {
    tmp7 = unmaskTextSelector;
  }
  unmaskTextSelector = tmp7;
  inlineStylesheet = tmp8;
  ({ maskInputOptions, slimDOMOptions, maskAttributeFn } = slimDOMOptions);
  maskInputFn = slimDOMOptions.maskInputFn;
  maskTextFn = slimDOMOptions.maskTextFn;
  const maxCanvasSize = slimDOMOptions.maxCanvasSize;
  let tmp9 = null;
  if (undefined !== maxCanvasSize) {
    tmp9 = maxCanvasSize;
  }
  ({ packFn: c17, sampling } = slimDOMOptions);
  if (undefined === sampling) {
    sampling = {};
  }
  dataURLOptions = slimDOMOptions.dataURLOptions;
  if (undefined === dataURLOptions) {
    dataURLOptions = {};
  }
  ({ mousemoveWait, recordDOM } = slimDOMOptions);
  closure_20 = undefined === recordDOM || recordDOM;
  recordCanvas = tmp10;
  const recordCrossOriginIframes = slimDOMOptions.recordCrossOriginIframes;
  recordAfter = slimDOMOptions.recordAfter;
  if (undefined === recordAfter) {
    let str4 = "load";
    if ("DOMContentLoaded" === slimDOMOptions.recordAfter) {
      str4 = slimDOMOptions.recordAfter;
    }
    recordAfter = str4;
  }
  const userTriggeredOnInput = slimDOMOptions.userTriggeredOnInput;
  closure_23 = undefined !== userTriggeredOnInput && userTriggeredOnInput;
  const collectFonts = slimDOMOptions.collectFonts;
  closure_24 = undefined !== collectFonts && collectFonts;
  inlineImages = tmp12;
  plugins = slimDOMOptions.plugins;
  keepIframeSrcFn = slimDOMOptions.keepIframeSrcFn;
  if (undefined === keepIframeSrcFn) {
    keepIframeSrcFn = () => false;
  }
  ignoreCSSAttributes = slimDOMOptions.ignoreCSSAttributes;
  if (undefined === ignoreCSSAttributes) {
    let _Set = Set;
    ignoreCSSAttributes = new Set([]);
  }
  ({ errorHandler, onMutation } = slimDOMOptions);
  (function registerErrorHandler(errorHandler) {
    closure_79 = errorHandler;
  })(errorHandler);
  let tmp17 = !tmp11;
  if (undefined !== recordCrossOriginIframes && recordCrossOriginIframes) {
    let _window = window;
    let _window2 = window;
    tmp17 = window.parent === window;
  }
  closure_30 = tmp17;
  let flag = false;
  c31 = false;
  if (!tmp17) {
    try {
      let _window3 = window;
      if (window.parent.document) {
        flag = false;
        c31 = false;
      }
    } catch (err) {
      flag = true;
      c31 = true;
    }
  }
  if (tmp17) {
    if (!emit) {
      const _Error = Error;
      const error = new Error("emit function is required");
      throw error;
    }
  }
  if (!tmp17) {
    if (!flag) {
      return () => {

      };
    }
  }
  if (tmp25) {
    sampling.mousemove = mousemoveWait;
  }
  navigation.reset();
  if (true === slimDOMOptions.maskAllInputs) {
    maskInputOptions = { color: true, date: true, "datetime-local": true, email: true, month: true, number: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true, textarea: true, select: true, radio: true, checkbox: true };
  } else if (undefined === maskInputOptions) {
    maskInputOptions = {};
  }
  if (true !== slimDOMOptions) {
    if ("all" !== slimDOMOptions) {
      if (!slimDOMOptions) {
        slimDOMOptions = {};
      }
    }
    (function polyfill$1() {
      const self = this;
      let _window = arg0;
      if (arg0 === undefined) {
        _window = window;
      }
      if (tmp2) {
        const _Array = Array;
        _window.NodeList.prototype.forEach = Array.prototype.forEach;
      }
      if (tmp4) {
        const _Array2 = Array;
        _window.DOMTokenList.prototype.forEach = Array.prototype.forEach;
      }
      if (!globalThis.Node.prototype.contains) {
        globalThis.Node.prototype.contains = () => {
          const items = [...arguments];
          let first = items[0];
          if (0 in items) {
            while (self !== first) {
              let parentNode = first;
              if (first) {
                parentNode = first.parentNode;
              }
              first = parentNode;
              if (parentNode) {
                continue;
              } else {
                let flag = false;
                return false;
              }
            }
            return true;
          } else {
            const _TypeError = TypeError;
            const typeError = new TypeError("1 argument is required");
            throw typeError;
          }
        };
      }
    })();
    c35 = 0;
    eventProcessor = function eventProcessor(eventProcessorResult) {
      let items = plugins;
      if (!plugins) {
        items = [];
      }
      for (const item10007 of items) {
        if (item10007.eventProcessor) {
          eventProcessorResult = item10007.eventProcessor(eventProcessorResult);
        }
        continue;
      }
      let tmp5 = _undefined;
      if (_undefined) {
        tmp5 = !c31;
      }
      if (tmp5) {
        eventProcessorResult = _undefined(eventProcessorResult);
      }
      return eventProcessorResult;
    };
    function le(type, isCheckout) {
      type.timestamp = W();
      const first = closure_87[0];
      let isFrozenResult;
      if (first != null) {
        isFrozenResult = first.isFrozen();
      }
      let tmp2 = !isFrozenResult;
      if (isFrozenResult) {
        tmp2 = type.type === obj1.FullSnapshot;
      }
      if (!tmp2) {
        let tmp5 = type.type === obj1.IncrementalSnapshot;
        if (tmp5) {
          tmp5 = type.data.source === obj2.Mutation;
        }
        tmp2 = tmp5;
      }
      if (!tmp2) {
        const item = closure_87.forEach((unfreeze) => unfreeze.unfreeze());
      }
      if (closure_30) {
        if (emit != null) {
          tmp12(eventProcessor(type), isCheckout);
        }
      } else if (c31) {
        obj = { type: "rrweb", event: eventProcessor(type), origin: null, isCheckout: null };
        const _window = window;
        obj.origin = window.location.origin;
        obj.isCheckout = isCheckout;
        const _window2 = window;
        parent.postMessage(obj, "*");
      }
      if (type.type === obj1.FullSnapshot) {
        timestamp = type;
        c35 = 0;
      } else if (type.type === tmp15.IncrementalSnapshot) {
        const sum = c35 + 1;
        c35 = sum;
        let tmp18 = c2;
        if (c2) {
          tmp18 = sum >= c2;
        }
        let tmp20 = c1;
        if (c1) {
          tmp20 = timestamp;
        }
        if (tmp20) {
          tmp20 = type.timestamp - timestamp.timestamp > c1;
        }
        if (!tmp18) {
          tmp18 = tmp20;
        }
        if (tmp18) {
          takeFullSnapshot2(true);
        }
      }
    }
    wrappedMutationEmit = function wrappedMutationEmit(arg0) {
      let data = { type: obj1.IncrementalSnapshot, data: null };
      data = { source: obj2.Mutation };
      const merged = Object.assign(arg0);
      data.data = data;
      le(data);
    };
    wrappedScrollEmit = function wrappedScrollEmit(arg0) {
      let data = { type: obj1.IncrementalSnapshot, data: null };
      data = { source: obj2.Scroll };
      const merged = Object.assign(arg0);
      data.data = data;
      le(data);
    };
    wrappedCanvasMutationEmit = function wrappedCanvasMutationEmit(arg0) {
      let data = { type: obj1.IncrementalSnapshot, data: null };
      data = { source: obj2.CanvasMutation };
      const merged = Object.assign(arg0);
      data.data = data;
      le(data);
    };
    slimDOMOptions = {
      mutationCb: wrappedMutationEmit,
      adoptedStyleSheetCb(arg0) {
          let data = { type: obj1.IncrementalSnapshot, data: null };
          data = { source: obj2.AdoptedStyleSheet };
          const merged = Object.assign(arg0);
          data.data = data;
          le(data);
        }
    };
    let tmp35 = new closure_106(slimDOMOptions);
    navigation = tmp35;
    if (typeof globalThis.__RRWEB_EXCLUDE_IFRAME__ === "boolean") {
      if (globalThis.__RRWEB_EXCLUDE_IFRAME__) {
        let tmp44 = new closure_99();
      }
      closure_41 = tmp44;
      if (!plugins) {
        plugins = [];
      }
      for (const item10140 of plugins) {
        let obj6 = item10140;
        if (item10140.getMirror) {
          obj1 = { nodeMirror: null, crossOriginIframeMirror: null, crossOriginIframeStyleMirror: null };
          obj1.nodeMirror = navigation;
          ({ crossOriginIframeMirror: obj8.crossOriginIframeMirror, crossOriginIframeStyleMirror: obj8.crossOriginIframeStyleMirror } = tmp44);
          let mirror = obj6.getMirror(obj1);
        }
        continue;
      }
      const tmp57 = new closure_107();
      closure_42 = tmp57;
      obj2 = { mirror: navigation, win: null, mutationCb: null, recordCanvas: null, blockClass: null, blockSelector: null, unblockSelector: null, maxCanvasSize: null, sampling: null, dataURLOptions: null, errorHandler: null };
      let _window4 = window;
      obj2.win = window;
      obj2.mutationCb = function mutationCb(attributes) {
        let data = { type: obj1.IncrementalSnapshot, data: null };
        data = { source: obj2.CanvasMutation };
        const merged = Object.assign(attributes);
        data.data = data;
        le(data);
      };
      obj2.recordCanvas = tmp10;
      obj2.blockClass = str;
      obj2.blockSelector = tmp;
      obj2.unblockSelector = tmp2;
      obj2.maxCanvasSize = tmp9;
      obj2.sampling = sampling.canvas;
      obj2.dataURLOptions = dataURLOptions;
      obj2.errorHandler = errorHandler;
      const tmp61 = (function _getCanvasManager(getCanvasManager, arg1) {
        try {
          if (getCanvasManager) {
            let tmp5 = getCanvasManager(arg1);
          } else {
            tmp5 = new closure_1_105();
          }
          return tmp5;
        } catch (err) {
          const _console = console;
          console.warn("Unable to initialize CanvasManager");
          const tmp12 = new closure_1_105();
          return tmp12;
        }
      })(slimDOMOptions.getCanvasManager, obj2);
      closure_43 = tmp61;
      if (typeof globalThis.__RRWEB_EXCLUDE_SHADOW_DOM__ !== "boolean") {
        obj3 = { mutationCb: wrappedMutationEmit, scrollCb: wrappedScrollEmit, bypassOptions: null, mirror: null };
        obj4 = { onMutation, blockClass: str, blockSelector: tmp, unblockSelector: tmp2, maskAllText: tmp4, maskTextClass: str3, unmaskTextClass: tmp5, maskTextSelector: tmp6, unmaskTextSelector: tmp7, inlineStylesheet: tmp8, maskInputOptions, dataURLOptions, maskAttributeFn, maskTextFn, maskInputFn, recordCanvas: tmp10, inlineImages: tmp12, sampling, slimDOMOptions, iframeManager: tmp44, stylesheetManager: tmp35, canvasManager: tmp61, keepIframeSrcFn, processedNodeManager: tmp57, ignoreCSSAttributes };
        obj3.bypassOptions = obj4;
        obj3.mirror = tmp59;
        let tmp66 = new closure_102(obj3);
        closure_44 = tmp66;
        takeFullSnapshot2 = function takeFullSnapshot2(arg0) {
          let flag = arg0;
          if (arg0 === undefined) {
            flag = false;
          }
          if (closure_20) {
            let slimDOM = { type: obj1.Meta, data: null };
            let size = { href: null, width: null, height: null };
            const _window = window;
            size.href = window.location.href;
            const _window2 = window;
            if (!innerWidth) {
              let _document = document;
              let clientWidth = document.documentElement;
              if (clientWidth) {
                const _document2 = document;
                clientWidth = document.documentElement.clientWidth;
              }
              innerWidth = clientWidth;
            }
            if (!innerWidth) {
              const _document3 = document;
              let clientWidth2 = document.body;
              if (clientWidth2) {
                const _document4 = document;
                clientWidth2 = document.body.clientWidth;
              }
              innerWidth = clientWidth2;
            }
            size.width = innerWidth;
            const _window3 = window;
            if (!innerHeight) {
              const _document5 = document;
              let clientHeight = document.documentElement;
              if (clientHeight) {
                const _document6 = document;
                clientHeight = document.documentElement.clientHeight;
              }
              innerHeight = clientHeight;
            }
            if (!innerHeight) {
              const _document7 = document;
              let clientHeight2 = document.body;
              if (clientHeight2) {
                const _document8 = document;
                clientHeight2 = document.body.clientHeight;
              }
              innerHeight = clientHeight2;
            }
            size.height = innerHeight;
            slimDOM.data = size;
            closure_2_103(slimDOM, flag);
            obj2 = navigation;
            navigation.reset();
            closure_44.init();
            const item = closure_87.forEach((lock) => lock.lock());
            const _document9 = document;
            slimDOM = { mirror: null, blockClass: null, blockSelector: null, unblockSelector: null, maskAllText: null, maskTextClass: null, unmaskTextClass: null, maskTextSelector: null, unmaskTextSelector: null, inlineStylesheet: null, maskAllInputs: null, maskAttributeFn: null, maskInputFn: null, maskTextFn: null, slimDOM: null, dataURLOptions: null, recordCanvas: null, inlineImages: null, onSerialize: null, onIframeLoad: null, onStylesheetLoad: null, onBlockedImageLoad: null, keepIframeSrcFn: null, ignoreCSSAttributes: null };
            obj4 = navigation;
            slimDOM.mirror = navigation;
            slimDOM.blockClass = str;
            slimDOM.blockSelector = blockSelector;
            slimDOM.unblockSelector = unblockSelector;
            slimDOM.maskAllText = maskAllText;
            slimDOM.maskTextClass = str3;
            slimDOM.unmaskTextClass = unmaskTextClass;
            slimDOM.maskTextSelector = maskTextSelector;
            slimDOM.unmaskTextSelector = unmaskTextSelector;
            slimDOM.inlineStylesheet = inlineStylesheet;
            slimDOM.maskAllInputs = maskInputOptions;
            slimDOM.maskAttributeFn = maskAttributeFn;
            slimDOM.maskInputFn = maskInputFn;
            slimDOM.maskTextFn = maskTextFn;
            slimDOM.slimDOM = slimDOM;
            slimDOM.dataURLOptions = dataURLOptions;
            slimDOM.recordCanvas = recordCanvas;
            slimDOM.inlineImages = inlineImages;
            slimDOM.onSerialize = function onSerialize(nodeName) {
              let meta = "IFRAME" === nodeName.nodeName;
              if (meta) {
                meta = closure_2_108.getMeta(nodeName);
              }
              if (Boolean(meta)) {
                closure_1_41.addIframe(nodeName);
              }
              let getAttribute = "LINK" === nodeName.nodeName;
              if (getAttribute) {
                getAttribute = nodeName.nodeType === nodeName.ELEMENT_NODE;
              }
              if (getAttribute) {
                getAttribute = nodeName.getAttribute;
              }
              if (getAttribute) {
                getAttribute = "stylesheet" === nodeName.getAttribute("rel");
              }
              if (getAttribute) {
                getAttribute = closure_2_108.getMeta(nodeName);
              }
              if (Boolean(getAttribute)) {
                closure_1_40.trackLinkElement(nodeName);
              }
              let shadowRoot;
              if (nodeName != null) {
                shadowRoot = nodeName.shadowRoot;
              }
              if (Boolean(shadowRoot)) {
                const _document = document;
                closure_1_44.addShadowRoot(nodeName.shadowRoot, document);
              }
            };
            slimDOM.onIframeLoad = function onIframeLoad(contentWindow, arg1) {
              closure_1_41.attachIframe(contentWindow, arg1);
              if (contentWindow.contentWindow) {
                closure_1_43.addWindow(contentWindow.contentWindow);
              }
              closure_1_44.observeAttachShadow(contentWindow);
            };
            slimDOM.onStylesheetLoad = function onStylesheetLoad(nodeName, attributes) {
              navigation.attachLinkElement(nodeName, attributes);
            };
            slimDOM.onBlockedImageLoad = function onBlockedImageLoad(arg0, id, width) {
              let attributes = { adds: [], removes: [], texts: [], attributes: null };
              attributes = { id: id.id, attributes: null };
              attributes = { style: null };
              const size = { width: "" + width.width + "px", height: "" + width.height + "px" };
              attributes.style = size;
              attributes.attributes = attributes;
              const items = [attributes];
              attributes.attributes = items;
              if (typeof wrappedMutationEmit === "function") {
                obj1 = { type: IncrementalSnapshot.IncrementalSnapshot, data: null };
                obj2 = { source: Mutation.Mutation };
                const merged = Object.assign(attributes);
                obj1.data = obj2;
                le(obj1);
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            };
            slimDOM.keepIframeSrcFn = keepIframeSrcFn;
            slimDOM.ignoreCSSAttributes = ignoreCSSAttributes;
            let mirror = slimDOM.mirror;
            if (undefined === mirror) {
              mirror = new closure_23();
            }
            const blockClass = slimDOM.blockClass;
            str = "rr-block";
            if (undefined !== blockClass) {
              str = blockClass;
            }
            blockSelector = slimDOM.blockSelector;
            let tmp31 = null;
            if (undefined !== blockSelector) {
              tmp31 = blockSelector;
            }
            unblockSelector = slimDOM.unblockSelector;
            let tmp32 = null;
            if (undefined !== unblockSelector) {
              tmp32 = unblockSelector;
            }
            maskAllText = slimDOM.maskAllText;
            const maskTextClass = slimDOM.maskTextClass;
            str2 = "rr-mask";
            if (undefined !== maskTextClass) {
              str2 = maskTextClass;
            }
            unmaskTextClass = slimDOM.unmaskTextClass;
            let tmp34 = null;
            if (undefined !== unmaskTextClass) {
              tmp34 = unmaskTextClass;
            }
            maskTextSelector = slimDOM.maskTextSelector;
            let tmp35 = null;
            if (undefined !== maskTextSelector) {
              tmp35 = maskTextSelector;
            }
            unmaskTextSelector = slimDOM.unmaskTextSelector;
            let tmp36 = null;
            if (undefined !== unmaskTextSelector) {
              tmp36 = unmaskTextSelector;
            }
            inlineStylesheet = slimDOM.inlineStylesheet;
            inlineImages = slimDOM.inlineImages;
            recordCanvas = slimDOM.recordCanvas;
            const maskAllInputs = slimDOM.maskAllInputs;
            obj1 = undefined !== maskAllInputs && maskAllInputs;
            slimDOM = slimDOM.slimDOM;
            let tmp40 = undefined !== slimDOM;
            ({ maskAttributeFn, maskTextFn, maskInputFn } = slimDOM);
            if (tmp40) {
              tmp40 = slimDOM;
            }
            ({ keepIframeSrcFn, dataURLOptions, preserveWhiteSpace, onSerialize, onIframeLoad, iframeLoadTimeout, onBlockedImageLoad, onStylesheetLoad, stylesheetLoadTimeout } = slimDOM);
            if (undefined === keepIframeSrcFn) {
              keepIframeSrcFn = () => false;
            }
            ignoreCSSAttributes = slimDOM.ignoreCSSAttributes;
            slimDOM = { doc: _document9, mirror, blockClass: str, blockSelector: tmp31, unblockSelector: tmp32, maskAllText: undefined !== maskAllText && maskAllText, maskTextClass: str2, unmaskTextClass: tmp34, maskTextSelector: tmp35, unmaskTextSelector: tmp36, skipChild: false, inlineStylesheet: undefined === inlineStylesheet || inlineStylesheet, maskInputOptions: null, maskAttributeFn: null, maskTextFn: null, maskInputFn: null, slimDOMOptions: null, dataURLOptions: null, inlineImages: null, recordCanvas: null, preserveWhiteSpace: null, onSerialize: null, onIframeLoad: null, iframeLoadTimeout: null, onBlockedImageLoad: null, onStylesheetLoad: null, stylesheetLoadTimeout: null, keepIframeSrcFn: null, newlyAddedElement: false, ignoreCSSAttributes: null };
            if (true === obj1) {
              obj1 = { color: true, date: true, "datetime-local": true, email: true, month: true, number: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true, textarea: true, select: true };
            } else if (false === obj1) {
              obj1 = {};
            }
            slimDOM.maskInputOptions = obj1;
            slimDOM.maskAttributeFn = maskAttributeFn;
            slimDOM.maskTextFn = maskTextFn;
            slimDOM.maskInputFn = maskInputFn;
            if (true !== tmp40) {
              if ("all" !== tmp40) {
                obj2 = tmp40;
                if (false === tmp40) {
                  obj2 = {};
                }
              }
              slimDOM.slimDOMOptions = obj2;
              slimDOM.dataURLOptions = dataURLOptions;
              slimDOM.inlineImages = tmp38;
              slimDOM.recordCanvas = tmp39;
              slimDOM.preserveWhiteSpace = preserveWhiteSpace;
              slimDOM.onSerialize = onSerialize;
              slimDOM.onIframeLoad = onIframeLoad;
              slimDOM.iframeLoadTimeout = iframeLoadTimeout;
              slimDOM.onBlockedImageLoad = onBlockedImageLoad;
              slimDOM.onStylesheetLoad = onStylesheetLoad;
              slimDOM.stylesheetLoadTimeout = stylesheetLoadTimeout;
              slimDOM.keepIframeSrcFn = keepIframeSrcFn;
              if (undefined === ignoreCSSAttributes) {
                const _Set = Set;
                ignoreCSSAttributes = new Set([]);
              }
              slimDOM.ignoreCSSAttributes = ignoreCSSAttributes;
              const tmp41Result = serializeNodeWithId(_document9, slimDOM);
              if (tmp41Result) {
                obj3 = { type: tmp2.FullSnapshot, data: null };
                obj4 = { node: tmp41Result, initialOffset: null };
                const _window4 = window;
                obj4.initialOffset = getWindowScroll(window);
                obj3.data = obj4;
                closure_2_103(obj3);
                const item1 = closure_87.forEach((unlock) => unlock.unlock());
                const _document10 = document;
                if (adoptedStyleSheets) {
                  const _document11 = document;
                  adoptedStyleSheets = document.adoptedStyleSheets.length > 0;
                }
                if (adoptedStyleSheets) {
                  const _document12 = document;
                  const _document13 = document;
                  obj2.adoptStyleSheets(document.adoptedStyleSheets, obj4.getId(document));
                }
              } else {
                const _console = console;
                return console.warn("Failed to snapshot the document");
              }
            }
            obj5 = { script: true, comment: true, headFavicon: true, headWhitespace: true, headMetaDescKeywords: "all" === tmp40, headMetaSocial: true, headMetaRobots: true, headMetaHttpEquiv: true, headMetaAuthorship: true, headMetaVerification: true };
            obj2 = obj5;
            tmp2 = obj1;
            const tmp33 = undefined !== maskAllText && maskAllText;
            const tmp37 = undefined === inlineStylesheet || inlineStylesheet;
            tmp38 = undefined !== inlineImages && inlineImages;
            tmp39 = undefined !== recordCanvas && recordCanvas;
          }
        };
      } else {
      }
      tmp66 = new closure_101();
      tmp59 = navigation;
    }
    obj5 = { mirror: tmp27, mutationCb: wrappedMutationEmit, stylesheetManager: tmp35, recordCrossOriginIframes: tmp11, wrappedEmit: le };
    tmp44 = new closure_100(obj5);
  }
  obj6 = { script: true, comment: true, headFavicon: true, headWhitespace: true, headMetaSocial: true, headMetaRobots: true, headMetaHttpEquiv: true, headMetaVerification: true, headMetaAuthorship: "all" === slimDOMOptions, headMetaDescKeywords: "all" === slimDOMOptions };
  slimDOMOptions = obj6;
  tmp25 = undefined !== mousemoveWait && undefined === sampling.mousemove;
  tmp27 = navigation;
}
function addBreadcrumbEvent(triggerUserActivity, category) {
  closure_0 = triggerUserActivity;
  closure_1 = category;
  if ("sentry.transaction" !== category.category) {
    const items = ["ui.click", "ui.input"];
    if (items.includes(category.category)) {
      triggerUserActivity.triggerUserActivity();
    } else {
      const result = triggerUserActivity.checkAndHandleExpiredSession();
    }
    triggerUserActivity.addUpdate(() => {
      data = { type: Custom.Custom, timestamp: null, data: null };
      let num = _null.timestamp;
      if (!num) {
        num = 0;
      }
      data.timestamp = 1000 * num;
      data = { tag: "breadcrumb", payload: null };
      const normalizer = f108031(map[8]);
      data.payload = normalizer.normalize(_null, 10, 1000);
      data.data = data;
      data.throttledAddEvent(data);
      return "console" === _null.category;
    });
  }
}
function getClickTargetNode(target) {
  let tmp = typeof target === "object";
  if (typeof target === "object") {
    tmp = target;
  }
  if (tmp) {
    tmp = "target" in target;
  }
  if (tmp) {
    target = target.target;
  }
  let tmp2 = target;
  if (target) {
    Element = globalThis.Element;
    tmp2 = target;
    if (target instanceof globalThis.Element) {
      tmp2 = target.closest("button,a") || target;
      const tmp4 = target.closest("button,a") || target;
    }
  }
  return tmp2;
}
function getTargetNode(target) {
  let tmp = typeof target === "object";
  if (typeof target === "object") {
    tmp = target;
  }
  if (tmp) {
    tmp = "target" in target;
  }
  if (tmp) {
    target = target.target;
  }
  return target;
}
function nowInSeconds() {
  return Date.now() / 1000;
}
function updateClickDetectorForRecordingEvent(registerMutation, data) {
  try {
    if ((function isIncrementalEvent(type) {
      return 3 === type.type;
    })(data)) {
      const source = data.data.source;
      if (set.has(source)) {
        registerMutation.registerMutation(data.timestamp);
      }
      if (tmp3 === obj2.Scroll) {
        registerMutation.registerScroll(data.timestamp);
      }
      if ((function isIncrementalMouseInteraction(data) {
        return data.data.source === MouseInteraction.MouseInteraction;
      })(data)) {
        data = data.data;
        const mirror = record.mirror;
        const node = mirror.getNode(data.id);
        let tmp13 = node instanceof globalThis.HTMLElement;
        if (tmp13) {
          tmp13 = data.type === obj3.Click;
        }
        if (tmp13) {
          registerMutation.registerClick(node);
        }
      }
      tmp3 = source;
    }
  } catch (err) {
  }
}
function getBaseDomBreadcrumb(arg0, message) {
  const mirror = record.mirror;
  const id = mirror.getId(arg0);
  let node = id;
  if (id) {
    const mirror2 = record.mirror;
    node = mirror2.getNode(id);
  }
  let meta = node;
  if (node) {
    const mirror3 = record.mirror;
    meta = mirror3.getMeta(node);
  }
  let tmp5 = null;
  if (meta) {
    tmp5 = null;
    if (meta.type === Element.Element) {
      tmp5 = meta;
    }
  }
  node = { message, data: null };
  if (tmp5) {
    node = { nodeId: id, node: null };
    node = { id, tagName: tmp5.tagName, textContent: null, attributes: null };
    const _Array = Array;
    const mapped = Array.from(tmp5.childNodes).map((type) => type.type === RN.Text && type.textContent);
    const _Boolean = Boolean;
    const found = mapped.filter(Boolean);
    const mapped1 = found.map((item) => item.trim());
    node.textContent = mapped1.join("");
    const attributes = tmp5.attributes;
    const prop = attributes["data-sentry-component"];
    let prop1 = !prop;
    if (!prop) {
      prop1 = attributes["data-sentry-element"];
    }
    if (prop1) {
      attributes["data-sentry-component"] = attributes["data-sentry-element"];
    }
    obj1 = {};
    for (const key10049 in attributes) {
      if (!set2.has(key10049)) {
        continue;
      } else {
        let tmp11 = "data-testid" !== key10049;
        if (tmp11) {
          tmp11 = "data-test-id" !== key10049;
        }
        let str5 = key10049;
        if (!tmp11) {
          str5 = "testId";
        }
        obj1[str5] = attributes[key10049];
        continue;
      }
      continue;
    }
    node.attributes = obj1;
    node.node = node;
    obj2 = node;
    const arr = Array.from(tmp5.childNodes);
  } else {
    obj2 = {};
  }
  node.data = obj2;
  return node;
}
function createPerformanceEntry(arg0) {
  let tmpResult = null;
  if (closure_1_123[arg0.entryType]) {
    tmpResult = tmp(arg0);
  }
  return tmpResult;
}
function getLargestContentfulPaint(arg0) {
  let element;
  if (arg0.entries[arg0.entries.length - 1] != null) {
    element = tmp.element;
  }
  let tmp3;
  if (element) {
    const items = [tmp.element];
    tmp3 = items;
  }
  ({ value, rating } = arg0);
  let data = _mod682;
  const result = ((data.browserPerformanceTimeOrigin() || _mod682.GLOBAL_OBJ.performance.timeOrigin) + value) / 1000;
  data = { type: "web-vital", name: "largest-contentful-paint", start: result, end: result, data: null };
  data = { value, size: value, rating, nodeIds: null, attributions: "fill" };
  let mapped;
  if (tmp3) {
    mapped = tmp3.map((item) => {
      mirror = mirror.mirror;
      return mirror.getId(item);
    });
  }
  data.nodeIds = mapped;
  data.data = data;
  return data;
}
function isLayoutShift(item10012) {
  return undefined !== item10012.sources;
}
function getCumulativeLayoutShift(rating) {
  const items = [];
  const items1 = [];
  for (const item10012 of tmp) {
    if (isLayoutShift(item10012)) {
      let items2 = [];
      let sources = item10012.sources;
      for (const item10023 of sources) {
        if (item10023.node) {
          let arr = items1.push(item10023.node);
          let mirror = record.mirror;
          let id = mirror.getId(item10023.node);
          if (id) {
            arr = items2.push(tmp11);
          }
        }
        continue;
      }
      obj = { value: item10012.value, nodeIds: null };
      let tmp17;
      if (items2.length) {
        tmp17 = items2;
      }
      obj.nodeIds = tmp17;
      let arr1 = items.push(obj);
    }
    continue;
  }
  return getWebVital(rating, "cumulative-layout-shift", items1, items);
}
function getInteractionToNextPaint(arg0) {
  let target;
  if (arg0.entries[arg0.entries.length - 1] != null) {
    target = tmp.target;
  }
  let tmp3;
  if (target) {
    const items = [tmp.target];
    tmp3 = items;
  }
  ({ value, rating } = arg0);
  let data = _mod682;
  const result = ((data.browserPerformanceTimeOrigin() || _mod682.GLOBAL_OBJ.performance.timeOrigin) + value) / 1000;
  data = { type: "web-vital", name: "interaction-to-next-paint", start: result, end: result, data: null };
  data = { value, size: value, rating, nodeIds: null, attributions: "fill" };
  let mapped;
  if (tmp3) {
    mapped = tmp3.map((item) => {
      mirror = mirror.mirror;
      return mirror.getId(item);
    });
  }
  data.nodeIds = mapped;
  data.data = data;
  return data;
}
function getWebVital(rating, name, items1, items) {
  value = rating.value;
  let data = _mod682;
  const result = ((data.browserPerformanceTimeOrigin() || _mod682.GLOBAL_OBJ.performance.timeOrigin) + value) / 1000;
  data = { type: "web-vital", name, start: result, end: result, data: null };
  data = { value, size: value, rating: rating.rating, nodeIds: null, attributions: null };
  let mapped;
  if (items1) {
    mapped = items1.map((item) => {
      mirror = mirror.mirror;
      return mirror.getId(item);
    });
  }
  data.nodeIds = mapped;
  data.attributions = items;
  data.data = data;
  return data;
}
function hasSessionStorage() {
  try {
    let sessionStorage = "sessionStorage" in _mod682.GLOBAL_OBJ;
    if (sessionStorage) {
      sessionStorage = _mod682.GLOBAL_OBJ.sessionStorage;
    }
    return sessionStorage;
  } catch (err) {
    return false;
  }
}
function clearSession(arg0) {
  (function deleteSession() {
    if (hasSessionStorage()) {
      try {
        const sessionStorage = require("module_682").GLOBAL_OBJ.sessionStorage;
        sessionStorage.removeItem(sentryReplaySession);
      } catch (err) {
      }
    }
  })();
  arg0.session = undefined;
}
function saveSession(session) {
  if (hasSessionStorage()) {
    try {
      const sessionStorage = _mod682.GLOBAL_OBJ.sessionStorage;
      const _JSON = JSON;
      const result = sessionStorage.setItem(sentryReplaySession, JSON.stringify(session));
    } catch (err) {
    }
  }
}
function makeSession(id) {
  const timestamp = Date.now();
  id = id.id;
  if (!id) {
    obj = _mod682;
    id = obj.uuid4();
  }
  obj = { id, started: id.started || timestamp, lastActivity: id.lastActivity || timestamp, segmentId: id.segmentId || 0, sampled: id.sampled, previousSessionId: id.previousSessionId, dirty: id.dirty || false };
  return obj;
}
function createSession(allowBuffering) {
  ({ sessionSampleRate, stickySession } = allowBuffering);
  if (stickySession === undefined) {
    stickySession = false;
  }
  obj = session;
  if (session === undefined) {
    obj = {};
  }
  let tmp = undefined !== sessionSampleRate;
  if (tmp) {
    const _Math = Math;
    tmp = Math.random() < sessionSampleRate;
  }
  let str = "session";
  if (!tmp) {
    str = allowBuffering.allowBuffering && "buffer";
    const tmp3 = allowBuffering.allowBuffering && "buffer";
  }
  obj = { sampled: str, previousSessionId: obj.previousSessionId };
  const timestamp = Date.now();
  let id = obj.id;
  if (!id) {
    id = _mod682.uuid4();
  }
  obj = { id, started: obj.started || timestamp, lastActivity: obj.lastActivity || timestamp, segmentId: obj.segmentId || 0, sampled: obj.sampled, previousSessionId: obj.previousSessionId, dirty: obj.dirty || false };
  if (stickySession) {
    saveSession(obj);
  }
  return obj;
}
function isSessionExpired(started, arg1) {
  ({ maxReplayDuration, sessionIdleExpire, targetTime } = arg1);
  if (targetTime === undefined) {
    const _Date = Date;
    targetTime = Date.now();
  }
  started = started.started;
  let tmp3 = targetTime;
  if (targetTime === undefined) {
    const _Date2 = Date;
    const date = new Date();
    tmp3 = +date;
  }
  let tmp9 = null === started || undefined === maxReplayDuration;
  if (!tmp9) {
    tmp9 = maxReplayDuration < 0;
  }
  if (!tmp9) {
    tmp9 = 0 !== maxReplayDuration && started + maxReplayDuration <= tmp3;
    const tmp10 = 0 !== maxReplayDuration && started + maxReplayDuration <= tmp3;
  }
  if (!tmp9) {
    const lastActivity = started.lastActivity;
    if (!tmp2) {
      const _Date3 = Date;
      const date1 = new Date();
      targetTime = +date1;
    }
    let tmp16 = null === lastActivity || undefined === sessionIdleExpire;
    if (!tmp16) {
      tmp16 = sessionIdleExpire < 0;
    }
    if (!tmp16) {
      tmp16 = 0 !== sessionIdleExpire && lastActivity + sessionIdleExpire <= targetTime;
      const tmp17 = 0 !== sessionIdleExpire && lastActivity + sessionIdleExpire <= targetTime;
    }
    tmp9 = tmp16;
  }
  return tmp9;
}
function loadOrCreateSession(arg0, stickySession) {
  stickySession = stickySession.stickySession;
  ({ sessionIdleExpire, maxReplayDuration, previousSessionId } = arg0);
  if (stickySession) {
    stickySession = (function fetchSession() {
      if (hasSessionStorage()) {
        try {
          const sessionStorage = require("module_682").GLOBAL_OBJ.sessionStorage;
          value = sessionStorage.getItem(sentryReplaySession);
          if (value) {
            const _JSON = JSON;
            const parsed = JSON.parse(value);
            if (closure_1_130) {
              closure_1_133.infoTick("Loading existing session");
            }
            return makeSession(parsed);
          } else {
            return null;
          }
        } catch (err) {
          return null;
        }
      } else {
        return null;
      }
    })();
  }
  if (stickySession) {
    obj = { sessionIdleExpire, maxReplayDuration };
    let tmp7 = isSessionExpired(stickySession, obj);
    if (tmp7) {
      let tmp8 = "buffer" !== stickySession.sampled;
      if (!tmp8) {
        tmp8 = 0 !== stickySession.segmentId;
      }
      tmp7 = tmp8;
    }
    let tmp9 = stickySession;
    if (tmp7) {
      if (closure_1_130) {
        closure_1_133.infoTick("Session in sessionStorage is expired, creating new one...");
      }
      obj = { previousSessionId: stickySession.id };
      tmp9 = createSession(stickySession, obj);
    }
    let tmp5 = tmp9;
  } else {
    if (closure_1_130) {
      closure_1_133.infoTick("Creating new session");
    }
    obj = { previousSessionId };
    tmp5 = createSession(stickySession, obj);
  }
  return tmp5;
}
function addEventSync(eventBuffer, timestamp, c1) {
  let flag = false;
  if (eventBuffer.eventBuffer) {
    flag = false;
    if (!eventBuffer.isPaused()) {
      flag = false;
      if (eventBuffer.isEnabled()) {
        timestamp = timestamp.timestamp;
        let result = timestamp;
        if (timestamp <= 9999999999) {
          result = 1000 * timestamp;
        }
        const _Date = Date;
        const sum = result + eventBuffer.timeouts.sessionIdlePause;
        let tmp4 = sum >= Date.now();
        if (tmp4) {
          let flag2 = result <= eventBuffer.getContext().initialTimestamp + eventBuffer.getOptions().maxReplayDuration;
          if (!flag2) {
            flag2 = false;
            if (closure_1_130) {
              const _HermesInternal = HermesInternal;
              closure_1_133.infoTick("Skipping event with timestamp " + result + " because it is after maxReplayDuration");
              flag2 = false;
            }
          }
          tmp4 = flag2;
        }
        flag = tmp4;
      }
    }
  }
  let flag3 = flag;
  if (flag3) {
    _addEvent(eventBuffer, timestamp, c1);
    flag3 = true;
  }
  return flag3;
}
function _addEvent(eventBuffer, timestamp, c1) {
  const self = this;
  const apply = closure_148.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_148 = async function _addEvent3(arg0, arg1, arg2) {
  let eventBuffer = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp5;
            closure_131_0 = eventBuffer;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            closure_131_4 = undefined;
            let client;
            closure_131_6 = undefined;
            eventBuffer = eventBuffer.eventBuffer;
            closure_131_1 = eventBuffer;
            if (eventBuffer) {
              closure_131_2 = tmp38;
              c6 = 1;
              let tmp39 = closure_2;
              if (closure_2) {
                tmp39 = tmp38;
              }
              if (tmp39) {
                eventBuffer.clear();
              }
              if (closure_2) {
                eventBuffer.hasCheckout = true;
                eventBuffer.waitForCheckout = false;
              }
              const tmp41 = (function maybeApplyCallback(type, beforeAddRecordingEvent) {
                try {
                  if (typeof beforeAddRecordingEvent === "function") {
                    if ((function isCustomEvent(type) {
                      return type.type === Custom.Custom;
                    })(type)) {
                      return beforeAddRecordingEvent(type);
                    }
                  }
                  return type;
                } catch (tmp3) {
                  if (closure_1_130) {
                    closure_1_133.exception(tmp3, "An error occurred in the `beforeAddRecordingEvent` callback, skipping the event...");
                  }
                  return null;
                }
              })(tmp49, obj10.getOptions().beforeAddRecordingEvent);
              if (tmp41) {
                c7 = 2;
                c8 = 1;
                obj1 = { value: eventBuffer.addEvent(tmp41), done: false };
                return obj1;
              } else {
                c6 = 0;
                c8 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
            c8 = 3;
            return { value: null, done: true };
          }
        } else if (1 === tmp8) {
          c6 = 0;
          closure_131_7 = closure_5;
          let tmp12 = closure_131_7;
          if (closure_131_7) {
            tmp12 = closure_131_7 instanceof closure_132_134;
          }
          closure_131_3 = tmp12;
          let str = "addEvent";
          if (closure_131_3) {
            str = "addEventSizeExceeded";
          }
          closure_131_4 = str;
          obj3 = closure_132_0(closure_132_1[8]);
          client = obj3.getClient();
          if (client) {
            let str2 = "internal_sdk_error";
            if (closure_131_3) {
              str2 = "buffer_overflow";
            }
            closure_131_6 = str2;
            client.recordDroppedEvent(closure_131_6, "replay");
          }
          if (closure_131_3) {
            if (closure_131_2) {
              closure_131_1.clear();
              closure_131_1.waitForCheckout = true;
              c8 = 3;
              return { value: null, done: true };
            }
          }
          closure_131_0.handleException(closure_131_7);
          obj2 = { reason: closure_131_4 };
          c7 = 3;
          c8 = 1;
          obj3 = { value: closure_131_0.stop(obj2), done: false };
          return obj3;
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            obj4 = { value, done: true };
            return obj4;
          } else {
            c6 = 0;
            c8 = 3;
            obj5 = { value, done: true };
            return obj5;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c8 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp42) {
        closure_5 = tmp42;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp42;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
function resetReplayIdOnDynamicSamplingContext() {
  const currentScope = _mod682.getCurrentScope();
  if (currentScope.getPropagationContext().dsc) {
    delete tmp4[tmp3];
  }
  let tmp5Result = _mod682;
  const activeSpan = tmp5Result.getActiveSpan();
  if (activeSpan) {
    tmp5Result = _mod682;
    const dynamicSamplingContextFromSpan = tmp5Result.getDynamicSamplingContextFromSpan(activeSpan);
    delete tmp2[tmp];
  }
}
function createPerformanceSpans(arg0, arr) {
  closure_0 = arg0;
  return arr.map((op) => {
    const start = op.start;
    data = { type: Custom.Custom, timestamp: start, data: null };
    data = { tag: "performanceSpan", payload: { op: op.type, description: op.name, startTimestamp: start, endTimestamp: op.end, data: op.data } };
    data.data = data;
    let throttledAddEventResult = closure_0.throttledAddEvent(data);
    if (typeof throttledAddEventResult === "string") {
      throttledAddEventResult = Promise.resolve(null);
    }
    return throttledAddEventResult;
  });
}
function addNetworkBreadcrumb(isEnabled, name) {
  _require = isEnabled;
  dependencyMap = name;
  let isEnabledResult = isEnabled.isEnabled();
  if (isEnabledResult) {
    isEnabledResult = null !== name;
  }
  if (isEnabledResult) {
    let isSentryRequestUrlResult = !closure_130;
    if (closure_130) {
      isSentryRequestUrlResult = !isEnabled.getOptions()._experiments.traceInternals;
    }
    if (isSentryRequestUrlResult) {
      obj = require("module_682");
      isSentryRequestUrlResult = obj.isSentryRequestUrl(name.name, require("module_682").getClient());
      obj2 = require("module_682");
    }
    if (!isSentryRequestUrlResult) {
      isEnabled.addUpdate(() => {
        const items = [closure_1];
        const mapped = items.map((op) => {
          const start = op.start;
          data = { type: Custom.Custom, timestamp: start, data: null };
          data = { tag: "performanceSpan", payload: { op: op.type, description: op.name, startTimestamp: start, endTimestamp: op.end, data: op.data } };
          data.data = data;
          let throttledAddEventResult = closure_0.throttledAddEvent(data);
          if (typeof throttledAddEventResult === "string") {
            throttledAddEventResult = Promise.resolve(null);
          }
          return throttledAddEventResult;
        });
        return true;
      });
    }
  }
}
function getBodySize(size) {
  if (size) {
    const _TextEncoder = TextEncoder;
    const encoder = new TextEncoder();
    try {
      if (typeof size === "string") {
        return encoder.encode(size).length;
      } else {
        const _URLSearchParams = URLSearchParams;
        if (size instanceof URLSearchParams) {
          return encoder.encode(size.toString()).length;
        } else {
          const _FormData = FormData;
          if (size instanceof FormData) {
            return encoder.encode(triggerHandlers.serializeFormData(size)).length;
          } else {
            const _Blob = Blob;
            if (size instanceof Blob) {
              return size.size;
            } else {
              const _ArrayBuffer = ArrayBuffer;
              if (size instanceof ArrayBuffer) {
                return size.byteLength;
              }
            }
          }
        }
      }
    } catch (err) {
    }
  }
}
function mergeWarning(_meta, arg1) {
  _meta = {};
  if (_meta) {
    const merged = Object.assign(_meta._meta);
    const tmp3 = _meta.warnings || [];
    const items = [];
    items[HermesBuiltin.arraySpread(tmp3, 0)] = arg1;
    _meta.warnings = items;
    _meta._meta = _meta;
    return _meta;
  } else {
    _meta = { headers: null, size: "Array", _meta: -1 };
    _meta.headers = _meta;
    _meta = { warnings: null };
    const items1 = [arg1];
    _meta.warnings = items1;
    _meta._meta = _meta;
    return _meta;
  }
}
function makeNetworkReplayBreadcrumb(type, startTimestamp) {
  let tmp = null;
  if (startTimestamp) {
    let data = { type, start: startTimestamp.startTimestamp / 1000, end: startTimestamp.endTimestamp / 1000, name: startTimestamp.url, data: null };
    data = { method: null, statusCode: null, request: null, response: null };
    ({ method: obj2.method, statusCode: obj2.statusCode, request: obj2.request, response: obj2.response } = startTimestamp);
    data.data = data;
    tmp = data;
  }
  return tmp;
}
function buildSkippedNetworkRequestOrResponse(size) {
  return { headers: {}, size, _meta: { warnings: ["URL_SKIPPED"] } };
}
function buildNetworkRequestOrResponse(headers, size, body) {
  if (!size) {
    const _Object = Object;
  }
  if (size) {
    let _meta = { headers, size };
    if (body) {
      ({ warnings, body: obj2.body } = (function normalizeNetworkBody(body) {
        if (body) {
          if (typeof body === "string") {
            const tmp7 = (function _strIsProbablyJson(body) {
              const first = body[0];
              let tmp3 = "[" === first;
              if (tmp3) {
                tmp3 = "]" === tmp2;
              }
              if (!tmp3) {
                let tmp4 = "{" === first;
                if (tmp4) {
                  tmp4 = "}" === tmp2;
                }
                tmp3 = tmp4;
              }
              return tmp3;
            })(body);
            if (tmp6) {
              const substr = body.slice(0, closure_1_12);
              obj = { body: null, warnings: null };
              if (tmp7) {
                obj.body = substr;
                obj.warnings = ["MAYBE_JSON_TRUNCATED"];
                let tmp4 = obj;
              } else {
                const _HermesInternal = HermesInternal;
                obj.body = "" + substr + "\u2026";
                obj.warnings = ["TEXT_TRUNCATED"];
                tmp4 = obj;
              }
              return tmp4;
            } else if (!tmp7) {
              obj = { body };
              return obj;
            } else {
              try {
                obj = { body: null };
                const _JSON = JSON;
                obj.body = JSON.parse(body);
                return obj;
              } catch (err) {
              }
            }
            tmp6 = body.length > closure_1_12;
          }
        }
        return { body };
      })(body));
      let length;
      if (warnings != null) {
        length = warnings.length;
      }
      if (length) {
        _meta = { warnings };
        _meta._meta = _meta;
      }
      return _meta;
    } else {
      return _meta;
    }
  } else {
    _meta = { headers };
    return _meta;
  }
}
function urlMatches(str, networkDetailAllowUrls) {
  const baseURI = _mod682.GLOBAL_OBJ.document.baseURI;
  let substr = str;
  if (!str.startsWith("http://")) {
    substr = str;
    if (!"https://".startsWith("https://")) {
      substr = str;
      if (!str.startsWith(_mod682.GLOBAL_OBJ.location.origin)) {
        const _URL = URL;
        const uRL = new URL(str, baseURI);
        const _URL2 = URL;
        const uRL1 = new URL(baseURI);
        substr = str;
        if (uRL.origin === uRL1.origin) {
          const href = uRL.href;
          substr = href;
          if (!str.endsWith("/")) {
            substr = href;
            if (href.endsWith("/")) {
              substr = href.slice(0, -1);
            }
          }
        }
      }
    }
  }
  return _mod682.stringMatchesSomePattern(substr, networkDetailAllowUrls);
}
let closure_158 = async function _captureFetchBreadcrumbToReplay(arg0) {
  closure_4 = tmp3;
  closure_131_0 = closure_2;
  await (function _prepareFetchData(arg0, arg1, arg2) {
    const self = this;
    const apply = closure_1_159.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(closure_0, closure_1, closure_2);
  if (1 === tmp7) {
    c6 = 0;
    closure_131_3 = closure_5;
    if (closure_132_130) {
      closure_132_133.exception(closure_131_3, "Failed to capture fetch breadcrumb");
    }
    c8 = 3;
  } else if (arg0 === 1) {
    c8 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_131_1 = value;
    closure_131_2 = closure_132_154("resource.fetch", closure_131_1);
    closure_132_151(closure_131_0.replay, closure_131_2);
    c6 = 0;
  }
  return value;
};
let closure_159 = async function _prepareFetchData2(arg0, arg1, arg2) {
  let data = arg0;
  let startTimestamp = arg1;
  closure_2 = arg2;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value, arg2) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp2;
            closure_131_0 = undefined;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            closure_131_4 = undefined;
            closure_131_5 = undefined;
            closure_131_6 = undefined;
            const _Date = Date;
            const timestamp = Date.now();
            startTimestamp = startTimestamp.startTimestamp;
            if (undefined === startTimestamp) {
              startTimestamp = timestamp;
            }
            closure_131_0 = startTimestamp;
            let endTimestamp = tmp28.endTimestamp;
            if (undefined === endTimestamp) {
              endTimestamp = timestamp;
            }
            closure_131_1 = endTimestamp;
            data = data.data;
            const url = data.url;
            closure_131_2 = url;
            ({ method: closure_131_3, status_code } = data);
            if (undefined === status_code) {
              status_code = 0;
            }
            closure_131_4 = status_code;
            ({ request_body_size, response_body_size } = data);
            let tmp15 = urlMatches(url, closure_2.networkDetailAllowUrls);
            if (tmp15) {
              tmp15 = !urlMatches(url, closure_2.networkDetailDenyUrls);
            }
            if (tmp15) {
              let tmp17 = (function _getRequestInfo(networkRequestHeaders, input, request_body_size) {
                let prop = networkRequestHeaders.networkRequestHeaders;
                if (input) {
                  if (1 === input.length) {
                    if (typeof input[0] !== "string") {
                      const first = input[0];
                      if (!first) {
                        let headers = {};
                      }
                      headers = first.headers;
                      if (!headers) {
                        headers = {};
                      }
                      const _Headers2 = Headers;
                      if (headers instanceof Headers) {
                        let headers1 = headers;
                        headers = {};
                        prop = headers;
                        const item = prop.forEach((item) => {
                          if (headers1.get(item)) {
                            prop[item] = headers1.get(item);
                          }
                        });
                      } else {
                        const _Array2 = Array;
                        if (Array.isArray(headers)) {
                          obj1 = {};
                        } else {
                          headers1 = headers;
                          const _Object2 = Object;
                          const entries = Object.entries(headers);
                          obj1 = entries.reduce((acc, item) => {
                            [str, tmp] = item;
                            const formatted = str.toLowerCase();
                            let hasItem = networkResponseHeaders.includes(formatted);
                            if (hasItem) {
                              hasItem = request_headers[str];
                            }
                            if (hasItem) {
                              acc[formatted] = tmp;
                            }
                            return acc;
                          }, {});
                        }
                      }
                    }
                  }
                  if (2 === input.length) {
                    if (input[1]) {
                      headers1 = tmp2.headers;
                      const _Headers = Headers;
                      if (headers1 instanceof Headers) {
                        headers1 = {};
                        prop = headers1;
                        const item1 = prop.forEach((item) => {
                          if (headers1.get(item)) {
                            prop[item] = headers1.get(item);
                          }
                        });
                      } else {
                        const _Array = Array;
                        if (Array.isArray(headers1)) {
                          obj3 = {};
                        } else {
                          const _Object = Object;
                          const entries1 = Object.entries(headers1);
                          obj3 = entries1.reduce((acc, item) => {
                            [str, tmp] = item;
                            const formatted = str.toLowerCase();
                            let hasItem = networkResponseHeaders.includes(formatted);
                            if (hasItem) {
                              hasItem = request_headers[str];
                            }
                            if (hasItem) {
                              acc[formatted] = tmp;
                            }
                            return acc;
                          }, {});
                        }
                      }
                    } else {
                      obj4 = {};
                    }
                  } else {
                    obj4 = {};
                  }
                } else {
                  headers = {};
                  if (tmp) {
                    let obj11 = data(898);
                    const fetchRequestArgBody = obj11.getFetchRequestArgBody(input);
                    let obj12 = data(898);
                    [tmp20, tmp21] = closure_1_6(obj12.getBodyString(fetchRequestArgBody, closure_1_133), 2);
                    if (request_body_size) {
                      if (request_body_size) {
                        obj5 = { headers, size: request_body_size };
                        if (tmp20) {
                          ({ warnings, body: obj15.body } = (function normalizeNetworkBody(body) {
                            if (body) {
                              if (typeof body === "string") {
                                const tmp7 = (function _strIsProbablyJson(body) {
                                  const first = body[0];
                                  let tmp3 = "[" === first;
                                  if (tmp3) {
                                    tmp3 = "]" === tmp2;
                                  }
                                  if (!tmp3) {
                                    let tmp4 = "{" === first;
                                    if (tmp4) {
                                      tmp4 = "}" === tmp2;
                                    }
                                    tmp3 = tmp4;
                                  }
                                  return tmp3;
                                })(body);
                                if (tmp6) {
                                  const substr = body.slice(0, closure_1_12);
                                  obj = { body: null, warnings: null };
                                  if (tmp7) {
                                    obj.body = substr;
                                    obj.warnings = ["MAYBE_JSON_TRUNCATED"];
                                    let tmp4 = obj;
                                  } else {
                                    const _HermesInternal = HermesInternal;
                                    obj.body = "" + substr + "\u2026";
                                    obj.warnings = ["TEXT_TRUNCATED"];
                                    tmp4 = obj;
                                  }
                                  return tmp4;
                                } else if (!tmp7) {
                                  obj = { body };
                                  return obj;
                                } else {
                                  try {
                                    obj = { body: null };
                                    const _JSON = JSON;
                                    obj.body = JSON.parse(body);
                                    return obj;
                                  } catch (err) {
                                  }
                                }
                                tmp6 = body.length > closure_1_12;
                              }
                            }
                            return { body };
                          })(tmp20));
                          let length;
                          if (warnings != null) {
                            length = warnings.length;
                          }
                          let tmp23 = obj5;
                          if (length) {
                            const obj6 = { warnings };
                            obj5._meta = obj6;
                            tmp23 = obj5;
                          }
                          const tmp24 = (function normalizeNetworkBody(body) {
                            if (body) {
                              if (typeof body === "string") {
                                const tmp7 = (function _strIsProbablyJson(body) {
                                  const first = body[0];
                                  let tmp3 = "[" === first;
                                  if (tmp3) {
                                    tmp3 = "]" === tmp2;
                                  }
                                  if (!tmp3) {
                                    let tmp4 = "{" === first;
                                    if (tmp4) {
                                      tmp4 = "}" === tmp2;
                                    }
                                    tmp3 = tmp4;
                                  }
                                  return tmp3;
                                })(body);
                                if (tmp6) {
                                  const substr = body.slice(0, closure_1_12);
                                  obj = { body: null, warnings: null };
                                  if (tmp7) {
                                    obj.body = substr;
                                    obj.warnings = ["MAYBE_JSON_TRUNCATED"];
                                    let tmp4 = obj;
                                  } else {
                                    const _HermesInternal = HermesInternal;
                                    obj.body = "" + substr + "\u2026";
                                    obj.warnings = ["TEXT_TRUNCATED"];
                                    tmp4 = obj;
                                  }
                                  return tmp4;
                                } else if (!tmp7) {
                                  obj = { body };
                                  return obj;
                                } else {
                                  try {
                                    obj = { body: null };
                                    const _JSON = JSON;
                                    obj.body = JSON.parse(body);
                                    return obj;
                                  } catch (err) {
                                  }
                                }
                                tmp6 = body.length > closure_1_12;
                              }
                            }
                            return { body };
                          })(tmp20);
                        } else {
                          tmp23 = obj5;
                        }
                      } else {
                        const obj7 = { headers };
                        tmp23 = obj7;
                      }
                    } else {
                      const _Object4 = Object;
                    }
                    if (tmp21) {
                      const obj8 = {};
                      if (tmp23) {
                        const merged = Object.assign(tmp23._meta);
                        const tmp29 = obj8.warnings || [];
                        const items = [];
                        items[HermesBuiltin.arraySpread(tmp29, 0)] = tmp21;
                        obj8.warnings = items;
                        tmp23._meta = obj8;
                        let obj9 = tmp23;
                      } else {
                        obj9 = { headers: obj8, size: "Array", _meta: -1 };
                        const obj10 = { warnings: null };
                        const items1 = [tmp21];
                        obj10.warnings = items1;
                        obj9._meta = obj10;
                      }
                      return obj9;
                    } else {
                      return tmp23;
                    }
                    const tmp19 = closure_1_6(obj12.getBodyString(fetchRequestArgBody, closure_1_133), 2);
                  } else {
                    if (request_body_size) {
                      if (request_body_size) {
                        obj11 = { headers, size: request_body_size };
                        let tmp13 = obj11;
                      } else {
                        obj12 = { headers };
                        tmp13 = obj12;
                      }
                    } else {
                      const _Object3 = Object;
                    }
                    return tmp13;
                  }
                }
              })(closure_2, tmp28.input, request_body_size);
            } else {
              tmp17 = buildSkippedNetworkRequestOrResponse(request_body_size);
            }
            closure_131_5 = tmp17;
            (function _getResponseInfo(arg0, arg1, response, response_body_size) {
              const self = this;
              const apply = closure_1_160.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(tmp15, closure_2, startTimestamp.response, response_body_size);
            c4 = 1;
            c5 = 1;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj1 = { value, done: true };
          return obj1;
        } else {
          closure_131_6 = value;
          const request = { startTimestamp: closure_131_0, endTimestamp: closure_131_1, url: closure_131_2, method: closure_131_3, statusCode: closure_131_4, request: closure_131_5, response: closure_131_6 };
          c5 = 3;
          obj2 = { value: request, done: true };
          return obj2;
        }
      } catch (tmp22) {
        c5 = tmp;
        throw tmp22;
      }
    }
  })();
};
let closure_160 = async function _getResponseInfo2(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = tmp5;
          closure_4 = tmp2;
          closure_132_1 = undefined;
          closure_132_2 = undefined;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          closure_132_0 = closure_0;
          ({ networkCaptureBodies: closure_132_1, networkResponseHeaders: closure_132_2 } = closure_1);
          closure_132_3 = closure_2;
          closure_132_4 = closure_3;
          closure_132_5 = undefined;
          closure_132_6 = undefined;
          closure_132_7 = undefined;
          closure_132_8 = undefined;
          closure_132_9 = undefined;
          closure_132_10 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj1 = { value, done: true };
          return obj1;
        } else {
          if (!closure_132_0) {
            if (undefined !== closure_132_4) {
              c7 = 3;
              obj2 = { value: closure_133_155(closure_132_4), done: true };
              return obj2;
            }
          }
          if (closure_132_3) {
            obj3 = closure_133_162(closure_132_3.headers, closure_132_2);
          } else {
            obj3 = {};
          }
          closure_132_5 = obj3;
          if (closure_132_3) {
            c6 = 2;
            c7 = 1;
            obj4 = {
              value: (function _parseFetchResponseBody(arg0) {
                          const self = this;
                          const apply = closure_1_161.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(closure_132_3),
              done: false
            };
            return obj4;
          }
          c7 = 3;
          obj5 = { value: closure_133_156(closure_132_5, closure_132_4, undefined), done: true };
          return obj5;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_132_6 = value;
        closure_132_7 = closure_133_6(closure_132_6, 2);
        closure_132_8 = closure_132_7[0];
        closure_132_9 = closure_132_7[1];
        const obj6 = { networkCaptureBodies: closure_132_1, responseBodySize: closure_132_4, captureDetails: closure_132_0, headers: closure_132_5 };
        closure_132_10 = (function getResponseData(arg0, responseBodySize) {
          responseBodySize = responseBodySize.responseBodySize;
          try {
            let length;
            if (arg0 != null) {
              length = arg0.length;
            }
            if (length) {
              if (undefined === responseBodySize) {
                const tmp10 = closure_1_152(arg0);
              }
            }
            if (tmp5) {
              let tmp18;
              if (tmp4) {
                tmp18 = arg0;
              }
              let tmp16Result = closure_1_156(tmp6, tmp12, tmp18);
            } else {
              tmp16Result = closure_1_155(tmp12);
            }
            return tmp16Result;
          } catch (tmp19) {
            if (closure_1_130) {
              closure_1_133.exception(tmp19, "Failed to serialize response body");
            }
            return closure_1_156(tmp2, tmp3, tmp);
          }
        })(closure_132_8, obj6);
        if (closure_132_9) {
          closure_133_153(closure_132_10, closure_132_9);
        }
        c7 = 3;
      }
    } catch (tmp30) {
      c7 = tmp;
      throw tmp30;
    }
  }
};
let closure_161 = async function _parseFetchResponseBody2(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          const tmp28 = (function _tryCloneResponse(clone) {
            try {
              return clone.clone();
            } catch (tmp2) {
              if (closure_1_130) {
                closure_1_133.exception(tmp2, "Failed to clone response body");
              }
            }
          })(closure_0);
          if (tmp28) {
            c4 = 1;
            c5 = 2;
            c6 = 1;
            obj1 = {
              value: (function _tryGetResponseText(arg0) {
                          closure_0 = arg0;
                          return new Promise((arg0, arg1) => {
                            closure_0 = arg0;
                            closure_1 = arg1;
                            const timeout = closure_2_0(dependencyMap[9]).setTimeout(() => {
                              const error = new Error("Timeout while trying to read response body");
                              return closure_1(error);
                            }, 500);
                            obj = closure_2_0(dependencyMap[9]);
                            const promise = (function _getResponseText(arg0) {
                              const self = this;
                              const apply = closure_1_163.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            })(closure_0);
                            (function _getResponseText(arg0) {
                              const self = this;
                              const apply = closure_1_163.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            })(closure_0).then((result) => closure_0(result), (arg0) => closure_1(arg0)).finally(() => clearTimeout(closure_2));
                          });
                        })(tmp28),
              done: false
            };
            return obj1;
          } else {
            const items = [undefined, "BODY_PARSE_ERROR"];
            c6 = 3;
            obj2 = { value: items, done: true };
            return obj2;
          }
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_1 = closure_3;
        const _Error = Error;
        if (!(closure_129_1 instanceof Error)) {
          if (closure_130_130) {
            closure_130_133.exception(closure_129_1, "Failed to get text body from response");
          }
          const items1 = [undefined, "BODY_PARSE_ERROR"];
          c6 = 3;
        } else {
          const message = closure_129_1.message;
        }
        if (closure_130_130) {
          closure_130_133.warn("Parsing text body from response timed out");
        }
        const items2 = [undefined, "BODY_PARSE_TIMEOUT"];
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        obj3 = { value, done: true };
        return obj3;
      } else {
        closure_129_0 = value;
        const items3 = [closure_129_0];
        c4 = 0;
        c6 = 3;
        obj = { value: items3, done: true };
        return obj;
      }
    } catch (tmp29) {
      closure_3 = tmp29;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp29;
      } else {
        c5 = tmp;
      }
    }
  }
};
function getAllHeaders(arg0, arr) {
  closure_0 = arg0;
  obj = {};
  const item = arr.forEach((item) => {
    if (headers1.get(item)) {
      prop[item] = headers1.get(item);
    }
  });
  return obj;
}
let closure_163 = async function _getResponseText2() {
  await closure_0.text();
  return value;
};
let closure_164 = async function _captureXhrBreadcrumbToReplay(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  let replay = arg2;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp3;
            c6 = 1;
            addNetworkBreadcrumb(replay.replay, makeNetworkReplayBreadcrumb("resource.xhr", (function _prepareXhrData(data, startTimestamp, networkDetailAllowUrls) {
              const timestamp = Date.now();
              startTimestamp = startTimestamp.startTimestamp;
              if (undefined === startTimestamp) {
                startTimestamp = timestamp;
              }
              let endTimestamp = startTimestamp.endTimestamp;
              if (undefined === endTimestamp) {
                endTimestamp = timestamp;
              }
              const xhr = startTimestamp.xhr;
              data = data.data;
              ({ url, method, status_code } = data);
              let num = 0;
              if (undefined !== status_code) {
                num = status_code;
              }
              ({ request_body_size, response_body_size } = data);
              if (url) {
                if (xhr) {
                  if (closure_1_157(url, networkDetailAllowUrls.networkDetailAllowUrls)) {
                    if (!closure_1_157(url, networkDetailAllowUrls.networkDetailDenyUrls)) {
                      let tmp7 = xhr[closure_1_0(undefined, dependencyMap[9]).SENTRY_XHR_DATA_KEY];
                      if (tmp7) {
                        let request_headers = tmp7.request_headers;
                        let networkResponseHeaders = networkDetailAllowUrls.networkRequestHeaders;
                        const _Object = Object;
                        const entries = Object.entries(request_headers);
                        let reduced = entries.reduce((acc, item) => {
                          [str, tmp] = item;
                          const formatted = str.toLowerCase();
                          let hasItem = networkResponseHeaders.includes(formatted);
                          if (hasItem) {
                            hasItem = request_headers[str];
                          }
                          if (hasItem) {
                            acc[formatted] = tmp;
                          }
                          return acc;
                        }, {});
                      } else {
                        reduced = {};
                      }
                      let tmp5Result = closure_1_0(dependencyMap[9]);
                      const result = tmp5Result.parseXhrResponseHeaders(xhr);
                      request_headers = result;
                      networkResponseHeaders = networkDetailAllowUrls.networkResponseHeaders;
                      const _Object2 = Object;
                      const entries1 = Object.entries(result);
                      const reduced1 = entries1.reduce((acc, item) => {
                        [str, tmp] = item;
                        const formatted = str.toLowerCase();
                        let hasItem = networkResponseHeaders.includes(formatted);
                        if (hasItem) {
                          hasItem = request_headers[str];
                        }
                        if (hasItem) {
                          acc[formatted] = tmp;
                        }
                        return acc;
                      }, {});
                      if (networkDetailAllowUrls.networkCaptureBodies) {
                        tmp5Result = closure_1_0(dependencyMap[9]);
                        let bodyString = tmp5Result.getBodyString(startTimestamp.input, closure_1_133);
                      } else {
                        bodyString = [undefined];
                      }
                      [tmp13, tmp14] = closure_1_6(bodyString, 2);
                      if (networkDetailAllowUrls.networkCaptureBodies) {
                        let items = (function _getXhrResponseBody(xhr) {
                          try {
                            let items = [xhr.responseText];
                            return items;
                          } catch (tmp2) {
                            let items1 = [];
                            let arr = items1.push(tmp2);
                            try {
                              return (function _parseXhrResponse(response, responseType) {
                                try {
                                  if (typeof response === "string") {
                                    const items = [response];
                                    return items;
                                  } else {
                                    if (response instanceof globalThis.Document) {
                                      const items1 = [response.body.outerHTML];
                                      return items1;
                                    } else {
                                      if ("json" === responseType) {
                                        if (response) {
                                          if (typeof response === "object") {
                                            const _JSON = JSON;
                                            const items2 = [JSON.stringify(response)];
                                            return items2;
                                          }
                                        }
                                      }
                                      if (response) {
                                        if (closure_1_130) {
                                          warn.log("Skipping network body because of body type", response);
                                        }
                                        const items3 = [undefined, "UNPARSEABLE_BODY_TYPE"];
                                        return items3;
                                      } else {
                                        const items4 = [undefined];
                                        return items4;
                                      }
                                    }
                                  }
                                } catch (tmp6) {
                                  if (closure_1_130) {
                                    warn.exception(tmp6, "Failed to serialize body", tmp);
                                  }
                                  const items5 = [undefined, "BODY_PARSE_ERROR"];
                                  return items5;
                                }
                              })(tmp.response, tmp.responseType);
                            } catch (tmp4) {
                              arr = arr.push(tmp4);
                              if (closure_1_130) {
                                warn = warn.warn;
                                let items2 = ["Failed to get xhr response body"];
                                HermesBuiltin.arraySpread(arr, 1);
                                HermesBuiltin.apply(items2, warn);
                              }
                              let items3 = [undefined];
                              return items3;
                            }
                          }
                        })(xhr);
                      } else {
                        items = [undefined];
                      }
                      const tmp12 = closure_1_6(bodyString, 2);
                      [tmp16, tmp17] = closure_1_6(items, 2);
                      if (request_body_size) {
                        if (request_body_size) {
                          let _meta = { headers: reduced, size: request_body_size };
                          if (tmp13) {
                            ({ warnings, body: obj5.body } = (function normalizeNetworkBody(body) {
                              if (body) {
                                if (typeof body === "string") {
                                  const tmp7 = (function _strIsProbablyJson(body) {
                                    const first = body[0];
                                    let tmp3 = "[" === first;
                                    if (tmp3) {
                                      tmp3 = "]" === tmp2;
                                    }
                                    if (!tmp3) {
                                      let tmp4 = "{" === first;
                                      if (tmp4) {
                                        tmp4 = "}" === tmp2;
                                      }
                                      tmp3 = tmp4;
                                    }
                                    return tmp3;
                                  })(body);
                                  if (tmp6) {
                                    const substr = body.slice(0, closure_1_12);
                                    obj = { body: null, warnings: null };
                                    if (tmp7) {
                                      obj.body = substr;
                                      obj.warnings = ["MAYBE_JSON_TRUNCATED"];
                                      let tmp4 = obj;
                                    } else {
                                      const _HermesInternal = HermesInternal;
                                      obj.body = "" + substr + "\u2026";
                                      obj.warnings = ["TEXT_TRUNCATED"];
                                      tmp4 = obj;
                                    }
                                    return tmp4;
                                  } else if (!tmp7) {
                                    obj = { body };
                                    return obj;
                                  } else {
                                    try {
                                      obj = { body: null };
                                      const _JSON = JSON;
                                      obj.body = JSON.parse(body);
                                      return obj;
                                    } catch (err) {
                                    }
                                  }
                                  tmp6 = body.length > closure_1_12;
                                }
                              }
                              return { body };
                            })(tmp13));
                            let length;
                            if (warnings != null) {
                              length = warnings.length;
                            }
                            let tmp18 = _meta;
                            if (length) {
                              _meta = { warnings };
                              _meta._meta = _meta;
                              tmp18 = _meta;
                            }
                            const tmp19 = (function normalizeNetworkBody(body) {
                              if (body) {
                                if (typeof body === "string") {
                                  const tmp7 = (function _strIsProbablyJson(body) {
                                    const first = body[0];
                                    let tmp3 = "[" === first;
                                    if (tmp3) {
                                      tmp3 = "]" === tmp2;
                                    }
                                    if (!tmp3) {
                                      let tmp4 = "{" === first;
                                      if (tmp4) {
                                        tmp4 = "}" === tmp2;
                                      }
                                      tmp3 = tmp4;
                                    }
                                    return tmp3;
                                  })(body);
                                  if (tmp6) {
                                    const substr = body.slice(0, closure_1_12);
                                    obj = { body: null, warnings: null };
                                    if (tmp7) {
                                      obj.body = substr;
                                      obj.warnings = ["MAYBE_JSON_TRUNCATED"];
                                      let tmp4 = obj;
                                    } else {
                                      const _HermesInternal = HermesInternal;
                                      obj.body = "" + substr + "\u2026";
                                      obj.warnings = ["TEXT_TRUNCATED"];
                                      tmp4 = obj;
                                    }
                                    return tmp4;
                                  } else if (!tmp7) {
                                    obj = { body };
                                    return obj;
                                  } else {
                                    try {
                                      obj = { body: null };
                                      const _JSON = JSON;
                                      obj.body = JSON.parse(body);
                                      return obj;
                                    } catch (err) {
                                    }
                                  }
                                  tmp6 = body.length > closure_1_12;
                                }
                              }
                              return { body };
                            })(tmp13);
                          } else {
                            tmp18 = _meta;
                          }
                        } else {
                          obj1 = { headers: reduced };
                          tmp18 = obj1;
                        }
                      } else {
                        const _Object3 = Object;
                      }
                      if (response_body_size) {
                        if (response_body_size) {
                          obj2 = { headers: reduced1, size: response_body_size };
                          if (tmp16) {
                            ({ warnings: warnings2, body: obj8.body } = (function normalizeNetworkBody(body) {
                              if (body) {
                                if (typeof body === "string") {
                                  const tmp7 = (function _strIsProbablyJson(body) {
                                    const first = body[0];
                                    let tmp3 = "[" === first;
                                    if (tmp3) {
                                      tmp3 = "]" === tmp2;
                                    }
                                    if (!tmp3) {
                                      let tmp4 = "{" === first;
                                      if (tmp4) {
                                        tmp4 = "}" === tmp2;
                                      }
                                      tmp3 = tmp4;
                                    }
                                    return tmp3;
                                  })(body);
                                  if (tmp6) {
                                    const substr = body.slice(0, closure_1_12);
                                    obj = { body: null, warnings: null };
                                    if (tmp7) {
                                      obj.body = substr;
                                      obj.warnings = ["MAYBE_JSON_TRUNCATED"];
                                      let tmp4 = obj;
                                    } else {
                                      const _HermesInternal = HermesInternal;
                                      obj.body = "" + substr + "\u2026";
                                      obj.warnings = ["TEXT_TRUNCATED"];
                                      tmp4 = obj;
                                    }
                                    return tmp4;
                                  } else if (!tmp7) {
                                    obj = { body };
                                    return obj;
                                  } else {
                                    try {
                                      obj = { body: null };
                                      const _JSON = JSON;
                                      obj.body = JSON.parse(body);
                                      return obj;
                                    } catch (err) {
                                    }
                                  }
                                  tmp6 = body.length > closure_1_12;
                                }
                              }
                              return { body };
                            })(tmp16));
                            let length1;
                            if (warnings2 != null) {
                              length1 = warnings2.length;
                            }
                            let tmp22 = obj2;
                            if (length1) {
                              obj3 = { warnings: warnings2 };
                              obj2._meta = obj3;
                              tmp22 = obj2;
                            }
                            const tmp23 = (function normalizeNetworkBody(body) {
                              if (body) {
                                if (typeof body === "string") {
                                  const tmp7 = (function _strIsProbablyJson(body) {
                                    const first = body[0];
                                    let tmp3 = "[" === first;
                                    if (tmp3) {
                                      tmp3 = "]" === tmp2;
                                    }
                                    if (!tmp3) {
                                      let tmp4 = "{" === first;
                                      if (tmp4) {
                                        tmp4 = "}" === tmp2;
                                      }
                                      tmp3 = tmp4;
                                    }
                                    return tmp3;
                                  })(body);
                                  if (tmp6) {
                                    const substr = body.slice(0, closure_1_12);
                                    obj = { body: null, warnings: null };
                                    if (tmp7) {
                                      obj.body = substr;
                                      obj.warnings = ["MAYBE_JSON_TRUNCATED"];
                                      let tmp4 = obj;
                                    } else {
                                      const _HermesInternal = HermesInternal;
                                      obj.body = "" + substr + "\u2026";
                                      obj.warnings = ["TEXT_TRUNCATED"];
                                      tmp4 = obj;
                                    }
                                    return tmp4;
                                  } else if (!tmp7) {
                                    obj = { body };
                                    return obj;
                                  } else {
                                    try {
                                      obj = { body: null };
                                      const _JSON = JSON;
                                      obj.body = JSON.parse(body);
                                      return obj;
                                    } catch (err) {
                                    }
                                  }
                                  tmp6 = body.length > closure_1_12;
                                }
                              }
                              return { body };
                            })(tmp16);
                          } else {
                            tmp22 = obj2;
                          }
                        } else {
                          obj4 = { headers: reduced1 };
                          tmp22 = obj4;
                        }
                      } else {
                        const _Object4 = Object;
                      }
                      const request = { startTimestamp, endTimestamp, url, method, statusCode: num, request: null, response: null };
                      if (!tmp14) {
                        request.request = tmp18;
                        if (!tmp17) {
                          request.response = tmp22;
                          return request;
                        } else {
                          obj5 = {};
                          if (tmp22) {
                            const merged = Object.assign(tmp22._meta);
                            const tmp36 = obj5.warnings || [];
                            let items1 = [];
                            items1[HermesBuiltin.arraySpread(tmp36, 0)] = tmp17;
                            obj5.warnings = items1;
                            tmp22._meta = obj5;
                            let obj6 = tmp22;
                          } else {
                            obj6 = { headers: obj5, size: "Array", _meta: -1 };
                            const obj7 = { warnings: null };
                            let items2 = [tmp17];
                            obj7.warnings = items2;
                            obj6._meta = obj7;
                          }
                        }
                      } else {
                        const obj8 = {};
                        if (tmp18) {
                          const merged1 = Object.assign(tmp18._meta);
                          const tmp29 = obj8.warnings || [];
                          let items3 = [];
                          items3[HermesBuiltin.arraySpread(tmp29, 0)] = tmp14;
                          obj8.warnings = items3;
                          tmp18._meta = obj8;
                          let obj9 = tmp18;
                        } else {
                          obj9 = { headers: obj8, size: "Array", _meta: -1 };
                          const obj10 = { warnings: null };
                          let items4 = [tmp14];
                          obj10.warnings = items4;
                          obj9._meta = obj10;
                        }
                      }
                      const tmp11Result = closure_1_6(items, 2);
                    }
                  }
                }
                const request1 = { startTimestamp, endTimestamp, url, method, statusCode: num, request: null, response: null };
                const obj11 = { headers: {}, size: request_body_size, _meta: null };
                const obj12 = { warnings: ["URL_SKIPPED"] };
                obj11._meta = obj12;
                request1.request = obj11;
                const obj13 = { headers: {}, size: response_body_size, _meta: null };
                const obj14 = { warnings: ["URL_SKIPPED"] };
                obj13._meta = obj14;
                request1.response = obj13;
                return request1;
              } else {
                return null;
              }
            })(closure_0, dependencyMap, replay)));
            c6 = 0;
          }
        } else {
          c6 = 0;
          closure_131_0 = closure_5;
          if (closure_132_130) {
            closure_132_133.exception(closure_131_0, "Failed to capture xhr breadcrumb");
          }
        }
        c8 = 3;
      } catch (tmp19) {
        closure_5 = tmp19;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp19;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
function enrichXhrBreadcrumb(data, xhr) {
  xhr = xhr.xhr;
  if (xhr) {
    const tmp3 = getBodySize(tmp);
    if (xhr.getResponseHeader("content-length")) {
      const responseHeader = xhr.getResponseHeader("content-length");
      let tmp6;
      if (responseHeader) {
        const _parseInt = parseInt;
        const parsed = parseInt(responseHeader, 10);
        const _isNaN = isNaN;
        let tmp9;
        if (!isNaN(parsed)) {
          tmp9 = parsed;
        }
        tmp6 = tmp9;
      }
      let tmp4 = tmp6;
    } else {
      tmp4 = (function _getBodySize(response, responseType) {
        try {
          let json = response;
          if ("json" === responseType) {
            json = response;
            if (response) {
              json = response;
              if (typeof response === "object") {
                const _JSON = JSON;
                json = JSON.stringify(response);
              }
            }
          }
          return getBodySize(json);
        } catch (err) {
        }
      })(xhr.response, xhr.responseType);
    }
    if (undefined !== tmp3) {
      data.data.request_body_size = tmp3;
    }
    if (undefined !== tmp4) {
      data.data.response_body_size = tmp4;
    }
  }
}
function handleNetworkBreadcrumbs(getOptions) {
  obj = obj(682);
  const client = obj.getClient();
  try {
    const options = getOptions.getOptions();
    obj = { replay: getOptions, networkDetailAllowUrls: null, networkDetailDenyUrls: null, networkCaptureBodies: null, networkRequestHeaders: null, networkResponseHeaders: null };
    ({ networkDetailAllowUrls: obj3.networkDetailAllowUrls, networkDetailDenyUrls: obj3.networkDetailDenyUrls, networkCaptureBodies: obj3.networkCaptureBodies, networkRequestHeaders: obj3.networkRequestHeaders, networkResponseHeaders: obj3.networkResponseHeaders } = options);
    if (client) {
      client.on("beforeAddBreadcrumb", (data, xhr) => {
        (function beforeAddNetworkBreadcrumb(arg0, data, xhr) {
          if (data.data) {
            try {
              let tmp2 = (function _isXhrBreadcrumb(category) {
                return "xhr" === category.category;
              })(data);
              if (tmp2) {
                tmp2 = (function _isXhrHint(xhr) {
                  xhr = undefined;
                  if (xhr != null) {
                    xhr = xhr.xhr;
                  }
                  return xhr;
                })(xhr);
              }
              if (tmp2) {
                closure_1_165(data, xhr);
                (function captureXhrBreadcrumbToReplay(data, xhr, arg2) {
                  const self = this;
                  const apply = closure_1_164.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(data, xhr, arg0);
              }
              let tmp7 = (function _isFetchBreadcrumb(category) {
                return "fetch" === category.category;
              })(data);
              if (tmp7) {
                tmp7 = (function _isFetchHint(response) {
                  response = undefined;
                  if (response != null) {
                    response = response.response;
                  }
                  return response;
                })(xhr);
              }
              if (tmp7) {
                (function enrichFetchBreadcrumb(data, xhr) {
                  ({ input, response } = xhr);
                  let fetchRequestArgBody;
                  if (input) {
                    fetchRequestArgBody = closure_1_0(dependencyMap[9]).getFetchRequestArgBody(input);
                    obj = closure_1_0(dependencyMap[9]);
                  }
                  const tmpResult = closure_1_152(fetchRequestArgBody);
                  let tmp6;
                  if (response) {
                    const headers = response.headers;
                    value = headers.get("content-length");
                    let tmp8;
                    if (value) {
                      const _parseInt = parseInt;
                      const parsed = parseInt(value, 10);
                      const _isNaN = isNaN;
                      let tmp11;
                      if (!isNaN(parsed)) {
                        tmp11 = parsed;
                      }
                      tmp8 = tmp11;
                    }
                    tmp6 = tmp8;
                  }
                  if (undefined !== tmpResult) {
                    data.data.request_body_size = tmpResult;
                  }
                  if (undefined !== tmp6) {
                    data.data.response_body_size = tmp6;
                  }
                })(data, xhr);
                (function captureFetchBreadcrumbToReplay(data, xhr, arg2) {
                  const self = this;
                  const apply = closure_1_158.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(data, xhr, arg0);
              }
            } catch (tmp10) {
              if (closure_1_130) {
                closure_1_133.exception(tmp10, "Error when enriching network breadcrumb");
              }
            }
          }
        })(obj, data, xhr);
      });
    }
  } catch (err) {
  }
}
let closure_167 = async function _addMemoryEntry(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c3 = 1;
          const _Date = Date;
          ({ jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } = require("module_682").GLOBAL_OBJ.performance.memory);
          const result = Date.now() / 1000;
          obj1 = { type: "memory", name: "memory", start: result, end: result, data: null };
          obj2 = { memory: null };
          obj3 = { jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize };
          obj2.memory = obj3;
          obj1.data = obj2;
          const items = [obj1];
          c3 = 0;
          c1 = 3;
          obj4 = { value: Promise.all(createPerformanceSpans(closure_0, items)), done: true };
          return obj4;
        }
      } else {
        c3 = 0;
        c1 = 3;
        obj = { value: [], done: true };
        return obj;
      }
    } catch (tmp7) {
      if (tmp3 === c3) {
        c1 = tmp2;
        throw tmp7;
      } else {
        c2 = tmp;
      }
    }
  }
};
function getHandleRecordingEmit(arg0) {
  closure_0 = arg0;
  c1 = false;
  return (data, arg1) => {
    const recordingMode = data;
    if (recordingMode.checkAndHandleExpiredSession()) {
      if (!arg1) {
        const tmp4 = !c1;
      }
      c1 = true;
      if (obj.clickDetector) {
        updateClickDetectorForRecordingEvent(obj.clickDetector, data);
      }
      obj.addUpdate(() => {
        let payload = recordingMode;
        if (tmp) {
          payload.setInitialState();
        }
        if (addEventSync(payload, recordingMode, c1)) {
          if (c1) {
            const session = payload.session;
            if (c1) {
              if (payload.session) {
                if (0 === payload.session.segmentId) {
                  const options = payload.getOptions();
                  payload = { type: obj1.Custom, timestamp: null, data: null };
                  const _Date2 = Date;
                  payload.timestamp = Date.now();
                  payload = { shouldRecordCanvas: null, sessionSampleRate: null, errorSampleRate: null, useCompressionOption: null, blockAllMedia: null, maskAllText: null, maskAllInputs: null, useCompression: null, networkDetailHasUrls: null, networkCaptureBodies: null, networkRequestHasHeaders: null, networkResponseHasHeaders: null };
                  payload.shouldRecordCanvas = payload.isRecordingCanvas();
                  ({ sessionSampleRate: obj4.sessionSampleRate, errorSampleRate: obj4.errorSampleRate, useCompression: obj4.useCompressionOption, blockAllMedia: obj4.blockAllMedia, maskAllText: obj4.maskAllText, maskAllInputs: obj4.maskAllInputs } = options);
                  let eventBuffer = payload.eventBuffer;
                  if (eventBuffer) {
                    eventBuffer = "worker" === payload.eventBuffer.type;
                  }
                  obj1 = { tag: "options", payload: null };
                  payload.useCompression = eventBuffer;
                  payload.networkDetailHasUrls = options.networkDetailAllowUrls.length > 0;
                  payload.networkCaptureBodies = options.networkCaptureBodies;
                  payload.networkRequestHasHeaders = options.networkRequestHeaders.length > 0;
                  payload.networkResponseHasHeaders = options.networkResponseHeaders.length > 0;
                  obj1.payload = payload;
                  payload.data = obj1;
                  addEventSync(payload, payload, false);
                }
              }
            }
            if ("buffer" === payload.recordingMode) {
              if (session) {
                if (payload.eventBuffer) {
                  if (!session.dirty) {
                    eventBuffer = payload.eventBuffer;
                    const earliestTimestamp = eventBuffer.getEarliestTimestamp();
                    if (earliestTimestamp) {
                      if (closure_3_130) {
                        const _Date = Date;
                        const date = new Date(earliestTimestamp);
                        const _HermesInternal = HermesInternal;
                        closure_3_133.log("Updating session start time to earliest event in buffer to " + date);
                      }
                      session.started = earliestTimestamp;
                      if (payload.getOptions().stickySession) {
                        saveSession(session);
                      }
                    }
                  }
                }
              }
            }
            let previousSessionId;
            if (session != null) {
              previousSessionId = session.previousSessionId;
            }
            if (!previousSessionId) {
              if ("session" === payload.recordingMode) {
                payload.flush();
              }
            }
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
        tmp = "buffer" === recordingMode.recordingMode && c1;
      });
    } else if (closure_1_130) {
      logger.warn("Received replay event after session expired.");
    }
  };
}
let closure_170 = async function _prepareReplayEvent(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          ({ client: closure_129_0, scope: closure_129_1, replayId: closure_129_2, event: closure_129_3 } = closure_0);
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          let sdkMetadata;
          closure_129_7 = undefined;
          let name;
          let version;
          let settings;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj1 = { value, done: true };
          return obj1;
        } else {
          obj2 = { event_id: closure_129_2, integrations: null };
          let keys;
          if (typeof closure_129_0._integrations === "object") {
            if (null !== closure_129_0._integrations) {
              const _Array = Array;
              if (!Array.isArray(closure_129_0._integrations)) {
                const _Object = Object;
                keys = Object.keys(closure_129_0._integrations);
              }
            }
          }
          obj2.integrations = keys;
          closure_129_4 = obj2;
          closure_129_0.emit("preprocessEvent", closure_129_3, closure_129_4);
          obj4 = closure_130_0(closure_130_1[8]);
          const options = closure_129_0.getOptions();
          obj5 = closure_130_0(closure_130_1[8]);
          c3 = 2;
          c4 = 1;
          obj3 = { value: obj4.prepareEvent(options, closure_129_3, closure_129_4, closure_129_1, closure_129_0, obj5.getIsolationScope()), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        obj4 = { value, done: true };
        return obj4;
      } else {
        closure_129_5 = value;
        if (closure_129_5) {
          closure_129_0.emit("postprocessEvent", closure_129_5, closure_129_4);
          let str2 = closure_129_5.platform;
          if (!str2) {
            str2 = "javascript";
          }
          closure_129_5.platform = str2;
          sdkMetadata = closure_129_0.getSdkMetadata();
          let sdk;
          if (sdkMetadata != null) {
            sdk = sdkMetadata.sdk;
          }
          if (!sdk) {
            sdk = {};
          }
          closure_129_7 = sdk;
          name = closure_129_7.name;
          version = closure_129_7.version;
          settings = closure_129_7.settings;
          obj5 = {};
          const merged = Object.assign(closure_129_5.sdk);
          let str3 = name;
          if (!name) {
            str3 = "sentry.javascript.unknown";
          }
          obj5.name = str3;
          let str4 = version;
          if (!version) {
            str4 = "0.0.0";
          }
          obj5.version = str4;
          obj5.settings = settings;
          closure_129_5.sdk = obj5;
          c4 = 3;
          const obj6 = { value: closure_129_5, done: true };
          return obj6;
        } else {
          c4 = 3;
          return { value: null, done: true };
        }
      }
    } catch (tmp48) {
      c4 = tmp;
      throw tmp48;
    }
  }
};
let closure_171 = async function _sendReplayRequest(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp9 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp4;
          dependencyMap = tmp10;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          ({ recordingData: closure_129_0, replayId: closure_129_1, segmentId: closure_129_2, eventContext: closure_129_3, timestamp: closure_129_4, session: closure_129_5 } = closure_0);
          closure_129_6 = undefined;
          let urls;
          let errorIds;
          let traceIds;
          let initialTimestamp;
          let client;
          let currentScope;
          closure_129_13 = undefined;
          closure_129_14 = undefined;
          closure_129_15 = undefined;
          closure_129_16 = undefined;
          closure_129_17 = undefined;
          closure_129_18 = undefined;
          closure_129_19 = undefined;
          closure_129_20 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp10) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj1 = { value, done: true };
          return obj1;
        } else {
          obj2 = { recordingData: closure_129_0, headers: null };
          obj3 = { segment_id: closure_129_2 };
          obj2.headers = obj3;
          closure_129_6 = (function prepareRecordingData(recordingData) {
            recordingData = recordingData.recordingData;
            const combined = "" + JSON.stringify(recordingData.headers) + "\n";
            if (typeof recordingData === "string") {
              const _HermesInternal = HermesInternal;
              let combined1 = "" + combined + recordingData;
            } else {
              const _TextEncoder = TextEncoder;
              const encoder = new TextEncoder();
              const encodeResult = encoder.encode(combined);
              const _Uint8Array = Uint8Array;
              const uint8Array = new Uint8Array(encodeResult.length + recordingData.length);
              combined1 = uint8Array;
              const result = uint8Array.set(encodeResult);
              const result1 = uint8Array.set(recordingData, encodeResult.length);
            }
            return combined1;
          })(obj2);
          urls = closure_129_3.urls;
          errorIds = closure_129_3.errorIds;
          traceIds = closure_129_3.traceIds;
          initialTimestamp = closure_129_3.initialTimestamp;
          client = closure_130_0(closure_130_1[8]).getClient();
          const obj18 = closure_130_0(closure_130_1[8]);
          currentScope = closure_130_0(closure_130_1[8]).getCurrentScope();
          let transport;
          if (client != null) {
            transport = client.getTransport();
          }
          closure_129_13 = transport;
          let obj7 = client;
          let dsn;
          if (client != null) {
            dsn = obj7.getDsn();
          }
          closure_129_14 = dsn;
          if (client) {
            if (closure_129_13) {
              if (closure_129_14) {
                if (closure_129_5.sampled) {
                  obj4 = { type: "replay_event", replay_start_timestamp: initialTimestamp / 1000, timestamp: closure_129_4 / 1000, error_ids: errorIds, trace_ids: traceIds, urls, replay_id: closure_129_1, segment_id: closure_129_2, replay_type: closure_129_5.sampled };
                  closure_129_15 = obj4;
                  obj5 = { scope: currentScope, client, replayId: closure_129_1, event: closure_129_15 };
                  c5 = 2;
                  c6 = 1;
                  const obj6 = {
                    value: (function prepareReplayEvent(arg0) {
                                      const self = this;
                                      const apply = closure_1_170.apply;
                                      if (typeof apply === "unknown") {
                                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                      } else {
                                        applyArgumentsResult = apply(self, arguments);
                                      }
                                      return applyArgumentsResult;
                                    })(obj5),
                    done: false
                  };
                  return obj6;
                }
              }
            }
          }
          c6 = 3;
          obj7 = { value: Promise.resolve({}), done: true };
          return obj7;
        }
      } else if (2 === tmp10) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_129_16 = value;
          if (closure_129_16) {
            delete tmp7[tmp3];
            closure_129_18 = (function createReplayEnvelope(arg0, str, arg2, tunnel) {
              obj = closure_1_0(682);
              obj2 = closure_1_0(682);
              const items = [{ type: "replay_event" }, arg0];
              const items1 = [items, ];
              const eventEnvelopeHeaders = obj2.createEventEnvelopeHeaders(arg0, closure_1_0(682).getSdkMetadataForEnvelopeHeader(arg0), tunnel, arg2);
              if (typeof str === "string") {
                const _TextEncoder = TextEncoder;
                const encoder = new TextEncoder();
                let length = encoder.encode(str).length;
              } else {
                length = str.length;
              }
              const items2 = [{ type: "replay_recording", length }, str];
              items1[1] = items2;
              return obj.createEnvelope(eventEnvelopeHeaders, items1);
            })(closure_129_16, closure_129_6, closure_129_14, client.getOptions().tunnel);
            c4 = 1;
            c5 = 5;
            c6 = 1;
            const obj9 = { value: closure_129_13.send(closure_129_18), done: false };
            return obj9;
          } else {
            client.recordDroppedEvent("event_processor", "replay");
            if (closure_130_130) {
              closure_130_133.log("An event processor returned `null`, will not send event.");
            }
            c6 = 3;
            const obj10 = { value: Promise.resolve({}), done: true };
            return obj10;
          }
        }
      } else {
        if (3 === tmp10) {
          c4 = 0;
          closure_129_21 = closure_3;
          const _Error = Error;
          const error = new Error(closure_130_11);
          closure_129_19 = error;
          c4 = 2;
          closure_129_19.cause = closure_129_21;
          c4 = 0;
        } else if (4 === tmp10) {
          c4 = 0;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          closure_129_17 = value;
          c4 = 0;
          if (typeof closure_129_17.statusCode === "number") {
            const tmp33 = new closure_130_172(closure_129_17.statusCode);
            throw tmp33;
          }
          obj = closure_130_0(closure_130_1[8]);
          closure_129_20 = obj.updateRateLimits({}, closure_129_17);
          obj1 = closure_130_0(closure_130_1[8]);
          if (obj1.isRateLimited(closure_129_20, "replay")) {
            const tmp25 = new closure_130_173(closure_129_20);
            throw tmp25;
          } else {
            c6 = 3;
            const obj12 = { value: closure_129_17, done: true };
            return obj12;
          }
        }
        throw closure_129_19;
      }
    } catch (tmp85) {
      closure_3 = tmp85;
      if (tmp5 === c4) {
        c6 = tmp2;
        throw tmp85;
      } else if (tmp === tmp87) {
        c5 = tmp2;
      } else {
        c5 = tmp6;
      }
    }
  }
};
function sendReplay(arg0) {
  const self = this;
  const apply = closure_175.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_175 = async function _sendReplay(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp8 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp4;
          closure_2 = tmp9;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          obj1 = interval;
          if (interval === undefined) {
            obj1 = { count: 0, interval: 5000 };
          }
          closure_130_1 = obj1;
          let recordingData;
          let onError;
          closure_130_4 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp9) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj2 = { value, done: true };
          return obj2;
        } else {
          recordingData = closure_130_0.recordingData;
          onError = closure_130_0.onError;
          if (recordingData.length) {
            c5 = 1;
            c6 = 3;
            c7 = 1;
            obj3 = {
              value: (function sendReplayRequest(arg0) {
                          const self = this;
                          const apply = closure_1_171.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(closure_130_0),
              done: false
            };
            return obj3;
          } else {
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
      } else {
        if (2 === tmp9) {
          c5 = 0;
          closure_130_5 = closure_4;
          if (!(closure_130_5 instanceof closure_131_172)) {
            if (!(closure_130_5 instanceof closure_131_173)) {
              obj1 = closure_131_0(closure_131_1[8]);
              obj4 = { _retryCount: closure_130_1.count };
              obj1.setContext("Replays", obj4);
              if (onError) {
                onError(closure_130_5);
              }
              if (closure_130_1.count >= 3) {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const error = new Error("" + closure_131_11 + " - max retries exceeded");
                closure_130_4 = error;
                c5 = 2;
                closure_130_4.cause = closure_130_5;
                c5 = 0;
              } else {
                const sum = closure_130_1.count + 1;
                closure_130_1.count = sum;
                closure_130_1.interval = closure_130_1.interval * sum;
                const promise = new Promise((arg0, arg1) => {
                  closure_0 = arg0;
                  interval = arg1;
                  const timerId = closure_1_0(interval[9]).setTimeout(closure_1_2(function*() {
                    closure_0 = tmp3;
                    yield closure_2_174(closure_0, c1);
                    if (1 === tmp7) {
                      c3 = 0;
                      closure_128_1(closure_2);
                      c4 = 3;
                    } else if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 !== 2) {
                      closure_128_0(true);
                      c3 = 0;
                    }
                    return value;
                  }), interval.interval);
                });
                c7 = 3;
                obj5 = { value: promise, done: true };
                return obj5;
              }
            }
          }
          throw closure_130_5;
        } else if (3 === tmp9) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c5 = 0;
            c7 = 3;
            return { value: true, done: true };
          }
        } else {
          c5 = 0;
        }
        throw closure_130_4;
      }
    } catch (tmp62) {
      closure_4 = tmp62;
      if (tmp5 === c5) {
        c7 = tmp3;
        throw tmp62;
      } else if (tmp2 === tmp64) {
        c6 = tmp;
      } else {
        c6 = tmp6;
      }
    }
  }
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const sentryReplaySession = "sentryReplaySession";
let c11 = "Unable to send Replay";
let c12 = 150000;
let c13 = 5000;
let c14 = 20000000;
let c15 = 3600000;
function __publicField$1(arg0, arg1, arg2) {

}
let obj = {};
((arg0) => {
  arg0.Document = 0;
  arg0[0] = "Document";
  arg0.DocumentType = 1;
  arg0[1] = "DocumentType";
  arg0.Element = 2;
  arg0[2] = "Element";
  arg0.Text = 3;
  arg0[3] = "Text";
  arg0.CDATA = 4;
  arg0[4] = "CDATA";
  arg0.Comment = 5;
  arg0[5] = "Comment";
  return arg0;
})(obj);
let closure_23 = (() => {
  class Mirror {
    constructor() {
      self = this;
      tmp = closure_7(this, Mirror);
      tmp2 = __publicField$1;
      map = new Map();
      if (typeof __publicField$1 === "function") {
        tmp4 = map;
        str = "idNodeMap";
        if ("idNodeMap" in self) {
          tmp5 = defineProperty;
          obj = { enumerable: true, configurable: true, writable: true, value: null };
          obj.value = map;
          tmp6 = defineProperty(self, "idNodeMap", obj);
        } else {
          self.idNodeMap = map;
        }
        _WeakMap = WeakMap;
        tmp7 = new.target;
        tmp8 = new.target;
        weakMap = new WeakMap();
        if (typeof tmp2 === "function") {
          tmp10 = weakMap;
          str2 = "nodeMetaMap";
          if ("nodeMetaMap" in self) {
            tmp11 = defineProperty;
            obj = { enumerable: true, configurable: true, writable: true, value: null };
            obj.value = weakMap;
            tmp12 = defineProperty(self, "nodeMetaMap", obj);
          } else {
            self.nodeMetaMap = weakMap;
          }
          return;
        } else {
          str4 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        str3 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  const entry = {
    key: "getId",
    value: function getId(arg0) {
      if (arg0) {
        const self = this;
        const meta = this.getMeta(arg0);
        let num2;
        if (meta != null) {
          num2 = meta.id;
        }
        if (num2 == null) {
          num2 = -1;
        }
        return num2;
      } else {
        return -1;
      }
    }
  };
  const items = [
    entry,
    {
      key: "getNode",
      value: function getNode(arg0) {
        const idNodeMap = this.idNodeMap;
        return idNodeMap.get(arg0) || null;
      }
    },
    {
      key: "getIds",
      value: function getIds() {
        const idNodeMap = this.idNodeMap;
        return Array.from(idNodeMap.keys());
      }
    },
    {
      key: "getMeta",
      value: function getMeta(arg0) {
        const nodeMetaMap = this.nodeMetaMap;
        return nodeMetaMap.get(arg0) || null;
      }
    },
    {
      key: "removeNodeFromMap",
      value: function removeNodeFromMap(childNodes) {
        const self = this;
        const idNodeMap = this.idNodeMap;
        idNodeMap.delete(this.getId(childNodes));
        if (childNodes.childNodes) {
          childNodes = childNodes.childNodes;
          const item = childNodes.forEach((item) => self.removeNodeFromMap(item));
        }
      }
    },
    {
      key: "has",
      value: function has(arg0) {
        const idNodeMap = this.idNodeMap;
        return idNodeMap.has(arg0);
      }
    },
    {
      key: "hasNode",
      value: function hasNode(arg0) {
        const nodeMetaMap = this.nodeMetaMap;
        return nodeMetaMap.has(arg0);
      }
    },
    {
      key: "add",
      value: function add(arg0, id) {
        const idNodeMap = this.idNodeMap;
        const result = idNodeMap.set(id.id, arg0);
        const nodeMetaMap = this.nodeMetaMap;
        const result1 = nodeMetaMap.set(arg0, id);
      }
    },
    {
      key: "replace",
      value: function replace(arg0, arg1) {
        const self = this;
        const node = this.getNode(arg0);
        if (node) {
          const nodeMetaMap = self.nodeMetaMap;
          value = nodeMetaMap.get(node);
          if (value) {
            const nodeMetaMap2 = self.nodeMetaMap;
            const result = nodeMetaMap2.set(arg1, value);
          }
        }
        const idNodeMap = self.idNodeMap;
        const result1 = idNodeMap.set(arg0, arg1);
      }
    },
    {
      key: "reset",
      value: function reset() {
        obj = { idNodeMap: new Map() };
        weakMap = new WeakMap();
        obj.nodeMetaMap = weakMap;
      }
    }
  ];
  return _createClass(Mirror, items);
})();
let __rrweb_original__ = "__rrweb_original__";
let closure_32 = {};
let closure_39 = 1;
const regExp = new RegExp("[^a-z0-9-_:]");
const re42 = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
const re43 = /^(?:[a-z+]+:)?\/\//i;
const re44 = /^www\..*/i;
const re45 = /^(data:)([^,]*),(.*)/i;
const re47 = /^[^ \t\n\r\u000c]+/;
const re48 = /^[, \t\n\r\u000c]+/;
let weakMap = new WeakMap();
let c60 = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
obj = {
  map: {},
  getId() {
    console.error(c60);
    return -1;
  },
  getNode() {
    console.error(c60);
    return null;
  },
  removeNodeFromMap() {
    console.error(c60);
  },
  has() {
    console.error(c60);
    return false;
  },
  reset() {
    console.error(c60);
  }
};
let _Reflect = typeof window !== "undefined";
if (typeof window !== "undefined") {
  let _window2 = window;
  _Reflect = window.Proxy;
}
if (_Reflect) {
  let _window = window;
  _Reflect = window.Reflect;
}
if (_Reflect) {
  const _Proxy = Proxy;
  obj = {
    get(arg0, arg1, arg2) {
        if ("map" === arg1) {
          const _console = console;
          console.error(c60);
        }
        return Reflect.get(arg0, arg1, arg2);
      }
  };
  const proxy = new Proxy(obj, obj);
}
let W = Date.now;
let obj3 = /[1-9][0-9]{12}/;
if (!obj3.test(str.toString())) {
  W = function W() {
    return new Date().getTime();
  };
}
let closure_68 = (() => {
  class StyleSheetMirror {
    constructor() {
      tmp = closure_7(this, StyleSheetMirror);
      this.id = 1;
      weakMap = new WeakMap();
      this.styleIDMap = weakMap;
      map = new Map();
      this.idStyleMap = map;
      return;
    }
  }
  const entry = {
    key: "getId",
    value: function getId(arg0) {
      const styleIDMap = this.styleIDMap;
      let num = styleIDMap.get(arg0);
      if (num == null) {
        num = -1;
      }
      return num;
    }
  };
  const items = [
    entry,
    {
      key: "has",
      value: function has(arg0) {
        const styleIDMap = this.styleIDMap;
        return styleIDMap.has(arg0);
      }
    },
    {
      key: "add",
      value: function add(arg0, arg1) {
        const self = this;
        if (this.has(arg0)) {
          let id = self.getId(arg0);
        } else {
          id = arg1;
          if (undefined === arg1) {
            self.id = +self.id + 1;
            id = tmp2;
          }
          const styleIDMap = self.styleIDMap;
          const result = styleIDMap.set(arg0, id);
          const idStyleMap = self.idStyleMap;
          const result1 = idStyleMap.set(id, arg0);
        }
        return id;
      }
    },
    {
      key: "getStyle",
      value: function getStyle(arg0) {
        const idStyleMap = this.idStyleMap;
        return idStyleMap.get(arg0) || null;
      }
    },
    {
      key: "reset",
      value: function reset() {
        obj = {};
        weakMap = new WeakMap();
        obj.styleIDMap = weakMap;
        obj.idStyleMap = new Map();
        obj.id = 1;
      }
    },
    {
      key: "generateId",
      value: function generateId() {
        this.id = +this.id + 1;
        return +this.id;
      }
    }
  ];
  return _createClass(StyleSheetMirror, items);
})();
let closure_70 = {};
let obj1 = {};
((arg0) => {
  arg0.DomContentLoaded = 0;
  arg0[0] = "DomContentLoaded";
  arg0.Load = 1;
  arg0[1] = "Load";
  arg0.FullSnapshot = 2;
  arg0[2] = "FullSnapshot";
  arg0.IncrementalSnapshot = 3;
  arg0[3] = "IncrementalSnapshot";
  arg0.Meta = 4;
  arg0[4] = "Meta";
  arg0.Custom = 5;
  arg0[5] = "Custom";
  arg0.Plugin = 6;
  arg0[6] = "Plugin";
  return arg0;
})(obj1);
let obj2 = {};
((arg0) => {
  arg0.Mutation = 0;
  arg0[0] = "Mutation";
  arg0.MouseMove = 1;
  arg0[1] = "MouseMove";
  arg0.MouseInteraction = 2;
  arg0[2] = "MouseInteraction";
  arg0.Scroll = 3;
  arg0[3] = "Scroll";
  arg0.ViewportResize = 4;
  arg0[4] = "ViewportResize";
  arg0.Input = 5;
  arg0[5] = "Input";
  arg0.TouchMove = 6;
  arg0[6] = "TouchMove";
  arg0.MediaInteraction = 7;
  arg0[7] = "MediaInteraction";
  arg0.StyleSheetRule = 8;
  arg0[8] = "StyleSheetRule";
  arg0.CanvasMutation = 9;
  arg0[9] = "CanvasMutation";
  arg0.Font = 10;
  arg0[10] = "Font";
  arg0.Log = 11;
  arg0[11] = "Log";
  arg0.Drag = 12;
  arg0[12] = "Drag";
  arg0.StyleDeclaration = 13;
  arg0[13] = "StyleDeclaration";
  arg0.Selection = 14;
  arg0[14] = "Selection";
  arg0.AdoptedStyleSheet = 15;
  arg0[15] = "AdoptedStyleSheet";
  arg0.CustomElement = 16;
  arg0[16] = "CustomElement";
  return arg0;
})(obj2);
obj3 = {};
((arg0) => {
  arg0.MouseUp = 0;
  arg0[0] = "MouseUp";
  arg0.MouseDown = 1;
  arg0[1] = "MouseDown";
  arg0.Click = 2;
  arg0[2] = "Click";
  arg0.ContextMenu = 3;
  arg0[3] = "ContextMenu";
  arg0.DblClick = 4;
  arg0[4] = "DblClick";
  arg0.Focus = 5;
  arg0[5] = "Focus";
  arg0.Blur = 6;
  arg0[6] = "Blur";
  arg0.TouchStart = 7;
  arg0[7] = "TouchStart";
  arg0.TouchMove_Departed = 8;
  arg0[8] = "TouchMove_Departed";
  arg0.TouchEnd = 9;
  arg0[9] = "TouchEnd";
  arg0.TouchCancel = 10;
  arg0[10] = "TouchCancel";
  return arg0;
})(obj3);
let obj4 = {};
((arg0) => {
  arg0.Mouse = 0;
  arg0[0] = "Mouse";
  arg0.Pen = 1;
  arg0[1] = "Pen";
  arg0.Touch = 2;
  arg0[2] = "Touch";
  return arg0;
})(obj4);
let obj5 = {};
((arg0) => {
  arg0.Play = 0;
  arg0[0] = "Play";
  arg0.Pause = 1;
  arg0[1] = "Pause";
  arg0.Seeked = 2;
  arg0[2] = "Seeked";
  arg0.VolumeChange = 3;
  arg0[3] = "VolumeChange";
  arg0.RateChange = 4;
  arg0[4] = "RateChange";
  return arg0;
})(obj5);
let closure_80 = (() => {
  class DoubleLinkedList {
    constructor() {
      tmp = closure_7(this, DoubleLinkedList);
      this.length = 0;
      this.head = null;
      this.tail = null;
      return;
    }
  }
  const entry = {
    key: "get",
    value: function get(arg0) {
      if (arg0 >= this.length) {
        const _Error = Error;
        const error = new Error("Position outside of list range");
        throw error;
      } else {
        let iter = tmp.head;
        let num = 0;
        let tmp3 = iter;
        if (0 < arg0) {
          do {
            let next;
            if (iter != null) {
              next = iter.next;
            }
            if (!next) {
              next = null;
            }
            num = num + 1;
            iter = next;
            tmp3 = next;
          } while (num < arg0);
        }
        return tmp3;
      }
    }
  };
  const items = [
    entry,
    {
      key: "addNode",
      value: function addNode(value) {
        const self = this;
        const head = { value, previous: null, next: null };
        value.__ln = head;
        if (value.previousSibling) {
          if ("__ln" in value.previousSibling) {
            const next = value.previousSibling.__ln.next;
            head.next = next;
            head.previous = value.previousSibling.__ln;
            value.previousSibling.__ln.next = head;
            if (next) {
              next.previous = head;
            }
          }
          if (null === head.next) {
            self.tail = head;
          }
          self.length = self.length + 1;
        }
        if (value.nextSibling) {
          if ("__ln" in value.nextSibling) {
            if (value.nextSibling.__ln.previous) {
              const previous = value.nextSibling.__ln.previous;
              head.previous = previous;
              head.next = value.nextSibling.__ln;
              value.nextSibling.__ln.previous = head;
              if (previous) {
                previous.next = head;
              }
            }
          }
        }
        if (self.head) {
          self.head.previous = head;
        }
        head.next = self.head;
        self.head = head;
      }
    },
    {
      key: "removeNode",
      value: function removeNode(__ln) {
        const self = this;
        if (this.head) {
          if (iter.previous) {
            iter.previous.next = iter.next;
            if (iter.next) {
              iter.next.previous = iter.previous;
            } else {
              self.tail = iter.previous;
            }
          } else {
            self.head = iter.next;
            if (self.head) {
              self.head.previous = null;
            } else {
              self.tail = null;
            }
          }
          if (__ln.__ln) {
            delete tmp2[tmp];
          }
          self.length = self.length - 1;
        }
      }
    }
  ];
  return _createClass(DoubleLinkedList, items);
})();
function moveKey(arg0, arg1) {

}
let closure_82 = (() => {
  class MutationBuffer {
    constructor() {
      self = this;
      tmp = closure_7(this, MutationBuffer);
      this.frozen = false;
      this.locked = false;
      this.texts = [];
      this.attributes = [];
      weakMap = new WeakMap();
      this.attributeMap = weakMap;
      this.removes = [];
      this.mapRemoves = [];
      this.movedMap = {};
      set = new Set();
      this.addedSet = set;
      set1 = new Set();
      this.movedSet = set1;
      set2 = new Set();
      this.droppedSet = set2;
      this.processMutations = (arr) => {
        const item = arr.forEach(self.processMutation);
        self.emit();
      };
      this.emit = () => {
        let head;
        let length;
        let tmp = items;
        if (!items.frozen) {
          if (!tmp.locked) {
            items = [];
            const _Set = Set;
            const arr2 = new closure_1_80();
            function getNextId(value) {
              let id;
              let tmp = value;
              do {
                let nextSibling = tmp;
                if (tmp) {
                  nextSibling = tmp.nextSibling;
                }
                id = nextSibling;
                if (nextSibling) {
                  let mirror = items.mirror;
                  id = mirror.getId(nextSibling);
                }
                tmp = nextSibling;
              } while (-2 === id);
              return id;
            }
            function pushAdd(value) {
              let id1;
              if (value.parentNode) {
                if (inDom(value)) {
                  const parentNode = value.parentNode;
                  let host;
                  if (parentNode != null) {
                    host = parentNode.host;
                  }
                  let shadowRoot;
                  if (host != null) {
                    shadowRoot = host.shadowRoot;
                  }
                  let mirror = self.mirror;
                  const getId = mirror.getId;
                  if (Boolean(shadowRoot === parentNode)) {
                    const getRootNode = value.getRootNode;
                    let nodeType;
                    if (getRootNode != null) {
                      const rootNode = getRootNode();
                      if (rootNode != null) {
                        nodeType = rootNode.nodeType;
                      }
                    }
                    let host1 = null;
                    if (tmp10) {
                      host1 = value.getRootNode().host;
                    }
                    let id = getId(host1);
                    tmp10 = nodeType === globalThis.Node.DOCUMENT_FRAGMENT_NODE && value.getRootNode().host;
                  } else {
                    id = getId(value.parentNode);
                  }
                  let tmp13 = value;
                  if (typeof getNextId === "function") {
                    do {
                      let nextSibling = tmp13;
                      if (tmp13) {
                        nextSibling = tmp13.nextSibling;
                      }
                      id1 = nextSibling;
                      if (nextSibling) {
                        let mirror2 = self.mirror;
                        id1 = mirror2.getId(nextSibling);
                      }
                      tmp13 = nextSibling;
                    } while (-2 === id1);
                    if (-1 !== id) {
                      if (-1 !== id1) {
                        obj = { doc: null, mirror: null, blockClass: null, blockSelector: null, maskAllText: null, unblockSelector: null, maskTextClass: null, unmaskTextClass: null, maskTextSelector: null, unmaskTextSelector: null, skipChild: true, newlyAddedElement: true, inlineStylesheet: null, maskInputOptions: null, maskAttributeFn: null, maskTextFn: null, maskInputFn: null, slimDOMOptions: null, dataURLOptions: null, recordCanvas: null, inlineImages: null, onSerialize: null, onIframeLoad: null, onStylesheetLoad: null, onBlockedImageLoad: null, ignoreCSSAttributes: null };
                        ({ doc: obj2.doc, mirror: obj2.mirror, blockClass: obj2.blockClass, blockSelector: obj2.blockSelector, maskAllText: obj2.maskAllText, unblockSelector: obj2.unblockSelector, maskTextClass: obj2.maskTextClass, unmaskTextClass: obj2.unmaskTextClass, maskTextSelector: obj2.maskTextSelector, unmaskTextSelector: obj2.unmaskTextSelector, inlineStylesheet: obj2.inlineStylesheet, maskInputOptions: obj2.maskInputOptions, maskAttributeFn: obj2.maskAttributeFn, maskTextFn: obj2.maskTextFn, maskInputFn: obj2.maskInputFn, slimDOMOptions: obj2.slimDOMOptions, dataURLOptions: obj2.dataURLOptions, recordCanvas: obj2.recordCanvas, inlineImages: obj2.inlineImages } = self);
                        obj.onSerialize = function onSerialize() { ... };
                        obj.onIframeLoad = function onIframeLoad() { ... };
                        obj.onStylesheetLoad = function onStylesheetLoad() { ... };
                        obj.onBlockedImageLoad = function onBlockedImageLoad() { ... };
                        obj.ignoreCSSAttributes = self.ignoreCSSAttributes;
                        const tmp24 = serializeNodeWithId(value, obj);
                        if (tmp24) {
                          obj = { parentId: id, nextId: id1, node: tmp24 };
                          items.push(obj);
                          set.add(tmp24.id);
                        }
                      }
                    }
                    return arr2.addNode(value);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              }
            }
            if (tmp.mapRemoves.length) {
              do {
                tmp = items;
                let mirror = items.mirror;
                let mapRemoves = items.mapRemoves;
                let removeNodeFromMapResult = mirror.removeNodeFromMap(mapRemoves.shift());
                length = items.mapRemoves.length;
              } while (length);
            }
            const movedSet = tmp.movedSet;
            const iter = movedSet[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let tmp20 = nextResult;
              let tmp23 = items;
              let tmp24 = closure_1_83(items.removes, nextResult, items.mirror);
              if (tmp24) {
                let movedSet2 = tmp23.movedSet;
                tmp24 = !movedSet2.has(tmp20.parentNode);
              }
              if (!tmp24) {
                let pushAddResult = pushAdd(tmp20);
              }
              continue;
            }
            const addedSet = items.addedSet;
            for (const item10064 of addedSet) {
              let tmp36 = items;
              if (!closure_1_84(items.droppedSet, item10064)) {
                if (!closure_1_83(tmp36.removes, item10064, tmp36.mirror)) {
                  let pushAddResult1 = pushAdd(item10064);
                }
                continue;
              }
              if (closure_1_84(tmp36.movedSet, item10064)) {
                let pushAddResult2 = pushAdd(item10064);
              } else {
                let droppedSet = tmp36.droppedSet;
                let addResult = droppedSet.add(item10064);
              }
            }
            let previous = null;
            if (arr2.length) {
              while (true) {
                let tmp51 = null;
                if (previous) {
                  let mirror2 = items.mirror;
                  let id = mirror2.getId(previous.value.parentNode);
                  let tmp55 = -1 !== id && -1 !== getNextId(previous.value);
                  tmp51 = null;
                  if (tmp55) {
                    tmp51 = previous;
                  }
                }
                let iter2 = tmp51;
                if (!tmp51) {
                  let iter3 = arr2.tail;
                  iter2 = tmp51;
                  if (iter3) {
                    while (true) {
                      previous = iter3.previous;
                      if (iter3) {
                        let mirror3 = items.mirror;
                        let tmp58 = items;
                        let id1 = mirror3.getId(iter3.value.parentNode);
                        if (-1 !== getNextId(iter3.value)) {
                          iter2 = iter3;
                          if (-1 !== id1) {
                            break;
                          } else {
                            value = iter3.value;
                            if (value.parentNode) {
                              if (value.parentNode.nodeType === globalThis.Node.DOCUMENT_FRAGMENT_NODE) {
                                let mirror4 = tmp58.mirror;
                                iter2 = iter3;
                                if (-1 !== mirror4.getId(value.parentNode.host)) {
                                  break;
                                }
                              }
                              break;
                            }
                          }
                        }
                        break;
                      }
                      iter2 = tmp51;
                      iter3 = previous;
                      if (!previous) {
                        break;
                      }
                    }
                  }
                }
                if (!iter2) {
                  break;
                } else {
                  previous = iter2.previous;
                  let removeNodeResult = arr2.removeNode(iter2.value);
                  let pushAddResult3 = pushAdd(iter2.value);
                }
              }
              if (arr2.head) {
                do {
                  let removeNodeResult1 = arr2.removeNode(arr2.head.value);
                  head = arr2.head;
                } while (head);
              }
            }
            obj = { texts: null, attributes: null, removes: null, adds: null };
            const texts = items.texts;
            const mapped = texts.map((value) => {
              obj = { id: null, value: value.value };
              const mirror = items.mirror;
              obj.id = mirror.getId(value.node);
              return obj;
            });
            const found = mapped.filter((id) => !set.has(id.id));
            obj.texts = found.filter((id) => {
              const mirror = items.mirror;
              return mirror.has(id.id);
            });
            let attributes = items.attributes;
            const mapped1 = attributes.map((attributes) => {
              attributes = attributes.attributes;
              if (typeof attributes.style === "string") {
                const _JSON = JSON;
                const json = JSON.stringify(attributes.styleDiff);
                const _JSON2 = JSON;
                let tmp = json.length < attributes.style.length;
                if (tmp) {
                  tmp = json + JSON.stringify(attributes._unchangedStyles).split("var(").length === attributes.style.split("var(").length;
                  const str = json + JSON.stringify(attributes._unchangedStyles);
                }
                if (tmp) {
                  attributes.style = attributes.styleDiff;
                }
              }
              obj = { id: null, attributes };
              const mirror = items.mirror;
              obj.id = mirror.getId(attributes.node);
              return obj;
            });
            const found1 = mapped1.filter((id) => !set.has(id.id));
            obj.attributes = found1.filter((id) => {
              const mirror = items.mirror;
              return mirror.has(id.id);
            });
            obj.removes = items.removes;
            obj.adds = items;
            if (tmp65) {
              obj2.texts = [];
              obj2.attributes = [];
              const _WeakMap = WeakMap;
              weakMap = new WeakMap();
              obj2.attributeMap = weakMap;
              obj2.removes = [];
              const _Set2 = Set;
              const set1 = new Set();
              obj2.addedSet = set1;
              const _Set3 = Set;
              set2 = new Set();
              obj2.movedSet = set2;
              const _Set4 = Set;
              const set3 = new Set();
              obj2.droppedSet = set3;
              obj2.movedMap = {};
              obj2.mutationCb(obj);
            }
            set = new Set();
            tmp65 = obj.texts.length || obj.attributes.length || obj.removes.length || obj.adds.length;
          }
        }
      };
      this.processMutation = (target) => {
        _self = target;
        obj = _self;
        if (!closure_1_66(target.target, _self.mirror)) {
          const type = target.type;
          if ("characterData" === type) {
            if (!tmp46) {
              const texts = obj.texts;
              let tmp48 = str15;
              if (closure_1_56(target.target, obj.maskTextClass, obj.maskTextSelector, obj.unmaskTextClass, obj.unmaskTextSelector, obj.maskAllText)) {
                tmp48 = str15;
                if (str15) {
                  if (obj.maskTextFn) {
                    let maskTextFnResult = obj.maskTextFn(str15, closure_1_64(target.target));
                  } else {
                    maskTextFnResult = str15.replace(/[\S]/g, "*");
                  }
                }
              }
              obj = { value: tmp48, node: target.target };
              texts.push(obj);
            }
            tmp46 = closure_1_65(target.target, obj.blockClass, obj.blockSelector, obj.unblockSelector, false) || target.target.textContent === target.oldValue;
          } else if ("attributes" === type) {
            ({ target, attributeName, target: target2 } = target);
            let attr = target2.getAttribute(attributeName);
            if ("value" === attributeName) {
              const tmp55 = closure_1_29(target);
              const tagName = target.tagName;
              obj = { maskInputOptions: null, tagName: null, type: null };
              obj.maskInputOptions = obj.maskInputOptions;
              obj.tagName = tagName;
              obj.type = tmp55;
              obj1 = { isMasked: closure_1_56(target.target, obj.maskTextClass, obj.maskTextSelector, obj.unmaskTextClass, obj.unmaskTextSelector, closure_1_24(obj)), element: target, value: closure_1_30(target, tagName, tmp55), maskInputFn: obj.maskInputFn };
              attr = closure_1_25(obj1);
              const tmp57 = closure_1_30(target, tagName, tmp55);
            }
            if (!closure_1_65(target.target, obj.blockClass, obj.blockSelector, obj.unblockSelector, false)) {
              if (attr !== target.oldValue) {
                const attributeMap2 = obj.attributeMap;
                value = attributeMap2.get(target.target);
                let str5 = attributeName;
                if ("IFRAME" === target.tagName) {
                  str5 = attributeName;
                  if ("src" === attributeName) {
                    str5 = attributeName;
                    if (!obj.keepIframeSrcFn(attr)) {
                      str5 = "rr_src";
                    }
                  }
                }
                let tmp7 = value;
                if (!value) {
                  obj2 = { node: target.target, attributes: {}, styleDiff: {}, _unchangedStyles: {} };
                  const attributes = obj.attributes;
                  attributes.push(obj2);
                  const attributeMap = obj.attributeMap;
                  const result = attributeMap.set(target.target, obj2);
                  tmp7 = obj2;
                }
                let tmp10 = "type" === str5;
                if (tmp10) {
                  tmp10 = "INPUT" === target.tagName;
                }
                if (tmp10) {
                  tmp10 = "password" === target.oldValue || "".toLowerCase();
                  const str8 = target.oldValue || "";
                }
                if (tmp10) {
                  const attr1 = target.setAttribute("data-rr-is-password", "true");
                }
                if (!closure_1_53(target.tagName, str5)) {
                  const doc = obj.doc;
                  tmp7.attributes[str5] = closure_1_52(doc, closure_1_26(target.tagName), closure_1_26(str5), attr, target, obj.maskAttributeFn);
                  if ("style" === str5) {
                    if (!obj.unattachedDoc) {
                      try {
                        const _document = document;
                        obj.unattachedDoc = implementation.createHTMLDocument();
                      } catch (err) {
                        tmp.unattachedDoc = tmp.doc;
                      }
                    }
                    const unattachedDoc = obj.unattachedDoc;
                    const element = <span />;
                    if (target.oldValue) {
                      const attr2 = element.setAttribute("style", target.oldValue);
                    }
                    const _Array = Array;
                    const arr1 = Array.from(target.style);
                    const iter = arr1[Symbol.iterator]();
                    const nextResult = iter.next();
                    while (iter !== undefined) {
                      let tmp27 = nextResult;
                      let style = target.style;
                      let propertyValue = style.getPropertyValue(nextResult);
                      let tmp29 = propertyValue;
                      let style2 = target.style;
                      let propertyPriority = style2.getPropertyPriority(nextResult);
                      let style3 = element.style;
                      if (propertyValue === style3.getPropertyValue(nextResult)) {
                        let style4 = element.style;
                        if (propertyPriority === style4.getPropertyPriority(tmp27)) {
                          let items = [tmp29, ];
                          items[1] = propertyPriority;
                          tmp7._unchangedStyles[tmp27] = items;
                          continue;
                        }
                      }
                      if ("" === propertyPriority) {
                        let items1 = propertyValue;
                      } else {
                        items1 = [tmp29, ];
                        items1[1] = propertyPriority;
                      }
                      tmp7.styleDiff[tmp27] = items1;
                    }
                    const _Array2 = Array;
                    const arr2 = Array.from(element.style);
                    for (const item10147 of arr2) {
                      let style5 = target.style;
                      if ("" === style5.getPropertyValue(item10147)) {
                        tmp7.styleDiff[item10147] = false;
                      }
                      continue;
                    }
                  }
                  const tmp15 = closure_1_26(target.tagName);
                }
              }
            }
          } else if ("childList" === type) {
            if (!closure_1_65(target.target, obj.blockClass, obj.blockSelector, obj.unblockSelector, true)) {
              const addedNodes = target.addedNodes;
              let item = addedNodes.forEach((item) => self.genAdds(item, target.target));
              const removedNodes = target.removedNodes;
              let item1 = removedNodes.forEach((childNodes) => {
                let arr = self;
                const mirror = self.mirror;
                const id = mirror.getId(childNodes);
                target = target.target;
                let host;
                if (target != null) {
                  host = target.host;
                }
                let shadowRoot;
                if (host != null) {
                  shadowRoot = host.shadowRoot;
                }
                const mirror2 = arr.mirror;
                const getId = mirror2.getId;
                const target2 = tmp3.target;
                if (Boolean(shadowRoot === target)) {
                  let id1 = getId(target2.host);
                } else {
                  id1 = getId(target2);
                }
                let tmp7 = isBlocked(tmp3.target, arr.blockClass, arr.blockSelector, arr.unblockSelector, false);
                if (!tmp7) {
                  const mirror3 = arr.mirror;
                  tmp7 = -2 === mirror3.getId(childNodes);
                }
                if (!tmp7) {
                  const mirror4 = arr.mirror;
                  tmp7 = -1 === mirror4.getId(childNodes);
                }
                if (!tmp7) {
                  ({ addedSet, addedSet: addedSet2 } = arr);
                  if (addedSet.has(childNodes)) {
                    let movedSet2 = addedSet2;
                    addedSet2.delete(childNodes);
                    childNodes = childNodes.childNodes;
                    if (childNodes != null) {
                      let item = childNodes.forEach(() => { ... });
                    }
                    const droppedSet = arr.droppedSet;
                    droppedSet.add(childNodes);
                  } else {
                    let hasItem = addedSet2.has(tmp3.target);
                    if (hasItem) {
                      hasItem = -1 === id;
                    }
                    if (!hasItem) {
                      const target3 = tmp3.target;
                      const mirror5 = arr.mirror;
                      let host1;
                      if (target3 != null) {
                        host1 = target3.host;
                      }
                      let shadowRoot1;
                      if (host1 != null) {
                        shadowRoot1 = host1.shadowRoot;
                      }
                      let flag = false;
                      if (!Boolean(shadowRoot1 === target3)) {
                        const hasItem1 = mirror5.has(mirror5.getId(target3));
                        let tmp12 = !hasItem1;
                        if (hasItem1) {
                          const parentNode = target3.parentNode;
                          let tmp13 = !parentNode;
                          if (parentNode) {
                            tmp13 = target3.parentNode.nodeType !== target3.DOCUMENT_NODE;
                          }
                          if (tmp13) {
                            const parentNode2 = target3.parentNode;
                            let tmp14 = !parentNode2;
                            if (parentNode2) {
                              const parentNode3 = target3.parentNode;
                              let host2;
                              if (parentNode3 != null) {
                                host2 = parentNode3.host;
                              }
                              let shadowRoot2;
                              if (host2 != null) {
                                shadowRoot2 = host2.shadowRoot;
                              }
                              let flag2 = false;
                              if (!Boolean(shadowRoot2 === parentNode3)) {
                                const hasItem2 = mirror5.has(mirror5.getId(parentNode3));
                                let tmp18 = !hasItem2;
                                if (hasItem2) {
                                  const parentNode4 = parentNode3.parentNode;
                                  let tmp19 = !parentNode4;
                                  if (parentNode4) {
                                    tmp19 = parentNode3.parentNode.nodeType !== parentNode3.DOCUMENT_NODE;
                                  }
                                  if (tmp19) {
                                    const parentNode5 = parentNode3.parentNode;
                                    let tmp20 = !parentNode5;
                                    if (parentNode5) {
                                      tmp20 = isAncestorRemoved(parentNode3.parentNode, mirror5);
                                    }
                                    tmp19 = tmp20;
                                  }
                                  tmp18 = tmp19;
                                }
                                flag2 = tmp18;
                              }
                              tmp14 = flag2;
                            }
                            tmp13 = tmp14;
                          }
                          tmp12 = tmp13;
                        }
                        flag = tmp12;
                      }
                      hasItem = flag;
                    }
                    if (!hasItem) {
                      const movedSet = arr.movedSet;
                      if (!movedSet.has(childNodes)) {
                        const removes = arr.removes;
                        obj = { parentId: id1, id, isShadow: null };
                        const target4 = tmp3.target;
                        let host3;
                        if (target4 != null) {
                          host3 = target4.host;
                        }
                        let shadowRoot3;
                        if (host3 != null) {
                          shadowRoot3 = host3.shadowRoot;
                        }
                        const BooleanResult = Boolean(shadowRoot3 === target4);
                        if (!BooleanResult) {
                          obj.isShadow = !tmp27;
                          arr = removes.push(obj);
                          const tmp30 = !tmp27;
                        } else {
                          const target5 = tmp3.target;
                          const _Object = Object;
                          let str3 = Object.prototype.toString;
                          const call = str3.call;
                          str3 = "[object ShadowRoot]";
                          const tmp28 = typeof call === "unknown" ? str3() : call(target5);
                        }
                        tmp27 = !BooleanResult;
                      } else if (typeof moveKey === "function") {
                        const _HermesInternal = HermesInternal;
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    movedSet2 = arr.movedSet;
                    movedSet2.delete(childNodes);
                    const childNodes1 = childNodes.childNodes;
                    if (childNodes1 != null) {
                      const item1 = childNodes1.forEach(() => { ... });
                    }
                  }
                  const mapRemoves = arr.mapRemoves;
                  arr = mapRemoves.push(childNodes);
                }
              });
            }
          }
        }
      };
      this.genAdds = (childNodes, arg1) => {
        _self = childNodes;
        let processedNodeManager = _self.processedNodeManager;
        if (!processedNodeManager.inOtherBuffer(childNodes, _self)) {
          const addedSet = tmp.addedSet;
          if (!addedSet.has(childNodes)) {
            const movedSet = tmp.movedSet;
            if (!movedSet.has(childNodes)) {
              const mirror = tmp.mirror;
              if (mirror.hasNode(childNodes)) {
                const mirror2 = tmp.mirror;
                if (-2 !== mirror2.getId(childNodes)) {
                  const movedSet2 = tmp.movedSet;
                  movedSet2.add(childNodes);
                  let hasNodeResult = arg1;
                  if (arg1) {
                    const mirror3 = tmp.mirror;
                    hasNodeResult = mirror3.hasNode(arg1);
                  }
                  let id = null;
                  if (hasNodeResult) {
                    const mirror4 = tmp.mirror;
                    id = mirror4.getId(arg1);
                  }
                  let tmp6 = id;
                  if (id) {
                    tmp6 = -1 !== id;
                  }
                  if (tmp6) {
                    ({ mirror: mirror5, movedMap } = tmp);
                    if (typeof closure_1_81 === "function") {
                      const _HermesInternal = HermesInternal;
                      movedMap["" + tmp8 + "@" + id] = true;
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                }
              } else {
                const addedSet2 = tmp.addedSet;
                addedSet2.add(childNodes);
                const droppedSet = tmp.droppedSet;
                droppedSet.delete(childNodes);
              }
              if (!closure_1_65(childNodes, tmp.blockClass, tmp.blockSelector, tmp.unblockSelector, false)) {
                if (childNodes.childNodes) {
                  childNodes = childNodes.childNodes;
                  const item = childNodes.forEach((item) => childNodes.genAdds(item));
                }
                let shadowRoot;
                if (childNodes != null) {
                  shadowRoot = childNodes.shadowRoot;
                }
                if (Boolean(shadowRoot)) {
                  const childNodes1 = childNodes.shadowRoot.childNodes;
                  const item1 = childNodes1.forEach((item) => {
                    const processedNodeManager = self.processedNodeManager;
                    processedNodeManager.add(item, self);
                    self.genAdds(item, closure_0);
                  });
                }
              }
            }
          }
        }
      };
      return;
    }
  }
  const entry = {
    key: "init",
    value: function init(arg0) {
      const self = this;
      closure_0 = arg0;
      const items = ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager", "ignoreCSSAttributes"];
      const item = items.forEach((item) => {
        self[item] = closure_0[item];
      });
    }
  };
  let items = [
    entry,
    {
      key: "freeze",
      value: function freeze() {
        this.frozen = true;
        const canvasManager = this.canvasManager;
        canvasManager.freeze();
      }
    },
    {
      key: "unfreeze",
      value: function unfreeze() {
        this.frozen = false;
        const canvasManager = this.canvasManager;
        canvasManager.unfreeze();
        this.emit();
      }
    },
    {
      key: "isFrozen",
      value: function isFrozen() {
        return this.frozen;
      }
    },
    {
      key: "lock",
      value: function lock() {
        this.locked = true;
        const canvasManager = this.canvasManager;
        canvasManager.lock();
      }
    },
    {
      key: "unlock",
      value: function unlock() {
        this.locked = false;
        const canvasManager = this.canvasManager;
        canvasManager.unlock();
        this.emit();
      }
    },
    {
      key: "reset",
      value: function reset() {
        const shadowDomManager = this.shadowDomManager;
        shadowDomManager.reset();
        const canvasManager = this.canvasManager;
        canvasManager.reset();
      }
    }
  ];
  return _createClass(MutationBuffer, items);
})();
function callbackWrapper(arg0) {
  closure_0 = arg0;
  return closure_79 ? (() => {
    items = [...arguments];
    try {
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      return HermesBuiltin.apply(items1, undefined);
    } catch (tmp7) {
      if (closure_2_79) {
        if (true === tmp8(tmp7)) {
          return () => {

          };
        }
      }
      throw tmp7;
    }
  }) : arg0;
}
let closure_87 = [];
let closure_92 = ["INPUT", "TEXTAREA", "SELECT"];
let weakMap1 = new WeakMap();
let closure_98 = (() => {
  class CrossOriginIframeMirror {
    constructor(arg0) {
      tmp = closure_7(this, CrossOriginIframeMirror);
      this.generateIdFn = arg0;
      weakMap = new WeakMap();
      this.iframeIdToRemoteIdMap = weakMap;
      weakMap1 = new WeakMap();
      this.iframeRemoteIdToIdMap = weakMap1;
      return;
    }
  }
  const entry = {
    key: "getId",
    value: function getId(arg0, arg1, arg2, arg3) {
      const self = this;
      let idToRemoteIdMap = arg2;
      if (!arg2) {
        idToRemoteIdMap = self.getIdToRemoteIdMap(arg0);
      }
      let remoteIdToIdMap = arg3;
      if (!arg3) {
        remoteIdToIdMap = self.getRemoteIdToIdMap(arg0);
      }
      value = idToRemoteIdMap.get(arg1);
      if (!value) {
        const idFn = self.generateIdFn();
        const result = idToRemoteIdMap.set(arg1, idFn);
        const result1 = remoteIdToIdMap.set(idFn, arg1);
        value = idFn;
      }
      return value;
    }
  };
  const items = [
    entry,
    {
      key: "getIds",
      value: function getIds(arg0, arr) {
        const self = this;
        closure_1 = arg0;
        const idToRemoteIdMap = this.getIdToRemoteIdMap(arg0);
        const remoteIdToIdMap = this.getRemoteIdToIdMap(arg0);
        return arr.map((item) => self.getId(closure_1, item, closure_2, closure_0));
      }
    },
    {
      key: "getRemoteId",
      value: function getRemoteId(arg0, item, arg2) {
        let remoteIdToIdMap = arg2;
        if (!arg2) {
          const self = this;
          remoteIdToIdMap = this.getRemoteIdToIdMap(arg0);
        }
        if (typeof item !== "number") {
          return item;
        } else {
          return remoteIdToIdMap.get(item) || -1;
        }
      }
    },
    {
      key: "getRemoteIds",
      value: function getRemoteIds(arg0, arr) {
        const self = this;
        closure_1 = arg0;
        const remoteIdToIdMap = this.getRemoteIdToIdMap(arg0);
        return arr.map((item) => self.getRemoteId(closure_1, item, closure_0));
      }
    },
    {
      key: "reset",
      value: function reset(arg0) {
        const self = this;
        if (arg0) {
          const iframeIdToRemoteIdMap = self.iframeIdToRemoteIdMap;
          iframeIdToRemoteIdMap.delete(arg0);
          const iframeRemoteIdToIdMap = self.iframeRemoteIdToIdMap;
          iframeRemoteIdToIdMap.delete(arg0);
        } else {
          const _WeakMap = WeakMap;
          weakMap = new WeakMap();
          self.iframeIdToRemoteIdMap = weakMap;
          const _WeakMap2 = WeakMap;
          weakMap1 = new WeakMap();
          self.iframeRemoteIdToIdMap = weakMap1;
        }
      }
    },
    {
      key: "getIdToRemoteIdMap",
      value: function getIdToRemoteIdMap(arg0) {
        const iframeIdToRemoteIdMap = this.iframeIdToRemoteIdMap;
        value = iframeIdToRemoteIdMap.get(arg0);
        if (!value) {
          const _Map = Map;
          const map = new Map();
          const iframeIdToRemoteIdMap2 = this.iframeIdToRemoteIdMap;
          const result = iframeIdToRemoteIdMap2.set(arg0, map);
          value = map;
        }
        return value;
      }
    },
    {
      key: "getRemoteIdToIdMap",
      value: function getRemoteIdToIdMap(arg0) {
        const iframeRemoteIdToIdMap = this.iframeRemoteIdToIdMap;
        value = iframeRemoteIdToIdMap.get(arg0);
        if (!value) {
          const _Map = Map;
          const map = new Map();
          const iframeRemoteIdToIdMap2 = this.iframeRemoteIdToIdMap;
          const result = iframeRemoteIdToIdMap2.set(arg0, map);
          value = map;
        }
        return value;
      }
    }
  ];
  return _createClass(CrossOriginIframeMirror, items);
})();
let closure_99 = (() => {
  class IframeManagerNoop {
    constructor() {
      tmp = closure_7(this, IframeManagerNoop);
      tmp2 = new closure_98(genId);
      this.crossOriginIframeMirror = tmp2;
      weakMap = new WeakMap();
      this.crossOriginIframeRootIdMap = weakMap;
      return;
    }
  }
  const entry = {
    key: "addIframe",
    value: function addIframe() {

    }
  };
  const items = [
    entry,
    {
      key: "addLoadListener",
      value: function addLoadListener() {

      }
    },
    {
      key: "attachIframe",
      value: function attachIframe() {

      }
    }
  ];
  return _createClass(IframeManagerNoop, items);
})();
let closure_100 = (() => {
  class IframeManager {
    constructor(arg0) {
      self = this;
      tmp = closure_7(this, IframeManager);
      weakMap = new WeakMap();
      this.iframes = weakMap;
      weakMap1 = new WeakMap();
      this.crossOriginIframeMap = weakMap1;
      tmp4 = new closure_98(genId);
      this.crossOriginIframeMirror = tmp4;
      weakMap2 = new WeakMap();
      this.crossOriginIframeRootIdMap = weakMap2;
      ({ mutationCb: this.mutationCb, wrappedEmit: this.wrappedEmit, stylesheetManager: this.stylesheetManager, recordCrossOriginIframes: this.recordCrossOriginIframes } = arg0);
      generateId = this.stylesheetManager.styleMirror.generateId;
      tmp6 = new closure_98(generateId.bind(this.stylesheetManager.styleMirror));
      this.crossOriginIframeStyleMirror = tmp6;
      this.mirror = arg0.mirror;
      if (this.recordCrossOriginIframes) {
        _window = window;
        handleMessage = self.handleMessage;
        str = "message";
        listener = window.addEventListener("message", handleMessage.bind(self));
      }
      return;
    }
  }
  const entry = {
    key: "addIframe",
    value: function addIframe(contentWindow) {
      const iframes = this.iframes;
      const result = iframes.set(contentWindow, true);
      if (contentWindow.contentWindow) {
        const crossOriginIframeMap = this.crossOriginIframeMap;
        const result1 = crossOriginIframeMap.set(contentWindow.contentWindow, contentWindow);
      }
    }
  };
  let items = [
    entry,
    {
      key: "addLoadListener",
      value: function addLoadListener(loadListener) {
        this.loadListener = loadListener;
      }
    },
    {
      key: "attachIframe",
      value: function attachIframe(contentWindow, node) {
        const self = this;
        obj = { adds: null, removes: null, texts: null, attributes: null, isAttachIframe: true };
        obj = { parentId: mirror.getId(contentWindow), nextId: null, node };
        ({ mirror, mutationCb } = this);
        const items = [obj];
        obj.adds = items;
        obj.removes = [];
        obj.texts = [];
        obj.attributes = [];
        mutationCb(obj);
        if (this.recordCrossOriginIframes) {
          contentWindow = contentWindow.contentWindow;
          if (contentWindow != null) {
            const handleMessage = self.handleMessage;
            const listener = contentWindow.addEventListener("message", handleMessage.bind(self));
          }
        }
        const loadListener = self.loadListener;
        if (loadListener != null) {
          const listener1 = loadListener(contentWindow);
        }
        const tmp5 = getIFrameContentDocument(contentWindow);
        let adoptedStyleSheets = tmp5;
        if (tmp5) {
          adoptedStyleSheets = tmp5.adoptedStyleSheets;
        }
        if (adoptedStyleSheets) {
          adoptedStyleSheets = tmp5.adoptedStyleSheets.length > 0;
        }
        if (adoptedStyleSheets) {
          ({ stylesheetManager, mirror: mirror2 } = self);
          stylesheetManager.adoptStyleSheets(tmp5.adoptedStyleSheets, mirror2.getId(tmp5));
        }
      }
    },
    {
      key: "handleMessage",
      value: function handleMessage(data) {
        if ("rrweb" === data.data.type) {
          if (data.origin === data.data.origin) {
            if (data.source) {
              const self = this;
              const crossOriginIframeMap = this.crossOriginIframeMap;
              value = crossOriginIframeMap.get(data.source);
              if (value) {
                const result = self.transformCrossOriginEvent(value, data.data.event);
                if (result) {
                  self.wrappedEmit(result, data.data.isCheckout);
                }
              }
            }
          }
        }
      }
    },
    {
      key: "transformCrossOriginEvent",
      value: function transformCrossOriginEvent(value, event) {
        const self = this;
        closure_0 = value;
        const type = event.type;
        if (FullSnapshot.FullSnapshot === type) {
          const crossOriginIframeMirror = self.crossOriginIframeMirror;
          crossOriginIframeMirror.reset(value);
          const crossOriginIframeStyleMirror = self.crossOriginIframeStyleMirror;
          crossOriginIframeStyleMirror.reset(value);
          self.replaceIdOnNode(event.data.node, value);
          const id = event.data.node.id;
          let crossOriginIframeRootIdMap = self.crossOriginIframeRootIdMap;
          const result = crossOriginIframeRootIdMap.set(value, id);
          self.patchRootIdOnNode(event.data.node, id);
          let data = { timestamp: event.timestamp, type: FullSnapshot.IncrementalSnapshot, data: null };
          data = { source: obj2.Mutation, adds: null, removes: null, texts: null, attributes: null, isAttachIframe: true };
          data = { parentId: null, nextId: null, node: null };
          const mirror = self.mirror;
          data.parentId = mirror.getId(value);
          data.node = event.data.node;
          const items = [data];
          data.adds = items;
          data.removes = [];
          data.texts = [];
          data.attributes = [];
          data.data = data;
          return data;
        } else {
          if (FullSnapshot.Meta !== type) {
            if (FullSnapshot.Load !== type) {
              if (FullSnapshot.DomContentLoaded !== type) {
                if (FullSnapshot.Plugin === type) {
                  return event;
                } else if (FullSnapshot.Custom === type) {
                  self.replaceIds(event.data.payload, value, ["id", "parentId", "previousId", "nextId"]);
                  return event;
                } else {
                  if (FullSnapshot.IncrementalSnapshot === type) {
                    const source = event.data.source;
                    if (obj2.Mutation === source) {
                      const adds = event.data.adds;
                      const item = adds.forEach((node) => {
                        self.replaceIds(node, closure_0, ["parentId", "nextId", "previousId"]);
                        self.replaceIdOnNode(node.node, closure_0);
                        const crossOriginIframeRootIdMap = self.crossOriginIframeRootIdMap;
                        value = crossOriginIframeRootIdMap.get(closure_0);
                        if (value) {
                          self.patchRootIdOnNode(node.node, value);
                        }
                      });
                      const removes = event.data.removes;
                      const item1 = removes.forEach((item) => {
                        self.replaceIds(item, closure_0, ["parentId", "id"]);
                      });
                      const attributes = event.data.attributes;
                      const item2 = attributes.forEach((item) => {
                        self.replaceIds(item, closure_0, ["id"]);
                      });
                      const texts = event.data.texts;
                      const item3 = texts.forEach((item) => {
                        self.replaceIds(item, closure_0, ["id"]);
                      });
                      return event;
                    } else {
                      if (obj2.Drag !== source) {
                        if (obj2.TouchMove !== source) {
                          if (obj2.MouseMove !== source) {
                            if (obj2.ViewportResize === source) {
                              return false;
                            } else {
                              if (obj2.MediaInteraction !== source) {
                                if (obj2.MouseInteraction !== source) {
                                  if (obj2.Scroll !== source) {
                                    if (obj2.CanvasMutation !== source) {
                                      if (obj2.Input !== source) {
                                        if (obj2.StyleSheetRule !== source) {
                                          if (obj2.StyleDeclaration !== source) {
                                            if (obj2.Font === source) {
                                              return event;
                                            } else if (obj2.Selection === source) {
                                              const ranges = event.data.ranges;
                                              const item4 = ranges.forEach((item) => {
                                                self.replaceIds(item, closure_0, ["start", "end"]);
                                              });
                                              return event;
                                            } else if (obj2.AdoptedStyleSheet === source) {
                                              self.replaceIds(event.data, value, ["id"]);
                                              self.replaceStyleIds(event.data, value, ["styleIds"]);
                                              const styles = event.data.styles;
                                              if (styles != null) {
                                                const item5 = styles.forEach((item) => {
                                                  self.replaceStyleIds(item, closure_0, ["styleId"]);
                                                });
                                              }
                                              return event;
                                            }
                                          }
                                        }
                                        self.replaceIds(event.data, value, ["id"]);
                                        self.replaceStyleIds(event.data, value, ["styleId"]);
                                        return event;
                                      }
                                    }
                                  }
                                }
                              }
                              self.replaceIds(event.data, value, ["id"]);
                              return event;
                            }
                          }
                        }
                      }
                      const positions = event.data.positions;
                      const item6 = positions.forEach((item) => {
                        self.replaceIds(item, closure_0, ["id"]);
                      });
                      return event;
                    }
                  }
                  return false;
                }
              }
            }
          }
          return false;
        }
      }
    },
    {
      key: "replace",
      value: function replace(getIds, arg1, arg2, arg3) {
        const iter = arg3[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          let _Array = Array;
          let isArray = Array.isArray(arg1[nextResult]);
          if (!isArray) {
            isArray = typeof arg1[tmp2] === "number";
          }
          if (isArray) {
            let _Array2 = Array;
            if (Array.isArray(arg1[tmp2])) {
              arg1[tmp2] = getIds.getIds(arg2, arg1[tmp2]);
            } else {
              arg1[tmp2] = getIds.getId(arg2, arg1[tmp2]);
            }
          }
          continue;
        }
        return arg1;
      }
    },
    {
      key: "replaceIds",
      value: function replaceIds(data, value, arg2) {
        return this.replace(this.crossOriginIframeMirror, data, value, arg2);
      }
    },
    {
      key: "replaceStyleIds",
      value: function replaceStyleIds(data, value, arg2) {
        return this.replace(this.crossOriginIframeStyleMirror, data, value, arg2);
      }
    },
    {
      key: "replaceIdOnNode",
      value: function replaceIdOnNode(node, value) {
        const self = this;
        closure_0 = value;
        this.replaceIds(node, value, ["id", "rootId"]);
        if ("childNodes" in node) {
          const childNodes = node.childNodes;
          const item = childNodes.forEach((item) => {
            self.replaceIdOnNode(item, closure_0);
          });
        }
      }
    },
    {
      key: "patchRootIdOnNode",
      value: function patchRootIdOnNode(node, id) {
        const self = this;
        closure_0 = id;
        if (!tmp) {
          node.rootId = id;
        }
        if ("childNodes" in node) {
          const childNodes = node.childNodes;
          const item = childNodes.forEach((item) => {
            self.patchRootIdOnNode(item, closure_0);
          });
        }
      }
    }
  ];
  return _createClass(IframeManager, items);
})();
let closure_101 = (() => {
  class ShadowDomManagerNoop {
    constructor() {
      tmp = closure_7(this, ShadowDomManagerNoop);
      return;
    }
  }
  const entry = {
    key: "init",
    value: function init() {

    }
  };
  const items = [
    entry,
    {
      key: "addShadowRoot",
      value: function addShadowRoot() {

      }
    },
    {
      key: "observeAttachShadow",
      value: function observeAttachShadow() {

      }
    },
    {
      key: "reset",
      value: function reset() {

      }
    }
  ];
  return _createClass(ShadowDomManagerNoop, items);
})();
let closure_102 = (() => {
  class ShadowDomManager {
    constructor(arg0) {
      tmp = closure_7(this, ShadowDomManager);
      weakSet = new WeakSet();
      this.shadowDoms = weakSet;
      this.restoreHandlers = [];
      ({ mutationCb: this.mutationCb, scrollCb: this.scrollCb, bypassOptions: this.bypassOptions, mirror: this.mirror } = arg0);
      initResult = this.init();
      return;
    }
  }
  const entry = {
    key: "init",
    value: function init() {
      this.reset();
      this.patchAttachShadow(globalThis.Element, document);
    }
  };
  const items = [
    entry,
    {
      key: "addShadowRoot",
      value: function addShadowRoot(doc, doc2) {
        const self = this;
        const call = toString.call;
        if ("[object ShadowRoot]" === (typeof call === "unknown" ? toString() : call(doc))) {
          const shadowDoms2 = self.shadowDoms;
          if (!shadowDoms2.has(doc)) {
            const shadowDoms = self.shadowDoms;
            shadowDoms.add(doc);
            const canvasManager = self.bypassOptions.canvasManager;
            canvasManager.addShadowRoot(doc);
            obj = {};
            const merged = Object.assign(self.bypassOptions);
            obj.doc = doc2;
            ({ mutationCb: obj.mutationCb, mirror: obj.mirror } = self);
            obj.shadowDomManager = self;
            closure_0 = closure_89(obj, doc);
            self.restoreHandlers.push(() => closure_0.disconnect());
            obj = {};
            const merged1 = Object.assign(self.bypassOptions);
            obj.scrollCb = self.scrollCb;
            obj.doc = doc;
            obj.mirror = self.mirror;
            self.restoreHandlers.push(closure_91(obj));
            closure_72(() => {
              let adoptedStyleSheets = doc.adoptedStyleSheets;
              if (adoptedStyleSheets) {
                adoptedStyleSheets = doc.adoptedStyleSheets.length > 0;
              }
              if (adoptedStyleSheets) {
                const stylesheetManager = self.bypassOptions.stylesheetManager;
                const mirror = self.mirror;
                stylesheetManager.adoptStyleSheets(doc.adoptedStyleSheets, mirror.getId(doc.host));
              }
              self.restoreHandlers.push(initAdoptedStyleSheetObserver({ mirror: self.mirror, stylesheetManager: self.bypassOptions.stylesheetManager }, doc));
              obj = { mirror: self.mirror, stylesheetManager: self.bypassOptions.stylesheetManager };
              const restoreHandlers = self.restoreHandlers;
            }, 0);
            let restoreHandlers = self.restoreHandlers;
            const restoreHandlers1 = self.restoreHandlers;
          }
        }
      }
    },
    {
      key: "observeAttachShadow",
      value: function observeAttachShadow(contentWindow) {
        const tmp = getIFrameContentDocument(contentWindow);
        const tmp2 = (function getIFrameContentWindow(contentWindow) {
          try {
            return contentWindow.contentWindow;
          } catch (err) {
          }
        })(contentWindow);
        let tmp3 = tmp;
        if (tmp) {
          tmp3 = tmp2;
        }
        if (tmp3) {
          const self = this;
          this.patchAttachShadow(tmp2.Element, tmp);
        }
      }
    },
    {
      key: "patchAttachShadow",
      value: function patchAttachShadow(Element, document) {
        closure_0 = document;
        let self = this;
        this.restoreHandlers.push(closure_61(Element.prototype, "attachShadow", (arg0) => {
          closure_0 = arg0;
          return function(arg0) {
            self = this;
            const call = closure_0.call;
            let shadowRoot = self.shadowRoot;
            if (shadowRoot) {
              shadowRoot = inDom(self);
            }
            if (shadowRoot) {
              self.addShadowRoot(self.shadowRoot, closure_0);
            }
            return typeof call === "unknown" ? closure_0(arg0) : call(self, arg0);
          };
        }));
      }
    },
    {
      key: "reset",
      value: function reset() {
        const item = this.restoreHandlers.forEach((fn) => {
          try {
            fn();
          } catch (err) {
          }
        });
        this.restoreHandlers = [];
        const weakSet = new WeakSet();
        this.shadowDoms = weakSet;
        const canvasManager = this.bypassOptions.canvasManager;
        canvasManager.resetShadowRoots();
      }
    }
  ];
  return _createClass(ShadowDomManager, items);
})();
if (typeof Uint8Array === "undefined") {
  let items = [];
} else {
  let _Uint8Array = Uint8Array;
  let uint8Array = new Uint8Array(256);
}