// _runtime/09739_CarouselLayout.js
import importDefaultResult from "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_4 = { code: "function pnpm_CarouselLayoutTsx1(){const{size,dataLength,handlerOffset,loop}=this.__closure;const totalSize=size*dataLength;const x=handlerOffset.value%totalSize;if(!loop)return handlerOffset.value;return Number.isNaN(x)?0:x;}" };
let closure_5 = { code: "function pnpm_CarouselLayoutTsx2(){const{width,height}=this.__closure;return{width:width||\"100%\",height:height||\"100%\"};}" };
const styles = StyleSheet.create({ layoutContainer: { display: "flex" }, contentContainer: { overflow: "hidden" }, itemsHorizontal: { flexDirection: "row" }, itemsVertical: { flexDirection: "column" } });

export const CarouselLayout = importDefaultResult.forwardRef((arg0, ref) => {
  let autoPlay;
  let autoPlayInterval;
  let autoPlayReverse;
  let containerStyle;
  let customAnimation;
  let data;
  let defaultIndex;
  let fixedDirection;
  let mode;
  let onProgressChange;
  let renderItem;
  let scrollAnimationDuration;
  let style;
  let testID;
  let vertical;
  let windowSize;
  let withAnimation;
  let obj = loop(autoFillData[3]);
  const globalState = obj.useGlobalState();
  const props = globalState.props;
  loop = props.loop;
  autoFillData = props.autoFillData;
  const dataLength = props.dataLength;
  const rawDataLength = props.rawDataLength;
  const width = props.width;
  const height = props.height;
  const onScrollEnd = props.onScrollEnd;
  const onSnapToItem = props.onSnapToItem;
  const onScrollStart = props.onScrollStart;
  ({ testID, data, mode, style, containerStyle, vertical, autoPlay, windowSize, autoPlayReverse, autoPlayInterval, scrollAnimationDuration, withAnimation, fixedDirection, renderItem, onProgressChange, customAnimation, defaultIndex } = props);
  let obj1 = loop(autoFillData[4]);
  const commonVariables = obj1.useCommonVariables(props);
  const size = commonVariables.size;
  const handlerOffset = commonVariables.handlerOffset;
  let obj2 = loop(autoFillData[5]);
  obj = {};
  const merged = Object.assign(props);
  obj.size = size;
  const layoutConfig = obj2.useLayoutConfig(obj);
  const fn = function c() {
    const result = handlerOffset.value % (size * dataLength);
    if (loop) {
      const _Number = Number;
      let num = 0;
      if (!Number.isNaN(result)) {
        num = result;
      }
      let value = num;
    } else {
      value = iter.value;
    }
    return value;
  };
  fn.__closure = { size, dataLength, handlerOffset, loop };
  fn.__workletHash = 8159108397061;
  fn.__initData = width;
  const items = [loop, size, dataLength, handlerOffset];
  const derivedValue = loop(autoFillData[6]).useDerivedValue(fn, items);
  const obj5 = loop(autoFillData[6]);
  const tmp = loop;
  let tmp2 = autoFillData;
  onProgressChange = loop(autoFillData[7]).useOnProgressChange({ autoFillData, loop, size, offsetX: derivedValue, rawDataLength, onProgressChange });
  const obj6 = loop(autoFillData[7]);
  obj = {
    ref,
    loop,
    size,
    dataLength,
    autoFillData,
    handlerOffset,
    withAnimation,
    defaultIndex,
    fixedDirection,
    duration: scrollAnimationDuration,
    onScrollEnd() {
      return loop(autoFillData[6]).runOnJS(callback)();
    },
    onScrollStart() {
      let tmp2 = onScrollStart;
      if (tmp2) {
        tmp2 = loop(autoFillData[6]).runOnJS(tmp)();
        const obj = loop(autoFillData[6]);
      }
      return tmp2;
    }
  };
  const carouselController = loop(autoFillData[8]).useCarouselController(obj);
  const getSharedIndex = carouselController.getSharedIndex;
  const items1 = [loop, autoFillData, rawDataLength, getSharedIndex, onSnapToItem, onScrollEnd];
  const callback = dataLength.useCallback(() => {
    const rounded = Math.round(getSharedIndex());
    let obj = loop(autoFillData[9]);
    obj = { index: rounded, dataLength: rawDataLength, loop, autoFillData };
    const result = obj.computedRealIndexWithAutoFillData(obj);
    if (onSnapToItem) {
      onSnapToItem(result);
    }
    if (onScrollEnd) {
      onScrollEnd(result);
    }
  }, items1);
  const obj7 = loop(autoFillData[8]);
  autoPlay = loop(autoFillData[10]).useAutoPlay({ autoPlay, autoPlayInterval, autoPlayReverse, carouselController });
  const start = autoPlay.start;
  const pause = autoPlay.pause;
  const items2 = [onScrollStart, pause];
  const items3 = [callback, start];
  const callback1 = dataLength.useCallback(() => {
    pause();
    if (onScrollStart != null) {
      onScrollStart();
    }
  }, items2);
  const items4 = [pause];
  const callback2 = dataLength.useCallback(() => {
    start();
    callback();
  }, items3);
  const items5 = [start];
  const callback3 = dataLength.useCallback(pause, items4);
  const callback4 = dataLength.useCallback(start, items5);
  const obj9 = loop(autoFillData[10]);
  class Q {
    constructor() {
      str = width;
      if (!width) {
        str = "100%";
      }
      obj = { width: str, height: null };
      str2 = height;
      if (!height) {
        str2 = "100%";
      }
      obj[1] = str2;
      return obj;
    }
  }
  Q.__closure = { width, height };
  Q.__workletHash = 9263548792971;
  Q.__initData = height;
  const items6 = [width, height, size, globalState.layout.itemDimensions];
  const animatedStyle = loop(autoFillData[6]).useAnimatedStyle(Q, items6);
  obj1 = { style: items7, children: null };
  items7 = [onScrollEnd.layoutContainer, containerStyle];
  obj2 = { size, translation: handlerOffset, style: items8, testID, onScrollStart: callback1, onScrollEnd: callback2, onTouchBegin: callback3, onTouchEnd: callback4, children: null };
  items8 = [onScrollEnd.contentContainer, animatedStyle, style, vertical ? onScrollEnd.itemsVertical : onScrollEnd.itemsHorizontal];
  obj2[8] = rawDataLength(tmp(tmp2[13]).ItemRenderer, { data, dataLength, rawDataLength, loop, size, windowSize, autoFillData, offsetX: derivedValue, handlerOffset, layoutConfig, renderItem, customAnimation });
  obj1[1] = rawDataLength(loop(autoFillData[12]).ScrollViewGesture, obj2, mode);
  return rawDataLength(loop(autoFillData[11]).GestureHandlerRootView, obj1);
});