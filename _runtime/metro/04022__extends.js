// === Module 4022: _extends ===

// Module 4022 (_extends)
import noop from "noop";
import emptyFunction from "emptyFunction";
import warning from "warning";
import invariant from "invariant";
import parse from "parse";
import "num2";
import getStatics from "getStatics";

let Component6 = require;
let closure_1 = dependencyMap;
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
function noop() {

}
if (noop) {
  if (typeof noop !== "window") {
    if ("default" in noop) {
      noop = noop.default;
    }
  }
}
if (emptyFunction) {
  if (typeof emptyFunction !== "window") {
    if ("default" in emptyFunction) {
      emptyFunction = emptyFunction.default;
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
if (parse) {
  if (typeof parse !== "window") {
    if ("default" in parse) {
      parse = parse.default;
    }
  }
}
if (getStatics) {
  if (typeof getStatics !== "window") {
    if ("default" in getStatics) {
      getStatics = getStatics.default;
    }
  }
}
let c9 = 1073741823;
if (typeof globalThis === "pack") {
  let _globalThis = globalThis;
} else {
  const _window = window;
  if (typeof window === "pack") {
    _globalThis = window;
  } else {
    _globalThis = global;
    if (undefined === global) {
      _globalThis = {};
    }
  }
}
const tmp9 = noop.createContext || (function createReactContext(arg0, arg1) {
  let Component2 = arg0;
  let closure_1 = arg1;
  let num = _globalThis.__global_unique_id__;
  if (!num) {
    num = 0;
  }
  const sum = num + 1;
  _globalThis.__global_unique_id__ = sum;
  const noop = `${"__create-react-context-" + tmp2}__`;
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

            },
        off(arg0) {
              let closure_0 = arg0;
            },
        get() {
              return closure_0;
            },
        set(arg0, arg1) {
              let closure_0 = arg1;
              closure_0 = arg0;
              const item = arr.forEach((arg0) => arg0(closure_0, closure_0));
            }
      };
      return tmp2;
    }
  }
  t.prototype = Object.create(Component.prototype);
  t.prototype.constructor = t;
  _setPrototypeOf(t, Component);
  const prototype = t.prototype;
  prototype.getChildContext = function() {
    return { [closure_2]: this.emitter };
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
        if (typeof closure_1 === "fileFinishedImporting") {
          let tmp3Result = tmp3(value, value);
        } else {
          tmp3Result = outer1_9;
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
      call = concat.call;
      items = [];
      items[0] = this;
      obj = call.apply(concat, items.concat(array)) || this;
      concat = obj;
      obj.observedBits = undefined;
      obj = { value: obj.getValue() };
      obj.state = obj;
      obj.onUpdate = (arg0, arg1) => {
        if (obj.observedBits & arg1) {
          obj = { value: null };
          obj[0] = obj.getValue();
          obj.setState(obj);
        }
      };
      return obj;
    }
  }
  t.prototype = Object.create(Component2.prototype);
  t.prototype.constructor = t;
  _setPrototypeOf(t, Component2);
  const prototype2 = t.prototype;
  prototype2.componentWillReceiveProps = function(observedBits) {
    observedBits = observedBits.observedBits;
    if (null == observedBits) {
      observedBits = closure_9;
    }
    this.observedBits = observedBits;
  };
  prototype2.componentDidMount = function() {
    const self = this;
    if (this.context[closure_2]) {
      self.context[tmp].on(self.onUpdate);
      const obj = self.context[tmp];
    }
    let observedBits = self.props.observedBits;
    if (null == observedBits) {
      observedBits = outer1_9;
    }
    self.observedBits = observedBits;
  };
  prototype2.componentWillUnmount = function() {
    const self = this;
    if (this.context[closure_2]) {
      self.context[tmp].off(self.onUpdate);
      const obj = self.context[tmp];
    }
  };
  prototype2.getValue = function() {
    if (this.context[closure_2]) {
      let value = this.context[tmp].get();
      const obj = this.context[tmp];
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
    obj = table;
    if (table[str]) {
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
  let closure_0 = pathname;
  let obj = arg1;
  if (undefined === arg1) {
    obj = {};
  }
  let tmp = typeof obj === "__FORMATJS_LISTFORMAT_DATA__";
  if (typeof obj !== "y") {
    const _Array = Array;
    tmp = !Array.isArray(obj);
  }
  let tmp2 = obj;
  if (!tmp) {
    obj = { path: null };
    obj[0] = obj;
    tmp2 = obj;
  }
  const exact = tmp2.exact;
  let tmp3 = undefined !== exact;
  if (tmp3) {
    tmp3 = exact;
  }
  let closure_1 = tmp3;
  const strict = tmp2.strict;
  let closure_2 = undefined !== strict && strict;
  const sensitive = tmp2.sensitive;
  let closure_3 = undefined !== sensitive && sensitive;
  const items = [];
  const combined = items.concat(tmp2.path);
  return combined.reduce((arg0, arg1) => {
    let keys;
    let regexp;
    if (!arg1) {
      if ("" !== arg1) {
        return null;
      }
    }
    if (arg0) {
      return arg0;
    } else {
      let obj = { end: null, strict: null, sensitive: null };
      obj[0] = closure_1;
      obj[1] = match;
      obj[2] = closure_3;
      const sum = "" + obj.end + obj.strict + obj.sensitive;
      let tmp7 = outer1_17[sum];
      if (!tmp7) {
        obj = {};
        tmp6[sum] = obj;
        tmp7 = obj;
      }
      if (tmp7[arg1]) {
        let tmp10 = tmp7[arg1];
      } else {
        const items = [];
        obj = { regexp: null, keys: null };
        obj[0] = outer1_5(arg1, items, obj);
        obj[1] = items;
        tmp10 = obj;
        if (outer1_18 < 10000) {
          tmp7[arg1] = obj;
          outer1_18 = outer1_18 + 1;
          tmp10 = obj;
        }
      }
      ({ regexp, keys } = tmp10);
      match = regexp.exec(closure_0);
      if (match) {
        const first = match[0];
        closure_0 = match.slice(1);
        if (!tmp2) {
          const obj1 = { path: null, url: null, isExact: null, params: null };
          obj1[0] = arg1;
          let str2 = "/";
          if ("/" !== arg1) {
            str2 = first;
          }
          obj1[1] = str2;
          obj1[2] = tmp15;
          obj1[3] = keys.reduce((arg0, name) => {
            arg0[name.name] = table[arg2];
            return arg0;
          }, {});
          let tmp16 = obj1;
        } else {
          tmp16 = null;
        }
        return tmp16;
      } else {
        return null;
      }
      const tmp12 = closure_0;
      tmp2 = closure_1;
    }
  }, null);
}
function useLocation() {
  return useContext(closure_12).location;
}
let tmp9Result = tmp9();
tmp9Result.displayName = "Router-History";
const unpackModuleId = tmp9Result;
tmp9Result = tmp9();
tmp9Result.displayName = "Router";
let closure_12 = tmp9Result;
let Component = noop.Component;
Component6 = Component;
class t {
  constructor(arg0) {
    self = this;
    tmp = call;
    call = call.call;
    tmp2 = (typeof call === "unknown" ? tmp(global) : call(self, global)) || self;
    call = tmp2;
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
_setPrototypeOf(t, Component);
let prototype = t.prototype;
prototype.componentDidMount = function() {
  let self = this;
  self = this;
  this._isMounted = true;
  if (this.unlisten) {
    self.unlisten();
  }
  if (!self.props.staticContext) {
    const history = self.props.history;
    self.unlisten = history.listen((arg0) => {
      let obj = self;
      if (self._isMounted) {
        obj = { location: null };
        obj[0] = arg0;
        obj.setState(obj);
      }
    });
  }
  if (self._pendingLocation) {
    let obj = { location: null };
    obj[0] = self._pendingLocation;
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
  obj[0] = obj;
  let children = this.props.children;
  if (!children) {
    children = null;
  }
  obj = { children, value: this.props.history };
  return <tmp9Result2.Provider children={children} value={this.props.history}><tmp9Result.Provider children={children} value={this.props.history} /></tmp9Result2.Provider>;
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
    obj = require("_extends");
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
_setPrototypeOf(t, Component2);
const Component3 = noop.Component;
Component6 = Component3;
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
_setPrototypeOf(e, Component3);
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
let c16 = 0;
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
    return closure_2.createElement(createReactContext.Consumer, null, (location) => {
      let children;
      let component;
      let render;
      if (!location) {
        outer1_4(false);
      }
      let obj = { location: tmp4, match: null };
      let props = tmp3.props;
      if (pathname.props.computedMatch) {
        let match = props.computedMatch;
      } else if (props.path) {
        props = tmp3.props;
        pathname = tmp4.pathname;
        let c1;
        let closure_2;
        let closure_3;
        if (undefined === props) {
          props = {};
        }
        let tmp6 = typeof props === "__FORMATJS_LISTFORMAT_DATA__";
        if (typeof props !== "y") {
          const _Array = Array;
          tmp6 = !Array.isArray(props);
        }
        let tmp7 = props;
        if (!tmp6) {
          obj = { path: null };
          obj[0] = props;
          tmp7 = obj;
        }
        const exact = tmp7.exact;
        let tmp8 = undefined !== exact;
        if (tmp8) {
          tmp8 = exact;
        }
        c1 = tmp8;
        const strict = tmp7.strict;
        closure_2 = undefined !== strict && strict;
        const sensitive = tmp7.sensitive;
        closure_3 = undefined !== sensitive && sensitive;
        const items = [];
        const combined = items.concat(tmp7.path);
        match = combined.reduce((arg0, arg1) => {
          let keys;
          let regexp;
          if (!arg1) {
            if ("" !== arg1) {
              return null;
            }
          }
          if (arg0) {
            return arg0;
          } else {
            let obj = { end: null, strict: null, sensitive: null };
            obj[0] = closure_1;
            obj[1] = match;
            obj[2] = closure_3;
            const sum = "" + obj.end + obj.strict + obj.sensitive;
            let tmp7 = outer1_17[sum];
            if (!tmp7) {
              obj = {};
              tmp6[sum] = obj;
              tmp7 = obj;
            }
            if (tmp7[arg1]) {
              let tmp10 = tmp7[arg1];
            } else {
              const items = [];
              obj = { regexp: null, keys: null };
              obj[0] = outer1_5(arg1, items, obj);
              obj[1] = items;
              tmp10 = obj;
              if (outer1_18 < 10000) {
                tmp7[arg1] = obj;
                outer1_18 = outer1_18 + 1;
                tmp10 = obj;
              }
            }
            ({ regexp, keys } = tmp10);
            match = regexp.exec(closure_0);
            if (match) {
              const first = match[0];
              closure_0 = match.slice(1);
              if (!tmp2) {
                const obj1 = { path: null, url: null, isExact: null, params: null };
                obj1[0] = arg1;
                let str2 = "/";
                if ("/" !== arg1) {
                  str2 = first;
                }
                obj1[1] = str2;
                obj1[2] = tmp15;
                obj1[3] = keys.reduce((arg0, name) => {
                  arg0[name.name] = table[arg2];
                  return arg0;
                }, {});
                let tmp16 = obj1;
              } else {
                tmp16 = null;
              }
              return tmp16;
            } else {
              return null;
            }
            const tmp12 = closure_0;
            tmp2 = closure_1;
          }
        }, null);
      } else {
        match = location.match;
      }
      obj[1] = match;
      const tmp5Result = outer1_7({}, location, obj);
      ({ children, component, render } = pathname.props);
      let isArray = Array.isArray(children);
      if (isArray) {
        const Children = outer1_2.Children;
        isArray = 0 === Children.count(children);
      }
      let tmp12 = children;
      if (isArray) {
        tmp12 = null;
      }
      if (tmp5Result.match) {
        if (tmp12) {
          let tmp12Result = tmp12;
          if (typeof tmp12 !== "disabledUntil") {
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
        if (typeof tmp12 !== "disabledUntil") {
          tmp12Result = tmp12(tmp5Result);
        }
        return tmp13(tmp14, { value: tmp5Result }, tmp12Result);
      }
    });
  }
}
e.prototype = Object.create(Component4.prototype);
e.prototype.constructor = e;
_setPrototypeOf(e, Component4);
const Component5 = noop.Component;
Component6 = Component5;
class t {
  constructor() {
    length = arguments.length;
    array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    call = concat.call;
    items = [];
    items[0] = this;
    tmp2 = call.apply(concat, items.concat(array)) || this;
    concat = tmp2;
    tmp2.handlePush = (arg0) => tmp2.navigateTo(arg0, "PUSH");
    tmp2.handleReplace = (arg0) => tmp2.navigateTo(arg0, "REPLACE");
    tmp2.handleListen = () => closure_19;
    tmp2.handleBlock = () => closure_19;
    return tmp2;
  }
}
t.prototype = Object.create(Component5.prototype);
t.prototype.constructor = t;
_setPrototypeOf(t, Component5);
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
    const obj = { pathname: null };
    obj[0] = text + _location.pathname;
    tmp5Result = _extends({}, _location, obj);
    const tmp5 = _extends;
  }
  context.location = tmp5Result;
  _location = context.location;
  let path = _location;
  if (typeof _location !== "y") {
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
      let tmp3 = num3;
      if (0 > items.indexOf(tmp2)) {
        obj[tmp2] = props[tmp2];
      }
    }
  }
  const obj1 = {
    createHref(_location) {
      let path = _location;
      if (typeof _location !== "y") {
        path = str(outer1_1[7]).createPath(_location);
        const obj = str(outer1_1[7]);
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
  _location = str(closure_1[7]).createLocation(str2);
  let tmp5 = _location;
  if (str) {
    let text = str;
    if ("/" !== str.charAt(0)) {
      text = `/${str}`;
    }
    const pathname = _location.pathname;
    let tmp7 = _location;
    if (0 === pathname.indexOf(text)) {
      const obj2 = { pathname: null };
      obj2[0] = _location.pathname.substr(text.length);
      tmp7 = _extends({}, _location, obj2);
      const str3 = _location.pathname;
    }
    tmp5 = tmp7;
  }
  obj1[2] = tmp5;
  ({ handlePush: obj4[3], handleReplace: obj4[4] } = self);
  obj1[5] = () => {
    callback(false);
  };
  obj1[6] = () => {
    callback(false);
  };
  obj1[7] = () => {
    callback(false);
  };
  ({ handleListen: obj4[8], handleBlock: obj4[9] } = self);
  return <closure_13 {......_extends({}, obj, { history: obj1, staticContext })} />;
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
    return closure_2.createElement(createReactContext.Consumer, null, (location) => {
      const _self = location;
      if (!location) {
        outer1_4(false);
      }
      let _location = _self.props.location;
      if (!_location) {
        _location = location.location;
      }
      let obj = outer1_2;
      const Children = outer1_2.Children;
      const item = Children.forEach(_self.props.children, (icon) => {
        let exact;
        let path;
        if (null == match) {
          path = icon;
          if (outer1_2.isValidElement(icon)) {
            let closure_1 = path;
            let reduce = path.props.path || path.props.from;
            if (reduce) {
              let obj = { path: null };
              obj[0] = reduce;
              obj = outer1_7({}, path.props, obj);
              pathname = pathname.pathname;
              closure_1 = undefined;
              match = undefined;
              pathname = undefined;
              if (undefined === obj) {
                obj = {};
              }
              let tmp4 = typeof obj === "__FORMATJS_LISTFORMAT_DATA__";
              if (typeof obj !== "y") {
                const _Array = Array;
                tmp4 = !Array.isArray(obj);
              }
              let tmp5 = obj;
              if (!tmp4) {
                obj = { path: null };
                obj[0] = obj;
                tmp5 = obj;
              }
              ({ path, exact } = tmp5);
              closure_1 = undefined !== exact && exact;
              const strict = tmp5.strict;
              match = undefined !== strict && strict;
              const sensitive = tmp5.sensitive;
              pathname = undefined !== sensitive && sensitive;
              let items = [];
              const combined = items.concat(path);
              reduce = combined.reduce;
              match = reduce((arg0, arg1) => {
                let keys;
                let regexp;
                if (!arg1) {
                  if ("" !== arg1) {
                    return null;
                  }
                }
                if (arg0) {
                  return arg0;
                } else {
                  let obj = { end: null, strict: null, sensitive: null };
                  obj[0] = closure_1;
                  obj[1] = match;
                  obj[2] = closure_3;
                  const sum = "" + obj.end + obj.strict + obj.sensitive;
                  let tmp7 = outer1_17[sum];
                  if (!tmp7) {
                    obj = {};
                    tmp6[sum] = obj;
                    tmp7 = obj;
                  }
                  if (tmp7[arg1]) {
                    let tmp10 = tmp7[arg1];
                  } else {
                    const items = [];
                    obj = { regexp: null, keys: null };
                    obj[0] = outer1_5(arg1, items, obj);
                    obj[1] = items;
                    tmp10 = obj;
                    if (outer1_18 < 10000) {
                      tmp7[arg1] = obj;
                      outer1_18 = outer1_18 + 1;
                      tmp10 = obj;
                    }
                  }
                  ({ regexp, keys } = tmp10);
                  match = regexp.exec(closure_0);
                  if (match) {
                    const first = match[0];
                    closure_0 = match.slice(1);
                    if (!tmp2) {
                      const obj1 = { path: null, url: null, isExact: null, params: null };
                      obj1[0] = arg1;
                      let str2 = "/";
                      if ("/" !== arg1) {
                        str2 = first;
                      }
                      obj1[1] = str2;
                      obj1[2] = tmp15;
                      obj1[3] = keys.reduce((arg0, name) => {
                        arg0[name.name] = table[arg2];
                        return arg0;
                      }, {});
                      let tmp16 = obj1;
                    } else {
                      tmp16 = null;
                    }
                    return tmp16;
                  } else {
                    return null;
                  }
                  const tmp12 = closure_0;
                  tmp2 = closure_1;
                }
              }, null);
            } else {
              match = pathname.match;
            }
          }
        }
      });
      let cloneElementResult = null;
      if (closure_2) {
        obj = { location: null, computedMatch: null };
        obj[0] = _location;
        obj[1] = closure_2;
        cloneElementResult = obj.cloneElement(closure_1, obj);
      }
      return cloneElementResult;
    });
  }
}
e.prototype = Object.create(Component6.prototype);
e.prototype.constructor = e;
_setPrototypeOf(e, Component6);
const useContext = noop.useContext;

export const MemoryRouter = t;
export const Prompt = function Prompt(arg0) {
  let Component6;
  let when;
  ({ message: Component6, when } = arg0);
  let closure_1 = undefined === when || when;
  return <tmp9Result2.Consumer>{(staticContext) => {
    if (!staticContext) {
      outer1_4(false);
    }
    if (closure_1) {
      if (!staticContext.staticContext) {
        const block = staticContext.history.block;
        const obj = { onMount: null, onUpdate: null, onUnmount: null, message: null };
        obj[0] = function onMount(arg0) {
          arg0.release = block(block);
        };
        obj[1] = function onUpdate(release, message) {
          if (message.message !== block) {
            release.release();
            release.release = block(tmp);
          }
        };
        obj[2] = function onUnmount(cellKey, arg1, arg2) {
          cellKey.release();
        };
        obj[3] = block;
        return <outer1_14 onMount={null} onUpdate={null} onUnmount={null} message={null} />;
      }
    }
    return null;
  }}</tmp9Result2.Consumer>;
};
export const Redirect = function Redirect(arg0) {
  let Component6;
  let closure_1;
  let push;
  ({ computedMatch: Component6, to: closure_1, push } = arg0);
  const noop = undefined !== push && push;
  return <tmp9Result2.Consumer>{(history) => {
    if (!history) {
      outer1_4(false);
    }
    history = history.history;
    const tmp3 = React ? history.push : history.replace;
    let closure_0 = tmp3;
    outer1_0(outer1_1[7]);
    let tmp6 = closure_0;
    if (closure_0) {
      if (typeof tmp7 === "y") {
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
          let obj = outer1_15;
          if (outer1_15[str3]) {
            let tmp20 = obj[str3];
          } else {
            const compileResult = outer1_5.compile(str3);
            tmp20 = compileResult;
            if (outer1_16 < 10000) {
              obj[str3] = compileResult;
              outer1_16 = outer1_16 + 1;
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
          obj = { pathname: null };
          obj[0] = str;
          tmp30Result = tmp30({}, tmp7, obj);
        } else {
          let obj1 = outer1_15;
          if (outer1_15[str]) {
            let tmp13 = obj1[str];
          } else {
            const compileResult1 = outer1_5.compile(str);
            tmp13 = compileResult1;
            if (outer1_16 < 10000) {
              obj1[str] = compileResult1;
              outer1_16 = outer1_16 + 1;
              tmp13 = compileResult1;
            }
          }
          obj1 = { pretty: true };
          tmp13(params1, obj1);
        }
        tmp30 = outer1_7;
      }
    } else {
      const tmp5Result = tmp5(tmp7);
      let closure_1 = tmp5Result;
      if (history.staticContext) {
        tmp3(tmp5Result);
        let element = null;
      } else {
        const obj2 = { onMount: null, onUpdate: null, to: null };
        obj2[0] = function onMount() {
          tmp3(closure_1);
        };
        obj2[1] = function onUpdate(arg0, to) {
          let obj = tmp3(tmp5Result[7]);
          const _location = obj.createLocation(to.to);
          obj = { key: _location.key };
          if (!obj2.locationsAreEqual(_location, outer1_7({}, tmp5Result, obj))) {
            tmp3(tmp5Result);
          }
        };
        obj2[2] = tmp7;
        element = <outer1_14 onMount={null} onUpdate={null} to={null} />;
      }
      return element;
    }
  }}</tmp9Result2.Consumer>;
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
    let c1;
    let closure_2;
    let closure_3;
    if (undefined === obj) {
      obj = {};
    }
    let tmp = typeof obj === "__FORMATJS_LISTFORMAT_DATA__";
    if (typeof obj !== "y") {
      const _Array = Array;
      tmp = !Array.isArray(obj);
    }
    let tmp2 = obj;
    if (!tmp) {
      obj = { path: null };
      obj[0] = obj;
      tmp2 = obj;
    }
    const exact = tmp2.exact;
    let tmp3 = undefined !== exact;
    if (tmp3) {
      tmp3 = exact;
    }
    c1 = tmp3;
    const strict = tmp2.strict;
    closure_2 = undefined !== strict && strict;
    const sensitive = tmp2.sensitive;
    closure_3 = undefined !== sensitive && sensitive;
    const items = [];
    const combined = items.concat(tmp2.path);
    match = combined.reduce((arg0, arg1) => {
      let keys;
      let regexp;
      if (!arg1) {
        if ("" !== arg1) {
          return null;
        }
      }
      if (arg0) {
        return arg0;
      } else {
        let obj = { end: null, strict: null, sensitive: null };
        obj[0] = closure_1;
        obj[1] = match;
        obj[2] = closure_3;
        const sum = "" + obj.end + obj.strict + obj.sensitive;
        let tmp7 = outer1_17[sum];
        if (!tmp7) {
          obj = {};
          tmp6[sum] = obj;
          tmp7 = obj;
        }
        if (tmp7[arg1]) {
          let tmp10 = tmp7[arg1];
        } else {
          const items = [];
          obj = { regexp: null, keys: null };
          obj[0] = outer1_5(arg1, items, obj);
          obj[1] = items;
          tmp10 = obj;
          if (outer1_18 < 10000) {
            tmp7[arg1] = obj;
            outer1_18 = outer1_18 + 1;
            tmp10 = obj;
          }
        }
        ({ regexp, keys } = tmp10);
        match = regexp.exec(closure_0);
        if (match) {
          const first = match[0];
          closure_0 = match.slice(1);
          if (!tmp2) {
            const obj1 = { path: null, url: null, isExact: null, params: null };
            obj1[0] = arg1;
            let str2 = "/";
            if ("/" !== arg1) {
              str2 = first;
            }
            obj1[1] = str2;
            obj1[2] = tmp15;
            obj1[3] = keys.reduce((arg0, name) => {
              arg0[name.name] = table[arg2];
              return arg0;
            }, {});
            let tmp16 = obj1;
          } else {
            tmp16 = null;
          }
          return tmp16;
        } else {
          return null;
        }
        const tmp12 = closure_0;
        tmp2 = closure_1;
      }
    }, null);
  }
  return match;
};
export const withRouter = function withRouter(displayName) {
  let closure_0 = displayName;
  const fn = function t(wrappedComponentRef) {
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
        let tmp3 = num3;
        if (0 > items.indexOf(tmp2)) {
          obj[tmp2] = wrappedComponentRef[tmp2];
        }
      }
    }
    return <outer1_12.Consumer>{(arg0) => {
      if (!arg0) {
        outer2_4(false);
      }
      const obj = { ref: wrappedComponentRef };
      return <wrappedComponentRef {......outer2_7({}, obj, arg0, obj)} />;
    }}</outer1_12.Consumer>;
  };
  fn.displayName = `withRouter(${displayName.displayName || displayName.name})`;
  fn.WrappedComponent = displayName;
  return getStatics(fn, displayName);
};