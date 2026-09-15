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
import BottomSheetModal from "../../../../_runtime/06732_BottomSheetModal.js";
import completeAppLauncherOnboardingDefault from "onboarding/utils/completeAppLauncherOnboarding.tsx";
import AppLauncherOnboardingLayerDefault from "onboarding/banner/AppLauncherOnboardingLayer.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const KEYBOARD_ANIMATION_CONFIG = fn(12170).KEYBOARD_ANIMATION_CONFIG;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4639);
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
let closure_13 = {
  code: "function AppLauncherKeyboardTsx1(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}",
};
let closure_14 = {
  code: "function AppLauncherKeyboardTsx2(i,prev){const{runOnJS,handleOnboardingParamChange,showOnboarding}=this.__closure;if(i===prev)return;runOnJS(handleOnboardingParamChange)(i,showOnboarding);}",
};
let obj5 = {
  borderWidth: 2,
  borderColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderTopLeftRadius: nativeDefault.radii.sm,
  borderTopRightRadius: nativeDefault.radii.sm,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherKeyboard.tsx");

export default noop.memo(function AppLauncherKeyboard(context) {
  context = context.context;
  const chatInputRef = context.chatInputRef;
  const onClose = context.onClose;
  const transitionState = context.transitionState;
  const entrypoint = context.entrypoint;
  let onboardingNavigatorContent;
  const defaultAppLauncherWidth = context(onClose[8]).useDefaultAppLauncherWidth(entrypoint);
  const ref = transitionState.useRef(context(onClose[9]).AppLauncherKeyboardCloseReason.DISMISSED);
  const ref1 = transitionState.useRef(undefined);
  const tmp6 = onboardingNavigatorContent();
  const tmp8 = chatInputRef(onClose[10])();
  const minimum = tmp8.minimum;
  animationConfigs = transitionState.useRef(Date.now());
  transitionState.useRef(false);
  let obj = context(onClose[8]);
  const tmp7 = chatInputRef;
  let isScreenReaderEnabled = context(onClose[11]).useIsScreenReaderEnabled();
  const visibleContent = chatInputRef(onClose[12])({ channelId: context.channel.id }).visibleContent;
  onboardingNavigatorContent = null != visibleContent;
  let obj2 = context(onClose[11]);
  let obj3 = { channelId: context.channel.id };
  const sharedValue = context(onClose[13]).useSharedValue(-1);
  let obj4 = context(onClose[13]);
  const sharedValue1 = context(onClose[13]).useSharedValue(0);
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
      chatInputRef(onClose[14])(minimum.TAKE_ACTION);
    }
  }, []);
  const items1 = [onboardingNavigatorContent, sharedValue, callback1];
  const effect = transitionState.useEffect(() => {
    callback1(sharedValue.get(), onboardingNavigatorContent);
  }, items1);
  let obj5 = context(onClose[13]);
  class O {
    constructor() {
      return closure_12.get();
    }
  }
  O.__closure = { bottomSheetIndex: sharedValue };
  O.__workletHash = 15587451723262;
  O.__initData = ref2;
  const fn = function _(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(callback1)(arg0, onboardingNavigatorContent);
    }
  };
  let obj6 = context(onClose[13]);
  fn.__closure = {
    runOnJS: context(onClose[13]).runOnJS,
    handleOnboardingParamChange: callback1,
    showOnboarding: onboardingNavigatorContent,
  };
  fn.__workletHash = 14003176039781;
  fn.__initData = callback1;
  const animatedReaction = obj6.useAnimatedReaction(O, fn);
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
    const children = [React6(BottomSheetModal.BottomSheetBackdrop, obj)];
    let tmp3Result = onboardingNavigatorContent;
    if (onboardingNavigatorContent) {
      const obj2 = { context, visibleContent, bottomOffset: null };
      const tmp9 = AppLauncherOnboardingLayerDefault;
      let num = 0;
      if (!tmp4Result.isAndroid()) {
        num = minimum;
      }
      obj2.bottomOffset = num;
      tmp3Result = React6(tmp9, obj2);
      tmp4Result = PlatformUtils;
    }
    children[1] = tmp3Result;
    return closure_2_10(React7, { children });
  }, items3);
  const items5 = [chatInputRef, isScreenReaderEnabled, ref, onClose];
  const callback3 = transitionState.useCallback((arg0, arg1, arg2) => {
    if (1 !== arg0) {
      if (1 === arg1) {
        let trackWithMetadata = require;
        let APP_LAUNCHER_EXPANDED = dependencyMap;
        if (arg2 === BottomSheetModal.ANIMATION_SOURCE.KEYBOARD) {
          let current = trackWithMetadata(11353).AppLauncherBottomSheetExpandReason.KEYBOARD;
        } else if (arg2 === trackWithMetadata(6732).ANIMATION_SOURCE.GESTURE) {
          current = trackWithMetadata(11353).AppLauncherBottomSheetExpandReason.GESTURE;
        } else if (arg2 !== trackWithMetadata(6732).ANIMATION_SOURCE.USER) {
          current = trackWithMetadata(11353).AppLauncherBottomSheetExpandReason.OTHER;
        } else {
          current = ref1.current;
        }
        trackWithMetadata = trackWithMetadata(4819).trackWithMetadata;
        APP_LAUNCHER_EXPANDED = AnalyticEvents.APP_LAUNCHER_EXPANDED;
        const obj = { reason: current };
        trackWithMetadata(APP_LAUNCHER_EXPANDED, obj);
        ref1.current = undefined;
        const trackWithMetadataResult = trackWithMetadata(4819);
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
    runOnJS: context(onClose[13]).runOnJS,
    handleOnboardingParamChange: callback1,
    showOnboarding: onboardingNavigatorContent,
  };
  if (!isScreenReaderEnabled) {
    isScreenReaderEnabled = tmp(tmp2[20]).isMetaQuest();
    const tmpResult = tmp(tmp2[20]);
  }
  obj8.forceMaxHeight = isScreenReaderEnabled;
  const tmp22 = chatInputRef(onClose[24]);
  obj8.enablePanDownToClose = context(onClose[20]).isMetaQuest();
  obj8.onAnimate = callback3;
  obj8.onClose = callback4;
  obj8.transitionState = transitionState;
  obj8.backdropComponent = callback2;
  let tmp23 = onboardingNavigatorContent;
  if (!onboardingNavigatorContent) {
    tmp23 = entrypoint === tmp(tmp2[25]).AppLauncherEntrypoint.VOICE;
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
  obj8.rendersHandle = entrypoint !== context(onClose[25]).AppLauncherEntrypoint.VOICE;
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
  const tmpResult2 = context(onClose[20]);
  if (onboardingNavigatorContent) {
    onboardingNavigatorContent = tmp6.onboardingNavigatorContent;
  }
  obj10.contentStyle = onboardingNavigatorContent;
  obj10.entrypoint = entrypoint;
  obj10.expandBottomSheet = callback;
  obj10.keyboardCloseReasonRef = ref;
  obj10.width = defaultAppLauncherWidth;
  obj9.children = ref2(tmp7(onClose[26]), obj10);
  obj8.children = ref2(tmp24, obj9);
  return ref2(tmp22, obj8);
});
export function setAppLauncherA11yFocusReturnRef(current2) {
  c12 = current2;
}
