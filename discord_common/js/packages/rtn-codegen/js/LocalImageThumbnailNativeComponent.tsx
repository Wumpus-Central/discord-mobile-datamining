// discord_common/js/packages/rtn-codegen/js/LocalImageThumbnailNativeComponent.tsx
import set from "../../../../../_runtime/00002_set.js";
import setRuntimeConfigProvider from "../../../../../_runtime/00065_setRuntimeConfigProvider.js";

const obj = { uiViewClassName: "DCDLocalImageThumbnail", validAttributes: { localImageSource: true } };
const value = setRuntimeConfigProvider.get("DCDLocalImageThumbnail", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/LocalImageThumbnailNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;