// === Module 12332: conjureIdeasTip ===

// Module 12332 (conjureIdeasTip)
import conjureTipImpressions from "conjureTipImpressions" /* 12331 */;
import conjureIdeasIntroTip from "conjureIdeasIntroTip" /* 12333 */;
import size from "module_2" /* 2 */;

function resolveIdeasTip(turn) {
  let tmp4 = null;
  if (null != turn.turn) {
    tmp4 = null;
    if (!tmp) {
      tmp4 = null;
      if (tmp2) {
        tmp4 = null;
        if (tmp3 >= 60000) {
          tmp4 = null;
          if (null != turn.onAskForIdeas) {
            let tmp7 = null;
            if (turn.isDismissed(conjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP_BASE)) {
              if (0 === turn.messagesSinceShown(conjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP_BASE.id)) {
                let str = null;
              } else {
                conjureTipImpressions;
                str = "hint";
              }
              tmp7 = str;
            }
            tmp4 = tmp7;
          }
        }
      }
    }
  }
  return tmp4;
}
const ideas = "ideas";
const result = size.fileFinishedImporting("modules/conjure/tips/conjureIdeasTip.tsx");

export const CONJURE_TIP_IDEAS_IDLE_MS = 60000;
export const CONJURE_TIP_IDEAS_COOLDOWN_MESSAGES = 25;
export { resolveIdeasTip };
export const CONJURE_IDEAS_TIP_BASE = { id: "ideas", priority: 1, resolve: resolveIdeasTip, dismissal: "app" };