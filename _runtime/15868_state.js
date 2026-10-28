// === Module 15868: state ===

// Module 15868 (state)
import _mod15807 from "module_15807" /* 15807 */;
import _mod15823 from "module_15823" /* 15823 */;
import _mod15832 from "module_15832" /* 15832 */;
import _mod15852 from "module_15852" /* 15852 */;
import _mod15863 from "module_15863" /* 15863 */;
import _mod15869 from "module_15869" /* 15869 */;
import _mod15870 from "module_15870" /* 15870 */;

const require = globalThis.__r;

if (!_mod15869) {
  if (!_mod15823.state) {
    const tmp = _mod15870("state");
    let closure_6 = tmp;
    _mod15852[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_15830")(facade, closure_6)) {
        const typeError = new _mod15807.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15863(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_15830")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_15830")(arg0, closure_6);
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
          if (_mod15832(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15807.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15823.state;
if (!state) {
  const _module = _mod15823;
  const weakMap = new _mod15807.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod15807.TypeError("Object already initialized");
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