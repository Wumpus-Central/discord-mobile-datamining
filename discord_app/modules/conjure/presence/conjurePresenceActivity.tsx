// discord_app/modules/conjure/presence/conjurePresenceActivity.tsx
import ActivityTypes from "../../../../discord_common/js/shared/shared-constants/ActivityTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const Conjuring = "Conjuring";
const result = size.fileFinishedImporting("modules/conjure/presence/conjurePresenceActivity.tsx");

export const CONJURE_PRESENCE_ACTIVITY_NAME = "Conjuring";
export const CONJURE_PRESENCE_ACTIVITY_LINES = [
  "Something magical",
  "Brewing something new",
  "Casting spells",
  "Stirring the cauldron",
  "Weaving a spell",
  "Summoning ideas",
];
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
