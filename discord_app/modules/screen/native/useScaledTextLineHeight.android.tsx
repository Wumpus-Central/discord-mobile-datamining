// discord_app/modules/screen/native/useScaledTextLineHeight.android.tsx
import react from "../../../../_runtime/00576_react.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useFontScale from "useFontScale.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeFontModule.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const map = new Map();
function scaleLineHeight(arg0) {
  let value = map.get(arg0);
  if (null == value) {
    const obj2 = react_nativeDefault;
    const scaledHeightForText = obj2.getScaledHeightForText(arg0);
    const result = map.set(arg0, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
}
function scaleTextLineHeight(c15, fontScale) {
  const lineHeight = Text_Text.TextStyleSheet[c15].lineHeight;
  let value = map.get(lineHeight);
  if (null == value) {
    const obj2 = react_nativeDefault;
    const scaledHeightForText = obj2.getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = react;
      const cResult = obj.c(3);
      const obj2 = useFontScale;
      const fontScale = obj2.useFontScale();
      if (cResult[0] === fontScale) {
        let tmp5;
        if (cResult[1] === arg0) {
          tmp5 = cResult[2];
        }
        return tmp5;
      }
      const lineHeight = Text_Text.TextStyleSheet[arg0].lineHeight;
      let value = map.get(lineHeight);
      if (null == value) {
        const obj4 = react_nativeDefault;
        const scaledHeightForText = obj4.getScaledHeightForText(lineHeight);
        const result = map.set(lineHeight, scaledHeightForText);
        value = scaledHeightForText;
      }
      cResult[0] = fontScale;
      cResult[1] = arg0;
      cResult[2] = value;
      tmp5 = value;
    }
  : (arg0) => {
      const obj = useFontScale;
      const fontScale = obj.useFontScale();
      const lineHeight = Text_Text.TextStyleSheet[arg0].lineHeight;
      let value = map.get(lineHeight);
      if (null == value) {
        const obj3 = react_nativeDefault;
        const scaledHeightForText = obj3.getScaledHeightForText(lineHeight);
        const result = map.set(lineHeight, scaledHeightForText);
        value = scaledHeightForText;
      }
      return value;
    };
let result = size.fileFinishedImporting("modules/screen/native/useScaledTextLineHeight.android.tsx");

export { scaleLineHeight };
export { scaleTextLineHeight };
export const useScaledTextLineHeight = tmp3;
