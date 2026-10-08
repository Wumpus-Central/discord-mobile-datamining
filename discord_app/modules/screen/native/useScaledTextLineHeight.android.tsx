// discord_app/modules/screen/native/useScaledTextLineHeight.android.tsx
import c from "../../../../_runtime/00576_c.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useFontScale from "useFontScale.tsx";
import NativeFontModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeFontModule.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
export const useScaledTextLineHeight = ReactCompilerGating.isReactCompilerEnabled()
  ? function useScaledTextLineHeight(arg0) {
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
    }
  : function useScaledTextLineHeight(arg0) {
      const fontScale = useFontScale.useFontScale();
      const lineHeight = Text_Text.TextStyleSheet[arg0].lineHeight;
      value = map.get(lineHeight);
      if (null == value) {
        const scaledHeightForText = NativeFontModuleDefault.getScaledHeightForText(lineHeight);
        const result = map.set(lineHeight, scaledHeightForText);
        value = scaledHeightForText;
      }
      return value;
    };
