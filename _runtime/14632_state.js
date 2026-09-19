// === Module 14632: state ===

// Module 14632 (state)
import _mod14571 from "module_14571" /* 14571 */;
import _mod14587 from "module_14587" /* 14587 */;
import _mod14596 from "module_14596" /* 14596 */;
import _mod14616 from "module_14616" /* 14616 */;
import _mod14627 from "module_14627" /* 14627 */;
import _mod14633 from "module_14633" /* 14633 */;
import _mod14634 from "module_14634" /* 14634 */;

const require = globalThis.__r;

if (!_mod14633) {
  if (!_mod14587.state) {
    const tmp = _mod14634("state");
    let closure_6 = tmp;
    _mod14616[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_14594")(facade, closure_6)) {
        const typeError = new _mod14571.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14627(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_14594")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_14594")(arg0, closure_6);
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
          if (_mod14596(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod14571.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14587.state;
if (!state) {
  const _module = _mod14587;
  const weakMap = new _mod14571.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod14571.TypeError("Object already initialized");
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