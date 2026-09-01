// discord_app/modules/app_launcher/native/AppLauncherKeyboard.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { AnalyticEvents } from "../../../Constants.tsx";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import { KEYBOARD_ANIMATION_CONFIG } from "../../keyboard/native/PortalKeyboardConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
let obj = { onboardingRoundingView: null, onboardingHeader: null, onboardingNavigatorContent: null };
obj = { borderTopLeftRadius: ThemesDefault.radii.sm, borderTopRightRadius: ThemesDefault.radii.sm };
obj[0] = obj;
createCacheKey = {
  borderWidth: 2,
  borderBottomWidth: 0,
  borderColor: ThemesDefault.colors.BACKGROUND_BRAND,
  borderBottomColor: "transparent",
  borderTopLeftRadius: ThemesDefault.radii.sm,
  borderTopRightRadius: ThemesDefault.radii.sm,
};
obj[1] = createCacheKey;
obj[2] = {
  borderWidth: 2,
  borderColor: ThemesDefault.colors.BACKGROUND_BRAND,
  borderTopLeftRadius: ThemesDefault.radii.sm,
  borderTopRightRadius: ThemesDefault.radii.sm,
};
let closure_11 = createCacheKey.createStyles(obj);
let c12 = null;
let closure_13 = {
  code: "function AppLauncherKeyboardTsx1(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}",
};
let closure_14 = {
  code: "function AppLauncherKeyboardTsx2(i,prev){const{runOnJS,handleOnboardingParamChange,showOnboarding}=this.__closure;if(i===prev)return;runOnJS(handleOnboardingParamChange)(i,showOnboarding);}",
};
let obj2 = {
  borderWidth: 2,
  borderColor: ThemesDefault.colors.BACKGROUND_BRAND,
  borderTopLeftRadius: ThemesDefault.radii.sm,
  borderTopRightRadius: ThemesDefault.radii.sm,
};
const memoResult = importAllResult.memo(function AppLauncherKeyboard(context) {
  context = context.context;
  const chatInputRef = context.chatInputRef;
  const onClose = context.onClose;
  const transitionState = context.transitionState;
  const entrypoint = context.entrypoint;
  let ref;
  let ref1;
  let minimum;
  closure_7 = undefined;
  closure_8 = undefined;
  let isScreenReaderEnabled;
  let visibleContent;
  let onboardingNavigatorContent;
  c12 = undefined;
  let ref2;
  let callback1;
  let obj = context(onClose[8]);
  const defaultAppLauncherWidth = obj.useDefaultAppLauncherWidth(entrypoint);
  ref = transitionState.useRef(context(onClose[9]).AppLauncherKeyboardCloseReason.DISMISSED);
  ref1 = transitionState.useRef(undefined);
  const tmp6 = onboardingNavigatorContent();
  const tmp8 = chatInputRef(onClose[10])();
  minimum = tmp8.minimum;
  closure_7 = transitionState.useRef(Date.now());
  closure_8 = transitionState.useRef(false);
  obj1 = context(onClose[11]);
  isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  obj = { channelId: context.channel.id };
  visibleContent = chatInputRef(onClose[12])(obj).visibleContent;
  onboardingNavigatorContent = null != visibleContent;
  let obj3 = context(onClose[13]);
  const sharedValue = obj3.useSharedValue(-1);
  c12 = sharedValue;
  const sharedValue1 = context(onClose[13]).useSharedValue(0);
  ref2 = transitionState.useRef(null);
  const items = [ref2];
  const callback = transitionState.useCallback(() => {
    if (ref2 != null) {
      const current = ref2.current;
      if (current != null) {
        current.expandActionSheet();
      }
    }
  }, items);
  callback1 = transitionState.useCallback((arg0, arg1) => {
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
    callback1(_null.get(), onboardingNavigatorContent);
  }, items1);
  const obj5 = context(onClose[13]);
  const tmp7 = chatInputRef;
  class O {
    constructor() {
      return c12.get();
    }
  }
  O.__closure = { bottomSheetIndex: sharedValue };
  O.__workletHash = 15587451723262;
  O.__initData = ref2;
  const fn = function _(arg0, arg1) {
    if (arg0 !== arg1) {
      context(onClose[13]).runOnJS(callback1)(arg0, onboardingNavigatorContent);
      const obj = context(onClose[13]);
    }
  };
  obj = {
    runOnJS: context(onClose[13]).runOnJS,
    handleOnboardingParamChange: callback1,
    showOnboarding: onboardingNavigatorContent,
  };
  fn.__closure = obj;
  fn.__workletHash = 14003176039781;
  fn.__initData = callback1;
  const animatedReaction = context(onClose[13]).useAnimatedReaction(O, fn);
  const items2 = [transitionState];
  const layoutEffect = transitionState.useLayoutEffect(() => {
    if (transitionState === context(onClose[15]).TransitionStates.YEETED) {
      chatInputRef(onClose[14])(minimum.USER_DISMISS);
    }
  }, items2);
  const items3 = [visibleContent, context, minimum, onboardingNavigatorContent];
  const items4 = [ref1];
  const callback2 = transitionState.useCallback((arg0) => {
    let obj = {};
    const merged = Object.assign(arg0);
    obj.pressBehavior = "collapse";
    const children = [ref2(context(onClose[16]).BottomSheetBackdrop, obj)];
    let tmp3Result = onboardingNavigatorContent;
    if (onboardingNavigatorContent) {
      obj = { context: null, visibleContent: null, bottomOffset: null };
      obj[0] = context;
      obj[1] = visibleContent;
      const tmp9 = chatInputRef(tmp5[17]);
      let num = 0;
      if (!tmp4Result.isAndroid()) {
        num = minimum;
      }
      obj[2] = num;
      tmp3Result = ref2(tmp9, obj);
      tmp4Result = context(tmp5[18]);
    }
    children[1] = tmp3Result;
    return visibleContent(isScreenReaderEnabled, { children });
  }, items3);
  const items5 = [chatInputRef, isScreenReaderEnabled, ref, onClose];
  const callback3 = transitionState.useCallback((arg0, arg1, arg2) => {
    if (1 !== arg0) {
      if (1 === arg1) {
        let trackWithMetadata = context;
        let APP_LAUNCHER_EXPANDED = onClose;
        if (arg2 === context(onClose[16]).ANIMATION_SOURCE.KEYBOARD) {
          let current = trackWithMetadata(APP_LAUNCHER_EXPANDED[9]).AppLauncherBottomSheetExpandReason.KEYBOARD;
        } else if (arg2 === trackWithMetadata(APP_LAUNCHER_EXPANDED[16]).ANIMATION_SOURCE.GESTURE) {
          current = trackWithMetadata(APP_LAUNCHER_EXPANDED[9]).AppLauncherBottomSheetExpandReason.GESTURE;
        } else if (arg2 !== trackWithMetadata(APP_LAUNCHER_EXPANDED[16]).ANIMATION_SOURCE.USER) {
          current = trackWithMetadata(APP_LAUNCHER_EXPANDED[9]).AppLauncherBottomSheetExpandReason.OTHER;
        } else {
          current = ref1.current;
        }
        trackWithMetadata = trackWithMetadata(APP_LAUNCHER_EXPANDED[19]).trackWithMetadata;
        APP_LAUNCHER_EXPANDED = ref1.APP_LAUNCHER_EXPANDED;
        const obj = { reason: null };
        obj[0] = current;
        trackWithMetadata(APP_LAUNCHER_EXPANDED, obj);
        ref1.current = undefined;
        const trackWithMetadataResult = trackWithMetadata(APP_LAUNCHER_EXPANDED[19]);
      }
    }
  }, items4);
  const callback4 = transitionState.useCallback(() => {
    if (!ref2.current) {
      let obj = context(onClose[19]);
      obj = { time_spent: null, reason: null };
      const _Date = Date;
      obj[0] = Date.now() - ref.current;
      obj[1] = ref.current;
      obj.trackWithMetadata(ref1.APP_LAUNCHER_CLOSED, obj);
    }
    ref2.current = true;
    chatInputRef(onClose[14])(minimum.USER_DISMISS);
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
      obj = { type: null };
      obj[0] = context(onClose[22]).KeyboardTypes.SYSTEM;
      context(onClose[21]).setKeyboardType(obj);
      current = undefined;
      if (_null != null) {
        current = _null.current;
      }
      if (null != current) {
        obj1 = { ref: null };
        obj1[0] = _null;
        const result = context(onClose[23]).setAccessibilityFocus(obj1);
        _null = null;
        const obj6 = context(onClose[23]);
      }
      const obj4 = context(onClose[21]);
    }
  }, items5);
  obj1 = {
    ref: ref2,
    animationConfigs: closure_7,
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
  let obj6 = context(onClose[13]);
  if (!isScreenReaderEnabled) {
    let tmpResult = tmp(tmp2[20]);
    isScreenReaderEnabled = tmpResult.isMetaQuest();
  }
  obj1[5] = isScreenReaderEnabled;
  tmpResult = tmp(tmp2[20]);
  obj1[6] = tmpResult.isMetaQuest();
  obj1[7] = callback3;
  obj1[8] = callback4;
  obj1[9] = transitionState;
  obj1[10] = callback2;
  let tmp23 = onboardingNavigatorContent;
  if (!onboardingNavigatorContent) {
    tmp23 = entrypoint === tmp(tmp2[25]).AppLauncherEntrypoint.VOICE;
  }
  obj1[11] = tmp23;
  let onboardingRoundingView = onboardingNavigatorContent;
  if (onboardingNavigatorContent) {
    onboardingRoundingView = tmp6.onboardingRoundingView;
  }
  obj1[12] = onboardingRoundingView;
  let onboardingHeader = onboardingNavigatorContent;
  if (onboardingNavigatorContent) {
    onboardingHeader = tmp6.onboardingHeader;
  }
  obj1[13] = onboardingHeader;
  obj1[15] = entrypoint !== context(onClose[25]).AppLauncherEntrypoint.VOICE;
  obj1[16] = defaultAppLauncherWidth;
  const obj2 = { style: { position: "relative", height: tmp8.maximum }, children: null };
  obj3 = {
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
  const tmp22 = chatInputRef(onClose[24]);
  const tmp24 = ref;
  if (onboardingNavigatorContent) {
    onboardingNavigatorContent = tmp6.onboardingNavigatorContent;
  }
  obj3[5] = onboardingNavigatorContent;
  obj3[6] = entrypoint;
  obj3[7] = callback;
  obj3[8] = ref;
  obj3[9] = defaultAppLauncherWidth;
  obj2[1] = closure_8(tmp7(onClose[26]), obj3);
  obj1[17] = closure_8(tmp24, obj2);
  return closure_8(tmp22, obj1);
});
let result = require("set").fileFinishedImporting("modules/app_launcher/native/AppLauncherKeyboard.tsx");

export default memoResult;
export function setAppLauncherA11yFocusReturnRef(current2) {
  closure_12 = current2;
}
