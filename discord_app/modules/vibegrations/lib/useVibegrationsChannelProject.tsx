// === Module 10736: useVibegrationsChannelProject ===

// Module 10736 (useVibegrationsChannelProject)
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 8700 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8699 */;

require = fn;
const isProjectOwner = fn(8699).isProjectOwner;
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsChannelProject.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id) => {
  const cResult = require("c").c(27);
  if (cResult[0] !== guild_id) {
    let result = tmp(tmp2[8]).vibegrationsChannelAppId(guild_id);
    cResult[0] = guild_id;
    cResult[1] = result;
    let tmp4 = result;
    const tmpResult = tmp(tmp2[8]);
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  closure_1 = tmp6;
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore, PermissionStore];
    cResult[2] = items;
    let tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== guild_id) {
    const fn = function b() {
      guild = null;
      if (null != guild_id) {
        guild = GuildStore.getGuild(tmp);
      }
      let canResult = null != guild;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
      }
      return canResult;
    };
    const items1 = [guild_id];
    cResult[3] = guild_id;
    cResult[4] = fn;
    cResult[5] = items1;
    let tmp12 = items1;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp8, tmp11, tmp12);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [stateFromStoresArray];
    cResult[6] = items2;
    let tmp14 = items2;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] !== guild_id) {
    class G {
      constructor() {
        if (null != c2) {
          tmp2 = closure_4;
          selfMember = closure_4.getSelfMember(tmp);
          roles = undefined;
          if (selfMember != null) {
            roles = selfMember.roles;
          }
          if (roles == null) {
            roles = [];
          }
          items = roles;
        } else {
          items = [];
        }
        return items;
      }
    }
    const items3 = [guild_id];
    cResult[7] = guild_id;
    cResult[8] = G;
    cResult[9] = items3;
    let tmp17 = items3;
  } else {
    class G {
      constructor() {
        if (null != c2) {
          tmp2 = closure_4;
          selfMember = closure_4.getSelfMember(tmp);
          roles = undefined;
          if (selfMember != null) {
            roles = selfMember.roles;
          }
          if (roles == null) {
            roles = [];
          }
          items = roles;
        } else {
          items = [];
        }
        return items;
      }
    }
    tmp17 = cResult[9];
  }
  const tmpResult3 = require("initialize");
  stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp14, G, tmp17);
  if (cResult[10] === tmp4) {
    class G {
      constructor() {
        if (null != c2) {
          tmp2 = closure_4;
          selfMember = closure_4.getSelfMember(tmp);
          roles = undefined;
          if (selfMember != null) {
            roles = selfMember.roles;
          }
          if (roles == null) {
            roles = [];
          }
          items = roles;
        } else {
          items = [];
        }
        return items;
      }
    }
  }
  class E {
    constructor() {
      tmp = closure_1;
      if (closure_1) {
        tmp2 = closure_0;
        tmp3 = null;
        tmp = null != closure_0;
      }
      if (tmp) {
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj = closure_0(closure_2[10]);
        tmp6 = c2;
        tmp7 = null;
        listProjectsResult = obj.listProjects(tmp6);
      }
      return;
    }
  }
  cResult[10] = tmp4;
  cResult[11] = guild_id;
  cResult[12] = null != tmp4;
  cResult[13] = E;
  const tmpResult4 = require("initialize");
}) : ((guild_id) => {
  let result = require("VibegrationsUtils").vibegrationsChannelAppId(guild_id);
  require = result;
  closure_1 = tmp4;
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  let obj = require("VibegrationsUtils");
  let items = [GuildStore, PermissionStore];
  const items1 = [guild_id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    guild = null;
    if (null != guild_id) {
      guild = GuildStore.getGuild(tmp);
    }
    let canResult = null != guild;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
    }
    return canResult;
  }, items1);
  const tmpResult = require("initialize");
  const items2 = [stateFromStoresArray];
  const items3 = [guild_id];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items2, () => {
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
  }, items3);
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
  return require("initialize").useStateFromStores(items5, () => {
    if (null == result1) {
      return null;
    } else {
      result = VibegrationsProjectStore.findProjectByApplicationId(tmp);
      if (null != result) {
        if (!isProjectOwner(result)) {
          result1 = null;
          if (null != guild_id) {
            result1 = closure_1(guild_id[11]).castGuildIdAsEveryoneGuildRoleId(guild_id);
            const obj = closure_1(guild_id[11]);
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
            obj2 = result(guild_id[12]);
          }
          return tmp7;
        }
      }
      return result;
    }
  }, items6);
});