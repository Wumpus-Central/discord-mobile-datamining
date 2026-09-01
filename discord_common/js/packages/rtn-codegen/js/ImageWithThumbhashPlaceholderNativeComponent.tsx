// discord_common/js/packages/rtn-codegen/js/ImageWithThumbhashPlaceholderNativeComponent.tsx
import set from "../../../../../_runtime/00002_set.js";
import setRuntimeConfigProvider from "../../../../../_runtime/00065_setRuntimeConfigProvider.js";

const obj = {
  uiViewClassName: "DCDImageWithThumbhashPlaceholderView",
  validAttributes: { uri: true, placeholder: true, placeholderVersion: true, alt: true },
};
const value = setRuntimeConfigProvider.get("DCDImageWithThumbhashPlaceholderView", () => obj);
const result = set.fileFinishedImporting(
  "../discord_common/js/packages/rtn-codegen/js/ImageWithThumbhashPlaceholderNativeComponent.tsx",
);

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
