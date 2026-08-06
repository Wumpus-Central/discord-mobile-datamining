// discord_app/modules/stage_channels/native/guild_sidebar/StageVoiceChannel.tsx
import importAllResult from "shouldShowMembershipVerificationGate";
import { View } from "useStageParticipants";
import handleConnectionOpen from "handleConnectionOpen";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import getVoiceStatesForGuild from "getVoiceStatesForGuild";
import { NO_VOICE_STATES } from "getVoiceStatesForGuild";
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate";
import ME from "ME";
import { jsx } from "dismissGlobalKeyboard";
import createCacheKey from "createCacheKey";
import { computeChannelName } from "../../../channel/useChannelName.tsx";
import { transformParticipantToSortedVoiceState } from "../../useStageChannelSpeakerVoiceStates.tsx";

let closure_14;
let map1;
const require = arg1;
let c4 = importAllResult;
({ MAX_STAGE_VOICE_USER_LIMIT: map1, Permissions: closure_14 } = ME);
let obj = { voiceStates: { marginLeft: 36, marginBottom: 8 }, container: null };
obj = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("Themes").radii.md };
obj[1] = obj;
let closure_16 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((channel) => {
  let collapsed;
  let hasMedia;
  let hasUnread;
  let locked;
  let resolvedUnreadSetting;
  let stageInstance;
  let voiceStates;
  channel = channel.channel;
  const selected = channel.selected;
  let tmp = callback();
  let obj = channel(589);
  const items = [handleStageInstanceCreateOrUpdate, generateOldThreadCutoff, updateUserGuildSettingsInternal, getVoiceStatesForGuild, getUncachedChannelPermissions, handleConnectionOpen];
  const items1 = [channel];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { stageInstance: outer1_12.getStageInstanceByChannel(channel.id), hasUnread: outer1_8.hasUnread(channel.id), resolvedUnreadSetting: outer1_9.resolveUnreadSetting(channel), voiceStates: outer1_10.getVoiceStatesForChannel(channel), hasMedia: null, locked: null, collapsed: null };
    obj[4] = channel(outer1_3[15]).getStageHasMedia(channel.id);
    obj[5] = !outer1_7.can(outer1_14.CONNECT, channel);
    obj[6] = outer1_6.isCollapsed(channel.id);
    return obj;
  }, items1);
  ({ stageInstance, hasUnread, hasMedia, collapsed } = stateFromStoresObject);
  ({ resolvedUnreadSetting, voiceStates, locked } = stateFromStoresObject);
  let arr3 = transformParticipantToSortedVoiceState(channel.guild_id)[channel.id];
  if (arr3 == null) {
    arr3 = NO_VOICE_STATES;
  }
  let tmp2Result = tmp2(5130);
  const stageParticipantsCount = tmp2Result.useStageParticipantsCount(channel.id, tmp2(5124).StageChannelParticipantNamedIndex.AUDIENCE);
  const sum = stageParticipantsCount + arr3.length;
  const items2 = [channel];
  const items3 = [channel.id];
  callback = importAllResult.useCallback(() => {
    const guildId = channel.getGuildId();
    if (null != guildId) {
      if (obj.shouldShowMembershipVerificationGate(guildId)) {
        return channel(outer1_3[20]).openMemberVerificationModal(guildId);
      }
      obj = channel(outer1_3[19]);
    }
    const result = outer1_2(outer1_3[21]).dismissGlobalKeyboard();
    const obj2 = outer1_2(outer1_3[21]);
    const tmp = channel;
    channel(outer1_3[22]).connectAndOpen(tmp);
  }, items2);
  const callback1 = importAllResult.useCallback(() => {
    const result = channel(outer1_3[23]).openChannelLongPressActionSheet(channel.id);
  }, items3);
  const tmp10 = computeChannelName(channel, false);
  tmp2Result = tmp2(9661);
  const isConnectedToVoiceChannel = tmp2Result.useIsConnectedToVoiceChannel(channel);
  if (stageInstance != null) {
    const topic = stageInstance.topic;
  }
  let tmp5Result = tmp5(15155);
  const intl = tmp2(1236).intl;
  if (null != channel.userLimit) {
    if (channel.userLimit > 0) {
      const intl2 = tmp2(1236).intl;
      obj = { channelName: null, userCount: null, limit: null };
      obj[0] = tmp10;
      obj[1] = sum;
      obj[2] = channel.userLimit;
      let formatToPlainStringResult1 = intl2.formatToPlainString(tmp2(1236).t.rhh6Ev, obj);
    }
    obj = {};
    const obj1 = { accessible: true, accessibilityRole: "button", accessibilityLabel: null };
    obj1[2] = formatToPlainStringResult1;
    const merged = Object.assign(obj1);
    obj.onPress = callback;
    obj.onLongPress = callback1;
    obj.style = tmp.container;
    obj.channel = channel;
    obj.selected = selected;
    obj.locked = locked;
    obj.isChannelLive = null != stageInstance;
    if (hasUnread) {
      hasUnread = isConnectedToVoiceChannel;
    }
    obj.unread = hasUnread;
    obj.resolvedUnreadSetting = resolvedUnreadSetting;
    obj.subtitle = topic;
    let obj2 = { channel: null, isChannelSelected: null, isChannelCollapsed: null, enableConnectedUserLimit: null, voiceStates: null };
    obj2[0] = channel;
    obj2[1] = selected;
    obj2[2] = collapsed;
    tmp5Result = tmp5(15245);
    if (!hasMedia) {
      let tmp20 = channel.userLimit > 0;
      if (tmp20) {
        tmp20 = channel.userLimit < closure_13;
      }
      hasMedia = tmp20;
    }
    obj2[3] = hasMedia;
    obj2[4] = voiceStates;
    obj.channelInfo = tmp12(tmp5Result, obj2);
    let tmp12Result = arr3.length > 0;
    if (tmp12Result) {
      const obj3 = { style: null, children: null };
      obj3[0] = tmp.voiceStates;
      const obj4 = { channel: null, collapsed: null, voiceStates: null, audienceCount: null };
      obj4[0] = channel;
      obj4[1] = collapsed;
      obj4[2] = arr3;
      obj4[3] = stageParticipantsCount;
      obj3[1] = tmp12(tmp5(15160), obj4);
      tmp12Result = tmp12(View, obj3);
    }
    obj.children = tmp12Result;
    return tmp12(tmp5Result, obj);
  }
  formatToPlainStringResult1 = intl.formatToPlainString(channel(1236).t.TPPk2T, { channelName: tmp10 });
  if (sum > 0) {
    const intl3 = tmp2(1236).intl;
    const obj5 = { channelName: null, userCount: null };
    obj5[0] = tmp10;
    obj5[1] = sum;
    formatToPlainStringResult1 = intl3.formatToPlainString(tmp2(1236).t["7yr3Qc"], obj5);
  }
});
let result = require("handleConnectionOpen").fileFinishedImporting("modules/stage_channels/native/guild_sidebar/StageVoiceChannel.tsx");

export default memoResult;