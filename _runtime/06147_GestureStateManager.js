// === Module 6147: GestureStateManager ===

// Module 6147 (GestureStateManager)
import tagMessage from "tagMessage" /* 6145 */;
import State from "State" /* 6146 */;

const require = globalThis.__r;
let _require;

let create;
let wrappedSetGestureState = function t(arg0, arg1) {
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
wrappedSetGestureState.__closure = obj;
wrappedSetGestureState.__workletHash = 727405139747;
wrappedSetGestureState.__initData = { code: "function pnpm_gestureStateManagerTs1(handlerTag,state){const{tagMessage}=this.__closure;if(globalThis._setGestureStateSync){globalThis._setGestureStateSync(handlerTag,state);}else if(globalThis._setGestureStateAsync){globalThis._setGestureStateAsync(handlerTag,state);}else{throw new Error(tagMessage('Failed to set gesture state'));}}" };
const __initData = { code: "function pnpm_gestureStateManagerTs3(){const{wrappedSetGestureState,handlerTag,State}=this.__closure;wrappedSetGestureState(handlerTag,State.BEGAN);}" };
const __initData2 = { code: "function pnpm_gestureStateManagerTs4(){const{wrappedSetGestureState,handlerTag,State}=this.__closure;wrappedSetGestureState(handlerTag,State.ACTIVE);}" };
const __initData3 = { code: "function pnpm_gestureStateManagerTs5(){const{wrappedSetGestureState,handlerTag,State}=this.__closure;wrappedSetGestureState(handlerTag,State.FAILED);}" };
const __initData4 = { code: "function pnpm_gestureStateManagerTs6(){const{wrappedSetGestureState,handlerTag,State}=this.__closure;wrappedSetGestureState(handlerTag,State.END);}" };
const obj2 = { create };
create = function create(handlerTag) {
  let fn2;
  let fn3;
  let wrappedSetGestureState;
  _require = handlerTag;
  const obj = { handlerTag, begin: wrappedSetGestureState, activate: fn2, fail: S, end: fn3 };
  wrappedSetGestureState = function p() {
    const BEGAN = State.State.BEGAN;
    if (typeof fn === "function") {
      const _globalThis = globalThis;
      const _globalThis2 = globalThis;
      if (globalThis._setGestureStateSync) {
        _globalThis2._setGestureStateSync(handlerTag, BEGAN);
      } else if (_globalThis2._setGestureStateAsync) {
        const _globalThis3 = globalThis;
        const result = globalThis._setGestureStateAsync(handlerTag, BEGAN);
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const tmp2Result = tagMessage;
        const error = new Error(tmp2Result.tagMessage("Failed to set gesture state"));
        throw error;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  wrappedSetGestureState.__closure = { wrappedSetGestureState, handlerTag, State: require("State").State };
  wrappedSetGestureState.__workletHash = 15218261064802;
  wrappedSetGestureState.__initData = __initData;
  fn2 = function c() {
    const ACTIVE = State.State.ACTIVE;
    if (typeof fn === "function") {
      const _globalThis = globalThis;
      const _globalThis2 = globalThis;
      if (globalThis._setGestureStateSync) {
        _globalThis2._setGestureStateSync(handlerTag, ACTIVE);
      } else if (_globalThis2._setGestureStateAsync) {
        const _globalThis3 = globalThis;
        const result = globalThis._setGestureStateAsync(handlerTag, ACTIVE);
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const tmp2Result = tagMessage;
        const error = new Error(tmp2Result.tagMessage("Failed to set gesture state"));
        throw error;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  ({ wrappedSetGestureState, handlerTag, State: require("State").State });
  fn2.__closure = { wrappedSetGestureState, handlerTag, State: require("State").State };
  fn2.__workletHash = 4587865373510;
  fn2.__initData = __initData2;
  ({ wrappedSetGestureState, handlerTag, State: require("State").State });
  class S {
    constructor() {
      const FAILED = State.State.FAILED;
      if (typeof fn === "function") {
        const _globalThis = globalThis;
        const _globalThis2 = globalThis;
        if (globalThis._setGestureStateSync) {
          _globalThis2._setGestureStateSync(handlerTag, FAILED);
        } else if (_globalThis2._setGestureStateAsync) {
          const _globalThis3 = globalThis;
          const result = globalThis._setGestureStateAsync(handlerTag, FAILED);
        } else {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const tmp2Result = tagMessage;
          const error = new Error(tmp2Result.tagMessage("Failed to set gesture state"));
          throw error;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  S.__closure = { wrappedSetGestureState, handlerTag, State: require("State").State };
  S.__workletHash = 12634480855880;
  S.__initData = __initData3;
  fn3 = function s() {
    const END = State.State.END;
    if (typeof fn === "function") {
      const _globalThis = globalThis;
      const _globalThis2 = globalThis;
      if (globalThis._setGestureStateSync) {
        _globalThis2._setGestureStateSync(handlerTag, END);
      } else if (_globalThis2._setGestureStateAsync) {
        const _globalThis3 = globalThis;
        const result = globalThis._setGestureStateAsync(handlerTag, END);
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const tmp2Result = tagMessage;
        const error = new Error(tmp2Result.tagMessage("Failed to set gesture state"));
        throw error;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  ({ wrappedSetGestureState, handlerTag, State: require("State").State });
  fn3.__closure = { wrappedSetGestureState, handlerTag, State: require("State").State };
  fn3.__workletHash = 6198601582791;
  fn3.__initData = __initData4;
  ({ wrappedSetGestureState, handlerTag, State: require("State").State });
  return obj;
};
const obj3 = { wrappedSetGestureState, State: State.State };
create.__closure = obj3;
create.__workletHash = 1974124167608;
create.__initData = { code: "function create_Pnpm_gestureStateManagerTs2(handlerTag){const{wrappedSetGestureState,State}=this.__closure;return{handlerTag:handlerTag,begin:function(){'worklet';wrappedSetGestureState(handlerTag,State.BEGAN);},activate:function(){'worklet';wrappedSetGestureState(handlerTag,State.ACTIVE);},fail:function(){'worklet';wrappedSetGestureState(handlerTag,State.FAILED);},end:function(){'worklet';wrappedSetGestureState(handlerTag,State.END);}};}" };

export const GestureStateManager = obj2;