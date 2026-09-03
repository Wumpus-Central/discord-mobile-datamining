// === Module 12832: useCanDM ===

// Module 12832 (useCanDM)
import closure_2 from "recountRelationshipTypes" /* 7413 */;
import closure_3 from "initialize" /* 4121 */;
import closure_4 from "fetchFingerprint" /* 1215 */;
import closure_5 from "trackCommunicationDisabled" /* 1991 */;
import closure_6 from "markAllUserIdListsStale" /* 4130 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useCanDM.tsx");

export default function useCanDM(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_4];
  closure_2 = _require(586).useStateFromStores(items, () => id.getId() === closure_0);
  const obj = _require(586);
  const items1 = [closure_3];
  closure_3 = _require(586).useStateFromStores(items1, () => {
    let isLurkingResult = null != closure_1;
    if (isLurkingResult) {
      isLurkingResult = lurking.isLurking(tmp);
    }
    return isLurkingResult;
  });
  const RestrictedGuildIds = _require(4166).RestrictedGuildIds;
  closure_4 = RestrictedGuildIds.useSetting();
  const obj2 = _require(586);
  const items2 = [closure_6, closure_5, closure_2];
  return _require(586).useStateFromStores(items2, () => {
    let tmp = !gameFriendsForUser;
    if (!gameFriendsForUser) {
      tmp = !closure_3;
    }
    if (tmp) {
      let isFriendResult = closure_1_6.isFriend(callback);
      if (!isFriendResult) {
        isFriendResult = null != closure_1_5.memberOf(tmp4).find((arg0) => !closure_4.includes(arg0));
        const memberOfResult = closure_1_5.memberOf(tmp4);
      }
      tmp = isFriendResult;
      tmp4 = callback;
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
export const canDm = function canDm(userId, guildId) {
  let isLurkingResult = null != guildId;
  id = id.getId();
  if (isLurkingResult) {
    isLurkingResult = lurking.isLurking(guildId);
  }
  const RestrictedGuildIds = _require(4166).RestrictedGuildIds;
  _require = RestrictedGuildIds.getSetting();
  let isFriendResult = friend.isFriend(userId);
  let tmp8 = !tmp4;
  if (id !== userId) {
    tmp8 = !isLurkingResult;
  }
  if (tmp8) {
    if (!isFriendResult) {
      isFriendResult = null != closure_5.memberOf(userId).find((arg0) => !closure_0.includes(arg0));
      const memberOfResult = closure_5.memberOf(userId);
    }
    tmp8 = isFriendResult;
  }
  if (!tmp8) {
    let setting = gameFriendsForUser.getGameFriendsForUser(userId).length > 0;
    if (setting) {
      const AllowGameFriendDmsInDiscord = _require(4166).AllowGameFriendDmsInDiscord;
      setting = AllowGameFriendDmsInDiscord.getSetting();
    }
    tmp8 = setting;
  }
  return tmp8;
};