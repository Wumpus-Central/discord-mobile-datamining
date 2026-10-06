// === Module 16633: useFramePoolBorrow ===

// Module 16633 (useFramePoolBorrow)
import FramePoolManagerDefault from "FramePoolManager" /* 16634 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let _slicedToArray = _slicedToArray_mod;
let result = size.fileFinishedImporting("modules/frames/native/useFramePoolBorrow.tsx");

export default function useFramePoolBorrow(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  let closure_2;
  let first;
  importDefault = arg0;
  dependencyMap = arg1;
  _slicedToArray = arg2;
  let obj = first;
  first = _slicedToArray(first.useState(() => Symbol("frame-render-target")), 1)[0];
  const items = [arg0, first, arg1];
  const effect = first.useEffect(() => {
    let obj = FramePoolManagerDefault;
    obj.registerFrameTarget(closure_0, first, closure_1, closure_2);
    return () => {
      const obj = closure_0(closure_1[2]);
      obj.removeFrameTarget(closure_1_0, first);
    };
  }, items);
  const items1 = [arg0, first, arg2];
  const effect1 = first.useEffect(() => {
    const obj = FramePoolManagerDefault;
    const result = obj.updateFrameTargetState(closure_0, first, closure_2);
  }, items1);
  const syncExternalStore = first.useSyncExternalStore(FramePoolManagerDefault.subscribe, () => {
    const obj = FramePoolManagerDefault;
    return obj.getWinningTarget(closure_0) === first;
  });
  const useSyncExternalStore = first.useSyncExternalStore;
  let syncExternalStore1 = null;
  if (syncExternalStore) {
    syncExternalStore1 = useSyncExternalStore(FramePoolManagerDefault.subscribe, () => {
      const obj = FramePoolManagerDefault;
      return obj.getFrameEntry(closure_0);
    });
  }
  const obj2 = {
    webViewKey: syncExternalStore1,
    temporaryParentNodeTag: obj.useSyncExternalStore(FramePoolManagerDefault.subscribe, () => {
      const obj = closure_0(closure_1[2]);
      return obj.getPoolNodeTag();
    })
  };
  return obj2;
};