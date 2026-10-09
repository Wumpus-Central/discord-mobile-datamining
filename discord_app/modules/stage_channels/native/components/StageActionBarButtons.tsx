// === Module 10936: StageActionBarButtons ===

// Module 10936 (StageActionBarButtons)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4811 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5055 */;
import spring from "spring" /* 5375 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5916 */;
import Pressables from "Pressables" /* 6191 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 7483 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 7487 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7492 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7497 */;
import Form from "Form" /* 8563 */;
import _modDef8644 from "module_8644" /* 8644 */;
import CallsUtils from "CallsUtils" /* 8768 */;
import CallBarActionAll from "CallBarAction" /* 10831 */;
import _modDef10938 from "module_10938" /* 10938 */;
import StageMusicActionCreators from "StageMusicActionCreators" /* 10949 */;
import shouldShowEndStageModalDefault from "shouldShowEndStageModal" /* 10950 */;
import _modDef10951 from "module_10951" /* 10951 */;
import _modDef10978 from "module_10978" /* 10978 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import ReadStateStore from "ReadStateStore" /* 6042 */;
import StageMusicStore from "StageMusicStore" /* 10937 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
const View = fn(17).View;
let closure_10 = fn(5889).REQUEST_TO_SPEAK_SHEET_KEY;
const NOOP = fn(1085).NOOP;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const AgeVerificationSpeakerActionSheet = "AgeVerificationSpeakerActionSheet";
let createStyles = fn(5091);
let obj2 = { actionBarCTAContainer: { position: "relative" }, imageStyle: { tintColor: nativeDefault.colors.WHITE }, iconStyle: null, iconContainerStyle: null, promptIconStyle: null, continueContainer: null, continueText: null, continueIcon: null };
let size = { tintColor: nativeDefault.colors.WHITE, width: 20, height: 20 };
obj2.iconStyle = size;
let obj3 = { tintColor: nativeDefault.colors.WHITE };
obj2.iconContainerStyle = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, borderRadius: nativeDefault.radii.lg, padding: 4 };
const size1 = { tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24 };
obj2.promptIconStyle = size1;
obj2.continueContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 16 };
let obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, borderRadius: nativeDefault.radii.lg, padding: 4 };
obj2.continueText = { color: nativeDefault.unsafe_rawColors.BLUE_345, fontSize: 14, lineHeight: 18 };
let obj5 = { color: nativeDefault.unsafe_rawColors.BLUE_345, fontSize: 14, lineHeight: 18 };
obj2.continueIcon = { tintColor: nativeDefault.unsafe_rawColors.BLUE_345 };
let closure_15 = createStyles.createStyles(obj2);
fn(558);
let obj6 = { tintColor: nativeDefault.unsafe_rawColors.BLUE_345 };
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function MoveToAudienceButton(channel) {
  const cResult = channel(576).c(6);
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.ezLpY6);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function o() {
      const result = StageChannelActionCreators.audienceAckRequestToSpeak(channel, true);
    };
    cResult[1] = channel;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === isSmallSize) {
    if (cResult[4] === tmp6) {
      let tmp7 = cResult[5];
    }
    return tmp7;
  }
  const obj = channel(576);
  const tmp8 = closure_12(CallBarActionAll.ActionButton, { accessibilityLabel: first, source: _modDef10938, onPress: tmp6, isSmallSize });
  cResult[3] = isSmallSize;
  cResult[4] = tmp6;
  cResult[5] = tmp8;
  tmp7 = tmp8;
  const obj2 = { accessibilityLabel: first, source: _modDef10938, onPress: tmp6, isSmallSize };
}) : (function MoveToAudienceButton(channel) {
  channel = channel.channel;
  const obj = { accessibilityLabel: null, source: null, onPress: null, isSmallSize: null };
  const intl = channel(1126).intl;
  obj.accessibilityLabel = intl.string(channel(1126).t.ezLpY6);
  obj.source = _modDef10938;
  obj.onPress = function onPress() {
    const result = StageChannelActionCreators.audienceAckRequestToSpeak(channel, true);
  };
  obj.isSmallSize = channel.isSmallSize;
  return closure_12(CallBarActionAll.ActionButton, obj);
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function MusicMuteButton(isSmallSize) {
  const cResult = stateFromStores(576).c(13);
  isSmallSize = isSmallSize.isSmallSize;
  const tmp4 = closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageMusicStore];
    const fn = function o() {
      return muted.isMuted();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp5, tmp6);
  const tmpResult = stateFromStores(504);
  if (tmpResult2.useShowStageMusicMuteButton(isSmallSize.channel.id)) {
    if (cResult[2] !== stateFromStores) {
      const intl = tmp(1126).intl;
      const string = intl.string;
      let ScHlfl = tmp(1126).t;
      if (stateFromStores) {
        ScHlfl = ScHlfl.ScHlfl;
        let stringResult = string(ScHlfl);
      } else {
        stringResult = string(ScHlfl.zqxfrf);
      }
      cResult[2] = stateFromStores;
      cResult[3] = stringResult;
    } else {
      const tmp13 = importDefault(stateFromStores ? 10945 : 10946);
      if (stateFromStores) {
        let MusicIcon = tmp(10947).MusicSlashIcon;
      } else {
        MusicIcon = tmp(10218).MusicIcon;
      }
      if (cResult[4] !== stateFromStores) {
        const fn2 = function y() {
          return StageMusicActionCreators.updateStageMusicMuted(!stateFromStores);
        };
        cResult[4] = stateFromStores;
        cResult[5] = fn2;
        let tmp14 = fn2;
      } else {
        tmp14 = cResult[5];
      }
      if (cResult[6] === isSmallSize) {
        if (cResult[7] === tmp4.imageStyle) {
          if (cResult[8] === tmp10) {
            if (cResult[9] === tmp13) {
              if (cResult[10] === MusicIcon) {
                if (cResult[11] === tmp14) {
                  let tmp15 = cResult[12];
                }
                return tmp15;
              }
            }
          }
        }
      }
      const obj2 = { accessibilityLabel: cResult[3], source: tmp13, IconComponent: MusicIcon, imageStyle: tmp4.imageStyle, onPress: tmp14, isSmallSize };
      const tmp18 = closure_12(CallBarActionAll.ActionButton, obj2);
      cResult[6] = isSmallSize;
      cResult[7] = tmp4.imageStyle;
      cResult[8] = cResult[3];
      cResult[9] = tmp13;
      cResult[10] = MusicIcon;
      cResult[11] = tmp14;
      cResult[12] = tmp18;
      tmp15 = tmp18;
    }
  } else {
    return null;
  }
  tmpResult2 = stateFromStores(10939);
}) : (function MusicMuteButton(arg0) {
  let stateFromStores;
  ({ channel, isSmallSize } = arg0);
  let imageStyle = closure_15();
  let tmpResult = dependencyMap;
  const items = [StageMusicStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => muted.isMuted());
  const obj = stateFromStores(504);
  if (!obj2.useShowStageMusicMuteButton(channel.id)) {
    return null;
  } else {
    const intl = tmp(1126).intl;
    const string = intl.string;
    const t = tmp(1126).t;
    if (stateFromStores) {
      let stringResult = string(t.ScHlfl);
    } else {
      stringResult = string(t.zqxfrf);
    }
    const obj3 = { accessibilityLabel: stringResult, source: importDefault(stateFromStores ? 10945 : 10946), IconComponent: null, imageStyle: null, onPress: null, isSmallSize: null };
    if (stateFromStores) {
      tmpResult = tmp(10947);
      let MusicIcon = tmpResult.MusicSlashIcon;
    } else {
      MusicIcon = tmp(10218).MusicIcon;
    }
    obj3.IconComponent = MusicIcon;
    imageStyle = imageStyle.imageStyle;
    obj3.imageStyle = imageStyle;
    obj3.onPress = function onPress() {
      return StageMusicActionCreators.updateStageMusicMuted(!stateFromStores);
    };
    obj3.isSmallSize = isSmallSize;
    closure_12(CallBarActionAll.ActionButton, obj3);
  }
  obj2 = stateFromStores(10939);
});
createStyles = fn(5091);
let obj7 = { container: null, header: null, title: null, footer: null };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function DisconnectStageButton(channel) {
  const cResult = channel(576).c(6);
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  if (cResult[0] !== channel) {
    function handleStageDisconnect() {
      if (shouldShowEndStageModalDefault(channel)) {
        StageChannelActionCreatorExtras.openEndStageModal(channel);
        const tmp3Result = StageChannelActionCreatorExtras;
      } else {
        CallsUtils.handleDisconnect(channel);
        const tmp3Result2 = CallsUtils;
      }
    }
    cResult[0] = channel;
    cResult[1] = handleStageDisconnect;
    let tmp4 = handleStageDisconnect;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.SMKyih);
    cResult[2] = stringResult;
    let tmp5 = stringResult;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    if (cResult[4] === isSmallSize) {
      let tmp7 = cResult[5];
    }
    return tmp7;
  }
  const obj = channel(576);
  const tmp8 = closure_12(CallBarActionAll.PrimaryActionButton, { accessibilityLabel: tmp5, source: _modDef10951, IconComponent: channel(10952).DoorExitIcon, onPress: tmp4, isSmallSize });
  cResult[3] = tmp4;
  cResult[4] = isSmallSize;
  cResult[5] = tmp8;
  tmp7 = tmp8;
  const obj2 = { accessibilityLabel: tmp5, source: _modDef10951, IconComponent: channel(10952).DoorExitIcon, onPress: tmp4, isSmallSize };
}) : (function DisconnectStageButton(channel) {
  channel = channel.channel;
  const obj = { accessibilityLabel: null, source: null, IconComponent: null, onPress: null, isSmallSize: null };
  const intl = channel(1126).intl;
  obj.accessibilityLabel = intl.string(channel(1126).t.SMKyih);
  obj.source = _modDef10951;
  obj.IconComponent = channel(10952).DoorExitIcon;
  obj.onPress = function handleStageDisconnect() {
    if (shouldShowEndStageModalDefault(channel)) {
      StageChannelActionCreatorExtras.openEndStageModal(channel);
      const tmp3Result = StageChannelActionCreatorExtras;
    } else {
      CallsUtils.handleDisconnect(channel);
      const tmp3Result2 = CallsUtils;
    }
  };
  obj.isSmallSize = channel.isSmallSize;
  return closure_12(CallBarActionAll.PrimaryActionButton, obj);
});
obj7.container = { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_24 };
obj7.header = { alignItems: "center" };
obj7.title = { textAlign: "center" };
let obj8 = { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_24 };
obj7.footer = { gap: nativeDefault.space.PX_12 };
let closure_16 = createStyles.createStyles(obj7);
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function AgeVerificationSpeakerActionSheet(onClose) {
  const cResult = onClose(576).c(31);
  onClose = onClose.onClose;
  const tmp4 = closure_16();
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] !== onClose) {
    function handleAction() {
      const obj = AgeVerificationActionCreatorsDefault;
      const result = obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT });
      onClose();
      const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT };
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
    cResult[0] = onClose;
    cResult[1] = handleAction;
    let tmp5 = handleAction;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== onClose) {
    function handleDismiss() {
      onClose();
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
    cResult[2] = onClose;
    cResult[3] = handleDismiss;
    let tmp6 = handleDismiss;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] !== bottom) {
    let obj2 = { paddingBottom: bottom };
    cResult[4] = bottom;
    cResult[5] = obj2;
    let tmp7 = obj2;
  } else {
    tmp7 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = closure_12(tmp(6273).TrafficConeSpotIllustration, { width: 120, height: 120 });
    cResult[6] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[6];
  }
  if (cResult[7] !== tmp4.header) {
    const obj3 = { style: tmp4.header, children: tmp8 };
    const tmp14 = closure_12(View, obj3);
    cResult[7] = tmp4.header;
    cResult[8] = tmp14;
    let tmp11 = tmp14;
  } else {
    tmp11 = cResult[8];
  }
  ({ container, title } = tmp4);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.zvubnM);
    cResult[9] = stringResult;
    let tmp15 = stringResult;
  } else {
    tmp15 = cResult[9];
  }
  if (cResult[10] !== tmp4.title) {
    const obj4 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: title, children: tmp15 };
    const tmp19 = closure_12(tmp(5087).Text, obj4);
    cResult[10] = tmp4.title;
    cResult[11] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.KXVgjt);
    cResult[12] = stringResult1;
    let tmp20 = stringResult1;
  } else {
    tmp20 = cResult[12];
  }
  if (cResult[13] !== tmp5) {
    const obj5 = { size: "lg", onPress: tmp5, text: tmp20 };
    const tmp24 = closure_12(tmp(5376).Button, obj5);
    cResult[13] = tmp5;
    cResult[14] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(tmp(1126).t.WAI6xu);
    cResult[15] = stringResult2;
    let tmp25 = stringResult2;
  } else {
    tmp25 = cResult[15];
  }
  if (cResult[16] !== tmp6) {
    const obj6 = { size: "lg", onPress: tmp6, text: tmp25, variant: "secondary" };
    const tmp29 = closure_12(tmp(5376).Button, obj6);
    cResult[16] = tmp6;
    cResult[17] = tmp29;
    let tmp27 = tmp29;
  } else {
    tmp27 = cResult[17];
  }
  if (cResult[18] === tmp4.footer) {
    if (cResult[19] === tmp22) {
      if (cResult[20] === tmp27) {
        let tmp30 = cResult[21];
      }
      if (cResult[22] === tmp4.container) {
        if (cResult[23] === tmp30) {
          if (cResult[24] === tmp17) {
            let tmp32 = cResult[25];
          }
          if (cResult[26] === tmp6) {
            if (cResult[27] === tmp32) {
              if (cResult[28] === tmp7) {
                if (cResult[29] === tmp11) {
                  let tmp36 = cResult[30];
                }
                return tmp36;
              }
            }
          }
          const obj7 = { startExpanded: true, onDismiss: tmp6, contentStyles: tmp7, header: tmp11, children: tmp32 };
          const tmp38 = closure_12(tmp(6892).ActionSheet, obj7);
          cResult[26] = tmp6;
          cResult[27] = tmp32;
          cResult[28] = tmp7;
          cResult[29] = tmp11;
          cResult[30] = tmp38;
          tmp36 = tmp38;
        }
      }
      const obj8 = { style: container, children: null };
      const items = [tmp17, tmp30];
      obj8.children = items;
      const tmp35 = closure_13(View, obj8);
      cResult[22] = tmp4.container;
      cResult[23] = tmp30;
      cResult[24] = tmp17;
      cResult[25] = tmp35;
      tmp32 = tmp35;
    }
  }
  const obj9 = { style: tmp4.footer, children: null };
  const items1 = [tmp22, tmp27];
  obj9.children = items1;
  const tmp31 = closure_13(View, obj9);
  cResult[18] = tmp4.footer;
  cResult[19] = tmp22;
  cResult[20] = tmp27;
  cResult[21] = tmp31;
  tmp30 = tmp31;
  let obj = onClose(576);
}) : (function AgeVerificationSpeakerActionSheet(onClose) {
  onClose = onClose.onClose;
  function handleDismiss() {
    onClose();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }
  const tmp = closure_16();
  let obj = { startExpanded: true, onDismiss: handleDismiss, contentStyles: { paddingBottom: useSafeAreaInsetsDefault().bottom }, header: closure_12(View, { style: tmp.header, children: closure_12(onClose(6273).TrafficConeSpotIllustration, { width: 120, height: 120 }) }), children: null };
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  const intl = onClose(1126).intl;
  obj4.children = intl.string(onClose(1126).t.zvubnM);
  const items = [closure_12(onClose(5087).Text, obj4), ];
  const obj5 = { style: tmp.footer, children: null };
  const obj6 = {
    size: "lg",
    onPress: function handleAction() {
      const obj = AgeVerificationActionCreatorsDefault;
      const result = obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT });
      onClose();
      const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT };
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    text: null
  };
  const intl2 = onClose(1126).intl;
  obj6.text = intl2.string(onClose(1126).t.KXVgjt);
  const items1 = [closure_12(onClose(5376).Button, obj6), ];
  const obj7 = { size: "lg", onPress: handleDismiss, text: null, variant: "secondary" };
  const intl3 = onClose(1126).intl;
  obj7.text = intl3.string(onClose(1126).t.WAI6xu);
  items1[1] = closure_12(onClose(5376).Button, obj7);
  obj5.children = items1;
  items[1] = closure_13(View, obj5);
  obj3.children = items;
  obj.children = closure_13(View, obj3);
  return closure_12(onClose(6892).ActionSheet, obj);
});
let closure_17 = tmp6;
fn(558);
const obj13 = { gap: nativeDefault.space.PX_12 };
ReactCompilerGating = fn(558);
let c18 = 400;
const actionBarAnimationConfig = { mass: 1, stiffness: 100, damping: 30, overshootClamping: false, restSpeedThreshold: 0.01, restDisplacementThreshold: 0.01 };
const __initData = { code: "function StageActionBarButtonsTsx1(){const{withSpring,show,actionBarAnimationConfig}=this.__closure;return{marginTop:withSpring(show?0:20,actionBarAnimationConfig),opacity:withSpring(show?1:0,actionBarAnimationConfig)};}" };
const __initData2 = { code: "function StageActionBarButtonsTsx2(){const{withSpring,show,actionBarAnimationConfig}=this.__closure;return{marginTop:withSpring(show?0:20,actionBarAnimationConfig),opacity:withSpring(show?1:0,actionBarAnimationConfig)};}" };
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function RequestToSpeakButton(arg0) {
  const cResult = require("c").c(17);
  ({ channel, isSmallSize } = arg0);
  let obj = require("c");
  const tmp4 = first;
  [tmp6, tmp7] = shouldShowAgeVerificationPopover(first(shouldAgeVerifyToSpeakForCurrentUser[44])(channel), 2);
  require = tmp7;
  const tmp5 = shouldShowAgeVerificationPopover(first(shouldAgeVerifyToSpeakForCurrentUser[44])(channel), 2);
  const tmp8 = shouldShowAgeVerificationPopover(require("useLocalStorageState").useLocalStorageState("age-verification-stage-popover-dismissed", false), 2);
  first = tmp8[0];
  importAll = tmp10;
  let obj2 = require("useLocalStorageState");
  shouldAgeVerifyToSpeakForCurrentUser = require("useStageSpeakingForCurrentUser").useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
  let obj3 = require("useStageSpeakingForCurrentUser");
  shouldShowAgeVerificationPopover = require("useStageSpeakingForCurrentUser").useShouldShowAgeVerificationPopover(channel.id);
  if (cResult[0] === first) {
    if (cResult[1] === tmp10) {
      if (cResult[2] === shouldShowAgeVerificationPopover) {
        let tmp13 = cResult[3];
        let tmp14 = cResult[4];
      }
      const effect = noop.useEffect(tmp13, tmp14);
      if (cResult[5] === tmp7) {
        if (cResult[6] === shouldAgeVerifyToSpeakForCurrentUser) {
          let tmp17 = cResult[7];
        }
        const canRaiseHand = tmp(tmp2[47]).useCanRaiseHand(channel);
        let tmp19 = !canRaiseHand;
        if (!canRaiseHand) {
          tmp19 = !tmp6;
        }
        if (cResult[8] !== tmp6) {
          const intl = tmp(tmp2[13]).intl;
          const string = intl.string;
          let GCimTk = tmp(tmp2[13]).t;
          if (tmp6) {
            GCimTk = GCimTk.GCimTk;
            let stringResult = string(GCimTk);
          } else {
            stringResult = string(GCimTk.hLbG5N);
          }
          cResult[8] = tmp6;
          cResult[9] = stringResult;
        } else {
          if (shouldAgeVerifyToSpeakForCurrentUser) {
            let HandRequestSpeakIcon = tmp(tmp2[48]).HandRequestDenyIcon;
          } else {
            HandRequestSpeakIcon = tmp(tmp2[49]).HandRequestSpeakIcon;
          }
          if (tmp19) {
            tmp17 = NOOP;
          }
          if (cResult[10] === tmp19) {
            if (cResult[11] === tmp6) {
              if (cResult[12] === isSmallSize) {
                if (cResult[13] === tmp20) {
                  if (cResult[14] === HandRequestSpeakIcon) {
                    if (cResult[15] === tmp17) {
                      let tmp23 = cResult[16];
                    }
                    return tmp23;
                  }
                }
              }
            }
          }
          const obj5 = { accessibilityLabel: cResult[9], isActive: tmp6, source: tmp4(tmp2[50]), IconComponent: HandRequestSpeakIcon, onPress: tmp17, appearsDisabled: tmp19, isSmallSize };
          const tmp26 = closure_12(require("CallBarAction").ToggledActionButton, obj5);
          cResult[10] = tmp19;
          cResult[11] = tmp6;
          cResult[12] = isSmallSize;
          cResult[13] = cResult[9];
          cResult[14] = HandRequestSpeakIcon;
          cResult[15] = tmp17;
          cResult[16] = tmp26;
          tmp23 = tmp26;
        }
        const tmpResult = tmp(tmp2[47]);
      }
      function handlePress() {
        if (shouldAgeVerifyToSpeakForCurrentUser) {
          const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
          const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj2);
        } else {
          tmp7();
        }
      }
      cResult[5] = tmp7;
      cResult[6] = shouldAgeVerifyToSpeakForCurrentUser;
      cResult[7] = handlePress;
      tmp17 = handlePress;
    }
  }
  const fn = function s() {
    let tmp = shouldShowAgeVerificationPopover;
    if (shouldShowAgeVerificationPopover) {
      tmp = !first;
    }
    if (tmp) {
      const obj2 = { content: null, key: null };
      const obj3 = {
        onClose() {
            return closure_1_2(true);
          }
      };
      obj2.content = __initData(closure_17, obj3);
      obj2.key = AgeVerificationSpeakerActionSheet;
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  };
  const items = [shouldShowAgeVerificationPopover, first, tmp8[1]];
  cResult[0] = first;
  cResult[1] = tmp8[1];
  cResult[2] = shouldShowAgeVerificationPopover;
  cResult[3] = fn;
  cResult[4] = items;
  tmp14 = items;
  tmp13 = fn;
  const obj4 = require("useStageSpeakingForCurrentUser");
}) : (function RequestToSpeakButton(channel) {
  channel = channel.channel;
  _require = undefined;
  let first;
  let shouldAgeVerifyToSpeakForCurrentUser;
  let shouldShowAgeVerificationPopover;
  [tmp4, c0] = shouldShowAgeVerificationPopover(first(shouldAgeVerifyToSpeakForCurrentUser[44])(channel), 2);
  let tmp = first;
  const tmp3 = shouldShowAgeVerificationPopover(first(shouldAgeVerifyToSpeakForCurrentUser[44])(channel), 2);
  const tmp6 = shouldShowAgeVerificationPopover(require("useLocalStorageState").useLocalStorageState("age-verification-stage-popover-dismissed", false), 2);
  first = tmp6[0];
  importAll = tmp8;
  let obj = require("useLocalStorageState");
  shouldAgeVerifyToSpeakForCurrentUser = require("useStageSpeakingForCurrentUser").useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
  let obj2 = require("useStageSpeakingForCurrentUser");
  shouldShowAgeVerificationPopover = require("useStageSpeakingForCurrentUser").useShouldShowAgeVerificationPopover(channel.id);
  const items = [shouldShowAgeVerificationPopover, first, tmp6[1]];
  const effect = noop.useEffect(() => {
    let tmp = shouldShowAgeVerificationPopover;
    if (shouldShowAgeVerificationPopover) {
      tmp = !first;
    }
    if (tmp) {
      const obj2 = { content: null, key: null };
      const obj3 = {
        onClose() {
            return closure_1_2(true);
          }
      };
      obj2.content = __initData(closure_17, obj3);
      obj2.key = AgeVerificationSpeakerActionSheet;
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items);
  let obj3 = require("useStageSpeakingForCurrentUser");
  const canRaiseHand = require("useCanRaiseHand").useCanRaiseHand(channel);
  let tmp13 = !canRaiseHand;
  if (!canRaiseHand) {
    tmp13 = !tmp4;
  }
  const intl = tmp5(tmp2[13]).intl;
  const string = intl.string;
  const t = tmp5(tmp2[13]).t;
  if (tmp4) {
    let stringResult = string(t.GCimTk);
  } else {
    stringResult = string(t.hLbG5N);
  }
  const obj5 = { accessibilityLabel: stringResult, isActive: tmp4, source: tmp(shouldAgeVerifyToSpeakForCurrentUser[50]), IconComponent: null, onPress: null, appearsDisabled: null, isSmallSize: null };
  if (shouldAgeVerifyToSpeakForCurrentUser) {
    let HandRequestSpeakIcon = tmp5(tmp2[48]).HandRequestDenyIcon;
  } else {
    HandRequestSpeakIcon = tmp5(tmp2[49]).HandRequestSpeakIcon;
  }
  obj5.IconComponent = HandRequestSpeakIcon;
  obj5.onPress = tmp13 ? NOOP : (function handlePress() {
    if (shouldAgeVerifyToSpeakForCurrentUser) {
      const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
      const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj2);
    } else {
      _undefined();
    }
  });
  obj5.appearsDisabled = tmp13;
  obj5.isSmallSize = channel.isSmallSize;
  return closure_12(require("CallBarAction").ToggledActionButton, obj5);
});
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedPrompt(show) {
  const cResult = show(576).c(9);
  show = show.show;
  ({ children, style } = show);
  const tmp4 = closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function o() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = show(576);
  const stateFromStores = show(504).useStateFromStores(tmp5, tmp6);
  const tmpResult = show(504);
  const fn2 = function f() {
    let num = 20;
    if (show) {
      num = 0;
    }
    const obj2 = { marginTop: spring.withSpring(num, closure_19), opacity: null };
    let num2 = 0;
    if (show) {
      num2 = 1;
    }
    obj2.opacity = spring.withSpring(num2, closure_19);
    return obj2;
  };
  const tmpResult2 = show(4811);
  fn2.__closure = { withSpring: show(5375).withSpring, show, actionBarAnimationConfig };
  fn2.__workletHash = 5255980384921;
  fn2.__initData = __initData;
  let animatedStyle;
  if (!stateFromStores) {
    animatedStyle = tmpResult2.useAnimatedStyle(fn2);
  }
  if (cResult[2] === style) {
    if (cResult[3] === tmp4.actionBarCTAContainer) {
      if (cResult[4] === animatedStyle) {
        let tmp10 = cResult[5];
      }
      if (cResult[6] === children) {
        if (cResult[7] === tmp10) {
          let tmp11 = cResult[8];
        }
        return tmp11;
      }
      const obj3 = { style: tmp10, children };
      const tmp14 = closure_12(ReanimatedRexportDefault.View, obj3);
      cResult[6] = children;
      cResult[7] = tmp10;
      cResult[8] = tmp14;
      tmp11 = tmp14;
    }
  }
  const items1 = [tmp4.actionBarCTAContainer, style, animatedStyle];
  cResult[2] = style;
  cResult[3] = tmp4.actionBarCTAContainer;
  cResult[4] = animatedStyle;
  cResult[5] = items1;
  tmp10 = items1;
  let obj2 = { withSpring: show(5375).withSpring, show, actionBarAnimationConfig };
}) : (function AnimatedPrompt(show) {
  show = show.show;
  ({ children, style } = show);
  const tmp = closure_15();
  const items = [AccessibilityStore];
  const stateFromStores = show(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = show(504);
  const fn = function c() {
    let num = 20;
    if (show) {
      num = 0;
    }
    const obj2 = { marginTop: spring.withSpring(num, closure_19), opacity: null };
    let num2 = 0;
    if (show) {
      num2 = 1;
    }
    obj2.opacity = spring.withSpring(num2, closure_19);
    return obj2;
  };
  let obj2 = show(4811);
  fn.__closure = { withSpring: show(5375).withSpring, show, actionBarAnimationConfig };
  fn.__workletHash = 295263961338;
  fn.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const style1 = [tmp.actionBarCTAContainer, style, ];
  let tmp5;
  if (!stateFromStores) {
    tmp5 = animatedStyle;
  }
  style1[2] = tmp5;
  return closure_12(ReanimatedRexportDefault.View, { style: style1, children });
});
let closure_22 = tmp9;
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatButton(channel) {
  const cResult = channel(576).c(21);
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    const fn = function o() {
      return { unreadCount: ReadStateStore.getUnreadCount(channel.id), mentionCount: ReadStateStore.getMentionCount(channel.id) };
    };
    const items1 = [channel.id];
    cResult[1] = channel.id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = channel(576);
  const stateFromStoresObject = channel(504).useStateFromStoresObject(first, tmp6, tmp7);
  ({ unreadCount, mentionCount } = stateFromStoresObject);
  const tmpResult = channel(504);
  const isVoiceChannelLocked = channel(10976).useIsVoiceChannelLocked(channel);
  const tmpResult3 = channel(10976);
  const voiceChatNavigationContext = channel(10326).useVoiceChatNavigationContext();
  let openChat;
  if (voiceChatNavigationContext != null) {
    openChat = voiceChatNavigationContext.openChat;
  }
  if (cResult[4] === isVoiceChannelLocked) {
    if (cResult[5] === openChat) {
      let tmp12 = cResult[6];
    }
    if (mentionCount <= 0) {
      if (unreadCount <= 0) {
        const _Symbol2 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { tintColor: isVoiceChannelLocked(587).unsafe_rawColors.WHITE };
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.ZXxLQg);
          cResult[15] = obj2;
          cResult[16] = stringResult;
          let tmp14 = stringResult;
          let tmp13 = obj2;
        } else {
          tmp13 = cResult[15];
          tmp14 = cResult[16];
        }
        if (cResult[17] === isSmallSize) {
          if (cResult[18] === isVoiceChannelLocked) {
            if (cResult[19] === tmp12) {
              let tmp17 = cResult[20];
            }
            return tmp17;
          }
        }
        const obj3 = { imageStyle: tmp13, accessibilityLabel: tmp14, IconComponent: tmp(8182).ChatIcon, source: isVoiceChannelLocked(10977), onPress: tmp12, appearsDisabled: isVoiceChannelLocked, isSmallSize };
        const tmp21 = closure_12(openChat(10831).ActionButton, obj3);
        cResult[17] = isSmallSize;
        cResult[18] = isVoiceChannelLocked;
        cResult[19] = tmp12;
        cResult[20] = tmp21;
        tmp17 = tmp21;
      }
    }
    if (mentionCount > 0) {
      unreadCount = mentionCount;
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { tintColor: isVoiceChannelLocked(587).unsafe_rawColors.WHITE };
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(tmp(1126).t.ZXxLQg);
      cResult[7] = obj4;
      cResult[8] = stringResult1;
      let tmp24 = stringResult1;
      let tmp23 = obj4;
    } else {
      tmp23 = cResult[7];
      tmp24 = cResult[8];
    }
    if (cResult[9] === isSmallSize) {
      if (cResult[10] === isVoiceChannelLocked) {
        if (cResult[11] === tmp12) {
          if (cResult[12] === unreadCount) {
            if (cResult[13] === tmp22) {
              let tmp27 = cResult[14];
            }
            return tmp27;
          }
        }
      }
    }
    const obj5 = { notifications: unreadCount, isMentioned: mentionCount > 0, imageStyle: tmp23, accessibilityLabel: tmp24, IconComponent: tmp(8182).ChatIcon, source: isVoiceChannelLocked(10977), onPress: tmp12, appearsDisabled: isVoiceChannelLocked, isSmallSize };
    const tmp31 = closure_12(openChat(10831).NotifiedActionButton, obj5);
    cResult[9] = isSmallSize;
    cResult[10] = isVoiceChannelLocked;
    cResult[11] = tmp12;
    cResult[12] = unreadCount;
    cResult[13] = mentionCount > 0;
    cResult[14] = tmp31;
    tmp27 = tmp31;
  }
  function onPress() {
    if (!isVoiceChannelLocked) {
      if (openChat != null) {
        tmp();
      }
    }
  }
  cResult[4] = isVoiceChannelLocked;
  cResult[5] = openChat;
  cResult[6] = onPress;
  tmp12 = onPress;
  const tmpResult4 = channel(10326);
}) : (function ChatButton(channel) {
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  const items = [ReadStateStore];
  const items1 = [channel.id];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => ({ unreadCount: ReadStateStore.getUnreadCount(channel.id), mentionCount: ReadStateStore.getMentionCount(channel.id) }), items1);
  ({ unreadCount, mentionCount } = stateFromStoresObject);
  const obj = channel(504);
  const isVoiceChannelLocked = channel(10976).useIsVoiceChannelLocked(channel);
  const obj2 = channel(10976);
  const voiceChatNavigationContext = channel(10326).useVoiceChatNavigationContext();
  let openChat;
  if (voiceChatNavigationContext != null) {
    openChat = voiceChatNavigationContext.openChat;
  }
  function onPress() {
    if (!isVoiceChannelLocked) {
      if (openChat != null) {
        tmp();
      }
    }
  }
  if (mentionCount <= 0) {
    if (unreadCount <= 0) {
      const obj4 = { imageStyle: null, accessibilityLabel: null, IconComponent: null, source: null, onPress: null, appearsDisabled: null, isSmallSize: null };
      const obj5 = { tintColor: isVoiceChannelLocked(587).unsafe_rawColors.WHITE };
      obj4.imageStyle = obj5;
      const intl2 = tmp(1126).intl;
      obj4.accessibilityLabel = intl2.string(tmp(1126).t.ZXxLQg);
      obj4.IconComponent = tmp(8182).ChatIcon;
      obj4.source = isVoiceChannelLocked(10977);
      obj4.onPress = onPress;
      obj4.appearsDisabled = isVoiceChannelLocked;
      obj4.isSmallSize = isSmallSize;
      let tmp7Result = closure_12(openChat(10831).ActionButton, obj4);
    }
    return tmp7Result;
  }
  if (mentionCount > 0) {
    unreadCount = mentionCount;
  }
  const obj6 = { notifications: unreadCount, isMentioned: mentionCount > 0, imageStyle: null, accessibilityLabel: null, IconComponent: null, source: null, onPress: null, appearsDisabled: null, isSmallSize: null };
  const obj3 = channel(10326);
  obj6.imageStyle = { tintColor: isVoiceChannelLocked(587).unsafe_rawColors.WHITE };
  const intl = tmp(1126).intl;
  obj6.accessibilityLabel = intl.string(channel(1126).t.ZXxLQg);
  obj6.IconComponent = channel(8182).ChatIcon;
  obj6.source = isVoiceChannelLocked(10977);
  obj6.onPress = onPress;
  obj6.appearsDisabled = isVoiceChannelLocked;
  obj6.isSmallSize = isSmallSize;
  tmp7Result = closure_12(openChat(10831).NotifiedActionButton, obj6);
  const obj7 = { tintColor: isVoiceChannelLocked(587).unsafe_rawColors.WHITE };
});
ReactCompilerGating = fn(558);
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? (function StartStagePrompt(channel) {
  const cResult = channel(576).c(10);
  channel = channel.channel;
  const isLive = channel.isLive;
  const style = channel.style;
  const tmp4 = closure_15();
  if (cResult[0] === channel) {
    if (cResult[1] === isLive) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.OYbHfv);
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(tmp(1126).t.yXwLMQ);
      cResult[3] = stringResult;
      cResult[4] = stringResult1;
      let tmp8 = stringResult1;
      let tmp7 = stringResult;
    } else {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      if (cResult[6] === isLive) {
        if (cResult[7] === style) {
          if (cResult[8] === tmp4.promptIconStyle) {
            let tmp11 = cResult[9];
          }
          return tmp11;
        }
      }
    }
    const obj2 = { onPress: tmp5, iconSource: isLive(8151), iconStyle: tmp4.promptIconStyle, style, completed: isLive, title: tmp7, subtitle: tmp8 };
    const tmp14 = closure_12(tmp(8563).FormCTA, obj2);
    cResult[5] = tmp5;
    cResult[6] = isLive;
    cResult[7] = style;
    cResult[8] = tmp4.promptIconStyle;
    cResult[9] = tmp14;
    tmp11 = tmp14;
  }
  function handleStartStage() {
    if (!isLive) {
      const result = StageChannelActionCreatorExtras.openStageChannelSettings(channel);
    }
  }
  cResult[0] = channel;
  cResult[1] = isLive;
  cResult[2] = handleStartStage;
  tmp5 = handleStartStage;
  let obj = channel(576);
}) : (function StartStagePrompt(style) {
  ({ channel: require, isLive } = style);
  let obj = {
    onPress: function handleStartStage() {
      if (!isLive) {
        const result = StageChannelActionCreatorExtras.openStageChannelSettings(_require);
      }
    },
    iconSource: isLive(8151),
    iconStyle: closure_15().promptIconStyle,
    style: style.style,
    completed: isLive,
    title: null,
    subtitle: null
  };
  const intl = util.intl;
  obj.title = intl.string(util.t.OYbHfv);
  const intl2 = util.intl;
  obj.subtitle = intl2.string(util.t.yXwLMQ);
  return closure_12(Form.FormCTA, obj);
});
let closure_23 = tmp11;
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedStartStagePrompt(arg0) {
  const cResult = isLive(first1[12]).c(19);
  ({ channel, style } = arg0);
  const obj = isLive(first1[12]);
  isLive = isLive(first1[57]).useStageChannelStartEvent(channel.id).isLive;
  [show, closure_2] = first2.useState(false);
  [first1, _slicedToArray] = first2.useState(false);
  [first2, closure_6] = first2.useState(isLive);
  if (cResult[0] === first1) {
    if (cResult[1] === isLive) {
      if (cResult[2] === show) {
        let tmp8 = cResult[3];
        let tmp9 = cResult[4];
      }
      const effect = obj3.useEffect(tmp8, tmp9);
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function l() {
          const timeout = setTimeout(() => {
            closure_1_4(true);
          }, closure_1_18);
          return () => {
            clearTimeout(closure_0);
          };
        };
        const items = [];
        cResult[5] = fn2;
        cResult[6] = items;
        let tmp13 = items;
        let tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
        tmp13 = cResult[6];
      }
      const effect1 = obj3.useEffect(tmp12, tmp13);
      if (cResult[7] === first2) {
        if (cResult[8] === isLive) {
          if (cResult[9] === show) {
            let tmp15 = cResult[10];
            let tmp16 = cResult[11];
          }
          const effect2 = obj3.useEffect(tmp15, tmp16);
          if (first2) {
            return null;
          } else {
            if (cResult[12] === channel) {
              if (cResult[13] === isLive) {
                if (cResult[14] === style) {
                  let tmp19 = cResult[15];
                }
                if (cResult[16] === show) {
                }
                const obj4 = { show, children: tmp19 };
                const tmp26 = closure_12(closure_22, obj4);
                class S {
                  constructor() {
                    if (closure_0) {
                      tmp = closure_1;
                      if (!closure_1) {
                        tmp2 = closure_5;
                        if (!closure_5) {
                          tmp3 = globalThis;
                          _setTimeout = setTimeout;
                          tmp4 = closure_1_18;
                          closure_0 = setTimeout(() => {
                            closure_1_6(true);
                          }, closure_1_18);
                          return () => {
                            clearTimeout(closure_0);
                          };
                        }
                      }
                    }
                    return;
                  }
                }
                cResult[17] = tmp19;
                cResult[18] = tmp26;
              }
            }
            const obj5 = { channel, isLive, style };
            const tmp22 = closure_12(closure_23, obj5);
            class S {
              constructor() {
                if (closure_0) {
                  tmp = closure_1;
                  if (!closure_1) {
                    tmp2 = closure_5;
                    if (!closure_5) {
                      tmp3 = globalThis;
                      _setTimeout = setTimeout;
                      tmp4 = closure_1_18;
                      closure_0 = setTimeout(() => {
                        closure_1_6(true);
                      }, closure_1_18);
                      return () => {
                        clearTimeout(closure_0);
                      };
                    }
                  }
                }
                return;
              }
            }
            cResult[13] = isLive;
            cResult[14] = style;
            cResult[15] = tmp22;
            tmp19 = tmp22;
          }
        }
      }
      class S {
        constructor() {
          if (closure_0) {
            tmp = closure_1;
            if (!closure_1) {
              tmp2 = closure_5;
              if (!closure_5) {
                tmp3 = globalThis;
                _setTimeout = setTimeout;
                tmp4 = closure_1_18;
                closure_0 = setTimeout(() => {
                  closure_1_6(true);
                }, closure_1_18);
                return () => {
                  clearTimeout(closure_0);
                };
              }
            }
          }
          return;
        }
      }
      const items1 = [isLive, show, first2];
      cResult[7] = first2;
      cResult[8] = isLive;
      cResult[9] = show;
      cResult[10] = S;
      cResult[11] = items1;
      tmp16 = items1;
      tmp15 = S;
    }
  }
  const fn = function s() {
    if (first1) {
      let tmp = isLive;
      if (!isLive) {
        if (!first) {
          closure_2(true);
        }
      }
      if (tmp) {
        tmp = first;
      }
      if (tmp) {
        closure_2(false);
      }
    }
  };
  const items2 = [isLive, show, first1];
  cResult[0] = first1;
  cResult[1] = isLive;
  cResult[2] = show;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp9 = items2;
  tmp8 = fn;
  const obj2 = isLive(first1[57]);
}) : (function AnimatedStartStagePrompt(channel) {
  channel = channel.channel;
  let isLive;
  show = undefined;
  closure_2 = undefined;
  first1 = undefined;
  _slicedToArray = undefined;
  first2 = undefined;
  closure_6 = undefined;
  isLive = isLive(first1[57]).useStageChannelStartEvent(channel.id).isLive;
  [show, closure_2] = first2.useState(false);
  [first1, _slicedToArray] = first2.useState(false);
  [first2, closure_6] = first2.useState(isLive);
  const items = [isLive, show, first1];
  const effect = first2.useEffect(() => {
    if (first1) {
      let tmp = isLive;
      if (!isLive) {
        if (!first) {
          closure_2(true);
        }
      }
      if (tmp) {
        tmp = first;
      }
      if (tmp) {
        closure_2(false);
      }
    }
  }, items);
  const effect1 = first2.useEffect(() => {
    const timeout = setTimeout(() => {
      closure_1_4(true);
    }, closure_1_18);
    return () => {
      clearTimeout(closure_0);
    };
  }, []);
  const items1 = [isLive, show, first2];
  const effect2 = first2.useEffect(() => {
    if (timeout) {
      if (!first) {
        if (!first2) {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            closure_1_6(true);
          }, closure_1_18);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
    }
  }, items1);
  let tmp10 = null;
  if (!first2) {
    const obj2 = { show, children: null };
    const obj3 = { channel, isLive, style: channel.style };
    obj2.children = closure_12(closure_23, obj3);
    tmp10 = closure_12(closure_22, obj2);
  }
  return tmp10;
});
ReactCompilerGating = fn(558);
let tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? (function JoinStagePrompt(channel) {
  const cResult = channel(576).c(9);
  channel = channel.channel;
  const style = channel.style;
  const tmp4 = closure_15();
  if (cResult[0] !== channel) {
    function handleJoinStage() {
      StageChannelModalActionCreators.connectAndOpen(channel);
    }
    cResult[0] = channel;
    cResult[1] = handleJoinStage;
    let tmp5 = handleJoinStage;
  } else {
    tmp5 = cResult[1];
  }
  ({ iconStyle, iconContainerStyle } = tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["7vb2cc"]);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.lyCW4E);
    cResult[2] = stringResult;
    cResult[3] = stringResult1;
    let tmp7 = stringResult1;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    if (cResult[5] === style) {
      if (cResult[6] === tmp4.iconContainerStyle) {
        if (cResult[7] === tmp4.iconStyle) {
          let tmp10 = cResult[8];
        }
        return tmp10;
      }
    }
  }
  const obj = channel(576);
  const tmp11 = closure_12(channel(8563).FormCTA, { onPress: tmp5, iconSource: _modDef8644, iconStyle, iconContainerStyle, style, title: tmp6, subtitle: tmp7 });
  cResult[4] = tmp5;
  cResult[5] = style;
  cResult[6] = tmp4.iconContainerStyle;
  cResult[7] = tmp4.iconStyle;
  cResult[8] = tmp11;
  tmp10 = tmp11;
  const obj2 = { onPress: tmp5, iconSource: _modDef8644, iconStyle, iconContainerStyle, style, title: tmp6, subtitle: tmp7 };
}) : (function JoinStagePrompt(channel) {
  channel = channel.channel;
  const obj = {
    onPress: function handleJoinStage() {
      StageChannelModalActionCreators.connectAndOpen(channel);
    },
    iconSource: _modDef8644,
    iconStyle: null,
    iconContainerStyle: null,
    style: channel.style,
    title: null,
    subtitle: null
  };
  ({ iconStyle: obj.iconStyle, iconContainerStyle: obj.iconContainerStyle } = closure_15());
  const intl = channel(1126).intl;
  obj.title = intl.string(channel(1126).t["7vb2cc"]);
  const intl2 = channel(1126).intl;
  obj.subtitle = intl2.string(channel(1126).t.lyCW4E);
  return closure_12(channel(8563).FormCTA, obj);
});
size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageActionBarButtons.tsx");

export const MoveToAudienceButton = tmp3;
export const MusicMuteButton = tmp4;
export const DisconnectStageButton = tmp5;
export const RequestToSpeakListButton = function RequestToSpeakListButton(channel) {
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  let analyticsLocations;
  function handleOpenAudienceList() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10954, dependencyMap.paths), closure_10, { channelId: channel.id, analyticsLocations });
  }
  analyticsLocations = analyticsLocations(6848)().analyticsLocations;
  const stageParticipantsCount = channel(5963).useStageParticipantsCount(channel.id, channel(5957).StageChannelParticipantNamedIndex.REQUESTED_TO_SPEAK_ONLY);
  if (stageParticipantsCount > 0) {
    const obj2 = { accessibilityLabel: null, source: null, imageStyle: null, IconComponent: null, onPress: null, notifications: null, isSmallSize: null };
    const intl = tmp3(1126).intl;
    const obj3 = { count: stageParticipantsCount };
    obj2.accessibilityLabel = intl.formatToPlainString(tmp3(1126).t.OhK58v, obj3);
    obj2.source = tmp(10965);
    const obj4 = { tintColor: tmp(587).unsafe_rawColors.WHITE };
    obj2.imageStyle = obj4;
    obj2.IconComponent = tmp3(10966).HandRequestSpeakListIcon;
    obj2.onPress = handleOpenAudienceList;
    obj2.notifications = stageParticipantsCount;
    obj2.isSmallSize = isSmallSize;
    let tmp7 = closure_12(CallBarActionAll.NotifiedActionButton, obj2);
  } else {
    const obj5 = { accessibilityLabel: null, source: null, imageStyle: null, IconComponent: null, onPress: null, isSmallSize: null };
    const intl2 = tmp3(1126).intl;
    obj5.accessibilityLabel = intl2.string(tmp3(1126).t.KJnyvh);
    obj5.source = tmp(10965);
    const obj6 = { tintColor: tmp(587).unsafe_rawColors.WHITE };
    obj5.imageStyle = obj6;
    obj5.IconComponent = tmp3(10966).HandRequestSpeakListIcon;
    obj5.onPress = handleOpenAudienceList;
    obj5.isSmallSize = isSmallSize;
    tmp7 = closure_12(CallBarActionAll.ActionButton, obj5);
  }
  return tmp7;
};
export const AgeVerificationSpeakerActionSheet = tmp6;
export const RequestToSpeakButton = tmp7;
export const ChatButton = tmp8;
export const AnimatedPrompt = tmp9;
export const AnimatedStartStagePrompt = tmp10;
export const StartStagePrompt = tmp11;
export const JoinStagePrompt = tmp12;
export const ContinueToStagePrompt = ReactCompilerGating.isReactCompilerEnabled() ? (function ContinueToStagePrompt(onContinue) {
  const cResult = c.c(12);
  onContinue = onContinue.onContinue;
  const tmp4 = closure_15();
  ({ continueContainer, continueText } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["jMLfp/"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.continueText) {
    const obj2 = { children: null };
    const obj3 = { style: continueText, children: first };
    obj2.children = __initData(native.LegacyText, obj3);
    const tmp10 = __initData(View, obj2);
    cResult[1] = tmp4.continueText;
    cResult[2] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp4.continueIcon) {
    const obj4 = { children: null };
    const obj5 = { style: tmp4.continueIcon, source: _modDef10978, size: native.Icon.Sizes.SMALL, disableColor: true };
    obj4.children = __initData(native.Icon, obj5);
    const tmp15 = __initData(View, obj4);
    cResult[3] = tmp4.continueIcon;
    cResult[4] = tmp15;
    let tmp11 = tmp15;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === tmp4.continueContainer) {
    if (cResult[6] === tmp7) {
      if (cResult[7] === tmp11) {
        let tmp16 = cResult[8];
      }
      if (cResult[9] === onContinue) {
        if (cResult[10] === tmp16) {
          let tmp18 = cResult[11];
        }
        return tmp18;
      }
      const obj6 = { accessibilityRole: "button", onPress: onContinue, children: tmp16 };
      const tmp20 = __initData(Pressables.PressableOpacity, obj6);
      cResult[9] = onContinue;
      cResult[10] = tmp16;
      cResult[11] = tmp20;
      tmp18 = tmp20;
    }
  }
  const obj7 = { style: continueContainer, children: null };
  const items = [tmp7, tmp11];
  obj7.children = items;
  const tmp17 = __initData2(View, obj7);
  cResult[5] = tmp4.continueContainer;
  cResult[6] = tmp7;
  cResult[7] = tmp11;
  cResult[8] = tmp17;
  tmp16 = tmp17;
}) : (function ContinueToStagePrompt(onContinue) {
  const tmp = closure_15();
  const obj = { accessibilityRole: "button", onPress: onContinue.onContinue, children: null };
  const obj2 = { style: tmp.continueContainer, children: null };
  const obj3 = { children: null };
  const obj4 = { style: tmp.continueText, children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["jMLfp/"]);
  obj3.children = __initData(native.LegacyText, obj4);
  const items = [__initData(View, obj3), ];
  const obj5 = { children: __initData(native.Icon, { style: tmp.continueIcon, source: _modDef10978, size: native.Icon.Sizes.SMALL, disableColor: true }) };
  items[1] = __initData(View, obj5);
  obj2.children = items;
  obj.children = __initData2(View, obj2);
  return __initData(Pressables.PressableOpacity, obj);
});