// discord_app/modules/media_viewer/native/useMessagePreviewHeight.tsx
import 00560__ from "../../../../_runtime/metro/00560__.js";
import size from "../../../../_runtime/metro/00002__.js";

const useMessagePreviewHeightStore = module_560.create(() => ({ collapsedHeight: 0, expandedHeight: 0 }));
const result = size.fileFinishedImporting("modules/media_viewer/native/useMessagePreviewHeight.tsx");

export { useMessagePreviewHeightStore };
export const useMessagePreviewCollapsedheight = function useMessagePreviewCollapsedheight() {
  return obj().collapsedHeight;
};
export const useMessagePreviewExpandedHeight = function useMessagePreviewExpandedHeight() {
  return obj().expandedHeight;
};
export const setMesssagePreviewHeight = function setMesssagePreviewHeight(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => obj.setState(closure_0));
};
export const setMesssagePreviewCollapsedHeight = function setMesssagePreviewCollapsedHeight(collapsedHeight) {
  _require = collapsedHeight;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { collapsedHeight };
    return obj.setState(obj);
  });
};
export const setMesssagePreviewExpandedHeight = function setMesssagePreviewExpandedHeight(expandedHeight) {
  _require = expandedHeight;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { expandedHeight };
    return obj.setState(obj);
  });
};