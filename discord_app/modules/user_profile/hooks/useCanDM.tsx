// discord_app/modules/user_profile/hooks/useCanDM.tsx
import UserSettings from "../../user_settings/UserSettings.tsx";
import GameRelationshipStore from "../../game_relationships/GameRelationshipStore.tsx";
import LurkingStore from "../../lurker_mode/LurkingStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_3, closure_4, dependencyMap;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let first;
      let setting;
      let stateFromStores1;
      let tmp8;
      _require = arg0;
      dependencyMap = arg1;
      let tmp = _require;
      const obj = require("react");
      const cResult = obj.c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [setting];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        class F {
          constructor() {
            return AuthenticationStore.getId() === closure_0;
          }
        }
        cResult[1] = arg0;
        cResult[2] = F;
      } else {
        class F {
          constructor() {
            return AuthenticationStore.getId() === closure_0;
          }
        }
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, F);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            return AuthenticationStore.getId() === closure_0;
          }
        }
        const items1 = [stateFromStores1];
        cResult[3] = items1;
        tmp8 = items1;
      } else {
        class F {
          constructor() {
            return AuthenticationStore.getId() === closure_0;
          }
        }
      }
      if (cResult[4] !== arg1) {
        class I {
          constructor() {
            const isLurkingResult = null != closure_1 && LurkingStore.isLurking(tmp);
            return isLurkingResult;
          }
        }
        cResult[4] = arg1;
        cResult[5] = I;
      } else {
        class I {
          constructor() {
            const isLurkingResult = null != closure_1 && LurkingStore.isLurking(tmp);
            return isLurkingResult;
          }
        }
      }
      const tmpResult2 = tmp(504);
      stateFromStores1 = tmpResult2.useStateFromStores(tmp8, I);
      const RestrictedGuildIds = tmp(2028).RestrictedGuildIds;
      setting = RestrictedGuildIds.useSetting();
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            const isLurkingResult = null != closure_1 && LurkingStore.isLurking(tmp);
            return isLurkingResult;
          }
        }
        const items2 = [RelationshipStore, GuildMemberStore, stateFromStores];
        cResult[6] = items2;
      } else {
        class I {
          constructor() {
            const isLurkingResult = null != closure_1 && LurkingStore.isLurking(tmp);
            return isLurkingResult;
          }
        }
      }
      if (cResult[7] === stateFromStores1) {
        class I {
          constructor() {
            const isLurkingResult = null != closure_1 && LurkingStore.isLurking(tmp);
            return isLurkingResult;
          }
        }
      }
      const fn = function b() {
        let tmp = !stateFromStores && !stateFromStores1;
        if (tmp) {
          let isFriendResult = RelationshipStore.isFriend(closure_0);
          if (!isFriendResult) {
            const memberOfResult = GuildMemberStore.memberOf(closure_0);
            isFriendResult = null != memberOfResult.find((item) => !setting.includes(item));
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
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      _require = arg0;
      dependencyMap = arg1;
      const items = [closure_4];
      const obj = require("get initialized");
      let closure_2 = obj.useStateFromStores(items, () => AuthenticationStore.getId() === closure_0);
      const items1 = [closure_3];
      const obj2 = require("get initialized");
      closure_3 = obj2.useStateFromStores(items1, () => {
        const isLurkingResult = null != closure_1 && LurkingStore.isLurking(tmp);
        return isLurkingResult;
      });
      const RestrictedGuildIds = require("UserSettings").RestrictedGuildIds;
      closure_4 = RestrictedGuildIds.useSetting();
      const items2 = [RelationshipStore, GuildMemberStore, closure_2];
      const obj3 = require("get initialized");
      return obj3.useStateFromStores(items2, () => {
        let tmp = !closure_2 && !closure_3;
        if (tmp) {
          let isFriendResult = RelationshipStore.isFriend(closure_0);
          if (!isFriendResult) {
            const memberOfResult = GuildMemberStore.memberOf(closure_0);
            isFriendResult = null != memberOfResult.find((item) => !closure_1_4.includes(item));
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
const result = size.fileFinishedImporting("modules/user_profile/hooks/useCanDM.tsx");

export default tmp2;
export const canDm = function canDm(userId, guildId) {
  let isLurkingResult = null != guildId;
  const id = AuthenticationStore.getId();
  if (isLurkingResult) {
    isLurkingResult = LurkingStore.isLurking(guildId);
  }
  const tmp4 = id === userId;
  const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
  const setting2 = RestrictedGuildIds.getSetting();
  let isFriendResult = RelationshipStore.isFriend(userId);
  let tmp8 = !tmp4 && !isLurkingResult;
  if (tmp8) {
    if (!isFriendResult) {
      const memberOfResult = GuildMemberStore.memberOf(userId);
      isFriendResult = null != memberOfResult.find((item) => !closure_0.includes(item));
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
