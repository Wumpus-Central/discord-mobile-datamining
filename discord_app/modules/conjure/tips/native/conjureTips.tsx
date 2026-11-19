// === Module 18504: conjureTips ===

// Module 18504 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 18505 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 18511 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 18512 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;