// discord_app/modules/expression_picker/native/categories/ExpressionPickerCategoriesBackdrop.tsx
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { set } from "../../../../utils/PlatformUtils.tsx";
import { VisualEffectViewThemed } from "../../../visual_effect_view/native/VisualEffectViewThemed.tsx";

let StyleSheet;
let c3;
const require = arg1;
({ StyleSheet, View: c3 } = get_ActivityIndicator);
let obj = { backdrop: null, backdropAndroid: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.borderTopWidth = StyleSheet.hairlineWidth;
obj.borderTopColor = require("Themes").colors.BACKGROUND_BASE_LOWEST;
obj[0] = obj;
createCacheKey = { backgroundColor: require("Themes").colors.PROFILE_GRADIENT_NOTE_BACKGROUND, height: require("ME").EXPRESSION_FOOTER_HEIGHT, bottom: "e" };
obj[1] = createCacheKey;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function EmojiPickerCategoriesBackdrop() {
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
    const obj1 = { style: null };
    obj1[0] = tmp.backdrop;
    obj[1] = tmp3(VisualEffectViewThemed, obj1);
    tmp3Result = tmp3(tmp4, obj);
  }
  return tmp3Result;
});
const result = require("ME").fileFinishedImporting("modules/expression_picker/native/categories/ExpressionPickerCategoriesBackdrop.tsx");

export default memoResult;