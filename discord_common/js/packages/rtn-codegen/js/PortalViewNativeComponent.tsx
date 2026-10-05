// === Module 7943: PortalViewNativeComponent ===

// Module 7943 (PortalViewNativeComponent)
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "DCDPortalView", directEventTypes: { topPortalViewLoaded: { registrationName: "onPortalViewLoaded" } }, validAttributes: obj2 };
obj2 = { portal: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onPortalViewLoaded: true }));
const value = module_65.get("DCDPortalView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/PortalViewNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };