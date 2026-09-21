// _runtime/metro/04589__.js
import noop_mod from "00019__.js";
import emptyFunction_mod from "04585__.js";
import warning from "../01108_warning.js";
import invariant_mod from "../01109_invariant.js";
import parse_mod from "04590__.js";
import AsyncMode from "../04592_AsyncMode.js";
import module_4594_mod from "04594__.js";

let Component6 = require;
let closure_1 = dependencyMap;
let closure_7 = function _extends() {
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
  closure_7 = tmp;
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
function noop() {

}
let noop = noop_mod;
if (noop) {
  if (typeof noop === "object") {
    if ("default" in noop) {
      noop = noop.default;
    }
  }
}
let emptyFunction = emptyFunction_mod;
if (emptyFunction) {
  if (typeof emptyFunction === "object") {
    if ("default" in emptyFunction) {
      emptyFunction = emptyFunction.default;
    }
  }
}
let invariant = invariant_mod;
if (invariant) {
  if (typeof invariant === "object") {
    if ("default" in invariant) {
      invariant = invariant.default;
    }
  }
}
let parse = parse_mod;
if (parse) {
  if (typeof parse === "object") {
    if ("default" in parse) {
      parse = parse.default;
    }
  }
}
let module_4594 = module_4594_mod;
if (module_4594) {
  if (typeof module_4594 === "object") {
    if ("default" in module_4594) {
      module_4594 = module_4594.default;
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
const tmp9 = noop.createContext || (function createReactContext(keys, arg1) {
  let Component2 = keys;
  closure_1 = arg1;
  let num = _globalThis.__global_unique_id__;
  if (!num) {
    num = 0;
  }
  const sum = num + 1;
  _globalThis.__global_unique_id__ = sum;
  noop = `${"__create-react-context-" + tmp2}__`;
  const Component = noop.Component;
  Component2 = Component;
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
      Component = tmp2.props.value;
      closure_1 = [];
      tmp2.emitter = {
        on(arg0) {
              closure_1.push(arg0);
            },
        off(arg0) {
              closure_0 = arg0;
              closure_1 = closure_1.filter(/* F128283 */ function() { ... });
            },
        get() {
              return value;
            },
        set(arg0, arg1) {
              closure_0 = arg0;
              const item = closure_1.forEach(() => { ... });
            }
      };
      return tmp2;
    }
  }
  t.prototype = Object.create(Component.prototype);
  t.prototype.constructor = t;
  fn(t, Component);
  const prototype = t.prototype;
  prototype.getChildContext = function() {
    return { [closure_1_2]: this.emitter };
  };
  prototype.componentWillReceiveProps = function(value) {
    const self = this;
    if (this.props.value !== value.value) {
      value = self.props.value;
      value2 = value.value;
      if (value === value2) {
        let tmp2 = 0 !== value;
        if (!tmp2) {
          tmp2 = 1 / value === 1 / value2;
        }
        let tmp = tmp2;
      } else {
        tmp = value != value && value2 != value2;
      }
      if (!tmp) {
        if (typeof closure_1 === "function") {
          let tmp3Result = tmp3(value, value2);
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
  t.childContextTypes = { [`${"__create-react-context-" + tmp2}__`]: emptyFunction.object.isRequired };
  Component2 = noop.Component;
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
      obj = call.apply(Component, items.concat(array)) || this;
      self = obj;
      obj.observedBits = undefined;
      obj1 = { value: obj.getValue() };
      obj.state = obj1;
      obj.onUpdate = (arg0, arg1) => {
        if (obj.observedBits & arg1) {
          const obj2 = { value: obj.getValue() };
          obj.setState(obj2);
        }
      };
      return obj;
    }
  }
  t.prototype = Object.create(Component2.prototype);
  t.prototype.constructor = t;
  fn(t, Component2);
  const prototype2 = t.prototype;
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
      self.context[tmp].on(self.onUpdate);
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
      self.context[tmp].off(self.onUpdate);
    }
  };
  prototype2.getValue = function() {
    if (this.context[closure_2]) {
      value = this.context[tmp].get();
    } else {
      value = Component2;
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
  t.contextTypes = { [`${"__create-react-context-" + tmp2}__`]: emptyFunction.object };
  return { Provider: t, Consumer: t };
});
function generatePath(arg0, arg1) {
  let str = arg0;
  if (undefined === arg0) {
    str = "/";
  }
  let obj = arg1;
  if (undefined === arg1) {
    obj = {};
  }
  if ("/" === str) {
    return str;
  } else {
    let obj2 = closure_15;
    if (closure_15[str]) {
      let tmp4 = obj2[str];
    } else {
      const compileResult = parse.compile(str);
      tmp4 = compileResult;
      if (closure_16 < 10000) {
        obj2[str] = compileResult;
        closure_16 = closure_16 + 1;
        tmp4 = compileResult;
      }
    }
    obj2 = { pretty: true };
    tmp4(obj, obj2);
  }
}
function matchPath(pathname, arg1) {
  closure_0 = pathname;
  let obj = arg1;
  if (undefined === arg1) {
    obj = {};
  }
  let tmp = typeof obj !== "string";
  if (typeof obj !== "string") {
    const _Array = Array;
    tmp = !Array.isArray(obj);
  }
  let tmp2 = obj;
  if (!tmp) {
    const obj2 = { path: obj };
    tmp2 = obj2;
  }
  let exact = tmp2.exact;
  let tmp3 = undefined !== exact;
  if (tmp3) {
    tmp3 = exact;
  }
  exact = tmp3;
  const strict = tmp2.strict;
  closure_2 = undefined !== strict && strict;
  const sensitive = tmp2.sensitive;
  closure_3 = undefined !== sensitive && sensitive;
  const items = [];
  const combined = items.concat(tmp2.path);
  return combined.reduce((acc, path) => {
    if (!path) {
      if ("" !== path) {
        return null;
      }
    }
    if (acc) {
      return acc;
    } else {
      const obj = { end, strict, sensitive };
      const sum = "" + obj.end + obj.strict + obj.sensitive;
      let tmp7 = closure_2_17[sum];
      if (!tmp7) {
        const obj2 = {};
        tmp6[sum] = obj2;
        tmp7 = obj2;
      }
      if (tmp7[path]) {
        let tmp10 = tmp7[path];
      } else {
        const items = [];
        const obj3 = { regexp: closure_2_5(path, items, obj), keys: items };
        tmp10 = obj3;
        if (closure_18 < 10000) {
          tmp7[path] = obj3;
          closure_18 = closure_18 + 1;
          tmp10 = obj3;
        }
      }
      ({ regexp, keys } = tmp10);
      match = regexp.exec(pathname);
      if (match) {
        const first = match[0];
        closure_0 = match.slice(1);
        if (!end) {
          const obj4 = { path, url: null, isExact: null, params: null };
          let str2 = "/";
          if ("/" !== path) {
            str2 = first;
          }
          obj4.url = str2;
          obj4.isExact = tmp15;
          obj4.params = keys.reduce((acc, name, index) => {
            acc[name.name] = closure_0[index];
            return acc;
          }, {});
          let tmp16 = obj4;
        } else {
          tmp16 = null;
        }
        return tmp16;
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
const redux = tmp9Result;
const tmp9Result2 = tmp9();
tmp9Result2.displayName = "Router";
const redux2 = tmp9Result2;
let Component = noop.Component;
Component6 = Component;
class t {
  constructor(arg0) {
    self = this;
    tmp = Component;
    call = Component.call;
    tmp2 = (typeof call === "unknown" ? tmp(global) : call(self, global)) || self;
    self = tmp2;
    tmp2.state = { location: global.history.location };
    tmp2._isMounted = false;
    tmp2._pendingLocation = null;
    if (!global.staticContext) {
      history = global.history;
      tmp2.unlisten = history.listen((_pendingLocation) => {
        closure_0._pendingLocation = _pendingLocation;
      });
    }
    return tmp2;
  }
  static computeRootMatch(arg0) {
    obj = { path: "/", url: "/", params: {}, isExact: "/" === global };
    return obj;
  }
}
closure_1 = t;
t.prototype = Object.create(Component.prototype);
t.prototype.constructor = t;
fn(t, Component);
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
    const obj = { location: self._pendingLocation };
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
  const obj = { value: { history: this.props.history, location: this.state.location, match: closure_1.computeRootMatch(this.state.location.pathname), staticContext: this.props.staticContext } };
  let children = this.props.children;
  if (!children) {
    children = null;
  }
  return <redux2.Provider value={{ history: this.props.history, location: this.state.location, match: closure_1.computeRootMatch(this.state.location.pathname), staticContext: this.props.staticContext }}><redux.Provider children={children} value={this.props.history} /></redux2.Provider>;
};
let closure_13 = t;
let Component2 = noop.Component;
Component6 = Component2;
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
    obj = closure_0(closure_1[7]);
    tmp2.history = obj.createMemoryHistory(tmp2.props);
    return tmp2;
  }
  render() {
    obj = { history: this.history, children: this.props.children };
    return closure_2.createElement(t, obj);
  }
}
t.prototype = Object.create(Component2.prototype);
t.prototype.constructor = t;
fn(t, Component2);
const Component3 = noop.Component;
let closure_129_0 = Component3;
class e {
  constructor() {
    self = this;
    tmp = Component;
    apply = Component.apply;
    if (typeof apply === "unknown") {
      tmp2 = tmp;
      tmp3 = self;
      applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      tmp5 = arguments;
      applyArgumentsResult = apply(self, arguments);
    }
    if (!applyArgumentsResult) {
      applyArgumentsResult = self;
    }
    return applyArgumentsResult;
  }
}
e.prototype = Object.create(Component3.prototype);
e.prototype.constructor = e;
fn(e, Component3);
let prototype2 = e.prototype;
prototype2.componentDidMount = function() {
  const self = this;
  if (this.props.onMount) {
    const onMount = self.props.onMount;
    const call = onMount.call;
    if (typeof call === "unknown") {
      onMount(self);
    } else {
      call(self, self);
    }
  }
};
prototype2.componentDidUpdate = function(arg0) {
  const self = this;
  if (this.props.onUpdate) {
    const onUpdate = self.props.onUpdate;
    const call = onUpdate.call;
    if (typeof call === "unknown") {
      onUpdate(self, arg0);
    } else {
      call(self, self, arg0);
    }
  }
};
prototype2.componentWillUnmount = function() {
  const self = this;
  if (this.props.onUnmount) {
    const onUnmount = self.props.onUnmount;
    const call = onUnmount.call;
    if (typeof call === "unknown") {
      onUnmount(self);
    } else {
      call(self, self);
    }
  }
};
prototype2.render = () => null;
let closure_14 = e;
let closure_15 = {};
let closure_16 = 0;
let closure_17 = {};
let c18 = 0;
const Component4 = noop.Component;
Component6 = Component4;
class e {
  constructor() {
    self = this;
    tmp = Component;
    apply = Component.apply;
    if (typeof apply === "unknown") {
      tmp2 = tmp;
      tmp3 = self;
      applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      tmp5 = arguments;
      applyArgumentsResult = apply(self, arguments);
    }
    if (!applyArgumentsResult) {
      applyArgumentsResult = self;
    }
    return applyArgumentsResult;
  }
  render() {
    self = this;
    return closure_2.createElement(closure_12.Consumer, null, (location) => {
      if (!location) {
        invariant(false);
      }
      const obj = { location: self.props.location || location.location, match: null };
      const props = self.props;
      if (self.props.computedMatch) {
        let match = props.computedMatch;
      } else if (props.path) {
        let props1 = self.props;
        const pathname = tmp4.pathname;
        let exact;
        closure_2 = undefined;
        closure_3 = undefined;
        if (undefined === props1) {
          props1 = {};
        }
        let tmp6 = typeof props1 !== "string";
        if (typeof props1 !== "string") {
          const _Array = Array;
          tmp6 = !Array.isArray(props1);
        }
        let tmp7 = props1;
        if (!tmp6) {
          const obj2 = { path: props1 };
          tmp7 = obj2;
        }
        exact = tmp7.exact;
        let tmp8 = undefined !== exact;
        if (tmp8) {
          tmp8 = exact;
        }
        exact = tmp8;
        const strict = tmp7.strict;
        closure_2 = undefined !== strict && strict;
        const sensitive = tmp7.sensitive;
        closure_3 = undefined !== sensitive && sensitive;
        const items = [];
        const combined = items.concat(tmp7.path);
        match = combined.reduce((acc, path) => {
          if (!path) {
            if ("" !== path) {
              return null;
            }
          }
          if (acc) {
            return acc;
          } else {
            const obj = { end, strict, sensitive };
            const sum = "" + obj.end + obj.strict + obj.sensitive;
            let tmp7 = closure_2_17[sum];
            if (!tmp7) {
              const obj2 = {};
              tmp6[sum] = obj2;
              tmp7 = obj2;
            }
            if (tmp7[path]) {
              let tmp10 = tmp7[path];
            } else {
              const items = [];
              const obj3 = { regexp: closure_2_5(path, items, obj), keys: items };
              tmp10 = obj3;
              if (closure_18 < 10000) {
                tmp7[path] = obj3;
                closure_18 = closure_18 + 1;
                tmp10 = obj3;
              }
            }
            ({ regexp, keys } = tmp10);
            match = regexp.exec(pathname);
            if (match) {
              const first = match[0];
              closure_0 = match.slice(1);
              if (!end) {
                const obj4 = { path, url: null, isExact: null, params: null };
                let str2 = "/";
                if ("/" !== path) {
                  str2 = first;
                }
                obj4.url = str2;
                obj4.isExact = tmp15;
                obj4.params = keys.reduce((acc, name, index) => {
                  acc[name.name] = closure_0[index];
                  return acc;
                }, {});
                let tmp16 = obj4;
              } else {
                tmp16 = null;
              }
              return tmp16;
            } else {
              return null;
            }
          }
        }, null);
      } else {
        match = location.match;
      }
      obj.match = match;
      const tmp5Result = closure_7({}, location, obj);
      ({ children, component, render } = self.props);
      let isArray = Array.isArray(children);
      if (isArray) {
        const Children = noop.Children;
        isArray = 0 === Children.count(children);
      }
      let tmp12 = children;
      if (isArray) {
        tmp12 = null;
      }
      if (tmp5Result.match) {
        if (tmp12) {
          let tmp12Result = tmp12;
          if (typeof tmp12 === "function") {
            tmp12Result = tmp12(tmp5Result);
          }
          let element = tmp12Result;
        } else if (component) {
          element = <component {......tmp5Result} />;
        } else {
          element = null;
          if (render) {
            element = render(tmp5Result);
          }
        }
      } else {
        let tmp12Result2 = null;
        if (typeof tmp12 === "function") {
          tmp12Result2 = tmp12(tmp5Result);
        }
        return tmp13(tmp14, { value: tmp5Result }, tmp12Result2);
      }
    });
  }
}
e.prototype = Object.create(Component4.prototype);
e.prototype.constructor = e;
fn(e, Component4);
const Component5 = noop.Component;
Component6 = Component5;
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
    self = tmp2;
    tmp2.handlePush = (arg0) => closure_0.navigateTo(arg0, "PUSH");
    tmp2.handleReplace = (arg0) => closure_0.navigateTo(arg0, "REPLACE");
    tmp2.handleListen = () => noop;
    tmp2.handleBlock = () => noop;
    return tmp2;
  }
}
t.prototype = Object.create(Component5.prototype);
t.prototype.constructor = t;
fn(t, Component5);
const prototype3 = t.prototype;
prototype3.navigateTo = function(tmp4Result, action) {
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
  const _location1 = Component6(closure_1[7]).createLocation(tmp4Result);
  let tmp5Result = _location1;
  if (str) {
    let text = str;
    if ("/" !== str.charAt(0)) {
      text = `/${str}`;
    }
    const obj = { pathname: text + _location1.pathname };
    tmp5Result = closure_7({}, _location1, obj);
  }
  context.location = tmp5Result;
  const _location = context.location;
  let path = _location;
  if (typeof _location !== "string") {
    path = Component6(closure_1[7]).createPath(_location);
    const tmpResult = Component6(closure_1[7]);
  }
  context.url = path;
  const obj2 = Component6(closure_1[7]);
};
prototype3.render = function() {
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
    let obj = {};
  } else {
    const obj2 = {};
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
      if (typeof _location !== "string") {
        path = Component6(dependencyMap[7]).createPath(_location);
        const obj = Component6(dependencyMap[7]);
      }
      let text = str;
      if ("/" !== str + path.charAt(0)) {
        text = `/${str}`;
      }
      return text;
    },
    action: "POP",
    location: null,
    push: null,
    replace: null,
    go: null,
    goBack: null,
    goForward: null,
    listen: null,
    block: null
  };
  const _location1 = str(dependencyMap[7]).createLocation(str2);
  let tmp5 = _location1;
  if (str) {
    let text = str;
    if ("/" !== str.charAt(0)) {
      text = `/${str}`;
    }
    const pathname = _location1.pathname;
    let tmp7 = _location1;
    if (0 === pathname.indexOf(text)) {
      const obj6 = { pathname: _location1.pathname.substr(text.length) };
      tmp7 = closure_7({}, _location1, obj6);
    }
    tmp5 = tmp7;
  }
  obj3.location = tmp5;
  ({ handlePush: obj4.push, handleReplace: obj4.replace } = self);
  obj3.go = () => {
    invariant(false);
  };
  obj3.goBack = () => {
    invariant(false);
  };
  obj3.goForward = () => {
    invariant(false);
  };
  ({ handleListen: obj4.listen, handleBlock: obj4.block } = self);
  return <closure_13 {......closure_7({}, obj, { history: obj3, staticContext })} />;
};
Component6 = noop.Component;
class e {
  constructor() {
    self = this;
    tmp = Component;
    apply = Component.apply;
    if (typeof apply === "unknown") {
      tmp2 = tmp;
      tmp3 = self;
      applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      tmp5 = arguments;
      applyArgumentsResult = apply(self, arguments);
    }
    if (!applyArgumentsResult) {
      applyArgumentsResult = self;
    }
    return applyArgumentsResult;
  }
  render() {
    self = this;
    return closure_2.createElement(closure_12.Consumer, null, (location) => {
      let _location = location;
      if (!location) {
        invariant(false);
      }
      _location = self.props.location;
      if (!_location) {
        _location = location.location;
      }
      const Children = noop.Children;
      const item = Children.forEach(self.props.children, (icon) => {
        if (null == match) {
          path = icon;
          if (validElement.isValidElement(icon)) {
            let reduce = path.props.path || path.props.from;
            if (reduce) {
              let obj = { path: reduce };
              let obj2 = closure_2_7({}, path.props, obj);
              const pathname = _location.pathname;
              let end;
              let strict;
              let sensitive;
              if (undefined === obj2) {
                obj2 = {};
              }
              let tmp4 = typeof obj2 !== "string";
              if (typeof obj2 !== "string") {
                const _Array = Array;
                tmp4 = !Array.isArray(obj2);
              }
              let tmp5 = obj2;
              if (!tmp4) {
                let obj3 = { path: obj2 };
                tmp5 = obj3;
              }
              ({ path, exact } = tmp5);
              end = undefined !== exact && exact;
              strict = tmp5.strict;
              strict = undefined !== strict && strict;
              sensitive = tmp5.sensitive;
              sensitive = undefined !== sensitive && sensitive;
              let items = [];
              const combined = items.concat(path);
              reduce = combined.reduce;
              match = reduce((acc, path) => {
                if (!path) {
                  if ("" !== path) {
                    return null;
                  }
                }
                if (acc) {
                  return acc;
                } else {
                  const obj = { end, strict, sensitive };
                  const sum = "" + obj.end + obj.strict + obj.sensitive;
                  let tmp7 = closure_2_17[sum];
                  if (!tmp7) {
                    const obj2 = {};
                    tmp6[sum] = obj2;
                    tmp7 = obj2;
                  }
                  if (tmp7[path]) {
                    let tmp10 = tmp7[path];
                  } else {
                    const items = [];
                    const obj3 = { regexp: closure_2_5(path, items, obj), keys: items };
                    tmp10 = obj3;
                    if (closure_18 < 10000) {
                      tmp7[path] = obj3;
                      closure_18 = closure_18 + 1;
                      tmp10 = obj3;
                    }
                  }
                  ({ regexp, keys } = tmp10);
                  match = regexp.exec(pathname);
                  if (match) {
                    const first = match[0];
                    closure_0 = match.slice(1);
                    if (!end) {
                      const obj4 = { path, url: null, isExact: null, params: null };
                      let str2 = "/";
                      if ("/" !== path) {
                        str2 = first;
                      }
                      obj4.url = str2;
                      obj4.isExact = tmp15;
                      obj4.params = keys.reduce((acc, name, index) => {
                        acc[name.name] = closure_0[index];
                        return acc;
                      }, {});
                      let tmp16 = obj4;
                    } else {
                      tmp16 = null;
                    }
                    return tmp16;
                  } else {
                    return null;
                  }
                }
              }, null);
            } else {
              match = _location.match;
            }
          }
        }
      });
      let cloneElementResult = null;
      if (match) {
        let obj2 = { location: _location, computedMatch: match };
        cloneElementResult = noop.cloneElement(path, obj2);
      }
      return cloneElementResult;
    });
  }
}
e.prototype = Object.create(Component6.prototype);
e.prototype.constructor = e;
fn(e, Component6);
const useContext = noop.useContext;

export const MemoryRouter = t;
export const Prompt = function Prompt(arg0) {
  ({ message: Component6, when } = arg0);
  closure_1 = undefined === when || when;
  return <redux2.Consumer>{(staticContext) => {
    if (!staticContext) {
      invariant(false);
    }
    if (closure_1) {
      if (!staticContext.staticContext) {
        const block = staticContext.history.block;
        const obj = {
          onMount(arg0) {
                arg0.release = block(Component6);
              },
          onUpdate(release, message) {
                if (message.message !== Component6) {
                  release.release();
                  release.release = block(tmp);
                }
              },
          onUnmount(cellKey) {
                cellKey.release();
              },
          message: block
        };
        return <closure_1_14 onMount={function onMount(arg0) {
          arg0.release = block(Component6);
        }} onUpdate={function onUpdate(release, message) {
          if (message.message !== Component6) {
            release.release();
            release.release = block(tmp);
          }
        }} onUnmount={function onUnmount(cellKey) {
          cellKey.release();
        }} message={block} />;
      }
    }
    return null;
  }}</redux2.Consumer>;
};
export const Redirect = function Redirect(arg0) {
  ({ computedMatch: Component6, to: closure_1, push } = arg0);
  noop = undefined !== push && push;
  return <redux2.Consumer>{(history) => {
    if (!history) {
      invariant(false);
    }
    history = history.history;
    const tmp3 = closure_2 ? history.push : history.replace;
    closure_0 = tmp3;
    Component6(1102);
    let tmp6 = closure_1_0;
    if (closure_1_0) {
      if (typeof tmp7 === "string") {
        let params = tmp6.params;
        let str3 = tmp7;
        if (undefined === tmp7) {
          str3 = "/";
        }
        if (undefined === params) {
          params = {};
        }
        tmp6 = str3;
        if ("/" === str3) {
          let tmp30Result = tmp6;
        } else {
          let obj = dependencyMap2;
          if (dependencyMap2[str3]) {
            let tmp20 = obj[str3];
          } else {
            const compileResult = parse.compile(str3);
            tmp20 = compileResult;
            if (closure_16 < 10000) {
              obj[str3] = compileResult;
              closure_16 = closure_16 + 1;
              tmp20 = compileResult;
            }
          }
          obj = { pretty: true };
          tmp20(params, obj);
        }
      } else {
        let str = tmp7.pathname;
        let params1 = tmp6.params;
        if (undefined === str) {
          str = "/";
        }
        if (undefined === params1) {
          params1 = {};
        }
        if ("/" === str) {
          let obj2 = { pathname: str };
          tmp30Result = closure_7({}, tmp7, obj2);
        } else {
          let obj3 = dependencyMap2;
          if (dependencyMap2[str]) {
            let tmp13 = obj3[str];
          } else {
            const compileResult1 = parse.compile(str);
            tmp13 = compileResult1;
            if (closure_16 < 10000) {
              obj3[str] = compileResult1;
              closure_16 = closure_16 + 1;
              tmp13 = compileResult1;
            }
          }
          obj3 = { pretty: true };
          tmp13(params1, obj3);
        }
      }
    } else {
      const tmp5Result = tmp5(tmp7);
      dependencyMap = tmp5Result;
      if (history.staticContext) {
        tmp3(tmp5Result);
        let element = null;
      } else {
        const obj4 = {
          onMount() {
                closure_0(closure_1);
              },
          onUpdate(arg0, to) {
                const _location = Component6(1102).createLocation(to.to);
                const obj = Component6(1102);
                if (!obj2.locationsAreEqual(_location, closure_2_7({}, closure_1, obj3))) {
                  closure_0(closure_1);
                }
                obj2 = Component6(1102);
                obj3 = { key: _location.key };
              },
          to: tmp7
        };
        element = <closure_14 onMount={function onMount() {
          closure_0(closure_1);
        }} onUpdate={function onUpdate(arg0, to) {
          const _location = Component6(1102).createLocation(to.to);
          const obj = Component6(1102);
          if (!obj2.locationsAreEqual(_location, closure_2_7({}, closure_1, obj3))) {
            closure_0(closure_1);
          }
          obj2 = Component6(1102);
          obj3 = { key: _location.key };
        }} to={tmp7} />;
      }
      return element;
    }
  }}</redux2.Consumer>;
};
export const Route = e;
export const Router = t;
export const StaticRouter = t;
export const Switch = e;
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
export const useRouteMatch = function useRouteMatch(Routes) {
  let obj = Routes;
  let match = useContext(closure_12).match;
  if (Routes) {
    const pathname = useContext(closure_12).location.pathname;
    let exact;
    closure_2 = undefined;
    closure_3 = undefined;
    if (undefined === obj) {
      obj = {};
    }
    let tmp = typeof obj !== "string";
    if (typeof obj !== "string") {
      const _Array = Array;
      tmp = !Array.isArray(obj);
    }
    let tmp2 = obj;
    if (!tmp) {
      const obj2 = { path: obj };
      tmp2 = obj2;
    }
    exact = tmp2.exact;
    let tmp3 = undefined !== exact;
    if (tmp3) {
      tmp3 = exact;
    }
    exact = tmp3;
    const strict = tmp2.strict;
    closure_2 = undefined !== strict && strict;
    const sensitive = tmp2.sensitive;
    closure_3 = undefined !== sensitive && sensitive;
    const items = [];
    const combined = items.concat(tmp2.path);
    match = combined.reduce((acc, path) => {
      if (!path) {
        if ("" !== path) {
          return null;
        }
      }
      if (acc) {
        return acc;
      } else {
        const obj = { end, strict, sensitive };
        const sum = "" + obj.end + obj.strict + obj.sensitive;
        let tmp7 = closure_2_17[sum];
        if (!tmp7) {
          const obj2 = {};
          tmp6[sum] = obj2;
          tmp7 = obj2;
        }
        if (tmp7[path]) {
          let tmp10 = tmp7[path];
        } else {
          const items = [];
          const obj3 = { regexp: closure_2_5(path, items, obj), keys: items };
          tmp10 = obj3;
          if (closure_18 < 10000) {
            tmp7[path] = obj3;
            closure_18 = closure_18 + 1;
            tmp10 = obj3;
          }
        }
        ({ regexp, keys } = tmp10);
        match = regexp.exec(pathname);
        if (match) {
          const first = match[0];
          closure_0 = match.slice(1);
          if (!end) {
            const obj4 = { path, url: null, isExact: null, params: null };
            let str2 = "/";
            if ("/" !== path) {
              str2 = first;
            }
            obj4.url = str2;
            obj4.isExact = tmp15;
            obj4.params = keys.reduce((acc, name, index) => {
              acc[name.name] = closure_0[index];
              return acc;
            }, {});
            let tmp16 = obj4;
          } else {
            tmp16 = null;
          }
          return tmp16;
        } else {
          return null;
        }
      }
    }, null);
  }
  return match;
};
export const withRouter = function withRouter(displayName) {
  closure_0 = displayName;
  fn = function t(wrappedComponentRef) {
    wrappedComponentRef = wrappedComponentRef.wrappedComponentRef;
    const items = ["wrappedComponentRef"];
    if (null == wrappedComponentRef) {
      const obj2 = {};
    } else {
      const obj = {};
      const _Object = Object;
      const keys = Object.keys(wrappedComponentRef);
      let num3 = 0;
      if (0 < keys.length) {
        do {
          let tmp2 = keys[num3];
          if (0 > items.indexOf(tmp2)) {
            obj[tmp2] = wrappedComponentRef[tmp2];
          }
          num3 = num3 + 1;
        } while (num3 < keys.length);
      }
    }
    return <Consumer.Consumer>{(arg0) => {
      if (!arg0) {
        invariant(false);
      }
      return <closure_0 {......closure_7({}, obj2, arg0, { ref: wrappedComponentRef })} />;
    }}</Consumer.Consumer>;
  };
  fn.displayName = `withRouter(${displayName.displayName || displayName.name})`;
  fn.WrappedComponent = displayName;
  return module_4594(fn, displayName);
};