// === Module 5505: NavScrim ===

// Module 5505 (NavScrim)
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let StyleSheet;
let obj1;
({ View: obj1, StyleSheet } = get_ActivityIndicator);
let obj = { androidNavScrim: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.backgroundColor = require("Themes").colors.ANDROID_NAVIGATION_SCRIM_BACKGROUND;
obj.top = undefined;
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(() => {
  const insets = importDefault(5219)({ includeCustomKeyboardHeight: false }).insets;
  let tmp2 = null;
  if (0 !== insets.bottom) {
    let obj = { style: null, pointerEvents: "none" };
    const items = [tmp.androidNavScrim, ];
    obj = { height: null };
    obj[0] = insets.bottom;
    items[1] = obj;
    obj[0] = items;
    tmp2 = <closure_2 height={null} />;
  }
  return tmp2;
});
const result = require("jsxProd").fileFinishedImporting("design/components/Navigator/native/NavScrim.android.tsx");

export const NavScrim = memoResult;