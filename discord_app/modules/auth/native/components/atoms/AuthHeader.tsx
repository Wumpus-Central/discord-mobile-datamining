// discord_app/modules/auth/native/components/atoms/AuthHeader.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../Constants.tsx";
import native from "../../../../../design/void/native.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import TextStyles from "../../../../rebrand/native/TextStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let obj2;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { header: obj2 };
createStyles = createStyles.createStyles;
obj2 = { textAlign: "center" };
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
let closure_3 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let style;
      const obj = react2;
      const cResult = obj.c(6);
      ({ children, style } = arg0);
      const tmp4 = closure_3();
      if (cResult[0] === style) {
        let tmp5;
        if (cResult[1] === tmp4.header) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === children) {
          let tmp6;
          if (cResult[4] === tmp5) {
            tmp6 = cResult[5];
          }
          return tmp6;
        }
        const tmp8 = jsx(native.LegacyText, { style: tmp5, accessibilityRole: "header", children });
        cResult[3] = children;
        cResult[4] = tmp5;
        cResult[5] = tmp8;
        tmp6 = tmp8;
      }
      const items = [tmp4.header, style];
      cResult[0] = style;
      cResult[1] = tmp4.header;
      cResult[2] = items;
      tmp5 = items;
    }
  : (arg0) => {
      let children;
      let style;
      ({ children, style } = arg0);
      const items = [closure_3().header, style];
      closure_3();
      return jsx(native.LegacyText, { style: items, accessibilityRole: "header", children });
    };
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/AuthHeader.tsx");

export default tmp6;
