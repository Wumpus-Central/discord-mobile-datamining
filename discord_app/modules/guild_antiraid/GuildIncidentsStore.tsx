// === Module 11160: GuildIncidentsStore ===

// Module 11160 (GuildIncidentsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GuildAntiRaidUtils from "GuildAntiRaidUtils" /* 7685 */;
import ExperimentStore from "ExperimentStore" /* 4776 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import size from "module_2" /* 2 */;

let closure_6;

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
    let id = item10012.id;
    let merged = Object.assign(guildsProto[item10012.id]);
    closure_7[id] = obj;
    continue;
  }
}
function updateGuildIncident(id) {
  const tmp2 = closure_6[id];
  const guild = GuildStore.getGuild(id);
  let incidentsData;
  const tmp = id;
  if (guild != null) {
    incidentsData = guild.incidentsData;
  }
  let tmp5;
  if (null != incidentsData) {
    const obj = GuildAntiRaidUtils;
    let hasDetectedActivityResult = obj.hasDetectedActivity(incidentsData);
    if (!hasDetectedActivityResult) {
      const tmp6Result = GuildAntiRaidUtils;
      hasDetectedActivityResult = tmp6Result.isUnderLockdown(incidentsData);
    }
    if (hasDetectedActivityResult) {
      tmp5 = incidentsData;
    }
  }
  let flag = tmp2 !== tmp5;
  if (flag) {
    if (null == tmp5) {
      delete closure_6[tmp];
      flag = true;
    } else {
      closure_6[id] = tmp5;
      flag = true;
    }
  }
  return flag;
}
const metroRequire = {};
let closure_7 = {};
const Store = get_initializedDefault.Store;
class GuildIncidentsStore extends Store {
  initialize() {
    this.waitFor(UserSettingsProtoStore, GuildStore, PermissionStore, ExperimentStore);
    const items = [UserSettingsProtoStore, GuildStore, PermissionStore, ExperimentStore];
    this.syncWith(items, computeAlertSettings);
  }
  getGuildIncident(id) {
    return closure_6[id];
  }
  getIncidentsByGuild() {
    return closure_6;
  }
  getGuildAlertSettings() {
    return closure_7;
  }
}
const prototype = GuildIncidentsStore.prototype;
GuildIncidentsStore.displayName = "GuildIncidentsStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(arg0) {
    closure_6 = {};
    const tmp = arg0.guilds[Symbol.iterator]();
    while (tmp !== undefined) {
      let tmp4 = updateGuildIncident(tmp2.id);
      continue;
    }
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    const id = guild.guild.id;
    const tmp = closure_6[id];
    guild = GuildStore.getGuild(id);
    let incidentsData;
    if (guild != null) {
      incidentsData = guild.incidentsData;
    }
    let tmp4;
    if (null != incidentsData) {
      const obj = GuildAntiRaidUtils;
      let hasDetectedActivityResult = obj.hasDetectedActivity(incidentsData);
      if (!hasDetectedActivityResult) {
        const tmp5Result = GuildAntiRaidUtils;
        hasDetectedActivityResult = tmp5Result.isUnderLockdown(incidentsData);
      }
      if (hasDetectedActivityResult) {
        tmp4 = incidentsData;
      }
    }
    let flag = tmp !== tmp4;
    if (flag) {
      if (null == tmp4) {
        delete closure_6[id];
        flag = true;
      } else {
        closure_6[id] = tmp4;
        flag = true;
      }
    }
    return flag;
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    const id = guild.guild.id;
    const tmp = closure_6[id];
    guild = GuildStore.getGuild(id);
    let incidentsData;
    if (guild != null) {
      incidentsData = guild.incidentsData;
    }
    let tmp4;
    if (null != incidentsData) {
      const obj = GuildAntiRaidUtils;
      let hasDetectedActivityResult = obj.hasDetectedActivity(incidentsData);
      if (!hasDetectedActivityResult) {
        const tmp5Result = GuildAntiRaidUtils;
        hasDetectedActivityResult = tmp5Result.isUnderLockdown(incidentsData);
      }
      if (hasDetectedActivityResult) {
        tmp4 = incidentsData;
      }
    }
    let flag = tmp !== tmp4;
    if (flag) {
      if (null == tmp4) {
        delete closure_6[id];
        flag = true;
      } else {
        closure_6[id] = tmp4;
        flag = true;
      }
    }
    return flag;
  },
  GUILD_DELETE: function handleGuildDelete(arg0) {
    delete closure_6[arg0.guild.id];
  },
  LOGOUT: function handleLogout() {
    closure_6 = {};
  }
};
const guildIncidentsStore = new GuildIncidentsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildIncidentsStore.tsx");

export default guildIncidentsStore;