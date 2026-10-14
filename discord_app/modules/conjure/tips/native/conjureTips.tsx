// === Module 11828: conjureTips ===

// Module 11828 (conjureTips)
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 11829 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 11836 */;
import ConjureIdeasTip from "ConjureIdeasTip" /* 11839 */;
import size from "module_2" /* 2 */;

const items = [ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP, ConjureIdeasTip.CONJURE_IDEAS_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;