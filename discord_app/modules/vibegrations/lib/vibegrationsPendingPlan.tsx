// discord_app/modules/vibegrations/lib/vibegrationsPendingPlan.tsx
import VibegrationsChatStore from "../stores/VibegrationsChatStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const turnSettled = VibegrationsChatStore.turnSettled;
const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsPendingPlan.tsx");

export const pendingPlanRenderId = function pendingPlanRenderId(memo) {
  const atResult = memo.at(-1);
  let role;
  if (atResult != null) {
    role = atResult.role;
  }
  if ("assistant" !== role) {
    return null;
  } else {
    let diff = memo.length - 1;
    if (0 <= diff) {
      while (true) {
        let tmp4 = memo[diff];
        if ("assistant" === tmp4.role) {
          if (!turnSettled(tmp4)) {
            break;
          } else if ("plan_implemented" === tmp4.kind) {
            break;
          } else if (null != tmp4.proposal) {
            return tmp4.render_id;
          }
        }
        diff = diff - 1;
      }
      return null;
    }
    return null;
  }
};
