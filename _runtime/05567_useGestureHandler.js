// === Module 5567: useGestureHandler ===

// Module 5567 (useGestureHandler)
import _mod19 from "module_19" /* 19 */;
import value2 from "value2" /* 5399 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5426 */;

_mod19.useCallback;
let closure_3 = { code: "(function pnpm_useGestureHandlerTs1(event){let[state,State,gestureSource,source,onStart]=this.__closure;state.value=State.BEGAN;gestureSource.value=source;onStart(source,event);return;})" };
let closure_4 = { code: "(function pnpm_useGestureHandlerTs2(event){let[gestureSource,source,state,onChange]=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;onChange(source,event);})" };
let closure_5 = { code: "(function pnpm_useGestureHandlerTs3(event){let[gestureSource,source,state,GESTURE_SOURCE,onEnd]=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;gestureSource.value=GESTURE_SOURCE.UNDETERMINED;onEnd(source,event);})" };
let closure_6 = { code: "(function pnpm_useGestureHandlerTs4(event){let[gestureSource,source,state,GESTURE_SOURCE,onFinalize]=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;gestureSource.value=GESTURE_SOURCE.UNDETERMINED;onFinalize(source,event);})" };

export (CONTENT, animatedContentGestureState, sharedValue, handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize) => {
  items = [value, animatedContentGestureState, LegacyBaseButton.State, sharedValue, CONTENT, handleOnStart];
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  function pnpm_useGestureHandlerTs1(arg0) {
    c0.value = _undefined2.BEGAN;
    c2.value = value;
    _undefined3(value, arg0);
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9];
  pnpm_useGestureHandlerTs1.__closure = items1;
  pnpm_useGestureHandlerTs1.__workletHash = 6802146511018;
  pnpm_useGestureHandlerTs1.__initData = tmp4;
  const items2 = [animatedContentGestureState, sharedValue, CONTENT, handleOnStart];
  const items3 = [_undefined3, sharedValue, CONTENT, animatedContentGestureState, handleOnChange];
  [tmp11, tmp12, tmp13, tmp14, tmp15] = items3;
  function pnpm_useGestureHandlerTs2(state) {
    if (_undefined.value === c1) {
      c2.value = state.state;
      value(tmp, state);
    }
  }
  const items4 = [tmp12, tmp13, tmp14, tmp15];
  pnpm_useGestureHandlerTs2.__closure = items4;
  pnpm_useGestureHandlerTs2.__workletHash = 11384673749918;
  pnpm_useGestureHandlerTs2.__initData = tmp11;
  const items5 = [animatedContentGestureState, sharedValue, CONTENT, handleOnChange];
  const items6 = [closure_5, sharedValue, CONTENT, animatedContentGestureState, , ];
  const tmpResult = useCallback(pnpm_useGestureHandlerTs1, items2);
  items6[4] = value2.GESTURE_SOURCE;
  items6[5] = handleOnEnd;
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items6;
  function pnpm_useGestureHandlerTs3(state) {
    if (_undefined.value === c1) {
      c2.value = state.state;
      tmp.value = value.UNDETERMINED;
      _undefined3(tmp2, state);
    }
  }
  const items7 = [tmp18, tmp19, tmp20, tmp21, tmp22];
  pnpm_useGestureHandlerTs3.__closure = items7;
  pnpm_useGestureHandlerTs3.__workletHash = 10370949870966;
  pnpm_useGestureHandlerTs3.__initData = tmp17;
  const items8 = [animatedContentGestureState, sharedValue, CONTENT, handleOnEnd];
  const items9 = [closure_6, sharedValue, CONTENT, animatedContentGestureState, , ];
  const tmpResult3 = useCallback(pnpm_useGestureHandlerTs2, items5);
  items9[4] = value2.GESTURE_SOURCE;
  items9[5] = handleOnFinalize;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items9;
  function pnpm_useGestureHandlerTs4(state) {
    if (_undefined.value === c1) {
      c2.value = state.state;
      tmp.value = value.UNDETERMINED;
      _undefined3(tmp2, state);
    }
  }
  const items10 = [tmp25, tmp26, tmp27, tmp28, tmp29];
  pnpm_useGestureHandlerTs4.__closure = items10;
  pnpm_useGestureHandlerTs4.__workletHash = 350531883025;
  pnpm_useGestureHandlerTs4.__initData = tmp24;
  const items11 = [animatedContentGestureState, sharedValue, CONTENT, handleOnFinalize];
  const tmpResult4 = useCallback(pnpm_useGestureHandlerTs3, items8);
  return { handleOnStart: tmpResult, handleOnChange: tmpResult3, handleOnEnd: useCallback(pnpm_useGestureHandlerTs3, items8), handleOnFinalize: useCallback(pnpm_useGestureHandlerTs4, items11) };
}