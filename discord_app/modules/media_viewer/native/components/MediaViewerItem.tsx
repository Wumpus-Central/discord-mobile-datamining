// === Module 12078: MediaViewerItem ===

// Module 12078 (MediaViewerItem)
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import set from "set" /* 500 */;

const require = arg1;
let c4 = importAllResult;
let closure_7 = set.isAndroid();
let result = set.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerItem.tsx");

export const MediaViewerItem = importAllResult.memo((index) => {
  index = index.index;
  const onLongPress = index.onLongPress;
  const panGestureConfig = index.panGestureConfig;
  const panGesture = index.panGesture;
  ({ source, zoomed } = index);
  const windowWidth = index.windowWidth;
  const windowHeight = index.windowHeight;
  closure_7 = undefined;
  closure_8 = undefined;
  c9 = undefined;
  c10 = undefined;
  let ref;
  let ref1;
  c13 = undefined;
  let callback;
  let callback1;
  let obscure;
  let field;
  let memo;
  closure_19 = undefined;
  let callback3;
  let callback4;
  let callback5;
  let callback6;
  closure_24 = undefined;
  let obj = zoomed;
  ({ entranceAnimationDriver, originLayout, renderMedia, useItemVisible } = index);
  closure_7 = zoomed.useRef(windowWidth);
  closure_8 = zoomed.useRef(windowHeight);
  [tmp2, c9] = panGesture(zoomed.useState(windowWidth), 2);
  const tmp = panGesture(zoomed.useState(windowWidth), 2);
  [tmp4, c10] = panGesture(zoomed.useState(windowHeight), 2);
  const effect = zoomed.useEffect(() => index(panGestureConfig[5]).dismissKeyboard(), []);
  const items = [windowWidth, windowHeight];
  const effect1 = zoomed.useEffect(() => {
    const timeout = setTimeout(() => {
      callback(closure_5);
      callback2(closure_6);
      closure_7.current = closure_5;
      closure_8.current = closure_6;
    }, 20);
    return () => clearTimeout(closure_0);
  }, items);
  const maximumZoomScale = onLongPress(panGestureConfig[6])(tmp2, tmp4, source).maximumZoomScale;
  ref = zoomed.useRef(null);
  ref1 = zoomed.useRef(null);
  const tmp3 = panGesture(zoomed.useState(windowHeight), 2);
  [tmp12, c13] = panGesture(zoomed.useState(false), 2);
  callback = zoomed.useCallback((arg0, arg1) => {
    if (null != ref.current) {
      const result = ref.current / 2;
      const result1 = ref2.current / 2;
      const current = tmp.current;
      const scrollResponder = current.getScrollResponder();
      let obj = { x: null, y: null, width: null, height: null, animated: true };
      obj[0] = arg0 - result / 2;
      obj[1] = arg1 - result1 / 2;
      obj[2] = result;
      obj[3] = result1;
      const result2 = scrollResponder.scrollResponderZoomTo(obj);
    } else if (null !== ref1.current) {
      const current2 = ref1.current;
      if (current2 != null) {
        obj = { x: null, y: null };
        obj[0] = arg0;
        obj[1] = arg1;
        current2.zoomTo(obj);
      }
    }
  }, []);
  callback1 = zoomed.useCallback(() => {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    if (null != ref.current) {
      const current2 = tmp.current;
      const scrollResponder = current2.getScrollResponder();
      let obj = { x: 0, y: 0, width: null, height: null, animated: null };
      obj[2] = ref.current;
      obj[3] = ref2.current;
      obj[4] = flag;
      const result = scrollResponder.scrollResponderZoomTo(obj);
    } else if (null !== ref1.current) {
      const current = ref1.current;
      obj = { animated: null };
      obj[0] = flag;
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
      const useEntranceAnimationState = index(panGestureConfig[7]).useEntranceAnimationState;
      tmp4 = !useEntranceAnimationState.getState().isComplete;
    }
    if (!tmp4) {
      tmp4 = tmp;
    }
    if (!tmp4) {
      _undefined(true);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        callback(false);
      }, 500);
    }
  }, items1);
  obj1 = index(panGestureConfig[8]);
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
      index(panGestureConfig[9]).removeSpoiler(index);
      const obj = index(panGestureConfig[9]);
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
    index(panGestureConfig[9]).removeSpoiler(index);
  }, items6);
  const items7 = [callback5, callback3, callback6, memo, obscure, panGesture, callback4];
  const memo1 = obj.useMemo(() => {
    const Gesture = index(panGestureConfig[11]).Gesture;
    const TapResult = Gesture.Tap();
    const runOnJSResult = Gesture.Tap().runOnJS(true);
    const enabledResult = Gesture.Tap().runOnJS(true).enabled(!memo);
    const numberOfTapsResult = Gesture.Tap().runOnJS(true).enabled(!memo).numberOfTaps(2);
    let num = 10;
    let num2 = 10;
    if (obj5.isAndroid()) {
      num2 = 20;
    }
    obj5 = index(panGestureConfig[4]);
    const maxDistanceResult = numberOfTapsResult.maxDistance(num2);
    const Gesture2 = tmp(tmp2[11]).Gesture;
    const onStartResult = numberOfTapsResult.maxDistance(num2).onStart(callback5);
    const TapResult1 = Gesture2.Tap();
    const runOnJSResult1 = Gesture2.Tap().runOnJS(true);
    const enabledResult1 = Gesture2.Tap().runOnJS(true).enabled(!memo);
    let tmpResult = tmp(tmp2[4]);
    let num3 = num;
    if (tmpResult.isAndroid()) {
      num3 = 20;
    }
    const numberOfTapsResult1 = Gesture2.Tap().runOnJS(true).enabled(!memo).numberOfTaps(1);
    const maxDistanceResult1 = Gesture2.Tap().runOnJS(true).enabled(!memo).numberOfTaps(1).maxDistance(num3);
    const Gesture3 = tmp(tmp2[11]).Gesture;
    const onStartResult1 = Gesture2.Tap().runOnJS(true).enabled(!memo).numberOfTaps(1).maxDistance(num3).onStart(callback4);
    const TapResult2 = Gesture3.Tap();
    let tmp6 = tmp3;
    if (memo) {
      tmp6 = !obscure;
    }
    const runOnJSResult2 = Gesture3.Tap().runOnJS(true);
    const enabledResult2 = Gesture3.Tap().runOnJS(true).enabled(tmp6);
    tmpResult = tmp(tmp2[4]);
    if (tmpResult.isAndroid()) {
      num = 20;
    }
    const numberOfTapsResult2 = Gesture3.Tap().runOnJS(true).enabled(tmp6).numberOfTaps(1);
    const maxDistanceResult2 = Gesture3.Tap().runOnJS(true).enabled(tmp6).numberOfTaps(1).maxDistance(num);
    const Gesture4 = tmp(tmp2[11]).Gesture;
    const onStartResult2 = Gesture3.Tap().runOnJS(true).enabled(tmp6).numberOfTaps(1).maxDistance(num).onStart(callback6);
    const Gesture5 = tmp(tmp2[11]).Gesture;
    const ExclusiveResult = Gesture4.Exclusive(Gesture3.Tap().runOnJS(true).enabled(tmp6).numberOfTaps(1).maxDistance(num).onStart(callback6), onStartResult, onStartResult1);
    const LongPressResult = Gesture5.LongPress();
    const runOnJSResult3 = Gesture5.LongPress().runOnJS(true);
    const enabledResult3 = Gesture5.LongPress().runOnJS(true).enabled(!memo);
    const Gesture6 = tmp(tmp2[11]).Gesture;
    return Gesture6.Simultaneous(ExclusiveResult, Gesture5.LongPress().runOnJS(true).enabled(!memo).onStart(callback3), panGesture);
  }, items7);
  closure_24 = obj.useRef(false);
  const items8 = [callback1, tmp2, tmp4];
  const effect2 = obj.useEffect(() => {
    if (ref3.current) {
      callback1(false);
    } else {
      tmp.current = true;
    }
  }, items8);
  obj = { gesture: memo1, children: windowHeight(tmp7(tmp8[12]), { entranceAnimationDriver, index, originLayout, panGestureConfig, renderMedia, source, windowWidth: tmp2, windowHeight: tmp4, useItemVisible }) };
  const tmp27 = windowHeight(index(panGestureConfig[11]).GestureDetector, obj);
  if (closure_7) {
    obj = { ref: null, style: null, minimumZoomScale: 1, maximumZoomScale: null, onZoomChanged: null, children: null };
    obj[0] = ref1;
    obj1 = { width: null, height: null };
    obj1[0] = tmp2;
    obj1[1] = tmp4;
    obj[1] = obj1;
    obj[3] = maximumZoomScale;
    obj[4] = callback2;
    obj[5] = tmp27;
    let tmp26Result = tmp26(tmp7(tmp8[13]), obj);
  } else {
    const obj2 = { ref: null, style: null, automaticallyAdjustContentInsets: false, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, minimumZoomScale: 1, maximumZoomScale: null, centerContent: true, scrollEventThrottle: 16, onScroll: null, pointerEvents: null, children: null };
    obj2[0] = ref;
    const obj3 = { width: null, height: null };
    obj3[0] = tmp2;
    obj3[1] = tmp4;
    obj2[1] = obj3;
    obj2[6] = maximumZoomScale;
    obj2[9] = callback2;
    let str = "auto";
    if (tmp12) {
      str = "none";
    }
    obj2[10] = str;
    obj2[11] = tmp27;
    tmp26Result = tmp26(windowWidth, obj2);
    const tmp28 = windowWidth;
  }
  return tmp26Result;
});