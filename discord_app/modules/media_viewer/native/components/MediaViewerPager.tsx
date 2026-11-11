// discord_app/modules/media_viewer/native/components/MediaViewerPager.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import LegacyBaseButton from "../../../../../_runtime/05535_LegacyBaseButton.js";
import useMediaViewerSources from "../useMediaViewerSources.tsx";
import MediaViewerItemPresenterDefault from "MediaViewerItemPresenter.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
let closure_6 = {
  code: "(function MediaViewerPagerTsx1(){let[zoomScale,isClosing]=this.__closure;return zoomScale.get()<=1&&!isClosing.get();})",
};
let closure_7 = {
  code: "(function MediaViewerPagerTsx2(_,manager){let[isPaging]=this.__closure;if(isPaging.get())manager.fail();})",
};
let closure_8 = { code: "(function MediaViewerPagerTsx3(){let[zoomScale]=this.__closure;return zoomScale.get()>1;})" };
let closure_9 = {
  code: "(function MediaViewerPagerTsx4(isZoomed,previous){let[zoomed,isInteracting]=this.__closure;if(previous===isZoomed)return;zoomed.set(isZoomed);isInteracting.set(isZoomed);})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerPager.tsx");

export default noop.memo(function MediaViewerPager(entranceAnimationDriver) {
  entranceAnimationDriver = entranceAnimationDriver.entranceAnimationDriver;
  _require = entranceAnimationDriver;
  const onLongPress = entranceAnimationDriver.onLongPress;
  importDefault = onLongPress;
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
  let overlayEnabled;
  c19 = undefined;
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
    flattenSourceResult = require("MediaSourceUtil").flattenSource(tmp3);
    const obj2 = require("MediaSourceUtil");
  }
  c12 = flattenSourceResult;
  mediaItemHasSpoiler = require("useMediaItemHasSpoiler").useMediaItemHasSpoiler(first);
  let channelId;
  const obj3 = require("useMediaItemHasSpoiler");
  if (flattenSourceResult != null) {
    channelId = flattenSourceResult.channelId;
  }
  const tmp11Result = require("useShouldHideMediaOptions")(channelId);
  closure_14 = tmp11Result;
  const tmp11 = require("useShouldHideMediaOptions");
  ({ width, height, maximumZoomScale } = require("getMediaViewerStateForScreen")(
    windowWidth,
    windowHeight,
    sources[first],
  ));
  ref = obj.useRef(null);
  ref1 = obj.useRef(undefined);
  const tmp14 = require("getMediaViewerStateForScreen")(windowWidth, windowHeight, sources[first]);
  sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(false);
  const tmp7Result = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(1);
  overlayEnabled = panGestureConfig.overlayEnabled;
  ({ isInteracting, isClosing } = panGestureConfig);
  const tmp7Result5 = require("../../../../../_runtime/metro/01652__.js");
  items = [originLayout, sharedValue1, isClosing];
  _require = undefined;
  importDefault = undefined;
  [tmp19, tmp20, tmp21] = items;
  class MediaViewerPagerTsx1 {
    constructor() {
      tmp = closure_0.get() <= 1;
      if (tmp) {
        tmp2 = closure_1;
        tmp = !closure_1.get();
      }
      return tmp;
    }
  }
  let items1 = [tmp20, tmp21];
  MediaViewerPagerTsx1.__closure = items1;
  MediaViewerPagerTsx1.__workletHash = 2156756597178;
  MediaViewerPagerTsx1.__initData = tmp19;
  const derivedValue = require("../../../../../_runtime/metro/01652__.js").useDerivedValue(MediaViewerPagerTsx1);
  const tmp7Result6 = require("../../../../../_runtime/metro/01652__.js");
  const mediaViewerPanGesture = require("useMediaViewerPanGesture").useMediaViewerPanGesture(
    panGestureConfig,
    derivedValue,
  );
  const panGestureGeneratorResult = mediaViewerPanGesture.panGestureGenerator(0);
  c19 = panGestureGeneratorResult;
  const effect = obj.useEffect(() => entranceAnimationDriver(pagerIndex[9]).dismissKeyboard(), []);
  const items2 = [first, windowWidth, windowHeight, mediaItemHasSpoiler];
  const effect1 = obj.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.unzoom({ animated: false });
    }
  }, items2);
  const items3 = [panGestureGeneratorResult, sharedValue];
  const items4 = [mediaItemHasSpoiler, first, zoomed, overlayEnabled];
  const callback = obj.useCallback((simultaneousWithExternalGesture, simultaneousWithExternalGesture2) => {
    const Gesture = LegacyBaseButton.Gesture;
    const result = simultaneousWithExternalGesture.simultaneousWithExternalGesture(ref1, c19);
    items = [closure_7, sharedValue];
    c0 = undefined;
    [tmp3, tmp4] = items;
    class MediaViewerPagerTsx2 {
      constructor(arg0, arg1) {
        if (closure_0.get()) {
          tmp = simultaneousWithExternalGesture2;
          failResult = simultaneousWithExternalGesture2.fail();
        }
        return;
      }
    }
    const items1 = [tmp4];
    MediaViewerPagerTsx2.__closure = items1;
    MediaViewerPagerTsx2.__workletHash = 6628945464135;
    MediaViewerPagerTsx2.__initData = tmp3;
    return Gesture.Simultaneous(
      result.onTouchesDown(MediaViewerPagerTsx2),
      simultaneousWithExternalGesture2.simultaneousWithExternalGesture(ref1, c19),
    );
  }, items3);
  callback1 = obj.useCallback(() => {
    if (mediaItemHasSpoiler) {
      useMediaViewerSources.removeSpoiler(first);
    } else if (!zoomed.get()) {
      const result = overlayEnabled.set(!overlayEnabled.get());
    }
  }, items4);
  const items5 = [zoomed];
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
  }, items5);
  const items6 = [tmp11Result, onLongPress];
  callback3 = obj.useCallback(() => {
    if (!closure_14) {
      if (c1 != null) {
        tmp();
      }
    }
  }, items6);
  const items7 = [mediaItemHasSpoiler, , , , ,];
  let obscure;
  if (flattenSourceResult != null) {
    obscure = flattenSourceResult.obscure;
  }
  items7[1] = obscure;
  items7[2] = callback2;
  items7[3] = callback1;
  items7[4] = callback3;
  items7[5] = panGestureGeneratorResult;
  const callback4 = obj.useCallback((onFinalizeResult) => {
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
    const maxDistanceResult = Gesture.Tap()
      .runOnJS(true)
      .enabled(!mediaItemHasSpoiler)
      .numberOfTaps(2)
      .maxDistance(num);
    const Gesture2 = LegacyBaseButton.Gesture;
    const onStartResult = Gesture.Tap()
      .runOnJS(true)
      .enabled(!mediaItemHasSpoiler)
      .numberOfTaps(2)
      .maxDistance(num)
      .onStart(callback2);
    const TapResult1 = Gesture2.Tap();
    let tmp5 = !mediaItemHasSpoiler;
    if (mediaItemHasSpoiler) {
      let obscure;
      if (_undefined2 != null) {
        obscure = _undefined2.obscure;
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
      Gesture5.Race(onFinalizeResult, c19),
      Gesture6.Exclusive(onStartResult, onStartResult1),
      onStartResult2,
    );
  }, items7);
  const tmp7Result7 = require("useMediaViewerPanGesture");
  const items8 = [windowWidth, sharedValue1];
  _require = undefined;
  [tmp32, tmp33] = items8;
  class MediaViewerPagerTsx3 {
    constructor() {
      return closure_0.get() > 1;
    }
  }
  const items9 = [tmp33];
  MediaViewerPagerTsx3.__closure = items9;
  MediaViewerPagerTsx3.__workletHash = 14562595785907;
  MediaViewerPagerTsx3.__initData = tmp32;
  const items10 = [windowHeight, zoomed, isInteracting];
  _require = undefined;
  importDefault = undefined;
  [tmp34, tmp35, tmp36] = items10;
  class MediaViewerPagerTsx4 {
    constructor(arg0, arg1) {
      if (arg1 !== entranceAnimationDriver) {
        tmp = closure_0;
        result = closure_0.set(entranceAnimationDriver);
        tmp3 = closure_1;
        result1 = closure_1.set(entranceAnimationDriver);
      }
      return;
    }
  }
  const items11 = [tmp35, tmp36];
  MediaViewerPagerTsx4.__closure = items11;
  MediaViewerPagerTsx4.__workletHash = 3436017293841;
  MediaViewerPagerTsx4.__initData = tmp34;
  const animatedReaction = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    MediaViewerPagerTsx3,
    MediaViewerPagerTsx4,
  );
  const items12 = [
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
    items12,
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
  const tmp7Result8 = require("../../../../../_runtime/metro/01652__.js");
  const obj5 = {};
  const tmp10Result = require("ZoomLayoutGesture");
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
  obj4.children = renderMedia(require("ZoomLayoutPager"), obj5);
  return renderMedia(tmp10Result, obj4);
});
