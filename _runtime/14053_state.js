// === Module 14053: state ===

// Module 14053 (state)
import _mod13992 from "module_13992" /* 13992 */;
import _mod14008 from "module_14008" /* 14008 */;
import _mod14017 from "module_14017" /* 14017 */;
import _mod14037 from "module_14037" /* 14037 */;
import _mod14048 from "module_14048" /* 14048 */;
import _mod14054 from "module_14054" /* 14054 */;
import _mod14055 from "module_14055" /* 14055 */;

const require = globalThis.__r;

if (!_mod14054) {
  if (!_mod14008.state) {
    const tmp = _mod14055("state");
    let closure_6 = tmp;
    _mod14037[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_14015")(facade, closure_6)) {
        const typeError = new _mod13992.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14048(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_14015")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_14015")(arg0, closure_6);
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
          if (_mod14017(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod13992.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14008.state;
if (!state) {
  const _module = _mod14008;
  const weakMap = new _mod13992.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod13992.TypeError("Object already initialized");
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