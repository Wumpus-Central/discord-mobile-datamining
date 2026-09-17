// === Module 11904: getCanJoin ===

// Module 11904 (getCanJoin)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import hasFlagDefault from "hasFlag" /* 7427 */;
import isInviteActiveDefault from "isInviteActive" /* 11905 */;
import getPartySize from "getPartySize" /* 11906 */;
import isPartyFull from "isPartyFull" /* 11908 */;
import getIsInParty from "getIsInParty" /* 11909 */;
import getIsAskToJoin from "getIsAskToJoin" /* 11910 */;
import getRemoteJoinableActivityPlatform from "getRemoteJoinableActivityPlatform" /* 11911 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ ActivityActionTypes: c3, ActivityFlags: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/getCanJoin.tsx");

export const getCanJoin = function getCanJoin(currentUserId) {
  ({ presenceActivity, message } = currentUserId);
  if (message.author.id === currentUserId.currentUserId) {
    return { canJoin: false, remoteJoinPlatform: null };
  } else if (isInviteActiveDefault(presenceActivity, message, tmp2.id)) {
    const partySize = getPartySize.getPartySize(presenceActivity);
    if (obj2.hasPartySize(partySize)) {
      if (!tmp6Result.isPartyFull(partySize)) {
        if (tmp6Result5.getIsInParty(tmp, presenceActivity)) {
          return { canJoin: false, remoteJoinPlatform: null };
        } else {
          if (tmp6Result6.getIsAskToJoin(message)) {
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
                  const obj3 = { canJoin: true, remoteJoinPlatform: remoteJoinableActivityPlatform };
                  return obj3;
                } else if (hasFlagDefault(presenceActivity, constants2.SUPPORTS_JOIN_URL)) {
                  return { canJoin: true, remoteJoinPlatform: null };
                }
                const tmp6Result7 = getRemoteJoinableActivityPlatform;
              }
            }
            if (tmp6Result8.platformSupportsActivityJoin()) {
              if (tmp5) {
                let obj4 = { canJoin: true, remoteJoinPlatform: null };
              }
              return obj4;
            }
            obj4 = { canJoin: false, remoteJoinPlatform: null };
            tmp6Result8 = PlatformUtils;
          }
          tmp6Result6 = getIsAskToJoin;
        }
        tmp6Result5 = getIsInParty;
      }
      tmp6Result = isPartyFull;
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