// === Module 17101: ActivityPanelUtils ===

// Module 17101 (ActivityPanelUtils)
import initialize from "initialize" /* 504 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4233 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 9598 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;

require = fn;
const ActivityPanelModes = fn(9575).ActivityPanelModes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/utils/ActivityPanelUtils.tsx");

export const useIsActivityPanelFullscreen = function useIsActivityPanelFullscreen() {
  const items = [EmbeddedActivitiesStore];
  return initialize.useStateFromStores(items, () => {
    const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(EmbeddedActivitiesStore.getConnectedActivityLocation());
    let tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === constants.PANEL;
    if (tmp3) {
      tmp3 = !isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
    }
    return tmp3;
  });
};