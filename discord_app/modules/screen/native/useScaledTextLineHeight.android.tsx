// === Module 5885: useScaledTextLineHeight ===

// Module 5885 (useScaledTextLineHeight)
import Text_Text from "Text/Text" /* 5753 */;
import useFontScale from "useFontScale" /* 5768 */;
import NativeFontModuleDefault from "NativeFontModule" /* 5886 */;
import size from "module_2" /* 2 */;

const map = new Map();
let result = size.fileFinishedImporting("modules/screen/native/useScaledTextLineHeight.android.tsx");

export function scaleLineHeight(fontSize) {
  value = map.get(fontSize);
  if (null == value) {
    const scaledHeightForText = NativeFontModuleDefault.getScaledHeightForText(fontSize);
    const result = map.set(fontSize, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
}
export function scaleTextLineHeight(c10, fontScale) {
  const lineHeight = Text_Text.TextStyleSheet[c10].lineHeight;
  value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = NativeFontModuleDefault.getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
}
export function useScaledTextLineHeight(c7) {
  const fontScale = useFontScale.useFontScale();
  const lineHeight = Text_Text.TextStyleSheet[c7].lineHeight;
  value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = NativeFontModuleDefault.getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
}