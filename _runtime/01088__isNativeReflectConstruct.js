// _runtime/01088__isNativeReflectConstruct.js
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";
import addClsInstrumentationHandler from "01033_addClsInstrumentationHandler.js";
import closure_2 from "00005_asyncGeneratorStep.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import closure_5 from "00098__inherits.js";
import _wrapNativeSuper from "metro/00158__wrapNativeSuper.js";
import closure_6 from "metro/00032__slicedToArray.js";
import closure_7 from "metro/00041__classCallCheck.js";
import closure_8 from "metro/00042__createClass.js";
import { registerSpanErrorInstrumentation } from "00817_registerSpanErrorInstrumentation.js";

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
            let tmp4 = num;
            let tmp5 = str;
            let str3 = "";
            if (propertyPriority) {
              str3 = " !important";
            }
            let _HermesInternal = HermesInternal;
            let str4 = "";
            let tmp6 = tmp;
            let str5 = ":";
            let tmp7 = propertyValue;
            let tmp8 = str3;
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
function getInputValue(getAttribute) {
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
  if (table[clearTimeout]) {
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
function absoluteToStylesheet(arg0, arg1) {
  let str = arg0;
  closure_0 = arg1;
  if (!arg0) {
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
      if (!closure_1_43.test(str)) {
        if (!closure_1_44.test(str)) {
          if (closure_1_45.test(str)) {
            const _HermesInternal3 = HermesInternal;
            return "url(" + str2 + str + str2 + ")";
          } else if ("/" === 5) {
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
                let tmp9 = nextResult;
                if (".." === tmp8) {
                  let arr = parts.pop();
                } else {
                  let tmp10 = nextResult;
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
  let value = weakMap.get(createElement);
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
function transformAttribute(createElement, arg1, arg2, str, arg4, fn, size) {
  let sum3;
  if (str) {
    if ("src" !== arg2) {
      if ("xlink:href" === arg2) {
        if ("#" !== str[0]) {
          let tmp48 = str;
          if (str) {
            let str35 = "";
            tmp48 = str;
            if ("" !== str.trim()) {
              let value = weakMap.get(createElement);
              if (!value) {
                const element = <a />;
                const result = obj11.set(createElement, element);
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
              obj11 = weakMap;
            }
          }
          return tmp48;
        }
      }
      if ("background" === arg2) {
        let tmp44 = str;
        if (str) {
          let str31 = "";
          tmp44 = str;
          if ("" !== str.trim()) {
            value = weakMap.get(createElement);
            if (!value) {
              const element1 = <a />;
              const result1 = obj9.set(createElement, element1);
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
            obj9 = weakMap;
          }
        }
        return tmp44;
      }
      if ("srcset" === arg2) {
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
              let tmp18 = regex;
              let match1 = regex.exec(str.substring(num2));
              let tmp20 = num2;
              let sum = num2;
              let str23 = "";
              if (match1) {
                let first = match1[0];
                sum = num2 + first.length;
                str23 = first;
              }
              let tmp22 = str23;
              if ("," === str23.slice(-1)) {
                let str28 = str23.substring(0, str23.length - 1);
                let tmp35 = str28;
                if (str28) {
                  tmp35 = str28;
                  if ("" !== str28.trim()) {
                    let obj7 = weakMap;
                    let value1 = weakMap.get(createElement);
                    if (!value1) {
                      let element2 = <a />;
                      let result2 = obj7.set(createElement, element2);
                      value1 = element2;
                    }
                    let str29 = "";
                    if (!str28) {
                      let attr2 = value1.setAttribute("href", ``);
                      let href3 = value1.href;
                    } else {
                      href3 = str28;
                      if (!str28.startsWith("blob:")) {
                        str29 = str28;
                        href3 = str28;
                      }
                    }
                    tmp35 = href3;
                  }
                }
                let arr = items.push(tmp35);
                let sum2 = sum;
              } else {
                let tmp23 = str23;
                if (str23) {
                  tmp23 = str23;
                  if ("" !== str23.trim()) {
                    obj5 = weakMap;
                    let value2 = weakMap.get(createElement);
                    if (!value2) {
                      let element3 = <a />;
                      let result3 = obj5.set(createElement, element3);
                      value2 = element3;
                    }
                    let str24 = "";
                    if (!str23) {
                      let attr3 = value2.setAttribute("href", ``);
                      let href2 = value2.href;
                    } else {
                      href2 = str23;
                      if (!str23.startsWith("blob:")) {
                        str24 = str23;
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
                let tmp29 = sum1;
                let tmp30 = flag;
                let tmp31 = str25;
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
              let tmp40 = regex2;
              let match2 = regex2.exec(str.substring(sum2));
              let tmp42 = sum2;
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
      } else if ("style" === arg2) {
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
            if (!closure_1_43.test(str)) {
              if (!closure_1_44.test(str)) {
                if (closure_1_45.test(str)) {
                  const _HermesInternal3 = HermesInternal;
                  return "url(" + str2 + str + str2 + ")";
                } else if ("/" === 5) {
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
                      let tmp9 = nextResult;
                      if (".." === tmp8) {
                        let arr = parts.pop();
                      } else {
                        let tmp10 = nextResult;
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
                    let tmp7 = str3;
                    let trimmed = str3.trim();
                    let arr2 = trimmed;
                    if (trimmed) {
                      let tmp9 = trimmed;
                      let index = arr2.indexOf(":");
                      if (-1 !== index) {
                        let tmp15 = trimmed;
                        let tmp16 = index;
                        let str4 = arr2.slice(0, tmp11);
                        if (!size.has(str4.trim())) {
                          let tmp17 = items;
                          let tmp18 = trimmed;
                          let arr = items.push(arr2);
                        }
                      } else {
                        let tmp12 = items;
                        let tmp13 = trimmed;
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
          if ("data" === arg2) {
            let tmp5 = str;
            if (str) {
              let str9 = "";
              tmp5 = str;
              if ("" !== str.trim()) {
                let value4 = weakMap.get(createElement);
                if (!value4) {
                  const element5 = <a />;
                  const result5 = obj.set(createElement, element5);
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
                obj = weakMap;
              }
            }
            let tmp4 = tmp5;
          }
          return tmp4;
        }
        tmp4 = str;
        if (typeof fn === "function") {
          tmp4 = fn(arg2, str, arg4);
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
          const result6 = obj14.set(createElement, element6);
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
        obj14 = weakMap;
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
function distanceToMatch(nodeType) {
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
        if (!arg1(nodeType)) {
          tmp2 = distanceToMatch(nodeType.parentNode, arg1, num, num2 + 1);
        }
        num4 = tmp2;
      }
    }
    num3 = num4;
  }
  return num3;
}
function createMatchPredicate(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (parentNode) => {
    if (null === parentNode) {
      return false;
    } else {
      try {
        if (c0) {
          if (typeof tmp === "string") {
            const _HermesInternal = HermesInternal;
            if (parentNode.matches("." + tmp)) {
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
          })(parentNode, tmp)) {
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
function needMaskingText(nodeType) {
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
      if (arg5) {
        let tmp9Result = tmp9(obj, tmp11(arg3, arg4));
        let tmp9Result2 = tmp9Result;
        if (tmp9Result < 0) {
          return true;
        } else {
          let num7 = Infinity;
          let tmp11Result = tmp11(arg1, arg2);
          if (tmp9Result2 >= 0) {
            num7 = tmp9Result2;
          }
          tmp9Result = tmp9(parentElement, tmp11Result, num7);
        }
      } else {
        const tmp9Result1 = tmp9(obj, tmp11(arg1, arg2));
        tmp9Result = tmp9Result1;
        if (tmp9Result1 < 0) {
          return false;
        } else {
          let num5 = Infinity;
          tmp11Result = tmp11(arg3, arg4);
          if (tmp9Result >= 0) {
            num5 = tmp9Result;
          }
          tmp9Result2 = tmp9(obj, tmp11Result, num5);
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
          tmp23 = arg5;
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
    let tmp4;
    if (1 !== id) {
      tmp4 = id;
    }
  }
  nodeType = nodeType.nodeType;
  if (nodeType.DOCUMENT_NODE === nodeType) {
    if ("CSS1Compat" !== nodeType.compatMode) {
      obj = { type: null, childNodes: null, compatMode: null };
      obj[0] = obj.Document;
      obj[1] = [];
      obj[2] = nodeType.compatMode;
    } else {
      obj = { type: null, childNodes: null };
      obj[0] = obj.Document;
      obj[1] = [];
    }
    return obj;
  } else if (nodeType.DOCUMENT_TYPE_NODE === nodeType) {
    obj1 = { type: null, name: null, publicId: null, systemId: null, rootId: null };
    obj1[0] = obj.DocumentType;
    ({ name: obj5[1], publicId: obj5[2], systemId: obj5[3] } = nodeType);
    obj1[4] = tmp2;
    return obj1;
  } else if (nodeType.ELEMENT_NODE === nodeType) {
    obj2 = { doc: null, blockClass: null, blockSelector: null, unblockSelector: null, inlineStylesheet: null, maskAttributeFn: null, maskInputOptions: null, maskInputFn: null, dataURLOptions: null, inlineImages: null, recordCanvas: null, keepIframeSrcFn: null, newlyAddedElement: null, rootId: null, maskTextClass: null, unmaskTextClass: null, maskTextSelector: null, unmaskTextSelector: null, ignoreCSSAttributes: null };
    obj2[0] = doc;
    obj2[1] = blockClass;
    obj2[2] = blockSelector;
    obj2[3] = unblockSelector;
    obj2[4] = inlineStylesheet;
    obj2[5] = maskAttributeFn;
    obj2[6] = maskInputOptions;
    obj2[7] = maskInputFn;
    obj2[8] = dataURLOptions;
    obj2[9] = inlineImages;
    obj2[10] = recordCanvas;
    obj2[11] = keepIframeSrcFn;
    obj2[12] = tmp;
    obj2[13] = tmp2;
    obj2[14] = maskTextClass;
    obj2[15] = unmaskTextClass;
    obj2[16] = maskTextSelector;
    obj2[17] = unmaskTextSelector;
    obj2[18] = newlyAddedElement.ignoreCSSAttributes;
    return (function serializeElementNode(attributes, newlyAddedElement) {
      closure_0 = attributes;
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
                let tmp5 = diff;
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
        let tmp9 = num;
        if (name) {
          let tmp10 = callback13;
          name = !callback13(tmp8, iter.name, iter.value);
        }
        if (name) {
          let tmp11 = callback12;
          let tmp12 = callback4;
          let tmp13 = doc;
          let tmp14 = tmp8;
          let tmp15 = attributes;
          let tmp16 = maskAttributeFn;
          let tmp17 = ignoreCSSAttributes;
          obj[iter.name] = callback12(doc, tmp8, callback4(iter.name), iter.value, attributes, maskAttributeFn, ignoreCSSAttributes);
        }
      }
      if ("link" === tmp8) {
        if (inlineStylesheet) {
          const _Array = Array;
          const found = Array.from(doc.styleSheets).find((href) => href.href === attributes.href);
          let tmp21 = null;
          if (found) {
            tmp21 = callback(found);
          }
          if (tmp21) {
            obj.rel = null;
            obj.href = null;
            obj.crossorigin = null;
            obj._cssText = callback9(tmp21, found.href);
          }
          const arr = Array.from(doc.styleSheets);
        }
      }
      if ("style" === tmp8) {
        if (attributes.sheet) {
          if (!str.trim().length) {
            const tmp25 = callback(attributes.sheet);
            if (tmp25) {
              obj._cssText = callback9(tmp25, callback11(doc));
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
                            if (closure_28 in getImageData) {
                              tmp5 = getImageData[closure_28];
                            }
                            let call = tmp5.call;
                            let _Math = Math;
                            let bound = Math.min(50, getContext.width - num3);
                            let _Math2 = Math;
                            let bound1 = Math.min(50, getContext.height - num4);
                            if (typeof call === "unknown") {
                              let tmp8 = context;
                              let tmp9 = num3;
                              let tmp10 = num4;
                              let tmp11 = bound;
                              let tmp12 = bound1;
                              let callResult = tmp5(tmp3, tmp4, bound, bound1);
                            } else {
                              let tmp17 = tmp5;
                              let tmp18 = context;
                              let tmp19 = num3;
                              let tmp20 = num4;
                              let tmp21 = bound;
                              let tmp22 = bound1;
                              callResult = call(context, tmp3, tmp4, bound, bound1);
                            }
                            let tmp14 = new.target;
                            let tmp15 = new.target;
                            let uint32Array = new Uint32Array(callResult.data.buffer);
                            let tmp16 = uint32Array;
                            if (uint32Array.some((arg0) => 0 !== arg0)) {
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
              closure_3 = attributes;
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
                  element1.width = obj2.naturalWidth;
                  element1.height = obj2.naturalHeight;
                  closure_38.drawImage(obj2, 0, 0);
                  obj.rr_dataURL = element1.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                  if ("anonymous" === obj2.crossOrigin) {
                    if (crossOrigin) {
                      obj.crossOrigin = tmp15;
                    } else {
                      obj2.removeAttribute("crossorigin");
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
            obj[0] = obj.class;
            let _HermesInternal = HermesInternal;
            obj[1] = "" + size.width + "px";
            const _HermesInternal2 = HermesInternal;
            obj[2] = "" + size.height + "px";
            tmp44 = obj;
          }
          if (!tmp46) {
            let tmp47 = tmp7;
            if (!tmp7) {
              tmp47 = callback8(attributes);
            }
            if (!tmp47) {
              tmp44.rr_src = tmp44.src;
            }
            delete tmp2[tmp];
          }
          try {
            obj = { type: null, tagName: null, attributes: null, childNodes: null, isSVG: null, needBlock: null, rootId: null, isCustom: null };
            obj[0] = RN.Element;
            obj[1] = tmp8;
            obj[2] = tmp44;
            obj[3] = [];
            const tmp52 = callback10(attributes);
            obj[4] = tmp52;
            obj[5] = tmp7;
            obj[6] = tmp6;
            obj[7] = flag;
            return obj;
          } catch (err) {
          }
          tmp46 = "iframe" !== tmp8 || keepIframeSrcFn(tmp44.src);
        }
      }
      const tmp28 = callback6(attributes);
      const tmp30 = callback7(attributes, callback5(tmp8), tmp28);
      const checked = attributes.checked;
      if ("submit" !== tmp28) {
        if ("button" !== tmp28) {
          if (tmp30) {
            obj1 = { type: null, tagName: null, maskInputOptions: null };
            obj1[0] = tmp28;
            obj1[1] = callback5(tmp8);
            obj1[2] = maskInputOptions;
            obj2 = { isMasked: null, element: null, value: null, maskInputFn: null };
            obj2[0] = callback14(attributes, maskTextClass, maskTextSelector, unmaskTextClass, unmaskTextSelector, callback2(obj1));
            obj2[1] = attributes;
            obj2[2] = tmp30;
            obj2[3] = maskInputFn;
            obj.value = callback3(obj2);
          }
        }
      }
      if (checked) {
        obj.checked = checked;
      }
    })(nodeType, obj2);
  } else if (nodeType.TEXT_NODE === nodeType) {
    obj3 = { doc: null, maskAllText: null, maskTextClass: null, unmaskTextClass: null, maskTextSelector: null, unmaskTextSelector: null, maskTextFn: null, maskInputOptions: null, maskInputFn: null, rootId: null };
    obj3[0] = doc;
    obj3[1] = maskAllText;
    obj3[2] = maskTextClass;
    obj3[3] = unmaskTextClass;
    obj3[4] = maskTextSelector;
    obj3[5] = unmaskTextSelector;
    obj3[6] = maskTextFn;
    obj3[7] = maskInputOptions;
    obj3[8] = maskInputFn;
    obj3[9] = tmp2;
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
                str = callback(parentNode.parentNode.sheet);
              }
            }
            tmp = callback11(tmp.doc);
            str = callback9(str, tmp);
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
      const tmp16 = callback14(parentNode, maskTextClass, maskTextSelector, unmaskTextClass, unmaskTextSelector, maskAllText);
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
              obj = { type: null, tagName: null, maskInputOptions: null };
              obj[1] = tagName;
              obj[2] = maskInputOptions;
              obj[0] = callback14(parentNode, maskTextClass, maskTextSelector, unmaskTextClass, unmaskTextSelector, callback2(obj));
              obj[1] = parentNode;
              obj[2] = str;
              obj[3] = maskInputFn;
              str = callback3(obj);
            }
          }
          obj = { type: null, textContent: null, isStyle: null, rootId: null };
          obj[0] = RN.Text;
          if (!str) {
            str = "";
          }
          obj[1] = str;
          obj[2] = tmp2;
          obj[3] = rootId.rootId;
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
    obj4 = { type: null, textContent: "", rootId: null };
    obj4[0] = obj.CDATA;
    obj4[2] = tmp2;
    return obj4;
  } else if (nodeType.COMMENT_NODE === nodeType) {
    obj = { type: null, textContent: null, rootId: null };
    obj[0] = obj.Comment;
    obj[1] = nodeType.textContent || "";
    obj[2] = tmp2;
    return obj;
  } else {
    return false;
  }
}
function serializeNodeWithId(shadowRoot, doc) {
  closure_0 = shadowRoot;
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
  const inlineStylesheet = doc.inlineStylesheet;
  closure_11 = tmp4;
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
  const inlineImages = doc.inlineImages;
  obj = tmp5;
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
  let fn = doc.keepIframeSrcFn;
  if (undefined === fn) {
    fn = () => false;
  }
  const newlyAddedElement = doc.newlyAddedElement;
  const ignoreCSSAttributes = doc.ignoreCSSAttributes;
  const preserveWhiteSpace = doc.preserveWhiteSpace;
  let flag = undefined === preserveWhiteSpace || preserveWhiteSpace;
  c28 = flag;
  const tmp8 = serializeNode(shadowRoot, { doc, mirror, blockClass, blockSelector, maskAllText, unblockSelector, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, inlineStylesheet: undefined === inlineStylesheet || inlineStylesheet, maskInputOptions, maskAttributeFn, maskTextFn, maskInputFn, dataURLOptions, inlineImages: undefined !== inlineImages && inlineImages, recordCanvas: undefined !== recordCanvas && recordCanvas, keepIframeSrcFn: fn, newlyAddedElement: undefined !== newlyAddedElement && newlyAddedElement, ignoreCSSAttributes });
  if (tmp8) {
    if (mirror.hasNode(shadowRoot)) {
      let num4 = mirror.getId(shadowRoot);
    } else {
      num4 = -2;
      if (!(function slimDOMExcluded(type, slimDOMOptions) {
        if (slimDOMOptions.comment) {
          if (type.type === closure_18.Comment) {
            return true;
          }
        }
        if (type.type === closure_18.Element) {
          if (slimDOMOptions.script) {
            return true;
          }
          if (slimDOMOptions.headFavicon) {
            if ("link" !== type.tagName) {
              if ("meta" === type.tagName) {
                let str12 = "";
                let str7 = "";
                if (null != type.attributes.name) {
                  str7 = str55.toLowerCase();
                }
                if (!str7.match(/^msapplication-tile(image|color)$/)) {
                  let formatted = str12;
                  if (null != type.attributes.name) {
                    formatted = str8.toLowerCase();
                  }
                  if ("application-name" !== formatted) {
                    let formatted1 = str12;
                    if (null != type.attributes.rel) {
                      formatted1 = str56.toLowerCase();
                    }
                    if ("icon" !== formatted1) {
                      let formatted2 = str12;
                      if (null != type.attributes.rel) {
                        formatted2 = str57.toLowerCase();
                      }
                      if ("apple-touch-icon" !== formatted2) {
                        if (null != type.attributes.rel) {
                          str12 = str58.toLowerCase();
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
                  formatted3 = str59.toLowerCase();
                }
                if ("googlebot" !== formatted3) {
                  if (null != type.attributes.name) {
                    str25 = str60.toLowerCase();
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
                  formatted4 = str61.toLowerCase();
                }
                if ("generator" !== formatted4) {
                  let formatted5 = str31;
                  if (null != type.attributes.name) {
                    formatted5 = str62.toLowerCase();
                  }
                  if ("framework" !== formatted5) {
                    let formatted6 = str31;
                    if (null != type.attributes.name) {
                      formatted6 = str63.toLowerCase();
                    }
                    if ("publisher" !== formatted6) {
                      let formatted7 = str31;
                      if (null != type.attributes.name) {
                        formatted7 = str64.toLowerCase();
                      }
                      if ("progid" !== formatted7) {
                        let str38 = str31;
                        if (null != type.attributes.property) {
                          str38 = str65.toLowerCase();
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
                  formatted8 = str66.toLowerCase();
                }
                if ("yandex-verification" !== formatted8) {
                  let formatted9 = str41;
                  if (null != type.attributes.name) {
                    formatted9 = str67.toLowerCase();
                  }
                  if ("csrf-token" !== formatted9) {
                    let formatted10 = str41;
                    if (null != type.attributes.name) {
                      formatted10 = str68.toLowerCase();
                    }
                    if ("p:domain_verify" !== formatted10) {
                      let formatted11 = str41;
                      if (null != type.attributes.name) {
                        formatted11 = str69.toLowerCase();
                      }
                      if ("verify-v1" !== formatted11) {
                        let formatted12 = str41;
                        if (null != type.attributes.name) {
                          formatted12 = str48.toLowerCase();
                        }
                        if ("verification" !== formatted12) {
                          if (null != type.attributes.name) {
                            str41 = str50.toLowerCase();
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
          if (tmp8.type === obj.Text) {
            if (!tmp8.isStyle) {
              num4 = -2;
              const str2 = tmp8.textContent;
            }
          }
        }
        num4 = genId();
      }
    }
    const _Object = Object;
    obj = { id: null };
    obj[0] = num4;
    const merged = Object.assign(tmp8, obj);
    mirror.add(shadowRoot, merged);
    if (-2 === num4) {
      return null;
    } else {
      if (onSerialize) {
        onSerialize(shadowRoot);
      }
      let tmp18 = !tmp3;
      let tmp20 = tmp18;
      if (merged.type === obj.Element) {
        if (!tmp3) {
          tmp18 = !merged.needBlock;
        }
        shadowRoot = shadowRoot.shadowRoot;
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
      if (merged.type === obj.Document) {
        if (tmp20) {
          let tmp23 = slimDOMOptions.headWhitespace && merged.type === tmp19.Element;
          if (tmp23) {
            tmp23 = "head" === merged.tagName;
          }
          if (tmp23) {
            c28 = false;
            flag = false;
          }
          obj = { doc: null, mirror: null, blockClass: null, blockSelector: null, maskAllText: null, unblockSelector: null, maskTextClass: null, unmaskTextClass: null, maskTextSelector: null, unmaskTextSelector: null, skipChild: null, inlineStylesheet: null, maskInputOptions: null, maskAttributeFn: null, maskTextFn: null, maskInputFn: null, slimDOMOptions: null, dataURLOptions: null, inlineImages: null, recordCanvas: null, preserveWhiteSpace: null, onSerialize: null, onIframeLoad: null, iframeLoadTimeout: null, onBlockedImageLoad: null, onStylesheetLoad: null, stylesheetLoadTimeout: null, keepIframeSrcFn: null, ignoreCSSAttributes: null };
          obj[0] = doc;
          obj[1] = mirror;
          obj[2] = blockClass;
          obj[3] = blockSelector;
          obj[4] = maskAllText;
          obj[5] = unblockSelector;
          obj[6] = maskTextClass;
          obj[7] = unmaskTextClass;
          obj[8] = maskTextSelector;
          obj[9] = unmaskTextSelector;
          obj[10] = tmp3;
          obj[11] = tmp4;
          obj[12] = maskInputOptions;
          obj[13] = maskAttributeFn;
          obj[14] = maskTextFn;
          obj[15] = maskInputFn;
          obj[16] = slimDOMOptions;
          obj[17] = dataURLOptions;
          obj[18] = tmp5;
          obj[19] = tmp6;
          obj[20] = flag;
          obj[21] = onSerialize;
          obj[22] = onIframeLoad;
          obj[23] = num2;
          obj[24] = onBlockedImageLoad;
          obj[25] = onStylesheetLoad;
          obj[26] = num;
          obj[27] = fn;
          obj[28] = ignoreCSSAttributes;
          if (shadowRoot.childNodes) {
            const _Array = Array;
            let items = Array.from(shadowRoot.childNodes);
          } else {
            items = [];
          }
          items[Symbol.iterator]();
        }
      }
      while (true) {
        let parentNode = shadowRoot.parentNode;
        if (!parentNode) {
          break;
        } else {
          let tmp26 = isShadowRoot;
          parentNode = isShadowRoot(shadowRoot.parentNode);
          break;
        }
        if (parentNode) {
          let tmp27 = onSerialize;
          parentNode = onSerialize(shadowRoot.parentNode);
        }
        if (parentNode) {
          let flag4 = true;
          merged.isShadow = true;
        }
        let tmp28 = obj;
        let needBlock = merged.type !== obj.Element;
        if (!needBlock) {
          let str5 = "iframe";
          needBlock = "iframe" !== merged.tagName;
        }
        if (!needBlock) {
          needBlock = merged.needBlock;
        }
        if (!needBlock) {
          let tmp29 = (function onceIframeLoaded(contentWindow, arg1, arg2) {
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
                  callback(arg1, 0);
                  return contentWindow.addEventListener("load", arg1);
                } else {
                  closure_2 = callback(() => {
                    if (!c1) {
                      callback();
                      c1 = true;
                    }
                  }, arg2);
                  const listener1 = contentWindow.addEventListener("load", () => {
                    closure_1_35(closure_2);
                    c1 = true;
                    callback();
                  });
                }
              } catch (err) {
                return tmp;
              }
            }
          })(shadowRoot, () => {
            const tmp2 = closure_1_36(closure_0);
            if (tmp2) {
              if (onIframeLoad) {
                obj = { doc: null, mirror: null, blockClass: null, blockSelector: null, unblockSelector: null, maskAllText: null, maskTextClass: null, unmaskTextClass: null, maskTextSelector: null, unmaskTextSelector: null, skipChild: false, inlineStylesheet: null, maskInputOptions: null, maskAttributeFn: null, maskTextFn: null, maskInputFn: null, slimDOMOptions: null, dataURLOptions: null, inlineImages: null, recordCanvas: null, preserveWhiteSpace: null, onSerialize: null, onIframeLoad: null, iframeLoadTimeout: null, onStylesheetLoad: null, stylesheetLoadTimeout: null, keepIframeSrcFn: null, ignoreCSSAttributes: null };
                obj[0] = tmp2;
                obj[1] = mirror;
                obj[2] = blockClass;
                obj[3] = blockSelector;
                obj[4] = unblockSelector;
                obj[5] = maskAllText;
                obj[6] = maskTextClass;
                obj[7] = unmaskTextClass;
                obj[8] = maskTextSelector;
                obj[9] = unmaskTextSelector;
                obj[11] = closure_11;
                obj[12] = maskInputOptions;
                obj[13] = maskAttributeFn;
                obj[14] = maskTextFn;
                obj[15] = maskInputFn;
                obj[16] = slimDOMOptions;
                obj[17] = dataURLOptions;
                obj[18] = closure_18;
                obj[19] = closure_19;
                obj[20] = c28;
                obj[21] = onSerialize;
                obj[22] = tmp3;
                obj[23] = num2;
                obj[24] = onStylesheetLoad;
                obj[25] = num;
                obj[26] = fn;
                obj[27] = ignoreCSSAttributes;
                const tmp30 = closure_1_58(tmp2, obj);
                if (tmp30) {
                  tmp3(closure_0, tmp30);
                }
              }
            }
          }, num2);
        }
        if (merged.type === tmp28.Element) {
          let str6 = "img";
          if ("img" === merged.tagName) {
            if (!shadowRoot.complete) {
              if (merged.needBlock) {
                closure_30 = shadowRoot;
                function updateImageDimensions(href) {
                  if (shadowRoot.isConnected) {
                    if (!obj.complete) {
                      if (onBlockedImageLoad) {
                        try {
                          const boundingClientRect = obj.getBoundingClientRect();
                          let tmp4 = boundingClientRect.width > 0;
                          if (tmp4) {
                            tmp4 = tmp3.height > 0;
                          }
                          if (tmp4) {
                            tmp(obj, merged, boundingClientRect);
                          }
                        } catch (err) {
                        }
                      }
                    }
                  }
                  const removed = obj.removeEventListener("load", updateImageDimensions);
                }
                if (shadowRoot.isConnected) {
                  let str7 = "load";
                  let listener = shadowRoot.addEventListener("load", updateImageDimensions);
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
              let tmp34 = updateImageDimensions;
              let str11 = "css";
              tmp33 = "css" === updateImageDimensions(merged.attributes.href);
            }
            tmp32 = tmp33;
          }
          tmp31 = tmp32;
        }
        if (tmp31) {
          let tmp35 = (function onceStylesheetLoaded(sheet, arg1, arg2) {
            closure_0 = arg1;
            c1 = false;
            try {
              if (!sheet.sheet) {
                closure_2 = callback(() => {
                  if (!c1) {
                    callback();
                    c1 = true;
                  }
                }, arg2);
                const listener = sheet.addEventListener("load", () => {
                  closure_1_35(closure_2);
                  c1 = true;
                  callback();
                });
              }
            } catch (err) {
              return tmp;
            }
          })(shadowRoot, () => {
            if (onStylesheetLoad) {
              obj = { doc: null, mirror: null, blockClass: null, blockSelector: null, unblockSelector: null, maskAllText: null, maskTextClass: null, unmaskTextClass: null, maskTextSelector: null, unmaskTextSelector: null, skipChild: false, inlineStylesheet: null, maskInputOptions: null, maskAttributeFn: null, maskTextFn: null, maskInputFn: null, slimDOMOptions: null, dataURLOptions: null, inlineImages: null, recordCanvas: null, preserveWhiteSpace: null, onSerialize: null, onIframeLoad: null, iframeLoadTimeout: null, onStylesheetLoad: null, stylesheetLoadTimeout: null, keepIframeSrcFn: null, ignoreCSSAttributes: null };
              obj[0] = doc;
              obj[1] = mirror;
              obj[2] = blockClass;
              obj[3] = blockSelector;
              obj[4] = unblockSelector;
              obj[5] = maskAllText;
              obj[6] = maskTextClass;
              obj[7] = unmaskTextClass;
              obj[8] = maskTextSelector;
              obj[9] = unmaskTextSelector;
              obj[11] = closure_11;
              obj[12] = maskInputOptions;
              obj[13] = maskAttributeFn;
              obj[14] = maskTextFn;
              obj[15] = maskInputFn;
              obj[16] = slimDOMOptions;
              obj[17] = dataURLOptions;
              obj[18] = closure_18;
              obj[19] = closure_19;
              obj[20] = c28;
              obj[21] = onSerialize;
              obj[22] = onIframeLoad;
              obj[23] = num2;
              obj[24] = tmp;
              obj[25] = num;
              obj[26] = fn;
              obj[27] = ignoreCSSAttributes;
              const tmp30 = closure_1_58(closure_0, obj);
              if (tmp30) {
                tmp(tmp3, tmp30);
              }
              tmp3 = closure_0;
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
    console.warn(shadowRoot, "not serialized");
    return null;
  }
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
function patch(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  try {
    if (arg1 in arg0) {
      closure_2 = tmp2;
      const tmp4 = arg2(arg0[arg1]);
      if (typeof tmp4 === "function") {
        let prototype = tmp5.prototype;
        if (!prototype) {
          prototype = {};
        }
        tmp5.prototype = prototype;
        const _Object = Object;
        obj = { __rrweb_original__: null };
        obj = { enumerable: false, value: null };
        obj[1] = tmp2;
        obj[0] = obj;
        Object.defineProperties(tmp5, obj);
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
function getWindowScroll(document) {
  const _document = document.document;
  if (_document.scrollingElement) {
    let num = _document.scrollingElement.scrollLeft;
  } else if (undefined !== document.pageXOffset) {
    num = document.pageXOffset;
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
  obj = { left: num, top: null };
  if (_document.scrollingElement) {
    let num2 = _document.scrollingElement.scrollTop;
  } else if (undefined !== document.pageYOffset) {
    num2 = document.pageYOffset;
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
  obj[1] = num2;
  return obj;
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
function isBlocked(nodeType) {
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
              if (typeof tmp === "string") {
                const _HermesInternal = HermesInternal;
                if (parentNode.matches("." + tmp)) {
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
              })(parentNode, tmp)) {
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
                        if (typeof tmp === "string") {
                          const _HermesInternal = HermesInternal;
                          if (parentNode.matches("." + tmp)) {
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
                        })(parentNode, tmp)) {
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
  if (table2[arg0]) {
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
        let tmp3 = parentNode;
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
  if (typeof callbackWrapper !== "function") {
    HermesBuiltin.throwTypeError();
  }
  fn = (arg0) => {
    let onMutation = fn.onMutation;
    if (onMutation) {
      onMutation = false === obj.onMutation(arg0);
    }
    if (!onMutation) {
      const processMutations = obj.processMutations;
      processMutations.bind(obj)(arg0);
    }
  };
  if (closure_79) {
    fn = (Pause, arg1) => {
      items = [...arguments];
      try {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        return HermesBuiltin.apply(items1, undefined);
      } catch (tmp7) {
        if (closure_1_79) {
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
}
function initMouseInteractionObserver(doc) {
  ({ mouseInteractionCb: fn, doc: dependencyMap, mirror: closure_2, blockClass: closure_3, blockSelector: closure_4, unblockSelector: closure_5, sampling } = doc);
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
      const found = keys.filter((str) => {
        let isNaNResult = Number.isNaN(Number(str));
        if (isNaNResult) {
          isNaNResult = !str.endsWith("_Departed");
        }
        if (isNaNResult) {
          isNaNResult = false !== mouseInteraction[str];
        }
        return isNaNResult;
      });
      let item = found.forEach((str) => {
        str = str.toLowerCase();
        let replaced = str;
        replaced = str;
        if (window.PointerEvent) {
          if (closure_1_75.MouseDown !== closure_1_75[str]) {
            if (tmp2.MouseUp !== tmp3) {
              if (tmp2.TouchStart !== tmp3) {
                replaced = str;
              }
            }
          }
          replaced = str.replace("mouse", "pointer");
        }
        fn = (pointerType) => {
          const tmp = closure_2_88(pointerType);
          if (!closure_2_65(tmp, obj, closure_1_4, closure_1_5, true)) {
            if ("pointerType" in pointerType) {
              pointerType = pointerType.pointerType;
              if ("mouse" === pointerType) {
                let Mouse = closure_2_76.Mouse;
              } else if ("touch" === pointerType) {
                Mouse = closure_2_76.Touch;
              } else {
                Mouse = null;
                if ("pen" === pointerType) {
                  Mouse = closure_2_76.Pen;
                }
              }
              if (Mouse === closure_2_76.Touch) {
                let str2 = "TouchStart";
                let Touch = Mouse;
                if (closure_2_75[tmp2] !== closure_2_75.MouseDown) {
                  str2 = tmp2;
                  Touch = Mouse;
                  if (tmp11[tmp2] === tmp11.MouseUp) {
                    str2 = "TouchEnd";
                    Touch = Mouse;
                  }
                }
              } else {
                const Pen = tmp10.Pen;
                str2 = tmp2;
                Touch = Mouse;
              }
            } else {
              const _Boolean = Boolean;
              str2 = tmp2;
              Touch = null;
              if (Boolean(pointerType.changedTouches)) {
                Touch = closure_2_76.Touch;
                str2 = tmp2;
              }
            }
            if (null !== Touch) {
              c8 = Touch;
              let startsWithResult = str2.startsWith("Touch");
              if (startsWithResult) {
                startsWithResult = Touch === closure_2_76.Touch;
              }
              if (!startsWithResult) {
                let startsWithResult1 = str2.startsWith("Mouse");
                if (startsWithResult1) {
                  startsWithResult1 = Touch === closure_2_76.Mouse;
                }
                startsWithResult = startsWithResult1;
              }
              let tmp14 = Touch;
              if (startsWithResult) {
                tmp14 = null;
              }
            } else {
              tmp14 = Touch;
              if (closure_2_75[tmp2] === closure_2_75.Click) {
                tmp14 = c8;
                c8 = null;
              }
            }
            const _Boolean2 = Boolean;
            let first = pointerType;
            if (Boolean(pointerType.changedTouches)) {
              first = pointerType.changedTouches[0];
            }
            if (first) {
              fn = replaced;
              const id = _document.getId(tmp);
              ({ clientX, clientY } = first);
              if (typeof closure_2_86 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (closure_2_79) {
                fn = (Pause, arg1) => {
                  items = [...arguments];
                  try {
                    const items1 = [];
                    HermesBuiltin.arraySpread(items, 0);
                    return HermesBuiltin.apply(items1, undefined);
                  } catch (tmp7) {
                    if (closure_1_79) {
                      if (true === tmp8(tmp7)) {
                        return () => {

                        };
                      }
                    }
                    throw tmp7;
                  }
                };
              }
              obj = { type: null, id: null, x: null, y: null };
              obj[0] = closure_2_75[str2];
              obj[1] = id;
              obj[2] = clientX;
              obj[3] = clientY;
              let tmp26 = null !== tmp14;
              if (tmp26) {
                obj = { pointerType: null };
                obj[0] = tmp14;
                tmp26 = obj;
              }
              const merged = Object.assign(tmp26);
              fn(obj);
            }
          }
        };
        let _document = fn;
        _document = undefined;
        if (fn === undefined) {
          _document = document;
        }
        obj = { capture: true, passive: true };
        const listener = _document.addEventListener(replaced, fn, obj);
        arr = arr.push(() => document.removeEventListener(selectionchange, fn, obj));
      });
      if (typeof callbackWrapper !== "function") {
        HermesBuiltin.throwTypeError();
      }
      fn = () => {
        const item = arr.forEach((arg0) => arg0());
      };
      if (closure_79) {
        fn = (Pause, arg1) => {
          items = [...arguments];
          try {
            const items1 = [];
            HermesBuiltin.arraySpread(items, 0);
            return HermesBuiltin.apply(items1, undefined);
          } catch (tmp7) {
            if (closure_1_79) {
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
    }
    mouseInteraction = {};
  }
}
function initScrollObserver(doc) {
  ({ scrollCb: scroll, doc } = doc);
  let fn2 = doc;
  ({ mirror: doc, blockClass: obj, blockSelector: c4, unblockSelector: closure_5, sampling } = doc);
  if (typeof callbackWrapper !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let fn = (arg0) => {
    const tmp = closure_1_88(arg0);
    if (tmp) {
      if (!closure_1_65(tmp, obj, c4, closure_5, true)) {
        const id = doc.getId(tmp);
        if (tmp === fn2) {
          if (tmp9.defaultView) {
            obj = { id: null, x: null, y: null };
            obj[0] = id;
            ({ left: obj2[1], top: obj2[2] } = closure_1_63(tmp9.defaultView));
            scroll(obj);
            const tmp13 = closure_1_63(tmp9.defaultView);
          }
        }
        obj = { id: null, x: null, y: null };
        obj[0] = id;
        ({ scrollLeft: obj[1], scrollTop: obj[2] } = tmp);
        scroll(obj);
      }
    }
  };
  scroll = fn;
  if (closure_79) {
    fn = (Pause, arg1) => {
      items = [...arguments];
      try {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        return HermesBuiltin.apply(items1, undefined);
      } catch (tmp7) {
        if (closure_1_79) {
          if (true === tmp8(tmp7)) {
            return () => {

            };
          }
        }
        throw tmp7;
      }
    };
  }
  scroll = fn;
  fn2 = sampling.scroll || 100;
  doc = {};
  obj = null;
  c4 = 0;
  if (typeof callbackWrapper !== "function") {
    HermesBuiltin.throwTypeError();
  }
  fn2 = function() {
    items = [...arguments];
    let self;
    const timestamp = Date.now();
    let tmp2 = num;
    if (!num) {
      tmp2 = false !== closure_2.leading;
    }
    if (!tmp2) {
      num = timestamp;
    }
    const diff = self - (timestamp - num);
    self = this;
    if (diff > 0) {
      if (diff <= self) {
        let tmp5 = c3;
        if (!c3) {
          tmp5 = false === closure_2.trailing;
        }
        if (!tmp5) {
          c3 = closure_1_72(() => {
            num = 0;
            if (false !== closure_1_2.leading) {
              const _Date = Date;
              num = Date.now();
            }
            c3 = null;
            items.apply(self, items);
          }, diff);
        }
      }
    }
    if (c3) {
      !(function clearTimeout$2(arg0) {
        items = [...arguments];
        return callback("clearTimeout")(...items);
      })(tmp8);
      c3 = null;
    }
    num = timestamp;
    items.apply(this, items);
  };
  scroll = fn2;
  if (closure_79) {
    fn2 = (Pause, arg1) => {
      items = [...arguments];
      try {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        return HermesBuiltin.apply(items1, undefined);
      } catch (tmp7) {
        if (closure_1_79) {
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
  obj = { capture: true, passive: true };
  const listener = doc.addEventListener("scroll", fn2, obj);
  return () => document.removeEventListener(selectionchange, fn, obj);
}
function initInputObserver(sampling) {
  ({ inputCb: fn, doc } = sampling);
  ({ mirror: closure_2, blockClass: closure_3, blockSelector: closure_4, unblockSelector: closure_5, ignoreClass: closure_6, ignoreSelector: closure_7, maskInputOptions: closure_8, maskInputFn: _isNativeReflectConstruct, userTriggeredOnInput: sentryReplaySession, maskTextClass: c11, unmaskTextClass: c12, maskTextSelector: c13, unmaskTextSelector: c14 } = sampling);
  let mapped;
  let defaultView;
  function eventHandler(isTrusted) {
    const tmp = closure_1_88(isTrusted);
    fn = tmp;
    let formatted = tmp;
    if (tmp) {
      formatted = tmp.tagName.toUpperCase();
      const str = tmp.tagName;
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
          if (!closure_1_65(iter, checked, closure_4, closure_5, true)) {
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
                    let tmp10 = tmp8[str11.toLowerCase(str11)];
                    if (!tmp10) {
                      let tmp11 = str5;
                      if (str5) {
                        tmp11 = tmp8[str5];
                      }
                      tmp10 = tmp11;
                    }
                    if (!tmp10) {
                      tmp10 = "password" === str5;
                    }
                    if (!tmp10) {
                      tmp10 = "INPUT" === str11 && !str5 && tmp8.text;
                      const tmp12 = "INPUT" === str11 && !str5 && tmp8.text;
                    }
                    const tmp19 = closure_1_56(iter, closure_11, closure_13, closure_12, closure_14, Boolean(tmp10));
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
                      if (tmp21) {
                        tmp21Result = tmp21(str10, iter);
                      }
                      let repeat = "*".repeat;
                      repeatResult = "*".repeat(tmp21Result.length);
                    }
                    if (closure_10) {
                      obj = { text: null, isChecked: null, userTriggered: null };
                      obj[0] = repeatResult;
                      obj[1] = flag2;
                      obj[2] = isTrusted.isTrusted;
                    } else {
                      obj = { text: null, isChecked: null };
                      obj[0] = repeatResult;
                      obj[1] = flag2;
                    }
                    let value = closure_1_93.get(iter);
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
                                  if (tmp) {
                                    tmpResult = tmp(str4, getAttribute);
                                  }
                                  const repeat = "*".repeat;
                                  repeatResult = "*".repeat(tmpResult.length);
                                }
                                if (closure_1_10) {
                                  obj = { text: null, isChecked: null, userTriggered: false };
                                  obj[0] = repeatResult;
                                  obj[1] = !checked;
                                } else {
                                  obj = { text: null, isChecked: null };
                                  obj[0] = repeatResult;
                                  obj[1] = !checked;
                                }
                                const value = closure_1_93.get(getAttribute);
                                const result = closure_1_93.set(getAttribute, obj);
                                const id = str5.getId(getAttribute);
                                if (typeof closure_1_86 !== "function") {
                                  HermesBuiltin.throwTypeError();
                                }
                                if (closure_1_79) {
                                  fn = (Pause, arg1) => {
                                    items = [...arguments];
                                    try {
                                      const items1 = [];
                                      HermesBuiltin.arraySpread(items, 0);
                                      return HermesBuiltin.apply(items1, undefined);
                                    } catch (tmp7) {
                                      if (closure_1_79) {
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
                                obj.id = id;
                                fn(obj);
                                obj3 = closure_1_93;
                              }
                              str4 = getAttribute.getAttribute("value") || "";
                            }
                            str4 = getAttribute.value;
                          }
                        });
                      }
                      tmp34 = "radio" === str5 && name && flag2;
                    }
                    let result = closure_1_93.set(iter, obj);
                    let id = str5.getId(iter);
                    if (typeof closure_1_86 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    if (closure_1_79) {
                      fn = (Pause, arg1) => {
                        items = [...arguments];
                        try {
                          const items1 = [];
                          HermesBuiltin.arraySpread(items, 0);
                          return HermesBuiltin.apply(items1, undefined);
                        } catch (tmp7) {
                          if (closure_1_79) {
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
                    obj.id = id;
                    fn(obj);
                    obj3 = closure_1_93;
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
  mapped = "last" === sampling.sampling.input ? ["change"] : ["input", "change"].map((arg0) => {
    fn = eventHandler;
    if (typeof closure_1_86 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    closure_0 = fn;
    if (closure_1_79) {
      fn = (Pause, arg1) => {
        items = [...arguments];
        try {
          const items1 = [];
          HermesBuiltin.arraySpread(items, 0);
          return HermesBuiltin.apply(items1, undefined);
        } catch (tmp7) {
          if (closure_1_79) {
            if (true === tmp8(tmp7)) {
              return () => {

              };
            }
          }
          throw tmp7;
        }
      };
    }
    let _document = fn;
    closure_0 = arg0;
    if (fn === undefined) {
      _document = document;
    }
    obj = { capture: true, passive: true };
    const listener = _document.addEventListener(arg0, fn, obj);
    return () => document.removeEventListener(selectionchange, fn, obj);
  });
  defaultView = doc.defaultView;
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
    let set = ownPropertyDescriptor;
    if (ownPropertyDescriptor) {
      set = ownPropertyDescriptor.set;
    }
    if (set) {
      const push = mapped.push;
      const items7 = [];
      HermesBuiltin.arraySpread(items1.map((arg0) => {
        [tmp, tmp2] = arg0;
        obj = {
          set() {
            fn = closure_15;
            if (typeof closure_1_86 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (closure_1_79) {
              fn = (Pause, arg1) => {
                items = [...arguments];
                try {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items, 0);
                  return HermesBuiltin.apply(items1, undefined);
                } catch (tmp7) {
                  if (closure_1_79) {
                    if (true === tmp8(tmp7)) {
                      return () => {

                      };
                    }
                  }
                  throw tmp7;
                }
              };
            }
            fn({ target: this, isTrusted: false });
          }
        };
        let _window = defaultView;
        doc = tmp2;
        if (defaultView === undefined) {
          _window = window;
        }
        let ownPropertyDescriptor;
        let _Object = _window.Object;
        ownPropertyDescriptor = _Object.getOwnPropertyDescriptor(tmp, tmp2);
        let _Object2 = _window.Object;
        obj = {
          set(arg0) {
            let self = this;
            self = this;
            closure_0 = arg0;
            closure_1_72(() => {
              const call = set.call;
              if (typeof call === "unknown") {
                const result = set(tmp2);
              } else {
                call(self, tmp2);
              }
            }, 0);
            let set = closure_3;
            if (closure_3) {
              set = tmp2.set;
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
          ownPropertyDescriptor = undefined;
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
            ownPropertyDescriptor = undefined;
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
              ownPropertyDescriptor = undefined;
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
    if (typeof callbackWrapper !== "function") {
      HermesBuiltin.throwTypeError();
    }
    fn = () => {
      const item = mapped.forEach((arg0) => arg0());
    };
    if (closure_79) {
      fn = (Pause, arg1) => {
        items = [...arguments];
        try {
          const items1 = [];
          HermesBuiltin.arraySpread(items, 0);
          return HermesBuiltin.apply(items1, undefined);
        } catch (tmp7) {
          if (closure_1_79) {
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
    return () => {
      const item = mapped.forEach((arg0) => arg0());
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
          ({ configurable: obj[0], enumerable: obj[1] } = ownPropertyDescriptor);
          obj[2] = function get() {
            const get = ownPropertyDescriptor.get;
            if (get != null) {
              const self = this;
              const call = get.call;
              typeof call === "unknown" ? get() : call(self);
            }
          };
          obj[3] = function set(adoptedStyleSheets) {
            if (ownPropertyDescriptor.set == null) {
              if (null !== id) {
                if (-1 !== tmp2) {
                  try {
                    fn2.adoptStyleSheets(adoptedStyleSheets, tmp2);
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
          if (typeof callbackWrapper !== "function") {
            HermesBuiltin.throwTypeError();
          }
          fn2 = () => {
            Object.defineProperty(closure_1, "adoptedStyleSheets", { configurable: ownPropertyDescriptor.configurable, enumerable: ownPropertyDescriptor.enumerable, get: ownPropertyDescriptor.get, set: ownPropertyDescriptor.set });
          };
          if (closure_79) {
            fn2 = (Pause, arg1) => {
              items = [...arguments];
              try {
                const items1 = [];
                HermesBuiltin.arraySpread(items, 0);
                return HermesBuiltin.apply(items1, undefined);
              } catch (tmp7) {
                if (closure_1_79) {
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
      ({ mousemoveCb: fn4, sampling, doc, mirror: fn3 } = doc);
      doc = undefined;
      obj = undefined;
      c4 = undefined;
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
        obj = [];
        if (typeof closure_86 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let fn = (arg0) => {
          const callback = Date.now() - c2;
          callback(obj.map((timeOffset) => {
            timeOffset.timeOffset = timeOffset.timeOffset - closure_0;
            return timeOffset;
          }), arg0);
          c2 = null;
        };
        fn4 = fn;
        if (closure_79) {
          fn = (Pause, arg1) => {
            items = [...arguments];
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              return HermesBuiltin.apply(items1, undefined);
            } catch (tmp7) {
              if (closure_1_79) {
                if (true === tmp8(tmp7)) {
                  return () => {

                  };
                }
              }
              throw tmp7;
            }
          };
        }
        fn4 = fn;
        fn3 = num;
        doc = {};
        obj = null;
        c4 = 0;
        c4 = function() {
          items = [...arguments];
          let self;
          const timestamp = Date.now();
          let tmp2 = num;
          if (!num) {
            tmp2 = false !== closure_2.leading;
          }
          if (!tmp2) {
            num = timestamp;
          }
          const diff = self - (timestamp - num);
          self = this;
          if (diff > 0) {
            if (diff <= self) {
              let tmp5 = c3;
              if (!c3) {
                tmp5 = false === closure_2.trailing;
              }
              if (!tmp5) {
                c3 = closure_1_72(() => {
                  num = 0;
                  if (false !== closure_1_2.leading) {
                    const _Date = Date;
                    num = Date.now();
                  }
                  c3 = null;
                  items.apply(self, items);
                }, diff);
              }
            }
          }
          if (c3) {
            !(function clearTimeout$2(arg0) {
              items = [...arguments];
              return callback("clearTimeout")(...items);
            })(tmp8);
            c3 = null;
          }
          num = timestamp;
          items.apply(this, items);
        };
        if (typeof closure_86 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let fn2 = (changedTouches) => {
          let first = changedTouches;
          if (Boolean(changedTouches.changedTouches)) {
            first = changedTouches.changedTouches[0];
          }
          ({ clientX, clientY } = first);
          if (!closure_2) {
            closure_2 = closure_1_62();
          }
          obj = { x: clientX, y: clientY, id: fn3.getId(closure_1_88(changedTouches)), timeOffset: closure_1_62() - closure_2 };
          obj.push(obj);
          if (typeof globalThis.DragEvent !== "undefined") {
            if (changedTouches instanceof globalThis.DragEvent) {
              let Drag = closure_1_74.Drag;
            }
            tmp5(Drag);
          }
          Drag = changedTouches instanceof globalThis.MouseEvent ? tmp6.MouseMove : tmp6.TouchMove;
        };
        fn4 = fn2;
        if (closure_79) {
          fn2 = (Pause, arg1) => {
            items = [...arguments];
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              return HermesBuiltin.apply(items1, undefined);
            } catch (tmp7) {
              if (closure_1_79) {
                if (true === tmp8(tmp7)) {
                  return () => {

                  };
                }
              }
              throw tmp7;
            }
          };
        }
        fn4 = fn2;
        fn3 = num3;
        doc = { trailing: false };
        obj = null;
        c4 = 0;
        if (typeof closure_86 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        fn3 = function() {
          items = [...arguments];
          let self;
          const timestamp = Date.now();
          let tmp2 = num;
          if (!num) {
            tmp2 = false !== closure_2.leading;
          }
          if (!tmp2) {
            num = timestamp;
          }
          const diff = self - (timestamp - num);
          self = this;
          if (diff > 0) {
            if (diff <= self) {
              let tmp5 = c3;
              if (!c3) {
                tmp5 = false === closure_2.trailing;
              }
              if (!tmp5) {
                c3 = closure_1_72(() => {
                  num = 0;
                  if (false !== closure_1_2.leading) {
                    const _Date = Date;
                    num = Date.now();
                  }
                  c3 = null;
                  items.apply(self, items);
                }, diff);
              }
            }
          }
          if (c3) {
            !(function clearTimeout$2(arg0) {
              items = [...arguments];
              return callback("clearTimeout")(...items);
            })(tmp8);
            c3 = null;
          }
          num = timestamp;
          items.apply(this, items);
        };
        fn4 = fn3;
        if (closure_79) {
          fn3 = (Pause, arg1) => {
            items = [...arguments];
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              return HermesBuiltin.apply(items1, undefined);
            } catch (tmp7) {
              if (closure_1_79) {
                if (true === tmp8(tmp7)) {
                  return () => {

                  };
                }
              }
              throw tmp7;
            }
          };
        }
        fn4 = "mousemove";
        let _document = doc;
        if (doc === undefined) {
          _document = document;
        }
        doc = _document;
        obj = { capture: true, passive: true };
        const listener = _document.addEventListener("mousemove", fn3, obj);
        items = [() => document.removeEventListener(selectionchange, fn, obj), , ];
        doc = undefined;
        fn4 = "touchmove";
        let _document2 = doc;
        if (doc === undefined) {
          _document2 = document;
        }
        doc = _document2;
        obj = { capture: true, passive: true };
        const listener1 = _document2.addEventListener("touchmove", fn3, obj);
        items[1] = () => document.removeEventListener(selectionchange, fn, obj);
        doc = undefined;
        fn4 = "drag";
        if (doc === undefined) {
          doc = document;
        }
        obj = { capture: true, passive: true };
        const listener2 = doc.addEventListener("drag", fn3, obj);
        items[2] = () => document.removeEventListener(selectionchange, fn, obj);
        if (typeof closure_86 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        fn4 = () => {
          const item = items.forEach((arg0) => arg0());
        };
        if (closure_79) {
          fn4 = (Pause, arg1) => {
            items = [...arguments];
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              return HermesBuiltin.apply(items1, undefined);
            } catch (tmp7) {
              if (closure_1_79) {
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
      }
    })(doc);
    closure_2 = initMouseInteractionObserver(doc);
    closure_3 = initScrollObserver(doc);
    obj = { win: null };
    obj[0] = defaultView;
    closure_4 = (function initViewportResizeObserver(viewportResizeCb, win) {
      let resize = viewportResizeCb.viewportResizeCb;
      let _document = win.win;
      let fn2 = -1;
      _document = -1;
      if (typeof closure_86 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let fn = () => {
        if (!innerHeight) {
          _document = document;
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
          obj = { width: null, height: null };
          const _Number = Number;
          obj[0] = Number(innerWidth);
          const _Number2 = Number;
          obj[1] = Number(innerHeight);
          resize(obj);
        }
      };
      resize = fn;
      if (closure_79) {
        fn = (Pause, arg1) => {
          items = [...arguments];
          try {
            const items1 = [];
            HermesBuiltin.arraySpread(items, 0);
            return HermesBuiltin.apply(items1, undefined);
          } catch (tmp7) {
            if (closure_1_79) {
              if (true === tmp8(tmp7)) {
                return () => {

                };
              }
            }
            throw tmp7;
          }
        };
      }
      resize = fn;
      fn2 = 200;
      _document = {};
      obj = null;
      c4 = 0;
      if (typeof closure_86 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      fn2 = function() {
        items = [...arguments];
        let self;
        const timestamp = Date.now();
        let tmp2 = num;
        if (!num) {
          tmp2 = false !== closure_2.leading;
        }
        if (!tmp2) {
          num = timestamp;
        }
        const diff = self - (timestamp - num);
        self = this;
        if (diff > 0) {
          if (diff <= self) {
            let tmp5 = c3;
            if (!c3) {
              tmp5 = false === closure_2.trailing;
            }
            if (!tmp5) {
              c3 = closure_1_72(() => {
                num = 0;
                if (false !== closure_1_2.leading) {
                  const _Date = Date;
                  num = Date.now();
                }
                c3 = null;
                items.apply(self, items);
              }, diff);
            }
          }
        }
        if (c3) {
          !(function clearTimeout$2(arg0) {
            items = [...arguments];
            return callback("clearTimeout")(...items);
          })(tmp8);
          c3 = null;
        }
        num = timestamp;
        items.apply(this, items);
      };
      resize = fn2;
      if (closure_79) {
        fn2 = (Pause, arg1) => {
          items = [...arguments];
          try {
            const items1 = [];
            HermesBuiltin.arraySpread(items, 0);
            return HermesBuiltin.apply(items1, undefined);
          } catch (tmp7) {
            if (closure_1_79) {
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
      if (_document === undefined) {
        _document = document;
      }
      obj = { capture: true, passive: true };
      const listener = _document.addEventListener("resize", fn2, obj);
      return () => document.removeEventListener(selectionchange, fn, obj);
    })(doc, obj);
    closure_5 = initInputObserver(doc);
    closure_6 = (function initMediaInteractionObserver(doc) {
      ({ mediaInteractionCb: fn2, blockClass: fnResult4, blockSelector: doc, unblockSelector: obj2, mirror: closure_4, sampling: closure_5, doc } = doc);
      items = undefined;
      if (typeof closure_86 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let fn = (arg0) => {
        let fn = arg0;
        if (typeof closure_1_86 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        fn = (arg0) => {
          const tmp = closure_2_88(arg0);
          if (tmp) {
            if (!closure_2_65(tmp, closure_1, closure_2, c3, true)) {
              obj = { type: null, id: null, currentTime: null, volume: null, muted: null, playbackRate: null };
              obj[0] = fn;
              ({ currentTime, volume, muted, playbackRate } = tmp);
              obj[1] = id.getId(tmp);
              obj[2] = currentTime;
              obj[3] = volume;
              obj[4] = muted;
              obj[5] = playbackRate;
              fn(obj);
            }
          }
        };
        if (closure_1_79) {
          fn = (Pause, arg1) => {
            items = [...arguments];
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              return HermesBuiltin.apply(items1, undefined);
            } catch (tmp7) {
              if (closure_1_79) {
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
        c4 = 0;
        return function() {
          items = [...arguments];
          let self;
          const timestamp = Date.now();
          let tmp2 = num;
          if (!num) {
            tmp2 = false !== closure_2.leading;
          }
          if (!tmp2) {
            num = timestamp;
          }
          const diff = self - (timestamp - num);
          self = this;
          if (diff > 0) {
            if (diff <= self) {
              let tmp5 = c3;
              if (!c3) {
                tmp5 = false === closure_2.trailing;
              }
              if (!tmp5) {
                c3 = closure_1_72(() => {
                  num = 0;
                  if (false !== closure_1_2.leading) {
                    const _Date = Date;
                    num = Date.now();
                  }
                  c3 = null;
                  items.apply(self, items);
                }, diff);
              }
            }
          }
          if (c3) {
            !(function clearTimeout$2(arg0) {
              items = [...arguments];
              return callback("clearTimeout")(...items);
            })(tmp8);
            c3 = null;
          }
          num = timestamp;
          items.apply(this, items);
        };
      };
      fn2 = fn;
      if (closure_79) {
        fn = (Pause, arg1) => {
          items = [...arguments];
          try {
            const items1 = [];
            HermesBuiltin.arraySpread(items, 0);
            return HermesBuiltin.apply(items1, undefined);
          } catch (tmp7) {
            if (closure_1_79) {
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
      fn2 = "play";
      fnResult4 = fnResult;
      let _document = doc;
      if (doc === undefined) {
        _document = document;
      }
      doc = _document;
      obj = { capture: true, passive: true };
      obj2 = obj;
      const listener = _document.addEventListener("play", fnResult, obj);
      items = [() => document.removeEventListener(selectionchange, fn, obj), , , , ];
      const fnResult1 = fn(Play.Pause);
      doc = undefined;
      fn2 = "pause";
      fnResult4 = fnResult1;
      let _document2 = doc;
      if (doc === undefined) {
        _document2 = document;
      }
      doc = _document2;
      obj = { capture: true, passive: true };
      obj2 = obj;
      const listener1 = _document2.addEventListener("pause", fnResult1, obj);
      items[1] = () => document.removeEventListener(selectionchange, fn, obj);
      const fnResult2 = fn(Play.Seeked);
      doc = undefined;
      fn2 = "seeked";
      fnResult4 = fnResult2;
      let _document3 = doc;
      if (doc === undefined) {
        _document3 = document;
      }
      doc = _document3;
      obj = { capture: true, passive: true };
      obj2 = obj;
      const listener2 = _document3.addEventListener("seeked", fnResult2, obj);
      items[2] = () => document.removeEventListener(selectionchange, fn, obj);
      const fnResult3 = fn(Play.VolumeChange);
      doc = undefined;
      fn2 = "volumechange";
      fnResult4 = fnResult3;
      let _document4 = doc;
      if (doc === undefined) {
        _document4 = document;
      }
      doc = _document4;
      obj1 = { capture: true, passive: true };
      obj2 = obj1;
      const listener3 = _document4.addEventListener("volumechange", fnResult3, obj1);
      items[3] = () => document.removeEventListener(selectionchange, fn, obj);
      fnResult4 = fn(tmp2.RateChange);
      doc = undefined;
      fn2 = "ratechange";
      if (doc === undefined) {
        doc = document;
      }
      obj2 = { capture: true, passive: true };
      const listener4 = doc.addEventListener("ratechange", fnResult4, obj2);
      items[4] = () => document.removeEventListener(selectionchange, fn, obj);
      if (typeof closure_86 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      fn2 = () => {
        const item = items.forEach((arg0) => arg0());
      };
      if (closure_79) {
        fn2 = (Pause, arg1) => {
          items = [...arguments];
          try {
            const items1 = [];
            HermesBuiltin.arraySpread(items, 0);
            return HermesBuiltin.apply(items1, undefined);
          } catch (tmp7) {
            if (closure_1_79) {
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
      obj = { win: null };
      obj[0] = defaultView;
      closure_7 = (function initStyleSheetObserver(doc, win) {
        ({ styleSheetRuleCb: fn5, mirror: closure_1, stylesheetManager: closure_2 } = doc);
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
            if (typeof closure_86 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            let fn = (apply, ownerNode) => {
              replaceSync(arg2, 2);
              obj = closure_1;
              const styleMirror = closure_2.styleMirror;
              if (ownerNode) {
                if (ownerNode.ownerNode) {
                  id = obj.getId(ownerNode.ownerNode);
                } else {
                  const id1 = styleMirror.getId(ownerNode);
                }
                obj = { styleId: null, id: null };
                obj[0] = id1;
                obj[1] = id;
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
                  obj = { id: null, styleId: null, adds: null };
                  obj[0] = id;
                  obj[1] = styleId;
                  obj1 = { rule: null, index: null };
                  obj1[0] = tmp2;
                  obj1[1] = tmp3;
                  items = [obj1];
                  obj[2] = items;
                  fn5(obj);
                }
                return apply.apply(ownerNode, arg2);
              }
            };
            fn5 = fn;
            if (closure_79) {
              fn = (Pause, arg1) => {
                items = [...arguments];
                try {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items, 0);
                  return HermesBuiltin.apply(items1, undefined);
                } catch (tmp7) {
                  if (closure_1_79) {
                    if (true === tmp8(tmp7)) {
                      return () => {

                      };
                    }
                  }
                  throw tmp7;
                }
              };
            }
            obj = { apply: null };
            obj[0] = fn;
            let proxy = new Proxy(insertRule, obj);
            win.CSSStyleSheet.prototype.insertRule = proxy;
            deleteRule = win.CSSStyleSheet.prototype.deleteRule;
            if (typeof closure_86 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            let fn2 = (apply, ownerNode) => {
              obj = closure_1;
              const styleMirror = closure_2.styleMirror;
              if (ownerNode) {
                if (ownerNode.ownerNode) {
                  id = obj.getId(ownerNode.ownerNode);
                } else {
                  const id1 = styleMirror.getId(ownerNode);
                }
                obj = { styleId: null, id: null };
                obj[0] = id1;
                obj[1] = id;
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
                  obj = { id: null, styleId: null, removes: null };
                  obj[0] = id;
                  obj[1] = styleId;
                  obj1 = { index: null };
                  obj1[0] = tmp;
                  items = [obj1];
                  obj[2] = items;
                  fn5(obj);
                }
                return apply.apply(ownerNode, arg2);
              }
            };
            fn5 = fn2;
            if (closure_79) {
              fn2 = (Pause, arg1) => {
                items = [...arguments];
                try {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items, 0);
                  return HermesBuiltin.apply(items1, undefined);
                } catch (tmp7) {
                  if (closure_1_79) {
                    if (true === tmp8(tmp7)) {
                      return () => {

                      };
                    }
                  }
                  throw tmp7;
                }
              };
            }
            obj = { apply: null };
            obj[0] = fn2;
            let proxy1 = new Proxy(deleteRule, obj);
            win.CSSStyleSheet.prototype.deleteRule = proxy1;
            if (win.CSSStyleSheet.prototype.replace) {
              replace = win.CSSStyleSheet.prototype.replace;
              if (typeof tmp2 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              let fn3 = (apply, ownerNode) => {
                obj = closure_1;
                const styleMirror = closure_2.styleMirror;
                if (ownerNode) {
                  if (ownerNode.ownerNode) {
                    id = obj.getId(ownerNode.ownerNode);
                  } else {
                    const id1 = styleMirror.getId(ownerNode);
                  }
                  obj = { styleId: null, id: null };
                  obj[0] = id1;
                  obj[1] = id;
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
                    obj = { id: null, styleId: null, replace: null };
                    obj[0] = id;
                    obj[1] = styleId;
                    obj[2] = tmp;
                    fn5(obj);
                  }
                  return apply.apply(ownerNode, arg2);
                }
              };
              fn5 = fn3;
              if (closure_79) {
                fn3 = (Pause, arg1) => {
                  items = [...arguments];
                  try {
                    const items1 = [];
                    HermesBuiltin.arraySpread(items, 0);
                    return HermesBuiltin.apply(items1, undefined);
                  } catch (tmp7) {
                    if (closure_1_79) {
                      if (true === tmp8(tmp7)) {
                        return () => {

                        };
                      }
                    }
                    throw tmp7;
                  }
                };
              }
              obj = { apply: null };
              obj[0] = fn3;
              const proxy2 = new Proxy(replace, obj);
              win.CSSStyleSheet.prototype.replace = proxy2;
            }
            if (win.CSSStyleSheet.prototype.replaceSync) {
              replaceSync = win.CSSStyleSheet.prototype.replaceSync;
              if (typeof tmp2 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              let fn4 = (apply, ownerNode) => {
                obj = closure_1;
                const styleMirror = closure_2.styleMirror;
                if (ownerNode) {
                  if (ownerNode.ownerNode) {
                    id = obj.getId(ownerNode.ownerNode);
                  } else {
                    const id1 = styleMirror.getId(ownerNode);
                  }
                  obj = { styleId: null, id: null };
                  obj[0] = id1;
                  obj[1] = id;
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
                    obj = { id: null, styleId: null, replaceSync: null };
                    obj[0] = id;
                    obj[1] = styleId;
                    obj[2] = tmp;
                    fn5(obj);
                  }
                  return apply.apply(ownerNode, arg2);
                }
              };
              fn5 = fn4;
              if (closure_79) {
                fn4 = (Pause, arg1) => {
                  items = [...arguments];
                  try {
                    const items1 = [];
                    HermesBuiltin.arraySpread(items, 0);
                    return HermesBuiltin.apply(items1, undefined);
                  } catch (tmp7) {
                    if (closure_1_79) {
                      if (true === tmp8(tmp7)) {
                        return () => {

                        };
                      }
                    }
                    throw tmp7;
                  }
                };
              }
              obj1 = { apply: null };
              obj1[0] = fn4;
              const proxy3 = new Proxy(replaceSync, obj1);
              win.CSSStyleSheet.prototype.replaceSync = proxy3;
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
            let item = entries.forEach((arg0) => {
              [tmp, tmp2] = arg0;
              table[tmp] = { insertRule: tmp2.prototype.insertRule, deleteRule: tmp2.prototype.deleteRule };
              if (typeof closure_1_86 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              let fn = (apply, parentStyleSheet) => {
                let num = closure_1_6(arg2, 2)[1];
                parentStyleSheet = parentStyleSheet.parentStyleSheet;
                const styleMirror = closure_2.styleMirror;
                if (parentStyleSheet) {
                  if (parentStyleSheet.ownerNode) {
                    id = closure_1.getId(parentStyleSheet.ownerNode);
                  } else {
                    const id1 = styleMirror.getId(parentStyleSheet);
                  }
                  parentStyleSheet = { styleId: null, id: null };
                  parentStyleSheet[0] = id1;
                  parentStyleSheet[1] = id;
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
                    obj = { id: null, styleId: null, adds: null };
                    obj[0] = id;
                    obj[1] = styleId;
                    obj = { rule: null, index: null };
                    obj[0] = tmp2;
                    items = [];
                    if (!num) {
                      num = 0;
                    }
                    items[HermesBuiltin.arraySpread(closure_1_95(parentStyleSheet), 0)] = num;
                    obj[1] = items;
                    const items1 = [obj];
                    obj[2] = items1;
                    fn2(obj);
                    const arraySpreadResult = HermesBuiltin.arraySpread(closure_1_95(parentStyleSheet), 0);
                    const tmp8 = fn2;
                  }
                  return apply.apply(parentStyleSheet, arg2);
                }
              };
              let fn2 = fn;
              if (closure_1_79) {
                fn = (Pause, arg1) => {
                  items = [...arguments];
                  try {
                    const items1 = [];
                    HermesBuiltin.arraySpread(items, 0);
                    return HermesBuiltin.apply(items1, undefined);
                  } catch (tmp7) {
                    if (closure_1_79) {
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
              const proxy = new Proxy(table[tmp].insertRule, obj);
              tmp2.prototype.insertRule = proxy;
              if (typeof closure_1_86 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              fn2 = (apply, parentStyleSheet) => {
                parentStyleSheet = parentStyleSheet.parentStyleSheet;
                const styleMirror = closure_2.styleMirror;
                if (parentStyleSheet) {
                  if (parentStyleSheet.ownerNode) {
                    id = closure_1.getId(parentStyleSheet.ownerNode);
                  } else {
                    const id1 = styleMirror.getId(parentStyleSheet);
                  }
                  parentStyleSheet = { styleId: null, id: null };
                  parentStyleSheet[0] = id1;
                  parentStyleSheet[1] = id;
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
                    obj = { id: null, styleId: null, removes: null };
                    obj[0] = id;
                    obj[1] = styleId;
                    obj = { index: null };
                    items = [];
                    items[HermesBuiltin.arraySpread(closure_1_95(parentStyleSheet), 0)] = tmp;
                    obj[0] = items;
                    const items1 = [obj];
                    obj[2] = items1;
                    fn2(obj);
                  }
                  return apply.apply(parentStyleSheet, arg2);
                }
              };
              if (closure_1_79) {
                fn2 = (Pause, arg1) => {
                  items = [...arguments];
                  try {
                    const items1 = [];
                    HermesBuiltin.arraySpread(items, 0);
                    return HermesBuiltin.apply(items1, undefined);
                  } catch (tmp7) {
                    if (closure_1_79) {
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
              const proxy1 = new Proxy(table[tmp].deleteRule, obj);
              tmp2.prototype.deleteRule = proxy1;
            });
            if (typeof closure_86 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            fn5 = () => {
              win.CSSStyleSheet.prototype.insertRule = insertRule;
              win.CSSStyleSheet.prototype.deleteRule = deleteRule;
              if (replace) {
                tmp.CSSStyleSheet.prototype.replace = tmp2;
              }
              if (replaceSync) {
                tmp.CSSStyleSheet.prototype.replaceSync = tmp3;
              }
              const entries = Object.entries(obj2);
              const item = entries.forEach((arg0) => {
                [tmp, tmp2] = arg0;
                tmp2.prototype.insertRule = dependencyMap[tmp].insertRule;
                tmp2.prototype.deleteRule = dependencyMap[tmp].deleteRule;
              });
            };
            if (closure_79) {
              fn5 = (Pause, arg1) => {
                items = [...arguments];
                try {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items, 0);
                  return HermesBuiltin.apply(items1, undefined);
                } catch (tmp7) {
                  if (closure_1_79) {
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
          }
        }
        return () => {

        };
      })(doc, obj);
      closure_8 = initAdoptedStyleSheetObserver(doc, doc.doc);
      obj = { win: null };
      obj[0] = defaultView;
      closure_9 = (function initStyleDeclarationObserver(doc, win) {
        ({ styleDeclarationCb: fn3, mirror: closure_1, ignoreCSSAttributes: closure_2, stylesheetManager: closure_3 } = doc);
        win = win.win;
        let setProperty;
        let removeProperty;
        setProperty = win.CSSStyleDeclaration.prototype.setProperty;
        if (typeof closure_86 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let fn = (apply, parentRule) => {
          [tmp2, tmp3, tmp4] = removeProperty(arg2, 3);
          if (set.has(tmp2)) {
            items = [tmp2, tmp3, tmp4];
            return setProperty.apply(parentRule, items);
          } else {
            parentRule = parentRule.parentRule;
            let parentStyleSheet;
            if (parentRule != null) {
              parentStyleSheet = parentRule.parentStyleSheet;
            }
            const styleMirror = closure_3.styleMirror;
            if (parentStyleSheet) {
              if (parentStyleSheet.ownerNode) {
                id = obj2.getId(parentStyleSheet.ownerNode);
              } else {
                const id1 = styleMirror.getId(parentStyleSheet);
              }
              parentStyleSheet = { styleId: null, id: null };
              parentStyleSheet[0] = id1;
              parentStyleSheet[1] = id;
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
                obj = { id: null, styleId: null, set: null, index: null };
                obj[0] = id;
                obj[1] = styleId;
                obj = { property: null, value: null, priority: null };
                obj[0] = tmp2;
                obj[1] = tmp3;
                obj[2] = tmp4;
                obj[2] = obj;
                obj[3] = closure_1_95(parentRule.parentRule);
                fn3(obj);
              }
              return apply.apply(parentRule, arg2);
            }
            obj2 = closure_1;
          }
        };
        fn3 = fn;
        if (closure_79) {
          fn = (Pause, arg1) => {
            items = [...arguments];
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              return HermesBuiltin.apply(items1, undefined);
            } catch (tmp7) {
              if (closure_1_79) {
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
        const proxy = new Proxy(setProperty, obj);
        win.CSSStyleDeclaration.prototype.setProperty = proxy;
        removeProperty = win.CSSStyleDeclaration.prototype.removeProperty;
        if (typeof closure_86 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let fn2 = (apply, parentRule) => {
          const first = removeProperty(arg2, 1)[0];
          if (set.has(first)) {
            items = [first];
            return removeProperty.apply(parentRule, items);
          } else {
            parentRule = parentRule.parentRule;
            let parentStyleSheet;
            if (parentRule != null) {
              parentStyleSheet = parentRule.parentStyleSheet;
            }
            const styleMirror = closure_3.styleMirror;
            if (parentStyleSheet) {
              if (parentStyleSheet.ownerNode) {
                id = obj2.getId(parentStyleSheet.ownerNode);
              } else {
                const id1 = styleMirror.getId(parentStyleSheet);
              }
              parentStyleSheet = { styleId: null, id: null };
              parentStyleSheet[0] = id1;
              parentStyleSheet[1] = id;
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
                obj = { id: null, styleId: null, remove: null, index: null };
                obj[0] = id;
                obj[1] = styleId;
                obj = { property: null };
                obj[0] = first;
                obj[2] = obj;
                obj[3] = closure_1_95(parentRule.parentRule);
                fn3(obj);
              }
              return apply.apply(parentRule, arg2);
            }
            obj2 = closure_1;
          }
        };
        fn3 = fn2;
        if (closure_79) {
          fn2 = (Pause, arg1) => {
            items = [...arguments];
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              return HermesBuiltin.apply(items1, undefined);
            } catch (tmp7) {
              if (closure_1_79) {
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
        const proxy1 = new Proxy(removeProperty, obj);
        win.CSSStyleDeclaration.prototype.removeProperty = proxy1;
        if (typeof closure_86 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        fn3 = () => {
          win.CSSStyleDeclaration.prototype.setProperty = setProperty;
          win.CSSStyleDeclaration.prototype.removeProperty = removeProperty;
        };
        if (closure_79) {
          fn3 = (Pause, arg1) => {
            items = [...arguments];
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              return HermesBuiltin.apply(items1, undefined);
            } catch (tmp7) {
              if (closure_1_79) {
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
      })(doc, obj);
      if (doc.collectFonts) {
        closure_10 = (function initFontObserver(doc) {
          ({ fontCb: fn, doc } = doc);
          let defaultView;
          items = undefined;
          weakMap = undefined;
          let FontFace;
          defaultView = doc.defaultView;
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
              obj[3] = json;
              const result = weakMap.set(tmp, obj);
              return tmp;
            };
            items.push(() => {
              defaultView.FontFace = FontFace;
            });
            items.push(callback13(doc.fonts, "add", (arg0) => {
              closure_0 = arg0;
              return function(arg0) {
                fn = arg0;
                if (typeof closure_2_86 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                fn = () => {
                  const value = closure_1_3.get(fn);
                  if (value) {
                    fn(value);
                    closure_1_3.delete(fn);
                  }
                };
                if (closure_2_79) {
                  fn = (Pause, arg1) => {
                    items = [...arguments];
                    try {
                      const items1 = [];
                      HermesBuiltin.arraySpread(items, 0);
                      return HermesBuiltin.apply(items1, undefined);
                    } catch (tmp7) {
                      if (closure_1_79) {
                        if (true === tmp8(tmp7)) {
                          return /* F104293 */ function() { ... };
                        }
                      }
                      throw tmp7;
                    }
                  };
                }
                closure_2_72(fn, 0);
                items = [arg0];
                return fn.apply(this, items);
              };
            }));
            if (typeof closure_86 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            fn = () => {
              const item = items.forEach((arg0) => arg0());
            };
            if (closure_79) {
              fn = (Pause, arg1) => {
                items = [...arguments];
                try {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items, 0);
                  return HermesBuiltin.apply(items1, undefined);
                } catch (tmp7) {
                  if (closure_1_79) {
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
            return () => {

            };
          }
        })(doc);
      }
    }
    closure_11 = (function initSelectionObserver(doc) {
      ({ doc: selectionchange, mirror: fn, blockClass: document, blockSelector: obj, unblockSelector: closure_4, selectionCb: closure_5 } = doc);
      c6 = true;
      if (typeof closure_86 !== "function") {
        HermesBuiltin.throwTypeError();
      }
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
                let tmp7 = document;
                let tmp8 = obj;
                let tmp9 = closure_4;
                let tmp10 = startContainer;
                let tmp11 = document;
                let tmp12 = obj;
                let tmp13 = closure_4;
                let flag = true;
                ({ startOffset, endOffset } = rangeAt);
                let tmp6 = closure_1_65;
                let tmp6Result = closure_1_65(startContainer, document, obj, closure_4, true);
                let tmp15 = num;
                if (!tmp6Result) {
                  let tmp16 = endContainer;
                  let tmp17 = tmp7;
                  let tmp18 = tmp8;
                  let tmp19 = tmp9;
                  let flag2 = true;
                  tmp6Result = tmp6(endContainer, tmp7, tmp8, tmp9, true);
                }
                if (!tmp6Result) {
                  obj = { start: null, startOffset: null, end: null, endOffset: null };
                  let tmp20 = fn;
                  obj[0] = fn.getId(startContainer);
                  obj[1] = startOffset;
                  obj[2] = fn.getId(endContainer);
                  obj[3] = endOffset;
                  let arr = items.push(obj);
                }
                num = num + 1;
              } while (num < tmp4);
            }
            obj = { ranges: null };
            obj[0] = items;
            callback(obj);
          } else {
            let isCollapsed;
            if (selection != null) {
              isCollapsed = selection.isCollapsed;
            }
          }
        }
      };
      selectionchange = fn;
      if (closure_79) {
        fn = (Pause, arg1) => {
          items = [...arguments];
          try {
            const items1 = [];
            HermesBuiltin.arraySpread(items, 0);
            return HermesBuiltin.apply(items1, undefined);
          } catch (tmp7) {
            if (closure_1_79) {
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
      obj = { capture: true, passive: true };
      const listener = document.addEventListener("selectionchange", fn, obj);
      return () => document.removeEventListener(selectionchange, fn, obj);
    })(doc);
    closure_12 = (function initCustomElementObserver(customElementCb) {
      customElementCb = customElementCb.customElementCb;
      const defaultView = customElementCb.doc.defaultView;
      if (defaultView) {
        if (defaultView.customElements) {
          let fn = callback13(defaultView.customElements, "define", (arg0) => {
            closure_0 = arg0;
            return function(arg0, arg1, arg2) {
              try {
                obj = { define: null };
                obj = { name: null };
                obj[0] = arg0;
                obj[0] = obj;
                callback(obj);
                const self = this;
                items = [arg0, arg1, arg2];
                return callback.apply(this, items);
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
      const item = closure_1_87.forEach((reset) => reset.reset());
      if (closure_0 != null) {
        closure_0.disconnect();
      }
      callback();
      callback2();
      callback3();
      callback4();
      callback5();
      callback6();
      callback7();
      callback8();
      callback9();
      callback10();
      callback11();
      callback12();
      const item1 = items.forEach((arg0) => arg0());
    });
  } else {
    return () => {

    };
  }
}
function record() {
  obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let emit;
  c1 = undefined;
  c2 = undefined;
  let str;
  let blockSelector;
  let unblockSelector;
  let str2;
  let ignoreSelector;
  closure_8 = undefined;
  let str3;
  let unmaskTextClass;
  let maskTextSelector;
  let unmaskTextSelector;
  closure_13 = undefined;
  maskAttributeFn = undefined;
  let maskInputFn;
  let maskTextFn;
  c17 = undefined;
  sampling = undefined;
  let dataURLOptions;
  closure_20 = undefined;
  closure_21 = undefined;
  let recordAfter;
  closure_23 = undefined;
  closure_24 = undefined;
  closure_25 = undefined;
  let plugins;
  let fn;
  let ignoreCSSAttributes;
  onMutation = undefined;
  closure_30 = undefined;
  c31 = undefined;
  c32 = undefined;
  maskInputOptions = undefined;
  obj = undefined;
  c35 = undefined;
  let eventProcessor;
  let wrappedMutationEmit;
  let wrappedScrollEmit;
  let wrappedCanvasMutationEmit;
  closure_40 = undefined;
  closure_41 = undefined;
  closure_42 = undefined;
  closure_43 = undefined;
  closure_44 = undefined;
  let takeFullSnapshot2;
  c46 = undefined;
  c47 = undefined;
  c48 = undefined;
  emit = obj.emit;
  ({ checkoutEveryNms: c1, checkoutEveryNth: c2, blockClass } = obj);
  str = "rr-block";
  if (undefined !== blockClass) {
    str = blockClass;
  }
  blockSelector = obj.blockSelector;
  let tmp = null;
  if (undefined !== blockSelector) {
    tmp = blockSelector;
  }
  blockSelector = tmp;
  unblockSelector = obj.unblockSelector;
  let tmp2 = null;
  if (undefined !== unblockSelector) {
    tmp2 = unblockSelector;
  }
  unblockSelector = tmp2;
  const ignoreClass = obj.ignoreClass;
  str2 = "rr-ignore";
  if (undefined !== ignoreClass) {
    str2 = ignoreClass;
  }
  ignoreSelector = obj.ignoreSelector;
  let tmp3 = null;
  if (undefined !== ignoreSelector) {
    tmp3 = ignoreSelector;
  }
  ignoreSelector = tmp3;
  let maskAllText = obj.maskAllText;
  closure_8 = tmp4;
  let maskTextClass = obj.maskTextClass;
  str3 = "rr-mask";
  if (undefined !== maskTextClass) {
    str3 = maskTextClass;
  }
  unmaskTextClass = obj.unmaskTextClass;
  let tmp5 = null;
  if (undefined !== unmaskTextClass) {
    tmp5 = unmaskTextClass;
  }
  unmaskTextClass = tmp5;
  maskTextSelector = obj.maskTextSelector;
  let tmp6 = null;
  if (undefined !== maskTextSelector) {
    tmp6 = maskTextSelector;
  }
  maskTextSelector = tmp6;
  unmaskTextSelector = obj.unmaskTextSelector;
  let tmp7 = null;
  if (undefined !== unmaskTextSelector) {
    tmp7 = unmaskTextSelector;
  }
  unmaskTextSelector = tmp7;
  let inlineStylesheet = obj.inlineStylesheet;
  closure_13 = tmp8;
  ({ maskInputOptions, slimDOMOptions, maskAttributeFn } = obj);
  maskInputFn = obj.maskInputFn;
  maskTextFn = obj.maskTextFn;
  const maxCanvasSize = obj.maxCanvasSize;
  let tmp9 = null;
  if (undefined !== maxCanvasSize) {
    tmp9 = maxCanvasSize;
  }
  ({ packFn: c17, sampling } = obj);
  if (undefined === sampling) {
    sampling = {};
  }
  dataURLOptions = obj.dataURLOptions;
  if (undefined === dataURLOptions) {
    dataURLOptions = {};
  }
  ({ mousemoveWait, recordDOM } = obj);
  closure_20 = undefined === recordDOM || recordDOM;
  let recordCanvas = obj.recordCanvas;
  closure_21 = tmp10;
  const recordCrossOriginIframes = obj.recordCrossOriginIframes;
  recordAfter = obj.recordAfter;
  if (undefined === recordAfter) {
    let str4 = "load";
    if ("DOMContentLoaded" === obj.recordAfter) {
      str4 = obj.recordAfter;
    }
    recordAfter = str4;
  }
  const userTriggeredOnInput = obj.userTriggeredOnInput;
  closure_23 = undefined !== userTriggeredOnInput && userTriggeredOnInput;
  const collectFonts = obj.collectFonts;
  closure_24 = undefined !== collectFonts && collectFonts;
  let inlineImages = obj.inlineImages;
  closure_25 = tmp12;
  plugins = obj.plugins;
  fn = obj.keepIframeSrcFn;
  if (undefined === fn) {
    fn = () => false;
  }
  ignoreCSSAttributes = obj.ignoreCSSAttributes;
  if (undefined === ignoreCSSAttributes) {
    let _Set = Set;
    ignoreCSSAttributes = new Set([]);
  }
  ({ errorHandler, onMutation } = obj);
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
      error = new Error("emit function is required");
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
  if (true === obj.maskAllInputs) {
    maskInputOptions = { color: true, date: true, "datetime-local": true, email: true, month: true, number: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true, textarea: true, select: true, radio: true, checkbox: true };
  } else if (undefined === maskInputOptions) {
    maskInputOptions = {};
  }
  if (true !== slimDOMOptions) {
    if ("all" !== slimDOMOptions) {
      obj = slimDOMOptions;
      if (!slimDOMOptions) {
        obj = {};
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
        obj = item10007;
        if (item10007.eventProcessor) {
          let tmp2 = item10007;
          let tmp3 = eventProcessorResult;
          eventProcessorResult = obj.eventProcessor(eventProcessorResult);
        }
        continue;
      }
      let tmp5 = c17;
      if (c17) {
        tmp5 = !c31;
      }
      if (tmp5) {
        eventProcessorResult = c17(eventProcessorResult);
      }
      return eventProcessorResult;
    };
    function le(type) {
      type.timestamp = closure_1_62();
      const first = closure_1_87[0];
      let isFrozenResult;
      if (first != null) {
        isFrozenResult = first.isFrozen();
      }
      let tmp2 = !isFrozenResult;
      if (isFrozenResult) {
        tmp2 = type.type === closure_1_73.FullSnapshot;
      }
      if (!tmp2) {
        let tmp5 = type.type === closure_1_73.IncrementalSnapshot;
        if (tmp5) {
          tmp5 = type.data.source === closure_1_74.Mutation;
        }
        tmp2 = tmp5;
      }
      if (!tmp2) {
        const item = closure_1_87.forEach((unfreeze) => unfreeze.unfreeze());
      }
      if (closure_30) {
        if (emit != null) {
          tmp12(eventProcessor(type), arg1);
        }
      } else if (c31) {
        obj = { type: "rrweb", event: null, origin: null, isCheckout: null };
        obj[1] = eventProcessor(type);
        const _window = window;
        obj[2] = window.location.origin;
        obj[3] = arg1;
        const _window2 = window;
        parent.postMessage(obj, "*");
      }
      if (type.type === closure_1_73.FullSnapshot) {
        const _undefined = type;
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
          tmp20 = _undefined;
        }
        if (tmp20) {
          tmp20 = type.timestamp - _undefined.timestamp > tmp19;
        }
        if (!tmp18) {
          tmp18 = tmp20;
        }
        if (tmp18) {
          takeFullSnapshot2(true);
        }
        tmp19 = c1;
      }
    }
    wrappedMutationEmit = function wrappedMutationEmit(arg0) {
      obj = { type: closure_73.IncrementalSnapshot, data: null };
      obj = { source: closure_74.Mutation };
      const merged = Object.assign(arg0);
      obj[1] = obj;
      le(obj);
    };
    wrappedScrollEmit = function wrappedScrollEmit(arg0) {
      obj = { type: closure_73.IncrementalSnapshot, data: null };
      obj = { source: closure_74.Scroll };
      const merged = Object.assign(arg0);
      obj[1] = obj;
      le(obj);
    };
    wrappedCanvasMutationEmit = function wrappedCanvasMutationEmit(arg0) {
      obj = { type: closure_73.IncrementalSnapshot, data: null };
      obj = { source: closure_74.CanvasMutation };
      const merged = Object.assign(arg0);
      obj[1] = obj;
      le(obj);
    };
    obj = { mutationCb: null, adoptedStyleSheetCb: null };
    obj[0] = wrappedMutationEmit;
    obj[1] = function adoptedStyleSheetCb(arg0) {
      obj = { type: closure_73.IncrementalSnapshot, data: null };
      obj = { source: closure_74.AdoptedStyleSheet };
      const merged = Object.assign(arg0);
      obj[1] = obj;
      le(obj);
    };
    let tmp35 = new closure_106(obj);
    closure_40 = tmp35;
    if (typeof globalThis.__RRWEB_EXCLUDE_IFRAME__ === "boolean") {
      if (globalThis.__RRWEB_EXCLUDE_IFRAME__) {
        let tmp44 = new closure_99();
      }
      closure_41 = tmp44;
      if (!plugins) {
        plugins = [];
      }
      for (const item10140 of plugins) {
        obj5 = item10140;
        if (item10140.getMirror) {
          let tmp50 = item10140;
          obj1 = { nodeMirror: null, crossOriginIframeMirror: null, crossOriginIframeStyleMirror: null };
          let tmp51 = navigation;
          let tmp52 = navigation;
          obj1[0] = navigation;
          ({ crossOriginIframeMirror: obj7[1], crossOriginIframeStyleMirror: obj7[2] } = tmp44);
          let mirror = obj5.getMirror(obj1);
        }
        continue;
      }
      const tmp57 = new closure_107();
      closure_42 = tmp57;
      obj2 = { mirror: null, win: null, mutationCb: null, recordCanvas: null, blockClass: null, blockSelector: null, unblockSelector: null, maxCanvasSize: null, sampling: null, dataURLOptions: null, errorHandler: null };
      obj2[0] = navigation;
      let _window4 = window;
      obj2[1] = window;
      obj2[2] = function mutationCb(arg0) {
        obj = { type: closure_73.IncrementalSnapshot, data: null };
        obj = { source: closure_74.CanvasMutation };
        const merged = Object.assign(arg0);
        obj[1] = obj;
        le(obj);
      };
      obj2[3] = tmp10;
      obj2[4] = str;
      obj2[5] = tmp;
      obj2[6] = tmp2;
      obj2[7] = tmp9;
      obj2[8] = sampling.canvas;
      obj2[9] = dataURLOptions;
      obj2[10] = errorHandler;
      const tmp61 = (function _getCanvasManager(getCanvasManager, arg1) {
        try {
          if (getCanvasManager) {
            let tmp5 = getCanvasManager(arg1);
          } else {
            tmp5 = new closure_105();
          }
          return tmp5;
        } catch (err) {
          const _console = console;
          console.warn("Unable to initialize CanvasManager");
          const tmp12 = new closure_105();
          return tmp12;
        }
      })(obj.getCanvasManager, obj2);
      closure_43 = tmp61;
      if (typeof globalThis.__RRWEB_EXCLUDE_SHADOW_DOM__ !== "boolean") {
        obj3 = { mutationCb: null, scrollCb: null, bypassOptions: null, mirror: null };
        obj3[0] = wrappedMutationEmit;
        obj3[1] = wrappedScrollEmit;
        obj4 = { onMutation: null, blockClass: null, blockSelector: null, unblockSelector: null, maskAllText: null, maskTextClass: null, unmaskTextClass: null, maskTextSelector: null, unmaskTextSelector: null, inlineStylesheet: null, maskInputOptions: null, dataURLOptions: null, maskAttributeFn: null, maskTextFn: null, maskInputFn: null, recordCanvas: null, inlineImages: null, sampling: null, slimDOMOptions: null, iframeManager: null, stylesheetManager: null, canvasManager: null, keepIframeSrcFn: null, processedNodeManager: null, ignoreCSSAttributes: null };
        obj4[0] = onMutation;
        obj4[1] = str;
        obj4[2] = tmp;
        obj4[3] = tmp2;
        obj4[4] = tmp4;
        obj4[5] = str3;
        obj4[6] = tmp5;
        obj4[7] = tmp6;
        obj4[8] = tmp7;
        obj4[9] = tmp8;
        obj4[10] = maskInputOptions;
        obj4[11] = dataURLOptions;
        obj4[12] = maskAttributeFn;
        obj4[13] = maskTextFn;
        obj4[14] = maskInputFn;
        obj4[15] = tmp10;
        obj4[16] = tmp12;
        obj4[17] = sampling;
        obj4[18] = obj;
        obj4[19] = tmp44;
        obj4[20] = tmp35;
        obj4[21] = tmp61;
        obj4[22] = fn;
        obj4[23] = tmp57;
        obj4[24] = ignoreCSSAttributes;
        obj3[2] = obj4;
        obj3[3] = tmp59;
        let tmp66 = new closure_102(obj3);
        closure_44 = tmp66;
        takeFullSnapshot2 = function takeFullSnapshot2(arg0) {
          let flag = arg0;
          if (arg0 === undefined) {
            flag = false;
          }
          if (closure_20) {
            obj = { type: null, data: null };
            obj[0] = closure_1_73.Meta;
            obj = { href: null, width: null, height: null };
            const _window = window;
            obj[0] = window.location.href;
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
            obj[1] = innerWidth;
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
            obj[2] = innerHeight;
            obj[1] = obj;
            le(obj, flag);
            obj2 = navigation;
            navigation.reset();
            closure_44.init();
            const item = closure_1_87.forEach((lock) => lock.lock());
            const _document9 = document;
            obj = { mirror: null, blockClass: null, blockSelector: null, unblockSelector: null, maskAllText: null, maskTextClass: null, unmaskTextClass: null, maskTextSelector: null, unmaskTextSelector: null, inlineStylesheet: null, maskAllInputs: null, maskAttributeFn: null, maskInputFn: null, maskTextFn: null, slimDOM: null, dataURLOptions: null, recordCanvas: null, inlineImages: null, onSerialize: null, onIframeLoad: null, onStylesheetLoad: null, onBlockedImageLoad: null, keepIframeSrcFn: null, ignoreCSSAttributes: null };
            obj4 = closure_1_108;
            obj[0] = closure_1_108;
            obj[1] = str;
            obj[2] = blockSelector;
            obj[3] = unblockSelector;
            obj[4] = closure_8;
            obj[5] = str3;
            obj[6] = unmaskTextClass;
            obj[7] = maskTextSelector;
            obj[8] = unmaskTextSelector;
            obj[9] = closure_13;
            obj[10] = maskInputOptions;
            obj[11] = maskAttributeFn;
            obj[12] = maskInputFn;
            obj[13] = maskTextFn;
            obj[14] = obj;
            obj[15] = dataURLOptions;
            obj[16] = closure_21;
            obj[17] = closure_25;
            obj[18] = function onSerialize(nodeName) {
              let meta = "IFRAME" === nodeName.nodeName;
              if (meta) {
                meta = obj.getMeta(nodeName);
              }
              if (Boolean(meta)) {
                closure_41.addIframe(nodeName);
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
                getAttribute = obj.getMeta(nodeName);
              }
              if (Boolean(getAttribute)) {
                closure_40.trackLinkElement(nodeName);
              }
              let shadowRoot;
              if (nodeName != null) {
                shadowRoot = nodeName.shadowRoot;
              }
              if (Boolean(shadowRoot)) {
                const _document = document;
                closure_44.addShadowRoot(nodeName.shadowRoot, document);
              }
            };
            obj[19] = function onIframeLoad(contentWindow) {
              closure_41.attachIframe(contentWindow, arg1);
              if (contentWindow.contentWindow) {
                closure_43.addWindow(contentWindow.contentWindow);
              }
              closure_44.observeAttachShadow(contentWindow);
            };
            obj[20] = function onStylesheetLoad(nodeName, attributes) {
              closure_40.attachLinkElement(nodeName, attributes);
            };
            obj[21] = function onBlockedImageLoad(arg0, id, width) {
              obj = { adds: [], removes: [], texts: [], attributes: null };
              obj = { id: id.id, attributes: null };
              obj = { style: { width: "" + width.width + "px", height: "" + width.height + "px" } };
              obj[1] = obj;
              const items = [obj];
              obj[3] = items;
              if (typeof closure_37 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              obj2 = { type: closure_1_73.IncrementalSnapshot, data: null };
              const merged = Object.assign(obj);
              obj2[1] = { source: closure_1_74.Mutation };
              closure_1_103(obj2);
            };
            obj[22] = fn;
            obj[23] = ignoreCSSAttributes;
            let mirror = obj.mirror;
            if (undefined === mirror) {
              mirror = new closure_23();
            }
            const blockClass = obj.blockClass;
            str = "rr-block";
            if (undefined !== blockClass) {
              str = blockClass;
            }
            blockSelector = obj.blockSelector;
            let tmp31 = null;
            if (undefined !== blockSelector) {
              tmp31 = blockSelector;
            }
            unblockSelector = obj.unblockSelector;
            let tmp32 = null;
            if (undefined !== unblockSelector) {
              tmp32 = unblockSelector;
            }
            const maskAllText = obj.maskAllText;
            const maskTextClass = obj.maskTextClass;
            str2 = "rr-mask";
            if (undefined !== maskTextClass) {
              str2 = maskTextClass;
            }
            unmaskTextClass = obj.unmaskTextClass;
            let tmp34 = null;
            if (undefined !== unmaskTextClass) {
              tmp34 = unmaskTextClass;
            }
            maskTextSelector = obj.maskTextSelector;
            let tmp35 = null;
            if (undefined !== maskTextSelector) {
              tmp35 = maskTextSelector;
            }
            unmaskTextSelector = obj.unmaskTextSelector;
            let tmp36 = null;
            if (undefined !== unmaskTextSelector) {
              tmp36 = unmaskTextSelector;
            }
            const inlineStylesheet = obj.inlineStylesheet;
            const inlineImages = obj.inlineImages;
            const recordCanvas = obj.recordCanvas;
            const maskAllInputs = obj.maskAllInputs;
            obj2 = undefined !== maskAllInputs && maskAllInputs;
            const slimDOM = obj.slimDOM;
            let tmp40 = undefined !== slimDOM;
            ({ maskAttributeFn, maskTextFn, maskInputFn } = obj);
            if (tmp40) {
              tmp40 = slimDOM;
            }
            ({ keepIframeSrcFn, dataURLOptions, preserveWhiteSpace, onSerialize, onIframeLoad, iframeLoadTimeout, onBlockedImageLoad, onStylesheetLoad, stylesheetLoadTimeout } = obj);
            if (undefined === keepIframeSrcFn) {
              keepIframeSrcFn = () => false;
            }
            ignoreCSSAttributes = obj.ignoreCSSAttributes;
            obj1 = { doc: null, mirror: null, blockClass: null, blockSelector: null, unblockSelector: null, maskAllText: null, maskTextClass: null, unmaskTextClass: null, maskTextSelector: null, unmaskTextSelector: null, skipChild: false, inlineStylesheet: null, maskInputOptions: null, maskAttributeFn: null, maskTextFn: null, maskInputFn: null, slimDOMOptions: null, dataURLOptions: null, inlineImages: null, recordCanvas: null, preserveWhiteSpace: null, onSerialize: null, onIframeLoad: null, iframeLoadTimeout: null, onBlockedImageLoad: null, onStylesheetLoad: null, stylesheetLoadTimeout: null, keepIframeSrcFn: null, newlyAddedElement: false, ignoreCSSAttributes: null };
            obj1[0] = _document9;
            obj1[1] = mirror;
            obj1[2] = str;
            obj1[3] = tmp31;
            obj1[4] = tmp32;
            obj1[5] = undefined !== maskAllText && maskAllText;
            obj1[6] = str2;
            obj1[7] = tmp34;
            obj1[8] = tmp35;
            obj1[9] = tmp36;
            obj1[11] = undefined === inlineStylesheet || inlineStylesheet;
            if (true === obj2) {
              obj2 = { color: true, date: true, "datetime-local": true, email: true, month: true, number: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true, textarea: true, select: true };
            } else if (false === obj2) {
              obj2 = {};
            }
            obj1[12] = obj2;
            obj1[13] = maskAttributeFn;
            obj1[14] = maskTextFn;
            obj1[15] = maskInputFn;
            if (true !== tmp40) {
              if ("all" !== tmp40) {
                obj3 = tmp40;
                if (false === tmp40) {
                  obj3 = {};
                }
              }
              obj1[16] = obj3;
              obj1[17] = dataURLOptions;
              obj1[18] = tmp38;
              obj1[19] = tmp39;
              obj1[20] = preserveWhiteSpace;
              obj1[21] = onSerialize;
              obj1[22] = onIframeLoad;
              obj1[23] = iframeLoadTimeout;
              obj1[24] = onBlockedImageLoad;
              obj1[25] = onStylesheetLoad;
              obj1[26] = stylesheetLoadTimeout;
              obj1[27] = keepIframeSrcFn;
              if (undefined === ignoreCSSAttributes) {
                const _Set = Set;
                ignoreCSSAttributes = new Set([]);
              }
              obj1[29] = ignoreCSSAttributes;
              const tmp41Result = tmp41(_document9, obj1);
              if (tmp41Result) {
                obj4 = { type: null, data: null };
                obj4[0] = tmp2.FullSnapshot;
                obj5 = { node: null, initialOffset: null };
                obj5[0] = tmp41Result;
                const _window4 = window;
                obj5[1] = closure_1_63(window);
                obj4[1] = obj5;
                le(obj4);
                const item1 = arr.forEach((unlock) => unlock.unlock());
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
            const obj6 = { script: true, comment: true, headFavicon: true, headWhitespace: true, headMetaDescKeywords: null, headMetaSocial: true, headMetaRobots: true, headMetaHttpEquiv: true, headMetaAuthorship: true, headMetaVerification: true };
            obj6[4] = "all" === tmp40;
            obj3 = obj6;
            arr = closure_1_87;
            const tmp = le;
            tmp2 = closure_1_73;
            const tmp33 = undefined !== maskAllText && maskAllText;
            const tmp37 = undefined === inlineStylesheet || inlineStylesheet;
            tmp38 = undefined !== inlineImages && inlineImages;
            tmp39 = undefined !== recordCanvas && recordCanvas;
            tmp41 = closure_1_58;
          }
        };
      } else {
      }
      tmp66 = new closure_101();
      tmp59 = navigation;
    }
    obj5 = { mirror: null, mutationCb: null, stylesheetManager: null, recordCrossOriginIframes: null, wrappedEmit: null };
    obj5[0] = navigation;
    obj5[1] = wrappedMutationEmit;
    obj5[2] = tmp35;
    obj5[3] = tmp11;
    obj5[4] = le;
    tmp44 = new closure_100(obj5);
  }
  obj = { script: true, comment: true, headFavicon: true, headWhitespace: true, headMetaSocial: true, headMetaRobots: true, headMetaHttpEquiv: true, headMetaVerification: true, headMetaAuthorship: tmp29, headMetaDescKeywords: tmp29 };
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
      obj = { type: closure_1_73.Custom, timestamp: null, data: null };
      let num = _null.timestamp;
      if (!num) {
        num = 0;
      }
      obj[1] = 1000 * num;
      obj = { tag: "breadcrumb", payload: obj(_null[8]).normalize(_null, 10, 1000) };
      obj[2] = obj;
      obj.throttledAddEvent(obj);
      return "console" === _null.category;
    });
  }
}
function getClickTargetNode(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = obj;
  }
  if (tmp) {
    tmp = "target" in obj;
  }
  let target = obj;
  if (tmp) {
    target = obj.target;
  }
  let tmp2 = target;
  if (target) {
    tmp2 = target;
    if (target instanceof globalThis.Element) {
      tmp2 = target.closest("button,a") || target;
      const tmp4 = target.closest("button,a") || target;
    }
  }
  return tmp2;
}
function getTargetNode(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = obj;
  }
  if (tmp) {
    tmp = "target" in obj;
  }
  let target = obj;
  if (tmp) {
    target = obj.target;
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
      if (source === obj2.Scroll) {
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
    }
  } catch (err) {
  }
}
function getBaseDomBreadcrumb(arg0, message) {
  const mirror = record.mirror;
  const id = mirror.getId(arg0);
  let node = id;
  if (id) {
    const mirror2 = tmp.mirror;
    node = mirror2.getNode(id);
  }
  let meta = node;
  if (node) {
    const mirror3 = tmp.mirror;
    meta = mirror3.getMeta(node);
  }
  let tmp5 = null;
  if (meta) {
    tmp5 = null;
    if (meta.type === Element.Element) {
      tmp5 = meta;
    }
  }
  obj = { message, data: null };
  if (tmp5) {
    obj = { nodeId: null, node: null };
    obj[0] = id;
    obj = { id: null, tagName: null, textContent: null, attributes: null };
    obj[0] = id;
    obj[1] = tmp5.tagName;
    const _Array = Array;
    const mapped = Array.from(tmp5.childNodes).map((type) => type.type === RN.Text && type.textContent);
    const _Boolean = Boolean;
    const found = mapped.filter(Boolean);
    const mapped1 = found.map((str) => str.trim());
    obj[2] = mapped1.join("");
    const attributes = tmp5.attributes;
    data_sentry_component = attributes["data-sentry-component"];
    data_sentry_element = !data_sentry_component;
    if (!data_sentry_component) {
      data_sentry_element = attributes["data-sentry-element"];
    }
    if (data_sentry_element) {
      attributes["data-sentry-component"] = attributes["data-sentry-element"];
    }
    obj1 = {};
    for (const key10049 in attributes) {
      let tmp10 = key10049;
      let tmp11 = set2;
      if (!set2.has(key10049)) {
        continue;
      } else {
        let tmp9 = "data-testid" !== key10049;
        if (tmp9) {
          tmp9 = "data-test-id" !== key10049;
        }
        let str5 = key10049;
        if (!tmp9) {
          str5 = "testId";
        }
        obj1[str5] = attributes[key10049];
        continue;
      }
      continue;
    }
    obj[3] = obj1;
    obj[1] = obj;
    obj2 = obj;
    const arr = Array.from(tmp5.childNodes);
  } else {
    obj2 = {};
  }
  obj[1] = obj2;
  return obj;
}
function createPerformanceEntry(arg0) {
  let tmpResult = null;
  if (table3[arg0.entryType]) {
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
  obj = registerSpanErrorInstrumentation;
  const result = ((obj.browserPerformanceTimeOrigin() || registerSpanErrorInstrumentation.GLOBAL_OBJ.performance.timeOrigin) + value) / 1000;
  obj = { type: "web-vital", name: "largest-contentful-paint", start: result, end: result, data: null };
  obj = { value, size: value, rating, nodeIds: null, attributions: "find" };
  let mapped;
  if (tmp3) {
    mapped = tmp3.map((arg0) => {
      mirror = mirror.mirror;
      return mirror.getId(arg0);
    });
  }
  obj[3] = mapped;
  obj[4] = obj;
  return obj;
}
function isLayoutShift(item10012) {
  return undefined !== item10012.sources;
}
function getCumulativeLayoutShift(rating) {
  const items = [];
  const items1 = [];
  for (const item10012 of tmp) {
    let iter = item10012;
    let tmp2 = isLayoutShift;
    if (isLayoutShift(item10012)) {
      let items2 = [];
      let tmp3 = item10012;
      let sources = iter.sources;
      let tmp4 = sources;
      let tmp5 = sources;
      for (const item10023 of sources) {
        let tmp6 = item10023;
        if (item10023.node) {
          let tmp7 = item10023;
          let arr = items1.push(tmp6.node);
          let tmp9 = record;
          let mirror = record.mirror;
          let id = mirror.getId(tmp6.node);
          if (id) {
            let tmp12 = items2;
            let tmp13 = id;
            arr = items2.push(tmp11);
          }
        }
        continue;
      }
      obj = { value: null, nodeIds: null };
      let tmp15 = item10012;
      obj[0] = iter.value;
      let tmp16 = items2;
      let tmp17;
      if (items2.length) {
        tmp17 = items2;
      }
      obj[1] = tmp17;
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
  obj = registerSpanErrorInstrumentation;
  const result = ((obj.browserPerformanceTimeOrigin() || registerSpanErrorInstrumentation.GLOBAL_OBJ.performance.timeOrigin) + value) / 1000;
  obj = { type: "web-vital", name: "interaction-to-next-paint", start: result, end: result, data: null };
  obj = { value, size: value, rating, nodeIds: null, attributions: "find" };
  let mapped;
  if (tmp3) {
    mapped = tmp3.map((arg0) => {
      mirror = mirror.mirror;
      return mirror.getId(arg0);
    });
  }
  obj[3] = mapped;
  obj[4] = obj;
  return obj;
}
function getWebVital(rating, name, items1, items) {
  const value = rating.value;
  obj = registerSpanErrorInstrumentation;
  const result = ((obj.browserPerformanceTimeOrigin() || registerSpanErrorInstrumentation.GLOBAL_OBJ.performance.timeOrigin) + value) / 1000;
  obj = { type: "web-vital", name, start: result, end: result, data: null };
  obj = { value, size: value, rating: rating.rating, nodeIds: null, attributions: null };
  let mapped;
  if (items1) {
    mapped = items1.map((arg0) => {
      mirror = mirror.mirror;
      return mirror.getId(arg0);
    });
  }
  obj[3] = mapped;
  obj[4] = items;
  obj[4] = obj;
  return obj;
}
function hasSessionStorage() {
  try {
    let sessionStorage = "sessionStorage" in registerSpanErrorInstrumentation.GLOBAL_OBJ;
    if (sessionStorage) {
      sessionStorage = registerSpanErrorInstrumentation.GLOBAL_OBJ.sessionStorage;
    }
    return sessionStorage;
  } catch (err) {
    return false;
  }
}
function clearSession(arg0) {
  (function deleteSession() {
    if (callback2()) {
      try {
        const sessionStorage = callback(table[8]).GLOBAL_OBJ.sessionStorage;
        sessionStorage.removeItem(closure_10);
      } catch (err) {
      }
    }
  })();
  arg0.session = undefined;
}
function saveSession(arg0) {
  if (hasSessionStorage()) {
    try {
      const sessionStorage = registerSpanErrorInstrumentation.GLOBAL_OBJ.sessionStorage;
      const _JSON = JSON;
      const result = sessionStorage.setItem(sentryReplaySession, JSON.stringify(arg0));
    } catch (err) {
    }
  }
}
function makeSession(id) {
  const timestamp = Date.now();
  id = id.id;
  if (!id) {
    obj = registerSpanErrorInstrumentation;
    id = obj.uuid4();
  }
  obj = { id, started: tmp4, lastActivity: tmp5, segmentId: tmp6, sampled: id.sampled, previousSessionId: id.previousSessionId, dirty: tmp7 };
  return obj;
}
function createSession(allowBuffering, arg1) {
  ({ sessionSampleRate, stickySession } = allowBuffering);
  if (stickySession === undefined) {
    stickySession = false;
  }
  obj = arg1;
  if (arg1 === undefined) {
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
    id = registerSpanErrorInstrumentation.uuid4();
    obj3 = registerSpanErrorInstrumentation;
  }
  obj = { id, started: tmp7, lastActivity: tmp8, segmentId: tmp9, sampled: obj.sampled, previousSessionId: obj.previousSessionId, dirty: tmp10 };
  if (stickySession) {
    saveSession(obj);
  }
  return obj;
}
function isSessionExpired(started) {
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
      if (callback2()) {
        try {
          const sessionStorage = callback(table[8]).GLOBAL_OBJ.sessionStorage;
          const value = sessionStorage.getItem(closure_10);
          if (value) {
            const _JSON = JSON;
            const parsed = JSON.parse(value);
            if (closure_130) {
              closure_133.infoTick("Loading existing session");
            }
            return callback3(parsed);
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
    obj = { sessionIdleExpire: null, maxReplayDuration: null };
    obj[0] = sessionIdleExpire;
    obj[1] = maxReplayDuration;
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
      if (closure_130) {
        closure_133.infoTick("Session in sessionStorage is expired, creating new one...");
      }
      obj = { previousSessionId: null };
      obj[0] = stickySession.id;
      tmp9 = createSession(stickySession, obj);
    }
    let tmp5 = tmp9;
  } else {
    if (closure_130) {
      closure_133.infoTick("Creating new session");
    }
    obj = { previousSessionId: null };
    obj[0] = previousSessionId;
    tmp5 = createSession(stickySession, obj);
  }
  return tmp5;
}
function addEventSync(eventBuffer, timestamp) {
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
            if (closure_130) {
              const _HermesInternal = HermesInternal;
              closure_133.infoTick("Skipping event with timestamp " + result + " because it is after maxReplayDuration");
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
    _addEvent(eventBuffer, timestamp, arg2);
    flag3 = true;
  }
  return flag3;
}
function _addEvent(eventBuffer, timestamp, arg2) {
  const self = this;
  const apply = _addEvent3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _addEvent3() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let str = tmp3;
              closure_3 = tmp5;
              let eventBuffer;
              closure_2 = undefined;
              closure_3 = undefined;
              str = undefined;
              let client;
              c6 = undefined;
              eventBuffer = lib.eventBuffer;
              if (eventBuffer) {
                closure_2 = tmp38;
                c6 = 1;
                let tmp39 = tmp51;
                if (tmp51) {
                  tmp39 = tmp38;
                }
                if (tmp39) {
                  eventBuffer.clear();
                }
                if (tmp51) {
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
                    if (closure_130) {
                      closure_133.exception(tmp3, "An error occurred in the `beforeAddRecordingEvent` callback, skipping the event...");
                    }
                    return null;
                  }
                })(tmp50, obj10.getOptions().beforeAddRecordingEvent);
                if (tmp41) {
                  c7 = 2;
                  c8 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = eventBuffer.addEvent(tmp41);
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
            c7 = client;
            let tmp12 = c7;
            if (c7) {
              tmp12 = c7 instanceof closure_134;
            }
            closure_3 = tmp12;
            str = "addEvent";
            if (closure_3) {
              str = "addEventSizeExceeded";
            }
            obj3 = lib(eventBuffer[8]);
            client = obj3.getClient();
            if (client) {
              let str2 = "internal_sdk_error";
              if (closure_3) {
                str2 = "buffer_overflow";
              }
              c6 = str2;
              client.recordDroppedEvent(c6, "replay");
            }
            if (closure_3) {
              if (closure_2) {
                eventBuffer.clear();
                eventBuffer.waitForCheckout = true;
                c8 = 3;
                return { value: null, done: true };
              }
            }
            lib.handleException(c7);
            obj2 = { reason: null };
            obj2[0] = str;
            c7 = 3;
            c8 = 1;
            obj3 = { value: null, done: false };
            obj3[0] = lib.stop(obj2);
            return obj3;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              c6 = 0;
              c8 = 3;
              obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c8 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp42) {
          client = tmp42;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp42;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  closure_148 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function resetReplayIdOnDynamicSamplingContext() {
  const currentScope = registerSpanErrorInstrumentation.getCurrentScope();
  if (currentScope.getPropagationContext().dsc) {
    delete tmp4[tmp3];
  }
  let tmp5Result = tmp5(817);
  const activeSpan = tmp5Result.getActiveSpan();
  if (activeSpan) {
    tmp5Result = tmp5(817);
    const dynamicSamplingContextFromSpan = tmp5Result.getDynamicSamplingContextFromSpan(activeSpan);
    delete tmp2[tmp];
  }
}
function createPerformanceSpans(arg0, arr) {
  closure_0 = arg0;
  return arr.map((op) => {
    const start = op.start;
    obj = { type: closure_1_73.Custom, timestamp: start, data: { tag: "performanceSpan", payload: obj } };
    obj = { op: op.type, description: op.name, startTimestamp: start, endTimestamp: op.end, data: op.data };
    let throttledAddEventResult = closure_0.throttledAddEvent(obj);
    if (typeof throttledAddEventResult === "string") {
      throttledAddEventResult = Promise.resolve(null);
    }
    return throttledAddEventResult;
  });
}
function addNetworkBreadcrumb(isEnabled, name) {
  const _require = isEnabled;
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
      obj = registerSpanErrorInstrumentation;
      isSentryRequestUrlResult = obj.isSentryRequestUrl(name.name, require("00817_registerSpanErrorInstrumentation.js").getClient());
      obj2 = registerSpanErrorInstrumentation;
    }
    if (!isSentryRequestUrlResult) {
      isEnabled.addUpdate(() => {
        const items = [closure_1];
        const mapped = items.map((op) => {
          const start = op.start;
          obj = { type: closure_1_73.Custom, timestamp: start, data: { tag: "performanceSpan", payload: obj } };
          obj = { op: op.type, description: op.name, startTimestamp: start, endTimestamp: op.end, data: op.data };
          let throttledAddEventResult = closure_0.throttledAddEvent(obj);
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
function getBodySize(fetchRequestArgBody) {
  if (fetchRequestArgBody) {
    const _TextEncoder = TextEncoder;
    const textEncoder = new TextEncoder();
    try {
      if (typeof fetchRequestArgBody === "string") {
        return textEncoder.encode(fetchRequestArgBody).length;
      } else {
        const _URLSearchParams = URLSearchParams;
        if (fetchRequestArgBody instanceof URLSearchParams) {
          return textEncoder.encode(fetchRequestArgBody.toString()).length;
        } else {
          const _FormData = FormData;
          if (fetchRequestArgBody instanceof FormData) {
            return textEncoder.encode(addClsInstrumentationHandler.serializeFormData(fetchRequestArgBody)).length;
          } else {
            const _Blob = Blob;
            if (fetchRequestArgBody instanceof Blob) {
              return fetchRequestArgBody.size;
            } else {
              const _ArrayBuffer = ArrayBuffer;
              if (fetchRequestArgBody instanceof ArrayBuffer) {
                return fetchRequestArgBody.byteLength;
              }
            }
          }
        }
      }
    } catch (err) {
    }
  }
}
function mergeWarning(_meta) {
  obj = {};
  if (_meta) {
    const merged = Object.assign(_meta._meta);
    const tmp3 = obj.warnings || [];
    const items = [];
    items[HermesBuiltin.arraySpread(tmp3, 0)] = arg1;
    obj.warnings = items;
    _meta._meta = obj;
    return _meta;
  } else {
    obj = { headers: null, size: "Array", _meta: -1 };
    obj[0] = obj;
    obj = { warnings: null };
    const items1 = [arg1];
    obj[0] = items1;
    obj[2] = obj;
    return obj;
  }
}
function makeNetworkReplayBreadcrumb(arg0, startTimestamp) {
  let tmp = null;
  if (startTimestamp) {
    obj = { type: null, start: null, end: null, name: null, data: null };
    obj[0] = arg0;
    obj[1] = startTimestamp.startTimestamp / 1000;
    obj[2] = startTimestamp.endTimestamp / 1000;
    obj[3] = startTimestamp.url;
    obj = { method: null, statusCode: null, request: null, response: null };
    ({ method: obj2[0], statusCode: obj2[1], request: obj2[2], response: obj2[3] } = startTimestamp);
    obj[4] = obj;
    tmp = obj;
  }
  return tmp;
}
function buildSkippedNetworkRequestOrResponse(size) {
  return { headers: {}, size, _meta: { warnings: ["URL_SKIPPED"] } };
}
function buildNetworkRequestOrResponse(arg0, arg1, body) {
  if (!arg1) {
    const _Object = Object;
  }
  if (arg1) {
    obj = { headers: null, size: null };
    obj[0] = arg0;
    obj[1] = arg1;
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
              const substr = body.slice(0, tmp5);
              obj = { body: null, warnings: null };
              if (tmp7) {
                obj[0] = substr;
                obj[1] = ["MAYBE_JSON_TRUNCATED"];
                let tmp4 = obj;
              } else {
                const _HermesInternal = HermesInternal;
                obj[0] = "" + substr + "\u2026";
                obj[1] = ["TEXT_TRUNCATED"];
                tmp4 = obj;
              }
              return tmp4;
            } else if (!tmp7) {
              obj = { body: null };
              obj[0] = body;
              return obj;
            } else {
              try {
                obj = { body: null };
                const _JSON = JSON;
                obj[0] = JSON.parse(body);
                return obj;
              } catch (err) {
              }
            }
            tmp5 = closure_12;
            tmp6 = body.length > closure_12;
          }
        }
        return { body };
      })(body));
      let length;
      if (warnings != null) {
        length = warnings.length;
      }
      if (length) {
        obj = { warnings: null };
        obj[0] = warnings;
        obj._meta = obj;
      }
      return obj;
    } else {
      return obj;
    }
  } else {
    obj = { headers: null };
    obj[0] = arg0;
    return obj;
  }
}
function urlMatches(str) {
  const baseURI = registerSpanErrorInstrumentation.GLOBAL_OBJ.document.baseURI;
  let substr = str;
  if (!str.startsWith("http://")) {
    substr = str;
    if (!str.startsWith("https://")) {
      substr = str;
      if (!str.startsWith(tmp(817).GLOBAL_OBJ.location.origin)) {
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
  return registerSpanErrorInstrumentation.stringMatchesSomePattern(substr, arg1);
}
function _captureFetchBreadcrumbToReplay() {
  let self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      closure_4 = tmp3;
      const replay = closure_2;
      c6 = 1;
      yield (function _prepareFetchData(closure_0, closure_1, closure_2) {
        const self = this;
        const apply = closure_159.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(replay, closure_1, closure_2);
      if (1 === tmp7) {
        c6 = 0;
        closure_3 = closure_5;
        if (closure_130) {
          closure_133.exception(closure_3, "Failed to capture fetch breadcrumb");
        }
        c8 = 3;
      } else if (arg0 === 1) {
        c8 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        closure_1 = arg1;
        closure_2 = callback2("resource.fetch", closure_1);
        callback(replay.replay, closure_2);
        c6 = 0;
      }
      c6 = 0;
      return arg1;
    })();
  });
  closure_158 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _prepareFetchData2() {
  let self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c3 = tmp2;
              let startTimestamp;
              let endTimestamp;
              let url;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              closure_6 = undefined;
              const _Date = Date;
              const timestamp = Date.now();
              startTimestamp = endTimestamp.startTimestamp;
              if (undefined === startTimestamp) {
                startTimestamp = timestamp;
              }
              endTimestamp = tmp29.endTimestamp;
              if (undefined === endTimestamp) {
                endTimestamp = timestamp;
              }
              const data = startTimestamp.data;
              url = data.url;
              ({ method: c3, status_code } = data);
              if (undefined === status_code) {
                status_code = 0;
              }
              c4 = status_code;
              ({ request_body_size, response_body_size } = data);
              let tmp15 = closure_1_157(url, tmp30.networkDetailAllowUrls);
              if (tmp15) {
                tmp15 = !tmp14(url, tmp30.networkDetailDenyUrls);
              }
              if (tmp15) {
                let tmp17 = (function _getRequestInfo(networkRequestHeaders, input, request_body_size) {
                  let prop = networkRequestHeaders.networkRequestHeaders;
                  if (input) {
                    if (1 === input.length) {
                      if (typeof input[0] !== "string") {
                        const first = input[0];
                        if (!first) {
                          obj = {};
                        }
                        let headers = first.headers;
                        if (!headers) {
                          obj = {};
                        }
                        const _Headers2 = Headers;
                        if (headers instanceof Headers) {
                          let headers1 = headers;
                          headers = {};
                          prop = headers;
                          const item = prop.forEach((arg0) => {
                            if (headers1.get(arg0)) {
                              prop[arg0] = headers1.get(arg0);
                            }
                          });
                          obj1 = headers;
                        } else {
                          const _Array2 = Array;
                          if (Array.isArray(headers)) {
                            obj1 = {};
                          } else {
                            headers1 = headers;
                            const _Object2 = Object;
                            const entries = Object.entries(headers);
                            obj1 = entries.reduce((arg0, arg1) => {
                              [str, tmp] = arg1;
                              const formatted = str.toLowerCase();
                              let hasItem = networkResponseHeaders.includes(formatted);
                              if (hasItem) {
                                hasItem = request_headers[str];
                              }
                              if (hasItem) {
                                arg0[formatted] = tmp;
                              }
                              return arg0;
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
                          const item1 = prop.forEach((arg0) => {
                            if (headers1.get(arg0)) {
                              prop[arg0] = headers1.get(arg0);
                            }
                          });
                          obj3 = headers1;
                        } else {
                          const _Array = Array;
                          if (Array.isArray(headers1)) {
                            obj3 = {};
                          } else {
                            const _Object = Object;
                            const entries1 = Object.entries(headers1);
                            obj3 = entries1.reduce((arg0, arg1) => {
                              [str, tmp] = arg1;
                              const formatted = str.toLowerCase();
                              let hasItem = networkResponseHeaders.includes(formatted);
                              if (hasItem) {
                                hasItem = request_headers[str];
                              }
                              if (hasItem) {
                                arg0[formatted] = tmp;
                              }
                              return arg0;
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
                    obj = {};
                    if (tmp) {
                      let obj11 = headers1(prop[9]);
                      const fetchRequestArgBody = obj11.getFetchRequestArgBody(input);
                      let obj12 = headers1(prop[9]);
                      [tmp20, tmp21] = callback(obj12.getBodyString(fetchRequestArgBody, closure_133), 2);
                      if (request_body_size) {
                        if (request_body_size) {
                          obj5 = { headers: null, size: null };
                          obj5[0] = obj;
                          obj5[1] = request_body_size;
                          if (tmp20) {
                            ({ warnings, body: obj15.body } = (function normalizeNetworkBody(body) {
                              if (body) {
                                if (typeof body === "string") {
                                  const tmp7 = (function _strIsProbablyJson() { ... })(body);
                                  if (tmp6) {
                                    const substr = body.slice(0, tmp5);
                                    obj = { body: null, warnings: null };
                                    if (tmp7) {
                                      obj[0] = substr;
                                      obj[1] = ["MAYBE_JSON_TRUNCATED"];
                                      let tmp4 = obj;
                                    } else {
                                      const _HermesInternal = HermesInternal;
                                      obj[0] = "" + substr + "\u2026";
                                      obj[1] = ["TEXT_TRUNCATED"];
                                      tmp4 = obj;
                                    }
                                    return tmp4;
                                  } else if (!tmp7) {
                                    obj = { body: null };
                                    obj[0] = body;
                                    return obj;
                                  } else {
                                    try {
                                      obj = { body: null };
                                      const _JSON = JSON;
                                      obj[0] = JSON.parse(body);
                                      return obj;
                                    } catch (err) {
                                    }
                                  }
                                  tmp5 = closure_12;
                                  tmp6 = body.length > closure_12;
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
                              const obj6 = { warnings: null };
                              obj6[0] = warnings;
                              obj5._meta = obj6;
                              tmp23 = obj5;
                            }
                            const tmp24 = (function normalizeNetworkBody(body) {
                              if (body) {
                                if (typeof body === "string") {
                                  const tmp7 = (function _strIsProbablyJson() { ... })(body);
                                  if (tmp6) {
                                    const substr = body.slice(0, tmp5);
                                    obj = { body: null, warnings: null };
                                    if (tmp7) {
                                      obj[0] = substr;
                                      obj[1] = ["MAYBE_JSON_TRUNCATED"];
                                      let tmp4 = obj;
                                    } else {
                                      const _HermesInternal = HermesInternal;
                                      obj[0] = "" + substr + "\u2026";
                                      obj[1] = ["TEXT_TRUNCATED"];
                                      tmp4 = obj;
                                    }
                                    return tmp4;
                                  } else if (!tmp7) {
                                    obj = { body: null };
                                    obj[0] = body;
                                    return obj;
                                  } else {
                                    try {
                                      obj = { body: null };
                                      const _JSON = JSON;
                                      obj[0] = JSON.parse(body);
                                      return obj;
                                    } catch (err) {
                                    }
                                  }
                                  tmp5 = closure_12;
                                  tmp6 = body.length > closure_12;
                                }
                              }
                              return { body };
                            })(tmp20);
                          } else {
                            tmp23 = obj5;
                          }
                        } else {
                          const obj7 = { headers: null };
                          obj7[0] = obj;
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
                          obj9 = { headers: null, size: "Array", _meta: -1 };
                          obj9[0] = obj8;
                          const obj10 = { warnings: null };
                          const items1 = [tmp21];
                          obj10[0] = items1;
                          obj9[2] = obj10;
                        }
                        return obj9;
                      } else {
                        return tmp23;
                      }
                      const tmp19 = callback(obj12.getBodyString(fetchRequestArgBody, closure_133), 2);
                    } else {
                      if (request_body_size) {
                        if (request_body_size) {
                          obj11 = { headers: null, size: null };
                          obj11[0] = obj;
                          obj11[1] = request_body_size;
                          let tmp13 = obj11;
                        } else {
                          obj12 = { headers: null };
                          obj12[0] = obj;
                          tmp13 = obj12;
                        }
                      } else {
                        const _Object3 = Object;
                      }
                      return tmp13;
                    }
                  }
                })(tmp30, tmp29.input, request_body_size);
              } else {
                tmp17 = closure_1_155(request_body_size);
              }
              c5 = tmp17;
              (function _getResponseInfo(arg0, arg1, response, response_body_size) {
                const self = this;
                const apply = closure_160.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(tmp15, url, endTimestamp.response, response_body_size);
              c4 = 1;
              c5 = 1;
              tmp14 = closure_1_157;
              const tmp28 = startTimestamp;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            closure_6 = arg1;
            obj = { startTimestamp: null, endTimestamp: null, url: null, method: null, statusCode: null, request: null, response: null };
            obj[0] = startTimestamp;
            obj[1] = endTimestamp;
            obj[2] = url;
            obj[3] = c3;
            obj[4] = c4;
            obj[5] = c5;
            obj[6] = closure_6;
            c5 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = obj;
            return obj2;
          }
        } catch (tmp22) {
          c5 = tmp;
          throw tmp22;
        }
      }
    })();
  });
  closure_159 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getResponseInfo2() {
  let self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c6 = 0;
    c7 = 0;
    const iter = (function*(arg0, arg1, arg2, arg3) {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj3 = tmp5;
              closure_4 = tmp2;
              c1 = undefined;
              c2 = undefined;
              let headers;
              closure_4 = undefined;
              ({ networkCaptureBodies: c1, networkResponseHeaders: c2 } = c1);
              headers = c2;
              closure_4 = headers;
              obj3 = undefined;
              v0 = undefined;
              dependencyMap = undefined;
              closure_8 = undefined;
              closure_9 = undefined;
              closure_10 = undefined;
              v0 = 1;
              dependencyMap = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              if (!closure_0) {
                if (undefined !== closure_4) {
                  dependencyMap = 3;
                  obj2 = { value: null, done: true };
                  obj2[0] = closure_1_155(closure_4);
                  return obj2;
                }
              }
              if (headers) {
                obj3 = callback2(headers.headers, c2);
              } else {
                obj3 = {};
              }
              if (headers) {
                v0 = 2;
                dependencyMap = 1;
                obj4 = { value: null, done: false };
                obj4[0] = (function _parseFetchResponseBody(closure_3) {
                  const self = this;
                  const apply = closure_161.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(headers);
                return obj4;
              }
              dependencyMap = 3;
              obj5 = { value: null, done: true };
              obj5[0] = closure_1_156(obj3, closure_4, undefined);
              return obj5;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = arg1;
            dependencyMap = v0(v0, 2);
            closure_8 = 5;
            closure_9 = 93;
            const obj6 = { networkCaptureBodies: null, responseBodySize: null, captureDetails: null, headers: null };
            obj6[0] = c1;
            obj6[1] = closure_4;
            obj6[2] = closure_0;
            obj6[3] = obj3;
            closure_10 = (function getResponseData(closure_8, responseBodySize) {
              responseBodySize = responseBodySize.responseBodySize;
              try {
                let length;
                if (closure_8 != null) {
                  length = closure_8.length;
                }
                let tmp10 = responseBodySize;
                if (length) {
                  tmp10 = responseBodySize;
                  if (undefined === responseBodySize) {
                    tmp10 = callback(closure_8);
                  }
                }
                if (tmp5) {
                  let tmp18;
                  if (tmp4) {
                    tmp18 = closure_8;
                  }
                  let tmp16Result = callback3(tmp6, tmp12, tmp18);
                  const tmp16 = callback3;
                } else {
                  tmp16Result = callback2(tmp12);
                }
                return tmp16Result;
              } catch (tmp19) {
                if (closure_130) {
                  closure_133.exception(tmp19, "Failed to serialize response body");
                }
                return callback3(tmp2, tmp3, tmp);
              }
            })(closure_8, obj6);
            if (closure_9) {
              callback(closure_10, closure_9);
            }
            dependencyMap = 3;
          }
        } catch (tmp30) {
          dependencyMap = tmp;
          throw tmp30;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_160 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _parseFetchResponseBody2() {
  let self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              let message = tmp7;
              closure_0 = undefined;
              const tmp28 = (function _tryCloneResponse(closure_0) {
                try {
                  return closure_0.clone();
                } catch (tmp2) {
                  if (closure_130) {
                    closure_133.exception(tmp2, "Failed to clone response body");
                  }
                }
              })(closure_0);
              if (tmp28) {
                c4 = 1;
                c5 = 2;
                c6 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = (function _tryGetResponseText(arg0) {
                  closure_0 = arg0;
                  return new Promise((closure_0) => {
                    const callback = closure_0;
                    closure_1 = arg1;
                    const timeout = callback(closure_1_1[9]).setTimeout(() => { ... }, 500);
                    obj = callback(closure_1_1[9]);
                    const promise = (function _getResponseText() { ... })(callback);
                    (function _getResponseText() { ... })(callback).then(() => { ... }, () => { ... }).finally(() => { ... });
                  });
                })(tmp28);
                return obj1;
              } else {
                const items = [undefined, "BODY_PARSE_ERROR"];
                c6 = 3;
                obj2 = { value: null, done: true };
                obj2[0] = items;
                return obj2;
              }
            }
          } else if (1 === tmp7) {
            c4 = 0;
            message = closure_3;
            const _Error = Error;
            if (!(message instanceof Error)) {
              if (closure_130) {
                closure_133.exception(message, "Failed to get text body from response");
              }
              const items1 = [undefined, "BODY_PARSE_ERROR"];
              c6 = 3;
            } else {
              message = message.message;
            }
            if (closure_130) {
              closure_133.warn("Parsing text body from response timed out");
            }
            const items2 = [undefined, "BODY_PARSE_TIMEOUT"];
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            closure_0 = arg1;
            const items3 = [closure_0];
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = items3;
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
    })();
  });
  closure_161 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getAllHeaders(arg0, arr) {
  closure_0 = arg0;
  obj = {};
  const item = arr.forEach((arg0) => {
    if (headers1.get(arg0)) {
      prop[arg0] = headers1.get(arg0);
    }
  });
  return obj;
}
function _getResponseText2() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0) {
      yield closure_0.text();
      return arg1;
    })();
  });
  closure_163 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _captureXhrBreadcrumbToReplay() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          let exceptionResult = c7;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              closure_3 = exceptionResult;
              c6 = 1;
              exceptionResult = closure_1_151(replay.replay, closure_1_154("resource.xhr", (function _prepareXhrData(closure_0, closure_1, closure_2) {
                const timestamp = Date.now();
                let startTimestamp = closure_1.startTimestamp;
                if (undefined === startTimestamp) {
                  startTimestamp = timestamp;
                }
                let endTimestamp = closure_1.endTimestamp;
                if (undefined === endTimestamp) {
                  endTimestamp = timestamp;
                }
                const xhr = closure_1.xhr;
                const data = closure_0.data;
                ({ url, method, status_code } = data);
                let num = 0;
                if (undefined !== status_code) {
                  num = status_code;
                }
                ({ request_body_size, response_body_size } = data);
                if (url) {
                  if (xhr) {
                    if (callback(url, closure_2.networkDetailAllowUrls)) {
                      if (!tmp4(url, closure_2.networkDetailDenyUrls)) {
                        let tmp7 = xhr[request_headers(undefined, networkResponseHeaders[9]).SENTRY_XHR_DATA_KEY];
                        if (tmp7) {
                          request_headers = tmp7.request_headers;
                          networkResponseHeaders = closure_2.networkRequestHeaders;
                          const _Object = Object;
                          const entries = Object.entries(request_headers);
                          let reduced = entries.reduce((arg0, arg1) => {
                            [str, tmp] = arg1;
                            const formatted = str.toLowerCase();
                            let hasItem = networkResponseHeaders.includes(formatted);
                            if (hasItem) {
                              hasItem = request_headers[str];
                            }
                            if (hasItem) {
                              arg0[formatted] = tmp;
                            }
                            return arg0;
                          }, {});
                        } else {
                          reduced = {};
                        }
                        let tmp5Result = tmp5(tmp6[9]);
                        const result = tmp5Result.parseXhrResponseHeaders(xhr);
                        request_headers = result;
                        networkResponseHeaders = closure_2.networkResponseHeaders;
                        const _Object2 = Object;
                        const entries1 = Object.entries(result);
                        const reduced1 = entries1.reduce((arg0, arg1) => {
                          [str, tmp] = arg1;
                          const formatted = str.toLowerCase();
                          let hasItem = networkResponseHeaders.includes(formatted);
                          if (hasItem) {
                            hasItem = request_headers[str];
                          }
                          if (hasItem) {
                            arg0[formatted] = tmp;
                          }
                          return arg0;
                        }, {});
                        if (closure_2.networkCaptureBodies) {
                          tmp5Result = tmp5(tmp6[9]);
                          let bodyString = tmp5Result.getBodyString(closure_1.input, closure_133);
                        } else {
                          bodyString = [undefined];
                        }
                        [tmp13, tmp14] = v0(bodyString, 2);
                        if (closure_2.networkCaptureBodies) {
                          let items = (function _getXhrResponseBody(xhr) {
                            try {
                              let items = [xhr.responseText];
                              return items;
                            } catch (tmp2) {
                              let items1 = [];
                              let arr = items1.push(tmp2);
                              try {
                                return (function _parseXhrResponse() { ... })(tmp.response, tmp.responseType);
                              } catch (tmp4) {
                                arr = arr.push(tmp4);
                                if (closure_130) {
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
                        const tmp11 = v0;
                        const tmp12 = v0(bodyString, 2);
                        [tmp16, tmp17] = v0(items, 2);
                        if (request_body_size) {
                          if (request_body_size) {
                            obj = { headers: null, size: null };
                            obj[0] = reduced;
                            obj[1] = request_body_size;
                            if (tmp13) {
                              ({ warnings, body: obj5.body } = (function normalizeNetworkBody(body) {
                                if (body) {
                                  if (typeof body === "string") {
                                    const tmp7 = (function _strIsProbablyJson() { ... })(body);
                                    if (tmp6) {
                                      const substr = body.slice(0, tmp5);
                                      obj = { body: null, warnings: null };
                                      if (tmp7) {
                                        obj[0] = substr;
                                        obj[1] = ["MAYBE_JSON_TRUNCATED"];
                                        let tmp4 = obj;
                                      } else {
                                        const _HermesInternal = HermesInternal;
                                        obj[0] = "" + substr + "\u2026";
                                        obj[1] = ["TEXT_TRUNCATED"];
                                        tmp4 = obj;
                                      }
                                      return tmp4;
                                    } else if (!tmp7) {
                                      obj = { body: null };
                                      obj[0] = body;
                                      return obj;
                                    } else {
                                      try {
                                        obj = { body: null };
                                        const _JSON = JSON;
                                        obj[0] = JSON.parse(body);
                                        return obj;
                                      } catch (err) {
                                      }
                                    }
                                    tmp5 = closure_12;
                                    tmp6 = body.length > closure_12;
                                  }
                                }
                                return { body };
                              })(tmp13));
                              let length;
                              if (warnings != null) {
                                length = warnings.length;
                              }
                              let tmp18 = obj;
                              if (length) {
                                obj = { warnings: null };
                                obj[0] = warnings;
                                obj._meta = obj;
                                tmp18 = obj;
                              }
                              const tmp19 = (function normalizeNetworkBody(body) {
                                if (body) {
                                  if (typeof body === "string") {
                                    const tmp7 = (function _strIsProbablyJson() { ... })(body);
                                    if (tmp6) {
                                      const substr = body.slice(0, tmp5);
                                      obj = { body: null, warnings: null };
                                      if (tmp7) {
                                        obj[0] = substr;
                                        obj[1] = ["MAYBE_JSON_TRUNCATED"];
                                        let tmp4 = obj;
                                      } else {
                                        const _HermesInternal = HermesInternal;
                                        obj[0] = "" + substr + "\u2026";
                                        obj[1] = ["TEXT_TRUNCATED"];
                                        tmp4 = obj;
                                      }
                                      return tmp4;
                                    } else if (!tmp7) {
                                      obj = { body: null };
                                      obj[0] = body;
                                      return obj;
                                    } else {
                                      try {
                                        obj = { body: null };
                                        const _JSON = JSON;
                                        obj[0] = JSON.parse(body);
                                        return obj;
                                      } catch (err) {
                                      }
                                    }
                                    tmp5 = closure_12;
                                    tmp6 = body.length > closure_12;
                                  }
                                }
                                return { body };
                              })(tmp13);
                            } else {
                              tmp18 = obj;
                            }
                          } else {
                            obj1 = { headers: null };
                            obj1[0] = reduced;
                            tmp18 = obj1;
                          }
                        } else {
                          const _Object3 = Object;
                        }
                        if (response_body_size) {
                          if (response_body_size) {
                            obj2 = { headers: null, size: null };
                            obj2[0] = reduced1;
                            obj2[1] = response_body_size;
                            if (tmp16) {
                              ({ warnings: warnings2, body: obj8.body } = (function normalizeNetworkBody(body) {
                                if (body) {
                                  if (typeof body === "string") {
                                    const tmp7 = (function _strIsProbablyJson() { ... })(body);
                                    if (tmp6) {
                                      const substr = body.slice(0, tmp5);
                                      obj = { body: null, warnings: null };
                                      if (tmp7) {
                                        obj[0] = substr;
                                        obj[1] = ["MAYBE_JSON_TRUNCATED"];
                                        let tmp4 = obj;
                                      } else {
                                        const _HermesInternal = HermesInternal;
                                        obj[0] = "" + substr + "\u2026";
                                        obj[1] = ["TEXT_TRUNCATED"];
                                        tmp4 = obj;
                                      }
                                      return tmp4;
                                    } else if (!tmp7) {
                                      obj = { body: null };
                                      obj[0] = body;
                                      return obj;
                                    } else {
                                      try {
                                        obj = { body: null };
                                        const _JSON = JSON;
                                        obj[0] = JSON.parse(body);
                                        return obj;
                                      } catch (err) {
                                      }
                                    }
                                    tmp5 = closure_12;
                                    tmp6 = body.length > closure_12;
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
                                obj3 = { warnings: null };
                                obj3[0] = warnings2;
                                obj2._meta = obj3;
                                tmp22 = obj2;
                              }
                              const tmp23 = (function normalizeNetworkBody(body) {
                                if (body) {
                                  if (typeof body === "string") {
                                    const tmp7 = (function _strIsProbablyJson() { ... })(body);
                                    if (tmp6) {
                                      const substr = body.slice(0, tmp5);
                                      obj = { body: null, warnings: null };
                                      if (tmp7) {
                                        obj[0] = substr;
                                        obj[1] = ["MAYBE_JSON_TRUNCATED"];
                                        let tmp4 = obj;
                                      } else {
                                        const _HermesInternal = HermesInternal;
                                        obj[0] = "" + substr + "\u2026";
                                        obj[1] = ["TEXT_TRUNCATED"];
                                        tmp4 = obj;
                                      }
                                      return tmp4;
                                    } else if (!tmp7) {
                                      obj = { body: null };
                                      obj[0] = body;
                                      return obj;
                                    } else {
                                      try {
                                        obj = { body: null };
                                        const _JSON = JSON;
                                        obj[0] = JSON.parse(body);
                                        return obj;
                                      } catch (err) {
                                      }
                                    }
                                    tmp5 = closure_12;
                                    tmp6 = body.length > closure_12;
                                  }
                                }
                                return { body };
                              })(tmp16);
                            } else {
                              tmp22 = obj2;
                            }
                          } else {
                            obj4 = { headers: null };
                            obj4[0] = reduced1;
                            tmp22 = obj4;
                          }
                        } else {
                          const _Object4 = Object;
                        }
                        obj5 = { startTimestamp: null, endTimestamp: null, url: null, method: null, statusCode: null, request: null, response: null };
                        obj5[0] = startTimestamp;
                        obj5[1] = endTimestamp;
                        obj5[2] = url;
                        obj5[3] = method;
                        obj5[4] = num;
                        if (!tmp14) {
                          obj5[5] = tmp18;
                          if (!tmp17) {
                            obj5[6] = tmp22;
                            return obj5;
                          } else {
                            const obj6 = {};
                            if (tmp22) {
                              const merged = Object.assign(tmp22._meta);
                              const tmp36 = obj6.warnings || [];
                              let items1 = [];
                              items1[HermesBuiltin.arraySpread(tmp36, 0)] = tmp17;
                              obj6.warnings = items1;
                              tmp22._meta = obj6;
                              let obj7 = tmp22;
                            } else {
                              obj7 = { headers: null, size: "Array", _meta: -1 };
                              obj7[0] = obj6;
                              const obj8 = { warnings: null };
                              let items2 = [tmp17];
                              obj8[0] = items2;
                              obj7[2] = obj8;
                            }
                          }
                        } else {
                          const obj9 = {};
                          if (tmp18) {
                            const merged1 = Object.assign(tmp18._meta);
                            const tmp29 = obj9.warnings || [];
                            let items3 = [];
                            items3[HermesBuiltin.arraySpread(tmp29, 0)] = tmp14;
                            obj9.warnings = items3;
                            tmp18._meta = obj9;
                            let obj10 = tmp18;
                          } else {
                            obj10 = { headers: null, size: "Array", _meta: -1 };
                            obj10[0] = obj9;
                            const obj11 = { warnings: null };
                            let items4 = [tmp14];
                            obj11[0] = items4;
                            obj10[2] = obj11;
                          }
                        }
                        const tmp11Result = v0(items, 2);
                      }
                    }
                    tmp4 = callback;
                  }
                  const obj12 = { startTimestamp: null, endTimestamp: null, url: null, method: null, statusCode: null, request: null, response: null };
                  obj12[0] = startTimestamp;
                  obj12[1] = endTimestamp;
                  obj12[2] = url;
                  obj12[3] = method;
                  obj12[4] = num;
                  const obj13 = { headers: null, size: null, _meta: null };
                  obj13[0] = {};
                  obj13[1] = request_body_size;
                  const obj14 = { warnings: null };
                  obj14[0] = ["URL_SKIPPED"];
                  obj13[2] = obj14;
                  obj12[5] = obj13;
                  const obj15 = { headers: null, size: null, _meta: null };
                  obj15[0] = {};
                  obj15[1] = response_body_size;
                  const obj16 = { warnings: null };
                  obj16[0] = ["URL_SKIPPED"];
                  obj15[2] = obj16;
                  obj12[6] = obj15;
                  return obj12;
                } else {
                  return null;
                }
              })(closure_0, closure_1, replay)));
              c6 = 0;
            }
          } else {
            exceptionResult = closure_3;
            c6 = 0;
            closure_0 = closure_5;
            if (closure_130) {
              exceptionResult = closure_133.exception(closure_0, "Failed to capture xhr breadcrumb");
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
  });
  closure_164 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
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
          return closure_152(json);
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
  obj = obj(817);
  const client = obj.getClient();
  try {
    const options = getOptions.getOptions();
    obj = { replay: null, networkDetailAllowUrls: null, networkDetailDenyUrls: null, networkCaptureBodies: null, networkRequestHeaders: null, networkResponseHeaders: null };
    obj[0] = getOptions;
    ({ networkDetailAllowUrls: obj3[1], networkDetailDenyUrls: obj3[2], networkCaptureBodies: obj3[3], networkRequestHeaders: obj3[4], networkResponseHeaders: obj3[5] } = options);
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
                callback(data, xhr);
                (function captureXhrBreadcrumbToReplay(data, xhr, arg2) {
                  const self = this;
                  const apply = closure_164.apply;
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
                    fetchRequestArgBody = callback(table[9]).getFetchRequestArgBody(input);
                    obj = callback(table[9]);
                  }
                  const tmpResult = closure_152(fetchRequestArgBody);
                  let tmp6;
                  if (response) {
                    const headers = response.headers;
                    const value = headers.get("content-length");
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
                  const apply = closure_158.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(data, xhr, arg0);
              }
            } catch (tmp10) {
              if (closure_130) {
                closure_133.exception(tmp10, "Error when enriching network breadcrumb");
              }
            }
          }
        })(obj, data, xhr);
      });
    }
  } catch (err) {
  }
}
function _addMemoryEntry() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (table === 2) {
        table = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          table = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              table = 3;
              throw arg1;
            } else if (arg0 === 2) {
              table = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c3 = 1;
              const _Date = Date;
              ({ jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } = callback(table[8]).GLOBAL_OBJ.performance.memory);
              const result = Date.now() / 1000;
              obj1 = { type: "memory", name: "memory", start: null, end: null, data: null };
              obj1[2] = result;
              obj1[3] = result;
              obj2 = { memory: null };
              obj3 = { jsHeapSizeLimit: null, totalJSHeapSize: null, usedJSHeapSize: null };
              obj3[0] = jsHeapSizeLimit;
              obj3[1] = totalJSHeapSize;
              obj3[2] = usedJSHeapSize;
              obj2[0] = obj3;
              obj1[4] = obj2;
              const items = [obj1];
              c3 = 0;
              table = 3;
              obj4 = { value: null, done: true };
              obj4[0] = Promise.all(closure_1_150(callback, items));
              return obj4;
            }
          } else {
            c3 = 0;
            table = 3;
            obj = { value: null, done: true };
            obj[0] = [];
            return obj;
          }
        } catch (tmp7) {
          if (tmp3 === c3) {
            table = tmp2;
            throw tmp7;
          } else {
            c2 = tmp;
          }
        }
      }
    })();
  });
  closure_167 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getHandleRecordingEmit(arg0) {
  closure_0 = arg0;
  c1 = false;
  return (arg0, arg1) => {
    closure_0 = arg0;
    if (closure_0.checkAndHandleExpiredSession()) {
      let tmp4 = arg1;
      if (!arg1) {
        tmp4 = !c1;
      }
      c1 = tmp4;
      c1 = true;
      if (obj.clickDetector) {
        closure_1_118(obj.clickDetector, arg0);
      }
      obj.addUpdate(() => {
        obj = recordingMode;
        if (tmp) {
          obj.setInitialState();
        }
        if (closure_2_146(obj, recordingMode, c1)) {
          if (tmp4) {
            const session = obj.session;
            if (tmp4) {
              if (obj.session) {
                if (0 === obj.session.segmentId) {
                  const options = obj.getOptions();
                  obj = { type: null, timestamp: null, data: null };
                  obj[0] = closure_2_73.Custom;
                  const _Date2 = Date;
                  obj[1] = Date.now();
                  obj = { shouldRecordCanvas: null, sessionSampleRate: null, errorSampleRate: null, useCompressionOption: null, blockAllMedia: null, maskAllText: null, maskAllInputs: null, useCompression: null, networkDetailHasUrls: null, networkCaptureBodies: null, networkRequestHasHeaders: null, networkResponseHasHeaders: null };
                  obj[0] = obj.isRecordingCanvas();
                  ({ sessionSampleRate: obj4[1], errorSampleRate: obj4[2], useCompression: obj4[3], blockAllMedia: obj4[4], maskAllText: obj4[5], maskAllInputs: obj4[6] } = options);
                  let eventBuffer = obj.eventBuffer;
                  if (eventBuffer) {
                    eventBuffer = "worker" === obj.eventBuffer.type;
                  }
                  obj1 = { tag: "options", payload: null };
                  obj[7] = eventBuffer;
                  obj[8] = options.networkDetailAllowUrls.length > 0;
                  obj[9] = options.networkCaptureBodies;
                  obj[10] = options.networkRequestHeaders.length > 0;
                  obj[11] = options.networkResponseHeaders.length > 0;
                  obj1[1] = obj;
                  obj[2] = obj1;
                  tmp3(obj, obj, false);
                }
              }
            }
            if ("buffer" === obj.recordingMode) {
              if (session) {
                if (obj.eventBuffer) {
                  if (!session.dirty) {
                    eventBuffer = obj.eventBuffer;
                    const earliestTimestamp = eventBuffer.getEarliestTimestamp();
                    if (earliestTimestamp) {
                      if (closure_2_130) {
                        const _Date = Date;
                        const date = new Date(earliestTimestamp);
                        const _HermesInternal = HermesInternal;
                        closure_2_133.log("Updating session start time to earliest event in buffer to " + date);
                      }
                      session.started = earliestTimestamp;
                      if (obj.getOptions().stickySession) {
                        closure_2_141(session);
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
              if ("session" === obj.recordingMode) {
                obj.flush();
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
        tmp3 = closure_2_146;
      });
    } else if (closure_1_130) {
      closure_1_133.warn("Received replay event after session expired.");
    }
  };
}
function _prepareReplayEvent() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c2 = tmp5;
              dependencyMap = tmp2;
              let store;
              dependencyMap = undefined;
              c2 = undefined;
              c3 = undefined;
              ({ client: c0, scope: c1, replayId: c2, event: c3 } = store);
              c4 = undefined;
              closure_5 = undefined;
              let sdk;
              sdk = undefined;
              let name;
              let version;
              let settings;
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              obj2 = { event_id: null, integrations: null };
              obj2[0] = c2;
              let keys;
              if (typeof store._integrations === "object") {
                if (null !== store._integrations) {
                  const _Array = Array;
                  if (!Array.isArray(store._integrations)) {
                    const _Object = Object;
                    keys = Object.keys(store._integrations);
                  }
                }
              }
              obj2[1] = keys;
              c4 = obj2;
              store.emit("preprocessEvent", c3, c4);
              obj4 = store(817);
              const options = store.getOptions();
              obj5 = store(817);
              c3 = 2;
              c4 = 1;
              obj3 = { value: null, done: false };
              obj3[0] = obj4.prepareEvent(options, c3, c4, dependencyMap, store, obj5.getIsolationScope());
              return obj3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            closure_5 = arg1;
            if (closure_5) {
              store.emit("postprocessEvent", closure_5, c4);
              let str2 = closure_5.platform;
              if (!str2) {
                str2 = "javascript";
              }
              closure_5.platform = str2;
              sdk = store.getSdkMetadata();
              sdk = undefined;
              if (sdk != null) {
                sdk = sdk.sdk;
              }
              if (!sdk) {
                sdk = {};
              }
              name = sdk.name;
              version = sdk.version;
              settings = sdk.settings;
              obj5 = {};
              const merged = Object.assign(closure_5.sdk);
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
              closure_5.sdk = obj5;
              c4 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = closure_5;
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
    })();
    iter.next();
    return iter;
  });
  closure_170 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _sendReplayRequest() {
  let self = this;
  let tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    closure_6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp9 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c2 = tmp4;
              dependencyMap = tmp10;
              let callback;
              dependencyMap = undefined;
              c2 = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              let tmp = callback;
              ({ recordingData: c0, replayId: c1, segmentId: c2, eventContext: c3, timestamp: c4, session: c5 } = callback);
              c6 = undefined;
              c7 = undefined;
              c8 = undefined;
              c9 = undefined;
              c10 = undefined;
              c11 = undefined;
              c12 = undefined;
              c13 = undefined;
              c14 = undefined;
              c15 = undefined;
              closure_16 = undefined;
              closure_17 = undefined;
              closure_18 = undefined;
              error = undefined;
              closure_20 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp10) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              tmp = dependencyMap;
              tmp = c2;
              obj2 = { recordingData: null, headers: null };
              tmp = closure_0;
              obj2[0] = closure_0;
              obj3 = { segment_id: null };
              tmp = closure_1_2;
              obj3[0] = closure_1_2;
              obj2[1] = obj3;
              closure_6 = (function prepareRecordingData(recordingData) {
                recordingData = recordingData.recordingData;
                const combined = "" + JSON.stringify(recordingData.headers) + "\n";
                if (typeof recordingData === "string") {
                  const _HermesInternal = HermesInternal;
                  let combined1 = "" + combined + recordingData;
                } else {
                  const _TextEncoder = TextEncoder;
                  const textEncoder = new TextEncoder();
                  const encodeResult = textEncoder.encode(combined);
                  const _Uint8Array = Uint8Array;
                  const uint8Array = new Uint8Array(encodeResult.length + recordingData.length);
                  combined1 = uint8Array;
                  const result = uint8Array.set(encodeResult);
                  const result1 = uint8Array.set(recordingData, encodeResult.length);
                }
                return combined1;
              })(obj2);
              tmp = closure_1_3;
              urls = closure_1_3.urls;
              tmp = closure_1_3;
              errorIds = closure_1_3.errorIds;
              tmp = closure_1_3;
              traceIds = closure_1_3.traceIds;
              tmp = closure_1_3;
              initialTimestamp = closure_1_3.initialTimestamp;
              tmp = callback;
              tmp = dependencyMap;
              const client = callback(817).getClient();
              tmp = callback;
              tmp = dependencyMap;
              const obj18 = callback(817);
              const currentScope = callback(817).getCurrentScope();
              transport = undefined;
              if (client != null) {
                transport = client.getTransport();
              }
              let obj7 = client;
              dsn = undefined;
              if (client != null) {
                dsn = obj7.getDsn();
              }
              if (client) {
                if (transport) {
                  if (dsn) {
                    if (c5.sampled) {
                      obj4 = { type: "replay_event", replay_start_timestamp: null, timestamp: null, error_ids: null, trace_ids: null, urls: null, replay_id: null, segment_id: null, replay_type: null };
                      obj4[1] = initialTimestamp / 1000;
                      obj4[2] = c4 / 1000;
                      obj4[3] = errorIds;
                      obj4[4] = traceIds;
                      obj4[5] = urls;
                      obj4[6] = closure_1_1;
                      obj4[7] = closure_1_2;
                      obj4[8] = c5.sampled;
                      obj5 = { scope: null, client: null, replayId: null, event: null };
                      obj5[0] = currentScope;
                      obj5[1] = client;
                      obj5[2] = closure_1_1;
                      obj5[3] = obj4;
                      c5 = 2;
                      c6 = 1;
                      const obj6 = { value: null, done: false };
                      obj6[0] = (function prepareReplayEvent(arg0) {
                        const self = this;
                        const apply = closure_170.apply;
                        if (typeof apply === "unknown") {
                          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                        } else {
                          applyArgumentsResult = apply(self, arguments);
                        }
                        return applyArgumentsResult;
                      })(obj5);
                      return obj6;
                    }
                  }
                }
              }
              c6 = 3;
              obj7 = { value: null, done: true };
              obj7[0] = Promise.resolve({});
              return obj7;
            }
          } else if (2 === tmp10) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = arg1;
              return obj8;
            } else {
              tmp = dependencyMap;
              closure_16 = arg1;
              tmp = closure_16;
              if (closure_16) {
                delete tmp7[tmp3];
                closure_18 = (function createReplayEnvelope(closure_16, c6, c14, tunnel) {
                  obj = _undefined(_undefined2[8]);
                  obj2 = _undefined(_undefined2[8]);
                  const items = [{ type: "replay_event" }, closure_16];
                  const items1 = [items, ];
                  const eventEnvelopeHeaders = obj2.createEventEnvelopeHeaders(closure_16, _undefined(_undefined2[8]).getSdkMetadataForEnvelopeHeader(closure_16), tunnel, c14);
                  if (typeof c6 === "string") {
                    const _TextEncoder = TextEncoder;
                    const textEncoder = new TextEncoder();
                    let length = textEncoder.encode(c6).length;
                  } else {
                    length = c6.length;
                  }
                  const items2 = [{ type: "replay_recording", length }, c6];
                  items1[1] = items2;
                  return obj.createEnvelope(eventEnvelopeHeaders, items1);
                })(closure_16, c6, c14, c11.getOptions().tunnel);
                c4 = 1;
                c5 = 5;
                c6 = 1;
                const obj9 = { value: null, done: false };
                obj9[0] = transport.send(closure_1_18);
                return obj9;
              } else {
                c11.recordDroppedEvent("event_processor", "replay");
                if (closure_130) {
                  logger.log("An event processor returned `null`, will not send event.");
                }
                c6 = 3;
                const obj10 = { value: null, done: true };
                obj10[0] = Promise.resolve({});
                return obj10;
              }
            }
          } else {
            if (3 === tmp10) {
              c4 = 0;
              closure_21 = c3;
              const _Error = Error;
              error = new Error(c11);
              c4 = 2;
              error.cause = closure_21;
              c4 = 0;
            } else if (4 === tmp10) {
              c4 = 0;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj11 = { value: null, done: true };
              obj11[0] = arg1;
              return obj11;
            } else {
              closure_17 = arg1;
              c4 = 0;
              if (typeof closure_17.statusCode === "number") {
                if (closure_17.statusCode >= 200) {
                  tmp = closure_17;
                }
                const tmp33 = new closure_172(closure_17.statusCode);
                throw tmp33;
              }
              obj = callback(817);
              closure_20 = obj.updateRateLimits({}, closure_17);
              obj1 = callback(817);
              if (obj1.isRateLimited(closure_20, "replay")) {
                const tmp25 = new closure_173(closure_20);
                throw tmp25;
              } else {
                c6 = 3;
                const obj12 = { value: null, done: true };
                obj12[0] = closure_17;
                return obj12;
              }
            }
            throw error;
          }
        } catch (tmp85) {
          c3 = tmp85;
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
    })();
    iter.next();
    return iter;
  });
  closure_171 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function sendReplay(arg0) {
  const self = this;
  const apply = _sendReplay.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _sendReplay() {
  let self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let onError = tmp4;
              let recordingData = tmp9;
              obj1 = undefined;
              if (obj1 === undefined) {
                obj1 = { count: 0, interval: 5000 };
              }
              recordingData = undefined;
              onError = undefined;
              error = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp9) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              recordingData = lib.recordingData;
              onError = lib.onError;
              if (recordingData.length) {
                c5 = 1;
                c6 = 3;
                c7 = 1;
                obj3 = { value: null, done: false };
                obj3[0] = (function sendReplayRequest(closure_0) {
                  const self = this;
                  const apply = closure_171.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(lib);
                return obj3;
              } else {
                c7 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          } else {
            if (2 === tmp9) {
              c5 = 0;
              c5 = error;
              if (!(c5 instanceof closure_172)) {
                if (!(c5 instanceof closure_173)) {
                  obj1 = lib(obj1[8]);
                  obj4 = { _retryCount: null };
                  obj4[0] = obj1.count;
                  obj1.setContext("Replays", obj4);
                  if (onError) {
                    onError(c5);
                  }
                  if (obj1.count >= 3) {
                    const _Error = Error;
                    const _HermesInternal = HermesInternal;
                    error = new Error("" + closure_11 + " - max retries exceeded");
                    c5 = 2;
                    error.cause = c5;
                    c5 = 0;
                  } else {
                    const sum = obj1.count + 1;
                    obj1.count = sum;
                    obj1.interval = obj1.interval * sum;
                    const promise = new Promise((arg0, arg1) => {
                      let callback = arg0;
                      const timerId = callback(arg1[9]).setTimeout(recordingData(function*() {
                        const callback = tmp3;
                        c3 = 1;
                        yield closure_2_174(closure_1_0, v0);
                        if (1 === tmp7) {
                          c3 = 0;
                          v0(closure_2);
                          c4 = 3;
                        } else if (arg0 === 1) {
                          c4 = 3;
                          throw arg1;
                        } else if (arg0 !== 2) {
                          callback(true);
                          c3 = 0;
                        }
                        c3 = 0;
                        return arg1;
                      }), obj1.interval);
                    });
                    c7 = 3;
                    obj5 = { value: null, done: true };
                    obj5[0] = promise;
                    return obj5;
                  }
                }
              }
              throw c5;
            } else if (3 === tmp9) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c5 = 0;
                c7 = 3;
                return { value: true, done: true };
              }
            } else {
              c5 = 0;
            }
            throw error;
          }
        } catch (tmp62) {
          error = tmp62;
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
    })();
    iter.next();
    return iter;
  });
  closure_175 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
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
      tmp = closure_1_7(this, Mirror);
      tmp2 = closure_1_17;
      map = new Map();
      if (typeof closure_1_17 !== "function") {
        str = "Trying to call a non-function";
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      if ("idNodeMap" in self) {
        tmp4 = closure_1_16;
        obj = { enumerable: true, configurable: true, writable: true, value: null };
        obj[3] = map;
        tmp5 = closure_1_16(self, "idNodeMap", obj);
      } else {
        self.idNodeMap = map;
      }
      weakMap = new WeakMap();
      if (typeof tmp2 !== "function") {
        str2 = "Trying to call a non-function";
        throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
      }
      if ("nodeMetaMap" in self) {
        tmp7 = closure_1_16;
        obj = { enumerable: true, configurable: true, writable: true, value: null };
        obj[3] = weakMap;
        tmp8 = closure_1_16(self, "nodeMetaMap", obj);
      } else {
        self.nodeMetaMap = weakMap;
      }
      return;
    }
  }
  const items = [
    {
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
    },
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
          const item = childNodes.forEach((arg0) => self.removeNodeFromMap(arg0));
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
          const value = nodeMetaMap.get(node);
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
  return callback2(Mirror, items);
})();
const __rrweb_original__ = "__rrweb_original__";
let closure_32 = {};
let c39 = 1;
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
  obj = { get: null };
  obj[0] = function get(arg0, arg1, arg2) {
    if ("map" === arg1) {
      const _console = console;
      console.error(c60);
    }
    return Reflect.get(arg0, arg1, arg2);
  };
  let proxy = new Proxy(obj, obj);
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
      tmp = closure_1_7(this, StyleSheetMirror);
      this.id = 1;
      weakMap = new WeakMap();
      this.styleIDMap = weakMap;
      map = new Map();
      this.idStyleMap = map;
      return;
    }
  }
  const items = [
    {
      key: "getId",
      value: function getId(arg0) {
        const styleIDMap = this.styleIDMap;
        let num = styleIDMap.get(arg0);
        if (num == null) {
          num = -1;
        }
        return num;
      }
    },
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
  return callback2(StyleSheetMirror, items);
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
      tmp = closure_1_7(this, DoubleLinkedList);
      this.length = 0;
      this.head = null;
      this.tail = null;
      return;
    }
  }
  const items = [
    {
      key: "get",
      value: function get(arg0) {
        if (arg0 >= this.length) {
          const _Error = Error;
          error = new Error("Position outside of list range");
          throw error;
        } else {
          let iter = tmp.head;
          let num = 0;
          let tmp3 = iter;
          if (0 < arg0) {
            do {
              let tmp4 = num;
              let tmp5 = iter;
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
    },
    {
      key: "addNode",
      value: function addNode(previousSibling) {
        const self = this;
        obj = { value: previousSibling, previous: null, next: null };
        previousSibling.__ln = obj;
        if (previousSibling.previousSibling) {
          if ("__ln" in previousSibling.previousSibling) {
            const next = previousSibling.previousSibling.__ln.next;
            obj.next = next;
            obj.previous = previousSibling.previousSibling.__ln;
            previousSibling.previousSibling.__ln.next = obj;
            if (next) {
              next.previous = obj;
            }
          }
          if (null === obj.next) {
            self.tail = obj;
          }
          self.length = self.length + 1;
        }
        if (previousSibling.nextSibling) {
          if ("__ln" in previousSibling.nextSibling) {
            if (previousSibling.nextSibling.__ln.previous) {
              const previous = previousSibling.nextSibling.__ln.previous;
              obj.previous = previous;
              obj.next = previousSibling.nextSibling.__ln;
              previousSibling.nextSibling.__ln.previous = obj;
              if (previous) {
                previous.next = obj;
              }
            }
          }
        }
        if (self.head) {
          self.head.previous = obj;
        }
        obj.next = self.head;
        self.head = obj;
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
  return callback2(DoubleLinkedList, items);
})();
function moveKey(arg0, arg1) {

}
let closure_82 = (() => {
  class MutationBuffer {
    constructor() {
      self = this;
      tmp = closure_1_7(this, self);
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
            const set = new Set();
            const arr2 = new closure_1_80();
            function getNextId(value) {
              let id;
              let tmp = value;
              do {
                let tmp2 = tmp;
                let nextSibling = tmp;
                if (tmp) {
                  nextSibling = tmp.nextSibling;
                }
                id = nextSibling;
                if (nextSibling) {
                  let tmp4 = items;
                  let mirror = items.mirror;
                  id = mirror.getId(nextSibling);
                }
                tmp = nextSibling;
              } while (-2 === id);
              return id;
            }
            function pushAdd(value) {
              let id1;
              items = value;
              if (value.parentNode) {
                if (closure_2_69(value)) {
                  const parentNode = value.parentNode;
                  let host;
                  if (parentNode != null) {
                    host = parentNode.host;
                  }
                  let shadowRoot;
                  if (host != null) {
                    shadowRoot = host.shadowRoot;
                  }
                  let mirror = items.mirror;
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
                  if (typeof getNextId !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  do {
                    let tmp14 = tmp13;
                    let nextSibling = tmp13;
                    if (tmp13) {
                      nextSibling = tmp13.nextSibling;
                    }
                    id1 = nextSibling;
                    if (nextSibling) {
                      let tmp16 = items;
                      let mirror2 = items.mirror;
                      id1 = mirror2.getId(nextSibling);
                    }
                    tmp13 = nextSibling;
                  } while (-2 === id1);
                  if (-1 !== id) {
                    if (-1 !== id1) {
                      obj = { doc: null, mirror: null, blockClass: null, blockSelector: null, maskAllText: null, unblockSelector: null, maskTextClass: null, unmaskTextClass: null, maskTextSelector: null, unmaskTextSelector: null, skipChild: true, newlyAddedElement: true, inlineStylesheet: null, maskInputOptions: null, maskAttributeFn: null, maskTextFn: null, maskInputFn: null, slimDOMOptions: null, dataURLOptions: null, recordCanvas: null, inlineImages: null, onSerialize: null, onIframeLoad: null, onStylesheetLoad: null, onBlockedImageLoad: null, ignoreCSSAttributes: null };
                      ({ doc: obj2[0], mirror: obj2[1], blockClass: obj2[2], blockSelector: obj2[3], maskAllText: obj2[4], unblockSelector: obj2[5], maskTextClass: obj2[6], unmaskTextClass: obj2[7], maskTextSelector: obj2[8], unmaskTextSelector: obj2[9], inlineStylesheet: obj2[12], maskInputOptions: obj2[13], maskAttributeFn: obj2[14], maskTextFn: obj2[15], maskInputFn: obj2[16], slimDOMOptions: obj2[17], dataURLOptions: obj2[18], recordCanvas: obj2[19], inlineImages: obj2[20] } = items);
                      obj[21] = function onSerialize() { ... };
                      obj[22] = function onIframeLoad() { ... };
                      obj[23] = function onStylesheetLoad() { ... };
                      obj[24] = function onBlockedImageLoad() { ... };
                      obj[25] = items.ignoreCSSAttributes;
                      const tmp25 = closure_2_58(value, obj);
                      if (tmp25) {
                        obj = { parentId: null, nextId: null, node: null };
                        obj[0] = id;
                        obj[1] = id1;
                        obj[2] = tmp25;
                        items.push(obj);
                        set.add(tmp25.id);
                      }
                    }
                  }
                  return arr2.addNode(value);
                }
              }
            }
            if (tmp.mapRemoves.length) {
              do {
                let tmp13 = items;
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
              let tmp21 = closure_1_83;
              let tmp22 = items;
              let tmp23 = items;
              let tmp24 = closure_1_83(items.removes, nextResult, items.mirror);
              if (tmp24) {
                let tmp25 = tmp22;
                let movedSet2 = tmp23.movedSet;
                let tmp26 = nextResult;
                tmp24 = !movedSet2.has(tmp20.parentNode);
              }
              if (!tmp24) {
                let tmp27 = nextResult;
                let pushAddResult = pushAdd(tmp20);
              }
              continue;
            }
            const addedSet = items.addedSet;
            for (const item10064 of addedSet) {
              let tmp33 = item10064;
              let tmp35 = items;
              let tmp36 = items;
              let tmp34 = closure_1_84;
              if (!closure_1_84(items.droppedSet, item10064)) {
                let tmp37 = closure_1_83;
                let tmp38 = tmp35;
                let tmp39 = item10064;
                if (!closure_1_83(tmp36.removes, tmp33, tmp36.mirror)) {
                  let tmp40 = item10064;
                  let pushAddResult1 = pushAdd(tmp33);
                }
                continue;
              }
              let tmp42 = tmp35;
              let tmp43 = item10064;
              if (tmp34(tmp36.movedSet, tmp33)) {
                let tmp47 = item10064;
                let pushAddResult2 = pushAdd(tmp33);
              } else {
                let tmp44 = tmp35;
                let droppedSet = tmp36.droppedSet;
                let tmp45 = item10064;
                let addResult = droppedSet.add(tmp33);
              }
            }
            let previous = null;
            if (arr2.length) {
              while (true) {
                let tmp50 = previous;
                let tmp51 = null;
                if (previous) {
                  let tmp52 = items;
                  let tmp53 = items;
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
                      let tmp56 = iter3;
                      if (iter3) {
                        let mirror3 = items.mirror;
                        let tmp57 = items;
                        let tmp58 = items;
                        let id1 = mirror3.getId(iter3.value.parentNode);
                        if (-1 !== getNextId(iter3.value)) {
                          iter2 = iter3;
                          if (-1 !== id1) {
                            break;
                          } else {
                            let value = iter3.value;
                            if (value.parentNode) {
                              if (value.parentNode.nodeType === globalThis.Node.DOCUMENT_FRAGMENT_NODE) {
                                let tmp60 = tmp57;
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
            const mapped = texts.map((node) => {
              const mirror = items.mirror;
              return { id: mirror.getId(node.node), value: node.value };
            });
            const found = mapped.filter((id) => !set.has(id.id));
            obj[0] = found.filter((id) => {
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
                  const str3 = attributes.style;
                }
                if (tmp) {
                  attributes.style = attributes.styleDiff;
                }
              }
              const mirror = items.mirror;
              return { id: mirror.getId(attributes.node), attributes };
            });
            const found1 = mapped1.filter((id) => !set.has(id.id));
            obj[1] = found1.filter((id) => {
              const mirror = items.mirror;
              return mirror.has(id.id);
            });
            obj[2] = items.removes;
            obj[3] = items;
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
              const set2 = new Set();
              obj2.movedSet = set2;
              const _Set4 = Set;
              const set3 = new Set();
              obj2.droppedSet = set3;
              obj2.movedMap = {};
              obj2.mutationCb(obj);
            }
            tmp65 = obj.texts.length || obj.attributes.length || obj.removes.length || obj.adds.length;
          }
        }
      };
      this.processMutation = (target) => {
        const _self = target;
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
              obj = { value: null, node: null };
              obj[0] = tmp48;
              obj[1] = target.target;
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
              obj[0] = obj.maskInputOptions;
              obj[1] = tagName;
              obj[2] = tmp55;
              obj1 = { isMasked: null, element: null, value: null, maskInputFn: null };
              obj1[0] = closure_1_56(target.target, obj.maskTextClass, obj.maskTextSelector, obj.unmaskTextClass, obj.unmaskTextSelector, closure_1_24(obj));
              obj1[1] = target;
              obj1[2] = closure_1_30(target, tagName, tmp55);
              obj1[3] = obj.maskInputFn;
              attr = closure_1_25(obj1);
              const tmp57 = closure_1_30(target, tagName, tmp55);
            }
            if (!closure_1_65(target.target, obj.blockClass, obj.blockSelector, obj.unblockSelector, false)) {
              if (attr !== target.oldValue) {
                const attributeMap2 = obj.attributeMap;
                const value = attributeMap2.get(target.target);
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
                  obj2 = { node: null, attributes: null, styleDiff: null, _unchangedStyles: null };
                  obj2[0] = target.target;
                  obj2[1] = {};
                  obj2[2] = {};
                  obj2[3] = {};
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
                        let tmp31 = propertyPriority;
                        let style4 = element.style;
                        let tmp32 = nextResult;
                        if (propertyPriority === style4.getPropertyPriority(tmp27)) {
                          let tmp33 = nextResult;
                          let tmp34 = propertyValue;
                          let items = [tmp29, ];
                          let tmp35 = propertyPriority;
                          items[1] = propertyPriority;
                          tmp7._unchangedStyles[tmp27] = items;
                          continue;
                        }
                      }
                      let tmp36 = nextResult;
                      let tmp37 = propertyPriority;
                      if ("" === propertyPriority) {
                        let items1 = propertyValue;
                      } else {
                        let tmp38 = propertyValue;
                        items1 = [tmp29, ];
                        let tmp39 = propertyPriority;
                        items1[1] = propertyPriority;
                      }
                      tmp7.styleDiff[tmp27] = items1;
                    }
                    const _Array2 = Array;
                    const arr2 = Array.from(element.style);
                    for (const item10147 of arr2) {
                      let style5 = target.style;
                      let tmp43 = item10147;
                      if ("" === style5.getPropertyValue(item10147)) {
                        let tmp44 = item10147;
                        tmp7.styleDiff[tmp43] = false;
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
              let item = addedNodes.forEach((arg0) => target.genAdds(arg0, target.target));
              const removedNodes = target.removedNodes;
              let item1 = removedNodes.forEach((childNodes) => {
                let arr = target;
                const mirror = target.mirror;
                const id = mirror.getId(childNodes);
                target = movedSet2.target;
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
                let tmp7 = closure_2_65(tmp3.target, arr.blockClass, arr.blockSelector, arr.unblockSelector, false);
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
                    movedSet2 = addedSet2;
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
                                      tmp20 = closure_2_67(parentNode3.parentNode, mirror5);
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
                        obj = { parentId: null, id: null, isShadow: null };
                        obj[0] = id1;
                        obj[1] = id;
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
                          obj[2] = !tmp26;
                          arr = removes.push(obj);
                          const tmp29 = !tmp26;
                        } else {
                          const target5 = tmp3.target;
                          const _Object = Object;
                          let str3 = Object.prototype.toString;
                          const call = str3.call;
                          str3 = "[object ShadowRoot]";
                          const tmp27 = typeof call === "unknown" ? str3() : call(target5);
                        }
                      } else {
                        if (typeof closure_2_81 !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        const _HermesInternal = HermesInternal;
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
      this.genAdds = (childNodes) => {
        const _self = childNodes;
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
                    const id1 = mirror5.getId(childNodes);
                    if (typeof closure_1_81 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    const _HermesInternal = HermesInternal;
                    movedMap["" + id1 + "@" + id] = true;
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
                  const item = childNodes.forEach((arg0) => childNodes.genAdds(arg0));
                }
                let shadowRoot;
                if (childNodes != null) {
                  shadowRoot = childNodes.shadowRoot;
                }
                if (Boolean(shadowRoot)) {
                  const childNodes1 = childNodes.shadowRoot.childNodes;
                  const item1 = childNodes1.forEach((arg0) => {
                    const processedNodeManager = childNodes.processedNodeManager;
                    processedNodeManager.add(arg0, childNodes);
                    childNodes.genAdds(arg0, childNodes);
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
  let items = [
    {
      key: "init",
      value: function init(arg0) {
        const self = this;
        closure_0 = arg0;
        const items = ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager", "ignoreCSSAttributes"];
        const item = items.forEach((arg0) => {
          self[arg0] = table[arg0];
        });
      }
    },
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
      value: function isFrozen(_isValid) {
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
  return callback2(MutationBuffer, items);
})();
function callbackWrapper(arg0) {
  closure_0 = arg0;
  return closure_79 ? ((Pause, arg1) => {
    items = [...arguments];
    try {
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      return HermesBuiltin.apply(items1, undefined);
    } catch (tmp7) {
      if (closure_1_79) {
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
      tmp = closure_1_7(this, CrossOriginIframeMirror);
      this.generateIdFn = arg0;
      weakMap = new WeakMap();
      this.iframeIdToRemoteIdMap = weakMap;
      weakMap1 = new WeakMap();
      this.iframeRemoteIdToIdMap = weakMap1;
      return;
    }
  }
  const items = [
    {
      key: "getId",
      value: function getId(closure_1) {
        const self = this;
        let idToRemoteIdMap = arg2;
        if (!arg2) {
          idToRemoteIdMap = self.getIdToRemoteIdMap(closure_1);
        }
        let remoteIdToIdMap = arg3;
        if (!arg3) {
          remoteIdToIdMap = self.getRemoteIdToIdMap(closure_1);
        }
        let value = idToRemoteIdMap.get(arg1);
        if (!value) {
          const idFn = self.generateIdFn();
          const result = idToRemoteIdMap.set(arg1, idFn);
          const result1 = remoteIdToIdMap.set(idFn, arg1);
          value = idFn;
        }
        return value;
      }
    },
    {
      key: "getIds",
      value: function getIds(closure_1, arr) {
        const self = this;
        const idToRemoteIdMap = this.getIdToRemoteIdMap(closure_1);
        const remoteIdToIdMap = this.getRemoteIdToIdMap(closure_1);
        return arr.map((arg0) => self.getId(closure_1, arg0, closure_2, closure_0));
      }
    },
    {
      key: "getRemoteId",
      value: function getRemoteId(closure_1, num, closure_0) {
        let remoteIdToIdMap = closure_0;
        if (!closure_0) {
          const self = this;
          remoteIdToIdMap = this.getRemoteIdToIdMap(closure_1);
        }
        if (typeof num !== "number") {
          return num;
        } else {
          return remoteIdToIdMap.get(num) || -1;
        }
      }
    },
    {
      key: "getRemoteIds",
      value: function getRemoteIds(closure_1, arr) {
        const self = this;
        const remoteIdToIdMap = this.getRemoteIdToIdMap(closure_1);
        return arr.map((arg0) => self.getRemoteId(closure_1, arg0, closure_0));
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
      value: function getIdToRemoteIdMap(closure_1) {
        const iframeIdToRemoteIdMap = this.iframeIdToRemoteIdMap;
        let value = iframeIdToRemoteIdMap.get(closure_1);
        if (!value) {
          const _Map = Map;
          const map = new Map();
          const iframeIdToRemoteIdMap2 = this.iframeIdToRemoteIdMap;
          const result = iframeIdToRemoteIdMap2.set(closure_1, map);
          value = map;
        }
        return value;
      }
    },
    {
      key: "getRemoteIdToIdMap",
      value: function getRemoteIdToIdMap(closure_1) {
        const iframeRemoteIdToIdMap = this.iframeRemoteIdToIdMap;
        let value = iframeRemoteIdToIdMap.get(closure_1);
        if (!value) {
          const _Map = Map;
          const map = new Map();
          const iframeRemoteIdToIdMap2 = this.iframeRemoteIdToIdMap;
          const result = iframeRemoteIdToIdMap2.set(closure_1, map);
          value = map;
        }
        return value;
      }
    }
  ];
  return callback2(CrossOriginIframeMirror, items);
})();
let closure_99 = (() => {
  class IframeManagerNoop {
    constructor() {
      tmp = closure_1_7(this, IframeManagerNoop);
      tmp2 = new closure_1_98(closure_1_41);
      this.crossOriginIframeMirror = tmp2;
      weakMap = new WeakMap();
      this.crossOriginIframeRootIdMap = weakMap;
      return;
    }
  }
  const items = [
    {
      key: "addIframe",
      value: function addIframe() {

      }
    },
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
  return callback2(IframeManagerNoop, items);
})();
let closure_100 = (() => {
  class IframeManager {
    constructor(arg0) {
      self = this;
      tmp = closure_1_7(this, IframeManager);
      weakMap = new WeakMap();
      this.iframes = weakMap;
      weakMap1 = new WeakMap();
      this.crossOriginIframeMap = weakMap1;
      tmp4 = new closure_1_98(closure_1_41);
      this.crossOriginIframeMirror = tmp4;
      weakMap2 = new WeakMap();
      this.crossOriginIframeRootIdMap = weakMap2;
      ({ mutationCb: this.mutationCb, wrappedEmit: this.wrappedEmit, stylesheetManager: this.stylesheetManager, recordCrossOriginIframes: this.recordCrossOriginIframes } = arg0);
      generateId = this.stylesheetManager.styleMirror.generateId;
      tmp6 = new closure_1_98(generateId.bind(this.stylesheetManager.styleMirror));
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
  let items = [
    {
      key: "addIframe",
      value: function addIframe(contentWindow) {
        const iframes = this.iframes;
        const result = iframes.set(contentWindow, true);
        if (contentWindow.contentWindow) {
          const crossOriginIframeMap = this.crossOriginIframeMap;
          const result1 = crossOriginIframeMap.set(contentWindow.contentWindow, contentWindow);
        }
      }
    },
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
        obj[0] = items;
        obj[1] = [];
        obj[2] = [];
        obj[3] = [];
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
        const tmp5 = callback(contentWindow);
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
              const value = crossOriginIframeMap.get(data.source);
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
        let self = this;
        self = this;
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
          obj = { timestamp: null, type: null, data: null };
          obj[0] = event.timestamp;
          obj[1] = tmp.IncrementalSnapshot;
          obj = { source: null, adds: null, removes: null, texts: null, attributes: null, isAttachIframe: true };
          obj[0] = closure_74.Mutation;
          obj = { parentId: null, nextId: null, node: null };
          const mirror = self.mirror;
          obj[0] = mirror.getId(value);
          obj[2] = event.data.node;
          const items = [obj];
          obj[1] = items;
          obj[2] = [];
          obj[3] = [];
          obj[4] = [];
          obj[2] = obj;
          return obj;
        } else {
          if (tmp.Meta !== type) {
            if (tmp.Load !== type) {
              if (tmp.DomContentLoaded !== type) {
                if (tmp.Plugin === type) {
                  return event;
                } else if (tmp.Custom === type) {
                  self.replaceIds(event.data.payload, value, ["id", "parentId", "previousId", "nextId"]);
                  return event;
                } else {
                  if (tmp.IncrementalSnapshot === type) {
                    const source = event.data.source;
                    if (closure_74.Mutation === source) {
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
                      const item1 = removes.forEach((data) => {
                        self.replaceIds(data, closure_0, ["parentId", "id"]);
                      });
                      const attributes = event.data.attributes;
                      const item2 = attributes.forEach((data) => {
                        self.replaceIds(data, closure_0, ["id"]);
                      });
                      const texts = event.data.texts;
                      const item3 = texts.forEach((data) => {
                        self.replaceIds(data, closure_0, ["id"]);
                      });
                      return event;
                    } else {
                      if (tmp22.Drag !== source) {
                        if (tmp22.TouchMove !== source) {
                          if (tmp22.MouseMove !== source) {
                            if (tmp22.ViewportResize === source) {
                              return false;
                            } else {
                              if (tmp22.MediaInteraction !== source) {
                                if (tmp22.MouseInteraction !== source) {
                                  if (tmp22.Scroll !== source) {
                                    if (tmp22.CanvasMutation !== source) {
                                      if (tmp22.Input !== source) {
                                        if (tmp22.StyleSheetRule !== source) {
                                          if (tmp22.StyleDeclaration !== source) {
                                            if (tmp22.Font === source) {
                                              return event;
                                            } else if (tmp22.Selection === source) {
                                              const ranges = event.data.ranges;
                                              const item4 = ranges.forEach((data) => {
                                                self.replaceIds(data, closure_0, ["start", "end"]);
                                              });
                                              return event;
                                            } else if (tmp22.AdoptedStyleSheet === source) {
                                              self.replaceIds(event.data, value, ["id"]);
                                              self.replaceStyleIds(event.data, value, ["styleIds"]);
                                              const styles = event.data.styles;
                                              if (styles != null) {
                                                const item5 = styles.forEach((data) => {
                                                  self.replaceStyleIds(data, closure_0, ["styleId"]);
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
                      const item6 = positions.forEach((data) => {
                        self.replaceIds(data, closure_0, ["id"]);
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
      value: function replace(getIds) {
        const iter = arg3[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          let _Array = Array;
          let isArray = Array.isArray(arg1[nextResult]);
          if (!isArray) {
            let tmp4 = nextResult;
            isArray = typeof arg1[tmp2] === "number";
          }
          if (isArray) {
            let _Array2 = Array;
            let tmp5 = nextResult;
            let tmp6 = nextResult;
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
      value: function replaceIds(data, closure_0, arg2) {
        return this.replace(this.crossOriginIframeMirror, data, closure_0, arg2);
      }
    },
    {
      key: "replaceStyleIds",
      value: function replaceStyleIds(data, closure_0, arg2) {
        return this.replace(this.crossOriginIframeStyleMirror, data, closure_0, arg2);
      }
    },
    {
      key: "replaceIdOnNode",
      value: function replaceIdOnNode(node, closure_0) {
        const self = this;
        this.replaceIds(node, closure_0, ["id", "rootId"]);
        if ("childNodes" in node) {
          const childNodes = node.childNodes;
          const item = childNodes.forEach((node) => {
            self.replaceIdOnNode(node, closure_0);
          });
        }
      }
    },
    {
      key: "patchRootIdOnNode",
      value: function patchRootIdOnNode(node, closure_0) {
        const self = this;
        if (!tmp) {
          node.rootId = closure_0;
        }
        if ("childNodes" in node) {
          const childNodes = node.childNodes;
          const item = childNodes.forEach((node) => {
            self.patchRootIdOnNode(node, closure_0);
          });
        }
      }
    }
  ];
  return callback2(IframeManager, items);
})();
let closure_101 = (() => {
  class ShadowDomManagerNoop {
    constructor() {
      tmp = closure_1_7(this, ShadowDomManagerNoop);
      return;
    }
  }
  const items = [
    {
      key: "init",
      value: function init() {

      }
    },
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
  return callback2(ShadowDomManagerNoop, items);
})();
let closure_102 = (() => {
  class ShadowDomManager {
    constructor(arg0) {
      tmp = closure_1_7(this, ShadowDomManager);
      weakSet = new WeakSet();
      this.shadowDoms = weakSet;
      this.restoreHandlers = [];
      ({ mutationCb: this.mutationCb, scrollCb: this.scrollCb, bypassOptions: this.bypassOptions, mirror: this.mirror } = arg0);
      initResult = this.init();
      return;
    }
  }
  const items = [
    {
      key: "init",
      value: function init() {
        this.reset();
        this.patchAttachShadow(globalThis.Element, document);
      }
    },
    {
      key: "addShadowRoot",
      value: function addShadowRoot(doc, doc2) {
        let self = this;
        self = this;
        closure_1 = doc;
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
            closure_0 = callback4(obj, doc);
            self.restoreHandlers.push(() => closure_0.disconnect());
            obj = {};
            const merged1 = Object.assign(self.bypassOptions);
            obj.scrollCb = self.scrollCb;
            obj.doc = doc;
            obj.mirror = self.mirror;
            self.restoreHandlers.push(callback5(obj));
            callback2(() => {
              let adoptedStyleSheets = doc.adoptedStyleSheets;
              if (adoptedStyleSheets) {
                adoptedStyleSheets = tmp.adoptedStyleSheets.length > 0;
              }
              if (adoptedStyleSheets) {
                const stylesheetManager = self.bypassOptions.stylesheetManager;
                const mirror = self.mirror;
                stylesheetManager.adoptStyleSheets(tmp.adoptedStyleSheets, mirror.getId(tmp.host));
              }
              self.restoreHandlers.push(closure_1_96({ mirror: self.mirror, stylesheetManager: self.bypassOptions.stylesheetManager }, doc));
            }, 0);
            const restoreHandlers = self.restoreHandlers;
            const restoreHandlers1 = self.restoreHandlers;
          }
        }
      }
    },
    {
      key: "observeAttachShadow",
      value: function observeAttachShadow(contentWindow) {
        const tmp = callback3(contentWindow);
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
        this.restoreHandlers.push(callback(Element.prototype, "attachShadow", (arg0) => {
          closure_0 = arg0;
          return function(arg0) {
            self = this;
            const call = closure_0.call;
            let shadowRoot = self.shadowRoot;
            if (shadowRoot) {
              shadowRoot = closure_2_69(self);
            }
            if (shadowRoot) {
              closure_1_1.addShadowRoot(self.shadowRoot, closure_0);
            }
            return typeof call === "unknown" ? closure_0(arg0) : call(self, arg0);
          };
        }));
      }
    },
    {
      key: "reset",
      value: function reset() {
        const item = this.restoreHandlers.forEach((arg0) => {
          try {
            arg0();
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
  return callback2(ShadowDomManager, items);
})();
if (typeof Uint8Array === "undefined") {
  let items = [];
} else {
  let _Uint8Array = Uint8Array;
  let uint8Array = new Uint8Array(256);
}