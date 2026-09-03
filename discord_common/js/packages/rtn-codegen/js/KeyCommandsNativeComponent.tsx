// === Module 14469: __INTERNAL_VIEW_CONFIG ===

// Module 14469 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

let obj = { uiViewClassName: "KeyCommandsView", directEventTypes: { topKeyCommand: { registrationName: "onKeyCommand" } }, validAttributes: null };
obj = { keyCommands: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onKeyCommand: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("KeyCommandsView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/KeyCommandsNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;