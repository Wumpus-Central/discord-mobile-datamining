// discord_app/modules/app_launcher/native/base_components/AppLauncherBackButton.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import createStandardNavigationFactories from "../../../../../_runtime/01500_createStandardNavigationFactories.js";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherBackButton.tsx");

export default function AppLauncherBackButton(onPress) {
  let obj = createStandardNavigationFactories;
  const navigation = obj.useNavigation();
  const canGoBackResult = navigation.canGoBack();
  obj = { size: "sm", variant: "secondary-overlay", icon: importDefault(canGoBackResult ? 5468 : 5520), onPress: onPress.onPress, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 };
  const intl = tmp(1236).intl;
  const t = tmp(1236).t;
  obj[4] = intl.string(canGoBackResult ? t["13/7kX"] : t.cpT0Cq);
  return jsx(IconButton.IconButton, { size: "sm", variant: "secondary-overlay", icon: importDefault(canGoBackResult ? 5468 : 5520), onPress: onPress.onPress, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 });
};
export const BACK_BUTTON_SIZE = 32;