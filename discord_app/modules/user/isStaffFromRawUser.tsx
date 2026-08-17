// discord_app/modules/user/isStaffFromRawUser.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";

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