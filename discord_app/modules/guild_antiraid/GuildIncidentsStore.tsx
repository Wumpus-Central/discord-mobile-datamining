// === Module 10083: computeAlertSettings ===

// Module 10083 (computeAlertSettings)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import DATE_CONFIG from "DATE_CONFIG" /* 7856 */;
import closure_2 from "getHash" /* 4358 */;
import closure_3 from "handleConnectionClosedOrResumed" /* 1340 */;
import closure_4 from "createGuildRecordFromRust" /* 1910 */;
import closure_5 from "getUncachedChannelPermissions" /* 4089 */;

require = arg1;
function computeAlertSettings() {
  guildsProto = guildsProto.getGuildsProto();
  if (guildsProto == null) {
    guildsProto = {};
  }
  const guildsArray = store.getGuildsArray();
  closure_7 = {};
  for (const item10012 of guildsArray) {
    let tmp2 = closure_7;
    let obj = { guildId: null, guildName: null };
    ({ id: obj2[0], name: obj2[1] } = item10012);
    let tmp3 = obj;
    let merged = Object.assign(guildsProto[item10012.id]);
    closure_7[item10012.id] = obj;
    continue;
  }
}
function updateGuildIncident(id) {
  const guild = store.getGuild(id);
  let incidentsData;
  if (guild != null) {
    incidentsData = guild.incidentsData;
  }
  let tmp5;
  if (null != incidentsData) {
    let hasDetectedActivityResult = DATE_CONFIG.hasDetectedActivity(incidentsData);
    if (!hasDetectedActivityResult) {
      hasDetectedActivityResult = tmp6(7856).isUnderLockdown(incidentsData);
      const tmp6Result = tmp6(7856);
    }
    if (hasDetectedActivityResult) {
      tmp5 = incidentsData;
    }
    const obj = DATE_CONFIG;
    tmp6 = require;
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
let closure_6 = {};
let closure_7 = {};
const Store = initializeDefault.Store;
class GuildIncidentsStore extends Store {
}
const prototype = GuildIncidentsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3, closure_4, closure_5, closure_2);
  const items = [closure_3, closure_4, closure_5, closure_2];
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
const guildIncidentsStore = new GuildIncidentsStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(arg0) {
    closure_6 = {};
    while (tmp !== undefined) {
      let tmp3 = updateGuildIncident;
      let tmp4 = updateGuildIncident(tmp2.id);
      continue;
    }
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    const id = guild.guild.id;
    guild = store.getGuild(id);
    let incidentsData;
    if (guild != null) {
      incidentsData = guild.incidentsData;
    }
    let tmp5;
    if (null != incidentsData) {
      let hasDetectedActivityResult = DATE_CONFIG.hasDetectedActivity(incidentsData);
      if (!hasDetectedActivityResult) {
        hasDetectedActivityResult = tmp6(7856).isUnderLockdown(incidentsData);
        const tmp6Result = tmp6(7856);
      }
      if (hasDetectedActivityResult) {
        tmp5 = incidentsData;
      }
      const obj = DATE_CONFIG;
      tmp6 = require;
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
    guild = store.getGuild(id);
    let incidentsData;
    if (guild != null) {
      incidentsData = guild.incidentsData;
    }
    let tmp5;
    if (null != incidentsData) {
      let hasDetectedActivityResult = DATE_CONFIG.hasDetectedActivity(incidentsData);
      if (!hasDetectedActivityResult) {
        hasDetectedActivityResult = tmp6(7856).isUnderLockdown(incidentsData);
        const tmp6Result = tmp6(7856);
      }
      if (hasDetectedActivityResult) {
        tmp5 = incidentsData;
      }
      const obj = DATE_CONFIG;
      tmp6 = require;
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
const result = require("set").fileFinishedImporting("modules/guild_antiraid/GuildIncidentsStore.tsx");

export default guildIncidentsStore;