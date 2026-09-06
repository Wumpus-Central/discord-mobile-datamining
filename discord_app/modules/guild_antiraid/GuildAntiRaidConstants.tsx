// === Module 8016: GuildAntiRaidConstants ===

// Module 8016 (GuildAntiRaidConstants)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1114 */;
import BigFlagUtils from "BigFlagUtils" /* 1086 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidConstants.tsx");

export const GUILD_REPORT_RAID_MOBILE_KEY = "guild_report_raid_mobile";
export const NAGBAR_DISPLAY_MAX_HOURS = 2;
export const DEFAULT_LOCKDOWN_DURATION = 2;
export const getTimeframes = () => {
  let obj = { id: "1", value: 1, label: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["GA/d4I"]);
  const items = [obj, , , , , ];
  obj = { id: "2", value: 2, label: null };
  const intl2 = util.intl;
  obj.label = intl2.string(util.t["+rHFej"]);
  items[1] = obj;
  obj = { id: "4", value: 4, label: null };
  const intl3 = util.intl;
  obj.label = intl3.string(util.t["5CNt/M"]);
  items[2] = obj;
  const obj1 = { id: "6", value: 6, label: null };
  const intl4 = util.intl;
  obj1.label = intl4.string(util.t.oQ4PNE);
  items[3] = obj1;
  const obj2 = { id: "12", value: 12, label: null };
  const intl5 = util.intl;
  obj2.label = intl5.string(util.t.LOQ0j6);
  items[4] = obj2;
  const obj3 = { id: "24", value: 24, label: null };
  const intl6 = util.intl;
  obj3.label = intl6.string(util.t["W0+LsV"]);
  items[5] = obj3;
  return items;
};
export const IncidentAlertModeratorPermissions = BigFlagUtils.combine(Permissions.ADMINISTRATOR, Permissions.MANAGE_GUILD, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);