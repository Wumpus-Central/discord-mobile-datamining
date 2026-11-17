// === Module 20013: useIsDockCoveredByActivity ===

// Module 20013 (useIsDockCoveredByActivity)
import ActivityPanelUtils from "ActivityPanelUtils" /* 19967 */;
import FramesStore from "FramesStore" /* 7027 */;

require = fn;
const ActivityPanelModes = fn(5953).ActivityPanelModes;
const isLaunched = fn(7028).isLaunched;
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