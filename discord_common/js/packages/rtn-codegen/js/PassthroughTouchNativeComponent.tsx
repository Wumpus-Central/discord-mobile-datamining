// discord_common/js/packages/rtn-codegen/js/PassthroughTouchNativeComponent.tsx
import set from "../../../../../_runtime/00002_set.js";
import weakSet from "../../../../../_runtime/00106_weakSet.js";
import setRuntimeConfigProvider from "../../../../../_runtime/00065_setRuntimeConfigProvider.js";

let obj = { uiViewClassName: "PassthroughTouchView", directEventTypes: { topTouchDown: { registrationName: "onTouchDown" } }, validAttributes: null };
obj = {};
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onTouchDown: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("PassthroughTouchView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/PassthroughTouchNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;