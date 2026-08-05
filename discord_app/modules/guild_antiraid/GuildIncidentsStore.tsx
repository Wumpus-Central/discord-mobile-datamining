// discord_app/modules/guild_antiraid/GuildIncidentsStore.tsx
import getHash from "getHash";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Store } from "initialize";

const require = arg1;
function computeAlertSettings() {
  guildsProto = guildsProto.getGuildsProto();
  if (guildsProto == null) {
    guildsProto = {};
  }
  guildsArray = guildsArray.getGuildsArray();
  let closure_7 = {};
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
function incidentsDataFromServer(arg0) {
  let tmp = null;
  if (null != arg0) {
    const _Object = Object;
    tmp = null;
    if (Object.keys(arg0).length > 0) {
      const obj = { raidDetectedAt: null, dmSpamDetectedAt: null, dmsDisabledUntil: null, invitesDisabledUntil: null, lockdownDurationHours: null };
      ({ raid_detected_at: obj[0], dm_spam_detected_at: obj[1], dms_disabled_until: obj[2], invites_disabled_until: obj[3], lockdown_duration_hours: obj[4] } = arg0);
      tmp = obj;
    }
  }
  return tmp;
}
let closure_6 = {};
let closure_7 = {};
class GuildIncidentsStore extends Store {
}
const prototype = GuildIncidentsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(handleConnectionClosedOrResumed, createGuildRecordFromRust, getUncachedChannelPermissions, getHash);
  const items = [handleConnectionClosedOrResumed, createGuildRecordFromRust, getUncachedChannelPermissions, getHash];
  this.syncWith(items, computeAlertSettings);
};
prototype["getGuildIncident"] = function getGuildIncident(id) {
  return table[id];
};
prototype["getIncidentsByGuild"] = function getIncidentsByGuild() {
  return closure_6;
};
prototype["getGuildAlertSettings"] = function getGuildAlertSettings() {
  return closure_7;
};
GuildIncidentsStore.displayName = "GuildIncidentsStore";
const guildIncidentsStore = new GuildIncidentsStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(arg0) {
    let closure_6 = {};
    const iter = arg0.guilds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let properties = nextResult.properties;
      let incidents_data;
      let tmp2 = nextResult;
      let tmp3 = incidentsDataFromServer;
      if (properties != null) {
        incidents_data = properties.incidents_data;
      }
      let tmp3Result = tmp3(incidents_data);
      let tmp6 = tmp3Result;
      let tmp7 = null != tmp3Result;
      if (tmp7) {
        let tmp8 = require;
        let tmp9 = dependencyMap;
        let obj = require("GuildAntiRaidUtils.tsx") /* DATE_CONFIG */;
        let tmp10 = tmp3Result;
        let hasDetectedActivityResult = obj.hasDetectedActivity(tmp6);
        if (!hasDetectedActivityResult) {
          let tmp8Result = tmp8(7932);
          let tmp12 = tmp3Result;
          hasDetectedActivityResult = tmp8Result.isUnderLockdown(tmp6);
        }
        tmp7 = hasDetectedActivityResult;
      }
      if (tmp7) {
        let tmp13 = closure_6;
        let tmp14 = nextResult;
        let tmp15 = tmp3Result;
        closure_6[tmp2.id] = tmp6;
      }
      continue;
    }
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    const properties = guild.properties;
    let incidents_data;
    if (properties != null) {
      incidents_data = properties.incidents_data;
    }
    let tmp2 = null;
    if (null != incidents_data) {
      const _Object = Object;
      tmp2 = null;
      if (Object.keys(incidents_data).length > 0) {
        const obj = { raidDetectedAt: null, dmSpamDetectedAt: null, dmsDisabledUntil: null, invitesDisabledUntil: null, lockdownDurationHours: null };
        ({ raid_detected_at: obj[0], dm_spam_detected_at: obj[1], dms_disabled_until: obj[2], invites_disabled_until: obj[3], lockdown_duration_hours: obj[4] } = incidents_data);
        tmp2 = obj;
      }
    }
    let tmp4 = null != tmp2;
    if (tmp4) {
      let hasDetectedActivityResult = require("GuildAntiRaidUtils.tsx") /* DATE_CONFIG */.hasDetectedActivity(tmp2);
      if (!hasDetectedActivityResult) {
        hasDetectedActivityResult = tmp5(7932).isUnderLockdown(tmp2);
        const tmp5Result = tmp5(7932);
      }
      tmp4 = hasDetectedActivityResult;
      const obj2 = require("GuildAntiRaidUtils.tsx") /* DATE_CONFIG */;
      tmp5 = require;
    }
    if (tmp4) {
      closure_6[guild.id] = tmp2;
    }
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    guild = guild.guild;
    const incidents_data = guild.incidents_data;
    let tmp3 = null;
    if (null != incidents_data) {
      const _Object = Object;
      tmp3 = null;
      if (Object.keys(incidents_data).length > 0) {
        const obj = { raidDetectedAt: null, dmSpamDetectedAt: null, dmsDisabledUntil: null, invitesDisabledUntil: null, lockdownDurationHours: null };
        ({ raid_detected_at: obj[0], dm_spam_detected_at: obj[1], dms_disabled_until: obj[2], invites_disabled_until: obj[3], lockdown_duration_hours: obj[4] } = incidents_data);
        tmp3 = obj;
      }
    }
    if (null == tmp3) {
      const id = guild.id;
      delete tmp2[tmp];
    } else {
      if (!obj2.hasDetectedActivity(tmp3)) {
        const tmp5Result = tmp5(7932);
      }
      closure_6[guild.id] = tmp3;
      obj2 = require("GuildAntiRaidUtils.tsx") /* DATE_CONFIG */;
      tmp5 = require;
    }
  },
  GUILD_DELETE: function handleGuildDelete(arg0) {
    delete tmp2[tmp];
  },
  LOGOUT: function handleLogout() {
    let closure_6 = {};
  }
});
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/guild_antiraid/GuildIncidentsStore.tsx");

export default guildIncidentsStore;