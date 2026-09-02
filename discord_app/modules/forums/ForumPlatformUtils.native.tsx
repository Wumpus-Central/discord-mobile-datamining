// === Module 8688: getSystemLocale ===

// Module 8688 (getSystemLocale)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;

const result = set.fileFinishedImporting("modules/forums/ForumPlatformUtils.native.tsx");

export default {
  getForumChannelPermissionText() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.LG9VAi);
  }
};