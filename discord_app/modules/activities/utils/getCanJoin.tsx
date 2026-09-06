// === Module 11753: getCanJoin ===

// Module 11753 (getCanJoin)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import hasFlagDefault from "hasFlag" /* 7313 */;
import isInviteActiveDefault from "isInviteActive" /* 11754 */;
import getPartySize from "getPartySize" /* 11755 */;
import isPartyFull from "isPartyFull" /* 11757 */;
import getIsInParty from "getIsInParty" /* 11758 */;
import getIsAskToJoin from "getIsAskToJoin" /* 11759 */;
import getRemoteJoinableActivityPlatform from "getRemoteJoinableActivityPlatform" /* 11760 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ ActivityActionTypes: c3, ActivityFlags: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/getCanJoin.tsx");

export const getCanJoin = function getCanJoin(currentUserId) {
  ({ presenceActivity, message } = currentUserId);
  if (message.author.id === currentUserId.currentUserId) {
    return { canJoin: false, remoteJoinPlatform: null };
  } else if (isInviteActiveDefault(presenceActivity, message, tmp2.id)) {
    let obj = getPartySize;
    const partySize = obj.getPartySize(presenceActivity);
    if (obj2.hasPartySize(partySize)) {
      let tmp6Result = isPartyFull;
      if (!tmp6Result.isPartyFull(partySize)) {
        tmp6Result = getIsInParty;
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
                const remoteJoinableActivityPlatform = getRemoteJoinableActivityPlatform.getRemoteJoinableActivityPlatform(presenceActivity);
                if (null != remoteJoinableActivityPlatform) {
                  obj = { canJoin: true, remoteJoinPlatform: remoteJoinableActivityPlatform };
                  return obj;
                } else if (hasFlagDefault(presenceActivity, constants2.SUPPORTS_JOIN_URL)) {
                  return { canJoin: true, remoteJoinPlatform: null };
                }
                const tmp6Result2 = getRemoteJoinableActivityPlatform;
              }
            }
            if (tmp6Result3.platformSupportsActivityJoin()) {
              if (tmp5) {
                obj = { canJoin: true, remoteJoinPlatform: null };
              }
              return obj;
            }
            obj = { canJoin: false, remoteJoinPlatform: null };
            tmp6Result3 = PlatformUtils;
          }
          tmp6Result1 = getIsAskToJoin;
        }
      }
    }
    return { canJoin: false, remoteJoinPlatform: null };
  } else {
    return { canJoin: false, remoteJoinPlatform: null };
  }
};
export const getCanSync = function getCanSync(activity, tmp8Result, arg2, id) {
  let tmp = null != activity;
  if (tmp) {
    let tmp6 = isInviteActiveDefault(activity, arg2, id.id);
    if (tmp6) {
      let tmp8 = hasFlagDefault(activity, constants2.SYNC);
      if (tmp8) {
        let isPlatformEmbedded = PlatformUtils.isPlatformEmbedded;
        if (isPlatformEmbedded) {
          isPlatformEmbedded = !getIsInParty.getIsInParty(tmp8Result, activity);
          const tmp9Result = getIsInParty;
        }
        tmp8 = isPlatformEmbedded;
      }
      tmp6 = tmp8;
    }
    tmp = tmp6;
  }
  return tmp;
};