// === Module 14576: KeyCommandsNativeComponent ===

// Module 14576 (KeyCommandsNativeComponent)
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let __INTERNAL_VIEW_CONFIG = { uiViewClassName: "KeyCommandsView", directEventTypes: { topKeyCommand: { registrationName: "onKeyCommand" } }, validAttributes: null };
__INTERNAL_VIEW_CONFIG = { keyCommands: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onKeyCommand: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = __INTERNAL_VIEW_CONFIG;
const value = module_65.get("KeyCommandsView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/KeyCommandsNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };