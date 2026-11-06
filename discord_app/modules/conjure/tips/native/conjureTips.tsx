// === Module 12811: conjureTips ===

// Module 12811 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 12812 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 12818 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 12819 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;