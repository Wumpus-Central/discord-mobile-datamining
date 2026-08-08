// _runtime/10066_useCarouselController.js
import noop from "noop";
import { useRef } from "noop";

const require = arg1;
let closure_4 = { code: "function pnpm_useCarouselControllerTsx1(){const{handlerOffset,round,size,dataInfo,convertToSharedIndex,loop,autoFillData}=this.__closure;const handlerOffsetValue=handlerOffset.value;const toInt=round(handlerOffsetValue/size)%dataInfo.length;const isPositive=handlerOffsetValue<=0;const i=isPositive?Math.abs(toInt):Math.abs(toInt>0?dataInfo.length-toInt:0);const newSharedIndexValue=convertToSharedIndex({loop:loop,rawDataLength:dataInfo.originalLength,autoFillData:autoFillData,index:i});return{i:i,newSharedIndexValue:newSharedIndexValue};}" };
let closure_5 = { code: "function pnpm_useCarouselControllerTsx2({i:i,newSharedIndexValue:newSharedIndexValue}){const{index,runOnJS,setSharedIndex}=this.__closure;index.value=i;runOnJS(setSharedIndex)(newSharedIndexValue);}" };
let closure_6 = { code: "function pnpm_useCarouselControllerTsx3(toValue,onFinished){const{runOnJS,onScrollEnd,duration,Easing,dealWithAnimation,withAnimation}=this.__closure;var _withAnimation;const callback=function(isFinished){\"worklet\";if(isFinished){runOnJS(onScrollEnd)();onFinished&&runOnJS(onFinished)();}};const defaultWithAnimation={type:\"timing\",config:{duration:duration,easing:Easing.easeOutQuart}};return dealWithAnimation((_withAnimation=withAnimation)!==null&&_withAnimation!==void 0?_withAnimation:defaultWithAnimation)(toValue,callback);}" };
let closure_7 = { code: "function pnpm_useCarouselControllerTsx4(isFinished){const{runOnJS,onScrollEnd,onFinished}=this.__closure;if(isFinished){runOnJS(onScrollEnd)();onFinished&&runOnJS(onFinished)();}}" };
let closure_8 = { code: "function pnpm_useCarouselControllerTsx5(opts={}){const{canSliding,loop,index,dataInfo,size,overscrollEnabled,containerSize,onScrollStart,currentFixedPage,handlerOffset,scrollWithTiming}=this.__closure;var _onScrollStart;const{count=1,animated=true,onFinished:onFinished}=opts;if(!canSliding())return;if(!loop&&index.value>=dataInfo.length-1)return;const visibleContentWidth=(dataInfo.length-index.value)*size;if(!overscrollEnabled&&!(visibleContentWidth>containerSize.value.width)){return;}(_onScrollStart=onScrollStart)===null||_onScrollStart===void 0||_onScrollStart();const nextPage=currentFixedPage()+count;index.value=nextPage;if(animated){handlerOffset.value=scrollWithTiming(-nextPage*size,onFinished);}else{handlerOffset.value=-nextPage*size;onFinished===null||onFinished===void 0||onFinished();}}" };

export const useCarouselController = function useCarouselController(size) {
  const _require = size;
  function setSharedIndex(current) {
    closure_13.current = current;
  }
  size = size.size;
  const loop = size.loop;
  const dataLength = size.dataLength;
  const handlerOffset = size.handlerOffset;
  const withAnimation = size.withAnimation;
  const defaultIndex = size.defaultIndex;
  let num = 0;
  if (undefined !== defaultIndex) {
    num = defaultIndex;
  }
  const duration = size.duration;
  const autoFillData = size.autoFillData;
  const fixedDirection = size.fixedDirection;
  let obj = _require(size[1]);
  const globalState = obj.useGlobalState();
  const overscrollEnabled = globalState.props.overscrollEnabled;
  const containerSize = globalState.layout.containerSize;
  const items = [dataLength];
  const memo = loop.useMemo(() => ({ length: dataLength, disable: !dataLength, originalLength: dataLength }), items);
  let obj1 = _require(size[2]);
  const sharedValue = obj1.useSharedValue(num);
  const tmp3 = dataLength(num);
  let closure_13 = tmp3;
  const items1 = [handlerOffset, memo, size, loop];
  const callback = loop.useCallback(() => {
    if (loop) {
      const _Math2 = Math;
      return -Math.round(handlerOffset.value / size);
    } else {
      const result = handlerOffset.value / size % memo.length;
      if (handlerOffset.value <= 0) {
        const _Math = Math;
        let absolute = Math.abs(result);
      } else {
        let num2 = 0;
        if (result > 0) {
          num2 = arr.length - result;
        }
        absolute = Math.abs(num2);
      }
      return Math.round(absolute);
    }
  }, items1);
  let obj2 = _require(size[2]);
  let fn = function v() {
    const value = handlerOffset.value;
    let obj = size(size[3]);
    const result = obj.round(value / size) % memo.length;
    if (value <= 0) {
      const _Math = Math;
      let absolute = Math.abs(result);
    } else {
      let num = 0;
      if (result > 0) {
        num = arr.length - result;
      }
      absolute = Math.abs(num);
    }
    obj = { i: absolute, newSharedIndexValue: null };
    obj = { loop, rawDataLength: arr.originalLength, autoFillData, index: absolute };
    obj[1] = size(size[4]).convertToSharedIndex(obj);
    return obj;
  };
  obj = { handlerOffset, round: _require(size[3]).round, size, dataInfo: memo, convertToSharedIndex: _require(size[4]).convertToSharedIndex, loop, autoFillData };
  fn.__closure = obj;
  fn.__workletHash = 15925793381075;
  fn.__initData = handlerOffset;
  const fn2 = function c(arg0) {
    sharedValue.value = arg0.i;
    size(size[2]).runOnJS(setSharedIndex)(arg0.newSharedIndexValue);
  };
  obj = { index: sharedValue, runOnJS: _require(size[2]).runOnJS, setSharedIndex };
  fn2.__closure = obj;
  fn2.__workletHash = 4173925309211;
  fn2.__initData = withAnimation;
  const items2 = [dataLength(num), tmp3, size, memo, sharedValue, loop, autoFillData, handlerOffset];
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2, items2);
  const items3 = [sharedValue, autoFillData, memo, loop];
  const callback1 = loop.useCallback(() => {
    let obj = size(size[4]);
    obj = { index: sharedValue.value, dataLength: memo.originalLength, loop, autoFillData };
    return obj.computedRealIndexWithAutoFillData(obj);
  }, items3);
  const items4 = [memo];
  const callback2 = loop.useCallback(() => !memo.disable, items4);
  const items5 = [size];
  const callback3 = loop.useCallback(() => {
    const onScrollEnd = size.onScrollEnd;
    if (onScrollEnd != null) {
      onScrollEnd();
    }
  }, items5);
  const items6 = [size];
  const callback4 = loop.useCallback(() => {
    const onScrollStart = size.onScrollStart;
    if (onScrollStart != null) {
      onScrollStart();
    }
  }, items6);
  const fn3 = function z(arg0, onFinished) {
    const size = onFinished;
    const fn = function i(arg0) {
      if (arg0) {
        onFinished(size[2]).runOnJS(outer1_18)();
        if (onFinished) {
          tmp(tmp2[2]).runOnJS(tmp5)();
          const tmpResult = tmp(tmp2[2]);
        }
        const obj = onFinished(size[2]);
        tmp = onFinished;
        tmp2 = size;
      }
    };
    let obj = { runOnJS: size(size[2]).runOnJS, onScrollEnd: callback3, onFinished };
    fn.__closure = obj;
    fn.__workletHash = 14195210871308;
    fn.__initData = autoFillData;
    obj = { type: "timing", config: null };
    obj = { duration, easing: size(size[5]).Easing.easeOutQuart };
    obj[1] = obj;
    let tmp = withAnimation;
    if (withAnimation == null) {
      tmp = obj;
    }
    return size(size[6]).dealWithAnimation(tmp)(arg0, fn);
  };
  obj1 = { runOnJS: _require(size[2]).runOnJS, onScrollEnd: callback3, duration, Easing: _require(size[5]).Easing, dealWithAnimation: _require(size[6]).dealWithAnimation, withAnimation };
  fn3.__closure = obj1;
  fn3.__workletHash = 4740828363382;
  fn3.__initData = duration;
  const items7 = [duration, withAnimation, callback3];
  const callback5 = loop.useCallback(fn3, items7);
  class W {
    constructor() {
      obj = size;
      if (size === undefined) {
        obj = {};
      }
      count = obj.count;
      num = 1;
      if (undefined !== count) {
        num = count;
      }
      animated = obj.animated;
      tmp = undefined === animated || animated;
      onFinished = obj.onFinished;
      if (useAnimatedReaction()) {
        tmp2 = loop;
        if (loop) {
          tmp5 = closure_11;
          tmp7 = size;
          tmp9 = overscrollEnabled;
          if (overscrollEnabled) {
            tmp11 = null;
            if (useCallback != null) {
              tmp12 = useCallback();
            }
            tmp13 = f84362;
            sum = f84362() + num;
            tmp6.value = sum;
            tmp15 = handlerOffset;
            tmp16 = -sum;
            if (tmp) {
              tmp18 = f84368;
              tmp15.value = f84368(tmp16 * tmp7, onFinished);
            } else {
              tmp15.value = tmp16 * tmp7;
              if (onFinished != null) {
                onFinishedResult = onFinished();
              }
            }
          } else {
            tmp10 = containerSize;
          }
        } else {
          tmp3 = useSharedValue;
          tmp4 = closure_11;
        }
      }
      return;
    }
  }
  W.__closure = { canSliding: callback2, loop, index: sharedValue, dataInfo: memo, size, overscrollEnabled, containerSize, onScrollStart: callback4, currentFixedPage: callback, handlerOffset, scrollWithTiming: callback5 };
  W.__workletHash = 4352275578667;
  W.__initData = fixedDirection;
  const items8 = [callback2, loop, sharedValue, memo, callback4, handlerOffset, size, callback5, callback];
  const callback6 = loop.useCallback(W, items8);
  const items9 = [callback2, loop, sharedValue, callback4, handlerOffset, size, callback5, callback];
  const callback7 = loop.useCallback(() => {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    const count = obj.count;
    let num = 1;
    if (undefined !== count) {
      num = count;
    }
    const animated = obj.animated;
    const onFinished = obj.onFinished;
    if (callback2()) {
      if (loop) {
        if (callback4 != null) {
          callback4();
        }
        const diff = callback() - num;
        sharedValue.value = diff;
        if (tmp) {
          tmp9.value = callback5(tmp10 * size, onFinished);
        } else {
          tmp9.value = tmp10 * size;
          if (onFinished != null) {
            onFinished();
          }
        }
      }
    }
  }, items9);
  const items10 = [size, loop, sharedValue, fixedDirection, handlerOffset, memo.length, callback2, callback4, callback5];
  const callback8 = loop.useCallback((onFinished) => {
    let animated;
    let i;
    ({ i, animated } = onFinished);
    onFinished = onFinished.onFinished;
    if (i !== sharedValue.value) {
      if (callback2()) {
        if (callback4 != null) {
          callback4();
        }
        const result = size(size[7]).handlerOffsetDirection(handlerOffset, fixedDirection);
        const result1 = memo.length * size;
        let flag = false;
        const result2 = i * size * result;
        if (loop) {
          const _Math = Math;
          flag = Math.abs(iter.value % result1) / result1 >= 0.5;
        }
        const _Math2 = Math;
        const _Math3 = Math;
        let num2 = 0;
        const rounded = Math.floor(Math.abs(iter.value / result1));
        if (flag) {
          num2 = 1;
        }
        const sum = (rounded + num2) * result1 * result + result2;
        if (tmp) {
          tmp2.value = i;
          iter.value = callback5(sum, onFinished);
        } else {
          iter.value = sum;
          tmp2.value = i;
          if (onFinished != null) {
            onFinished();
          }
        }
        const obj = size(size[7]);
      }
    }
  }, items10);
  const items11 = [callback7, callback6, callback8];
  const callback9 = loop.useCallback(() => {
    let animated;
    let count;
    let index;
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    ({ index, count, animated } = obj);
    const onFinished = obj.onFinished;
    if (typeof index === "number") {
      if (index > -1) {
        obj = { i: null, animated: null, onFinished: null };
        obj[0] = index;
        obj[1] = tmp;
        obj[2] = onFinished;
        callback8(obj);
      }
    }
    if (count) {
      const _Math = Math;
      const rounded = Math.round(count);
      if (rounded < 0) {
        obj = { count: null, animated: null, onFinished: null };
        const _Math2 = Math;
        obj[0] = Math.abs(rounded);
        obj[1] = tmp;
        obj[2] = onFinished;
        callback7(obj);
      } else {
        const obj1 = { count: null, animated: null, onFinished: null };
        obj1[0] = rounded;
        obj1[1] = tmp;
        obj1[2] = onFinished;
        callback6(obj1);
      }
    }
  }, items11);
  const items12 = [callback1, callback6, callback7, callback9];
  const imperativeHandle = loop.useImperativeHandle(size.ref, () => ({ next: callback6, prev: callback7, getCurrentIndex: callback1, scrollTo: callback9 }), items12);
  obj2 = {
    next: callback6,
    prev: callback7,
    scrollTo: callback9,
    getCurrentIndex: callback1,
    getSharedIndex() {
      return tmp3.current;
    },
    index: sharedValue
  };
  return obj2;
};