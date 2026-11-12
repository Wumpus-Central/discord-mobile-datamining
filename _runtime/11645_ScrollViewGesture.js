// _runtime/11645_ScrollViewGesture.js
import _mod1652 from "metro/01652__.js";
import LegacyBaseButton from "05535_LegacyBaseButton.js";
import DATA_LENGTH from "11627_DATA_LENGTH.js";
import _mod11633 from "metro/11633__.js";
import dealWithAnimation from "11643_dealWithAnimation.js";
import usePanGestureProxy from "11646_usePanGestureProxy.js";
import noop from "metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
fn(19).useCallback;
const jsx = fn(21).jsx;
let closure_6 = { code: "(function pnpm_ScrollViewGestureTsx1(){let[vertical]=this.__closure;return!vertical;})" };
let closure_7 = {
  code: "(function pnpm_ScrollViewGestureTsx2(){let[loop,overscrollEnabled,measure,containerRef,dataLength,size]=this.__closure;if(!loop&&!overscrollEnabled){const measurement=measure(containerRef);const containerWidth=(measurement===null||measurement===void 0?void 0:measurement.width)||0;if(dataLength*size<containerWidth)return 0;return dataLength*size-containerWidth;}return dataLength*size;})",
};
let closure_8 = {
  code: "(function pnpm_ScrollViewGestureTsx3(isFinished){let[onFinished,runOnJS]=this.__closure;if(isFinished)onFinished&&runOnJS(onFinished)();})",
};
let closure_9 = {
  code: '(function pnpm_ScrollViewGestureTsx4(toValue,onFinished){let[scrollAnimationDuration,Easing,dealWithAnimation,withAnimation,_worklet_17103031480378_init_data,runOnJS]=this.__closure;var _withAnimation;const defaultWithAnimation={type:"timing",config:{duration:scrollAnimationDuration+100,easing:Easing.easeOutQuart}};return dealWithAnimation((_withAnimation=withAnimation)!==null&&_withAnimation!==void 0?_withAnimation:defaultWithAnimation)(toValue,function pnpm_ScrollViewGestureTsx3Factory([_worklet_17103031480378_init_data,onFinished,runOnJS]){const pnpm_ScrollViewGestureTsx3=function(isFinished){if(isFinished)onFinished&&runOnJS(onFinished)();};pnpm_ScrollViewGestureTsx3.__closure=[onFinished,runOnJS];pnpm_ScrollViewGestureTsx3.__workletHash=17103031480378;pnpm_ScrollViewGestureTsx3.__initData=_worklet_17103031480378_init_data;return pnpm_ScrollViewGestureTsx3;}([_worklet_17103031480378_init_data,onFinished,runOnJS]));})',
};
let closure_10 = {
  code: "(function pnpm_ScrollViewGestureTsx5(scrollEndTranslationValue,scrollEndVelocityValue,onFinished){let[translation,withDecay,maxScrollDistancePerSwipeIsSet,maxScrollDistancePerSwipe,size,pagingEnabled,withSpring,loop,maxPage,snapEnabled,overscrollEnabled,getLimit]=this.__closure;const origin=translation.value;const velocity=scrollEndVelocityValue;let finalTranslation=withDecay({velocity:velocity,deceleration:0.999});if(maxScrollDistancePerSwipeIsSet&&Math.abs(scrollEndTranslationValue)>maxScrollDistancePerSwipe){finalTranslation=origin;}else{const nextPage=-Math.round((origin+velocity*2)/size);if(pagingEnabled){const offset=-(scrollEndTranslationValue>=0?1:-1);const computed=offset<0?Math.ceil:Math.floor;const page=computed(-origin/size);const velocityDirection=-Math.sign(velocity);if(page===nextPage||velocityDirection!==offset){finalTranslation=withSpring(withProcessTranslation(-page*size),onFinished);}else if(loop){const finalPage=page+offset;finalTranslation=withSpring(withProcessTranslation(-finalPage*size),onFinished);}else{const finalPage=Math.min(maxPage-1,Math.max(0,page+offset));finalTranslation=withSpring(withProcessTranslation(-finalPage*size),onFinished);}}if(!pagingEnabled&&snapEnabled){finalTranslation=withSpring(withProcessTranslation(-nextPage*size),onFinished);}}translation.value=finalTranslation;function withProcessTranslation(translation){if(!loop&&!overscrollEnabled){const limit=getLimit();const sign=Math.sign(translation);return sign*Math.max(0,Math.min(limit,Math.abs(translation)));}return translation;}})",
};
let closure_11 = {
  code: "(function pnpm_ScrollViewGestureTsx6(isFinished){let[touching,onScrollEnd,runOnJS]=this.__closure;if(isFinished){touching.value=false;onScrollEnd&&runOnJS(onScrollEnd)();}})",
};
let closure_12 = {
  code: "(function pnpm_ScrollViewGestureTsx7(isFinished){let[onFinish]=this.__closure;return onFinish(isFinished);})",
};
let closure_13 = {
  code: "(function pnpm_ScrollViewGestureTsx8(){let[touching,translation,withDecay,scrollEndVelocity,_worklet_7886845276932_init_data,onFinish]=this.__closure;touching.value=true;translation.value=withDecay({velocity:scrollEndVelocity.value},function pnpm_ScrollViewGestureTsx7Factory([_worklet_7886845276932_init_data,onFinish]){const pnpm_ScrollViewGestureTsx7=function(isFinished){return onFinish(isFinished);};pnpm_ScrollViewGestureTsx7.__closure=[onFinish];pnpm_ScrollViewGestureTsx7.__workletHash=7886845276932;pnpm_ScrollViewGestureTsx7.__initData=_worklet_7886845276932_init_data;return pnpm_ScrollViewGestureTsx7;}([_worklet_7886845276932_init_data,onFinish]));})",
};
let closure_14 = {
  code: "(function pnpm_ScrollViewGestureTsx9(){let[touching,translation,scrollEndTranslation,activeDecay,loop,withSpring,maxPage,size]=this.__closure;if(touching.value)return;if(translation.value>0){if(scrollEndTranslation.value<0){activeDecay();return;}if(!loop){translation.value=withSpring(0);return;}}if(translation.value<-((maxPage-1)*size)){if(scrollEndTranslation.value>0){activeDecay();return;}if(!loop)translation.value=withSpring(-((maxPage-1)*size));}})",
};
let closure_15 = {
  code: "(function pnpm_ScrollViewGestureTsx10(){let[translation]=this.__closure;return translation.value;})",
};
let closure_16 = {
  code: "(function pnpm_ScrollViewGestureTsx11(){let[pagingEnabled,resetBoundary]=this.__closure;if(!pagingEnabled)resetBoundary();})",
};
let closure_17 = {
  code: "(function withProcessTranslation_Pnpm_ScrollViewGestureTsx12(translation){let[loop,overscrollEnabled,getLimit]=this.__closure;if(!loop&&!overscrollEnabled){const limit=getLimit();const sign=Math.sign(translation);return sign*Math.max(0,Math.min(limit,Math.abs(translation)));}return translation;})",
};
let closure_18 = {
  code: "(function pnpm_ScrollViewGestureTsx13(_){let[touching,validStart,onScrollStart,runOnJS,max,maxPage,size,loop,overscrollEnabled,getLimit,panOffset,translation]=this.__closure;touching.value=true;validStart.value=true;onScrollStart&&runOnJS(onScrollStart)();max.value=(maxPage-1)*size;if(!loop&&!overscrollEnabled)max.value=getLimit();panOffset.value=translation.value;})",
};
let closure_19 = {
  code: '(function pnpm_ScrollViewGestureTsx14(e){let[panOffset,validStart,cancelAnimation,translation,touching,isHorizontal,fixedDirection,loop,max]=this.__closure;if(panOffset.value===undefined){return;}if(validStart.value){validStart.value=false;cancelAnimation(translation);}touching.value=true;const{translationX:translationX,translationY:translationY}=e;let panTranslation=isHorizontal.value?translationX:translationY;if(fixedDirection==="negative")panTranslation=-Math.abs(panTranslation);else if(fixedDirection==="positive")panTranslation=+Math.abs(panTranslation);if(!loop){if(translation.value>0||translation.value<-max.value){const boundary=translation.value>0?0:-max.value;const fixed=boundary-panOffset.value;const dynamic=panTranslation-fixed;translation.value=boundary+dynamic*0.5;return;}}const translationValue=panOffset.value+panTranslation;translation.value=translationValue;})',
};
let closure_20 = {
  code: '(function pnpm_ScrollViewGestureTsx15(e,_success){let[panOffset,isHorizontal,scrollEndVelocity,fixedDirection,scrollEndTranslation,maxScrollDistancePerSwipeIsSet,maxScrollDistancePerSwipe,size,translation,withSpring,withProcessTranslation,onScrollEnd,minScrollDistancePerSwipeIsSet,minScrollDistancePerSwipe,endWithSpring,loop,touching]=this.__closure;if(panOffset.value===undefined){return;}const{velocityX:velocityX,velocityY:velocityY,translationX:translationX,translationY:translationY}=e;const scrollEndVelocityValue=isHorizontal.value?velocityX:velocityY;scrollEndVelocity.value=scrollEndVelocityValue;let panTranslation=isHorizontal.value?translationX:translationY;if(fixedDirection==="negative")panTranslation=-Math.abs(panTranslation);else if(fixedDirection==="positive")panTranslation=+Math.abs(panTranslation);scrollEndTranslation.value=panTranslation;const totalTranslation=scrollEndVelocityValue+panTranslation;if(maxScrollDistancePerSwipeIsSet&&Math.abs(totalTranslation)>maxScrollDistancePerSwipe){const nextPage=Math.round((panOffset.value+maxScrollDistancePerSwipe*Math.sign(totalTranslation))/size)*size;translation.value=withSpring(withProcessTranslation(nextPage),onScrollEnd);}else if(minScrollDistancePerSwipeIsSet&&Math.abs(totalTranslation)<minScrollDistancePerSwipe){const nextPage=Math.round((panOffset.value+minScrollDistancePerSwipe*Math.sign(totalTranslation))/size)*size;translation.value=withSpring(withProcessTranslation(nextPage),onScrollEnd);}else{endWithSpring(panTranslation,scrollEndVelocityValue,onScrollEnd);}if(!loop)touching.value=false;panOffset.value=undefined;})',
};
let closure_21 = {
  code: "(function pnpm_ScrollViewGestureTsx16(e){let[updateContainerSize]=this.__closure;updateContainerSize({width:e.nativeEvent.layout.width,height:e.nativeEvent.layout.height});})",
};

export function ScrollViewGesture(testID) {
  const globalState = _mod11633.useGlobalState();
  const props = globalState.props;
  ({
    vertical,
    pagingEnabled,
    snapEnabled,
    loop,
    scrollAnimationDuration,
    withAnimation,
    dataLength,
    overscrollEnabled,
    maxScrollDistancePerSwipe,
    minScrollDistancePerSwipe,
    fixedDirection,
  } = props);
  let size = globalState.common.size;
  const updateContainerSize = globalState.layout.updateContainerSize;
  ({ translation, style } = testID);
  ({ onConfigurePanGesture, enabled } = props);
  if (undefined === style) {
    style = {};
  }
  ({ onScrollStart, onScrollEnd, onTouchBegin, onTouchEnd } = testID);
  items = [_undefined, vertical];
  [tmp4, tmp5] = items;
  function pnpm_ScrollViewGestureTsx1() {
    return !c0;
  }
  let items1 = [tmp5];
  pnpm_ScrollViewGestureTsx1.__closure = items1;
  pnpm_ScrollViewGestureTsx1.__workletHash = 7359755646338;
  pnpm_ScrollViewGestureTsx1.__initData = tmp4;
  const items2 = [vertical];
  const derivedValue = _mod1652.useDerivedValue(pnpm_ScrollViewGestureTsx1, items2);
  const tmpResult = _mod1652;
  const sharedValue = _mod1652.useSharedValue(0);
  const tmpResult10 = _mod1652;
  const sharedValue1 = _mod1652.useSharedValue(undefined);
  const tmpResult11 = _mod1652;
  const sharedValue2 = _mod1652.useSharedValue(false);
  const tmpResult12 = _mod1652;
  const sharedValue3 = _mod1652.useSharedValue(false);
  const tmpResult13 = _mod1652;
  const sharedValue4 = _mod1652.useSharedValue(0);
  const tmpResult14 = _mod1652;
  const sharedValue5 = _mod1652.useSharedValue(0);
  const tmpResult15 = _mod1652;
  const animatedRef = _mod1652.useAnimatedRef();
  const items3 = [closure_7, loop, overscrollEnabled, _mod1652.measure, animatedRef, dataLength, size];
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items3;
  function pnpm_ScrollViewGestureTsx2() {
    if (!c0) {
      if (!c1) {
        const tmp4 = _undefined3(c3);
        let num;
        if (tmp4 != null) {
          num = tmp4.width;
        }
        if (!num) {
          num = 0;
        }
        let num2 = 0;
        if (c4 * c5 >= num) {
          num2 = c4 * c5 - num;
        }
        return num2;
      }
    }
    return c4 * c5;
  }
  const items4 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
  pnpm_ScrollViewGestureTsx2.__closure = items4;
  pnpm_ScrollViewGestureTsx2.__workletHash = 13525623005766;
  pnpm_ScrollViewGestureTsx2.__initData = tmp14;
  const items5 = [loop, size, dataLength, overscrollEnabled];
  const callback = noop.useCallback(pnpm_ScrollViewGestureTsx2, items5);
  const items6 = [
    _undefined7,
    scrollAnimationDuration,
    DATA_LENGTH.Easing,
    dealWithAnimation.dealWithAnimation,
    withAnimation,
    _undefined6,
    _mod1652.runOnJS,
  ];
  [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items6;
  function pnpm_ScrollViewGestureTsx4(arg0, arg1) {
    const obj = { type: "timing", config: { duration: c0 + 100, easing: _undefined2.easeOutQuart } };
    let tmp2 = c3;
    if (c3 == null) {
      tmp2 = obj;
    }
    items = [c4, arg1, c5];
    c0 = undefined;
    _undefined2 = undefined;
    [tmp3, tmp4, tmp5] = items;
    function pnpm_ScrollViewGestureTsx3(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = c0;
      }
      if (tmp) {
        _undefined(c0)();
      }
    }
    const items1 = [tmp4, tmp5];
    pnpm_ScrollViewGestureTsx3.__closure = items1;
    pnpm_ScrollViewGestureTsx3.__workletHash = 17103031480378;
    pnpm_ScrollViewGestureTsx3.__initData = tmp3;
    return _undefined3(tmp2)(arg0, pnpm_ScrollViewGestureTsx3);
  }
  const items7 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
  pnpm_ScrollViewGestureTsx4.__closure = items7;
  pnpm_ScrollViewGestureTsx4.__workletHash = 2650282611715;
  pnpm_ScrollViewGestureTsx4.__initData = tmp22;
  const items8 = [scrollAnimationDuration, withAnimation];
  const callback1 = noop.useCallback(pnpm_ScrollViewGestureTsx4, items8);
  const items9 = [
    _undefined8,
    translation,
    _mod1652.withDecay,
    typeof maxScrollDistancePerSwipe === "number",
    maxScrollDistancePerSwipe,
    size,
    pagingEnabled,
    callback1,
    loop,
    dataLength,
    snapEnabled,
    overscrollEnabled,
    callback,
  ];
  [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43] = items9;
  function pnpm_ScrollViewGestureTsx5(arg0, velocity, arg2) {
    value = _undefined.value;
    let tmp22Result = _undefined2({ velocity, deceleration: 0.999 });
    if (!c2) {
      const _Math2 = Math;
      const tmp9 = -Math.round((value + 2 * velocity) / c4);
      if (c5) {
        let num3 = -1;
        if (arg0 >= 0) {
          num3 = 1;
        }
        if (-num3 < 0) {
          const _Math4 = Math;
          let floor = Math.ceil;
        } else {
          const _Math3 = Math;
          floor = Math.floor;
        }
        const floorResult = floor(-value / c4);
        const _Math5 = Math;
        if (floorResult !== tmp9) {
          if (-Math.sign(velocity) === tmp11) {
            if (c7) {
              const result = -floorResult + tmp11 * c4;
              let result1 = result;
              if (!c7) {
                result1 = result;
                if (!c10) {
                  const _Math12 = Math;
                  const _Math13 = Math;
                  const _Math14 = Math;
                  const _Math15 = Math;
                  const tmp27 = _undefined9();
                  result1 = Math.sign(result) * Math.max(0, Math.min(tmp27, Math.abs(result)));
                  const signResult = Math.sign(result);
                }
              }
              tmp22Result = _undefined(result1, arg2);
            } else {
              const _Math6 = Math;
              const _Math7 = Math;
              const diff = c8 - 1;
              const result2 = -Math.min(diff, Math.max(0, floorResult + tmp11)) * c4;
              let result3 = result2;
              if (!c7) {
                result3 = result2;
                if (!c10) {
                  const _Math8 = Math;
                  const _Math9 = Math;
                  const _Math10 = Math;
                  const _Math11 = Math;
                  const tmp20 = _undefined9();
                  result3 = Math.sign(result2) * Math.max(0, Math.min(tmp20, Math.abs(result2)));
                  const signResult1 = Math.sign(result2);
                }
              }
              tmp22Result = _undefined(result3, arg2);
            }
          }
        }
        const result4 = -floorResult * c4;
        let result5 = result4;
        if (!c7) {
          result5 = result4;
          if (!c10) {
            const _Math16 = Math;
            const _Math17 = Math;
            const _Math18 = Math;
            const _Math19 = Math;
            const tmp35 = _undefined9();
            result5 = Math.sign(result4) * Math.max(0, Math.min(tmp35, Math.abs(result4)));
            const signResult2 = Math.sign(result4);
          }
        }
        tmp22Result = _undefined(result5, arg2);
      }
      let tmp37 = !c5;
      if (!c5) {
        tmp37 = c9;
      }
      let tmp38Result = tmp22Result;
      if (tmp37) {
        const result6 = -tmp9 * c4;
        let result7 = result6;
        if (!c7) {
          result7 = result6;
          if (!c10) {
            const _Math20 = Math;
            const _Math21 = Math;
            const _Math22 = Math;
            const _Math23 = Math;
            const tmp44 = _undefined9();
            result7 = Math.sign(result6) * Math.max(0, Math.min(tmp44, Math.abs(result6)));
            const signResult3 = Math.sign(result6);
          }
        }
        tmp38Result = _undefined(result7, arg2);
      }
    } else {
      const _Math = Math;
      tmp38Result = value;
    }
    _undefined.value = tmp38Result;
    const obj = { velocity, deceleration: 0.999 };
  }
  const items10 = [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43];
  pnpm_ScrollViewGestureTsx5.__closure = items10;
  pnpm_ScrollViewGestureTsx5.__workletHash = 14219285338620;
  pnpm_ScrollViewGestureTsx5.__initData = tmp31;
  const items11 = [
    callback1,
    size,
    dataLength,
    loop,
    snapEnabled,
    translation,
    pagingEnabled,
    maxScrollDistancePerSwipe,
    typeof maxScrollDistancePerSwipe === "number",
  ];
  const callback2 = noop.useCallback(pnpm_ScrollViewGestureTsx5, items11);
  const items12 = [_undefined9, sharedValue2, onScrollEnd, _mod1652.runOnJS];
  [tmp45, tmp46, tmp47, tmp48] = items12;
  function pnpm_ScrollViewGestureTsx6(arg0) {
    if (arg0) {
      c0.value = false;
      if (c1) {
        _undefined3(tmp2)();
      }
    }
  }
  const items13 = [tmp46, tmp47, tmp48];
  pnpm_ScrollViewGestureTsx6.__closure = items13;
  pnpm_ScrollViewGestureTsx6.__workletHash = 15614287143067;
  pnpm_ScrollViewGestureTsx6.__initData = tmp45;
  const items14 = [onScrollEnd, sharedValue2];
  const callback3 = noop.useCallback(pnpm_ScrollViewGestureTsx6, items14);
  const items15 = [closure_13, sharedValue2, translation, _mod1652.withDecay, sharedValue5, closure_12, callback3];
  [tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56] = items15;
  function pnpm_ScrollViewGestureTsx8() {
    c0.value = true;
    items = [c4, c5];
    c0 = undefined;
    [tmp2, tmp3] = items;
    function pnpm_ScrollViewGestureTsx7(arg0) {
      return _undefined(arg0);
    }
    const items1 = [tmp3];
    pnpm_ScrollViewGestureTsx7.__closure = items1;
    pnpm_ScrollViewGestureTsx7.__workletHash = 7886845276932;
    pnpm_ScrollViewGestureTsx7.__initData = tmp2;
    c1.value = _undefined3({ velocity: _undefined4.value }, pnpm_ScrollViewGestureTsx7);
    const obj = { velocity: _undefined4.value };
  }
  const items16 = [tmp51, tmp52, tmp53, tmp54, tmp55, tmp56];
  pnpm_ScrollViewGestureTsx8.__closure = items16;
  pnpm_ScrollViewGestureTsx8.__workletHash = 16796181476367;
  pnpm_ScrollViewGestureTsx8.__initData = tmp50;
  const items17 = [callback3, sharedValue5, sharedValue2, translation];
  const callback4 = noop.useCallback(pnpm_ScrollViewGestureTsx8, items17);
  const items18 = [_undefined10, sharedValue2, translation, sharedValue4, callback4, loop, callback1, dataLength, size];
  [tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66] = items18;
  function pnpm_ScrollViewGestureTsx9() {
    if (!_undefined.value) {
      if (_undefined2.value > 0) {
        if (_undefined3.value < 0) {
          _undefined4();
        } else if (!c4) {
          _undefined2.value = _undefined5(0);
        }
      }
      if (_undefined2.value < -c6 - 1 * c7) {
        if (_undefined3.value > 0) {
          _undefined4();
        } else if (!c4) {
          _undefined2.value = _undefined5(-tmp3 - 1 * tmp4);
        }
      }
    }
  }
  const items19 = [tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66];
  pnpm_ScrollViewGestureTsx9.__closure = items19;
  pnpm_ScrollViewGestureTsx9.__workletHash = 7719556442370;
  pnpm_ScrollViewGestureTsx9.__initData = tmp58;
  const items20 = [sharedValue2, translation, dataLength, size, sharedValue4, loop, callback4, callback1];
  const callback5 = noop.useCallback(pnpm_ScrollViewGestureTsx9, items20);
  const tmpResult16 = _mod1652;
  const items21 = [closure_15, translation];
  [tmp68, tmp69] = items21;
  function pnpm_ScrollViewGestureTsx10() {
    return _undefined.value;
  }
  const items22 = [tmp69];
  pnpm_ScrollViewGestureTsx10.__closure = items22;
  pnpm_ScrollViewGestureTsx10.__workletHash = 16593869871286;
  pnpm_ScrollViewGestureTsx10.__initData = tmp68;
  const items23 = [closure_16, pagingEnabled, callback5];
  [tmp70, tmp71, tmp72] = items23;
  function pnpm_ScrollViewGestureTsx11() {
    if (!c0) {
      _undefined2();
    }
  }
  const items24 = [tmp71, tmp72];
  pnpm_ScrollViewGestureTsx11.__closure = items24;
  pnpm_ScrollViewGestureTsx11.__workletHash = 7134235687258;
  pnpm_ScrollViewGestureTsx11.__initData = tmp70;
  const items25 = [pagingEnabled, callback5];
  const animatedReaction = _mod1652.useAnimatedReaction(
    pnpm_ScrollViewGestureTsx10,
    pnpm_ScrollViewGestureTsx11,
    items25,
  );
  const items26 = [closure_17, loop, overscrollEnabled, callback];
  [tmp74, tmp75, tmp76, tmp77] = items26;
  function withProcessTranslation(arg0) {
    if (!c0) {
      if (!c1) {
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        const _Math4 = Math;
        const tmp3 = _undefined3();
        return Math.sign(arg0) * Math.max(0, Math.min(tmp3, Math.abs(arg0)));
      }
    }
    return arg0;
  }
  const items27 = [tmp75, tmp76, tmp77];
  withProcessTranslation.__closure = items27;
  withProcessTranslation.__workletHash = 13733068836819;
  withProcessTranslation.__initData = tmp74;
  const items28 = [
    closure_18,
    sharedValue2,
    sharedValue3,
    onScrollStart,
    _mod1652.runOnJS,
    sharedValue,
    dataLength,
    size,
    loop,
    overscrollEnabled,
    callback,
    sharedValue1,
    translation,
  ];
  [tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91] = items28;
  function pnpm_ScrollViewGestureTsx13(arg0) {
    c0.value = true;
    c1.value = true;
    if (c2) {
      _undefined4(tmp)();
    }
    c4.value = (c5 - 1) * c6;
    let tmp5 = c7;
    if (!c7) {
      tmp5 = c8;
    }
    if (!tmp5) {
      c4.value = _undefined7();
    }
    c10.value = _undefined9.value;
  }
  const items29 = [tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91];
  pnpm_ScrollViewGestureTsx13.__closure = items29;
  pnpm_ScrollViewGestureTsx13.__workletHash = 13175886918959;
  pnpm_ScrollViewGestureTsx13.__initData = tmp79;
  const items30 = [
    sharedValue,
    size,
    dataLength,
    loop,
    sharedValue2,
    sharedValue1,
    sharedValue3,
    translation,
    overscrollEnabled,
    callback,
    onScrollStart,
  ];
  const items31 = [closure_19, sharedValue1, sharedValue3, , , , , , ,];
  const tmpResult17 = _mod1652;
  items31[3] = _mod1652.cancelAnimation;
  items31[4] = translation;
  items31[5] = sharedValue2;
  items31[6] = derivedValue;
  items31[7] = fixedDirection;
  items31[8] = loop;
  items31[9] = sharedValue;
  [tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102] = items31;
  function pnpm_ScrollViewGestureTsx14(translationY) {
    if (undefined !== _undefined.value) {
      if (_undefined2.value) {
        tmp15.value = false;
        _undefined3(_undefined4);
      }
      c4.value = true;
      let translationX = translationY.translationY;
      if (_undefined5.value) {
        translationX = translationY.translationX;
      }
      if ("negative" === c6) {
        const _Math2 = Math;
        let tmp8 = -Math.abs(translationX);
      } else {
        tmp8 = translationX;
        if ("positive" === tmp7) {
          const _Math = Math;
          tmp8 = +Math.abs(translationX);
        }
      }
      if (!c7) {
        let num2 = 0;
        if (_undefined4.value <= 0) {
          num2 = -_undefined6.value;
        }
        _undefined4.value = num2 + 0.5 * (tmp8 - (num2 - _undefined.value));
      }
      _undefined4.value = _undefined.value + tmp8;
    }
  }
  const items32 = [tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102];
  pnpm_ScrollViewGestureTsx14.__closure = items32;
  pnpm_ScrollViewGestureTsx14.__workletHash = 11932635873928;
  pnpm_ScrollViewGestureTsx14.__initData = tmp93;
  const items33 = [
    derivedValue,
    sharedValue,
    sharedValue1,
    loop,
    overscrollEnabled,
    fixedDirection,
    translation,
    sharedValue3,
    sharedValue2,
  ];
  const items34 = [
    closure_20,
    sharedValue1,
    derivedValue,
    sharedValue5,
    fixedDirection,
    sharedValue4,
    typeof maxScrollDistancePerSwipe === "number",
    maxScrollDistancePerSwipe,
    size,
    translation,
    callback1,
    withProcessTranslation,
    onScrollEnd,
    typeof minScrollDistancePerSwipe === "number",
    minScrollDistancePerSwipe,
    callback2,
    loop,
    sharedValue2,
  ];
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  c16 = undefined;
  [
    tmp105,
    tmp106,
    tmp107,
    tmp108,
    tmp109,
    tmp110,
    tmp111,
    tmp112,
    tmp113,
    tmp114,
    tmp115,
    tmp116,
    tmp117,
    tmp118,
    tmp119,
    tmp120,
    tmp121,
    tmp122,
  ] = items34;
  function pnpm_ScrollViewGestureTsx15(velocityX, arg1) {
    if (undefined !== _undefined.value) {
      ({ velocityY, translationY, translationX } = velocityX);
      if (_undefined2.value) {
        velocityY = velocityX.velocityX;
      }
      c2.value = velocityY;
      if (_undefined2.value) {
        translationY = translationX;
      }
      if ("negative" === c3) {
        const _Math2 = Math;
        let tmp3 = -Math.abs(translationY);
      } else {
        tmp3 = translationY;
        if ("positive" === tmp2) {
          const _Math = Math;
          tmp3 = +Math.abs(translationY);
        }
      }
      c4.value = tmp3;
      const sum = velocityY + tmp3;
      if (c5) {
        const _Math3 = Math;
        if (Math.abs(sum) > c6) {
          const _Math7 = Math;
          const _Math8 = Math;
          c8.value = _undefined7(_undefined8(Math.round((_undefined.value + tmp10 * Math.sign(sum)) / c7) * c7), c11);
        }
        if (!c15) {
          c16.value = false;
        }
        _undefined.value = undefined;
      }
      if (c12) {
        const _Math4 = Math;
        if (Math.abs(sum) < c13) {
          const _Math5 = Math;
          const _Math6 = Math;
          c8.value = _undefined7(_undefined8(Math.round((_undefined.value + tmp13 * Math.sign(sum)) / c7) * c7), c11);
        }
      }
      _undefined10(tmp3, velocityY, c11);
    }
  }
  const items35 = [
    tmp106,
    tmp107,
    tmp108,
    tmp109,
    tmp110,
    tmp111,
    tmp112,
    tmp113,
    tmp114,
    tmp115,
    tmp116,
    tmp117,
    tmp118,
    tmp119,
    tmp120,
    tmp121,
    tmp122,
  ];
  pnpm_ScrollViewGestureTsx15.__closure = items35;
  pnpm_ScrollViewGestureTsx15.__workletHash = 1869871892063;
  pnpm_ScrollViewGestureTsx15.__initData = tmp105;
  const items36 = [
    size,
    loop,
    sharedValue2,
    sharedValue1,
    translation,
    derivedValue,
    sharedValue5,
    sharedValue4,
    fixedDirection,
    typeof maxScrollDistancePerSwipe === "number",
    maxScrollDistancePerSwipe,
    typeof maxScrollDistancePerSwipe === "number",
    minScrollDistancePerSwipe,
    callback2,
    callback1,
    onScrollEnd,
  ];
  const tmp103 = typeof minScrollDistancePerSwipe === "number";
  const tmp78Result = useCallback(pnpm_ScrollViewGestureTsx13, items30);
  const tmp78Result3 = useCallback(pnpm_ScrollViewGestureTsx14, items33);
  const tmp78Result4 = useCallback(pnpm_ScrollViewGestureTsx15, items36);
  const items37 = [closure_21, updateContainerSize];
  c0 = undefined;
  [tmp125, tmp126] = items37;
  function pnpm_ScrollViewGestureTsx16(nativeEvent) {
    const size = { width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height };
    _undefined(size);
  }
  const items38 = [tmp126];
  pnpm_ScrollViewGestureTsx16.__closure = items38;
  pnpm_ScrollViewGestureTsx16.__workletHash = 11968331702097;
  pnpm_ScrollViewGestureTsx16.__initData = tmp125;
  const items39 = [updateContainerSize];
  const panGestureProxy = usePanGestureProxy.usePanGestureProxy({
    onConfigurePanGesture,
    onGestureStart: tmp78Result,
    onGestureUpdate: tmp78Result3,
    onGestureEnd: tmp78Result4,
    options: { enabled },
  });
  const callback6 = noop.useCallback(pnpm_ScrollViewGestureTsx16, items39);
  const obj3 = {
    gesture: panGestureProxy,
    children: jsx(_modDef1652.View, {
      ref: animatedRef,
      testID: testID.testID,
      style,
      onTouchStart: onTouchBegin,
      onTouchEnd,
      onLayout: callback6,
      children: testID.children,
    }),
  };
  return jsx(LegacyBaseButton.GestureDetector, {
    gesture: panGestureProxy,
    children: jsx(_modDef1652.View, {
      ref: animatedRef,
      testID: testID.testID,
      style,
      onTouchStart: onTouchBegin,
      onTouchEnd,
      onLayout: callback6,
      children: testID.children,
    }),
  });
}
