// === Module 12457: FramePoolActionCreators ===

// Module 12457 (FramePoolActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/FramePoolActionCreators.tsx");

export function updateFramePoolVisibility(frameId, hidden) {
  DispatcherDefault.dispatch({ type: "FRAME_POOL_VISIBILITY_UPDATE", frameId, poolVisibility: hidden });
}