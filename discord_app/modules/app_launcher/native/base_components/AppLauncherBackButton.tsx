// === Module 11836: AppLauncherBackButton ===

// Module 11836 (AppLauncherBackButton)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Link from "Link" /* 1503 */;
import IconButton from "IconButton" /* 8106 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherBackButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherBackButton(onPress) {
  const cResult = c.c(8);
  onPress = onPress.onPress;
  const navigation = Link.useNavigation();
  if (cResult[0] !== navigation) {
    const canGoBackResult = navigation.canGoBack();
    cResult[0] = navigation;
    cResult[1] = canGoBackResult;
    let tmp4 = canGoBackResult;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = importDefault(tmp4 ? 6208 : 6211);
  if (cResult[2] !== tmp4) {
    const intl = util.intl;
    const t = util.t;
    const stringResult = intl.string(tmp4 ? t["13/7kX"] : t.cpT0Cq);
    cResult[2] = tmp4;
    cResult[3] = stringResult;
  } else {
    if (cResult[4] === onPress) {
      if (cResult[5] === tmp6) {
        if (cResult[6] === tmp7) {
          let tmp10 = cResult[7];
        }
        return tmp10;
      }
    }
    const obj3 = { size: "sm", variant: "secondary-overlay", icon: tmp6, onPress, accessibilityLabel: cResult[3], maxFontSizeMultiplier: 1.5 };
    const tmp12 = jsx(IconButton.IconButton, { size: "sm", variant: "secondary-overlay", icon: tmp6, onPress, accessibilityLabel: cResult[3], maxFontSizeMultiplier: 1.5 });
    cResult[4] = onPress;
    cResult[5] = tmp6;
    cResult[6] = cResult[3];
    cResult[7] = tmp12;
    tmp10 = tmp12;
  }
}) : (function AppLauncherBackButton(onPress) {
  const navigation = Link.useNavigation();
  const canGoBackResult = navigation.canGoBack();
  const obj2 = { size: "sm", variant: "secondary-overlay", icon: importDefault(canGoBackResult ? 6208 : 6211), onPress: onPress.onPress, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 };
  const intl = util.intl;
  const t = util.t;
  obj2.accessibilityLabel = intl.string(canGoBackResult ? t["13/7kX"] : t.cpT0Cq);
  return jsx(IconButton.IconButton, { size: "sm", variant: "secondary-overlay", icon: importDefault(canGoBackResult ? 6208 : 6211), onPress: onPress.onPress, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 });
});
export const BACK_BUTTON_SIZE = 32;