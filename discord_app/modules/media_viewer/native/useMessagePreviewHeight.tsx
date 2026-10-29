// === Module 11328: useMessagePreviewHeight ===

// Module 11328 (useMessagePreviewHeight)
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useMessagePreviewHeightStore = module_570.create(() => ({ collapsedHeight: 0, expandedHeight: 0 }));
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result2 = size.fileFinishedImporting("modules/media_viewer/native/useMessagePreviewHeight.tsx");

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