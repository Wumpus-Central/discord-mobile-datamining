// discord_app/modules/media_viewer/native/components/MediaViewerItem.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import LegacyBaseButton from "../../../../../_runtime/06140_LegacyBaseButton.js";
import useMediaViewerSources from "../useMediaViewerSources.tsx";
import useEntranceAnimation from "../useEntranceAnimation.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let index;

const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let closure_7 = PlatformUtils.isAndroid();
const memoResult = react.memo((index) => {
  let _undefined;
  let c10;
  let c13;
  let c9;
  let entranceAnimationDriver;
  let originLayout;
  let renderMedia;
  let size1;
  let source;
  let str;
  let tmp12;
  let tmp2;
  let tmp25Result;
  let tmp4;
  let useItemVisible;
  let zoomed;
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
  let mediaItemHasSpoiler;
  let closure_18;
  let callback3;
  let callback4;
  let callback5;
  let callback6;
  let ref3;
  let obj = zoomed;
  ({ entranceAnimationDriver, originLayout, renderMedia, useItemVisible } = index);
  zoomed.useRef(windowWidth);
  const ref2 = zoomed.useRef(windowHeight);
  const tmp = panGesture(zoomed.useState(windowWidth), 2);
  [tmp2, c9] = tmp;
  const tmp3 = panGesture(zoomed.useState(windowHeight), 2);
  [tmp4, c10] = tmp3;
  const effect = zoomed.useEffect(() => {
    const obj = index(panGestureConfig[5]);
    return obj.dismissKeyboard();
  }, []);
  const items = [windowWidth, windowHeight];
  const effect1 = zoomed.useEffect(() => {
    let closure_0;
    let current;
    let current2;
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
  [tmp12, c13] = panGesture(zoomed.useState(false), 2);
  panGesture(zoomed.useState(false), 2);
  const callback = zoomed.useCallback((x, y) => {
    if (null != ref.current) {
      const result = ref.current / 2;
      const result1 = ref2.current / 2;
      const current = tmp.current;
      const scrollResponder = current.getScrollResponder();
      size = { x: x - result / 2, y: y - result1 / 2, width: result, height: result1, animated: true };
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
      const current4 = tmp.current;
      const current2 = ref.current;
      const current3 = ref2.current;
      const scrollResponder = current4.getScrollResponder();
      size = { x: 0, y: 0, width: current2, height: current3, animated: flag };
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
    if (!tmp4) {
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
  const obj2 = index(panGestureConfig[8]);
  let flattenSourceResult = obj2.flattenSource(source);
  if (flattenSourceResult == null) {
    flattenSourceResult = {};
  }
  obscure = flattenSourceResult.obscure;
  const channelId = flattenSourceResult.channelId;
  const tmp16Result = index(panGestureConfig[9]);
  mediaItemHasSpoiler = tmp16Result.useMediaItemHasSpoiler(index);
  const tmp18 = onLongPress(panGestureConfig[10])(channelId);
  closure_18 = tmp18;
  const items2 = [mediaItemHasSpoiler, index, onLongPress, tmp18];
  callback3 = obj.useCallback(() => {
    if (mediaItemHasSpoiler) {
      const obj = useMediaViewerSources;
      obj.removeSpoiler(index);
    } else if (!closure_18) {
      if (onLongPress != null) {
        tmp3();
      }
    }
  }, items2);
  const items3 = [zoomed, panGestureConfig];
  callback4 = obj.useCallback(() => {
    let overlayEnabled;
    let overlayEnabled2;
    if (!zoomed.get()) {
      ({ overlayEnabled, overlayEnabled: overlayEnabled2 } = panGestureConfig);
      const result = overlayEnabled.set(!overlayEnabled2.get());
    }
  }, items3);
  const items4 = [callback1, callback, zoomed];
  callback5 = obj.useCallback((arg0) => {
    let absoluteX;
    let absoluteY;
    ({ absoluteX, absoluteY } = arg0);
    if (zoomed.get()) {
      callback1();
    } else if (!zoomed.get()) {
      callback(absoluteX, absoluteY);
    }
  }, items4);
  const items5 = [index];
  callback6 = obj.useCallback(() => {
    const obj = useMediaViewerSources;
    obj.removeSpoiler(index);
  }, items5);
  const items6 = [callback5, callback3, callback6, mediaItemHasSpoiler, obscure, panGesture, callback4];
  const memo = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const TapResult = Gesture.Tap();
    const runOnJSResult = TapResult.runOnJS(true);
    const enabledResult = runOnJSResult.enabled(!mediaItemHasSpoiler);
    const maxDistance = enabledResult.numberOfTaps(2).maxDistance;
    enabledResult.numberOfTaps(2);
    let num = 10;
    let num2 = 10;
    const obj4 = PlatformUtils;
    if (obj4.isAndroid()) {
      num2 = 20;
    }
    const maxDistanceResult = maxDistance(num2);
    const onStartResult = maxDistanceResult.onStart(callback5);
    const Gesture2 = LegacyBaseButton.Gesture;
    const TapResult1 = Gesture2.Tap();
    const runOnJSResult1 = TapResult1.runOnJS(true);
    const enabledResult1 = runOnJSResult1.enabled(!mediaItemHasSpoiler);
    const maxDistance2 = enabledResult1.numberOfTaps(1).maxDistance;
    enabledResult1.numberOfTaps(1);
    let num3 = num;
    const tmpResult = PlatformUtils;
    if (tmpResult.isAndroid()) {
      num3 = 20;
    }
    const maxDistance2Result = maxDistance2(num3);
    const onStartResult1 = maxDistance2Result.onStart(callback4);
    const Gesture3 = LegacyBaseButton.Gesture;
    const TapResult2 = Gesture3.Tap();
    let tmp9 = mediaItemHasSpoiler;
    const enabled = TapResult2.runOnJS(true).enabled;
    TapResult2.runOnJS(true);
    if (mediaItemHasSpoiler) {
      tmp9 = !obscure;
    }
    const enabledResult2 = enabled(tmp9);
    const maxDistance3 = enabledResult2.numberOfTaps(1).maxDistance;
    enabledResult2.numberOfTaps(1);
    const tmpResult2 = PlatformUtils;
    if (tmpResult2.isAndroid()) {
      num = 20;
    }
    const maxDistance3Result = maxDistance3(num);
    const onStartResult2 = maxDistance3Result.onStart(callback6);
    const Gesture4 = LegacyBaseButton.Gesture;
    const ExclusiveResult = Gesture4.Exclusive(onStartResult2, onStartResult, onStartResult1);
    const Gesture5 = LegacyBaseButton.Gesture;
    const LongPressResult = Gesture5.LongPress();
    const runOnJSResult3 = LongPressResult.runOnJS(true);
    const enabledResult3 = runOnJSResult3.enabled(!mediaItemHasSpoiler);
    const onStartResult3 = enabledResult3.onStart(callback3);
    const Gesture6 = LegacyBaseButton.Gesture;
    return Gesture6.Simultaneous(ExclusiveResult, onStartResult3, panGesture);
  }, items6);
  ref3 = obj.useRef(false);
  const items7 = [callback1, tmp2, tmp4];
  const effect2 = obj.useEffect(() => {
    if (ref3.current) {
      callback1(false);
    } else {
      tmp.current = true;
    }
  }, items7);
  const obj3 = {
    gesture: memo,
    children: windowHeight(onLongPress(panGestureConfig[13]), {
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
  const GestureDetector = tmp16(tmp8[12]).GestureDetector;
  const tmp26 = windowHeight(GestureDetector, obj3);
  const tmp27 = ref;
  if (tmp27) {
    let obj4 = {
      ref: ref1,
      style: size,
      minimumZoomScale: 1,
      maximumZoomScale,
      onZoomChanged: callback2,
      children: tmp26,
    };
    size = { width: tmp2, height: tmp4 };
    tmp25Result = tmp25(tmp7(tmp8[14]), obj4);
  } else {
    const obj5 = {
      ref,
      style: size1,
      automaticallyAdjustContentInsets: false,
      showsHorizontalScrollIndicator: false,
      showsVerticalScrollIndicator: false,
      minimumZoomScale: 1,
      maximumZoomScale,
      centerContent: true,
      scrollEventThrottle: 16,
      onScroll: callback2,
      pointerEvents: str,
      children: tmp26,
    };
    size1 = { width: tmp2, height: tmp4 };
    str = "auto";
    const tmp28 = windowWidth;
    if (tmp12) {
      str = "none";
    }
    tmp25Result = tmp25(tmp28, obj5);
  }
  return tmp25Result;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerItem.tsx");

export const MediaViewerItem = memoResult;
