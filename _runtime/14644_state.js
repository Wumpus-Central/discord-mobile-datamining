// _runtime/14644_state.js
import _mod14583 from "metro/14583__.js";
import _mod14599 from "metro/14599__.js";
import _mod14608 from "metro/14608__.js";
import _mod14628 from "metro/14628__.js";
import _mod14639 from "metro/14639__.js";
import _mod14645 from "metro/14645__.js";
import _mod14646 from "metro/14646__.js";

const require = globalThis.__r;

if (!_mod14645) {
  if (!_mod14599.state) {
    const tmp = _mod14646("state");
    let closure_6 = tmp;
    _mod14628[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("metro/14606__.js")(facade, closure_6)) {
        const typeError = new _mod14583.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14639(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("metro/14606__.js")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("metro/14606__.js")(arg0, closure_6);
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
        if (_mod14608(arg0)) {
          const tmp4 = fn5(arg0);
          if (tmp4.type === closure_0) {
            return tmp4;
          }
        }
        const typeError = new _mod14583.TypeError("Incompatible receiver, " + closure_0 + " required");
        throw typeError;
      };
    },
  };
  module.exports = obj;
}
let state = _mod14599.state;
if (!state) {
  const _module = _mod14599;
  const weakMap = new _mod14583.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod14583.TypeError("Object already initialized");
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
