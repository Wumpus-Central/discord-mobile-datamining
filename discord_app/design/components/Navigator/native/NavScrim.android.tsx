// === Module 5886: NavScrim ===

// Module 5886 (NavScrim)
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5541 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;
import importAllResult from "noop" /* 19 */;

({ View: obj1, StyleSheet } = get_ActivityIndicator);
let obj = { androidNavScrim: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.backgroundColor = ThemesDefault.colors.ANDROID_NAVIGATION_SCRIM_BACKGROUND;
obj.top = undefined;
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(() => {
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeCustomKeyboardHeight: false }).insets;
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
const result = require("set").fileFinishedImporting("design/components/Navigator/native/NavScrim.android.tsx");

export const NavScrim = memoResult;