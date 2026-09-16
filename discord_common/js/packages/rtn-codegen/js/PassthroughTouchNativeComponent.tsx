// === Module 14224: PassthroughTouchNativeComponent ===

// Module 14224 (PassthroughTouchNativeComponent)
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "PassthroughTouchView", directEventTypes: { topTouchDown: { registrationName: "onTouchDown" } }, validAttributes: null };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onTouchDown: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = {};
const value = module_65.get("PassthroughTouchView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/PassthroughTouchNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };