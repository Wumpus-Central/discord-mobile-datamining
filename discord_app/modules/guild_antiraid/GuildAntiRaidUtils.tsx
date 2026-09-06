// discord_app/modules/guild_antiraid/GuildAntiRaidUtils.tsx
import util from "../../intl/index.native.tsx";
import _modDef4153 from "../../../_runtime/metro/04153__.js";
import GuildAntiRaidTypes from "GuildAntiRaidTypes.tsx";
import GuildAntiRaidConstants from "GuildAntiRaidConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

({
  NAGBAR_DISPLAY_MAX_HOURS: c3,
  DEFAULT_LOCKDOWN_DURATION: closure_4,
  getTimeframes: hasOwnProperty,
} = GuildAntiRaidConstants);
let date = { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" };
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidUtils.tsx");

export const DATE_CONFIG = date;
export const hasDetectedActivity = function hasDetectedActivity(incidentsData) {
  let tmp = null != incidentsData.dmSpamDetectedAt;
  if (tmp) {
    const obj = _modDef4153(incidentsData.dmSpamDetectedAt);
    tmp = _modDef4153(incidentsData.dmSpamDetectedAt).add(React3, "hours") > _modDef4153();
    const addResult = _modDef4153(incidentsData.dmSpamDetectedAt).add(React3, "hours");
  }
  if (!tmp) {
    let tmp6 = null != incidentsData.raidDetectedAt;
    if (tmp6) {
      const obj2 = _modDef4153(incidentsData.raidDetectedAt);
      tmp6 = _modDef4153(incidentsData.raidDetectedAt).add(React3, "hours") > _modDef4153();
      const addResult1 = _modDef4153(incidentsData.raidDetectedAt).add(React3, "hours");
    }
    tmp = tmp6;
  }
  return tmp;
};
export const hasDetectedRaid = function hasDetectedRaid(raidDetectedAt) {
  let tmp = null != raidDetectedAt.raidDetectedAt;
  if (tmp) {
    const obj = _modDef4153(raidDetectedAt.raidDetectedAt);
    tmp = _modDef4153(raidDetectedAt.raidDetectedAt).add(React3, "hours") > _modDef4153();
    const addResult = _modDef4153(raidDetectedAt.raidDetectedAt).add(React3, "hours");
  }
  return tmp;
};
export const hasDetectedDMRaid = function hasDetectedDMRaid(dmSpamDetectedAt) {
  let tmp = null != dmSpamDetectedAt.dmSpamDetectedAt;
  if (tmp) {
    const obj = _modDef4153(dmSpamDetectedAt.dmSpamDetectedAt);
    tmp = _modDef4153(dmSpamDetectedAt.dmSpamDetectedAt).add(React3, "hours") > _modDef4153();
    const addResult = _modDef4153(dmSpamDetectedAt.dmSpamDetectedAt).add(React3, "hours");
  }
  return tmp;
};
export const getIncidentAlertType = function getIncidentAlertType(guildIncident) {
  if (null != guildIncident) {
    let tmp = null != guildIncident.raidDetectedAt;
    if (tmp) {
      const obj = _modDef4153(guildIncident.raidDetectedAt);
      tmp = _modDef4153(guildIncident.raidDetectedAt).add(React3, "hours") > _modDef4153();
      const addResult = _modDef4153(guildIncident.raidDetectedAt).add(React3, "hours");
    }
    const GuildIncidentAlertTypes = GuildAntiRaidTypes.GuildIncidentAlertTypes;
  }
};
export const getEnabledInterventions = function getEnabledInterventions(pauseInvites, pauseDms) {
  const items = [];
  if (pauseInvites) {
    items.push(GuildAntiRaidTypes.GuildIncidentActionTypes.INVITES_DISABLED);
  }
  if (pauseDms) {
    items.push(GuildAntiRaidTypes.GuildIncidentActionTypes.DMS_DISABLED);
  }
  return items;
};
export const getDisabledInterventions = function getDisabledInterventions(pauseInvites, pauseDms) {
  const items = [];
  if (!pauseInvites) {
    items.push(GuildAntiRaidTypes.GuildIncidentActionTypes.INVITES_DISABLED);
  }
  if (!pauseDms) {
    items.push(GuildAntiRaidTypes.GuildIncidentActionTypes.DMS_DISABLED);
  }
  return items;
};
export const isUnderLockdown = function isUnderLockdown(incidentsData) {
  let tmp = null != incidentsData.dmsDisabledUntil;
  if (tmp) {
    const _Date = Date;
    date = new Date(incidentsData.dmsDisabledUntil);
    const _Date2 = Date;
    const date1 = new Date();
    tmp = date > date1;
  }
  if (!tmp) {
    let tmp11 = null != incidentsData.invitesDisabledUntil;
    if (tmp11) {
      const _Date3 = Date;
      const date2 = new Date(incidentsData.invitesDisabledUntil);
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
    date = new Date(stateFromStores.dmsDisabledUntil);
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
    date = new Date(stateFromStores.invitesDisabledUntil);
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
    prop = React4;
  } else {
    const obj = hasOwnProperty();
  }
  return prop;
};
export const getSecurityActionDetailsString = function getSecurityActionDetailsString(dmsDisabledUntil, guildName) {
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
      const intl3 = util.intl;
      let obj = { guildName, time: null };
      const _Date3 = Date;
      date = new Date(invitesDisabledUntil);
      obj.time = date.toLocaleString(util.intl.currentLocale, date);
      return intl3.formatToPlainString(util.t.hCZitf, obj);
    } else if (tmp27 === true) {
      const intl2 = util.intl;
      obj = { guildName, time: null };
      const _Date2 = Date;
      const date1 = new Date(invitesDisabledUntil);
      obj.time = date1.toLocaleString(util.intl.currentLocale, date);
      return intl2.formatToPlainString(util.t["HNKxf+"], obj);
    } else if (tmp28 === true) {
      const intl = util.intl;
      obj = { guildName, time: null };
      const _Date = Date;
      const date2 = new Date(invitesDisabledUntil);
      obj.time = date2.toLocaleString(util.intl.currentLocale, date);
      return intl.formatToPlainString(util.t.M3iSyL, obj);
    } else {
      return "";
    }
  }
};
