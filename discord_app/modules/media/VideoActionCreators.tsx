// discord_app/modules/media/VideoActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/media/VideoActionCreators.tsx");

export const updateVideoSize = function updateVideoSize(streamId, size, sharedValue2) {
  const obj = { type: "VIDEO_SIZE_UPDATE", streamId, dimensions: size, zoom: sharedValue2 };
  obj.dispatch(obj);
};
