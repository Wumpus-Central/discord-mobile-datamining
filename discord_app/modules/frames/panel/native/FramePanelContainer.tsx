// === Module 16859: FramePanelContainer ===

// Module 16859 (FramePanelContainer)
import FramePanelControllerDefault from "FramePanelController" /* 16860 */;
import FramePanelUIDefault from "FramePanelUI" /* 16862 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 8499 */;

const require = fn;
const isLaunched = fn(8500).isLaunched;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default noop.memo(function FramePanelContainer() {
  const items = [FramesStore];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => isLaunched(mainFrame.getMainFrame()))) {
    const obj2 = { children: jsx(FramePanelUIDefault, {}) };
    tmp2 = jsx(FramePanelControllerDefault, { children: jsx(FramePanelUIDefault, {}) });
  }
  return tmp2;
});