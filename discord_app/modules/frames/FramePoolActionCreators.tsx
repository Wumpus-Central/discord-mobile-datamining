// discord_app/modules/frames/FramePoolActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/frames/FramePoolActionCreators.tsx");

export function updateFramePoolVisibility(frameId, hidden) {
  DispatcherDefault.dispatch({ type: "FRAME_POOL_VISIBILITY_UPDATE", frameId, poolVisibility: hidden });
}
