// === Module 9476: ? ===

// Module 9476
import set from "set" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import _modDef9023 from "module_9023" /* 9023 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ StyleSheet, View: c3 } = get_ActivityIndicator);
let obj = { backdrop: null, backdropAndroid: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.borderTopWidth = StyleSheet.hairlineWidth;
obj.borderTopColor = ThemesDefault.colors.BACKGROUND_BASE_LOWEST;
obj[0] = obj;
createCacheKey = { backgroundColor: ThemesDefault.colors.PROFILE_GRADIENT_NOTE_BACKGROUND, height: require("ME").EXPRESSION_FOOTER_HEIGHT, bottom: "Array" };
obj[1] = createCacheKey;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function EmojiPickerCategoriesBackdrop() {
  const tmp = callback();
  let obj = set;
  if (obj.isAndroid()) {
    obj = { style: null };
    const items = [, ];
    ({ backdrop: arr[0], backdropAndroid: arr[1] } = tmp);
    obj[0] = items;
    let tmp3Result = tmp3(tmp4, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.backdrop;
    obj1 = { style: null };
    obj1[0] = tmp.backdrop;
    obj[1] = tmp3(_modDef9023, obj1);
    tmp3Result = tmp3(tmp4, obj);
  }
  return tmp3Result;
});
const result = require("set").fileFinishedImporting("modules/expression_picker/native/categories/ExpressionPickerCategoriesBackdrop.tsx");

export default memoResult;