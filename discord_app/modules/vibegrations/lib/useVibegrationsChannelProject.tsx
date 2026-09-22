// discord_app/modules/vibegrations/lib/useVibegrationsChannelProject.tsx
import VibegrationsActionCreators from "../actions/VibegrationsActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import VibegrationsProjectStore from "../stores/VibegrationsProjectStore.tsx";

require = fn;
const isProjectOwner = fn(9314).isProjectOwner;
const Permissions = fn(1074).Permissions;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsChannelProject.tsx");

export default function useVibegrationsChannelProject(topic) {
  topic = undefined;
  if (topic != null) {
    topic = topic.topic;
  }
  let result = require("VibegrationsUtils").vibegrationsAppIdFromTopic(topic);
  require = result;
  closure_1 = tmp5;
  guild_id = undefined;
  if (topic != null) {
    guild_id = topic.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  let obj = require("VibegrationsUtils");
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
  const items4 = [null != result, result, guild_id, stateFromStores, stateFromStoresArray];
  const effect = stateFromStores.useEffect(() => {
    let tmp = closure_1;
    if (closure_1) {
      tmp = null != result;
    }
    if (tmp) {
      VibegrationsActionCreators.listProjects(guild_id);
    }
  }, items4);
  const tmpResult3 = require("initialize");
  const items5 = [VibegrationsProjectStore];
  const items6 = [result, stateFromStores, stateFromStoresArray, guild_id];
  return require("initialize").useStateFromStores(
    items5,
    () => {
      if (null == result1) {
        return null;
      } else {
        result = VibegrationsProjectStore.findProjectByApplicationId(tmp);
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
              if (obj2.isProjectPublic(result)) {
                if (stateFromStores) {
                  tmp7 = result;
                } else {
                  tmp7 = null;
                }
              }
              obj2 = result(guild_id[10]);
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
