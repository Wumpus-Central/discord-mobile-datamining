// discord_app/design/utils/native.tsx
import getNodeText from "shared/getNodeText.tsx";
import mergeProps from "native/mergeProps.native.tsx";
import useFocus from "native/useFocus.native.tsx";
import themes from "shared/themes.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("design/utils/native.tsx");
const getNodeText_export = getNodeText.getNodeText;
const mergeProps_export = mergeProps.mergeProps;
const useFocus_export = useFocus.useFocus;

export { getNodeText_export as getNodeText };
export const chainCallbacks = mergeProps.chainCallbacks;
export { mergeProps_export as mergeProps };
export const mergeRefs = mergeProps.mergeRefs;
export { useFocus_export as useFocus };
export const isThemeLight = themes.isThemeLight;
export const isThemeDark = themes.isThemeDark;
