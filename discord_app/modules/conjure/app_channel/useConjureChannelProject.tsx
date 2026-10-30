// discord_app/modules/conjure/app_channel/useConjureChannelProject.tsx
import ConjureActionCreators from "../projects/ConjureActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

require = fn;
const isProjectOwner = fn(6838).isProjectOwner;
const Permissions = fn(1072).Permissions;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/app_channel/useConjureChannelProject.tsx");

export default function useConjureChannelProject(guild_id) {
  const conjureChannelAppIdResult = require("ConjureUtils").conjureChannelAppId(guild_id);
  require = conjureChannelAppIdResult;
  closure_1 = tmp4;
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  let obj = require("ConjureUtils");
  let items = [GuildStore, PermissionStore];
  const items1 = [guild_id];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      let guild = null;
      if (null != guild_id) {
        guild = GuildStore.getGuild(tmp);
      }
      let canResult = null != guild;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
      }
      return canResult;
    },
    items1,
  );
  const tmpResult = require("initialize");
  const items2 = [stateFromStoresArray];
  const items3 = [guild_id];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items2,
    () => {
      if (null != guild_id) {
        const selfMember = GuildMemberStore.getSelfMember(tmp);
        let roles;
        if (selfMember != null) {
          roles = selfMember.roles;
        }
        if (roles == null) {
          roles = [];
        }
        let items = roles;
      } else {
        items = [];
      }
      return items;
    },
    items3,
  );
  const items4 = [
    null != conjureChannelAppIdResult,
    conjureChannelAppIdResult,
    guild_id,
    stateFromStores,
    stateFromStoresArray,
  ];
  const effect = stateFromStores.useEffect(() => {
    let tmp = closure_1;
    if (closure_1) {
      tmp = null != conjureChannelAppIdResult;
    }
    if (tmp) {
      ConjureActionCreators.listProjects(guild_id);
    }
  }, items4);
  const tmpResult3 = require("initialize");
  const items5 = [ConjureProjectStore];
  const items6 = [conjureChannelAppIdResult, stateFromStores, stateFromStoresArray, guild_id];
  return require("initialize").useStateFromStores(
    items5,
    () => {
      if (null == result1) {
        return null;
      } else {
        const result = ConjureProjectStore.findProjectByApplicationId(tmp);
        if (null != result) {
          if (!isProjectOwner(result)) {
            result1 = null;
            if (null != guild_id) {
              result1 = closure_1(guild_id[9]).castGuildIdAsEveryoneGuildRoleId(guild_id);
              const obj = closure_1(guild_id[9]);
            }
            let prop = result.collaborator_role_ids;
            if (prop == null) {
              prop = [];
            }
            let tmp7 = null;
            if (result.guild_id === guild_id) {
              tmp7 = null;
              if (obj2.isProjectGuildCollaborationEnabled(result)) {
                if (stateFromStores) {
                  tmp7 = result;
                } else {
                  tmp7 = null;
                }
              }
              obj2 = conjureChannelAppIdResult(guild_id[10]);
            }
            return tmp7;
          }
        }
        return result;
      }
    },
    items6,
  );
}
