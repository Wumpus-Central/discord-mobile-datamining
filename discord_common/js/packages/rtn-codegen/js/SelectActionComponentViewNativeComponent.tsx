// discord_common/js/packages/rtn-codegen/js/SelectActionComponentViewNativeComponent.tsx
import set from "../../../../../_runtime/00002_set.js";
import weakSet from "../../../../../_runtime/00106_weakSet.js";
import setRuntimeConfigProvider from "../../../../../_runtime/00065_setRuntimeConfigProvider.js";

let obj = {
  uiViewClassName: "SelectActionComponentView",
  directEventTypes: { topTap: { registrationName: "onTap" } },
  validAttributes: null,
};
obj = { model: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onTap: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("SelectActionComponentView", () => obj);
const result = set.fileFinishedImporting(
  "../discord_common/js/packages/rtn-codegen/js/SelectActionComponentViewNativeComponent.tsx",
);

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
