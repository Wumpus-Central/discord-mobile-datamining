// === Module 17541: FramePanelUtils ===

// Module 17541 (FramePanelUtils)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import FramesConstants from "FramesConstants" /* 8704 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8705 */;
import FramesStore from "FramesStore" /* 8703 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const asLaunched = FramesConstants.asLaunched;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let mainFrame;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    const fn = function u() {
      const tmp = asLaunched(mainFrame.getMainFrame());
      return null != tmp && tmp.data.activityPanelMode === constants.PANEL;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let mainFrame;
  const items = [FramesStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    const tmp = asLaunched(mainFrame.getMainFrame());
    return null != tmp && tmp.data.activityPanelMode === constants.PANEL;
  });
});
const result = size.fileFinishedImporting("modules/frames/panel/native/utils/FramePanelUtils.tsx");

export const isFramePanelFullscreen = function isFramePanelFullscreen() {
  const tmp = asLaunched(FramesStore.getMainFrame());
  return null != tmp && tmp.data.activityPanelMode === ActivityPanelModes.PANEL;
};
export const useIsActivityPanelFullscreen = tmp2;