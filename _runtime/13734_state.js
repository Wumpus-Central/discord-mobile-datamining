// === Module 13734: state ===

// Module 13734 (state)
import _mod13673 from "module_13673" /* 13673 */;
import prop from "prop" /* 13689 */;
import call from "call" /* 13696 */;
import _mod13718 from "module_13718" /* 13718 */;
import _mod13729 from "module_13729" /* 13729 */;
import all from "all" /* 13735 */;
import prop2 from "prop" /* 13736 */;

if (!all) {
  if (!prop.state) {
    const tmp = prop2("state");
    let closure_6 = tmp;
    _mod13718[tmp] = true;
    let fn = function t(facade) {
      if (call(facade, closure_6)) {
        const typeError = new _mod13673.TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        _mod13729(facade, closure_6, arg1);
        return arg1;
      }
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
  const obj = { set: null, get: null, has: null, enforce: null, getterFor: null };
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
      if (callback(dependencyMap[0])(arg0)) {
        const tmp4 = fn5(arg0);
        if (tmp4.type === callback) {
          return tmp4;
        }
      }
      const typeError = new callback(dependencyMap[1]).TypeError("Incompatible receiver, " + callback + " required");
      throw typeError;
    };
  };
  module.exports = obj;
}
let state = prop.state;
if (!state) {
  const _module = prop;
  const weakMap = new _mod13673.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade) {
  if (state.has(facade)) {
    const typeError = new _mod13673.TypeError("Object already initialized");
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