// === Module 15431: state ===

// Module 15431 (state)
import _mod15370 from "module_15370" /* 15370 */;
import _mod15386 from "module_15386" /* 15386 */;
import _mod15395 from "module_15395" /* 15395 */;
import _mod15415 from "module_15415" /* 15415 */;
import _mod15426 from "module_15426" /* 15426 */;
import _mod15432 from "module_15432" /* 15432 */;
import _mod15433 from "module_15433" /* 15433 */;

const require = globalThis.__r;

if (!_mod15432) {
  if (!_mod15386.state) {
    const tmp = _mod15433("state");
    let closure_6 = tmp;
    _mod15415[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_15393")(facade, closure_6)) {
        const typeError = new _mod15370.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15426(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_15393")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_15393")(arg0, closure_6);
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
          if (_mod15395(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15370.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15386.state;
if (!state) {
  const _module = _mod15386;
  const weakMap = new _mod15370.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod15370.TypeError("Object already initialized");
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