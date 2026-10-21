// === Module 15503: state ===

// Module 15503 (state)
import _mod15442 from "module_15442" /* 15442 */;
import _mod15458 from "module_15458" /* 15458 */;
import _mod15467 from "module_15467" /* 15467 */;
import _mod15487 from "module_15487" /* 15487 */;
import _mod15498 from "module_15498" /* 15498 */;
import _mod15504 from "module_15504" /* 15504 */;
import _mod15505 from "module_15505" /* 15505 */;

const require = globalThis.__r;

if (!_mod15504) {
  if (!_mod15458.state) {
    const tmp = _mod15505("state");
    let closure_6 = tmp;
    _mod15487[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_15465")(facade, closure_6)) {
        const typeError = new _mod15442.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod15498(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_15465")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_15465")(arg0, closure_6);
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
          if (_mod15467(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod15442.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod15458.state;
if (!state) {
  const _module = _mod15458;
  const weakMap = new _mod15442.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod15442.TypeError("Object already initialized");
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