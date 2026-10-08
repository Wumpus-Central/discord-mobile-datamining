// === Module 14439: state ===

// Module 14439 (state)
import _mod14378 from "module_14378" /* 14378 */;
import _mod14394 from "module_14394" /* 14394 */;
import _mod14403 from "module_14403" /* 14403 */;
import _mod14423 from "module_14423" /* 14423 */;
import _mod14434 from "module_14434" /* 14434 */;
import _mod14440 from "module_14440" /* 14440 */;
import _mod14441 from "module_14441" /* 14441 */;

const require = globalThis.__r;

if (!_mod14440) {
  if (!_mod14394.state) {
    const tmp = _mod14441("state");
    let closure_6 = tmp;
    _mod14423[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_14401")(facade, closure_6)) {
        const typeError = new _mod14378.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14434(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_14401")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_14401")(arg0, closure_6);
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
          if (_mod14403(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod14378.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14394.state;
if (!state) {
  const _module = _mod14394;
  const weakMap = new _mod14378.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod14378.TypeError("Object already initialized");
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