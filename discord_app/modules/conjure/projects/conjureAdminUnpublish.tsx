// === Module 18535: conjureAdminUnpublish ===

// Module 18535 (conjureAdminUnpublish)
import conjureAppInServer from "conjureAppInServer" /* 7661 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2164 */;
import UserProfileStore from "UserProfileStore" /* 6132 */;
import GuildChannelStore from "GuildChannelStore" /* 4942 */;
import GuildStore from "GuildStore" /* 4883 */;
import PermissionStore from "PermissionStore" /* 4944 */;
import UserStore from "UserStore" /* 1386 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6903 */;

const require = globalThis.__r;

require = fn;
function readUnknownBotUserId(guild_id) {
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  guild = null;
  if (null != guild_id) {
    guild = GuildStore.getGuild(guild_id.guild_id);
  }
  if (null != guild_id) {
    if (null != guild) {
      if (!isProjectOwner(guild_id)) {
        const supported_surfaces = guild_id.supported_surfaces;
        let num;
        if (supported_surfaces != null) {
          num = supported_surfaces.length;
        }
        if (num == null) {
          num = 0;
        }
        if (0 === num) {
          return null;
        } else {
          if ("in_server" === obj.readConjureAppServerPresence(guild_id)) {
            return null;
          } else {
            const result = conjureAppInServer.conjureProductionBotUserId(guild_id);
            let tmp8 = null;
            if (null == UserProfileStore.getMutualGuilds(result)) {
              let tmp9 = null;
              if (tmp4Result2.canRemoveConjureBot(guild, result)) {
                tmp9 = result;
              }
              tmp8 = tmp9;
              tmp4Result2 = conjureAppInServer;
            }
            return tmp8;
          }
          obj = conjureAppInServer;
        }
      }
    }
  }
  return null;
}
let closure_13 = async function _loadConjureAdminUnpublishLookup(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const tmp7 = readUnknownBotUserId(closure_0);
          if (null != tmp7) {
            c2 = 1;
            c1 = 1;
            const obj4 = { value: loadBotServers(tmp7), done: false };
            return obj4;
          }
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "HermesInternal", done: "HermesInternal" };
    } catch (tmp10) {
      c1 = tmp;
      throw tmp10;
    }
  }
};
function loadBotServers() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_15 = async function _loadBotServers(arg0) {
  await require("UserActionCreators").fetchProfile(closure_0, { withMutualGuilds: true });
  if (1 === tmp6) {
    c3 = 0;
    c1 = 3;
  } else if (arg0 === 1) {
    c1 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c3 = 0;
  }
  return value;
};
const isProjectOwner = fn(6903).isProjectOwner;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/conjureAdminUnpublish.tsx");

export function conjureAdminUnpublishTarget(project, removeTarget) {
  let tmp = null;
  if (null != removeTarget) {
    tmp = null;
    if (removeTarget.canRemoveBot) {
      tmp = null;
      if (!isProjectOwner(project)) {
        tmp = removeTarget;
      }
    }
  }
  return tmp;
}
export function useConjureAdminUnpublishLookup(projectId) {
  _require = projectId;
  items = [ConjureProjectStore, UserStore, GuildStore, GuildChannelStore, ApplicationStore, UserProfileStore, PermissionStore];
  const items1 = [projectId];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    let project = null;
    if (null != closure_0) {
      project = ConjureProjectStore.getProject(tmp2);
    }
    return readUnknownBotUserId(project);
  }, items1);
  const items2 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (null != conjureRemoveTarget) {
      loadBotServers(tmp);
    }
  }, items2);
}
export function loadConjureAdminUnpublishLookup() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function useConjureAdminUnpublishTarget(id) {
  _require = id;
  closure_129_0 = id;
  items = [ConjureProjectStore, UserStore, GuildStore, GuildChannelStore, ApplicationStore, UserProfileStore, PermissionStore];
  const items1 = [id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let project = null;
    if (null != closure_0) {
      project = ConjureProjectStore.getProject(tmp2);
    }
    return readUnknownBotUserId(project);
  }, items1);
  closure_129_1 = stateFromStores;
  const items2 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (null != conjureRemoveTarget) {
      loadBotServers(tmp);
    }
  }, items2);
  const obj = require("initialize");
  conjureRemoveTarget = require("conjureRemoveApp").useConjureRemoveTarget(id);
  const obj2 = require("conjureRemoveApp");
  const items3 = [ConjureProjectStore];
  const items4 = [id, conjureRemoveTarget];
  return require("initialize").useStateFromStores(items3, () => {
    let project = null;
    if (null != closure_0) {
      project = ConjureProjectStore.getProject(tmp);
    }
    let tmp4 = null;
    if (null != project) {
      let tmp6 = null;
      if (null != conjureRemoveTarget) {
        tmp6 = null;
        if (conjureRemoveTarget.canRemoveBot) {
          tmp6 = null;
          if (!isProjectOwner(project)) {
            tmp6 = conjureRemoveTarget;
          }
        }
      }
      tmp4 = tmp6;
    }
    return tmp4;
  }, items4);
}