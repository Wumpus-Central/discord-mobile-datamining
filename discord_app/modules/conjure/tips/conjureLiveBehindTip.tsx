// discord_app/modules/conjure/tips/conjureLiveBehindTip.tsx
import conjurePublishCard from "../publish/conjurePublishCard.tsx";
import conjureTipImpressions from "conjureTipImpressions.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function resolveLiveBehindTip(draftHasText) {
  ({ turn, publish } = draftHasText);
  if (null != turn) {
    if (!draftHasText.draftHasText) {
      if (null != publish) {
        if (!publish.publishing) {
          if (publish.isUpdate) {
            if (null == publish.disabledReason) {
              if (tmp >= c3) {
                if (null == turn.publishCta) {
                  conjureTipImpressions;
                  let tmp8 = "hint";
                } else {
                  conjurePublishCard;
                }
              }
              return tmp8;
            }
          }
        }
      }
    }
  }
  tmp8 = null;
}
const live_behind = "live_behind";
let c3 = 120000;
const result = size.fileFinishedImporting("modules/conjure/tips/conjureLiveBehindTip.tsx");

export const CONJURE_TIP_LIVE_BEHIND_IDLE_MS = 120000;
export const CONJURE_TIP_LIVE_BEHIND_COOLDOWN_MESSAGES = 10;
export { resolveLiveBehindTip };
export const CONJURE_LIVE_BEHIND_TIP_BASE = {
  id: "live_behind",
  priority: 2,
  resolve: resolveLiveBehindTip,
  dismissal: "session",
};
