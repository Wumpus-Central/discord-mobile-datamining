// === Module 14657: conjureTips ===

// Module 14657 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 14658 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 14664 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 14665 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;