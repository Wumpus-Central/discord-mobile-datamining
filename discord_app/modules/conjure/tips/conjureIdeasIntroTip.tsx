// === Module 12333: conjureIdeasIntroTip ===

// Module 12333 (conjureIdeasIntroTip)
import size from "module_2" /* 2 */;

function resolveIdeasIntroTip(arg0) {
  ({ turn, publish, hasPublished, justRemixed } = arg0);
  let tmp = null;
  if (!obj.isBotPermissionsReviewPending(publish)) {
    if (null == turn) {
      let str = null;
      tmp = str;
    }
    str = "card";
  }
  return tmp;
}
const result = size.fileFinishedImporting("modules/conjure/tips/conjureIdeasIntroTip.tsx");

export { resolveIdeasIntroTip };
export const CONJURE_IDEAS_INTRO_TIP_BASE = { id: "ideas_intro", priority: 1, resolve: resolveIdeasIntroTip, dismissal: "app" };