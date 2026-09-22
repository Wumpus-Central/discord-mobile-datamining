// === Module 14644: state ===

// Module 14644 (state)
import _mod14583 from "module_14583" /* 14583 */;
import _mod14599 from "module_14599" /* 14599 */;
import _mod14608 from "module_14608" /* 14608 */;
import _mod14628 from "module_14628" /* 14628 */;
import _mod14639 from "module_14639" /* 14639 */;
import _mod14645 from "module_14645" /* 14645 */;
import _mod14646 from "module_14646" /* 14646 */;

const require = globalThis.__r;

if (!_mod14645) {
  if (!_mod14599.state) {
    const tmp = _mod14646("state");
    let closure_6 = tmp;
    _mod14628[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_14606")(facade, closure_6)) {
        const typeError = new _mod14583.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14639(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_14606")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_14606")(arg0, closure_6);
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
          if (_mod14608(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod14583.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14599.state;
if (!state) {
  const _module = _mod14599;
  const weakMap = new _mod14583.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod14583.TypeError("Object already initialized");
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