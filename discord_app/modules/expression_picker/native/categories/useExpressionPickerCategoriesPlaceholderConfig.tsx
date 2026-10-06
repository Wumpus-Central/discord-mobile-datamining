// === Module 9980: useExpressionPickerCategoriesPlaceholderConfig ===

// Module 9980 (useExpressionPickerCategoriesPlaceholderConfig)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import FastestListPropsPlaceholder from "FastestListPropsPlaceholder" /* 6566 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj2;
const CATEGORY_ICON_SIZE = Constants.CATEGORY_ICON_SIZE;
let obj = { placeholder: obj2 };
obj2 = { color: nativeDefault.colors.BACKGROUND_MOD_STRONG, opacity: 0.5 };
let closure_4 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
  size = { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, colorHex: tmp4.placeholder.color, opacity: tmp4.placeholder.opacity, shape: "circle", width: CATEGORY_ICON_SIZE, height: CATEGORY_ICON_SIZE };
  cResult[0] = tmp4.placeholder.color;
  cResult[1] = tmp4.placeholder.opacity;
  cResult[2] = obj2;
  tmp5 = obj2;
}) : (() => {
  const tmp = closure_4();
  let closure_0 = tmp;
  const items = [tmp];
  return react.useMemo(() => {
    const obj = { sectionItem: size };
    size = { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, colorHex: closure_0.placeholder.color, opacity: closure_0.placeholder.opacity, shape: "circle", width: CATEGORY_ICON_SIZE, height: CATEGORY_ICON_SIZE };
    return obj;
  }, items);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/expression_picker/native/categories/useExpressionPickerCategoriesPlaceholderConfig.tsx");

export default tmp2;