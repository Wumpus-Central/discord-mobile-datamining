// discord_app/modules/user_profile/hooks/useCanDM.tsx
import UserSettings from "../../user_settings/UserSettings.tsx";
import GameRelationshipStore from "../../game_relationships/GameRelationshipStore.tsx";
import LurkingStore from "../../lurker_mode/LurkingStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useCanDM.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useCanDM(arg0, arg1) {
      _require = arg0;
      dependencyMap = arg1;
      const cResult = require("c").c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [setting];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        class F {
          constructor() {
            return closure_4.getId() === closure_0;
          }
        }
        cResult[1] = arg0;
        cResult[2] = F;
      } else {
        class F {
          constructor() {
            return closure_4.getId() === closure_0;
          }
        }
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, F);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            return closure_4.getId() === closure_0;
          }
        }
        const items1 = [stateFromStores1];
        cResult[3] = items1;
        const tmp8 = items1;
      } else {
        class F {
          constructor() {
            return closure_4.getId() === closure_0;
          }
        }
      }
      if (cResult[4] !== arg1) {
        class F {
          constructor() {
            return closure_4.getId() === closure_0;
          }
        }
        cResult[4] = arg1;
        cResult[5] = tmp10;
      } else {
        class F {
          constructor() {
            return closure_4.getId() === closure_0;
          }
        }
      }
      const tmpResult = require("initialize");
      stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp10);
      const RestrictedGuildIds = tmp(2040).RestrictedGuildIds;
      setting = RestrictedGuildIds.useSetting();
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            return closure_4.getId() === closure_0;
          }
        }
        const items2 = [RelationshipStore, GuildMemberStore, stateFromStores];
        cResult[6] = items2;
      } else {
        class F {
          constructor() {
            return closure_4.getId() === closure_0;
          }
        }
      }
      if (cResult[7] === stateFromStores1) {
        class F {
          constructor() {
            return closure_4.getId() === closure_0;
          }
        }
      }
      const fn = function b() {
        let tmp = !stateFromStores;
        if (!stateFromStores) {
          tmp = !stateFromStores1;
        }
        if (tmp) {
          let isFriendResult = RelationshipStore.isFriend(closure_0);
          if (!isFriendResult) {
            isFriendResult = null != GuildMemberStore.memberOf(closure_0).find((item) => !setting.includes(item));
            const memberOfResult = GuildMemberStore.memberOf(closure_0);
          }
          tmp = isFriendResult;
        }
        if (!tmp) {
          setting = GameRelationshipStore.getGameFriendsForUser(closure_0).length > 0;
          if (setting) {
            const AllowGameFriendDmsInDiscord = UserSettings.AllowGameFriendDmsInDiscord;
            setting = AllowGameFriendDmsInDiscord.getSetting();
          }
          tmp = setting;
        }
        return tmp;
      };
      cResult[7] = stateFromStores1;
      cResult[8] = stateFromStores;
      cResult[9] = setting;
      cResult[10] = arg0;
      cResult[11] = fn;
      const tmpResult2 = require("initialize");
    }
  : function useCanDM(arg0, arg1) {
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
    };
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
