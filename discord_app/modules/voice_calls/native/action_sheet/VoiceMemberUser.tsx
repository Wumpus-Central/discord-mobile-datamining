// === Module 13786: VoiceMemberUser ===

// Module 13786 (VoiceMemberUser)
import nativeDefault from "native" /* 576 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4417 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4767 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 7738 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 9182 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5278 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import PresenceStore from "PresenceStore" /* 4600 */;

require = fn;
function StreamingUserRow(user) {
  user = user.user;
  const channel = user.channel;
  const tmp = closure_14();
  let obj = user(504);
  const items = [PresenceStore];
  let stateFromStores = obj.useStateFromStores(items, () => StreamerApplicationSelectors.getStreamerActivityByUserId(user.id, PresenceStore));
  if (null != stateFromStores) {
    const intl2 = tmp3(1114).intl;
    if (null == stateFromStores.details) {
      stateFromStores = { name: null };
      stateFromStores.name = stateFromStores.name;
      intl2.format(tmp6, stateFromStores);
    }
    const details = stateFromStores.details;
  } else {
    const intl = tmp3(1114).intl;
    obj = {};
    const merged = Object.assign(user);
    obj = { text: intl.string(tmp3(1114).t.eXan7B), style: null };
    let labelCallScreen = null;
    if (user.isActionSheet) {
      labelCallScreen = tmp2.labelCallScreen;
    }
    obj.style = labelCallScreen;
    obj.subLabel = closure_11(tmp3(8593).FormSubLabel, obj);
    const items1 = [closure_11(closure_16, obj), ];
    let tmp10Result = user.id !== AuthenticationStore.getId();
    if (tmp10Result) {
      const obj1 = { style: tmp.streamPreview, children: null };
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      let obj2 = {
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
      obj1.children = closure_11(channel(10058), obj2);
      tmp10Result = closure_11(closure_3, obj1);
      const tmp20 = channel(10058);
    }
    let obj3 = { children: null };
    items1[1] = tmp10Result;
    obj3.children = items1;
    return closure_12(closure_13, obj3);
  }
  tmp2 = closure_15();
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
      let obj = {
        onPress() {
              const items = [userId];
              CallActionCreatorsDefault.ring(channelId, items, "voice_user_action_sheet");
            },
        accessibilityRole: "button",
        style: isActionSheet ? tmp4Result.ringingButton : tmp.ringingButton,
        children: null
      };
      obj = { style: isActionSheet ? tmp4Result.ringingButtonLabel : tmp.ringingButtonLabel, children: null };
      const intl = tmp5(1114).intl;
      const stringResult = intl.string(tmp5(1114).t.bHa9kN);
      obj.children = stringResult;
      tmp4Result = closure_11(tmp5(1178).LegacyText, obj);
      obj.children = tmp4Result;
      tmp4Result = closure_11(channelId(5123).PressableOpacity, obj);
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
      let obj = {
        onPress() {
              const items = [userId];
              CallActionCreatorsDefault.stopRinging(channelId, items);
            },
        accessibilityRole: "button",
        style: isActionSheet ? tmp4Result.ringingButton : tmp.ringingButton,
        children: null
      };
      obj = { style: isActionSheet ? tmp4Result.ringingButtonLabel : tmp.ringingButtonLabel, children: null };
      const intl = tmp5(1114).intl;
      const stringResult = intl.string(tmp5(1114).t.ygslb0);
      obj.children = stringResult;
      tmp4Result = closure_11(tmp5(1178).LegacyText, obj);
      obj.children = tmp4Result;
      tmp4Result = closure_11(channelId(5123).PressableOpacity, obj);
    }
  }
  return tmp3;
}
get_ActivityIndicator = fn(17);
({ View: c3, Platform } = get_ActivityIndicator);
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
fn(4560);
let obj = { row: { flexDirection: "row" }, voiceStatusIcon: null, voiceStatusIconMargin: null, streamPreview: null, ringingButton: null, ringingButtonLabel: null, autoDisabledVideo: null, autoDisabledVideoLabel: null };
obj = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj.voiceStatusIcon = obj;
obj.voiceStatusIconMargin = { marginLeft: 8 };
obj.streamPreview = { marginHorizontal: 16, marginBottom: 16, alignItems: "center", flex: 1 };
let createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
obj.ringingButton = createStyles;
obj.ringingButtonLabel = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.autoDisabledVideo = { flexDirection: "row", alignItems: "center" };
obj.autoDisabledVideoLabel = { marginLeft: 4 };
let closure_14 = createStyles.createStyles(obj);
fn(4560);
let obj3 = { labelCallScreen: null, voiceStatusIcon: null, ringingButton: null, ringingButtonLabel: null };
let obj2 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj3.labelCallScreen = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj4 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj3.voiceStatusIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
obj3.ringingButton = createStyles;
let obj5 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj3.ringingButtonLabel = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_15 = createStyles.createStyles(obj3);
let closure_16 = noop.memo((user) => {
  user = user.user;
  ({ name, channel } = user);
  ({ voiceState, withStream } = user);
  if (withStream === undefined) {
    withStream = true;
  }
  ({ isActionSheet, onPress: dependencyMap } = user);
  const merged = Object.assign(user, Object.assign({ user: 0, name: 0, channel: 0, voiceState: 0, withStream: 0, isSpectating: 0, isActionSheet: 0, onPress: 0 }));
  const tmp2 = closure_14();
  const tmp3 = closure_15();
  const id = AuthenticationStore.getId();
  let obj = { userId: user.id };
  let obj2 = user(504);
  const items = [ThemeStore];
  const stateFromStores = obj2.useStateFromStores(items, () => theme.theme);
  let obj3 = user(504);
  const items1 = [MediaEngineStore];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
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
  let obj4 = user(504);
  const items2 = [GuildMemberStore];
  let tmp12 = localMute;
  const stateFromStores1 = obj4.useStateFromStores(items2, () => {
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
    const tmp18 = null != sessionId && id === user.id && sessionId !== obj.getSessionId();
    flag3 = true;
    flag = tmp18;
    tmp13 = selfVideo;
    tmp14 = isVoiceDeafenedResult;
    tmp15 = isVoiceMutedResult;
    flag2 = withStream;
    flag4 = tmp18;
  }
  const tmp19 = isActionSheet ? tmp3.voiceStatusIcon : tmp2.voiceStatusIcon;
  obj = {
    onPress() {
      return dependencyMap(user);
    },
    label: name,
    leading: null,
    trailing: null
  };
  const obj1 = { user, guildId: null, size: null, speaking: null };
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj1.guildId = guild_id;
  obj1.size = user(1178).AvatarSizes.REFRESH_MEDIUM_32;
  obj1.speaking = channel(9478)(obj);
  obj.leading = closure_11(user(1178).Avatar, obj1);
  let tmp23Result = null;
  if (flag3) {
    tmp23Result = null;
    if (!flag) {
      obj2 = { style: tmp2.row, children: null };
      let tmp20Result = null;
      if (user.isSpectating) {
        obj3 = { size: tmp8(1178).Icon.Sizes.REFRESH_SMALL_16, source: channel(13792), style: tmp19 };
        tmp20Result = closure_11(tmp8(1178).Icon, obj3);
      }
      const items3 = [tmp20Result, , , , ];
      if (!tmp15) {
        items3[1] = null;
        tmp20Result = null;
        if (tmp14) {
          obj4 = { size: tmp8(1178).Icon.Sizes.REFRESH_SMALL_16, source: channel(13789), style: tmp19 };
          tmp20Result = closure_11(tmp8(1178).Icon, obj4);
        }
        items3[2] = tmp20Result;
        if (!tmp13) {
          items3[3] = null;
          let tmp20Result1 = null;
          if (flag2) {
            const obj5 = { style: tmp19 };
            tmp20Result1 = closure_11(tmp8(1178).LiveTag, obj5);
          }
          items3[4] = tmp20Result1;
          obj2.children = items3;
          tmp23Result = closure_12(tmp24, obj2);
        } else {
          if (localVideoDisabled) {
            const obj6 = { size: tmp8(1178).Icon.Sizes.REFRESH_SMALL_16, source: channel(13790), style: tmp2.voiceStatusIconMargin, disableColor: true };
            let obj7 = obj6;
          } else {
            obj7 = { size: tmp8(1178).Icon.Sizes.REFRESH_SMALL_16, source: channel(13791), style: tmp19 };
          }
          closure_11(tmp8(1178).Icon, obj7);
        }
      } else {
        if (tmp8Result.isThemeDark(stateFromStores)) {
          let tmp5Result = channel(13787);
        } else {
          tmp5Result = channel(13788);
        }
        const obj8 = { size: tmp8(1178).Icon.Sizes.REFRESH_SMALL_16, source: tmp5Result, style: tmp2.voiceStatusIconMargin, color: tmp19.tintColor, disableColor: localMute };
        closure_11(tmp8(1178).Icon, obj8);
        tmp8Result = tmp8(4411);
      }
      tmp24 = id;
    }
  }
  obj.trailing = tmp23Result;
  const obj9 = { disabled: flag4 };
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(obj);
  let tmp35 = name;
  if (stateFromStores1) {
    const obj10 = { children: null };
    const items4 = [name, ];
    const obj11 = { variant: "text-md/semibold", lineClamp: 1, color: "status-positive", children: null };
    const intl = tmp8(1114).intl;
    const items5 = ["\u00A0", intl.string(tmp8(1114).t["pFO/Ph"])];
    obj11.children = items5;
    items4[1] = closure_12(tmp8(4556).Text, obj11);
    obj10.children = items4;
    tmp35 = closure_12(closure_13, obj10);
  }
  const obj12 = { text: tmp35, style: null };
  let labelCallScreen = null;
  if (isActionSheet) {
    labelCallScreen = tmp3.labelCallScreen;
  }
  obj12.style = labelCallScreen;
  obj9.label = closure_11(user(8593).FormRow.Label, obj12);
  if (localVideoAutoDisabled) {
    const obj13 = { style: tmp2.autoDisabledVideo, children: null };
    const obj14 = { source: channel(9625), size: tmp8(1178).Icon.Sizes.EXTRA_SMALL, disableColor: true };
    const items6 = [closure_11(tmp8(1178).Icon, obj14), ];
    const obj15 = { variant: "text-xs/medium", color: "text-default", style: tmp2.autoDisabledVideoLabel, children: null };
    const intl3 = tmp8(1114).intl;
    obj15.children = intl3.string(tmp8(1114).t.m2Hyj0);
    items6[1] = closure_11(tmp8(4556).Text, obj15);
    obj13.children = items6;
    let stringResult = closure_12(id, obj13);
  } else {
    stringResult = null;
    if (flag) {
      const intl2 = tmp8(1114).intl;
      stringResult = intl2.string(tmp8(1114).t.IyYqqY);
    }
  }
  obj9.subLabel = stringResult;
  return closure_11(user(8593).FormRow, obj9);
});
let obj7 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
const memoResult = noop.memo(function DisconnectedUserRow(user) {
  let id = user.user;
  let id2 = user.channel;
  ({ isActionSheet, onPress: dependencyMap } = user);
  let obj = id(504);
  const items = [CallStore];
  const items1 = [id2.id, id.id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const call = CallStore.getCall(id2.id);
    let hasItem = null != call;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id.id);
    }
    return hasItem;
  }, items1);
  let obj1 = id2(4712);
  const name = obj1.getName(id2.guild_id, id2.id, id);
  let obj2 = id(9174);
  obj = {
    onPress() {
      return dependencyMap(id);
    },
    label: null,
    leading: null,
    trailing: null
  };
  const canRing = obj2.useCanRing(id, "DisconnectedUserRow");
  obj = { text: name, style: null };
  let labelCallScreen = null;
  if (isActionSheet) {
    labelCallScreen = tmp.labelCallScreen;
  }
  obj.style = labelCallScreen;
  obj.label = closure_11(id(8593).FormRow.Label, obj);
  obj1 = { user: id, guildId: id2.guild_id, size: tmp2(1178).AvatarSizes.REFRESH_MEDIUM_32 };
  obj.leading = closure_11(id(1178).Avatar, obj1);
  if (!canRing) {
    obj.trailing = null;
    obj2 = {};
    const merged = Object.assign(obj);
    return closure_11(tmp2(8593).FormRow, obj2);
  } else {
    const obj3 = { channelId: null, userId: null, isActionSheet: null };
    id2 = id2.id;
    obj3.channelId = id2;
    id = id.id;
    obj3.userId = id;
    obj3.isActionSheet = isActionSheet;
    closure_11(stateFromStores ? StopRingButton : RingButton, obj3);
  }
  tmp = closure_15();
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberUser.tsx");

export default noop.memo(function VoiceMemberUser(voiceState) {
  voiceState = voiceState.voiceState;
  let nick = voiceState.nick;
  let obj = voiceState(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let channelId;
    if (voiceState != null) {
      channelId = voiceState.channelId;
    }
    return ChannelStore.getChannel(channelId);
  });
  const name = UserUtilsDefault.useName(voiceState.user);
  if (null != voiceState) {
    if (voiceState.selfStream) {
      obj = {};
      const merged = Object.assign(voiceState);
      if (nick == null) {
        nick = name;
      }
      obj.name = nick;
      obj.channel = stateFromStores;
      let tmp3Result = closure_11(StreamingUserRow, obj);
    }
    return tmp3Result;
  }
  obj = {};
  const merged1 = Object.assign(voiceState);
  let tmp6 = nick;
  if (nick == null) {
    tmp6 = name;
  }
  obj.name = tmp6;
  obj.channel = stateFromStores;
  obj.withStream = false;
  tmp3Result = closure_11(closure_16, obj);
});
export const STREAM_PREVIEW_MARGIN = 16;
export const DisconnectedUserRow = memoResult;