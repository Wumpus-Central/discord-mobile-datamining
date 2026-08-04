// _runtime/05359_useGestureHandler.js
const require = arg1;
let dependencyMap = arg6;
let closure_2 = { code: "function pnpm_useGestureHandlerTs1(event){const{state,State,gestureSource,source,onStart}=this.__closure;state.value=State.BEGAN;gestureSource.value=source;onStart(source,event);return;}" };
let closure_3 = { code: "function pnpm_useGestureHandlerTs2(event){const{gestureSource,source,state,onChange}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;onChange(source,event);}" };
let closure_4 = { code: "function pnpm_useGestureHandlerTs3(event){const{gestureSource,source,state,GESTURE_SOURCE,onEnd}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;gestureSource.value=GESTURE_SOURCE.UNDETERMINED;onEnd(source,event);}" };
let closure_5 = { code: "function pnpm_useGestureHandlerTs4(event){const{gestureSource,source,state,GESTURE_SOURCE,onFinalize}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;gestureSource.value=GESTURE_SOURCE.UNDETERMINED;onFinalize(source,event);}" };
arg5.useGestureHandler = (source, state, gestureSource, onStart, onChange, onEnd, onFinalize) => {
  const _require = source;
  const dependencyMap = state;
  let closure_2 = gestureSource;
  let closure_3 = onStart;
  let closure_4 = onChange;
  let closure_5 = onEnd;
  let closure_6 = onFinalize;
  let obj = { handleOnStart: null, handleOnChange: null, handleOnEnd: null, handleOnFinalize: null };
  let obj1 = _require(1606);
  class R {
    constructor(arg0) {
      closure_1.value = closure_0(closure_1[1]).State.BEGAN;
      closure_2.value = closure_0;
      tmp = closure_3(closure_0, source);
      return;
    }
  }
  obj = { state, State: _require(5277).State, gestureSource, source, onStart };
  R.__closure = obj;
  R.__workletHash = 16113572067379;
  R.__initData = closure_2;
  const items = [state, gestureSource, source, onStart];
  obj[0] = obj1.useWorkletCallback(R, items);
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
  U.__initData = closure_3;
  const items1 = [state, gestureSource, source, onChange];
  obj[1] = _require(1606).useWorkletCallback(U, items1);
  const obj4 = _require(1606);
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
  obj = { gestureSource, source, state, GESTURE_SOURCE: _require(5250).GESTURE_SOURCE, onEnd };
  C.__closure = obj;
  C.__workletHash = 10682034812271;
  C.__initData = closure_4;
  const items2 = [state, gestureSource, source, onEnd];
  obj[2] = _require(1606).useWorkletCallback(C, items2);
  const obj5 = _require(1606);
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
  obj1 = { gestureSource, source, state, GESTURE_SOURCE: _require(5250).GESTURE_SOURCE, onFinalize };
  T.__closure = obj1;
  T.__workletHash = 9696716573416;
  T.__initData = closure_5;
  const items3 = [state, gestureSource, source, onFinalize];
  obj[3] = _require(1606).useWorkletCallback(T, items3);
  return obj;
};