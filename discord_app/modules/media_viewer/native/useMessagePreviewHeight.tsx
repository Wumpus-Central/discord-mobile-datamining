// === Module 11566: useMessagePreviewHeight ===

// Module 11566 (useMessagePreviewHeight)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useMessagePreviewHeightStore = module_560.create(() => ({ collapsedHeight: 0, expandedHeight: 0 }));
const result = size.fileFinishedImporting("modules/media_viewer/native/useMessagePreviewHeight.tsx");

export { useMessagePreviewHeightStore };
export function useMessagePreviewCollapsedheight() {
  return obj().collapsedHeight;
}
export function useMessagePreviewExpandedHeight() {
  return obj().expandedHeight;
}
export function setMesssagePreviewHeight(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => obj.setState(closure_0));
}
export function setMesssagePreviewCollapsedHeight(collapsedHeight) {
  _require = collapsedHeight;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { collapsedHeight };
    return obj.setState(obj);
  });
}
export function setMesssagePreviewExpandedHeight(expandedHeight) {
  _require = expandedHeight;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { expandedHeight };
    return obj.setState(obj);
  });
}