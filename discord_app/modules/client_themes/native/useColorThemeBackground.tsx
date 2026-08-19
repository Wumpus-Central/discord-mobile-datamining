// discord_app/modules/client_themes/native/useColorThemeBackground.tsx
import getSystemLocale from "../../../intl/index.native.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import handleThemeChange from "../../user_settings/ThemeStore.tsx";
import isSyncedModeThemesEnabled from "../ClientThemesBackgroundStore.tsx";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";

require = fn;
function getGuildThemeName() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.CFzDOG);
}
const result = require("obj132").fileFinishedImporting("modules/client_themes/native/useColorThemeBackground.tsx");

export default function useColorThemeBackground() {
  const tmp = stateFromStores(4228)();
  const _require = tmp;
  let items = [closure_4];
  stateFromStores = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => theme.theme);
  let obj = defaultAreStatesEqual;
  const items1 = [closure_5];
  const stateFromStores1 = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items1, () => gradientPreset.gradientPreset);
  const obj2 = defaultAreStatesEqual;
  const items2 = [tmp, stateFromStores];
  const customBackgroundGradient = require("MobileThemesUtils.tsx").useCustomBackgroundGradient();
  let memo = React.useMemo(() => {
    let tmp3 = null;
    if (null != callback) {
      if ("custom" === callback.type) {
        const customUserThemeSettings = callback.customUserThemeSettings;
        let obj = { type: null, getName: null, theme: null, customThemeSettings: null };
        obj[0] = callback(dependencyMap[4]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT;
        obj[1] = getGuildThemeName;
        obj[2] = stateFromStores;
        obj = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
        const items = [];
        HermesBuiltin.arraySpread(callback(dependencyMap[5]).getSingleColorGuildThemeGradientColors(customUserThemeSettings.colors[0], stateFromStores), 0);
        obj[0] = items;
        obj[1] = [];
        let num2 = customUserThemeSettings.gradientAngle;
        if (num2 == null) {
          num2 = 0;
        }
        obj[2] = num2;
        let GUILD_THEME_DEFAULT_BASE_MIX = customUserThemeSettings.baseMix;
        if (GUILD_THEME_DEFAULT_BASE_MIX == null) {
          GUILD_THEME_DEFAULT_BASE_MIX = callback(dependencyMap[5]).GUILD_THEME_DEFAULT_BASE_MIX;
        }
        obj[3] = GUILD_THEME_DEFAULT_BASE_MIX;
        obj[3] = obj;
        tmp3 = obj;
        const obj3 = callback(dependencyMap[5]);
      } else {
        const guildThemePresetAppearance = callback(dependencyMap[5]).getGuildThemePresetAppearance(callback.preset, stateFromStores);
        obj = { type: null, getName: null, theme: null, customThemeSettings: null };
        obj[0] = callback(dependencyMap[4]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT;
        obj[1] = getGuildThemeName;
        obj[2] = stateFromStores;
        obj1 = { colors: null, gradientAngle: null, gradientColorStops: null, baseMix: null };
        colors = guildThemePresetAppearance.colors;
        obj1[0] = colors.map((item, index) => item.hex);
        ({ angle: obj6[1], colors } = guildThemePresetAppearance);
        obj1[2] = colors.map((item, index) => item.stop);
        obj1[3] = guildThemePresetAppearance.baseMix;
        obj[3] = obj1;
        tmp3 = obj;
        const obj4 = callback(dependencyMap[5]);
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