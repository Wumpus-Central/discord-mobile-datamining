// === Module 12131: AppLauncherBackButton ===

// Module 12131 (AppLauncherBackButton)
import util from "util" /* 1114 */;
import Link from "Link" /* 1484 */;
import IconButton from "IconButton" /* 8097 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherBackButton.tsx");

export default function AppLauncherBackButton(onPress) {
  let obj = Link;
  const navigation = obj.useNavigation();
  const canGoBackResult = navigation.canGoBack();
  obj = { size: "sm", variant: "secondary-overlay", icon: importDefault(canGoBackResult ? 5629 : 5681), onPress: onPress.onPress, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 };
  const intl = util.intl;
  const t = util.t;
  obj.accessibilityLabel = intl.string(canGoBackResult ? t["13/7kX"] : t.cpT0Cq);
  return jsx(IconButton.IconButton, { size: "sm", variant: "secondary-overlay", icon: importDefault(canGoBackResult ? 5629 : 5681), onPress: onPress.onPress, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 });
};
export const BACK_BUTTON_SIZE = 32;