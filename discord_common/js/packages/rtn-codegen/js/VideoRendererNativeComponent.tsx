// === Module 9617: VideoRendererNativeComponent ===

// Module 9617 (VideoRendererNativeComponent)
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let __INTERNAL_VIEW_CONFIG = { uiViewClassName: "DCDVideoRenderer", directEventTypes: { topSize: { registrationName: "onSize" }, topReady: { registrationName: "onReady" } }, validAttributes: null };
__INTERNAL_VIEW_CONFIG = { useSurfaceDirectRenderer: true, streamId: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onSize: true, onReady: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = __INTERNAL_VIEW_CONFIG;
const value = module_65.get("DCDVideoRenderer", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/VideoRendererNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };