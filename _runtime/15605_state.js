// _runtime/15605_state.js
import _mod15544 from "metro/15544__.js";
import _mod15560 from "metro/15560__.js";
import _mod15569 from "metro/15569__.js";
import _mod15589 from "metro/15589__.js";
import _mod15600 from "metro/15600__.js";
import _mod15606 from "metro/15606__.js";
import _mod15607 from "metro/15607__.js";

const require = globalThis.__r;

if (!_mod15606) {
  if (!_mod15560.state) {
    const tmp = _mod15607("state");
    let closure_6 = tmp;
    _mod15589[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("metro/15567__.js")(facade, closure_6)) {
        const typeError = new _mod15544.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15600(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("metro/15567__.js")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("metro/15567__.js")(arg0, closure_6);
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
        if (_mod15569(arg0)) {
          const tmp4 = fn5(arg0);
          if (tmp4.type === closure_0) {
            return tmp4;
          }
        }
        const typeError = new _mod15544.TypeError("Incompatible receiver, " + closure_0 + " required");
        throw typeError;
      };
    },
  };
  module.exports = obj;
}
let state = _mod15560.state;
if (!state) {
  const _module = _mod15560;
  const weakMap = new _mod15544.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod15544.TypeError("Object already initialized");
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
