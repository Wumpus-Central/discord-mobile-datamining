// _runtime/15267_state.js
import _mod15206 from "metro/15206__.js";
import _mod15222 from "metro/15222__.js";
import _mod15231 from "metro/15231__.js";
import _mod15251 from "metro/15251__.js";
import _mod15262 from "metro/15262__.js";
import _mod15268 from "metro/15268__.js";
import _mod15269 from "metro/15269__.js";

const require = globalThis.__r;

if (!_mod15268) {
  if (!_mod15222.state) {
    const tmp = _mod15269("state");
    let closure_6 = tmp;
    _mod15251[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("metro/15229__.js")(facade, closure_6)) {
        const typeError = new _mod15206.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15262(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("metro/15229__.js")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("metro/15229__.js")(arg0, closure_6);
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
        if (_mod15231(arg0)) {
          const tmp4 = fn5(arg0);
          if (tmp4.type === closure_0) {
            return tmp4;
          }
        }
        const typeError = new _mod15206.TypeError("Incompatible receiver, " + closure_0 + " required");
        throw typeError;
      };
    },
  };
  module.exports = obj;
}
let state = _mod15222.state;
if (!state) {
  const _module = _mod15222;
  const weakMap = new _mod15206.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod15206.TypeError("Object already initialized");
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
