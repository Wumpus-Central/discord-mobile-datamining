// === Module 19512: VideoActionCreators ===

// Module 19512 (VideoActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media/VideoActionCreators.tsx");

export function updateVideoSize(c1, size, sharedValue2) {
  DispatcherDefault.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: dependencyMap, dimensions: size, zoom: sharedValue2 });
}