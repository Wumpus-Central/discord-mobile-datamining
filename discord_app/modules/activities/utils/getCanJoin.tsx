// discord_app/modules/activities/utils/getCanJoin.tsx
import set from "../../../../_runtime/00002_set.js";
import set2 from "../../../utils/PlatformUtils.tsx";
import resultDefault from "isInviteActive.tsx";
import getPartySize from "getPartySize.tsx";
import ME from "../../../Constants.tsx";

({ ActivityActionTypes: c3, ActivityFlags: c4 } = ME);
const result = set.fileFinishedImporting("modules/activities/utils/getCanJoin.tsx");

export const getCanJoin = function getCanJoin(currentUserId) {
  ({ presenceActivity, message } = currentUserId);
  if (message.author.id === currentUserId.currentUserId) {
    return { canJoin: false, remoteJoinPlatform: null };
  } else {
    if (resultDefault(presenceActivity, message, tmp2.id)) {
      let obj = getPartySize;
      const partySize = obj.getPartySize(presenceActivity);
      if (obj2.hasPartySize(partySize)) {
        let tmp6Result = tmp6(11388);
        if (!tmp6Result.isPartyFull(partySize)) {
          tmp6Result = tmp6(11389);
          if (tmp6Result.getIsInParty(tmp, presenceActivity)) {
            return { canJoin: false, remoteJoinPlatform: null };
          } else {
            if (tmp6Result1.getIsAskToJoin(message)) {
              return { canJoin: false, remoteJoinPlatform: null };
            } else {
              if (tmp3) {
                if (tmp4) {
                  return { canJoin: true, remoteJoinPlatform: null };
                }
              }
              const activity = message.activity;
              let type;
              if (activity != null) {
                type = activity.type;
              }
              if (type === constants.JOIN) {
                if (null != presenceActivity) {
                  const remoteJoinableActivityPlatform = tmp6(11391).getRemoteJoinableActivityPlatform(presenceActivity);
                  if (null != remoteJoinableActivityPlatform) {
                    obj = { canJoin: true, remoteJoinPlatform: null };
                    obj[1] = remoteJoinableActivityPlatform;
                    return obj;
                  } else if (tmp13(6103)(presenceActivity, constants2.SUPPORTS_JOIN_URL)) {
                    return { canJoin: true, remoteJoinPlatform: null };
                  }
                  const tmp6Result2 = tmp6(11391);
                }
              }
              if (tmp6Result3.platformSupportsActivityJoin()) {
                if (tmp5) {
                  obj = { canJoin: true, remoteJoinPlatform: null };
                }
                return obj;
              }
              obj = { canJoin: false, remoteJoinPlatform: null };
              tmp6Result3 = tmp6(500);
            }
            tmp6Result1 = tmp6(11390);
          }
        }
      }
      return { canJoin: false, remoteJoinPlatform: null };
    } else {
      return { canJoin: false, remoteJoinPlatform: null };
    }
    tmp13 = importDefault;
  }
};
export const getCanSync = function getCanSync(activity, tmp8Result, arg2, id) {
  let tmp = null != activity;
  if (tmp) {
    let tmp6 = resultDefault(activity, arg2, id.id);
    if (tmp6) {
      let tmp8 = tmp4(6103)(activity, constants2.SYNC);
      if (tmp8) {
        let isPlatformEmbedded = set2.isPlatformEmbedded;
        if (isPlatformEmbedded) {
          isPlatformEmbedded = !tmp9(11389).getIsInParty(tmp8Result, activity);
          const tmp9Result = tmp9(11389);
        }
        tmp8 = isPlatformEmbedded;
        tmp9 = require;
      }
      tmp6 = tmp8;
    }
    tmp = tmp6;
    tmp4 = importDefault;
  }
  return tmp;
};