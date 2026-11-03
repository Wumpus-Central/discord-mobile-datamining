// discord_app/modules/media/VideoActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/media/VideoActionCreators.tsx");

export function updateVideoSize(c1, size, sharedValue2) {
  DispatcherDefault.dispatch({
    type: "VIDEO_SIZE_UPDATE",
    streamId: dependencyMap,
    dimensions: size,
    zoom: sharedValue2,
  });
}
