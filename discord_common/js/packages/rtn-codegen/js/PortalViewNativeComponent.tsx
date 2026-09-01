// discord_common/js/packages/rtn-codegen/js/PortalViewNativeComponent.tsx
import set from "../../../../../_runtime/00002_set.js";
import weakSet from "../../../../../_runtime/00106_weakSet.js";
import setRuntimeConfigProvider from "../../../../../_runtime/00065_setRuntimeConfigProvider.js";

let obj = {
  uiViewClassName: "DCDPortalView",
  directEventTypes: { topPortalViewLoaded: { registrationName: "onPortalViewLoaded" } },
  validAttributes: null,
};
obj = { portal: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onPortalViewLoaded: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("DCDPortalView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/PortalViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
