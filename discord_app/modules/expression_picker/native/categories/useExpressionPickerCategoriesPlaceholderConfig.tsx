// === Module 9437: useExpressionPickerCategoriesPlaceholderConfig ===

// Module 9437 (useExpressionPickerCategoriesPlaceholderConfig)
import ThemesDefault from "Themes" /* 712 */;
import closure_2 from "noop" /* 19 */;
import { CATEGORY_ICON_SIZE } from "ME" /* 676 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
createCacheKey = { placeholder: null };
createCacheKey = { color: ThemesDefault.colors.BACKGROUND_MOD_STRONG, opacity: 0.5 };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/expression_picker/native/categories/useExpressionPickerCategoriesPlaceholderConfig.tsx");

export default function useExpressionPickerCategoriesPlaceholderConfig() {
  const tmp = callback();
  closure_0 = tmp;
  const items = [tmp];
  return React.useMemo(() => {
    let obj = { sectionItem: null };
    obj = { type: lib(closure_1_1[4]).FastestListPropsPlaceholderType.SHAPE, colorHex: lib.placeholder.color, opacity: lib.placeholder.opacity, shape: "circle", width: closure_1_3, height: closure_1_3 };
    obj[0] = obj;
    return obj;
  }, items);
};