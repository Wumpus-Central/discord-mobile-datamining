// discord_app/modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../haptics/HapticFeedbackTypes.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import MediaKeyboardConstants from "../MediaKeyboardConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import MetaQuestUtils from "../../../device/MetaQuestUtils.android.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let handleHeight, onAccessibilityFocusRestore;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let obj2;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ HEADER_HANDLE_HEIGHT: metroRequire, MediaPickerActionSheetEngagedActions: metroImportDefault } =
  MediaKeyboardConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = MetaQuestUtils.isMetaQuest();
const IS_IOS = PlatformUtils.isIOS();
let obj = { background: obj2 };
obj2 = {
  backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND,
  borderRadius: nativeDefault.modules.mobile.MOBILE_MEDIA_KEYBOARD_TOP_BORDER_RADIUS,
};
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let pointerEvents;
      let style;
      const obj = react2;
      const cResult = obj.c(7);
      ({ pointerEvents, style } = arg0);
      const tmp4 = closure_13();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t.XONG6A);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === style) {
        let tmp7;
        if (cResult[2] === tmp4.background) {
          tmp7 = cResult[3];
        }
        if (cResult[4] === pointerEvents) {
          let tmp8;
          if (cResult[5] === tmp7) {
            tmp8 = cResult[6];
          }
          return tmp8;
        }
        const obj2 = {
          pointerEvents,
          accessible: true,
          accessibilityRole: "adjustable",
          accessibilityLabel: first,
          style: tmp7,
        };
        const tmp11 = React4(View, obj2);
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
    }
  : (arg0) => {
      let intl;
      let items;
      let pointerEvents;
      let style;
      ({ pointerEvents, style } = arg0);
      const obj = {
        pointerEvents,
        accessible: true,
        accessibilityRole: "adjustable",
        accessibilityLabel: intl.string(intl2.t.XONG6A),
        style: items,
      };
      const tmp = closure_13();
      intl = intl2.intl;
      items = [style, tmp.background];
      return React4(View, obj);
    };
const __initData = {
  code: "function MediaKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>=0;}",
};
let closure_16 = {
  code: "function MediaKeyboardBottomSheetTsx2(isOpen_0,wasOpen){const{IS_IOS,runOnJS,handleSheetOpenChange}=this.__closure;if(IS_IOS&&isOpen_0!==wasOpen&&(wasOpen!=null||isOpen_0)){runOnJS(handleSheetOpenChange)(isOpen_0);}}",
};
const __initData2 = {
  code: "function MediaKeyboardBottomSheetTsx3(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}",
};
const __initData3 = {
  code: "function MediaKeyboardBottomSheetTsx4(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous){return;}runOnJS(setAccessibilityViewIsModal)(result);}",
};
const __initData4 = {
  code: "function MediaKeyboardBottomSheetTsx5(){const{animatedIndex}=this.__closure;return animatedIndex.get()>=0;}",
};
const __initData5 = {
  code: "function MediaKeyboardBottomSheetTsx6(isOpen_0,wasOpen){const{IS_IOS,runOnJS,handleSheetOpenChange}=this.__closure;if(IS_IOS&&isOpen_0!==wasOpen&&(wasOpen!=null||isOpen_0)){runOnJS(handleSheetOpenChange)(isOpen_0);}}",
};
const __initData6 = {
  code: "function MediaKeyboardBottomSheetTsx7(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}",
};
const __initData7 = {
  code: "function MediaKeyboardBottomSheetTsx8(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}",
};
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (onAccessibilityFocusRestore) => {
        let accessoriesComponent;
        let animatedIndex;
        let animatedPosition;
        let animationConfigs;
        let bottomSheetRef;
        let children;
        let closure_4;
        let first;
        let handleComponent;
        let onClose;
        let overlayComponent;
        let tmp15;
        let obj = animatedIndex(onClose[11]);
        const cResult = obj.c(44);
        ({ accessoriesComponent, animatedIndex } = onAccessibilityFocusRestore);
        ({ animatedPosition, bottomSheetRef } = onAccessibilityFocusRestore);
        ({ children, handleComponent, onClose } = onAccessibilityFocusRestore);
        onAccessibilityFocusRestore = onAccessibilityFocusRestore.onAccessibilityFocusRestore;
        ({ animationConfigs, overlayComponent } = onAccessibilityFocusRestore);
        const transitionState = onAccessibilityFocusRestore.transitionState;
        let tmp4 = closure_13();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { forceMaxHeight: false };
          cResult[0] = obj2;
          first = obj2;
        } else {
          first = cResult[0];
        }
        bottomSheetRef(onClose[13])(first);
        const tmp8 = transitionState === animatedIndex(onClose[14]).TransitionStates.YEETED;
        react = tmp8;
        bottomSheetRef(onClose[15])();
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor(arg0) {
              const obj = {};
              const merged = Object.assign(arg0);
              return ref2(closure_1_14, obj);
            }
          }
          cResult[1] = P;
        } else {
          class P {
            constructor(arg0) {
              const obj = {};
              const merged = Object.assign(arg0);
              return ref2(closure_1_14, obj);
            }
          }
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          class V {
            constructor(arg0) {
              const obj = { ViewComponent: bottomSheetRef(onClose[17]), pressBehavior: "collapse" };
              const BottomSheetBackdrop = animatedIndex(onClose[16]).BottomSheetBackdrop;
              const merged = Object.assign(arg0);
              return ref2(BottomSheetBackdrop, obj);
            }
          }
          cResult[2] = V;
        } else {
          class V {
            constructor(arg0) {
              const obj = { ViewComponent: bottomSheetRef(onClose[17]), pressBehavior: "collapse" };
              const BottomSheetBackdrop = animatedIndex(onClose[16]).BottomSheetBackdrop;
              const merged = Object.assign(arg0);
              return ref2(BottomSheetBackdrop, obj);
            }
          }
        }
        if (cResult[3] === tmp8) {
          class V {
            constructor(arg0) {
              const obj = { ViewComponent: bottomSheetRef(onClose[17]), pressBehavior: "collapse" };
              const BottomSheetBackdrop = animatedIndex(onClose[16]).BottomSheetBackdrop;
              const merged = Object.assign(arg0);
              return ref2(BottomSheetBackdrop, obj);
            }
          }
          const tmpResult = animatedIndex(onClose[21]);
          const isScreenReaderEnabled = tmpResult.useIsScreenReaderEnabled();
          if (!isScreenReaderEnabled) {
            class V {
              constructor(arg0) {
                const obj = { ViewComponent: bottomSheetRef(onClose[17]), pressBehavior: "collapse" };
                const BottomSheetBackdrop = animatedIndex(onClose[16]).BottomSheetBackdrop;
                const merged = Object.assign(arg0);
                return ref2(BottomSheetBackdrop, obj);
              }
            }
          }
          [r10075, tmp15] = onAccessibilityFocusRestore(react.useState(false), 2);
          let closure_6 = tmp15;
          onAccessibilityFocusRestore(react.useState(false), 2);
          if (cResult[6] !== onAccessibilityFocusRestore) {
            class V {
              constructor(arg0) {
                const obj = { ViewComponent: bottomSheetRef(onClose[17]), pressBehavior: "collapse" };
                const BottomSheetBackdrop = animatedIndex(onClose[16]).BottomSheetBackdrop;
                const merged = Object.assign(arg0);
                return ref2(BottomSheetBackdrop, obj);
              }
            }
            cResult[6] = onAccessibilityFocusRestore;
            cResult[7] = tmp17;
          } else {
            class V {
              constructor(arg0) {
                const obj = { ViewComponent: bottomSheetRef(onClose[17]), pressBehavior: "collapse" };
                const BottomSheetBackdrop = animatedIndex(onClose[16]).BottomSheetBackdrop;
                const merged = Object.assign(arg0);
                return ref2(BottomSheetBackdrop, obj);
              }
            }
          }
          obj4.useRef(null);
          const ref = obj4.useRef(false);
          const ref2 = obj4.useRef(null);
          function handleSheetOpenChange(arg0) {
            if (null != ref2.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(ref2.current);
              ref2.current = null;
            }
            const tmp4 = arg0;
            if (tmp4) {
              const tmp6 = isScreenReaderEnabled && !ref.current;
              if (tmp6) {
                const _setTimeout = setTimeout;
                ref2.current = setTimeout(() => {
                  ref2.current = null;
                  closure_1_8.current = true;
                  const obj = animatedIndex(onClose[23]);
                  const obj2 = { ref };
                  const result = obj.setAccessibilityFocus(obj2);
                }, 100);
              }
            } else {
              ref.current = false;
            }
          }
          function ee() {
            return animatedIndex.get() >= 0;
          }
          let obj3 = { animatedIndex };
          ee.__closure = obj3;
          ee.__workletHash = 14174017487042;
          ee.__initData = __initData;
          const fn = function $(arg0, arg1) {
            let tmp = IS_IOS && arg0 !== arg1;
            if (tmp) {
              tmp = null != arg1 || arg0;
            }
            if (tmp) {
              const obj = ReanimatedRexport;
              obj.runOnJS(handleSheetOpenChange)(arg0);
            }
          };
          const obj5 = { IS_IOS, runOnJS: animatedIndex(onClose[24]).runOnJS, handleSheetOpenChange };
          const useAnimatedReaction = animatedIndex(onClose[24]).useAnimatedReaction;
          animatedIndex(onClose[24]);
          fn.__closure = obj5;
          fn.__workletHash = 8029060873203;
          class F {
            constructor(arg0, arg1) {
              if (closure_4) {
                if (-1 !== arg1) {
                  if (onClose != null) {
                    tmp10();
                  }
                }
              }
              const tmp2 = arg0 !== arg1 && 0 === arg0;
              if (tmp2) {
                const obj = HapticUtils;
                const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
                const obj3 = { action: metroImportDefault.FULLY_EXPANDED };
                const obj2 = AnalyticsUtilsDefault;
                obj2.track(AnalyticEvents.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj3);
              }
            }
          }
          const animatedReaction = useAnimatedReaction(ee, fn);
          function te() {
            return Math.max(animatedIndex.get(), 0) > 0;
          }
          const obj6 = { animatedIndex };
          te.__closure = obj6;
          te.__workletHash = 12101028946794;
          te.__initData = __initData2;
          function ne(arg0, arg1) {
            if (arg0 !== arg1) {
              const obj = ReanimatedRexport;
              obj.runOnJS(handleHeight)(arg0);
            }
          }
          const obj7 = { runOnJS: animatedIndex(onClose[24]).runOnJS, setAccessibilityViewIsModal: tmp15 };
          const useAnimatedReaction2 = animatedIndex(onClose[24]).useAnimatedReaction;
          animatedIndex(onClose[24]);
          ne.__closure = obj7;
          ne.__workletHash = 7345206173578;
          ne.__initData = __initData3;
          const animatedReaction2 = useAnimatedReaction2(te, ne);
          if (cResult[8] !== onClose) {
            class V {
              constructor(arg0) {
                const obj = { ViewComponent: bottomSheetRef(onClose[17]), pressBehavior: "collapse" };
                const BottomSheetBackdrop = animatedIndex(onClose[16]).BottomSheetBackdrop;
                const merged = Object.assign(arg0);
                return ref2(BottomSheetBackdrop, obj);
              }
            }
            cResult[8] = onClose;
            cResult[9] = tmp30;
          } else {
            class V {
              constructor(arg0) {
                const obj = { ViewComponent: bottomSheetRef(onClose[17]), pressBehavior: "collapse" };
                const BottomSheetBackdrop = animatedIndex(onClose[16]).BottomSheetBackdrop;
                const merged = Object.assign(arg0);
                return ref2(BottomSheetBackdrop, obj);
              }
            }
          }
          bottomSheetRef(onClose[25])(tmp30);
          if (cResult[10] === bottomSheetRef) {
            class V {
              constructor(arg0) {
                const obj = { ViewComponent: bottomSheetRef(onClose[17]), pressBehavior: "collapse" };
                const BottomSheetBackdrop = animatedIndex(onClose[16]).BottomSheetBackdrop;
                const merged = Object.assign(arg0);
                return ref2(BottomSheetBackdrop, obj);
              }
            }
          }
          function ae() {
            let closure_0;
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
                tmp3();
              }
            }
          }
          const items = [bottomSheetRef, tmp8, onClose];
          cResult[10] = bottomSheetRef;
          cResult[11] = tmp8;
          cResult[12] = onClose;
          cResult[13] = ae;
          cResult[14] = items;
        }
        class F {
          constructor(arg0, arg1) {
            if (closure_4) {
              if (-1 !== arg1) {
                if (onClose != null) {
                  tmp10();
                }
              }
            }
            const tmp2 = arg0 !== arg1 && 0 === arg0;
            if (tmp2) {
              const obj = HapticUtils;
              const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
              const obj3 = { action: metroImportDefault.FULLY_EXPANDED };
              const obj2 = AnalyticsUtilsDefault;
              obj2.track(AnalyticEvents.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj3);
            }
          }
        }
        cResult[3] = tmp8;
        cResult[4] = onClose;
        cResult[5] = F;
      }
    : (animatedIndex) => {
        let accessoriesComponent;
        let animatedPosition;
        let animationConfigs;
        let children;
        let closure_3;
        let closure_4;
        let closure_6;
        let handleComponent;
        let items3;
        let left;
        let obj7;
        let overlayComponent;
        let right;
        let tmp26;
        let transitionState;
        animatedIndex = animatedIndex.animatedIndex;
        const bottomSheetRef = animatedIndex.bottomSheetRef;
        const onClose = animatedIndex.onClose;
        _slicedToArray = animatedIndex.onAccessibilityFocusRestore;
        ({
          accessoriesComponent,
          animatedPosition,
          children,
          handleComponent,
          transitionState,
          animationConfigs,
          overlayComponent,
        } = animatedIndex);
        let tmp2 = bottomSheetRef;
        const tmp3 = onClose;
        let tmp = closure_13();
        let tmp4 = bottomSheetRef(onClose[13])({ forceMaxHeight: false });
        let tmp6 = transitionState === animatedIndex(onClose[14]).TransitionStates.YEETED;
        react = tmp6;
        let obj = react;
        const tmp7 = bottomSheetRef(onClose[15])();
        const callback = react.useCallback((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          return ref2(closure_1_14, obj);
        }, []);
        const items = [tmp6, onClose];
        const callback1 = react.useCallback((arg0) => {
          const obj = { ViewComponent: bottomSheetRef(onClose[17]), pressBehavior: "collapse" };
          const BottomSheetBackdrop = animatedIndex(onClose[16]).BottomSheetBackdrop;
          const merged = Object.assign(arg0);
          return ref2(BottomSheetBackdrop, obj);
        }, []);
        const callback2 = react.useCallback((arg0, arg1) => {
          if (closure_4) {
            if (-1 !== arg1) {
              if (onClose != null) {
                tmp10();
              }
            }
          }
          const tmp2 = arg0 !== arg1 && 0 === arg0;
          if (tmp2) {
            const obj = HapticUtils;
            const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
            const obj3 = { action: metroImportDefault.FULLY_EXPANDED };
            const obj2 = AnalyticsUtilsDefault;
            obj2.track(AnalyticEvents.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj3);
          }
        }, items);
        let obj2 = animatedIndex(onClose[21]);
        const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
        const tmp13 = _slicedToArray(obj.useState(false), 2);
        handleHeight = tmp15;
        const first = tmp13[0];
        obj.useRef(null);
        const ref = obj.useRef(false);
        const ref2 = obj.useRef(null);
        const items1 = [isScreenReaderEnabled];
        const callback3 = obj.useCallback((arg0) => {
          if (null != ref2.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref2.current);
            ref2.current = null;
          }
          const tmp4 = arg0;
          if (tmp4) {
            const tmp6 = isScreenReaderEnabled && !ref.current;
            if (tmp6) {
              const _setTimeout = setTimeout;
              ref2.current = setTimeout(() => {
                ref2.current = null;
                closure_1_8.current = true;
                const obj = animatedIndex(onClose[23]);
                const obj2 = { ref };
                const result = obj.setAccessibilityFocus(obj2);
              }, 100);
            }
          } else {
            ref.current = false;
          }
        }, items1);
        const tmp5Result = animatedIndex(tmp3[24]);
        class H {
          constructor() {
            return animatedIndex.get() >= 0;
          }
        }
        H.__closure = { animatedIndex };
        H.__workletHash = 2707510631878;
        H.__initData = __initData4;
        const fn = function w(arg0, arg1) {
          let tmp = IS_IOS && arg0 !== arg1;
          if (tmp) {
            tmp = null != arg1 || arg0;
          }
          if (tmp) {
            const obj = ReanimatedRexport;
            obj.runOnJS(callback3)(arg0);
          }
        };
        let obj3 = { IS_IOS, runOnJS: tmp5(tmp3[24]).runOnJS, handleSheetOpenChange: callback3 };
        fn.__closure = obj3;
        fn.__workletHash = 14150445095159;
        fn.__initData = __initData5;
        const animatedReaction = tmp5Result.useAnimatedReaction(H, fn);
        const tmp5Result2 = animatedIndex(tmp3[24]);
        class J {
          constructor() {
            return Math.max(animatedIndex.get(), 0) > 0;
          }
        }
        J.__closure = { animatedIndex };
        J.__workletHash = 634522091630;
        J.__initData = __initData6;
        class B {
          constructor(arg0, arg1) {
            if (arg0 !== arg1) {
              const obj = ReanimatedRexport;
              obj.runOnJS(closure_6)(arg0);
            }
          }
        }
        B.__closure = { runOnJS: animatedIndex(tmp3[24]).runOnJS, setAccessibilityViewIsModal: tmp13[1] };
        B.__workletHash = 13476860564128;
        B.__initData = __initData7;
        ({ runOnJS: animatedIndex(tmp3[24]).runOnJS, setAccessibilityViewIsModal: tmp13[1] });
        const animatedReaction1 = tmp5Result2.useAnimatedReaction(J, B);
        tmp2(tmp3[25])(() => () => {
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
          let closure_0;
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
              tmp3();
            }
          }
        }, items2);
        ({ left, right } = tmp2(tmp3[26])());
        const obj5 = { gradient: tmp7, children: items3 };
        tmp2(tmp3[26])();
        const ThemeContextProvider = tmp5(tmp3[14]).ThemeContextProvider;
        const obj6 = {
          style: { marginLeft: left, marginRight: right },
          BodyComponent: tmp2(tmp3[17]),
          ref: bottomSheetRef,
          animationConfigs,
          animatedIndex,
          animatedPosition,
          enableContentPanningGesture: tmp26,
          enableHandlePanningGesture: !(isScreenReaderEnabled || tmp6),
          handleComponent,
          backgroundComponent: callback,
          backgroundStyle: tmp.background,
          backdropComponent: callback1,
          onAnimate: callback2,
          handleHeight,
          onClose,
          children: ref2(animatedIndex(tmp3[27]).AccessibilityViewAnimated, obj7),
        };
        tmp26 = !tmp12;
        const tmp23 = callback3;
        const tmp2Result = tmp2(tmp3[16]);
        if (tmp26) {
          tmp26 = !closure_11;
        }
        let merged = Object.assign(tmp4);
        obj7 = {
          ref,
          nativeID: "media-keyboard-sheet",
          onAccessibilityEscape() {
            if (closure_3 != null) {
              tmp();
            }
            const obj = ChatInputUtils;
            obj.dismissKeyboard();
          },
          accessibilityViewIsModal: first,
          children,
        };
        items3 = [ref2(tmp2Result, obj6), accessoriesComponent(tmp4), overlayComponent];
        return tmp23(ThemeContextProvider, obj5);
      },
);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx");

export default memoResult;
