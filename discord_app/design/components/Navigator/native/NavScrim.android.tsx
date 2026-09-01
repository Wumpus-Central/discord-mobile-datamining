// discord_app/design/components/Navigator/native/NavScrim.android.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

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
    const items = [tmp.androidNavScrim];
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
