// === Module 15599: state ===

// Module 15599 (state)
import _mod15538 from "module_15538" /* 15538 */;
import _mod15554 from "module_15554" /* 15554 */;
import _mod15563 from "module_15563" /* 15563 */;
import _mod15583 from "module_15583" /* 15583 */;
import _mod15594 from "module_15594" /* 15594 */;
import _mod15600 from "module_15600" /* 15600 */;
import _mod15601 from "module_15601" /* 15601 */;

const require = globalThis.__r;

if (!_mod15600) {
  if (!_mod15554.state) {
    const tmp = _mod15601("state");
    let closure_6 = tmp;
    _mod15583[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_15561")(facade, closure_6)) {
        const typeError = new _mod15538.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15594(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_15561")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_15561")(arg0, closure_6);
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
          if (_mod15563(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15538.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15554.state;
if (!state) {
  const _module = _mod15554;
  const weakMap = new _mod15538.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod15538.TypeError("Object already initialized");
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