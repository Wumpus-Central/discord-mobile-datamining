// === Module 9898: StageActionBarButtons ===

// Module 9898 (StageActionBarButtons)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4296 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4527 */;
import spring from "spring" /* 4974 */;
import Pressables from "Pressables" /* 5123 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 8393 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 8394 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 8398 */;
import _modDef8408 from "module_8408" /* 8408 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8411 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8413 */;
import Form from "Form" /* 8593 */;
import _modDef8615 from "module_8615" /* 8615 */;
import CallBarActionAll from "CallBarAction" /* 9497 */;
import useStageChannelConnectAction from "useStageChannelConnectAction" /* 9674 */;
import _modDef9900 from "module_9900" /* 9900 */;
import StageMusicActionCreators from "StageMusicActionCreators" /* 9913 */;
import shouldShowEndStageModalDefault from "shouldShowEndStageModal" /* 9914 */;
import _modDef9939 from "module_9939" /* 9939 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import StageMusicStore from "StageMusicStore" /* 9899 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
class AgeVerificationSpeakerActionSheet {
  constructor(arg0) {
    onClose = global.onClose;
    handleDismiss = function handleDismiss() {
      onClose();
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    tmp = closure_15();
    obj = { startExpanded: true, onDismiss: handleDismiss, contentStyles: { paddingBottom: closure_1(closure_3[35])().bottom }, header: null, children: null };
    obj = { style: tmp.header, children: jsx(onClose(closure_3[37]).TrafficConeSpotIllustration, { width: 120, height: 120 }) };
    obj.header = jsx(View, obj);
    obj1 = { style: tmp.container, children: null };
    obj2 = { style: tmp.content, children: null };
    obj3 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
    intl = onClose(closure_3[12]).intl;
    obj3.children = intl.string(onClose(closure_3[12]).t.zvubnM);
    items = [, ];
    items[0] = jsx(onClose(closure_3[38]).Text, obj3);
    obj4 = { variant: "text-md/normal", color: "text-default", style: tmp.body, children: null };
    intl2 = onClose(closure_3[12]).intl;
    obj4.children = intl2.string(onClose(closure_3[12]).t["/wx+J2"]);
    items[1] = jsx(onClose(closure_3[38]).Text, obj4);
    obj2.children = items;
    items1 = [, ];
    items1[0] = jsxs(View, obj2);
    obj5 = { style: tmp.footer, children: null };
    obj6 = {
      size: "lg",
      onPress() {
            const obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT };
            const result = obj.showAgeVerificationGetStartedModal(obj);
            onClose();
            ActionSheetActionCreatorsDefault.hideActionSheet();
          },
      text: null
    };
    intl3 = onClose(closure_3[12]).intl;
    obj6.text = intl3.string(onClose(closure_3[12]).t.KXVgjt);
    items2 = [, ];
    items2[0] = jsx(onClose(closure_3[39]).Button, obj6);
    obj7 = { size: "lg", onPress: handleDismiss, text: null, variant: "secondary" };
    intl4 = onClose(closure_3[12]).intl;
    obj7.text = intl4.string(onClose(closure_3[12]).t.WAI6xu);
    items2[1] = jsx(onClose(closure_3[39]).Button, obj7);
    obj5.children = items2;
    items1[1] = jsxs(View, obj5);
    obj1.children = items1;
    obj.children = jsxs(View, obj1);
    return jsx(onClose(closure_3[36]).ActionSheet, obj);
  }
}
class AnimatedPrompt {
  constructor(arg0) {
    show = global.show;
    ({ children, style } = global);
    tmp = closure_14();
    obj = show(closure_3[15]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    obj2 = show(closure_3[53]);
    fn = function c() {
      let obj = spring;
      let num = 20;
      if (show) {
        num = 0;
      }
      obj = { marginTop: obj.withSpring(num, closure_17), opacity: null };
      let num2 = 0;
      if (show) {
        num2 = 1;
      }
      obj.opacity = spring.withSpring(num2, closure_17);
      return obj;
    };
    obj = { withSpring: show(closure_3[54]).withSpring, show, actionBarAnimationConfig: closure_17 };
    fn.__closure = obj;
    fn.__workletHash = 5255980384921;
    fn.__initData = closure_18;
    animatedStyle = obj2.useAnimatedStyle(fn);
    tmp4 = jsx;
    items1 = [, , ];
    items1[0] = tmp.actionBarCTAContainer;
    items1[1] = style;
    tmp5 = undefined;
    if (!stateFromStores) {
      tmp5 = animatedStyle;
    }
    items1[2] = tmp5;
    return tmp4(closure_1(closure_3[53]).View, { style: items1, children });
  }
}
class StartStagePrompt {
  constructor(arg0) {
    ({ channel, isLive } = global);
    tmp = closure_14();
    obj = {
      onPress() {
            if (!isLive) {
              const result = StageChannelActionCreatorExtras.openStageChannelSettings(_require);
            }
          },
      iconSource: isLive(closure_3[57]),
      iconStyle: null,
      iconContainerStyle: null,
      style: global.style,
      completed: isLive,
      title: null,
      subtitle: null
    };
    ({ iconStyle: obj.iconStyle, iconContainerStyle: obj.iconContainerStyle } = tmp);
    intl = channel(closure_3[12]).intl;
    obj.title = intl.string(channel(closure_3[12]).t.OYbHfv);
    intl2 = channel(closure_3[12]).intl;
    obj.subtitle = intl2.string(channel(closure_3[12]).t.yXwLMQ);
    return jsx(channel(closure_3[56]).FormCTA, obj);
  }
}
const View = fn(17).View;
let closure_10 = fn(5414).REQUEST_TO_SPEAK_SHEET_KEY;
const NOOP = fn(1074).NOOP;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let createStyles = { actionBarCTAContainer: { position: "relative" }, imageStyle: null, iconStyle: null, iconContainerStyle: null, continueContainer: null, continueText: null, continueIcon: null };
createStyles = { tintColor: nativeDefault.colors.WHITE };
createStyles.imageStyle = createStyles;
let size = { tintColor: nativeDefault.colors.WHITE, width: 20, height: 20 };
createStyles.iconStyle = size;
createStyles.iconContainerStyle = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, borderRadius: nativeDefault.radii.lg, padding: 4 };
createStyles.continueContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 16 };
let obj1 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, borderRadius: nativeDefault.radii.lg, padding: 4 };
createStyles.continueText = { color: nativeDefault.unsafe_rawColors.BLUE_345, fontSize: 14, lineHeight: 18 };
let obj2 = { color: nativeDefault.unsafe_rawColors.BLUE_345, fontSize: 14, lineHeight: 18 };
createStyles.continueIcon = { tintColor: nativeDefault.unsafe_rawColors.BLUE_345 };
const value = createStyles.createStyles(createStyles);
fn(4560);
let obj4 = { container: null, header: null, content: null, title: null, body: null, footer: null };
let obj3 = { tintColor: nativeDefault.unsafe_rawColors.BLUE_345 };
obj4.container = { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_24 };
obj4.header = { alignItems: "center" };
let obj5 = { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_24 };
obj4.content = { gap: nativeDefault.space.PX_8 };
obj4.title = { textAlign: "center" };
obj4.body = { textAlign: "center" };
createStyles = { gap: nativeDefault.space.PX_12 };
obj4.footer = createStyles;
const __initData = createStyles.createStyles(obj4);
const actionBarAnimationConfig = { mass: 1, stiffness: 100, damping: 30, overshootClamping: false, restSpeedThreshold: 0.01, restDisplacementThreshold: 0.01 };
const collapsedCategories = { code: "function StageActionBarButtonsTsx1(){const{withSpring,show,actionBarAnimationConfig}=this.__closure;return{marginTop:withSpring(show?0:20,actionBarAnimationConfig),opacity:withSpring(show?1:0,actionBarAnimationConfig)};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageActionBarButtons.tsx");

export const MoveToAudienceButton = function MoveToAudienceButton(channel) {
  channel = channel.channel;
  const obj = { accessibilityLabel: null, source: null, onPress: null, isSmallSize: null };
  const intl = channel(1114).intl;
  obj.accessibilityLabel = intl.string(channel(1114).t.ezLpY6);
  obj.source = _modDef9900;
  obj.onPress = function onPress() {
    const result = StageChannelActionCreators.audienceAckRequestToSpeak(channel, true);
  };
  obj.isSmallSize = channel.isSmallSize;
  return closure_12(CallBarActionAll.ActionButton, obj);
};
export const MusicMuteButton = function MusicMuteButton(arg0) {
  let stateFromStores;
  ({ channel, isSmallSize } = arg0);
  let imageStyle = closure_14();
  let tmpResult = dependencyMap;
  let obj = stateFromStores(504);
  const items = [StageMusicStore];
  stateFromStores = obj.useStateFromStores(items, () => muted.isMuted());
  if (!obj2.useShowStageMusicMuteButton(channel.id)) {
    return null;
  } else {
    const intl = tmp(1114).intl;
    const string = intl.string;
    const t = tmp(1114).t;
    if (stateFromStores) {
      let stringResult = string(t.ScHlfl);
    } else {
      stringResult = string(t.zqxfrf);
    }
    obj = { accessibilityLabel: stringResult, source: importDefault(stateFromStores ? 9907 : 9908), IconComponent: null, imageStyle: null, onPress: null, isSmallSize: null };
    if (stateFromStores) {
      tmpResult = tmp(9909);
      let MusicIcon = tmpResult.MusicSlashIcon;
    } else {
      MusicIcon = tmp(9911).MusicIcon;
    }
    obj.IconComponent = MusicIcon;
    imageStyle = imageStyle.imageStyle;
    obj.imageStyle = imageStyle;
    obj.onPress = function onPress() {
      return StageMusicActionCreators.updateStageMusicMuted(!stateFromStores);
    };
    obj.isSmallSize = isSmallSize;
    closure_12(CallBarActionAll.ActionButton, obj);
  }
};
export const DisconnectStageButton = function DisconnectStageButton(channel) {
  channel = channel.channel;
  const obj = { accessibilityLabel: null, source: null, IconComponent: null, onPress: null, isSmallSize: null };
  const intl = channel(1114).intl;
  obj.accessibilityLabel = intl.string(channel(1114).t.SMKyih);
  obj.source = _modDef8615;
  obj.IconComponent = channel(9073).DoorExitIcon;
  obj.onPress = function onPress() {
    if (shouldShowEndStageModalDefault(channel)) {
      let tmp3Result = tmp3(8394);
      tmp3Result.openEndStageModal(tmp2);
    } else {
      tmp3Result = tmp3(9082);
      tmp3Result.handleDisconnect(tmp2);
    }
  };
  obj.isSmallSize = channel.isSmallSize;
  return closure_12(CallBarActionAll.PrimaryActionButton, obj);
};
export const RequestToSpeakListButton = function RequestToSpeakListButton(channel) {
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  let analyticsLocations;
  function handleOpenAudienceList() {
    const obj = { channelId: channel.id, analyticsLocations };
    obj.openLazy(asyncRequireImpl(9915, dependencyMap.paths), closure_10, obj);
  }
  analyticsLocations = analyticsLocations(7162)().analyticsLocations;
  let obj = channel(5431);
  const stageParticipantsCount = obj.useStageParticipantsCount(channel.id, channel(5425).StageChannelParticipantNamedIndex.REQUESTED_TO_SPEAK_ONLY);
  if (stageParticipantsCount > 0) {
    obj = { accessibilityLabel: null, source: null, imageStyle: null, IconComponent: null, onPress: null, notifications: null, isSmallSize: null };
    const intl = tmp3(1114).intl;
    obj = { count: stageParticipantsCount };
    obj.accessibilityLabel = intl.formatToPlainString(tmp3(1114).t.OhK58v, obj);
    obj.source = tmp(9927);
    const obj1 = { tintColor: tmp(576).unsafe_rawColors.WHITE };
    obj.imageStyle = obj1;
    obj.IconComponent = tmp3(9928).HandRequestSpeakListIcon;
    obj.onPress = handleOpenAudienceList;
    obj.notifications = stageParticipantsCount;
    obj.isSmallSize = isSmallSize;
    let tmp7 = closure_12(CallBarActionAll.NotifiedActionButton, obj);
  } else {
    const obj2 = { accessibilityLabel: null, source: null, imageStyle: null, IconComponent: null, onPress: null, isSmallSize: null };
    const intl2 = tmp3(1114).intl;
    obj2.accessibilityLabel = intl2.string(tmp3(1114).t.KJnyvh);
    obj2.source = tmp(9927);
    const obj3 = { tintColor: tmp(576).unsafe_rawColors.WHITE };
    obj2.imageStyle = obj3;
    obj2.IconComponent = tmp3(9928).HandRequestSpeakListIcon;
    obj2.onPress = handleOpenAudienceList;
    obj2.isSmallSize = isSmallSize;
    tmp7 = closure_12(CallBarActionAll.ActionButton, obj2);
  }
  return tmp7;
};
export { AgeVerificationSpeakerActionSheet };
export const RequestToSpeakButton = function RequestToSpeakButton(channel) {
  channel = channel.channel;
  _require = undefined;
  let first;
  let shouldAgeVerifyToSpeakForCurrentUser;
  let shouldShowAgeVerificationPopover;
  [tmp4, c0] = shouldShowAgeVerificationPopover(first(shouldAgeVerifyToSpeakForCurrentUser[42])(channel), 2);
  let obj = require("useLocalStorageState");
  const tmp6 = shouldShowAgeVerificationPopover(obj.useLocalStorageState("age-verification-stage-popover-dismissed", false), 2);
  first = tmp6[0];
  importAll = tmp8;
  let tmp = first;
  const tmp3 = shouldShowAgeVerificationPopover(first(shouldAgeVerifyToSpeakForCurrentUser[42])(channel), 2);
  shouldAgeVerifyToSpeakForCurrentUser = require("useStageSpeakingForCurrentUser").useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
  const obj2 = require("useStageSpeakingForCurrentUser");
  shouldShowAgeVerificationPopover = require("useStageSpeakingForCurrentUser").useShouldShowAgeVerificationPopover(channel.id);
  const items = [shouldShowAgeVerificationPopover, first, tmp6[1]];
  const effect = noop.useEffect(() => {
    let tmp = shouldShowAgeVerificationPopover;
    if (shouldShowAgeVerificationPopover) {
      tmp = !first;
    }
    if (tmp) {
      let obj = { content: null, key: "AgeVerificationSpeakerActionSheet" };
      obj = {
        onClose() {
            return closure_1_2(true);
          }
      };
      obj.content = closure_2_12(AgeVerificationSpeakerActionSheet, obj);
      obj.showActionSheet(obj);
    }
  }, items);
  const obj3 = require("useStageSpeakingForCurrentUser");
  const canRaiseHand = require("useCanRaiseHand").useCanRaiseHand(channel);
  let tmp13 = !canRaiseHand;
  if (!canRaiseHand) {
    tmp13 = !tmp4;
  }
  const intl = tmp5(tmp2[12]).intl;
  const string = intl.string;
  const t = tmp5(tmp2[12]).t;
  if (tmp4) {
    let stringResult = string(t.GCimTk);
  } else {
    stringResult = string(t.hLbG5N);
  }
  obj = { accessibilityLabel: stringResult, isActive: tmp4, source: tmp(tmp2[46]), IconComponent: null, onPress: null, appearsDisabled: null, isSmallSize: null };
  if (shouldAgeVerifyToSpeakForCurrentUser) {
    let HandRequestSpeakIcon = tmp5(tmp2[47]).HandRequestDenyIcon;
  } else {
    HandRequestSpeakIcon = tmp5(tmp2[48]).HandRequestSpeakIcon;
  }
  obj.IconComponent = HandRequestSpeakIcon;
  obj.onPress = tmp13 ? NOOP : (() => {
    if (shouldAgeVerifyToSpeakForCurrentUser) {
      const obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
      const result = obj.showAgeVerificationGetStartedModal(obj);
    } else {
      _undefined();
    }
  });
  obj.appearsDisabled = tmp13;
  obj.isSmallSize = channel.isSmallSize;
  return closure_12(require("CallBarAction").ToggledActionButton, obj);
};
export const ChatButton = function ChatButton(channel) {
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  let obj = channel(504);
  const items = [ReadStateStore];
  const items1 = [channel.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ unreadCount: ReadStateStore.getUnreadCount(channel.id), mentionCount: ReadStateStore.getMentionCount(channel.id) }), items1);
  ({ unreadCount, mentionCount } = stateFromStoresObject);
  let obj1 = channel(9937);
  const isVoiceChannelLocked = obj1.useIsVoiceChannelLocked(channel);
  let obj2 = channel(9589);
  const voiceChatNavigationContext = obj2.useVoiceChatNavigationContext();
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
      obj = { imageStyle: null, accessibilityLabel: null, IconComponent: null, source: null, onPress: null, appearsDisabled: null, isSmallSize: null };
      obj = { tintColor: isVoiceChannelLocked(576).unsafe_rawColors.WHITE };
      obj.imageStyle = obj;
      const intl2 = tmp(1114).intl;
      obj.accessibilityLabel = intl2.string(tmp(1114).t.ZXxLQg);
      obj.IconComponent = tmp(5071).ChatIcon;
      obj.source = isVoiceChannelLocked(9938);
      obj.onPress = onPress;
      obj.appearsDisabled = isVoiceChannelLocked;
      obj.isSmallSize = isSmallSize;
      let tmp7Result = closure_12(openChat(9497).ActionButton, obj);
    }
    return tmp7Result;
  }
  if (mentionCount > 0) {
    unreadCount = mentionCount;
  }
  obj1 = { notifications: unreadCount, isMentioned: mentionCount > 0, imageStyle: null, accessibilityLabel: null, IconComponent: null, source: null, onPress: null, appearsDisabled: null, isSmallSize: null };
  obj2 = { tintColor: isVoiceChannelLocked(576).unsafe_rawColors.WHITE };
  obj1.imageStyle = obj2;
  const intl = tmp(1114).intl;
  obj1.accessibilityLabel = intl.string(channel(1114).t.ZXxLQg);
  obj1.IconComponent = channel(5071).ChatIcon;
  obj1.source = isVoiceChannelLocked(9938);
  obj1.onPress = onPress;
  obj1.appearsDisabled = isVoiceChannelLocked;
  obj1.isSmallSize = isSmallSize;
  tmp7Result = closure_12(openChat(9497).NotifiedActionButton, obj1);
};
export { AnimatedPrompt };
export const AnimatedStartStagePrompt = function AnimatedStartStagePrompt(channel) {
  channel = channel.channel;
  let obj = useStageChannelConnectAction;
  const isLive = obj.useStageChannelStartEvent(channel.id).isLive;
  let tmp = _slicedToArray(noop.useState(false), 2);
  const show = tmp[0];
  closure_2 = tmp[1];
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  const first1 = tmp3[0];
  closure_4 = tmp3[1];
  const tmp5 = _slicedToArray(noop.useState(isLive), 2);
  const first2 = tmp5[0];
  closure_6 = tmp5[1];
  const items = [isLive, show, first1];
  const effect = noop.useEffect(() => {
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
  const effect1 = noop.useEffect(() => {
    const timeout = setTimeout(() => {
      closure_1_4(true);
    }, 400);
    return () => {
      clearTimeout(closure_0);
    };
  }, []);
  const items1 = [isLive, show, first2];
  const effect2 = noop.useEffect(() => {
    if (timeout) {
      if (!first) {
        if (!first2) {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            closure_1_6(true);
          }, 400);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
    }
  }, items1);
  let tmp10 = null;
  if (!first2) {
    obj = { show, children: null };
    obj = { channel, isLive, style: channel.style };
    obj.children = closure_1_12(StartStagePrompt, obj);
    tmp10 = closure_1_12(AnimatedPrompt, obj);
  }
  return tmp10;
};
export { StartStagePrompt };
export const JoinStagePrompt = function JoinStagePrompt(channel) {
  channel = channel.channel;
  const obj = {
    onPress() {
      StageChannelModalActionCreators.connectAndOpen(channel);
    },
    iconSource: _modDef8408,
    iconStyle: null,
    iconContainerStyle: null,
    style: channel.style,
    title: null,
    subtitle: null
  };
  ({ iconStyle: obj.iconStyle, iconContainerStyle: obj.iconContainerStyle } = closure_14());
  const intl = channel(1114).intl;
  obj.title = intl.string(channel(1114).t["7vb2cc"]);
  const intl2 = channel(1114).intl;
  obj.subtitle = intl2.string(channel(1114).t.lyCW4E);
  return closure_12(channel(8593).FormCTA, obj);
};
export const ContinueToStagePrompt = function ContinueToStagePrompt(onContinue) {
  const tmp = closure_14();
  let obj = { accessibilityRole: "button", onPress: onContinue.onContinue, children: null };
  obj = { style: tmp.continueContainer, children: null };
  obj = { children: null };
  const obj1 = { style: tmp.continueText, children: null };
  const intl = util.intl;
  obj1.children = intl.string(util.t["jMLfp/"]);
  obj.children = closure_1_12(native.LegacyText, obj1);
  const items = [closure_1_12(View, obj), ];
  const obj2 = { children: closure_1_12(native.Icon, { style: tmp.continueIcon, source: _modDef9939, size: native.Icon.Sizes.SMALL, disableColor: true }) };
  items[1] = closure_1_12(View, obj2);
  obj.children = items;
  obj.children = map1(View, obj);
  return closure_1_12(Pressables.PressableOpacity, obj);
};