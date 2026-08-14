// discord_app/modules/app_launcher/native/base_components/AppLauncherBackButton.tsx
import "noop";
import { jsx } from "jsxProd";
import { createStandardNavigationFactories } from "../../../../../_runtime/01500_createStandardNavigationFactories.js";
import { IconButton } from "../../../../design/components/Button/native/IconButton.native.tsx";

const require = arg1;
const result = require("createStandardNavigationFactories").fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherBackButton.tsx");

export default function AppLauncherBackButton(onPress) {
  let obj = createStandardNavigationFactories;
  const navigation = obj.useNavigation();
  const canGoBackResult = navigation.canGoBack();
  obj = { size: "sm", variant: "secondary-overlay", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 };
  obj[2] = importDefault(canGoBackResult ? 5336 : 5388);
  obj[3] = onPress.onPress;
  const intl = tmp(1236).intl;
  const t = tmp(1236).t;
  obj[4] = intl.string(canGoBackResult ? t["13/7kX"] : t.cpT0Cq);
  return jsx(IconButton.IconButton, { size: "sm", variant: "secondary-overlay", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 });
};
export const BACK_BUTTON_SIZE = 32;