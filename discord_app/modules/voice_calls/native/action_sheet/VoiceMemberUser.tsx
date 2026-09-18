// discord_app/modules/voice_calls/native/action_sheet/VoiceMemberUser.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import NavigationRouteUtils from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import StreamerApplicationSelectors from "../../../go_live/utils/StreamerApplicationSelectors.tsx";
import CallActionCreatorsDefault from "../../../../actions/CallActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import CallStore from "../../../../stores/CallStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import PresenceStore from "../../../../stores/PresenceStore.tsx";

require = fn;
function StreamingUserRow(user) {
  user = user.user;
  const channel = user.channel;
  const tmp = closure_14();
  const tmp2 = closure_15();
  const items = [PresenceStore];
  let stateFromStores = user(504).useStateFromStores(items, () =>
    StreamerApplicationSelectors.getStreamerActivityByUserId(user.id, PresenceStore),
  );
  if (null != stateFromStores) {
    const intl2 = tmp3(1115).intl;
    if (null == stateFromStores.details) {
      stateFromStores = { name: null };
      stateFromStores.name = stateFromStores.name;
      intl2.format(tmp6, stateFromStores);
    }
    const details = stateFromStores.details;
  } else {
    const intl = tmp3(1115).intl;
    let obj2 = {};
    const merged = Object.assign(user);
    let obj3 = { text: intl.string(tmp3(1115).t.eXan7B), style: null };
    let labelCallScreen = null;
    if (user.isActionSheet) {
      labelCallScreen = tmp2.labelCallScreen;
    }
    obj3.style = labelCallScreen;
    obj2.subLabel = closure_11(tmp3(8831).FormSubLabel, obj3);
    const items1 = [closure_11(closure_16, obj2)];
    let tmp10Result = user.id !== AuthenticationStore.getId();
    if (tmp10Result) {
      let obj4 = { style: tmp.streamPreview, children: null };
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      const obj5 = {
        guildId,
        userId: user.id,
        disableTransition: true,
        onPress() {
          let isModalOpenResult = null != channel;
          if (isModalOpenResult) {
            const obj = NavigationRouteUtils;
            isModalOpenResult = obj.isModalOpen(PrivateChannelCallUtils.getVoiceChannelKey(channel.id));
          }
          if (isModalOpenResult) {
            const obj3 = ActionSheetActionCreatorsDefault;
            obj3.hideActionSheet(PrivateChannelCallUtils.getVoiceChannelKey(channel.id));
          }
        },
      };
      obj4.children = closure_11(channel(10302), obj5);
      tmp10Result = closure_11(closure_3, obj4);
      const tmp20 = channel(10302);
    }
    const obj6 = { children: null };
    items1[1] = tmp10Result;
    obj6.children = items1;
    return closure_12(closure_13, obj6);
  }
  let obj = user(504);
}
function RingButton(channelId) {
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp = closure_14();
  let tmp4Result = closure_15();
  let tmp3 = null;
  if (null != userId) {
    tmp3 = null;
    if (null != channelId) {
      const obj = {
        onPress() {
          const items = [userId];
          CallActionCreatorsDefault.ring(channelId, items, "voice_user_action_sheet");
        },
        accessibilityRole: "button",
        style: isActionSheet ? tmp4Result.ringingButton : tmp.ringingButton,
        children: null,
      };
      const obj2 = { style: isActionSheet ? tmp4Result.ringingButtonLabel : tmp.ringingButtonLabel, children: null };
      const intl = tmp5(1115).intl;
      const stringResult = intl.string(tmp5(1115).t.bHa9kN);
      obj2.children = stringResult;
      tmp4Result = closure_11(tmp5(1177).LegacyText, obj2);
      obj.children = tmp4Result;
      closure_11(channelId(5292).PressableOpacity, obj);
    }
  }
  return tmp3;
}
function StopRingButton(channelId) {
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp = closure_14();
  let tmp4Result = closure_15();
  let tmp3 = null;
  if (null != userId) {
    tmp3 = null;
    if (null != channelId) {
      const obj = {
        onPress() {
          const items = [userId];
          CallActionCreatorsDefault.stopRinging(channelId, items);
        },
        accessibilityRole: "button",
        style: isActionSheet ? tmp4Result.ringingButton : tmp.ringingButton,
        children: null,
      };
      const obj2 = { style: isActionSheet ? tmp4Result.ringingButtonLabel : tmp.ringingButtonLabel, children: null };
      const intl = tmp5(1115).intl;
      const stringResult = intl.string(tmp5(1115).t.ygslb0);
      obj2.children = stringResult;
      tmp4Result = closure_11(tmp5(1177).LegacyText, obj2);
      obj.children = tmp4Result;
      closure_11(channelId(5292).PressableOpacity, obj);
    }
  }
  return tmp3;
}
get_ActivityIndicator = fn(17);
({ View: c3, Platform } = get_ActivityIndicator);
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
let createStyles = fn(4722);
let obj = {
  row: { flexDirection: "row" },
  voiceStatusIcon: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 },
  voiceStatusIconMargin: { marginLeft: 8 },
  streamPreview: { marginHorizontal: 16, marginBottom: 16, alignItems: "center", flex: 1 },
  ringingButton: null,
  ringingButtonLabel: null,
  autoDisabledVideo: null,
  autoDisabledVideoLabel: null,
};
let obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj.ringingButton = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.xs,
  height: 32,
  alignItems: "center",
  justifyContent: "center",
};
let obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.xs,
  height: 32,
  alignItems: "center",
  justifyContent: "center",
};
obj.ringingButtonLabel = {
  fontFamily: Fonts.PRIMARY_SEMIBOLD,
  fontSize: 14,
  lineHeight: 18,
  marginHorizontal: 16,
  color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
};
obj.autoDisabledVideo = { flexDirection: "row", alignItems: "center" };
obj.autoDisabledVideoLabel = { marginLeft: 4 };
let closure_14 = createStyles.createStyles(obj);
createStyles = fn(4722);
let obj6 = { labelCallScreen: null, voiceStatusIcon: null, ringingButton: null, ringingButtonLabel: null };
let obj5 = {
  fontFamily: Fonts.PRIMARY_SEMIBOLD,
  fontSize: 14,
  lineHeight: 18,
  marginHorizontal: 16,
  color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
};
obj6.labelCallScreen = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj8 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj6.voiceStatusIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
let obj9 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj6.ringingButton = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.xs,
  height: 32,
  alignItems: "center",
  justifyContent: "center",
};
let obj10 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.xs,
  height: 32,
  alignItems: "center",
  justifyContent: "center",
};
obj6.ringingButtonLabel = {
  fontFamily: Fonts.PRIMARY_SEMIBOLD,
  fontSize: 14,
  lineHeight: 18,
  marginHorizontal: 16,
  color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
};
let closure_15 = createStyles.createStyles(obj6);
let closure_16 = noop.memo((user) => {
  user = user.user;
  ({ name, channel } = user);
  ({ voiceState, withStream } = user);
  if (withStream === undefined) {
    withStream = true;
  }
  ({ isActionSheet, onPress: dependencyMap } = user);
  const merged = Object.assign(
    user,
    Object.assign({
      user: 0,
      name: 0,
      channel: 0,
      voiceState: 0,
      withStream: 0,
      isSpectating: 0,
      isActionSheet: 0,
      onPress: 0,
    }),
  );
  const tmp2 = closure_14();
  const tmp3 = closure_15();
  const id = AuthenticationStore.getId();
  const obj2 = { userId: user.id };
  const tmp7 = channel(9716)({ userId: user.id });
  const items = [ThemeStore];
  const stateFromStores = user(504).useStateFromStores(items, () => theme.theme);
  const obj3 = user(504);
  const items1 = [MediaEngineStore];
  const stateFromStoresObject = user(504).useStateFromStoresObject(items1, () => {
    let isVideoEnabledResult = id === user.id;
    let isSelfMuteResult = isVideoEnabledResult;
    if (isVideoEnabledResult) {
      isSelfMuteResult = MediaEngineStore.isSelfMute();
    }
    const obj = {
      isSelfMute: isSelfMuteResult,
      localMute: MediaEngineStore.isLocalMute(user.id),
      localDeaf: null,
      localVideo: null,
      localVideoDisabled: null,
      localVideoAutoDisabled: null,
    };
    let isSelfDeafResult = isVideoEnabledResult;
    if (isVideoEnabledResult) {
      isSelfDeafResult = MediaEngineStore.isSelfDeaf();
    }
    obj.localDeaf = isSelfDeafResult;
    if (isVideoEnabledResult) {
      isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
    }
    obj.localVideo = isVideoEnabledResult;
    obj.localVideoDisabled = MediaEngineStore.isLocalVideoDisabled(user.id);
    obj.localVideoAutoDisabled = MediaEngineStore.isLocalVideoAutoDisabled(user.id);
    return obj;
  });
  ({ localMute, localDeaf, localVideo, localVideoDisabled, isSelfMute, localVideoAutoDisabled } =
    stateFromStoresObject);
  const obj4 = user(504);
  const items2 = [GuildMemberStore];
  let tmp12 = localMute;
  const stateFromStores1 = user(504).useStateFromStores(items2, () => {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return GuildMemberStore.isGuestOrLurker(guild_id, user.id);
  });
  if (!localMute) {
    tmp12 = isSelfMute;
  }
  if (!localVideo) {
    localVideo = localVideoDisabled;
  }
  let flag = false;
  let tmp13 = localVideo;
  let tmp14 = localDeaf;
  let tmp15 = tmp12;
  let flag2 = false;
  let flag3 = false;
  let flag4 = false;
  if (null != voiceState) {
    if (withStream) {
      withStream = voiceState.selfStream;
    }
    let isVoiceMutedResult = tmp12;
    if (!tmp12) {
      isVoiceMutedResult = voiceState.isVoiceMuted();
    }
    let isVoiceDeafenedResult = localDeaf;
    if (!localDeaf) {
      isVoiceDeafenedResult = voiceState.isVoiceDeafened();
    }
    let selfVideo = localVideo;
    if (!localVideo) {
      selfVideo = voiceState.selfVideo;
    }
    const sessionId = voiceState.sessionId;
    const tmp18 = null != sessionId && id === user.id && sessionId !== AuthenticationStore.getSessionId();
    flag3 = true;
    flag = tmp18;
    tmp13 = selfVideo;
    tmp14 = isVoiceDeafenedResult;
    tmp15 = isVoiceMutedResult;
    flag2 = withStream;
    flag4 = tmp18;
  }
  const tmp19 = isActionSheet ? tmp3.voiceStatusIcon : tmp2.voiceStatusIcon;
  const obj6 = {
    onPress() {
      return dependencyMap(user);
    },
    label: name,
    leading: null,
    trailing: null,
  };
  const obj7 = { user, guildId: null, size: null, speaking: null };
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj7.guildId = guild_id;
  obj7.size = user(1177).AvatarSizes.REFRESH_MEDIUM_32;
  obj7.speaking = tmp7;
  obj6.leading = closure_11(user(1177).Avatar, obj7);
  let tmp23Result = null;
  if (flag3) {
    tmp23Result = null;
    if (!flag) {
      const obj8 = { style: tmp2.row, children: null };
      let tmp20Result = null;
      if (user.isSpectating) {
        const obj9 = { size: tmp8(1177).Icon.Sizes.REFRESH_SMALL_16, source: channel(14000), style: tmp19 };
        tmp20Result = closure_11(tmp8(1177).Icon, obj9);
      }
      const items3 = [tmp20Result, , , ,];
      if (!tmp15) {
        items3[1] = null;
        let tmp20Result5 = null;
        if (tmp14) {
          const obj10 = { size: tmp8(1177).Icon.Sizes.REFRESH_SMALL_16, source: channel(13997), style: tmp19 };
          tmp20Result5 = closure_11(tmp8(1177).Icon, obj10);
        }
        items3[2] = tmp20Result5;
        if (!tmp13) {
          items3[3] = null;
          let tmp20Result6 = null;
          if (flag2) {
            const obj11 = { style: tmp19 };
            tmp20Result6 = closure_11(tmp8(1177).LiveTag, obj11);
          }
          items3[4] = tmp20Result6;
          obj8.children = items3;
          tmp23Result = closure_12(tmp24, obj8);
        } else {
          if (localVideoDisabled) {
            const obj12 = {
              size: tmp8(1177).Icon.Sizes.REFRESH_SMALL_16,
              source: channel(13998),
              style: tmp2.voiceStatusIconMargin,
              disableColor: true,
            };
            let obj13 = obj12;
          } else {
            obj13 = { size: tmp8(1177).Icon.Sizes.REFRESH_SMALL_16, source: channel(13999), style: tmp19 };
          }
          closure_11(tmp8(1177).Icon, obj13);
        }
      } else {
        if (tmp8Result.isThemeDark(stateFromStores)) {
          let tmp5Result = channel(13995);
        } else {
          tmp5Result = channel(13996);
        }
        const obj14 = {
          size: tmp8(1177).Icon.Sizes.REFRESH_SMALL_16,
          source: tmp5Result,
          style: tmp2.voiceStatusIconMargin,
          color: tmp19.tintColor,
          disableColor: localMute,
        };
        closure_11(tmp8(1177).Icon, obj14);
        tmp8Result = tmp8(4573);
      }
      tmp24 = id;
    }
  }
  obj6.trailing = tmp23Result;
  const obj15 = { disabled: flag4 };
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(obj6);
  let tmp35 = name;
  if (stateFromStores1) {
    const obj16 = { children: null };
    const items4 = [name];
    const obj17 = { variant: "text-md/semibold", lineClamp: 1, color: "status-positive", children: null };
    const intl = tmp8(1115).intl;
    const items5 = ["\u00A0", intl.string(tmp8(1115).t["pFO/Ph"])];
    obj17.children = items5;
    items4[1] = closure_12(tmp8(4718).Text, obj17);
    obj16.children = items4;
    tmp35 = closure_12(closure_13, obj16);
  }
  const obj18 = { text: tmp35, style: null };
  let labelCallScreen = null;
  if (isActionSheet) {
    labelCallScreen = tmp3.labelCallScreen;
  }
  obj18.style = labelCallScreen;
  obj15.label = closure_11(user(8831).FormRow.Label, obj18);
  if (localVideoAutoDisabled) {
    const obj19 = { style: tmp2.autoDisabledVideo, children: null };
    const obj20 = { source: channel(9870), size: tmp8(1177).Icon.Sizes.EXTRA_SMALL, disableColor: true };
    const items6 = [closure_11(tmp8(1177).Icon, obj20)];
    const obj21 = {
      variant: "text-xs/medium",
      color: "text-default",
      style: tmp2.autoDisabledVideoLabel,
      children: null,
    };
    const intl3 = tmp8(1115).intl;
    obj21.children = intl3.string(tmp8(1115).t.m2Hyj0);
    items6[1] = closure_11(tmp8(4718).Text, obj21);
    obj19.children = items6;
    let stringResult = closure_12(id, obj19);
  } else {
    stringResult = null;
    if (flag) {
      const intl2 = tmp8(1115).intl;
      stringResult = intl2.string(tmp8(1115).t.IyYqqY);
    }
  }
  obj15.subLabel = stringResult;
  return closure_11(user(8831).FormRow, obj15);
});
let obj11 = {
  fontFamily: Fonts.PRIMARY_SEMIBOLD,
  fontSize: 14,
  lineHeight: 18,
  marginHorizontal: 16,
  color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
};
const memoResult = noop.memo(function DisconnectedUserRow(user) {
  let id = user.user;
  let id2 = user.channel;
  ({ isActionSheet, onPress: dependencyMap } = user);
  const tmp = closure_15();
  const items = [CallStore];
  const items1 = [id2.id, id.id];
  const stateFromStores = id(504).useStateFromStores(
    items,
    () => {
      const call = CallStore.getCall(id2.id);
      let hasItem = null != call;
      if (hasItem) {
        const ringing = call.ringing;
        hasItem = ringing.includes(id.id);
      }
      return hasItem;
    },
    items1,
  );
  const obj = id(504);
  const name = id2(4874).getName(id2.guild_id, id2.id, id);
  const obj2 = id2(4874);
  const obj4 = {
    onPress() {
      return dependencyMap(id);
    },
    label: null,
    leading: null,
    trailing: null,
  };
  const canRing = id(9412).useCanRing(id, "DisconnectedUserRow");
  const obj5 = { text: name, style: null };
  let labelCallScreen = null;
  if (isActionSheet) {
    labelCallScreen = tmp.labelCallScreen;
  }
  obj5.style = labelCallScreen;
  obj4.label = closure_11(id(8831).FormRow.Label, obj5);
  const obj3 = id(9412);
  obj4.leading = closure_11(id(1177).Avatar, {
    user: id,
    guildId: id2.guild_id,
    size: id(1177).AvatarSizes.REFRESH_MEDIUM_32,
  });
  if (!canRing) {
    obj4.trailing = null;
    const obj7 = {};
    const merged = Object.assign(obj4);
    return closure_11(tmp2(8831).FormRow, obj7);
  } else {
    const obj8 = { channelId: null, userId: null, isActionSheet: null };
    id2 = id2.id;
    obj8.channelId = id2;
    id = id.id;
    obj8.userId = id;
    obj8.isActionSheet = isActionSheet;
    closure_11(stateFromStores ? StopRingButton : RingButton, obj8);
  }
  const obj6 = { user: id, guildId: id2.guild_id, size: id(1177).AvatarSizes.REFRESH_MEDIUM_32 };
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberUser.tsx");

export default noop.memo(function VoiceMemberUser(voiceState) {
  voiceState = voiceState.voiceState;
  let nick = voiceState.nick;
  const items = [ChannelStore];
  const stateFromStores = voiceState(504).useStateFromStores(items, () => {
    let channelId;
    if (voiceState != null) {
      channelId = voiceState.channelId;
    }
    return ChannelStore.getChannel(channelId);
  });
  const obj = voiceState(504);
  const name = UserUtilsDefault.useName(voiceState.user);
  if (null != voiceState) {
    if (voiceState.selfStream) {
      const obj3 = {};
      const merged = Object.assign(voiceState);
      if (nick == null) {
        nick = name;
      }
      obj3.name = nick;
      obj3.channel = stateFromStores;
      let tmp3Result = closure_11(StreamingUserRow, obj3);
    }
    return tmp3Result;
  }
  const obj4 = {};
  const merged1 = Object.assign(voiceState);
  let tmp6 = nick;
  if (nick == null) {
    tmp6 = name;
  }
  obj4.name = tmp6;
  obj4.channel = stateFromStores;
  obj4.withStream = false;
  tmp3Result = closure_11(closure_16, obj4);
});
export const STREAM_PREVIEW_MARGIN = 16;
export const DisconnectedUserRow = memoResult;
