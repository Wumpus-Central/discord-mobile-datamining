// discord_app/modules/frames/panel/native/FramePanelSystemUIManager.tsx
import ActivityPanelSystemUIManager from "../../../activities/panel/native/ActivityPanelSystemUIManager.tsx";
import FramePanelStateContextDefault from "FramePanelStateContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelSystemUIManager.tsx");

export default noop.memo(() => {
  const context = noop.useContext(FramePanelStateContextDefault);
  ({ mode, wrapperDimensions } = context);
  return jsx(ActivityPanelSystemUIManager.BaseActivityPanelSystemUIManager, {
    mode,
    isWindowLandscape: wrapperDimensions.isWindowLandscape,
  });
});
