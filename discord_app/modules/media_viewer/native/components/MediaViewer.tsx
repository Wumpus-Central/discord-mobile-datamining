// discord_app/modules/media_viewer/native/components/MediaViewer.tsx
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import useVideoControls from "../useVideoControls.tsx";
import MediaViewerDimensionsContext from "../MediaViewerDimensionsContext.tsx";
import MediaViewerItem from "MediaViewerItem.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function MediaViewer(arg0) {
  ({ onClose, onLongPress, originLayout, renderMedia, syncer } = arg0);
  ({ index, sources, zoomed } = syncer);
  height = undefined;
  let sharedValue;
  let sharedValue1;
  __initData = undefined;
  ({ renderOverlay, swipeVelocityThreshold } = arg0);
  value = [height(7351).MEDIA_VIEWER];
  const tmp3 = height(7326);
  [tmp5, tmp6] = sharedValue(sharedValue1.useState(true), 2);
  _require = tmp6;
  const tmp4 = sharedValue(sharedValue1.useState(true), 2);
  const tmp7 = _require;
  const mediaViewerDimensions = require("MediaViewerDimensionsContext").useMediaViewerDimensions();
  ({ width, height } = mediaViewerDimensions);
  const tmp9 = height(14802)({ index, onClose, sources, windowHeight: height, windowWidth: width });
  dependencyMap = tmp9;
  let obj = require("MediaViewerDimensionsContext");
  sharedValue = require("ReanimatedRexport").useSharedValue(0);
  let obj2 = require("ReanimatedRexport");
  sharedValue1 = require("ReanimatedRexport").useSharedValue(false);
  let obj3 = require("ReanimatedRexport");
  const animatedRef = require("ReanimatedRexport").useAnimatedRef();
  StyleSheet = tmp13;
  let obj4 = require("ReanimatedRexport");
  const isMediaViewerImprovementsEnabled =
    require("MediaViewerImprovementsExperiment").useIsMediaViewerImprovementsEnabled();
  let obj5 = require("MediaViewerImprovementsExperiment");
  const isMediaViewerEntranceJankFixEnabled =
    require("MediaViewerEntranceJankExperiment").useIsMediaViewerEntranceJankFixEnabled();
  const viewerProps = syncer.useViewerProps(isMediaViewerImprovementsEnabled);
  ({ useItemVisible, ref, onScroll, onScrollWorklets, pagerIndex, onContentSizeChange } = viewerProps);
  const obj6 = require("MediaViewerEntranceJankExperiment");
  const mediaViewerPanGestureConfig = require("useMediaViewerPanGesture").useMediaViewerPanGestureConfig(
    tmp9,
    swipeVelocityThreshold,
    onClose,
  );
  const dismiss = mediaViewerPanGestureConfig.dismiss;
  const translatePos = mediaViewerPanGestureConfig.translatePos;
  const isClosing = mediaViewerPanGestureConfig.isClosing;
  const isInteracting = mediaViewerPanGestureConfig.isInteracting;
  const overlayEnabled = mediaViewerPanGestureConfig.overlayEnabled;
  const items1 = [dismiss, isClosing];
  const obj7 = require("useMediaViewerPanGesture");
  height(6022)(
    sharedValue1.useCallback(() => {
      if (!isClosing.get()) {
        dismiss();
      }
      return true;
    }, items1),
  );
  const items2 = [height];
  const memo = sharedValue1.useMemo(() => {
    const obj = {};
    const merged = Object.assign(StyleSheet.absoluteFillObject);
    obj.height = height;
    obj.backgroundColor = "black";
    return obj;
  }, items2);
  const tmp18 = height(6022);
  function re() {
    let tmp = null;
    if (!isMediaViewerEntranceJankFixEnabled) {
      tmp = memo;
    }
    const obj = {};
    const merged = Object.assign(tmp);
    value = sharedValue.get();
    const items = [-closure_2, 0, closure_2];
    obj.opacity = Math.min(value, ReanimatedRexport.interpolate(translatePos.get(), items, [0, 1, 0]));
    return obj;
  }
  const obj8 = require("ReanimatedRexport");
  re.__closure = {
    isEntranceJankFixEnabled: isMediaViewerEntranceJankFixEnabled,
    backdropLayout: memo,
    entranceAnimationDriver: sharedValue,
    interpolate: require("ReanimatedRexport").interpolate,
    translatePos,
    closePosition: tmp9,
  };
  re.__workletHash = 7563599196274;
  re.__initData = __initData;
  const obj10 = {};
  const animatedStyle = obj8.useAnimatedStyle(re);
  let merged = Object.assign(StyleSheet.absoluteFillObject);
  obj10.backgroundColor = "transparent";
  const obj9 = {
    isEntranceJankFixEnabled: isMediaViewerEntranceJankFixEnabled,
    backdropLayout: memo,
    entranceAnimationDriver: sharedValue,
    interpolate: require("ReanimatedRexport").interpolate,
    translatePos,
    closePosition: tmp9,
  };
  function oe() {
    let opacity = 0;
    if (!isClosing.get()) {
      opacity = 0;
      if (!sharedValue1.get()) {
        if (overlayEnabled.get()) {
          if (!isInteracting.get()) {
            const obj2 = { easing: ReanimatedRexport.Easing.linear, duration: 150 };
            let withTimingResult = timing.withTiming(1, obj2);
          }
        }
        const obj3 = timing;
        const obj4 = { easing: ReanimatedRexport.Easing.linear, duration: 75 };
        const fn = function n() {
          c0(closure_2[5]).runOnJS(setShowHeader)(false);
        };
        const obj5 = { runOnJS: ReanimatedRexport.runOnJS, setShowHeader };
        fn.__closure = obj5;
        fn.__workletHash = 11572173694016;
        fn.__initData = __initData;
        withTimingResult = obj3.withTiming(0, obj4, "respect-motion-settings", fn);
      }
    }
    return { opacity };
  }
  const obj11 = require("ReanimatedRexport");
  oe.__closure = {
    isClosing,
    hideRelayoutSharedValue: sharedValue1,
    overlayEnabled,
    isInteracting,
    withTiming: require("timing").withTiming,
    Easing: require("ReanimatedRexport").Easing,
    runOnJS: require("ReanimatedRexport").runOnJS,
    setShowHeader: tmp6,
  };
  oe.__workletHash = 14874736878670;
  oe.__initData = __initData;
  const animatedStyle1 = obj11.useAnimatedStyle(oe);
  const obj12 = {
    isClosing,
    hideRelayoutSharedValue: sharedValue1,
    overlayEnabled,
    isInteracting,
    withTiming: require("timing").withTiming,
    Easing: require("ReanimatedRexport").Easing,
    runOnJS: require("ReanimatedRexport").runOnJS,
    setShowHeader: tmp6,
  };
  function se() {
    value = overlayEnabled.get();
    if (value) {
      value = !isInteracting.get();
    }
    if (value) {
      ReanimatedRexport.runOnJS(c0)(true);
    }
  }
  const obj13 = require("ReanimatedRexport");
  se.__closure = { overlayEnabled, isInteracting, runOnJS: require("ReanimatedRexport").runOnJS, setShowHeader: tmp6 };
  se.__workletHash = 2199049578465;
  se.__initData = __initData2;
  const derivedValue = obj13.useDerivedValue(se);
  const obj14 = { overlayEnabled, isInteracting, runOnJS: require("ReanimatedRexport").runOnJS, setShowHeader: tmp6 };
  function he() {
    let pan = null;
    if (!isMediaViewerEntranceJankFixEnabled) {
      pan = isClosing.pan;
    }
    const obj = {};
    const merged = Object.assign(pan);
    const items = [{ translateY: translatePos.get() }];
    obj.transform = items;
    let num = 0;
    if (!sharedValue1.get()) {
      const obj4 = { easing: ReanimatedRexport.Easing.linear, duration: 75 };
      num = timing.withTiming(1, obj4);
    }
    obj.opacity = num;
    return obj;
  }
  const obj15 = require("ReanimatedRexport");
  he.__closure = {
    isEntranceJankFixEnabled: isMediaViewerEntranceJankFixEnabled,
    styles: isClosing,
    translatePos,
    hideRelayoutSharedValue: sharedValue1,
    withTiming: require("timing").withTiming,
    Easing: require("ReanimatedRexport").Easing,
  };
  he.__workletHash = 9249298896824;
  he.__initData = __initData3;
  const animatedStyle2 = obj15.useAnimatedStyle(he);
  sharedValue1.useRef(null);
  const items3 = [sources.length > 1, animatedRef, sharedValue1];
  sharedValue1.useCallback(() => {
    let tmp = closure_6;
    if (closure_6) {
      tmp = null != animatedRef.current;
    }
    if (tmp) {
      let result = sharedValue1.set(true);
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        const result = sharedValue1.set(false);
      }, 250);
    }
  }, items3);
  const items4 = [sharedValue1];
  const callback1 = sharedValue1.useCallback(() => {
    const result = sharedValue1.set(false);
  }, items4);
  __initData = sharedValue1.useRef(false);
  const items5 = [width, height, __initData];
  const effect = sharedValue1.useEffect(() => {
    if (__initData.current) {
      callback();
    } else {
      tmp.current = true;
    }
  }, items5);
  const items6 = [__initData];
  const callback2 = sharedValue1.useCallback((orientation, orientation2) => {
    if (orientation.orientation !== orientation2.orientation) {
      callback();
    }
    if (closure_9) {
      const result = useVideoControls.unpauseCurrentVideoIfNeeded();
    }
  }, items6);
  const obj16 = {
    isEntranceJankFixEnabled: isMediaViewerEntranceJankFixEnabled,
    styles: isClosing,
    translatePos,
    hideRelayoutSharedValue: sharedValue1,
    withTiming: require("timing").withTiming,
    Easing: require("ReanimatedRexport").Easing,
  };
  const orientationListener = require("DeviceOrientation").useOrientationListener(callback2);
  let tmp31Result = isMediaViewerEntranceJankFixEnabled(memo, {
    entranceAnimationDriver: sharedValue,
    onContentSizeChange,
    onScroll,
    onLongPress,
    originLayout,
    panGestureConfig: mediaViewerPanGestureConfig,
    ref,
    renderMedia,
    sources,
    useItemVisible,
    windowHeight: height,
    windowWidth: width,
    index,
    zoomed,
  });
  const obj18 = { style: StyleSheet.absoluteFill, onAccessibilityEscape: dismiss, onLayout: callback1, children: null };
  const items7 = [
    isMediaViewerEntranceJankFixEnabled(height(11212), { barStyle: "light-content", hidden: !tmp5 }),
    ,
    ,
    ,
  ];
  const obj20 = { style: null };
  const items8 = [memo, animatedStyle];
  obj20.style = items8;
  items7[1] = isMediaViewerEntranceJankFixEnabled(height(5095).View, obj20);
  const obj21 = { ref: animatedRef, style: null, children: null };
  const items9 = [isClosing.pan, animatedStyle2];
  obj21.style = items9;
  const obj17 = require("DeviceOrientation");
  const obj19 = { barStyle: "light-content", hidden: !tmp5 };
  const tmp33 = dismiss;
  const tmp34 = animatedRef;
  if (isMediaViewerImprovementsEnabled) {
    const obj22 = {
      entranceAnimationDriver: sharedValue,
      onLongPress,
      onScrollWorklets,
      originLayout,
      pagerIndex,
      panGestureConfig: mediaViewerPanGestureConfig,
      renderMedia,
      sources,
      useItemVisible,
      windowWidth: width,
      windowHeight: height,
      zoomed,
    };
    tmp31Result = tmp31(tmp(14804), obj22);
  }
  obj21.children = tmp31Result;
  items7[2] = isMediaViewerEntranceJankFixEnabled(height(5096), obj21);
  const obj23 = { style: null, pointerEvents: null, children: null };
  const items10 = [sharedValue(sharedValue1.useState(obj10), 1)[0], animatedStyle1];
  obj23.style = items10;
  let str = "none";
  const tmp35 = height(5096);
  if (tmp5) {
    str = "box-none";
  }
  obj23.pointerEvents = str;
  obj23.children = renderOverlay(dismiss, overlayEnabled, sharedValue);
  items7[3] = isMediaViewerEntranceJankFixEnabled(height(5096), obj23);
  items7[4] = isMediaViewerEntranceJankFixEnabled(height(11702), {});
  obj18.children = items7;
  const children = tmp33(tmp34, obj18);
  return isMediaViewerEntranceJankFixEnabled(tmp7(7326).AnalyticsLocationProvider, {
    value: tmp3(value).analyticsLocations,
    children,
  });
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PlatformUtils = fn(1375);
let closure_9 = PlatformUtils.isAndroid();
let obj = { pan: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj.pan = obj3;
const styles = StyleSheet.create(obj);
let closure_11 = {
  code: "function MediaViewerTsx1(){const{zoomed,pinching}=this.__closure;return!zoomed.get()&&!pinching.get();}",
};
let closure_12 = {
  code: "function MediaViewerTsx2(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}",
};
let closure_13 = noop.memo(function MediaViewer(entranceAnimationDriver) {
  entranceAnimationDriver = entranceAnimationDriver.entranceAnimationDriver;
  const onLongPress = entranceAnimationDriver.onLongPress;
  const originLayout = entranceAnimationDriver.originLayout;
  const panGestureConfig = entranceAnimationDriver.panGestureConfig;
  const renderMedia = entranceAnimationDriver.renderMedia;
  const sources = entranceAnimationDriver.sources;
  const useItemVisible = entranceAnimationDriver.useItemVisible;
  const windowWidth = entranceAnimationDriver.windowWidth;
  const windowHeight = entranceAnimationDriver.windowHeight;
  const zoomed = entranceAnimationDriver.zoomed;
  let derivedValue;
  ({ onContentSizeChange, onScroll, ref, index } = entranceAnimationDriver);
  const sharedValue = entranceAnimationDriver(originLayout[5]).useSharedValue(false);
  const obj = entranceAnimationDriver(originLayout[5]);
  const fn = function k() {
    value = zoomed.get();
    let tmp2 = !value;
    if (!value) {
      tmp2 = !sharedValue.get();
    }
    return tmp2;
  };
  fn.__closure = { zoomed, pinching: sharedValue };
  fn.__workletHash = 9157951736691;
  fn.__initData = derivedValue;
  derivedValue = entranceAnimationDriver(originLayout[5]).useDerivedValue(fn);
  const items = [sharedValue];
  const items1 = [sharedValue];
  const callback = renderMedia.useCallback(
    (nativeEvent) => sharedValue.set(2 === nativeEvent.nativeEvent.touches.length),
    items,
  );
  const callback1 = renderMedia.useCallback(() => sharedValue.set(false), items1);
  const obj2 = entranceAnimationDriver(originLayout[5]);
  const mediaViewerPanGesture = entranceAnimationDriver(originLayout[6]).useMediaViewerPanGesture(
    panGestureConfig,
    derivedValue,
  );
  const panGestureGenerator = mediaViewerPanGesture.panGestureGenerator;
  const items2 = [
    entranceAnimationDriver,
    onLongPress,
    originLayout,
    panGestureConfig,
    panGestureGenerator,
    renderMedia,
    sources,
    useItemVisible,
    windowHeight,
    windowWidth,
    zoomed,
  ];
  const callback2 = renderMedia.useCallback(
    (arg0, index) =>
      React5(MediaViewerItem.MediaViewerItem, {
        originLayout,
        renderMedia,
        onLongPress,
        windowWidth,
        windowHeight,
        panGestureConfig,
        entranceAnimationDriver,
        source: sources[index],
        index,
        zoomed,
        panGesture: panGestureGenerator(index),
        useItemVisible,
      }),
    items2,
  );
  const obj3 = entranceAnimationDriver(originLayout[6]);
  class M {
    constructor() {
      obj = { scrollEnabled: closure_11.get() };
      return obj;
    }
  }
  M.__closure = { scrollEnabled: derivedValue };
  M.__workletHash = 13550782123441;
  M.__initData = panGestureGenerator;
  const animatedProps = entranceAnimationDriver(originLayout[5]).useAnimatedProps(M);
  const obj4 = entranceAnimationDriver(originLayout[5]);
  const obj5 = { gesture: mediaViewerPanGesture.nativeGesture, children: null };
  const obj6 = {
    ref,
    style: useItemVisible.absoluteFill,
    sections: null,
    onTouchStart: callback,
    onTouchEnd: callback1,
    onTouchCancel: callback1,
    initialScrollItem: onLongPress(originLayout[8])(index),
    automaticallyAdjustContentInsets: false,
    showsVerticalScrollIndicator: false,
    showsHorizontalScrollIndicator: false,
    itemSize: windowWidth,
    renderItem: callback2,
    onContentSizeChange,
    pagingEnabled: true,
    onScroll,
    scrollEventThrottle: 16,
    animatedProps,
    disableLegacyGestureHandling: true,
    chunkBase: windowWidth,
    horizontal: true,
  };
  const items3 = [sources.length];
  obj6.sections = items3;
  obj5.children = windowWidth(entranceAnimationDriver(originLayout[10]).AnimatedFastList, obj6);
  return windowWidth(entranceAnimationDriver(originLayout[9]).GestureDetector, obj5);
});
let __initData = {
  code: "function MediaViewerTsx3(){const{isEntranceJankFixEnabled,backdropLayout,entranceAnimationDriver,interpolate,translatePos,closePosition}=this.__closure;return{...(isEntranceJankFixEnabled?null:backdropLayout),opacity:Math.min(entranceAnimationDriver.get(),interpolate(translatePos.get(),[-closePosition,0,closePosition],[0,1,0]))};}",
};
let closure_15 = {
  code: "function MediaViewerTsx4(){const{isClosing,hideRelayoutSharedValue,overlayEnabled,isInteracting,withTiming,Easing,runOnJS,setShowHeader}=this.__closure;return{opacity:isClosing.get()||hideRelayoutSharedValue.get()?0:overlayEnabled.get()&&!isInteracting.get()?withTiming(1,{easing:Easing.linear,duration:150}):withTiming(0,{easing:Easing.linear,duration:75},'respect-motion-settings',function(){runOnJS(setShowHeader)(false);})};}",
};
let closure_16 = {
  code: "function MediaViewerTsx5(){const{runOnJS,setShowHeader}=this.__closure;runOnJS(setShowHeader)(false);}",
};
const __initData2 = {
  code: "function MediaViewerTsx6(){const{overlayEnabled,isInteracting,runOnJS,setShowHeader}=this.__closure;if(overlayEnabled.get()&&!isInteracting.get()){runOnJS(setShowHeader)(true);}}",
};
const __initData3 = {
  code: "function MediaViewerTsx7(){const{isEntranceJankFixEnabled,styles,translatePos,hideRelayoutSharedValue,withTiming,Easing}=this.__closure;return{...(isEntranceJankFixEnabled?null:styles.pan),transform:[{translateY:translatePos.get()}],opacity:hideRelayoutSharedValue.get()?0:withTiming(1,{easing:Easing.linear,duration:75})};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewer.tsx");

export default noop.memo(function MediaViewerWithProvider(arg0) {
  const obj = { children: null };
  const merged = Object.assign(arg0);
  obj.children = React5(MediaViewer, {});
  return React5(MediaViewerDimensionsContext.MediaViewerDimensionsProvider, obj);
});
