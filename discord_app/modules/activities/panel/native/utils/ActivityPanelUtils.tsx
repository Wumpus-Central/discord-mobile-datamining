// === Module 16227: useIsActivityPanelFullscreen ===

// Module 16227 (useIsActivityPanelFullscreen)
import initialize from "initialize" /* 589 */;
import participantFromServer from "participantFromServer" /* 1390 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 8703 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/activities/panel/native/utils/ActivityPanelUtils.tsx");

export const useIsActivityPanelFullscreen = function useIsActivityPanelFullscreen() {
  const items = [closure_3];
  return initialize.useStateFromStores(items, () => {
    const embeddedActivityLocationChannelId = callback(table[3]).getEmbeddedActivityLocationChannelId(store.getConnectedActivityLocation());
    let tmp3 = store.getActivityPanelMode() === constants.PANEL;
    if (tmp3) {
      tmp3 = !callback2(table[4])(embeddedActivityLocationChannelId);
    }
    return tmp3;
  });
};