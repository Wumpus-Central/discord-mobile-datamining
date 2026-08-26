// === Module 10077: __INTERNAL_VIEW_CONFIG ===

// Module 10077 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { uiViewClassName: "APNGStickerView", validAttributes: { url: true } };
const value = setRuntimeConfigProvider.get("APNGStickerView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/APNGStickerNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;