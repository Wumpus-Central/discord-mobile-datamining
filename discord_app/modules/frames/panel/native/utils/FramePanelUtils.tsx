// discord_app/modules/frames/panel/native/utils/FramePanelUtils.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import FramesStore from "../../../FramesStore.tsx";

require = fn;
const asLaunched = fn(6841).asLaunched;
const ActivityPanelModes = fn(5652).ActivityPanelModes;
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
  const items = [FramesStore];
  return initialize.useStateFromStores(items, () => {
    const tmp = asLaunched(mainFrame.getMainFrame());
    let tmp2 = null != tmp;
    if (tmp2) {
      tmp2 = tmp.data.activityPanelMode === constants.PANEL;
    }
    return tmp2;
  });
}
