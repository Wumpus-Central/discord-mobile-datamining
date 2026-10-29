// === Module 12429: conjureTips ===

// Module 12429 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 12430 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 12436 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 12437 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;