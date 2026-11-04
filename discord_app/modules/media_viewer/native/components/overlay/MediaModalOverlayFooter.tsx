// === Module 14992: MediaModalOverlayFooter ===

// Module 14992 (MediaModalOverlayFooter)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5378 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5428 */;
import useMessagePreviewHeight from "useMessagePreviewHeight" /* 11759 */;
import useMediaModalFooterBackgroundDefault from "useMediaModalFooterBackground" /* 14993 */;
import MediaMessagePreviewDefault from "MediaMessagePreview" /* 14994 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5141);
let obj2 = { drawerContainer: { overflow: "hidden", backgroundColor: "e" }, drawerHeaderTab: { width: 40, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600 }, drawerHeader: { backgroundColor: "r" }, messagePreviewContainer: { marginLeft: 6 }, thumbnailsContainer: { paddingTop: 8 } };
let closure_8 = createStyles.createStyles(obj2);
let c9 = -1;
let items = [{ code: "(function clamp_MediaModalOverlayFooterTsx1(value,min,max){return Math.max(Math.min(value,max),min);})" }];
[tmp3] = items;
function clamp(arg0, arg1, arg2) {
  return Math.max(Math.min(arg0, arg2), arg1);
}
clamp.__workletHash = 14120503051550;
clamp.__initData = tmp3;
let closure_11 = { code: "(function MediaModalOverlayFooterTsx2(){let[animationState,NONE,isCollapsed]=this.__closure;animationState.set(NONE);isCollapsed.set(false);})" };
let closure_12 = { code: "(function MediaModalOverlayFooterTsx3(){let[animationState,NONE,isCollapsed]=this.__closure;animationState.set(NONE);isCollapsed.set(true);})" };
let closure_13 = { code: "(function MediaModalOverlayFooterTsx4(){let[minFooterHeight,animationState,DRAWER_PANNING,animationDriver,COLLAPSED,interpolate,EXPANDED,EXPANDED_MORE,expandedHeight,MAX_DRAWER_VERTICAL_DRAG]=this.__closure;return{height:minFooterHeight>0&&(animationState.get()===DRAWER_PANNING||animationDriver.get()!==COLLAPSED)?interpolate(animationDriver.get(),[COLLAPSED,EXPANDED,EXPANDED_MORE],[minFooterHeight,Math.max(expandedHeight,minFooterHeight),Math.max(expandedHeight,minFooterHeight)+MAX_DRAWER_VERTICAL_DRAG],'clamp'):undefined,justifyContent:'flex-start'};})" };
let closure_14 = { code: "(function MediaModalOverlayFooterTsx5(){let[interpolate,animationDriver,COLLAPSED,EXPANDED,thumbnailsElementHeight]=this.__closure;return{opacity:interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[1,0],'clamp'),height:interpolate(animationDriver.get(),[EXPANDED,COLLAPSED],[0,thumbnailsElementHeight],'clamp')};})" };
let closure_15 = { code: "(function MediaModalOverlayFooterTsx6(){let[interpolate,animationDriver,COLLAPSED,EXPANDED]=this.__closure;return{height:interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[0,24],'clamp')};})" };
let closure_16 = { code: "(function MediaModalOverlayFooterTsx7(){let[r,g,b,interpolate,animationDriver,COLLAPSED,EXPANDED,a,DISMISSED]=this.__closure;return{backgroundColor:\"rgba(\"+r+\", \"+g+\", \"+b+\", \"+interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[a,1],'clamp')+\")\",paddingVertical:interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[8,0],'clamp'),transform:[{translateY:interpolate(animationDriver.get(),[DISMISSED,COLLAPSED],[100,0],'clamp')}]};})" };
let closure_17 = { code: "(function MediaModalOverlayFooterTsx8(){let[scheduleOnRN,onFullViewToggled]=this.__closure;scheduleOnRN(onFullViewToggled);})" };
let closure_18 = { code: "(function MediaModalOverlayFooterTsx9(){let[animationDriver,COLLAPSED]=this.__closure;animationDriver.set(COLLAPSED);})" };
let closure_19 = { code: "(function MediaModalOverlayFooterTsx10(){let[full,animationDriver,withTiming,DISMISSED,STANDARD_EASING,_worklet_4032472095819_init_data,COLLAPSED,scheduleOnRN,onFullViewToggled]=this.__closure;if(!full){animationDriver.set(withTiming(DISMISSED,{duration:350,easing:STANDARD_EASING},'respect-motion-settings',function MediaModalOverlayFooterTsx9Factory([_worklet_4032472095819_init_data,animationDriver,COLLAPSED]){const MediaModalOverlayFooterTsx9=function(){animationDriver.set(COLLAPSED);};MediaModalOverlayFooterTsx9.__closure=[animationDriver,COLLAPSED];MediaModalOverlayFooterTsx9.__workletHash=4032472095819;MediaModalOverlayFooterTsx9.__initData=_worklet_4032472095819_init_data;return MediaModalOverlayFooterTsx9;}([_worklet_4032472095819_init_data,animationDriver,COLLAPSED])));}else{scheduleOnRN(onFullViewToggled);}})" };
let closure_20 = { code: "(function MediaModalOverlayFooterTsx11({translationY:translationY}){let[animationState,DRAWER_PANNING,clamp,expandedHeight,thumbnailsElementHeight,collapsedHeight,COLLAPSED,EXPANDED,animationDriver,COLLAPSE_DRAWER_DURING_DRAG,scheduleOnRN,setFull,DRAWER_VERTICAL_DRAG_RESISTANCE,MAX_DRAWER_VERTICAL_DRAG,EXPANDED_MORE]=this.__closure;animationState.set(DRAWER_PANNING);if(translationY>0){const animValue=clamp(1-translationY/Math.abs(expandedHeight-(thumbnailsElementHeight+collapsedHeight)),COLLAPSED,EXPANDED);animationDriver.set(animValue);if(animValue<COLLAPSE_DRAWER_DURING_DRAG){scheduleOnRN(setFull,false);}}else{const scrollAmount=clamp(-translationY/DRAWER_VERTICAL_DRAG_RESISTANCE,0,MAX_DRAWER_VERTICAL_DRAG);animationDriver.set(EXPANDED+(EXPANDED_MORE-EXPANDED)*scrollAmount/MAX_DRAWER_VERTICAL_DRAG);}})" };
let closure_21 = { code: "(function MediaModalOverlayFooterTsx12(){let[animationState,NONE]=this.__closure;animationState.set(NONE);})" };
let closure_22 = { code: "(function MediaModalOverlayFooterTsx13(){let[isCollapsed,animationState,NONE]=this.__closure;isCollapsed.set(false);animationState.set(NONE);})" };
let closure_23 = { code: "(function MediaModalOverlayFooterTsx14(){let[animationDriver,COLLAPSE_DRAWER_ON_RELEASE,scheduleOnRN,setFull,isCollapsed,COLLAPSED,animationState,withDelay,withTiming,NONE,STANDARD_EASING,_worklet_16272811070801_init_data,EXPANDED,_worklet_10401061559415_init_data]=this.__closure;if(animationDriver.get()<COLLAPSE_DRAWER_ON_RELEASE){scheduleOnRN(setFull,false);isCollapsed.set(true);if(animationDriver.get()===COLLAPSED){animationState.set(withDelay(150,withTiming(NONE,{duration:0})));}else{animationDriver.set(withTiming(COLLAPSED,{duration:150,easing:STANDARD_EASING},'respect-motion-settings',function MediaModalOverlayFooterTsx12Factory([_worklet_16272811070801_init_data,animationState,NONE]){const MediaModalOverlayFooterTsx12=function(){animationState.set(NONE);};MediaModalOverlayFooterTsx12.__closure=[animationState,NONE];MediaModalOverlayFooterTsx12.__workletHash=16272811070801;MediaModalOverlayFooterTsx12.__initData=_worklet_16272811070801_init_data;return MediaModalOverlayFooterTsx12;}([_worklet_16272811070801_init_data,animationState,NONE])));}}else{scheduleOnRN(setFull,true);animationDriver.set(withTiming(EXPANDED,{duration:150,easing:STANDARD_EASING},'respect-motion-settings',function MediaModalOverlayFooterTsx13Factory([_worklet_10401061559415_init_data,isCollapsed,animationState,NONE]){const MediaModalOverlayFooterTsx13=function(){isCollapsed.set(false);animationState.set(NONE);};MediaModalOverlayFooterTsx13.__closure=[isCollapsed,animationState,NONE];MediaModalOverlayFooterTsx13.__workletHash=10401061559415;MediaModalOverlayFooterTsx13.__initData=_worklet_10401061559415_init_data;return MediaModalOverlayFooterTsx13;}([_worklet_10401061559415_init_data,isCollapsed,animationState,NONE])));}})" };
let closure_24 = { code: "(function MediaModalOverlayFooterTsx15(){let[overlayEnabled,animationDriver]=this.__closure;return[overlayEnabled.get(),animationDriver.get()];})" };
let closure_25 = { code: "(function MediaModalOverlayFooterTsx16([overlayEnabledValue,animationDriverValue]){let[DISMISSED_HIDE_OVERLAY,overlayEnabled]=this.__closure;if(overlayEnabledValue&&animationDriverValue<DISMISSED_HIDE_OVERLAY){overlayEnabled.set(false);}})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayFooter.tsx");

export function MediaModalOverlayFooter(channelId) {
  const tmp = c8();
  const onFullViewToggled = channelId.onFullViewToggled;
  _require = onFullViewToggled;
  ({ overlayEnabled, syncer } = channelId);
  let tmp81Result = syncer.sources.length > 1;
  let num = 20;
  if (tmp81Result) {
    num = 60;
  }
  importDefault = num;
  let num2 = 0;
  if (tmp81Result) {
    num2 = 60;
  }
  const sharedValue = require("module_1652").useSharedValue(true);
  c3 = sharedValue;
  let obj = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(c9);
  noop = sharedValue1;
  const tmp8 = c3(noop.useState(false), 2);
  const first = tmp8[0];
  const tmp10 = c3(noop.useState(0), 2);
  const first1 = tmp10[0];
  const tmp13 = c3(noop.useState(0), 2);
  const first2 = tmp13[0];
  const easing2 = tmp15;
  let tmp16 = c3(noop.useState(0), 2);
  const first3 = tmp16[0];
  closure_12 = tmp18;
  items = [first3, first2];
  const effect = noop.useEffect(() => {
    const result = useMessagePreviewHeight.setMesssagePreviewHeight({ collapsedHeight: first3, expandedHeight });
  }, items);
  let items1 = [first, onFullViewToggled];
  const effect1 = noop.useEffect(() => {
    _undefined(c5);
  }, items1);
  let obj2 = require("module_1652");
  const tmp7 = c3;
  const sharedValue2 = require("module_1652").useSharedValue(0);
  let items2 = [sharedValue2, sharedValue1, sharedValue];
  const callback = noop.useCallback(() => {
    let result = easing.set(1);
    _undefined6(true);
    const obj = timing_timing;
    items = [closure_11, easing, c9, c3];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp4, tmp5, tmp6, tmp7] = items;
    class MediaModalOverlayFooterTsx2 {
      constructor() {
        result = closure_0.set(closure_1);
        result1 = closure_2.set(false);
        return;
      }
    }
    const items1 = [tmp5, tmp6, tmp7];
    MediaModalOverlayFooterTsx2.__closure = items1;
    MediaModalOverlayFooterTsx2.__workletHash = 4574821225607;
    MediaModalOverlayFooterTsx2.__initData = tmp4;
    let result1 = sharedValue2.set(obj.withTiming(1, { duration: 250, easing: native.STANDARD_EASING }, "respect-motion-settings", MediaModalOverlayFooterTsx2));
    const obj2 = { duration: 250, easing: native.STANDARD_EASING };
  }, items2);
  let items3 = [sharedValue2, sharedValue1, sharedValue];
  const callback1 = noop.useCallback(() => {
    let result = easing.set(0);
    _undefined6(false);
    const obj = timing_timing;
    items = [closure_12, easing, c9, c3];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp4, tmp5, tmp6, tmp7] = items;
    class MediaModalOverlayFooterTsx3 {
      constructor() {
        result = closure_0.set(closure_1);
        result1 = closure_2.set(true);
        return;
      }
    }
    const items1 = [tmp5, tmp6, tmp7];
    MediaModalOverlayFooterTsx3.__closure = items1;
    MediaModalOverlayFooterTsx3.__workletHash = 15699059534605;
    MediaModalOverlayFooterTsx3.__initData = tmp4;
    let result1 = sharedValue2.set(obj.withTiming(0, { duration: 250, easing: native.STANDARD_EASING }, "respect-motion-settings", MediaModalOverlayFooterTsx3));
    const obj2 = { duration: 250, easing: native.STANDARD_EASING };
  }, items3);
  let items4 = [sharedValue1, sharedValue, first2, first1, callback, callback1];
  const callback2 = noop.useCallback(() => {
    if (easing.get() === c9) {
      value = _undefined4.get();
      if (value) {
        value = c9 === c7;
      }
      if (!value) {
        if (_undefined4.get()) {
          callback();
        } else {
          callback1();
        }
      }
    }
  }, items4);
  const items5 = [tmp13[1]];
  const items6 = [tmp10[1]];
  const callback3 = noop.useCallback((arg0) => {
    easing2(arg0 + 17);
  }, items5);
  const callback4 = noop.useCallback((arg0) => {
    _undefined8(arg0 + 17);
  }, items6);
  const obj4 = require("module_1652");
  const items7 = [sharedValue2, first3, sharedValue1, 2, sharedValue2, 0, require("module_1652").interpolate, 1, 2, first2, 40];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37] = items7;
  class MediaModalOverlayFooterTsx4 {
    constructor() {
      tmp = closure_0;
      height = undefined;
      if (closure_0 > 0) {
        tmp3 = closure_1;
        tmp4 = closure_2;
        if (closure_1.get() === closure_2) {
          tmp7 = closure_5;
          tmp8 = closure_3;
          value = closure_3.get();
          tmp10 = closure_4;
          items = [, , ];
          items[0] = closure_4;
          tmp11 = closure_6;
          items[1] = closure_6;
          tmp12 = closure_7;
          items[2] = closure_7;
          items1 = [, , ];
          items1[0] = tmp;
          tmp13 = globalThis;
          _Math = Math;
          tmp14 = closure_8;
          items1[1] = Math.max(closure_8, tmp);
          _Math2 = Math;
          tmp15 = closure_9;
          items1[2] = Math.max(closure_8, tmp) + closure_9;
          str = "clamp";
          tmp16 = value;
          tmp17 = items;
          tmp18 = items1;
          height = closure_5(value, items, items1, "clamp");
        } else {
          tmp5 = closure_3;
          tmp6 = closure_4;
        }
      }
      return { height, justifyContent: "flex-start" };
    }
  }
  const items8 = [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37];
  MediaModalOverlayFooterTsx4.__closure = items8;
  MediaModalOverlayFooterTsx4.__workletHash = 14957520672262;
  MediaModalOverlayFooterTsx4.__initData = tmp27;
  const animatedStyle = require("module_1652").useAnimatedStyle(MediaModalOverlayFooterTsx4);
  const obj5 = require("module_1652");
  const items9 = [callback, require("module_1652").interpolate, sharedValue2, 0, 1, num2];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  [tmp39, tmp40, tmp41, tmp42, tmp43, tmp44] = items9;
  class MediaModalOverlayFooterTsx5 {
    constructor() {
      obj = { opacity: null, height: null };
      items = [, ];
      items[0] = closure_2;
      items[1] = closure_3;
      obj.opacity = closure_0(closure_1.get(), items, [1, 0], "clamp");
      items1 = [, ];
      items1[0] = closure_3;
      items1[1] = closure_2;
      items2 = [0];
      items2[1] = closure_4;
      obj.height = closure_0(closure_1.get(), items1, items2, "clamp");
      return obj;
    }
  }
  const items10 = [tmp40, tmp41, tmp42, tmp43, tmp44];
  MediaModalOverlayFooterTsx5.__closure = items10;
  MediaModalOverlayFooterTsx5.__workletHash = 3232524289494;
  MediaModalOverlayFooterTsx5.__initData = tmp39;
  const items11 = [tmp16[1], num, sharedValue, sharedValue1];
  const animatedStyle1 = require("module_1652").useAnimatedStyle(MediaModalOverlayFooterTsx5);
  const callback5 = obj3.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    value = height > c1;
    if (value) {
      value = _undefined4.get();
    }
    if (value) {
      value = easing.get() === c9;
    }
    if (value) {
      closure_12(height);
    }
  }, items11);
  const tmp3Result = require("module_1652");
  const items12 = [callback1, require("module_1652").interpolate, sharedValue2, 0, 1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp47, tmp48, tmp49, tmp50, tmp51] = items12;
  class MediaModalOverlayFooterTsx6 {
    constructor() {
      obj = { height: null };
      items = [, ];
      items[0] = closure_2;
      items[1] = closure_3;
      obj.height = closure_0(closure_1.get(), items, [0, 24], "clamp");
      return obj;
    }
  }
  const items13 = [tmp48, tmp49, tmp50, tmp51];
  MediaModalOverlayFooterTsx6.__closure = items13;
  MediaModalOverlayFooterTsx6.__workletHash = 1997603737745;
  MediaModalOverlayFooterTsx6.__initData = tmp47;
  const animatedStyle2 = require("module_1652").useAnimatedStyle(MediaModalOverlayFooterTsx6);
  const tmp54 = useMediaModalFooterBackgroundDefault();
  ({ r, g, b, a } = tmp54.mediaModalFooterBackgroundColorRgba);
  const tmp3Result4 = require("module_1652");
  const items14 = [callback2, r, g, b, require("module_1652").interpolate, sharedValue2, 0, 1, a, -1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64] = items14;
  class MediaModalOverlayFooterTsx7 {
    constructor() {
      obj = { backgroundColor: null, paddingVertical: null, transform: null };
      items = [, ];
      items[0] = closure_5;
      items[1] = closure_6;
      items1 = [, ];
      items1[0] = closure_7;
      items1[1] = 1;
      obj.backgroundColor = "rgba(" + closure_0 + ", " + closure_1 + ", " + closure_2 + ", " + closure_3(closure_4.get(), items, items1, "clamp") + ")";
      items2 = [, ];
      items2[0] = closure_5;
      items2[1] = closure_6;
      obj.paddingVertical = closure_3(closure_4.get(), items2, [8, 0], "clamp");
      obj1 = { translateY: null };
      items3 = [, ];
      items3[0] = closure_8;
      items3[1] = closure_5;
      obj1.translateY = closure_3(closure_4.get(), items3, [100, 0], "clamp");
      items4 = [];
      items4[0] = obj1;
      obj.transform = items4;
      return obj;
    }
  }
  const items15 = [tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64];
  MediaModalOverlayFooterTsx7.__closure = items15;
  MediaModalOverlayFooterTsx7.__workletHash = 8200199729064;
  MediaModalOverlayFooterTsx7.__initData = tmp55;
  const animatedStyle3 = require("module_1652").useAnimatedStyle(MediaModalOverlayFooterTsx7);
  const ref = obj3.useRef(undefined);
  const ref1 = obj3.useRef(undefined);
  const tmp7Result = tmp7(noop.useState(true), 2);
  const first4 = tmp7Result[0];
  const items16 = [first1, first2, first, callback2];
  const memo = obj3.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const FlingResult = Gesture.Fling();
    items = [closure_17, _mod1705.scheduleOnRN, callback2];
    c0 = undefined;
    c1 = undefined;
    [tmp, tmp2, tmp3] = items;
    class MediaModalOverlayFooterTsx8 {
      constructor() {
        tmp = closure_0(closure_1);
        return;
      }
    }
    const items1 = [tmp2, tmp3];
    MediaModalOverlayFooterTsx8.__closure = items1;
    MediaModalOverlayFooterTsx8.__workletHash = 6219016168710;
    MediaModalOverlayFooterTsx8.__initData = tmp;
    const directionResult = Gesture.Fling().direction(LegacyBaseButton.Directions.UP);
    const onStartResult = Gesture.Fling().direction(LegacyBaseButton.Directions.UP).onStart(MediaModalOverlayFooterTsx8);
    let tmp4 = !c5;
    if (!c5) {
      tmp4 = c9 > c7;
    }
    return Gesture.Fling().direction(LegacyBaseButton.Directions.UP).onStart(MediaModalOverlayFooterTsx8).withRef(ref).enabled(tmp4);
  }, items16);
  const items17 = [sharedValue2, first, callback2, first4];
  const memo1 = obj3.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const FlingResult = Gesture.Fling();
    items = [closure_19, c5, sharedValue2, timing_timing.withTiming, -1, native.STANDARD_EASING, closure_18, 0, _mod1705.scheduleOnRN, callback2];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
    class MediaModalOverlayFooterTsx10 {
      constructor() {
        if (closure_0) {
          tmp14 = closure_7;
          tmp15 = closure_8;
          tmp16 = closure_7(closure_8);
        } else {
          tmp2 = closure_3;
          obj = { duration: 350, easing: null };
          tmp3 = closure_4;
          obj.easing = closure_4;
          tmp4 = closure_5;
          items = [, , ];
          items[0] = closure_5;
          items[1] = closure_1;
          tmp5 = closure_6;
          items[2] = closure_6;
          closure_0 = undefined;
          closure_1 = undefined;
          tmp6 = items;
          [tmp7, tmp8, tmp9] = items;
          class MediaModalOverlayFooterTsx9 {
            constructor() {
              result = closure_0.set(closure_1);
              return;
            }
          }
          items1 = [, ];
          items1[0] = tmp8;
          items1[1] = tmp9;
          MediaModalOverlayFooterTsx9.__closure = items1;
          num = 4032472095819;
          MediaModalOverlayFooterTsx9.__workletHash = 4032472095819;
          MediaModalOverlayFooterTsx9.__initData = tmp7;
          str = "respect-motion-settings";
          tmp10 = tmp2;
          tmp11 = obj;
          tmp12 = MediaModalOverlayFooterTsx9;
          tmp = closure_1;
          result = closure_1.set(closure_2(tmp2, obj, "respect-motion-settings", MediaModalOverlayFooterTsx9));
        }
        return;
      }
    }
    let items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
    MediaModalOverlayFooterTsx10.__closure = items1;
    MediaModalOverlayFooterTsx10.__workletHash = 7803883424385;
    MediaModalOverlayFooterTsx10.__initData = tmp;
    const directionResult = Gesture.Fling().direction(LegacyBaseButton.Directions.DOWN);
    const onStartResult = Gesture.Fling().direction(LegacyBaseButton.Directions.DOWN).onStart(MediaModalOverlayFooterTsx10);
    return Gesture.Fling().direction(LegacyBaseButton.Directions.DOWN).onStart(MediaModalOverlayFooterTsx10).withRef(ref1).enabled(first4);
  }, items17);
  const items18 = [sharedValue2, sharedValue1, first1, first2, first, sharedValue, first4, num2];
  const memo2 = obj3.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const maxPointersResult = Gesture.Pan().maxPointers(1);
    items = [closure_20, c4, 2, clamp, c9, c2, c7, 0, 1, sharedValue2, 0.4, _mod1705.scheduleOnRN, c6, 3, 40, 2];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    c10 = undefined;
    c11 = undefined;
    c12 = undefined;
    c13 = undefined;
    c14 = undefined;
    [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items;
    class MediaModalOverlayFooterTsx11 {
      constructor(arg0) {
        translationY = arg0.translationY;
        result = closure_0.set(closure_1);
        if (translationY > 0) {
          tmp9 = closure_2;
          tmp10 = globalThis;
          _Math = Math;
          tmp11 = closure_3;
          tmp12 = closure_4;
          tmp13 = closure_5;
          num = 1;
          tmp14 = closure_6;
          tmp15 = closure_7;
          tmp16 = closure_2(1 - translationY / Math.abs(closure_3 - (closure_4 + closure_5)), closure_6, closure_7);
          tmp17 = closure_8;
          result1 = closure_8.set(tmp16);
          tmp19 = closure_9;
          if (tmp16 < closure_9) {
            tmp20 = closure_10;
            tmp21 = closure_11;
            flag = false;
            tmp22 = closure_10(closure_11, false);
          }
        } else {
          tmp2 = closure_2;
          tmp3 = closure_12;
          tmp4 = closure_13;
          tmp5 = closure_8;
          tmp6 = closure_7;
          tmp7 = closure_14;
          result2 = closure_8.set(closure_7 + (closure_14 - closure_7) * closure_2(-translationY / closure_12, 0, closure_13) / closure_13);
        }
        return;
      }
    }
    let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
    MediaModalOverlayFooterTsx11.__closure = items1;
    MediaModalOverlayFooterTsx11.__workletHash = 8297493939230;
    MediaModalOverlayFooterTsx11.__initData = tmp6;
    const activeOffsetYResult = Gesture.Pan().maxPointers(1).activeOffsetY(10);
    const tmp3 = c4;
    const tmp5 = c6;
    let items2 = [closure_23, sharedValue2, 0.75, _mod1705.scheduleOnRN, tmp5, c3, 0, tmp3, _mod1652.withDelay, timing_timing.withTiming, c9, native.STANDARD_EASING, closure_21, 1, closure_22];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    c10 = undefined;
    c11 = undefined;
    c12 = undefined;
    c13 = undefined;
    [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36] = items2;
    class MediaModalOverlayFooterTsx14 {
      constructor() {
        obj = closure_0;
        if (closure_0.get() < closure_1) {
          tmp9 = closure_2;
          tmp10 = closure_3;
          flag = false;
          tmp11 = closure_2(closure_3, false);
          tmp12 = closure_4;
          flag2 = true;
          result = closure_4.set(true);
          tmp14 = closure_5;
          if (obj.get() === closure_5) {
            tmp22 = closure_6;
            tmp23 = closure_7;
            tmp24 = closure_8;
            tmp25 = closure_9;
            num3 = 150;
            result1 = closure_6.set(closure_7(150, closure_8(closure_9, { duration: 0 })));
          } else {
            obj1 = { duration: 150, easing: null };
            tmp36 = closure_10;
            obj1.easing = closure_10;
            tmp37 = closure_11;
            items = [, , ];
            items[0] = closure_11;
            tmp38 = closure_6;
            items[1] = closure_6;
            tmp39 = closure_9;
            items[2] = closure_9;
            closure_0 = undefined;
            closure_1 = undefined;
            tmp40 = items;
            [tmp15, tmp16, tmp17] = items;
            class MediaModalOverlayFooterTsx12 {
              constructor() {
                result = closure_0.set(closure_1);
                return;
              }
            }
            items1 = [, ];
            items1[0] = tmp16;
            items1[1] = tmp17;
            MediaModalOverlayFooterTsx12.__closure = items1;
            num2 = 16272811070801;
            MediaModalOverlayFooterTsx12.__workletHash = 16272811070801;
            MediaModalOverlayFooterTsx12.__initData = tmp15;
            str2 = "respect-motion-settings";
            tmp18 = tmp14;
            tmp19 = obj1;
            tmp20 = MediaModalOverlayFooterTsx12;
            result2 = obj.set(closure_8(tmp14, obj1, "respect-motion-settings", MediaModalOverlayFooterTsx12));
          }
        } else {
          tmp27 = closure_2;
          tmp28 = closure_3;
          flag3 = true;
          tmp29 = closure_2(closure_3, true);
          tmp30 = closure_12;
          obj4 = { duration: 150, easing: null };
          tmp31 = closure_10;
          obj4.easing = closure_10;
          tmp32 = closure_13;
          items2 = [, , , ];
          items2[0] = closure_13;
          tmp33 = closure_4;
          items2[1] = closure_4;
          class MediaModalOverlayFooterTsx12 {
            constructor() {
              result = closure_0.set(closure_1);
              return;
            }
          }
          items2[2] = closure_6;
          tmp34 = closure_9;
          items2[3] = closure_9;
          closure_0 = undefined;
          closure_1 = undefined;
          closure_2 = undefined;
          tmp35 = items2;
          [tmp, tmp2, tmp3, tmp4] = items2;
          class MediaModalOverlayFooterTsx13 {
            constructor() {
              result = closure_0.set(false);
              result1 = closure_1.set(closure_2);
              return;
            }
          }
          items3 = [, , ];
          items3[0] = tmp2;
          items3[1] = tmp3;
          items3[2] = tmp4;
          MediaModalOverlayFooterTsx13.__closure = items3;
          num = 10401061559415;
          MediaModalOverlayFooterTsx13.__workletHash = 10401061559415;
          MediaModalOverlayFooterTsx13.__initData = tmp;
          str = "respect-motion-settings";
          tmp5 = tmp30;
          tmp6 = obj4;
          tmp7 = MediaModalOverlayFooterTsx13;
          result3 = obj.set(closure_8(tmp30, obj4, "respect-motion-settings", MediaModalOverlayFooterTsx13));
        }
        return;
      }
    }
    let items3 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36];
    MediaModalOverlayFooterTsx14.__closure = items3;
    MediaModalOverlayFooterTsx14.__workletHash = 8663569570701;
    MediaModalOverlayFooterTsx14.__initData = tmp22;
    const onUpdateResult = Gesture.Pan().maxPointers(1).activeOffsetY(10).onUpdate(MediaModalOverlayFooterTsx11);
    let tmp37 = c5;
    if (c5) {
      tmp37 = first4;
    }
    return Gesture.Pan().maxPointers(1).activeOffsetY(10).onUpdate(MediaModalOverlayFooterTsx11).onEnd(MediaModalOverlayFooterTsx14).enabled(tmp37);
  }, items18);
  const tmp3Result5 = require("module_1652");
  const items19 = [closure_24, overlayEnabled, sharedValue2];
  _require = undefined;
  importDefault = undefined;
  [tmp73, tmp74, tmp75] = items19;
  class MediaModalOverlayFooterTsx15 {
    constructor() {
      items = [, ];
      items[0] = closure_0.get();
      items[1] = closure_1.get();
      return items;
    }
  }
  const items20 = [tmp74, tmp75];
  MediaModalOverlayFooterTsx15.__closure = items20;
  MediaModalOverlayFooterTsx15.__workletHash = 11714064845531;
  MediaModalOverlayFooterTsx15.__initData = tmp73;
  const items21 = [closure_25, -0.25, overlayEnabled];
  _require = undefined;
  importDefault = undefined;
  [tmp76, tmp77, tmp78] = items21;
  class MediaModalOverlayFooterTsx16 {
    constructor(arg0) {
      [tmp, tmp2] = channelId;
      if (tmp) {
        tmp3 = closure_0;
        tmp = tmp2 < closure_0;
      }
      if (tmp) {
        tmp4 = closure_1;
        flag = false;
        result = closure_1.set(false);
      }
      return;
    }
  }
  const items22 = [tmp77, tmp78];
  MediaModalOverlayFooterTsx16.__closure = items22;
  MediaModalOverlayFooterTsx16.__workletHash = 2620357650006;
  MediaModalOverlayFooterTsx16.__initData = tmp76;
  const animatedReaction = require("module_1652").useAnimatedReaction(MediaModalOverlayFooterTsx15, MediaModalOverlayFooterTsx16);
  const items23 = [memo2, memo1, memo];
  const memo3 = obj3.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    return Gesture.Exclusive(memo, memo2, memo1);
  }, items23);
  const obj6 = { gesture: memo3, children: null };
  const obj7 = { style: animatedStyle3, children: null };
  const items24 = [tmp54.MediaModalFooterUnderlay, ];
  const obj8 = { style: null, children: c6(require("ActionSheetHeaderBar").ActionSheetHeaderBar, { tabStyle: tmp.drawerHeaderTab, style: tmp.drawerHeader }) };
  const items25 = [animatedStyle2, tmp.drawerContainer];
  obj8.style = items25;
  const items26 = [c6(_modDef1652.View, obj8), channelId.sliderElement, ];
  const obj10 = { onLayout: callback5, style: animatedStyle, children: null };
  const obj11 = { style: tmp.messagePreviewContainer, children: c6(MediaMessagePreviewDefault, { channelId: channelId.channelId, messageId: channelId.messageId, onClose: channelId.onClose, onTapMessage: callback2, onMeasureFullHeight: callback3, onMeasureCollapsedHeight: callback4, full: first, canExpand: first2 > first1, setScrollViewIsAtTop: tmp7Result[1], flingUpRef: ref, flingDownRef: ref1, animationDriver: sharedValue2, entranceAnimationDriver: channelId.entranceAnimationDriver }) };
  const items27 = [c6(c5, obj11), ];
  if (tmp81Result) {
    const obj13 = { style: null, children: null };
    const items28 = [animatedStyle1, tmp.thumbnailsContainer];
    obj13.style = items28;
    const obj14 = { syncer };
    obj13.children = tmp81(tmp53(14984), obj14);
    tmp81Result = tmp81(tmp53(1652).View, obj13);
  }
  const rect = { bottom: true, left: true, right: true, children: null };
  items27[1] = tmp81Result;
  obj10.children = items27;
  items26[2] = c7(_modDef1652.View, obj10);
  rect.children = items26;
  items24[1] = c7(require("common/SafeAreaView").SafeAreaPaddingView, rect);
  obj7.children = items24;
  obj6.children = c7(_modDef1652.View, obj7);
  return c6(require("LegacyBaseButton").GestureDetector, obj6);
}