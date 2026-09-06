// === Module 12035: AppLauncherKeyboard ===

// Module 12035 (AppLauncherKeyboard)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1481 */;
import KeyboardTypes from "KeyboardTypes" /* 1609 */;
import native from "native" /* 4271 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 4971 */;
import BottomSheetModal from "BottomSheetModal" /* 6627 */;
import completeAppLauncherOnboardingDefault from "completeAppLauncherOnboarding" /* 12046 */;
import AppLauncherOnboardingLayerDefault from "AppLauncherOnboardingLayer" /* 12047 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const KEYBOARD_ANIMATION_CONFIG = fn(12036).KEYBOARD_ANIMATION_CONFIG;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let obj = { onboardingRoundingView: null, onboardingHeader: null, onboardingNavigatorContent: null };
obj = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
obj.onboardingRoundingView = obj;
const createStyles = { borderWidth: 2, borderBottomWidth: 0, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderBottomColor: "transparent", borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
obj.onboardingHeader = createStyles;
obj.onboardingNavigatorContent = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
let closure_11 = createStyles.createStyles(obj);
let c12 = null;
let closure_13 = { code: "function AppLauncherKeyboardTsx1(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}" };
let closure_14 = { code: "function AppLauncherKeyboardTsx2(i,prev){const{runOnJS,handleOnboardingParamChange,showOnboarding}=this.__closure;if(i===prev)return;runOnJS(handleOnboardingParamChange)(i,showOnboarding);}" };
let obj2 = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherKeyboard.tsx");

export default noop.memo(function AppLauncherKeyboard(context) {
  context = context.context;
  const chatInputRef = context.chatInputRef;
  const onClose = context.onClose;
  const transitionState = context.transitionState;
  const entrypoint = context.entrypoint;
  let onboardingNavigatorContent;
  let obj = context(onClose[8]);
  const defaultAppLauncherWidth = obj.useDefaultAppLauncherWidth(entrypoint);
  const ref = transitionState.useRef(context(onClose[9]).AppLauncherKeyboardCloseReason.DISMISSED);
  const ref1 = transitionState.useRef(undefined);
  const tmp6 = onboardingNavigatorContent();
  const tmp8 = chatInputRef(onClose[10])();
  const minimum = tmp8.minimum;
  animationConfigs = transitionState.useRef(Date.now());
  transitionState.useRef(false);
  let obj1 = context(onClose[11]);
  let isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  obj = { channelId: context.channel.id };
  const visibleContent = chatInputRef(onClose[12])(obj).visibleContent;
  onboardingNavigatorContent = null != visibleContent;
  let obj3 = context(onClose[13]);
  const sharedValue = obj3.useSharedValue(-1);
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
  const obj5 = context(onClose[13]);
  const tmp7 = chatInputRef;
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
  obj = { runOnJS: context(onClose[13]).runOnJS, handleOnboardingParamChange: callback1, showOnboarding: onboardingNavigatorContent };
  fn.__closure = obj;
  fn.__workletHash = 14003176039781;
  fn.__initData = callback1;
  const animatedReaction = context(onClose[13]).useAnimatedReaction(O, fn);
  const items2 = [transitionState];
  const layoutEffect = transitionState.useLayoutEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      completeAppLauncherOnboardingDefault(ContentDismissActionType.USER_DISMISS);
    }
  }, items2);
  const items3 = [visibleContent, context, minimum, onboardingNavigatorContent];
  const items4 = [ref1];
  const callback2 = transitionState.useCallback((arg0) => {
    let obj = {};
    const merged = Object.assign(arg0);
    obj.pressBehavior = "collapse";
    const children = [React6(BottomSheetModal.BottomSheetBackdrop, obj), ];
    let tmp3Result = onboardingNavigatorContent;
    if (onboardingNavigatorContent) {
      obj = { context, visibleContent, bottomOffset: null };
      const tmp9 = AppLauncherOnboardingLayerDefault;
      let num = 0;
      if (!tmp4Result.isAndroid()) {
        num = minimum;
      }
      obj.bottomOffset = num;
      tmp3Result = React6(tmp9, obj);
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
          let current = trackWithMetadata(11215).AppLauncherBottomSheetExpandReason.KEYBOARD;
        } else if (arg2 === trackWithMetadata(6627).ANIMATION_SOURCE.GESTURE) {
          current = trackWithMetadata(11215).AppLauncherBottomSheetExpandReason.GESTURE;
        } else if (arg2 !== trackWithMetadata(6627).ANIMATION_SOURCE.USER) {
          current = trackWithMetadata(11215).AppLauncherBottomSheetExpandReason.OTHER;
        } else {
          current = ref1.current;
        }
        trackWithMetadata = trackWithMetadata(4740).trackWithMetadata;
        APP_LAUNCHER_EXPANDED = AnalyticEvents.APP_LAUNCHER_EXPANDED;
        const obj = { reason: current };
        trackWithMetadata(APP_LAUNCHER_EXPANDED, obj);
        ref1.current = undefined;
        const trackWithMetadataResult = trackWithMetadata(4740);
      }
    }
  }, items4);
  const callback4 = transitionState.useCallback(() => {
    if (!ref2.current) {
      let obj = { time_spent: null, reason: null };
      const _Date = Date;
      obj.time_spent = Date.now() - ref.current;
      obj.reason = ref.current;
      obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_CLOSED, obj);
    }
    ref2.current = true;
    completeAppLauncherOnboardingDefault(ContentDismissActionType.USER_DISMISS);
    if (onClose != null) {
      onClose();
    }
    if (obj3.isMetaQuest()) {
      let current = chatInputRef.current;
      if (current != null) {
        current.closeCustomKeyboard();
      }
    }
    if (isScreenReaderEnabled) {
      obj = { type: KeyboardTypes.KeyboardTypes.SYSTEM };
      KeyboardUIStore.setKeyboardType(obj);
      current = undefined;
      if (ref3 != null) {
        current = ref3.current;
      }
      if (null != current) {
        const obj1 = { ref: ref3 };
        const result = setAccessibilityFocus.setAccessibilityFocus(obj1);
      }
    }
  }, items5);
  obj1 = { ref: ref2, animationConfigs, animatedIndex: sharedValue, animatedPosition: sharedValue1, chatInputRef, forceMaxHeight: null, enablePanDownToClose: null, onAnimate: null, onClose: null, transitionState: null, backdropComponent: null, disableHeaderRoundingAnimation: null, roundingViewStyle: null, headerStyle: null, isAppsKeyboard: true, rendersHandle: null, width: null, children: null };
  let obj6 = context(onClose[13]);
  if (!isScreenReaderEnabled) {
    let tmpResult = tmp(tmp2[20]);
    isScreenReaderEnabled = tmpResult.isMetaQuest();
  }
  obj1.forceMaxHeight = isScreenReaderEnabled;
  tmpResult = tmp(tmp2[20]);
  obj1.enablePanDownToClose = tmpResult.isMetaQuest();
  obj1.onAnimate = callback3;
  obj1.onClose = callback4;
  obj1.transitionState = transitionState;
  obj1.backdropComponent = callback2;
  let tmp23 = onboardingNavigatorContent;
  if (!onboardingNavigatorContent) {
    tmp23 = entrypoint === tmp(tmp2[25]).AppLauncherEntrypoint.VOICE;
  }
  obj1.disableHeaderRoundingAnimation = tmp23;
  let onboardingRoundingView = onboardingNavigatorContent;
  if (onboardingNavigatorContent) {
    onboardingRoundingView = tmp6.onboardingRoundingView;
  }
  obj1.roundingViewStyle = onboardingRoundingView;
  let onboardingHeader = onboardingNavigatorContent;
  if (onboardingNavigatorContent) {
    onboardingHeader = tmp6.onboardingHeader;
  }
  obj1.headerStyle = onboardingHeader;
  obj1.rendersHandle = entrypoint !== context(onClose[25]).AppLauncherEntrypoint.VOICE;
  obj1.width = defaultAppLauncherWidth;
  const obj2 = { style: { position: "relative", height: tmp8.maximum }, children: null };
  obj3 = { bottomSheetExpandReasonRef: ref1, bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, context, chatInputRef, contentStyle: null, entrypoint: null, expandBottomSheet: null, keyboardCloseReasonRef: null, width: null };
  const tmp22 = chatInputRef(onClose[24]);
  const tmp24 = ref;
  if (onboardingNavigatorContent) {
    onboardingNavigatorContent = tmp6.onboardingNavigatorContent;
  }
  obj3.contentStyle = onboardingNavigatorContent;
  obj3.entrypoint = entrypoint;
  obj3.expandBottomSheet = callback;
  obj3.keyboardCloseReasonRef = ref;
  obj3.width = defaultAppLauncherWidth;
  obj2.children = ref2(tmp7(onClose[26]), obj3);
  obj1.children = ref2(tmp24, obj2);
  return ref2(tmp22, obj1);
});
export function setAppLauncherA11yFocusReturnRef(current2) {
  c12 = current2;
}