// _runtime/01114_locationsAreEqual.js
import resolvePathname_mod from "01115_resolvePathname.js";
import valueEqual_mod from "01117_valueEqual.js";
import warning from "01119_warning.js";
import invariant_mod from "01120_invariant.js";

let _false, c7, c8, closure_11, closure_12, hasOwnProperty;

function appendListener(arg0) {
  let closure_0 = arg0;
  const fn = function e() {
    if (c1) {
      closure_0(...arguments);
    }
  };
  let c1 = true;
  c1.push(fn);
  return () => {
    let c1 = false;
    _false = _false.filter((item) => item !== fn);
  };
}
let obj = function _extends() {
  obj =
    Object.assign ||
    function (arg0) {
      let num;
      for (let num = 1; num < arguments.length; num = num + 1) {
        let tmp = arguments[num];
        for (const key10012 in tmp) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          if (!hasOwnProperty.call(tmp, key10012)) {
            continue;
          } else {
            arg0[key10012] = tmp[key10012];
            continue;
          }
          continue;
        }
      }
      return arg0;
    };
  return obj(...arguments);
};
function parsePath(arg0) {
  let tmp5;
  const index = arr.indexOf("#");
  let str = "";
  let str2 = "";
  let substr = arr;
  if (-1 !== index) {
    str2 = arr.substr(index);
    substr = arr.substr(0, index);
  }
  const index1 = substr.indexOf("?");
  let substr1 = str;
  let substr2 = substr;
  if (-1 !== index1) {
    substr1 = substr.substr(index1);
    substr2 = substr.substr(0, index1);
  }
  obj = { pathname: substr2, search: tmp5, hash: str };
  tmp5 = str;
  if ("?" !== substr1) {
    tmp5 = substr1;
  }
  if ("#" !== str2) {
    str = str2;
  }
  return obj;
}
function createPath(_location) {
  let hash;
  let pathname;
  let search;
  ({ pathname, search, hash } = _location);
  if (!pathname) {
    pathname = "/";
  }
  let sum = pathname;
  const tmp = search && "?" !== search;
  if (tmp) {
    let text = search;
    if ("?" !== search.charAt(0)) {
      text = `?${search}`;
    }
    sum = pathname + text;
  }
  let sum1 = sum;
  const tmp4 = hash && "#" !== hash;
  if (tmp4) {
    let text1 = hash;
    if ("#" !== hash.charAt(0)) {
      text1 = `#${hash}`;
    }
    sum1 = sum + text1;
  }
  return sum1;
}
function createLocation(_location, state, key, _location2) {
  let tmp2;
  let uRIError;
  if (typeof _location === "string") {
    const tmp4 = parsePath(_location);
    tmp4.state = state;
    tmp2 = tmp4;
  } else {
    const tmp12 = obj({}, _location);
    if (undefined === tmp12.pathname) {
      tmp12.pathname = "";
    }
    if (tmp12.search) {
      const str3 = tmp12.search;
      if ("?" !== str3.charAt(0)) {
        tmp12.search = `?${tmp12.search}`;
      }
    } else {
      tmp12.search = "";
    }
    if (tmp12.hash) {
      const str6 = tmp12.hash;
      if ("#" !== str6.charAt(0)) {
        tmp12.hash = `#${tmp12.hash}`;
      }
    } else {
      tmp12.hash = "";
    }
    tmp2 = tmp12;
    const tmp = undefined !== state && undefined === tmp12.state;
    if (tmp) {
      tmp12.state = state;
      tmp2 = tmp12;
    }
  }
  try {
    const _decodeURI = decodeURI;
    tmp2.pathname = decodeURI(tmp2.pathname);
    const tmp6 = key;
    if (tmp6) {
      tmp2.key = key;
    }
    const pathname = tmp2.pathname;
    if (_location2) {
      if (pathname) {
        const str9 = tmp2.pathname;
        if ("/" !== str9.charAt(0)) {
          tmp2.pathname = resolvePathname(tmp2.pathname, _location2.pathname);
        }
      } else {
        tmp2.pathname = _location2.pathname;
      }
    } else if (!pathname) {
      tmp2.pathname = "/";
    }
    return tmp2;
  } catch (uRIError) {
    const _URIError = URIError;
    if (uRIError instanceof URIError) {
      const _URIError2 = URIError;
      const self = this;
      const self2 = this;
      uRIError = new URIError(
        'Pathname "' + tmp2.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.',
      );
    }
    throw uRIError;
  }
}
function getConfirmation(arg0, fn) {
  fn(window.confirm(arg0));
}
function getHistoryState() {
  try {
    const _window = window;
    const state = window.history.state || {};
    return state;
  } catch (err) {
    return {};
  }
}
let resolvePathname = resolvePathname_mod;
if (resolvePathname) {
  if (typeof resolvePathname === "object") {
    let str = "default";
    if ("default" in resolvePathname) {
      resolvePathname = resolvePathname.default;
    }
  }
}
let valueEqual = valueEqual_mod;
if (valueEqual) {
  if (typeof valueEqual === "object") {
    let str2 = "default";
    if ("default" in valueEqual) {
      valueEqual = valueEqual.default;
    }
  }
}
let invariant = invariant_mod;
if (invariant) {
  if (typeof invariant === "object") {
    let str3 = "default";
    if ("default" in invariant) {
      invariant = invariant.default;
    }
  }
}
let tmp6 = typeof window === "undefined";
if (!tmp6) {
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
obj = {
  hashbang: {
    encodePath(str) {
      let text = str;
      if ("!" !== str.charAt(0)) {
        let substr = str;
        if ("/" === "/".charAt(0)) {
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
  },
  noslash: {
    encodePath: function stripLeadingSlash(str) {
      let substr = str;
      if ("/" === str.charAt(0)) {
        substr = str.substr(1);
      }
      return substr;
    },
    decodePath: addLeadingSlash,
  },
  slash: { encodePath: addLeadingSlash, decodePath: addLeadingSlash },
};

export const createBrowserHistory = function createBrowserHistory(props) {
  let closure_2;
  let key;
  let state;
  let substr;
  obj = props;
  function g(state) {
    let closure_0;
    let key;
    let tmp = undefined === state.state;
    if (tmp) {
      const _navigator = navigator;
      tmp = -1 === userAgent.indexOf("CriOS");
    }
    if (!tmp) {
      const _window = window;
      const _location = window.location;
      let tmp5 = str2;
      const tmp3 = state.state || {};
      ({ key, state } = tmp3);
      if (str6) {
        const formatted = str2.toLowerCase();
        let tmp6 = 0 === formatted.indexOf(str6.toLowerCase());
        if (tmp6) {
          const indexOf = "/?#".indexOf;
          tmp6 = -1 !== "/?#".indexOf(str2.charAt(str6.length));
        }
        substr = str2;
        if (tmp6) {
          substr = str2.substr(str6.length);
        }
        tmp5 = substr;
      }
      const tmp9 = str6(tmp5, state, key);
      history1 = tmp9;
      const tmp10 = c10;
      if (tmp10) {
        c10 = false;
        closure_3(obj2, undefined);
        obj2.length = history1.length;
        closure_7.notifyListeners(obj2.location, obj2.action);
      } else {
        closure_7.confirmTransitionTo(tmp9, "POP", getUserConfirmation, (arg0) => {
          const tmp2 = arg0;
          if (tmp2) {
            obj = { action: "POP", location: _location };
            closure_1_3(obj2, obj);
            obj2.length = history1.length;
            closure_7.notifyListeners(obj2.location, obj2.action);
          } else {
            num = substr.indexOf(obj2.location.key);
            if (-1 === num) {
              num = 0;
            }
            let num3 = substr.indexOf(_location.key);
            if (-1 === num3) {
              num3 = 0;
            }
            const diff = num - num3;
            if (diff) {
              c10 = true;
              history1.go(diff);
            }
          }
        });
      }
    }
  }
  function P() {
    let key;
    let state;
    const _location = window.location;
    let tmp2 = str;
    ({ key, state } = substr() || {});
    substr() || {};
    if (str6) {
      const formatted = str.toLowerCase();
      let tmp3 = 0 === formatted.indexOf(str6.toLowerCase());
      if (tmp3) {
        const indexOf = "/?#".indexOf;
        num = -1;
        tmp3 = -1 !== "/?#".indexOf(str.charAt(str6.length));
      }
      substr = str;
      if (tmp3) {
        substr = str.substr(str6.length);
      }
      tmp2 = substr;
    }
    const tmp5 = str6(tmp2, state, key);
    history1 = tmp5;
    const tmp6 = c10;
    if (tmp6) {
      c10 = false;
      closure_3(obj2, undefined);
      obj2.length = history1.length;
      closure_7.notifyListeners(obj2.location, obj2.action);
    } else {
      closure_7.confirmTransitionTo(tmp5, "POP", getUserConfirmation, (arg0) => {
        const tmp2 = arg0;
        if (tmp2) {
          obj = { action: "POP", location: _location };
          closure_1_3(obj2, obj);
          obj2.length = history1.length;
          closure_7.notifyListeners(obj2.location, obj2.action);
        } else {
          num = substr.indexOf(obj2.location.key);
          if (-1 === num) {
            num = 0;
          }
          let num3 = substr.indexOf(_location.key);
          if (-1 === num3) {
            num3 = 0;
          }
          const diff = num - num3;
          if (diff) {
            c10 = true;
            history1.go(diff);
          }
        }
      });
    }
  }
  if (undefined === props) {
    obj = {};
  }
  let tmp = closure_7;
  if (!tmp) {
    let tmp2 = invariant;
    const flag = false;
    let tmp3 = invariant(false);
  }
  let history1 = window.history;
  let history = -1 === userAgent.indexOf("Android 2.");
  if (history) {
    let str = "Android 4.0";
    history = -1 === userAgent.indexOf("Android 4.0");
  }
  if (!history) {
    let str2 = "Mobile Safari";
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
    let str5 = "pushState";
    history = "pushState" in window.history;
  }
  const userAgent1 = window.navigator.userAgent;
  invariant = -1 !== userAgent1.indexOf("Trident");
  const forceRefresh = obj.forceRefresh;
  let closure_3 = undefined !== forceRefresh && forceRefresh;
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
    let num3 = 1;
    let tmp4 = str9;
    substr = str9;
    if ("/" === str9.charAt(str9.length - 1)) {
      substr = str9.slice(0, -1);
    }
    str6 = substr;
  }
  let c0 = null;
  let closure_1 = [];
  closure_7 = {
    setPrompt(flag) {
      let closure_0 = flag;
      return () => {
        if (c0 === flag) {
          c0 = null;
        }
      };
    },
    confirmTransitionTo(location, POP, getUserConfirmation, fn2) {
      if (null != c0) {
        let tmp2Result = c0;
        if (typeof c0 === "function") {
          tmp2Result = tmp2(location, POP);
        }
        if (typeof tmp2Result === "string") {
          if (typeof getUserConfirmation === "function") {
            getUserConfirmation(tmp2Result, fn2);
          } else {
            fn2(true);
          }
        } else {
          fn2(false !== tmp2Result);
        }
      } else {
        fn2(true);
      }
    },
    appendListener,
    notifyListeners() {
      let num;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const item = closure_1.forEach((apply) => apply.apply(undefined, array));
    },
  };
  let c10 = false;
  let tmp6 = substr() || {};
  let _location = window.location;
  let tmp7 = str10;
  ({ key, state } = tmp6);
  if (str6) {
    let formatted = str10.toLowerCase();
    let tmp8 = 0 === formatted.indexOf(str6.toLowerCase());
    if (tmp8) {
      let indexOf = "/?#".indexOf;
      tmp8 = -1 !== "/?#".indexOf(str10.charAt(str6.length));
    }
    let substr1 = str10;
    if (tmp8) {
      substr1 = str10.substr(str6.length);
    }
    tmp7 = substr1;
  }
  const fn = function x(arg0) {
    let hash;
    let pathname;
    let search;
    ({ pathname, search, hash } = arg0);
    if (!pathname) {
      pathname = "/";
    }
    sum = pathname;
    const tmp2 = search && "?" !== search;
    if (tmp2) {
      let text = search;
      if ("?" !== search.charAt(0)) {
        text = `?${search}`;
      }
      sum = pathname + text;
    }
    let sum1 = sum;
    const tmp5 = hash && "#" !== hash;
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
      history1.go(arg0);
    }
  }
  let tmp10 = str6(tmp7, state, key);
  const items = [tmp10.key];
  substr = items;
  hashchange = 0;
  let c13 = false;
  let obj2 = {
    length: history1.length,
    action: "POP",
    location: tmp10,
    createHref: fn,
    push(arg0, arg1) {
      const str = Math.random();
      const str2 = str.toString(36);
      let tmp = str6(arg0, arg1, str2.substr(2, num), obj2.location);
      const _location = tmp;
      closure_7.confirmTransitionTo(tmp, "PUSH", getUserConfirmation, (arg0) => {
        let hash;
        let pathname;
        let search;
        const tmp = arg0;
        if (tmp) {
          ({ pathname, search, hash } = _location);
          if (!pathname) {
            pathname = "/";
          }
          sum = pathname;
          const tmp4 = search && "?" !== search;
          if (tmp4) {
            let text = search;
            if ("?" !== search.charAt(0)) {
              text = `?${search}`;
            }
            sum = pathname + text;
          }
          let sum1 = sum;
          const tmp7 = hash && "#" !== hash;
          if (tmp7) {
            let text1 = hash;
            if ("#" !== hash.charAt(0)) {
              text1 = `#${hash}`;
            }
            sum1 = sum + text1;
          }
          const sum2 = str6 + sum1;
          if (history) {
            obj = { key: tmp11, state: tmp12 };
            history1.pushState(obj, null, sum2);
            if (closure_3) {
              const _window2 = window;
              window.location.href = sum2;
            } else {
              substr = substr.slice(0, substr.indexOf(obj2.location.key) + 1);
              substr.push(_location.key);
              obj2 = { action: "PUSH", location: _location, length: history1.length };
              closure_1_3(obj2, obj2);
              closure_7.notifyListeners(obj2.location, obj2.action);
            }
          } else {
            const _window = window;
            window.location.href = sum2;
          }
        }
      });
    },
    replace(arg0, arg1) {
      const str = Math.random();
      const str2 = str.toString(36);
      let tmp = str6(arg0, arg1, str2.substr(2, num), obj2.location);
      const _location = tmp;
      closure_7.confirmTransitionTo(tmp, "REPLACE", getUserConfirmation, (arg0) => {
        let hash;
        let pathname;
        let search;
        const tmp = arg0;
        if (tmp) {
          ({ pathname, search, hash } = _location);
          const tmp3 = str6;
          if (!pathname) {
            pathname = "/";
          }
          sum = pathname;
          const tmp4 = search && "?" !== search;
          if (tmp4) {
            let text = search;
            if ("?" !== search.charAt(0)) {
              text = `?${search}`;
            }
            sum = pathname + text;
          }
          let sum1 = sum;
          const tmp7 = hash && "#" !== hash;
          if (tmp7) {
            let text1 = hash;
            if ("#" !== hash.charAt(0)) {
              text1 = `#${hash}`;
            }
            sum1 = sum + text1;
          }
          const sum2 = tmp3 + sum1;
          if (history) {
            obj = { key: tmp11, state: tmp12 };
            history1.replaceState(obj, null, sum2);
            if (closure_3) {
              const _window2 = window;
              const replaced = str6.replace(sum2);
            } else {
              const index = substr.indexOf(obj2.location.key);
              if (-1 !== index) {
                substr[index] = _location.key;
              }
              obj2 = { action: "REPLACE", location: _location, length: history1.length };
              closure_1_3(obj2, obj2);
              closure_7.notifyListeners(obj2.location, obj2.action);
            }
          } else {
            const _window = window;
            const str5 = window.location;
            const replaced1 = str5.replace(sum2);
          }
        }
      });
    },
    go: L,
    goBack() {
      history1.go(-1);
    },
    goForward() {
      history1.go(1);
    },
    block(flag) {
      let closure_0;
      const _prompt = closure_7.setPrompt(flag);
      let tmp = c13;
      if (!tmp) {
        sum = closure_12 + 1;
        closure_12 = sum;
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
      return () => {
        const tmp = c13;
        if (tmp) {
          c13 = false;
          hashchange = hashchange + -1;
          if (0 === hashchange) {
            const _window = window;
            const removed = window.removeEventListener(closure_1_9, g);
            if (closure_2) {
              const _window2 = window;
              const removed1 = window.removeEventListener(closure_1_10, P);
            }
          }
        }
        return closure_0();
      };
    },
    listen(arg0) {
      let closure_0 = closure_7.appendListener(arg0);
      sum = closure_12 + 1;
      closure_12 = sum;
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
        hashchange = hashchange + -1;
        if (0 === hashchange) {
          const _window = window;
          const removed = window.removeEventListener(closure_1_9, g);
          if (closure_2) {
            const _window2 = window;
            const removed1 = window.removeEventListener(closure_1_10, P);
          }
        }
        closure_0();
      };
    },
  };
  return obj2;
};
export const createHashHistory = function createHashHistory(props) {
  let hash;
  let obj2;
  let pathname;
  let search;
  let str3;
  let sum1;
  let tmp11;
  obj = props;
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
      substr = str2;
      if (tmp4) {
        substr = str2.substr(str3.length);
      }
      tmp3 = substr;
    }
    return createLocation(tmp3);
  };
  function g() {
    let hash;
    let pathname;
    let search;
    const index = href.indexOf("#");
    let str = "";
    if (-1 !== index) {
      str = href.substring(index + 1);
    }
    let tmp2 = encodePath(str);
    if (str !== tmp2) {
      const _window = window;
      const _window2 = window;
      const href1 = window.location.href;
      const str5 = window.location;
      const index1 = href1.indexOf("#");
      substr = href1;
      if (-1 !== index1) {
        substr = href1.slice(0, index1);
      }
      const replaced = replace(`${tmp22}#${tmp2}`);
    } else {
      let num3 = 0;
      const tmp25 = fn();
      const _location = obj2.location;
      ({ pathname, search, hash } = tmp25);
      const tmp4 = c8;
      if (!pathname) {
        pathname = "/";
      }
      let tmp5 = search;
      if (tmp5) {
        tmp5 = "?" !== search;
      }
      sum = pathname;
      if (tmp5) {
        let text = search;
        if ("?" !== search.charAt(0)) {
          text = `?${search}`;
        }
        sum = pathname + text;
      }
      let tmp8 = hash && "#" !== hash;
      sum1 = sum;
      if (tmp8) {
        let text1 = hash;
        if ("#" !== hash.charAt(0)) {
          text1 = `#${hash}`;
        }
        sum1 = sum + text1;
      }
      if (tmp4 !== sum1) {
        c8 = null;
        history = tmp25;
        const tmp29 = c7;
        if (tmp29) {
          c7 = false;
          encodePath(obj2, undefined);
          obj2.length = history.length;
          closure_6.notifyListeners(obj2.location, obj2.action);
        } else {
          closure_6.confirmTransitionTo(tmp25, "POP", getUserConfirmation, (arg0) => {
            let hash;
            let hash2;
            let pathname;
            let pathname2;
            let search;
            let search2;
            const tmp2 = arg0;
            if (tmp2) {
              obj = { action: "POP", location: _location };
              encodePath(obj2, obj);
              obj2.length = history.length;
              closure_6.notifyListeners(obj2.location, obj2.action);
            } else {
              ({ pathname, search, hash } = obj2.location);
              const lastIndexOf = substr.lastIndexOf;
              if (!pathname) {
                pathname = "/";
              }
              sum = pathname;
              const tmp5 = search && "?" !== search;
              if (tmp5) {
                let text = search;
                if ("?" !== search.charAt(0)) {
                  text = `?${search}`;
                }
                sum = pathname + text;
              }
              sum1 = sum;
              const tmp8 = hash && "#" !== hash;
              if (tmp8) {
                let text1 = hash;
                if ("#" !== hash.charAt(0)) {
                  text1 = `#${hash}`;
                }
                sum1 = sum + text1;
              }
              let num3 = lastIndexOf(sum1);
              if (-1 === num3) {
                num3 = 0;
              }
              ({ pathname: pathname2, search: search2, hash: hash2 } = _location);
              const lastIndexOf2 = substr.lastIndexOf;
              if (!pathname2) {
                pathname2 = "/";
              }
              let sum2 = pathname2;
              const tmp12 = search2 && "?" !== search2;
              if (tmp12) {
                let text2 = search2;
                if ("?" !== search2.charAt(0)) {
                  text2 = `?${search2}`;
                }
                sum2 = pathname2 + text2;
              }
              let sum3 = sum2;
              const tmp15 = hash2 && "#" !== hash2;
              if (tmp15) {
                let text3 = hash2;
                if ("#" !== hash2.charAt(0)) {
                  text3 = `#${hash2}`;
                }
                sum3 = sum2 + text3;
              }
              let num7 = lastIndexOf2(sum3);
              if (-1 === num7) {
                num7 = 0;
              }
              const diff = num3 - num7;
              if (diff) {
                c7 = true;
                history.go(diff);
              }
            }
          });
        }
      }
    }
  }
  if (undefined === props) {
    obj = {};
  }
  let tmp = c7;
  if (!tmp) {
    let tmp2 = str3;
    const flag = false;
    let tmp3 = str3(false);
  }
  let index = userAgent.indexOf("Firefox");
  let getUserConfirmation = obj.getUserConfirmation;
  if (undefined === getUserConfirmation) {
    getUserConfirmation = sum1;
  }
  const hashType = obj.hashType;
  let str = "slash";
  if (undefined !== hashType) {
    str = hashType;
  }
  let str2 = "";
  str3 = "";
  if (obj.basename) {
    const str4 = obj.basename;
    let str5 = "/";
    let str6 = str4;
    if ("/" !== str4.charAt(0)) {
      str6 = `/${str4}`;
    }
    let tmp5 = str6;
    let substr = str6;
    if ("/" === str6.charAt(str6.length - 1)) {
      let num3 = -1;
      substr = str6.slice(0, -1);
    }
    str3 = substr;
  }
  let tmp7 = obj2[str];
  const encodePath = tmp7.encodePath;
  const decodePath = tmp7.decodePath;
  let c0 = null;
  let closure_1 = [];
  let closure_6 = {
    setPrompt(flag) {
      let closure_0 = flag;
      return () => {
        if (c0 === flag) {
          c0 = null;
        }
      };
    },
    confirmTransitionTo(location, POP, getUserConfirmation, fn2) {
      if (null != c0) {
        let tmp2Result = c0;
        if (typeof c0 === "function") {
          tmp2Result = tmp2(location, POP);
        }
        if (typeof tmp2Result === "string") {
          if (typeof getUserConfirmation === "function") {
            getUserConfirmation(tmp2Result, fn2);
          } else {
            fn2(true);
          }
        } else {
          fn2(false !== tmp2Result);
        }
      } else {
        fn2(true);
      }
    },
    appendListener,
    notifyListeners() {
      let num;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const item = closure_1.forEach((apply) => apply.apply(undefined, array));
    },
  };
  c7 = false;
  sum1 = null;
  let index1 = href.indexOf("#");
  if (-1 !== index1) {
    str2 = href.substring(index1 + 1);
  }
  const encodePathResult = encodePath(str2);
  if (str2 !== encodePathResult) {
    let _window = window;
    const str7 = window.location;
    let _window2 = window;
    let href1 = window.location.href;
    let replace = str7.replace;
    let index2 = href1.indexOf("#");
    let substr1 = href1;
    if (-1 !== index2) {
      substr1 = href1.slice(0, index2);
    }
    let replaced = replace(`${tmp11}#${tmp9}`);
  }
  const fnResult = fn();
  ({ pathname, search, hash } = fnResult);
  if (!pathname) {
    pathname = "/";
  }
  let tmp14 = search;
  if (tmp14) {
    tmp14 = "?" !== search;
  }
  let sum = pathname;
  if (tmp14) {
    let text = search;
    if ("?" !== search.charAt(0)) {
      text = `?${search}`;
    }
    sum = pathname + text;
  }
  sum1 = sum;
  const tmp17 = hash && "#" !== hash;
  if (tmp17) {
    let text1 = hash;
    if ("#" !== hash.charAt(0)) {
      text1 = `#${hash}`;
    }
    sum1 = sum + text1;
  }
  const items = [sum1];
  substr = items;
  getHistoryState = 0;
  let c12 = false;
  obj2 = {
    length: history.length,
    action: "POP",
    location: fnResult,
    createHref(arg0) {
      let hash;
      let pathname;
      let search;
      const element = document.querySelector("base");
      const attr = element && element.getAttribute("href");
      let str2 = "";
      if (attr) {
        const _window = window;
        const index = href.indexOf("#");
        substr = href;
        if (-1 !== index) {
          substr = href.slice(0, index);
        }
        str2 = substr;
      }
      ({ pathname, search, hash } = arg0);
      const text = `${str2}#`;
      const tmp6 = str3;
      if (!pathname) {
        pathname = "/";
      }
      sum = pathname;
      const tmp7 = search && "?" !== search;
      if (tmp7) {
        let text1 = search;
        if ("?" !== search.charAt(0)) {
          text1 = `?${search}`;
        }
        sum = pathname + text1;
      }
      sum1 = sum;
      const tmp10 = hash && "#" !== hash;
      if (tmp10) {
        let text2 = hash;
        if ("#" !== hash.charAt(0)) {
          text2 = `#${hash}`;
        }
        sum1 = sum + text2;
      }
      return text + encodePath(tmp6 + sum1);
    },
    push(arg0, arg1) {
      let tmp = closure_6(arg0, undefined, undefined, obj2.location);
      const _location = tmp;
      closure_6.confirmTransitionTo(tmp, "PUSH", getUserConfirmation, (arg0) => {
        let hash;
        let hash2;
        let pathname;
        let pathname2;
        let search;
        let search2;
        const tmp = arg0;
        if (tmp) {
          ({ pathname, search, hash } = _location);
          if (!pathname) {
            pathname = "/";
          }
          sum = pathname;
          const tmp3 = search && "?" !== search;
          if (tmp3) {
            let text = search;
            if ("?" !== search.charAt(0)) {
              text = `?${search}`;
            }
            sum = pathname + text;
          }
          sum1 = sum;
          const tmp6 = hash && "#" !== hash;
          if (tmp6) {
            let text1 = hash;
            if ("#" !== hash.charAt(0)) {
              text1 = `#${hash}`;
            }
            sum1 = sum + text1;
          }
          const tmp11 = encodePath(str3 + sum1);
          const _window = window;
          const index = href.indexOf("#");
          let str6 = "";
          if (-1 !== index) {
            str6 = href.substring(index + 1);
          }
          if (str6 !== tmp11) {
            const _window2 = window;
            window.location.hash = tmp11;
            ({ pathname: pathname2, search: search2, hash: hash2 } = obj2.location);
            const lastIndexOf = substr.lastIndexOf;
            if (!pathname2) {
              pathname2 = "/";
            }
            let sum2 = pathname2;
            const tmp22 = search2 && "?" !== search2;
            if (tmp22) {
              let text2 = search2;
              if ("?" !== search2.charAt(0)) {
                text2 = `?${search2}`;
              }
              sum2 = pathname2 + text2;
            }
            let sum3 = sum2;
            const tmp25 = hash2 && "#" !== hash2;
            if (tmp25) {
              let text3 = hash2;
              if ("#" !== hash2.charAt(0)) {
                text3 = `#${hash2}`;
              }
              sum3 = sum2 + text3;
            }
            substr = substr.slice(0, lastIndexOf(sum3) + 1);
            substr.push(sum1);
            obj = { action: "PUSH", location: _location };
            closure_1_3(obj2, obj);
            obj2.length = history.length;
            closure_6.notifyListeners(obj2.location, obj2.action);
          } else {
            closure_1_3(obj2, undefined);
            obj2.length = history.length;
            closure_6.notifyListeners(obj2.location, obj2.action);
          }
        }
      });
    },
    replace(arg0, arg1) {
      let tmp = closure_6(arg0, undefined, undefined, obj2.location);
      const _location = tmp;
      closure_6.confirmTransitionTo(tmp, "REPLACE", getUserConfirmation, (arg0) => {
        let hash;
        let hash2;
        let pathname;
        let pathname2;
        let search;
        let search2;
        const tmp = arg0;
        if (tmp) {
          ({ pathname, search, hash } = _location);
          if (!pathname) {
            pathname = "/";
          }
          sum = pathname;
          const tmp3 = search && "?" !== search;
          if (tmp3) {
            let text = search;
            if ("?" !== search.charAt(0)) {
              text = `?${search}`;
            }
            sum = pathname + text;
          }
          sum1 = sum;
          const tmp6 = hash && "#" !== hash;
          if (tmp6) {
            let text1 = hash;
            if ("#" !== hash.charAt(0)) {
              text1 = `#${hash}`;
            }
            sum1 = sum + text1;
          }
          const tmp11 = encodePath(str3 + sum1);
          const _window = window;
          const index = href.indexOf("#");
          let str6 = "";
          if (-1 !== index) {
            str6 = href.substring(index + 1);
          }
          if (str6 !== tmp11) {
            const _window2 = window;
            const _window3 = window;
            const href1 = window.location.href;
            const index1 = href1.indexOf("#");
            substr = href1;
            if (-1 !== index1) {
              substr = href1.slice(0, index1);
            }
            const replaced = replace(`${tmp15}#${tmp11}`);
          }
          ({ pathname: pathname2, search: search2, hash: hash2 } = obj2.location);
          const indexOf = substr.indexOf;
          if (!pathname2) {
            pathname2 = "/";
          }
          let sum2 = pathname2;
          const tmp19 = search2 && "?" !== search2;
          if (tmp19) {
            let text2 = search2;
            if ("?" !== search2.charAt(0)) {
              text2 = `?${search2}`;
            }
            sum2 = pathname2 + text2;
          }
          let sum3 = sum2;
          const tmp22 = hash2 && "#" !== hash2;
          if (tmp22) {
            let text3 = hash2;
            if ("#" !== hash2.charAt(0)) {
              text3 = `#${hash2}`;
            }
            sum3 = sum2 + text3;
          }
          const index2 = indexOf(sum3);
          if (-1 !== index2) {
            substr[index2] = sum1;
          }
          obj = { action: "REPLACE", location: _location };
          closure_1_3(obj2, obj);
          obj2.length = history.length;
          closure_6.notifyListeners(obj2.location, obj2.action);
        }
      });
    },
    go: function H(arg0) {
      history.go(arg0);
    },
    goBack() {
      history.go(-1);
    },
    goForward() {
      history.go(1);
    },
    block(flag) {
      let closure_0;
      const _prompt = closure_6.setPrompt(flag);
      let tmp = c12;
      if (!tmp) {
        sum = closure_11 + 1;
        closure_11 = sum;
        if (1 === sum) {
          const _window2 = window;
          const listener = window.addEventListener(c12, g);
        } else if (0 === sum) {
          let _window = window;
          let removed = window.removeEventListener(c12, g);
        }
        c12 = true;
      }
      return () => {
        const tmp = c12;
        if (tmp) {
          c12 = false;
          getHistoryState = getHistoryState + -1;
          if (0 === getHistoryState) {
            const _window = window;
            const removed = window.removeEventListener(c12, g);
          }
        }
        return closure_0();
      };
    },
    listen(arg0) {
      let closure_0 = closure_6.appendListener(arg0);
      sum = closure_11 + 1;
      closure_11 = sum;
      if (1 === sum) {
        const _window2 = window;
        const listener = window.addEventListener(c12, g);
      } else if (0 === sum) {
        let _window = window;
        let removed = window.removeEventListener(c12, g);
      }
      return () => {
        getHistoryState = getHistoryState + -1;
        if (0 === getHistoryState) {
          const _window = window;
          const removed = window.removeEventListener(closure_1_12, g);
        }
        closure_0();
      };
    },
  };
  return obj2;
};
export const createMemoryHistory = function createMemoryHistory(props) {
  let initialEntries;
  obj = props;
  if (undefined === props) {
    obj = {};
  }
  ({ getUserConfirmation: resolvePathname, initialEntries } = obj);
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
  let c0 = null;
  let closure_1 = [];
  let closure_2 = {
    setPrompt(flag) {
      let closure_0 = flag;
      return () => {
        if (c0 === flag) {
          c0 = null;
        }
      };
    },
    confirmTransitionTo(location, POP, getUserConfirmation, fn2) {
      if (null != c0) {
        let tmp2Result = c0;
        if (typeof c0 === "function") {
          tmp2Result = tmp2(location, POP);
        }
        if (typeof tmp2Result === "string") {
          if (typeof getUserConfirmation === "function") {
            getUserConfirmation(tmp2Result, fn2);
          } else {
            fn2(true);
          }
        } else {
          fn2(false !== tmp2Result);
        }
      } else {
        fn2(true);
      }
    },
    appendListener,
    notifyListeners() {
      let num;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const item = closure_1.forEach((apply) => apply.apply(undefined, array));
    },
  };
  let fn = function p(arg0) {
    const diff = obj2.entries.length - 1;
    const bound = Math.min(Math.max(obj2.index + arg0, 0), diff);
    let closure_1 = tmp3;
    closure_2.confirmTransitionTo(obj2.entries[bound], "POP", bound, (arg0) => {
      const tmp = arg0;
      if (tmp) {
        obj = { action: "POP", location: _location, index: bound };
        closure_1_3(obj2, obj);
        obj2.length = obj2.entries.length;
        closure_2.notifyListeners(obj2.location, obj2.action);
      } else {
        closure_1_3(obj2, undefined);
        obj2.length = obj2.entries.length;
        closure_2.notifyListeners(obj2.location, obj2.action);
      }
    });
  };
  let diff = initialEntries.length - 1;
  let bound = Math.min(Math.max(num, 0), diff);
  const mapped = initialEntries.map((key) => {
    if (typeof key === "string") {
      const _Math2 = Math;
      const str3 = Math.random();
      const str4 = str3.toString(36);
      key = str4.substr(2, num2);
    } else {
      key = key.key;
      if (!key) {
        const _Math = Math;
        const str = Math.random();
        const str2 = str.toString(36);
        key = str2.substr(2, num2);
      }
    }
    return createLocation(key, undefined, key);
  });
  const obj2 = {
    length: mapped.length,
    action: "POP",
    location: mapped[bound],
    index: bound,
    entries: mapped,
    createHref: createPath,
    push(_location, state) {
      const str = Math.random();
      const str2 = str.toString(36);
      let tmp = createLocation(_location, state, str2.substr(2, num2), obj2.location);
      let closure_0 = tmp;
      closure_2.confirmTransitionTo(tmp, "PUSH", closure_0, (arg0) => {
        const tmp = arg0;
        if (tmp) {
          let tmp4;
          const sum = obj2.index + 1;
          const entries = obj2.entries;
          const substr = entries.slice(0);
          if (substr.length > sum) {
            substr.splice(sum, substr.length - sum, closure_0);
            tmp4 = closure_0;
          } else {
            tmp4 = closure_0;
            substr.push(closure_0);
          }
          obj = { action: "PUSH", location: tmp4, index: sum, entries: substr };
          closure_1_3(obj2, obj);
          obj2.length = obj2.entries.length;
          closure_2.notifyListeners(obj2.location, obj2.action);
        }
      });
    },
    replace(_location, state) {
      const str = Math.random();
      const str2 = str.toString(36);
      let tmp = createLocation(_location, state, str2.substr(2, num2), obj2.location);
      _location = tmp;
      closure_2.confirmTransitionTo(tmp, "REPLACE", _location, (arg0) => {
        const tmp = arg0;
        if (tmp) {
          obj2.entries[obj2.index] = _location;
          obj = { action: "REPLACE", location: _location };
          closure_1_3(obj2, obj);
          obj2.length = obj2.entries.length;
          closure_2.notifyListeners(obj2.location, obj2.action);
        }
      });
    },
    go: fn,
    goBack() {
      const diff = obj2.entries.length - 1;
      const bound = Math.min(Math.max(obj2.index + -1, 0), diff);
      let closure_1 = tmp3;
      closure_2.confirmTransitionTo(obj2.entries[bound], "POP", bound, (arg0) => {
        const tmp = arg0;
        if (tmp) {
          obj = { action: "POP", location: _location, index: bound };
          closure_1_3(obj2, obj);
          obj2.length = obj2.entries.length;
          closure_2.notifyListeners(obj2.location, obj2.action);
        } else {
          closure_1_3(obj2, undefined);
          obj2.length = obj2.entries.length;
          closure_2.notifyListeners(obj2.location, obj2.action);
        }
      });
    },
    goForward() {
      const diff = obj2.entries.length - 1;
      const bound = Math.min(Math.max(obj2.index + 1, 0), diff);
      const _location = tmp3;
      closure_2.confirmTransitionTo(obj2.entries[bound], "POP", bound, (arg0) => {
        const tmp = arg0;
        if (tmp) {
          obj = { action: "POP", location: _location, index: bound };
          closure_1_3(obj2, obj);
          obj2.length = obj2.entries.length;
          closure_2.notifyListeners(obj2.location, obj2.action);
        } else {
          closure_1_3(obj2, undefined);
          obj2.length = obj2.entries.length;
          closure_2.notifyListeners(obj2.location, obj2.action);
        }
      });
    },
    canGo(arg0) {
      const sum = obj2.index + arg0;
      return 0 <= sum && sum < obj2.entries.length;
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
  return obj2;
};
export { createLocation };
export const locationsAreEqual = function locationsAreEqual(_location, pathname2) {
  const tmp =
    _location.pathname === pathname2.pathname &&
    _location.search === pathname2.search &&
    _location.hash === pathname2.hash &&
    _location.key === pathname2.key &&
    valueEqual(_location.state, pathname2.state);
  return tmp;
};
export { parsePath };
export { createPath };
