// discord_app/modules/expression_picker/native/categories/ExpressionPickerCategoriesBackdrop.tsx
import obj132 from "../../../../utils/PlatformUtils.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef8986 from "../../../visual_effect_view/native/VisualEffectViewThemed.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import importAllResult from "../../../../../_runtime/00019_noop.js";

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