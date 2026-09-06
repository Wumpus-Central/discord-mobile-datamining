// _runtime/metro/04388__.js
import noop from "00019__.js";
import emptyFunction from "04389__.js";
import warning from "../01107_warning.js";
import invariant from "../01108_invariant.js";

let Component2 = require;
let closure_4 = function _extends() {
  let tmp = Object.assign || ((arg0) => {
    for (let num = 1; num < arguments.length; num = num + 1) {
      let tmp = arguments[num];
      for (const key10012 in tmp) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
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
  closure_4 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let fn = function _setPrototypeOf(arg0, Component) {
  fn = Object.setPrototypeOf;
  if (!fn) {
    fn = (arg0, Component) => {
      arg0.__proto__ = Component;
      return arg0;
    };
  }
  return fn(arg0, Component);
};
if (noop) {
  if (typeof noop === "object") {
    if ("default" in noop) {
      noop = noop.default;
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
const Component = noop.Component;
Component2 = Component;
class e {
  constructor() {
    length = arguments.length;
    array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    call = Component.call;
    items = [];
    items[0] = this;
    tmp2 = call.apply(Component, items.concat(array)) || this;
    obj = closure_0(closure_1[4]);
    tmp2.history = obj.createBrowserHistory(tmp2.props);
    return tmp2;
  }
  render() {
    obj = { history: this.history, children: this.props.children };
    return closure_2.createElement(Component(closure_1[5]).Router, obj);
  }
}
e.prototype = Object.create(Component.prototype);
e.prototype.constructor = e;
fn(e, Component);
Component2 = noop.Component;
class e {
  constructor() {
    length = arguments.length;
    array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    call = Component.call;
    items = [];
    items[0] = this;
    tmp2 = call.apply(Component, items.concat(array)) || this;
    obj = closure_0(closure_1[4]);
    tmp2.history = obj.createHashHistory(tmp2.props);
    return tmp2;
  }
  render() {
    obj = { history: this.history, children: this.props.children };
    return closure_2.createElement(Component(closure_1[5]).Router, obj);
  }
}
e.prototype = Object.create(Component2.prototype);
e.prototype.constructor = e;
fn(e, Component2);
function resolveToLocation(arg0, arg1) {

}
function normalizeToLocation(arg0, arg1) {

}
function forwardRefShim(arg0) {
  return arg0;
}
let forwardRef = noop.forwardRef;
forwardRefShim = forwardRef;
if (undefined === forwardRef) {
  forwardRef = forwardRefShim;
}
let closure_10 = forwardRef((innerRef, arg1) => {
  ({ navigate: Component2, onClick: dependencyMap } = innerRef);
  const items = ["innerRef", "navigate", "onClick"];
  if (null == innerRef) {
    let obj = {};
  } else {
    obj = {};
    const _Object = Object;
    const keys = Object.keys(innerRef);
    for (let num3 = 0; num3 < keys.length; num3 = num3 + 1) {
      let tmp2 = keys[num3];
      if (0 > items.indexOf(tmp2)) {
        obj[tmp2] = innerRef[tmp2];
      }
    }
  }
  const target = obj.target;
  obj = {
    onClick(defaultPrevented) {
      try {
        if (dependencyMap) {
          tmp(defaultPrevented);
        }
        defaultPrevented = defaultPrevented.defaultPrevented;
        if (!defaultPrevented) {
          defaultPrevented = 0 !== defaultPrevented.button;
        }
        if (!defaultPrevented) {
          let tmp4 = target;
          if (target) {
            tmp4 = "_self" !== tmp3;
          }
          defaultPrevented = tmp4;
        }
        if (!defaultPrevented) {
          defaultPrevented = (function isModifiedEvent(metaKey) {
            return metaKey.metaKey || metaKey.altKey || metaKey.ctrlKey || metaKey.shiftKey;
          })(defaultPrevented);
        }
        if (!defaultPrevented) {
          defaultPrevented.preventDefault();
          Component2();
        }
      } catch (tmp8) {
        obj.preventDefault();
        throw tmp8;
      }
    }
  };
  let tmp4 = closure_4({}, obj, obj);
  tmp4.ref = forwardRefShim !== forwardRefShim && arg1 || innerRef.innerRef;
  return <a {......tmp4} />;
});
const forwardRefResult = forwardRef((component, arg1) => {
  Component2 = arg1;
  component = component.component;
  if (undefined === component) {
    component = closure_10;
  }
  ({ replace: noop, to: invariant, innerRef: closure_4 } = component);
  const items = ["component", "replace", "to", "innerRef"];
  if (null == component) {
    let obj = {};
  } else {
    obj = {};
    const _Object = Object;
    const keys = Object.keys(component);
    for (let num3 = 0; num3 < keys.length; num3 = num3 + 1) {
      let tmp2 = keys[num3];
      if (0 > items.indexOf(tmp2)) {
        obj[tmp2] = component[tmp2];
      }
    }
  }
  return noop.createElement(Component2(component[5]).__RouterContext.Consumer, null, (history) => {
    closure_0 = history;
    if (!history) {
      invariant(false);
    }
    history = history.history;
    if (typeof resolveToLocation === "function") {
      let tmp4Result = tmp4;
      if (typeof tmp4 === "function") {
        tmp4Result = tmp4(tmp5);
      }
      let _location = history.location;
      if (typeof tmp3 === "function") {
        _location = tmp4Result;
        if (typeof tmp4Result === "string") {
          const obj2 = closure_0(component[4]);
          _location = obj2.createLocation(tmp4Result, null, null, _location);
        }
        let str = "";
        if (_location) {
          str = history.createHref(_location);
        }
        obj = {
          href: str,
          navigate() {
                if (typeof resolveToLocation === "function") {
                  let tmpResult = tmp;
                  if (typeof tmp === "function") {
                    tmpResult = tmp(tmp3);
                  }
                  const path = Component2(1101).createPath(tmp2.location);
                  Component2(1101);
                  if (typeof normalizeToLocation === "function") {
                    let _location = tmpResult;
                    if (typeof tmpResult === "string") {
                      const tmp5Result = tmp5(1101);
                      _location = tmp5Result.createLocation(tmpResult, null, null, undefined);
                    }
                    if (!React) {
                      if (path !== tmp9(_location)) {
                        let replace = history.push;
                      }
                      const replaced = replace(tmpResult);
                    }
                    replace = history.replace;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                  obj = Component2(1101);
                  tmp5 = Component2;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
        };
        const tmp10 = innerRef({}, obj, obj);
        if (closure_1_8 !== closure_1_9) {
          let tmp14 = closure_0;
          if (!closure_0) {
            tmp14 = innerRef;
          }
          tmp10.ref = tmp14;
        } else {
          tmp10.innerRef = innerRef;
        }
        return <history {......tmp10} />;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
});
function forwardRefShim$1(arg0) {
  return arg0;
}
let forwardRef2 = noop.forwardRef;
forwardRefShim$1 = forwardRef2;
if (undefined === forwardRef2) {
  forwardRef2 = forwardRefShim$1;
}

export const MemoryRouter = Component2(4392).Redirect;
export const Prompt = Component2(4392).Redirect;
export const Redirect = Component2(4392).Redirect;
export const Route = Component2(4392).Route;
export const Router = Component2(4392).Router;
export const StaticRouter = Component2(4392).StaticRouter;
export const Switch = Component2(4392).Switch;
export const generatePath = Component2(4392).generatePath;
export const matchPath = Component2(4392).matchPath;
export const useHistory = Component2(4392).useHistory;
export const useLocation = Component2(4392).useLocation;
export const useParams = Component2(4392).useParams;
export const useRouteMatch = Component2(4392).useRouteMatch;
export const withRouter = Component2(4392).withRouter;
export const BrowserRouter = e;
export const HashRouter = e;
export const Link = forwardRefResult;
export const NavLink = forwardRef2((aria_current, arg1) => {
  Component2 = arg1;
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
  ({ activeStyle: invariant, className: closure_4, exact: fn, isActive: resolveToLocation, location: normalizeToLocation, sensitive: forwardRefShim, strict: forwardRefShim, style: closure_10, to: closure_11, innerRef: forwardRefShim$1 } = aria_current);
  const items = ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"];
  if (null == aria_current) {
    let obj = {};
  } else {
    obj = {};
    const _Object = Object;
    const keys = Object.keys(aria_current);
    for (let num3 = 0; num3 < keys.length; num3 = num3 + 1) {
      let tmp3 = keys[num3];
      if (0 > items.indexOf(tmp3)) {
        obj[tmp3] = aria_current[tmp3];
      }
    }
  }
  return str2.createElement(Component2(str[5]).__RouterContext.Consumer, null, (location) => {
    if (!location) {
      invariant(false);
    }
    let _location = normalizeToLocation;
    if (!normalizeToLocation) {
      _location = location.location;
    }
    if (typeof resolveToLocation === "function") {
      let tmp4Result = tmp4;
      if (typeof tmp4 === "function") {
        tmp4Result = tmp4(_location);
      }
      if (typeof tmp3 === "function") {
        _location = tmp4Result;
        if (typeof tmp4Result === "string") {
          const obj4 = Component2(1101);
          _location = obj4.createLocation(tmp4Result, null, null, _location);
        }
        let replaced = str;
        if (_location.pathname) {
          replaced = str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
        }
        let matchPathResult = null;
        if (replaced) {
          Component2(4392);
          obj = { path: replaced, exact, sensitive, strict };
          matchPathResult = obj.matchPath(_location.pathname, obj);
        }
        let tmp14Result = matchPathResult;
        if (closure_1_6) {
          tmp14Result = tmp14(matchPathResult, _location);
        }
        let tmp17Result = closure_1_4;
        if (typeof closure_1_4 === "function") {
          tmp17Result = tmp17(tmp16);
        }
        let tmp19Result = closure_1_10;
        if (typeof closure_1_10 === "function") {
          tmp19Result = tmp19(tmp16);
        }
        let tmp21 = tmp19Result;
        let tmp22 = tmp17Result;
        if (tmp14Result) {
          tmp22 = (function joinClassnames() {
            const length = arguments.length;
            const arr = new Array(length);
            for (let num = 0; num < length; num = num + 1) {
              arr[num] = arguments[num];
            }
            const found = arr.filter((item) => item);
            return found.join(" ");
          })(tmp17Result, str2);
          tmp21 = closure_4({}, tmp19Result, closure_1_3);
        }
        let tmp27 = tmp16;
        if (tmp14Result) {
          tmp27 = str;
        }
        if (!tmp27) {
          tmp27 = null;
        }
        obj = { "aria-current": tmp27, className: tmp22, style: tmp21, to: _location };
        const tmp26Result = closure_4(obj, obj);
        if (forwardRefShim$1 !== forwardRefShim$1) {
          let tmp33 = closure_0;
          if (!closure_0) {
            tmp33 = innerRef;
          }
          tmp26Result.ref = tmp33;
        } else {
          tmp26Result.innerRef = innerRef;
        }
        return <forwardRefResult {......tmp26Result} />;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
});