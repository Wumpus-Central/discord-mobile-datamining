// discord_common/js/packages/rtn-codegen/js/VideoRendererNativeComponent.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import weakSet from "../../../../../_runtime/00106_weakSet.js";
import setRuntimeConfigProvider from "../../../../../_runtime/00065_setRuntimeConfigProvider.js";

const obj = { useSurfaceDirectRenderer: true, streamId: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onSize: true, onReady: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("DCDVideoRenderer", () => obj);
const result = obj132.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/VideoRendererNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;