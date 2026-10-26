// discord_app/modules/conjure/tips/conjureIdeasIntroTip.tsx
import conjureBotPermissionsTip from "conjureBotPermissionsTip.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function resolveIdeasIntroTip(ideasIntroAnchorId) {
  let tmp5 = null;
  if (null != ideasIntroAnchorId.ideasIntroAnchorId) {
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
  return tmp5;
}
const result = size.fileFinishedImporting("modules/conjure/tips/conjureIdeasIntroTip.tsx");

export { resolveIdeasIntroTip };
export const CONJURE_IDEAS_INTRO_TIP_BASE = {
  id: "ideas_intro",
  priority: 1,
  resolve: resolveIdeasIntroTip,
  dismissal: "anchor",
};
