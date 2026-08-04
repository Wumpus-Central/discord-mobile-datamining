import { YOU_BAR_BUTTON_ICON_SIZE } from "CONNECTION_BANNER_HEIGHT";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

const require = arg1;
let obj = { icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, badge: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
obj[1] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function YouBarICYMIButton(hasNameplate) {
  hasNameplate = hasNameplate.hasNameplate;
  const tmp = callback();
  let obj = { hasNameplate, icon: null, hasBadge: null, badgeStyle: null, onPress: null, accessibilityLabel: null };
  obj = { size: "custom", style: tmp.icon, color: null };
  let str;
  if (hasNameplate) {
    str = "white";
  }
  obj[2] = str;
  obj[1] = jsx(require(12198) /* FlashIcon */.FlashIcon, { size: "custom", style: tmp.icon, color: null });
  obj[2] = importDefault(15380)().showDot;
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
  obj[5] = intl.string(require(1236) /* getSystemLocale */.t["jnXV/V"]);
  return jsx(importDefault(15381), { size: "custom", style: tmp.icon, color: null });
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarICYMIButton.tsx");

export default memoResult;