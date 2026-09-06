// discord_app/modules/screen/native/useScaledTextLineHeight.android.tsx
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useFontScale from "useFontScale.tsx";
import NativeFontModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeFontModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const map = new Map();
let result = size.fileFinishedImporting("modules/screen/native/useScaledTextLineHeight.android.tsx");

export const scaleLineHeight = function scaleLineHeight(arg0) {
  value = map.get(arg0);
  if (null == value) {
    const scaledHeightForText = NativeFontModuleDefault.getScaledHeightForText(arg0);
    const result = map.set(arg0, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
};
export const scaleTextLineHeight = function scaleTextLineHeight(c10, fontScale) {
  const lineHeight = Text_Text.TextStyleSheet[c10].lineHeight;
  value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = NativeFontModuleDefault.getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
};
export const useScaledTextLineHeight = function useScaledTextLineHeight(beginSearch) {
  const fontScale = useFontScale.useFontScale();
  const lineHeight = Text_Text.TextStyleSheet[beginSearch].lineHeight;
  value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = NativeFontModuleDefault.getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
};
