// === Module 11599: AppLauncherBackButton ===

// Module 11599 (AppLauncherBackButton)
import util from "util" /* 1115 */;
import Link from "Link" /* 1485 */;
import IconButton from "IconButton" /* 7358 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherBackButton.tsx");

export default function AppLauncherBackButton(onPress) {
  const navigation = Link.useNavigation();
  const canGoBackResult = navigation.canGoBack();
  const obj2 = { size: "sm", variant: "secondary-overlay", icon: importDefault(canGoBackResult ? 5936 : 5988), onPress: onPress.onPress, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 };
  const intl = util.intl;
  const t = util.t;
  obj2.accessibilityLabel = intl.string(canGoBackResult ? t["13/7kX"] : t.cpT0Cq);
  return jsx(IconButton.IconButton, { size: "sm", variant: "secondary-overlay", icon: importDefault(canGoBackResult ? 5936 : 5988), onPress: onPress.onPress, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 });
};
export const BACK_BUTTON_SIZE = 32;