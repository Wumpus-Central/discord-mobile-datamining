// _runtime/14971_state.js
import _mod14910 from "metro/14910__.js";
import _mod14926 from "metro/14926__.js";
import _mod14935 from "metro/14935__.js";
import _mod14955 from "metro/14955__.js";
import _mod14966 from "metro/14966__.js";
import _mod14972 from "metro/14972__.js";
import _mod14973 from "metro/14973__.js";

const require = globalThis.__r;

if (!_mod14972) {
  if (!_mod14926.state) {
    const tmp = _mod14973("state");
    let closure_6 = tmp;
    _mod14955[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("metro/14933__.js")(facade, closure_6)) {
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
      return require("metro/14933__.js")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("metro/14933__.js")(arg0, closure_6);
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
    },
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
