// === Module 16529: state ===

// Module 16529 (state)
import _mod16468 from "module_16468" /* 16468 */;
import _mod16484 from "module_16484" /* 16484 */;
import _mod16493 from "module_16493" /* 16493 */;
import _mod16513 from "module_16513" /* 16513 */;
import _mod16524 from "module_16524" /* 16524 */;
import _mod16530 from "module_16530" /* 16530 */;
import _mod16531 from "module_16531" /* 16531 */;

const require = globalThis.__r;

if (!_mod16530) {
  if (!_mod16484.state) {
    const tmp = _mod16531("state");
    let closure_6 = tmp;
    _mod16513[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_16491")(facade, closure_6)) {
        const typeError = new _mod16468.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16524(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_16491")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_16491")(arg0, closure_6);
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
          if (_mod16493(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16468.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16484.state;
if (!state) {
  const _module = _mod16484;
  const weakMap = new _mod16468.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod16468.TypeError("Object already initialized");
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