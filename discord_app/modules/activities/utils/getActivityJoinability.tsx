// discord_app/modules/activities/utils/getActivityJoinability.tsx
import ME from "ME";
import { set } from "../../../utils/PlatformUtils.tsx";
import { useIsActivitiesEnabledForCurrentPlatform } from "../useIsActivitiesEnabledForCurrentPlatform.tsx";
import { getCurrentUserPresenceActivity } from "getCurrentUserPresenceActivity.tsx";
import { getEmbeddedActivityJoinability } from "getEmbeddedActivityJoinability.tsx";
import { getIsInParty } from "getIsInParty.tsx";
import { getPartySize } from "getPartySize.tsx";
import { hasFlag } from "hasFlag.tsx";
import { isActivityJoinableOnCurrentPlatform } from "isActivityJoinableOnCurrentPlatform.tsx";

let c3;
let c4;
let c5;
({ ActivityFlags: c3, ChannelTypes: c4, GuildFeatures: c5 } = ME);
let obj = { CAN_JOIN: "can_join", CANNOT_JOIN: "cannot_join", JOINED: "joined" };
const result = require("getIsInParty").fileFinishedImporting("modules/activities/utils/getActivityJoinability.tsx");

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
  let user;
  ({ user, activity, channelId, isEmbedded, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, EmbeddedActivitiesStore } = arg0);
  if (isEmbedded) {
    if (isEmbedded) {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let tmp16 = null != currentEmbeddedActivity;
      if (tmp16) {
        let application_id;
        if (activity != null) {
          application_id = activity.application_id;
        }
        tmp16 = currentEmbeddedActivity.applicationId === application_id;
      }
    }
    if (null == user) {
      return obj.CANNOT_JOIN;
    } else {
      if (isEmbedded) {
        if (null != channelId) {
          obj = { userId: null, activity: null, channelId: null, currentUser: null, application: null, isActivitiesEnabledForCurrentPlatform: null, ChannelStore: null, VoiceStateStore: null, PermissionStore: null, GuildStore: null };
          obj[0] = user.id;
          obj[1] = activity;
          obj[2] = channelId;
          obj[3] = tmp2;
          obj[4] = tmp;
          const tmp45 = getEmbeddedActivityJoinability;
          obj[5] = useIsActivitiesEnabledForCurrentPlatform.getIsActivitiesEnabledForCurrentPlatform();
          obj[6] = ChannelStore;
          obj[7] = VoiceStateStore;
          obj[8] = tmp3;
          obj[9] = GuildStore;
          const obj8 = useIsActivitiesEnabledForCurrentPlatform;
          if (tmp45Result === getEmbeddedActivityJoinability.EmbeddedActivityJoinability.CAN_JOIN) {
            let CANNOT_JOIN2 = obj.CAN_JOIN;
          } else {
            CANNOT_JOIN2 = obj.CANNOT_JOIN;
          }
          return CANNOT_JOIN2;
        }
      }
      if (isEmbedded) {
        if (null == channelId) {
          if (!hasFlag(activity, constants.CONTEXTLESS)) {
            return obj.CANNOT_JOIN;
          }
        }
      }
      if (!isEmbedded) {
        if (isActivityJoinableOnCurrentPlatform(activity)) {
          const obj2 = set;
        }
        return obj.CANNOT_JOIN;
      }
      const partySize = getPartySize.getPartySize(activity);
      const obj3 = getPartySize;
      const tmp27 = require;
      if (obj4.hasPartySize(partySize)) {
        if (!tmp27Result.isPartyFull(partySize)) {
          if (hasFlag(activity, constants.PARTY_PRIVACY_FRIENDS)) {
            if (RelationshipStore.isFriend(user.id)) {
              return obj.CAN_JOIN;
            }
          }
          if (tmp30(5992)(activity, tmp31.PARTY_PRIVACY_VOICE_CHANNEL)) {
            const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
            if (null != channel) {
              if (VoiceStateStore.isInChannel(channel.id, user.id)) {
                const type = channel.type;
                if (constants2.DM !== type) {
                  if (constants2.GROUP_DM !== type) {
                    const guild = GuildStore.getGuild(channel.getGuildId());
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
          tmp30 = importDefault;
          tmp31 = constants;
        }
        tmp27Result = tmp27(11222);
      }
      return obj.CANNOT_JOIN;
    }
  } else {
    let application_id1;
    if (activity != null) {
      application_id1 = activity.application_id;
    }
    const tmp8Result = getCurrentUserPresenceActivity(tmp4, tmp5, application_id1);
    let isInParty = null != tmp8Result;
    if (isInParty) {
      obj = getIsInParty;
      isInParty = obj.getIsInParty(tmp8Result, activity);
    }
    const tmp8 = getCurrentUserPresenceActivity;
  }
  return obj.JOINED;
};
export const ActivityJoinability = obj;