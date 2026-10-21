// === Module 11807: FramePoolActionCreators ===

// Module 11807 (FramePoolActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/FramePoolActionCreators.tsx");

export const updateFramePoolVisibility = function updateFramePoolVisibility(frameId, hidden) {
  DispatcherDefault.dispatch({ type: "FRAME_POOL_VISIBILITY_UPDATE", frameId, poolVisibility: hidden });
};