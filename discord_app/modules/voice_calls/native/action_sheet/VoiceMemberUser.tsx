// === Module 13678: StreamingUserRow ===

// Module 13678 (StreamingUserRow)
import ThemesDefault from "Themes" /* 709 */;
import nameFromUserDefault from "nameFromUser" /* 4322 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_4 from "handleThemeChange" /* 1301 */;
import closure_5 from "fetchFingerprint" /* 1215 */;
import closure_6 from "callConnect" /* 5231 */;
import closure_7 from "ensureGuildLoaded" /* 1386 */;
import closure_8 from "trackCommunicationDisabled" /* 1991 */;
import closure_9 from "_detectH265HardwareDecode" /* 4529 */;
import closure_10 from "sortActivity" /* 4569 */;
import { Fonts } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
function StreamingUserRow(user) {
  user = user.user;
  const channel = user.channel;
  const tmp = callback2();
  let obj = user(586);
  const items = [closure_10];
  let stateFromStores = obj.useStateFromStores(items, () => user(closure_1_2[27]).getStreamerActivityByUserId(user.id, closure_1_10));
  if (null != stateFromStores) {
    const intl2 = tmp3(1233).intl;
    if (null == stateFromStores.details) {
      stateFromStores = { name: null };
      stateFromStores[0] = stateFromStores.name;
      intl2.format(tmp6, stateFromStores);
    }
    const details = stateFromStores.details;
  } else {
    const intl = tmp3(1233).intl;
    obj = {};
    const merged = Object.assign(user);
    obj = { text: null, style: null };
    obj[0] = intl.string(tmp3(1233).t.eXan7B);
    let labelCallScreen = null;
    if (user.isActionSheet) {
      labelCallScreen = tmp2.labelCallScreen;
    }
    obj[1] = labelCallScreen;
    obj.subLabel = closure_11(tmp3(8376).FormSubLabel, obj);
    const items1 = [closure_11(closure_16, obj), ];
    let tmp10Result = user.id !== store.getId();
    if (tmp10Result) {
      obj1 = { style: null, children: null };
      obj1[0] = tmp.streamPreview;
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      let obj2 = { guildId: null, userId: null, disableTransition: true, onPress: null };
      obj2[0] = guildId;
      obj2[1] = user.id;
      obj2[3] = function onPress() {
        let isModalOpenResult = null != channel;
        if (isModalOpenResult) {
          const obj = user(closure_1_2[29]);
          isModalOpenResult = obj.isModalOpen(user(closure_1_2[30]).getVoiceChannelKey(tmp.id));
          const obj2 = user(closure_1_2[30]);
        }
        if (isModalOpenResult) {
          const obj3 = channel(closure_1_2[31]);
          obj3.hideActionSheet(user(closure_1_2[30]).getVoiceChannelKey(tmp.id));
          const obj4 = user(closure_1_2[30]);
        }
      };
      obj1[1] = tmp10(channel(10167), obj2);
      tmp10Result = tmp10(closure_3, obj1);
      const tmp18 = closure_3;
      const tmp20 = channel(10167);
    }
    let obj3 = { children: null };
    items1[1] = tmp10Result;
    obj3[0] = items1;
    return closure_12(closure_13, obj3);
  }
}
function RingButton(channelId) {
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp = callback2();
  let tmp4Result = callback3();
  let tmp3 = null;
  if (null != userId) {
    tmp3 = null;
    if (null != channelId) {
      let stringResult = dependencyMap;
      let obj = { onPress: null, accessibilityRole: "button", style: null, children: null };
      obj[0] = function onPress() {
        const items = [userId];
        userId(closure_1_2[33]).ring(channelId, items, "voice_user_action_sheet");
      };
      obj[2] = isActionSheet ? tmp4Result.ringingButton : tmp.ringingButton;
      obj = { style: null, children: null };
      obj[0] = isActionSheet ? tmp4Result.ringingButtonLabel : tmp.ringingButtonLabel;
      const intl = tmp5(1233).intl;
      stringResult = intl.string(tmp5(1233).t.bHa9kN);
      obj[1] = stringResult;
      tmp4Result = tmp4(tmp5(1296).LegacyText, obj);
      obj[3] = tmp4Result;
      tmp4Result = tmp4(channelId(5077).PressableOpacity, obj);
    }
  }
  return tmp3;
}
function StopRingButton(channelId) {
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp = callback2();
  let tmp4Result = callback3();
  let tmp3 = null;
  if (null != userId) {
    tmp3 = null;
    if (null != channelId) {
      let stringResult = dependencyMap;
      let obj = { onPress: null, accessibilityRole: "button", style: null, children: null };
      obj[0] = function onPress() {
        const items = [userId];
        userId(closure_1_2[33]).stopRinging(channelId, items);
      };
      obj[2] = isActionSheet ? tmp4Result.ringingButton : tmp.ringingButton;
      obj = { style: null, children: null };
      obj[0] = isActionSheet ? tmp4Result.ringingButtonLabel : tmp.ringingButtonLabel;
      const intl = tmp5(1233).intl;
      stringResult = intl.string(tmp5(1233).t.ygslb0);
      obj[1] = stringResult;
      tmp4Result = tmp4(tmp5(1296).LegacyText, obj);
      obj[3] = tmp4Result;
      tmp4Result = tmp4(channelId(5077).PressableOpacity, obj);
    }
  }
  return tmp3;
}
({ View: c3, Platform } = get_ActivityIndicator);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
let obj = { row: { flexDirection: "row" }, voiceStatusIcon: null, voiceStatusIconMargin: null, streamPreview: null, ringingButton: null, ringingButtonLabel: null, autoDisabledVideo: null, autoDisabledVideoLabel: null };
obj = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj[1] = obj;
obj[2] = { marginLeft: 8 };
obj[3] = { marginHorizontal: 16, marginBottom: 16, alignItems: "center", flex: 1 };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: ThemesDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
obj[4] = createCacheKey;
obj[5] = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj[6] = { flexDirection: "row", alignItems: "center" };
obj[7] = { marginLeft: 4 };
let closure_14 = createCacheKey.createStyles(obj);
let obj3 = { labelCallScreen: null, voiceStatusIcon: null, ringingButton: null, ringingButtonLabel: null };
let obj2 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj3[0] = { fontFamily: Fonts.PRIMARY_MEDIUM, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj4 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj3[1] = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: ThemesDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
obj3[2] = createCacheKey;
let obj5 = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj3[3] = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_15 = createCacheKey.createStyles(obj3);
let closure_16 = importAllResult.memo((user) => {
  user = user.user;
  ({ name, channel } = user);
  ({ voiceState, withStream } = user);
  if (withStream === undefined) {
    withStream = true;
  }
  ({ isActionSheet, onPress: dependencyMap } = user);
  const merged = Object.assign(user, Object.create(null));
  let id;
  const tmp2 = callback2();
  const tmp3 = callback3();
  let obj = store;
  id = store.getId();
  obj = { userId: user.id };
  let obj2 = user(586);
  const items = [closure_4];
  const stateFromStores = obj2.useStateFromStores(items, () => theme.theme);
  let obj3 = user(586);
  const items1 = [closure_9];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    let isVideoEnabledResult = id === user.id;
    let isSelfMuteResult = isVideoEnabledResult;
    if (isVideoEnabledResult) {
      isSelfMuteResult = closure_1_9.isSelfMute();
    }
    const obj = { isSelfMute: isSelfMuteResult, localMute: closure_1_9.isLocalMute(user.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
    let isSelfDeafResult = isVideoEnabledResult;
    if (isVideoEnabledResult) {
      isSelfDeafResult = closure_1_9.isSelfDeaf();
    }
    obj[2] = isSelfDeafResult;
    if (isVideoEnabledResult) {
      isVideoEnabledResult = closure_1_9.isVideoEnabled();
    }
    obj[3] = isVideoEnabledResult;
    obj[4] = closure_1_9.isLocalVideoDisabled(user.id);
    obj[5] = closure_1_9.isLocalVideoAutoDisabled(user.id);
    return obj;
  });
  ({ localMute, localDeaf, localVideo, localVideoDisabled, isSelfMute, localVideoAutoDisabled } = stateFromStoresObject);
  let obj4 = user(586);
  const items2 = [closure_8];
  let tmp12 = localMute;
  const stateFromStores1 = obj4.useStateFromStores(items2, () => {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return closure_1_8.isGuestOrLurker(guild_id, user.id);
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
      return callback(user);
    },
    label: name,
    leading: null,
    trailing: null
  };
  obj1 = { user, guildId: null, size: null, speaking: null };
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj1[1] = guild_id;
  obj1[2] = user(1296).AvatarSizes.REFRESH_MEDIUM_32;
  obj1[3] = channel(9509)(obj);
  obj[2] = closure_11(user(1296).Avatar, obj1);
  let tmp23Result = null;
  if (flag3) {
    tmp23Result = null;
    if (!flag) {
      obj2 = { style: null, children: null };
      obj2[0] = tmp2.row;
      let tmp20Result = null;
      if (user.isSpectating) {
        obj3 = { size: null, source: null, style: null };
        obj3[0] = tmp8(1296).Icon.Sizes.REFRESH_SMALL_16;
        obj3[1] = tmp5(13684);
        obj3[2] = tmp19;
        tmp20Result = tmp20(tmp8(1296).Icon, obj3);
      }
      const items3 = [tmp20Result, , , , ];
      if (!tmp15) {
        items3[1] = null;
        tmp20Result = null;
        if (tmp14) {
          obj4 = { size: null, source: null, style: null };
          obj4[0] = tmp8(1296).Icon.Sizes.REFRESH_SMALL_16;
          obj4[1] = tmp5(13681);
          obj4[2] = tmp19;
          tmp20Result = tmp20(tmp8(1296).Icon, obj4);
        }
        items3[2] = tmp20Result;
        if (!tmp13) {
          items3[3] = null;
          let tmp20Result1 = null;
          if (flag2) {
            const obj5 = { style: null };
            obj5[0] = tmp19;
            tmp20Result1 = tmp20(tmp8(1296).LiveTag, obj5);
          }
          items3[4] = tmp20Result1;
          obj2[1] = items3;
          tmp23Result = tmp23(tmp24, obj2);
        } else {
          if (localVideoDisabled) {
            const obj6 = { size: null, source: null, style: null, disableColor: true };
            obj6[0] = tmp8(1296).Icon.Sizes.REFRESH_SMALL_16;
            obj6[1] = tmp5(13682);
            obj6[2] = tmp2.voiceStatusIconMargin;
            let obj7 = obj6;
          } else {
            obj7 = { size: null, source: null, style: null };
            obj7[0] = tmp8(1296).Icon.Sizes.REFRESH_SMALL_16;
            obj7[1] = tmp5(13683);
            obj7[2] = tmp19;
          }
          tmp20(tmp8(1296).Icon, obj7);
        }
      } else {
        if (tmp8Result.isThemeDark(stateFromStores)) {
          let tmp5Result = tmp5(13679);
        } else {
          tmp5Result = tmp5(13680);
        }
        const obj8 = { size: null, source: null, style: null, color: null, disableColor: null };
        obj8[0] = tmp8(1296).Icon.Sizes.REFRESH_SMALL_16;
        obj8[1] = tmp5Result;
        obj8[2] = tmp2.voiceStatusIconMargin;
        obj8[3] = tmp19.tintColor;
        obj8[4] = localMute;
        tmp20(tmp8(1296).Icon, obj8);
        tmp8Result = tmp8(1362);
      }
      tmp23 = callback;
      tmp24 = id;
    }
  }
  obj[3] = tmp23Result;
  const obj9 = { disabled: flag4 };
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(obj);
  let tmp35 = name;
  if (stateFromStores1) {
    const obj10 = { children: null };
    const items4 = [name, ];
    const obj11 = { variant: "text-md/semibold", lineClamp: 1, color: "status-positive", children: null };
    const intl = tmp8(1233).intl;
    const items5 = ["\u00A0", intl.string(tmp8(1233).t["pFO/Ph"])];
    obj11[3] = items5;
    items4[1] = callback(tmp8(4474).Text, obj11);
    obj10[0] = items4;
    tmp35 = callback(closure_13, obj10);
  }
  const obj12 = { text: tmp35, style: null };
  let labelCallScreen = null;
  if (isActionSheet) {
    labelCallScreen = tmp3.labelCallScreen;
  }
  obj12[1] = labelCallScreen;
  obj9.label = closure_11(user(8376).FormRow.Label, obj12);
  if (localVideoAutoDisabled) {
    const obj13 = { style: null, children: null };
    obj13[0] = tmp2.autoDisabledVideo;
    const obj14 = { source: null, size: null, disableColor: true };
    obj14[0] = tmp5(9611);
    obj14[1] = tmp8(1296).Icon.Sizes.EXTRA_SMALL;
    const items6 = [tmp20(tmp8(1296).Icon, obj14), ];
    const obj15 = { variant: "text-xs/medium", color: "text-default", style: null, children: null };
    obj15[2] = tmp2.autoDisabledVideoLabel;
    const intl3 = tmp8(1233).intl;
    obj15[3] = intl3.string(tmp8(1233).t.m2Hyj0);
    items6[1] = tmp20(tmp8(4474).Text, obj15);
    obj13[1] = items6;
    let stringResult = callback(id, obj13);
  } else {
    stringResult = null;
    if (flag) {
      const intl2 = tmp8(1233).intl;
      stringResult = intl2.string(tmp8(1233).t.IyYqqY);
    }
  }
  obj9.subLabel = stringResult;
  return closure_11(user(8376).FormRow, obj9);
});
let obj7 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
const memoResult = importAllResult.memo(function DisconnectedUserRow(user) {
  let id = user.user;
  let id2 = user.channel;
  ({ isActionSheet, onPress: dependencyMap } = user);
  let obj = id(586);
  const items = [closure_6];
  const items1 = [id2.id, id.id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const call = closure_1_6.getCall(id2.id);
    let hasItem = null != call;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id.id);
    }
    return hasItem;
  }, items1);
  obj1 = id2(4673);
  const name = obj1.getName(id2.guild_id, id2.id, id);
  let obj2 = id(9891);
  obj = {
    onPress() {
      return callback(id);
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
  obj[1] = labelCallScreen;
  obj[1] = closure_11(id(8376).FormRow.Label, obj);
  obj1 = { user: id, guildId: id2.guild_id, size: tmp2(1296).AvatarSizes.REFRESH_MEDIUM_32 };
  obj[2] = closure_11(id(1296).Avatar, obj1);
  if (!canRing) {
    obj[3] = null;
    obj2 = {};
    const merged = Object.assign(obj);
    return tmp7(tmp2(8376).FormRow, obj2);
  } else {
    const obj3 = { channelId: null, userId: null, isActionSheet: null };
    id2 = id2.id;
    obj3[0] = id2;
    id = id.id;
    obj3[1] = id;
    obj3[2] = isActionSheet;
    tmp7(stateFromStores ? StopRingButton : RingButton, obj3);
  }
});
const memoResult1 = importAllResult.memo(function VoiceMemberUser(voiceState) {
  voiceState = voiceState.voiceState;
  let nick = voiceState.nick;
  let obj = voiceState(586);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let channelId;
    if (voiceState != null) {
      channelId = voiceState.channelId;
    }
    return closure_1_7.getChannel(channelId);
  });
  const name = nameFromUserDefault.useName(voiceState.user);
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
      const tmp8 = closure_11;
      const tmp9 = StreamingUserRow;
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
const result = require("set").fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberUser.tsx");

export default memoResult1;
export const STREAM_PREVIEW_MARGIN = 16;
export const DisconnectedUserRow = memoResult;