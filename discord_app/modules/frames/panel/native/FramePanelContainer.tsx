// discord_app/modules/frames/panel/native/FramePanelContainer.tsx
import WakeLockDefault from "../../../device/native/WakeLock.tsx";
import FramePanelControllerDefault from "FramePanelController.tsx";
import FramePanelUIDefault from "FramePanelUI.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import FramesStore from "../../FramesStore.tsx";

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
    const items1 = [hasOwnProperty(WakeLockDefault, { wakeLockKey: "FrameActivities" })];
    const obj3 = { children: hasOwnProperty(FramePanelUIDefault, {}) };
    items1[1] = hasOwnProperty(FramePanelControllerDefault, obj3);
    obj2.children = items1;
    tmp2 = React5(timestampProducer, obj2);
  }
  return tmp2;
});
