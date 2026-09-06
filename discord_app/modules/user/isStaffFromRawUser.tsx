// === Module 12415: isStaff ===

// Module 12415 (isStaff)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;

const UserFlags = ME.UserFlags;
const result = set.fileFinishedImporting("modules/user/isStaffFromRawUser.tsx");

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