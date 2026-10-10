// === Module 17108: MediaKeyboardBottomSheet ===

// Module 17108 (MediaKeyboardBottomSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import ChatInputUtils from "ChatInputUtils" /* 4985 */;
import HapticUtils from "HapticUtils" /* 5057 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5058 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const MediaKeyboardConstants = fn(1627);
({ HEADER_HANDLE_HEIGHT: metroRequire, MediaPickerActionSheetEngagedActions: closure_7 } = MediaKeyboardConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const MetaQuestUtils = fn(1628);
let closure_11 = MetaQuestUtils.isMetaQuest();
const PlatformUtils = fn(1382);
const IS_IOS = PlatformUtils.isIOS();
const createStyles = fn(5092);
let obj = { background: { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, borderRadius: nativeDefault.modules.mobile.MOBILE_MEDIA_KEYBOARD_TOP_BORDER_RADIUS } };
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function MediaKeyboardBackground(arg0) {
  const cResult = c.c(7);
  ({ pointerEvents, style } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.XONG6A);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === style) {
    if (cResult[2] === tmp4.background) {
      let tmp7 = cResult[3];
    }
    if (cResult[4] === pointerEvents) {
      if (cResult[5] === tmp7) {
        let tmp8 = cResult[6];
      }
      return tmp8;
    }
    const obj2 = { pointerEvents, accessible: true, accessibilityRole: "adjustable", accessibilityLabel: first, style: tmp7 };
    const tmp11 = options(View, obj2);
    cResult[4] = pointerEvents;
    cResult[5] = tmp7;
    cResult[6] = tmp11;
    tmp8 = tmp11;
  }
  const items = [style, tmp4.background];
  cResult[1] = style;
  cResult[2] = tmp4.background;
  cResult[3] = items;
  tmp7 = items;
}) : (function MediaKeyboardBackground(arg0) {
  ({ pointerEvents, style } = arg0);
  const obj = { pointerEvents, accessible: true, accessibilityRole: "adjustable", accessibilityLabel: null, style: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.XONG6A);
  const items = [style, closure_13().background];
  obj.style = items;
  return options(View, obj);
});
const __initData = { code: "function MediaKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>=0;}" };
let closure_16 = { code: "function MediaKeyboardBottomSheetTsx2(isOpen_0,wasOpen){const{IS_IOS,runOnJS,handleSheetOpenChange}=this.__closure;if(IS_IOS&&isOpen_0!==wasOpen&&(wasOpen!=null||isOpen_0)){runOnJS(handleSheetOpenChange)(isOpen_0);}}" };
const __initData2 = { code: "function MediaKeyboardBottomSheetTsx3(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}" };
const __initData3 = { code: "function MediaKeyboardBottomSheetTsx4(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous){return;}runOnJS(setAccessibilityViewIsModal)(result);}" };
const __initData4 = { code: "function MediaKeyboardBottomSheetTsx5(){const{animatedIndex}=this.__closure;return animatedIndex.get()>=0;}" };
const __initData5 = { code: "function MediaKeyboardBottomSheetTsx6(isOpen_0,wasOpen){const{IS_IOS,runOnJS,handleSheetOpenChange}=this.__closure;if(IS_IOS&&isOpen_0!==wasOpen&&(wasOpen!=null||isOpen_0)){runOnJS(handleSheetOpenChange)(isOpen_0);}}" };
const __initData6 = { code: "function MediaKeyboardBottomSheetTsx7(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}" };
const __initData7 = { code: "function MediaKeyboardBottomSheetTsx8(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}" };
ReactCompilerGating = fn(558);
let obj5 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, borderRadius: nativeDefault.modules.mobile.MOBILE_MEDIA_KEYBOARD_TOP_BORDER_RADIUS };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaKeyboardBottomSheet(onAccessibilityFocusRestore) {
  const cResult = animatedIndex(onClose[11]).c(44);
  ({ accessoriesComponent, animatedIndex } = onAccessibilityFocusRestore);
  ({ animatedPosition, bottomSheetRef } = onAccessibilityFocusRestore);
  ({ children, handleComponent, onClose } = onAccessibilityFocusRestore);
  onAccessibilityFocusRestore = onAccessibilityFocusRestore.onAccessibilityFocusRestore;
  ({ animationConfigs, overlayComponent } = onAccessibilityFocusRestore);
  closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { forceMaxHeight: false };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  bottomSheetRef(onClose[13])(first);
  const tmp8 = onAccessibilityFocusRestore.transitionState === animatedIndex(onClose[14]).TransitionStates.YEETED;
  noop = tmp8;
  bottomSheetRef(onClose[15])();
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class K {
      constructor(arg0) {
        obj = {};
        merged = Object.assign(onAccessibilityFocusRestore);
        return closure_9(closure_1_14, obj);
      }
    }
    cResult[1] = K;
  } else {
    class K {
      constructor(arg0) {
        obj = {};
        merged = Object.assign(onAccessibilityFocusRestore);
        return closure_9(closure_1_14, obj);
      }
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor(arg0) {
        obj = {};
        merged = Object.assign(onAccessibilityFocusRestore);
        obj.ViewComponent = bottomSheetRef(onClose[17]);
        obj.pressBehavior = "collapse";
        return closure_9(animatedIndex(onClose[16]).BottomSheetBackdrop, obj);
      }
    }
    cResult[2] = V;
  } else {
    class V {
      constructor(arg0) {
        obj = {};
        merged = Object.assign(onAccessibilityFocusRestore);
        obj.ViewComponent = bottomSheetRef(onClose[17]);
        obj.pressBehavior = "collapse";
        return closure_9(animatedIndex(onClose[16]).BottomSheetBackdrop, obj);
      }
    }
  }
  if (cResult[3] === tmp8) {
    class V {
      constructor(arg0) {
        obj = {};
        merged = Object.assign(onAccessibilityFocusRestore);
        obj.ViewComponent = bottomSheetRef(onClose[17]);
        obj.pressBehavior = "collapse";
        return closure_9(animatedIndex(onClose[16]).BottomSheetBackdrop, obj);
      }
    }
    const isScreenReaderEnabled = animatedIndex(onClose[21]).useIsScreenReaderEnabled();
    if (!isScreenReaderEnabled) {
      class V {
        constructor(arg0) {
          obj = {};
          merged = Object.assign(onAccessibilityFocusRestore);
          obj.ViewComponent = bottomSheetRef(onClose[17]);
          obj.pressBehavior = "collapse";
          return closure_9(animatedIndex(onClose[16]).BottomSheetBackdrop, obj);
        }
      }
    }
    const tmpResult = animatedIndex(onClose[21]);
    [r10075, tmp15] = onAccessibilityFocusRestore(noop.useState(false), 2);
    closure_6 = tmp15;
    if (cResult[6] !== onAccessibilityFocusRestore) {
      class V {
        constructor(arg0) {
          obj = {};
          merged = Object.assign(onAccessibilityFocusRestore);
          obj.ViewComponent = bottomSheetRef(onClose[17]);
          obj.pressBehavior = "collapse";
          return closure_9(animatedIndex(onClose[16]).BottomSheetBackdrop, obj);
        }
      }
      cResult[6] = onAccessibilityFocusRestore;
      cResult[7] = tmp17;
    } else {
      class V {
        constructor(arg0) {
          obj = {};
          merged = Object.assign(onAccessibilityFocusRestore);
          obj.ViewComponent = bottomSheetRef(onClose[17]);
          obj.pressBehavior = "collapse";
          return closure_9(animatedIndex(onClose[16]).BottomSheetBackdrop, obj);
        }
      }
    }
    noop.useRef(null);
    noop.useRef(false);
    noop.useRef(null);
    function handleSheetOpenChange(arg0) {
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref2.current);
        ref2.current = null;
      }
      if (arg0) {
        let tmp5 = isScreenReaderEnabled;
        if (isScreenReaderEnabled) {
          tmp5 = !ref.current;
        }
        if (tmp5) {
          const _setTimeout = setTimeout;
          ref2.current = setTimeout(() => {
            ref2.current = null;
            closure_1_8.current = true;
            const result = animatedIndex(onClose[23]).setAccessibilityFocus({ ref });
          }, 100);
        }
      } else {
        ref.current = false;
      }
    }
    const tmp14 = onAccessibilityFocusRestore(noop.useState(false), 2);
    function ee() {
      return animatedIndex.get() >= 0;
    }
    let obj3 = { animatedIndex };
    ee.__closure = obj3;
    ee.__workletHash = 14174017487042;
    ee.__initData = __initData;
    const fn = function $(arg0, arg1) {
      let tmp = closure_12;
      if (closure_12) {
        tmp = arg0 !== arg1;
      }
      if (tmp) {
        tmp = null != arg1 || arg0;
        const tmp3 = null != arg1 || arg0;
      }
      if (tmp) {
        ReanimatedRexport.runOnJS(handleSheetOpenChange)(arg0);
      }
    };
    const obj5 = { IS_IOS, runOnJS: animatedIndex(onClose[24]).runOnJS, handleSheetOpenChange };
    fn.__closure = obj5;
    fn.__workletHash = 8029060873203;
    class F {
      constructor(arg0, arg1) {
        if (closure_4) {
          num = -1;
          if (-1 !== arg1) {
            tmp10 = null;
            if (onClose != null) {
              tmp9Result = tmp9();
            }
          }
          return;
        }
        tmp = onAccessibilityFocusRestore !== arg1;
        if (tmp) {
          num2 = 0;
          tmp = 0 === onAccessibilityFocusRestore;
        }
        if (tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[18]);
          tmp4 = closure_1;
          result = obj.triggerHapticFeedback(closure_1(closure_2[19]).IMPACT_LIGHT);
          obj2 = closure_1(closure_2[20]);
          tmp6 = AnalyticEvents;
          obj1 = { action: null };
          tmp7 = closure_7;
          obj1.action = closure_7.FULLY_EXPANDED;
          trackResult = obj2.track(AnalyticEvents.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj1);
        }
        return;
      }
    }
    const animatedReaction = animatedIndex(onClose[24]).useAnimatedReaction(ee, fn);
    const tmpResult3 = animatedIndex(onClose[24]);
    function te() {
      return Math.max(animatedIndex.get(), 0) > 0;
    }
    const obj6 = { animatedIndex };
    te.__closure = obj6;
    te.__workletHash = 12101028946794;
    te.__initData = __initData2;
    function ne(arg0, arg1) {
      if (arg0 !== arg1) {
        ReanimatedRexport.runOnJS(closure_6)(arg0);
      }
    }
    const obj7 = { runOnJS: animatedIndex(onClose[24]).runOnJS, setAccessibilityViewIsModal: tmp15 };
    ne.__closure = obj7;
    ne.__workletHash = 7345206173578;
    ne.__initData = __initData3;
    const animatedReaction1 = animatedIndex(onClose[24]).useAnimatedReaction(te, ne);
    if (cResult[8] !== onClose) {
      class V {
        constructor(arg0) {
          obj = {};
          merged = Object.assign(onAccessibilityFocusRestore);
          obj.ViewComponent = bottomSheetRef(onClose[17]);
          obj.pressBehavior = "collapse";
          return closure_9(animatedIndex(onClose[16]).BottomSheetBackdrop, obj);
        }
      }
      cResult[8] = onClose;
      cResult[9] = tmp28;
    } else {
      class V {
        constructor(arg0) {
          obj = {};
          merged = Object.assign(onAccessibilityFocusRestore);
          obj.ViewComponent = bottomSheetRef(onClose[17]);
          obj.pressBehavior = "collapse";
          return closure_9(animatedIndex(onClose[16]).BottomSheetBackdrop, obj);
        }
      }
    }
    bottomSheetRef(onClose[25])(tmp28);
    if (cResult[10] === bottomSheetRef) {
      class V {
        constructor(arg0) {
          obj = {};
          merged = Object.assign(onAccessibilityFocusRestore);
          obj.ViewComponent = bottomSheetRef(onClose[17]);
          obj.pressBehavior = "collapse";
          return closure_9(animatedIndex(onClose[16]).BottomSheetBackdrop, obj);
        }
      }
    }
    function ie() {
      if (closure_4) {
        if (null != bottomSheetRef.current) {
          const current = bottomSheetRef.current;
          current.forceClose();
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            let tmp;
            if (onClose != null) {
              tmp = onClose();
            }
            return tmp;
          }, 500);
          return () => clearTimeout(closure_0);
        } else if (onClose != null) {
          tmp2();
        }
      }
    }
    const items = [bottomSheetRef, tmp8, onClose];
    cResult[10] = bottomSheetRef;
    cResult[11] = tmp8;
    cResult[12] = onClose;
    cResult[13] = ie;
    cResult[14] = items;
    const tmpResult4 = animatedIndex(onClose[24]);
  }
  class F {
    constructor(arg0, arg1) {
      if (closure_4) {
        num = -1;
        if (-1 !== arg1) {
          tmp10 = null;
          if (onClose != null) {
            tmp9Result = tmp9();
          }
        }
        return;
      }
      tmp = onAccessibilityFocusRestore !== arg1;
      if (tmp) {
        num2 = 0;
        tmp = 0 === onAccessibilityFocusRestore;
      }
      if (tmp) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[18]);
        tmp4 = closure_1;
        result = obj.triggerHapticFeedback(closure_1(closure_2[19]).IMPACT_LIGHT);
        obj2 = closure_1(closure_2[20]);
        tmp6 = AnalyticEvents;
        obj1 = { action: null };
        tmp7 = closure_7;
        obj1.action = closure_7.FULLY_EXPANDED;
        trackResult = obj2.track(AnalyticEvents.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj1);
      }
      return;
    }
  }
  cResult[3] = tmp8;
  cResult[4] = onClose;
  cResult[5] = F;
  let obj = animatedIndex(onClose[11]);
}) : (function MediaKeyboardBottomSheet(animatedIndex) {
  animatedIndex = animatedIndex.animatedIndex;
  const bottomSheetRef = animatedIndex.bottomSheetRef;
  const onClose = animatedIndex.onClose;
  _slicedToArray = animatedIndex.onAccessibilityFocusRestore;
  handleHeight = undefined;
  let ref;
  let ref2;
  let callback3;
  ({ accessoriesComponent, animatedPosition, children, handleComponent, transitionState, animationConfigs, overlayComponent } = animatedIndex);
  const tmp4 = bottomSheetRef(onClose[13])({ forceMaxHeight: false });
  const tmp6 = transitionState === animatedIndex(onClose[14]).TransitionStates.YEETED;
  noop = tmp6;
  let tmp = closure_13();
  const callback = noop.useCallback((arg0) => {
    const merged = Object.assign(arg0);
    return ref2(closure_1_14, {});
  }, []);
  const items = [tmp6, onClose];
  const callback1 = noop.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.ViewComponent = bottomSheetRef(onClose[17]);
    obj.pressBehavior = "collapse";
    return ref2(animatedIndex(onClose[16]).BottomSheetBackdrop, obj);
  }, []);
  const callback2 = noop.useCallback((arg0, arg1) => {
    if (closure_4) {
      if (-1 !== arg1) {
        if (onClose != null) {
          tmp9();
        }
      }
    }
    let tmp = arg0 !== arg1;
    if (tmp) {
      tmp = 0 === arg0;
    }
    if (tmp) {
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      const obj3 = { action: constants.FULLY_EXPANDED };
      AnalyticsUtilsDefault.track(AnalyticEvents.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj3);
    }
  }, items);
  const tmp7 = bottomSheetRef(onClose[15])();
  const isScreenReaderEnabled = animatedIndex(onClose[21]).useIsScreenReaderEnabled();
  let tmp12 = isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    tmp12 = tmp6;
  }
  const tmp13 = _slicedToArray(noop.useState(false), 2);
  handleHeight = tmp14;
  obj.useRef(null);
  ref = obj.useRef(false);
  ref2 = obj.useRef(null);
  const items1 = [isScreenReaderEnabled];
  callback3 = obj.useCallback((arg0) => {
    if (null != ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
    if (arg0) {
      let tmp5 = isScreenReaderEnabled;
      if (isScreenReaderEnabled) {
        tmp5 = !ref.current;
      }
      if (tmp5) {
        const _setTimeout = setTimeout;
        ref2.current = setTimeout(() => {
          ref2.current = null;
          closure_1_8.current = true;
          const result = animatedIndex(onClose[23]).setAccessibilityFocus({ ref });
        }, 100);
      }
    } else {
      ref.current = false;
    }
  }, items1);
  let obj2 = animatedIndex(onClose[21]);
  class B {
    constructor() {
      return animatedIndex.get() >= 0;
    }
  }
  B.__closure = { animatedIndex };
  B.__workletHash = 2707510631878;
  B.__initData = __initData4;
  const fn = function w(arg0, arg1) {
    let tmp = closure_12;
    if (closure_12) {
      tmp = arg0 !== arg1;
    }
    if (tmp) {
      tmp = null != arg1 || arg0;
      const tmp3 = null != arg1 || arg0;
    }
    if (tmp) {
      ReanimatedRexport.runOnJS(callback3)(arg0);
    }
  };
  const tmp5Result = animatedIndex(onClose[24]);
  fn.__closure = { IS_IOS, runOnJS: animatedIndex(onClose[24]).runOnJS, handleSheetOpenChange: callback3 };
  fn.__workletHash = 14150445095159;
  fn.__initData = __initData5;
  const animatedReaction = tmp5Result.useAnimatedReaction(B, fn);
  let obj3 = { IS_IOS, runOnJS: animatedIndex(onClose[24]).runOnJS, handleSheetOpenChange: callback3 };
  class J {
    constructor() {
      return Math.max(animatedIndex.get(), 0) > 0;
    }
  }
  J.__closure = { animatedIndex };
  J.__workletHash = 634522091630;
  J.__initData = __initData6;
  class H {
    constructor(arg0, arg1) {
      if (animatedIndex !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[24]);
        tmp3 = closure_6;
        tmp4 = obj.runOnJS(closure_6)(animatedIndex);
      }
      return;
    }
  }
  const tmp5Result2 = animatedIndex(onClose[24]);
  H.__closure = { runOnJS: animatedIndex(onClose[24]).runOnJS, setAccessibilityViewIsModal: tmp13[1] };
  H.__workletHash = 13476860564128;
  H.__initData = __initData7;
  const animatedReaction1 = tmp5Result2.useAnimatedReaction(J, H);
  bottomSheetRef(onClose[25])(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
    }
    if (onClose != null) {
      tmp4();
    }
  });
  const items2 = [bottomSheetRef, tmp6, onClose];
  const layoutEffect = obj.useLayoutEffect(() => {
    if (closure_4) {
      if (null != bottomSheetRef.current) {
        const current = bottomSheetRef.current;
        current.forceClose();
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          let tmp;
          if (onClose != null) {
            tmp = onClose();
          }
          return tmp;
        }, 500);
        return () => clearTimeout(closure_0);
      } else if (onClose != null) {
        tmp2();
      }
    }
  }, items2);
  const obj4 = { runOnJS: animatedIndex(onClose[24]).runOnJS, setAccessibilityViewIsModal: tmp13[1] };
  ({ left, right } = bottomSheetRef(onClose[26])());
  const obj5 = { gradient: tmp7, children: null };
  const obj6 = { style: { marginLeft: left, marginRight: right }, BodyComponent: null, ref: null, animationConfigs: null, animatedIndex: null, animatedPosition: null, enableContentPanningGesture: null, enableHandlePanningGesture: null, handleComponent: null, backgroundComponent: null, backgroundStyle: null, backdropComponent: null, onAnimate: null, handleHeight: null, onClose: null };
  const tmp21 = bottomSheetRef(onClose[26])();
  const tmp22 = callback3;
  obj6.BodyComponent = bottomSheetRef(onClose[17]);
  obj6.ref = bottomSheetRef;
  obj6.animationConfigs = animationConfigs;
  obj6.animatedIndex = animatedIndex;
  obj6.animatedPosition = animatedPosition;
  let tmp25 = !tmp12;
  if (!tmp12) {
    tmp25 = !closure_11;
  }
  obj6.enableContentPanningGesture = tmp25;
  obj6.enableHandlePanningGesture = !tmp12;
  obj6.handleComponent = handleComponent;
  obj6.backgroundComponent = callback;
  obj6.backgroundStyle = tmp.background;
  obj6.backdropComponent = callback1;
  obj6.onAnimate = callback2;
  obj6.handleHeight = handleHeight;
  obj6.onClose = onClose;
  let merged = Object.assign(tmp4);
  obj6.children = ref2(animatedIndex(onClose[27]).AccessibilityViewAnimated, {
    ref,
    nativeID: "media-keyboard-sheet",
    onAccessibilityEscape: function handleClose() {
      if (closure_3 != null) {
        tmp();
      }
      ChatInputUtils.dismissKeyboard();
    },
    accessibilityViewIsModal: tmp13[0],
    children
  });
  const items3 = [ref2(bottomSheetRef(onClose[16]), obj6), accessoriesComponent(tmp4), overlayComponent];
  obj5.children = items3;
  return tmp22(animatedIndex(onClose[14]).ThemeContextProvider, obj5);
}));