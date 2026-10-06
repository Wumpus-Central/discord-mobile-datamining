// === Module 4712: ? ===

// Module 4712
import _mod1113 from "module_1113" /* 1113 */;
import react_mod from "react" /* 19 */;
import module_4713 from "module_4713" /* 4713 */;
import warning from "warning" /* 1119 */;
import invariant_mod from "invariant" /* 1120 */;

const require = globalThis.__r;
let _require, component, obj;

const exact = function _setPrototypeOf(arg0, Component) {
  const fn = Object.setPrototypeOf || ((arg0, Component) => {
    arg0.__proto__ = Component;
    return arg0;
  });
  return fn(arg0, Component);
};
let react = react_mod;
if (react) {
  if (typeof react === "object") {
    let str = "default";
    if ("default" in react) {
      react = react.default;
    }
  }
}
let invariant = invariant_mod;
if (invariant) {
  if (typeof invariant === "object") {
    let str2 = "default";
    if ("default" in invariant) {
      invariant = invariant.default;
    }
  }
}
const Component = react.Component;
class e {
  constructor() {
    let num;
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    const call = Component.call;
    const items = [this];
    const tmp2 = call.apply(Component, items.concat(array)) || this;
    obj = _mod1113;
    tmp2.history = obj.createBrowserHistory(tmp2.props);
    return tmp2;
  }
  render() {
    return react.createElement(require("MemoryRouter").Router, { history: this.history, children: this.props.children });
  }
}
e.prototype = Object.create(Component.prototype);
e.prototype.constructor = e;
exact(e, Component);
const Component2 = react.Component;
tmp7.prototype = Object.create(Component2.prototype);
tmp7.prototype.constructor = tmp7;
const tmp8 = exact(tmp7, Component2);
function resolveToLocation(arg0, arg1) {

}
function normalizeToLocation(arg0, arg1) {

}
function forwardRefShim(arg0) {
  return arg0;
}
let forwardRef = react.forwardRef;
if (undefined === forwardRef) {
  forwardRef = forwardRefShim;
}
let closure_10 = forwardRef((innerRef, arg1) => {
  let closure_129_0;
  let closure_129_1;
  let obj2;
  ({ navigate: closure_129_0, onClick: closure_129_1 } = innerRef);
  const items = ["innerRef", "navigate", "onClick"];
  innerRef = innerRef.innerRef;
  if (null == innerRef) {
    obj2 = {};
  } else {
    obj = {};
    const tmp = globalThis;
    const _Object = Object;
    const keys = Object.keys(innerRef);
    let num3 = 0;
    obj2 = obj;
    if (0 < keys.length) {
      do {
        let tmp2 = keys[num3];
        let tmp3 = num3;
        if (0 > items.indexOf(tmp2)) {
          obj[tmp2] = innerRef[tmp2];
        }
        num3 = num3 + 1;
        obj2 = obj;
      } while (num3 < keys.length);
    }
  }
  const target = obj2.target;
  const obj3 = {
    onClick(defaultPrevented) {
      function isModifiedEvent(metaKey) {
        return metaKey.metaKey || metaKey.altKey || metaKey.ctrlKey || metaKey.shiftKey;
      }
      try {
        if (closure_1_1) {
          tmp(defaultPrevented);
        }
        defaultPrevented = defaultPrevented.defaultPrevented || 0 !== defaultPrevented.button;
        if (!defaultPrevented) {
          defaultPrevented = target && "_self" !== tmp3;
          const tmp4 = target && "_self" !== tmp3;
        }
        if (!defaultPrevented) {
          defaultPrevented = isModifiedEvent(defaultPrevented);
        }
        if (!defaultPrevented) {
          defaultPrevented.preventDefault();
          closure_1_0();
        }
      } catch (tmp8) {
        defaultPrevented.preventDefault();
        throw tmp8;
      }
    }
  };
  let tmp4 = obj({}, obj2, obj3);
  tmp4.ref = forwardRefShim !== forwardRef && arg1 || innerRef;
  return <a {...tmp4} />;
});
const forwardRefResult = forwardRef((component, arg1) => {
  let innerRef;
  _require = arg1;
  component = component.component;
  if (undefined === component) {
    component = closure_10;
  }
  ({ replace: react, to: invariant, innerRef: obj } = component);
  const items = ["component", "replace", "to", "innerRef"];
  if (null == component) {
    let obj2 = {};
  } else {
    obj = {};
    const _Object = Object;
    const keys = Object.keys(component);
    let num3 = 0;
    obj2 = obj;
    if (0 < keys.length) {
      do {
        let tmp2 = keys[num3];
        let tmp3 = num3;
        if (0 > items.indexOf(tmp2)) {
          obj[tmp2] = component[tmp2];
        }
        num3 = num3 + 1;
        obj2 = obj;
      } while (num3 < keys.length);
    }
  }
  return react.createElement(require("MemoryRouter").__RouterContext.Consumer, null, (history) => {
    closure_0 = history;
    if (!closure_0) {
      const tmp2 = invariant(false);
    }
    history = history.history;
    if (typeof resolveToLocation === "function") {
      let tmp4Result = invariant;
      if (typeof invariant === "function") {
        tmp4Result = invariant(tmp5);
      }
      let _location = history.location;
      if (typeof tmp3 === "function") {
        let _location1 = tmp4Result;
        if (typeof tmp4Result === "string") {
          obj2 = closure_0(component[4]);
          _location1 = obj2.createLocation(tmp4Result, null, null, _location);
        }
        let str = "";
        if (_location1) {
          str = history.createHref(_location1);
        }
        const tmp9 = obj2;
        obj = {
          href: str,
          navigate() {
                if (typeof resolveToLocation === "function") {
                  let tmpResult = invariant;
                  if (typeof invariant === "function") {
                    tmpResult = invariant(tmp3);
                  }
                  obj = _mod1113;
                  const path = obj.createPath(tmp2.location);
                  _mod1113;
                  if (typeof normalizeToLocation === "function") {
                    let _location = tmpResult;
                    if (typeof tmpResult === "string") {
                      const tmp5Result = _mod1113;
                      _location = tmp5Result.createLocation(tmpResult, null, null, undefined);
                    }
                    if (!react) {
                      let replace;
                      if (path !== tmp9(_location)) {
                        replace = history.push;
                      }
                      const replaced = replace(tmpResult);
                    }
                    replace = history.replace;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
        };
        const tmp10 = innerRef({}, obj2, obj);
        if (forwardRefShim !== forwardRef) {
          tmp10.ref = closure_0 || innerRef;
        } else {
          tmp10.innerRef = innerRef;
        }
        return <history {...tmp10} />;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
});
const unpackModuleId = forwardRefResult;
function forwardRefShim$1(arg0) {
  return arg0;
}
let forwardRef2 = react.forwardRef;
if (undefined === forwardRef2) {
  forwardRef2 = forwardRefShim$1;
}
const forwardRef2Result = forwardRef2((aria_current, arg1) => {
  let closure_0;
  let closure_11;
  let fn;
  let innerRef;
  let sensitive;
  let strict;
  _require = arg1;
  const prop = aria_current["aria-current"];
  let str = "page";
  if (undefined !== prop) {
    str = prop;
  }
  const activeClassName = aria_current.activeClassName;
  let str2 = "active";
  if (undefined !== activeClassName) {
    str2 = activeClassName;
  }
  ({ activeStyle: invariant, className: obj, exact: fn, isActive: resolveToLocation, location: normalizeToLocation, sensitive: forwardRefShim, strict: forwardRef, style: closure_10, to: closure_11, innerRef: forwardRefShim$1 } = aria_current);
  const items = ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"];
  if (null == aria_current) {
    let obj2 = {};
  } else {
    obj = {};
    const _Object = Object;
    const keys = Object.keys(aria_current);
    const num = 0;
    let num3 = 0;
    obj2 = obj;
    if (0 < keys.length) {
      do {
        let tmp3 = keys[num3];
        let tmp4 = num3;
        if (0 > items.indexOf(tmp3)) {
          obj[tmp3] = aria_current[tmp3];
        }
        num3 = num3 + 1;
        obj2 = obj;
      } while (num3 < keys.length);
    }
  }
  return str2.createElement(require("MemoryRouter").__RouterContext.Consumer, null, (location) => {
    function joinClassnames() {
      let num;
      const length = arguments.length;
      const arr = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        arr[num] = arguments[num];
      }
      const found = arr.filter((item) => item);
      return found.join(" ");
    }
    const tmp = location;
    if (!tmp) {
      invariant(false);
    }
    if (typeof resolveToLocation === "function") {
      let tmp6Result = closure_11;
      if (typeof closure_11 === "function") {
        tmp6Result = closure_11(tmp4);
      }
      if (typeof tmp5 === "function") {
        let _location = tmp6Result;
        if (typeof tmp6Result === "string") {
          const obj4 = _mod1113;
          _location = obj4.createLocation(tmp6Result, null, null, tmp4);
        }
        const replaced = str && str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
        let matchPathResult = null;
        if (replaced) {
          obj = require("MemoryRouter");
          obj2 = { path: replaced, exact, sensitive: forwardRefShim, strict: forwardRef };
          matchPathResult = obj.matchPath(tmp4.pathname, obj2);
        }
        let tmp16Result = matchPathResult;
        if (resolveToLocation) {
          tmp16Result = tmp16(matchPathResult, tmp4);
        }
        let tmp19Result = closure_1_4;
        if (typeof closure_1_4 === "function") {
          tmp19Result = tmp19(tmp18);
        }
        let tmp21Result = closure_10;
        if (typeof closure_10 === "function") {
          tmp21Result = tmp21(tmp18);
        }
        let tmp23 = tmp21Result;
        let tmp24 = tmp19Result;
        if (tmp16Result) {
          tmp24 = joinClassnames(tmp19Result, str2);
          tmp23 = obj({}, tmp21Result, invariant);
        }
        let tmp29 = tmp18;
        const tmp28 = obj;
        if (tmp16Result) {
          tmp29 = str;
        }
        if (!tmp29) {
          tmp29 = null;
        }
        const obj3 = { "aria-current": tmp29, className: tmp24, style: tmp23, to: _location };
        const tmp28Result = tmp28(obj3, obj2);
        if (forwardRefShim$1 !== forwardRef2) {
          tmp28Result.ref = closure_0 || forwardRefShim$1;
        } else {
          tmp28Result.innerRef = forwardRefShim$1;
        }
        return <unpackModuleId {...tmp28Result} />;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
});

export const MemoryRouter = require("MemoryRouter").MemoryRouter;
export const Prompt = require("MemoryRouter").Prompt;
export const Redirect = require("MemoryRouter").Redirect;
export const Route = require("MemoryRouter").Route;
export const Router = require("MemoryRouter").Router;
export const StaticRouter = require("MemoryRouter").StaticRouter;
export const Switch = require("MemoryRouter").Switch;
export const generatePath = require("MemoryRouter").generatePath;
export const matchPath = require("MemoryRouter").matchPath;
export const useHistory = require("MemoryRouter").useHistory;
export const useLocation = require("MemoryRouter").useLocation;
export const useParams = require("MemoryRouter").useParams;
export const useRouteMatch = require("MemoryRouter").useRouteMatch;
export const withRouter = require("MemoryRouter").withRouter;
export const BrowserRouter = e;
export const HashRouter = tmp7;
export const Link = forwardRefResult;
export const NavLink = forwardRef2Result;