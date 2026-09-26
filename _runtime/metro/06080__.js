// === Module 6080: ? ===

// Module 6080
import tagMessage from "tagMessage" /* 6078 */;
import _mod6079 from "module_6079" /* 6079 */;

require = fn;
const dependencyMap = arg6;
let wrappedSetGestureState = function t(arg0, arg1) {
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
wrappedSetGestureState.__closure = { tagMessage: fn(6078).tagMessage };
wrappedSetGestureState.__workletHash = 727405139747;
wrappedSetGestureState.__initData = { code: "function pnpm_gestureStateManagerTs1(handlerTag,state){const{tagMessage}=this.__closure;if(globalThis._setGestureStateSync){globalThis._setGestureStateSync(handlerTag,state);}else if(globalThis._setGestureStateAsync){globalThis._setGestureStateAsync(handlerTag,state);}else{throw new Error(tagMessage('Failed to set gesture state'));}}" };
const __initData = { code: "function pnpm_gestureStateManagerTs3(){const{wrappedSetGestureState,handlerTag,State}=this.__closure;wrappedSetGestureState(handlerTag,State.BEGAN);}" };
const __initData2 = { code: "function pnpm_gestureStateManagerTs4(){const{wrappedSetGestureState,handlerTag,State}=this.__closure;wrappedSetGestureState(handlerTag,State.ACTIVE);}" };
const __initData3 = { code: "function pnpm_gestureStateManagerTs5(){const{wrappedSetGestureState,handlerTag,State}=this.__closure;wrappedSetGestureState(handlerTag,State.FAILED);}" };
const __initData4 = { code: "function pnpm_gestureStateManagerTs6(){const{wrappedSetGestureState,handlerTag,State}=this.__closure;wrappedSetGestureState(handlerTag,State.END);}" };
let obj2 = { create: null };
function create(handlerTag) {
  _require = handlerTag;
  const obj = { handlerTag, begin: null, activate: null, fail: null, end: null };
  const wrappedSetGestureState = function p() {
    const BEGAN = _mod6079.State.BEGAN;
    if (typeof fn === "function") {
      const _globalThis = globalThis;
      const _globalThis2 = globalThis;
      if (globalThis._setGestureStateSync) {
        _globalThis2._setGestureStateSync(closure_0, BEGAN);
      } else if (_globalThis2._setGestureStateAsync) {
        const _globalThis3 = globalThis;
        const result = globalThis._setGestureStateAsync(closure_0, BEGAN);
      } else {
        const _Error = Error;
        const error = new Error(tagMessage.tagMessage("Failed to set gesture state"));
        throw error;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  wrappedSetGestureState.__closure = { wrappedSetGestureState, handlerTag, State: require("module_6079").State };
  wrappedSetGestureState.__workletHash = 15218261064802;
  wrappedSetGestureState.__initData = __initData;
  obj.begin = wrappedSetGestureState;
  const fn2 = function c() {
    const ACTIVE = _mod6079.State.ACTIVE;
    if (typeof fn === "function") {
      const _globalThis = globalThis;
      const _globalThis2 = globalThis;
      if (globalThis._setGestureStateSync) {
        _globalThis2._setGestureStateSync(closure_0, ACTIVE);
      } else if (_globalThis2._setGestureStateAsync) {
        const _globalThis3 = globalThis;
        const result = globalThis._setGestureStateAsync(closure_0, ACTIVE);
      } else {
        const _Error = Error;
        const error = new Error(tagMessage.tagMessage("Failed to set gesture state"));
        throw error;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const obj2 = { wrappedSetGestureState, handlerTag, State: require("module_6079").State };
  fn2.__closure = { wrappedSetGestureState, handlerTag, State: require("module_6079").State };
  fn2.__workletHash = 4587865373510;
  fn2.__initData = __initData2;
  obj.activate = fn2;
  class S {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_0;
      tmp3 = closure_1;
      FAILED = closure_0(closure_1[1]).State.FAILED;
      if (typeof t === "function") {
        tmp4 = globalThis;
        _globalThis = globalThis;
        _globalThis2 = globalThis;
        if (globalThis._setGestureStateSync) {
          _setGestureStateSyncResult = _globalThis2._setGestureStateSync(tmp, FAILED);
        } else if (_globalThis2._setGestureStateAsync) {
          _globalThis3 = globalThis;
          result = globalThis._setGestureStateAsync(tmp, FAILED);
        } else {
          _Error = Error;
          tmp2Result = tmp2(tmp3[0]);
          str = "Failed to set gesture state";
          tmp5 = new.target;
          tmp6 = new.target;
          error = new Error(tmp2Result.tagMessage("Failed to set gesture state"));
          tmp8 = error;
          throw error;
        }
        return;
      } else {
        str2 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  const obj3 = { wrappedSetGestureState, handlerTag, State: require("module_6079").State };
  S.__closure = { wrappedSetGestureState, handlerTag, State: require("module_6079").State };
  S.__workletHash = 12634480855880;
  S.__initData = __initData3;
  obj.fail = S;
  const fn3 = function s() {
    const END = _mod6079.State.END;
    if (typeof fn === "function") {
      const _globalThis = globalThis;
      const _globalThis2 = globalThis;
      if (globalThis._setGestureStateSync) {
        _globalThis2._setGestureStateSync(closure_0, END);
      } else if (_globalThis2._setGestureStateAsync) {
        const _globalThis3 = globalThis;
        const result = globalThis._setGestureStateAsync(closure_0, END);
      } else {
        const _Error = Error;
        const error = new Error(tagMessage.tagMessage("Failed to set gesture state"));
        throw error;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const obj4 = { wrappedSetGestureState, handlerTag, State: require("module_6079").State };
  fn3.__closure = { wrappedSetGestureState, handlerTag, State: require("module_6079").State };
  fn3.__workletHash = 6198601582791;
  fn3.__initData = __initData4;
  obj.end = fn3;
  return obj;
}
let obj = { tagMessage: fn(6078).tagMessage };
create.__closure = { wrappedSetGestureState, State: fn(6079).State };
create.__workletHash = 1974124167608;
create.__initData = { code: "function create_Pnpm_gestureStateManagerTs2(handlerTag){const{wrappedSetGestureState,State}=this.__closure;return{handlerTag:handlerTag,begin:function(){'worklet';wrappedSetGestureState(handlerTag,State.BEGAN);},activate:function(){'worklet';wrappedSetGestureState(handlerTag,State.ACTIVE);},fail:function(){'worklet';wrappedSetGestureState(handlerTag,State.FAILED);},end:function(){'worklet';wrappedSetGestureState(handlerTag,State.END);}};}" };
obj2.create = create;

export const GestureStateManager = obj2;