// === Module 16223: updateVideoSize ===

// Module 16223 (updateVideoSize)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/media/VideoActionCreators.tsx");

export const updateVideoSize = function updateVideoSize(isCamera, dimensions, sharedValue2) {
  const obj = { type: "VIDEO_SIZE_UPDATE", streamId: isCamera, dimensions, zoom: sharedValue2 };
  obj.dispatch(obj);
};