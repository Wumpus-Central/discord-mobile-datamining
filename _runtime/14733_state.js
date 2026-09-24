// === Module 14733: state ===

// Module 14733 (state)
import _mod14672 from "module_14672" /* 14672 */;
import _mod14688 from "module_14688" /* 14688 */;
import _mod14697 from "module_14697" /* 14697 */;
import _mod14717 from "module_14717" /* 14717 */;
import _mod14728 from "module_14728" /* 14728 */;
import _mod14734 from "module_14734" /* 14734 */;
import _mod14735 from "module_14735" /* 14735 */;

const require = globalThis.__r;

if (!_mod14734) {
  if (!_mod14688.state) {
    const tmp = _mod14735("state");
    let closure_6 = tmp;
    _mod14717[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_14695")(facade, closure_6)) {
        const typeError = new _mod14672.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14728(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_14695")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_14695")(arg0, closure_6);
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
          if (_mod14697(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod14672.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14688.state;
if (!state) {
  const _module = _mod14688;
  const weakMap = new _mod14672.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod14672.TypeError("Object already initialized");
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