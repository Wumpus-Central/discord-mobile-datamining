// _runtime/15312_state.js
import _mod15251 from "metro/15251__.js";
import _mod15267 from "metro/15267__.js";
import _mod15276 from "metro/15276__.js";
import _mod15296 from "metro/15296__.js";
import _mod15307 from "metro/15307__.js";
import _mod15313 from "metro/15313__.js";
import _mod15314 from "metro/15314__.js";

const require = globalThis.__r;

if (!_mod15313) {
  if (!_mod15267.state) {
    const tmp = _mod15314("state");
    let closure_6 = tmp;
    _mod15296[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("metro/15274__.js")(facade, closure_6)) {
        const typeError = new _mod15251.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15307(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("metro/15274__.js")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("metro/15274__.js")(arg0, closure_6);
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
        if (_mod15276(arg0)) {
          const tmp4 = fn5(arg0);
          if (tmp4.type === closure_0) {
            return tmp4;
          }
        }
        const typeError = new _mod15251.TypeError("Incompatible receiver, " + closure_0 + " required");
        throw typeError;
      };
    },
  };
  module.exports = obj;
}
let state = _mod15267.state;
if (!state) {
  const _module = _mod15267;
  const weakMap = new _mod15251.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod15251.TypeError("Object already initialized");
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
