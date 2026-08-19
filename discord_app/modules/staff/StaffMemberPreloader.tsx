// === Module 16707: preloadStaffMembers ===

// Module 16707 (preloadStaffMembers)
import showTooManyUserGuildsAlertDefault from "showTooManyUserGuildsAlert" /* 6778 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { PRELOAD_SERVER_ID } from "PRELOAD_SERVER_ID" /* 16708 */;

const result = require("obj132").fileFinishedImporting("modules/staff/StaffMemberPreloader.tsx");

export const preloadStaffMembers = function preloadStaffMembers() {
  currentUser = currentUser.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (isStaffResult) {
    isStaffResult = null != guild.getGuild(PRELOAD_SERVER_ID);
  }
  if (isStaffResult) {
    const obj2 = showTooManyUserGuildsAlertDefault;
    const members = obj2.requestMembers(PRELOAD_SERVER_ID, "", 0, false);
  }
};