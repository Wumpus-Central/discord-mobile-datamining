// === Module 16808: state ===

// Module 16808 (state)
import _mod16747 from "module_16747" /* 16747 */;
import _mod16763 from "module_16763" /* 16763 */;
import _mod16772 from "module_16772" /* 16772 */;
import _mod16792 from "module_16792" /* 16792 */;
import _mod16803 from "module_16803" /* 16803 */;
import _mod16809 from "module_16809" /* 16809 */;
import _mod16810 from "module_16810" /* 16810 */;

const require = globalThis.__r;

if (!_mod16809) {
  if (!_mod16763.state) {
    const tmp = _mod16810("state");
    let closure_6 = tmp;
    _mod16792[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_16770")(facade, closure_6)) {
        const typeError = new _mod16747.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16803(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_16770")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_16770")(arg0, closure_6);
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
          if (_mod16772(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16747.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16763.state;
if (!state) {
  const _module = _mod16763;
  const weakMap = new _mod16747.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod16747.TypeError("Object already initialized");
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