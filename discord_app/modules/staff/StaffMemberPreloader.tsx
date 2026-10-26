// === Module 18964: StaffMemberPreloader ===

// Module 18964 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6830 */;
import GuildStore from "GuildStore" /* 4845 */;
import UserStore from "UserStore" /* 1392 */;

const PRELOAD_SERVER_ID = fn(18965).PRELOAD_SERVER_ID;
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