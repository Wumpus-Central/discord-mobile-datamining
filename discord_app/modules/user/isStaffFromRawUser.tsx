// === Module 12415: isStaffFromRawUser ===

// Module 12415 (isStaffFromRawUser)
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const UserFlags = Constants.UserFlags;
const result = size.fileFinishedImporting("modules/user/isStaffFromRawUser.tsx");

export default function isStaff(flags) {
  let num = flags.flags;
  if (num == null) {
    num = 0;
  }
  let tmp = (num & UserFlags.STAFF) === UserFlags.STAFF;
  if (!tmp) {
    let prop;
    if (flags != null) {
      prop = flags.personal_connection_id;
    }
    tmp = null != prop;
  }
  return tmp;
};