// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlayFooter.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import LegacyBaseButton from "../../../../../../_runtime/06147_LegacyBaseButton.js";
import useMessagePreviewHeight from "../../useMessagePreviewHeight.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let __initData4, __initData5, set, set2, set3;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = {
  drawerContainer: { overflow: "hidden", backgroundColor: "filter" },
  drawerHeaderTab: obj2,
  drawerHeader: { backgroundColor: "r" },
  messagePreviewContainer: { marginLeft: 6 },
  thumbnailsContainer: { paddingTop: 8 },
};
obj2 = { width: 40, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600 };
let closure_8 = createStyles.createStyles(obj);
let c9 = -1;
function clamp(arg0, arg1, arg2) {
  return Math.max(Math.min(arg0, arg2), arg1);
}
clamp.__closure = {};
clamp.__workletHash = 10219548303807;
clamp.__initData = {
  code: "function clamp_MediaModalOverlayFooterTsx1(value,min,max){return Math.max(Math.min(value,max),min);}",
};
let closure_11 = {
  code: "function MediaModalOverlayFooterTsx2(){const{animationState,NONE,isCollapsed}=this.__closure;animationState.set(NONE);isCollapsed.set(false);}",
};
let closure_12 = {
  code: "function MediaModalOverlayFooterTsx3(){const{animationState,NONE,isCollapsed}=this.__closure;animationState.set(NONE);isCollapsed.set(true);}",
};
let __initData = {
  code: "function MediaModalOverlayFooterTsx4(){const{minFooterHeight,animationState,DRAWER_PANNING,animationDriver,COLLAPSED,interpolate,EXPANDED,EXPANDED_MORE,expandedHeight,MAX_DRAWER_VERTICAL_DRAG}=this.__closure;return{height:minFooterHeight>0&&(animationState.get()===DRAWER_PANNING||animationDriver.get()!==COLLAPSED)?interpolate(animationDriver.get(),[COLLAPSED,EXPANDED,EXPANDED_MORE],[minFooterHeight,Math.max(expandedHeight,minFooterHeight),Math.max(expandedHeight,minFooterHeight)+MAX_DRAWER_VERTICAL_DRAG],'clamp'):undefined,justifyContent:'flex-start'};}",
};
let closure_14 = {
  code: "function MediaModalOverlayFooterTsx5(){const{interpolate,animationDriver,COLLAPSED,EXPANDED,thumbnailsElementHeight}=this.__closure;return{opacity:interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[1,0],'clamp'),height:interpolate(animationDriver.get(),[EXPANDED,COLLAPSED],[0,thumbnailsElementHeight],'clamp')};}",
};
let closure_15 = {
  code: "function MediaModalOverlayFooterTsx6(){const{interpolate,animationDriver,COLLAPSED,EXPANDED}=this.__closure;return{height:interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[0,24],'clamp')};}",
};
let closure_16 = {
  code: 'function MediaModalOverlayFooterTsx7(){const{r,g,b,interpolate,animationDriver,COLLAPSED,EXPANDED,a,DISMISSED}=this.__closure;return{backgroundColor:"rgba("+r+", "+g+", "+b+", "+interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[a,1],\'clamp\')+")",paddingVertical:interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[8,0],\'clamp\'),transform:[{translateY:interpolate(animationDriver.get(),[DISMISSED,COLLAPSED],[100,0],\'clamp\')}]};}',
};
let closure_17 = {
  code: "function MediaModalOverlayFooterTsx8(){const{runOnJS,onFullViewToggled}=this.__closure;runOnJS(onFullViewToggled)();}",
};
let closure_18 = {
  code: "function MediaModalOverlayFooterTsx9(){const{full,animationDriver,withTiming,DISMISSED,STANDARD_EASING,COLLAPSED,runOnJS,onFullViewToggled}=this.__closure;if(!full){animationDriver.set(withTiming(DISMISSED,{duration:350,easing:STANDARD_EASING},'respect-motion-settings',function(){animationDriver.set(COLLAPSED);}));}else{runOnJS(onFullViewToggled)();}}",
};
let closure_19 = {
  code: "function MediaModalOverlayFooterTsx10(){const{animationDriver,COLLAPSED}=this.__closure;animationDriver.set(COLLAPSED);}",
};
let closure_20 = {
  code: "function MediaModalOverlayFooterTsx11(){const{animationDriver,COLLAPSE_DRAWER_ON_RELEASE,runOnJS,setFull,isCollapsed,COLLAPSED,animationState,withDelay,withTiming,NONE,STANDARD_EASING,EXPANDED}=this.__closure;if(animationDriver.get()<COLLAPSE_DRAWER_ON_RELEASE){runOnJS(setFull)(false);isCollapsed.set(true);if(animationDriver.get()===COLLAPSED){animationState.set(withDelay(150,withTiming(NONE,{duration:0})));}else{animationDriver.set(withTiming(COLLAPSED,{duration:150,easing:STANDARD_EASING},'respect-motion-settings',function(){animationState.set(NONE);}));}}else{runOnJS(setFull)(true);animationDriver.set(withTiming(EXPANDED,{duration:150,easing:STANDARD_EASING},'respect-motion-settings',function(){isCollapsed.set(false);animationState.set(NONE);}));}}",
};
let closure_21 = {
  code: "function MediaModalOverlayFooterTsx12({translationY:translationY}){const{animationState,DRAWER_PANNING,clamp,expandedHeight,thumbnailsElementHeight,collapsedHeight,COLLAPSED,EXPANDED,animationDriver,COLLAPSE_DRAWER_DURING_DRAG,runOnJS,setFull,DRAWER_VERTICAL_DRAG_RESISTANCE,MAX_DRAWER_VERTICAL_DRAG,EXPANDED_MORE}=this.__closure;animationState.set(DRAWER_PANNING);if(translationY>0){const animValue=clamp(1-translationY/Math.abs(expandedHeight-(thumbnailsElementHeight+collapsedHeight)),COLLAPSED,EXPANDED);animationDriver.set(animValue);if(animValue<COLLAPSE_DRAWER_DURING_DRAG){runOnJS(setFull)(false);}}else{const scrollAmount=clamp(-translationY/DRAWER_VERTICAL_DRAG_RESISTANCE,0,MAX_DRAWER_VERTICAL_DRAG);animationDriver.set(EXPANDED+(EXPANDED_MORE-EXPANDED)*scrollAmount/MAX_DRAWER_VERTICAL_DRAG);}}",
};
let closure_22 = {
  code: "function MediaModalOverlayFooterTsx13(){const{animationState,NONE}=this.__closure;animationState.set(NONE);}",
};
let closure_23 = {
  code: "function MediaModalOverlayFooterTsx14(){const{isCollapsed,animationState,NONE}=this.__closure;isCollapsed.set(false);animationState.set(NONE);}",
};
let closure_24 = {
  code: "function MediaModalOverlayFooterTsx15(){const{overlayEnabled,animationDriver}=this.__closure;return[overlayEnabled.get(),animationDriver.get()];}",
};
let closure_25 = {
  code: "function MediaModalOverlayFooterTsx16([overlayEnabledValue,animationDriverValue]){const{DISMISSED_HIDE_OVERLAY,overlayEnabled}=this.__closure;if(overlayEnabledValue&&animationDriverValue<DISMISSED_HIDE_OVERLAY){overlayEnabled.set(false);}}",
};
let result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayFooter.tsx");

export const MediaModalOverlayFooter = function MediaModalOverlayFooter(channelId) {
  let NONE;
  let closure_13;
  let first1;
  let items12;
  let items13;
  let items15;
  let items16;
  let obj14;
  let obj16;
  let obj19;
  let obj21;
  let tmp44;
  const tmp = first1();
  const onFullViewToggled = channelId.onFullViewToggled;
  const overlayEnabled = channelId.overlayEnabled;
  const syncer = channelId.syncer;
  let tmp42Result = syncer.sources.length > 1;
  let num = 20;
  const sliderElement = channelId.sliderElement;
  if (tmp42Result) {
    num = 60;
  }
  let num2 = 0;
  if (tmp42Result) {
    num2 = 60;
  }
  const tmp3 = num;
  let obj = onFullViewToggled(num[6]);
  const sharedValue = obj.useSharedValue(true);
  let obj2 = onFullViewToggled(num[6]);
  const sharedValue1 = obj2.useSharedValue(NONE);
  const tmp6 = num2(sharedValue.useState(false), 2);
  const full = tmp6[0];
  const setFull = tmp6[1];
  const tmp8 = num2(sharedValue.useState(0), 2);
  first1 = tmp8[0];
  const tmp10 = tmp8[1];
  NONE = tmp10;
  const tmp11 = num2(sharedValue.useState(0), 2);
  const first2 = tmp11[0];
  const tmp14 = num2(sharedValue.useState(0), 2);
  const first3 = tmp14[0];
  let items = [first3, first2];
  const effect = sharedValue.useEffect(() => {
    const obj = useMessagePreviewHeight;
    const obj2 = { collapsedHeight: first3, expandedHeight: first2 };
    const result = obj.setMesssagePreviewHeight(obj2);
  }, items);
  let items1 = [full, onFullViewToggled];
  const effect1 = sharedValue.useEffect(() => {
    onFullViewToggled(first);
  }, items1);
  let obj3 = onFullViewToggled(num[6]);
  const sharedValue2 = obj3.useSharedValue(0);
  const items2 = [sharedValue2, sharedValue1, sharedValue];
  __initData = sharedValue.useCallback(() => {
    let result = sharedValue1.set(1);
    setFull(true);
    set = sharedValue2.set;
    const fn = function t() {
      const result = sharedValue1.set(NONE);
      const result1 = sharedValue.set(false);
    };
    const obj3 = { animationState: sharedValue1, NONE, isCollapsed: sharedValue };
    fn.__closure = obj3;
    fn.__workletHash = 8443967716862;
    fn.__initData = __initData;
    const obj = timing;
    const obj2 = { duration: 250, easing: native.STANDARD_EASING };
    let result1 = set(obj.withTiming(1, obj2, "respect-motion-settings", fn));
  }, items2);
  const items3 = [sharedValue2, sharedValue1, sharedValue];
  const callback1 = sharedValue.useCallback(() => {
    let result = sharedValue1.set(0);
    setFull(false);
    set = sharedValue2.set;
    const fn = function t() {
      const result = sharedValue1.set(NONE);
      const result1 = sharedValue.set(true);
    };
    const obj3 = { animationState: sharedValue1, NONE, isCollapsed: sharedValue };
    fn.__closure = obj3;
    fn.__workletHash = 12593758327764;
    fn.__initData = __initData2;
    const obj = timing;
    const obj2 = { duration: 250, easing: native.STANDARD_EASING };
    let result1 = set(obj.withTiming(0, obj2, "respect-motion-settings", fn));
  }, items3);
  const items4 = [sharedValue1, sharedValue, first2, first1, __initData, callback1];
  const callback2 = sharedValue.useCallback(() => {
    if (sharedValue1.get() === c9) {
      const value = sharedValue.get() && first2 === first1;
      if (!value) {
        if (sharedValue.get()) {
          callback();
        } else {
          callback1();
        }
      }
    }
  }, items4);
  const items5 = [tmp13];
  const items6 = [tmp10];
  const callback3 = sharedValue.useCallback((arg0) => {
    __initData(arg0 + 17);
  }, items5);
  const callback4 = sharedValue.useCallback((arg0) => {
    NONE(arg0 + 17);
  }, items6);
  let obj4 = onFullViewToggled(num[6]);
  function ee() {
    let height;
    if (first3 > 0) {
      if (2 === sharedValue1.get()) {
        const interpolate = ReanimatedRexport.interpolate;
        const value = sharedValue2.get();
        const items = [first3, ,];
        const _Math = Math;
        items[1] = Math.max(first2, first3);
        const _Math2 = Math;
        items[2] = Math.max(first2, first3) + 40;
        height = interpolate(value, [0, 1, 2], items, "clamp");
      }
    }
    return { height, justifyContent: "flex-start" };
  }
  let obj5 = {
    minFooterHeight: first3,
    animationState: sharedValue1,
    DRAWER_PANNING: 2,
    animationDriver: sharedValue2,
    COLLAPSED: 0,
    interpolate: onFullViewToggled(num[6]).interpolate,
    EXPANDED: 1,
    EXPANDED_MORE: 2,
    expandedHeight: first2,
    MAX_DRAWER_VERTICAL_DRAG: 40,
  };
  ee.__closure = obj5;
  ee.__workletHash = 10727625692479;
  ee.__initData = __initData;
  const animatedStyle = obj4.useAnimatedStyle(ee);
  let obj6 = onFullViewToggled(num[6]);
  function te() {
    let items;
    let obj2;
    let obj3;
    const obj = {
      opacity: obj2.interpolate(sharedValue2.get(), [0, 1], [1, 0], "clamp"),
      height: obj3.interpolate(sharedValue2.get(), [1, 0], items, "clamp"),
    };
    items = [0, num2];
    obj2 = ReanimatedRexport;
    obj3 = ReanimatedRexport;
    return obj;
  }
  let obj7 = {
    interpolate: onFullViewToggled(num[6]).interpolate,
    animationDriver: sharedValue2,
    COLLAPSED: 0,
    EXPANDED: 1,
    thumbnailsElementHeight: num2,
  };
  te.__closure = obj7;
  te.__workletHash = 9896169174287;
  te.__initData = sharedValue2;
  const items7 = [tmp16, num, sharedValue, sharedValue1];
  const animatedStyle1 = obj6.useAnimatedStyle(te);
  const callback5 = sharedValue.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    const value = height > num && sharedValue.get() && sharedValue1.get() === c9;
    if (value) {
      closure_13(height);
    }
  }, items7);
  let obj8 = onFullViewToggled(num[6]);
  function ae() {
    let obj2;
    const obj = { height: obj2.interpolate(sharedValue2.get(), [0, 1], [0, 24], "clamp") };
    obj2 = ReanimatedRexport;
    return obj;
  }
  ae.__closure = {
    interpolate: onFullViewToggled(num[6]).interpolate,
    animationDriver: sharedValue2,
    COLLAPSED: 0,
    EXPANDED: 1,
  };
  ae.__workletHash = 13288648164744;
  ae.__initData = __initData;
  ({ interpolate: onFullViewToggled(num[6]).interpolate, animationDriver: sharedValue2, COLLAPSED: 0, EXPANDED: 1 });
  const animatedStyle2 = obj8.useAnimatedStyle(ae);
  const tmp30 = overlayEnabled(num[10])();
  const mediaModalFooterBackgroundColorRgba = tmp30.mediaModalFooterBackgroundColorRgba;
  const r = mediaModalFooterBackgroundColorRgba.r;
  __initData4 = r;
  const g = mediaModalFooterBackgroundColorRgba.g;
  closure_19 = g;
  const b = mediaModalFooterBackgroundColorRgba.b;
  __initData5 = b;
  const a = mediaModalFooterBackgroundColorRgba.a;
  const __initData6 = a;
  const MediaModalFooterUnderlay = tmp30.MediaModalFooterUnderlay;
  function ie() {
    let items;
    let items1;
    let obj2;
    let obj3;
    let obj5;
    const obj = {
      backgroundColor:
        "rgba(" +
        __initData4 +
        ", " +
        closure_19 +
        ", " +
        __initData5 +
        ", " +
        obj2.interpolate(sharedValue2.get(), [0, 1], items, "clamp") +
        ")",
      paddingVertical: obj3.interpolate(sharedValue2.get(), [0, 1], [8, 0], "clamp"),
      transform: items1,
    };
    items = [__initData6, 1];
    obj2 = ReanimatedRexport;
    obj3 = ReanimatedRexport;
    const obj4 = { translateY: obj5.interpolate(sharedValue2.get(), [-1, 0], [100, 0], "clamp") };
    items1 = [obj4];
    obj5 = ReanimatedRexport;
    return obj;
  }
  const obj10 = onFullViewToggled(num[6]);
  ie.__closure = {
    r,
    g,
    b,
    interpolate: onFullViewToggled(num[6]).interpolate,
    animationDriver: sharedValue2,
    COLLAPSED: 0,
    EXPANDED: 1,
    a,
    DISMISSED: -1,
  };
  ie.__workletHash = 1645059598385;
  ie.__initData = callback1;
  ({
    r,
    g,
    b,
    interpolate: onFullViewToggled(num[6]).interpolate,
    animationDriver: sharedValue2,
    COLLAPSED: 0,
    EXPANDED: 1,
    a,
    DISMISSED: -1,
  });
  const animatedStyle3 = obj10.useAnimatedStyle(ie);
  const ref = sharedValue.useRef(undefined);
  const ref1 = sharedValue.useRef(undefined);
  let tmp34 = num2(sharedValue.useState(true), 2);
  const first4 = tmp34[0];
  const items8 = [first1, first2, full, callback2];
  const tmp36 = tmp34[1];
  const memo = sharedValue.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const fn = function t() {
      const obj = onFullViewToggled(num[6]);
      obj.runOnJS(__initData3)();
    };
    const FlingResult = Gesture.Fling();
    const directionResult = FlingResult.direction(LegacyBaseButton.Directions.UP);
    let obj = { runOnJS: ReanimatedRexport.runOnJS, onFullViewToggled: callback2 };
    fn.__closure = obj;
    fn.__workletHash = 1612404502942;
    fn.__initData = __initData3;
    const onStartResult = directionResult.onStart(fn);
    let tmp2 = !first;
    const enabled = onStartResult.withRef(ref).enabled;
    onStartResult.withRef(ref);
    if (!first) {
      tmp2 = first2 > first1;
    }
    return enabled(tmp2);
  }, items8);
  const items9 = [sharedValue2, full, callback2, first4];
  const memo1 = sharedValue.useMemo(() => {
    let animationDriver;
    const Gesture = LegacyBaseButton.Gesture;
    let fn = function t() {
      if (full) {
        const obj3 = onFullViewToggled(num[6]);
        obj3.runOnJS(__initData3)();
      } else {
        set = animationDriver.set;
        const tmp5 = onFullViewToggled(num[8]);
        const withTiming = tmp5.withTiming;
        const fn = function t() {
          const result = animationDriver.set(0);
        };
        const obj2 = { animationDriver, COLLAPSED: 0 };
        fn.__closure = obj2;
        fn.__workletHash = 15839049590506;
        fn.__initData = __initData;
        const obj = { duration: 350, easing: onFullViewToggled(num[9]).STANDARD_EASING };
        let result = set(withTiming(-1, obj, "respect-motion-settings", fn));
      }
    };
    const FlingResult = Gesture.Fling();
    const directionResult = FlingResult.direction(LegacyBaseButton.Directions.DOWN);
    let obj = {
      full,
      animationDriver: sharedValue2,
      withTiming: timing.withTiming,
      DISMISSED: -1,
      STANDARD_EASING: native.STANDARD_EASING,
      COLLAPSED: 0,
      runOnJS: ReanimatedRexport.runOnJS,
      onFullViewToggled: callback2,
    };
    fn.__closure = obj;
    fn.__workletHash = 16686210274151;
    fn.__initData = __initData4;
    const onStartResult = directionResult.onStart(fn);
    const withRefResult = onStartResult.withRef(ref1);
    return withRefResult.enabled(first4);
  }, items9);
  const items10 = [sharedValue2, sharedValue1, first1, first2, full, sharedValue, first4, num2];
  const memo2 = sharedValue.useMemo(() => {
    let animationState;
    let isCollapsed;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    let fn = function a(translationY) {
      translationY = translationY.translationY;
      const result = animationState.set(2);
      if (translationY > 0) {
        const _Math3 = Math;
        if (typeof first2 === "function") {
          const _Math4 = Math;
          const _Math5 = Math;
          const bound = Math.max(Math.min(tmp12, 1), 0);
          const result1 = sharedValue2.set(bound);
          if (bound < 0.4) {
            const obj = onFullViewToggled(num[6]);
            obj.runOnJS(setFull)(false);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (typeof first2 === "function") {
        const _Math = Math;
        const _Math2 = Math;
        const result2 = sharedValue2.set(1 + Math.max(Math.min(tmp3, 40), 0) / 40);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    const maxPointersResult = PanResult.maxPointers(1);
    const activeOffsetYResult = maxPointersResult.activeOffsetY(10);
    let obj = {
      animationState: sharedValue1,
      DRAWER_PANNING: 2,
      clamp,
      expandedHeight: first2,
      thumbnailsElementHeight: num2,
      collapsedHeight: first1,
      COLLAPSED: 0,
      EXPANDED: 1,
      animationDriver: sharedValue2,
      COLLAPSE_DRAWER_DURING_DRAG: 0.4,
      runOnJS: ReanimatedRexport.runOnJS,
      setFull,
      DRAWER_VERTICAL_DRAG_RESISTANCE: 3,
      MAX_DRAWER_VERTICAL_DRAG: 40,
      EXPANDED_MORE: 2,
    };
    fn.__closure = obj;
    fn.__workletHash = 7012168718409;
    fn.__initData = __initData6;
    let fn2 = function t() {
      if (sharedValue2.get() < 0.75) {
        const obj2 = onFullViewToggled(num[6]);
        obj2.runOnJS(setFull)(false);
        let result = isCollapsed.set(true);
        if (0 === sharedValue2.get()) {
          set = animationState.set;
          const withDelay = onFullViewToggled((0)[6]).withDelay;
          onFullViewToggled((0)[6]);
          const obj3 = onFullViewToggled((0)[8]);
          let result1 = set(withDelay(150, obj3.withTiming(NONE, { duration: 0 })));
        } else {
          set3 = sharedValue2.set;
          const tmp34 = onFullViewToggled((0)[8]);
          const withTiming2 = tmp34.withTiming;
          const fn2 = function a() {
            const result = animationState.set(NONE);
          };
          const obj6 = { animationState, NONE };
          fn2.__closure = obj6;
          fn2.__workletHash = 15486611138793;
          fn2.__initData = ref;
          const obj5 = { duration: 150, easing: onFullViewToggled((0)[9]).STANDARD_EASING };
          set3(withTiming2(0, obj5, "respect-motion-settings", fn2));
        }
      } else {
        const obj4 = onFullViewToggled(num[6]);
        obj4.runOnJS(setFull)(true);
        set2 = sharedValue2.set;
        const tmp21 = onFullViewToggled(num[8]);
        const withTiming = tmp21.withTiming;
        const fn = function t() {
          const result = isCollapsed.set(false);
          const result1 = animationState.set(NONE);
        };
        const obj8 = { isCollapsed, animationState, NONE };
        fn.__closure = obj8;
        fn.__workletHash = 8502240261161;
        fn.__initData = ref1;
        const obj7 = { duration: 150, easing: onFullViewToggled(num[9]).STANDARD_EASING };
        set2(withTiming(1, obj7, "respect-motion-settings", fn));
      }
    };
    const onUpdateResult = activeOffsetYResult.onUpdate(fn);
    let obj2 = {
      animationDriver: sharedValue2,
      COLLAPSE_DRAWER_ON_RELEASE: 0.75,
      runOnJS: ReanimatedRexport.runOnJS,
      setFull,
      isCollapsed: sharedValue,
      COLLAPSED: 0,
      animationState: sharedValue1,
      withDelay: ReanimatedRexport.withDelay,
      withTiming: timing.withTiming,
      NONE,
      STANDARD_EASING: native.STANDARD_EASING,
      EXPANDED: 1,
    };
    fn2.__closure = obj2;
    fn2.__workletHash = 16268892990477;
    fn2.__initData = __initData5;
    let tmp2 = first;
    const enabled = onUpdateResult.onEnd(fn2).enabled;
    onUpdateResult.onEnd(fn2);
    if (first) {
      tmp2 = first4;
    }
    return enabled(tmp2);
  }, items10);
  function oe() {
    const items = [overlayEnabled.get(), sharedValue2.get()];
    return items;
  }
  oe.__closure = { overlayEnabled, animationDriver: sharedValue2 };
  oe.__workletHash = 12659996728578;
  oe.__initData = first4;
  function ne(arg0) {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    if (tmp) {
      const result = overlayEnabled.set(false);
    }
  }
  ne.__closure = { DISMISSED_HIDE_OVERLAY: -0.25, overlayEnabled };
  ne.__workletHash = 11470550406895;
  ne.__initData = memo;
  const obj12 = onFullViewToggled(num[6]);
  const animatedReaction = obj12.useAnimatedReaction(oe, ne);
  const items11 = [memo2, memo1, memo];
  const memo3 = sharedValue.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    return Gesture.Exclusive(memo, memo2, memo1);
  }, items11);
  const obj13 = { gesture: memo3, children: setFull(tmp44, obj14) };
  const GestureDetector = onFullViewToggled(num[11]).GestureDetector;
  obj14 = { style: animatedStyle3, children: items12 };
  items12 = [MediaModalFooterUnderlay];
  tmp44 = overlayEnabled(num[12]);
  const SafeAreaPaddingView = onFullViewToggled(num[13]).SafeAreaPaddingView;
  const obj15 = { style: items13, children: full(onFullViewToggled(num[14]).ActionSheetHeaderBar, obj16) };
  items13 = [animatedStyle2, tmp.drawerContainer];
  obj16 = { tabStyle: tmp.drawerHeaderTab, style: tmp.drawerHeader };
  const tmp45 = overlayEnabled(num[12]);
  const items14 = [full(tmp45, obj15), sliderElement];
  const obj17 = { onLayout: callback5, style: animatedStyle, children: items15 };
  const obj18 = { style: tmp.messagePreviewContainer, children: full(overlayEnabled(num[15]), obj19) };
  obj19 = {
    channelId: channelId.channelId,
    messageId: channelId.messageId,
    onClose: channelId.onClose,
    onTapMessage: callback2,
    onMeasureFullHeight: callback3,
    onMeasureCollapsedHeight: callback4,
    full,
    canExpand: first2 > first1,
    setScrollViewIsAtTop: tmp36,
    flingUpRef: ref,
    flingDownRef: ref1,
    animationDriver: sharedValue2,
  };
  const tmp46 = overlayEnabled(num[12]);
  items15 = [full(sharedValue1, obj18)];
  if (tmp42Result) {
    const obj20 = { style: items16, children: full(overlayEnabled(tmp3[16]), obj21) };
    items16 = [animatedStyle1, tmp.thumbnailsContainer];
    obj21 = { syncer };
    const tmp29Result = overlayEnabled(tmp3[12]);
    tmp42Result = tmp42(tmp29Result, obj20);
  }
  const rect = { bottom: true, left: true, right: true, children: items14 };
  items15[1] = tmp42Result;
  items14[2] = setFull(tmp46, obj17);
  items12[1] = setFull(SafeAreaPaddingView, rect);
  return full(GestureDetector, obj13);
};
