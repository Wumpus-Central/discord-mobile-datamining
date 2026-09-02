// === Module 8660: isChangelogChannel ===

// Module 8660 (isChangelogChannel)
import closure_0 from "ensureGuildLoaded" /* 1386 */;
import { SYSTEM_UPDATES_USER_ID } from "CHANGELOG_MODAL_KEY" /* 1979 */;

const result = require("set").fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === dMFromUserId.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  }
  return tmp;
};