// === Module 13849: state ===

// Module 13849 (state)
import _mod13788 from "module_13788" /* 13788 */;
import _mod13804 from "module_13804" /* 13804 */;
import _mod13813 from "module_13813" /* 13813 */;
import _mod13833 from "module_13833" /* 13833 */;
import _mod13844 from "module_13844" /* 13844 */;
import _mod13850 from "module_13850" /* 13850 */;
import _mod13851 from "module_13851" /* 13851 */;

const require = globalThis.__r;

if (!_mod13850) {
  if (!_mod13804.state) {
    const tmp = _mod13851("state");
    let closure_6 = tmp;
    _mod13833[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_13811")(facade, closure_6)) {
        const typeError = new _mod13788.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod13844(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_13811")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_13811")(arg0, closure_6);
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
          if (_mod13813(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod13788.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod13804.state;
if (!state) {
  const _module = _mod13804;
  const weakMap = new _mod13788.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod13788.TypeError("Object already initialized");
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