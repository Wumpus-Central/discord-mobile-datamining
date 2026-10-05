// discord_app/modules/guild_member_verification/native/components/form_fields/FormSeparator.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { separator: obj2 };
obj2 = { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, marginVertical: 12 };
let closure_4 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (style) => {
      const obj = react2;
      const cResult = obj.c(6);
      const tmp2 = closure_4();
      if (cResult[0] === style.style) {
        let tmp3;
        if (cResult[1] === tmp2.separator) {
          tmp3 = cResult[2];
        }
        if (cResult[3] === style) {
          let tmp4;
          if (cResult[4] === tmp3) {
            tmp4 = cResult[5];
          }
          return tmp4;
        }
        const merged = Object.assign(style);
        const tmp10 = <View style={tmp3} />;
        cResult[3] = style;
        cResult[4] = tmp3;
        cResult[5] = tmp10;
        tmp4 = tmp10;
      }
      const items = [tmp2.separator, style.style];
      cResult[0] = style.style;
      cResult[1] = tmp2.separator;
      cResult[2] = items;
      tmp3 = items;
    }
  : (style) => {
      const tmp = closure_4();
      const merged = Object.assign(style);
      const items = [tmp.separator, style.style];
      return <View style={items} />;
    };
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/form_fields/FormSeparator.tsx",
);

export default tmp3;
