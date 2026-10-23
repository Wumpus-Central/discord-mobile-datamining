// === Module 15560: state ===

// Module 15560 (state)
import _mod15499 from "module_15499" /* 15499 */;
import _mod15515 from "module_15515" /* 15515 */;
import _mod15524 from "module_15524" /* 15524 */;
import _mod15544 from "module_15544" /* 15544 */;
import _mod15555 from "module_15555" /* 15555 */;
import _mod15561 from "module_15561" /* 15561 */;
import _mod15562 from "module_15562" /* 15562 */;

const require = globalThis.__r;

if (!_mod15561) {
  if (!_mod15515.state) {
    const tmp = _mod15562("state");
    let closure_6 = tmp;
    _mod15544[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_15522")(facade, closure_6)) {
        const typeError = new _mod15499.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15555(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_15522")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_15522")(arg0, closure_6);
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
          if (_mod15524(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15499.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15515.state;
if (!state) {
  const _module = _mod15515;
  const weakMap = new _mod15499.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod15499.TypeError("Object already initialized");
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