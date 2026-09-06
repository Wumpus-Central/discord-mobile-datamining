// discord_app/modules/activities/utils/getCanJoin.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import isInviteActiveDefault from "isInviteActive.tsx";
import getPartySize from "getPartySize.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ ActivityActionTypes: c3, ActivityFlags: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/getCanJoin.tsx");

export const getCanJoin = function getCanJoin(currentUserId) {
  ({ presenceActivity, message } = currentUserId);
  if (message.author.id === currentUserId.currentUserId) {
    return { canJoin: false, remoteJoinPlatform: null };
  } else {
    if (isInviteActiveDefault(presenceActivity, message, tmp2.id)) {
      let obj = getPartySize;
      const partySize = obj.getPartySize(presenceActivity);
      if (obj2.hasPartySize(partySize)) {
        let tmp6Result = tmp6(11757);
        if (!tmp6Result.isPartyFull(partySize)) {
          tmp6Result = tmp6(11758);
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
                  const remoteJoinableActivityPlatform =
                    tmp6(11760).getRemoteJoinableActivityPlatform(presenceActivity);
                  if (null != remoteJoinableActivityPlatform) {
                    obj = { canJoin: true, remoteJoinPlatform: remoteJoinableActivityPlatform };
                    return obj;
                  } else if (tmp13(7313)(presenceActivity, constants2.SUPPORTS_JOIN_URL)) {
                    return { canJoin: true, remoteJoinPlatform: null };
                  }
                  const tmp6Result2 = tmp6(11760);
                }
              }
              if (tmp6Result3.platformSupportsActivityJoin()) {
                if (tmp5) {
                  obj = { canJoin: true, remoteJoinPlatform: null };
                }
                return obj;
              }
              obj = { canJoin: false, remoteJoinPlatform: null };
              tmp6Result3 = tmp6(1115);
            }
            tmp6Result1 = tmp6(11759);
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
    let tmp6 = isInviteActiveDefault(activity, arg2, id.id);
    if (tmp6) {
      let tmp8 = tmp4(7313)(activity, constants2.SYNC);
      if (tmp8) {
        let isPlatformEmbedded = PlatformUtils.isPlatformEmbedded;
        if (isPlatformEmbedded) {
          isPlatformEmbedded = !tmp9(11758).getIsInParty(tmp8Result, activity);
          const tmp9Result = tmp9(11758);
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
