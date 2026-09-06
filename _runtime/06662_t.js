// === Module 6662: t ===

// Module 6662 (t)
import tagMessage from "tagMessage" /* 6660 */;

require = arg1;
const dependencyMap = arg6;
let fn = function t(arg0, arg1) {
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
let closure_3 = { code: "function pnpm_gestureStateManagerTs3(){const{wrappedSetGestureState,handlerTag,State}=this.__closure;wrappedSetGestureState(handlerTag,State.BEGAN);}" };
let closure_4 = { code: "function pnpm_gestureStateManagerTs4(){const{wrappedSetGestureState,handlerTag,State}=this.__closure;wrappedSetGestureState(handlerTag,State.ACTIVE);}" };
let closure_5 = { code: "function pnpm_gestureStateManagerTs5(){const{wrappedSetGestureState,handlerTag,State}=this.__closure;wrappedSetGestureState(handlerTag,State.FAILED);}" };
let closure_6 = { code: "function pnpm_gestureStateManagerTs6(){const{wrappedSetGestureState,handlerTag,State}=this.__closure;wrappedSetGestureState(handlerTag,State.END);}" };
obj = { create: null };
function create(handlerTag) {
  const _require = handlerTag;
  let obj = { handlerTag, begin: null, activate: null, fail: null, end: null };
  fn = function p() {
    const BEGAN = handlerTag(closure_1_1[1]).State.BEGAN;
    if (typeof closure_1_2 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _globalThis = globalThis;
    if (globalThis._setGestureStateSync) {
      _globalThis._setGestureStateSync(tmp, BEGAN);
    } else if (_globalThis._setGestureStateAsync) {
      const _globalThis2 = globalThis;
      const result = globalThis._setGestureStateAsync(tmp, BEGAN);
    } else {
      const _Error = Error;
      error = new Error(handlerTag(closure_1_1[0]).tagMessage("Failed to set gesture state"));
      throw error;
    }
  };
  obj = { wrappedSetGestureState: fn, handlerTag, State: _require(6661).State };
  fn.__closure = obj;
  fn.__workletHash = 15218261064802;
  fn.__initData = closure_3;
  obj[1] = fn;
  const fn2 = function c() {
    const ACTIVE = handlerTag(closure_1_1[1]).State.ACTIVE;
    if (typeof closure_1_2 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _globalThis = globalThis;
    if (globalThis._setGestureStateSync) {
      _globalThis._setGestureStateSync(tmp, ACTIVE);
    } else if (_globalThis._setGestureStateAsync) {
      const _globalThis2 = globalThis;
      const result = globalThis._setGestureStateAsync(tmp, ACTIVE);
    } else {
      const _Error = Error;
      error = new Error(handlerTag(closure_1_1[0]).tagMessage("Failed to set gesture state"));
      throw error;
    }
  };
  obj = { wrappedSetGestureState: fn, handlerTag, State: _require(6661).State };
  fn2.__closure = obj;
  fn2.__workletHash = 4587865373510;
  fn2.__initData = closure_4;
  obj[2] = fn2;
  class S {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_0;
      tmp3 = closure_1_1;
      FAILED = closure_0(closure_1_1[1]).State.FAILED;
      if (typeof closure_1_2 !== "function") {
        str2 = "Trying to call a non-function";
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      _globalThis = globalThis;
      if (globalThis._setGestureStateSync) {
        _setGestureStateSyncResult = _globalThis._setGestureStateSync(tmp, FAILED);
      } else if (_globalThis._setGestureStateAsync) {
        _globalThis2 = globalThis;
        result = globalThis._setGestureStateAsync(tmp, FAILED);
      } else {
        _Error = Error;
        tmp2Result = tmp2(tmp3[0]);
        str = "Failed to set gesture state";
        tmp4 = new.target;
        tmp5 = new.target;
        error = new Error(tmp2Result.tagMessage("Failed to set gesture state"));
        tmp7 = error;
        throw error;
      }
      return;
    }
  }
  S.__closure = { wrappedSetGestureState: fn, handlerTag, State: _require(6661).State };
  S.__workletHash = 12634480855880;
  S.__initData = closure_5;
  obj[3] = S;
  const fn3 = function s() {
    const END = handlerTag(closure_1_1[1]).State.END;
    if (typeof closure_1_2 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _globalThis = globalThis;
    if (globalThis._setGestureStateSync) {
      _globalThis._setGestureStateSync(tmp, END);
    } else if (_globalThis._setGestureStateAsync) {
      const _globalThis2 = globalThis;
      const result = globalThis._setGestureStateAsync(tmp, END);
    } else {
      const _Error = Error;
      error = new Error(handlerTag(closure_1_1[0]).tagMessage("Failed to set gesture state"));
      throw error;
    }
  };
  obj1 = { wrappedSetGestureState: fn, handlerTag, State: _require(6661).State };
  fn3.__closure = { wrappedSetGestureState: fn, handlerTag, State: _require(6661).State };
  fn3.__workletHash = 6198601582791;
  fn3.__initData = closure_6;
  obj[4] = fn3;
  return obj;
}
obj = { wrappedSetGestureState: fn, State: require("module_6661").State };
create.__closure = obj;
create.__workletHash = 1974124167608;
create.__initData = { code: "function create_Pnpm_gestureStateManagerTs2(handlerTag){const{wrappedSetGestureState,State}=this.__closure;return{handlerTag:handlerTag,begin:function(){'worklet';wrappedSetGestureState(handlerTag,State.BEGAN);},activate:function(){'worklet';wrappedSetGestureState(handlerTag,State.ACTIVE);},fail:function(){'worklet';wrappedSetGestureState(handlerTag,State.FAILED);},end:function(){'worklet';wrappedSetGestureState(handlerTag,State.END);}};}" };
obj[0] = create;
arg5.GestureStateManager = obj;