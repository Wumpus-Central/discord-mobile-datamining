// === Module 18457: conjureTips ===

// Module 18457 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 18458 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 18464 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 18465 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;