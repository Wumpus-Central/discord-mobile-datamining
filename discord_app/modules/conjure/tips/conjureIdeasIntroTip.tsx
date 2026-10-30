// === Module 12592: conjureIdeasIntroTip ===

// Module 12592 (conjureIdeasIntroTip)
import conjureBotPermissionsTip from "conjureBotPermissionsTip" /* 12589 */;
import size from "module_2" /* 2 */;

function resolveIdeasIntroTip(agentIdle) {
  let tmp5 = null;
  if (agentIdle.agentIdle) {
    tmp5 = null;
    if (null != agentIdle.ideasIntroAnchorId) {
      tmp5 = null;
      if (!obj.isBotPermissionsReviewPending(tmp2)) {
        if (null == tmp) {
          if (!tmp3) {
            let str = null;
          }
          tmp5 = str;
        }
        str = "card";
      }
      obj = conjureBotPermissionsTip;
    }
  }
  return tmp5;
}
const result = size.fileFinishedImporting("modules/conjure/tips/conjureIdeasIntroTip.tsx");

export { resolveIdeasIntroTip };
export const CONJURE_IDEAS_INTRO_TIP_BASE = { id: "ideas_intro", priority: 1, resolve: resolveIdeasIntroTip, dismissal: "anchor" };