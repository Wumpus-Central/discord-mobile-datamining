// discord_app/modules/user_profile/hooks/useCanDM.tsx
import UserSettings from "../../user_settings/UserSettings.tsx";
import GameRelationshipStore from "../../game_relationships/GameRelationshipStore.tsx";
import LurkingStore from "../../lurker_mode/LurkingStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useCanDM.tsx");

export default function useCanDM(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [closure_4];
  closure_2 = require("initialize").useStateFromStores(items, () => AuthenticationStore.getId() === closure_0);
  const obj = require("initialize");
  const items1 = [closure_3];
  closure_3 = require("initialize").useStateFromStores(items1, () => {
    let isLurkingResult = null != closure_1;
    if (isLurkingResult) {
      isLurkingResult = LurkingStore.isLurking(tmp);
    }
    return isLurkingResult;
  });
  const RestrictedGuildIds = require("UserSettings").RestrictedGuildIds;
  closure_4 = RestrictedGuildIds.useSetting();
  const obj2 = require("initialize");
  const items2 = [RelationshipStore, GuildMemberStore, closure_2];
  return require("initialize").useStateFromStores(items2, () => {
    let tmp = !closure_2;
    if (!closure_2) {
      tmp = !closure_3;
    }
    if (tmp) {
      let isFriendResult = RelationshipStore.isFriend(closure_0);
      if (!isFriendResult) {
        isFriendResult = null != GuildMemberStore.memberOf(closure_0).find((item) => !closure_1_4.includes(item));
        const memberOfResult = GuildMemberStore.memberOf(closure_0);
      }
      tmp = isFriendResult;
    }
    if (!tmp) {
      let setting = GameRelationshipStore.getGameFriendsForUser(closure_0).length > 0;
      if (setting) {
        const AllowGameFriendDmsInDiscord = UserSettings.AllowGameFriendDmsInDiscord;
        setting = AllowGameFriendDmsInDiscord.getSetting();
      }
      tmp = setting;
    }
    return tmp;
  });
}
export const canDm = function canDm(userId, guildId) {
  let isLurkingResult = null != guildId;
  const id = AuthenticationStore.getId();
  if (isLurkingResult) {
    isLurkingResult = LurkingStore.isLurking(guildId);
  }
  const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
  const setting2 = RestrictedGuildIds.getSetting();
  let isFriendResult = RelationshipStore.isFriend(userId);
  let tmp8 = !tmp4;
  if (id !== userId) {
    tmp8 = !isLurkingResult;
  }
  if (tmp8) {
    if (!isFriendResult) {
      isFriendResult = null != GuildMemberStore.memberOf(userId).find((item) => !closure_0.includes(item));
      const memberOfResult = GuildMemberStore.memberOf(userId);
    }
    tmp8 = isFriendResult;
  }
  if (!tmp8) {
    let setting = GameRelationshipStore.getGameFriendsForUser(userId).length > 0;
    if (setting) {
      const AllowGameFriendDmsInDiscord = UserSettings.AllowGameFriendDmsInDiscord;
      setting = AllowGameFriendDmsInDiscord.getSetting();
    }
    tmp8 = setting;
  }
  return tmp8;
};
