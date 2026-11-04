// === Module 12581: AppLauncherKeyboard ===

// Module 12581 (AppLauncherKeyboard)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1497 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import KeyboardTypes from "KeyboardTypes" /* 1625 */;
import native from "native" /* 5207 */;
import BottomSheetModal from "BottomSheetModal" /* 5400 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5894 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 6156 */;
import useKeyboardActionSheetHeightDefault from "useKeyboardActionSheetHeight" /* 11435 */;
import useAppLauncherOnboardingContentDefault from "useAppLauncherOnboardingContent" /* 12583 */;
import completeAppLauncherOnboardingDefault from "completeAppLauncherOnboarding" /* 12592 */;
import AppLauncherOnboardingLayerDefault from "AppLauncherOnboardingLayer" /* 12593 */;
import PortalKeyboardBottomSheetDefault from "PortalKeyboardBottomSheet" /* 12624 */;
import AppLauncherNavigatorDefault from "AppLauncherNavigator" /* 12627 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1072).AnalyticEvents;
const ContentDismissActionType = fn(4987).ContentDismissActionType;
const KEYBOARD_ANIMATION_CONFIG = fn(12582).KEYBOARD_ANIMATION_CONFIG;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5141);
let obj = { onboardingRoundingView: { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm }, onboardingHeader: null, onboardingNavigatorContent: null };
let obj3 = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
obj.onboardingHeader = { borderWidth: 2, borderBottomWidth: 0, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderBottomColor: "transparent", borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
let obj4 = { borderWidth: 2, borderBottomWidth: 0, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderBottomColor: "transparent", borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
obj.onboardingNavigatorContent = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
let closure_11 = createStyles.createStyles(obj);
let c12 = null;
let closure_13 = { code: "(function AppLauncherKeyboardTsx1(){let[bottomSheetIndex]=this.__closure;return bottomSheetIndex.get();})" };
let closure_14 = { code: "(function AppLauncherKeyboardTsx2(i,prev){let[scheduleOnRN,handleOnboardingParamChange,showOnboarding]=this.__closure;if(i===prev)return;scheduleOnRN(handleOnboardingParamChange,i,showOnboarding);})" };
let obj5 = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherKeyboard.tsx");

export default noop.memo(function AppLauncherKeyboard(context) {
  context = context.context;
  _require = context;
  const chatInputRef = context.chatInputRef;
  importDefault = chatInputRef;
  const onClose = context.onClose;
  dependencyMap = onClose;
  const transitionState = context.transitionState;
  const entrypoint = context.entrypoint;
  let onboardingNavigatorContent;
  const defaultAppLauncherWidth = require("useDefaultAppLauncherWidth").useDefaultAppLauncherWidth(entrypoint);
  const ref = transitionState.useRef(require("AppLauncherContext").AppLauncherKeyboardCloseReason.DISMISSED);
  const ref1 = transitionState.useRef(undefined);
  const tmp6 = onboardingNavigatorContent();
  const tmp8 = useKeyboardActionSheetHeightDefault();
  const minimum = tmp8.minimum;
  animationConfigs = transitionState.useRef(Date.now());
  transitionState.useRef(false);
  let obj = require("useDefaultAppLauncherWidth");
  let isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  const visibleContent = useAppLauncherOnboardingContentDefault({ channelId: context.channel.id }).visibleContent;
  onboardingNavigatorContent = null != visibleContent;
  let obj3 = require("useIsScreenReaderEnabled");
  let obj4 = { channelId: context.channel.id };
  const sharedValue = require("module_1652").useSharedValue(-1);
  let obj5 = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(0);
  const ref2 = transitionState.useRef(null);
  items = [ref2];
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
      _undefined(_undefined2[14])(minimum.TAKE_ACTION);
    }
  }, []);
  const items1 = [onboardingNavigatorContent, sharedValue, callback1];
  const effect = transitionState.useEffect(() => {
    callback1(sharedValue.get(), onboardingNavigatorContent);
  }, items1);
  let obj6 = require("module_1652");
  const items2 = [ref2, sharedValue];
  _require = undefined;
  [tmp16, tmp17] = items2;
  class AppLauncherKeyboardTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items3 = [tmp17];
  AppLauncherKeyboardTsx1.__closure = items3;
  AppLauncherKeyboardTsx1.__workletHash = 14642690748519;
  AppLauncherKeyboardTsx1.__initData = tmp16;
  const items4 = [callback1, require("module_1705").scheduleOnRN, callback1, onboardingNavigatorContent];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp18, tmp19, tmp20, tmp21] = items4;
  class AppLauncherKeyboardTsx2 {
    constructor(arg0, arg1) {
      if (context !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp4 = closure_0(closure_1, context, closure_2);
      }
      return;
    }
  }
  const items5 = [tmp19, tmp20, tmp21];
  AppLauncherKeyboardTsx2.__closure = items5;
  AppLauncherKeyboardTsx2.__workletHash = 335137472657;
  AppLauncherKeyboardTsx2.__initData = tmp18;
  const animatedReaction = require("module_1652").useAnimatedReaction(AppLauncherKeyboardTsx1, AppLauncherKeyboardTsx2);
  const items6 = [transitionState];
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      completeAppLauncherOnboardingDefault(ContentDismissActionType.USER_DISMISS);
    }
  }, items6);
  const items7 = [visibleContent, context, minimum, onboardingNavigatorContent];
  const items8 = [ref1];
  const callback2 = obj2.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.pressBehavior = "collapse";
    const children = [React5(BottomSheetModal.BottomSheetBackdrop, obj), ];
    let tmp3Result = onboardingNavigatorContent;
    if (onboardingNavigatorContent) {
      const obj2 = { context, visibleContent, bottomOffset: null };
      const tmp9 = AppLauncherOnboardingLayerDefault;
      let num = 0;
      if (!tmp4Result.isAndroid()) {
        num = minimum;
      }
      obj2.bottomOffset = num;
      tmp3Result = React5(tmp9, obj2);
      tmp4Result = PlatformUtils;
    }
    children[1] = tmp3Result;
    return closure_2_10(React6, { children });
  }, items7);
  const items9 = [chatInputRef, isScreenReaderEnabled, ref, onClose];
  const callback3 = obj2.useCallback((arg0, arg1, arg2) => {
    if (1 !== arg0) {
      if (1 === arg1) {
        let trackWithMetadata = require;
        let APP_LAUNCHER_EXPANDED = dependencyMap;
        if (arg2 === BottomSheetModal.ANIMATION_SOURCE.KEYBOARD) {
          let current = trackWithMetadata(11690).AppLauncherBottomSheetExpandReason.KEYBOARD;
        } else if (arg2 === trackWithMetadata(5400).ANIMATION_SOURCE.GESTURE) {
          current = trackWithMetadata(11690).AppLauncherBottomSheetExpandReason.GESTURE;
        } else if (arg2 !== trackWithMetadata(5400).ANIMATION_SOURCE.USER) {
          current = trackWithMetadata(11690).AppLauncherBottomSheetExpandReason.OTHER;
        } else {
          current = ref1.current;
        }
        trackWithMetadata = trackWithMetadata(5894).trackWithMetadata;
        APP_LAUNCHER_EXPANDED = AnalyticEvents.APP_LAUNCHER_EXPANDED;
        const obj = { reason: current };
        trackWithMetadata(APP_LAUNCHER_EXPANDED, obj);
        ref1.current = undefined;
        const trackWithMetadataResult = trackWithMetadata(5894);
      }
    }
  }, items8);
  const callback4 = obj2.useCallback(() => {
    if (!ref2.current) {
      const obj2 = { time_spent: null, reason: null };
      const _Date = Date;
      obj2.time_spent = Date.now() - ref.current;
      obj2.reason = ref.current;
      AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_CLOSED, obj2);
    }
    ref2.current = true;
    completeAppLauncherOnboardingDefault(ContentDismissActionType.USER_DISMISS);
    if (_undefined2 != null) {
      _undefined2();
    }
    if (obj3.isMetaQuest()) {
      const current = _undefined.current;
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
  }, items9);
  const obj8 = { ref: ref2, animationConfigs, animatedIndex: sharedValue, animatedPosition: sharedValue1, chatInputRef, forceMaxHeight: null, enablePanDownToClose: null, onAnimate: null, onClose: null, transitionState: null, backdropComponent: null, disableHeaderRoundingAnimation: null, roundingViewStyle: null, headerStyle: null, isAppsKeyboard: true, rendersHandle: null, width: null, children: null };
  let obj7 = require("module_1652");
  if (!isScreenReaderEnabled) {
    isScreenReaderEnabled = tmp(1624).isMetaQuest();
    const tmpResult = tmp(1624);
  }
  obj8.forceMaxHeight = isScreenReaderEnabled;
  const tmp7Result = PortalKeyboardBottomSheetDefault;
  obj8.enablePanDownToClose = require("MetaQuestUtils").isMetaQuest();
  obj8.onAnimate = callback3;
  obj8.onClose = callback4;
  obj8.transitionState = transitionState;
  obj8.backdropComponent = callback2;
  let tmp29 = onboardingNavigatorContent;
  if (!onboardingNavigatorContent) {
    tmp29 = entrypoint === tmp(11691).AppLauncherEntrypoint.VOICE;
  }
  obj8.disableHeaderRoundingAnimation = tmp29;
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
  obj8.rendersHandle = entrypoint !== require("AppLauncherTypes").AppLauncherEntrypoint.VOICE;
  obj8.width = defaultAppLauncherWidth;
  const obj9 = { style: { position: "relative", height: tmp8.maximum }, children: null };
  const obj10 = { bottomSheetExpandReasonRef: ref1, bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, context, chatInputRef, contentStyle: null, entrypoint: null, expandBottomSheet: null, keyboardCloseReasonRef: null, width: null };
  const tmp30 = ref;
  const tmpResult2 = require("MetaQuestUtils");
  if (onboardingNavigatorContent) {
    onboardingNavigatorContent = tmp6.onboardingNavigatorContent;
  }
  obj10.contentStyle = onboardingNavigatorContent;
  obj10.entrypoint = entrypoint;
  obj10.expandBottomSheet = callback;
  obj10.keyboardCloseReasonRef = ref;
  obj10.width = defaultAppLauncherWidth;
  obj9.children = ref2(AppLauncherNavigatorDefault, obj10);
  obj8.children = ref2(tmp30, obj9);
  return ref2(tmp7Result, obj8);
});
export function setAppLauncherA11yFocusReturnRef(current2) {
  c12 = current2;
}