// discord_common/js/packages/rtn-codegen/js/TTIMeasurementNativeComponent.tsx
import set from "../../../../../_runtime/00002_set.js";
import weakSet from "../../../../../_runtime/00106_weakSet.js";
import setRuntimeConfigProvider from "../../../../../_runtime/00065_setRuntimeConfigProvider.js";

let obj = {
  uiViewClassName: "DCDTTIMeasurementView",
  directEventTypes: { topMeasurement: { registrationName: "onMeasurement" } },
  validAttributes: null,
};
obj = {};
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onMeasurement: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("DCDTTIMeasurementView", () => obj);
const result = set.fileFinishedImporting(
  "../discord_common/js/packages/rtn-codegen/js/TTIMeasurementNativeComponent.tsx",
);

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
