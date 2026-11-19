// === Module 19723: StaffMemberPreloader ===

// Module 19723 (StaffMemberPreloader)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6390 */;
import GuildStore from "GuildStore" /* 4663 */;
import UserStore from "UserStore" /* 1388 */;

const PRELOAD_SERVER_ID = fn(19724).PRELOAD_SERVER_ID;
const size = fn(2);
const result = size.fileFinishedImporting("modules/staff/StaffMemberPreloader.tsx");

export function preloadStaffMembers() {
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
}