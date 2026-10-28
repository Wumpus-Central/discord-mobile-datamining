// === Module 19154: FramePanelUtils ===

// Module 19154 (FramePanelUtils)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import FramesStore from "FramesStore" /* 6810 */;

require = fn;
const asLaunched = fn(6811).asLaunched;
const ActivityPanelModes = fn(5645).ActivityPanelModes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/utils/FramePanelUtils.tsx");

export const isFramePanelFullscreen = function isFramePanelFullscreen() {
  const tmp = asLaunched(FramesStore.getMainFrame());
  let tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = tmp.data.activityPanelMode === ActivityPanelModes.PANEL;
  }
  return tmp2;
};
export const useIsActivityPanelFullscreen = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsActivityPanelFullscreen() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    const fn = function u() {
      const tmp = asLaunched(mainFrame.getMainFrame());
      let tmp2 = null != tmp;
      if (tmp2) {
        tmp2 = tmp.data.activityPanelMode === constants.PANEL;
      }
      return tmp2;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useIsActivityPanelFullscreen() {
  const items = [FramesStore];
  return initialize.useStateFromStores(items, () => {
    const tmp = asLaunched(mainFrame.getMainFrame());
    let tmp2 = null != tmp;
    if (tmp2) {
      tmp2 = tmp.data.activityPanelMode === constants.PANEL;
    }
    return tmp2;
  });
});