// === Module 12846: conjureTips ===

// Module 12846 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 12847 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 12853 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 12854 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;