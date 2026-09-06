// _runtime/metro/06796__.js
import GESTURE_SOURCE from "../06628_GESTURE_SOURCE.js";
import LegacyBaseButton from "../06655_LegacyBaseButton.js";

require = arg1;
let dependencyMap = arg6;
let __initData = {
  code: "function pnpm_useGestureHandlerTs1(event){const{state,State,gestureSource,source,onStart}=this.__closure;state.value=State.BEGAN;gestureSource.value=source;onStart(source,event);return;}",
};
let __initData2 = {
  code: "function pnpm_useGestureHandlerTs2(event){const{gestureSource,source,state,onChange}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;onChange(source,event);}",
};
let __initData3 = {
  code: "function pnpm_useGestureHandlerTs3(event){const{gestureSource,source,state,GESTURE_SOURCE,onEnd}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;gestureSource.value=GESTURE_SOURCE.UNDETERMINED;onEnd(source,event);}",
};
let __initData4 = {
  code: "function pnpm_useGestureHandlerTs4(event){const{gestureSource,source,state,GESTURE_SOURCE,onFinalize}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;gestureSource.value=GESTURE_SOURCE.UNDETERMINED;onFinalize(source,event);}",
};

export const useGestureHandler = (
  CONTENT,
  animatedContentGestureState,
  sharedValue,
  handleOnStart,
  handleOnChange,
  handleOnEnd,
  handleOnFinalize,
) => {
  const _require = CONTENT;
  dependencyMap = animatedContentGestureState;
  __initData = sharedValue;
  __initData2 = handleOnStart;
  __initData3 = handleOnChange;
  __initData4 = handleOnEnd;
  let obj = { handleOnStart: null, handleOnChange: null, handleOnEnd: null, handleOnFinalize: null };
  let obj1 = require("cancelAnimation");
  class R {
    constructor(arg0) {
      closure_1.value = closure_0(closure_1[1]).State.BEGAN;
      closure_2.value = closure_0;
      tmp = closure_3(closure_0, CONTENT);
      return;
    }
  }
  obj = {
    state: animatedContentGestureState,
    State: require("LegacyBaseButton").State,
    gestureSource: sharedValue,
    source: CONTENT,
    onStart: handleOnStart,
  };
  R.__closure = obj;
  R.__workletHash = 16113572067379;
  R.__initData = __initData;
  const items = [animatedContentGestureState, sharedValue, CONTENT, handleOnStart];
  obj.handleOnStart = obj1.useWorkletCallback(R, items);
  class U {
    constructor(arg0) {
      if (closure_2.value === closure_0) {
        tmp2 = CONTENT;
        tmp3 = closure_1;
        closure_1.value = CONTENT.state;
        tmp4 = closure_4;
        tmp5 = closure_4(tmp, CONTENT);
      }
      return;
    }
  }
  U.__closure = {
    gestureSource: sharedValue,
    source: CONTENT,
    state: animatedContentGestureState,
    onChange: handleOnChange,
  };
  U.__workletHash = 9050442757159;
  U.__initData = __initData2;
  const items1 = [animatedContentGestureState, sharedValue, CONTENT, handleOnChange];
  obj.handleOnChange = require("cancelAnimation").useWorkletCallback(U, items1);
  const obj4 = require("cancelAnimation");
  class C {
    constructor(arg0) {
      if (closure_2.value === closure_0) {
        tmp3 = CONTENT;
        tmp4 = closure_1;
        closure_1.value = CONTENT.state;
        tmp5 = closure_0;
        tmp6 = closure_1;
        tmp.value = closure_0(closure_1[2]).GESTURE_SOURCE.UNDETERMINED;
        tmp7 = closure_5;
        tmp8 = closure_5(tmp2, CONTENT);
      }
      return;
    }
  }
  obj = {
    gestureSource: sharedValue,
    source: CONTENT,
    state: animatedContentGestureState,
    GESTURE_SOURCE: require("GESTURE_SOURCE").GESTURE_SOURCE,
    onEnd: handleOnEnd,
  };
  C.__closure = obj;
  C.__workletHash = 10682034812271;
  C.__initData = __initData3;
  const items2 = [animatedContentGestureState, sharedValue, CONTENT, handleOnEnd];
  obj.handleOnEnd = require("cancelAnimation").useWorkletCallback(C, items2);
  const obj5 = require("cancelAnimation");
  class T {
    constructor(arg0) {
      if (closure_2.value === closure_0) {
        tmp3 = CONTENT;
        tmp4 = closure_1;
        closure_1.value = CONTENT.state;
        tmp5 = closure_0;
        tmp6 = closure_1;
        tmp.value = closure_0(closure_1[2]).GESTURE_SOURCE.UNDETERMINED;
        tmp7 = closure_6;
        tmp8 = closure_6(tmp2, CONTENT);
      }
      return;
    }
  }
  obj1 = {
    gestureSource: sharedValue,
    source: CONTENT,
    state: animatedContentGestureState,
    GESTURE_SOURCE: require("GESTURE_SOURCE").GESTURE_SOURCE,
    onFinalize: handleOnFinalize,
  };
  T.__closure = obj1;
  T.__workletHash = 9696716573416;
  T.__initData = __initData4;
  const items3 = [animatedContentGestureState, sharedValue, CONTENT, handleOnFinalize];
  obj.handleOnFinalize = require("cancelAnimation").useWorkletCallback(T, items3);
  return obj;
};
