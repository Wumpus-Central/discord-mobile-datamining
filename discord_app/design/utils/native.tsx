// discord_app/design/utils/native.tsx
import set from "../../../_runtime/00002_set.js";
import getNodeText from "shared/getNodeText.tsx";
import chainCallbacks from "native/mergeProps.native.tsx";
import useFocus from "native/useFocus.native.tsx";
import isThemeLight from "shared/themes.tsx";

const result = set.fileFinishedImporting("design/utils/native.tsx");

export const getNodeText = getNodeText.getNodeText;
export const chainCallbacks = chainCallbacks.chainCallbacks;
export const mergeProps = chainCallbacks.mergeProps;
export const mergeRefs = chainCallbacks.mergeRefs;
export const useFocus = useFocus.useFocus;
export const isThemeLight = isThemeLight.isThemeLight;
export const isThemeDark = isThemeLight.isThemeDark;
