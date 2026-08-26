// discord_app/modules/guild_sidebar/native/ChannelInfo.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import useEmbeddedAppsDefault from "../../activities/useEmbeddedAppsForChannel.tsx";
import ActiveTimestamp from "../../icymi/native/content_inventory/Badges.tsx";
import showChannelBadgeDefault from "../showChannelBadge.tsx";
import useStartTime from "../../channel/useVoiceChannelStartTime.tsx";
import closure_3 from "../../recent_channels/NewChannelsStore.tsx";
import closure_4 from "../../../stores/GuildStore.tsx";
import closure_5 from "../../../stores/PermissionStore.tsx";
import closure_6 from "../../../stores/ReadStateStore.tsx";
import closure_7 from "../../../stores/VoiceStateStore.tsx";
import ME from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function LimitAndDurationInfo(channel) {
  channel = channel.channel;
  ({ voiceStatesCount, selected } = channel);
  let obj = channel(589);
  const items = [closure_7, closure_5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let isGuildStageVoiceResult = channel.isGuildStageVoice();
    if (isGuildStageVoiceResult) {
      let obj = channel(closure_1_2[19]);
      isGuildStageVoiceResult = obj.getStageHasMedia(tmp.id);
    }
    obj = { isLocked: !closure_1_5.can(closure_1_9.CONNECT, tmp), hasVideo: closure_1_7.hasVideo(channel.id), hasMedia: isGuildStageVoiceResult };
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
    let tmp6Result = tmp6(channel(15555).ConnectedUserLimit, obj);
  } else {
    obj1 = { channel: null };
    obj1[0] = channel;
    tmp6Result = tmp6(DurationInfo, obj1);
  }
  return tmp6Result;
}
function DurationInfo(channel) {
  let obj = useStartTime;
  const startTime = obj.useStartTime(channel.channel);
  let tmp5 = null;
  if (null != startTime) {
    obj = { entry: null, style: null };
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
createCacheKey = { fontFamily: Fonts.CODE_NORMAL, fontSize: 12, lineHeight: 16 };
let closure_11 = createCacheKey.createStyles({ activeTimestamp: createCacheKey });
const result = require("set").fileFinishedImporting("modules/guild_sidebar/native/ChannelInfo.tsx");

export default function ChannelInfo(channel) {
  channel = channel.channel;
  ({ isChannelCollapsed, voiceStates, enableConnectedUserLimit, enableActivities, muted, isSubscriptionGated, needSubscriptionToAccess } = channel);
  let obj = channel(589);
  const items = [closure_4, closure_6, closure_3];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ guild: closure_1_4.getGuild(channel.guild_id), mentionsCount: closure_1_6.getMentionCount(channel.id), isMentionLowImportance: closure_1_6.getIsMentionLowImportance(channel.id), isNewChannel: closure_1_3.shouldIndicateNewChannel(channel.guild_id, channel.id) }));
  ({ guild, mentionsCount, isNewChannel } = stateFromStoresObject);
  const tmp5 = useEmbeddedAppsDefault(channel);
  obj1 = channel(8628);
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
    let tmp11Result = jsx(tmp4(15665), { mentionCount: null, isMentionLowImportance: null, isNewChannel: null, postsWithUnreadsCount: null, muted: null });
    const tmp16 = jsx;
    const tmp4Result = tmp4(15665);
  } else {
    if (null != isChannelCollapsed) {
      if (isChannelCollapsed) {
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(constants.COMMUNITY);
        }
        if (hasItem) {
          let tmpResult = tmp(4631);
          if (tmpResult.hasStream(voiceStates)) {
            tmp11Result = jsx(tmp(1297).LiveTag, {});
          }
        }
      }
    }
    if (null != enableActivities) {
      if (enableActivities) {
        tmpResult = tmp(15667);
        if (tmpResult.showChannelItemEmbeddedActivities(tmp5)) {
          obj = { embeddedApps: null, muted: null };
          obj[0] = tmp5;
          obj[1] = muted;
          tmp11Result = jsx(tmp4(15668), { embeddedApps: null, muted: null });
        }
      }
    }
    if (null != isSubscriptionGated) {
      if (null != needSubscriptionToAccess) {
        if (isSubscriptionGated) {
          obj1 = { locked: null };
          obj1[0] = needSubscriptionToAccess;
          tmp11Result = jsx(tmp4(15554), { locked: null });
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
        const tmp11 = jsx;
        const tmp12 = LimitAndDurationInfo;
      }
    }
  }
  return tmp11Result;
};