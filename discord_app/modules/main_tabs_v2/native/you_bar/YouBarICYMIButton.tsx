// discord_app/modules/main_tabs_v2/native/you_bar/YouBarICYMIButton.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import FlashIcon from "../../../../design/components/Icon/native/redesign/generated/FlashIcon.tsx";
import useICYMITabBadgeDefault from "../../../icymi/useICYMITabBadge.tsx";
import YouBarButtonIconDefault from "YouBarButton.tsx";
import { YOU_BAR_BUTTON_ICON_SIZE } from "YouBarConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

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
  const intl = tmp5(1114).intl;
  obj[5] = intl.string(getSystemLocale.t["jnXV/V"]);
  return jsx(YouBarButtonIconDefault, { size: "custom", style: tmp.icon, color: null });
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarICYMIButton.tsx");

export default memoResult;
