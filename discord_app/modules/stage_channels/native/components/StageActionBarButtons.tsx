// discord_app/modules/stage_channels/native/components/StageActionBarButtons.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import StageChannelModalActionCreators from "../../StageChannelModalActionCreators.tsx";
import StageChannelActionCreatorExtras from "../../StageChannelActionCreatorExtras.native.tsx";
import StageChannelActionCreators from "../../StageChannelActionCreators.tsx";
import _modDef8679 from "../../../../../_runtime/metro/08679__.js";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import _modDef8893 from "../../../../../_runtime/metro/08893__.js";
import CallBarActionAll from "../../../video_calls/native/components/CallBarAction.tsx";
import useStageChannelConnectAction from "../../useStageChannelConnectAction.tsx";
import CallsUtils from "../../../voice_calls/native/CallsUtils.tsx";
import _modDef10156 from "../../../../../_runtime/metro/10156__.js";
import StageMusicActionCreators from "../../StageMusicActionCreators.tsx";
import shouldShowEndStageModalDefault from "../../shouldShowEndStageModal.tsx";
import _modDef10197 from "../../../../../_runtime/metro/10197__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import StageMusicStore from "../../StageMusicStore.tsx";

const require = globalThis.__r;
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
    obj = {
      startExpanded: true,
      onDismiss: handleDismiss,
      contentStyles: { paddingBottom: closure_1(closure_3[35])().bottom },
      header: null,
      children: null,
    };
    obj1 = {
      style: tmp.header,
      children: jsx(onClose(closure_3[37]).TrafficConeSpotIllustration, { width: 120, height: 120 }),
    };
    obj.header = jsx(View, obj1);
    obj10 = { style: tmp.container, children: null };
    obj11 = { style: tmp.content, children: null };
    obj12 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
    intl = onClose(closure_3[12]).intl;
    obj12.children = intl.string(onClose(closure_3[12]).t.zvubnM);
    items = [,];
    items[0] = jsx(onClose(closure_3[38]).Text, obj12);
    obj13 = { variant: "text-md/normal", color: "text-default", style: tmp.body, children: null };
    intl2 = onClose(closure_3[12]).intl;
    obj13.children = intl2.string(onClose(closure_3[12]).t["/wx+J2"]);
    items[1] = jsx(onClose(closure_3[38]).Text, obj13);
    obj11.children = items;
    items1 = [,];
    items1[0] = jsxs(View, obj11);
    obj14 = { style: tmp.footer, children: null };
    obj15 = {
      size: "lg",
      onPress() {
        const obj = AgeVerificationActionCreatorsDefault;
        const result = obj.showAgeVerificationGetStartedModal({
          entryPoint:
            AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT,
        });
        onClose();
        const obj2 = {
          entryPoint:
            AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT,
        };
        ActionSheetActionCreatorsDefault.hideActionSheet();
      },
      text: null,
    };
    intl3 = onClose(closure_3[12]).intl;
    obj15.text = intl3.string(onClose(closure_3[12]).t.KXVgjt);
    items2 = [,];
    items2[0] = jsx(onClose(closure_3[39]).Button, obj15);
    obj16 = { size: "lg", onPress: handleDismiss, text: null, variant: "secondary" };
    intl4 = onClose(closure_3[12]).intl;
    obj16.text = intl4.string(onClose(closure_3[12]).t.WAI6xu);
    items2[1] = jsx(onClose(closure_3[39]).Button, obj16);
    obj14.children = items2;
    items1[1] = jsxs(View, obj14);
    obj10.children = items1;
    obj.children = jsxs(View, obj10);
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
      let num = 20;
      if (show) {
        num = 0;
      }
      const obj2 = { marginTop: spring.withSpring(num, closure_17), opacity: null };
      let num2 = 0;
      if (show) {
        num2 = 1;
      }
      obj2.opacity = spring.withSpring(num2, closure_17);
      return obj2;
    };
    obj1 = { withSpring: show(closure_3[54]).withSpring, show, actionBarAnimationConfig: closure_17 };
    fn.__closure = obj1;
    fn.__workletHash = 5255980384921;
    fn.__initData = closure_18;
    animatedStyle = obj2.useAnimatedStyle(fn);
    tmp4 = jsx;
    items1 = [, ,];
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
      subtitle: null,
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
let closure_10 = fn(5631).REQUEST_TO_SPEAK_SHEET_KEY;
const NOOP = fn(1074).NOOP;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let createStyles = fn(4756);
let obj2 = {
  actionBarCTAContainer: { position: "relative" },
  imageStyle: { tintColor: nativeDefault.colors.WHITE },
  iconStyle: null,
  iconContainerStyle: null,
  continueContainer: null,
  continueText: null,
  continueIcon: null,
};
let size = { tintColor: nativeDefault.colors.WHITE, width: 20, height: 20 };
obj2.iconStyle = size;
let obj3 = { tintColor: nativeDefault.colors.WHITE };
obj2.iconContainerStyle = {
  backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360,
  borderRadius: nativeDefault.radii.lg,
  padding: 4,
};
obj2.continueContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 16 };
let obj4 = {
  backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360,
  borderRadius: nativeDefault.radii.lg,
  padding: 4,
};
obj2.continueText = { color: nativeDefault.unsafe_rawColors.BLUE_345, fontSize: 14, lineHeight: 18 };
let obj5 = { color: nativeDefault.unsafe_rawColors.BLUE_345, fontSize: 14, lineHeight: 18 };
obj2.continueIcon = { tintColor: nativeDefault.unsafe_rawColors.BLUE_345 };
const value = createStyles.createStyles(obj2);
createStyles = fn(4756);
let obj7 = { container: null, header: null, content: null, title: null, body: null, footer: null };
let obj6 = { tintColor: nativeDefault.unsafe_rawColors.BLUE_345 };
obj7.container = { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_24 };
obj7.header = { alignItems: "center" };
let obj9 = { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_24 };
obj7.content = { gap: nativeDefault.space.PX_8 };
obj7.title = { textAlign: "center" };
obj7.body = { textAlign: "center" };
const obj10 = { gap: nativeDefault.space.PX_8 };
obj7.footer = { gap: nativeDefault.space.PX_12 };
const __initData = createStyles.createStyles(obj7);
const actionBarAnimationConfig = {
  mass: 1,
  stiffness: 100,
  damping: 30,
  overshootClamping: false,
  restSpeedThreshold: 0.01,
  restDisplacementThreshold: 0.01,
};
const collapsedCategories = {
  code: "function StageActionBarButtonsTsx1(){const{withSpring,show,actionBarAnimationConfig}=this.__closure;return{marginTop:withSpring(show?0:20,actionBarAnimationConfig),opacity:withSpring(show?1:0,actionBarAnimationConfig)};}",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageActionBarButtons.tsx");

export const MoveToAudienceButton = function MoveToAudienceButton(channel) {
  channel = channel.channel;
  const obj = { accessibilityLabel: null, source: null, onPress: null, isSmallSize: null };
  const intl = channel(1115).intl;
  obj.accessibilityLabel = intl.string(channel(1115).t.ezLpY6);
  obj.source = _modDef10156;
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
  const items = [StageMusicStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => muted.isMuted());
  const obj = stateFromStores(504);
  if (!obj2.useShowStageMusicMuteButton(channel.id)) {
    return null;
  } else {
    const intl = tmp(1115).intl;
    const string = intl.string;
    const t = tmp(1115).t;
    if (stateFromStores) {
      let stringResult = string(t.ScHlfl);
    } else {
      stringResult = string(t.zqxfrf);
    }
    const obj3 = {
      accessibilityLabel: stringResult,
      source: importDefault(stateFromStores ? 10163 : 10164),
      IconComponent: null,
      imageStyle: null,
      onPress: null,
      isSmallSize: null,
    };
    if (stateFromStores) {
      tmpResult = tmp(10165);
      let MusicIcon = tmpResult.MusicSlashIcon;
    } else {
      MusicIcon = tmp(10167).MusicIcon;
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
  obj2 = stateFromStores(10157);
};
export const DisconnectStageButton = function DisconnectStageButton(channel) {
  channel = channel.channel;
  const obj = { accessibilityLabel: null, source: null, IconComponent: null, onPress: null, isSmallSize: null };
  const intl = channel(1115).intl;
  obj.accessibilityLabel = intl.string(channel(1115).t.SMKyih);
  obj.source = _modDef8893;
  obj.IconComponent = channel(10170).DoorExitIcon;
  obj.onPress = function onPress() {
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
};
export const RequestToSpeakListButton = function RequestToSpeakListButton(channel) {
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  let analyticsLocations;
  function handleOpenAudienceList() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10173, dependencyMap.paths), closure_10, {
      channelId: channel.id,
      analyticsLocations,
    });
  }
  analyticsLocations = analyticsLocations(7407)().analyticsLocations;
  const stageParticipantsCount = channel(5648).useStageParticipantsCount(
    channel.id,
    channel(5642).StageChannelParticipantNamedIndex.REQUESTED_TO_SPEAK_ONLY,
  );
  if (stageParticipantsCount > 0) {
    const obj2 = {
      accessibilityLabel: null,
      source: null,
      imageStyle: null,
      IconComponent: null,
      onPress: null,
      notifications: null,
      isSmallSize: null,
    };
    const intl = tmp3(1115).intl;
    const obj3 = { count: stageParticipantsCount };
    obj2.accessibilityLabel = intl.formatToPlainString(tmp3(1115).t.OhK58v, obj3);
    obj2.source = tmp(10185);
    const obj4 = { tintColor: tmp(576).unsafe_rawColors.WHITE };
    obj2.imageStyle = obj4;
    obj2.IconComponent = tmp3(10186).HandRequestSpeakListIcon;
    obj2.onPress = handleOpenAudienceList;
    obj2.notifications = stageParticipantsCount;
    obj2.isSmallSize = isSmallSize;
    let tmp7 = closure_12(CallBarActionAll.NotifiedActionButton, obj2);
  } else {
    const obj5 = {
      accessibilityLabel: null,
      source: null,
      imageStyle: null,
      IconComponent: null,
      onPress: null,
      isSmallSize: null,
    };
    const intl2 = tmp3(1115).intl;
    obj5.accessibilityLabel = intl2.string(tmp3(1115).t.KJnyvh);
    obj5.source = tmp(10185);
    const obj6 = { tintColor: tmp(576).unsafe_rawColors.WHITE };
    obj5.imageStyle = obj6;
    obj5.IconComponent = tmp3(10186).HandRequestSpeakListIcon;
    obj5.onPress = handleOpenAudienceList;
    obj5.isSmallSize = isSmallSize;
    tmp7 = closure_12(CallBarActionAll.ActionButton, obj5);
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
  let tmp = first;
  const tmp3 = shouldShowAgeVerificationPopover(first(shouldAgeVerifyToSpeakForCurrentUser[42])(channel), 2);
  const tmp6 = shouldShowAgeVerificationPopover(
    require("useLocalStorageState").useLocalStorageState("age-verification-stage-popover-dismissed", false),
    2,
  );
  first = tmp6[0];
  importAll = tmp8;
  let obj = require("useLocalStorageState");
  shouldAgeVerifyToSpeakForCurrentUser =
    require("useStageSpeakingForCurrentUser").useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
  let obj2 = require("useStageSpeakingForCurrentUser");
  shouldShowAgeVerificationPopover = require("useStageSpeakingForCurrentUser").useShouldShowAgeVerificationPopover(
    channel.id,
  );
  const items = [shouldShowAgeVerificationPopover, first, tmp6[1]];
  const effect = noop.useEffect(() => {
    let tmp = shouldShowAgeVerificationPopover;
    if (shouldShowAgeVerificationPopover) {
      tmp = !first;
    }
    if (tmp) {
      const obj2 = { content: null, key: "AgeVerificationSpeakerActionSheet" };
      const obj3 = {
        onClose() {
          return closure_1_2(true);
        },
      };
      obj2.content = closure_2_12(AgeVerificationSpeakerActionSheet, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items);
  let obj3 = require("useStageSpeakingForCurrentUser");
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
  const obj5 = {
    accessibilityLabel: stringResult,
    isActive: tmp4,
    source: tmp(shouldAgeVerifyToSpeakForCurrentUser[46]),
    IconComponent: null,
    onPress: null,
    appearsDisabled: null,
    isSmallSize: null,
  };
  if (shouldAgeVerifyToSpeakForCurrentUser) {
    let HandRequestSpeakIcon = tmp5(tmp2[47]).HandRequestDenyIcon;
  } else {
    HandRequestSpeakIcon = tmp5(tmp2[48]).HandRequestSpeakIcon;
  }
  obj5.IconComponent = HandRequestSpeakIcon;
  obj5.onPress = tmp13
    ? NOOP
    : () => {
        if (shouldAgeVerifyToSpeakForCurrentUser) {
          const obj2 = {
            entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND,
          };
          const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj2);
        } else {
          _undefined();
        }
      };
  obj5.appearsDisabled = tmp13;
  obj5.isSmallSize = channel.isSmallSize;
  return closure_12(require("CallBarAction").ToggledActionButton, obj5);
};
export const ChatButton = function ChatButton(channel) {
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  const items = [ReadStateStore];
  const items1 = [channel.id];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(
    items,
    () => ({
      unreadCount: ReadStateStore.getUnreadCount(channel.id),
      mentionCount: ReadStateStore.getMentionCount(channel.id),
    }),
    items1,
  );
  ({ unreadCount, mentionCount } = stateFromStoresObject);
  const obj = channel(504);
  const isVoiceChannelLocked = channel(10195).useIsVoiceChannelLocked(channel);
  const obj2 = channel(10195);
  const voiceChatNavigationContext = channel(9678).useVoiceChatNavigationContext();
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
      const obj4 = {
        imageStyle: null,
        accessibilityLabel: null,
        IconComponent: null,
        source: null,
        onPress: null,
        appearsDisabled: null,
        isSmallSize: null,
      };
      const obj5 = { tintColor: isVoiceChannelLocked(576).unsafe_rawColors.WHITE };
      obj4.imageStyle = obj5;
      const intl2 = tmp(1115).intl;
      obj4.accessibilityLabel = intl2.string(tmp(1115).t.ZXxLQg);
      obj4.IconComponent = tmp(5289).ChatIcon;
      obj4.source = isVoiceChannelLocked(10196);
      obj4.onPress = onPress;
      obj4.appearsDisabled = isVoiceChannelLocked;
      obj4.isSmallSize = isSmallSize;
      let tmp7Result = closure_12(openChat(9666).ActionButton, obj4);
    }
    return tmp7Result;
  }
  if (mentionCount > 0) {
    unreadCount = mentionCount;
  }
  const obj6 = {
    notifications: unreadCount,
    isMentioned: mentionCount > 0,
    imageStyle: null,
    accessibilityLabel: null,
    IconComponent: null,
    source: null,
    onPress: null,
    appearsDisabled: null,
    isSmallSize: null,
  };
  const obj3 = channel(9678);
  obj6.imageStyle = { tintColor: isVoiceChannelLocked(576).unsafe_rawColors.WHITE };
  const intl = tmp(1115).intl;
  obj6.accessibilityLabel = intl.string(channel(1115).t.ZXxLQg);
  obj6.IconComponent = channel(5289).ChatIcon;
  obj6.source = isVoiceChannelLocked(10196);
  obj6.onPress = onPress;
  obj6.appearsDisabled = isVoiceChannelLocked;
  obj6.isSmallSize = isSmallSize;
  tmp7Result = closure_12(openChat(9666).NotifiedActionButton, obj6);
  const obj7 = { tintColor: isVoiceChannelLocked(576).unsafe_rawColors.WHITE };
};
export { AnimatedPrompt };
export const AnimatedStartStagePrompt = function AnimatedStartStagePrompt(channel) {
  channel = channel.channel;
  show = undefined;
  closure_2 = undefined;
  first1 = undefined;
  closure_4 = undefined;
  first2 = undefined;
  closure_6 = undefined;
  const isLive = useStageChannelConnectAction.useStageChannelStartEvent(channel.id).isLive;
  [show, closure_2] = noop.useState(false);
  [first1, closure_4] = noop.useState(false);
  [first2, closure_6] = noop.useState(isLive);
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
    const obj2 = { show, children: null };
    const obj3 = { channel, isLive, style: channel.style };
    obj2.children = closure_1_12(StartStagePrompt, obj3);
    tmp10 = closure_1_12(AnimatedPrompt, obj2);
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
    iconSource: _modDef8679,
    iconStyle: null,
    iconContainerStyle: null,
    style: channel.style,
    title: null,
    subtitle: null,
  };
  ({ iconStyle: obj.iconStyle, iconContainerStyle: obj.iconContainerStyle } = closure_14());
  const intl = channel(1115).intl;
  obj.title = intl.string(channel(1115).t["7vb2cc"]);
  const intl2 = channel(1115).intl;
  obj.subtitle = intl2.string(channel(1115).t.lyCW4E);
  return closure_12(channel(8871).FormCTA, obj);
};
export const ContinueToStagePrompt = function ContinueToStagePrompt(onContinue) {
  const tmp = closure_14();
  const obj = { accessibilityRole: "button", onPress: onContinue.onContinue, children: null };
  const obj2 = { style: tmp.continueContainer, children: null };
  const obj3 = { children: null };
  const obj4 = { style: tmp.continueText, children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["jMLfp/"]);
  obj3.children = closure_1_12(native.LegacyText, obj4);
  const items = [closure_1_12(View, obj3)];
  const obj5 = {
    children: closure_1_12(native.Icon, {
      style: tmp.continueIcon,
      source: _modDef10197,
      size: native.Icon.Sizes.SMALL,
      disableColor: true,
    }),
  };
  items[1] = closure_1_12(View, obj5);
  obj2.children = items;
  obj.children = map1(View, obj2);
  return closure_1_12(Pressables.PressableOpacity, obj);
};
