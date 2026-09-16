// === Module 13115: MediaModalOverlayFooter ===

// Module 13115 (MediaModalOverlayFooter)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4374 */;
import timing from "timing" /* 4639 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6763 */;
import useMessagePreviewHeight from "useMessagePreviewHeight" /* 11679 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { drawerContainer: { overflow: "hidden", backgroundColor: "w" }, drawerHeaderTab: { width: 40, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600 }, drawerHeader: { backgroundColor: "Array" }, messagePreviewContainer: { marginLeft: 6 }, thumbnailsContainer: { paddingTop: 8 } };
let closure_8 = createStyles.createStyles(obj2);
let c9 = -1;
function clamp(arg0, arg1, arg2) {
  return Math.max(Math.min(arg0, arg2), arg1);
}
clamp.__closure = {};
clamp.__workletHash = 10219548303807;
clamp.__initData = { code: "function clamp_MediaModalOverlayFooterTsx1(value,min,max){return Math.max(Math.min(value,max),min);}" };
let closure_11 = { code: "function MediaModalOverlayFooterTsx2(){const{animationState,NONE,isCollapsed}=this.__closure;animationState.set(NONE);isCollapsed.set(false);}" };
let closure_12 = { code: "function MediaModalOverlayFooterTsx3(){const{animationState,NONE,isCollapsed}=this.__closure;animationState.set(NONE);isCollapsed.set(true);}" };
let __initData = { code: "function MediaModalOverlayFooterTsx4(){const{minFooterHeight,animationState,DRAWER_PANNING,animationDriver,COLLAPSED,interpolate,EXPANDED,EXPANDED_MORE,expandedHeight,MAX_DRAWER_VERTICAL_DRAG}=this.__closure;return{height:minFooterHeight>0&&(animationState.get()===DRAWER_PANNING||animationDriver.get()!==COLLAPSED)?interpolate(animationDriver.get(),[COLLAPSED,EXPANDED,EXPANDED_MORE],[minFooterHeight,Math.max(expandedHeight,minFooterHeight),Math.max(expandedHeight,minFooterHeight)+MAX_DRAWER_VERTICAL_DRAG],'clamp'):undefined,justifyContent:'flex-start'};}" };
let closure_14 = { code: "function MediaModalOverlayFooterTsx5(){const{interpolate,animationDriver,COLLAPSED,EXPANDED,thumbnailsElementHeight}=this.__closure;return{opacity:interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[1,0],'clamp'),height:interpolate(animationDriver.get(),[EXPANDED,COLLAPSED],[0,thumbnailsElementHeight],'clamp')};}" };
let closure_15 = { code: "function MediaModalOverlayFooterTsx6(){const{interpolate,animationDriver,COLLAPSED,EXPANDED}=this.__closure;return{height:interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[0,24],'clamp')};}" };
let closure_16 = { code: "function MediaModalOverlayFooterTsx7(){const{r,g,b,interpolate,animationDriver,COLLAPSED,EXPANDED,a,DISMISSED}=this.__closure;return{backgroundColor:\"rgba(\"+r+\", \"+g+\", \"+b+\", \"+interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[a,1],'clamp')+\")\",paddingVertical:interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[8,0],'clamp'),transform:[{translateY:interpolate(animationDriver.get(),[DISMISSED,COLLAPSED],[100,0],'clamp')}]};}" };
let closure_17 = { code: "function MediaModalOverlayFooterTsx8(){const{runOnJS,onFullViewToggled}=this.__closure;runOnJS(onFullViewToggled)();}" };
let closure_18 = { code: "function MediaModalOverlayFooterTsx9(){const{full,animationDriver,withTiming,DISMISSED,STANDARD_EASING,COLLAPSED,runOnJS,onFullViewToggled}=this.__closure;if(!full){animationDriver.set(withTiming(DISMISSED,{duration:350,easing:STANDARD_EASING},'respect-motion-settings',function(){animationDriver.set(COLLAPSED);}));}else{runOnJS(onFullViewToggled)();}}" };
let closure_19 = { code: "function MediaModalOverlayFooterTsx10(){const{animationDriver,COLLAPSED}=this.__closure;animationDriver.set(COLLAPSED);}" };
let closure_20 = { code: "function MediaModalOverlayFooterTsx11(){const{animationDriver,COLLAPSE_DRAWER_ON_RELEASE,runOnJS,setFull,isCollapsed,COLLAPSED,animationState,withDelay,withTiming,NONE,STANDARD_EASING,EXPANDED}=this.__closure;if(animationDriver.get()<COLLAPSE_DRAWER_ON_RELEASE){runOnJS(setFull)(false);isCollapsed.set(true);if(animationDriver.get()===COLLAPSED){animationState.set(withDelay(150,withTiming(NONE,{duration:0})));}else{animationDriver.set(withTiming(COLLAPSED,{duration:150,easing:STANDARD_EASING},'respect-motion-settings',function(){animationState.set(NONE);}));}}else{runOnJS(setFull)(true);animationDriver.set(withTiming(EXPANDED,{duration:150,easing:STANDARD_EASING},'respect-motion-settings',function(){isCollapsed.set(false);animationState.set(NONE);}));}}" };
let closure_21 = { code: "function MediaModalOverlayFooterTsx12({translationY:translationY}){const{animationState,DRAWER_PANNING,clamp,expandedHeight,thumbnailsElementHeight,collapsedHeight,COLLAPSED,EXPANDED,animationDriver,COLLAPSE_DRAWER_DURING_DRAG,runOnJS,setFull,DRAWER_VERTICAL_DRAG_RESISTANCE,MAX_DRAWER_VERTICAL_DRAG,EXPANDED_MORE}=this.__closure;animationState.set(DRAWER_PANNING);if(translationY>0){const animValue=clamp(1-translationY/Math.abs(expandedHeight-(thumbnailsElementHeight+collapsedHeight)),COLLAPSED,EXPANDED);animationDriver.set(animValue);if(animValue<COLLAPSE_DRAWER_DURING_DRAG){runOnJS(setFull)(false);}}else{const scrollAmount=clamp(-translationY/DRAWER_VERTICAL_DRAG_RESISTANCE,0,MAX_DRAWER_VERTICAL_DRAG);animationDriver.set(EXPANDED+(EXPANDED_MORE-EXPANDED)*scrollAmount/MAX_DRAWER_VERTICAL_DRAG);}}" };
let closure_22 = { code: "function MediaModalOverlayFooterTsx13(){const{animationState,NONE}=this.__closure;animationState.set(NONE);}" };
let closure_23 = { code: "function MediaModalOverlayFooterTsx14(){const{isCollapsed,animationState,NONE}=this.__closure;isCollapsed.set(false);animationState.set(NONE);}" };
let closure_24 = { code: "function MediaModalOverlayFooterTsx15(){const{overlayEnabled,animationDriver}=this.__closure;return[overlayEnabled.get(),animationDriver.get()];}" };
let closure_25 = { code: "function MediaModalOverlayFooterTsx16([overlayEnabledValue,animationDriverValue]){const{DISMISSED_HIDE_OVERLAY,overlayEnabled}=this.__closure;if(overlayEnabledValue&&animationDriverValue<DISMISSED_HIDE_OVERLAY){overlayEnabled.set(false);}}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayFooter.tsx");

export const MediaModalOverlayFooter = function MediaModalOverlayFooter(channelId) {
  let tmp = first1();
  const onFullViewToggled = channelId.onFullViewToggled;
  const overlayEnabled = channelId.overlayEnabled;
  const syncer = channelId.syncer;
  let tmp41Result = syncer.sources.length > 1;
  let num = 20;
  if (tmp41Result) {
    num = 60;
  }
  let num2 = 0;
  if (tmp41Result) {
    num2 = 60;
  }
  const sharedValue = onFullViewToggled(num[6]).useSharedValue(true);
  let obj = onFullViewToggled(num[6]);
  const sharedValue1 = onFullViewToggled(num[6]).useSharedValue(NONE);
  const tmp6 = num2(sharedValue.useState(false), 2);
  const full = tmp6[0];
  const setFull = tmp6[1];
  const tmp8 = num2(sharedValue.useState(0), 2);
  first1 = tmp8[0];
  NONE = tmp10;
  const tmp11 = num2(sharedValue.useState(0), 2);
  const first2 = tmp11[0];
  const tmp14 = num2(sharedValue.useState(0), 2);
  const first3 = tmp14[0];
  let items = [first3, first2];
  const effect = sharedValue.useEffect(() => {
    const result = useMessagePreviewHeight.setMesssagePreviewHeight({ collapsedHeight: first3, expandedHeight: first2 });
  }, items);
  let items1 = [full, onFullViewToggled];
  const effect1 = sharedValue.useEffect(() => {
    onFullViewToggled(first);
  }, items1);
  let obj2 = onFullViewToggled(num[6]);
  const sharedValue2 = onFullViewToggled(num[6]).useSharedValue(0);
  const items2 = [sharedValue2, sharedValue1, sharedValue];
  __initData = sharedValue.useCallback(() => {
    let result = sharedValue1.set(1);
    setFull(true);
    const obj = timing;
    const fn = function t() {
      const result = sharedValue1.set(closure_9);
      const result1 = sharedValue.set(false);
    };
    fn.__closure = { animationState: sharedValue1, NONE, isCollapsed: sharedValue };
    fn.__workletHash = 8443967716862;
    fn.__initData = __initData;
    let result1 = sharedValue2.set(obj.withTiming(1, { duration: 250, easing: native.STANDARD_EASING }, "respect-motion-settings", fn));
  }, items2);
  const items3 = [sharedValue2, sharedValue1, sharedValue];
  const callback1 = sharedValue.useCallback(() => {
    let result = sharedValue1.set(0);
    setFull(false);
    const obj = timing;
    const fn = function t() {
      const result = sharedValue1.set(closure_9);
      const result1 = sharedValue.set(true);
    };
    fn.__closure = { animationState: sharedValue1, NONE, isCollapsed: sharedValue };
    fn.__workletHash = 12593758327764;
    fn.__initData = __initData2;
    let result1 = sharedValue2.set(obj.withTiming(0, { duration: 250, easing: native.STANDARD_EASING }, "respect-motion-settings", fn));
  }, items3);
  const items4 = [sharedValue1, sharedValue, first2, first1, __initData, callback1];
  const callback2 = sharedValue.useCallback(() => {
    if (sharedValue1.get() === c9) {
      value = sharedValue.get();
      if (value) {
        value = first2 === first1;
      }
      if (!value) {
        if (sharedValue.get()) {
          callback();
        } else {
          callback1();
        }
      }
    }
  }, items4);
  const items5 = [tmp11[1]];
  const items6 = [tmp8[1]];
  const callback3 = sharedValue.useCallback((arg0) => {
    __initData(arg0 + 17);
  }, items5);
  const callback4 = sharedValue.useCallback((arg0) => {
    NONE(arg0 + 17);
  }, items6);
  let obj3 = onFullViewToggled(num[6]);
  function ee() {
    let height;
    if (first3 > 0) {
      if (2 === sharedValue1.get()) {
        const obj = ReanimatedRexport;
        value = sharedValue2.get();
        const items = [first3, , ];
        const _Math = Math;
        items[1] = Math.max(first2, first3);
        const _Math2 = Math;
        items[2] = Math.max(first2, first3) + 40;
        height = obj.interpolate(value, [0, 1, 2], items, "clamp");
      }
    }
    return { height, justifyContent: "flex-start" };
  }
  let obj4 = onFullViewToggled(num[6]);
  ee.__closure = { minFooterHeight: first3, animationState: sharedValue1, DRAWER_PANNING: 2, animationDriver: sharedValue2, COLLAPSED: 0, interpolate: onFullViewToggled(num[6]).interpolate, EXPANDED: 1, EXPANDED_MORE: 2, expandedHeight: first2, MAX_DRAWER_VERTICAL_DRAG: 40 };
  ee.__workletHash = 10727625692479;
  ee.__initData = __initData;
  const animatedStyle = obj4.useAnimatedStyle(ee);
  let obj5 = { minFooterHeight: first3, animationState: sharedValue1, DRAWER_PANNING: 2, animationDriver: sharedValue2, COLLAPSED: 0, interpolate: onFullViewToggled(num[6]).interpolate, EXPANDED: 1, EXPANDED_MORE: 2, expandedHeight: first2, MAX_DRAWER_VERTICAL_DRAG: 40 };
  function te() {
    const obj = { opacity: ReanimatedRexport.interpolate(sharedValue2.get(), [0, 1], [1, 0], "clamp"), height: null };
    const items = [0, num2];
    obj.height = ReanimatedRexport.interpolate(sharedValue2.get(), [1, 0], items, "clamp");
    return obj;
  }
  let obj6 = onFullViewToggled(num[6]);
  te.__closure = { interpolate: onFullViewToggled(num[6]).interpolate, animationDriver: sharedValue2, COLLAPSED: 0, EXPANDED: 1, thumbnailsElementHeight: num2 };
  te.__workletHash = 9896169174287;
  te.__initData = sharedValue2;
  const items7 = [tmp14[1], num, sharedValue, sharedValue1];
  const animatedStyle1 = obj6.useAnimatedStyle(te);
  const callback5 = sharedValue.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    value = height > num;
    if (value) {
      value = sharedValue.get();
    }
    if (value) {
      value = sharedValue1.get() === c9;
    }
    if (value) {
      closure_13(height);
    }
  }, items7);
  let obj7 = { interpolate: onFullViewToggled(num[6]).interpolate, animationDriver: sharedValue2, COLLAPSED: 0, EXPANDED: 1, thumbnailsElementHeight: num2 };
  function ae() {
    const obj = { height: ReanimatedRexport.interpolate(sharedValue2.get(), [0, 1], [0, 24], "clamp") };
    return obj;
  }
  let obj8 = onFullViewToggled(num[6]);
  ae.__closure = { interpolate: onFullViewToggled(num[6]).interpolate, animationDriver: sharedValue2, COLLAPSED: 0, EXPANDED: 1 };
  ae.__workletHash = 13288648164744;
  ae.__initData = __initData;
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
  __initData6 = a;
  let obj9 = { interpolate: onFullViewToggled(num[6]).interpolate, animationDriver: sharedValue2, COLLAPSED: 0, EXPANDED: 1 };
  function ie() {
    const obj = { backgroundColor: null, paddingVertical: null, transform: null };
    const items = [closure_21, 1];
    obj.backgroundColor = "rgba(" + closure_18 + ", " + closure_19 + ", " + closure_20 + ", " + ReanimatedRexport.interpolate(sharedValue2.get(), [0, 1], items, "clamp") + ")";
    obj.paddingVertical = ReanimatedRexport.interpolate(sharedValue2.get(), [0, 1], [8, 0], "clamp");
    const obj4 = { translateY: null };
    obj4.translateY = ReanimatedRexport.interpolate(sharedValue2.get(), [-1, 0], [100, 0], "clamp");
    const items1 = [obj4];
    obj.transform = items1;
    return obj;
  }
  let obj10 = onFullViewToggled(num[6]);
  ie.__closure = { r, g, b, interpolate: onFullViewToggled(num[6]).interpolate, animationDriver: sharedValue2, COLLAPSED: 0, EXPANDED: 1, a, DISMISSED: -1 };
  ie.__workletHash = 1645059598385;
  ie.__initData = callback1;
  const animatedStyle3 = obj10.useAnimatedStyle(ie);
  const ref = sharedValue.useRef(undefined);
  const ref1 = sharedValue.useRef(undefined);
  const tmp34 = num2(sharedValue.useState(true), 2);
  const first4 = tmp34[0];
  const items8 = [first1, first2, full, callback2];
  const memo = sharedValue.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const FlingResult = Gesture.Fling();
    const fn = function t() {
      onFullViewToggled(num[6]).runOnJS(__initData3)();
    };
    const directionResult = Gesture.Fling().direction(LegacyBaseButton.Directions.UP);
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, onFullViewToggled: callback2 };
    fn.__workletHash = 1612404502942;
    fn.__initData = __initData3;
    const obj = { runOnJS: ReanimatedRexport.runOnJS, onFullViewToggled: callback2 };
    const onStartResult = directionResult.onStart(fn);
    let tmp = !first;
    if (!first) {
      tmp = first2 > first1;
    }
    return directionResult.onStart(fn).withRef(ref).enabled(tmp);
  }, items8);
  const items9 = [sharedValue2, full, callback2, first4];
  const memo1 = sharedValue.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const FlingResult = Gesture.Fling();
    let fn = function t() {
      if (full) {
        onFullViewToggled(num[6]).runOnJS(__initData3)();
        const obj4 = onFullViewToggled(num[6]);
      } else {
        const obj = onFullViewToggled(num[8]);
        const obj2 = { duration: 350, easing: onFullViewToggled(num[9]).STANDARD_EASING };
        const fn = function t() {
          const result = animationDriver.set(0);
        };
        const obj3 = { animationDriver, COLLAPSED: 0 };
        fn.__closure = obj3;
        fn.__workletHash = 15839049590506;
        fn.__initData = __initData;
        let result = animationDriver.set(obj.withTiming(-1, obj2, "respect-motion-settings", fn));
      }
    };
    const directionResult = Gesture.Fling().direction(LegacyBaseButton.Directions.DOWN);
    fn.__closure = { full, animationDriver: sharedValue2, withTiming: timing.withTiming, DISMISSED: -1, STANDARD_EASING: native.STANDARD_EASING, COLLAPSED: 0, runOnJS: ReanimatedRexport.runOnJS, onFullViewToggled: callback2 };
    fn.__workletHash = 16686210274151;
    fn.__initData = __initData4;
    let obj = { full, animationDriver: sharedValue2, withTiming: timing.withTiming, DISMISSED: -1, STANDARD_EASING: native.STANDARD_EASING, COLLAPSED: 0, runOnJS: ReanimatedRexport.runOnJS, onFullViewToggled: callback2 };
    const onStartResult = directionResult.onStart(fn);
    return directionResult.onStart(fn).withRef(ref1).enabled(first4);
  }, items9);
  const items10 = [sharedValue2, sharedValue1, first1, first2, full, sharedValue, num2];
  const memo2 = sharedValue.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const maxPointersResult = Gesture.Pan().maxPointers(1);
    let fn = function a(translationY) {
      const result = animationState.set(2);
      if (translationY.translationY > 0) {
        const _Math3 = Math;
        if (typeof first2 === "function") {
          const _Math4 = Math;
          const _Math5 = Math;
          const bound = Math.max(Math.min(tmp12, 1), 0);
          const result1 = sharedValue2.set(bound);
          if (bound < 0.4) {
            onFullViewToggled(num[6]).runOnJS(setFull)(false);
            const obj = onFullViewToggled(num[6]);
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
    const activeOffsetYResult = Gesture.Pan().maxPointers(1).activeOffsetY([-10, 10]);
    fn.__closure = { animationState: sharedValue1, DRAWER_PANNING: 2, clamp, expandedHeight: first2, thumbnailsElementHeight: num2, collapsedHeight: first1, COLLAPSED: 0, EXPANDED: 1, animationDriver: sharedValue2, COLLAPSE_DRAWER_DURING_DRAG: 0.4, runOnJS: ReanimatedRexport.runOnJS, setFull, DRAWER_VERTICAL_DRAG_RESISTANCE: 3, MAX_DRAWER_VERTICAL_DRAG: 40, EXPANDED_MORE: 2 };
    fn.__workletHash = 7012168718409;
    fn.__initData = __initData6;
    let obj = { animationState: sharedValue1, DRAWER_PANNING: 2, clamp, expandedHeight: first2, thumbnailsElementHeight: num2, collapsedHeight: first1, COLLAPSED: 0, EXPANDED: 1, animationDriver: sharedValue2, COLLAPSE_DRAWER_DURING_DRAG: 0.4, runOnJS: ReanimatedRexport.runOnJS, setFull, DRAWER_VERTICAL_DRAG_RESISTANCE: 3, MAX_DRAWER_VERTICAL_DRAG: 40, EXPANDED_MORE: 2 };
    let fn2 = function t() {
      if (sharedValue2.get() < 0.75) {
        onFullViewToggled(num[6]).runOnJS(setFull)(false);
        let result = isCollapsed.set(true);
        if (0 === sharedValue2.get()) {
          const obj3 = onFullViewToggled(num[6]);
          let result1 = animationState.set(obj3.withDelay(150, onFullViewToggled(num[8]).withTiming(NONE, { duration: 0 })));
          const obj4 = onFullViewToggled(num[8]);
        } else {
          const obj9 = onFullViewToggled(num[8]);
          const obj7 = { duration: 150, easing: onFullViewToggled(num[9]).STANDARD_EASING };
          const fn2 = function a() {
            const result = animationState.set(NONE);
          };
          const obj8 = { animationState, NONE };
          fn2.__closure = obj8;
          fn2.__workletHash = 15486611138793;
          fn2.__initData = ref;
          const result2 = sharedValue2.set(obj9.withTiming(0, obj7, "respect-motion-settings", fn2));
        }
        const obj2 = onFullViewToggled(num[6]);
      } else {
        onFullViewToggled(num[6]).runOnJS(setFull)(true);
        const obj6 = onFullViewToggled(num[8]);
        const obj10 = { duration: 150, easing: onFullViewToggled(num[9]).STANDARD_EASING };
        const fn = function t() {
          const result = isCollapsed.set(false);
          const result1 = animationState.set(NONE);
        };
        const obj11 = { isCollapsed, animationState, NONE };
        fn.__closure = obj11;
        fn.__workletHash = 8502240261161;
        fn.__initData = ref1;
        const result3 = sharedValue2.set(obj6.withTiming(1, obj10, "respect-motion-settings", fn));
        const obj5 = onFullViewToggled(num[6]);
      }
    };
    const onUpdateResult = activeOffsetYResult.onUpdate(fn);
    fn2.__closure = { animationDriver: sharedValue2, COLLAPSE_DRAWER_ON_RELEASE: 0.75, runOnJS: ReanimatedRexport.runOnJS, setFull, isCollapsed: sharedValue, COLLAPSED: 0, animationState: sharedValue1, withDelay: ReanimatedRexport.withDelay, withTiming: timing.withTiming, NONE, STANDARD_EASING: native.STANDARD_EASING, EXPANDED: 1 };
    fn2.__workletHash = 16268892990477;
    fn2.__initData = __initData5;
    let obj2 = { animationDriver: sharedValue2, COLLAPSE_DRAWER_ON_RELEASE: 0.75, runOnJS: ReanimatedRexport.runOnJS, setFull, isCollapsed: sharedValue, COLLAPSED: 0, animationState: sharedValue1, withDelay: ReanimatedRexport.withDelay, withTiming: timing.withTiming, NONE, STANDARD_EASING: native.STANDARD_EASING, EXPANDED: 1 };
    return onUpdateResult.onEnd(fn2).enabled(first);
  }, items10);
  let obj11 = { r, g, b, interpolate: onFullViewToggled(num[6]).interpolate, animationDriver: sharedValue2, COLLAPSED: 0, EXPANDED: 1, a, DISMISSED: -1 };
  function oe() {
    const items = [overlayEnabled.get(), sharedValue2.get()];
    return items;
  }
  oe.__closure = { overlayEnabled, animationDriver: sharedValue2 };
  oe.__workletHash = 12659996728578;
  oe.__initData = first4;
  function ne(arg0) {
    [tmp, tmp2] = arg0;
    if (tmp) {
      const result = overlayEnabled.set(false);
    }
  }
  ne.__closure = { DISMISSED_HIDE_OVERLAY: -0.25, overlayEnabled };
  ne.__workletHash = 11470550406895;
  ne.__initData = memo;
  const animatedReaction = onFullViewToggled(num[6]).useAnimatedReaction(oe, ne);
  const items11 = [memo2, memo1, memo];
  const memo3 = sharedValue.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    return Gesture.Exclusive(memo, memo2, memo1);
  }, items11);
  const obj13 = { gesture: memo3, children: null };
  const obj14 = { style: animatedStyle3, children: null };
  const items12 = [tmp30.MediaModalFooterUnderlay, ];
  const obj12 = onFullViewToggled(num[6]);
  const obj15 = { style: null, children: null };
  const items13 = [animatedStyle2, tmp.drawerContainer];
  obj15.style = items13;
  const tmp43 = overlayEnabled(num[12]);
  obj15.children = full(onFullViewToggled(num[14]).ActionSheetHeaderBar, { tabStyle: tmp.drawerHeaderTab, style: tmp.drawerHeader });
  const items14 = [full(overlayEnabled(num[12]), obj15), channelId.sliderElement, ];
  const obj17 = { onLayout: callback5, style: animatedStyle, children: null };
  const obj18 = { style: tmp.messagePreviewContainer, children: null };
  const obj16 = { tabStyle: tmp.drawerHeaderTab, style: tmp.drawerHeader };
  const tmp44 = overlayEnabled(num[12]);
  obj18.children = full(overlayEnabled(num[15]), { channelId: channelId.channelId, messageId: channelId.messageId, onClose: channelId.onClose, onTapMessage: callback2, onMeasureFullHeight: callback3, onMeasureCollapsedHeight: callback4, full, canExpand: first2 > first1, setScrollViewIsAtTop: tmp34[1], flingUpRef: ref, flingDownRef: ref1, animationDriver: sharedValue2 });
  const items15 = [full(sharedValue1, obj18), ];
  if (tmp41Result) {
    const obj20 = { style: null, children: null };
    const items16 = [animatedStyle1, tmp.thumbnailsContainer];
    obj20.style = items16;
    const obj21 = { syncer };
    obj20.children = tmp41(tmp29(tmp3[16]), obj21);
    tmp41Result = tmp41(tmp29(tmp3[12]), obj20);
    const tmp29Result = tmp29(tmp3[12]);
  }
  const rect = { bottom: true, left: true, right: true, children: null };
  items15[1] = tmp41Result;
  obj17.children = items15;
  items14[2] = setFull(overlayEnabled(num[12]), obj17);
  rect.children = items14;
  items12[1] = setFull(onFullViewToggled(num[13]).SafeAreaPaddingView, rect);
  obj14.children = items12;
  obj13.children = setFull(tmp43, obj14);
  return full(onFullViewToggled(num[11]).GestureDetector, obj13);
};