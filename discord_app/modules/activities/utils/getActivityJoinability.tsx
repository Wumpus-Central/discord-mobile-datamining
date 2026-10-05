// === Module 12857: getActivityJoinability ===

// Module 12857 (getActivityJoinability)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import hasFlagDefault from "hasFlag" /* 6816 */;
import useIsActivitiesEnabledForCurrentPlatform from "useIsActivitiesEnabledForCurrentPlatform" /* 9012 */;
import getEmbeddedActivityJoinability from "getEmbeddedActivityJoinability" /* 9046 */;
import _slicedToArray from "_slicedToArray" /* 11387 */;
import hasPartySize from "hasPartySize" /* 11388 */;
import isPartyFull from "isPartyFull" /* 11389 */;
import getIsInParty from "getIsInParty" /* 11390 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 11393 */;
import isActivityJoinableOnCurrentPlatformDefault from "isActivityJoinableOnCurrentPlatform" /* 12858 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const getEmbeddedActivityJoinabilityDefault = getEmbeddedActivityJoinability;

let c3;
let closure_4;
let hasOwnProperty;
({ ActivityFlags: c3, ChannelTypes: closure_4, GuildFeatures: hasOwnProperty } = Constants);
const ActivityJoinability = { CAN_JOIN: "can_join", CANNOT_JOIN: "cannot_join", JOINED: "joined" };
const result = size.fileFinishedImporting("modules/activities/utils/getActivityJoinability.tsx");

export default function getActivityJoinability(arg0) {
  let ChannelStore;
  let EmbeddedActivitiesStore;
  let GuildMemberCountStore;
  let GuildStore;
  let RelationshipStore;
  let SelectedChannelStore;
  let VoiceStateStore;
  let activity;
  let channelId;
  let isEmbedded;
  let obj;
  let obj8;
  let user;
  ({ user, activity, channelId, isEmbedded, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, EmbeddedActivitiesStore } = arg0);
  if (isEmbedded) {
    if (isEmbedded) {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let tmp16 = null != currentEmbeddedActivity;
      if (tmp16) {
        let application_id;
        const applicationId = currentEmbeddedActivity.applicationId;
        if (activity != null) {
          application_id = activity.application_id;
        }
        tmp16 = applicationId === application_id;
      }
    }
    if (null == user) {
      return obj.CANNOT_JOIN;
    } else {
      if (isEmbedded) {
        if (null != channelId) {
          let CANNOT_JOIN2;
          const obj5 = { userId: user.id, activity, channelId, currentUser: tmp2, application: tmp, isActivitiesEnabledForCurrentPlatform: obj8.getIsActivitiesEnabledForCurrentPlatform(), ChannelStore, VoiceStateStore, PermissionStore: tmp3, GuildStore };
          const tmp45 = getEmbeddedActivityJoinabilityDefault;
          obj8 = useIsActivitiesEnabledForCurrentPlatform;
          const tmp45Result = tmp45(obj5);
          if (tmp45Result === getEmbeddedActivityJoinability.EmbeddedActivityJoinability.CAN_JOIN) {
            CANNOT_JOIN2 = obj.CAN_JOIN;
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
      const obj3 = _slicedToArray;
      const partySize = obj3.getPartySize(activity);
      const obj4 = hasPartySize;
      if (obj4.hasPartySize(partySize)) {
        const tmp27Result = isPartyFull;
        if (!tmp27Result.isPartyFull(partySize)) {
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
                    const guild = GuildStore.getGuild(channel.getGuildId());
                    if (null != guild) {
                      const features = guild.features;
                      if (!features.has(hasOwnProperty.COMMUNITY)) {
                        const memberCount = GuildMemberCountStore.getMemberCount(guild.id);
                        if (null != memberCount) {
                          let CANNOT_JOIN;
                          if (memberCount < 100) {
                            CANNOT_JOIN = obj.CAN_JOIN;
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
      }
      return obj.CANNOT_JOIN;
    }
  } else {
    let application_id1;
    const tmp8 = getCurrentUserPresenceActivityDefault;
    if (activity != null) {
      application_id1 = activity.application_id;
    }
    const tmp8Result = tmp8(tmp4, tmp5, application_id1);
    let isInParty = null != tmp8Result;
    if (isInParty) {
      obj = getIsInParty;
      isInParty = obj.getIsInParty(tmp8Result, activity);
    }
  }
  return obj.JOINED;
};
export { ActivityJoinability };