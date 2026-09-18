// === Module 17414: FramePanelContainer ===

// Module 17414 (FramePanelContainer)
import FramePanelControllerDefault from "FramePanelController" /* 17415 */;
import FramePanelUIDefault from "FramePanelUI" /* 17417 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9748 */;

const require = fn;
const isLaunched = fn(9749).isLaunched;
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