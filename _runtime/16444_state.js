// _runtime/16444_state.js
import _mod16383 from "metro/16383__.js";
import _mod16399 from "metro/16399__.js";
import _mod16408 from "metro/16408__.js";
import _mod16428 from "metro/16428__.js";
import _mod16439 from "metro/16439__.js";
import _mod16445 from "metro/16445__.js";
import _mod16446 from "metro/16446__.js";

const require = globalThis.__r;

if (!_mod16445) {
  if (!_mod16399.state) {
    const tmp = _mod16446("state");
    let closure_6 = tmp;
    _mod16428[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("metro/16406__.js")(facade, closure_6)) {
        const typeError = new _mod16383.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16439(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("metro/16406__.js")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("metro/16406__.js")(arg0, closure_6);
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
        if (_mod16408(arg0)) {
          const tmp4 = fn5(arg0);
          if (tmp4.type === closure_0) {
            return tmp4;
          }
        }
        const typeError = new _mod16383.TypeError("Incompatible receiver, " + closure_0 + " required");
        throw typeError;
      };
    },
  };
  module.exports = obj;
}
let state = _mod16399.state;
if (!state) {
  const _module = _mod16399;
  const weakMap = new _mod16383.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod16383.TypeError("Object already initialized");
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
