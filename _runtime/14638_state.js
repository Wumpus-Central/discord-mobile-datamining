// === Module 14638: state ===

// Module 14638 (state)
import _mod14577 from "module_14577" /* 14577 */;
import _mod14593 from "module_14593" /* 14593 */;
import _mod14602 from "module_14602" /* 14602 */;
import _mod14622 from "module_14622" /* 14622 */;
import _mod14633 from "module_14633" /* 14633 */;
import _mod14639 from "module_14639" /* 14639 */;
import _mod14640 from "module_14640" /* 14640 */;

const require = globalThis.__r;

if (!_mod14639) {
  if (!_mod14593.state) {
    const tmp = _mod14640("state");
    let closure_6 = tmp;
    _mod14622[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_14600")(facade, closure_6)) {
        const typeError = new _mod14577.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14633(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_14600")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_14600")(arg0, closure_6);
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
          if (_mod14602(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod14577.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14593.state;
if (!state) {
  const _module = _mod14593;
  const weakMap = new _mod14577.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod14577.TypeError("Object already initialized");
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