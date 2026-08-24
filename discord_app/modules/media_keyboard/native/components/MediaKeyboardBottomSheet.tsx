// === Module 16079: MediaKeyboardBackground ===

// Module 16079 (MediaKeyboardBackground)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import DRAG_HANDLE from "DRAG_HANDLE" /* 1624 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;
import set from "set" /* 500 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
function MediaKeyboardBackground(arg0) {
  ({ pointerEvents, style } = arg0);
  const obj = { pointerEvents, accessible: true, accessibilityRole: "adjustable", accessibilityLabel: null, style: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.XONG6A);
  const items = [style, callback3().background];
  obj[4] = items;
  return callback2(View, obj);
}
let c4 = importAllResult;
({ HEADER_HANDLE_HEIGHT: closure_6, MediaPickerActionSheetEngagedActions: error } = DRAG_HANDLE);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = isMetaQuest.isMetaQuest();
let closure_12 = set.isIOS();
let obj = { background: null };
obj = { backgroundColor: ThemesDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, borderRadius: ThemesDefault.modules.mobile.MOBILE_MEDIA_KEYBOARD_TOP_BORDER_RADIUS };
obj[0] = obj;
let closure_13 = createCacheKey.createStyles(obj);
let closure_15 = { code: "function MediaKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>=0;}" };
let closure_16 = { code: "function MediaKeyboardBottomSheetTsx2(isOpen,wasOpen){const{IS_IOS,runOnJS,handleSheetOpenChange}=this.__closure;if(IS_IOS&&isOpen!==wasOpen&&(wasOpen!=null||isOpen)){runOnJS(handleSheetOpenChange)(isOpen);}}" };
let closure_17 = { code: "function MediaKeyboardBottomSheetTsx3(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}" };
let closure_18 = { code: "function MediaKeyboardBottomSheetTsx4(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}" };
let result = set.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx");

export default importAllResult.memo(function MediaKeyboardBottomSheet(animatedIndex) {
  animatedIndex = animatedIndex.animatedIndex;
  const bottomSheetRef = animatedIndex.bottomSheetRef;
  const onClose = animatedIndex.onClose;
  let callback = animatedIndex.onAccessibilityFocusRestore;
  importAllResult = undefined;
  let isScreenReaderEnabled;
  closure_6 = undefined;
  let ref;
  closure_8 = undefined;
  closure_9 = undefined;
  let callback3;
  ({ accessoriesComponent, animatedPosition, children, handleComponent, transitionState, animationConfigs, overlayComponent } = animatedIndex);
  const tmp4 = bottomSheetRef(onClose[11])({ forceMaxHeight: false });
  const tmp6 = transitionState === animatedIndex(onClose[12]).TransitionStates.YEETED;
  importAllResult = tmp6;
  let tmp = callback3();
  let obj = importAllResult;
  const tmp7 = bottomSheetRef(onClose[13])("MediaKeyboardBottomSheet");
  callback = importAllResult.useCallback((arg0) => {
    const merged = Object.assign(arg0);
    return ref2(closure_14, {});
  }, []);
  const items = [tmp6, onClose];
  const callback1 = importAllResult.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.ViewComponent = bottomSheetRef(onClose[16]);
    obj.pressBehavior = "collapse";
    return ref2(animatedIndex(onClose[15]).BottomSheetBackdrop, obj);
  }, []);
  const callback2 = importAllResult.useCallback((arg0, arg1) => {
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
      let obj = animatedIndex(onClose[17]);
      const result = obj.triggerHapticFeedback(bottomSheetRef(onClose[18]).IMPACT_LIGHT);
      obj = { action: null };
      obj[0] = ref.FULLY_EXPANDED;
      bottomSheetRef(onClose[19]).track(ref.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj);
      const obj2 = bottomSheetRef(onClose[19]);
    }
  }, items);
  obj1 = animatedIndex(onClose[20]);
  isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  let tmp13 = isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    tmp13 = tmp6;
  }
  const tmp14 = callback(obj.useState(false), 2);
  closure_6 = tmp15;
  ref = obj.useRef(null);
  closure_8 = obj.useRef(false);
  closure_9 = obj.useRef(null);
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
          closure_9.current = null;
          closure_8.current = true;
          let obj = closure_1_0(closure_1_2[21]);
          obj = { ref: closure_7 };
          const result = obj.setAccessibilityFocus(obj);
        }, 100);
      }
    } else {
      ref.current = false;
    }
  }, items1);
  let tmp5Result = tmp5(tmp3[22]);
  class T {
    constructor() {
      return animatedIndex.get() >= 0;
    }
  }
  T.__closure = { animatedIndex };
  T.__workletHash = 14174017487042;
  T.__initData = closure_15;
  class D {
    constructor(arg0, arg1) {
      tmp = closure_1_12;
      if (closure_1_12) {
        tmp = animatedIndex !== arg1;
      }
      if (tmp) {
        tmp2 = null;
        tmp3 = null != arg1 || animatedIndex;
        tmp = tmp3;
      }
      if (tmp) {
        tmp4 = animatedIndex;
        tmp5 = onClose;
        obj = animatedIndex(onClose[22]);
        tmp6 = closure_10;
        tmp7 = obj.runOnJS(closure_10)(animatedIndex);
      }
      return;
    }
  }
  obj = { IS_IOS: closure_12, runOnJS: tmp5(tmp3[22]).runOnJS, handleSheetOpenChange: callback3 };
  D.__closure = obj;
  D.__workletHash = 12464478404147;
  D.__initData = closure_16;
  const animatedReaction = tmp5Result.useAnimatedReaction(T, D);
  tmp5Result = tmp5(tmp3[22]);
  class H {
    constructor() {
      return Math.max(animatedIndex.get(), 0) > 0;
    }
  }
  H.__closure = { animatedIndex };
  H.__workletHash = 12101028946794;
  H.__initData = closure_17;
  const fn = function w(arg0, arg1) {
    if (arg0 !== arg1) {
      animatedIndex(onClose[22]).runOnJS(closure_6)(arg0);
      const obj = animatedIndex(onClose[22]);
    }
  };
  obj = { runOnJS: tmp5(tmp3[22]).runOnJS, setAccessibilityViewIsModal: tmp15 };
  fn.__closure = obj;
  fn.__workletHash = 4587285719468;
  fn.__initData = closure_18;
  const animatedReaction1 = tmp5Result.useAnimatedReaction(H, fn);
  bottomSheetRef(onClose[23])(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
    }
    if (closure_2 != null) {
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
          if (callback != null) {
            tmp = callback();
          }
          return tmp;
        }, 500);
        return () => clearTimeout(closure_0);
      } else if (onClose != null) {
        tmp2();
      }
    }
  }, items2);
  const tmp8 = bottomSheetRef(onClose[14])();
  ({ left, right } = bottomSheetRef(onClose[24])());
  let tmp24 = null;
  if (tmp7) {
    tmp24 = tmp8;
  }
  obj1 = { gradient: tmp24, children: null };
  let obj2 = { style: { marginLeft: left, marginRight: right }, BodyComponent: null, ref: null, animationConfigs: null, animatedIndex: null, animatedPosition: null, enableContentPanningGesture: null, enableHandlePanningGesture: null, handleComponent: null, backgroundComponent: null, backgroundStyle: null, backdropComponent: null, onAnimate: null, handleHeight: null, onClose: null };
  const tmp22 = bottomSheetRef(onClose[24])();
  const tmp23 = callback3;
  obj2[1] = bottomSheetRef(onClose[16]);
  obj2[2] = bottomSheetRef;
  obj2[3] = animationConfigs;
  obj2[4] = animatedIndex;
  obj2[5] = animatedPosition;
  let tmp27 = !tmp13;
  if (!tmp13) {
    tmp27 = !closure_11;
  }
  obj2[6] = tmp27;
  obj2[7] = !tmp13;
  obj2[8] = handleComponent;
  obj2[9] = callback;
  obj2[10] = tmp.background;
  obj2[11] = callback1;
  obj2[12] = callback2;
  obj2[13] = closure_6;
  obj2[14] = onClose;
  let merged = Object.assign(tmp4);
  obj2.children = closure_9(animatedIndex(onClose[25]).AccessibilityViewAnimated, {
    ref,
    nativeID: "media-keyboard-sheet",
    onAccessibilityEscape() {
      if (closure_3 != null) {
        tmp();
      }
      animatedIndex(onClose[26]).dismissKeyboard();
    },
    accessibilityViewIsModal: tmp14[0],
    children
  });
  const items3 = [closure_9(bottomSheetRef(onClose[15]), obj2), accessoriesComponent(tmp4), overlayComponent];
  obj1[1] = items3;
  return tmp23(animatedIndex(onClose[12]).ThemeContextProvider, obj1);
});