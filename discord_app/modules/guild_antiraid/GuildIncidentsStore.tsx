// === Module 10080: GuildIncidentsStore ===

// Module 10080 (GuildIncidentsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildAntiRaidUtils from "GuildAntiRaidUtils" /* 8015 */;
import ExperimentStore from "ExperimentStore" /* 4476 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
function computeAlertSettings() {
  let guildsProto = UserSettingsProtoStore.getGuildsProto();
  if (guildsProto == null) {
    guildsProto = {};
  }
  const guildsArray = GuildStore.getGuildsArray();
  closure_7 = {};
  for (const item10012 of guildsArray) {
    let obj = { guildId: null, guildName: null };
    ({ id: obj2.guildId, name: obj2.guildName } = item10012);
    let merged = Object.assign(guildsProto[item10012.id]);
    closure_7[item10012.id] = obj;
    continue;
  }
}
function updateGuildIncident(id) {
  const guild = GuildStore.getGuild(id);
  let incidentsData;
  if (guild != null) {
    incidentsData = guild.incidentsData;
  }
  let tmp5;
  if (null != incidentsData) {
    let hasDetectedActivityResult = GuildAntiRaidUtils.hasDetectedActivity(incidentsData);
    if (!hasDetectedActivityResult) {
      hasDetectedActivityResult = GuildAntiRaidUtils.isUnderLockdown(incidentsData);
      const tmp6Result = GuildAntiRaidUtils;
    }
    if (hasDetectedActivityResult) {
      tmp5 = incidentsData;
    }
  }
  let flag = dependencyMap[id] !== tmp5;
  if (flag) {
    if (null == tmp5) {
      delete tmp[tmp2];
      flag = true;
    } else {
      dependencyMap[id] = tmp5;
      flag = true;
    }
  }
  return flag;
}
const dependencyMap = {};
let closure_7 = {};
const Store = initializeDefault.Store;
class GuildIncidentsStore extends Store {
}
const prototype = GuildIncidentsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserSettingsProtoStore, GuildStore, PermissionStore, ExperimentStore);
  const items = [UserSettingsProtoStore, GuildStore, PermissionStore, ExperimentStore];
  this.syncWith(items, computeAlertSettings);
};
prototype["getGuildIncident"] = function getGuildIncident(id) {
  return dependencyMap[id];
};
prototype["getIncidentsByGuild"] = function getIncidentsByGuild() {
  return closure_6;
};
prototype["getGuildAlertSettings"] = function getGuildAlertSettings() {
  return closure_7;
};
GuildIncidentsStore.displayName = "GuildIncidentsStore";
const guildIncidentsStore = new GuildIncidentsStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(arg0) {
    closure_6 = {};
    while (tmp !== undefined) {
      let tmp4 = updateGuildIncident(tmp2.id);
      continue;
    }
    tmp = arg0.guilds[Symbol.iterator]();
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    const id = guild.guild.id;
    guild = GuildStore.getGuild(id);
    let incidentsData;
    if (guild != null) {
      incidentsData = guild.incidentsData;
    }
    let tmp5;
    if (null != incidentsData) {
      let hasDetectedActivityResult = GuildAntiRaidUtils.hasDetectedActivity(incidentsData);
      if (!hasDetectedActivityResult) {
        hasDetectedActivityResult = GuildAntiRaidUtils.isUnderLockdown(incidentsData);
        const tmp6Result = GuildAntiRaidUtils;
      }
      if (hasDetectedActivityResult) {
        tmp5 = incidentsData;
      }
    }
    let flag = dependencyMap[id] !== tmp5;
    if (flag) {
      if (null == tmp5) {
        delete tmp[tmp2];
        flag = true;
      } else {
        dependencyMap[id] = tmp5;
        flag = true;
      }
    }
    return flag;
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    const id = guild.guild.id;
    guild = GuildStore.getGuild(id);
    let incidentsData;
    if (guild != null) {
      incidentsData = guild.incidentsData;
    }
    let tmp5;
    if (null != incidentsData) {
      let hasDetectedActivityResult = GuildAntiRaidUtils.hasDetectedActivity(incidentsData);
      if (!hasDetectedActivityResult) {
        hasDetectedActivityResult = GuildAntiRaidUtils.isUnderLockdown(incidentsData);
        const tmp6Result = GuildAntiRaidUtils;
      }
      if (hasDetectedActivityResult) {
        tmp5 = incidentsData;
      }
    }
    let flag = dependencyMap[id] !== tmp5;
    if (flag) {
      if (null == tmp5) {
        delete tmp[tmp2];
        flag = true;
      } else {
        dependencyMap[id] = tmp5;
        flag = true;
      }
    }
    return flag;
  },
  GUILD_DELETE: function handleGuildDelete(arg0) {
    delete tmp2[tmp];
  },
  LOGOUT: function handleLogout() {
    closure_6 = {};
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildIncidentsStore.tsx");

export default guildIncidentsStore;