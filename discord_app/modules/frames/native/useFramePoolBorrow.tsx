// === Module 16895: useFramePoolBorrow ===

// Module 16895 (useFramePoolBorrow)
import FramePoolManagerDefault from "FramePoolManager" /* 16896 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
let result = size.fileFinishedImporting("modules/frames/native/useFramePoolBorrow.tsx");

export default function useFramePoolBorrow(arg0, arg1, arg2) {
  importDefault = arg0;
  dependencyMap = arg1;
  _slicedToArray = arg2;
  first = _slicedToArray(first.useState(() => Symbol("frame-render-target")), 1)[0];
  const items = [arg0, first, arg1];
  const effect = first.useEffect(() => {
    FramePoolManagerDefault.registerFrameTarget(closure_0, first, closure_1, closure_2);
    return () => {
      closure_0(closure_1[2]).removeFrameTarget(closure_1_0, first);
    };
  }, items);
  const items1 = [arg0, first, arg2];
  const effect1 = first.useEffect(() => {
    const result = FramePoolManagerDefault.updateFrameTargetState(closure_0, first, closure_2);
  }, items1);
  const syncExternalStore = first.useSyncExternalStore(FramePoolManagerDefault.subscribe, () => FramePoolManagerDefault.getWinningTarget(closure_0) === first);
  let syncExternalStore1 = null;
  if (syncExternalStore) {
    syncExternalStore1 = first.useSyncExternalStore(FramePoolManagerDefault.subscribe, () => FramePoolManagerDefault.getFrameEntry(closure_0));
  }
  return { webViewKey: syncExternalStore1, temporaryParentNodeTag: first.useSyncExternalStore(FramePoolManagerDefault.subscribe, () => closure_0(closure_1[2]).getPoolNodeTag()) };
};