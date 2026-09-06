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
  ({ onClose, syncer } = arg0);
  ({ index, sources } = syncer);
  height = undefined;
  let sharedValue;
  let sharedValue1;
  translatePos = undefined;
  ref = undefined;
  __initData = undefined;
  ({ onLongPress, originLayout, renderMedia, renderOverlay, swipeVelocityThreshold } = arg0);
  ({ useViewerProps, zoomed } = syncer);
  value = [height(7182).MEDIA_VIEWER];
  let tmp = height;
  const tmp3 = height(7162);
  [tmp5, tmp6] = sharedValue(sharedValue1.useState(true), 2);
  const _require = tmp6;
  let obj = require("MediaViewerDimensionsContext");
  const mediaViewerDimensions = obj.useMediaViewerDimensions();
  ({ width, height } = mediaViewerDimensions);
  const tmp9 = height(12986)({ index, onClose, sources, windowHeight: height, windowWidth: width });
  dependencyMap = tmp9;
  let obj1 = require("ReanimatedRexport");
  sharedValue = obj1.useSharedValue(0);
  let obj2 = require("ReanimatedRexport");
  sharedValue1 = obj2.useSharedValue(false);
  let obj3 = require("ReanimatedRexport");
  const animatedRef = obj3.useAnimatedRef();
  closure_6 = tmp13;
  const viewerProps = useViewerProps();
  ({ ref, onScroll, onContentSizeChange, useItemVisible } = viewerProps);
  let obj4 = require("useMediaViewerPanGesture");
  const mediaViewerPanGestureConfig = obj4.useMediaViewerPanGestureConfig(tmp9, swipeVelocityThreshold, onClose);
  ({ dismiss, translatePos } = mediaViewerPanGestureConfig);
  const isClosing = mediaViewerPanGestureConfig.isClosing;
  const isInteracting = mediaViewerPanGestureConfig.isInteracting;
  const overlayEnabled = mediaViewerPanGestureConfig.overlayEnabled;
  const absoluteFillObject = closure_6.absoluteFillObject;
  let obj5 = require("ReanimatedRexport");
  class M {
    constructor() {
      obj = {};
      merged = Object.assign(absoluteFillObject);
      obj.height = height;
      obj.backgroundColor = "black";
      value = closure_3.get();
      obj2 = closure_0(closure_2[5]);
      items = [, ,];
      items[0] = -closure_2;
      items[1] = 0;
      items[2] = closure_2;
      obj.opacity = Math.min(value, obj2.interpolate(translatePos.get(), items, [0, 1, 0]));
      return obj;
    }
  }
  obj = {
    absoluteFillObject,
    windowHeight: height,
    entranceAnimationDriver: sharedValue,
    interpolate: require("ReanimatedRexport").interpolate,
    translatePos,
    closePosition: tmp9,
  };
  M.__closure = obj;
  M.__workletHash = 10332062530694;
  M.__initData = __initData;
  obj = {};
  const animatedStyle = obj5.useAnimatedStyle(M);
  let merged = Object.assign(closure_6.absoluteFillObject);
  obj.backgroundColor = "transparent";
  const tmp4 = sharedValue(sharedValue1.useState(true), 2);
  const tmp7 = _require;
  class P {
    constructor() {
      opacity = 0;
      if (!isClosing.get()) {
        tmp = closure_4;
        opacity = 0;
        if (!closure_4.get()) {
          tmp2 = overlayEnabled;
          if (overlayEnabled.get()) {
            tmp3 = isInteracting;
            if (!isInteracting.get()) {
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = closure_0(closure_2[15]);
              obj = { easing: null, duration: 150 };
              tmp6 = closure_0;
              tmp7 = closure_2;
              obj.easing = closure_0(closure_2[5]).Easing.linear;
              num2 = 1;
              withTimingResult = obj.withTiming(1, obj);
            }
            tmp20 = withTimingResult;
          }
          tmp9 = closure_0;
          tmp10 = closure_2;
          obj3 = closure_0(closure_2[15]);
          obj1 = { easing: null, duration: 75 };
          tmp11 = closure_0;
          tmp12 = closure_2;
          obj1.easing = closure_0(closure_2[5]).Easing.linear;
          fn = function n() {
            c0(closure_2[5]).runOnJS(setShowHeader)(false);
          };
          obj2 = { runOnJS: null, setShowHeader: null };
          tmp13 = closure_0;
          tmp14 = closure_2;
          obj2.runOnJS = closure_0(closure_2[5]).runOnJS;
          tmp15 = closure_0;
          obj2.setShowHeader = closure_0;
          fn.__closure = obj2;
          num3 = 11572173694016;
          fn.__workletHash = 11572173694016;
          tmp16 = closure_15;
          fn.__initData = closure_15;
          str = "respect-motion-settings";
          tmp17 = obj3;
          num4 = 0;
          tmp18 = obj1;
          tmp19 = fn;
          withTimingResult = obj3.withTiming(0, obj1, "respect-motion-settings", fn);
        }
      }
      return { opacity };
    }
  }
  obj1 = {
    isClosing,
    hideRelayoutSharedValue: sharedValue1,
    overlayEnabled,
    isInteracting,
    withTiming: require("timing").withTiming,
    Easing: require("ReanimatedRexport").Easing,
    runOnJS: require("ReanimatedRexport").runOnJS,
    setShowHeader: tmp6,
  };
  P.__closure = obj1;
  P.__workletHash = 14874736878670;
  P.__initData = __initData;
  const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(P);
  const obj9 = require("ReanimatedRexport");
  let fn = function x() {
    value = overlayEnabled.get();
    if (value) {
      value = !isInteracting.get();
    }
    if (value) {
      ReanimatedRexport.runOnJS(c0)(true);
    }
  };
  obj2 = { overlayEnabled, isInteracting, runOnJS: require("ReanimatedRexport").runOnJS, setShowHeader: tmp6 };
  fn.__closure = obj2;
  fn.__workletHash = 2199049578465;
  fn.__initData = __initData3;
  const derivedValue = require("ReanimatedRexport").useDerivedValue(fn);
  const obj11 = require("ReanimatedRexport");
  function le() {
    let obj = {};
    const merged = Object.assign(absoluteFillObject);
    obj.alignItems = "center";
    obj.justifyContent = "center";
    obj = { translateY: translatePos.get() };
    const items = [obj];
    obj.transform = items;
    let num = 0;
    if (!sharedValue1.get()) {
      obj = { easing: ReanimatedRexport.Easing.linear, duration: 75 };
      num = timing.withTiming(1, obj);
    }
    obj.opacity = num;
    return obj;
  }
  obj3 = {
    absoluteFillObject,
    translatePos,
    hideRelayoutSharedValue: sharedValue1,
    withTiming: require("timing").withTiming,
    Easing: require("ReanimatedRexport").Easing,
  };
  le.__closure = obj3;
  le.__workletHash = 8244409104374;
  le.__initData = __initData4;
  const animatedStyle2 = require("ReanimatedRexport").useAnimatedStyle(le);
  ref = sharedValue1.useRef(null);
  const items1 = [sources.length > 1, animatedRef, sharedValue1];
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
  }, items1);
  const items2 = [sharedValue1];
  const callback1 = sharedValue1.useCallback(() => {
    const result = sharedValue1.set(false);
  }, items2);
  __initData = sharedValue1.useRef(false);
  const items3 = [width, height, __initData];
  const effect = sharedValue1.useEffect(() => {
    if (ref2.current) {
      callback();
    } else {
      tmp.current = true;
    }
  }, items3);
  const items4 = [__initData];
  const callback2 = sharedValue1.useCallback((orientation, orientation2) => {
    if (orientation.orientation !== orientation2.orientation) {
      callback();
    }
    if (closure_9) {
      const result = useVideoControls.unpauseCurrentVideoIfNeeded();
    }
  }, items4);
  const obj13 = require("ReanimatedRexport");
  const orientationListener = require("DeviceOrientation").useOrientationListener(callback2);
  obj4 = { style: closure_6.absoluteFill, onAccessibilityEscape: dismiss, onLayout: callback1, children: null };
  const obj15 = require("DeviceOrientation");
  obj5 = { barStyle: "light-content", hidden: !tmp5 };
  const items5 = [
    translatePos(height(9481), obj5),
    translatePos(height(4296).View, { style: animatedStyle }),
    translatePos(height(4297), {
      ref: animatedRef,
      style: animatedStyle2,
      children: translatePos(ref, {
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
      }),
    }),
    ,
  ];
  const obj6 = { style: null, pointerEvents: null, children: null };
  const items6 = [sharedValue(sharedValue1.useState(obj), 1)[0], animatedStyle1];
  obj6.style = items6;
  let str = "none";
  const tmp27 = translatePos(ref, {
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
  const tmp28 = isClosing;
  const tmp29 = animatedRef;
  if (tmp5) {
    str = "box-none";
  }
  obj6.pointerEvents = str;
  obj6.children = renderOverlay(dismiss, overlayEnabled);
  items5[3] = translatePos(height(4297), obj6);
  items5[4] = translatePos(tmp(9483), {});
  obj4.children = items5;
  const children = tmp28(tmp29, obj4);
  return translatePos(tmp7(7162).AnalyticsLocationProvider, { value: tmp3(value).analyticsLocations, children });
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PlatformUtils = fn(1115);
let closure_9 = PlatformUtils.isAndroid();
let closure_10 = {
  code: "function MediaViewerTsx1(){const{zoomed,pinching}=this.__closure;return!zoomed.get()&&!pinching.get();}",
};
let closure_11 = {
  code: "function MediaViewerTsx2(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}",
};
let closure_12 = noop.memo((entranceAnimationDriver) => {
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
  let panGestureGenerator;
  ({ onContentSizeChange, onScroll, ref, index } = entranceAnimationDriver);
  let obj = entranceAnimationDriver(originLayout[5]);
  const sharedValue = obj.useSharedValue(false);
  class T {
    constructor() {
      value = zoomed.get();
      tmp2 = !value;
      if (!value) {
        tmp3 = closure_10;
        tmp2 = !closure_10.get();
      }
      return tmp2;
    }
  }
  T.__closure = { zoomed, pinching: sharedValue };
  T.__workletHash = 9157951736691;
  T.__initData = sharedValue;
  derivedValue = entranceAnimationDriver(originLayout[5]).useDerivedValue(T);
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
  panGestureGenerator = mediaViewerPanGesture.panGestureGenerator;
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
  class H {
    constructor() {
      obj = { scrollEnabled: closure_11.get() };
      return obj;
    }
  }
  H.__closure = { scrollEnabled: derivedValue };
  H.__workletHash = 13550782123441;
  H.__initData = derivedValue;
  const animatedProps = entranceAnimationDriver(originLayout[5]).useAnimatedProps(H);
  const obj4 = entranceAnimationDriver(originLayout[5]);
  obj = { gesture: mediaViewerPanGesture.nativeGesture, children: null };
  obj = {
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
  obj.sections = items3;
  obj.children = windowWidth(entranceAnimationDriver(originLayout[10]).AnimatedFastList, obj);
  return windowWidth(entranceAnimationDriver(originLayout[9]).GestureDetector, obj);
});
let closure_13 = {
  code: "function MediaViewerTsx3(){const{absoluteFillObject,windowHeight,entranceAnimationDriver,interpolate,translatePos,closePosition}=this.__closure;return{...absoluteFillObject,height:windowHeight,backgroundColor:'black',opacity:Math.min(entranceAnimationDriver.get(),interpolate(translatePos.get(),[-closePosition,0,closePosition],[0,1,0]))};}",
};
let __initData = {
  code: "function MediaViewerTsx4(){const{isClosing,hideRelayoutSharedValue,overlayEnabled,isInteracting,withTiming,Easing,runOnJS,setShowHeader}=this.__closure;return{opacity:isClosing.get()||hideRelayoutSharedValue.get()?0:overlayEnabled.get()&&!isInteracting.get()?withTiming(1,{easing:Easing.linear,duration:150}):withTiming(0,{easing:Easing.linear,duration:75},'respect-motion-settings',function(){runOnJS(setShowHeader)(false);})};}",
};
const __initData2 = {
  code: "function MediaViewerTsx5(){const{runOnJS,setShowHeader}=this.__closure;runOnJS(setShowHeader)(false);}",
};
const __initData3 = {
  code: "function MediaViewerTsx6(){const{overlayEnabled,isInteracting,runOnJS,setShowHeader}=this.__closure;if(overlayEnabled.get()&&!isInteracting.get()){runOnJS(setShowHeader)(true);}}",
};
const __initData4 = {
  code: "function MediaViewerTsx7(){const{absoluteFillObject,translatePos,hideRelayoutSharedValue,withTiming,Easing}=this.__closure;return{...absoluteFillObject,alignItems:'center',justifyContent:'center',transform:[{translateY:translatePos.get()}],opacity:hideRelayoutSharedValue.get()?0:withTiming(1,{easing:Easing.linear,duration:75})};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewer.tsx");

export default noop.memo((arg0) => {
  let obj = { children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.children = React5(MediaViewer, obj);
  return React5(MediaViewerDimensionsContext.MediaViewerDimensionsProvider, obj);
});
