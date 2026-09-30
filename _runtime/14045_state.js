// _runtime/14045_state.js
import _mod13984 from "metro/13984__.js";
import _mod14000 from "metro/14000__.js";
import _mod14009 from "metro/14009__.js";
import _mod14029 from "metro/14029__.js";
import _mod14040 from "metro/14040__.js";
import _mod14046 from "metro/14046__.js";
import _mod14047 from "metro/14047__.js";

const require = globalThis.__r;

if (!_mod14046) {
  if (!_mod14000.state) {
    const tmp = _mod14047("state");
    let closure_6 = tmp;
    _mod14029[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("metro/14007__.js")(facade, closure_6)) {
        const typeError = new _mod13984.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14040(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("metro/14007__.js")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("metro/14007__.js")(arg0, closure_6);
    };
    let fn6 = fn3;
  }
  const obj = {
    set: fn,
    get: fn2,
    has: fn3,
    enforce(toString) {
      if (fn6(toString)) {
        let tmp2 = fn5(toString);
      } else {
        tmp2 = fn4(toString, {});
      }
      return tmp2;
    },
    getterFor(arg0) {
      closure_0 = arg0;
      return (arg0) => {
        if (_mod14009(arg0)) {
          const tmp4 = fn5(arg0);
          if (tmp4.type === closure_0) {
            return tmp4;
          }
        }
        const typeError = new _mod13984.TypeError("Incompatible receiver, " + closure_0 + " required");
        throw typeError;
      };
    },
  };
  module.exports = obj;
}
let state = _mod14000.state;
if (!state) {
  const _module = _mod14000;
  const weakMap = new _mod13984.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod13984.TypeError("Object already initialized");
    throw typeError;
  } else {
    arg1.facade = facade;
    const result = state.set(facade, arg1);
    return arg1;
  }
};
fn5 = function n(arg0) {
  return state.get(arg0) || {};
};
fn6 = function u(arg0) {
  return state.has(arg0);
};
fn3 = fn6;
fn2 = fn5;
fn = fn4;
