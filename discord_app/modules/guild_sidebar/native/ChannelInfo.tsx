// === Module 16157: ChannelInfo ===

// Module 16157 (ChannelInfo)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import StageMediaHooks from "StageMediaHooks" /* 5574 */;
import useEmbeddedAppsForChannelDefault from "useEmbeddedAppsForChannel" /* 11673 */;
import useShowConnectedUserLimitDefault from "useShowConnectedUserLimit" /* 11922 */;
import Badges from "Badges" /* 12831 */;
import GuildRoleSubscriptionGatedChannelIconDefault from "GuildRoleSubscriptionGatedChannelIcon" /* 16056 */;
import ChannelBadgeDefault from "ChannelBadge" /* 16145 */;
import showChannelBadgeDefault from "showChannelBadge" /* 16158 */;
import ChannelItemEmbeddedActivitiesDefault from "ChannelItemEmbeddedActivities" /* 16160 */;
import useVoiceChannelStartTime from "useVoiceChannelStartTime" /* 16161 */;
import react from "react" /* 19 */;
import NewChannelsStore from "NewChannelsStore" /* 7043 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import Constants from "Constants" /* 1085 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel;

let Fonts;
let c9;
let metroImportAll;
({ GuildFeatures: metroImportAll, Permissions: c9, Fonts } = Constants);
const jsx = Fragment.jsx;
let obj = { activeTimestamp: { fontFamily: Fonts.CODE_NORMAL, fontSize: 12, lineHeight: 16 } };
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let enableActivities;
  let enableConnectedUserLimit;
  let first;
  let guild;
  let isChannelCollapsed;
  let isChannelSelected;
  let isMentionLowImportance;
  let isNewChannel;
  let isSubscriptionGated;
  let mentionsCount;
  let muted;
  let needSubscriptionToAccess;
  let voiceStates;
  let obj = channel(576);
  const cResult = obj.c(23);
  channel = channel.channel;
  ({ isChannelSelected, isChannelCollapsed, voiceStates, enableConnectedUserLimit, enableActivities, muted, isSubscriptionGated, needSubscriptionToAccess } = channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, ReadStateStore, NewChannelsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.guild_id) {
    let tmp8;
    if (cResult[2] === channel.id) {
      tmp8 = cResult[3];
    }
    const tmpResult = channel(504);
    const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp8);
    ({ guild, mentionsCount, isMentionLowImportance, isNewChannel } = stateFromStoresObject);
    const tmp11 = useEmbeddedAppsForChannelDefault(channel);
    const tmpResult4 = channel(7528);
    const unreadThreadsCountForParent = tmpResult4.useUnreadThreadsCountForParent(channel.guild_id, channel.id);
    const obj2 = { mentionsCount, isNewChannel, postsWithUnreadsCount: unreadThreadsCountForParent, muted };
    if (showChannelBadgeDefault(obj2)) {
      if (cResult[4] === channel) {
        let tmp29;
        if (cResult[5] === unreadThreadsCountForParent) {
          tmp29 = cResult[6];
        }
        if (cResult[7] === isMentionLowImportance) {
          if (cResult[8] === isNewChannel) {
            if (cResult[9] === mentionsCount) {
              if (cResult[10] === muted) {
                let tmp31;
                if (cResult[11] === tmp29) {
                  tmp31 = cResult[12];
                }
                return tmp31;
              }
            }
          }
        }
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
            const tmpResult5 = channel(5036);
            if (tmpResult5.hasStream(voiceStates)) {
              let tmp26;
              const _Symbol = Symbol;
              if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp28 = jsx(channel(1188).LiveTag, {});
                cResult[13] = tmp28;
                tmp26 = tmp28;
              } else {
                tmp26 = cResult[13];
              }
              return tmp26;
            }
          }
        }
      }
      if (null != enableActivities) {
        if (enableActivities) {
          const tmpResult6 = channel(16159);
          if (tmpResult6.showChannelItemEmbeddedActivities(tmp11)) {
            if (cResult[14] === tmp11) {
              let tmp23;
              if (cResult[15] === muted) {
                tmp23 = cResult[16];
              }
              return tmp23;
            }
            const tmp25 = jsx(ChannelItemEmbeddedActivitiesDefault, { embeddedApps: tmp11, muted });
            cResult[14] = tmp11;
            cResult[15] = muted;
            cResult[16] = tmp25;
            tmp23 = tmp25;
          }
        }
      }
      if (null != isSubscriptionGated) {
        if (null != needSubscriptionToAccess) {
          if (isSubscriptionGated) {
            let tmp20;
            if (cResult[17] !== needSubscriptionToAccess) {
              const tmp22 = jsx(GuildRoleSubscriptionGatedChannelIconDefault, { locked: needSubscriptionToAccess });
              cResult[17] = needSubscriptionToAccess;
              cResult[18] = tmp22;
              tmp20 = tmp22;
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
              let tmp16;
              if (cResult[21] === num2) {
                tmp16 = cResult[22];
              }
              return tmp16;
            }
          }
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
  }
  const fn = function u() {
    const obj = { guild: GuildStore.getGuild(channel.guild_id), mentionsCount: ReadStateStore.getMentionCount(channel.id), isMentionLowImportance: ReadStateStore.getIsMentionLowImportance(channel.id), isNewChannel: NewChannelsStore.shouldIndicateNewChannel(channel.guild_id, channel.id) };
    return obj;
  };
  cResult[1] = channel.guild_id;
  cResult[2] = channel.id;
  cResult[3] = fn;
  tmp8 = fn;
}) : ((channel) => {
  let enableActivities;
  let enableConnectedUserLimit;
  let guild;
  let isChannelCollapsed;
  let isNewChannel;
  let isSubscriptionGated;
  let mentionsCount;
  let muted;
  let needSubscriptionToAccess;
  let tmp11Result;
  let voiceStates;
  channel = channel.channel;
  ({ isChannelCollapsed, voiceStates, enableConnectedUserLimit, enableActivities, muted, isSubscriptionGated, needSubscriptionToAccess } = channel);
  const isChannelSelected = channel.isChannelSelected;
  let obj = channel(504);
  const items = [GuildStore, ReadStateStore, NewChannelsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { guild: GuildStore.getGuild(channel.guild_id), mentionsCount: ReadStateStore.getMentionCount(channel.id), isMentionLowImportance: ReadStateStore.getIsMentionLowImportance(channel.id), isNewChannel: NewChannelsStore.shouldIndicateNewChannel(channel.guild_id, channel.id) };
    return obj;
  });
  ({ guild, mentionsCount, isNewChannel } = stateFromStoresObject);
  const isMentionLowImportance = stateFromStoresObject.isMentionLowImportance;
  const tmp5 = useEmbeddedAppsForChannelDefault(channel);
  const obj2 = channel(7528);
  const postsWithUnreadsCount = obj2.useUnreadThreadsCountForParent(channel.guild_id, channel.id);
  if (showChannelBadgeDefault({ mentionsCount, isNewChannel, postsWithUnreadsCount, muted })) {
    let tmp18 = null;
    ChannelBadgeDefault;
    if (channel.isForumLikeChannel()) {
      tmp18 = postsWithUnreadsCount;
    }
    tmp11Result = <tmp4Result mentionCount={mentionsCount} isMentionLowImportance={isMentionLowImportance} isNewChannel={isNewChannel} postsWithUnreadsCount={tmp18} muted={muted} />;
  } else {
    if (null != isChannelCollapsed) {
      if (isChannelCollapsed) {
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(constants.COMMUNITY);
        }
        if (hasItem) {
          const tmpResult = channel(5036);
          if (tmpResult.hasStream(voiceStates)) {
            tmp11Result = jsx(tmp(1188).LiveTag, {});
          }
        }
      }
    }
    if (null != enableActivities) {
      if (enableActivities) {
        const tmpResult2 = channel(16159);
        if (tmpResult2.showChannelItemEmbeddedActivities(tmp5)) {
          tmp11Result = jsx(ChannelItemEmbeddedActivitiesDefault, { embeddedApps: tmp5, muted });
        }
      }
    }
    if (null != isSubscriptionGated) {
      if (null != needSubscriptionToAccess) {
        if (isSubscriptionGated) {
          tmp11Result = jsx(GuildRoleSubscriptionGatedChannelIconDefault, { locked: needSubscriptionToAccess });
        }
      }
    }
    tmp11Result = null;
    if (null != enableConnectedUserLimit) {
      tmp11Result = null;
      if (enableConnectedUserLimit) {
        let num;
        if (voiceStates != null) {
          num = voiceStates.length;
        }
        if (num == null) {
          num = 0;
        }
        tmp11Result = <closure_12 channel={channel} voiceStatesCount={num} selected={isChannelSelected} />;
      }
    }
  }
  return tmp11Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let hasMedia;
  let hasVideo;
  let isLocked;
  let selected;
  let tmp7;
  let voiceStatesCount;
  let obj = channel(576);
  const cResult = obj.c(14);
  channel = channel.channel;
  ({ voiceStatesCount, selected } = channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceStateStore, PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function o() {
      const hasVideoResult = VoiceStateStore.hasVideo(channel.id);
      let isGuildStageVoiceResult = channel.isGuildStageVoice();
      if (isGuildStageVoiceResult) {
        const obj = StageMediaHooks;
        isGuildStageVoiceResult = obj.getStageHasMedia(channel.id);
      }
      const obj2 = { isLocked: !PermissionStore.can(constants.CONNECT, channel), hasVideo: hasVideoResult, hasMedia: isGuildStageVoiceResult };
      return obj2;
    };
    cResult[1] = channel;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = channel(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7);
  ({ isLocked, hasVideo, hasMedia } = stateFromStoresObject);
  if (cResult[3] === channel) {
    if (cResult[4] === isLocked) {
      if (cResult[5] === selected) {
        let tmp10;
        if (cResult[6] === (hasVideo || hasMedia)) {
          tmp10 = cResult[7];
        }
        if (useShowConnectedUserLimitDefault(tmp10)) {
          if (!hasVideo) {
            hasVideo = hasMedia;
          }
          if (cResult[8] === channel) {
            if (cResult[9] === hasVideo) {
              let tmp16;
              if (cResult[10] === voiceStatesCount) {
                tmp16 = cResult[11];
              }
              return tmp16;
            }
          }
          const tmp18 = jsx(channel(16042).ConnectedUserLimit, { userCount: voiceStatesCount, video: hasVideo, channel });
          cResult[8] = channel;
          cResult[9] = hasVideo;
          cResult[10] = voiceStatesCount;
          cResult[11] = tmp18;
          tmp16 = tmp18;
        } else {
          let tmp12;
          if (cResult[12] !== channel) {
            const tmp15 = <closure_13 channel={channel} />;
            cResult[12] = channel;
            cResult[13] = tmp15;
            tmp12 = tmp15;
          } else {
            tmp12 = cResult[13];
          }
          return tmp12;
        }
      }
    }
  }
  const obj4 = { channel, locked: isLocked, video: hasVideo || hasMedia, selected };
  cResult[3] = channel;
  cResult[4] = isLocked;
  cResult[5] = selected;
  cResult[6] = hasVideo || hasMedia;
  cResult[7] = obj4;
  tmp10 = obj4;
}) : ((channel) => {
  let hasMedia;
  let hasVideo;
  let selected;
  let tmp5;
  let tmp6Result;
  let voiceStatesCount;
  channel = channel.channel;
  ({ voiceStatesCount, selected } = channel);
  let obj = channel(504);
  const items = [VoiceStateStore, PermissionStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const hasVideoResult = VoiceStateStore.hasVideo(channel.id);
    let isGuildStageVoiceResult = channel.isGuildStageVoice();
    if (isGuildStageVoiceResult) {
      const obj = StageMediaHooks;
      isGuildStageVoiceResult = obj.getStageHasMedia(channel.id);
    }
    const obj2 = { isLocked: !PermissionStore.can(constants.CONNECT, channel), hasVideo: hasVideoResult, hasMedia: isGuildStageVoiceResult };
    return obj2;
  });
  ({ hasVideo, hasMedia } = stateFromStoresObject);
  let obj2 = { channel, locked: stateFromStoresObject.isLocked, video: tmp5, selected };
  tmp5 = hasVideo;
  const tmp = channel;
  const tmp4 = useShowConnectedUserLimitDefault;
  if (!hasVideo) {
    tmp5 = hasMedia;
  }
  if (tmp4(obj2)) {
    const ConnectedUserLimit = tmp(16042).ConnectedUserLimit;
    if (!hasVideo) {
      hasVideo = hasMedia;
    }
    tmp6Result = <ConnectedUserLimit userCount={voiceStatesCount} video={hasVideo} channel={channel} />;
  } else {
    tmp6Result = <closure_13 channel={channel} />;
  }
  return tmp6Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const obj = react2;
  const cResult = obj.c(5);
  channel = channel.channel;
  const tmp4 = closure_11();
  const obj2 = useVoiceChannelStartTime;
  const startTime = obj2.useStartTime(channel);
  let tmp6 = null;
  if (null != startTime) {
    let tmp7;
    if (cResult[0] !== startTime) {
      const obj3 = { start: startTime };
      cResult[0] = startTime;
      cResult[1] = obj3;
      tmp7 = obj3;
    } else {
      tmp7 = cResult[1];
    }
    if (cResult[2] === tmp4.activeTimestamp) {
      let tmp8;
      if (cResult[3] === tmp7) {
        tmp8 = cResult[4];
      }
      tmp6 = tmp8;
    }
    const tmp10 = jsx(Badges.ActiveTimestamp, { entry: tmp7, style: tmp4.activeTimestamp });
    cResult[2] = tmp4.activeTimestamp;
    cResult[3] = tmp7;
    cResult[4] = tmp10;
    tmp8 = tmp10;
  }
  return tmp6;
}) : ((channel) => {
  channel = channel.channel;
  const tmp = closure_11();
  const obj = useVoiceChannelStartTime;
  const startTime = obj.useStartTime(channel);
  let tmp5 = null;
  if (null != startTime) {
    const obj3 = { start: startTime };
    tmp5 = jsx(Badges.ActiveTimestamp, { entry: obj3, style: tmp.activeTimestamp });
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ChannelInfo.tsx");

export default tmp4;