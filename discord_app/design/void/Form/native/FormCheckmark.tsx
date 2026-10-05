// discord_app/design/void/Form/native/FormCheckmark.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CheckmarkSmallIcon2 from "../../../components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let selected;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selected) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      selected = selected.selected;
      if (cResult[0] !== selected) {
        let tmp5 = null;
        if (selected) {
          const CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
          tmp5 = <CheckmarkSmallIcon color={nativeDefault.unsafe_rawColors.BRAND_500} />;
        }
        cResult[0] = selected;
        cResult[1] = tmp5;
        tmp4 = tmp5;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (selected) => {
      let tmp = null;
      if (selected.selected) {
        const CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
        tmp = <CheckmarkSmallIcon color={nativeDefault.unsafe_rawColors.BRAND_500} />;
      }
      return tmp;
    };
const result = size.fileFinishedImporting("design/void/Form/native/FormCheckmark.tsx");

export default tmp3;
