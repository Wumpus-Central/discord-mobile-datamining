import _slicedToArray from "_slicedToArray";
import importAllResult from "View";
import get_ActivityIndicator from "handleOrientationChange";
import jsxProd from "set";
import set from "set";
import set from "get ActivityIndicator";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function MediaViewer(arg0) {
  let dismiss;
  let height;
  let index;
  let onClose;
  let onContentSizeChange;
  let onLongPress;
  let onScroll;
  let originLayout;
  let ref;
  let renderMedia;
  let renderOverlay;
  let sources;
  let swipeVelocityThreshold;
  let syncer;
  let tmp5;
  let tmp6;
  let translatePos;
  let useItemVisible;
  let useViewerProps;
  let width;
  let zoomed;
  ({ onClose, syncer } = arg0);
  ({ index, sources } = syncer);
  let _require;
  height = undefined;
  let dependencyMap;
  let sharedValue;
  let sharedValue1;
  let animatedRef;
  let c6;
  translatePos = undefined;
  let isClosing;
  let isInteracting;
  let overlayEnabled;
  let absoluteFillObject;
  let closure_12;
  let callback;
  let closure_14;
  ({ onLongPress, originLayout, renderMedia, renderOverlay, swipeVelocityThreshold } = arg0);
  ({ useViewerProps, zoomed } = syncer);
  let value = [height(5539).MEDIA_VIEWER];
  let tmp = height;
  const tmp3 = height(5519);
  [tmp5, tmp6] = sharedValue(sharedValue1.useState(true), 2);
  _require = tmp6;
  let obj = _require(8141);
  const mediaViewerDimensions = obj.useMediaViewerDimensions();
  ({ width, height } = mediaViewerDimensions);
  const tmp9 = height(12345)({ index, onClose, sources, windowHeight: height, windowWidth: width });
  dependencyMap = tmp9;
  let obj1 = _require(4054);
  sharedValue = obj1.useSharedValue(0);
  let obj2 = _require(4054);
  sharedValue1 = obj2.useSharedValue(false);
  let obj3 = _require(4054);
  animatedRef = obj3.useAnimatedRef();
  c6 = tmp13;
  const viewerProps = useViewerProps();
  ({ ref, onScroll, onContentSizeChange, useItemVisible } = viewerProps);
  let obj4 = _require(12340);
  const mediaViewerPanGestureConfig = obj4.useMediaViewerPanGestureConfig(tmp9, swipeVelocityThreshold, onClose);
  ({ dismiss, translatePos } = mediaViewerPanGestureConfig);
  isClosing = mediaViewerPanGestureConfig.isClosing;
  isInteracting = mediaViewerPanGestureConfig.isInteracting;
  overlayEnabled = mediaViewerPanGestureConfig.overlayEnabled;
  absoluteFillObject = c6.absoluteFillObject;
  let obj5 = _require(4054);
  class M {
    constructor() {
      obj = {};
      merged = Object.assign(absoluteFillObject);
      obj.height = height;
      obj.backgroundColor = "black";
      value = c3.get();
      obj2 = c0(c2[5]);
      items = [, , ];
      items[0] = -c2;
      items[1] = 0;
      items[2] = c2;
      obj.opacity = Math.min(value, obj2.interpolate(translatePos.get(), items, [0, 1, 0]));
      return obj;
    }
  }
  obj = { absoluteFillObject, windowHeight: height, entranceAnimationDriver: sharedValue, interpolate: _require(4054).interpolate, translatePos, closePosition: tmp9 };
  M.__closure = obj;
  M.__workletHash = 10332062530694;
  M.__initData = callback;
  obj = {};
  const animatedStyle = obj5.useAnimatedStyle(M);
  let merged = Object.assign(c6.absoluteFillObject);
  obj.backgroundColor = "transparent";
  const tmp4 = sharedValue(sharedValue1.useState(true), 2);
  const tmp7 = _require;
  class P {
    constructor() {
      opacity = 0;
      if (!isClosing.get()) {
        tmp = useSharedValue;
        opacity = 0;
        if (!useSharedValue.get()) {
          tmp2 = overlayEnabled;
          if (overlayEnabled.get()) {
            tmp3 = isInteracting;
            if (!isInteracting.get()) {
              tmp4 = c0;
              tmp5 = c2;
              obj = c0(c2[15]);
              obj = { easing: null, duration: 150 };
              tmp6 = c0;
              tmp7 = c2;
              obj[0] = c0(c2[5]).Easing.linear;
              num2 = 1;
              withTimingResult = obj.withTiming(1, obj);
            }
            tmp20 = withTimingResult;
          }
          tmp9 = c0;
          tmp10 = c2;
          obj3 = c0(c2[15]);
          obj1 = { easing: null, duration: 75 };
          tmp11 = c0;
          tmp12 = c2;
          obj1[0] = c0(c2[5]).Easing.linear;
          fn = function n() {
            outer1_0(outer1_2[5]).runOnJS(closure_0)(false);
          };
          obj2 = { runOnJS: null, setShowHeader: null };
          tmp13 = c0;
          tmp14 = c2;
          obj2[0] = c0(c2[5]).runOnJS;
          tmp15 = c0;
          obj2[1] = c0;
          fn.__closure = obj2;
          num3 = 11572173694016;
          fn.__workletHash = 11572173694016;
          tmp16 = outer1_15;
          fn.__initData = outer1_15;
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
  obj1 = { isClosing, hideRelayoutSharedValue: sharedValue1, overlayEnabled, isInteracting, withTiming: _require(4194).withTiming, Easing: _require(4054).Easing, runOnJS: _require(4054).runOnJS, setShowHeader: tmp6 };
  P.__closure = obj1;
  P.__workletHash = 14874736878670;
  P.__initData = closure_14;
  const animatedStyle1 = _require(4054).useAnimatedStyle(P);
  const obj9 = _require(4054);
  let fn = function x() {
    let value = overlayEnabled.get();
    if (value) {
      value = !isInteracting.get();
    }
    if (value) {
      _undefined(_undefined2[5]).runOnJS(_undefined)(true);
      const obj = _undefined(_undefined2[5]);
    }
  };
  obj2 = { overlayEnabled, isInteracting, runOnJS: _require(4054).runOnJS, setShowHeader: tmp6 };
  fn.__closure = obj2;
  fn.__workletHash = 2199049578465;
  fn.__initData = closure_16;
  const derivedValue = _require(4054).useDerivedValue(fn);
  const obj11 = _require(4054);
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
      obj[0] = _undefined(_undefined2[5]).Easing.linear;
      num = _undefined(_undefined2[15]).withTiming(1, obj);
      const obj3 = _undefined(_undefined2[15]);
    }
    obj.opacity = num;
    return obj;
  }
  obj3 = { absoluteFillObject, translatePos, hideRelayoutSharedValue: sharedValue1, withTiming: _require(4194).withTiming, Easing: _require(4054).Easing };
  le.__closure = obj3;
  le.__workletHash = 8244409104374;
  le.__initData = closure_17;
  const animatedStyle2 = _require(4054).useAnimatedStyle(le);
  closure_12 = sharedValue1.useRef(null);
  const items1 = [sources.length > 1, animatedRef, sharedValue1];
  callback = sharedValue1.useCallback(() => {
    let tmp = c6;
    if (c6) {
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
      const result = _undefined(_undefined2[16]).unpauseCurrentVideoIfNeeded();
      const obj = _undefined(_undefined2[16]);
    }
  }, items4);
  const obj13 = _require(4054);
  const orientationListener = _require(8171).useOrientationListener(callback2);
  obj4 = { style: c6.absoluteFill, onAccessibilityEscape: dismiss, onLayout: callback1, children: null };
  const obj15 = _require(8171);
  obj5 = { barStyle: "light-content", hidden: !tmp5 };
  const items5 = [translatePos(height(6682), obj5), translatePos(height(4054).View, { style: animatedStyle }), translatePos(height(4055), { ref: animatedRef, style: animatedStyle2, children: translatePos(closure_12, { entranceAnimationDriver: sharedValue, onContentSizeChange, onScroll, onLongPress, originLayout, panGestureConfig: mediaViewerPanGestureConfig, ref, renderMedia, sources, useItemVisible, windowHeight: height, windowWidth: width, index, zoomed }) }), , ];
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
  items5[3] = translatePos(height(4055), obj6);
  items5[4] = translatePos(tmp(10530), {});
  obj4[3] = items5;
  const children = tmp28(tmp29, obj4);
  return translatePos(tmp7(5519).AnalyticsLocationProvider, { value: tmp3(value).analyticsLocations, children });
}
let c4 = importAllResult;
({ View: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
set = set.isAndroid();
let closure_10 = { code: "function MediaViewerTsx1(){const{zoomed,pinching}=this.__closure;return!zoomed.get()&&!pinching.get();}" };
let closure_11 = { code: "function MediaViewerTsx2(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}" };
let closure_12 = importAllResult.memo((entranceAnimationDriver) => {
  let index;
  let onContentSizeChange;
  let onScroll;
  let ref;
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
        tmp3 = useSharedValue;
        tmp2 = !useSharedValue.get();
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
  const callback2 = renderMedia.useCallback((arg0, index) => {
    const obj = { originLayout, renderMedia, onLongPress, windowWidth, windowHeight, panGestureConfig, entranceAnimationDriver, source: sources[index], index, zoomed, panGesture: null, useItemVisible: null };
    obj[10] = panGestureGenerator(index);
    obj[11] = useItemVisible;
    return windowWidth(entranceAnimationDriver(originLayout[7]).MediaViewerItem, obj);
  }, items2);
  const obj3 = entranceAnimationDriver(originLayout[6]);
  class H {
    constructor() {
      obj = { scrollEnabled: c11.get() };
      return obj;
    }
  }
  H.__closure = { scrollEnabled: derivedValue };
  H.__workletHash = 13550782123441;
  H.__initData = derivedValue;
  const animatedProps = entranceAnimationDriver(originLayout[5]).useAnimatedProps(H);
  const obj4 = entranceAnimationDriver(originLayout[5]);
  obj = { gesture: mediaViewerPanGesture.nativeGesture, children: null };
  obj = { ref, style: useItemVisible.absoluteFill, sections: items3, onTouchStart: callback, onTouchEnd: callback1, onTouchCancel: callback1, initialScrollItem: onLongPress(originLayout[8])(index), automaticallyAdjustContentInsets: false, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, itemSize: windowWidth, renderItem: callback2, onContentSizeChange, pagingEnabled: true, onScroll, scrollEventThrottle: 16, animatedProps, disableLegacyGestureHandling: true, chunkBase: windowWidth, horizontal: true };
  items3 = [sources.length];
  obj[1] = windowWidth(entranceAnimationDriver(originLayout[10]).AnimatedFastList, obj);
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
  return callback(require(8141) /* MediaViewerDimensionsProvider */.MediaViewerDimensionsProvider, obj);
});