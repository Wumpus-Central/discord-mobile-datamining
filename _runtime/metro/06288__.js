// _runtime/metro/06288__.js
import GESTURE_SOURCE from "../06120_GESTURE_SOURCE.js";
import LegacyBaseButton from "../06147_LegacyBaseButton.js";

const require = globalThis.__r;
let dependencyMap, tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;

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
  let items;
  let items1;
  let items2;
  let items3;
  let obj2;
  let obj4;
  let obj5;
  let obj7;
  const _require = CONTENT;
  dependencyMap = animatedContentGestureState;
  __initData = sharedValue;
  __initData2 = handleOnStart;
  __initData3 = handleOnChange;
  __initData4 = handleOnEnd;
  const obj = {
    handleOnStart: obj2.useWorkletCallback(R, items),
    handleOnChange: obj4.useWorkletCallback(U, items1),
    handleOnEnd: obj5.useWorkletCallback(C, items2),
    handleOnFinalize: obj7.useWorkletCallback(T, items3),
  };
  obj2 = require("01643__.js");
  class R {
    constructor(arg0) {
      closure_1.value = closure_0(closure_1[1]).State.BEGAN;
      closure_2.value = closure_0;
      tmp = closure_3(closure_0, CONTENT);
      return;
    }
  }
  R.__closure = {
    state: animatedContentGestureState,
    State: require("LegacyBaseButton").State,
    gestureSource: sharedValue,
    source: CONTENT,
    onStart: handleOnStart,
  };
  R.__workletHash = 16113572067379;
  R.__initData = __initData;
  items = [animatedContentGestureState, sharedValue, CONTENT, handleOnStart];
  ({
    state: animatedContentGestureState,
    State: require("LegacyBaseButton").State,
    gestureSource: sharedValue,
    source: CONTENT,
    onStart: handleOnStart,
  });
  obj4 = require("01643__.js");
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
  items1 = [animatedContentGestureState, sharedValue, CONTENT, handleOnChange];
  obj5 = require("01643__.js");
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
  C.__closure = {
    gestureSource: sharedValue,
    source: CONTENT,
    state: animatedContentGestureState,
    GESTURE_SOURCE: require("GESTURE_SOURCE").GESTURE_SOURCE,
    onEnd: handleOnEnd,
  };
  C.__workletHash = 10682034812271;
  C.__initData = __initData3;
  items2 = [animatedContentGestureState, sharedValue, CONTENT, handleOnEnd];
  ({
    gestureSource: sharedValue,
    source: CONTENT,
    state: animatedContentGestureState,
    GESTURE_SOURCE: require("GESTURE_SOURCE").GESTURE_SOURCE,
    onEnd: handleOnEnd,
  });
  obj7 = require("01643__.js");
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
  T.__closure = {
    gestureSource: sharedValue,
    source: CONTENT,
    state: animatedContentGestureState,
    GESTURE_SOURCE: require("GESTURE_SOURCE").GESTURE_SOURCE,
    onFinalize: handleOnFinalize,
  };
  T.__workletHash = 9696716573416;
  T.__initData = __initData4;
  items3 = [animatedContentGestureState, sharedValue, CONTENT, handleOnFinalize];
  ({
    gestureSource: sharedValue,
    source: CONTENT,
    state: animatedContentGestureState,
    GESTURE_SOURCE: require("GESTURE_SOURCE").GESTURE_SOURCE,
    onFinalize: handleOnFinalize,
  });
  return obj;
};
