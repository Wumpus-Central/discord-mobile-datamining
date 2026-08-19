// === Module 8779: isChangelogChannel ===

// Module 8779 (isChangelogChannel)
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import { SYSTEM_UPDATES_USER_ID } from "CHANGELOG_MODAL_KEY" /* 1978 */;

const result = require("obj132").fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === dMFromUserId.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  }
  return tmp;
};