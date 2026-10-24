// === Module 7876: ForumPlatformUtils ===

// Module 7876 (ForumPlatformUtils)
import util from "util" /* 1128 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/forums/ForumPlatformUtils.native.tsx");

export default {
  getForumChannelPermissionText() {
    const intl = util.intl;
    return intl.string(util.t.LG9VAi);
  }
};