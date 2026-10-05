// discord_app/modules/in_app_reports/native/components/Arrow.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import AssetRegistryDefault from "../../../../../_runtime/08289_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj2;
const jsx = Fragment.jsx;
let obj = { tintColor: obj2 };
obj2 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp4 = closure_4();
      if (cResult[0] !== tmp4.tintColor) {
        const Icon = native.Icon;
        const tmp8 = <Icon source={AssetRegistryDefault} size={native.Icon.Sizes.MEDIUM} style={tmp4.tintColor} />;
        cResult[0] = tmp4.tintColor;
        cResult[1] = tmp8;
        tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      const tmp = closure_4();
      const Icon = native.Icon;
      return <Icon source={AssetRegistryDefault} size={native.Icon.Sizes.MEDIUM} style={tmp.tintColor} />;
    };
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/Arrow.tsx");

export default tmp3;
