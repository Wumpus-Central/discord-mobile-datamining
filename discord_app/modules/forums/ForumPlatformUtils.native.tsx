// === Module 8619: getSystemLocale ===

// Module 8619 (getSystemLocale)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const result = set.fileFinishedImporting("modules/forums/ForumPlatformUtils.native.tsx");

export default {
  getForumChannelPermissionText() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.LG9VAi);
  }
};