// discord_app/modules/conjure/tips/native/conjureTips.tsx
import ConjureLiveBehindTip from "ConjureLiveBehindTip.tsx";
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip.tsx";
import ConjureIdeasTip from "ConjureIdeasTip.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const items = [
  ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP,
  ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP,
  ConjureIdeasTip.CONJURE_IDEAS_TIP,
];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
