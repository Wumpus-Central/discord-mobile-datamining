// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlayFooter.tsx
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { drawerContainer: { overflow: "hidden", backgroundColor: "HermesInternal" }, drawerHeaderTab: null, drawerHeader: null, messagePreviewContainer: null, thumbnailsContainer: null };
createCacheKey = { width: 40, backgroundColor: ThemesDefault.unsafe_rawColors.PRIMARY_600 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { backgroundColor: "r" };
createCacheKey[3] = { marginLeft: 6 };
createCacheKey[4] = { paddingTop: 8 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let c9 = -1;
function clamp(arg0, arg1, arg2) {
  return Math.max(Math.min(arg0, arg2), arg1);
}
clamp.__closure = {};
clamp.__workletHash = 10219548303807;
clamp.__initData = { code: "function clamp_MediaModalOverlayFooterTsx1(value,min,max){return Math.max(Math.min(value,max),min);}" };
let closure_11 = { code: "function MediaModalOverlayFooterTsx2(){const{animationState,NONE,isCollapsed}=this.__closure;animationState.set(NONE);isCollapsed.set(false);}" };
let closure_12 = { code: "function MediaModalOverlayFooterTsx3(){const{animationState,NONE,isCollapsed}=this.__closure;animationState.set(NONE);isCollapsed.set(true);}" };
let closure_13 = { code: "function MediaModalOverlayFooterTsx4(){const{minFooterHeight,animationState,DRAWER_PANNING,animationDriver,COLLAPSED,interpolate,EXPANDED,EXPANDED_MORE,expandedHeight,MAX_DRAWER_VERTICAL_DRAG}=this.__closure;return{height:minFooterHeight>0&&(animationState.get()===DRAWER_PANNING||animationDriver.get()!==COLLAPSED)?interpolate(animationDriver.get(),[COLLAPSED,EXPANDED,EXPANDED_MORE],[minFooterHeight,Math.max(expandedHeight,minFooterHeight),Math.max(expandedHeight,minFooterHeight)+MAX_DRAWER_VERTICAL_DRAG],'clamp'):undefined,justifyContent:'flex-start'};}" };
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
let result = require("set").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayFooter.tsx");

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
  let obj = onFullViewToggled(num[6]);
  const sharedValue = obj.useSharedValue(true);
  obj1 = onFullViewToggled(num[6]);
  const sharedValue1 = obj1.useSharedValue(closure_9);
  const tmp6 = num2(sharedValue.useState(false), 2);
  const first = tmp6[0];
  closure_7 = tmp6[1];
  const tmp8 = num2(sharedValue.useState(0), 2);
  first1 = tmp8[0];
  closure_9 = tmp10;
  const tmp11 = num2(sharedValue.useState(0), 2);
  const first2 = tmp11[0];
  closure_11 = tmp13;
  const tmp14 = num2(sharedValue.useState(0), 2);
  const first3 = tmp14[0];
  closure_13 = tmp16;
  let items = [first3, first2];
  const effect = sharedValue.useEffect(() => {
    let obj = onFullViewToggled(num[7]);
    obj = { collapsedHeight: first3, expandedHeight: first2 };
    const result = obj.setMesssagePreviewHeight(obj);
  }, items);
  let items1 = [first, onFullViewToggled];
  const effect1 = sharedValue.useEffect(() => {
    onFullViewToggled(first);
  }, items1);
  let obj2 = onFullViewToggled(num[6]);
  const sharedValue2 = obj2.useSharedValue(0);
  const items2 = [sharedValue2, sharedValue1, sharedValue];
  const callback = sharedValue.useCallback(() => {
    let result = sharedValue1.set(1);
    callback(true);
    let obj = onFullViewToggled(num[8]);
    obj = { duration: 250, easing: onFullViewToggled(num[9]).STANDARD_EASING };
    const fn = function t() {
      const result = closure_5.set(closure_1_9);
      const result1 = closure_4.set(false);
    };
    obj = { animationState: sharedValue1, NONE: closure_9, isCollapsed: sharedValue };
    fn.__closure = obj;
    fn.__workletHash = 8443967716862;
    fn.__initData = closure_11;
    let result1 = sharedValue2.set(obj.withTiming(1, obj, "respect-motion-settings", fn));
  }, items2);
  const items3 = [sharedValue2, sharedValue1, sharedValue];
  const callback1 = sharedValue.useCallback(() => {
    let result = sharedValue1.set(0);
    callback(false);
    let obj = onFullViewToggled(num[8]);
    obj = { duration: 250, easing: onFullViewToggled(num[9]).STANDARD_EASING };
    const fn = function t() {
      const result = closure_5.set(closure_1_9);
      const result1 = closure_4.set(true);
    };
    obj = { animationState: sharedValue1, NONE: closure_9, isCollapsed: sharedValue };
    fn.__closure = obj;
    fn.__workletHash = 12593758327764;
    fn.__initData = first3;
    let result1 = sharedValue2.set(obj.withTiming(0, obj, "respect-motion-settings", fn));
  }, items3);
  const items4 = [sharedValue1, sharedValue, first2, first1, callback, callback1];
  const callback2 = sharedValue.useCallback(() => {
    if (sharedValue1.get() === closure_9) {
      let value = sharedValue.get();
      if (value) {
        value = first2 === first1;
      }
      if (!value) {
        if (obj.get()) {
          callback();
        } else {
          callback1();
        }
      }
      obj = sharedValue;
    }
  }, items4);
  const items5 = [tmp11[1]];
  const items6 = [tmp8[1]];
  const callback3 = sharedValue.useCallback((arg0) => {
    callback3(arg0 + 17);
  }, items5);
  const callback4 = sharedValue.useCallback((arg0) => {
    callback2(arg0 + 17);
  }, items6);
  let obj3 = onFullViewToggled(num[6]);
  function ee() {
    let height;
    if (first3 > 0) {
      if (2 === sharedValue1.get()) {
        const obj = onFullViewToggled(num[6]);
        const value = sharedValue2.get();
        const items = [tmp, , ];
        const _Math = Math;
        items[1] = Math.max(first2, tmp);
        const _Math2 = Math;
        items[2] = Math.max(first2, tmp) + 40;
        height = obj.interpolate(value, [0, 1, 2], items, "clamp");
      }
    }
    return { height, justifyContent: "flex-start" };
  }
  obj = { minFooterHeight: first3, animationState: sharedValue1, DRAWER_PANNING: 2, animationDriver: sharedValue2, COLLAPSED: 0, interpolate: onFullViewToggled(num[6]).interpolate, EXPANDED: 1, EXPANDED_MORE: 2, expandedHeight: first2, MAX_DRAWER_VERTICAL_DRAG: 40 };
  ee.__closure = obj;
  ee.__workletHash = 10727625692479;
  ee.__initData = closure_13;
  const animatedStyle = obj3.useAnimatedStyle(ee);
  let obj5 = onFullViewToggled(num[6]);
  function te() {
    const obj = { opacity: onFullViewToggled(num[6]).interpolate(sharedValue2.get(), [0, 1], [1, 0], "clamp"), height: null };
    const obj2 = onFullViewToggled(num[6]);
    const items = [0, num2];
    obj[1] = onFullViewToggled(num[6]).interpolate(sharedValue2.get(), [1, 0], items, "clamp");
    return obj;
  }
  obj = { interpolate: onFullViewToggled(num[6]).interpolate, animationDriver: sharedValue2, COLLAPSED: 0, EXPANDED: 1, thumbnailsElementHeight: num2 };
  te.__closure = obj;
  te.__workletHash = 9896169174287;
  te.__initData = sharedValue2;
  const items7 = [tmp14[1], num, sharedValue, sharedValue1];
  const animatedStyle1 = obj5.useAnimatedStyle(te);
  const callback5 = sharedValue.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    let value = height > num;
    if (value) {
      value = sharedValue.get();
    }
    if (value) {
      value = sharedValue1.get() === closure_9;
    }
    if (value) {
      callback4(height);
    }
  }, items7);
  let obj7 = onFullViewToggled(num[6]);
  function ae() {
    const obj = { height: onFullViewToggled(num[6]).interpolate(sharedValue2.get(), [0, 1], [0, 24], "clamp") };
    return obj;
  }
  obj1 = { interpolate: onFullViewToggled(num[6]).interpolate, animationDriver: sharedValue2, COLLAPSED: 0, EXPANDED: 1 };
  ae.__closure = obj1;
  ae.__workletHash = 13288648164744;
  ae.__initData = callback;
  const animatedStyle2 = obj7.useAnimatedStyle(ae);
  const tmp30 = overlayEnabled(num[10])();
  const mediaModalFooterBackgroundColorRgba = tmp30.mediaModalFooterBackgroundColorRgba;
  const r = mediaModalFooterBackgroundColorRgba.r;
  closure_18 = r;
  const g = mediaModalFooterBackgroundColorRgba.g;
  closure_19 = g;
  const b = mediaModalFooterBackgroundColorRgba.b;
  closure_20 = b;
  const a = mediaModalFooterBackgroundColorRgba.a;
  closure_21 = a;
  let obj9 = onFullViewToggled(num[6]);
  function ie() {
    let obj = { backgroundColor: "rgba(" + closure_18 + ", " + closure_19 + ", " + closure_20 + ", " + onFullViewToggled(num[6]).interpolate(sharedValue2.get(), [0, 1], items, "clamp") + ")", paddingVertical: null, transform: null };
    items = [closure_21, 1];
    const obj2 = onFullViewToggled(num[6]);
    obj[1] = onFullViewToggled(num[6]).interpolate(sharedValue2.get(), [0, 1], [8, 0], "clamp");
    obj = { translateY: null };
    const obj3 = onFullViewToggled(num[6]);
    obj[0] = onFullViewToggled(num[6]).interpolate(sharedValue2.get(), [-1, 0], [100, 0], "clamp");
    const items1 = [obj];
    obj[2] = items1;
    return obj;
  }
  obj2 = { r, g, b, interpolate: onFullViewToggled(num[6]).interpolate, animationDriver: sharedValue2, COLLAPSED: 0, EXPANDED: 1, a, DISMISSED: -1 };
  ie.__closure = obj2;
  ie.__workletHash = 1645059598385;
  ie.__initData = callback1;
  const animatedStyle3 = obj9.useAnimatedStyle(ie);
  const ref = sharedValue.useRef(undefined);
  const ref1 = sharedValue.useRef(undefined);
  const tmp34 = num2(sharedValue.useState(true), 2);
  const first4 = tmp34[0];
  const items8 = [first1, first2, first, callback2];
  const memo = sharedValue.useMemo(() => {
    const Gesture = onFullViewToggled(num[11]).Gesture;
    const FlingResult = Gesture.Fling();
    const fn = function t() {
      closure_1_0(closure_1_2[6]).runOnJS(closure_17)();
    };
    const directionResult = Gesture.Fling().direction(onFullViewToggled(num[11]).Directions.UP);
    fn.__closure = { runOnJS: onFullViewToggled(num[6]).runOnJS, onFullViewToggled: callback2 };
    fn.__workletHash = 1612404502942;
    fn.__initData = callback2;
    const obj = { runOnJS: onFullViewToggled(num[6]).runOnJS, onFullViewToggled: callback2 };
    const onStartResult = directionResult.onStart(fn);
    let tmp = !first;
    if (!first) {
      tmp = first2 > first1;
    }
    return directionResult.onStart(fn).withRef(ref).enabled(tmp);
  }, items8);
  const items9 = [sharedValue2, first, callback2, first4];
  const memo1 = sharedValue.useMemo(() => {
    const Gesture = onFullViewToggled(num[11]).Gesture;
    const FlingResult = Gesture.Fling();
    let fn = function t() {
      if (closure_6) {
        closure_1_0(closure_1_2[6]).runOnJS(closure_17)();
        const obj4 = closure_1_0(closure_1_2[6]);
      } else {
        let obj = closure_1_0(closure_1_2[8]);
        obj = { duration: 350, easing: null };
        obj[1] = closure_1_0(closure_1_2[9]).STANDARD_EASING;
        const fn = function t() {
          const result = closure_14.set(0);
        };
        obj = { animationDriver: null, COLLAPSED: 0 };
        obj[0] = closure_14;
        fn.__closure = obj;
        fn.__workletHash = 15839049590506;
        fn.__initData = closure_1_19;
        let result = closure_14.set(obj.withTiming(-1, obj, "respect-motion-settings", fn));
      }
    };
    const directionResult = Gesture.Fling().direction(onFullViewToggled(num[11]).Directions.DOWN);
    fn.__closure = { full: first, animationDriver: sharedValue2, withTiming: onFullViewToggled(num[8]).withTiming, DISMISSED: -1, STANDARD_EASING: onFullViewToggled(num[9]).STANDARD_EASING, COLLAPSED: 0, runOnJS: onFullViewToggled(num[6]).runOnJS, onFullViewToggled: callback2 };
    fn.__workletHash = 16686210274151;
    fn.__initData = closure_18;
    let obj = { full: first, animationDriver: sharedValue2, withTiming: onFullViewToggled(num[8]).withTiming, DISMISSED: -1, STANDARD_EASING: onFullViewToggled(num[9]).STANDARD_EASING, COLLAPSED: 0, runOnJS: onFullViewToggled(num[6]).runOnJS, onFullViewToggled: callback2 };
    const onStartResult = directionResult.onStart(fn);
    return directionResult.onStart(fn).withRef(ref1).enabled(first4);
  }, items9);
  const items10 = [sharedValue2, sharedValue1, first1, first2, first, sharedValue, num2];
  const memo2 = sharedValue.useMemo(() => {
    const Gesture = onFullViewToggled(num[11]).Gesture;
    const PanResult = Gesture.Pan();
    const maxPointersResult = Gesture.Pan().maxPointers(1);
    let fn = function a(translationY) {
      translationY = translationY.translationY;
      const result = store.set(2);
      if (translationY > 0) {
        const _Math3 = Math;
        const diff = 1 - translationY / Math.abs(closure_10 - (closure_3 + closure_8));
        if (typeof closure_1_10 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _Math4 = Math;
        const _Math5 = Math;
        const bound = Math.max(Math.min(diff, 1), 0);
        const result1 = store2.set(bound);
        if (bound < 0.4) {
          closure_1_0(closure_1_2[6]).runOnJS(closure_7)(false);
          const obj = closure_1_0(closure_1_2[6]);
        }
      } else {
        const result2 = -translationY / 3;
        if (typeof closure_1_10 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _Math = Math;
        const _Math2 = Math;
        const result3 = store2.set(1 + Math.max(Math.min(result2, 40), 0) / 40);
      }
    };
    let obj = { animationState: sharedValue1, DRAWER_PANNING: 2, clamp: first2, expandedHeight: first2, thumbnailsElementHeight: num2, collapsedHeight: first1, COLLAPSED: 0, EXPANDED: 1, animationDriver: sharedValue2, COLLAPSE_DRAWER_DURING_DRAG: 0.4, runOnJS: onFullViewToggled(num[6]).runOnJS, setFull: closure_7, DRAWER_VERTICAL_DRAG_RESISTANCE: 3, MAX_DRAWER_VERTICAL_DRAG: 40, EXPANDED_MORE: 2 };
    fn.__closure = obj;
    fn.__workletHash = 7012168718409;
    fn.__initData = closure_21;
    const activeOffsetYResult = Gesture.Pan().maxPointers(1).activeOffsetY([-10, 10]);
    let fn2 = function t() {
      let obj = store2;
      if (store2.get() < 0.75) {
        obj1 = closure_1_0(closure_1_2[6]);
        obj1.runOnJS(closure_7)(false);
        let result = closure_4.set(true);
        if (0 === obj.get()) {
          let obj2 = closure_1_0(closure_1_2[6]);
          let result1 = store.set(obj2.withDelay(150, closure_1_0(closure_1_2[8]).withTiming(closure_1_9, { duration: 0 })));
          const obj4 = closure_1_0(closure_1_2[8]);
        } else {
          const obj9 = closure_1_0(closure_1_2[8]);
          obj = { duration: 150, easing: null };
          obj[1] = closure_1_0(closure_1_2[9]).STANDARD_EASING;
          const fn2 = function a() {
            const result = store.set(closure_1_9);
          };
          obj = { animationState: null, NONE: null };
          obj[0] = store;
          obj[1] = closure_1_9;
          fn2.__closure = obj;
          fn2.__workletHash = 15486611138793;
          fn2.__initData = closure_1_22;
          const result2 = obj.set(obj9.withTiming(0, obj, "respect-motion-settings", fn2));
        }
      } else {
        closure_1_0(closure_1_2[6]).runOnJS(closure_7)(true);
        const obj6 = closure_1_0(closure_1_2[8]);
        obj1 = { duration: 150, easing: null };
        obj1[1] = closure_1_0(closure_1_2[9]).STANDARD_EASING;
        const fn = function t() {
          const result = closure_4.set(false);
          const result1 = store.set(closure_1_9);
        };
        obj2 = { isCollapsed: null, animationState: null, NONE: null };
        obj2[0] = closure_4;
        obj2[1] = store;
        obj2[2] = closure_1_9;
        fn.__closure = obj2;
        fn.__workletHash = 8502240261161;
        fn.__initData = closure_1_23;
        const result3 = obj.set(obj6.withTiming(1, obj1, "respect-motion-settings", fn));
        const obj5 = closure_1_0(closure_1_2[6]);
      }
    };
    obj = { animationDriver: sharedValue2, COLLAPSE_DRAWER_ON_RELEASE: 0.75, runOnJS: onFullViewToggled(num[6]).runOnJS, setFull: closure_7, isCollapsed: sharedValue, COLLAPSED: 0, animationState: sharedValue1, withDelay: onFullViewToggled(num[6]).withDelay, withTiming: onFullViewToggled(num[8]).withTiming, NONE: closure_9, STANDARD_EASING: onFullViewToggled(num[9]).STANDARD_EASING, EXPANDED: 1 };
    fn2.__closure = obj;
    fn2.__workletHash = 16268892990477;
    fn2.__initData = closure_20;
    const onUpdateResult = Gesture.Pan().maxPointers(1).activeOffsetY([-10, 10]).onUpdate(fn);
    return Gesture.Pan().maxPointers(1).activeOffsetY([-10, 10]).onUpdate(fn).onEnd(fn2).enabled(first);
  }, items10);
  let obj11 = onFullViewToggled(num[6]);
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
  const animatedReaction = obj11.useAnimatedReaction(oe, ne);
  const items11 = [memo2, memo1, memo];
  const memo3 = sharedValue.useMemo(() => {
    const Gesture = onFullViewToggled(num[11]).Gesture;
    return Gesture.Exclusive(memo, memo2, memo1);
  }, items11);
  obj3 = { gesture: memo3, children: null };
  let obj4 = { style: animatedStyle3, children: null };
  const items12 = [tmp30.MediaModalFooterUnderlay, ];
  obj5 = { style: items13, children: null };
  items13 = [animatedStyle2, tmp.drawerContainer];
  const tmp43 = overlayEnabled(num[12]);
  obj5[1] = first(onFullViewToggled(num[14]).ActionSheetHeaderBar, { tabStyle: tmp.drawerHeaderTab, style: tmp.drawerHeader });
  const items14 = [first(overlayEnabled(num[12]), obj5), channelId.sliderElement, ];
  obj7 = { onLayout: callback5, style: animatedStyle, children: null };
  const obj8 = { style: tmp.messagePreviewContainer, children: null };
  let obj6 = { tabStyle: tmp.drawerHeaderTab, style: tmp.drawerHeader };
  const tmp44 = overlayEnabled(num[12]);
  obj9 = { channelId: channelId.channelId, messageId: channelId.messageId, onClose: channelId.onClose, onTapMessage: callback2, onMeasureFullHeight: callback3, onMeasureCollapsedHeight: callback4, full: first, canExpand: first2 > first1, setScrollViewIsAtTop: tmp34[1], flingUpRef: ref, flingDownRef: ref1, animationDriver: sharedValue2 };
  obj8[1] = first(overlayEnabled(num[15]), obj9);
  const items15 = [first(sharedValue1, obj8), ];
  if (tmp41Result) {
    const obj10 = { style: null, children: null };
    const items16 = [animatedStyle1, tmp.thumbnailsContainer];
    obj10[0] = items16;
    obj11 = { syncer: null };
    obj11[0] = syncer;
    obj10[1] = tmp41(tmp29(tmp3[16]), obj11);
    tmp41Result = tmp41(tmp29(tmp3[12]), obj10);
    const tmp29Result = tmp29(tmp3[12]);
  }
  const obj12 = { bottom: true, left: true, right: true, children: null };
  items15[1] = tmp41Result;
  obj7[2] = items15;
  items14[2] = closure_7(overlayEnabled(num[12]), obj7);
  obj12[3] = items14;
  items12[1] = closure_7(onFullViewToggled(num[13]).SafeAreaPaddingView, obj12);
  obj4[1] = items12;
  obj3[1] = closure_7(tmp43, obj4);
  return first(onFullViewToggled(num[11]).GestureDetector, obj3);
};