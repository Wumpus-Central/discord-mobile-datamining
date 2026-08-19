// === Module 15487: LimitAndDurationInfo ===

// Module 15487 (LimitAndDurationInfo)
import noopAll from "noop" /* 19 */;
import useEmbeddedAppsDefault from "useEmbeddedApps" /* 11233 */;
import ActiveTimestamp from "ActiveTimestamp" /* 12105 */;
import SubscriptionGatedChannelIconDefault from "SubscriptionGatedChannelIcon" /* 15380 */;
import showChannelBadgeDefault from "showChannelBadge" /* 15488 */;
import ChannelBadgeDefault from "ChannelBadge" /* 15489 */;
import ChannelItemEmbeddedActivitiesDefault from "ChannelItemEmbeddedActivities" /* 15492 */;
import useStartTime from "useStartTime" /* 15493 */;
import guildHasCommunity from "guildHasCommunity" /* 5276 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import generateOldThreadCutoff from "generateOldThreadCutoff" /* 4772 */;
import updateVoiceState from "updateVoiceState" /* 4542 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function LimitAndDurationInfo(channel) {
  channel = channel.channel;
  ({ voiceStatesCount, selected } = channel);
  let obj = channel(589);
  const items = [closure_7, closure_5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let isGuildStageVoiceResult = channel.isGuildStageVoice();
    if (isGuildStageVoiceResult) {
      let obj = channel(dependencyMap[19]);
      isGuildStageVoiceResult = obj.getStageHasMedia(channel.id);
    }
    obj = { isLocked: !closure_1_5.can(closure_1_9.CONNECT, channel), hasVideo: closure_1_7.hasVideo(channel.id), hasMedia: isGuildStageVoiceResult };
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
    let tmp6Result = jsx(channel(15381).ConnectedUserLimit, { userCount: null, video: null, channel: null });
  } else {
    obj1 = { channel: null };
    obj1[0] = channel;
    tmp6Result = <DurationInfo channel={null} />;
  }
  return tmp6Result;
}
function DurationInfo(channel) {
  let obj = useStartTime;
  const startTime = obj.useStartTime(channel.channel);
  let tmp5 = null;
  if (null != startTime) {
    obj = { start: null };
    obj[0] = startTime;
    obj[0] = obj;
    obj[1] = tmp.activeTimestamp;
    tmp5 = jsx(ActiveTimestamp.ActiveTimestamp, { start: null });
  }
  return tmp5;
}
noopAll;
({ GuildFeatures: closure_8, Permissions: c9, Fonts } = ME);
const createCacheKey = { fontFamily: Fonts.CODE_NORMAL, fontSize: 12, lineHeight: 16 };
let closure_11 = createCacheKey.createStyles({ activeTimestamp: createCacheKey });
const result = require("obj132").fileFinishedImporting("modules/guild_sidebar/native/ChannelInfo.tsx");

export default function ChannelInfo(channel) {
  channel = channel.channel;
  ({ isChannelCollapsed, voiceStates, enableConnectedUserLimit, enableActivities, muted, isSubscriptionGated, needSubscriptionToAccess } = channel);
  let obj = channel(589);
  const items = [closure_4, closure_6, closure_3];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ guild: closure_1_4.getGuild(channel.guild_id), mentionsCount: closure_1_6.getMentionCount(channel.id), isMentionLowImportance: closure_1_6.getIsMentionLowImportance(channel.id), isNewChannel: closure_1_3.shouldIndicateNewChannel(channel.guild_id, channel.id) }));
  ({ guild, mentionsCount, isNewChannel } = stateFromStoresObject);
  const tmp5 = useEmbeddedAppsDefault(channel);
  obj1 = channel(8513);
  const postsWithUnreadsCount = obj1.useUnreadThreadsCountForParent(channel.guild_id, channel.id);
  if (showChannelBadgeDefault({ mentionsCount, isNewChannel, postsWithUnreadsCount, muted })) {
    obj = { mentionCount: null, isMentionLowImportance: null, isNewChannel: null, postsWithUnreadsCount: null, muted: null };
    obj[0] = mentionsCount;
    obj[1] = stateFromStoresObject.isMentionLowImportance;
    obj[2] = isNewChannel;
    let tmp18 = null;
    if (channel.isForumLikeChannel()) {
      tmp18 = postsWithUnreadsCount;
    }
    obj[3] = tmp18;
    obj[4] = muted;
    let tmp11Result = jsx(ChannelBadgeDefault, { mentionCount: null, isMentionLowImportance: null, isNewChannel: null, postsWithUnreadsCount: null, muted: null });
    const tmp4Result = ChannelBadgeDefault;
  } else {
    if (null != isChannelCollapsed) {
      if (isChannelCollapsed) {
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(constants.COMMUNITY);
        }
        if (hasItem) {
          let tmpResult = tmp(4980);
          if (tmpResult.hasStream(voiceStates)) {
            tmp11Result = jsx(tmp(1297).LiveTag, {});
          }
        }
      }
    }
    if (null != enableActivities) {
      if (enableActivities) {
        tmpResult = tmp(15491);
        if (tmpResult.showChannelItemEmbeddedActivities(tmp5)) {
          obj = { embeddedApps: null, muted: null };
          obj[0] = tmp5;
          obj[1] = muted;
          tmp11Result = jsx(ChannelItemEmbeddedActivitiesDefault, { embeddedApps: null, muted: null });
        }
      }
    }
    if (null != isSubscriptionGated) {
      if (null != needSubscriptionToAccess) {
        if (isSubscriptionGated) {
          obj1 = { locked: null };
          obj1[0] = needSubscriptionToAccess;
          tmp11Result = jsx(SubscriptionGatedChannelIconDefault, { locked: null });
        }
      }
    }
    tmp11Result = null;
    if (null != enableConnectedUserLimit) {
      tmp11Result = null;
      if (enableConnectedUserLimit) {
        const obj2 = { channel: null, voiceStatesCount: null, selected: null };
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
        tmp11Result = <LimitAndDurationInfo channel={null} voiceStatesCount={null} selected={null} />;
      }
    }
  }
  return tmp11Result;
};