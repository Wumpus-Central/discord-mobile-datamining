// === Module 7803: GUILD_REPORT_RAID_MOBILE_KEY ===

// Module 7803 (GUILD_REPORT_RAID_MOBILE_KEY)
import { Permissions } from "sum";
import importAllResult from "fromString";

const combineResult = require("fromString").combine(Permissions.ADMINISTRATOR, Permissions.MANAGE_GUILD, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);
const result = require("fromString").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidConstants.tsx");

export const GUILD_REPORT_RAID_MOBILE_KEY = "guild_report_raid_mobile";
export const NAGBAR_DISPLAY_MAX_HOURS = 2;
export const DEFAULT_LOCKDOWN_DURATION = 2;
export const getTimeframes = () => {
  let obj = { id: "1", value: 1, label: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["GA/d4I"]);
  const items = [obj, , , , , ];
  obj = { id: "2", value: 2, label: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl2.string(require(1236) /* getSystemLocale */.t["+rHFej"]);
  items[1] = obj;
  obj = { id: "4", value: 4, label: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl3.string(require(1236) /* getSystemLocale */.t["5CNt/M"]);
  items[2] = obj;
  const obj1 = { id: "6", value: 6, label: null };
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj1[2] = intl4.string(require(1236) /* getSystemLocale */.t.oQ4PNE);
  items[3] = obj1;
  const obj2 = { id: "12", value: 12, label: null };
  const intl5 = require(1236) /* getSystemLocale */.intl;
  obj2[2] = intl5.string(require(1236) /* getSystemLocale */.t.LOQ0j6);
  items[4] = obj2;
  const obj3 = { id: "24", value: 24, label: null };
  const intl6 = require(1236) /* getSystemLocale */.intl;
  obj3[2] = intl6.string(require(1236) /* getSystemLocale */.t["W0+LsV"]);
  items[5] = obj3;
  return items;
};
export const IncidentAlertModeratorPermissions = combineResult;