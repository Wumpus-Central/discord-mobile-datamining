// discord_app/modules/media_viewer/native/components/MediaViewer.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import useVideoControls from "../useVideoControls.tsx";
import MediaViewerDimensionsContext from "../MediaViewerDimensionsContext.tsx";
import MediaViewerItem2 from "MediaViewerItem.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function MediaViewer(arg0) {
  let closure_2;
  let dismiss;
  let height;
  let index;
  let items5;
  let items6;
  let onClose;
  let onContentSizeChange;
  let onLongPress;
  let onScroll;
  let originLayout;
  let ref;
  let renderMedia;
  let renderOverlay;
  let sources;
  let str;
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
  height = undefined;
  let sharedValue;
  let sharedValue1;
  translatePos = undefined;
  ref = undefined;
  let callback;
  let ref2;
  ({ onLongPress, originLayout, renderMedia, renderOverlay, swipeVelocityThreshold } = arg0);
  ({ useViewerProps, zoomed } = syncer);
  let tmp = height;
  const tmp3 = height(6664);
  let items = [height(6688).MEDIA_VIEWER];
  const analyticsLocations = tmp3(items).analyticsLocations;
  const tmp4 = sharedValue(sharedValue1.useState(true), 2);
  [tmp5, tmp6] = tmp4;
  const _require = tmp6;
  let obj = require("MediaViewerDimensionsContext");
  const mediaViewerDimensions = obj.useMediaViewerDimensions();
  ({ width, height } = mediaViewerDimensions);
  const tmp9 = height(12806)({ index, onClose, sources, windowHeight: height, windowWidth: width });
  dependencyMap = tmp9;
  let obj2 = require("ReanimatedRexport");
  sharedValue = obj2.useSharedValue(0);
  let obj3 = require("ReanimatedRexport");
  sharedValue1 = obj3.useSharedValue(false);
  const obj4 = require("ReanimatedRexport");
  const animatedRef = obj4.useAnimatedRef();
  let closure_6 = tmp13;
  const viewerProps = useViewerProps();
  ({ ref, onScroll, onContentSizeChange, useItemVisible } = viewerProps);
  const obj5 = require("useMediaViewerPanGesture");
  const mediaViewerPanGestureConfig = obj5.useMediaViewerPanGestureConfig(tmp9, swipeVelocityThreshold, onClose);
  ({ dismiss, translatePos } = mediaViewerPanGestureConfig);
  const isClosing = mediaViewerPanGestureConfig.isClosing;
  const isInteracting = mediaViewerPanGestureConfig.isInteracting;
  const overlayEnabled = mediaViewerPanGestureConfig.overlayEnabled;
  const absoluteFillObject = closure_6.absoluteFillObject;
  const obj6 = require("ReanimatedRexport");
  const tmp7 = _require;
  class P {
    constructor() {
      let items;
      let min;
      let obj2;
      let value;
      const obj = {
        height,
        backgroundColor: "black",
        opacity: min(value, obj2.interpolate(translatePos.get(), items, [0, 1, 0])),
      };
      const merged = Object.assign(absoluteFillObject);
      min = Math.min;
      value = sharedValue.get();
      items = [-closure_2, 0, closure_2];
      obj2 = ReanimatedRexport;
      return obj;
    }
  }
  P.__closure = {
    absoluteFillObject,
    windowHeight: height,
    entranceAnimationDriver: sharedValue,
    interpolate: require("ReanimatedRexport").interpolate,
    translatePos,
    closePosition: tmp9,
  };
  P.__workletHash = 5943145829824;
  P.__initData = __initData2;
  const obj8 = { backgroundColor: "transparent" };
  ({
    absoluteFillObject,
    windowHeight: height,
    entranceAnimationDriver: sharedValue,
    interpolate: require("ReanimatedRexport").interpolate,
    translatePos,
    closePosition: tmp9,
  });
  const animatedStyle = obj6.useAnimatedStyle(P);
  const useState = sharedValue1.useState;
  let merged = Object.assign(closure_6.absoluteFillObject);
  const first = sharedValue(useState(obj8), 1)[0];
  const obj9 = require("ReanimatedRexport");
  class D {
    constructor() {
      let opacity = 0;
      if (!isClosing.get()) {
        opacity = 0;
        if (!sharedValue1.get()) {
          if (overlayEnabled.get()) {
            let withTimingResult;
            if (!isInteracting.get()) {
              let obj = { easing: ReanimatedRexport.Easing.linear, duration: 150 };
              const withTiming = timing.withTiming;
              timing;
              withTimingResult = withTiming(1, obj);
            }
            opacity = withTimingResult;
          }
          const tmp12 = timing;
          const withTiming2 = tmp12.withTiming;
          const fn = function n() {
            const obj = c0(closure_2[7]);
            obj.runOnJS(setShowHeader)(false);
          };
          const obj2 = { easing: ReanimatedRexport.Easing.linear, duration: 75 };
          fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setShowHeader };
          fn.__workletHash = 15904527555202;
          fn.__initData = __initData;
          const obj3 = { runOnJS: ReanimatedRexport.runOnJS, setShowHeader };
          withTimingResult = withTiming2(0, obj2, "respect-motion-settings", fn);
        }
      }
      return { opacity };
    }
  }
  D.__closure = {
    isClosing,
    hideRelayoutSharedValue: sharedValue1,
    overlayEnabled,
    isInteracting,
    withTiming: require("timing").withTiming,
    Easing: require("ReanimatedRexport").Easing,
    runOnJS: require("ReanimatedRexport").runOnJS,
    setShowHeader: tmp6,
  };
  D.__workletHash = 6649973616396;
  D.__initData = __initData3;
  ({
    isClosing,
    hideRelayoutSharedValue: sharedValue1,
    overlayEnabled,
    isInteracting,
    withTiming: require("timing").withTiming,
    Easing: require("ReanimatedRexport").Easing,
    runOnJS: require("ReanimatedRexport").runOnJS,
    setShowHeader: tmp6,
  });
  const animatedStyle1 = obj9.useAnimatedStyle(D);
  const obj11 = require("ReanimatedRexport");
  class O {
    constructor() {
      const value = overlayEnabled.get() && !isInteracting.get();
      if (value) {
        const obj = ReanimatedRexport;
        obj.runOnJS(c0)(true);
      }
    }
  }
  O.__closure = { overlayEnabled, isInteracting, runOnJS: require("ReanimatedRexport").runOnJS, setShowHeader: tmp6 };
  O.__workletHash = 1909187618991;
  O.__initData = __initData5;
  ({ overlayEnabled, isInteracting, runOnJS: require("ReanimatedRexport").runOnJS, setShowHeader: tmp6 });
  const derivedValue = obj11.useDerivedValue(O);
  function le() {
    let items;
    let num;
    const obj = { alignItems: "center", justifyContent: "center", transform: items, opacity: num };
    const merged = Object.assign(absoluteFillObject);
    items = [{ translateY: translatePos.get() }];
    num = 0;
    ({ translateY: translatePos.get() });
    if (!sharedValue1.get()) {
      const obj3 = { easing: ReanimatedRexport.Easing.linear, duration: 75 };
      const withTiming = timing.withTiming;
      timing;
      num = withTiming(1, obj3);
    }
    return obj;
  }
  const obj13 = require("ReanimatedRexport");
  le.__closure = {
    absoluteFillObject,
    translatePos,
    hideRelayoutSharedValue: sharedValue1,
    withTiming: require("timing").withTiming,
    Easing: require("ReanimatedRexport").Easing,
  };
  le.__workletHash = 3255262686776;
  le.__initData = __initData6;
  ({
    absoluteFillObject,
    translatePos,
    hideRelayoutSharedValue: sharedValue1,
    withTiming: require("timing").withTiming,
    Easing: require("ReanimatedRexport").Easing,
  });
  const animatedStyle2 = obj13.useAnimatedStyle(le);
  ref = sharedValue1.useRef(null);
  const items1 = [sources.length > 1, animatedRef, sharedValue1];
  callback = sharedValue1.useCallback(() => {
    const tmp = closure_6 && null != animatedRef.current;
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
  ref2 = sharedValue1.useRef(false);
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
    if (closure_9) {
      const obj = useVideoControls;
      const result = obj.unpauseCurrentVideoIfNeeded();
    }
  }, items4);
  const obj15 = require("DeviceOrientation");
  const orientationListener = obj15.useOrientationListener(callback2);
  const obj16 = {
    style: closure_6.absoluteFill,
    onAccessibilityEscape: dismiss,
    onLayout: callback1,
    children: items5,
  };
  items5 = [, , , ,];
  const obj17 = { barStyle: "light-content", hidden: !tmp5 };
  const tmp28 = translatePos(ref2, {
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
  items5[0] = translatePos(height(9096), obj17);
  items5[1] = translatePos(height(4618).View, { style: animatedStyle });
  items5[2] = translatePos(height(4619), { ref: animatedRef, style: animatedStyle2, children: tmp28 });
  const obj18 = { style: items6, pointerEvents: str, children: renderOverlay(dismiss, overlayEnabled) };
  items6 = [first, animatedStyle1];
  str = "none";
  const tmp29 = isClosing;
  const tmp30 = animatedRef;
  const tmp31 = height(4619);
  if (tmp5) {
    str = "box-none";
  }
  items5[3] = translatePos(tmp31, obj18);
  items5[4] = translatePos(tmp(9098), {});
  const children = tmp29(tmp30, obj16);
  return translatePos(tmp7(6664).AnalyticsLocationProvider, { value: analyticsLocations, children });
}
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = PlatformUtils.isAndroid();
let closure_10 = {
  code: "function MediaViewerTsx1(){const{zoomed,pinching}=this.__closure;return!zoomed.get()&&!pinching.get();}",
};
let closure_11 = {
  code: "function MediaViewerTsx2(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}",
};
let closure_12 = {
  code: "function MediaViewerTsx3(){const{zoomed,pinching}=this.__closure;return!zoomed.get()&&!pinching.get();}",
};
const __initData = {
  code: "function MediaViewerTsx4(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}",
};
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (entranceAnimationDriver) => {
        let onContentSizeChange;
        let onLongPress;
        let onScroll;
        let originLayout;
        let ref;
        let zoomed;
        let obj = entranceAnimationDriver(originLayout[6]);
        const cResult = obj.c(32);
        const tmp = entranceAnimationDriver;
        entranceAnimationDriver = entranceAnimationDriver.entranceAnimationDriver;
        ({ onContentSizeChange, onLongPress } = entranceAnimationDriver);
        ({ onScroll, originLayout } = entranceAnimationDriver);
        const panGestureConfig = entranceAnimationDriver.panGestureConfig;
        const renderMedia = entranceAnimationDriver.renderMedia;
        const sources = entranceAnimationDriver.sources;
        const useItemVisible = entranceAnimationDriver.useItemVisible;
        const windowWidth = entranceAnimationDriver.windowWidth;
        const windowHeight = entranceAnimationDriver.windowHeight;
        ({ ref, zoomed } = entranceAnimationDriver);
        const obj2 = entranceAnimationDriver(originLayout[7]);
        const sharedValue = obj2.useSharedValue(false);
        const fn = function t() {
          const value = zoomed.get();
          const tmp2 = !value && !sharedValue.get();
          return tmp2;
        };
        fn.__closure = { zoomed, pinching: sharedValue };
        fn.__workletHash = 9157951736691;
        fn.__initData = sharedValue;
        const obj3 = entranceAnimationDriver(originLayout[7]);
        const derivedValue = obj3.useDerivedValue(fn);
        if (cResult[0] !== sharedValue) {
          const fn2 = function o(nativeEvent) {
            return sharedValue.set(2 === nativeEvent.nativeEvent.touches.length);
          };
          cResult[0] = sharedValue;
          cResult[1] = fn2;
        }
        if (cResult[2] !== sharedValue) {
          class D {
            constructor() {
              return sharedValue.set(false);
            }
          }
          cResult[2] = sharedValue;
          cResult[3] = D;
        } else {
          class D {
            constructor() {
              return sharedValue.set(false);
            }
          }
        }
        const tmpResult = tmp(originLayout[8]);
        const mediaViewerPanGesture = tmpResult.useMediaViewerPanGesture(panGestureConfig, derivedValue);
        const panGestureGenerator = mediaViewerPanGesture.panGestureGenerator;
        if (cResult[4] === entranceAnimationDriver) {
          class D {
            constructor() {
              return sharedValue.set(false);
            }
          }
        }
        const fn3 = function z(arg0, index) {
          const obj = {
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
          };
          const MediaViewerItem = MediaViewerItem2.MediaViewerItem;
          return metroImportDefault(MediaViewerItem, obj);
        };
        cResult[4] = entranceAnimationDriver;
        cResult[5] = onLongPress;
        cResult[6] = originLayout;
        cResult[7] = panGestureConfig;
        cResult[8] = panGestureGenerator;
        cResult[9] = renderMedia;
        cResult[10] = sources;
        cResult[11] = useItemVisible;
        cResult[12] = windowHeight;
        cResult[13] = windowWidth;
        cResult[14] = zoomed;
        cResult[15] = fn3;
      }
    : (entranceAnimationDriver) => {
        let index;
        let items3;
        let obj6;
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
        let derivedValue;
        let panGestureGenerator;
        ({ onContentSizeChange, onScroll, ref, index } = entranceAnimationDriver);
        let obj = entranceAnimationDriver(originLayout[7]);
        const sharedValue = obj.useSharedValue(false);
        const obj2 = entranceAnimationDriver(originLayout[7]);
        class T {
          constructor() {
            const value = zoomed.get();
            const tmp2 = !value && !sharedValue.get();
            return tmp2;
          }
        }
        T.__closure = { zoomed, pinching: sharedValue };
        T.__workletHash = 1775226328369;
        T.__initData = panGestureGenerator;
        derivedValue = obj2.useDerivedValue(T);
        const items = [sharedValue];
        const items1 = [sharedValue];
        const callback = renderMedia.useCallback(
          (nativeEvent) => sharedValue.set(2 === nativeEvent.nativeEvent.touches.length),
          items,
        );
        const callback1 = renderMedia.useCallback(() => sharedValue.set(false), items1);
        const obj3 = entranceAnimationDriver(originLayout[8]);
        const mediaViewerPanGesture = obj3.useMediaViewerPanGesture(panGestureConfig, derivedValue);
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
        const nativeGesture = mediaViewerPanGesture.nativeGesture;
        const callback2 = renderMedia.useCallback((arg0, index) => {
          const obj = {
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
          };
          const MediaViewerItem = MediaViewerItem2.MediaViewerItem;
          return metroImportDefault(MediaViewerItem, obj);
        }, items2);
        const obj4 = entranceAnimationDriver(originLayout[7]);
        class H {
          constructor() {
            const obj = { scrollEnabled: derivedValue.get() };
            return obj;
          }
        }
        H.__closure = { scrollEnabled: derivedValue };
        H.__workletHash = 14892821132407;
        H.__initData = __initData;
        const animatedProps = obj4.useAnimatedProps(H);
        const obj5 = {
          gesture: nativeGesture,
          children: windowWidth(entranceAnimationDriver(originLayout[11]).AnimatedFastList, obj6),
        };
        const tmp8 = onLongPress(originLayout[10])(index);
        const GestureDetector = entranceAnimationDriver(originLayout[12]).GestureDetector;
        obj6 = {
          ref,
          style: useItemVisible.absoluteFill,
          sections: items3,
          onTouchStart: callback,
          onTouchEnd: callback1,
          onTouchCancel: callback1,
          initialScrollItem: tmp8,
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
        items3 = [sources.length];
        return windowWidth(GestureDetector, obj5);
      },
);
const __initData2 = {
  code: "function MediaViewerTsx5(){const{absoluteFillObject,windowHeight,entranceAnimationDriver,interpolate,translatePos,closePosition}=this.__closure;return{...absoluteFillObject,height:windowHeight,backgroundColor:'black',opacity:Math.min(entranceAnimationDriver.get(),interpolate(translatePos.get(),[-closePosition,0,closePosition],[0,1,0]))};}",
};
const __initData3 = {
  code: "function MediaViewerTsx6(){const{isClosing,hideRelayoutSharedValue,overlayEnabled,isInteracting,withTiming,Easing,runOnJS,setShowHeader}=this.__closure;return{opacity:isClosing.get()||hideRelayoutSharedValue.get()?0:overlayEnabled.get()&&!isInteracting.get()?withTiming(1,{easing:Easing.linear,duration:150}):withTiming(0,{easing:Easing.linear,duration:75},'respect-motion-settings',function(){runOnJS(setShowHeader)(false);})};}",
};
const __initData4 = {
  code: "function MediaViewerTsx7(){const{runOnJS,setShowHeader}=this.__closure;runOnJS(setShowHeader)(false);}",
};
const __initData5 = {
  code: "function MediaViewerTsx8(){const{overlayEnabled,isInteracting,runOnJS,setShowHeader}=this.__closure;if(overlayEnabled.get()&&!isInteracting.get()){runOnJS(setShowHeader)(true);}}",
};
const __initData6 = {
  code: "function MediaViewerTsx9(){const{absoluteFillObject,translatePos,hideRelayoutSharedValue,withTiming,Easing}=this.__closure;return{...absoluteFillObject,alignItems:'center',justifyContent:'center',transform:[{translateY:translatePos.get()}],opacity:hideRelayoutSharedValue.get()?0:withTiming(1,{easing:Easing.linear,duration:75})};}",
};
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let obj3;
        let tmp4;
        const obj = react2;
        const cResult = obj.c(2);
        if (cResult[0] !== arg0) {
          const obj2 = { children: metroImportDefault(MediaViewer, obj3) };
          obj3 = {};
          const MediaViewerDimensionsProvider = MediaViewerDimensionsContext.MediaViewerDimensionsProvider;
          const merged = Object.assign(arg0);
          const tmp10 = metroImportDefault(MediaViewerDimensionsProvider, obj2);
          cResult[0] = arg0;
          cResult[1] = tmp10;
          tmp4 = tmp10;
        } else {
          tmp4 = cResult[1];
        }
        return tmp4;
      }
    : (arg0) => {
        let obj2;
        const obj = { children: metroImportDefault(MediaViewer, obj2) };
        obj2 = {};
        const MediaViewerDimensionsProvider = MediaViewerDimensionsContext.MediaViewerDimensionsProvider;
        const merged = Object.assign(arg0);
        return metroImportDefault(MediaViewerDimensionsProvider, obj);
      },
);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewer.tsx");

export default memo2Result;
