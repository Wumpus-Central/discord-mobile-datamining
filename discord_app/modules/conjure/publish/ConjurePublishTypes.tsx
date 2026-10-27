// === Module 10808: ConjurePublishTypes ===

// Module 10808 (ConjurePublishTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/ConjurePublishTypes.tsx");

export function isConjureLive(publishState) {
  let tmp = "live_outdated" === publishState;
  if (!tmp) {
    tmp = "live_current" === publishState;
  }
  if (!tmp) {
    tmp = "live_auto_synced" === publishState;
  }
  return tmp;
}
export function canPublish(publishState) {
  let tmp = "nothing_built" !== publishState;
  if (tmp) {
    tmp = "live_auto_synced" !== publishState;
  }
  return tmp;
}
export const CONJURE_PUBLISH_PROGRESS_STAGES = ["preparing", "approval", "setup", "build", "deploy", "discord", "activating"];