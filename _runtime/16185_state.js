// === Module 16185: state ===

// Module 16185 (state)
import _mod16124 from "module_16124" /* 16124 */;
import _mod16140 from "module_16140" /* 16140 */;
import _mod16149 from "module_16149" /* 16149 */;
import _mod16169 from "module_16169" /* 16169 */;
import _mod16180 from "module_16180" /* 16180 */;
import _mod16186 from "module_16186" /* 16186 */;
import _mod16187 from "module_16187" /* 16187 */;

const require = globalThis.__r;

if (!_mod16186) {
  if (!_mod16140.state) {
    const tmp = _mod16187("state");
    let closure_6 = tmp;
    _mod16169[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_16147")(facade, closure_6)) {
        const typeError = new _mod16124.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16180(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_16147")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_16147")(arg0, closure_6);
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
          if (_mod16149(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16124.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16140.state;
if (!state) {
  const _module = _mod16140;
  const weakMap = new _mod16124.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod16124.TypeError("Object already initialized");
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