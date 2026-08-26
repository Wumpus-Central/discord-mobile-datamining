// === Module 15826: ? ===

// Module 15826
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import FlashIcon from "FlashIcon" /* 12564 */;
import useICYMITabBadgeDefault from "useICYMITabBadge" /* 15827 */;
import YouBarButtonIconDefault from "YouBarButtonIcon" /* 15828 */;
import { YOU_BAR_BUTTON_ICON_SIZE } from "CONNECTION_BANNER_HEIGHT" /* 14621 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let obj = { icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, badge: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
obj[1] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function YouBarICYMIButton(hasNameplate) {
  hasNameplate = hasNameplate.hasNameplate;
  const tmp = callback();
  let obj = { hasNameplate, icon: null, hasBadge: null, badgeStyle: null, onPress: null, accessibilityLabel: null };
  obj = { size: "custom", style: tmp.icon, color: null };
  let str;
  if (hasNameplate) {
    str = "white";
  }
  obj[2] = str;
  obj[1] = jsx(FlashIcon.FlashIcon, { size: "custom", style: tmp.icon, color: null });
  obj[2] = useICYMITabBadgeDefault().showDot;
  obj[3] = tmp.badge;
  obj[4] = function onPress() {
    let obj = callback(table[8]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      obj = { screen: "icymi-screen", params: null };
      obj[1] = { inNestedNavigator: true };
      rootNavigationRef.navigate("icymi", obj);
    }
  };
  const intl = tmp5(1236).intl;
  obj[5] = intl.string(getSystemLocale.t["jnXV/V"]);
  return jsx(YouBarButtonIconDefault, { size: "custom", style: tmp.icon, color: null });
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarICYMIButton.tsx");

export default memoResult;