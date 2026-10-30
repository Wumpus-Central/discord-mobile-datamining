// discord_app/modules/media_viewer/native/components/MediaViewerPager.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import LegacyBaseButton from "../../../../../_runtime/05298_LegacyBaseButton.js";
import useMediaViewerSources from "../useMediaViewerSources.tsx";
import MediaViewerItemPresenterDefault from "MediaViewerItemPresenter.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let closure_6 = {
  code: "function MediaViewerPagerTsx1(){const{zoomScale,isClosing}=this.__closure;return zoomScale.get()<=1&&!isClosing.get();}",
};
let closure_7 = {
  code: "function MediaViewerPagerTsx2(_,manager){const{isPaging}=this.__closure;if(isPaging.get())manager.fail();}",
};
let closure_8 = { code: "function MediaViewerPagerTsx3(){const{zoomScale}=this.__closure;return zoomScale.get()>1;}" };
let closure_9 = {
  code: "function MediaViewerPagerTsx4(isZoomed,previous){const{zoomed,isInteracting}=this.__closure;if(previous===isZoomed)return;zoomed.set(isZoomed);isInteracting.set(isZoomed);}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerPager.tsx");

export default noop.memo(function MediaViewerPager(entranceAnimationDriver) {
  entranceAnimationDriver = entranceAnimationDriver.entranceAnimationDriver;
  const onLongPress = entranceAnimationDriver.onLongPress;
  ({ onScrollWorklets, pagerIndex } = entranceAnimationDriver);
  const panGestureConfig = entranceAnimationDriver.panGestureConfig;
  const sources = entranceAnimationDriver.sources;
  const renderMedia = entranceAnimationDriver.renderMedia;
  const originLayout = entranceAnimationDriver.originLayout;
  const useItemVisible = entranceAnimationDriver.useItemVisible;
  const windowWidth = entranceAnimationDriver.windowWidth;
  const windowHeight = entranceAnimationDriver.windowHeight;
  const zoomed = entranceAnimationDriver.zoomed;
  c12 = undefined;
  let mediaItemHasSpoiler;
  closure_14 = undefined;
  let ref;
  let ref1;
  let sharedValue;
  let sharedValue1;
  let isInteracting;
  let isClosing;
  let overlayEnabled;
  c22 = undefined;
  let callback1;
  let callback2;
  let callback3;
  let tmp = panGestureConfig(
    sources.useState(() => pagerIndex.get()),
    2,
  );
  const first = tmp[0];
  let flattenSourceResult;
  if (null != sources[first]) {
    flattenSourceResult = entranceAnimationDriver(pagerIndex[3]).flattenSource(tmp3);
    const obj2 = entranceAnimationDriver(pagerIndex[3]);
  }
  c12 = flattenSourceResult;
  mediaItemHasSpoiler = entranceAnimationDriver(pagerIndex[4]).useMediaItemHasSpoiler(first);
  let channelId;
  const obj3 = entranceAnimationDriver(pagerIndex[4]);
  if (flattenSourceResult != null) {
    channelId = flattenSourceResult.channelId;
  }
  const tmp11Result = onLongPress(pagerIndex[5])(channelId);
  closure_14 = tmp11Result;
  const tmp11 = onLongPress(pagerIndex[5]);
  ({ width, height, maximumZoomScale } = onLongPress(pagerIndex[6])(windowWidth, windowHeight, sources[first]));
  ref = obj.useRef(null);
  ref1 = obj.useRef(undefined);
  const tmp14 = onLongPress(pagerIndex[6])(windowWidth, windowHeight, sources[first]);
  sharedValue = entranceAnimationDriver(pagerIndex[7]).useSharedValue(false);
  const tmp7Result = entranceAnimationDriver(pagerIndex[7]);
  sharedValue1 = entranceAnimationDriver(pagerIndex[7]).useSharedValue(1);
  isInteracting = panGestureConfig.isInteracting;
  isClosing = panGestureConfig.isClosing;
  overlayEnabled = panGestureConfig.overlayEnabled;
  const tmp7Result5 = entranceAnimationDriver(pagerIndex[7]);
  let fn = function z() {
    let tmp = sharedValue1.get() <= 1;
    if (tmp) {
      tmp = !isClosing.get();
    }
    return tmp;
  };
  fn.__closure = { zoomScale: sharedValue1, isClosing };
  fn.__workletHash = 2867564605891;
  fn.__initData = originLayout;
  const derivedValue = entranceAnimationDriver(pagerIndex[7]).useDerivedValue(fn);
  const tmp7Result6 = entranceAnimationDriver(pagerIndex[7]);
  const mediaViewerPanGesture = entranceAnimationDriver(pagerIndex[8]).useMediaViewerPanGesture(
    panGestureConfig,
    derivedValue,
  );
  const panGestureGeneratorResult = mediaViewerPanGesture.panGestureGenerator(0);
  c22 = panGestureGeneratorResult;
  const effect = obj.useEffect(() => entranceAnimationDriver(pagerIndex[9]).dismissKeyboard(), []);
  const items = [first, windowWidth, windowHeight, mediaItemHasSpoiler];
  const effect1 = obj.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.unzoom({ animated: false });
    }
  }, items);
  const items1 = [panGestureGeneratorResult, sharedValue];
  const items2 = [mediaItemHasSpoiler, first, zoomed, overlayEnabled];
  const callback = obj.useCallback((simultaneousWithExternalGesture, simultaneousWithExternalGesture2) => {
    const Gesture = LegacyBaseButton.Gesture;
    const result = simultaneousWithExternalGesture.simultaneousWithExternalGesture(ref1, c22);
    const fn = function o(arg0, fail) {
      if (sharedValue.get()) {
        fail.fail();
      }
    };
    fn.__closure = { isPaging: sharedValue };
    fn.__workletHash = 119388263678;
    fn.__initData = __initData;
    return Gesture.Simultaneous(
      result.onTouchesDown(fn),
      simultaneousWithExternalGesture2.simultaneousWithExternalGesture(ref1, c22),
    );
  }, items1);
  callback1 = obj.useCallback(() => {
    if (mediaItemHasSpoiler) {
      useMediaViewerSources.removeSpoiler(first);
    } else if (!zoomed.get()) {
      const result = overlayEnabled.set(!overlayEnabled.get());
    }
  }, items2);
  const items3 = [zoomed];
  callback2 = obj.useCallback((arg0) => {
    ({ x, y } = arg0);
    const current = ref.current;
    if (zoomed.get()) {
      if (current != null) {
        current.unzoom();
      }
    } else if (current != null) {
      const point = { x, y };
      current.zoomTo(point);
    }
  }, items3);
  const items4 = [tmp11Result, onLongPress];
  callback3 = obj.useCallback(() => {
    if (!closure_14) {
      if (onLongPress != null) {
        tmp();
      }
    }
  }, items4);
  const items5 = [mediaItemHasSpoiler, , , , ,];
  let obscure;
  if (flattenSourceResult != null) {
    obscure = flattenSourceResult.obscure;
  }
  items5[1] = obscure;
  items5[2] = callback2;
  items5[3] = callback1;
  items5[4] = callback3;
  items5[5] = panGestureGeneratorResult;
  const callback4 = obj.useCallback((onStartResult) => {
    let num = 10;
    if (obj.isAndroid()) {
      num = 20;
    }
    const Gesture = LegacyBaseButton.Gesture;
    obj = PlatformUtils;
    const TapResult = Gesture.Tap();
    const runOnJSResult = Gesture.Tap().runOnJS(true);
    const enabledResult = Gesture.Tap().runOnJS(true).enabled(!mediaItemHasSpoiler);
    const numberOfTapsResult = Gesture.Tap().runOnJS(true).enabled(!mediaItemHasSpoiler).numberOfTaps(2);
    onStartResult = Gesture.Tap()
      .runOnJS(true)
      .enabled(!mediaItemHasSpoiler)
      .numberOfTaps(2)
      .maxDistance(num)
      .onStart(callback2);
    const Gesture2 = LegacyBaseButton.Gesture;
    const maxDistanceResult = Gesture.Tap()
      .runOnJS(true)
      .enabled(!mediaItemHasSpoiler)
      .numberOfTaps(2)
      .maxDistance(num);
    const TapResult1 = Gesture2.Tap();
    let tmp5 = !mediaItemHasSpoiler;
    if (mediaItemHasSpoiler) {
      let obscure;
      if (_undefined != null) {
        obscure = _undefined.obscure;
      }
      tmp5 = true !== obscure;
    }
    const runOnJSResult1 = Gesture2.Tap().runOnJS(true);
    const enabledResult1 = Gesture2.Tap().runOnJS(true).enabled(tmp5);
    const maxDistanceResult1 = Gesture2.Tap().runOnJS(true).enabled(tmp5).maxDistance(num);
    const Gesture3 = LegacyBaseButton.Gesture;
    const onStartResult1 = Gesture2.Tap().runOnJS(true).enabled(tmp5).maxDistance(num).onStart(callback1);
    const LongPressResult = Gesture3.LongPress();
    const runOnJSResult2 = Gesture3.LongPress().runOnJS(true);
    const enabledResult2 = Gesture3.LongPress().runOnJS(true).enabled(!mediaItemHasSpoiler);
    const Gesture4 = LegacyBaseButton.Gesture;
    const Gesture5 = LegacyBaseButton.Gesture;
    const onStartResult2 = Gesture3.LongPress().runOnJS(true).enabled(!mediaItemHasSpoiler).onStart(callback3);
    const Gesture6 = LegacyBaseButton.Gesture;
    return Gesture4.Simultaneous(
      Gesture5.Race(onStartResult, c22),
      Gesture6.Exclusive(onStartResult, onStartResult1),
      onStartResult2,
    );
  }, items5);
  const tmp7Result7 = entranceAnimationDriver(pagerIndex[8]);
  class Q {
    constructor() {
      return closure_18.get() > 1;
    }
  }
  Q.__closure = { zoomScale: sharedValue1 };
  Q.__workletHash = 14368392963786;
  Q.__initData = windowWidth;
  class N {
    constructor(arg0, arg1) {
      if (arg1 !== entranceAnimationDriver) {
        tmp = zoomed;
        result = zoomed.set(entranceAnimationDriver);
        tmp3 = isInteracting;
        result1 = isInteracting.set(entranceAnimationDriver);
      }
      return;
    }
  }
  N.__closure = { zoomed, isInteracting };
  N.__workletHash = 16737291391784;
  N.__initData = windowHeight;
  const animatedReaction = entranceAnimationDriver(pagerIndex[7]).useAnimatedReaction(Q, N);
  const items6 = [
    entranceAnimationDriver,
    originLayout,
    panGestureConfig,
    renderMedia,
    sources,
    useItemVisible,
    windowWidth,
    windowHeight,
  ];
  const callback5 = obj.useCallback(
    (index) =>
      jsx(MediaViewerItemPresenterDefault, {
        useItemVisible,
        index,
        source: sources[index],
        originLayout,
        renderMedia,
        windowWidth,
        windowHeight,
        entranceAnimationDriver,
        panGestureConfig,
      }),
    items6,
  );
  const obj4 = {
    ref,
    zoomScale: sharedValue1,
    onCreateGesture: callback,
    gestureEnabled: !mediaItemHasSpoiler,
    contentWidth: width,
    contentHeight: height,
    maximumZoomScale,
    children: null,
  };
  const tmp7Result8 = entranceAnimationDriver(pagerIndex[7]);
  const obj5 = {};
  const tmp10Result = onLongPress(pagerIndex[14]);
  const merged = Object.assign(onScrollWorklets);
  obj5.selectedPage = pagerIndex;
  obj5.onPageChanged = tmp[1];
  obj5.isPaging = sharedValue;
  obj5.pageCount = sources.length;
  obj5.onCreateGesture = callback4;
  obj5.onRenderPage = callback5;
  obj5.width = windowWidth;
  obj5.height = windowHeight;
  obj5.gestureRef = ref1;
  obj5.gestureEnabled = derivedValue;
  obj4.children = renderMedia(onLongPress(pagerIndex[15]), obj5);
  return renderMedia(tmp10Result, obj4);
});
