// discord_app/modules/media_viewer/native/useMessagePreviewHeight.tsx
import keys from "keys";
import { batchUpdates } from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";

const obj = keys.create(() => ({ collapsedHeight: 0, expandedHeight: 0 }));
const result = require("set").fileFinishedImporting("modules/media_viewer/native/useMessagePreviewHeight.tsx");

export const useMessagePreviewHeightStore = obj;
export const useMessagePreviewCollapsedheight = function useMessagePreviewCollapsedheight() {
  return obj().collapsedHeight;
};
export const useMessagePreviewExpandedHeight = function useMessagePreviewExpandedHeight() {
  return obj().expandedHeight;
};
export const setMesssagePreviewHeight = function setMesssagePreviewHeight(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => outer1_2.setState(closure_0));
};
export const setMesssagePreviewCollapsedHeight = function setMesssagePreviewCollapsedHeight(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => outer1_2.setState({ collapsedHeight: closure_0 }));
};
export const setMesssagePreviewExpandedHeight = function setMesssagePreviewExpandedHeight(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => outer1_2.setState({ expandedHeight: closure_0 }));
};