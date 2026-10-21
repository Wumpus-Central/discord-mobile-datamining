// === Module 5653: FastImageNativeComponent ===

// Module 5653 (FastImageNativeComponent)
import _mod26 from "module_26" /* 26 */;
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "DCDFastImageView", directEventTypes: { topLoadStart: { registrationName: "onLoadStart" }, topProgress: { registrationName: "onProgress" }, topError: { registrationName: "onError" }, topLoad: { registrationName: "onLoad" }, topLoadEnd: { registrationName: "onLoadEnd" } }, validAttributes: null };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onLoadStart: true, onProgress: true, onError: true, onLoad: true, onLoadEnd: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = { source: true, resizeMode: true, resizeMethod: true, shouldNotifyLoadEvents: true, tintColor: _mod26.colorAttribute, blurRadius: true, placeholder: true, autoPlay: true, enableAnimation: true, paused: true, fadeDuration: true, usesSmallCache: true };
const value = module_65.get("DCDFastImageView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/FastImageNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };