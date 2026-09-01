// _runtime/metro/01224__extends.js
import resolvePathname from "../01225_resolvePathname.js";
import valueEqual from "../01227_valueEqual.js";
import warning from "../01229_warning.js";
import invariant from "../01230_invariant.js";

function _extends() {
  let tmp =
    Object.assign ||
    ((arg0) => {
      for (let num = 1; num < arguments.length; num = num + 1) {
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
  closure_3 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function parsePath(arg0) {
  let str = arg0;
  if (!arg0) {
    str = "/";
  }
  const index = str.indexOf("#");
  let str2 = "";
  let str3 = "";
  let substr = str;
  if (-1 !== index) {
    str3 = str.substr(index);
    substr = str.substr(0, index);
  }
  const index1 = substr.indexOf("?");
  let substr1 = str2;
  let substr2 = substr;
  if (-1 !== index1) {
    substr1 = substr.substr(index1);
    substr2 = substr.substr(0, index1);
  }
  const obj = { pathname: substr2, search: null, hash: null };
  let tmp5 = str2;
  if ("?" !== substr1) {
    tmp5 = substr1;
  }
  obj[1] = tmp5;
  if ("#" !== str3) {
    str2 = str3;
  }
  obj[2] = str2;
  return obj;
}
function createPath(_location) {
  ({ pathname, search, hash } = _location);
  if (!pathname) {
    pathname = "/";
  }
  let tmp = search;
  if (search) {
    tmp = "?" !== search;
  }
  let sum = pathname;
  if (tmp) {
    let text = search;
    if ("?" !== search.charAt(0)) {
      text = `?${search}`;
    }
    sum = pathname + text;
  }
  let tmp4 = hash;
  if (hash) {
    tmp4 = "#" !== hash;
  }
  let sum1 = sum;
  if (tmp4) {
    let text1 = hash;
    if ("#" !== hash.charAt(0)) {
      text1 = `#${hash}`;
    }
    sum1 = sum + text1;
  }
  return sum1;
}
function createLocation(tmp4Result, arg1, arg2, _location) {
  let _decodeURI = arg1;
  if (typeof tmp4Result === "string") {
    const tmp5 = parsePath(tmp4Result);
    tmp5.state = _decodeURI;
    let tmp3 = tmp5;
  } else {
    const tmp12 = _extends({}, tmp4Result);
    if (undefined === tmp12.pathname) {
      tmp12.pathname = "";
    }
    if (tmp12.search) {
      if ("?" !== str3.charAt(0)) {
        tmp12.search = `?${tmp12.search}`;
      }
      str3 = tmp12.search;
    } else {
      tmp12.search = "";
    }
    if (tmp12.hash) {
      if ("#" !== str6.charAt(0)) {
        tmp12.hash = `#${tmp12.hash}`;
      }
      str6 = tmp12.hash;
    } else {
      tmp12.hash = "";
    }
    tmp3 = tmp12;
    if (tmp2) {
      tmp12.state = _decodeURI;
      tmp3 = tmp12;
    }
    tmp2 = undefined !== _decodeURI && undefined === tmp12.state;
  }
  try {
    _decodeURI = decodeURI;
    tmp3.pathname = decodeURI(tmp3.pathname);
  } catch (uRIError) {
    const _URIError = URIError;
    if (uRIError instanceof URIError) {
      const _URIError2 = URIError;
      uRIError = new URIError(
        'Pathname "' + tmp.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.',
      );
    }
    throw uRIError;
  }
}
function getConfirmation(arg0, arg1) {
  arg1(window.confirm(arg0));
}
function getHistoryState() {
  try {
    const _window = window;
    if (!state) {
      state = {};
    }
    return state;
  } catch (err) {
    return {};
  }
}
if (resolvePathname) {
  if (typeof resolvePathname === "object") {
    if ("default" in resolvePathname) {
      resolvePathname = resolvePathname.default;
    }
  }
}
if (valueEqual) {
  if (typeof valueEqual === "object") {
    if ("default" in valueEqual) {
      valueEqual = valueEqual.default;
    }
  }
}
if (invariant) {
  if (typeof invariant === "object") {
    if ("default" in invariant) {
      invariant = invariant.default;
    }
  }
}
let tmp6 = typeof window === "undefined";
if (typeof window !== "undefined") {
  let _window2 = window;
  tmp6 = !window.document;
}
if (!tmp6) {
  let _window = window;
  tmp6 = !window.document.createElement;
}
function addLeadingSlash(str) {
  let text = str;
  if ("/" !== str.charAt(0)) {
    text = `/${str}`;
  }
  return text;
}
let closure_7 = !tmp6;
const popstate = "popstate";
let hashchange = "hashchange";
hashchange = "hashchange";
let obj = {
  encodePath(str, arg1) {
    let text = str;
    if ("!" !== str.charAt(0)) {
      let substr = str;
      if ("/" === str.charAt(0)) {
        substr = str.substr(1);
      }
      text = `!/${tmp2}`;
    }
    return text;
  },
  decodePath(str) {
    let substr = str;
    if ("!" === str.charAt(0)) {
      substr = str.substr(1);
    }
    return substr;
  },
};
obj = {
  encodePath: function stripLeadingSlash(str) {
    let substr = str;
    if ("/" === str.charAt(0)) {
      substr = str.substr(1);
    }
    return substr;
  },
  decodePath: addLeadingSlash,
};
let closure_13 = { hashbang: obj, noslash: obj, slash: { encodePath: addLeadingSlash, decodePath: addLeadingSlash } };

export const createBrowserHistory = function createBrowserHistory(props) {
  let obj = props;
  function g(state) {
    let tmp = undefined === state.state;
    if (tmp) {
      const _navigator = navigator;
      tmp = -1 === userAgent.indexOf("CriOS");
    }
    if (!tmp) {
      const _window = window;
      const _location = window.location;
      let tmp5 = str2;
      ({ key, state } = state.state || {});
      if (str6) {
        const formatted = str2.toLowerCase();
        let tmp6 = 0 === formatted.indexOf(str3.toLowerCase());
        if (tmp6) {
          const indexOf = "/?#".indexOf;
          tmp6 = -1 !== "/?#".indexOf(str2.charAt(str3.length));
        }
        let substr = str2;
        if (tmp6) {
          substr = str2.substr(str3.length);
        }
        tmp5 = substr;
      }
      const tmp9 = str6(tmp5, state, key);
      const _null = tmp9;
      if (c10) {
        c10 = false;
        callback(obj, undefined);
        obj.length = _null.length;
        closure_7.notifyListeners(obj.location, obj.action);
      } else {
        closure_7.confirmTransitionTo(tmp9, "POP", getUserConfirmation, (arg0) => {
          if (arg0) {
            obj = { action: "POP", location: null };
            obj[1] = tmp;
            closure_1_3(closure_1_14, obj);
            closure_1_14.length = closure_0.length;
            closure_1_7.notifyListeners(closure_1_14.location, closure_1_14.action);
          } else {
            num = closure_1_11.indexOf(closure_1_14.location.key);
            if (-1 === num) {
              num = 0;
            }
            let num3 = closure_1_11.indexOf(tmp.key);
            if (-1 === num3) {
              num3 = 0;
            }
            const diff = num - num3;
            if (diff) {
              c10 = true;
              closure_0.go(diff);
            }
          }
        });
      }
      const tmp3 = state.state || {};
    }
  }
  function P() {
    const _location = window.location;
    let tmp2 = str;
    ({ key, state } = items() || {});
    if (str6) {
      const formatted = str.toLowerCase();
      let tmp3 = 0 === formatted.indexOf(str2.toLowerCase());
      if (tmp3) {
        const indexOf = "/?#".indexOf;
        tmp3 = -1 !== "/?#".indexOf(str.charAt(str2.length));
      }
      let substr = str;
      if (tmp3) {
        substr = str.substr(str2.length);
      }
      tmp2 = substr;
    }
    const tmp5 = str6(tmp2, state, key);
    const _null = tmp5;
    if (c10) {
      c10 = false;
      callback(obj, undefined);
      obj.length = _null.length;
      closure_7.notifyListeners(obj.location, obj.action);
    } else {
      closure_7.confirmTransitionTo(tmp5, "POP", getUserConfirmation, (arg0) => {
        if (arg0) {
          obj = { action: "POP", location: null };
          obj[1] = tmp;
          closure_1_3(closure_1_14, obj);
          closure_1_14.length = closure_0.length;
          closure_1_7.notifyListeners(closure_1_14.location, closure_1_14.action);
        } else {
          num = closure_1_11.indexOf(closure_1_14.location.key);
          if (-1 === num) {
            num = 0;
          }
          let num3 = closure_1_11.indexOf(tmp.key);
          if (-1 === num3) {
            num3 = 0;
          }
          const diff = num - num3;
          if (diff) {
            c10 = true;
            closure_0.go(diff);
          }
        }
      });
    }
  }
  if (undefined === props) {
    obj = {};
  }
  if (!closure_7) {
    invariant(false);
  }
  c0 = history;
  history = -1 === userAgent.indexOf("Android 2.");
  if (history) {
    history = -1 === userAgent.indexOf("Android 4.0");
  }
  if (!history) {
    history = -1 === userAgent.indexOf("Mobile Safari");
  }
  if (!history) {
    history = -1 !== userAgent.indexOf("Chrome");
  }
  if (!history) {
    history = -1 !== userAgent.indexOf("Windows Phone");
  }
  if (history) {
    let _window = window;
    history = window.history;
  }
  if (history) {
    let _window2 = window;
    history = "pushState" in window.history;
  }
  closure_1 = history;
  invariant = -1 !== userAgent1.indexOf("Trident");
  const forceRefresh = obj.forceRefresh;
  closure_3 = undefined !== forceRefresh && forceRefresh;
  let getUserConfirmation = obj.getUserConfirmation;
  if (undefined === getUserConfirmation) {
    getUserConfirmation = g;
  }
  const keyLength = obj.keyLength;
  let num = 6;
  if (undefined !== keyLength) {
    num = keyLength;
  }
  let str6 = "";
  if (obj.basename) {
    let str9 = str7;
    if ("/" !== obj.basename.charAt(0)) {
      str9 = `/${str7}`;
    }
    let substr = str9;
    if ("/" === str9.charAt(str9.length - 1)) {
      substr = str9.slice(0, -1);
    }
    str6 = substr;
  }
  c0 = null;
  closure_1 = [];
  closure_7 = {
    setPrompt(flag) {
      c0 = flag;
      return () => {
        if (c0 === c0) {
          c0 = null;
        }
      };
    },
    confirmTransitionTo(arg0, POP, getUserConfirmation, arg3) {
      if (null != c0) {
        let tmp2Result = c0;
        if (typeof c0 === "function") {
          tmp2Result = tmp2(arg0, POP);
        }
        if (typeof tmp2Result === "string") {
          if (typeof getUserConfirmation === "function") {
            getUserConfirmation(tmp2Result, arg3);
          } else {
            arg3(true);
          }
        } else {
          arg3(false !== tmp2Result);
        }
      } else {
        arg3(true);
      }
    },
    appendListener(arg0) {
      closure_0 = arg0;
      const fn = function e() {
        if (closure_1) {
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            HermesBuiltin.applyArguments(undefined);
          } else {
            apply(undefined, arguments);
          }
          const tmp = closure_0;
        }
      };
      let arr = true;
      arr = arr.push(fn);
      return () => {
        c1 = false;
        closure_1 = closure_1.filter((arg0) => arg0 !== closure_2);
      };
    },
    notifyListeners() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const item = arr.forEach((apply) => apply.apply(undefined, array));
    },
  };
  c10 = false;
  let _location = window.location;
  let tmp6 = str10;
  ({ key, state } = items() || {});
  if (str6) {
    let formatted = str10.toLowerCase();
    let tmp7 = 0 === formatted.indexOf(str6.toLowerCase());
    if (tmp7) {
      let indexOf = "/?#".indexOf;
      tmp7 = -1 !== "/?#".indexOf(str10.charAt(str6.length));
    }
    let substr1 = str10;
    if (tmp7) {
      substr1 = str10.substr(str6.length);
    }
    tmp6 = substr1;
  }
  const fn = function x(arg0) {
    ({ pathname, search, hash } = arg0);
    if (!pathname) {
      pathname = "/";
    }
    let tmp2 = search;
    if (search) {
      tmp2 = "?" !== search;
    }
    let sum = pathname;
    if (tmp2) {
      let text = search;
      if ("?" !== search.charAt(0)) {
        text = `?${search}`;
      }
      sum = pathname + text;
    }
    let tmp5 = hash;
    if (hash) {
      tmp5 = "#" !== hash;
    }
    let sum1 = sum;
    if (tmp5) {
      let text1 = hash;
      if ("#" !== hash.charAt(0)) {
        text1 = `#${hash}`;
      }
      sum1 = sum + text1;
    }
    return str6 + sum1;
  };
  class L {
    constructor(arg0) {
      goResult = c0.go(props);
      return;
    }
  }
  let tmp9 = str6(tmp6, state, key);
  items = [tmp9.key];
  c12 = 0;
  c13 = false;
  obj = {
    length: history.length,
    action: "POP",
    location: tmp9,
    createHref: fn,
    push(arg0, arg1) {
      const str = Math.random();
      const tmp = str6(arg0, arg1, Math.random().toString(36).substr(2, num), obj.location);
      closure_0 = tmp;
      closure_7.confirmTransitionTo(tmp, "PUSH", getUserConfirmation, (arg0) => {
        if (arg0) {
          ({ pathname, search, hash } = closure_0);
          if (!pathname) {
            pathname = "/";
          }
          let tmp3 = search;
          if (search) {
            tmp3 = "?" !== search;
          }
          let sum = pathname;
          if (tmp3) {
            let text = search;
            if ("?" !== search.charAt(0)) {
              text = `?${search}`;
            }
            sum = pathname + text;
          }
          let tmp6 = hash;
          if (hash) {
            tmp6 = "#" !== hash;
          }
          let sum1 = sum;
          if (tmp6) {
            let text1 = hash;
            if ("#" !== hash.charAt(0)) {
              text1 = `#${hash}`;
            }
            sum1 = sum + text1;
          }
          const sum2 = closure_1_6 + sum1;
          if (closure_1_1) {
            obj = { key: null, state: null };
            obj[0] = tmp10;
            obj[1] = tmp11;
            let arr = closure_0;
            closure_0.pushState(obj, null, sum2);
            if (closure_1_3) {
              const _window2 = window;
              window.location.href = sum2;
            } else {
              substr = substr.slice(0, substr.indexOf(closure_1_14.location.key) + 1);
              arr = substr.push(tmp.key);
              obj = { action: "PUSH", location: null };
              obj[1] = tmp;
              closure_1_3(closure_1_14, obj);
              closure_1_14.length = arr.length;
              closure_1_7.notifyListeners(closure_1_14.location, closure_1_14.action);
            }
          } else {
            const _window = window;
            window.location.href = sum2;
          }
          const tmp2 = closure_1_6;
        }
      });
    },
    replace(arg0, arg1) {
      const str = Math.random();
      const tmp = str6(arg0, arg1, Math.random().toString(36).substr(2, num), obj.location);
      closure_0 = tmp;
      closure_7.confirmTransitionTo(tmp, "REPLACE", getUserConfirmation, (arg0) => {
        if (arg0) {
          ({ pathname, search, hash } = closure_0);
          if (!pathname) {
            pathname = "/";
          }
          let tmp3 = search;
          if (search) {
            tmp3 = "?" !== search;
          }
          let sum = pathname;
          if (tmp3) {
            let text = search;
            if ("?" !== search.charAt(0)) {
              text = `?${search}`;
            }
            sum = pathname + text;
          }
          let tmp6 = hash;
          if (hash) {
            tmp6 = "#" !== hash;
          }
          let sum1 = sum;
          if (tmp6) {
            let text1 = hash;
            if ("#" !== hash.charAt(0)) {
              text1 = `#${hash}`;
            }
            sum1 = sum + text1;
          }
          const sum2 = closure_1_6 + sum1;
          if (closure_1_1) {
            obj = { key: null, state: null };
            obj[0] = tmp10;
            obj[1] = tmp11;
            closure_0.replaceState(obj, null, sum2);
            if (closure_1_3) {
              const _window2 = window;
              const replaced = window.location.replace(sum2);
              str6 = window.location;
            } else {
              const index = closure_1_11.indexOf(closure_1_14.location.key);
              if (-1 !== index) {
                closure_1_11[index] = tmp.key;
              }
              obj = { action: "REPLACE", location: null };
              obj[1] = tmp;
              closure_1_3(closure_1_14, obj);
              closure_1_14.length = arr.length;
              closure_1_7.notifyListeners(closure_1_14.location, closure_1_14.action);
            }
            arr = closure_0;
          } else {
            const _window = window;
            const replaced1 = window.location.replace(sum2);
            const str5 = window.location;
          }
          const tmp2 = closure_1_6;
        }
      });
    },
    go: L,
    goBack() {
      _null.go(-1);
    },
    goForward() {
      _null.go(1);
    },
    block(flag) {
      if (undefined === flag) {
        flag = false;
      }
      const _prompt = closure_7.setPrompt(flag);
      if (c13) {
        return () => {
          if (c13) {
            c13 = false;
            sum = sum + -1;
            if (0 === sum) {
              const _window = window;
              const removed = window.removeEventListener(closure_1_9, closure_1_8);
              if (closure_1_2) {
                const _window2 = window;
                const removed1 = window.removeEventListener(closure_1_10, closure_1_9);
              }
            }
          }
          return callback();
        };
      } else {
        let sum = c12 + 1;
        c12 = sum;
        if (1 === sum) {
          let _window2 = window;
          const listener = window.addEventListener(P, g);
          if (closure_2) {
            const _window3 = window;
            const listener1 = window.addEventListener(c10, P);
          }
        } else if (0 === sum) {
          const _window4 = window;
          let removed = window.removeEventListener(P, g);
          if (closure_2) {
            let _window = window;
            let removed1 = window.removeEventListener(c10, P);
          }
        }
        c13 = true;
      }
    },
    listen(arg0) {
      closure_0 = closure_7.appendListener(arg0);
      let sum = c12 + 1;
      c12 = sum;
      if (1 === sum) {
        let _window2 = window;
        const listener = window.addEventListener(P, g);
        if (closure_2) {
          const _window3 = window;
          const listener1 = window.addEventListener(c10, P);
        }
      } else if (0 === sum) {
        const _window4 = window;
        let removed = window.removeEventListener(P, g);
        if (closure_2) {
          let _window = window;
          let removed1 = window.removeEventListener(c10, P);
        }
      }
      return () => {
        sum = sum + -1;
        if (0 === sum) {
          const _window = window;
          const removed = window.removeEventListener(closure_1_9, closure_1_8);
          if (closure_1_2) {
            const _window2 = window;
            const removed1 = window.removeEventListener(closure_1_10, closure_1_9);
          }
        }
        callback();
      };
    },
  };
  return obj;
};
export const createHashHistory = function createHashHistory(props) {
  let obj = props;
  const fn = function f() {
    const index = href.indexOf("#");
    let str = "";
    if (-1 !== index) {
      str = href.substring(index + 1);
    }
    const str2 = decodePath(str);
    let tmp3 = str2;
    if (str3) {
      const formatted = str2.toLowerCase();
      let tmp4 = 0 === formatted.indexOf(str3.toLowerCase());
      if (tmp4) {
        const indexOf = "/?#".indexOf;
        tmp4 = -1 !== "/?#".indexOf(str2.charAt(str3.length));
      }
      let substr = str2;
      if (tmp4) {
        substr = str2.substr(str3.length);
      }
      tmp3 = substr;
    }
    return lib(tmp3);
  };
  function g() {
    const index = href.indexOf("#");
    let str = "";
    if (-1 !== index) {
      str = href.substring(index + 1);
    }
    const tmp2 = encodePath(str);
    if (str !== tmp2) {
      const _window = window;
      const _window2 = window;
      const index1 = href1.indexOf("#");
      let substr = href1;
      if (-1 !== index1) {
        substr = href1.slice(0, index1);
      }
      const replaced = window.location.replace(`${tmp22}#${tmp2}`);
      const str5 = window.location;
    } else {
      const tmp25 = fn();
      const _location = obj.location;
      if (!c7) {
        const tmp3 =
          _location.pathname === tmp25.pathname && _location.search === tmp25.search && _location.hash === tmp25.hash;
      }
      ({ pathname, search, hash } = tmp25);
      if (!pathname) {
        pathname = "/";
      }
      let tmp5 = search;
      if (search) {
        tmp5 = "?" !== search;
      }
      let sum = pathname;
      if (tmp5) {
        let text = search;
        if ("?" !== search.charAt(0)) {
          text = `?${search}`;
        }
        sum = pathname + text;
      }
      let tmp8 = hash;
      if (hash) {
        tmp8 = "#" !== hash;
      }
      let sum1 = sum;
      if (tmp8) {
        let text1 = hash;
        if ("#" !== hash.charAt(0)) {
          text1 = `#${hash}`;
        }
        sum1 = sum + text1;
      }
      if (tmp4 !== sum1) {
        c8 = null;
        const _null = tmp25;
        if (c7) {
          c7 = false;
          encodePath(tmp26, undefined);
          tmp26.length = _null.length;
          lib.notifyListeners(tmp26.location, tmp26.action);
        } else {
          lib.confirmTransitionTo(tmp25, "POP", closure_1, (arg0) => {
            if (arg0) {
              obj = { action: "POP", location: null };
              obj[1] = tmp;
              closure_1_3(closure_1_13, obj);
              closure_1_13.length = closure_0.length;
              closure_1_6.notifyListeners(closure_1_13.location, closure_1_13.action);
            } else {
              ({ pathname, search, hash } = closure_1_13.location);
              if (!pathname) {
                pathname = "/";
              }
              let tmp4 = search;
              if (search) {
                tmp4 = "?" !== search;
              }
              let sum = pathname;
              if (tmp4) {
                let text = search;
                if ("?" !== search.charAt(0)) {
                  text = `?${search}`;
                }
                sum = pathname + text;
              }
              let tmp7 = hash;
              if (hash) {
                tmp7 = "#" !== hash;
              }
              let sum1 = sum;
              if (tmp7) {
                let text1 = hash;
                if ("#" !== hash.charAt(0)) {
                  text1 = `#${hash}`;
                }
                sum1 = sum + text1;
              }
              let num3 = closure_1_10.lastIndexOf(sum1);
              if (-1 === num3) {
                num3 = 0;
              }
              ({ pathname: pathname2, search: search2, hash: hash2 } = tmp);
              if (!pathname2) {
                pathname2 = "/";
              }
              let tmp11 = search2;
              if (search2) {
                tmp11 = "?" !== search2;
              }
              let sum2 = pathname2;
              if (tmp11) {
                let text2 = search2;
                if ("?" !== search2.charAt(0)) {
                  text2 = `?${search2}`;
                }
                sum2 = pathname2 + text2;
              }
              let tmp14 = hash2;
              if (hash2) {
                tmp14 = "#" !== hash2;
              }
              let sum3 = sum2;
              if (tmp14) {
                let text3 = hash2;
                if ("#" !== hash2.charAt(0)) {
                  text3 = `#${hash2}`;
                }
                sum3 = sum2 + text3;
              }
              let num7 = closure_1_10.lastIndexOf(sum3);
              if (-1 === num7) {
                num7 = 0;
              }
              const diff = num3 - num7;
              if (diff) {
                c7 = true;
                closure_0.go(diff);
              }
            }
          });
        }
      }
      tmp4 = c8;
    }
  }
  if (undefined === props) {
    obj = {};
  }
  if (!c7) {
    str3(false);
  }
  c0 = history;
  let index = userAgent.indexOf("Firefox");
  let getUserConfirmation = obj.getUserConfirmation;
  if (undefined === getUserConfirmation) {
    getUserConfirmation = c8;
  }
  closure_1 = getUserConfirmation;
  const hashType = obj.hashType;
  let str = "slash";
  if (undefined !== hashType) {
    str = hashType;
  }
  let str2 = "";
  str3 = "";
  if (obj.basename) {
    let str6 = str4;
    if ("/" !== obj.basename.charAt(0)) {
      str6 = `/${str4}`;
    }
    let substr = str6;
    if ("/" === str6.charAt(str6.length - 1)) {
      substr = str6.slice(0, -1);
    }
    str3 = substr;
  }
  const encodePath = tmp6.encodePath;
  const decodePath = tmp6.decodePath;
  c0 = null;
  closure_1 = [];
  closure_6 = {
    setPrompt(flag) {
      c0 = flag;
      return () => {
        if (c0 === c0) {
          c0 = null;
        }
      };
    },
    confirmTransitionTo(arg0, POP, getUserConfirmation, arg3) {
      if (null != c0) {
        let tmp2Result = c0;
        if (typeof c0 === "function") {
          tmp2Result = tmp2(arg0, POP);
        }
        if (typeof tmp2Result === "string") {
          if (typeof getUserConfirmation === "function") {
            getUserConfirmation(tmp2Result, arg3);
          } else {
            arg3(true);
          }
        } else {
          arg3(false !== tmp2Result);
        }
      } else {
        arg3(true);
      }
    },
    appendListener(arg0) {
      closure_0 = arg0;
      const fn = function e() {
        if (closure_1) {
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            HermesBuiltin.applyArguments(undefined);
          } else {
            apply(undefined, arguments);
          }
          const tmp = closure_0;
        }
      };
      let arr = true;
      arr = arr.push(fn);
      return () => {
        c1 = false;
        closure_1 = closure_1.filter((arg0) => arg0 !== closure_2);
      };
    },
    notifyListeners() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const item = arr.forEach((apply) => apply.apply(undefined, array));
    },
  };
  c7 = false;
  c8 = null;
  let index1 = href.indexOf("#");
  if (-1 !== index1) {
    str2 = href.substring(index1 + 1);
  }
  if (str2 !== encodePathResult) {
    let _window = window;
    let _window2 = window;
    let index2 = href1.indexOf("#");
    let substr1 = href1;
    if (-1 !== index2) {
      substr1 = href1.slice(0, index2);
    }
    let replaced = window.location.replace(`${tmp10}#${tmp8}`);
    let str7 = window.location;
  }
  const fnResult = fn();
  ({ pathname, search, hash } = fnResult);
  if (!pathname) {
    pathname = "/";
  }
  let tmp13 = search;
  if (search) {
    tmp13 = "?" !== search;
  }
  let sum = pathname;
  if (tmp13) {
    let text = search;
    if ("?" !== search.charAt(0)) {
      text = `?${search}`;
    }
    sum = pathname + text;
  }
  let tmp16 = hash;
  if (hash) {
    tmp16 = "#" !== hash;
  }
  let sum1 = sum;
  if (tmp16) {
    let text1 = hash;
    if ("#" !== hash.charAt(0)) {
      text1 = `#${hash}`;
    }
    sum1 = sum + text1;
  }
  const items = [sum1];
  c11 = 0;
  c12 = false;
  obj = {
    length: history.length,
    action: "POP",
    location: fnResult,
    createHref(arg0) {
      const element = document.querySelector("base");
      let attr = element;
      if (element) {
        attr = element.getAttribute("href");
      }
      let str2 = "";
      if (attr) {
        const _window = window;
        const index = href.indexOf("#");
        let substr = href;
        if (-1 !== index) {
          substr = href.slice(0, index);
        }
        str2 = substr;
      }
      ({ pathname, search, hash } = arg0);
      const text = `${str2}#`;
      if (!pathname) {
        pathname = "/";
      }
      let tmp7 = search;
      if (search) {
        tmp7 = "?" !== search;
      }
      let sum = pathname;
      if (tmp7) {
        let text1 = search;
        if ("?" !== search.charAt(0)) {
          text1 = `?${search}`;
        }
        sum = pathname + text1;
      }
      let tmp10 = hash;
      if (hash) {
        tmp10 = "#" !== hash;
      }
      let sum1 = sum;
      if (tmp10) {
        let text2 = hash;
        if ("#" !== hash.charAt(0)) {
          text2 = `#${hash}`;
        }
        sum1 = sum + text2;
      }
      return text + encodePath(str3 + sum1);
    },
    push(arg0, arg1) {
      let tmp = lib(arg0, undefined, undefined, obj.location);
      closure_0 = tmp;
      lib.confirmTransitionTo(tmp, "PUSH", closure_1, (arg0) => {
        if (arg0) {
          ({ pathname, search, hash } = closure_0);
          if (!pathname) {
            pathname = "/";
          }
          let tmp2 = search;
          if (search) {
            tmp2 = "?" !== search;
          }
          let sum = pathname;
          if (tmp2) {
            let text = search;
            if ("?" !== search.charAt(0)) {
              text = `?${search}`;
            }
            sum = pathname + text;
          }
          let tmp5 = hash;
          if (hash) {
            tmp5 = "#" !== hash;
          }
          sum1 = sum;
          if (tmp5) {
            let text1 = hash;
            if ("#" !== hash.charAt(0)) {
              text1 = `#${hash}`;
            }
            sum1 = sum + text1;
          }
          const tmp10 = closure_1_3(closure_1_2 + sum1);
          const _window = window;
          const index = href.indexOf("#");
          let str6 = "";
          if (-1 !== index) {
            str6 = href.substring(index + 1);
          }
          if (str6 !== tmp10) {
            const _window2 = window;
            window.location.hash = tmp10;
            ({ pathname: pathname2, search: search2, hash: hash2 } = closure_1_13.location);
            if (!pathname2) {
              pathname2 = "/";
            }
            let tmp21 = search2;
            if (search2) {
              tmp21 = "?" !== search2;
            }
            let sum2 = pathname2;
            if (tmp21) {
              let text2 = search2;
              if ("?" !== search2.charAt(0)) {
                text2 = `?${search2}`;
              }
              sum2 = pathname2 + text2;
            }
            let tmp24 = hash2;
            if (hash2) {
              tmp24 = "#" !== hash2;
            }
            let sum3 = sum2;
            if (tmp24) {
              let text3 = hash2;
              if ("#" !== hash2.charAt(0)) {
                text3 = `#${hash2}`;
              }
              sum3 = sum2 + text3;
            }
            substr = substr.slice(0, substr.lastIndexOf(sum3) + 1);
            substr.push(sum1);
            obj = { action: "PUSH", location: null };
            obj[1] = tmp;
            closure_1_3(closure_1_13, obj);
            closure_1_13.length = closure_0.length;
            closure_1_6.notifyListeners(closure_1_13.location, closure_1_13.action);
          } else {
            closure_1_3(closure_1_13, undefined);
            closure_1_13.length = closure_0.length;
            closure_1_6.notifyListeners(closure_1_13.location, closure_1_13.action);
          }
          tmp = closure_0;
        }
      });
    },
    replace(arg0, arg1) {
      let tmp = lib(arg0, undefined, undefined, obj.location);
      closure_0 = tmp;
      lib.confirmTransitionTo(tmp, "REPLACE", closure_1, (arg0) => {
        if (arg0) {
          ({ pathname, search, hash } = length);
          if (!pathname) {
            pathname = "/";
          }
          let tmp2 = search;
          if (search) {
            tmp2 = "?" !== search;
          }
          let sum = pathname;
          if (tmp2) {
            let text = search;
            if ("?" !== search.charAt(0)) {
              text = `?${search}`;
            }
            sum = pathname + text;
          }
          let tmp5 = hash;
          if (hash) {
            tmp5 = "#" !== hash;
          }
          sum1 = sum;
          if (tmp5) {
            let text1 = hash;
            if ("#" !== hash.charAt(0)) {
              text1 = `#${hash}`;
            }
            sum1 = sum + text1;
          }
          const tmp10 = closure_1_3(closure_1_2 + sum1);
          const _window = window;
          const index = href.indexOf("#");
          let str6 = "";
          if (-1 !== index) {
            str6 = href.substring(index + 1);
          }
          if (str6 !== tmp10) {
            const _window2 = window;
            const _window3 = window;
            const index1 = href1.indexOf("#");
            let substr = href1;
            if (-1 !== index1) {
              substr = href1.slice(0, index1);
            }
            const replaced = window.location.replace(`${tmp14}#${tmp10}`);
            const str7 = window.location;
          }
          ({ pathname: pathname2, search: search2, hash: hash2 } = closure_1_13.location);
          if (!pathname2) {
            pathname2 = "/";
          }
          let tmp18 = search2;
          if (search2) {
            tmp18 = "?" !== search2;
          }
          let sum2 = pathname2;
          if (tmp18) {
            let text2 = search2;
            if ("?" !== search2.charAt(0)) {
              text2 = `?${search2}`;
            }
            sum2 = pathname2 + text2;
          }
          let tmp21 = hash2;
          if (hash2) {
            tmp21 = "#" !== hash2;
          }
          let sum3 = sum2;
          if (tmp21) {
            let text3 = hash2;
            if ("#" !== hash2.charAt(0)) {
              text3 = `#${hash2}`;
            }
            sum3 = sum2 + text3;
          }
          const index2 = closure_1_10.indexOf(sum3);
          if (-1 !== index2) {
            closure_1_10[index2] = sum1;
          }
          obj = { action: "REPLACE", location: null };
          obj[1] = length;
          closure_1_3(closure_1_13, obj);
          closure_1_13.length = length.length;
          closure_1_6.notifyListeners(closure_1_13.location, closure_1_13.action);
          const tmp = length;
        }
      });
    },
    go: function H(arg0) {
      _null.go(arg0);
    },
    goBack() {
      _null.go(-1);
    },
    goForward() {
      _null.go(1);
    },
    block(flag) {
      if (undefined === flag) {
        flag = false;
      }
      const _prompt = lib.setPrompt(flag);
      if (c12) {
        return () => {
          if (c12) {
            c12 = false;
            sum = sum + -1;
            if (0 === sum) {
              const _window = window;
              const removed = window.removeEventListener(c12, closure_1_9);
            }
          }
          return callback();
        };
      } else {
        let sum = c11 + 1;
        c11 = sum;
        if (1 === sum) {
          const _window2 = window;
          const listener = window.addEventListener(c12, g);
        } else if (0 === sum) {
          let _window = window;
          let removed = window.removeEventListener(c12, g);
        }
        c12 = true;
      }
    },
    listen(arg0) {
      closure_0 = lib.appendListener(arg0);
      let sum = c11 + 1;
      c11 = sum;
      if (1 === sum) {
        const _window2 = window;
        const listener = window.addEventListener(c12, g);
      } else if (0 === sum) {
        let _window = window;
        let removed = window.removeEventListener(c12, g);
      }
      return () => {
        sum = sum + -1;
        if (0 === sum) {
          const _window = window;
          const removed = window.removeEventListener(closure_1_12, closure_1_9);
        }
        callback();
      };
    },
  };
  return obj;
};
export const createMemoryHistory = function createMemoryHistory(props) {
  let obj = props;
  if (undefined === props) {
    obj = {};
  }
  ({ getUserConfirmation: c0, initialEntries } = obj);
  if (undefined === initialEntries) {
    initialEntries = ["/"];
  }
  const initialIndex = obj.initialIndex;
  let num = 0;
  if (undefined !== initialIndex) {
    num = initialIndex;
  }
  const keyLength = obj.keyLength;
  let num2 = 6;
  if (undefined !== keyLength) {
    num2 = keyLength;
  }
  closure_1 = num2;
  c0 = null;
  closure_1 = [];
  closure_2 = {
    setPrompt(flag) {
      c0 = flag;
      return () => {
        if (c0 === c0) {
          c0 = null;
        }
      };
    },
    confirmTransitionTo(arg0, POP, getUserConfirmation, arg3) {
      if (null != c0) {
        let tmp2Result = c0;
        if (typeof c0 === "function") {
          tmp2Result = tmp2(arg0, POP);
        }
        if (typeof tmp2Result === "string") {
          if (typeof getUserConfirmation === "function") {
            getUserConfirmation(tmp2Result, arg3);
          } else {
            arg3(true);
          }
        } else {
          arg3(false !== tmp2Result);
        }
      } else {
        arg3(true);
      }
    },
    appendListener(arg0) {
      closure_0 = arg0;
      const fn = function e() {
        if (closure_1) {
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            HermesBuiltin.applyArguments(undefined);
          } else {
            apply(undefined, arguments);
          }
          const tmp = closure_0;
        }
      };
      let arr = true;
      arr = arr.push(fn);
      return () => {
        c1 = false;
        closure_1 = closure_1.filter((arg0) => arg0 !== closure_2);
      };
    },
    notifyListeners() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const item = arr.forEach((apply) => apply.apply(undefined, array));
    },
  };
  let fn = function p(arg0) {
    const diff = obj.entries.length - 1;
    const bound = Math.min(Math.max(obj.index + arg0, 0), diff);
    closure_1 = tmp3;
    closure_2.confirmTransitionTo(obj.entries[bound], "POP", bound, (arg0) => {
      if (arg0) {
        obj = { action: "POP", location: null, index: null };
        obj[1] = closure_1;
        obj[2] = bound;
        closure_1_3(closure_1_3, obj);
        closure_1_3.length = closure_1_3.entries.length;
        closure_1_2.notifyListeners(closure_1_3.location, closure_1_3.action);
      } else {
        closure_1_3(closure_1_3, undefined);
        closure_1_3.length = closure_1_3.entries.length;
        closure_1_2.notifyListeners(closure_1_3.location, closure_1_3.action);
      }
    });
  };
  let diff = initialEntries.length - 1;
  let bound = Math.min(Math.max(num, 0), diff);
  const mapped = initialEntries.map((str) => {
    if (typeof str === "string") {
      const _Math2 = Math;
      const str3 = Math.random();
      let key = Math.random().toString(36).substr(2, closure_1);
      const str4 = Math.random().toString(36);
    } else {
      key = str.key;
      if (!key) {
        const _Math = Math;
        str = Math.random();
        key = Math.random().toString(36).substr(2, closure_1);
        const str2 = Math.random().toString(36);
      }
    }
    return closure_1_6(str, undefined, key);
  });
  obj = {
    length: mapped.length,
    action: "POP",
    location: mapped[bound],
    index: bound,
    entries: mapped,
    createHref: createPath,
    push(arg0, arg1) {
      const str = Math.random();
      const tmp = closure_1_6(arg0, arg1, Math.random().toString(36).substr(2, closure_1), obj.location);
      closure_0 = tmp;
      closure_2.confirmTransitionTo(tmp, "PUSH", closure_0, (arg0) => {
        if (arg0) {
          let substr = closure_1_3;
          const sum = closure_1_3.index + 1;
          const entries = closure_1_3.entries;
          substr = entries.slice(0);
          if (substr.length > sum) {
            substr.splice(sum, substr.length - sum, closure_0);
            let tmp3 = closure_0;
          } else {
            tmp3 = closure_0;
            substr.push(closure_0);
          }
          obj = { action: "PUSH", location: null, index: null, entries: null };
          obj[1] = tmp3;
          obj[2] = sum;
          obj[3] = substr;
          closure_1_3(substr, obj);
          substr.length = substr.entries.length;
          substr = closure_1_2.notifyListeners;
          substr = substr(substr.location, substr.action);
        }
      });
    },
    replace(arg0, arg1) {
      const str = Math.random();
      const tmp = closure_1_6(arg0, arg1, Math.random().toString(36).substr(2, closure_1), obj.location);
      closure_0 = tmp;
      closure_2.confirmTransitionTo(tmp, "REPLACE", closure_0, (arg0) => {
        if (arg0) {
          closure_1_3.entries[closure_1_3.index] = closure_0;
          obj = { action: "REPLACE", location: null };
          obj[1] = closure_0;
          closure_1_3(closure_1_3, obj);
          closure_1_3.length = closure_1_3.entries.length;
          closure_1_2.notifyListeners(closure_1_3.location, closure_1_3.action);
        }
      });
    },
    go: fn,
    goBack() {
      const diff = obj.entries.length - 1;
      const bound = Math.min(Math.max(obj.index + -1, 0), diff);
      closure_1 = tmp3;
      closure_2.confirmTransitionTo(obj.entries[bound], "POP", bound, (arg0) => {
        if (arg0) {
          obj = { action: "POP", location: null, index: null };
          obj[1] = closure_1;
          obj[2] = bound;
          closure_1_3(closure_1_3, obj);
          closure_1_3.length = closure_1_3.entries.length;
          closure_1_2.notifyListeners(closure_1_3.location, closure_1_3.action);
        } else {
          closure_1_3(closure_1_3, undefined);
          closure_1_3.length = closure_1_3.entries.length;
          closure_1_2.notifyListeners(closure_1_3.location, closure_1_3.action);
        }
      });
    },
    goForward() {
      const diff = obj.entries.length - 1;
      const bound = Math.min(Math.max(obj.index + 1, 0), diff);
      closure_1 = tmp3;
      closure_2.confirmTransitionTo(obj.entries[bound], "POP", bound, (arg0) => {
        if (arg0) {
          obj = { action: "POP", location: null, index: null };
          obj[1] = closure_1;
          obj[2] = bound;
          closure_1_3(closure_1_3, obj);
          closure_1_3.length = closure_1_3.entries.length;
          closure_1_2.notifyListeners(closure_1_3.location, closure_1_3.action);
        } else {
          closure_1_3(closure_1_3, undefined);
          closure_1_3.length = closure_1_3.entries.length;
          closure_1_2.notifyListeners(closure_1_3.location, closure_1_3.action);
        }
      });
    },
    canGo(arg0) {
      const sum = obj.index + arg0;
      return 0 <= sum && sum < obj.entries.length;
    },
    block(flag) {
      if (undefined === flag) {
        flag = false;
      }
      return closure_2.setPrompt(flag);
    },
    listen(arg0) {
      return closure_2.appendListener(arg0);
    },
  };
  return obj;
};
export { createLocation };
export const locationsAreEqual = function locationsAreEqual(_location, pathname2) {
  let tmp =
    _location.pathname === pathname2.pathname &&
    _location.search === pathname2.search &&
    _location.hash === pathname2.hash &&
    _location.key === pathname2.key;
  if (tmp) {
    tmp = valueEqual(_location.state, pathname2.state);
  }
  return tmp;
};
export { parsePath };
export { createPath };
