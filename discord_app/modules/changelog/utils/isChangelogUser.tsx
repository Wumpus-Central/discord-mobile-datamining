// discord_app/modules/changelog/utils/isChangelogUser.tsx
import set from "../../../../_runtime/00002_set.js";
import CHANGELOG_MODAL_KEY from "../ChangelogConstants.tsx";

const SYSTEM_UPDATES_USER_ID = CHANGELOG_MODAL_KEY.SYSTEM_UPDATES_USER_ID;
const result = set.fileFinishedImporting("modules/changelog/utils/isChangelogUser.tsx");

export default function isChangelogUser(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === SYSTEM_UPDATES_USER_ID;
  }
  return tmp;
}
