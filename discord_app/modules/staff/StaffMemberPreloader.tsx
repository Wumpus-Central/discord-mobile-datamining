// === Module 17329: preloadStaffMembers ===

// Module 17329 (preloadStaffMembers)
import showTooManyUserGuildsAlertDefault from "showTooManyUserGuildsAlert" /* 5466 */;
import closure_2 from "createGuildRecordFromRust" /* 1908 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;
import { PRELOAD_SERVER_ID } from "PRELOAD_SERVER_ID" /* 17330 */;

const result = require("set").fileFinishedImporting("modules/staff/StaffMemberPreloader.tsx");

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