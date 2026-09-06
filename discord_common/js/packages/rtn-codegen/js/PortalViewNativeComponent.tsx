// === Module 8268: PortalViewNativeComponent ===

// Module 8268 (PortalViewNativeComponent)
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let __INTERNAL_VIEW_CONFIG = { uiViewClassName: "DCDPortalView", directEventTypes: { topPortalViewLoaded: { registrationName: "onPortalViewLoaded" } }, validAttributes: null };
__INTERNAL_VIEW_CONFIG = { portal: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onPortalViewLoaded: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = __INTERNAL_VIEW_CONFIG;
const value = module_65.get("DCDPortalView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/PortalViewNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };