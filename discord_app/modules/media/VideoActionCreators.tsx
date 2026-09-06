// === Module 17004: VideoActionCreators ===

// Module 17004 (VideoActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media/VideoActionCreators.tsx");

export const updateVideoSize = function updateVideoSize(streamId, size, sharedValue2) {
  const obj = { type: "VIDEO_SIZE_UPDATE", streamId, dimensions: size, zoom: sharedValue2 };
  obj.dispatch(obj);
};