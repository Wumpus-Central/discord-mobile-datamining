// === Module 15033: MediaViewer ===

// Module 15033 (MediaViewer)
import _modDef1652 from "module_1652" /* 1652 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 6154 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7387 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7412 */;
import useVideoControls from "useVideoControls" /* 8910 */;
import MediaViewerDimensionsContext from "MediaViewerDimensionsContext" /* 8941 */;
import StatusBarDefault from "StatusBar" /* 11352 */;
import HomeIndicatorDefault from "HomeIndicator" /* 11866 */;
import MediaViewerItem from "MediaViewerItem" /* 15035 */;
import useMediaViewerClosePositionDefault from "useMediaViewerClosePosition" /* 15040 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function MediaViewer(arg0) {
  ({ onClose, onLongPress, originLayout, renderMedia, syncer } = arg0);
  ({ index, sources, zoomed } = syncer);
  _require = undefined;
  c3 = undefined;
  noop = undefined;
  StyleSheet = undefined;
  let callback;
  let ref2;
  ({ renderOverlay, swipeVelocityThreshold } = arg0);
  value = [AnalyticsLocationDefault.MEDIA_VIEWER];
  const tmp3 = useAnalyticsLocationsDefault;
  const tmp4 = c3;
  [tmp6, tmp7] = c3(noop.useState(true), 2);
  const tmp5 = c3(noop.useState(true), 2);
  const mediaViewerDimensions = require("MediaViewerDimensionsContext").useMediaViewerDimensions();
  ({ width, height } = mediaViewerDimensions);
  _require = height;
  const tmp10 = useMediaViewerClosePositionDefault({ index, onClose, sources, windowHeight: height, windowWidth: width });
  let obj2 = require("MediaViewerDimensionsContext");
  const sharedValue = require("module_1652").useSharedValue(0);
  let obj3 = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(false);
  const obj4 = require("module_1652");
  const animatedRef = require("module_1652").useAnimatedRef();
  const obj5 = require("module_1652");
  const isMediaViewerImprovementsEnabled = require("MediaViewerImprovementsExperiment").useIsMediaViewerImprovementsEnabled();
  const obj6 = require("MediaViewerImprovementsExperiment");
  const isMediaViewerEntranceJankFixEnabled = require("MediaViewerEntranceJankExperiment").useIsMediaViewerEntranceJankFixEnabled();
  const viewerProps = syncer.useViewerProps(isMediaViewerImprovementsEnabled);
  ({ useItemVisible, ref, onScroll, onScrollWorklets, pagerIndex, onContentSizeChange } = viewerProps);
  const obj7 = require("MediaViewerEntranceJankExperiment");
  const mediaViewerPanGestureConfig = require("useMediaViewerPanGesture").useMediaViewerPanGestureConfig(tmp10, swipeVelocityThreshold, onClose);
  const dismiss = mediaViewerPanGestureConfig.dismiss;
  noop = dismiss;
  ({ translatePos, isClosing } = mediaViewerPanGestureConfig);
  ({ isInteracting, overlayEnabled } = mediaViewerPanGestureConfig);
  let items1 = [dismiss, isClosing];
  const obj8 = require("useMediaViewerPanGesture");
  useBackPressHandlerDefault(noop.useCallback(() => {
    if (!_undefined5.get()) {
      _undefined4();
    }
    return true;
  }, items1));
  const items2 = [height];
  const memo = noop.useMemo(() => {
    const obj = {};
    const merged = Object.assign(StyleSheet.absoluteFillObject);
    obj.height = height;
    obj.backgroundColor = "black";
    return obj;
  }, items2);
  const items3 = [closure_14, isMediaViewerEntranceJankFixEnabled, memo, sharedValue, require("module_1652").interpolate, translatePos, tmp10];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items3;
  class MediaViewerTsx3 {
    constructor() {
      tmp = null;
      if (!closure_0) {
        tmp = closure_1;
      }
      obj = {};
      merged = Object.assign(tmp);
      value = closure_2.get();
      items = [, , ];
      items[0] = -closure_5;
      items[1] = 0;
      items[2] = closure_5;
      obj.opacity = Math.min(value, closure_3(closure_4.get(), items, [0, 1, 0]));
      return obj;
    }
  }
  const items4 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
  MediaViewerTsx3.__closure = items4;
  MediaViewerTsx3.__workletHash = 1493258125771;
  MediaViewerTsx3.__initData = tmp22;
  const obj10 = {};
  const animatedStyle = require("module_1652").useAnimatedStyle(MediaViewerTsx3);
  let merged = Object.assign(StyleSheet.absoluteFillObject);
  obj10.backgroundColor = "transparent";
  const obj9 = require("module_1652");
  const tmp30 = StyleSheet;
  const items5 = [closure_16, isClosing, sharedValue1, overlayEnabled, isInteracting, require("timing/timing").withTiming, require("module_1652").Easing, closure_15, require("module_1705").scheduleOnRN, tmp7];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  StyleSheet = undefined;
  callback = undefined;
  ref2 = undefined;
  [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41] = items5;
  class MediaViewerTsx5 {
    constructor() {
      opacity = 0;
      if (!closure_0.get()) {
        tmp = closure_1;
        opacity = 0;
        if (!closure_1.get()) {
          tmp2 = closure_2;
          if (closure_2.get()) {
            tmp3 = closure_3;
            if (!closure_3.get()) {
              tmp4 = closure_4;
              obj = { easing: null, duration: 150 };
              tmp5 = closure_5;
              obj.easing = closure_5.linear;
              num2 = 1;
              tmp6 = closure_4(1, obj);
            }
            tmp17 = tmp6;
          }
          obj1 = { easing: null, duration: 75 };
          tmp7 = closure_5;
          obj1.easing = closure_5.linear;
          tmp8 = closure_6;
          items = [, , ];
          items[0] = closure_6;
          tmp9 = closure_7;
          items[1] = closure_7;
          tmp10 = closure_8;
          items[2] = closure_8;
          closure_0 = undefined;
          closure_1 = undefined;
          tmp11 = items;
          [tmp12, tmp13, tmp14] = items;
          class MediaViewerTsx4 {
            constructor() {
              tmp = closure_0(closure_1, false);
              return;
            }
          }
          items1 = [, ];
          items1[0] = tmp13;
          items1[1] = tmp14;
          MediaViewerTsx4.__closure = items1;
          num3 = 14835611840757;
          MediaViewerTsx4.__workletHash = 14835611840757;
          MediaViewerTsx4.__initData = tmp12;
          str = "respect-motion-settings";
          num4 = 0;
          tmp15 = obj1;
          tmp16 = MediaViewerTsx4;
          tmp6 = closure_4(0, obj1, "respect-motion-settings", MediaViewerTsx4);
        }
      }
      return { opacity };
    }
  }
  const items6 = [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41];
  MediaViewerTsx5.__closure = items6;
  MediaViewerTsx5.__workletHash = 1237930573376;
  MediaViewerTsx5.__initData = tmp32;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(MediaViewerTsx5);
  const tmp8Result = require("module_1652");
  const items7 = [closure_17, overlayEnabled, isInteracting, require("module_1705").scheduleOnRN, tmp7];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp43, tmp44, tmp45, tmp46, tmp47] = items7;
  class MediaViewerTsx6 {
    constructor() {
      value = closure_0.get();
      if (value) {
        tmp2 = closure_1;
        value = !closure_1.get();
      }
      if (value) {
        tmp3 = closure_2;
        tmp4 = closure_3;
        flag = true;
        tmp5 = closure_2(closure_3, true);
      }
      return;
    }
  }
  const items8 = [tmp44, tmp45, tmp46, tmp47];
  MediaViewerTsx6.__closure = items8;
  MediaViewerTsx6.__workletHash = 15736275157365;
  MediaViewerTsx6.__initData = tmp43;
  const derivedValue = require("module_1652").useDerivedValue(MediaViewerTsx6);
  const tmp8Result4 = require("module_1652");
  const items9 = [closure_18, isMediaViewerEntranceJankFixEnabled, pan, translatePos, sharedValue1, require("timing/timing").withTiming, require("module_1652").Easing];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56] = items9;
  class MediaViewerTsx7 {
    constructor() {
      pan = null;
      if (!closure_0) {
        tmp2 = closure_1;
        pan = closure_1.pan;
      }
      obj = {};
      merged = Object.assign(pan);
      obj1 = { translateY: closure_2.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      num = 0;
      if (!closure_3.get()) {
        tmp4 = closure_4;
        obj4 = { easing: null, duration: 75 };
        tmp5 = closure_5;
        obj4.easing = closure_5.linear;
        num2 = 1;
        num = closure_4(1, obj4);
      }
      obj.opacity = num;
      return obj;
    }
  }
  const items10 = [tmp51, tmp52, tmp53, tmp54, tmp55, tmp56];
  MediaViewerTsx7.__closure = items10;
  MediaViewerTsx7.__workletHash = 12989144735041;
  MediaViewerTsx7.__initData = tmp50;
  const animatedStyle2 = require("module_1652").useAnimatedStyle(MediaViewerTsx7);
  StyleSheet = obj.useRef(null);
  const items11 = [sources.length > 1, animatedRef, sharedValue1];
  callback = obj.useCallback(() => {
    let tmp = c3;
    if (c3) {
      tmp = null != _undefined2.current;
    }
    if (tmp) {
      let result = _undefined.set(true);
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        const result = _undefined.set(false);
      }, 250);
    }
  }, items11);
  const items12 = [sharedValue1];
  const callback1 = obj.useCallback(() => {
    const result = _undefined.set(false);
  }, items12);
  ref2 = obj.useRef(false);
  const items13 = [width, height, callback];
  const effect = obj.useEffect(() => {
    if (ref2.current) {
      callback();
    } else {
      tmp.current = true;
    }
  }, items13);
  const items14 = [callback];
  const callback2 = obj.useCallback((orientation, orientation2) => {
    if (orientation.orientation !== orientation2.orientation) {
      callback();
    }
    if (closure_9) {
      const result = useVideoControls.unpauseCurrentVideoIfNeeded();
    }
  }, items14);
  const tmp8Result5 = require("module_1652");
  const orientationListener = require("DeviceOrientation").useOrientationListener(callback2);
  let tmp63Result = callback(closure_13, { entranceAnimationDriver: sharedValue, onContentSizeChange, onScroll, onLongPress, originLayout, panGestureConfig: mediaViewerPanGestureConfig, ref, renderMedia, sources, useItemVisible, windowHeight: height, windowWidth: width, index, zoomed });
  const obj11 = { style: tmp30.absoluteFill, onAccessibilityEscape: dismiss, onLayout: callback1, children: null };
  const items15 = [callback(StatusBarDefault, { barStyle: "light-content", hidden: !tmp6 }), , , , ];
  const obj13 = { style: null };
  const items16 = [memo, animatedStyle];
  obj13.style = items16;
  items15[1] = callback(_modDef1652.View, obj13);
  const obj14 = { ref: animatedRef, style: null, children: null };
  const items17 = [pan.pan, animatedStyle2];
  obj14.style = items17;
  if (isMediaViewerImprovementsEnabled) {
    const obj15 = { entranceAnimationDriver: sharedValue, onLongPress, onScrollWorklets, originLayout, pagerIndex, panGestureConfig: mediaViewerPanGestureConfig, renderMedia, sources, useItemVisible, windowWidth: width, windowHeight: height, zoomed };
    tmp63Result = tmp63(tmp(15042), obj15);
  }
  obj14.children = tmp63Result;
  items15[2] = callback(_modDef1652.View, obj14);
  const obj16 = { style: null, pointerEvents: null, children: null };
  const items18 = [tmp4(noop.useState(obj10), 1)[0], animatedStyle1];
  obj16.style = items18;
  let str = "none";
  if (tmp6) {
    str = "box-none";
  }
  obj16.pointerEvents = str;
  obj16.children = renderOverlay(dismiss, overlayEnabled, sharedValue);
  items15[3] = callback(_modDef1652.View, obj16);
  items15[4] = callback(HomeIndicatorDefault, {});
  obj11.children = items15;
  const children = ref2(c5, obj11);
  return callback(require("useAnalyticsLocations").AnalyticsLocationProvider, { value: tmp3(value).analyticsLocations, children });
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const PlatformUtils = fn(1377);
let closure_9 = PlatformUtils.isAndroid();
let obj = { pan: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj.pan = obj3;
const styles = StyleSheet.create(obj);
let closure_11 = { code: "(function MediaViewerTsx1(){let[zoomed,pinching]=this.__closure;return!zoomed.get()&&!pinching.get();})" };
let closure_12 = { code: "(function MediaViewerTsx2(){let[scrollEnabled]=this.__closure;return{scrollEnabled:scrollEnabled.get()};})" };
let closure_13 = noop.memo(function MediaViewer(entranceAnimationDriver) {
  entranceAnimationDriver = entranceAnimationDriver.entranceAnimationDriver;
  _require = entranceAnimationDriver;
  const onLongPress = entranceAnimationDriver.onLongPress;
  const originLayout = entranceAnimationDriver.originLayout;
  const panGestureConfig = entranceAnimationDriver.panGestureConfig;
  const renderMedia = entranceAnimationDriver.renderMedia;
  const sources = entranceAnimationDriver.sources;
  const useItemVisible = entranceAnimationDriver.useItemVisible;
  const windowWidth = entranceAnimationDriver.windowWidth;
  const windowHeight = entranceAnimationDriver.windowHeight;
  const zoomed = entranceAnimationDriver.zoomed;
  let panGestureGenerator;
  ({ onContentSizeChange, onScroll, ref, index } = entranceAnimationDriver);
  const sharedValue = require("module_1652").useSharedValue(false);
  const obj = require("module_1652");
  items = [panGestureGenerator, zoomed, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp4, tmp5, tmp6] = items;
  class MediaViewerTsx1 {
    constructor() {
      value = closure_0.get();
      tmp2 = !value;
      if (!value) {
        tmp3 = closure_1;
        tmp2 = !closure_1.get();
      }
      return tmp2;
    }
  }
  const items1 = [tmp5, tmp6];
  MediaViewerTsx1.__closure = items1;
  MediaViewerTsx1.__workletHash = 3986226128458;
  MediaViewerTsx1.__initData = tmp4;
  const derivedValue = require("module_1652").useDerivedValue(MediaViewerTsx1);
  const items2 = [sharedValue];
  const items3 = [sharedValue];
  const callback = renderMedia.useCallback((nativeEvent) => sharedValue.set(2 === nativeEvent.nativeEvent.touches.length), items2);
  const callback1 = renderMedia.useCallback(() => sharedValue.set(false), items3);
  const obj2 = require("module_1652");
  const mediaViewerPanGesture = require("useMediaViewerPanGesture").useMediaViewerPanGesture(panGestureConfig, derivedValue);
  panGestureGenerator = mediaViewerPanGesture.panGestureGenerator;
  const items4 = [entranceAnimationDriver, onLongPress, originLayout, panGestureConfig, panGestureGenerator, renderMedia, sources, useItemVisible, windowHeight, windowWidth, zoomed];
  const callback2 = renderMedia.useCallback((arg0, index) => metroImportDefault(MediaViewerItem.MediaViewerItem, { originLayout, renderMedia, onLongPress, windowWidth, windowHeight, panGestureConfig, entranceAnimationDriver, source: sources[index], index, zoomed, panGesture: panGestureGenerator(index), useItemVisible }), items4);
  const tmpResult = require("useMediaViewerPanGesture");
  const items5 = [closure_12, derivedValue];
  _require = undefined;
  [tmp12, tmp13] = items5;
  class MediaViewerTsx2 {
    constructor() {
      obj = { scrollEnabled: closure_0.get() };
      return obj;
    }
  }
  const items6 = [tmp13];
  MediaViewerTsx2.__closure = items6;
  MediaViewerTsx2.__workletHash = 8145051155624;
  MediaViewerTsx2.__initData = tmp12;
  const animatedProps = require("module_1652").useAnimatedProps(MediaViewerTsx2);
  const tmpResult2 = require("module_1652");
  const obj3 = { gesture: mediaViewerPanGesture.nativeGesture, children: null };
  const obj4 = { ref, style: useItemVisible.absoluteFill, sections: null, onTouchStart: callback, onTouchEnd: callback1, onTouchCancel: callback1, initialScrollItem: require("useStateFromSharedValue")(index), automaticallyAdjustContentInsets: false, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, itemSize: windowWidth, renderItem: callback2, onContentSizeChange, pagingEnabled: true, onScroll, scrollEventThrottle: 16, animatedProps, disableLegacyGestureHandling: true, chunkBase: windowWidth, horizontal: true };
  const items7 = [sources.length];
  obj4.sections = items7;
  obj3.children = windowWidth(require("FastList").AnimatedFastList, obj4);
  return windowWidth(require("LegacyBaseButton").GestureDetector, obj3);
});
let closure_14 = { code: "(function MediaViewerTsx3(){let[isEntranceJankFixEnabled,backdropLayout,entranceAnimationDriver,interpolate,translatePos,closePosition]=this.__closure;return{...(isEntranceJankFixEnabled?null:backdropLayout),opacity:Math.min(entranceAnimationDriver.get(),interpolate(translatePos.get(),[-closePosition,0,closePosition],[0,1,0]))};})" };
let closure_15 = { code: "(function MediaViewerTsx4(){let[scheduleOnRN,setShowHeader]=this.__closure;scheduleOnRN(setShowHeader,false);})" };
let closure_16 = { code: "(function MediaViewerTsx5(){let[isClosing,hideRelayoutSharedValue,overlayEnabled,isInteracting,withTiming,Easing,_worklet_14835611840757_init_data,scheduleOnRN,setShowHeader]=this.__closure;return{opacity:isClosing.get()||hideRelayoutSharedValue.get()?0:overlayEnabled.get()&&!isInteracting.get()?withTiming(1,{easing:Easing.linear,duration:150}):withTiming(0,{easing:Easing.linear,duration:75},'respect-motion-settings',function MediaViewerTsx4Factory([_worklet_14835611840757_init_data,scheduleOnRN,setShowHeader]){const MediaViewerTsx4=function(){scheduleOnRN(setShowHeader,false);};MediaViewerTsx4.__closure=[scheduleOnRN,setShowHeader];MediaViewerTsx4.__workletHash=14835611840757;MediaViewerTsx4.__initData=_worklet_14835611840757_init_data;return MediaViewerTsx4;}([_worklet_14835611840757_init_data,scheduleOnRN,setShowHeader]))};})" };
let closure_17 = { code: "(function MediaViewerTsx6(){let[overlayEnabled,isInteracting,scheduleOnRN,setShowHeader]=this.__closure;if(overlayEnabled.get()&&!isInteracting.get()){scheduleOnRN(setShowHeader,true);}})" };
let closure_18 = { code: "(function MediaViewerTsx7(){let[isEntranceJankFixEnabled,styles,translatePos,hideRelayoutSharedValue,withTiming,Easing]=this.__closure;return{...(isEntranceJankFixEnabled?null:styles.pan),transform:[{translateY:translatePos.get()}],opacity:hideRelayoutSharedValue.get()?0:withTiming(1,{easing:Easing.linear,duration:75})};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewer.tsx");

export default noop.memo(function MediaViewerWithProvider(arg0) {
  const obj = { children: null };
  const merged = Object.assign(arg0);
  obj.children = metroImportDefault(MediaViewer, {});
  return metroImportDefault(MediaViewerDimensionsContext.MediaViewerDimensionsProvider, obj);
});