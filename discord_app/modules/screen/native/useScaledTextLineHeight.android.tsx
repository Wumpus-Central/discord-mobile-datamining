// discord_app/modules/screen/native/useScaledTextLineHeight.android.tsx
import set from "set" /* 2 */;
import Text from "Text" /* 4734 */;
import getFontScale from "getFontScale" /* 4751 */;
import enforcingDefault from "enforcing" /* 9289 */;

const map = new Map();
let result = set.fileFinishedImporting("modules/screen/native/useScaledTextLineHeight.android.tsx");

export const scaleLineHeight = function scaleLineHeight(arg0, arg1) {
  let value = map.get(arg0);
  if (null == value) {
    const scaledHeightForText = enforcingDefault.getScaledHeightForText(arg0);
    const result = map.set(arg0, scaledHeightForText);
    value = scaledHeightForText;
    const obj2 = enforcingDefault;
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
    const obj2 = enforcingDefault;
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
    const obj3 = enforcingDefault;
  }
  return value;
};