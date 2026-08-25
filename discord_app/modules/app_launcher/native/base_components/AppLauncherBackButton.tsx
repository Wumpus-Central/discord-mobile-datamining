// === Module 11716: AppLauncherBackButton ===

// Module 11716 (AppLauncherBackButton)
import noopAll from "noop" /* 19 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1501 */;
import IconButton from "IconButton" /* 7896 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherBackButton.tsx");

export default function AppLauncherBackButton(onPress) {
  let obj = createStandardNavigationFactories;
  const navigation = obj.useNavigation();
  const canGoBackResult = navigation.canGoBack();
  obj = { size: "sm", variant: "secondary-overlay", icon: importDefault(canGoBackResult ? 5381 : 5433), onPress: onPress.onPress, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 };
  const intl = tmp(1236).intl;
  const t = tmp(1236).t;
  obj[4] = intl.string(canGoBackResult ? t["13/7kX"] : t.cpT0Cq);
  return jsx(IconButton.IconButton, { size: "sm", variant: "secondary-overlay", icon: importDefault(canGoBackResult ? 5381 : 5433), onPress: onPress.onPress, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 });
};
export const BACK_BUTTON_SIZE = 32;