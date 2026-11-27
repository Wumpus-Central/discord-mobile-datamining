// === Module 15800: state ===

// Module 15800 (state)
import _mod15739 from "module_15739" /* 15739 */;
import _mod15755 from "module_15755" /* 15755 */;
import _mod15764 from "module_15764" /* 15764 */;
import _mod15784 from "module_15784" /* 15784 */;
import _mod15795 from "module_15795" /* 15795 */;
import _mod15801 from "module_15801" /* 15801 */;
import _mod15802 from "module_15802" /* 15802 */;

const require = globalThis.__r;

if (!_mod15801) {
  if (!_mod15755.state) {
    const tmp = _mod15802("state");
    let closure_6 = tmp;
    _mod15784[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_15762")(facade, closure_6)) {
        const typeError = new _mod15739.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15795(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_15762")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_15762")(arg0, closure_6);
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
          if (_mod15764(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15739.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15755.state;
if (!state) {
  const _module = _mod15755;
  const weakMap = new _mod15739.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod15739.TypeError("Object already initialized");
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