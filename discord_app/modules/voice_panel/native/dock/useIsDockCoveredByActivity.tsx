// discord_app/modules/voice_panel/native/dock/useIsDockCoveredByActivity.tsx
import ActivityPanelUtils from "../../../activities/panel/native/utils/ActivityPanelUtils.tsx";
import FramesStore from "../../../frames/FramesStore.tsx";

require = fn;
const ActivityPanelModes = fn(5449).ActivityPanelModes;
const isLaunched = fn(6532).isLaunched;
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
}
