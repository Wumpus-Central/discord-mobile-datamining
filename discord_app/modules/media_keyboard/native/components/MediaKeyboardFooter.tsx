// discord_app/modules/media_keyboard/native/components/MediaKeyboardFooter.tsx
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c3;
let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ View: c3, Image: c4, ActivityIndicator: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { container: null, label: null, buttonWrapper: null, loadingSpinner: null };
obj = { padding: require("Themes").space.PX_16, height: 280, alignItems: "center" };
obj[0] = obj;
obj[1] = { textAlign: "center", marginBottom: 16 };
createCacheKey = { marginBottom: require("Themes").space.PX_32, height: require("Themes").space.PX_48 };
obj[2] = createCacheKey;
obj[3] = { color: require("Themes").colors.BACKGROUND_SURFACE_HIGHEST, margin: require("Themes").space.PX_16 };
let closure_8 = createCacheKey.createStyles(obj);
let obj2 = { color: require("Themes").colors.BACKGROUND_SURFACE_HIGHEST, margin: require("Themes").space.PX_16 };
const memoResult = importAllResult.memo(function MediaKeyboardFooter(arg0) {
  let disabled;
  let onViewAll;
  ({ disabled, onViewAll } = arg0);
  const tmp = callback3();
  let obj = importDefault(9933);
  if (obj.useHasReachedEnd()) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { variant: "text-sm/normal", style: null, children: null };
    obj[1] = tmp.label;
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[2] = intl.string(require(1236) /* getSystemLocale */.t.mKSwAW);
    const items = [callback(require(4281) /* Text */.Text, obj), , ];
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.buttonWrapper;
    const obj2 = { variant: "primary", size: "sm", onPress: null, text: null, disabled: null };
    obj2[2] = onViewAll;
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj2[3] = intl2.string(require(1236) /* getSystemLocale */.t.ZT24In);
    obj2[4] = disabled;
    obj1[1] = callback(require(4695) /* Button */.Button, obj2);
    items[1] = callback(closure_3, obj1);
    const obj3 = { source: null };
    obj3[0] = importDefault(9944);
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
const result = require("jsxProd").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardFooter.tsx");

export default memoResult;
export const FOOTER_HEIGHT = 280;