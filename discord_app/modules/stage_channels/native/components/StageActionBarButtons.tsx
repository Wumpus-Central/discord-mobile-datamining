// discord_app/modules/stage_channels/native/components/StageActionBarButtons.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import asyncRequireImpl from "../../../../../_runtime/02118_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import StageChannelActionCreatorExtras from "../../StageChannelActionCreatorExtras.native.tsx";
import StageChannelActionCreators from "../../StageChannelActionCreators.tsx";
import StageChannelModalActionCreators from "../../StageChannelModalActionCreators.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import _modDef9193 from "../../../../../_runtime/metro/09193__.js";
import CallsUtils from "../../../voice_calls/native/CallsUtils.tsx";
import CallBarActionAll from "../../../video_calls/native/components/CallBarAction.tsx";
import useStageChannelConnectAction from "../../useStageChannelConnectAction.tsx";
import _modDef12047 from "../../../../../_runtime/metro/12047__.js";
import StageMusicActionCreators from "../../StageMusicActionCreators.tsx";
import _modDef12054 from "../../../../../_runtime/metro/12054__.js";
import shouldShowEndStageModalDefault from "../../shouldShowEndStageModal.tsx";
import useRaiseHandControlDefault from "../useRaiseHandControl.tsx";
import _modDef12081 from "../../../../../_runtime/metro/12081__.js";
import _modDef12086 from "../../../../../_runtime/metro/12086__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import StageMusicStore from "../../StageMusicStore.tsx";

require = fn;
class AnimatedPrompt {
  constructor(arg0) {
    ({ show, children, style } = global);
    tmp = closure_14();
    tmp2 = closure_3;
    obj = closure_0(closure_3[15]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    obj2 = closure_0(closure_3[43]);
    items1 = [, , ,];
    items1[0] = closure_16;
    items1[1] = closure_0(closure_3[44]).withSpring;
    items1[2] = show;
    items1[3] = closure_15;
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
    return tmp9(closure_1(tmp2[43]).View, { style: items3, children });
  }
}
class StartStagePrompt {
  constructor(arg0) {
    ({ channel, isLive } = global);
    tmp = closure_14();
    obj = {
      onPress: function handleStartStage() {
        if (!isLive) {
          const result = StageChannelActionCreatorExtras.openStageChannelSettings(closure_1_0);
        }
      },
      iconSource: isLive(closure_3[47]),
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
    return jsx(channel(closure_3[46]).FormCTA, obj);
  }
}
const View = fn(17).View;
let closure_10 = fn(6766).REQUEST_TO_SPEAK_SHEET_KEY;
const NOOP = fn(1072).NOOP;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5142);
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
let closure_15 = { mass: 1, stiffness: 100, damping: 30, overshootClamping: false };
let closure_16 = {
  code: "(function StageActionBarButtonsTsx1(){let[withSpring,show,actionBarAnimationConfig]=this.__closure;return{marginTop:withSpring(show?0:20,actionBarAnimationConfig),opacity:withSpring(show?1:0,actionBarAnimationConfig)};})",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageActionBarButtons.tsx");

export function MoveToAudienceButton(channel) {
  channel = channel.channel;
  const obj = { accessibilityLabel: null, source: null, onPress: null, isSmallSize: null };
  const intl = channel(1113).intl;
  obj.accessibilityLabel = intl.string(channel(1113).t.ezLpY6);
  obj.source = _modDef12047;
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
      source: importDefault(stateFromStores ? 12049 : 12050),
      IconComponent: null,
      imageStyle: null,
      onPress: null,
      isSmallSize: null,
    };
    if (stateFromStores) {
      tmpResult = tmp(12051);
      let MusicIcon = tmpResult.MusicSlashIcon;
    } else {
      MusicIcon = tmp(10886).MusicIcon;
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
  obj2 = stateFromStores(12048);
}
export function DisconnectStageButton(channel) {
  channel = channel.channel;
  const obj = { accessibilityLabel: null, source: null, IconComponent: null, onPress: null, isSmallSize: null };
  const intl = channel(1113).intl;
  obj.accessibilityLabel = intl.string(channel(1113).t.SMKyih);
  obj.source = _modDef12054;
  obj.IconComponent = channel(12055).DoorExitIcon;
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
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12058, dependencyMap.paths), closure_10, {
      channelId: channel.id,
      analyticsLocations,
    });
  }
  analyticsLocations = analyticsLocations(7390)().analyticsLocations;
  const stageParticipantsCount = channel(6823).useStageParticipantsCount(
    channel.id,
    channel(6817).StageChannelParticipantNamedIndex.REQUESTED_TO_SPEAK_ONLY,
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
    obj2.source = tmp(12073);
    const obj4 = { tintColor: tmp(575).unsafe_rawColors.WHITE };
    obj2.imageStyle = obj4;
    obj2.IconComponent = tmp3(12074).HandRequestSpeakListIcon;
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
    obj5.source = tmp(12073);
    const obj6 = { tintColor: tmp(575).unsafe_rawColors.WHITE };
    obj5.imageStyle = obj6;
    obj5.IconComponent = tmp3(12074).HandRequestSpeakListIcon;
    obj5.onPress = handleOpenAudienceList;
    obj5.isSmallSize = isSmallSize;
    tmp7 = closure_12(CallBarActionAll.ActionButton, obj5);
  }
  return tmp7;
}
export function RequestToSpeakButton(arg0) {
  ({ channel, isSmallSize } = arg0);
  const tmp3 = useRaiseHandControlDefault(channel);
  ({ hasRequestedToSpeak, disabled, handlePress } = tmp3);
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (hasRequestedToSpeak) {
    let stringResult = string(t.GCimTk);
    let tmp7 = require;
  } else {
    stringResult = string(t.hLbG5N);
    tmp7 = require;
  }
  const obj = {
    accessibilityLabel: stringResult,
    isActive: hasRequestedToSpeak,
    source: _modDef12081,
    IconComponent: null,
    onPress: null,
    appearsDisabled: null,
    isSmallSize: null,
  };
  if (tmp3.shouldAgeVerifyToSpeak) {
    let HandRequestSpeakIcon = tmp7(12082).HandRequestDenyIcon;
  } else {
    HandRequestSpeakIcon = tmp7(11337).HandRequestSpeakIcon;
  }
  obj.IconComponent = HandRequestSpeakIcon;
  if (disabled) {
    handlePress = NOOP;
  }
  obj.onPress = handlePress;
  obj.appearsDisabled = disabled;
  obj.isSmallSize = isSmallSize;
  return application_id(CallBarActionAll.ToggledActionButton, obj);
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
  const isVoiceChannelLocked = channel(12084).useIsVoiceChannelLocked(channel);
  const obj2 = channel(12084);
  const voiceChatNavigationContext = channel(11145).useVoiceChatNavigationContext();
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
      obj4.IconComponent = tmp(8720).ChatIcon;
      obj4.source = isVoiceChannelLocked(12085);
      obj4.onPress = onPress;
      obj4.appearsDisabled = isVoiceChannelLocked;
      obj4.isSmallSize = isSmallSize;
      let tmp7Result = closure_12(openChat(11887).ActionButton, obj4);
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
  const obj3 = channel(11145);
  obj6.imageStyle = { tintColor: isVoiceChannelLocked(575).unsafe_rawColors.WHITE };
  const intl = tmp(1113).intl;
  obj6.accessibilityLabel = intl.string(channel(1113).t.ZXxLQg);
  obj6.IconComponent = channel(8720).ChatIcon;
  obj6.source = isVoiceChannelLocked(12085);
  obj6.onPress = onPress;
  obj6.appearsDisabled = isVoiceChannelLocked;
  obj6.isSmallSize = isSmallSize;
  tmp7Result = closure_12(openChat(11887).NotifiedActionButton, obj6);
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
    iconSource: _modDef9193,
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
  return closure_12(channel(8250).FormCTA, obj);
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
      source: _modDef12086,
      size: native.Icon.Sizes.SMALL,
      disableColor: true,
    }),
  };
  items[1] = application_id(View, obj5);
  obj2.children = items;
  obj.children = state(View, obj2);
  return application_id(Pressables.PressableOpacity, obj);
}
