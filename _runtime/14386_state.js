// _runtime/14386_state.js
import _mod14325 from "metro/14325__.js";
import _mod14341 from "metro/14341__.js";
import _mod14350 from "metro/14350__.js";
import _mod14370 from "metro/14370__.js";
import _mod14381 from "metro/14381__.js";
import _mod14387 from "metro/14387__.js";
import _mod14388 from "metro/14388__.js";

if (!_mod14387) {
  if (!_mod14341.state) {
    const tmp = _mod14388("state");
    let closure_6 = tmp;
    _mod14370[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("metro/14348__.js")(facade, closure_6)) {
        const typeError = new _mod14325.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14381(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("metro/14348__.js")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("metro/14348__.js")(arg0, closure_6);
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
        if (_mod14350(arg0)) {
          const tmp4 = fn5(arg0);
          if (tmp4.type === closure_0) {
            return tmp4;
          }
        }
        const typeError = new _mod14325.TypeError("Incompatible receiver, " + closure_0 + " required");
        throw typeError;
      };
    },
  };
  module.exports = obj;
}
let state = _mod14341.state;
if (!state) {
  const _module = _mod14341;
  const weakMap = new _mod14325.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod14325.TypeError("Object already initialized");
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
