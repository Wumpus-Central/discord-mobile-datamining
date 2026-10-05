// === Module 4711: ? ===

// Module 4711
import _mod1113 from "module_1113" /* 1113 */;
import react_mod from "react" /* 19 */;
import module_4707_mod from "module_4707" /* 4707 */;
import warning from "warning" /* 1119 */;
import invariant_mod from "invariant" /* 1120 */;
import pathToRegexp_mod from "pathToRegexp" /* 4712 */;
import AsyncMode from "AsyncMode" /* 4714 */;
import hoistNonReactStatics_mod from "hoistNonReactStatics" /* 4716 */;

let array, call, closure_18, hasOwnProperty, length;

let tmp13;
let tmp18;
let obj = function _extends() {
  obj = Object.assign || (function(arg0) {
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
  });
  return obj(...arguments);
};
let fn = function _setPrototypeOf(arg0, Component) {
  fn = Object.setPrototypeOf || ((arg0, Component) => {
    arg0.__proto__ = Component;
    return arg0;
  });
  return fn(arg0, Component);
};
function noop() {

}
let react = react_mod;
if (react) {
  if (typeof react === "object") {
    let str = "default";
    if ("default" in react) {
      react = react.default;
    }
  }
}
let module_4707 = module_4707_mod;
if (module_4707) {
  if (typeof module_4707 === "object") {
    let str2 = "default";
    if ("default" in module_4707) {
      module_4707 = module_4707.default;
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
let pathToRegexp = pathToRegexp_mod;
if (pathToRegexp) {
  if (typeof pathToRegexp === "object") {
    if ("default" in pathToRegexp) {
      pathToRegexp = pathToRegexp.default;
    }
  }
}
let hoistNonReactStatics = hoistNonReactStatics_mod;
if (hoistNonReactStatics) {
  if (typeof hoistNonReactStatics === "object") {
    if ("default" in hoistNonReactStatics) {
      hoistNonReactStatics = hoistNonReactStatics.default;
    }
  }
}
let c9 = 1073741823;
if (typeof globalThis !== "undefined") {
  let _globalThis = globalThis;
} else {
  const _window = window;
  if (typeof window !== "undefined") {
    _globalThis = window;
  } else {
    _globalThis = global;
    if (undefined === global) {
      _globalThis = {};
    }
  }
}
let tmp9 = react.createContext || (function createReactContext(arg0, arg1) {
  let closure_2;
  let tmp2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const num = _globalThis.__global_unique_id__ || 0;
  const sum = num + 1;
  _globalThis.__global_unique_id__ = sum;
  react = `${"__create-react-context-" + tmp2}__`;
  const Component = react.Component;
  class t {
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
      value = tmp2.props.value;
      closure_1 = [];
      tmp2.emitter = {
        on(arg0) {
              closure_1.push(arg0);
            },
        off(arg0) {
              closure_0 = arg0;
              closure_1 = closure_1.filter(function() { /* body not rendered: F155325 */ });
            },
        get() {
              return value;
            },
        set(arg0, arg1) {
              closure_0 = arg0;
              const item = closure_1.forEach(() => { /* body not rendered: F155326 */ });
            }
      };
      return tmp2;
    }
  }
  t.prototype = Object.create(Component.prototype);
  t.prototype.constructor = t;
  const tmp3 = fn(t, Component);
  const prototype = t.prototype;
  prototype.getChildContext = function() {
    return { [closure_1_2]: this.emitter };
  };
  prototype.componentWillReceiveProps = function(value) {
    const self = this;
    if (this.props.value !== value.value) {
      let tmp;
      value = self.props.value;
      const value2 = value.value;
      if (value === value2) {
        tmp = 0 !== value || 1 / value === 1 / value2;
        const tmp2 = 0 !== value || 1 / value === 1 / value2;
      } else {
        tmp = value != value && value2 != value2;
      }
      if (!tmp) {
        let tmp3Result;
        if (typeof closure_1 === "function") {
          tmp3Result = tmp3(value, value2);
        } else {
          tmp3Result = c9;
        }
        if (0 !== (tmp3Result | 0)) {
          const emitter = self.emitter;
          const result = emitter.set(value.value, tmp5);
        }
      }
    }
  };
  prototype.render = function() {
    return this.props.children;
  };
  const childContextTypes = { [`${"__create-react-context-" + tmp2}__`]: module_4707.object.isRequired };
  t.childContextTypes = childContextTypes;
  const Component2 = react.Component;
  tmp4.prototype = Object.create(Component2.prototype);
  tmp4.prototype.constructor = tmp4;
  const tmp5 = fn(tmp4, Component2);
  const prototype2 = tmp4.prototype;
  prototype2.componentWillReceiveProps = function(observedBits) {
    observedBits = observedBits.observedBits;
    if (null == observedBits) {
      observedBits = closure_1_9;
    }
    this.observedBits = observedBits;
  };
  prototype2.componentDidMount = function() {
    const self = this;
    if (this.context[closure_2]) {
      obj = self.context[tmp];
      obj.on(self.onUpdate);
    }
    let observedBits = self.props.observedBits;
    if (null == observedBits) {
      observedBits = c9;
    }
    self.observedBits = observedBits;
  };
  prototype2.componentWillUnmount = function() {
    const self = this;
    if (this.context[closure_2]) {
      obj = self.context[tmp];
      obj.off(self.onUpdate);
    }
  };
  prototype2.getValue = function() {
    let value;
    if (this.context[closure_2]) {
      obj = this.context[tmp];
      value = obj.get();
    } else {
      value = closure_0;
    }
    return value;
  };
  prototype2.render = function() {
    const children = this.props.children;
    let first = children;
    if (Array.isArray(children)) {
      first = children[0];
    }
    return first(this.state.value);
  };
  tmp4.contextTypes = { [`${"__create-react-context-" + tmp2}__`]: module_4707.object };
  let obj2 = { Provider: t, Consumer: tmp4 };
  return obj2;
});
function generatePath(arg0, arg1) {
  let str = arg0;
  if (undefined === arg0) {
    str = "/";
  }
  obj = arg1;
  if (undefined === arg1) {
    obj = {};
  }
  let tmp = str;
  if ("/" !== str) {
    let tmp6;
    if (closure_15[str]) {
      tmp6 = closure_15[str];
    } else {
      const compileResult = pathToRegexp.compile(str);
      tmp6 = compileResult;
      if (closure_16 < 10000) {
        closure_15[str] = compileResult;
        closure_16 = closure_16 + 1;
        tmp6 = compileResult;
      }
    }
    tmp = tmp6(obj, { pretty: true });
  }
  return tmp;
}
function matchPath(pathname, arg1) {
  let closure_0 = pathname;
  let path = arg1;
  if (undefined === arg1) {
    path = {};
  }
  let tmp = typeof path !== "string";
  if (typeof path !== "string") {
    const _Array = Array;
    tmp = !Array.isArray(path);
  }
  let tmp2 = path;
  if (!tmp) {
    tmp2 = { path };
    const obj2 = { path };
  }
  let exact = tmp2.exact;
  let tmp3 = undefined !== exact;
  path = tmp2.path;
  if (tmp3) {
    tmp3 = exact;
  }
  exact = tmp3;
  const strict = tmp2.strict;
  let closure_2 = undefined !== strict && strict;
  const sensitive = tmp2.sensitive;
  let closure_3 = undefined !== sensitive && sensitive;
  const items = [];
  const combined = items.concat(path);
  return combined.reduce((acc, path) => {
    let keys;
    let regexp;
    let str2;
    const tmp = path;
    if (!tmp) {
      if ("" !== path) {
        return null;
      }
    }
    const tmp3 = acc;
    if (tmp3) {
      return acc;
    } else {
      let tmp12;
      obj = { end: exact, strict, sensitive };
      const sum = "" + obj.end + obj.strict + obj.sensitive;
      let tmp9 = closure_2_17[sum];
      if (!tmp9) {
        const obj2 = {};
        tmp8[sum] = obj2;
        tmp9 = obj2;
      }
      if (tmp9[path]) {
        tmp12 = tmp9[path];
      } else {
        const items = [];
        const obj3 = { regexp: closure_2_5(path, items, obj), keys: items };
        tmp12 = obj3;
        if (closure_18 < 10000) {
          tmp9[path] = obj3;
          closure_18 = closure_18 + 1;
          tmp12 = obj3;
        }
      }
      ({ regexp, keys } = tmp12);
      match = regexp.exec(pathname);
      if (match) {
        let tmp18;
        const first = match[0];
        let closure_0 = match.slice(1);
        const tmp17 = pathname === first;
        if (!exact) {
          const obj4 = {
            path,
            url: str2,
            isExact: tmp17,
            params: keys.reduce((acc, name, index) => {
                    acc[name.name] = closure_0[index];
                    return acc;
                  }, {})
          };
          str2 = "/";
          if ("/" !== path) {
            str2 = first;
          }
          tmp18 = obj4;
        } else {
          tmp18 = null;
        }
        return tmp18;
      } else {
        return null;
      }
    }
  }, null);
}
function useLocation() {
  return useContext(closure_12).location;
}
const tmp9Result = tmp9();
tmp9Result.displayName = "Router-History";
let closure_11 = tmp9Result;
const tmp9Result2 = tmp9();
tmp9Result2.displayName = "Router";
let closure_12 = tmp9Result2;
let Component = react.Component;
class t {
  constructor(history) {
    const self = this;
    const tmp = Component.call(self, history) || self;
    let closure_0 = tmp;
    tmp.state = { location: history.history.location };
    tmp._isMounted = false;
    tmp._pendingLocation = null;
    if (!history.staticContext) {
      history = history.history;
      tmp.unlisten = history.listen((_pendingLocation) => {
        closure_0._pendingLocation = _pendingLocation;
      });
    }
    return tmp;
  }
  static computeRootMatch(arg0) {
  return { path: "/", url: "/", params: {}, isExact: "/" === arg0 };
}
  render() {
  return <t history={this.history} children={this.props.children} />;
}
}
t.prototype = Object.create(Component.prototype);
t.prototype.constructor = t;
let tmp12 = fn(t, Component);
let prototype = t.prototype;
prototype.componentDidMount = function() {
  const self = this;
  this._isMounted = true;
  if (this.unlisten) {
    self.unlisten();
  }
  if (!self.props.staticContext) {
    const history = self.props.history;
    self.unlisten = history.listen((location) => {
      if (self._isMounted) {
        const obj2 = { location };
        self.setState(obj2);
      }
    });
  }
  if (self._pendingLocation) {
    obj = { location: self._pendingLocation };
    self.setState(obj);
  }
};
prototype.componentWillUnmount = function() {
  const self = this;
  if (this.unlisten) {
    self.unlisten();
    self._isMounted = false;
    self._pendingLocation = null;
  }
};
prototype.render = function() {
  const createElement = react.createElement;
  const Provider = redux2.Provider;
  let children = this.props.children;
  const createElement2 = react.createElement;
  const Provider2 = redux.Provider;
  ({ history: this.props.history, location: this.state.location, match: t.computeRootMatch(this.state.location.pathname), staticContext: this.props.staticContext });
  if (!children) {
    children = null;
  }
  const obj3 = { children, value: this.props.history };
  return <Provider value={{ history: this.props.history, location: this.state.location, match: t.computeRootMatch(this.state.location.pathname), staticContext: this.props.staticContext }}>{createElement2(Provider2, obj3)}</Provider>;
};
let Component2 = react.Component;
tmp13.prototype = Object.create(Component2.prototype);
tmp13.prototype.constructor = tmp13;
fn(tmp13, Component2);
const Component3 = react.Component;
class e {
  constructor() {
    const self = this;
    const tmp = Component3(...arguments) || self;
    return tmp;
  }
  render() {
    let redux;
    const self = this;
    return <redux.Consumer>{(location) => {
      let children;
      let component;
      let match;
      let render;
      let tmp13Result2;
      const tmp = location;
      if (!tmp) {
        invariant(false);
      }
      obj = { location: self.props.location || location.location, match };
      const props = self.props;
      const tmp6 = obj;
      if (self.props.computedMatch) {
        match = props.computedMatch;
      } else if (props.path) {
        let props1 = self.props;
        const pathname = tmp5.pathname;
        let exact;
        let closure_2;
        let closure_3;
        if (undefined === props1) {
          props1 = {};
        }
        let tmp7 = typeof props1 !== "string";
        if (typeof props1 !== "string") {
          const _Array = Array;
          tmp7 = !Array.isArray(props1);
        }
        let tmp8 = props1;
        if (!tmp7) {
          tmp8 = { path: props1 };
          const obj2 = { path: props1 };
        }
        exact = tmp8.exact;
        let tmp9 = undefined !== exact;
        const path = tmp8.path;
        if (tmp9) {
          tmp9 = exact;
        }
        exact = tmp9;
        const strict = tmp8.strict;
        closure_2 = undefined !== strict && strict;
        const sensitive = tmp8.sensitive;
        closure_3 = undefined !== sensitive && sensitive;
        const items = [];
        const combined = items.concat(path);
        match = combined.reduce((acc, path) => {
          let keys;
          let regexp;
          let str2;
          const tmp = path;
          if (!tmp) {
            if ("" !== path) {
              return null;
            }
          }
          const tmp3 = acc;
          if (tmp3) {
            return acc;
          } else {
            let tmp12;
            obj = { end: exact, strict, sensitive };
            const sum = "" + obj.end + obj.strict + obj.sensitive;
            let tmp9 = closure_2_17[sum];
            if (!tmp9) {
              const obj2 = {};
              tmp8[sum] = obj2;
              tmp9 = obj2;
            }
            if (tmp9[path]) {
              tmp12 = tmp9[path];
            } else {
              const items = [];
              const obj3 = { regexp: closure_2_5(path, items, obj), keys: items };
              tmp12 = obj3;
              if (closure_18 < 10000) {
                tmp9[path] = obj3;
                closure_18 = closure_18 + 1;
                tmp12 = obj3;
              }
            }
            ({ regexp, keys } = tmp12);
            match = regexp.exec(pathname);
            if (match) {
              let tmp18;
              const first = match[0];
              let closure_0 = match.slice(1);
              const tmp17 = pathname === first;
              if (!exact) {
                const obj4 = {
                  path,
                  url: str2,
                  isExact: tmp17,
                  params: keys.reduce((acc, name, index) => {
                          acc[name.name] = closure_0[index];
                          return acc;
                        }, {})
                };
                str2 = "/";
                if ("/" !== path) {
                  str2 = first;
                }
                tmp18 = obj4;
              } else {
                tmp18 = null;
              }
              return tmp18;
            } else {
              return null;
            }
          }
        }, null);
      } else {
        match = location.match;
      }
      const tmp6Result = tmp6({}, location, obj);
      ({ children, component, render } = self.props);
      let isArray = Array.isArray(children);
      if (isArray) {
        const Children = react.Children;
        isArray = 0 === Children.count(children);
      }
      let tmp13 = children;
      if (isArray) {
        tmp13 = null;
      }
      const createElement = react.createElement;
      const Provider = redux.Provider;
      if (tmp6Result.match) {
        let element;
        if (tmp13) {
          let tmp13Result = tmp13;
          if (typeof tmp13 === "function") {
            tmp13Result = tmp13(tmp6Result);
          }
          element = tmp13Result;
        } else if (component) {
          element = <component {...tmp6Result} />;
        } else {
          element = null;
          if (render) {
            element = render(tmp6Result);
          }
        }
        tmp13Result2 = element;
      } else {
        tmp13Result2 = null;
        if (typeof tmp13 === "function") {
          tmp13Result2 = tmp13(tmp6Result);
        }
      }
      return <Provider value={tmp6Result}>{tmp13Result2}</Provider>;
    }}</redux.Consumer>;
  }
}
e.prototype = Object.create(Component3.prototype);
e.prototype.constructor = e;
let tmp15 = fn(e, Component3);
let prototype2 = e.prototype;
prototype2.componentDidMount = function() {
  const self = this;
  if (this.props.onMount) {
    const onMount = self.props.onMount;
    onMount.call(self, self);
  }
};
prototype2.componentDidUpdate = function(arg0) {
  const self = this;
  if (this.props.onUpdate) {
    const onUpdate = self.props.onUpdate;
    onUpdate.call(self, self, arg0);
  }
};
prototype2.componentWillUnmount = function() {
  const self = this;
  if (this.props.onUnmount) {
    const onUnmount = self.props.onUnmount;
    onUnmount.call(self, self);
  }
};
prototype2.render = () => null;
let closure_15 = {};
let closure_16 = 0;
let closure_17 = {};
let c18 = 0;
const Component4 = react.Component;
tmp16.prototype = Object.create(Component4.prototype);
tmp16.prototype.constructor = tmp16;
let tmp17 = fn(tmp16, Component4);
const Component5 = react.Component;
tmp18.prototype = Object.create(Component5.prototype);
tmp18.prototype.constructor = tmp18;
fn(tmp18, Component5);
const prototype3 = tmp18.prototype;
prototype3.navigateTo = function(_location, action) {
  const props = this.props;
  const basename = props.basename;
  let str = "";
  if (undefined !== basename) {
    str = basename;
  }
  let context = props.context;
  if (undefined === context) {
    context = {};
  }
  context.action = action;
  const obj2 = _mod1113;
  const _location1 = obj2.createLocation(_location);
  let tmp5Result = _location1;
  if (str) {
    let text = str;
    const tmp5 = obj;
    if ("/" !== str.charAt(0)) {
      text = `/${str}`;
    }
    obj = { pathname: text + _location1.pathname };
    tmp5Result = tmp5({}, _location1, obj);
  }
  context.location = tmp5Result;
  _location = context.location;
  let path = _location;
  if (typeof _location !== "string") {
    const tmpResult = _mod1113;
    path = tmpResult.createPath(_location);
  }
  context.url = path;
};
prototype3.render = function() {
  let str3;
  let tmp5;
  const go = () => {
    invariant(false);
  };
  const self = this;
  const props = this.props;
  const basename = props.basename;
  let str = "";
  if (undefined !== basename) {
    str = basename;
  }
  let staticContext = props.context;
  if (undefined === staticContext) {
    staticContext = {};
  }
  const _location = props.location;
  let str2 = "/";
  if (undefined !== _location) {
    str2 = _location;
  }
  const items = ["basename", "context", "location"];
  if (null == props) {
    obj = {};
  } else {
    const obj2 = {};
    let tmp = globalThis;
    const _Object = Object;
    const keys = Object.keys(props);
    let num3 = 0;
    obj = obj2;
    if (0 < keys.length) {
      do {
        let tmp2 = keys[num3];
        if (0 > items.indexOf(tmp2)) {
          obj2[tmp2] = props[tmp2];
        }
        num3 = num3 + 1;
        obj = obj2;
      } while (num3 < keys.length);
    }
  }
  const obj3 = {
    createHref(_location) {
      let path = _location;
      const tmp = str;
      if (typeof _location !== "string") {
        obj = _mod1113;
        path = obj.createPath(_location);
      }
      let text = str;
      if ("/" !== (tmp + path).charAt(0)) {
        text = `/${str}`;
      }
      return text;
    },
    action: "POP",
    location: tmp5,
    push: null,
    replace: null,
    go,
    goBack: go,
    goForward: go,
    listen: null,
    block: null
  };
  const obj5 = str(1113);
  const _location1 = obj5.createLocation(str2);
  tmp5 = _location1;
  if (str) {
    let text = str;
    if ("/" !== str.charAt(0)) {
      text = `/${str}`;
    }
    const pathname = _location1.pathname;
    let tmp7 = _location1;
    if (0 === pathname.indexOf(text)) {
      const obj6 = { pathname: str3.substr(text.length) };
      str3 = _location1.pathname;
      tmp7 = obj({}, _location1, obj6);
    }
    tmp5 = tmp7;
  }
  ({ handlePush: obj4.push, handleReplace: obj4.replace } = self);
  ({ handleListen: obj4.listen, handleBlock: obj4.block } = self);
  return <t {...obj({}, obj, { history: obj3, staticContext })} />;
};
const Component6 = react.Component;
tmp20.prototype = Object.create(Component6.prototype);
tmp20.prototype.constructor = tmp20;
fn(tmp20, Component6);
const useContext = react.useContext;

export const MemoryRouter = tmp13;
export const Prompt = function Prompt(arg0) {
  let when;
  ({ message: require, when } = arg0);
  let closure_1 = undefined === when || when;
  return <closure_12.Consumer>{(staticContext) => {
    const tmp = staticContext;
    if (!tmp) {
      invariant(false);
    }
    if (closure_1) {
      if (!staticContext.staticContext) {
        const block = staticContext.history.block;
        return <closure_1_14 onMount={function onMount(arg0) {
          arg0.release = block(require);
        }} onUpdate={function onUpdate(release, message) {
          if (message.message !== require) {
            release.release();
            release.release = block(tmp);
          }
        }} onUnmount={function onUnmount(cellKey) {
          cellKey.release();
        }} message={block} />;
      }
    }
    return null;
  }}</closure_12.Consumer>;
};
export const Redirect = function Redirect(arg0) {
  let closure_2;
  let push;
  ({ computedMatch: require, to: dependencyMap, push } = arg0);
  react = undefined !== push && push;
  return <closure_12.Consumer>{(history) => {
    let element;
    let tmp8;
    let tmp9;
    const tmp = history;
    if (!tmp) {
      invariant(false);
    }
    history = history.history;
    const tmp4 = closure_2 ? history.push : history.replace;
    let closure_0 = tmp4;
    const staticContext = history.staticContext;
    const createLocation = _mod1113.createLocation;
    _mod1113;
    if (require) {
      let tmp30Result;
      if (typeof dependencyMap === "string") {
        let params = require.params;
        let str3 = dependencyMap;
        if (undefined === dependencyMap) {
          str3 = "/";
        }
        if (undefined === params) {
          params = {};
        }
        let tmp23Result = str3;
        if ("/" !== str3) {
          let tmp23;
          if (closure_15[str3]) {
            tmp23 = closure_15[str3];
          } else {
            const compileResult = pathToRegexp.compile(str3);
            tmp23 = compileResult;
            if (closure_16 < 10000) {
              closure_15[str3] = compileResult;
              closure_16 = closure_16 + 1;
              tmp23 = compileResult;
            }
          }
          tmp23Result = tmp23(params, { pretty: true });
        }
        tmp30Result = tmp23Result;
      } else {
        let str = dependencyMap.pathname;
        let params1 = require.params;
        const tmp30 = obj;
        if (undefined === str) {
          str = "/";
        }
        if (undefined === params1) {
          params1 = {};
        }
        let tmp15Result = str;
        if ("/" !== str) {
          let tmp15;
          if (closure_15[str]) {
            tmp15 = closure_15[str];
          } else {
            const compileResult1 = pathToRegexp.compile(str);
            tmp15 = compileResult1;
            if (closure_16 < 10000) {
              closure_15[str] = compileResult1;
              closure_16 = closure_16 + 1;
              tmp15 = compileResult1;
            }
          }
          tmp15Result = tmp15(params1, { pretty: true });
        }
        obj = { pathname: tmp15Result };
        tmp30Result = tmp30({}, dependencyMap, obj);
      }
      tmp9 = tmp30Result;
      tmp8 = dependencyMap;
    } else {
      tmp8 = dependencyMap;
      tmp9 = dependencyMap;
    }
    let _location = createLocation(tmp9);
    if (staticContext) {
      tmp4(_location);
      element = null;
    } else {
      element = <e onMount={function onMount() {
        closure_0(_location);
      }} onUpdate={function onUpdate(arg0, to) {
        obj = closure_2_0(closure_2_1[7]);
        _location = obj.createLocation(to.to);
        const obj2 = closure_2_0(closure_2_1[7]);
        const obj3 = { key: _location.key };
        const tmp2 = _location;
        if (!obj2.locationsAreEqual(_location, closure_2_7({}, _location, obj3))) {
          closure_0(tmp2);
        }
      }} to={tmp8} />;
    }
    return element;
  }}</closure_12.Consumer>;
};
export const Route = tmp16;
export const Router = t;
export const StaticRouter = tmp18;
export const Switch = tmp20;
export const __HistoryContext = tmp9Result;
export const __RouterContext = tmp9Result2;
export { generatePath };
export { matchPath };
export const useHistory = function useHistory() {
  return useContext(closure_11);
};
export { useLocation };
export const useParams = function useParams() {
  const match = useContext(closure_12).match;
  return match ? match.params : {};
};
export const useRouteMatch = function useRouteMatch(cResult) {
  let path = cResult;
  const _location = useContext(closure_12).location;
  let match = useContext(closure_12).match;
  if (cResult) {
    const pathname = _location.pathname;
    let exact;
    let closure_2;
    let closure_3;
    if (undefined === path) {
      path = {};
    }
    let tmp = typeof path !== "string";
    if (typeof path !== "string") {
      const _Array = Array;
      tmp = !Array.isArray(path);
    }
    let tmp2 = path;
    if (!tmp) {
      tmp2 = { path };
      const obj2 = { path };
    }
    exact = tmp2.exact;
    let tmp3 = undefined !== exact;
    path = tmp2.path;
    if (tmp3) {
      tmp3 = exact;
    }
    exact = tmp3;
    const strict = tmp2.strict;
    closure_2 = undefined !== strict && strict;
    const sensitive = tmp2.sensitive;
    closure_3 = undefined !== sensitive && sensitive;
    const items = [];
    const combined = items.concat(path);
    match = combined.reduce((acc, path) => {
      let keys;
      let regexp;
      let str2;
      const tmp = path;
      if (!tmp) {
        if ("" !== path) {
          return null;
        }
      }
      const tmp3 = acc;
      if (tmp3) {
        return acc;
      } else {
        let tmp12;
        obj = { end: exact, strict, sensitive };
        const sum = "" + obj.end + obj.strict + obj.sensitive;
        let tmp9 = closure_2_17[sum];
        if (!tmp9) {
          const obj2 = {};
          tmp8[sum] = obj2;
          tmp9 = obj2;
        }
        if (tmp9[path]) {
          tmp12 = tmp9[path];
        } else {
          const items = [];
          const obj3 = { regexp: closure_2_5(path, items, obj), keys: items };
          tmp12 = obj3;
          if (closure_18 < 10000) {
            tmp9[path] = obj3;
            closure_18 = closure_18 + 1;
            tmp12 = obj3;
          }
        }
        ({ regexp, keys } = tmp12);
        match = regexp.exec(pathname);
        if (match) {
          let tmp18;
          const first = match[0];
          let closure_0 = match.slice(1);
          const tmp17 = pathname === first;
          if (!exact) {
            const obj4 = {
              path,
              url: str2,
              isExact: tmp17,
              params: keys.reduce((acc, name, index) => {
                      acc[name.name] = closure_0[index];
                      return acc;
                    }, {})
            };
            str2 = "/";
            if ("/" !== path) {
              str2 = first;
            }
            tmp18 = obj4;
          } else {
            tmp18 = null;
          }
          return tmp18;
        } else {
          return null;
        }
      }
    }, null);
  }
  return match;
};
export const withRouter = function withRouter(displayName) {
  let Consumer;
  let closure_0 = displayName;
  let tmp = displayName.displayName || displayName.name;
  fn = function t(wrappedComponentRef) {
    wrappedComponentRef = wrappedComponentRef.wrappedComponentRef;
    const items = ["wrappedComponentRef"];
    if (null == wrappedComponentRef) {
      let obj2 = {};
    } else {
      obj = {};
      let tmp = globalThis;
      const _Object = Object;
      const keys = Object.keys(wrappedComponentRef);
      let num3 = 0;
      obj2 = obj;
      if (0 < keys.length) {
        do {
          let tmp2 = keys[num3];
          if (0 > items.indexOf(tmp2)) {
            obj[tmp2] = wrappedComponentRef[tmp2];
          }
          num3 = num3 + 1;
          obj2 = obj;
        } while (num3 < keys.length);
      }
    }
    return <Consumer.Consumer>{(arg0) => {
      const tmp = arg0;
      if (!tmp) {
        invariant(false);
      }
      obj = { ref: wrappedComponentRef };
      return <displayName {...obj({}, obj2, arg0, obj)} />;
    }}</Consumer.Consumer>;
  };
  fn.displayName = `withRouter(${tmp})`;
  fn.WrappedComponent = displayName;
  return hoistNonReactStatics(fn, displayName);
};