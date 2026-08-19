// === Module 12337: useCanDM ===

// Module 12337 (useCanDM)
import recountRelationshipTypes from "recountRelationshipTypes" /* 5406 */;
import initialize from "initialize" /* 4022 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_profile/hooks/useCanDM.tsx");

export default function useCanDM(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_4];
  closure_2 = _require(589).useStateFromStores(items, () => id.getId() === closure_0);
  const obj = _require(589);
  const items1 = [closure_3];
  closure_3 = _require(589).useStateFromStores(items1, () => {
    let isLurkingResult = null != closure_1;
    if (isLurkingResult) {
      isLurkingResult = lurking.isLurking(tmp);
    }
    return isLurkingResult;
  });
  const RestrictedGuildIds = _require(4066).RestrictedGuildIds;
  closure_4 = RestrictedGuildIds.useSetting();
  const obj2 = _require(589);
  const items2 = [closure_6, closure_5, closure_2];
  return _require(589).useStateFromStores(items2, () => {
    let tmp = !gameFriendsForUser;
    if (!gameFriendsForUser) {
      tmp = !closure_3;
    }
    if (tmp) {
      let isFriendResult = closure_1_6.isFriend(callback);
      if (!isFriendResult) {
        isFriendResult = null != closure_1_5.memberOf(callback).find((item, index) => !closure_4.includes(item));
        const memberOfResult = closure_1_5.memberOf(callback);
      }
      tmp = isFriendResult;
    }
    if (!tmp) {
      let setting = gameFriendsForUser.getGameFriendsForUser(callback).length > 0;
      if (setting) {
        const AllowGameFriendDmsInDiscord = callback(table[5]).AllowGameFriendDmsInDiscord;
        setting = AllowGameFriendDmsInDiscord.getSetting();
      }
      tmp = setting;
    }
    return tmp;
  });
};
export const canDm = function canDm(closure_0, guildId) {
  let isLurkingResult = null != guildId;
  id = id.getId();
  if (isLurkingResult) {
    isLurkingResult = lurking.isLurking(guildId);
  }
  const RestrictedGuildIds = _require(4066).RestrictedGuildIds;
  _require = RestrictedGuildIds.getSetting();
  let isFriendResult = friend.isFriend(closure_0);
  let tmp8 = !tmp4;
  if (id !== closure_0) {
    tmp8 = !isLurkingResult;
  }
  if (tmp8) {
    if (!isFriendResult) {
      isFriendResult = null != closure_5.memberOf(closure_0).find((item, index) => !closure_0.includes(item));
      const memberOfResult = closure_5.memberOf(closure_0);
    }
    tmp8 = isFriendResult;
  }
  if (!tmp8) {
    let setting = gameFriendsForUser.getGameFriendsForUser(closure_0).length > 0;
    if (setting) {
      const AllowGameFriendDmsInDiscord = _require(4066).AllowGameFriendDmsInDiscord;
      setting = AllowGameFriendDmsInDiscord.getSetting();
    }
    tmp8 = setting;
  }
  return tmp8;
};