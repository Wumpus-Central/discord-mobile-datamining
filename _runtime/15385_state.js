// === Module 15385: state ===

// Module 15385 (state)
import _mod15324 from "module_15324" /* 15324 */;
import _mod15340 from "module_15340" /* 15340 */;
import _mod15349 from "module_15349" /* 15349 */;
import _mod15369 from "module_15369" /* 15369 */;
import _mod15380 from "module_15380" /* 15380 */;
import _mod15386 from "module_15386" /* 15386 */;
import _mod15387 from "module_15387" /* 15387 */;

const require = globalThis.__r;

if (!_mod15386) {
  if (!_mod15340.state) {
    const tmp = _mod15387("state");
    let closure_6 = tmp;
    _mod15369[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_15347")(facade, closure_6)) {
        const typeError = new _mod15324.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15380(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_15347")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_15347")(arg0, closure_6);
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
          if (_mod15349(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15324.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15340.state;
if (!state) {
  const _module = _mod15340;
  const weakMap = new _mod15324.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod15324.TypeError("Object already initialized");
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