// discord_app/design/utils/native.tsx
import getNodeText from "shared/getNodeText.tsx";
import mergeProps from "native/mergeProps.native.tsx";
import useFocus from "native/useFocus.native.tsx";
import themes from "shared/themes.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("design/utils/native.tsx");

export const getNodeText = getNodeText.getNodeText;
export const chainCallbacks = mergeProps.chainCallbacks;
export const mergeProps = mergeProps.mergeProps;
export const mergeRefs = mergeProps.mergeRefs;
export const useFocus = useFocus.useFocus;
export const isThemeLight = themes.isThemeLight;
export const isThemeDark = themes.isThemeDark;
