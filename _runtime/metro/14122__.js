// === Module 14122: ? ===

// Module 14122
import _mod14061 from "module_14061" /* 14061 */;
import _mod14077 from "module_14077" /* 14077 */;
import _mod14086 from "module_14086" /* 14086 */;
import _mod14106 from "module_14106" /* 14106 */;
import _mod14117 from "module_14117" /* 14117 */;
import _mod14123 from "module_14123" /* 14123 */;
import _mod14124 from "module_14124" /* 14124 */;

const require = globalThis.__r;

let fn4;
let fn5;
let fn6;
if (!_mod14123) {
  let fn;
  let fn2;
  let fn3;
  if (!_mod14077.state) {
    let tmp = _mod14124("state");
    let closure_6 = tmp;
    _mod14106[tmp] = true;
    fn = function t(facade, arg1) {
      if (require("module_14084")(facade, closure_6)) {
        const self = this;
        const self2 = this;
        const typeError = new _mod14061.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14117(facade, closure_6, arg1);
        return arg1;
      }
    };
    fn4 = fn;
    fn2 = function n(arg0) {
      return require("module_14084")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    fn5 = fn2;
    fn3 = function u(arg0) {
      return require("module_14084")(arg0, closure_6);
    };
    fn6 = fn3;
  }
  const obj = {
    set: fn,
    get: fn2,
    has: fn3,
    enforce(toString) {
        let tmp2;
        if (fn6(toString)) {
          tmp2 = fn5(toString);
        } else {
          tmp2 = fn4(toString, {});
        }
        return tmp2;
      },
    getterFor(arg0) {
        let closure_0 = arg0;
        return (arg0) => {
          if (_mod14086(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod14061.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14077.state;
if (!state) {
  const _module = _mod14077;
  let self = this;
  let self2 = this;
  const weakMap = new _mod14061.WeakMap();
  let tmp4 = weakMap;
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const self = this;
    const self2 = this;
    const typeError = new _mod14061.TypeError("Object already initialized");
    throw typeError;
  } else {
    arg1.facade = facade;
    const result = state.set(facade, arg1);
    return arg1;
  }
};
fn5 = function n(arg0) {
  const tmp = state.get(arg0) || {};
  return tmp;
};
fn6 = function u(arg0) {
  return state.has(arg0);
};
fn3 = fn6;
fn2 = fn5;
fn = fn4;