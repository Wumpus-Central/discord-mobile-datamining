// discord_app/modules/app_launcher/native/AppLauncherKeyboard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import KeyboardUIStore from "../../keyboard/native/KeyboardUIStore.native.tsx";
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import setAccessibilityFocus from "../../a11y/native/setAccessibilityFocus.android.tsx";
import BottomSheetModal from "../../../../_runtime/06298_BottomSheetModal.js";
import completeAppLauncherOnboardingDefault from "onboarding/utils/completeAppLauncherOnboarding.tsx";
import AppLauncherOnboardingLayerDefault from "onboarding/banner/AppLauncherOnboardingLayer.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const KEYBOARD_ANIMATION_CONFIG = fn(11729).KEYBOARD_ANIMATION_CONFIG;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5090);
let obj = {
  onboardingRoundingView: { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm },
  onboardingHeader: null,
  onboardingNavigatorContent: null,
};
let obj3 = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
obj.onboardingHeader = {
  borderWidth: 2,
  borderBottomWidth: 0,
  borderColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderBottomColor: "transparent",
  borderTopLeftRadius: nativeDefault.radii.sm,
  borderTopRightRadius: nativeDefault.radii.sm,
};
let obj4 = {
  borderWidth: 2,
  borderBottomWidth: 0,
  borderColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderBottomColor: "transparent",
  borderTopLeftRadius: nativeDefault.radii.sm,
  borderTopRightRadius: nativeDefault.radii.sm,
};
obj.onboardingNavigatorContent = {
  borderWidth: 2,
  borderColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderTopLeftRadius: nativeDefault.radii.sm,
  borderTopRightRadius: nativeDefault.radii.sm,
};
let closure_11 = createStyles.createStyles(obj);
let c12 = null;
let __initData = {
  code: "function AppLauncherKeyboardTsx2(i,prev){const{runOnJS,handleOnboardingParamChange,showOnboarding}=this.__closure;if(i===prev){return;}runOnJS(handleOnboardingParamChange)(i,showOnboarding);}",
};
const __initData2 = {
  code: "function AppLauncherKeyboardTsx3(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}",
};
const __initData3 = {
  code: "function AppLauncherKeyboardTsx4(i,prev){const{runOnJS,handleOnboardingParamChange,showOnboarding}=this.__closure;if(i===prev)return;runOnJS(handleOnboardingParamChange)(i,showOnboarding);}",
};
const ReactCompilerGating = fn(558);
let obj5 = {
  borderWidth: 2,
  borderColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderTopLeftRadius: nativeDefault.radii.sm,
  borderTopRightRadius: nativeDefault.radii.sm,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherKeyboard.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function AppLauncherKeyboard(context) {
        const cResult = context(onClose[9]).c(52);
        context = context.context;
        const chatInputRef = context.chatInputRef;
        onClose = context.onClose;
        const transitionState = context.transitionState;
        let obj = context(onClose[9]);
        const defaultAppLauncherWidth = context(onClose[10]).useDefaultAppLauncherWidth(context.entrypoint);
        transitionState.useRef(context(onClose[11]).AppLauncherKeyboardCloseReason.DISMISSED);
        transitionState.useRef(undefined);
        closure_11();
        let obj2 = context(onClose[10]);
        const tmp8 = chatInputRef;
        ({ maximum, minimum } = chatInputRef(onClose[12])());
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let _Date = Date;
          const timestamp = Date.now();
          cResult[0] = timestamp;
          let first = timestamp;
        } else {
          first = cResult[0];
        }
        transitionState.useRef(first);
        let ref2 = obj3.useRef(false);
        let tmp9 = chatInputRef(onClose[12])();
        const isScreenReaderEnabled = context(onClose[13]).useIsScreenReaderEnabled();
        if (cResult[1] !== context.channel.id) {
          let obj4 = { channelId: context.channel.id };
          cResult[1] = context.channel.id;
          cResult[2] = obj4;
          let tmp13 = obj4;
        } else {
          tmp13 = cResult[2];
        }
        const visibleContent = tmp8(tmp2[14])(tmp13).visibleContent;
        closure_11 = tmp14;
        const tmpResult = context(onClose[13]);
        const sharedValue = context(onClose[15]).useSharedValue(-1);
        const tmpResult4 = context(onClose[15]);
        const sharedValue1 = context(onClose[15]).useSharedValue(0);
        ref2 = obj3.useRef(null);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor() {
              if (closure_13 != null) {
                current = closure_13.current;
                if (current != null) {
                  expandActionSheetResult = current.expandActionSheet();
                }
              }
              return;
            }
          }
          cResult[3] = P;
        } else {
          class P {
            constructor() {
              if (closure_13 != null) {
                current = closure_13.current;
                if (current != null) {
                  expandActionSheetResult = current.expandActionSheet();
                }
              }
              return;
            }
          }
        }
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          class W {
            constructor(arg0, arg1) {
              tmp = arg1;
              if (arg1) {
                tmp2 = context;
                num = 1;
                tmp = 1 === context;
              }
              if (tmp) {
                tmp3 = chatInputRef;
                tmp4 = onClose;
                tmp5 = minimum;
                tmp6 = chatInputRef(onClose[16])(minimum.TAKE_ACTION);
              }
              return;
            }
          }
          cResult[4] = W;
        } else {
          class W {
            constructor(arg0, arg1) {
              tmp = arg1;
              if (arg1) {
                tmp2 = context;
                num = 1;
                tmp = 1 === context;
              }
              if (tmp) {
                tmp3 = chatInputRef;
                tmp4 = onClose;
                tmp5 = minimum;
                tmp6 = chatInputRef(onClose[16])(minimum.TAKE_ACTION);
              }
              return;
            }
          }
        }
        __initData = W;
        if (cResult[5] === sharedValue) {
          class W {
            constructor(arg0, arg1) {
              tmp = arg1;
              if (arg1) {
                tmp2 = context;
                num = 1;
                tmp = 1 === context;
              }
              if (tmp) {
                tmp3 = chatInputRef;
                tmp4 = onClose;
                tmp5 = minimum;
                tmp6 = chatInputRef(onClose[16])(minimum.TAKE_ACTION);
              }
              return;
            }
          }
          const effect = obj3.useEffect(F, items1);
          const fn = function j() {
            return sharedValue.get();
          };
          let obj5 = { bottomSheetIndex: sharedValue };
          fn.__closure = obj5;
          fn.__workletHash = 15587451723262;
          fn.__initData = ref2;
          class Q {
            constructor(arg0, arg1) {
              if (context !== arg1) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[15]);
                tmp3 = closure_14;
                tmp4 = closure_11;
                tmp5 = obj.runOnJS(closure_14)(context, closure_11);
              }
              return;
            }
          }
          let obj6 = { runOnJS: tmp(tmp2[15]).runOnJS, handleOnboardingParamChange: W, showOnboarding: tmp14 };
          Q.__closure = obj6;
          Q.__workletHash = 12446570101635;
          Q.__initData = __initData;
          const animatedReaction = tmp(tmp2[15]).useAnimatedReaction(fn, Q);
          if (cResult[9] !== transitionState) {
            class X {
              constructor() {
                tmp = closure_2;
                if (transitionState === closure_0(closure_2[17]).TransitionStates.YEETED) {
                  tmp2 = closure_1;
                  tmp3 = ContentDismissActionType;
                  tmp4 = closure_1(tmp[16])(ContentDismissActionType.USER_DISMISS);
                }
                return;
              }
            }
            const items = [transitionState];
            cResult[9] = transitionState;
            cResult[10] = X;
            cResult[11] = items;
            let tmp25 = items;
          } else {
            class X {
              constructor() {
                tmp = closure_2;
                if (transitionState === closure_0(closure_2[17]).TransitionStates.YEETED) {
                  tmp2 = closure_1;
                  tmp3 = ContentDismissActionType;
                  tmp4 = closure_1(tmp[16])(ContentDismissActionType.USER_DISMISS);
                }
                return;
              }
            }
            tmp25 = cResult[11];
          }
          const layoutEffect = obj3.useLayoutEffect(X, tmp25);
          if (cResult[12] === visibleContent) {
            class X {
              constructor() {
                tmp = closure_2;
                if (transitionState === closure_0(closure_2[17]).TransitionStates.YEETED) {
                  tmp2 = closure_1;
                  tmp3 = ContentDismissActionType;
                  tmp4 = closure_1(tmp[16])(ContentDismissActionType.USER_DISMISS);
                }
                return;
              }
            }
          }
          const fn2 = function z(arg0) {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.pressBehavior = "collapse";
            const children = [closure_2_8(BottomSheetModal.BottomSheetBackdrop, obj)];
            let tmp3Result = closure_11;
            if (closure_11) {
              const obj2 = { context, visibleContent, bottomOffset: null };
              const tmp9 = AppLauncherOnboardingLayerDefault;
              let num = 0;
              if (!tmp4Result.isAndroid()) {
                num = minimum;
              }
              obj2.bottomOffset = num;
              tmp3Result = closure_2_8(tmp9, obj2);
              tmp4Result = PlatformUtils;
            }
            children[1] = tmp3Result;
            return collapsed(options, { children });
          };
          cResult[12] = visibleContent;
          cResult[13] = context;
          cResult[14] = minimum;
          cResult[15] = tmp14;
          cResult[16] = fn2;
          const tmpResult6 = tmp(tmp2[15]);
        }
        class F {
          constructor() {
            tmp = closure_14(closure_12.get(), closure_11);
            return;
          }
        }
        items1 = [null != visibleContent, sharedValue, W];
        cResult[5] = sharedValue;
        cResult[6] = null != visibleContent;
        cResult[7] = F;
        cResult[8] = items1;
        const tmpResult5 = context(onClose[15]);
      }
    : function AppLauncherKeyboard(context) {
        context = context.context;
        const chatInputRef = context.chatInputRef;
        const onClose = context.onClose;
        const transitionState = context.transitionState;
        const entrypoint = context.entrypoint;
        let onboardingNavigatorContent;
        const defaultAppLauncherWidth = context(onClose[10]).useDefaultAppLauncherWidth(entrypoint);
        ref = transitionState.useRef(context(onClose[11]).AppLauncherKeyboardCloseReason.DISMISSED);
        const ref1 = transitionState.useRef(undefined);
        const tmp6 = onboardingNavigatorContent();
        const tmp8 = chatInputRef(onClose[12])();
        const minimum = tmp8.minimum;
        animationConfigs = transitionState.useRef(Date.now());
        transitionState.useRef(false);
        let obj = context(onClose[10]);
        const tmp7 = chatInputRef;
        let isScreenReaderEnabled = context(onClose[13]).useIsScreenReaderEnabled();
        const visibleContent = chatInputRef(onClose[14])({ channelId: context.channel.id }).visibleContent;
        onboardingNavigatorContent = null != visibleContent;
        let obj2 = context(onClose[13]);
        let obj3 = { channelId: context.channel.id };
        const sharedValue = context(onClose[15]).useSharedValue(-1);
        let obj4 = context(onClose[15]);
        const sharedValue1 = context(onClose[15]).useSharedValue(0);
        const ref2 = transitionState.useRef(null);
        const items = [ref2];
        const callback = transitionState.useCallback(() => {
          if (ref2 != null) {
            const current = ref2.current;
            if (current != null) {
              current.expandActionSheet();
            }
          }
        }, items);
        const callback1 = transitionState.useCallback((arg0, arg1) => {
          let tmp = arg1;
          if (arg1) {
            tmp = 1 === arg0;
          }
          if (tmp) {
            chatInputRef(onClose[16])(minimum.TAKE_ACTION);
          }
        }, []);
        const items1 = [onboardingNavigatorContent, sharedValue, callback1];
        const effect = transitionState.useEffect(() => {
          callback1(sharedValue.get(), onboardingNavigatorContent);
        }, items1);
        let obj5 = context(onClose[15]);
        const fn = function y() {
          return sharedValue.get();
        };
        fn.__closure = { bottomSheetIndex: sharedValue };
        fn.__workletHash = 9724245552188;
        fn.__initData = __initData2;
        class C {
          constructor(arg0, arg1) {
            if (context !== arg1) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[15]);
              tmp3 = closure_14;
              tmp4 = closure_11;
              tmp5 = obj.runOnJS(closure_14)(context, closure_11);
            }
            return;
          }
        }
        let obj6 = context(onClose[15]);
        C.__closure = {
          runOnJS: context(onClose[15]).runOnJS,
          handleOnboardingParamChange: callback1,
          showOnboarding: onboardingNavigatorContent,
        };
        C.__workletHash = 10242116658851;
        C.__initData = __initData3;
        const animatedReaction = obj6.useAnimatedReaction(fn, C);
        const items2 = [transitionState];
        const layoutEffect = transitionState.useLayoutEffect(() => {
          if (transitionState === native.TransitionStates.YEETED) {
            completeAppLauncherOnboardingDefault(ContentDismissActionType.USER_DISMISS);
          }
        }, items2);
        const items3 = [visibleContent, context, minimum, onboardingNavigatorContent];
        const items4 = [ref1];
        const callback2 = transitionState.useCallback((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.pressBehavior = "collapse";
          const children = [closure_2_8(BottomSheetModal.BottomSheetBackdrop, obj)];
          let tmp3Result = onboardingNavigatorContent;
          if (onboardingNavigatorContent) {
            const obj2 = { context, visibleContent, bottomOffset: null };
            const tmp9 = AppLauncherOnboardingLayerDefault;
            let num = 0;
            if (!tmp4Result.isAndroid()) {
              num = minimum;
            }
            obj2.bottomOffset = num;
            tmp3Result = closure_2_8(tmp9, obj2);
            tmp4Result = PlatformUtils;
          }
          children[1] = tmp3Result;
          return collapsed(options, { children });
        }, items3);
        const items5 = [chatInputRef, isScreenReaderEnabled, ref, onClose];
        const callback3 = transitionState.useCallback((arg0, arg1, arg2) => {
          if (1 !== arg0) {
            if (1 === arg1) {
              let trackWithMetadata = require;
              let APP_LAUNCHER_EXPANDED = dependencyMap;
              if (arg2 === BottomSheetModal.ANIMATION_SOURCE.KEYBOARD) {
                let current = trackWithMetadata(11232).AppLauncherBottomSheetExpandReason.KEYBOARD;
              } else if (arg2 === trackWithMetadata(6298).ANIMATION_SOURCE.GESTURE) {
                current = trackWithMetadata(11232).AppLauncherBottomSheetExpandReason.GESTURE;
              } else if (arg2 !== trackWithMetadata(6298).ANIMATION_SOURCE.USER) {
                current = trackWithMetadata(11232).AppLauncherBottomSheetExpandReason.OTHER;
              } else {
                current = ref1.current;
              }
              trackWithMetadata = trackWithMetadata(5105).trackWithMetadata;
              APP_LAUNCHER_EXPANDED = AnalyticEvents.APP_LAUNCHER_EXPANDED;
              const obj = { reason: current };
              trackWithMetadata(APP_LAUNCHER_EXPANDED, obj);
              ref1.current = undefined;
              const trackWithMetadataResult = trackWithMetadata(5105);
            }
          }
        }, items4);
        const callback4 = transitionState.useCallback(() => {
          if (!ref2.current) {
            const obj2 = { time_spent: null, reason: null };
            const _Date = Date;
            obj2.time_spent = Date.now() - ref.current;
            obj2.reason = ref.current;
            AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_CLOSED, obj2);
          }
          ref2.current = true;
          completeAppLauncherOnboardingDefault(ContentDismissActionType.USER_DISMISS);
          if (onClose != null) {
            onClose();
          }
          if (obj3.isMetaQuest()) {
            const current = chatInputRef.current;
            if (current != null) {
              current.closeCustomKeyboard();
            }
          }
          if (isScreenReaderEnabled) {
            const obj5 = { type: KeyboardTypes.KeyboardTypes.SYSTEM };
            KeyboardUIStore.setKeyboardType(obj5);
            let current1;
            if (ref3 != null) {
              current1 = ref3.current;
            }
            if (null != current1) {
              const obj7 = { ref: ref3 };
              const result = setAccessibilityFocus.setAccessibilityFocus(obj7);
            }
          }
          obj3 = MetaQuestUtils;
        }, items5);
        const obj8 = {
          ref: ref2,
          animationConfigs,
          animatedIndex: sharedValue,
          animatedPosition: sharedValue1,
          chatInputRef,
          forceMaxHeight: null,
          enablePanDownToClose: null,
          onAnimate: null,
          onClose: null,
          transitionState: null,
          backdropComponent: null,
          disableHeaderRoundingAnimation: null,
          roundingViewStyle: null,
          headerStyle: null,
          isAppsKeyboard: true,
          rendersHandle: null,
          width: null,
          children: null,
        };
        let obj7 = {
          runOnJS: context(onClose[15]).runOnJS,
          handleOnboardingParamChange: callback1,
          showOnboarding: onboardingNavigatorContent,
        };
        if (!isScreenReaderEnabled) {
          isScreenReaderEnabled = tmp(tmp2[22]).isMetaQuest();
          const tmpResult = tmp(tmp2[22]);
        }
        obj8.forceMaxHeight = isScreenReaderEnabled;
        const tmp22 = chatInputRef(onClose[28]);
        obj8.enablePanDownToClose = context(onClose[22]).isMetaQuest();
        obj8.onAnimate = callback3;
        obj8.onClose = callback4;
        obj8.transitionState = transitionState;
        obj8.backdropComponent = callback2;
        let tmp23 = onboardingNavigatorContent;
        if (!onboardingNavigatorContent) {
          tmp23 = entrypoint === tmp(tmp2[26]).AppLauncherEntrypoint.VOICE;
        }
        obj8.disableHeaderRoundingAnimation = tmp23;
        let onboardingRoundingView = onboardingNavigatorContent;
        if (onboardingNavigatorContent) {
          onboardingRoundingView = tmp6.onboardingRoundingView;
        }
        obj8.roundingViewStyle = onboardingRoundingView;
        let onboardingHeader = onboardingNavigatorContent;
        if (onboardingNavigatorContent) {
          onboardingHeader = tmp6.onboardingHeader;
        }
        obj8.headerStyle = onboardingHeader;
        obj8.rendersHandle = entrypoint !== context(onClose[26]).AppLauncherEntrypoint.VOICE;
        obj8.width = defaultAppLauncherWidth;
        const obj9 = { style: { position: "relative", height: tmp8.maximum }, children: null };
        const obj10 = {
          bottomSheetExpandReasonRef: ref1,
          bottomSheetIndex: sharedValue,
          bottomSheetPosition: sharedValue1,
          context,
          chatInputRef,
          contentStyle: null,
          entrypoint: null,
          expandBottomSheet: null,
          keyboardCloseReasonRef: null,
          width: null,
        };
        const tmp24 = ref;
        const tmpResult2 = context(onClose[22]);
        if (onboardingNavigatorContent) {
          onboardingNavigatorContent = tmp6.onboardingNavigatorContent;
        }
        obj10.contentStyle = onboardingNavigatorContent;
        obj10.entrypoint = entrypoint;
        obj10.expandBottomSheet = callback;
        obj10.keyboardCloseReasonRef = ref;
        obj10.width = defaultAppLauncherWidth;
        obj9.children = ref2(tmp7(onClose[27]), obj10);
        obj8.children = ref2(tmp24, obj9);
        return ref2(tmp22, obj8);
      },
);
export function setAppLauncherA11yFocusReturnRef(current2) {
  c12 = current2;
}
