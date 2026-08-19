// discord_app/modules/media/VideoActionCreators.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import dispatcherDefault from "../../Dispatcher.tsx";

const result = obj132.fileFinishedImporting("modules/media/VideoActionCreators.tsx");

export const updateVideoSize = function updateVideoSize(isCamera, dimensions, sharedValue2) {
  const obj = { type: "VIDEO_SIZE_UPDATE", streamId: isCamera, dimensions, zoom: sharedValue2 };
  obj.dispatch(obj);
};