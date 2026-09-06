// === Module 16227: ChannelInfo ===

// Module 16227 (ChannelInfo)
import StageMediaHooks from "StageMediaHooks" /* 5417 */;
import useEmbeddedAppsForChannelDefault from "useEmbeddedAppsForChannel" /* 12059 */;
import Badges from "Badges" /* 13008 */;
import GuildRoleSubscriptionGatedChannelIconDefault from "GuildRoleSubscriptionGatedChannelIcon" /* 16118 */;
import showChannelBadgeDefault from "showChannelBadge" /* 16228 */;
import ChannelBadgeDefault from "ChannelBadge" /* 16229 */;
import ChannelItemEmbeddedActivitiesDefault from "ChannelItemEmbeddedActivities" /* 16232 */;
import useVoiceChannelStartTime from "useVoiceChannelStartTime" /* 16233 */;
import noop from "module_19" /* 19 */;
import NewChannelsStore from "NewChannelsStore" /* 7532 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

require = fn;
function LimitAndDurationInfo(channel) {
  channel = channel.channel;
  ({ voiceStatesCount, selected } = channel);
  let obj = channel(504);
  const items = [VoiceStateStore, PermissionStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let isGuildStageVoiceResult = channel.isGuildStageVoice();
    if (isGuildStageVoiceResult) {
      let obj = StageMediaHooks;
      isGuildStageVoiceResult = obj.getStageHasMedia(channel.id);
    }
    obj = { isLocked: !PermissionStore.can(constants2.CONNECT, channel), hasVideo: VoiceStateStore.hasVideo(channel.id), hasMedia: isGuildStageVoiceResult };
    return obj;
  });
  ({ hasVideo, hasMedia } = stateFromStoresObject);
  obj = { channel, locked: stateFromStoresObject.isLocked, video: null, selected: null };
  let tmp5 = hasVideo;
  if (!hasVideo) {
    tmp5 = hasMedia;
  }
  obj.video = tmp5;
  obj.selected = selected;
  if (tmp4(obj)) {
    obj = { userCount: voiceStatesCount, video: null, channel: null };
    if (!hasVideo) {
      hasVideo = hasMedia;
    }
    obj.video = hasVideo;
    obj.channel = channel;
    let tmp6Result = jsx(channel(16119).ConnectedUserLimit, { userCount: voiceStatesCount, video: null, channel: null });
  } else {
    const obj1 = { channel };
    tmp6Result = <DurationInfo channel={channel} />;
  }
  return tmp6Result;
}
function DurationInfo(channel) {
  let obj = useVoiceChannelStartTime;
  const startTime = obj.useStartTime(channel.channel);
  let tmp5 = null;
  if (null != startTime) {
    obj = { entry: null, style: null };
    obj = { start: startTime };
    obj.entry = obj;
    obj.style = tmp.activeTimestamp;
    tmp5 = jsx(Badges.ActiveTimestamp, { start: startTime });
  }
  return tmp5;
}
const Constants = fn(1074);
({ GuildFeatures: closure_8, Permissions: closure_9, Fonts } = Constants);
const jsx = fn(21).jsx;
fn(4560);
const createStyles = { activeTimestamp: { fontFamily: Fonts.CODE_NORMAL, fontSize: 12, lineHeight: 16 } };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ChannelInfo.tsx");

export default function ChannelInfo(channel) {
  channel = channel.channel;
  ({ isChannelCollapsed, voiceStates, enableConnectedUserLimit, enableActivities, muted, isSubscriptionGated, needSubscriptionToAccess } = channel);
  let obj = channel(504);
  const items = [GuildStore, ReadStateStore, NewChannelsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ guild: GuildStore.getGuild(channel.guild_id), mentionsCount: ReadStateStore.getMentionCount(channel.id), isMentionLowImportance: ReadStateStore.getIsMentionLowImportance(channel.id), isNewChannel: NewChannelsStore.shouldIndicateNewChannel(channel.guild_id, channel.id) }));
  ({ guild, mentionsCount, isNewChannel } = stateFromStoresObject);
  const tmp5 = useEmbeddedAppsForChannelDefault(channel);
  let obj1 = channel(7885);
  const postsWithUnreadsCount = obj1.useUnreadThreadsCountForParent(channel.guild_id, channel.id);
  if (showChannelBadgeDefault({ mentionsCount, isNewChannel, postsWithUnreadsCount, muted })) {
    obj = { mentionCount: mentionsCount, isMentionLowImportance: stateFromStoresObject.isMentionLowImportance, isNewChannel, postsWithUnreadsCount: null, muted: null };
    let tmp18 = null;
    if (channel.isForumLikeChannel()) {
      tmp18 = postsWithUnreadsCount;
    }
    obj.postsWithUnreadsCount = tmp18;
    obj.muted = muted;
    let tmp11Result = jsx(ChannelBadgeDefault, { mentionCount: mentionsCount, isMentionLowImportance: stateFromStoresObject.isMentionLowImportance, isNewChannel, postsWithUnreadsCount: null, muted: null });
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
          let tmpResult = tmp(4706);
          if (tmpResult.hasStream(voiceStates)) {
            tmp11Result = jsx(tmp(1178).LiveTag, {});
          }
        }
      }
    }
    if (null != enableActivities) {
      if (enableActivities) {
        tmpResult = tmp(16231);
        if (tmpResult.showChannelItemEmbeddedActivities(tmp5)) {
          obj = { embeddedApps: tmp5, muted };
          tmp11Result = jsx(ChannelItemEmbeddedActivitiesDefault, { embeddedApps: tmp5, muted });
        }
      }
    }
    if (null != isSubscriptionGated) {
      if (null != needSubscriptionToAccess) {
        if (isSubscriptionGated) {
          obj1 = { locked: needSubscriptionToAccess };
          tmp11Result = jsx(GuildRoleSubscriptionGatedChannelIconDefault, { locked: needSubscriptionToAccess });
        }
      }
    }
    tmp11Result = null;
    if (null != enableConnectedUserLimit) {
      tmp11Result = null;
      if (enableConnectedUserLimit) {
        const obj2 = { channel, voiceStatesCount: null, selected: null };
        let num;
        if (voiceStates != null) {
          num = voiceStates.length;
        }
        if (num == null) {
          num = 0;
        }
        obj2.voiceStatesCount = num;
        obj2.selected = channel.isChannelSelected;
        tmp11Result = <LimitAndDurationInfo channel={channel} voiceStatesCount={null} selected={null} />;
      }
    }
  }
  return tmp11Result;
};