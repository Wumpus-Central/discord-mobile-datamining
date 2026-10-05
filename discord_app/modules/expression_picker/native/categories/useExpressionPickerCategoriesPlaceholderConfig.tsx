// discord_app/modules/expression_picker/native/categories/useExpressionPickerCategoriesPlaceholderConfig.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import FastestListPropsPlaceholder from "../../../fastest_list/props/FastestListPropsPlaceholder.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let obj2;
const CATEGORY_ICON_SIZE = Constants.CATEGORY_ICON_SIZE;
let obj = { placeholder: obj2 };
obj2 = { color: nativeDefault.colors.BACKGROUND_MOD_STRONG, opacity: 0.5 };
let closure_4 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = react2;
      const cResult = obj.c(3);
      const tmp4 = closure_4();
      if (cResult[0] === tmp4.placeholder.color) {
        let tmp5;
        if (cResult[1] === tmp4.placeholder.opacity) {
          tmp5 = cResult[2];
        }
        return tmp5;
      }
      const obj2 = { sectionItem: size };
      size = {
        type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE,
        colorHex: tmp4.placeholder.color,
        opacity: tmp4.placeholder.opacity,
        shape: "circle",
        width: CATEGORY_ICON_SIZE,
        height: CATEGORY_ICON_SIZE,
      };
      cResult[0] = tmp4.placeholder.color;
      cResult[1] = tmp4.placeholder.opacity;
      cResult[2] = obj2;
      tmp5 = obj2;
    }
  : () => {
      const tmp = closure_4();
      let closure_0 = tmp;
      const items = [tmp];
      return react.useMemo(() => {
        const obj = { sectionItem: size };
        size = {
          type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE,
          colorHex: closure_0.placeholder.color,
          opacity: closure_0.placeholder.opacity,
          shape: "circle",
          width: CATEGORY_ICON_SIZE,
          height: CATEGORY_ICON_SIZE,
        };
        return obj;
      }, items);
    };
let size = size_mod;
const result = size.fileFinishedImporting(
  "modules/expression_picker/native/categories/useExpressionPickerCategoriesPlaceholderConfig.tsx",
);

export default tmp2;
