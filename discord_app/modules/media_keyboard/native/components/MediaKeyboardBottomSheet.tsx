// === Module 12797: MediaKeyboardBottomSheet ===

// Module 12797 (MediaKeyboardBottomSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef1652 from "module_1652" /* 1652 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5320 */;
import ChatInputUtils from "ChatInputUtils" /* 5333 */;
import HapticUtils from "HapticUtils" /* 5386 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5387 */;
import BottomSheetModalDefault from "BottomSheetModal" /* 5402 */;
import useMountEffectDefault from "useMountEffect" /* 5731 */;
import useCustomKeyboardBottomSheetConfigDefault from "useCustomKeyboardBottomSheetConfig" /* 12632 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function MediaKeyboardBackground(arg0) {
  ({ pointerEvents, style } = arg0);
  const obj = { pointerEvents, accessible: true, accessibilityRole: "adjustable", accessibilityLabel: null, style: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.XONG6A);
  items = [style, closure_13().background];
  obj.style = items;
  return React6(View, obj);
}
const View = fn(17).View;
const MediaKeyboardConstants = fn(1623);
({ HEADER_HANDLE_HEIGHT: closure_6, MediaPickerActionSheetEngagedActions: metroImportDefault } = MediaKeyboardConstants);
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const MetaQuestUtils = fn(1624);
let closure_11 = MetaQuestUtils.isMetaQuest();
const PlatformUtils = fn(1377);
let closure_12 = PlatformUtils.isIOS();
const createStyles = fn(5143);
let obj = { background: { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, borderRadius: nativeDefault.modules.mobile.MOBILE_MEDIA_KEYBOARD_TOP_BORDER_RADIUS } };
let closure_13 = createStyles.createStyles(obj);
let closure_15 = { code: "(function MediaKeyboardBottomSheetTsx1(){let[animatedIndex]=this.__closure;return animatedIndex.get()>=0;})" };
let closure_16 = { code: "(function MediaKeyboardBottomSheetTsx2(isOpen,wasOpen){let[IS_IOS,scheduleOnRN,handleSheetOpenChange]=this.__closure;if(IS_IOS&&isOpen!==wasOpen&&(wasOpen!=null||isOpen)){scheduleOnRN(handleSheetOpenChange,isOpen);}})" };
let closure_17 = { code: "(function MediaKeyboardBottomSheetTsx3(){let[animatedIndex]=this.__closure;return Math.max(animatedIndex.get(),0)>0;})" };
let closure_18 = { code: "(function MediaKeyboardBottomSheetTsx4(result,previous){let[scheduleOnRN,setAccessibilityViewIsModal]=this.__closure;if(result===previous)return;scheduleOnRN(setAccessibilityViewIsModal,result);})" };
const obj5 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, borderRadius: nativeDefault.modules.mobile.MOBILE_MEDIA_KEYBOARD_TOP_BORDER_RADIUS };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx");

export default noop.memo(function MediaKeyboardBottomSheet(onClose) {
  ({ animatedIndex, bottomSheetRef } = onClose);
  _require = bottomSheetRef;
  onClose = onClose.onClose;
  importDefault = onClose;
  dependencyMap = onClose.onAccessibilityFocusRestore;
  let isScreenReaderEnabled;
  let ref;
  handleHeight = undefined;
  ({ accessoriesComponent, animatedPosition, children, handleComponent, transitionState, animationConfigs, overlayComponent } = onClose);
  const tmp4 = useCustomKeyboardBottomSheetConfigDefault({ forceMaxHeight: false });
  const tmp6 = transitionState === require("native").TransitionStates.YEETED;
  _slicedToArray = tmp6;
  let tmp = closure_13();
  const callback = isScreenReaderEnabled.useCallback((arg0) => {
    const merged = Object.assign(arg0);
    return closure_1_9(MediaKeyboardBackground, {});
  }, []);
  items = [tmp6, onClose];
  const callback1 = isScreenReaderEnabled.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.ViewComponent = _undefined2(_undefined3[15]).View;
    obj.pressBehavior = "collapse";
    return closure_1_9(_undefined(_undefined3[14]).BottomSheetBackdrop, obj);
  }, []);
  const callback2 = isScreenReaderEnabled.useCallback((arg0, arg1) => {
    if (closure_3) {
      if (-1 !== arg1) {
        if (c1 != null) {
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
  const tmp7 = useColorThemeBackgroundDefault();
  isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  let tmp12 = isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    tmp12 = tmp6;
  }
  let obj2 = require("useIsScreenReaderEnabled");
  [tmp14, tmp15] = isScreenReaderEnabled.useState(false);
  ref = obj.useRef(null);
  handleHeight = obj.useRef(false);
  isScreenReaderEnabled.useRef(null);
  const items1 = [isScreenReaderEnabled];
  const callback3 = obj.useCallback((arg0) => {
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
          closure_1_6.current = true;
          const result = c0(c2[20]).setAccessibilityFocus({ ref });
        }, 100);
      }
    } else {
      ref.current = false;
    }
  }, items1);
  const tmp13 = _slicedToArray(isScreenReaderEnabled.useState(false), 2);
  const items2 = [closure_15, animatedIndex];
  _require = undefined;
  [tmp18, tmp19] = items2;
  class MediaKeyboardBottomSheetTsx1 {
    constructor() {
      return closure_0.get() >= 0;
    }
  }
  const items3 = [tmp19];
  MediaKeyboardBottomSheetTsx1.__closure = items3;
  MediaKeyboardBottomSheetTsx1.__workletHash = 5695849548059;
  MediaKeyboardBottomSheetTsx1.__initData = tmp18;
  const items4 = [closure_16, closure_12, require("module_1705").scheduleOnRN, callback3];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp20, tmp21, tmp22, tmp23] = items4;
  class MediaKeyboardBottomSheetTsx2 {
    constructor(arg0, arg1) {
      tmp = closure_0;
      if (closure_0) {
        tmp = onClose !== arg1;
      }
      if (tmp) {
        tmp2 = null;
        tmp3 = null != arg1 || onClose;
        tmp = tmp3;
      }
      if (tmp) {
        tmp4 = closure_1;
        tmp5 = closure_2;
        tmp6 = closure_1(closure_2, onClose);
      }
      return;
    }
  }
  const items5 = [tmp21, tmp22, tmp23];
  MediaKeyboardBottomSheetTsx2.__closure = items5;
  MediaKeyboardBottomSheetTsx2.__workletHash = 6228277612359;
  MediaKeyboardBottomSheetTsx2.__initData = tmp20;
  const animatedReaction = require("module_1652").useAnimatedReaction(MediaKeyboardBottomSheetTsx1, MediaKeyboardBottomSheetTsx2);
  const tmp5Result = require("module_1652");
  const items6 = [closure_17, animatedIndex];
  _require = undefined;
  [tmp25, tmp26] = items6;
  class MediaKeyboardBottomSheetTsx3 {
    constructor() {
      return Math.max(closure_0.get(), 0) > 0;
    }
  }
  const items7 = [tmp26];
  MediaKeyboardBottomSheetTsx3.__closure = items7;
  MediaKeyboardBottomSheetTsx3.__workletHash = 4645791951827;
  MediaKeyboardBottomSheetTsx3.__initData = tmp25;
  const items8 = [closure_18, require("module_1705").scheduleOnRN, tmp15];
  _require = undefined;
  importDefault = undefined;
  [tmp27, tmp28, tmp29] = items8;
  class MediaKeyboardBottomSheetTsx4 {
    constructor(arg0, arg1) {
      if (onClose !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, onClose);
      }
      return;
    }
  }
  const items9 = [tmp28, tmp29];
  MediaKeyboardBottomSheetTsx4.__closure = items9;
  MediaKeyboardBottomSheetTsx4.__workletHash = 10381616509048;
  MediaKeyboardBottomSheetTsx4.__initData = tmp27;
  const animatedReaction1 = require("module_1652").useAnimatedReaction(MediaKeyboardBottomSheetTsx3, MediaKeyboardBottomSheetTsx4);
  useMountEffectDefault(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
    }
    if (_undefined2 != null) {
      tmp4();
    }
  });
  const items10 = [bottomSheetRef, tmp6, onClose];
  const layoutEffect = obj.useLayoutEffect(() => {
    if (closure_3) {
      if (null != _undefined.current) {
        const current = _undefined.current;
        current.forceClose();
        const _setTimeout = setTimeout;
        _undefined = setTimeout(() => {
          let tmp;
          if (_undefined2 != null) {
            tmp = _undefined2();
          }
          return tmp;
        }, 500);
        return () => clearTimeout(closure_0);
      } else if (c1 != null) {
        tmp2();
      }
    }
  }, items10);
  const tmp5Result2 = require("module_1652");
  ({ left, right } = useSafeAreaInsetsDefault());
  let obj3 = { gradient: tmp7, children: null };
  const obj4 = { style: { marginLeft: left, marginRight: right }, BodyComponent: null, ref: null, animationConfigs: null, animatedIndex: null, animatedPosition: null, enableContentPanningGesture: null, enableHandlePanningGesture: null, handleComponent: null, backgroundComponent: null, backgroundStyle: null, backdropComponent: null, onAnimate: null, handleHeight: null, onClose: null };
  const tmp33 = useSafeAreaInsetsDefault();
  obj4.BodyComponent = _modDef1652.View;
  obj4.ref = bottomSheetRef;
  obj4.animationConfigs = animationConfigs;
  obj4.animatedIndex = animatedIndex;
  obj4.animatedPosition = animatedPosition;
  let tmp37 = !tmp12;
  if (!tmp12) {
    tmp37 = !closure_11;
  }
  obj4.enableContentPanningGesture = tmp37;
  obj4.enableHandlePanningGesture = !tmp12;
  obj4.handleComponent = handleComponent;
  obj4.backgroundComponent = callback;
  obj4.backgroundStyle = tmp.background;
  obj4.backdropComponent = callback1;
  obj4.onAnimate = callback2;
  obj4.handleHeight = handleHeight;
  obj4.onClose = onClose;
  let merged = Object.assign(tmp4);
  obj4.children = closure_9(require("AccessibilityView").AccessibilityViewAnimated, {
    ref,
    nativeID: "media-keyboard-sheet",
    onAccessibilityEscape: function handleClose() {
      if (c2 != null) {
        tmp();
      }
      ChatInputUtils.dismissKeyboard();
    },
    accessibilityViewIsModal: tmp14,
    children
  });
  const items11 = [closure_9(BottomSheetModalDefault, obj4), accessoriesComponent(tmp4), overlayComponent];
  obj3.children = items11;
  return closure_10(require("native").ThemeContextProvider, obj3);
});