// _runtime/14358_state.js
import _mod14297 from "metro/14297__.js";
import _mod14313 from "metro/14313__.js";
import _mod14322 from "metro/14322__.js";
import _mod14342 from "metro/14342__.js";
import _mod14353 from "metro/14353__.js";
import _mod14359 from "metro/14359__.js";
import _mod14360 from "metro/14360__.js";

if (!_mod14359) {
  if (!_mod14313.state) {
    const tmp = _mod14360("state");
    let closure_6 = tmp;
    _mod14342[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("metro/14320__.js")(facade, closure_6)) {
        const typeError = new _mod14297.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod14353(facade, closure_6, arg1);
        return arg1;
      }
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("metro/14320__.js")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("metro/14320__.js")(arg0, closure_6);
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
        if (_mod14322(arg0)) {
          const tmp4 = fn5(arg0);
          if (tmp4.type === closure_0) {
            return tmp4;
          }
        }
        const typeError = new _mod14297.TypeError("Incompatible receiver, " + closure_0 + " required");
        throw typeError;
      };
    },
  };
  module.exports = obj;
}
let state = _mod14313.state;
if (!state) {
  const _module = _mod14313;
  const weakMap = new _mod14297.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod14297.TypeError("Object already initialized");
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
