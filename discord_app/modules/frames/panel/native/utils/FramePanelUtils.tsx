// === Module 20131: FramePanelUtils ===

// Module 20131 (FramePanelUtils)
import initialize from "initialize" /* 504 */;
import FramesStore from "FramesStore" /* 6956 */;

require = fn;
const asLaunched = fn(6957).asLaunched;
const ActivityPanelModes = fn(5896).ActivityPanelModes;
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