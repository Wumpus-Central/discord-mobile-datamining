// === Module 16447: state ===

// Module 16447 (state)
import _mod16386 from "module_16386" /* 16386 */;
import _mod16402 from "module_16402" /* 16402 */;
import _mod16411 from "module_16411" /* 16411 */;
import _mod16431 from "module_16431" /* 16431 */;
import _mod16442 from "module_16442" /* 16442 */;
import _mod16448 from "module_16448" /* 16448 */;
import _mod16449 from "module_16449" /* 16449 */;

const require = globalThis.__r;

if (!_mod16448) {
  if (!_mod16402.state) {
    const tmp = _mod16449("state");
    let closure_6 = tmp;
    _mod16431[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_16409")(facade, closure_6)) {
        const typeError = new _mod16386.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod16442(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_16409")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_16409")(arg0, closure_6);
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
          if (_mod16411(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod16386.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod16402.state;
if (!state) {
  const _module = _mod16402;
  const weakMap = new _mod16386.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod16386.TypeError("Object already initialized");
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