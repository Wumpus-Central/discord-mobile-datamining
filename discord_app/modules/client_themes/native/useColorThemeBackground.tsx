// discord_app/modules/client_themes/native/useColorThemeBackground.tsx
import noop from "noop";
import handleThemeChange from "handleThemeChange";
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { getCustomThemesName } from "MobileThemesUtils.tsx";

let require = arg1;
function getGuildThemeName() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.CFzDOG);
}
const result = require("isSyncedModeThemesEnabled").fileFinishedImporting("modules/client_themes/native/useColorThemeBackground.tsx");

export default function useColorThemeBackground() {
  const tmp = stateFromStores(4151)();
  const require = tmp;
  let items = [handleThemeChange];
  stateFromStores = defaultAreStatesEqual.useStateFromStores(items, () => theme.theme);
  let obj = defaultAreStatesEqual;
  const items1 = [isSyncedModeThemesEnabled];
  const stateFromStores1 = defaultAreStatesEqual.useStateFromStores(items1, () => gradientPreset.gradientPreset);
  const obj2 = defaultAreStatesEqual;
  const items2 = [tmp, stateFromStores];
  const customBackgroundGradient = getCustomThemesName.useCustomBackgroundGradient();
  let memo = React.useMemo(() => {
    let colors;
    let tmp3 = null;
    if (null != tmp) {
      if ("custom" === tmp.type) {
        const customUserThemeSettings = tmp.customUserThemeSettings;
        let obj = { type: null, getName: null, theme: null, customThemeSettings: null };
        obj[0] = tmp(outer1_2[4]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT;
        obj[1] = outer1_6;
        obj[2] = tmp2;
        obj = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
        const items = [];
        HermesBuiltin.arraySpread(tmp(outer1_2[5]).getSingleColorGuildThemeGradientColors(customUserThemeSettings.colors[0], tmp2), 0);
        obj[0] = items;
        obj[1] = [];
        let num2 = customUserThemeSettings.gradientAngle;
        if (num2 == null) {
          num2 = 0;
        }
        obj[2] = num2;
        let GUILD_THEME_DEFAULT_BASE_MIX = customUserThemeSettings.baseMix;
        if (GUILD_THEME_DEFAULT_BASE_MIX == null) {
          GUILD_THEME_DEFAULT_BASE_MIX = tmp(outer1_2[5]).GUILD_THEME_DEFAULT_BASE_MIX;
        }
        obj[3] = GUILD_THEME_DEFAULT_BASE_MIX;
        obj[3] = obj;
        tmp3 = obj;
        const obj3 = tmp(outer1_2[5]);
      } else {
        const guildThemePresetAppearance = tmp(outer1_2[5]).getGuildThemePresetAppearance(tmp.preset, tmp2);
        obj = { type: null, getName: null, theme: null, customThemeSettings: null };
        obj[0] = tmp(outer1_2[4]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT;
        obj[1] = outer1_6;
        obj[2] = tmp2;
        const obj1 = { colors: null, gradientAngle: null, gradientColorStops: null, baseMix: null };
        colors = guildThemePresetAppearance.colors;
        obj1[0] = colors.map((hex) => hex.hex);
        ({ angle: obj6[1], colors } = guildThemePresetAppearance);
        obj1[2] = colors.map((stop) => stop.stop);
        obj1[3] = guildThemePresetAppearance.baseMix;
        obj[3] = obj1;
        tmp3 = obj;
        const obj4 = tmp(outer1_2[5]);
      }
    }
    return tmp3;
  }, items2);
  if (memo == null) {
    memo = customBackgroundGradient;
  }
  if (memo == null) {
    memo = stateFromStores1;
  }
  return memo;
};