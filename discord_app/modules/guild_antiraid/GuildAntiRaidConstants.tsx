// === Module 7697: GuildAntiRaidConstants ===

// Module 7697 (GuildAntiRaidConstants)
import Constants from "Constants" /* 1096 */;
import intl7 from "intl" /* 1126 */;
import BigFlagUtils from "BigFlagUtils" /* 1097 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const combineResult = BigFlagUtils.combine(Permissions.ADMINISTRATOR, Permissions.MANAGE_GUILD, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidConstants.tsx");

export const GUILD_REPORT_RAID_MOBILE_KEY = "guild_report_raid_mobile";
export const NAGBAR_DISPLAY_MAX_HOURS = 2;
export const DEFAULT_LOCKDOWN_DURATION = 2;
export const getTimeframes = () => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  const obj = { id: "1", value: 1, label: intl.string(intl7.t["GA/d4I"]) };
  intl = intl7.intl;
  const items = [obj, , , , , ];
  const obj2 = { id: "2", value: 2, label: intl2.string(intl7.t["+rHFej"]) };
  intl2 = intl7.intl;
  items[1] = obj2;
  const obj3 = { id: "4", value: 4, label: intl3.string(intl7.t["5CNt/M"]) };
  intl3 = intl7.intl;
  items[2] = obj3;
  const obj4 = { id: "6", value: 6, label: intl4.string(intl7.t.oQ4PNE) };
  intl4 = intl7.intl;
  items[3] = obj4;
  const obj5 = { id: "12", value: 12, label: intl5.string(intl7.t.LOQ0j6) };
  intl5 = intl7.intl;
  items[4] = obj5;
  const obj6 = { id: "24", value: 24, label: intl6.string(intl7.t["W0+LsV"]) };
  intl6 = intl7.intl;
  items[5] = obj6;
  return items;
};
export const IncidentAlertModeratorPermissions = combineResult;