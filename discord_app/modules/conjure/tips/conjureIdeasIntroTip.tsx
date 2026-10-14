// === Module 11822: conjureIdeasIntroTip ===

// Module 11822 (conjureIdeasIntroTip)
import size from "module_2" /* 2 */;

function resolveIdeasIntroTip(turn) {
  let str = null;
  if (null != turn.turn) {
    str = null;
    if (tmp) {
      str = "card";
    }
  }
  return str;
}
const result = size.fileFinishedImporting("modules/conjure/tips/conjureIdeasIntroTip.tsx");

export { resolveIdeasIntroTip };
export const CONJURE_IDEAS_INTRO_TIP_BASE = { id: "ideas_intro", priority: 1, resolve: resolveIdeasIntroTip, dismissal: "app" };