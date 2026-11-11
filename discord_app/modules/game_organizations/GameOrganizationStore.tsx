// discord_app/modules/game_organizations/GameOrganizationStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GameOrganizationModels from "GameOrganizationModels.tsx";

require = fn;
let closure_2 = {};
let closure_3 = {};
let closure_4 = {};
const dependencyMap = {};
const Store = initializeDefault.Store;
class GameOrganizationStore extends Store {}
const prototype = GameOrganizationStore.prototype;
prototype["getGameOrganization"] = function getGameOrganization(arg0) {
  return closure_4[arg0];
};
prototype["getGameOrganizationByGuildId"] = function getGameOrganizationByGuildId(arg0) {
  let tmp = null;
  if (null != arg0) {
    let tmp3 = dependencyMap[arg0];
    if (tmp3 == null) {
      tmp3 = null;
    }
    tmp = tmp3;
  }
  return tmp;
};
prototype["isLoadingForGuild"] = function isLoadingForGuild(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    let flag = closure_2[arg0];
    if (flag == null) {
      flag = false;
    }
    tmp = flag;
  }
  return tmp;
};
prototype["getErrorForGuild"] = function getErrorForGuild(arg0) {
  let tmp = null;
  if (null != arg0) {
    let tmp3 = closure_3[arg0];
    if (tmp3 == null) {
      tmp3 = null;
    }
    tmp = tmp3;
  }
  return tmp;
};
GameOrganizationStore.displayName = "GameOrganizationStore";
const gameOrganizationStore = new GameOrganizationStore(DispatcherDefault, {
  GAME_ORGANIZATION_FETCH_START: function handleGameOrganizationFetchStart(guildId) {
    closure_2[guildId.guildId] = true;
  },
  GAME_ORGANIZATION_FETCH_SUCCESS: function handleGameOrganizationFetchSuccess(gameOrganization) {
    gameOrganization = gameOrganization.gameOrganization;
    closure_4[gameOrganization.id] = gameOrganization;
    closure_5[gameOrganization.guildId] = gameOrganization;
    delete tmp4[tmp3];
    delete tmp2[tmp];
  },
  GAME_ORGANIZATION_FETCH_FAILURE: function handleGameOrganizationFetchFailure(arg0) {
    ({ guildId, error } = arg0);
    delete tmp2[tmp];
    closure_3[guildId] = error;
  },
  GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS: function handleGameOrganizationInviteResolveSuccess(invite) {
    const result = GameOrganizationModels.gameOrganizationFromServer(invite.invite.game_organization);
    closure_4[result.id] = result;
    closure_5[result.guildId] = result;
    delete tmp2[tmp4];
    delete tmp4[tmp3];
    delete tmp2[tmp];
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    guild = guild.guild;
    let flag = null != tmp6;
    if (flag) {
      const linked_game_organization = guild.linked_game_organization;
      application_id = undefined;
      if (linked_game_organization != null) {
        application_id = linked_game_organization.application_id;
      }
      let tmp8 = application_id !== tmp6.applicationId;
      if (!tmp8) {
        const linked_game_organization2 = guild.linked_game_organization;
        let game_organization_id;
        if (linked_game_organization2 != null) {
          game_organization_id = linked_game_organization2.game_organization_id;
        }
        let id1;
        if (tmp6 != null) {
          id1 = tmp6.id;
        }
        tmp8 = game_organization_id !== id1;
      }
      flag = tmp8;
    }
    if (flag) {
      const id = tmp6.id;
      delete tmp5[tmp3];
      const guildId = tmp6.guildId;
      delete tmp4[tmp3];
      const guildId2 = tmp6.guildId;
      delete tmp4[tmp3];
      const guildId3 = tmp6.guildId;
      delete tmp2[tmp];
      flag = true;
    }
    return flag;
  },
  GUILD_DELETE: function handleGuildDelete(arg0) {
    let flag = null != tmp6;
    if (flag) {
      const id = tmp6.id;
      delete tmp5[tmp3];
      const guildId = tmp6.guildId;
      delete tmp4[tmp3];
      const guildId2 = tmp6.guildId;
      delete tmp4[tmp3];
      const guildId3 = tmp6.guildId;
      delete tmp2[tmp];
      flag = true;
    }
    return flag;
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_organizations/GameOrganizationStore.tsx");

export default gameOrganizationStore;
