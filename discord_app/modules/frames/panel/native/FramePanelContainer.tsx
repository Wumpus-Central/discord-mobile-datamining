// === Module 17132: FramePanelContainer ===

// Module 17132 (FramePanelContainer)
import initialize from "initialize" /* 504 */;
import FramePanelControllerDefault from "FramePanelController" /* 17133 */;
import FramePanelUIDefault from "FramePanelUI" /* 17135 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9580 */;

require = fn;
const isLaunched = fn(9581).isLaunched;
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