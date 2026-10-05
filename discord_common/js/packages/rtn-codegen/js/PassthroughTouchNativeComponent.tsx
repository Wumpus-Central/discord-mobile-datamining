// === Module 13934: PassthroughTouchNativeComponent ===

// Module 13934 (PassthroughTouchNativeComponent)
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "PassthroughTouchView", directEventTypes: { topTouchDown: { registrationName: "onTouchDown" } }, validAttributes: obj2 };
obj2 = {};
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onTouchDown: true }));
const value = module_65.get("PassthroughTouchView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/PassthroughTouchNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };