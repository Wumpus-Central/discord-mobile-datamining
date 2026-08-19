// === Module 4225: getGuildThemeName ===

// Module 4225 (getGuildThemeName)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import noop from "noop" /* 19 */;
import handleThemeChange from "handleThemeChange" /* 1302 */;
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled" /* 4195 */;

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
  stateFromStores = _require(647).useStateFromStores(items, () => theme.theme);
  let obj = _require(647);
  const items1 = [closure_5];
  const stateFromStores1 = _require(647).useStateFromStores(items1, () => gradientPreset.gradientPreset);
  const obj2 = _require(647);
  const items2 = [tmp, stateFromStores];
  const customBackgroundGradient = _require(4307).useCustomBackgroundGradient();
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