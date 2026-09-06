// _runtime/metro/04393__.js
import noop from "00019__.js";
import emptyFunction from "04389__.js";
import warning from "../01107_warning.js";
import invariant from "../01108_invariant.js";
import parse from "04394__.js";
import AsyncMode from "../04396_AsyncMode.js";
import 04398__ from "04398__.js";

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
if (noop) {
  if (typeof noop === "object") {
    if ("default" in noop) {
      noop = noop.default;
    }
  }
}
if (emptyFunction) {
  if (typeof emptyFunction === "object") {
    if ("default" in emptyFunction) {
      emptyFunction = emptyFunction.default;
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
if (parse) {
  if (typeof parse === "object") {
    if ("default" in parse) {
      parse = parse.default;
    }
  }
}
if (module_4398) {
  if (typeof module_4398 === "object") {
    if ("default" in module_4398) {
      module_4398 = module_4398.default;
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
              closure_1 = closure_1.filter(/* F125579 */ function() { ... });
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
      value = value.value;
      if (value === value) {
        let tmp2 = 0 !== value;
        if (!tmp2) {
          tmp2 = 1 / value === 1 / value;
        }
        let tmp = tmp2;
      } else {
        tmp = value != value && value != value;
      }
      if (!tmp) {
        if (typeof closure_1 === "function") {
          let tmp3Result = tmp3(value, value);
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
  let obj = { [`${"__create-react-context-" + tmp2}__`]: emptyFunction.object.isRequired };
  t.childContextTypes = obj;
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
      obj = { value: obj.getValue() };
      obj.state = obj;
      obj.onUpdate = (arg0, arg1) => {
        if (obj.observedBits & arg1) {
          obj = { value: null };
          obj.value = obj.getValue();
          obj.setState(obj);
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
  obj = { Provider: t, Consumer: t };
  return obj;
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
    obj = closure_15;
    if (closure_15[str]) {
      let tmp4 = obj[str];
    } else {
      const compileResult = parse.compile(str);
      tmp4 = compileResult;
      if (closure_16 < 10000) {
        obj[str] = compileResult;
        closure_16 = closure_16 + 1;
        tmp4 = compileResult;
      }
    }
    obj = { pretty: true };
    tmp4(obj, obj);
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
    obj = { path: null };
    obj.path = obj;
    tmp2 = obj;
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
      let obj = { end, strict, sensitive };
      const sum = "" + obj.end + obj.strict + obj.sensitive;
      let tmp7 = closure_2_17[sum];
      if (!tmp7) {
        obj = {};
        tmp6[sum] = obj;
        tmp7 = obj;
      }
      if (tmp7[path]) {
        let tmp10 = tmp7[path];
      } else {
        const items = [];
        obj = { regexp: null, keys: null };
        obj.regexp = closure_2_5(path, items, obj);
        obj.keys = items;
        tmp10 = obj;
        if (closure_18 < 10000) {
          tmp7[path] = obj;
          closure_18 = closure_18 + 1;
          tmp10 = obj;
        }
      }
      ({ regexp, keys } = tmp10);
      match = regexp.exec(pathname);
      if (match) {
        const first = match[0];
        closure_0 = match.slice(1);
        if (!tmp2) {
          const obj1 = { path, url: null, isExact: null, params: null };
          let str2 = "/";
          if ("/" !== path) {
            str2 = first;
          }
          obj1.url = str2;
          obj1.isExact = tmp15;
          obj1.params = keys.reduce((acc, name, index) => {
            acc[name.name] = closure_0[index];
            return acc;
          }, {});
          let tmp16 = obj1;
        } else {
          tmp16 = null;
        }
        return tmp16;
      } else {
        return null;
      }
      tmp2 = end;
    }
  }, null);
}
function useLocation() {
  return useContext(closure_12).location;
}
let tmp9Result = tmp9();
tmp9Result.displayName = "Router-History";
const redux = tmp9Result;
tmp9Result = tmp9();
tmp9Result.displayName = "Router";
const redux2 = tmp9Result;
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
      let obj = self;
      if (self._isMounted) {
        obj = { location };
        obj.setState(obj);
      }
    });
  }
  if (self._pendingLocation) {
    let obj = { location: self._pendingLocation };
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
  let obj = { value: null };
  obj = { history: this.props.history, location: this.state.location, match: closure_1.computeRootMatch(this.state.location.pathname), staticContext: this.props.staticContext };
  obj.value = obj;
  let children = this.props.children;
  if (!children) {
    children = null;
  }
  obj = { children, value: this.props.history };
  return <redux2.Provider children={children} value={this.props.history}><redux.Provider children={children} value={this.props.history} /></redux2.Provider>;
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
      let obj = { location: tmp4, match: null };
      let props = tmp3.props;
      if (self.props.computedMatch) {
        let match = props.computedMatch;
      } else if (props.path) {
        props = tmp3.props;
        const pathname = tmp4.pathname;
        let exact;
        closure_2 = undefined;
        closure_3 = undefined;
        if (undefined === props) {
          props = {};
        }
        let tmp6 = typeof props !== "string";
        if (typeof props !== "string") {
          const _Array = Array;
          tmp6 = !Array.isArray(props);
        }
        let tmp7 = props;
        if (!tmp6) {
          obj = { path: props };
          tmp7 = obj;
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
            let obj = { end, strict, sensitive };
            const sum = "" + obj.end + obj.strict + obj.sensitive;
            let tmp7 = closure_2_17[sum];
            if (!tmp7) {
              obj = {};
              tmp6[sum] = obj;
              tmp7 = obj;
            }
            if (tmp7[path]) {
              let tmp10 = tmp7[path];
            } else {
              const items = [];
              obj = { regexp: null, keys: null };
              obj.regexp = closure_2_5(path, items, obj);
              obj.keys = items;
              tmp10 = obj;
              if (closure_18 < 10000) {
                tmp7[path] = obj;
                closure_18 = closure_18 + 1;
                tmp10 = obj;
              }
            }
            ({ regexp, keys } = tmp10);
            match = regexp.exec(pathname);
            if (match) {
              const first = match[0];
              closure_0 = match.slice(1);
              if (!tmp2) {
                const obj1 = { path, url: null, isExact: null, params: null };
                let str2 = "/";
                if ("/" !== path) {
                  str2 = first;
                }
                obj1.url = str2;
                obj1.isExact = tmp15;
                obj1.params = keys.reduce((acc, name, index) => {
                  acc[name.name] = closure_0[index];
                  return acc;
                }, {});
                let tmp16 = obj1;
              } else {
                tmp16 = null;
              }
              return tmp16;
            } else {
              return null;
            }
            tmp2 = end;
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
        tmp12Result = null;
        if (typeof tmp12 === "function") {
          tmp12Result = tmp12(tmp5Result);
        }
        return tmp13(tmp14, { value: tmp5Result }, tmp12Result);
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
  let _location = Component6(closure_1[7]).createLocation(tmp4Result);
  let tmp5Result = _location;
  if (str) {
    let text = str;
    if ("/" !== str.charAt(0)) {
      text = `/${str}`;
    }
    const obj = { pathname: text + _location.pathname };
    tmp5Result = closure_7({}, _location, obj);
  }
  context.location = tmp5Result;
  _location = context.location;
  let path = _location;
  if (typeof _location !== "string") {
    path = Component6(closure_1[7]).createPath(_location);
    const tmpResult = Component6(closure_1[7]);
  }
  context.url = path;
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
  let _location = props.location;
  let str2 = "/";
  if (undefined !== _location) {
    str2 = _location;
  }
  const items = ["basename", "context", "location"];
  if (null == props) {
    let obj = {};
  } else {
    obj = {};
    const _Object = Object;
    const keys = Object.keys(props);
    for (let num3 = 0; num3 < keys.length; num3 = num3 + 1) {
      let tmp2 = keys[num3];
      if (0 > items.indexOf(tmp2)) {
        obj[tmp2] = props[tmp2];
      }
    }
  }
  const obj1 = {
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
  _location = str(dependencyMap[7]).createLocation(str2);
  let tmp5 = _location;
  if (str) {
    let text = str;
    if ("/" !== str.charAt(0)) {
      text = `/${str}`;
    }
    const pathname = _location.pathname;
    let tmp7 = _location;
    if (0 === pathname.indexOf(text)) {
      const obj2 = { pathname: _location.pathname.substr(text.length) };
      tmp7 = closure_7({}, _location, obj2);
    }
    tmp5 = tmp7;
  }
  obj1.location = tmp5;
  ({ handlePush: obj4.push, handleReplace: obj4.replace } = self);
  obj1.go = () => {
    invariant(false);
  };
  obj1.goBack = () => {
    invariant(false);
  };
  obj1.goForward = () => {
    invariant(false);
  };
  ({ handleListen: obj4.listen, handleBlock: obj4.block } = self);
  return <closure_13 {......closure_7({}, obj, { history: obj1, staticContext })} />;
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
      let obj = noop;
      const Children = noop.Children;
      const item = Children.forEach(self.props.children, (icon) => {
        if (null == match) {
          path = icon;
          if (validElement.isValidElement(icon)) {
            let reduce = path.props.path || path.props.from;
            if (reduce) {
              let obj = { path: reduce };
              obj = closure_2_7({}, path.props, obj);
              const pathname = _location.pathname;
              let end;
              let strict;
              let sensitive;
              if (undefined === obj) {
                obj = {};
              }
              let tmp4 = typeof obj !== "string";
              if (typeof obj !== "string") {
                const _Array = Array;
                tmp4 = !Array.isArray(obj);
              }
              let tmp5 = obj;
              if (!tmp4) {
                obj = { path: null };
                obj.path = obj;
                tmp5 = obj;
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
                  let obj = { end, strict, sensitive };
                  const sum = "" + obj.end + obj.strict + obj.sensitive;
                  let tmp7 = closure_2_17[sum];
                  if (!tmp7) {
                    obj = {};
                    tmp6[sum] = obj;
                    tmp7 = obj;
                  }
                  if (tmp7[path]) {
                    let tmp10 = tmp7[path];
                  } else {
                    const items = [];
                    obj = { regexp: null, keys: null };
                    obj.regexp = closure_2_5(path, items, obj);
                    obj.keys = items;
                    tmp10 = obj;
                    if (closure_18 < 10000) {
                      tmp7[path] = obj;
                      closure_18 = closure_18 + 1;
                      tmp10 = obj;
                    }
                  }
                  ({ regexp, keys } = tmp10);
                  match = regexp.exec(pathname);
                  if (match) {
                    const first = match[0];
                    closure_0 = match.slice(1);
                    if (!tmp2) {
                      const obj1 = { path, url: null, isExact: null, params: null };
                      let str2 = "/";
                      if ("/" !== path) {
                        str2 = first;
                      }
                      obj1.url = str2;
                      obj1.isExact = tmp15;
                      obj1.params = keys.reduce((acc, name, index) => {
                        acc[name.name] = closure_0[index];
                        return acc;
                      }, {});
                      let tmp16 = obj1;
                    } else {
                      tmp16 = null;
                    }
                    return tmp16;
                  } else {
                    return null;
                  }
                  tmp2 = end;
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
        obj = { location: _location, computedMatch: match };
        cloneElementResult = obj.cloneElement(path, obj);
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
    Component6(1101);
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
          obj = { pathname: str };
          tmp30Result = tmp30({}, tmp7, obj);
        } else {
          let obj1 = dependencyMap2;
          if (dependencyMap2[str]) {
            let tmp13 = obj1[str];
          } else {
            const compileResult1 = parse.compile(str);
            tmp13 = compileResult1;
            if (closure_16 < 10000) {
              obj1[str] = compileResult1;
              closure_16 = closure_16 + 1;
              tmp13 = compileResult1;
            }
          }
          obj1 = { pretty: true };
          tmp13(params1, obj1);
        }
        tmp30 = closure_7;
      }
    } else {
      const tmp5Result = tmp5(tmp7);
      dependencyMap = tmp5Result;
      if (history.staticContext) {
        tmp3(tmp5Result);
        let element = null;
      } else {
        const obj2 = {
          onMount() {
                closure_0(closure_1);
              },
          onUpdate(arg0, to) {
                let obj = Component6(1101);
                const _location = obj.createLocation(to.to);
                obj = { key: _location.key };
                if (!obj2.locationsAreEqual(_location, closure_2_7({}, closure_1, obj))) {
                  closure_0(closure_1);
                }
              },
          to: tmp7
        };
        element = <closure_14 onMount={function onMount() {
          closure_0(closure_1);
        }} onUpdate={function onUpdate(arg0, to) {
          let obj = Component6(1101);
          const _location = obj.createLocation(to.to);
          obj = { key: _location.key };
          if (!obj2.locationsAreEqual(_location, closure_2_7({}, closure_1, obj))) {
            closure_0(closure_1);
          }
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
export const __RouterContext = tmp9Result;
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
      obj = { path: null };
      obj.path = obj;
      tmp2 = obj;
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
        let obj = { end, strict, sensitive };
        const sum = "" + obj.end + obj.strict + obj.sensitive;
        let tmp7 = closure_2_17[sum];
        if (!tmp7) {
          obj = {};
          tmp6[sum] = obj;
          tmp7 = obj;
        }
        if (tmp7[path]) {
          let tmp10 = tmp7[path];
        } else {
          const items = [];
          obj = { regexp: null, keys: null };
          obj.regexp = closure_2_5(path, items, obj);
          obj.keys = items;
          tmp10 = obj;
          if (closure_18 < 10000) {
            tmp7[path] = obj;
            closure_18 = closure_18 + 1;
            tmp10 = obj;
          }
        }
        ({ regexp, keys } = tmp10);
        match = regexp.exec(pathname);
        if (match) {
          const first = match[0];
          closure_0 = match.slice(1);
          if (!tmp2) {
            const obj1 = { path, url: null, isExact: null, params: null };
            let str2 = "/";
            if ("/" !== path) {
              str2 = first;
            }
            obj1.url = str2;
            obj1.isExact = tmp15;
            obj1.params = keys.reduce((acc, name, index) => {
              acc[name.name] = closure_0[index];
              return acc;
            }, {});
            let tmp16 = obj1;
          } else {
            tmp16 = null;
          }
          return tmp16;
        } else {
          return null;
        }
        tmp2 = end;
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
      let obj = {};
    } else {
      obj = {};
      const _Object = Object;
      const keys = Object.keys(wrappedComponentRef);
      for (let num3 = 0; num3 < keys.length; num3 = num3 + 1) {
        let tmp2 = keys[num3];
        if (0 > items.indexOf(tmp2)) {
          obj[tmp2] = wrappedComponentRef[tmp2];
        }
      }
    }
    return <Consumer.Consumer>{(arg0) => {
      if (!arg0) {
        invariant(false);
      }
      obj = { ref: wrappedComponentRef };
      return <closure_0 {......closure_7({}, obj, arg0, obj)} />;
    }}</Consumer.Consumer>;
  };
  fn.displayName = `withRouter(${displayName.displayName || displayName.name})`;
  fn.WrappedComponent = displayName;
  return module_4398(fn, displayName);
};