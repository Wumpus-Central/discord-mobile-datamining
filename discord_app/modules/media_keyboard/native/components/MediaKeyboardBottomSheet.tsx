// discord_app/modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../haptics/HapticFeedbackTypes.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function MediaKeyboardBackground(arg0) {
  ({ pointerEvents, style } = arg0);
  const obj = {
    pointerEvents,
    accessible: true,
    accessibilityRole: "adjustable",
    accessibilityLabel: null,
    style: null,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.XONG6A);
  const items = [style, closure_13().background];
  obj.style = items;
  return React7(View, obj);
}
const View = fn(17).View;
const MediaKeyboardConstants = fn(1608);
({ HEADER_HANDLE_HEIGHT: metroRequire, MediaPickerActionSheetEngagedActions: closure_7 } = MediaKeyboardConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const MetaQuestUtils = fn(1609);
let closure_11 = MetaQuestUtils.isMetaQuest();
const PlatformUtils = fn(1364);
const IS_IOS = PlatformUtils.isIOS();
const createStyles = fn(4827);
let obj = {
  background: {
    backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND,
    borderRadius: nativeDefault.modules.mobile.MOBILE_MEDIA_KEYBOARD_TOP_BORDER_RADIUS,
  },
};
let closure_13 = createStyles.createStyles(obj);
const __initData = {
  code: "function MediaKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>=0;}",
};
const __initData2 = {
  code: "function MediaKeyboardBottomSheetTsx2(isOpen,wasOpen){const{IS_IOS,runOnJS,handleSheetOpenChange}=this.__closure;if(IS_IOS&&isOpen!==wasOpen&&(wasOpen!=null||isOpen)){runOnJS(handleSheetOpenChange)(isOpen);}}",
};
const __initData3 = {
  code: "function MediaKeyboardBottomSheetTsx3(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}",
};
const __initData4 = {
  code: "function MediaKeyboardBottomSheetTsx4(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}",
};
let obj5 = {
  backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND,
  borderRadius: nativeDefault.modules.mobile.MOBILE_MEDIA_KEYBOARD_TOP_BORDER_RADIUS,
};
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
  ({
    accessoriesComponent,
    animatedPosition,
    children,
    handleComponent,
    transitionState,
    animationConfigs,
    overlayComponent,
  } = animatedIndex);
  const tmp4 = bottomSheetRef(onClose[11])({ forceMaxHeight: false });
  const tmp6 = transitionState === animatedIndex(onClose[12]).TransitionStates.YEETED;
  noop = tmp6;
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
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      const obj3 = { action: constants.FULLY_EXPANDED };
      AnalyticsUtilsDefault.track(AnalyticEvents.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj3);
    }
  }, items);
  const tmp7 = bottomSheetRef(onClose[13])();
  const isScreenReaderEnabled = animatedIndex(onClose[19]).useIsScreenReaderEnabled();
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
          const result = animatedIndex(onClose[20]).setAccessibilityFocus({ ref });
        }, 100);
      }
    } else {
      ref.current = false;
    }
  }, items1);
  let obj2 = animatedIndex(onClose[19]);
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
  const tmp5Result = animatedIndex(onClose[21]);
  D.__closure = { IS_IOS, runOnJS: animatedIndex(onClose[21]).runOnJS, handleSheetOpenChange: callback3 };
  D.__workletHash = 12464478404147;
  D.__initData = __initData2;
  const animatedReaction = tmp5Result.useAnimatedReaction(T, D);
  let obj3 = { IS_IOS, runOnJS: animatedIndex(onClose[21]).runOnJS, handleSheetOpenChange: callback3 };
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
  const tmp5Result2 = animatedIndex(onClose[21]);
  fn.__closure = { runOnJS: animatedIndex(onClose[21]).runOnJS, setAccessibilityViewIsModal: tmp13[1] };
  fn.__workletHash = 4587285719468;
  fn.__initData = __initData4;
  const animatedReaction1 = tmp5Result2.useAnimatedReaction(H, fn);
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
  const obj4 = { runOnJS: animatedIndex(onClose[21]).runOnJS, setAccessibilityViewIsModal: tmp13[1] };
  ({ left, right } = bottomSheetRef(onClose[23])());
  const obj5 = { gradient: tmp7, children: null };
  const obj6 = {
    style: { marginLeft: left, marginRight: right },
    BodyComponent: null,
    ref: null,
    animationConfigs: null,
    animatedIndex: null,
    animatedPosition: null,
    enableContentPanningGesture: null,
    enableHandlePanningGesture: null,
    handleComponent: null,
    backgroundComponent: null,
    backgroundStyle: null,
    backdropComponent: null,
    onAnimate: null,
    handleHeight: null,
    onClose: null,
  };
  const tmp21 = bottomSheetRef(onClose[23])();
  const tmp22 = callback3;
  obj6.BodyComponent = bottomSheetRef(onClose[15]);
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
  obj6.children = ref2(animatedIndex(onClose[24]).AccessibilityViewAnimated, {
    ref,
    nativeID: "media-keyboard-sheet",
    onAccessibilityEscape() {
      if (closure_3 != null) {
        tmp();
      }
      ChatInputUtils.dismissKeyboard();
    },
    accessibilityViewIsModal: tmp13[0],
    children,
  });
  const items3 = [ref2(bottomSheetRef(onClose[14]), obj6), accessoriesComponent(tmp4), overlayComponent];
  obj5.children = items3;
  return tmp22(animatedIndex(onClose[12]).ThemeContextProvider, obj5);
});
