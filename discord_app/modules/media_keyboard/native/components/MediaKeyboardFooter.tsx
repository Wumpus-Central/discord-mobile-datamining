// === Module 10367: FOOTER_HEIGHT ===

// Module 10367 (FOOTER_HEIGHT)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4441 */;
import Button from "Button" /* 4880 */;
import _modDef10356 from "module_10356" /* 10356 */;
import registerAssetDefault from "registerAsset" /* 10368 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ View: c3, Image: c4, ActivityIndicator: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { container: null, label: null, buttonWrapper: null, loadingSpinner: null };
obj = { padding: ThemesDefault.space.PX_16, height: 280, alignItems: "center" };
obj[0] = obj;
obj[1] = { textAlign: "center", marginBottom: 16 };
createCacheKey = { marginBottom: ThemesDefault.space.PX_32, height: ThemesDefault.space.PX_48 };
obj[2] = createCacheKey;
obj[3] = { color: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST, margin: ThemesDefault.space.PX_16 };
let closure_8 = createCacheKey.createStyles(obj);
let obj2 = { color: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST, margin: ThemesDefault.space.PX_16 };
const memoResult = importAllResult.memo(function MediaKeyboardFooter(arg0) {
  ({ disabled, onViewAll } = arg0);
  const tmp = callback3();
  let obj = _modDef10356;
  if (obj.useHasReachedEnd()) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { variant: "text-sm/normal", style: null, children: null };
    obj[1] = tmp.label;
    const intl = getSystemLocale.intl;
    obj[2] = intl.string(getSystemLocale.t.mKSwAW);
    const items = [callback(Text.Text, obj), , ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.buttonWrapper;
    const obj2 = { variant: "primary", size: "sm", onPress: null, text: null, disabled: null };
    obj2[2] = onViewAll;
    const intl2 = getSystemLocale.intl;
    obj2[3] = intl2.string(getSystemLocale.t.ZT24In);
    obj2[4] = disabled;
    obj1[1] = callback(Button.Button, obj2);
    items[1] = callback(closure_3, obj1);
    const obj3 = { source: null };
    obj3[0] = registerAssetDefault;
    items[2] = callback(closure_4, obj3);
    obj[1] = items;
    let tmp6 = callback2(closure_3, obj);
  } else {
    const obj4 = { style: null, size: "large", color: null };
    obj4[0] = tmp.loadingSpinner;
    obj4[2] = tmp.loadingSpinner.color;
    tmp6 = callback(closure_5, obj4);
  }
  return tmp6;
});
const result = require("set").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardFooter.tsx");

export default memoResult;
export const FOOTER_HEIGHT = 280;