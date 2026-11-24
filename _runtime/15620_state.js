// === Module 15620: state ===

// Module 15620 (state)
import _mod15559 from "module_15559" /* 15559 */;
import _mod15575 from "module_15575" /* 15575 */;
import _mod15584 from "module_15584" /* 15584 */;
import _mod15604 from "module_15604" /* 15604 */;
import _mod15615 from "module_15615" /* 15615 */;
import _mod15621 from "module_15621" /* 15621 */;
import _mod15622 from "module_15622" /* 15622 */;

const require = globalThis.__r;

if (!_mod15621) {
  if (!_mod15575.state) {
    const tmp = _mod15622("state");
    let closure_6 = tmp;
    _mod15604[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_15582")(facade, closure_6)) {
        const typeError = new _mod15559.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15615(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_15582")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_15582")(arg0, closure_6);
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
          if (_mod15584(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15559.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15575.state;
if (!state) {
  const _module = _mod15575;
  const weakMap = new _mod15559.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod15559.TypeError("Object already initialized");
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