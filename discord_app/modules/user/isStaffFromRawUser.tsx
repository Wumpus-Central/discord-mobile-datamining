// === Module 11587: isStaff ===

// Module 11587 (isStaff)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

const UserFlags = ME.UserFlags;
const result = obj132.fileFinishedImporting("modules/user/isStaffFromRawUser.tsx");

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