// === Module 9439: ? ===

// Module 9439
import obj132 from "obj132" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import _modDef8986 from "module_8986" /* 8986 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";
import importAllResult from "noop" /* 19 */;

require = fn;
({ StyleSheet, View: c3 } = get_ActivityIndicator);
let obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.borderTopWidth = StyleSheet.hairlineWidth;
obj.borderTopColor = ThemesDefault.colors.BACKGROUND_BASE_LOWEST;
obj[0] = obj;
const createCacheKey = { backgroundColor: ThemesDefault.colors.PROFILE_GRADIENT_NOTE_BACKGROUND, height: require("ME").EXPRESSION_FOOTER_HEIGHT, bottom: "Array" };
obj[1] = createCacheKey;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function EmojiPickerCategoriesBackdrop() {
  const tmp = callback();
  let obj = obj132;
  if (obj.isAndroid()) {
    obj = { style: null };
    const items = [, ];
    ({ backdrop: arr[0], backdropAndroid: arr[1] } = tmp);
    obj[0] = items;
    let tmp3Result = <closure_3 style={null} />;
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.backdrop;
    obj1 = { style: null };
    obj1[0] = tmp.backdrop;
    obj[1] = jsx(_modDef8986, { style: null });
    tmp3Result = <closure_3 style={null}>{null}</closure_3>;
  }
  return tmp3Result;
});
const result = require("obj132").fileFinishedImporting("modules/expression_picker/native/categories/ExpressionPickerCategoriesBackdrop.tsx");

export default memoResult;