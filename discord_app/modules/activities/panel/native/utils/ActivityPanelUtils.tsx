// === Module 17460: ActivityPanelUtils ===

// Module 17460 (ActivityPanelUtils)
import initialize from "initialize" /* 504 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4385 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 9613 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2040 */;

require = fn;
const ActivityPanelModes = fn(9314).ActivityPanelModes;
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