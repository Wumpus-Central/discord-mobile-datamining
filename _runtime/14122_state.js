// === Module 14122: state ===

// Module 14122 (state)
import _mod14061 from "module_14061" /* 14061 */;
import _mod14077 from "module_14077" /* 14077 */;
import _mod14086 from "module_14086" /* 14086 */;
import _mod14106 from "module_14106" /* 14106 */;
import _mod14117 from "module_14117" /* 14117 */;
import _mod14123 from "module_14123" /* 14123 */;
import _mod14124 from "module_14124" /* 14124 */;

const require = globalThis.__r;

if (!_mod14123) {
  if (!_mod14077.state) {
    const tmp = _mod14124("state");
    let closure_6 = tmp;
    _mod14106[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_14084")(facade, closure_6)) {
        const typeError = new _mod14061.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14117(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_14084")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_14084")(arg0, closure_6);
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
          if (_mod14086(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod14061.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14077.state;
if (!state) {
  const _module = _mod14077;
  const weakMap = new _mod14061.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod14061.TypeError("Object already initialized");
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