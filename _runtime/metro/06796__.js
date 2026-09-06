// === Module 6796: ? ===

// Module 6796
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6628 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;

require = arg1;
let dependencyMap = arg6;
let __initData = { code: "function pnpm_useGestureHandlerTs1(event){const{state,State,gestureSource,source,onStart}=this.__closure;state.value=State.BEGAN;gestureSource.value=source;onStart(source,event);return;}" };
let __initData2 = { code: "function pnpm_useGestureHandlerTs2(event){const{gestureSource,source,state,onChange}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;onChange(source,event);}" };
let __initData3 = { code: "function pnpm_useGestureHandlerTs3(event){const{gestureSource,source,state,GESTURE_SOURCE,onEnd}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;gestureSource.value=GESTURE_SOURCE.UNDETERMINED;onEnd(source,event);}" };
let __initData4 = { code: "function pnpm_useGestureHandlerTs4(event){const{gestureSource,source,state,GESTURE_SOURCE,onFinalize}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;gestureSource.value=GESTURE_SOURCE.UNDETERMINED;onFinalize(source,event);}" };

export const useGestureHandler = (source, state, gestureSource, onStart, onChange, onEnd, onFinalize) => {
  const _require = source;
  dependencyMap = state;
  __initData = gestureSource;
  __initData2 = onStart;
  __initData3 = onChange;
  __initData4 = onEnd;
  let obj = { handleOnStart: null, handleOnChange: null, handleOnEnd: null, handleOnFinalize: null };
  let obj1 = require("cancelAnimation");
  class R {
    constructor(arg0) {
      closure_1.value = closure_0(closure_1[1]).State.BEGAN;
      closure_2.value = closure_0;
      tmp = closure_3(closure_0, source);
      return;
    }
  }
  obj = { state, State: require("LegacyBaseButton").State, gestureSource, source, onStart };
  R.__closure = obj;
  R.__workletHash = 16113572067379;
  R.__initData = __initData;
  const items = [state, gestureSource, source, onStart];
  obj.handleOnStart = obj1.useWorkletCallback(R, items);
  class U {
    constructor(arg0) {
      if (closure_2.value === closure_0) {
        tmp2 = source;
        tmp3 = closure_1;
        closure_1.value = source.state;
        tmp4 = closure_4;
        tmp5 = closure_4(tmp, source);
      }
      return;
    }
  }
  U.__closure = { gestureSource, source, state, onChange };
  U.__workletHash = 9050442757159;
  U.__initData = __initData2;
  const items1 = [state, gestureSource, source, onChange];
  obj.handleOnChange = require("cancelAnimation").useWorkletCallback(U, items1);
  const obj4 = require("cancelAnimation");
  class C {
    constructor(arg0) {
      if (closure_2.value === closure_0) {
        tmp3 = source;
        tmp4 = closure_1;
        closure_1.value = source.state;
        tmp5 = closure_0;
        tmp6 = closure_1;
        tmp.value = closure_0(closure_1[2]).GESTURE_SOURCE.UNDETERMINED;
        tmp7 = closure_5;
        tmp8 = closure_5(tmp2, source);
      }
      return;
    }
  }
  obj = { gestureSource, source, state, GESTURE_SOURCE: require("GESTURE_SOURCE").GESTURE_SOURCE, onEnd };
  C.__closure = obj;
  C.__workletHash = 10682034812271;
  C.__initData = __initData3;
  const items2 = [state, gestureSource, source, onEnd];
  obj.handleOnEnd = require("cancelAnimation").useWorkletCallback(C, items2);
  const obj5 = require("cancelAnimation");
  class T {
    constructor(arg0) {
      if (closure_2.value === closure_0) {
        tmp3 = source;
        tmp4 = closure_1;
        closure_1.value = source.state;
        tmp5 = closure_0;
        tmp6 = closure_1;
        tmp.value = closure_0(closure_1[2]).GESTURE_SOURCE.UNDETERMINED;
        tmp7 = closure_6;
        tmp8 = closure_6(tmp2, source);
      }
      return;
    }
  }
  obj1 = { gestureSource, source, state, GESTURE_SOURCE: require("GESTURE_SOURCE").GESTURE_SOURCE, onFinalize };
  T.__closure = obj1;
  T.__workletHash = 9696716573416;
  T.__initData = __initData4;
  const items3 = [state, gestureSource, source, onFinalize];
  obj.handleOnFinalize = require("cancelAnimation").useWorkletCallback(T, items3);
  return obj;
};