// _runtime/metro/06259__.js
import tagMessage from "../06152_tagMessage.js";
import State from "../06153_State.js";

let fn2;
let fn3;
let fn4;
const setGestureState = function t(arg0, arg1) {
  const _globalThis = globalThis;
  if (globalThis._setGestureStateSync) {
    _globalThis._setGestureStateSync(arg0, arg1);
  } else if (_globalThis._setGestureStateAsync) {
    const _globalThis2 = globalThis;
    const result = globalThis._setGestureStateAsync(arg0, arg1);
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const obj = tagMessage;
    const error = new Error(obj.tagMessage("Failed to set gesture state"));
    throw error;
  }
};
let obj = { tagMessage: tagMessage.tagMessage };
setGestureState.__closure = obj;
setGestureState.__workletHash = 727405139747;
setGestureState.__initData = {
  code: "function pnpm_gestureStateManagerTs1(handlerTag,state){const{tagMessage}=this.__closure;if(globalThis._setGestureStateSync){globalThis._setGestureStateSync(handlerTag,state);}else if(globalThis._setGestureStateAsync){globalThis._setGestureStateAsync(handlerTag,state);}else{throw new Error(tagMessage('Failed to set gesture state'));}}",
};
const obj2 = { activate: fn2, fail: fn3, deactivate: fn4 };
fn2 = function _(arg0) {
  const ACTIVE = State.State.ACTIVE;
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
      const self = this;
      const self2 = this;
      const tmpResult = tagMessage;
      const error = new Error(tmpResult.tagMessage("Failed to set gesture state"));
      throw error;
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
fn2.__closure = { setGestureState, State: State.State };
fn2.__workletHash = 14928129771754;
fn2.__initData = {
  code: "function activate_Pnpm_gestureStateManagerTs2(handlerTag){const{setGestureState,State}=this.__closure;setGestureState(handlerTag,State.ACTIVE);}",
};
fn3 = function n(arg0) {
  const FAILED = State.State.FAILED;
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
      const self = this;
      const self2 = this;
      const tmpResult = tagMessage;
      const error = new Error(tmpResult.tagMessage("Failed to set gesture state"));
      throw error;
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
({ setGestureState, State: State.State });
fn3.__closure = { setGestureState, State: State.State };
fn3.__workletHash = 1703030189599;
fn3.__initData = {
  code: "function fail_Pnpm_gestureStateManagerTs3(handlerTag){const{setGestureState,State}=this.__closure;setGestureState(handlerTag,State.FAILED);}",
};
fn4 = function s(arg0) {
  const END = State.State.END;
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
      const self = this;
      const self2 = this;
      const tmpResult = tagMessage;
      const error = new Error(tmpResult.tagMessage("Failed to set gesture state"));
      throw error;
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
({ setGestureState, State: State.State });
fn4.__closure = { setGestureState, State: State.State };
fn4.__workletHash = 5511283927342;
fn4.__initData = {
  code: "function deactivate_Pnpm_gestureStateManagerTs4(handlerTag){const{setGestureState,State}=this.__closure;setGestureState(handlerTag,State.END);}",
};
({ setGestureState, State: State.State });

export const GestureStateManager = obj2;
