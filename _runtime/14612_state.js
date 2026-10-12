// === Module 14612: state ===

// Module 14612 (state)
import _mod14551 from "module_14551" /* 14551 */;
import _mod14567 from "module_14567" /* 14567 */;
import _mod14576 from "module_14576" /* 14576 */;
import _mod14596 from "module_14596" /* 14596 */;
import _mod14607 from "module_14607" /* 14607 */;
import _mod14613 from "module_14613" /* 14613 */;
import _mod14614 from "module_14614" /* 14614 */;

const require = globalThis.__r;

if (!_mod14613) {
  if (!_mod14567.state) {
    const tmp = _mod14614("state");
    let closure_6 = tmp;
    _mod14596[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_14574")(facade, closure_6)) {
        const typeError = new _mod14551.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14607(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_14574")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_14574")(arg0, closure_6);
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
          if (_mod14576(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod14551.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14567.state;
if (!state) {
  const _module = _mod14567;
  const weakMap = new _mod14551.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod14551.TypeError("Object already initialized");
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