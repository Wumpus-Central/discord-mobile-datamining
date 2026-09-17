// === Module 8551: ForumPlatformUtils ===

// Module 8551 (ForumPlatformUtils)
import util from "util" /* 1115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/forums/ForumPlatformUtils.native.tsx");

export default {
  getForumChannelPermissionText() {
    const intl = util.intl;
    return intl.string(util.t.LG9VAi);
  }
};