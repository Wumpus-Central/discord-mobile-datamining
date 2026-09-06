// discord_app/modules/frames/panel/native/FramePanelContainer.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import FramePanelControllerDefault from "FramePanelController.tsx";
import FramePanelUIDefault from "FramePanelUI.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import FramesStore from "../../FramesStore.tsx";

require = fn;
const isLaunched = fn(9511).isLaunched;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default noop.memo(function FramePanelContainer() {
  let obj = initialize;
  const items = [FramesStore];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => isLaunched(mainFrame.getMainFrame()))) {
    obj = { children: jsx(FramePanelUIDefault, {}) };
    tmp2 = jsx(FramePanelControllerDefault, { children: jsx(FramePanelUIDefault, {}) });
  }
  return tmp2;
});
