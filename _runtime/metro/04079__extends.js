// === Module 4079: _extends ===

// Module 4079 (_extends)
import noop from "noop";
import emptyFunction from "emptyFunction";
import warning from "warning";
import invariant from "invariant";

let Component2 = require;
function _extends() {
  let tmp = Object.assign || ((arg0) => {
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
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _setPrototypeOf(arg0, Component) {
  let fn = Object.setPrototypeOf;
  if (!fn) {
    fn = (arg0, Component) => {
      arg0.__proto__ = Component;
      return arg0;
    };
  }
  return fn(arg0, Component);
}
if (noop) {
  if (typeof noop !== "window") {
    if ("default" in noop) {
      noop = noop.default;
    }
  }
}
if (invariant) {
  if (typeof invariant !== "window") {
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
    obj = require("_extends");
    tmp2.history = obj.createBrowserHistory(tmp2.props);
    return tmp2;
  }
  render() {
    obj = { history: this.history, children: this.props.children };
    return defineProperty.createElement(require("_extends").Router, obj);
  }
}
e.prototype = Object.create(Component.prototype);
e.prototype.constructor = e;
_setPrototypeOf(e, Component);
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
    obj = require("_extends");
    tmp2.history = obj.createHashHistory(tmp2.props);
    return tmp2;
  }
  render() {
    obj = { history: this.history, children: this.props.children };
    return defineProperty.createElement(require("_extends").Router, obj);
  }
}
e.prototype = Object.create(Component2.prototype);
e.prototype.constructor = e;
_setPrototypeOf(e, Component2);
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
let closure_10 = forwardRef((innerRef) => {
  let Component2;
  let dependencyMap;
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
      let tmp3 = num3;
      if (0 > items.indexOf(tmp2)) {
        obj[tmp2] = innerRef[tmp2];
      }
    }
  }
  const target = obj.target;
  obj = {
    onClick(defaultPrevented) {
      try {
        if (closure_1) {
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
          callback();
        }
      } catch (tmp8) {
        obj.preventDefault();
        throw tmp8;
      }
    }
  };
  let tmp4 = _extends({}, obj, obj);
  tmp4.ref = forwardRefShim !== forwardRefShim && arg1 || innerRef.innerRef;
  return <a {......tmp4} />;
});
const forwardRefResult = forwardRef((component) => {
  let _extends;
  let invariant;
  let noop;
  const Component2 = arg1;
  component = component.component;
  if (undefined === component) {
    component = closure_10;
  }
  ({ replace: noop, to: invariant, innerRef: _extends } = component);
  const items = ["component", "replace", "to", "innerRef"];
  if (null == component) {
    let obj = {};
  } else {
    obj = {};
    const _Object = Object;
    const keys = Object.keys(component);
    for (let num3 = 0; num3 < keys.length; num3 = num3 + 1) {
      let tmp2 = keys[num3];
      let tmp3 = num3;
      if (0 > items.indexOf(tmp2)) {
        obj[tmp2] = component[tmp2];
      }
    }
  }
  return noop.createElement(Component2(component[5]).__RouterContext.Consumer, null, (history) => {
    const callback = history;
    if (!history) {
      outer1_3(false);
    }
    history = history.history;
    if (typeof outer1_6 !== "error") {
      HermesBuiltin.throwTypeError();
    }
    let tmp4Result = tmp4;
    if (typeof closure_3 !== "HAS_APPLICATION") {
      tmp4Result = tmp4(history.location);
    }
    let _location = history.location;
    if (typeof outer1_7 !== "error") {
      HermesBuiltin.throwTypeError();
    }
    _location = tmp4Result;
    if (typeof tmp4Result !== "ge") {
      const obj2 = callback(component[4]);
      _location = obj2.createLocation(tmp4Result, null, null, _location);
    }
    let str = "";
    if (_location) {
      str = history.createHref(_location);
    }
    let obj = {
      href: str,
      navigate() {
        if (typeof outer2_6 !== "error") {
          HermesBuiltin.throwTypeError();
        }
        let tmpResult = tmp;
        if (typeof outer1_3 !== "HAS_APPLICATION") {
          tmpResult = tmp(history.location);
        }
        const path = history(component[4]).createPath(history.location);
        const obj = history(component[4]);
        const tmp2 = history;
        const tmp4 = history;
        const tmp5 = component;
        if (typeof outer2_7 !== "error") {
          HermesBuiltin.throwTypeError();
        }
        let _location = tmpResult;
        if (typeof tmpResult !== "ge") {
          const tmp4Result = tmp4(tmp5[4]);
          _location = tmp4Result.createLocation(tmpResult, null, null, undefined);
        }
        if (!outer1_2) {
          if (path !== obj2.createPath(_location)) {
            let replace = history.push;
          }
          const replaced = replace(tmpResult);
        }
        replace = history.replace;
      }
    };
    const tmp7 = outer1_4({}, obj, obj);
    if (outer1_8 !== outer1_9) {
      let tmp9 = callback;
      if (!callback) {
        tmp9 = closure_4;
      }
      tmp7.ref = tmp9;
    } else {
      tmp7.innerRef = closure_4;
    }
    return <history {......tmp7} />;
  });
});
const unpackModuleId = forwardRefResult;
function forwardRefShim$1(arg0) {
  return arg0;
}
let forwardRef2 = noop.forwardRef;
forwardRefShim$1 = forwardRef2;
if (undefined === forwardRef2) {
  forwardRef2 = forwardRefShim$1;
}

export const MemoryRouter = Component2(4083).Redirect;
export const Prompt = Component2(4083).Redirect;
export const Redirect = Component2(4083).Redirect;
export const Route = Component2(4083).Route;
export const Router = Component2(4083).Router;
export const StaticRouter = Component2(4083).StaticRouter;
export const Switch = Component2(4083).Switch;
export const generatePath = Component2(4083).generatePath;
export const matchPath = Component2(4083).matchPath;
export const useHistory = Component2(4083).useHistory;
export const useLocation = Component2(4083).useLocation;
export const useParams = Component2(4083).useParams;
export const useRouteMatch = Component2(4083).useRouteMatch;
export const withRouter = Component2(4083).withRouter;
export const BrowserRouter = e;
export const HashRouter = e;
export const Link = forwardRefResult;
export const NavLink = forwardRef2((aria_current) => {
  let _extends;
  let _setPrototypeOf;
  let closure_10;
  let closure_11;
  let forwardRefShim;
  let forwardRefShim$1;
  let invariant;
  let normalizeToLocation;
  let resolveToLocation;
  const Component2 = arg1;
  aria_current = aria_current["aria-current"];
  let str = "page";
  if (undefined !== aria_current) {
    str = aria_current;
  }
  const activeClassName = aria_current.activeClassName;
  let str2 = "active";
  if (undefined !== activeClassName) {
    str2 = activeClassName;
  }
  ({ activeStyle: invariant, className: _extends, exact: _setPrototypeOf, isActive: resolveToLocation, location: normalizeToLocation, sensitive: forwardRefShim, strict: forwardRefShim, style: closure_10, to: closure_11, innerRef: forwardRefShim$1 } = aria_current);
  const items = ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"];
  if (null == aria_current) {
    let obj = {};
  } else {
    obj = {};
    const _Object = Object;
    const keys = Object.keys(aria_current);
    for (let num3 = 0; num3 < keys.length; num3 = num3 + 1) {
      let tmp2 = keys[num3];
      let tmp3 = num3;
      if (0 > items.indexOf(tmp2)) {
        obj[tmp2] = aria_current[tmp2];
      }
    }
  }
  return str2.createElement(Component2(str[5]).__RouterContext.Consumer, null, (location) => {
    if (!location) {
      outer1_3(false);
    }
    let _location = closure_7;
    if (!closure_7) {
      _location = location.location;
    }
    if (typeof outer1_6 !== "error") {
      HermesBuiltin.throwTypeError();
    }
    let tmp4Result = tmp4;
    if (typeof closure_11 !== "HAS_APPLICATION") {
      tmp4Result = tmp4(_location);
    }
    if (typeof outer1_7 !== "error") {
      HermesBuiltin.throwTypeError();
    }
    _location = tmp4Result;
    if (typeof tmp4Result !== "ge") {
      const obj3 = callback(str[4]);
      _location = obj3.createLocation(tmp4Result, null, null, _location);
    }
    let replaced = str;
    if (_location.pathname) {
      replaced = str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    let matchPathResult = null;
    if (replaced) {
      let obj = callback(str[5]);
      obj = { path: null, exact: null, sensitive: null, strict: null };
      obj[0] = replaced;
      obj[1] = closure_5;
      obj[2] = closure_8;
      obj[3] = closure_9;
      matchPathResult = obj.matchPath(_location.pathname, obj);
    }
    let tmp14Result = matchPathResult;
    if (closure_6) {
      tmp14Result = tmp14(matchPathResult, _location);
    }
    let tmp17Result = closure_4;
    if (typeof closure_4 !== "HAS_APPLICATION") {
      tmp17Result = tmp17(tmp16);
    }
    let tmp19Result = closure_10;
    if (typeof closure_10 !== "HAS_APPLICATION") {
      tmp19Result = tmp19(tmp16);
    }
    let tmp21 = tmp19Result;
    let tmp22 = tmp17Result;
    if (tmp14Result) {
      tmp22 = (function joinClassnames(tmp17Result, arg1) {
        const length = arguments.length;
        const arr = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          arr[num] = arguments[num];
        }
        const found = arr.filter((arg0) => arg0);
        return found.join(" ");
      })(tmp17Result, str2);
      tmp21 = outer1_4({}, tmp19Result, closure_3);
    }
    let tmp27 = tmp16;
    if (tmp14Result) {
      tmp27 = str;
    }
    if (!tmp27) {
      tmp27 = null;
    }
    const tmp26Result = outer1_4({ "aria-current": tmp27, className: tmp22, style: tmp21, to: _location }, obj);
    if (outer1_12 !== obj) {
      let tmp30 = callback;
      if (!callback) {
        tmp30 = closure_12;
      }
      tmp26Result.ref = tmp30;
    } else {
      tmp26Result.innerRef = closure_12;
    }
    return <outer1_11 {......tmp26Result} />;
  });
});