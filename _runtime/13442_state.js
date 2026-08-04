// _runtime/13442_state.js
import { state } from "__core-js_shared__";

if (!require("all")) {
  if (!require("__core-js_shared__").state) {
    const tmp = require("__core-js_shared__")("state");
    let closure_6 = tmp;
    require("module_13426")[tmp] = true;
    let fn = function t(facade) {
      if (require(13404) /* call */(facade, closure_6)) {
        const typeError = new tmp(13381).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        tmp(13437)(facade, tmp3, arg1);
        return arg1;
      }
      tmp3 = closure_6;
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require(13404) /* call */(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require(13404) /* call */(arg0, closure_6);
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
    let closure_0 = arg0;
    return (arg0) => {
      if (callback(outer1_1[0])(arg0)) {
        const tmp4 = outer1_3(arg0);
        if (tmp4.type === callback) {
          return tmp4;
        }
      }
      const typeError = new callback(outer1_1[1]).TypeError("Incompatible receiver, " + callback + " required");
      throw typeError;
    };
  };
  module.exports = obj;
}
if (!state) {
  const _module = require("__core-js_shared__");
  const weakMap = new require("module_13381").WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade) {
  if (state.has(facade)) {
    const typeError = new require(13381).TypeError("Object already initialized");
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