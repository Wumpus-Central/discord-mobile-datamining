// === Module 9288: map ===

// Module 9288 (map)
import obj132 from "obj132" /* 2 */;
import Text from "Text" /* 4734 */;
import getFontScale from "getFontScale" /* 4751 */;
import enforcingDefault from "enforcing" /* 9289 */;

const map = new Map();
let result = obj132.fileFinishedImporting("modules/screen/native/useScaledTextLineHeight.android.tsx");

export const scaleLineHeight = function scaleLineHeight(arg0, arg1) {
  let value = map.get(arg0);
  if (null == value) {
    const scaledHeightForText = enforcingDefault.getScaledHeightForText(arg0);
    const result = map.set(arg0, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
};
export const scaleTextLineHeight = function scaleTextLineHeight(c10, fontScale) {
  const lineHeight = Text.TextStyleSheet[c10].lineHeight;
  let value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = enforcingDefault.getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
};
export const useScaledTextLineHeight = function useScaledTextLineHeight(c3) {
  const fontScale = getFontScale.useFontScale();
  const lineHeight = Text.TextStyleSheet[c3].lineHeight;
  let value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = enforcingDefault.getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
};