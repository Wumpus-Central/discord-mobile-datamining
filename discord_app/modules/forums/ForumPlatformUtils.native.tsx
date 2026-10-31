// === Module 7948: ForumPlatformUtils ===

// Module 7948 (ForumPlatformUtils)
import util from "util" /* 1113 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/forums/ForumPlatformUtils.native.tsx");

export default {
  getForumChannelPermissionText() {
    const intl = util.intl;
    return intl.string(util.t.LG9VAi);
  }
};