// discord_app/modules/media_viewer/native/components/MediaViewer.tsx
import MediaViewerDimensionsProvider from "../MediaViewerDimensionsContext.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import set from "../../../../utils/PlatformUtils.tsx";
import { handleOrientationChange } from "../../../device/native/DeviceOrientation.tsx";
import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";
import { MediaViewerDimensionsProvider } from "../MediaViewerDimensionsContext.tsx";
import { useMediaViewerPanGestureConfig } from "../useMediaViewerPanGesture.tsx";

require = arg1;
function MediaViewer(arg0) {
  ({ onClose, syncer } = arg0);
  ({ index, sources } = syncer);
  let _require;
  height = undefined;
  dependencyMap = undefined;
  let sharedValue;
  let sharedValue1;
  let animatedRef;
  closure_6 = undefined;
  translatePos = undefined;
  let isClosing;
  let isInteracting;
  let overlayEnabled;
  let absoluteFillObject;
  closure_12 = undefined;
  let callback;
  closure_14 = undefined;
  ({ onLongPress, originLayout, renderMedia, renderOverlay, swipeVelocityThreshold } = arg0);
  ({ useViewerProps, zoomed } = syncer);
  let value = [height(5973).MEDIA_VIEWER];
  let tmp = height;
  const tmp3 = height(5953);
  [tmp5, tmp6] = sharedValue(sharedValue1.useState(true), 2);
  _require = tmp6;
  let obj = MediaViewerDimensionsProvider;
  const mediaViewerDimensions = obj.useMediaViewerDimensions();
  ({ width, height } = mediaViewerDimensions);
  const tmp9 = height(12849)({ index, onClose, sources, windowHeight: height, windowWidth: width });
  dependencyMap = tmp9;
  obj1 = ReanimatedRexport;
  sharedValue = obj1.useSharedValue(0);
  let obj2 = ReanimatedRexport;
  sharedValue1 = obj2.useSharedValue(false);
  let obj3 = ReanimatedRexport;
  animatedRef = obj3.useAnimatedRef();
  closure_6 = tmp13;
  const viewerProps = useViewerProps();
  ({ ref, onScroll, onContentSizeChange, useItemVisible } = viewerProps);
  let obj4 = useMediaViewerPanGestureConfig;
  const mediaViewerPanGestureConfig = obj4.useMediaViewerPanGestureConfig(tmp9, swipeVelocityThreshold, onClose);
  ({ dismiss, translatePos } = mediaViewerPanGestureConfig);
  isClosing = mediaViewerPanGestureConfig.isClosing;
  isInteracting = mediaViewerPanGestureConfig.isInteracting;
  overlayEnabled = mediaViewerPanGestureConfig.overlayEnabled;
  absoluteFillObject = closure_6.absoluteFillObject;
  let obj5 = ReanimatedRexport;
  class M {
    constructor() {
      obj = {};
      merged = Object.assign(absoluteFillObject);
      obj.height = height;
      obj.backgroundColor = "black";
      value = closure_3.get();
      obj2 = closure_0(closure_2[5]);
      items = [, , ];
      items[0] = -closure_2;
      items[1] = 0;
      items[2] = closure_2;
      obj.opacity = Math.min(value, obj2.interpolate(translatePos.get(), items, [0, 1, 0]));
      return obj;
    }
  }
  obj = { absoluteFillObject, windowHeight: height, entranceAnimationDriver: sharedValue, interpolate: require("../../../reanimated/ReanimatedRexport.tsx").interpolate, translatePos, closePosition: tmp9 };
  M.__closure = obj;
  M.__workletHash = 10332062530694;
  M.__initData = callback;
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
              obj[0] = closure_0(closure_2[5]).Easing.linear;
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
          obj1[0] = closure_0(closure_2[5]).Easing.linear;
          fn = function n() {
            closure_1_0(closure_1_2[5]).runOnJS(closure_0)(false);
          };
          obj2 = { runOnJS: null, setShowHeader: null };
          tmp13 = closure_0;
          tmp14 = closure_2;
          obj2[0] = closure_0(closure_2[5]).runOnJS;
          tmp15 = closure_0;
          obj2[1] = closure_0;
          fn.__closure = obj2;
          num3 = 11572173694016;
          fn.__workletHash = 11572173694016;
          tmp16 = closure_1_15;
          fn.__initData = closure_1_15;
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
  obj1 = { isClosing, hideRelayoutSharedValue: sharedValue1, overlayEnabled, isInteracting, withTiming: require("../../../../design/animation/reanimated/timing/timing.tsx").withTiming, Easing: require("../../../reanimated/ReanimatedRexport.tsx").Easing, runOnJS: require("../../../reanimated/ReanimatedRexport.tsx").runOnJS, setShowHeader: tmp6 };
  P.__closure = obj1;
  P.__workletHash = 14874736878670;
  P.__initData = closure_14;
  const animatedStyle1 = require("../../../reanimated/ReanimatedRexport.tsx").useAnimatedStyle(P);
  const obj9 = ReanimatedRexport;
  let fn = function x() {
    let value = overlayEnabled.get();
    if (value) {
      value = !isInteracting.get();
    }
    if (value) {
      _undefined(4217).runOnJS(_undefined)(true);
      const obj = _undefined(4217);
    }
  };
  obj2 = { overlayEnabled, isInteracting, runOnJS: require("../../../reanimated/ReanimatedRexport.tsx").runOnJS, setShowHeader: tmp6 };
  fn.__closure = obj2;
  fn.__workletHash = 2199049578465;
  fn.__initData = closure_16;
  const derivedValue = require("../../../reanimated/ReanimatedRexport.tsx").useDerivedValue(fn);
  const obj11 = ReanimatedRexport;
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
      obj = { easing: null, duration: 75 };
      obj[0] = _undefined(4217).Easing.linear;
      num = _undefined(4479).withTiming(1, obj);
      const obj3 = _undefined(4479);
    }
    obj.opacity = num;
    return obj;
  }
  obj3 = { absoluteFillObject, translatePos, hideRelayoutSharedValue: sharedValue1, withTiming: require("../../../../design/animation/reanimated/timing/timing.tsx").withTiming, Easing: require("../../../reanimated/ReanimatedRexport.tsx").Easing };
  le.__closure = obj3;
  le.__workletHash = 8244409104374;
  le.__initData = closure_17;
  const animatedStyle2 = require("../../../reanimated/ReanimatedRexport.tsx").useAnimatedStyle(le);
  closure_12 = sharedValue1.useRef(null);
  const items1 = [sources.length > 1, animatedRef, sharedValue1];
  callback = sharedValue1.useCallback(() => {
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
        const result = closure_4.set(false);
      }, 250);
    }
  }, items1);
  const items2 = [sharedValue1];
  const callback1 = sharedValue1.useCallback(() => {
    const result = sharedValue1.set(false);
  }, items2);
  closure_14 = sharedValue1.useRef(false);
  const items3 = [width, height, callback];
  const effect = sharedValue1.useEffect(() => {
    if (ref2.current) {
      callback();
    } else {
      tmp.current = true;
    }
  }, items3);
  const items4 = [callback];
  const callback2 = sharedValue1.useCallback((orientation, orientation2) => {
    if (orientation.orientation !== orientation2.orientation) {
      callback();
    }
    if (isInteracting) {
      const result = _undefined(8574).unpauseCurrentVideoIfNeeded();
      const obj = _undefined(8574);
    }
  }, items4);
  const obj13 = ReanimatedRexport;
  const orientationListener = require("../../../device/native/DeviceOrientation.tsx").useOrientationListener(callback2);
  obj4 = { style: closure_6.absoluteFill, onAccessibilityEscape: dismiss, onLayout: callback1, children: null };
  const obj15 = handleOrientationChange;
  obj5 = { barStyle: "light-content", hidden: !tmp5 };
  const items5 = [translatePos(height(9530), obj5), translatePos(height(4217).View, { style: animatedStyle }), translatePos(height(4218), { ref: animatedRef, style: animatedStyle2, children: translatePos(closure_12, { entranceAnimationDriver: sharedValue, onContentSizeChange, onScroll, onLongPress, originLayout, panGestureConfig: mediaViewerPanGestureConfig, ref, renderMedia, sources, useItemVisible, windowHeight: height, windowWidth: width, index, zoomed }) }), , ];
  const obj6 = { style: items6, pointerEvents: null, children: null };
  items6 = [sharedValue(sharedValue1.useState(obj), 1)[0], animatedStyle1];
  let str = "none";
  const tmp27 = translatePos(closure_12, { entranceAnimationDriver: sharedValue, onContentSizeChange, onScroll, onLongPress, originLayout, panGestureConfig: mediaViewerPanGestureConfig, ref, renderMedia, sources, useItemVisible, windowHeight: height, windowWidth: width, index, zoomed });
  const tmp28 = isClosing;
  const tmp29 = animatedRef;
  if (tmp5) {
    str = "box-none";
  }
  obj6[1] = str;
  obj6[2] = renderOverlay(dismiss, overlayEnabled);
  items5[3] = translatePos(height(4218), obj6);
  items5[4] = translatePos(tmp(9532), {});
  obj4[3] = items5;
  const children = tmp28(tmp29, obj4);
  return translatePos(tmp7(5953).AnalyticsLocationProvider, { value: tmp3(value).analyticsLocations, children });
}
let c4 = importAllResult;
({ View: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = set.isAndroid();
let closure_10 = { code: "function MediaViewerTsx1(){const{zoomed,pinching}=this.__closure;return!zoomed.get()&&!pinching.get();}" };
let closure_11 = { code: "function MediaViewerTsx2(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}" };
let closure_12 = importAllResult.memo((entranceAnimationDriver) => {
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
  let sharedValue;
  let derivedValue;
  let panGestureGenerator;
  ({ onContentSizeChange, onScroll, ref, index } = entranceAnimationDriver);
  let obj = entranceAnimationDriver(originLayout[5]);
  sharedValue = obj.useSharedValue(false);
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
  const callback = renderMedia.useCallback((nativeEvent) => sharedValue.set(2 === nativeEvent.nativeEvent.touches.length), items);
  const callback1 = renderMedia.useCallback(() => sharedValue.set(false), items1);
  const obj2 = entranceAnimationDriver(originLayout[5]);
  const mediaViewerPanGesture = entranceAnimationDriver(originLayout[6]).useMediaViewerPanGesture(panGestureConfig, derivedValue);
  panGestureGenerator = mediaViewerPanGesture.panGestureGenerator;
  const items2 = [entranceAnimationDriver, onLongPress, originLayout, panGestureConfig, panGestureGenerator, renderMedia, sources, useItemVisible, windowHeight, windowWidth, zoomed];
  const callback2 = renderMedia.useCallback((arg0, index) => windowWidth(entranceAnimationDriver(originLayout[7]).MediaViewerItem, { originLayout, renderMedia, onLongPress, windowWidth, windowHeight, panGestureConfig, entranceAnimationDriver, source: sources[index], index, zoomed, panGesture: panGestureGenerator(index), useItemVisible }), items2);
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
  obj = { gesture: mediaViewerPanGesture.nativeGesture, children: windowWidth(entranceAnimationDriver(originLayout[10]).AnimatedFastList, obj) };
  obj = { ref, style: useItemVisible.absoluteFill, sections: items3, onTouchStart: callback, onTouchEnd: callback1, onTouchCancel: callback1, initialScrollItem: onLongPress(originLayout[8])(index), automaticallyAdjustContentInsets: false, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, itemSize: windowWidth, renderItem: callback2, onContentSizeChange, pagingEnabled: true, onScroll, scrollEventThrottle: 16, animatedProps, disableLegacyGestureHandling: true, chunkBase: windowWidth, horizontal: true };
  items3 = [sources.length];
  return windowWidth(entranceAnimationDriver(originLayout[9]).GestureDetector, obj);
});
let closure_13 = { code: "function MediaViewerTsx3(){const{absoluteFillObject,windowHeight,entranceAnimationDriver,interpolate,translatePos,closePosition}=this.__closure;return{...absoluteFillObject,height:windowHeight,backgroundColor:'black',opacity:Math.min(entranceAnimationDriver.get(),interpolate(translatePos.get(),[-closePosition,0,closePosition],[0,1,0]))};}" };
let closure_14 = { code: "function MediaViewerTsx4(){const{isClosing,hideRelayoutSharedValue,overlayEnabled,isInteracting,withTiming,Easing,runOnJS,setShowHeader}=this.__closure;return{opacity:isClosing.get()||hideRelayoutSharedValue.get()?0:overlayEnabled.get()&&!isInteracting.get()?withTiming(1,{easing:Easing.linear,duration:150}):withTiming(0,{easing:Easing.linear,duration:75},'respect-motion-settings',function(){runOnJS(setShowHeader)(false);})};}" };
let closure_15 = { code: "function MediaViewerTsx5(){const{runOnJS,setShowHeader}=this.__closure;runOnJS(setShowHeader)(false);}" };
let closure_16 = { code: "function MediaViewerTsx6(){const{overlayEnabled,isInteracting,runOnJS,setShowHeader}=this.__closure;if(overlayEnabled.get()&&!isInteracting.get()){runOnJS(setShowHeader)(true);}}" };
let closure_17 = { code: "function MediaViewerTsx7(){const{absoluteFillObject,translatePos,hideRelayoutSharedValue,withTiming,Easing}=this.__closure;return{...absoluteFillObject,alignItems:'center',justifyContent:'center',transform:[{translateY:translatePos.get()}],opacity:hideRelayoutSharedValue.get()?0:withTiming(1,{easing:Easing.linear,duration:75})};}" };
let result = set.fileFinishedImporting("modules/media_viewer/native/components/MediaViewer.tsx");

export default importAllResult.memo((arg0) => {
  let obj = { children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj[0] = callback(MediaViewer, obj);
  return callback(MediaViewerDimensionsProvider.MediaViewerDimensionsProvider, obj);
});