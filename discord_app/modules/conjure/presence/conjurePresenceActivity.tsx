// === Module 10757: conjurePresenceActivity ===

// Module 10757 (conjurePresenceActivity)
import ActivityTypes from "ActivityTypes" /* 5762 */;
import size from "module_2" /* 2 */;

const Conjuring = "Conjuring";
const result = size.fileFinishedImporting("modules/conjure/presence/conjurePresenceActivity.tsx");

export const CONJURE_PRESENCE_ACTIVITY_NAME = "Conjuring";
export const CONJURE_PRESENCE_ACTIVITY_LINES = ["Something magical", "Brewing something new", "Casting spells", "Stirring the cauldron", "Weaving a spell", "Summoning ideas"];
export function isConjurePresenceActivity(activity) {
  let type;
  if (activity != null) {
    type = activity.type;
  }
  let tmp2 = type === ActivityTypes.ActivityTypes.PLAYING;
  if (tmp2) {
    tmp2 = activity.name === Conjuring;
  }
  if (tmp2) {
    tmp2 = null == activity.application_id;
  }
  return tmp2;
}