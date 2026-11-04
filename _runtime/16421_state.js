// _runtime/16421_state.js
import _mod16360 from "metro/16360__.js";
import _mod16376 from "metro/16376__.js";
import _mod16385 from "metro/16385__.js";
import _mod16405 from "metro/16405__.js";
import _mod16416 from "metro/16416__.js";
import _mod16422 from "metro/16422__.js";
import _mod16423 from "metro/16423__.js";

const require = globalThis.__r;

if (!_mod16422) {
  if (!_mod16376.state) {
    const tmp = _mod16423("state");
    let closure_6 = tmp;
    _mod16405[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("metro/16383__.js")(facade, closure_6)) {
        const typeError = new _mod16360.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16416(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("metro/16383__.js")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("metro/16383__.js")(arg0, closure_6);
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
        if (_mod16385(arg0)) {
          const tmp4 = fn5(arg0);
          if (tmp4.type === closure_0) {
            return tmp4;
          }
        }
        const typeError = new _mod16360.TypeError("Incompatible receiver, " + closure_0 + " required");
        throw typeError;
      };
    },
  };
  module.exports = obj;
}
let state = _mod16376.state;
if (!state) {
  const _module = _mod16376;
  const weakMap = new _mod16360.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod16360.TypeError("Object already initialized");
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
