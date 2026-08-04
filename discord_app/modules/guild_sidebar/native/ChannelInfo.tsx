// discord_app/modules/guild_sidebar/native/ChannelInfo.tsx
import "SubscriptionGatedChannelIcon";
import guildHasCommunity from "guildHasCommunity";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import updateVoiceState from "updateVoiceState";
import ME from "ME";
import { jsx } from "useShowConnectedUserLimit";
import createCacheKey from "createCacheKey";

let Fonts;
let c9;
let metroImportAll;
const require = arg1;
function LimitAndDurationInfo(channel) {
  let hasMedia;
  let hasVideo;
  let selected;
  let voiceStatesCount;
  channel = channel.channel;
  ({ voiceStatesCount, selected } = channel);
  let obj = channel(589);
  const items = [updateVoiceState, getUncachedChannelPermissions];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let isGuildStageVoiceResult = channel.isGuildStageVoice();
    if (isGuildStageVoiceResult) {
      let obj = channel(outer1_2[20]);
      isGuildStageVoiceResult = obj.getStageHasMedia(tmp.id);
    }
    obj = { isLocked: !outer1_5.can(outer1_9.CONNECT, tmp), hasVideo: outer1_7.hasVideo(channel.id), hasMedia: isGuildStageVoiceResult };
    return obj;
  });
  ({ hasVideo, hasMedia } = stateFromStoresObject);
  obj = { channel, locked: stateFromStoresObject.isLocked, video: null, selected: null };
  let tmp5 = hasVideo;
  if (!hasVideo) {
    tmp5 = hasMedia;
  }
  obj[2] = tmp5;
  obj[3] = selected;
  if (tmp4(obj)) {
    obj = { userCount: null, video: null, channel: null };
    obj[0] = voiceStatesCount;
    if (!hasVideo) {
      hasVideo = hasMedia;
    }
    obj[1] = hasVideo;
    obj[2] = channel;
    let tmp6Result = tmp6(channel(15127).ConnectedUserLimit, obj);
  } else {
    const obj1 = { channel: null };
    obj1[0] = channel;
    tmp6Result = tmp6(DurationInfo, obj1);
  }
  return tmp6Result;
}
function DurationInfo(channel) {
  let obj = require(15218) /* useStartTime */;
  const startTime = obj.useStartTime(channel.channel);
  let tmp5 = null;
  if (null != startTime) {
    obj = { entry: null, style: null };
    obj = { start: null };
    obj[0] = startTime;
    obj[0] = obj;
    obj[1] = tmp.activeTimestamp;
    tmp5 = jsx(require(12013) /* ActiveTimestamp */.ActiveTimestamp, { start: null });
  }
  return tmp5;
}
({ GuildFeatures: metroImportAll, Permissions: c9, Fonts } = ME);
createCacheKey = { fontFamily: Fonts.CODE_NORMAL, fontSize: 12, lineHeight: 16 };
let closure_11 = createCacheKey.createStyles({ activeTimestamp: createCacheKey });
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/guild_sidebar/native/ChannelInfo.tsx");

export default function ChannelInfo(channel) {
  let enableActivities;
  let enableConnectedUserLimit;
  let guild;
  let isChannelCollapsed;
  let isNewChannel;
  let isSubscriptionGated;
  let mentionsCount;
  let muted;
  let needSubscriptionToAccess;
  let voiceStates;
  channel = channel.channel;
  ({ isChannelCollapsed, voiceStates, enableConnectedUserLimit, enableActivities, muted, isSubscriptionGated, needSubscriptionToAccess } = channel);
  let obj = channel(589);
  const items = [createGuildRecordFromRust, generateOldThreadCutoff, guildHasCommunity];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ guild: outer1_4.getGuild(channel.guild_id), mentionsCount: outer1_6.getMentionCount(channel.id), isMentionLowImportance: outer1_6.getIsMentionLowImportance(channel.id), isNewChannel: outer1_3.shouldIndicateNewChannel(channel.guild_id, channel.id) }));
  ({ guild, mentionsCount, isNewChannel } = stateFromStoresObject);
  const tmp5 = importDefault(11247)(channel);
  let obj1 = channel(5794);
  const optInEnabledForGuild = obj1.useOptInEnabledForGuild(channel.guild_id);
  let obj2 = channel(9142);
  const postsWithUnreadsCount = obj2.useUnreadThreadsCountForParent(channel.guild_id, channel.id);
  if (importDefault(15213)({ mentionsCount, isNewChannel, postsWithUnreadsCount, muted })) {
    obj = { mentionCount: null, isMentionLowImportance: null, isNewChannel: null, postsWithUnreadsCount: null, muted: null };
    obj[0] = mentionsCount;
    obj[1] = stateFromStoresObject.isMentionLowImportance;
    if (isNewChannel) {
      isNewChannel = optInEnabledForGuild;
    }
    obj[2] = isNewChannel;
    let tmp19 = null;
    if (channel.isForumLikeChannel()) {
      tmp19 = postsWithUnreadsCount;
    }
    obj[3] = tmp19;
    obj[4] = muted;
    let tmp12Result = jsx(tmp4(15214), { mentionCount: null, isMentionLowImportance: null, isNewChannel: null, postsWithUnreadsCount: null, muted: null });
    const tmp17 = jsx;
    const tmp4Result = tmp4(15214);
  } else {
    if (null != isChannelCollapsed) {
      if (isChannelCollapsed) {
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(constants.COMMUNITY);
        }
        if (hasItem) {
          let tmpResult = tmp(4377);
          if (tmpResult.hasStream(voiceStates)) {
            tmp12Result = jsx(tmp(1297).LiveTag, {});
          }
        }
      }
    }
    if (null != enableActivities) {
      if (enableActivities) {
        tmpResult = tmp(15216);
        if (tmpResult.showChannelItemEmbeddedActivities(tmp5)) {
          obj = { embeddedApps: null, muted: null };
          obj[0] = tmp5;
          obj[1] = muted;
          tmp12Result = jsx(tmp4(15217), { embeddedApps: null, muted: null });
        }
      }
    }
    if (null != isSubscriptionGated) {
      if (null != needSubscriptionToAccess) {
        if (isSubscriptionGated) {
          obj1 = { locked: null };
          obj1[0] = needSubscriptionToAccess;
          tmp12Result = jsx(tmp4(15126), { locked: null });
        }
      }
    }
    tmp12Result = null;
    if (null != enableConnectedUserLimit) {
      tmp12Result = null;
      if (enableConnectedUserLimit) {
        obj2 = { channel: null, voiceStatesCount: null, selected: null };
        obj2[0] = channel;
        let num;
        if (voiceStates != null) {
          num = voiceStates.length;
        }
        if (num == null) {
          num = 0;
        }
        obj2[1] = num;
        obj2[2] = channel.isChannelSelected;
        tmp12Result = <LimitAndDurationInfo channel={null} voiceStatesCount={null} selected={null} />;
        const tmp12 = jsx;
        const tmp13 = LimitAndDurationInfo;
      }
    }
  }
  return tmp12Result;
};