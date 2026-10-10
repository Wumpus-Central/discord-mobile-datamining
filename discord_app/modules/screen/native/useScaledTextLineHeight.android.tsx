// === Module 10514: useScaledTextLineHeight ===

// Module 10514 (useScaledTextLineHeight)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5088 */;
import useFontScale from "useFontScale" /* 5386 */;
import NativeFontModuleDefault from "NativeFontModule" /* 10515 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const map = new Map();
function scaleLineHeight(arg0) {
  value = map.get(arg0);
  if (null == value) {
    const scaledHeightForText = NativeFontModuleDefault.getScaledHeightForText(arg0);
    const result = map.set(arg0, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
}
function scaleTextLineHeight(c15, fontScale) {
  const lineHeight = Text_Text.TextStyleSheet[c15].lineHeight;
  value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = NativeFontModuleDefault.getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
}
let result = size.fileFinishedImporting("modules/screen/native/useScaledTextLineHeight.android.tsx");

export { scaleLineHeight };
export { scaleTextLineHeight };
export const useScaledTextLineHeight = ReactCompilerGating.isReactCompilerEnabled() ? (function useScaledTextLineHeight(arg0) {
  const cResult = c.c(3);
  const fontScale = useFontScale.useFontScale();
  if (cResult[0] === fontScale) {
    if (cResult[1] === arg0) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const lineHeight = Text_Text.TextStyleSheet[arg0].lineHeight;
  value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = NativeFontModuleDefault.getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
  }
  cResult[0] = fontScale;
  cResult[1] = arg0;
  cResult[2] = value;
  tmp5 = value;
}) : (function useScaledTextLineHeight(arg0) {
  const fontScale = useFontScale.useFontScale();
  const lineHeight = Text_Text.TextStyleSheet[arg0].lineHeight;
  value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = NativeFontModuleDefault.getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
});