// === Module 19146: FramePanelContainer ===

// Module 19146 (FramePanelContainer)
import WakeLockDefault from "WakeLock" /* 11837 */;
import FramePanelControllerDefault from "FramePanelController" /* 19147 */;
import FramePanelUIDefault from "FramePanelUI" /* 19149 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 6846 */;

const require = fn;
const isLaunched = fn(6847).isLaunched;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default noop.memo(function FramePanelContainer() {
  const items = [FramesStore];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => isLaunched(mainFrame.getMainFrame()))) {
    const obj2 = { children: null };
    const items1 = [hasOwnProperty(WakeLockDefault, { wakeLockKey: "FrameActivities" }), ];
    const obj3 = { children: hasOwnProperty(FramePanelUIDefault, {}) };
    items1[1] = hasOwnProperty(FramePanelControllerDefault, obj3);
    obj2.children = items1;
    tmp2 = React5(timestampProducer, obj2);
  }
  return tmp2;
});