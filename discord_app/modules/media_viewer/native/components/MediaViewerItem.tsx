// discord_app/modules/media_viewer/native/components/MediaViewerItem.tsx
import PlatformUtils2 from "../../../../utils/PlatformUtils.tsx";
import LegacyBaseButton from "../../../../../_runtime/06655_LegacyBaseButton.js";
import useMediaViewerSources from "../useMediaViewerSources.tsx";
import useEntranceAnimation from "../useEntranceAnimation.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1115);
let closure_7 = PlatformUtils.isAndroid();
let size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerItem.tsx");

export const MediaViewerItem = noop.memo((index) => {
  index = index.index;
  const onLongPress = index.onLongPress;
  const panGestureConfig = index.panGestureConfig;
  const panGesture = index.panGesture;
  ({ source, zoomed } = index);
  const windowWidth = index.windowWidth;
  const windowHeight = index.windowHeight;
  c9 = undefined;
  c10 = undefined;
  c13 = undefined;
  let obscure;
  let field;
  let memo;
  closure_19 = undefined;
  let callback3;
  let callback4;
  let callback5;
  let callback6;
  let obj = zoomed;
  ({ entranceAnimationDriver, originLayout, renderMedia, useItemVisible } = index);
  zoomed.useRef(windowWidth);
  zoomed.useRef(windowHeight);
  [tmp2, c9] = panGesture(zoomed.useState(windowWidth), 2);
  const tmp = panGesture(zoomed.useState(windowWidth), 2);
  [tmp4, c10] = panGesture(zoomed.useState(windowHeight), 2);
  const effect = zoomed.useEffect(() => index(panGestureConfig[5]).dismissKeyboard(), []);
  const items = [windowWidth, windowHeight];
  const effect1 = zoomed.useEffect(() => {
    const timeout = setTimeout(() => {
      closure_1_9(current);
      closure_1_10(current2);
      ref.current = current;
      ref2.current = current2;
    }, 20);
    return () => clearTimeout(closure_0);
  }, items);
  const maximumZoomScale = onLongPress(panGestureConfig[6])(tmp2, tmp4, source).maximumZoomScale;
  const ref = zoomed.useRef(null);
  const ref1 = zoomed.useRef(null);
  const tmp3 = panGesture(zoomed.useState(windowHeight), 2);
  [tmp12, c13] = panGesture(zoomed.useState(false), 2);
  const callback = zoomed.useCallback((x, y) => {
    if (null != ref.current) {
      const result = ref.current / 2;
      const result1 = ref2.current / 2;
      const current = tmp.current;
      const scrollResponder = current.getScrollResponder();
      const size = { x: x - result / 2, y: y - result1 / 2, width: result, height: result1, animated: true };
      const result2 = scrollResponder.scrollResponderZoomTo(size);
    } else if (null !== ref1.current) {
      const current2 = ref1.current;
      if (current2 != null) {
        const point = { x, y };
        current2.zoomTo(point);
      }
    }
  }, []);
  const callback1 = zoomed.useCallback(() => {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    if (null != ref.current) {
      const current2 = tmp.current;
      const scrollResponder = current2.getScrollResponder();
      const size = { x: 0, y: 0, width: ref.current, height: ref2.current, animated: flag };
      const result = scrollResponder.scrollResponderZoomTo(size);
    } else if (null !== ref1.current) {
      const current = ref1.current;
      const obj = { animated: flag };
      current.unzoom(obj);
    }
  }, []);
  const items1 = [zoomed, panGestureConfig];
  const callback2 = zoomed.useCallback((nativeEvent) => {
    const result = zoomed.set(tmp);
    const isInteracting = panGestureConfig.isInteracting;
    const result1 = isInteracting.set(tmp);
    let tmp4 = closure_7;
    if (!closure_7) {
      const useEntranceAnimationState = useEntranceAnimation.useEntranceAnimationState;
      tmp4 = !useEntranceAnimationState.getState().isComplete;
    }
    if (!tmp4) {
      tmp4 = tmp;
    }
    if (!tmp4) {
      _undefined(true);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        _undefined(false);
      }, 500);
    }
  }, items1);
  let obj1 = index(panGestureConfig[8]);
  let flattenSourceResult = obj1.flattenSource(source);
  if (flattenSourceResult == null) {
    flattenSourceResult = {};
  }
  obscure = flattenSourceResult.obscure;
  const MediaViewerSourcesStore = tmp16(tmp8[9]).MediaViewerSourcesStore;
  field = MediaViewerSourcesStore.useField("spoilerIndexes");
  const items2 = [index, field];
  memo = obj.useMemo(() => field.has(index), items2);
  const tmp19 = onLongPress(panGestureConfig[10])(flattenSourceResult.channelId);
  closure_19 = tmp19;
  const items3 = [memo, index, onLongPress, tmp19];
  callback3 = obj.useCallback(() => {
    if (memo) {
      useMediaViewerSources.removeSpoiler(index);
    } else if (!closure_19) {
      if (onLongPress != null) {
        tmp2();
      }
    }
  }, items3);
  const items4 = [zoomed, panGestureConfig];
  callback4 = obj.useCallback(() => {
    if (!zoomed.get()) {
      ({ overlayEnabled, overlayEnabled: overlayEnabled2 } = panGestureConfig);
      const result = overlayEnabled.set(!overlayEnabled2.get());
    }
  }, items4);
  const items5 = [callback1, callback, zoomed];
  callback5 = obj.useCallback((arg0) => {
    ({ absoluteX, absoluteY } = arg0);
    if (zoomed.get()) {
      callback1();
    } else if (!zoomed.get()) {
      callback(absoluteX, absoluteY);
    }
  }, items5);
  const items6 = [index];
  callback6 = obj.useCallback(() => {
    useMediaViewerSources.removeSpoiler(index);
  }, items6);
  const items7 = [callback5, callback3, callback6, memo, obscure, panGesture, callback4];
  const memo1 = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const TapResult = Gesture.Tap();
    const runOnJSResult = Gesture.Tap().runOnJS(true);
    const enabledResult = Gesture.Tap().runOnJS(true).enabled(!memo);
    const numberOfTapsResult = Gesture.Tap().runOnJS(true).enabled(!memo).numberOfTaps(2);
    let num = 10;
    let num2 = 10;
    if (obj5.isAndroid()) {
      num2 = 20;
    }
    obj5 = PlatformUtils2;
    const maxDistanceResult = numberOfTapsResult.maxDistance(num2);
    const Gesture2 = LegacyBaseButton.Gesture;
    const onStartResult = numberOfTapsResult.maxDistance(num2).onStart(callback5);
    const TapResult1 = Gesture2.Tap();
    const runOnJSResult1 = Gesture2.Tap().runOnJS(true);
    const enabledResult1 = Gesture2.Tap().runOnJS(true).enabled(!memo);
    let tmpResult = PlatformUtils2;
    let num3 = num;
    if (tmpResult.isAndroid()) {
      num3 = 20;
    }
    const numberOfTapsResult1 = Gesture2.Tap().runOnJS(true).enabled(!memo).numberOfTaps(1);
    const maxDistanceResult1 = Gesture2.Tap().runOnJS(true).enabled(!memo).numberOfTaps(1).maxDistance(num3);
    const Gesture3 = LegacyBaseButton.Gesture;
    const onStartResult1 = Gesture2.Tap()
      .runOnJS(true)
      .enabled(!memo)
      .numberOfTaps(1)
      .maxDistance(num3)
      .onStart(callback4);
    const TapResult2 = Gesture3.Tap();
    let tmp6 = memo;
    if (memo) {
      tmp6 = !obscure;
    }
    const runOnJSResult2 = Gesture3.Tap().runOnJS(true);
    const enabledResult2 = Gesture3.Tap().runOnJS(true).enabled(tmp6);
    tmpResult = PlatformUtils2;
    if (tmpResult.isAndroid()) {
      num = 20;
    }
    const numberOfTapsResult2 = Gesture3.Tap().runOnJS(true).enabled(tmp6).numberOfTaps(1);
    const maxDistanceResult2 = Gesture3.Tap().runOnJS(true).enabled(tmp6).numberOfTaps(1).maxDistance(num);
    const Gesture4 = LegacyBaseButton.Gesture;
    const onStartResult2 = Gesture3.Tap()
      .runOnJS(true)
      .enabled(tmp6)
      .numberOfTaps(1)
      .maxDistance(num)
      .onStart(callback6);
    const Gesture5 = LegacyBaseButton.Gesture;
    const ExclusiveResult = Gesture4.Exclusive(
      Gesture3.Tap().runOnJS(true).enabled(tmp6).numberOfTaps(1).maxDistance(num).onStart(callback6),
      onStartResult,
      onStartResult1,
    );
    const LongPressResult = Gesture5.LongPress();
    const runOnJSResult3 = Gesture5.LongPress().runOnJS(true);
    const enabledResult3 = Gesture5.LongPress().runOnJS(true).enabled(!memo);
    const Gesture6 = LegacyBaseButton.Gesture;
    return Gesture6.Simultaneous(
      ExclusiveResult,
      Gesture5.LongPress().runOnJS(true).enabled(!memo).onStart(callback3),
      panGesture,
    );
  }, items7);
  obj.useRef(false);
  const items8 = [callback1, tmp2, tmp4];
  const effect2 = obj.useEffect(() => {
    if (ref3.current) {
      callback1(false);
    } else {
      tmp.current = true;
    }
  }, items8);
  obj = {
    gesture: memo1,
    children: windowHeight(tmp7(tmp8[12]), {
      entranceAnimationDriver,
      index,
      originLayout,
      panGestureConfig,
      renderMedia,
      source,
      windowWidth: tmp2,
      windowHeight: tmp4,
      useItemVisible,
    }),
  };
  const tmp27 = windowHeight(index(panGestureConfig[11]).GestureDetector, obj);
  if (ref) {
    obj = { ref: ref1, style: null, minimumZoomScale: 1, maximumZoomScale: null, onZoomChanged: null, children: null };
    let size = { width: tmp2, height: tmp4 };
    obj.style = size;
    obj.maximumZoomScale = maximumZoomScale;
    obj.onZoomChanged = callback2;
    obj.children = tmp27;
    let tmp26Result = tmp26(tmp7(tmp8[13]), obj);
  } else {
    obj1 = {
      ref,
      style: null,
      automaticallyAdjustContentInsets: false,
      showsHorizontalScrollIndicator: false,
      showsVerticalScrollIndicator: false,
      minimumZoomScale: 1,
      maximumZoomScale: null,
      centerContent: true,
      scrollEventThrottle: 16,
      onScroll: null,
      pointerEvents: null,
      children: null,
    };
    const size1 = { width: tmp2, height: tmp4 };
    obj1.style = size1;
    obj1.maximumZoomScale = maximumZoomScale;
    obj1.onScroll = callback2;
    let str = "auto";
    if (tmp12) {
      str = "none";
    }
    obj1.pointerEvents = str;
    obj1.children = tmp27;
    tmp26Result = tmp26(windowWidth, obj1);
  }
  return tmp26Result;
});
