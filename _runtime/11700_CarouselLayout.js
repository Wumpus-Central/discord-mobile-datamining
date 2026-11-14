// _runtime/11700_CarouselLayout.js
import _mod1655 from "metro/01655__.js";
import SINGLE_ITEM from "11692_SINGLE_ITEM.js";
import noop from "metro/00019__.js";

const require = globalThis.__r;

require = fn;
const StyleSheet = fn(17).StyleSheet;
let jsx = fn(21).jsx;
let closure_4 = {
  code: "(function pnpm_CarouselLayoutTsx1(){let[size,dataLength,handlerOffset,loop]=this.__closure;const totalSize=size*dataLength;const x=handlerOffset.value%totalSize;if(!loop)return handlerOffset.value;return Number.isNaN(x)?0:x;})",
};
let closure_5 = {
  code: '(function pnpm_CarouselLayoutTsx2(){let[width,height]=this.__closure;return{width:width||"100%",height:height||"100%"};})',
};
const styles = StyleSheet.create({
  layoutContainer: { display: "flex" },
  contentContainer: { overflow: "hidden" },
  itemsHorizontal: { flexDirection: "row" },
  itemsVertical: { flexDirection: "column" },
});

export const CarouselLayout = noop.forwardRef((arg0, ref) => {
  const globalState = require("metro/11699__.js").useGlobalState();
  const props = globalState.props;
  const loop = props.loop;
  _require = loop;
  const autoFillData = props.autoFillData;
  ({ dataLength, rawDataLength } = props);
  ({ width, height, onScrollEnd } = props);
  const onSnapToItem = props.onSnapToItem;
  const onScrollStart = props.onScrollStart;
  ({
    testID,
    data,
    mode,
    style,
    containerStyle,
    vertical,
    autoPlay,
    windowSize,
    autoPlayReverse,
    autoPlayInterval,
    scrollAnimationDuration,
    withAnimation,
    fixedDirection,
    renderItem,
    onProgressChange,
    customAnimation,
    defaultIndex,
  } = props);
  let obj = require("metro/11699__.js");
  const commonVariables = require("useCommonVariables").useCommonVariables(props);
  ({ size, handlerOffset } = commonVariables);
  const obj2 = require("useCommonVariables");
  const obj4 = {};
  const merged = Object.assign(props);
  obj4.size = size;
  const layoutConfig = require("metro/11701__.js").useLayoutConfig(obj4);
  const obj3 = require("metro/11701__.js");
  items = [onSnapToItem, size, dataLength, handlerOffset, loop];
  _require = undefined;
  noop = undefined;
  jsx = undefined;
  [tmp7, tmp8, tmp9, tmp10, tmp11] = items;
  function pnpm_CarouselLayoutTsx1() {
    const result = dataLength.value % (c0 * c1);
    if (c3) {
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
  }
  const items1 = [tmp8, tmp9, tmp10, tmp11];
  pnpm_CarouselLayoutTsx1.__closure = items1;
  pnpm_CarouselLayoutTsx1.__workletHash = 12314304910940;
  pnpm_CarouselLayoutTsx1.__initData = tmp7;
  const items2 = [loop, size, dataLength, handlerOffset];
  const derivedValue = require("metro/01655__.js").useDerivedValue(pnpm_CarouselLayoutTsx1, items2);
  const obj5 = require("metro/01655__.js");
  const onProgressChange1 = require("useOnProgressChange").useOnProgressChange({
    autoFillData,
    loop,
    size,
    offsetX: derivedValue,
    rawDataLength,
    onProgressChange,
  });
  const tmpResult = require("useOnProgressChange");
  const carouselController = require("useCarouselController").useCarouselController({
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
      return _mod1655.runOnJS(callback)();
    },
    onScrollStart() {
      let tmp2 = onScrollStart;
      if (tmp2) {
        tmp2 = _mod1655.runOnJS(tmp)();
      }
      return tmp2;
    },
  });
  const getSharedIndex = carouselController.getSharedIndex;
  const items3 = [loop, autoFillData, rawDataLength, getSharedIndex, onSnapToItem, onScrollEnd];
  const callback = noop.useCallback(() => {
    const rounded = Math.round(getSharedIndex());
    const result = SINGLE_ITEM.computedRealIndexWithAutoFillData({ index: rounded, dataLength, loop, autoFillData });
    if (onSnapToItem) {
      onSnapToItem(result);
    }
    if (_undefined) {
      _undefined(result);
    }
  }, items3);
  const obj6 = {
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
      return _mod1655.runOnJS(callback)();
    },
    onScrollStart() {
      let tmp2 = onScrollStart;
      if (tmp2) {
        tmp2 = _mod1655.runOnJS(tmp)();
      }
      return tmp2;
    },
  };
  const tmpResult4 = require("useCarouselController");
  const autoPlay1 = require("metro/11710__.js").useAutoPlay({
    autoPlay,
    autoPlayInterval,
    autoPlayReverse,
    carouselController,
  });
  const start = autoPlay1.start;
  const pause = autoPlay1.pause;
  const items4 = [onScrollStart, pause];
  const items5 = [callback, start];
  const callback1 = noop.useCallback(() => {
    pause();
    if (onScrollStart != null) {
      onScrollStart();
    }
  }, items4);
  const items6 = [pause];
  const callback2 = noop.useCallback(() => {
    start();
    callback();
  }, items5);
  const items7 = [start];
  const callback3 = noop.useCallback(pause, items6);
  const callback4 = noop.useCallback(start, items7);
  const tmpResult5 = require("metro/11710__.js");
  const items8 = [onScrollStart, width, height];
  _require = undefined;
  dependencyMap = undefined;
  [tmp21, tmp22, tmp23] = items8;
  function pnpm_CarouselLayoutTsx2() {
    let str = c0;
    if (!c0) {
      str = "100%";
    }
    const size = { width: str, height: null };
    let str2 = c1;
    if (!c1) {
      str2 = "100%";
    }
    size.height = str2;
    return size;
  }
  const items9 = [tmp22, tmp23];
  pnpm_CarouselLayoutTsx2.__closure = items9;
  pnpm_CarouselLayoutTsx2.__workletHash = 2577603405426;
  pnpm_CarouselLayoutTsx2.__initData = tmp21;
  const items10 = [width, height, size, globalState.layout.itemDimensions];
  const animatedStyle = require("metro/01655__.js").useAnimatedStyle(pnpm_CarouselLayoutTsx2, items10);
  const obj7 = { style: null, children: null };
  const items11 = [getSharedIndex.layoutContainer, containerStyle];
  obj7.style = items11;
  const obj8 = {
    size,
    translation: handlerOffset,
    style: null,
    testID,
    onScrollStart: callback1,
    onScrollEnd: callback2,
    onTouchBegin: callback3,
    onTouchEnd: callback4,
    children: jsx(require("ItemRenderer").ItemRenderer, {
      data,
      dataLength,
      rawDataLength,
      loop,
      size,
      windowSize,
      autoFillData,
      offsetX: derivedValue,
      handlerOffset,
      layoutConfig,
      renderItem,
      customAnimation,
    }),
  };
  const items12 = [
    getSharedIndex.contentContainer,
    animatedStyle,
    style,
    vertical ? getSharedIndex.itemsVertical : getSharedIndex.itemsHorizontal,
  ];
  obj8.style = items12;
  obj7.children = jsx(require("ScrollViewGesture").ScrollViewGesture, obj8, mode);
  return jsx(require("LegacyBaseButton").GestureHandlerRootView, obj7);
});
