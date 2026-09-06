// discord_app/modules/expression_picker/native/categories/useExpressionPickerCategoriesPlaceholderConfig.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import FastestListPropsPlaceholder from "../../../fastest_list/props/FastestListPropsPlaceholder.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const CATEGORY_ICON_SIZE = fn(1074).CATEGORY_ICON_SIZE;
fn(4560);
let createStyles = { placeholder: null };
createStyles = { color: nativeDefault.colors.BACKGROUND_MOD_STRONG, opacity: 0.5 };
createStyles.placeholder = createStyles;
let closure_4 = createStyles.createStyles(createStyles);
let size = fn(2);
const result = size.fileFinishedImporting(
  "modules/expression_picker/native/categories/useExpressionPickerCategoriesPlaceholderConfig.tsx",
);

export default function useExpressionPickerCategoriesPlaceholderConfig() {
  const tmp = closure_4();
  closure_0 = tmp;
  const items = [tmp];
  return noop.useMemo(() => {
    const obj = { sectionItem: null };
    const size = {
      type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE,
      colorHex: closure_0.placeholder.color,
      opacity: closure_0.placeholder.opacity,
      shape: "circle",
      width: CATEGORY_ICON_SIZE,
      height: CATEGORY_ICON_SIZE,
    };
    obj.sectionItem = size;
    return obj;
  }, items);
}
