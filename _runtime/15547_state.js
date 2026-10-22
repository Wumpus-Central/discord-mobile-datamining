// _runtime/15547_state.js
import _mod15486 from "metro/15486__.js";
import _mod15502 from "metro/15502__.js";
import _mod15511 from "metro/15511__.js";
import _mod15531 from "metro/15531__.js";
import _mod15542 from "metro/15542__.js";
import _mod15548 from "metro/15548__.js";
import _mod15549 from "metro/15549__.js";

const require = globalThis.__r;

if (!_mod15548) {
  if (!_mod15502.state) {
    const tmp = _mod15549("state");
    let closure_6 = tmp;
    _mod15531[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("metro/15509__.js")(facade, closure_6)) {
        const typeError = new _mod15486.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15542(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("metro/15509__.js")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("metro/15509__.js")(arg0, closure_6);
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
        if (_mod15511(arg0)) {
          const tmp4 = fn5(arg0);
          if (tmp4.type === closure_0) {
            return tmp4;
          }
        }
        const typeError = new _mod15486.TypeError("Incompatible receiver, " + closure_0 + " required");
        throw typeError;
      };
    },
  };
  module.exports = obj;
}
let state = _mod15502.state;
if (!state) {
  const _module = _mod15502;
  const weakMap = new _mod15486.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod15486.TypeError("Object already initialized");
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
