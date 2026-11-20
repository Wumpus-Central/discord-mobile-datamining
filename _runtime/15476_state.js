// === Module 15476: state ===

// Module 15476 (state)
import _mod15415 from "module_15415" /* 15415 */;
import _mod15431 from "module_15431" /* 15431 */;
import _mod15440 from "module_15440" /* 15440 */;
import _mod15460 from "module_15460" /* 15460 */;
import _mod15471 from "module_15471" /* 15471 */;
import _mod15477 from "module_15477" /* 15477 */;
import _mod15478 from "module_15478" /* 15478 */;

const require = globalThis.__r;

if (!_mod15477) {
  if (!_mod15431.state) {
    const tmp = _mod15478("state");
    let closure_6 = tmp;
    _mod15460[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_15438")(facade, closure_6)) {
        const typeError = new _mod15415.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15471(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_15438")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_15438")(arg0, closure_6);
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
          if (_mod15440(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15415.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15431.state;
if (!state) {
  const _module = _mod15431;
  const weakMap = new _mod15415.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod15415.TypeError("Object already initialized");
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