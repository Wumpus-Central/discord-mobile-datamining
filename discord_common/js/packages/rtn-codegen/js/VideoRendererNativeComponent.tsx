// === Module 9115: VideoRendererNativeComponent ===

// Module 9115 (VideoRendererNativeComponent)
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "DCDVideoRenderer", directEventTypes: { topSize: { registrationName: "onSize" }, topReady: { registrationName: "onReady" } }, validAttributes: obj2 };
obj2 = { useSurfaceDirectRenderer: true, streamId: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onSize: true, onReady: true }));
const value = module_65.get("DCDVideoRenderer", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/VideoRendererNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };