// === Module 7843: ForumPlatformUtils ===

// Module 7843 (ForumPlatformUtils)
import util from "util" /* 1112 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/forums/ForumPlatformUtils.native.tsx");

export default {
  getForumChannelPermissionText() {
    const intl = util.intl;
    return intl.string(util.t.LG9VAi);
  }
};