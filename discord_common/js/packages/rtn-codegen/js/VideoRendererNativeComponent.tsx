// discord_common/js/packages/rtn-codegen/js/VideoRendererNativeComponent.tsx
import set from "../../../../../_runtime/00002_set.js";
import weakSet from "../../../../../_runtime/00106_weakSet.js";
import setRuntimeConfigProvider from "../../../../../_runtime/00065_setRuntimeConfigProvider.js";

let obj = {
  uiViewClassName: "DCDVideoRenderer",
  directEventTypes: { topSize: { registrationName: "onSize" }, topReady: { registrationName: "onReady" } },
  validAttributes: null,
};
obj = { useSurfaceDirectRenderer: true, streamId: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onSize: true, onReady: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("DCDVideoRenderer", () => obj);
const result = set.fileFinishedImporting(
  "../discord_common/js/packages/rtn-codegen/js/VideoRendererNativeComponent.tsx",
);

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
