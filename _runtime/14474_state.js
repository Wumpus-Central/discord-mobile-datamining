// === Module 14474: state ===

// Module 14474 (state)
import _mod14413 from "module_14413" /* 14413 */;
import _mod14429 from "module_14429" /* 14429 */;
import _mod14438 from "module_14438" /* 14438 */;
import _mod14458 from "module_14458" /* 14458 */;
import _mod14469 from "module_14469" /* 14469 */;
import _mod14475 from "module_14475" /* 14475 */;
import _mod14476 from "module_14476" /* 14476 */;

const require = globalThis.__r;

if (!_mod14475) {
  if (!_mod14429.state) {
    const tmp = _mod14476("state");
    let closure_6 = tmp;
    _mod14458[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_14436")(facade, closure_6)) {
        const typeError = new _mod14413.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14469(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_14436")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_14436")(arg0, closure_6);
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
          if (_mod14438(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod14413.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14429.state;
if (!state) {
  const _module = _mod14429;
  const weakMap = new _mod14413.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod14413.TypeError("Object already initialized");
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