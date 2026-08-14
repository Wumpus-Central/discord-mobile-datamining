// _runtime/04028_r.js
let fn = () => {
  let fn = function r(arg0, _exports2, firstResult2) {
    let fn;
    let _exports = arg0;
    let closure_1 = _exports2;
    let closure_2 = firstResult2;
    let tmp = typeof fn === "function";
    if (typeof fn === "function") {
      tmp = fn;
    }
    let closure_3 = tmp;
    let num = 0;
    if (0 < firstResult2.length) {
      _exports = firstResult2[num];
      _exports2 = _exports2[_exports];
      while (!_exports2) {
        if (arg0[_exports]) {
          let obj = { exports: null };
          obj[0] = {};
          _exports2[_exports] = obj;
          let first = arg0[_exports][0];
          let call = first.call;
          let _exports3 = obj.exports;
          fn = (arg0) => {
            let closure_0 = tmp2;
            let tmp3 = outer1_1;
            if (outer1_1[outer1_0[closure_0][1][arg0] || arg0]) {
              tmp3 = tmp3[tmp2];
              let _exports3 = tmp3.exports;
            } else if (tmp[tmp2]) {
              let obj = { exports: null };
              obj[0] = {};
              tmp3[tmp2] = obj;
              let first = tmp[tmp2][0];
              let call = first.call;
              let _exports = obj.exports;
              let fn = (arg0) => {
                let closure_0 = tmp2;
                let tmp3 = outer1_1;
                if (outer1_1[outer1_0[closure_0][1][arg0] || arg0]) {
                  tmp3 = tmp3[tmp2];
                  let _exports3 = tmp3.exports;
                } else if (tmp[tmp2]) {
                  let obj = { exports: null };
                  obj[0] = {};
                  tmp3[tmp2] = obj;
                  let first = tmp[tmp2][0];
                  let call = first.call;
                  let _exports = obj.exports;
                  let fn = (arg0) => {
                    let closure_0 = tmp2;
                    let tmp3 = outer1_1;
                    if (outer1_1[outer1_0[closure_0][1][arg0] || arg0]) {
                      tmp3 = tmp3[tmp2];
                      let _exports3 = tmp3.exports;
                    } else if (tmp[tmp2]) {
                      let obj = { exports: null };
                      obj[0] = {};
                      tmp3[tmp2] = obj;
                      let first = tmp[tmp2][0];
                      let call = first.call;
                      let _exports = obj.exports;
                      let fn = () => { ... };
                      let _exports2 = obj.exports;
                      let firstResult = outer1_2;
                      if (typeof call !== "unknown") {
                        call(_exports, fn, obj, _exports2, tmp13, tmp, tmp3, firstResult);
                      }
                    } else {
                      let tmp4 = typeof outer2_0 === "function";
                      if (typeof outer2_0 === "function") {
                        tmp4 = outer2_0;
                      }
                      if (tmp4) {
                        let tmp5Result = tmp4(tmp2, true);
                      } else if (outer1_3) {
                        tmp5Result = tmp5(tmp2, true);
                      } else {
                        let _Error = Error;
                        let error = new Error("Cannot find module '" + tmp2 + "'");
                        error.code = "MODULE_NOT_FOUND";
                        throw error;
                      }
                      return tmp5Result;
                    }
                    firstResult = first(fn, obj, _exports2, tmp13, tmp, tmp3, firstResult);
                  };
                  let _exports2 = obj.exports;
                  let firstResult = outer1_2;
                  if (typeof call !== "unknown") {
                    call(_exports, fn, obj, _exports2, tmp13, tmp, tmp3, firstResult);
                  }
                } else {
                  let tmp4 = typeof outer2_0 === "function";
                  if (typeof outer2_0 === "function") {
                    tmp4 = outer2_0;
                  }
                  if (tmp4) {
                    let tmp5Result = tmp4(tmp2, true);
                  } else if (outer1_3) {
                    tmp5Result = tmp5(tmp2, true);
                  } else {
                    let _Error = Error;
                    let error = new Error("Cannot find module '" + tmp2 + "'");
                    error.code = "MODULE_NOT_FOUND";
                    throw error;
                  }
                  return tmp5Result;
                }
                firstResult = first(fn, obj, _exports2, tmp13, tmp, tmp3, firstResult);
              };
              let _exports2 = obj.exports;
              let firstResult = outer1_2;
              if (typeof call !== "unknown") {
                call(_exports, fn, obj, _exports2, tmp13, tmp, tmp3, firstResult);
              }
            } else {
              let tmp4 = typeof outer2_0 === "function";
              if (typeof outer2_0 === "function") {
                tmp4 = outer2_0;
              }
              if (tmp4) {
                let tmp5Result = tmp4(tmp2, true);
              } else if (outer1_3) {
                tmp5Result = tmp5(tmp2, true);
              } else {
                let _Error = Error;
                let error = new Error("Cannot find module '" + tmp2 + "'");
                error.code = "MODULE_NOT_FOUND";
                throw error;
              }
              return tmp5Result;
            }
            firstResult = first(fn, obj, _exports2, tmp13, tmp, tmp3, firstResult);
          };
          _exports2 = obj.exports;
          let firstResult = _exports;
          if (typeof call === "unknown") {
            let tmp12 = _exports3;
            let tmp13 = fn;
            let tmp14 = obj;
            let tmp15 = _exports2;
            let tmp16 = firstResult;
            let tmp17 = arg0;
            let tmp18 = _exports2;
            let tmp19 = firstResult2;
            firstResult = first(fn, obj, _exports2, firstResult, arg0, _exports2, firstResult2);
            break;
          } else {
            let tmp20 = first;
            let tmp21 = _exports3;
            let tmp22 = fn;
            let tmp23 = obj;
            let tmp24 = _exports2;
            let tmp25 = firstResult;
            let tmp26 = arg0;
            let tmp27 = _exports2;
            let tmp28 = firstResult2;
            let callResult = call(_exports3, fn, obj, _exports2, firstResult, arg0, _exports2, firstResult2);
            break;
          }
          break;
        } else {
          let tmp3 = typeof fn === "function";
          if (typeof fn === "function") {
            tmp3 = fn;
          }
          if (tmp3) {
            let tmp3Result = tmp3(_exports, true);
          } else if (tmp) {
            fn = tmp(_exports, true);
          } else {
            let tmp4 = globalThis;
            let _Error = Error;
            let str = "Cannot find module '";
            let tmp5 = new.target;
            let str2 = "'";
            let tmp6 = new.target;
            let error = new Error("Cannot find module '" + _exports + "'");
            let tmp8 = error;
            let str3 = "MODULE_NOT_FOUND";
            error.code = "MODULE_NOT_FOUND";
            throw error;
          }
          num = num + 1;
        }
        _exports = _exports2[_exports].exports;
      }
    }
    return function o(arg0, arg1) {
      const table = arg0;
      if (!table2[arg0]) {
        if (table[arg0]) {
          const obj = { exports: null };
          obj[0] = {};
          tmp[arg0] = obj;
          const first = tmp2[arg0][0];
          const call = first.call;
          const _exports = obj.exports;
          const fn = (arg0) => {
            let closure_0 = tmp2;
            let tmp3 = outer1_1;
            if (outer1_1[outer1_0[closure_0][1][arg0] || arg0]) {
              tmp3 = tmp3[tmp2];
              let _exports3 = tmp3.exports;
            } else if (tmp[tmp2]) {
              let obj = { exports: null };
              obj[0] = {};
              tmp3[tmp2] = obj;
              let first = tmp[tmp2][0];
              let call = first.call;
              let _exports = obj.exports;
              let fn = (arg0) => {
                let closure_0 = tmp2;
                let tmp3 = outer1_1;
                if (outer1_1[outer1_0[closure_0][1][arg0] || arg0]) {
                  tmp3 = tmp3[tmp2];
                  let _exports3 = tmp3.exports;
                } else if (tmp[tmp2]) {
                  let obj = { exports: null };
                  obj[0] = {};
                  tmp3[tmp2] = obj;
                  let first = tmp[tmp2][0];
                  let call = first.call;
                  let _exports = obj.exports;
                  let fn = () => { ... };
                  let _exports2 = obj.exports;
                  let firstResult = outer1_2;
                  if (typeof call !== "unknown") {
                    call(_exports, fn, obj, _exports2, tmp13, tmp, tmp3, firstResult);
                  }
                } else {
                  let tmp4 = typeof outer2_0 === "function";
                  if (typeof outer2_0 === "function") {
                    tmp4 = outer2_0;
                  }
                  if (tmp4) {
                    let tmp5Result = tmp4(tmp2, true);
                  } else if (outer1_3) {
                    tmp5Result = tmp5(tmp2, true);
                  } else {
                    let _Error = Error;
                    let error = new Error("Cannot find module '" + tmp2 + "'");
                    error.code = "MODULE_NOT_FOUND";
                    throw error;
                  }
                  return tmp5Result;
                }
                firstResult = first(fn, obj, _exports2, tmp13, tmp, tmp3, firstResult);
              };
              let _exports2 = obj.exports;
              let firstResult = outer1_2;
              if (typeof call !== "unknown") {
                call(_exports, fn, obj, _exports2, tmp13, tmp, tmp3, firstResult);
              }
            } else {
              let tmp4 = typeof outer2_0 === "function";
              if (typeof outer2_0 === "function") {
                tmp4 = outer2_0;
              }
              if (tmp4) {
                let tmp5Result = tmp4(tmp2, true);
              } else if (outer1_3) {
                tmp5Result = tmp5(tmp2, true);
              } else {
                let _Error = Error;
                let error = new Error("Cannot find module '" + tmp2 + "'");
                error.code = "MODULE_NOT_FOUND";
                throw error;
              }
              return tmp5Result;
            }
            firstResult = first(fn, obj, _exports2, tmp13, tmp, tmp3, firstResult);
          };
          const _exports2 = obj.exports;
          if (typeof call === "unknown") {
            first(fn, obj, _exports2, tmp12, tmp2, tmp, tmp13);
          } else {
            call(_exports, fn, obj, _exports2, tmp12, tmp2, tmp, tmp13);
          }
        } else {
          let tmp3 = typeof fn === "function";
          if (typeof fn === "function") {
            tmp3 = fn;
          }
          if (!arg1) {
            if (tmp3) {
              return tmp3(arg0, true);
            }
          }
          if (closure_3) {
            return tmp5(arg0, true);
          } else {
            const _Error = Error;
            const error = new Error("Cannot find module '" + arg0 + "'");
            error.code = "MODULE_NOT_FOUND";
            throw error;
          }
        }
      }
      return table2[arg0].exports;
    };
  };
  let obj = { 1: null, 2: items, 3: items1, 4: items2, 5: items3, 6: items4, 7: items5, 8: items6, 9: items7, 10: items8, 11: items9, 12: items10, 13: items11, 14: items12, 15: items13, 16: items14, 17: items15, 18: items16, 19: items17, 20: items18, 21: items19, 22: items20, 23: items21, 24: items22, 25: items23, 26: items24, 27: items25, 28: items26, 29: items27, 30: items28, 31: items29, 32: items30, 33: items31, 34: items32, 35: items33, 36: items34, 37: items35, 38: items36, 39: items37, 40: items38, 41: items39, 42: items40, 43: items41, 44: items42, 45: items43, 46: items44, 47: items45, 48: items46, 49: items47, 50: items48, 51: items49, 52: items50, 53: items51, 54: items52, 55: items53, 56: items54, 57: items55, 58: items56, 59: items57, 60: items58, 61: items59, 62: items60, 63: items61, 64: items62, 65: items63, 66: items64, 67: items65, 68: items66, 69: items67, 70: items68, 71: items69, 72: items70, 73: items71, 74: items72, 75: items73, 76: items74, 77: items75, 78: items76, 79: items77, 80: items78, 81: items79, 82: items80, 83: items81, 84: items82, 85: items83, 86: items84, 87: items85, 88: items86, 89: items87, 90: items88, 91: items89, 92: items90, 93: items91, 94: items92, 95: items93, 96: items94, 97: items95, 98: items96, 99: items97, 100: items98, 101: items, 102: items, 103: items, 104: items, 105: items, 106: items, 107: items, 108: items, 109: items, 110: items, 111: items, 112: items, 113: items, 114: items, 115: items, 116: items, 117: items, 118: items, 119: items, 120: items, 121: items, 122: items, 123: items, 124: items, 125: items, 126: items, 127: items, 128: items, 129: items, 130: items, 131: items, 132: items, 133: items, 134: items, 135: items, 136: items, 137: items, 138: items, 139: items, 140: items, 141: items, 142: items, 143: items, 144: items, 145: items, 146: items, 147: items, 148: items, 149: items, 150: items, 151: items, 152: items, 153: items, 154: items, 155: items, 156: items, 157: items, 158: items, 159: items, 160: items, 161: items, 162: items, 163: items, 164: items, 165: items, 166: items, 167: items, 168: items, 169: items, 170: items, 171: items, 172: items, 173: items, 174: items, 175: items, 176: items, 177: items, 178: items, 179: items, 180: items, 181: items, 182: items, 183: items, 184: items, 185: items, 186: items, 187: items, 188: items, 189: items, 190: items, 191: items, 192: items, 193: items, 194: items, 195: items, 196: items, 197: items, 198: items, 199: items, 200: items, 201: items, 202: items, 203: items, 204: items, 205: items, 206: items, 207: items, 208: items, 209: items, 210: items, 211: items, 212: items, 213: items, 214: items, 215: items, 216: items, 217: items, 218: items, 219: items, 220: items, 221: items, 222: items, 223: items, 224: items, 225: items, 226: items, 227: items, 228: items, 229: items, 230: items, 231: items, 232: items, 233: items, 234: items, 235: items, 236: items, 237: items, 238: items, 239: items, 240: items, 241: items, 242: items, 243: items, 244: items, 245: items, 246: items, 247: items, 248: items };
  items = [
    (arg0, arg1, arg2) => {
      function loadScript(forceScriptReload) {
        const table = forceScriptReload;
        const json = JSON.stringify(forceScriptReload);
        if (!forceScriptReload.forceScriptReload) {
          if (table[json]) {
            return tmp3;
          }
        }
        let element = <script />;
        const tmp4 = forceScriptReload.dataAttributes || {};
        let closure_2 = tmp4;
        let head = forceScriptReload.container;
        if (!head) {
          const _document = document;
          head = document.head;
        }
        element.src = forceScriptReload.src;
        element.id = forceScriptReload.id || "";
        element.async = true;
        if (forceScriptReload.type) {
          const concat = "".concat;
          let attr = element.setAttribute("type", "".concat(forceScriptReload.type));
        }
        if (forceScriptReload.crossorigin) {
          const concat2 = "".concat;
          const attr1 = element.setAttribute("crossorigin", "".concat(forceScriptReload.crossorigin));
        }
        const keys = Object.keys(tmp4);
        const item = keys.forEach((arg0) => {
          const combined = "data-".concat(arg0);
          const attr = element.setAttribute(combined, "".concat(tmp4[arg0]));
        });
        const promise = new Promise((arg0, arg1) => {
          let closure_0 = arg0;
          const element = arg1;
          const listener = element.addEventListener("load", () => {
            lib(closure_1);
          });
          const listener1 = element.addEventListener("error", () => {
            const error = new Error("".concat(lib.src, " failed to load."));
            callback(error);
          });
          const listener2 = element.addEventListener("abort", () => {
            const error = new Error("".concat(lib.src, " has aborted."));
            callback(error);
          });
          head.appendChild(element);
        });
        table[json] = promise;
        return promise;
      }
      let closure_0 = {};
      loadScript.clearCache = () => {
        let closure_0 = {};
      };
      module.exports = loadScript;
    },
    {}
  ];
  items1 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/load-script");
    },
    { "./dist/load-script": 1 }
  ];
  items2 = [
    (arg0, arg1, arg2) => {
      module.exports = function isAndroid(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        return /Android/i.test(userAgent);
      };
    },
    {}
  ];
  items3 = [
    (arg0, arg1, arg2) => {
      module.exports = function isChromeOS(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        return /CrOS/i.test(userAgent);
      };
    },
    {}
  ];
  items4 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./is-edge");
      let closure_1 = global("./is-samsung");
      let closure_2 = global("./is-duckduckgo");
      let closure_3 = global("./is-opera");
      let closure_4 = global("./is-silk");
      module.exports = function isChrome(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        let tmp2 = -1 === userAgent.indexOf("Chrome");
        if (tmp2) {
          tmp2 = -1 === userAgent.indexOf("CriOS");
        }
        if (!tmp2) {
          tmp2 = callback(userAgent);
        }
        if (!tmp2) {
          tmp2 = callback2(userAgent);
        }
        if (!tmp2) {
          tmp2 = callback3(userAgent);
        }
        if (!tmp2) {
          tmp2 = callback4(userAgent);
        }
        if (!tmp2) {
          tmp2 = callback5(userAgent);
        }
        return !tmp2;
      };
    },
    { "./is-duckduckgo": 6, "./is-edge": 7, "./is-opera": 16, "./is-samsung": 17, "./is-silk": 18 }
  ];
  items5 = [
    (arg0, arg1, arg2) => {
      module.exports = function isDuckDuckGo(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        return -1 !== userAgent.indexOf("DuckDuckGo/");
      };
    },
    {}
  ];
  items6 = [
    (arg0, arg1, arg2) => {
      module.exports = function isEdge(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        let tmp2 = -1 !== userAgent.indexOf("Edge/");
        if (!tmp2) {
          tmp2 = -1 !== userAgent.indexOf("Edg/");
        }
        return tmp2;
      };
    },
    {}
  ];
  items7 = [
    (arg0, arg1, arg2) => {
      module.exports = function isFirefox(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        return /Firefox/i.test(userAgent);
      };
    },
    {}
  ];
  items8 = [
    (arg0, arg1, arg2) => {
      module.exports = function isIosFirefox(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        return /FxiOS/i.test(userAgent);
      };
    },
    {}
  ];
  items9 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./is-ios");
      module.exports = function isIosGoogleSearchApp(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        let isMatch = callback(userAgent);
        if (isMatch) {
          isMatch = /\bGSA\b/.test(userAgent);
          const obj = /\bGSA\b/;
        }
        return isMatch;
      };
    },
    { "./is-ios": 14 }
  ];
  items10 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./is-ios");
      let closure_1 = global("./is-ios-firefox");
      const re2 = /webkit/i;
      module.exports = function isIosSafari(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        let isMatch = callback(userAgent);
        if (isMatch) {
          isMatch = regex.test(userAgent);
        }
        if (isMatch) {
          isMatch = userAgent.indexOf("CriOS") <= -1;
        }
        if (isMatch) {
          isMatch = !callback2(userAgent);
        }
        if (isMatch) {
          isMatch = userAgent.indexOf("FBAN") <= -1;
        }
        return isMatch;
      };
    },
    { "./is-ios": 14, "./is-ios-firefox": 9 }
  ];
  items11 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./is-ios");
      let closure_1 = global("./is-ios-google-search-app");
      module.exports = function isIosWebview(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        let tmp2 = callback(userAgent);
        if (tmp2) {
          let isMatch = callback2(userAgent);
          if (!isMatch) {
            isMatch = /.+AppleWebKit(?!.*Safari)/i.test(userAgent);
            const obj = /.+AppleWebKit(?!.*Safari)/i;
          }
          tmp2 = isMatch;
        }
        return tmp2;
      };
    },
    { "./is-ios": 14, "./is-ios-google-search-app": 10 }
  ];
  items12 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./is-ios-webview");
      module.exports = function isIosWKWebview(arg0, arg1) {
        let visible = arg1;
        if (undefined === arg1) {
          const _window = window;
          visible = window.statusbar.visible;
        }
        return callback(arg0) && visible;
      };
    },
    { "./is-ios-webview": 12 }
  ];
  items13 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./is-ipados");
      module.exports = function isIos(arg0, arg1, arg2) {
        let flag = arg1;
        if (undefined === arg1) {
          flag = true;
        }
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        const isMatch = /iPhone|iPod|iPad/i.test(userAgent);
        let tmp3 = isMatch;
        if (flag) {
          let tmp4 = isMatch;
          if (!isMatch) {
            tmp4 = callback(userAgent, arg2);
          }
          tmp3 = tmp4;
        }
        return tmp3;
      };
    },
    { "./is-ipados": 15 }
  ];
  items14 = [
    (arg0, arg1, arg2) => {
      module.exports = function isIpadOS(arg0, arg1) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        let _document = arg1;
        if (!arg1) {
          const _window2 = window;
          _document = window.document;
        }
        let isMatch = /Mac|iPad/i.test(userAgent);
        if (isMatch) {
          isMatch = "ontouchend" in _document;
        }
        return isMatch;
      };
    },
    {}
  ];
  items15 = [
    (arg0, arg1, arg2) => {
      module.exports = function isOpera(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        let tmp2 = -1 !== userAgent.indexOf("OPR/");
        if (!tmp2) {
          tmp2 = -1 !== userAgent.indexOf("Opera/");
        }
        if (!tmp2) {
          tmp2 = -1 !== userAgent.indexOf("OPT/");
        }
        return tmp2;
      };
    },
    {}
  ];
  items16 = [
    (arg0, arg1, arg2) => {
      module.exports = function isSamsungBrowser(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        return /SamsungBrowser/i.test(userAgent);
      };
    },
    {}
  ];
  items17 = [
    (arg0, arg1, arg2) => {
      module.exports = function isSilk(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        return -1 !== userAgent.indexOf("Silk/");
      };
    },
    {}
  ];
  items18 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./is-android");
      let closure_1 = global("./is-ios-firefox");
      let closure_2 = global("./is-ios-webview");
      let closure_3 = global("./is-chrome");
      let closure_4 = global("./is-samsung");
      let closure_5 = global("./is-duckduckgo");
      module.exports = function supportsPopups(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        let tmp2 = callback3(userAgent);
        if (!tmp2) {
          tmp2 = callback2(userAgent);
        }
        if (!tmp2) {
          let userAgent2 = userAgent;
          if (!userAgent) {
            const _window2 = window;
            userAgent2 = window.navigator.userAgent;
          }
          let isMatch = callback(userAgent2);
          if (isMatch) {
            isMatch = /Version\/[\d.]+/i.test(userAgent2);
            const obj = /Version\/[\d.]+/i;
          }
          if (isMatch) {
            userAgent = userAgent2;
            if (!userAgent2) {
              const _window3 = window;
              userAgent = window.navigator.userAgent;
            }
            isMatch = userAgent.indexOf("Opera Mini") <= -1;
          }
          if (isMatch) {
            isMatch = !callback6(userAgent2);
          }
          tmp2 = isMatch;
        }
        if (!tmp2) {
          let userAgent1 = userAgent;
          if (!userAgent) {
            const _window4 = window;
            userAgent1 = window.navigator.userAgent;
          }
          tmp2 = userAgent1.indexOf("Opera Mini") > -1;
        }
        if (!tmp2) {
          let str3 = userAgent;
          if (!userAgent) {
            const _window5 = window;
            str3 = window.navigator.userAgent;
          }
          const match = str3.match(/CriOS\/(\d+)\./);
          let tmp13 = match;
          if (tmp13) {
            const _parseInt = parseInt;
            tmp13 = parseInt(match[1], 10) < 48;
          }
          tmp2 = tmp13;
        }
        if (!tmp2) {
          const tmp16 = callback4(userAgent);
          let isMatch1 = !tmp16;
          if (!tmp16) {
            isMatch1 = !callback5(userAgent);
          }
          if (isMatch1) {
            isMatch1 = /samsung/i.test(userAgent);
            const obj2 = /samsung/i;
          }
          tmp2 = isMatch1;
        }
        return !tmp2;
      };
    },
    { "./is-android": 3, "./is-chrome": 5, "./is-duckduckgo": 6, "./is-ios-firefox": 9, "./is-ios-webview": 12, "./is-samsung": 17 }
  ];
  items19 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-android");
    },
    { "./dist/is-android": 3 }
  ];
  items20 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-chrome-os");
    },
    { "./dist/is-chrome-os": 4 }
  ];
  items21 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-chrome");
    },
    { "./dist/is-chrome": 5 }
  ];
  items22 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-firefox");
    },
    { "./dist/is-firefox": 8 }
  ];
  items23 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-ios-safari");
    },
    { "./dist/is-ios-safari": 11 }
  ];
  items24 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-ios-webview");
    },
    { "./dist/is-ios-webview": 12 }
  ];
  items25 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-ios-wkwebview");
    },
    { "./dist/is-ios-wkwebview": 13 }
  ];
  items26 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-ios");
    },
    { "./dist/is-ios": 14 }
  ];
  items27 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-samsung");
    },
    { "./dist/is-samsung": 17 }
  ];
  items28 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/supports-popups");
    },
    { "./dist/supports-popups": 19 }
  ];
  items29 = [
    (arg0, arg1, arg2) => {
      class EventEmitter {
        constructor() {
          this._events = {};
          return;
        }
        on(arg0, arg1) {
          _events = this._events;
          if (this._events[global]) {
            arr2 = _events[global];
            arr = arr2.push(module);
          } else {
            items = [];
            items[0] = module;
            _events[global] = items;
          }
          return;
        }
        off(arg0, arg1) {
          arr = this._events[global];
          if (arr) {
            tmp = module;
            num = 1;
            spliceResult = arr.splice(arr.indexOf(module), 1);
          }
          return;
        }
        _emit(arg0) {
          items = [];
          EventEmitter = items;
          num = 1;
          if (1 < arguments.length) {
            do {
              items[num - 1] = arguments[num];
              num = num + 1;
              length = arguments.length;
            } while (num < length);
          }
          arr2 = this._events[global];
          if (arr2) {
            item = arr2.forEach(() => { ... });
          }
          return;
        }
        hasListener(arg0) {
          arr = this._events[global];
          tmp = arr;
          if (tmp) {
            num = 0;
            tmp = arr.length > 0;
          }
          return tmp;
        }
        static createChild(arg0) {
          obj = { constructor: global };
          global.prototype = Object.create(EventEmitter.prototype, obj);
          return;
        }
      }
      module.exports = EventEmitter;
    },
    {}
  ];
  items30 = [
    (arg0, arg1, arg2) => {
      let _Promise = null;
      if (typeof Promise !== "undefined") {
        _Promise = Promise;
      }
      class ExtendedPromise {
        constructor(arg0) {
          self = this;
          self = this;
          if (typeof global !== "function") {
            obj = self;
            tmp = new.target;
            tmp2 = new.target;
            promise = new self.Promise(() => { ... });
            tmp4 = promise;
            self._promise = promise;
            obj = global;
            if (!global) {
              obj = {};
            }
            self._onResolve = obj.onResolve || obj.defaultOnResolve;
            self._onReject = obj.onReject || obj.defaultOnReject;
            if (obj.shouldCatchExceptions(obj)) {
              _promise = self._promise;
              catchPromise = _promise.catch(/* F119387 */ function() { ... });
            }
            _resetStateResult = self._resetState();
          } else {
            tmp7 = self;
            tmp8 = new.target;
            tmp9 = new.target;
            tmp10 = global;
            promise1 = new self.Promise(global);
            tmp12 = promise1;
            self._promise = promise1;
          }
          return;
        }
        static defaultOnResolve(arg0) {
          _Promise = ExtendedPromise.Promise;
          return _Promise.resolve(global);
        }
        static defaultOnReject(arg0) {
          _Promise = ExtendedPromise.Promise;
          return _Promise.reject(global);
        }
        static setPromise(arg0) {
          ExtendedPromise.Promise = global;
          return;
        }
        static shouldCatchExceptions(arg0) {
          _Boolean = Boolean;
          if (global.hasOwnProperty("suppressUnhandledPromiseMessage")) {
            _BooleanResult = _Boolean(global.suppressUnhandledPromiseMessage);
          } else {
            tmp = ExtendedPromise;
            _BooleanResult = _Boolean(ExtendedPromise.suppressUnhandledPromiseMessage);
          }
          return _BooleanResult;
        }
        static all(arg0) {
          _Promise = ExtendedPromise.Promise;
          return _Promise.all(global);
        }
        static allSettled(arg0) {
          _Promise = ExtendedPromise.Promise;
          return _Promise.allSettled(global);
        }
        static race(arg0) {
          _Promise = ExtendedPromise.Promise;
          return _Promise.race(global);
        }
        static reject(arg0) {
          _Promise = ExtendedPromise.Promise;
          return _Promise.reject(global);
        }
        static resolve(arg0) {
          _Promise = ExtendedPromise.Promise;
          return _Promise.resolve(global);
        }
        then() {
          items = [];
          num = 0;
          if (0 < arguments.length) {
            do {
              items[num] = arguments[num];
              num = num + 1;
              length = arguments.length;
            } while (num < length);
          }
          _promise = this._promise;
          then = _promise.then;
          return then.apply(_promise, items);
        }
        catch() {
          items = [];
          num = 0;
          if (0 < arguments.length) {
            do {
              items[num] = arguments[num];
              num = num + 1;
              length = arguments.length;
            } while (num < length);
          }
          _promise = this._promise;
          _catch = _promise.catch;
          return _catch.apply(_promise, items);
        }
        resolve(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          if (!this.isFulfilled) {
            _setResolvedResult = self._setResolved();
            tmp2 = closure_0;
            _Promise = closure_0.Promise;
            resolveResult = _Promise.resolve();
            nextPromise = resolveResult.then(() => { ... });
            nextPromise1 = nextPromise.then(() => { ... });
            catchPromise = nextPromise1.catch(() => { ... });
          }
          return self;
        }
        reject(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          if (!this.isFulfilled) {
            _setRejectedResult = self._setRejected();
            tmp2 = closure_0;
            _Promise = closure_0.Promise;
            resolveResult = _Promise.resolve();
            nextPromise = resolveResult.then(() => { ... });
            nextPromise1 = nextPromise.then(() => { ... });
            catchPromise = nextPromise1.catch(() => { ... });
          }
          return self;
        }
        _resetState() {
          return;
        }
        _setResolved() {
          return;
        }
        _setRejected() {
          return;
        }
      }
      ExtendedPromise.Promise = _Promise;
      module.exports = ExtendedPromise;
    },
    {}
  ];
  items31 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./lib/set-attributes");
      let closure_1 = global("./lib/default-attributes");
      let closure_2 = global("./lib/assign");
      module.exports = function createFrame(arg0) {
        let obj = arg0;
        if (undefined === arg0) {
          obj = {};
        }
        const element = <iframe />;
        obj = closure_2.assign({}, defaultAttributes.defaultAttributes, obj);
        if (tmp4) {
          obj = closure_2.assign(element.style, obj.style);
          delete tmp[tmp2];
        }
        attributes.setAttributes(element, obj);
        if (!element.getAttribute("id")) {
          element.id = element.name;
        }
        return element;
      };
    },
    { "./lib/assign": 33, "./lib/default-attributes": 34, "./lib/set-attributes": 35 }
  ];
  items32 = [
    (arg0, arg1, arg2) => {
      arg2.assign = function assign(arg0) {
        let length;
        let closure_0 = arg0;
        const items = [];
        let num = 1;
        if (1 < arguments.length) {
          do {
            items[num - 1] = arguments[num];
            num = num + 1;
            length = arguments.length;
          } while (num < length);
        }
        let item = items.forEach((obj) => {
          let closure_0 = obj;
          if (typeof obj === "object") {
            const _Object = Object;
            const keys = Object.keys(obj);
            const item = keys.forEach((arg0) => {
              obj[arg0] = obj[arg0];
            });
          }
        });
        return arg0;
      };
    },
    {}
  ];
  items33 = [
    (arg0, arg1, arg2) => {
      arg2.defaultAttributes = { src: "about:blank", frameBorder: 0, allowtransparency: true, scrolling: "no" };
    },
    {}
  ];
  items34 = [
    (arg0, arg1, arg2) => {
      arg2.setAttributes = function setAttributes(removeAttribute, obj) {
        for (const key10005 in arg1) {
          let tmp4 = key10005;
          if (!arg1.hasOwnProperty(key10005)) {
            continue;
          } else {
            let tmp = arg1[key10005];
            if (null == tmp) {
              let removeAttributeResult = arg0.removeAttribute(key10005);
              continue;
            } else {
              let attr = arg0.setAttribute(key10005, tmp);
              continue;
            }
            continue;
          }
          continue;
        }
      };
    },
    {}
  ];
  items35 = [
    (arg0, arg1, arg2) => {
      module.exports = function uuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (arg0) => {
          const tmp = 16 * Math.random() | 0;
          let str = tmp;
          if ("x" !== arg0) {
            str = 3 & tmp | 8;
          }
          return str.toString(16);
        });
      };
    },
    {}
  ];
  items36 = [
    (arg0, arg1, arg2) => {
      arg2.deferred = function deferred(items) {
        let closure_0 = items;
        return () => {
          let length;
          const items = [];
          let num = 0;
          if (0 < arguments.length) {
            do {
              items[num] = arguments[num];
              num = num + 1;
              length = arguments.length;
            } while (num < length);
          }
          const timerId = setTimeout(() => {
            try {
              items.apply(undefined, items);
            } catch (tmp4) {
              const _console = console;
              console.log("Error in callback function");
              const _console2 = console;
              console.log(tmp4);
            }
          }, 1);
        };
      };
    },
    {}
  ];
  items37 = [
    (arg0, arg1, arg2) => {
      arg2.once = function once(arg0) {
        let closure_0 = arg0;
        let c1 = false;
        return () => {
          let length;
          const items = [];
          let num = 0;
          if (0 < arguments.length) {
            do {
              items[num] = arguments[num];
              num = num + 1;
              length = arguments.length;
            } while (num < length);
          }
          if (!c1) {
            c1 = true;
            callback.apply(undefined, items);
          }
        };
      };
    },
    {}
  ];
  items38 = [
    (arg0, arg1, arg2) => {
      arg2.promiseOrCallback = function promiseOrCallback(closure_0, onceResult) {
        closure_0 = onceResult;
        if (onceResult) {
          closure_0.then((arg0) => onceResult(null, arg0)).catch((arg0) => onceResult(arg0));
        } else {
          return closure_0;
        }
      };
    },
    {}
  ];
  items39 = [
    (arg0, arg1, arg2) => {
      function wrapPromise(arg0) {
        let closure_0 = arg0;
        return function() {
          let length;
          const items = [];
          let num = 0;
          if (0 < arguments.length) {
            do {
              items[num] = arguments[num];
              num = num + 1;
              length = arguments.length;
            } while (num < length);
          }
          let onceResult;
          if (typeof items[items.length - 1] === "function") {
            onceResult = outer1_1.once(lib.deferred(items.pop()));
          }
          return outer1_2.promiseOrCallback(lib.apply(this, items), onceResult);
        };
      }
      let closure_0 = global("./lib/deferred");
      let closure_1 = global("./lib/once");
      let closure_2 = global("./lib/promise-or-callback");
      wrapPromise.wrapPrototype = (arg0, arg1) => {
        let closure_0 = arg0;
        let obj = arg1;
        if (undefined === arg1) {
          obj = {};
        }
        let closure_1 = obj.ignoreMethods || [];
        let closure_2 = true === obj.transformPrivateMethods;
        const ownPropertyNames = Object.getOwnPropertyNames(arg0.prototype);
        const found = ownPropertyNames.filter((str) => {
          let tmp = "constructor" !== str;
          if (tmp) {
            tmp = typeof ctor.prototype[str] === "function";
          }
          let tmp4 = closure_2;
          const index = closure_1.indexOf(str);
          if (!tmp4) {
            tmp4 = "_" !== str.charAt(0);
          }
          if (tmp) {
            tmp = tmp4;
          }
          if (tmp) {
            tmp = -1 === index;
          }
          return tmp;
        });
        const item = found.forEach((arg0) => {
          ctor = ctor.prototype[arg0];
          ctor.prototype[arg0] = function() {
            let length;
            const items = [];
            let num = 0;
            if (0 < arguments.length) {
              do {
                items[num] = arguments[num];
                num = num + 1;
                length = arguments.length;
              } while (num < length);
            }
            let onceResult;
            if (typeof items[items.length - 1] === "function") {
              onceResult = outer1_1.once(lib.deferred(items.pop()));
            }
            return outer1_2.promiseOrCallback(lib.apply(this, items), onceResult);
          };
        });
        return arg0;
      };
      module.exports = wrapPromise;
    },
    { "./lib/deferred": 37, "./lib/once": 38, "./lib/promise-or-callback": 39 }
  ];
  items40 = [
    function(arg0, arg1, obj) {
      const fn = (arg0) => {
        let concat;
        let concat2;
        function loadScript$1(forceScriptReload) {
          const table = forceScriptReload;
          const json = JSON.stringify(forceScriptReload);
          if (!forceScriptReload.forceScriptReload) {
            if (table[json]) {
              return tmp3;
            }
          }
          let element = <script />;
          const tmp4 = forceScriptReload.dataAttributes || {};
          const fastlane = tmp4;
          let head = forceScriptReload.container;
          if (!head) {
            const _document = document;
            head = document.head;
          }
          element.src = forceScriptReload.src;
          element.id = forceScriptReload.id || "";
          element.async = true;
          if (forceScriptReload.type) {
            const concat = "".concat;
            let attr = element.setAttribute("type", "".concat(forceScriptReload.type));
          }
          if (forceScriptReload.crossorigin) {
            const concat2 = "".concat;
            const attr1 = element.setAttribute("crossorigin", "".concat(forceScriptReload.crossorigin));
          }
          const keys = Object.keys(tmp4);
          const item = keys.forEach((arg0) => {
            const combined = "data-".concat(arg0);
            const attr = element.setAttribute(combined, "".concat(tmp4[arg0]));
          });
          const promise = new Promise((arg0, arg1) => {
            let closure_0 = arg0;
            const element = arg1;
            const listener = element.addEventListener("load", () => { ... });
            const listener1 = element.addEventListener("error", () => { ... });
            const listener2 = element.addEventListener("abort", () => { ... });
            head.appendChild(element);
          });
          table[json] = promise;
          return promise;
        }
        function loadAXOScript(arg0, arg1) {
          let flag = arg1;
          if (undefined === arg1) {
            flag = true;
          }
          let amd = typeof define === "function";
          if (typeof define === "function") {
            const _window4 = window;
            amd = window.define.amd;
          }
          if (amd) {
            const _window = window;
            let amd1 = typeof define2 === "function";
            if (typeof define2 === "function") {
              const _window5 = window;
              amd1 = window.define.amd;
            }
            if (amd1) {
              const _window2 = window;
              amd1 = typeof window.requirejs === "function";
            }
            if (amd1) {
              const _window3 = window;
              amd1 = typeof window.requirejs.config === "function";
            }
            if (amd1) {
              let obj = { paths: null };
              obj = {};
              obj[fastlane] = arg0;
              obj[0] = obj;
              globalThis.requirejs.config(obj);
            }
            const concat = "".concat;
            const combined = "".concat(fastlane, "/");
            const AXO_ASSET_NAME = obj.AXO_ASSET_NAME;
            let closure_0 = combined.concat(flag ? AXO_ASSET_NAME.minified : AXO_ASSET_NAME.unminified);
            const promise = new Promise((arg0, arg1) => {
              const items = [closure_0];
              const _module = window.require(items, arg0, arg1);
            });
            return promise;
          } else {
            obj = { id: "axo-id", src: null, forceScriptReload: true };
            obj[1] = arg0;
            return loadScript$1(obj);
          }
        }
        let obj = {};
        let closure_0 = {};
        loadScript$1.clearCache = () => {
          let closure_0 = {};
        };
        obj.loadScript = undefined;
        loadScript$1 = undefined;
        obj.loadStylesheet = undefined;
        obj.loadScript = loadScript$1;
        obj.loadStylesheet = function loadStylesheet(href) {
          const element = document.querySelector("link[href=\"".concat(href.href, "\"]"));
          if (element) {
            return Promise.resolve(element);
          } else {
            const _document = document;
            const element1 = <link />;
            let head = href.container;
            if (!head) {
              const _document2 = document;
              head = document.head;
            }
            const attr = element1.setAttribute("rel", "stylesheet");
            const attr1 = element1.setAttribute("type", "text/css");
            const attr2 = element1.setAttribute("href", href.href);
            const attr3 = element1.setAttribute("id", href.id);
            if (head.firstChild) {
              head.insertBefore(element1, head.firstChild);
            } else {
              head.appendChild(element1);
            }
            return Promise.resolve(element1);
          }
        };
        let fastlane = "fastlane";
        obj = { AXO_ASSET_NAME: { minified: "axo.min", unminified: "axo" }, AXO_ASSET_PATH: "connect-boba", LOCALE_PATH: "".concat("connect-boba", "/locales/"), CDNX_PROD: "https://www.paypalobjects.com" };
        const BT = "BT";
        const PPCP = "PPCP";
        obj = { client: "client", hostedFields: "hosted-fields" };
        const obj1 = {};
        const obj2 = { id: "client", module: "client", amdModule: null, script: null };
        const obj3 = { unminified: null, minified: null };
        let combined = "".concat("braintree", "/");
        obj3[0] = combined.concat(obj.client);
        let combined1 = "".concat("braintree", "/");
        obj3[1] = combined1.concat(obj.client, ".min");
        obj2[2] = obj3;
        obj2[3] = { unminified: "".concat(obj.client, ".js"), minified: "".concat(obj.client, ".min.js") };
        obj1.client = obj2;
        const obj5 = { id: "hcf", module: "hostedFields", amdModule: null, script: null };
        const obj6 = { unminified: null, minified: null };
        let combined2 = "".concat("braintree", "/");
        obj6[0] = combined2.concat(obj.hostedFields);
        let combined3 = "".concat("braintree", "/");
        obj6[1] = combined3.concat(obj.hostedFields, ".min");
        obj5[2] = obj6;
        const obj4 = { unminified: "".concat(obj.client, ".js"), minified: "".concat(obj.client, ".min.js") };
        ({ concat, concat: concat2 } = "");
        obj5[3] = { unminified: "".concat(obj.hostedFields, ".js"), minified: "".concat(obj.hostedFields, ".min.js") };
        obj1.hostedFields = obj5;
        arg0.constants = obj;
        arg0.loadAxo = function loadAxo(arg0) {
          let self = arg0;
          self = this;
          const f119404 = function() {
            let c0 = this;
            const f120370 = () => { ... };
            let closure_5 = { label: 0, sent() { ... }, trys: [], ops: [] };
            let obj = { next: () => { ... }, throw: () => { ... }, return: () => { ... } };
            c0 = 0;
            c0 = 1;
            c0 = 2;
            if (typeof Symbol === "function") {
              let _Symbol = Symbol;
              obj[Symbol.iterator] = /* F119398 */ function() { ... };
            }
            return obj;
          };
          return new Promise((arg0, arg1) => {
            let closure_0 = arg0;
            let closure_1 = arg1;
            function fulfilled() { ... }
            let iter = fulfilled;
            function rejected() { ... }
            function step() { ... }
            iter = iter.apply(closure_0, []);
            const iter2 = iter.next();
            const value = iter2.value;
            if (iter2.done) {
              arg0(value);
            } else {
              closure_0 = value;
              let tmp = value;
              if (!(value instanceof closure_1)) {
                tmp = new tmp(() => { ... });
              }
              tmp.then(fulfilled, rejected);
            }
          });
        };
      };
      if (typeof obj === "object") {
        if (undefined !== arg1) {
          fn(obj);
        }
      }
      let self = this;
      if (typeof globalThis !== "undefined") {
        self = globalThis;
      }
      obj = {};
      self.loadAxo = obj;
      fn(obj);
    },
    {}
  ];
  items41 = [
    function(arg0, arg1, arg2) {
      let fn = this;
      if (this) {
        fn = this.__assign;
      }
      if (!fn) {
        fn = function() {
          let tmp = Object.assign || ((arg0) => {
            for (let num = 1; num < length; num = num + 1) {
              let tmp = arguments[num];
              let tmp2 = tmp;
              let tmp3 = num;
              for (const key10012 in tmp) {
                let tmp5 = key10012;
                let _Object = Object;
                let call = hasOwnProperty.call;
                if (typeof call === "unknown") {
                  let hasOwnPropertyResult = hasOwnProperty(key10012);
                } else {
                  hasOwnPropertyResult = call(tmp, key10012);
                }
                if (!hasOwnPropertyResult) {
                  continue;
                } else {
                  arg0[key10012] = tmp[key10012];
                  continue;
                }
                continue;
              }
            }
            return arg0;
          });
          const self = this;
          const apply = tmp.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
      }
      function creditCardType(arg0) {
        let closure_0 = arg0;
        let items = [];
        if (validInputType.isValidInputType(arg0)) {
          if (0 === arg0.length) {
            return arr.map((arg0) => {
              let tmp = table[arg0];
              if (!tmp) {
                tmp = items[arg0];
              }
              return closure_5.clone(tmp);
            });
          } else {
            const item = arr.forEach((arg0) => {
              let tmp = outer1_6[arg0];
              if (!tmp) {
                tmp = items[arg0];
              }
              const result = outer1_2.addMatchingCardsToResults(closure_0, tmp, items);
            });
            const findBestMatchResult = closure_4.findBestMatch(items);
            if (findBestMatchResult) {
              const items1 = [findBestMatchResult];
              items = items1;
            }
            return items;
          }
        } else {
          return items;
        }
      }
      let closure_1 = global("./lib/card-types");
      let closure_2 = global("./lib/add-matching-cards-to-results");
      let closure_3 = global("./lib/is-valid-input-type");
      let closure_4 = global("./lib/find-best-match");
      const globalResult = global("./lib/clone");
      let closure_5 = globalResult;
      let closure_6 = {};
      const obj = { VISA: "visa", MASTERCARD: "mastercard", AMERICAN_EXPRESS: "american-express", DINERS_CLUB: "diners-club", DISCOVER: "discover", JCB: "jcb", UNIONPAY: "unionpay", MAESTRO: "maestro", ELO: "elo", MIR: "mir", HIPER: "hiper", HIPERCARD: "hipercard" };
      let items = [, , , , , , , , , , , ];
      ({ VISA: arr[0], MASTERCARD: arr[1], AMERICAN_EXPRESS: arr[2], DINERS_CLUB: arr[3], DISCOVER: arr[4], JCB: arr[5], UNIONPAY: arr[6], MAESTRO: arr[7], ELO: arr[8], MIR: arr[9], HIPER: arr[10], HIPERCARD: arr[11] } = obj);
      let closure_8 = globalResult.clone(items);
      creditCardType.getTypeInfo = (arg0) => {
        let tmp = dependencyMap2[arg0];
        if (!tmp) {
          tmp = dependencyMap[arg0];
        }
        return globalResult.clone(tmp);
      };
      creditCardType.removeCard = (arg0) => {
        const index = arr.indexOf(arg0);
        if (-1 === index) {
          const _Error = Error;
          const error = new Error("\"" + arg0 + "\" is not a supported card type.");
          throw error;
        } else {
          arr.splice(index, 1);
        }
      };
      creditCardType.addCard = (type) => {
        closure_6[type.type] = type;
        if (-1 === arr.indexOf(type.type)) {
          arr = arr.push(type.type);
        }
      };
      creditCardType.updateCard = (arg0, type) => {
        let tmp = dependencyMap2[arg0];
        if (!tmp) {
          tmp = dependencyMap[arg0];
        }
        if (tmp) {
          if (type.type) {
            if (tmp.type !== type.type) {
              const _Error2 = Error;
              const error = new Error("Cannot overwrite type parameter.");
              throw error;
            }
          }
          const tmp11 = fn(fn({}, globalResult.clone(tmp)), type);
          dependencyMap2[tmp11.type] = tmp11;
        } else {
          const _Error = Error;
          const concat = "\"".concat;
          const error1 = new Error("\"".concat(arg0, "\" is not a recognized type. Use `addCard` instead.'"));
          throw error1;
        }
      };
      creditCardType.changeOrder = (arg0, arg1) => {
        const index = arr.indexOf(arg0);
        if (-1 === index) {
          const _Error = Error;
          const error = new Error("\"" + arg0 + "\" is not a supported card type.");
          throw error;
        } else {
          arr.splice(index, 1);
          arr.splice(arg1, 0, arg0);
        }
      };
      creditCardType.resetModifications = () => {
        let closure_8 = globalResult.clone(items);
        let closure_6 = {};
      };
      creditCardType.types = obj;
      module.exports = creditCardType;
    },
    { "./lib/add-matching-cards-to-results": 43, "./lib/card-types": 44, "./lib/clone": 45, "./lib/find-best-match": 46, "./lib/is-valid-input-type": 47 }
  ];
  items42 = [
    (arg0, arg1, arg2) => {
      arg2.addMatchingCardsToResults = undefined;
      let closure_0 = arg0("./clone");
      let closure_1 = arg0("./matches");
      arg2.addMatchingCardsToResults = function addMatchingCardsToResults(closure_0, patterns, items) {
        let num = 0;
        if (0 < patterns.patterns.length) {
          while (!closure_1.matches(closure_0, patterns.patterns[num])) {
            num = num + 1;
          }
          const cloneResult = closure_0.clone(patterns);
          const _Array = Array;
          const _String = String;
          if (Array.isArray(patterns.patterns[num])) {
            let length = _String(tmp[0]).length;
          } else {
            length = _String(tmp).length;
          }
          if (closure_0.length >= length) {
            cloneResult.matchStrength = length;
          }
          items.push(cloneResult);
        }
      };
    },
    { "./clone": 45, "./matches": 48 }
  ];
  items43 = [
    (arg0, arg1, arg2) => {
      const items = [[51, 55], [2221, 2229], [223, 229], [23, 26], [270, 271], 2720];
      const items1 = [[300, 305], 36, 38, 39];
      const items2 = [6011, [644, 649], 65];
      const items3 = [2131, 1800, [3528, 3589]];
      const items4 = [620, [62100, 62182], [62184, 62187], [62185, 62197], [62200, 62205], [622010, 622999], 622018, [62207, 62209], [623, 626], 6270, 6272, 6276, [627700, 627779], [627781, 627799], [6282, 6289], 6291, 6292, 810, [8110, 8131], [8132, 8151], [8152, 8163], [8164, 8171]];
      const items5 = [493698, [500000, 504174], [504176, 506698], [506779, 508999], [56, 59], 63, 67, 6];
      const items6 = [401178, 401179, 438935, 457631, 457632, 431274, 451416, 457393, 504175, [506699, 506778], [509000, 509999], 627780, 636297, 636368, [650031, 650033], [650035, 650051], [650405, 650439], [650485, 650538], [650541, 650598], [650700, 650718], [650720, 650727], [650901, 650978], [651652, 651679], [655000, 655019], [655021, 655058]];
      const items7 = [[2200, 2204]];
      module.exports = { visa: { niceType: "Visa", type: "visa", patterns: [4], gaps: [4, 8, 12], lengths: [16, 18, 19], code: { name: "CVV", size: 3 } }, mastercard: { niceType: "Mastercard", type: "mastercard", patterns: items, gaps: [4, 8, 12], lengths: [16], code: { name: "CVC", size: 3 } }, "american-express": { niceType: "American Express", type: "american-express", patterns: [34, 37], gaps: [4, 10], lengths: [15], code: { name: "CID", size: 4 } }, "diners-club": { niceType: "Diners Club", type: "diners-club", patterns: items1, gaps: [4, 10], lengths: [14, 16, 19], code: { name: "CVV", size: 3 } }, discover: { niceType: "Discover", type: "discover", patterns: items2, gaps: [4, 8, 12], lengths: [16, 19], code: { name: "CID", size: 3 } }, jcb: { niceType: "JCB", type: "jcb", patterns: items3, gaps: [4, 8, 12], lengths: [16, 17, 18, 19], code: { name: "CVV", size: 3 } }, unionpay: { niceType: "UnionPay", type: "unionpay", patterns: items4, gaps: [4, 8, 12], lengths: [14, 15, 16, 17, 18, 19], code: { name: "CVN", size: 3 } }, maestro: { niceType: "Maestro", type: "maestro", patterns: items5, gaps: [4, 8, 12], lengths: [12, 13, 14, 15, 16, 17, 18, 19], code: { name: "CVC", size: 3 } }, elo: { niceType: "Elo", type: "elo", patterns: items6, gaps: [4, 8, 12], lengths: [16], code: { name: "CVE", size: 3 } }, mir: { niceType: "Mir", type: "mir", patterns: items7, gaps: [4, 8, 12], lengths: [16, 17, 18, 19], code: { name: "CVP2", size: 3 } }, hiper: { niceType: "Hiper", type: "hiper", patterns: [637095, 63737423, 63743358, 637568, 637599, 637609, 637612], gaps: [4, 8, 12], lengths: [16], code: { name: "CVC", size: 3 } }, hipercard: { niceType: "Hipercard", type: "hipercard", patterns: [606282], gaps: [4, 8, 12], lengths: [16], code: { name: "CVC", size: 3 } } };
    },
    {}
  ];
  items44 = [
    (arg0, arg1, arg2) => {
      arg2.clone = function clone(arg0) {
        let parsed = null;
        if (arg0) {
          const _JSON = JSON;
          const _JSON2 = JSON;
          parsed = JSON.parse(JSON.stringify(arg0));
        }
        return parsed;
      };
    },
    {}
  ];
  items45 = [
    (arg0, arg1, arg2) => {
      arg2.findBestMatch = function findBestMatch(arr) {
        const length = arr.filter((matchStrength) => matchStrength.matchStrength).length;
        let reduced = null;
        if (tmp) {
          reduced = arr.reduce((arg0, matchStrength) => {
            let tmp = arg0;
            let tmp2 = matchStrength;
            if (arg0) {
              const _Number = Number;
              const _Number2 = Number;
              if (NumberResult < Number(matchStrength.matchStrength)) {
                tmp = matchStrength;
              }
              tmp2 = tmp;
              NumberResult = Number(tmp.matchStrength);
            }
            return tmp2;
          });
        }
        return reduced;
      };
    },
    {}
  ];
  items46 = [
    (arg0, arg1, arg2) => {
      arg2.isValidInputType = function isValidInputType(str) {
        let tmp = typeof str === "string";
        if (typeof str !== "string") {
          const _String = String;
          tmp = str instanceof String;
        }
        return tmp;
      };
    },
    {}
  ];
  items47 = [
    (arg0, arg1, arg2) => {
      arg2.matches = function matches(str) {
        if (Array.isArray(arg1)) {
          const first = arg1[0];
          const _String2 = String;
          const substr = str.substr(0, String(first).length);
          const _parseInt = parseInt;
          const parsed = parseInt(substr, 10);
          const _parseInt2 = parseInt;
          const _String3 = String;
          const _parseInt3 = parseInt;
          const _String4 = String;
          const parsed1 = parseInt(String(first).substr(0, substr.length), 10);
          const str2 = String(first);
          const str3 = String(arg1[1]);
          let tmp2 = parsed >= parsed1 && parsed <= parseInt(String(arg1[1]).substr(0, substr.length), 10);
          const tmp6 = parsed >= parsed1 && parsed <= parseInt(String(arg1[1]).substr(0, substr.length), 10);
        } else {
          const _String = String;
          str = String(arg1);
          const substr1 = str.substring(0, str.length);
          tmp2 = substr1 === str.substring(0, str.length);
        }
        return tmp2;
      };
    },
    {}
  ];
  items48 = [
    (arg0, arg1, arg2) => {
      arg2.Framebus = undefined;
      let Framebus = arg0("./lib");
      let _Promise = typeof window !== "undefined";
      if (typeof window !== "undefined") {
        let _window = window;
        _Promise = window.Promise;
      }
      class Framebus {
        constructor(arg0) {
          obj = {};
          obj = arg0;
          if (undefined === arg0) {
            obj = {};
          }
          obj.origin = obj.origin || "*";
          obj.channel = obj.channel || "";
          obj.verifyDomain = obj.verifyDomain;
          obj.targetFrames = obj.targetFrames || [];
          obj.limitBroadcastToFramesArray = Boolean(obj.targetFrames);
          obj.isDestroyed = false;
          obj.listeners = [];
          limitBroadcastToFramesArray = obj.verifyDomain;
          if (!limitBroadcastToFramesArray) {
            limitBroadcastToFramesArray = obj.limitBroadcastToFramesArray;
          }
          obj.hasAdditionalChecksForOnListeners = Boolean(limitBroadcastToFramesArray);
          return;
        }
        static setPromise(arg0) {
          Framebus.Promise = arg0;
          return;
        }
        static target(arg0) {
          obj = arg0;
          obj = Object.create(Framebus.prototype);
          obj1 = {};
          if (undefined === arg0) {
            obj = {};
          }
          obj1.origin = obj.origin || "*";
          obj1.channel = obj.channel || "";
          obj1.verifyDomain = obj.verifyDomain;
          obj1.targetFrames = obj.targetFrames || [];
          obj1.limitBroadcastToFramesArray = Boolean(obj.targetFrames);
          obj1.isDestroyed = false;
          obj1.listeners = [];
          limitBroadcastToFramesArray = obj1.verifyDomain;
          if (!limitBroadcastToFramesArray) {
            limitBroadcastToFramesArray = obj1.limitBroadcastToFramesArray;
          }
          obj1.hasAdditionalChecksForOnListeners = Boolean(limitBroadcastToFramesArray);
          return obj1;
        }
        addTargetFrame(arg0) {
          if (this.limitBroadcastToFramesArray) {
            tmp2 = arg0;
            targetFrames = tmp.targetFrames;
            arr = targetFrames.push(arg0);
          }
          return;
        }
        include(arg0) {
          tmp = null != arg0;
          if (tmp) {
            tmp2 = null != arg0.Window;
            if (tmp2) {
              flag = arg0.constructor === arg0.Window;
              if (flag) {
                tmp3 = Framebus;
                childWindows = Framebus.childWindows;
                arr = childWindows.push(arg0);
                flag = true;
              }
              tmp2 = flag;
            }
            tmp = tmp2;
          }
          return tmp;
        }
        target(arg0) {
          return Framebus.target(arg0);
        }
        emit(arg0, arg1, arg2) {
          self = this;
          if (this.isDestroyed) {
            flag4 = false;
            return false;
          } else {
            tmp = arg0;
            origin = self.origin;
            namespaceEventResult = self.namespaceEvent(arg0);
            obj = origin;
            if (origin.isntString(namespaceEventResult)) {
              flag3 = false;
              return false;
            } else if (obj.isntString(origin)) {
              flag2 = false;
              return false;
            } else {
              tmp3 = arg1;
              tmp4 = arg2;
              tmp5 = arg1;
              if (typeof arg1 === "function") {
                tmp4 = arg1;
              }
              tmp6 = namespaceEventResult;
              tmp7 = origin;
              tmp8 = tmp5;
              tmp9 = tmp4;
              packagePayloadResult = obj.packagePayload(namespaceEventResult, origin, tmp5, tmp4);
              c1 = packagePayloadResult;
              flag = packagePayloadResult;
              if (flag) {
                if (self.limitBroadcastToFramesArray) {
                  result = self.targetFramesAsWindows();
                  item = result.forEach(() => { ... });
                  flag = true;
                } else {
                  obj = { origin: null, frame: null };
                  obj[0] = origin;
                  tmp11 = globalThis;
                  _window = window;
                  _self = window.top;
                  if (!_self) {
                    _window2 = window;
                    _self = window.self;
                  }
                  obj[1] = _self;
                  broadcastResult = obj.broadcast(packagePayloadResult, obj);
                  flag = true;
                }
              }
              return flag;
            }
          }
        }
        emitAsPromise(arg0, arg1) {
          closure_0 = arg0;
          closure_1 = arg1;
          self = this;
          promise = new closure_0.Promise(() => { ... });
          return promise;
        }
        on(arg0, arg1) {
          self = this;
          closure_0 = arg1;
          if (this.isDestroyed) {
            flag2 = false;
            return false;
          } else {
            tmp = arg0;
            origin = self.origin;
            namespaceEventResult = self.namespaceEvent(arg0);
            tmp3 = closure_0;
            result = closure_0.subscriptionArgsInvalid(namespaceEventResult, arg1, origin);
            flag = !result;
            if (!result) {
              fn = arg1;
              if (self.hasAdditionalChecksForOnListeners) {
                fn = function d() { ... };
              }
              listeners = self.listeners;
              obj = { eventName: null, handler: null, originalHandler: null };
              obj[0] = namespaceEventResult;
              obj[1] = fn;
              obj[2] = arg1;
              arr = listeners.push(obj);
              obj = tmp3.subscribers[origin];
              if (!obj) {
                obj = {};
              }
              tmp3.subscribers[origin] = obj;
              items = tmp3.subscribers[origin][namespaceEventResult];
              if (!items) {
                items = [];
              }
              tmp3.subscribers[origin][namespaceEventResult] = items;
              arr3 = tmp3.subscribers[origin][namespaceEventResult];
              arr1 = arr3.push(fn);
              flag = true;
            }
            return flag;
          }
        }
        off(arg0, arg1) {
          self = this;
          if (this.isDestroyed) {
            flag5 = false;
            return false;
          } else {
            tmp = arg1;
            tmp2 = arg1;
            if (self.verifyDomain) {
              num = 0;
              num2 = 1;
              tmp3 = arg1;
              tmp2 = arg1;
              if (0 < self.listeners.length) {
                do {
                  tmp4 = self.listeners[num];
                  tmp5 = num;
                  handler = tmp3;
                  if (tmp4.originalHandler === arg1) {
                    handler = tmp4.handler;
                  }
                  num = num + 1;
                  tmp3 = handler;
                  tmp2 = handler;
                } while (num < self.listeners.length);
              }
            }
            tmp6 = arg0;
            namespaceEventResult = self.namespaceEvent(arg0);
            origin = self.origin;
            tmp8 = Framebus;
            if (Framebus.subscriptionArgsInvalid(namespaceEventResult, tmp2, origin)) {
              flag4 = false;
              return false;
            } else {
              arr = tmp8.subscribers[origin] && tmp8.subscribers[origin][namespaceEventResult];
              if (arr) {
                num3 = 0;
                num4 = 1;
                if (0 < arr.length) {
                  tmp9 = num3;
                  while (arr[num3] !== tmp2) {
                    num3 = num3 + 1;
                  }
                  spliceResult = arr.splice(num3, 1);
                  flag3 = true;
                  return true;
                }
                flag2 = false;
                return false;
              } else {
                flag = false;
                return false;
              }
            }
          }
        }
        teardown() {
          self = this;
          if (!this.isDestroyed) {
            flag = true;
            self.isDestroyed = true;
            num = 0;
            num2 = 1;
            num3 = 0;
            if (0 < self.listeners.length) {
              do {
                tmp = self.listeners[num3];
                offResult = self.off(tmp.eventName, tmp.handler);
                num3 = num3 + 1;
                length = self.listeners.length;
              } while (num3 < length);
            }
            self.listeners.length = 0;
          }
          return;
        }
        passesVerifyDomainCheck(arg0) {
          self = this;
          verifyDomain = this.verifyDomain;
          checkOriginResult = !verifyDomain;
          if (verifyDomain) {
            tmp2 = arg0;
            checkOriginResult = self.checkOrigin(arg0);
          }
          return checkOriginResult;
        }
        targetFramesAsWindows() {
          if (this.limitBroadcastToFramesArray) {
            targetFrames = this.targetFrames;
            mapped = targetFrames.map(() => { ... });
            found = mapped.filter(/* F119411 */ function() { ... });
          } else {
            found = [];
          }
          return found;
        }
        hasMatchingTargetFrame(arg0) {
          self = this;
          closure_0 = arg0;
          if (this.limitBroadcastToFramesArray) {
            result = self.targetFramesAsWindows();
            tmp = globalThis;
            _Boolean = Boolean;
            return Boolean(result.find(/* F119412 */ function() { ... }));
          } else {
            flag = true;
            return true;
          }
        }
        checkOrigin(arg0) {
          url = document.createElement("a");
          url.href = location.href;
          if ("https:" === url.protocol) {
            str4 = url.host;
            str5 = "";
            host = str4.replace(/:443$/, "");
          } else {
            str = "http:";
            if ("http:" === url.protocol) {
              str2 = url.host;
              str3 = "";
              host = str2.replace(/:80$/, "");
            } else {
              host = url.host;
            }
          }
          tmp = `${url.protocol}//${host}` === arg0;
          if (!tmp) {
            self = this;
            verifyDomain = this.verifyDomain;
            verifyDomainResult = !verifyDomain;
            if (verifyDomain) {
              verifyDomainResult = self.verifyDomain(arg0);
            }
            tmp = verifyDomainResult;
          }
          return tmp;
        }
        namespaceEvent(arg0) {
          combined1 = arg0;
          if (this.channel) {
            str = "";
            concat = "".concat;
            str2 = ":";
            combined = "".concat(tmp.channel, ":");
            combined1 = combined.concat(arg0);
          }
          return combined1;
        }
      }
      Framebus.Promise = _Promise;
      arg2.Framebus = Framebus;
    },
    { "./lib": 57 }
  ];
  items49 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("./lib");
      globalResult.attach();
      module.exports = global("./framebus").Framebus;
    },
    { "./framebus": 49, "./lib": 57 }
  ];
  items50 = [
    (arg0, arg1, arg2) => {
      arg2.attach = undefined;
      arg2.detach = undefined;
      let closure_0 = arg0("./");
      let c1 = false;
      arg2.attach = function attach() {
        let tmp = c1;
        if (!c1) {
          const _window = window;
          tmp = typeof window === "undefined";
        }
        if (!tmp) {
          c1 = true;
          const _window2 = window;
          const listener = window.addEventListener("message", closure_0.onMessage, false);
        }
      };
      arg2.detach = function detach() {
        let c1 = false;
        const removed = window.removeEventListener("message", closure_0.onMessage, false);
      };
    },
    { "./": 57 }
  ];
  items51 = [
    (arg0, arg1, arg2) => {
      arg2.broadcastToChildWindows = undefined;
      let closure_0 = arg0("./");
      arg2.broadcastToChildWindows = function broadcastToChildWindows(data, origin, source) {
        let diff = closure_0.childWindows.length - 1;
        if (0 <= diff) {
          do {
            let obj = closure_0;
            let tmp2 = closure_0.childWindows[diff];
            let tmp3 = diff;
            if (tmp2.closed) {
              let childWindows = obj.childWindows;
              let spliceResult = childWindows.splice(diff, 1);
            } else if (source !== tmp2) {
              obj = { origin: null, frame: null };
              obj[0] = origin;
              obj[1] = tmp2.top;
              let broadcastResult = obj.broadcast(data, obj);
            }
            diff = diff - 1;
          } while (0 <= diff);
        }
      };
    },
    { "./": 57 }
  ];
  items52 = [
    (arg0, arg1, arg2) => {
      arg2.broadcast = undefined;
      let closure_0 = arg0("./");
      function broadcast(packagePayloadResult, arg1) {
        let frame;
        let origin;
        let num = 0;
        ({ origin, frame } = arg1);
        try {
          frame.postMessage(packagePayloadResult, origin);
          let hasOpenerResult = closure_0.hasOpener(frame);
          if (hasOpenerResult) {
            const _window = window;
            hasOpenerResult = frame.opener.top !== window.top;
          }
          if (hasOpenerResult) {
            let obj = { origin: null, frame: null };
            obj[0] = origin;
            obj[1] = frame.opener.top;
            broadcast(packagePayloadResult, obj);
          }
          let tmp10 = tmp9;
          if (frame.frames[num]) {
            do {
              let tmp11 = broadcast;
              obj = { origin: null, frame: null };
              obj[0] = origin;
              let tmp12 = tmp10;
              obj[1] = tmp10;
              let tmp13 = broadcast(packagePayloadResult, obj);
              let tmp14 = num;
              let sum = num + 1;
              num = sum;
              tmp10 = frame.frames[sum];
            } while (tmp16);
          }
        } catch (err) {
        }
      }
      arg2.broadcast = broadcast;
    },
    { "./": 57 }
  ];
  items53 = [
    (arg0, arg1, arg2) => {
      arg2.prefix = undefined;
      arg2.childWindows = undefined;
      arg2.subscribers = undefined;
      arg2.prefix = "/*framebus*/";
      arg2.childWindows = [];
      arg2.subscribers = {};
    },
    {}
  ];
  items54 = [
    (arg0, arg1, arg2) => {
      arg2.dispatch = undefined;
      let closure_0 = arg0("./");
      arg2.dispatch = function dispatch(arg0, arg1, arg2, arg3, arg4) {
        let length;
        if (closure_0.subscribers[arg0]) {
          if (tmp.subscribers[arg0][arg1]) {
            const items = [];
            if (arg2) {
              items.push(arg2);
            }
            if (arg3) {
              items.push(arg3);
            }
            let num = 0;
            if (0 < tmp.subscribers[arg0][arg1].length) {
              do {
                let tmp7 = closure_0;
                let obj = closure_0.subscribers[arg0][arg1][num];
                let applyResult = obj.apply(arg4, items);
                num = num + 1;
                length = closure_0.subscribers[arg0][arg1].length;
              } while (num < length);
            }
          }
        }
      };
    },
    { "./": 57 }
  ];
  items55 = [
    (arg0, arg1, arg2) => {
      arg2.hasOpener = function hasOpener(frame) {
        let tmp = frame.top === frame;
        if (tmp) {
          let tmp3 = null != frame.opener;
          if (tmp3) {
            let tmp4 = frame.opener !== frame;
            if (tmp4) {
              tmp4 = true !== frame.opener.closed;
            }
            tmp3 = tmp4;
          }
          tmp = tmp3;
        }
        return tmp;
      };
    },
    {}
  ];
  items56 = [
    function(arg0, arg1, arg2) {
      const self = this;
      let self2 = this;
      if (this) {
        self2 = self.__createBinding;
      }
      if (self2) {
        let fn = self;
        if (self) {
          fn = self.__exportStar;
        }
        if (!fn) {
          fn = (obj, arg1) => {
            for (const key10007 in arg0) {
              let tmp5 = key10007;
              let tmp6 = "default" === key10007;
              if (tmp6) {
                if (tmp6) {
                  continue;
                } else {
                  let tmp3 = self2;
                  let tmp4 = self2(arg1, arg0, key10007);
                  continue;
                }
                continue;
              } else {
                let _Object = Object;
                let call = hasOwnProperty.call;
                if (typeof call === "unknown") {
                  let hasOwnPropertyResult = hasOwnProperty(key10007);
                } else {
                  hasOwnPropertyResult = call(arg1, key10007);
                }
                let tmp2 = hasOwnPropertyResult;
              }
            }
          };
        }
        const _Object2 = Object;
        fn(arg0("./attach"), arg2);
        fn(arg0("./broadcast-to-child-windows"), arg2);
        fn(arg0("./broadcast"), arg2);
        fn(arg0("./constants"), arg2);
        fn(arg0("./dispatch"), arg2);
        fn(arg0("./has-opener"), arg2);
        fn(arg0("./is-not-string"), arg2);
        fn(arg0("./message"), arg2);
        fn(arg0("./package-payload"), arg2);
        fn(arg0("./send-message"), arg2);
        fn(arg0("./subscribe-replier"), arg2);
        fn(arg0("./subscription-args-invalid"), arg2);
        fn(arg0("./types"), arg2);
        fn(arg0("./unpack-payload"), arg2);
      } else {
        let _Object = Object;
      }
    },
    { "./attach": 51, "./broadcast": 53, "./broadcast-to-child-windows": 52, "./constants": 54, "./dispatch": 55, "./has-opener": 56, "./is-not-string": 58, "./message": 59, "./package-payload": 60, "./send-message": 61, "./subscribe-replier": 62, "./subscription-args-invalid": 63, "./types": 64, "./unpack-payload": 65 }
  ];
  items57 = [
    (arg0, arg1, arg2) => {
      arg2.isntString = function isntString(data) {
        return typeof data !== "string";
      };
    },
    {}
  ];
  items58 = [
    (arg0, arg1, arg2) => {
      arg2.onMessage = undefined;
      let closure_0 = arg0("./");
      arg2.onMessage = function onMessage(data) {
        let eventData;
        let reply;
        if (!closure_0.isntString(data.data)) {
          const unpackPayloadResult = obj.unpackPayload(data);
          if (unpackPayloadResult) {
            ({ eventData, reply } = unpackPayloadResult);
            obj.dispatch("*", unpackPayloadResult.event, eventData, reply, data);
            obj.dispatch(data.origin, unpackPayloadResult.event, eventData, reply, data);
            const result = obj.broadcastToChildWindows(data.data, unpackPayloadResult.origin, data.source);
          }
        }
      };
    },
    { "./": 57 }
  ];
  items59 = [
    (arg0, arg1, arg2) => {
      arg2.packagePayload = undefined;
      let closure_0 = arg0("./");
      arg2.packagePayload = function packagePayload(namespaceEventResult, closure_0, eventData, fn) {
        const obj = { event: namespaceEventResult, origin: closure_0 };
        if (typeof fn === "function") {
          obj.reply = closure_0.subscribeReplier(fn, closure_0);
        }
        obj.eventData = eventData;
        try {
          const _JSON = JSON;
          return closure_0.prefix + JSON.stringify(obj);
        } catch (tmp3) {
          const _Error = Error;
          const concat = "Could not stringify event: ".concat;
          const error = new Error("Could not stringify event: ".concat(tmp3.message));
          throw error;
        }
      };
    },
    { "./": 57 }
  ];
  items60 = [
    (arg0, arg1, arg2) => {
      arg2.sendMessage = function sendMessage(postMessage) {
        try {
          postMessage.postMessage(arg1, arg2);
        } catch (err) {
        }
      };
    },
    {}
  ];
  items61 = [
    function(arg0, arg1, arg2) {
      let fn = this;
      if (this) {
        fn = this.__importDefault;
      }
      if (!fn) {
        fn = (__esModule) => {
          if (!__esModule) {
            const obj = { default: null };
            obj[0] = __esModule;
            let tmp = obj;
          } else {
            tmp = __esModule;
          }
          return tmp;
        };
      }
      arg2.subscribeReplier = undefined;
      let closure_0 = arg0("../framebus");
      let closure_1 = fn(arg0("@braintree/uuid"));
      arg2.subscribeReplier = function subscribeReplier(fn, origin) {
        let Framebus = fn;
        let closure_1 = origin;
        const defaultResult = closure_1.default();
        let closure_2 = defaultResult;
        Framebus = Framebus.Framebus;
        function replier(arg0, arg1) {
          lib(arg0, arg1);
          const Framebus = lib.Framebus;
          Framebus.target({ origin: closure_1 }).off(closure_2, replier);
        }
        Framebus.target({ origin }).on(defaultResult, replier);
        return defaultResult;
      };
    },
    { "../framebus": 49, "@braintree/uuid": 66 }
  ];
  items62 = [
    (arg0, arg1, arg2) => {
      arg2.subscriptionArgsInvalid = undefined;
      let closure_0 = arg0("./");
      arg2.subscriptionArgsInvalid = function subscriptionArgsInvalid(namespaceEventResult, fn, origin) {
        let isntStringResult = closure_0.isntString(namespaceEventResult);
        if (!isntStringResult) {
          isntStringResult = typeof fn !== "function";
          if (typeof fn === "function") {
            isntStringResult = closure_0.isntString(origin);
          }
        }
        return isntStringResult;
      };
    },
    { "./": 57 }
  ];
  items63 = [
    (arg0, arg1, arg2) => {

    },
    {}
  ];
  items64 = [
    (arg0, arg1, arg2) => {
      arg2.unpackPayload = undefined;
      let closure_0 = arg0("./");
      arg2.unpackPayload = function unpackPayload(data) {
        let closure_0;
        let closure_1;
        data = data.data;
        if (data.slice(0, closure_0.prefix.length) !== closure_0.prefix) {
          return false;
        } else {
          try {
            const _JSON = JSON;
            const data1 = data.data;
            const parsed = JSON.parse(data1.slice(closure_0.prefix.length));
            if (parsed.reply) {
              ({ origin: closure_0, source: closure_1 } = data);
              const reply = parsed.reply;
              parsed.reply = function reply(eventData) {
                if (closure_1) {
                  const packagePayloadResult = outer1_0.packagePayload(reply, closure_0, eventData);
                  if (packagePayloadResult) {
                    closure_1.postMessage(packagePayloadResult, tmp4);
                  }
                  tmp4 = closure_0;
                }
              };
            }
            return parsed;
          } catch (err) {
            return false;
          }
        }
      };
    },
    { "./": 57 }
  ];
  items65 = [
    (arg0, arg1, arg2) => {
      module.exports = function uuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (arg0) => {
          const tmp = 16 * Math.random() | 0;
          let str = tmp;
          if ("x" !== arg0) {
            str = 3 & tmp | 8;
          }
          return str.toString(16);
        });
      };
    },
    {}
  ];
  items66 = [
    (arg0, arg1, arg2) => {
      arg2.isKitKatWebview = undefined;
      arg2.isAndroidChrome = undefined;
      arg2.isSamsungBrowser = undefined;
      arg2.isIE9 = undefined;
      arg2.isIos = undefined;
      let userAgent = typeof window !== "undefined";
      if (typeof window !== "undefined") {
        const _window2 = window;
        userAgent = window.navigator;
      }
      if (userAgent) {
        const _window = window;
        userAgent = window.navigator.userAgent;
      }
      let closure_1 = arg0("@braintree/browser-detection/is-android");
      let closure_2 = arg0("@braintree/browser-detection/is-chrome-os");
      let closure_3 = arg0("@braintree/browser-detection/is-chrome");
      arg2.isIos = arg0("@braintree/browser-detection/is-ios");
      arg2.isIE9 = arg0("@braintree/browser-detection/is-ie9");
      const re4 = /Version\/\d\.\d* Chrome\/\d*\.0\.0\.0/;
      arg2.isKitKatWebview = function isKitKatWebview(arg0) {
        let tmp = arg0;
        if (undefined === arg0) {
          tmp = userAgent;
        }
        let isMatch = callback(tmp);
        if (isMatch) {
          isMatch = regex.test(tmp);
        }
        return isMatch;
      };
      arg2.isAndroidChrome = function isAndroidChrome(arg0) {
        let tmp = arg0;
        if (undefined === arg0) {
          tmp = userAgent;
        }
        let tmp2 = callback(tmp);
        if (!tmp2) {
          tmp2 = callback2(tmp);
        }
        if (tmp2) {
          tmp2 = callback3(tmp);
        }
        return tmp2;
      };
      arg2.isSamsungBrowser = function isSamsungBrowser(arg0) {
        let arr = arg0;
        if (undefined === arg0) {
          arr = userAgent;
        }
        let isMatch = /SamsungBrowser/.test(arr);
        if (!isMatch) {
          const tmp3 = callback3(arr);
          let tmp4 = !tmp3;
          if (!tmp3) {
            tmp4 = arr.indexOf("Samsung") > -1;
          }
          isMatch = tmp4;
        }
        return isMatch;
      };
    },
    { "@braintree/browser-detection/is-android": 80, "@braintree/browser-detection/is-chrome": 82, "@braintree/browser-detection/is-chrome-os": 81, "@braintree/browser-detection/is-ie9": 83, "@braintree/browser-detection/is-ios": 84 }
  ];
  items67 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./lib/device");
      module.exports = function supportsInputFormatting() {
        return !samsungBrowser.isSamsungBrowser();
      };
    },
    { "./lib/device": 67 }
  ];
  items68 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][3][0];
      first(...arguments);
    },
    { dup: 3 }
  ];
  items69 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][4][0];
      first(...arguments);
    },
    { dup: 4 }
  ];
  items70 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][5][0];
      first(...arguments);
    },
    { "./is-duckduckgo": 72, "./is-edge": 73, "./is-opera": 77, "./is-samsung": 78, "./is-silk": 79, dup: 5 }
  ];
  items71 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][6][0];
      first(...arguments);
    },
    { dup: 6 }
  ];
  items72 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][7][0];
      first(...arguments);
    },
    { dup: 7 }
  ];
  items73 = [
    (arg0, arg1, arg2) => {
      module.exports = function isIe9(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        return -1 !== userAgent.indexOf("MSIE 9");
      };
    },
    {}
  ];
  items74 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][14][0];
      first(...arguments);
    },
    { "./is-ipados": 76, dup: 14 }
  ];
  items75 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][15][0];
      first(...arguments);
    },
    { dup: 15 }
  ];
  items76 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][16][0];
      first(...arguments);
    },
    { dup: 16 }
  ];
  items77 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][17][0];
      first(...arguments);
    },
    { dup: 17 }
  ];
  items78 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][18][0];
      first(...arguments);
    },
    { dup: 18 }
  ];
  items79 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][20][0];
      first(...arguments);
    },
    { "./dist/is-android": 69, dup: 20 }
  ];
  items80 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][21][0];
      first(...arguments);
    },
    { "./dist/is-chrome-os": 70, dup: 21 }
  ];
  items81 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][22][0];
      first(...arguments);
    },
    { "./dist/is-chrome": 71, dup: 22 }
  ];
  items82 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-ie9");
    },
    { "./dist/is-ie9": 74 }
  ];
  items83 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][27][0];
      first(...arguments);
    },
    { "./dist/is-ios": 75, dup: 27 }
  ];
  items84 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/supports-input-formatting");
    },
    { "./dist/supports-input-formatting": 68 }
  ];
  items85 = [
    (arg0, arg1, arg2) => {
      class AmericanExpress {
        constructor(arg0) {
          this._client = global.client;
          return;
        }
        getRewardsBalance(arg0) {
          nonce = global.nonce;
          if (nonce) {
            self = this;
            tmp12 = assign;
            obj = { _meta: null, paymentMethodNonce: null };
            obj[0] = { source: "american-express" };
            obj[1] = nonce;
            str = "nonce";
            tmp13 = assign(obj, global);
            delete tmp2[tmp];
            _client = this._client;
            obj1 = { method: "get", endpoint: "payment_methods/amex_rewards_balance", data: null };
            obj1[2] = tmp13;
            requestResult = _client.request(obj1);
            catchPromise = requestResult.catch(() => { ... });
          } else {
            tmp3 = globalThis;
            _Promise = Promise;
            tmp4 = c0;
            obj = { type: null, code: null, message: "getRewardsBalance must be called with a nonce." };
            tmp5 = c1;
            obj[0] = c1.AMEX_NONCE_REQUIRED.type;
            obj[1] = c1.AMEX_NONCE_REQUIRED.code;
            tmp6 = new.target;
            tmp7 = new.target;
            tmp8 = obj;
            tmp9 = new c0(obj);
            tmp10 = tmp9;
            catchPromise = Promise.reject(tmp9);
          }
          return catchPromise;
        }
        getExpressCheckoutProfile(arg0) {
          if (global.nonce) {
            self = this;
            _client = this._client;
            obj = { method: "get", endpoint: null, data: null };
            str = "payment_methods/amex_express_checkout_cards/";
            obj[1] = `payment_methods/amex_express_checkout_cards/${global.nonce}`;
            obj1 = { _meta: null, paymentMethodNonce: null };
            obj1[0] = { source: "american-express" };
            obj1[1] = global.nonce;
            obj[2] = obj1;
            requestResult = _client.request(obj);
            catchPromise = requestResult.catch(() => { ... });
          } else {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = c0;
            obj = { type: null, code: null, message: "getExpressCheckoutProfile must be called with a nonce." };
            tmp3 = c1;
            obj[0] = c1.AMEX_NONCE_REQUIRED.type;
            obj[1] = c1.AMEX_NONCE_REQUIRED.code;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = obj;
            tmp7 = new c0(obj);
            tmp8 = tmp7;
            catchPromise = Promise.reject(tmp7);
          }
          return catchPromise;
        }
        teardown() {
          tmp = c4(this, c3(AmericanExpress.prototype));
          return Promise.resolve();
        }
      }
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("./errors");
      const assign = global("../lib/assign").assign;
      let closure_3 = global("../lib/methods");
      let closure_4 = global("../lib/convert-methods-to-error");
      module.exports = global("@braintree/wrap-promise").wrapPrototype(AmericanExpress);
    },
    { "../lib/assign": 140, "../lib/braintree-error": 143, "../lib/convert-methods-to-error": 146, "../lib/methods": 175, "./errors": 87, "@braintree/wrap-promise": 40 }
  ];
  items86 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT, code: "AMEX_NONCE_REQUIRED" };
      obj = { type: globalResult.types.NETWORK, code: "AMEX_NETWORK_ERROR" };
      module.exports = { AMEX_NONCE_REQUIRED: obj, AMEX_NETWORK_ERROR: obj };
    },
    { "../lib/braintree-error": 143 }
  ];
  items87 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./american-express");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          const obj = { name: "American Express", client: client.client, authorization: client.authorization };
          const verifyResult = closure_1.verify({ name: "American Express", client: client.client, authorization: client.authorization });
          return closure_1.verify({ name: "American Express", client: client.client, authorization: client.authorization }).then(() => outer1_2.create({ authorization: client.authorization, client: client.client, debug: client.debug, assetsUrl: outer1_3.create(client.authorization), name: "American Express" })).then((client) => {
            closure_0.client = client;
            return new closure_0(closure_0);
          });
        }),
        VERSION: "3.112.1"
      };
    },
    { "../lib/basic-component-verification": 141, "../lib/create-assets-url": 148, "../lib/create-deferred-client": 150, "./american-express": 86, "@braintree/wrap-promise": 40 }
  ];
  items88 = [
    (arg0, arg1, arg2) => {
      class ApplePay {
        constructor(arg0) {
          obj = { _instantiatedWithClient: Boolean(!global.useDeferredClient), _client: global.client, _createPromise: global.createPromise };
          if (obj._client) {
            result = obj._setMerchantIdentifier();
          }
          return;
        }
        _waitForClient() {
          self = this;
          if (this._client) {
            tmp2 = globalThis;
            _Promise = Promise;
            resolved = Promise.resolve();
          } else {
            _createPromise = self._createPromise;
            fn = () => { ... };
            resolved = _createPromise.then(fn.bind(self));
          }
          return resolved;
        }
        _setMerchantIdentifier() {
          _client = this._client;
          applePayWeb = _client.getConfiguration().gatewayConfiguration.applePayWeb;
          if (applePayWeb) {
            tmp = globalThis;
            _Object = Object;
            obj = { value: null, configurable: false, writable: false };
            obj[0] = applePayWeb.merchantIdentifier;
            str = "merchantIdentifier";
            definePropertyResult = Object.defineProperty(this, "merchantIdentifier", obj);
          }
          return;
        }
        createPaymentRequest(arg0) {
          self = this;
          closure_0 = global;
          if (this._instantiatedWithClient) {
            result = self._createPaymentRequestSynchronously(global);
          } else {
            _waitForClientResult = self._waitForClient();
            fn = () => { ... };
            result = _waitForClientResult.then(fn.bind(self));
          }
          return result;
        }
        _createPaymentRequestSynchronously(arg0) {
          _client = this._client;
          applePayWeb = _client.getConfiguration().gatewayConfiguration.applePayWeb;
          obj = { countryCode: applePayWeb.countryCode, currencyCode: applePayWeb.currencyCode, merchantCapabilities: tmp, supportedNetworks: supportedNetworks.map(/* F115729 */ function() { ... }) };
          tmp = applePayWeb.merchantCapabilities || ["supports3DS"];
          supportedNetworks = applePayWeb.supportedNetworks;
          return Object.assign({}, obj, global);
        }
        performValidation(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          if (global) {
            if (global.validationURL) {
              _waitForClientResult = self._waitForClient();
              nextPromise = _waitForClientResult.then(() => { ... });
              nextPromise1 = nextPromise.then(() => { ... });
              catchPromise = nextPromise1.catch(() => { ... });
            }
            return catchPromise;
          }
          tmp = new closure_0(c2.APPLE_PAY_VALIDATION_URL_REQUIRED);
          catchPromise = Promise.reject(tmp);
          return;
        }
        tokenize(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          if (global.token) {
            _waitForClientResult = self._waitForClient();
            nextPromise = _waitForClientResult.then(() => { ... });
            nextPromise1 = nextPromise.then(() => { ... });
            catchPromise = nextPromise1.catch(() => { ... });
          } else {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = closure_0;
            tmp3 = c2;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = new closure_0(c2.APPLE_PAY_PAYMENT_TOKEN_REQUIRED);
            tmp7 = tmp6;
            catchPromise = Promise.reject(tmp6);
          }
          return catchPromise;
        }
        teardown() {
          tmp = c4(this, c3(ApplePay.prototype));
          return Promise.resolve();
        }
      }
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("../lib/analytics");
      let closure_2 = global("./errors");
      let closure_3 = global("../lib/methods");
      let closure_4 = global("../lib/convert-methods-to-error");
      module.exports = global("@braintree/wrap-promise").wrapPrototype(ApplePay);
    },
    { "../lib/analytics": 138, "../lib/braintree-error": 143, "../lib/convert-methods-to-error": 146, "../lib/methods": 175, "./errors": 90, "@braintree/wrap-promise": 40 }
  ];
  items89 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT, code: "APPLE_PAY_NOT_ENABLED", message: "Apple Pay is not enabled for this merchant." };
      obj = { type: globalResult.types.MERCHANT, code: "APPLE_PAY_VALIDATION_URL_REQUIRED", message: "performValidation must be called with a validationURL." };
      obj = { type: globalResult.types.NETWORK, code: "APPLE_PAY_MERCHANT_VALIDATION_NETWORK", message: "A network error occurred when validating the Apple Pay merchant." };
      module.exports = { APPLE_PAY_NOT_ENABLED: obj, APPLE_PAY_VALIDATION_URL_REQUIRED: obj, APPLE_PAY_MERCHANT_VALIDATION_NETWORK: obj, APPLE_PAY_MERCHANT_VALIDATION_FAILED: { type: globalResult.types.MERCHANT, code: "APPLE_PAY_MERCHANT_VALIDATION_FAILED", message: "Make sure you have registered your domain name in the Braintree Control Panel." }, APPLE_PAY_PAYMENT_TOKEN_REQUIRED: { type: globalResult.types.MERCHANT, code: "APPLE_PAY_PAYMENT_TOKEN_REQUIRED", message: "tokenize must be called with a payment token." }, APPLE_PAY_TOKENIZATION: { type: globalResult.types.NETWORK, code: "APPLE_PAY_TOKENIZATION", message: "A network error occurred when processing the Apple Pay payment." } };
    },
    { "../lib/braintree-error": 143 }
  ];
  items90 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./apple-pay");
      let closure_1 = global("../lib/analytics");
      let closure_2 = global("../lib/braintree-error");
      let closure_3 = global("../lib/basic-component-verification");
      let closure_4 = global("../lib/create-assets-url");
      let closure_5 = global("../lib/create-deferred-client");
      let closure_6 = global("./errors");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          return closure_3.verify({ name: "Apple Pay", client: client.client, authorization: client.authorization }).then(() => {
            let obj = { authorization: client.authorization, client: client.client, debug: client.debug, assetsUrl: outer1_4.create(client.authorization), name: "Apple Pay" };
            obj = outer1_5.create(obj);
            const nextPromise = obj.then((getConfiguration) => {
              if (getConfiguration.getConfiguration().gatewayConfiguration.applePayWeb) {
                closure_1.sendEvent(getConfiguration, "applepay.initialized");
                let rejectResult = getConfiguration;
              } else {
                const tmp6 = new closure_2(constants.APPLE_PAY_NOT_ENABLED);
                rejectResult = Promise.reject(tmp6);
              }
              return rejectResult;
            });
            client.createPromise = nextPromise;
            const tmp = new client(client);
            let nextPromise1 = tmp;
            client = tmp;
            if (!client.useDeferredClient) {
              nextPromise1 = nextPromise.then((_client) => {
                closure_0._client = _client;
                return closure_0;
              });
            }
            return nextPromise1;
          });
        }),
        VERSION: "3.112.1"
      };
    },
    { "../lib/analytics": 138, "../lib/basic-component-verification": 141, "../lib/braintree-error": 143, "../lib/create-assets-url": 148, "../lib/create-deferred-client": 150, "./apple-pay": 89, "./errors": 90, "@braintree/wrap-promise": 40 }
  ];
  items91 = [
    (arg0, arg1, arg2) => {
      class Client {
        constructor(arg0) {
          obj = {};
          obj = global;
          if (!global) {
            obj = {};
          }
          stringify = JSON.stringify(obj);
          gatewayConfiguration = obj.gatewayConfiguration;
          if (gatewayConfiguration) {
            items = ["assetsUrl", "clientApiUrl", "configUrl"];
            item = items.forEach((arg0) => {
              if (arg0 in gatewayConfiguration) {
                if (!outer1_3(tmp[arg0])) {
                  const obj = { type: null, code: null, message: null };
                  obj[0] = outer1_13.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type;
                  obj[1] = outer1_13.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code;
                  obj[2] = `${arg0} property is on an invalid domain.`;
                  const tmp8 = new outer1_4(obj);
                  throw tmp8;
                }
              }
            });
            obj.getConfiguration = () => JSON.parse(closure_0);
            tmp8 = c2;
            obj._request = c2;
            obj._configuration = obj.getConfiguration();
            str = "/v1/";
            obj._clientApiBaseUrl = `${gatewayConfiguration.clientApiUrl}/v1/`;
            if (gatewayConfiguration.graphQL) {
              tmp9 = c3;
              if (c3(gatewayConfiguration.graphQL.url)) {
                tmp17 = gatewayConfiguration;
                obj1 = { graphQL: null };
                obj1[0] = gatewayConfiguration.graphQL;
                tmp18 = new.target;
                tmp19 = new.target;
                tmp20 = obj1;
                tmp21 = new gatewayConfiguration(obj1);
                tmp22 = tmp21;
                obj._graphQL = tmp21;
              } else {
                tmp10 = c4;
                obj2 = { type: null, code: null, message: "graphQL.url property is on an invalid domain." };
                tmp11 = c13;
                obj2[0] = c13.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type;
                obj2[1] = c13.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code;
                tmp12 = new.target;
                tmp13 = new.target;
                tmp14 = obj2;
                tmp15 = new c4(obj2);
                tmp16 = tmp15;
                throw tmp15;
              }
            }
            return;
          } else {
            tmp = c4;
            tmp2 = c13;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp5 = new c4(c13.CLIENT_MISSING_GATEWAY_CONFIGURATION);
            tmp6 = tmp5;
            throw tmp5;
          }
        }
        static initialize(arg0) {
          closure_0 = global;
          tmp = FRAUDNET_URL[global.authorization];
          if (tmp) {
            tmp16 = c12;
            str2 = "custom.client.load.cached";
            sendEventResult = c12.sendEvent(tmp, "custom.client.load.cached");
            return tmp;
          } else {
            try {
              tmp2 = c7;
              tmp3 = c7(global.authorization);
              tmp4 = getConfiguration;
              tmp5 = tmp3;
              promise = getConfiguration(tmp3, global.sessionId);
              nextPromise = promise.then((arg0) => {
                if (authorization.debug) {
                  arg0.isDebug = true;
                }
                arg0.authorization = authorization.authorization;
                const obj = Object.create(outer1_23.prototype);
                new outer1_23(arg0);
                return obj;
              });
              tmp6 = FRAUDNET_URL;
              FRAUDNET_URL[global.authorization] = nextPromise;
              tmp7 = c12;
              str = "custom.client.load.initialized";
              sendEventResult1 = c12.sendEvent(nextPromise, "custom.client.load.initialized");
              nextPromise1 = nextPromise.then((arg0) => {
                outer1_12.sendEvent(closure_1, "custom.client.load.succeeded");
                return arg0;
              });
              return nextPromise1.catch((arg0) => {
                delete tmp2[tmp];
                return Promise.reject(arg0);
              });
            } catch (err) {
              tmp9 = globalThis;
              _Promise = Promise;
              tmp10 = c4;
              tmp11 = c13;
              tmp12 = new.target;
              tmp13 = new.target;
              tmp14 = new c4(c13.CLIENT_INVALID_AUTHORIZATION);
              tmp15 = tmp14;
              return Promise.reject(tmp14);
            }
          }
          return;
        }
        static clearCache() {
          FRAUDNET_URL = {};
          return;
        }
        _findOrCreateFraudnetJSON(arg0) {
          tmp = FRAUDNET_FNCLS;
          element = document.querySelector(`script[fncls="${FRAUDNET_FNCLS}"]`);
          if (!element) {
            _document = document;
            body = document.body;
            _document2 = document;
            str = "script";
            appendChildResult = body.appendChild(document.createElement("script"));
            str2 = "application/json";
            appendChildResult.type = "application/json";
            str3 = "fncls";
            attr = appendChildResult.setAttribute("fncls", tmp);
            element = appendChildResult;
          }
          configuration = this.getConfiguration();
          obj = { rda_tenant: "bt_card", mid: configuration.gatewayConfiguration.merchantId };
          getConfiguration = obj;
          str4 = configuration.authorizationFingerprint;
          if (str4) {
            str5 = "&";
            parts = str4.split("&");
            item = parts.forEach((str) => {
              const parts = str.split("=");
              let tmp = "customer_id" === parts[0];
              if (tmp) {
                tmp = parts.length > 1;
              }
              if (tmp) {
                obj.cid = parts[1];
              }
            });
          }
          obj1 = { f: global.substr(0, 32), fp: obj, bu: false, s: FRAUDNET_SOURCE };
          element.text = JSON.stringify(obj1);
          return;
        }
        request(arg0, arg1) {
          closure_0 = global;
          closure_1 = module;
          self = this;
          promise = new Promise((arg0, arg1) => {
            const endpoint = arg0;
            let closure_1 = arg1;
            let collectDeviceData = "payment_methods/credit_cards" === endpoint.endpoint;
            if (collectDeviceData) {
              collectDeviceData = str5.getConfiguration().gatewayConfiguration.creditCards.collectDeviceData;
            }
            let closure_3 = Boolean(collectDeviceData);
            let tmp3;
            if ("graphQLApi" !== endpoint.api) {
              let str = "options.method";
              if (tmp.method) {
                let str2;
                if (!tmp.endpoint) {
                  str2 = "options.endpoint";
                }
                str = str2;
              }
              tmp3 = str;
            }
            if (tmp3) {
              let obj = { type: null, code: null, message: null };
              obj[0] = outer1_13.CLIENT_OPTION_REQUIRED.type;
              obj[1] = outer1_13.CLIENT_OPTION_REQUIRED.code;
              obj[2] = `${tmp3} is required when making a request.`;
              const tmp22 = new outer1_4(obj);
              throw tmp22;
            } else {
              str5 = "clientApi";
              if ("api" in tmp) {
                str5 = tmp.api;
              }
              obj = { method: null, graphQL: null, timeout: null, metadata: null };
              obj[0] = tmp.method;
              let obj1 = str5;
              obj[1] = str5._graphQL;
              obj[2] = tmp.timeout;
              obj[3] = str5._configuration.analyticsMetadata;
              if ("clientApi" === str5) {
                let _clientApiBaseUrl = obj1._clientApiBaseUrl;
                obj.data = outer1_8.addMetadata(obj1._configuration, tmp.data);
              } else if ("graphQLApi" !== str5) {
                obj = { type: null, code: null, message: "options.api is invalid." };
                obj[0] = outer1_13.CLIENT_OPTION_INVALID.type;
                obj[1] = outer1_13.CLIENT_OPTION_INVALID.code;
                const tmp12 = new outer1_4(obj);
                throw tmp12;
              } else {
                _clientApiBaseUrl = outer1_15[obj1._configuration.gatewayConfiguration.environment];
                tmp.endpoint = "";
                obj.method = "post";
                obj1 = { clientSdkMetadata: null };
                const obj2 = { platform: null, source: null, integration: null, sessionId: null, version: null };
                obj2[0] = obj1._configuration.analyticsMetadata.platform;
                obj2[1] = obj1._configuration.analyticsMetadata.source;
                obj2[2] = obj1._configuration.analyticsMetadata.integration;
                obj2[3] = obj1._configuration.analyticsMetadata.sessionId;
                obj2[4] = outer1_14;
                obj1[0] = obj2;
                obj.data = outer1_11(obj1, tmp.data);
                const _configuration = obj1._configuration;
                const obj3 = { Authorization: null, "Braintree-Version": null };
                obj3[0] = `Bearer ${_configuration.authorizationFingerprint || _configuration.authorization}`;
                obj3[1] = endpoint;
                obj.headers = obj3;
                const tmp4 = _configuration.authorizationFingerprint || _configuration.authorization;
              }
              obj.url = _clientApiBaseUrl + tmp.endpoint;
              obj.sendAnalyticsEvent = function sendAnalyticsEvent() { ... };
              obj1._request(obj, () => { ... });
            }
          });
          tmp = promise;
          if (typeof module === "function") {
            tmp2 = c9;
            tmp3 = c10;
            closure_1 = c9(c10(module));
            nextPromise = promise.then((_httpStatus) => {
              callback(null, _httpStatus, _httpStatus._httpStatus);
            });
            catchPromise = nextPromise.catch((details) => {
              let httpStatus = details;
              if (details) {
                httpStatus = details.details;
              }
              if (httpStatus) {
                httpStatus = details.details.httpStatus;
              }
              callback(details, null, httpStatus);
            });
          }
          return tmp;
        }
        toJSON() {
          return this.getConfiguration();
        }
        getVersion() {
          return VERSION;
        }
      }
      const BRAINTREE_VERSION = global("./constants").BRAINTREE_VERSION;
      let closure_1 = global("./request/graphql");
      let closure_2 = global("./request");
      let closure_3 = global("../lib/is-verified-domain");
      let closure_4 = global("../lib/braintree-error");
      let closure_5 = global("../lib/convert-to-braintree-error");
      const getConfiguration = global("./get-configuration").getConfiguration;
      let closure_7 = global("../lib/create-authorization-data");
      let closure_8 = global("../lib/add-metadata");
      let closure_9 = global("../lib/once");
      let closure_10 = global("../lib/deferred");
      const assign = global("../lib/assign").assign;
      let closure_12 = global("../lib/analytics");
      let closure_13 = global("./errors");
      const VERSION = global("../lib/constants").VERSION;
      const GRAPHQL_URLS = global("../lib/constants").GRAPHQL_URLS;
      let closure_16 = global("../lib/methods");
      let closure_17 = global("../lib/convert-methods-to-error");
      let closure_18 = global("../lib/assets");
      const FRAUDNET_FNCLS = global("../lib/constants").FRAUDNET_FNCLS;
      const FRAUDNET_SOURCE = global("../lib/constants").FRAUDNET_SOURCE;
      const FRAUDNET_URL = global("../lib/constants").FRAUDNET_URL;
      let closure_22 = {};
      Client.prototype.teardown = global("@braintree/wrap-promise")(function() {
        const authorization = this.getConfiguration().authorization;
        delete tmp2[tmp];
        callback6(this, callback5(Client.prototype));
        return Promise.resolve();
      });
      module.exports = Client;
    },
    { "../lib/add-metadata": 137, "../lib/analytics": 138, "../lib/assets": 139, "../lib/assign": 140, "../lib/braintree-error": 143, "../lib/constants": 145, "../lib/convert-methods-to-error": 146, "../lib/convert-to-braintree-error": 147, "../lib/create-authorization-data": 149, "../lib/deferred": 151, "../lib/is-verified-domain": 173, "../lib/methods": 175, "../lib/once": 176, "./constants": 93, "./errors": 94, "./get-configuration": 95, "./request": 108, "./request/graphql": 106, "@braintree/wrap-promise": 40 }
  ];
  items92 = [
    (arg0, arg1, arg2) => {
      module.exports = { BRAINTREE_VERSION: "2018-05-10" };
    },
    {}
  ];
  items93 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT, code: "CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN" };
      obj = { type: globalResult.types.MERCHANT, code: "CLIENT_OPTION_REQUIRED" };
      obj = { type: globalResult.types.MERCHANT, code: "CLIENT_OPTION_INVALID" };
      module.exports = { CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN: obj, CLIENT_OPTION_REQUIRED: obj, CLIENT_OPTION_INVALID: obj, CLIENT_MISSING_GATEWAY_CONFIGURATION: { type: globalResult.types.INTERNAL, code: "CLIENT_MISSING_GATEWAY_CONFIGURATION", message: "Missing gatewayConfiguration." }, CLIENT_INVALID_AUTHORIZATION: { type: globalResult.types.MERCHANT, code: "CLIENT_INVALID_AUTHORIZATION", message: "Authorization is invalid. Make sure your client token or tokenization key is valid." }, CLIENT_GATEWAY_NETWORK: { type: globalResult.types.NETWORK, code: "CLIENT_GATEWAY_NETWORK", message: "Cannot contact the gateway at this time." }, CLIENT_REQUEST_TIMEOUT: { type: globalResult.types.NETWORK, code: "CLIENT_REQUEST_TIMEOUT", message: "Request timed out waiting for a reply." }, CLIENT_REQUEST_ERROR: { type: globalResult.types.NETWORK, code: "CLIENT_REQUEST_ERROR", message: "There was a problem with your request." }, CLIENT_GRAPHQL_REQUEST_ERROR: { type: globalResult.types.NETWORK, code: "CLIENT_GRAPHQL_REQUEST_ERROR", message: "There was a problem with your request." }, CLIENT_RATE_LIMITED: { type: globalResult.types.MERCHANT, code: "CLIENT_RATE_LIMITED", message: "You are being rate-limited; please try again in a few minutes." }, CLIENT_AUTHORIZATION_INSUFFICIENT: { type: globalResult.types.MERCHANT, code: "CLIENT_AUTHORIZATION_INSUFFICIENT", message: "The authorization used has insufficient privileges." }, CLIENT_AUTHORIZATION_INVALID: { type: globalResult.types.MERCHANT, code: "CLIENT_AUTHORIZATION_INVALID", message: "Either the client token has expired and a new one should be generated or the tokenization key has been deactivated or deleted." } };
    },
    { "../lib/braintree-error": 143 }
  ];
  items94 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("./request");
      let closure_2 = global("@braintree/uuid");
      let closure_3 = global("../lib/constants");
      let closure_4 = global("./errors");
      let closure_5 = global("./request/graphql");
      const GRAPHQL_URLS = global("../lib/constants").GRAPHQL_URLS;
      let closure_7 = global("../lib/is-date-string-before-or-on");
      const BRAINTREE_VERSION = global("./constants").BRAINTREE_VERSION;
      const globalResult = global("@braintree/wrap-promise");
      module.exports = {
        getConfiguration: global("@braintree/wrap-promise")(function getConfiguration(arg0, sessionId) {
          let closure_0 = arg0;
          let closure_1 = sessionId;
          return new Promise((arg0, arg1) => {
            let closure_0 = arg0;
            const sessionId = arg1;
            let tmp = sessionId;
            if (!sessionId) {
              tmp = outer1_2();
            }
            let obj = { merchantAppId: window.location.host, platform: outer1_3.PLATFORM, sdkVersion: outer1_3.VERSION, source: outer1_3.SOURCE, integration: outer1_3.INTEGRATION, integrationType: outer1_3.INTEGRATION, sessionId: tmp };
            const attrs = closure_0.attrs;
            attrs._meta = obj;
            attrs.braintreeLibraryVersion = outer1_3.BRAINTREE_LIBRARY_VERSION;
            attrs.configVersion = "3";
            obj = { url: closure_0.configUrl, method: "GET", data: attrs };
            if (attrs.authorizationFingerprint) {
              if (tmp3.graphQL) {
                if (outer1_7(tmp3.graphQL.date, outer1_8)) {
                  obj = { graphQL: null };
                  const obj1 = { url: null, features: null };
                  obj1[0] = tmp3.graphQL.url;
                  obj1[1] = ["configuration"];
                  obj[0] = obj1;
                  const tmp17 = new outer1_5(obj);
                  obj.graphQL = tmp17;
                }
                obj.metadata = obj;
              }
              sessionId(obj, (arg0, arg1, arg2) => {
                if (arg0) {
                  if (403 === arg2) {
                    let CLIENT_GATEWAY_NETWORK = outer1_4.CLIENT_AUTHORIZATION_INSUFFICIENT;
                  } else if (401 === arg2) {
                    CLIENT_GATEWAY_NETWORK = outer1_4.CLIENT_AUTHORIZATION_INVALID;
                  } else {
                    CLIENT_GATEWAY_NETWORK = outer1_4.CLIENT_GATEWAY_NETWORK;
                  }
                  let obj = { type: null, code: null, message: null, details: null };
                  ({ type: obj2[0], code: obj2[1], message: obj2[2] } = CLIENT_GATEWAY_NETWORK);
                  obj = { originalError: null };
                  obj[0] = arg0;
                  obj[3] = obj;
                  const tmp15 = new callback(obj);
                  callback2(tmp15);
                } else {
                  let str = "CLIENT_TOKEN";
                  if (attrs.tokenizationKey) {
                    str = "TOKENIZATION_KEY";
                  }
                  obj = { authorizationType: null, authorizationFingerprint: null, analyticsMetadata: null, gatewayConfiguration: null };
                  obj[0] = str;
                  obj[1] = attrs.authorizationFingerprint;
                  obj[2] = obj;
                  obj[3] = arg1;
                  callback(obj);
                }
              });
            }
            if (attrs.tokenizationKey) {
              const obj2 = { graphQL: null };
              const obj3 = { url: null, features: null };
              obj3[0] = outer1_6[tmp3.environment];
              obj3[1] = ["configuration"];
              obj2[0] = obj3;
              const tmp9 = new outer1_5(obj2);
              obj.graphQL = tmp9;
              obj.metadata = obj;
            }
          });
        })
      };
    },
    { "../lib/braintree-error": 143, "../lib/constants": 145, "../lib/is-date-string-before-or-on": 170, "./constants": 93, "./errors": 94, "./request": 108, "./request/graphql": 106, "@braintree/uuid": 36, "@braintree/wrap-promise": 40 }
  ];
  items95 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("./client");
      let closure_2 = global("../lib/errors");
      const globalResult = global("@braintree/wrap-promise");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(authorization) {
          if (authorization.authorization) {
            let initializeResult = closure_1.initialize(authorization);
          } else {
            const obj = { type: null, code: null, message: "options.authorization is required when instantiating a client." };
            obj[0] = constants.INSTANTIATION_OPTION_REQUIRED.type;
            obj[1] = constants.INSTANTIATION_OPTION_REQUIRED.code;
            const tmp7 = new closure_0(obj);
            initializeResult = Promise.reject(tmp7);
          }
          return initializeResult;
        }),
        VERSION: "3.112.1"
      };
    },
    { "../lib/braintree-error": 143, "../lib/errors": 154, "./client": 92, "@braintree/wrap-promise": 40 }
  ];
  items96 = [
    (arg0, arg1, arg2) => {
      function _requestWithRetry(url, arg1, arg2) {
        let graphQL;
        let timeout;
        let closure_0 = url;
        const assign = arg1;
        let closure_2 = arg2;
        ({ graphQL, timeout } = url);
        const requestObject = globalResult.getRequestObject();
        let closure_9 = arg2;
        let isGraphQLRequestResult = graphQL;
        if (graphQL) {
          isGraphQLRequestResult = graphQL.isGraphQLRequest(url.url, url.data);
        }
        const BooleanResult = Boolean(isGraphQLRequestResult);
        let closure_10 = BooleanResult;
        url.headers = assign({ "Content-Type": "application/json" }, url.headers);
        if (BooleanResult) {
          let obj2 = new headers(url);
        } else {
          obj2 = new closure_7(url);
        }
        url = obj2.getUrl();
        const body = obj2.getBody();
        const method = obj2.getMethod();
        headers = obj2.getHeaders();
        let queryifyResult = url;
        if ("GET" === method) {
          queryifyResult = closure_0.queryify(url, body);
        }
        if (obj2) {
          requestObject.onreadystatechange = () => {
            if (4 === requestObject.readyState) {
              if (0 === tmp4.status) {
                if (closure_10) {
                  delete tmp2[tmp];
                  requestObject(closure_0, closure_1, closure_2);
                }
              }
              let data = outer1_3(tmp4.responseText);
              let closure_4 = obj2.adaptResponseBody(data);
              const determineStatusResult = obj2.determineStatus(tmp4.status, data);
              let closure_3 = determineStatusResult;
              if (determineStatusResult < 400) {
                if (closure_3 >= 200) {
                  callback(null, closure_4, closure_3);
                }
              }
              if (closure_10) {
                data = data.data;
                let errorClass = !data;
                if (!data) {
                  errorClass = tmp18.errors;
                }
                if (errorClass) {
                  errorClass = tmp18.errors[0];
                }
                if (errorClass) {
                  errorClass = tmp18.errors[0].extensions;
                }
                if (errorClass) {
                  errorClass = tmp18.errors[0].extensions.errorClass;
                }
                let tmp19 = "UNKNOWN" === errorClass;
                if (!tmp19) {
                  tmp19 = "INTERNAL" === errorClass;
                }
                if (tmp19) {
                  delete tmp3[tmp2];
                  requestObject(closure_0, closure_1, closure_2);
                }
              }
              if (closure_1 < 1) {
                let tmp22 = !closure_3;
                if (closure_3) {
                  tmp22 = 408 === tmp21;
                }
                if (tmp22) {
                  const sum = closure_1 + 1;
                  closure_1 = sum;
                  requestObject(closure_0, sum, closure_2);
                }
              }
              let str3 = closure_4;
              if (!closure_4) {
                str3 = "error";
              }
              let num5 = closure_3;
              if (!closure_3) {
                num5 = 500;
              }
              callback(str3, null, num5);
              const tmp23 = callback;
            }
          };
          let queryifyResult1 = queryifyResult;
        } else {
          queryifyResult1 = queryifyResult;
          if (url.headers) {
            queryifyResult1 = closure_0.queryify(queryifyResult, headers);
          }
          requestObject.onload = () => {
            callback(null, outer1_3(requestObject.responseText), requestObject.status);
          };
          requestObject.onerror = () => {
            callback("error", null, 500);
          };
          requestObject.onprogress = () => {

          };
          requestObject.ontimeout = () => {
            callback("timeout", null, -1);
          };
        }
        try {
          queryifyResult = requestObject.open(method, queryifyResult1, true);
        } catch (tmp24) {
          if (tmp4) {
            delete tmp3[tmp];
            requestObject(tmp3, assign, tmp2);
          } else {
            throw tmp24;
          }
        }
      }
      let closure_0 = global("../../lib/querystring");
      let assign = global("../../lib/assign").assign;
      let closure_2 = global("./prep-body");
      let closure_3 = global("./parse-body");
      const globalResult = global("./xhr");
      let closure_4 = globalResult;
      const isAvailable = globalResult.isAvailable;
      let closure_6 = global("./graphql/request");
      let closure_7 = global("./default-request");
      module.exports = {
        request(url) {
          _requestWithRetry(url, 0, arg1);
        }
      };
    },
    { "../../lib/assign": 140, "../../lib/querystring": 177, "./default-request": 98, "./graphql/request": 107, "./parse-body": 109, "./prep-body": 110, "./xhr": 111 }
  ];
  items97 = [
    (arg0, arg1, arg2) => {
      class DefaultRequest {
        constructor(arg0) {
          return;
        }
        getUrl() {
          return this._url;
        }
        getBody() {
          return this._data;
        }
        getMethod() {
          return this._method;
        }
        getHeaders() {
          return this._headers;
        }
        adaptResponseBody(arg0) {
          return global;
        }
        determineStatus(arg0) {
          return global;
        }
      }
      module.exports = DefaultRequest;
    },
    {}
  ];
  items98 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./error");
      const assign = global("../../../../lib/assign").assign;
      let closure_2 = { AMERICAN_EXPRESS: "American Express", DISCOVER: "Discover", INTERNATIONAL_MAESTRO: "Maestro", JCB: "JCB", MASTERCARD: "MasterCard", SOLO: "Solo", UK_MAESTRO: "UK Maestro", UNION_PAY: "UnionPay", VISA: "Visa", ELO: "Elo", HIPER: "Hiper", HIPERCARD: "Hipercard" };
      let closure_3 = { VISA: "visa", MASTERCARD: "mastercard", DISCOVER: "discover", AMERICAN_EXPRESS: "amex", INTERNATIONAL_MAESTRO: "maestro", ELO: "elo" };
      let closure_4 = { VISA: "Visa", MASTERCARD: "MasterCard", DISCOVER: "Discover", AMERICAN_EXPRESS: "American Express" };
      let closure_5 = { VISA: "visa", MASTERCARD: "mastercard", DISCOVER: "discover", AMERICAN_EXPRESS: "amex", INTERNATIONAL_MAESTRO: "maestro", ELO: "elo" };
      let closure_6 = { VISA: "visa", MASTERCARD: "master", DISCOVER: "discover", AMERICAN_EXPRESS: "amex", DINERS: "diners", INTERNATIONAL_MAESTRO: "maestro", JCB: "jcb" };
      module.exports = function configurationResponseAdapter(data, _graphQL) {
        if (data.data) {
          if (!data.errors) {
            const clientConfiguration = data.data.clientConfiguration;
            let obj = { environment: null, clientApiUrl: null, assetsUrl: null, analytics: null, merchantId: null, venmo: "off" };
            obj[0] = clientConfiguration.environment.toLowerCase();
            ({ clientApiUrl: obj[1], assetsUrl: obj[2] } = clientConfiguration);
            obj = { url: null };
            obj[0] = clientConfiguration.analyticsUrl;
            obj[3] = obj;
            obj[4] = clientConfiguration.merchantId;
            if (clientConfiguration.supportedFeatures) {
              obj = { url: null, features: null };
              obj[0] = _graphQL._graphQL._config.url;
              const supportedFeatures = clientConfiguration.supportedFeatures;
              obj[1] = supportedFeatures.map((str) => str.toLowerCase());
              obj.graphQL = obj;
            }
            if (clientConfiguration.braintreeApi) {
              obj.braintreeApi = clientConfiguration.braintreeApi;
            }
            if (clientConfiguration.applePayWeb) {
              obj.applePayWeb = clientConfiguration.applePayWeb;
              const supportedCardBrands = clientConfiguration.applePayWeb.supportedCardBrands;
              let callback = closure_3;
              obj.applePayWeb.supportedNetworks = supportedCardBrands.reduce((arr, key10009) => {
                let combined = arr;
                if (closure_0.hasOwnProperty(key10009)) {
                  combined = arr.concat(closure_0[key10009]);
                }
                return combined;
              }, []);
              const applePayWeb = obj.applePayWeb;
              delete tmp2[tmp];
            }
            if (clientConfiguration.fastlane) {
              obj.fastlane = clientConfiguration.fastlane;
            }
            if (clientConfiguration.ideal) {
              obj.ideal = clientConfiguration.ideal;
            }
            if (clientConfiguration.kount) {
              const obj1 = { kountMerchantId: null };
              obj1[0] = clientConfiguration.kount.merchantId;
              obj.kount = obj1;
            }
            if (clientConfiguration.creditCard) {
              const challenges = clientConfiguration.creditCard.challenges;
              obj.challenges = challenges.map((str) => str.toLowerCase());
              const obj2 = { supportedCardTypes: null };
              const supportedCardBrands1 = clientConfiguration.creditCard.supportedCardBrands;
              callback = closure_2;
              obj2[0] = supportedCardBrands1.reduce((arr, key10009) => {
                let combined = arr;
                if (closure_0.hasOwnProperty(key10009)) {
                  combined = arr.concat(closure_0[key10009]);
                }
                return combined;
              }, []);
              obj.creditCards = obj2;
              obj.threeDSecureEnabled = clientConfiguration.creditCard.threeDSecureEnabled;
              obj.threeDSecure = clientConfiguration.creditCard.threeDSecure;
            } else {
              obj.challenges = [];
              const obj3 = { supportedCardTypes: null };
              obj3[0] = [];
              obj.creditCards = obj3;
              obj.threeDSecureEnabled = false;
            }
            if (clientConfiguration.googlePay) {
              const obj4 = { displayName: null, enabled: true, environment: null, googleAuthorizationFingerprint: null, paypalClientId: null, supportedNetworks: null };
              obj4[0] = clientConfiguration.googlePay.displayName;
              obj4[2] = clientConfiguration.googlePay.environment.toLowerCase();
              obj4[3] = clientConfiguration.googlePay.googleAuthorization;
              obj4[4] = clientConfiguration.googlePay.paypalClientId;
              const supportedCardBrands2 = clientConfiguration.googlePay.supportedCardBrands;
              callback = closure_5;
              obj4[5] = supportedCardBrands2.reduce((arr, key10009) => {
                let combined = arr;
                if (closure_0.hasOwnProperty(key10009)) {
                  combined = arr.concat(closure_0[key10009]);
                }
                return combined;
              }, []);
              obj.androidPay = obj4;
              const str3 = clientConfiguration.googlePay.environment;
            }
            if (clientConfiguration.venmo) {
              const obj5 = { merchantId: null, accessToken: null, environment: null, enrichedCustomerDataEnabled: null };
              obj5[0] = clientConfiguration.venmo.merchantId;
              obj5[1] = clientConfiguration.venmo.accessToken;
              obj5[2] = clientConfiguration.venmo.environment.toLowerCase();
              obj5[3] = clientConfiguration.venmo.enrichedCustomerDataEnabled;
              obj.payWithVenmo = obj5;
              const str4 = clientConfiguration.venmo.environment;
            }
            if (clientConfiguration.paypal) {
              obj.paypalEnabled = true;
              obj.paypal = assign({}, clientConfiguration.paypal);
              obj.paypal.currencyIsoCode = obj.paypal.currencyCode;
              obj.paypal.environment = obj.paypal.environment.toLowerCase();
              const paypal = obj.paypal;
              delete tmp2[tmp];
              const str5 = obj.paypal.environment;
            } else {
              obj.paypalEnabled = false;
            }
            if (clientConfiguration.unionPay) {
              const obj6 = { enabled: true, merchantAccountId: null };
              obj6[1] = clientConfiguration.unionPay.merchantAccountId;
              obj.unionPay = obj6;
            }
            if (clientConfiguration.visaCheckout) {
              const obj7 = { apikey: null, encryptionKey: null, externalClientId: null, supportedCardTypes: null };
              obj7[0] = clientConfiguration.visaCheckout.apiKey;
              obj7[1] = clientConfiguration.visaCheckout.encryptionKey;
              obj7[2] = clientConfiguration.visaCheckout.externalClientId;
              const supportedCardBrands3 = clientConfiguration.visaCheckout.supportedCardBrands;
              callback = closure_4;
              obj7[3] = supportedCardBrands3.reduce((arr, key10009) => {
                let combined = arr;
                if (closure_0.hasOwnProperty(key10009)) {
                  combined = arr.concat(closure_0[key10009]);
                }
                return combined;
              }, []);
              obj.visaCheckout = obj7;
            }
            if (clientConfiguration.masterpass) {
              const obj8 = { merchantCheckoutId: null, supportedNetworks: null };
              obj8[0] = clientConfiguration.masterpass.merchantCheckoutId;
              const supportedCardBrands4 = clientConfiguration.masterpass.supportedCardBrands;
              callback = closure_6;
              obj8[1] = supportedCardBrands4.reduce((arr, key10009) => {
                let combined = arr;
                if (closure_0.hasOwnProperty(key10009)) {
                  combined = arr.concat(closure_0[key10009]);
                }
                return combined;
              }, []);
              obj.masterpass = obj8;
            }
            let tmp10 = obj;
            if (clientConfiguration.usBankAccount) {
              const obj9 = { routeId: null, plaid: null };
              obj9[0] = clientConfiguration.usBankAccount.routeId;
              const obj10 = { publicKey: null };
              obj10[0] = clientConfiguration.usBankAccount.plaidPublicKey;
              obj9[1] = obj10;
              obj.usBankAccount = obj9;
              tmp10 = obj;
            }
            const str = clientConfiguration.environment;
          }
          return tmp10;
        }
        tmp10 = callback(data);
      };
    },
    { "../../../../lib/assign": 140, "./error": 102 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./error");
      let closure_1 = { AMERICAN_EXPRESS: "American Express", DINERS: "Discover", DISCOVER: "Discover", ELO: "Elo", HIPER: "Hiper", HIPERCARD: "Hipercard", INTERNATIONAL_MAESTRO: "Maestro", JCB: "JCB", MASTERCARD: "MasterCard", UK_MAESTRO: "Maestro", UNION_PAY: "UnionPay", VISA: "Visa" };
      let closure_2 = { YES: "Yes", NO: "No", UNKNOWN: "Unknown" };
      let closure_3 = { PSDTWO: "psd2" };
      module.exports = function creditCardTokenizationFastlaneResponseAdapter(data) {
        if (data.data) {
          if (!data.errors) {
            const tokenizeCreditCardForPayPalConnect = data.data.tokenizeCreditCardForPayPalConnect;
            const details = tokenizeCreditCardForPayPalConnect.paymentMethod.details;
            let str2 = "";
            if (details.last4) {
              str2 = details.last4.substr(2, 4);
              const str3 = details.last4;
            }
            const binData = details.binData;
            if (binData) {
              const items = ["commercial", "debit", "durbinRegulated", "healthcare", "payroll", "prepaid"];
              const item = items.forEach((arg0) => {
                if (binData[arg0]) {
                  tmp[arg0] = outer1_2[tmp[arg0]];
                } else {
                  tmp[arg0] = "Unknown";
                }
              });
              const items1 = ["issuingBank", "countryOfIssuance", "productId"];
              const item1 = items1.forEach((arg0) => {
                if (!binData[arg0]) {
                  tmp[arg0] = "Unknown";
                }
              });
            }
            let obj = { binData: null, consumed: false, description: null, nonce: null, details: null, type: "CreditCard", threeDSecureInfo: null };
            obj[0] = binData;
            let str4 = "";
            if (str2) {
              str4 = `ending in ${str2}`;
            }
            obj[2] = str4;
            obj[3] = tokenizeCreditCardForPayPalConnect.paymentMethod.id;
            obj = { cardholderName: null, expirationMonth: null, expirationYear: null, bin: null, cardType: null, lastFour: null, lastTwo: null };
            ({ cardholderName: obj2[0], expirationMonth: obj2[1], expirationYear: obj2[2] } = details);
            obj[3] = details.bin || "";
            obj[4] = table[details.brandCode] || "Unknown";
            obj = { creditCards: null };
            obj[5] = details.last4 || "";
            obj[6] = str2;
            obj[4] = obj;
            const items2 = [obj];
            obj[0] = items2;
            let tmp5 = obj;
            if (tokenizeCreditCardForPayPalConnect.authenticationInsight) {
              let formatted = table2[str6];
              if (!formatted) {
                formatted = str6.toLowerCase();
              }
              const obj1 = { regulationEnvironment: null };
              obj1[0] = formatted;
              obj.creditCards[0].authenticationInsight = obj1;
              tmp5 = obj;
            }
            const tmp4 = details.last4 || "";
          }
          return tmp5;
        }
        tmp5 = binData(data);
      };
    },
    { "./error": 102 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./error");
      let closure_1 = { AMERICAN_EXPRESS: "American Express", DINERS: "Discover", DISCOVER: "Discover", ELO: "Elo", HIPER: "Hiper", HIPERCARD: "Hipercard", INTERNATIONAL_MAESTRO: "Maestro", JCB: "JCB", MASTERCARD: "MasterCard", UK_MAESTRO: "Maestro", UNION_PAY: "UnionPay", VISA: "Visa" };
      let closure_2 = { YES: "Yes", NO: "No", UNKNOWN: "Unknown" };
      let closure_3 = { PSDTWO: "psd2" };
      module.exports = function creditCardTokenizationResponseAdapter(data) {
        if (data.data) {
          if (!data.errors) {
            const tokenizeCreditCard = data.data.tokenizeCreditCard;
            const creditCard = tokenizeCreditCard.creditCard;
            let str2 = "";
            if (creditCard.last4) {
              str2 = creditCard.last4.substr(2, 4);
              const str3 = creditCard.last4;
            }
            const binData = creditCard.binData;
            if (binData) {
              const items = ["commercial", "debit", "durbinRegulated", "healthcare", "payroll", "prepaid"];
              const item = items.forEach((arg0) => {
                if (binData[arg0]) {
                  tmp[arg0] = outer1_2[tmp[arg0]];
                } else {
                  tmp[arg0] = "Unknown";
                }
              });
              const items1 = ["issuingBank", "countryOfIssuance", "productId"];
              const item1 = items1.forEach((arg0) => {
                if (!binData[arg0]) {
                  tmp[arg0] = "Unknown";
                }
              });
            }
            let obj = { binData: null, consumed: false, description: null, nonce: null, details: null, type: "CreditCard", threeDSecureInfo: null };
            obj[0] = binData;
            let str4 = "";
            if (str2) {
              str4 = `ending in ${str2}`;
            }
            obj[2] = str4;
            obj[3] = tokenizeCreditCard.token;
            obj = { cardholderName: null, expirationMonth: null, expirationYear: null, bin: null, cardType: null, lastFour: null, lastTwo: null };
            ({ cardholderName: obj2[0], expirationMonth: obj2[1], expirationYear: obj2[2] } = creditCard);
            obj[3] = creditCard.bin || "";
            obj[4] = table[creditCard.brandCode] || "Unknown";
            obj = { creditCards: null };
            obj[5] = creditCard.last4 || "";
            obj[6] = str2;
            obj[4] = obj;
            const items2 = [obj];
            obj[0] = items2;
            let tmp5 = obj;
            if (tokenizeCreditCard.authenticationInsight) {
              let formatted = table2[str6];
              if (!formatted) {
                formatted = str6.toLowerCase();
              }
              const obj1 = { regulationEnvironment: null };
              obj1[0] = formatted;
              obj.creditCards[0].authenticationInsight = obj1;
              tmp5 = obj;
            }
            const tmp4 = creditCard.last4 || "";
          }
          return tmp5;
        }
        tmp5 = binData(data);
      };
    },
    { "./error": 102 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      function addFieldError(arr, message, arr2) {
        const first = arr[0];
        if (1 !== arr.length) {
          const item = arr2.forEach((field) => {
            if (field.field === first1) {
              let closure_0 = field;
            }
          });
          if (!obj) {
            obj = { field: null, fieldErrors: null };
            obj[0] = first;
            obj[1] = [];
            arr2.push(obj);
          }
          obj(arr.slice(1), message, obj.fieldErrors);
        } else {
          obj = { code: null, field: null, message: null };
          obj[0] = tmp;
          obj[1] = first;
          obj[2] = message.message;
          arr2.push(obj);
        }
      }
      module.exports = function errorResponseAdapter(errors) {
        let message = errors;
        const tmp = errors.errors && message.errors[0] && message.errors[0].extensions && message.errors[0].extensions.errorClass;
        if ("VALIDATION" === tmp) {
          errors = message.errors;
          const items = [];
          let item = errors.forEach((extensions) => {
            if (tmp) {
              const inputPath = extensions.extensions.inputPath;
              const substr = inputPath.slice(1);
              let arr2 = obj;
              obj = undefined;
              let first1;
              const first = substr[0];
              first1 = first;
              if (1 !== substr.length) {
                const item = arr2.forEach((field) => {
                  if (field.field === first1) {
                    let closure_0 = field;
                  }
                });
                if (!obj) {
                  obj = { field: null, fieldErrors: null };
                  obj[0] = first;
                  obj[1] = [];
                  arr2.push(obj);
                }
                const substr1 = substr.slice(1);
                const fieldErrors = obj.fieldErrors;
                obj = undefined;
                first1 = undefined;
                first1 = substr1[0];
                if (1 !== substr1.length) {
                  const item1 = fieldErrors.forEach((field) => {
                    if (field.field === first1) {
                      let closure_0 = field;
                    }
                  });
                  if (!obj) {
                    obj = { field: null, fieldErrors: null };
                    obj[0] = first1;
                    obj[1] = [];
                    fieldErrors.push(obj);
                  }
                  items(substr1.slice(1), extensions, obj.fieldErrors);
                } else {
                  const obj1 = { code: null, field: null, message: null };
                  obj1[0] = tmp10;
                  obj1[1] = first1;
                  obj1[2] = extensions.message;
                  fieldErrors.push(obj1);
                }
              } else {
                obj = { code: null, field: null, message: null };
                obj[0] = tmp2;
                obj[1] = first;
                obj[2] = extensions.message;
                arr2 = arr2.push(obj);
              }
            }
          });
          if (0 === items.length) {
            let obj = { error: null };
            obj = { message: null };
            message = message.errors[0].message;
            obj[0] = message;
            obj[0] = obj;
            let obj1 = obj;
          } else {
            obj1 = { error: null, fieldErrors: null };
            const obj2 = { message: null };
            obj2[0] = { creditCard: "Credit card is invalid" }[items[0].field];
            obj1[0] = obj2;
            obj1[1] = items;
          }
        } else {
          obj = { error: null, fieldErrors: null };
          if (tmp) {
            const obj3 = { message: null };
            obj3[0] = message.errors[0].message;
            obj[0] = obj3;
            obj[1] = [];
            let tmp2 = obj;
          } else {
            obj[0] = { message: "There was a problem serving your request" };
            obj[1] = [];
            tmp2 = obj;
          }
          return tmp2;
        }
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = function configuration() {
        return { query: "query ClientConfiguration {   clientConfiguration {     analyticsUrl     environment     merchantId     assetsUrl     clientApiUrl     creditCard {       supportedCardBrands       challenges       threeDSecureEnabled       threeDSecure {         cardinalAuthenticationJWT       }     }     applePayWeb {       countryCode       currencyCode       merchantIdentifier       supportedCardBrands     }     fastlane {       enabled     }     googlePay {       displayName       supportedCardBrands       environment       googleAuthorization       paypalClientId     }     ideal {       routeId       assetsUrl     }     kount {       merchantId     }     masterpass {       merchantCheckoutId       supportedCardBrands     }     paypal {       displayName       clientId       assetsUrl       environment       environmentNoNetwork       unvettedMerchant       braintreeClientId       billingAgreementsEnabled       merchantAccountId       currencyCode       payeeEmail     }     unionPay {       merchantAccountId     }     usBankAccount {       routeId       plaidPublicKey     }     venmo {       merchantId       accessToken       environment       enrichedCustomerDataEnabled    }     visaCheckout {       apiKey       externalClientId       supportedCardBrands     }     braintreeApi {       accessToken       url     }     supportedFeatures   } }", operationName: "ClientConfiguration" };
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const assign = global("../../../../lib/assign").assign;
      module.exports = function creditCardForFastlaneTokenization(authenticationInsight) {
        let merchantAccountId = authenticationInsight.authenticationInsight;
        if (merchantAccountId) {
          merchantAccountId = authenticationInsight.merchantAccountId;
        }
        const BooleanResult = Boolean(merchantAccountId);
        let str = "mutation TokenizeCreditCardForPayPalConnect($input: TokenizeCreditCardForPayPalConnectInput!";
        if (BooleanResult) {
          str = "mutation TokenizeCreditCardForPayPalConnect($input: TokenizeCreditCardForPayPalConnectInput!, $authenticationInsightInput: AuthenticationInsightInput!";
        }
        const text = `${str}) {   tokenizeCreditCardForPayPalConnect(input: $input) {     clientMutationId     paymentMethod {       id       details {         ... on CreditCardDetails {       bin       brandCode       last4       cardholderName       expirationMonth      expirationYear      binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }         }       }     }`;
        let text1 = text;
        if (BooleanResult) {
          text1 = `${str}) {   tokenizeCreditCardForPayPalConnect(input: $input) {     clientMutationId     paymentMethod {       id       details {         ... on CreditCardDetails {       bin       brandCode       last4       cardholderName       expirationMonth      expirationYear      binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }         }       }     }    authenticationInsight(input: $authenticationInsightInput) {      customerAuthenticationRegulationEnvironment    }`;
        }
        let obj = { query: `${tmp3}  } }`, variables: null, operationName: "TokenizeCreditCardForPayPalConnect" };
        const creditCard = authenticationInsight.creditCard;
        const tmp4 = creditCard.fastlane || {};
        let termsAndConditionsVersion = "fastlane" in creditCard;
        if (termsAndConditionsVersion) {
          termsAndConditionsVersion = "termsAndConditionsVersion" in creditCard.fastlane;
        }
        if (termsAndConditionsVersion) {
          termsAndConditionsVersion = creditCard.fastlane.termsAndConditionsVersion;
        }
        let hasBuyerConsent = "hasBuyerConsent" in tmp4;
        if (hasBuyerConsent) {
          hasBuyerConsent = tmp4.hasBuyerConsent;
        }
        const shippingAddress = creditCard.shippingAddress;
        const creditCard2 = authenticationInsight.creditCard;
        let billingAddress = creditCard2;
        if (creditCard2) {
          billingAddress = creditCard2.billingAddress;
        }
        let str4 = creditCard2;
        if (creditCard2) {
          str4 = creditCard2.expirationDate;
        }
        let tmp5 = creditCard2;
        if (creditCard2) {
          let expirationMonth = creditCard2.expirationMonth;
          if (!expirationMonth) {
            let trimmed = str4;
            if (str4) {
              trimmed = str4.split("/")[0].trim();
              const str6 = str4.split("/")[0];
            }
            expirationMonth = trimmed;
          }
          tmp5 = expirationMonth;
        }
        let tmp7 = creditCard2;
        if (creditCard2) {
          let expirationYear = creditCard2.expirationYear;
          if (!expirationYear) {
            let trimmed1 = str4;
            if (str4) {
              trimmed1 = str4.split("/")[1].trim();
              const str8 = str4.split("/")[1];
            }
            expirationYear = trimmed1;
          }
          tmp7 = expirationYear;
        }
        let number = creditCard2;
        if (creditCard2) {
          number = creditCard2.number;
        }
        obj = { number, expirationMonth: tmp5, expirationYear: tmp7, cvv: null, cardholderName: null };
        let cvv = creditCard2;
        if (creditCard2) {
          cvv = creditCard2.cvv;
        }
        obj[3] = cvv;
        let cardholderName = creditCard2;
        if (creditCard2) {
          cardholderName = creditCard2.cardholderName;
        }
        obj = { input: { creditCard: obj, options: {} } };
        obj[4] = cardholderName;
        if (BooleanResult) {
          const obj1 = { merchantAccountId: null };
          obj1[0] = authenticationInsight.merchantAccountId;
          obj.authenticationInsightInput = obj1;
        }
        if (billingAddress) {
          obj.input.creditCard.billingAddress = billingAddress;
        }
        const input = obj.input;
        if (authenticationInsight.creditCard) {
          if (authenticationInsight.creditCard.options) {
            if (typeof authenticationInsight.creditCard.options.validate === "boolean") {
              let flag = authenticationInsight.creditCard.options.validate;
            }
            if (typeof flag === "boolean") {
              const obj2 = { validate: null };
              obj2[0] = flag;
              input.options = assign(obj2, input.options);
            }
            obj.input = input;
            const obj3 = { email: null, optIn: null, phone: null, termsAndConditionsVersion: null };
            obj3[0] = creditCard.email;
            obj3[1] = hasBuyerConsent;
            obj3[2] = creditCard.phone;
            obj3[3] = termsAndConditionsVersion;
            const tmp10 = assign({}, obj.input, obj3);
            if ("authAssertion" in tmp4) {
              tmp10.authAssertion = tmp4.authAssertion;
            }
            if (shippingAddress) {
              tmp10.shippingAddress = shippingAddress;
            }
            const obj4 = { input: null };
            obj4[0] = tmp10;
            obj[1] = obj4;
            return obj;
          }
        }
        if (!authenticationInsight.authorizationFingerprint) {
          flag = true;
          if (!authenticationInsight.authorizationFingerprint) {
            if (authenticationInsight.tokenizationKey) {
              flag = false;
            }
          }
        } else {
          flag = true;
        }
      };
    },
    { "../../../../lib/assign": 140 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const assign = global("../../../../lib/assign").assign;
      module.exports = function creditCardTokenization(authenticationInsight) {
        let merchantAccountId = authenticationInsight.authenticationInsight;
        if (merchantAccountId) {
          merchantAccountId = authenticationInsight.merchantAccountId;
        }
        const BooleanResult = Boolean(merchantAccountId);
        let str = "mutation TokenizeCreditCard($input: TokenizeCreditCardInput!";
        if (BooleanResult) {
          str = "mutation TokenizeCreditCard($input: TokenizeCreditCardInput!, $authenticationInsightInput: AuthenticationInsightInput!";
        }
        const text = `${str}) {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       cardholderName       expirationMonth      expirationYear      binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     } `;
        let text1 = text;
        if (BooleanResult) {
          text1 = `${str}) {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       cardholderName       expirationMonth      expirationYear      binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     }     authenticationInsight(input: $authenticationInsightInput) {      customerAuthenticationRegulationEnvironment    }`;
        }
        let obj = { query: `${tmp3}  } }`, variables: null, operationName: "TokenizeCreditCard" };
        const creditCard = authenticationInsight.creditCard;
        let billingAddress = creditCard;
        if (creditCard) {
          billingAddress = creditCard.billingAddress;
        }
        let str3 = creditCard;
        if (creditCard) {
          str3 = creditCard.expirationDate;
        }
        let tmp4 = creditCard;
        if (creditCard) {
          let expirationMonth = creditCard.expirationMonth;
          if (!expirationMonth) {
            let trimmed = str3;
            if (str3) {
              trimmed = str3.split("/")[0].trim();
              const str5 = str3.split("/")[0];
            }
            expirationMonth = trimmed;
          }
          tmp4 = expirationMonth;
        }
        let tmp6 = creditCard;
        if (creditCard) {
          let expirationYear = creditCard.expirationYear;
          if (!expirationYear) {
            let trimmed1 = str3;
            if (str3) {
              trimmed1 = str3.split("/")[1].trim();
              const str7 = str3.split("/")[1];
            }
            expirationYear = trimmed1;
          }
          tmp6 = expirationYear;
        }
        let number = creditCard;
        if (creditCard) {
          number = creditCard.number;
        }
        obj = { number, expirationMonth: tmp4, expirationYear: tmp6, cvv: null, cardholderName: null };
        let cvv = creditCard;
        if (creditCard) {
          cvv = creditCard.cvv;
        }
        obj[3] = cvv;
        let cardholderName = creditCard;
        if (creditCard) {
          cardholderName = creditCard.cardholderName;
        }
        obj = { input: { creditCard: obj, options: {} } };
        obj[4] = cardholderName;
        if (BooleanResult) {
          const obj1 = { merchantAccountId: null };
          obj1[0] = authenticationInsight.merchantAccountId;
          obj.authenticationInsightInput = obj1;
        }
        if (billingAddress) {
          obj.input.creditCard.billingAddress = billingAddress;
        }
        const input = obj.input;
        if (authenticationInsight.creditCard) {
          if (authenticationInsight.creditCard.options) {
            if (typeof authenticationInsight.creditCard.options.validate === "boolean") {
              let flag = authenticationInsight.creditCard.options.validate;
            }
            if (typeof flag === "boolean") {
              const obj2 = { validate: null };
              obj2[0] = flag;
              input.options = assign(obj2, input.options);
            }
            obj.input = input;
            obj[1] = obj;
            return obj;
          }
        }
        if (!authenticationInsight.authorizationFingerprint) {
          flag = true;
          if (!authenticationInsight.authorizationFingerprint) {
            if (authenticationInsight.tokenizationKey) {
              flag = false;
            }
          }
        } else {
          flag = true;
        }
      };
    },
    { "../../../../lib/assign": 140 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class GraphQL {
        constructor(arg0) {
          this._config = global.graphQL;
          return;
        }
        getGraphQLEndpoint() {
          return this._config.url;
        }
        isGraphQLRequest(arg0, arg1) {
          clientApiPath = this.getClientApiPath(global);
          closure_0 = clientApiPath;
          _isGraphQLEnabledResult = this._isGraphQLEnabled();
          tmp3 = !_isGraphQLEnabledResult;
          if (_isGraphQLEnabledResult) {
            tmp3 = !clientApiPath;
          }
          tmp4 = !tmp3;
          if (!tmp3) {
            tmp5 = module;
            features = this._config.features;
            closure_0 = module;
            tmp7 = closure_1;
            someResult = features.some(() => { ... });
            someResult1 = closure_1.some(() => { ... });
            tmp9 = !someResult1;
            if (!someResult1) {
              tmp9 = someResult;
            }
            tmp4 = tmp9;
          }
          return tmp4;
        }
        getClientApiPath(arg0) {
          parts = global.split("/client_api/v1/");
          first = undefined;
          if (parts.length > 1) {
            str = parts[1];
            str2 = "?";
            first = str.split("?")[0];
          }
          return first;
        }
        _isGraphQLEnabled() {
          return Boolean(this._config);
        }
      }
      let closure_0 = { tokenize_credit_cards: "payment_methods/credit_cards", configuration: "configuration" };
      let closure_1 = ["creditCard.options.unionPayEnrollment"];
      module.exports = GraphQL;
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      class GraphQLRequest {
        constructor(arg0) {
          obj = {};
          graphQL = global.graphQL;
          clientApiPath = graphQL.getClientApiPath(global.url);
          ({ graphQL: obj._graphQL, data: obj._data, method: obj._method, headers: obj._headers } = global);
          obj._clientSdkMetadata = { source: global.metadata.source, integration: global.metadata.integration, sessionId: global.metadata.sessionId };
          prototype = global.sendAnalyticsEvent;
          if (!prototype) {
            tmp2 = globalThis;
            _Function = Function;
            prototype = Function.prototype;
          }
          obj._sendAnalyticsEvent = prototype;
          obj._generator = c8[clientApiPath];
          obj._adapter = c9[clientApiPath];
          _sendAnalyticsEventResult = obj._sendAnalyticsEvent("graphql.init");
          return;
        }
        getUrl() {
          _graphQL = this._graphQL;
          return _graphQL.getGraphQLEndpoint();
        }
        getBody() {
          _data = this._data;
          obj = {};
          assign = obj;
          keys = Object.keys(_data);
          item = keys.forEach((arg0) => {
            let tmp = outer1_2(arg0);
            if (typeof tmp6[arg0] === "object") {
              tmp6 = tmp2[arg0];
              let obj = {};
              let _Object = Object;
              let keys = Object.keys(tmp6);
              let item = keys.forEach(() => { ... });
              obj[tmp] = obj;
            } else if (typeof tmp2[arg0] === "number") {
              let _String = String;
              obj[tmp] = String(tmp2[arg0]);
            } else {
              obj[tmp] = tmp2[arg0];
            }
          });
          obj = { clientSdkMetadata: this._clientSdkMetadata };
          return JSON.stringify(assign(obj, this._generator(obj, c3(this._data.creditCard))));
        }
        getMethod() {
          return "POST";
        }
        getHeaders() {
          self = this;
          _sendAnalyticsEvent = this._sendAnalyticsEvent;
          if (this._data.authorizationFingerprint) {
            str2 = "graphql.authorization-fingerprint";
            _sendAnalyticsEventResult = _sendAnalyticsEvent("graphql.authorization-fingerprint");
            tokenizationKey = self._data.authorizationFingerprint;
          } else {
            str = "graphql.tokenization-key";
            _sendAnalyticsEventResult1 = _sendAnalyticsEvent("graphql.tokenization-key");
            tokenizationKey = self._data.tokenizationKey;
          }
          obj = { Authorization: `Bearer ${tokenizationKey}`, "Braintree-Version": BRAINTREE_VERSION };
          return assign({}, self._headers, obj);
        }
        adaptResponseBody(arg0) {
          self = this;
          tmp = "creditCard" in this._data;
          if (tmp) {
            tmp2 = c3;
            tmp = c3(self._data.creditCard);
          }
          return this._adapter(global, self, tmp);
        }
        determineStatus(arg0, arg1) {
          num = 200;
          if (200 === global) {
            tmp = module;
            tmp2 = module.errors && module.errors[0] && module.errors[0].extensions && module.errors[0].extensions.errorClass;
            if (!module.data) {
              num3 = 422;
              str = "VALIDATION";
              if ("VALIDATION" !== tmp2) {
                num4 = 403;
                str2 = "AUTHORIZATION";
                num5 = 403;
                if ("AUTHORIZATION" !== tmp2) {
                  num6 = 401;
                  str3 = "AUTHENTICATION";
                  if ("AUTHENTICATION" !== tmp2) {
                    message = !tmp2;
                    if (!tmp2) {
                      message = module.errors[0].message;
                    }
                    num7 = 500;
                    if (message) {
                      num7 = 403;
                    }
                    num6 = num7;
                  }
                  num5 = num6;
                }
                num3 = num5;
              }
              num = num3;
            }
            num2 = num;
          } else {
            num2 = global;
            if (!global) {
              num2 = 500;
            }
          }
          _sendAnalyticsEventResult = this._sendAnalyticsEvent(`graphql.status.${global}`);
          _sendAnalyticsEventResult1 = this._sendAnalyticsEvent(`graphql.determinedStatus.${num2}`);
          return num2;
        }
      }
      const BRAINTREE_VERSION = global("../../constants").BRAINTREE_VERSION;
      const assign = global("../../../lib/assign").assign;
      let closure_2 = global("../../../lib/snake-case-to-camel-case");
      let closure_3 = global("../../../lib/is-fastlane-checkout");
      let closure_4 = global("./generators/credit-card-tokenization");
      let closure_5 = global("./adapters/credit-card-tokenization");
      let closure_6 = global("./adapters/credit-card-tokenization-fastlane");
      let closure_7 = global("./generators/credit-card-for-fastlane-tokenization");
      let closure_8 = {
        (arg0, arg1) => {
          if (arg1) {
            let tmp2 = callback5(arg0);
          } else {
            tmp2 = callback2(arg0);
          }
          return tmp2;
        },
        configuration: global("./generators/configuration")
      };
      let obj = {
        (arg0, arg1, arg2) => {
          if (arg2) {
            let tmp2 = callback4(arg0, arg1);
          } else {
            tmp2 = callback3(arg0, arg1);
          }
          return tmp2;
        },
        configuration: global("./adapters/configuration")
      };
      module.exports = GraphQLRequest;
    },
    { "../../../lib/assign": 140, "../../../lib/is-fastlane-checkout": 171, "../../../lib/snake-case-to-camel-case": 179, "../../constants": 93, "./adapters/configuration": 99, "./adapters/credit-card-tokenization": 101, "./adapters/credit-card-tokenization-fastlane": 100, "./generators/configuration": 103, "./generators/credit-card-for-fastlane-tokenization": 104, "./generators/credit-card-tokenization": 105 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../../lib/once");
      let closure_1 = global("./ajax-driver");
      module.exports = (method) => {
        let prototype = arg1;
        if (!arg1) {
          const _Function = Function;
          prototype = Function.prototype;
        }
        let str = method.method;
        if (!str) {
          str = "GET";
        }
        method.method = str.toUpperCase();
        let num = 60000;
        if (null != method.timeout) {
          num = method.timeout;
        }
        method.timeout = num;
        method.data = method.data || {};
        closure_1.request(method, closure_0(prototype));
      };
    },
    { "../../lib/once": 176, "./ajax-driver": 97 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = (arg0) => {
        try {
          const _JSON = JSON;
          return JSON.parse(arg0);
        } catch (err) {
        }
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = (str, str2) => {
        if (typeof str !== "string") {
          const _Error = Error;
          const error = new Error("Method must be a string");
          throw error;
        } else {
          let tmp2 = "get" !== str.toLowerCase();
          if (tmp2) {
            tmp2 = null != str2;
          }
          let tmp3 = str2;
          if (tmp2) {
            let json = str2;
            if (typeof str2 !== "string") {
              const _JSON = JSON;
              json = JSON.stringify(str2);
            }
            tmp3 = json;
          }
          return tmp3;
        }
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let _XMLHttpRequest = typeof window !== "undefined";
      if (typeof window !== "undefined") {
        const _window2 = window;
        _XMLHttpRequest = window.XMLHttpRequest;
      }
      if (_XMLHttpRequest) {
        let _window = window;
        let xMLHttpRequest = new window.XMLHttpRequest();
        _XMLHttpRequest = "withCredentials" in xMLHttpRequest;
      }
      module.exports = {
        isAvailable: _XMLHttpRequest,
        getRequestObject() {
          const _window = window;
          if (_XMLHttpRequest) {
            let xMLHttpRequest = new _window.XMLHttpRequest();
          } else {
            xMLHttpRequest = new _window.XDomainRequest();
          }
          return xMLHttpRequest;
        }
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT, code: "DATA_COLLECTOR_KOUNT_NOT_ENABLED", message: "Kount is not enabled for this merchant." };
      obj = { type: globalResult.types.MERCHANT, code: "DATA_COLLECTOR_KOUNT_ERROR" };
      obj = { type: globalResult.types.MERCHANT, code: "DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS", message: "Data Collector must be created with Kount and/or PayPal." };
      module.exports = { DATA_COLLECTOR_KOUNT_NOT_ENABLED: obj, DATA_COLLECTOR_KOUNT_ERROR: obj, DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS: obj };
    },
    { "../lib/braintree-error": 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class Fraudnet {
        constructor() {
          return;
        }
        initialize(arg0) {
          self = this;
          sessionId = this;
          ({ sessionId, environment } = global);
          if (!sessionId) {
            sessionId = global.clientSessionId;
          }
          self.sessionId = sessionId;
          if (self.sessionId) {
            str = self.sessionId;
            num = 32;
            num2 = 0;
            self.sessionId = str.substring(0, 32);
          }
          if (!global.sessionId) {
            sessionId = self.sessionId;
          }
          date = new Date();
          self._beaconId = `https://b.stats.paypal.com/counter.cgi?i=127.0.0.1&p=${tmp}&t=${obj.getTime() / 1000}&a=14`;
          body = document.body;
          ({ sessionId: sessionId2, _beaconId } = self);
          appendChildResult = body.appendChild(document.createElement("script"));
          obj = { f: sessionId2, s: FRAUDNET_SOURCE, b: _beaconId };
          if ("production" !== environment) {
            flag = true;
            obj.sandbox = true;
          }
          appendChildResult.type = "application/json";
          attr = appendChildResult.setAttribute("fncls", FRAUDNET_FNCLS);
          appendChildResult.text = JSON.stringify(obj);
          self._parameterBlock = appendChildResult;
          obj1 = { src: FRAUDNET_URL };
          promise = loadScript(obj1);
          nextPromise = promise.then((_thirdPartyBlock) => {
            sessionId._thirdPartyBlock = _thirdPartyBlock;
            return sessionId;
          });
          return nextPromise.catch(() => null);
        }
        teardown() {
          element = document.querySelector("iframe[title=\"ppfniframe\"]");
          parentNode = element;
          if (element) {
            parentNode = element.parentNode;
          }
          if (parentNode) {
            parentNode2 = element.parentNode;
            removeChildResult = parentNode2.removeChild(element);
          }
          element1 = document.querySelector("iframe[title=\"pbf\"]");
          parentNode3 = element1;
          if (element1) {
            parentNode3 = element1.parentNode;
          }
          if (parentNode3) {
            parentNode4 = element1.parentNode;
            removeChildResult1 = parentNode4.removeChild(element1);
          }
          _parameterBlock = this._parameterBlock;
          parentNode5 = _parameterBlock;
          if (_parameterBlock) {
            parentNode5 = _parameterBlock.parentNode;
          }
          if (parentNode5) {
            parentNode6 = _parameterBlock.parentNode;
            removeChildResult2 = parentNode6.removeChild(_parameterBlock);
          }
          _thirdPartyBlock = this._thirdPartyBlock;
          parentNode7 = _thirdPartyBlock;
          if (_thirdPartyBlock) {
            parentNode7 = _thirdPartyBlock.parentNode;
          }
          if (parentNode7) {
            parentNode8 = _thirdPartyBlock.parentNode;
            removeChildResult3 = parentNode8.removeChild(_thirdPartyBlock);
          }
          return;
        }
      }
      const FRAUDNET_FNCLS = global("../lib/constants").FRAUDNET_FNCLS;
      const FRAUDNET_SOURCE = global("../lib/constants").FRAUDNET_SOURCE;
      const FRAUDNET_URL = global("../lib/constants").FRAUDNET_URL;
      const loadScript = global("../lib/assets").loadScript;
      module.exports = {
        setup(arg0) {
          let obj = arg0;
          if (!arg0) {
            obj = {};
          }
          obj = Object.create(Fraudnet.prototype);
          if (!obj.sessionId) {
            if (closure_0) {
              obj.sessionId = closure_0;
              let resolved = Promise.resolve(obj);
            }
            return resolved;
          }
          resolved = obj.initialize(obj);
        },
        clearSessionIdCache() {
          let c0 = null;
        }
      };
    },
    { "../lib/assets": 139, "../lib/constants": 145 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./kount");
      let closure_1 = global("./fraudnet");
      let closure_2 = global("../lib/braintree-error");
      let closure_3 = global("../lib/basic-component-verification");
      let closure_4 = global("../lib/create-deferred-client");
      let closure_5 = global("../lib/create-assets-url");
      let closure_6 = global("../lib/methods");
      let closure_7 = global("../lib/convert-methods-to-error");
      const globalResult = global("@braintree/wrap-promise");
      let closure_8 = globalResult;
      let closure_9 = global("./errors");
      module.exports = {
        create: globalResult(function create(client) {
          let closure_0 = client;
          let closure_2 = { _instances: [] };
          return closure_3.verify({ name: "Data Collector", client: client.client, authorization: client.authorization }).then(() => {
            obj._instantiatedWithAClient = !client.useDeferredClient;
            obj = { authorization: client.authorization, client: client.client, debug: client.debug, assetsUrl: outer1_5.create(client.authorization), name: "Data Collector" };
            obj = outer1_4.create(obj);
            const nextPromise = obj.then((getConfiguration) => {
              const configuration = getConfiguration.getConfiguration();
              if (true === closure_0.kount) {
                if (configuration.gatewayConfiguration.kount) {
                  try {
                    let obj = { environment: null, merchantId: null };
                    obj[0] = configuration.gatewayConfiguration.environment;
                    obj[1] = configuration.gatewayConfiguration.kount.kountMerchantId;
                    const setupResult = closure_0.setup(obj);
                    let deviceData = setupResult.deviceData;
                    const _instances = closure_2._instances;
                    _instances.push(setupResult);
                  } catch (tmp8) {
                    obj = { type: null, code: null, message: null };
                    obj[0] = outer1_9.DATA_COLLECTOR_KOUNT_ERROR.type;
                    obj[1] = outer1_9.DATA_COLLECTOR_KOUNT_ERROR.code;
                    obj[2] = tmp8.message;
                    const tmp15 = new outer1_2(obj);
                    return Promise.reject(tmp15);
                  }
                }
                return Promise.resolve(getConfiguration);
              }
              deviceData = {};
            });
            const tmp = obj;
            obj._createPromise = obj.then((getConfiguration) => {
              const configuration = getConfiguration.getConfiguration();
              if (true === closure_0.kount) {
                if (configuration.gatewayConfiguration.kount) {
                  try {
                    let obj = { environment: null, merchantId: null };
                    obj[0] = configuration.gatewayConfiguration.environment;
                    obj[1] = configuration.gatewayConfiguration.kount.kountMerchantId;
                    const setupResult = closure_0.setup(obj);
                    let deviceData = setupResult.deviceData;
                    const _instances = closure_2._instances;
                    _instances.push(setupResult);
                  } catch (tmp8) {
                    obj = { type: null, code: null, message: null };
                    obj[0] = outer1_9.DATA_COLLECTOR_KOUNT_ERROR.type;
                    obj[1] = outer1_9.DATA_COLLECTOR_KOUNT_ERROR.code;
                    obj[2] = tmp8.message;
                    const tmp15 = new outer1_2(obj);
                    return Promise.reject(tmp15);
                  }
                }
                return Promise.resolve(getConfiguration);
              }
              deviceData = {};
            }).then((getConfiguration) => {
              const configuration = getConfiguration.getConfiguration();
              let correlationId = closure_0.riskCorrelationId;
              if (!correlationId) {
                correlationId = tmp3.clientMetadataId;
              }
              if (!correlationId) {
                correlationId = tmp3.correlationId;
              }
              return outer1_1.setup({ sessionId: correlationId, clientSessionId: configuration.analyticsMetadata.sessionId, environment: configuration.gatewayConfiguration.environment }).then(() => { ... });
            }).then(() => {
              let rejectResult = closure_2;
              if (0 === closure_2._instances.length) {
                const tmp10 = new outer1_2(outer1_9.DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS);
                rejectResult = Promise.reject(tmp10);
              } else {
                const _JSON = JSON;
                rejectResult.deviceData = JSON.stringify(closure_1);
                rejectResult.rawDeviceData = closure_1;
              }
              return rejectResult;
            });
            client = obj;
            obj.teardown = outer1_8(function teardown() {
              return closure_0._createPromise.then(() => { ... });
            });
            client = obj;
            obj.getDeviceData = outer1_8(function getDeviceData(arg0) {
              let obj = arg0;
              obj = arg0;
              if (!arg0) {
                obj = {};
              }
              return obj._createPromise.then(() => { ... });
            });
            let _createPromise = obj;
            if (obj._instantiatedWithAClient) {
              _createPromise = tmp._createPromise;
            }
            return _createPromise;
          });
        }),
        VERSION: "3.112.1"
      };
    },
    { "../lib/basic-component-verification": 141, "../lib/braintree-error": 143, "../lib/convert-methods-to-error": 146, "../lib/create-assets-url": 148, "../lib/create-deferred-client": 150, "../lib/methods": 175, "./errors": 112, "./fraudnet": 113, "./kount": 115, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class Kount {
        constructor(arg0) {
          self = this;
          obj = Kount;
          cachedDeviceData = Kount.getCachedDeviceData(global.merchantId);
          if (cachedDeviceData) {
            self.deviceData = cachedDeviceData;
            flag = true;
            self._isCached = true;
            return;
          } else {
            self._currentEnvironment = self._initializeEnvironment(global);
            tmp2 = c0;
            random = c0.random;
            startCollectorsResult = random.startCollectors();
            self._deviceSessionId = self._generateDeviceSessionId();
            self.deviceData = self._getDeviceData();
            setCachedDeviceDataResult = obj.setCachedDeviceData(global.merchantId, self.deviceData);
            self._iframe = self._setupIFrame();
            return;
          }
        }
        static getCachedDeviceData(arg0) {
          return closure_3[global];
        }
        static setCachedDeviceData(arg0, arg1) {
          closure_3[global] = module;
          return;
        }
        teardown() {
          self = this;
          if (!this._isCached) {
            tmp = c0;
            random = c0.random;
            stopCollectorsResult = random.stopCollectors();
            _removeIframeResult = self._removeIframe();
          }
          return;
        }
        _removeIframe() {
          parentNode = this._iframe.parentNode;
          removeChildResult = parentNode.removeChild(this._iframe);
          return;
        }
        _getDeviceData() {
          obj = { deviceSessionId: this._deviceSessionId, fraudMerchantId: this._currentEnvironment.id };
          return c1(obj);
        }
        _generateDeviceSessionId() {
          random = c0.random;
          hex = c0.codec.hex;
          return hex.fromBits(random.randomWords(4, 0));
        }
        _setupIFrame() {
          self = this;
          c0 = `?m=${this._currentEnvironment.id}&s=${this._deviceSessionId}`;
          element = document.createElement("iframe");
          iframe = element;
          element.width = 1;
          element.id = `braintreeDataFrame-${this._deviceSessionId}`;
          element.height = 1;
          element.frameBorder = 0;
          element.scrolling = "no";
          element.style.position = "fixed";
          element.style.left = "-999999px";
          element.style.top = "-999999px";
          element.title = "Braintree-Kount-iframe";
          attr = element.setAttribute("aria-hidden", "true");
          body = document.body;
          appendChildResult = body.appendChild(element);
          timerId = setTimeout(() => {
            element.src = `${self._currentEnvironment.url}/logo.htm${closure_0}`;
            element.innerHTML = `<img src="${self._currentEnvironment.url}/logo.gif${closure_0}" alt="" />`;
          }, 10);
          return element;
        }
        _initializeEnvironment(arg0) {
          tmp = c2[global.environment];
          if (null == tmp) {
            tmp2 = globalThis;
            _Error = Error;
            str = " is not a valid environment for kount.environment";
            tmp3 = new.target;
            tmp4 = new.target;
            error = new Error(global.environment + " is not a valid environment for kount.environment");
            tmp6 = error;
            throw error;
          } else {
            obj = { url: null, name: null, id: null };
            obj[0] = tmp;
            ({ environment: obj[1], merchantId: obj[2] } = global);
            return obj;
          }
        }
      }
      let closure_0 = global("./vendor/sjcl");
      let closure_1 = global("../lib/camel-case-to-snake-case");
      let obj = { development: "https://assets.qa.braintreepayments.com/data", qa: "https://assets.qa.braintreepayments.com/data", sandbox: "https://assets.braintreegateway.com/sandbox/data", production: "https://assets.braintreegateway.com/data" };
      let closure_3 = {};
      obj = {
        setup(arg0) {
          let obj = arg0;
          if (null == arg0) {
            obj = {};
          }
          obj = Object.create(obj2.prototype);
          const cachedDeviceData = obj2.getCachedDeviceData(obj.merchantId);
          if (cachedDeviceData) {
            obj.deviceData = cachedDeviceData;
            obj._isCached = true;
          } else {
            obj._currentEnvironment = obj._initializeEnvironment(obj);
            const random = closure_0.random;
            random.startCollectors();
            obj._deviceSessionId = obj._generateDeviceSessionId();
            obj.deviceData = obj._getDeviceData();
            obj2.setCachedDeviceData(obj.merchantId, obj.deviceData);
            obj._iframe = obj._setupIFrame();
          }
          return obj;
        },
        Kount,
        environmentUrls: obj
      };
      module.exports = obj;
    },
    { "../lib/camel-case-to-snake-case": 144, "./vendor/sjcl": 116 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      function t(arg0, arg1, arg2) {
        let tmp5;
        let tmp6;
        let tmp7;
        let tmp8;
        let tmp9;
        if (4 !== arg1.length) {
          const invalid = new obj.exception.invalid("invalid aes block size");
          throw invalid;
        } else {
          let num = 1;
          if (arg2) {
            num = 3;
          }
          let num3 = 3;
          if (arg2) {
            num3 = 1;
          }
          let tmp3 = arg1[num3] ^ arr2[3];
          const diff = arr2.length / 4 - 2;
          const items = [0, 0, 0, 0];
          [tmp5, tmp6, tmp7, tmp8, tmp9] = arg0.l[arg2];
          let num10 = 4;
          let num11 = 0;
          let tmp10 = tmp2;
          let tmp11 = tmp;
          let tmp12 = tmp34;
          let num12 = 4;
          let tmp13 = tmp2;
          let tmp14 = tmp;
          let tmp15 = tmp34;
          let tmp16 = tmp3;
          if (0 < diff) {
            do {
              let tmp17 = tmp5[tmp12 >>> 24] ^ tmp6[tmp11 >> 16 & 255] ^ tmp7[tmp10 >> 8 & 255] ^ tmp8[255 & tmp3] ^ arr2[num10];
              let tmp18 = tmp5[tmp11 >>> 24] ^ tmp6[tmp10 >> 16 & 255] ^ tmp7[tmp3 >> 8 & 255] ^ tmp8[255 & tmp12] ^ arr2[num10 + 1];
              let tmp19 = tmp5[tmp10 >>> 24] ^ tmp6[tmp3 >> 16 & 255] ^ tmp7[tmp12 >> 8 & 255] ^ tmp8[255 & tmp11] ^ arr2[num10 + 2];
              tmp3 = tmp5[tmp3 >>> 24] ^ tmp6[tmp12 >> 16 & 255] ^ tmp7[tmp11 >> 8 & 255] ^ tmp8[255 & tmp10] ^ arr2[num10 + 3];
              num10 = num10 + 4;
              num11 = num11 + 1;
              tmp10 = tmp19;
              tmp11 = tmp18;
              tmp12 = tmp17;
              num12 = num10;
              tmp13 = tmp19;
              tmp14 = tmp18;
              tmp15 = tmp17;
              tmp16 = tmp3;
            } while (num11 < diff);
          }
          let num13 = 0;
          do {
            let tmp21 = num13;
            let tmp25 = tmp16;
            let tmp26 = num13;
            let tmp20 = num12;
            let tmp22 = tmp13;
            let tmp23 = tmp14;
            let tmp24 = tmp15;
            if (arg2) {
              tmp26 = 3 & -num13;
            }
            num12 = num12 + 1;
            items[tmp26] = tmp9[tmp15 >>> 24] << 24 ^ tmp9[tmp14 >> 16 & 255] << 16 ^ tmp9[tmp13 >> 8 & 255] << 8 ^ tmp9[255 & tmp16] ^ arr2[tmp20];
            num13 = num13 + 1;
            tmp13 = tmp16;
            tmp14 = tmp22;
            tmp15 = tmp23;
            tmp16 = tmp24;
          } while (num13 < 4);
          return items;
        }
      }
      function u(u) {
        let tmp11;
        let tmp12;
        let tmp13;
        let tmp15;
        let tmp16;
        let tmp17;
        let tmp2;
        let tmp21;
        let tmp22;
        let tmp3;
        let tmp4;
        let tmp5;
        let tmp6;
        let tmp7;
        let tmp8;
        let tmp9;
        u = u.u;
        [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = u;
        let num = 0;
        do {
          let tmp10 = tmp9;
          let tmp14 = tmp5;
          let tmp18 = num;
          tmp11 = tmp8;
          tmp12 = tmp7;
          tmp13 = tmp6;
          tmp15 = tmp4;
          tmp16 = tmp3;
          tmp17 = tmp2;
          if (num < 16) {
            let tmp19 = arg1[num];
          } else {
            let tmp23 = arg1[num + 1 & 15];
            let tmp24 = arg1[num + 14 & 15];
            let tmp25 = 15 & num;
            tmp19 = (tmp23 >>> 7 ^ tmp23 >>> 18 ^ tmp23 >>> 3 ^ tmp23 << 25 ^ tmp23 << 14) + (tmp24 >>> 17 ^ tmp24 >>> 19 ^ tmp24 >>> 10 ^ tmp24 << 15 ^ tmp24 << 13) + arg1[tmp25] + arg1[num + 9 & 15] | 0;
            arg1[tmp25] = tmp19;
          }
          let sum = tmp19 + tmp9 + (tmp6 >>> 6 ^ tmp6 >>> 11 ^ tmp6 >>> 25 ^ tmp6 << 26 ^ tmp6 << 21 ^ tmp6 << 7) + (tmp8 ^ tmp6 & (tmp7 ^ tmp8)) + tmp[num];
          tmp21 = tmp5 + sum | 0;
          tmp22 = sum + (tmp2 & tmp3 ^ tmp4 & (tmp2 ^ tmp3)) + (tmp2 >>> 2 ^ tmp2 >>> 13 ^ tmp2 >>> 22 ^ tmp2 << 30 ^ tmp2 << 19 ^ tmp2 << 10) | 0;
          num = num + 1;
          tmp9 = tmp8;
          tmp8 = tmp7;
          tmp7 = tmp6;
          tmp6 = tmp21;
          tmp5 = tmp4;
          tmp4 = tmp3;
          tmp3 = tmp2;
          tmp2 = tmp22;
        } while (num < 64);
        u[0] = u[0] + tmp22 | 0;
        u[1] = u[1] + tmp17 | 0;
        u[2] = u[2] + tmp16 | 0;
        u[3] = u[3] + tmp15 | 0;
        u[4] = u[4] + tmp21 | 0;
        u[5] = u[5] + tmp13 | 0;
        u[6] = u[6] + tmp12 | 0;
        u[7] = u[7] + tmp11 | 0;
      }
      function C(addEntropy) {
        if (typeof window !== "undefined") {
          const _window3 = window;
          if (window.performance) {
            const _window = window;
            if (typeof window.performance.now === "function") {
              const _window2 = window;
              const _performance = window.performance;
              addEntropy.addEntropy(_performance.now(), 0, "loadtime");
            }
          }
        }
        addEntropy.addEntropy(new Date().valueOf(), 0, "loadtime");
      }
      function y(g) {
        g.g[0] = g.g[0] + 1 | 0;
        let num = 0;
        if (!g.g[0]) {
          const sum = num + 1;
          while (sum < 4) {
            g.g[sum] = g.g[sum] + 1 | 0;
            num = sum;
            if (g.g[sum]) {
              break;
            }
          }
        }
        const C = g.C;
        g.g[0] = g.g[0] + 1 | 0;
        let num2 = 0;
        if (!g.g[0]) {
          const sum1 = num2 + 1;
          while (sum1 < 4) {
            g.g[sum1] = g.g[sum1] + 1 | 0;
            num2 = sum1;
            if (g.g[sum1]) {
              break;
            }
          }
        }
        const C2 = g.C;
        g.b = C.encrypt(g.g).concat(C2.encrypt(g.g));
        const aes = new obj.cipher.aes(g.b);
        g.C = aes;
      }
      obj = { cipher: {}, hash: {}, keyexchange: {}, mode: {}, misc: {}, codec: {}, exception: obj };
      obj = {
        corrupt(arg0) {

        },
        invalid(arg0) {

        },
        bug(arg0) {

        },
        notReady(arg0) {

        }
      };
      obj.cipher.aes = function(arr) {
        const self = this;
        if (!this.l[0][0][0]) {
          self.G();
        }
        if (4 !== arr.length) {
          if (6 !== length) {
            if (8 !== length) {
              const invalid = new obj.exception.invalid("invalid aes key size");
              throw invalid;
            }
          }
        }
        const substr = arr.slice(0);
        const items = [substr, ];
        const items1 = [];
        items[1] = items1;
        self.b = items;
        let num3 = 1;
        let sum = length;
        let diff1 = length;
        if (arr.length < 4 * arr.length + 28) {
          do {
            let tmp8 = substr[sum - 1];
            let tmp9 = 0 == sum % length;
            let tmp10 = num3;
            let tmp11 = sum;
            if (!tmp9) {
              let tmp12 = tmp5;
              if (tmp5) {
                tmp12 = 4 == sum % length;
              }
              tmp9 = tmp12;
            }
            let tmp13 = num3;
            let tmp14 = tmp8;
            if (tmp9) {
              let tmp15 = tmp2[tmp8 >>> 24] << 24 ^ tmp2[tmp8 >> 16 & 255] << 16 ^ tmp2[tmp8 >> 8 & 255] << 8 ^ tmp2[255 & tmp8];
              let tmp16 = num3;
              let tmp17 = tmp15;
              if (0 == sum % length) {
                tmp17 = tmp15 << 8 ^ tmp15 >>> 24 ^ num3 << 24;
                tmp16 = num3 << 1 ^ 283 * (num3 >> 7);
              }
              tmp13 = tmp16;
              tmp14 = tmp17;
            }
            substr[sum] = substr[sum - length] ^ tmp14;
            sum = sum + 1;
            num3 = tmp13;
            diff1 = sum;
          } while (sum < 4 * length + 28);
        }
        let num4 = 0;
        while (diff1) {
          let tmp18 = num4;
          let tmp19 = diff1;
          let diff = diff1;
          if (!(3 & num4)) {
            diff = diff1 - 4;
          }
          let tmp21 = substr[diff];
          let tmp22 = tmp21;
          if (4 < diff1) {
            tmp22 = tmp21;
            if (num4 >= 4) {
              tmp22 = tmp3[0][tmp2[tmp21 >>> 24]] ^ tmp3[1][tmp2[tmp21 >> 16 & 255]] ^ tmp3[2][tmp2[tmp21 >> 8 & 255]] ^ tmp3[3][tmp2[255 & tmp21]];
            }
          }
          items1[num4] = tmp22;
          num4 = num4 + 1;
          diff1 = diff1 - 1;
        }
      };
      obj = {
        encrypt(g) {
          return t(this, g, 0);
        },
        decrypt(c0) {
          return t(this, c0, 1);
        },
        l: items1,
        G() {
          let tmp14;
          const first = this.l[0];
          const items = [];
          const items1 = [];
          let num = 0;
          do {
            let tmp4 = num << 1 ^ 283 * (num >> 7);
            items[num] = tmp4;
            items1[tmp4 ^ num] = num;
            num = num + 1;
          } while (num < 256);
          let num2 = 0;
          let num3 = 0;
          let num4 = 0;
          if (!first[4][0]) {
            const tmp5 = num2 ^ num2 << 1 ^ num2 << 2 ^ num2 << 3 ^ num2 << 4;
            tmp3[num3] = tmp5 >> 8 ^ 255 & tmp5 ^ 99;
            tmp2[4][tmp5 >> 8 ^ 255 & tmp5 ^ 99] = num3;
            let num5 = items[num3];
            let tmp8 = 16843009 * items[tmp7] ^ 65537 * tmp7 ^ 257 * num5 ^ 16843008 * num3;
            let tmp9 = 257 * items[tmp6] ^ 16843008 * tmp6;
            let num6 = 0;
            do {
              do {
                let tmp12 = tmp9 << 24 ^ tmp9 >>> 8;
                first[num6][num3] = tmp12;
                let tmp13 = tmp8 << 24 ^ tmp8 >>> 8;
                tmp2[num6][tmp6] = tmp13;
                num6 = num6 + 1;
                tmp8 = tmp13;
                tmp9 = tmp12;
              } while (num6 < 4);
              if (!num5) {
                num5 = 1;
              }
              tmp14 = num3 ^ num5;
              let tmp15 = items1[num2] || 1;
              num2 = tmp15;
              num3 = tmp14;
              num4 = 0;
            } while (!tmp3[tmp14]);
          }
          do {
            let arr3 = first[num4];
            first[num4] = arr3.slice(0);
            let arr4 = tmp2[num4];
            tmp2[num4] = arr4.slice(0);
            num4 = num4 + 1;
            let num7 = 5;
          } while (num4 < 5);
        }
      };
      let items = [[], [], [], [], []];
      items1 = [items, ];
      let items2 = [[], [], [], [], []];
      items1[1] = items2;
      obj.cipher.aes.prototype = obj;
      obj.bitArray = {
        bitSlice(arr) {
          const bitArray = obj.bitArray;
          const substr = bitArray.M(arr.slice(arg1 / 32), 32 - (31 & arg1)).slice(1);
          let clampResult = substr;
          if (undefined !== arg2) {
            const bitArray2 = obj.bitArray;
            clampResult = bitArray2.clamp(substr, arg2 - arg1);
          }
          return clampResult;
        },
        extract(arg0, arg1, arg2) {
          const rounded = Math.floor(-arg1 - arg2 & 31);
          if (-32 & (arg1 + arg2 - 1 ^ arg1)) {
            let tmp3 = tmp2 << 32 - rounded ^ arg0[arg1 / 32 + 1 | 0] >>> rounded;
          } else {
            tmp3 = tmp2 >>> rounded;
          }
          return tmp3 & (1 << arg2) - 1;
        },
        concat(arr) {
          if (0 !== arr.length) {
            if (0 !== arg1.length) {
              const bitArray = obj.bitArray;
              const partial = bitArray.getPartial(tmp);
              if (32 === partial) {
                let combined = arr.concat(arg1);
              } else {
                const bitArray2 = obj.bitArray;
                combined = bitArray2.M(arg1, partial, tmp | 0, arr.slice(0, arr.length - 1));
                const tmp4 = tmp | 0;
              }
              return combined;
            }
          }
          return arr.concat(arg1);
        },
        bitLength(toBitsResult) {
          let num = 0;
          if (0 !== toBitsResult.length) {
            const bitArray = obj.bitArray;
            const diff = length - 1;
            num = 32 * diff + bitArray.getPartial(toBitsResult[length - 1]);
          }
          return num;
        },
        clamp(arr) {
          if (32 * arr.length < arg1) {
            return arr;
          } else {
            const _Math = Math;
            const substr = arr.slice(0, Math.ceil(arg1 / 32));
            if (tmp) {
              const bitArray = obj.bitArray;
              const diff = length - 1;
              substr[diff] = bitArray.partial(tmp5, substr[length - 1] & 2147483648 >> tmp5 - 1, 1);
            }
            return substr;
          }
        },
        partial(arg0, arg1, arg2) {
          if (32 === arg0) {
            return arg1;
          } else {
            if (arg2) {
              let tmp2 = arg1 | 0;
            } else {
              tmp2 = arg1 << 32 - arg0;
            }
            const sum = tmp2 + 1099511627776 * arg0;
          }
        },
        getPartial(arr) {
          return Math.round(arr / 1099511627776) || 32;
        },
        equal(toBitsResult, toBitsResult) {
          let bitArray;
          let bitArray2;
          let length;
          ({ bitArray, bitArray: bitArray2 } = obj);
          if (bitLengthResult !== bitArray2.bitLength(toBitsResult)) {
            return false;
          } else {
            let num3 = 0;
            let num4 = 0;
            let num5 = 0;
            if (0 < toBitsResult.length) {
              do {
                num3 = num3 | toBitsResult[num4] ^ toBitsResult[num4];
                num4 = num4 + 1;
                num5 = num3;
                length = toBitsResult.length;
              } while (num4 < length);
            }
            return 0 === num5;
          }
          bitLengthResult = bitArray.bitLength(toBitsResult);
        },
        M(arr) {
          let length;
          let items = arg3;
          if (undefined === arg3) {
            items = [];
          }
          let diff = arg1;
          let num = arg2;
          let num2 = arg2;
          let tmp2 = arg1;
          if (32 <= arg1) {
            do {
              arr = items.push(num);
              diff = diff - 32;
              num = 0;
              num2 = 0;
              tmp2 = diff;
            } while (32 <= diff);
          }
          if (0 === tmp2) {
            return items.concat(arr);
          } else {
            let num3 = 0;
            let tmp5 = num2;
            let arr1 = num2;
            if (0 < arr.length) {
              do {
                arr = items.push(tmp5 | arr[num3] >>> tmp2);
                tmp5 = arr[num3] << 32 - tmp2;
                num3 = num3 + 1;
                arr1 = tmp5;
                length = arr.length;
              } while (num3 < length);
            }
            let num4 = 0;
            if (arr.length) {
              num4 = arr[arr.length - 1];
            }
            const bitArray = obj.bitArray;
            const partial = bitArray.getPartial(num4);
            const bitArray2 = obj.bitArray;
            if (32 >= tmp2 + partial) {
              arr1 = items.pop();
            }
            items.push(bitArray2.partial(tmp2 + partial & 31, arr1, 1));
            return items;
          }
        },
        Y(arg0, arg1) {
          const items = [arg0[0] ^ arg1[0], arg0[1] ^ arg1[1], arg0[2] ^ arg1[2], arg0[3] ^ arg1[3]];
          return items;
        },
        byteswapM(arg0) {
          let length;
          let num = 0;
          if (0 < arg0.length) {
            do {
              let tmp = arg0[num];
              arg0[num] = tmp >>> 24 | tmp >>> 8 & 65280 | (65280 & tmp) << 8 | tmp << 24;
              num = num + 1;
              length = arg0.length;
            } while (num < length);
          }
          return arg0;
        }
      };
      obj.codec.utf8String = {
        fromBits(toBitsResult) {
          const bitArray = obj.bitArray;
          const bitLengthResult = bitArray.bitLength(toBitsResult);
          let str = "";
          let str2 = "";
          let num = 0;
          if (0 < bitLengthResult / 8) {
            do {
              let tmp3 = str;
              let tmp4 = tmp2;
              let tmp5 = num;
              if (!(3 & num)) {
                tmp4 = toBitsResult[num / 4];
              }
              let _String = String;
              str = str + String.fromCharCode(tmp4 >>> 8 >>> 8 >>> 8);
              tmp2 = tmp4 << 8;
              num = num + 1;
              str2 = str;
            } while (num < bitLengthResult / 8);
          }
          return decodeURIComponent(escape(str2));
        },
        toBits(arg0) {
          const unescapeResult = unescape(encodeURIComponent(arg0));
          const items = [];
          let num = 0;
          let num2 = 0;
          let num3 = 0;
          let num4 = 0;
          if (0 < unescapeResult.length) {
            do {
              let tmp = num << 8 | unescapeResult.charCodeAt(num2);
              let tmp2 = num2;
              let num5 = tmp;
              if (!(3 & ~num2)) {
                let arr = items.push(tmp);
                num5 = 0;
              }
              num2 = num2 + 1;
              num = num5;
              num3 = num5;
              num4 = num2;
            } while (num2 < unescapeResult.length);
          }
          if (3 & num4) {
            const bitArray = obj.bitArray;
            items.push(bitArray.partial(8 * tmp4, num3));
          }
          return items;
        }
      };
      obj.codec.hex = {
        fromBits(toBitsResult) {
          let length;
          let str = "";
          let num = 0;
          let str2 = "";
          if (0 < toBitsResult.length) {
            do {
              let str3 = 263882790666240 + (toBitsResult[num] | 0);
              let str4 = str3.toString(16);
              str = `${str4.substr(4)}`;
              num = num + 1;
              str2 = str;
              length = toBitsResult.length;
            } while (num < length);
          }
          const bitArray = obj.bitArray;
          return str2.substr(0, bitArray.bitLength(toBitsResult) / 4);
        },
        toBits(str) {
          let length;
          const items = [];
          const replaced = str.replace(/\s|0x/g, "");
          let num = 0;
          if (0 < `${arr2}00000000`.length) {
            do {
              let _parseInt = parseInt;
              let arr = items.push(0 ^ parseInt(`${arr2}00000000`.substr(num, 8), 16));
              num = num + 8;
              length = `${arr2}00000000`.length;
            } while (num < length);
          }
          const bitArray = obj.bitArray;
          return bitArray.clamp(items, 4 * replaced.length);
        }
      };
      obj.hash.sha256 = function(u) {
        const self = this;
        if (!this.b[0]) {
          self.G();
        }
        if (u) {
          u = u.u;
          self.u = u.slice(0);
          const o = u.o;
          self.o = o.slice(0);
          self.h = u.h;
        } else {
          self.reset();
        }
      };
      obj.hash.sha256.hash = (arg0) => {
        const sha256 = new obj.hash.sha256();
        return sha256.update(arg0).finalize();
      };
      obj.hash.sha256.prototype = {
        blockSize: 512,
        reset() {
          const K = this.K;
          this.u = K.slice(0);
          this.o = [];
          this.h = 0;
          return this;
        },
        update(toBitsResult) {
          if (typeof toBitsResult === "string") {
            const utf8String = obj.codec.utf8String;
            toBitsResult = utf8String.toBits(toBitsResult);
          }
          const self = this;
          const bitArray = obj.bitArray;
          const combined = bitArray.concat(this.o, toBitsResult);
          this.o = combined;
          const h = this.h;
          const bitArray2 = obj.bitArray;
          const sum = h + bitArray2.bitLength(toBitsResult);
          this.h = sum;
          if (9007199254740991 < sum) {
            const invalid = new tmp2.exception.invalid("Cannot hash more than 2^53 - 1 bits");
            throw invalid;
          } else {
            const _Uint32Array2 = Uint32Array;
            if (typeof Uint32Array !== "undefined") {
              const _Uint32Array = Uint32Array;
              const uint32Array = new Uint32Array(combined);
              let diff = 512 + h - (512 + h & 511);
              let num6 = 0;
              let num7 = 0;
              if (diff <= sum) {
                do {
                  let tmp12 = u;
                  let sum1 = num6 + 1;
                  let tmp14 = u(self, uint32Array.subarray(16 * num6, 16 * sum1));
                  diff = diff + 512;
                  num6 = sum1;
                  num7 = sum1;
                } while (diff <= sum);
              }
              combined.splice(0, 16 * num7);
            } else {
              let diff1 = 512 + h - (512 + h & 511);
              if (diff1 <= sum) {
                do {
                  let tmp4 = u;
                  let tmp5 = u(self, combined.splice(0, 16));
                  diff1 = diff1 + 512;
                } while (diff1 <= sum);
              }
            }
            return self;
          }
          tmp2 = obj;
        },
        finalize() {
          let bitArray;
          let bitArray2;
          let length;
          let o;
          let tmp4;
          let u;
          const self = this;
          ({ bitArray, bitArray: bitArray2 } = obj);
          ({ o, u } = this);
          const items = [bitArray2.partial(1, 1)];
          const combined = bitArray.concat(o, items);
          let sum = combined.length + 2;
          if (15 & sum) {
            do {
              let arr = combined.push(0);
              let sum1 = sum + 1;
              sum = sum1;
              tmp4 = 15 & sum1;
            } while (tmp4);
          }
          combined.push(Math.floor(self.h / 4294967296));
          combined.push(self.h | 0);
          if (combined.length) {
            do {
              let tmp7 = u;
              let tmp8 = u(self, combined.splice(0, 16));
              length = combined.length;
            } while (length);
          }
          self.reset();
          return u;
        },
        K: [],
        b: [],
        G() {
          let sum1;
          const self = this;
          let num = 2;
          let num2 = 0;
          do {
            let tmp = num;
            let tmp2 = num2;
            let num3 = 2;
            let flag = true;
            if (4 <= num) {
              let tmp3 = num3;
              flag = false;
              while (0 !== num % num3) {
                let sum = num3 + 1;
                num3 = sum;
                flag = true;
                if (sum * sum > num) {
                  break;
                }
              }
            }
            sum1 = num2;
            if (flag) {
              if (num2 < 8) {
                let _Math = Math;
                let powResult = Math.pow(num, 0.5);
                let _Math2 = Math;
                self.K[num2] = 4294967296 * (powResult - Math.floor(powResult)) | 0;
              }
              let _Math3 = Math;
              let powResult1 = Math.pow(num, 0.3333333333333333);
              let _Math4 = Math;
              self.b[num2] = 4294967296 * (powResult1 - Math.floor(powResult1)) | 0;
              sum1 = num2 + 1;
            }
            num = num + 1;
            num2 = sum1;
          } while (sum1 < 64);
        }
      };
      obj.prng = (D) => {
        const obj = {};
        const sha256 = new obj.hash.sha256();
        const items = [sha256];
        obj.c = items;
        obj.i = [0];
        obj.H = 0;
        obj.v = {};
        obj.F = 0;
        obj.J = {};
        obj.T = 0;
        obj.j = 0;
        obj.f = 0;
        obj.L = 0;
        obj.b = [0, 0, 0, 0, 0, 0, 0, 0];
        obj.g = [0, 0, 0, 0];
        obj.C = undefined;
        obj.D = D;
        obj.s = false;
        obj.B = { progress: {}, seeded: {} };
        obj.S = 0;
        obj.m = 0;
        obj.w = 1;
        obj.A = 2;
        obj.O = 65536;
        obj.I = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024];
        obj.P = 30000;
        obj.N = 80;
      };
      obj.prng.prototype = {
        randomWords(arg0, arg1) {
          const self = this;
          const isReadyResult = this.isReady(arg1);
          if (isReadyResult === this.m) {
            const notReady = new obj.exception.notReady("generator isn't seeded");
            throw notReady;
          } else {
            if (isReadyResult & self.A) {
              const items = [];
              const _Date = Date;
              const date = new Date();
              const sum = date.valueOf() + self.P;
              items[0] = sum;
              self.L = sum;
              let num5 = 0;
              do {
                let _Math = Math;
                let arr = items.push(4294967296 * Math.random() | 0);
                num5 = num5 + 1;
              } while (num5 < 16);
              let num6 = 0;
              let tmp9 = items;
              if (0 < self.c.length) {
                const first = self.c[0];
                const combined = items.concat(first.finalize());
                const first1 = self.i[0];
                self.i[0] = 0;
                let tmp13 = first1;
                let num7 = 0;
                let obj3 = combined;
                if (!tmp2) {
                  const sum1 = num7 + 1;
                  num6 = tmp13;
                  tmp9 = obj3;
                  while (sum1 < self.c.length) {
                    let obj4 = self.c[sum1];
                    let combined1 = obj3.concat(obj4.finalize());
                    let sum2 = tmp13 + self.i[sum1];
                    self.i[sum1] = 0;
                    tmp13 = sum2;
                    num7 = sum1;
                    obj3 = combined1;
                    if (tmp10) {
                      continue;
                    } else {
                      tmp13 = sum2;
                      num7 = sum1;
                      obj3 = combined1;
                      num6 = sum2;
                      tmp9 = combined1;
                      if (self.H & 1 << sum1) {
                        break;
                      }
                    }
                    continue;
                  }
                } else {
                  tmp13 = first1;
                  num7 = 0;
                  obj3 = combined;
                  num6 = first1;
                  tmp9 = combined;
                }
              }
              if (self.H >= 1 << self.c.length) {
                const c = self.c;
                let sha256 = new obj.hash.sha256();
                c.push(sha256);
                const i = self.i;
                i.push(0);
              }
              self.f = self.f - num6;
              if (num6 > self.j) {
                self.j = num6;
              }
              self.H = self.H + 1;
              sha256 = obj.hash.sha256;
              const b = self.b;
              self.b = sha256.hash(b.concat(tmp9));
              const aes = new obj.cipher.aes(self.b);
              self.C = aes;
              self.g[0] = self.g[0] + 1 | 0;
              let num9 = 0;
              if (!self.g[0]) {
                const sum3 = num9 + 1;
                while (sum3 < 4) {
                  self.g[sum3] = self.g[sum3] + 1 | 0;
                  num9 = sum3;
                  if (self.g[sum3]) {
                    break;
                  }
                }
              }
              tmp2 = isReadyResult & self.w;
            }
            const items1 = [];
            for (let num13 = 0; num13 < arg0; num13 = num13 + 4) {
              let tmp33 = num13;
              if (0 === (num13 + 1) % self.O) {
                let tmp34 = y;
                let tmp35 = y(self);
              }
              self.g[0] = self.g[0] + 1 | 0;
              let num14 = 0;
              if (!self.g[0]) {
                let sum4 = num14 + 1;
                while (sum4 < 4) {
                  self.g[sum4] = self.g[sum4] + 1 | 0;
                  num14 = sum4;
                  if (self.g[sum4]) {
                    break;
                  }
                }
              }
              let C = self.C;
              let encryptResult = C.encrypt(self.g);
              let tmp38 = items1;
              let arr2 = items1.push(encryptResult[0], encryptResult[1], encryptResult[2], encryptResult[3]);
            }
            y(self);
            return items1.slice(0, arg0);
          }
        },
        setDefaultParanoia(D) {
          if (0 === D) {
            if ("Setting paranoia=0 will ruin your security; use it only for testing" !== arg1) {
              const invalid = new obj.exception.invalid("Setting paranoia=0 will ruin your security; use it only for testing");
              throw invalid;
            }
          }
          this.D = D;
        },
        addEntropy(_performance, arg1, loadtime) {
          let length2;
          let length3;
          let tmp16;
          let str = loadtime;
          if (!loadtime) {
            str = "user";
          }
          const self = this;
          const valueOfResult = new Date().valueOf();
          let num = this.v[str];
          let tmp3 = this.J[str];
          const date = new Date();
          if (undefined === tmp3) {
            self.T = +self.T + 1;
            self.J[str] = +self.T;
            tmp3 = tmp4;
          }
          if (undefined === num) {
            self.v[str] = 0;
            num = 0;
          }
          self.v[str] = (self.v[str] + 1) % self.c.length;
          if ("number" === typeof _performance) {
            let num16 = arg1;
            if (undefined === arg1) {
              num16 = 1;
            }
            const items = [tmp3, , , , , , ];
            self.F = +self.F + 1;
            items[1] = +self.F;
            items[2] = 1;
            items[3] = num16;
            items[4] = valueOfResult;
            items[5] = 1;
            let num3 = _performance | 0;
            items[6] = num3;
            self.c[num].update(items);
            let num4 = 0;
            let tmp9 = num16;
            const obj5 = self.c[num];
          } else if ("object" === tmp5) {
            const _Object = Object;
            const call = toString.call;
            const tmp10 = typeof call === "unknown" ? toString() : call(_performance);
            if ("[object Uint32Array]" === tmp10) {
              const items1 = [];
              let num10 = 0;
              num3 = 0;
              let arr1 = items1;
              if (0 < _performance.length) {
                do {
                  let arr = items1.push(_performance[num10]);
                  let sum = num10 + 1;
                  num10 = sum;
                  num3 = 0;
                  arr1 = items1;
                  tmp16 = sum < _performance.length;
                } while (tmp16);
              }
            } else {
              let num6 = 0;
              if ("[object Array]" !== tmp10) {
                num6 = 1;
              }
              num3 = num6;
              arr1 = _performance;
              if (0 < _performance.length) {
                let tmp13 = num6;
                let num8 = 0;
                arr1 = _performance;
                num3 = num6;
                if (!num6) {
                  while (true) {
                    let num7 = tmp13;
                    let tmp11 = num8;
                    if (typeof _performance[num8] !== "number") {
                      num7 = 1;
                    }
                    let sum1 = num8 + 1;
                    num3 = num7;
                    arr1 = _performance;
                    if (sum1 >= _performance.length) {
                      break;
                    } else {
                      tmp13 = num7;
                      num8 = sum1;
                      num3 = num7;
                      arr1 = _performance;
                      if (num7) {
                        break;
                      }
                    }
                  }
                }
              }
            }
            tmp9 = arg1;
            num4 = num3;
            if (!num3) {
              let num11 = arg1;
              if (undefined === arg1) {
                let num13 = 0;
                let num14 = 0;
                num11 = 0;
                if (0 < arr1.length) {
                  do {
                    let tmp17 = arr1[num13];
                    let tmp18 = num13;
                    let sum2 = num14;
                    let tmp20 = num14;
                    if (0 < tmp17) {
                      do {
                        sum2 = sum2 + 1;
                        tmp17 = tmp17 >>> 1;
                        tmp20 = sum2;
                      } while (0 < tmp17);
                    }
                    num13 = num13 + 1;
                    num14 = tmp20;
                    num11 = tmp20;
                  } while (num13 < arr1.length);
                }
              }
              const items2 = [tmp3, , , , , ];
              self.F = +self.F + 1;
              items2[1] = +self.F;
              items2[2] = 2;
              items2[3] = num11;
              items2[4] = valueOfResult;
              items2[5] = arr1.length;
              self.c[num].update(items2.concat(arr1));
              tmp9 = num11;
              num4 = num3;
              const obj4 = self.c[num];
            }
          } else {
            num4 = 1;
            tmp9 = arg1;
            if ("string" === tmp5) {
              let length = arg1;
              if (undefined === arg1) {
                length = _performance.length;
              }
              const items3 = [tmp3, , , , , ];
              self.F = +self.F + 1;
              items3[1] = +self.F;
              num3 = 3;
              items3[2] = 3;
              items3[3] = length;
              items3[4] = valueOfResult;
              items3[5] = _performance.length;
              self.c[num].update(items3);
              self.c[num].update(_performance);
              num4 = 0;
              tmp9 = length;
              const obj2 = self.c[num];
              const obj3 = self.c[num];
            }
          }
          if (num4) {
            const bug = new obj.exception.bug("random: addEntropy only supports number, array of numbers or string");
            throw bug;
          } else {
            const i = self.i;
            i[num] = i[num] + tmp9;
            self.f = self.f + tmp9;
            if (isReadyResult === self.m) {
              if (self.isReady() !== self.m) {
                const _Math = Math;
                const seeded = obj.random.B.seeded;
                const items4 = [];
                const bound = Math.max(self.j, self.f);
                for (const key10119 in seeded) {
                  let tmp40 = key10119;
                  if (!seeded.hasOwnProperty(key10119)) {
                    continue;
                  } else {
                    arr = items4.push(seeded[key10119]);
                    continue;
                  }
                  continue;
                }
                let num17 = 0;
                if (0 < items4.length) {
                  do {
                    let tmp26 = items4[num17](bound);
                    num17 = num17 + 1;
                    length2 = items4.length;
                  } while (num17 < length2);
                }
              }
              let progress = obj.random.B.progress;
              const items5 = [];
              progress = self.getProgress();
              for (const key10138 in progress) {
                let tmp41 = key10138;
                if (!progress.hasOwnProperty(key10138)) {
                  continue;
                } else {
                  arr1 = items5.push(progress[key10138]);
                  continue;
                }
                continue;
              }
              let num18 = 0;
              if (0 < items5.length) {
                do {
                  let tmp31 = items5[num18](progress);
                  num18 = num18 + 1;
                  length3 = items5.length;
                } while (num18 < length3);
              }
            }
          }
          isReadyResult = this.isReady();
        },
        isReady(arg0) {
          let A;
          let w;
          w = this;
          let D = arg0;
          if (undefined === arg0) {
            D = w.D;
          }
          if (w.j) {
            if (w.j >= tmp) {
              if (w.i[0] <= w.N) {
                const w2 = w.w;
              } else {
                const _Date = Date;
                const date = new Date();
              }
              ({ A, w } = w);
            }
          }
          if (w.f >= this.I[D]) {
            let m = w.A | w.m;
          } else {
            m = w.m;
          }
          return m;
        },
        getProgress(arg0) {
          const self = this;
          let D = arg0;
          if (!arg0) {
            D = self.D;
          }
          let num = 1;
          if (self.j < this.I[D]) {
            num = 1;
            if (self.f <= tmp) {
              num = self.f / tmp;
            }
          }
          return num;
        },
        startCollectors() {
          const self = this;
          if (!this.s) {
            const obj = { loadTimeCollector: null, mouseCollector: null, keyboardCollector: null, accelerometerCollector: null, touchCollector: null };
            let V = self.V;
            obj[0] = () => {
              const apply = closure_1.apply;
              if (typeof apply === "unknown") {
                HermesBuiltin.applyArguments(tmp2);
              } else {
                apply(tmp2, arguments);
              }
            };
            V = self.W;
            obj[1] = () => {
              const apply = closure_1.apply;
              if (typeof apply === "unknown") {
                HermesBuiltin.applyArguments(tmp2);
              } else {
                apply(tmp2, arguments);
              }
            };
            V = self.U;
            obj[2] = () => {
              const apply = closure_1.apply;
              if (typeof apply === "unknown") {
                HermesBuiltin.applyArguments(tmp2);
              } else {
                apply(tmp2, arguments);
              }
            };
            V = self.R;
            obj[3] = () => {
              const apply = closure_1.apply;
              if (typeof apply === "unknown") {
                HermesBuiltin.applyArguments(tmp2);
              } else {
                apply(tmp2, arguments);
              }
            };
            V = self.X;
            obj[4] = () => {
              const apply = closure_1.apply;
              if (typeof apply === "unknown") {
                HermesBuiltin.applyArguments(tmp2);
              } else {
                apply(tmp2, arguments);
              }
            };
            self.a = obj;
            let listener4 = globalThis;
            const _window = window;
            if (window.addEventListener) {
              const _window2 = listener4.window;
              const listener = _window2.addEventListener("load", self.a.loadTimeCollector, false);
              const _window3 = listener4.window;
              const listener1 = _window3.addEventListener("mousemove", self.a.mouseCollector, false);
              const _window4 = listener4.window;
              const listener2 = _window4.addEventListener("keypress", self.a.keyboardCollector, false);
              const _window5 = listener4.window;
              const listener3 = _window5.addEventListener("devicemotion", self.a.accelerometerCollector, false);
              const _window6 = listener4.window;
              listener4 = _window6.addEventListener("touchmove", self.a.touchCollector, false);
            } else {
              const _document = document;
              if (document.attachEvent) {
                const _document2 = document;
                document.attachEvent("onload", self.a.loadTimeCollector);
                const _document3 = document;
                document.attachEvent("onmousemove", self.a.mouseCollector);
                const _document4 = document;
                document.attachEvent("keypress", self.a.keyboardCollector);
              } else {
                const bug = new self.exception.bug("can't attach event");
                throw bug;
              }
            }
            self.s = true;
          }
        },
        stopCollectors() {
          const self = this;
          if (this.s) {
            let removed4 = globalThis;
            const _window = window;
            if (window.removeEventListener) {
              const _window2 = removed4.window;
              const removed = _window2.removeEventListener("load", self.a.loadTimeCollector, false);
              const _window3 = removed4.window;
              const removed1 = _window3.removeEventListener("mousemove", self.a.mouseCollector, false);
              const _window4 = removed4.window;
              const removed2 = _window4.removeEventListener("keypress", self.a.keyboardCollector, false);
              const _window5 = removed4.window;
              const removed3 = _window5.removeEventListener("devicemotion", self.a.accelerometerCollector, false);
              const _window6 = removed4.window;
              removed4 = _window6.removeEventListener("touchmove", self.a.touchCollector, false);
            } else {
              const _document = document;
              if (document.detachEvent) {
                const _document2 = document;
                document.detachEvent("onload", self.a.loadTimeCollector);
                const _document3 = document;
                document.detachEvent("onmousemove", self.a.mouseCollector);
                const _document4 = document;
                document.detachEvent("keypress", self.a.keyboardCollector);
              }
            }
            self.s = false;
          }
        },
        addEventListener(arg0, arg1) {
          this.S = +this.S + 1;
          this.B[arg0][+this.S] = arg1;
        },
        removeEventListener(arg0, arg1) {
          let length;
          const items = [];
          for (const key10008 in obj) {
            let tmp6 = key10008;
            let hasOwnPropertyResult = obj.hasOwnProperty(key10008);
            if (hasOwnPropertyResult) {
              hasOwnPropertyResult = obj[key10008] === arg1;
            }
            if (!hasOwnPropertyResult) {
              continue;
            } else {
              let arr = items.push(key10008);
              continue;
            }
            continue;
          }
          let num = 0;
          if (0 < items.length) {
            do {
              let tmp5 = items[num];
              delete tmp2[tmp];
              num = num + 1;
              length = items.length;
            } while (num < length);
          }
        },
        U() {
          const self = this;
          if (typeof window !== "undefined") {
            const _window3 = window;
            if (window.performance) {
              const _window = window;
              if (typeof window.performance.now === "function") {
                const _window2 = window;
                const _performance = window.performance;
                self.addEntropy(_performance.now(), 1, "loadtime");
              }
            }
          }
          self.addEntropy(new Date().valueOf(), 1, "loadtime");
        },
        W(arg0) {
          try {
            let num = arg0.x;
            if (!num) {
              num = arg0.clientX;
            }
            if (!num) {
              num = arg0.offsetX;
            }
            if (!num) {
              num = 0;
            }
            let num2 = num;
            let num3 = arg0.y;
            if (!num3) {
              num3 = arg0.clientY;
            }
            if (!num3) {
              num3 = arg0.offsetY;
            }
            if (!num3) {
              num3 = 0;
            }
            let num4 = num3;
            let tmp3 = 0 != num2;
            if (tmp3) {
              tmp3 = 0 != num4;
            }
            const self = this;
            if (tmp3) {
              const items = [num2, num4];
              self.addEntropy(items, 2, "mouse");
            }
            C(self, 0);
          } catch (err) {
            num2 = 0;
            num4 = 0;
          }
        },
        X(arg0) {
          const self = this;
          let clientX = tmp.pageX;
          if (!clientX) {
            clientX = tmp.clientX;
          }
          const items = [clientX, arg0.touches[0] || arg0.changedTouches[0].pageY || arg0.touches[0] || arg0.changedTouches[0].clientY];
          this.addEntropy(items, 1, "touch");
          if (typeof window !== "undefined") {
            const _window3 = window;
            if (window.performance) {
              const _window = window;
              if (typeof window.performance.now === "function") {
                const _window2 = window;
                const _performance = window.performance;
                self.addEntropy(_performance.now(), 0, "loadtime");
              }
            }
          }
          self.addEntropy(new Date().valueOf(), 0, "loadtime");
        },
        V() {
          const self = this;
          if (typeof window !== "undefined") {
            const _window3 = window;
            if (window.performance) {
              const _window = window;
              if (typeof window.performance.now === "function") {
                const _window2 = window;
                const _performance = window.performance;
                self.addEntropy(_performance.now(), 2, "loadtime");
              }
            }
          }
          self.addEntropy(new Date().valueOf(), 2, "loadtime");
        },
        R(accelerationIncludingGravity) {
          const self = this;
          if (window.orientation) {
            const _window = window;
            if (typeof orientation === "number") {
              self.addEntropy(orientation, 1, "accelerometer");
            }
          }
          if (accelerationIncludingGravity.accelerationIncludingGravity.x || accelerationIncludingGravity.accelerationIncludingGravity.y || accelerationIncludingGravity.accelerationIncludingGravity.z) {
            self.addEntropy(tmp, 2, "accelerometer");
          }
          if (typeof window !== "undefined") {
            const _window4 = window;
            if (window.performance) {
              const _window2 = window;
              if (typeof window.performance.now === "function") {
                const _window3 = window;
                const _performance = window.performance;
                self.addEntropy(_performance.now(), 0, "loadtime");
              }
            }
          }
          self.addEntropy(new Date().valueOf(), 0, "loadtime");
        }
      };
      const prng = new obj.prng(6);
      obj.random = prng;
      try {
        let _exports = undefined !== module;
        if (_exports) {
          _exports = module.exports;
        }
        if (!_exports) {
          if (_exports) {
            if (undefined.randomBytes) {
              let _Uint32Array = Uint32Array;
              const _Uint8Array = Uint8Array;
              const uint8Array = new Uint8Array(undefined.randomBytes(128));
              let uint32Array = new Uint32Array(uint8Array.buffer);
              const random2 = obj.random;
              random2.addEntropy(uint32Array, 1024, "crypto['randomBytes']");
            }
            let _exports2 = undefined !== module;
            if (_exports2) {
              _exports2 = module.exports;
            }
            if (_exports2) {
              module.exports = obj;
            }
          }
          let _window = window;
          if (typeof window !== "undefined") {
            let _Uint32Array2 = Uint32Array;
            if (typeof Uint32Array !== "undefined") {
              const _Uint32Array3 = Uint32Array;
              const uint32Array1 = new Uint32Array(32);
              const _window8 = window;
              if (window.crypto) {
                let _window2 = window;
                if (window.crypto.getRandomValues) {
                  let _window6 = window;
                  const _crypto = window.crypto;
                  const randomValues = _crypto.getRandomValues(tmp31);
                  const random = obj.random;
                  random.addEntropy(tmp31, 1024, "crypto['getRandomValues']");
                }
              }
              let _window3 = window;
              if (window.msCrypto) {
                let _window4 = window;
                if (window.msCrypto.getRandomValues) {
                  let _window5 = window;
                  const randomValues1 = msCrypto.getRandomValues(tmp31);
                }
              }
            }
          }
        } else {
          try {
            let globalResult = global("crypto");
          } catch (err) {
            globalResult = null;
          }
        }
      } catch (tmp24) {
        const _window7 = window;
        let _console = typeof window !== "undefined";
        if (typeof window !== "undefined") {
          const _window9 = window;
          _console = window.console;
        }
        if (_console) {
          const _console2 = console;
          console.log("There was an error collecting entropy from the browser:");
          const _console3 = console;
          console.log(tmp24);
        }
      }
    },
    { crypto: "title" }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let obj = { FASTLANE_SDK_LOAD_ERROR: null };
      obj = { type: global("../lib/braintree-error").types.MERCHANT, code: "FASTLANE_SDK_LOAD_ERROR" };
      obj[0] = obj;
      module.exports = obj;
    },
    { "../lib/braintree-error": 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("./errors");
      const loadFastlane = global("../lib/assets").loadFastlane;
      const assign = global("../lib/assign").assign;
      module.exports = global("@braintree/wrap-promise")(function fastlane(arg0) {
        let client;
        let client2;
        let closure_0 = arg0;
        ({ client, client: client2 } = arg0);
        const configuration = client.getConfiguration();
        let flag = true;
        const version = client2.getVersion();
        if ("production" !== configuration.gatewayConfiguration.environment) {
          flag = false;
        }
        const promise = loadFastlane(assign({ platform: "BT", btSdkVersion: version, minified: flag }, arg0));
        return loadFastlane(assign({ platform: "BT", btSdkVersion: version, minified: flag }, arg0)).then((metadata) => {
          const platformOptions = { platform: "BT", authorization: closure_0.authorization, client: closure_0.client, deviceData: closure_0.deviceData };
          delete tmp2[tmp];
          delete tmp2[tmp];
          delete tmp2[tmp];
          delete tmp2[tmp];
          delete tmp2[tmp];
          return fastlane.create(outer1_3({ platformOptions }, closure_0, metadata.metadata));
        }).catch((message) => Promise.reject(new closure_0({ type: constants.FASTLANE_SDK_LOAD_ERROR.type, code: constants.FASTLANE_SDK_LOAD_ERROR.code, message: message.message })));
      });
    },
    { "../lib/assets": 139, "../lib/assign": 140, "../lib/braintree-error": 143, "./errors": 117, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/basic-component-verification");
      let closure_1 = global("./fastlane");
      let closure_2 = global("../lib/create-assets-url");
      let closure_3 = global("../lib/create-deferred-client");
      const assign = global("../lib/assign").assign;
      const globalResult = global("@braintree/wrap-promise");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          const obj = { name: "fastlane", client: client.client, authorization: client.authorization };
          const verifyResult = closure_0.verify({ name: "fastlane", client: client.client, authorization: client.authorization });
          return closure_0.verify({ name: "fastlane", client: client.client, authorization: client.authorization }).then(() => outer1_3.create({ authorization: client.authorization, client: client.client, assetsUrl: outer1_2.create(client.authorization), name: "fastlane" })).then((client) => outer1_1(outer1_4({ client, deviceData: client.deviceData }, client)));
        }),
        VERSION: "3.112.1"
      };
    },
    { "../lib/assign": 140, "../lib/basic-component-verification": 141, "../lib/create-assets-url": 148, "../lib/create-deferred-client": 150, "./fastlane": 118, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT, code: "GOOGLE_PAYMENT_NOT_ENABLED", message: "Google Pay is not enabled for this merchant." };
      obj = { code: "GOOGLE_PAYMENT_GATEWAY_ERROR", message: "There was an error when tokenizing the Google Pay payment method.", type: globalResult.types.UNKNOWN };
      obj = { code: "GOOGLE_PAYMENT_UNSUPPORTED_VERSION", type: globalResult.types.MERCHANT };
      module.exports = { GOOGLE_PAYMENT_NOT_ENABLED: obj, GOOGLE_PAYMENT_GATEWAY_ERROR: obj, GOOGLE_PAYMENT_UNSUPPORTED_VERSION: obj };
    },
    { "../lib/braintree-error": 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class GooglePayment {
        constructor(arg0) {
          obj = { _createPromise: global.createPromise, _client: global.client, _useDeferredClient: global.useDeferredClient, _googlePayVersion: tmp, _googleMerchantId: global.googleMerchantId };
          tmp = global.googlePayVersion || 1;
          if (obj._isUnsupportedGooglePayAPIVersion()) {
            tmp2 = c5;
            obj = { code: null, message: null, type: null };
            tmp3 = c6;
            obj[0] = c6.GOOGLE_PAYMENT_UNSUPPORTED_VERSION.code;
            str = "The Braintree SDK does not support Google Pay version ";
            str2 = ". Please upgrade the version of your Braintree SDK and contact support if this error persists.";
            obj[1] = `The Braintree SDK does not support Google Pay version ${obj._googlePayVersion}. Please upgrade the version of your Braintree SDK and contact support if this error persists.`;
            obj[2] = c6.GOOGLE_PAYMENT_UNSUPPORTED_VERSION.type;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = obj;
            tmp7 = new c5(obj);
            tmp8 = tmp7;
            throw tmp7;
          } else {
            return;
          }
        }
        _waitForClient() {
          self = this;
          if (this._client) {
            tmp2 = globalThis;
            _Promise = Promise;
            resolved = Promise.resolve();
          } else {
            _createPromise = self._createPromise;
            fn = () => { ... };
            resolved = _createPromise.then(fn.bind(self));
          }
          return resolved;
        }
        _isUnsupportedGooglePayAPIVersion() {
          return !(this._googlePayVersion in closure_8);
        }
        _getDefaultConfig() {
          self = this;
          if (!this._defaultConfig) {
            tmp = c4;
            _client = self._client;
            self._defaultConfig = c4(_client.getConfiguration(), self._googlePayVersion, self._googleMerchantId);
          }
          return self._defaultConfig;
        }
        _createV1PaymentDataRequest(arg0) {
          _getDefaultConfigResult = this._getDefaultConfig();
          tmp2 = global.cardRequirements && global.cardRequirements.allowedCardNetworks || _getDefaultConfigResult.cardRequirements.allowedCardNetworks;
          tmp3 = assign({}, _getDefaultConfigResult, global);
          tmp3.cardRequirements.allowedCardNetworks = tmp2;
          return tmp3;
        }
        _createV2PaymentDataRequest(arg0) {
          _getDefaultConfigResult = this._getDefaultConfig();
          self = _getDefaultConfigResult;
          if (global.allowedPaymentMethods) {
            prop = global.allowedPaymentMethods;
            item = prop.forEach(() => { ... });
          }
          return assign({}, _getDefaultConfigResult, global);
        }
        createPaymentDataRequest(arg0) {
          self = this;
          closure_0 = global;
          if (this._useDeferredClient) {
            _waitForClientResult = self._waitForClient();
            fn = () => { ... };
            nextPromise = _waitForClientResult.then(fn.bind(self));
          } else {
            nextPromise = self._createPaymentDataRequestSyncronously(global);
          }
          return nextPromise;
        }
        _createPaymentDataRequestSyncronously(arg0) {
          self = this;
          tmp = assign({}, global);
          _googlePayVersion = this._googlePayVersion;
          totalPrice = tmp.transactionInfo;
          if (totalPrice) {
            totalPrice = tmp.transactionInfo.totalPrice;
          }
          if (totalPrice) {
            str = tmp.transactionInfo.totalPrice;
            tmp.transactionInfo.totalPrice = str.toString();
          }
          sendEventResult = c0.sendEvent(self._createPromise, `google-payment.v${_googlePayVersion}.createPaymentDataRequest`);
          return self[closure_8[_googlePayVersion]](tmp);
        }
        parseResponse(arg0) {
          closure_0 = global;
          self = this;
          resolved = Promise.resolve();
          nextPromise = resolved.then(() => { ... });
          return nextPromise.catch(() => { ... });
        }
        teardown() {
          tmp = c2(this, c7(GooglePayment.prototype));
          return Promise.resolve();
        }
      }
      let closure_0 = global("../lib/analytics");
      const assign = global("../lib/assign").assign;
      let closure_2 = global("../lib/convert-methods-to-error");
      let closure_3 = global("../lib/find");
      let closure_4 = global("../lib/generate-google-pay-configuration");
      let closure_5 = global("../lib/braintree-error");
      let closure_6 = global("./errors");
      let closure_7 = global("../lib/methods");
      let closure_8 = { 1: "_createV1PaymentDataRequest", 2: "_createV2PaymentDataRequest" };
      module.exports = global("@braintree/wrap-promise").wrapPrototype(GooglePayment);
    },
    { "../lib/analytics": 138, "../lib/assign": 140, "../lib/braintree-error": 143, "../lib/convert-methods-to-error": 146, "../lib/find": 156, "../lib/generate-google-pay-configuration": 168, "../lib/methods": 175, "./errors": 120, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./google-payment");
      let closure_1 = global("../lib/braintree-error");
      let closure_2 = global("../lib/create-assets-url");
      let closure_3 = global("../lib/create-deferred-client");
      let closure_4 = global("../lib/basic-component-verification");
      let closure_5 = global("./errors");
      const globalResult = global("@braintree/wrap-promise");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          return closure_4.verify({ name: "Google Pay", client: client.client, authorization: client.authorization }).then(() => {
            let obj = { authorization: client.authorization, client: client.client, debug: client.debug, assetsUrl: outer1_2.create(client.authorization), name: "Google Pay" };
            obj = outer1_3.create(obj);
            const nextPromise = obj.then((client) => {
              let rejectResult = client;
              closure_0.client = client;
              if (!client.getConfiguration().gatewayConfiguration.androidPay) {
                const tmp7 = new outer1_1(outer1_5.GOOGLE_PAYMENT_NOT_ENABLED);
                rejectResult = Promise.reject(tmp7);
              }
              return rejectResult;
            });
            client.createPromise = nextPromise;
            const tmp = new client(client);
            let nextPromise1 = tmp;
            client = tmp;
            if (!client.useDeferredClient) {
              nextPromise1 = nextPromise.then((_client) => {
                closure_0._client = _client;
                return closure_0;
              });
            }
            return nextPromise1;
          });
        }),
        VERSION: "3.112.1"
      };
    },
    { "../lib/basic-component-verification": 141, "../lib/braintree-error": 143, "../lib/create-assets-url": 148, "../lib/create-deferred-client": 150, "./errors": 120, "./google-payment": 121, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../../lib/braintree-error");
      let closure_1 = global("../shared/errors");
      const allowedAttributes = global("../shared/constants").allowedAttributes;
      module.exports = function attributeValidationError(key10009, str) {
        if (allowedAttributes.hasOwnProperty(key10009)) {
          if (null == str) {
            if (!tmp10) {
              let obj = { type: null, code: null, message: null };
              obj[0] = constants.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.type;
              obj[1] = constants.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.code;
              obj[2] = `Value "${str}" is not allowed for "${key10009}" attribute.`;
              let tmp7 = new closure_0(obj);
            }
          } else if ("string" === tmp[key10009]) {
            let tmp13 = typeof str === "string";
            if (typeof str !== "string") {
              tmp13 = typeof str === "number";
            }
            let flag = tmp13;
          } else {
            flag = false;
            if ("boolean" === tmp[key10009]) {
              const _String = String;
              let tmp12 = "true" === String(str);
              if (!tmp12) {
                const _String2 = String;
                tmp12 = "false" === String(str);
              }
              flag = tmp12;
            }
          }
        } else {
          obj = { type: null, code: null, message: null };
          obj[0] = constants.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.type;
          obj[1] = constants.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.code;
          obj[2] = `The "${key10009}" attribute is not supported in Hosted Fields.`;
          tmp7 = new closure_0(obj);
        }
        return tmp7;
      };
    },
    { "../../lib/braintree-error": 143, "../shared/constants": 131, "../shared/errors": 132 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../shared/constants");
      let closure_1 = global("../../lib/use-min");
      module.exports = function composeUrl(arg0, arg1, arg2) {
        const text = `${arg0}/web/${closure_0.VERSION}`;
        return text + "/html/hosted-fields-frame" + callback(arg2) + ".html#" + arg1;
      };
    },
    { "../../lib/use-min": 181, "../shared/constants": 131 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const navigationDirections = global("../shared/constants").navigationDirections;
      let closure_1 = global("../shared/browser-detection");
      let closure_2 = global("../shared/focus-intercept");
      let closure_3 = global("../shared/find-parent-tags");
      let closure_4 = ["INPUT", "SELECT", "TEXTAREA"];
      let closure_5 = ["hidden", "button", "reset", "submit", "checkbox", "radio", "file"];
      module.exports = {
        removeExtraFocusElements(first, fn) {
          let closure_0 = fn;
          const call = slice.call;
          const elements = first.elements;
          const arr = typeof call === "unknown" ? slice() : call(elements);
          let num = 0;
          let tmp = null;
          if (0 < arr.length) {
            while (true) {
              let tmp2 = arr[num];
              let tmp3 = closure_1;
              let tmp4 = num;
              if (closure_1.hasSoftwareKeyboard()) {
                let tmp6 = closure_4;
                let tmp7 = closure_4.indexOf(tmp2.tagName) > -1;
                if (tmp7) {
                  let tmp8 = closure_5;
                  tmp7 = closure_5.indexOf(tmp2.type) < 0;
                }
                let tmp5 = tmp7;
              } else {
                tmp5 = "hidden" !== tmp2.type;
              }
              tmp = tmp2;
              if (tmp5) {
                break;
              } else {
                let sum = num + 1;
                num = sum;
                tmp = null;
                if (sum >= arr.length) {
                  break;
                }
              }
            }
          }
          const items = [tmp, ];
          const reversed = arr.reverse();
          let num2 = 0;
          let tmp10 = null;
          if (0 < reversed.length) {
            while (true) {
              let tmp11 = reversed[num2];
              let tmp12 = closure_1;
              let tmp13 = num2;
              if (closure_1.hasSoftwareKeyboard()) {
                let tmp15 = closure_4;
                let tmp16 = closure_4.indexOf(tmp11.tagName) > -1;
                if (tmp16) {
                  let tmp17 = closure_5;
                  tmp16 = closure_5.indexOf(tmp11.type) < 0;
                }
                let tmp14 = tmp16;
              } else {
                tmp14 = "hidden" !== tmp11.type;
              }
              tmp10 = tmp11;
              if (tmp14) {
                break;
              } else {
                let sum1 = num2 + 1;
                num2 = sum1;
                tmp10 = null;
                if (sum1 >= reversed.length) {
                  break;
                }
              }
            }
          }
          items[1] = tmp10;
          const item = items.forEach((getAttribute) => {
            let matchFocusElementResult = getAttribute;
            if (getAttribute) {
              matchFocusElementResult = outer1_2.matchFocusElement(getAttribute.getAttribute("id"));
            }
            if (matchFocusElementResult) {
              callback(getAttribute.getAttribute("id"));
            }
          });
        },
        createFocusChangeHandler(arg0, arg1) {
          let closure_0 = arg0;
          let closure_1 = arg1;
          return (direction) => {
            const element = document.getElementById(`bt-${direction.field}-${direction.direction}-${length}`);
            if (element) {
              const first = outer1_3(element, "form")[0];
              const _document = document;
              if (document.forms.length >= 1) {
                if (first) {
                  const slice = [].slice;
                  const call = slice.call;
                  const elements = first.elements;
                  const arr = typeof call === "unknown" ? slice() : call(elements);
                  const index = arr.indexOf(element);
                  direction = direction.direction;
                  if (constants.BACK === direction) {
                    let obj = { checkIndexBounds: null, indexChange: -1 };
                    obj[0] = function checkIndexBounds(arg0) {
                      return arg0 < 0;
                    };
                  } else if (tmp5.FORWARD !== direction) {
                    obj = {};
                  }
                  obj = { checkIndexBounds: null, indexChange: 1 };
                  obj[0] = function checkIndexBounds(arg0) {
                    return arg0 > length - 1;
                  };
                  length = arr.length;
                }
              }
              const result = closure_1.onRemoveFocusIntercepts();
            }
          };
        }
      };
    },
    { "../shared/browser-detection": 130, "../shared/constants": 131, "../shared/find-parent-tags": 133, "../shared/focus-intercept": 134 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let allowedStyles = global("../shared/constants").allowedStyles;
      module.exports = function getStylesFromClass(str) {
        const element = <input />;
        const obj = {};
        let substr = str;
        if ("." === str[0]) {
          substr = str.substring(1);
        }
        element.className = substr;
        element.style.display = "none !important";
        element.style.position = "fixed !important";
        element.style.left = "-99999px !important";
        element.style.top = "-99999px !important";
        body.appendChild(element);
        const allowedStyles = window.getComputedStyle(element);
        const item = allowedStyles.forEach((arg0) => {
          if (table[arg0]) {
            obj[arg0] = tmp;
          }
        });
        body2.removeChild(element);
        return obj;
      };
    },
    { "../shared/constants": 131 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class HostedFields {
        constructor(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          obj = {};
          c4 = obj;
          framebus = {};
          items = [];
          c6 = items;
          tmp = c13();
          c7 = tmp;
          sessionId = global.sessionId;
          this._merchantConfigurationOptions = closure_0({}, global);
          if (global.client) {
            client = global.client;
            configuration = client.getConfiguration(undefined, sessionId);
            assetsUrl = configuration.gatewayConfiguration.assetsUrl;
            isDebug = configuration.isDebug;
          } else {
            tmp2 = f115788;
            tmp4 = globalThis;
            _Boolean = Boolean;
            obj = f115788.create(global.authorization);
            isDebug = Boolean(global.isDebug);
            assetsUrl = obj;
          }
          obj1 = { client: global.client, authorization: global.authorization, debug: isDebug, assetsUrl, name: "Hosted Fields", sessionId };
          self._clientPromise = c6.create(obj1);
          authorization = c8(assetsUrl, tmp, isDebug);
          if (global.fields) {
            tmp6 = globalThis;
            _Object = Object;
            num = 0;
            if (0 !== Object.keys(global.fields).length) {
              tmp42 = closure_17;
              call = closure_17.call;
              if (typeof call === "unknown") {
                tmp42Result = tmp42();
              } else {
                callResult = call(self);
              }
              self._injectedNodes = [];
              tmp8 = self;
              tmp9 = new.target;
              tmp10 = new.target;
              tmp11 = new self();
              tmp12 = tmp11;
              self._destructor = tmp11;
              self._fields = obj;
              obj2 = { fields: null, cards: null };
              obj2[0] = {};
              tmp13 = c26;
              str = "";
              obj2[1] = c26("");
              self._state = obj2;
              tmp14 = framebus;
              obj3 = { channel: null, verifyDomain: null, targetFrames: null };
              obj3[0] = tmp;
              tmp15 = authorization;
              obj3[1] = authorization;
              _window = window;
              items1 = [];
              items1[0] = window;
              obj3[2] = items1;
              tmp16 = new.target;
              tmp17 = new.target;
              tmp18 = obj3;
              tmp19 = new framebus(obj3);
              tmp20 = tmp19;
              self._bus = tmp19;
              _destructor = self._destructor;
              result = _destructor.registerFunctionForTeardown(() => { ... });
              tmp22 = c19;
              sendEvent = c19.sendEvent;
              _clientPromise = self._clientPromise;
              if (global.client) {
                str3 = "custom.hosted-fields.initialized";
                sendEventResult = sendEvent(_clientPromise, "custom.hosted-fields.initialized");
              } else {
                str2 = "custom.hosted-fields.initialized.deferred-client";
                sendEventResult1 = sendEvent(_clientPromise, "custom.hosted-fields.initialized.deferred-client");
              }
              _Object2 = Object;
              keys = Object.keys(global.fields);
              fn = () => { ... };
              item = keys.forEach(fn.bind(self));
              if (self._merchantConfigurationOptions.styles) {
                _Object3 = Object;
                keys1 = Object.keys(self._merchantConfigurationOptions.styles);
                item1 = keys1.forEach(() => { ... });
              }
              _bus = self._bus;
              tmp27 = events;
              onResult = _bus.on(events.REMOVE_FOCUS_INTERCEPTS, () => { ... });
              _bus2 = self._bus;
              tmp29 = c28;
              obj4 = { onRemoveFocusIntercepts: null, onTriggerInputFocus: null };
              obj4[0] = function onRemoveFocusIntercepts() { ... };
              obj4[1] = function onTriggerInputFocus() { ... };
              onResult1 = _bus2.on(events.TRIGGER_FOCUS_CHANGE, c28.createFocusChangeHandler(tmp, obj4));
              _bus3 = self._bus;
              onResult2 = _bus3.on(events.READY_FOR_CLIENT, () => { ... });
              _bus4 = self._bus;
              onResult3 = _bus4.on(events.CARD_FORM_ENTRY_HAS_BEGUN, () => { ... });
              _bus5 = self._bus;
              onResult4 = _bus5.on(events.BIN_AVAILABLE, () => { ... });
              _setTimeout = setTimeout;
              tmp34 = INTEGRATION_TIMEOUT_MS;
              f115788 = setTimeout(() => { ... }, INTEGRATION_TIMEOUT_MS);
              _Promise = Promise;
              allPromises = Promise.all(items);
              nextPromise = allPromises.then(() => { ... });
              _bus6 = self._bus;
              onResult5 = _bus6.on(events.FRAME_READY, () => { ... });
              _bus7 = self._bus;
              closure_0 = obj;
              fn2 = () => { ... };
              onResult6 = _bus7.on(events.INPUT_EVENT, fn2.bind(self));
              _destructor2 = self._destructor;
              result1 = _destructor2.registerFunctionForTeardown(() => { ... });
              _destructor3 = self._destructor;
              result2 = _destructor3.registerFunctionForTeardown(() => { ... });
              _destructor4 = self._destructor;
              result3 = _destructor4.registerFunctionForTeardown(() => { ... });
              return;
            }
          }
          obj5 = { type: c25.INSTANTIATION_OPTION_REQUIRED.type, code: c25.INSTANTIATION_OPTION_REQUIRED.code, message: "options.fields is required when instantiating Hosted Fields." };
          tmp41 = new c7(obj5);
          throw tmp41;
        }
        _setupLabelFocus(arg0, arg1) {
          closure_0 = global;
          triggerFocus = function triggerFocus() { ... };
          self = this;
          obj = c23(module);
          if (null != module.id) {
            tmp11 = globalThis;
            _Array2 = Array;
            slice2 = Array.prototype.slice;
            call2 = slice2.call;
            _document2 = document;
            str3 = "label[for=\"";
            str4 = "\"]";
            elements = document.querySelectorAll(`label[for="${module.id}"]`);
            obj2 = typeof call2 === "unknown" ? slice2() : call2(elements);
            call = obj2;
            _document = document;
            tmp = obj2;
            if (obj === document) {
              tmp5 = c14;
              str = "label";
              combined = obj2.concat(c14(module, "label"));
              call = combined;
              found = combined.filter(() => { ... });
              call = found;
              num = 0;
              c2 = 0;
              flag = false;
              str2 = "click";
              if (0 < found.length) {
                do {
                  tmp6 = c2;
                  obj3 = found[c2];
                  listener = obj3.addEventListener("click", triggerFocus, false);
                  tmp8 = c2;
                  sum = c2 + 1;
                  c2 = sum;
                  length = found.length;
                } while (sum < length);
              }
              _destructor = this._destructor;
              result = _destructor.registerFunctionForTeardown(() => { ... });
            } else {
              _Array = Array;
              slice = Array.prototype.slice;
              call = slice.call;
              elements1 = obj.querySelectorAll(`label[for="${module.id}"]`);
              combined1 = obj2.concat(typeof call === "unknown" ? slice() : call(elements1));
              call = combined1;
              tmp4 = combined1;
            }
          }
          return;
        }
        _getAnyFieldContainer() {
          self = this;
          keys = Object.keys(this._fields);
          return keys.reduce(() => { ... }, null);
        }
        _cleanUpFocusIntercepts() {
          self = this;
          if (document.forms.length < 1) {
            _bus2 = self._bus;
            tmp7 = events;
            emitResult = _bus2.emit(events.REMOVE_FOCUS_INTERCEPTS);
          } else {
            tmp = c14;
            str = "form";
            first = c14(self._getAnyFieldContainer(), "form")[0];
            if (first) {
              tmp5 = c28;
              fn = () => { ... };
              result = c28.removeExtraFocusElements(first, fn.bind(self));
            } else {
              _bus = self._bus;
              tmp3 = events;
              emitResult1 = _bus.emit(events.REMOVE_FOCUS_INTERCEPTS);
            }
          }
          return;
        }
        _attachInvalidFieldContainersToError(arg0) {
          closure_0 = global;
          tmp = global.details && global.details.invalidFieldKeys;
          if (tmp) {
            num = 0;
            tmp = global.details.invalidFieldKeys.length > 0;
          }
          if (tmp) {
            self = this;
            global.details.invalidFields = {};
            invalidFieldKeys = global.details.invalidFieldKeys;
            fn = () => { ... };
            item = invalidFieldKeys.forEach(fn.bind(this));
          }
          return;
        }
        getChallenges() {
          _clientPromise = this._clientPromise;
          return _clientPromise.then(() => { ... });
        }
        getSupportedCardTypes() {
          _clientPromise = this._clientPromise;
          return _clientPromise.then(() => { ... });
        }
        teardown() {
          self = this;
          promise = new Promise(() => { ... });
          return promise;
        }
        tokenize(arg0) {
          closure_0 = global;
          self = this;
          if (!global) {
            closure_0 = {};
          }
          promise = new Promise(() => { ... });
          return promise;
        }
        addClass(arg0, arg1) {
          if (allowedFields.hasOwnProperty(global)) {
            _fields = this._fields;
            self = this;
            if (_fields.hasOwnProperty(global)) {
              tmp12 = module;
              _bus = self._bus;
              tmp13 = events;
              obj = { field: null, classname: null };
              obj[0] = global;
              obj[1] = module;
              emitResult = _bus.emit(events.ADD_CLASS, obj);
            } else {
              tmp7 = c7;
              obj1 = { type: null, code: null, message: null };
              tmp8 = c11;
              obj1[0] = c11.HOSTED_FIELDS_FIELD_NOT_PRESENT.type;
              obj1[1] = c11.HOSTED_FIELDS_FIELD_NOT_PRESENT.code;
              str3 = "Cannot add class to \"";
              str4 = "\" field because it is not part of the current Hosted Fields options.";
              obj1[2] = `Cannot add class to "${global}" field because it is not part of the current Hosted Fields options.`;
              tmp9 = new.target;
              tmp10 = new.target;
              tmp11 = obj1;
              tmp6 = new c7(obj1);
            }
          } else {
            tmp = c7;
            obj = { type: null, code: null, message: null };
            tmp2 = c11;
            obj[0] = c11.HOSTED_FIELDS_FIELD_INVALID.type;
            obj[1] = c11.HOSTED_FIELDS_FIELD_INVALID.code;
            str = "\"";
            str2 = "\" is not a valid field. You must use a valid field option when adding a class.";
            obj[2] = `"${global}" is not a valid field. You must use a valid field option when adding a class.`;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp5 = obj;
            tmp6 = new c7(obj);
          }
          _Promise = Promise;
          if (tmp6) {
            rejectResult = _Promise.reject(tmp6);
          } else {
            rejectResult = _Promise.resolve();
          }
          return rejectResult;
        }
        removeClass(arg0, arg1) {
          if (allowedFields.hasOwnProperty(global)) {
            _fields = this._fields;
            self = this;
            if (_fields.hasOwnProperty(global)) {
              tmp12 = module;
              _bus = self._bus;
              tmp13 = events;
              obj = { field: null, classname: null };
              obj[0] = global;
              obj[1] = module;
              emitResult = _bus.emit(events.REMOVE_CLASS, obj);
            } else {
              tmp7 = c7;
              obj1 = { type: null, code: null, message: null };
              tmp8 = c11;
              obj1[0] = c11.HOSTED_FIELDS_FIELD_NOT_PRESENT.type;
              obj1[1] = c11.HOSTED_FIELDS_FIELD_NOT_PRESENT.code;
              str3 = "Cannot remove class from \"";
              str4 = "\" field because it is not part of the current Hosted Fields options.";
              obj1[2] = `Cannot remove class from "${global}" field because it is not part of the current Hosted Fields options.`;
              tmp9 = new.target;
              tmp10 = new.target;
              tmp11 = obj1;
              tmp6 = new c7(obj1);
            }
          } else {
            tmp = c7;
            obj = { type: null, code: null, message: null };
            tmp2 = c11;
            obj[0] = c11.HOSTED_FIELDS_FIELD_INVALID.type;
            obj[1] = c11.HOSTED_FIELDS_FIELD_INVALID.code;
            str = "\"";
            str2 = "\" is not a valid field. You must use a valid field option when removing a class.";
            obj[2] = `"${global}" is not a valid field. You must use a valid field option when removing a class.`;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp5 = obj;
            tmp6 = new c7(obj);
          }
          _Promise = Promise;
          if (tmp6) {
            rejectResult = _Promise.reject(tmp6);
          } else {
            rejectResult = _Promise.resolve();
          }
          return rejectResult;
        }
        setAttribute(arg0) {
          if (allowedFields.hasOwnProperty(global.field)) {
            _fields = this._fields;
            self = this;
            if (_fields.hasOwnProperty(global.field)) {
              tmp12 = c27;
              tmp6 = c27(global.attribute, global.value);
              if (!tmp6) {
                _bus = self._bus;
                tmp13 = events;
                obj = { field: null, attribute: null, value: null };
                ({ field: obj3[0], attribute: obj3[1], value: obj3[2] } = global);
                emitResult = _bus.emit(events.SET_ATTRIBUTE, obj);
              }
            } else {
              tmp7 = c7;
              obj1 = { type: null, code: null, message: null };
              tmp8 = c11;
              obj1[0] = c11.HOSTED_FIELDS_FIELD_NOT_PRESENT.type;
              obj1[1] = c11.HOSTED_FIELDS_FIELD_NOT_PRESENT.code;
              str3 = "Cannot set attribute for \"";
              str4 = "\" field because it is not part of the current Hosted Fields options.";
              obj1[2] = `Cannot set attribute for "${global.field}" field because it is not part of the current Hosted Fields options.`;
              tmp9 = new.target;
              tmp10 = new.target;
              tmp11 = obj1;
              tmp6 = new c7(obj1);
            }
          } else {
            tmp = c7;
            obj = { type: null, code: null, message: null };
            tmp2 = c11;
            obj[0] = c11.HOSTED_FIELDS_FIELD_INVALID.type;
            obj[1] = c11.HOSTED_FIELDS_FIELD_INVALID.code;
            str = "\"";
            str2 = "\" is not a valid field. You must use a valid field option when setting an attribute.";
            obj[2] = `"${global.field}" is not a valid field. You must use a valid field option when setting an attribute.`;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp5 = obj;
            tmp6 = new c7(obj);
          }
          _Promise = Promise;
          if (tmp6) {
            rejectResult = _Promise.reject(tmp6);
          } else {
            rejectResult = _Promise.resolve();
          }
          return rejectResult;
        }
        setMonthOptions(arg0) {
          closure_0 = global;
          self = this;
          fields = this._merchantConfigurationOptions.fields;
          str = "Expiration month field must exist to use setMonthOptions.";
          if (fields.expirationMonth) {
            if (!fields.expirationMonth.select) {
              str = "Expiration month field must be a select element.";
            }
          }
          _Promise = Promise;
          if (str) {
            tmp4 = c7;
            obj = { type: null, code: null, message: null };
            tmp5 = c11;
            obj[0] = c11.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type;
            obj[1] = c11.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code;
            obj[2] = str;
            tmp6 = new.target;
            tmp7 = new.target;
            tmp8 = obj;
            tmp9 = new c7(obj);
            tmp10 = tmp9;
            rejectResult = _Promise.reject(tmp9);
          } else {
            tmp = new.target;
            tmp2 = new.target;
            rejectResult = new _Promise(() => { ... });
          }
          return rejectResult;
        }
        setMessage(arg0) {
          _bus = this._bus;
          obj = { field: global.field, message: global.message };
          emitResult = _bus.emit(events.SET_MESSAGE, obj);
          return;
        }
        removeAttribute(arg0) {
          if (allowedFields.hasOwnProperty(global.field)) {
            _fields = this._fields;
            self = this;
            if (_fields.hasOwnProperty(global.field)) {
              tmp12 = c27;
              tmp6 = c27(global.attribute);
              if (!tmp6) {
                _bus = self._bus;
                tmp13 = events;
                obj = { field: null, attribute: null };
                ({ field: obj3[0], attribute: obj3[1] } = global);
                emitResult = _bus.emit(events.REMOVE_ATTRIBUTE, obj);
              }
            } else {
              tmp7 = c7;
              obj1 = { type: null, code: null, message: null };
              tmp8 = c11;
              obj1[0] = c11.HOSTED_FIELDS_FIELD_NOT_PRESENT.type;
              obj1[1] = c11.HOSTED_FIELDS_FIELD_NOT_PRESENT.code;
              str3 = "Cannot remove attribute for \"";
              str4 = "\" field because it is not part of the current Hosted Fields options.";
              obj1[2] = `Cannot remove attribute for "${global.field}" field because it is not part of the current Hosted Fields options.`;
              tmp9 = new.target;
              tmp10 = new.target;
              tmp11 = obj1;
              tmp6 = new c7(obj1);
            }
          } else {
            tmp = c7;
            obj = { type: null, code: null, message: null };
            tmp2 = c11;
            obj[0] = c11.HOSTED_FIELDS_FIELD_INVALID.type;
            obj[1] = c11.HOSTED_FIELDS_FIELD_INVALID.code;
            str = "\"";
            str2 = "\" is not a valid field. You must use a valid field option when removing an attribute.";
            obj[2] = `"${global.field}" is not a valid field. You must use a valid field option when removing an attribute.`;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp5 = obj;
            tmp6 = new c7(obj);
          }
          _Promise = Promise;
          if (tmp6) {
            rejectResult = _Promise.reject(tmp6);
          } else {
            rejectResult = _Promise.resolve();
          }
          return rejectResult;
        }
        setPlaceholder(arg0, arg1) {
          obj = { field: global, attribute: "placeholder", value: module };
          return this.setAttribute(obj);
        }
        clear(arg0) {
          if (allowedFields.hasOwnProperty(global)) {
            _fields = this._fields;
            self = this;
            if (_fields.hasOwnProperty(global)) {
              _bus = self._bus;
              tmp12 = events;
              obj = { field: null };
              obj[0] = global;
              emitResult = _bus.emit(events.CLEAR_FIELD, obj);
            } else {
              tmp7 = c7;
              obj1 = { type: null, code: null, message: null };
              tmp8 = c11;
              obj1[0] = c11.HOSTED_FIELDS_FIELD_NOT_PRESENT.type;
              obj1[1] = c11.HOSTED_FIELDS_FIELD_NOT_PRESENT.code;
              str3 = "Cannot clear \"";
              str4 = "\" field because it is not part of the current Hosted Fields options.";
              obj1[2] = `Cannot clear "${global}" field because it is not part of the current Hosted Fields options.`;
              tmp9 = new.target;
              tmp10 = new.target;
              tmp11 = obj1;
              tmp6 = new c7(obj1);
            }
          } else {
            tmp = c7;
            obj = { type: null, code: null, message: null };
            tmp2 = c11;
            obj[0] = c11.HOSTED_FIELDS_FIELD_INVALID.type;
            obj[1] = c11.HOSTED_FIELDS_FIELD_INVALID.code;
            str = "\"";
            str2 = "\" is not a valid field. You must use a valid field option when clearing a field.";
            obj[2] = `"${global}" is not a valid field. You must use a valid field option when clearing a field.`;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp5 = obj;
            tmp6 = new c7(obj);
          }
          _Promise = Promise;
          if (tmp6) {
            rejectResult = _Promise.reject(tmp6);
          } else {
            rejectResult = _Promise.resolve();
          }
          return rejectResult;
        }
        focus(arg0) {
          self = this;
          tmp = this._fields[global];
          assign = tmp;
          if (allowedFields.hasOwnProperty(global)) {
            _fields = self._fields;
            if (_fields.hasOwnProperty(global)) {
              frameElement = tmp.frameElement;
              focusResult = frameElement.focus();
              _bus = self._bus;
              tmp14 = events;
              obj = { field: null };
              obj[0] = global;
              emitResult = _bus.emit(events.TRIGGER_INPUT_FOCUS, obj);
              tmp16 = c15;
              if (c15.isIos()) {
                tmp17 = globalThis;
                _setTimeout = setTimeout;
                num = 5;
                timerId = setTimeout(() => { ... }, 5);
              }
            } else {
              tmp8 = c7;
              obj1 = { type: null, code: null, message: null };
              tmp9 = c11;
              obj1[0] = c11.HOSTED_FIELDS_FIELD_NOT_PRESENT.type;
              obj1[1] = c11.HOSTED_FIELDS_FIELD_NOT_PRESENT.code;
              str3 = "Cannot focus \"";
              str4 = "\" field because it is not part of the current Hosted Fields options.";
              obj1[2] = `Cannot focus "${global}" field because it is not part of the current Hosted Fields options.`;
              tmp10 = new.target;
              tmp11 = new.target;
              tmp12 = obj1;
              tmp7 = new c7(obj1);
            }
          } else {
            tmp2 = c7;
            obj = { type: null, code: null, message: null };
            tmp3 = c11;
            obj[0] = c11.HOSTED_FIELDS_FIELD_INVALID.type;
            obj[1] = c11.HOSTED_FIELDS_FIELD_INVALID.code;
            str = "\"";
            str2 = "\" is not a valid field. You must use a valid field option when focusing a field.";
            obj[2] = `"${global}" is not a valid field. You must use a valid field option when focusing a field.`;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = obj;
            tmp7 = new c7(obj);
          }
          _Promise = Promise;
          if (tmp7) {
            rejectResult = _Promise.reject(tmp7);
          } else {
            rejectResult = _Promise.resolve();
          }
          return rejectResult;
        }
        getState() {
          return this._state;
        }
      }
      let assign = global("../../lib/assign").assign;
      let closure_1 = global("../../lib/create-assets-url");
      let closure_2 = global("../../lib/is-verified-domain");
      let closure_3 = global("../../lib/destructor");
      let closure_4 = global("@braintree/iframer");
      let closure_5 = global("framebus");
      let closure_6 = global("../../lib/create-deferred-client");
      let closure_7 = global("../../lib/braintree-error");
      let closure_8 = global("./compose-url");
      let closure_9 = global("./get-styles-from-class");
      const globalResult = global("../shared/constants");
      let closure_10 = globalResult;
      let closure_11 = global("../shared/errors");
      const INTEGRATION_TIMEOUT_MS = global("../../lib/constants").INTEGRATION_TIMEOUT_MS;
      let closure_13 = global("@braintree/uuid");
      let closure_14 = global("../shared/find-parent-tags");
      let closure_15 = global("../shared/browser-detection");
      const events = globalResult.events;
      const globalResult1 = global("@braintree/event-emitter");
      let closure_18 = global("./inject-frame");
      let closure_19 = global("../../lib/analytics");
      let allowedFields = globalResult.allowedFields;
      let closure_21 = global("../../lib/methods");
      let closure_22 = global("../../lib/shadow");
      let closure_23 = global("../../lib/find-root-node");
      let closure_24 = global("../../lib/convert-methods-to-error");
      let closure_25 = global("../../lib/errors");
      let closure_26 = global("../shared/get-card-types");
      let closure_27 = global("./attribute-validation-error");
      let closure_28 = global("./focus-change");
      const destroy = global("../shared/focus-intercept").destroy;
      const child = globalResult1.createChild(HostedFields);
      module.exports = global("@braintree/wrap-promise").wrapPrototype(HostedFields);
    },
    { "../../lib/analytics": 138, "../../lib/assign": 140, "../../lib/braintree-error": 143, "../../lib/constants": 145, "../../lib/convert-methods-to-error": 146, "../../lib/create-assets-url": 148, "../../lib/create-deferred-client": 150, "../../lib/destructor": 152, "../../lib/errors": 154, "../../lib/find-root-node": 155, "../../lib/is-verified-domain": 173, "../../lib/methods": 175, "../../lib/shadow": 178, "../shared/browser-detection": 130, "../shared/constants": 131, "../shared/errors": 132, "../shared/find-parent-tags": 133, "../shared/focus-intercept": 134, "../shared/get-card-types": 135, "./attribute-validation-error": 123, "./compose-url": 124, "./focus-change": 125, "./get-styles-from-class": 126, "./inject-frame": 128, "@braintree/event-emitter": 30, "@braintree/iframer": 32, "@braintree/uuid": 36, "@braintree/wrap-promise": 40, framebus: 50 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../shared/focus-intercept");
      const navigationDirections = global("../shared/constants").navigationDirections;
      module.exports = function injectFrame(arg0, getAttribute, appendChild) {
        const attr = getAttribute.getAttribute("type");
        const element = <div />;
        const documentFragment = document.createDocumentFragment();
        element.style.clear = "both";
        const generateResult = closure_0.generate(arg0, attr, navigationDirections.BACK, arg3);
        documentFragment.appendChild(generateResult);
        documentFragment.appendChild(getAttribute);
        documentFragment.appendChild(closure_0.generate(arg0, attr, navigationDirections.FORWARD, arg3));
        documentFragment.appendChild(element);
        appendChild.appendChild(documentFragment);
        const items = [getAttribute, element];
        return items;
      };
    },
    { "../shared/constants": 131, "../shared/focus-intercept": 134 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./external/hosted-fields");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("./shared/errors");
      const globalResult = global("restricted-input/supports-input-formatting");
      let closure_3 = global("../lib/braintree-error");
      const globalResult1 = global("@braintree/wrap-promise");
      module.exports = {
        supportsInputFormatting: globalResult,
        create: global("@braintree/wrap-promise")(function create(authorization) {
          let closure_0 = authorization;
          return closure_1.verify({ name: "Hosted Fields", authorization: authorization.authorization, client: authorization.client }).then(() => {
            closure_0 = new closure_0(closure_0);
            const tmp = new closure_0(closure_0);
            return new Promise((arg0, arg1) => {
              let closure_1 = arg1;
              arg0.on("ready", () => { ... });
              arg0.on("timeout", () => { ... });
            });
          });
        }),
        VERSION: "3.112.1"
      };
    },
    { "../lib/basic-component-verification": 141, "../lib/braintree-error": 143, "./external/hosted-fields": 127, "./shared/errors": 132, "@braintree/wrap-promise": 40, "restricted-input/supports-input-formatting": 85 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("@braintree/browser-detection/is-android");
      const globalResult1 = global("@braintree/browser-detection/is-chrome-os");
      const globalResult2 = global("@braintree/browser-detection/is-ios");
      let closure_3 = global("@braintree/browser-detection/is-chrome");
      module.exports = {
        isAndroid: globalResult,
        isChromeOS: globalResult1,
        isChromeIos() {
          let tmp = callback();
          if (tmp) {
            tmp = globalResult2();
          }
          return tmp;
        },
        isFirefox: global("@braintree/browser-detection/is-firefox"),
        isIos: globalResult2,
        isIosWebview: global("@braintree/browser-detection/is-ios-webview"),
        hasSoftwareKeyboard() {
          let tmp = globalResult();
          if (!tmp) {
            tmp = globalResult1();
          }
          if (!tmp) {
            tmp = globalResult2();
          }
          return tmp;
        }
      };
    },
    { "@braintree/browser-detection/is-android": 20, "@braintree/browser-detection/is-chrome": 22, "@braintree/browser-detection/is-chrome-os": 21, "@braintree/browser-detection/is-firefox": 23, "@braintree/browser-detection/is-ios": 27, "@braintree/browser-detection/is-ios-webview": 25 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/enumerate");
      obj = { VERSION: "3.112.1", maxExpirationYearAge: 19, externalEvents: { FOCUS: "focus", BLUR: "blur", EMPTY: "empty", NOT_EMPTY: "notEmpty", VALIDITY_CHANGE: "validityChange", CARD_TYPE_CHANGE: "cardTypeChange" }, defaultMaxLengths: { number: 19, postalCode: 8, expirationDate: 7, expirationMonth: 2, expirationYear: 4, cvv: 3 }, externalClasses: { FOCUSED: "braintree-hosted-fields-focused", INVALID: "braintree-hosted-fields-invalid", VALID: "braintree-hosted-fields-valid" }, navigationDirections: { BACK: "before", FORWARD: "after" }, defaultIFrameStyle: { border: "none", width: "100%", height: "100%", float: "left" }, tokenizationErrorCodes: obj, allowedStyles: ["-moz-appearance", "-moz-box-shadow", "-moz-osx-font-smoothing", "-moz-tap-highlight-color", "-moz-transition", "-webkit-appearance", "-webkit-box-shadow", "-webkit-font-smoothing", "-webkit-tap-highlight-color", "-webkit-transition", "appearance", "box-shadow", "color", "direction", "font", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-weight", "letter-spacing", "line-height", "margin", "margin-top", "margin-right", "margin-bottom", "margin-left", "opacity", "outline", "padding", "padding-top", "padding-right", "padding-bottom", "padding-left", "text-align", "text-shadow", "transition"], allowedFields: { cardholderName: { name: "cardholder-name", label: "Cardholder Name" }, number: { name: "credit-card-number", label: "Credit Card Number" }, cvv: { name: "cvv", label: "CVV" }, expirationDate: { name: "expiration", label: "Expiration Date" }, expirationMonth: { name: "expiration-month", label: "Expiration Month" }, expirationYear: { name: "expiration-year", label: "Expiration Year" }, postalCode: { name: "postal-code", label: "Postal Code" } }, allowedAttributes: { "aria-invalid": "boolean", "aria-required": "boolean", disabled: "boolean", placeholder: "string" }, allowedBillingAddressFields: ["company", "countryCodeNumeric", "countryCodeAlpha2", "countryCodeAlpha3", "countryName", "extendedAddress", "locality", "region", "firstName", "lastName", "postalCode", "streetAddress"], allowedShippingAddressFields: ["company", "countryCodeNumeric", "countryCodeAlpha2", "countryCodeAlpha3", "countryName", "extendedAddress", "locality", "region", "firstName", "lastName", "postalCode", "streetAddress"], autocompleteMappings: { "cardholder-name": "cc-name", "credit-card-number": "cc-number", expiration: "cc-exp", "expiration-month": "cc-exp-month", "expiration-year": "cc-exp-year", cvv: "cc-csc", "postal-code": "billing postal-code" } };
      obj = { 81724: null, 81736: null };
      ({ HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE: obj2[81724], HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED: obj2[81736] } = global("./errors"));
      obj.events = globalResult(["ADD_CLASS", "AUTOFILL_DATA_AVAILABLE", "BIN_AVAILABLE", "CARD_FORM_ENTRY_HAS_BEGUN", "CLEAR_FIELD", "CONFIGURATION", "FRAME_READY", "INPUT_EVENT", "READY_FOR_CLIENT", "REMOVE_ATTRIBUTE", "REMOVE_CLASS", "REMOVE_FOCUS_INTERCEPTS", "SET_ATTRIBUTE", "SET_MESSAGE", "SET_MONTH_OPTIONS", "TOKENIZATION_REQUEST", "TRIGGER_FOCUS_CHANGE", "TRIGGER_INPUT_FOCUS", "VALIDATE_STRICT"], "hosted-fields:");
      module.exports = obj;
    },
    { "../../lib/enumerate": 153, "./errors": 132 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      let obj = { type: globalResult.types.UNKNOWN, code: "HOSTED_FIELDS_TIMEOUT", message: "Hosted Fields timed out when attempting to set up." };
      obj = { type: globalResult.types.MERCHANT, code: "HOSTED_FIELDS_INVALID_FIELD_KEY" };
      obj = { type: globalResult.types.MERCHANT, code: "HOSTED_FIELDS_INVALID_FIELD_SELECTOR", message: "Selector does not reference a valid DOM node." };
      module.exports = { HOSTED_FIELDS_TIMEOUT: obj, HOSTED_FIELDS_INVALID_FIELD_KEY: obj, HOSTED_FIELDS_INVALID_FIELD_SELECTOR: obj, HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME: { type: globalResult.types.MERCHANT, code: "HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME", message: "Element already contains a Braintree iframe." }, HOSTED_FIELDS_FIELD_INVALID: { type: globalResult.types.MERCHANT, code: "HOSTED_FIELDS_FIELD_INVALID" }, HOSTED_FIELDS_FIELD_NOT_PRESENT: { type: globalResult.types.MERCHANT, code: "HOSTED_FIELDS_FIELD_NOT_PRESENT" }, HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR: { type: globalResult.types.NETWORK, code: "HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR", message: "A tokenization network error occurred." }, HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE: { type: globalResult.types.CUSTOMER, code: "HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE", message: "This credit card already exists in the merchant's vault." }, HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED: { type: globalResult.types.CUSTOMER, code: "HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED", message: "CVV verification failed during tokenization." }, HOSTED_FIELDS_FAILED_TOKENIZATION: { type: globalResult.types.CUSTOMER, code: "HOSTED_FIELDS_FAILED_TOKENIZATION", message: "The supplied card data failed tokenization." }, HOSTED_FIELDS_FIELDS_EMPTY: { type: globalResult.types.CUSTOMER, code: "HOSTED_FIELDS_FIELDS_EMPTY", message: "All fields are empty. Cannot tokenize empty card fields." }, HOSTED_FIELDS_FIELDS_INVALID: { type: globalResult.types.CUSTOMER, code: "HOSTED_FIELDS_FIELDS_INVALID", message: "Some payment input fields are invalid. Cannot tokenize invalid card fields." }, HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED: { type: globalResult.types.MERCHANT, code: "HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED" }, HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED: { type: globalResult.types.MERCHANT, code: "HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED" }, HOSTED_FIELDS_FIELD_PROPERTY_INVALID: { type: globalResult.types.MERCHANT, code: "HOSTED_FIELDS_FIELD_PROPERTY_INVALID" } };
    },
    { "../../lib/braintree-error": 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = function findParentTags(parentNode) {
        parentNode = parentNode.parentNode;
        const items = [];
        if (null != parentNode) {
          do {
            let tmp = null != parentNode.tagName;
            let tmp2 = parentNode;
            if (tmp) {
              let str = parentNode.tagName;
              tmp = str.toLowerCase() === arg1;
            }
            if (tmp) {
              let arr = items.push(parentNode);
            }
            parentNode = parentNode.parentNode;
          } while (null != parentNode);
        }
        return items;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./browser-detection");
      const globalResult = global("./constants");
      let closure_1 = Object.keys(globalResult.allowedFields);
      const navigationDirections = globalResult.navigationDirections;
      const obj = {
        generate(arg0, arg1, arg2, arg3) {
          let closure_0 = arg3;
          const element = <input />;
          if (!closure_0.hasSoftwareKeyboard()) {
            if (!obj2.isFirefox()) {
              const _document = document;
              let documentFragment = document.createDocumentFragment();
            }
            return documentFragment;
          }
          const attr = element.setAttribute("aria-hidden", "true");
          const attr1 = element.setAttribute("autocomplete", "off");
          const attr2 = element.setAttribute("data-braintree-direction", arg2);
          const attr3 = element.setAttribute("data-braintree-type", arg1);
          const attr4 = element.setAttribute("id", `bt-${arg1}-${arg2}-${arg0}`);
          obj2 = closure_0;
          const str = JSON.stringify({ border: "none !important", display: "block !important", height: "1px !important", left: "-1px !important", opacity: "0 !important", position: "absolute !important", top: "-1px !important", width: "1px !important" });
          const attr5 = element.setAttribute("style", JSON.stringify({ border: "none !important", display: "block !important", height: "1px !important", left: "-1px !important", opacity: "0 !important", position: "absolute !important", top: "-1px !important", width: "1px !important" }).replace(/[{}"]/g, "").replace(/,/g, ";"));
          const classList = element.classList;
          classList.add("focus-intercept");
          const listener = element.addEventListener("focus", (arg0) => {
            lib(arg0);
            if (!lib.hasSoftwareKeyboard()) {
              element.blur();
            }
          });
          documentFragment = element;
        },
        destroy(c8) {
          const _document = document;
          if (c8) {
            const items = [_document.getElementById(c8)];
            let arr = items;
          } else {
            const elements = _document.querySelectorAll("[data-braintree-direction]");
            const slice = [].slice;
            const call = slice.call;
            arr = typeof call === "unknown" ? slice() : call(elements);
          }
          const item = arr.forEach((nodeType) => {
            let matchFocusElementResult = nodeType;
            if (nodeType) {
              matchFocusElementResult = 1 === nodeType.nodeType;
            }
            if (matchFocusElementResult) {
              matchFocusElementResult = closure_3.matchFocusElement(nodeType.getAttribute("id"));
            }
            if (matchFocusElementResult) {
              const parentNode = nodeType.parentNode;
              parentNode.removeChild(nodeType);
            }
          });
        },
        matchFocusElement(attribute) {
          let tmp = attribute;
          if (tmp) {
            const parts = attribute.split("-");
            let BooleanResult = parts.length >= 4;
            if (BooleanResult) {
              let tmp6 = parts[2] === navigationDirections.BACK;
              if (!tmp6) {
                tmp6 = parts[2] === tmp5.FORWARD;
              }
              let tmp7 = "bt" === parts[0];
              if (tmp7) {
                tmp7 = tmp4;
              }
              if (tmp7) {
                tmp7 = tmp6;
              }
              BooleanResult = Boolean(tmp7);
              tmp4 = closure_1.indexOf(parts[1]) > -1;
            }
            tmp = BooleanResult;
          }
          return tmp;
        }
      };
      module.exports = obj;
    },
    { "./browser-detection": 130, "./constants": 131 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("credit-card-type");
      module.exports = (arg0) => {
        const arr = callback(arg0);
        const item = arr.forEach((type) => {
          if ("mastercard" === type.type) {
            type.type = "master-card";
          }
        });
        return arr;
      };
    },
    { "credit-card-type": 42 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("./american-express");
      const globalResult1 = global("./apple-pay");
      const globalResult2 = global("./client");
      const globalResult3 = global("./fastlane");
      const globalResult4 = global("./data-collector");
      const globalResult5 = global("./hosted-fields");
      const globalResult6 = global("./local-payment");
      const globalResult7 = global("./masterpass");
      const globalResult8 = global("./payment-request");
      const globalResult9 = global("./paypal");
      const globalResult10 = global("./paypal-checkout");
      const globalResult11 = global("./google-payment");
      const globalResult12 = global("./sepa");
      const globalResult13 = global("./three-d-secure");
      const globalResult14 = global("./unionpay");
      const globalResult15 = global("./us-bank-account");
      const globalResult16 = global("./vault-manager");
      const globalResult17 = global("./venmo");
      const globalResult18 = global("./visa-checkout");
      module.exports = { fastlane: globalResult3, americanExpress: globalResult, applePay: globalResult1, client: globalResult2, dataCollector: globalResult4, hostedFields: globalResult5, localPayment: globalResult6, masterpass: globalResult7, googlePayment: globalResult11, paymentRequest: globalResult8, paypal: globalResult9, paypalCheckout: globalResult10, threeDSecure: globalResult13, unionpay: globalResult14, usBankAccount: globalResult15, vaultManager: globalResult16, venmo: globalResult17, visaCheckout: global("./visa-checkout"), sepa: globalResult12, preferredPaymentMethods: global("./preferred-payment-methods"), VERSION: "3.112.1" };
    },
    { "./american-express": 88, "./apple-pay": 91, "./client": 96, "./data-collector": 114, "./fastlane": 119, "./google-payment": 122, "./hosted-fields": 129, "./local-payment": 185, "./masterpass": 188, "./payment-request": 193, "./paypal": 200, "./paypal-checkout": 197, "./preferred-payment-methods": 203, "./sepa": 207, "./three-d-secure": 219, "./unionpay": 223, "./us-bank-account": 229, "./vault-manager": 232, "./venmo": 237, "./visa-checkout": 247 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./create-authorization-data");
      let closure_1 = global("./json-clone");
      let closure_2 = global("./constants");
      module.exports = {
        addMetadata(_configuration, data) {
          if (data) {
            let obj = callback2(data);
          } else {
            obj = {};
          }
          const attrs = callback(_configuration.authorization).attrs;
          const tmp2 = callback2(_configuration.analyticsMetadata);
          obj.braintreeLibraryVersion = constants.BRAINTREE_LIBRARY_VERSION;
          for (const key10017 in obj._meta) {
            let tmp3 = key10017;
            let _meta = obj._meta;
            if (!_meta.hasOwnProperty(key10017)) {
              continue;
            } else {
              tmp2[key10017] = obj._meta[key10017];
              continue;
            }
            continue;
          }
          obj._meta = tmp2;
          if (attrs.tokenizationKey) {
            obj.tokenizationKey = attrs.tokenizationKey;
          } else {
            obj.authorizationFingerprint = attrs.authorizationFingerprint;
          }
          return obj;
        },
        addEventMetadata(getConfiguration, arg1) {
          const configuration = getConfiguration.getConfiguration();
          const attrs = callback(configuration.authorization).attrs;
          const obj = { api_integration_type: configuration.analyticsMetadata.integrationType, app_id: window.location.host, c_sdk_ver: constants.VERSION, component: "braintreeclientsdk", merchant_sdk_env: null, merchant_id: null, event_source: "web", platform: null, platform_version: null, session_id: null, client_session_id: null, tenant_name: "braintree" };
          let str = "sandbox";
          if ("production" === configuration.gatewayConfiguration.environment) {
            str = "production";
          }
          obj[4] = str;
          obj[5] = configuration.gatewayConfiguration.merchantId;
          obj[7] = constants.PLATFORM;
          obj[8] = window.navigator.userAgent;
          obj[9] = configuration.analyticsMetadata.sessionId;
          obj[10] = configuration.analyticsMetadata.sessionId;
          if (attrs.tokenizationKey) {
            obj.tokenization_key = attrs.tokenizationKey;
          } else {
            obj.auth_fingerprint = attrs.authorizationFingerprint;
          }
          return obj;
        }
      };
    },
    { "./constants": 145, "./create-authorization-data": 149, "./json-clone": 174 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./constants");
      let closure_1 = global("./add-metadata");
      module.exports = {
        sendEvent: function sendPaypalEvent(arg0, arg1, arg2) {
          let closure_0 = arg1;
          let closure_1 = arg2;
          let closure_2 = Date.now();
          const resolved = Promise.resolve(arg0);
          return resolved.then((getConfiguration) => {
            const sum = constants.ANALYTICS_PREFIX + constants;
            let obj = { events: [], tracking: [] };
            const addEventMetadataResult = closure_1.addEventMetadata(getConfiguration, obj);
            addEventMetadataResult.event_name = sum;
            addEventMetadataResult.t = closure_2;
            obj = { level: "info", event: sum, payload: null };
            let str = "sandbox";
            if ("production" === getConfiguration.getConfiguration().gatewayConfiguration.environment) {
              str = "production";
            }
            obj[2] = { env: str, timestamp: closure_2 };
            const items = [obj];
            obj.events = items;
            const items1 = [addEventMetadataResult];
            obj.tracking = items1;
            obj = { url: constants.ANALYTICS_URL, method: "post", data: obj, timeout: constants.ANALYTICS_REQUEST_TIMEOUT_MS };
            return getConfiguration._request(obj, closure_1);
          }).catch((arg0) => {
            if (closure_1) {
              tmp(arg0);
            }
          });
        }
      };
    },
    { "./add-metadata": 137, "./constants": 145 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("@braintree/asset-loader/load-script");
      module.exports = { loadScript: global("@braintree/asset-loader/load-script"), loadFastlane: global("@paypal/accelerated-checkout-loader").loadAxo };
    },
    { "@braintree/asset-loader/load-script": 2, "@paypal/accelerated-checkout-loader": 41 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      function assignPolyfill(arg0) {
        for (let num = 1; num < arguments.length; num = num + 1) {
          let obj = arguments[num];
          let tmp = obj;
          let tmp2 = num;
          for (const key10011 in obj) {
            let tmp3 = key10011;
            if (!obj.hasOwnProperty(key10011)) {
              continue;
            } else {
              arg0[key10011] = obj[key10011];
              continue;
            }
            continue;
          }
        }
        return arg0;
      }
      let assign = assignPolyfill;
      if (typeof Object.assign === "function") {
        const _Object = Object;
        assign = Object.assign;
      }
      module.exports = { assign, _assign: assignPolyfill };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./braintree-error");
      let closure_1 = global("./errors");
      let c2 = "3.112.1";
      module.exports = {
        verify: function basicComponentVerification(arg0) {
          let authorization;
          let client;
          let name;
          if (arg0) {
            ({ name, client, authorization } = arg0);
            if (!client) {
              if (!authorization) {
                let obj = { type: null, code: null, message: null };
                obj[0] = constants.INSTANTIATION_OPTION_REQUIRED.type;
                obj[1] = constants.INSTANTIATION_OPTION_REQUIRED.code;
                obj[2] = `options.client is required when instantiating ${name}.`;
                const tmp15 = new closure_0(obj);
                Promise.reject(tmp15);
              }
            }
            if (!authorization) {
              if (client.getVersion() !== c2) {
                obj = { type: null, code: null, message: null };
                obj[0] = constants.INCOMPATIBLE_VERSIONS.type;
                obj[1] = constants.INCOMPATIBLE_VERSIONS.code;
                obj[2] = `Client (version ${client.getVersion()}) and ${name} (version ${tmp17}) components must be from the same SDK version.`;
                const tmp28 = new closure_0(obj);
                let rejectResult1 = Promise.reject(tmp28);
              }
            }
            rejectResult1 = Promise.resolve();
          } else {
            obj = { type: null, code: null, message: "Options must be passed to basicComponentVerification function." };
            obj[0] = constants.INVALID_USE_OF_INTERNAL_FUNCTION.type;
            obj[1] = constants.INVALID_USE_OF_INTERNAL_FUNCTION.code;
            const tmp7 = new closure_0(obj);
            return Promise.reject(tmp7);
          }
        }
      };
    },
    { "./braintree-error": 143, "./errors": 154 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./once");
      module.exports = (arg0, arg1) => {
        let length = arg0.length;
        function finish(arg0) {
          if (arg0) {
            tmp(arg0);
          } else {
            const diff = length - 1;
            if (0 === diff) {
              tmp(null);
            }
          }
        }
        const tmp = length(arg1);
        let closure_1 = tmp;
        if (0 !== length) {
          for (let num2 = 0; num2 < length; num2 = num2 + 1) {
            let arr = arg0[num2];
            let tmp5 = num2;
            if (0 === arr.length) {
              let arrResult = arr();
              let tmp8 = length;
              let diff = length - 1;
              length = diff;
              if (0 === diff) {
                let tmpResult = tmp(null);
              }
            } else {
              arrResult = arr(finish);
            }
          }
        } else {
          tmp(null);
        }
      };
    },
    { "./once": 176 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class BraintreeError {
        constructor(arg0) {
          obj = {};
          types = BraintreeError.types;
          if (types.hasOwnProperty(global.type)) {
            if (global.code) {
              if (global.message) {
                str4 = "BraintreeError";
                obj.name = "BraintreeError";
                ({ code: obj.code, message: obj.message, type: obj.type, details: obj.details } = global);
                return;
              } else {
                tmp11 = globalThis;
                _Error3 = Error;
                tmp12 = new.target;
                str3 = "Error message required.";
                tmp13 = new.target;
                error = new Error("Error message required.");
                tmp15 = error;
                throw error;
              }
            } else {
              tmp6 = globalThis;
              _Error2 = Error;
              tmp7 = new.target;
              str2 = "Error code required.";
              tmp8 = new.target;
              error1 = new Error("Error code required.");
              tmp10 = error1;
              throw error1;
            }
          } else {
            tmp = globalThis;
            _Error = Error;
            str = " is not a valid type.";
            tmp2 = new.target;
            tmp3 = new.target;
            error2 = new Error(global.type + " is not a valid type.");
            tmp5 = error2;
            throw error2;
          }
        }
        static findRootError(arg0) {
          obj = BraintreeError;
          findRootErrorResult = global;
          if (global instanceof BraintreeError) {
            findRootErrorResult = global;
            if (global.details) {
              findRootErrorResult = global;
              if (global.details.originalError) {
                findRootErrorResult = obj.findRootError(global.details.originalError);
              }
            }
          }
          return findRootErrorResult;
        }
      }
      BraintreeError.prototype = Object.create(Error.prototype);
      BraintreeError.prototype.constructor = BraintreeError;
      BraintreeError.types = global("./enumerate")(["CUSTOMER", "MERCHANT", "NETWORK", "INTERNAL", "UNKNOWN"]);
      module.exports = BraintreeError;
    },
    { "./enumerate": 153 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = function camelCaseToSnakeCase(arr) {
        let closure_0 = arr;
        if (null === arr) {
          let reduced = null;
          reduced = null;
        } else {
          const _Array = Array;
          if (Array.isArray(arr)) {
            const items = [];
            reduced = items;
            const item = arr.forEach((arr) => {
              let closure_0 = arr;
              let reduced;
              if (null === arr) {
                reduced = null;
                reduced = null;
              } else {
                const _Array = Array;
                if (Array.isArray(arr)) {
                  const items = [];
                  reduced = items;
                  const item = arr.forEach((arr) => {
                    let closure_0 = arr;
                    let reduced;
                    if (null === arr) {
                      reduced = null;
                      reduced = null;
                    } else {
                      const _Array = Array;
                      if (Array.isArray(arr)) {
                        const items = [];
                        reduced = items;
                        const item = arr.forEach(() => { ... });
                        reduced = items;
                      } else {
                        reduced = arr;
                        if (typeof arr === "object") {
                          const _Object = Object;
                          const keys = Object.keys(arr);
                          reduced = keys.reduce(() => { ... }, {});
                        }
                      }
                    }
                    reduced.push(reduced);
                  });
                  reduced = items;
                } else {
                  reduced = arr;
                  if (typeof arr === "object") {
                    const _Object = Object;
                    const keys = Object.keys(arr);
                    reduced = keys.reduce((arg0, str) => {
                      str = str.replace(/([a-z\d])([A-Z])/g, "$1_$2");
                      let formatted = str.replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1_$2").toLowerCase();
                      if (typeof arr[str] === "object") {
                        arr = tmp2[str];
                        let items;
                        if (null === arr) {
                          items = null;
                          let reduced = null;
                          arg0[formatted] = reduced;
                        } else {
                          let _Array = Array;
                          if (!Array.isArray(arr)) {
                            reduced = arr;
                            if (typeof arr === "object") {
                              let _Object = Object;
                              let keys = Object.keys(arr);
                              reduced = keys.reduce(() => { ... }, {});
                            }
                            items = reduced;
                          }
                        }
                        items = [];
                        let item = arr.forEach(() => { ... });
                        reduced = items;
                      } else {
                        arg0[formatted] = tmp2[str];
                        return arg0;
                      }
                    }, {});
                  }
                }
              }
              reduced.push(reduced);
            });
            reduced = items;
          } else {
            reduced = arr;
            if (typeof arr === "object") {
              const _Object = Object;
              const keys = Object.keys(arr);
              reduced = keys.reduce((arg0, str) => {
                str = str.replace(/([a-z\d])([A-Z])/g, "$1_$2");
                let formatted = str.replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1_$2").toLowerCase();
                if (typeof arr[str] === "object") {
                  arr = tmp2[str];
                  let items;
                  if (null === arr) {
                    items = null;
                    let reduced = null;
                    arg0[formatted] = reduced;
                  } else {
                    let _Array = Array;
                    if (!Array.isArray(arr)) {
                      reduced = arr;
                      if (typeof arr === "object") {
                        let _Object = Object;
                        let keys = Object.keys(arr);
                        reduced = keys.reduce((arg0, str) => {
                          str = str.replace(/([a-z\d])([A-Z])/g, "$1_$2");
                          let formatted = str.replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1_$2").toLowerCase();
                          if (typeof arr[str] === "object") {
                            arr = tmp2[str];
                            let items;
                            if (null === arr) {
                              items = null;
                              let reduced = null;
                              arg0[formatted] = reduced;
                            } else {
                              let _Array = Array;
                              if (!Array.isArray(arr)) {
                                reduced = arr;
                                if (typeof arr === "object") {
                                  let _Object = Object;
                                  let keys = Object.keys(arr);
                                  reduced = keys.reduce(() => { ... }, {});
                                }
                                items = reduced;
                              }
                            }
                            items = [];
                            let item = arr.forEach(() => { ... });
                            reduced = items;
                          } else {
                            arg0[formatted] = tmp2[str];
                            return arg0;
                          }
                        }, {});
                      }
                      items = reduced;
                    }
                  }
                  items = [];
                  let item = arr.forEach((arr) => {
                    let closure_0 = arr;
                    let reduced;
                    if (null === arr) {
                      reduced = null;
                      reduced = null;
                    } else {
                      const _Array = Array;
                      if (Array.isArray(arr)) {
                        const items = [];
                        reduced = items;
                        const item = arr.forEach(() => { ... });
                        reduced = items;
                      } else {
                        reduced = arr;
                        if (typeof arr === "object") {
                          const _Object = Object;
                          const keys = Object.keys(arr);
                          reduced = keys.reduce(() => { ... }, {});
                        }
                      }
                    }
                    reduced.push(reduced);
                  });
                  reduced = items;
                } else {
                  arg0[formatted] = tmp2[str];
                  return arg0;
                }
              }, {});
            }
          }
        }
        return reduced;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { ANALYTICS_PREFIX: "web.", ANALYTICS_REQUEST_TIMEOUT_MS: 2000, ANALYTICS_URL: "https://www.paypal.com/xoplatform/logger/api/logger", ASSETS_URLS: { production: "https://assets.braintreegateway.com", sandbox: "https://assets.braintreegateway.com" }, CLIENT_API_URLS: { production: "https://api.braintreegateway.com:443", sandbox: "https://api.sandbox.braintreegateway.com:443" }, FRAUDNET_SOURCE: "BRAINTREE_SIGNIN", FRAUDNET_FNCLS: "fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99", FRAUDNET_URL: "https://c.paypal.com/da/r/fb.js", BUS_CONFIGURATION_REQUEST_EVENT: "BUS_CONFIGURATION_REQUEST", GRAPHQL_URLS: { production: "https://payments.braintree-api.com/graphql", sandbox: "https://payments.sandbox.braintree-api.com/graphql" }, INTEGRATION_TIMEOUT_MS: 60000, VERSION: "3.112.1", INTEGRATION: "custom", SOURCE: "client", PLATFORM: "web", BRAINTREE_LIBRARY_VERSION: "braintree/web/3.112.1" };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./braintree-error");
      let closure_1 = global("./errors");
      module.exports = (arg0, arr) => {
        let closure_0 = arg0;
        const item = arr.forEach((arg0) => {
          let closure_0 = arg0;
          closure_0[arg0] = () => {
            throw new closure_0({ type: outer1_1.METHOD_CALLED_AFTER_TEARDOWN.type, code: outer1_1.METHOD_CALLED_AFTER_TEARDOWN.code, message: `${closure_0} cannot be called after teardown.` });
          };
        });
      };
    },
    { "./braintree-error": 143, "./errors": 154 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./braintree-error");
      module.exports = function convertToBraintreeError(arg0, arg1) {
        let tmp = arg0;
        if (!(arg0 instanceof closure_0)) {
          let obj = { type: null, code: null, message: null, details: null };
          ({ type: obj[0], code: obj[1], message: obj[2] } = arg1);
          obj = { originalError: null };
          obj[0] = arg0;
          obj[3] = obj;
          tmp = new tmp(obj);
        }
        return tmp;
      };
    },
    { "./braintree-error": 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const ASSETS_URLS = global("./constants").ASSETS_URLS;
      module.exports = {
        create: function createAssetsUrl(arg0) {
          return ASSETS_URLS.production;
        }
      };
    },
    { "./constants": 145 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const atob = global("../lib/vendor/polyfill").atob;
      const CLIENT_API_URLS = global("../lib/constants").CLIENT_API_URLS;
      module.exports = function createAuthorizationData(closure_0) {
        const obj = { attrs: {}, configUrl: "" };
        if (obj2.test(closure_0)) {
          const parts = closure_0.split("_");
          const first = parts[0];
          const substr = parts.slice(2);
          obj.environment = first;
          obj.attrs.tokenizationKey = closure_0;
          obj.configUrl = `${CLIENT_API_URLS[tmp4]}/merchants/${obj3.join("_")}/client_api/v1/configuration`;
        } else {
          const _JSON = JSON;
          const parsed = JSON.parse(atob(closure_0));
          ({ environment: obj.environment, authorizationFingerprint: obj.attrs.authorizationFingerprint, configUrl: obj.configUrl, graphQL: obj.graphQL } = parsed);
        }
        return obj;
      };
    },
    { "../lib/constants": 145, "../lib/vendor/polyfill": 182 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./braintree-error");
      let closure_1 = global("./assets");
      let closure_2 = global("./errors");
      let c3 = "3.112.1";
      module.exports = {
        create: function createDeferredClient(client) {
          let closure_0 = client;
          let resolved = Promise.resolve();
          if (client.client) {
            let resolved1 = Promise.resolve(client.client);
          } else {
            let _window = window;
            client = window.braintree;
            if (client) {
              let _window2 = window;
              client = window.braintree.client;
            }
            if (!client) {
              let obj = { src: null };
              obj[0] = `${client.assetsUrl}/web/${c3}/js/client.min.js`;
              const script = closure_1.loadScript(obj);
              resolved = script.catch((originalError) => {
                obj = { type: constants.CLIENT_SCRIPT_FAILED_TO_LOAD.type, code: constants.CLIENT_SCRIPT_FAILED_TO_LOAD.code, message: constants.CLIENT_SCRIPT_FAILED_TO_LOAD.message, details: obj };
                obj = { originalError };
                return Promise.reject(new closure_0(obj));
              });
            }
            resolved1 = resolved.then(() => {
              if (window.braintree.client.VERSION !== outer1_3) {
                let obj = { type: null, code: null, message: null };
                obj[0] = outer1_2.INCOMPATIBLE_VERSIONS.type;
                obj[1] = outer1_2.INCOMPATIBLE_VERSIONS.code;
                const _window2 = window;
                obj[2] = `Client (version ${window.braintree.client.VERSION}) and ${closure_0.name} (version ${tmp}) components must be from the same SDK version.`;
                const tmp10 = new name(obj);
                let rejectResult = Promise.reject(tmp10);
              } else {
                const _window = window;
                obj = { authorization: null, debug: null };
                ({ authorization: obj[0], debug: obj[1] } = name);
                rejectResult = client.create(obj);
              }
              return rejectResult;
            });
          }
          return resolved1;
        }
      };
    },
    { "./assets": 139, "./braintree-error": 143, "./errors": 154 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = (arg0) => {
        let closure_0 = arg0;
        return () => {
          let closure_0 = arguments;
          const timerId = setTimeout(() => {
            callback.apply(null, callback);
          }, 1);
        };
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      class Destructor {
        constructor() {
          return;
        }
        registerFunctionForTeardown(arg0) {
          if (typeof global === "function") {
            self = this;
            _teardownRegistry = this._teardownRegistry;
            arr = _teardownRegistry.push(global);
          }
          return;
        }
        teardown(arg0) {
          self = this;
          closure_0 = global;
          if (this._isTearingDown) {
            tmp3 = globalThis;
            _Error = Error;
            tmp4 = new.target;
            str = "Destructor is already tearing down";
            tmp5 = new.target;
            error = new Error("Destructor is already tearing down");
            tmp7 = error;
            tmp8 = global(error);
          } else {
            flag = true;
            self._isTearingDown = true;
            tmp = closure_0;
            fn = () => { ... };
            tmp2 = closure_0(self._teardownRegistry, fn.bind(self));
          }
          return;
        }
      }
      let closure_0 = global("./batch-execute-functions");
      module.exports = Destructor;
    },
    { "./batch-execute-functions": 142 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = function enumerate(arr) {
        let str = arg1;
        str = "";
        if (null != arg1) {
          str = arg1;
        }
        return arr.reduce((arg0, arg1) => {
          arg0[arg1] = str + arg1;
          return arg0;
        }, {});
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("./braintree-error");
      let obj = { type: globalResult.types.INTERNAL, code: "INVALID_USE_OF_INTERNAL_FUNCTION" };
      obj = { type: globalResult.types.MERCHANT, code: "INSTANTIATION_OPTION_REQUIRED" };
      obj = { type: globalResult.types.MERCHANT, code: "INCOMPATIBLE_VERSIONS" };
      module.exports = { INVALID_USE_OF_INTERNAL_FUNCTION: obj, INSTANTIATION_OPTION_REQUIRED: obj, INCOMPATIBLE_VERSIONS: obj, CLIENT_SCRIPT_FAILED_TO_LOAD: { type: globalResult.types.NETWORK, code: "CLIENT_SCRIPT_FAILED_TO_LOAD", message: "Braintree client script could not be loaded." }, METHOD_CALLED_AFTER_TEARDOWN: { type: globalResult.types.MERCHANT, code: "METHOD_CALLED_AFTER_TEARDOWN" } };
    },
    { "./braintree-error": 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = function findRootNode(parentNode) {
        let parentNode2;
        let tmp = parentNode;
        let tmp2 = parentNode;
        if (parentNode.parentNode) {
          do {
            parentNode = tmp.parentNode;
            tmp = parentNode;
            tmp2 = parentNode;
            parentNode2 = parentNode.parentNode;
          } while (parentNode2);
        }
        return tmp2;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = (arg0, key10009) => {
        let num = 0;
        if (0 < arg0.length) {
          while (true) {
            let obj = arg0[num];
            let tmp = num;
            if (obj.hasOwnProperty(key10009)) {
              if (arg0[num][key10009] === arg2) {
                break;
              }
            }
            num = num + 1;
          }
          return arg0[num];
        }
        return null;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      function noop() {

      }
      class FrameService {
        constructor(arg0) {
          closure_0 = global;
          if (global) {
            tmp6 = c13;
            item = c13.forEach((key10009) => {
              if (!name.hasOwnProperty(key10009)) {
                const _Error = Error;
                const error = new Error("A valid frame " + key10009 + " must be provided");
                throw error;
              }
            });
            obj = /^[\w_]+$/;
            if (obj.test(global.name)) {
              self = this;
              tmp13 = c7;
              str3 = c7();
              str4 = "";
              this._serviceId = str3.replace(/-/g, "");
              obj = { name: null, dispatchFrameUrl: null, openFrameUrl: null, height: null, width: null, top: null, left: null };
              str5 = "_";
              obj[0] = `${global.name}_${this._serviceId}`;
              ({ dispatchFrameUrl: obj2[1], openFrameUrl: obj2[2], height: obj2[3], width: obj2[4], top: obj2[5], left: obj2[6] } = global);
              this._options = obj;
              self.state = global.state || {};
              tmp14 = framebus;
              obj1 = { channel: null };
              obj1[0] = self._serviceId;
              tmp15 = new.target;
              tmp16 = new.target;
              tmp17 = obj1;
              tmp18 = new framebus(obj1);
              tmp19 = tmp18;
              self._bus = tmp18;
              _setBusEventsResult = self._setBusEvents();
              return;
            } else {
              tmp8 = globalThis;
              _Error2 = Error;
              tmp9 = new.target;
              str2 = "A valid frame name must be provided";
              tmp10 = new.target;
              error = new Error("A valid frame name must be provided");
              tmp12 = error;
              throw error;
            }
          } else {
            tmp = globalThis;
            _Error = Error;
            tmp2 = new.target;
            str = "Valid configuration is required";
            tmp3 = new.target;
            error1 = new Error("Valid configuration is required");
            tmp5 = error1;
            throw error1;
          }
        }
        initialize(arg0) {
          closure_0 = global;
          fn = function() {
            callback();
            const _bus = this._bus;
            _bus.off(outer1_4.DISPATCH_FRAME_READY, closure_1);
          };
          bindResult = fn.bind(this);
          c1 = bindResult;
          _bus = this._bus;
          onResult = _bus.on(c4.DISPATCH_FRAME_READY, bindResult);
          _writeDispatchFrameResult = this._writeDispatchFrame();
          return;
        }
        _writeDispatchFrame() {
          text = `${c6.DISPATCH_FRAME_NAME}_${this._serviceId}`;
          obj = { "aria-hidden": true, name: text, title: text, src: this._options.dispatchFrameUrl, class: c6.DISPATCH_FRAME_CLASS, height: 0, width: 0, style: { position: "absolute", left: "-9999px" } };
          this._dispatchFrame = c8(obj);
          body = document.body;
          appendChildResult = body.appendChild(this._dispatchFrame);
          return;
        }
        _setBusEvents() {
          _bus = this._bus;
          fn = function(arg0, arg1) {
            let err;
            let payload;
            const self = this;
            if (this._onCompleteCallback) {
              const call = _onCompleteCallback.call;
              ({ err, payload } = arg0);
              if (typeof call === "unknown") {
                _onCompleteCallback(err, payload);
              } else {
                call(null, err, payload);
              }
            }
            const _frame = self._frame;
            _frame.close();
            self._onCompleteCallback = null;
            if (arg1) {
              arg1();
            }
          };
          onResult = _bus.on(c4.DISPATCH_FRAME_REPORT, fn.bind(this));
          _bus2 = this._bus;
          fn2 = function(arg0) {
            arg0(this.state);
          };
          onResult1 = _bus2.on(c12, fn2.bind(this));
          return;
        }
        open(arg0, arg1) {
          obj = global;
          if (!global) {
            obj = {};
          }
          self = this;
          this._frame = this._getFrameForEnvironment(obj);
          _frame = this._frame;
          initializeResult = _frame.initialize(module);
          if (!(this._frame instanceof c1)) {
            tmp2 = assign;
            tmp3 = assign(self.state, obj.state);
            self._onCompleteCallback = module;
            _frame2 = self._frame;
            openResult = _frame2.open();
            if (self.isFrameClosed()) {
              _cleanupFrameResult = self._cleanupFrame();
              tmp7 = module;
              if (module) {
                tmp8 = c9;
                tmp9 = c5;
                tmp10 = new.target;
                tmp11 = new.target;
                tmp12 = new c9(c5.FRAME_SERVICE_FRAME_OPEN_FAILED);
                tmp13 = tmp12;
                tmp14 = module(tmp12);
              }
              return;
            } else {
              _pollForPopupCloseResult = self._pollForPopupClose();
            }
          }
          return;
        }
        redirect(arg0) {
          self = this;
          tmp = this._frame && !self.isFrameClosed();
          if (tmp) {
            tmp2 = global;
            _frame = self._frame;
            redirectResult = _frame.redirect(global);
          }
          return;
        }
        close() {
          if (!this.isFrameClosed()) {
            _frame = this._frame;
            closeResult = _frame.close();
          }
          return;
        }
        focus() {
          if (!this.isFrameClosed()) {
            _frame = this._frame;
            focusResult = _frame.focus();
          }
          return;
        }
        createHandler(arg0) {
          obj = global;
          closure_0 = global;
          if (!global) {
            obj = {};
          }
          closure_0 = obj;
          obj = { close: fn.bind(this), focus: fn2.bind(this) };
          fn = function() {
            if (obj.beforeClose) {
              obj.beforeClose();
            }
            this.close();
          };
          fn2 = function() {
            if (obj.beforeFocus) {
              obj.beforeFocus();
            }
            this.focus();
          };
          return obj;
        }
        createNoopHandler() {
          obj = { close: noop, focus: noop };
          return obj;
        }
        teardown() {
          closeResult = this.close();
          parentNode = this._dispatchFrame.parentNode;
          removeChildResult = parentNode.removeChild(this._dispatchFrame);
          this._dispatchFrame = null;
          _cleanupFrameResult = this._cleanupFrame();
          return;
        }
        isFrameClosed() {
          isClosedResult = null == this._frame;
          if (!isClosedResult) {
            _frame = this._frame;
            isClosedResult = _frame.isClosed();
          }
          return isClosedResult;
        }
        _cleanupFrame() {
          this._frame = null;
          clearIntervalResult = clearInterval(this._popupInterval);
          this._popupInterval = null;
          return;
        }
        _pollForPopupClose() {
          fn = function() {
            const self = this;
            if (this.isFrameClosed()) {
              self._cleanupFrame();
              if (self._onCompleteCallback) {
                const tmp6 = new closure_9(constants.FRAME_SERVICE_FRAME_CLOSED);
                self._onCompleteCallback(tmp6);
              }
            }
          };
          this._popupInterval = setInterval(fn.bind(this), c6.POPUP_POLL_INTERVAL);
          return this._popupInterval;
        }
        _getFrameForEnvironment(arg0) {
          supportsPopupsResult = c10.supportsPopups();
          BooleanResult = Boolean(window.popupBridge);
          tmp3 = assign({}, this._options, global);
          if (BooleanResult) {
            tmp13 = c1;
            tmp14 = new.target;
            tmp15 = new.target;
            tmp16 = tmp3;
            tmp8 = new c1(tmp3);
          } else if (supportsPopupsResult) {
            tmp9 = c0;
            tmp10 = new.target;
            tmp11 = new.target;
            tmp12 = tmp3;
            tmp8 = new c0(tmp3);
          } else {
            tmp4 = c2;
            tmp5 = new.target;
            tmp6 = new.target;
            tmp7 = tmp3;
            tmp8 = new c2(tmp3);
          }
          return tmp8;
        }
      }
      let closure_0 = global("./strategies/popup");
      let closure_1 = global("./strategies/popup-bridge");
      let closure_2 = global("./strategies/modal");
      let closure_3 = global("framebus");
      let closure_4 = global("../shared/events");
      let closure_5 = global("../shared/errors");
      let closure_6 = global("../shared/constants");
      let closure_7 = global("@braintree/uuid");
      let closure_8 = global("@braintree/iframer");
      let closure_9 = global("../../braintree-error");
      let closure_10 = global("../shared/browser-detection");
      const assign = global("./../../assign").assign;
      let closure_12 = global("../../constants").BUS_CONFIGURATION_REQUEST_EVENT;
      let closure_13 = ["name", "dispatchFrameUrl", "openFrameUrl"];
      module.exports = FrameService;
    },
    { "../../braintree-error": 143, "../../constants": 145, "../shared/browser-detection": 164, "../shared/constants": 165, "../shared/errors": 166, "../shared/events": 167, "./../../assign": 140, "./strategies/modal": 159, "./strategies/popup": 162, "./strategies/popup-bridge": 160, "@braintree/iframer": 32, "@braintree/uuid": 36, framebus: 50 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./frame-service");
      module.exports = {
        create: function createFrameService(arg0, arg1) {
          let closure_0 = arg1;
          const obj = new closure_0(arg0);
          obj.initialize(() => {
            callback(obj);
          });
        }
      };
    },
    { "./frame-service": 157 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      function noop() {

      }
      class Modal {
        constructor(arg0) {
          obj = { _closed: null, _frame: null };
          obj = global;
          if (!global) {
            obj = {};
          }
          obj._options = obj;
          body = obj._options.container;
          if (!body) {
            tmp = globalThis;
            _document = document;
            body = document.body;
          }
          obj._container = body;
          return;
        }
        open() {
          self = this;
          obj = { src: this._options.openFrameUrl, name: this._options.name, scrolling: "yes", height: "100%", width: "100%", style: assign({}, c3), title: "Lightbox Frame" };
          tmp = assign;
          tmp2 = c3;
          obj2 = c2;
          if (c2.isIos()) {
            if (obj2.isIosWKWebview()) {
              _lockScrollingResult = self._lockScrolling();
              obj.style = {};
            }
            tmp6 = globalThis;
            _document = document;
            str = "div";
            self._el = document.createElement("div");
            tmpResult = tmp(self._el.style, tmp2, { height: "100%", width: "100%", overflow: "auto", "-webkit-overflow-scrolling": "touch" });
            tmp8 = c0;
            self._frame = c0(obj);
            _el = self._el;
            appendChildResult = _el.appendChild(self._frame);
          } else {
            tmp3 = c0;
            tmp4 = c0(obj);
            self._frame = tmp4;
            self._el = tmp4;
          }
          self._closed = false;
          _container = self._container;
          appendChildResult1 = _container.appendChild(self._el);
          return;
        }
        close() {
          self = this;
          _container = this._container;
          removeChildResult = _container.removeChild(this._el);
          this._frame = null;
          this._closed = true;
          if (c2.isIosWKWebview()) {
            _unlockScrollingResult = self._unlockScrolling();
          }
          return;
        }
        isClosed() {
          return Boolean(this._closed);
        }
        redirect(arg0) {
          this._frame.src = global;
          return;
        }
        _unlockScrolling() {
          document.body.style.overflow = this._savedBodyProperties.overflowStyle;
          document.body.style.position = this._savedBodyProperties.positionStyle;
          scrollToResult = window.scrollTo(this._savedBodyProperties.left, this._savedBodyProperties.top);
          delete tmp2[tmp];
          return;
        }
        _lockScrolling() {
          documentElement = document.documentElement;
          tmp = window.pageXOffset || documentElement.scrollLeft;
          tmp2 = documentElement.clientLeft || 0;
          obj = { left: tmp - tmp2, top: tmp3 - tmp4, overflowStyle: document.body.style.overflow, positionStyle: document.body.style.position };
          tmp3 = window.pageYOffset || documentElement.scrollTop;
          tmp4 = documentElement.clientTop || 0;
          this._savedBodyProperties = obj;
          document.body.style.overflow = "hidden";
          document.body.style.position = "fixed";
          scrollToResult = window.scrollTo(0, 0);
          return;
        }
      }
      let closure_0 = global("@braintree/iframer");
      const assign = global("../../../assign").assign;
      let closure_2 = global("../../shared/browser-detection");
      let closure_3 = { position: "fixed", top: 0, left: 0, bottom: 0, padding: 0, margin: 0, border: 0, outline: "none", zIndex: 20001, background: "#FFFFFF" };
      Modal.prototype.initialize = noop;
      Modal.prototype.focus = noop;
      module.exports = Modal;
    },
    { "../../../assign": 140, "../../shared/browser-detection": 164, "@braintree/iframer": 32 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      function noop() {

      }
      class PopupBridge {
        constructor(arg0) {
          return;
        }
        initialize(arg0) {
          closure_0 = global;
          self = this;
          window.popupBridge.onComplete = (arg0, arg1) => {
            let tmp = !arg1;
            if (!arg1) {
              tmp = !arg0;
            }
            self._closed = true;
            if (!arg0) {
              if (!tmp) {
                callback(null, arg1);
              }
            }
            callback(new callback(self.FRAME_SERVICE_FRAME_CLOSED));
          };
          return;
        }
        open(arg0) {
          obj = global;
          if (!global) {
            obj = {};
          }
          self = this;
          tmp = obj.openFrameUrl || self._options.openFrameUrl;
          self._closed = false;
          popupBridge = window.popupBridge;
          openResult = popupBridge.open(tmp);
          return;
        }
        isClosed() {
          return Boolean(this._closed);
        }
        redirect(arg0) {
          obj = { openFrameUrl: global };
          openResult = this.open(obj);
          return;
        }
      }
      let closure_0 = global("../../../braintree-error");
      let closure_1 = global("../../shared/errors");
      PopupBridge.prototype.focus = noop;
      PopupBridge.prototype.close = noop;
      module.exports = PopupBridge;
    },
    { "../../../braintree-error": 143, "../../shared/errors": 166 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../../../shared/constants");
      let closure_1 = global("./position");
      module.exports = function composePopupOptions(height) {
        let DEFAULT_POPUP_HEIGHT = height.height;
        if (!DEFAULT_POPUP_HEIGHT) {
          DEFAULT_POPUP_HEIGHT = constants.DEFAULT_POPUP_HEIGHT;
        }
        let DEFAULT_POPUP_WIDTH = height.width;
        if (!DEFAULT_POPUP_WIDTH) {
          DEFAULT_POPUP_WIDTH = constants.DEFAULT_POPUP_WIDTH;
        }
        let top = height.top;
        if (undefined === top) {
          top = closure_1.top(DEFAULT_POPUP_HEIGHT);
        }
        let left = height.left;
        if (undefined === left) {
          left = closure_1.left(DEFAULT_POPUP_WIDTH);
        }
        const items = [constants.POPUP_BASE_OPTIONS, `height=${DEFAULT_POPUP_HEIGHT}`, `width=${DEFAULT_POPUP_WIDTH}`, `top=${top}`, `left=${left}`];
        return items.join(",");
      };
    },
    { "../../../shared/constants": 165, "./position": 163 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class Popup {
        constructor(arg0) {
          obj = global;
          if (!global) {
            obj = {};
          }
          { _frame: null }._options = obj;
          return;
        }
        initialize() {
          return;
        }
        open() {
          this._frame = window.open(this._options.openFrameUrl, this._options.name, closure_0(this._options));
          return;
        }
        focus() {
          _frame = this._frame;
          focusResult = _frame.focus();
          return;
        }
        close() {
          if (!this._frame.closed) {
            _frame = this._frame;
            closeResult = _frame.close();
          }
          return;
        }
        isClosed() {
          _frame = this._frame;
          BooleanResult = !_frame;
          if (_frame) {
            tmp3 = globalThis;
            _Boolean = Boolean;
            BooleanResult = Boolean(tmp._frame.closed);
          }
          return BooleanResult;
        }
        redirect(arg0) {
          this._frame.location.href = global;
          return;
        }
      }
      let closure_0 = global("./compose-options");
      module.exports = Popup;
    },
    { "./compose-options": 161 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = {
        top(DEFAULT_POPUP_HEIGHT) {
          let clientHeight = window.outerHeight;
          if (!clientHeight) {
            const _document = document;
            clientHeight = document.documentElement.clientHeight;
          }
          if (null == window.screenY) {
            const _window2 = window;
            let screenY = window.screenTop;
          } else {
            const _window = window;
            screenY = window.screenY;
          }
          return (clientHeight - DEFAULT_POPUP_HEIGHT) / 2 + screenY;
        },
        left(DEFAULT_POPUP_WIDTH) {
          let clientWidth = window.outerWidth;
          if (!clientWidth) {
            const _document = document;
            clientWidth = document.documentElement.clientWidth;
          }
          if (null == window.screenX) {
            const _window2 = window;
            let screenX = window.screenLeft;
          } else {
            const _window = window;
            screenX = window.screenX;
          }
          return (clientWidth - DEFAULT_POPUP_WIDTH) / 2 + screenX;
        },
        center(arg0, arg1, arg2) {
          return (arg0 - arg1) / 2 + arg2;
        }
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { isIos: global("@braintree/browser-detection/is-ios"), isIosWKWebview: global("@braintree/browser-detection/is-ios-wkwebview"), supportsPopups: global("@braintree/browser-detection/supports-popups") };
    },
    { "@braintree/browser-detection/is-ios": 27, "@braintree/browser-detection/is-ios-wkwebview": 26, "@braintree/browser-detection/supports-popups": 29 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { DISPATCH_FRAME_NAME: "dispatch", DISPATCH_FRAME_CLASS: "braintree-dispatch-frame", POPUP_BASE_OPTIONS: "resizable,scrollbars", DEFAULT_POPUP_WIDTH: 450, DEFAULT_POPUP_HEIGHT: 535, POPUP_POLL_INTERVAL: 100, POPUP_CLOSE_TIMEOUT: 100 };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../braintree-error");
      let obj = { type: globalResult.types.INTERNAL, code: "FRAME_SERVICE_FRAME_CLOSED", message: "Frame closed before tokenization could occur." };
      obj = { type: globalResult.types.INTERNAL, code: "FRAME_SERVICE_FRAME_OPEN_FAILED", message: "Frame failed to open." };
      module.exports = { FRAME_SERVICE_FRAME_CLOSED: obj, FRAME_SERVICE_FRAME_OPEN_FAILED: obj };
    },
    { "../../braintree-error": 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = global("../../enumerate")(["DISPATCH_FRAME_READY", "DISPATCH_FRAME_REPORT"], "frameService:");
    },
    { "../../enumerate": 153 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const assign = global("./assign").assign;
      module.exports = (gatewayConfiguration, apiVersion, merchantId) => {
        const androidPay = gatewayConfiguration.gatewayConfiguration.androidPay;
        let str = "TEST";
        if ("production" === gatewayConfiguration.gatewayConfiguration.environment) {
          str = "PRODUCTION";
        }
        if (2 === apiVersion) {
          let obj = { apiVersion: 2, apiVersionMinor: 0, environment: null, allowedPaymentMethods: null };
          obj[2] = str;
          obj = { type: "CARD", parameters: null, tokenizationSpecification: null };
          obj = { allowedAuthMethods: null, allowedCardNetworks: null };
          obj[0] = ["PAN_ONLY", "CRYPTOGRAM_3DS"];
          const supportedNetworks = androidPay.supportedNetworks;
          obj[1] = supportedNetworks.map((str) => str.toUpperCase());
          obj[1] = obj;
          const obj1 = { type: "PAYMENT_GATEWAY", parameters: null };
          const obj2 = { "braintree:authorizationFingerprint": null };
          obj2[0] = androidPay.googleAuthorizationFingerprint;
          const obj3 = { gateway: "braintree", "braintree:merchantId": null, "braintree:apiVersion": "v1", "braintree:sdkVersion": "3.112.1", "braintree:metadata": null };
          obj3[1] = gatewayConfiguration.gatewayConfiguration.merchantId;
          const _JSON = JSON;
          ({ source: obj7[0], integration: obj7[1], sessionId: obj7[2], platform: obj7[4] } = gatewayConfiguration.analyticsMetadata);
          obj3[4] = JSON.stringify({ source: null, integration: null, sessionId: null, version: "3.112.1", platform: null });
          obj1[1] = assign({}, obj3, obj2);
          obj[2] = obj1;
          const items = [obj];
          obj[3] = items;
          if (merchantId) {
            const obj5 = { merchantId: null };
            obj5[0] = merchantId;
            obj.merchantInfo = obj5;
          }
          let tmp = obj;
          if (androidPay.paypalClientId) {
            const obj6 = { type: "PAYPAL", parameters: null, tokenizationSpecification: null };
            const obj7 = { purchase_context: null };
            const obj8 = { purchase_units: null };
            const obj9 = { payee: null, recurring_payment: true };
            const obj10 = { client_id: null };
            obj10[0] = androidPay.paypalClientId;
            obj9[0] = obj10;
            const items1 = [obj9];
            obj8[0] = items1;
            obj7[0] = obj8;
            obj6[1] = obj7;
            const obj11 = { type: "PAYMENT_GATEWAY", parameters: null };
            const obj12 = { "braintree:paypalClientId": null };
            obj12[0] = androidPay.paypalClientId;
            const obj13 = { gateway: "braintree", "braintree:merchantId": null, "braintree:apiVersion": "v1", "braintree:sdkVersion": "3.112.1", "braintree:metadata": null };
            obj13[1] = gatewayConfiguration.gatewayConfiguration.merchantId;
            const _JSON2 = JSON;
            ({ source: obj17[0], integration: obj17[1], sessionId: obj17[2], platform: obj17[4] } = gatewayConfiguration.analyticsMetadata);
            obj13[4] = JSON.stringify({ source: null, integration: null, sessionId: null, version: "3.112.1", platform: null });
            obj11[1] = tmp3({}, obj13, obj12);
            obj6[2] = obj11;
            const prop = obj.allowedPaymentMethods;
            prop.push(obj6);
            tmp = obj;
            const obj14 = { source: null, integration: null, sessionId: null, version: "3.112.1", platform: null };
          }
          const obj4 = { source: null, integration: null, sessionId: null, version: "3.112.1", platform: null };
          tmp3 = assign;
        } else {
          const obj15 = { environment: null, allowedPaymentMethods: null, paymentMethodTokenizationParameters: null, cardRequirements: null };
          obj15[0] = str;
          obj15[1] = ["CARD", "TOKENIZED_CARD"];
          const obj16 = { tokenizationType: "PAYMENT_GATEWAY", parameters: null };
          const obj17 = { "braintree:authorizationFingerprint": null };
          obj17[0] = androidPay.googleAuthorizationFingerprint;
          const obj18 = { gateway: "braintree", "braintree:merchantId": null, "braintree:apiVersion": "v1", "braintree:sdkVersion": "3.112.1", "braintree:metadata": null };
          obj18[1] = gatewayConfiguration.gatewayConfiguration.merchantId;
          const _JSON3 = JSON;
          ({ source: obj22[0], integration: obj22[1], sessionId: obj22[2], platform: obj22[4] } = gatewayConfiguration.analyticsMetadata);
          obj18[4] = JSON.stringify({ source: null, integration: null, sessionId: null, version: "3.112.1", platform: null });
          obj16[1] = assign({}, obj18, obj17);
          obj15[2] = obj16;
          const obj20 = { allowedCardNetworks: null };
          const supportedNetworks1 = androidPay.supportedNetworks;
          obj20[0] = supportedNetworks1.map((str) => str.toUpperCase());
          obj15[3] = obj20;
          if ("TOKENIZATION_KEY" === gatewayConfiguration.authorizationType) {
            obj15.paymentMethodTokenizationParameters.parameters["braintree:clientKey"] = gatewayConfiguration.authorization;
          }
          if (merchantId) {
            obj15.merchantId = merchantId;
          }
          tmp = obj15;
          if (apiVersion) {
            obj15.apiVersion = apiVersion;
            tmp = obj15;
          }
          const obj19 = { source: null, integration: null, sessionId: null, version: "3.112.1", platform: null };
        }
        return tmp;
      };
    },
    { "./assign": 140 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = function inIframe(arg0) {
        let _window = arg0;
        if (!arg0) {
          _window = window;
        }
        try {
          return _window.self !== _window.top;
        } catch (err) {
          return true;
        }
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = function isDateStringBeforeOrOn(str, str2) {
        const parts = str.split("-");
        const parts1 = str2.split("-");
        const date = new Date(parts[0], parts[1], parts[2]);
        return date <= new Date(parts1[0], parts1[1], parts1[2]);
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = (fastlane) => {
        if (fastlane) {
          fastlane = fastlane.hasOwnProperty("fastlane");
        }
        if (fastlane) {
          fastlane = fastlane.fastlane;
        }
        return fastlane;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = {
        isHTTPS(arg0) {
          let protocol = arg0;
          if (!arg0) {
            const _window = window;
            protocol = window.location.protocol;
          }
          return "https:" === protocol;
        }
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_1 = { "paypal.com": 1, "braintreepayments.com": 1, "braintreegateway.com": 1, "braintree-api.com": 1 };
      module.exports = function isVerifiedDomain(str) {
        const formatted = str.toLowerCase();
        let hasOwnPropertyResult = /^https:/.test(formatted);
        if (hasOwnPropertyResult) {
          if (!element) {
            const _document = document;
            element = <a />;
          }
          element.href = formatted;
          const parts = element.hostname.split(".");
          const substr = parts.slice(-2);
          hasOwnPropertyResult = closure_1.hasOwnProperty(substr.join("."));
          const str2 = element.hostname;
        }
        return hasOwnPropertyResult;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = (arg0) => JSON.parse(JSON.stringify(arg0));
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = (arg0) => {
        let closure_0 = arg0;
        const keys = Object.keys(arg0);
        return keys.filter((arg0) => typeof table[arg0] === "function");
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = function once(arg0) {
        let closure_0 = arg0;
        let c1 = false;
        return () => {
          if (!c1) {
            c1 = true;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              HermesBuiltin.applyArguments(null);
            } else {
              apply(null, arguments);
            }
            const tmp = closure_0;
          }
        };
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      function stringify(obj) {
        const items = [];
        for (const key10012 in arg0) {
          let tmp8 = key10012;
          if (!arg0.hasOwnProperty(key10012)) {
            continue;
          } else {
            let tmp = arg0[key10012];
            let tmp2 = key10012;
            if (!arg1) {
              if (typeof tmp === "object") {
                let tmp6 = stringify;
                let arr = items.push(stringify(tmp, tmp8));
                continue;
              } else {
                let _encodeURIComponent = encodeURIComponent;
                let _encodeURIComponent2 = encodeURIComponent;
                let text = `${encodeURIComponent(tmp8)}=`;
                arr = items.push(`${encodeURIComponent(tmp8)}=` + encodeURIComponent(tmp));
                continue;
              }
              continue;
            } else {
              if (arg0) {
                if (typeof arg0 === "object") {
                  if (typeof arg0.length === "number") {
                    let _Object = Object;
                    let call = toString.call;
                    if (typeof call === "unknown") {
                      let str = toString();
                    } else {
                      str = call(arg0);
                    }
                    let tmp5 = text1;
                  }
                  let text1 = `${arg1}[]`;
                }
              }
              text1 = `${arg1 + "[" + key10012}]`;
            }
          }
          continue;
        }
        return items.join("&");
      }
      module.exports = {
        parse(arg0) {
          let str = arg0;
          if (!arg0) {
            const _window = window;
            str = window.location.href;
          }
          let href = str;
          if (!str) {
            const _window2 = window;
            href = window.location.href;
          }
          if (obj.test(href)) {
            const str3 = str.split("?")[1] || "";
            let parts = str.split("?")[1] || "".replace(/#.*$/, "").split("&");
            let reduced = parts.reduce((arg0, str) => {
              const parts = str.split("=");
              arg0[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
              return arg0;
            }, {});
            const str5 = str.split("?")[1] || "".replace(/#.*$/, "");
          } else {
            reduced = {};
          }
          return reduced;
        },
        stringify,
        queryify(_redirectUrl, body) {
          let str = _redirectUrl;
          if (!_redirectUrl) {
            str = "";
          }
          let tmp2 = null != body && typeof body === "object";
          if (tmp2) {
            let flag = false;
            const keys = Object.keys();
            if (keys !== undefined) {
              flag = false;
              while (keys[tmp] !== undefined) {
                let tmp8 = tmp5;
                flag = true;
                if (body.hasOwnProperty(tmp5)) {
                  break;
                }
              }
            }
            tmp2 = flag;
          }
          let sum1 = str;
          if (tmp2) {
            let str3 = "";
            let str4 = "";
            if (-1 === str.indexOf("?")) {
              str4 = "?";
            }
            const sum = str + str4;
            if (-1 !== sum.indexOf("=")) {
              str3 = "&";
            }
            sum1 = sum + str3 + stringify(body);
          }
          return sum1;
        },
        hasQueryParams(arg0) {
          let href = arg0;
          if (!arg0) {
            const _window = window;
            href = window.location.href;
          }
          return /\?/.test(href);
        }
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("@braintree/uuid");
      let closure_1 = global("./find-root-node");
      function transformToSlot(element, arg1) {
        element = callback2(element).querySelector("style");
        const tmp3 = callback2(element);
        const obj = callback2(element);
        const tmp = callback2;
        let host = null;
        if ("[object ShadowRoot]" === str.toString()) {
          host = tmp3.host;
        }
        const text = `shadow-slot-${closure_0()}`;
        const element1 = <slot />;
        const element2 = <div />;
        const attr = element1.setAttribute("name", `shadow-slot-${closure_0()}`);
        element.appendChild(element1);
        const attr1 = element2.setAttribute("slot", `shadow-slot-${closure_0()}`);
        host.appendChild(element2);
        if (arg1) {
          if (!element) {
            const _document = document;
            const element3 = <style />;
            element.appendChild(element3);
            element = element3;
          }
          const sheet = element.sheet;
          const _HermesInternal = HermesInternal;
          sheet.insertRule(`${"::slotted([slot=\"" + tmp5 + "\"]) { "}${arg1} }`);
        }
        str = callback2(tmp3);
        let tmp13 = element2;
        if ("[object ShadowRoot]" === str5.toString()) {
          tmp13 = transformToSlot(element2, arg1);
        }
        return tmp13;
      }
      module.exports = {
        isShadowElement(element) {
          return "[object ShadowRoot]" === callback2(element).toString();
        },
        getShadowHost(arg0) {
          const tmp = callback2(arg0);
          let host = null;
          if ("[object ShadowRoot]" === str.toString()) {
            host = tmp.host;
          }
          return host;
        },
        transformToSlot
      };
    },
    { "./find-root-node": 155, "@braintree/uuid": 36 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = (arr) => {
        let replaced = arr;
        if (-1 !== arr.indexOf("_")) {
          replaced = arr.toLowerCase().replace(/(\_\w)/g, (arg0) => arg0[1].toUpperCase());
          const str = arr.toLowerCase();
        }
        return replaced;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./querystring");
      module.exports = {
        getUrlParams() {
          return closure_0.parse(window.location.href);
        }
      };
    },
    { "./querystring": 177 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = function useMin(arg0) {
        let str = ".min";
        if (arg0) {
          str = "";
        }
        return str;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      function atobPolyfill(str) {
        let sum4;
        const regExp = new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$");
        str = "";
        let num = 0;
        if (regExp.test(str)) {
          do {
            let indexOf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf;
            let sum = num + 1;
            let indexOf2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf;
            let sum1 = sum + 1;
            let tmp6 = 63 & "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(str.charAt(num));
            let index = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(str.charAt(sum));
            let indexOf3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf;
            let sum2 = sum1 + 1;
            let tmp9 = index >> 4;
            let tmp10 = 15 & index;
            let index1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(str.charAt(sum1));
            let tmp13 = tmp10 << 4 | index1 >> 2 & 15;
            let indexOf4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf;
            let tmp14 = 3 & index1;
            let _String = String;
            let tmp15 = 63 & "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(str.charAt(sum2));
            let tmp17 = str;
            let str3 = "";
            let fromCharCodeResult = String.fromCharCode(tmp6 << 2 | tmp9 & 3);
            if (tmp13) {
              let _String2 = String;
              str3 = String.fromCharCode(tmp13);
            }
            let tmp18 = tmp14 << 6 | tmp15;
            let str4 = "";
            let sum3 = fromCharCodeResult + str3;
            if (tmp18) {
              let _String3 = String;
              str4 = String.fromCharCode(tmp18);
            }
            num = sum2 + 1;
            sum4 = str + (sum3 + str4);
            str = sum4;
          } while (num < str.length);
          return sum4;
        } else {
          const _Error = Error;
          const error = new Error("Non base64 encoded input passed to window.atob polyfill");
          throw error;
        }
      }
      let _atob = atobPolyfill;
      if (typeof atob === "function") {
        _atob = atob;
      }
      module.exports = {
        atob(closure_0) {
          const call = _atob.call;
          const _window = window;
          return typeof call === "unknown" ? _atob(closure_0) : call(_window, closure_0);
        },
        _atob: atobPolyfill
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { REQUIRED_OPTIONS_FOR_START_PAYMENT: ["givenName", "surname", "currencyCode", "paymentType", "amount", "fallback"], REQUIRED_OPTIONS_FOR_PAY_UPON_INVOICE_PAYMENT_TYPE: ["givenName", "surname", "currencyCode", "onPaymentStart", "paymentType", "amount", "address", "billingAddress", "birthDate", "email", "locale", "customerServiceInstructions", "correlationId", "phone", "phoneCountryCode", "lineItems"], REQUIRED_OPTIONS_FOR_ADDRESS: ["streetAddress", "locality", "postalCode", "countryCode"], REQUIRED_OPTIONS_FOR_LINE_ITEMS: ["category", "name", "quantity", "unitAmount", "unitTaxAmount"], REQUIRED_OPTIONS_FOR_BLIK_SEAMLESS_PAYMENT_TYPE: ["givenName", "surname", "currencyCode", "paymentType", "amount"], REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_LEVEL_0: ["authCode"], REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_FIRST: ["authCode", "consumerReference", "aliasLabel"], REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_SUBSEQUENT: ["consumerReference", "aliasKey"] };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      class LocalPayment {
        constructor(arg0) {
          obj = { _client: global.client, _assetsUrl: `${client.getConfiguration().gatewayConfiguration.assetsUrl}/web/3.112.1`, _isDebug: client2.getConfiguration().isDebug, _loadingFrameUrl: `${`${obj._assetsUrl}/html/local-payment-landing-frame`}${c2(obj._isDebug)}.html`, _authorizationInProgress: false, _paymentType: "unknown", _merchantAccountId: global.merchantAccountId };
          client = global.client;
          client2 = global.client;
          if (global.redirectUrl) {
            obj._redirectUrl = global.redirectUrl;
            flag = true;
            obj._isRedirectFlow = true;
          }
          return;
        }
        _initialize() {
          self = this;
          _client = this._client;
          f115835 = setTimeout(() => { ... }, INTEGRATION_TIMEOUT_MS);
          promise = new Promise(() => { ... });
          return promise;
        }
        startPayment(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          if (this._isRedirectFlow) {
            global.redirectUrl = self._redirectUrl;
          } else {
            _serviceId = self._frameService._serviceId;
          }
          str = true;
          if (global) {
            obj = global.blikOptions || {};
            if (typeof global.paymentType === "string") {
              str2 = global.paymentType;
              paymentType = str2.toLowerCase();
            } else {
              paymentType = global.paymentType;
            }
            str3 = "blik";
            if ("blik" === paymentType) {
              str4 = "level_0";
              hasOwnPropertyResult = obj.hasOwnProperty("level_0");
              if (!hasOwnPropertyResult) {
                str5 = "oneClick";
                hasOwnPropertyResult = obj.hasOwnProperty("oneClick");
              }
              hasItem = hasOwnPropertyResult;
            } else {
              items = ["pay_upon_invoice", "mbway", "bancomatpay"];
              hasItem = items.includes(paymentType);
            }
            if (hasItem) {
              str7 = global.paymentType || "";
              str8 = "pay_upon_invoice";
              if ("pay_upon_invoice" === str7.toLowerCase()) {
                tmp26 = c10;
                num9 = 0;
                num10 = 1;
                str16 = "lineItems";
                str17 = "billingAddress";
                str18 = "address";
                num11 = 0;
                str = false;
                if (0 < c10.REQUIRED_OPTIONS_FOR_PAY_UPON_INVOICE_PAYMENT_TYPE.length) {
                  tmp27 = c10;
                  tmp28 = c10.REQUIRED_OPTIONS_FOR_PAY_UPON_INVOICE_PAYMENT_TYPE[num11];
                  tmp29 = num11;
                  str = tmp28;
                  while (global.hasOwnProperty(tmp28)) {
                    if ("address" !== tmp28) {
                      if ("billingAddress" !== tmp28) {
                        tmp36 = tmp27;
                        if ("lineItems" === tmp28) {
                          arr5 = global[tmp28];
                          num13 = 0;
                          tmp35 = tmp27;
                          if (0 < arr5.length) {
                            while (true) {
                              obj4 = arr5[num13];
                              tmp30 = c10;
                              tmp31 = num13;
                              num12 = 0;
                              if (0 >= c10.REQUIRED_OPTIONS_FOR_LINE_ITEMS.length) {
                                num13 = num13 + 1;
                                tmp35 = tmp30;
                              } else {
                                tmp32 = c10;
                                tmp33 = num12;
                                tmp34 = c10;
                                while (obj4.hasOwnProperty(flag2)) {
                                  num12 = num12 + 1;
                                  tmp30 = tmp32;
                                }
                              }
                              tmp36 = tmp34;
                              if (flag2) {
                                str19 = ".";
                                str = `${tmp28}.${flag2}`;
                                break label0;
                              }
                              break label0;
                            }
                          }
                          tmp34 = tmp35;
                          flag2 = false;
                        }
                      }
                      sum = num11 + 1;
                      num11 = sum;
                      str = false;
                      if (sum < tmp36.REQUIRED_OPTIONS_FOR_PAY_UPON_INVOICE_PAYMENT_TYPE.length) {
                        continue;
                      } else {
                        break;
                      }
                      break;
                    }
                    obj5 = global[tmp28];
                    num14 = 0;
                    if (0 >= tmp27.REQUIRED_OPTIONS_FOR_ADDRESS.length) {
                      tmp39 = tmp27;
                      flag3 = false;
                    } else {
                      tmp37 = c10;
                      tmp38 = num14;
                      tmp39 = c10;
                      while (obj5.hasOwnProperty(flag3)) {
                        num14 = num14 + 1;
                        tmp27 = tmp37;
                      }
                    }
                    tmp36 = tmp39;
                    if (flag3) {
                      str20 = ".";
                      str = `${tmp28}.${flag3}`;
                      break;
                    }
                    break;
                  }
                }
              } else {
                str = false;
                if ("blik" === str7.toLowerCase()) {
                  obj2 = global.blikOptions || {};
                  if (!global.redirectUrl) {
                    tmp9 = c10;
                    prop = c10.REQUIRED_OPTIONS_FOR_BLIK_SEAMLESS_PAYMENT_TYPE;
                    str9 = "onPaymentStart";
                    arr = prop.push("onPaymentStart");
                  }
                  tmp11 = c10;
                  num3 = 0;
                  num4 = 1;
                  num5 = 0;
                  if (0 >= c10.REQUIRED_OPTIONS_FOR_BLIK_SEAMLESS_PAYMENT_TYPE.length) {
                    str10 = "level_0";
                    if (obj2.hasOwnProperty("level_0")) {
                      num8 = 0;
                      flag = false;
                      if (0 < tmp11.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_LEVEL_0.length) {
                        tmp23 = c10.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_LEVEL_0[num8];
                        level_0 = obj2.level_0;
                        tmp22 = c10;
                        tmp24 = num8;
                        while (level_0.hasOwnProperty(tmp23)) {
                          sum1 = num8 + 1;
                          num8 = sum1;
                          flag = false;
                        }
                        str15 = "blikOptions.level_0.";
                        flag = `blikOptions.level_0.${tmp23}`;
                      }
                    } else {
                      str11 = "oneClick";
                      flag = false;
                      if (obj2.hasOwnProperty("oneClick")) {
                        obj3 = obj2.oneClick || {};
                        str12 = "aliasKey";
                        if (obj3.hasOwnProperty("aliasKey")) {
                          num7 = 0;
                          flag = false;
                          if (0 < tmp11.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_SUBSEQUENT.length) {
                            tmp19 = c10.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_SUBSEQUENT[num7];
                            tmp18 = c10;
                            tmp20 = num7;
                            while (obj3.hasOwnProperty(tmp19)) {
                              sum2 = num7 + 1;
                              num7 = sum2;
                              flag = false;
                            }
                            str14 = "blikOptions.oneClick.";
                            flag = `blikOptions.oneClick.${tmp19}`;
                          }
                        } else {
                          num6 = 0;
                          flag = false;
                          if (0 < tmp11.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_FIRST.length) {
                            tmp15 = c10.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_FIRST[num6];
                            tmp14 = c10;
                            tmp16 = num6;
                            while (obj3.hasOwnProperty(tmp15)) {
                              sum3 = num6 + 1;
                              num6 = sum3;
                              flag = false;
                            }
                            str13 = "blikOptions.oneClick.";
                            flag = `blikOptions.oneClick.${tmp15}`;
                          }
                        }
                      }
                    }
                  } else {
                    tmp12 = c10;
                    tmp13 = num5;
                    while (global.hasOwnProperty(flag)) {
                      num5 = num5 + 1;
                      tmp11 = tmp12;
                      break;
                    }
                  }
                  str = flag;
                }
              }
            } else {
              if (!global.redirectUrl) {
                tmp3 = c10;
                prop1 = c10.REQUIRED_OPTIONS_FOR_START_PAYMENT;
                str6 = "onPaymentStart";
                arr1 = prop1.push("onPaymentStart");
              }
              tmp5 = c10;
              num = 0;
              num2 = 1;
              if (0 >= c10.REQUIRED_OPTIONS_FOR_START_PAYMENT.length) {
                str = "fallback.url";
                if (global.fallback.url) {
                  str = "fallback.buttonText";
                  if (global.fallback.buttonText) {
                    str = false;
                    if (true === global.recurrent) {
                      str = false;
                      if (!global.customerId) {
                        str = "customerId";
                      }
                    }
                  }
                }
              } else {
                tmp7 = c10.REQUIRED_OPTIONS_FOR_START_PAYMENT[num];
                tmp6 = c10;
                tmp8 = num;
                str = tmp7;
                while (global.hasOwnProperty(tmp7)) {
                  num = num + 1;
                  break;
                }
              }
            }
          }
          if (str) {
            tmp71 = reject;
            tmp72 = c11;
            tmp73 = new.target;
            tmp74 = new.target;
            tmp75 = new reject(c11.LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION);
            tmp76 = tmp75;
            if (typeof str === "string") {
              str29 = "Missing required '";
              str30 = "' option.";
              tmp75.details = `Missing required '${str}' option.`;
            }
            tmp77 = globalThis;
            _Promise2 = Promise;
            rejectResult = Promise.reject(tmp75);
          } else {
            size = global.windowOptions || {};
            tmp41 = global.address || {};
            tmp42 = global.fallback || {};
            tmp43 = global.billingAddress || {};
            obj = { amount: null, billingAddress: null, birthDate: null, blikOptions: null, city: null, correlationId: null, countryCode: null, currencyIsoCode: null, discountAmount: null, experienceProfile: null, firstName: null, fundingSource: null, intent: "sale", lastName: null, line1: null, line2: null, lineItems: null, merchantAccountId: null, merchantOrPartnerCustomerId: null, payerEmail: null, paymentTypeCountryCode: null, phone: null, phoneCountryCode: null, postalCode: null, recurrent: null, shippingAmount: null, state: null };
            obj[0] = global.amount;
            obj1 = { line1: null, line2: null, city: null, state: null, postalCode: null, countryCode: null };
            ({ streetAddress: obj7[0], extendedAddress: obj7[1], locality: obj7[2], region: obj7[3], postalCode: obj7[4], countryCode: obj7[5] } = tmp43);
            obj[1] = obj1;
            ({ birthDate: obj6[2], blikOptions: obj6[3] } = global);
            obj[4] = tmp41.locality;
            obj[5] = global.correlationId;
            obj[6] = tmp41.countryCode;
            ({ currencyCode: obj6[7], discountAmount: obj6[8] } = global);
            obj2 = { brandName: null, customerServiceInstructions: null, locale: null, noShipping: null };
            ({ displayName: obj8[0], customerServiceInstructions: obj8[1], locale: obj8[2] } = global);
            obj2[3] = !global.shippingAddressRequired;
            obj[9] = obj2;
            ({ givenName: obj6[10], paymentType: obj6[11], surname: obj6[13] } = global);
            ({ streetAddress: obj6[14], extendedAddress: obj6[15] } = tmp41);
            obj[16] = global.lineItems;
            obj[17] = self._merchantAccountId;
            ({ customerId: obj6[18], email: obj6[19], paymentTypeCountryCode: obj6[20], phone: obj6[21], phoneCountryCode: obj6[22] } = global);
            obj[23] = tmp41.postalCode;
            ({ recurrent: obj6[24], shippingAmount: obj6[25] } = global);
            obj[26] = tmp41.region;
            obj9 = c9;
            queryify = c9.queryify;
            if (self._isRedirectFlow) {
              queryifyResult = queryify(self._redirectUrl, { wasCanceled: true });
              _redirectUrl = self._redirectUrl;
            } else {
              str21 = "/html/local-payment-redirect-frame";
              text = `${self._assetsUrl}/html/local-payment-redirect-frame`;
              tmp45 = c2;
              obj3 = { channel: null, r: null, t: null, c: 1 };
              obj3[0] = _serviceId;
              url = tmp42.cancelUrl;
              text1 = `${self._assetsUrl}/html/local-payment-redirect-frame${c2(self._isDebug)}`;
              if (!url) {
                url = tmp42.url;
              }
              obj3[1] = url;
              tmp47 = tmp42.cancelButtonText || tmp42.buttonText;
              str22 = ".html";
              obj3[2] = tmp47;
              queryifyResult1 = queryify(`${tmp46}.html`, obj3);
              text2 = `${self._assetsUrl}/html/local-payment-redirect-frame`;
              obj4 = { channel: null, r: null, t: null };
              obj4[0] = _serviceId;
              ({ url: obj11[1], buttonText: obj11[2] } = tmp42);
              _redirectUrl = obj9.queryify(`${`${self._assetsUrl}/html/local-payment-redirect-frame`}${tmp45(self._isDebug)}.html`, obj4);
              queryifyResult = queryifyResult1;
            }
            tmp51 = assign;
            obj5 = { cancelUrl: null, returnUrl: null };
            obj5[0] = queryifyResult;
            obj5[1] = _redirectUrl;
            tmp52 = assign(obj, obj5);
            str23 = global.paymentType;
            self._paymentType = str23.toLowerCase();
            if (self._authorizationInProgress) {
              if (!self._isRedirectFlow) {
                tmp53 = c4;
                str24 = ".local-payment.start-payment.error.already-opened";
                sendEventResult = c4.sendEvent(self._client, `${self._paymentType}.local-payment.start-payment.error.already-opened`);
                tmp55 = globalThis;
                _Promise = Promise;
                tmp56 = reject;
                tmp57 = c11;
                tmp58 = new.target;
                tmp59 = new.target;
                tmp60 = new reject(c11.LOCAL_PAYMENT_ALREADY_IN_PROGRESS);
                tmp61 = tmp60;
                rejectResult = Promise.reject(tmp60);
              }
            }
            self._authorizationInProgress = true;
            tmp63 = closure_8;
            tmp64 = new.target;
            tmp65 = new.target;
            tmp66 = new closure_8();
            tmp67 = tmp66;
            reject = tmp66;
            obj13 = global.blikOptions || {};
            if (typeof global.paymentType === "string") {
              str25 = global.paymentType;
              paymentType2 = str25.toLowerCase();
            } else {
              paymentType2 = global.paymentType;
            }
            str26 = "blik";
            if ("blik" === paymentType2) {
              str27 = "level_0";
              hasOwnPropertyResult1 = obj13.hasOwnProperty("level_0");
              if (!hasOwnPropertyResult1) {
                str28 = "oneClick";
                hasOwnPropertyResult1 = obj13.hasOwnProperty("oneClick");
              }
              _isRedirectFlow = hasOwnPropertyResult1;
            } else {
              items1 = ["pay_upon_invoice", "mbway", "bancomatpay"];
              _isRedirectFlow = items1.includes(paymentType2);
            }
            if (!_isRedirectFlow) {
              _isRedirectFlow = self._isRedirectFlow;
            }
            if (!_isRedirectFlow) {
              self._startPaymentCallback = self._createStartPaymentCallback(() => { ... }, () => { ... });
              _frameService = self._frameService;
              num15 = size.width;
              if (!num15) {
                num15 = 1282;
              }
              obj6 = { width: null, height: null };
              obj6[0] = num15;
              obj6[1] = size.height || 720;
              openResult = _frameService.open(obj6, self._startPaymentCallback);
            }
            _client = self._client;
            obj7 = { method: "post", endpoint: "local_payments/create", data: null };
            obj7[2] = obj;
            requestResult = _client.request(obj7);
            nextPromise = requestResult.then(() => { ... });
            catchPromise = nextPromise.catch(() => { ... });
            rejectResult = tmp66;
          }
          return rejectResult;
        }
        tokenize(arg0) {
          self = this;
          parsed = global;
          self = this;
          _client = this._client;
          if (!global) {
            tmp2 = c9;
            parsed = c9.parse();
          }
          queryItems = parsed;
          if (parsed.queryItems) {
            queryItems = parsed.queryItems;
          }
          if (!queryItems.c) {
            if (!queryItems.wasCanceled) {
              if (queryItems.errorcode) {
                tmp4 = globalThis;
                _Promise = Promise;
                tmp5 = _client;
                obj = { type: null, code: null, message: null, details: null };
                tmp6 = c11;
                obj[0] = c11.LOCAL_PAYMENT_START_PAYMENT_FAILED.type;
                obj[1] = c11.LOCAL_PAYMENT_START_PAYMENT_FAILED.code;
                obj[2] = c11.LOCAL_PAYMENT_START_PAYMENT_FAILED.message;
                obj1 = { originalError: null };
                obj2 = { errorcode: null, token: null };
                ({ errorcode: obj4[0], btLpToken: obj4[1] } = queryItems);
                obj1[0] = obj2;
                obj[3] = obj1;
                tmp7 = new.target;
                tmp8 = new.target;
                tmp9 = obj;
                tmp10 = new _client(obj);
                tmp11 = tmp10;
                rejectResult = Promise.reject(tmp10);
              } else {
                obj = { endpoint: "payment_methods/paypal_accounts", method: "post", data: null };
                obj[2] = self._formatTokenizeData(queryItems);
                requestResult = _client.request(obj);
                nextPromise = requestResult.then(() => { ... });
                rejectResult = nextPromise.catch(() => { ... });
              }
            }
            return rejectResult;
          }
          obj3 = { type: c11.LOCAL_PAYMENT_CANCELED.type, code: c11.LOCAL_PAYMENT_CANCELED.code, message: c11.LOCAL_PAYMENT_CANCELED.message, details: { originalError: obj4 } };
          obj4 = { errorcode: queryItems.errorcode, token: queryItems.btLpToken };
          tmp12 = new _client(obj3);
          rejectResult = Promise.reject(tmp12);
          return;
        }
        closeWindow() {
          self = this;
          if (this._authoriztionInProgress) {
            tmp = c4;
            str = ".local-payment.start-payment.closed.by-merchant";
            sendEventResult = c4.sendEvent(self._client, `${self._paymentType}.local-payment.start-payment.closed.by-merchant`);
          }
          _frameService = self._frameService;
          closeResult = _frameService.close();
          return;
        }
        focusWindow() {
          _frameService = this._frameService;
          focusResult = _frameService.focus();
          return;
        }
        _createStartPaymentCallback(arg0, arg1) {
          closure_0 = global;
          closure_1 = module;
          self = this;
          _client = this._client;
          return () => { ... };
        }
        _formatTokenizePayload(arg0) {
          first = {};
          if (global.paypalAccounts) {
            first = global.paypalAccounts[0];
          }
          obj = { nonce: first.nonce, details: {}, type: first.type };
          if (first.details) {
            if (first.details.payerInfo) {
              obj.details = first.details.payerInfo;
            }
            if (first.details.correlationId) {
              obj.correlationId = first.details.correlationId;
            }
          }
          return obj;
        }
        hasTokenizationParams() {
          parsed = c9.parse();
          BooleanResult = parsed.errorcode;
          if (!BooleanResult) {
            tmp3 = globalThis;
            btLpPayerId = parsed.btLpToken;
            if (btLpPayerId) {
              btLpPayerId = parsed.btLpPaymentId;
            }
            if (btLpPayerId) {
              btLpPayerId = parsed.btLpPayerId;
            }
            BooleanResult = Boolean(btLpPayerId);
          }
          return BooleanResult;
        }
        _formatTokenizeData(arg0) {
          _client = this._client;
          obj = { merchantAccountId: this._merchantAccountId, paypalAccount: null };
          token = global.btLpToken;
          if (!token) {
            token = global.token;
          }
          obj = { correlationId: token, paymentToken: tmp, payerId: tmp2, unilateral: _client.getConfiguration().gatewayConfiguration.paypal.unvettedMerchant, intent: "sale" };
          tmp = global.btLpPaymentId || global.paymentId;
          tmp2 = global.btLpPayerId || global.PayerID;
          obj[1] = obj;
          return obj;
        }
        teardown() {
          self = this;
          if (!this._isRedirectFlow) {
            _frameService = self._frameService;
            teardownResult = _frameService.teardown();
          }
          tmp2 = c6(self, c5(LocalPayment.prototype));
          sendEventResult = c4.sendEvent(self._client, "local-payment.teardown-completed");
          return Promise.resolve();
        }
      }
      let closure_0 = global("../../lib/frame-service/external");
      let closure_1 = global("../../lib/braintree-error");
      let closure_2 = global("../../lib/use-min");
      const INTEGRATION_TIMEOUT_MS = global("../../lib/constants").INTEGRATION_TIMEOUT_MS;
      let closure_4 = global("../../lib/analytics");
      let closure_5 = global("../../lib/methods");
      let closure_6 = global("../../lib/convert-methods-to-error");
      let closure_7 = global("../../lib/convert-to-braintree-error");
      const globalResult = global("@braintree/extended-promise");
      let closure_8 = globalResult;
      let closure_9 = global("../../lib/querystring");
      let closure_10 = global("./constants");
      let closure_11 = global("../shared/errors");
      const assign = global("../../lib/assign").assign;
      globalResult.suppressUnhandledPromiseMessage = true;
      module.exports = global("@braintree/wrap-promise").wrapPrototype(LocalPayment);
    },
    { "../../lib/analytics": 138, "../../lib/assign": 140, "../../lib/braintree-error": 143, "../../lib/constants": 145, "../../lib/convert-methods-to-error": 146, "../../lib/convert-to-braintree-error": 147, "../../lib/frame-service/external": 158, "../../lib/methods": 175, "../../lib/querystring": 177, "../../lib/use-min": 181, "../shared/errors": 186, "./constants": 183, "@braintree/extended-promise": 31, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/analytics");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      let closure_4 = global("./external/local-payment");
      let closure_5 = global("../lib/braintree-error");
      let closure_6 = global("./shared/errors");
      const parse = global("../lib/querystring").parse;
      const globalResult = global("@braintree/wrap-promise");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          let obj = { name: "Local Payment", client: client.client, authorization: client.authorization };
          const verifyResult = closure_1.verify({ name: "Local Payment", client: client.client, authorization: client.authorization });
          return closure_1.verify({ name: "Local Payment", client: client.client, authorization: client.authorization }).then(() => outer1_2.create({ authorization: client.authorization, client: client.client, debug: client.debug, assetsUrl: outer1_3.create(client.authorization), name: "Local Payment" })).then((client) => {
            obj.client = client;
            if (true !== client.getConfiguration().gatewayConfiguration.paypalEnabled) {
              const tmp12 = new outer1_5(outer1_6.LOCAL_PAYMENT_NOT_ENABLED);
              let rejectResult = Promise.reject(tmp12);
            } else {
              client.sendEvent(client, "local-payment.initialized");
              obj = new outer1_4(tmp);
              if (tmp.redirectUrl) {
                const _window = window;
                const tmp5 = outer1_7(window.location.href);
                if (tmp5.token) {
                  const tokenizeResult = obj.tokenize(tmp5);
                  let catchPromise = obj.tokenize(tmp5).then((tokenizePayload) => {
                    obj.tokenizePayload = tokenizePayload;
                    return obj;
                  }).catch((arg0) => {
                    console.log("Error while tokenizing: ", arg0);
                    return obj;
                  });
                  const nextPromise = obj.tokenize(tmp5).then((tokenizePayload) => {
                    obj.tokenizePayload = tokenizePayload;
                    return obj;
                  });
                } else {
                  catchPromise = obj;
                }
                rejectResult = catchPromise;
              } else {
                rejectResult = obj._initialize();
              }
            }
            return rejectResult;
          });
        }),
        VERSION: "3.112.1"
      };
    },
    { "../lib/analytics": 138, "../lib/basic-component-verification": 141, "../lib/braintree-error": 143, "../lib/create-assets-url": 148, "../lib/create-deferred-client": 150, "../lib/querystring": 177, "./external/local-payment": 184, "./shared/errors": 186, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT, code: "LOCAL_PAYMENT_NOT_ENABLED", message: "LocalPayment is not enabled for this merchant." };
      obj = { type: globalResult.types.MERCHANT, code: "LOCAL_PAYMENT_ALREADY_IN_PROGRESS", message: "LocalPayment payment is already in progress." };
      obj = { type: globalResult.types.CUSTOMER, code: "LOCAL_PAYMENT_CANCELED", message: "Customer canceled the LocalPayment before authorizing." };
      module.exports = { LOCAL_PAYMENT_NOT_ENABLED: obj, LOCAL_PAYMENT_ALREADY_IN_PROGRESS: obj, LOCAL_PAYMENT_CANCELED: obj, LOCAL_PAYMENT_WINDOW_CLOSED: { type: globalResult.types.CUSTOMER, code: "LOCAL_PAYMENT_WINDOW_CLOSED", message: "Customer closed LocalPayment window before authorizing." }, LOCAL_PAYMENT_WINDOW_OPEN_FAILED: { type: globalResult.types.MERCHANT, code: "LOCAL_PAYMENT_WINDOW_OPEN_FAILED", message: "LocalPayment window failed to open; make sure startPayment was called in response to a user action." }, LOCAL_PAYMENT_START_PAYMENT_FAILED: { type: globalResult.types.NETWORK, code: "LOCAL_PAYMENT_START_PAYMENT_FAILED", message: "LocalPayment startPayment failed." }, LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION: { type: globalResult.types.MERCHANT, code: "LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION", message: "Missing required option for startPayment." }, LOCAL_PAYMENT_START_PAYMENT_DEFERRED_PAYMENT_FAILED: { type: globalResult.types.UNKNOWN, code: "LOCAL_PAYMENT_START_PAYMENT_DEFERRED_PAYMENT_FAILED", message: "LocalPayment startPayment deferred payment failed." }, LOCAL_PAYMENT_TOKENIZATION_FAILED: { type: globalResult.types.NETWORK, code: "LOCAL_PAYMENT_TOKENIZATION_FAILED", message: "Could not tokenize user's local payment method." }, LOCAL_PAYMENT_INVALID_PAYMENT_OPTION: { type: globalResult.types.MERCHANT, code: "LOCAL_PAYMENT_INVALID_PAYMENT_OPTION", message: "Local payment options are invalid." } };
    },
    { "../../lib/braintree-error": 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class Masterpass {
        constructor(arg0) {
          obj = {};
          client = global.client;
          configuration = client.getConfiguration();
          obj._client = global.client;
          obj._assetsUrl = `${tmp.gatewayConfiguration.assetsUrl}/web/3.112.1`;
          obj._isDebug = configuration.isDebug;
          obj._authInProgress = false;
          if (window.popupBridge) {
            _window = window;
            if (typeof window.popupBridge.getReturnUrlPrefix === "function") {
              _window2 = window;
              popupBridge = window.popupBridge;
              str2 = "return";
              obj._callbackUrl = `${popupBridge.getReturnUrlPrefix()}return`;
            }
            return;
          }
          str = ".min";
          text = `${obj._assetsUrl}/html/redirect-frame`;
          if (obj._isDebug) {
            str = "";
          }
          obj._callbackUrl = text + str + ".html";
          return;
        }
        _initialize() {
          self = this;
          promise = new Promise(() => { ... });
          return promise;
        }
        tokenize(arg0) {
          closure_0 = global;
          self = this;
          if (global) {
            tmp2 = c7;
            num = 0;
            num2 = 1;
            flag = false;
            if (0 < c7.REQUIRED_OPTIONS_FOR_TOKENIZE.length) {
              tmp3 = c7;
              tmp4 = num;
              flag = true;
              while (global.hasOwnProperty(c7.REQUIRED_OPTIONS_FOR_TOKENIZE[num])) {
                sum = num + 1;
                num = sum;
                flag = false;
                if (sum >= tmp3.REQUIRED_OPTIONS_FOR_TOKENIZE.length) {
                  break;
                }
              }
            }
            if (!flag) {
              tmp6 = globalThis;
              _Promise = Promise;
              if (tmp._authInProgress) {
                tmp10 = self;
                tmp11 = c2;
                tmp12 = new.target;
                tmp13 = new.target;
                tmp14 = new self(c2.MASTERPASS_TOKENIZATION_ALREADY_IN_PROGRESS);
                tmp15 = tmp14;
                rejectResult = _Promise.reject(tmp14);
              } else {
                tmp7 = new.target;
                tmp8 = new.target;
                rejectResult = new _Promise(() => { ... });
              }
            }
            return rejectResult;
          }
          tmp16 = new self(c2.MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION);
          rejectResult = Promise.reject(tmp16);
          return;
        }
        _navigateFrameToLoadingPage(arg0) {
          closure_0 = global;
          self = this;
          this._authInProgress = true;
          _client = this._client;
          obj = { originUrl: `${window.location.protocol}//${window.location.hostname}`, subtotal: global.subtotal, currencyCode: global.currencyCode, callbackUrl: this._callbackUrl };
          requestResult = _client.request({ method: "post", endpoint: "masterpass/request_token", data: { requestToken: obj } });
          nextPromise = requestResult.then(() => { ... });
          return nextPromise.catch(() => { ... });
        }
        _createFrameOpenHandler(arg0, arg1) {
          closure_0 = global;
          closure_1 = module;
          self = this;
          return window.popupBridge ? (() => { ... }) : (() => { ... });
        }
        _tokenizeMasterpass(arg0) {
          self = this;
          self = this;
          if ("success" !== global.mpstatus) {
            tmp12 = c4;
            str2 = "masterpass.tokenization.closed.by-user";
            sendEventResult = c4.sendEvent(self._client, "masterpass.tokenization.closed.by-user");
            _closeWindowResult = self._closeWindow();
            tmp15 = globalThis;
            _Promise2 = Promise;
            tmp16 = c1;
            tmp17 = c2;
            tmp18 = new.target;
            tmp19 = new.target;
            tmp20 = new c1(c2.MASTERPASS_POPUP_CLOSED);
            tmp21 = tmp20;
            rejectResult = Promise.reject(tmp20);
          } else {
            items = [, , ];
            ({ oauth_verifier: arr[0], oauth_token: arr[1], checkout_resource_url: arr[2] } = global);
            if (items.some(() => { ... })) {
              tmp2 = c4;
              str = "masterpass.tokenization.closed.missing-payload";
              sendEventResult1 = c4.sendEvent(self._client, "masterpass.tokenization.closed.missing-payload");
              _closeWindowResult1 = self._closeWindow();
              tmp5 = globalThis;
              _Promise = Promise;
              tmp6 = c1;
              tmp7 = c2;
              tmp8 = new.target;
              tmp9 = new.target;
              tmp10 = new c1(c2.MASTERPASS_POPUP_MISSING_REQUIRED_PARAMETERS);
              tmp11 = tmp10;
              rejectResult = Promise.reject(tmp10);
            } else {
              _client = self._client;
              obj = { endpoint: "payment_methods/masterpass_cards", method: "post", data: null };
              obj = { masterpassCard: null };
              obj1 = { checkoutResourceUrl: null, requestToken: null, verifierToken: null };
              ({ checkout_resource_url: obj3[0], oauth_token: obj3[1], oauth_verifier: obj3[2] } = global);
              obj[0] = obj1;
              obj[2] = obj;
              requestResult = _client.request(obj);
              nextPromise = requestResult.then(() => { ... });
              rejectResult = nextPromise.catch(() => { ... });
            }
          }
          return rejectResult;
        }
        _closeWindow() {
          this._authInProgress = false;
          _frameService = this._frameService;
          closeResult = _frameService.close();
          return;
        }
        teardown() {
          self = this;
          promise = new Promise(() => { ... });
          return promise;
        }
      }
      let closure_0 = global("../../lib/frame-service/external");
      let closure_1 = global("../../lib/braintree-error");
      let closure_2 = global("../shared/errors");
      let closure_3 = global("../../lib/methods");
      let closure_4 = global("../../lib/analytics");
      let closure_5 = global("../../lib/convert-methods-to-error");
      let closure_6 = global("../../lib/convert-to-braintree-error");
      let closure_7 = global("../shared/constants");
      const INTEGRATION_TIMEOUT_MS = global("../../lib/constants").INTEGRATION_TIMEOUT_MS;
      module.exports = global("@braintree/wrap-promise").wrapPrototype(Masterpass);
    },
    { "../../lib/analytics": 138, "../../lib/braintree-error": 143, "../../lib/constants": 145, "../../lib/convert-methods-to-error": 146, "../../lib/convert-to-braintree-error": 147, "../../lib/frame-service/external": 158, "../../lib/methods": 175, "../shared/constants": 190, "../shared/errors": 191, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("./shared/browser-detection");
      let closure_3 = global("./external/masterpass");
      let closure_4 = global("../lib/create-deferred-client");
      let closure_5 = global("../lib/create-assets-url");
      let closure_6 = global("./shared/errors");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          let obj = { name: "Masterpass", client: client.client, authorization: client.authorization };
          const verifyResult = closure_1.verify({ name: "Masterpass", client: client.client, authorization: client.authorization });
          const nextPromise = closure_1.verify({ name: "Masterpass", client: client.client, authorization: client.authorization }).then(() => {
            if (!popupBridge) {
              popupBridge = closure_2.supportsPopups();
            }
            if (Boolean(popupBridge)) {
              let resolveResult = _Promise.resolve();
            } else {
              const tmp6 = new closure_0(constants.MASTERPASS_BROWSER_NOT_SUPPORTED);
              resolveResult = _Promise.reject(tmp6);
            }
            return resolveResult;
          });
          return closure_1.verify({ name: "Masterpass", client: client.client, authorization: client.authorization }).then(() => {
            if (!popupBridge) {
              popupBridge = closure_2.supportsPopups();
            }
            if (Boolean(popupBridge)) {
              let resolveResult = _Promise.resolve();
            } else {
              const tmp6 = new closure_0(constants.MASTERPASS_BROWSER_NOT_SUPPORTED);
              resolveResult = _Promise.reject(tmp6);
            }
            return resolveResult;
          }).then(() => outer1_4.create({ authorization: client.authorization, client: client.client, debug: client.debug, assetsUrl: outer1_5.create(client.authorization), name: "Masterpass" })).then((client) => {
            client.client = client;
            client = client.client;
            if (client.getConfiguration().gatewayConfiguration.masterpass) {
              const obj = new outer1_3(tmp);
              let _initializeResult = obj._initialize();
            } else {
              const tmp7 = new client(outer1_6.MASTERPASS_NOT_ENABLED);
              _initializeResult = Promise.reject(tmp7);
            }
            return _initializeResult;
          });
        }),
        isSupported() {
          if (!popupBridge) {
            popupBridge = closure_2.supportsPopups();
          }
          return Boolean(popupBridge);
        },
        VERSION: "3.112.1"
      };
    },
    { "../lib/basic-component-verification": 141, "../lib/braintree-error": 143, "../lib/create-assets-url": 148, "../lib/create-deferred-client": 150, "./external/masterpass": 187, "./shared/browser-detection": 189, "./shared/errors": 191, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { supportsPopups: global("@braintree/browser-detection/supports-popups") };
    },
    { "@braintree/browser-detection/supports-popups": 29 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { LANDING_FRAME_NAME: "braintreemasterpasslanding", POPUP_WIDTH: 450, POPUP_HEIGHT: 660, MASTERPASS_VERSION: "v6", REQUIRED_OPTIONS_FOR_TOKENIZE: ["subtotal", "currencyCode"] };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      let obj = { type: globalResult.types.CUSTOMER, code: "MASTERPASS_BROWSER_NOT_SUPPORTED", message: "Browser is not supported." };
      obj = { type: globalResult.types.MERCHANT, code: "MASTERPASS_NOT_ENABLED", message: "Masterpass is not enabled for this merchant." };
      obj = { type: globalResult.types.MERCHANT, code: "MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION", message: "Missing required option for tokenize." };
      module.exports = { MASTERPASS_BROWSER_NOT_SUPPORTED: obj, MASTERPASS_NOT_ENABLED: obj, MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION: obj, MASTERPASS_TOKENIZATION_ALREADY_IN_PROGRESS: { type: globalResult.types.MERCHANT, code: "MASTERPASS_TOKENIZATION_ALREADY_IN_PROGRESS", message: "Masterpass tokenization is already in progress." }, MASTERPASS_ACCOUNT_TOKENIZATION_FAILED: { type: globalResult.types.NETWORK, code: "MASTERPASS_ACCOUNT_TOKENIZATION_FAILED", message: "Could not tokenize user's Masterpass account." }, MASTERPASS_POPUP_OPEN_FAILED: { type: globalResult.types.MERCHANT, code: "MASTERPASS_POPUP_OPEN_FAILED", message: "Masterpass popup failed to open. Make sure to tokenize in response to a user action, such as a click." }, MASTERPASS_POPUP_MISSING_REQUIRED_PARAMETERS: { type: globalResult.types.MERCHANT, code: "MASTERPASS_POPUP_MISSING_REQUIRED_PARAMETERS", message: "Masterpass popup failed to return all required parameters needed to continue tokenization." }, MASTERPASS_POPUP_CLOSED: { type: globalResult.types.CUSTOMER, code: "MASTERPASS_POPUP_CLOSED", message: "Customer closed Masterpass popup before authorizing." }, MASTERPASS_INVALID_PAYMENT_OPTION: { type: globalResult.types.MERCHANT, code: "MASTERPASS_INVALID_PAYMENT_OPTION", message: "Masterpass payment options are invalid." }, MASTERPASS_FLOW_FAILED: { type: globalResult.types.NETWORK, code: "MASTERPASS_FLOW_FAILED", message: "Could not initialize Masterpass flow." } };
    },
    { "../../lib/braintree-error": 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_12;
      let closure_13;
      class PaymentRequestComponent {
        constructor(arg0) {
          tmp = global.enabledPaymentMethods || {};
          self = this;
          tmp2 = closure_9;
          call = closure_9.call;
          if (typeof call === "unknown") {
            tmp2Result = tmp2();
          } else {
            callResult = call(self);
          }
          self._componentId = c6();
          self._client = global.client;
          obj = { basicCard: false !== tmp.basicCard, googlePay: false !== tmp.googlePay };
          self._enabledPaymentMethods = obj;
          num = 1;
          if (2 === global.googlePayVersion) {
            num = 2;
          }
          self._googlePayVersion = num;
          self._googleMerchantId = "18278000977346790994";
          self._supportedPaymentMethods = self._constructDefaultSupportedPaymentMethods();
          keys = Object.keys(self._supportedPaymentMethods);
          fn = () => { ... };
          self._defaultSupportedPaymentMethods = keys.map(fn.bind(self));
          obj = { channel: self._componentId };
          tmp4 = new framebus(obj);
          self._bus = tmp4;
          return;
        }
        _constructDefaultSupportedPaymentMethods() {
          self = this;
          _client = this._client;
          configuration = _client.getConfiguration();
          androidPay = configuration.gatewayConfiguration.androidPay;
          creditCards = configuration.gatewayConfiguration.creditCards;
          tmp2 = this._enabledPaymentMethods.basicCard && creditCards;
          if (tmp2) {
            num = 0;
            tmp2 = creditCards.supportedCardTypes.length > 0;
          }
          obj = {};
          if (tmp2) {
            obj = { supportedMethods: "basic-card", data: null };
            obj1 = { supportedNetworks: null };
            supportedCardTypes = creditCards.supportedCardTypes;
            obj1[0] = supportedCardTypes.reduce(() => { ... }, []);
            obj[1] = obj1;
            obj.basicCard = obj;
          }
          tmp3 = self._enabledPaymentMethods.googlePay && androidPay && androidPay.enabled;
          if (tmp3) {
            obj2 = { supportedMethods: "https://google.com/pay", data: null };
            tmp4 = c4;
            obj2[1] = c4(configuration, self._googlePayVersion, self._googleMerchantId);
            obj.googlePay = obj2;
          }
          return obj;
        }
        initialize() {
          _client = this._client;
          getConfiguration = _client.getConfiguration();
          self = this;
          this._frame = c5({ allowPaymentRequest: true, name: "braintree-payment-request-frame", class: "braintree-payment-request-frame", height: 0, width: 0, style: { position: "absolute", left: "-9999px" }, title: "Secure Payment Frame" });
          if (0 === this._defaultSupportedPaymentMethods.length) {
            tmp5 = globalThis;
            _Promise2 = Promise;
            tmp6 = c10;
            tmp7 = errors;
            tmp8 = new.target;
            tmp9 = new.target;
            tmp10 = new c10(errors.PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS);
            tmp11 = tmp10;
            rejectResult = Promise.reject(tmp10);
          } else {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = new.target;
            tmp3 = new.target;
            rejectResult = new Promise(() => { ... });
          }
          return rejectResult;
        }
        createSupportedPaymentMethodsConfiguration(arg0, arg1) {
          if (global) {
            if (this._enabledPaymentMethods[global]) {
              tmp14 = module;
              tmp15 = assign;
              tmp16 = assign({}, tmp7._supportedPaymentMethods[global]);
              tmp16.data = assign({}, tmp16.data, module);
              return tmp16;
            } else {
              tmp8 = c10;
              tmp9 = errors;
              tmp10 = new.target;
              tmp11 = new.target;
              tmp12 = new c10(errors.PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED);
              tmp13 = tmp12;
              throw tmp12;
            }
          } else {
            tmp = c10;
            tmp2 = errors;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp5 = new c10(errors.PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE);
            tmp6 = tmp5;
            throw tmp5;
          }
        }
        tokenize(arg0) {
          closure_0 = global;
          self = this;
          promise = new Promise(() => { ... });
          return promise;
        }
        canMakePayment(arg0) {
          closure_0 = global;
          self = this;
          tmp2 = globalThis;
          if (window.PaymentRequest) {
            if (!global.supportedPaymentMethods) {
              _Promise2 = Promise;
              tmp7 = new.target;
              tmp8 = new.target;
              promise = new Promise(() => { ... });
              tmp17 = promise;
            } else {
              prop = global.supportedPaymentMethods;
              item = prop.forEach(() => { ... });
              tmp6 = assign;
            }
            _Promise3 = tmp2.Promise;
            tmp10 = c10;
            obj = { type: null, code: null, message: null };
            tmp11 = errors;
            obj[0] = errors.PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD.type;
            obj[1] = errors.PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD.code;
            tmp12 = assign;
            str2 = " is not a supported payment method.";
            obj[2] = `${assign} is not a supported payment method.`;
            tmp13 = new.target;
            tmp14 = new.target;
            tmp15 = obj;
            tmp16 = new c10(obj);
            tmp2 = tmp16;
            promise = _Promise3.reject(tmp16);
          } else {
            tmp3 = closure_0;
            str = "payment-request.can-make-payment.not-available";
            sendEventResult = closure_0.sendEvent(tmp._client, "payment-request.can-make-payment.not-available");
            _Promise = Promise;
            flag = false;
            return Promise.resolve(false);
          }
          return;
        }
        teardown() {
          _bus = this._bus;
          teardownResult = _bus.teardown();
          parentNode = this._frame.parentNode;
          removeChildResult = parentNode.removeChild(this._frame);
          tmp3 = c3(this, c8(PaymentRequestComponent.prototype));
          sendEventResult = c0.sendEvent(this._client, "payment-request.teardown-completed");
          return Promise.resolve();
        }
        _formatTokenizationError(arg0) {
          name = global.name;
          self = this;
          if ("AbortError" === name) {
            tmp24 = c10;
            obj = { type: null, code: null, message: null, details: null };
            tmp25 = errors;
            obj[0] = errors.PAYMENT_REQUEST_CANCELED.type;
            obj[1] = errors.PAYMENT_REQUEST_CANCELED.code;
            obj[2] = errors.PAYMENT_REQUEST_CANCELED.message;
            obj1 = { originalError: null };
            obj1[0] = global;
            obj[3] = obj1;
            tmp26 = new.target;
            tmp27 = new.target;
            tmp28 = obj;
            tmp29 = new c10(obj);
            tmp30 = c0;
            str2 = "payment-request.tokenize.canceled";
            sendEventResult = c0.sendEvent(self._client, "payment-request.tokenize.canceled");
            tmp32 = tmp29;
            return tmp29;
          } else {
            str3 = "PAYMENT_REQUEST_INITIALIZATION_FAILED";
            if ("PAYMENT_REQUEST_INITIALIZATION_FAILED" === name) {
              tmp17 = c10;
              obj2 = { type: null, code: null, message: null, details: null };
              tmp18 = errors;
              obj2[0] = errors.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.type;
              obj2[1] = errors.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.code;
              obj2[2] = errors.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.message;
              obj3 = { originalError: null };
              obj3[0] = global;
              obj2[3] = obj3;
              tmp19 = new.target;
              tmp20 = new.target;
              tmp21 = obj2;
              tmp = new c10(obj2);
            } else {
              str4 = "BRAINTREE_GATEWAY_GOOGLE_PAYMENT_TOKENIZATION_ERROR";
              if ("BRAINTREE_GATEWAY_GOOGLE_PAYMENT_TOKENIZATION_ERROR" === name) {
                tmp12 = c10;
                obj4 = { type: null, code: null, message: null, details: null };
                tmp13 = errors;
                obj4[0] = errors.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.type;
                obj4[1] = errors.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.code;
                obj4[2] = errors.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.message;
                obj5 = { originalError: null };
                obj5[0] = global;
                obj4[3] = obj5;
                tmp14 = new.target;
                tmp15 = new.target;
                tmp16 = obj4;
                tmp = new c10(obj4);
              } else {
                str5 = "BRAINTREE_GATEWAY_GOOGLE_PAYMENT_PARSING_ERROR";
                if ("BRAINTREE_GATEWAY_GOOGLE_PAYMENT_PARSING_ERROR" === name) {
                  tmp7 = c10;
                  obj6 = { type: null, code: null, message: null, details: null };
                  tmp8 = errors;
                  obj6[0] = errors.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.type;
                  obj6[1] = errors.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.code;
                  obj6[2] = errors.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.message;
                  obj7 = { originalError: null };
                  obj7[0] = global;
                  obj6[3] = obj7;
                  tmp9 = new.target;
                  tmp10 = new.target;
                  tmp11 = obj6;
                  tmp = new c10(obj6);
                } else {
                  tmp = c10;
                  obj = { code: null, type: null, message: null, details: null };
                  obj[0] = errors.PAYMENT_REQUEST_NOT_COMPLETED.code;
                  CUSTOMER = global.type;
                  tmp2 = errors;
                  if (!CUSTOMER) {
                    CUSTOMER = tmp.types.CUSTOMER;
                  }
                  obj[1] = CUSTOMER;
                  obj[2] = tmp2.PAYMENT_REQUEST_NOT_COMPLETED.message;
                  obj8 = { originalError: null };
                  obj8[0] = global;
                  obj[3] = obj8;
                  tmp3 = new.target;
                  tmp4 = new.target;
                  tmp5 = obj;
                  tmp = new tmp(obj);
                }
              }
            }
            tmp22 = c0;
            str = "payment-request.tokenize.failed";
            sendEventResult1 = c0.sendEvent(self._client, "payment-request.tokenize.failed");
            return tmp;
          }
        }
        _formatCanMakePaymentError(arg0) {
          name = global.name;
          if ("PAYMENT_REQUEST_INITIALIZATION_FAILED" === name) {
            tmp12 = c10;
            obj = { type: null, code: null, message: null, details: null };
            tmp13 = errors;
            obj[0] = errors.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.type;
            obj[1] = errors.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.code;
            obj[2] = errors.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.message;
            obj1 = { originalError: null };
            obj1[0] = global;
            obj[3] = obj1;
            tmp14 = new.target;
            tmp15 = new.target;
            tmp16 = obj;
            tmp6 = new c10(obj);
          } else {
            str = "NotAllowedError";
            if ("NotAllowedError" === name) {
              tmp7 = c10;
              obj2 = { type: null, code: null, message: null, details: null };
              tmp8 = errors;
              obj2[0] = errors.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED.type;
              obj2[1] = errors.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED.code;
              obj2[2] = errors.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED.message;
              obj3 = { originalError: null };
              obj3[0] = global;
              obj2[3] = obj3;
              tmp9 = new.target;
              tmp10 = new.target;
              tmp11 = obj2;
              tmp6 = new c10(obj2);
            } else {
              tmp = c10;
              obj = { code: null, type: null, message: null, details: null };
              tmp2 = errors;
              obj[0] = errors.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED.code;
              obj[1] = errors.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED.type;
              obj[2] = errors.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED.message;
              obj4 = { originalError: null };
              obj4[0] = global;
              obj[3] = obj4;
              tmp3 = new.target;
              tmp4 = new.target;
              tmp5 = obj;
              tmp6 = new c10(obj);
            }
          }
          sendEventResult = c0.sendEvent(this._client, "payment-request.can-make-payment.failed");
          return tmp6;
        }
      }
      let closure_0 = global("../../lib/analytics");
      const assign = global("../../lib/assign").assign;
      let closure_2 = global("framebus");
      let closure_3 = global("../../lib/convert-methods-to-error");
      let closure_4 = global("../../lib/generate-google-pay-configuration");
      let closure_5 = global("@braintree/iframer");
      let closure_6 = global("@braintree/uuid");
      let closure_7 = global("../../lib/use-min");
      let closure_8 = global("../../lib/methods");
      const globalResult = global("@braintree/event-emitter");
      let closure_9 = globalResult;
      let closure_10 = global("../../lib/braintree-error");
      const globalResult1 = global("../shared/constants");
      ({ events: closure_12, errors: closure_13 } = globalResult1);
      let closure_14 = { Visa: "visa", MasterCard: "mastercard", "American Express": "amex", "Diners Club": "diners", Discover: "discover", JCB: "jcb", UnionPay: "unionpay", Maestro: "maestro" };
      const child = globalResult.createChild(PaymentRequestComponent);
      module.exports = global("@braintree/wrap-promise").wrapPrototype(PaymentRequestComponent);
    },
    { "../../lib/analytics": 138, "../../lib/assign": 140, "../../lib/braintree-error": 143, "../../lib/convert-methods-to-error": 146, "../../lib/generate-google-pay-configuration": 168, "../../lib/methods": 175, "../../lib/use-min": 181, "../shared/constants": 194, "@braintree/event-emitter": 30, "@braintree/iframer": 32, "@braintree/uuid": 36, "@braintree/wrap-promise": 40, framebus: 50 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./external/payment-request");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          const obj = { name: "Payment Request", client: client.client, authorization: client.authorization };
          const verifyResult = closure_1.verify({ name: "Payment Request", client: client.client, authorization: client.authorization });
          return closure_1.verify({ name: "Payment Request", client: client.client, authorization: client.authorization }).then(() => outer1_2.create({ authorization: client.authorization, client: client.client, debug: client.debug, assetsUrl: outer1_3.create(client.authorization), name: "Payment Request" })).then((client) => {
            closure_0.client = client;
            return new closure_0(closure_0).initialize();
          });
        }),
        VERSION: "3.112.1"
      };
    },
    { "../lib/basic-component-verification": 141, "../lib/create-assets-url": 148, "../lib/create-deferred-client": 150, "./external/payment-request": 192, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const obj = {};
      const globalResult = global("../../lib/enumerate");
      obj.events = globalResult(["CAN_MAKE_PAYMENT", "FRAME_READY", "FRAME_CAN_MAKE_REQUESTS", "PAYMENT_REQUEST_INITIALIZED", "SHIPPING_ADDRESS_CHANGE", "UPDATE_SHIPPING_ADDRESS", "SHIPPING_OPTION_CHANGE", "UPDATE_SHIPPING_OPTION"], "payment-request:");
      obj.errors = global("./errors");
      obj.SUPPORTED_METHODS = { "basic-card": true, "https://google.com/pay": true };
      module.exports = obj;
    },
    { "../../lib/enumerate": 153, "./errors": 195 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT, code: "PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS", message: "There are no supported payment methods associated with this account." };
      obj = { type: globalResult.types.CUSTOMER, code: "PAYMENT_REQUEST_CANCELED", message: "Payment request was canceled." };
      obj = { type: globalResult.types.MERCHANT, code: "PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED", message: "Something went wrong when configuring the payment request." };
      module.exports = { PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS: obj, PAYMENT_REQUEST_CANCELED: obj, PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED: obj, PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED: { type: globalResult.types.UNKNOWN, code: "PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED", message: "Something went wrong when calling `canMakePayment`" }, PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED: { type: globalResult.types.MERCHANT, code: "PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED", message: "Something went wrong when calling `canMakePayment`. Most likely, `canMakePayment` was called multiple times with different supportedMethods configurations." }, PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD: { type: globalResult.types.MERCHANT, code: "PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD" }, PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE: { type: globalResult.types.MERCHANT, code: "PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE", message: "Something went wrong when tokenizing the Google Pay card." }, PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR: { type: globalResult.types.UNKNOWN, code: "PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR", message: "Something went wrong when tokenizing the Google Pay card." }, PAYMENT_REQUEST_NOT_COMPLETED: { code: "PAYMENT_REQUEST_NOT_COMPLETED", message: "Payment request could not be completed." }, PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE: { type: globalResult.types.MERCHANT, code: "PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE", message: "createSupportedPaymentMethodsConfiguration must include a type parameter." }, PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED: { type: globalResult.types.MERCHANT, code: "PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED", message: "createSupportedPaymentMethodsConfiguration type parameter must be valid or enabled." } };
    },
    { "../../lib/braintree-error": 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT, code: "PAYPAL_NOT_ENABLED", message: "PayPal is not enabled for this merchant." };
      obj = { type: globalResult.types.MERCHANT, code: "PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED", message: "A linked PayPal Sandbox account is required to use PayPal Checkout in Sandbox. See https://developer.paypal.com/braintree/docs/guides/paypal/testing-go-live#linked-paypal-testing for details on linking your PayPal sandbox with Braintree." };
      obj = { type: globalResult.types.NETWORK, code: "PAYPAL_ACCOUNT_TOKENIZATION_FAILED", message: "Could not tokenize user's PayPal account." };
      module.exports = { PAYPAL_NOT_ENABLED: obj, PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED: obj, PAYPAL_ACCOUNT_TOKENIZATION_FAILED: obj, PAYPAL_FLOW_FAILED: { type: globalResult.types.NETWORK, code: "PAYPAL_FLOW_FAILED", message: "Could not initialize PayPal flow." }, PAYPAL_FLOW_OPTION_REQUIRED: { type: globalResult.types.MERCHANT, code: "PAYPAL_FLOW_OPTION_REQUIRED", message: "PayPal flow property is invalid or missing." }, PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED: { type: globalResult.types.MERCHANT, code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED" }, PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED: { type: globalResult.types.NETWORK, code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED", message: "Something went wrong when setting up the checkout workflow." }, PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED: { type: globalResult.types.MERCHANT, code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED", message: "PayPal popup failed to open, make sure to initiate the vault checkout in response to a user action." }, PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED: { type: globalResult.types.CUSTOMER, code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED", message: "Customer closed PayPal popup before authorizing." }, PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS: { type: globalResult.types.MERCHANT, code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS", message: "Vault initiated checkout already in progress." }, PAYPAL_INVALID_PAYMENT_OPTION: { type: globalResult.types.MERCHANT, code: "PAYPAL_INVALID_PAYMENT_OPTION", message: "PayPal payment options are invalid." }, PAYPAL_MISSING_REQUIRED_OPTION: { type: globalResult.types.MERCHANT, code: "PAYPAL_MISSING_REQUIRED_OPTION", message: "Missing required option." } };
    },
    { "../lib/braintree-error": 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/basic-component-verification");
      let closure_1 = global("./paypal-checkout");
      const globalResult = global("@braintree/wrap-promise");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          return closure_0.verify({ name: "PayPal Checkout", client: client.client, authorization: client.authorization }).then(() => new outer1_1(closure_0)._initialize(closure_0));
        }),
        isSupported() {
          return true;
        },
        VERSION: "3.112.1"
      };
    },
    { "../lib/basic-component-verification": 141, "./paypal-checkout": 198, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class PayPalCheckout {
        constructor(arg0) {
          obj = { _merchantAccountId: global.merchantAccountId, _autoSetDataUserIdToken: Boolean(global.autoSetDataUserIdToken) };
          return;
        }
        _initialize(arg0) {
          self = this;
          if (global.client) {
            client = global.client;
            configuration = client.getConfiguration();
            obj = { fingerprint: null, environment: null };
            obj[0] = configuration.authorizationFingerprint;
            obj[1] = configuration.gatewayConfiguration.environment;
            self._authorizationInformation = obj;
          } else {
            tmp = c10;
            tmp2 = c10(global.authorization);
            obj = { fingerprint: null, environment: null };
            obj[0] = tmp2.attrs.authorizationFingerprint;
            obj[1] = tmp2.environment;
            self._authorizationInformation = obj;
          }
          obj1 = { authorization: global.authorization, client: global.client, debug: global.debug, assetsUrl: c3.create(global.authorization), name: "PayPal Checkout" };
          obj2 = c2.create(obj1);
          fn = () => { ... };
          self._clientPromise = obj2.then(fn.bind(self));
          if (global.client) {
            _clientPromise = self._clientPromise;
            fn2 = /* F115868 */ function() { ... };
            nextPromise = _clientPromise.then(fn2.bind(self));
          } else {
            tmp4 = globalThis;
            _Promise = Promise;
            nextPromise = Promise.resolve(self);
          }
          return nextPromise;
        }
        _setupFrameService(arg0) {
          obj = {};
          closure_0 = global;
          tmp = new closure_4();
          assign = tmp;
          configuration = global.getConfiguration();
          f115869 = setTimeout(() => { ... }, INTEGRATION_TIMEOUT_MS);
          obj._assetsUrl = `${tmp2.gatewayConfiguration.paypal.assetsUrl}/web/3.112.1`;
          obj._isDebug = configuration.isDebug;
          obj._loadingFrameUrl = `${`${obj._assetsUrl}/html/paypal-landing-frame`}${c12(obj._isDebug)}.html`;
          obj = { name: "braintreepaypallanding", dispatchFrameUrl: `${`${obj._assetsUrl}/html/dispatch-frame`}${c12(obj._isDebug)}.html`, openFrameUrl: obj._loadingFrameUrl };
          fn = () => { ... };
          obj1 = c9.create(obj, fn.bind(obj));
          return tmp;
        }
        createPayment(arg0) {
          closure_0 = global;
          if (global) {
            tmp = c8;
            FLOW_ENDPOINTS = c8.FLOW_ENDPOINTS;
            if (FLOW_ENDPOINTS.hasOwnProperty(global.flow)) {
              self = this;
              tmp4 = closure_0;
              str = "paypal-checkout.createPayment";
              sendEventResult = closure_0.sendEvent(this._clientPromise, "paypal-checkout.createPayment");
              result = this._createPaymentResource(global);
              nextPromise = result.then(() => { ... });
            }
            return nextPromise;
          }
          tmp2 = new c5(c7.PAYPAL_FLOW_OPTION_REQUIRED);
          nextPromise = Promise.reject(tmp2);
          return;
        }
        _createPaymentResource(arg0, arg1) {
          self = this;
          closure_0 = global;
          obj = module;
          closure_1 = module;
          self = this;
          c3 = `paypal_hermes/${c8.FLOW_ENDPOINTS[global.flow]}`;
          this._flow = global.flow;
          delete tmp[tmp2];
          if (!module) {
            obj = {};
          }
          closure_1 = obj;
          if (true === global.offerCredit) {
            tmp3 = closure_0;
            str = "paypal-checkout.credit.offered";
            sendEventResult = closure_0.sendEvent(self._clientPromise, "paypal-checkout.credit.offered");
          }
          _clientPromise = self._clientPromise;
          nextPromise = _clientPromise.then(() => { ... });
          return nextPromise.catch(() => { ... });
        }
        updatePayment(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          if (global) {
            tmp = c8;
            if (!self._hasMissingOption(global, c8.REQUIRED_OPTIONS)) {
              tmp2 = closure_0;
              sendEvent = closure_0.sendEvent;
              _clientPromise = self._clientPromise;
              if (self._verifyConsistentCurrency(global)) {
                str3 = "paypal-checkout.updatePayment";
                sendEventResult = sendEvent(_clientPromise, "paypal-checkout.updatePayment");
                _clientPromise = self._clientPromise;
                nextPromise = _clientPromise.then(() => { ... });
                catchPromise = nextPromise.catch(() => { ... });
              } else {
                str = "paypal-checkout.updatePayment.inconsistent-currencies";
                sendEventResult1 = sendEvent(_clientPromise, "paypal-checkout.updatePayment.inconsistent-currencies");
                tmp4 = globalThis;
                _Promise = Promise;
                tmp5 = c5;
                obj = { type: null, code: null, message: null, details: null };
                tmp6 = c7;
                obj[0] = c7.PAYPAL_INVALID_PAYMENT_OPTION.type;
                obj[1] = c7.PAYPAL_INVALID_PAYMENT_OPTION.code;
                obj[2] = c7.PAYPAL_INVALID_PAYMENT_OPTION.message;
                obj = { originalError: null };
                _Error = Error;
                tmp7 = new.target;
                str2 = "One or more shipping option currencies differ from checkout currency.";
                tmp8 = new.target;
                error = new Error("One or more shipping option currencies differ from checkout currency.");
                tmp10 = error;
                obj[0] = error;
                obj[3] = obj;
                tmp11 = new.target;
                tmp12 = new.target;
                tmp13 = obj;
                tmp14 = new c5(obj);
                tmp15 = tmp14;
                catchPromise = Promise.reject(tmp14);
              }
            }
            return catchPromise;
          }
          sendEventResult2 = closure_0.sendEvent(self._clientPromise, "paypal-checkout.updatePayment.missing-options");
          tmp19 = new c5(c7.PAYPAL_MISSING_REQUIRED_OPTION);
          catchPromise = Promise.reject(tmp19);
          return;
        }
        startVaultInitiatedCheckout(arg0) {
          self = this;
          _addModalBackdrop = global;
          self = this;
          if (this._vaultInitiatedCheckoutInProgress) {
            tmp18 = _addModalBackdrop;
            str4 = "paypal-checkout.startVaultInitiatedCheckout.error.already-in-progress";
            sendEventResult = _addModalBackdrop.sendEvent(self._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.error.already-in-progress");
            tmp20 = globalThis;
            _Promise2 = Promise;
            tmp21 = c5;
            tmp22 = c7;
            tmp23 = new.target;
            tmp24 = new.target;
            tmp25 = new c5(c7.PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS);
            tmp26 = tmp25;
            rejectResult = Promise.reject(tmp25);
          } else {
            tmp = INTEGRATION_TIMEOUT_MS;
            item = INTEGRATION_TIMEOUT_MS.forEach(() => { ... });
            tmp3 = assign;
            if (assign) {
              tmp9 = globalThis;
              _Promise = Promise;
              tmp10 = c5;
              obj = { type: null, code: null, message: null };
              tmp11 = c7;
              obj[0] = c7.PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED.type;
              obj[1] = c7.PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED.code;
              tmp12 = assign;
              str2 = "Required param ";
              str3 = " is missing.";
              obj[2] = `Required param ${assign} is missing.`;
              tmp13 = new.target;
              tmp14 = new.target;
              tmp15 = obj;
              tmp16 = new c5(obj);
              tmp17 = tmp16;
              rejectResult = Promise.reject(tmp16);
            } else {
              flag = true;
              self._vaultInitiatedCheckoutInProgress = true;
              _addModalBackdropResult = self._addModalBackdrop(global);
              tmp5 = assign;
              _addModalBackdrop = assign({}, global, { flow: "checkout" });
              tmp6 = _addModalBackdrop;
              str = "paypal-checkout.startVaultInitiatedCheckout.started";
              sendEventResult1 = _addModalBackdrop.sendEvent(self._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.started");
              result = self._waitForVaultInitiatedCheckoutDependencies();
              nextPromise = result.then(() => { ... });
              catchPromise = nextPromise.catch(() => { ... });
              rejectResult = catchPromise.then(() => { ... });
            }
          }
          return rejectResult;
        }
        _addModalBackdrop(arg0) {
          if (!global.optOutOfModalBackdrop) {
            self = this;
            if (!this._modalBackdrop) {
              tmp = globalThis;
              _document = document;
              str = "div";
              self._modalBackdrop = document.createElement("div");
              _modalBackdrop = self._modalBackdrop;
              flag = true;
              str2 = "data-braintree-paypal-vault-initiated-checkout-modal";
              attr = _modalBackdrop.setAttribute("data-braintree-paypal-vault-initiated-checkout-modal", true);
              str3 = "fixed";
              self._modalBackdrop.style.position = "fixed";
              num = 0;
              self._modalBackdrop.style.top = 0;
              self._modalBackdrop.style.bottom = 0;
              self._modalBackdrop.style.left = 0;
              self._modalBackdrop.style.right = 0;
              num2 = 9999;
              self._modalBackdrop.style.zIndex = 9999;
              str4 = "black";
              self._modalBackdrop.style.background = "black";
              str5 = "0.7";
              self._modalBackdrop.style.opacity = "0.7";
              _modalBackdrop2 = self._modalBackdrop;
              fn = () => { ... };
              str6 = "click";
              listener = _modalBackdrop2.addEventListener("click", fn.bind(self));
            }
            tmp4 = globalThis;
            _document2 = document;
            body = document.body;
            appendChildResult = body.appendChild(self._modalBackdrop);
          }
          return;
        }
        _removeModalBackdrop() {
          self = this;
          tmp = this._modalBackdrop && self._modalBackdrop.parentNode;
          if (tmp) {
            parentNode = self._modalBackdrop.parentNode;
            removeChildResult = parentNode.removeChild(self._modalBackdrop);
          }
          return;
        }
        closeVaultInitiatedCheckoutWindow() {
          self = this;
          if (this._vaultInitiatedCheckoutInProgress) {
            tmp = c0;
            str = "paypal-checkout.startVaultInitiatedCheckout.canceled.by-merchant";
            sendEventResult = c0.sendEvent(self._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.canceled.by-merchant");
          }
          result = self._waitForVaultInitiatedCheckoutDependencies();
          fn = () => { ... };
          return result.then(fn.bind(self));
        }
        focusVaultInitiatedCheckoutWindow() {
          result = this._waitForVaultInitiatedCheckoutDependencies();
          fn = () => { ... };
          return result.then(fn.bind(this));
        }
        _createFrameServiceCallback(arg0) {
          closure_0 = global;
          self = this;
          return () => { ... };
        }
        _waitForVaultInitiatedCheckoutDependencies() {
          self = this;
          _clientPromise = this._clientPromise;
          return _clientPromise.then(() => { ... });
        }
        _constructVaultCheckutUrl(arg0) {
          text = `${this._assetsUrl}/html/${global}`;
          return text + c12(this._isDebug) + ".html?channel=" + this._frameService._serviceId;
        }
        tokenizePayment(arg0) {
          self = this;
          self = this;
          obj = { flow: this._flow, intent: tmp };
          tmp = global.intent || self.intentFromCreatePayment;
          c2 = obj;
          intentFromCreatePayment = { ecToken: global.paymentToken, billingToken: global.billingToken, payerId: global.payerID, paymentId: global.paymentID, orderId: global.orderID, shippingOptionsId: global.shippingOptionsId };
          flag = true;
          if (global.hasOwnProperty("vault")) {
            flag = global.vault;
          }
          obj.vault = flag;
          sendEventResult = c0.sendEvent(self._clientPromise, "paypal-checkout.tokenization.started");
          _clientPromise = self._clientPromise;
          nextPromise = _clientPromise.then(() => { ... });
          nextPromise1 = nextPromise.then(() => { ... });
          return nextPromise1.catch(() => { ... });
        }
        getClientId() {
          _clientPromise = this._clientPromise;
          return _clientPromise.then(() => { ... });
        }
        loadPayPalSDK(arg0) {
          closure_0 = global;
          promise = new closure_4();
          assign = promise;
          dataAttributes = global;
          if (global) {
            dataAttributes = global.dataAttributes;
          }
          if (!dataAttributes) {
            dataAttributes = {};
          }
          tmp3 = dataAttributes["user-id-token"] || dataAttributes["data-user-id-token"];
          self = this;
          fingerprint = tmp3;
          if (!this._configuration) {
            if (!tmp3) {
              fingerprint = self._authorizationInformation.fingerprint;
              if (fingerprint) {
                str = self._authorizationInformation.fingerprint;
                str2 = "?";
                fingerprint = str.split("?")[0];
              }
            }
            tmp4 = globalThis;
            _document = document;
            str3 = "script";
            self._paypalScript = document.createElement("script");
            tmp5 = assign;
            tmp6 = assign({}, { components: "buttons" }, global);
            closure_0 = tmp6;
            str4 = "dataAttributes";
            delete tmp[tmp2];
            str5 = tmp6.intent;
            if (tmp6.vault) {
              if (!str5) {
                str5 = "tokenize";
              }
              tmp6.intent = str5;
            } else {
              str6 = str5;
              if (!str5) {
                str6 = "authorize";
              }
              tmp6.intent = str6;
              tmp6.currency = tmp6.currency || "USD";
            }
            self._paypalScript.onload = function onload() { ... };
            _Object = Object;
            keys = Object.keys(dataAttributes);
            fn = () => { ... };
            item = keys.forEach(fn.bind(self));
            if (tmp6["client-id"]) {
              _Promise = Promise;
              resolved = Promise.resolve(tmp6["client-id"]);
            } else {
              resolved = self.getClientId();
            }
            fn2 = () => { ... };
            nextPromise = resolved.then(fn2.bind(self));
            fn3 = /* F115892 */ function() { ... };
            return promise.then(fn3.bind(self));
          } else {
            if (dataAttributes["client-metadata-id"]) {
              sessionId = dataAttributes["client-metadata-id"];
            } else {
              sessionId = self._configuration.analyticsMetadata.sessionId;
            }
            dataAttributes["client-metadata-id"] = sessionId;
          }
          return;
        }
        _attachPreloadPixel(arg0) {
          str = "sandbox.";
          ({ id, userIdToken } = global);
          if ("production" === this._authorizationInformation.environment) {
            str = "";
          }
          obj = { "client-id": id, "user-id-token": userIdToken };
          replaced = "https://www.{ENV}paypal.com/smart/buttons/preload".replace("{ENV}", str);
          if (global.amount) {
            obj.amount = global.amount;
          }
          if (global.currency) {
            obj.currency = global.currency;
          }
          if (global.merchantId) {
            obj["merchant-id"] = global.merchantId;
          }
          xMLHttpRequest = new XMLHttpRequest();
          openResult = xMLHttpRequest.open("GET", c14.queryify(replaced, obj));
          sendResult = xMLHttpRequest.send();
          return;
        }
        _formatPaymentResourceData(arg0, arg1) {
          self = this;
          str = global.intent;
          str2 = module.returnUrl;
          if (!str2) {
            str2 = "https://www.paypal.com/checkoutnow/error";
          }
          obj = { returnUrl: str2, cancelUrl: tmp, offerPaypalCredit: true === global.offerCredit, merchantAccountId: self._merchantAccountId, experienceProfile: null, shippingOptions: null, payer_email: null };
          tmp = module.cancelUrl || "https://www.paypal.com/checkoutnow/error";
          tmp2 = global.displayName || this._configuration.gatewayConfiguration.paypal.displayName;
          obj = { brandName: tmp2, localeCode: global.locale, noShipping: str3.toString(), addressOverride: false === global.shippingAddressEditable, landingPageType: global.landingPageType };
          str3 = !global.enableShippingAddress;
          obj[4] = obj;
          ({ shippingOptions: obj[5], userAuthenticationEmail: obj[6] } = global);
          if ("checkout" === global.flow) {
            ({ amount: obj.amount, currency: obj.currencyIsoCode, requestBillingAgreement: obj.requestBillingAgreement } = global);
            if (str) {
              str4 = "capture";
              if ("capture" === str) {
                str = "sale";
              }
              obj.intent = str;
            }
            str5 = "lineItems";
            if (global.hasOwnProperty("lineItems")) {
              obj.lineItems = global.lineItems;
            }
            str6 = "vaultInitiatedCheckoutPaymentMethodToken";
            if (global.hasOwnProperty("vaultInitiatedCheckoutPaymentMethodToken")) {
              obj.vaultInitiatedCheckoutPaymentMethodToken = global.vaultInitiatedCheckoutPaymentMethodToken;
            }
            str7 = "shippingOptions";
            if (global.hasOwnProperty("shippingOptions")) {
              obj.shippingOptions = global.shippingOptions;
            }
            for (const key10057 in arg0.shippingAddressOverride) {
              tmp4 = key10057;
              shippingAddressOverride = arg0.shippingAddressOverride;
              if (!shippingAddressOverride.hasOwnProperty(key10057)) {
                continue;
              } else {
                obj[key10057] = arg0.shippingAddressOverride[key10057];
                continue;
              }
              continue;
            }
            str8 = "billingAgreementDetails";
            if (global.hasOwnProperty("billingAgreementDetails")) {
              obj.billingAgreementDetails = global.billingAgreementDetails;
            }
          } else {
            obj.shippingAddress = global.shippingAddressOverride;
            if (global.billingAgreementDescription) {
              obj.description = global.billingAgreementDescription;
            }
            if (global.planType) {
              obj.plan_type = global.planType;
              if (global.planMetadata) {
                tmp3 = c15;
                obj.plan_metadata = c15(global.planMetadata);
              }
            }
          }
          self._riskCorrelationId = global.riskCorrelationId;
          if (global.riskCorrelationId) {
            obj.correlationId = self._riskCorrelationId;
          }
          return obj;
        }
        _verifyConsistentCurrency(arg0) {
          closure_0 = global;
          currency = global.currency;
          if (currency) {
            str = "shippingOptions";
            currency = global.hasOwnProperty("shippingOptions");
          }
          if (currency) {
            tmp = globalThis;
            _Array = Array;
            currency = Array.isArray(global.shippingOptions);
          }
          everyResult = !currency;
          if (currency) {
            shippingOptions = global.shippingOptions;
            everyResult = shippingOptions.every(() => { ... });
          }
          return everyResult;
        }
        _hasMissingOption(arg0, arg1) {
          items = module;
          if (!module) {
            items = [];
          }
          if (!global.hasOwnProperty("amount")) {
            str = "lineItems";
            if (!global.hasOwnProperty("lineItems")) {
              flag = true;
              return true;
            }
          }
          num = 0;
          if (0 < items.length) {
            tmp = num;
            while (global.hasOwnProperty(items[num])) {
              num = num + 1;
            }
            flag2 = true;
            return true;
          }
          return false;
        }
        _formatUpdatePaymentData(arg0) {
          obj = { merchantAccountId: this._merchantAccountId, paymentId: null, currencyIsoCode: null };
          orderId = global.paymentId;
          if (!orderId) {
            orderId = global.orderId;
          }
          obj[1] = orderId;
          obj[2] = global.currency;
          if (global.hasOwnProperty("amount")) {
            obj.amount = global.amount;
          }
          if (global.hasOwnProperty("lineItems")) {
            obj.lineItems = global.lineItems;
          }
          if (global.hasOwnProperty("shippingOptions")) {
            obj.shippingOptions = global.shippingOptions;
          }
          if (global.hasOwnProperty("amountBreakdown")) {
            obj.amountBreakdown = global.amountBreakdown;
          }
          if (global.hasOwnProperty("shippingAddress")) {
            tmp = c0;
            str = "paypal-checkout.updatePayment.shippingAddress.provided.by-the-merchant";
            sendEventResult = c0.sendEvent(this._clientPromise, "paypal-checkout.updatePayment.shippingAddress.provided.by-the-merchant");
            obj.line1 = global.shippingAddress.line1;
            shippingAddress = global.shippingAddress;
            str2 = "line2";
            if (shippingAddress.hasOwnProperty("line2")) {
              obj.line2 = global.shippingAddress.line2;
            }
            obj.city = global.shippingAddress.city;
            obj.state = global.shippingAddress.state;
            obj.postalCode = global.shippingAddress.postalCode;
            obj.countryCode = global.shippingAddress.countryCode;
            shippingAddress2 = global.shippingAddress;
            str3 = "phone";
            if (shippingAddress2.hasOwnProperty("phone")) {
              obj.phone = global.shippingAddress.phone;
            }
            shippingAddress3 = global.shippingAddress;
            str4 = "recipientName";
            if (shippingAddress3.hasOwnProperty("recipientName")) {
              obj.recipientName = global.shippingAddress.recipientName;
            }
          }
          return obj;
        }
        _formatTokenizeData(arg0, arg1) {
          self = this;
          ({ _configuration, _riskCorrelationId } = this);
          ({ gatewayConfiguration, authorizationType } = _configuration);
          if (!_riskCorrelationId) {
            _riskCorrelationId = module.billingToken;
          }
          if (!_riskCorrelationId) {
            _riskCorrelationId = module.ecToken;
          }
          tmp = "vault" === global.flow;
          obj = { correlationId: _riskCorrelationId, options: null };
          vault = tmp;
          if (tmp) {
            str = "TOKENIZATION_KEY";
            vault = "TOKENIZATION_KEY" !== authorizationType;
          }
          if (vault) {
            vault = global.vault;
          }
          obj = { paypalAccount: obj };
          obj[1] = { validate: vault };
          paypalAccount = obj.paypalAccount;
          if (tmp) {
            paypalAccount.billingAgreementToken = module.billingToken;
          } else {
            paypalAccount.paymentToken = module.paymentId || module.orderId;
            obj.paypalAccount.payerId = module.payerId;
            obj.paypalAccount.unilateral = gatewayConfiguration.paypal.unvettedMerchant;
            if (global.intent) {
              obj.paypalAccount.intent = global.intent;
            }
          }
          if (self._merchantAccountId) {
            obj.merchantAccountId = self._merchantAccountId;
          }
          return obj;
        }
        _formatTokenizePayload(arg0) {
          first = {};
          if (global.paypalAccounts) {
            first = global.paypalAccounts[0];
          }
          obj = { nonce: first.nonce, details: {}, type: first.type };
          tmp = first.details && first.details.payerInfo;
          if (tmp) {
            obj.details = first.details.payerInfo;
          }
          tmp2 = first.details && first.details.creditFinancingOffered;
          if (tmp2) {
            obj.creditFinancingOffered = first.details.creditFinancingOffered;
          }
          tmp3 = first.details && first.details.shippingOptionId;
          if (tmp3) {
            obj.shippingOptionId = first.details.shippingOptionId;
          }
          tmp4 = first.details && first.details.cobrandedCardLabel;
          if (tmp4) {
            obj.cobrandedCardLabel = first.details.cobrandedCardLabel;
          }
          return obj;
        }
        teardown() {
          self = this;
          self = this;
          tmp = c13(this, c11(PayPalCheckout.prototype));
          tmp2 = this._paypalScript && self._paypalScript.parentNode;
          if (tmp2) {
            parentNode = self._paypalScript.parentNode;
            removeChildResult = parentNode.removeChild(self._paypalScript);
          }
          _frameServicePromise = self._frameServicePromise;
          catchPromise = _frameServicePromise.catch(/* F115894 */ function() { ... });
          return catchPromise.then(() => { ... });
        }
      }
      let closure_0 = global("../lib/analytics");
      let assign = global("../lib/assign").assign;
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      const globalResult = global("@braintree/extended-promise");
      let closure_4 = globalResult;
      let closure_5 = global("../lib/braintree-error");
      let closure_6 = global("../lib/convert-to-braintree-error");
      let closure_7 = global("./errors");
      let closure_8 = global("../paypal/shared/constants");
      let closure_9 = global("../lib/frame-service/external");
      let closure_10 = global("../lib/create-authorization-data");
      let closure_11 = global("../lib/methods");
      let closure_12 = global("../lib/use-min");
      let closure_13 = global("../lib/convert-methods-to-error");
      let closure_14 = global("../lib/querystring");
      let closure_15 = global("../lib/camel-case-to-snake-case");
      const INTEGRATION_TIMEOUT_MS = global("../lib/constants").INTEGRATION_TIMEOUT_MS;
      let closure_17 = ["amount", "currency", "vaultInitiatedCheckoutPaymentMethodToken"];
      globalResult.suppressUnhandledPromiseMessage = true;
      module.exports = global("@braintree/wrap-promise").wrapPrototype(PayPalCheckout);
    },
    { "../lib/analytics": 138, "../lib/assign": 140, "../lib/braintree-error": 143, "../lib/camel-case-to-snake-case": 144, "../lib/constants": 145, "../lib/convert-methods-to-error": 146, "../lib/convert-to-braintree-error": 147, "../lib/create-assets-url": 148, "../lib/create-authorization-data": 149, "../lib/create-deferred-client": 150, "../lib/frame-service/external": 158, "../lib/methods": 175, "../lib/querystring": 177, "../lib/use-min": 181, "../paypal/shared/constants": 201, "./errors": 196, "@braintree/extended-promise": 31, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class PayPal {
        constructor(arg0) {
          obj = { _client: global.client, _assetsUrl: `${client.getConfiguration().gatewayConfiguration.paypal.assetsUrl}/web/${c5}`, _isDebug: client2.getConfiguration().isDebug, _loadingFrameUrl: `${`${obj._assetsUrl}/html/paypal-landing-frame`}${c3(obj._isDebug)}.html`, _authorizationInProgress: false };
          client = global.client;
          client2 = global.client;
          return;
        }
        _initialize() {
          self = this;
          _client = this._client;
          f115896 = setTimeout(() => {
            outer1_8.sendEvent(_client, "paypal.load.timed-out");
          }, INTEGRATION_TIMEOUT_MS);
          promise = new Promise((arg0) => {
            const _self = arg0;
            let obj = { name: outer1_6.LANDING_FRAME_NAME, dispatchFrameUrl: `${`${closure_0._assetsUrl}/html/dispatch-frame`}${outer1_3(closure_0._isDebug)}.html`, openFrameUrl: _self._loadingFrameUrl };
            obj = self.create(obj, () => { ... });
          });
          return promise;
        }
        tokenize(arg0, arg1) {
          self = this;
          closure_0 = global;
          _client = module;
          self = this;
          _client = this._client;
          tmp = module;
          if (module) {
            tmp2 = c4;
            tmp3 = c10;
            tmp4 = c4(c10(module));
            _client = tmp4;
            tmp = tmp4;
          }
          if (global) {
            tmp5 = c6;
            FLOW_ENDPOINTS = c6.FLOW_ENDPOINTS;
            if (FLOW_ENDPOINTS.hasOwnProperty(global.flow)) {
              tmp10 = globalThis;
              _Promise2 = Promise;
              tmp11 = new.target;
              tmp12 = new.target;
              promise = new Promise((arg0, arg1) => {
                if (self._authorizationInProgress) {
                  outer1_8.sendEvent(_client, "paypal.tokenization.error.already-opened");
                  const tmp22 = new closure_1(outer1_11.PAYPAL_TOKENIZATION_REQUEST_ACTIVE);
                  arg1(tmp22);
                } else {
                  obj._authorizationInProgress = true;
                  const _window = window;
                  if (!window.popupBridge) {
                    outer1_8.sendEvent(_client, "paypal.tokenization.opened");
                  }
                  if (true === offerCredit.offerCredit) {
                    outer1_8.sendEvent(_client, "paypal.credit.offered");
                  }
                  if (true === offerCredit.offerPayLater) {
                    outer1_8.sendEvent(_client, "paypal.paylater.offered");
                  }
                  obj._navigateFrameToAuth(offerCredit).catch(arg1);
                  const _frameService = obj._frameService;
                  _frameService.open({}, obj._createFrameServiceCallback(offerCredit, arg0, arg1));
                  const _navigateFrameToAuthResult = obj._navigateFrameToAuth(offerCredit);
                }
              });
              tmp13 = promise;
              handler = promise;
              if (tmp) {
                nextPromise = promise.then((arg0) => {
                  callback(null, arg0);
                });
                catchPromise = nextPromise.catch(tmp);
                _frameService2 = self._frameService;
                obj = { beforeClose: null };
                obj[0] = function beforeClose() {
                  outer1_8.sendEvent(_client, "paypal.tokenization.closed.by-merchant");
                };
                handler = _frameService2.createHandler(obj);
              }
              noopHandler = handler;
            }
            return noopHandler;
          }
          tmp6 = new _client(c11.PAYPAL_FLOW_OPTION_REQUIRED);
          if (tmp) {
            tmpResult = tmp(tmp6);
            _frameService = self._frameService;
            noopHandler = _frameService.createNoopHandler();
          } else {
            tmp7 = globalThis;
            _Promise = Promise;
            noopHandler = Promise.reject(tmp6);
          }
          return;
        }
        _createFrameServiceCallback(arg0, arg1, arg2) {
          closure_0 = global;
          closure_1 = module;
          closure_2 = exports;
          self = this;
          _client = this._client;
          return window.popupBridge ? ((arg0, path) => {
            if (path) {
              path = path.path;
            }
            if (path) {
              path = "/cancel" === path.path.substring(0, 7);
              const str = path.path;
            }
            self._authorizationInProgress = false;
            if (!arg0) {
              if (!path) {
                if (path) {
                  const _tokenizePayPalResult = self._tokenizePayPal(closure_0, path.queryItems);
                  self._tokenizePayPal(closure_0, path.queryItems).then(closure_1).catch(callback);
                  const nextPromise = self._tokenizePayPal(closure_0, path.queryItems).then(closure_1);
                }
              }
            }
            outer1_8.sendEvent(_client, "paypal.tokenization.closed-popupbridge.by-user");
            callback(new closure_1(outer1_11.PAYPAL_POPUP_CLOSED));
          }) : ((code) => {
            let obj = self;
            self._authorizationInProgress = false;
            if (code) {
              if ("FRAME_SERVICE_FRAME_CLOSED" === code.code) {
                outer1_8.sendEvent(_client, "paypal.tokenization.closed.by-user");
                const tmp25 = new closure_1(outer1_11.PAYPAL_POPUP_CLOSED);
                callback(tmp25);
              } else {
                code = code.code;
                if (code) {
                  code = code.code;
                  code = code.indexOf("FRAME_SERVICE_FRAME_OPEN_FAILED") > -1;
                }
                if (code) {
                  obj = { code: null, type: null, message: null, details: null };
                  obj[0] = outer1_11.PAYPAL_POPUP_OPEN_FAILED.code;
                  obj[1] = outer1_11.PAYPAL_POPUP_OPEN_FAILED.type;
                  obj[2] = outer1_11.PAYPAL_POPUP_OPEN_FAILED.message;
                  obj = { originalError: null };
                  obj[0] = code;
                  obj[3] = obj;
                  const tmp14 = new closure_1(obj);
                  callback(tmp14);
                }
              }
            } else if (arg1) {
              const _tokenizePayPalResult = obj._tokenizePayPal(closure_0, arg1);
              obj._tokenizePayPal(closure_0, arg1).then(closure_1).catch(callback);
              const nextPromise = obj._tokenizePayPal(closure_0, arg1).then(closure_1);
            }
          });
        }
        _tokenizePayPal(arg0, arg1) {
          self = this;
          self = this;
          _client = this._client;
          if (!window.popupBridge) {
            _frameService = self._frameService;
            redirectResult = _frameService.redirect(self._loadingFrameUrl);
          }
          obj = { endpoint: "payment_methods/paypal_accounts", method: "post", data: self._formatTokenizeData(global, module) };
          requestResult = _client.request(obj);
          nextPromise = requestResult.then((arg0) => {
            const result = self._formatTokenizePayload(arg0);
            const sendEvent = outer1_8.sendEvent;
            if (window.popupBridge) {
              sendEvent(tmp4, "paypal.tokenization.success-popupbridge");
              let tmp6 = tmp4;
            } else {
              sendEvent(tmp4, "paypal.tokenization.success");
              tmp6 = tmp4;
            }
            if (result.creditFinancingOffered) {
              outer1_8.sendEvent(tmp6, "paypal.credit.accepted");
            }
            const _frameService = self._frameService;
            _frameService.close();
            return result;
          });
          return nextPromise.catch((arg0) => {
            const sendEvent = outer1_8.sendEvent;
            if (window.popupBridge) {
              sendEvent(tmp2, "paypal.tokenization.failed-popupbridge");
            } else {
              sendEvent(tmp2, "paypal.tokenization.failed");
            }
            const _frameService = self._frameService;
            _frameService.close();
            return Promise.reject(outer1_2(arg0, { type: outer1_11.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.type, code: outer1_11.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.code, message: outer1_11.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.message }));
          });
        }
        _formatTokenizePayload(arg0) {
          first = {};
          if (global.paypalAccounts) {
            first = global.paypalAccounts[0];
          }
          obj = { nonce: first.nonce, details: {}, type: first.type };
          tmp = first.details && first.details.payerInfo;
          if (tmp) {
            obj.details = first.details.payerInfo;
          }
          tmp2 = first.details && first.details.creditFinancingOffered;
          if (tmp2) {
            obj.creditFinancingOffered = first.details.creditFinancingOffered;
          }
          return obj;
        }
        _formatTokenizeData(arg0, arg1) {
          _client = this._client;
          configuration = _client.getConfiguration();
          token = module.ba_token;
          ({ gatewayConfiguration, authorizationType } = configuration);
          if (!token) {
            token = module.token;
          }
          obj = { correlationId: token, options: null };
          tmp2 = "vault" === global.flow;
          if (tmp2) {
            str = "TOKENIZATION_KEY";
            tmp2 = "TOKENIZATION_KEY" !== authorizationType;
          }
          obj = { paypalAccount: obj };
          obj[1] = { validate: tmp2 };
          paypalAccount = obj.paypalAccount;
          if (module.ba_token) {
            paypalAccount.billingAgreementToken = module.ba_token;
          } else {
            ({ paymentId: paypalAccount.paymentToken, PayerID: obj2.paypalAccount.payerId } = module);
            obj.paypalAccount.unilateral = gatewayConfiguration.paypal.unvettedMerchant;
            str2 = "intent";
            if (global.hasOwnProperty("intent")) {
              obj.paypalAccount.intent = global.intent;
            }
          }
          return obj;
        }
        _navigateFrameToAuth(arg0) {
          closure_0 = global;
          self = this;
          _client = this._client;
          obj = { endpoint: `paypal_hermes/${c6.FLOW_ENDPOINTS[global.flow]}`, method: "post", data: this._formatPaymentResourceData(global) };
          requestResult = _client.request(obj);
          nextPromise = requestResult.then((paymentResource) => {
            if ("checkout" === flow.flow) {
              let approvalUrl = paymentResource.paymentResource.redirectUrl;
            } else {
              approvalUrl = paymentResource.agreementSetup.approvalUrl;
            }
            let queryifyResult = approvalUrl;
            if ("commit" === flow.useraction) {
              queryifyResult = outer1_13.queryify(approvalUrl, { useraction: "commit" });
            }
            if (window.popupBridge) {
              outer1_8.sendEvent(_client, "paypal.tokenization.opened-popupbridge");
            }
            const _frameService = self._frameService;
            _frameService.redirect(queryifyResult);
          });
          return nextPromise.catch((details) => {
            const _frameService = self._frameService;
            _frameService.close();
            self._authorizationInProgress = false;
            if (422 === tmp) {
              let obj = { type: null, code: null, message: null, details: null };
              obj[0] = outer1_11.PAYPAL_INVALID_PAYMENT_OPTION.type;
              obj[1] = outer1_11.PAYPAL_INVALID_PAYMENT_OPTION.code;
              obj[2] = outer1_11.PAYPAL_INVALID_PAYMENT_OPTION.message;
              obj = { originalError: null };
              obj[0] = details;
              obj[3] = obj;
              const tmp17 = new self(obj);
              let rejectResult = Promise.reject(tmp17);
            } else {
              obj = { type: null, code: null, message: null };
              obj[0] = outer1_11.PAYPAL_FLOW_FAILED.type;
              obj[1] = outer1_11.PAYPAL_FLOW_FAILED.code;
              obj[2] = outer1_11.PAYPAL_FLOW_FAILED.message;
              rejectResult = Promise.reject(_client(details, obj));
            }
            return rejectResult;
          });
        }
        _formatPaymentResourceData(arg0) {
          _client = this._client;
          gatewayConfiguration = _client.getConfiguration().gatewayConfiguration;
          _serviceId = this._frameService._serviceId;
          obj = { returnUrl: `${`${gatewayConfiguration.paypal.assetsUrl}/web/`}${c5}/html/redirect-frame${c3(this._isDebug)}.html?channel=${_serviceId}`, cancelUrl: `${`${gatewayConfiguration.paypal.assetsUrl}/web/`}${c5}/html/cancel-frame${c3(this._isDebug)}.html?channel=${_serviceId}`, offerPaypalCredit: true === global.offerCredit, offerPayLater: true === global.offerPayLater, experienceProfile: null };
          tmp = global.displayName || gatewayConfiguration.paypal.displayName;
          obj = { brandName: tmp, localeCode: global.locale, noShipping: str.toString(), addressOverride: false === global.shippingAddressEditable, landingPageType: global.landingPageType };
          str = !global.enableShippingAddress;
          obj[4] = obj;
          popupBridge = window.popupBridge;
          if (popupBridge) {
            _window = window;
            popupBridge = typeof window.popupBridge.getReturnUrlPrefix === "function";
          }
          if (popupBridge) {
            _window2 = window;
            popupBridge2 = window.popupBridge;
            str2 = "return";
            obj.returnUrl = `${popupBridge2.getReturnUrlPrefix()}return`;
            _window3 = window;
            popupBridge3 = window.popupBridge;
            str3 = "cancel";
            obj.cancelUrl = `${popupBridge3.getReturnUrlPrefix()}cancel`;
          }
          if ("checkout" === global.flow) {
            ({ amount: obj.amount, currency: obj.currencyIsoCode } = global);
            str4 = "intent";
            if (global.hasOwnProperty("intent")) {
              obj.intent = global.intent;
            }
            for (const key10084 in arg0.shippingAddressOverride) {
              tmp2 = key10084;
              shippingAddressOverride = arg0.shippingAddressOverride;
              if (!shippingAddressOverride.hasOwnProperty(key10084)) {
                continue;
              } else {
                obj[key10084] = arg0.shippingAddressOverride[key10084];
                continue;
              }
              continue;
            }
          } else {
            obj.shippingAddress = global.shippingAddressOverride;
            if (global.billingAgreementDescription) {
              obj.description = global.billingAgreementDescription;
            }
          }
          return obj;
        }
        closeWindow() {
          self = this;
          if (this._authorizationInProgress) {
            tmp = c8;
            str = "paypal.tokenize.closed.by-merchant";
            sendEventResult = c8.sendEvent(self._client, "paypal.tokenize.closed.by-merchant");
          }
          _frameService = self._frameService;
          closeResult = _frameService.close();
          return;
        }
        focusWindow() {
          _frameService = this._frameService;
          focusResult = _frameService.focus();
          return;
        }
      }
      let closure_0 = global("../../lib/frame-service/external");
      let closure_1 = global("../../lib/braintree-error");
      let closure_2 = global("../../lib/convert-to-braintree-error");
      let closure_3 = global("../../lib/use-min");
      let closure_4 = global("../../lib/once");
      let c5 = "3.112.1";
      let closure_6 = global("../shared/constants");
      const INTEGRATION_TIMEOUT_MS = global("../../lib/constants").INTEGRATION_TIMEOUT_MS;
      let closure_8 = global("../../lib/analytics");
      let closure_9 = global("../../lib/methods");
      let closure_10 = global("../../lib/deferred");
      let closure_11 = global("../shared/errors");
      let closure_12 = global("../../lib/convert-methods-to-error");
      let closure_13 = global("../../lib/querystring");
      PayPal.prototype.teardown = global("@braintree/wrap-promise")(function() {
        const _frameService = this._frameService;
        _frameService.teardown();
        callback5(this, callback3(PayPal.prototype));
        closure_8.sendEvent(this._client, "paypal.teardown-completed");
        return Promise.resolve();
      });
      module.exports = PayPal;
    },
    { "../../lib/analytics": 138, "../../lib/braintree-error": 143, "../../lib/constants": 145, "../../lib/convert-methods-to-error": 146, "../../lib/convert-to-braintree-error": 147, "../../lib/deferred": 151, "../../lib/frame-service/external": 158, "../../lib/methods": 175, "../../lib/once": 176, "../../lib/querystring": 177, "../../lib/use-min": 181, "../shared/constants": 201, "../shared/errors": 202, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/analytics");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      let closure_4 = global("../lib/braintree-error");
      let closure_5 = global("./shared/errors");
      let closure_6 = global("./external/paypal");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          let obj = { name: "PayPal", client: client.client, authorization: client.authorization };
          const verifyResult = closure_1.verify({ name: "PayPal", client: client.client, authorization: client.authorization });
          return closure_1.verify({ name: "PayPal", client: client.client, authorization: client.authorization }).then(() => outer1_2.create({ authorization: client.authorization, client: client.client, debug: client.debug, assetsUrl: outer1_3.create(client.authorization), name: "PayPal" })).then((client) => {
            client.client = client;
            if (true !== client.getConfiguration().gatewayConfiguration.paypalEnabled) {
              const tmp15 = new outer1_4(outer1_5.PAYPAL_NOT_ENABLED);
              let rejectResult = Promise.reject(tmp15);
            } else {
              client.sendEvent(tmp.client, "paypal.initialized");
              const obj = new outer1_6(tmp);
              rejectResult = obj._initialize();
            }
            return rejectResult;
          });
        }),
        isSupported() {
          return true;
        },
        VERSION: "3.112.1"
      };
    },
    { "../lib/analytics": 138, "../lib/basic-component-verification": 141, "../lib/braintree-error": 143, "../lib/create-assets-url": 148, "../lib/create-deferred-client": 150, "./external/paypal": 199, "./shared/errors": 202, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { LANDING_FRAME_NAME: "braintreepaypallanding", FLOW_ENDPOINTS: { checkout: "create_payment_resource", vault: "setup_billing_agreement" }, REQUIRED_OPTIONS: ["paymentId", "currency"] };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT, code: "PAYPAL_NOT_ENABLED", message: "PayPal is not enabled for this merchant." };
      obj = { type: globalResult.types.MERCHANT, code: "PAYPAL_TOKENIZATION_REQUEST_ACTIVE", message: "Another tokenization request is active." };
      obj = { type: globalResult.types.NETWORK, code: "PAYPAL_ACCOUNT_TOKENIZATION_FAILED", message: "Could not tokenize user's PayPal account." };
      module.exports = { PAYPAL_NOT_ENABLED: obj, PAYPAL_TOKENIZATION_REQUEST_ACTIVE: obj, PAYPAL_ACCOUNT_TOKENIZATION_FAILED: obj, PAYPAL_FLOW_FAILED: { type: globalResult.types.NETWORK, code: "PAYPAL_FLOW_FAILED", message: "Could not initialize PayPal flow." }, PAYPAL_FLOW_OPTION_REQUIRED: { type: globalResult.types.MERCHANT, code: "PAYPAL_FLOW_OPTION_REQUIRED", message: "PayPal flow property is invalid or missing." }, PAYPAL_POPUP_OPEN_FAILED: { type: globalResult.types.MERCHANT, code: "PAYPAL_POPUP_OPEN_FAILED", message: "PayPal popup failed to open, make sure to tokenize in response to a user action." }, PAYPAL_POPUP_CLOSED: { type: globalResult.types.CUSTOMER, code: "PAYPAL_POPUP_CLOSED", message: "Customer closed PayPal popup before authorizing." }, PAYPAL_INVALID_PAYMENT_OPTION: { type: globalResult.types.MERCHANT, code: "PAYPAL_INVALID_PAYMENT_OPTION", message: "PayPal payment options are invalid." } };
    },
    { "../../lib/braintree-error": 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/basic-component-verification");
      let closure_1 = global("./preferred-payment-methods");
      const globalResult = global("@braintree/wrap-promise");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          return closure_0.verify({ name: "PreferredPaymentMethods", client: client.client, authorization: client.authorization }).then(() => new outer1_1().initialize(closure_0));
        }),
        VERSION: "3.112.1"
      };
    },
    { "../lib/basic-component-verification": 141, "./preferred-payment-methods": 204, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class PreferredPaymentMethods {
        constructor() {
          return;
        }
        initialize(arg0) {
          self = this;
          obj = { authorization: global.authorization, client: global.client, debug: global.debug, assetsUrl: c1.create(global.authorization), name: "PreferredPaymentMethods" };
          obj = c2.create(obj);
          this._clientPromise = obj.catch(() => { ... });
          sendEventResult = self.sendEvent(this._clientPromise, "preferred-payment-methods.initialized");
          return Promise.resolve(this);
        }
        fetchPreferredPaymentMethods() {
          self = this;
          _clientPromise = this._clientPromise;
          nextPromise = _clientPromise.then(() => { ... });
          nextPromise1 = nextPromise.then(() => { ... });
          return nextPromise1.catch(() => { ... });
        }
      }
      let closure_0 = global("../lib/analytics");
      let closure_1 = global("../lib/create-assets-url");
      let closure_2 = global("../lib/create-deferred-client");
      module.exports = global("@braintree/wrap-promise").wrapPrototype(PreferredPaymentMethods);
    },
    { "../lib/analytics": 138, "../lib/create-assets-url": 148, "../lib/create-deferred-client": 150, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../../lib/braintree-error");
      let closure_1 = global("../shared/errors");
      let closure_2 = global("../../lib/frame-service/external");
      let closure_3 = global("../../lib/analytics");
      let closure_4 = global("../../lib/use-min");
      const BILLING_ADDRESS_OPTIONS = global("../shared/constants").BILLING_ADDRESS_OPTIONS;
      let closure_6 = global("../../lib/snake-case-to-camel-case");
      const assign = global("../../lib/assign").assign;
      let c8 = 400;
      let c9 = 570;
      module.exports = {
        createMandate(_client, locale) {
          let closure_0 = locale;
          obj = { sepa_debit: obj, locale: locale.locale, cancel_url: locale.cancelUrl, return_url: locale.returnUrl, merchant_account_id: locale.merchantAccountId };
          obj = { account_holder_name: locale.accountHolderName, billing_address: obj, iban: locale.iban, merchant_or_partner_customer_id: locale.customerId, mandate_type: locale.mandateType };
          obj = { country_code: locale.countryCode };
          if (locale.billingAddress) {
            const item = BILLING_ADDRESS_OPTIONS.forEach((arg0) => {
              const tmp = outer1_6(arg0);
              if (tmp in locale.billingAddress) {
                obj.sepa_debit.billing_address[arg0] = tmp2.billingAddress[tmp];
              }
            });
          }
          const requestResult = _client.request({ api: "clientApi", method: "post", endpoint: "sepa_debit", data: obj });
          return _client.request({ api: "clientApi", method: "post", endpoint: "sepa_debit", data: obj }).then((message) => {
            const sepaDebitAccount = message.message.body.sepaDebitAccount;
            if (sepaDebitAccount) {
              const obj = { approvalUrl: null, last4: null, bankReferenceToken: null };
              ({ approvalUrl: obj[0], last4: obj[1], bankReferenceToken: obj[2] } = sepaDebitAccount);
              return obj;
            } else {
              const tmp5 = new closure_0(obj.SEPA_CREATE_MANDATE_FAILED);
              throw tmp5;
            }
          }).catch(() => {
            throw new closure_0(obj.SEPA_CREATE_MANDATE_FAILED);
          });
        },
        openPopup(arg0, debug) {
          let closure_0 = arg0;
          let closure_1 = debug;
          let closure_2 = `${debug.assetsUrl}/html`;
          let closure_3 = debug.debug || false;
          return new Promise((arg0, arg1) => {
            let closure_0 = arg0;
            let closure_1 = arg1;
            const sum = Math.round((window.outerHeight - outer1_9) / 2) + window.screenTop;
            let obj = { name: "sepadirectdebit", dispatchFrameUrl: null, openFrameUrl: null, top: null, left: null, height: null, width: null };
            const sum1 = Math.round((window.outerWidth - outer1_8) / 2) + window.screenLeft;
            obj[1] = `${closure_2}/dispatch-frame${outer1_4(closure_3)}.html`;
            obj[2] = `${closure_2}/sepa-landing-frame${outer1_4(closure_3)}.html`;
            obj[3] = sum;
            obj[4] = sum1;
            obj[5] = outer1_9;
            obj[6] = outer1_8;
            obj = closure_2.create(obj, (open) => {
              let closure_0 = open;
              closure_3.sendEvent(closure_0, "sepa.popup.initialized");
              open.open({}, () => { ... });
              open.redirect(approvalUrl.approvalUrl);
            });
          });
        },
        handleApproval(_client, last_4) {
          let closure_0 = last_4;
          obj = { sepa_debit_account: obj, merchant_account_id: last_4.merchantAccountId };
          obj = { last_4: last_4.last4, merchant_or_partner_customer_id: last_4.customerId, bank_reference_token: last_4.bankReferenceToken, mandate_type: last_4.mandateType };
          const requestResult = _client.request({ api: "clientApi", method: "post", endpoint: "payment_methods/sepa_debit_accounts", data: obj });
          return _client.request({ api: "clientApi", method: "post", endpoint: "payment_methods/sepa_debit_accounts", data: obj }).then((nonce) => {
            if (nonce.nonce) {
              const obj = { nonce: null, ibanLastFour: null, customerId: null, mandateType: null };
              obj[0] = nonce.nonce;
              ({ last4: obj[1], customerId: obj[2], mandateType: obj[3] } = closure_0);
              return obj;
            } else {
              const tmp5 = new closure_0(outer1_1.SEPA_TRANSACTION_FAILED);
              throw tmp5;
            }
          }).catch(() => {
            throw new closure_0(constants.SEPA_TRANSACTION_FAILED);
          });
        },
        POPUP_WIDTH: 400,
        POPUP_HEIGHT: 570,
        redirectPage(approvalUrl) {
          window.location.href = approvalUrl;
        },
        handleApprovalForFullPageRedirect(client, closure_0) {
          closure_0 = client;
          let closure_1 = closure_0;
          let obj = { api: "clientApi", method: "get", endpoint: `sepa_debit/${closure_0.cart_id}` };
          let requestResult = client.request({ api: "clientApi", method: "get", endpoint: `sepa_debit/${closure_0.cart_id}` });
          const nextPromise = client.request({ api: "clientApi", method: "get", endpoint: `sepa_debit/${closure_0.cart_id}` }).then((sepaDebitMandateDetail) => {
            sepaDebitMandateDetail = sepaDebitMandateDetail.sepaDebitMandateDetail;
            outer1_3.sendEvent(client, "sepa.redirect.mandate.approved");
            let obj = { last4: sepaDebitMandateDetail.last4, customerId: sepaDebitMandateDetail.merchantOrPartnerCustomerId, mandateType: sepaDebitMandateDetail.mandateType, bankReferenceToken: sepaDebitMandateDetail.bankReferenceToken };
            outer1_7(closure_1, obj);
            client = closure_1;
            obj = { sepa_debit_account: obj, merchant_account_id: closure_1.merchantAccountId };
            obj = { last_4: closure_1.last4, merchant_or_partner_customer_id: closure_1.customerId, bank_reference_token: closure_1.bankReferenceToken, mandate_type: closure_1.mandateType };
            const requestResult = client.request({ api: "clientApi", method: "post", endpoint: "payment_methods/sepa_debit_accounts", data: obj });
            return client.request({ api: "clientApi", method: "post", endpoint: "payment_methods/sepa_debit_accounts", data: obj }).then((nonce) => {
              if (nonce.nonce) {
                const obj = { nonce: null, ibanLastFour: null, customerId: null, mandateType: null };
                obj[0] = nonce.nonce;
                ({ last4: obj[1], customerId: obj[2], mandateType: obj[3] } = closure_0);
                return obj;
              } else {
                const tmp5 = new closure_0(outer1_1.SEPA_TRANSACTION_FAILED);
                throw tmp5;
              }
            }).catch(() => {
              throw new closure_0(constants.SEPA_TRANSACTION_FAILED);
            });
          });
          return client.request({ api: "clientApi", method: "get", endpoint: `sepa_debit/${closure_0.cart_id}` }).then((sepaDebitMandateDetail) => {
            sepaDebitMandateDetail = sepaDebitMandateDetail.sepaDebitMandateDetail;
            outer1_3.sendEvent(client, "sepa.redirect.mandate.approved");
            let obj = { last4: sepaDebitMandateDetail.last4, customerId: sepaDebitMandateDetail.merchantOrPartnerCustomerId, mandateType: sepaDebitMandateDetail.mandateType, bankReferenceToken: sepaDebitMandateDetail.bankReferenceToken };
            outer1_7(closure_1, obj);
            client = closure_1;
            obj = { sepa_debit_account: obj, merchant_account_id: closure_1.merchantAccountId };
            obj = { last_4: closure_1.last4, merchant_or_partner_customer_id: closure_1.customerId, bank_reference_token: closure_1.bankReferenceToken, mandate_type: closure_1.mandateType };
            const requestResult = client.request({ api: "clientApi", method: "post", endpoint: "payment_methods/sepa_debit_accounts", data: obj });
            return client.request({ api: "clientApi", method: "post", endpoint: "payment_methods/sepa_debit_accounts", data: obj }).then((nonce) => {
              if (nonce.nonce) {
                const obj = { nonce: null, ibanLastFour: null, customerId: null, mandateType: null };
                obj[0] = nonce.nonce;
                ({ last4: obj[1], customerId: obj[2], mandateType: obj[3] } = closure_0);
                return obj;
              } else {
                const tmp5 = new closure_0(outer1_1.SEPA_TRANSACTION_FAILED);
                throw tmp5;
              }
            }).catch(() => {
              throw new closure_0(constants.SEPA_TRANSACTION_FAILED);
            });
          }).then((arg0) => {
            outer1_3.sendEvent(closure_0, "sepa.redirect.tokenization.success");
            return arg0;
          }).catch(() => {
            outer1_3.sendEvent(closure_0, "sepa.redirect.handle-approval.failed");
            throw new closure_0(closure_1.SEPA_TRANSACTION_FAILED);
          });
        }
      };
    },
    { "../../lib/analytics": 138, "../../lib/assign": 140, "../../lib/braintree-error": 143, "../../lib/frame-service/external": 158, "../../lib/snake-case-to-camel-case": 179, "../../lib/use-min": 181, "../shared/constants": 208, "../shared/errors": 209 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class SEPA {
        constructor(arg0) {
          obj = {};
          client = global.client;
          configuration = client.getConfiguration();
          obj._client = global.client;
          obj._assetsUrl = `${tmp.gatewayConfiguration.assetsUrl}/web/3.112.1`;
          obj._isDebug = configuration.isDebug;
          if (global.redirectUrl) {
            obj._returnUrl = global.redirectUrl;
            str3 = "?cancel=1";
            obj._cancelUrl = `${global.redirectUrl}?cancel=1`;
            flag = true;
            obj._isRedirectFlow = true;
          } else {
            str = "/html/redirect-frame.html?success=1";
            obj._returnUrl = `${obj._assetsUrl}/html/redirect-frame.html?success=1`;
            str2 = "/html/redirect-frame.html?cancel=1";
            obj._cancelUrl = `${obj._assetsUrl}/html/redirect-frame.html?cancel=1`;
          }
          if (global.tokenizePayload) {
            obj.tokenizePayload = global.tokenizePayload;
          }
          sendEventResult = c5.sendEvent(obj._client, "sepa.component.initialized");
          return;
        }
        tokenize(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          if (global) {
            tmp2 = c4;
            tmp3 = c2;
            if (!c4(global, c2.REQUIRED_OPTIONS)) {
              MANDATE_TYPE_ENUM = tmp3.MANDATE_TYPE_ENUM;
              if (MANDATE_TYPE_ENUM.includes(global.mandateType)) {
                tmp14 = c3;
                mandate = c3.createMandate(self._client, tmp);
                nextPromise = mandate.then(() => { ... });
                if (self._isRedirectFlow) {
                  tmp16 = globalThis;
                  _Promise2 = Promise;
                  resolved = Promise.resolve();
                } else {
                  nextPromise1 = nextPromise.then(() => { ... });
                  nextPromise2 = nextPromise1.then(() => { ... });
                  resolved = nextPromise2.catch(() => { ... });
                }
                tmp17 = resolved;
              } else {
                tmp4 = c5;
                str = "sepa.input-validation.invalid-mandate";
                sendEventResult = c5.sendEvent(self._client, "sepa.input-validation.invalid-mandate");
                tmp6 = globalThis;
                _Promise = Promise;
                tmp7 = closure_0;
                tmp8 = self;
                tmp9 = new.target;
                tmp10 = new.target;
                tmp11 = new closure_0(self.SEPA_INVALID_MANDATE_TYPE);
                tmp12 = tmp11;
                rejectResult = Promise.reject(tmp11);
              }
            }
            return rejectResult;
          }
          sendEventResult1 = c5.sendEvent(self._client, "sepa.input-validation.missing-options");
          tmp19 = new closure_0(self.SEPA_TOKENIZE_MISSING_REQUIRED_OPTION);
          rejectResult = Promise.reject(tmp19);
          return;
        }
      }
      let closure_0 = global("../../lib/braintree-error");
      let closure_1 = global("../shared/errors");
      let closure_2 = global("../shared/constants");
      let closure_3 = global("./mandate");
      let closure_4 = global("../shared/has-missing-option");
      let closure_5 = global("../../lib/analytics");
      const assign = global("../../lib/assign").assign;
      module.exports = global("@braintree/wrap-promise").wrapPrototype(SEPA);
    },
    { "../../lib/analytics": 138, "../../lib/assign": 140, "../../lib/braintree-error": 143, "../shared/constants": 208, "../shared/errors": 209, "../shared/has-missing-option": 210, "./mandate": 205, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/analytics");
      let closure_1 = global("./external/sepa");
      let closure_2 = global("../lib/create-assets-url");
      let closure_3 = global("../lib/create-deferred-client");
      let closure_4 = global("../lib/basic-component-verification");
      const parse = global("../lib/querystring").parse;
      const assign = global("../lib/assign").assign;
      let closure_7 = global("./external/mandate");
      const globalResult = global("@braintree/wrap-promise");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(arg0) {
          let closure_0 = arg0;
          let closure_1 = parse(window.location.href);
          const obj = { name: "SEPA", client: closure_0.client, authorization: closure_0.authorization };
          const verifyResult = closure_4.verify({ name: "SEPA", client: closure_0.client, authorization: closure_0.authorization });
          let nextPromise = closure_4.verify({ name: "SEPA", client: closure_0.client, authorization: closure_0.authorization }).then(() => outer1_3.create({ authorization: closure_0.authorization, client: closure_0.client, debug: closure_0.debug, assetsUrl: outer1_2.create(closure_0.authorization), name: "SEPA" }));
          return closure_4.verify({ name: "SEPA", client: closure_0.client, authorization: closure_0.authorization }).then(() => outer1_3.create({ authorization: closure_0.authorization, client: closure_0.client, debug: closure_0.debug, assetsUrl: outer1_2.create(closure_0.authorization), name: "SEPA" })).then((client) => {
            closure_0.client = client;
            closure_0.sendEvent(client, "sepa.client.initialized");
            return new closure_1(closure_0);
          }).then((closure_0) => {
            if (success.success) {
              if ("true" === tmp.success) {
                if (tmp.cart_id) {
                  closure_0 = outer1_6(closure_0, tmp);
                  const result = outer1_7.handleApprovalForFullPageRedirect(closure_0.client, closure_0);
                  let catchPromise = result.then((tokenizePayload) => {
                    closure_0.tokenizePayload = tokenizePayload;
                    return closure_0;
                  }).catch((arg0) => {
                    console.error("Problem while finishing tokenizing: ", arg0);
                  });
                  const nextPromise = result.then((tokenizePayload) => {
                    closure_0.tokenizePayload = tokenizePayload;
                    return closure_0;
                  });
                }
                return catchPromise;
              }
            }
            catchPromise = closure_0;
            if (success.cancel) {
              closure_0.sendEvent(closure_0.client, "sepa.redirect.customer-canceled.failed");
              catchPromise = closure_0;
            }
          });
        }),
        VERSION: "3.112.1"
      };
    },
    { "../lib/analytics": 138, "../lib/assign": 140, "../lib/basic-component-verification": 141, "../lib/create-assets-url": 148, "../lib/create-deferred-client": 150, "../lib/querystring": 177, "./external/mandate": 205, "./external/sepa": 206, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { REQUIRED_OPTIONS: ["iban", "merchantAccountId", "mandateType", "customerId", "accountHolderName", "countryCode"], BILLING_ADDRESS_OPTIONS: ["address_line_1", "address_line_2", "admin_area_1", "admin_area_2", "postal_code"], MANDATE_TYPE_ENUM: ["ONE_OFF", "RECURRENT"] };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT, code: "SEPA_CREATE_MANDATE_FAILED", message: "SEPA create mandate failed.", details: "create-mandate" };
      obj = { type: globalResult.types.CUSTOMER, code: "SEPA_CUSTOMER_CANCELED", message: "User canceled SEPA authorization", details: "customer-canceled" };
      obj = { type: globalResult.types.MERCHANT, code: "SEPA_INVALID_MANDATE_TYPE", message: "SEPA mandate type is invalid" };
      module.exports = { SEPA_CREATE_MANDATE_FAILED: obj, SEPA_CUSTOMER_CANCELED: obj, SEPA_INVALID_MANDATE_TYPE: obj, SEPA_TOKENIZATION_FAILED: { type: globalResult.types.UNKNOWN, code: "SEPA_TOKENIZATION_FAILED", message: "SEPA encountered a problem", details: "open-popup" }, SEPA_TOKENIZE_MISSING_REQUIRED_OPTION: { type: globalResult.types.MERCHANT, code: "SEPA_TOKENIZE_MISSING_REQUIRED_OPTION", message: "Missing required option for tokenize." }, SEPA_TRANSACTION_FAILED: { type: globalResult.types.UNKNOWN, code: "SEPA_TRANSACTION_FAILED", message: "SEPA transaction failed", details: "handle-approval" } };
    },
    { "../../lib/braintree-error": 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = function hasMissingOption(arg0, arg1) {
        let items = arg1;
        if (!arg1) {
          items = [];
        }
        let num = 0;
        if (0 < items.length) {
          while (arg0.hasOwnProperty(items[num])) {
            num = num + 1;
          }
          return true;
        }
        return false;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      class BaseFramework {
        constructor(arg0) {
          self = this;
          tmp = c5;
          call = c5.call;
          if (typeof call === "unknown") {
            tmpResult = tmp();
          } else {
            callResult = call(self);
          }
          ({ client: self._client, createPromise: self._createPromise } = global);
          self._createOptions = global;
          if (self._client) {
            _client = self._client;
            self._isDebug = _client.getConfiguration().isDebug;
            _client2 = self._client;
            self._assetsUrl = _client2.getConfiguration().gatewayConfiguration.assetsUrl;
          } else {
            tmp3 = globalThis;
            _Boolean = Boolean;
            self._isDebug = Boolean(global.isDebug);
            self._assetsUrl = global.assetsUrl;
          }
          self._assetsUrl = `${self._assetsUrl}/web/${c14}`;
          return;
        }
        _waitForClient() {
          self = this;
          if (this._client) {
            tmp2 = globalThis;
            _Promise = Promise;
            resolved = Promise.resolve();
          } else {
            _createPromise = self._createPromise;
            fn = () => { ... };
            resolved = _createPromise.then(fn.bind(self));
          }
          return resolved;
        }
        setUpEventListeners() {
          tmp = new c2(c6.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
          throw tmp;
        }
        verifyCard(arg0, arg1) {
          self = this;
          obj = module;
          self = this;
          if (!module) {
            obj = {};
          }
          result = self._checkForVerifyCardError(global, obj);
          if (result) {
            tmp4 = globalThis;
            _Promise = Promise;
            rejectResult = Promise.reject(result);
          } else {
            flag = true;
            self._verifyCardInProgress = true;
            result1 = self._formatVerifyCardOptions(global);
            Promise = result1;
            _formatLookupDataResult = self._formatLookupData(result1);
            nextPromise = _formatLookupDataResult.then(() => { ... });
            nextPromise1 = nextPromise.then(() => { ... });
            nextPromise2 = nextPromise1.then(() => { ... });
            nextPromise3 = nextPromise2.then(() => { ... });
            rejectResult = nextPromise3.catch(() => { ... });
          }
          return rejectResult;
        }
        _checkForFrameworkSpecificVerifyCardErrors() {
          tmp = new c2(c6.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
          throw tmp;
        }
        _presentChallenge() {
          tmp = new c2(c6.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
          throw tmp;
        }
        prepareLookup() {
          tmp = new c2(c6.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
          throw tmp;
        }
        _resetVerificationState() {
          obj = { _verifyCardInProgress: false, _verifyCardPromisePlus: null };
          if (typeof obj._reloadThreeDSecure === "function") {
            _reloadThreeDSecureResult = obj._reloadThreeDSecure();
          }
          return;
        }
        _performLookup(arg0, arg1) {
          closure_0 = module;
          self = this;
          c2 = `payment_methods/${global}/three_d_secure/lookup`;
          _waitForClientResult = this._waitForClient();
          return _waitForClientResult.then(() => { ... });
        }
        _existsAndIsNumeric(arg0) {
          isArray = null == global;
          if (!isArray) {
            tmp2 = globalThis;
            _Array = Array;
            isArray = Array.isArray(global);
          }
          if (!isArray) {
            isArray = typeof global === "boolean";
          }
          if (!isArray) {
            tmp3 = typeof global === "string";
            if (typeof global === "string") {
              str = "";
              tmp3 = "" === global.trim();
            }
            isArray = tmp3;
          }
          if (!isArray) {
            tmp4 = globalThis;
            _isNaN = isNaN;
            _Number = Number;
            isArray = isNaN(Number(global));
          }
          return !isArray;
        }
        _checkForVerifyCardError(arg0, arg1) {
          self = this;
          if (true === this._verifyCardInProgress) {
            tmp8 = c2;
            tmp9 = c6;
            tmp10 = new.target;
            tmp11 = new.target;
            tmp2 = new c2(c6.THREEDS_AUTHENTICATION_IN_PROGRESS);
          } else {
            tmp12 = global;
            str = "a nonce";
            if (global.nonce) {
              if (!self._existsAndIsNumeric(global.amount)) {
                str = "an amount";
              }
            }
            if (!str) {
              tmp = module;
              str = self._checkForFrameworkSpecificVerifyCardErrors(global, module);
            }
            tmp2 = null;
            if (str) {
              tmp3 = c2;
              obj = { type: null, code: null, message: null };
              tmp4 = c6;
              obj[0] = c6.THREEDS_MISSING_VERIFY_CARD_OPTION.type;
              obj[1] = c6.THREEDS_MISSING_VERIFY_CARD_OPTION.code;
              str2 = "verifyCard options must include ";
              str3 = ".";
              obj[2] = `verifyCard options must include ${str}.`;
              tmp5 = new.target;
              tmp6 = new.target;
              tmp7 = obj;
              tmp2 = new c2(obj);
            }
          }
          return tmp2;
        }
        initializeChallengeWithLookupResponse(arg0, arg1) {
          self = this;
          obj = module;
          self = this;
          if (!module) {
            obj = {};
          }
          self._lookupPaymentMethod = global.paymentMethod;
          _verifyCardPromisePlus = self._verifyCardPromisePlus;
          if (!_verifyCardPromisePlus) {
            tmp = c4;
            tmp2 = new.target;
            tmp3 = new.target;
            _verifyCardPromisePlus = new c4();
          }
          self._verifyCardPromisePlus = _verifyCardPromisePlus;
          result = self._handleLookupResponse(global, obj);
          prop = self._verifyCardPromisePlus;
          return prop.then(() => { ... });
        }
        _handleLookupResponse(arg0, arg1) {
          acsUrl = global.lookup;
          if (acsUrl) {
            acsUrl = global.lookup.acsUrl;
          }
          self = this;
          BooleanResult = Boolean(acsUrl);
          sendEventResult = c1.sendEvent(this._createPromise, `three-d-secure.verification-flow.challenge-presented.${String(tmp)}`);
          if (BooleanResult) {
            tmp5 = module;
            _presentChallengeResult = self._presentChallenge(global, module);
          } else {
            _formatAuthResponseResult = self._formatAuthResponse(global.paymentMethod, global.threeDSecureInfo);
            _formatAuthResponseResult.verificationDetails = global.threeDSecureInfo;
            _verifyCardPromisePlus = self._verifyCardPromisePlus;
            resolveResult = _verifyCardPromisePlus.resolve(_formatAuthResponseResult);
          }
          return;
        }
        _onLookupComplete(arg0) {
          obj = { _lookupPaymentMethod: global.paymentMethod };
          tmp = new c4();
          obj._verifyCardPromisePlus = tmp;
          return Promise.resolve(global);
        }
        _formatAuthResponse(arg0, arg1) {
          obj = { nonce: global.nonce, type: global.type, binData: global.binData, details: global.details, description: null, liabilityShifted: null, liabilityShiftPossible: null, threeDSecureInfo: null };
          description = global.description;
          if (description) {
            str = global.description;
            str2 = " ";
            description = str.replace(/\+/g, " ");
          }
          obj[4] = description;
          liabilityShifted = module;
          if (module) {
            liabilityShifted = module.liabilityShifted;
          }
          obj[5] = liabilityShifted;
          liabilityShiftPossible = module;
          if (module) {
            liabilityShiftPossible = module.liabilityShiftPossible;
          }
          obj[6] = liabilityShiftPossible;
          obj[7] = global.threeDSecureInfo;
          return obj;
        }
        _formatVerifyCardOptions(arg0) {
          return assign({}, global);
        }
        _formatLookupData(arg0) {
          obj = { amount: global.amount };
          if (true === global.collectDeviceData) {
            tmp = globalThis;
            _window = window;
            obj.browserColorDepth = window.screen.colorDepth;
            _window2 = window;
            _navigator = window.navigator;
            obj.browserJavaEnabled = _navigator.javaEnabled();
            obj.browserJavascriptEnabled = true;
            _window3 = window;
            obj.browserLanguage = window.navigator.language;
            _window4 = window;
            obj.browserScreenHeight = window.screen.height;
            _window5 = window;
            obj.browserScreenWidth = window.screen.width;
            _Date = Date;
            tmp2 = new.target;
            tmp3 = new.target;
            date = new Date();
            tmp4 = date;
            obj.browserTimeZone = date.getTimezoneOffset();
            str = "Browser";
            obj.deviceChannel = "Browser";
          }
          return Promise.resolve(obj);
        }
        _handleV1AuthResponse(arg0) {
          self = this;
          parsed = JSON.parse(global.auth_response);
          if (parsed.success) {
            _verifyCardPromisePlus3 = self._verifyCardPromisePlus;
            resolveResult = _verifyCardPromisePlus3.resolve(self._formatAuthResponse(parsed.paymentMethod, parsed.threeDSecureInfo));
          } else {
            if (parsed.threeDSecureInfo) {
              if (parsed.threeDSecureInfo.liabilityShiftPossible) {
                _verifyCardPromisePlus2 = self._verifyCardPromisePlus;
                resolveResult1 = _verifyCardPromisePlus2.resolve(self._formatAuthResponse(self._lookupPaymentMethod, parsed.threeDSecureInfo));
              }
            }
            _verifyCardPromisePlus = self._verifyCardPromisePlus;
            tmp2 = c2;
            obj = { type: null, code: "UNKNOWN_AUTH_RESPONSE", message: null };
            obj[0] = c2.types.UNKNOWN;
            obj[2] = parsed.error.message;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp5 = obj;
            tmp6 = new c2(obj);
            tmp7 = tmp6;
            rejectResult = _verifyCardPromisePlus.reject(tmp6);
          }
          return;
        }
        cancelVerifyCard() {
          self = this;
          this._verifyCardInProgress = false;
          if (this._lookupPaymentMethod) {
            threeDSecureInfo = self._lookupPaymentMethod.threeDSecureInfo;
            liabilityShiftPossible = threeDSecureInfo;
            tmp9 = assign;
            if (threeDSecureInfo) {
              liabilityShiftPossible = threeDSecureInfo.liabilityShiftPossible;
            }
            obj = { liabilityShiftPossible: null, liabilityShifted: null, verificationDetails: null };
            obj[0] = liabilityShiftPossible;
            liabilityShifted = threeDSecureInfo;
            if (threeDSecureInfo) {
              liabilityShifted = threeDSecureInfo.liabilityShifted;
            }
            obj[1] = liabilityShifted;
            verificationDetails = threeDSecureInfo;
            if (threeDSecureInfo) {
              verificationDetails = threeDSecureInfo.verificationDetails;
            }
            obj[2] = verificationDetails;
            tmp10 = globalThis;
            _Promise2 = Promise;
            resolved = Promise.resolve(tmp9({}, self._lookupPaymentMethod, obj));
          } else {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = c2;
            tmp3 = c6;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = new c2(c6.THREEDS_NO_VERIFICATION_PAYLOAD);
            tmp7 = tmp6;
            resolved = Promise.reject(tmp6);
          }
          return resolved;
        }
        _setupV1Bus(arg0) {
          closure_0 = global;
          _client = this._client;
          getConfiguration = _client.getConfiguration();
          str = window.location.href;
          c2 = str.split("#")[0];
          lookupResponse = global.lookupResponse;
          tmp = c10();
          obj = { channel: tmp, verifyDomain: lookupResponse };
          obj2 = new framebus(obj);
          c4 = `${`${this._assetsUrl}/html/three-d-secure-authentication-complete-frame.html?channel=`}${encodeURIComponent(tmp)}&`;
          onResult = obj2.on(c13, () => { ... });
          onResult1 = obj2.on(c11.AUTHENTICATION_COMPLETE, global.handleAuthResponse);
          return obj2;
        }
        _setupV1Iframe(arg0) {
          obj = { src: `${`${this._assetsUrl}/html/three-d-secure-bank-frame`}${c12(this._isDebug)}.html?showLoader=${global.showLoader}`, height: 400, width: 400, name: `${c9.LANDING_FRAME_NAME}_${this._v1Bus.channel}`, title: "3D Secure Authorization Frame" };
          return c7(obj);
        }
        _setupV1Elements(arg0) {
          this._v1Bus = this._setupV1Bus(global);
          this._v1Iframe = this._setupV1Iframe(global);
          return;
        }
        _teardownV1Elements() {
          self = this;
          if (this._v1Bus) {
            _v1Bus = self._v1Bus;
            teardownResult = _v1Bus.teardown();
            tmp2 = null;
            self._v1Bus = null;
          }
          tmp3 = self._v1Iframe && self._v1Iframe.parentNode;
          if (tmp3) {
            parentNode = self._v1Iframe.parentNode;
            removeChildResult = parentNode.removeChild(self._v1Iframe);
            tmp5 = null;
            self._v1Iframe = null;
          }
          if (self._onV1Keyup) {
            tmp6 = globalThis;
            _document = document;
            str = "keyup";
            removed = document.removeEventListener("keyup", self._onV1Keyup);
            tmp8 = null;
            self._onV1Keyup = null;
          }
          return;
        }
        teardown() {
          sendEventResult = c1.sendEvent(this._createPromise, "three-d-secure.teardown-completed");
          _teardownV1ElementsResult = this._teardownV1Elements();
          return Promise.resolve();
        }
      }
      const assign = global("../../../lib/assign").assign;
      let closure_1 = global("../../../lib/analytics");
      let closure_2 = global("../../../lib/braintree-error");
      let closure_3 = global("../../../lib/is-verified-domain");
      const globalResult = global("@braintree/extended-promise");
      let closure_4 = globalResult;
      const globalResult1 = global("@braintree/event-emitter");
      let closure_6 = global("../../shared/errors");
      let closure_7 = global("@braintree/iframer");
      let closure_8 = global("framebus");
      let closure_9 = global("../../shared/constants");
      let closure_10 = global("@braintree/uuid");
      let closure_11 = global("../../shared/events");
      let closure_12 = global("../../../lib/use-min");
      let closure_13 = global("../../../lib/constants").BUS_CONFIGURATION_REQUEST_EVENT;
      let c14 = "3.112.1";
      globalResult.suppressUnhandledPromiseMessage = true;
      const child = globalResult1.createChild(BaseFramework);
      module.exports = BaseFramework;
    },
    { "../../../lib/analytics": 138, "../../../lib/assign": 140, "../../../lib/braintree-error": 143, "../../../lib/constants": 145, "../../../lib/is-verified-domain": 173, "../../../lib/use-min": 181, "../../shared/constants": 220, "../../shared/errors": 221, "../../shared/events": 222, "@braintree/event-emitter": 30, "@braintree/extended-promise": 31, "@braintree/iframer": 32, "@braintree/uuid": 36, framebus: 50 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class Bootstrap3ModalFramework {
        constructor(arg0) {
          self = this;
          tmp = closure_0;
          call = closure_0.call;
          if (typeof call === "unknown") {
            tmpResult = tmp(global);
          } else {
            callResult = call(self, global);
          }
          return;
        }
        _createV1IframeModalElement(arg0) {
          element = document.createElement("div");
          element.innerHTML = "<div class=\"modal fade in\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"CCAFrameModal-label\" aria-hidden=\"true\" style=\"display: block;\"><div class=\"modal-dialog\" style=\"width:440px;z-index:999999;\"><div class=\"modal-content\"><div class=\"modal-body\" data-braintree-v1-fallback-iframe-container><button type=\"button\" data-braintree-v1-fallback-close-button class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\u00D7</button></div></div></div><div data-braintree-v1-fallback-backdrop style=\"position: fixed;cursor: pointer;z-index: 999998;top: 0;left: 0;width: 100%;height: 100%;\"></div></div>";
          element1 = element.querySelector("[data-braintree-v1-fallback-iframe-container]");
          appendChildResult = element1.appendChild(global);
          return element;
        }
        _createCardinalConfigurationOptions(arg0) {
          self = this;
          _createCardinalConfigurationOptions = closure_0.prototype._createCardinalConfigurationOptions;
          call = _createCardinalConfigurationOptions.call;
          tmp = typeof call === "unknown" ? _createCardinalConfigurationOptions(global) : call(self, global);
          tmp.payment.framework = "bootstrap3";
          return tmp;
        }
      }
      const globalResult = global("./songbird");
      Bootstrap3ModalFramework.prototype = Object.create(globalResult.prototype, { constructor: globalResult });
      module.exports = Bootstrap3ModalFramework;
    },
    { "./songbird": 217 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class CardinalModalFramework {
        constructor(arg0) {
          self = this;
          tmp = closure_0;
          call = closure_0.call;
          if (typeof call === "unknown") {
            tmpResult = tmp(global);
          } else {
            callResult = call(self, global);
          }
          return;
        }
        _createV1IframeModalElement(arg0) {
          self = this;
          element = document.createElement("div");
          displayExitButton = this._createOptions;
          if (displayExitButton) {
            displayExitButton = self._createOptions.cardinalSDKConfig;
          }
          if (displayExitButton) {
            displayExitButton = self._createOptions.cardinalSDKConfig.payment;
          }
          if (displayExitButton) {
            displayExitButton = self._createOptions.cardinalSDKConfig.payment.displayExitButton;
          }
          element.innerHTML = "<div style=\"position: fixed;z-index: 999999;top: 50%;left: 50%;padding: 24px 20px;transform: translate(-50%,-50%);border-radius: 2px;background: #fff;max-width: 100%;overflow: auto;\"><div><button data-braintree-v1-fallback-close-button style=\"font-family: Helvetica,Arial,sans-serif;font-size: 25px;line-height: 12px;position: absolute;top: 2px;right: 0px;cursor: pointer;color: #999;border: 0;outline: none;background: none;\" onMouseOver=\"this.style.color='#000'\" onMouseOut=\"this.style.color='#999'\">\u00D7</button></div><div data-braintree-v1-fallback-iframe-container style=\"height: 400px;\"></div></div><div data-braintree-v1-fallback-backdrop style=\"position: fixed;z-index: 999998;cursor: pointer;top: 0;left: 0;width: 100%;height: 100%;transition: opacity 1ms ease;background: rgba(0,0,0,.6);\"></div>";
          if (!Boolean(displayExitButton)) {
            str = "[data-braintree-v1-fallback-close-button]";
            str2 = "none";
            element.querySelector("[data-braintree-v1-fallback-close-button]").style.display = "none";
          }
          element1 = element.querySelector("[data-braintree-v1-fallback-iframe-container]");
          appendChildResult = element1.appendChild(global);
          return element;
        }
      }
      const globalResult = global("./songbird");
      CardinalModalFramework.prototype = Object.create(globalResult.prototype, { constructor: globalResult });
      module.exports = CardinalModalFramework;
    },
    { "./songbird": 217 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("./legacy");
      const globalResult1 = global("./cardinal-modal");
      const globalResult2 = global("./bootstrap3-modal");
      module.exports = { legacy: globalResult, "cardinal-modal": globalResult1, "bootstrap3-modal": global("./bootstrap3-modal"), "inline-iframe": global("./inline-iframe") };
    },
    { "./bootstrap3-modal": 212, "./cardinal-modal": 213, "./inline-iframe": 215, "./legacy": 216 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class InlineIframeFramework {
        constructor(arg0) {
          self = this;
          tmp = closure_0;
          call = closure_0.call;
          if (typeof call === "unknown") {
            tmpResult = tmp(global);
          } else {
            callResult = call(self, global);
          }
          return;
        }
        setUpEventListeners(arg0) {
          self = this;
          closure_0 = global;
          setUpEventListeners = closure_0.prototype.setUpEventListeners;
          call = setUpEventListeners.call;
          if (typeof call === "unknown") {
            setUpEventListenersResult = setUpEventListeners(global);
          } else {
            callResult = call(self, global);
          }
          onResult = self.on(InlineIframeFramework.events.AUTHENTICATION_IFRAME_AVAILABLE, () => { ... });
          return;
        }
        _createCardinalConfigurationOptions(arg0) {
          self = this;
          _createCardinalConfigurationOptions = closure_0.prototype._createCardinalConfigurationOptions;
          call = _createCardinalConfigurationOptions.call;
          tmp = typeof call === "unknown" ? _createCardinalConfigurationOptions(global) : call(self, global);
          tmp.payment.framework = "inline";
          return tmp;
        }
        _addV1IframeToPage() {
          obj = { element: this._v1Modal };
          _emitResult = this._emit(InlineIframeFramework.events.AUTHENTICATION_IFRAME_AVAILABLE, obj, /* F115940 */ function() { ... });
          return;
        }
        _setupFrameworkSpecificListeners() {
          ({ _onInlineSetup, setCardinalListener } = this);
          setCardinalListenerResult = setCardinalListener("ui.inline.setup", _onInlineSetup.bind(this));
          return;
        }
        _onInlineSetup(arg0, arg1, arg2, arg3) {
          closure_0 = exports;
          flag = true;
          if (global) {
            flag = true;
            if (module) {
              str = "CCA";
              tmp = "CCA" !== module.paymentType;
              if (!tmp) {
                str2 = "suppress";
                tmp2 = "suppress" !== module.data.mode;
                if (tmp2) {
                  str3 = "static";
                  tmp2 = "static" !== module.data.mode;
                }
                tmp = tmp2;
              }
              if (tmp) {
                flag = true;
              }
            }
          }
          if (flag) {
            tmp7 = arg3;
            tmp8 = c1;
            tmp9 = c2;
            tmp10 = new.target;
            tmp11 = new.target;
            tmp12 = new c1(c2.THREEDS_INLINE_IFRAME_DETAILS_INCORRECT);
            tmp13 = tmp12;
            tmp14 = arg3(tmp12);
          } else {
            tmp3 = globalThis;
            _document = document;
            str4 = "div";
            element = document.createElement("div");
            element.innerHTML = global;
            str5 = "suppress";
            if ("suppress" === module.data.mode) {
              str7 = "none";
              element.style.display = "none";
              _document2 = document;
              body = document.body;
              appendChildResult = body.appendChild(element);
              tmp6 = exports();
            } else {
              str6 = "static";
              if ("static" === module.data.mode) {
                self = this;
                tmp15 = InlineIframeFramework;
                obj = { element: null };
                obj[0] = element;
                _emitResult = this._emit(InlineIframeFramework.events.AUTHENTICATION_IFRAME_AVAILABLE, obj, () => { ... });
              }
            }
          }
          return;
        }
      }
      const globalResult = global("./songbird");
      let closure_1 = global("../../../lib/braintree-error");
      let closure_2 = global("../../shared/errors");
      InlineIframeFramework.prototype = Object.create(globalResult.prototype, { constructor: globalResult });
      InlineIframeFramework.events = global("../../../lib/enumerate")(["AUTHENTICATION_IFRAME_AVAILABLE"], "inline-iframe-framework:");
      module.exports = InlineIframeFramework;
    },
    { "../../../lib/braintree-error": 143, "../../../lib/enumerate": 153, "../../shared/errors": 221, "./songbird": 217 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class LegacyFramework {
        constructor(arg0) {
          self = this;
          tmp = c0;
          call = c0.call;
          if (typeof call === "unknown") {
            tmpResult = tmp(global);
          } else {
            callResult = call(self, global);
          }
          return;
        }
        setUpEventListeners() {
          return;
        }
        transformV1CustomerBillingAddress(arg0) {
          global.billingAddress.line1 = global.billingAddress.streetAddress;
          global.billingAddress.line2 = global.billingAddress.extendedAddress;
          global.billingAddress.city = global.billingAddress.locality;
          global.billingAddress.state = global.billingAddress.region;
          global.billingAddress.countryCode = global.billingAddress.countryCodeAlpha2;
          delete tmp2[tmp];
          delete tmp2[tmp];
          delete tmp2[tmp];
          delete tmp2[tmp];
          delete tmp2[tmp];
          return global;
        }
        _createIframe(arg0) {
          closure_0 = global;
          self = this;
          obj = { nonce: global.nonce, lookupResponse: global.lookupResponse, showLoader: global.showLoader, handleAuthResponse() { ... } };
          _setupV1ElementsResult = this._setupV1Elements(obj);
          return this._v1Iframe;
        }
        _handleAuthResponse(arg0, arg1) {
          closure_0 = global;
          _v1Bus = this._v1Bus;
          teardownResult = _v1Bus.teardown();
          removeFrameResult = module.removeFrame();
          fn = () => { ... };
          tmp3 = c1(fn.bind(this))();
          return;
        }
        _checkForFrameworkSpecificVerifyCardErrors(arg0) {
          str = "an addFrame function";
          if (typeof global.addFrame === "function") {
            if (typeof global.removeFrame !== "function") {
              str = "a removeFrame function";
            }
          }
          return str;
        }
        _formatVerifyCardOptions(arg0) {
          self = this;
          _formatVerifyCardOptions = c0.prototype._formatVerifyCardOptions;
          call = _formatVerifyCardOptions.call;
          tmp = typeof call === "unknown" ? _formatVerifyCardOptions(global) : call(self, global);
          tmp.addFrame = c1(global.addFrame);
          tmp.removeFrame = c1(global.removeFrame);
          tmp.showLoader = false !== global.showLoader;
          return tmp;
        }
        _formatLookupData(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          _formatLookupData = closure_0.prototype._formatLookupData;
          call = _formatLookupData.call;
          promise = typeof call === "unknown" ? _formatLookupData(global) : call(self, global);
          return promise.then(() => { ... });
        }
        _presentChallenge(arg0, arg1) {
          obj = { showLoader: module.showLoader, lookupResponse: global.lookup, nonce: global.paymentMethod.nonce, removeFrame: module.removeFrame };
          addFrameResult = module.addFrame(null, this._createIframe(obj));
          return;
        }
      }
      const globalResult = global("./base");
      let closure_1 = global("../../../lib/deferred");
      LegacyFramework.prototype = Object.create(globalResult.prototype, { constructor: LegacyFramework });
      module.exports = LegacyFramework;
    },
    { "../../../lib/deferred": 151, "./base": 211 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class SongbirdFramework {
        constructor(arg0) {
          self = this;
          tmp = c0;
          call = c0.call;
          if (typeof call === "unknown") {
            tmpResult = tmp(global);
          } else {
            callResult = call(self, global);
          }
          self._songbirdInitFailed = false;
          obj = { requestedThreeDSecureVersion: "2", sdkVersion: `${PLATFORM}/3.112.1` };
          self._clientMetadata = obj;
          self.originalSetupOptions = global;
          tmp3 = new c9();
          self._getDfReferenceIdPromisePlus = tmp3;
          setupSongbirdResult = self.setupSongbird(global);
          self._cardinalEvents = [];
          return;
        }
        setUpEventListeners(arg0) {
          closure_0 = global;
          onResult = this.on(SongbirdFramework.events.LOOKUP_COMPLETE, () => { ... });
          onResult1 = this.on(SongbirdFramework.events.CUSTOMER_CANCELED, () => { ... });
          onResult2 = this.on(SongbirdFramework.events["UI.CLOSE"], () => { ... });
          onResult3 = this.on(SongbirdFramework.events["UI.RENDER"], () => { ... });
          onResult4 = this.on(SongbirdFramework.events["UI.RENDERHIDDEN"], () => { ... });
          onResult5 = this.on(SongbirdFramework.events["UI.LOADING.CLOSE"], () => { ... });
          onResult6 = this.on(SongbirdFramework.events["UI.LOADING.RENDER"], () => { ... });
          return;
        }
        prepareLookup(arg0) {
          closure_0 = global;
          assign = assign({}, global);
          self = this;
          dfReferenceId = this.getDfReferenceId();
          nextPromise = dfReferenceId.then(() => { ... });
          nextPromise1 = nextPromise.then(() => { ... });
          catchPromise = nextPromise1.catch(/* F115954 */ function() { ... });
          nextPromise2 = catchPromise.then(() => { ... });
          return nextPromise2.then(() => { ... });
        }
        initializeChallengeWithLookupResponse(arg0, arg1) {
          closure_0 = global;
          closure_1 = module;
          setupSongbirdResult = this.setupSongbird();
          fn = () => { ... };
          return setupSongbirdResult.then(fn.bind(this));
        }
        handleSongbirdError(arg0) {
          this._songbirdInitFailed = true;
          result = this._removeSongbirdListeners();
          sendEventResult = c5.sendEvent(this._createPromise, `three-d-secure.cardinal-sdk.songbird-error.${global}`);
          if (this._songbirdPromise) {
            _songbirdPromise = this._songbirdPromise;
            resolveResult = _songbirdPromise.resolve();
          }
          return;
        }
        _triggerCardinalBinProcess(arg0) {
          self = this;
          now = Date.now();
          Cardinal = window.Cardinal;
          triggerResult = Cardinal.trigger("bin.process", global);
          return triggerResult.then(() => { ... });
        }
        transformBillingAddress(arg0, arg1) {
          if (module) {
            ({ streetAddress: global.billingLine1, extendedAddress: global.billingLine2, line3: global.billingLine3, locality: global.billingCity, region: global.billingState, postalCode: global.billingPostalCode, countryCodeAlpha2: global.billingCountryCode, phoneNumber: global.billingPhoneNumber, givenName: global.billingGivenName, surname: global.billingSurname } = module);
          }
          return global;
        }
        transformShippingAddress(arg0) {
          shippingAddress = global.shippingAddress;
          if (shippingAddress) {
            ({ streetAddress: global.shippingLine1, extendedAddress: global.shippingLine2, line3: global.shippingLine3, locality: global.shippingCity, region: global.shippingState, postalCode: global.shippingPostalCode, countryCodeAlpha2: global.shippingCountryCode } = shippingAddress);
            str = "shippingAddress";
            delete tmp[tmp2];
          }
          return global;
        }
        _createV1IframeModalElement(arg0) {
          element = document.createElement("div");
          element.innerHTML = "<div data-braintree-v1-fallback-iframe-container=\"true\" style=\"height: 400px;\"></div>";
          element1 = element.querySelector("[data-braintree-v1-fallback-iframe-container=\"true\"]");
          appendChildResult = element1.appendChild(global);
          return element;
        }
        _createV1IframeModal(arg0) {
          closeHandler = function closeHandler() { ... };
          result = this._createV1IframeModalElement(global);
          closure_0 = result;
          element = result.querySelector("[data-braintree-v1-fallback-close-button]");
          element1 = result.querySelector("[data-braintree-v1-fallback-backdrop]");
          self = this;
          this._onV1Keyup = function _onV1Keyup() { ... };
          if (element) {
            str = "click";
            listener = element.addEventListener("click", closeHandler);
          }
          if (element1) {
            str2 = "click";
            listener1 = element1.addEventListener("click", closeHandler);
          }
          listener2 = document.addEventListener("keyup", this._onV1Keyup);
          return result;
        }
        _addV1IframeToPage() {
          body = document.body;
          appendChildResult = body.appendChild(this._v1Modal);
          return;
        }
        setupSongbird(arg0) {
          self = this;
          obj = global;
          closure_0 = global;
          self = this;
          now = Date.now();
          if (!this._songbirdPromise) {
            if (!obj) {
              obj = {};
            }
            closure_0 = obj;
            tmp = c9;
            tmp2 = new.target;
            tmp3 = new.target;
            tmp4 = new c9();
            tmp5 = tmp4;
            self._songbirdPromise = tmp4;
            str = "reason-unknown";
            self._v2SetupFailureReason = "reason-unknown";
            _loadCardinalScriptResult = self._loadCardinalScript(obj);
            nextPromise = _loadCardinalScriptResult.then(() => { ... });
            catchPromise = nextPromise.catch(() => { ... });
          }
          return self._songbirdPromise;
        }
        _configureCardinalSdk(arg0) {
          closure_0 = global;
          self = this;
          _waitForClientResult = this._waitForClient();
          nextPromise = _waitForClientResult.then(() => { ... });
          nextPromise1 = nextPromise.then(() => { ... });
          return nextPromise1.catch(() => { ... });
        }
        setCardinalListener(arg0, arg1) {
          _cardinalEvents = this._cardinalEvents;
          arr = _cardinalEvents.push(global);
          Cardinal = window.Cardinal;
          onResult = Cardinal.on(global, module);
          return;
        }
        _setupFrameworkSpecificListeners() {
          return;
        }
        _createCardinalConfigurationOptions(arg0) {
          tmp = global.cardinalSDKConfig || {};
          obj = tmp.payment || {};
          logging = tmp.logging;
          loggingEnabled = !logging;
          if (!logging) {
            loggingEnabled = global.loggingEnabled;
          }
          if (loggingEnabled) {
            tmp.logging = { level: "verbose" };
          }
          tmp.payment = {};
          if (obj.hasOwnProperty("displayLoading")) {
            tmp.payment.displayLoading = obj.displayLoading;
          }
          if (obj.hasOwnProperty("displayExitButton")) {
            tmp.payment.displayExitButton = obj.displayExitButton;
          }
          return tmp;
        }
        _loadCardinalScript(arg0) {
          closure_0 = global;
          self = this;
          _waitForClientResult = this._waitForClient();
          nextPromise = _waitForClientResult.then(() => { ... });
          return nextPromise.catch(() => { ... });
        }
        _getCardinalScriptSource() {
          _client = this._client;
          gatewayConfiguration = _client.getConfiguration().gatewayConfiguration;
          if (gatewayConfiguration) {
            str = "production";
            if ("production" === gatewayConfiguration.environment) {
              tmp = c8;
              sandbox = c8.CARDINAL_SCRIPT_SOURCE.production;
            }
            return sandbox;
          }
          sandbox = c8.CARDINAL_SCRIPT_SOURCE.sandbox;
          return;
        }
        _createPaymentsSetupCompleteCallback() {
          self = this;
          return () => { ... };
        }
        getDfReferenceId() {
          return this._getDfReferenceIdPromisePlus;
        }
        _performJWTValidation(arg0, arg1) {
          self = this;
          closure_0 = global;
          closure_1 = module;
          self = this;
          nonce = this._lookupPaymentMethod.nonce;
          c4 = `payment_methods/${nonce}/three_d_secure/authenticate_from_jwt`;
          ChallengeCancel = global;
          if (global) {
            ChallengeCancel = global.Payment;
          }
          if (ChallengeCancel) {
            ChallengeCancel = global.Payment.ExtendedData;
          }
          if (ChallengeCancel) {
            ChallengeCancel = global.Payment.ExtendedData.ChallengeCancel;
          }
          if (ChallengeCancel) {
            tmp = c5;
            str = "three-d-secure.verification-flow.cardinal-sdk.cancel-code.";
            sendEventResult = c5.sendEvent(self._createPromise, `three-d-secure.verification-flow.cardinal-sdk.cancel-code.${ChallengeCancel}`);
            str2 = "01";
            if ("01" === ChallengeCancel) {
              tmp3 = SongbirdFramework;
              _emitResult = self._emit(SongbirdFramework.events.CUSTOMER_CANCELED);
            }
          }
          sendEventResult1 = c5.sendEvent(self._createPromise, "three-d-secure.verification-flow.upgrade-payment-method.started");
          _waitForClientResult = self._waitForClient();
          nextPromise = _waitForClientResult.then(() => { ... });
          nextPromise1 = nextPromise.then(() => { ... });
          return nextPromise1.catch(() => { ... });
        }
        _createPaymentsValidatedCallback() {
          self = this;
          return () => { ... };
        }
        _checkForVerifyCardError(arg0, arg1) {
          if (global.bin) {
            self = this;
            tmp8 = module;
            tmp9 = c0;
            _checkForVerifyCardError = c0.prototype._checkForVerifyCardError;
            call = _checkForVerifyCardError.call;
            tmp10 = typeof call === "unknown" ? _checkForVerifyCardError(global, module) : call(self, global, module);
          } else {
            tmp = c3;
            obj = { type: null, code: null, message: "verifyCard options must include a BIN." };
            tmp2 = c7;
            obj[0] = c7.THREEDS_MISSING_VERIFY_CARD_OPTION.type;
            obj[1] = c7.THREEDS_MISSING_VERIFY_CARD_OPTION.code;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp5 = obj;
            tmp6 = new c3(obj);
            tmp7 = tmp6;
            return tmp6;
          }
          return;
        }
        _checkForFrameworkSpecificVerifyCardErrors(arg0, arg1) {
          onLookupComplete = global.onLookupComplete;
          ignoreOnLookupCompleteRequirement = typeof onLookupComplete === "function";
          if (typeof onLookupComplete !== "function") {
            tmp = module;
            ignoreOnLookupCompleteRequirement = module.ignoreOnLookupCompleteRequirement;
          }
          str = undefined;
          if (!ignoreOnLookupCompleteRequirement) {
            str = "an onLookupComplete function";
          }
          return str;
        }
        _formatVerifyCardOptions(arg0) {
          self = this;
          _formatVerifyCardOptions = c0.prototype._formatVerifyCardOptions;
          call = _formatVerifyCardOptions.call;
          tmp = typeof call === "unknown" ? _formatVerifyCardOptions(global) : call(self, global);
          tmp2 = tmp.additionalInformation || {};
          result = self.transformShippingAddress(self.transformBillingAddress(tmp2, global.billingAddress));
          if (global.onLookupComplete) {
            tmp4 = c2;
            tmp.onLookupComplete = c2(global.onLookupComplete);
          }
          if (global.email) {
            result.email = global.email;
          }
          if (global.mobilePhoneNumber) {
            result.mobilePhoneNumber = global.mobilePhoneNumber;
          }
          tmp.additionalInformation = result;
          return tmp;
        }
        _onLookupComplete(arg0, arg1) {
          self = this;
          closure_0 = module;
          self = this;
          _onLookupComplete = closure_0.prototype._onLookupComplete;
          call = _onLookupComplete.call;
          promise = typeof call === "unknown" ? _onLookupComplete(global) : call(self, global);
          return promise.then(() => { ... });
        }
        _presentChallenge(arg0) {
          _songbirdInitFailed = this._songbirdInitFailed;
          transactionId = !_songbirdInitFailed;
          if (!_songbirdInitFailed) {
            transactionId = global.lookup.transactionId;
          }
          if (transactionId) {
            tmp = globalThis;
            _window = window;
            Cardinal = window.Cardinal;
            obj = { AcsUrl: null, Payload: null };
            obj[0] = global.lookup.acsUrl;
            obj[1] = global.lookup.pareq;
            obj = { OrderDetails: null };
            obj1 = { TransactionId: null };
            obj1[0] = global.lookup.transactionId;
            obj[0] = obj1;
            str = "cca";
            continueResult = Cardinal.continue("cca", obj, obj);
          }
          return;
        }
        _formatLookupData(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          _formatLookupData = closure_0.prototype._formatLookupData;
          call = _formatLookupData.call;
          promise = typeof call === "unknown" ? _formatLookupData(global) : call(self, global);
          return promise.then(() => { ... });
        }
        cancelVerifyCard(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          cancelVerifyCard = closure_0.prototype.cancelVerifyCard;
          call = cancelVerifyCard.call;
          promise = typeof call === "unknown" ? cancelVerifyCard() : call(self);
          return promise.then(() => { ... });
        }
        _removeSongbirdListeners() {
          _cardinalEvents = this._cardinalEvents;
          item = _cardinalEvents.forEach(() => { ... });
          this._cardinalEvents = [];
          return;
        }
        teardown() {
          self = this;
          if (window.Cardinal) {
            result = self._removeSongbirdListeners();
          }
          teardown = c0.prototype.teardown;
          call = teardown.call;
          return typeof call === "unknown" ? teardown() : call(self);
        }
        _reloadThreeDSecure() {
          self = this;
          now = Date.now();
          teardownResult = this.teardown();
          return teardownResult.then(() => { ... });
        }
      }
      const globalResult = global("./base");
      let assign = global("../../../lib/assign").assign;
      let closure_2 = global("../../../lib/deferred");
      let closure_3 = global("../../../lib/braintree-error");
      let closure_4 = global("../../../lib/convert-to-braintree-error");
      let closure_5 = global("../../../lib/analytics");
      let closure_6 = global("../../../lib/assets");
      let closure_7 = global("../../shared/errors");
      let closure_8 = global("../../shared/constants");
      const globalResult2 = global("@braintree/extended-promise");
      const INTEGRATION_TIMEOUT_MS = global("../../../lib/constants").INTEGRATION_TIMEOUT_MS;
      const PLATFORM = global("../../../lib/constants").PLATFORM;
      let closure_12 = ["ui.close", "ui.render", "ui.renderHidden", "ui.loading.close", "ui.loading.render"];
      let closure_13 = ["low_value", "transaction_risk_analysis"];
      globalResult2.suppressUnhandledPromiseMessage = true;
      SongbirdFramework.prototype = Object.create(globalResult.prototype, { constructor: SongbirdFramework });
      SongbirdFramework.events = global("../../../lib/enumerate")(["LOOKUP_COMPLETE", "CUSTOMER_CANCELED", "UI.CLOSE", "UI.RENDER", "UI.RENDERHIDDEN", "UI.LOADING.CLOSE", "UI.LOADING.RENDER"], "songbird-framework:");
      module.exports = SongbirdFramework;
    },
    { "../../../lib/analytics": 138, "../../../lib/assets": 139, "../../../lib/assign": 140, "../../../lib/braintree-error": 143, "../../../lib/constants": 145, "../../../lib/convert-to-braintree-error": 147, "../../../lib/deferred": 151, "../../../lib/enumerate": 153, "../../shared/constants": 220, "../../shared/errors": 221, "./base": 211, "@braintree/extended-promise": 31 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class ThreeDSecure {
        constructor(arg0) {
          self = this;
          self = this;
          tmp = closure_2;
          call = closure_2.call;
          if (typeof call === "unknown") {
            tmpResult = tmp();
          } else {
            callResult = call(self);
          }
          tmp3 = new c3[global.framework](global);
          self._framework = tmp3;
          _framework = self._framework;
          setUpEventListenersResult = _framework.setUpEventListeners(() => { ... });
          return;
        }
        verifyCard(arg0) {
          obj = undefined;
          if (this.hasListener("lookup-complete")) {
            obj = { ignoreOnLookupCompleteRequirement: true };
          }
          _framework = this._framework;
          return _framework.verifyCard(global, obj);
        }
        initializeChallengeWithLookupResponse(arg0) {
          parsed = global;
          if (typeof global === "string") {
            tmp2 = globalThis;
            _JSON = JSON;
            parsed = JSON.parse(global);
          }
          _framework = this._framework;
          return _framework.initializeChallengeWithLookupResponse(parsed);
        }
        prepareLookup(arg0) {
          _framework = this._framework;
          prepareLookupResult = _framework.prepareLookup(global);
          return prepareLookupResult.then(() => { ... });
        }
        cancelVerifyCard() {
          _framework = this._framework;
          return _framework.cancelVerifyCard();
        }
        teardown() {
          obj = c0(ThreeDSecure.prototype);
          tmp = c1(this, obj.concat(c0(closure_2.prototype)));
          _framework = this._framework;
          return _framework.teardown();
        }
      }
      let closure_0 = global("../../lib/methods");
      let closure_1 = global("../../lib/convert-methods-to-error");
      const globalResult1 = global("@braintree/event-emitter");
      let closure_3 = global("./frameworks");
      const child = globalResult1.createChild(ThreeDSecure);
      module.exports = global("@braintree/wrap-promise").wrapPrototype(ThreeDSecure);
    },
    { "../../lib/convert-methods-to-error": 146, "../../lib/methods": 175, "./frameworks": 214, "@braintree/event-emitter": 30, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./external/three-d-secure");
      const isHTTPS = global("../lib/is-https").isHTTPS;
      let closure_2 = global("../lib/basic-component-verification");
      let closure_3 = global("../lib/create-deferred-client");
      let closure_4 = global("../lib/create-assets-url");
      let closure_5 = global("../lib/braintree-error");
      let closure_6 = global("../lib/analytics");
      let closure_7 = global("./shared/errors");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(version) {
          let closure_0 = version;
          let str = version.version;
          if (!str) {
            str = "";
          }
          const StringResult = String(str);
          if (StringResult) {
            if ("1" !== StringResult) {
              if ("2" !== StringResult) {
                if ("2-cardinal-modal" !== StringResult) {
                  if ("2-bootstrap3-modal" === StringResult) {
                    let str3 = "bootstrap3-modal";
                  } else {
                    str3 = "inline-iframe";
                    if ("2-inline-iframe" !== StringResult) {
                      let obj = { code: null, type: null, message: null };
                      obj[0] = constants.THREEDS_UNRECOGNIZED_VERSION.code;
                      obj[1] = constants.THREEDS_UNRECOGNIZED_VERSION.type;
                      obj[2] = `Version \`${version.version}\` is not a recognized version. You may need to update the version of your Braintree SDK to support this version.`;
                      let tmp7 = new closure_5(obj);
                      throw tmp7;
                    }
                  }
                }
                obj = { name: "3D Secure", client: null, authorization: null };
                ({ client: obj2[1], authorization: obj2[2] } = version);
                return closure_2.verify(obj).then(() => {
                  let obj = outer1_4.create(version.authorization);
                  obj = { authorization: version.authorization, client: version.client, debug: version.debug, assetsUrl: obj, name: "3D Secure" };
                  obj = outer1_3.create(obj);
                  const nextPromise = obj.then((getConfiguration) => {
                    let rejectResult = getConfiguration;
                    const configuration = getConfiguration.getConfiguration();
                    const gatewayConfiguration = configuration.gatewayConfiguration;
                    closure_0.client = getConfiguration;
                    let THREEDS_NOT_ENABLED;
                    if (!gatewayConfiguration.threeDSecureEnabled) {
                      THREEDS_NOT_ENABLED = outer1_7.THREEDS_NOT_ENABLED;
                    }
                    if ("TOKENIZATION_KEY" === configuration.authorizationType) {
                      THREEDS_NOT_ENABLED = outer1_7.THREEDS_CAN_NOT_USE_TOKENIZATION_KEY;
                    }
                    let tmp7 = "production" === gatewayConfiguration.environment;
                    if (tmp7) {
                      tmp7 = !outer1_1();
                    }
                    if (tmp7) {
                      THREEDS_NOT_ENABLED = outer1_7.THREEDS_HTTPS_REQUIRED;
                    }
                    let tmp10 = "legacy" === closure_1;
                    if (!tmp10) {
                      tmp10 = gatewayConfiguration.threeDSecure && gatewayConfiguration.threeDSecure.cardinalAuthenticationJWT;
                      const tmp11 = gatewayConfiguration.threeDSecure && gatewayConfiguration.threeDSecure.cardinalAuthenticationJWT;
                    }
                    if (!tmp10) {
                      outer1_6.sendEvent(tmp3.client, "three-d-secure.initialization.failed.missing-cardinalAuthenticationJWT");
                      THREEDS_NOT_ENABLED = outer1_7.THREEDS_NOT_ENABLED_FOR_V2;
                    }
                    if (THREEDS_NOT_ENABLED) {
                      const tmp22 = new outer1_5(THREEDS_NOT_ENABLED);
                      rejectResult = Promise.reject(tmp22);
                    } else {
                      outer1_6.sendEvent(tmp3.client, "three-d-secure.initialized");
                    }
                    return rejectResult;
                  });
                  const tmp2 = new version({ client: version.client, assetsUrl: obj, createPromise: nextPromise, loggingEnabled: version.loggingEnabled, cardinalSDKConfig: version.cardinalSDKConfig, framework: str3 });
                  let nextPromise1 = tmp2;
                  version = tmp2;
                  if (version.client) {
                    nextPromise1 = nextPromise.then(() => closure_0);
                  }
                  return nextPromise1;
                });
              }
              str3 = "cardinal-modal";
            }
          }
          obj = { code: constants.THREEDS_UNSUPPORTED_VERSION.code, type: constants.THREEDS_UNSUPPORTED_VERSION.type, message: constants.THREEDS_UNSUPPORTED_VERSION.message };
          throw new closure_5(obj);
        }),
        VERSION: "3.112.1"
      };
    },
    { "../lib/analytics": 138, "../lib/basic-component-verification": 141, "../lib/braintree-error": 143, "../lib/create-assets-url": 148, "../lib/create-deferred-client": 150, "../lib/is-https": 172, "./external/three-d-secure": 218, "./shared/errors": 221, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { LANDING_FRAME_NAME: "braintreethreedsecurelanding", CARDINAL_SCRIPT_SOURCE: { production: "https://songbird.cardinalcommerce.com/edge/v1/songbird.js", sandbox: "https://songbirdstag.cardinalcommerce.com/edge/v1/songbird.js" } };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT, code: "THREEDS_NOT_ENABLED", message: "3D Secure is not enabled for this merchant." };
      obj = { type: globalResult.types.MERCHANT, code: "THREEDS_CAN_NOT_USE_TOKENIZATION_KEY", message: "3D Secure can not use a tokenization key for authorization." };
      obj = { type: globalResult.types.MERCHANT, code: "THREEDS_HTTPS_REQUIRED", message: "3D Secure requires HTTPS." };
      module.exports = { THREEDS_NOT_ENABLED: obj, THREEDS_CAN_NOT_USE_TOKENIZATION_KEY: obj, THREEDS_HTTPS_REQUIRED: obj, THREEDS_NOT_ENABLED_FOR_V2: { type: globalResult.types.MERCHANT, code: "THREEDS_NOT_ENABLED_FOR_V2", message: "3D Secure version 2 is not enabled for this merchant. Contact Braintree Support for assistance at https://help.braintreepayments.com/" }, THREEDS_UNRECOGNIZED_VERSION: { type: globalResult.types.MERCHANT, code: "THREEDS_UNRECOGNIZED_VERSION" }, THREEDS_CARDINAL_SDK_SETUP_FAILED: { type: globalResult.types.UNKNOWN, code: "THREEDS_CARDINAL_SDK_SETUP_FAILED", message: "Something went wrong setting up Cardinal's Songbird.js library." }, THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED: { type: globalResult.types.NETWORK, code: "THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED", message: "Cardinal's Songbird.js library could not be loaded." }, THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT: { type: globalResult.types.UNKNOWN, code: "THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT", message: "Cardinal's Songbird.js took too long to setup." }, THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT: { type: globalResult.types.UNKNOWN, code: "THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT", message: "Cardinal's API took too long to respond." }, THREEDS_CARDINAL_SDK_BAD_CONFIG: { type: globalResult.types.MERCHANT, code: "THREEDS_CARDINAL_SDK_BAD_CONFIG", message: "JWT or other required field missing. Please check your setup configuration." }, THREEDS_CARDINAL_SDK_BAD_JWT: { type: globalResult.types.MERCHANT, code: "THREEDS_CARDINAL_SDK_BAD_JWT", message: "Cardinal JWT missing or malformed. Please check your setup configuration." }, THREEDS_CARDINAL_SDK_ERROR: { type: globalResult.types.UNKNOWN, code: "THREEDS_CARDINAL_SDK_ERROR", message: "A general error has occurred with Cardinal. See description for more information." }, THREEDS_CARDINAL_SDK_CANCELED: { type: globalResult.types.CUSTOMER, code: "THREEDS_CARDINAL_SDK_CANCELED", message: "Canceled by user." }, THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT: { type: globalResult.types.MERCHANT, code: "THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT", message: "3D Secure verfication canceled by merchant." }, THREEDS_AUTHENTICATION_IN_PROGRESS: { type: globalResult.types.MERCHANT, code: "THREEDS_AUTHENTICATION_IN_PROGRESS", message: "Cannot call verifyCard while existing authentication is in progress." }, THREEDS_MISSING_VERIFY_CARD_OPTION: { type: globalResult.types.MERCHANT, code: "THREEDS_MISSING_VERIFY_CARD_OPTION" }, THREEDS_JWT_AUTHENTICATION_FAILED: { type: globalResult.types.UNKNOWN, code: "THREEDS_JWT_AUTHENTICATION_FAILED", message: "Something went wrong authenticating the JWT from Cardinal" }, THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR: { type: globalResult.types.MERCHANT, code: "THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR", message: "Either the payment method nonce passed to `verifyCard` does not exist, or it was already consumed" }, THREEDS_LOOKUP_VALIDATION_ERROR: { type: globalResult.types.CUSTOMER, code: "THREEDS_LOOKUP_VALIDATION_ERROR", message: "The data passed in `verifyCard` did not pass validation checks. See details for more info" }, THREEDS_LOOKUP_ERROR: { type: globalResult.types.UNKNOWN, code: "THREEDS_LOOKUP_ERROR", message: "Something went wrong during the 3D Secure lookup" }, THREEDS_INLINE_IFRAME_DETAILS_INCORRECT: { type: globalResult.types.UNKNOWN, code: "THREEDS_INLINE_IFRAME_DETAILS_INCORRECT", message: "Something went wrong when attempting to add the authentication iframe to the page." }, THREEDS_NO_VERIFICATION_PAYLOAD: { type: globalResult.types.MERCHANT, code: "THREEDS_NO_VERIFICATION_PAYLOAD", message: "No verification payload available." }, THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN: { type: globalResult.types.INTERNAL, code: "THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN", message: "Term Url must be on a Braintree domain." }, THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED: { type: globalResult.types.INTERNAL, code: "THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED", message: "Method not implemented for this framework." }, THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID: { type: globalResult.types.MERCHANT, code: "THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID", message: "Requested Exemption Type is invalid." }, THREEDS_UNSUPPORTED_VERSION: { type: globalResult.types.MERCHANT, code: "THREEDS_UNSUPPORTED_VERSION", message: "3D Secure `1` is deprecated and no longer supported. See available versions at https://braintree.github.io/braintree-web/current/module-braintree-web_three-d-secure.html#.create" } };
    },
    { "../../lib/braintree-error": 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = global("../../lib/enumerate")(["AUTHENTICATION_COMPLETE"], "threedsecure:");
    },
    { "../../lib/enumerate": 153 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./shared/unionpay");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("../lib/braintree-error");
      let closure_3 = global("../lib/create-deferred-client");
      let closure_4 = global("../lib/create-assets-url");
      let closure_5 = global("../lib/analytics");
      let closure_6 = global("./shared/errors");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          const obj = { name: "UnionPay", client: client.client, authorization: client.authorization };
          const verifyResult = closure_1.verify({ name: "UnionPay", client: client.client, authorization: client.authorization });
          return closure_1.verify({ name: "UnionPay", client: client.client, authorization: client.authorization }).then(() => outer1_3.create({ authorization: client.authorization, client: client.client, debug: client.debug, assetsUrl: outer1_4.create(client.authorization), name: "UnionPay" })).then((getConfiguration) => {
            const configuration = getConfiguration.getConfiguration();
            closure_0.client = getConfiguration;
            if (configuration.gatewayConfiguration.unionPay) {
              if (true === configuration.gatewayConfiguration.unionPay.enabled) {
                outer1_5.sendEvent(tmp2.client, "unionpay.initialized");
                let rejectResult = new closure_0(tmp2);
              }
              return rejectResult;
            }
            rejectResult = Promise.reject(new outer1_2(outer1_6.UNIONPAY_NOT_ENABLED));
          });
        }),
        VERSION: "3.112.1"
      };
    },
    { "../lib/analytics": 138, "../lib/basic-component-verification": 141, "../lib/braintree-error": 143, "../lib/create-assets-url": 148, "../lib/create-deferred-client": 150, "./shared/errors": 225, "./shared/unionpay": 226, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { events: global("../../lib/enumerate")(["HOSTED_FIELDS_FETCH_CAPABILITIES", "HOSTED_FIELDS_ENROLL", "HOSTED_FIELDS_TOKENIZE"], "union-pay:"), HOSTED_FIELDS_FRAME_NAME: "braintreeunionpayhostedfields" };
    },
    { "../../lib/enumerate": 153 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT, code: "UNIONPAY_NOT_ENABLED", message: "UnionPay is not enabled for this merchant." };
      obj = { type: globalResult.types.MERCHANT, code: "UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID", message: "Found an invalid Hosted Fields instance. Please use a valid Hosted Fields instance." };
      obj = { type: globalResult.types.MERCHANT, code: "UNIONPAY_HOSTED_FIELDS_INSTANCE_REQUIRED", message: "Could not find the Hosted Fields instance." };
      module.exports = { UNIONPAY_NOT_ENABLED: obj, UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID: obj, UNIONPAY_HOSTED_FIELDS_INSTANCE_REQUIRED: obj, UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED: { type: globalResult.types.MERCHANT, code: "UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED", message: "A card or a Hosted Fields instance is required. Please supply a card or a Hosted Fields instance." }, UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES: { type: globalResult.types.MERCHANT, code: "UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES", message: "Please supply either a card or a Hosted Fields instance, not both." }, UNIONPAY_EXPIRATION_DATE_INCOMPLETE: { type: globalResult.types.MERCHANT, code: "UNIONPAY_EXPIRATION_DATE_INCOMPLETE", message: "You must supply expiration month and year or neither." }, UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID: { type: globalResult.types.CUSTOMER, code: "UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID", message: "Enrollment failed due to user input error." }, UNIONPAY_ENROLLMENT_NETWORK_ERROR: { type: globalResult.types.NETWORK, code: "UNIONPAY_ENROLLMENT_NETWORK_ERROR", message: "Could not enroll UnionPay card." }, UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR: { type: globalResult.types.NETWORK, code: "UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR", message: "Could not fetch card capabilities." }, UNIONPAY_TOKENIZATION_NETWORK_ERROR: { type: globalResult.types.NETWORK, code: "UNIONPAY_TOKENIZATION_NETWORK_ERROR", message: "A tokenization network error occurred." }, UNIONPAY_MISSING_MOBILE_PHONE_DATA: { type: globalResult.types.MERCHANT, code: "UNIONPAY_MISSING_MOBILE_PHONE_DATA", message: "A `mobile` with `countryCode` and `number` is required." }, UNIONPAY_FAILED_TOKENIZATION: { type: globalResult.types.CUSTOMER, code: "UNIONPAY_FAILED_TOKENIZATION", message: "The supplied card data failed tokenization." } };
    },
    { "../../lib/braintree-error": 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class UnionPay {
        constructor(arg0) {
          this._options = global;
          return;
        }
        fetchCapabilities(arg0) {
          self = this;
          self = this;
          client = this._options.client;
          number = null;
          if (global.card) {
            number = global.card.number;
          }
          hostedFields = global.hostedFields;
          if (number) {
            if (hostedFields) {
              tmp19 = globalThis;
              _Promise3 = Promise;
              tmp20 = client;
              tmp21 = c7;
              tmp22 = new.target;
              tmp23 = new.target;
              tmp24 = new client(c7.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES);
              tmp25 = tmp24;
              rejectResult = Promise.reject(tmp24);
            }
            return rejectResult;
          }
          if (number) {
            obj = { method: "get", endpoint: "payment_methods/credit_cards/capabilities", data: null };
            obj = { _meta: null, creditCard: null };
            obj[0] = { source: "unionpay" };
            obj1 = { number: null };
            obj1[0] = number;
            obj[1] = obj1;
            obj[2] = obj;
            requestResult = client.request(obj);
            nextPromise = requestResult.then(() => { ... });
            rejectResult = nextPromise.catch(() => { ... });
          } else if (hostedFields) {
            if (hostedFields._bus) {
              result = self._initializeHostedFields();
              self = result.then;
              selfResult = self(() => { ... });
            } else {
              tmp10 = globalThis;
              _Promise2 = Promise;
              tmp11 = client;
              tmp12 = c7;
              tmp13 = new.target;
              tmp14 = new.target;
              tmp15 = new client(c7.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID);
              tmp16 = tmp15;
              selfResult = Promise.reject(tmp15);
            }
            tmp18 = selfResult;
          } else {
            tmp2 = globalThis;
            _Promise = Promise;
            tmp3 = client;
            tmp4 = c7;
            tmp5 = new.target;
            tmp6 = new.target;
            tmp7 = new client(c7.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED);
            tmp8 = tmp7;
            rejectResult = Promise.reject(tmp7);
          }
          return;
        }
        enroll(arg0) {
          self = this;
          client = this._options.client;
          ({ card, mobile } = global);
          hostedFields = global.hostedFields;
          if (mobile) {
            if (hostedFields) {
              tmp22 = globalThis;
              _Promise4 = Promise;
              if (hostedFields._bus) {
                if (card) {
                  tmp32 = client;
                  tmp33 = c7;
                  tmp34 = new.target;
                  tmp35 = new.target;
                  tmp36 = new client(c7.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES);
                  tmp37 = tmp36;
                  rejectResult = _Promise4.reject(tmp36);
                } else {
                  tmp29 = new.target;
                  tmp30 = new.target;
                  rejectResult = new _Promise4(() => { ... });
                }
                tmp38 = rejectResult;
              } else {
                tmp23 = client;
                tmp24 = c7;
                tmp25 = new.target;
                tmp26 = new.target;
                tmp27 = new client(c7.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID);
                tmp28 = tmp27;
                return _Promise4.reject(tmp27);
              }
            } else {
              if (card) {
                if (card.number) {
                  obj = { _meta: null, unionPayEnrollment: null };
                  obj[0] = { source: "unionpay" };
                  obj = { number: null, mobileCountryCode: null, mobileNumber: null };
                  obj[0] = card.number;
                  ({ countryCode: obj2[1], number: obj2[2] } = mobile);
                  obj[1] = obj;
                  if (card.expirationDate) {
                    obj.unionPayEnrollment.expirationDate = card.expirationDate;
                  } else if (card.expirationMonth) {
                    if (card.expirationMonth) {
                      if (card.expirationYear) {
                        ({ expirationYear: obj.unionPayEnrollment.expirationYear, expirationMonth: obj.unionPayEnrollment.expirationMonth } = card);
                      }
                    }
                    tmp15 = globalThis;
                    _Promise3 = Promise;
                    tmp16 = client;
                    tmp17 = c7;
                    tmp18 = new.target;
                    tmp19 = new.target;
                    tmp20 = new client(c7.UNIONPAY_EXPIRATION_DATE_INCOMPLETE);
                    tmp21 = tmp20;
                    return Promise.reject(tmp20);
                  }
                  obj1 = { method: "post", endpoint: "union_pay_enrollments", data: null };
                  obj1[2] = obj;
                  requestResult = client.request(obj1);
                  nextPromise = requestResult.then(() => { ... });
                  return nextPromise.catch(() => { ... });
                }
              }
              tmp8 = globalThis;
              _Promise2 = Promise;
              tmp9 = client;
              tmp10 = c7;
              tmp11 = new.target;
              tmp12 = new.target;
              tmp13 = new client(c7.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED);
              tmp14 = tmp13;
              return Promise.reject(tmp13);
            }
          } else {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = client;
            tmp3 = c7;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = new client(c7.UNIONPAY_MISSING_MOBILE_PHONE_DATA);
            tmp7 = tmp6;
            return Promise.reject(tmp6);
          }
          return;
        }
        tokenize(arg0) {
          closure_0 = global;
          self = this;
          client = this._options.client;
          ({ card, hostedFields } = global);
          if (card) {
            if (hostedFields) {
              tmp20 = globalThis;
              _Promise3 = Promise;
              tmp21 = self;
              tmp22 = c7;
              tmp23 = new.target;
              tmp24 = new.target;
              tmp25 = new self(c7.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES);
              tmp26 = tmp25;
              rejectResult = Promise.reject(tmp25);
            }
            return rejectResult;
          }
          if (card) {
            obj = { _meta: null, creditCard: null };
            obj[0] = { source: "unionpay" };
            obj = { number: null, options: null };
            obj[0] = global.card.number;
            obj1 = { unionPayEnrollment: null };
            obj2 = { id: null };
            obj2[0] = global.enrollmentId;
            obj1[0] = obj2;
            obj[1] = obj1;
            obj[1] = obj;
            if (global.smsCode) {
              obj.creditCard.options.unionPayEnrollment.smsCode = global.smsCode;
            }
            if (card.expirationDate) {
              obj.creditCard.expirationDate = card.expirationDate;
            } else {
              tmp19 = card.expirationMonth && card.expirationYear;
              if (tmp19) {
                ({ expirationYear: obj.creditCard.expirationYear, expirationMonth: obj.creditCard.expirationMonth } = card);
              }
            }
            if (global.card.cvv) {
              obj.creditCard.cvv = global.card.cvv;
            }
            obj3 = { method: "post", endpoint: "payment_methods/credit_cards", data: null };
            obj3[2] = obj;
            requestResult = client.request(obj3);
            nextPromise = requestResult.then(() => { ... });
            rejectResult = nextPromise.catch(() => { ... });
          } else {
            tmp = globalThis;
            if (hostedFields) {
              _Promise2 = Promise;
              if (hostedFields._bus) {
                tmp16 = new.target;
                tmp17 = new.target;
                _Promise2 = new _Promise2(() => { ... });
              } else {
                tmp9 = self;
                tmp10 = c7;
                tmp11 = new.target;
                tmp12 = new.target;
                tmp13 = new self(c7.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID);
                tmp14 = tmp13;
                _Promise2 = _Promise2.reject(tmp13);
              }
              tmp18 = _Promise2;
            } else {
              _Promise = Promise;
              tmp2 = self;
              tmp3 = c7;
              tmp4 = new.target;
              tmp5 = new.target;
              tmp6 = new self(c7.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED);
              tmp7 = tmp6;
              rejectResult = Promise.reject(tmp6);
            }
          }
          return;
        }
        teardown() {
          self = this;
          if (this._bus) {
            parentNode = self._hostedFieldsFrame.parentNode;
            removeChildResult = parentNode.removeChild(self._hostedFieldsFrame);
            _bus = self._bus;
            teardownResult = _bus.teardown();
          }
          tmp3 = c6(self, c10(UnionPay.prototype));
          return Promise.resolve();
        }
        _initializeHostedFields() {
          self = this;
          framebus = c11();
          self = this;
          if (!this._hostedFieldsInitializePromise) {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = new.target;
            tmp3 = new.target;
            promise = new Promise(() => { ... });
            tmp5 = promise;
            self._hostedFieldsInitializePromise = promise;
          }
          return self._hostedFieldsInitializePromise;
        }
      }
      let closure_0 = global("../../lib/analytics");
      let closure_1 = global("../../lib/braintree-error");
      let closure_2 = global("framebus");
      const globalResult = global("./constants");
      let closure_3 = globalResult;
      let closure_4 = global("../../lib/is-verified-domain");
      let closure_5 = global("../../lib/use-min");
      let closure_6 = global("../../lib/convert-methods-to-error");
      let closure_7 = global("./errors");
      const events = globalResult.events;
      let closure_9 = global("@braintree/iframer");
      let closure_10 = global("../../lib/methods");
      let closure_11 = global("@braintree/uuid");
      let closure_12 = global("../../lib/constants").BUS_CONFIGURATION_REQUEST_EVENT;
      module.exports = global("@braintree/wrap-promise").wrapPrototype(UnionPay);
    },
    { "../../lib/analytics": 138, "../../lib/braintree-error": 143, "../../lib/constants": 145, "../../lib/convert-methods-to-error": 146, "../../lib/is-verified-domain": 173, "../../lib/methods": 175, "../../lib/use-min": 181, "./constants": 224, "./errors": 225, "@braintree/iframer": 32, "@braintree/uuid": 36, "@braintree/wrap-promise": 40, framebus: 50 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { PLAID_LINK_JS: "https://cdn.plaid.com/link/v2/stable/link-initialize.js" };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT, code: "US_BANK_ACCOUNT_OPTION_REQUIRED" };
      obj = { type: globalResult.types.MERCHANT, code: "US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS" };
      obj = { type: globalResult.types.NETWORK, code: "US_BANK_ACCOUNT_LOGIN_LOAD_FAILED", message: "Bank login flow failed to load." };
      module.exports = { US_BANK_ACCOUNT_OPTION_REQUIRED: obj, US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS: obj, US_BANK_ACCOUNT_LOGIN_LOAD_FAILED: obj, US_BANK_ACCOUNT_LOGIN_CLOSED: { type: globalResult.types.CUSTOMER, code: "US_BANK_ACCOUNT_LOGIN_CLOSED", message: "Customer closed bank login flow before authorizing." }, US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE: { type: globalResult.types.MERCHANT, code: "US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE", message: "Another bank login tokenization request is active." }, US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR: { type: globalResult.types.NETWORK, code: "US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR", message: "A tokenization network error occurred." }, US_BANK_ACCOUNT_FAILED_TOKENIZATION: { type: globalResult.types.CUSTOMER, code: "US_BANK_ACCOUNT_FAILED_TOKENIZATION", message: "The supplied data failed tokenization." }, US_BANK_ACCOUNT_NOT_ENABLED: { type: globalResult.types.MERCHANT, code: "US_BANK_ACCOUNT_NOT_ENABLED", message: "US bank account is not enabled." }, US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED: { type: globalResult.types.MERCHANT, code: "US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED", message: "Bank login is not enabled." } };
    },
    { "../lib/braintree-error": 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/basic-component-verification");
      let closure_1 = global("../lib/braintree-error");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      let closure_4 = global("./errors");
      let closure_5 = global("./us-bank-account");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          const obj = { name: "US Bank Account", client: client.client, authorization: client.authorization };
          const verifyResult = closure_0.verify({ name: "US Bank Account", client: client.client, authorization: client.authorization });
          return closure_0.verify({ name: "US Bank Account", client: client.client, authorization: client.authorization }).then(() => outer1_2.create({ authorization: client.authorization, client: client.client, debug: client.debug, assetsUrl: outer1_3.create(client.authorization), name: "US Bank Account" })).then((client) => {
            client.client = client;
            client = client.client;
            if (client.getConfiguration().gatewayConfiguration.usBankAccount) {
              let rejectResult = new outer1_5(tmp);
            } else {
              const tmp7 = new outer1_1(outer1_4.US_BANK_ACCOUNT_NOT_ENABLED);
              rejectResult = Promise.reject(tmp7);
            }
            return rejectResult;
          });
        }),
        VERSION: "3.112.1"
      };
    },
    { "../lib/basic-component-verification": 141, "../lib/braintree-error": 143, "../lib/create-assets-url": 148, "../lib/create-deferred-client": 150, "./errors": 228, "./us-bank-account": 230, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class USBankAccount {
        constructor(arg0) {
          obj = { _client: global.client, _isTokenizingBankLogin: false };
          sendEventResult = c4.sendEvent(obj._client, "usbankaccount.initialized");
          return;
        }
        tokenize(arg0) {
          obj = global;
          if (!global) {
            obj = {};
          }
          if (obj.mandateText) {
            if (!obj.bankDetails) {
              self = this;
              if (obj.bankDetails) {
                _tokenizeBankDetailsResult = self._tokenizeBankDetails(obj);
              } else if (obj.bankLogin) {
                _tokenizeBankDetailsResult = self._tokenizeBankLogin(obj);
              } else {
                tmp9 = globalThis;
                _Promise2 = Promise;
                tmp10 = c0;
                obj = { type: null, code: null, message: "tokenize must be called with bankDetails or bankLogin." };
                tmp11 = c2;
                obj[0] = c2.US_BANK_ACCOUNT_OPTION_REQUIRED.type;
                obj[1] = c2.US_BANK_ACCOUNT_OPTION_REQUIRED.code;
                tmp12 = new.target;
                tmp13 = new.target;
                tmp14 = obj;
                tmp15 = new c0(obj);
                tmp16 = tmp15;
                _tokenizeBankDetailsResult = Promise.reject(tmp15);
              }
              tmp26 = _tokenizeBankDetailsResult;
            }
            tmp18 = globalThis;
            _Promise3 = Promise;
            tmp19 = c0;
            obj1 = { type: null, code: null, message: "tokenize must be called with bankDetails or bankLogin, not both." };
            tmp20 = c2;
            obj1[0] = c2.US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS.type;
            obj1[1] = c2.US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS.code;
            tmp21 = new.target;
            tmp22 = new.target;
            tmp23 = obj1;
            tmp24 = new c0(obj1);
            tmp25 = tmp24;
            _tokenizeBankDetailsResult = Promise.reject(tmp24);
          } else {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = c0;
            obj2 = { type: null, code: null, message: "mandateText property is required." };
            tmp3 = c2;
            obj2[0] = c2.US_BANK_ACCOUNT_OPTION_REQUIRED.type;
            obj2[1] = c2.US_BANK_ACCOUNT_OPTION_REQUIRED.code;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = obj2;
            tmp7 = new c0(obj2);
            tmp8 = tmp7;
            return Promise.reject(tmp7);
          }
          return;
        }
        _tokenizeBankDetails(arg0) {
          _client = this._client;
          bankDetails = global.bankDetails;
          obj = { achMandate: global.mandateText, routingNumber: bankDetails.routingNumber, accountNumber: bankDetails.accountNumber, accountType: str.toUpperCase(), billingAddress: obj };
          str = bankDetails.accountType;
          tmp = bankDetails.billingAddress || {};
          obj = { streetAddress: tmp.streetAddress, extendedAddress: tmp.extendedAddress, city: tmp.locality, state: tmp.region, zipCode: tmp.postalCode };
          if ("personal" === bankDetails.ownershipType) {
            obj1 = { firstName: null, lastName: null };
            ({ firstName: obj4[0], lastName: obj4[1] } = bankDetails);
            obj.individualOwner = obj1;
          } else {
            str2 = "business";
            if ("business" === bankDetails.ownershipType) {
              obj2 = { businessName: null };
              obj2[0] = bankDetails.businessName;
              obj.businessOwner = obj2;
            }
          }
          obj3 = { query: c8, variables: { input: { usBankAccount: obj } } };
          requestResult = _client.request({ api: "graphQLApi", data: obj3 });
          nextPromise = requestResult.then(() => { ... });
          return nextPromise.catch(() => { ... });
        }
        _tokenizeBankLogin(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          _client = this._client;
          gatewayConfiguration = _client.getConfiguration().gatewayConfiguration;
          c3 = "production" === gatewayConfiguration.environment;
          plaid = gatewayConfiguration.usBankAccount.plaid;
          reject = globalThis;
          if (global.bankLogin.displayName) {
            if (!plaid) {
              _Promise2 = Promise;
              tmp8 = closure_0;
              tmp9 = _client;
              tmp10 = new.target;
              tmp11 = new.target;
              tmp12 = new closure_0(_client.US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED);
              tmp13 = tmp12;
              rejectResult = Promise.reject(tmp12);
            }
            if (self._isTokenizingBankLogin) {
              _Promise4 = reject.Promise;
              reject = _Promise4.reject;
              tmp17 = closure_0;
              tmp18 = _client;
              tmp19 = new.target;
              tmp20 = new.target;
              tmp21 = new closure_0(_client.US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE);
              tmp22 = tmp21;
              rejectResult1 = reject(tmp21);
            } else {
              flag = true;
              self._isTokenizingBankLogin = true;
              _Promise3 = Promise;
              tmp14 = new.target;
              tmp15 = new.target;
              rejectResult1 = new Promise(() => { ... });
            }
            tmp23 = rejectResult1;
          } else {
            _Promise = Promise;
            tmp = closure_0;
            obj = { type: null, code: null, message: "displayName property is required when using bankLogin." };
            tmp2 = _client;
            obj[0] = _client.US_BANK_ACCOUNT_OPTION_REQUIRED.type;
            obj[1] = _client.US_BANK_ACCOUNT_OPTION_REQUIRED.code;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp5 = obj;
            tmp6 = new closure_0(obj);
            tmp7 = tmp6;
            return Promise.reject(tmp6);
          }
          return;
        }
        _loadPlaid(arg0) {
          tmp = c5(global);
          if (window.Plaid) {
            _window = window;
            tmp10 = null;
            tmpResult = tmp(null, window.Plaid);
          } else {
            _document = document;
            str = "script[src=\"";
            str2 = "\"]";
            tmp2 = c1;
            element = document.querySelector(`script[src="${c1.PLAID_LINK_JS}"]`);
            if (element) {
              script = element;
              c1 = tmp;
              loadHandler2 = function loadHandler() { ... };
              loadHandler = loadHandler2;
              errorHandler2 = function errorHandler() { ... };
              errorHandler = errorHandler2;
              str7 = "error";
              listener = element.addEventListener("error", errorHandler2);
              str8 = "load";
              listener1 = element.addEventListener("load", loadHandler2);
              str9 = "readystatechange";
              listener2 = element.addEventListener("readystatechange", loadHandler2);
            } else {
              self = this;
              _document2 = document;
              str3 = "script";
              element1 = document.createElement("script");
              element1.src = tmp2.PLAID_LINK_JS;
              flag = true;
              element1.async = true;
              script = element1;
              c1 = tmp;
              loadHandler = function loadHandler() { ... };
              errorHandler = function errorHandler() { ... };
              str4 = "error";
              listener3 = element1.addEventListener("error", errorHandler);
              str5 = "load";
              listener4 = element1.addEventListener("load", loadHandler);
              str6 = "readystatechange";
              listener5 = element1.addEventListener("readystatechange", loadHandler);
              _document3 = document;
              body = document.body;
              appendChildResult = body.appendChild(element1);
              this._plaidScript = element1;
            }
          }
          return;
        }
        teardown() {
          self = this;
          if (this._plaidScript) {
            tmp = globalThis;
            _document = document;
            body = document.body;
            removeChildResult = body.removeChild(self._plaidScript);
          }
          tmp3 = c6(self, c7(USBankAccount.prototype));
          return Promise.resolve();
        }
      }
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("./constants");
      let closure_2 = global("./errors");
      let closure_3 = global("../lib/errors");
      let closure_4 = global("../lib/analytics");
      let closure_5 = global("../lib/once");
      let closure_6 = global("../lib/convert-methods-to-error");
      let closure_7 = global("../lib/methods");
      let c8 = "mutation TokenizeUsBankAccount($input: TokenizeUsBankAccountInput!) {  tokenizeUsBankAccount(input: $input) {    paymentMethod {      id      details {        ... on UsBankAccountDetails {          last4        }      }    }  }}";
      let c9 = "mutation TokenizeUsBankLogin($input: TokenizeUsBankLoginInput!) {  tokenizeUsBankLogin(input: $input) {    paymentMethod {      id      details {        ... on UsBankAccountDetails {          last4        }      }    }  }}";
      module.exports = global("@braintree/wrap-promise").wrapPrototype(USBankAccount);
    },
    { "../lib/analytics": 138, "../lib/braintree-error": 143, "../lib/convert-methods-to-error": 146, "../lib/errors": 154, "../lib/methods": 175, "../lib/once": 176, "./constants": 227, "./errors": 228, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT, code: "VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN", message: "A client token with a customer id must be used to delete a payment method nonce." };
      obj = { type: globalResult.types.MERCHANT, code: "VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND" };
      obj = { type: globalResult.types.UNKNOWN, code: "VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR" };
      module.exports = { VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN: obj, VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND: obj, VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR: obj };
    },
    { "../lib/braintree-error": 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/basic-component-verification");
      let closure_1 = global("../lib/create-deferred-client");
      let closure_2 = global("../lib/create-assets-url");
      let closure_3 = global("./vault-manager");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          return closure_0.verify({ name: "Vault Manager", client: client.client, authorization: client.authorization }).then(() => {
            let obj = { createPromise: null };
            obj = { authorization: client.authorization, client: client.client, debug: client.debug, assetsUrl: outer1_2.create(client.authorization), name: "Vault Manager" };
            obj[0] = outer1_1.create(obj);
            return new outer1_3(obj);
          });
        }),
        VERSION: "3.112.1"
      };
    },
    { "../lib/basic-component-verification": 141, "../lib/create-assets-url": 148, "../lib/create-deferred-client": 150, "./vault-manager": 233, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class VaultManager {
        constructor(arg0) {
          this._createPromise = global.createPromise;
          return;
        }
        fetchPaymentMethods(arg0) {
          obj = global;
          if (!global) {
            obj = {};
          }
          num = 0;
          if (true === obj.defaultFirst) {
            num = 1;
          }
          c0 = num;
          _createPromise = this._createPromise;
          nextPromise = _createPromise.then((request) => {
            const data = { defaultFirst: num };
            return request.request({ endpoint: "payment_methods", method: "get", data });
          });
          fn = function(paymentMethods) {
            num.sendEvent(this._createPromise, "vault-manager.fetch-payment-methods.succeeded");
            paymentMethods = paymentMethods.paymentMethods;
            return paymentMethods.map(closure_6);
          };
          return nextPromise.then(fn.bind(this));
        }
        deletePaymentMethod(arg0) {
          closure_0 = global;
          _createPromise = this._createPromise;
          return _createPromise.then((getConfiguration) => {
            let closure_0 = getConfiguration;
            if ("CLIENT_TOKEN" === getConfiguration.getConfiguration().authorizationType) {
              let obj = { api: "graphQLApi", data: null };
              obj = { query: "mutation DeletePaymentMethodFromSingleUseToken($input: DeletePaymentMethodFromSingleUseTokenInput!) {  deletePaymentMethodFromSingleUseToken(input: $input) {    clientMutationId  }}", variables: null, operationName: "DeletePaymentMethodFromSingleUseToken" };
              obj = { input: null };
              let obj1 = { singleUseTokenId: null };
              obj1[0] = closure_0;
              obj[0] = obj1;
              obj[1] = obj;
              obj[1] = obj;
              const requestResult = getConfiguration.request(obj);
              let catchPromise = getConfiguration.request(obj).then(() => { ... }).catch(() => { ... });
              const nextPromise = getConfiguration.request(obj).then(() => { ... });
            } else {
              const tmp6 = new outer1_1(outer1_2.VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN);
              catchPromise = Promise.reject(tmp6);
            }
            return catchPromise;
          });
        }
        teardown() {
          tmp = c3(this, c4(VaultManager.prototype));
          return Promise.resolve();
        }
      }
      function formatPaymentMethodPayload(nonce) {
        const obj = { nonce: nonce.nonce, default: nonce.default, details: nonce.details, hasSubscription: nonce.hasSubscription, type: nonce.type };
        if (nonce.description) {
          obj.description = nonce.description;
        }
        if (nonce.binData) {
          obj.binData = nonce.binData;
        }
        return obj;
      }
      let closure_0 = global("../lib/analytics");
      let closure_1 = global("../lib/braintree-error");
      let closure_2 = global("./errors");
      let closure_3 = global("../lib/convert-methods-to-error");
      let closure_4 = global("../lib/methods");
      module.exports = global("@braintree/wrap-promise").wrapPrototype(VaultManager);
    },
    { "../lib/analytics": 138, "../lib/braintree-error": 143, "../lib/convert-methods-to-error": 146, "../lib/methods": 175, "./errors": 231, "@braintree/wrap-promise": 40 }
  ];
  items = [
    function(arg0, arg1, arg2) {
      let fn = this;
      if (this) {
        fn = this.__importDefault;
      }
      if (!fn) {
        fn = (__esModule) => {
          if (!__esModule) {
            const obj = { default: null };
            obj[0] = __esModule;
            let tmp = obj;
          } else {
            tmp = __esModule;
          }
          return tmp;
        };
      }
      let closure_0 = fn(global("./venmo-desktop"));
      module.exports = function createVenmoDesktop(arg0) {
        return new mod.default(arg0).initialize();
      };
    },
    { "./venmo-desktop": 236 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      arg2.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY = undefined;
      arg2.CREATE_PAYMENT_CONTEXT_QUERY = undefined;
      arg2.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY = undefined;
      arg2.UPDATE_PAYMENT_CONTEXT_QUERY = undefined;
      arg2.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY = undefined;
      arg2.VENMO_PAYMENT_CONTEXT_STATUS_QUERY = undefined;
      arg2.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY = "mutation CreateVenmoQRCodePaymentContext($input: CreateVenmoQRCodePaymentContextInput!) {\n  createVenmoQRCodePaymentContext(input: $input) {\n    clientMutationId\n    venmoQRCodePaymentContext {\n      id\n      merchantId\n      createdAt\n      expiresAt\n    }\n  }\n}";
      arg2.CREATE_PAYMENT_CONTEXT_QUERY = "mutation CreateVenmoPaymentContext($input: CreateVenmoPaymentContextInput!) {\n  createVenmoPaymentContext(input: $input) {\n    clientMutationId\n    venmoPaymentContext {\n      id\n      merchantId\n      createdAt\n      expiresAt\n    }\n  }\n}";
      arg2.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY = "mutation UpdateVenmoQRCodePaymentContext($input: UpdateVenmoQRCodePaymentContextInput!) {\n  updateVenmoQRCodePaymentContext(input: $input) {\n    clientMutationId\n  }\n}";
      arg2.UPDATE_PAYMENT_CONTEXT_QUERY = "mutation UpdateVenmoPaymentContextStatus($input: UpdateVenmoPaymentContextStatusInput!) {\n  updateVenmoPaymentContextStatus(input: $input) {\n    clientMutationId\n  }\n}";
      arg2.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY = "query PaymentContext($id: ID!) {\n  node(id: $id) {\n    ... on VenmoQRCodePaymentContext {\n      status\n      paymentMethodId\n      userName\n    }\n  }\n}";
      arg2.VENMO_PAYMENT_CONTEXT_STATUS_QUERY = "query PaymentContext($id: ID!) {\n  node(id: $id) {\n    ... on VenmoPaymentContext {\n      status\n      paymentMethodId\n      userName\n      payerInfo {\n        firstName\n        lastName\n        phoneNumber\n        email\n        externalId\n        userName\n        billingAddress {\n          fullName\n          addressLine1\n          addressLine2\n          adminArea1\n          adminArea2\n          postalCode\n          countryCode\n        }\n        shippingAddress {\n          fullName\n          addressLine1\n          addressLine2\n          adminArea1\n          adminArea2\n          postalCode\n          countryCode\n        }\n      }\n    }\n  }\n}";
    },
    {}
  ];
  items = [
    function(arg0, arg1, arg2) {
      let self = this;
      let fn = this;
      if (this) {
        fn = self.__assign;
      }
      if (!fn) {
        fn = function() {
          let tmp = Object.assign || ((arg0) => {
            for (let num = 1; num < length; num = num + 1) {
              let tmp = arguments[num];
              let tmp2 = tmp;
              let tmp3 = num;
              for (const key10012 in tmp) {
                let tmp5 = key10012;
                let _Object = Object;
                let call = hasOwnProperty.call;
                if (typeof call === "unknown") {
                  let hasOwnPropertyResult = hasOwnProperty(key10012);
                } else {
                  hasOwnPropertyResult = call(tmp, key10012);
                }
                if (!hasOwnPropertyResult) {
                  continue;
                } else {
                  arg0[key10012] = tmp[key10012];
                  continue;
                }
                continue;
              }
            }
            return arg0;
          });
          const self = this;
          const apply = tmp.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
      }
      let fn2 = self;
      if (self) {
        fn2 = self.__importDefault;
      }
      if (!fn2) {
        fn2 = (__esModule) => {
          if (!__esModule) {
            const obj = { default: null };
            obj[0] = __esModule;
            let tmp = obj;
          } else {
            tmp = __esModule;
          }
          return tmp;
        };
      }
      let closure_1 = fn2(arg0("framebus"));
      let closure_2 = fn2(arg0("@braintree/iframer"));
      let closure_3 = fn2(arg0("@braintree/uuid"));
      let closure_4 = arg0("../shared/events");
      let closure_5 = arg0("./queries");
      class VenmoDesktop {
        constructor(arg0) {
          obj = { isHidden: true, env: arg0.environment, id: c3.default(), profileId: arg0.profileId, displayName: arg0.displayName, paymentMethodUsage: arg0.paymentMethodUsage, shouldUseLegacyQRCodeMutation: !obj.paymentMethodUsage };
          obj = { channel: obj.id, verifyDomain: arg0.verifyDomain, targetFrames: [] };
          text = `${arg0.url}#${obj.env}_${obj.id}`;
          _default = new framebus.default(obj);
          obj.bus = _default;
          ({ apiRequest: obj.apiRequest, sendEvent: obj.sendEvent, Promise: obj.Promise } = arg0);
          obj.alertBox = document.createElement("div");
          alertBox = obj.alertBox;
          attr = alertBox.setAttribute("data-venmo-desktop-id", obj.id);
          alertBox2 = obj.alertBox;
          attr1 = alertBox2.setAttribute("role", "alert");
          obj.alertBox.style.position = "fixed";
          obj.alertBox.style.display = "none";
          obj.alertBox.style.height = "1px";
          obj.alertBox.style.width = "1px";
          obj.alertBox.style.overflow = "hidden";
          obj.alertBox.style.zIndex = "0";
          obj.iframe = c2.default({ src: text, name: "venmo-desktop-iframe", style: { display: "none", position: "fixed", top: "0", bottom: "0", right: "0", left: "0", height: "100%", width: "100%", zIndex: "9999999" }, title: "Venmo Desktop" });
          bus = obj.bus;
          addTargetFrameResult = bus.addTargetFrame(obj.iframe);
          return;
        }
        initialize() {
          self = this;
          promise = new this.Promise((arg0) => {
            const _self = arg0;
            const bus = _self.bus;
            bus.on(outer1_4.VENMO_DESKTOP_IFRAME_READY, () => {
              lib(lib);
            });
            const bus2 = _self.bus;
            bus2.on(outer1_4.VENMO_DESKTOP_REQUEST_NEW_QR_CODE, () => {
              lib.sendEvent("venmo.tokenize.desktop.restarted-from-error-view");
              lib.startPolling();
            });
            body.appendChild(_self.iframe);
            body2.appendChild(_self.alertBox);
          });
          return promise;
        }
        launchDesktopFlow() {
          self = this;
          this.isHidden = false;
          promise = new this.Promise((arg0, launchDesktopPromiseRejectFunction) => {
            const _self = arg0;
            let closure_1 = launchDesktopPromiseRejectFunction;
            _self.launchDesktopPromiseRejectFunction = launchDesktopPromiseRejectFunction;
            function removeListeners() {

            }
            function unknownErrorHandler(err) {
              if (typeof removeListeners !== "function") {
                HermesBuiltin.throwTypeError();
              }
              const bus = lib.bus;
              bus.off(outer2_4.VENMO_DESKTOP_CUSTOMER_CANCELED, customerCancelledHandler);
              const bus2 = lib.bus;
              bus2.off(outer2_4.VENMO_DESKTOP_UNKNOWN_ERROR, unknownErrorHandler);
              lib.sendEvent("venmo.tokenize.desktop.unknown-error");
              launchDesktopPromiseRejectFunction({ allowUIToHandleError: false, reason: "UNKNOWN_ERROR", err });
            }
            function customerCancelledHandler() {
              if (typeof removeListeners !== "function") {
                HermesBuiltin.throwTypeError();
              }
              const bus = lib.bus;
              bus.off(outer2_4.VENMO_DESKTOP_CUSTOMER_CANCELED, customerCancelledHandler);
              const bus2 = lib.bus;
              bus2.off(outer2_4.VENMO_DESKTOP_UNKNOWN_ERROR, unknownErrorHandler);
              const result = lib.updateVenmoDesktopPaymentContext("CANCELED");
              lib.sendEvent("venmo.tokenize.desktop.status-change.canceled-from-modal");
              launchDesktopPromiseRejectFunction({ allowUIToHandleError: false, reason: "CUSTOMER_CANCELED" });
            }
            _self.completedHandler = (arg0) => {
              if (typeof removeListeners !== "function") {
                HermesBuiltin.throwTypeError();
              }
              const bus = lib.bus;
              bus.off(outer2_4.VENMO_DESKTOP_CUSTOMER_CANCELED, customerCancelledHandler);
              const bus2 = lib.bus;
              bus2.off(outer2_4.VENMO_DESKTOP_UNKNOWN_ERROR, unknownErrorHandler);
              lib(arg0);
            };
            let bus = _self.bus;
            bus.on(outer1_4.VENMO_DESKTOP_CUSTOMER_CANCELED, customerCancelledHandler);
            let bus2 = _self.bus;
            bus2.on(outer1_4.VENMO_DESKTOP_UNKNOWN_ERROR, unknownErrorHandler);
          });
          this.iframe.style.display = "block";
          setAlertResult = this.setAlert("Generating a QR code, get your Venmo app ready");
          iframe = this.iframe;
          focusResult = iframe.focus();
          startPollingResult = this.startPolling();
          nextPromise = promise.then((arg0) => {
            delete tmp2[tmp];
            delete tmp2[tmp];
            return arg0;
          });
          return nextPromise.catch((arg0) => {
            delete tmp[tmp2];
            delete tmp[tmp2];
            return self.Promise.reject(arg0);
          });
        }
        triggerCompleted(arg0) {
          closure_0 = arg0;
          self = this;
          if (!this.isHidden) {
            tmp = globalThis;
            _setTimeout = setTimeout;
            num = 2000;
            timerId = setTimeout(() => {
              if (self.completedHandler) {
                self.completedHandler(closure_0);
              }
              delete tmp2[tmp];
            }, 2000);
          }
          return;
        }
        triggerRejected(arg0) {
          self = this;
          if (this.launchDesktopPromiseRejectFunction) {
            tmp = arg0;
            result = self.launchDesktopPromiseRejectFunction(arg0);
          }
          return;
        }
        hideDesktopFlow() {
          setAlertResult = this.setAlert("");
          this.iframe.style.display = "none";
          bus = this.bus;
          emitResult = bus.emit(c4.VENMO_DESKTOP_CLOSED_FROM_PARENT);
          this.isHidden = true;
          return;
        }
        displayError(arg0) {
          self = this;
          if (!this.isHidden) {
            tmp = arg0;
            bus = self.bus;
            tmp2 = c4;
            obj = { message: null };
            obj[0] = arg0;
            emitResult = bus.emit(c4.VENMO_DESKTOP_DISPLAY_ERROR, obj);
            setAlertResult = self.setAlert(arg0);
          }
          return;
        }
        displayQRCode(arg0, arg1) {
          self = this;
          if (!this.isHidden) {
            tmp = arg0;
            tmp2 = arg1;
            bus = self.bus;
            tmp3 = c4;
            obj = { id: null, merchantId: null };
            obj[0] = arg0;
            obj[1] = arg1;
            emitResult = bus.emit(c4.VENMO_DESKTOP_DISPLAY_QR_CODE, obj);
            str = "To scan the QR code, open your Venmo app";
            setAlertResult = self.setAlert("To scan the QR code, open your Venmo app");
          }
          return;
        }
        authorize() {
          self = this;
          if (!this.isHidden) {
            bus = self.bus;
            tmp = c4;
            emitResult = bus.emit(c4.VENMO_DESKTOP_AUTHORIZE);
            str = "Venmo account authorized";
            setAlertResult = self.setAlert("Venmo account authorized");
          }
          return;
        }
        authorizing() {
          self = this;
          if (!this.isHidden) {
            bus = self.bus;
            tmp = c4;
            emitResult = bus.emit(c4.VENMO_DESKTOP_AUTHORIZING);
            str = "Authorize on your Venmo app";
            setAlertResult = self.setAlert("Authorize on your Venmo app");
          }
          return;
        }
        startPolling() {
          self = this;
          venmoDesktopPaymentContext = this.createVenmoDesktopPaymentContext();
          nextPromise = venmoDesktopPaymentContext.then((expiresAt) => {
            const time = new Date(expiresAt.expiresAt).getTime();
            const date = new Date(expiresAt.expiresAt);
            const diff = time - new Date(expiresAt.createdAt).getTime();
            const sum = Date.now() + diff;
            self.displayQRCode(expiresAt.id, expiresAt.merchantId);
            return self.pollForStatusChange(expiresAt.status, sum);
          });
          nextPromise1 = nextPromise.then((userName) => {
            if (userName) {
              const obj = { paymentMethodNonce: null, username: null, payerInfo: null, id: null };
              obj[0] = userName.paymentMethodId;
              obj[1] = `@${userName.userName || "".replace("@", "")}`;
              obj[2] = userName.payerInfo;
              let str4 = self.venmoContextId;
              if (!str4) {
                str4 = "";
              }
              obj[3] = str4;
              self.triggerCompleted(obj);
              const str = userName.userName || "";
            }
          });
          return nextPromise1.catch((allowUIToHandleError) => {
            if (!allowUIToHandleError.allowUIToHandleError) {
              self.sendEvent("venmo.tokenize.desktop.unhandled-error");
              self.triggerRejected(allowUIToHandleError);
            }
          });
        }
        pollForStatusChange(arg0, arg1) {
          self = this;
          closure_0 = arg0;
          closure_1 = arg1;
          self = this;
          if (this.venmoContextId) {
            tmp = globalThis;
            _Date = Date;
            if (Date.now() > arg1) {
              str = "EXPIRED";
              result = self.updateVenmoDesktopPaymentContext("EXPIRED");
              nextPromise = result.then(() => {
                self.displayError("Something went wrong");
                self.sendEvent("venmo.tokenize.desktop.status-change.sdk-timeout");
                return self.Promise.reject({ allowUIToHandleError: true, reason: "TIMEOUT" });
              });
            } else {
              result1 = self.lookupVenmoDesktopPaymentContext();
              nextPromise = result1.then((status) => {
                let obj = self;
                if (self.venmoContextId) {
                  if (status) {
                    status = status.status;
                    if (status !== status) {
                      obj.sendEvent(`venmo.tokenize.desktop.status-change.${status.toLowerCase()}`);
                      if ("CREATED" !== status) {
                        if ("EXPIRED" !== tmp13) {
                          if ("FAILED" !== tmp13) {
                            if ("CANCELED" !== tmp13) {
                              if ("SCANNED" === tmp13) {
                                obj.authorizing();
                              } else if ("APPROVED" === tmp13) {
                                obj.authorize();
                                return obj.Promise.resolve(status);
                              }
                            }
                          }
                        }
                        let str5 = "Something went wrong";
                        if ("CANCELED" === tmp13) {
                          str5 = "The authorization was canceled";
                        }
                        obj.displayError(str5);
                        obj = { allowUIToHandleError: true, reason: null };
                        obj[1] = status;
                        return obj.Promise.reject(obj);
                      }
                    }
                    const promise = new obj.Promise((arg0, arg1) => {
                      let closure_0 = arg0;
                      let closure_1 = arg1;
                      const timerId = setTimeout(() => { ... }, 1000);
                    });
                    return promise;
                  }
                }
                return obj.Promise.resolve();
              });
            }
            tmp3 = nextPromise;
          } else {
            _Promise = self.Promise;
            return _Promise.resolve();
          }
          return;
        }
        teardown() {
          self = this;
          bus = this.bus;
          teardownResult = bus.teardown();
          if (this.iframe.parentNode) {
            parentNode = self.iframe.parentNode;
            removeChildResult = parentNode.removeChild(self.iframe);
          }
          if (self.alertBox.parentNode) {
            parentNode2 = self.alertBox.parentNode;
            removeChildResult1 = parentNode2.removeChild(self.alertBox);
          }
          return;
        }
        setAlert(arg0) {
          str = "none";
          if (arg0) {
            str = "block";
          }
          this.alertBox.style.display = str;
          this.alertBox.textContent = arg0;
          return;
        }
        createPaymentContextFromGraphqlLegacyQRCodeMutation(arg0) {
          obj = { environment: this.env, intent: arg0 };
          apiRequestResult = this.apiRequest(c5.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY, { input: obj });
          return apiRequestResult.then((createVenmoQRCodePaymentContext) => createVenmoQRCodePaymentContext.createVenmoQRCodePaymentContext.venmoQRCodePaymentContext);
        }
        createPaymentContextFromGraphQL(arg0) {
          self = this;
          obj = { intent: arg0, paymentMethodUsage: this.paymentMethodUsage, customerClient: "DESKTOP" };
          if (this.profileId) {
            obj.merchantProfileId = self.profileId;
          }
          if (self.displayName) {
            obj.displayName = self.displayName;
          }
          apiRequestResult = self.apiRequest(c5.CREATE_PAYMENT_CONTEXT_QUERY, { input: obj });
          return apiRequestResult.then((createVenmoPaymentContext) => createVenmoPaymentContext.createVenmoPaymentContext.venmoPaymentContext);
        }
        createVenmoDesktopPaymentContext() {
          self = this;
          self = this;
          if (this.shouldUseLegacyQRCodeMutation) {
            str2 = "PAY_FROM_APP";
            paymentContextFromGraphqlLegacyQRCodeMutation = self.createPaymentContextFromGraphqlLegacyQRCodeMutation("PAY_FROM_APP");
          } else {
            str = "PAY_FROM_APP";
            paymentContextFromGraphqlLegacyQRCodeMutation = self.createPaymentContextFromGraphQL("PAY_FROM_APP");
          }
          return paymentContextFromGraphqlLegacyQRCodeMutation.then((id) => {
            self.venmoContextId = id.id;
            return { id: id.id, status: id.status, merchantId: self.profileId || id.merchantId, createdAt: id.createdAt, expiresAt: id.expiresAt };
          });
        }
        updateVenmoDesktopPaymentContext(arg0, arg1) {
          obj = arg1;
          if (undefined === arg1) {
            obj = {};
          }
          self = this;
          if (this.venmoContextId) {
            tmp = arg0;
            obj = { input: null };
            tmp2 = f104875;
            obj1 = { id: null, status: null };
            obj1[0] = self.venmoContextId;
            obj1[1] = arg0;
            obj[0] = f104875(obj1, obj);
            tmp3 = c5;
            apiRequestResult = self.apiRequest(self.shouldUseLegacyQRCodeMutation ? tmp3.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY : tmp3.UPDATE_PAYMENT_CONTEXT_QUERY, obj);
            return apiRequestResult.then(() => {

            });
          } else {
            _Promise = self.Promise;
            return _Promise.resolve();
          }
        }
        lookupVenmoDesktopPaymentContext() {
          self = this;
          if (this.venmoContextId) {
            tmp = c5;
            obj = { id: null };
            obj[0] = self.venmoContextId;
            apiRequestResult = self.apiRequest(self.shouldUseLegacyQRCodeMutation ? tmp.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY : tmp.VENMO_PAYMENT_CONTEXT_STATUS_QUERY, obj);
            return apiRequestResult.then((node) => node.node);
          } else {
            _Promise = self.Promise;
            return _Promise.resolve();
          }
        }
      }
      arg2.default = VenmoDesktop;
    },
    { "../shared/events": 241, "./queries": 235, "@braintree/iframer": 32, "@braintree/uuid": 36, framebus: 50 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/analytics");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      let closure_4 = global("./shared/errors");
      let closure_5 = global("../lib/braintree-error");
      let closure_6 = global("./venmo");
      let closure_7 = global("./shared/supports-venmo");
      const globalResult = global("@braintree/wrap-promise");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          return closure_1.verify({ name: "Venmo", client: client.client, authorization: client.authorization }).then(() => {
            if (client.profileId) {
              if (typeof tmp.profileId !== "string") {
                const tmp17 = new outer1_5(outer1_4.VENMO_INVALID_PROFILE_ID);
                let rejectResult = Promise.reject(tmp17);
              }
              return rejectResult;
            }
            if (client.deepLinkReturnUrl) {
              if (typeof tmp.deepLinkReturnUrl !== "string") {
                const tmp10 = new outer1_5(outer1_4.VENMO_INVALID_DEEP_LINK_RETURN_URL);
                rejectResult = Promise.reject(tmp10);
              }
            }
            let obj = { authorization: tmp.authorization, client: tmp.client, debug: tmp.debug, assetsUrl: outer1_3.create(tmp.authorization), name: "Venmo" };
            obj = outer1_2.create(obj);
            const nextPromise = obj.then((client) => {
              let rejectResult = client;
              closure_0.client = client;
              if (!client.getConfiguration().gatewayConfiguration.payWithVenmo) {
                const tmp7 = new outer1_5(outer1_4.VENMO_NOT_ENABLED);
                rejectResult = Promise.reject(tmp7);
              }
              return rejectResult;
            });
            client.createPromise = nextPromise;
            client = new outer1_6(client);
            client.sendEvent(nextPromise, "venmo.initialized");
            rejectResult = nextPromise.then(() => closure_0);
          });
        }),
        isBrowserSupported(arg0) {
          return browserSupported.isBrowserSupported(arg0);
        },
        VERSION: "3.112.1"
      };
    },
    { "../lib/analytics": 138, "../lib/basic-component-verification": 141, "../lib/braintree-error": 143, "../lib/create-assets-url": 148, "../lib/create-deferred-client": 150, "./shared/errors": 240, "./shared/supports-venmo": 243, "./venmo": 245, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("@braintree/browser-detection/is-android");
      const globalResult1 = global("@braintree/browser-detection/is-chrome");
      const globalResult2 = global("@braintree/browser-detection/is-ios");
      const globalResult3 = global("@braintree/browser-detection/is-ios-safari");
      const globalResult4 = global("@braintree/browser-detection/is-ios-webview");
      module.exports = {
        isAndroid: globalResult,
        isAndroidWebview() {
          let tmp = globalResult();
          if (tmp) {
            const _window = window;
            const formatted = window.navigator.userAgent.toLowerCase();
            tmp = formatted.indexOf("wv") > -1;
            const str = window.navigator.userAgent;
          }
          return tmp;
        },
        isChrome: globalResult1,
        isIos: globalResult2,
        isIosChrome() {
          let tmp = globalResult2();
          if (tmp) {
            tmp = globalResult1();
          }
          return tmp;
        },
        isSamsung: global("@braintree/browser-detection/is-samsung"),
        isIosSafari: globalResult3,
        isIosWebview: globalResult4,
        isFacebookOwnedBrowserOnAndroid() {
          const formatted = window.navigator.userAgent.toLowerCase();
          let tmp = formatted.indexOf("huawei") > -1;
          if (tmp) {
            tmp = formatted.indexOf("fban") > -1;
          }
          if (!tmp) {
            let tmp3 = globalResult();
            if (tmp3) {
              let tmp4 = formatted.indexOf("fb_iab") > -1;
              if (!tmp4) {
                tmp4 = formatted.indexOf("instagram") > -1;
              }
              tmp3 = tmp4;
            }
            tmp = tmp3;
          }
          return tmp;
        },
        doesNotSupportWindowOpenInIos() {
          let tmp = globalResult2();
          if (tmp) {
            let tmp3 = globalResult4();
            if (!tmp3) {
              tmp3 = !globalResult3();
            }
            tmp = tmp3;
          }
          return tmp;
        }
      };
    },
    { "@braintree/browser-detection/is-android": 20, "@braintree/browser-detection/is-chrome": 22, "@braintree/browser-detection/is-ios": 27, "@braintree/browser-detection/is-ios-safari": 24, "@braintree/browser-detection/is-ios-webview": 25, "@braintree/browser-detection/is-samsung": 28 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY: 500, DEFAULT_PROCESS_RESULTS_DELAY: 1000, VENMO_APP_OR_MOBILE_AUTH_URL: "https://venmo.com/go/checkout", VENMO_MOBILE_APP_AUTH_ONLY_URL: "https://venmo.com/braintree/checkout", VENMO_WEB_LOGIN_URL: "https://account.venmo.com/go/web" };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT, code: "VENMO_NOT_ENABLED", message: "Venmo is not enabled for this merchant." };
      obj = { type: globalResult.types.MERCHANT, code: "VENMO_TOKENIZATION_REQUEST_ACTIVE", message: "Another tokenization request is active." };
      obj = { type: globalResult.types.MERCHANT, code: "VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE", message: "No tokenization in progress." };
      module.exports = { VENMO_NOT_ENABLED: obj, VENMO_TOKENIZATION_REQUEST_ACTIVE: obj, VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE: obj, VENMO_APP_FAILED: { type: globalResult.types.UNKNOWN, code: "VENMO_APP_FAILED", message: "Venmo app encountered a problem." }, VENMO_APP_CANCELED: { type: globalResult.types.CUSTOMER, code: "VENMO_APP_CANCELED", message: "Venmo app authorization was canceled." }, VENMO_CANCELED: { type: globalResult.types.CUSTOMER, code: "VENMO_CANCELED", message: "User canceled Venmo authorization, or Venmo app is not available." }, VENMO_CUSTOMER_CANCELED: { type: globalResult.types.CUSTOMER, code: "VENMO_CUSTOMER_CANCELED", message: "User canceled Venmo authorization." }, VENMO_NETWORK_ERROR: { type: globalResult.types.NETWORK, code: "VENMO_NETWORK_ERROR", message: "Something went wrong making the request" }, VENMO_DESKTOP_CANCELED: { type: globalResult.types.CUSTOMER, code: "VENMO_DESKTOP_CANCELED", message: "User canceled Venmo authorization by closing the Venmo Desktop modal." }, VENMO_TOKENIZATION_CANCELED_BY_MERCHANT: { type: globalResult.types.MERCHANT, code: "VENMO_TOKENIZATION_CANCELED_BY_MERCHANT", message: "The Venmo tokenization was canceled by the merchant." }, VENMO_DESKTOP_UNKNOWN_ERROR: { type: globalResult.types.UNKNOWN, code: "VENMO_DESKTOP_UNKNOWN_ERROR", message: "Something went wrong with the Venmo Desktop flow." }, VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED: { type: globalResult.types.NETWORK, code: "VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED", message: "Something went wrong creating the Venmo Payment Context." }, VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR: { type: globalResult.types.UNKNOWN, code: "VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR", message: "Something went wrong during mobile polling." }, VENMO_MOBILE_POLLING_TOKENIZATION_EXPIRED: { type: globalResult.types.CUSTOMER, code: "VENMO_MOBILE_POLLING_TOKENIZATION_EXPIRED", message: "The Venmo authorization request is expired." }, VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED: { type: globalResult.types.CUSTOMER, code: "VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED", message: "The Venmo authorization was canceled" }, VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT: { type: globalResult.types.CUSTOMER, code: "VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT", message: "Customer took too long to authorize Venmo payment." }, VENMO_MOBILE_POLLING_TOKENIZATION_FAILED: { type: globalResult.types.UNKNOWN, code: "VENMO_MOBILE_POLLING_TOKENIZATION_FAILED", message: "The Venmo authorization failed." }, VENMO_INVALID_PROFILE_ID: { type: globalResult.types.MERCHANT, code: "VENMO_INVALID_PROFILE_ID", message: "Venmo profile ID is invalid." }, VENMO_INVALID_DEEP_LINK_RETURN_URL: { type: globalResult.types.MERCHANT, code: "VENMO_INVALID_DEEP_LINK_RETURN_URL", message: "Venmo deep link return URL is invalid." }, VENMO_TOKENIZATION_FAILED: { type: globalResult.types.UNKNOWN, code: "VENMO_TOKENIZATION_FAILED", message: "Venmo encountered a problem" }, VENMO_ECD_DISABLED: { type: globalResult.types.MERCHANT, code: "ECD_DISABLED", message: "Cannot collect customer data when ECD is disabled. Enable this feature in the Control Panel to collect this data." } };
    },
    { "../../lib/braintree-error": 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      arg2.VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT = undefined;
      arg2.VENMO_DESKTOP_AUTHORIZE = undefined;
      arg2.VENMO_DESKTOP_AUTHORIZING = undefined;
      arg2.VENMO_DESKTOP_CUSTOMER_CANCELED = undefined;
      arg2.VENMO_DESKTOP_DISPLAY_ERROR = undefined;
      arg2.VENMO_DESKTOP_DISPLAY_QR_CODE = undefined;
      arg2.VENMO_DESKTOP_IFRAME_READY = undefined;
      arg2.VENMO_DESKTOP_CLOSED_FROM_PARENT = undefined;
      arg2.VENMO_DESKTOP_REQUEST_NEW_QR_CODE = undefined;
      arg2.VENMO_DESKTOP_UNKNOWN_ERROR = undefined;
      arg2.VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT = "VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT";
      arg2.VENMO_DESKTOP_AUTHORIZE = "VENMO_DESKTOP_AUTHORIZE";
      arg2.VENMO_DESKTOP_AUTHORIZING = "VENMO_DESKTOP_AUTHORIZING";
      arg2.VENMO_DESKTOP_CUSTOMER_CANCELED = "VENMO_DESKTOP_CUSTOMER_CANCELED";
      arg2.VENMO_DESKTOP_DISPLAY_ERROR = "VENMO_DESKTOP_DISPLAY_ERROR";
      arg2.VENMO_DESKTOP_DISPLAY_QR_CODE = "VENMO_DESKTOP_DISPLAY_QR_CODE";
      arg2.VENMO_DESKTOP_IFRAME_READY = "VENMO_DESKTOP_IFRAME_READY";
      arg2.VENMO_DESKTOP_CLOSED_FROM_PARENT = "VENMO_DESKTOP_CLOSED_FROM_PARENT";
      arg2.VENMO_DESKTOP_REQUEST_NEW_QR_CODE = "VENMO_DESKTOP_REQUEST_NEW_QR_CODE";
      arg2.VENMO_DESKTOP_UNKNOWN_ERROR = "VENMO_DESKTOP_UNKNOWN_ERROR";
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./constants");
      module.exports = function getVenmoUrl(useAllowDesktopWebLogin) {
        if (useAllowDesktopWebLogin.useAllowDesktopWebLogin) {
          let VENMO_WEB_LOGIN_URL = constants.VENMO_WEB_LOGIN_URL;
        } else {
          VENMO_WEB_LOGIN_URL = useAllowDesktopWebLogin.mobileWebFallBack ? tmp.VENMO_APP_OR_MOBILE_AUTH_URL : tmp.VENMO_MOBILE_APP_AUTH_ONLY_URL;
        }
        return VENMO_WEB_LOGIN_URL;
      };
    },
    { "./constants": 239 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./browser-detection");
      let closure_1 = global("../../lib/in-iframe");
      module.exports = {
        isBrowserSupported(arg0) {
          let obj = android;
          let isAndroidResult = android.isAndroid();
          let isIosResult = isAndroidResult;
          if (!isAndroidResult) {
            isIosResult = obj.isIos();
          }
          if (isAndroidResult) {
            isAndroidResult = obj.isChrome();
          }
          let tmp3 = obj.isIosSafari() || isAndroidResult;
          obj = arg0;
          if (!arg0) {
            obj = {};
          }
          const hasOwnPropertyResult = obj.hasOwnProperty("allowNewBrowserTab");
          let allowNewBrowserTab = !hasOwnPropertyResult;
          if (hasOwnPropertyResult) {
            allowNewBrowserTab = obj.allowNewBrowserTab;
          }
          const hasOwnPropertyResult1 = obj.hasOwnProperty("allowWebviews");
          let allowWebviews = !hasOwnPropertyResult1;
          if (hasOwnPropertyResult1) {
            allowWebviews = obj.allowWebviews;
          }
          let tmp7 = allowNewBrowserTab;
          if (allowNewBrowserTab) {
            tmp7 = !callback();
          }
          let isIosChromeResult = !tmp7;
          if (!tmp7) {
            isIosChromeResult = obj.isIosChrome();
          }
          if (!isIosChromeResult) {
            isIosChromeResult = obj.isFacebookOwnedBrowserOnAndroid();
          }
          if (!isIosChromeResult) {
            isIosChromeResult = obj.isSamsung();
          }
          let tmp10 = !isIosChromeResult;
          if (!isIosChromeResult) {
            let tmp11 = !allowWebviews;
            if (!allowWebviews) {
              tmp11 = obj.isAndroidWebview() || obj.isIosWebview();
              const tmp12 = obj.isAndroidWebview() || obj.isIosWebview();
            }
            let tmp13 = !tmp11;
            if (!tmp11) {
              let tmp14 = true === tmp4;
              if (isIosResult) {
                if (allowNewBrowserTab) {
                  tmp3 = isIosResult;
                }
                tmp14 = tmp3;
              }
              tmp13 = tmp14;
            }
            tmp10 = tmp13;
          }
          return tmp10;
        }
      };
    },
    { "../../lib/in-iframe": 169, "./browser-detection": 238 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../../lib/frame-service/external");
      let closure_1 = global("../../lib/use-min");
      const globalResult = global("@braintree/extended-promise");
      let closure_2 = globalResult;
      let closure_3 = global("../shared/errors");
      let closure_4 = global("../../lib/braintree-error");
      let c5 = "venmo-desktop-web-backdrop";
      let c6 = "venmo-desktop-web-backdrop.hidden";
      let c7 = "venmo-backdrop-container";
      let c8 = "venmo-popup-cancel-button";
      let c9 = "venmo-popup-continue-button";
      let c10 = "venmo-message";
      let c11 = "venmo-instructions";
      let c12 = "venmo-full-logo";
      globalResult.suppressUnhandledPromiseMessage = true;
      module.exports = {
        runWebLogin(frameServiceInstance) {
          let closure_1;
          let closure_2;
          let closure_3;
          const element = document.getElementById(c5);
          if (element) {
            let classList = element.classList;
            classList.remove("hidden");
          } else {
            const _document = document;
            const element1 = <style />;
            const _document2 = document;
            const element2 = <div />;
            const _document3 = document;
            const element3 = <div />;
            const _document4 = document;
            const element4 = <div />;
            const _document5 = document;
            const element5 = <div />;
            const _document6 = document;
            const element6 = <div />;
            const _document7 = document;
            const element7 = <button />;
            const _document8 = document;
            const element8 = <button />;
            element1.id = "venmo-desktop-web__injected-styles";
            const items = [`#${c6} {`, "display: none;", "}", `#${tmp} {`, "z-index: 3141592632;", "cursor: pointer;", "position: fixed;", "top: 0;", "left: 0;", "bottom: 0;", "width: 100%;", "background: rgba(0, 0, 0, 0.8);", "}"];
            const items1 = [`#${c7} {`, "display: flex;", "align-content: center;", "justify-content: center;", "align-items: center;", "width: 100%;", "height: 100%;", "flex-direction: column;", "}"];
            const items2 = [`#${c8} {`, "height: 24px;", "width: 380px;", "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;", "font-style: normal;", "font-weight: 700;", "font-size: 18px;", "line-height: 24px;", "text-align: center;", "background-color: transparent;", "border: none;", "color: #FFFFFF;", "margin-top: 28px;", "}"];
            const items3 = [`#${c9} {`, "width: 400px;", "height: 50px;", "background: #0074DE;", "border-radius: 24px;", "border: none;", "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;", "font-style: normal;", "font-weight: 700;", "font-size: 18px;", "color: #FFFFFF;", "margin-top: 44px;", "}"];
            const items4 = [`#${c10} {`, "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;", "font-style: normal;", "font-weight: 500;", "font-size: 24px;", "line-height: 32px;", "text-align: center;", "color: #FFFFFF;", "margin-top: 32px;", "}"];
            const items5 = [`#${c11} {`, "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;", "font-style: normal;", "font-weight: 400;", "font-size: 16px;", "line-height: 20px;", "text-align: center;", "color: #FFFFFF;", "margin-top: 16px;", "width: 400px;", "}"];
            const combined = items.concat(items1, items2, items3, items4, items5);
            element1.innerHTML = combined.join("\n");
            element2.id = tmp;
            element3.id = c7;
            element4.id = c12;
            element4.innerHTML = "<svg width=\"198\" height=\"58\" viewBox=\"0 0 198 58\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M43.0702 13.6572C44.1935 15.4585 44.6999 17.3139 44.6999 19.6576C44.6999 27.1328 38.1277 36.8436 32.7935 43.6625H20.6099L15.7236 15.2939L26.3917 14.3105L28.9751 34.4966C31.389 30.6783 34.3678 24.6779 34.3678 20.587C34.3678 18.3477 33.9727 16.8225 33.3553 15.5666L43.0702 13.6572Z\" fill=\"white\"/>\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M56.8965 26.1491C58.8596 26.1491 63.8018 25.2772 63.8018 22.5499C63.8018 21.2402 62.8481 20.587 61.7242 20.587C59.7579 20.587 57.1776 22.8763 56.8965 26.1491ZM56.6715 31.5506C56.6715 34.8807 58.5787 36.1873 61.107 36.1873C63.8603 36.1873 66.4966 35.534 69.923 33.8433L68.6324 42.3523C66.2183 43.4976 62.4559 44.2617 58.8039 44.2617C49.5403 44.2617 46.2249 38.8071 46.2249 31.9879C46.2249 23.1496 51.6179 13.765 62.7365 13.765C68.858 13.765 72.2809 17.0949 72.2809 21.7317C72.2815 29.2066 62.4005 31.4965 56.6715 31.5506Z\" fill=\"white\"/>\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M103.067 20.3142C103.067 21.4052 102.897 22.9875 102.727 24.0216L99.5262 43.6622H89.1385L92.0585 25.658C92.1139 25.1696 92.284 24.1865 92.284 23.6411C92.284 22.3314 91.4414 22.0047 90.4282 22.0047C89.0826 22.0047 87.7337 22.6042 86.8354 23.0418L83.5234 43.6625H73.0772L77.8495 14.257H86.8908L87.0052 16.6041C89.1382 15.2404 91.9469 13.7656 95.932 13.7656C101.212 13.765 103.067 16.3845 103.067 20.3142Z\" fill=\"white\"/>\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M133.906 16.9841C136.881 14.9131 139.69 13.765 143.563 13.765C148.897 13.765 150.753 16.3845 150.753 20.3142C150.753 21.4052 150.583 22.9875 150.413 24.0216L147.216 43.6622H136.825L139.801 25.2774C139.855 24.786 139.971 24.1865 139.971 23.8063C139.971 22.3317 139.128 22.0047 138.115 22.0047C136.824 22.0047 135.535 22.5501 134.577 23.0418L131.266 43.6625H120.878L123.854 25.2777C123.908 24.7863 124.02 24.1868 124.02 23.8065C124.02 22.332 123.177 22.0049 122.167 22.0049C120.819 22.0049 119.473 22.6045 118.574 23.0421L115.26 43.6628H104.817L109.589 14.2573H118.52L118.8 16.7122C120.878 15.241 123.684 13.7662 127.446 13.7662C130.704 13.765 132.837 15.129 133.906 16.9841Z\" fill=\"white\"/>\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M171.426 25.5502C171.426 23.1496 170.808 21.513 168.956 21.513C164.857 21.513 164.015 28.55 164.015 32.1498C164.015 34.8807 164.802 36.5709 166.653 36.5709C170.528 36.5709 171.426 29.1497 171.426 25.5502ZM153.458 31.7152C153.458 22.442 158.511 13.765 170.136 13.765C178.896 13.765 182.098 18.7854 182.098 25.7148C182.098 34.8805 177.099 44.3723 165.194 44.3723C156.378 44.3723 153.458 38.7525 153.458 31.7152Z\" fill=\"white\"/>\n</svg>";
            element5.id = c10;
            element5.innerText = "What would you like to do?";
            element6.id = c11;
            element6.innerText = "Tap cancel payment to cancel and return to the business. Continue payment will relaunch the payment window.";
            element7.id = c9;
            element7.innerText = "Continue payment";
            element8.id = c8;
            element8.innerText = "Cancel payment";
            const _document9 = document;
            head.appendChild(element1);
            element3.appendChild(element4);
            element3.appendChild(element5);
            element3.appendChild(element6);
            element3.appendChild(element7);
            element3.appendChild(element8);
            element2.appendChild(element3);
            const _document10 = document;
            body.appendChild(element2);
            const listener = element2.addEventListener("click", (stopPropagation) => {
              stopPropagation.stopPropagation();
            });
          }
          frameServiceInstance = frameServiceInstance.frameServiceInstance;
          ({ checkForStatusChange: closure_1, cancelTokenization: closure_2, checkPaymentContextStatus: closure_3 } = frameServiceInstance);
          const tmp32 = new closure_2();
          let closure_4 = tmp32;
          const element9 = document.getElementById(c9);
          const listener1 = element9.addEventListener("click", () => {
            frameServiceInstance.focus();
          });
          const element10 = document.getElementById(c8);
          const listener2 = element10.addEventListener("click", () => {
            frameServiceInstance.close();
            callback2();
            const classList = document.getElementById("venmo-desktop-web-backdrop").classList;
            classList.add("hidden");
          });
          frameServiceInstance.open({}, (arg0) => {
            if (arg0) {
              tmp32.reject(arg0);
            } else {
              const promise = callback(1);
              callback(1).then((arg0) => {
                closure_4.resolve(arg0);
              }).catch((arg0) => {
                let closure_0 = arg0;
                callback().then(() => { ... });
              });
              const nextPromise = callback(1).then((arg0) => {
                closure_4.resolve(arg0);
              });
            }
            frameServiceInstance.close();
            const classList = document.getElementById("venmo-desktop-web-backdrop").classList;
            classList.add("hidden");
          });
          frameServiceInstance.redirect(frameServiceInstance.venmoUrl);
          return tmp32;
        },
        openPopup(frameServiceInstance) {
          let closure_1;
          let closure_2;
          let closure_3;
          frameServiceInstance = frameServiceInstance.frameServiceInstance;
          ({ checkForStatusChange: closure_1, cancelTokenization: closure_2, checkPaymentContextStatus: closure_3 } = frameServiceInstance);
          const tmp = new closure_2();
          let closure_4 = tmp;
          const element = document.getElementById(c9);
          const listener = element.addEventListener("click", () => {
            frameServiceInstance.focus();
          });
          const element1 = document.getElementById(c8);
          const listener1 = element1.addEventListener("click", () => {
            frameServiceInstance.close();
            callback2();
            const classList = document.getElementById("venmo-desktop-web-backdrop").classList;
            classList.add("hidden");
          });
          frameServiceInstance.open({}, (arg0) => {
            if (arg0) {
              tmp32.reject(arg0);
            } else {
              const promise = callback(1);
              callback(1).then((arg0) => {
                closure_4.resolve(arg0);
              }).catch((arg0) => {
                let closure_0 = arg0;
                callback().then(() => { ... });
              });
              const nextPromise = callback(1).then((arg0) => {
                closure_4.resolve(arg0);
              });
            }
            frameServiceInstance.close();
            const classList = document.getElementById("venmo-desktop-web-backdrop").classList;
            classList.add("hidden");
          });
          frameServiceInstance.redirect(frameServiceInstance.venmoUrl);
          return tmp;
        },
        setupDesktopWebLogin(arg0) {
          let assetsUrl;
          let debug;
          const tmp = new closure_2();
          let closure_0 = tmp;
          ({ debug, assetsUrl } = arg0);
          if (!debug) {
            debug = false;
          }
          const sum = Math.round((window.outerHeight - 570) / 2) + window.screenTop;
          let obj = { name: "venmoDesktopWebLogin", dispatchFrameUrl: null, openFrameUrl: null, top: null, left: null, height: 570, width: 400 };
          const sum1 = Math.round((window.outerWidth - 400) / 2) + window.screenLeft;
          obj[1] = `${`${assetsUrl}/web/3.112.1/html`}/dispatch-frame${closure_1(debug)}.html`;
          obj[2] = `${`${assetsUrl}/web/3.112.1/html`}/venmo-landing-frame${closure_1(debug)}.html`;
          obj[3] = sum;
          obj[4] = sum1;
          obj = closure_0.create(obj, (arg0) => {
            tmp.resolve(arg0);
          });
          return tmp;
        },
        POPUP_WIDTH: 400,
        POPUP_HEIGHT: 570
      };
    },
    { "../../lib/braintree-error": 143, "../../lib/frame-service/external": 158, "../../lib/use-min": 181, "../shared/errors": 240, "@braintree/extended-promise": 31 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class Venmo {
        constructor(arg0) {
          self = this;
          self = this;
          self._allowDesktopWebLogin = global.allowDesktopWebLogin || false;
          self._mobileWebFallBack = global.mobileWebFallBack || false;
          self._createPromise = global.createPromise;
          self._allowNewBrowserTab = false !== global.allowNewBrowserTab;
          self._allowWebviews = false !== global.allowWebviews;
          self._allowDesktop = true === global.allowDesktop;
          self._useRedirectForIOS = true === global.useRedirectForIOS;
          ({ profileId: self._profileId, displayName: self._displayName, deepLinkReturnUrl: self._deepLinkReturnUrl, ignoreHistoryChanges: self._ignoreHistoryChanges } = global);
          str = global.paymentMethodUsage || "";
          self._paymentMethodUsage = str.toUpperCase();
          self._shouldUseLegacyFlow = !self._paymentMethodUsage;
          self._requireManualReturn = true === global.requireManualReturn;
          tmp = self._allowDesktop && self._isDesktop() && !self._allowDesktopWebLogin;
          self._useDesktopQRFlow = tmp;
          tmp2 = self._allowDesktopWebLogin && self._isDesktop();
          self._useAllowDesktopWebLogin = tmp2;
          tmp3 = c10() || self._requireManualReturn;
          self._cannotHaveReturnUrls = tmp3;
          self._allowAndroidRecreation = false !== global.allowAndroidRecreation;
          self._maxRetryCount = 3;
          self._collectCustomerBillingAddress = global.collectCustomerBillingAddress || false;
          self._collectCustomerShippingAddress = global.collectCustomerShippingAddress || false;
          self._isFinalAmount = global.isFinalAmount || false;
          ({ lineItems: self._lineItems, subTotalAmount: self._subTotalAmount, discountAmount: self._discountAmount, taxAmount: self._taxAmount, shippingAmount: self._shippingAmount, totalAmount: self._totalAmount } = global);
          self._shouldCreateVenmoPaymentContext = self._cannotHaveReturnUrls || !self._shouldUseLegacyFlow;
          obj = self;
          sendEventResult = self.sendEvent(self._createPromise, `venmo.desktop-flow.configured.${String(Boolean(self._allowDesktop))}`);
          if (self.hasTokenizationResult()) {
            str2 = "venmo.appswitch.return-in-new-tab";
            sendEventResult1 = obj.sendEvent(self._createPromise, "venmo.appswitch.return-in-new-tab");
          } else if (self._useDesktopQRFlow) {
            _createPromise = self._createPromise;
            self._createPromise = _createPromise.then(() => { ... });
          } else if (self._shouldCreateVenmoPaymentContext) {
            num = 250;
            self._mobilePollingInterval = 250;
            num2 = 300000;
            self._mobilePollingExpiresThreshold = 300000;
            _createPromise1 = self._createPromise;
            self._createPromise = _createPromise1.then(() => { ... });
          }
          return;
        }
        _createVenmoPaymentContext(arg0, arg1) {
          self = this;
          closure_0 = global;
          closure_1 = module;
          self = this;
          str = "MOBILE_WEB";
          if (this._useAllowDesktopWebLogin) {
            str = "NATIVE_WEB";
          }
          if (self._shouldCreateVenmoPaymentContext) {
            if (self._shouldUseLegacyFlow) {
              obj = { api: "graphQLApi", data: null };
              obj1 = { query: null, variables: null };
              tmp13 = c17;
              obj1[0] = c17.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY;
              obj2 = { input: null };
              obj3 = { environment: null, intent: "PAY_FROM_APP" };
              obj3[0] = self._mobilePollingContextEnvironment;
              obj2[0] = obj3;
              obj1[1] = obj2;
              obj[1] = obj1;
              requestResult = global.request(obj);
              nextPromise = requestResult.then(() => { ... });
            } else {
              if (self._collectCustomerBillingAddress) {
                if (!global.getConfiguration().gatewayConfiguration.payWithVenmo.enrichedCustomerDataEnabled) {
                  tmp2 = globalThis;
                  _Promise2 = Promise;
                  tmp3 = c9;
                  tmp4 = c4;
                  tmp5 = new.target;
                  tmp6 = new.target;
                  tmp7 = new c9(c4.VENMO_ECD_DISABLED);
                  tmp8 = tmp7;
                  return Promise.reject(tmp7);
                }
              }
              if (self._lineItems) {
                _lineItems = self._lineItems;
                item = _lineItems.forEach(() => { ... });
              }
              obj = { subTotalAmount: null, discountAmount: null, taxAmount: null, shippingAmount: null, totalAmount: null, lineItems: null };
              ({ _subTotalAmount: obj[0], _discountAmount: obj[1], _taxAmount: obj[2], _shippingAmount: obj[3], _totalAmount: obj[4], _lineItems: obj[5] } = self);
              f116034 = obj;
              tmp10 = globalThis;
              _Object = Object;
              keys = Object.keys(obj);
              obj4 = { query: null, variables: null };
              tmp11 = c17;
              obj4[0] = c17.CREATE_PAYMENT_CONTEXT_QUERY;
              obj5 = { paymentMethodUsage: null, intent: "CONTINUE", customerClient: null, isFinalAmount: null, displayName: null, paysheetDetails: null };
              obj5[0] = self._paymentMethodUsage;
              obj5[2] = str;
              ({ _isFinalAmount: obj4[3], _displayName: obj4[4] } = self);
              obj6 = { collectCustomerBillingAddress: null, collectCustomerShippingAddress: null, transactionDetails: null };
              ({ _collectCustomerBillingAddress: obj5[0], _collectCustomerShippingAddress: obj5[1] } = self);
              tmp12 = undefined;
              if (keys.some(() => { ... })) {
                tmp12 = obj;
              }
              obj7 = { api: "graphQLApi", data: null };
              obj8 = { input: null };
              obj6[2] = tmp12;
              obj5[5] = obj6;
              obj8[0] = obj5;
              obj4[1] = obj8;
              obj7[1] = obj4;
              requestResult1 = global.request(obj7);
              nextPromise = requestResult1.then(() => { ... });
            }
            return nextPromise.then(() => { ... });
          } else {
            tmp = globalThis;
            _Promise = Promise;
            return Promise.resolve();
          }
        }
        appSwitch(arg0) {
          self = this;
          if (this._deepLinkReturnUrl) {
            tmp7 = globalThis;
            _window3 = window;
            platform = window.navigator.platform;
            if (platform) {
              obj = /iPhone|iPad|iPod/;
              _window4 = window;
              platform = obj.test(window.navigator.platform);
            }
            if (platform) {
              tmp14 = c0;
              str4 = "venmo.appswitch.start.ios-webview";
              sendEventResult = c0.sendEvent(self._createPromise, "venmo.appswitch.start.ios-webview");
              _window9 = window;
              window.location.href = global;
            } else {
              _window5 = window;
              if (window.popupBridge) {
                _window6 = window;
                if (typeof window.popupBridge.open === "function") {
                  tmp11 = c0;
                  str3 = "venmo.appswitch.start.popup-bridge";
                  sendEventResult1 = c0.sendEvent(self._createPromise, "venmo.appswitch.start.popup-bridge");
                  _window8 = window;
                  popupBridge = window.popupBridge;
                  openResult = popupBridge.open(global);
                }
              }
              tmp8 = c0;
              str2 = "venmo.appswitch.start.webview";
              sendEventResult2 = c0.sendEvent(self._createPromise, "venmo.appswitch.start.webview");
              _window7 = window;
              openResult1 = window.open(global);
            }
          } else {
            tmp = c0;
            str = "venmo.appswitch.start.browser";
            sendEventResult3 = c0.sendEvent(self._createPromise, "venmo.appswitch.start.browser");
            tmp3 = c2;
            if (!c2.doesNotSupportWindowOpenInIos()) {
              if (!self._shouldUseRedirectStrategy()) {
                tmp4 = globalThis;
                _window = window;
                openResult2 = window.open(global);
              }
            }
            tmp6 = globalThis;
            _window2 = window;
            window.location.href = global;
          }
          return;
        }
        getUrl() {
          _createPromise = this._createPromise;
          fn = () => { ... };
          return _createPromise.then(fn.bind(this));
        }
        isBrowserSupported() {
          obj = { allowNewBrowserTab: this._allowNewBrowserTab, allowWebviews: this._allowWebviews, allowDesktop: this._allowDesktop, allowDesktopWebLogin: this._allowDesktopWebLogin };
          return c1.isBrowserSupported(obj);
        }
        hasTokenizationResult() {
          return this._hasTokenizationResult();
        }
        _hasTokenizationResult(arg0) {
          str = global;
          if (!global) {
            tmp = globalThis;
            _window = window;
            str2 = window.location.hash;
            num = 1;
            str = str2.substring(1);
          }
          parts = str.split("&");
          reduced = parts.reduce(() => { ... }, {});
          if (reduced.resourceId) {
            reduced.id = reduced.resourceId;
          }
          urlParams = c15.getUrlParams();
          if (urlParams.resource_id) {
            self = this;
            this._venmoPaymentContextId = urlParams.resource_id;
          }
          tmp4 = reduced.venmoSuccess || reduced.venmoError || reduced.venmoCancel;
          return undefined !== tmp4;
        }
        _shouldIncludeReturnUrls() {
          tmp = this._deepLinkReturnUrl || !this._cannotHaveReturnUrls;
          return tmp;
        }
        _isDesktop() {
          obj = c2;
          tmp = c2.isIos() || obj.isAndroid();
          return !tmp;
        }
        tokenize(arg0) {
          self = this;
          obj = global;
          self = this;
          if (!global) {
            obj = {};
          }
          if (true === self._tokenizationInProgress) {
            tmp2 = globalThis;
            _Promise = Promise;
            tmp3 = c9;
            tmp4 = c4;
            tmp5 = new.target;
            tmp6 = new.target;
            tmp7 = new c9(c4.VENMO_TOKENIZATION_REQUEST_ACTIVE);
            tmp8 = tmp7;
            rejectResult = Promise.reject(tmp7);
          } else {
            self._tokenizationInProgress = true;
            if (self._useDesktopQRFlow) {
              result = self._tokenizeForDesktopQRFlow(obj);
            } else if (self._useAllowDesktopWebLogin) {
              result = self._tokenizeWebLoginWithRedirect();
            } else if (self._cannotHaveReturnUrls) {
              result = self._tokenizeForMobileWithManualReturn();
            } else {
              result = self._tokenizeForMobileWithHashChangeListeners(obj);
            }
            nextPromise = result.then(() => { ... });
            rejectResult = nextPromise.catch(() => { ... });
          }
          return rejectResult;
        }
        cancelTokenization() {
          self = this;
          if (this._tokenizationInProgress) {
            result = self._removeVisibilityEventListener();
            if (self._tokenizePromise) {
              _tokenizePromise = self._tokenizePromise;
              tmp10 = c9;
              tmp11 = c4;
              tmp12 = new.target;
              tmp13 = new.target;
              tmp14 = new c9(c4.VENMO_TOKENIZATION_CANCELED_BY_MERCHANT);
              tmp15 = tmp14;
              rejectResult = _tokenizePromise.reject(tmp14);
            }
            tmp17 = globalThis;
            _Promise2 = Promise;
            items = [, ];
            items[0] = self._cancelMobilePaymentContext();
            items[1] = self._cancelVenmoDesktopContext();
            allPromises = Promise.all(items);
          } else {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = c9;
            tmp3 = c4;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = new c9(c4.VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE);
            tmp7 = tmp6;
            allPromises = Promise.reject(tmp6);
          }
          return allPromises;
        }
        _tokenizeWebLoginWithRedirect() {
          self = this;
          sendEventResult = self.sendEvent(this._createPromise, "venmo.tokenize.web-login.start");
          tmp2 = new c11();
          this._tokenizePromise = tmp2;
          url = this.getUrl();
          return url.then(() => { ... });
        }
        _queryPaymentContextStatus(arg0) {
          closure_0 = global;
          self = this;
          _createPromise = this._createPromise;
          nextPromise = _createPromise.then(() => { ... });
          return nextPromise.then(() => { ... });
        }
        _checkPaymentContextStatusAndProcessResult(arg0) {
          closure_0 = global;
          self = this;
          result = this._checkPaymentContextStatus();
          return result.then(() => { ... });
        }
        _checkPaymentContextStatus() {
          result = this._queryPaymentContextStatus(this._venmoPaymentContextId);
          catchPromise = result.catch(() => { ... });
          return catchPromise.then(() => { ... });
        }
        _pollForStatusChange() {
          self = this;
          self = this;
          if (Date.now() > this._mobilePollingContextExpiresIn) {
            _Promise = Promise;
            tmp2 = c9;
            tmp3 = c4;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = new c9(c4.VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT);
            tmp7 = tmp6;
            rejectResult = Promise.reject(tmp6);
          } else {
            result = self._queryPaymentContextStatus(self._venmoPaymentContextId);
            catchPromise = result.catch(() => { ... });
            rejectResult = catchPromise.then(() => { ... });
          }
          return rejectResult;
        }
        _tokenizeForMobileWithManualReturn() {
          self = this;
          sendEventResult = self.sendEvent(this._createPromise, "venmo.tokenize.manual-return.start");
          this._mobilePollingContextExpiresIn = Date.now() + this._mobilePollingExpiresThreshold;
          tmp2 = new c11();
          this._tokenizePromise = tmp2;
          _pollForStatusChangeResult = this._pollForStatusChange();
          nextPromise = _pollForStatusChangeResult.then(() => { ... });
          catchPromise = nextPromise.catch(() => { ... });
          url = this.getUrl();
          return url.then(() => { ... });
        }
        _shouldUseRedirectStrategy() {
          tmp = c2.isIos();
          if (tmp) {
            flag = true;
            tmp2 = true === this._mobileWebFallBack || this._useRedirectForIOS;
            tmp = tmp2;
          }
          return tmp;
        }
        _tokenizeForMobileWithHashChangeListeners(arg0) {
          self = this;
          closure_0 = global;
          completeFlow = function completeFlow() { ... };
          self = this;
          if (this.hasTokenizationResult()) {
            return self.processHashChangeFlowResults();
          } else {
            tmp = closure_0;
            str = "venmo.tokenize.mobile.start";
            sendEventResult = closure_0.sendEvent(self._createPromise, "venmo.tokenize.mobile.start");
            tmp3 = c11;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = new c11();
            tmp7 = tmp6;
            self._tokenizePromise = tmp6;
            tmp8 = globalThis;
            _window = window;
            self._previousHash = window.location.hash;
            self._onHashChangeListener = function _onHashChangeListener() { ... };
            _window2 = window;
            flag = false;
            str2 = "hashchange";
            listener = window.addEventListener("hashchange", self._onHashChangeListener, false);
            self._visibilityChangeListener = function _visibilityChangeListener() { ... };
            url = self.getUrl();
            return url.then(() => { ... });
          }
        }
        _tokenizeForDesktopQRFlow() {
          self = this;
          sendEventResult = self.sendEvent(this._createPromise, "venmo.tokenize.desktop.start");
          tmp2 = new c11();
          this._tokenizePromise = tmp2;
          _createPromise = this._createPromise;
          nextPromise = _createPromise.then(() => { ... });
          nextPromise1 = nextPromise.then(() => { ... });
          catchPromise = nextPromise1.catch(() => { ... });
          return this._tokenizePromise;
        }
        _cancelMobilePaymentContext() {
          self = this;
          _createPromise = this._createPromise;
          return _createPromise.then(() => { ... });
        }
        _cancelVenmoDesktopContext() {
          self = this;
          _createPromise = this._createPromise;
          return _createPromise.then(() => { ... });
        }
        teardown() {
          self = this;
          result = this._removeVisibilityEventListener();
          _createPromise = this._createPromise;
          fn = () => { ... };
          return _createPromise.then(fn.bind(this));
        }
        _removeVisibilityEventListener() {
          removed = window.removeEventListener("hashchange", this._onHashChangeListener);
          _document = window.document;
          str = "visibilitychange";
          if (undefined === window.document.hidden) {
            _window = window;
            str = "msvisibilitychange";
            if (undefined === window.document.msHidden) {
              _window2 = window;
              if (undefined !== window.document.webkitHidden) {
                str = "webkitvisibilitychange";
              }
            }
          }
          removed1 = _document.removeEventListener(str, this._visibilityChangeListener);
          delete tmp2[tmp];
          delete tmp2[tmp];
          return;
        }
        processHashChangeFlowResults(arg0) {
          str = global;
          self = this;
          if (!global) {
            tmp = globalThis;
            _window = window;
            str2 = window.location.hash;
            num = 1;
            str = str2.substring(1);
          }
          parts = str.split("&");
          reduced = parts.reduce(() => { ... }, {});
          if (reduced.resourceId) {
            reduced.id = reduced.resourceId;
          }
          f116032 = reduced;
          promise = new Promise(() => { ... });
          return promise;
        }
        _clearFragmentParameters() {
          if (!this._ignoreHistoryChanges) {
            tmp = globalThis;
            _window = window;
            replaceState = window.history.replaceState;
            hash = typeof replaceState === "function";
            if (typeof replaceState === "function") {
              _window4 = window;
              hash = window.location.hash;
            }
            if (hash) {
              history = globalThis.history;
              _window2 = window;
              href = window.location.href;
              _window3 = window;
              href1 = window.location.href;
              str = "#";
              num = 0;
              str2 = "";
              pushStateResult = globalThis.history.pushState({}, "", href.slice(0, href1.indexOf("#")));
            }
          }
          return;
        }
      }
      let closure_0 = global("../lib/analytics");
      let closure_1 = global("./shared/supports-venmo");
      let closure_2 = global("./shared/browser-detection");
      let closure_3 = global("./shared/constants");
      let closure_4 = global("./shared/errors");
      let closure_5 = global("../lib/querystring");
      let closure_6 = global("../lib/is-verified-domain");
      let closure_7 = global("../lib/methods");
      let closure_8 = global("../lib/convert-methods-to-error");
      let closure_9 = global("../lib/braintree-error");
      let closure_10 = global("../lib/in-iframe");
      const globalResult1 = global("@braintree/extended-promise");
      let closure_12 = global("./shared/get-venmo-url");
      let closure_13 = global("./shared/web-login-backdrop");
      let closure_14 = global("../lib/snake-case-to-camel-case");
      let closure_15 = global("../lib/url-params");
      let closure_16 = global("./external/");
      let closure_17 = global("./external/queries");
      let c18 = "3.112.1";
      globalResult1.suppressUnhandledPromiseMessage = true;
      module.exports = global("@braintree/wrap-promise").wrapPrototype(Venmo);
    },
    { "../lib/analytics": 138, "../lib/braintree-error": 143, "../lib/convert-methods-to-error": 146, "../lib/in-iframe": 169, "../lib/is-verified-domain": 173, "../lib/methods": 175, "../lib/querystring": 177, "../lib/snake-case-to-camel-case": 179, "../lib/url-params": 180, "./external/": 234, "./external/queries": 235, "./shared/browser-detection": 238, "./shared/constants": 239, "./shared/errors": 240, "./shared/get-venmo-url": 242, "./shared/supports-venmo": 243, "./shared/web-login-backdrop": 244, "@braintree/extended-promise": 31, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT, code: "VISA_CHECKOUT_NOT_ENABLED", message: "Visa Checkout is not enabled for this merchant." };
      obj = { type: globalResult.types.MERCHANT, code: "VISA_CHECKOUT_INIT_OPTIONS_REQUIRED", message: "initOptions requires an object." };
      obj = { type: globalResult.types.MERCHANT, code: "VISA_CHECKOUT_PAYMENT_REQUIRED", message: "tokenize requires callid, encKey, and encPaymentData." };
      module.exports = { VISA_CHECKOUT_NOT_ENABLED: obj, VISA_CHECKOUT_INIT_OPTIONS_REQUIRED: obj, VISA_CHECKOUT_PAYMENT_REQUIRED: obj, VISA_CHECKOUT_TOKENIZATION: { type: globalResult.types.NETWORK, code: "VISA_CHECKOUT_TOKENIZATION", message: "A network error occurred when processing the Visa Checkout payment." } };
    },
    { "../lib/braintree-error": 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/basic-component-verification");
      let closure_1 = global("../lib/braintree-error");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      let closure_4 = global("./visa-checkout");
      let closure_5 = global("../lib/analytics");
      let closure_6 = global("./errors");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          const obj = { name: "Visa Checkout", client: client.client, authorization: client.authorization };
          const verifyResult = closure_0.verify({ name: "Visa Checkout", client: client.client, authorization: client.authorization });
          return closure_0.verify({ name: "Visa Checkout", client: client.client, authorization: client.authorization }).then(() => outer1_2.create({ authorization: client.authorization, client: client.client, debug: client.debug, assetsUrl: outer1_3.create(client.authorization), name: "Visa Checkout" })).then((client) => {
            client.client = client;
            client = client.client;
            if (client.getConfiguration().gatewayConfiguration.visaCheckout) {
              outer1_5.sendEvent(tmp.client, "visacheckout.initialized");
              let rejectResult = new outer1_4(tmp);
            } else {
              const tmp7 = new outer1_1(outer1_6.VISA_CHECKOUT_NOT_ENABLED);
              rejectResult = Promise.reject(tmp7);
            }
            return rejectResult;
          });
        }),
        VERSION: "3.112.1"
      };
    },
    { "../lib/analytics": 138, "../lib/basic-component-verification": 141, "../lib/braintree-error": 143, "../lib/create-assets-url": 148, "../lib/create-deferred-client": 150, "./errors": 246, "./visa-checkout": 248, "@braintree/wrap-promise": 40 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class VisaCheckout {
        constructor(arg0) {
          this._client = global.client;
          return;
        }
        createInitOptions(arg0) {
          _client = this._client;
          gatewayConfiguration = _client.getConfiguration().gatewayConfiguration;
          visaCheckout = gatewayConfiguration.visaCheckout;
          if (global) {
            tmp7 = c3;
            tmp8 = c3(global);
            tmp8.apikey = tmp8.apikey || visaCheckout.apikey;
            tmp8.encryptionKey = visaCheckout.encryptionKey;
            tmp8.externalClientId = tmp8.externalClientId || visaCheckout.externalClientId;
            tmp8.settings = tmp8.settings || {};
            str = "FULL";
            tmp8.settings.dataLevel = "FULL";
            payment = tmp8.settings.payment;
            if (!payment) {
              payment = {};
            }
            tmp8.settings.payment = payment;
            if (!tmp8.settings.payment.cardBrands) {
              supportedCardTypes = gatewayConfiguration.visaCheckout.supportedCardTypes;
              tmp8.settings.payment.cardBrands = supportedCardTypes.reduce(() => { ... }, []);
            }
            return tmp8;
          } else {
            tmp = c0;
            tmp2 = c2;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp5 = new c0(c2.VISA_CHECKOUT_INIT_OPTIONS_REQUIRED);
            tmp6 = tmp5;
            throw tmp5;
          }
        }
        tokenize(arg0) {
          self = this;
          if (global.callid) {
            if (global.encKey) {
              if (global.encPaymentData) {
                _client = tmp._client;
                obj = { method: "post", endpoint: "payment_methods/visa_checkout_cards", data: null };
                obj = { _meta: null, visaCheckoutCard: null };
                obj[0] = { source: "visa-checkout" };
                obj1 = { callId: null, encryptedPaymentData: null, encryptedKey: null };
                ({ callid: obj3[0], encPaymentData: obj3[1], encKey: obj3[2] } = global);
                obj[1] = obj1;
                obj[2] = obj;
                requestResult = _client.request(obj);
                nextPromise = requestResult.then(() => { ... });
                catchPromise = nextPromise.catch(() => { ... });
              }
              return catchPromise;
            }
          }
          tmp2 = new self(c2.VISA_CHECKOUT_PAYMENT_REQUIRED);
          catchPromise = Promise.reject(tmp2);
          return;
        }
        teardown() {
          tmp = c5(this, c4(VisaCheckout.prototype));
          return Promise.resolve();
        }
      }
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("../lib/analytics");
      let closure_2 = global("./errors");
      let closure_3 = global("../lib/json-clone");
      let closure_4 = global("../lib/methods");
      let closure_5 = global("../lib/convert-methods-to-error");
      let closure_6 = { Visa: "VISA", MasterCard: "MASTERCARD", Discover: "DISCOVER", "American Express": "AMEX" };
      module.exports = global("@braintree/wrap-promise").wrapPrototype(VisaCheckout);
    },
    { "../lib/analytics": 138, "../lib/braintree-error": 143, "../lib/convert-methods-to-error": 146, "../lib/json-clone": 174, "../lib/methods": 175, "./errors": 246, "@braintree/wrap-promise": 40 }
  ];
  obj[248] = items;
  return fn(obj, {}, [136])(136);
};
if (typeof exports === "object") {
  if (undefined !== module) {
    module.exports = fn();
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define([], fn);
  }
}
if (typeof window !== "undefined") {
  let _window = window;
} else {
  _window = global;
  if (undefined === global) {
    let _self = self;
    let _self2 = globalThis;
    if (typeof self !== "undefined") {
      _self2 = self;
    }
    _window = _self2;
  }
}
_window.braintree = fn();