// === Module 15742: state ===

// Module 15742 (state)
import _mod15681 from "module_15681" /* 15681 */;
import _mod15697 from "module_15697" /* 15697 */;
import _mod15706 from "module_15706" /* 15706 */;
import _mod15726 from "module_15726" /* 15726 */;
import _mod15737 from "module_15737" /* 15737 */;
import _mod15743 from "module_15743" /* 15743 */;
import _mod15744 from "module_15744" /* 15744 */;

const require = globalThis.__r;

if (!_mod15743) {
  if (!_mod15697.state) {
    const tmp = _mod15744("state");
    let closure_6 = tmp;
    _mod15726[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_15704")(facade, closure_6)) {
        const typeError = new _mod15681.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15737(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_15704")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_15704")(arg0, closure_6);
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
          if (_mod15706(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15681.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15697.state;
if (!state) {
  const _module = _mod15697;
  const weakMap = new _mod15681.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod15681.TypeError("Object already initialized");
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