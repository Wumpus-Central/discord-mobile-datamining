// === Module 5588: FastImageNativeComponent ===

// Module 5588 (FastImageNativeComponent)
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let __INTERNAL_VIEW_CONFIG = { uiViewClassName: "DCDFastImageView", directEventTypes: { topLoadStart: { registrationName: "onLoadStart" }, topProgress: { registrationName: "onProgress" }, topError: { registrationName: "onError" }, topLoad: { registrationName: "onLoad" }, topLoadEnd: { registrationName: "onLoadEnd" } }, validAttributes: null };
__INTERNAL_VIEW_CONFIG = { source: true, resizeMode: true, placeholder: true, enableAnimation: true, paused: true, manualPlayback: true, fade: true, usesSmallCache: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onLoadStart: true, onProgress: true, onError: true, onLoad: true, onLoadEnd: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = __INTERNAL_VIEW_CONFIG;
const value = module_65.get("DCDFastImageView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/FastImageNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };