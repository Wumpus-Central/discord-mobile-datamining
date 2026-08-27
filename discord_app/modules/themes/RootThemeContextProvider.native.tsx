// === Module 14137: RootThemeContextProvider ===

// Module 14137 (RootThemeContextProvider)
import closure_3 from "noop" /* 19 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4437 */;
import closure_5 from "handleThemeChange" /* 1302 */;
import { ThemeTypes } from "sum" /* 505 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/themes/RootThemeContextProvider.native.tsx");

export const RootThemeContextProvider = function RootThemeContextProvider(children) {
  let enabled;
  let chatInputFloating;
  let chatInputLegacySendButton;
  let manaTypeConsolidationExperiment;
  let obj = enabled(chatInputLegacySendButton[5]);
  let items = [closure_4, closure_5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ saturation: closure_4.saturation, contrast: closure_4.contrast, theme: theme.theme }));
  ({ saturation, contrast } = stateFromStoresObject);
  const tmp4 = chatInputFloating(chatInputLegacySendButton[6])();
  const mobileVisualRefreshConfig = enabled(chatInputLegacySendButton[7]).useMobileVisualRefreshConfig({ location: "RootThemeContextProvider" });
  enabled = mobileVisualRefreshConfig.enabled;
  chatInputFloating = mobileVisualRefreshConfig.chatInputFloating;
  chatInputLegacySendButton = mobileVisualRefreshConfig.chatInputLegacySendButton;
  const obj2 = enabled(chatInputLegacySendButton[7]);
  manaTypeConsolidationExperiment = enabled(chatInputLegacySendButton[8]).useManaTypeConsolidationExperiment("RootThemeContextProvider");
  const obj3 = enabled(chatInputLegacySendButton[8]);
  const items1 = [enabled, chatInputFloating, chatInputLegacySendButton, manaTypeConsolidationExperiment];
  const plainTextExperiment = enabled(chatInputLegacySendButton[9]).usePlainTextExperiment("RootThemeContextProvider");
  if (null == tmp4) {
    let num2 = 0;
    if (1 !== saturation) {
      let tmpResult = tmp(tmp2[10]);
      num2 = tmpResult.setThemeFlag(0, tmp(tmp2[10]).ThemeContextFlags.REDUCE_SATURATION_ENABLED);
    }
    if (1 === contrast) {
      obj = { theme: null, flags: null, saturation: null, contrast: null, enabledExperiments: null, children: null };
      obj[0] = stateFromStoresObject.theme;
      obj[1] = num2;
      obj[2] = saturation;
      obj[3] = contrast;
      obj[4] = tmp8;
      obj = { enabled: null, children: null };
      obj[0] = plainTextExperiment;
      obj[1] = children.children;
      obj[5] = jsx(tmp(tmp2[12]).PlainTextExperimentProvider, { enabled: null, children: null });
      return jsx(tmp(tmp2[11]).RootThemeContextProvider, { enabled: null, children: null });
    } else {
      tmpResult = tmp(tmp2[10]);
      if (contrast > 1) {
        let REDUCED_CONTRAST_ENABLED = tmp(tmp2[10]).ThemeContextFlags.INCREASED_CONTRAST_ENABLED;
      } else {
        REDUCED_CONTRAST_ENABLED = tmp(tmp2[10]).ThemeContextFlags.REDUCED_CONTRAST_ENABLED;
      }
      tmpResult.setThemeFlag(num2, REDUCED_CONTRAST_ENABLED);
    }
  } else if (tmp4.theme === ThemeTypes.LIGHT) {
    let setThemeFlagResult1 = tmp(tmp2[10]).setThemeFlag(0, tmp(tmp2[10]).ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
    const tmpResult1 = tmp(tmp2[10]);
  } else {
    setThemeFlagResult1 = tmp(tmp2[10]).setThemeFlag(0, tmp(tmp2[10]).ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
    const tmpResult2 = tmp(tmp2[10]);
  }
};