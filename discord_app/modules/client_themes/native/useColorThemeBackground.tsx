// discord_app/modules/client_themes/native/useColorThemeBackground.tsx
import getSystemLocale from "../../../intl/index.native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../user_settings/ThemeStore.tsx";
import closure_5 from "../ClientThemesBackgroundStore.tsx";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";

require = arg1;
function getGuildThemeName() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.CFzDOG);
}
const result = require("set").fileFinishedImporting("modules/client_themes/native/useColorThemeBackground.tsx");

export default function useColorThemeBackground() {
  const tmp = stateFromStores(4297)();
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
      if ("custom" === tmp.type) {
        const customUserThemeSettings = tmp.customUserThemeSettings;
        let obj = { type: null, getName: null, theme: null, customThemeSettings: null };
        obj[0] = callback(closure_1_2[4]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT;
        obj[1] = closure_1_6;
        obj[2] = tmp2;
        obj = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
        const items = [];
        HermesBuiltin.arraySpread(callback(closure_1_2[5]).getSingleColorGuildThemeGradientColors(customUserThemeSettings.colors[0], tmp2), 0);
        obj[0] = items;
        obj[1] = [];
        let num2 = customUserThemeSettings.gradientAngle;
        if (num2 == null) {
          num2 = 0;
        }
        obj[2] = num2;
        let GUILD_THEME_DEFAULT_BASE_MIX = customUserThemeSettings.baseMix;
        if (GUILD_THEME_DEFAULT_BASE_MIX == null) {
          GUILD_THEME_DEFAULT_BASE_MIX = callback(closure_1_2[5]).GUILD_THEME_DEFAULT_BASE_MIX;
        }
        obj[3] = GUILD_THEME_DEFAULT_BASE_MIX;
        obj[3] = obj;
        tmp3 = obj;
        const obj3 = callback(closure_1_2[5]);
      } else {
        const guildThemePresetAppearance = callback(closure_1_2[5]).getGuildThemePresetAppearance(tmp.preset, tmp2);
        obj = { type: null, getName: null, theme: null, customThemeSettings: null };
        obj[0] = callback(closure_1_2[4]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT;
        obj[1] = closure_1_6;
        obj[2] = tmp2;
        obj1 = { colors: null, gradientAngle: null, gradientColorStops: null, baseMix: null };
        colors = guildThemePresetAppearance.colors;
        obj1[0] = colors.map((hex) => hex.hex);
        ({ angle: obj6[1], colors } = guildThemePresetAppearance);
        obj1[2] = colors.map((stop) => stop.stop);
        obj1[3] = guildThemePresetAppearance.baseMix;
        obj[3] = obj1;
        tmp3 = obj;
        const obj4 = callback(closure_1_2[5]);
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