// discord_app/modules/expression_picker/native/categories/useExpressionPickerCategoriesPlaceholderConfig.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { CATEGORY_ICON_SIZE } from "../../../../Constants.tsx";
import "createCacheKey";

const require = fn;
const createCacheKey = { color: ThemesDefault.colors.BACKGROUND_MOD_STRONG, opacity: 0.5 };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/expression_picker/native/categories/useExpressionPickerCategoriesPlaceholderConfig.tsx");

export default function useExpressionPickerCategoriesPlaceholderConfig() {
  const tmp = callback();
  closure_0 = tmp;
  const items = [tmp];
  return React.useMemo(() => {
    const obj = { type: lib(dependencyMap[4]).FastestListPropsPlaceholderType.SHAPE, colorHex: lib.placeholder.color, opacity: lib.placeholder.opacity, shape: "circle", width: CATEGORY_ICON_SIZE, height: CATEGORY_ICON_SIZE };
    obj[0] = obj;
    return obj;
  }, items);
};