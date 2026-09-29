// === Module 14018: state ===

// Module 14018 (state)
import _mod13957 from "module_13957" /* 13957 */;
import _mod13973 from "module_13973" /* 13973 */;
import _mod13982 from "module_13982" /* 13982 */;
import _mod14002 from "module_14002" /* 14002 */;
import _mod14013 from "module_14013" /* 14013 */;
import _mod14019 from "module_14019" /* 14019 */;
import _mod14020 from "module_14020" /* 14020 */;

const require = globalThis.__r;

if (!_mod14019) {
  if (!_mod13973.state) {
    const tmp = _mod14020("state");
    let closure_6 = tmp;
    _mod14002[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_13980")(facade, closure_6)) {
        const typeError = new _mod13957.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14013(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_13980")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_13980")(arg0, closure_6);
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
          if (_mod13982(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod13957.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod13973.state;
if (!state) {
  const _module = _mod13973;
  const weakMap = new _mod13957.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod13957.TypeError("Object already initialized");
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