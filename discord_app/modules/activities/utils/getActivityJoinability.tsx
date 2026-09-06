// discord_app/modules/activities/utils/getActivityJoinability.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import hasFlagDefault from "hasFlag.tsx";
import useIsActivitiesEnabledForCurrentPlatform from "../useIsActivitiesEnabledForCurrentPlatform.tsx";
import getEmbeddedActivityJoinability from "getEmbeddedActivityJoinability.tsx";
import getPartySize from "getPartySize.tsx";
import getIsInParty from "getIsInParty.tsx";
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity.tsx";
import isActivityJoinableOnCurrentPlatformDefault from "isActivityJoinableOnCurrentPlatform.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ ActivityFlags: c3, ChannelTypes: closure_4, GuildFeatures: hasOwnProperty } = Constants);
const ActivityJoinability = { CAN_JOIN: "can_join", CANNOT_JOIN: "cannot_join", JOINED: "joined" };
const result = size.fileFinishedImporting("modules/activities/utils/getActivityJoinability.tsx");

export default function getActivityJoinability(arg0) {
  ({
    user,
    activity,
    channelId,
    isEmbedded,
    ChannelStore,
    GuildStore,
    GuildMemberCountStore,
    RelationshipStore,
    SelectedChannelStore,
    VoiceStateStore,
    EmbeddedActivitiesStore,
  } = arg0);
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
          obj = {
            userId: user.id,
            activity,
            channelId,
            currentUser: tmp2,
            application: tmp,
            isActivitiesEnabledForCurrentPlatform: null,
            ChannelStore: null,
            VoiceStateStore: null,
            PermissionStore: null,
            GuildStore: null,
          };
          obj.isActivitiesEnabledForCurrentPlatform =
            useIsActivitiesEnabledForCurrentPlatform.getIsActivitiesEnabledForCurrentPlatform();
          obj.ChannelStore = ChannelStore;
          obj.VoiceStateStore = VoiceStateStore;
          obj.PermissionStore = tmp3;
          obj.GuildStore = GuildStore;
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
          if (!hasFlagDefault(activity, constants.CONTEXTLESS)) {
            return obj.CANNOT_JOIN;
          }
        }
      }
      if (!isEmbedded) {
        return obj.CANNOT_JOIN;
      }
      const partySize = getPartySize.getPartySize(activity);
      const tmp27 = require;
      if (obj4.hasPartySize(partySize)) {
        if (!tmp27Result.isPartyFull(partySize)) {
          if (hasFlagDefault(activity, constants.PARTY_PRIVACY_FRIENDS)) {
            if (RelationshipStore.isFriend(user.id)) {
              return obj.CAN_JOIN;
            }
          }
          if (tmp30(7313)(activity, tmp31.PARTY_PRIVACY_VOICE_CHANNEL)) {
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
        tmp27Result = tmp27(11757);
      }
      return obj.CANNOT_JOIN;
    }
  } else {
    let application_id1;
    if (activity != null) {
      application_id1 = activity.application_id;
    }
    const tmp8Result = getCurrentUserPresenceActivityDefault(tmp4, tmp5, application_id1);
    let isInParty = null != tmp8Result;
    if (isInParty) {
      obj = getIsInParty;
      isInParty = obj.getIsInParty(tmp8Result, activity);
    }
  }
  return obj.JOINED;
}
export { ActivityJoinability };
