import noop from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import handleThemeChange from "handleThemeChange";
import { ThemeTypes } from "sum";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("handleThemeChange").fileFinishedImporting("modules/themes/RootThemeContextProvider.native.tsx");

export const RootThemeContextProvider = function RootThemeContextProvider(children) {
  let contrast;
  let saturation;
  let enabled;
  let chatInputFloating;
  let chatInputLegacySendButton;
  let manaTypeConsolidationExperiment;
  let obj = enabled(chatInputLegacySendButton[5]);
  let items = [maybeApplyNoTextColorForLightCustomTheme, handleThemeChange];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ saturation: maybeApplyNoTextColorForLightCustomTheme.saturation, contrast: maybeApplyNoTextColorForLightCustomTheme.contrast, theme: theme.theme }));
  ({ saturation, contrast } = stateFromStoresObject);
  const tmp4 = chatInputFloating(chatInputLegacySendButton[6])();
  const mobileVisualRefreshConfig = enabled(chatInputLegacySendButton[7]).useMobileVisualRefreshConfig({ location: "RootThemeContextProvider" });
  enabled = mobileVisualRefreshConfig.enabled;
  chatInputFloating = mobileVisualRefreshConfig.chatInputFloating;
  chatInputLegacySendButton = mobileVisualRefreshConfig.chatInputLegacySendButton;
  const obj2 = enabled(chatInputLegacySendButton[7]);
  manaTypeConsolidationExperiment = enabled(chatInputLegacySendButton[8]).useManaTypeConsolidationExperiment("RootThemeContextProvider");
  const items1 = [enabled, chatInputFloating, chatInputLegacySendButton, manaTypeConsolidationExperiment];
  if (null == tmp4) {
    let num2 = 0;
    if (1 !== saturation) {
      let tmpResult = tmp(tmp2[9]);
      num2 = tmpResult.setThemeFlag(0, tmp(tmp2[9]).ThemeContextFlags.REDUCE_SATURATION_ENABLED);
    }
    if (1 === contrast) {
      obj = { theme: null, flags: null, saturation: null, contrast: null, enabledExperiments: null, children: null };
      obj[0] = stateFromStoresObject.theme;
      obj[1] = num2;
      obj[2] = saturation;
      obj[3] = contrast;
      obj[4] = tmp7;
      obj[5] = children.children;
      return jsx(tmp(tmp2[10]).RootThemeContextProvider, { theme: null, flags: null, saturation: null, contrast: null, enabledExperiments: null, children: null });
    } else {
      tmpResult = tmp(tmp2[9]);
      if (contrast > 1) {
        let REDUCED_CONTRAST_ENABLED = tmp(tmp2[9]).ThemeContextFlags.INCREASED_CONTRAST_ENABLED;
      } else {
        REDUCED_CONTRAST_ENABLED = tmp(tmp2[9]).ThemeContextFlags.REDUCED_CONTRAST_ENABLED;
      }
      tmpResult.setThemeFlag(num2, REDUCED_CONTRAST_ENABLED);
    }
  } else if (tmp4.theme === ThemeTypes.LIGHT) {
    let setThemeFlagResult1 = tmp(tmp2[9]).setThemeFlag(0, tmp(tmp2[9]).ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
    const tmpResult1 = tmp(tmp2[9]);
  } else {
    setThemeFlagResult1 = tmp(tmp2[9]).setThemeFlag(0, tmp(tmp2[9]).ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
    const tmpResult2 = tmp(tmp2[9]);
  }
};