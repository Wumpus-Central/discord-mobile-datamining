// === Module 13509: conjureTips ===

// Module 13509 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 13510 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 13516 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 13517 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;