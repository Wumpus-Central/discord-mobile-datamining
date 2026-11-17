// === Module 16843: state ===

// Module 16843 (state)
import _mod16782 from "module_16782" /* 16782 */;
import _mod16798 from "module_16798" /* 16798 */;
import _mod16807 from "module_16807" /* 16807 */;
import _mod16827 from "module_16827" /* 16827 */;
import _mod16838 from "module_16838" /* 16838 */;
import _mod16844 from "module_16844" /* 16844 */;
import _mod16845 from "module_16845" /* 16845 */;

const require = globalThis.__r;

if (!_mod16844) {
  if (!_mod16798.state) {
    const tmp = _mod16845("state");
    let closure_6 = tmp;
    _mod16827[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_16805")(facade, closure_6)) {
        const typeError = new _mod16782.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16838(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_16805")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_16805")(arg0, closure_6);
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
          if (_mod16807(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16782.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16798.state;
if (!state) {
  const _module = _mod16798;
  const weakMap = new _mod16782.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod16782.TypeError("Object already initialized");
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