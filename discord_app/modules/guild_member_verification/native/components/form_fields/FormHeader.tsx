// discord_app/modules/guild_member_verification/native/components/form_fields/FormHeader.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../../discord_common/js/shared/Constants.tsx";
import native from "../../../../../design/void/native.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import TextStyles from "../../../../rebrand/native/TextStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let children;

let obj2;
let closure_2 = ["children"];
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { fieldHeader: obj2 };
createStyles = createStyles.createStyles;
const DISPLAY_EXTRABOLD = Fonts.DISPLAY_EXTRABOLD;
obj2 = { paddingBottom: 8 };
let merged = Object.assign(TextStyles(DISPLAY_EXTRABOLD, nativeDefault.colors.TEXT_SUBTLE, 12, { uppercase: true }));
let closure_5 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(10);
      if (cResult[0] !== children) {
        children = children.children;
        const tmp8 = _objectWithoutProperties(children, closure_2);
        cResult[0] = children;
        cResult[1] = children;
        cResult[2] = tmp8;
        tmp5 = tmp8;
        tmp4 = children;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const tmp9 = closure_5();
      if (cResult[3] === tmp5.style) {
        let tmp10;
        if (cResult[4] === tmp9.fieldHeader) {
          tmp10 = cResult[5];
        }
        if (cResult[6] === tmp4) {
          if (cResult[7] === tmp5) {
            let tmp11;
            if (cResult[8] === tmp10) {
              tmp11 = cResult[9];
            }
            return tmp11;
          }
        }
        const LegacyText = native.LegacyText;
        const merged = Object.assign(tmp5);
        const tmp16 = <LegacyText style={tmp10}>{tmp4}</LegacyText>;
        cResult[6] = tmp4;
        cResult[7] = tmp5;
        cResult[8] = tmp10;
        cResult[9] = tmp16;
        tmp11 = tmp16;
      }
      const items = [tmp9.fieldHeader, tmp5.style];
      cResult[3] = tmp5.style;
      cResult[4] = tmp9.fieldHeader;
      cResult[5] = items;
      tmp10 = items;
    }
  : (children) => {
      children = children.children;
      const merged = Object.assign(children, Object.assign({ children: 0 }));
      const tmp2 = closure_5();
      const LegacyText = native.LegacyText;
      const merged1 = Object.assign(merged);
      const items = [tmp2.fieldHeader, merged.style];
      return <LegacyText style={items}>{children}</LegacyText>;
    };
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/form_fields/FormHeader.tsx",
);

export default tmp6;
