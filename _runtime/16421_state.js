// === Module 16421: state ===

// Module 16421 (state)
import _mod16360 from "module_16360" /* 16360 */;
import _mod16376 from "module_16376" /* 16376 */;
import _mod16385 from "module_16385" /* 16385 */;
import _mod16405 from "module_16405" /* 16405 */;
import _mod16416 from "module_16416" /* 16416 */;
import _mod16422 from "module_16422" /* 16422 */;
import _mod16423 from "module_16423" /* 16423 */;

const require = globalThis.__r;

if (!_mod16422) {
  if (!_mod16376.state) {
    const tmp = _mod16423("state");
    let closure_6 = tmp;
    _mod16405[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_16383")(facade, closure_6)) {
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
      return require("module_16383")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_16383")(arg0, closure_6);
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
      }
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