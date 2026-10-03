// === Module 10621: conjuringActivity ===

// Module 10621 (conjuringActivity)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const ActivityTypes = Constants.ActivityTypes;
const Conjuring = "Conjuring";
const result = size.fileFinishedImporting("modules/vibegrations/lib/conjuringActivity.tsx");

export const CONJURING_ACTIVITY_NAME = "Conjuring";
export const CONJURING_ACTIVITY_LINES = ["Something magical", "Brewing something new", "Casting spells", "Stirring the cauldron", "Weaving a spell", "Summoning ideas"];
export const isConjuringActivity = function isConjuringActivity(activity) {
  let type;
  if (activity != null) {
    type = activity.type;
  }
  let tmp2 = type === ActivityTypes.PLAYING;
  if (tmp2) {
    tmp2 = activity.name === Conjuring;
  }
  if (tmp2) {
    tmp2 = null == activity.application_id;
  }
  return tmp2;
};