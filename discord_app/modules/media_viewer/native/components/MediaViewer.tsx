// discord_app/modules/media_viewer/native/components/MediaViewer.tsx
import c from "../../../../../_runtime/00576_c.js";
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
  __initData2 = undefined;
  ({ onLongPress, originLayout, renderMedia, renderOverlay, swipeVelocityThreshold } = arg0);
  ({ useViewerProps, zoomed } = syncer);
  value = [height(6872).MEDIA_VIEWER];
  let tmp = height;
  const tmp3 = height(6848);
  [tmp5, tmp6] = sharedValue(sharedValue1.useState(true), 2);
  _require = tmp6;
  const tmp4 = sharedValue(sharedValue1.useState(true), 2);
  const tmp7 = _require;
  const mediaViewerDimensions = require("MediaViewerDimensionsContext").useMediaViewerDimensions();
  ({ width, height } = mediaViewerDimensions);
  const tmp9 = height(13033)({ index, onClose, sources, windowHeight: height, windowWidth: width });
  dependencyMap = tmp9;
  let obj = require("MediaViewerDimensionsContext");
  sharedValue = require("ReanimatedRexport").useSharedValue(0);
  let obj2 = require("ReanimatedRexport");
  sharedValue1 = require("ReanimatedRexport").useSharedValue(false);
  let obj3 = require("ReanimatedRexport");
  const animatedRef = require("ReanimatedRexport").useAnimatedRef();
  closure_6 = tmp13;
  const viewerProps = useViewerProps();
  ({ ref, onScroll, onContentSizeChange, useItemVisible } = viewerProps);
  let obj4 = require("ReanimatedRexport");
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
  let obj5 = require("useMediaViewerPanGesture");
  height(5371)(
    sharedValue1.useCallback(() => {
      if (!isClosing.get()) {
        dismiss();
      }
      return true;
    }, items1),
  );
  const absoluteFillObject = closure_6.absoluteFillObject;
  const tmp16 = height(5371);
  function ee() {
    const obj = {};
    const merged = Object.assign(absoluteFillObject);
    obj.height = height;
    obj.backgroundColor = "black";
    value = sharedValue.get();
    const items = [-closure_2, 0, closure_2];
    obj.opacity = Math.min(value, ReanimatedRexport.interpolate(translatePos.get(), items, [0, 1, 0]));
    return obj;
  }
  const obj6 = require("ReanimatedRexport");
  ee.__closure = {
    absoluteFillObject,
    windowHeight: height,
    entranceAnimationDriver: sharedValue,
    interpolate: require("ReanimatedRexport").interpolate,
    translatePos,
    closePosition: tmp9,
  };
  ee.__workletHash = 5943145829824;
  ee.__initData = __initData2;
  const obj8 = {};
  const animatedStyle = obj6.useAnimatedStyle(ee);
  let merged = Object.assign(closure_6.absoluteFillObject);
  obj8.backgroundColor = "transparent";
  const obj7 = {
    absoluteFillObject,
    windowHeight: height,
    entranceAnimationDriver: sharedValue,
    interpolate: require("ReanimatedRexport").interpolate,
    translatePos,
    closePosition: tmp9,
  };
  function ne() {
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
          c0(closure_2[7]).runOnJS(setShowHeader)(false);
        };
        const obj5 = { runOnJS: ReanimatedRexport.runOnJS, setShowHeader };
        fn.__closure = obj5;
        fn.__workletHash = 15904527555202;
        fn.__initData = __initData;
        withTimingResult = obj3.withTiming(0, obj4, "respect-motion-settings", fn);
      }
    }
    return { opacity };
  }
  const obj9 = require("ReanimatedRexport");
  ne.__closure = {
    isClosing,
    hideRelayoutSharedValue: sharedValue1,
    overlayEnabled,
    isInteracting,
    withTiming: require("timing").withTiming,
    Easing: require("ReanimatedRexport").Easing,
    runOnJS: require("ReanimatedRexport").runOnJS,
    setShowHeader: tmp6,
  };
  ne.__workletHash = 6649973616396;
  ne.__initData = __initData3;
  const animatedStyle1 = obj9.useAnimatedStyle(ne);
  const obj10 = {
    isClosing,
    hideRelayoutSharedValue: sharedValue1,
    overlayEnabled,
    isInteracting,
    withTiming: require("timing").withTiming,
    Easing: require("ReanimatedRexport").Easing,
    runOnJS: require("ReanimatedRexport").runOnJS,
    setShowHeader: tmp6,
  };
  function te() {
    value = overlayEnabled.get();
    if (value) {
      value = !isInteracting.get();
    }
    if (value) {
      ReanimatedRexport.runOnJS(c0)(true);
    }
  }
  const obj11 = require("ReanimatedRexport");
  te.__closure = { overlayEnabled, isInteracting, runOnJS: require("ReanimatedRexport").runOnJS, setShowHeader: tmp6 };
  te.__workletHash = 1909187618991;
  te.__initData = __initData4;
  const derivedValue = obj11.useDerivedValue(te);
  const obj12 = { overlayEnabled, isInteracting, runOnJS: require("ReanimatedRexport").runOnJS, setShowHeader: tmp6 };
  function le() {
    const obj = {};
    const merged = Object.assign(absoluteFillObject);
    obj.alignItems = "center";
    obj.justifyContent = "center";
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
  const obj13 = require("ReanimatedRexport");
  le.__closure = {
    absoluteFillObject,
    translatePos,
    hideRelayoutSharedValue: sharedValue1,
    withTiming: require("timing").withTiming,
    Easing: require("ReanimatedRexport").Easing,
  };
  le.__workletHash = 3255262686776;
  le.__initData = __initData5;
  const animatedStyle2 = obj13.useAnimatedStyle(le);
  ref = sharedValue1.useRef(null);
  const items2 = [sources.length > 1, animatedRef, sharedValue1];
  const callback = sharedValue1.useCallback(() => {
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
  }, items2);
  const items3 = [sharedValue1];
  const callback1 = sharedValue1.useCallback(() => {
    const result = sharedValue1.set(false);
  }, items3);
  __initData2 = sharedValue1.useRef(false);
  const items4 = [width, height, callback];
  const effect = sharedValue1.useEffect(() => {
    if (ref2.current) {
      callback();
    } else {
      tmp.current = true;
    }
  }, items4);
  const items5 = [callback];
  const callback2 = sharedValue1.useCallback((orientation, orientation2) => {
    if (orientation.orientation !== orientation2.orientation) {
      callback();
    }
    if (closure_9) {
      const result = useVideoControls.unpauseCurrentVideoIfNeeded();
    }
  }, items5);
  const obj14 = {
    absoluteFillObject,
    translatePos,
    hideRelayoutSharedValue: sharedValue1,
    withTiming: require("timing").withTiming,
    Easing: require("ReanimatedRexport").Easing,
  };
  const orientationListener = require("DeviceOrientation").useOrientationListener(callback2);
  const obj16 = { style: closure_6.absoluteFill, onAccessibilityEscape: dismiss, onLayout: callback1, children: null };
  const obj15 = require("DeviceOrientation");
  const items6 = [
    dismiss(height(10327), { barStyle: "light-content", hidden: !tmp5 }),
    dismiss(height(4811).View, { style: animatedStyle }),
    dismiss(height(4812), {
      ref: animatedRef,
      style: animatedStyle2,
      children: dismiss(callback, {
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
  const obj18 = { style: null, pointerEvents: null, children: null };
  const items7 = [sharedValue(sharedValue1.useState(obj8), 1)[0], animatedStyle1];
  obj18.style = items7;
  let str = "none";
  const obj17 = { barStyle: "light-content", hidden: !tmp5 };
  const tmp29 = dismiss(callback, {
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
  const tmp30 = translatePos;
  const tmp31 = animatedRef;
  if (tmp5) {
    str = "box-none";
  }
  obj18.pointerEvents = str;
  obj18.children = renderOverlay(dismiss, overlayEnabled);
  items6[3] = dismiss(height(4812), obj18);
  items6[4] = dismiss(tmp(10819), {});
  obj16.children = items6;
  const children = tmp30(tmp31, obj16);
  return dismiss(tmp7(6848).AnalyticsLocationProvider, { value: tmp3(value).analyticsLocations, children });
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PlatformUtils = fn(1382);
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
let ReactCompilerGating = fn(558);
let closure_14 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function MediaViewer(entranceAnimationDriver) {
        const cResult = entranceAnimationDriver(originLayout[6]).c(32);
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
        const obj = entranceAnimationDriver(originLayout[6]);
        const tmp = entranceAnimationDriver;
        const sharedValue = entranceAnimationDriver(originLayout[7]).useSharedValue(false);
        const obj2 = entranceAnimationDriver(originLayout[7]);
        const fn = function t() {
          value = zoomed.get();
          let tmp2 = !value;
          if (!value) {
            tmp2 = !sharedValue.get();
          }
          return tmp2;
        };
        fn.__closure = { zoomed, pinching: sharedValue };
        fn.__workletHash = 9157951736691;
        fn.__initData = sharedValue;
        const derivedValue = entranceAnimationDriver(originLayout[7]).useDerivedValue(fn);
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
              return closure_10.set(false);
            }
          }
          cResult[2] = sharedValue;
          cResult[3] = D;
        } else {
          class D {
            constructor() {
              return closure_10.set(false);
            }
          }
        }
        const obj3 = entranceAnimationDriver(originLayout[7]);
        const mediaViewerPanGesture = tmp(originLayout[8]).useMediaViewerPanGesture(panGestureConfig, derivedValue);
        const panGestureGenerator = mediaViewerPanGesture.panGestureGenerator;
        if (cResult[4] === entranceAnimationDriver) {
          class D {
            constructor() {
              return closure_10.set(false);
            }
          }
        }
        const fn3 = function z(arg0, index) {
          return React5(MediaViewerItem.MediaViewerItem, {
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
          });
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
        const tmpResult = tmp(originLayout[8]);
      }
    : function MediaViewer(entranceAnimationDriver) {
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
        const sharedValue = entranceAnimationDriver(originLayout[7]).useSharedValue(false);
        const obj = entranceAnimationDriver(originLayout[7]);
        class M {
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
        M.__closure = { zoomed, pinching: sharedValue };
        M.__workletHash = 1775226328369;
        M.__initData = panGestureGenerator;
        derivedValue = entranceAnimationDriver(originLayout[7]).useDerivedValue(M);
        const items = [sharedValue];
        const items1 = [sharedValue];
        const callback = renderMedia.useCallback(
          (nativeEvent) => sharedValue.set(2 === nativeEvent.nativeEvent.touches.length),
          items,
        );
        const callback1 = renderMedia.useCallback(() => sharedValue.set(false), items1);
        const obj2 = entranceAnimationDriver(originLayout[7]);
        const mediaViewerPanGesture = entranceAnimationDriver(originLayout[8]).useMediaViewerPanGesture(
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
        const obj3 = entranceAnimationDriver(originLayout[8]);
        class T {
          constructor() {
            obj = { scrollEnabled: closure_11.get() };
            return obj;
          }
        }
        T.__closure = { scrollEnabled: derivedValue };
        T.__workletHash = 14892821132407;
        T.__initData = __initData;
        const animatedProps = entranceAnimationDriver(originLayout[7]).useAnimatedProps(T);
        const obj4 = entranceAnimationDriver(originLayout[7]);
        const obj5 = { gesture: mediaViewerPanGesture.nativeGesture, children: null };
        const obj6 = {
          ref,
          style: useItemVisible.absoluteFill,
          sections: null,
          onTouchStart: callback,
          onTouchEnd: callback1,
          onTouchCancel: callback1,
          initialScrollItem: onLongPress(originLayout[10])(index),
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
        obj5.children = windowWidth(entranceAnimationDriver(originLayout[11]).AnimatedFastList, obj6);
        return windowWidth(entranceAnimationDriver(originLayout[12]).GestureDetector, obj5);
      },
);
let __initData2 = {
  code: "function MediaViewerTsx5(){const{absoluteFillObject,windowHeight,entranceAnimationDriver,interpolate,translatePos,closePosition}=this.__closure;return{...absoluteFillObject,height:windowHeight,backgroundColor:'black',opacity:Math.min(entranceAnimationDriver.get(),interpolate(translatePos.get(),[-closePosition,0,closePosition],[0,1,0]))};}",
};
const __initData3 = {
  code: "function MediaViewerTsx6(){const{isClosing,hideRelayoutSharedValue,overlayEnabled,isInteracting,withTiming,Easing,runOnJS,setShowHeader}=this.__closure;return{opacity:isClosing.get()||hideRelayoutSharedValue.get()?0:overlayEnabled.get()&&!isInteracting.get()?withTiming(1,{easing:Easing.linear,duration:150}):withTiming(0,{easing:Easing.linear,duration:75},'respect-motion-settings',function(){runOnJS(setShowHeader)(false);})};}",
};
let closure_17 = {
  code: "function MediaViewerTsx7(){const{runOnJS,setShowHeader}=this.__closure;runOnJS(setShowHeader)(false);}",
};
const __initData4 = {
  code: "function MediaViewerTsx8(){const{overlayEnabled,isInteracting,runOnJS,setShowHeader}=this.__closure;if(overlayEnabled.get()&&!isInteracting.get()){runOnJS(setShowHeader)(true);}}",
};
const __initData5 = {
  code: "function MediaViewerTsx9(){const{absoluteFillObject,translatePos,hideRelayoutSharedValue,withTiming,Easing}=this.__closure;return{...absoluteFillObject,alignItems:'center',justifyContent:'center',transform:[{translateY:translatePos.get()}],opacity:hideRelayoutSharedValue.get()?0:withTiming(1,{easing:Easing.linear,duration:75})};}",
};
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewer.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function MediaViewerWithProvider(arg0) {
        const cResult = c.c(2);
        if (cResult[0] !== arg0) {
          const obj2 = { children: null };
          const obj3 = {};
          const merged = Object.assign(arg0);
          obj2.children = React5(MediaViewer, obj3);
          const tmp10 = React5(MediaViewerDimensionsContext.MediaViewerDimensionsProvider, obj2);
          cResult[0] = arg0;
          cResult[1] = tmp10;
          let tmp4 = tmp10;
        } else {
          tmp4 = cResult[1];
        }
        return tmp4;
      }
    : function MediaViewerWithProvider(arg0) {
        const obj = { children: null };
        const merged = Object.assign(arg0);
        obj.children = React5(MediaViewer, {});
        return React5(MediaViewerDimensionsContext.MediaViewerDimensionsProvider, obj);
      },
);
