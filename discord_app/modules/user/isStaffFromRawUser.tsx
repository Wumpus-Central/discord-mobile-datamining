// discord_app/modules/user/isStaffFromRawUser.tsx
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
}
