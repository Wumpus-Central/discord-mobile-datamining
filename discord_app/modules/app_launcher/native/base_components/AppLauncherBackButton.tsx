// discord_app/modules/app_launcher/native/base_components/AppLauncherBackButton.tsx
import Link from "../../../../../_runtime/01484_Link.js";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherBackButton.tsx");

export default function AppLauncherBackButton(onPress) {
  let obj = Link;
  const navigation = obj.useNavigation();
  const canGoBackResult = navigation.canGoBack();
  obj = {
    size: "sm",
    variant: "secondary-overlay",
    icon: importDefault(canGoBackResult ? 5629 : 5681),
    onPress: onPress.onPress,
    accessibilityLabel: null,
    maxFontSizeMultiplier: 1.5,
  };
  const intl = tmp(1114).intl;
  const t = tmp(1114).t;
  obj.accessibilityLabel = intl.string(canGoBackResult ? t["13/7kX"] : t.cpT0Cq);
  return jsx(IconButton.IconButton, {
    size: "sm",
    variant: "secondary-overlay",
    icon: importDefault(canGoBackResult ? 5629 : 5681),
    onPress: onPress.onPress,
    accessibilityLabel: null,
    maxFontSizeMultiplier: 1.5,
  });
}
export const BACK_BUTTON_SIZE = 32;
