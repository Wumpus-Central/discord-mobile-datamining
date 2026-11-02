// === Module 16189: state ===

// Module 16189 (state)
import _mod16128 from "module_16128" /* 16128 */;
import _mod16144 from "module_16144" /* 16144 */;
import _mod16153 from "module_16153" /* 16153 */;
import _mod16173 from "module_16173" /* 16173 */;
import _mod16184 from "module_16184" /* 16184 */;
import _mod16190 from "module_16190" /* 16190 */;
import _mod16191 from "module_16191" /* 16191 */;

const require = globalThis.__r;

if (!_mod16190) {
  if (!_mod16144.state) {
    const tmp = _mod16191("state");
    let closure_6 = tmp;
    _mod16173[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_16151")(facade, closure_6)) {
        const typeError = new _mod16128.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16184(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_16151")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_16151")(arg0, closure_6);
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
          if (_mod16153(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16128.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16144.state;
if (!state) {
  const _module = _mod16144;
  const weakMap = new _mod16128.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod16128.TypeError("Object already initialized");
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