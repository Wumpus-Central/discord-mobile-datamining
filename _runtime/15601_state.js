// === Module 15601: state ===

// Module 15601 (state)
import _mod15540 from "module_15540" /* 15540 */;
import _mod15556 from "module_15556" /* 15556 */;
import _mod15565 from "module_15565" /* 15565 */;
import _mod15585 from "module_15585" /* 15585 */;
import _mod15596 from "module_15596" /* 15596 */;
import _mod15602 from "module_15602" /* 15602 */;
import _mod15603 from "module_15603" /* 15603 */;

const require = globalThis.__r;

if (!_mod15602) {
  if (!_mod15556.state) {
    const tmp = _mod15603("state");
    let closure_6 = tmp;
    _mod15585[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_15563")(facade, closure_6)) {
        const typeError = new _mod15540.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15596(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_15563")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_15563")(arg0, closure_6);
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
          if (_mod15565(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15540.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15556.state;
if (!state) {
  const _module = _mod15556;
  const weakMap = new _mod15540.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod15540.TypeError("Object already initialized");
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