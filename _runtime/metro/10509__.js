// === Module 10509: ? ===

// Module 10509
import react2 from "react" /* 19 */;
import _mod1643 from "module_1643" /* 1643 */;
import convertToSharedIndex from "convertToSharedIndex" /* 10494 */;
import handlerOffsetDirection from "handlerOffsetDirection" /* 10497 */;
import log from "log" /* 10510 */;

const require = globalThis.__r;
let _require, value;

const useRef = react2.useRef;
let closure_4 = { code: "function pnpm_useCarouselControllerTsx1(){const{handlerOffset,round,size,dataInfo,convertToSharedIndex,loop,autoFillData}=this.__closure;const handlerOffsetValue=handlerOffset.value;const toInt=round(handlerOffsetValue/size)%dataInfo.length;const isPositive=handlerOffsetValue<=0;const i=isPositive?Math.abs(toInt):Math.abs(toInt>0?dataInfo.length-toInt:0);const newSharedIndexValue=convertToSharedIndex({loop:loop,rawDataLength:dataInfo.originalLength,autoFillData:autoFillData,index:i});return{i:i,newSharedIndexValue:newSharedIndexValue};}" };
let closure_5 = { code: "function pnpm_useCarouselControllerTsx2({i:i,newSharedIndexValue:newSharedIndexValue}){const{index,runOnJS,setSharedIndex}=this.__closure;index.value=i;runOnJS(setSharedIndex)(newSharedIndexValue);}" };
let closure_6 = { code: "function pnpm_useCarouselControllerTsx3(toValue,onFinished){const{runOnJS,onScrollEnd,duration,Easing,dealWithAnimation,withAnimation}=this.__closure;var _withAnimation;const callback=function(isFinished){\"worklet\";if(isFinished){runOnJS(onScrollEnd)();onFinished&&runOnJS(onFinished)();}};const defaultWithAnimation={type:\"timing\",config:{duration:duration,easing:Easing.easeOutQuart}};return dealWithAnimation((_withAnimation=withAnimation)!==null&&_withAnimation!==void 0?_withAnimation:defaultWithAnimation)(toValue,callback);}" };
let closure_7 = { code: "function pnpm_useCarouselControllerTsx4(isFinished){const{runOnJS,onScrollEnd,onFinished}=this.__closure;if(isFinished){runOnJS(onScrollEnd)();onFinished&&runOnJS(onFinished)();}}" };
let closure_8 = { code: "function pnpm_useCarouselControllerTsx5(opts={}){const{canSliding,loop,index,dataInfo,size,overscrollEnabled,containerSize,onScrollStart,currentFixedPage,handlerOffset,scrollWithTiming}=this.__closure;var _onScrollStart;const{count=1,animated=true,onFinished:onFinished}=opts;if(!canSliding())return;if(!loop&&index.value>=dataInfo.length-1)return;const visibleContentWidth=(dataInfo.length-index.value)*size;if(!overscrollEnabled&&!(visibleContentWidth>containerSize.value.width)){return;}(_onScrollStart=onScrollStart)===null||_onScrollStart===void 0||_onScrollStart();const nextPage=currentFixedPage()+count;index.value=nextPage;if(animated){handlerOffset.value=scrollWithTiming(-nextPage*size,onFinished);}else{handlerOffset.value=-nextPage*size;onFinished===null||onFinished===void 0||onFinished();}}" };

export const useCarouselController = function useCarouselController(size) {
  _require = size;
  function setSharedIndex(current) {
    ref.current = current;
  }
  size = size.size;
  const loop = size.loop;
  const dataLength = size.dataLength;
  const handlerOffset = size.handlerOffset;
  const withAnimation = size.withAnimation;
  const defaultIndex = size.defaultIndex;
  let num = 0;
  let ref = size.ref;
  if (undefined !== defaultIndex) {
    num = defaultIndex;
  }
  const duration = size.duration;
  const autoFillData = size.autoFillData;
  const fixedDirection = size.fixedDirection;
  let obj = require("module_10501");
  const globalState = obj.useGlobalState();
  const overscrollEnabled = globalState.props.overscrollEnabled;
  const containerSize = globalState.layout.containerSize;
  const items = [dataLength];
  const memo = loop.useMemo(() => ({ length: dataLength, disable: !dataLength, originalLength: dataLength }), items);
  let obj2 = require("module_1643");
  const sharedValue = obj2.useSharedValue(num);
  const tmp3 = dataLength(num);
  ref = tmp3;
  const items1 = [handlerOffset, memo, size, loop];
  const tmp4 = dataLength(num);
  const currentFixedPage = loop.useCallback(() => {
    if (loop) {
      const _Math4 = Math;
      return -Math.round(handlerOffset.value / size);
    } else {
      let absolute;
      const result = handlerOffset.value / size % memo.length;
      const _Math = Math;
      if (handlerOffset.value <= 0) {
        const _Math3 = Math;
        absolute = Math.abs(result);
      } else {
        let num2 = 0;
        const _Math2 = Math;
        if (result > 0) {
          num2 = arr.length - result;
        }
        absolute = abs(num2);
      }
      return round(absolute);
    }
  }, items1);
  const tmp6 = require("module_1643");
  let fn = function v() {
    let absolute;
    let obj3;
    let tmpResult;
    value = handlerOffset.value;
    const obj = log;
    const result = obj.round(value / size) % memo.length;
    if (value <= 0) {
      const _Math2 = Math;
      absolute = Math.abs(result);
    } else {
      let num = 0;
      const _Math = Math;
      if (result > 0) {
        num = memo.length - result;
      }
      absolute = abs(num);
    }
    const obj2 = { i: absolute, newSharedIndexValue: tmpResult.convertToSharedIndex(obj3) };
    obj3 = { loop, rawDataLength: memo.originalLength, autoFillData, index: absolute };
    tmpResult = convertToSharedIndex;
    return obj2;
  };
  let obj3 = { handlerOffset, round: require("log").round, size, dataInfo: memo, convertToSharedIndex: require("convertToSharedIndex").convertToSharedIndex, loop, autoFillData };
  const useAnimatedReaction = tmp6.useAnimatedReaction;
  fn.__closure = obj3;
  fn.__workletHash = 15925793381075;
  fn.__initData = handlerOffset;
  const fn2 = function c(arg0) {
    sharedValue.value = arg0.i;
    const newSharedIndexValue = arg0.newSharedIndexValue;
    const obj = _mod1643;
    obj.runOnJS(setSharedIndex)(newSharedIndexValue);
  };
  let obj4 = { index: sharedValue, runOnJS: require("module_1643").runOnJS, setSharedIndex };
  fn2.__closure = obj4;
  fn2.__workletHash = 4173925309211;
  fn2.__initData = withAnimation;
  const items2 = [tmp4, tmp3, size, memo, sharedValue, loop, autoFillData, handlerOffset];
  const animatedReaction = useAnimatedReaction(fn, fn2, items2);
  const items3 = [sharedValue, autoFillData, memo, loop];
  const callback1 = loop.useCallback(() => {
    const obj = convertToSharedIndex;
    const obj2 = { index: sharedValue.value, dataLength: memo.originalLength, loop, autoFillData };
    return obj.computedRealIndexWithAutoFillData(obj2);
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
    size = onFinished;
    const fn = function i(arg0) {
      const tmp = arg0;
      if (tmp) {
        const obj = _mod1643;
        obj.runOnJS(callback3)();
        if (onFinished) {
          const tmp2Result = _mod1643;
          tmp2Result.runOnJS(tmp6)();
        }
      }
    };
    let obj = { runOnJS: size(size[2]).runOnJS, onScrollEnd: callback3, onFinished };
    fn.__closure = obj;
    fn.__workletHash = 14195210871308;
    fn.__initData = autoFillData;
    const obj2 = { type: "timing", config: { duration, easing: size(size[5]).Easing.easeOutQuart } };
    ({ duration, easing: size(size[5]).Easing.easeOutQuart });
    let tmp = size(size[6]);
    let tmp2 = withAnimation;
    const dealWithAnimation = tmp.dealWithAnimation;
    if (withAnimation == null) {
      tmp2 = obj2;
    }
    return dealWithAnimation(tmp2)(arg0, fn);
  };
  fn3.__closure = { runOnJS: require("module_1643").runOnJS, onScrollEnd: callback3, duration, Easing: require("DATA_LENGTH").Easing, dealWithAnimation: require("dealWithAnimation").dealWithAnimation, withAnimation };
  fn3.__workletHash = 4740828363382;
  fn3.__initData = duration;
  const items7 = [duration, withAnimation, callback3];
  ({ runOnJS: require("module_1643").runOnJS, onScrollEnd: callback3, duration, Easing: require("DATA_LENGTH").Easing, dealWithAnimation: require("dealWithAnimation").dealWithAnimation, withAnimation });
  const callback5 = loop.useCallback(fn3, items7);
  class W {
    constructor() {
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
      const tmp = undefined === animated || animated;
      if (callback2()) {
        if (loop) {
          if (overscrollEnabled) {
            if (callback4 != null) {
              callback4();
            }
            const sum = callback() + num;
            tmp6.value = sum;
            if (tmp) {
              handlerOffset.value = callback5(-sum * size, onFinished);
            } else {
              handlerOffset.value = -sum * size;
              if (onFinished != null) {
                onFinished();
              }
            }
          }
        }
      }
    }
  }
  W.__closure = { canSliding: callback2, loop, index: sharedValue, dataInfo: memo, size, overscrollEnabled, containerSize, onScrollStart: callback4, currentFixedPage, handlerOffset, scrollWithTiming: callback5 };
  W.__workletHash = 4352275578667;
  W.__initData = fixedDirection;
  const items8 = [callback2, loop, sharedValue, memo, callback4, handlerOffset, size, callback5, currentFixedPage];
  const callback6 = loop.useCallback(W, items8);
  const items9 = [callback2, loop, sharedValue, callback4, handlerOffset, size, callback5, currentFixedPage];
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
    const tmp = undefined === animated || animated;
    if (callback2()) {
      if (loop) {
        if (callback4 != null) {
          callback4();
        }
        const diff = callback() - num;
        sharedValue.value = diff;
        if (tmp) {
          handlerOffset.value = callback5(-diff * size, onFinished);
        } else {
          handlerOffset.value = -diff * size;
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
    const tmp = undefined !== animated && animated;
    if (i !== sharedValue.value) {
      if (callback2()) {
        if (callback4 != null) {
          callback4();
        }
        const obj = handlerOffsetDirection;
        const result = obj.handlerOffsetDirection(handlerOffset, fixedDirection);
        const result1 = memo.length * size;
        let flag = false;
        const result2 = i * size * result;
        if (loop) {
          const _Math = Math;
          flag = Math.abs(handlerOffset.value % result1) / result1 >= 0.5;
        }
        const _Math2 = Math;
        const _Math3 = Math;
        let num2 = 0;
        const rounded = Math.floor(Math.abs(handlerOffset.value / result1));
        if (flag) {
          num2 = 1;
        }
        const sum = (rounded + num2) * result1 * result + result2;
        if (tmp) {
          sharedValue.value = i;
          handlerOffset.value = callback5(sum, onFinished);
        } else {
          handlerOffset.value = sum;
          sharedValue.value = i;
          if (onFinished != null) {
            onFinished();
          }
        }
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
        const obj2 = { i: index, animated: undefined !== animated && animated, onFinished };
        callback8(obj2);
      }
    }
    if (count) {
      const _Math = Math;
      const rounded = Math.round(count);
      if (rounded < 0) {
        const _Math2 = Math;
        const obj3 = { count: Math.abs(rounded), animated: undefined !== animated && animated, onFinished };
        callback7(obj3);
      } else {
        const obj4 = { count: rounded, animated: undefined !== animated && animated, onFinished };
        callback6(obj4);
      }
    }
  }, items11);
  const items12 = [callback1, callback6, callback7, callback9];
  const imperativeHandle = loop.useImperativeHandle(ref, () => ({ next: callback6, prev: callback7, getCurrentIndex: callback1, scrollTo: callback9 }), items12);
  return {
    next: callback6,
    prev: callback7,
    scrollTo: callback9,
    getCurrentIndex: callback1,
    getSharedIndex() {
      return ref.current;
    },
    index: sharedValue
  };
};