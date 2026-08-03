// === Module 12322: useCanDM ===

// Module 12322 (useCanDM)
import recountRelationshipTypes from "recountRelationshipTypes";
import initialize from "initialize";
import fetchFingerprint from "fetchFingerprint";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import upsertRelationship from "upsertRelationship";

const require = arg1;
const result = require("fetchFingerprint").fileFinishedImporting("modules/user_profile/hooks/useCanDM.tsx");

export default function useCanDM(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  const items = [fetchFingerprint];
  let recountRelationshipTypes = _require(589).useStateFromStores(items, () => id.getId() === closure_0);
  const obj = _require(589);
  const items1 = [initialize];
  initialize = _require(589).useStateFromStores(items1, () => {
    let isLurkingResult = null != closure_1;
    if (isLurkingResult) {
      isLurkingResult = lurking.isLurking(tmp);
    }
    return isLurkingResult;
  });
  const RestrictedGuildIds = _require(3928).RestrictedGuildIds;
  fetchFingerprint = RestrictedGuildIds.useSetting();
  const obj2 = _require(589);
  const items2 = [upsertRelationship, trackCommunicationDisabled, recountRelationshipTypes];
  return _require(589).useStateFromStores(items2, () => {
    let tmp = !gameFriendsForUser;
    if (!gameFriendsForUser) {
      tmp = !initialize;
    }
    if (tmp) {
      let isFriendResult = outer1_6.isFriend(callback);
      if (!isFriendResult) {
        isFriendResult = null != outer1_5.memberOf(tmp4).find((arg0) => !fetchFingerprint.includes(arg0));
        const memberOfResult = outer1_5.memberOf(tmp4);
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
  const RestrictedGuildIds = _require(3928).RestrictedGuildIds;
  _require = RestrictedGuildIds.getSetting();
  let isFriendResult = friend.isFriend(userId);
  let tmp8 = !tmp4;
  if (id !== userId) {
    tmp8 = !isLurkingResult;
  }
  if (tmp8) {
    if (!isFriendResult) {
      isFriendResult = null != trackCommunicationDisabled.memberOf(userId).find((arg0) => !closure_0.includes(arg0));
      const memberOfResult = trackCommunicationDisabled.memberOf(userId);
    }
    tmp8 = isFriendResult;
  }
  if (!tmp8) {
    let setting = gameFriendsForUser.getGameFriendsForUser(userId).length > 0;
    if (setting) {
      const AllowGameFriendDmsInDiscord = _require(3928).AllowGameFriendDmsInDiscord;
      setting = AllowGameFriendDmsInDiscord.getSetting();
    }
    tmp8 = setting;
  }
  return tmp8;
};