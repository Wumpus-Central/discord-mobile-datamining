// === Module 16763: MediaKeyboardBottomSheet ===

// Module 16763 (MediaKeyboardBottomSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import ChatInputUtils from "ChatInputUtils" /* 4425 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4529 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function MediaKeyboardBackground(arg0) {
  ({ pointerEvents, style } = arg0);
  const obj = { pointerEvents, accessible: true, accessibilityRole: "adjustable", accessibilityLabel: null, style: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.XONG6A);
  const items = [style, closure_13().background];
  obj.style = items;
  return React7(View, obj);
}
const View = fn(17).View;
const MediaKeyboardConstants = fn(1607);
({ HEADER_HANDLE_HEIGHT: metroRequire, MediaPickerActionSheetEngagedActions: closure_7 } = MediaKeyboardConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const MetaQuestUtils = fn(1608);
let closure_11 = MetaQuestUtils.isMetaQuest();
const PlatformUtils = fn(1115);
const IS_IOS = PlatformUtils.isIOS();
const createStyles = fn(4560);
let obj = { background: null };
obj = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, borderRadius: nativeDefault.modules.mobile.MOBILE_MEDIA_KEYBOARD_TOP_BORDER_RADIUS };
obj.background = obj;
let closure_13 = createStyles.createStyles(obj);
const __initData = { code: "function MediaKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>=0;}" };
const __initData2 = { code: "function MediaKeyboardBottomSheetTsx2(isOpen,wasOpen){const{IS_IOS,runOnJS,handleSheetOpenChange}=this.__closure;if(IS_IOS&&isOpen!==wasOpen&&(wasOpen!=null||isOpen)){runOnJS(handleSheetOpenChange)(isOpen);}}" };
const __initData3 = { code: "function MediaKeyboardBottomSheetTsx3(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}" };
const __initData4 = { code: "function MediaKeyboardBottomSheetTsx4(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx");

export default noop.memo(function MediaKeyboardBottomSheet(animatedIndex) {
  animatedIndex = animatedIndex.animatedIndex;
  const bottomSheetRef = animatedIndex.bottomSheetRef;
  const onClose = animatedIndex.onClose;
  _slicedToArray = animatedIndex.onAccessibilityFocusRestore;
  handleHeight = undefined;
  let ref;
  let ref2;
  let callback3;
  ({ accessoriesComponent, animatedPosition, children, handleComponent, transitionState, animationConfigs, overlayComponent } = animatedIndex);
  const tmp4 = bottomSheetRef(onClose[11])({ forceMaxHeight: false });
  const tmp6 = transitionState === animatedIndex(onClose[12]).TransitionStates.YEETED;
  noop = tmp6;
  let obj = noop;
  let tmp = closure_13();
  const callback = noop.useCallback((arg0) => {
    const merged = Object.assign(arg0);
    return ref2(MediaKeyboardBackground, {});
  }, []);
  const items = [tmp6, onClose];
  const callback1 = noop.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.ViewComponent = bottomSheetRef(onClose[15]);
    obj.pressBehavior = "collapse";
    return ref2(animatedIndex(onClose[14]).BottomSheetBackdrop, obj);
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
      let obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      obj = { action: constants.FULLY_EXPANDED };
      AnalyticsUtilsDefault.track(AnalyticEvents.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj);
    }
  }, items);
  let obj1 = animatedIndex(onClose[19]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  let tmp12 = isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    tmp12 = tmp6;
  }
  const tmp13 = _slicedToArray(obj.useState(false), 2);
  handleHeight = tmp14;
  obj.useRef(null);
  ref = obj.useRef(false);
  ref2 = obj.useRef(null);
  const items1 = [isScreenReaderEnabled];
  callback3 = obj.useCallback((arg0) => {
    if (null != ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
    if (arg0) {
      let tmp5 = isScreenReaderEnabled;
      if (isScreenReaderEnabled) {
        tmp5 = !ref.current;
      }
      if (tmp5) {
        const _setTimeout = setTimeout;
        tmp.current = setTimeout(() => {
          ref2.current = null;
          closure_1_8.current = true;
          animatedIndex(onClose[20]);
          const obj = { ref };
          const result = obj.setAccessibilityFocus(obj);
        }, 100);
      }
    } else {
      ref.current = false;
    }
  }, items1);
  let tmp5Result = tmp5(tmp3[21]);
  class T {
    constructor() {
      return animatedIndex.get() >= 0;
    }
  }
  T.__closure = { animatedIndex };
  T.__workletHash = 14174017487042;
  T.__initData = __initData;
  class D {
    constructor(arg0, arg1) {
      tmp = closure_12;
      if (closure_12) {
        tmp = animatedIndex !== arg1;
      }
      if (tmp) {
        tmp2 = null;
        tmp3 = null != arg1 || animatedIndex;
        tmp = tmp3;
      }
      if (tmp) {
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj = closure_0(closure_2[21]);
        tmp6 = closure_10;
        tmp7 = obj.runOnJS(closure_10)(animatedIndex);
      }
      return;
    }
  }
  obj = { IS_IOS, runOnJS: tmp5(tmp3[21]).runOnJS, handleSheetOpenChange: callback3 };
  D.__closure = obj;
  D.__workletHash = 12464478404147;
  D.__initData = __initData2;
  const animatedReaction = tmp5Result.useAnimatedReaction(T, D);
  tmp5Result = tmp5(tmp3[21]);
  class H {
    constructor() {
      return Math.max(animatedIndex.get(), 0) > 0;
    }
  }
  H.__closure = { animatedIndex };
  H.__workletHash = 12101028946794;
  H.__initData = __initData3;
  const fn = function w(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(closure_6)(arg0);
    }
  };
  obj = { runOnJS: tmp5(tmp3[21]).runOnJS, setAccessibilityViewIsModal: tmp14 };
  fn.__closure = obj;
  fn.__workletHash = 4587285719468;
  fn.__initData = __initData4;
  const animatedReaction1 = tmp5Result.useAnimatedReaction(H, fn);
  bottomSheetRef(onClose[22])(() => () => {
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
  const tmp7 = bottomSheetRef(onClose[13])();
  ({ left, right } = bottomSheetRef(onClose[23])());
  obj1 = { gradient: tmp7, children: null };
  let obj2 = { style: { marginLeft: left, marginRight: right }, BodyComponent: null, ref: null, animationConfigs: null, animatedIndex: null, animatedPosition: null, enableContentPanningGesture: null, enableHandlePanningGesture: null, handleComponent: null, backgroundComponent: null, backgroundStyle: null, backdropComponent: null, onAnimate: null, handleHeight: null, onClose: null };
  const tmp21 = bottomSheetRef(onClose[23])();
  const tmp22 = callback3;
  obj2.BodyComponent = bottomSheetRef(onClose[15]);
  obj2.ref = bottomSheetRef;
  obj2.animationConfigs = animationConfigs;
  obj2.animatedIndex = animatedIndex;
  obj2.animatedPosition = animatedPosition;
  let tmp25 = !tmp12;
  if (!tmp12) {
    tmp25 = !closure_11;
  }
  obj2.enableContentPanningGesture = tmp25;
  obj2.enableHandlePanningGesture = !tmp12;
  obj2.handleComponent = handleComponent;
  obj2.backgroundComponent = callback;
  obj2.backgroundStyle = tmp.background;
  obj2.backdropComponent = callback1;
  obj2.onAnimate = callback2;
  obj2.handleHeight = handleHeight;
  obj2.onClose = onClose;
  let merged = Object.assign(tmp4);
  obj2.children = ref2(animatedIndex(onClose[24]).AccessibilityViewAnimated, {
    ref,
    nativeID: "media-keyboard-sheet",
    onAccessibilityEscape() {
      if (closure_3 != null) {
        tmp();
      }
      ChatInputUtils.dismissKeyboard();
    },
    accessibilityViewIsModal: tmp13[0],
    children
  });
  const items3 = [ref2(bottomSheetRef(onClose[14]), obj2), accessoriesComponent(tmp4), overlayComponent];
  obj1.children = items3;
  return tmp22(animatedIndex(onClose[12]).ThemeContextProvider, obj1);
});