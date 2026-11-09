// === Module 19524: FramePanelContainer ===

// Module 19524 (FramePanelContainer)
import WakeLockDefault from "WakeLock" /* 12001 */;
import FramePanelControllerDefault from "FramePanelController" /* 19525 */;
import FramePanelUIDefault from "FramePanelUI" /* 19527 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 6901 */;

const require = fn;
const isLaunched = fn(6902).isLaunched;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: closure_6, jsxs: metroImportDefault } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default noop.memo(function FramePanelContainer() {
  items = [FramesStore];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => isLaunched(mainFrame.getMainFrame()))) {
    const obj2 = { children: null };
    const items1 = [hasOwnProperty(WakeLockDefault, { wakeLockKey: "FrameActivities" }), ];
    const obj3 = { children: hasOwnProperty(FramePanelUIDefault, {}) };
    items1[1] = hasOwnProperty(FramePanelControllerDefault, obj3);
    obj2.children = items1;
    tmp2 = metroImportDefault(timestampProducer, obj2);
  }
  return tmp2;
});