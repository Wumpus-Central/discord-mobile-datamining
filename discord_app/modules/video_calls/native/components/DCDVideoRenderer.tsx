// discord_app/modules/video_calls/native/components/DCDVideoRenderer.tsx
import VideoRendererNativeComponentDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/VideoRendererNativeComponent.tsx";
import requireNativeComponentOrDefault from "../../../../utils/native/requireNativeComponentOrDefault.native.tsx";

const obj = { componentName: "DCDVideoRenderer", componentFoundInstance: null };
obj.componentFoundInstance = VideoRendererNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/DCDVideoRenderer.tsx");

export default requireNativeComponentOrDefault(obj);
