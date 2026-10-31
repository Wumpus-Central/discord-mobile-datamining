// === Module 15195: VoiceMemberUser ===

// Module 15195 (VoiceMemberUser)
import nativeDefault from "native" /* 575 */;
import UserUtilsDefault from "UserUtils" /* 5068 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5198 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 7487 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 7882 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7939 */;
import noop from "module_19" /* 19 */;
import SoundboardStore from "SoundboardStore" /* 6058 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 6569 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildMemberStore from "GuildMemberStore" /* 4926 */;
import MediaEngineStore from "MediaEngineStore" /* 2006 */;
import PresenceStore from "PresenceStore" /* 5761 */;

require = fn;
function StreamingUserRow(user) {
  user = user.user;
  const channel = user.channel;
  const tmp = closure_15();
  const tmp2 = closure_16();
  const items = [PresenceStore];
  let stateFromStores = user(504).useStateFromStores(items, () => StreamerApplicationSelectors.getStreamerActivityByUserId(user.id, PresenceStore));
  if (null != stateFromStores) {
    const intl2 = tmp3(1113).intl;
    if (null == stateFromStores.details) {
      stateFromStores = { name: null };
      stateFromStores.name = stateFromStores.name;
      intl2.format(tmp6, stateFromStores);
    }
    const details = stateFromStores.details;
  } else {
    const intl = tmp3(1113).intl;
    let obj2 = {};
    const merged = Object.assign(user);
    let obj3 = { text: intl.string(tmp3(1113).t.eXan7B), style: null };
    let labelCallScreen = null;
    if (user.isActionSheet) {
      labelCallScreen = tmp2.labelCallScreen;
    }
    obj3.style = labelCallScreen;
    obj2.subLabel = closure_12(tmp3(8177).FormSubLabel, obj3);
    const items1 = [closure_12(closure_17, obj2), ];
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
            }
      };
      obj4.children = closure_12(channel(12037), obj5);
      tmp10Result = closure_12(closure_3, obj4);
      const tmp20 = channel(12037);
    }
    const obj6 = { children: null };
    items1[1] = tmp10Result;
    obj6.children = items1;
    return closure_13(closure_14, obj6);
  }
  let obj = user(504);
}
function RingButton(channelId) {
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp = closure_15();
  let tmp4Result = closure_16();
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
        children: null
      };
      const obj2 = { style: isActionSheet ? tmp4Result.ringingButtonLabel : tmp.ringingButtonLabel, children: null };
      const intl = tmp5(1113).intl;
      const stringResult = intl.string(tmp5(1113).t.bHa9kN);
      obj2.children = stringResult;
      tmp4Result = closure_12(tmp5(1187).LegacyText, obj2);
      obj.children = tmp4Result;
      closure_12(channelId(6980).PressableOpacity, obj);
    }
  }
  return tmp3;
}
function StopRingButton(channelId) {
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp = closure_15();
  let tmp4Result = closure_16();
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
        children: null
      };
      const obj2 = { style: isActionSheet ? tmp4Result.ringingButtonLabel : tmp.ringingButtonLabel, children: null };
      const intl = tmp5(1113).intl;
      const stringResult = intl.string(tmp5(1113).t.ygslb0);
      obj2.children = stringResult;
      tmp4Result = closure_12(tmp5(1187).LegacyText, obj2);
      obj.children = tmp4Result;
      closure_12(channelId(6980).PressableOpacity, obj);
    }
  }
  return tmp3;
}
get_ActivityIndicator = fn(17);
({ View: c3, Platform } = get_ActivityIndicator);
const Fonts = fn(1072).Fonts;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let createStyles = fn(5014);
let obj = { row: { flexDirection: "row" }, voiceStatusIcon: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 }, voiceStatusIconMargin: { marginLeft: 8 }, streamPreview: { marginHorizontal: 16, marginBottom: 16, alignItems: "center", flex: 1 }, ringingButton: null, ringingButtonLabel: null, autoDisabledVideo: null, autoDisabledVideoLabel: null };
let obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj.ringingButton = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
obj.ringingButtonLabel = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.autoDisabledVideo = { flexDirection: "row", alignItems: "center" };
obj.autoDisabledVideoLabel = { marginLeft: 4 };
let closure_15 = createStyles.createStyles(obj);
createStyles = fn(5014);
let obj6 = { labelCallScreen: null, voiceStatusIcon: null, ringingButton: null, ringingButtonLabel: null };
let obj5 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj6.labelCallScreen = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj8 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj6.voiceStatusIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
const obj9 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj6.ringingButton = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
let obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
obj6.ringingButtonLabel = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_16 = createStyles.createStyles(obj6);
let closure_17 = noop.memo(function VoiceMemberUserRow(user) {
  user = user.user;
  ({ name, channel } = user);
  let flag = user.withStream;
  if (flag === undefined) {
    flag = true;
  }
  ({ isActionSheet, onPress: dependencyMap } = user);
  const merged = Object.assign(user, Object.assign({ user: 0, name: 0, channel: 0, voiceState: 0, withStream: 0, isSpectating: 0, isActionSheet: 0, onPress: 0 }));
  let obj = user(9235);
  const result = obj.withLocalSelfMuteDeaf(user.voiceState, user(9235).useLocalSelfMuteDeaf());
  const tmp4 = closure_15();
  const tmp5 = closure_16();
  const id = AuthenticationStore.getId();
  const obj2 = user(9235);
  const obj3 = { userId: user.id };
  const tmp8 = channel(6852)({ userId: user.id });
  const items = [SoundboardStore];
  const stateFromStores = user(504).useStateFromStores(items, () => SoundboardStore.isUserPlayingSounds(user.id));
  const obj6 = user(504);
  const items1 = [ThemeStore];
  const stateFromStores1 = user(504).useStateFromStores(items1, () => theme.theme);
  const obj7 = user(504);
  const items2 = [MediaEngineStore];
  const stateFromStoresObject = user(504).useStateFromStoresObject(items2, () => {
    let isVideoEnabledResult = id === user.id;
    let isSelfMuteResult = isVideoEnabledResult;
    if (isVideoEnabledResult) {
      isSelfMuteResult = MediaEngineStore.isSelfMute();
    }
    const obj = { isSelfMute: isSelfMuteResult, localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
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
  ({ localMute, localDeaf, localVideo, localVideoDisabled, isSelfMute, localVideoAutoDisabled } = stateFromStoresObject);
  const obj8 = user(504);
  const items3 = [GuildMemberStore];
  let tmp13 = localMute;
  const stateFromStores2 = user(504).useStateFromStores(items3, () => {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return GuildMemberStore.isGuestOrLurker(guild_id, user.id);
  });
  if (!localMute) {
    tmp13 = isSelfMute;
  }
  if (!localVideo) {
    localVideo = localVideoDisabled;
  }
  let flag2 = false;
  let tmp14 = localVideo;
  let tmp15 = localDeaf;
  let tmp16 = tmp13;
  let flag3 = false;
  let flag4 = false;
  let flag5 = false;
  if (null != result) {
    if (flag) {
      flag = result.selfStream;
    }
    let isVoiceMutedResult = tmp13;
    if (!tmp13) {
      isVoiceMutedResult = result.isVoiceMuted();
    }
    let isVoiceDeafenedResult = localDeaf;
    if (!localDeaf) {
      isVoiceDeafenedResult = result.isVoiceDeafened();
    }
    let selfVideo = localVideo;
    if (!localVideo) {
      selfVideo = result.selfVideo;
    }
    const sessionId = result.sessionId;
    const tmp19 = null != sessionId && id === user.id && sessionId !== AuthenticationStore.getSessionId();
    flag4 = true;
    flag2 = tmp19;
    tmp14 = selfVideo;
    tmp15 = isVoiceDeafenedResult;
    tmp16 = isVoiceMutedResult;
    flag3 = flag;
    flag5 = tmp19;
  }
  const tmp20 = isActionSheet ? tmp5.voiceStatusIcon : tmp4.voiceStatusIcon;
  const obj5 = {
    onPress() {
      return dependencyMap(user);
    },
    label: name,
    leading: null,
    trailing: null
  };
  const obj10 = { user, guildId: null, size: null, speaking: null, playingSoundboard: null };
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj10.guildId = guild_id;
  obj10.size = user(1187).AvatarSizes.REFRESH_MEDIUM_32;
  obj10.speaking = tmp8;
  obj10.playingSoundboard = stateFromStores;
  obj5.leading = closure_12(user(1187).Avatar, obj10);
  let tmp24Result = null;
  if (flag4) {
    tmp24Result = null;
    if (!flag2) {
      const obj11 = { style: tmp4.row, children: null };
      let tmp21Result = null;
      if (user.isSpectating) {
        const obj12 = { size: tmp2(1187).Icon.Sizes.REFRESH_SMALL_16, source: channel(15201), style: tmp20 };
        tmp21Result = closure_12(tmp2(1187).Icon, obj12);
      }
      const items4 = [tmp21Result, , , , ];
      if (!tmp16) {
        items4[1] = null;
        let tmp21Result5 = null;
        if (tmp15) {
          const obj13 = { size: tmp2(1187).Icon.Sizes.REFRESH_SMALL_16, source: channel(15198), style: tmp20 };
          tmp21Result5 = closure_12(tmp2(1187).Icon, obj13);
        }
        items4[2] = tmp21Result5;
        if (!tmp14) {
          items4[3] = null;
          let tmp21Result6 = null;
          if (flag3) {
            const obj14 = { style: tmp20 };
            tmp21Result6 = closure_12(tmp2(1187).LiveTag, obj14);
          }
          items4[4] = tmp21Result6;
          obj11.children = items4;
          tmp24Result = closure_13(tmp25, obj11);
        } else {
          if (localVideoDisabled) {
            const obj15 = { size: tmp2(1187).Icon.Sizes.REFRESH_SMALL_16, source: channel(15199), style: tmp4.voiceStatusIconMargin, disableColor: true };
            let obj16 = obj15;
          } else {
            obj16 = { size: tmp2(1187).Icon.Sizes.REFRESH_SMALL_16, source: channel(15200), style: tmp20 };
          }
          closure_12(tmp2(1187).Icon, obj16);
        }
      } else {
        if (tmp2Result.isThemeDark(stateFromStores1)) {
          let tmp7Result = channel(15196);
        } else {
          tmp7Result = channel(15197);
        }
        const obj17 = { size: tmp2(1187).Icon.Sizes.REFRESH_SMALL_16, source: tmp7Result, style: tmp4.voiceStatusIconMargin, color: tmp20.tintColor, disableColor: localMute };
        closure_12(tmp2(1187).Icon, obj17);
        tmp2Result = tmp2(5021);
      }
      tmp25 = id;
    }
  }
  obj5.trailing = tmp24Result;
  const obj18 = { disabled: flag5 };
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(obj5);
  let tmp36 = name;
  if (stateFromStores2) {
    const obj19 = { children: null };
    const items5 = [name, ];
    const obj20 = { variant: "text-md/semibold", lineClamp: 1, color: "status-positive", children: null };
    const intl = tmp2(1113).intl;
    const items6 = ["\u00A0", intl.string(tmp2(1113).t["pFO/Ph"])];
    obj20.children = items6;
    items5[1] = closure_13(tmp2(5624).Text, obj20);
    obj19.children = items5;
    tmp36 = closure_13(closure_14, obj19);
  }
  const obj21 = { text: tmp36, style: null };
  let labelCallScreen = null;
  if (isActionSheet) {
    labelCallScreen = tmp5.labelCallScreen;
  }
  obj21.style = labelCallScreen;
  obj18.label = closure_12(user(8177).FormRow.Label, obj21);
  if (localVideoAutoDisabled) {
    const obj22 = { style: tmp4.autoDisabledVideo, children: null };
    const obj23 = { source: channel(11779), size: tmp2(1187).Icon.Sizes.EXTRA_SMALL, disableColor: true };
    const items7 = [closure_12(tmp2(1187).Icon, obj23), ];
    const obj24 = { variant: "text-xs/medium", color: "text-default", style: tmp4.autoDisabledVideoLabel, children: null };
    const intl3 = tmp2(1113).intl;
    obj24.children = intl3.string(tmp2(1113).t.m2Hyj0);
    items7[1] = closure_12(tmp2(5624).Text, obj24);
    obj22.children = items7;
    let stringResult = closure_13(id, obj22);
  } else {
    stringResult = null;
    if (flag2) {
      const intl2 = tmp2(1113).intl;
      stringResult = intl2.string(tmp2(1113).t.IyYqqY);
    }
  }
  obj18.subLabel = stringResult;
  return closure_12(user(8177).FormRow, obj18);
});
let obj11 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
const memoResult = noop.memo(function DisconnectedUserRow(user) {
  let id = user.user;
  let id2 = user.channel;
  ({ isActionSheet, onPress: dependencyMap } = user);
  const tmp = closure_16();
  const items = [CallStore];
  const items1 = [id2.id, id.id];
  const stateFromStores = id(504).useStateFromStores(items, () => {
    const call = CallStore.getCall(id2.id);
    let hasItem = null != call;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id.id);
    }
    return hasItem;
  }, items1);
  const obj = id(504);
  const name = id2(6041).getName(id2.guild_id, id2.id, id);
  const obj2 = id2(6041);
  const obj4 = {
    onPress() {
      return dependencyMap(id);
    },
    label: null,
    leading: null,
    trailing: null
  };
  const canRing = id(7497).useCanRing(id);
  const obj5 = { text: name, style: null };
  let labelCallScreen = null;
  if (isActionSheet) {
    labelCallScreen = tmp.labelCallScreen;
  }
  obj5.style = labelCallScreen;
  obj4.label = closure_12(id(8177).FormRow.Label, obj5);
  const obj3 = id(7497);
  obj4.leading = closure_12(id(1187).Avatar, { user: id, guildId: id2.guild_id, size: id(1187).AvatarSizes.REFRESH_MEDIUM_32 });
  if (!canRing) {
    obj4.trailing = null;
    const obj7 = {};
    const merged = Object.assign(obj4);
    return closure_12(tmp2(8177).FormRow, obj7);
  } else {
    const obj8 = { channelId: null, userId: null, isActionSheet: null };
    id2 = id2.id;
    obj8.channelId = id2;
    id = id.id;
    obj8.userId = id;
    obj8.isActionSheet = isActionSheet;
    closure_12(stateFromStores ? StopRingButton : RingButton, obj8);
  }
  const obj6 = { user: id, guildId: id2.guild_id, size: id(1187).AvatarSizes.REFRESH_MEDIUM_32 };
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberUser.tsx");

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
      let tmp3Result = closure_12(StreamingUserRow, obj3);
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
  tmp3Result = closure_12(closure_17, obj4);
});
export const STREAM_PREVIEW_MARGIN = 16;
export const DisconnectedUserRow = memoResult;