// === Module 15597: state ===

// Module 15597 (state)
import _mod15536 from "module_15536" /* 15536 */;
import _mod15552 from "module_15552" /* 15552 */;
import _mod15561 from "module_15561" /* 15561 */;
import _mod15581 from "module_15581" /* 15581 */;
import _mod15592 from "module_15592" /* 15592 */;
import _mod15598 from "module_15598" /* 15598 */;
import _mod15599 from "module_15599" /* 15599 */;

const require = globalThis.__r;

if (!_mod15598) {
  if (!_mod15552.state) {
    const tmp = _mod15599("state");
    let closure_6 = tmp;
    _mod15581[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_15559")(facade, closure_6)) {
        const typeError = new _mod15536.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15592(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_15559")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_15559")(arg0, closure_6);
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
          if (_mod15561(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15536.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15552.state;
if (!state) {
  const _module = _mod15552;
  const weakMap = new _mod15536.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod15536.TypeError("Object already initialized");
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