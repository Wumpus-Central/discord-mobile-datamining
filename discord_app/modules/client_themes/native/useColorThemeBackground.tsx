// discord_app/modules/client_themes/native/useColorThemeBackground.tsx
import util from "../../../intl/index.native.tsx";
import ClientThemesTypes from "../ClientThemesTypes.tsx";
import GuildThemePresets from "../../guild_themes/GuildThemePresets.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import ClientThemesBackgroundStore from "../ClientThemesBackgroundStore.tsx";

require = fn;
function getGuildThemeName() {
  const intl = util.intl;
  return intl.string(util.t.CFzDOG);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/client_themes/native/useColorThemeBackground.tsx");

export default function useColorThemeBackground() {
  const tmp = stateFromStores(4416)();
  _require = tmp;
  let items = [ThemeStore];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => theme.theme);
  let obj = require("useStateFromStores");
  const items1 = [ClientThemesBackgroundStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(
    items1,
    () => gradientPreset.gradientPreset,
  );
  const obj2 = require("useStateFromStores");
  const items2 = [tmp, stateFromStores];
  const customBackgroundGradient = require("MobileThemesUtils").useCustomBackgroundGradient();
  let memo = noop.useMemo(() => {
    let tmp3 = null;
    if (null != closure_0) {
      if ("custom" === tmp.type) {
        const customUserThemeSettings = tmp.customUserThemeSettings;
        let obj = {
          type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT,
          getName: getGuildThemeName,
          theme: tmp2,
          customThemeSettings: null,
        };
        obj = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
        const items = [];
        HermesBuiltin.arraySpread(
          GuildThemePresets.getSingleColorGuildThemeGradientColors(customUserThemeSettings.colors[0], tmp2),
          0,
        );
        obj.colors = items;
        obj.gradientColorStops = [];
        let num2 = customUserThemeSettings.gradientAngle;
        if (num2 == null) {
          num2 = 0;
        }
        obj.gradientAngle = num2;
        let GUILD_THEME_DEFAULT_BASE_MIX = customUserThemeSettings.baseMix;
        if (GUILD_THEME_DEFAULT_BASE_MIX == null) {
          GUILD_THEME_DEFAULT_BASE_MIX = GuildThemePresets.GUILD_THEME_DEFAULT_BASE_MIX;
        }
        obj.baseMix = GUILD_THEME_DEFAULT_BASE_MIX;
        obj.customThemeSettings = obj;
        tmp3 = obj;
      } else {
        const guildThemePresetAppearance = GuildThemePresets.getGuildThemePresetAppearance(tmp.preset, tmp2);
        obj = {
          type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT,
          getName: getGuildThemeName,
          theme: tmp2,
          customThemeSettings: null,
        };
        const obj1 = { colors: null, gradientAngle: null, gradientColorStops: null, baseMix: null };
        colors = guildThemePresetAppearance.colors;
        obj1.colors = colors.map((hex) => hex.hex);
        ({ angle: obj6.gradientAngle, colors } = guildThemePresetAppearance);
        obj1.gradientColorStops = colors.map((stop) => stop.stop);
        obj1.baseMix = guildThemePresetAppearance.baseMix;
        obj.customThemeSettings = obj1;
        tmp3 = obj;
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
}
