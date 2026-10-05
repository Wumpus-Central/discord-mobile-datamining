// discord_app/modules/activities/utils/getCanJoin.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import hasFlagDefault from "hasFlag.tsx";
import isInviteActiveDefault from "isInviteActive.tsx";
import _slicedToArray from "getPartySize.tsx";
import hasPartySize from "hasPartySize.tsx";
import isPartyFull from "isPartyFull.tsx";
import getIsInParty from "getIsInParty.tsx";
import getIsAskToJoin from "getIsAskToJoin.tsx";
import getRemoteJoinableActivityPlatform from "getRemoteJoinableActivityPlatform.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ ActivityActionTypes: c3, ActivityFlags: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/getCanJoin.tsx");

export const getCanJoin = function getCanJoin(currentUserId) {
  let message;
  let presenceActivity;
  ({ presenceActivity, message } = currentUserId);
  if (message.author.id === currentUserId.currentUserId) {
    return { canJoin: false, remoteJoinPlatform: null };
  } else if (isInviteActiveDefault(presenceActivity, message, tmp2.id)) {
    const obj = _slicedToArray;
    const partySize = obj.getPartySize(presenceActivity);
    const obj2 = hasPartySize;
    if (obj2.hasPartySize(partySize)) {
      const tmp6Result = isPartyFull;
      if (!tmp6Result.isPartyFull(partySize)) {
        const tmp6Result5 = getIsInParty;
        if (tmp6Result5.getIsInParty(tmp, presenceActivity)) {
          return { canJoin: false, remoteJoinPlatform: null };
        } else {
          const tmp6Result6 = getIsAskToJoin;
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
                const tmp6Result7 = getRemoteJoinableActivityPlatform;
                const remoteJoinableActivityPlatform = tmp6Result7.getRemoteJoinableActivityPlatform(presenceActivity);
                if (null != remoteJoinableActivityPlatform) {
                  return { canJoin: true, remoteJoinPlatform: remoteJoinableActivityPlatform };
                } else if (hasFlagDefault(presenceActivity, constants2.SUPPORTS_JOIN_URL)) {
                  return { canJoin: true, remoteJoinPlatform: null };
                }
              }
            }
            const tmp6Result8 = PlatformUtils;
            if (tmp6Result8.platformSupportsActivityJoin()) {
              let obj4;
              if (tmp5) {
                obj4 = { canJoin: true, remoteJoinPlatform: null };
              }
              return obj4;
            }
            obj4 = { canJoin: false, remoteJoinPlatform: null };
          }
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
          const tmp9Result = getIsInParty;
          isPlatformEmbedded = !tmp9Result.getIsInParty(tmp8Result, activity);
        }
        tmp8 = isPlatformEmbedded;
      }
      tmp6 = tmp8;
    }
    tmp = tmp6;
  }
  return tmp;
};
