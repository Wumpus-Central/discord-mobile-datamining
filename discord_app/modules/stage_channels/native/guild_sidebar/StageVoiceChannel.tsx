// discord_app/modules/stage_channels/native/guild_sidebar/StageVoiceChannel.tsx
import ThemesDefault from "Themes" /* 712 */;
import computeChannelNameDefault from "computeChannelName" /* 4984 */;
import transformParticipantToSortedVoiceStateDefault from "transformParticipantToSortedVoiceState" /* 15498 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "handleConnectionOpen" /* 5271 */;
import closure_7 from "getUncachedChannelPermissions" /* 4021 */;
import closure_8 from "generateOldThreadCutoff" /* 4772 */;
import closure_9 from "updateUserGuildSettingsInternal" /* 5043 */;
import closure_10 from "getVoiceStatesForGuild" /* 4545 */;
import { NO_VOICE_STATES } from "getVoiceStatesForGuild" /* 4545 */;
import closure_12 from "handleStageInstanceCreateOrUpdate" /* 1396 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
let c4 = importAllResult;
({ MAX_STAGE_VOICE_USER_LIMIT: map1, Permissions: closure_14 } = ME);
let obj = { voiceStates: { marginLeft: 36, marginBottom: 8 }, container: null };
obj = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: ThemesDefault.radii.md };
obj[1] = obj;
let closure_16 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const selected = channel.selected;
  let tmp = callback();
  let obj = channel(589);
  const items = [closure_12, closure_8, closure_9, closure_10, closure_7, closure_6];
  const items1 = [channel];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { stageInstance: closure_1_12.getStageInstanceByChannel(channel.id), hasUnread: closure_1_8.hasUnread(channel.id), resolvedUnreadSetting: closure_1_9.resolveUnreadSetting(channel), voiceStates: closure_1_10.getVoiceStatesForChannel(channel), hasMedia: channel(closure_1_3[15]).getStageHasMedia(channel.id), locked: !closure_1_7.can(closure_1_14.CONNECT, channel), collapsed: closure_1_6.isCollapsed(channel.id) };
    return obj;
  }, items1);
  ({ stageInstance, hasUnread, hasMedia, collapsed } = stateFromStoresObject);
  ({ resolvedUnreadSetting, voiceStates, locked } = stateFromStoresObject);
  let arr3 = transformParticipantToSortedVoiceStateDefault(channel.guild_id)[channel.id];
  if (arr3 == null) {
    arr3 = NO_VOICE_STATES;
  }
  let tmp2Result = tmp2(6708);
  const stageParticipantsCount = tmp2Result.useStageParticipantsCount(channel.id, tmp2(6703).StageChannelParticipantNamedIndex.AUDIENCE);
  const sum = stageParticipantsCount + arr3.length;
  const items2 = [channel];
  const items3 = [channel.id];
  callback = importAllResult.useCallback(() => {
    const guildId = channel.getGuildId();
    if (null != guildId) {
      if (obj.shouldShowMembershipVerificationGate(guildId)) {
        return channel(closure_1_3[20]).openMemberVerificationModal(guildId);
      }
      obj = channel(closure_1_3[19]);
    }
    const result = closure_1_2(closure_1_3[21]).dismissGlobalKeyboard();
    const obj2 = closure_1_2(closure_1_3[21]);
    const tmp = channel;
    channel(closure_1_3[22]).connectAndOpen(tmp);
  }, items2);
  const callback1 = importAllResult.useCallback(() => {
    const result = channel(closure_1_3[23]).openChannelLongPressActionSheet(channel.id);
  }, items3);
  const tmp10 = computeChannelNameDefault(channel, false);
  tmp2Result = tmp2(8675);
  const isConnectedToVoiceChannel = tmp2Result.useIsConnectedToVoiceChannel(channel);
  if (stageInstance != null) {
    const topic = stageInstance.topic;
  }
  let tmp5Result = tmp5(15378);
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
    obj1 = { accessible: true, accessibilityRole: "button", accessibilityLabel: null };
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
    tmp5Result = tmp5(15487);
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
      obj3[1] = tmp12(tmp5(15383), obj4);
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
let result = require("set").fileFinishedImporting("modules/stage_channels/native/guild_sidebar/StageVoiceChannel.tsx");

export default memoResult;