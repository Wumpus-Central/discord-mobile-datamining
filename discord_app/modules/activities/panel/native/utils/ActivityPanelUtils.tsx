// === Module 16227: useIsActivityPanelFullscreen ===

// Module 16227 (useIsActivityPanelFullscreen)
import initialize from "initialize" /* 589 */;
import closure_3 from "participantFromServer" /* 1390 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 8703 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/panel/native/utils/ActivityPanelUtils.tsx");

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