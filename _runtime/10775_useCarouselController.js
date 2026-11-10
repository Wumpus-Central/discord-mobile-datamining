// _runtime/10775_useCarouselController.js
import SINGLE_ITEM from "10760_SINGLE_ITEM.js";
import handlerOffsetDirection from "10763_handlerOffsetDirection.js";
import noop from "metro/00019__.js";

const require = globalThis.__r;

require = fn;
let useRef = fn(19).useRef;
let closure_4 = {
  code: "(function pnpm_useCarouselControllerTsx1(){let[handlerOffset,round,size,dataInfo,convertToSharedIndex,loop,autoFillData]=this.__closure;const handlerOffsetValue=handlerOffset.value;const toInt=round(handlerOffsetValue/size)%dataInfo.length;const isPositive=handlerOffsetValue<=0;const i=isPositive?Math.abs(toInt):Math.abs(toInt>0?dataInfo.length-toInt:0);const newSharedIndexValue=convertToSharedIndex({loop:loop,rawDataLength:dataInfo.originalLength,autoFillData:autoFillData,index:i});return{i:i,newSharedIndexValue:newSharedIndexValue};})",
};
let closure_5 = {
  code: "(function pnpm_useCarouselControllerTsx2({i:i,newSharedIndexValue:newSharedIndexValue}){let[index,runOnJS,setSharedIndex]=this.__closure;index.value=i;runOnJS(setSharedIndex)(newSharedIndexValue);})",
};
let closure_6 = {
  code: "(function pnpm_useCarouselControllerTsx3(isFinished){let[runOnJS,onScrollEnd,onFinished]=this.__closure;if(isFinished){runOnJS(onScrollEnd)();onFinished&&runOnJS(onFinished)();}})",
};
let closure_7 = {
  code: '(function pnpm_useCarouselControllerTsx4(toValue,onFinished){let[_worklet_11535498116530_init_data,runOnJS,onScrollEnd,duration,Easing,dealWithAnimation,withAnimation]=this.__closure;var _withAnimation;const callback=function pnpm_useCarouselControllerTsx3Factory([_worklet_11535498116530_init_data,runOnJS,onScrollEnd,onFinished]){const pnpm_useCarouselControllerTsx3=function(isFinished){if(isFinished){runOnJS(onScrollEnd)();onFinished&&runOnJS(onFinished)();}};pnpm_useCarouselControllerTsx3.__closure=[runOnJS,onScrollEnd,onFinished];pnpm_useCarouselControllerTsx3.__workletHash=11535498116530;pnpm_useCarouselControllerTsx3.__initData=_worklet_11535498116530_init_data;return pnpm_useCarouselControllerTsx3;}([_worklet_11535498116530_init_data,runOnJS,onScrollEnd,onFinished]);const defaultWithAnimation={type:"timing",config:{duration:duration,easing:Easing.easeOutQuart}};return dealWithAnimation((_withAnimation=withAnimation)!==null&&_withAnimation!==void 0?_withAnimation:defaultWithAnimation)(toValue,callback);})',
};
let closure_8 = {
  code: "(function pnpm_useCarouselControllerTsx5(opts={}){let[canSliding,loop,index,dataInfo,size,overscrollEnabled,containerSize,onScrollStart,currentFixedPage,handlerOffset,scrollWithTiming]=this.__closure;var _onScrollStart;const{count=1,animated=true,onFinished:onFinished}=opts;if(!canSliding())return;if(!loop&&index.value>=dataInfo.length-1)return;const visibleContentWidth=(dataInfo.length-index.value)*size;if(!overscrollEnabled&&!(visibleContentWidth>containerSize.value.width)){return;}(_onScrollStart=onScrollStart)===null||_onScrollStart===void 0||_onScrollStart();const nextPage=currentFixedPage()+count;index.value=nextPage;if(animated){handlerOffset.value=scrollWithTiming(-nextPage*size,onFinished);}else{handlerOffset.value=-nextPage*size;onFinished===null||onFinished===void 0||onFinished();}})",
};

export function useCarouselController(size) {
  _require = size;
  size = size.size;
  dependencyMap = size;
  const loop = size.loop;
  noop = loop;
  const dataLength = size.dataLength;
  useRef = dataLength;
  const handlerOffset = size.handlerOffset;
  c4 = handlerOffset;
  ({ withAnimation, defaultIndex } = size);
  let num = 0;
  if (undefined !== defaultIndex) {
    num = defaultIndex;
  }
  ({ duration, autoFillData } = size);
  const fixedDirection = size.fixedDirection;
  const globalState = require("metro/10767__.js").useGlobalState();
  items = [dataLength];
  const memo = noop.useMemo(() => ({ length: _undefined3, disable: !_undefined3, originalLength: _undefined3 }), items);
  c7 = memo;
  let obj = require("metro/10767__.js");
  const sharedValue = require("metro/01652__.js").useSharedValue(num);
  c8 = sharedValue;
  const tmp5 = useRef(num);
  let items1 = [handlerOffset, memo, size, loop];
  let obj3 = require("metro/01652__.js");
  const callback = noop.useCallback(() => {
    if (c2) {
      const _Math2 = Math;
      return -Math.round(_undefined4.value / c1);
    } else {
      const result = (_undefined4.value / c1) % _undefined6.length;
      if (_undefined4.value <= 0) {
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
  let tmp6 = useRef(num);
  const items2 = [
    c4,
    handlerOffset,
    require("round").round,
    size,
    memo,
    require("SINGLE_ITEM").convertToSharedIndex,
    loop,
    autoFillData,
  ];
  _require = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items2;
  function pnpm_useCarouselControllerTsx1() {
    value = _undefined.value;
    const result = _undefined2(value / c2) % _undefined3.length;
    if (value <= 0) {
      const _Math = Math;
      let absolute = Math.abs(result);
    } else {
      let num = 0;
      if (result > 0) {
        num = _undefined3.length - result;
      }
      absolute = Math.abs(num);
    }
    const obj = {
      i: absolute,
      newSharedIndexValue: _undefined4({
        loop: _undefined5,
        rawDataLength: _undefined3.originalLength,
        autoFillData,
        index: absolute,
      }),
    };
    return obj;
  }
  const items3 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  pnpm_useCarouselControllerTsx1.__closure = items3;
  pnpm_useCarouselControllerTsx1.__workletHash = 10812455195594;
  pnpm_useCarouselControllerTsx1.__initData = tmp8;
  const items4 = [
    c5,
    sharedValue,
    require("metro/01652__.js").runOnJS,
    function setSharedIndex(current) {
      c9.current = current;
    },
  ];
  _require = undefined;
  [tmp16, tmp17, tmp18, tmp19] = items4;
  function pnpm_useCarouselControllerTsx2(arg0) {
    c0.value = arg0.i;
    _undefined2(c2)(arg0.newSharedIndexValue);
  }
  const items5 = [tmp17, tmp18, tmp19];
  pnpm_useCarouselControllerTsx2.__closure = items5;
  pnpm_useCarouselControllerTsx2.__workletHash = 10044128116354;
  pnpm_useCarouselControllerTsx2.__initData = tmp16;
  const items6 = [tmp6, tmp5, size, memo, sharedValue, loop, autoFillData, handlerOffset];
  const animatedReaction = require("metro/01652__.js").useAnimatedReaction(
    pnpm_useCarouselControllerTsx1,
    pnpm_useCarouselControllerTsx2,
    items6,
  );
  const items7 = [sharedValue, autoFillData, memo, loop];
  const callback1 = obj2.useCallback(
    () =>
      SINGLE_ITEM.computedRealIndexWithAutoFillData({
        index: _undefined7.value,
        dataLength: _undefined6.originalLength,
        loop,
        autoFillData: _undefined5,
      }),
    items7,
  );
  const items8 = [memo];
  const callback2 = obj2.useCallback(() => !_undefined6.disable, items8);
  const items9 = [size];
  const callback3 = obj2.useCallback(() => {
    const onScrollEnd = _undefined.onScrollEnd;
    if (onScrollEnd != null) {
      onScrollEnd();
    }
  }, items9);
  const items10 = [size];
  const callback4 = obj2.useCallback(() => {
    const onScrollStart = _undefined.onScrollStart;
    if (onScrollStart != null) {
      onScrollStart();
    }
  }, items10);
  const items11 = [
    c7,
    c6,
    require("metro/01652__.js").runOnJS,
    callback3,
    duration,
    require("DATA_LENGTH").Easing,
    require("dealWithAnimation").dealWithAnimation,
    withAnimation,
  ];
  [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = items11;
  function pnpm_useCarouselControllerTsx4(arg0, arg1) {
    items = [c0, c1, c2, arg1];
    [tmp, tmp2, tmp3, tmp4] = items;
    function pnpm_useCarouselControllerTsx3(arg0) {
      if (arg0) {
        _undefined(_undefined2)();
        if (loop) {
          _undefined(loop)();
        }
      }
    }
    const items1 = [tmp2, tmp3, tmp4];
    pnpm_useCarouselControllerTsx3.__closure = items1;
    pnpm_useCarouselControllerTsx3.__workletHash = 11535498116530;
    pnpm_useCarouselControllerTsx3.__initData = tmp;
    const obj = { type: "timing", config: { duration: _undefined3, easing: _undefined4.easeOutQuart } };
    let tmp6 = c6;
    if (c6 == null) {
      tmp6 = obj;
    }
    return _undefined5(tmp6)(arg0, pnpm_useCarouselControllerTsx3);
  }
  const items12 = [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32];
  pnpm_useCarouselControllerTsx4.__closure = items12;
  pnpm_useCarouselControllerTsx4.__workletHash = 10494355105437;
  pnpm_useCarouselControllerTsx4.__initData = tmp25;
  const items13 = [duration, withAnimation, callback3];
  const callback5 = obj2.useCallback(pnpm_useCarouselControllerTsx4, items13);
  const items14 = [
    c8,
    callback2,
    loop,
    sharedValue,
    memo,
    size,
    globalState.props.overscrollEnabled,
    globalState.layout.containerSize,
    callback4,
    callback,
    handlerOffset,
    callback5,
  ];
  _require = undefined;
  dependencyMap = undefined;
  noop = undefined;
  useRef = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  [tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45] = items14;
  function pnpm_useCarouselControllerTsx5() {
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
    if (_undefined()) {
      if (c1) {
        if (c5) {
          if (_undefined6 != null) {
            _undefined6();
          }
          const sum = _undefined7() + num;
          tmp6.value = sum;
          if (tmp) {
            c9.value = _undefined9(tmp16 * c4, onFinished);
          } else {
            c9.value = tmp16 * c4;
            if (onFinished != null) {
              onFinished();
            }
          }
        }
      }
    }
    tmp = undefined === animated || animated;
  }
  const items15 = [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45];
  pnpm_useCarouselControllerTsx5.__closure = items15;
  pnpm_useCarouselControllerTsx5.__workletHash = 16398528283474;
  pnpm_useCarouselControllerTsx5.__initData = tmp34;
  const items16 = [callback2, loop, sharedValue, memo, callback4, handlerOffset, size, callback5, callback];
  const callback6 = obj2.useCallback(pnpm_useCarouselControllerTsx5, items16);
  const items17 = [callback2, loop, sharedValue, callback4, handlerOffset, size, callback5, callback];
  const callback7 = obj2.useCallback(() => {
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
      if (c2) {
        if (callback4 != null) {
          callback4();
        }
        const diff = _undefined9() - num;
        _undefined7.value = diff;
        if (tmp) {
          c4.value = callback5(tmp10 * c1, onFinished);
        } else {
          c4.value = tmp10 * c1;
          if (onFinished != null) {
            onFinished();
          }
        }
      }
    }
    tmp = undefined === animated || animated;
  }, items17);
  const items18 = [
    size,
    loop,
    sharedValue,
    fixedDirection,
    handlerOffset,
    memo.length,
    callback2,
    callback4,
    callback5,
  ];
  const callback8 = obj2.useCallback((onFinished) => {
    ({ i, animated } = onFinished);
    onFinished = onFinished.onFinished;
    if (i !== _undefined7.value) {
      if (callback2()) {
        if (callback4 != null) {
          callback4();
        }
        const result = handlerOffsetDirection.handlerOffsetDirection(_undefined4, c6);
        const result1 = _undefined6.length * c1;
        let flag = false;
        const result2 = i * c1 * result;
        if (c2) {
          const _Math = Math;
          flag = Math.abs(_undefined4.value % result1) / result1 >= 0.5;
        }
        const _Math2 = Math;
        const _Math3 = Math;
        let num2 = 0;
        const rounded = Math.floor(Math.abs(_undefined4.value / result1));
        if (flag) {
          num2 = 1;
        }
        const sum = (rounded + num2) * result1 * result + result2;
        if (tmp) {
          _undefined7.value = i;
          _undefined4.value = callback5(sum, onFinished);
        } else {
          _undefined4.value = sum;
          _undefined7.value = i;
          if (onFinished != null) {
            onFinished();
          }
        }
      }
    }
    tmp = undefined !== animated && animated;
  }, items18);
  const items19 = [callback7, callback6, callback8];
  const callback9 = obj2.useCallback(() => {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    ({ index, count, animated } = obj);
    const onFinished = obj.onFinished;
    if (typeof index === "number") {
      if (index > -1) {
        const obj2 = { i: index, animated: tmp, onFinished };
        callback8(obj2);
      }
    }
    if (count) {
      const _Math = Math;
      const rounded = Math.round(count);
      if (rounded < 0) {
        const obj3 = { count: null, animated: null, onFinished: null };
        const _Math2 = Math;
        obj3.count = Math.abs(rounded);
        obj3.animated = tmp;
        obj3.onFinished = onFinished;
        callback7(obj3);
      } else {
        const obj4 = { count: rounded, animated: tmp, onFinished };
        callback6(obj4);
      }
    }
  }, items19);
  const items20 = [callback1, callback6, callback7, callback9];
  const imperativeHandle = obj2.useImperativeHandle(
    size.ref,
    () => ({ next: callback6, prev: callback7, getCurrentIndex: callback1, scrollTo: callback9 }),
    items20,
  );
  return {
    next: callback6,
    prev: callback7,
    scrollTo: callback9,
    getCurrentIndex: callback1,
    getSharedIndex() {
      return _undefined8.current;
    },
    index: sharedValue,
  };
}
