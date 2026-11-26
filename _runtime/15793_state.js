// === Module 15793: state ===

// Module 15793 (state)
import _mod15732 from "module_15732" /* 15732 */;
import _mod15748 from "module_15748" /* 15748 */;
import _mod15757 from "module_15757" /* 15757 */;
import _mod15777 from "module_15777" /* 15777 */;
import _mod15788 from "module_15788" /* 15788 */;
import _mod15794 from "module_15794" /* 15794 */;
import _mod15795 from "module_15795" /* 15795 */;

const require = globalThis.__r;

if (!_mod15794) {
  if (!_mod15748.state) {
    const tmp = _mod15795("state");
    let closure_6 = tmp;
    _mod15777[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_15755")(facade, closure_6)) {
        const typeError = new _mod15732.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15788(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_15755")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_15755")(arg0, closure_6);
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
          if (_mod15757(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15732.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15748.state;
if (!state) {
  const _module = _mod15748;
  const weakMap = new _mod15732.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod15732.TypeError("Object already initialized");
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