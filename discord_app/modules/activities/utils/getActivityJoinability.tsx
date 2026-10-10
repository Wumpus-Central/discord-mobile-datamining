// === Module 13154: getActivityJoinability ===

// Module 13154 (getActivityJoinability)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import hasFlagDefault from "hasFlag" /* 7012 */;
import getPartySize from "getPartySize" /* 10791 */;
import isPartyFull from "isPartyFull" /* 10793 */;
import getIsInParty from "getIsInParty" /* 10794 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 10797 */;
import useIsActivitiesEnabledForCurrentPlatform from "useIsActivitiesEnabledForCurrentPlatform" /* 10846 */;
import getEmbeddedActivityJoinability from "getEmbeddedActivityJoinability" /* 10920 */;
import isActivityJoinableOnCurrentPlatformDefault from "isActivityJoinableOnCurrentPlatform" /* 13155 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

({ ActivityFlags: c3, ChannelTypes: closure_4, GuildFeatures: hasOwnProperty } = Constants);
const ActivityJoinability = { CAN_JOIN: "can_join", CANNOT_JOIN: "cannot_join", JOINED: "joined" };
const result = size.fileFinishedImporting("modules/activities/utils/getActivityJoinability.tsx");

export default function getActivityJoinability(arg0) {
  ({ user, activity, channelId, isEmbedded, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, EmbeddedActivitiesStore } = arg0);
  if (isEmbedded) {
    if (isEmbedded) {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let tmp17 = null != currentEmbeddedActivity;
      if (tmp17) {
        let application_id;
        if (activity != null) {
          application_id = activity.application_id;
        }
        tmp17 = currentEmbeddedActivity.applicationId === application_id;
      }
    }
    if (null == user) {
      return obj.CANNOT_JOIN;
    } else {
      if (isEmbedded) {
        if (null != channelId) {
          const obj5 = { userId: user.id, activity, channelId, currentUser: tmp2, application: tmp, isContentGated: tmp3, isActivitiesEnabledForCurrentPlatform: null, ChannelStore: null, VoiceStateStore: null, PermissionStore: null, GuildStore: null };
          obj5.isActivitiesEnabledForCurrentPlatform = useIsActivitiesEnabledForCurrentPlatform.getIsActivitiesEnabledForCurrentPlatform();
          obj5.ChannelStore = ChannelStore;
          obj5.VoiceStateStore = VoiceStateStore;
          obj5.PermissionStore = tmp4;
          obj5.GuildStore = GuildStore;
          if (tmp46Result === getEmbeddedActivityJoinability.EmbeddedActivityJoinability.CAN_JOIN) {
            let CANNOT_JOIN2 = obj.CAN_JOIN;
          } else {
            CANNOT_JOIN2 = obj.CANNOT_JOIN;
          }
          return CANNOT_JOIN2;
        }
      }
      if (isEmbedded) {
        if (null == channelId) {
          if (!hasFlagDefault(activity, constants.CONTEXTLESS)) {
            return obj.CANNOT_JOIN;
          }
        }
      }
      if (!isEmbedded) {
        if (isActivityJoinableOnCurrentPlatformDefault(activity)) {
          PlatformUtils;
        }
        return obj.CANNOT_JOIN;
      }
      const partySize = getPartySize.getPartySize(activity);
      if (obj4.hasPartySize(partySize)) {
        if (!tmp28Result.isPartyFull(partySize)) {
          if (hasFlagDefault(activity, constants.PARTY_PRIVACY_FRIENDS)) {
            if (RelationshipStore.isFriend(user.id)) {
              return obj.CAN_JOIN;
            }
          }
          if (hasFlagDefault(activity, constants.PARTY_PRIVACY_VOICE_CHANNEL)) {
            const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
            if (null != channel) {
              if (VoiceStateStore.isInChannel(channel.id, user.id)) {
                const type = channel.type;
                if (constants2.DM !== type) {
                  if (constants2.GROUP_DM !== type) {
                    guild = GuildStore.getGuild(channel.getGuildId());
                    if (null != guild) {
                      const features = guild.features;
                      if (!features.has(constants3.COMMUNITY)) {
                        const memberCount = GuildMemberCountStore.getMemberCount(guild.id);
                        if (null != memberCount) {
                          if (memberCount < 100) {
                            let CANNOT_JOIN = obj.CAN_JOIN;
                          }
                          return CANNOT_JOIN;
                        }
                        CANNOT_JOIN = obj.CANNOT_JOIN;
                      }
                    }
                    return obj.CANNOT_JOIN;
                  }
                }
                return obj.CAN_JOIN;
              }
            }
            return obj.CANNOT_JOIN;
          } else {
            return obj.CANNOT_JOIN;
          }
        }
        tmp28Result = isPartyFull;
      }
      return obj.CANNOT_JOIN;
    }
  } else {
    let application_id1;
    if (activity != null) {
      application_id1 = activity.application_id;
    }
    const tmp9Result = getCurrentUserPresenceActivityDefault(tmp5, tmp6, application_id1);
    let isInParty = null != tmp9Result;
    if (isInParty) {
      obj = getIsInParty;
      isInParty = obj.getIsInParty(tmp9Result, activity);
    }
  }
  return obj.JOINED;
};
export { ActivityJoinability };