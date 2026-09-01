// discord_app/modules/staff/StaffMemberPreloader.tsx
import showTooManyUserGuildsAlertDefault from "../../actions/GuildActionCreators.tsx";
import closure_2 from "../../stores/GuildStore.tsx";
import closure_3 from "../../stores/UserStore.tsx";
import { PRELOAD_SERVER_ID } from "StaffMemberConstants.tsx";

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
