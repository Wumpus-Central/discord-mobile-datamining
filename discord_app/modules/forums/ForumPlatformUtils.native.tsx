// === Module 8111: ForumPlatformUtils ===

// Module 8111 (ForumPlatformUtils)
import util from "util" /* 1126 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/forums/ForumPlatformUtils.native.tsx");

export default {
  getForumChannelPermissionText() {
    const intl = util.intl;
    return intl.string(util.t.LG9VAi);
  }
};