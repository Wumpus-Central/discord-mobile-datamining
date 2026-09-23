// === Module 17583: FramePanelContainer ===

// Module 17583 (FramePanelContainer)
import FramePanelControllerDefault from "FramePanelController" /* 17584 */;
import FramePanelUIDefault from "FramePanelUI" /* 17586 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9389 */;

const require = fn;
const isLaunched = fn(9390).isLaunched;
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