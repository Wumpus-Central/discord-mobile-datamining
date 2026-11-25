// === Module 19382: useIsDockCoveredByActivity ===

// Module 19382 (useIsDockCoveredByActivity)
import ActivityPanelUtils from "ActivityPanelUtils" /* 19331 */;
import FramesStore from "FramesStore" /* 6905 */;

require = fn;
const ActivityPanelModes = fn(5638).ActivityPanelModes;
const isLaunched = fn(6906).isLaunched;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useIsDockCoveredByActivity.tsx");

export default function useIsDockCoveredByActivity() {
  let isActivityPanelFullscreen = ActivityPanelUtils.useIsActivityPanelFullscreen();
  items = [FramesStore];
  if (!isActivityPanelFullscreen) {
    isActivityPanelFullscreen = obj2.useStateFromStores(items, () => {
      mainFrame = mainFrame.getMainFrame();
      let tmp2 = isLaunched(mainFrame);
      if (tmp2) {
        tmp2 = mainFrame.data.activityPanelMode === constants.PANEL;
      }
      return tmp2;
    });
  }
  return isActivityPanelFullscreen;
};