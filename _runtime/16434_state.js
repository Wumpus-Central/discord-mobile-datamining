// === Module 16434: state ===

// Module 16434 (state)
import _mod16373 from "module_16373" /* 16373 */;
import _mod16389 from "module_16389" /* 16389 */;
import _mod16398 from "module_16398" /* 16398 */;
import _mod16418 from "module_16418" /* 16418 */;
import _mod16429 from "module_16429" /* 16429 */;
import _mod16435 from "module_16435" /* 16435 */;
import _mod16436 from "module_16436" /* 16436 */;

const require = globalThis.__r;

if (!_mod16435) {
  if (!_mod16389.state) {
    const tmp = _mod16436("state");
    let closure_6 = tmp;
    _mod16418[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_16396")(facade, closure_6)) {
        const typeError = new _mod16373.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16429(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_16396")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_16396")(arg0, closure_6);
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
          if (_mod16398(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16373.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16389.state;
if (!state) {
  const _module = _mod16389;
  const weakMap = new _mod16373.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod16373.TypeError("Object already initialized");
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