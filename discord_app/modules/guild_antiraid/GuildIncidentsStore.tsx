// === Module 10014: computeAlertSettings ===

// Module 10014 (computeAlertSettings)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import DATE_CONFIG from "DATE_CONFIG" /* 8234 */;
import getHash from "getHash" /* 4288 */;
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed" /* 1340 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;

require = fn;
function computeAlertSettings() {
  guildsProto = guildsProto.getGuildsProto();
  if (guildsProto == null) {
    guildsProto = {};
  }
  const guildsArray = store.getGuildsArray();
  closure_7 = {};
  for (const item10012 of guildsArray) {
    let obj = { guildId: null, guildName: null };
    ({ id: obj2[0], name: obj2[1] } = item10012);
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
      hasDetectedActivityResult = DATE_CONFIG.isUnderLockdown(incidentsData);
      const tmp6Result = DATE_CONFIG;
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
      let tmp4 = updateGuildIncident(tmp2.id);
      continue;
    }
    tmp = arg0.guilds[Symbol.iterator]();
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
        hasDetectedActivityResult = DATE_CONFIG.isUnderLockdown(incidentsData);
        const tmp6Result = DATE_CONFIG;
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
    guild = store.getGuild(id);
    let incidentsData;
    if (guild != null) {
      incidentsData = guild.incidentsData;
    }
    let tmp5;
    if (null != incidentsData) {
      let hasDetectedActivityResult = DATE_CONFIG.hasDetectedActivity(incidentsData);
      if (!hasDetectedActivityResult) {
        hasDetectedActivityResult = DATE_CONFIG.isUnderLockdown(incidentsData);
        const tmp6Result = DATE_CONFIG;
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
const result = require("obj132").fileFinishedImporting("modules/guild_antiraid/GuildIncidentsStore.tsx");

export default guildIncidentsStore;