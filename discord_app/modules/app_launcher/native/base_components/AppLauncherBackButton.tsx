// === Module 11755: AppLauncherBackButton ===

// Module 11755 (AppLauncherBackButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import Link from "Link" /* 1491 */;
import IconButton2 from "IconButton" /* 7575 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation, onPress;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  let tmp4;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(8);
  onPress = onPress.onPress;
  const obj2 = Link;
  navigation = obj2.useNavigation();
  if (cResult[0] !== navigation) {
    const canGoBackResult = navigation.canGoBack();
    cResult[0] = navigation;
    cResult[1] = canGoBackResult;
    tmp4 = canGoBackResult;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = importDefault(tmp4 ? 6015 : 6018);
  if (cResult[2] !== tmp4) {
    const intl = intl2.intl;
    const string = intl.string;
    const t = intl2.t;
    const stringResult = string(tmp4 ? t["13/7kX"] : t.cpT0Cq);
    cResult[2] = tmp4;
    cResult[3] = stringResult;
    tmp7 = stringResult;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === onPress) {
    if (cResult[5] === tmp6) {
      let tmp9;
      if (cResult[6] === tmp7) {
        tmp9 = cResult[7];
      }
      return tmp9;
    }
  }
  const tmp10 = jsx(IconButton2.IconButton, { size: "sm", variant: "secondary-overlay", icon: tmp6, onPress, accessibilityLabel: tmp7, maxFontSizeMultiplier: 1.5 });
  cResult[4] = onPress;
  cResult[5] = tmp6;
  cResult[6] = tmp7;
  cResult[7] = tmp10;
  tmp9 = tmp10;
}) : ((onPress) => {
  onPress = onPress.onPress;
  const obj = Link;
  navigation = obj.useNavigation();
  const canGoBackResult = navigation.canGoBack();
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  const string = intl.string;
  const t = intl2.t;
  return <IconButton size="sm" variant="secondary-overlay" icon={importDefault(canGoBackResult ? 6015 : 6018)} onPress={onPress} accessibilityLabel={string(canGoBackResult ? t["13/7kX"] : t.cpT0Cq)} maxFontSizeMultiplier={1.5} />;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherBackButton.tsx");

export default tmp3;
export const BACK_BUTTON_SIZE = 32;