// _runtime/14535_state.js
import _mod14474 from "metro/14474__.js";
import _mod14490 from "metro/14490__.js";
import _mod14499 from "metro/14499__.js";
import _mod14519 from "metro/14519__.js";
import _mod14530 from "metro/14530__.js";
import _mod14536 from "metro/14536__.js";
import _mod14537 from "metro/14537__.js";

const require = globalThis.__r;

if (!_mod14536) {
  if (!_mod14490.state) {
    const tmp = _mod14537("state");
    let closure_6 = tmp;
    _mod14519[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("metro/14497__.js")(facade, closure_6)) {
        const typeError = new _mod14474.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14530(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("metro/14497__.js")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("metro/14497__.js")(arg0, closure_6);
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
        if (_mod14499(arg0)) {
          const tmp4 = fn5(arg0);
          if (tmp4.type === closure_0) {
            return tmp4;
          }
        }
        const typeError = new _mod14474.TypeError("Incompatible receiver, " + closure_0 + " required");
        throw typeError;
      };
    },
  };
  module.exports = obj;
}
let state = _mod14490.state;
if (!state) {
  const _module = _mod14490;
  const weakMap = new _mod14474.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod14474.TypeError("Object already initialized");
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
