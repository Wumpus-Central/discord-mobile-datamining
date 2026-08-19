// discord_app/modules/guild_antiraid/GuildAntiRaidConstants.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import sum from "../../../discord_common/js/shared/Constants.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import importAllResult from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";

const Permissions = sum.Permissions;
const combineResult = importAllResult.combine(Permissions.ADMINISTRATOR, Permissions.MANAGE_GUILD, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);
const result = obj132.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidConstants.tsx");

export const GUILD_REPORT_RAID_MOBILE_KEY = "guild_report_raid_mobile";
export const NAGBAR_DISPLAY_MAX_HOURS = 2;
export const DEFAULT_LOCKDOWN_DURATION = 2;
export const getTimeframes = () => {
  let obj = { id: "1", value: 1, label: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["GA/d4I"]);
  const items = [obj, , , , , ];
  obj = { id: "2", value: 2, label: null };
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t["+rHFej"]);
  items[1] = obj;
  obj = { id: "4", value: 4, label: null };
  const intl3 = getSystemLocale.intl;
  obj[2] = intl3.string(getSystemLocale.t["5CNt/M"]);
  items[2] = obj;
  obj1 = { id: "6", value: 6, label: null };
  const intl4 = getSystemLocale.intl;
  obj1[2] = intl4.string(getSystemLocale.t.oQ4PNE);
  items[3] = obj1;
  const obj2 = { id: "12", value: 12, label: null };
  const intl5 = getSystemLocale.intl;
  obj2[2] = intl5.string(getSystemLocale.t.LOQ0j6);
  items[4] = obj2;
  const obj3 = { id: "24", value: 24, label: null };
  const intl6 = getSystemLocale.intl;
  obj3[2] = intl6.string(getSystemLocale.t["W0+LsV"]);
  items[5] = obj3;
  return items;
};
export const IncidentAlertModeratorPermissions = combineResult;