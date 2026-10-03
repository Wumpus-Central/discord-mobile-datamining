// === Module 16153: ChannelInfo ===

// Module 16153 (ChannelInfo)
import c from "c" /* 576 */;
import StageMediaHooks from "StageMediaHooks" /* 5574 */;
import useEmbeddedAppsForChannelDefault from "useEmbeddedAppsForChannel" /* 11673 */;
import useShowConnectedUserLimitDefault from "useShowConnectedUserLimit" /* 11922 */;
import GuildRoleSubscriptionGatedChannelIconDefault from "GuildRoleSubscriptionGatedChannelIcon" /* 16052 */;
import ChannelBadgeDefault from "ChannelBadge" /* 16141 */;
import showChannelBadgeDefault from "showChannelBadge" /* 16154 */;
import ChannelItemEmbeddedActivitiesDefault from "ChannelItemEmbeddedActivities" /* 16156 */;
import useVoiceChannelStartTime from "useVoiceChannelStartTime" /* 16157 */;
import noop from "module_19" /* 19 */;
import NewChannelsStore from "NewChannelsStore" /* 7043 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;

const Badges = ActiveTimestamp(12831);
require = fn;
const Constants = fn(1085);
({ GuildFeatures: closure_8, Permissions: closure_9, Fonts } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_11 = createStyles.createStyles({ activeTimestamp: { fontFamily: Fonts.CODE_NORMAL, fontSize: 12, lineHeight: 16 } });
fn(558);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(576).c(14);
  channel = channel.channel;
  ({ voiceStatesCount, selected } = channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceStateStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function o() {
      let isGuildStageVoiceResult = channel.isGuildStageVoice();
      if (isGuildStageVoiceResult) {
        isGuildStageVoiceResult = StageMediaHooks.getStageHasMedia(channel.id);
      }
      const hasVideoResult = VoiceStateStore.hasVideo(channel.id);
      return { isLocked: !PermissionStore.can(constants2.CONNECT, channel), hasVideo: VoiceStateStore.hasVideo(channel.id), hasMedia: isGuildStageVoiceResult };
    };
    cResult[1] = channel;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = channel(576);
  const stateFromStoresObject = channel(504).useStateFromStoresObject(first, tmp7);
  ({ isLocked, hasVideo, hasMedia } = stateFromStoresObject);
  let tmp9 = hasVideo;
  if (!hasVideo) {
    tmp9 = hasMedia;
  }
  if (cResult[3] === channel) {
    if (cResult[4] === isLocked) {
      if (cResult[5] === selected) {
        if (cResult[6] === tmp9) {
          let tmp10 = cResult[7];
        }
        if (useShowConnectedUserLimitDefault(tmp10)) {
          if (!hasVideo) {
            hasVideo = hasMedia;
          }
          if (cResult[8] === channel) {
            if (cResult[9] === hasVideo) {
              if (cResult[10] === voiceStatesCount) {
                let tmp16 = cResult[11];
              }
              return tmp16;
            }
          }
          const obj2 = { userCount: voiceStatesCount, video: hasVideo, channel };
          const tmp18 = jsx(tmp(16038).ConnectedUserLimit, { userCount: voiceStatesCount, video: hasVideo, channel });
          cResult[8] = channel;
          cResult[9] = hasVideo;
          cResult[10] = voiceStatesCount;
          cResult[11] = tmp18;
          tmp16 = tmp18;
        } else {
          if (cResult[12] !== channel) {
            const obj3 = { channel };
            const tmp15 = <closure_13 channel={channel} />;
            cResult[12] = channel;
            cResult[13] = tmp15;
            let tmp12 = tmp15;
          } else {
            tmp12 = cResult[13];
          }
          return tmp12;
        }
      }
    }
  }
  const obj4 = { channel, locked: isLocked, video: tmp9, selected };
  cResult[3] = channel;
  cResult[4] = isLocked;
  cResult[5] = selected;
  cResult[6] = tmp9;
  cResult[7] = obj4;
  tmp10 = obj4;
  const tmpResult = channel(504);
}) : ((channel) => {
  channel = channel.channel;
  ({ voiceStatesCount, selected } = channel);
  const items = [VoiceStateStore, PermissionStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => {
    let isGuildStageVoiceResult = channel.isGuildStageVoice();
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = StageMediaHooks.getStageHasMedia(channel.id);
    }
    const hasVideoResult = VoiceStateStore.hasVideo(channel.id);
    return { isLocked: !PermissionStore.can(constants2.CONNECT, channel), hasVideo: VoiceStateStore.hasVideo(channel.id), hasMedia: isGuildStageVoiceResult };
  });
  ({ hasVideo, hasMedia } = stateFromStoresObject);
  const obj2 = { channel, locked: stateFromStoresObject.isLocked, video: null, selected: null };
  let tmp5 = hasVideo;
  let obj = channel(504);
  const tmp = channel;
  if (!hasVideo) {
    tmp5 = hasMedia;
  }
  obj2.video = tmp5;
  obj2.selected = selected;
  if (tmp4(obj2)) {
    const obj3 = { userCount: voiceStatesCount, video: null, channel: null };
    if (!hasVideo) {
      hasVideo = hasMedia;
    }
    obj3.video = hasVideo;
    obj3.channel = channel;
    let tmp6Result = jsx(tmp(16038).ConnectedUserLimit, { userCount: voiceStatesCount, video: null, channel: null });
  } else {
    const obj4 = { channel };
    tmp6Result = <closure_13 channel={channel} />;
  }
  return tmp6Result;
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let ActiveTimestamp = require;
  let tmp = dependencyMap;
  const cResult = c.c(5);
  let activeTimestamp = closure_11();
  const startTime = useVoiceChannelStartTime.useStartTime(channel.channel);
  if (null == startTime) {
    return null;
  } else {
    if (cResult[0] !== startTime) {
      const obj3 = { start: startTime };
      cResult[0] = startTime;
      cResult[1] = obj3;
      let tmp4 = obj3;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[2] === activeTimestamp.activeTimestamp) {
    }
    ActiveTimestamp = Badges.ActiveTimestamp;
    const obj4 = { entry: tmp4, style: activeTimestamp.activeTimestamp };
    tmp = <ActiveTimestamp entry={tmp4} style={activeTimestamp.activeTimestamp} />;
    activeTimestamp = activeTimestamp.activeTimestamp;
    cResult[2] = activeTimestamp;
    cResult[3] = tmp4;
    cResult[4] = tmp;
  }
}) : ((channel) => {
  const tmp = closure_11();
  const startTime = useVoiceChannelStartTime.useStartTime(channel.channel);
  let tmp5 = null;
  if (null != startTime) {
    const obj2 = { entry: null, style: null };
    const obj3 = { start: startTime };
    obj2.entry = obj3;
    obj2.style = tmp.activeTimestamp;
    tmp5 = jsx(Badges.ActiveTimestamp, { entry: null, style: null });
  }
  return tmp5;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ChannelInfo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(576).c(23);
  channel = channel.channel;
  ({ isChannelSelected, isChannelCollapsed, voiceStates, enableConnectedUserLimit, enableActivities, muted, isSubscriptionGated, needSubscriptionToAccess } = channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, ReadStateStore, NewChannelsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.guild_id) {
    if (cResult[2] === channel.id) {
      let tmp8 = cResult[3];
    }
    const stateFromStoresObject = tmp(504).useStateFromStoresObject(first, tmp8);
    ({ guild, mentionsCount, isMentionLowImportance, isNewChannel } = stateFromStoresObject);
    const tmp11 = useEmbeddedAppsForChannelDefault(channel);
    const tmpResult = tmp(504);
    const unreadThreadsCountForParent = tmp(7528).useUnreadThreadsCountForParent(channel.guild_id, channel.id);
    const obj2 = { mentionsCount, isNewChannel, postsWithUnreadsCount: unreadThreadsCountForParent, muted };
    if (showChannelBadgeDefault(obj2)) {
      if (cResult[4] === channel) {
        if (cResult[5] === unreadThreadsCountForParent) {
          let tmp29 = cResult[6];
        }
        if (cResult[7] === isMentionLowImportance) {
          if (cResult[8] === isNewChannel) {
            if (cResult[9] === mentionsCount) {
              if (cResult[10] === muted) {
                if (cResult[11] === tmp29) {
                  let tmp31 = cResult[12];
                }
                return tmp31;
              }
            }
          }
        }
        const obj3 = { mentionCount: mentionsCount, isMentionLowImportance, isNewChannel, postsWithUnreadsCount: tmp29, muted };
        const tmp33 = jsx(ChannelBadgeDefault, { mentionCount: mentionsCount, isMentionLowImportance, isNewChannel, postsWithUnreadsCount: tmp29, muted });
        cResult[7] = isMentionLowImportance;
        cResult[8] = isNewChannel;
        cResult[9] = mentionsCount;
        cResult[10] = muted;
        cResult[11] = tmp29;
        cResult[12] = tmp33;
        tmp31 = tmp33;
      }
      let tmp30 = null;
      if (channel.isForumLikeChannel()) {
        tmp30 = unreadThreadsCountForParent;
      }
      cResult[4] = channel;
      cResult[5] = unreadThreadsCountForParent;
      cResult[6] = tmp30;
      tmp29 = tmp30;
    } else {
      if (null != isChannelCollapsed) {
        if (isChannelCollapsed) {
          let hasItem;
          if (guild != null) {
            const features = guild.features;
            hasItem = features.has(constants.COMMUNITY);
          }
          if (hasItem) {
            if (tmpResult5.hasStream(voiceStates)) {
              const _Symbol = Symbol;
              if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp28 = jsx(tmp(1188).LiveTag, {});
                cResult[13] = tmp28;
                let tmp26 = tmp28;
              } else {
                tmp26 = cResult[13];
              }
              return tmp26;
            }
            tmpResult5 = tmp(5036);
          }
        }
      }
      if (null != enableActivities) {
        if (enableActivities) {
          if (tmpResult6.showChannelItemEmbeddedActivities(tmp11)) {
            if (cResult[14] === tmp11) {
              if (cResult[15] === muted) {
                let tmp23 = cResult[16];
              }
              return tmp23;
            }
            const obj4 = { embeddedApps: tmp11, muted };
            const tmp25 = jsx(ChannelItemEmbeddedActivitiesDefault, { embeddedApps: tmp11, muted });
            cResult[14] = tmp11;
            cResult[15] = muted;
            cResult[16] = tmp25;
            tmp23 = tmp25;
          }
          tmpResult6 = tmp(16155);
        }
      }
      if (null != isSubscriptionGated) {
        if (null != needSubscriptionToAccess) {
          if (isSubscriptionGated) {
            if (cResult[17] !== needSubscriptionToAccess) {
              const obj5 = { locked: needSubscriptionToAccess };
              const tmp22 = jsx(GuildRoleSubscriptionGatedChannelIconDefault, { locked: needSubscriptionToAccess });
              cResult[17] = needSubscriptionToAccess;
              cResult[18] = tmp22;
              let tmp20 = tmp22;
            } else {
              tmp20 = cResult[18];
            }
            return tmp20;
          }
        }
      }
      if (null != enableConnectedUserLimit) {
        if (enableConnectedUserLimit) {
          let num2;
          if (voiceStates != null) {
            num2 = voiceStates.length;
          }
          if (num2 == null) {
            num2 = 0;
          }
          if (cResult[19] === channel) {
            if (cResult[20] === isChannelSelected) {
              if (cResult[21] === num2) {
                let tmp16 = cResult[22];
              }
              return tmp16;
            }
          }
          const obj6 = { channel, voiceStatesCount: num2, selected: isChannelSelected };
          const tmp19 = <closure_12 channel={channel} voiceStatesCount={num2} selected={isChannelSelected} />;
          cResult[19] = channel;
          cResult[20] = isChannelSelected;
          cResult[21] = num2;
          cResult[22] = tmp19;
          tmp16 = tmp19;
        }
      }
      return null;
    }
    const tmpResult4 = tmp(7528);
  }
  const fn = function u() {
    return { guild: GuildStore.getGuild(channel.guild_id), mentionsCount: ReadStateStore.getMentionCount(channel.id), isMentionLowImportance: ReadStateStore.getIsMentionLowImportance(channel.id), isNewChannel: NewChannelsStore.shouldIndicateNewChannel(channel.guild_id, channel.id) };
  };
  cResult[1] = channel.guild_id;
  cResult[2] = channel.id;
  cResult[3] = fn;
  tmp8 = fn;
  const obj = channel(576);
}) : ((channel) => {
  channel = channel.channel;
  ({ isChannelCollapsed, voiceStates, enableConnectedUserLimit, enableActivities, muted, isSubscriptionGated, needSubscriptionToAccess } = channel);
  const items = [GuildStore, ReadStateStore, NewChannelsStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => ({ guild: GuildStore.getGuild(channel.guild_id), mentionsCount: ReadStateStore.getMentionCount(channel.id), isMentionLowImportance: ReadStateStore.getIsMentionLowImportance(channel.id), isNewChannel: NewChannelsStore.shouldIndicateNewChannel(channel.guild_id, channel.id) }));
  ({ guild, mentionsCount, isNewChannel } = stateFromStoresObject);
  const tmp5 = useEmbeddedAppsForChannelDefault(channel);
  const obj = channel(504);
  const postsWithUnreadsCount = channel(7528).useUnreadThreadsCountForParent(channel.guild_id, channel.id);
  if (showChannelBadgeDefault({ mentionsCount, isNewChannel, postsWithUnreadsCount, muted })) {
    const obj3 = { mentionCount: mentionsCount, isMentionLowImportance: stateFromStoresObject.isMentionLowImportance, isNewChannel, postsWithUnreadsCount: null, muted: null };
    let tmp18 = null;
    if (channel.isForumLikeChannel()) {
      tmp18 = postsWithUnreadsCount;
    }
    obj3.postsWithUnreadsCount = tmp18;
    obj3.muted = muted;
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
          if (tmpResult.hasStream(voiceStates)) {
            tmp11Result = jsx(tmp(1188).LiveTag, {});
          }
          tmpResult = tmp(5036);
        }
      }
    }
    if (null != enableActivities) {
      if (enableActivities) {
        if (tmpResult2.showChannelItemEmbeddedActivities(tmp5)) {
          const obj4 = { embeddedApps: tmp5, muted };
          tmp11Result = jsx(ChannelItemEmbeddedActivitiesDefault, { embeddedApps: tmp5, muted });
        }
        tmpResult2 = tmp(16155);
      }
    }
    if (null != isSubscriptionGated) {
      if (null != needSubscriptionToAccess) {
        if (isSubscriptionGated) {
          const obj5 = { locked: needSubscriptionToAccess };
          tmp11Result = jsx(GuildRoleSubscriptionGatedChannelIconDefault, { locked: needSubscriptionToAccess });
        }
      }
    }
    tmp11Result = null;
    if (null != enableConnectedUserLimit) {
      tmp11Result = null;
      if (enableConnectedUserLimit) {
        const obj6 = { channel, voiceStatesCount: null, selected: null };
        let num;
        if (voiceStates != null) {
          num = voiceStates.length;
        }
        if (num == null) {
          num = 0;
        }
        obj6.voiceStatesCount = num;
        obj6.selected = channel.isChannelSelected;
        tmp11Result = <closure_12 channel={channel} voiceStatesCount={null} selected={null} />;
      }
    }
  }
  return tmp11Result;
});