// === Module 14446: state ===

// Module 14446 (state)
import _mod14385 from "module_14385" /* 14385 */;
import _mod14401 from "module_14401" /* 14401 */;
import _mod14410 from "module_14410" /* 14410 */;
import _mod14430 from "module_14430" /* 14430 */;
import _mod14441 from "module_14441" /* 14441 */;
import _mod14447 from "module_14447" /* 14447 */;
import _mod14448 from "module_14448" /* 14448 */;

if (!_mod14447) {
  if (!_mod14401.state) {
    const tmp = _mod14448("state");
    let closure_6 = tmp;
    _mod14430[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_14408")(facade, closure_6)) {
        const typeError = new _mod14385.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14441(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_14408")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_14408")(arg0, closure_6);
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
          if (_mod14410(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod14385.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14401.state;
if (!state) {
  const _module = _mod14401;
  const weakMap = new _mod14385.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod14385.TypeError("Object already initialized");
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