// discord_app/modules/changelog/utils/isChangelogUser.tsx
import ChangelogConstants from "../ChangelogConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const SYSTEM_UPDATES_USER_ID = ChangelogConstants.SYSTEM_UPDATES_USER_ID;
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogUser.tsx");

export default function isChangelogUser(arg0) {
  return null != arg0 && arg0 === SYSTEM_UPDATES_USER_ID;
}
