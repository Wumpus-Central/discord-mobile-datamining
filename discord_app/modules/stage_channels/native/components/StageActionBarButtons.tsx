// discord_app/modules/stage_channels/native/components/StageActionBarButtons.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import asyncRequireImpl from "../../../../../_runtime/02123_asyncRequireImpl.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import AgeVerificationAnalyticsUtils from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import StageChannelActionCreatorExtras from "../../StageChannelActionCreatorExtras.native.tsx";
import StageChannelActionCreators from "../../StageChannelActionCreators.tsx";
import StageChannelModalActionCreators from "../../StageChannelModalActionCreators.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import _modDef9235 from "../../../../../_runtime/metro/09235__.js";
import CallsUtils from "../../../voice_calls/native/CallsUtils.tsx";
import CallBarActionAll from "../../../video_calls/native/components/CallBarAction.tsx";
import useStageChannelConnectAction from "../../useStageChannelConnectAction.tsx";
import _modDef12013 from "../../../../../_runtime/metro/12013__.js";
import StageMusicActionCreators from "../../StageMusicActionCreators.tsx";
import _modDef12020 from "../../../../../_runtime/metro/12020__.js";
import shouldShowEndStageModalDefault from "../../shouldShowEndStageModal.tsx";
import _modDef12048 from "../../../../../_runtime/metro/12048__.js";
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
    obj8 = { style: tmp.container, children: null };
    obj9 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
    intl = onClose(closure_3[12]).intl;
    obj9.children = intl.string(onClose(closure_3[12]).t.zvubnM);
    items = [,];
    items[0] = jsx(onClose(closure_3[38]).Text, obj9);
    obj10 = { style: tmp.footer, children: null };
    obj11 = {
      size: "lg",
      onPress: function handleAction() {
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
    intl2 = onClose(closure_3[12]).intl;
    obj11.text = intl2.string(onClose(closure_3[12]).t.KXVgjt);
    items1 = [,];
    items1[0] = jsx(onClose(closure_3[39]).Button, obj11);
    obj12 = { size: "lg", onPress: handleDismiss, text: null, variant: "secondary" };
    intl3 = onClose(closure_3[12]).intl;
    obj12.text = intl3.string(onClose(closure_3[12]).t.WAI6xu);
    items1[1] = jsx(onClose(closure_3[39]).Button, obj12);
    obj10.children = items1;
    items[1] = jsxs(View, obj10);
    obj8.children = items;
    obj.children = jsxs(View, obj8);
    return jsx(onClose(closure_3[36]).ActionSheet, obj);
  }
}
class AnimatedPrompt {
  constructor(arg0) {
    ({ show, children, style } = global);
    tmp = closure_14();
    tmp2 = closure_3;
    obj = closure_0(closure_3[15]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    obj2 = closure_0(closure_3[53]);
    items1 = [, , ,];
    items1[0] = closure_18;
    items1[1] = closure_0(closure_3[54]).withSpring;
    items1[2] = show;
    items1[3] = closure_17;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    [tmp4, tmp5, tmp6, tmp7] = items1;
    class StageActionBarButtonsTsx1 {
      constructor() {
        tmp = closure_0;
        num = 20;
        tmp2 = closure_1;
        if (closure_1) {
          num = 0;
        }
        obj = { marginTop: tmp(num, closure_2), opacity: null };
        tmp3 = closure_2;
        num2 = 0;
        if (tmp2) {
          num2 = 1;
        }
        obj.opacity = tmp(num2, tmp3);
        return obj;
      }
    }
    items2 = [, ,];
    items2[0] = tmp5;
    items2[1] = tmp6;
    items2[2] = tmp7;
    StageActionBarButtonsTsx1.__closure = items2;
    StageActionBarButtonsTsx1.__workletHash = 12579092742848;
    StageActionBarButtonsTsx1.__initData = tmp4;
    animatedStyle = obj2.useAnimatedStyle(StageActionBarButtonsTsx1);
    tmp9 = jsx;
    items3 = [, ,];
    items3[0] = tmp.actionBarCTAContainer;
    items3[1] = style;
    tmp10 = undefined;
    if (!stateFromStores) {
      tmp10 = animatedStyle;
    }
    items3[2] = tmp10;
    return tmp9(closure_1(tmp2[53]).View, { style: items3, children });
  }
}
class StartStagePrompt {
  constructor(arg0) {
    ({ channel, isLive } = global);
    tmp = closure_14();
    obj = {
      onPress: function handleStartStage() {
        if (!isLive) {
          const result = StageChannelActionCreatorExtras.openStageChannelSettings(_require);
        }
      },
      iconSource: isLive(closure_3[57]),
      iconStyle: tmp.promptIconStyle,
      style: global.style,
      completed: isLive,
      title: null,
      subtitle: null,
    };
    intl = channel(closure_3[12]).intl;
    obj.title = intl.string(channel(closure_3[12]).t.OYbHfv);
    intl2 = channel(closure_3[12]).intl;
    obj.subtitle = intl2.string(channel(closure_3[12]).t.yXwLMQ);
    return jsx(channel(closure_3[56]).FormCTA, obj);
  }
}
const View = fn(17).View;
let closure_10 = fn(6829).REQUEST_TO_SPEAK_SHEET_KEY;
const NOOP = fn(1072).NOOP;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let createStyles = fn(5141);
let obj2 = {
  actionBarCTAContainer: { position: "relative" },
  imageStyle: { tintColor: nativeDefault.colors.WHITE },
  iconStyle: null,
  iconContainerStyle: null,
  promptIconStyle: null,
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
const size1 = {
  tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT,
  width: nativeDefault.space.PX_24,
  height: nativeDefault.space.PX_24,
};
obj2.promptIconStyle = size1;
obj2.continueContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 16 };
let obj4 = {
  backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360,
  borderRadius: nativeDefault.radii.lg,
  padding: 4,
};
obj2.continueText = { color: nativeDefault.unsafe_rawColors.BLUE_345, fontSize: 14, lineHeight: 18 };
let obj5 = { color: nativeDefault.unsafe_rawColors.BLUE_345, fontSize: 14, lineHeight: 18 };
obj2.continueIcon = { tintColor: nativeDefault.unsafe_rawColors.BLUE_345 };
const gesture = createStyles.createStyles(obj2);
createStyles = fn(5141);
let obj7 = { container: null, header: null, title: null, footer: null };
let obj6 = { tintColor: nativeDefault.unsafe_rawColors.BLUE_345 };
obj7.container = { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_24 };
obj7.header = { alignItems: "center" };
obj7.title = { textAlign: "center" };
const obj8 = { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_24 };
obj7.footer = { gap: nativeDefault.space.PX_12 };
const value = createStyles.createStyles(obj7);
let closure_17 = { mass: 1, stiffness: 100, damping: 30, overshootClamping: false };
let closure_18 = {
  code: "(function StageActionBarButtonsTsx1(){let[withSpring,show,actionBarAnimationConfig]=this.__closure;return{marginTop:withSpring(show?0:20,actionBarAnimationConfig),opacity:withSpring(show?1:0,actionBarAnimationConfig)};})",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageActionBarButtons.tsx");

export function MoveToAudienceButton(channel) {
  channel = channel.channel;
  const obj = { accessibilityLabel: null, source: null, onPress: null, isSmallSize: null };
  const intl = channel(1113).intl;
  obj.accessibilityLabel = intl.string(channel(1113).t.ezLpY6);
  obj.source = _modDef12013;
  obj.onPress = function onPress() {
    const result = StageChannelActionCreators.audienceAckRequestToSpeak(channel, true);
  };
  obj.isSmallSize = channel.isSmallSize;
  return closure_12(CallBarActionAll.ActionButton, obj);
}
export function MusicMuteButton(arg0) {
  let stateFromStores;
  ({ channel, isSmallSize } = arg0);
  let imageStyle = closure_14();
  let tmpResult = dependencyMap;
  items = [StageMusicStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => muted.isMuted());
  const obj = stateFromStores(504);
  if (!obj2.useShowStageMusicMuteButton(channel.id)) {
    return null;
  } else {
    const intl = tmp(1113).intl;
    const string = intl.string;
    const t = tmp(1113).t;
    if (stateFromStores) {
      let stringResult = string(t.ScHlfl);
    } else {
      stringResult = string(t.zqxfrf);
    }
    const obj3 = {
      accessibilityLabel: stringResult,
      source: importDefault(stateFromStores ? 12015 : 12016),
      IconComponent: null,
      imageStyle: null,
      onPress: null,
      isSmallSize: null,
    };
    if (stateFromStores) {
      tmpResult = tmp(12017);
      let MusicIcon = tmpResult.MusicSlashIcon;
    } else {
      MusicIcon = tmp(10888).MusicIcon;
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
  obj2 = stateFromStores(12014);
}
export function DisconnectStageButton(channel) {
  channel = channel.channel;
  const obj = { accessibilityLabel: null, source: null, IconComponent: null, onPress: null, isSmallSize: null };
  const intl = channel(1113).intl;
  obj.accessibilityLabel = intl.string(channel(1113).t.SMKyih);
  obj.source = _modDef12020;
  obj.IconComponent = channel(12021).DoorExitIcon;
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
}
export function RequestToSpeakListButton(channel) {
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  let analyticsLocations;
  function handleOpenAudienceList() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12024, dependencyMap.paths), closure_10, {
      channelId: channel.id,
      analyticsLocations,
    });
  }
  analyticsLocations = analyticsLocations(7446)().analyticsLocations;
  const stageParticipantsCount = channel(6885).useStageParticipantsCount(
    channel.id,
    channel(6879).StageChannelParticipantNamedIndex.REQUESTED_TO_SPEAK_ONLY,
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
    const intl = tmp3(1113).intl;
    const obj3 = { count: stageParticipantsCount };
    obj2.accessibilityLabel = intl.formatToPlainString(tmp3(1113).t.OhK58v, obj3);
    obj2.source = tmp(12035);
    const obj4 = { tintColor: tmp(575).unsafe_rawColors.WHITE };
    obj2.imageStyle = obj4;
    obj2.IconComponent = tmp3(12036).HandRequestSpeakListIcon;
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
    const intl2 = tmp3(1113).intl;
    obj5.accessibilityLabel = intl2.string(tmp3(1113).t.KJnyvh);
    obj5.source = tmp(12035);
    const obj6 = { tintColor: tmp(575).unsafe_rawColors.WHITE };
    obj5.imageStyle = obj6;
    obj5.IconComponent = tmp3(12036).HandRequestSpeakListIcon;
    obj5.onPress = handleOpenAudienceList;
    obj5.isSmallSize = isSmallSize;
    tmp7 = closure_12(CallBarActionAll.ActionButton, obj5);
  }
  return tmp7;
}
export { AgeVerificationSpeakerActionSheet };
export function RequestToSpeakButton(channel) {
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
  items = [shouldShowAgeVerificationPopover, first, tmp6[1]];
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
      obj2.content = application_id(AgeVerificationSpeakerActionSheet, obj3);
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
    : function handlePress() {
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
}
export function ChatButton(channel) {
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  items = [ReadStateStore];
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
  const isVoiceChannelLocked = channel(12046).useIsVoiceChannelLocked(channel);
  const obj2 = channel(12046);
  const voiceChatNavigationContext = channel(11139).useVoiceChatNavigationContext();
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
      const obj5 = { tintColor: isVoiceChannelLocked(575).unsafe_rawColors.WHITE };
      obj4.imageStyle = obj5;
      const intl2 = tmp(1113).intl;
      obj4.accessibilityLabel = intl2.string(tmp(1113).t.ZXxLQg);
      obj4.IconComponent = tmp(8767).ChatIcon;
      obj4.source = isVoiceChannelLocked(12047);
      obj4.onPress = onPress;
      obj4.appearsDisabled = isVoiceChannelLocked;
      obj4.isSmallSize = isSmallSize;
      let tmp7Result = closure_12(openChat(11852).ActionButton, obj4);
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
  const obj3 = channel(11139);
  obj6.imageStyle = { tintColor: isVoiceChannelLocked(575).unsafe_rawColors.WHITE };
  const intl = tmp(1113).intl;
  obj6.accessibilityLabel = intl.string(channel(1113).t.ZXxLQg);
  obj6.IconComponent = channel(8767).ChatIcon;
  obj6.source = isVoiceChannelLocked(12047);
  obj6.onPress = onPress;
  obj6.appearsDisabled = isVoiceChannelLocked;
  obj6.isSmallSize = isSmallSize;
  tmp7Result = closure_12(openChat(11852).NotifiedActionButton, obj6);
  const obj7 = { tintColor: isVoiceChannelLocked(575).unsafe_rawColors.WHITE };
}
export { AnimatedPrompt };
export function AnimatedStartStagePrompt(channel) {
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
  items = [isLive, show, first1];
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
    obj2.children = application_id(StartStagePrompt, obj3);
    tmp10 = application_id(AnimatedPrompt, obj2);
  }
  return tmp10;
}
export { StartStagePrompt };
export function JoinStagePrompt(channel) {
  channel = channel.channel;
  const obj = {
    onPress: function handleJoinStage() {
      StageChannelModalActionCreators.connectAndOpen(channel);
    },
    iconSource: _modDef9235,
    iconStyle: null,
    iconContainerStyle: null,
    style: channel.style,
    title: null,
    subtitle: null,
  };
  ({ iconStyle: obj.iconStyle, iconContainerStyle: obj.iconContainerStyle } = closure_14());
  const intl = channel(1113).intl;
  obj.title = intl.string(channel(1113).t["7vb2cc"]);
  const intl2 = channel(1113).intl;
  obj.subtitle = intl2.string(channel(1113).t.lyCW4E);
  return closure_12(channel(8301).FormCTA, obj);
}
export function ContinueToStagePrompt(onContinue) {
  const tmp = closure_14();
  const obj = { accessibilityRole: "button", onPress: onContinue.onContinue, children: null };
  const obj2 = { style: tmp.continueContainer, children: null };
  const obj3 = { children: null };
  const obj4 = { style: tmp.continueText, children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["jMLfp/"]);
  obj3.children = application_id(native.LegacyText, obj4);
  items = [application_id(View, obj3)];
  const obj5 = {
    children: application_id(native.Icon, {
      style: tmp.continueIcon,
      source: _modDef12048,
      size: native.Icon.Sizes.SMALL,
      disableColor: true,
    }),
  };
  items[1] = application_id(View, obj5);
  obj2.children = items;
  obj.children = state(View, obj2);
  return application_id(Pressables.PressableOpacity, obj);
}
