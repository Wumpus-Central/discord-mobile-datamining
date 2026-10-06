// === Module 10515: CarouselLayout ===

// Module 10515 (CarouselLayout)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1643 from "module_1643" /* 1643 */;
import convertToSharedIndex from "convertToSharedIndex" /* 10507 */;
import react from "react" /* 19 */;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let closure_4 = { code: "function pnpm_CarouselLayoutTsx1(){const{size,dataLength,handlerOffset,loop}=this.__closure;const totalSize=size*dataLength;const x=handlerOffset.value%totalSize;if(!loop)return handlerOffset.value;return Number.isNaN(x)?0:x;}" };
let closure_5 = { code: "function pnpm_CarouselLayoutTsx2(){const{width,height}=this.__closure;return{width:width||\"100%\",height:height||\"100%\"};}" };
const forwardRefResult = react.forwardRef((arg0, ref) => {
  let ScrollViewGesture;
  let autoFillData;
  let autoPlay;
  let autoPlayInterval;
  let autoPlayReverse;
  let containerStyle;
  let customAnimation;
  let data;
  let defaultIndex;
  let fixedDirection;
  let items7;
  let items8;
  let loop;
  let mode;
  let obj11;
  let onProgressChange;
  let renderItem;
  let scrollAnimationDuration;
  let style;
  let testID;
  let vertical;
  let windowSize;
  let withAnimation;
  const tmp = loop;
  let tmp2 = autoFillData;
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
  const itemDimensions = globalState.layout.itemDimensions;
  ({ testID, data, mode, style, containerStyle, vertical, autoPlay, windowSize, autoPlayReverse, autoPlayInterval, scrollAnimationDuration, withAnimation, fixedDirection, renderItem, onProgressChange, customAnimation, defaultIndex } = props);
  let obj2 = loop(autoFillData[4]);
  const commonVariables = obj2.useCommonVariables(props);
  size = commonVariables.size;
  const handlerOffset = commonVariables.handlerOffset;
  const obj3 = { size };
  const useLayoutConfig = loop(autoFillData[5]).useLayoutConfig;
  loop(autoFillData[5]);
  const merged = Object.assign(props);
  const layoutConfig = useLayoutConfig(obj3);
  const fn = function c() {
    let value;
    const result = handlerOffset.value % (size * dataLength);
    if (loop) {
      const _Number = Number;
      let num = 0;
      if (!Number.isNaN(result)) {
        num = result;
      }
      value = num;
    } else {
      value = iter.value;
    }
    return value;
  };
  fn.__closure = { size, dataLength, handlerOffset, loop };
  fn.__workletHash = 8159108397061;
  fn.__initData = width;
  const items = [loop, size, dataLength, handlerOffset];
  const obj4 = loop(autoFillData[6]);
  const derivedValue = obj4.useDerivedValue(fn, items);
  const obj5 = loop(autoFillData[7]);
  const onProgressChange1 = obj5.useOnProgressChange({ autoFillData, loop, size, offsetX: derivedValue, rawDataLength, onProgressChange });
  const obj6 = loop(autoFillData[8]);
  const obj7 = {
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
      const obj = _mod1643;
      return obj.runOnJS(callback)();
    },
    onScrollStart() {
      let tmp2 = onScrollStart;
      if (tmp2) {
        const obj = _mod1643;
        tmp2 = obj.runOnJS(tmp)();
      }
      return tmp2;
    }
  };
  const carouselController = obj6.useCarouselController(obj7);
  const getSharedIndex = carouselController.getSharedIndex;
  const items1 = [loop, autoFillData, rawDataLength, getSharedIndex, onSnapToItem, onScrollEnd];
  const callback = dataLength.useCallback(() => {
    const rounded = Math.round(getSharedIndex());
    const obj = convertToSharedIndex;
    const obj2 = { index: rounded, dataLength: rawDataLength, loop, autoFillData };
    const result = obj.computedRealIndexWithAutoFillData(obj2);
    if (onSnapToItem) {
      onSnapToItem(result);
    }
    if (onScrollEnd) {
      onScrollEnd(result);
    }
  }, items1);
  const obj8 = loop(autoFillData[10]);
  const autoPlay1 = obj8.useAutoPlay({ autoPlay, autoPlayInterval, autoPlayReverse, carouselController });
  const start = autoPlay1.start;
  const pause = autoPlay1.pause;
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
  const obj9 = loop(autoFillData[6]);
  class Q {
    constructor() {
      size = { width: width || "100%", height: height || "100%" };
      return size;
    }
  }
  Q.__closure = { width, height };
  Q.__workletHash = 9263548792971;
  Q.__initData = height;
  const items6 = [width, height, size, itemDimensions];
  const animatedStyle = obj9.useAnimatedStyle(Q, items6);
  const obj10 = { style: items7, children: rawDataLength(ScrollViewGesture, obj11, mode) };
  items7 = [onScrollEnd.layoutContainer, containerStyle];
  obj11 = { size, translation: handlerOffset, style: items8, testID, onScrollStart: callback1, onScrollEnd: callback2, onTouchBegin: callback3, onTouchEnd: callback4, children: rawDataLength(tmp(tmp2[13]).ItemRenderer, { data, dataLength, rawDataLength, loop, size, windowSize, autoFillData, offsetX: derivedValue, handlerOffset, layoutConfig, renderItem, customAnimation }) };
  items8 = [onScrollEnd.contentContainer, animatedStyle, style, vertical ? onScrollEnd.itemsVertical : onScrollEnd.itemsHorizontal];
  const GestureHandlerRootView = loop(autoFillData[11]).GestureHandlerRootView;
  ScrollViewGesture = loop(autoFillData[12]).ScrollViewGesture;
  return rawDataLength(GestureHandlerRootView, obj10);
});
const styles = StyleSheet.create({ layoutContainer: { display: "flex" }, contentContainer: { overflow: "hidden" }, itemsHorizontal: { flexDirection: "row" }, itemsVertical: { flexDirection: "column" } });

export const CarouselLayout = forwardRefResult;