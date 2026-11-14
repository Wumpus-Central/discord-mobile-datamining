// === Module 13192: useConjureManagedCopy ===

// Module 13192 (useConjureManagedCopy)
import ConjureManagedCopyStore from "ConjureManagedCopyStore" /* 7374 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/managed_copy/useConjureManagedCopy.tsx");

export default function useConjureManagedCopy(arg0) {
  _require = arg0;
  items = [ConjureManagedCopyStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let copy = null;
    if (null != closure_0) {
      copy = ConjureManagedCopyStore.getCopy(tmp);
    }
    return copy;
  }, items1);
};
export function useIsConjureManagedCopy(projectId) {
  _require = projectId;
  items = [ConjureManagedCopyStore];
  const items1 = [projectId];
  return null != require("initialize").useStateFromStores(items, () => {
    let copy = null;
    if (null != closure_0) {
      copy = ConjureManagedCopyStore.getCopy(tmp);
    }
    return copy;
  }, items1);
}
export function useConjureCopyLastSync(projectId) {
  _require = projectId;
  items = [ConjureManagedCopyStore];
  const items1 = [projectId];
  return require("initialize").useStateFromStores(items, () => ConjureManagedCopyStore.getLastSync(closure_0), items1);
}
export function useConjureDownstreamUpdates(projectId) {
  _require = projectId;
  items = [ConjureManagedCopyStore];
  const items1 = [projectId];
  return require("initialize").useStateFromStores(items, () => ConjureManagedCopyStore.getDownstreamUpdates(closure_0), items1);
}