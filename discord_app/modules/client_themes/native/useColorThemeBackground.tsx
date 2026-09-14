// === Module 4490: useColorThemeBackground ===

// Module 4490 (useColorThemeBackground)
import util from "util" /* 1114 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1229 */;
import GuildThemePresets from "GuildThemePresets" /* 4491 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1181 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4456 */;

const require = globalThis.__r;

require = fn;
function getGuildThemeName() {
  const intl = util.intl;
  return intl.string(util.t.CFzDOG);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/client_themes/native/useColorThemeBackground.tsx");

export default function useColorThemeBackground() {
  const tmp = stateFromStores(4493)();
  _require = tmp;
  let items = [ThemeStore];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => theme.theme);
  let obj = require("useStateFromStores");
  const items1 = [ClientThemesBackgroundStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => gradientPreset.gradientPreset);
  let obj2 = require("useStateFromStores");
  const items2 = [tmp, stateFromStores];
  const customBackgroundGradient = require("MobileThemesUtils").useCustomBackgroundGradient();
  let memo = noop.useMemo(() => {
    let tmp3 = null;
    if (null != closure_0) {
      if ("custom" === closure_0.type) {
        const customUserThemeSettings = closure_0.customUserThemeSettings;
        const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getGuildThemeName, theme: stateFromStores, customThemeSettings: null };
        const obj2 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
        const items = [];
        HermesBuiltin.arraySpread(GuildThemePresets.getSingleColorGuildThemeGradientColors(customUserThemeSettings.colors[0], stateFromStores), 0);
        obj2.colors = items;
        obj2.gradientColorStops = [];
        let num2 = customUserThemeSettings.gradientAngle;
        if (num2 == null) {
          num2 = 0;
        }
        obj2.gradientAngle = num2;
        let GUILD_THEME_DEFAULT_BASE_MIX = customUserThemeSettings.baseMix;
        if (GUILD_THEME_DEFAULT_BASE_MIX == null) {
          GUILD_THEME_DEFAULT_BASE_MIX = GuildThemePresets.GUILD_THEME_DEFAULT_BASE_MIX;
        }
        obj2.baseMix = GUILD_THEME_DEFAULT_BASE_MIX;
        obj.customThemeSettings = obj2;
        tmp3 = obj;
      } else {
        const guildThemePresetAppearance = GuildThemePresets.getGuildThemePresetAppearance(closure_0.preset, stateFromStores);
        const obj5 = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getGuildThemeName, theme: stateFromStores, customThemeSettings: null };
        const obj9 = { colors: null, gradientAngle: null, gradientColorStops: null, baseMix: null };
        const colors1 = guildThemePresetAppearance.colors;
        obj9.colors = colors1.map((hex) => hex.hex);
        ({ angle: obj6.gradientAngle, colors } = guildThemePresetAppearance);
        obj9.gradientColorStops = colors.map((stop) => stop.stop);
        obj9.baseMix = guildThemePresetAppearance.baseMix;
        obj5.customThemeSettings = obj9;
        tmp3 = obj5;
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