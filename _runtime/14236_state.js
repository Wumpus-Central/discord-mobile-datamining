// _runtime/14236_state.js
import _mod14175 from "metro/14175__.js";
import __core_js_shared__ from "14191___core-js_shared__.js";
import call from "14198_call.js";
import _mod14220 from "metro/14220__.js";
import all from "14237_all.js";
import __core_js_shared__2 from "14238___core-js_shared__.js";

if (!all) {
  if (!__core_js_shared__.state) {
    const tmp = __core_js_shared__2("state");
    let closure_6 = tmp;
    _mod14220[tmp] = true;
    let fn = function t(facade) {
      if (call(facade, closure_6)) {
        const typeError = new tmp(14175).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        tmp(14231)(facade, tmp3, arg1);
        return arg1;
      }
      tmp3 = closure_6;
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return call(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return call(arg0, closure_6);
    };
    let fn6 = fn3;
  }
  let obj = { set: null, get: null, has: null, enforce: null, getterFor: null };
  obj[0] = fn;
  obj[1] = fn2;
  obj[2] = fn3;
  obj[3] = function enforce(toString) {
    if (fn6(toString)) {
      let tmp2 = fn5(toString);
    } else {
      tmp2 = fn4(toString, {});
    }
    return tmp2;
  };
  obj[4] = function getterFor(arg0) {
    closure_0 = arg0;
    return (arg0) => {
      if (callback(closure_1_1[0])(arg0)) {
        const tmp4 = closure_1_3(arg0);
        if (tmp4.type === callback) {
          return tmp4;
        }
      }
      const typeError = new callback(closure_1_1[1]).TypeError("Incompatible receiver, " + callback + " required");
      throw typeError;
    };
  };
  module.exports = obj;
}
let state = __core_js_shared__.state;
if (!state) {
  const _module = __core_js_shared__;
  const weakMap = new _mod14175.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade) {
  if (state.has(facade)) {
    const typeError = new _mod14175.TypeError("Object already initialized");
    throw typeError;
  } else {
    arg1.facade = facade;
    const result = obj.set(facade, arg1);
    return arg1;
  }
  obj = state;
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
