// _runtime/05359_setGestureState.js
import toArray from "toArray";
import { Reanimated } from "cancelAnimation";
import { Reanimated as Reanimated2 } from "cancelAnimation";
import { 05358__ } from "metro/05358__.js";

const tagMessageResult = toArray.tagMessage("react-native-reanimated is required in order to use synchronous state management");
let useSharedValue;
if (Reanimated != null) {
  useSharedValue = Reanimated.useSharedValue;
}
let c3 = tmp4;
let setGestureState;
if (Reanimated2 != null) {
  setGestureState = Reanimated2.setGestureState;
}
let closure_5 = { code: "function pnpm_gestureStateManagerTs2(){const{REANIMATED_AVAILABLE,setGestureState,handlerTag,State,warningMessage}=this.__closure;if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.BEGAN);}else{console.warn(warningMessage);}}" };
let closure_6 = { code: "function pnpm_gestureStateManagerTs3(){const{REANIMATED_AVAILABLE,setGestureState,handlerTag,State,warningMessage}=this.__closure;if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.ACTIVE);}else{console.warn(warningMessage);}}" };
let closure_7 = { code: "function pnpm_gestureStateManagerTs4(){const{REANIMATED_AVAILABLE,setGestureState,handlerTag,State,warningMessage}=this.__closure;if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.FAILED);}else{console.warn(warningMessage);}}" };
let closure_8 = { code: "function pnpm_gestureStateManagerTs5(){const{REANIMATED_AVAILABLE,setGestureState,handlerTag,State,warningMessage}=this.__closure;if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.END);}else{console.warn(warningMessage);}}" };
let obj = { create: null };
function create(handlerTag) {
  const _require = handlerTag;
  let obj = { handlerTag, begin: null, activate: null, fail: null, end: null };
  class T {
    constructor() {
      if (outer1_3) {
        tmp4 = outer1_4;
        tmp5 = closure_0;
        tmp6 = closure_0;
        tmp7 = outer1_1;
        tmp8 = outer1_4(closure_0, closure_0(outer1_1[2]).State.BEGAN);
      } else {
        tmp = globalThis;
        _console = console;
        tmp2 = outer1_2;
        warnResult = console.warn(outer1_2);
      }
      return;
    }
  }
  obj = { REANIMATED_AVAILABLE: closure_3, setGestureState, handlerTag, State: _05358__.State, warningMessage: closure_2 };
  T.__closure = obj;
  T.__workletHash = 4799367197403;
  T.__initData = closure_5;
  obj[1] = T;
  class S {
    constructor() {
      if (outer1_3) {
        tmp4 = outer1_4;
        tmp5 = closure_0;
        tmp6 = closure_0;
        tmp7 = outer1_1;
        tmp8 = outer1_4(closure_0, closure_0(outer1_1[2]).State.ACTIVE);
      } else {
        tmp = globalThis;
        _console = console;
        tmp2 = outer1_2;
        warnResult = console.warn(outer1_2);
      }
      return;
    }
  }
  obj = { REANIMATED_AVAILABLE: closure_3, setGestureState, handlerTag, State: _05358__.State, warningMessage: closure_2 };
  S.__closure = obj;
  S.__workletHash = 7932903515929;
  S.__initData = closure_6;
  obj[2] = S;
  const fn = function c() {
    if (outer1_3) {
      outer1_4(handlerTag, handlerTag(outer1_1[2]).State.FAILED);
    } else {
      const _console = console;
      console.warn(outer1_2);
    }
  };
  fn.__closure = { REANIMATED_AVAILABLE: closure_3, setGestureState, handlerTag, State: _05358__.State, warningMessage: closure_2 };
  fn.__workletHash = 6492077607729;
  fn.__initData = closure_7;
  obj[3] = fn;
  const fn2 = function u() {
    if (outer1_3) {
      outer1_4(handlerTag, handlerTag(outer1_1[2]).State.END);
    } else {
      const _console = console;
      console.warn(outer1_2);
    }
  };
  const obj1 = { REANIMATED_AVAILABLE: closure_3, setGestureState, handlerTag, State: _05358__.State, warningMessage: closure_2 };
  fn2.__closure = { REANIMATED_AVAILABLE: closure_3, setGestureState, handlerTag, State: _05358__.State, warningMessage: closure_2 };
  fn2.__workletHash = 2856860112444;
  fn2.__initData = closure_8;
  obj[4] = fn2;
  return obj;
}
obj = { REANIMATED_AVAILABLE: tmp4, setGestureState, State: require("module_5358").State, warningMessage: tagMessageResult };
create.__closure = obj;
create.__workletHash = 11660087535665;
create.__initData = { code: "function create_Pnpm_gestureStateManagerTs1(handlerTag){const{REANIMATED_AVAILABLE,setGestureState,State,warningMessage}=this.__closure;return{handlerTag:handlerTag,begin:function(){'worklet';if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.BEGAN);}else{console.warn(warningMessage);}},activate:function(){'worklet';if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.ACTIVE);}else{console.warn(warningMessage);}},fail:function(){'worklet';if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.FAILED);}else{console.warn(warningMessage);}},end:function(){'worklet';if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.END);}else{console.warn(warningMessage);}}};}" };
obj[0] = create;

export const GestureStateManager = obj;