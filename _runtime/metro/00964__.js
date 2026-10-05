// === Module 964: ? ===

// Module 964
import _mod693 from "module_693" /* 693 */;
import _addMeasureSpans from "_addMeasureSpans" /* 909 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import c3_mod from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _wrapNativeSuper from "_wrapNativeSuper" /* 158 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const require = globalThis.__r;
let Drag, RN, _require, _self, c104, c79, closure_111, closure_12, constructResult, dependencyMap, ensureReadyResult, map, responseBodySize, segmentId, selection, set2, set3, warn;

let items;
let tmp18;
function createMirror$2() {
  const tmp = new closure_23();
  return tmp;
}
function makeReplayDebugLogger() {
  let captureExceptions = false;
  let traceInternals = false;
  obj = {
    exception() {

    },
    infoTick() {

    },
    setConfig(captureExceptions) {
      captureExceptions = captureExceptions.captureExceptions;
      traceInternals = captureExceptions.traceInternals;
    }
  };
  forEach = forEach.forEach;
  if (__SENTRY_DEBUG__2) {
    const item = forEach((arg0) => {
      let closure_0 = arg0;
      obj[arg0] = () => {
        const items = [...arguments];
        const debug = _mod693.debug;
        const items1 = [c132, ...items];
        debug[closure_0].apply(items1);
        if (traceInternals) {
          const joined = items.join("");
          const tmpResult = _mod693;
          let str2 = tmpResult.severityLevelFromString(closure_0);
          if (str2 === undefined) {
            str2 = "info";
          }
          const _HermesInternal = HermesInternal;
          obj = { category: "console", data: { logger: "replay" }, level: str2, message: "" + c132 + joined };
          const addBreadcrumb = _mod693.addBreadcrumb;
          _mod693;
          const obj2 = { level: str2 };
          addBreadcrumb(obj, obj2);
        }
      };
    });
    obj.exception = (arg0) => {
      const substr = [...arguments].slice();
      const error = substr.length && obj.error;
      if (error) {
        const error2 = obj.error;
        const items = [];
        HermesBuiltin.arraySpread(items, substr, 0);
        HermesBuiltin.apply(error2, items, obj);
      }
      const debug = _mod693.debug;
      debug.error(c132, arg0);
      if (captureExceptions) {
        const obj2 = { mechanism: { handled: true, type: "auto.function.replay.debug" } };
        const tmp11Result = _mod693;
        tmp11Result.captureException(arg0, obj2);
      } else if (traceInternals) {
        obj = { category: "console", data: { logger: "replay" }, level: "error", message: "" + c132 + arg0 };
        const _HermesInternal = HermesInternal;
        const addBreadcrumb = _mod693.addBreadcrumb;
        _mod693;
        const obj3 = { level: "error" };
        addBreadcrumb(obj, obj3);
      }
    };
    obj.infoTick = () => {
      const items = [...arguments];
      const debug = _mod693.debug;
      const items1 = [c132, ...items];
      debug.log.apply(items1);
      if (traceInternals) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          const first = items[0];
          obj = captureExceptions(traceInternals[8]);
          const obj2 = { category: "console", data: { logger: "replay" }, level: "info", message: "" + closure_2_132 + first };
          obj.addBreadcrumb(obj2, { level: "info" });
        }, 0);
      }
    };
  } else {
    const item1 = forEach((arg0) => {
      obj[arg0] = () => {

      };
    });
  }
  return obj;
}
const f82378 = (item) => {
  mirror = mirror.mirror;
  return mirror.getId(item);
};
function normalizeNetworkBody(body) {
  function _strIsProbablyJson(body) {
    const first = body[0];
    let tmp3 = "[" === first && "]" === tmp2;
    if (!tmp3) {
      tmp3 = "{" === first && "}" === tmp2;
      const tmp4 = "{" === first && "}" === tmp2;
    }
    return tmp3;
  }
  const tmp = body;
  if (tmp) {
    if (typeof body === "string") {
      const tmp7 = body.length > closure_1_12;
      const tmp8 = _strIsProbablyJson(body);
      if (tmp7) {
        let tmp5;
        const substr = body.slice(0, closure_1_12);
        const obj2 = { body: null, warnings: null };
        if (tmp8) {
          obj2.body = substr;
          obj2.warnings = ["MAYBE_JSON_TRUNCATED"];
          tmp5 = obj2;
        } else {
          let tmp4 = globalThis;
          const _HermesInternal = HermesInternal;
          obj2.body = "" + substr + "\u2026";
          obj2.warnings = ["TEXT_TRUNCATED"];
          tmp5 = obj2;
        }
        return tmp5;
      } else if (!tmp8) {
        return { body };
      } else {
        try {
          const tmp2 = globalThis;
          const _JSON = JSON;
          obj = { body: JSON.parse(body) };
          return obj;
        } catch (err) {
        }
      }
    }
  }
  return { body };
}
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
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
  const _Boolean = Boolean;
  if (host != null) {
    shadowRoot = host.shadowRoot;
  }
  return _Boolean(shadowRoot === host);
}
function isNativeShadowDom(arg0) {
  return "[object ShadowRoot]" === toString.call(arg0);
}
function stringifyStylesheet(styleSheet) {
  function fixBrowserCompatibilityIssuesInCSS(arr) {
    const hasItem = arr.includes(" background-clip: text;") && !arr.includes(" -webkit-background-clip: text;");
    let replaced = arr;
    if (hasItem) {
      replaced = arr.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;");
    }
    return replaced;
  }
  try {
    const cssRules = styleSheet.rules || styleSheet.cssRules;
    let tmp3 = null;
    if (cssRules) {
      const _Array = Array;
      const arr = Array.from(cssRules, stringifyRule);
      tmp3 = fixBrowserCompatibilityIssuesInCSS(arr.join(""));
    }
    return tmp3;
  } catch (err) {
    return null;
  }
}
function stringifyRule(styleSheet) {
  let cssText;
  let selectorText;
  function isCSSImportRule(styleSheet) {
    return "styleSheet" in styleSheet;
  }
  function escapeImportStatement(cssText) {
    if (cssText.cssText.split("\"").length < 3) {
      return cssText.cssText;
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
  }
  function isCSSStyleRule(styleSheet) {
    return "selectorText" in styleSheet;
  }
  function fixAllCssProperty(style) {
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
  }
  function fixSafariColons(cssText) {
    return cssText.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2");
  }
  let cssText1;
  if (isCSSImportRule(styleSheet)) {
    try {
      let tmp5 = stringifyStylesheet(styleSheet.styleSheet) || escapeImportStatement(styleSheet);
      cssText1 = tmp5;
    } catch (err) {
    }
  } else if (isCSSStyleRule(styleSheet)) {
    ({ cssText, selectorText } = styleSheet);
    let str = ":";
    const hasItem = selectorText.includes(":");
    const all = styleSheet.style.all;
    let all2 = typeof all === "string";
    if (typeof all === "string") {
      all2 = styleSheet.style.all;
    }
    if (all2) {
      cssText = fixAllCssProperty(styleSheet);
    }
    let tmp3 = cssText;
    if (hasItem) {
      tmp3 = fixSafariColons(cssText);
    }
    return tmp3;
  }
  if (!cssText1) {
    cssText1 = styleSheet.cssText;
  }
  return cssText1;
}
function shouldMaskInput(arg0) {
  let maskInputOptions;
  let tagName;
  let type;
  ({ maskInputOptions, tagName, type } = arg0);
  if ("OPTION" === tagName) {
    tagName = "SELECT";
  }
  const _Boolean = Boolean;
  let tmp = maskInputOptions[tagName.toLowerCase(tagName)];
  if (!tmp) {
    tmp = type && maskInputOptions[type];
  }
  if (!tmp) {
    tmp = "password" === type;
  }
  if (!tmp) {
    tmp = "INPUT" === tagName && !type && maskInputOptions.text;
  }
  return _Boolean(tmp);
}
function maskInputValue(arg0) {
  let element;
  let isMasked;
  let maskInputFn;
  let value;
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
    if (type.type) {
      formatted = str.toLowerCase();
    }
    str2 = formatted;
  }
  return str2;
}
function getInputValue(getAttribute, arg1, arg2) {
  let value;
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
    const _URL = URL;
    if (arg1 == null) {
      const _window = window;
      href = window.location.href;
    }
    const self = this;
    const self2 = this;
    const _URL1 = new _URL(arg0, href);
    const str = _URL1.pathname;
    const match = str.match(/\.([0-9a-z]+)(?:$)/i);
    let tmp8;
    if (match != null) {
      tmp8 = match[1];
    }
    if (tmp8 == null) {
      tmp8 = null;
    }
    return tmp8;
  } catch (err) {
    return null;
  }
}
function getImplementation$1(clearTimeout) {
  if (closure_32[clearTimeout]) {
    return closure_32[clearTimeout];
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
          const contentWindow = element.contentWindow && tmp7[clearTimeout];
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
  const tmp = getImplementation$1("setTimeout");
  return tmp(...items);
}
function clearTimeout$1() {
  const items = [...arguments];
  const tmp = getImplementation$1("clearTimeout");
  return tmp(...items);
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
function absoluteToStylesheet(parentNode, href) {
  let str = parentNode;
  let closure_0 = href;
  if (!parentNode) {
    str = "";
  }
  return str.replace(closure_42, (arg0, arg1, arg2, arg3, arg4, arg5) => {
    function extractOrigin(href) {
      let str2;
      if (href.indexOf("//") > -1) {
        const parts = href.split("/");
        const substr = parts.slice(0, 3);
        str2 = substr.join("/");
      } else {
        str2 = href.split("/")[0];
      }
      return str2.split("?")[0];
    }
    if (arg2 || arg4 || arg5) {
      if (!re43.test(arg2 || arg4 || arg5)) {
        if (!re44.test(arg2 || arg4 || arg5)) {
          if (re45.test(arg2 || arg4 || arg5)) {
            const _HermesInternal3 = HermesInternal;
            return "url(" + arg1 || arg3 || "" + arg2 || arg4 || arg5 + arg1 || arg3 || "" + ")";
          } else {
            let str2 = "/";
            if ("/" === (arg2 || arg4 || arg5)[0]) {
              const _HermesInternal2 = HermesInternal;
              return "url(" + arg1 || arg3 || "" + extractOrigin(href) + (arg2 || arg4 || arg5) + arg1 || arg3 || "" + ")";
            } else {
              let parts = href.split("/");
              const parts1 = str.split("/");
              parts.pop();
              const iter = parts1[Symbol.iterator]();
              const nextResult = iter.next();
              while (iter !== undefined) {
                let tmp9 = nextResult;
                if ("." !== nextResult) {
                  if (".." === tmp9) {
                    let arr4 = parts.pop();
                  } else {
                    let arr5 = parts.push(tmp9);
                  }
                }
                continue;
              }
              const _HermesInternal = HermesInternal;
              return "url(" + arg1 || arg3 || "" + parts.join("/") + arg1 || arg3 || "" + ")";
            }
          }
        }
      }
      const _HermesInternal4 = HermesInternal;
      return "url(" + arg1 || arg3 || "" + arg2 || arg4 || arg5 + arg1 || arg3 || "" + ")";
    } else {
      return arg0;
    }
  });
}
function isSVGElement(tagName) {
  let ownerSVGElement = "svg" === tagName.tagName;
  const _Boolean = Boolean;
  if (!ownerSVGElement) {
    ownerSVGElement = tagName.ownerSVGElement;
  }
  return _Boolean(ownerSVGElement);
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
  function filterCSSPropertiesFromInlineStyle(replaced, size) {
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
            if (arr2) {
              let index = arr2.indexOf(":");
              if (-1 !== index) {
                let str4 = arr2.slice(0, tmp10);
                if (!size.has(str4.trim())) {
                  let arr = items.push(arr2);
                }
              } else {
                let arr4 = items.push(arr2);
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
        } catch (tmp20) {
          const _console = console;
          console.warn("Error filtering CSS properties:", tmp20);
          return replaced;
        }
      }
    }
    return replaced;
  }
  const tmp = str;
  if (tmp) {
    str = "src";
    if ("src" !== arg2) {
      if ("href" === arg2) {
        let str2 = "use";
      }
      let str3 = "xlink:href";
      if ("xlink:href" === arg2) {
        let str4 = "#";
        if ("#" !== str[0]) {
          let tmp49 = str;
          if (tmp49) {
            let str35 = "";
            tmp49 = str;
            if ("" !== str.trim()) {
              let href5;
              let value = weakMap.get(createElement);
              if (!value) {
                const element = <a />;
                const result = weakMap.set(createElement, element);
                value = element;
              }
              if (!str) {
                const attr = value.setAttribute("href", str35);
                href5 = value.href;
              } else {
                href5 = str;
                if (!str.startsWith("blob:")) {
                  str35 = str;
                  href5 = str;
                }
              }
              tmp49 = href5;
            }
          }
          return tmp49;
        }
      }
      if ("background" === arg2) {
        let tmp45 = str;
        if (tmp45) {
          let str31 = "";
          tmp45 = str;
          if ("" !== str.trim()) {
            let href4;
            let value7 = weakMap.get(createElement);
            if (!value7) {
              const element1 = <a />;
              const result1 = weakMap.set(createElement, element1);
              value7 = element1;
            }
            if (!str) {
              const attr1 = value7.setAttribute("href", str31);
              href4 = value7.href;
            } else {
              href4 = str;
              if (!str.startsWith("blob:")) {
                str31 = str;
                href4 = str;
              }
            }
            tmp45 = href4;
          }
        }
        return tmp45;
      }
      let str7 = "srcset";
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
              let sum2;
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
                let tmp36 = str28;
                if (tmp36) {
                  tmp36 = str28;
                  if ("" !== str28.trim()) {
                    let href3;
                    let value8 = weakMap.get(createElement);
                    if (!value8) {
                      let element2 = <a />;
                      let result2 = weakMap.set(createElement, element2);
                      value8 = element2;
                    }
                    let str29 = "";
                    if (!str28) {
                      let attr2 = value8.setAttribute("href", ``);
                      href3 = value8.href;
                    } else {
                      href3 = str28;
                      if (!str28.startsWith("blob:")) {
                        href3 = str28;
                      }
                    }
                    tmp36 = href3;
                  }
                }
                let arr = items.push(tmp36);
                sum2 = sum;
              } else {
                let tmp24 = str23;
                if (tmp24) {
                  tmp24 = str23;
                  if ("" !== str23.trim()) {
                    let href2;
                    let value9 = weakMap.get(createElement);
                    if (!value9) {
                      let element3 = <a />;
                      let result3 = weakMap.set(createElement, element3);
                      value9 = element3;
                    }
                    let str24 = "";
                    if (!str23) {
                      let attr3 = value9.setAttribute("href", ``);
                      href2 = value9.href;
                    } else {
                      href2 = str23;
                      if (!str23.startsWith("blob:")) {
                        href2 = str23;
                      }
                    }
                    tmp24 = href2;
                  }
                }
                let sum1 = sum;
                let flag = false;
                let str25 = "";
                let charAtResult = str.charAt(sum1);
                while ("" !== charAtResult) {
                  let flag2;
                  if (flag) {
                    flag2 = flag;
                    if (")" === charAtResult) {
                      flag2 = false;
                    }
                    str25 = str25 + charAtResult;
                    sum1 = sum1 + 1;
                    flag = flag2;
                    continue;
                  } else if ("," === charAtResult) {
                    sum2 = sum1 + 1;
                    let str26 = tmp24 + str25;
                    let arr2 = items.push(str26.trim());
                  } else {
                    flag2 = flag;
                    if ("(" === charAtResult) {
                      flag2 = true;
                    }
                  }
                }
                let str27 = tmp24 + str25;
                let arr5 = items.push(str27.trim());
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
      } else {
        let href;
        if ("style" === arg2) {
          let value10 = weakMap.get(createElement);
          if (!value10) {
            const element4 = <a />;
            const result4 = weakMap.set(createElement, element4);
            value10 = element4;
          }
          const attr4 = value10.setAttribute("href", "");
          href = value10.href;
          const str15 = str || "";
          const replaced = str15.replace(closure_42, (arg0, arg1, arg2, arg3, arg4, arg5) => {
            function extractOrigin(href) {
              let str2;
              if (href.indexOf("//") > -1) {
                const parts = href.split("/");
                const substr = parts.slice(0, 3);
                str2 = substr.join("/");
              } else {
                str2 = href.split("/")[0];
              }
              return str2.split("?")[0];
            }
            if (arg2 || arg4 || arg5) {
              if (!re43.test(arg2 || arg4 || arg5)) {
                if (!re44.test(arg2 || arg4 || arg5)) {
                  if (re45.test(arg2 || arg4 || arg5)) {
                    const _HermesInternal3 = HermesInternal;
                    return "url(" + arg1 || arg3 || "" + arg2 || arg4 || arg5 + arg1 || arg3 || "" + ")";
                  } else {
                    let str2 = "/";
                    if ("/" === (arg2 || arg4 || arg5)[0]) {
                      const _HermesInternal2 = HermesInternal;
                      return "url(" + arg1 || arg3 || "" + extractOrigin(href) + (arg2 || arg4 || arg5) + arg1 || arg3 || "" + ")";
                    } else {
                      let parts = href.split("/");
                      const parts1 = str.split("/");
                      parts.pop();
                      const iter = parts1[Symbol.iterator]();
                      const nextResult = iter.next();
                      while (iter !== undefined) {
                        let tmp9 = nextResult;
                        if ("." !== nextResult) {
                          if (".." === tmp9) {
                            let arr4 = parts.pop();
                          } else {
                            let arr5 = parts.push(tmp9);
                          }
                        }
                        continue;
                      }
                      const _HermesInternal = HermesInternal;
                      return "url(" + arg1 || arg3 || "" + parts.join("/") + arg1 || arg3 || "" + ")";
                    }
                  }
                }
              }
              const _HermesInternal4 = HermesInternal;
              return "url(" + arg1 || arg3 || "" + arg2 || arg4 || arg5 + arg1 || arg3 || "" + ")";
            } else {
              return arg0;
            }
          });
          let tmp16 = size;
          if (tmp16) {
            tmp16 = size.size > 0;
          }
          let tmp17 = replaced;
          if (tmp16) {
            tmp17 = filterCSSPropertiesFromInlineStyle(replaced, size);
          }
          return tmp17;
        } else {
          let tmp5;
          if ("object" === arg1) {
            if ("data" === arg2) {
              let tmp6 = str;
              if (tmp6) {
                let str9 = "";
                tmp6 = str;
                if ("" !== str.trim()) {
                  let value11 = weakMap.get(createElement);
                  if (!value11) {
                    const element5 = <a />;
                    const result5 = weakMap.set(createElement, element5);
                    value11 = element5;
                  }
                  if (!str) {
                    const attr5 = value11.setAttribute("href", str9);
                    href = value11.href;
                  } else {
                    href = str;
                    if (!str.startsWith("blob:")) {
                      str9 = str;
                      href = str;
                    }
                  }
                  tmp6 = href;
                }
              }
              tmp5 = tmp6;
            }
            return tmp5;
          }
          tmp5 = str;
          if (typeof fn === "function") {
            tmp5 = fn(arg2, str, arg4);
          }
        }
      }
    }
    let tmp53 = str;
    if (tmp53) {
      let str39 = "";
      tmp53 = str;
      if ("" !== str.trim()) {
        let href6;
        let value12 = weakMap.get(createElement);
        if (!value12) {
          const element6 = <a />;
          const result6 = weakMap.set(createElement, element6);
          value12 = element6;
        }
        if (!str) {
          const attr6 = value12.setAttribute("href", str39);
          href6 = value12.href;
        } else {
          href6 = str;
          if (!str.startsWith("blob:")) {
            str39 = str;
            href6 = str;
          }
        }
        tmp53 = href6;
      }
    }
    return tmp53;
  } else {
    return str;
  }
}
function ignoreAttribute(arg0, arg1, arg2) {
  return ("video" === arg0 || "audio" === arg0) && "autoplay" === arg1;
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
  let closure_0 = unmaskTextClass;
  let closure_1 = unmaskTextSelector;
  return (parentNode) => {
    function elementClassMatchesRegex(classList, test) {
      let diff = tmp - 1;
      if (+classList.classList.length) {
        while (!test.test(classList.classList[diff])) {
          let tmp4 = +diff;
          diff = tmp4 - 1;
        }
        return true;
      }
      return false;
    }
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
          } else if (elementClassMatchesRegex(parentNode, c0)) {
            return true;
          }
        }
        let tmp4 = !closure_1 || !parentNode.matches(tmp3);
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
      let tmp8Result6;
      let tmp8Result4;
      let tmp22;
      if ("INPUT" === parentElement.tagName) {
        const items = ["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"];
        if (items.includes(parentElement.getAttribute("autocomplete"))) {
          return true;
        }
      }
      if (maskAllText) {
        const tmp8Result = distanceToMatch(parentElement, createMatchPredicate(unmaskTextClass, unmaskTextSelector));
        tmp8Result6 = tmp8Result;
        if (tmp8Result < 0) {
          return true;
        } else {
          let num7 = Infinity;
          const tmp10Result = createMatchPredicate(maskTextClass, maskTextSelector);
          if (tmp8Result6 >= 0) {
            num7 = tmp8Result6;
          }
          tmp8Result4 = distanceToMatch(parentElement, tmp10Result, num7);
        }
      } else {
        const tmp8Result5 = distanceToMatch(parentElement, createMatchPredicate(maskTextClass, maskTextSelector));
        tmp8Result4 = tmp8Result5;
        if (tmp8Result5 < 0) {
          return false;
        } else {
          let num5 = Infinity;
          const tmp10Result2 = createMatchPredicate(unmaskTextClass, unmaskTextSelector);
          if (tmp8Result4 >= 0) {
            num5 = tmp8Result4;
          }
          tmp8Result6 = distanceToMatch(obj, tmp10Result2, num5);
        }
      }
      if (tmp8Result4 >= 0) {
        tmp22 = tmp8Result6 < 0 || tmp8Result4 <= tmp8Result6;
        const tmp24 = tmp8Result6 < 0 || tmp8Result4 <= tmp8Result6;
      } else {
        tmp22 = tmp8Result6 < 0 && maskAllText;
      }
      return tmp22;
    }
  } catch (err) {
    return maskAllText;
  }
}
function serializeNode(nodeType, newlyAddedElement) {
  let blockClass;
  let blockSelector;
  let dataURLOptions;
  let doc;
  let inlineImages;
  let inlineStylesheet;
  let keepIframeSrcFn;
  let maskAllText;
  let maskAttributeFn;
  let maskInputFn;
  let maskInputOptions;
  let maskTextClass;
  let maskTextFn;
  let maskTextSelector;
  let mirror;
  let recordCanvas;
  let tmp2;
  let unblockSelector;
  let unmaskTextClass;
  let unmaskTextSelector;
  function serializeElementNode(attributes, newlyAddedElement) {
    let blockClass;
    let blockSelector;
    let closure_38;
    let dataURLOptions;
    let doc;
    let element1;
    let height;
    let ignoreCSSAttributes;
    let inlineImages;
    let inlineStylesheet;
    let keepIframeSrcFn;
    let maskAttributeFn;
    let maskInputFn;
    let maskInputOptions;
    let maskTextClass;
    let maskTextSelector;
    let num;
    let recordCanvas;
    let unblockSelector;
    let unmaskTextClass;
    let unmaskTextSelector;
    function _isBlockedElement(matches, blockClass, blockSelector, unblockSelector) {
      try {
        const tmp2 = unblockSelector;
        if (tmp2) {
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
        const tmp8 = blockSelector;
        if (tmp8) {
          return matches.matches(blockSelector);
        } else {
          return false;
        }
      } catch (err) {
      }
    }
    function getValidTagName$1(tagName) {
      if (tagName instanceof globalThis.HTMLFormElement) {
        return "form";
      } else {
        const str = tagName.tagName;
        const formatted = str.toLowerCase();
        let str2 = "div";
        if (!regex.test(formatted)) {
          str2 = formatted;
        }
        return str2;
      }
    }
    function is2DCanvasBlank(getContext) {
      const context = getContext.getContext("2d");
      if (context) {
        let num3 = 0;
        if (0 < getContext.width) {
          while (true) {
            let num4 = 0;
            if (0 < getContext.height) {
              while (true) {
                let getImageData = context.getImageData;
                let tmp5 = getImageData;
                let tmp4 = num4;
                if (closure_1_28 in getImageData) {
                  tmp5 = getImageData[closure_1_28];
                }
                let _Math = Math;
                let _Uint32Array = Uint32Array;
                let call = tmp5.call;
                let bound = Math.min(50, getContext.width - num3);
                let _Math2 = Math;
                let bound1 = Math.min(50, getContext.height - num4);
                let self = this;
                let self2 = this;
                let _Uint32Array1 = new _Uint32Array(call(context, tmp3, tmp4, bound, bound1).data.buffer);
                if (_Uint32Array1.some((item) => 0 !== item)) {
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
    }
    ({ doc, blockClass, blockSelector, unblockSelector, maskInputOptions, inlineStylesheet } = newlyAddedElement);
    if (undefined === maskInputOptions) {
      maskInputOptions = {};
    }
    ({ maskAttributeFn, dataURLOptions, maskInputFn } = newlyAddedElement);
    if (undefined === dataURLOptions) {
      dataURLOptions = {};
    }
    newlyAddedElement = newlyAddedElement.newlyAddedElement;
    let tmp = undefined !== newlyAddedElement;
    ({ inlineImages, recordCanvas, keepIframeSrcFn } = newlyAddedElement);
    if (tmp) {
      tmp = newlyAddedElement;
    }
    ({ maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, ignoreCSSAttributes } = newlyAddedElement);
    const rootId = newlyAddedElement.rootId;
    let tmp2 = _isBlockedElement(attributes, blockClass, blockSelector, unblockSelector);
    const tmp3 = getValidTagName$1(attributes);
    obj = {};
    let obj2 = obj;
    const length = attributes.attributes.length;
    for (let num = 0; num < length; num = num + 1) {
      let iter = attributes.attributes[num];
      let name = iter.name;
      let tmp4 = num;
      if (name) {
        name = !closure_53(tmp3, iter.name, iter.value);
      }
      if (name) {
        let tmp9 = tmp3;
        let tmp10 = attributes;
        obj[iter.name] = closure_52(doc, tmp3, closure_26(iter.name), iter.value, attributes, maskAttributeFn, ignoreCSSAttributes);
      }
    }
    if ("link" === tmp3) {
      if (inlineStylesheet) {
        let tmp13 = globalThis;
        const _Array = Array;
        const arr = Array.from(doc.styleSheets);
        const found = arr.find((href) => href.href === attributes.href);
        let tmp16 = null;
        if (found) {
          tmp16 = closure_21(found);
        }
        if (tmp16) {
          obj.rel = null;
          obj.href = null;
          obj.crossorigin = null;
          obj._cssText = closure_46(tmp16, found.href);
        }
      }
    }
    if ("style" === tmp3) {
      if (attributes.sheet) {
        let str = attributes.innerText || attributes.textContent || "";
        if (!str.trim().length) {
          const tmp20 = closure_21(attributes.sheet);
          if (tmp20) {
            obj._cssText = closure_46(tmp20, closure_51(doc));
          }
        }
      }
    }
    if ("input" !== tmp3) {
      let str2 = "textarea";
      if ("textarea" !== tmp3) {
        if ("option" === tmp3) {
          if (attributes.selected) {
            if (!maskInputOptions.select) {
              obj.selected = true;
            }
          }
          delete obj["selected"];
        }
        if ("canvas" === tmp3) {
          if (recordCanvas) {
            if ("2d" === attributes.__context) {
              if (!is2DCanvasBlank(attributes)) {
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
        if ("img" === tmp3) {
          if (inlineImages) {
            const tmp35 = element1;
            if (!tmp35) {
              element1 = <canvas />;
              let context = element1.getContext("2d");
            }
            const attributes2 = attributes;
            const str12 = attributes.currentSrc || attributes.getAttribute("src") || "<unknown-src>";
            const crossOrigin = attributes.crossOrigin;
            function recordInlineImage() {
              const removed = attributes2.removeEventListener("load", recordInlineImage);
              try {
                closure_2_37.width = attributes2.naturalWidth;
                closure_2_37.height = attributes2.naturalHeight;
                closure_2_38.drawImage(attributes2, 0, 0);
                obj2.rr_dataURL = closure_2_37.toDataURL(dataURLOptions.type, dataURLOptions.quality);
              } catch (tmp10) {
                if ("anonymous" !== attributes2.crossOrigin) {
                  attributes2.crossOrigin = "anonymous";
                  if (attributes2.complete) {
                    if (0 !== attributes2.naturalWidth) {
                      recordInlineImage();
                    }
                  }
                  const listener = attributes2.addEventListener("load", recordInlineImage);
                } else {
                  const _console = console;
                  const _HermesInternal = HermesInternal;
                  console.warn("Cannot inline img src=" + str12 + "! Error: " + tmp10);
                }
              }
              if ("anonymous" === attributes2.crossOrigin) {
                if (crossOrigin) {
                  obj2.crossOrigin = tmp14;
                } else {
                  attributes2.removeAttribute("crossorigin");
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
        const tmp38 = "audio" !== tmp3 && "video" !== tmp3;
        if (!tmp38) {
          let str17 = "played";
          if (attributes.paused) {
            str17 = "paused";
          }
          obj.rr_mediaState = str17;
          obj.rr_mediaCurrentTime = attributes.currentTime;
        }
        if (!tmp) {
          if (attributes.scrollLeft) {
            obj.rr_scrollLeft = attributes.scrollLeft;
          }
          if (attributes.scrollTop) {
            obj.rr_scrollTop = attributes.scrollTop;
          }
        }
        let tmp39 = obj;
        if (tmp2) {
          size = attributes.getBoundingClientRect();
          obj2 = { class: obj.class, rr_width: "" + size.width + "px", rr_height: "" + height + "px" };
          let _HermesInternal = HermesInternal;
          height = size.height;
          const _HermesInternal2 = HermesInternal;
          tmp39 = obj2;
        }
        const tmp41 = "iframe" !== tmp3 || keepIframeSrcFn(tmp39.src);
        if (!tmp41) {
          const tmp42 = tmp2 || closure_36(attributes);
          if (!tmp42) {
            tmp39.rr_src = tmp39.src;
          }
          delete tmp39["src"];
        }
        try {
        } catch (err) {
        }
        const obj3 = { type: RN.Element, tagName: tmp3, attributes: tmp39, childNodes: [], isSVG: closure_50(attributes) || undefined, needBlock: tmp2, rootId, isCustom: flag };
        closure_50(attributes) || undefined;
        return obj3;
      }
    }
    const tmp23 = closure_29(attributes);
    const tmp25 = closure_30(attributes, closure_27(tmp3), tmp23);
    const checked = attributes.checked;
    if ("submit" !== tmp23) {
      if ("button" !== tmp23) {
        if (tmp25) {
          obj5 = { type: tmp23, tagName: closure_27(tmp3), maskInputOptions };
          obj6 = { isMasked: closure_56(attributes, maskTextClass, maskTextSelector, unmaskTextClass, unmaskTextSelector, closure_24(obj5)), element: attributes, value: tmp25, maskInputFn };
          obj.value = closure_25(obj6);
        }
      }
    }
    if (checked) {
      obj.checked = checked;
    }
  }
  function serializeTextNode(parentNode, rootId) {
    let maskAllText;
    let maskInputFn;
    let maskInputOptions;
    let maskTextClass;
    let maskTextFn;
    let maskTextSelector;
    let obj2;
    let unmaskTextClass;
    let unmaskTextSelector;
    ({ maskAllText, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, maskTextFn, maskInputOptions, maskInputFn } = rootId);
    let tagName = parentNode.parentNode;
    rootId = rootId.rootId;
    if (tagName) {
      tagName = parentNode.parentNode.tagName;
    }
    let str = parentNode.textContent;
    let tmp3 = "TEXTAREA" === tagName || undefined;
    if ("STYLE" === tagName || undefined) {
      const tmp4 = str;
      if (tmp4) {
        try {
          const previousSibling = parentNode.nextSibling || parentNode.previousSibling;
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
        } catch (tmp8) {
          const _console = console;
          const _HermesInternal = HermesInternal;
          console.warn("Cannot get CSS styles from text's parentNode. Error: " + tmp8, parentNode);
        }
        str = absoluteToStylesheet(str, getHref(rootId.doc));
      }
    }
    if ("SCRIPT" === tagName || undefined) {
      str = "SCRIPT_PLACEHOLDER";
    }
    const tmp15 = needMaskingText(parentNode, maskTextClass, maskTextSelector, unmaskTextClass, unmaskTextSelector, maskAllText);
    const tmp16 = tmp || tmp2 || tmp3 || !str || !tmp15;
    if (!tmp16) {
      let maskTextFnResult;
      if (maskTextFn) {
        maskTextFnResult = maskTextFn(str, parentNode.parentElement);
      } else {
        maskTextFnResult = str.replace(/[\S]/g, "*");
      }
      str = maskTextFnResult;
    }
    if (tmp3) {
      tmp3 = str;
    }
    if (tmp3) {
      tmp3 = maskInputOptions.textarea || tmp15;
    }
    if (tmp3) {
      let maskInputFnResult;
      if (maskInputFn) {
        maskInputFnResult = maskInputFn(str, parentNode.parentNode);
      } else {
        maskInputFnResult = str.replace(/[\S]/g, "*");
      }
      str = maskInputFnResult;
    }
    if ("OPTION" === tagName) {
      const tmp23 = str;
      if (tmp23) {
        obj = { isMasked: needMaskingText(parentNode, maskTextClass, maskTextSelector, unmaskTextClass, unmaskTextSelector, shouldMaskInput(obj2)), element: parentNode, value: str, maskInputFn };
        obj2 = { type: null, tagName, maskInputOptions };
        str = maskInputValue(obj);
      }
    }
    const obj3 = { type: RN.Text, textContent: str, isStyle: "STYLE" === tagName || undefined, rootId };
    if (!str) {
      str = "";
    }
    return obj3;
  }
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
  const ignoreCSSAttributes = newlyAddedElement.ignoreCSSAttributes;
  if (mirror.hasNode(doc)) {
    const id = mirror.getId(doc);
    const num = 1;
    let tmp4;
    if (1 !== id) {
      tmp4 = id;
    }
    tmp2 = tmp4;
  }
  nodeType = nodeType.nodeType;
  if (nodeType.DOCUMENT_NODE === nodeType) {
    let obj3;
    let str = "CSS1Compat";
    if ("CSS1Compat" !== nodeType.compatMode) {
      let obj2 = { type: obj.Document, childNodes: [], compatMode: nodeType.compatMode };
      let tmp9 = obj;
      obj3 = obj2;
    } else {
      obj3 = { type: obj.Document, childNodes: [] };
      let tmp8 = obj;
    }
    return obj3;
  } else if (nodeType.DOCUMENT_TYPE_NODE === nodeType) {
    obj4 = { type: obj.DocumentType, name: null, publicId: null, systemId: null, rootId: tmp2 };
    ({ name: obj5.name, publicId: obj5.publicId, systemId: obj5.systemId } = nodeType);
    return obj4;
  } else if (nodeType.ELEMENT_NODE === nodeType) {
    obj6 = { doc, blockClass, blockSelector, unblockSelector, inlineStylesheet, maskAttributeFn, maskInputOptions, maskInputFn, dataURLOptions, inlineImages, recordCanvas, keepIframeSrcFn, newlyAddedElement: tmp, rootId: tmp2, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, ignoreCSSAttributes };
    return serializeElementNode(nodeType, obj6);
  } else if (nodeType.TEXT_NODE === nodeType) {
    obj7 = { doc, maskAllText, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, maskTextFn, maskInputOptions, maskInputFn, rootId: tmp2 };
    return serializeTextNode(nodeType, obj7);
  } else if (nodeType.CDATA_SECTION_NODE === nodeType) {
    let tmp6 = obj;
    return { type: obj.CDATA, textContent: "", rootId: tmp2 };
  } else if (nodeType.COMMENT_NODE === nodeType) {
    obj = { type: obj.Comment, textContent: nodeType.textContent || "", rootId: tmp2 };
    let tmp5 = obj;
    return obj;
  } else {
    const flag = false;
    return false;
  }
}
function serializeNodeWithId(iframeContentDocument, doc) {
  function slimDOMExcluded(type, slimDOMOptions) {
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
  }
  function isElement$1(nodeType) {
    return nodeType.nodeType === nodeType.ELEMENT_NODE;
  }
  function onceIframeLoaded(contentWindow, arg1, iframeLoadTimeout) {
    let closure_0 = arg1;
    contentWindow = contentWindow.contentWindow;
    if (contentWindow) {
      let c1 = false;
      try {
        const readyState = contentWindow.document.readyState;
        let tmp = readyState;
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
          let closure_2 = closure_34(() => {
            const tmp = c1;
            if (!tmp) {
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
      }
    }
  }
  function onceStylesheetLoaded(sheet, arg1, stylesheetLoadTimeout) {
    let closure_0 = arg1;
    let c1 = false;
    try {
      let tmp = sheet;
      if (!sheet.sheet) {
        let closure_2 = closure_34(() => {
          const tmp = c1;
          if (!tmp) {
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
    }
  }
  let closure_0 = iframeContentDocument;
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
  let tmp = undefined !== skipChild && skipChild;
  let inlineStylesheet = doc.inlineStylesheet;
  let tmp2 = undefined === inlineStylesheet || inlineStylesheet;
  inlineStylesheet = tmp2;
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
  const tmp3 = undefined !== inlineImages && inlineImages;
  RN = tmp3;
  const recordCanvas = doc.recordCanvas;
  let tmp4 = undefined !== recordCanvas && recordCanvas;
  isShadowRoot = tmp4;
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
  const tmp5 = undefined !== newlyAddedElement && newlyAddedElement;
  const tmp6 = serializeNode(iframeContentDocument, { doc, mirror, blockClass, blockSelector, maskAllText, unblockSelector, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, inlineStylesheet: tmp2, maskInputOptions, maskAttributeFn, maskTextFn, maskInputFn, dataURLOptions, inlineImages: tmp3, recordCanvas: tmp4, keepIframeSrcFn, newlyAddedElement: tmp5, ignoreCSSAttributes });
  if (tmp6) {
    let num4;
    if (mirror.hasNode(iframeContentDocument)) {
      num4 = mirror.getId(iframeContentDocument);
    } else {
      num4 = -2;
      if (!slimDOMExcluded(tmp6, slimDOMOptions)) {
        if (!flag) {
          if (tmp6.type === RN.Text) {
            if (!tmp6.isStyle) {
              num4 = -2;
            }
          }
        }
        num4 = genId();
      }
    }
    const _Object = Object;
    obj = { id: num4 };
    const merged = Object.assign(tmp6, obj);
    mirror.add(iframeContentDocument, merged);
    if (-2 === num4) {
      return null;
    } else {
      let updateImageDimensions;
      if (onSerialize) {
        onSerialize(iframeContentDocument);
      }
      let tmp16 = !tmp;
      let tmp18 = tmp16;
      if (merged.type === RN.Element) {
        if (!tmp) {
          tmp16 = !merged.needBlock;
        }
        const shadowRoot = iframeContentDocument.shadowRoot;
        tmp18 = tmp16;
        const tmp19 = shadowRoot && onSerialize(shadowRoot);
        if (tmp19) {
          merged.isShadowHost = true;
          tmp18 = tmp16;
        }
      }
      if (merged.type === RN.Document) {
        if (tmp18) {
          let tmp21 = slimDOMOptions.headWhitespace && merged.type === tmp17.Element;
          if (tmp21) {
            tmp21 = "head" === merged.tagName;
          }
          if (tmp21) {
            flag = false;
          }
          const obj2 = { doc, mirror, blockClass, blockSelector, maskAllText, unblockSelector, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, skipChild: tmp, inlineStylesheet: tmp2, maskInputOptions, maskAttributeFn, maskTextFn, maskInputFn, slimDOMOptions, dataURLOptions, inlineImages: tmp3, recordCanvas: tmp4, preserveWhiteSpace: flag, onSerialize, onIframeLoad, iframeLoadTimeout: num2, onBlockedImageLoad, onStylesheetLoad, stylesheetLoadTimeout: num, keepIframeSrcFn, ignoreCSSAttributes };
          if (iframeContentDocument.childNodes) {
            const _Array = Array;
            let items = Array.from(iframeContentDocument.childNodes);
          } else {
            items = [];
          }
          for (const item10108 of items) {
            let tmp25 = serializeNodeWithId(item10108, obj2);
            if (tmp25) {
              let childNodes = merged.childNodes;
              let arr = childNodes.push(tmp26);
            }
            continue;
          }
          if (isElement$1(iframeContentDocument)) {
            if (iframeContentDocument.shadowRoot) {
              const _Array2 = Array;
              const arr2 = Array.from(iframeContentDocument.shadowRoot.childNodes);
              let tmp30 = arr2;
              const tmp31 = arr2[Symbol.iterator]();
              while (tmp31 !== undefined) {
                let tmp36 = serializeNodeWithId(tmp33, obj2);
                let tmp37 = tmp36;
                if (tmp37) {
                  if (onSerialize(iframeContentDocument.shadowRoot)) {
                    tmp37.isShadow = true;
                  }
                  let childNodes1 = merged.childNodes;
                  let arr3 = childNodes1.push(tmp37);
                }
                continue;
              }
            }
          }
        }
      }
      const parentNode = iframeContentDocument.parentNode && isShadowRoot(iframeContentDocument.parentNode) && onSerialize(iframeContentDocument.parentNode);
      if (parentNode) {
        merged.isShadow = true;
      }
      let needBlock = merged.type !== RN.Element;
      if (!needBlock) {
        needBlock = "iframe" !== merged.tagName;
      }
      if (!needBlock) {
        needBlock = merged.needBlock;
      }
      if (!needBlock) {
        onceIframeLoaded(iframeContentDocument, () => {
          const tmp2 = getIframeContentDocument(iframeContentDocument);
          if (tmp2) {
            if (onIframeLoad) {
              obj = { doc: tmp2, mirror, blockClass, blockSelector, unblockSelector, maskAllText, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, skipChild: false, inlineStylesheet, maskInputOptions, maskAttributeFn, maskTextFn, maskInputFn, slimDOMOptions, dataURLOptions, inlineImages, recordCanvas, preserveWhiteSpace: flag, onSerialize, onIframeLoad, iframeLoadTimeout: num2, onStylesheetLoad, stylesheetLoadTimeout: num, keepIframeSrcFn, ignoreCSSAttributes };
              const tmp30 = serializeNodeWithId(tmp2, obj);
              if (tmp30) {
                onIframeLoad(iframeContentDocument, tmp30);
              }
            }
          }
        }, num2);
      }
      if (merged.type === RN.Element) {
        if ("img" === merged.tagName) {
          if (!iframeContentDocument.complete) {
            if (merged.needBlock) {
              updateImageDimensions = function updateImageDimensions() {
                if (iframeContentDocument.isConnected) {
                  if (!iframeContentDocument.complete) {
                    if (onBlockedImageLoad) {
                      try {
                        const boundingClientRect = iframeContentDocument.getBoundingClientRect();
                        const tmp4 = boundingClientRect.width > 0 && tmp3.height > 0;
                        if (tmp4) {
                          tmp(iframeContentDocument, merged, boundingClientRect);
                        }
                      } catch (err) {
                      }
                    }
                  }
                }
                const removed = iframeContentDocument.removeEventListener("load", updateImageDimensions);
              };
              if (iframeContentDocument.isConnected) {
                let str7 = "load";
                let listener = iframeContentDocument.addEventListener("load", updateImageDimensions);
              }
            }
          }
        }
      }
      let tmp47 = merged.type === tmp44.Element;
      if (tmp47) {
        const str8 = "link";
        tmp47 = "link" === merged.tagName;
      }
      if (tmp47) {
        tmp47 = typeof merged.attributes.rel === "string";
      }
      if (tmp47) {
        let tmp48 = "stylesheet" === merged.attributes.rel;
        if (!tmp48) {
          let tmp49 = "preload" === merged.attributes.rel && typeof merged.attributes.href === "string";
          if (tmp49) {
            tmp49 = "css" === updateImageDimensions(merged.attributes.href);
          }
          tmp48 = tmp49;
        }
        tmp47 = tmp48;
      }
      if (tmp47) {
        onceStylesheetLoaded(iframeContentDocument, () => {
          if (onStylesheetLoad) {
            obj = { doc, mirror, blockClass, blockSelector, unblockSelector, maskAllText, maskTextClass, unmaskTextClass, maskTextSelector, unmaskTextSelector, skipChild: false, inlineStylesheet, maskInputOptions, maskAttributeFn, maskTextFn, maskInputFn, slimDOMOptions, dataURLOptions, inlineImages, recordCanvas, preserveWhiteSpace: flag, onSerialize, onIframeLoad, iframeLoadTimeout: num2, onStylesheetLoad, stylesheetLoadTimeout: num, keepIframeSrcFn, ignoreCSSAttributes };
            const tmp30 = serializeNodeWithId(iframeContentDocument, obj);
            if (tmp30) {
              onStylesheetLoad(iframeContentDocument, tmp30);
            }
          }
        }, num);
      }
      if (merged.type === RN.Element) {
        delete tmp13["needBlock"];
      }
      return merged;
    }
  } else {
    const _console = console;
    console.warn(iframeContentDocument, "not serialized");
    return null;
  }
}
function on(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let _document = arg2;
  if (arg2 === undefined) {
    _document = document;
  }
  obj = { capture: true, passive: true };
  const listener = _document.addEventListener(arg0, arg1, obj);
  return () => document.removeEventListener(selectionchange, fn, obj);
}
function patch(arg0, arg1, fn) {
  let obj2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  try {
    if (arg1 in arg0) {
      let closure_2 = tmp2;
      const tmp4 = fn(arg0[arg1]);
      if (typeof tmp4 === "function") {
        const prototype = tmp5.prototype || {};
        tmp4.prototype = prototype;
        const _Object = Object;
        obj = { __rrweb_original__: obj2 };
        obj2 = { enumerable: false, value: arg0[arg1] };
        Object.defineProperties(tmp4, obj);
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
  let num;
  let num2;
  const _document = defaultView.document;
  if (_document.scrollingElement) {
    num = _document.scrollingElement.scrollLeft;
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
  const rect = { left: num, top: num2 };
  if (_document.scrollingElement) {
    num2 = _document.scrollingElement.scrollTop;
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
  return rect;
}
function closestElementOfNode$1(nodeType) {
  const tmp = nodeType;
  if (tmp) {
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
  const tmp = nodeType;
  if (tmp) {
    obj = closestElementOfNode$1(nodeType);
    if (obj) {
      const tmp3 = arg1;
      let tmp4 = arg2;
      let closure_0 = arg1;
      let closure_1 = arg2;
      const fn = (parentNode) => {
        function elementClassMatchesRegex(classList, test) {
          let diff = tmp - 1;
          if (+classList.classList.length) {
            while (!test.test(classList.classList[diff])) {
              let tmp4 = +diff;
              diff = tmp4 - 1;
            }
            return true;
          }
          return false;
        }
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
              } else if (elementClassMatchesRegex(parentNode, c0)) {
                return true;
              }
            }
            let tmp4 = !closure_1 || !parentNode.matches(tmp3);
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
        let tmp11 = num2 >= 0;
        if (tmp11) {
          let num12 = -1;
          if (arg3) {
            let c0 = null;
            closure_1 = arg3;
            let num13 = -1;
            if (obj) {
              let num14 = -1;
              if (obj.nodeType === obj.ELEMENT_NODE) {
                const fn2 = (parentNode) => {
                  function elementClassMatchesRegex(classList, test) {
                    let diff = tmp - 1;
                    if (+classList.classList.length) {
                      while (!test.test(classList.classList[diff])) {
                        let tmp4 = +diff;
                        diff = tmp4 - 1;
                      }
                      return true;
                    }
                    return false;
                  }
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
                        } else if (elementClassMatchesRegex(parentNode, c0)) {
                          return true;
                        }
                      }
                      let tmp4 = !closure_1 || !parentNode.matches(tmp3);
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
          tmp11 = num2 > -1 && num12 < 0 || num2 < num12;
        }
        return tmp11;
      } else {
        const tmp7 = arg3 && obj.matches(arg3);
        const tmp8 = fn(obj) && !tmp7;
        return tmp8;
      }
    } else {
      return false;
    }
  } else {
    const flag = false;
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
  const _Boolean = Boolean;
  if (host != null) {
    shadowRoot = host.shadowRoot;
  }
  if (_Boolean(shadowRoot === parentNode)) {
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
        const tmp7 = nodeType === globalThis.Node.DOCUMENT_FRAGMENT_NODE && obj.getRootNode().host;
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
            let Node2 = globalThis.Node;
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
      }
      hasItem = flag;
    }
    tmp = hasItem;
  }
  return tmp;
}
function getImplementation(arg0) {
  if (closure_70[arg0]) {
    return closure_70[arg0];
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
          const contentWindow = element.contentWindow && tmp7[arg0];
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
  const tmp = getImplementation("setTimeout");
  return tmp(...items);
}
function getIFrameContentDocument(contentDocument) {
  try {
    return contentDocument.contentDocument;
  } catch (err) {
  }
}
function isParentRemoved(arr, parentNode, getId) {
  let closure_0;
  let tmp = 0 !== arr.length;
  if (tmp) {
    parentNode = parentNode.parentNode;
    let flag = false;
    if (parentNode) {
      while (true) {
        let parentNode2;
        let id = getId.getId(parentNode);
        if (arr.some((id) => id.id === closure_0)) {
          obj = { v: true };
          parentNode2 = parentNode;
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
      flag = obj.v;
    }
    tmp = flag;
  }
  return tmp;
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
          const hasItem1 = size.has(parentNode2) || _isAncestorInSet(size, parentNode2);
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
    const hasItem = has.has(parentNode) || _isAncestorInSet(has, parentNode);
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
    const target = composedPath && composedPath.target;
    return target;
  } catch (err) {
  }
}
function initMutationObserver(doc, doc2) {
  let closure_0 = doc;
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
  if (tmp4) {
    const _window2 = window;
    tmp4 = window[__symbol__Result];
  }
  if (tmp4) {
    const _window3 = window;
    __rrMutationObserver = window[__symbol__Result];
  }
  if (typeof callbackWrapper === "function") {
    let fn = (arg0) => {
      onMutation = onMutation.onMutation && false === obj.onMutation(arg0);
      if (!onMutation) {
        const processMutations = obj.processMutations;
        processMutations.bind(onMutation)(arg0);
      }
    };
    if (c79) {
      fn = () => {
        items = [...arguments];
        try {
          const items1 = [];
          HermesBuiltin.arraySpread(items1, items, 0);
          return HermesBuiltin.apply(fn, items1, undefined);
        } catch (tmp8) {
          if (closure_2_79) {
            if (true === tmp9(tmp8)) {
              return () => {

              };
            }
          }
          throw tmp8;
        }
      };
    }
    const self = this;
    const self2 = this;
    const __rrMutationObserver1 = new __rrMutationObserver(fn);
    __rrMutationObserver1.observe(doc, { attributes: true, attributeOldValue: true, characterData: true, characterDataOldValue: true, childList: true, subtree: true });
    return __rrMutationObserver1;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function initMouseInteractionObserver(doc) {
  let MouseDown;
  let closure_3;
  let require;
  let sampling;
  ({ mouseInteractionCb: require, doc: dependencyMap, mirror: _asyncToGenerator, blockClass: closure_3, blockSelector: _getPrototypeOf, unblockSelector: _inherits, sampling } = doc);
  let mouseInteraction;
  let closure_7;
  let c8;
  if (false === sampling.mouseInteraction) {
    return () => {

    };
  } else {
    if (true !== sampling.mouseInteraction) {
      if (undefined !== sampling.mouseInteraction) {
        mouseInteraction = sampling.mouseInteraction;
      }
      closure_7 = [];
      let tmp = null;
      c8 = null;
      const _Object = Object;
      const keys = Object.keys(obj6);
      const found = keys.filter((item) => {
        const isNaNResult = Number.isNaN(Number(item)) && !item.endsWith("_Departed") && false !== mouseInteraction[item];
        return isNaNResult;
      });
      let item = found.forEach((item) => {
        const str = item.toLowerCase();
        let closure_0 = item;
        let replaced = str;
        if (window.PointerEvent) {
          if (MouseDown.MouseDown !== MouseDown[item]) {
            if (MouseDown.MouseUp !== MouseDown[item]) {
              if (MouseDown.TouchStart !== MouseDown[item]) {
                replaced = str;
              }
            }
          }
          let str2 = "pointer";
          replaced = str.replace("mouse", "pointer");
        }
        let fn = (event) => {
          const tmp = getEventTarget(event);
          if (!isBlocked(tmp, closure_3, _getPrototypeOf, _inherits, true)) {
            let str2;
            let Touch;
            let tmp14;
            if ("pointerType" in event) {
              let Mouse;
              const pointerType = event.pointerType;
              if ("mouse" === pointerType) {
                Mouse = obj7.Mouse;
              } else if ("touch" === pointerType) {
                Mouse = obj7.Touch;
              } else {
                Mouse = null;
                if ("pen" === pointerType) {
                  Mouse = obj7.Pen;
                }
              }
              if (Mouse === obj7.Touch) {
                str2 = "TouchStart";
                Touch = Mouse;
                if (obj6[item] !== obj6.MouseDown) {
                  str2 = item;
                  Touch = Mouse;
                  if (obj6[item] === obj6.MouseUp) {
                    str2 = "TouchEnd";
                    Touch = Mouse;
                  }
                }
              } else {
                const Pen = tmp10.Pen;
                str2 = item;
                Touch = Mouse;
              }
            } else {
              const _Boolean = Boolean;
              str2 = item;
              Touch = null;
              if (Boolean(event.changedTouches)) {
                Touch = obj7.Touch;
                str2 = item;
              }
            }
            if (null !== Touch) {
              c8 = Touch;
              let startsWithResult = str2.startsWith("Touch") && Touch === obj7.Touch;
              if (!startsWithResult) {
                startsWithResult = str2.startsWith("Mouse") && Touch === obj7.Mouse;
                const startsWithResult1 = str2.startsWith("Mouse") && Touch === obj7.Mouse;
              }
              tmp14 = Touch;
              if (startsWithResult) {
                tmp14 = null;
              }
            } else {
              tmp14 = Touch;
              if (obj6[item] === obj6.Click) {
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
              let fn = _require;
              if (typeof callbackWrapper === "function") {
                if (c79) {
                  fn = () => {
                    items = [...arguments];
                    try {
                      const items1 = [];
                      HermesBuiltin.arraySpread(items1, items, 0);
                      return HermesBuiltin.apply(fn, items1, undefined);
                    } catch (tmp8) {
                      if (closure_2_79) {
                        if (true === tmp9(tmp8)) {
                          return () => {

                          };
                        }
                      }
                      throw tmp8;
                    }
                  };
                }
                const point = { type: obj6[str2], id: tmp22, x: tmp23, y: tmp24 };
                let tmp28 = null !== tmp14;
                if (tmp28) {
                  tmp28 = { pointerType: tmp14 };
                  obj = { pointerType: tmp14 };
                }
                const merged = Object.assign(tmp28);
                fn(point);
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
        };
        let _document;
        const push = closure_7.push;
        if (closure_1 === undefined) {
          _document = document;
        }
        obj = { capture: true, passive: true };
        const listener = _document.addEventListener(replaced, fn, obj);
        push(() => document.removeEventListener(selectionchange, fn, obj));
      });
      if (typeof callbackWrapper === "function") {
        let fn = () => {
          const item = closure_7.forEach((fn) => fn());
        };
        if (c79) {
          fn = () => {
            items = [...arguments];
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items1, items, 0);
              return HermesBuiltin.apply(fn, items1, undefined);
            } catch (tmp8) {
              if (closure_2_79) {
                if (true === tmp9(tmp8)) {
                  return () => {

                  };
                }
              }
              throw tmp8;
            }
          };
        }
        return fn;
      } else {
        let str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    mouseInteraction = {};
  }
}
function initScrollObserver(doc) {
  let closure_3;
  let require;
  let tmp;
  ({ scrollCb: require, doc } = doc);
  ({ mirror: _asyncToGenerator, blockClass: closure_3, blockSelector: _getPrototypeOf, unblockSelector: _inherits } = doc);
  if (typeof callbackWrapper === "function") {
    let fn = (arg0) => {
      const tmp = getEventTarget(arg0);
      if (tmp) {
        if (!isBlocked(tmp, closure_3, _getPrototypeOf, _inherits, true)) {
          _asyncToGenerator = _asyncToGenerator.getId(tmp);
          if (tmp === doc) {
            if (doc.defaultView) {
              const point = { id: _asyncToGenerator, x: null, y: null };
              ({ left: obj2.x, top: obj2.y } = getWindowScroll(doc.defaultView));
              getWindowScroll(doc.defaultView);
              _require(point);
            }
          }
          const point1 = { id: _asyncToGenerator, x: null, y: null };
          ({ scrollLeft: obj.x, scrollTop: obj.y } = tmp);
          _require(point1);
        }
      }
    };
    if (c79) {
      fn = () => {
        items = [...arguments];
        try {
          const items1 = [];
          HermesBuiltin.arraySpread(items1, items, 0);
          return HermesBuiltin.apply(fn, items1, undefined);
        } catch (tmp8) {
          if (closure_2_79) {
            if (true === tmp9(tmp8)) {
              return () => {

              };
            }
          }
          throw tmp8;
        }
      };
    }
    let closure_1 = tmp.scroll || 100;
    const id = {};
    let c3 = null;
    let c4 = 0;
    if (typeof tmp2 === "function") {
      let fn2 = function() {
        function clearTimeout$2() {
          items = [...arguments];
          const tmp = closure_1_71("clearTimeout");
          return tmp(...items);
        }
        items = [...arguments];
        let self;
        const timestamp = Date.now();
        const diff = self - (timestamp - timestamp);
        self = this;
        if (diff > 0) {
          if (diff <= self) {
            const tmp5 = c3 || false === leading.trailing;
            if (!tmp5) {
              c3 = closure_1_72(() => {
                if (false !== leading.leading) {
                  const _Date = Date;
                  Date.now();
                }
                c3 = null;
                fn.apply(self, items);
              }, diff);
            }
          }
        }
        if (c3) {
          !clearTimeout$2(tmp8);
          c3 = null;
        }
        items.apply(this, items);
      };
      if (c79) {
        fn2 = () => {
          items = [...arguments];
          try {
            const items1 = [];
            HermesBuiltin.arraySpread(items1, items, 0);
            return HermesBuiltin.apply(fn, items1, undefined);
          } catch (tmp8) {
            if (closure_2_79) {
              if (true === tmp9(tmp8)) {
                return () => {

                };
              }
            }
            throw tmp8;
          }
        };
      }
      const scroll_str = "scroll";
      if (doc === undefined) {
        doc = document;
      }
      obj = { capture: true, passive: true };
      const listener = doc.addEventListener("scroll", fn2, obj);
      return () => document.removeEventListener(selectionchange, fn, obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function initInputObserver(sampling) {
  let closure_3;
  let doc;
  let require;
  let text;
  ({ inputCb: require, doc } = sampling);
  ({ mirror: _asyncToGenerator, blockClass: closure_3, blockSelector: _getPrototypeOf, unblockSelector: _inherits, ignoreClass: _slicedToArray, ignoreSelector: _classCallCheck, maskInputOptions: _createClass, maskInputFn: _isNativeReflectConstruct, userTriggeredOnInput: sentryReplaySession, maskTextClass: c11, unmaskTextClass: c12, maskTextSelector: c13, unmaskTextSelector: c14 } = sampling);
  function eventHandler(isTrusted) {
    let checked;
    let str10;
    const tmp = getEventTarget(isTrusted);
    let parentElement = tmp;
    let formatted = tmp;
    isTrusted = isTrusted.isTrusted;
    if (tmp) {
      const str = tmp.tagName;
      formatted = str.toUpperCase();
    }
    let iter = tmp;
    if ("OPTION" === formatted) {
      parentElement = tmp.parentElement;
      iter = parentElement;
    }
    if (iter) {
      if (formatted) {
        if (closure_1_92.indexOf(formatted) >= 0) {
          if (!isBlocked(iter, checked, closure_4, closure_5, true)) {
            const classList = iter.classList;
            if (!classList.contains(closure_6)) {
              if (!closure_7) {
                let str4 = "password";
                let str5 = "password";
                if (!iter.hasAttribute("data-rr-is-password")) {
                  let formatted1 = null;
                  if (iter.type) {
                    formatted1 = str2.toLowerCase();
                  }
                  str5 = formatted1;
                }
                if ("INPUT" === formatted) {
                  if ("radio" !== str5) {
                    checked = false;
                    let str11 = formatted;
                    if ("OPTION" === formatted) {
                      str11 = "SELECT";
                    }
                    const tmp9 = globalThis;
                    const _Boolean = Boolean;
                    let tmp10 = text[str11.toLowerCase(str11)];
                    if (!tmp10) {
                      tmp10 = str5 && text[str5];
                    }
                    if (!tmp10) {
                      tmp10 = "password" === str5;
                    }
                    if (!tmp10) {
                      tmp10 = "INPUT" === str11 && !str5 && text.text;
                      const tmp12 = "INPUT" === str11 && !str5 && text.text;
                    }
                    let tmp18 = iter;
                    const tmp19 = needMaskingText(iter, closure_11, closure_13, closure_12, closure_14, _Boolean(tmp10));
                    closure_4 = tmp19;
                    let flag2 = false;
                    const tmp20 = "radio" !== str5 && "checkbox" !== str5;
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
                      let obj2 = { text: repeatResult, isChecked: flag2, userTriggered: isTrusted };
                      obj = obj2;
                    } else {
                      obj = { text: repeatResult, isChecked: flag2 };
                    }
                    let value = weakMap1.get(iter);
                    if (value) {
                      const name = iter.name;
                      const tmp34 = "radio" === str5 && name && flag2;
                      if (tmp34) {
                        const _HermesInternal = HermesInternal;
                        const elements = formatted.querySelectorAll("input[type=\"radio\"][name=\"" + name + "\"]");
                        const item = elements.forEach((getAttribute) => {
                          let str4;
                          if (getAttribute !== parentElement) {
                            const tmp18 = str5;
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
                                  const obj2 = { text: repeatResult, isChecked: !checked, userTriggered: false };
                                } else {
                                  obj = { text: repeatResult, isChecked: !checked };
                                }
                                const value = closure_1_93.get(getAttribute);
                                const result = closure_1_93.set(getAttribute, obj);
                                let fn = _require;
                                if (typeof closure_1_86 === "function") {
                                  if (closure_1_79) {
                                    fn = () => {
                                      items = [...arguments];
                                      try {
                                        const items1 = [];
                                        HermesBuiltin.arraySpread(items1, items, 0);
                                        return HermesBuiltin.apply(fn, items1, undefined);
                                      } catch (tmp8) {
                                        if (closure_2_79) {
                                          if (true === tmp9(tmp8)) {
                                            return () => {

                                            };
                                          }
                                        }
                                        throw tmp8;
                                      }
                                    };
                                  }
                                  obj4 = { id: tmp9 };
                                  const merged = Object.assign(obj);
                                  fn(obj4);
                                } else {
                                  throw new TypeError("Trying to call a non-function");
                                }
                              }
                              str4 = getAttribute.getAttribute("value") || "";
                            }
                            str4 = getAttribute.value;
                          }
                        });
                      }
                    }
                    let result = weakMap1.set(iter, obj);
                    let fn = parentElement;
                    if (typeof callbackWrapper === "function") {
                      if (closure_1_79) {
                        fn = () => {
                          items = [...arguments];
                          try {
                            const items1 = [];
                            HermesBuiltin.arraySpread(items1, items, 0);
                            return HermesBuiltin.apply(fn, items1, undefined);
                          } catch (tmp8) {
                            if (closure_2_79) {
                              if (true === tmp9(tmp8)) {
                                return () => {

                                };
                              }
                            }
                            throw tmp8;
                          }
                        };
                      }
                      obj4 = { id: tmp27 };
                      let merged = Object.assign(obj);
                      fn(obj4);
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
  const arr = "last" === sampling.sampling.input ? ["change"] : ["input", "change"];
  const mapped = arr.map((item) => {
    let fn = eventHandler;
    if (typeof callbackWrapper === "function") {
      if (c79) {
        fn = () => {
          items = [...arguments];
          try {
            const items1 = [];
            HermesBuiltin.arraySpread(items1, items, 0);
            return HermesBuiltin.apply(fn, items1, undefined);
          } catch (tmp8) {
            if (closure_2_79) {
              if (true === tmp9(tmp8)) {
                return () => {

                };
              }
            }
            throw tmp8;
          }
        };
      }
      let _document = doc;
      let closure_0 = item;
      if (doc === undefined) {
        _document = document;
      }
      obj = { capture: true, passive: true };
      const listener = _document.addEventListener(item, fn, obj);
      return () => document.removeEventListener(selectionchange, fn, obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
  const defaultView = doc.defaultView;
  if (defaultView) {
    let _Object = defaultView.Object;
    let str = "value";
    let ownPropertyDescriptor = _Object.getOwnPropertyDescriptor(defaultView.HTMLInputElement.prototype, "value");
    const items = [defaultView.HTMLInputElement.prototype, "value"];
    const items1 = [items, , , , , ];
    const items2 = [defaultView.HTMLInputElement.prototype, ];
    const str2 = "checked";
    items2[1] = "checked";
    items1[1] = items2;
    const items3 = [defaultView.HTMLSelectElement.prototype, "value"];
    items1[2] = items3;
    const items4 = [defaultView.HTMLTextAreaElement.prototype, "value"];
    items1[3] = items4;
    const items5 = [defaultView.HTMLSelectElement.prototype, ];
    const str3 = "selectedIndex";
    items5[1] = "selectedIndex";
    items1[4] = items5;
    const items6 = [defaultView.HTMLOptionElement.prototype, ];
    let str4 = "selected";
    items6[1] = "selected";
    items1[5] = items6;
    let tmp3 = ownPropertyDescriptor && ownPropertyDescriptor.set;
    if (tmp3) {
      const push = mapped.push;
      const items7 = [];
      HermesBuiltin.arraySpread(items7, items1.map((item) => {
        let tmp;
        let tmp2;
        const f82318 = () => {
          let ownPropertyDescriptor;
          const tmp3 = ownPropertyDescriptor || {};
          closure_0 = tmp;
          closure_1 = tmp2;
          let closure_2 = tmp3;
          const _Object = window.Object;
          ownPropertyDescriptor = _Object.getOwnPropertyDescriptor(tmp, tmp2);
          const _Object2 = window.Object;
          _Object2.defineProperty(closure_0, closure_1, tmp3);
          return f82318;
        };
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
                    HermesBuiltin.arraySpread(items1, items, 0);
                    return HermesBuiltin.apply(fn, items1, undefined);
                  } catch (tmp8) {
                    if (closure_2_79) {
                      if (true === tmp9(tmp8)) {
                        return () => {

                        };
                      }
                    }
                    throw tmp8;
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
        let closure_0 = tmp;
        let closure_1 = tmp2;
        if (defaultView === undefined) {
          let tmp3 = globalThis;
          _window = window;
        }
        let _Object = _window.Object;
        let ownPropertyDescriptor = _Object.getOwnPropertyDescriptor(tmp, tmp2);
        let _Object2 = _window.Object;
        const obj2 = {
          set(arg0) {
            const self = this;
            closure_0 = arg0;
            closure_1_72(() => {
              set = obj.set;
              set.call(self, closure_0);
            }, 0);
            const tmp3 = closure_3 && closure_3.set;
            if (tmp3) {
              set = closure_3.set;
              set.call(this, arg0);
            }
          }
        };
        _Object2.defineProperty(tmp, tmp2, obj2);
        return f82318;
      }), 0);
      HermesBuiltin.apply(push, items7, mapped);
    }
    if (typeof callbackWrapper === "function") {
      let fn = () => {
        const item = mapped.forEach((fn) => fn());
      };
      if (c79) {
        fn = () => {
          items = [...arguments];
          try {
            const items1 = [];
            HermesBuiltin.arraySpread(items1, items, 0);
            return HermesBuiltin.apply(fn, items1, undefined);
          } catch (tmp8) {
            if (closure_2_79) {
              if (true === tmp9(tmp8)) {
                return () => {

                };
              }
            }
            throw tmp8;
          }
        };
      }
      return fn;
    } else {
      let str5 = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    return () => {
      const item = mapped.forEach((fn) => fn());
    };
  }
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
          const arr = Array.from(parentRule.parentStyleSheet.cssRules);
          items.unshift(arr.indexOf(parentRule));
        }
      } else {
      }
    } else {
    }
  } else {
  }
  const arr3 = Array.from(parentRule.parentRule.cssRules);
  items.unshift(arr3.indexOf(parentRule));
}
function initAdoptedStyleSheetObserver(doc, doc2) {
  let ShadowRoot;
  let closure_129_0;
  let mirror;
  ({ mirror, stylesheetManager: closure_129_0 } = doc);
  let closure_1 = doc;
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
    ShadowRoot = Document;
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
    const _Object = Object;
    if (ShadowRoot != null) {
      prototype1 = ShadowRoot.prototype;
    }
    ownPropertyDescriptor = getOwnPropertyDescriptor(prototype1, "adoptedStyleSheets");
  }
  if (null !== id) {
    if (-1 !== id) {
      if (ShadowRoot) {
        let fn;
        if (ownPropertyDescriptor) {
          const _Object2 = Object;
          obj = {
            configurable: null,
            enumerable: null,
            get() {
                      const get = ownPropertyDescriptor.get;
                      let callResult;
                      if (get != null) {
                        callResult = get.call(this);
                      }
                      return callResult;
                    },
            set(adoptedStyleSheets) {
                      let callResult;
                      if (ownPropertyDescriptor.set != null) {
                        callResult = set.call(this, adoptedStyleSheets);
                      }
                      if (null !== id) {
                        if (-1 !== id) {
                          try {
                            fn2.adoptStyleSheets(adoptedStyleSheets, id);
                          } catch (err) {
                          }
                        }
                      }
                      return callResult;
                    }
          };
          ({ configurable: obj.configurable, enumerable: obj.enumerable } = ownPropertyDescriptor);
          Object.defineProperty(doc, "adoptedStyleSheets", obj);
          if (typeof callbackWrapper === "function") {
            let fn2 = () => {
              obj = { configurable: ownPropertyDescriptor.configurable, enumerable: ownPropertyDescriptor.enumerable, get: ownPropertyDescriptor.get, set: ownPropertyDescriptor.set };
              Object.defineProperty(closure_1, "adoptedStyleSheets", obj);
            };
            if (c79) {
              fn2 = () => {
                items = [...arguments];
                try {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items1, items, 0);
                  return HermesBuiltin.apply(fn, items1, undefined);
                } catch (tmp8) {
                  if (closure_2_79) {
                    if (true === tmp9(tmp8)) {
                      return () => {

                      };
                    }
                  }
                  throw tmp8;
                }
              };
            }
            fn = fn2;
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
  let Play;
  function initMoveObserver(doc) {
    let id;
    let sampling;
    ({ mousemoveCb: closure_0, sampling, doc, mirror: closure_1 } = doc);
    closure_2 = undefined;
    closure_3 = undefined;
    let f82316;
    items = undefined;
    if (false === sampling.mousemove) {
      return () => {

      };
    } else {
      closure_3 = [];
      if (typeof closure_86 === "function") {
        let fn = (arg0) => {
          closure_0 = Date.now() - closure_2;
          closure_1_0(closure_3.map((timeOffset) => {
            timeOffset.timeOffset = timeOffset.timeOffset - closure_0;
            return timeOffset;
          }), arg0);
          closure_3 = [];
          closure_2 = null;
        };
        if (closure_79) {
          fn = () => {
            items = [...arguments];
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items1, items, 0);
              return HermesBuiltin.apply(fn, items1, undefined);
            } catch (tmp8) {
              if (closure_2_79) {
                if (true === tmp9(tmp8)) {
                  return () => {

                  };
                }
              }
              throw tmp8;
            }
          };
        }
        closure_2 = {};
        let c3 = null;
        let c4 = 0;
        f82316 = function() {
          function clearTimeout$2() {
            items = [...arguments];
            const tmp = closure_1_71("clearTimeout");
            return tmp(...items);
          }
          items = [...arguments];
          let self;
          const timestamp = Date.now();
          const diff = self - (timestamp - timestamp);
          self = this;
          if (diff > 0) {
            if (diff <= self) {
              const tmp5 = c3 || false === leading.trailing;
              if (!tmp5) {
                c3 = closure_1_72(() => {
                  if (false !== leading.leading) {
                    const _Date = Date;
                    Date.now();
                  }
                  c3 = null;
                  fn.apply(self, items);
                }, diff);
              }
            }
          }
          if (c3) {
            !clearTimeout$2(tmp8);
            c3 = null;
          }
          items.apply(this, items);
        };
        if (typeof closure_86 === "function") {
          let fn2 = (changedTouches) => {
            let clientX;
            let clientY;
            let first = changedTouches;
            const tmp = getEventTarget(changedTouches);
            if (Boolean(changedTouches.changedTouches)) {
              first = changedTouches.changedTouches[0];
            }
            ({ clientX, clientY } = first);
            if (!closure_2) {
              closure_2 = closure_2_62();
            }
            const point = { x: clientX, y: clientY, id: id.getId(tmp), timeOffset: closure_2_62() - closure_2 };
            closure_3.push(point);
            if (typeof globalThis.DragEvent !== "undefined") {
              if (changedTouches instanceof globalThis.DragEvent) {
                Drag = Drag.Drag;
              }
              tmp5(Drag);
            }
            Drag = changedTouches instanceof globalThis.MouseEvent ? tmp6.MouseMove : tmp6.TouchMove;
          };
          if (closure_79) {
            fn2 = () => {
              items = [...arguments];
              try {
                const items1 = [];
                HermesBuiltin.arraySpread(items1, items, 0);
                return HermesBuiltin.apply(fn, items1, undefined);
              } catch (tmp8) {
                if (closure_2_79) {
                  if (true === tmp9(tmp8)) {
                    return () => {

                    };
                  }
                }
                throw tmp8;
              }
            };
          }
          closure_2 = { trailing: false };
          c3 = null;
          c4 = 0;
          if (typeof closure_86 === "function") {
            let fn3 = function() {
              function clearTimeout$2() {
                items = [...arguments];
                const tmp = closure_1_71("clearTimeout");
                return tmp(...items);
              }
              items = [...arguments];
              let self;
              const timestamp = Date.now();
              const diff = self - (timestamp - timestamp);
              self = this;
              if (diff > 0) {
                if (diff <= self) {
                  const tmp5 = c3 || false === leading.trailing;
                  if (!tmp5) {
                    c3 = closure_1_72(() => {
                      if (false !== leading.leading) {
                        const _Date = Date;
                        Date.now();
                      }
                      c3 = null;
                      fn.apply(self, items);
                    }, diff);
                  }
                }
              }
              if (c3) {
                !clearTimeout$2(tmp8);
                c3 = null;
              }
              items.apply(this, items);
            };
            if (closure_79) {
              fn3 = () => {
                items = [...arguments];
                try {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items1, items, 0);
                  return HermesBuiltin.apply(fn, items1, undefined);
                } catch (tmp8) {
                  if (closure_2_79) {
                    if (true === tmp9(tmp8)) {
                      return () => {

                      };
                    }
                  }
                  throw tmp8;
                }
              };
            }
            const mousemove = "mousemove";
            let _document = doc;
            if (doc === undefined) {
              const tmp5 = globalThis;
              _document = document;
            }
            obj = { capture: true, passive: true };
            const listener = _document.addEventListener("mousemove", fn3, obj);
            items = [() => document.removeEventListener(selectionchange, fn, obj), , ];
            const touchmove = "touchmove";
            let _document2 = doc;
            if (doc === undefined) {
              _document2 = document;
            }
            const obj2 = { capture: true, passive: true };
            const listener1 = _document2.addEventListener("touchmove", fn3, obj2);
            items[1] = () => document.removeEventListener(selectionchange, fn, obj);
            doc = undefined;
            const drag = "drag";
            if (doc === undefined) {
              doc = document;
            }
            const obj3 = { capture: true, passive: true };
            const listener2 = doc.addEventListener("drag", fn3, obj3);
            items[2] = () => document.removeEventListener(selectionchange, fn, obj);
            if (typeof closure_86 === "function") {
              let fn4 = () => {
                const item = items.forEach((fn) => fn());
              };
              if (closure_79) {
                fn4 = () => {
                  items = [...arguments];
                  try {
                    const items1 = [];
                    HermesBuiltin.arraySpread(items1, items, 0);
                    return HermesBuiltin.apply(fn, items1, undefined);
                  } catch (tmp8) {
                    if (closure_2_79) {
                      if (true === tmp9(tmp8)) {
                        return () => {

                        };
                      }
                    }
                    throw tmp8;
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
  }
  function initViewportResizeObserver(viewportResizeCb, win) {
    let tmp;
    viewportResizeCb = viewportResizeCb.viewportResizeCb;
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
        const tmp = innerHeight === innerHeight && innerWidth === innerWidth;
        if (!tmp) {
          size = { width: Number(innerWidth), height: Number(innerHeight) };
          const _Number = Number;
          const _Number2 = Number;
          viewportResizeCb(size);
        }
      };
      if (closure_79) {
        fn = () => {
          items = [...arguments];
          try {
            const items1 = [];
            HermesBuiltin.arraySpread(items1, items, 0);
            return HermesBuiltin.apply(fn, items1, undefined);
          } catch (tmp8) {
            if (closure_2_79) {
              if (true === tmp9(tmp8)) {
                return () => {

                };
              }
            }
            throw tmp8;
          }
        };
      }
      let c1 = 200;
      closure_2 = {};
      let c3 = null;
      let c4 = 0;
      if (typeof tmp === "function") {
        let fn2 = function() {
          function clearTimeout$2() {
            items = [...arguments];
            const tmp = closure_1_71("clearTimeout");
            return tmp(...items);
          }
          items = [...arguments];
          let self;
          const timestamp = Date.now();
          const diff = self - (timestamp - timestamp);
          self = this;
          if (diff > 0) {
            if (diff <= self) {
              const tmp5 = c3 || false === leading.trailing;
              if (!tmp5) {
                c3 = closure_1_72(() => {
                  if (false !== leading.leading) {
                    const _Date = Date;
                    Date.now();
                  }
                  c3 = null;
                  fn.apply(self, items);
                }, diff);
              }
            }
          }
          if (c3) {
            !clearTimeout$2(tmp8);
            c3 = null;
          }
          items.apply(this, items);
        };
        if (closure_79) {
          fn2 = () => {
            items = [...arguments];
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items1, items, 0);
              return HermesBuiltin.apply(fn, items1, undefined);
            } catch (tmp8) {
              if (closure_2_79) {
                if (true === tmp9(tmp8)) {
                  return () => {

                  };
                }
              }
              throw tmp8;
            }
          };
        }
        const resize = "resize";
        if (_document === undefined) {
          _document = document;
        }
        obj = { capture: true, passive: true };
        const listener = _document.addEventListener("resize", fn2, obj);
        return () => document.removeEventListener(selectionchange, fn, obj);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  function initMediaInteractionObserver(doc) {
    let id;
    let media;
    let tmp;
    ({ mediaInteractionCb: closure_0, blockClass: closure_1, blockSelector: closure_2, unblockSelector: closure_3, mirror: closure_4, sampling: closure_5, doc } = doc);
    items = undefined;
    if (typeof closure_86 === "function") {
      let fn = (type) => {
        if (typeof closure_1_86 === "function") {
          let fn = (arg0) => {
            let currentTime;
            let muted;
            let playbackRate;
            let volume;
            const tmp = getEventTarget(arg0);
            if (tmp) {
              if (!isBlocked(tmp, closure_1, closure_2, closure_3, true)) {
                obj = { type, id: id.getId(tmp), currentTime, volume, muted, playbackRate };
                ({ currentTime, volume, muted, playbackRate } = tmp);
                type(obj);
              }
            }
          };
          if (closure_1_79) {
            fn = () => {
              items = [...arguments];
              try {
                const items1 = [];
                HermesBuiltin.arraySpread(items1, items, 0);
                return HermesBuiltin.apply(fn, items1, undefined);
              } catch (tmp8) {
                if (closure_2_79) {
                  if (true === tmp9(tmp8)) {
                    return () => {

                    };
                  }
                }
                throw tmp8;
              }
            };
          }
          closure_1 = media.media || 500;
          closure_2 = {};
          let c3 = null;
          return function() {
            function clearTimeout$2() {
              items = [...arguments];
              const tmp = closure_1_71("clearTimeout");
              return tmp(...items);
            }
            items = [...arguments];
            let self;
            const timestamp = Date.now();
            const diff = self - (timestamp - timestamp);
            self = this;
            if (diff > 0) {
              if (diff <= self) {
                const tmp5 = c3 || false === leading.trailing;
                if (!tmp5) {
                  c3 = closure_1_72(() => {
                    if (false !== leading.leading) {
                      const _Date = Date;
                      Date.now();
                    }
                    c3 = null;
                    fn.apply(self, items);
                  }, diff);
                }
              }
            }
            if (c3) {
              !clearTimeout$2(tmp8);
              c3 = null;
            }
            items.apply(this, items);
          };
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
      if (closure_79) {
        fn = () => {
          items = [...arguments];
          try {
            const items1 = [];
            HermesBuiltin.arraySpread(items1, items, 0);
            return HermesBuiltin.apply(fn, items1, undefined);
          } catch (tmp8) {
            if (closure_2_79) {
              if (true === tmp9(tmp8)) {
                return () => {

                };
              }
            }
            throw tmp8;
          }
        };
      }
      const play_str = "play";
      let tmp5 = doc !== undefined;
      let _document = doc;
      const fnResult = fn(Play.Play);
      if (!tmp5) {
        _document = document;
      }
      obj = { capture: true, passive: true };
      const listener = _document.addEventListener("play", fnResult, obj);
      items = [() => document.removeEventListener(selectionchange, fn, obj), , , , ];
      const pause_str = "pause";
      let _document2 = doc;
      const fnResult1 = fn(Play.Pause);
      if (!tmp5) {
        _document2 = document;
      }
      const obj2 = { capture: true, passive: true };
      const listener1 = _document2.addEventListener("pause", fnResult1, obj2);
      items[1] = () => document.removeEventListener(selectionchange, fn, obj);
      const seeked = "seeked";
      let _document3 = doc;
      const fnResult2 = fn(Play.Seeked);
      if (!tmp5) {
        _document3 = document;
      }
      const obj3 = { capture: true, passive: true };
      const listener2 = _document3.addEventListener("seeked", fnResult2, obj3);
      items[2] = () => document.removeEventListener(selectionchange, fn, obj);
      const volumechange = "volumechange";
      let _document4 = doc;
      const fnResult3 = fn(Play.VolumeChange);
      if (!tmp5) {
        _document4 = document;
      }
      obj4 = { capture: true, passive: true };
      const listener3 = _document4.addEventListener("volumechange", fnResult3, obj4);
      items[3] = () => document.removeEventListener(selectionchange, fn, obj);
      doc = undefined;
      const ratechange = "ratechange";
      const fnResult4 = fn(Play.RateChange);
      if (!tmp5) {
        doc = document;
      }
      obj5 = { capture: true, passive: true };
      const listener4 = doc.addEventListener("ratechange", fnResult4, obj5);
      items[4] = () => document.removeEventListener(selectionchange, fn, obj);
      if (typeof tmp === "function") {
        let fn2 = () => {
          const item = items.forEach((fn) => fn());
        };
        if (closure_79) {
          fn2 = () => {
            items = [...arguments];
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items1, items, 0);
              return HermesBuiltin.apply(fn, items1, undefined);
            } catch (tmp8) {
              if (closure_2_79) {
                if (true === tmp9(tmp8)) {
                  return () => {

                  };
                }
              }
              throw tmp8;
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
  }
  function initStyleSheetObserver(doc, win) {
    ({ styleSheetRuleCb: closure_0, mirror: closure_1, stylesheetManager: closure_2 } = doc);
    win = win.win;
    let insertRule;
    let replace;
    let replaceSync;
    let deleteRule;
    obj5 = undefined;
    closure_9 = undefined;
    if (win.CSSStyleSheet) {
      if (win.CSSStyleSheet.prototype) {
        insertRule = win.CSSStyleSheet.prototype.insertRule;
        let tmp2 = globalThis;
        if (typeof closure_86 === "function") {
          let fn = (apply, ownerNode, arg2) => {
            let id;
            let obj3;
            let styleId;
            let tmp2;
            let tmp3;
            const styleMirror = closure_2.styleMirror;
            [tmp2, tmp3] = replaceSync(arg2, 2);
            replaceSync(arg2, 2);
            if (ownerNode) {
              let id1;
              let id2;
              if (ownerNode.ownerNode) {
                id1 = closure_1.getId(ownerNode.ownerNode);
              } else {
                id2 = styleMirror.getId(ownerNode);
              }
              obj3 = { styleId: id2, id: id1 };
              const obj2 = { styleId: id2, id: id1 };
            } else {
              obj3 = {};
            }
            ({ id, styleId } = obj3);
            let tmp6 = id && -1 !== id;
            if (!tmp6) {
              tmp6 = styleId && -1 !== styleId;
              const tmp7 = styleId && -1 !== styleId;
            }
            if (tmp6) {
              obj4 = { id, styleId, adds: items };
              items = [{ rule: tmp2, index: tmp3 }];
              obj5 = { rule: tmp2, index: tmp3 };
              closure_0(obj4);
            }
            return apply.apply(ownerNode, arg2);
          };
          if (closure_79) {
            fn = () => {
              items = [...arguments];
              try {
                const items1 = [];
                HermesBuiltin.arraySpread(items1, items, 0);
                return HermesBuiltin.apply(fn, items1, undefined);
              } catch (tmp8) {
                if (closure_2_79) {
                  if (true === tmp9(tmp8)) {
                    return () => {

                    };
                  }
                }
                throw tmp8;
              }
            };
          }
          obj = { apply: fn };
          let self = this;
          let self2 = this;
          let tmp6 = insertRule;
          let tmp7 = obj;
          const tmp31 = new tmp3(insertRule, obj);
          tmp.insertRule = tmp31;
          deleteRule = win.CSSStyleSheet.prototype.deleteRule;
          if (typeof closure_86 === "function") {
            let fn2 = (apply, ownerNode, arg2) => {
              let id;
              let obj3;
              let styleId;
              const styleMirror = closure_2.styleMirror;
              const first = replaceSync(arg2, 1)[0];
              if (ownerNode) {
                let id1;
                let id2;
                if (ownerNode.ownerNode) {
                  id1 = closure_1.getId(ownerNode.ownerNode);
                } else {
                  id2 = styleMirror.getId(ownerNode);
                }
                obj3 = { styleId: id2, id: id1 };
                const obj2 = { styleId: id2, id: id1 };
              } else {
                obj3 = {};
              }
              ({ id, styleId } = obj3);
              let tmp4 = id && -1 !== id;
              if (!tmp4) {
                tmp4 = styleId && -1 !== styleId;
                const tmp5 = styleId && -1 !== styleId;
              }
              if (tmp4) {
                obj4 = { id, styleId, removes: items };
                items = [{ index: first }];
                obj5 = { index: first };
                closure_0(obj4);
              }
              return apply.apply(ownerNode, arg2);
            };
            if (closure_79) {
              fn2 = () => {
                items = [...arguments];
                try {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items1, items, 0);
                  return HermesBuiltin.apply(fn, items1, undefined);
                } catch (tmp8) {
                  if (closure_2_79) {
                    if (true === tmp9(tmp8)) {
                      return () => {

                      };
                    }
                  }
                  throw tmp8;
                }
              };
            }
            let obj2 = { apply: fn2 };
            let self3 = this;
            let self4 = this;
            const tmp13 = deleteRule;
            const tmp112 = new tmp11(deleteRule, obj2);
            tmp10.deleteRule = tmp112;
            if (win.CSSStyleSheet.prototype.replace) {
              replace = win.CSSStyleSheet.prototype.replace;
              if (typeof closure_86 === "function") {
                let fn3 = (apply, ownerNode, arg2) => {
                  let id;
                  let obj3;
                  let styleId;
                  const styleMirror = closure_2.styleMirror;
                  const first = replaceSync(arg2, 1)[0];
                  if (ownerNode) {
                    let id1;
                    let id2;
                    if (ownerNode.ownerNode) {
                      id1 = closure_1.getId(ownerNode.ownerNode);
                    } else {
                      id2 = styleMirror.getId(ownerNode);
                    }
                    obj3 = { styleId: id2, id: id1 };
                    const obj2 = { styleId: id2, id: id1 };
                  } else {
                    obj3 = {};
                  }
                  ({ id, styleId } = obj3);
                  let tmp4 = id && -1 !== id;
                  if (!tmp4) {
                    tmp4 = styleId && -1 !== styleId;
                    const tmp5 = styleId && -1 !== styleId;
                  }
                  if (tmp4) {
                    obj4 = { id, styleId, replace: first };
                    closure_0(obj4);
                  }
                  return apply.apply(ownerNode, arg2);
                };
                if (closure_79) {
                  fn3 = () => {
                    items = [...arguments];
                    try {
                      const items1 = [];
                      HermesBuiltin.arraySpread(items1, items, 0);
                      return HermesBuiltin.apply(fn, items1, undefined);
                    } catch (tmp8) {
                      if (closure_2_79) {
                        if (true === tmp9(tmp8)) {
                          return () => {

                          };
                        }
                      }
                      throw tmp8;
                    }
                  };
                }
                let obj3 = { apply: fn3 };
                const self5 = this;
                const self6 = this;
                tmp17.replace = new tmp18(replace, obj3);
                const tmp182 = new tmp18(replace, obj3);
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (win.CSSStyleSheet.prototype.replaceSync) {
              replaceSync = win.CSSStyleSheet.prototype.replaceSync;
              if (typeof closure_86 === "function") {
                let fn4 = (apply, ownerNode, arg2) => {
                  let id;
                  let obj3;
                  let styleId;
                  const styleMirror = closure_2.styleMirror;
                  const first = replaceSync(arg2, 1)[0];
                  if (ownerNode) {
                    let id1;
                    let id2;
                    if (ownerNode.ownerNode) {
                      id1 = closure_1.getId(ownerNode.ownerNode);
                    } else {
                      id2 = styleMirror.getId(ownerNode);
                    }
                    obj3 = { styleId: id2, id: id1 };
                    const obj2 = { styleId: id2, id: id1 };
                  } else {
                    obj3 = {};
                  }
                  ({ id, styleId } = obj3);
                  let tmp4 = id && -1 !== id;
                  if (!tmp4) {
                    tmp4 = styleId && -1 !== styleId;
                    const tmp5 = styleId && -1 !== styleId;
                  }
                  if (tmp4) {
                    obj4 = { id, styleId, replaceSync: first };
                    closure_0(obj4);
                  }
                  return apply.apply(ownerNode, arg2);
                };
                if (closure_79) {
                  fn4 = () => {
                    items = [...arguments];
                    try {
                      const items1 = [];
                      HermesBuiltin.arraySpread(items1, items, 0);
                      return HermesBuiltin.apply(fn, items1, undefined);
                    } catch (tmp8) {
                      if (closure_2_79) {
                        if (true === tmp9(tmp8)) {
                          return () => {

                          };
                        }
                      }
                      throw tmp8;
                    }
                  };
                }
                obj4 = { apply: fn4 };
                const self7 = this;
                const self8 = this;
                tmp24.replaceSync = new tmp25(replaceSync, obj4);
                const tmp252 = new tmp25(replaceSync, obj4);
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            obj5 = {};
            const _window = window;
            let prototype = undefined !== window.CSSGroupingRule;
            const _Boolean = Boolean;
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
            if (_Boolean(prototype)) {
              obj5.CSSGroupingRule = win.CSSGroupingRule;
            } else {
              const _window5 = window;
              let prototype2 = undefined !== window.CSSMediaRule;
              const _Boolean2 = Boolean;
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
              if (_Boolean2(prototype2)) {
                obj5.CSSMediaRule = win.CSSMediaRule;
              }
              const _window9 = window;
              let prototype3 = undefined !== window.CSSConditionRule;
              const _Boolean3 = Boolean;
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
              if (_Boolean3(prototype3)) {
                obj5.CSSConditionRule = win.CSSConditionRule;
              }
              const _window13 = window;
              let prototype4 = undefined !== window.CSSSupportsRule;
              const _Boolean4 = Boolean;
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
              if (_Boolean4(prototype4)) {
                obj5.CSSSupportsRule = win.CSSSupportsRule;
              }
            }
            closure_9 = {};
            const _Object = Object;
            let entries = Object.entries(obj5);
            let item = entries.forEach(function(item) {
              let tmp;
              let tmp2;
              let tmp5;
              let tmp6;
              [tmp, tmp2] = item;
              closure_9[tmp] = { insertRule: tmp2.prototype.insertRule, deleteRule: tmp2.prototype.deleteRule };
              insertRule = closure_9[tmp].insertRule;
              if (typeof callbackWrapper === "function") {
                let fn = (apply, parentStyleSheet, arg2) => {
                  let id;
                  let items1;
                  let obj3;
                  let styleId;
                  const tmp2 = replaceSync(arg2, 2);
                  let num = tmp2[1];
                  parentStyleSheet = parentStyleSheet.parentStyleSheet;
                  const styleMirror = closure_1_2.styleMirror;
                  const first = tmp2[0];
                  if (parentStyleSheet) {
                    let id1;
                    let id2;
                    if (parentStyleSheet.ownerNode) {
                      id1 = closure_1_1.getId(parentStyleSheet.ownerNode);
                    } else {
                      id2 = styleMirror.getId(parentStyleSheet);
                    }
                    obj3 = { styleId: id2, id: id1 };
                    const obj2 = { styleId: id2, id: id1 };
                  } else {
                    obj3 = {};
                  }
                  ({ id, styleId } = obj3);
                  let tmp6 = id && -1 !== id;
                  if (!tmp6) {
                    tmp6 = styleId && -1 !== styleId;
                    const tmp7 = styleId && -1 !== styleId;
                  }
                  if (tmp6) {
                    obj5 = { rule: first, index: items };
                    items = [];
                    obj4 = { id, styleId, adds: items1 };
                    const arraySpreadResult = HermesBuiltin.arraySpread(items, closure_2_95(parentStyleSheet), 0);
                    if (!num) {
                      num = 0;
                    }
                    items[arraySpreadResult] = num;
                    items1 = [obj5];
                    closure_1_0(obj4);
                  }
                  return apply.apply(parentStyleSheet, arg2);
                };
                if (closure_2_79) {
                  fn = () => {
                    items = [...arguments];
                    try {
                      const items1 = [];
                      HermesBuiltin.arraySpread(items1, items, 0);
                      return HermesBuiltin.apply(fn, items1, undefined);
                    } catch (tmp8) {
                      if (closure_2_79) {
                        if (true === tmp9(tmp8)) {
                          return () => {

                          };
                        }
                      }
                      throw tmp8;
                    }
                  };
                }
                obj = { apply: fn };
                const self = this;
                const self2 = this;
                tmp4.insertRule = new tmp5(insertRule, obj);
                deleteRule = tmp3[tmp].deleteRule;
                const tmp52 = new tmp5(insertRule, obj);
                if (typeof tmp6 === "function") {
                  let fn2 = (apply, parentStyleSheet, arg2) => {
                    let id;
                    let items1;
                    let obj3;
                    let styleId;
                    parentStyleSheet = parentStyleSheet.parentStyleSheet;
                    const styleMirror = closure_1_2.styleMirror;
                    const first = replaceSync(arg2, 1)[0];
                    if (parentStyleSheet) {
                      let id1;
                      let id2;
                      if (parentStyleSheet.ownerNode) {
                        id1 = closure_1_1.getId(parentStyleSheet.ownerNode);
                      } else {
                        id2 = styleMirror.getId(parentStyleSheet);
                      }
                      obj3 = { styleId: id2, id: id1 };
                      const obj2 = { styleId: id2, id: id1 };
                    } else {
                      obj3 = {};
                    }
                    ({ id, styleId } = obj3);
                    let tmp5 = id && -1 !== id;
                    if (!tmp5) {
                      tmp5 = styleId && -1 !== styleId;
                      const tmp6 = styleId && -1 !== styleId;
                    }
                    if (tmp5) {
                      obj5 = { index: items };
                      items = [];
                      obj4 = { id, styleId, removes: items1 };
                      items[HermesBuiltin.arraySpread(items, closure_2_95(parentStyleSheet), 0)] = first;
                      items1 = [obj5];
                      closure_1_0(obj4);
                    }
                    return apply.apply(parentStyleSheet, arg2);
                  };
                  if (closure_2_79) {
                    fn2 = () => {
                      items = [...arguments];
                      try {
                        const items1 = [];
                        HermesBuiltin.arraySpread(items1, items, 0);
                        return HermesBuiltin.apply(fn, items1, undefined);
                      } catch (tmp8) {
                        if (closure_2_79) {
                          if (true === tmp9(tmp8)) {
                            return () => {

                            };
                          }
                        }
                        throw tmp8;
                      }
                    };
                  }
                  let obj2 = { apply: fn2 };
                  const self3 = this;
                  const self4 = this;
                  tmp12.deleteRule = new tmp13(deleteRule, obj2);
                  const tmp132 = new tmp13(deleteRule, obj2);
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
                const entries = Object.entries(obj5);
                const item = entries.forEach((item) => {
                  let tmp;
                  let tmp2;
                  [tmp, tmp2] = item;
                  tmp2.prototype.insertRule = closure_1_9[tmp].insertRule;
                  tmp2.prototype.deleteRule = closure_1_9[tmp].deleteRule;
                });
              };
              if (closure_79) {
                fn5 = () => {
                  items = [...arguments];
                  try {
                    const items1 = [];
                    HermesBuiltin.arraySpread(items1, items, 0);
                    return HermesBuiltin.apply(fn, items1, undefined);
                  } catch (tmp8) {
                    if (closure_2_79) {
                      if (true === tmp9(tmp8)) {
                        return () => {

                        };
                      }
                    }
                    throw tmp8;
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
  }
  function initStyleDeclarationObserver(doc, win) {
    let tmp10;
    ({ styleDeclarationCb: closure_0, mirror: closure_1, ignoreCSSAttributes: closure_2, stylesheetManager: closure_3 } = doc);
    win = win.win;
    let removeProperty;
    const setProperty = win.CSSStyleDeclaration.prototype.setProperty;
    if (typeof closure_86 === "function") {
      let fn = (apply, parentRule, arg2) => {
        let id;
        let styleId;
        let tmp2;
        let tmp3;
        let tmp4;
        [tmp2, tmp3, tmp4] = removeProperty(arg2, 3);
        removeProperty(arg2, 3);
        if (set.has(tmp2)) {
          items = [tmp2, tmp3, tmp4];
          return setProperty.apply(parentRule, items);
        } else {
          let obj3;
          parentRule = parentRule.parentRule;
          let parentStyleSheet;
          if (parentRule != null) {
            parentStyleSheet = parentRule.parentStyleSheet;
          }
          const styleMirror = closure_3.styleMirror;
          if (parentStyleSheet) {
            let id1;
            let id2;
            if (parentStyleSheet.ownerNode) {
              id1 = closure_1.getId(parentStyleSheet.ownerNode);
            } else {
              id2 = styleMirror.getId(parentStyleSheet);
            }
            obj3 = { styleId: id2, id: id1 };
            const obj2 = { styleId: id2, id: id1 };
          } else {
            obj3 = {};
          }
          ({ id, styleId } = obj3);
          let tmp10 = id && -1 !== id;
          if (!tmp10) {
            tmp10 = styleId && -1 !== styleId;
            const tmp11 = styleId && -1 !== styleId;
          }
          if (tmp10) {
            obj4 = { id, styleId, set: obj5, index: getNestedCSSRulePositions(parentRule.parentRule) };
            obj5 = { property: tmp2, value: tmp3, priority: tmp4 };
            closure_0(obj4);
          }
          return apply.apply(parentRule, arg2);
        }
      };
      if (closure_79) {
        fn = () => {
          items = [...arguments];
          try {
            const items1 = [];
            HermesBuiltin.arraySpread(items1, items, 0);
            return HermesBuiltin.apply(fn, items1, undefined);
          } catch (tmp8) {
            if (closure_2_79) {
              if (true === tmp9(tmp8)) {
                return () => {

                };
              }
            }
            throw tmp8;
          }
        };
      }
      const self = this;
      const self2 = this;
      obj = { apply: fn };
      const tmp22 = new tmp2(setProperty, obj);
      let tmp8 = tmp22;
      tmp.setProperty = tmp22;
      removeProperty = win.CSSStyleDeclaration.prototype.removeProperty;
      if (typeof closure_86 === "function") {
        let fn2 = (apply, parentRule, arg2) => {
          let id;
          let styleId;
          const first = removeProperty(arg2, 1)[0];
          if (set.has(first)) {
            items = [first];
            return removeProperty.apply(parentRule, items);
          } else {
            let obj3;
            parentRule = parentRule.parentRule;
            let parentStyleSheet;
            if (parentRule != null) {
              parentStyleSheet = parentRule.parentStyleSheet;
            }
            const styleMirror = closure_3.styleMirror;
            if (parentStyleSheet) {
              let id1;
              let id2;
              if (parentStyleSheet.ownerNode) {
                id1 = closure_1.getId(parentStyleSheet.ownerNode);
              } else {
                id2 = styleMirror.getId(parentStyleSheet);
              }
              obj3 = { styleId: id2, id: id1 };
              const obj2 = { styleId: id2, id: id1 };
            } else {
              obj3 = {};
            }
            ({ id, styleId } = obj3);
            let tmp7 = id && -1 !== id;
            if (!tmp7) {
              tmp7 = styleId && -1 !== styleId;
              const tmp8 = styleId && -1 !== styleId;
            }
            if (tmp7) {
              obj4 = { id, styleId, remove: obj5, index: getNestedCSSRulePositions(parentRule.parentRule) };
              obj5 = { property: first };
              closure_0(obj4);
            }
            return apply.apply(parentRule, arg2);
          }
        };
        if (closure_79) {
          fn2 = () => {
            items = [...arguments];
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items1, items, 0);
              return HermesBuiltin.apply(fn, items1, undefined);
            } catch (tmp8) {
              if (closure_2_79) {
                if (true === tmp9(tmp8)) {
                  return () => {

                  };
                }
              }
              throw tmp8;
            }
          };
        }
        let obj2 = { apply: fn2 };
        const self3 = this;
        const self4 = this;
        const tmp102 = new tmp10(removeProperty, obj2);
        tmp9.removeProperty = tmp102;
        if (typeof closure_86 === "function") {
          let fn3 = () => {
            win.CSSStyleDeclaration.prototype.setProperty = setProperty;
            win.CSSStyleDeclaration.prototype.removeProperty = removeProperty;
          };
          if (closure_79) {
            fn3 = () => {
              items = [...arguments];
              try {
                const items1 = [];
                HermesBuiltin.arraySpread(items1, items, 0);
                return HermesBuiltin.apply(fn, items1, undefined);
              } catch (tmp8) {
                if (closure_2_79) {
                  if (true === tmp9(tmp8)) {
                    return () => {

                    };
                  }
                }
                throw tmp8;
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
  }
  function initFontObserver(doc) {
    ({ fontCb: closure_0, doc } = doc);
    items = undefined;
    weakMap = undefined;
    let FontFace;
    const defaultView = doc.defaultView;
    if (defaultView) {
      items = [];
      let tmp = globalThis;
      const _WeakMap = WeakMap;
      let self = this;
      let self2 = this;
      weakMap = new WeakMap();
      FontFace = defaultView.FontFace;
      defaultView.FontFace = function FontFace2(family, str, descriptors) {
        let json;
        const tmp = new FontFace(family, str, descriptors);
        obj = { family, buffer: typeof str !== "string", descriptors, fontSource: json };
        json = str;
        set = weakMap.set;
        if (typeof str !== "string") {
          const _JSON = JSON;
          const _Array = Array;
          const _Uint8Array = Uint8Array;
          const self = this;
          const self2 = this;
          const uint8Array = new Uint8Array(str);
          json = stringify(from(uint8Array));
        }
        const result = set(tmp, obj);
        return tmp;
      };
      const str = "add";
      const tmp5 = closure_61(doc.fonts, "add", (arg0) => {
        closure_0 = arg0;
        return function(arg0) {
          closure_0 = arg0;
          if (typeof callbackWrapper === "function") {
            let fn = () => {
              const value = map.get(closure_0);
              if (value) {
                closure_2_0(value);
                map.delete(closure_0);
              }
            };
            if (closure_3_79) {
              fn = () => {
                items = [...arguments];
                try {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items1, items, 0);
                  return HermesBuiltin.apply(fn, items1, undefined);
                } catch (tmp8) {
                  if (closure_2_79) {
                    if (true === tmp9(tmp8)) {
                      return () => {

                      };
                    }
                  }
                  throw tmp8;
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
      items.push(() => {
        defaultView.FontFace = FontFace;
      });
      items.push(tmp5);
      if (typeof closure_86 === "function") {
        let fn = () => {
          const item = items.forEach((fn) => fn());
        };
        if (closure_79) {
          fn = () => {
            items = [...arguments];
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items1, items, 0);
              return HermesBuiltin.apply(fn, items1, undefined);
            } catch (tmp8) {
              if (closure_2_79) {
                if (true === tmp9(tmp8)) {
                  return () => {

                  };
                }
              }
              throw tmp8;
            }
          };
        }
        return fn;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      return () => {

      };
    }
  }
  function initSelectionObserver(doc) {
    ({ doc: closure_0, mirror: closure_1, blockClass: closure_2, blockSelector: closure_3, unblockSelector: closure_4, selectionCb: closure_5 } = doc);
    closure_6 = true;
    if (typeof closure_86 === "function") {
      let fn = () => {
        let endContainer;
        let endOffset;
        let startContainer;
        let startOffset;
        selection = selection.getSelection();
        if (selection) {
          const tmp = closure_6;
          if (!tmp) {
            let num;
            closure_6 = selection.isCollapsed || false;
            items = [];
            for (let num = 0; num < (selection.rangeCount || 0); num = num + 1) {
              let rangeAt = selection.getRangeAt(num);
              ({ startContainer, endContainer } = rangeAt);
              let flag = true;
              ({ startOffset, endOffset } = rangeAt);
              let tmp6Result = isBlocked(startContainer, closure_2, closure_3, closure_4, true);
              if (!tmp6Result) {
                let flag2 = true;
                tmp6Result = isBlocked(endContainer, closure_2, closure_3, closure_4, true);
              }
              if (!tmp6Result) {
                obj = { start: closure_1.getId(startContainer), startOffset, end: closure_1.getId(endContainer), endOffset };
                let push = items.push;
                let arr = push(obj);
              }
            }
            const obj2 = { ranges: items };
            closure_5(obj2);
          } else {
            let isCollapsed;
            if (selection != null) {
              isCollapsed = selection.isCollapsed;
            }
          }
        }
      };
      if (closure_79) {
        fn = () => {
          items = [...arguments];
          try {
            const items1 = [];
            HermesBuiltin.arraySpread(items1, items, 0);
            return HermesBuiltin.apply(fn, items1, undefined);
          } catch (tmp8) {
            if (closure_2_79) {
              if (true === tmp9(tmp8)) {
                return () => {

                };
              }
            }
            throw tmp8;
          }
        };
      }
      fn();
      let document;
      const selectionchange = "selectionchange";
      const _document = document;
      obj = { capture: true, passive: true };
      const listener = document.addEventListener("selectionchange", fn, obj);
      return () => document.removeEventListener(selectionchange, fn, obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  function initCustomElementObserver(customElementCb) {
    customElementCb = customElementCb.customElementCb;
    const defaultView = customElementCb.doc.defaultView;
    if (defaultView) {
      let fn;
      if (defaultView.customElements) {
        fn = patch(defaultView.customElements, "define", (arg0) => {
          closure_0 = arg0;
          return function(name, arg1, arg2) {
            let obj2;
            try {
              obj = { define: obj2 };
              obj2 = { name };
              customElementCb(obj);
            } catch (err) {
            }
            items = [name, arg1, arg2];
            return closure_0.apply(this, items);
          };
        });
      }
      return fn;
    }
    fn = () => {

    };
  }
  let defaultView = doc.doc.defaultView;
  if (defaultView) {
    if (doc.recordDOM) {
      let closure_0 = initMutationObserver(doc, doc.doc);
    }
    let closure_1 = initMoveObserver(doc);
    let closure_2 = initMouseInteractionObserver(doc);
    let closure_3 = initScrollObserver(doc);
    obj = { win: defaultView };
    let closure_4 = initViewportResizeObserver(doc, obj);
    let closure_5 = initInputObserver(doc);
    let closure_6 = initMediaInteractionObserver(doc);
    let closure_7 = function styleSheetObserver() {

    };
    let closure_8 = function adoptedStyleSheetObserver() {

    };
    let closure_9 = function styleDeclarationObserver() {

    };
    let closure_10 = function fontObserver() {

    };
    if (doc.recordDOM) {
      let obj2 = { win: defaultView };
      closure_7 = initStyleSheetObserver(doc, obj2);
      closure_8 = initAdoptedStyleSheetObserver(doc, doc.doc);
      let obj3 = { win: defaultView };
      closure_9 = initStyleDeclarationObserver(doc, obj3);
      if (doc.collectFonts) {
        closure_10 = initFontObserver(doc);
      }
    }
    let closure_11 = initSelectionObserver(doc);
    closure_12 = initCustomElementObserver(doc);
    let items = [];
    const plugins = doc.plugins;
    let tmp6 = plugins;
    let tmp7 = plugins;
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
  let IncrementalSnapshot;
  let Mutation;
  let _undefined;
  let blockClass;
  let c1;
  let c17;
  let c2;
  let errorHandler;
  let maskAttributeFn;
  let maskInputOptions;
  let mousemoveWait;
  let obj9;
  let onMutation;
  let recordDOM;
  let sampling;
  let slimDOMOptions;
  function registerErrorHandler(errorHandler) {
    let closure_1_79 = errorHandler;
  }
  function polyfill$1() {
    let self = this;
    let _window = arg0;
    if (arg0 === undefined) {
      _window = window;
    }
    const tmp2 = "NodeList" in _window && !_window.NodeList.prototype.forEach;
    if (tmp2) {
      const _Array = Array;
      _window.NodeList.prototype.forEach = Array.prototype.forEach;
    }
    const tmp4 = "DOMTokenList" in _window && !_window.DOMTokenList.prototype.forEach;
    if (tmp4) {
      const _Array2 = Array;
      _window.DOMTokenList.prototype.forEach = Array.prototype.forEach;
    }
    if (!globalThis.Node.prototype.contains) {
      globalThis.Node.prototype.contains = function() {
        items = [...arguments];
        let first = items[0];
        if (0 in items) {
          while (self !== first) {
            let tmp7 = first && first.parentNode;
            first = tmp7;
            if (first) {
              continue;
            } else {
              let flag = false;
              return false;
            }
          }
          return true;
        } else {
          const _TypeError = TypeError;
          self = this;
          const self2 = this;
          const typeError = new TypeError("1 argument is required");
          throw typeError;
        }
      };
    }
  }
  function _getCanvasManager(getCanvasManager, arg1) {
    try {
      let tmp3;
      const tmp = getCanvasManager;
      if (tmp) {
        tmp3 = getCanvasManager(arg1);
      } else {
        const self = this;
        const self2 = this;
        tmp3 = new closure_1_105();
      }
      return tmp3;
    } catch (err) {
      const _console = console;
      console.warn("Unable to initialize CanvasManager");
      const self3 = this;
      const self4 = this;
      const tmp8 = new closure_1_105();
      return tmp8;
    }
  }
  obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  c1 = undefined;
  c2 = undefined;
  let blockSelector;
  let unblockSelector;
  let str2;
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
  recordDOM = undefined;
  let recordCanvas;
  let recordAfter;
  let userTriggeredOnInput;
  let collectFonts;
  let inlineImages;
  let plugins;
  let keepIframeSrcFn;
  let ignoreCSSAttributes;
  onMutation = undefined;
  let closure_30;
  let c31;
  let c32;
  maskInputOptions = undefined;
  let closure_34;
  let c35;
  let eventProcessor;
  let wrappedMutationEmit;
  let wrappedScrollEmit;
  let wrappedCanvasMutationEmit;
  let stylesheetManager;
  obj6 = undefined;
  let processedNodeManager;
  let canvasManager;
  let shadowDomManager;
  let takeFullSnapshot2;
  let items;
  let observe;
  let init;
  const emit = obj.emit;
  ({ checkoutEveryNms: c1, checkoutEveryNth: c2, blockClass } = obj);
  let str = "rr-block";
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
  maskAllText = obj.maskAllText;
  let tmp4 = undefined !== maskAllText && maskAllText;
  maskAllText = tmp4;
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
  inlineStylesheet = obj.inlineStylesheet;
  let tmp8 = undefined === inlineStylesheet || inlineStylesheet;
  inlineStylesheet = tmp8;
  ({ maskInputOptions, slimDOMOptions, maskAttributeFn } = obj);
  maskInputFn = obj.maskInputFn;
  maskTextFn = obj.maskTextFn;
  const maxCanvasSize = obj.maxCanvasSize;
  let tmp9 = null;
  let maskAllInputs = obj.maskAllInputs;
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
  recordDOM = undefined === recordDOM || recordDOM;
  recordCanvas = tmp10;
  const recordCrossOriginIframes = obj.recordCrossOriginIframes;
  recordAfter = obj.recordAfter;
  if (undefined === recordAfter) {
    let str4 = "load";
    if ("DOMContentLoaded" === obj.recordAfter) {
      str4 = obj.recordAfter;
    }
    recordAfter = str4;
  }
  userTriggeredOnInput = obj.userTriggeredOnInput;
  userTriggeredOnInput = undefined !== userTriggeredOnInput && userTriggeredOnInput;
  collectFonts = obj.collectFonts;
  collectFonts = undefined !== collectFonts && collectFonts;
  inlineImages = tmp12;
  plugins = obj.plugins;
  keepIframeSrcFn = obj.keepIframeSrcFn;
  if (undefined === keepIframeSrcFn) {
    keepIframeSrcFn = () => false;
  }
  ignoreCSSAttributes = obj.ignoreCSSAttributes;
  if (undefined === ignoreCSSAttributes) {
    const tmp13 = globalThis;
    let _Set = Set;
    let self = this;
    let self2 = this;
    ignoreCSSAttributes = new Set([]);
  }
  ({ errorHandler, onMutation } = obj);
  const getCanvasManager = obj.getCanvasManager;
  registerErrorHandler(errorHandler);
  let tmp15 = !tmp11;
  if (undefined !== recordCrossOriginIframes && recordCrossOriginIframes) {
    const tmp16 = globalThis;
    let _window = window;
    let _window2 = window;
    tmp15 = window.parent === window;
  }
  closure_30 = tmp15;
  let flag = false;
  c31 = false;
  if (!tmp15) {
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
  if (tmp15) {
    if (!emit) {
      const _Error = Error;
      let self3 = this;
      let self4 = this;
      const error = new Error("emit function is required");
      throw error;
    }
  }
  if (!tmp15) {
    if (!flag) {
      return () => {

      };
    }
  }
  let tmp21 = undefined !== mousemoveWait && undefined === sampling.mousemove;
  if (tmp21) {
    sampling.mousemove = mousemoveWait;
  }
  navigation.reset();
  if (true === maskAllInputs) {
    maskInputOptions = { color: true, date: true, "datetime-local": true, email: true, month: true, number: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true, textarea: true, select: true, radio: true, checkbox: true };
  } else if (undefined === maskInputOptions) {
    maskInputOptions = {};
  }
  if (true !== slimDOMOptions) {
    let tmp25;
    if ("all" !== slimDOMOptions) {
      tmp25 = slimDOMOptions || {};
    }
    closure_34 = tmp25;
    polyfill$1();
    c35 = 0;
    eventProcessor = function eventProcessor(eventProcessorResult) {
      const tmp2 = plugins || [];
      for (const item10007 of tmp2) {
        if (item10007.eventProcessor) {
          eventProcessorResult = item10007.eventProcessor(eventProcessorResult);
        }
        continue;
      }
      const tmp6 = _undefined && !c31;
      if (tmp6) {
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
        tmp2 = type.type === obj4.FullSnapshot;
      }
      if (!tmp2) {
        tmp2 = type.type === obj4.IncrementalSnapshot && type.data.source === obj5.Mutation;
        const tmp5 = type.type === obj4.IncrementalSnapshot && type.data.source === obj5.Mutation;
      }
      if (!tmp2) {
        const item = closure_87.forEach((unfreeze) => unfreeze.unfreeze());
      }
      if (closure_30) {
        if (emit != null) {
          tmp13(eventProcessor(type), isCheckout);
        }
      } else if (c31) {
        const _window = window;
        const _window2 = window;
        obj = { type: "rrweb", event: eventProcessor(type), origin: window.location.origin, isCheckout };
        parent.postMessage(obj, "*");
      }
      if (type.type === obj4.FullSnapshot) {
        timestamp = type;
        c35 = 0;
      } else if (type.type === tmp16.IncrementalSnapshot) {
        const sum = c35 + 1;
        c35 = sum;
        let tmp19 = c2 && sum >= c2;
        const tmp21 = c1 && timestamp && type.timestamp - timestamp.timestamp > c1;
        if (!tmp19) {
          tmp19 = tmp21;
        }
        if (tmp19) {
          takeFullSnapshot2(true);
        }
      }
    }
    wrappedMutationEmit = function wrappedMutationEmit(arg0) {
      let obj2;
      obj = { type: obj4.IncrementalSnapshot, data: obj2 };
      obj2 = { source: obj5.Mutation };
      const merged = Object.assign(arg0);
      le(obj);
    };
    wrappedScrollEmit = function wrappedScrollEmit(arg0) {
      let obj2;
      obj = { type: obj4.IncrementalSnapshot, data: obj2 };
      obj2 = { source: obj5.Scroll };
      const merged = Object.assign(arg0);
      le(obj);
    };
    wrappedCanvasMutationEmit = function wrappedCanvasMutationEmit(arg0) {
      let obj2;
      obj = { type: obj4.IncrementalSnapshot, data: obj2 };
      obj2 = { source: obj5.CanvasMutation };
      const merged = Object.assign(arg0);
      le(obj);
    };
    let obj2 = {
      mutationCb: wrappedMutationEmit,
      adoptedStyleSheetCb(arg0) {
          let obj2;
          obj = { type: obj4.IncrementalSnapshot, data: obj2 };
          obj2 = { source: obj5.AdoptedStyleSheet };
          const merged = Object.assign(arg0);
          le(obj);
        }
    };
    const self5 = this;
    const self6 = this;
    let tmp30 = new closure_106(obj2);
    let tmp31 = tmp30;
    stylesheetManager = tmp30;
    let tmp32 = globalThis;
    if (typeof globalThis.__RRWEB_EXCLUDE_IFRAME__ === "boolean") {
      if (globalThis.__RRWEB_EXCLUDE_IFRAME__) {
        const self9 = this;
        const self10 = this;
        obj6 = new closure_99();
      }
      if (!plugins) {
        plugins = [];
      }
      let tmp38 = plugins;
      let tmp39 = plugins;
      for (const item10140 of plugins) {
        if (item10140.getMirror) {
          let obj3 = { nodeMirror: navigation, crossOriginIframeMirror: null, crossOriginIframeStyleMirror: null };
          ({ crossOriginIframeMirror: obj8.crossOriginIframeMirror, crossOriginIframeStyleMirror: obj8.crossOriginIframeStyleMirror } = obj6);
          let mirror = item10140.getMirror(obj3);
        }
        continue;
      }
      const self11 = this;
      const self12 = this;
      const tmp45 = new closure_107();
      processedNodeManager = tmp45;
      obj4 = {
        mirror: navigation,
        win: window,
        mutationCb(arg0) {
              let obj2;
              obj = { type: obj4.IncrementalSnapshot, data: obj2 };
              obj2 = { source: obj5.CanvasMutation };
              const merged = Object.assign(arg0);
              le(obj);
            },
        recordCanvas: tmp10,
        blockClass: str,
        blockSelector: tmp,
        unblockSelector: tmp2,
        maxCanvasSize: tmp9,
        sampling: sampling.canvas,
        dataURLOptions,
        errorHandler
      };
      let _window4 = window;
      const tmp49 = _getCanvasManager(getCanvasManager, obj4);
      canvasManager = tmp49;
      if (typeof globalThis.__RRWEB_EXCLUDE_SHADOW_DOM__ === "boolean") {
        let tmp52;
        if (globalThis.__RRWEB_EXCLUDE_SHADOW_DOM__) {
          const self15 = this;
          const self16 = this;
          tmp52 = new closure_101();
        }
        shadowDomManager = tmp52;
        takeFullSnapshot2 = function takeFullSnapshot2(arg0) {
          let iframeLoadTimeout;
          let innerHeight;
          let innerWidth;
          let obj9;
          let onBlockedImageLoad;
          let onIframeLoad;
          let onSerialize;
          let onStylesheetLoad;
          let preserveWhiteSpace;
          let slimDOM;
          let stylesheetLoadTimeout;
          let flag = arg0;
          if (arg0 === undefined) {
            flag = false;
          }
          if (recordDOM) {
            obj = { type: obj4.Meta, data: size };
            size = { href: window.location.href, width: innerWidth, height: innerHeight };
            const _window = window;
            const _window2 = window;
            innerWidth = window.innerWidth;
            const tmp3 = obj4;
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
            const _window3 = window;
            innerHeight = window.innerHeight;
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
            closure_2_103(obj, flag);
            stylesheetManager.reset();
            shadowDomManager.init();
            const item = closure_87.forEach((lock) => lock.lock());
            const _document9 = document;
            let obj2 = {
              mirror,
              blockClass: str,
              blockSelector,
              unblockSelector,
              maskAllText,
              maskTextClass: str3,
              unmaskTextClass,
              maskTextSelector,
              unmaskTextSelector,
              inlineStylesheet,
              maskAllInputs: maskInputOptions,
              maskAttributeFn,
              maskInputFn,
              maskTextFn,
              slimDOM,
              dataURLOptions,
              recordCanvas,
              inlineImages,
              onSerialize(nodeName) {
                  let meta = "IFRAME" === nodeName.nodeName;
                  const _Boolean = Boolean;
                  if (meta) {
                    meta = mirror.getMeta(nodeName);
                  }
                  if (_Boolean(meta)) {
                    obj6.addIframe(nodeName);
                  }
                  let getAttribute = "LINK" === nodeName.nodeName;
                  const _Boolean2 = Boolean;
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
                    getAttribute = mirror.getMeta(nodeName);
                  }
                  if (_Boolean2(getAttribute)) {
                    stylesheetManager.trackLinkElement(nodeName);
                  }
                  let shadowRoot;
                  const _Boolean3 = Boolean;
                  if (nodeName != null) {
                    shadowRoot = nodeName.shadowRoot;
                  }
                  if (_Boolean3(shadowRoot)) {
                    const _document = document;
                    shadowDomManager.addShadowRoot(nodeName.shadowRoot, document);
                  }
                },
              onIframeLoad(contentWindow, arg1) {
                  obj6.attachIframe(contentWindow, arg1);
                  if (contentWindow.contentWindow) {
                    canvasManager.addWindow(contentWindow.contentWindow);
                  }
                  shadowDomManager.observeAttachShadow(contentWindow);
                },
              onStylesheetLoad(nodeName, attributes) {
                  stylesheetManager.attachLinkElement(nodeName, attributes);
                },
              onBlockedImageLoad(arg0, id, width) {
                  let obj3;
                  const obj2 = { id: id.id, attributes: obj3 };
                  obj = { adds: [], removes: [], texts: [], attributes: items };
                  obj3 = { style: size };
                  size = { width: "" + width.width + "px", height: "" + width.height + "px" };
                  items = [obj2];
                  if (typeof wrappedMutationEmit === "function") {
                    obj4 = { type: IncrementalSnapshot.IncrementalSnapshot, data: obj5 };
                    obj5 = { source: Mutation.Mutation };
                    const merged = Object.assign(obj);
                    le(obj4);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                },
              keepIframeSrcFn,
              ignoreCSSAttributes
            };
            obj5 = mirror;
            mirror = obj2.mirror;
            if (undefined === mirror) {
              const self = this;
              const self2 = this;
              mirror = new closure_23();
            }
            const blockClass = obj2.blockClass;
            str = "rr-block";
            if (undefined !== blockClass) {
              str = blockClass;
            }
            blockSelector = obj2.blockSelector;
            let tmp30 = null;
            if (undefined !== blockSelector) {
              tmp30 = blockSelector;
            }
            unblockSelector = obj2.unblockSelector;
            let tmp31 = null;
            if (undefined !== unblockSelector) {
              tmp31 = unblockSelector;
            }
            maskAllText = obj2.maskAllText;
            const maskTextClass = obj2.maskTextClass;
            str2 = "rr-mask";
            const tmp32 = undefined !== maskAllText && maskAllText;
            if (undefined !== maskTextClass) {
              str2 = maskTextClass;
            }
            unmaskTextClass = obj2.unmaskTextClass;
            let tmp33 = null;
            if (undefined !== unmaskTextClass) {
              tmp33 = unmaskTextClass;
            }
            maskTextSelector = obj2.maskTextSelector;
            let tmp34 = null;
            if (undefined !== maskTextSelector) {
              tmp34 = maskTextSelector;
            }
            unmaskTextSelector = obj2.unmaskTextSelector;
            let tmp35 = null;
            if (undefined !== unmaskTextSelector) {
              tmp35 = unmaskTextSelector;
            }
            inlineStylesheet = obj2.inlineStylesheet;
            inlineImages = obj2.inlineImages;
            recordCanvas = obj2.recordCanvas;
            const maskAllInputs = obj2.maskAllInputs;
            obj6 = undefined !== maskAllInputs && maskAllInputs;
            slimDOM = obj2.slimDOM;
            let tmp39 = undefined !== slimDOM;
            const tmp36 = undefined === inlineStylesheet || inlineStylesheet;
            const tmp37 = undefined !== inlineImages && inlineImages;
            const tmp38 = undefined !== recordCanvas && recordCanvas;
            ({ maskAttributeFn, maskTextFn, maskInputFn } = obj2);
            if (tmp39) {
              tmp39 = slimDOM;
            }
            ({ keepIframeSrcFn, dataURLOptions, preserveWhiteSpace, onSerialize, onIframeLoad, iframeLoadTimeout, onBlockedImageLoad, onStylesheetLoad, stylesheetLoadTimeout } = obj2);
            if (undefined === keepIframeSrcFn) {
              keepIframeSrcFn = () => false;
            }
            ignoreCSSAttributes = obj2.ignoreCSSAttributes;
            obj4 = { doc: _document9, mirror, blockClass: str, blockSelector: tmp30, unblockSelector: tmp31, maskAllText: tmp32, maskTextClass: str2, unmaskTextClass: tmp33, maskTextSelector: tmp34, unmaskTextSelector: tmp35, skipChild: false, inlineStylesheet: tmp36, maskInputOptions: obj6, maskAttributeFn, maskTextFn, maskInputFn, slimDOMOptions: null, dataURLOptions: null, inlineImages: null, recordCanvas: null, preserveWhiteSpace: null, onSerialize: null, onIframeLoad: null, iframeLoadTimeout: null, onBlockedImageLoad: null, onStylesheetLoad: null, stylesheetLoadTimeout: null, keepIframeSrcFn: null, newlyAddedElement: false, ignoreCSSAttributes: null };
            if (true === obj6) {
              obj6 = { color: true, date: true, "datetime-local": true, email: true, month: true, number: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true, textarea: true, select: true };
            } else if (false === obj6) {
              obj6 = {};
            }
            if (true !== tmp39) {
              if ("all" !== tmp39) {
                obj7 = tmp39;
                if (false === tmp39) {
                  obj7 = {};
                }
              }
              obj4.slimDOMOptions = obj7;
              obj4.dataURLOptions = dataURLOptions;
              obj4.inlineImages = tmp37;
              obj4.recordCanvas = tmp38;
              obj4.preserveWhiteSpace = preserveWhiteSpace;
              obj4.onSerialize = onSerialize;
              obj4.onIframeLoad = onIframeLoad;
              obj4.iframeLoadTimeout = iframeLoadTimeout;
              obj4.onBlockedImageLoad = onBlockedImageLoad;
              obj4.onStylesheetLoad = onStylesheetLoad;
              obj4.stylesheetLoadTimeout = stylesheetLoadTimeout;
              obj4.keepIframeSrcFn = keepIframeSrcFn;
              if (undefined === ignoreCSSAttributes) {
                const _Set = Set;
                const self3 = this;
                const self4 = this;
                ignoreCSSAttributes = new Set([]);
              }
              obj4.ignoreCSSAttributes = ignoreCSSAttributes;
              const tmp40Result = serializeNodeWithId(_document9, obj4);
              if (tmp40Result) {
                obj8 = { type: tmp3.FullSnapshot, data: obj9 };
                const _window4 = window;
                obj9 = { node: tmp40Result, initialOffset: getWindowScroll(window) };
                closure_2_103(obj8);
                const item1 = closure_87.forEach((unlock) => unlock.unlock());
                const _document10 = document;
                if (adoptedStyleSheets) {
                  const _document11 = document;
                  adoptedStyleSheets = document.adoptedStyleSheets.length > 0;
                }
                if (adoptedStyleSheets) {
                  const _document12 = document;
                  const _document13 = document;
                  stylesheetManager.adoptStyleSheets(document.adoptedStyleSheets, obj5.getId(document));
                }
              } else {
                const _console = console;
                return console.warn("Failed to snapshot the document");
              }
            }
            obj7 = { script: true, comment: true, headFavicon: true, headWhitespace: true, headMetaDescKeywords: "all" === tmp39, headMetaSocial: true, headMetaRobots: true, headMetaHttpEquiv: true, headMetaAuthorship: true, headMetaVerification: true };
            obj10 = { script: true, comment: true, headFavicon: true, headWhitespace: true, headMetaDescKeywords: "all" === tmp39, headMetaSocial: true, headMetaRobots: true, headMetaHttpEquiv: true, headMetaAuthorship: true, headMetaVerification: true };
          }
        };
        try {
          items = [];
          observe = function observe(doc) {
            let mapped;
            keepIframeSrcFn = initObservers;
            if (typeof callbackWrapper === "function") {
              if (c79) {
                keepIframeSrcFn = () => {
                  items = [...arguments];
                  try {
                    const items1 = [];
                    HermesBuiltin.arraySpread(items1, items, 0);
                    return HermesBuiltin.apply(fn, items1, undefined);
                  } catch (tmp8) {
                    if (closure_2_79) {
                      if (true === tmp9(tmp8)) {
                        return () => {

                        };
                      }
                    }
                    throw tmp8;
                  }
                };
              }
              obj = {
                onMutation,
                mutationCb: wrappedMutationEmit,
                mousemoveCb(positions, source) {
                    let obj2;
                    obj = { type: IncrementalSnapshot.IncrementalSnapshot, data: obj2 };
                    obj2 = { source, positions };
                    le(obj);
                  },
                mouseInteractionCb(arg0) {
                    let obj2;
                    obj = { type: IncrementalSnapshot.IncrementalSnapshot, data: obj2 };
                    obj2 = { source: Mutation.MouseInteraction };
                    const merged = Object.assign(arg0);
                    le(obj);
                  },
                scrollCb: wrappedScrollEmit,
                viewportResizeCb(size) {
                    let obj2;
                    obj = { type: IncrementalSnapshot.IncrementalSnapshot, data: obj2 };
                    obj2 = { source: Mutation.ViewportResize };
                    const merged = Object.assign(size);
                    le(obj);
                  },
                inputCb(arg0) {
                    let obj2;
                    obj = { type: IncrementalSnapshot.IncrementalSnapshot, data: obj2 };
                    obj2 = { source: Mutation.Input };
                    const merged = Object.assign(arg0);
                    le(obj);
                  },
                mediaInteractionCb(arg0) {
                    let obj2;
                    obj = { type: IncrementalSnapshot.IncrementalSnapshot, data: obj2 };
                    obj2 = { source: Mutation.MediaInteraction };
                    const merged = Object.assign(arg0);
                    le(obj);
                  },
                styleSheetRuleCb(arg0) {
                    let obj2;
                    obj = { type: IncrementalSnapshot.IncrementalSnapshot, data: obj2 };
                    obj2 = { source: Mutation.StyleSheetRule };
                    const merged = Object.assign(arg0);
                    le(obj);
                  },
                styleDeclarationCb(arg0) {
                    let obj2;
                    obj = { type: IncrementalSnapshot.IncrementalSnapshot, data: obj2 };
                    obj2 = { source: Mutation.StyleDeclaration };
                    const merged = Object.assign(arg0);
                    le(obj);
                  },
                canvasMutationCb: wrappedCanvasMutationEmit,
                fontCb(arg0) {
                    let obj2;
                    obj = { type: IncrementalSnapshot.IncrementalSnapshot, data: obj2 };
                    obj2 = { source: Mutation.Font };
                    const merged = Object.assign(arg0);
                    le(obj);
                  },
                selectionCb(arg0) {
                    let obj2;
                    obj = { type: IncrementalSnapshot.IncrementalSnapshot, data: obj2 };
                    obj2 = { source: Mutation.Selection };
                    const merged = Object.assign(arg0);
                    le(obj);
                  },
                customElementCb(arg0) {
                    let obj2;
                    obj = { type: IncrementalSnapshot.IncrementalSnapshot, data: obj2 };
                    obj2 = { source: Mutation.CustomElement };
                    const merged = Object.assign(arg0);
                    le(obj);
                  },
                blockClass: str,
                ignoreClass: str2,
                ignoreSelector,
                maskAllText,
                maskTextClass: str3,
                unmaskTextClass,
                maskTextSelector,
                unmaskTextSelector,
                maskInputOptions,
                inlineStylesheet,
                sampling,
                recordDOM,
                recordCanvas,
                inlineImages,
                userTriggeredOnInput,
                collectFonts,
                doc,
                maskAttributeFn,
                maskInputFn,
                maskTextFn,
                keepIframeSrcFn,
                blockSelector,
                unblockSelector,
                slimDOMOptions,
                dataURLOptions,
                mirror,
                iframeManager: obj6,
                stylesheetManager,
                shadowDomManager,
                processedNodeManager,
                canvasManager,
                ignoreCSSAttributes,
                plugins: mapped
              };
              mapped = undefined;
              if (plugins != null) {
                const found = plugins.filter((observer) => observer.observer);
                if (found != null) {
                  mapped = found.map((observer) => {
                    obj = {
                      observer: observer.observer,
                      options: observer.options,
                      callback(payload) {
                        let obj2;
                        obj = { type: IncrementalSnapshot.Plugin, data: obj2 };
                        obj2 = { plugin: observer.name, payload };
                        le(obj);
                      }
                    };
                    return obj;
                  });
                }
              }
              if (!mapped) {
                mapped = [];
              }
              return keepIframeSrcFn(obj, {});
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          };
          obj6.addLoadListener((contentDocument) => {
            try {
              items.push(observe(contentDocument.contentDocument));
            } catch (tmp5) {
              const _console = console;
              console.warn(tmp5);
            }
          });
          init = function init() {
            takeFullSnapshot2();
            items.push(observe(document));
          };
          let _document = document;
          if ("interactive" !== document.readyState) {
            let _document2 = document;
            if ("complete" !== document.readyState) {
              arr3.push(on("DOMContentLoaded", () => {
                obj = { type: obj4.DomContentLoaded, data: {} };
                closure_2_103(obj);
                if ("DOMContentLoaded" === recordAfter) {
                  if (typeof init === "function") {
                    takeFullSnapshot2();
                    const _document = document;
                    items.push(observe(document));
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              }));
              const _window5 = window;
              items.push(on("load", () => {
                obj = { type: obj4.Load, data: {} };
                closure_2_103(obj);
                if ("load" === recordAfter) {
                  if (typeof init === "function") {
                    takeFullSnapshot2();
                    const _document = document;
                    items.push(observe(document));
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              }, window));
            }
            return () => {
              const item = items.forEach((fn) => fn());
              processedNodeManager.destroy();
              c104 = undefined;
              c79 = undefined;
            };
          }
          init();
        } catch (tmp61) {
          let _console = console;
          console.warn(tmp61);
        }
      }
      obj5 = { mutationCb: wrappedMutationEmit, scrollCb: wrappedScrollEmit, bypassOptions: obj9, mirror: navigation };
      obj9 = { onMutation, blockClass: str, blockSelector: tmp, unblockSelector: tmp2, maskAllText: tmp4, maskTextClass: str3, unmaskTextClass: tmp5, maskTextSelector: tmp6, unmaskTextSelector: tmp7, inlineStylesheet: tmp8, maskInputOptions, dataURLOptions, maskAttributeFn, maskTextFn, maskInputFn, recordCanvas: tmp10, inlineImages: tmp12, sampling, slimDOMOptions: tmp25, iframeManager: obj6, stylesheetManager: tmp30, canvasManager: tmp49, keepIframeSrcFn, processedNodeManager: tmp45, ignoreCSSAttributes };
      const self13 = this;
      const self14 = this;
      tmp52 = new closure_102(obj5);
    }
    obj10 = { mirror: navigation, mutationCb: wrappedMutationEmit, stylesheetManager: tmp30, recordCrossOriginIframes: tmp11, wrappedEmit: le };
    let tmp35 = le;
    const self7 = this;
    const self8 = this;
    let tmp36 = obj10;
    obj6 = new closure_100(obj10);
  }
  obj11 = { script: true, comment: true, headFavicon: true, headWhitespace: true, headMetaSocial: true, headMetaRobots: true, headMetaHttpEquiv: true, headMetaVerification: true, headMetaAuthorship: tmp26, headMetaDescKeywords: tmp26 };
  tmp25 = obj11;
}
function addBreadcrumbEvent(triggerUserActivity, category) {
  let closure_0 = triggerUserActivity;
  let closure_1 = category;
  if ("sentry.transaction" !== category.category) {
    const items = ["ui.click", "ui.input"];
    if (items.includes(category.category)) {
      triggerUserActivity.triggerUserActivity();
    } else {
      const result = triggerUserActivity.checkAndHandleExpiredSession();
    }
    triggerUserActivity.addUpdate(() => {
      let normalizer;
      let num;
      let obj2;
      obj = { type: Custom.Custom, timestamp: 1000 * num, data: obj2 };
      num = _null.timestamp;
      const throttledAddEvent = obj.throttledAddEvent;
      if (!num) {
        num = 0;
      }
      obj2 = { tag: "breadcrumb", payload: normalizer.normalize(_null, 10, 1000) };
      normalizer = self(closure_2_1[8]);
      throttledAddEvent(obj);
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
  if (tmp2) {
    tmp2 = target;
    if (target instanceof globalThis.Element) {
      tmp2 = target.closest("button,a") || target;
      target.closest("button,a") || target;
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
  let MouseInteraction;
  function isIncrementalEvent(type) {
    return 3 === type.type;
  }
  function isIncrementalMouseInteraction(data) {
    return data.data.source === MouseInteraction.MouseInteraction;
  }
  try {
    if (isIncrementalEvent(data)) {
      const source = data.data.source;
      const tmp3 = source;
      if (set.has(source)) {
        registerMutation.registerMutation(data.timestamp);
      }
      if (tmp3 === obj5.Scroll) {
        registerMutation.registerScroll(data.timestamp);
      }
      if (isIncrementalMouseInteraction(data)) {
        data = data.data;
        const mirror = record.mirror;
        const type = data.type;
        const node = mirror.getNode(data.id);
        const tmp13 = node instanceof globalThis.HTMLElement && type === obj6.Click;
        if (tmp13) {
          registerMutation.registerClick(node);
        }
      }
    }
  } catch (err) {
  }
}
function getBaseDomBreadcrumb(arg0, message) {
  let mapped1;
  let obj3;
  const mirror = record.mirror;
  const id = mirror.getId(arg0);
  let node = id;
  if (node) {
    const mirror2 = record.mirror;
    node = mirror2.getNode(id);
  }
  let meta = node;
  if (meta) {
    const mirror3 = record.mirror;
    meta = mirror3.getMeta(node);
  }
  let tmp5 = null;
  if (meta) {
    tmp5 = null;
    if (meta.type === obj10.Element) {
      tmp5 = meta;
    }
  }
  obj = { message, data: obj5 };
  if (tmp5) {
    const obj2 = { nodeId: id, node: obj3 };
    const _Array = Array;
    obj3 = { id, tagName: tmp5.tagName, textContent: mapped1.join(""), attributes: obj4 };
    const arr = Array.from(tmp5.childNodes);
    const mapped = arr.map((type) => type.type === RN.Text && type.textContent);
    const _Boolean = Boolean;
    const found = mapped.filter(Boolean);
    mapped1 = found.map((item) => item.trim());
    const attributes = tmp5.attributes;
    const tmp8 = !attributes["data-sentry-component"] && attributes["data-sentry-element"];
    if (tmp8) {
      attributes["data-sentry-component"] = attributes["data-sentry-element"];
    }
    obj4 = {};
    for (const key10049 in attributes) {
      if (!set1.has(key10049)) {
        continue;
      } else {
        let tmp10 = "data-testid" !== key10049 && "data-test-id" !== key10049;
        let str5 = key10049;
        if (!tmp10) {
          str5 = "testId";
        }
        obj4[str5] = attributes[key10049];
        continue;
      }
      continue;
    }
    obj5 = obj2;
  } else {
    obj5 = {};
  }
  return obj;
}
function createPerformanceEntry(arg0) {
  let tmpResult = null;
  if (obj11[arg0.entryType]) {
    tmpResult = tmp(arg0);
  }
  return tmpResult;
}
function getLargestContentfulPaint(arg0) {
  let mapped;
  let obj3;
  let rating;
  let value;
  let element;
  if (arg0.entries[arg0.entries.length - 1] != null) {
    element = tmp.element;
  }
  let tmp3;
  if (element) {
    const items = [arg0.entries[arg0.entries.length - 1].element];
    tmp3 = items;
  }
  ({ value, rating } = arg0);
  obj = _mod693;
  const result = ((obj.browserPerformanceTimeOrigin() || _mod693.GLOBAL_OBJ.performance.timeOrigin) + value) / 1000;
  const obj2 = { type: "web-vital", name: "largest-contentful-paint", start: result, end: result, data: obj3 };
  obj3 = { value, size: value, rating, nodeIds: mapped, attributions: "formatToPlainString" };
  mapped = undefined;
  obj.browserPerformanceTimeOrigin() || _mod693.GLOBAL_OBJ.performance.timeOrigin;
  if (tmp3) {
    mapped = tmp3.map(f82378);
  }
  return obj2;
}
function isLayoutShift(item10012) {
  return undefined !== item10012.sources;
}
function getCumulativeLayoutShift(value) {
  const items = [];
  const items1 = [];
  const entries = value.entries;
  for (const item10012 of entries) {
    if (isLayoutShift(item10012)) {
      let items2 = [];
      let sources = item10012.sources;
      for (const item10023 of sources) {
        if (item10023.node) {
          let arr = items1.push(item10023.node);
          let mirror = record.mirror;
          let id = mirror.getId(item10023.node);
          if (id) {
            let arr2 = items2.push(tmp10);
          }
        }
        continue;
      }
      obj = { value: item10012.value, nodeIds: tmp16 };
      let tmp16;
      let push = items.push;
      if (items2.length) {
        tmp16 = items2;
      }
      let arr3 = push(obj);
    }
    continue;
  }
  return getWebVital(value, "cumulative-layout-shift", items1, items);
}
function getInteractionToNextPaint(arg0) {
  let mapped;
  let obj3;
  let rating;
  let value;
  let target;
  if (arg0.entries[arg0.entries.length - 1] != null) {
    target = tmp.target;
  }
  let tmp3;
  if (target) {
    const items = [arg0.entries[arg0.entries.length - 1].target];
    tmp3 = items;
  }
  ({ value, rating } = arg0);
  obj = _mod693;
  const result = ((obj.browserPerformanceTimeOrigin() || _mod693.GLOBAL_OBJ.performance.timeOrigin) + value) / 1000;
  const obj2 = { type: "web-vital", name: "interaction-to-next-paint", start: result, end: result, data: obj3 };
  obj3 = { value, size: value, rating, nodeIds: mapped, attributions: "formatToPlainString" };
  mapped = undefined;
  obj.browserPerformanceTimeOrigin() || _mod693.GLOBAL_OBJ.performance.timeOrigin;
  if (tmp3) {
    mapped = tmp3.map(f82378);
  }
  return obj2;
}
function getWebVital(value, name, items1, items) {
  let mapped;
  let obj3;
  value = value.value;
  const rating = value.rating;
  obj = _mod693;
  const result = ((obj.browserPerformanceTimeOrigin() || _mod693.GLOBAL_OBJ.performance.timeOrigin) + value) / 1000;
  const obj2 = { type: "web-vital", name, start: result, end: result, data: obj3 };
  obj3 = { value, size: value, rating, nodeIds: mapped, attributions: items };
  mapped = undefined;
  obj.browserPerformanceTimeOrigin() || _mod693.GLOBAL_OBJ.performance.timeOrigin;
  if (items1) {
    mapped = items1.map(f82378);
  }
  return obj2;
}
function hasSessionStorage() {
  try {
    const sessionStorage = "sessionStorage" in _mod693.GLOBAL_OBJ && _mod693.GLOBAL_OBJ.sessionStorage;
    return sessionStorage;
  } catch (err) {
    return false;
  }
}
function clearSession(arg0) {
  function deleteSession() {
    if (hasSessionStorage()) {
      try {
        const sessionStorage = require("module_693").GLOBAL_OBJ.sessionStorage;
        sessionStorage.removeItem(sentryReplaySession);
      } catch (err) {
      }
    }
  }
  deleteSession();
  arg0.session = undefined;
}
function saveSession(session) {
  if (hasSessionStorage()) {
    try {
      const sessionStorage = _mod693.GLOBAL_OBJ.sessionStorage;
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
    obj = _mod693;
    id = obj.uuid4();
  }
  return { id, started: id.started || timestamp, lastActivity: id.lastActivity || timestamp, segmentId: id.segmentId || 0, sampled: id.sampled, previousSessionId: id.previousSessionId, dirty: id.dirty || false };
}
function createSession(allowBuffering, arg1) {
  let sessionSampleRate;
  let stickySession;
  ({ sessionSampleRate, stickySession } = allowBuffering);
  allowBuffering = allowBuffering.allowBuffering;
  if (stickySession === undefined) {
    stickySession = false;
  }
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let tmp = undefined !== sessionSampleRate;
  const previousSessionId = obj.previousSessionId;
  if (tmp) {
    const _Math = Math;
    tmp = Math.random() < sessionSampleRate;
  }
  let str = "session";
  if (!tmp) {
    str = allowBuffering && "buffer";
  }
  const obj2 = { sampled: str, previousSessionId };
  const timestamp = Date.now();
  let id = obj2.id;
  if (!id) {
    const obj3 = _mod693;
    id = obj3.uuid4();
  }
  obj4 = { id, started: obj2.started || timestamp, lastActivity: obj2.lastActivity || timestamp, segmentId: obj2.segmentId || 0, sampled: obj2.sampled, previousSessionId: obj2.previousSessionId, dirty: obj2.dirty || false };
  if (stickySession) {
    saveSession(obj4);
  }
  return obj4;
}
function isSessionExpired(started, arg1) {
  let maxReplayDuration;
  let sessionIdleExpire;
  let targetTime;
  ({ maxReplayDuration, sessionIdleExpire, targetTime } = arg1);
  if (targetTime === undefined) {
    const _Date = Date;
    targetTime = Date.now();
  }
  started = started.started;
  let tmp3 = targetTime;
  if (targetTime === undefined) {
    const _Date2 = Date;
    const self = this;
    const self2 = this;
    tmp3 = +new Date();
    const date = new Date();
  }
  let tmp7 = null === started || undefined === maxReplayDuration || maxReplayDuration < 0;
  if (!tmp7) {
    tmp7 = 0 !== maxReplayDuration && started + maxReplayDuration <= tmp3;
  }
  if (!tmp7) {
    const lastActivity = started.lastActivity;
    if (targetTime === undefined) {
      const _Date3 = Date;
      const self3 = this;
      const self4 = this;
      targetTime = +new Date();
      const date1 = new Date();
    }
    let tmp12 = null === lastActivity || undefined === sessionIdleExpire || sessionIdleExpire < 0;
    if (!tmp12) {
      tmp12 = 0 !== sessionIdleExpire && lastActivity + sessionIdleExpire <= targetTime;
    }
    tmp7 = tmp12;
  }
  return tmp7;
}
function loadOrCreateSession(arg0, stickySession) {
  let maxReplayDuration;
  let previousSessionId;
  let sessionIdleExpire;
  let tmp5;
  function fetchSession() {
    if (hasSessionStorage()) {
      try {
        const sessionStorage = require("module_693").GLOBAL_OBJ.sessionStorage;
        const value = sessionStorage.getItem(sentryReplaySession);
        const tmp6 = value;
        if (tmp6) {
          const _JSON = JSON;
          const parsed = JSON.parse(value);
          if (__SENTRY_DEBUG__2) {
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
  }
  stickySession = stickySession.stickySession;
  ({ sessionIdleExpire, maxReplayDuration, previousSessionId } = arg0);
  if (stickySession) {
    stickySession = fetchSession();
  }
  if (stickySession) {
    const obj2 = { sessionIdleExpire, maxReplayDuration };
    let tmp7 = isSessionExpired(stickySession, obj2);
    if (tmp7) {
      tmp7 = "buffer" !== stickySession.sampled || 0 !== stickySession.segmentId;
      const tmp8 = "buffer" !== stickySession.sampled || 0 !== stickySession.segmentId;
    }
    let tmp9 = stickySession;
    if (tmp7) {
      if (__SENTRY_DEBUG__2) {
        closure_133.infoTick("Session in sessionStorage is expired, creating new one...");
      }
      const obj3 = { previousSessionId: stickySession.id };
      tmp9 = createSession(stickySession, obj3);
    }
    tmp5 = tmp9;
  } else {
    if (__SENTRY_DEBUG__2) {
      closure_133.infoTick("Creating new session");
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
            if (__SENTRY_DEBUG__2) {
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
    _addEvent(eventBuffer, timestamp, c1);
    flag3 = true;
  }
  return flag3;
}
function _addEvent(eventBuffer, timestamp, c1) {
  return obj(...arguments);
}
let obj = function _addEvent3() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_1;
    let closure_5;
    function maybeApplyCallback(type, beforeAddRecordingEvent) {
      let Custom;
      function isCustomEvent(type) {
        return type.type === Custom.Custom;
      }
      try {
        if (typeof beforeAddRecordingEvent === "function") {
          if (isCustomEvent(type)) {
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
    }
    let closure_0 = arg0;
    let closure_2 = arg2;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let tmp36;
      let c6;
      try {
        let closure_3;
        let str;
        let str2;
        let eventBuffer;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp;
            closure_2 = undefined;
            closure_3 = undefined;
            str = undefined;
            tmp36 = undefined;
            str2 = undefined;
            eventBuffer = closure_0.eventBuffer;
            if (eventBuffer) {
              closure_2 = tmp34;
              c6 = 1;
              let clearResult = tmp43 && tmp34 && eventBuffer.clear();
              if (closure_2) {
                eventBuffer.hasCheckout = true;
                eventBuffer.waitForCheckout = false;
              }
              const tmp35 = maybeApplyCallback(tmp42, closure_0.getOptions().beforeAddRecordingEvent);
              if (tmp35) {
                c7 = 2;
                c8 = 1;
                obj5 = { value: eventBuffer.addEvent(tmp35), done: false };
                return obj5;
              } else {
                c6 = 0;
                c8 = 3;
                return { value: "IconComponent", done: null };
              }
            }
            c8 = 3;
            return { value: null, done: true };
          }
        } else if (1 === c7) {
          c6 = 0;
          let closure_7 = tmp36;
          const tmp8 = closure_7 && closure_7 instanceof closure_132_134;
          closure_3 = tmp8;
          str = "addEvent";
          if (closure_3) {
            str = "addEventSizeExceeded";
          }
          obj4 = closure_132_0(closure_132_1[8]);
          tmp36 = obj4.getClient();
          const tmp17 = tmp36;
          if (tmp17) {
            str2 = "internal_sdk_error";
            if (closure_3) {
              str2 = "buffer_overflow";
            }
            tmp36.recordDroppedEvent(str2, "replay");
          }
          const tmp24 = closure_3;
          if (tmp24) {
            const tmp25 = closure_2;
            if (tmp25) {
              eventBuffer.clear();
              eventBuffer.waitForCheckout = true;
              c8 = 3;
              return { value: null, done: true };
            }
          }
          closure_0.handleException(closure_7);
          obj6 = { reason: str };
          clearResult = str;
          c7 = 3;
          c8 = 1;
          obj7 = { value: closure_0.stop(obj6), done: false };
          return obj7;
        } else if (2 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            obj8 = { value, done: true };
            return obj8;
          } else {
            c6 = 0;
            c8 = 3;
            const obj9 = { value, done: true };
            return obj9;
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp36) {
        if (0 === c6) {
          c8 = 3;
          throw tmp36;
        } else {
          c7 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function resetReplayIdOnDynamicSamplingContext() {
  obj = _mod693;
  const currentScope = obj.getCurrentScope();
  const dsc = currentScope.getPropagationContext().dsc;
  if (dsc) {
    delete dsc["replay_id"];
  }
  const tmpResult = _mod693;
  const activeSpan = tmpResult.getActiveSpan();
  if (activeSpan) {
    _mod693;
    delete obj4.getDynamicSamplingContextFromSpan(obj4, tmp3)["replay_id"];
  }
}
function createPerformanceSpans(arg0, arr) {
  let closure_0 = arg0;
  return arr.map((op) => {
    const start = op.start;
    obj = { type: Custom.Custom, timestamp: start, data: obj2 };
    obj2 = { tag: "performanceSpan", payload: { op: op.type, description: op.name, startTimestamp: start, endTimestamp: op.end, data: op.data } };
    let throttledAddEventResult = closure_0.throttledAddEvent(obj);
    if (typeof throttledAddEventResult === "string") {
      throttledAddEventResult = Promise.resolve(null);
    }
    return throttledAddEventResult;
  });
}
function addNetworkBreadcrumb(isEnabled, name) {
  _require = isEnabled;
  dependencyMap = name;
  const isEnabledResult = isEnabled.isEnabled() && null !== name;
  if (isEnabledResult) {
    let isSentryRequestUrlResult = !__SENTRY_DEBUG__2;
    name = name.name;
    if (__SENTRY_DEBUG__2) {
      isSentryRequestUrlResult = !isEnabled.getOptions()._experiments.traceInternals;
    }
    if (isSentryRequestUrlResult) {
      const isSentryRequestUrl = require("module_693").isSentryRequestUrl;
      require("module_693");
      obj = require("module_693");
      isSentryRequestUrlResult = isSentryRequestUrl(name, obj.getClient());
    }
    if (!isSentryRequestUrlResult) {
      isEnabled.addUpdate(() => {
        const items = [name];
        const mapped = items.map((op) => {
          const start = op.start;
          obj = { type: Custom.Custom, timestamp: start, data: obj2 };
          obj2 = { tag: "performanceSpan", payload: { op: op.type, description: op.name, startTimestamp: start, endTimestamp: op.end, data: op.data } };
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
function getBodySize(size) {
  const tmp = size;
  if (tmp) {
    const _TextEncoder = TextEncoder;
    const self = this;
    const self2 = this;
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
            obj = _addMeasureSpans;
            return encoder.encode(obj.serializeFormData(size)).length;
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
  let items1;
  let obj3;
  obj = {};
  if (_meta) {
    const merged = Object.assign(_meta._meta);
    const items = [];
    const tmp4 = obj.warnings || [];
    items[HermesBuiltin.arraySpread(items, tmp4, 0)] = arg1;
    obj.warnings = items;
    _meta._meta = obj;
    return _meta;
  } else {
    const obj2 = { headers: obj, size: "Array", _meta: obj3 };
    obj3 = { warnings: items1 };
    items1 = [arg1];
    return obj2;
  }
}
function makeNetworkReplayBreadcrumb(type, startTimestamp) {
  let obj3;
  let tmp = null;
  if (startTimestamp) {
    obj = { type, start: startTimestamp.startTimestamp / 1000, end: startTimestamp.endTimestamp / 1000, name: startTimestamp.url, data: obj3 };
    obj3 = { method: null, statusCode: null, request: null, response: null };
    ({ method: obj2.method, statusCode: obj2.statusCode, request: obj2.request, response: obj2.response } = startTimestamp);
    tmp = obj;
  }
  return tmp;
}
function buildSkippedNetworkRequestOrResponse(size) {
  return { headers: {}, size, _meta: { warnings: ["URL_SKIPPED"] } };
}
function buildNetworkRequestOrResponse(headers, size, body) {
  let warnings;
  const tmp = size;
  if (!tmp) {
    const _Object = Object;
  }
  if (size) {
    const obj3 = { headers, size };
    if (body) {
      ({ warnings, body: obj2.body } = normalizeNetworkBody(body));
      let length;
      normalizeNetworkBody(body);
      if (warnings != null) {
        length = warnings.length;
      }
      if (length) {
        obj5 = { warnings };
        obj3._meta = obj5;
      }
      return obj3;
    } else {
      return obj3;
    }
  } else {
    return { headers };
  }
}
function urlMatches(url, networkDetailAllowUrls) {
  const baseURI = _mod693.GLOBAL_OBJ.document.baseURI;
  let substr = url;
  if (!url.startsWith("http://")) {
    substr = url;
    if (!url.startsWith("https://")) {
      substr = url;
      if (!url.startsWith(_mod693.GLOBAL_OBJ.location.origin)) {
        const _URL = URL;
        const self = this;
        const self2 = this;
        const uRL = new URL(url, baseURI);
        const _URL2 = URL;
        const self3 = this;
        const self4 = this;
        const origin = uRL.origin;
        const uRL1 = new URL(baseURI);
        substr = url;
        if (origin === uRL1.origin) {
          const href = uRL.href;
          substr = href;
          if (!url.endsWith("/")) {
            substr = href;
            if (href.endsWith("/")) {
              substr = href.slice(0, -1);
            }
          }
        }
      }
    }
  }
  const tmpResult = _mod693;
  return tmpResult.stringMatchesSomePattern(substr, networkDetailAllowUrls);
}
obj = function _captureFetchBreadcrumbToReplay() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let replay = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      function _prepareFetchData(replay, arg1, arg2) {
        return closure_1_159(...arguments);
      }
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              replay = closure_2;
              closure_1 = undefined;
              closure_2 = undefined;
              c6 = 1;
              c7 = 2;
              c8 = 1;
              obj4 = { value: _prepareFetchData(replay, closure_1, closure_2), done: false };
              return obj4;
            }
          } else {
            if (1 === c7) {
              c6 = 0;
              closure_3 = closure_5;
              if (closure_132_130) {
                closure_132_133.exception(closure_3, "Failed to capture fetch breadcrumb");
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              closure_2 = closure_132_154("resource.fetch", closure_1);
              closure_132_151(replay.replay, closure_2);
              c6 = 0;
            }
            c8 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp24) {
          closure_5 = tmp24;
          if (0 === c6) {
            c8 = 3;
            throw tmp24;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _prepareFetchData2() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let method;
    let data = arg0;
    let startTimestamp = arg1;
    let closure_2 = arg2;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value, arg2) => {
      let c3;
      let request_body_size;
      let response_body_size;
      let status_code;
      let tmp16;
      function _getRequestInfo(networkRequestHeaders, input, request_body_size) {
        let items1;
        let obj19;
        let tmp16;
        let tmp17;
        let warnings;
        const prop = networkRequestHeaders.networkRequestHeaders;
        const networkCaptureBodies = networkRequestHeaders.networkCaptureBodies;
        if (input) {
          if (1 === input.length) {
            if (typeof input[0] !== "string") {
              const first = input[0];
              if (first) {
                const headers2 = first.headers;
                if (headers2) {
                  let obj3;
                  const _Headers2 = Headers;
                  if (headers2 instanceof Headers) {
                    const obj2 = {};
                    const item = prop.forEach((item) => {
                      if (headers2.get(item)) {
                        obj2[item] = headers2.get(item);
                      }
                    });
                    obj3 = obj2;
                  } else {
                    const _Array2 = Array;
                    if (Array.isArray(headers2)) {
                      obj3 = {};
                    } else {
                      const _Object2 = Object;
                      const entries = Object.entries(headers2);
                      obj3 = entries.reduce((acc, item) => {
                        let str;
                        let tmp;
                        [str, tmp] = item;
                        const formatted = str.toLowerCase();
                        const hasItem = networkResponseHeaders.includes(formatted) && result[str];
                        if (hasItem) {
                          acc[formatted] = tmp;
                        }
                        return acc;
                      }, {});
                    }
                  }
                  obj4 = obj3;
                } else {
                  obj4 = {};
                }
                obj5 = obj4;
              } else {
                obj5 = {};
              }
              obj10 = obj5;
            }
            obj = obj10;
          }
          if (2 === input.length) {
            let obj9;
            if (input[1]) {
              const headers = tmp2.headers;
              if (headers) {
                const _Headers = Headers;
                if (headers instanceof Headers) {
                  obj6 = {};
                  const item1 = prop.forEach((item) => {
                    if (headers2.get(item)) {
                      obj2[item] = headers2.get(item);
                    }
                  });
                  obj7 = obj6;
                } else {
                  const _Array = Array;
                  if (Array.isArray(headers)) {
                    obj7 = {};
                  } else {
                    const _Object = Object;
                    const entries1 = Object.entries(headers);
                    obj7 = entries1.reduce((acc, item) => {
                      let str;
                      let tmp;
                      [str, tmp] = item;
                      const formatted = str.toLowerCase();
                      const hasItem = networkResponseHeaders.includes(formatted) && result[str];
                      if (hasItem) {
                        acc[formatted] = tmp;
                      }
                      return acc;
                    }, {});
                  }
                }
                obj8 = obj7;
              } else {
                obj8 = {};
              }
              obj9 = obj8;
            } else {
              obj9 = {};
            }
            obj10 = obj9;
          } else {
            obj10 = {};
          }
        } else {
          obj = {};
        }
        if (networkCaptureBodies) {
          let tmp19;
          const obj13 = data(startTimestamp[9]);
          const fetchRequestArgBody = obj13.getFetchRequestArgBody(input);
          const obj14 = data(startTimestamp[9]);
          [tmp16, tmp17] = response(obj14.getBodyString(fetchRequestArgBody, closure_1_133), 2);
          response(obj14.getBodyString(fetchRequestArgBody, closure_1_133), 2);
          if (request_body_size) {
            if (request_body_size) {
              obj11 = { headers: obj, size: request_body_size };
              if (tmp16) {
                ({ warnings, body: obj16.body } = normalizeNetworkBody(tmp16));
                let length;
                normalizeNetworkBody(tmp16);
                if (warnings != null) {
                  length = warnings.length;
                }
                tmp19 = obj11;
                if (length) {
                  const obj12 = { warnings };
                  obj11._meta = obj12;
                  tmp19 = obj11;
                }
              } else {
                tmp19 = obj11;
              }
            } else {
              tmp19 = { headers: obj };
              const obj15 = { headers: obj };
            }
          } else {
            const _Object4 = Object;
          }
          if (tmp17) {
            let obj18;
            const obj17 = {};
            if (tmp19) {
              const merged = Object.assign(tmp19._meta);
              const items = [];
              const tmp25 = obj17.warnings || [];
              items[HermesBuiltin.arraySpread(items, tmp25, 0)] = tmp17;
              obj17.warnings = items;
              tmp19._meta = obj17;
              obj18 = tmp19;
            } else {
              obj18 = { headers: obj17, size: "Array", _meta: obj19 };
              obj19 = { warnings: items1 };
              items1 = [tmp17];
            }
            return obj18;
          } else {
            return tmp19;
          }
        } else {
          let tmp9;
          if (request_body_size) {
            if (request_body_size) {
              tmp9 = { headers: obj, size: request_body_size };
              const obj20 = { headers: obj, size: request_body_size };
            } else {
              tmp9 = { headers: obj };
              const obj37 = { headers: obj };
            }
          } else {
            const _Object3 = Object;
          }
          return tmp9;
        }
      }
      function _getResponseInfo(arg0, arg1, response, response_body_size) {
        return closure_1_160(...arguments);
      }
      if (arg0 === 1) {
        throw value;
      }
      if (arg0 === 2) {
        return value;
      }
      let tmp25 = startTimestamp;
      const _Date = Date;
      const timestamp = Date.now();
      startTimestamp = startTimestamp.startTimestamp ?? timestamp;
      const endTimestamp = tmp25.endTimestamp ?? timestamp;
      data = data.data;
      const url = data.url;
      ({ method: c3, status_code } = data);
      if (undefined === status_code) {
        status_code = 0;
      }
      ({ request_body_size, response_body_size } = data);
      const tmp14 = urlMatches(url, closure_2.networkDetailAllowUrls) && !urlMatches(url, closure_2.networkDetailDenyUrls);
      if (tmp14) {
        tmp16 = _getRequestInfo(closure_2, tmp25.input, request_body_size);
      } else {
        tmp16 = buildSkippedNetworkRequestOrResponse(request_body_size);
      }
      request = tmp16;
      await _getResponseInfo(tmp14, closure_2, tmp25.response, response_body_size);
      response = value;
      request = { startTimestamp, endTimestamp, url, method, statusCode: status_code, request, response };
      return request;
    })();
  });
  return obj(...arguments);
};
obj = function _getResponseInfo2() {
  obj = _asyncToGenerator(async (captureDetails, networkCaptureBodies, arg2, arg3) => {
    let closure_2 = arg2;
    let headers = arg3;
    let c6 = 0;
    let c7 = 0;
    const iter = (async (arg0, value, arg2, arg3) => {
      let c1;
      let c2;
      function _parseFetchResponseBody(headers) {
        return closure_1_161(...arguments);
      }
      function getResponseData(arg0, arg1) {
        ({ responseBodySize, headers } = arg1);
        try {
          let tmp12Result;
          let length;
          if (arg0 != null) {
            length = arg0.length;
          }
          if (length) {
            if (undefined === responseBodySize) {
              closure_1_152(arg0);
            }
          }
          if (tmp2) {
            let tmp14;
            if (tmp) {
              tmp14 = arg0;
            }
            tmp12Result = closure_1_156(headers, tmp8, tmp14);
          } else {
            tmp12Result = closure_1_155(tmp8);
          }
          return tmp12Result;
        } catch (tmp15) {
          if (closure_1_130) {
            closure_1_133.exception(tmp15, "Failed to serialize response body");
          }
          return closure_1_156(headers, responseBodySize, undefined);
        }
      }
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_6;
          let closure_7;
          let closure_8;
          let closure_9;
          let closure_10;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp4;
              networkCaptureBodies = undefined;
              c2 = undefined;
              ({ networkCaptureBodies: c1, networkResponseHeaders: c2 } = closure_1);
              headers = closure_2;
              responseBodySize = headers;
              obj6 = undefined;
              closure_6 = undefined;
              closure_7 = undefined;
              closure_8 = undefined;
              closure_9 = undefined;
              closure_10 = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              if (!captureDetails) {
                if (undefined !== responseBodySize) {
                  c7 = 3;
                  obj5 = { value: closure_133_155(responseBodySize), done: true };
                  return obj5;
                }
              }
              let tmp14 = headers;
              if (tmp14) {
                const tmp15 = closure_5;
                obj6 = closure_133_162(headers.headers, c2);
              } else {
                obj6 = {};
              }
              const tmp20 = headers;
              if (tmp20) {
                c6 = 2;
                c7 = 1;
                obj7 = { value: _parseFetchResponseBody(headers), done: false };
                return obj7;
              }
              c7 = 3;
              obj8 = { value: closure_133_156(obj6, responseBodySize, undefined), done: true };
              return obj8;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            let tmp5;
            closure_6 = value;
            closure_7 = closure_133_6(closure_6, 2);
            closure_8 = closure_7[0];
            closure_9 = closure_7[1];
            obj10 = { networkCaptureBodies, responseBodySize, captureDetails, headers: obj6 };
            closure_10 = getResponseData(closure_8, obj10);
            if (closure_9) {
              const tmp8 = closure_10;
              tmp5 = closure_133_153(closure_10, closure_9);
            } else {
              tmp5 = closure_10;
            }
            c7 = 3;
            return { value: tmp5, done: true };
          }
        } catch (tmp28) {
          c7 = 3;
          throw tmp28;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _parseFetchResponseBody2() {
  obj = _asyncToGenerator(async (arg0) => {
    function _tryCloneResponse(clone) {
      try {
        return clone.clone();
      } catch (tmp2) {
        if (closure_1_130) {
          closure_1_133.exception(tmp2, "Failed to clone response body");
        }
      }
    }
    function _tryGetResponseText(arg0) {
      closure_0 = arg0;
      let promise = new Promise((arg0, arg1) => {
        function _getResponseText(arg0) {
          return closure_1_163(...arguments);
        }
        closure_0 = arg0;
        let closure_1 = arg1;
        obj = closure_2_0(message[9]);
        const timeout = obj.setTimeout(() => {
          const error = new Error("Timeout while trying to read response body");
          return closure_1(error);
        }, 500);
        const promise = _getResponseText(closure_0);
        const nextPromise = promise.then((result) => closure_0(result), (arg0) => closure_1(arg0));
        nextPromise.finally(() => clearTimeout(closure_2));
      });
      return promise;
    }
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let message;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            message = tmp4;
            closure_0 = undefined;
            const tmp24 = _tryCloneResponse(closure_0);
            if (tmp24) {
              c4 = 1;
              c5 = 2;
              c6 = 1;
              obj4 = { value: _tryGetResponseText(tmp24), done: false };
              return obj4;
            } else {
              const items = [undefined, "BODY_PARSE_ERROR"];
              c6 = 3;
              obj5 = { value: items, done: true };
              return obj5;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          message = closure_3;
          const _Error = Error;
          if (message instanceof Error) {
            let items2;
            message = message.message;
            if (message.indexOf("Timeout") > -1) {
              if (closure_130_130) {
                closure_130_133.warn("Parsing text body from response timed out");
              }
              const items1 = [undefined, "BODY_PARSE_TIMEOUT"];
              items2 = items1;
            }
            c6 = 3;
            obj6 = { value: items2, done: true };
            return obj6;
          }
          if (closure_130_130) {
            const exceptionResult = closure_130_133.exception(message, "Failed to get text body from response");
          }
          items2 = [undefined, "BODY_PARSE_ERROR"];
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj7 = { value, done: true };
          return obj7;
        } else {
          closure_0 = value;
          const items3 = [closure_0];
          c4 = 0;
          c6 = 3;
          obj = { value: items3, done: true };
          return obj;
        }
      } catch (tmp25) {
        closure_3 = tmp25;
        if (0 === c4) {
          c6 = 3;
          throw tmp25;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function getAllHeaders(arg0, arr) {
  let closure_0 = arg0;
  obj = {};
  const item = arr.forEach((item) => {
    if (headers2.get(item)) {
      obj2[item] = headers2.get(item);
    }
  });
  return obj;
}
obj = function _getResponseText2() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let c2;
    let closure_0 = arg0;
    await closure_0.text();
    return value;
  });
  return obj(...arguments);
};
obj = function _captureXhrBreadcrumbToReplay() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const replay = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let tmp;
      let tmp19;
      let tmp3;
      let tmp4;
      function _prepareXhrData(data, startTimestamp, networkDetailAllowUrls) {
        let items2;
        let items4;
        let method;
        let obj14;
        let obj15;
        let obj17;
        let request_body_size;
        let response_body_size;
        let status_code;
        let tmp14;
        let tmp15;
        let tmp17;
        let tmp18;
        let tmp27;
        let tmp33;
        let url;
        let warnings;
        let warnings2;
        function _getXhrResponseBody(xhr) {
          function _parseXhrResponse(response, responseType) {
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
            } catch (tmp5) {
              if (closure_1_130) {
                warn.exception(tmp5, "Failed to serialize body", response);
              }
              const items5 = [undefined, "BODY_PARSE_ERROR"];
              return items5;
            }
          }
          try {
            let items = [xhr.responseText];
            return items;
          } catch (tmp2) {
            let items1 = [];
            items1.push(tmp2);
            try {
              return _parseXhrResponse(xhr.response, xhr.responseType);
            } catch (tmp4) {
              items1.push(tmp4);
              if (closure_1_130) {
                warn = warn.warn;
                let items2 = ["Failed to get xhr response body"];
                HermesBuiltin.arraySpread(items2, items1, 1);
                HermesBuiltin.apply(warn, items2, warn);
              }
              let items3 = [undefined];
              return items3;
            }
          }
        }
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
        const input = startTimestamp.input;
        if (undefined !== status_code) {
          num = status_code;
        }
        ({ request_body_size, response_body_size } = data);
        if (url) {
          if (xhr) {
            let tmp4 = networkDetailAllowUrls;
            if (closure_1_157(url, networkDetailAllowUrls.networkDetailAllowUrls)) {
              if (!closure_1_157(url, networkDetailAllowUrls.networkDetailDenyUrls)) {
                let reduced;
                let bodyString;
                let items;
                let tmp19;
                let tmp23;
                let tmp8 = xhr[closure_1_0(undefined, closure_1_1[9]).SENTRY_XHR_DATA_KEY];
                if (tmp8) {
                  const request_headers = tmp8.request_headers;
                  const networkRequestHeaders = networkDetailAllowUrls.networkRequestHeaders;
                  const _Object = Object;
                  const entries = Object.entries(request_headers);
                  reduced = entries.reduce((acc, item) => {
                    let str;
                    let tmp;
                    [str, tmp] = item;
                    const formatted = str.toLowerCase();
                    const hasItem = networkResponseHeaders.includes(formatted) && result[str];
                    if (hasItem) {
                      acc[formatted] = tmp;
                    }
                    return acc;
                  }, {});
                } else {
                  reduced = {};
                }
                const tmp6Result = closure_1_0(closure_1_1[9]);
                const result = tmp6Result.parseXhrResponseHeaders(xhr);
                const networkResponseHeaders = networkDetailAllowUrls.networkResponseHeaders;
                const _Object2 = Object;
                const entries1 = Object.entries(result);
                const reduced1 = entries1.reduce((acc, item) => {
                  let str;
                  let tmp;
                  [str, tmp] = item;
                  const formatted = str.toLowerCase();
                  const hasItem = networkResponseHeaders.includes(formatted) && result[str];
                  if (hasItem) {
                    acc[formatted] = tmp;
                  }
                  return acc;
                }, {});
                if (networkDetailAllowUrls.networkCaptureBodies) {
                  const tmp6Result2 = closure_1_0(closure_1_1[9]);
                  bodyString = tmp6Result2.getBodyString(input, closure_1_133);
                } else {
                  bodyString = [undefined];
                }
                [tmp14, tmp15] = closure_1_6(bodyString, 2);
                const tmp13 = closure_1_6(bodyString, 2);
                if (networkDetailAllowUrls.networkCaptureBodies) {
                  items = _getXhrResponseBody(xhr);
                } else {
                  items = [undefined];
                }
                [tmp17, tmp18] = closure_1_6(items, 2);
                closure_1_6(items, 2);
                if (request_body_size) {
                  if (request_body_size) {
                    obj = { headers: reduced, size: request_body_size };
                    if (tmp14) {
                      ({ warnings, body: obj5.body } = normalizeNetworkBody(tmp14));
                      let length;
                      normalizeNetworkBody(tmp14);
                      if (warnings != null) {
                        length = warnings.length;
                      }
                      tmp19 = obj;
                      if (length) {
                        let obj2 = { warnings };
                        obj._meta = obj2;
                        tmp19 = obj;
                      }
                    } else {
                      tmp19 = obj;
                    }
                  } else {
                    const obj3 = { headers: reduced };
                    tmp19 = obj3;
                  }
                } else {
                  const _Object3 = Object;
                }
                if (response_body_size) {
                  if (response_body_size) {
                    obj4 = { headers: reduced1, size: response_body_size };
                    if (tmp17) {
                      ({ warnings: warnings2, body: obj8.body } = normalizeNetworkBody(tmp17));
                      let length1;
                      normalizeNetworkBody(tmp17);
                      if (warnings2 != null) {
                        length1 = warnings2.length;
                      }
                      tmp23 = obj4;
                      if (length1) {
                        obj6 = { warnings: warnings2 };
                        obj4._meta = obj6;
                        tmp23 = obj4;
                      }
                    } else {
                      tmp23 = obj4;
                    }
                  } else {
                    tmp23 = { headers: reduced1 };
                    obj7 = { headers: reduced1 };
                  }
                } else {
                  const _Object4 = Object;
                }
                const request = { startTimestamp, endTimestamp, url, method, statusCode: num, request: tmp27, response: tmp33 };
                tmp27 = tmp19;
                if (tmp15) {
                  const obj9 = {};
                  if (tmp19) {
                    const merged = Object.assign(tmp19._meta);
                    let items1 = [];
                    const tmp30 = obj9.warnings || [];
                    items1[HermesBuiltin.arraySpread(items1, tmp30, 0)] = tmp15;
                    obj9.warnings = items1;
                    tmp19._meta = obj9;
                    obj10 = tmp19;
                  } else {
                    obj10 = { headers: obj9, size: "Array", _meta: obj11 };
                    obj11 = { warnings: items2 };
                    items2 = [tmp15];
                  }
                  tmp27 = obj10;
                }
                tmp33 = tmp23;
                if (tmp18) {
                  let obj13;
                  const obj12 = {};
                  if (tmp23) {
                    const merged1 = Object.assign(tmp23._meta);
                    let items3 = [];
                    const tmp36 = obj12.warnings || [];
                    items3[HermesBuiltin.arraySpread(items3, tmp36, 0)] = tmp18;
                    obj12.warnings = items3;
                    tmp23._meta = obj12;
                    obj13 = tmp23;
                  } else {
                    obj13 = { headers: obj12, size: "Array", _meta: obj14 };
                    obj14 = { warnings: items4 };
                    items4 = [tmp18];
                  }
                  tmp33 = obj13;
                }
                return request;
              }
            }
          }
          const request1 = { startTimestamp, endTimestamp, url, method, statusCode: num, request: obj15, response: obj17 };
          obj15 = { headers: {}, size: request_body_size, _meta: obj16 };
          obj17 = { headers: {}, size: response_body_size, _meta: obj18 };
          return request1;
        } else {
          let tmp3 = null;
          return null;
        }
      }
      if (c8 === 2) {
        c8 = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else {
        let tmp23 = arg0;
        const str2 = "resource.xhr";
        if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let num = 2;
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
                closure_4 = tmp;
                closure_3 = tmp4;
                let tmp13 = closure_0;
                const tmp18 = addNetworkBreadcrumb(replay.replay, makeNetworkReplayBreadcrumb("resource.xhr", _prepareXhrData(closure_0, closure_1, replay)));
                c6 = 0;
              }
            } else {
              let tmp5 = closure_3;
              let tmp7 = closure_5;
              let tmp8 = closure_5;
              c6 = 0;
              closure_0 = closure_5;
              if (closure_132_130) {
                closure_132_133.exception(closure_0, "Failed to capture xhr breadcrumb");
              }
            }
            c8 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp19) {
            closure_5 = tmp19;
            if (0 === c6) {
              c8 = 3;
              throw tmp19;
            } else {
              c7 = 1;
            }
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function enrichXhrBreadcrumb(data, xhr) {
  function _getBodySize(response, responseType) {
    try {
      let json = response;
      if ("json" === responseType) {
        json = response;
        if (json) {
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
  }
  xhr = xhr.xhr;
  if (xhr) {
    let tmp4;
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
      tmp4 = tmp6;
    } else {
      tmp4 = _getBodySize(xhr.response, xhr.responseType);
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
  let obj2;
  obj = obj2(693);
  const client = obj.getClient();
  try {
    const options = getOptions.getOptions();
    obj2 = { replay: getOptions, networkDetailAllowUrls: null, networkDetailDenyUrls: null, networkCaptureBodies: null, networkRequestHeaders: null, networkResponseHeaders: null };
    ({ networkDetailAllowUrls: obj3.networkDetailAllowUrls, networkDetailDenyUrls: obj3.networkDetailDenyUrls, networkCaptureBodies: obj3.networkCaptureBodies, networkRequestHeaders: obj3.networkRequestHeaders, networkResponseHeaders: obj3.networkResponseHeaders } = options);
    if (client) {
      const str = "beforeAddBreadcrumb";
      client.on("beforeAddBreadcrumb", (data, xhr) => {
        function beforeAddNetworkBreadcrumb(arg0, data, xhr) {
          function _isXhrBreadcrumb(category) {
            return "xhr" === category.category;
          }
          function _isXhrHint(xhr) {
            xhr = undefined;
            if (xhr != null) {
              xhr = xhr.xhr;
            }
            return xhr;
          }
          function captureXhrBreadcrumbToReplay(data, xhr, arg2) {
            return closure_1_164(...arguments);
          }
          function _isFetchBreadcrumb(category) {
            return "fetch" === category.category;
          }
          function _isFetchHint(response) {
            response = undefined;
            if (response != null) {
              response = response.response;
            }
            return response;
          }
          function enrichFetchBreadcrumb(data, xhr) {
            let input;
            let response;
            ({ input, response } = xhr);
            let fetchRequestArgBody;
            if (input) {
              obj = closure_1_0(closure_1_1[9]);
              fetchRequestArgBody = obj.getFetchRequestArgBody(input);
            }
            const tmpResult = closure_1_152(fetchRequestArgBody);
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
          }
          function captureFetchBreadcrumbToReplay(data, xhr, arg2) {
            return closure_1_158(...arguments);
          }
          if (data.data) {
            try {
              const tmp2 = _isXhrBreadcrumb(data) && _isXhrHint(xhr);
              if (tmp2) {
                closure_1_165(data, xhr);
                let tmp6 = captureXhrBreadcrumbToReplay(data, xhr, arg0);
              }
              const tmp7 = _isFetchBreadcrumb(data) && _isFetchHint(xhr);
              if (tmp7) {
                let tmp8 = enrichFetchBreadcrumb(data, xhr);
                captureFetchBreadcrumbToReplay(data, xhr, arg0);
              }
            } catch (tmp10) {
              if (closure_1_130) {
                closure_1_133.exception(tmp10, "Error when enriching network breadcrumb");
              }
            }
          }
        }
        beforeAddNetworkBreadcrumb(obj2, data, xhr);
      });
    }
  } catch (err) {
  }
}
obj = function _addMemoryEntry() {
  obj = _asyncToGenerator(async (arg0) => {
    let jsHeapSizeLimit;
    let totalJSHeapSize;
    let usedJSHeapSize;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const _Date = Date;
            ({ jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } = require("module_693").GLOBAL_OBJ.performance.memory);
            const result = Date.now() / 1000;
            obj4 = { type: "memory", name: "memory", start: result, end: result, data: obj5 };
            obj5 = { memory: obj6 };
            obj6 = { jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize };
            const items = [obj4];
            c3 = 0;
            c1 = 3;
            obj7 = { value: all(createPerformanceSpans(closure_0, items)), done: true };
            return obj7;
          }
        } else {
          c3 = 0;
          c1 = 3;
          obj = { value: [], done: true };
          return obj;
        }
      } catch (tmp4) {
        if (0 === c3) {
          c1 = 3;
          throw tmp4;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function getHandleRecordingEmit(self) {
  let logger;
  let closure_0 = self;
  let c1 = false;
  return (data, arg1) => {
    const recordingMode = data;
    if (recordingMode.checkAndHandleExpiredSession()) {
      const tmp4 = arg1 || !c1;
      c1 = true;
      if (recordingMode.clickDetector) {
        updateClickDetectorForRecordingEvent(recordingMode.clickDetector, data);
      }
      recordingMode.addUpdate(function() {
        let eventBuffer1;
        const tmp = "buffer" === recordingMode.recordingMode && c1;
        if (tmp) {
          recordingMode.setInitialState();
        }
        if (addEventSync(recordingMode, recordingMode, c1)) {
          if (c1) {
            const session = recordingMode.session;
            if (c1) {
              if (recordingMode.session) {
                if (0 === recordingMode.session.segmentId) {
                  const options = recordingMode.getOptions();
                  const _Date2 = Date;
                  const obj2 = { type: obj4.Custom, timestamp: Date.now(), data: obj7 };
                  ({ sessionSampleRate: obj4.sessionSampleRate, errorSampleRate: obj4.errorSampleRate, useCompression: obj4.useCompressionOption, blockAllMedia: obj4.blockAllMedia, maskAllText: obj4.maskAllText, maskAllInputs: obj4.maskAllInputs } = options);
                  const obj3 = { shouldRecordCanvas: recordingMode.isRecordingCanvas(), sessionSampleRate: null, errorSampleRate: null, useCompressionOption: null, blockAllMedia: null, maskAllText: null, maskAllInputs: null, useCompression: eventBuffer1, networkDetailHasUrls: options.networkDetailAllowUrls.length > 0, networkCaptureBodies: options.networkCaptureBodies, networkRequestHasHeaders: options.networkRequestHeaders.length > 0, networkResponseHasHeaders: options.networkResponseHeaders.length > 0 };
                  eventBuffer1 = recordingMode.eventBuffer && "worker" === recordingMode.eventBuffer.type;
                  obj7 = { tag: "options", payload: obj3 };
                  addEventSync(recordingMode, obj2, false);
                }
              }
            }
            if ("buffer" === recordingMode.recordingMode) {
              if (session) {
                if (recordingMode.eventBuffer) {
                  if (!session.dirty) {
                    const eventBuffer = recordingMode.eventBuffer;
                    const earliestTimestamp = eventBuffer.getEarliestTimestamp();
                    if (earliestTimestamp) {
                      if (__SENTRY_DEBUG__2) {
                        const _Date = Date;
                        self = this;
                        const self2 = this;
                        log = log.log;
                        const _HermesInternal = HermesInternal;
                        const date = new Date(earliestTimestamp);
                        log("Updating session start time to earliest event in buffer to " + date);
                      }
                      session.started = earliestTimestamp;
                      if (recordingMode.getOptions().stickySession) {
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
              if ("session" === recordingMode.recordingMode) {
                recordingMode.flush();
              }
            }
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      });
    } else if (__SENTRY_DEBUG__2) {
      logger.warn("Received replay event after session expired.");
    }
  };
}
obj = function _prepareReplayEvent() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let keys;
    let str3;
    let str4;
    let value;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let event_id;
        let sdk;
        let name;
        let version;
        let settings;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c0 = undefined;
            c1 = undefined;
            event_id = undefined;
            ({ client: c0, scope: c1, replayId: c2, event: c3 } = closure_0);
            obj4 = undefined;
            value = undefined;
            sdk = undefined;
            name = undefined;
            version = undefined;
            settings = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            obj4 = { event_id, integrations: keys };
            keys = undefined;
            if (typeof c0._integrations === "object") {
              if (null !== c0._integrations) {
                const _Array = Array;
                if (!Array.isArray(c0._integrations)) {
                  const _Object = Object;
                  keys = Object.keys(c0._integrations);
                }
              }
            }
            c0.emit("preprocessEvent", c3, obj4);
            const tmp39 = closure_130_0(closure_130_1[8]);
            const prepareEvent = tmp39.prepareEvent;
            const options = c0.getOptions();
            c3 = 2;
            c4 = 1;
            obj6 = { value: prepareEvent(options, c3, obj4, c1, c0, obj5.getIsolationScope()), done: false };
            obj5 = closure_130_0(closure_130_1[8]);
            return obj6;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj7 = { value, done: true };
          return obj7;
        } else {
          const tmp53 = value;
          if (tmp53) {
            c0.emit("postprocessEvent", value, obj4);
            let str2 = value.platform;
            const tmp9 = value;
            if (!str2) {
              str2 = "javascript";
            }
            tmp9.platform = str2;
            c0.getSdkMetadata();
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
            obj8 = { name: str3, version: str4, settings };
            const merged = Object.assign(value.sdk);
            str3 = name;
            const tmp18 = value;
            if (!str3) {
              str3 = "sentry.javascript.unknown";
            }
            str4 = version || "0.0.0";
            tmp18.sdk = obj8;
            c4 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            c4 = 3;
            return { value: null, done: true };
          }
        }
      } catch (tmp48) {
        c4 = 3;
        throw tmp48;
      }
    }
  });
  return obj(...arguments);
};
obj = function _sendReplayRequest() {
  obj = _asyncToGenerator(async function(recordingData) {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let value;
    function prepareRecordingData(recordingData) {
      let combined1;
      recordingData = recordingData.recordingData;
      const combined = "" + JSON.stringify(recordingData.headers) + "\n";
      if (typeof recordingData === "string") {
        const _HermesInternal = HermesInternal;
        combined1 = "" + combined + recordingData;
      } else {
        const _TextEncoder = TextEncoder;
        const self = this;
        const self2 = this;
        const encoder = new TextEncoder();
        const encodeResult = encoder.encode(combined);
        const _Uint8Array = Uint8Array;
        const self3 = this;
        const self4 = this;
        const uint8Array = new Uint8Array(encodeResult.length + recordingData.length);
        combined1 = uint8Array;
        const result = uint8Array.set(encodeResult);
        const result1 = uint8Array.set(recordingData, encodeResult.length);
      }
      return combined1;
    }
    function prepareReplayEvent(arg0) {
      return closure_1_170(...arguments);
    }
    function createReplayEnvelope(value, str, dsn, tunnel) {
      let length;
      const createEnvelope = recordingData(closure_1_1[8]).createEnvelope;
      recordingData(closure_1_1[8]);
      const createEventEnvelopeHeaders = recordingData(closure_1_1[8]).createEventEnvelopeHeaders;
      recordingData(closure_1_1[8]);
      const items = [{ type: "replay_event" }, value];
      const items1 = [items, ];
      obj = recordingData(closure_1_1[8]);
      const eventEnvelopeHeaders = createEventEnvelopeHeaders(value, obj.getSdkMetadataForEnvelopeHeader(value), tunnel, dsn);
      if (typeof str === "string") {
        const _TextEncoder = TextEncoder;
        const self = this;
        const self2 = this;
        const encoder = new TextEncoder();
        length = encoder.encode(str).length;
      } else {
        length = str.length;
      }
      const items2 = [{ type: "replay_recording", length }, str];
      items1[1] = items2;
      return createEnvelope(eventEnvelopeHeaders, items1);
    }
    if (c6 === 2) {
      c6 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (recordingData === 1) {
        throw value;
      } else if (recordingData === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let replayId;
        let segment_id;
        let closure_6;
        let urls;
        let errorIds;
        let traceIds;
        let initialTimestamp;
        let client;
        let scope;
        let transport;
        let dsn;
        let obj9;
        let closure_16;
        let closure_18;
        let error;
        let closure_20;
        c6 = 2;
        const tmp4 = c5;
        if (0 === c5) {
          if (recordingData === 1) {
            c6 = 3;
            throw value;
          } else if (recordingData === 2) {
            c6 = 3;
            obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            recordingData = undefined;
            replayId = undefined;
            segment_id = undefined;
            c4 = undefined;
            ({ recordingData: c0, replayId: c1, segmentId: c2, eventContext: c3, timestamp: c4, session: c5 } = closure_0);
            closure_6 = undefined;
            urls = undefined;
            errorIds = undefined;
            traceIds = undefined;
            initialTimestamp = undefined;
            client = undefined;
            scope = undefined;
            transport = undefined;
            dsn = undefined;
            obj9 = undefined;
            closure_16 = undefined;
            value = undefined;
            closure_18 = undefined;
            error = undefined;
            closure_20 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === tmp4) {
          if (recordingData === 1) {
            c6 = 3;
            throw value;
          } else if (recordingData === 2) {
            c6 = 3;
            obj5 = { value, done: true };
            return obj5;
          } else {
            obj6 = { recordingData, headers: obj7 };
            obj7 = { segment_id };
            closure_6 = prepareRecordingData(obj6);
            urls = tmp72.urls;
            errorIds = tmp72.errorIds;
            traceIds = tmp72.traceIds;
            initialTimestamp = tmp72.initialTimestamp;
            const obj18 = closure_130_0(closure_130_1[8]);
            client = obj18.getClient();
            const obj19 = closure_130_0(closure_130_1[8]);
            scope = obj19.getCurrentScope();
            transport = undefined;
            const obj20 = client;
            if (client != null) {
              transport = obj20.getTransport();
            }
            dsn = undefined;
            obj8 = client;
            if (client != null) {
              dsn = obj8.getDsn();
            }
            const tmp55 = client;
            if (tmp55) {
              const tmp56 = transport;
              if (tmp56) {
                const tmp57 = dsn;
                if (tmp57) {
                  if (c5.sampled) {
                    obj9 = { type: "replay_event", replay_start_timestamp: initialTimestamp / 1000, timestamp: c4 / 1000, error_ids: errorIds, trace_ids: traceIds, urls, replay_id: replayId, segment_id, replay_type: c5.sampled };
                    obj10 = { scope, client, replayId, event: obj9 };
                    c5 = 2;
                    c6 = 1;
                    obj11 = { value: prepareReplayEvent(obj10), done: false };
                    return obj11;
                  }
                }
              }
            }
            c6 = 3;
            const obj12 = { value: Promise.resolve({}), done: true };
            return obj12;
          }
        } else if (2 === tmp4) {
          if (recordingData === 1) {
            c6 = 3;
            throw value;
          } else if (recordingData === 2) {
            c6 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            closure_16 = value;
            const tmp88 = closure_16;
            if (tmp88) {
              delete closure_16[tmp80];
              closure_18 = createReplayEnvelope(closure_16, closure_6, dsn, client.getOptions().tunnel);
              c4 = 1;
              c5 = 5;
              c6 = 1;
              const obj14 = { value: transport.send(closure_18), done: false };
              return obj14;
            } else {
              client.recordDroppedEvent("event_processor", "replay");
              if (closure_130_130) {
                closure_130_133.log("An event processor returned `null`, will not send event.");
              }
              c6 = 3;
              const obj15 = { value: Promise.resolve({}), done: true };
              return obj15;
            }
          }
        } else {
          if (3 === tmp4) {
            const cause = closure_3;
            const _Error = Error;
            const self5 = this;
            const self6 = this;
            error = new Error(closure_130_11);
            error.cause = cause;
            c4 = 0;
          } else if (4 === tmp4) {
            c4 = 0;
          } else if (recordingData === 1) {
            c6 = 3;
            throw value;
          } else if (recordingData === 2) {
            c4 = 0;
            c6 = 3;
            const obj16 = { value, done: true };
            return obj16;
          } else {
            c4 = 0;
            if (typeof value.statusCode === "number") {
              let self3 = this;
              let self4 = this;
              const tmp23 = new closure_130_172(value.statusCode);
              throw tmp23;
            }
            obj = closure_130_0(closure_130_1[8]);
            closure_20 = obj.updateRateLimits({}, value);
            const obj2 = closure_130_0(closure_130_1[8]);
            if (obj2.isRateLimited(closure_20, "replay")) {
              let self = this;
              let self2 = this;
              const tmp17 = new closure_130_173(closure_20);
              throw tmp17;
            } else {
              c6 = 3;
              const obj17 = { value, done: true };
              return obj17;
            }
          }
          throw error;
        }
      } catch (tmp72) {
        closure_3 = tmp72;
        if (0 === c4) {
          c6 = 3;
          throw tmp72;
        } else if (1 === tmp74) {
          c5 = 3;
        } else {
          c5 = 4;
        }
      }
    }
  });
  return obj(...arguments);
};
function sendReplay(arg0) {
  return obj(...arguments);
}
obj = function _sendReplay() {
  obj = _asyncToGenerator(async function(arg0) {
    let closure_1;
    let interval;
    function sendReplayRequest(arg0) {
      return closure_1_171(...arguments);
    }
    let closure_0 = arg0;
    if (c7 === 2) {
      c7 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let closure_3;
        let recordingData;
        let onError;
        let error;
        c7 = 2;
        const tmp4 = c6;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp;
            let closure_2 = tmp4;
            obj5 = interval;
            if (interval === undefined) {
              obj5 = { count: 0, interval: 5000 };
            }
            recordingData = undefined;
            onError = undefined;
            error = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj6 = { value, done: true };
            return obj6;
          } else {
            recordingData = closure_0.recordingData;
            onError = closure_0.onError;
            if (recordingData.length) {
              c5 = 1;
              c6 = 3;
              c7 = 1;
              obj7 = { value: sendReplayRequest(closure_0), done: false };
              return obj7;
            } else {
              c7 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } else {
          if (2 === tmp4) {
            c5 = 0;
            const cause = closure_4;
            if (!(cause instanceof closure_131_172)) {
              if (!(cause instanceof closure_131_173)) {
                const tmp16 = closure_3;
                let obj2 = closure_131_0(closure_131_1[8]);
                obj8 = { _retryCount: obj5.count };
                obj2.setContext("Replays", obj8);
                const tmp21 = onError;
                if (tmp21) {
                  onError(cause);
                }
                if (obj5.count >= 3) {
                  const _Error = Error;
                  const _HermesInternal = HermesInternal;
                  const self3 = this;
                  const self4 = this;
                  error = new Error("" + closure_131_11 + " - max retries exceeded");
                  error.cause = cause;
                  c5 = 0;
                } else {
                  const sum = obj5.count + 1;
                  obj5.count = sum;
                  obj5.interval = obj5.interval * sum;
                  const self = this;
                  const self2 = this;
                  const promise = new Promise((arg0, arg1) => {
                    closure_0 = arg0;
                    interval = arg1;
                    obj = closure_1_0(interval[9]);
                    const timerId = obj.setTimeout(closure_1_2(function*() {
                      if (c4 === 2) {
                        c4 = 3;
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp3 === 3) {
                        if (arg0 === 1) {
                          throw value;
                        } else if (arg0 === 2) {
                          const obj2 = { value, done: true };
                          return obj2;
                        } else {
                          return { value: "IconComponent", done: null };
                        }
                      } else {
                        let c3;
                        try {
                          c4 = 2;
                          if (0 === c1) {
                            if (arg0 === 1) {
                              c4 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c4 = 3;
                              const obj3 = { value, done: true };
                              return obj3;
                            } else {
                              closure_0 = tmp;
                              c3 = 1;
                              c1 = 2;
                              c4 = 1;
                              obj4 = { value: closure_2_174(closure_0, c1), done: false };
                              return obj4;
                            }
                          } else {
                            if (1 === tmp4) {
                              c3 = 0;
                              closure_128_1(closure_2);
                            } else if (arg0 === 1) {
                              c4 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c3 = 0;
                              c4 = 3;
                              obj = { value, done: true };
                              return obj;
                            } else {
                              closure_128_0(true);
                              c3 = 0;
                            }
                            c4 = 3;
                            return { value: "IconComponent", done: null };
                          }
                        } catch (tmp16) {
                          closure_2 = tmp16;
                          if (0 === c3) {
                            c4 = 3;
                            throw tmp16;
                          } else {
                            c1 = 1;
                          }
                        }
                      }
                    }), interval.interval);
                  });
                  c7 = 3;
                  const obj9 = { value: promise, done: true };
                  return obj9;
                }
              }
            }
            throw cause;
          } else if (3 === tmp4) {
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
          throw error;
        }
      } catch (tmp53) {
        closure_4 = tmp53;
        if (0 === c5) {
          c7 = 3;
          throw tmp53;
        } else if (1 === tmp55) {
          c6 = 2;
        } else {
          c6 = 4;
        }
      }
    }
  });
  return obj(...arguments);
};
let _asyncToGenerator = _asyncToGenerator_mod;
let c3 = c3_mod;
const definePropertyResult = Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const sentryReplaySession = "sentryReplaySession";
let c11 = "Unable to send Replay";
let c12 = 150000;
let c13 = 5000;
let c14 = 20000000;
let c15 = 3600000;
function __publicField$1(arg0, arg1, arg2) {

}
obj = {};
let tmp3 = ((arg0) => {
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
      const self = this;
      _classCallCheck(this, Mirror);
      map = new Map();
      if (typeof __publicField$1 === "function") {
        if ("idNodeMap" in self) {
          obj = { enumerable: true, configurable: true, writable: true, value: map };
          defineProperty(self, "idNodeMap", obj);
        } else {
          self.idNodeMap = map;
        }
        const _WeakMap = WeakMap;
        const self2 = this;
        const self3 = this;
        weakMap = new WeakMap();
        if (typeof __publicField$1 === "function") {
          if ("nodeMetaMap" in self) {
            const obj2 = { enumerable: true, configurable: true, writable: true, value: weakMap };
            defineProperty(self, "nodeMetaMap", obj2);
          } else {
            self.nodeMetaMap = weakMap;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  const entry = {
    key: "getId",
    value: function getId(arg0) {
      const tmp = arg0;
      if (tmp) {
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
        const tmp = idNodeMap.get(arg0) || null;
        return tmp;
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
        const tmp = nodeMetaMap.get(arg0) || null;
        return tmp;
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
        ({ idNodeMap: new Map(), nodeMetaMap: weakMap });
        new Map();
        weakMap = new WeakMap();
      }
    }
  ];
  return _createClass(Mirror, items);
})();
const __rrweb_original__ = "__rrweb_original__";
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
let obj2 = {
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
  let obj3 = {
    get(arg0, arg1, arg2) {
        if ("map" === arg1) {
          const _console = console;
          console.error(c60);
        }
        return Reflect.get(arg0, arg1, arg2);
      }
  };
  let self = this;
  let tmp6 = obj2;
  let tmp7 = obj3;
  const proxy = new Proxy(obj2, obj3);
}
let W = Date.now;
let tmp9 = /[1-9][0-9]{12}/;
let test = tmp9.test;
let str = Date.now();
if (!test(str.toString())) {
  W = function W() {
    const date = new Date();
    return date.getTime();
  };
}
let closure_68 = (() => {
  class StyleSheetMirror {
    constructor() {
      _classCallCheck(this, StyleSheetMirror);
      this.id = 1;
      weakMap = new WeakMap();
      this.styleIDMap = weakMap;
      this.idStyleMap = new Map();
      new Map();
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
        let id;
        const self = this;
        if (this.has(arg0)) {
          id = self.getId(arg0);
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
        const tmp = idStyleMap.get(arg0) || null;
        return tmp;
      }
    },
    {
      key: "reset",
      value: function reset() {
        ({ styleIDMap: weakMap, idStyleMap: new Map(), id: 1 });
        weakMap = new WeakMap();
        new Map();
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
let obj4 = {};
let tmp10 = ((arg0) => {
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
})(obj4);
let obj5 = {};
let tmp11 = ((arg0) => {
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
})(obj5);
let obj6 = {};
let tmp12 = ((arg0) => {
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
})(obj6);
let obj7 = {};
let tmp13 = ((arg0) => {
  arg0.Mouse = 0;
  arg0[0] = "Mouse";
  arg0.Pen = 1;
  arg0[1] = "Pen";
  arg0.Touch = 2;
  arg0[2] = "Touch";
  return arg0;
})(obj7);
let obj8 = {};
let tmp14 = ((arg0) => {
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
})(obj8);
let closure_80 = (() => {
  class DoubleLinkedList {
    constructor() {
      _classCallCheck(this, DoubleLinkedList);
      this.length = 0;
      this.head = null;
      this.tail = null;
    }
  }
  const entry = {
    key: "get",
    value: function get(arg0) {
      if (arg0 >= this.length) {
        const _Error = Error;
        const self = this;
        const self2 = this;
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
        obj = { value, previous: null, next: self.head };
        value.__ln = obj;
        if (value.previousSibling) {
          if ("__ln" in value.previousSibling) {
            const next = value.previousSibling.__ln.next;
            obj.next = next;
            obj.previous = value.previousSibling.__ln;
            value.previousSibling.__ln.next = obj;
            if (next) {
              next.previous = obj;
            }
          }
          if (null === obj.next) {
            self.tail = obj;
          }
          self.length = self.length + 1;
        }
        if (value.nextSibling) {
          if ("__ln" in value.nextSibling) {
            if (value.nextSibling.__ln.previous) {
              const previous = value.nextSibling.__ln.previous;
              obj.previous = previous;
              obj.next = value.nextSibling.__ln;
              value.nextSibling.__ln.previous = obj;
              if (previous) {
                previous.next = obj;
              }
            }
          }
        }
        if (self.head) {
          self.head.previous = obj;
        }
        self.head = obj;
      }
    },
    {
      key: "removeNode",
      value: function removeNode(__ln) {
        const self = this;
        if (this.head) {
          if (__ln.__ln.previous) {
            __ln.__ln.previous.next = __ln.__ln.next;
            if (__ln.__ln.next) {
              __ln.__ln.next.previous = __ln.__ln.previous;
            } else {
              self.tail = __ln.__ln.previous;
            }
          } else {
            self.head = __ln.__ln.next;
            if (self.head) {
              self.head.previous = null;
            } else {
              self.tail = null;
            }
          }
          if (__ln.__ln) {
            delete tmp["__ln"];
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
      this.emit = function() {
        let found;
        let found1;
        let head;
        let items;
        let length;
        let tmp = items;
        if (!items.frozen) {
          let tmp2 = tmp;
          if (!tmp.locked) {
            items = [];
            let tmp3 = globalThis;
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set();
            const self3 = this;
            const self4 = this;
            const arr2 = new closure_1_80();
            function getNextId(value) {
              let id;
              let tmp = value;
              do {
                let tmp3 = tmp && tmp.nextSibling;
                id = tmp3;
                if (id) {
                  let mirror = items.mirror;
                  id = mirror.getId(tmp3);
                }
                tmp = tmp3;
              } while (-2 === id);
              return id;
            }
            function pushAdd(value) {
              let id1;
              let mutationCb = value;
              if (value.parentNode) {
                if (closure_3_69(value)) {
                  let id;
                  const parentNode = value.parentNode;
                  let host;
                  if (parentNode != null) {
                    host = parentNode.host;
                  }
                  let shadowRoot;
                  let _Boolean = Boolean;
                  if (host != null) {
                    shadowRoot = host.shadowRoot;
                  }
                  let mirror = self.mirror;
                  const getId = mirror.getId;
                  if (_Boolean(shadowRoot === parentNode)) {
                    const getRootNode = value.getRootNode;
                    let nodeType;
                    if (getRootNode != null) {
                      const rootNode = getRootNode();
                      if (rootNode != null) {
                        nodeType = rootNode.nodeType;
                      }
                    }
                    let host1 = null;
                    const tmp10 = nodeType === globalThis.Node.DOCUMENT_FRAGMENT_NODE && value.getRootNode().host;
                    if (tmp10) {
                      host1 = value.getRootNode().host;
                    }
                    id = getId(host1);
                  } else {
                    id = getId(value.parentNode);
                  }
                  let tmp13 = value;
                  if (typeof getNextId === "function") {
                    do {
                      let tmp15 = tmp13 && tmp13.nextSibling;
                      id1 = tmp15;
                      if (id1) {
                        let mirror2 = self.mirror;
                        id1 = mirror2.getId(tmp15);
                      }
                      tmp13 = tmp15;
                    } while (-2 === id1);
                    if (-1 !== id) {
                      if (-1 !== id1) {
                        let obj3 = { doc: null, mirror: null, blockClass: null, blockSelector: null, maskAllText: null, unblockSelector: null, maskTextClass: null, unmaskTextClass: null, maskTextSelector: null, unmaskTextSelector: null, skipChild: true, newlyAddedElement: true, inlineStylesheet: null, maskInputOptions: null, maskAttributeFn: null, maskTextFn: null, maskInputFn: null, slimDOMOptions: null, dataURLOptions: null, recordCanvas: null, inlineImages: null, onSerialize() { /* body not rendered: F154113 */ }, onIframeLoad() { /* body not rendered: F154114 */ }, onStylesheetLoad() { /* body not rendered: F154115 */ }, onBlockedImageLoad() { /* body not rendered: F154116 */ }, ignoreCSSAttributes: self.ignoreCSSAttributes };
                        ({ doc: obj2.doc, mirror: obj2.mirror, blockClass: obj2.blockClass, blockSelector: obj2.blockSelector, maskAllText: obj2.maskAllText, unblockSelector: obj2.unblockSelector, maskTextClass: obj2.maskTextClass, unmaskTextClass: obj2.unmaskTextClass, maskTextSelector: obj2.maskTextSelector, unmaskTextSelector: obj2.unmaskTextSelector, inlineStylesheet: obj2.inlineStylesheet, maskInputOptions: obj2.maskInputOptions, maskAttributeFn: obj2.maskAttributeFn, maskTextFn: obj2.maskTextFn, maskInputFn: obj2.maskInputFn, slimDOMOptions: obj2.slimDOMOptions, dataURLOptions: obj2.dataURLOptions, recordCanvas: obj2.recordCanvas, inlineImages: obj2.inlineImages } = self);
                        const tmp25 = closure_3_58(value, obj3);
                        if (tmp25) {
                          obj = { parentId: id, nextId: id1, node: tmp25 };
                          items.push(obj);
                          set.add(tmp25.id);
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
            let tmp13 = movedSet;
            const nextResult = iter.next();
            let tmp15 = iter;
            while (iter !== undefined) {
              let tmp16 = nextResult;
              let tmp19 = items;
              let tmp20 = closure_1_83(items.removes, nextResult, items.mirror);
              if (tmp20) {
                let movedSet2 = tmp19.movedSet;
                tmp20 = !movedSet2.has(tmp16.parentNode);
              }
              if (!tmp20) {
                let pushAddResult = pushAdd(tmp16);
              }
              continue;
            }
            let tmp25 = items;
            const addedSet = items.addedSet;
            for (const item10064 of addedSet) {
              let tmp32 = items;
              if (!closure_1_84(items.droppedSet, item10064)) {
                if (!closure_1_83(tmp32.removes, item10064, tmp32.mirror)) {
                  let pushAddResult1 = pushAdd(item10064);
                }
                continue;
              }
              if (closure_1_84(tmp32.movedSet, item10064)) {
                let pushAddResult2 = pushAdd(item10064);
              } else {
                let droppedSet = tmp32.droppedSet;
                let addResult = droppedSet.add(item10064);
              }
            }
            let previous1 = null;
            if (arr2.length) {
              while (true) {
                let tmp47 = null;
                if (previous1) {
                  let mirror2 = items.mirror;
                  let id = mirror2.getId(previous1.value.parentNode);
                  let tmp51 = -1 !== id && -1 !== getNextId(previous1.value);
                  tmp47 = null;
                  if (tmp51) {
                    tmp47 = previous1;
                  }
                }
                let iter2 = tmp47;
                if (!iter2) {
                  let iter3 = arr2.tail;
                  iter2 = tmp47;
                  if (iter3) {
                    while (true) {
                      let previous = iter3.previous;
                      let tmp52 = iter3;
                      if (tmp52) {
                        let mirror3 = items.mirror;
                        let tmp54 = items;
                        let id1 = mirror3.getId(iter3.value.parentNode);
                        if (-1 !== getNextId(iter3.value)) {
                          iter2 = iter3;
                          if (-1 !== id1) {
                            break;
                          } else {
                            let value = iter3.value;
                            if (value.parentNode) {
                              if (value.parentNode.nodeType === globalThis.Node.DOCUMENT_FRAGMENT_NODE) {
                                let mirror4 = tmp54.mirror;
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
                      iter2 = tmp47;
                      iter3 = previous;
                      if (!iter3) {
                        break;
                      }
                    }
                  }
                }
                if (!iter2) {
                  break;
                } else {
                  previous1 = iter2.previous;
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
            obj = {
              texts: found.filter((id) => {
                    const mirror = items.mirror;
                    return mirror.has(id.id);
                  }),
              attributes: found1.filter((id) => {
                    const mirror = items.mirror;
                    return mirror.has(id.id);
                  }),
              removes: items.removes,
              adds: items
            };
            let obj2 = items;
            const texts = items.texts;
            const mapped = texts.map((value) => {
              let mirror;
              obj = { id: mirror.getId(value.node), value: value.value };
              mirror = items.mirror;
              return obj;
            });
            found = mapped.filter((id) => !set.has(id.id));
            let attributes = items.attributes;
            const mapped1 = attributes.map((attributes) => {
              let mirror;
              attributes = attributes.attributes;
              if (typeof attributes.style === "string") {
                const _JSON = JSON;
                const json = JSON.stringify(attributes.styleDiff);
                const _JSON2 = JSON;
                let tmp = json.length < attributes.style.length;
                if (tmp) {
                  const str = json + JSON.stringify(attributes._unchangedStyles);
                  const str3 = attributes.style;
                  tmp = str.split("var(").length === str3.split("var(").length;
                }
                if (tmp) {
                  attributes.style = attributes.styleDiff;
                }
              }
              obj = { id: mirror.getId(attributes.node), attributes };
              mirror = items.mirror;
              return obj;
            });
            found1 = mapped1.filter((id) => !set.has(id.id));
            const tmp61 = obj.texts.length || obj.attributes.length || obj.removes.length || obj.adds.length;
            if (tmp61) {
              obj2.texts = [];
              obj2.attributes = [];
              const _WeakMap = WeakMap;
              const self5 = this;
              const self6 = this;
              weakMap = new WeakMap();
              obj2.attributeMap = weakMap;
              obj2.removes = [];
              const _Set2 = Set;
              const self7 = this;
              const self8 = this;
              obj2.addedSet = new Set();
              const _Set3 = Set;
              const self9 = this;
              const self10 = this;
              set1 = new Set();
              obj2.movedSet = new Set();
              const _Set4 = Set;
              const self11 = this;
              const self12 = this;
              set2 = new Set();
              obj2.droppedSet = new Set();
              obj2.movedMap = {};
              set3 = new Set();
              obj2.mutationCb(obj);
            }
          }
        }
      };
      this.processMutation = (target) => {
        let attributeName;
        let target2;
        let tmp55;
        _self = target;
        obj = _self;
        if (!closure_1_66(target.target, _self.mirror)) {
          const type = target.type;
          if ("characterData" === type) {
            const tmp45 = closure_1_65(target.target, obj.blockClass, obj.blockSelector, obj.unblockSelector, false) || target.target.textContent === target.oldValue;
            if (!tmp45) {
              const texts = obj.texts;
              let push = texts.push;
              let tmp47 = str15;
              if (closure_1_56(target.target, obj.maskTextClass, obj.maskTextSelector, obj.unmaskTextClass, obj.unmaskTextSelector, obj.maskAllText)) {
                tmp47 = str15;
                if (tmp47) {
                  let maskTextFnResult;
                  if (obj.maskTextFn) {
                    maskTextFnResult = obj.maskTextFn(str15, closure_1_64(target.target));
                  } else {
                    maskTextFnResult = str15.replace(/[\S]/g, "*");
                  }
                  tmp47 = maskTextFnResult;
                }
              }
              const obj2 = { value: tmp47, node: target.target };
              push(obj2);
            }
          } else if ("attributes" === type) {
            ({ target, attributeName, target: target2 } = target);
            let attr = target2.getAttribute(attributeName);
            if ("value" === attributeName) {
              const tmp53 = closure_1_29(target);
              const tagName = target.tagName;
              const obj3 = { maskInputOptions: obj.maskInputOptions, tagName, type: tmp53 };
              obj4 = { isMasked: closure_1_56(target.target, obj.maskTextClass, obj.maskTextSelector, obj.unmaskTextClass, obj.unmaskTextSelector, closure_1_24(obj3)), element: target, value: tmp55, maskInputFn: obj.maskInputFn };
              tmp55 = closure_1_30(target, tagName, tmp53);
              attr = closure_1_25(obj4);
            }
            let flag = false;
            let flag2 = false;
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
                let tmp6 = value;
                if (!tmp6) {
                  obj5 = { node: target.target, attributes: {}, styleDiff: {}, _unchangedStyles: {} };
                  const attributes1 = obj.attributes;
                  attributes1.push(obj5);
                  const attributeMap = obj.attributeMap;
                  const result = attributeMap.set(target.target, obj5);
                  tmp6 = obj5;
                }
                let tmp9 = "type" === str5 && "INPUT" === target.tagName;
                if (tmp9) {
                  const str8 = target.oldValue || "";
                  tmp9 = "password" === str8.toLowerCase();
                }
                if (tmp9) {
                  const attr1 = target.setAttribute("data-rr-is-password", "true");
                }
                if (!closure_1_53(target.tagName, str5)) {
                  const doc = obj.doc;
                  const attributes = tmp6.attributes;
                  let tmp14 = closure_1_26(target.tagName);
                  attributes[str5] = closure_1_52(doc, tmp14, closure_1_26(str5), attr, target, obj.maskAttributeFn);
                  if ("style" === str5) {
                    if (!obj.unattachedDoc) {
                      try {
                        let tmp18 = globalThis;
                        const _document = document;
                        obj.unattachedDoc = implementation.createHTMLDocument();
                      } catch (err) {
                        obj.unattachedDoc = obj.doc;
                      }
                    }
                    const unattachedDoc = obj.unattachedDoc;
                    const element = <span />;
                    if (target.oldValue) {
                      const attr2 = element.setAttribute("style", target.oldValue);
                    }
                    let tmp20 = globalThis;
                    const _Array = Array;
                    const arr3 = Array.from(target.style);
                    const tmp22 = arr3;
                    const iter = arr3[Symbol.iterator]();
                    const nextResult = iter.next();
                    while (iter !== undefined) {
                      let items1;
                      let tmp26 = nextResult;
                      let style = target.style;
                      let propertyValue = style.getPropertyValue(nextResult);
                      let tmp28 = propertyValue;
                      let style2 = target.style;
                      let propertyPriority = style2.getPropertyPriority(nextResult);
                      let style3 = element.style;
                      if (propertyValue === style3.getPropertyValue(nextResult)) {
                        let style4 = element.style;
                        if (propertyPriority === style4.getPropertyPriority(tmp26)) {
                          let items = [tmp28, ];
                          items[1] = propertyPriority;
                          tmp6._unchangedStyles[tmp26] = items;
                        }
                        continue;
                      }
                      let styleDiff = tmp6.styleDiff;
                      if ("" === propertyPriority) {
                        items1 = propertyValue;
                      } else {
                        items1 = [tmp28, ];
                        items1[1] = propertyPriority;
                      }
                      styleDiff[tmp26] = items1;
                    }
                    const _Array2 = Array;
                    const arr4 = Array.from(element.style);
                    for (const item10147 of arr4) {
                      let style5 = target.style;
                      if ("" === style5.getPropertyValue(item10147)) {
                        tmp6.styleDiff[item10147] = false;
                      }
                      continue;
                    }
                  }
                }
              }
            }
          } else if ("childList" === type) {
            if (!closure_1_65(target.target, obj.blockClass, obj.blockSelector, obj.unblockSelector, true)) {
              const addedNodes = target.addedNodes;
              let item = addedNodes.forEach((item) => self.genAdds(item, target.target));
              const removedNodes = target.removedNodes;
              let item1 = removedNodes.forEach((childNodes) => {
                let addedSet;
                let addedSet2;
                let id1;
                let tmp28;
                const f82322 = () => { /* body not rendered: F82322 */ };
                const mirror = self.mirror;
                const id = mirror.getId(childNodes);
                target = target.target;
                let host;
                if (target != null) {
                  host = target.host;
                }
                let shadowRoot;
                const _Boolean = Boolean;
                if (host != null) {
                  shadowRoot = host.shadowRoot;
                }
                const mirror2 = self.mirror;
                const getId = mirror2.getId;
                const target2 = tmp3.target;
                if (_Boolean(shadowRoot === target)) {
                  id1 = getId(target2.host);
                } else {
                  id1 = getId(target2);
                }
                let tmp7 = closure_3_65(tmp3.target, self.blockClass, self.blockSelector, self.unblockSelector, false);
                if (!tmp7) {
                  const mirror3 = self.mirror;
                  tmp7 = -2 === mirror3.getId(childNodes);
                }
                if (!tmp7) {
                  const mirror4 = self.mirror;
                  tmp7 = -1 === mirror4.getId(childNodes);
                }
                if (!tmp7) {
                  ({ addedSet, addedSet: addedSet2 } = self);
                  if (addedSet.has(childNodes)) {
                    addedSet2.delete(childNodes);
                    childNodes = childNodes.childNodes;
                    if (childNodes != null) {
                      let item = childNodes.forEach(f82322);
                    }
                    const droppedSet = self.droppedSet;
                    droppedSet.add(childNodes);
                  } else {
                    let hasItem = addedSet2.has(tmp3.target) && -1 === id;
                    if (!hasItem) {
                      const target3 = tmp3.target;
                      const mirror5 = self.mirror;
                      let host1;
                      if (target3 != null) {
                        host1 = target3.host;
                      }
                      let shadowRoot1;
                      const _Boolean2 = Boolean;
                      if (host1 != null) {
                        shadowRoot1 = host1.shadowRoot;
                      }
                      let flag = false;
                      if (!_Boolean2(shadowRoot1 === target3)) {
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
                              const _Boolean3 = Boolean;
                              if (host2 != null) {
                                shadowRoot2 = host2.shadowRoot;
                              }
                              let flag2 = false;
                              if (!_Boolean3(shadowRoot2 === parentNode3)) {
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
                                      tmp20 = closure_3_67(parentNode3.parentNode, mirror5);
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
                      const movedSet = self.movedSet;
                      if (movedSet.has(childNodes)) {
                        if (typeof closure_3_81 === "function") {
                          const _HermesInternal = HermesInternal;
                          if (tmp22["" + id + "@" + id1]) {
                            const movedSet2 = self.movedSet;
                            movedSet2.delete(childNodes);
                            const childNodes1 = childNodes.childNodes;
                            if (childNodes1 != null) {
                              const item1 = childNodes1.forEach(f82322);
                            }
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      }
                      const removes = self.removes;
                      const target4 = tmp3.target;
                      let host3;
                      const push = removes.push;
                      obj = { parentId: id1, id, isShadow: tmp28 };
                      if (target4 != null) {
                        host3 = target4.host;
                      }
                      let shadowRoot3;
                      const _Boolean4 = Boolean;
                      if (host3 != null) {
                        shadowRoot3 = host3.shadowRoot;
                      }
                      const _Boolean4Result = _Boolean4(shadowRoot3 === target4);
                      let tmp27 = !_Boolean4Result;
                      if (_Boolean4Result) {
                        const _Object = Object;
                        tmp27 = "[object ShadowRoot]" !== toString.call(tmp3.target);
                      }
                      tmp28 = !tmp27;
                      push(obj);
                    }
                  }
                  const mapRemoves = self.mapRemoves;
                  mapRemoves.push(childNodes);
                }
              });
            }
          }
        }
      };
      this.genAdds = (childNodes, arg1) => {
        let mirror5;
        let movedMap;
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
                  if (hasNodeResult) {
                    const mirror3 = tmp.mirror;
                    hasNodeResult = mirror3.hasNode(arg1);
                  }
                  let id = null;
                  if (hasNodeResult) {
                    const mirror4 = tmp.mirror;
                    id = mirror4.getId(arg1);
                  }
                  const tmp6 = id && -1 !== id;
                  if (tmp6) {
                    ({ mirror: mirror5, movedMap } = _self);
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
              if (!closure_1_65(childNodes, _self.blockClass, _self.blockSelector, _self.unblockSelector, false)) {
                if (childNodes.childNodes) {
                  childNodes = childNodes.childNodes;
                  const item = childNodes.forEach((item) => childNodes.genAdds(item));
                }
                let shadowRoot;
                const _Boolean = Boolean;
                if (childNodes != null) {
                  shadowRoot = childNodes.shadowRoot;
                }
                if (_Boolean(shadowRoot)) {
                  const childNodes1 = childNodes.shadowRoot.childNodes;
                  const item1 = childNodes1.forEach((item) => {
                    const processedNodeManager = self.processedNodeManager;
                    processedNodeManager.add(item, self);
                    self.genAdds(item, childNodes);
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
      let closure_0 = arg0;
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
  let closure_0 = arg0;
  return c79 ? (() => {
    items = [...arguments];
    try {
      const items1 = [];
      HermesBuiltin.arraySpread(items1, items, 0);
      return HermesBuiltin.apply(fn, items1, undefined);
    } catch (tmp8) {
      if (closure_2_79) {
        if (true === tmp9(tmp8)) {
          return () => {

          };
        }
      }
      throw tmp8;
    }
  }) : arg0;
}
let closure_87 = [];
let closure_92 = ["INPUT", "TEXTAREA", "SELECT"];
let weakMap1 = new WeakMap();
let closure_98 = (() => {
  class CrossOriginIframeMirror {
    constructor(generateIdFn) {
      _classCallCheck(this, CrossOriginIframeMirror);
      this.generateIdFn = generateIdFn;
      weakMap = new WeakMap();
      this.iframeIdToRemoteIdMap = weakMap;
      weakMap1 = new WeakMap();
      this.iframeRemoteIdToIdMap = weakMap1;
    }
  }
  const entry = {
    key: "getId",
    value: function getId(arg0, arg1, arg2, arg3) {
      const self = this;
      obj = arg2 || self.getIdToRemoteIdMap(arg0);
      const obj2 = arg3 || self.getRemoteIdToIdMap(arg0);
      let value = obj.get(arg1);
      if (!value) {
        const idFn = self.generateIdFn();
        const result = obj.set(arg1, idFn);
        const result1 = obj2.set(idFn, arg1);
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
        let closure_0;
        let closure_2;
        const self = this;
        let closure_1 = arg0;
        const idToRemoteIdMap = this.getIdToRemoteIdMap(arg0);
        const remoteIdToIdMap = this.getRemoteIdToIdMap(arg0);
        return arr.map((item) => self.getId(closure_1, item, closure_2, closure_0));
      }
    },
    {
      key: "getRemoteId",
      value: function getRemoteId(arg0, item, arg2) {
        let remoteIdToIdMap = arg2;
        if (!remoteIdToIdMap) {
          const self = this;
          remoteIdToIdMap = this.getRemoteIdToIdMap(arg0);
        }
        if (typeof item !== "number") {
          return item;
        } else {
          const tmp2 = remoteIdToIdMap.get(item) || -1;
          return tmp2;
        }
      }
    },
    {
      key: "getRemoteIds",
      value: function getRemoteIds(arg0, arr) {
        let closure_0;
        const self = this;
        let closure_1 = arg0;
        const remoteIdToIdMap = this.getRemoteIdToIdMap(arg0);
        return arr.map((item) => self.getRemoteId(closure_1, item, closure_0));
      }
    },
    {
      key: "reset",
      value: function reset(arg0) {
        const self = this;
        const tmp = arg0;
        if (tmp) {
          const iframeIdToRemoteIdMap = self.iframeIdToRemoteIdMap;
          iframeIdToRemoteIdMap.delete(arg0);
          const iframeRemoteIdToIdMap = self.iframeRemoteIdToIdMap;
          iframeRemoteIdToIdMap.delete(arg0);
        } else {
          const _WeakMap = WeakMap;
          const self2 = this;
          const self3 = this;
          weakMap = new WeakMap();
          self.iframeIdToRemoteIdMap = weakMap;
          const _WeakMap2 = WeakMap;
          const self4 = this;
          const self5 = this;
          weakMap1 = new WeakMap();
          self.iframeRemoteIdToIdMap = weakMap1;
        }
      }
    },
    {
      key: "getIdToRemoteIdMap",
      value: function getIdToRemoteIdMap(arg0) {
        const iframeIdToRemoteIdMap = this.iframeIdToRemoteIdMap;
        let value = iframeIdToRemoteIdMap.get(arg0);
        if (!value) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          map = new Map();
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
        let value = iframeRemoteIdToIdMap.get(arg0);
        if (!value) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          map = new Map();
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
      _classCallCheck(this, IframeManagerNoop);
      this.crossOriginIframeMirror = new closure_98(genId);
      new closure_98(genId);
      weakMap = new WeakMap();
      this.crossOriginIframeRootIdMap = weakMap;
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
  let Document;
  let FullSnapshot;
  class IframeManager {
    constructor(mirror) {
      const self = this;
      _classCallCheck(this, IframeManager);
      weakMap = new WeakMap();
      this.iframes = weakMap;
      weakMap1 = new WeakMap();
      this.crossOriginIframeMap = weakMap1;
      this.crossOriginIframeMirror = new closure_98(genId);
      new closure_98(genId);
      const weakMap2 = new WeakMap();
      this.crossOriginIframeRootIdMap = weakMap2;
      ({ mutationCb: this.mutationCb, wrappedEmit: this.wrappedEmit, stylesheetManager: this.stylesheetManager, recordCrossOriginIframes: this.recordCrossOriginIframes } = mirror);
      const generateId = this.stylesheetManager.styleMirror.generateId;
      this.crossOriginIframeStyleMirror = new closure_98(generateId.bind(this.stylesheetManager.styleMirror));
      this.mirror = mirror.mirror;
      new closure_98(generateId.bind(this.stylesheetManager.styleMirror));
      if (this.recordCrossOriginIframes) {
        const _window = window;
        const handleMessage = self.handleMessage;
        const listener = window.addEventListener("message", handleMessage.bind(self));
      }
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
        let items;
        let mirror;
        let mirror2;
        let mutationCb;
        let stylesheetManager;
        const self = this;
        obj = { adds: items, removes: [], texts: [], attributes: [], isAttachIframe: true };
        const obj2 = { parentId: mirror.getId(contentWindow), nextId: null, node };
        ({ mirror, mutationCb } = this);
        items = [obj2];
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
        const tmp6 = tmp5 && tmp5.adoptedStyleSheets && tmp5.adoptedStyleSheets.length > 0;
        if (tmp6) {
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
        let items;
        let mirror;
        let obj2;
        const self = this;
        let closure_0 = value;
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
          obj = { timestamp: event.timestamp, type: FullSnapshot.IncrementalSnapshot, data: obj2 };
          obj2 = { source: obj5.Mutation, adds: items, removes: [], texts: [], attributes: [], isAttachIframe: true };
          const obj3 = { parentId: mirror.getId(value), nextId: null, node: event.data.node };
          mirror = self.mirror;
          items = [obj3];
          return obj;
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
                    if (obj5.Mutation === source) {
                      const adds = event.data.adds;
                      const item = adds.forEach((node) => {
                        self.replaceIds(node, closure_0, ["parentId", "nextId", "previousId"]);
                        self.replaceIdOnNode(node.node, closure_0);
                        const crossOriginIframeRootIdMap = self.crossOriginIframeRootIdMap;
                        const value = crossOriginIframeRootIdMap.get(closure_0);
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
                      if (obj5.Drag !== source) {
                        if (obj5.TouchMove !== source) {
                          if (obj5.MouseMove !== source) {
                            if (obj5.ViewportResize === source) {
                              return false;
                            } else {
                              if (obj5.MediaInteraction !== source) {
                                if (obj5.MouseInteraction !== source) {
                                  if (obj5.Scroll !== source) {
                                    if (obj5.CanvasMutation !== source) {
                                      if (obj5.Input !== source) {
                                        if (obj5.StyleSheetRule !== source) {
                                          if (obj5.StyleDeclaration !== source) {
                                            if (obj5.Font === source) {
                                              return event;
                                            } else if (obj5.Selection === source) {
                                              const ranges = event.data.ranges;
                                              const item4 = ranges.forEach((item) => {
                                                self.replaceIds(item, closure_0, ["start", "end"]);
                                              });
                                              return event;
                                            } else if (obj5.AdoptedStyleSheet === source) {
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
        let closure_0 = value;
        this.replaceIds(node, value, ["id", "rootId"]);
        if ("childNodes" in node) {
          const childNodes = node.childNodes;
          const item = childNodes.forEach((item) => {
            self.replaceIdOnNode(item, IframeManager);
          });
        }
      }
    },
    {
      key: "patchRootIdOnNode",
      value: function patchRootIdOnNode(node, id) {
        const self = this;
        let closure_0 = id;
        const tmp = node.type === Document.Document || node.rootId;
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
      _classCallCheck(this, ShadowDomManagerNoop);
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
      _classCallCheck(this, ShadowDomManager);
      const weakSet = new WeakSet();
      this.shadowDoms = weakSet;
      this.restoreHandlers = [];
      ({ mutationCb: this.mutationCb, scrollCb: this.scrollCb, bypassOptions: this.bypassOptions, mirror: this.mirror } = arg0);
      this.init();
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
        if ("[object ShadowRoot]" === toString.call(doc)) {
          const shadowDoms2 = self.shadowDoms;
          if (!shadowDoms2.has(doc)) {
            const shadowDoms = self.shadowDoms;
            shadowDoms.add(doc);
            const canvasManager = self.bypassOptions.canvasManager;
            canvasManager.addShadowRoot(doc);
            obj = { doc: doc2, shadowDomManager: self };
            const merged = Object.assign(self.bypassOptions);
            ({ mutationCb: obj.mutationCb, mirror: obj.mirror } = self);
            let closure_0 = closure_89(obj, doc);
            let restoreHandlers = self.restoreHandlers;
            restoreHandlers.push(() => closure_0.disconnect());
            const push = self.restoreHandlers.push;
            const obj2 = { scrollCb: self.scrollCb, doc, mirror: self.mirror };
            const merged1 = Object.assign(self.bypassOptions);
            push(closure_91(obj2));
            closure_72(() => {
              const adoptedStyleSheets = doc.adoptedStyleSheets && doc.adoptedStyleSheets.length > 0;
              if (adoptedStyleSheets) {
                const stylesheetManager = self.bypassOptions.stylesheetManager;
                const mirror = self.mirror;
                stylesheetManager.adoptStyleSheets(doc.adoptedStyleSheets, mirror.getId(doc.host));
              }
              obj = { mirror: self.mirror, stylesheetManager: self.bypassOptions.stylesheetManager };
              const restoreHandlers = self.restoreHandlers;
              restoreHandlers.push(initAdoptedStyleSheetObserver(obj, doc));
            }, 0);
          }
        }
      }
    },
    {
      key: "observeAttachShadow",
      value: function observeAttachShadow(contentWindow) {
        function getIFrameContentWindow(contentWindow) {
          try {
            return contentWindow.contentWindow;
          } catch (err) {
          }
        }
        const tmp = getIFrameContentDocument(contentWindow);
        const tmp2 = getIFrameContentWindow(contentWindow);
        const tmp3 = tmp && tmp2;
        if (tmp3) {
          const self = this;
          this.patchAttachShadow(tmp2.Element, tmp);
        }
      }
    },
    {
      key: "patchAttachShadow",
      value: function patchAttachShadow(Element, document) {
        let closure_0 = document;
        let self = this;
        const restoreHandlers = this.restoreHandlers;
        restoreHandlers.push(closure_61(Element.prototype, "attachShadow", (arg0) => {
          let closure_0 = arg0;
          return function(arg0) {
            self = this;
            let shadowRoot = self.shadowRoot;
            const callResult = closure_0.call(self, arg0);
            if (shadowRoot) {
              shadowRoot = inDom(self);
            }
            if (shadowRoot) {
              self.addShadowRoot(self.shadowRoot, closure_0);
            }
            return callResult;
          };
        }));
      }
    },
    {
      key: "reset",
      value: function reset() {
        const restoreHandlers = this.restoreHandlers;
        const item = restoreHandlers.forEach((fn) => {
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
  items = [];
} else {
  let _Uint8Array = Uint8Array;
  let self6 = this;
  let num4 = 256;
  let self7 = this;
  items = new Uint8Array(256);
}
let num = 0;
do {
  let charCodeAt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt;
  items["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(num)] = num;
  num = num + 1;
} while (num < 64);
let closure_105 = (() => {
  class CanvasManagerNoop {
    constructor() {
      _classCallCheck(this, CanvasManagerNoop);
    }
  }
  const entry = {
    key: "reset",
    value: function reset() {

    }
  };
  const items = [
    entry,
    {
      key: "freeze",
      value: function freeze() {

      }
    },
    {
      key: "unfreeze",
      value: function unfreeze() {

      }
    },
    {
      key: "lock",
      value: function lock() {

      }
    },
    {
      key: "unlock",
      value: function unlock() {

      }
    },
    {
      key: "snapshot",
      value: function snapshot() {

      }
    },
    {
      key: "addWindow",
      value: function addWindow() {

      }
    },
    {
      key: "addShadowRoot",
      value: function addShadowRoot() {

      }
    },
    {
      key: "resetShadowRoots",
      value: function resetShadowRoots() {

      }
    }
  ];
  return _createClass(CanvasManagerNoop, items);
})();
let closure_106 = (() => {
  class StylesheetManager {
    constructor(arg0) {
      _classCallCheck(this, StylesheetManager);
      const weakSet = new WeakSet();
      this.trackedLinkElements = weakSet;
      this.styleMirror = new closure_68();
      ({ mutationCb: this.mutationCb, adoptedStyleSheetCb: this.adoptedStyleSheetCb } = arg0);
      new closure_68();
    }
  }
  const entry = {
    key: "attachLinkElement",
    value: function attachLinkElement(nodeName, attributes) {
      let items;
      const self = this;
      if ("_cssText" in attributes.attributes) {
        obj = { adds: [], removes: [], texts: [], attributes: items };
        const obj3 = { id: null, attributes: null };
        ({ id: obj2.id, attributes: obj2.attributes } = attributes);
        items = [obj3];
        self.mutationCb(obj);
      }
      self.trackLinkElement(nodeName);
    }
  };
  let items = [
    entry,
    {
      key: "trackLinkElement",
      value: function trackLinkElement(nodeName) {
        const self = this;
        const trackedLinkElements = this.trackedLinkElements;
        if (!trackedLinkElements.has(nodeName)) {
          const trackedLinkElements2 = self.trackedLinkElements;
          trackedLinkElements2.add(nodeName);
          const result = self.trackStylesheetInLinkElement(nodeName);
        }
      }
    },
    {
      key: "adoptStyleSheets",
      value: function adoptStyleSheets(adoptedStyleSheets, id) {
        let CSSRule;
        let from;
        let styleMirror;
        let styleMirror2;
        const self = this;
        if (0 !== adoptedStyleSheets.length) {
          const obj2 = { id, styleIds: [] };
          const items = [];
          const iter = adoptedStyleSheets[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp4 = nextResult;
            ({ styleMirror, styleMirror: styleMirror2 } = self);
            if (styleMirror.has(nextResult)) {
              id = styleMirror2.getId(tmp4);
            } else {
              let addResult = styleMirror2.add(tmp4);
              id = addResult;
              obj = {
                styleId: addResult,
                rules: from(CSSRule, (arg0, index) => {
                        obj = { rule: closure_1_22(arg0), index };
                        return obj;
                      })
              };
              CSSRule = tmp4.rules;
              let push = items.push;
              let _Array = Array;
              from = Array.from;
              if (!CSSRule) {
                CSSRule = globalThis.CSSRule;
              }
              let arr = push(obj);
            }
            let styleIds = obj2.styleIds;
            let arr2 = styleIds.push(id);
            continue;
          }
          if (items.length > 0) {
            obj2.styles = items;
          }
          self.adoptedStyleSheetCb(obj2);
        }
      }
    },
    {
      key: "reset",
      value: function reset() {
        const styleMirror = this.styleMirror;
        styleMirror.reset();
        const weakSet = new WeakSet();
        this.trackedLinkElements = weakSet;
      }
    },
    {
      key: "trackStylesheetInLinkElement",
      value: function trackStylesheetInLinkElement(nodeName) {

      }
    }
  ];
  return _createClass(StylesheetManager, items);
})();
let closure_107 = (() => {
  class ProcessedNodeManager {
    constructor() {
      _classCallCheck(this, ProcessedNodeManager);
      weakMap = new WeakMap();
      this.nodeMap = weakMap;
      this.active = false;
    }
  }
  const entry = {
    key: "inOtherBuffer",
    value: function inOtherBuffer(childNodes, childNodes2) {
      let closure_0 = childNodes;
      const nodeMap = this.nodeMap;
      const value = nodeMap.get(childNodes);
      let someResult = value;
      if (someResult) {
        const _Array = Array;
        const arr = Array.from(value);
        someResult = arr.some((item) => item !== childNodes);
      }
      return someResult;
    }
  };
  let items = [
    entry,
    {
      key: "add",
      value: function add(arg0, arg1) {
        let nodeMap;
        let nodeMap2;
        function onRequestAnimationFrame() {
          const items = [...arguments];
          const tmp = closure_1_71("requestAnimationFrame");
          return tmp(...items);
        }
        const self = this;
        if (!this.active) {
          self.active = true;
          let tmp = onRequestAnimationFrame(() => {
            weakMap = new WeakMap();
            self.nodeMap = weakMap;
            self.active = false;
          });
        }
        ({ nodeMap, nodeMap: nodeMap2 } = self);
        set = nodeMap.set;
        set1 = nodeMap2.get(arg0);
        if (!set1) {
          const _Set = Set;
          const self2 = this;
          const self3 = this;
          set1 = new Set();
        }
        const result = set(arg0, set1.add(arg1));
      }
    },
    {
      key: "destroy",
      value: function destroy() {

      }
    }
  ];
  return _createClass(ProcessedNodeManager, items);
})();
try {
  let _Array = Array;
  let num2 = 2;
  if (2 !== Array.from([1], (arg0) => 2 * arg0)[0]) {
    let _document2 = document;
    let str10 = "iframe";
    let element = <iframe />;
    let tmp28 = element;
    let _document3 = document;
    let body2 = document.body;
    body2.appendChild(element);
    let contentWindow = element.contentWindow;
    let tmp30 = null;
    let from;
    const _Array3 = Array;
    if (contentWindow != null) {
      from = contentWindow.Array.from;
    }
    if (!from) {
      let _Array2 = Array;
      from = Array.from;
    }
    _Array3.from = from;
    let _document = document;
    body.removeChild(element);
  }
  let tmp20 = createMirror$2();
  const navigation = tmp20;
  record.mirror = tmp20;
  record.takeFullSnapshot = function takeFullSnapshot(arg0) {
    if (c104) {
      tmp(arg0);
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("please take full snapshot after start recording");
      throw error;
    }
  };
  let obj9 = { NotStarted: 0, Running: 1, Stopped: 2 };
  let str3 = "NotStarted";
  obj9[0] = "NotStarted";
  let str4 = "Running";
  obj9[1] = "Running";
  let num3 = 2;
  let str5 = "Stopped";
  obj9[2] = "Stopped";
  let _Set = Set;
  let items1 = [, , , , , , ];
  ({ Mutation: arr2[0], StyleSheetRule: arr2[1], StyleDeclaration: arr2[2], AdoptedStyleSheet: arr2[3], CanvasMutation: arr2[4], Selection: arr2[5], MediaInteraction: arr2[6] } = obj5);
  let self2 = this;
  let self3 = this;
  let tmp21 = items1;
  let set = new Set(items1);
  let tmp23 = set;
  let closure_115 = (() => {
    class ClickDetector {
      constructor(_replay, arg1) {
        let tmp = arg2;
        if (arg2 === undefined) {
          tmp = addBreadcrumbEvent;
        }
        _classCallCheck(this, ClickDetector);
        this._lastMutation = 0;
        this._lastScroll = 0;
        this._clicks = [];
        this._timeout = arg1.timeout / 1000;
        this._threshold = arg1.threshold / 1000;
        this._scrollTimeout = arg1.scrollTimeout / 1000;
        this._replay = _replay;
        this._ignoreSelector = arg1.ignoreSelector;
        this._addBreadcrumbEvent = tmp;
      }
    }
    const entry = {
      key: "addListeners",
      value: function addListeners() {
        const self = this;
        const fn = () => {
          self._lastMutation = Date.now() / 1000;
        };
        if (!closure_111) {
          closure_111 = [];
          obj = fn(closure_1[8]);
          obj.fill(fn(closure_1[8]).GLOBAL_OBJ, "open", (arg0) => {
            let closure_0 = arg0;
            return () => {
              const items = [...arguments];
              if (closure_111) {
                try {
                  const item = closure_111.forEach((fn) => fn());
                } catch (err) {
                }
              }
              return closure_0.apply(fn(closure_2_1[8]).GLOBAL_OBJ, items);
            };
          });
        }
        closure_111.push(fn);
        const f82372 = () => {

        };
        this._teardown = () => {
          if (typeof f82372 === "function") {
            let num2 = -1;
            if (closure_1_111) {
              num2 = closure_1_111.indexOf(f82372);
            }
            if (num2 > -1) {
              closure_1_111.splice(num2, 1);
            }
            self._clicks = [];
            self._lastMutation = 0;
            self._lastScroll = 0;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        };
      }
    };
    let items = [entry, , , , , , , , , , ];
    const entry1 = {
      key: "removeListeners",
      value: function removeListeners() {
        const self = this;
        if (this._teardown) {
          self._teardown();
        }
        if (self._checkClickTimeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(self._checkClickTimeout);
        }
      }
    };
    items[1] = entry1;
    items[2] = {
      key: "handleClick",
      value: function handleClick(data, tagName) {
        const self = this;
        const _ignoreSelector = this._ignoreSelector;
        let flag = true;
        if (closure_1_116.includes(tagName.tagName)) {
          if ("INPUT" !== tagName.tagName) {
            if ("A" !== tagName.tagName) {
              flag = false;
              if (_ignoreSelector) {
                flag = false;
                if (tagName.matches(_ignoreSelector)) {
                  flag = true;
                }
              }
            } else {
              flag = true;
              if (!tagName.hasAttribute("download")) {
                if (tagName.hasAttribute("target")) {
                  flag = true;
                }
              }
            }
          } else {
            const items = ["submit", "button"];
            const includes = items.includes;
            const tmp = tagName.getAttribute("type") || "";
            flag = true;
          }
        }
        if (!flag) {
          let tmp2 = data;
          data = data.data;
          let tmp3 = !data;
          if (data) {
            tmp3 = typeof data.data.nodeId !== "number";
          }
          if (!tmp3) {
            tmp3 = !data.timestamp;
          }
          if (!tmp3) {
            const timestamp = data.timestamp;
            let result = timestamp;
            if (timestamp > 9999999999) {
              result = timestamp / 1000;
            }
            obj = { timestamp: result, clickBreadcrumb: data, clickCount: 0, node: tagName };
            const _clicks = self._clicks;
            if (!_clicks.some((node) => {
              let tmp2 = node.node === obj.node;
              if (tmp2) {
                const _Math = Math;
                tmp2 = Math.abs(node.timestamp - tmp.timestamp) < 1;
              }
              return tmp2;
            })) {
              const _clicks1 = self._clicks;
              _clicks1.push(obj);
              if (1 === self._clicks.length) {
                self._scheduleCheckClicks();
              }
            }
          }
        }
      }
    };
    items[3] = {
      key: "registerMutation",
      value: function registerMutation() {
        let timestamp;
        if (timestamp === undefined) {
          const _Date = Date;
          timestamp = Date.now();
        }
        let result = timestamp;
        if (timestamp > 9999999999) {
          result = timestamp / 1000;
        }
        this._lastMutation = result;
      }
    };
    items[4] = {
      key: "registerScroll",
      value: function registerScroll() {
        let timestamp;
        if (timestamp === undefined) {
          const _Date = Date;
          timestamp = Date.now();
        }
        let result = timestamp;
        if (timestamp > 9999999999) {
          result = timestamp / 1000;
        }
        this._lastScroll = result;
      }
    };
    items[5] = {
      key: "registerClick",
      value: function registerClick(node) {
        const tmp = node.closest("button,a") || node;
        this._handleMultiClick(tmp);
      }
    };
    items[6] = {
      key: "_handleMultiClick",
      value: function _handleMultiClick(arg0) {
        const _getClicksResult = this._getClicks(arg0);
        const item = _getClicksResult.forEach((clickCount) => {
          clickCount.clickCount = clickCount.clickCount + 1;
        });
      }
    };
    items[7] = {
      key: "_getClicks",
      value: function _getClicks(arg0) {
        let closure_0 = arg0;
        const _clicks = this._clicks;
        return _clicks.filter((node) => node.node === closure_0);
      }
    };
    items[8] = {
      key: "_checkClicks",
      value: function _checkClicks() {
        const self = this;
        const items = [];
        let closure_0 = nowInSeconds();
        const _clicks = this._clicks;
        const item = _clicks.forEach((mutationAfter) => {
          const _lastMutation = !mutationAfter.mutationAfter && self._lastMutation;
          if (_lastMutation) {
            let diff;
            if (mutationAfter.timestamp <= self._lastMutation) {
              diff = self._lastMutation - mutationAfter.timestamp;
            }
            mutationAfter.mutationAfter = diff;
          }
          const _lastScroll = !mutationAfter.scrollAfter && self._lastScroll;
          if (_lastScroll) {
            let diff1;
            if (mutationAfter.timestamp <= self._lastScroll) {
              diff1 = self._lastScroll - mutationAfter.timestamp;
            }
            mutationAfter.scrollAfter = diff1;
          }
          if (mutationAfter.timestamp + self._timeout <= closure_0) {
            items.push(mutationAfter);
          }
        });
        const iter = items[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let _clicks1 = self._clicks;
          let tmp3 = nextResult;
          let index = _clicks1.indexOf(nextResult);
          if (index > -1) {
            let _generateBreadcrumbsResult = self._generateBreadcrumbs(tmp3);
            let _clicks2 = self._clicks;
            let spliceResult = _clicks2.splice(tmp5, 1);
          }
          continue;
        }
        if (self._clicks.length) {
          self._scheduleCheckClicks();
        }
      }
    };
    items[9] = {
      key: "_generateBreadcrumbs",
      value: function _generateBreadcrumbs(scrollAfter) {
        let clickBreadcrumb;
        let clickCount;
        let obj2;
        const self = this;
        const _replay = this._replay;
        const tmp3 = !(scrollAfter.scrollAfter && scrollAfter.scrollAfter <= self._scrollTimeout) && !(scrollAfter.mutationAfter && scrollAfter.mutationAfter <= self._threshold);
        ({ clickCount, clickBreadcrumb } = scrollAfter);
        if (tmp3) {
          let _timeout = scrollAfter.mutationAfter;
          const _Math = Math;
          if (!_timeout) {
            _timeout = self._timeout;
          }
          const result = 1000 * min(_timeout, self._timeout);
          let str = "timeout";
          if (result < 1000 * self._timeout) {
            str = "mutation";
          }
          obj = { type: "default", message: null, timestamp: null, category: "ui.slowClickDetected", data: obj2 };
          ({ message: obj.message, timestamp: obj.timestamp } = clickBreadcrumb);
          obj2 = { url: ClickDetector(dependencyMap[8]).GLOBAL_OBJ.location.href, route: _replay.getCurrentRoute(), timeAfterClickMs: result, endReason: str, clickCount };
          const merged = Object.assign(clickBreadcrumb.data);
          if (!clickCount) {
            clickCount = 1;
          }
          self._addBreadcrumbEvent(_replay, obj);
        } else if (clickCount > 1) {
          obj4 = { type: "default", message: null, timestamp: null, category: "ui.multiClick", data: obj7 };
          ({ message: obj3.message, timestamp: obj3.timestamp } = clickBreadcrumb);
          obj7 = { url: ClickDetector(dependencyMap[8]).GLOBAL_OBJ.location.href, route: _replay.getCurrentRoute(), clickCount, metric: true };
          const merged1 = Object.assign(clickBreadcrumb.data);
          self._addBreadcrumbEvent(_replay, obj4);
        }
      }
    };
    items[10] = {
      key: "_scheduleCheckClicks",
      value: function _scheduleCheckClicks() {
        const self = this;
        if (this._checkClickTimeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(self._checkClickTimeout);
        }
        obj = ClickDetector(dependencyMap[9]);
        self._checkClickTimeout = obj.setTimeout(() => self._checkClicks(), 1000);
      }
    };
    return _createClass(ClickDetector, items);
  })();
  let closure_116 = ["A", "BUTTON", "INPUT"];
  let obj10 = {};
  let tmp24 = ((arg0) => {
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
  })(obj10);
  let _Set2 = Set;
  let self4 = this;
  let self5 = this;
  let set1 = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]);
  let tmp26 = set1;
  function handleDomListener(arg0) {

  }
  let obj11 = {
    resource: function createResourceEntry(initiatorType) {
        let decodedBodySize;
        let encodedBodySize;
        let entryType;
        let name;
        let obj2;
        let obj3;
        let responseEnd;
        let responseStatus;
        let startTime;
        let tmp2Result;
        let transferSize;
        initiatorType = initiatorType.initiatorType;
        const items = ["fetch", "xmlhttprequest"];
        ({ entryType, name, responseEnd, startTime, decodedBodySize, encodedBodySize, responseStatus, transferSize } = initiatorType);
        if (items.includes(initiatorType)) {
          return null;
        } else {
          const _HermesInternal = HermesInternal;
          obj = { type: "" + entryType + "." + initiatorType, start: ((obj2.browserPerformanceTimeOrigin() || _mod693.GLOBAL_OBJ.performance.timeOrigin) + startTime) / 1000, end: ((tmp2Result.browserPerformanceTimeOrigin() || _mod693.GLOBAL_OBJ.performance.timeOrigin) + responseEnd) / 1000, name, data: obj3 };
          obj2 = _mod693;
          obj2.browserPerformanceTimeOrigin() || _mod693.GLOBAL_OBJ.performance.timeOrigin;
          tmp2Result = _mod693;
          obj3 = { size: transferSize, statusCode: responseStatus, decodedBodySize, encodedBodySize };
          tmp2Result.browserPerformanceTimeOrigin() || _mod693.GLOBAL_OBJ.performance.timeOrigin;
          return obj;
        }
      },
    paint: function createPaintEntry(arg0) {
        let duration;
        let entryType;
        let name;
        let startTime;
        ({ duration, entryType, name, startTime } = arg0);
        obj = _mod693;
        const result = ((obj.browserPerformanceTimeOrigin() || _mod693.GLOBAL_OBJ.performance.timeOrigin) + startTime) / 1000;
        obj.browserPerformanceTimeOrigin() || _mod693.GLOBAL_OBJ.performance.timeOrigin;
        return { type: entryType, name, start: result, end: result + duration, data: "formatToPlainString" };
      },
    navigation: function createNavigationEntry(arg0) {
        let domComplete;
        let duration;
        let obj2;
        let tmp18Result;
        ({ duration, domComplete } = arg0);
        if (0 === duration) {
          return null;
        } else {
          const _HermesInternal = HermesInternal;
          obj = { type: "" + tmp + "." + tmp13, start: ((obj4.browserPerformanceTimeOrigin() || _mod693.GLOBAL_OBJ.performance.timeOrigin) + tmp11) / 1000, end: ((tmp18Result.browserPerformanceTimeOrigin() || _mod693.GLOBAL_OBJ.performance.timeOrigin) + domComplete) / 1000, name: tmp2, data: obj2 };
          obj4 = _mod693;
          obj4.browserPerformanceTimeOrigin() || _mod693.GLOBAL_OBJ.performance.timeOrigin;
          tmp18Result = _mod693;
          obj2 = { size: tmp12, decodedBodySize: tmp3, encodedBodySize: tmp4, duration, domInteractive: tmp7, domContentLoadedEventStart: tmp5, domContentLoadedEventEnd: tmp6, loadEventStart: tmp8, loadEventEnd: tmp9, domComplete, redirectCount: tmp10 };
          tmp18Result.browserPerformanceTimeOrigin() || _mod693.GLOBAL_OBJ.performance.timeOrigin;
          return obj;
        }
      }
  };
  const __SENTRY_DEBUG__2 = typeof globalThis.__SENTRY_DEBUG__ === "undefined" || globalThis.__SENTRY_DEBUG__;
  let forEach = ["log", "warn", "error"];
  let str6 = "[Replay] ";
  let c132 = "[Replay] ";
  let closure_133 = makeReplayDebugLogger();
  let _Error = Error;
  let closure_134 = ((arg0) => {
    class EventBufferSizeExceededError {
      constructor() {
        self = this;
        tmp = closure_7(this, EventBufferSizeExceededError);
        items = ["Event buffer exceeded maximum size of 20000000."];
        tmp2 = closure_4;
        obj = closure_4(EventBufferSizeExceededError);
        tmp3 = closure_3;
        if (_isNativeReflectConstruct()) {
          tmp5 = globalThis;
          _Reflect = Reflect;
          constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
        } else {
          constructResult = obj.apply(self, items);
        }
        return tmp3(self, constructResult);
      }
    }
    _inherits(EventBufferSizeExceededError, arg0);
    return _createClass(EventBufferSizeExceededError);
  })(_wrapNativeSuper(Error));
  let closure_135 = (() => {
    class EventBufferArray {
      constructor() {
        _classCallCheck(this, EventBufferArray);
        this.events = [];
        this._totalSize = 0;
        this.hasCheckout = false;
        this.waitForCheckout = false;
      }
    }
    obj = {
      key: "hasEvents",
      get() {
        return this.events.length > 0;
      }
    };
    const items = [
      obj,
      {
        key: "type",
        get() {
          return "sync";
        }
      },
      {
        key: "destroy",
        value: function destroy() {
          this.events = [];
        }
      },
    ,
    ,
    ,

    ];
    const entry = {
      key: "addEvent",
      value: function addEvent(arg0) {
        return closure_0(...arguments);
      }
    };
    let closure_0 = _asyncToGenerator(async function(arg0) {
      let self = this;
      let closure_1 = arg0;
      let c2 = 0;
      return (async function(arg0) {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              return { value, done: true };
            } else {
              const _JSON = JSON;
              self._totalSize = self._totalSize + JSON.stringify(closure_1).length;
              const tmp11 = self;
              if (self._totalSize > closure_1_14) {
                self = this;
                const self2 = this;
                const tmp5 = new closure_1_134();
                throw tmp5;
              } else {
                const events = tmp11.events;
                events.push(closure_1);
                c2 = 3;
                return { value: "IconComponent", done: null };
              }
            }
          } catch (tmp7) {
            c2 = 3;
            throw tmp7;
          }
        }
      })();
    });
    items[3] = entry;
    items[4] = {
      key: "finish",
      value: function finish() {
        const self = this;
        const promise = new Promise((fn) => {
          const events = self.events;
          self.clear();
          fn(JSON.stringify(events));
        });
        return promise;
      }
    };
    items[5] = {
      key: "clear",
      value: function clear() {

      }
    };
    items[6] = {
      key: "getEarliestTimestamp",
      value: function getEarliestTimestamp() {
        const events = this.events;
        const mapped = events.map((timestamp) => timestamp.timestamp);
        const first = mapped.sort()[0];
        let tmp2 = null;
        if (first) {
          let result = first;
          if (first <= 9999999999) {
            result = 1000 * first;
          }
          tmp2 = result;
        }
        return tmp2;
      }
    };
    return _createClass(EventBufferArray, items);
  })();
  let closure_136 = (() => {
    let logger;
    class WorkerHandler {
      constructor(_worker) {
        _classCallCheck(this, WorkerHandler);
        this._worker = _worker;
        this._id = 0;
      }
    }
    const entry = {
      key: "ensureReady",
      value: function ensureReady() {
        const f134506 = (arg0, arg1) => {
          let closure_0 = arg0;
          let closure_1 = arg1;
          const _worker = self._worker;
          const listener = _worker.addEventListener("message", (event) => {
            if (event.data.success) {
              closure_0();
            } else {
              closure_1();
            }
          }, { once: true });
          const _worker2 = self._worker;
          const listener1 = _worker2.addEventListener("error", (event) => {
            closure_1(event);
          }, { once: true });
        };
        const self = this;
        if (!this._ensureReadyPromise) {
          const self2 = this;
          const self3 = this;
          self._ensureReadyPromise = new Promise(f134506);
          const promise = new Promise(f134506);
        }
        return self._ensureReadyPromise;
      }
    };
    const items = [
      entry,
      {
        key: "destroy",
        value: function destroy() {
          if (__SENTRY_DEBUG__2) {
            logger.log("Destroying compression worker");
          }
          const _worker = this._worker;
          _worker.terminate();
        }
      },
      {
        key: "postMessage",
        value: function postMessage(method, arg1) {
          let self = this;
          let closure_2 = arg1;
          let id = this._getAndIncrementId();
          const promise = new Promise((arg0, arg1) => {
            let closure_0;
            let closure_1;
            id = arg0;
            method = arg1;
            function listener(event) {
              const data = event.data;
              if (data.method === method) {
                if (data.id === id) {
                  const _worker = self._worker;
                  const removed = _worker.removeEventListener("message", listener);
                  if (data.success) {
                    id(data.response);
                  } else {
                    if (__SENTRY_DEBUG__2) {
                      logger.error("Error in compression worker: ", data.response);
                    }
                    const _Error = Error;
                    self = this;
                    const self2 = this;
                    const error = new Error("Error in compression worker");
                    method(error);
                  }
                }
              }
            }
            let _worker = self._worker;
            const listener1 = _worker.addEventListener("message", listener);
            const _worker2 = self._worker;
            obj = { id, method, arg: listener };
            _worker2.postMessage(obj);
          });
          return promise;
        }
      },
      {
        key: "_getAndIncrementId",
        value: function _getAndIncrementId() {
          this._id = +this._id + 1;
          return +this._id;
        }
      }
    ];
    return _createClass(WorkerHandler, items);
  })();
  let closure_137 = (() => {
    class EventBufferCompressionWorker {
      constructor(arg0) {
        _classCallCheck(this, EventBufferCompressionWorker);
        this._worker = new closure_136(arg0);
        this._earliestTimestamp = null;
        this._totalSize = 0;
        this.hasCheckout = false;
        this.waitForCheckout = false;
        new closure_136(arg0);
      }
    }
    obj = {
      key: "hasEvents",
      get() {
        return this._earliestTimestamp;
      }
    };
    const items = [
      obj,
      {
        key: "type",
        get() {
          return "worker";
        }
      },
      {
        key: "ensureReady",
        value: function ensureReady() {
          const _worker = this._worker;
          return _worker.ensureReady();
        }
      },
      {
        key: "destroy",
        value: function destroy() {
          const _worker = this._worker;
          _worker.destroy();
        }
      },
      {
        key: "addEvent",
        value: function addEvent(timestamp) {
          let rejectResult;
          timestamp = timestamp.timestamp;
          let result = timestamp;
          if (timestamp <= 9999999999) {
            result = 1000 * timestamp;
          }
          const self = this;
          const _earliestTimestamp = this._earliestTimestamp;
          let tmp2 = !_earliestTimestamp;
          if (_earliestTimestamp) {
            tmp2 = result < self._earliestTimestamp;
          }
          if (tmp2) {
            self._earliestTimestamp = result;
          }
          const json = JSON.stringify(timestamp);
          self._totalSize = self._totalSize + json.length;
          if (self._totalSize > closure_1_14) {
            const self2 = this;
            const self3 = this;
            const tmp5 = new closure_1_134();
            rejectResult = reject(tmp5);
          } else {
            rejectResult = self._sendEventToWorker(json);
          }
          return rejectResult;
        }
      },
      {
        key: "finish",
        value: function finish() {
          return this._finishRequest();
        }
      },
      {
        key: "clear",
        value: function clear() {
          this._earliestTimestamp = null;
          this._totalSize = 0;
          this.hasCheckout = false;
          const _worker = this._worker;
          const postMessageResult = _worker.postMessage("clear");
          postMessageResult.then(null, (error) => {
            if (closure_1_130) {
              closure_1_133.exception(error, "Sending \"clear\" message to worker failed", error);
            }
          });
        }
      },
      {
        key: "getEarliestTimestamp",
        value: function getEarliestTimestamp() {
          return this._earliestTimestamp;
        }
      },
      {
        key: "_sendEventToWorker",
        value: function _sendEventToWorker(json) {
          const _worker = this._worker;
          return _worker.postMessage("addEvent", json);
        }
      },

    ];
    const entry = {
      key: "_finishRequest",
      value: function _finishRequest() {
        return closure_0(...arguments);
      }
    };
    let closure_0 = _asyncToGenerator(async function() {
      let closure_1;
      let value;
      const self = this;
      let c3 = 0;
      let c4 = 0;
      return (async () => {
        closure_2 = self;
        const _worker = self._worker;
        await _worker.postMessage("finish");
        closure_2._earliestTimestamp = null;
        closure_2._totalSize = 0;
        return value;
      })();
    });
    items[9] = entry;
    return _createClass(EventBufferCompressionWorker, items);
  })();
  let closure_138 = (() => {
    let closure_2;
    class EventBufferProxy {
      constructor(arg0) {
        _classCallCheck(this, EventBufferProxy);
        this._fallback = new closure_135();
        new closure_135();
        this._compression = new closure_137(arg0);
        this._used = this._fallback;
        new closure_137(arg0);
        this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded();
      }
    }
    obj = {
      key: "waitForCheckout",
      get() {
        return this._used.waitForCheckout;
      },
      set(waitForCheckout) {
        this._used.waitForCheckout = waitForCheckout;
      }
    };
    let items = [
      obj,
      {
        key: "type",
        get() {
          return this._used.type;
        }
      },
      {
        key: "hasEvents",
        get() {
          return this._used.hasEvents;
        }
      },
      {
        key: "hasCheckout",
        get() {
          return this._used.hasCheckout;
        },
        set(hasCheckout) {
          this._used.hasCheckout = hasCheckout;
        }
      },
      {
        key: "destroy",
        value: function destroy() {
          const _fallback = this._fallback;
          _fallback.destroy();
          const _compression = this._compression;
          _compression.destroy();
        }
      },
      {
        key: "clear",
        value: function clear() {
          const _used = this._used;
          return _used.clear();
        }
      },
      {
        key: "getEarliestTimestamp",
        value: function getEarliestTimestamp() {
          const _used = this._used;
          return _used.getEarliestTimestamp();
        }
      },
      {
        key: "addEvent",
        value: function addEvent(arg0) {
          const _used = this._used;
          return _used.addEvent(arg0);
        }
      },
    ,
    ,
    ,

    ];
    const entry = {
      key: "finish",
      value: function finish() {
        return closure_2(...arguments);
      }
    };
    _asyncToGenerator = _asyncToGenerator(async function() {
      const self = this;
      let c2 = 0;
      let c3 = 0;
      return (async () => {
        _used = self;
        await self.ensureWorkerIsLoaded();
        _used = _used._used;
        return _used.finish();
      })();
    });
    items[8] = entry;
    items[9] = {
      key: "ensureWorkerIsLoaded",
      value: function ensureWorkerIsLoaded() {
        return this._ensureWorkerIsLoadedPromise;
      }
    };
    const entry1 = {
      key: "_ensureWorkerIsLoaded",
      value: function _ensureWorkerIsLoaded() {
        return closure_1(...arguments);
      }
    };
    let closure_1 = _asyncToGenerator(async function() {
      let closure_5;
      const self = this;
      let c6 = 0;
      let c7 = 0;
      let c4 = 0;
      return (async () => {
        closure_3 = self;
        const _compression = self._compression;
        ensureReadyResult = _compression.ensureReady();
        await ensureReadyResult;
        await "IconComponent";
        ensureReadyResult = closure_3._switchToCompressionWorker();
        await ensureReadyResult;
        closure_0 = closure_5;
        if (closure_1_130) {
          ensureReadyResult = closure_0;
          closure_1_133.exception(closure_0, "Failed to load the compression worker, falling back to simple buffer");
        }
      })();
    });
    items[10] = entry1;
    const entry2 = {
      key: "_switchToCompressionWorker",
      value: function _switchToCompressionWorker() {
        return closure_0(...arguments);
      }
    };
    let closure_0 = _asyncToGenerator(async function() {
      const self = this;
      let c8 = 0;
      let c9 = 0;
      let c6 = 0;
      return (async (arg0) => {
        let hasCheckout;
        let waitForCheckout;
        if (c9 === 2) {
          c9 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          while (true) {
            c9 = 2;
            let tmp4 = c8;
            if (0 === c8) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                _fallback = self;
                closure_4 = tmp;
                closure_3 = tmp4;
                let _fallback2 = self._fallback;
                events = _fallback2.events;
                let items = [];
                ({ hasCheckout, waitForCheckout } = _fallback2);
                closure_1 = events[Symbol.iterator]();
                while (closure_1 !== undefined) {
                  let _compression = self._compression;
                  let arr = items.push(_compression.addEvent(tmp20));
                  c6 = 0;
                  continue;
                }
                self._compression.hasCheckout = hasCheckout;
                self._compression.waitForCheckout = waitForCheckout;
                self._used = self._compression;
                c6 = 2;
                let _Promise = Promise;
                c8 = 3;
                c9 = 1;
                obj4 = { value: Promise.all(items), done: false };
                return obj4;
              }
            } else if (1 === tmp4) {
              c6 = 0;
              closure_1.return();
              throw closure_1_7;
            } else {
              if (2 === tmp4) {
                c6 = 0;
                closure_0 = closure_1_7;
                if (closure_1_130) {
                  let exceptionResult = closure_1_133.exception(closure_0, "Failed to add events when switching buffers.");
                }
              } else if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c9 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                _fallback = _fallback._fallback;
                let clearResult = _fallback.clear();
                c6 = 0;
              }
              c9 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        }
      })();
    });
    items[11] = entry2;
    return _createClass(EventBufferProxy, items);
  })();
  const navigator = _mod693.GLOBAL_OBJ.navigator;
  const _Error2 = Error;
  let closure_172 = ((arg0) => {
    class TransportStatusCodeError {
      constructor(arg0) {
        self = this;
        tmp = closure_7(this, TransportStatusCodeError);
        items = [];
        items[0] = "Transport returned status code " + arg0;
        tmp2 = closure_4;
        obj = closure_4(TransportStatusCodeError);
        tmp3 = closure_3;
        if (_isNativeReflectConstruct()) {
          _Reflect = Reflect;
          constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
        } else {
          constructResult = obj.apply(self, items);
        }
        return tmp3(self, constructResult);
      }
    }
    _inherits(TransportStatusCodeError, arg0);
    return _createClass(TransportStatusCodeError);
  })(_wrapNativeSuper(Error));
  const _Error3 = Error;
  let closure_173 = ((arg0) => {
    class RateLimitError {
      constructor(arg0) {
        self = this;
        tmp = closure_7(this, RateLimitError);
        items = ["Rate limit hit"];
        tmp2 = closure_4;
        obj = closure_4(RateLimitError);
        tmp3 = closure_3;
        if (_isNativeReflectConstruct()) {
          tmp5 = globalThis;
          _Reflect = Reflect;
          constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
        } else {
          constructResult = obj.apply(self, items);
        }
        tmp3Result = tmp3(self, constructResult);
        tmp3Result.rateLimits = arg0;
        return tmp3Result;
      }
    }
    _inherits(RateLimitError, arg0);
    return _createClass(RateLimitError);
  })(_wrapNativeSuper(Error));
  let str7 = "__THROTTLED";
  const __THROTTLED = "__THROTTLED";
  let closure_177 = (() => {
    let Custom;
    class ReplayContainer {
      constructor(options) {
        let slowClickIgnoreSelectors;
        let slowClickTimeout;
        let str;
        const self = this;
        options = options.options;
        const recordingOptions = options.recordingOptions;
        const tmp = _classCallCheck(this, ReplayContainer);
        this.eventBuffer = null;
        this.performanceEntries = [];
        this.replayPerformanceEntries = [];
        this.recordingMode = "session";
        this.timeouts = { sessionIdlePause: 300000, sessionIdleExpire: 900000 };
        this._lastActivity = Date.now();
        this._isEnabled = false;
        this._isPaused = false;
        this._requiresManualStart = false;
        this._hasInitializedCoreListeners = false;
        obj = { errorIds: new Set(), traceIds: new Set(), urls: [], initialTimestamp: Date.now(), initialUrl: "" };
        new Set();
        new Set();
        this._context = obj;
        this._recordingOptions = recordingOptions;
        this._options = options;
        let obj2 = { maxWait: this._options.flushMaxDelay };
        const flushMinDelay = this._options.flushMinDelay;
        let tmp4 = _mod693;
        let obj3 = { setTimeoutImpl: _addMeasureSpans.setTimeout };
        const debounce = tmp4.debounce;
        let merged = Object.assign(obj2);
        this._debouncedFlush = debounce(() => self._flush(), flushMinDelay, obj3);
        const f134514 = (timestamp, arg1) => {
          let resolved;
          let flag = false;
          if (f134514.eventBuffer) {
            flag = false;
            if (!f134514.isPaused()) {
              flag = false;
              if (f134514.isEnabled()) {
                timestamp = timestamp.timestamp;
                let result = timestamp;
                if (timestamp <= 9999999999) {
                  result = 1000 * timestamp;
                }
                const _Date = Date;
                const sum = result + f134514.timeouts.sessionIdlePause;
                let tmp4 = sum >= Date.now();
                if (tmp4) {
                  let flag2 = result <= f134514.getContext().initialTimestamp + f134514.getOptions().maxReplayDuration;
                  if (!flag2) {
                    flag2 = false;
                    if (closure_2_130) {
                      const _HermesInternal = HermesInternal;
                      closure_2_133.infoTick("Skipping event with timestamp " + result + " because it is after maxReplayDuration");
                      flag2 = false;
                    }
                  }
                  tmp4 = flag2;
                }
                flag = tmp4;
              }
            }
          }
          if (flag) {
            resolved = closure_2_147(f134514, timestamp, arg1);
          } else {
            resolved = Promise.resolve(null);
          }
          return resolved;
        };
        map = new Map();
        let c2 = false;
        this._throttledAddEvent = () => {
          const items = [...arguments];
          const rounded = Math.floor(Date.now() / 1000);
          closure_0 = rounded - 5;
          const item = map.forEach((item, index) => {
            if (index < closure_0) {
              map.delete(index);
            }
          });
          const items1 = [...map.values()];
          if (items1.reduce((acc, item) => acc + item, 0) >= 300) {
            c2 = true;
            let str = "__SKIPPED";
            if (!c2) {
              str = closure_1_176;
            }
            return str;
          } else {
            c2 = false;
            const tmp4 = map.get(rounded) || 0;
            const result = map.set(rounded, tmp4 + 1);
            const items2 = [];
            HermesBuiltin.arraySpread(items2, items, 0);
            return HermesBuiltin.apply(closure_0, items2, undefined);
          }
        };
        const options1 = this.getOptions();
        ({ slowClickTimeout, slowClickIgnoreSelectors } = options1);
        let tmp8;
        if (slowClickTimeout) {
          obj4 = { threshold: Math.min(3000, slowClickTimeout), timeout: slowClickTimeout, scrollTimeout: 300, ignoreSelector: str };
          const _Math = Math;
          let num = 3000;
          str = "";
          if (slowClickIgnoreSelectors) {
            str = slowClickIgnoreSelectors.join(",");
          }
          tmp8 = obj4;
        }
        if (tmp8) {
          const self2 = this;
          const self3 = this;
          const tmp12 = new closure_115(self, tmp8);
          self.clickDetector = tmp12;
        }
        if (__SENTRY_DEBUG__2) {
          const _experiments = options._experiments;
          obj5 = { captureExceptions: _experiments.captureExceptions, traceInternals: _experiments.traceInternals };
          closure_133.setConfig(obj5);
        }
        self._handleVisibilityChange = () => {
          if ("visible" === closure_2_0(closure_2_1[8]).GLOBAL_OBJ.document.visibilityState) {
            const result = self._doChangeToForegroundTasks();
          } else {
            const result1 = self._doChangeToBackgroundTasks();
          }
        };
        self._handleWindowBlur = () => {
          obj = { timestamp: Date.now() / 1000, type: "default" };
          const merged = Object.assign({ category: "ui.blur" });
          const result = self._doChangeToBackgroundTasks(obj);
        };
        self._handleWindowFocus = () => {
          obj = { timestamp: Date.now() / 1000, type: "default" };
          const merged = Object.assign({ category: "ui.focus" });
          const result = self._doChangeToForegroundTasks(obj);
        };
        self._handleKeyboardEvent = (arg0) => {
          let altKey;
          let ctrlKey;
          let key;
          let metaKey;
          let target;
          if (self.isEnabled()) {
            self.updateUserActivity();
            ({ metaKey, ctrlKey, altKey, key, target } = arg0);
            let tmp4 = null;
            if (target) {
              const isContentEditable = "INPUT" === target.tagName || "TEXTAREA" === target.tagName || target.isContentEditable;
              tmp4 = null;
              if (!isContentEditable) {
                tmp4 = null;
                if (key) {
                  const tmp5 = metaKey || ctrlKey || altKey;
                  if (tmp5) {
                    let obj2 = closure_2_0(closure_2_1[8]);
                    const tmp9 = obj2.htmlTreeAsString(target, { maxStringLength: 200 }) || "<unknown>";
                    const obj3 = { category: "ui.keyDown", message: tmp9, data: obj4 };
                    obj4 = { metaKey, shiftKey: tmp3, ctrlKey, altKey, key };
                    const merged = Object.assign(closure_2_122(target, tmp9).data);
                    const _Date = Date;
                    obj5 = { timestamp: Date.now() / 1000, type: "default" };
                    const merged1 = Object.assign(obj3);
                    tmp4 = obj5;
                  } else {
                    let num = 1;
                    tmp4 = null;
                  }
                }
              }
            }
            if (tmp4) {
              let c1 = tmp4;
              if ("sentry.transaction" !== tmp4.category) {
                const items = ["ui.click", "ui.input"];
                if (items.includes(tmp4.category)) {
                  self.triggerUserActivity();
                } else {
                  const result = self.checkAndHandleExpiredSession();
                }
                self.addUpdate(() => {
                  let normalizer;
                  let num;
                  let obj2;
                  obj = { type: Custom.Custom, timestamp: 1000 * num, data: obj2 };
                  num = _null.timestamp;
                  const throttledAddEvent = obj.throttledAddEvent;
                  if (!num) {
                    num = 0;
                  }
                  obj2 = { tag: "breadcrumb", payload: normalizer.normalize(_null, 10, 1000) };
                  normalizer = self(closure_2_1[8]);
                  throttledAddEvent(obj);
                  return "console" === _null.category;
                });
              }
            }
          }
        };
      }
    }
    const entry = {
      key: "getContext",
      value: function getContext() {
        return this._context;
      }
    };
    let items = [
      entry,
      {
        key: "isEnabled",
        value: function isEnabled() {
          return this._isEnabled;
        }
      },
      {
        key: "isPaused",
        value: function isPaused() {
          return this._isPaused;
        }
      },
      {
        key: "isRecordingCanvas",
        value: function isRecordingCanvas() {
          return Boolean(this._canvas);
        }
      },
      {
        key: "getOptions",
        value: function getOptions() {
          return this._options;
        }
      },
      {
        key: "handleException",
        value: function handleException(error) {
          if (__SENTRY_DEBUG__2) {
            closure_1_133.exception(error);
          }
          if (this._options.onError) {
            const _options = this._options;
            _options.onError(error);
          }
        }
      },
      {
        key: "initializeSampling",
        value: function initializeSampling(id) {
          const self = this;
          const _options = this._options;
          self._requiresManualStart = _options.errorSampleRate <= 0 && _options.sessionSampleRate <= 0;
          if (!(_options.errorSampleRate <= 0 && _options.sessionSampleRate <= 0)) {
            const result = self._initializeSessionForSampling(id);
            if (self.session) {
              if (false !== self.session.sampled) {
                let str2 = "session";
                if ("buffer" === self.session.sampled) {
                  str2 = "session";
                  if (0 === self.session.segmentId) {
                    str2 = "buffer";
                  }
                }
                self.recordingMode = str2;
                if (__SENTRY_DEBUG__2) {
                  const _HermesInternal = HermesInternal;
                  closure_1_133.infoTick("Starting replay in " + self.recordingMode + " mode");
                }
                self._initializeRecording();
              }
            } else if (__SENTRY_DEBUG__2) {
              const _Error = Error;
              const self2 = this;
              const self3 = this;
              const exception = closure_1_133.exception;
              const error = new Error("Unable to initialize and create session");
              exception(error);
            }
          }
        }
      },
      {
        key: "start",
        value: function start() {
          const self = this;
          if (this._isEnabled) {
            if ("session" === self.recordingMode) {
              if (__SENTRY_DEBUG__2) {
                closure_1_133.log("Recording is already in progress");
              }
            }
          }
          if (self._isEnabled) {
            if ("buffer" === self.recordingMode) {
              if (__SENTRY_DEBUG__2) {
                closure_1_133.log("Buffering is in progress, call `flush()` to save the replay");
              }
            }
          }
          if (__SENTRY_DEBUG__2) {
            closure_1_133.infoTick("Starting replay in session mode");
          }
          self._updateUserActivity();
          obj = { maxReplayDuration: self._options.maxReplayDuration, sessionIdleExpire: self.timeouts.sessionIdleExpire };
          const obj2 = { stickySession: self._options.stickySession, sessionSampleRate: 1, allowBuffering: false };
          self.session = loadOrCreateSession(obj, obj2);
          self.recordingMode = "session";
          self._initializeRecording();
        }
      },
      {
        key: "startBuffering",
        value: function startBuffering() {
          const self = this;
          if (this._isEnabled) {
            if (__SENTRY_DEBUG__2) {
              closure_1_133.log("Buffering is in progress, call `flush()` to save the replay");
            }
          } else {
            if (__SENTRY_DEBUG__2) {
              closure_1_133.infoTick("Starting replay in buffer mode");
            }
            obj = { sessionIdleExpire: self.timeouts.sessionIdleExpire, maxReplayDuration: self._options.maxReplayDuration };
            const obj2 = { stickySession: self._options.stickySession, sessionSampleRate: 0, allowBuffering: true };
            self.session = loadOrCreateSession(obj, obj2);
            self.recordingMode = "buffer";
            self._initializeRecording();
          }
        }
      },
      {
        key: "startRecording",
        value: function startRecording() {
          let _onMutationHandler;
          const self = this;
          try {
            let obj2;
            let obj13;
            const _canvas = self._canvas;
            obj = { emit: getHandleRecordingEmit(self), onMutation: _onMutationHandler.bind(self) };
            const merged = Object.assign(self._recordingOptions);
            if ("buffer" === self.recordingMode) {
              obj2 = { checkoutEveryNms: 60000 };
            } else {
              obj2 = self._options._experiments.continuousCheckout;
              if (obj2) {
                const _Math = Math;
                obj2 = { checkoutEveryNms: Math.max(360000, self._options._experiments.continuousCheckout) };
                const obj3 = { checkoutEveryNms: Math.max(360000, self._options._experiments.continuousCheckout) };
              }
            }
            const merged1 = Object.assign(obj2);
            let str2;
            const test = /iPhone|iPad|iPod/i.test;
            if (navigator != null) {
              str2 = navigator.userAgent;
            }
            if (str2 == null) {
              str2 = "";
            }
            if (test(str2)) {
              obj5 = { sampling: { mousemove: false } };
              obj4 = { sampling: { mousemove: false } };
            } else {
              let str3;
              const test2 = /Macintosh/i.test;
              if (navigator != null) {
                str3 = navigator.userAgent;
              }
              if (str3 == null) {
                str3 = "";
              }
              if (test2(str3)) {
                let maxTouchPoints;
                if (navigator != null) {
                  maxTouchPoints = navigator.maxTouchPoints;
                }
                if (maxTouchPoints) {
                  let maxTouchPoints1;
                  if (navigator != null) {
                    maxTouchPoints1 = navigator.maxTouchPoints;
                  }
                }
              }
              obj5 = {};
            }
            const merged2 = Object.assign(obj5);
            _onMutationHandler = self._onMutationHandler;
            const tmp18 = _canvas;
            if (tmp18) {
              obj6 = { recordCanvas: null, getCanvasManager: null, sampling: null, dataURLOptions: null };
              ({ recordCanvas: obj7.recordCanvas, getCanvasManager: obj7.getCanvasManager, sampling: obj7.sampling, dataURLOptions: obj7.dataURLOptions } = _canvas);
              obj13 = obj6;
            } else {
              obj13 = {};
            }
            const merged3 = Object.assign(obj13);
            self._stopRecording = record(obj);
          } catch (tmp22) {
            self.handleException(tmp22);
          }
        }
      },
      {
        key: "stopRecording",
        value: function stopRecording() {
          const self = this;
          try {
            if (self._stopRecording) {
              self._stopRecording();
              self._stopRecording = undefined;
            }
            return true;
          } catch (tmp2) {
            self.handleException(tmp2);
            return false;
          }
        }
      },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,

    ];
    const entry1 = {
      key: "stop",
      value: function stop() {
        return closure_4(...arguments);
      }
    };
    let closure_4 = _asyncToGenerator(async function() {
      let closure_6;
      let log;
      const self = this;
      closure_1 = arg0;
      let c7 = 0;
      let c8 = 0;
      let c5 = 0;
      const iter = (async (arg0) => {
        let reason;
        if (1 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            return { value, done: true };
          } else if (closure_4._isEnabled) {
            closure_4._isEnabled = false;
            closure_4.recordingMode = "buffer";
            c5 = 1;
            if (closure_1_130) {
              eventBuffer = log.log;
              let str = "";
              if (reason) {
                const _HermesInternal = HermesInternal;
                str = " triggered by " + reason;
              }
              eventBuffer("Stopping Replay" + str);
            }
            closure_1_149();
            closure_4._removeListeners();
            closure_4.stopRecording();
            const _debouncedFlush = closure_4._debouncedFlush;
            eventBuffer = _debouncedFlush.cancel();
            const tmp27 = flag;
            if (tmp27) {
              eventBuffer = closure_4._flush({ force: true });
              c7 = 3;
              c8 = 1;
              return { value: eventBuffer, done: false };
            } else {
              eventBuffer = closure_4.eventBuffer;
              if (eventBuffer != null) {
                eventBuffer.destroy();
              }
              eventBuffer = closure_4;
              closure_4.eventBuffer = null;
              closure_1_140(closure_4);
              c5 = 0;
            }
          }
        } else if (2 === c7) {
          c5 = 0;
          closure_2 = closure_6;
          closure_4.handleException(closure_2);
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c8 = 3;
          return { value, done: true };
        }
        await "IconComponent";
        closure_4 = self;
        obj4 = closure_1;
        if (closure_1 === undefined) {
          obj4 = {};
        }
        reason = obj4.reason;
        return "Set";
      })();
      iter.next();
      return iter;
    });
    items[11] = entry1;
    items[12] = {
      key: "pause",
      value: function pause() {
        const self = this;
        if (!this._isPaused) {
          self._isPaused = true;
          self.stopRecording();
          if (__SENTRY_DEBUG__2) {
            closure_1_133.log("Pausing replay");
          }
        }
      }
    };
    items[13] = {
      key: "resume",
      value: function resume() {
        const self = this;
        const tmp = this._isPaused && self._checkSession();
        if (tmp) {
          self._isPaused = false;
          self.startRecording();
          if (__SENTRY_DEBUG__2) {
            closure_1_133.log("Resuming replay");
          }
        }
      }
    };
    const entry2 = {
      key: "sendBufferedReplayOrFlush",
      value: function sendBufferedReplayOrFlush() {
        return closure_3(...arguments);
      }
    };
    let closure_3 = _asyncToGenerator(async function() {
      let logger;
      const self = this;
      closure_1 = arg0;
      let c5 = 0;
      let c6 = 0;
      const iter = (async () => {
        if ("session" === closure_4.recordingMode) {
          return closure_4.flushImmediate();
        }
        const _Date = Date;
        closure_1 = Date.now();
        if (closure_1_130) {
          logger.log("Converting buffer to session");
        }
        await closure_4.flushImmediate();
        closure_2 = closure_4.stopRecording();
        const tmp6 = flag2 && closure_2 && "session" !== closure_4.recordingMode;
        if (tmp6) {
          closure_4.recordingMode = "session";
          if (closure_4.session) {
            closure_4.session.dirty = false;
            closure_4._updateUserActivity(closure_1);
            const result = closure_4._updateSessionActivity(closure_1);
            closure_4._maybeSaveSession();
          }
          closure_4.startRecording();
        }
        await "IconComponent";
        closure_4 = self;
        closure_3 = self;
        closure_2 = tmp;
        if (closure_1 === undefined) {
          obj4 = {};
        }
        return "Set";
      })();
      iter.next();
      return iter;
    });
    items[14] = entry2;
    items[15] = {
      key: "addUpdate",
      value: function addUpdate(fn) {
        const self = this;
        let _isEnabled = "buffer" !== this.recordingMode;
        const tmp = fn();
        if (_isEnabled) {
          _isEnabled = self._isEnabled;
        }
        if (_isEnabled) {
          _isEnabled = true !== tmp;
        }
        if (_isEnabled) {
          self._debouncedFlush();
        }
      }
    };
    items[16] = {
      key: "triggerUserActivity",
      value: function triggerUserActivity() {
        const self = this;
        this._updateUserActivity();
        if (this._stopRecording) {
          const result = self.checkAndHandleExpiredSession();
          const result1 = self._updateSessionActivity();
        } else if (self._checkSession()) {
          self.resume();
        }
      }
    };
    items[17] = {
      key: "updateUserActivity",
      value: function updateUserActivity() {
        this._updateUserActivity();
        const result = this._updateSessionActivity();
      }
    };
    items[18] = {
      key: "conditionalFlush",
      value: function conditionalFlush() {
        let resolved;
        const self = this;
        if ("buffer" === this.recordingMode) {
          resolved = Promise.resolve();
        } else {
          resolved = self.flushImmediate();
        }
        return resolved;
      }
    };
    items[19] = {
      key: "flush",
      value: function flush() {
        return this._debouncedFlush();
      }
    };
    items[20] = {
      key: "flushImmediate",
      value: function flushImmediate() {
        this._debouncedFlush();
        const _debouncedFlush = this._debouncedFlush;
        return _debouncedFlush.flush();
      }
    };
    items[21] = {
      key: "cancelFlush",
      value: function cancelFlush() {
        const _debouncedFlush = this._debouncedFlush;
        _debouncedFlush.cancel();
      }
    };
    items[22] = {
      key: "getSessionId",
      value: function getSessionId(arg0) {
        const self = this;
        const tmp = arg0;
        if (tmp) {
          const session = self.session;
          let sampled;
          if (session != null) {
            sampled = session.sampled;
          }
        }
        const session2 = self.session;
        let id;
        if (session2 != null) {
          id = session2.id;
        }
        return id;
      }
    };
    items[23] = {
      key: "checkAndHandleExpiredSession",
      value: function checkAndHandleExpiredSession() {
        const self = this;
        if (this._lastActivity) {
          const _lastActivity = self._lastActivity;
          const sessionIdlePause = self.timeouts.sessionIdlePause;
          const _Date = Date;
          const self2 = this;
          const self3 = this;
          let tmp6 = null === _lastActivity;
          const tmp4 = +new Date();
          if (!tmp6) {
            tmp6 = undefined === sessionIdlePause;
          }
          if (!tmp6) {
            tmp6 = sessionIdlePause < 0;
          }
          if (!tmp6) {
            tmp6 = 0 !== sessionIdlePause && _lastActivity + sessionIdlePause <= tmp4;
          }
          if (tmp6) {
            if (self.session) {
              if ("session" === self.session.sampled) {
                self.pause();
              }
            }
          }
        }
        return self._checkSession();
      }
    };
    items[24] = {
      key: "setInitialState",
      value: function setInitialState() {
        obj = { performanceEntries: [], replayPerformanceEntries: [] };
        const pathname = closure_0(closure_1[8]).GLOBAL_OBJ.location.pathname;
        const combined = "" + pathname + closure_0(closure_1[8]).GLOBAL_OBJ.location.hash + closure_0(closure_1[8]).GLOBAL_OBJ.location.search;
        const combined1 = "" + closure_0(closure_1[8]).GLOBAL_OBJ.location.origin + combined;
        obj._clearContext();
        obj._context.initialUrl = combined1;
        obj._context.initialTimestamp = Date.now();
        const urls = obj._context.urls;
        urls.push(combined1);
      }
    };
    items[25] = {
      key: "throttledAddEvent",
      value: function throttledAddEvent(arg0, arg1) {
        const self = this;
        const _throttledAddEventResult = this._throttledAddEvent(arg0, arg1);
        if (_throttledAddEventResult === closure_176) {
          obj = { timestamp: Date.now() / 1000, type: "default" };
          const _Date = Date;
          let num = 1000;
          let tmp3 = obj;
          const merged = Object.assign({ category: "replay.throttled" });
          self.addUpdate(() => {
            let num = obj.timestamp;
            const tmp3 = obj;
            if (!num) {
              num = 0;
            }
            obj = { type: 5, timestamp: num, data: { tag: "breadcrumb", payload: tmp3, metric: true } };
            return !addEventSync(self, obj);
          });
        }
        return _throttledAddEventResult;
      }
    };
    items[26] = {
      key: "getCurrentRoute",
      value: function getCurrentRoute() {
        let lastActiveSpan = this.lastActiveSpan;
        if (!lastActiveSpan) {
          obj = closure_0(closure_1[8]);
          lastActiveSpan = obj.getActiveSpan();
        }
        let rootSpan = lastActiveSpan;
        if (rootSpan) {
          const obj2 = closure_0(closure_1[8]);
          rootSpan = obj2.getRootSpan(lastActiveSpan);
        }
        let data = rootSpan;
        if (data) {
          obj4 = closure_0(closure_1[8]);
          data = obj4.spanToJSON(rootSpan).data;
        }
        if (!data) {
          data = {};
        }
        const tmp10 = data[closure_0(undefined, closure_1[8]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
        if (rootSpan) {
          if (tmp10) {
            const items = ["route", "custom"];
            if (items.includes(tmp10)) {
              const tmp8Result = closure_0(closure_1[8]);
              return tmp8Result.spanToJSON(rootSpan).description;
            }
          }
        }
      }
    };
    items[27] = {
      key: "_initializeRecording",
      value: function _initializeRecording() {
        function _loadWorker(arg0) {
          function _getWorkerUrl() {
            if (typeof globalThis.__SENTRY_EXCLUDE_REPLAY_WORKER__ !== "undefined") {
              if (globalThis.__SENTRY_EXCLUDE_REPLAY_WORKER__) {
                return "";
              }
            }
            const blob = new Blob(["var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(t,e){for(var i=new n(31),s=0;s<31;++s)i[s]=e+=1<<t[s-1];var a=new r(i[30]);for(s=1;s<30;++s)for(var o=i[s];o<i[s+1];++o)a[o]=o-i[s]<<5|s;return{b:i,r:a}},o=a(e,2),h=o.b,f=o.r;h[28]=258,f[258]=28;for(var l=a(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,s=0,a=new n(r);s<i;++s)t[s]&&++a[t[s]-1];var o,h=new n(r);for(s=1;s<r;++s)h[s]=h[s-1]+a[s-1]<<1;if(e){o=new n(1<<r);var f=15-r;for(s=0;s<i;++s)if(t[s])for(var l=s<<4|t[s],c=r-t[s],v=h[t[s]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>f]=l}else for(o=new n(i),s=0;s<i;++s)t[s]&&(o[s]=u[h[t[s]-1]++]>>15-t[s]);return o},p=new t(288);for(c=0;c<144;++c)p[c]=8;for(c=144;c<256;++c)p[c]=9;for(c=256;c<280;++c)p[c]=7;for(c=280;c<288;++c)p[c]=8;var g=new t(32);for(c=0;c<32;++c)g[c]=5;var w=d(p,9,0),y=d(g,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=[\"unexpected EOF\",\"invalid block type\",\"invalid length/literal\",\"invalid distance\",\"stream finished\",\"no stream handler\",,\"no callback\",\"invalid UTF-8 data\",\"extra field too long\",\"date not in range 1980-2099\",\"filename too long\",\"stream finishing\",\"invalid zip data\"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],s=0;s<r.length;++s)r[s]&&i.push({s:s,f:r[s]});var a=i.length,o=i.slice();if(!a)return{t:F,l:0};if(1==a){var h=new t(i[0].s+1);return h[i[0].s]=1,{t:h,l:1}}i.sort(function(t,n){return t.f-n.f}),i.push({s:-1,f:25001});var f=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:f.f+l.f,l:f,r:l};c!=a-1;)f=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:f.f+l.f,l:f,r:l};var d=o[0].s;for(s=1;s<a;++s)o[s].s>d&&(d=o[s].s);var p=new n(d+1),g=A(i[c-1],p,0);if(g>e){s=0;var w=0,y=g-e,m=1<<y;for(o.sort(function(t,n){return p[n.s]-p[t.s]||t.f-n.f});s<a;++s){var b=o[s].s;if(!(p[b]>e))break;w+=m-(1<<g-p[b]),p[b]=e}for(w>>=y;w>0;){var M=o[s].s;p[M]<e?w-=1<<e-p[M]++-1:++s}for(;s>=0&&w;--s){var E=o[s].s;p[E]==e&&(--p[E],++w)}g=e}return{t:new t(p),l:g}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,s=t[0],a=1,o=function(t){e[i++]=t},h=1;h<=r;++h)if(t[h]==s&&h!=r)++a;else{if(!s&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(s),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(s);a=1,s=t[h]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var s=0;s<e;++s)t[i+s+4]=r[s];return 8*(i+4+e)},U=function(t,r,a,o,h,f,l,u,c,v,m){z(r,m++,a),++h[256];for(var b=x(h,15),M=b.t,E=b.l,A=x(f,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[s[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(h,p)+T(f,g)+l,X=T(h,M)+T(f,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[s[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=w,P=p,Q=y,R=g;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,s=0|r.length,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)i+=e+=r[a];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(s,a,o,h,u){if(!u&&(u={l:1},a.dictionary)){var c=a.dictionary.subarray(-32768),v=new t(c.length+s.length);v.set(c),v.set(s,c.length),s=v,u.w=c.length}return function(s,a,o,h,u,c){var v=c.z||s.length,d=new t(h+v+5*(1+Math.ceil(v/7e3))+u),p=d.subarray(h,d.length-u),g=c.l,w=7&(c.r||0);if(a){w&&(p[0]=c.r>>3);for(var y=C[a-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(s[t]^s[t+1]<<A^s[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!g)){w=U(s,p,0,F,I,S,O,q,G,j-G,w),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(s[j+Q]==s[j+Q-W]){for(var $=0;$<Z&&s[j+$]==s[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|f[Q]<<18|l[R];var it=31&f[Q],st=31&l[R];O+=e[it]+i[st],++I[257+it],++S[st],B=j+Q,++L}else F[q++]=s[j],++I[s[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=s[j],++I[s[j]];w=U(s,p,g,F,I,S,O,q,G,j-G,w),g||(c.r=7&w|p[w/8|0]<<3,w-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+g;j+=65535){var at=j+65535;at>=v&&(p[w/8|0]=g,at=v),w=k(p,w+1,s.subarray(j,at))}c.i=v}return b(d,0,h+m(w)+u)}(s,null==a.level?6:a.level,null==a.mem?u.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(s.length)))):20:12+a.mem,o,h,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if(\"function\"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var s=this.b.length-this.s.z;this.b.set(n.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(s),32768),this.s.z=n.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n.prototype.flush=function(){this.ondata||E(5),this.s.l&&E(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,s=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),a=s.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(s,n),O(s,a-8,r.d()),O(s,a-4,e),s}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t.prototype.flush=function(){j.prototype.flush.call(this)},t}(),G=\"undefined\"!=typeof TextEncoder&&new TextEncoder,H=\"undefined\"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(G)return G.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),s=0,a=function(t){i[s++]=t},o=0;o<e;++o){if(s+5>i.length){var h=new t(s+8+(e-o<<1));h.set(i),i=h}var f=n.charCodeAt(o);f<128||r?a(f):f<2048?(a(192|f>>6),a(128|63&f)):f>55295&&f<57344?(a(240|(f=65536+(1047552&f)|1023&n.charCodeAt(++o))>>18),a(128|f>>12&63),a(128|f>>6&63),a(128|63&f)):(a(224|f>>12),a(128|f>>6&63),a(128|63&f))}return b(i,0,s)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error(\"Adding invalid event\");const n=this._hasEvents?\",\":\"\";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push(\"]\",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J((t,n)=>{this.deflate.push(t,n)}),this.stream.push(\"[\")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener(\"message\",function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&\"function\"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}}),postMessage({id:void 0,method:\"init\",success:!0,response:void 0});"]);
            return URL.createObjectURL(blob);
          }
          try {
            const tmp2 = arg0 || _getWorkerUrl();
            if (tmp2) {
              if (closure_1_130) {
                let str = "";
                const log = closure_1_133.log;
                if (arg0) {
                  const _HermesInternal = HermesInternal;
                  str = " from " + arg0;
                }
                log("Using compression worker" + str);
              }
              const self = this;
              const self2 = this;
              const worker = new globalThis.Worker(tmp3);
              const self3 = this;
              const self4 = this;
              const tmp13 = new closure_1_138(worker);
              return tmp13;
            }
          } catch (tmp15) {
            if (closure_1_130) {
              closure_1_133.exception(tmp15, "Failed to create compression worker");
            }
          }
        }
        let self = this;
        this.setInitialState();
        const result = this._updateSessionActivity();
        if (this._options.useCompression) {
          let tmp5;
          const _window = window;
          if (window.Worker) {
            tmp5 = _loadWorker(tmp3);
          }
          self.eventBuffer = tmp5;
          self._removeListeners();
          self._addListeners();
          self._isEnabled = true;
          self._isPaused = false;
          self.startRecording();
        }
        if (__SENTRY_DEBUG__2) {
          let str = "Using simple buffer";
          closure_1_133.log("Using simple buffer");
        }
        tmp5 = new closure_1_135();
      }
    };
    items[28] = {
      key: "_initializeSessionForSampling",
      value: function _initializeSessionForSampling(previousSessionId) {
        obj = { sessionIdleExpire: this.timeouts.sessionIdleExpire, maxReplayDuration: this._options.maxReplayDuration, previousSessionId };
        const obj2 = { stickySession: this._options.stickySession, sessionSampleRate: this._options.sessionSampleRate, allowBuffering: this._options.errorSampleRate > 0 };
        this.session = loadOrCreateSession(obj, obj2);
      }
    };
    items[29] = {
      key: "_checkSession",
      value: function _checkSession() {
        const self = this;
        if (this.session) {
          const session = self.session;
          obj = { sessionIdleExpire: self.timeouts.sessionIdleExpire, maxReplayDuration: self._options.maxReplayDuration };
          let tmp2 = isSessionExpired(session, obj);
          if (tmp2) {
            tmp2 = "buffer" !== session.sampled || 0 !== session.segmentId;
            const tmp3 = "buffer" !== session.sampled || 0 !== session.segmentId;
          }
          let flag2 = !tmp2;
          if (tmp2) {
            self._refreshSession(session);
            flag2 = false;
          }
          return flag2;
        } else {
          return false;
        }
      }
    };
    const entry3 = {
      key: "_refreshSession",
      value: function _refreshSession(session) {
        return closure_2(...arguments);
      }
    };
    _asyncToGenerator = _asyncToGenerator(async function(arg0) {
      const self = this;
      closure_1 = arg0;
      let c4 = 0;
      let c5 = 0;
      return (async (arg0) => {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
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
                return { value, done: true };
              } else {
                closure_3 = self;
                closure_2 = tmp;
                id = closure_1;
                if (self._isEnabled) {
                  c4 = 1;
                  c5 = 1;
                  obj5 = { value: self.stop({ reason: "refresh session" }), done: false };
                  return obj5;
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3.initializeSampling(id.id);
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp10) {
            c5 = 3;
            throw tmp10;
          }
        }
      })();
    });
    items[30] = entry3;
    items[31] = {
      key: "_addListeners",
      value: function _addListeners() {
        let tmp9;
        function addGlobalListeners(self) {
          let logger;
          let tmp4;
          let enabled = self;
          let tmp = enabled;
          obj = enabled(closure_1[8]);
          const client = obj.getClient();
          let tmp3 = enabled(closure_1[9]);
          if (typeof closure_121 === "function") {
            tmp4((name) => {
              let message;
              let target;
              function getDomTarget(event) {
                let message;
                let target = null;
                try {
                  let tmp4;
                  if ("click" === tmp) {
                    tmp4 = closure_1_112(event.event);
                  } else {
                    tmp4 = closure_1_113(event.event);
                  }
                  target = tmp4;
                  obj = enabled(closure_1_1[8]);
                  message = obj.htmlTreeAsString(tmp4, { maxStringLength: 200 }) || "<unknown>";
                  const str2 = obj.htmlTreeAsString(tmp4, { maxStringLength: 200 }) || "<unknown>";
                } catch (err) {
                  message = "<unknown>";
                }
                return { target, message };
              }
              if (enabled.isEnabled()) {
                let event;
                const tmp = name;
                const _HermesInternal = HermesInternal;
                const obj2 = { category: "ui." + name.name };
                ({ target, message } = getDomTarget(name));
                getDomTarget(name);
                const merged = Object.assign(closure_2_122(target, message));
                const obj3 = { timestamp: Date.now() / 1000, type: "default" };
                const _Date = Date;
                const merged1 = Object.assign(obj2);
                let str2 = "click";
                let clickDetector = "click" === name.name;
                if (clickDetector) {
                  event = name.event;
                }
                if (clickDetector) {
                  clickDetector = enabled.clickDetector;
                }
                if (clickDetector) {
                  let target1;
                  if (event != null) {
                    target1 = event.target;
                  }
                  clickDetector = target1;
                }
                let shiftKey = !clickDetector;
                if (clickDetector) {
                  shiftKey = event.altKey;
                }
                if (!shiftKey) {
                  shiftKey = event.metaKey;
                }
                if (!shiftKey) {
                  shiftKey = event.ctrlKey;
                }
                if (!shiftKey) {
                  shiftKey = event.shiftKey;
                }
                if (!shiftKey) {
                  const clickDetector2 = enabled.clickDetector;
                  const event2 = name.event;
                  let tmp12 = typeof event2 === "object";
                  if (typeof event2 === "object") {
                    tmp12 = event2;
                  }
                  if (tmp12) {
                    tmp12 = "target" in event2;
                  }
                  let target2 = event2;
                  if (tmp12) {
                    target2 = event2.target;
                  }
                  let tmp13 = target2;
                  if (tmp13) {
                    tmp13 = target2;
                    if (target2 instanceof globalThis.Element) {
                      tmp13 = target2.closest("button,a") || target2;
                      target2.closest("button,a") || target2;
                    }
                  }
                  clickDetector2.handleClick(obj3, tmp13);
                }
                if ("sentry.transaction" !== obj3.category) {
                  const items = ["ui.click", "ui.input"];
                  if (items.includes(obj3.category)) {
                    enabled.triggerUserActivity();
                  } else {
                    const result = enabled.checkAndHandleExpiredSession();
                  }
                  enabled.addUpdate(() => {
                    let normalizer;
                    let num;
                    let obj2;
                    obj = { type: Custom.Custom, timestamp: 1000 * num, data: obj2 };
                    num = _null.timestamp;
                    const throttledAddEvent = obj.throttledAddEvent;
                    if (!num) {
                      num = 0;
                    }
                    obj2 = { tag: "breadcrumb", payload: normalizer.normalize(_null, 10, 1000) };
                    normalizer = self(closure_2_1[8]);
                    throttledAddEvent(obj);
                    return "console" === _null.category;
                  });
                }
              }
            });
            const tmpResult = tmp(closure_1[9]);
            let result = tmpResult.addHistoryInstrumentationHandler((arg0) => {
              let from;
              let obj2;
              let obj3;
              let to;
              obj = obj2;
              if (obj2.isEnabled()) {
                const _Date = Date;
                ({ from, to } = arg0);
                const result = Date.now() / 1000;
                obj2 = { type: "navigation.push", start: result, end: result, name: to, data: obj3 };
                obj3 = { previous: from };
                const urls = obj.getContext().urls;
                urls.push(obj2.name);
                obj.triggerUserActivity();
                obj.addUpdate(() => {
                  const items = [obj2];
                  const mapped = items.map((op) => {
                    const start = op.start;
                    obj = { type: Custom.Custom, timestamp: start, data: obj2 };
                    obj2 = { tag: "performanceSpan", payload: { op: op.type, description: op.name, startTimestamp: start, endTimestamp: op.end, data: op.data } };
                    let throttledAddEventResult = closure_0.throttledAddEvent(obj);
                    if (typeof throttledAddEventResult === "string") {
                      throttledAddEventResult = Promise.resolve(null);
                    }
                    return throttledAddEventResult;
                  });
                  return false;
                });
              }
            });
            enabled = self;
            const tmpResult3 = tmp(closure_1[8]);
            const client1 = tmpResult3.getClient();
            if (client1) {
              const str = "beforeAddBreadcrumb";
              client1.on("beforeAddBreadcrumb", (category) => {
                let obj3;
                if (enabled.isEnabled()) {
                  if (category.category) {
                    let obj9;
                    let tmp3 = null;
                    if (category.category) {
                      const items = ["fetch", "xhr", "sentry.event", "sentry.transaction"];
                      tmp3 = null;
                      if (!items.includes(category.category)) {
                        category = category.category;
                        tmp3 = null;
                        if (!category.startsWith("ui.")) {
                          if ("console" === category.category) {
                            const data = category.data;
                            let _arguments;
                            if (data != null) {
                              _arguments = data.arguments;
                            }
                            const _Array = Array;
                            if (Array.isArray(_arguments)) {
                              if (0 !== _arguments.length) {
                                let c0 = false;
                                const obj2 = { data: obj3 };
                                const mapped = _arguments.map((item) => {
                                  if (item) {
                                    if (typeof item === "string") {
                                      let combined = item;
                                      if (item.length > closure_2_13) {
                                        c0 = true;
                                        const _HermesInternal2 = HermesInternal;
                                        combined = "" + item.slice(0, closure_2_13) + "\u2026";
                                      }
                                      return combined;
                                    } else if (typeof item !== "object") {
                                      return item;
                                    } else {
                                      try {
                                        let combined1;
                                        const normalizer = enabled(closure_2_1[8]);
                                        const normalizeResult = normalizer.normalize(item, 7);
                                        const _JSON = JSON;
                                        const tmp4 = normalizeResult;
                                        if (JSON.stringify(normalizeResult).length > closure_2_13) {
                                          c0 = true;
                                          const _JSON2 = JSON;
                                          const json = JSON.stringify(tmp4, null, 2);
                                          const _HermesInternal = HermesInternal;
                                          combined1 = "" + json.slice(0, closure_2_13) + "\u2026";
                                        } else {
                                          combined1 = normalizeResult;
                                        }
                                        return combined1;
                                      } catch (err) {
                                      }
                                    }
                                  } else {
                                    return item;
                                  }
                                });
                                const merged = Object.assign(category);
                                obj3 = { arguments: mapped };
                                const merged1 = Object.assign(category.data);
                                const tmp29 = c0;
                                if (tmp29) {
                                  obj4 = { _meta: obj5 };
                                  obj6 = obj4;
                                  obj5 = { warnings: ["CONSOLE_ARG_TRUNCATED"] };
                                } else {
                                  obj6 = {};
                                }
                                const merged2 = Object.assign(obj6);
                                obj7 = { timestamp: Date.now() / 1000, type: "default" };
                                const _Date2 = Date;
                                const merged3 = Object.assign(obj2);
                              }
                              tmp3 = obj7;
                            }
                            const _Date3 = Date;
                            obj8 = { timestamp: Date.now() / 1000, type: "default" };
                            const merged4 = Object.assign(category);
                            obj7 = obj8;
                          } else {
                            obj9 = { timestamp: Date.now() / 1000, type: "default" };
                            let tmp4 = globalThis;
                            const _Date = Date;
                            const merged5 = Object.assign(category);
                            tmp3 = obj9;
                          }
                        }
                      }
                    }
                    if (tmp3) {
                      obj9 = tmp3;
                      if ("sentry.transaction" !== tmp3.category) {
                        const items1 = ["ui.click", "ui.input"];
                        if (items1.includes(tmp3.category)) {
                          enabled.triggerUserActivity();
                        } else {
                          const result = obj.checkAndHandleExpiredSession();
                        }
                        enabled.addUpdate(() => {
                          let normalizer;
                          let num;
                          let obj2;
                          obj = { type: Custom.Custom, timestamp: 1000 * num, data: obj2 };
                          num = _null.timestamp;
                          const throttledAddEvent = obj.throttledAddEvent;
                          if (!num) {
                            num = 0;
                          }
                          obj2 = { tag: "breadcrumb", payload: normalizer.normalize(_null, 10, 1000) };
                          normalizer = self(closure_2_1[8]);
                          throttledAddEvent(obj);
                          return "console" === _null.category;
                        });
                      }
                    }
                  }
                }
              });
            }
            const tmp9 = closure_166(self);
            enabled = self;
            let tmp10 = globalThis;
            const _Object = Object;
            let merged = Object.assign((type, originalException) => {
              const tmp = type;
              if (enabled.isEnabled()) {
                if (!enabled.isPaused()) {
                  if ("replay_event" === type.type) {
                    delete tmp["breadcrumbs"];
                    return type;
                  } else {
                    const type3 = type.type;
                    if (type3) {
                      if ("transaction" !== type.type) {
                        if ("feedback" !== type.type) {
                          return type;
                        }
                      }
                    }
                    if (enabled.checkAndHandleExpiredSession()) {
                      if ("feedback" === type.type) {
                        enabled.flush();
                        type.contexts.feedback.replay_id = enabled.getSessionId();
                        closure_1 = type;
                        enabled.triggerUserActivity();
                        enabled.addUpdate(() => {
                          let obj2;
                          let obj3;
                          timestamp = timestamp.timestamp;
                          let flag = !timestamp;
                          if (timestamp) {
                            obj = { type: Custom.Custom, timestamp: 1000 * timestamp.timestamp, data: obj2 };
                            obj2 = { tag: "breadcrumb", payload: obj3 };
                            obj3 = { timestamp: timestamp.timestamp, type: "default", category: "sentry.feedback", data: obj4 };
                            obj4 = { feedbackId: timestamp.event_id };
                            obj.throttledAddEvent(obj);
                            flag = false;
                          }
                          return flag;
                        });
                        return type;
                      } else {
                        type = type.type;
                        if (!type) {
                          const exception = type.exception;
                          let length;
                          if (exception != null) {
                            const values = exception.values;
                            if (values != null) {
                              length = values.length;
                            }
                          }
                          type = !length;
                        }
                        if (!type) {
                          originalException = originalException.originalException;
                          let __rrweb__;
                          if (originalException != null) {
                            __rrweb__ = originalException.__rrweb__;
                          }
                          type = !__rrweb__;
                        }
                        const tmp10 = !type;
                        if (tmp10) {
                          if (!enabled.getOptions()._experiments.captureExceptions) {
                            if (closure_2_130) {
                              logger.log("Ignoring error from rrweb internals", type);
                            }
                            return null;
                          }
                        }
                        let tmp15 = "buffer" === enabled.recordingMode && type.message !== closure_2_11;
                        if (tmp15) {
                          const exception2 = type.exception;
                          let type2 = !exception2;
                          if (exception2) {
                            type2 = type.type;
                          }
                          tmp15 = !type2;
                        }
                        if (tmp15) {
                          const errorSampleRate = enabled.getOptions().errorSampleRate;
                          let tmp17 = undefined !== errorSampleRate;
                          if (tmp17) {
                            const _Math = Math;
                            tmp17 = Math.random() < errorSampleRate;
                          }
                          tmp15 = tmp17;
                        }
                        const tmp19 = tmp15 || "session" === enabled.recordingMode;
                        if (tmp19) {
                          let obj3 = { replayId: enabled.getSessionId() };
                          const merged = Object.assign(type.tags);
                          type.tags = obj3;
                        }
                        if (tmp15) {
                          if ("buffer" === enabled.recordingMode) {
                            const session = enabled.session;
                            let sampled;
                            if (session != null) {
                              sampled = session.sampled;
                            }
                            if ("buffer" === sampled) {
                              const session2 = enabled.session;
                              let flag = true;
                              session2.dirty = true;
                              if (enabled.getOptions().stickySession) {
                                closure_2_141(session2);
                              }
                            }
                          }
                        }
                        return type;
                      }
                    } else {
                      let obj2 = enabled(closure_2_1[8]);
                      const currentScope = obj2.getCurrentScope();
                      const dsc = currentScope.getPropagationContext().dsc;
                      if (dsc) {
                        delete dsc["replay_id"];
                      }
                      const tmp2Result = enabled(closure_2_1[8]);
                      const activeSpan = tmp2Result.getActiveSpan();
                      if (activeSpan) {
                        enabled(closure_2_1[8]);
                        delete obj5.getDynamicSamplingContextFromSpan(obj5, tmp4)["replay_id"];
                      }
                      return type;
                    }
                  }
                }
              }
              return type;
            }, { id: "Replay" });
            const tmpResult4 = tmp(closure_1[8]);
            tmpResult4.addEventProcessor(merged);
            if (client) {
              let str2 = "beforeSendEvent";
              client.on("beforeSendEvent", (type) => {
                let obj3;
                const tmp = enabled.isEnabled() && !type.type;
                if (tmp) {
                  const exception = type.exception;
                  let value;
                  if (exception != null) {
                    const values = exception.values;
                    if (values != null) {
                      if (values[0] != null) {
                        value = iter.value;
                      }
                    }
                  }
                  if (typeof value === "string") {
                    if (value.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/)) {
                      const obj2 = { category: "replay.hydrate-error", data: obj3 };
                      obj3 = { url: obj4.getLocationHref() };
                      obj4 = enabled(closure_2_1[8]);
                      obj5 = { timestamp: Date.now() / 1000, type: "default" };
                      const _Date = Date;
                      const merged = Object.assign(obj2);
                      if ("sentry.transaction" !== obj5.category) {
                        const items = ["ui.click", "ui.input"];
                        if (items.includes(obj5.category)) {
                          enabled.triggerUserActivity();
                        } else {
                          const result = enabled.checkAndHandleExpiredSession();
                        }
                        enabled.addUpdate(() => {
                          let normalizer;
                          let num;
                          let obj2;
                          obj = { type: Custom.Custom, timestamp: 1000 * num, data: obj2 };
                          num = _null.timestamp;
                          const throttledAddEvent = obj.throttledAddEvent;
                          if (!num) {
                            num = 0;
                          }
                          obj2 = { tag: "breadcrumb", payload: normalizer.normalize(_null, 10, 1000) };
                          normalizer = self(closure_2_1[8]);
                          throttledAddEvent(obj);
                          return "console" === _null.category;
                        });
                      }
                    }
                  }
                }
              });
              const str3 = "afterSendEvent";
              client.on("afterSendEvent", (type, statusCode) => {
                if (enabled.isEnabled()) {
                  const tmp = type;
                  const tmp2 = !type.type;
                  if (tmp2) {
                    const tmp3 = statusCode;
                    statusCode = statusCode.statusCode;
                    let tmp4 = !statusCode;
                    if (statusCode) {
                      tmp4 = statusCode < 200;
                    }
                    if (!tmp4) {
                      tmp4 = statusCode >= 300;
                    }
                    if (!tmp4) {
                      if ("transaction" === type.type) {
                        const context = enabled.getContext();
                        const contexts = type.contexts;
                        let trace_id;
                        if (contexts != null) {
                          const trace = contexts.trace;
                          if (trace != null) {
                            trace_id = trace.trace_id;
                          }
                        }
                        if (trace_id) {
                          trace_id = context.traceIds.size < 100;
                        }
                        if (trace_id) {
                          const traceIds = context.traceIds;
                          traceIds.add(type.contexts.trace.trace_id);
                        }
                      } else {
                        const context1 = enabled.getContext();
                        let event_id = type.event_id;
                        if (event_id) {
                          event_id = context1.errorIds.size < 100;
                        }
                        if (event_id) {
                          const errorIds = context1.errorIds;
                          errorIds.add(type.event_id);
                        }
                        if ("buffer" === enabled.recordingMode) {
                          if (type.tags) {
                            if (type.tags.replayId) {
                              const beforeErrorSampling = enabled.getOptions().beforeErrorSampling;
                              if (typeof beforeErrorSampling !== "function") {
                                let obj2 = enabled(closure_2_1[9]);
                                const timerId = obj2.setTimeout(closure_2_2(function*() {
                                  if (c5 === 2) {
                                    c5 = 3;
                                    throw new TypeError("Generator functions may not be called on executing generators");
                                  } else if (tmp3 === 3) {
                                    if (arg0 === 1) {
                                      throw value;
                                    } else if (arg0 === 2) {
                                      const obj2 = { value, done: true };
                                      return obj2;
                                    } else {
                                      return { value: "IconComponent", done: null };
                                    }
                                  } else {
                                    let c3;
                                    try {
                                      c5 = 2;
                                      if (0 === c4) {
                                        if (arg0 === 1) {
                                          c5 = 3;
                                          throw value;
                                        } else if (arg0 === 2) {
                                          c5 = 3;
                                          const obj3 = { value, done: true };
                                          return obj3;
                                        } else {
                                          closure_1 = tmp;
                                          closure_0 = tmp4;
                                          c3 = 1;
                                          c4 = 2;
                                          c5 = 1;
                                          obj4 = { value: obj.sendBufferedReplayOrFlush(), done: false };
                                          return obj4;
                                        }
                                      } else {
                                        if (1 === c4) {
                                          c3 = 0;
                                          closure_0 = closure_2;
                                          closure_129_0.handleException(closure_0);
                                        } else if (arg0 === 1) {
                                          c5 = 3;
                                          throw value;
                                        } else if (arg0 === 2) {
                                          c3 = 0;
                                          c5 = 3;
                                          obj = { value, done: true };
                                          return obj;
                                        } else {
                                          c3 = 0;
                                        }
                                        c5 = 3;
                                        return { value: "IconComponent", done: null };
                                      }
                                    } catch (tmp13) {
                                      closure_2 = tmp13;
                                      if (0 === c3) {
                                        c5 = 3;
                                        throw tmp13;
                                      } else {
                                        c4 = 1;
                                      }
                                    }
                                  }
                                }));
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              });
              client.on("createDsc", (arg0) => {
                sessionId = sessionId.getSessionId();
                const result = sessionId && obj.isEnabled() && "session" === obj.recordingMode && obj.checkAndHandleExpiredSession();
                if (result) {
                  arg0.replay_id = sessionId;
                }
              });
              client.on("spanStart", (lastActiveSpan) => {
                sessionId.lastActiveSpan = lastActiveSpan;
              });
              client.on("spanEnd", (lastActiveSpan) => {
                sessionId.lastActiveSpan = lastActiveSpan;
              });
              on = client.on;
              enabled = closure_2((arg0, arg1) => {
                let sessionId = arg0;
                let includeReplay = arg1;
                let c3 = 0;
                let c4 = 0;
                return (function*(arg0, value) {
                  if (c4 === 2) {
                    c4 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      return { value, done: true };
                    } else {
                      return { value: "IconComponent", done: null };
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
                          return { value, done: true };
                        } else {
                          closure_2 = tmp;
                          sessionId = undefined;
                          sessionId = sessionId.getSessionId();
                          includeReplay = undefined;
                          if (includeReplay != null) {
                            includeReplay = includeReplay.includeReplay;
                          }
                          if (includeReplay) {
                            includeReplay = obj5.isEnabled();
                          }
                          if (includeReplay) {
                            includeReplay = sessionId;
                          }
                          if (includeReplay) {
                            const contexts = tmp14.contexts;
                            let feedback;
                            if (contexts != null) {
                              feedback = contexts.feedback;
                            }
                            includeReplay = feedback;
                          }
                          if (includeReplay) {
                            if ("api" === sessionId.contexts.feedback.source) {
                              c3 = 1;
                              c4 = 1;
                              obj4 = { value: sessionId.sendBufferedReplayOrFlush(), done: false };
                              return obj4;
                            }
                          }
                          c4 = 3;
                          return { value: "IconComponent", done: null };
                        }
                      } else if (arg0 === 1) {
                        c4 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c4 = 3;
                        return { value, done: true };
                      }
                      sessionId.contexts.feedback.replay_id = sessionId;
                    } catch (tmp10) {
                      c4 = 3;
                      throw tmp10;
                    }
                  }
                })();
              });
              on("beforeSendFeedback", function(arg0, arg1) {
                return closure_0(...arguments);
              });
              client.on("openFeedbackWidget", closure_2(function*() {
                if (c0 === 2) {
                  c0 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp2 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  try {
                    c0 = 2;
                    if (0 === c1) {
                      if (arg0 === 1) {
                        c0 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c0 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        c1 = 1;
                        c0 = 1;
                        obj4 = { value: sessionId.sendBufferedReplayOrFlush(), done: false };
                        return obj4;
                      }
                    } else if (arg0 === 1) {
                      c0 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      c0 = 3;
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp5) {
                    c0 = 3;
                    throw tmp5;
                  }
                }
              }));
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        function setupPerformanceObserver(self) {
          const f82377 = (metric) => {
            const prop = closure_1.replayPerformanceEntries;
            prop.push(closure_0(metric.metric));
          };
          let performanceEntries = self;
          function addPerformanceEntry(arg0) {
            performanceEntries = performanceEntries.performanceEntries;
            const tmp = performanceEntries;
            if (!performanceEntries.includes(arg0)) {
              const performanceEntries1 = tmp.performanceEntries;
              performanceEntries1.push(arg0);
            }
          }
          function onEntries(arg0) {
            const entries = arg0.entries;
            const item = entries.forEach(addPerformanceEntry);
          }
          const items = [];
          const items1 = ["navigation", "paint", "resource"];
          let item = items1.forEach((item) => {
            const push = items.push;
            obj = closure_2_0(closure_2_1[9]);
            push(obj.addPerformanceInstrumentationHandler(item, onEntries));
          });
          let push = items.push;
          obj = performanceEntries(addPerformanceEntry[9]);
          performanceEntries = closure_125;
          const result = obj.addLcpInstrumentationHandler(f82377);
          const obj2 = performanceEntries(addPerformanceEntry[9]);
          performanceEntries = closure_127;
          const result1 = obj2.addClsInstrumentationHandler(f82377);
          const obj3 = performanceEntries(addPerformanceEntry[9]);
          performanceEntries = closure_128;
          closure_1 = self;
          push(result, result1, obj3.addInpInstrumentationHandler(f82377));
          return () => {
            const item = items.forEach((fn) => fn());
          };
        }
        const self = this;
        try {
          const _document = closure_0(closure_1[8]).GLOBAL_OBJ.document;
          let str = "visibilitychange";
          const listener = _document.addEventListener("visibilitychange", self._handleVisibilityChange);
          const GLOBAL_OBJ = closure_0(closure_1[8]).GLOBAL_OBJ;
          let str2 = "blur";
          const listener1 = GLOBAL_OBJ.addEventListener("blur", self._handleWindowBlur);
          const GLOBAL_OBJ2 = closure_0(closure_1[8]).GLOBAL_OBJ;
          let str3 = "focus";
          const listener2 = GLOBAL_OBJ2.addEventListener("focus", self._handleWindowFocus);
          const GLOBAL_OBJ3 = closure_0(closure_1[8]).GLOBAL_OBJ;
          const str4 = "keydown";
          const listener3 = GLOBAL_OBJ3.addEventListener("keydown", self._handleKeyboardEvent);
          if (self.clickDetector) {
            let clickDetector = self.clickDetector;
            clickDetector.addListeners();
          }
          if (!self._hasInitializedCoreListeners) {
            addGlobalListeners(self);
            let flag = true;
            self._hasInitializedCoreListeners = true;
          }
        } catch (tmp9) {
          self.handleException(tmp9);
        }
        self._performanceCleanupCallback = setupPerformanceObserver(self);
      }
    };
    items[32] = {
      key: "_removeListeners",
      value: function _removeListeners() {
        const self = this;
        try {
          const _document = closure_0(closure_1[8]).GLOBAL_OBJ.document;
          const removed = _document.removeEventListener("visibilitychange", self._handleVisibilityChange);
          const GLOBAL_OBJ = closure_0(closure_1[8]).GLOBAL_OBJ;
          const removed1 = GLOBAL_OBJ.removeEventListener("blur", self._handleWindowBlur);
          const GLOBAL_OBJ2 = closure_0(closure_1[8]).GLOBAL_OBJ;
          const removed2 = GLOBAL_OBJ2.removeEventListener("focus", self._handleWindowFocus);
          const GLOBAL_OBJ3 = closure_0(closure_1[8]).GLOBAL_OBJ;
          const removed3 = GLOBAL_OBJ3.removeEventListener("keydown", self._handleKeyboardEvent);
          if (self.clickDetector) {
            const clickDetector = self.clickDetector;
            clickDetector.removeListeners();
          }
          if (self._performanceCleanupCallback) {
            const result = self._performanceCleanupCallback();
          }
        } catch (tmp9) {
          self.handleException(tmp9);
        }
      }
    };
    items[33] = {
      key: "_doChangeToBackgroundTasks",
      value: function _doChangeToBackgroundTasks(arg0) {
        const self = this;
        if (this.session) {
          obj = { maxReplayDuration: self._options.maxReplayDuration, sessionIdleExpire: self.timeouts.sessionIdleExpire };
          if (!isSessionExpired(self.session, obj)) {
            const tmp2 = arg0;
            if (tmp2) {
              const result = self._createCustomBreadcrumb(arg0);
            }
            self.conditionalFlush();
          }
        }
      }
    };
    items[34] = {
      key: "_doChangeToForegroundTasks",
      value: function _doChangeToForegroundTasks(arg0) {
        const self = this;
        if (this.session) {
          if (self.checkAndHandleExpiredSession()) {
            const tmp4 = arg0;
            if (tmp4) {
              const result = self._createCustomBreadcrumb(arg0);
            }
          } else if (__SENTRY_DEBUG__2) {
            closure_1_133.log("Document has become active, but session has expired");
          }
        }
      }
    };
    items[35] = {
      key: "_updateUserActivity",
      value: function _updateUserActivity(arg0) {
        let timestamp = arg0;
        if (arg0 === undefined) {
          const _Date = Date;
          timestamp = Date.now();
        }
        this._lastActivity = timestamp;
      }
    };
    items[36] = {
      key: "_updateSessionActivity",
      value: function _updateSessionActivity(arg0) {
        let timestamp = arg0;
        if (arg0 === undefined) {
          const _Date = Date;
          timestamp = Date.now();
        }
        const self = this;
        if (this.session) {
          self.session.lastActivity = timestamp;
          self._maybeSaveSession();
        }
      }
    };
    items[37] = {
      key: "_createCustomBreadcrumb",
      value: function _createCustomBreadcrumb(arg0) {
        const self = this;
        const timestamp = arg0;
        this.addUpdate(() => {
          let num;
          obj = { type: Custom.Custom, timestamp: num, data: { tag: "breadcrumb", payload: timestamp } };
          num = timestamp.timestamp;
          const throttledAddEvent = self.throttledAddEvent;
          if (!num) {
            num = 0;
          }
          throttledAddEvent(obj);
        });
      }
    };
    items[38] = {
      key: "_addPerformanceEntries",
      value: function _addPerformanceEntries() {
        const self = this;
        const performanceEntries = this.performanceEntries;
        const mapped = performanceEntries.map(closure_124);
        const found = mapped.filter(Boolean);
        const combined = found.concat(this.replayPerformanceEntries);
        this.performanceEntries = [];
        this.replayPerformanceEntries = [];
        let found1 = combined;
        if (this._requiresManualStart) {
          closure_0 = self._context.initialTimestamp / 1000;
          found1 = combined.filter((start) => start.start >= closure_0);
        }
        return Promise.all(found1.map((op) => {
          const start = op.start;
          obj = { type: Custom.Custom, timestamp: start, data: obj2 };
          obj2 = { tag: "performanceSpan", payload: { op: op.type, description: op.name, startTimestamp: start, endTimestamp: op.end, data: op.data } };
          let throttledAddEventResult = closure_0.throttledAddEvent(obj);
          if (typeof throttledAddEventResult === "string") {
            throttledAddEventResult = Promise.resolve(null);
          }
          return throttledAddEventResult;
        }));
      }
    };
    items[39] = {
      key: "_clearContext",
      value: function _clearContext() {
        const errorIds = this._context.errorIds;
        errorIds.clear();
        const traceIds = this._context.traceIds;
        traceIds.clear();
        this._context.urls = [];
      }
    };
    items[40] = {
      key: "_updateInitialTimestampFromEventBuffer",
      value: function _updateInitialTimestampFromEventBuffer() {
        let eventBuffer;
        let session;
        const self = this;
        ({ session, eventBuffer } = this);
        if (session) {
          if (eventBuffer) {
            if (!self._requiresManualStart) {
              if (!session.segmentId) {
                const earliestTimestamp = eventBuffer.getEarliestTimestamp();
                const tmp2 = earliestTimestamp && earliestTimestamp < self._context.initialTimestamp;
                if (tmp2) {
                  self._context.initialTimestamp = earliestTimestamp;
                }
              }
            }
          }
        }
      }
    };
    items[41] = {
      key: "_popEventContext",
      value: function _popEventContext() {
        obj = { initialTimestamp: this._context.initialTimestamp, initialUrl: this._context.initialUrl, errorIds: Array.from(this._context.errorIds), traceIds: Array.from(this._context.traceIds), urls: this._context.urls };
        this._clearContext();
        return obj;
      }
    };
    const entry4 = {
      key: "_runFlush",
      value: function _runFlush() {
        return closure_1(...arguments);
      }
    };
    dependencyMap = _asyncToGenerator(async function() {
      let logger;
      let self = this;
      let c6 = 0;
      let c7 = 0;
      let c4 = 0;
      return (async function(arg0) {
        function addMemoryEntry(eventContext) {
          return closure_1_167(...arguments);
        }
        if (c7 === 2) {
          c7 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c4;
          try {
            let client;
            let str2;
            let sessionId;
            c7 = 2;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                return { value, done: true };
              } else {
                let closure_8 = self;
                timestamp = undefined;
                eventContext = undefined;
                segmentId = undefined;
                recordingData = undefined;
                client = undefined;
                str2 = undefined;
                sessionId = self.getSessionId();
                session = self.session;
                if (session) {
                  if (self.eventBuffer) {
                    if (sessionId) {
                      c6 = 1;
                      c7 = 1;
                      obj4 = { value: self._addPerformanceEntries(), done: false };
                      return obj4;
                    }
                  }
                }
                if (closure_1_130) {
                  session = logger;
                  logger.error("No session or eventBuffer found to flush.");
                }
              }
            } else if (1 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                return { value, done: true };
              } else {
                const eventBuffer2 = eventContext.eventBuffer;
                session = eventBuffer2 == null;
                let hasEvents;
                if (!session) {
                  hasEvents = eventBuffer2.hasEvents;
                }
                if (hasEvents) {
                  c6 = 3;
                  c7 = 1;
                  obj6 = { value: addMemoryEntry(eventContext), done: false };
                  return obj6;
                }
              }
            } else if (2 === c6) {
              c4 = 0;
              closure_0 = recordingData;
              eventContext.handleException(closure_0);
              eventContext.stop({ reason: "sendReplay" });
              session = self(session[8]);
              client = session.getClient();
              const tmp22 = client;
              if (tmp22) {
                str2 = "send_error";
                if (closure_0 instanceof closure_1_173) {
                  str2 = "ratelimit_backoff";
                }
                session = client;
                client.recordDroppedEvent(str2, "replay");
              }
            } else if (3 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                return { value, done: true };
              } else if (eventContext.eventBuffer) {
                session = eventContext;
                if (sessionId === eventContext.getSessionId()) {
                  c4 = 1;
                  const result = eventContext._updateInitialTimestampFromEventBuffer();
                  const _Date = Date;
                  timestamp = Date.now();
                  session = timestamp;
                  if (timestamp - eventContext._context.initialTimestamp > eventContext._options.maxReplayDuration + 30000) {
                    const _Error = Error;
                    self = this;
                    const self2 = this;
                    const error = new Error("Session is too long, not sending replay");
                    throw error;
                  } else {
                    eventContext = eventContext._popEventContext();
                    const session2 = eventContext.session;
                    session2.segmentId = +session2.segmentId + 1;
                    segmentId = tmp8;
                    eventContext._maybeSaveSession();
                    const eventBuffer = eventContext.eventBuffer;
                    c6 = 4;
                    c7 = 1;
                    obj8 = { value: eventBuffer.finish(), done: false };
                    return obj8;
                  }
                }
              }
            } else if (4 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c7 = 3;
                return { value, done: true };
              } else {
                recordingData = value;
                c6 = 5;
                c7 = 1;
                obj10 = {
                  replayId: sessionId,
                  recordingData,
                  segmentId,
                  eventContext,
                  session: eventContext.session,
                  timestamp,
                  onError(arg0) {
                            return closure_1_8.handleException(arg0);
                          }
                };
                obj11 = { value: closure_1_174(obj10), done: false };
                return obj11;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              c4 = 0;
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp36) {
            recordingData = tmp36;
            if (0 === c4) {
              c7 = 3;
              throw tmp36;
            } else {
              c6 = 2;
            }
          }
        }
      })();
    });
    items[42] = entry4;
    const entry5 = {
      key: "_flush",
      value: function _flush() {
        return closure_0(...arguments);
      }
    };
    _require = _asyncToGenerator(async function() {
      let closure_6;
      let logger;
      const self = this;
      closure_1 = arg0;
      let c7 = 0;
      let c8 = 0;
      let c5 = 0;
      const iter = (async (arg0) => {
        let _flushLock;
        if (1 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            return { value, done: true };
          } else if (closure_4._isEnabled) {
            if (closure_4.checkAndHandleExpiredSession()) {
              if (closure_4.session) {
                const started = closure_4.session.started;
                const _Date = Date;
                closure_2 = Date.now() - started;
                const _debouncedFlush = closure_4._debouncedFlush;
                _debouncedFlush.cancel();
                closure_3 = closure_2 < closure_4._options.minReplayDuration;
                closure_4 = closure_2 > closure_4._options.maxReplayDuration + 5000;
                const tmp42 = closure_3;
                if (!tmp42) {
                  const tmp44 = closure_4;
                  if (!tmp44) {
                    const eventBuffer = closure_4.eventBuffer;
                    const tmp46 = eventBuffer && 0 === closure_4.session.segmentId && !eventBuffer.hasCheckout && closure_1_130;
                    if (tmp46) {
                      logger.log("Flushing initial segment without checkout.");
                    }
                    _flushLock = closure_4._flushLock;
                    if (!_flushLock) {
                      closure_4._flushLock = closure_4._runFlush();
                    }
                    c5 = 2;
                    c7 = 4;
                    c8 = 1;
                    return { value: closure_4._flushLock, done: false };
                  }
                }
                if (closure_1_130) {
                  const _Math = Math;
                  const log = logger.log;
                  const rounded = Math.floor(closure_2 / 1000);
                  let str = "long";
                  if (closure_3) {
                    str = "short";
                  }
                  const _HermesInternal = HermesInternal;
                  log("Session duration (" + rounded + "s) is too " + str + ", not sending replay.");
                }
                const tmp69 = closure_3;
                if (tmp69) {
                  closure_4._debouncedFlush();
                }
                c8 = 3;
                return { value: undefined, done: true };
              }
            } else if (closure_1_130) {
              logger.error("Attempting to finish replay event after session expired.");
            }
          }
        } else if (2 === c7) {
          c5 = 0;
          closure_4._flushLock = undefined;
          const tmp23 = closure_6;
          if (_flushLock) {
            closure_4._debouncedFlush();
          }
          throw tmp23;
        } else {
          if (3 === c7) {
            c5 = 1;
            let closure_7 = closure_6;
            closure_4.handleException(closure_7);
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_4._flushLock = undefined;
            const tmp7 = _flushLock;
            if (tmp7) {
              closure_4._debouncedFlush();
            }
            c8 = 3;
            return { value, done: true };
          } else {
            c5 = 1;
          }
          c5 = 0;
          closure_4._flushLock = undefined;
          const tmp18 = _flushLock;
          if (tmp18) {
            closure_4._debouncedFlush();
          }
        }
        await "IconComponent";
        closure_4 = self;
        closure_3 = tmp;
        closure_2 = self;
        if (closure_1 === undefined) {
          obj4 = {};
        }
        return "Set";
      })();
      iter.next();
      return iter;
    });
    items[43] = entry5;
    items[44] = {
      key: "_maybeSaveSession",
      value: function _maybeSaveSession() {
        const self = this;
        const tmp = this.session && self._options.stickySession;
        if (tmp) {
          saveSession(self.session);
        }
      }
    };
    items[45] = {
      key: "_onMutationHandler",
      value: function _onMutationHandler(arr) {
        let obj2;
        const self = this;
        const ignoreMutations = this._options._experiments.ignoreMutations;
        let length1;
        if (ignoreMutations != null) {
          length1 = ignoreMutations.length;
        }
        if (length1) {
          if (arr.some((target) => {
            function closestElementOfNode(target) {
              const tmp = target;
              if (tmp) {
                try {
                  let parentElement = target;
                  if (target.nodeType !== target.ELEMENT_NODE) {
                    parentElement = target.parentElement;
                  }
                  return parentElement;
                } catch (err) {
                  return null;
                }
              } else {
                return null;
              }
            }
            let matchesResult;
            obj = closestElementOfNode(target.target);
            if (obj != null) {
              matchesResult = obj.matches(tmp2);
            }
            return matchesResult;
          })) {
            return false;
          }
        }
        const mutationLimit = self._options.mutationLimit;
        const tmp2 = mutationLimit && length > mutationLimit;
        if (arr.length > self._options.mutationBreadcrumbLimit) {
          obj = { category: "replay.mutations", data: obj2 };
          obj2 = { count: arr.length, limit: tmp2 };
          const _Date = Date;
          const obj3 = { timestamp: Date.now() / 1000, type: "default" };
          const merged = Object.assign(obj);
          const result = self._createCustomBreadcrumb(obj3);
        }
        let flag = !tmp2;
        if (tmp2) {
          obj4 = { reason: "mutationLimit", forceFlush: "session" === self.recordingMode };
          self.stop(obj4);
          flag = false;
        }
        return flag;
      }
    };
    return _createClass(ReplayContainer, items);
  })();
  let str8 = "img,image,svg,video,object,picture,embed,map,audio,link[rel=\"icon\"],link[rel=\"apple-touch-icon\"]";
  let c178 = "img,image,svg,video,object,picture,embed,map,audio,link[rel=\"icon\"],link[rel=\"apple-touch-icon\"]";
  const args = ["content-length", "content-type", "accept"];
  const _Symbol = Symbol;
  let str9 = "sentry__originalRequestBody";
  let closure_180 = Symbol.for("sentry__originalRequestBody");
  let flag = false;
  let c181 = false;
  let c182 = false;
  let closure_183 = (() => {
    class Replay {
      constructor() {
        let _experiments;
        let attachRawBodyFromRequest;
        let beforeAddRecordingEvent;
        let beforeErrorSampling;
        let items;
        let items1;
        let items2;
        let items3;
        let items4;
        let items5;
        let items6;
        let maskFn;
        let onError;
        let workerUrl;
        const f82407 = (item) => item.toLowerCase();
        obj = dependencyMap;
        if (dependencyMap === undefined) {
          obj = {};
        }
        let num = obj.flushMinDelay;
        if (num === undefined) {
          num = 5000;
        }
        let num2 = obj.flushMaxDelay;
        if (num2 === undefined) {
          num2 = 5500;
        }
        let num3 = obj.minReplayDuration;
        if (num3 === undefined) {
          num3 = 4999;
        }
        let num4 = obj.maxReplayDuration;
        if (num4 === undefined) {
          num4 = 3600000;
        }
        let flag = obj.stickySession;
        if (flag === undefined) {
          flag = true;
        }
        let flag2 = obj.useCompression;
        if (flag2 === undefined) {
          flag2 = true;
        }
        ({ _experiments, workerUrl } = obj);
        if (_experiments === undefined) {
          _experiments = {};
        }
        let flag3 = obj.maskAllText;
        if (flag3 === undefined) {
          flag3 = true;
        }
        let flag4 = obj.maskAllInputs;
        if (flag4 === undefined) {
          flag4 = true;
        }
        let flag5 = obj.blockAllMedia;
        if (flag5 === undefined) {
          flag5 = true;
        }
        let num5 = obj.mutationBreadcrumbLimit;
        if (num5 === undefined) {
          num5 = 750;
        }
        let num6 = obj.mutationLimit;
        if (num6 === undefined) {
          num6 = 10000;
        }
        let num7 = obj.slowClickTimeout;
        if (num7 === undefined) {
          num7 = 7000;
        }
        let prop = obj.slowClickIgnoreSelectors;
        if (prop === undefined) {
          prop = [];
        }
        let prop1 = obj.networkDetailAllowUrls;
        if (prop1 === undefined) {
          prop1 = [];
        }
        let prop2 = obj.networkDetailDenyUrls;
        if (prop2 === undefined) {
          prop2 = [];
        }
        let flag6 = obj.networkCaptureBodies;
        if (flag6 === undefined) {
          flag6 = true;
        }
        let prop3 = obj.networkRequestHeaders;
        if (prop3 === undefined) {
          prop3 = [];
        }
        let prop4 = obj.networkResponseHeaders;
        if (prop4 === undefined) {
          prop4 = [];
        }
        let mask = obj.mask;
        if (mask === undefined) {
          mask = [];
        }
        let maskAttributes = obj.maskAttributes;
        if (maskAttributes === undefined) {
          maskAttributes = ["title", "placeholder", "aria-label"];
        }
        let unmask = obj.unmask;
        if (unmask === undefined) {
          unmask = [];
        }
        let block = obj.block;
        if (block === undefined) {
          block = [];
        }
        let unblock = obj.unblock;
        if (unblock === undefined) {
          unblock = [];
        }
        let ignore = obj.ignore;
        if (ignore === undefined) {
          ignore = [];
        }
        ({ maskFn, attachRawBodyFromRequest, beforeAddRecordingEvent, beforeErrorSampling, onError } = obj);
        if (attachRawBodyFromRequest === undefined) {
          attachRawBodyFromRequest = false;
        }
        const self = this;
        _classCallCheck(this, Replay);
        this.name = "Replay";
        const obj2 = { maskTextSelector: items.join(","), unmaskTextSelector: items1.join(","), blockSelector: items2.join(","), unblockSelector: items3.join(","), ignoreSelector: items4.join(",") };
        items = [...[".sentry-mask", "[data-sentry-mask]"]];
        items1 = [...[]];
        items2 = [...[".sentry-block", "[data-sentry-block]", "base", "iframe[srcdoc]:not([src])"]];
        items3 = [...[]];
        items4 = [...[".sentry-ignore", "[data-sentry-ignore]", "input[type=\"file\"]"]];
        const obj3 = {
          maskAllInputs: flag4,
          maskAllText: flag3,
          maskInputOptions: { password: true },
          maskTextFn: maskFn,
          maskInputFn: maskFn,
          maskAttributeFn(arg0, str, tagName) {
            let tmp2 = str;
            if (flag3) {
              let tmp4;
              if (!obj2.unmaskTextSelector) {
                let replaced;
                if (maskAttributes.includes(arg0)) {
                  replaced = str.replace(/[\S]/g, "*");
                } else {
                  replaced = str;
                  if ("value" === arg0) {
                    replaced = str;
                    if ("INPUT" === tagName.tagName) {
                      const items = ["submit", "button"];
                      const includes = items.includes;
                      tagName.getAttribute("type") || "";
                      replaced = str;
                    }
                  }
                }
                tmp4 = replaced;
              } else {
                tmp4 = str;
              }
              tmp2 = tmp4;
            }
            return tmp2;
          },
          slimDOMOptions: "all",
          inlineStylesheet: true,
          inlineImages: false,
          collectFonts: true,
          errorHandler(arg0) {
            try {
              arg0.__rrweb__ = true;
            } catch (err) {
            }
          },
          recordCrossOriginIframes: Boolean(_experiments.recordCrossOriginIframes)
        };
        const merged = Object.assign(obj2);
        this._recordingOptions = obj3;
        obj4 = { flushMinDelay: num, flushMaxDelay: num2, minReplayDuration: Math.min(num3, 50000), maxReplayDuration: Math.min(num4, c15), stickySession: flag, useCompression: flag2, workerUrl, blockAllMedia: flag5, maskAllInputs: flag4, maskAllText: flag3, mutationBreadcrumbLimit: num5, mutationLimit: num6, slowClickTimeout: num7, slowClickIgnoreSelectors: prop, networkDetailAllowUrls: prop1, networkDetailDenyUrls: prop2, networkCaptureBodies: flag6, networkRequestHeaders: items5, networkResponseHeaders: items6, beforeAddRecordingEvent, beforeErrorSampling, onError, attachRawBodyFromRequest, _experiments };
        items5 = [...closure_179, ...prop3.map(f82407)];
        items6 = [...closure_179, ...prop4.map(f82407)];
        this._initialOptions = obj4;
        if (this._initialOptions.blockAllMedia) {
          let combined;
          const _recordingOptions = self._recordingOptions;
          if (self._recordingOptions.blockSelector) {
            const _HermesInternal = HermesInternal;
            const str = "";
            combined = "" + self._recordingOptions.blockSelector + "," + c178;
          } else {
            combined = c178;
          }
          _recordingOptions.blockSelector = combined;
          const _Set = Set;
          const self2 = this;
          const self3 = this;
          const _recordingOptions2 = self._recordingOptions;
          _recordingOptions2.ignoreCSSAttributes = new Set(["background-image"]);
          set = new Set(["background-image"]);
        }
        if (self._isInitialized) {
          obj5 = _mod693;
          if (obj5.isBrowser()) {
            const _Error = Error;
            const self4 = this;
            const self5 = this;
            const error = new Error("Multiple Sentry Session Replay instances are not supported");
            throw error;
          }
        }
        self._isInitialized = true;
      }
    }
    obj = {
      key: "_isInitialized",
      get() {
        return closure_1_181;
      },
      set(arg0) {
        let closure_1_181 = arg0;
      }
    };
    let items = [
      obj,
      {
        key: "afterAllSetup",
        value: function afterAllSetup(getOptions) {
          function _INTERNAL_instrumentRequestInterface() {
            let tmp;
            if (typeof Request !== "undefined") {
              const tmp4 = c182;
              if (!tmp4) {
                try {
                  class SentryRequest {
                    constructor(arg0, arg1) {
                      tmp = new Request(arg0, arg1);
                      body = undefined;
                      if (arg1 != null) {
                        body = arg1.body;
                      }
                      if (null != body) {
                        tmp3 = closure_2_180;
                        tmp[closure_2_180] = arg1.body;
                      }
                      return tmp;
                    }
                  }
                  SentryRequest.prototype = tmp.prototype;
                  Request(closure_1[8]).GLOBAL_OBJ.Request = SentryRequest;
                  c182 = true;
                } catch (err) {
                }
              }
            }
          }
          const self = this;
          obj = Replay(dependencyMap[8]);
          let tmp = obj.isBrowser() && !self._replay;
          if (tmp) {
            if (self._initialOptions.attachRawBodyFromRequest) {
              _INTERNAL_instrumentRequestInterface();
            }
            self._setup(getOptions);
            self._initialize(getOptions);
          }
        }
      },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,

    ];
    const entry = {
      key: "start",
      value: function start() {
        if (this._replay) {
          const _replay = this._replay;
          _replay.start();
        }
      }
    };
    items[2] = entry;
    items[3] = {
      key: "startBuffering",
      value: function startBuffering() {
        if (this._replay) {
          const _replay = this._replay;
          _replay.startBuffering();
        }
      }
    };
    items[4] = {
      key: "stop",
      value: function stop() {
        let stopResult;
        const self = this;
        if (this._replay) {
          const _replay = self._replay;
          obj = { forceFlush: "session" === self._replay.recordingMode };
          stopResult = _replay.stop(obj);
        } else {
          stopResult = Promise.resolve();
        }
        return stopResult;
      }
    };
    items[5] = {
      key: "flush",
      value: function flush(arg0) {
        let _replay;
        let _replay2;
        let resolved;
        if (this._replay) {
          let result;
          ({ _replay, _replay: _replay2 } = this);
          if (_replay.isEnabled()) {
            result = _replay2.sendBufferedReplayOrFlush(arg0);
          } else {
            _replay2.start();
            result = Promise.resolve();
          }
          resolved = result;
        } else {
          resolved = Promise.resolve();
        }
        return resolved;
      }
    };
    items[6] = {
      key: "getReplayId",
      value: function getReplayId(arg0) {
        const _replay = this._replay;
        let isEnabledResult;
        if (_replay != null) {
          isEnabledResult = _replay.isEnabled();
        }
        if (isEnabledResult) {
          const _replay2 = this._replay;
          return _replay2.getSessionId(arg0);
        }
      }
    };
    items[7] = {
      key: "getRecordingMode",
      value: function getRecordingMode() {
        const _replay = this._replay;
        let isEnabledResult;
        if (_replay != null) {
          isEnabledResult = _replay.isEnabled();
        }
        return isEnabledResult ? this._replay.recordingMode : undefined;
      }
    };
    items[8] = {
      key: "_initialize",
      value: function _initialize(getIntegrationByName) {
        const self = this;
        if (this._replay) {
          const result = self._maybeLoadFromReplayCanvasIntegration(getIntegrationByName);
          const _replay = self._replay;
          _replay.initializeSampling();
        }
      }
    };
    items[9] = {
      key: "_setup",
      value: function _setup(getOptions) {
        const self = this;
        const _initialOptions = this._initialOptions;
        const options = getOptions.getOptions();
        obj = { sessionSampleRate: 0, errorSampleRate: 0 };
        const merged = Object.assign(_initialOptions);
        const obj2 = Replay(dependencyMap[8]);
        const parseSampleRateResult = obj2.parseSampleRate(options.replaysSessionSampleRate);
        const obj3 = Replay(dependencyMap[8]);
        const parseSampleRateResult1 = obj3.parseSampleRate(options.replaysOnErrorSampleRate);
        const tmp7 = null == parseSampleRateResult && null == parseSampleRateResult1;
        if (tmp7) {
          const tmp3Result = Replay(dependencyMap[8]);
          tmp3Result.consoleSandbox(() => {
            console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.");
          });
        }
        if (null != parseSampleRateResult) {
          obj.sessionSampleRate = parseSampleRateResult;
        }
        if (null != parseSampleRateResult1) {
          obj.errorSampleRate = parseSampleRateResult1;
        }
        obj4 = { options: obj, recordingOptions: self._recordingOptions };
        self._replay = new closure_1_177(obj4);
        new closure_1_177(obj4);
      }
    };
    items[10] = {
      key: "_maybeLoadFromReplayCanvasIntegration",
      value: function _maybeLoadFromReplayCanvasIntegration(getIntegrationByName) {
        try {
          const integrationByName = getIntegrationByName.getIntegrationByName("ReplayCanvas");
          if (integrationByName) {
            const self = this;
            this._replay._canvas = integrationByName.getOptions();
          }
        } catch (err) {
        }
      }
    };
    return _createClass(Replay, items);
  })();
  exports.getReplay = function getReplay() {
    obj = _mod693;
    const client = obj.getClient();
    let integrationByName;
    if (client != null) {
      integrationByName = client.getIntegrationByName("Replay");
    }
    return integrationByName;
  };
  exports.replayIntegration = (arg0) => {
    const tmp = new closure_183(arg0);
    return tmp;
  };
} catch (tmp18) {
  let _console = console;
  let str2 = "Unable to override Array.from";
  console.debug("Unable to override Array.from", tmp18);
}