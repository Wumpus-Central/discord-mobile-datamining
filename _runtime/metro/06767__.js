// _runtime/metro/06767__.js
import tagMessage from "../06660_tagMessage.js";
import _mod6661 from "06661__.js";

require = fn;
const dependencyMap = arg6;
const setGestureState = function t(arg0, arg1) {
  const _globalThis = globalThis;
  if (globalThis._setGestureStateSync) {
    _globalThis._setGestureStateSync(arg0, arg1);
  } else if (_globalThis._setGestureStateAsync) {
    const _globalThis2 = globalThis;
    const result = globalThis._setGestureStateAsync(arg0, arg1);
  } else {
    const _Error = Error;
    const error = new Error(tagMessage.tagMessage("Failed to set gesture state"));
    throw error;
  }
};
let obj = { tagMessage: fn(6660).tagMessage };
setGestureState.__closure = obj;
setGestureState.__workletHash = 727405139747;
setGestureState.__initData = {
  code: "function pnpm_gestureStateManagerTs1(handlerTag,state){const{tagMessage}=this.__closure;if(globalThis._setGestureStateSync){globalThis._setGestureStateSync(handlerTag,state);}else if(globalThis._setGestureStateAsync){globalThis._setGestureStateAsync(handlerTag,state);}else{throw new Error(tagMessage('Failed to set gesture state'));}}",
};
obj = { activate: null, fail: null, deactivate: null };
const fn2 = function _(arg0) {
  const ACTIVE = _mod6661.State.ACTIVE;
  if (typeof fn === "function") {
    const _globalThis = globalThis;
    const _globalThis2 = globalThis;
    if (globalThis._setGestureStateSync) {
      _globalThis2._setGestureStateSync(arg0, ACTIVE);
    } else if (_globalThis2._setGestureStateAsync) {
      const _globalThis3 = globalThis;
      const result = globalThis._setGestureStateAsync(arg0, ACTIVE);
    } else {
      const _Error = Error;
      const error = new Error(tagMessage.tagMessage("Failed to set gesture state"));
      throw error;
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
obj = { setGestureState, State: fn(6661).State };
fn2.__closure = obj;
fn2.__workletHash = 14928129771754;
fn2.__initData = {
  code: "function activate_Pnpm_gestureStateManagerTs2(handlerTag){const{setGestureState,State}=this.__closure;setGestureState(handlerTag,State.ACTIVE);}",
};
obj.activate = fn2;
const fn3 = function n(arg0) {
  const FAILED = _mod6661.State.FAILED;
  if (typeof fn === "function") {
    const _globalThis = globalThis;
    const _globalThis2 = globalThis;
    if (globalThis._setGestureStateSync) {
      _globalThis2._setGestureStateSync(arg0, FAILED);
    } else if (_globalThis2._setGestureStateAsync) {
      const _globalThis3 = globalThis;
      const result = globalThis._setGestureStateAsync(arg0, FAILED);
    } else {
      const _Error = Error;
      const error = new Error(tagMessage.tagMessage("Failed to set gesture state"));
      throw error;
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
fn3.__closure = { setGestureState, State: fn(6661).State };
fn3.__workletHash = 1703030189599;
fn3.__initData = {
  code: "function fail_Pnpm_gestureStateManagerTs3(handlerTag){const{setGestureState,State}=this.__closure;setGestureState(handlerTag,State.FAILED);}",
};
obj.fail = fn3;
const fn4 = function s(arg0) {
  const END = _mod6661.State.END;
  if (typeof fn === "function") {
    const _globalThis = globalThis;
    const _globalThis2 = globalThis;
    if (globalThis._setGestureStateSync) {
      _globalThis2._setGestureStateSync(arg0, END);
    } else if (_globalThis2._setGestureStateAsync) {
      const _globalThis3 = globalThis;
      const result = globalThis._setGestureStateAsync(arg0, END);
    } else {
      const _Error = Error;
      const error = new Error(tagMessage.tagMessage("Failed to set gesture state"));
      throw error;
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const obj1 = { setGestureState, State: fn(6661).State };
fn4.__closure = { setGestureState, State: fn(6661).State };
fn4.__workletHash = 5511283927342;
fn4.__initData = {
  code: "function deactivate_Pnpm_gestureStateManagerTs4(handlerTag){const{setGestureState,State}=this.__closure;setGestureState(handlerTag,State.END);}",
};
obj.deactivate = fn4;

export const GestureStateManager = obj;
