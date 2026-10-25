// === Module 14320: getActivityJoinability ===

// Module 14320 (getActivityJoinability)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5626 */;
import hasFlagDefault from "hasFlag" /* 7409 */;
import getPartySize from "getPartySize" /* 11347 */;
import isPartyFull from "isPartyFull" /* 11349 */;
import getIsInParty from "getIsInParty" /* 11350 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 11353 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11354 */;
import useIsActivitiesEnabledForCurrentPlatform from "useIsActivitiesEnabledForCurrentPlatform" /* 11384 */;
import getEmbeddedActivityJoinability from "getEmbeddedActivityJoinability" /* 11453 */;
import isActivityJoinableOnCurrentPlatformDefault from "isActivityJoinableOnCurrentPlatform" /* 14321 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

({ ActivityFlags: c3, ChannelTypes: closure_4, GuildFeatures: hasOwnProperty, Permissions: metroRequire } = Constants);
const ActivityJoinability = { CAN_JOIN: "can_join", CANNOT_JOIN: "cannot_join", JOINED: "joined" };
const result = size.fileFinishedImporting("modules/activities/utils/getActivityJoinability.tsx");

export default function getActivityJoinability(arg0) {
  ({ user, activity, application, channelId, isEmbedded, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, EmbeddedActivitiesStore } = arg0);
  if (isEmbedded) {
    if (isEmbedded) {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let tmp15 = null != currentEmbeddedActivity;
      if (tmp15) {
        let application_id;
        if (activity != null) {
          application_id = activity.application_id;
        }
        tmp15 = currentEmbeddedActivity.applicationId === application_id;
      }
    }
    if (null == user) {
      return obj.CANNOT_JOIN;
    } else {
      const frameSurfaces = getFrameSurfaces.getFrameSurfaces(application);
      if (isEmbedded) {
        if (null != application) {
          if (frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL)) {
            if (!frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN)) {
              if (!frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL)) {
                const voiceStateForUser = VoiceStateStore.getVoiceStateForUser(user.id);
                let channelId1;
                if (voiceStateForUser != null) {
                  channelId1 = voiceStateForUser.channelId;
                }
                let flag = false;
                if (null != channelId1) {
                  const channel = ChannelStore.getChannel(channelId1);
                  let tmp21 = null == channel;
                  if (!tmp21) {
                    let canResult = channel.type === constants2.GUILD_VOICE && channel.application_id === application.id;
                    if (canResult) {
                      canResult = PermissionStore.can(constants4.CONNECT, channel);
                    }
                    tmp21 = canResult;
                  }
                  flag = tmp21;
                }
                if (!flag) {
                  return obj.CANNOT_JOIN;
                }
              }
            }
          }
        }
      }
      if (isEmbedded) {
        if (null != channelId) {
          if (!tmp51Result.isFrameApp(application)) {
            const obj2 = { userId: user.id, activity, channelId, currentUser: tmp, application, isContentGated: tmp2, isActivitiesEnabledForCurrentPlatform: null, ChannelStore: null, VoiceStateStore: null, PermissionStore: null, GuildStore: null };
            obj2.isActivitiesEnabledForCurrentPlatform = useIsActivitiesEnabledForCurrentPlatform.getIsActivitiesEnabledForCurrentPlatform();
            obj2.ChannelStore = ChannelStore;
            obj2.VoiceStateStore = VoiceStateStore;
            obj2.PermissionStore = PermissionStore;
            obj2.GuildStore = GuildStore;
            const tmp51Result7 = useIsActivitiesEnabledForCurrentPlatform;
            if (tmp27Result === getEmbeddedActivityJoinability.EmbeddedActivityJoinability.CAN_JOIN) {
              let CANNOT_JOIN = obj.CAN_JOIN;
            } else {
              CANNOT_JOIN = obj.CANNOT_JOIN;
            }
            return CANNOT_JOIN;
          }
          tmp51Result = getFrameSurfaces;
        }
      }
      if (isEmbedded) {
        if (null == channelId) {
          if (!hasFlagDefault(activity, constants.CONTEXTLESS)) {
            if (!tmp51Result8.isFrameApp(application)) {
              return obj.CANNOT_JOIN;
            }
            tmp51Result8 = getFrameSurfaces;
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
      const tmp51Result10 = getPartySize;
      if (tmp51Result11.hasPartySize(partySize)) {
        if (!tmp51Result12.isPartyFull(partySize)) {
          if (hasFlagDefault(activity, constants.PARTY_PRIVACY_FRIENDS)) {
            if (RelationshipStore.isFriend(user.id)) {
              return obj.CAN_JOIN;
            }
          }
          if (hasFlagDefault(activity, constants.PARTY_PRIVACY_VOICE_CHANNEL)) {
            const channel1 = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
            if (null != channel1) {
              if (VoiceStateStore.isInChannel(channel1.id, user.id)) {
                const type = channel1.type;
                if (constants2.DM !== type) {
                  if (constants2.GROUP_DM !== type) {
                    guild = GuildStore.getGuild(channel1.getGuildId());
                    if (null != guild) {
                      const features = guild.features;
                      if (!features.has(constants3.COMMUNITY)) {
                        const memberCount = GuildMemberCountStore.getMemberCount(guild.id);
                        if (null != memberCount) {
                          if (memberCount < 100) {
                            let CANNOT_JOIN2 = obj.CAN_JOIN;
                          }
                          return CANNOT_JOIN2;
                        }
                        CANNOT_JOIN2 = obj.CANNOT_JOIN;
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
        tmp51Result12 = isPartyFull;
      }
      return obj.CANNOT_JOIN;
    }
  } else {
    let application_id1;
    if (activity != null) {
      application_id1 = activity.application_id;
    }
    const tmp7Result = getCurrentUserPresenceActivityDefault(tmp3, tmp4, application_id1);
    let isInParty = null != tmp7Result;
    if (isInParty) {
      obj = getIsInParty;
      isInParty = obj.getIsInParty(tmp7Result, activity);
    }
  }
  return obj.JOINED;
};
export { ActivityJoinability };