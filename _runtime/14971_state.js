// === Module 14971: state ===

// Module 14971 (state)
import _mod14910 from "module_14910" /* 14910 */;
import _mod14926 from "module_14926" /* 14926 */;
import _mod14935 from "module_14935" /* 14935 */;
import _mod14955 from "module_14955" /* 14955 */;
import _mod14966 from "module_14966" /* 14966 */;
import _mod14972 from "module_14972" /* 14972 */;
import _mod14973 from "module_14973" /* 14973 */;

const require = globalThis.__r;

if (!_mod14972) {
  if (!_mod14926.state) {
    const tmp = _mod14973("state");
    let closure_6 = tmp;
    _mod14955[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_14933")(facade, closure_6)) {
        const typeError = new _mod14910.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14966(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_14933")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_14933")(arg0, closure_6);
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
          if (_mod14935(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod14910.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14926.state;
if (!state) {
  const _module = _mod14926;
  const weakMap = new _mod14910.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod14910.TypeError("Object already initialized");
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