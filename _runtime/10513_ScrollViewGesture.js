// === Module 10513: ScrollViewGesture ===

// Module 10513 (ScrollViewGesture)
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import _mod1643 from "module_1643" /* 1643 */;
import DATA_LENGTH from "DATA_LENGTH" /* 10495 */;
import dealWithAnimation2 from "dealWithAnimation" /* 10511 */;

let closure_0, dealWithAnimationResult, obj1, obj4;

react2.useCallback;
const jsx = Fragment.jsx;
let closure_6 = { code: "function pnpm_ScrollViewGestureTsx1(){const{vertical}=this.__closure;return!vertical;}" };
let closure_7 = { code: "function pnpm_ScrollViewGestureTsx2(){const{loop,overscrollEnabled,measure,containerRef,dataLength,size}=this.__closure;if(!loop&&!overscrollEnabled){const measurement=measure(containerRef);const containerWidth=(measurement===null||measurement===void 0?void 0:measurement.width)||0;if(dataLength*size<containerWidth)return 0;return dataLength*size-containerWidth;}return dataLength*size;}" };
let closure_8 = { code: "function pnpm_ScrollViewGestureTsx3(toValue,onFinished){const{scrollAnimationDuration,Easing,dealWithAnimation,withAnimation,runOnJS}=this.__closure;var _withAnimation;const defaultWithAnimation={type:\"timing\",config:{duration:scrollAnimationDuration+100,easing:Easing.easeOutQuart}};return dealWithAnimation((_withAnimation=withAnimation)!==null&&_withAnimation!==void 0?_withAnimation:defaultWithAnimation)(toValue,function(isFinished){\"worklet\";if(isFinished)onFinished&&runOnJS(onFinished)();});}" };
const __initData = { code: "function pnpm_ScrollViewGestureTsx4(isFinished){const{onFinished,runOnJS}=this.__closure;if(isFinished)onFinished&&runOnJS(onFinished)();}" };
let closure_10 = { code: "function pnpm_ScrollViewGestureTsx5(scrollEndTranslationValue,scrollEndVelocityValue,onFinished){const{translation,withDecay,maxScrollDistancePerSwipeIsSet,maxScrollDistancePerSwipe,size,pagingEnabled,withSpring,loop,maxPage,snapEnabled,overscrollEnabled,getLimit}=this.__closure;const origin=translation.value;const velocity=scrollEndVelocityValue;let finalTranslation=withDecay({velocity:velocity,deceleration:0.999});if(maxScrollDistancePerSwipeIsSet&&Math.abs(scrollEndTranslationValue)>maxScrollDistancePerSwipe){finalTranslation=origin;}else{const nextPage=-Math.round((origin+velocity*2)/size);if(pagingEnabled){const offset=-(scrollEndTranslationValue>=0?1:-1);const computed=offset<0?Math.ceil:Math.floor;const page=computed(-origin/size);const velocityDirection=-Math.sign(velocity);if(page===nextPage||velocityDirection!==offset){finalTranslation=withSpring(withProcessTranslation(-page*size),onFinished);}else if(loop){const finalPage=page+offset;finalTranslation=withSpring(withProcessTranslation(-finalPage*size),onFinished);}else{const finalPage=Math.min(maxPage-1,Math.max(0,page+offset));finalTranslation=withSpring(withProcessTranslation(-finalPage*size),onFinished);}}if(!pagingEnabled&&snapEnabled){finalTranslation=withSpring(withProcessTranslation(-nextPage*size),onFinished);}}translation.value=finalTranslation;function withProcessTranslation(translation){if(!loop&&!overscrollEnabled){const limit=getLimit();const sign=Math.sign(translation);return sign*Math.max(0,Math.min(limit,Math.abs(translation)));}return translation;}}" };
let closure_11 = { code: "function pnpm_ScrollViewGestureTsx6(isFinished){const{touching,onScrollEnd,runOnJS}=this.__closure;if(isFinished){touching.value=false;onScrollEnd&&runOnJS(onScrollEnd)();}}" };
let closure_12 = { code: "function pnpm_ScrollViewGestureTsx7(){const{touching,translation,withDecay,scrollEndVelocity,onFinish}=this.__closure;touching.value=true;translation.value=withDecay({velocity:scrollEndVelocity.value},function(isFinished){return onFinish(isFinished);});}" };
const __initData2 = { code: "function pnpm_ScrollViewGestureTsx8(isFinished){const{onFinish}=this.__closure;return onFinish(isFinished);}" };
let closure_14 = { code: "function pnpm_ScrollViewGestureTsx9(){const{touching,translation,scrollEndTranslation,activeDecay,loop,withSpring,maxPage,size}=this.__closure;if(touching.value)return;if(translation.value>0){if(scrollEndTranslation.value<0){activeDecay();return;}if(!loop){translation.value=withSpring(0);return;}}if(translation.value<-((maxPage-1)*size)){if(scrollEndTranslation.value>0){activeDecay();return;}if(!loop)translation.value=withSpring(-((maxPage-1)*size));}}" };
let closure_15 = { code: "function pnpm_ScrollViewGestureTsx10(){const{translation}=this.__closure;return translation.value;}" };
let closure_16 = { code: "function pnpm_ScrollViewGestureTsx11(){const{pagingEnabled,resetBoundary}=this.__closure;if(!pagingEnabled)resetBoundary();}" };
let closure_17 = { code: "function withProcessTranslation_Pnpm_ScrollViewGestureTsx12(translation){const{loop,overscrollEnabled,getLimit}=this.__closure;if(!loop&&!overscrollEnabled){const limit=getLimit();const sign=Math.sign(translation);return sign*Math.max(0,Math.min(limit,Math.abs(translation)));}return translation;}" };
let closure_18 = { code: "function pnpm_ScrollViewGestureTsx13(_){const{touching,validStart,onScrollStart,runOnJS,max,maxPage,size,loop,overscrollEnabled,getLimit,panOffset,translation}=this.__closure;touching.value=true;validStart.value=true;onScrollStart&&runOnJS(onScrollStart)();max.value=(maxPage-1)*size;if(!loop&&!overscrollEnabled)max.value=getLimit();panOffset.value=translation.value;}" };
let closure_19 = { code: "function pnpm_ScrollViewGestureTsx14(e){const{panOffset,validStart,cancelAnimation,translation,touching,isHorizontal,fixedDirection,loop,max}=this.__closure;if(panOffset.value===undefined){return;}if(validStart.value){validStart.value=false;cancelAnimation(translation);}touching.value=true;const{translationX:translationX,translationY:translationY}=e;let panTranslation=isHorizontal.value?translationX:translationY;if(fixedDirection===\"negative\")panTranslation=-Math.abs(panTranslation);else if(fixedDirection===\"positive\")panTranslation=+Math.abs(panTranslation);if(!loop){if(translation.value>0||translation.value<-max.value){const boundary=translation.value>0?0:-max.value;const fixed=boundary-panOffset.value;const dynamic=panTranslation-fixed;translation.value=boundary+dynamic*0.5;return;}}const translationValue=panOffset.value+panTranslation;translation.value=translationValue;}" };
let value = { code: "function pnpm_ScrollViewGestureTsx15(e,_success){const{panOffset,isHorizontal,scrollEndVelocity,fixedDirection,scrollEndTranslation,maxScrollDistancePerSwipeIsSet,maxScrollDistancePerSwipe,size,translation,withSpring,withProcessTranslation,onScrollEnd,minScrollDistancePerSwipeIsSet,minScrollDistancePerSwipe,endWithSpring,loop,touching}=this.__closure;if(panOffset.value===undefined){return;}const{velocityX:velocityX,velocityY:velocityY,translationX:translationX,translationY:translationY}=e;const scrollEndVelocityValue=isHorizontal.value?velocityX:velocityY;scrollEndVelocity.value=scrollEndVelocityValue;let panTranslation=isHorizontal.value?translationX:translationY;if(fixedDirection===\"negative\")panTranslation=-Math.abs(panTranslation);else if(fixedDirection===\"positive\")panTranslation=+Math.abs(panTranslation);scrollEndTranslation.value=panTranslation;const totalTranslation=scrollEndVelocityValue+panTranslation;if(maxScrollDistancePerSwipeIsSet&&Math.abs(totalTranslation)>maxScrollDistancePerSwipe){const nextPage=Math.round((panOffset.value+maxScrollDistancePerSwipe*Math.sign(totalTranslation))/size)*size;translation.value=withSpring(withProcessTranslation(nextPage),onScrollEnd);}else if(minScrollDistancePerSwipeIsSet&&Math.abs(totalTranslation)<minScrollDistancePerSwipe){const nextPage=Math.round((panOffset.value+minScrollDistancePerSwipe*Math.sign(totalTranslation))/size)*size;translation.value=withSpring(withProcessTranslation(nextPage),onScrollEnd);}else{endWithSpring(panTranslation,scrollEndVelocityValue,onScrollEnd);}if(!loop)touching.value=false;panOffset.value=undefined;}" };
let closure_21 = { code: "function pnpm_ScrollViewGestureTsx16(e){const{updateContainerSize}=this.__closure;updateContainerSize({width:e.nativeEvent.layout.width,height:e.nativeEvent.layout.height});}" };

export const ScrollViewGesture = function ScrollViewGesture(children) {
  let enabled;
  let obj11;
  let onConfigurePanGesture;
  let onTouchBegin;
  let onTouchEnd;
  let snapEnabled;
  let vertical;
  let tmp = vertical;
  const tmp2 = snapEnabled;
  let obj = vertical(snapEnabled[2]);
  const globalState = obj.useGlobalState();
  const props = globalState.props;
  vertical = props.vertical;
  const pagingEnabled = props.pagingEnabled;
  snapEnabled = props.snapEnabled;
  const loop = props.loop;
  const scrollAnimationDuration = props.scrollAnimationDuration;
  const withAnimation = props.withAnimation;
  const dataLength = props.dataLength;
  const overscrollEnabled = props.overscrollEnabled;
  const maxScrollDistancePerSwipe = props.maxScrollDistancePerSwipe;
  const minScrollDistancePerSwipe = props.minScrollDistancePerSwipe;
  const fixedDirection = props.fixedDirection;
  size = globalState.common.size;
  const updateContainerSize = globalState.layout.updateContainerSize;
  const translation = children.translation;
  let style = children.style;
  ({ onConfigurePanGesture, enabled } = props);
  const testID = children.testID;
  if (undefined === style) {
    style = {};
  }
  const onScrollStart = children.onScrollStart;
  const onScrollEnd = children.onScrollEnd;
  ({ onTouchBegin, onTouchEnd } = children);
  let fn = function y() {
    return !vertical;
  };
  fn.__closure = { vertical };
  fn.__workletHash = 1538641593051;
  fn.__initData = dataLength;
  const items = [vertical];
  const tmpResult = tmp(tmp2[3]);
  const derivedValue = tmpResult.useDerivedValue(fn, items);
  const tmpResult10 = tmp(tmp2[3]);
  const sharedValue = tmpResult10.useSharedValue(0);
  const tmpResult11 = tmp(tmp2[3]);
  const sharedValue1 = tmpResult11.useSharedValue(undefined);
  const tmpResult12 = tmp(tmp2[3]);
  const sharedValue2 = tmpResult12.useSharedValue(false);
  const tmpResult13 = tmp(tmp2[3]);
  const sharedValue3 = tmpResult13.useSharedValue(false);
  const tmpResult14 = tmp(tmp2[3]);
  const sharedValue4 = tmpResult14.useSharedValue(0);
  const tmpResult15 = tmp(tmp2[3]);
  const sharedValue5 = tmpResult15.useSharedValue(0);
  const tmpResult16 = tmp(tmp2[3]);
  const animatedRef = tmpResult16.useAnimatedRef();
  const tmp12 = typeof maxScrollDistancePerSwipe === "number";
  let closure_25 = tmp12;
  const tmp13 = typeof minScrollDistancePerSwipe === "number";
  let closure_26 = tmp13;
  class P {
    constructor() {
      if (!loop) {
        if (!overscrollEnabled) {
          const obj = _mod1643;
          const measureResult = obj.measure(animatedRef);
          let num;
          if (measureResult != null) {
            num = measureResult.width;
          }
          if (!num) {
            num = 0;
          }
          let num2 = 0;
          if (dataLength * size >= num) {
            num2 = dataLength * size - num;
          }
          return num2;
        }
      }
      return dataLength * size;
    }
  }
  let obj2 = { loop, overscrollEnabled, measure: tmp(tmp2[3]).measure, containerRef: animatedRef, dataLength, size };
  P.__closure = obj2;
  P.__workletHash = 14254270315231;
  P.__initData = overscrollEnabled;
  const items1 = [loop, size, dataLength, overscrollEnabled];
  const getLimit = loop.useCallback(P, items1);
  class M {
    constructor(arg0, arg1) {
      closure_0 = arg1;
      obj = { type: "timing", config: null };
      obj1 = { duration: scrollAnimationDuration + 100, easing: closure_0(closure_2[4]).Easing.easeOutQuart };
      tmp = closure_0;
      tmp2 = closure_2;
      obj.config = obj1;
      tmp3 = closure_0(closure_2[5]);
      tmp4 = withAnimation;
      dealWithAnimation = tmp3.dealWithAnimation;
      if (withAnimation == null) {
        tmp4 = obj;
      }
      fn = function t(arg0) {
        const tmp = arg0 && closure_0;
        if (tmp) {
          const obj = vertical(snapEnabled[3]);
          obj.runOnJS(closure_0)();
        }
      };
      obj4 = { onFinished: arg1, runOnJS: null };
      dealWithAnimationResult = dealWithAnimation(tmp4);
      obj4.runOnJS = tmp(tmp2[3]).runOnJS;
      fn.__closure = obj4;
      fn.__workletHash = 7565331159140;
      fn.__initData = closure_9;
      return dealWithAnimationResult(children, fn);
    }
  }
  let obj3 = { scrollAnimationDuration, Easing: tmp(tmp2[4]).Easing, dealWithAnimation: tmp(tmp2[5]).dealWithAnimation, withAnimation, runOnJS: tmp(tmp2[3]).runOnJS };
  M.__closure = obj3;
  M.__workletHash = 14905784555207;
  M.__initData = maxScrollDistancePerSwipe;
  const items2 = [scrollAnimationDuration, withAnimation];
  const callback1 = loop.useCallback(M, items2);
  class V {
    constructor(arg0, velocity, arg2) {
      let tmp39Result;
      value = translation.value;
      const obj = _mod1643;
      const obj2 = { velocity, deceleration: 0.999 };
      let withDecayResult = obj.withDecay(obj2);
      if (!closure_25) {
        const _Math2 = Math;
        const tmp10 = -Math.round((value + 2 * velocity) / size);
        if (pagingEnabled) {
          let floor;
          let num3 = -1;
          if (arg0 >= 0) {
            num3 = 1;
          }
          if (-num3 < 0) {
            const _Math4 = Math;
            floor = Math.ceil;
          } else {
            const _Math3 = Math;
            floor = Math.floor;
          }
          const floorResult = floor(-value / size);
          const _Math5 = Math;
          if (floorResult !== tmp10) {
            if (-Math.sign(velocity) === -num3) {
              if (loop) {
                const result = -floorResult + tmp12 * size;
                let result1 = result;
                if (!loop) {
                  result1 = result;
                  if (!overscrollEnabled) {
                    const _Math12 = Math;
                    const _Math13 = Math;
                    const _Math14 = Math;
                    const _Math15 = Math;
                    const tmp28 = callback();
                    const signResult = Math.sign(result);
                    result1 = signResult * Math.max(0, Math.min(tmp28, Math.abs(result)));
                  }
                }
                withDecayResult = callback1(result1, arg2);
              } else {
                const _Math6 = Math;
                const _Math7 = Math;
                const diff = dataLength - 1;
                const result2 = -Math.min(diff, Math.max(0, floorResult + tmp12)) * size;
                let result3 = result2;
                if (!loop) {
                  result3 = result2;
                  if (!overscrollEnabled) {
                    const _Math8 = Math;
                    const _Math9 = Math;
                    const _Math10 = Math;
                    const _Math11 = Math;
                    const tmp21 = callback();
                    const signResult1 = Math.sign(result2);
                    result3 = signResult1 * Math.max(0, Math.min(tmp21, Math.abs(result2)));
                  }
                }
                withDecayResult = callback1(result3, arg2);
              }
            }
          }
          const result4 = -floorResult * size;
          let result5 = result4;
          if (!loop) {
            result5 = result4;
            if (!overscrollEnabled) {
              const _Math16 = Math;
              const _Math17 = Math;
              const _Math18 = Math;
              const _Math19 = Math;
              const tmp36 = callback();
              const signResult2 = Math.sign(result4);
              result5 = signResult2 * Math.max(0, Math.min(tmp36, Math.abs(result4)));
            }
          }
          withDecayResult = callback1(result5, arg2);
        }
        tmp39Result = withDecayResult;
        const tmp38 = !pagingEnabled && snapEnabled;
        if (tmp38) {
          const result6 = -tmp10 * size;
          let result7 = result6;
          if (!loop) {
            result7 = result6;
            if (!overscrollEnabled) {
              const _Math20 = Math;
              const _Math21 = Math;
              const _Math22 = Math;
              const _Math23 = Math;
              const tmp45 = callback();
              const signResult3 = Math.sign(result6);
              result7 = signResult3 * Math.max(0, Math.min(tmp45, Math.abs(result6)));
            }
          }
          tmp39Result = callback1(result7, arg2);
        }
      } else {
        const _Math = Math;
        tmp39Result = value;
      }
      translation.value = tmp39Result;
    }
  }
  V.__closure = { translation, withDecay: tmp(tmp2[3]).withDecay, maxScrollDistancePerSwipeIsSet: tmp12, maxScrollDistancePerSwipe, size, pagingEnabled, withSpring: callback1, loop, maxPage: dataLength, snapEnabled, overscrollEnabled, getLimit };
  V.__workletHash = 205523855173;
  V.__initData = fixedDirection;
  const items3 = [callback1, size, dataLength, loop, snapEnabled, translation, pagingEnabled, maxScrollDistancePerSwipe, tmp12];
  ({ translation, withDecay: tmp(tmp2[3]).withDecay, maxScrollDistancePerSwipeIsSet: tmp12, maxScrollDistancePerSwipe, size, pagingEnabled, withSpring: callback1, loop, maxPage: dataLength, snapEnabled, overscrollEnabled, getLimit });
  const callback2 = loop.useCallback(V, items3);
  const fn2 = function z(arg0) {
    const tmp = arg0;
    if (tmp) {
      sharedValue2.value = false;
      if (onScrollEnd) {
        const obj = _mod1643;
        obj.runOnJS(tmp3)();
      }
    }
  };
  fn2.__closure = { touching: sharedValue2, onScrollEnd, runOnJS: tmp(tmp2[3]).runOnJS };
  fn2.__workletHash = 13381002348098;
  fn2.__initData = size;
  const items4 = [onScrollEnd, sharedValue2];
  ({ touching: sharedValue2, onScrollEnd, runOnJS: tmp(tmp2[3]).runOnJS });
  const callback3 = loop.useCallback(fn2, items4);
  class O {
    constructor() {
      closure_20.value = true;
      obj = closure_0(closure_2[3]);
      obj1 = { velocity: closure_23.value };
      fn = function n(arg0) {
        return callback3(arg0);
      };
      obj4 = { onFinish: closure_30 };
      fn.__closure = obj4;
      fn.__workletHash = 13082713046354;
      fn.__initData = closure_13;
      translation.value = obj.withDecay(obj1, fn);
      return;
    }
  }
  O.__closure = { touching: sharedValue2, translation, withDecay: tmp(tmp2[3]).withDecay, scrollEndVelocity: sharedValue5, onFinish: callback3 };
  O.__workletHash = 12267307896109;
  O.__initData = updateContainerSize;
  const items5 = [callback3, sharedValue5, sharedValue2, translation];
  ({ touching: sharedValue2, translation, withDecay: tmp(tmp2[3]).withDecay, scrollEndVelocity: sharedValue5, onFinish: callback3 });
  const callback4 = loop.useCallback(O, items5);
  class F {
    constructor() {
      if (!sharedValue2.value) {
        if (translation.value > 0) {
          if (sharedValue4.value < 0) {
            callback4();
          } else if (!loop) {
            translation.value = callback1(0);
          }
        }
        if (translation.value < -dataLength - 1 * size) {
          if (sharedValue4.value > 0) {
            callback4();
          } else if (!loop) {
            translation.value = callback1(-tmp3 - 1 * tmp4);
          }
        }
      }
    }
  }
  F.__closure = { touching: sharedValue2, translation, scrollEndTranslation: sharedValue4, activeDecay: callback4, loop, withSpring: callback1, maxPage: dataLength, size };
  F.__workletHash = 11689345102683;
  F.__initData = onScrollStart;
  const items6 = [sharedValue2, translation, dataLength, size, sharedValue4, loop, callback4, callback1];
  const callback5 = loop.useCallback(F, items6);
  const fn3 = function k() {
    return translation.value;
  };
  fn3.__closure = { translation };
  fn3.__workletHash = 10264158907215;
  fn3.__initData = onScrollEnd;
  const tmpResult17 = tmp(tmp2[3]);
  class A {
    constructor() {
      if (!pagingEnabled) {
        callback5();
      }
    }
  }
  A.__closure = { pagingEnabled, resetBoundary: callback5 };
  A.__workletHash = 1428786849795;
  A.__initData = dataLength;
  const items7 = [pagingEnabled, callback5];
  const animatedReaction = tmpResult17.useAnimatedReaction(fn3, A, items7);
  function withProcessTranslation(arg0) {
    if (!loop) {
      if (!overscrollEnabled) {
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        const _Math4 = Math;
        const tmp4 = callback();
        const signResult = Math.sign(arg0);
        return signResult * Math.max(0, Math.min(tmp4, Math.abs(arg0)));
      }
    }
    return arg0;
  }
  withProcessTranslation.__closure = { loop, overscrollEnabled, getLimit };
  withProcessTranslation.__workletHash = 4415703918410;
  withProcessTranslation.__initData = derivedValue;
  class En {
    constructor(arg0) {
      sharedValue2.value = true;
      sharedValue3.value = true;
      if (onScrollStart) {
        const obj = _mod1643;
        obj.runOnJS(tmp)();
      }
      sharedValue.value = (dataLength - 1) * size;
      const tmp6 = loop || overscrollEnabled;
      if (!tmp6) {
        sharedValue.value = callback();
      }
      sharedValue1.value = translation.value;
    }
  }
  En.__closure = { touching: sharedValue2, validStart: sharedValue3, onScrollStart, runOnJS: tmp(tmp2[3]).runOnJS, max: sharedValue, maxPage: dataLength, size, loop, overscrollEnabled, getLimit, panOffset: sharedValue1, translation };
  En.__workletHash = 11962065871670;
  En.__initData = sharedValue;
  const items8 = [sharedValue, size, dataLength, loop, sharedValue2, sharedValue1, sharedValue3, translation, overscrollEnabled, getLimit, onScrollStart];
  function bn(translationY) {
    if (undefined !== sharedValue1.value) {
      let tmp9;
      if (sharedValue3.value) {
        tmp16.value = false;
        const obj = _mod1643;
        obj.cancelAnimation(translation);
      }
      sharedValue2.value = true;
      let translationX = translationY.translationY;
      if (derivedValue.value) {
        translationX = translationY.translationX;
      }
      if ("negative" === fixedDirection) {
        const _Math2 = Math;
        tmp9 = -Math.abs(translationX);
      } else {
        tmp9 = translationX;
        if ("positive" === tmp8) {
          const _Math = Math;
          tmp9 = +Math.abs(translationX);
        }
      }
      if (!loop) {
        let num2 = 0;
        if (translation.value <= 0) {
          num2 = -sharedValue.value;
        }
        translation.value = num2 + 0.5 * (tmp9 - (num2 - sharedValue1.value));
      }
      translation.value = sharedValue1.value + tmp9;
    }
  }
  const obj8 = { panOffset: sharedValue1, validStart: sharedValue3, cancelAnimation: tmp(tmp2[3]).cancelAnimation, translation, touching: sharedValue2, isHorizontal: derivedValue, fixedDirection, loop, max: sharedValue };
  ({ touching: sharedValue2, validStart: sharedValue3, onScrollStart, runOnJS: tmp(tmp2[3]).runOnJS, max: sharedValue, maxPage: dataLength, size, loop, overscrollEnabled, getLimit, panOffset: sharedValue1, translation });
  let tmp21 = scrollAnimationDuration(En, items8);
  bn.__closure = obj8;
  bn.__workletHash = 851179073329;
  bn.__initData = sharedValue1;
  const items9 = [derivedValue, sharedValue, sharedValue1, loop, overscrollEnabled, fixedDirection, translation, sharedValue3, sharedValue2];
  function yn(velocityX, arg1) {
    let translationX;
    let translationY;
    let velocityY;
    if (undefined !== sharedValue1.value) {
      let tmp3;
      ({ velocityY, translationY, translationX } = velocityX);
      if (derivedValue.value) {
        velocityY = velocityX.velocityX;
      }
      sharedValue5.value = velocityY;
      if (derivedValue.value) {
        translationY = translationX;
      }
      if ("negative" === fixedDirection) {
        const _Math2 = Math;
        tmp3 = -Math.abs(translationY);
      } else {
        tmp3 = translationY;
        if ("positive" === tmp2) {
          const _Math = Math;
          tmp3 = +Math.abs(translationY);
        }
      }
      sharedValue4.value = tmp3;
      const sum = velocityY + tmp3;
      if (closure_25) {
        const _Math3 = Math;
        if (Math.abs(sum) > maxScrollDistancePerSwipe) {
          const _Math11 = Math;
          const _Math12 = Math;
          const result = Math.round((sharedValue1.value + tmp10 * Math.sign(sum)) / size) * size;
          if (typeof withProcessTranslation === "function") {
            let result1 = result;
            if (!loop) {
              result1 = result;
              if (!overscrollEnabled) {
                const _Math13 = Math;
                const _Math14 = Math;
                const _Math15 = Math;
                const _Math16 = Math;
                const tmp38 = callback();
                const signResult = Math.sign(result);
                result1 = signResult * Math.max(0, Math.min(tmp38, Math.abs(result)));
              }
            }
            tmp31.value = tmp32(result1, onScrollEnd);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        if (!loop) {
          sharedValue2.value = false;
        }
        sharedValue1.value = undefined;
      }
      if (closure_26) {
        const _Math4 = Math;
        if (Math.abs(sum) < minScrollDistancePerSwipe) {
          const _Math5 = Math;
          const _Math6 = Math;
          const result2 = Math.round((sharedValue1.value + tmp13 * Math.sign(sum)) / size) * size;
          if (typeof withProcessTranslation === "function") {
            let result3 = result2;
            if (!loop) {
              result3 = result2;
              if (!overscrollEnabled) {
                const _Math7 = Math;
                const _Math8 = Math;
                const _Math9 = Math;
                const _Math10 = Math;
                const tmp26 = callback();
                const signResult1 = Math.sign(result2);
                result3 = signResult1 * Math.max(0, Math.min(tmp26, Math.abs(result2)));
              }
            }
            tmp19.value = tmp20(result3, onScrollEnd);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      callback2(tmp3, velocityY, onScrollEnd);
    }
  }
  yn.__closure = { panOffset: sharedValue1, isHorizontal: derivedValue, scrollEndVelocity: sharedValue5, fixedDirection, scrollEndTranslation: sharedValue4, maxScrollDistancePerSwipeIsSet: tmp12, maxScrollDistancePerSwipe, size, translation, withSpring: callback1, withProcessTranslation, onScrollEnd, minScrollDistancePerSwipeIsSet: tmp13, minScrollDistancePerSwipe, endWithSpring: callback2, loop, touching: sharedValue2 };
  yn.__workletHash = 14460845775334;
  yn.__initData = sharedValue2;
  const items10 = [size, loop, sharedValue2, sharedValue1, translation, derivedValue, sharedValue5, sharedValue4, fixedDirection, tmp12, maxScrollDistancePerSwipe, tmp12, minScrollDistancePerSwipe, callback2, callback1, onScrollEnd];
  const tmp22 = scrollAnimationDuration(bn, items9);
  const obj9 = { onConfigurePanGesture, onGestureStart: tmp21, onGestureUpdate: tmp22, onGestureEnd: scrollAnimationDuration(yn, items10), options: { enabled } };
  const tmpResult18 = tmp(tmp2[6]);
  class Pn {
    constructor(nativeEvent) {
      size = { width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height };
      updateContainerSize(size);
    }
  }
  Pn.__closure = { updateContainerSize };
  Pn.__workletHash = 15591637556712;
  Pn.__initData = sharedValue3;
  const items11 = [updateContainerSize];
  const panGestureProxy = tmpResult18.usePanGestureProxy(obj9);
  const callback6 = loop.useCallback(Pn, items11);
  const obj10 = { gesture: panGestureProxy, children: withAnimation(pagingEnabled(tmp2[3]).View, obj11) };
  const GestureDetector = tmp(tmp2[7]).GestureDetector;
  obj11 = { ref: animatedRef, testID, style, onTouchStart: onTouchBegin, onTouchEnd, onLayout: callback6, children: children.children };
  return withAnimation(GestureDetector, obj10);
};