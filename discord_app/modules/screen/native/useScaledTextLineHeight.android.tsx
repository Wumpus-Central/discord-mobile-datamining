// discord_app/modules/screen/native/useScaledTextLineHeight.android.tsx
const map = new Map();
let result = require("getFontScale").fileFinishedImporting("modules/screen/native/useScaledTextLineHeight.android.tsx");

export const scaleLineHeight = function scaleLineHeight(arg0, arg1) {
  let value = map.get(arg0);
  if (null == value) {
    const scaledHeightForText = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeFontModule.tsx").getScaledHeightForText(arg0);
    const result = map.set(arg0, scaledHeightForText);
    value = scaledHeightForText;
    const obj2 = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeFontModule.tsx");
  }
  return value;
};
export const scaleTextLineHeight = function scaleTextLineHeight(c7, fontScale) {
  const lineHeight = require("../../../design/components/Text/native/Text.tsx") /* Text */.TextStyleSheet[c7].lineHeight;
  let value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeFontModule.tsx").getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
    const obj2 = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeFontModule.tsx");
  }
  return value;
};
export const useScaledTextLineHeight = function useScaledTextLineHeight(c3) {
  const fontScale = require("useFontScale.tsx") /* getFontScale */.useFontScale();
  const lineHeight = require("../../../design/components/Text/native/Text.tsx") /* Text */.TextStyleSheet[c3].lineHeight;
  let value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeFontModule.tsx").getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
    const obj3 = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeFontModule.tsx");
  }
  return value;
};