// _runtime/05764_t.js
import tagMessage from "05657_tagMessage.js";
import _mod5658 from "metro/05658__.js";

require = arg1;
const dependencyMap = arg6;
const fn = function t(arg0, arg1) {
  const _globalThis = globalThis;
  if (globalThis._setGestureStateSync) {
    _globalThis._setGestureStateSync(arg0, arg1);
  } else if (_globalThis._setGestureStateAsync) {
    const _globalThis2 = globalThis;
    const result = globalThis._setGestureStateAsync(arg0, arg1);
  } else {
    const _Error = Error;
    error = new Error(tagMessage.tagMessage("Failed to set gesture state"));
    throw error;
  }
};
let obj = { tagMessage: require("tagMessage").tagMessage };
fn.__closure = obj;
fn.__workletHash = 727405139747;
fn.__initData = { code: "function pnpm_gestureStateManagerTs1(handlerTag,state){const{tagMessage}=this.__closure;if(globalThis._setGestureStateSync){globalThis._setGestureStateSync(handlerTag,state);}else if(globalThis._setGestureStateAsync){globalThis._setGestureStateAsync(handlerTag,state);}else{throw new Error(tagMessage('Failed to set gesture state'));}}" };
obj = { activate: null, fail: null, deactivate: null };
const fn2 = function _(arg0) {
  const ACTIVE = _mod5658.State.ACTIVE;
  if (typeof fn !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const _globalThis = globalThis;
  if (globalThis._setGestureStateSync) {
    _globalThis._setGestureStateSync(arg0, ACTIVE);
  } else if (_globalThis._setGestureStateAsync) {
    const _globalThis2 = globalThis;
    const result = globalThis._setGestureStateAsync(arg0, ACTIVE);
  } else {
    const _Error = Error;
    error = new Error(tagMessage.tagMessage("Failed to set gesture state"));
    throw error;
  }
};
obj = { setGestureState: fn, State: require("metro/05658__.js").State };
fn2.__closure = obj;
fn2.__workletHash = 14928129771754;
fn2.__initData = { code: "function activate_Pnpm_gestureStateManagerTs2(handlerTag){const{setGestureState,State}=this.__closure;setGestureState(handlerTag,State.ACTIVE);}" };
obj[0] = fn2;
const fn3 = function n(arg0) {
  const FAILED = _mod5658.State.FAILED;
  if (typeof fn !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const _globalThis = globalThis;
  if (globalThis._setGestureStateSync) {
    _globalThis._setGestureStateSync(arg0, FAILED);
  } else if (_globalThis._setGestureStateAsync) {
    const _globalThis2 = globalThis;
    const result = globalThis._setGestureStateAsync(arg0, FAILED);
  } else {
    const _Error = Error;
    error = new Error(tagMessage.tagMessage("Failed to set gesture state"));
    throw error;
  }
};
fn3.__closure = { setGestureState: fn, State: require("metro/05658__.js").State };
fn3.__workletHash = 1703030189599;
fn3.__initData = { code: "function fail_Pnpm_gestureStateManagerTs3(handlerTag){const{setGestureState,State}=this.__closure;setGestureState(handlerTag,State.FAILED);}" };
obj[1] = fn3;
const fn4 = function s(arg0) {
  const END = _mod5658.State.END;
  if (typeof fn !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const _globalThis = globalThis;
  if (globalThis._setGestureStateSync) {
    _globalThis._setGestureStateSync(arg0, END);
  } else if (_globalThis._setGestureStateAsync) {
    const _globalThis2 = globalThis;
    const result = globalThis._setGestureStateAsync(arg0, END);
  } else {
    const _Error = Error;
    error = new Error(tagMessage.tagMessage("Failed to set gesture state"));
    throw error;
  }
};
const obj1 = { setGestureState: fn, State: require("metro/05658__.js").State };
fn4.__closure = { setGestureState: fn, State: require("metro/05658__.js").State };
fn4.__workletHash = 5511283927342;
fn4.__initData = { code: "function deactivate_Pnpm_gestureStateManagerTs4(handlerTag){const{setGestureState,State}=this.__closure;setGestureState(handlerTag,State.END);}" };
obj[2] = fn4;
arg5.GestureStateManager = obj;