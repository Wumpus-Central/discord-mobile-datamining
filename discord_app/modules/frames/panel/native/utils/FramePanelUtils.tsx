// === Module 19674: FramePanelUtils ===

// Module 19674 (FramePanelUtils)
import initialize from "initialize" /* 504 */;
import FramesStore from "FramesStore" /* 6966 */;

require = fn;
const asLaunched = fn(6967).asLaunched;
const ActivityPanelModes = fn(5777).ActivityPanelModes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/utils/FramePanelUtils.tsx");

export function isFramePanelFullscreen() {
  const tmp = asLaunched(FramesStore.getMainFrame());
  let tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = tmp.data.activityPanelMode === ActivityPanelModes.PANEL;
  }
  return tmp2;
}
export function useIsActivityPanelFullscreen() {
  items = [FramesStore];
  return initialize.useStateFromStores(items, () => {
    const tmp = asLaunched(mainFrame.getMainFrame());
    let tmp2 = null != tmp;
    if (tmp2) {
      tmp2 = tmp.data.activityPanelMode === constants.PANEL;
    }
    return tmp2;
  });
}