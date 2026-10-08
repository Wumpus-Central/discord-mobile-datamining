// === Module 17962: StaffMemberPreloader ===

// Module 17962 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6102 */;
import GuildStore from "GuildStore" /* 2086 */;
import UserStore from "UserStore" /* 1389 */;

const PRELOAD_SERVER_ID = fn(17963).PRELOAD_SERVER_ID;
const size = fn(2);
const result = size.fileFinishedImporting("modules/staff/StaffMemberPreloader.tsx");

export const preloadStaffMembers = function preloadStaffMembers() {
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (isStaffResult) {
    isStaffResult = null != GuildStore.getGuild(PRELOAD_SERVER_ID);
  }
  if (isStaffResult) {
    const obj2 = GuildActionCreatorsDefault;
    const members = obj2.requestMembers(PRELOAD_SERVER_ID, "", 0, false);
  }
};