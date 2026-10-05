// discord_app/modules/search/native/components/HighlightText.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import native from "../../../../design/void/native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ColorUtils_mod from "../../../../utils/ColorUtils.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let children;

let ColorUtils;
let obj2;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { text: obj2 };
createStyles = createStyles.createStyles;
obj2 = {
  fontFamily: Fonts.PRIMARY_BOLD,
  backgroundColor: ColorUtils.hexOpacityToRgba(nativeDefault.unsafe_rawColors.YELLOW_300, 0.3),
  color: nativeDefault.colors.TEXT_STRONG,
};
ColorUtils = ColorUtils_mod;
let closure_3 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const obj = react2;
      const cResult = obj.c(3);
      children = children.children;
      const tmp4 = closure_3();
      if (cResult[0] === children) {
        let tmp5;
        if (cResult[1] === tmp4.text) {
          tmp5 = cResult[2];
        }
        return tmp5;
      }
      const tmp6 = jsx(native.LegacyText, { style: tmp4.text, children });
      cResult[0] = children;
      cResult[1] = tmp4.text;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (children) => {
      children = children.children;
      return jsx(native.LegacyText, { style: closure_3().text, children });
    };
const result = size.fileFinishedImporting("modules/search/native/components/HighlightText.tsx");

export default tmp4;
