// === Module 10916: getCanJoin ===

// Module 10916 (getCanJoin)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import hasFlagDefault from "hasFlag" /* 7260 */;
import resultDefault from "result" /* 10917 */;
import getPartySize from "getPartySize" /* 10918 */;
import isPartyFull from "isPartyFull" /* 10920 */;
import getIsInParty from "getIsInParty" /* 10921 */;
import getIsAskToJoin from "getIsAskToJoin" /* 10922 */;
import getRemoteJoinableActivityPlatform from "getRemoteJoinableActivityPlatform" /* 10923 */;
import ME from "ME" /* 676 */;

({ ActivityActionTypes: c3, ActivityFlags: c4 } = ME);
const result = obj132.fileFinishedImporting("modules/activities/utils/getCanJoin.tsx");

export const getCanJoin = function getCanJoin(currentUserId) {
  ({ presenceActivity, message } = currentUserId);
  if (message.author.id === currentUserId.currentUserId) {
    return { canJoin: false, remoteJoinPlatform: null };
  } else if (resultDefault(presenceActivity, message, tmp2.id)) {
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
                  obj = { canJoin: true, remoteJoinPlatform: null };
                  obj[1] = remoteJoinableActivityPlatform;
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
            tmp6Result3 = obj1322;
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
    let tmp6 = resultDefault(activity, arg2, id.id);
    if (tmp6) {
      let tmp8 = hasFlagDefault(activity, constants2.SYNC);
      if (tmp8) {
        let isPlatformEmbedded = obj1322.isPlatformEmbedded;
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