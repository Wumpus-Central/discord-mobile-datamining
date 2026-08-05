import { t } from "../../../_runtime/03867_t.js";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { GuildIncidentActionSources } from "GuildAntiRaidTypes.tsx";
// discord_app/modules/guild_antiraid/GuildAntiRaidUtils.tsx
import GUILD_REPORT_RAID_MOBILE_KEY from "GUILD_REPORT_RAID_MOBILE_KEY";

let c3;
let c4;
let c5;
({ NAGBAR_DISPLAY_MAX_HOURS: c3, DEFAULT_LOCKDOWN_DURATION: c4, getTimeframes: c5 } = GUILD_REPORT_RAID_MOBILE_KEY);
let obj = { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" };
const result = require("GuildIncidentActionSources").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidUtils.tsx");

export const DATE_CONFIG = obj;
export const hasDetectedActivity = function hasDetectedActivity(stateFromStores1) {
  let tmp = null != stateFromStores1.dmSpamDetectedAt;
  if (tmp) {
    const obj = t(stateFromStores1.dmSpamDetectedAt);
    tmp = t(stateFromStores1.dmSpamDetectedAt).add(closure_3, "hours") > t();
    const addResult = t(stateFromStores1.dmSpamDetectedAt).add(closure_3, "hours");
  }
  if (!tmp) {
    let tmp6 = null != stateFromStores1.raidDetectedAt;
    if (tmp6) {
      const obj2 = t(stateFromStores1.raidDetectedAt);
      tmp6 = t(stateFromStores1.raidDetectedAt).add(closure_3, "hours") > t();
      const addResult1 = t(stateFromStores1.raidDetectedAt).add(closure_3, "hours");
    }
    tmp = tmp6;
  }
  return tmp;
};
export const hasDetectedRaid = function hasDetectedRaid(raidDetectedAt) {
  let tmp = null != raidDetectedAt.raidDetectedAt;
  if (tmp) {
    const obj = t(raidDetectedAt.raidDetectedAt);
    tmp = t(raidDetectedAt.raidDetectedAt).add(closure_3, "hours") > t();
    const addResult = t(raidDetectedAt.raidDetectedAt).add(closure_3, "hours");
  }
  return tmp;
};
export const hasDetectedDMRaid = function hasDetectedDMRaid(dmSpamDetectedAt) {
  let tmp = null != dmSpamDetectedAt.dmSpamDetectedAt;
  if (tmp) {
    const obj = t(dmSpamDetectedAt.dmSpamDetectedAt);
    tmp = t(dmSpamDetectedAt.dmSpamDetectedAt).add(closure_3, "hours") > t();
    const addResult = t(dmSpamDetectedAt.dmSpamDetectedAt).add(closure_3, "hours");
  }
  return tmp;
};
export const getIncidentAlertType = function getIncidentAlertType(guildIncident) {
  if (null != guildIncident) {
    let tmp = null != guildIncident.raidDetectedAt;
    if (tmp) {
      const obj = t(guildIncident.raidDetectedAt);
      tmp = t(guildIncident.raidDetectedAt).add(closure_3, "hours") > t();
      const addResult = t(guildIncident.raidDetectedAt).add(closure_3, "hours");
    }
    const GuildIncidentAlertTypes = GuildIncidentActionSources /* GuildIncidentActionSources */.GuildIncidentAlertTypes;
  }
};
export const getEnabledInterventions = function getEnabledInterventions(pauseInvites, pauseDms) {
  const items = [];
  if (pauseInvites) {
    items.push(GuildIncidentActionSources /* GuildIncidentActionSources */.GuildIncidentActionTypes.INVITES_DISABLED);
  }
  if (pauseDms) {
    items.push(GuildIncidentActionSources /* GuildIncidentActionSources */.GuildIncidentActionTypes.DMS_DISABLED);
  }
  return items;
};
export const getDisabledInterventions = function getDisabledInterventions(pauseInvites, pauseDms) {
  const items = [];
  if (!pauseInvites) {
    items.push(GuildIncidentActionSources /* GuildIncidentActionSources */.GuildIncidentActionTypes.INVITES_DISABLED);
  }
  if (!pauseDms) {
    items.push(GuildIncidentActionSources /* GuildIncidentActionSources */.GuildIncidentActionTypes.DMS_DISABLED);
  }
  return items;
};
export const isUnderLockdown = function isUnderLockdown(guildIncident) {
  let tmp = null != guildIncident.dmsDisabledUntil;
  if (tmp) {
    const _Date = Date;
    const date = new Date(guildIncident.dmsDisabledUntil);
    const _Date2 = Date;
    const date1 = new Date();
    tmp = date > date1;
  }
  if (!tmp) {
    let tmp11 = null != guildIncident.invitesDisabledUntil;
    if (tmp11) {
      const _Date3 = Date;
      const date2 = new Date(guildIncident.invitesDisabledUntil);
      const _Date4 = Date;
      const date3 = new Date();
      tmp11 = date2 > date3;
    }
    tmp = tmp11;
  }
  return tmp;
};
export const hasDMsDisabled = function hasDMsDisabled(stateFromStores) {
  let dmsDisabledUntil;
  if (stateFromStores != null) {
    dmsDisabledUntil = stateFromStores.dmsDisabledUntil;
  }
  let tmp2 = null != dmsDisabledUntil;
  if (tmp2) {
    const _Date = Date;
    const date = new Date(stateFromStores.dmsDisabledUntil);
    const _Date2 = Date;
    const date1 = new Date();
    tmp2 = date > date1;
  }
  return tmp2;
};
export const hasInvitesDisabled = function hasInvitesDisabled(stateFromStores) {
  let invitesDisabledUntil;
  if (stateFromStores != null) {
    invitesDisabledUntil = stateFromStores.invitesDisabledUntil;
  }
  let tmp2 = null != invitesDisabledUntil;
  if (tmp2) {
    const _Date = Date;
    const date = new Date(stateFromStores.invitesDisabledUntil);
    const _Date2 = Date;
    const date1 = new Date();
    tmp2 = date > date1;
  }
  return tmp2;
};
export const initialLockdownDurationHours = function initialLockdownDurationHours(stateFromStores) {
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.lockdownDurationHours;
  }
  if (null == prop) {
    prop = closure_4;
  } else {
    const obj = callback();
  }
  return prop;
};
export const getSecurityActionDetailsString = function getSecurityActionDetailsString(dmsDisabledUntil) {
  let invitesDisabledUntil = dmsDisabledUntil.dmsDisabledUntil;
  if (invitesDisabledUntil == null) {
    invitesDisabledUntil = dmsDisabledUntil.invitesDisabledUntil;
  }
  if (null == invitesDisabledUntil) {
    return "";
  } else {
    let tmp = tmp27;
    if (null != dmsDisabledUntil.dmsDisabledUntil) {
      tmp = tmp28;
    }
    if (tmp === true) {
      const intl3 = getSystemLocale /* getSystemLocale */.intl;
      let obj = { guildName: null, time: null };
      obj[0] = arg1;
      const _Date3 = Date;
      const date = new Date(invitesDisabledUntil);
      obj[1] = date.toLocaleString(getSystemLocale /* getSystemLocale */.intl.currentLocale, obj);
      return intl3.formatToPlainString(getSystemLocale /* getSystemLocale */.t.hCZitf, obj);
    } else if (tmp27 === true) {
      const intl2 = getSystemLocale /* getSystemLocale */.intl;
      obj = { guildName: null, time: null };
      obj[0] = arg1;
      const _Date2 = Date;
      const date1 = new Date(invitesDisabledUntil);
      obj[1] = date1.toLocaleString(getSystemLocale /* getSystemLocale */.intl.currentLocale, obj);
      return intl2.formatToPlainString(getSystemLocale /* getSystemLocale */.t["HNKxf+"], obj);
    } else if (tmp28 === true) {
      const intl = getSystemLocale /* getSystemLocale */.intl;
      obj = { guildName: null, time: null };
      obj[0] = arg1;
      const _Date = Date;
      const date2 = new Date(invitesDisabledUntil);
      obj[1] = date2.toLocaleString(getSystemLocale /* getSystemLocale */.intl.currentLocale, obj);
      return intl.formatToPlainString(getSystemLocale /* getSystemLocale */.t.M3iSyL, obj);
    } else {
      return "";
    }
  }
};