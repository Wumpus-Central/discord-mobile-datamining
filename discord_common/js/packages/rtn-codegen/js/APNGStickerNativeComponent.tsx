// discord_common/js/packages/rtn-codegen/js/APNGStickerNativeComponent.tsx
import set from "../../../../../_runtime/00002_set.js";
import setRuntimeConfigProvider from "../../../../../_runtime/00065_setRuntimeConfigProvider.js";

const obj = { uiViewClassName: "APNGStickerView", validAttributes: { url: true } };
const value = setRuntimeConfigProvider.get("APNGStickerView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/APNGStickerNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;