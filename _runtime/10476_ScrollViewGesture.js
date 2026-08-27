// === Module 10476: ScrollViewGesture ===

// Module 10476 (ScrollViewGesture)
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
require("noop").useCallback;
let closure_6 = { code: "function pnpm_ScrollViewGestureTsx1(){const{vertical}=this.__closure;return!vertical;}" };
let closure_7 = { code: "function pnpm_ScrollViewGestureTsx2(){const{loop,overscrollEnabled,measure,containerRef,dataLength,size}=this.__closure;if(!loop&&!overscrollEnabled){const measurement=measure(containerRef);const containerWidth=(measurement===null||measurement===void 0?void 0:measurement.width)||0;if(dataLength*size<containerWidth)return 0;return dataLength*size-containerWidth;}return dataLength*size;}" };
let closure_8 = { code: "function pnpm_ScrollViewGestureTsx3(toValue,onFinished){const{scrollAnimationDuration,Easing,dealWithAnimation,withAnimation,runOnJS}=this.__closure;var _withAnimation;const defaultWithAnimation={type:\"timing\",config:{duration:scrollAnimationDuration+100,easing:Easing.easeOutQuart}};return dealWithAnimation((_withAnimation=withAnimation)!==null&&_withAnimation!==void 0?_withAnimation:defaultWithAnimation)(toValue,function(isFinished){\"worklet\";if(isFinished)onFinished&&runOnJS(onFinished)();});}" };
let closure_9 = { code: "function pnpm_ScrollViewGestureTsx4(isFinished){const{onFinished,runOnJS}=this.__closure;if(isFinished)onFinished&&runOnJS(onFinished)();}" };
let closure_10 = { code: "function pnpm_ScrollViewGestureTsx5(scrollEndTranslationValue,scrollEndVelocityValue,onFinished){const{translation,withDecay,maxScrollDistancePerSwipeIsSet,maxScrollDistancePerSwipe,size,pagingEnabled,withSpring,loop,maxPage,snapEnabled,overscrollEnabled,getLimit}=this.__closure;const origin=translation.value;const velocity=scrollEndVelocityValue;let finalTranslation=withDecay({velocity:velocity,deceleration:0.999});if(maxScrollDistancePerSwipeIsSet&&Math.abs(scrollEndTranslationValue)>maxScrollDistancePerSwipe){finalTranslation=origin;}else{const nextPage=-Math.round((origin+velocity*2)/size);if(pagingEnabled){const offset=-(scrollEndTranslationValue>=0?1:-1);const computed=offset<0?Math.ceil:Math.floor;const page=computed(-origin/size);const velocityDirection=-Math.sign(velocity);if(page===nextPage||velocityDirection!==offset){finalTranslation=withSpring(withProcessTranslation(-page*size),onFinished);}else if(loop){const finalPage=page+offset;finalTranslation=withSpring(withProcessTranslation(-finalPage*size),onFinished);}else{const finalPage=Math.min(maxPage-1,Math.max(0,page+offset));finalTranslation=withSpring(withProcessTranslation(-finalPage*size),onFinished);}}if(!pagingEnabled&&snapEnabled){finalTranslation=withSpring(withProcessTranslation(-nextPage*size),onFinished);}}translation.value=finalTranslation;function withProcessTranslation(translation){if(!loop&&!overscrollEnabled){const limit=getLimit();const sign=Math.sign(translation);return sign*Math.max(0,Math.min(limit,Math.abs(translation)));}return translation;}}" };
let closure_11 = { code: "function pnpm_ScrollViewGestureTsx6(isFinished){const{touching,onScrollEnd,runOnJS}=this.__closure;if(isFinished){touching.value=false;onScrollEnd&&runOnJS(onScrollEnd)();}}" };
let closure_12 = { code: "function pnpm_ScrollViewGestureTsx7(){const{touching,translation,withDecay,scrollEndVelocity,onFinish}=this.__closure;touching.value=true;translation.value=withDecay({velocity:scrollEndVelocity.value},function(isFinished){return onFinish(isFinished);});}" };
let closure_13 = { code: "function pnpm_ScrollViewGestureTsx8(isFinished){const{onFinish}=this.__closure;return onFinish(isFinished);}" };
let closure_14 = { code: "function pnpm_ScrollViewGestureTsx9(){const{touching,translation,scrollEndTranslation,activeDecay,loop,withSpring,maxPage,size}=this.__closure;if(touching.value)return;if(translation.value>0){if(scrollEndTranslation.value<0){activeDecay();return;}if(!loop){translation.value=withSpring(0);return;}}if(translation.value<-((maxPage-1)*size)){if(scrollEndTranslation.value>0){activeDecay();return;}if(!loop)translation.value=withSpring(-((maxPage-1)*size));}}" };
let closure_15 = { code: "function pnpm_ScrollViewGestureTsx10(){const{translation}=this.__closure;return translation.value;}" };
let closure_16 = { code: "function pnpm_ScrollViewGestureTsx11(){const{pagingEnabled,resetBoundary}=this.__closure;if(!pagingEnabled)resetBoundary();}" };
let closure_17 = { code: "function withProcessTranslation_Pnpm_ScrollViewGestureTsx12(translation){const{loop,overscrollEnabled,getLimit}=this.__closure;if(!loop&&!overscrollEnabled){const limit=getLimit();const sign=Math.sign(translation);return sign*Math.max(0,Math.min(limit,Math.abs(translation)));}return translation;}" };
let closure_18 = { code: "function pnpm_ScrollViewGestureTsx13(_){const{touching,validStart,onScrollStart,runOnJS,max,maxPage,size,loop,overscrollEnabled,getLimit,panOffset,translation}=this.__closure;touching.value=true;validStart.value=true;onScrollStart&&runOnJS(onScrollStart)();max.value=(maxPage-1)*size;if(!loop&&!overscrollEnabled)max.value=getLimit();panOffset.value=translation.value;}" };
let closure_19 = { code: "function pnpm_ScrollViewGestureTsx14(e){const{panOffset,validStart,cancelAnimation,translation,touching,isHorizontal,fixedDirection,loop,max}=this.__closure;if(panOffset.value===undefined){return;}if(validStart.value){validStart.value=false;cancelAnimation(translation);}touching.value=true;const{translationX:translationX,translationY:translationY}=e;let panTranslation=isHorizontal.value?translationX:translationY;if(fixedDirection===\"negative\")panTranslation=-Math.abs(panTranslation);else if(fixedDirection===\"positive\")panTranslation=+Math.abs(panTranslation);if(!loop){if(translation.value>0||translation.value<-max.value){const boundary=translation.value>0?0:-max.value;const fixed=boundary-panOffset.value;const dynamic=panTranslation-fixed;translation.value=boundary+dynamic*0.5;return;}}const translationValue=panOffset.value+panTranslation;translation.value=translationValue;}" };
let closure_20 = { code: "function pnpm_ScrollViewGestureTsx15(e,_success){const{panOffset,isHorizontal,scrollEndVelocity,fixedDirection,scrollEndTranslation,maxScrollDistancePerSwipeIsSet,maxScrollDistancePerSwipe,size,translation,withSpring,withProcessTranslation,onScrollEnd,minScrollDistancePerSwipeIsSet,minScrollDistancePerSwipe,endWithSpring,loop,touching}=this.__closure;if(panOffset.value===undefined){return;}const{velocityX:velocityX,velocityY:velocityY,translationX:translationX,translationY:translationY}=e;const scrollEndVelocityValue=isHorizontal.value?velocityX:velocityY;scrollEndVelocity.value=scrollEndVelocityValue;let panTranslation=isHorizontal.value?translationX:translationY;if(fixedDirection===\"negative\")panTranslation=-Math.abs(panTranslation);else if(fixedDirection===\"positive\")panTranslation=+Math.abs(panTranslation);scrollEndTranslation.value=panTranslation;const totalTranslation=scrollEndVelocityValue+panTranslation;if(maxScrollDistancePerSwipeIsSet&&Math.abs(totalTranslation)>maxScrollDistancePerSwipe){const nextPage=Math.round((panOffset.value+maxScrollDistancePerSwipe*Math.sign(totalTranslation))/size)*size;translation.value=withSpring(withProcessTranslation(nextPage),onScrollEnd);}else if(minScrollDistancePerSwipeIsSet&&Math.abs(totalTranslation)<minScrollDistancePerSwipe){const nextPage=Math.round((panOffset.value+minScrollDistancePerSwipe*Math.sign(totalTranslation))/size)*size;translation.value=withSpring(withProcessTranslation(nextPage),onScrollEnd);}else{endWithSpring(panTranslation,scrollEndVelocityValue,onScrollEnd);}if(!loop)touching.value=false;panOffset.value=undefined;}" };
let closure_21 = { code: "function pnpm_ScrollViewGestureTsx16(e){const{updateContainerSize}=this.__closure;updateContainerSize({width:e.nativeEvent.layout.width,height:e.nativeEvent.layout.height});}" };

export const ScrollViewGesture = function ScrollViewGesture(testID) {
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
  const size = globalState.common.size;
  const updateContainerSize = globalState.layout.updateContainerSize;
  const translation = testID.translation;
  let style = testID.style;
  ({ onConfigurePanGesture, enabled } = props);
  if (undefined === style) {
    style = {};
  }
  const onScrollStart = testID.onScrollStart;
  const onScrollEnd = testID.onScrollEnd;
  ({ onTouchBegin, onTouchEnd } = testID);
  let tmpResult = tmp(tmp2[3]);
  let fn = function y() {
    return !vertical;
  };
  fn.__closure = { vertical };
  fn.__workletHash = 1538641593051;
  fn.__initData = dataLength;
  const items = [vertical];
  const derivedValue = tmpResult.useDerivedValue(fn, items);
  tmpResult = tmp(tmp2[3]);
  const sharedValue = tmpResult.useSharedValue(0);
  const sharedValue1 = vertical(snapEnabled[3]).useSharedValue(undefined);
  const tmpResult1 = vertical(snapEnabled[3]);
  const sharedValue2 = vertical(snapEnabled[3]).useSharedValue(false);
  const tmpResult2 = vertical(snapEnabled[3]);
  const sharedValue3 = vertical(snapEnabled[3]).useSharedValue(false);
  const tmpResult3 = vertical(snapEnabled[3]);
  const sharedValue4 = vertical(snapEnabled[3]).useSharedValue(0);
  const tmpResult4 = vertical(snapEnabled[3]);
  const sharedValue5 = vertical(snapEnabled[3]).useSharedValue(0);
  const tmpResult5 = vertical(snapEnabled[3]);
  const animatedRef = vertical(snapEnabled[3]).useAnimatedRef();
  closure_25 = tmp12;
  closure_26 = tmp13;
  class P {
    constructor() {
      if (!loop) {
        tmp = overscrollEnabled;
        if (!overscrollEnabled) {
          tmp2 = vertical;
          tmp3 = snapEnabled;
          obj = vertical(snapEnabled[3]);
          tmp4 = closure_24;
          measureResult = obj.measure(closure_24);
          tmp6 = null;
          num = undefined;
          if (measureResult != null) {
            num = measureResult.width;
          }
          if (!num) {
            num = 0;
          }
          num2 = 0;
          if (dataLength * size >= num) {
            num2 = dataLength * size - num;
          }
          return num2;
        }
      }
      return dataLength * size;
    }
  }
  obj = { loop, overscrollEnabled, measure: tmp(tmp2[3]).measure, containerRef: animatedRef, dataLength, size };
  P.__closure = obj;
  P.__workletHash = 14254270315231;
  P.__initData = overscrollEnabled;
  const items1 = [loop, size, dataLength, overscrollEnabled];
  const callback = loop.useCallback(P, items1);
  class M {
    constructor(arg0, arg1) {
      closure_0 = arg1;
      obj = { type: "timing", config: null };
      obj = { duration: scrollAnimationDuration + 100, easing: vertical(snapEnabled[4]).Easing.easeOutQuart };
      tmp = vertical;
      tmp2 = snapEnabled;
      obj[1] = obj;
      obj3 = vertical(snapEnabled[5]);
      tmp3 = withAnimation;
      if (withAnimation == null) {
        tmp3 = obj;
      }
      fn = function t(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = onFinished;
        }
        if (tmp) {
          onFinished(closure_1_2[3]).runOnJS(onFinished)();
          const obj = onFinished(closure_1_2[3]);
        }
      };
      obj1 = { onFinished: arg1, runOnJS: null };
      dealWithAnimationResult = obj3.dealWithAnimation(tmp3);
      obj1[1] = tmp(tmp2[3]).runOnJS;
      fn.__closure = obj1;
      fn.__workletHash = 7565331159140;
      fn.__initData = minScrollDistancePerSwipe;
      return dealWithAnimationResult(testID, fn);
    }
  }
  obj = { scrollAnimationDuration, Easing: tmp(tmp2[4]).Easing, dealWithAnimation: tmp(tmp2[5]).dealWithAnimation, withAnimation, runOnJS: tmp(tmp2[3]).runOnJS };
  M.__closure = obj;
  M.__workletHash = 14905784555207;
  M.__initData = maxScrollDistancePerSwipe;
  const items2 = [scrollAnimationDuration, withAnimation];
  const callback1 = loop.useCallback(M, items2);
  class V {
    constructor(arg0, arg1, arg2) {
      value = translation.value;
      tmp = translation;
      obj = vertical(snapEnabled[3]);
      obj = { velocity: arg1, deceleration: 0.999 };
      withDecayResult = obj.withDecay(obj);
      if (!closure_25) {
        tmp6 = arg2;
        tmp7 = globalThis;
        _Math2 = Math;
        num = 2;
        tmp8 = size;
        tmp9 = -Math.round((value + 2 * arg1) / size);
        tmp10 = pagingEnabled;
        if (pagingEnabled) {
          num2 = 0;
          num3 = -1;
          if (testID >= 0) {
            num3 = 1;
          }
          tmp11 = -num3;
          if (tmp11 < 0) {
            _Math4 = Math;
            floor = Math.ceil;
          } else {
            _Math3 = Math;
            floor = Math.floor;
          }
          floorResult = floor(-value / tmp8);
          _Math5 = Math;
          if (floorResult !== tmp9) {
            if (-Math.sign(arg1) === tmp11) {
              tmp46 = loop;
              if (loop) {
                result = -floorResult + tmp11 * tmp8;
                result1 = result;
                tmp22 = closure_28;
                if (!tmp46) {
                  tmp25 = overscrollEnabled;
                  result1 = result;
                  if (!overscrollEnabled) {
                    tmp26 = closure_27;
                    _Math12 = Math;
                    tmp27 = closure_27();
                    _Math13 = Math;
                    _Math14 = Math;
                    _Math15 = Math;
                    signResult = Math.sign(result);
                    result1 = signResult * Math.max(0, Math.min(tmp27, Math.abs(result)));
                  }
                }
                withDecayResult = tmp22(result1, arg2);
              } else {
                _Math6 = Math;
                tmp13 = dataLength;
                num4 = 1;
                _Math7 = Math;
                diff = dataLength - 1;
                result2 = -Math.min(diff, Math.max(0, floorResult + tmp11)) * tmp8;
                result3 = result2;
                tmp15 = closure_28;
                if (!tmp46) {
                  tmp18 = overscrollEnabled;
                  result3 = result2;
                  if (!overscrollEnabled) {
                    tmp19 = closure_27;
                    _Math8 = Math;
                    tmp20 = closure_27();
                    _Math9 = Math;
                    _Math10 = Math;
                    _Math11 = Math;
                    signResult1 = Math.sign(result2);
                    result3 = signResult1 * Math.max(0, Math.min(tmp20, Math.abs(result2)));
                  }
                }
                withDecayResult = tmp15(result3, arg2);
              }
            }
          }
          result4 = -floorResult * tmp8;
          tmp31 = loop;
          result5 = result4;
          tmp29 = closure_28;
          if (!loop) {
            tmp33 = overscrollEnabled;
            result5 = result4;
            if (!overscrollEnabled) {
              tmp34 = closure_27;
              _Math16 = Math;
              tmp35 = closure_27();
              _Math17 = Math;
              _Math18 = Math;
              _Math19 = Math;
              signResult2 = Math.sign(result4);
              result5 = signResult2 * Math.max(0, Math.min(tmp35, Math.abs(result4)));
            }
          }
          withDecayResult = tmp29(result5, arg2);
        }
        tmp37 = !tmp10;
        if (!tmp10) {
          tmp37 = snapEnabled;
        }
        tmp38Result = withDecayResult;
        if (tmp37) {
          result6 = -tmp9 * tmp8;
          tmp40 = loop;
          result7 = result6;
          tmp38 = closure_28;
          if (!loop) {
            tmp42 = overscrollEnabled;
            result7 = result6;
            if (!overscrollEnabled) {
              tmp43 = closure_27;
              _Math20 = Math;
              tmp44 = closure_27();
              _Math21 = Math;
              _Math22 = Math;
              _Math23 = Math;
              signResult3 = Math.sign(result6);
              num5 = 0;
              result7 = signResult3 * Math.max(0, Math.min(tmp44, Math.abs(result6)));
            }
          }
          tmp38Result = tmp38(result7, arg2);
        }
      } else {
        tmp3 = globalThis;
        _Math = Math;
        tmp4 = maxScrollDistancePerSwipe;
        tmp38Result = value;
      }
      tmp.value = tmp38Result;
      return;
    }
  }
  const tmpResult6 = vertical(snapEnabled[3]);
  V.__closure = { translation, withDecay: vertical(snapEnabled[3]).withDecay, maxScrollDistancePerSwipeIsSet: typeof maxScrollDistancePerSwipe === "number", maxScrollDistancePerSwipe, size, pagingEnabled, withSpring: callback1, loop, maxPage: dataLength, snapEnabled, overscrollEnabled, getLimit: callback };
  V.__workletHash = 205523855173;
  V.__initData = fixedDirection;
  const items3 = [callback1, size, dataLength, loop, snapEnabled, translation, pagingEnabled, maxScrollDistancePerSwipe, typeof maxScrollDistancePerSwipe === "number"];
  const callback2 = loop.useCallback(V, items3);
  const fn2 = function z(arg0) {
    if (arg0) {
      sharedValue2.value = false;
      if (onScrollEnd) {
        vertical(snapEnabled[3]).runOnJS(tmp2)();
        const obj = vertical(snapEnabled[3]);
      }
    }
  };
  obj1 = { translation, withDecay: vertical(snapEnabled[3]).withDecay, maxScrollDistancePerSwipeIsSet: typeof maxScrollDistancePerSwipe === "number", maxScrollDistancePerSwipe, size, pagingEnabled, withSpring: callback1, loop, maxPage: dataLength, snapEnabled, overscrollEnabled, getLimit: callback };
  fn2.__closure = { touching: sharedValue2, onScrollEnd, runOnJS: vertical(snapEnabled[3]).runOnJS };
  fn2.__workletHash = 13381002348098;
  fn2.__initData = size;
  const items4 = [onScrollEnd, sharedValue2];
  const callback3 = loop.useCallback(fn2, items4);
  class O {
    constructor() {
      closure_20.value = true;
      obj = vertical(snapEnabled[3]);
      obj = { velocity: closure_23.value };
      fn = function n(arg0) {
        return callback(arg0);
      };
      obj1 = { onFinish: closure_30 };
      fn.__closure = obj1;
      fn.__workletHash = 13082713046354;
      fn.__initData = translation;
      translation.value = obj.withDecay(obj, fn);
      return;
    }
  }
  const obj2 = { touching: sharedValue2, onScrollEnd, runOnJS: vertical(snapEnabled[3]).runOnJS };
  O.__closure = { touching: sharedValue2, translation, withDecay: vertical(snapEnabled[3]).withDecay, scrollEndVelocity: sharedValue5, onFinish: callback3 };
  O.__workletHash = 12267307896109;
  O.__initData = updateContainerSize;
  const items5 = [callback3, sharedValue5, sharedValue2, translation];
  const callback4 = loop.useCallback(O, items5);
  class F {
    constructor() {
      if (!closure_20.value) {
        iter = translation;
        num = 0;
        if (translation.value > 0) {
          tmp = closure_22;
          if (closure_22.value < 0) {
            tmp10 = closure_31;
            tmp11 = closure_31();
            return;
          } else {
            tmp12 = loop;
            if (!loop) {
              tmp2 = closure_28;
              iter.value = closure_28(0);
              return;
            }
          }
        }
        num2 = 1;
        if (iter.value < -dataLength - 1 * size) {
          tmp5 = closure_22;
          if (closure_22.value > 0) {
            tmp8 = closure_31;
            tmp9 = closure_31();
            return;
          } else {
            tmp6 = loop;
            if (!loop) {
              tmp7 = closure_28;
              iter.value = closure_28(-tmp3 - 1 * tmp4);
            }
          }
        }
      }
      return;
    }
  }
  F.__closure = { touching: sharedValue2, translation, scrollEndTranslation: sharedValue4, activeDecay: callback4, loop, withSpring: callback1, maxPage: dataLength, size };
  F.__workletHash = 11689345102683;
  F.__initData = onScrollStart;
  const items6 = [sharedValue2, translation, dataLength, size, sharedValue4, loop, callback4, callback1];
  const callback5 = loop.useCallback(F, items6);
  let obj3 = { touching: sharedValue2, translation, withDecay: vertical(snapEnabled[3]).withDecay, scrollEndVelocity: sharedValue5, onFinish: callback3 };
  const fn3 = function k() {
    return translation.value;
  };
  fn3.__closure = { translation };
  fn3.__workletHash = 10264158907215;
  fn3.__initData = onScrollEnd;
  class A {
    constructor() {
      if (!pagingEnabled) {
        tmp = closure_32;
        tmp2 = closure_32();
      }
      return;
    }
  }
  A.__closure = { pagingEnabled, resetBoundary: callback5 };
  A.__workletHash = 1428786849795;
  A.__initData = dataLength;
  const items7 = [pagingEnabled, callback5];
  const animatedReaction = vertical(snapEnabled[3]).useAnimatedReaction(fn3, A, items7);
  function withProcessTranslation(arg0) {
    if (!loop) {
      if (!overscrollEnabled) {
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        const _Math4 = Math;
        const tmp3 = callback();
        return Math.sign(arg0) * Math.max(0, Math.min(tmp3, Math.abs(arg0)));
      }
    }
    return arg0;
  }
  withProcessTranslation.__closure = { loop, overscrollEnabled, getLimit: callback };
  withProcessTranslation.__workletHash = 4415703918410;
  withProcessTranslation.__initData = derivedValue;
  class En {
    constructor(arg0) {
      closure_20.value = true;
      closure_21.value = true;
      if (onScrollStart) {
        tmp2 = vertical;
        tmp3 = snapEnabled;
        obj = vertical(snapEnabled[3]);
        tmp4 = obj.runOnJS(tmp)();
      }
      closure_18.value = (dataLength - 1) * size;
      tmp6 = loop;
      tmp5 = closure_18;
      if (!loop) {
        tmp6 = overscrollEnabled;
      }
      if (!tmp6) {
        tmp7 = closure_27;
        tmp5.value = closure_27();
      }
      closure_19.value = translation.value;
      return;
    }
  }
  const tmpResult7 = vertical(snapEnabled[3]);
  En.__closure = { touching: sharedValue2, validStart: sharedValue3, onScrollStart, runOnJS: vertical(snapEnabled[3]).runOnJS, max: sharedValue, maxPage: dataLength, size, loop, overscrollEnabled, getLimit: callback, panOffset: sharedValue1, translation };
  En.__workletHash = 11962065871670;
  En.__initData = sharedValue;
  const items8 = [sharedValue, size, dataLength, loop, sharedValue2, sharedValue1, sharedValue3, translation, overscrollEnabled, callback, onScrollStart];
  function bn(translationY) {
    if (undefined !== sharedValue1.value) {
      if (sharedValue3.value) {
        tmp16.value = false;
        vertical(snapEnabled[3]).cancelAnimation(translation);
        const obj = vertical(snapEnabled[3]);
      }
      sharedValue2.value = true;
      let translationX = translationY.translationY;
      if (derivedValue.value) {
        translationX = translationY.translationX;
      }
      if ("negative" === fixedDirection) {
        const _Math2 = Math;
        let tmp9 = -Math.abs(translationX);
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
        translation.value = num2 + 0.5 * (tmp9 - (num2 - iter.value));
      }
      translation.value = iter.value + tmp9;
    }
  }
  const obj5 = { panOffset: sharedValue1, validStart: sharedValue3, cancelAnimation: null, translation: null, touching: null, isHorizontal: null, fixedDirection: null, loop: null, max: null };
  const obj4 = { touching: sharedValue2, validStart: sharedValue3, onScrollStart, runOnJS: vertical(snapEnabled[3]).runOnJS, max: sharedValue, maxPage: dataLength, size, loop, overscrollEnabled, getLimit: callback, panOffset: sharedValue1, translation };
  obj5[2] = vertical(snapEnabled[3]).cancelAnimation;
  obj5[3] = translation;
  obj5[4] = sharedValue2;
  obj5[5] = derivedValue;
  obj5[6] = fixedDirection;
  obj5[7] = loop;
  obj5[8] = sharedValue;
  bn.__closure = obj5;
  bn.__workletHash = 851179073329;
  bn.__initData = sharedValue1;
  const items9 = [derivedValue, sharedValue, sharedValue1, loop, overscrollEnabled, fixedDirection, translation, sharedValue3, sharedValue2];
  function yn(velocityX) {
    if (undefined !== sharedValue1.value) {
      ({ velocityY, translationY, translationX } = velocityX);
      if (derivedValue.value) {
        velocityY = velocityX.velocityX;
      }
      sharedValue5.value = velocityY;
      if (iter2.value) {
        translationY = translationX;
      }
      if ("negative" === fixedDirection) {
        const _Math2 = Math;
        let tmp3 = -Math.abs(translationY);
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
          const result = Math.round((iter.value + tmp10 * Math.sign(sum)) / size) * size;
          if (typeof withProcessTranslation !== "function") {
            HermesBuiltin.throwTypeError();
          }
          let result1 = result;
          if (!loop) {
            result1 = result;
            if (!overscrollEnabled) {
              const _Math13 = Math;
              const _Math14 = Math;
              const _Math15 = Math;
              const _Math16 = Math;
              const tmp38 = callback();
              result1 = Math.sign(result) * Math.max(0, Math.min(tmp38, Math.abs(result)));
              const signResult = Math.sign(result);
            }
          }
          translation.value = callback1(result1, onScrollEnd);
          const tmp31 = translation;
          const tmp32 = callback1;
        }
        if (!loop) {
          sharedValue2.value = false;
        }
        iter.value = undefined;
      }
      if (closure_26) {
        const _Math4 = Math;
        if (Math.abs(sum) < minScrollDistancePerSwipe) {
          const _Math5 = Math;
          const _Math6 = Math;
          const result2 = Math.round((iter.value + tmp13 * Math.sign(sum)) / size) * size;
          if (typeof withProcessTranslation !== "function") {
            HermesBuiltin.throwTypeError();
          }
          let result3 = result2;
          if (!loop) {
            result3 = result2;
            if (!overscrollEnabled) {
              const _Math7 = Math;
              const _Math8 = Math;
              const _Math9 = Math;
              const _Math10 = Math;
              const tmp26 = callback();
              result3 = Math.sign(result2) * Math.max(0, Math.min(tmp26, Math.abs(result2)));
              const signResult1 = Math.sign(result2);
            }
          }
          translation.value = callback1(result3, onScrollEnd);
          const tmp19 = translation;
          const tmp20 = callback1;
        }
      }
      callback2(tmp3, velocityY, onScrollEnd);
      iter2 = derivedValue;
    }
  }
  yn.__closure = { panOffset: sharedValue1, isHorizontal: derivedValue, scrollEndVelocity: sharedValue5, fixedDirection, scrollEndTranslation: sharedValue4, maxScrollDistancePerSwipeIsSet: typeof maxScrollDistancePerSwipe === "number", maxScrollDistancePerSwipe, size, translation, withSpring: callback1, withProcessTranslation, onScrollEnd, minScrollDistancePerSwipeIsSet: typeof minScrollDistancePerSwipe === "number", minScrollDistancePerSwipe, endWithSpring: callback2, loop, touching: sharedValue2 };
  yn.__workletHash = 14460845775334;
  yn.__initData = sharedValue2;
  const items10 = [size, loop, sharedValue2, sharedValue1, translation, derivedValue, sharedValue5, sharedValue4, fixedDirection, typeof maxScrollDistancePerSwipe === "number", maxScrollDistancePerSwipe, typeof maxScrollDistancePerSwipe === "number", minScrollDistancePerSwipe, callback2, callback1, onScrollEnd];
  const tmp21 = scrollAnimationDuration(En, items8);
  let tmp22 = scrollAnimationDuration(bn, items9);
  const tmp23 = scrollAnimationDuration(yn, items10);
  class Pn {
    constructor(arg0) {
      obj = { width: testID.nativeEvent.layout.width, height: testID.nativeEvent.layout.height };
      tmp = updateContainerSize(obj);
      return;
    }
  }
  Pn.__closure = { updateContainerSize };
  Pn.__workletHash = 15591637556712;
  Pn.__initData = sharedValue3;
  const items11 = [updateContainerSize];
  const panGestureProxy = vertical(snapEnabled[6]).usePanGestureProxy({ onConfigurePanGesture, onGestureStart: tmp21, onGestureUpdate: tmp22, onGestureEnd: tmp23, options: { enabled } });
  const callback6 = loop.useCallback(Pn, items11);
  const tmpResult8 = vertical(snapEnabled[6]);
  return withAnimation(vertical(snapEnabled[7]).GestureDetector, { gesture: panGestureProxy, children: withAnimation(pagingEnabled(snapEnabled[3]).View, obj7) });
};